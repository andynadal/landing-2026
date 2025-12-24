"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

import FormField from "./form-field";
import FormTextarea from "./form-textarea";

interface ContactFormProps {
    includeNameField?: boolean;
    includeSubjectField?: boolean;
    submitButtonText?: string;
    successMessage?: string;
    className?: string;
}

export default function ContactForm({
    includeNameField = true,
    includeSubjectField = true,
    submitButtonText = "Send Message",
    successMessage = "Thank you for your message! I'll get back to you soon.",
    className = "",
}: ContactFormProps) {
    const [state, handleSubmit] = useForm("xlgrkbnp");

    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 ${className}`}
            >
                <div className="text-5xl mb-4">✓</div>
                <p className="text-lg font-medium text-foreground">
                    {successMessage}
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
            {includeNameField && includeSubjectField && (
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <FormField
                            label="Name"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <FormField
                            label="Email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </div>
            )}

            {!includeNameField && (
                <div>
                    <FormField
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            )}

            {includeSubjectField && (
                <div>
                    <FormField
                        label="Subject"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                    />
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />
                </div>
            )}

            <div>
                <FormTextarea
                    label="Message"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={6}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {state.submitting ? "Sending..." : submitButtonText}
            </motion.button>
        </form>
    );
}
