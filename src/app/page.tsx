"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Hero from "@/components/hero";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <Hero />

            {/* Featured Sections */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
            >
                <motion.section
                    variants={itemVariants}
                    className="mb-20 md:mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Pausa
                                    </span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground/90">
                                    Breath Work & Breathing Techniques for
                                    Modern Life
                                </h3>
                                <p className="text-lg text-foreground/70">
                                    A breakthrough breathing app revolutionizing
                                    stress management. Master breath work and
                                    breathing techniques to regulate your
                                    nervous system - no meditation required.
                                    Built for founders, professionals, and
                                    anyone seeking fast relief from stress and
                                    anxiety.
                                </p>
                            </motion.div>
                            <Link
                                href="/pausa"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
                                aria-label="Learn more about Pausa breathing app"
                            >
                                Learn More
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center"
                            role="img"
                            aria-label="Pausa breathing app illustration"
                        >
                            <div className="text-6xl">⏸️</div>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    variants={itemVariants}
                    className="mb-20 md:mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center order-2 md:order-1"
                            role="img"
                            aria-label="Product building illustration"
                        >
                            <div className="text-6xl">🚀</div>
                        </motion.div>
                        <div className="space-y-6 order-1 md:order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Projects
                                    </span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground/90">
                                    Building Compelling Products
                                </h3>
                                <p className="text-lg text-foreground/70">
                                    Explore my portfolio of compelling products
                                    built from zero to one. From fintech
                                    platforms to wellness apps, each project
                                    solves real problems for real people. See
                                    what happens when entrepreneurship meets
                                    execution.
                                </p>
                            </motion.div>
                            <Link
                                href="/projects"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
                                aria-label="View product portfolio and projects"
                            >
                                View Projects
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    variants={itemVariants}
                    className="mb-20 md:mb-32"
                >
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2
                                id="blog-heading"
                                className="text-3xl md:text-5xl font-bold mb-4"
                            >
                                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    Blog & Insights
                                </span>
                            </h2>
                            <p className="text-lg text-foreground/70">
                                Thoughts on entrepreneurship, building
                                compelling products, breath work, and creating
                                solutions that matter. Lessons from the trenches
                                of startup building.
                            </p>
                        </motion.div>
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 group"
                            aria-label="Read blog articles about entrepreneurship and product building"
                        >
                            Read Articles
                            <svg
                                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </motion.section>

                <motion.section
                    variants={itemVariants}
                    className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 md:p-16 border border-foreground/10"
                    aria-label="Contact call to action"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Let&apos;s Build Something Compelling
                        </h2>
                        <p className="text-lg text-foreground/70">
                            Looking for a founder who ships? Whether you&apos;re
                            an investor, fellow entrepreneur, or potential
                            partner, let&apos;s create something worth building.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300"
                            aria-label="Get in touch with Andy Nadal"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </motion.section>
            </motion.div>
        </main>
    );
}
