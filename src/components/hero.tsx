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
            className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 pt-20 md:pt-24 overflow-hidden"
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
                    className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-muted/15 rounded-full blur-3xl"
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
                                    ? "var(--accent)"
                                    : i % 3 === 1
                                      ? "var(--accent-light)"
                                      : "var(--muted)",
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
                        className="absolute h-px bg-accent/20"
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
                className="max-w-6xl mx-auto text-center space-y-12 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-foreground">
                        <motion.span
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            Andy Nadal
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="space-y-6"
                >
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground/90 italic">
                        Founder & CEO of{" "}
                        <span className="font-normal not-italic text-accent">
                            <TypingText text="Pausa" delay={1000} />
                        </span>
                    </h2>
                    <p className="text-xl md:text-3xl lg:text-4xl font-serif text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                        CTO · Founding Engineer · AI Product Engineer
                        <br />
                        Building products that{" "}
                        <em className="font-medium">transform</em> how people
                        live—from wellness to fintech,{" "}
                        <strong className="font-bold text-foreground">
                            solving real problems
                        </strong>{" "}
                        at scale.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-lg md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-serif"
                >
                    Turning personal struggles into products that matter.
                    <br />
                    Raised capital, built teams, shipped to{" "}
                    <strong className="text-foreground/80">
                        100,000+ people
                    </strong>
                    .
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
                >
                    <Link
                        href="/pausa"
                        className="group px-10 py-5 rounded-lg bg-accent text-background text-lg font-semibold hover:bg-accent-light transition-all duration-300 flex items-center border-2 border-accent hover:border-accent-light"
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
                        className="px-10 py-5 rounded-lg border-2 border-foreground/30 hover:border-foreground hover:bg-foreground/5 text-lg font-semibold transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    className="pt-20"
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
                            className="w-8 h-8 text-accent/60"
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
