import type { Metadata } from "next";
import { Inter, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Animations } from "@/components/ui/Animations";
import { Cursor } from "@/components/ui/Cursor";
import { Grain } from "@/components/ui/Grain";
import { Preloader } from "@/components/ui/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ui",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agence-grey.fr"),
  title: "Agence Grey — Agence web & IA pour artisans | Nice · Côte d'Azur",
  description:
    "Sites web sur mesure, SEO local & IA pour artisans. Design premium, prix transparents. Breil-sur-Roya, Nice, Côte d'Azur.",
  openGraph: {
    title: "Agence Grey — Le web qui rassure",
    description:
      "Sites web sur mesure, SEO local & IA pour artisans. Design premium, prix transparents. Agence basée à Breil-sur-Roya.",
    images: ["/image/logo.png"],
    url: "https://agence-grey.fr",
    type: "website",
    siteName: "Agence Grey",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence Grey — Le web qui rassure",
    description:
      "Sites web sur mesure, SEO local & IA pour artisans. Design premium, prix transparents.",
    images: ["/image/logo.png"],
  },
  alternates: {
    canonical: "https://agence-grey.fr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Agence Grey",
  description:
    "Agence web & IA spécialisée dans la création de sites internet pour artisans. Design sur mesure, SEO local, automatisation.",
  url: "https://agence-grey.fr",
  email: "agencegrey06@gmail.com",
  telephone: "+33744401792",
  address: {
    "@type": "PostalAddress",
    streetAddress: "367 route de Ciaus",
    addressLocality: "Breil-sur-Roya",
    postalCode: "06540",
    addressCountry: "FR",
  },
  areaServed: ["Nice", "Côte d'Azur", "Monaco", "Menton", "Cannes"],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${playfair.variable} ${syne.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-nav">
          Aller au contenu principal
        </a>
        <Preloader />
        <Cursor />
        <Grain />
        <Navigation />
        <Animations />
        {children}
      </body>
    </html>
  );
}
