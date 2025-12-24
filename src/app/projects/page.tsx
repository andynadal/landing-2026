"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Pausa",
        description: "AI-powered productivity and work-life balance platform",
        category: "Current Startup",
        tech: ["Next.js", "AI/ML", "TypeScript", "Cloud"],
        gradient: "from-blue-600 to-purple-600",
        icon: "⏸️",
        link: "/pausa",
    },
    {
        title: "RUUT",
        description:
            "An investment platform for non-investors, making stock investments more accessible for Mexicans. Allows users to transfer Mexican pesos and invest in US dollars in the US stock market",
        category: "FinTech",
        tech: ["iOS", "Android", "Serverless", "Cloud"],
        gradient: "from-purple-600 to-pink-600",
        icon: "💰",
        link: "https://ruut.mx",
        role: "Head of Technology",
    },
    {
        title: "Journal Habit",
        description:
            "An app that combines journaling with habit tracking, to promote a safe space for building the life you want",
        category: "Personal Development",
        tech: ["Mobile", "Cloud", "Habit Tracking"],
        gradient: "from-green-600 to-blue-600",
        icon: "📓",
        role: "Founder & Developer",
    },
    {
        title: "Pro Ledger",
        description:
            "An app that allows you to track your expenses and get professional-grade financial analysis and metrics",
        category: "Finance",
        tech: ["Mobile", "Analytics", "Financial Tools"],
        gradient: "from-orange-600 to-red-600",
        icon: "📊",
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
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-6"
                    >
                        <div className="text-6xl md:text-8xl mb-6">🚀</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                            A collection of innovative solutions and impactful
                            products
                        </p>
                        <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
                            From startups to enterprise solutions, each project
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
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-2xl bg-background border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl">
                                    {/* Category Badge */}
                                    <div className="inline-block px-3 py-1 rounded-full bg-foreground/5 text-xs font-medium text-foreground/70 mb-4">
                                        {project.category}
                                    </div>

                                    {/* Icon */}
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3">
                                        <span
                                            className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                                        >
                                            {project.title}
                                        </span>
                                    </h3>

                                    {/* Role */}
                                    {project.role && (
                                        <p className="text-sm font-medium text-foreground/60 mb-3">
                                            {project.role}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p className="text-foreground/70 mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-foreground/5 text-xs font-medium text-foreground/60"
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
                                                className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:underline`}
                                            >
                                                Learn More
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
                                            </a>
                                        ) : (
                                            <Link
                                                href={project.link}
                                                className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:underline`}
                                            >
                                                Learn More
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
                                            </Link>
                                        ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-foreground/5 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-3 gap-8 text-center"
                    >
                        <div className="p-8 rounded-2xl bg-background border border-foreground/10">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                50+
                            </div>
                            <div className="text-foreground/70">
                                Projects Delivered
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-background border border-foreground/10">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                100K+
                            </div>
                            <div className="text-foreground/70">
                                Users Reached
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-background border border-foreground/10">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                                10+
                            </div>
                            <div className="text-foreground/70">
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
                        className="text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl p-12 md:p-16 border border-foreground/10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Have a Project in Mind?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-8">
                            Let&apos;s collaborate and build something
                            extraordinary together
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
