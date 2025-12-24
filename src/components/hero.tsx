export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Andy Nadal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
          Entrepreneur & Experienced Developer
        </p>
        
        <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
          Building innovative solutions and leading technical teams to success.
          This is a placeholder for future content showcasing projects, experience, and achievements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-lg border border-foreground/20 hover:bg-foreground/10 font-medium transition-colors">
            Contact Me
          </button>
        </div>

        <div className="pt-12 text-sm text-foreground/50">
          <p>Content coming soon in future updates</p>
        </div>
      </div>
    </div>
  );
}
