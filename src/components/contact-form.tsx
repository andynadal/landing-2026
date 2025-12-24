"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xlgrkbnp");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl p-8 md:p-12 border border-foreground/10 text-center"
      >
        <div className="text-6xl mb-4">✨</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Thank you for your message!
          </span>
        </h2>
        <p className="text-lg text-foreground/70">
          I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl p-8 md:p-12 border border-foreground/10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Send a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/70 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              placeholder="Your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/70 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground/70 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            placeholder="What's this about?"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground/70 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
            placeholder="Tell me about your project or idea..."
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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  );
}
