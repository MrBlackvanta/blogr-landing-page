import { BlogrLogo } from "@/components/icons";
import Link from "next/link";
import MainNav from "./main-nav";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-14 lg:pt-15">
      <div className="v-shell flex items-center">
        <Link
          href="/"
          aria-label="Blogr home"
          className="v-focus-ring v-on-dark"
        >
          <BlogrLogo className="h-8 w-auto text-white lg:h-10" />
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
