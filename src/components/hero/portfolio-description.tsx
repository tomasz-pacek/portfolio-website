"use client";

import SplitText from "@/components/SplitText";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { JetBrains_Mono } from "next/font/google";
import gsap from "gsap";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function PortfolioDescription() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" },
      );
    }

    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, delay: 0.65, ease: "power3.out" },
      );
    }

    if (socialsRef.current) {
      gsap.fromTo(
        socialsRef.current,
        { opacity: 0, y: 90 },
        { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" },
      );
    }
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl p-12">
      <SplitText
        text="Tomasz Pacek"
        delay={50}
        ease={"elastic.out(1, 0.6)"}
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        duration={2}
        className="text-shadow-foreground text-6xl tracking-tight whitespace-nowrap select-none text-shadow-md max-sm:text-4xl"
      />
      <SplitText
        text="Full-Stack Developer"
        delay={50}
        ease={"elastic.out(1, 0.6)"}
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        duration={2}
        className="text-shadow-foreground text-6xl tracking-tight whitespace-nowrap select-none text-shadow-md max-sm:text-4xl"
      />
      <p
        ref={paragraphRef}
        className={`text-muted-foreground text-center max-sm:text-sm ${jetBrainsMono.className}`}
      >
        Building modern web experiences with Next.js
      </p>
      {/* BUTTONS */}
      <div ref={buttonsRef} className="flex items-center justify-center gap-6">
        <Link
          href={"/#projects"}
          className="from-chart-5 to-primary border-sidebar rounded-full border bg-linear-to-br px-8 py-2 text-base font-medium transition-all duration-300 hover:translate-y-0.5"
        >
          Projects
        </Link>
        <Link
          href={"/#contact"}
          className="text-foreground from-chart-5 to-primary rounded-full bg-linear-to-tl px-8 py-2 text-base font-medium transition-all duration-300 hover:translate-y-0.5"
        >
          Contact
        </Link>
      </div>
      {/* SOCIALS */}
      <div
        ref={socialsRef}
        className="mt-4 flex items-center justify-center gap-6"
      >
        <Link
          href={"https://github.com/tomasz-pacek"}
          target="_blank"
          className="rounded-full bg-zinc-900 p-2"
        >
          <FaGithub className="size-6 text-zinc-300" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/tomasz-pacek-32699926a/"}
          target="_blank"
          className="rounded-full bg-zinc-900 p-2"
        >
          <BiLogoLinkedin className="size-6 text-zinc-300" />
        </Link>
        <Link
          href={"mailto:tomekpacek@o2.pl"}
          className="rounded-full bg-zinc-900 p-2"
        >
          <MdMailOutline className="size-6 text-zinc-300" />
        </Link>
      </div>
    </div>
  );
}
