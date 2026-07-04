import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import TrackCard from "@/components/TrackCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Cybersecurity education for students
        </p>

        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          CyberShield Academy helps students build safer digital habits.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          CyberShield Academy is a student-built cybersecurity education platform
          designed to teach online safety, scam awareness, password security,
          digital responsibility, and ethical defensive cybersecurity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/lessons"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition text-center"
          >
            Start Learning
          </a>

          <a
            href="/activities"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition text-center"
          >
            Try Activities
          </a>
        </div>
      </section>

      <section className="px-8 py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 text-center">
            <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">3</h2>
            <p className="text-slate-300">Learning Paths</p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 text-center">
            <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">3</h2>
            <p className="text-slate-300">Interactive Activities</p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 text-center">
            <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">5+</h2>
            <p className="text-slate-300">Support Pages</p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 text-center">
            <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">V1</h2>
            <p className="text-slate-300">In Development</p>
          </div>
        </div>
      </section>

      <section id="tracks" className="px-8 py-20 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="mb-3 text-cyan-400 font-semibold">
            Learning Paths
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose the right cybersecurity track.
          </h2>

          <p className="text-slate-300 max-w-3xl leading-relaxed">
            CyberShield Academy separates cybersecurity education by grade level
            so students can learn online safety in a way that fits their age and
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TrackCard
            title="CyberShield Kids"
            grades="Grades 3-5"
            description="Simple online safety lessons for elementary students."
            href="/kids"
          />

          <TrackCard
            title="CyberShield Junior"
            grades="Grades 6-8"
            description="Middle school lessons on scams, privacy, passwords, and digital citizenship."
            href="/junior"
          />

          <TrackCard
            title="CyberShield High School"
            grades="Grades 9-12"
            description="Cybersecurity foundations, careers, certifications, and defensive security."
            href="/high-school"
          />
        </div>

        <div className="mt-8">
          <FeatureCard
            title="Lesson Hub"
            description="Students can access all grade-level learning paths from one organized lesson hub."
            href="/lessons"
          />
        </div>
      </section>

      <section className="px-8 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 text-cyan-400 font-semibold">
              Practice and Activities
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Learn by making cyber safety decisions.
            </h2>

            <p className="text-slate-300 max-w-3xl leading-relaxed">
              Interactive activities help students practice identifying scams,
              improving passwords, and making safer choices online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Activities Hub"
              description="Access all interactive CyberShield activities in one place."
              href="/activities"
            />

            <FeatureCard
              title="Cyber Safety Quiz"
              description="Test cybersecurity awareness with a short interactive quiz."
              href="/quiz"
            />

            <FeatureCard
              title="Spot the Scam"
              description="Practice identifying suspicious messages and online red flags."
              href="/spot-the-scam"
            />

            <FeatureCard
              title="Password Safety Lab"
              description="Use fake sample passwords to learn what makes passwords stronger."
              href="/password-lab"
            />
          </div>
        </div>
      </section>

      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="mb-3 text-cyan-400 font-semibold">
            Resources and Support
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tools for students, parents, and teachers.
          </h2>

          <p className="text-slate-300 max-w-3xl leading-relaxed">
            CyberShield Academy includes resources that support classroom use,
            student review, teacher planning, and future certificates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Student Resources"
            description="Review cybersecurity vocabulary, safety checklists, and scam warning signs."
            href="/resources"
          />

          <FeatureCard
            title="Teacher Toolkit"
            description="Access lesson ideas, discussion prompts, worksheet placeholders, and teaching tips."
            href="/teacher-toolkit"
          />

          <FeatureCard
            title="Certificate Pathways"
            description="Preview future CyberShield certificates for Kids, Junior, and High School tracks."
            href="/certificates"
          />
        </div>
      </section>

      <section className="px-8 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 text-cyan-400 font-semibold">
              Outreach and Impact
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for real-world cybersecurity education.
            </h2>

            <p className="text-slate-300 max-w-3xl leading-relaxed">
              CyberShield Academy is designed to support future school outreach,
              classroom presentations, feedback collection, and honest impact
              tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="School Outreach"
              description="Explore presentation options for elementary, middle, and high school students."
              href="/outreach"
            />

            <FeatureCard
              title="Impact Tracker"
              description="Track outreach goals, sessions completed, students reached, and feedback."
              href="/impact"
            />

            <FeatureCard
              title="Feedback Center"
              description="Preview a feedback form for students, parents, teachers, and volunteers."
              href="/feedback"
            />

            <FeatureCard
              title="Project Roadmap"
              description="View completed features, current improvements, and future version goals."
              href="/roadmap"
            />
          </div>
        </div>
      </section>

      <section id="mission" className="px-8 py-20 max-w-5xl mx-auto text-center">
        <p className="mb-3 text-cyan-400 font-semibold">
          Mission
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Making cybersecurity easier to understand.
        </h2>

        <p className="text-lg text-slate-300 leading-relaxed">
          CyberShield Academy focuses on safe, ethical, and defensive
          cybersecurity education. The goal is to help students protect
          themselves online, understand digital risks, and build confidence with
          responsible technology use.
        </p>
      </section>

      <Footer />
    </main>
  );
}