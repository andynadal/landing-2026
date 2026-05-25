"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { TechSkill } from "@/lib/tech-skills";

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

interface Props {
    skill: TechSkill;
}

export default function TechSkillDetailClient({ skill }: Props) {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
            >
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 text-sm text-foreground/60 mb-8"
                    >
                        <Link
                            href="/"
                            className="hover:text-accent transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            href="/tech-skills"
                            className="hover:text-accent transition-colors"
                        >
                            Technical Skills
                        </Link>
                        <span>/</span>
                        <span className="text-foreground/80">
                            {skill.title}
                        </span>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider">
                            {skill.category}
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
                    >
                        {skill.title}
                    </motion.h1>

                    {/* Short Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-serif text-2xl md:text-3xl text-foreground/70 leading-relaxed mb-8"
                    >
                        {skill.shortDescription}
                    </motion.p>

                    {/* Experience Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/5 border border-accent/20"
                    >
                        <svg
                            className="w-5 h-5 text-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="font-semibold text-foreground">
                            {skill.experience} of experience
                        </span>
                    </motion.div>
                </div>
            </motion.section>

            {/* Description Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5"
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div variants={itemVariants}>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                            Overview
                        </h2>
                        <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-relaxed">
                            {skill.description}
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Detailed Description Section */}
            {skill.detailedDescription &&
                skill.detailedDescription.length > 0 && (
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
                    >
                        <div className="max-w-5xl mx-auto">
                            <motion.h2
                                variants={itemVariants}
                                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12"
                            >
                                In-Depth Experience
                            </motion.h2>
                            <div className="space-y-6">
                                {skill.detailedDescription.map((para, idx) => (
                                    <motion.p
                                        key={idx}
                                        variants={itemVariants}
                                        className="font-serif text-lg md:text-xl text-foreground/70 leading-relaxed"
                                    >
                                        {para}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

            {/* Projects Section */}
            {skill.projects && skill.projects.length > 0 && (
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            variants={itemVariants}
                            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12"
                        >
                            Projects Using This Skill
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {skill.projects.map((project, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <Link
                                        href={project.url}
                                        className="block group"
                                    >
                                        <div className="bg-background rounded-lg p-8 hover:bg-accent/5 transition-all duration-300 h-full">
                                            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                                {project.name}
                                            </h3>
                                            <p className="font-serif text-lg text-foreground/70 leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center text-accent font-medium group-hover:text-accent-light transition-colors">
                                                <span>View project</span>
                                                <svg
                                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            )}

            {/* Highlights Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
            >
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        variants={itemVariants}
                        className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12"
                    >
                        Key Highlights
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skill.highlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-accent/5 border border-accent/20 rounded-lg p-6 flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                                    {highlight}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Technologies Section */}
            {skill.technologies && skill.technologies.length > 0 && (
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            variants={itemVariants}
                            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12"
                        >
                            Technologies & Tools
                        </motion.h2>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            {skill.technologies.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-6 py-3 rounded-lg bg-background text-foreground font-semibold text-lg hover:bg-accent/5 transition-colors"
                                >
                                    {tech}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* Impact Section */}
            {skill.impact && (
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="bg-accent/5 border-2 border-accent/30 rounded-lg p-12 md:p-16 text-center"
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Real Impact
                            </h2>
                            <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-relaxed italic">
                                "{skill.impact}"
                            </p>
                        </motion.div>
                    </div>
                </motion.section>
            )}

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
                        Interested in This Expertise?
                    </h3>
                    <p className="font-serif text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
                        Let's discuss how this experience can help your project
                        succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-light text-background font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/tech-skills"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold transition-all duration-300"
                        >
                            View All Skills
                        </Link>
                    </div>
                </motion.div>
            </motion.section>
        </main>
    );
}
