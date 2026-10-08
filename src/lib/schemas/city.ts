import { z } from "zod";

const cityStatSchema = z.object({
  label: z.string(),
  description: z.string(),
});

const cityFAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const citySchema = z.object({
  slug: z.string(),
  name: z.string(),
  title: z.string(),
  description: z.string(),
  areaServed: z.string(),
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  stats: z.array(cityStatSchema),
  faq: z.array(cityFAQSchema),
});

export type City = z.infer<typeof citySchema>;
export type CityStat = z.infer<typeof cityStatSchema>;
export type CityFAQ = z.infer<typeof cityFAQSchema>;
