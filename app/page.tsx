import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import TrackCard from "@/components/TrackCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

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
            <TrackCard
              title="CyberShield Kids"
              grades="Grades 3-5"
              description="For elementary students learning internet safety, kindness online, privacy, and trusted adult reporting."
              href="/kids"
            />

            <TrackCard
              title="CyberShield Junior"
              grades="Grades 6-8"
              description="For middle school students learning passwords, scams, digital citizenship, and personal information protection."
              href="/junior"
            />

            <TrackCard
              title="CyberShield High School"
              grades="Grades 9-12"
              description="For high school students exploring cybersecurity fundamentals, technical concepts, careers, and certifications."
              href="/high-school"
            />
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
            <FeatureCard
              title="Interactive Lessons"
              description="Structured cybersecurity lessons for different age levels."
            />

            <FeatureCard
              title="Phishing Simulator"
              description="Practice spotting suspicious emails and online red flags."
            />

            <FeatureCard
              title="Cyber Assessments"
              description="Measure cybersecurity awareness and receive recommendations."
            />

            <FeatureCard
              title="Career Explorer"
              description="Discover cybersecurity careers, skills, and certification paths."
            />
	    <FeatureCard
  		title="Cyber Safety Quiz"
  		description="Students can test their knowledge with an interactive cybersecurity safety quiz."
                href="/quiz"
	    />
	    <FeatureCard
  		title="Spot the Scam"
 		description="Students can practice identifying suspicious messages, scam warning signs, and online red flags."
  		href="/spot-the-scam"
	    />
	    <FeatureCard
  		title="Password Safety Lab"
  		description="Students can test sample passwords and learn what makes passwords stronger."
  		href="/password-lab"
	    />
	    <FeatureCard
  		title="Student Resources"
  		description="Students, parents, and teachers can review cybersecurity vocabulary, safety checklists, and scam warning 			signs."
  		href="/resources"
	    />
	    <FeatureCard
  		title="Certificate Pathways"
  		description="Students can preview future CyberShield certificates for Kids, Junior, and High School learning paths."
  		href="/certificates"
	    />
	    <FeatureCard
  		title="School Outreach"
  		description="CyberShield Academy supports classroom presentations, student workshops, and real-world cybersecurity 			education outreach."
  		href="/outreach"
	    />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            CyberShield Academy exists to make cybersecurity education
            accessible, engaging, and practical for young students. The goal is
            not only to build a website, but to create a real educational
            initiative that can be used in local schools to teach students how
            to stay safe online.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
