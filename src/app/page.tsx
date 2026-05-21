"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const MetricCard = ({
    value,
    label,
    delay = 0,
    inverted = false,
}: {
    value: string;
    label: string;
    delay?: number;
    inverted?: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={`${
            inverted
                ? "bg-background/10 border-background/30 text-background"
                : "bg-accent/5 border-accent/20"
        } border rounded-lg p-8 text-center`}
    >
        <div
            className={`text-4xl md:text-5xl font-display font-bold mb-3 ${
                inverted ? "text-accent-light" : "text-accent"
            }`}
        >
            {value}
        </div>
        <div
            className={`text-sm md:text-base font-medium uppercase tracking-wider ${
                inverted ? "text-background/70" : "text-foreground/60"
            }`}
        >
            {label}
        </div>
    </motion.div>
);

export default function Home() {
    const pausaSectionRef = useRef<HTMLElement>(null);
    const impactSectionRef = useRef<HTMLElement>(null);
    const ruutSectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress: pausaProgress } = useScroll({
        target: pausaSectionRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: impactProgress } = useScroll({
        target: impactSectionRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: ruutProgress } = useScroll({
        target: ruutSectionRef,
        offset: ["start end", "end start"],
    });

    const pausaY = useTransform(pausaProgress, [0, 1], [100, -100]);
    const impactScale = useTransform(
        impactProgress,
        [0, 0.5, 1],
        [0.95, 1, 0.95]
    );
    const ruutY = useTransform(ruutProgress, [0, 1], [-50, 50]);

    return (
        <main className="min-h-screen bg-background">
            <Hero />

            {/* Pausa Section 1: The Story */}
            <motion.section
                ref={pausaSectionRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-border"
            >
                {/* Floating particles */}
                <motion.div
                    style={{ y: pausaY }}
                    className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"
                />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-24"
                    >
                        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight text-foreground">
                            Pausa
                        </h2>
                        <p className="font-serif text-2xl md:text-4xl text-foreground/70 italic max-w-4xl mx-auto leading-relaxed">
                            Born from a panic attack,{" "}
                            <strong className="font-semibold not-italic text-foreground">
                                built to help others
                            </strong>{" "}
                            breathe through life's hardest moments
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-2 gap-20 items-start mb-24"
                    >
                        <div className="space-y-8">
                            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                                The Founding Story
                            </h3>
                            <div className="space-y-6 font-serif text-lg md:text-xl text-foreground/70 leading-relaxed">
                                <p>
                                    After personally experiencing a{" "}
                                    <em className="text-foreground/90">
                                        panic attack
                                    </em>
                                    , I turned that moment of vulnerability into
                                    action. Pausa was born from the simple truth
                                    that breathing can{" "}
                                    <strong className="font-bold text-foreground">
                                        transform
                                    </strong>{" "}
                                    how we feel—but most people don't know where
                                    to start.
                                </p>
                                <p>
                                    We're building a guided breathwork app that
                                    helps people identify how they feel, feel
                                    less alone, and regulate their nervous
                                    system through breathing.{" "}
                                    <strong className="font-bold">
                                        No meditation required, no spiritual
                                        rituals
                                    </strong>
                                    —just breathe and feel better.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            {/* Screenshot placeholder */}
                            <div className="aspect-[4/5] bg-accent/10 border-2 border-accent/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="text-8xl opacity-30"
                                >
                                    ⏸️
                                </motion.div>
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="absolute bottom-8 text-center text-sm text-foreground/40 uppercase tracking-widest px-4">
                                    App Screenshot Placeholder
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pausa Section 2: The Impact - INVERTED COLORS */}
            <motion.section
                ref={impactSectionRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-foreground text-background border-y border-accent/30 relative overflow-hidden"
            >
                {/* Animated background element */}
                <motion.div
                    style={{ scale: impactScale }}
                    className="absolute inset-0 bg-accent/5 pointer-events-none"
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-24"
                    >
                        <h3 className="font-display text-5xl md:text-7xl font-bold mb-8 text-background">
                            Making an Impact
                        </h3>
                        <p className="font-serif text-xl md:text-3xl text-background/80 max-w-3xl mx-auto italic">
                            Real numbers from helping people manage stress,
                            anxiety, and emotional overwhelm
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                    >
                        <MetricCard
                            value="$125K"
                            label="Seed Funding"
                            delay={0.1}
                            inverted={true}
                        />
                        <MetricCard
                            value="15K+"
                            label="Downloads"
                            delay={0.2}
                            inverted={true}
                        />
                        <MetricCard
                            value="500+"
                            label="Hours of Breathing"
                            delay={0.3}
                            inverted={true}
                        />
                        <MetricCard
                            value="5"
                            label="Team Members"
                            delay={0.4}
                            inverted={true}
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-background border-2 border-accent/20 rounded-lg p-12 md:p-16"
                    >
                        <h4 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-background">
                            Building for Impact
                        </h4>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="flex items-start gap-6">
                                    <div className="text-3xl">🎯</div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-xl text-background">
                                            Product-First Mindset
                                        </h5>
                                        <p className="font-serif text-background/70 leading-relaxed">
                                            Every decision starts with the user.
                                            Built products from scratch that
                                            people actually want to use{" "}
                                            <em>daily</em>.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="text-3xl">��</div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-xl text-background">
                                            Building Businesses
                                        </h5>
                                        <p className="font-serif text-background/70 leading-relaxed">
                                            Created{" "}
                                            <strong>
                                                sustainable revenue models
                                            </strong>{" "}
                                            with B2C and B2B subscriptions that
                                            drive real growth.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="text-3xl">👥</div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-xl text-background">
                                            Team Building
                                        </h5>
                                        <p className="font-serif text-background/70 leading-relaxed">
                                            Hired and led teams that ship.
                                            Created culture where execution
                                            meets excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-6">
                                    <div className="text-3xl">📈</div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-xl text-background">
                                            Growth & Scale
                                        </h5>
                                        <p className="font-serif text-background/70 leading-relaxed">
                                            Drove user acquisition from 0 to{" "}
                                            <strong>100K+</strong> through
                                            marketing, growth experiments, and
                                            product iteration.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="text-3xl">💡</div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-xl text-background">
                                            Problem Solving
                                        </h5>
                                        <p className="font-serif text-background/70 leading-relaxed">
                                            Identified pain points and built
                                            solutions. From{" "}
                                            <em>stress management</em> to{" "}
                                            <em>financial access</em>.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="text-3xl">🚀</div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-xl text-background">
                                            Fundraising & Investors
                                        </h5>
                                        <p className="font-serif text-background/70 leading-relaxed">
                                            Raised capital and worked with top
                                            investors including{" "}
                                            <strong>500 Global</strong>.
                                            Pitched, closed, and delivered.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pausa Section 3: The Mission */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 border-b border-border"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={itemVariants}
                        className="text-center max-w-5xl mx-auto space-y-12"
                    >
                        <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground">
                            Helping People Manage Stress & Anxiety
                        </h3>
                        <p className="font-serif text-xl md:text-3xl text-foreground/70 leading-relaxed">
                            Our mission is{" "}
                            <em className="text-foreground/90">
                                aspirational yet grounded
                            </em>
                            : help people identify how they feel, feel less
                            alone, and regulate through breathing. We're
                            building for the stressed founder, the anxious
                            professional, and anyone who needs{" "}
                            <strong className="font-bold text-foreground">
                                fast relief
                            </strong>{" "}
                            without meditation or spiritual practices.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="pt-12"
                        >
                            <Link
                                href="/pausa"
                                className="group inline-flex items-center px-12 py-6 rounded-lg bg-accent text-background text-xl font-bold hover:bg-accent-light transition-all duration-300 border-2 border-accent hover:border-accent-light"
                            >
                                Learn More About Pausa
                                <svg
                                    className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform"
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
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* RUUT CTO Section - ACCENT BACKGROUND */}
            <motion.section
                ref={ruutSectionRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-accent/10 border-b border-accent/30 relative overflow-hidden"
            >
                {/* Animated background element */}
                <motion.div
                    style={{ y: ruutY }}
                    className="absolute top-0 left-0 w-full h-full bg-accent-light/5 pointer-events-none"
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div variants={itemVariants} className="mb-20">
                        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-10 text-center text-foreground">
                            RUUT
                        </h2>
                        <p className="font-serif text-2xl md:text-4xl text-center text-foreground/70 italic max-w-4xl mx-auto leading-relaxed">
                            Founding team member at{" "}
                            <strong className="not-italic font-semibold text-accent">
                                500 Global-backed
                            </strong>{" "}
                            fintech. Built and scaled products helping Mexicans
                            invest in US markets.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 mb-20">
                        <motion.div variants={itemVariants}>
                            <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-10 h-full">
                                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                    Head of Product & Technology
                                </h3>
                                <p className="text-foreground/60 mb-8 font-medium uppercase tracking-wider text-sm">
                                    March 2022 - July 2025 · Founding Team
                                </p>
                                <ul className="space-y-6 font-serif text-foreground/70 text-lg">
                                    <li className="flex items-start gap-4">
                                        <span className="text-accent text-2xl font-bold">
                                            ✓
                                        </span>
                                        <span className="leading-relaxed">
                                            Joined as{" "}
                                            <strong className="font-bold text-foreground">
                                                founding team member
                                            </strong>{" "}
                                            and built product from 0 to 100K
                                            users
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-accent text-2xl font-bold">
                                            ✓
                                        </span>
                                        <span className="leading-relaxed">
                                            Led team of 7, built mobile and web
                                            products enabling{" "}
                                            <em>cross-border investing</em>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-accent text-2xl font-bold">
                                            ✓
                                        </span>
                                        <span className="leading-relaxed">
                                            Shipped instant money transfers
                                            between Mexico and US, reducing
                                            transfer time from{" "}
                                            <strong>3 days to seconds</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-accent text-2xl font-bold">
                                            ✓
                                        </span>
                                        <span className="leading-relaxed">
                                            Worked directly with 500 Global and
                                            navigated regulatory requirements
                                            with Mexico's securities commission
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            {/* Screenshot placeholder for RUUT */}
                            <div className="h-full min-h-[500px] bg-accent/10 border-2 border-accent/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="text-9xl opacity-30"
                                >
                                    📱
                                </motion.div>
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="absolute bottom-8 text-center text-sm text-foreground/40 uppercase tracking-widest px-4">
                                    RUUT App Screenshot Placeholder
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        <MetricCard value="100K+" label="App Downloads" />
                        <MetricCard value="7" label="Team Members" />
                        <MetricCard value="500 Global" label="Backed By" />
                    </motion.div>
                </div>
            </motion.section>

            {/* Education */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-accent/5 border-b border-border"
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div variants={itemVariants}>
                        <div className="bg-background border-2 border-accent/20 rounded-lg p-12 md:p-16 text-center">
                            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Tecnológico de Monterrey
                            </h3>
                            <p className="font-serif text-xl md:text-2xl font-semibold text-foreground/80 mb-3 italic">
                                Bachelor of Arts, Financial Management
                            </p>
                            <p className="text-foreground/60 mb-4 uppercase tracking-wider text-sm font-medium">
                                Graduated December 2022
                            </p>
                            <p className="text-foreground/70 font-serif">
                                Campus Santa Fe, Ciudad de México, Mexico
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-20 bg-background border-2 border-accent/20 rounded-lg p-12 md:p-16"
                    >
                        <h3 className="font-display text-4xl font-bold mb-12 text-center text-foreground">
                            How I Work
                        </h3>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="space-y-4">
                                <h4 className="font-bold text-2xl mb-4 text-accent">
                                    Build & Ship
                                </h4>
                                <p className="font-serif text-foreground/70 leading-relaxed">
                                    Zero to one execution. Turn ideas into
                                    products people use.{" "}
                                    <strong>Ship fast, iterate faster.</strong>
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-2xl mb-4 text-accent-light">
                                    Raise & Scale
                                </h4>
                                <p className="font-serif text-foreground/70 leading-relaxed">
                                    Fundraising, investor relations, and
                                    building teams. Grown products to{" "}
                                    <strong>100K+ users</strong>.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-2xl mb-4 text-accent">
                                    Product & Business
                                </h4>
                                <p className="font-serif text-foreground/70 leading-relaxed">
                                    Product strategy, growth marketing, revenue
                                    models. Focus on what matters:{" "}
                                    <em>users and metrics</em>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Blog Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
            >
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <motion.div variants={itemVariants}>
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground">
                            Blog & Insights
                        </h2>
                        <p className="font-serif text-xl md:text-3xl text-foreground/70 leading-relaxed">
                            Thoughts on{" "}
                            <em className="text-foreground/90">
                                entrepreneurship
                            </em>
                            , building compelling products, breathwork, and
                            creating solutions that matter.{" "}
                            <strong className="font-semibold text-foreground">
                                Lessons from the trenches
                            </strong>{" "}
                            of startup building.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/blog"
                            className="group inline-flex items-center px-12 py-6 rounded-lg bg-accent text-background text-xl font-bold hover:bg-accent-light transition-all duration-300 border-2 border-accent hover:border-accent-light"
                        >
                            Read Articles
                            <svg
                                className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform"
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
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact CTA - MUTED ACCENT BACKGROUND */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-muted/20"
            >
                <motion.div
                    variants={itemVariants}
                    className="max-w-5xl mx-auto text-center bg-background border-2 border-accent/30 rounded-lg p-16 md:p-24 relative overflow-hidden"
                >
                    {/* Animated particles */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                    />

                    <div className="relative z-10 space-y-10">
                        <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">
                            Let's Build Something Compelling
                        </h2>
                        <p className="font-serif text-xl md:text-3xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            Looking for a founder who ships? Whether you're an
                            investor, fellow entrepreneur, or potential partner,
                            let's create something{" "}
                            <strong className="font-bold text-foreground">
                                worth building
                            </strong>
                            .
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-12 py-6 rounded-lg bg-foreground text-background text-xl font-bold hover:bg-accent hover:text-background transition-all duration-300 border-2 border-foreground hover:border-accent"
                            >
                                Get in Touch
                            </Link>
                            <a
                                href="mailto:andy@andynadal.com"
                                className="px-12 py-6 rounded-lg border-2 border-foreground/30 hover:border-foreground hover:bg-foreground/5 text-xl font-bold transition-all duration-300"
                            >
                                andy@andynadal.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </main>
    );
}
