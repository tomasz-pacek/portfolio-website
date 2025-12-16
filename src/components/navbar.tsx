//TODO: lenis scroll into about etc.

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-100 flex w-screen items-center justify-center py-6">
      <div className="text-foreground flex items-center justify-center gap-6 rounded-md bg-black/60 px-5 py-3 text-base font-medium">
        <Link href={"/#about"} className="animated-border-bottom">
          About
        </Link>
        <Link href={"/#projects"} className="animated-border-bottom">
          Projects
        </Link>
        <Link href={"/#resume"} className="animated-border-bottom">
          Resume
        </Link>
        <Link href={"/#contact"} className="animated-border-bottom">
          Contact
        </Link>
      </div>
    </nav>
  );
}

//animated border bottom comes from @layer utiLinkties in global.css
