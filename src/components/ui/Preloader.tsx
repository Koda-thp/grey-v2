"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const count = countRef.current;
    const bar = barRef.current;
    const curtain = curtainRef.current;

    if (!preloader || !count || !bar || !curtain) return;

    const counter = { value: 0 };

    const runPreloader = () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".preloader__logo",
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
      )
        .to(
          counter,
          {
            value: 100,
            duration: 1.8,
            ease: "power2.inOut",
            onUpdate: () => {
              count.textContent = Math.round(counter.value).toString();
              bar.style.width = `${counter.value}%`;
            },
          },
          0.2,
        )
        .to(curtain, {
          scaleY: 1,
          duration: 0.6,
          ease: "expo.in",
          transformOrigin: "bottom",
        })
        .to(".preloader__inner", { opacity: 0, duration: 0.25 }, "<")
        .to(preloader, {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut",
        })
        .set(preloader, { display: "none" });
    };

    const timer = setTimeout(runPreloader, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader__inner">
        <div className="preloader__logo">
          GREY<span>®</span>
        </div>
        <div className="preloader__count" ref={countRef}>
          0
        </div>
        <div className="preloader__bar">
          <span ref={barRef} />
        </div>
      </div>
      <div className="preloader__curtain" ref={curtainRef} />
    </div>
  );
}
