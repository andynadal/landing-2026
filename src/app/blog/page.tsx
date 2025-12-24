"use client";

import { motion } from "framer-motion";

const blogPosts = [
    {
        title: "Building Pausa: Lessons from Creating a Productivity Startup",
        excerpt:
            "Insights and challenges from building an AI-powered productivity platform from scratch.",
        date: "December 2024",
        category: "Entrepreneurship",
        readTime: "5 min read",
        gradient: "from-blue-600 to-purple-600",
        tags: ["Startup", "AI", "Product Development"],
    },
    {
        title: "The Future of Work-Life Balance in Tech",
        excerpt:
            "Exploring how technology is reshaping the way we think about productivity and rest.",
        date: "November 2024",
        category: "Productivity",
        readTime: "4 min read",
        gradient: "from-purple-600 to-pink-600",
        tags: ["Work-Life Balance", "Tech Trends", "Wellness"],
    },
    {
        title: "Scaling Web Applications: Best Practices",
        excerpt:
            "Technical insights on building systems that can handle millions of users.",
        date: "October 2024",
        category: "Engineering",
        readTime: "7 min read",
        gradient: "from-green-600 to-blue-600",
        tags: ["Architecture", "Scalability", "DevOps"],
    },
    {
        title: "From Developer to Entrepreneur: My Journey",
        excerpt:
            "How I transitioned from writing code to building companies and what I learned along the way.",
        date: "September 2024",
        category: "Career",
        readTime: "6 min read",
        gradient: "from-orange-600 to-red-600",
        tags: ["Career", "Entrepreneurship", "Leadership"],
    },
    {
        title: "AI and Machine Learning in Modern Applications",
        excerpt:
            "Practical applications of AI/ML and how to integrate them into your products.",
        date: "August 2024",
        category: "Technology",
        readTime: "8 min read",
        gradient: "from-cyan-600 to-blue-600",
        tags: ["AI/ML", "Innovation", "Development"],
    },
    {
        title: "Building High-Performance Teams",
        excerpt:
            "Strategies for creating and leading effective technical teams that deliver results.",
        date: "July 2024",
        category: "Leadership",
        readTime: "5 min read",
        gradient: "from-indigo-600 to-purple-600",
        tags: ["Leadership", "Team Building", "Management"],
    },
];

const categories = [
    "All",
    "Entrepreneurship",
    "Engineering",
    "Productivity",
    "Leadership",
    "Technology",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24">
            {/* Hero Section */}
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
                        className="text-center max-w-4xl mx-auto space-y-6"
                    >
                        <div className="text-6xl md:text-8xl mb-6">✍️</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                            Thoughts on technology, entrepreneurship, and
                            building products
                        </p>
                        <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
                            Sharing insights, lessons learned, and perspectives
                            from the intersection of engineering and business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    index === 0
                                        ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg shadow-green-500/30"
                                        : "bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group h-full"
                            >
                                <div className="h-full p-8 rounded-2xl bg-background border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl flex flex-col">
                                    {/* Date & Read Time */}
                                    <div className="flex items-center justify-between text-xs text-foreground/50 mb-4">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="inline-block w-fit px-3 py-1 rounded-full bg-foreground/5 text-xs font-medium text-foreground/70 mb-4">
                                        {post.category}
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-foreground/90 transition-colors">
                                        <span
                                            className={`bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}
                                        >
                                            {post.title}
                                        </span>
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-foreground/70 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 rounded-md bg-foreground/5 text-xs text-foreground/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="pt-4 border-t border-foreground/10">
                                        <button
                                            className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent group-hover:underline`}
                                        >
                                            Read Article
                                            <svg
                                                className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-3xl p-12 md:p-16 border border-foreground/10"
                    >
                        <div className="text-5xl mb-6">📬</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                            Get notified when I publish new articles on
                            technology, entrepreneurship, and product
                            development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-foreground/5 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Topics I Write About
                        </h2>
                        <p className="text-lg text-foreground/70">
                            Exploring the intersection of technology and
                            business
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-6 rounded-2xl bg-background border border-foreground/10"
                        >
                            <div className="text-4xl mb-3">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">
                                Startups & Products
                            </h3>
                            <p className="text-foreground/70">
                                Building and scaling products from idea to
                                launch
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 rounded-2xl bg-background border border-foreground/10"
                        >
                            <div className="text-4xl mb-3">💻</div>
                            <h3 className="text-xl font-semibold mb-2">
                                Engineering
                            </h3>
                            <p className="text-foreground/70">
                                Technical deep-dives and best practices
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-6 rounded-2xl bg-background border border-foreground/10"
                        >
                            <div className="text-4xl mb-3">🧠</div>
                            <h3 className="text-xl font-semibold mb-2">
                                Leadership
                            </h3>
                            <p className="text-foreground/70">
                                Building and leading technical teams
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
