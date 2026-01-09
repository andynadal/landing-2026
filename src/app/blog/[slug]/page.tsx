import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostBySlug, getAllPostSlugs } from "@/lib/ghost";
import { BlogPostClient } from "@/components/blog-post-client";

// Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
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
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found - Andy Nadal",
        };
    }

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
        keywords: post.title.split(" "),
        authors: [{ name: "Andy Nadal" }],
        openGraph: {
            type: "article",
            title: post.og_title || post.title,
            description: post.og_description || post.excerpt,
            images: post.og_image || post.feature_image || undefined,
            publishedTime: post.published_at,
            modifiedTime: post.updated_at,
        },
        twitter: {
            card: "summary_large_image",
            title: post.twitter_title || post.title,
            description: post.twitter_description || post.excerpt,
            images: post.twitter_image || post.feature_image || undefined,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
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
                            <time dateTime={post.published_at}>
                                {new Date(post.published_at).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </time>
                            <span>•</span>
                            <span>{post.reading_time} min read</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        {post.custom_excerpt && (
                            <p className="text-xl text-foreground/70">
                                {post.custom_excerpt}
                            </p>
                        )}

                        {/* Feature Image */}
                        {post.feature_image && (
                            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden bg-foreground/5">
                                <Image
                                    src={post.feature_image}
                                    alt={post.feature_image_alt || post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {post.feature_image_caption && (
                                    <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-4">
                                        {post.feature_image_caption}
                                    </figcaption>
                                )}
                            </div>
                        )}
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
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </article>
            </BlogPostClient>
        </main>
    );
}
