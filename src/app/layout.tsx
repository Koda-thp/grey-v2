import type { Metadata } from "next";
import { Inter, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navigation } from "@/components/layout/Navigation";
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
  title: "Agence Grey — Sites web pour studios de yoga, pole dance & pilates | Côte d'Azur",
  description:
    "Sites web sur mesure pour studios de mouvement. Yoga, pole dance, pilates, reformer, lagree. Design premium, SEO local Côte d'Azur.",
  openGraph: {
    title: "Agence Grey — Le web qui rassure",
    description:
      "Sites web sur mesure pour studios de mouvement. Yoga, pole dance, pilates, reformer, lagree. Design premium, SEO local Côte d'Azur. Agence basée à Breil-sur-Roya.",
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
      "Sites web sur mesure pour studios de mouvement. Yoga, pole dance, pilates, reformer, lagree. Design premium, SEO local Côte d'Azur.",
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
    "Agence web spécialisée dans la création de sites internet pour studios de yoga, pole dance, pilates, reformer et lagree. Design sur mesure, SEO local Côte d'Azur.",
  url: "https://agence-grey.fr",
  email: "agencegrey06@gmail.com",
  telephone: "+33757811760",
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
        <SpeedInsights />
        <Analytics />
        <Grain />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
