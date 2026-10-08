"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      const scroll = window.scrollY;
      nav.classList.toggle("is-scrolled", scroll > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (menuOpen) {
      gsap.fromTo(
        ".menu__link",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.07,
          delay: 0.25,
          ease: "expo.out",
        },
      );
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className="nav" ref={navRef}>
        <Link href="/" className="nav__logo magnetic" data-cursor="hover">
          <Image
            src="/image/logo.png"
            alt="Agence Grey"
            width={120}
            height={32}
            className="nav__logo-img"
            priority
          />
        </Link>
        <nav className="nav__links">
          <Link href="/#services" className="nav__link magnetic" data-cursor="hover">
            <span data-text="Nos offres">Nos offres</span>
          </Link>
          <Link href="/#work" className="nav__link magnetic" data-cursor="hover">
            <span data-text="Réalisations">Réalisations</span>
          </Link>
          <Link href="/faq" className="nav__link magnetic" data-cursor="hover">
            <span data-text="FAQ">FAQ</span>
          </Link>
          <Link href="/#studio" className="nav__link magnetic" data-cursor="hover">
            <span data-text="À propos">À propos</span>
          </Link>
          <Link href="/#contact" className="nav__link magnetic" data-cursor="hover">
            <span data-text="Contact">Contact</span>
          </Link>
        </nav>
        <Link href="/#contact" className="nav__cta magnetic" data-cursor="hover">
          <span className="nav__cta-text">Devis gratuit</span>
          <span className="nav__cta-dot" />
        </Link>
        <button
          type="button"
          className={`nav__burger ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`menu ${menuOpen ? "is-open" : ""}`} ref={menuRef}>
        <div className="menu__links">
          <Link href="/#services" className="menu__link" onClick={toggleMenu}>
            <em>01</em>Nos offres
          </Link>
          <Link href="/#work" className="menu__link" onClick={toggleMenu}>
            <em>02</em>Réalisations
          </Link>
          <Link href="/#studio" className="menu__link" onClick={toggleMenu}>
            <em>03</em>À propos
          </Link>
          <Link href="/#contact" className="menu__link" onClick={toggleMenu}>
            <em>04</em>Contact
          </Link>
        </div>
        <div className="menu__footer">
          <a href="mailto:agencegrey06@gmail.com">agencegrey06@gmail.com</a>
          <p>Breil-sur-Roya — Nice — Côte d&apos;Azur</p>
        </div>
      </div>
    </>
  );
}
