import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="marquee marquee--footer" aria-hidden="true">
        <div className="marquee__track" data-marquee>
          <span>
            agencegrey06@gmail.com <i>✦</i> 07 44 40 17 92 <i>✦</i> agencegrey06@gmail.com <i>✦</i>{" "}
            07 44 40 17 92 <i>✦</i>{" "}
          </span>
          <span>
            agencegrey06@gmail.com <i>✦</i> 07 44 40 17 92 <i>✦</i> agencegrey06@gmail.com <i>✦</i>{" "}
            07 44 40 17 92 <i>✦</i>{" "}
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__col">
          <span className="footer__col-title">Agence</span>
          <p>
            367 route de Ciaus
            <br />
            06540 Breil-sur-Roya, France
          </p>
        </div>
        <div className="footer__col">
          <span className="footer__col-title">Contact</span>
          <div className="footer__socials">
            <a href="mailto:agencegrey06@gmail.com">agencegrey06@gmail.com</a>
            <a href="tel:+33744401792">07 44 40 17 92</a>
            <a href="https://agence-grey.fr" target="_blank" rel="noopener noreferrer">
              agence-grey.fr
            </a>
          </div>
        </div>
        <div className="footer__col footer__col--right">
          <span className="footer__col-title">© 2026 Agence Grey</span>
          <p>Le web qui rassure</p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link href="/villes/nice" style={{ color: "var(--grey)", fontSize: "0.82rem" }}>
              Nice
            </Link>{" "}
            ·{" "}
            <Link href="/villes/cannes" style={{ color: "var(--grey)", fontSize: "0.82rem" }}>
              Cannes
            </Link>{" "}
            ·{" "}
            <Link href="/villes/monaco" style={{ color: "var(--grey)", fontSize: "0.82rem" }}>
              Monaco
            </Link>{" "}
            ·{" "}
            <Link href="/villes/menton" style={{ color: "var(--grey)", fontSize: "0.82rem" }}>
              Menton
            </Link>
          </p>
          <p style={{ marginTop: "0.3rem" }}>
            <Link href="/mentions/cgv" style={{ color: "var(--grey)", fontSize: "0.82rem" }}>
              CGV
            </Link>{" "}
            ·{" "}
            <Link href="/mentions/cgu" style={{ color: "var(--grey)", fontSize: "0.82rem" }}>
              CGU
            </Link>{" "}
            ·{" "}
            <Link
              href="/mentions/mentions-legales"
              style={{ color: "var(--grey)", fontSize: "0.82rem" }}
            >
              Mentions légales
            </Link>{" "}
            ·{" "}
            <Link
              href="/mentions/confidentialite"
              style={{ color: "var(--grey)", fontSize: "0.82rem" }}
            >
              Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
