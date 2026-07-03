import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const activities = [
  {
    title: "Cyber Safety Quiz",
    href: "/quiz",
    description:
      "Test your knowledge of online safety, passwords, scams, privacy, and responsible internet use.",
    skills: [
      "Online safety",
      "Password basics",
      "Scam awareness",
      "Trusted adult decision-making",
    ],
  },
  {
    title: "Spot the Scam",
    href: "/spot-the-scam",
    description:
      "Practice identifying suspicious messages, fake offers, scam warning signs, and online red flags.",
    skills: [
      "Phishing awareness",
      "Suspicious link recognition",
      "Urgency and fear tactics",
      "Safe decision-making",
    ],
  },
  {
    title: "Password Safety Lab",
    href: "/password-lab",
    description:
      "Type fake sample passwords and learn what makes passwords stronger, safer, and harder to guess.",
    skills: [
      "Password length",
      "Character variety",
      "Avoiding common passwords",
      "Multi-factor authentication",
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Interactive Learning
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          CyberShield Activities Hub
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          The Activities Hub brings CyberShield Academy&apos;s interactive tools
          into one place. Students can practice cyber safety skills through
          quizzes, scam examples, and password safety labs.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 hover:-translate-y-1 transition"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                {activity.title}
              </h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                {activity.description}
              </p>

              <h3 className="font-bold mb-3">Skills Practiced:</h3>

              <div className="space-y-3">
                {activity.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950">
                Start Activity
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Why interactive activities matter
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Students learn cybersecurity better when they can practice making
              decisions. These activities help students apply cyber safety ideas
              instead of only reading about them.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Future activity ideas
            </h2>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Safe Browsing Challenge
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Digital Footprint Reflection
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Cyber Ethics Scenario Game
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Privacy Settings Checklist
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Practice builds cyber confidence.
          </h2>

          <p className="text-slate-300 leading-relaxed">
            CyberShield Academy activities are designed to be safe, educational,
            and focused on responsible defensive cybersecurity habits.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}