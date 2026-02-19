import { getAllVideos } from "@/lib/cms";

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
 * Generate video sitemap XML following Google's video sitemap schema
 * https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps
 */
export async function GET() {
    const baseUrl = "https://andynadal.com";

    try {
        const videos = await getAllVideos();

        // Generate XML with proper video sitemap schema
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos
    .map((video) => {
        // Format date to ISO 8601
        const publicationDate = new Date(video.created_at).toISOString();

        // Truncate title and description to meet Google's requirements
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
        console.error("Error generating video sitemap:", error);

        // Return empty sitemap on error
        const emptyXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
</urlset>`;

        return new Response(emptyXml, {
            headers: {
                "Content-Type": "application/xml",
                "Cache-Control": "public, s-maxage=3600",
            },
        });
    }
}
