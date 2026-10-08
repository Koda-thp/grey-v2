"use client";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Animations() {
  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Smooth scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: !prefersReducedMotion,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Ancres douces
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.4 });
      });
    });

    // Hero intro après preloader
    const preloader = document.getElementById("preloader");
    const runHeroIntro = () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".hero__word", { yPercent: 110 }, { yPercent: 0, duration: 1.2, stagger: 0.09 }, 0)
        .to(".hero__eyebrow", { opacity: 1, y: 0, duration: 0.8 }, 0.4)
        .to(".hero__desc", { opacity: 1, y: 0, duration: 0.8 }, 0.55)
        .fromTo(".hero__scroll", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        .fromTo(
          ".hero__badge",
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.6)" },
          0.8,
        )
        .fromTo(
          ".nav",
          { yPercent: -100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9 },
          0.6,
        )
        .fromTo(".marquee--hero", { yPercent: 100 }, { yPercent: 0, duration: 0.9 }, 0.75);
      return tl;
    };

    // Observer pour détecter la fin du preloader
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "style") {
          const display = (mutation.target as HTMLElement).style.display;
          if (display === "none") {
            runHeroIntro();
            observer.disconnect();
          }
        }
      });
    });

    if (preloader) {
      observer.observe(preloader, { attributes: true });
    }

    // Marquee infinis
    document.querySelectorAll("[data-marquee]").forEach((track) => {
      gsap.to(track, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    });

    // Parallaxe hero (orbes)
    if (isFinePointer && !prefersReducedMotion) {
      window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(".hero__orb--1", {
          x: x * -40,
          y: y * -30,
          duration: 1.4,
          ease: "power2.out",
        });
        gsap.to(".hero__orb--2", {
          x: x * 30,
          y: y * 40,
          duration: 1.4,
          ease: "power2.out",
        });
        gsap.to(".hero__orb--3", {
          x: x * -20,
          y: y * -50,
          duration: 1.6,
          ease: "power2.out",
        });
        gsap.to(".hero__orb--4", {
          x: x * 50,
          y: y * 20,
          duration: 1.8,
          ease: "power2.out",
        });
      });
    }

    // Éléments magnétiques
    if (isFinePointer && !prefersReducedMotion) {
      document.querySelectorAll(".magnetic").forEach((el) => {
        const strength = 0.35;
        (el as HTMLElement).addEventListener("mousemove", ((e: MouseEvent) => {
          const rect = (el as HTMLElement).getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;
          gsap.to(el, {
            x: relX * strength,
            y: relY * strength,
            duration: 0.4,
            ease: "power3.out",
          });
        }) as EventListener);
        (el as HTMLElement).addEventListener("mouseleave", () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.4)",
          });
        });
      });
    }

    // Titres de section — reveal par mots
    document.querySelectorAll("[data-split-words]").forEach((title) => {
      const words = title.textContent?.trim().split(/\s+/) || [];
      title.innerHTML = words.map((w) => `<span class="word"><span>${w}</span></span>`).join(" ");

      gsap.fromTo(
        title.querySelectorAll(".word > span"),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.06,
          ease: "expo.out",
          scrollTrigger: { trigger: title, start: "top 85%" },
        },
      );
    });

    // Services — entrée en cascade
    gsap.utils.toArray<HTMLElement>(".service").forEach((service) => {
      gsap.fromTo(
        service,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: service, start: "top 88%" },
        },
      );
    });

    // Projets — reveal + parallaxe interne
    gsap.utils.toArray<HTMLElement>(".project").forEach((project) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: project, start: "top 88%" },
        },
      );

      const img = project.querySelector("[data-parallax]");
      if (img) {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    });

    // Manifesto — mots qui s'illuminent au scroll
    const manifestoText = document.querySelector("[data-reveal-words]");
    if (manifestoText) {
      const words = manifestoText.textContent?.trim().split(/\s+/) || [];
      manifestoText.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");

      const wordEls = manifestoText.querySelectorAll(".word");
      ScrollTrigger.create({
        trigger: manifestoText,
        start: "top 75%",
        end: "bottom 45%",
        scrub: true,
        onUpdate: (self) => {
          const litCount = Math.floor(self.progress * wordEls.length);
          wordEls.forEach((w, i) => w.classList.toggle("is-lit", i <= litCount));
        },
      });
    }

    // Footer — titre géant reveal
    gsap.utils.toArray<HTMLElement>(".footer__title-line").forEach((line, i) => {
      const inner = document.createElement("span");
      inner.textContent = line.textContent || "";
      inner.style.display = "inline-block";
      line.textContent = "";
      line.appendChild(inner);

      gsap.fromTo(
        inner,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          delay: i * 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".footer__top", start: "top 75%" },
        },
      );
    });

    gsap.fromTo(
      ".footer__cta",
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".footer__cta", start: "top 90%" },
      },
    );

    // Refresh après chargement complet
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      observer.disconnect();
    };
  }, []);

  return null;
}
