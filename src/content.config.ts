import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// other pages
const otherPages = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	otherPages,
};
