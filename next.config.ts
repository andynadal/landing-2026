import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            // Ghost CDN and common Ghost hosting providers
            {
                protocol: "https",
                hostname: "static.ghost.org",
            },
            {
                protocol: "https",
                hostname: "*.ghost.io",
            },
            {
                protocol: "https",
                hostname: "*.cloudfront.net",
            },
            // Video thumbnail providers
            {
                protocol: "https",
                hostname: "i.ytimg.com",
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
            },
            {
                protocol: "https",
                hostname: "i.vimeocdn.com",
            },
            {
                protocol: "https",
                hostname: "vumbnail.com",
            },
            // Allow all HTTPS images for video thumbnails from various sources
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
