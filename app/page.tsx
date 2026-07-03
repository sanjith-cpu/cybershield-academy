export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <div className="text-2xl font-bold tracking-tight">
          CyberShield Academy
        </div>

        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#tracks" className="hover:text-white">
            Learning Tracks
          </a>
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#mission" className="hover:text-white">
            Mission
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center max-w-5xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Cybersecurity literacy for the next generation
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Learn cybersecurity, online safety, and digital responsibility.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          CyberShield Academy is an interactive learning platform designed to
          teach elementary, middle, and high school students the cybersecurity
          skills they need to stay safe, informed, and prepared for the future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#tracks"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            Start Learning
          </a>

          <a
            href="#mission"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
          >
            Learn About the Mission
          </a>
        </div>
      </section>

      {/* Learning Tracks */}
      <section id="tracks" className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Learning Paths for Every Age Group
          </h2>

          <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
            CyberShield Academy is built around age-appropriate cybersecurity
            education, from basic online safety to technical cybersecurity
            foundations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                CyberShield Kids
              </h3>
              <p className="text-slate-300 mb-4">
                For elementary students learning internet safety, kindness
                online, privacy, and trusted adult reporting.
              </p>
              <p className="text-sm text-slate-400">Grades 3–5</p>
            </div>

            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                CyberShield Junior
              </h3>
              <p className="text-slate-300 mb-4">
                For middle school students learning passwords, scams, digital
                citizenship, and personal information protection.
              </p>
              <p className="text-sm text-slate-400">Grades 6–8</p>
            </div>

            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                CyberShield High School
              </h3>
              <p className="text-slate-300 mb-4">
                For high school students exploring cybersecurity fundamentals,
                technical concepts, careers, and certifications.
              </p>
              <p className="text-sm text-slate-400">Grades 9–12</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Version 1 Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-slate-800 p-5 bg-slate-900">
              <h3 className="font-bold mb-2">Interactive Lessons</h3>
              <p className="text-sm text-slate-300">
                Structured cybersecurity lessons for different age levels.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-5 bg-slate-900">
              <h3 className="font-bold mb-2">Phishing Simulator</h3>
              <p className="text-sm text-slate-300">
                Practice spotting suspicious emails and online red flags.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-5 bg-slate-900">
              <h3 className="font-bold mb-2">Cyber Assessments</h3>
              <p className="text-sm text-slate-300">
                Measure cybersecurity awareness and receive recommendations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 p-5 bg-slate-900">
              <h3 className="font-bold mb-2">Career Explorer</h3>
              <p className="text-sm text-slate-300">
                Discover cybersecurity careers, skills, and certification paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            CyberShield Academy exists to make cybersecurity education
            accessible, engaging, and practical for young students. The goal is
            not only to build a website, but to create a real educational
            initiative that can be used in local schools to teach students how
            to stay safe online.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-sm text-slate-500 border-t border-slate-800">
        © 2026 CyberShield Academy. Built as a student-led cybersecurity
        literacy initiative.
      </footer>
    </main>
  );
}