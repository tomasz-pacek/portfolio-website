"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" },
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed z-100 flex w-screen items-center justify-center py-6"
    >
      <div className="text-foreground flex items-center justify-center gap-6 rounded-md bg-black/60 px-5 py-2 text-base font-medium">
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
