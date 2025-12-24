"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 pointer-events-none">
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
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center min-h-[60vh]"
                    >
                        <div className="text-6xl md:text-8xl mb-6">✍️</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Coming Soon
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
