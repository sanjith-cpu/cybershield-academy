import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const lessonTracks = [
  {
    title: "CyberShield Kids",
    audience: "Grades 3-5",
    href: "/kids",
    description:
      "Simple online safety lessons for elementary students focused on privacy, kindness, passwords, and asking a trusted adult for help.",
    topics: [
      "Internet basics",
      "Keeping information private",
      "Password basics",
      "Being kind online",
      "Trusted adult support",
    ],
  },
  {
    title: "CyberShield Junior",
    audience: "Grades 6-8",
    href: "/junior",
    description:
      "Middle school cybersecurity awareness lessons focused on scams, passwords, digital citizenship, and personal information protection.",
    topics: [
      "Internet safety",
      "Password security",
      "Scam awareness",
      "Digital citizenship",
      "Personal information protection",
    ],
  },
  {
    title: "CyberShield High School",
    audience: "Grades 9-12",
    href: "/high-school",
    description:
      "High school cybersecurity lessons focused on foundations, technical concepts, career pathways, certifications, and ethical defensive security.",
    topics: [
      "Beginner cybersecurity foundations",
      "Intermediate core skills",
      "Advanced career preparation",
      "Cybersecurity careers",
      "Responsible defensive security",
    ],
  },
];

const learningGoals = [
  "Help students build safe online habits.",
  "Teach cybersecurity in an age-appropriate way.",
  "Prepare students to recognize scams and unsafe situations.",
  "Encourage ethical and responsible technology use.",
  "Support future school outreach and classroom learning.",
];

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Lesson Hub
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cybersecurity lessons organized by grade level.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          The Lesson Hub brings CyberShield Academy&apos;s main learning paths
          into one place. Students can choose the track that matches their grade
          level and build cybersecurity awareness step by step.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {lessonTracks.map((track) => (
            <Link
              key={track.title}
              href={track.href}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 hover:-translate-y-1 transition"
            >
              <p className="text-sm text-slate-400 mb-2">
                {track.audience}
              </p>

              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                {track.title}
              </h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                {track.description}
              </p>

              <h3 className="font-bold mb-3">Topics Included:</h3>

              <div className="space-y-3">
                {track.topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-300"
                  >
                    {topic}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950">
                View Lessons
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Learning Goals
            </h2>

            <div className="space-y-3">
              {learningGoals.map((goal) => (
                <div
                  key={goal}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {goal}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Why grade-level tracks matter
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Cybersecurity should be taught differently depending on a
              student&apos;s age and experience. Younger students need simple
              safety habits, while older students can explore careers,
              certifications, and technical ideas.
            </p>

            <p className="text-slate-300 leading-relaxed">
              CyberShield Academy separates lessons by grade level so each
              student can learn cybersecurity in a way that makes sense for
              them.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start with the right track.
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Students can begin with the learning path that matches their grade
            level, then move into activities, resources, certificates, and
            outreach opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}