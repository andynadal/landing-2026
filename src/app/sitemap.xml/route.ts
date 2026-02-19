import { getAllArticles, getAllVideos } from "@/lib/cms";
import type { MinuteArticle, MinuteVideo } from "@/types/cms";

/**
 * Escape XML special characters
 */
function escapeXml(str: string | null | undefined): string {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

/**
 * Generate family friendly tag if applicable
 */
function getFamilyFriendlyTag(isShort: boolean | null): string {
    if (isShort) {
        return "\n      <video:family_friendly>yes</video:family_friendly>";
    }
    return "";
}

/**
 * Generate comprehensive sitemap XML with pages, blog posts, and videos
 * Videos follow Google's video sitemap schema
 * https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps
 */
export async function GET() {
    const baseUrl = "https://andynadal.com";

    try {
        // Static pages
        const staticPages = [
            {
                url: baseUrl,
                lastmod: new Date(),
                changefreq: "monthly",
                priority: 1,
            },
            {
                url: `${baseUrl}/about`,
                lastmod: new Date(),
                changefreq: "monthly",
                priority: 0.9,
            },
            {
                url: `${baseUrl}/blog`,
                lastmod: new Date(),
                changefreq: "weekly",
                priority: 0.9,
            },
            {
                url: `${baseUrl}/videos`,
                lastmod: new Date(),
                changefreq: "weekly",
                priority: 0.9,
            },
            {
                url: `${baseUrl}/projects`,
                lastmod: new Date(),
                changefreq: "monthly",
                priority: 0.8,
            },
            {
                url: `${baseUrl}/pausa`,
                lastmod: new Date(),
                changefreq: "monthly",
                priority: 0.8,
            },
            {
                url: `${baseUrl}/contact`,
                lastmod: new Date(),
                changefreq: "yearly",
                priority: 0.5,
            },
        ];

        // Fetch articles
        let articles: MinuteArticle[] = [];
        try {
            articles = await getAllArticles();
        } catch (error) {
            console.error("Error fetching articles for sitemap:", error);
        }

        // Fetch videos
        let videos: MinuteVideo[] = [];
        try {
            videos = await getAllVideos();
        } catch (error) {
            console.error("Error fetching videos for sitemap:", error);
        }

        // Generate XML with proper video sitemap schema
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages
    .map((page) => {
        return `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("\n")}
${articles
    .map((article) => {
        return `  <url>
    <loc>${baseUrl}/blog/${escapeXml(article.slug)}</loc>
    <lastmod>${new Date(article.published_at).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n")}
${videos
    .map((video) => {
        const publicationDate = new Date(video.created_at).toISOString();
        const title = escapeXml(video.title.substring(0, 100));
        const description = escapeXml(
            video.description
                ? video.description.substring(0, 2048)
                : video.title.substring(0, 2048)
        );
        const thumbnailUrl = escapeXml(video.thumbnail_url || "");
        const embedUrl = escapeXml(video.embed_url);
        const familyFriendlyTag = getFamilyFriendlyTag(video.is_short);

        return `  <url>
    <loc>${baseUrl}/videos/${escapeXml(video.slug)}</loc>
    <lastmod>${publicationDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <video:video>
      <video:thumbnail_loc>${thumbnailUrl}</video:thumbnail_loc>
      <video:title>${title}</video:title>
      <video:description>${description}</video:description>
      <video:player_loc>${embedUrl}</video:player_loc>
      <video:publication_date>${publicationDate}</video:publication_date>${familyFriendlyTag}
    </video:video>
  </url>`;
    })
    .join("\n")}
</urlset>`;

        return new Response(xml, {
            headers: {
                "Content-Type": "application/xml",
                "Cache-Control":
                    "public, s-maxage=86400, stale-while-revalidate",
            },
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);

        // Return minimal sitemap on error
        const emptyXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://andynadal.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
</urlset>`;

        return new Response(emptyXml, {
            headers: {
                "Content-Type": "application/xml",
                "Cache-Control": "public, s-maxage=3600",
            },
        });
    }
}
