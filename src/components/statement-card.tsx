"use client";

import { motion } from "framer-motion";

interface StatementCardProps {
    statement: string;
    author?: string;
    role?: string;
    highlight?: boolean;
    className?: string;
}

export default function StatementCard({
    statement,
    author,
    role,
    highlight = false,
    className = "",
}: StatementCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${
                highlight
                    ? "bg-accent/10 border-accent/30"
                    : "bg-background border-accent/20"
            } border-2 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${className}`}
        >
            {/* Quote Icon */}
            <div className="text-4xl text-accent/40 mb-4">"</div>

            {/* Statement */}
            <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6 italic">
                {statement}
            </p>

            {/* Attribution */}
            {(author || role) && (
                <div className="pt-4 border-t border-accent/10">
                    {author && (
                        <p className="font-display font-bold text-foreground text-lg">
                            {author}
                        </p>
                    )}
                    {role && (
                        <p className="font-serif text-foreground/60">{role}</p>
                    )}
                </div>
            )}
        </motion.div>
    );
}
