import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const certificateTracks = [
  {
    title: "CyberShield Kids Badge",
    audience: "Elementary Students",
    level: "Beginner",
    description:
      "A simple recognition badge for younger students who learn basic online safety, kindness, privacy, and when to ask a trusted adult for help.",
    requirements: [
      "Complete the CyberShield Kids page",
      "Review basic online safety rules",
      "Practice safe-or-unsafe examples",
      "Explain one way to stay safe online",
    ],
  },
  {
    title: "CyberShield Junior Badge",
    audience: "Middle School Students",
    level: "Intermediate",
    description:
      "A learning badge for students who practice scam awareness, password safety, digital citizenship, privacy, and safer online decision-making.",
    requirements: [
      "Complete the CyberShield Junior page",
      "Take the Cyber Safety Quiz",
      "Try the Spot the Scam activity",
      "Review the Resources page",
      "Write one reflection about a safer online habit",
    ],
  },
  {
    title: "CyberShield High School Badge",
    audience: "High School Students",
    level: "Advanced Student Learning",
    description:
      "A recognition badge for students who explore defensive cybersecurity, ethics, career pathways, certifications, and outreach-ready safety habits.",
    requirements: [
      "Complete the High School track",
      "Use the Password Safety Lab with fake examples only",
      "Review defensive cybersecurity ethics",
      "Explore career pathway examples",
      "Complete a short reflection on responsible cybersecurity learning",
    ],
  },
];

const badgeSkills = [
  {
    skill: "Scam Awareness",
    detail:
      "Students learn how to recognize urgency, fear, fake prizes, secrecy, suspicious links, and password requests.",
  },
  {
    skill: "Password Safety",
    detail:
      "Students learn why strong, unique passwords and multi-factor authentication help protect accounts.",
  },
  {
    skill: "Digital Citizenship",
    detail:
      "Students practice respectful, responsible, and privacy-aware online behavior.",
  },
  {
    skill: "Defensive Cybersecurity Ethics",
    detail:
      "Students learn that cybersecurity skills should be used to protect people, respect privacy, and reduce harm.",
  },
];

const futureIdeas = [
  "Printable badge templates for teachers",
  "Simple certificate download option",
  "Student reflection form before earning a badge",
  "Teacher approval checklist",
  "Separate badges for scams, passwords, privacy, and digital citizenship",
  "A future progress tracker for completed learning activities",
];

const importantNotes = [
  "CyberShield Academy badges are learning recognition badges.",
  "They are not official industry certifications.",
  "They should not be described as professional cybersecurity credentials.",
  "They are meant to encourage learning, reflection, and safe online habits.",
  "Students should use these badges to show participation and growth, not professional qualification.",
];

const certificateLinks = [
  {
    label: "Kids Track",
    href: "/kids",
  },
  {
    label: "Junior Track",
    href: "/junior",
  },
  {
    label: "High School Track",
    href: "/high-school",
  },
  {
    label: "Cyber Safety Quiz",
    href: "/quiz",
  },
  {
    label: "Spot the Scam",
    href: "/spot-the-scam",
  },
  {
    label: "Password Lab",
    href: "/password-lab",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Certificate Pathways
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Learning badges for cybersecurity growth.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CyberShield Academy certificates are student learning recognition
            badges. They help students celebrate progress in online safety, scam
            awareness, password security, digital citizenship, and ethical
            defensive cybersecurity.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Important: These badges are not official industry certifications.
            They are learning recognition badges for participation, reflection,
            and skill-building.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {certificateTracks.map((track) => (
              <div
                key={track.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {track.audience}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  {track.title}
                </h2>

                <span className="mt-4 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {track.level}
                </span>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {track.description}
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-cyan-200">
                    Suggested Requirements
                  </h3>

                  <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                    {track.requirements.map((requirement) => (
                      <li
                        key={requirement}
                        className="rounded-xl bg-slate-950/70 p-3"
                      >
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Skills These Badges Recognize
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Each badge should recognize practical cybersecurity literacy, not
              advanced technical hacking skills.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {badgeSkills.map((item) => (
                <div
                  key={item.skill}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">{item.skill}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Important Certificate Notes
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                This section keeps the project honest and prevents the badges
                from being confused with professional credentials.
              </p>

              <div className="mt-6 grid gap-3">
                {importantNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Future Certificate Ideas
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These ideas can be added later after the main site is more
                complete and tested.
              </p>

              <div className="mt-6 grid gap-3">
                {futureIdeas.map((idea) => (
                  <div
                    key={idea}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {idea}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Start a Certificate Pathway
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Students can begin with their age-level track, then practice with
              activities and review resources before earning a learning badge.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {certificateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}