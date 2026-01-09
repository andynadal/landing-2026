import type { MetadataRoute } from "next";

import { getAllPostSlugs } from "@/lib/ghost";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://andynadal.com";

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pausa`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];

    // Dynamic blog posts
    let blogPosts: MetadataRoute.Sitemap = [];
    try {
        const slugs = await getAllPostSlugs();
        blogPosts = slugs.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Error generating sitemap for blog posts:", error);
    }

    return [...staticPages, ...blogPosts];
}
