/* ══════════════════════════════════════════════
   AGENCE GREY — Animations & Interactions
   GSAP + ScrollTrigger + Lenis
   ══════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─────────────────────────────────────────────
   1. SMOOTH SCROLL (Lenis)
───────────────────────────────────────────── */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: !prefersReducedMotion,
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Ancres douces
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  });
});

/* ─────────────────────────────────────────────
   2. PRELOADER CINÉMATIQUE
───────────────────────────────────────────── */
const preloader = document.getElementById("preloader");
const preloaderCount = document.getElementById("preloaderCount");
const preloaderBar = document.getElementById("preloaderBar");

lenis.stop();

function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  tl.fromTo(
    ".hero__word",
    { yPercent: 110 },
    { yPercent: 0, duration: 1.2, stagger: 0.09 },
    0
  )
    .to(".hero__eyebrow", { opacity: 1, y: 0, duration: 0.8 }, 0.4)
    .to(".hero__desc", { opacity: 1, y: 0, duration: 0.8 }, 0.55)
    .fromTo(
      ".hero__scroll",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.7
    )
    .fromTo(
      ".hero__badge",
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.6)" },
      0.8
    )
    .fromTo(
      ".nav",
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9 },
      0.6
    )
    .fromTo(
      ".marquee--hero",
      { yPercent: 100 },
      { yPercent: 0, duration: 0.9 },
      0.75
    );
  return tl;
}

let preloaderLaunched = false;
function runPreloader() {
  if (preloaderLaunched) return;
  preloaderLaunched = true;
  const counter = { value: 0 };
  const tl = gsap.timeline();

  tl.fromTo(
    ".preloader__logo",
    { yPercent: 120, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.9, ease: "expo.out" }
  )
    .to(
      counter,
      {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          preloaderCount.textContent = Math.round(counter.value);
          preloaderBar.style.width = counter.value + "%";
        },
      },
      0.2
    )
    // Rideau violet qui monte
    .to(".preloader__curtain", {
      scaleY: 1,
      duration: 0.6,
      ease: "expo.in",
      transformOrigin: "bottom",
    })
    .to(".preloader__inner", { opacity: 0, duration: 0.25 }, "<")
    // Rideau qui part vers le haut et révèle le site
    .to(preloader, {
      yPercent: -100,
      duration: 0.9,
      ease: "expo.inOut",
      onStart: () => lenis.start(),
    })
    .add(heroIntro(), "-=0.55")
    .set(preloader, { display: "none" });
}

window.addEventListener("load", runPreloader);
// Sécurité si le load est bloqué (polices/CDN lents)
setTimeout(runPreloader, 4000);

/* ─────────────────────────────────────────────
   3. CURSEUR CUSTOM
───────────────────────────────────────────── */
if (isFinePointer) {
  document.body.classList.add("cursor-active");
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  const circle = document.getElementById("cursorCircle");
  const label = document.getElementById("cursorLabel");

  const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
  const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
  const circleX = gsap.quickTo(circle, "x", { duration: 0.45, ease: "power3" });
  const circleY = gsap.quickTo(circle, "y", { duration: 0.45, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    circleX(e.clientX);
    circleY(e.clientY);
  });

  document.querySelectorAll("[data-cursor]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const type = el.dataset.cursor;
      if (type === "view") {
        cursor.classList.add("is-view");
        label.textContent = el.dataset.cursorLabel || "Voir";
      } else {
        cursor.classList.add("is-hover");
      }
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-view", "is-hover");
    });
  });

  // Cache le curseur natif hors fenêtre
  document.addEventListener("mouseleave", () => gsap.to(cursor, { opacity: 0, duration: 0.2 }));
  document.addEventListener("mouseenter", () => gsap.to(cursor, { opacity: 1, duration: 0.2 }));
}

/* ─────────────────────────────────────────────
   4. ÉLÉMENTS MAGNÉTIQUES
───────────────────────────────────────────── */
if (isFinePointer) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    const strength = 0.35;
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    });
  });
}

/* ─────────────────────────────────────────────
   5. NAVIGATION — hide/show + état scrollé
───────────────────────────────────────────── */
const nav = document.getElementById("nav");
let lastScroll = 0;

lenis.on("scroll", ({ scroll }) => {
  nav.classList.toggle("is-scrolled", scroll > 60);
  if (scroll > 400 && scroll > lastScroll) {
    nav.classList.add("is-hidden");
  } else {
    nav.classList.remove("is-hidden");
  }
  lastScroll = scroll;
});

/* ─────────────────────────────────────────────
   6. MENU MOBILE
───────────────────────────────────────────── */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
let menuOpen = false;

function closeMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  burger.classList.remove("is-open");
  menu.classList.remove("is-open");
  lenis.start();
}

burger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  burger.classList.toggle("is-open", menuOpen);
  menu.classList.toggle("is-open", menuOpen);

  if (menuOpen) {
    lenis.stop();
    gsap.fromTo(
      ".menu__link",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, delay: 0.25, ease: "expo.out" }
    );
  } else {
    lenis.start();
  }
});

/* ─────────────────────────────────────────────
   7. MARQUEES INFINIS
───────────────────────────────────────────── */
document.querySelectorAll("[data-marquee]").forEach((track) => {
  gsap.to(track, {
    xPercent: -50,
    duration: 22,
    ease: "none",
    repeat: -1,
  });
});

/* ─────────────────────────────────────────────
   8. PARALLAXE HERO (orbes + grille)
───────────────────────────────────────────── */
if (isFinePointer) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to(".hero__orb--1", { x: x * -40, y: y * -30, duration: 1.4, ease: "power2.out" });
    gsap.to(".hero__orb--2", { x: x * 30, y: y * 40, duration: 1.4, ease: "power2.out" });
    gsap.to(".hero__orb--3", { x: x * -20, y: y * -50, duration: 1.6, ease: "power2.out" });
    gsap.to(".hero__orb--4", { x: x * 50, y: y * 20, duration: 1.8, ease: "power2.out" });
  });
}

/* ─────────────────────────────────────────────
   9. TITRES DE SECTION — reveal par mots
───────────────────────────────────────────── */
document.querySelectorAll("[data-split-words]").forEach((title) => {
  const words = title.textContent.trim().split(/\s+/);
  title.innerHTML = words
    .map((w) => `<span class="word"><span>${w}</span></span>`)
    .join(" ");

  gsap.fromTo(
    title.querySelectorAll(".word > span"),
    { yPercent: 110 },
    {
      yPercent: 0,
      duration: 1,
      stagger: 0.06,
      ease: "expo.out",
      scrollTrigger: { trigger: title, start: "top 85%" },
    }
  );
});

/* ─────────────────────────────────────────────
   10. SERVICES — entrée en cascade
───────────────────────────────────────────── */
gsap.utils.toArray(".service").forEach((service, i) => {
  gsap.fromTo(
    service,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: service, start: "top 88%" },
    }
  );
});

/* ─────────────────────────────────────────────
   11. PROJETS — reveal + parallaxe interne
───────────────────────────────────────────── */
gsap.utils.toArray(".project").forEach((project) => {
  gsap.fromTo(
    project,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "expo.out",
      scrollTrigger: { trigger: project, start: "top 88%" },
    }
  );

  const img = project.querySelector("[data-parallax]");
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
    }
  );
});

/* ─────────────────────────────────────────────
   12. COMPTEURS STATS
───────────────────────────────────────────── */
gsap.utils.toArray("[data-count]").forEach((el) => {
  const target = parseInt(el.dataset.count, 10);
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 88%" },
    onUpdate: () => (el.textContent = Math.round(obj.value)),
  });
});

gsap.fromTo(
  ".stat",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".intro__grid", start: "top 85%" },
  }
);

/* ─────────────────────────────────────────────
   13. MANIFESTO — mots qui s'illuminent au scroll
───────────────────────────────────────────── */
const manifestoText = document.querySelector("[data-reveal-words]");
if (manifestoText) {
  const words = manifestoText.textContent.trim().split(/\s+/);
  manifestoText.innerHTML = words
    .map((w) => `<span class="word">${w}</span>`)
    .join(" ");

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

/* ─────────────────────────────────────────────
   14. FOOTER — titre géant reveal
───────────────────────────────────────────── */
gsap.utils.toArray(".footer__title-line").forEach((line, i) => {
  // Enveloppe le texte dans un span interne pour le masquage
  const inner = document.createElement("span");
  inner.textContent = line.textContent;
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
    }
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
  }
);

/* ─────────────────────────────────────────────
   15. Refresh après chargement complet
───────────────────────────────────────────── */
window.addEventListener("load", () => ScrollTrigger.refresh());
