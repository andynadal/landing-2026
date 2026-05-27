"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                if (currentIndex < text.length) {
                    setDisplayedText((prev) => prev + text[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }
            },
            currentIndex === 0 ? delay : 10
        ); // Initial delay, then 10ms per character

        return () => clearTimeout(timeout);
    }, [currentIndex, text, delay]);

    return <span>{displayedText}</span>;
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <div
            ref={containerRef}
            className="relative flex min-h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-20 py-12 pt-20 md:pt-24 overflow-hidden"
        >
            {/* Enhanced particle system - more sophisticated and elegant */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating organic shapes */}
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
                    className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-teal/15 rounded-full blur-3xl"
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
                    className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent-cyan/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-accent-green/10 rounded-full blur-3xl"
                />

                {/* Refined particle effects - more numerous and elegant */}
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            background:
                                i % 3 === 0
                                    ? "var(--accent-teal)"
                                    : i % 3 === 1
                                      ? "var(--accent-cyan)"
                                      : "var(--accent-green)",
                            opacity: 0.3,
                        }}
                        animate={{
                            y: [0, -150 - Math.random() * 100, 0],
                            x: [0, (Math.random() - 0.5) * 50, 0],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 8,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Gentle flowing lines */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-px bg-accent-teal/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${100 + Math.random() * 200}px`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="max-w-7xl w-full relative z-10"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left column - Main content */}
                    <div className="space-y-8 lg:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] text-foreground">
                                HI, I'M YOUR{" "}
                                <span className="block text-accent-teal">
                                    FRACTIONAL
                                </span>{" "}
                                <span className="block">TECHNICAL</span>{" "}
                                <span className="block">CO-FOUNDER</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-xl md:text-2xl lg:text-3xl text-foreground/70 leading-relaxed max-w-2xl"
                        >
                            Let's take your startup from idea to revenue.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-col sm:flex-row gap-6 pt-6"
                        >
                            <Link
                                href="/contact"
                                className="group px-12 py-6 rounded-lg bg-foreground text-background text-xl font-bold hover:bg-accent-teal transition-all duration-300 flex items-center justify-center sm:justify-start w-full sm:w-auto"
                            >
                                WORK WITH ME
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="pt-4 border-l-4 border-accent-teal pl-6"
                        >
                            <p className="text-sm uppercase tracking-wider text-foreground/50 mb-2 font-semibold">
                                FRACTIONAL CTO & CO-FOUNDER
                            </p>
                            <p className="text-base text-foreground/70">
                                Founder & CEO of{" "}
                                <span className="font-bold text-accent">
                                    <TypingText text="Pausa" delay={1500} />
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Right column - Visual element / Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="hidden lg:flex flex-col gap-8 justify-center"
                    >
                        <div className="bg-accent-teal/10 border-2 border-accent-teal/30 rounded-2xl p-10">
                            <div className="space-y-6">
                                <div>
                                    <div className="text-6xl font-black text-accent-teal mb-2">
                                        100K+
                                    </div>
                                    <div className="text-lg font-medium text-foreground/70">
                                        Users Reached
                                    </div>
                                </div>
                                <div className="h-px bg-accent-teal/30" />
                                <div>
                                    <div className="text-5xl font-black text-accent-cyan mb-2">
                                        2+
                                    </div>
                                    <div className="text-lg font-medium text-foreground/70">
                                        Companies Founded
                                    </div>
                                </div>
                                <div className="h-px bg-accent-cyan/30" />
                                <div>
                                    <div className="text-5xl font-black text-accent-green mb-2">
                                        500K+
                                    </div>
                                    <div className="text-lg font-medium text-foreground/70">
                                        Capital Raised
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    className="pt-20 flex justify-center lg:justify-start"
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block"
                    >
                        <svg
                            className="w-8 h-8 text-accent-teal/60"
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
