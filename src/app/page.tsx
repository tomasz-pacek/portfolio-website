"use client";

import AboutPage from "@/components/about";
import DarkVeil from "@/components/DarkVeil";
import SplitText from "@/components/SplitText";

export default function Page() {
  return (
    <>
      <div className="relative h-screen w-full">
        <DarkVeil />
        <div className="absolute top-1/3 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl p-12">
          <SplitText
            text="Tomasz Pacek"
            delay={100}
            ease={"power3.out"}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            duration={0.2}
            className="text-6xl"
          />
          <SplitText
            text="Full-Stack Developer"
            delay={100}
            ease={"power3.out"}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            duration={0.2}
            className="text-6xl"
          />
        </div>
      </div>
      <AboutPage />
    </>
  );
}
