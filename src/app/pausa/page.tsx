"use client";

import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PausaPage() {
  return (
    <main className="min-h-screen bg-background pt-20 md:pt-24">
      {/* Hero Section - Logo Placeholder & What Pausa Is */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Logo Placeholder */}
            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                <span className="text-foreground/40 text-sm font-medium">Logo</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeInItem}
              className="text-4xl md:text-6xl font-bold text-center"
            >
              Pausa
            </motion.h1>

            <motion.div variants={fadeInItem} className="space-y-4 text-center">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Pausa is a breathing app for people who don&apos;t meditate — and don&apos;t want to.
              </p>
              
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                It&apos;s not about mindfulness as an identity. It&apos;s about regulating your nervous system when life hits too hard.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* When to Use Pausa */}
      <section className="py-12 md:py-20 bg-foreground/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.p 
              variants={fadeInItem}
              className="text-lg md:text-xl text-foreground/80 leading-relaxed"
            >
              Pausa is what you open when:
            </motion.p>
            
            <motion.ul variants={staggerContainer} className="space-y-3 text-lg text-foreground/70 ml-6">
              <motion.li variants={fadeInItem}>your chest feels tight</motion.li>
              <motion.li variants={fadeInItem}>your thoughts are racing</motion.li>
              <motion.li variants={fadeInItem}>your body is on edge and your mind won&apos;t cooperate</motion.li>
            </motion.ul>

            <motion.div variants={staggerContainer} className="space-y-2 text-lg text-foreground/70 leading-relaxed pt-6">
              <motion.p variants={fadeInItem}>No rituals. No spirituality. No pressure to &quot;feel calm.&quot;</motion.p>
              <motion.p variants={fadeInItem} className="pt-2 text-foreground/80">Just breathe. Then continue with your life.</motion.p>
            </motion.div>

            <motion.p 
              variants={fadeInItem}
              className="text-xl md:text-2xl font-medium text-foreground pt-8"
            >
              Pausa treats breathing as infrastructure, not inspiration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story - The Panic Attack */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInItem}
              className="text-3xl md:text-4xl font-bold"
            >
              The Moment Everything Changed
            </motion.h2>
            
            {/* The Attack - grouped for impact */}
            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                One day, my body collapsed before my mind understood what was happening.
              </motion.p>
              <motion.p variants={fadeInItem} className="pl-4">My heart started racing. My vision narrowed. My left arm went numb.</motion.p>
            </motion.div>

            {/* The Fear - grouped */}
            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                I genuinely thought I was having a stroke. I was convinced I was about to die.
              </motion.p>
              <motion.p variants={fadeInItem} className="pl-4 italic">
                Not metaphorically. Literally.
              </motion.p>
            </motion.div>

            {/* The Experience - grouped */}
            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                In that moment, logic disappeared. All I had was fear and a body completely out of control.
              </motion.p>
            </motion.div>

            {/* The Realization - grouped */}
            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                Later, I learned it was a panic attack. But in the moment, labels didn&apos;t matter — survival did.
              </motion.p>
            </motion.div>

            {/* The Insight - emphasized */}
            <motion.div variants={staggerContainer} className="space-y-4 pt-4">
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                What stayed with me wasn&apos;t the fear. It was the realization that I had no reliable tool to regulate my own body under stress.
              </motion.p>
              
              <motion.p 
                variants={fadeInItem}
                className="text-lg font-medium text-foreground leading-relaxed"
              >
                That experience changed how I think about mental health forever.
              </motion.p>
              
              <motion.p 
                variants={fadeInItem}
                className="text-xl md:text-2xl font-medium text-foreground pt-4 leading-relaxed"
              >
                Pausa exists because panic doesn&apos;t ask for permission — and help needs to be faster than fear.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why I Built Pausa */}
      <section className="py-12 md:py-20 bg-foreground/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInItem}
              className="text-3xl md:text-4xl font-bold"
            >
              Why I Built This
            </motion.h2>
            
            <motion.div variants={staggerContainer} className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                I didn&apos;t build Pausa because I love wellness. I built it because most wellness tools fail exactly when you need them most.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                When you&apos;re anxious, overwhelmed, or close to panic, you don&apos;t want:
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="space-y-2 text-lg text-foreground/70 ml-6">
                <motion.li variants={fadeInItem}>long explanations</motion.li>
                <motion.li variants={fadeInItem}>a lesson</motion.li>
                <motion.li variants={fadeInItem}>a guru</motion.li>
                <motion.li variants={fadeInItem}>or a reminder to be grateful</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-3 pt-4">
              <motion.p variants={fadeInItem} className="text-xl font-medium text-foreground leading-relaxed">
                You want something that works immediately, without thinking.
              </motion.p>
              
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                Pausa is designed for low-bandwidth moments. Moments where motivation is gone, discipline is gone, and you just need relief.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Pausa Different */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInItem}
              className="text-3xl md:text-4xl font-bold"
            >
              What Makes Pausa Different
            </motion.h2>
            
            <motion.div variants={staggerContainer} className="space-y-3">
              <motion.p variants={fadeInItem} className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                Pausa is not meditation. It&apos;s nervous system regulation.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                Breathing is the fastest way to communicate safety to the body. Pausa removes everything that gets in the way of doing that.
              </motion.p>
            </motion.div>

            {/* The Process - grouped and emphasized */}
            <motion.div 
              variants={staggerContainer}
              className="bg-foreground/5 rounded-lg p-6 md:p-8 space-y-2"
            >
              <motion.p variants={fadeInItem} className="text-lg text-foreground">Open the app.</motion.p>
              <motion.p variants={fadeInItem} className="text-lg text-foreground">Follow the breath.</motion.p>
              <motion.p variants={fadeInItem} className="text-lg text-foreground">Close the app.</motion.p>
              <motion.p variants={fadeInItem} className="text-lg font-medium text-foreground pt-2">That&apos;s it.</motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/70 leading-relaxed">
              <motion.p variants={fadeInItem}>
                Short sessions. Clear guidance. Evidence-based techniques.
              </motion.p>
              <motion.p variants={fadeInItem}>
                Designed for real life, not ideal mornings.
              </motion.p>
            </motion.div>

            <motion.p 
              variants={fadeInItem}
              className="text-xl md:text-2xl font-medium text-foreground pt-4 leading-relaxed"
            >
              Pausa respects your time, your intelligence, and your emotional state.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Entrepreneurial Framing */}
      <section className="py-12 md:py-20 bg-foreground/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInItem}
              className="text-3xl md:text-4xl font-bold"
            >
              How I Build Companies
            </motion.h2>
            
            <motion.div variants={staggerContainer} className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                Pausa is a product-led company built from first principles.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                Every decision is intentional:
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="space-y-2 text-lg text-foreground/70 ml-6">
                <motion.li variants={fadeInItem}>fewer features, better execution</motion.li>
                <motion.li variants={fadeInItem}>clarity over noise</motion.li>
                <motion.li variants={fadeInItem}>usefulness over hype</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4 pt-4">
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                It&apos;s designed, engineered, and iterated obsessively with one question in mind:
              </motion.p>
              
              <motion.p 
                variants={fadeInItem}
                className="text-xl md:text-2xl font-medium text-foreground pl-6 border-l-4 border-foreground/20 leading-relaxed"
              >
                &quot;Will this help someone when they&apos;re not okay?&quot;
              </motion.p>
              
              <motion.p 
                variants={fadeInItem}
                className="text-xl font-medium text-foreground leading-relaxed"
              >
                Pausa reflects how I build companies: systems over vibes, outcomes over appearances.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Persuasion */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={staggerContainer} className="space-y-3 text-lg text-foreground/80 leading-relaxed">
              <motion.p variants={fadeInItem}>
                If you deal with stress, anxiety, or mental overload — you don&apos;t need more motivation.
              </motion.p>
              
              <motion.p variants={fadeInItem} className="text-xl font-medium text-foreground">
                You need a tool that works when motivation is gone.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-3 pt-4">
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                Pausa is not something you plan to use.
              </motion.p>
              
              <motion.p 
                variants={fadeInItem}
                className="text-xl md:text-2xl font-medium text-foreground leading-relaxed"
              >
                It&apos;s something you&apos;re grateful to have when things spiral.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-foreground/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center space-y-10"
          >
            {/* Brand Placeholder */}
            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="w-full max-w-md h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                <span className="text-foreground/40 text-sm font-medium">Brand Assets Placeholder</span>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.p 
                variants={fadeInItem}
                className="text-xl md:text-2xl font-medium text-foreground leading-relaxed"
              >
                If your mind runs fast and your body pays the price, download Pausa.
              </motion.p>
              
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                Not someday. Today.
              </motion.p>
              
              <motion.p variants={fadeInItem} className="text-lg text-foreground/80 leading-relaxed">
                Use it once. Your nervous system will understand.
              </motion.p>
            </motion.div>

            <motion.div variants={scaleIn} className="pt-4">
              <a
                href="https://pausaapp.com/andylanding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300 text-lg"
              >
                👉 Download Pausa
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
