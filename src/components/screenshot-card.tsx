"use client";

import { motion } from "framer-motion";

interface ScreenshotCardProps {
    title: string;
    description?: string;
    emoji?: string;
    className?: string;
}

export default function ScreenshotCard({
    title,
    description,
    emoji = "📸",
    className = "",
}: ScreenshotCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-background border-2 border-accent/20 rounded-lg overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${className}`}
        >
            {/* Placeholder for screenshot */}
            <div className="aspect-video bg-accent/5 flex items-center justify-center relative group">
                <div className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                    {title}
                </h4>
                {description && (
                    <p className="font-serif text-foreground/70 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
