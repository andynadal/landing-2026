import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getVideoBySlug, getAllVideoSlugs } from "@/lib/cms";

// Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

// Generate static params for all videos
export async function generateStaticParams() {
    const slugs = await getAllVideoSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

// Generate metadata for each video
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const video = await getVideoBySlug(slug);

    if (!video) {
        return {
            title: "Video Not Found - Andy Nadal",
        };
    }

    return {
        title: video.title,
        description: video.description || "Watch this video",
        openGraph: {
            type: "video.other",
            title: video.title,
            description: video.description || "Watch this video",
            url: `https://andynadal.com/videos/${slug}`,
            images: video.thumbnail_url ? [video.thumbnail_url] : [],
        },
        twitter: {
            card: "player",
            title: video.title,
            description: video.description || "Watch this video",
            images: video.thumbnail_url ? [video.thumbnail_url] : [],
        },
        alternates: {
            canonical: `https://andynadal.com/videos/${slug}`,
        },
    };
}

export default async function VideoPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const video = await getVideoBySlug(slug);

    if (!video) {
        notFound();
    }

    const isShort = video.is_short === true;

    // Generate JSON-LD structured data for the video
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.title,
        description: video.description || video.title,
        uploadDate: video.created_at,
        thumbnailUrl: video.thumbnail_url || undefined,
        embedUrl: video.embed_url,
        contentUrl: video.embed_url,
    };

    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            <Script
                id="video-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(videoSchema),
                }}
            />
            <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Back Link */}
                <Link
                    href="/videos"
                    className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground transition-colors mb-8"
                >
                    <svg
                        className="mr-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Videos
                </Link>

                {/* Header */}
                <header className="mb-8 space-y-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <time dateTime={video.created_at}>
                            {new Date(video.created_at).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </time>
                        {isShort && (
                            <>
                                <span>•</span>
                                <span className="px-2 py-0.5 text-xs bg-green-600/10 text-green-600 rounded-full font-medium">
                                    Short
                                </span>
                            </>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        {video.title}
                    </h1>

                    {/* Description */}
                    {video.description && (
                        <p className="text-xl text-foreground/80 leading-relaxed">
                            {video.description}
                        </p>
                    )}
                </header>

                {/* Video Embed */}
                <div className="relative">
                    <div
                        className={`w-full ${
                            isShort
                                ? "aspect-[9/16] max-w-md mx-auto"
                                : "aspect-video"
                        } rounded-2xl overflow-hidden shadow-2xl`}
                    >
                        <iframe
                            src={video.embed_url}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </article>
        </main>
    );
}
