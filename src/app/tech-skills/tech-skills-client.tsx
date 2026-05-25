"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { techSkills, getAllCategories } from "@/lib/tech-skills";

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
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function TechSkillsClient() {
    const categories = getAllCategories();

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
            >
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
                    >
                        Technical Skills
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-serif text-xl md:text-3xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        A decade of experience building scalable products across
                        AI, mobile, backend, and infrastructure
                    </motion.p>
                </div>
            </motion.section>

            {/* Skills by Category */}
            {categories.map((category, categoryIndex) => {
                const categorySkills = techSkills.filter(
                    (skill) => skill.category === category
                );

                return (
                    <motion.section
                        key={category}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={`py-24 md:py-32 px-4 sm:px-6 lg:px-8 ${
                            categoryIndex % 2 === 0
                                ? "bg-background"
                                : "bg-accent/5"
                        } border-b border-border`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <motion.h2
                                variants={itemVariants}
                                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
                            >
                                {category}
                            </motion.h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {categorySkills.map((skill) => (
                                    <motion.div
                                        key={skill.slug}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={`/tech-skills/${skill.slug}`}
                                            className="block group h-full"
                                        >
                                            <div className="bg-background rounded-lg p-8 hover:bg-accent/5 transition-all duration-300 h-full flex flex-col">
                                                {/* Experience Badge */}
                                                <div className="flex items-start justify-end mb-4">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider">
                                                        {skill.experience}
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-display text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                                    {skill.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="font-serif text-lg text-foreground/70 leading-relaxed mb-6 flex-grow">
                                                    {skill.description}
                                                </p>

                                                {/* Highlights */}
                                                <div className="space-y-2 mb-6">
                                                    {skill.highlights.map(
                                                        (highlight, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-start gap-2"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            2
                                                                        }
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                                <span className="font-serif text-foreground/80">
                                                                    {highlight}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                {/* Technologies */}
                                                {skill.technologies && (
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {skill.technologies.map(
                                                            (tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 rounded-full bg-accent/5 text-accent/80 text-sm font-medium"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                )}

                                                {/* Learn More Link */}
                                                <div className="flex items-center text-accent font-semibold group-hover:text-accent-light transition-colors pt-4 border-t border-accent/10">
                                                    <span>
                                                        View detailed breakdown
                                                    </span>
                                                    <svg
                                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                );
            })}

            {/* CTA Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-muted/20"
            >
                <motion.div
                    variants={itemVariants}
                    className="max-w-5xl mx-auto text-center bg-background border-2 border-accent/30 rounded-lg p-16 md:p-24"
                >
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                        Let's Work Together
                    </h3>
                    <p className="font-serif text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
                        Looking for someone with this breadth of experience?
                        Let's connect and build something exceptional.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-light text-background font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </motion.section>
        </main>
    );
}
