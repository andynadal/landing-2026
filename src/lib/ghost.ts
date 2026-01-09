import GhostContentAPI from "@tryghost/content-api";

import type { GhostPost } from "@/types/ghost";

// Initialize Ghost Content API client with conditional initialization
let api: GhostContentAPI | null = null;

if (process.env.GHOST_CONTENT_URL && process.env.GHOST_CONTENT_API_KEY) {
    api = new GhostContentAPI({
        url: process.env.GHOST_CONTENT_URL,
        key: process.env.GHOST_CONTENT_API_KEY,
        version: "v5.0",
    });
}

/**
 * Fetch all published posts from Ghost CMS
 * @returns Promise with array of Ghost posts
 */
export async function getPosts(): Promise<GhostPost[]> {
    if (!api) {
        console.warn(
            "Ghost CMS is not configured. Please set GHOST_CONTENT_URL and GHOST_CONTENT_API_KEY environment variables."
        );
        return [];
    }

    try {
        const posts = await api.posts.browse({
            limit: "all",
            include: ["tags", "authors"],
            filter: "visibility:public",
        });
        return posts as GhostPost[];
    } catch (error) {
        console.error("Error fetching posts from Ghost:", error);
        return [];
    }
}

/**
 * Fetch a single post by slug from Ghost CMS
 * @param slug - The post slug
 * @returns Promise with a single Ghost post or null if not found
 */
export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
    if (!api) {
        console.warn(
            "Ghost CMS is not configured. Please set GHOST_CONTENT_URL and GHOST_CONTENT_API_KEY environment variables."
        );
        return null;
    }

    try {
        const post = await api.posts.read(
            { slug },
            { include: ["tags", "authors"] }
        );
        return post as GhostPost;
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return null;
    }
}

/**
 * Get all post slugs for static generation
 * @returns Promise with array of post slugs
 */
export async function getAllPostSlugs(): Promise<string[]> {
    try {
        const posts = await getPosts();
        return posts.map((post) => post.slug);
    } catch (error) {
        console.error("Error fetching post slugs:", error);
        return [];
    }
}
