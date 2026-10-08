import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalBySlug, legalPages } from "@/lib/data/legal";

interface LegalPageProps {
  params: Promise<{ legal: string }>;
}

export async function generateStaticParams() {
  return legalPages.map((page) => ({ legal: page.slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { legal } = await params;
  const legalData = getLegalBySlug(legal);

  if (!legalData) return {};

  return {
    title: legalData.title,
    description: legalData.description,
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { legal } = await params;
  const legalData = getLegalBySlug(legal);

  if (!legalData) notFound();

  return (
    <main>
      <div className="legal-page">
        <Link href="/" className="back-link">
          ← Retour au site
        </Link>
        <h1>{legalData.title.split(" — ")[0]}</h1>
        <p className="update">Dernière mise à jour : septembre 2026</p>
        <div dangerouslySetInnerHTML={{ __html: legalData.content }} />
      </div>
    </main>
  );
}
