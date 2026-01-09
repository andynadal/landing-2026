"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-6"
                    >
                        <div className="text-6xl md:text-8xl mb-6">🔍</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                Post Not Found
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                            The blog post you&apos;re looking for doesn&apos;t
                            exist or has been removed.
                        </p>
                        <div className="flex gap-4 justify-center pt-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                            >
                                View All Posts
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground/5 text-foreground font-medium hover:bg-foreground/10 transition-all duration-300"
                            >
                                Go Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
