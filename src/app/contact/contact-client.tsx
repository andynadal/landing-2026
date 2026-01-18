"use client";

import { motion } from "framer-motion";

import ContactForm from "@/components/contact-form";

const contactMethods = [
    {
        icon: "📧",
        title: "Email",
        value: "hello@andynadal.com",
        href: "mailto:hello@andynadal.com",
    },
    {
        icon: "💼",
        title: "LinkedIn",
        value: "linkedin.com/in/andynadal",
        href: "https://linkedin.com/in/andynadal",
    },
    {
        icon: "💻",
        title: "GitHub",
        value: "github.com/andynadal",
        href: "https://github.com/andynadal",
    },
    {
        icon: "🐦",
        title: "Twitter",
        value: "@andynadal",
        href: "https://twitter.com/andynadal",
    },
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

export default function ContactPage() {
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
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-6"
                    >
                        <div className="text-6xl md:text-8xl mb-6">👋</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Let&apos;s Connect
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                            Have a project in mind or just want to chat?
                        </p>
                        <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
                            I&apos;m always open to discussing new
                            opportunities, collaborations, or interesting ideas.
                            Let&apos;s build something amazing together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                variants={itemVariants}
                                href={method.href}
                                target={
                                    method.href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    method.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group p-6 rounded-2xl bg-background border border-foreground/10 hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-sm text-foreground/60 break-all">
                                    {method.value}
                                </p>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl p-8 md:p-12 border border-foreground/10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Send a Message
                        </h2>
                        <ContactForm />
                    </motion.div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Open to Opportunities
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            Whether you&apos;re looking for a technical
                            co-founder, a consultant for your project, or just
                            want to discuss the latest in tech and
                            entrepreneurship, I&apos;d love to hear from you.
                        </p>
                        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-foreground/10">
                                <div className="text-3xl mb-2">💼</div>
                                <h3 className="font-semibold mb-1">
                                    Consulting
                                </h3>
                                <p className="text-sm text-foreground/60">
                                    Technical advisory & strategy
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-foreground/10">
                                <div className="text-3xl mb-2">🤝</div>
                                <h3 className="font-semibold mb-1">
                                    Partnerships
                                </h3>
                                <p className="text-sm text-foreground/60">
                                    Co-founding & collaboration
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-foreground/10">
                                <div className="text-3xl mb-2">🎤</div>
                                <h3 className="font-semibold mb-1">Speaking</h3>
                                <p className="text-sm text-foreground/60">
                                    Events & workshops
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
