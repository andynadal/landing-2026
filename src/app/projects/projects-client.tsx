"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Pausa",
        description:
            "Guided breathwork app for stress, anxiety, emotional awareness, and screen-time reduction. Started as a side project in July 2024, launched publicly in January 2025, became full-time in July 2025. $120K raised, 15K+ downloads, B2C/B2B subscription revenue.",
        category: "Current Startup",
        tech: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Next.js", "TypeScript", "Supabase", "AI/ML"],
        logo: "/assets/pausa-icon.png",
        link: "/pausa",
    },
    {
        title: "Minute CMS",
        description: "The simplest CMS to integrate for automatic AI blogging",
        category: "Content Management",
        tech: ["CMS", "AI", "Automation", "Cloud"],
        link: "https://minutecms.com",
    },
    {
        title: "RUUT",
        description:
            "Investment platform for non-investors. Making US stock investments accessible for Mexicans—transfer Mexican pesos, invest in US dollars in the US stock market. Reached 100K downloads, backed by 500 Global.",
        category: "FinTech",
        tech: ["Swift", "SwiftUI", "UIKit", "Kotlin", "iOS", "Android", "Fintech", "KYC"],
        logo: "/assets/ruut-icon.png",
        link: "https://ruut.mx",
        role: "CTO & Founding Team",
    },
    {
        title: "Journal Habit",
        description:
            "An app that combines journaling with habit tracking, to promote a safe space for building the life you want",
        category: "Personal Development",
        tech: ["Mobile", "Cloud", "Habit Tracking"],
        logo: "/assets/journal-habit-logo.png",
        role: "Founder & Developer",
    },
    {
        title: "Pro Ledger",
        description:
            "An app that allows you to track your expenses and get professional-grade financial analysis and metrics",
        category: "Finance",
        tech: ["Mobile", "Analytics", "Financial Tools"],
        logo: "/assets/pro-ledger-logo.png",
        role: "Founder & Developer",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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
        },
    },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32 border-b border-border">
                <div className="absolute inset-0 pointer-events-none">
                    {/* Organic floating shapes matching home page */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            rotate: [0, 360, 0],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 60, 0],
                            rotate: [360, 0, 360],
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent-light/8 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-8"
                    >
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                            Projects
                        </h1>
                        <p className="font-serif text-2xl md:text-4xl text-foreground/70 italic max-w-3xl mx-auto leading-relaxed">
                            Building products that solve{" "}
                            <strong className="font-semibold not-italic text-foreground">
                                real problems
                            </strong>{" "}
                            for real people
                        </p>
                        <p className="font-serif text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                            From mental health to fintech, each project
                            represents a commitment to excellence and
                            innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group relative will-change-transform"
                            >
                                {/* Subtle accent glow on hover */}
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-lg blur-lg transition-opacity duration-500" />

                                <div className="relative h-full p-8 rounded-lg bg-background border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl">
                                    {/* Category Badge */}
                                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-xs font-semibold text-accent-light mb-4 border border-accent/20">
                                        {project.category}
                                    </div>

                                    {project.logo && (
                                        <motion.div
                                            className="mb-5 h-14 w-14 rounded-lg overflow-hidden bg-background"
                                            whileHover={{
                                                scale: 1.06,
                                                rotate: [0, -4, 4, 0],
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Image
                                                src={project.logo}
                                                alt={`${project.title} logo`}
                                                width={56}
                                                height={56}
                                                className="h-full w-full object-cover"
                                            />
                                        </motion.div>
                                    )}

                                    {/* Title */}
                                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                                        {project.title}
                                    </h3>

                                    {/* Role */}
                                    {project.role && (
                                        <p className="font-serif text-sm font-semibold text-accent mb-3 italic">
                                            {project.role}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p className="font-serif text-foreground/70 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-muted/30 text-xs font-medium text-foreground/60 border border-muted/50 hover:bg-muted/50 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    {project.link &&
                                        (project.link.startsWith("http") ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-light transition-colors group-hover:underline"
                                            >
                                                Explore Project
                                                <svg
                                                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                                            </a>
                                        ) : (
                                            <Link
                                                href={project.link}
                                                className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-light transition-colors group-hover:underline"
                                            >
                                                Explore Project
                                                <svg
                                                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                                            </Link>
                                        ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 md:py-32 bg-accent/5 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-3 gap-8 text-center"
                    >
                        <div className="p-8 rounded-lg bg-background border border-accent/20">
                            <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                                50+
                            </div>
                            <div className="font-serif text-foreground/70 uppercase tracking-wider text-sm">
                                Projects Delivered
                            </div>
                        </div>
                        <div className="p-8 rounded-lg bg-background border border-accent/20">
                            <div className="font-display text-4xl md:text-5xl font-bold text-accent-light mb-2">
                                100K+
                            </div>
                            <div className="font-serif text-foreground/70 uppercase tracking-wider text-sm">
                                Users Reached
                            </div>
                        </div>
                        <div className="p-8 rounded-lg bg-background border border-accent/20">
                            <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                                10+
                            </div>
                            <div className="font-serif text-foreground/70 uppercase tracking-wider text-sm">
                                Years Experience
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center bg-accent/10 rounded-lg p-12 md:p-16 border border-accent/30"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                            Have a Project in Mind?
                        </h2>
                        <p className="font-serif text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
                            Let&apos;s collaborate and build something
                            extraordinary together
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent text-background font-medium hover:bg-accent-light transition-colors duration-300"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
