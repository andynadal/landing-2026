"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const fadeInItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <motion.h1
                            variants={fadeInItem}
                            className="text-4xl md:text-6xl font-bold text-center"
                        >
                            About Andy Nadal
                        </motion.h1>

                        <motion.div
                            variants={fadeInItem}
                            className="space-y-4 text-center"
                        >
                            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                                CEO and Founder of Pausa
                            </p>

                            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                                Building technology that makes mental health
                                support accessible when it matters most.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Who I Am */}
            <section className="py-12 md:py-20 bg-foreground/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={fadeInItem}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            Who I Am
                        </motion.h2>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-4 text-lg text-foreground/80 leading-relaxed"
                        >
                            <motion.p variants={fadeInItem}>
                                I&apos;m an entrepreneur and software engineer
                                who believes that the best technology disappears
                                when you need it — it just works.
                            </motion.p>

                            <motion.p variants={fadeInItem}>
                                As the founder and CEO of Pausa, I&apos;m
                                building tools that help people manage stress
                                and anxiety without the complexity, rituals, or
                                spiritual framing that often comes with wellness
                                apps.
                            </motion.p>

                            <motion.p variants={fadeInItem}>
                                My approach is rooted in systems thinking,
                                product clarity, and an obsession with solving
                                real problems for real people.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pausa - My Current Focus */}
            <section className="py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={fadeInItem}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            What I&apos;m Building Now
                        </motion.h2>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.p
                                variants={fadeInItem}
                                className="text-xl md:text-2xl font-medium text-foreground leading-relaxed"
                            >
                                Pausa is a breathing app for people who
                                don&apos;t meditate.
                            </motion.p>

                            <motion.p
                                variants={fadeInItem}
                                className="text-lg text-foreground/80 leading-relaxed"
                            >
                                Born from my own experience with a panic attack,
                                Pausa provides guided breathwork to help you
                                regulate your nervous system when stress and
                                anxiety feel overwhelming — no rituals, no
                                spirituality, just fast relief when you need it.
                            </motion.p>

                            <motion.div
                                variants={staggerContainer}
                                className="bg-foreground/5 rounded-lg p-6 md:p-8 space-y-4"
                            >
                                <motion.p
                                    variants={fadeInItem}
                                    className="text-lg text-foreground font-medium"
                                >
                                    Resources for mental wellness:
                                </motion.p>

                                <motion.ul
                                    variants={staggerContainer}
                                    className="space-y-3"
                                >
                                    <motion.li variants={fadeInItem}>
                                        <Link
                                            href="https://pausaapp.com/nadal"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
                                        >
                                            Pausa App
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </Link>
                                        <p className="text-base text-foreground/70 mt-1">
                                            Guided breathwork to help you manage
                                            stress and anxiety without feeling
                                            alone
                                        </p>
                                    </motion.li>

                                    <motion.li variants={fadeInItem}>
                                        <Link
                                            href="https://business.pausaapp.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
                                        >
                                            Pausa for Business
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </Link>
                                        <p className="text-base text-foreground/70 mt-1">
                                            Reduce employee burnout and turnover
                                            with workplace wellness solutions
                                        </p>
                                    </motion.li>

                                    <motion.li variants={fadeInItem}>
                                        <Link
                                            href="https://app.pausaapp.com/quiz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
                                        >
                                            Stress & Anxiety Assessment
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </Link>
                                        <p className="text-base text-foreground/70 mt-1">
                                            Do you know if you have anxiety or
                                            stress? Take the assessment to find
                                            out
                                        </p>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                className="bg-foreground/5 rounded-lg p-6 md:p-8 space-y-4 mt-6"
                            >
                                <motion.p
                                    variants={fadeInItem}
                                    className="text-lg text-foreground font-medium"
                                >
                                    Developer tools & resources:
                                </motion.p>

                                <motion.ul
                                    variants={staggerContainer}
                                    className="space-y-3"
                                >
                                    <motion.li variants={fadeInItem}>
                                        <Link
                                            href="https://minutecms.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
                                        >
                                            Minute CMS
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </Link>
                                        <p className="text-base text-foreground/70 mt-1">
                                            The easiest CMS to integrate into
                                            your website — simple, fast, and
                                            developer-friendly
                                        </p>
                                    </motion.li>

                                    <motion.li variants={fadeInItem}>
                                        <Link
                                            href="https://andynadal.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
                                        >
                                            Andy Nadal
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </Link>
                                        <p className="text-base text-foreground/70 mt-1">
                                            Personal landing page showcasing
                                            projects, blog, and professional
                                            experience
                                        </p>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* My Philosophy */}
            <section className="py-12 md:py-20 bg-foreground/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={fadeInItem}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            How I Build
                        </motion.h2>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-4 text-lg text-foreground/80 leading-relaxed"
                        >
                            <motion.p variants={fadeInItem}>
                                I build companies from first principles. Every
                                feature, every design decision, every line of
                                code exists to solve a specific problem.
                            </motion.p>

                            <motion.div
                                variants={staggerContainer}
                                className="space-y-2 ml-6"
                            >
                                <motion.p variants={fadeInItem}>
                                    Fewer features, better execution
                                </motion.p>
                                <motion.p variants={fadeInItem}>
                                    Clarity over noise
                                </motion.p>
                                <motion.p variants={fadeInItem}>
                                    Usefulness over hype
                                </motion.p>
                            </motion.div>

                            <motion.p
                                variants={fadeInItem}
                                className="text-xl font-medium text-foreground pt-4"
                            >
                                Systems over vibes. Outcomes over appearances.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Mental Health Tech */}
            <section className="py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={fadeInItem}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            Why Mental Health Technology
                        </motion.h2>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-4 text-lg text-foreground/80 leading-relaxed"
                        >
                            <motion.p variants={fadeInItem}>
                                Most mental health tools fail when you need them
                                most. They require motivation, discipline, and
                                mental bandwidth — the exact things that
                                disappear when you&apos;re anxious or
                                overwhelmed.
                            </motion.p>

                            <motion.p variants={fadeInItem}>
                                I&apos;m building technology that works in
                                low-bandwidth moments. Tools that meet you where
                                you are, not where wellness culture thinks you
                                should be.
                            </motion.p>

                            <motion.p
                                variants={fadeInItem}
                                className="text-xl font-medium text-foreground pt-4"
                            >
                                Mental health support should be as fast and
                                reliable as turning on a light switch.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Connect */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-foreground/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="text-center space-y-8"
                    >
                        <motion.div
                            variants={staggerContainer}
                            className="space-y-4"
                        >
                            <motion.p
                                variants={fadeInItem}
                                className="text-xl md:text-2xl font-medium text-foreground leading-relaxed"
                            >
                                Want to connect or learn more about what
                                I&apos;m building?
                            </motion.p>

                            <motion.p
                                variants={fadeInItem}
                                className="text-lg text-foreground/80 leading-relaxed"
                            >
                                Visit my{" "}
                                <Link
                                    href="/"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    personal landing page
                                </Link>{" "}
                                or reach out through my{" "}
                                <Link
                                    href="/contact"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    contact page
                                </Link>
                                .
                            </motion.p>
                        </motion.div>

                        <motion.div variants={scaleIn} className="pt-4">
                            <Link
                                href="/pausa"
                                className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300 text-lg"
                            >
                                Learn More About Pausa
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
