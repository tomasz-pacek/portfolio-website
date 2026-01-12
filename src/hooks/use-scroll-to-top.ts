"use client";

import { useLenis } from "lenis/react";

export default function useScrollToTop() {
  const lenis = useLenis();
  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1, easing: (t) => t * (2 - t) });
  };
  return scrollToTop;
}
