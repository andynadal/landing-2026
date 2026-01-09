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
            // Add your specific Ghost instance domain if known
            // Uncomment and replace with your domain:
            // {
            //     protocol: "https",
            //     hostname: "your-ghost-instance.com",
            // },
        ],
    },
};

export default nextConfig;
