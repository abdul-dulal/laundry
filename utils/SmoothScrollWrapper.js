"use client";
import { useEffect } from "react";

export default function SmoothScrollerProvider({ children }) {
  useEffect(() => {
    async function init() {
      if (typeof window === "undefined") return;

      try {
        const gsapModule = await import("@/utils/libs/gsap/gsap.min.js");
        const ScrollTriggerModule = await import(
          "@/utils/libs/gsap/ScrollTrigger.min.js"
        );
        const ScrollSmootherModule = await import(
          "@/utils/libs/gsap/ScrollSmoother.min.js"
        );

        const gsap = gsapModule?.default;
        const ScrollTrigger = ScrollTriggerModule?.default;
        const ScrollSmoother = ScrollSmootherModule?.default;

        if (!gsap || !ScrollTrigger || !ScrollSmoother) {
          console.error("GSAP modules not loaded properly.");
          return;
        }

        console.log("GSAP modules loaded, registering plugins...");
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.get()?.kill();

        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
        });

        console.log("ScrollSmoother instance created:", smoother);
      } catch (e) {
        // console.error("Error importing GSAP modules:", e);
      }
    }

    init();
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="overflow-hidden "
      style={{ position: "relative" }}
    >
      <div id="smooth-content">{children}</div>
    </div>
  );
}
