import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import {
    getArticleBySlug,
    getAllArticleSlugs,
    getArticleDescription,
} from "@/lib/cms";
import { BlogPostClient } from "@/components/blog-post-client";

// Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = await getAllArticleSlugs("en");
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticleBySlug(slug, "en");

    if (!article) {
        return {
            title: "Post Not Found - Andy Nadal",
        };
    }

    const description = getArticleDescription(article);

    return {
        title: article.title,
        description: description,
        authors: [{ name: article.author, url: "https://andynadal.com" }],
        openGraph: {
            type: "article",
            title: article.title,
            description: description,
            publishedTime: article.published_at,
            authors: [article.author],
            url: `https://andynadal.com/blog/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: description,
            creator: "@andynadal",
        },
        alternates: {
            canonical: `https://andynadal.com/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug, "en");

    if (!article) {
        notFound();
    }

    const description = getArticleDescription(article);

    // Generate JSON-LD structured data for the blog post
    const blogPostSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: description,
        datePublished: article.published_at,
        author: {
            "@type": "Person",
            name: article.author,
            url: "https://andynadal.com",
        },
        publisher: {
            "@type": "Person",
            name: article.author,
            url: "https://andynadal.com",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://andynadal.com/blog/${slug}`,
        },
    };

    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            <Script
                id="blog-post-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogPostSchema),
                }}
            />
            <BlogPostClient>
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    {/* Back Link */}
                    <Link
                        href="/blog"
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
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12 space-y-6">
                        {/* Meta Info */}
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <time dateTime={article.published_at}>
                                {new Date(
                                    article.published_at
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                            <span>•</span>
                            <span>{article.author}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            {article.title}
                        </h1>
                    </header>

                    {/* Content */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-bold prose-headings:text-foreground
                            prose-p:text-foreground/80 prose-p:leading-relaxed
                            prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-foreground prose-strong:font-semibold
                            prose-code:text-foreground prose-code:bg-foreground/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-foreground/5 prose-pre:text-foreground
                            prose-blockquote:border-green-600 prose-blockquote:text-foreground/70
                            prose-img:rounded-xl prose-img:shadow-lg
                            prose-hr:border-foreground/10
                            prose-ul:text-foreground/80 prose-ol:text-foreground/80
                            prose-li:text-foreground/80"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>
            </BlogPostClient>
        </main>
    );
}
