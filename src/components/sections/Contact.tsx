"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="footer" id="contact">
      <div className="footer__top">
        <span className="section-head__tag">(04) — Contact</span>
        <h2 className="footer__title">
          <span className="footer__title-line">Un projet</span>
          <span className="footer__title-line footer__title-line--violet">en tête&nbsp;?</span>
        </h2>
        <a href="mailto:agencegrey06@gmail.com" className="footer__cta">
          <span className="footer__cta-text">Parlons-en</span>
          <span className="footer__cta-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M17 7H8M17 7v9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>

      <div className="footer__form">
        <form onSubmit={handleSubmit}>
          <div className="footer__form-row">
            <input type="text" name="name" placeholder="Nom" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="tel" name="phone" placeholder="Téléphone" />
          <textarea name="message" rows={4} placeholder="Décrivez votre projet..." required />
          <button type="submit" className="footer__submit" disabled={status === "loading"}>
            <span>{status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M17 7H8M17 7v9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {status === "success" && <p className="form-success">Message envoyé avec succès !</p>}
          {status === "error" && (
            <p className="form-error">Une erreur est survenue. Veuillez réessayer.</p>
          )}
        </form>
      </div>
    </section>
  );
}
