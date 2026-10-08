import { z } from "zod";

export const legalSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
});

export type Legal = z.infer<typeof legalSchema>;
