"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isFinePointer) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const circle = circleRef.current;
    const label = labelRef.current;

    if (!cursor || !dot || !circle || !label) return;

    document.body.classList.add("cursor-active");

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const circleX = gsap.quickTo(circle, "x", {
      duration: 0.45,
      ease: "power3",
    });
    const circleY = gsap.quickTo(circle, "y", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      circleX(e.clientX);
      circleY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const type = el.dataset.cursor;
      if (type === "view") {
        cursor.classList.add("is-view");
        label.textContent = el.dataset.cursorLabel || "Voir";
      } else {
        cursor.classList.add("is-hover");
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("is-view", "is-hover");
    };

    const cursorElements = document.querySelectorAll("[data-cursor]");
    cursorElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const handleDocLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.2 });
    const handleDocEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.2 });

    document.addEventListener("mouseleave", handleDocLeave);
    document.addEventListener("mouseenter", handleDocEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleDocLeave);
      document.removeEventListener("mouseenter", handleDocEnter);
      cursorElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.classList.remove("cursor-active");
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor__dot" ref={dotRef} />
      <div className="cursor__circle" ref={circleRef}>
        <span className="cursor__label" ref={labelRef} />
      </div>
    </div>
  );
}
