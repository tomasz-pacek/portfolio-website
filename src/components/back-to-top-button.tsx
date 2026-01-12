"use client";

import useScrollToTop from "@/hooks/use-scroll-to-top";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const scrollToTop = useScrollToTop();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`text-foreground bg-sidebar-border fixed right-5 bottom-10 z-1000 cursor-pointer rounded-full p-2 transition-all duration-300 hover:-translate-y-1 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <ArrowUp />
    </div>
  );
}
