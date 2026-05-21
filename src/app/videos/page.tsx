import type { Metadata } from "next";
import Image from "next/image";

import { fetchVideos } from "@/lib/cms";
import { Pagination } from "@/components/pagination";

export const metadata: Metadata = {
    title: "Videos",
    description:
        "Video content on entrepreneurship, technology, and product development. Watch insights, tutorials, and stories from building successful products.",
    keywords: [
        "videos",
        "video content",
        "entrepreneurship videos",
        "tech videos",
        "startup videos",
        "product development",
        "business videos",
        "technology tutorials",
        "startup stories",
        "tech insights",
    ],
    openGraph: {
        title: "Videos - Andy Nadal",
        description:
            "Video content on entrepreneurship, technology, and product development.",
        url: "https://andynadal.com/videos",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Videos - Andy Nadal",
        description:
            "Video content on entrepreneurship, technology, and product development.",
    },
    alternates: {
        canonical: "https://andynadal.com/videos",
    },
};

// Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

export default async function VideosPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const { page: pageParam } = await searchParams;
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
    const pageSize = 18; // Show 18 videos per page

    const { videos, pagination } = await fetchVideos(currentPage - 1, pageSize);

    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                            Videos
                        </h1>
                        <p className="font-serif text-2xl md:text-4xl text-foreground/70 max-w-3xl mx-auto leading-relaxed italic">
                            Insights, tutorials, and{" "}
                            <strong className="font-semibold not-italic text-foreground">
                                stories from building
                            </strong>{" "}
                            products and companies
                        </p>
                    </div>
                </div>
            </section>

            {/* Videos Grid */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {videos.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-foreground/60">
                                No videos available yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videos.map((video) => {
                                    const isShort = video.is_short === true;
                                    const aspectRatio = isShort
                                        ? "aspect-[9/16]"
                                        : "aspect-video";

                                    return (
                                        <a
                                            key={video.id}
                                            href={`/videos/${video.slug}`}
                                            className="group"
                                        >
                                            <article className="h-full rounded-lg bg-background border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
                                                {/* Video Embed */}
                                                <div
                                                    className={`w-full ${aspectRatio} bg-accent/5 relative overflow-hidden`}
                                                >
                                                    {video.thumbnail_url ? (
                                                        <Image
                                                            src={
                                                                video.thumbnail_url
                                                            }
                                                            alt={video.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-4xl">
                                                            🎬
                                                        </div>
                                                    )}
                                                    {/* Play button overlay */}
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <svg
                                                                className="w-8 h-8 text-background ml-1"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 space-y-4">
                                                    {/* Created Date */}
                                                    <div className="text-sm text-accent-light font-serif">
                                                        {new Date(
                                                            video.created_at
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </div>

                                                    {/* Title */}
                                                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                                        {video.title}
                                                    </h2>

                                                    {/* Description */}
                                                    {video.description && (
                                                        <p className="font-serif text-sm text-foreground/70 line-clamp-3 leading-relaxed">
                                                            {video.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </article>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            <Pagination
                                currentPage={currentPage}
                                totalPages={pagination.total_pages}
                                basePath="/videos"
                            />
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
