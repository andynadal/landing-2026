"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { techSkills } from "@/lib/tech-skills";

export default function TechSkillsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % techSkills.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Get visible cards (current + next 2)
    const visibleCards = 3;
    const getVisibleSkills = () => {
        const skills = [];
        for (let i = 0; i < visibleCards; i++) {
            const index = (currentIndex + i) % techSkills.length;
            skills.push(techSkills[index]);
        }
        return skills;
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % techSkills.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + techSkills.length) % techSkills.length
        );
    };

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {getVisibleSkills().map((skill, idx) => (
                            <motion.div
                                key={`${skill.slug}-${currentIndex}-${idx}`}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1,
                                }}
                                className="relative"
                            >
                                <Link
                                    href={`/tech-skills/${skill.slug}`}
                                    className="block group h-full"
                                >
                                    <div className="bg-background rounded-lg p-8 hover:bg-accent/5 transition-all duration-300 h-full flex flex-col">
                                        {/* Category Badge */}
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider mb-4 self-start">
                                            {skill.category}
                                        </div>

                                        {/* Title */}
                                        <h4 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                            {skill.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="font-serif text-foreground/70 leading-relaxed mb-4 flex-grow">
                                            {skill.shortDescription}
                                        </p>

                                        {/* Experience */}
                                        <div className="text-sm font-medium text-accent/80 mb-4">
                                            {skill.experience} experience
                                        </div>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-accent font-medium group-hover:text-accent-light transition-colors">
                                            <span>Learn more</span>
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
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-12">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
                    aria-label="Previous skills"
                >
                    <svg
                        className="w-5 h-5 text-accent group-hover:text-accent-light transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                    {techSkills.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex
                                    ? "bg-accent w-8"
                                    : "bg-accent/30 hover:bg-accent/50"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
                    aria-label="Next skills"
                >
                    <svg
                        className="w-5 h-5 text-accent group-hover:text-accent-light transition-colors"
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
                </button>
            </div>

            {/* See More Button */}
            <div className="text-center mt-12">
                <Link
                    href="/tech-skills"
                    className="inline-flex items-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-light text-background font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 group"
                >
                    <span>See All Tech Skills</span>
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
                </Link>
            </div>
        </div>
    );
}
