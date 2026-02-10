import type { Metadata } from "next";
import Link from "next/link";

import { fetchArticles } from "@/lib/cms";
import { BlogListClient } from "@/components/blog-list-client";
import { Pagination } from "@/components/pagination";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Thoughts on entrepreneurship, development, and building products that matter. Articles about startups, software engineering, product development, and lessons learned building companies.",
    keywords: [
        "blog",
        "entrepreneurship",
        "software development",
        "startup blog",
        "product development",
        "technical blog",
        "business strategy",
        "software engineering",
        "startup lessons",
        "building products",
        "tech entrepreneurship",
    ],
    openGraph: {
        title: "Blog - Andy Nadal",
        description:
            "Thoughts on entrepreneurship, development, and building products that matter.",
        url: "https://andynadal.com/blog",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Andy Nadal",
        description:
            "Thoughts on entrepreneurship, development, and building products that matter.",
    },
    alternates: {
        canonical: "https://andynadal.com/blog",
    },
};

// Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const { page: pageParam } = await searchParams;
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
    const pageSize = 18; // Show 18 articles per page

    const { articles, pagination } = await fetchArticles(
        currentPage - 1,
        pageSize,
        "en"
    );

    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            {/* Hero Section */}
            <BlogListClient>
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <div className="text-6xl md:text-8xl mb-6">✍️</div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    Blog & Insights
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                                Thoughts on entrepreneurship, development, and
                                building products that matter
                            </p>
                        </div>
                    </div>
                </section>

                {/* Posts Grid */}
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {articles.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-foreground/60">
                                    No posts available yet. Check back soon!
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {articles.map((article) => (
                                        <Link
                                            key={article.id}
                                            href={`/blog/${article.slug}`}
                                            className="group"
                                        >
                                            <article className="h-full rounded-2xl bg-background border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl overflow-hidden">
                                                {/* Content */}
                                                <div className="p-6 space-y-4">
                                                    {/* Published Date and Author */}
                                                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                                                        <span>
                                                            {new Date(
                                                                article.published_at
                                                            ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                }
                                                            )}
                                                        </span>
                                                        <span>•</span>
                                                        <span>
                                                            {article.author}
                                                        </span>
                                                    </div>

                                                    {/* Title */}
                                                    <h2 className="text-2xl font-bold group-hover:text-green-600 transition-colors">
                                                        {article.title}
                                                    </h2>

                                                    {/* Read More Link */}
                                                    <div className="flex items-center text-sm font-medium text-green-600">
                                                        Read More
                                                        <svg
                                                            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={pagination.total_pages}
                                    basePath="/blog"
                                />
                            </>
                        )}
                    </div>
                </section>
            </BlogListClient>
        </main>
    );
}
