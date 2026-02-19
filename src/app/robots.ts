import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin/"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/api/", "/_next/"],
                crawlDelay: 0,
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/api/", "/_next/"],
                crawlDelay: 0,
            },
        ],
        sitemap: [
            "https://andynadal.com/sitemap.xml",
            "https://andynadal.com/video-sitemap.xml",
        ],
        host: "https://andynadal.com",
    };
}
