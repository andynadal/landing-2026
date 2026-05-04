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
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const MetricCard = ({
    value,
    label,
    delay = 0,
}: {
    value: string;
    label: string;
    delay?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
    >
        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
            {value}
        </div>
        <div className="text-sm md:text-base text-foreground/70 font-medium">
            {label}
        </div>
    </motion.div>
);

export default function Home() {
    const pausaSectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress: pausaProgress } = useScroll({
        target: pausaSectionRef,
        offset: ["start end", "end start"],
    });

    const pausaY = useTransform(pausaProgress, [0, 1], [100, -100]);

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
                className="relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden"
            >
                {/* Floating elements */}
                <motion.div
                    style={{ y: pausaY }}
                    className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
                />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Pausa
                            </span>
                        </h2>
                        <p className="text-2xl md:text-3xl text-foreground/80 font-light max-w-4xl mx-auto leading-relaxed">
                            Born from a panic attack, built to help others
                            breathe through life&apos;s hardest moments
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-2 gap-16 items-center mb-20"
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                                The Founding Story
                            </h3>
                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                                After personally experiencing a panic attack, I
                                turned that moment of vulnerability into action.
                                Pausa was born from the simple truth that
                                breathing can transform how we feel—but most
                                people don&apos;t know where to start.
                            </p>
                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                                We&apos;re building a guided breathwork app that
                                helps people identify how they feel, feel less
                                alone, and regulate their nervous system through
                                breathing. No meditation required, no spiritual
                                rituals—just breathe and feel better.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center relative overflow-hidden group">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="text-9xl"
                                >
                                    ⏸️
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pausa Section 2: The Impact */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 to-transparent"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-20"
                    >
                        <h3 className="text-4xl md:text-6xl font-black mb-6">
                            Making an Impact
                        </h3>
                        <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                            Real numbers from helping people manage stress,
                            anxiety, and emotional overwhelm
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    >
                        <MetricCard value="$125K" label="Raised" delay={0.1} />
                        <MetricCard
                            value="15K+"
                            label="Downloads"
                            delay={0.2}
                        />
                        <MetricCard
                            value="500+"
                            label="Hours of Breathing"
                            delay={0.3}
                        />
                        <MetricCard
                            value="5"
                            label="Team Members"
                            delay={0.4}
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-12 md:p-16"
                    >
                        <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                            What We&apos;re Building
                        </h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📱</div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-2">
                                            Native Mobile Apps
                                        </h5>
                                        <p className="text-foreground/70">
                                            Built iOS app in Swift and SwiftUI,
                                            Android app in Kotlin and Jetpack
                                            Compose
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">🤖</div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-2">
                                            AI-Powered Development
                                        </h5>
                                        <p className="text-foreground/70">
                                            Designed MCP-based context servers
                                            for AI coding agents
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">💰</div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-2">
                                            Dual Revenue Streams
                                        </h5>
                                        <p className="text-foreground/70">
                                            B2C and B2B subscription products
                                            for individuals and businesses
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📊</div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-2">
                                            Data-Driven Insights
                                        </h5>
                                        <p className="text-foreground/70">
                                            Internal dashboards for user
                                            segmentation, retention, and product
                                            decisions
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📈</div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-2">
                                            Growth & Marketing
                                        </h5>
                                        <p className="text-foreground/70">
                                            Running paid ads, SEO, growth
                                            experiments, and AI blogging
                                            workflows
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">🎯</div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-2">
                                            Founder-Led Everything
                                        </h5>
                                        <p className="text-foreground/70">
                                            Fundraising, hiring, team
                                            management, product, engineering,
                                            and execution
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
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={itemVariants}
                        className="text-center max-w-4xl mx-auto space-y-8"
                    >
                        <h3 className="text-4xl md:text-6xl font-black leading-tight">
                            Helping People Manage Stress & Anxiety
                        </h3>
                        <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                            Our mission is aspirational yet grounded: help
                            people identify how they feel, feel less alone, and
                            regulate through breathing. We&apos;re building for
                            the stressed founder, the anxious professional, and
                            anyone who needs fast relief without meditation or
                            spiritual practices.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-8"
                        >
                            <Link
                                href="/pausa"
                                className="inline-flex items-center px-10 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 group"
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

            {/* RUUT CTO Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-500/5 to-transparent"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={itemVariants} className="mb-16">
                        <h2 className="text-5xl md:text-7xl font-black mb-8 text-center">
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                RUUT
                            </span>
                        </h2>
                        <p className="text-2xl md:text-3xl text-center text-foreground/80 font-light max-w-3xl mx-auto">
                            CTO of a 500 Global-backed fintech helping Mexicans
                            invest in the US stock market
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <motion.div variants={itemVariants}>
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 h-full">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    CTO / Founding Team
                                </h3>
                                <p className="text-foreground/60 mb-6">
                                    April 2024 - July 2025
                                </p>
                                <ul className="space-y-4 text-foreground/70">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Promoted to CTO after leading iOS
                                            from scratch through launch and
                                            scale
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Managed 7-person team including
                                            hiring, architecture, and technical
                                            execution
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Led development of money-transfer
                                            system reducing Mexico-US transfers
                                            from ~3 days to immediate
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Worked with investors including 500
                                            Global and Mexico&apos;s securities
                                            commission
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 h-full">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Senior iOS Engineer / Founding Team
                                </h3>
                                <p className="text-foreground/60 mb-6">
                                    March 2022 - April 2024
                                </p>
                                <ul className="space-y-4 text-foreground/70">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Started RUUT&apos;s iOS app from
                                            scratch and led App Store launch in
                                            July 2022
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Built core flows for Mexicans
                                            investing in US stock market
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Developed onboarding, KYC, account
                                            management, and investment flows
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Used Swift, UIKit, SwiftUI, Combine,
                                            async/await, and REST APIs
                                        </span>
                                    </li>
                                </ul>
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

            {/* Experience & Education */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={itemVariants} className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
                            Experience & Education
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div variants={itemVariants}>
                            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    UPAX
                                </h3>
                                <p className="text-lg font-semibold text-foreground/80 mb-2">
                                    iOS Engineer
                                </p>
                                <p className="text-foreground/60 mb-6">
                                    August 2021 - March 2022
                                </p>
                                <ul className="space-y-3 text-foreground/70">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Worked on iOS side of internal ERP
                                            platform
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Product focused on people management
                                            and access control
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 text-xl">
                                            ✓
                                        </span>
                                        <span>
                                            Contributed to mobile app redesign
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Tecnológico de Monterrey
                                </h3>
                                <p className="text-lg font-semibold text-foreground/80 mb-2">
                                    Bachelor of Arts, Financial Management
                                </p>
                                <p className="text-foreground/60 mb-6">
                                    Graduated December 2022
                                </p>
                                <p className="text-foreground/70">
                                    Campus Santa Fe, Ciudad de México, Mexico
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-12"
                    >
                        <h3 className="text-3xl font-bold mb-8 text-center">
                            Skills & Expertise
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-xl mb-4 text-blue-500">
                                    Founder Leadership
                                </h4>
                                <p className="text-foreground/70">
                                    Fundraising, hiring, team management,
                                    product strategy, growth, marketing,
                                    investor communication, zero-to-one
                                    execution
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4 text-purple-500">
                                    Product & Growth
                                </h4>
                                <p className="text-foreground/70">
                                    B2C/B2B subscriptions, SEO, paid ads,
                                    retention, segmentation, recommendation
                                    logic, analytics dashboards
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4 text-pink-500">
                                    AI & Systems
                                </h4>
                                <p className="text-foreground/70">
                                    MCP servers, AI coding agents, internal
                                    tooling, technical specs automation, AI
                                    blogging workflows
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4 text-green-500">
                                    Mobile Engineering
                                </h4>
                                <p className="text-foreground/70">
                                    Swift, SwiftUI, UIKit, Combine, async/await,
                                    Kotlin, Jetpack Compose, REST APIs, App
                                    Store launch
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4 text-indigo-500">
                                    Fintech
                                </h4>
                                <p className="text-foreground/70">
                                    KYC, compliance, investing products, money
                                    movement, Mexico-US transfers,
                                    regulator-facing communication
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4 text-cyan-500">
                                    Location
                                </h4>
                                <p className="text-foreground/70">
                                    Based in Aguascalientes & Mexico City,
                                    looking for remote opportunities worldwide
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
                className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-500/5 to-transparent"
            >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                                Blog & Insights
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                            Thoughts on entrepreneurship, building compelling
                            products, breath work, and creating solutions that
                            matter. Lessons from the trenches of startup
                            building.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-10 py-5 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white text-xl font-bold hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 group"
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

            {/* Contact CTA */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="py-32 px-4 sm:px-6 lg:px-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-16 md:p-24 border border-foreground/10 relative overflow-hidden"
                >
                    {/* Animated background */}
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
                        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black">
                            Let&apos;s Build Something Compelling
                        </h2>
                        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
                            Looking for a founder who ships? Whether you&apos;re
                            an investor, fellow entrepreneur, or potential
                            partner, let&apos;s create something worth building.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-10 py-5 rounded-xl bg-foreground text-background text-xl font-bold hover:scale-105 transition-transform duration-300"
                            >
                                Get in Touch
                            </Link>
                            <a
                                href="mailto:andy@andynadal.com"
                                className="px-10 py-5 rounded-xl border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 text-xl font-bold transition-all duration-300"
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
