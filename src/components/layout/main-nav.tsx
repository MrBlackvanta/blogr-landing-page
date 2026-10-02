"use client";

import { ChevronIcon } from "@/components/icons";
import { PillButton } from "@/components/ui";
import { navGroups } from "@/data";
import { useEffect, useRef, useState } from "react";

const barClasses =
  "h-0.5 w-8 shrink-0 rounded-full bg-white transition duration-200";

const panelLinkClasses =
  "v-focus-ring text-lead text-ink lg:v-on-dark lg:font-ui lg:text-nav font-semibold lg:font-bold lg:hover:text-white";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const groupToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (navRef.current?.contains(event.target as Node)) return;
      setMenuOpen(false);
      setOpenGroup(null);
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  const closeInnermost = () => {
    if (openGroup) {
      setOpenGroup(null);
      groupToggleRef.current?.focus();
      return;
    }
    setMenuOpen(false);
    menuToggleRef.current?.focus();
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeInnermost();
      }}
      className="ml-auto lg:ml-16 lg:flex lg:flex-1 lg:items-center"
    >
      <button
        ref={menuToggleRef}
        type="button"
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="v-focus-ring v-on-dark -m-2 box-content flex h-4.5 w-8 flex-col justify-between p-2 lg:hidden"
      >
        <span
          className={`${barClasses} ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`${barClasses} ${menuOpen ? "opacity-0" : ""}`} />
        <span
          className={`${barClasses} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      <ul
        id="main-menu"
        className={`rounded-panel shadow-panel absolute inset-x-6 top-full mt-9 flex origin-top flex-col gap-6 bg-white px-6 pt-6 pb-8 transition-[opacity,transform,visibility] duration-200 lg:visible lg:static lg:mt-0 lg:w-full lg:scale-100 lg:flex-row lg:items-center lg:gap-8 lg:rounded-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
          menuOpen
            ? "visible scale-100 opacity-100"
            : "invisible scale-98 opacity-0"
        }`}
      >
        {navGroups.map((group) => {
          const groupOpen = openGroup === group.id;

          return (
            <li key={group.id} className="lg:relative">
              <button
                type="button"
                aria-expanded={groupOpen}
                aria-controls={`${group.id}-menu`}
                onClick={(event) => {
                  groupToggleRef.current = event.currentTarget;
                  setOpenGroup(groupOpen ? null : group.id);
                }}
                className={`${panelLinkClasses} flex w-full items-center justify-center gap-2 lg:w-auto ${
                  groupOpen ? "lg:text-white" : "lg:text-white/75"
                }`}
              >
                {group.label}
                <ChevronIcon
                  className={`text-brand-soft w-2.5 transition-transform duration-150 lg:text-white ${
                    groupOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[height,visibility] duration-200 lg:absolute lg:top-full lg:-left-6 lg:z-10 lg:h-auto lg:overflow-visible ${
                  groupOpen ? "visible h-auto" : "invisible h-0"
                }`}
              >
                <ul
                  id={`${group.id}-menu`}
                  className={`rounded-panel bg-dusk-from/8 lg:shadow-panel mt-6 flex flex-col gap-3 px-6 pt-4 pb-6 text-center transition-[opacity,transform] duration-200 lg:mt-7 lg:w-42 lg:gap-0 lg:bg-white lg:p-6 lg:text-left lg:duration-150 ${
                    groupOpen
                      ? "opacity-100 lg:translate-y-0"
                      : "opacity-0 lg:-translate-y-1"
                  }`}
                >
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="v-focus-ring text-submenu text-ink/75 lg:font-ui lg:text-sitemap-lg lg:text-dusk-from font-semibold underline-offset-4 hover:underline lg:font-normal"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}

        <li className="border-hairline flex flex-col items-center gap-6 border-t pt-6 lg:ml-auto lg:flex-row lg:gap-8 lg:border-0 lg:pt-0">
          <a href="#" className={`${panelLinkClasses} lg:text-white/75`}>
            Login
          </a>
          <PillButton
            variant="brand"
            className="lg:v-on-dark lg:text-brand lg:hover:bg-brand lg:bg-white lg:hover:text-white"
          >
            Sign Up
          </PillButton>
        </li>
      </ul>
    </nav>
  );
}
