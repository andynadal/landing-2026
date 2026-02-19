import type {
    MinuteApiResponse,
    MinuteArticle,
    MinutePagination,
    MinuteVideo,
    MinuteVideoApiResponse,
} from "@/types/cms";

const CMS_URL = process.env.MINUTE_CMS_URL;
const CMS_API_KEY = process.env.MINUTE_CMS_KEY;

/**
 * Extract plain text from HTML content for descriptions
 * @param html - HTML content
 * @param maxLength - Maximum length of the excerpt
 * @returns Plain text excerpt
 */
function extractTextFromHtml(html: string, maxLength: number = 160): string {
    // Remove HTML tags
    const text = html.replace(/<[^>]*>/g, " ");
    // Decode HTML entities
    const decoded = text
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    // Clean up whitespace
    const cleaned = decoded.replace(/\s+/g, " ").trim();
    // Truncate to maxLength
    if (cleaned.length <= maxLength) {
        return cleaned;
    }
    return cleaned.substring(0, maxLength).trim() + "...";
}

/**
 * Fetch articles from Minute CMS
 * @param page - Page number for pagination (0-indexed)
 * @param pageSize - Number of articles per page (default: 10)
 * @returns Promise with articles and pagination info
 */
export async function fetchArticles(
    page: number = 0,
    pageSize: number = 10
): Promise<{ articles: MinuteArticle[]; pagination: MinutePagination }> {
    if (!CMS_URL || !CMS_API_KEY) {
        console.warn(
            "Minute CMS is not configured. Please set MINUTE_CMS_URL and MINUTE_CMS_KEY environment variables."
        );
        return {
            articles: [],
            pagination: {
                page: 0,
                page_size: pageSize,
                total: 0,
                total_pages: 0,
            },
        };
    }

    try {
        const url = `${CMS_URL}/api/read?apiKey=${CMS_API_KEY}&language=en&page=${page}&page_size=${pageSize}`;
        const response = await fetch(url, {
            headers: {
                "api-key": CMS_API_KEY,
                "Content-Type": "application/json",
            },
            next: { revalidate: 86400 }, // Revalidate every 24 hours
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch articles: ${response.status} ${response.statusText}`
            );
        }

        const data: MinuteApiResponse = await response.json();

        if (!data.success) {
            throw new Error("API returned success: false");
        }

        return {
            articles: data.data.articles,
            pagination: data.data.pagination,
        };
    } catch (error) {
        console.error("Error fetching articles from Minute CMS:", error);
        return {
            articles: [],
            pagination: {
                page: 0,
                page_size: pageSize,
                total: 0,
                total_pages: 0,
            },
        };
    }
}

/**
 * Fetch all articles from Minute CMS (all pages)
 * @returns Promise with array of all articles
 */
export async function getAllArticles(): Promise<MinuteArticle[]> {
    const allArticles: MinuteArticle[] = [];
    let currentPage = 0;
    let hasMorePages = true;

    while (hasMorePages) {
        const { articles, pagination } = await fetchArticles(currentPage, 100);
        allArticles.push(...articles);

        currentPage += 1;
        hasMorePages = currentPage < pagination.total_pages;
    }

    return allArticles;
}

/**
 * Fetch a single article by slug from Minute CMS
 * @param slug - The article slug
 * @returns Promise with a single article or null if not found
 */
export async function getArticleBySlug(
    slug: string
): Promise<MinuteArticle | null> {
    try {
        // Fetch all articles and find the one with matching slug
        const allArticles = await getAllArticles();
        const article = allArticles.find((a) => a.slug === slug);
        return article || null;
    } catch (error) {
        console.error(`Error fetching article with slug ${slug}:`, error);
        return null;
    }
}

/**
 * Get all article slugs for static generation
 * @returns Promise with array of article slugs
 */
export async function getAllArticleSlugs(): Promise<string[]> {
    try {
        const articles = await getAllArticles();
        return articles.map((article) => article.slug);
    } catch (error) {
        console.error("Error fetching article slugs:", error);
        return [];
    }
}

/**
 * Get a description/excerpt from an article's HTML content
 * @param article - The article object
 * @param maxLength - Maximum length of the description
 * @returns Plain text description
 */
export function getArticleDescription(
    article: MinuteArticle,
    maxLength: number = 160
): string {
    return extractTextFromHtml(article.content, maxLength);
}

/**
 * Fetch videos from Minute CMS
 * @param page - Page number for pagination (0-indexed)
 * @param pageSize - Number of videos per page (default: 10)
 * @returns Promise with videos and pagination info
 */
export async function fetchVideos(
    page: number = 0,
    pageSize: number = 10
): Promise<{ videos: MinuteVideo[]; pagination: MinutePagination }> {
    if (!CMS_URL || !CMS_API_KEY) {
        console.warn(
            "Minute CMS is not configured. Please set MINUTE_CMS_URL and MINUTE_CMS_KEY environment variables."
        );
        return {
            videos: [],
            pagination: {
                page: 0,
                page_size: pageSize,
                total: 0,
                total_pages: 0,
            },
        };
    }

    try {
        const url = `${CMS_URL}/api/videos?apiKey=${CMS_API_KEY}&page=${page}&page_size=${pageSize}`;
        const response = await fetch(url, {
            headers: {
                "api-key": CMS_API_KEY,
                "Content-Type": "application/json",
            },
            next: { revalidate: 86400 }, // Revalidate every 24 hours
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch videos: ${response.status} ${response.statusText}`
            );
        }

        const data: MinuteVideoApiResponse = await response.json();

        if (!data.success) {
            throw new Error("API returned success: false");
        }

        return {
            videos: data.data.videos,
            pagination: data.data.pagination,
        };
    } catch (error) {
        console.error("Error fetching videos from Minute CMS:", error);
        return {
            videos: [],
            pagination: {
                page: 0,
                page_size: pageSize,
                total: 0,
                total_pages: 0,
            },
        };
    }
}

/**
 * Fetch all videos from Minute CMS (all pages)
 * @returns Promise with array of all videos
 */
export async function getAllVideos(): Promise<MinuteVideo[]> {
    const allVideos: MinuteVideo[] = [];
    let currentPage = 0;
    let hasMorePages = true;

    while (hasMorePages) {
        const { videos, pagination } = await fetchVideos(currentPage, 100);
        allVideos.push(...videos);

        currentPage += 1;
        hasMorePages = currentPage < pagination.total_pages;
    }

    return allVideos;
}

/**
 * Fetch a single video by slug from Minute CMS
 * @param slug - The video slug
 * @returns Promise with a single video or null if not found
 */
export async function getVideoBySlug(
    slug: string
): Promise<MinuteVideo | null> {
    try {
        // Fetch all videos and find the one with matching slug
        const allVideos = await getAllVideos();
        const video = allVideos.find((v) => v.slug === slug);
        return video || null;
    } catch (error) {
        console.error(`Error fetching video with slug ${slug}:`, error);
        return null;
    }
}

/**
 * Get all video slugs for static generation
 * @returns Promise with array of video slugs
 */
export async function getAllVideoSlugs(): Promise<string[]> {
    try {
        const videos = await getAllVideos();
        return videos.map((video) => video.slug);
    } catch (error) {
        console.error("Error fetching video slugs:", error);
        return [];
    }
}
