import type {
    MinuteApiResponse,
    MinuteArticle,
    MinutePagination,
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
 * @param lang - Language code (default: "en")
 * @returns Promise with articles and pagination info
 */
export async function fetchArticles(
    page: number = 0,
    pageSize: number = 10,
    lang: string = "en"
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
        const url = `${CMS_URL}/read?apiKey=${CMS_API_KEY}&lang=${lang}&page=${page}&page_size=${pageSize}`;
        const response = await fetch(url, {
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
 * @param lang - Language code (default: "en")
 * @returns Promise with array of all articles
 */
export async function getAllArticles(
    lang: string = "en"
): Promise<MinuteArticle[]> {
    const allArticles: MinuteArticle[] = [];
    let currentPage = 0;
    let hasMorePages = true;

    while (hasMorePages) {
        const { articles, pagination } = await fetchArticles(
            currentPage,
            100,
            lang
        );
        allArticles.push(...articles);

        currentPage += 1;
        hasMorePages = currentPage < pagination.total_pages;
    }

    return allArticles;
}

/**
 * Fetch a single article by slug from Minute CMS
 * @param slug - The article slug
 * @param lang - Language code (default: "en")
 * @returns Promise with a single article or null if not found
 */
export async function getArticleBySlug(
    slug: string,
    lang: string = "en"
): Promise<MinuteArticle | null> {
    try {
        // Fetch all articles and find the one with matching slug
        const allArticles = await getAllArticles(lang);
        const article = allArticles.find((a) => a.slug === slug);
        return article || null;
    } catch (error) {
        console.error(`Error fetching article with slug ${slug}:`, error);
        return null;
    }
}

/**
 * Get all article slugs for static generation
 * @param lang - Language code (default: "en")
 * @returns Promise with array of article slugs
 */
export async function getAllArticleSlugs(
    lang: string = "en"
): Promise<string[]> {
    try {
        const articles = await getAllArticles(lang);
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
