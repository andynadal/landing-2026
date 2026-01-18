import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/ghost";

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
            changeFrequency: "weekly",
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

    // Dynamic blog posts - fetch actual posts to get real dates
    let blogPosts: MetadataRoute.Sitemap = [];
    try {
        const posts = await getPosts();
        blogPosts = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.updated_at || post.published_at),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Error generating sitemap for blog posts:", error);
    }

    return [...staticPages, ...blogPosts];
}
