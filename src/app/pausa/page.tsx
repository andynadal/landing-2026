"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function PausaPage() {
  return (
    <main className="min-h-screen bg-background pt-20 md:pt-24">
      {/* Hero Section - Logo Placeholder & What Pausa Is */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo Placeholder */}
            <div className="flex justify-center mb-12">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                <span className="text-foreground/40 text-sm font-medium">Logo</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
              Pausa
            </h1>

            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                Pausa is a breathing app for people who don&apos;t meditate — and don&apos;t want to.
              </p>
              
              <p className="text-lg leading-relaxed">
                It&apos;s not about mindfulness as an identity.
              </p>
              
              <p className="text-lg leading-relaxed">
                It&apos;s about regulating your nervous system when life hits too hard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to Use Pausa */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Pausa is what you open when:
            </p>
            
            <ul className="space-y-4 text-lg text-foreground/80 ml-6">
              <li>your chest feels tight</li>
              <li>your thoughts are racing</li>
              <li>your body is on edge and your mind won&apos;t cooperate</li>
            </ul>

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed pt-6">
              <p>No rituals.</p>
              <p>No spirituality.</p>
              <p>No pressure to &quot;feel calm.&quot;</p>
              <p className="pt-4">Just breathe. Then continue with your life.</p>
            </div>

            <p className="text-xl md:text-2xl font-medium text-foreground pt-8">
              Pausa treats breathing as infrastructure, not inspiration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story - The Panic Attack */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Moment Everything Changed
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                One day, my body collapsed before my mind understood what was happening.
              </p>
              
              <p>My heart started racing.</p>
              <p>My vision narrowed.</p>
              <p>My left arm went numb.</p>
              
              <p className="pt-4">
                I genuinely thought I was having a stroke.
              </p>
              
              <p>
                I was convinced I was about to die.
              </p>
              
              <p>
                Not metaphorically. Literally.
              </p>
              
              <p className="pt-4">
                In that moment, logic disappeared.
              </p>
              
              <p>
                All I had was fear and a body completely out of control.
              </p>
              
              <p className="pt-6">
                Later, I learned it was a panic attack.
              </p>
              
              <p>
                But in the moment, labels didn&apos;t matter — survival did.
              </p>
              
              <p className="pt-6">
                What stayed with me wasn&apos;t the fear.
              </p>
              
              <p>
                It was the realization that I had no reliable tool to regulate my own body under stress.
              </p>
              
              <p className="pt-6 font-medium text-foreground">
                That experience changed how I think about mental health forever.
              </p>
              
              <p className="pt-4 text-xl font-medium text-foreground">
                Pausa exists because panic doesn&apos;t ask for permission — and help needs to be faster than fear.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why I Built Pausa */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why I Built This
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I didn&apos;t build Pausa because I love wellness.
              </p>
              
              <p>
                I built it because most wellness tools fail exactly when you need them most.
              </p>
              
              <p className="pt-6">
                When you&apos;re anxious, overwhelmed, or close to panic, you don&apos;t want:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li>long explanations</li>
                <li>a lesson</li>
                <li>a guru</li>
                <li>or a reminder to be grateful</li>
              </ul>
              
              <p className="pt-6 font-medium text-foreground">
                You want something that works immediately, without thinking.
              </p>
              
              <p className="pt-6">
                Pausa is designed for low-bandwidth moments.
              </p>
              
              <p>
                Moments where motivation is gone, discipline is gone, and you just need relief.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Pausa Different */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Makes Pausa Different
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-xl font-medium text-foreground">
                Pausa is not meditation.
              </p>
              
              <p className="text-xl font-medium text-foreground">
                It&apos;s nervous system regulation.
              </p>
              
              <p className="pt-6">
                Breathing is the fastest way to communicate safety to the body.
              </p>
              
              <p>
                Pausa removes everything that gets in the way of doing that.
              </p>
              
              <div className="pt-8 space-y-3 text-foreground">
                <p>Open the app.</p>
                <p>Follow the breath.</p>
                <p>Close the app.</p>
              </div>
              
              <p className="pt-6 font-medium text-foreground">
                That&apos;s it.
              </p>
              
              <div className="pt-8 space-y-3">
                <p>Short sessions.</p>
                <p>Clear guidance.</p>
                <p>Evidence-based techniques.</p>
              </div>
              
              <p className="pt-6">
                Designed for real life, not ideal mornings.
              </p>
              
              <p className="pt-6 text-xl font-medium text-foreground">
                Pausa respects your time, your intelligence, and your emotional state.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entrepreneurial Framing */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How I Build Companies
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Pausa is a product-led company built from first principles.
              </p>
              
              <p className="pt-6">
                Every decision is intentional:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li>fewer features, better execution</li>
                <li>clarity over noise</li>
                <li>usefulness over hype</li>
              </ul>
              
              <p className="pt-6">
                It&apos;s designed, engineered, and iterated obsessively with one question in mind:
              </p>
              
              <p className="text-xl font-medium text-foreground pl-6 border-l-4 border-foreground/20">
                &quot;Will this help someone when they&apos;re not okay?&quot;
              </p>
              
              <p className="pt-6 text-xl font-medium text-foreground">
                Pausa reflects how I build companies: systems over vibes, outcomes over appearances.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Persuasion */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                If you deal with stress, anxiety, or mental overload —
              </p>
              
              <p>
                you don&apos;t need more motivation.
              </p>
              
              <p className="font-medium text-foreground">
                You need a tool that works when motivation is gone.
              </p>
              
              <p className="pt-6">
                Pausa is not something you plan to use.
              </p>
              
              <p className="text-xl font-medium text-foreground">
                It&apos;s something you&apos;re grateful to have when things spiral.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-8"
          >
            {/* Brand Placeholder */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-md h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                <span className="text-foreground/40 text-sm font-medium">Brand Assets Placeholder</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-xl md:text-2xl font-medium text-foreground">
                If your mind runs fast and your body pays the price, download Pausa.
              </p>
              
              <p className="text-lg">
                Not someday.
              </p>
              
              <p className="text-lg font-medium">
                Today.
              </p>
              
              <p className="text-lg pt-4">
                Use it once.
              </p>
              
              <p className="text-xl font-medium text-foreground">
                Your nervous system will understand.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="https://pausaapp.com/andylanding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300 text-lg"
              >
                👉 Download Pausa
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
