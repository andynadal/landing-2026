"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div
            ref={containerRef}
            className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 pt-20 md:pt-24 overflow-hidden"
        >
            {/* Enhanced animated background with particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 0],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [180, 0, 180],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [90, 270, 90],
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/15 to-violet-500/15 rounded-full blur-3xl"
                />

                {/* Particle effects */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="max-w-5xl mx-auto text-center space-y-10 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                        <motion.span
                            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            Andy Nadal
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        CEO & Co-Founder of{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Pausa
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 font-light max-w-3xl mx-auto leading-relaxed">
                        Founder-level product and engineering leader building
                        wellness, fintech, and AI-assisted software products
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-base md:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed"
                >
                    Helping people manage stress, anxiety, and emotional
                    overwhelm through guided breathwork and nervous system
                    regulation
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                >
                    <Link
                        href="/pausa"
                        className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center"
                    >
                        Explore Pausa
                        <svg
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-xl border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="pt-16"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block"
                    >
                        <svg
                            className="w-8 h-8 text-foreground/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
