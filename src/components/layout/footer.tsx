import { BlogrLogo } from "@/components/icons";
import { navGroups } from "@/data";
import Link from "next/link";
import Attribution from "./attribution";

export default function Footer() {
  return (
    <footer className="v-on-dark bg-midnight rounded-tr-band font-ui relative py-18.75 text-white lg:py-17.5">
      <div className="v-shell text-center lg:flex lg:justify-between lg:text-left">
        <Link
          href="/"
          aria-label="Blogr home"
          className="v-focus-ring mx-auto block w-fit lg:mx-0"
        >
          <BlogrLogo className="block h-10 w-auto" />
        </Link>

        <nav
          aria-label="Footer"
          className="text-sitemap lg:text-sitemap-lg mt-18 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-7.5"
        >
          {navGroups.map(({ id, label, links }) => (
            <div key={id} className="lg:w-63.75">
              <h2 className="font-medium">{label}</h2>
              <ul className="mt-5.25">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="v-focus-ring text-white/75 decoration-2 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <Attribution />
    </footer>
  );
}
