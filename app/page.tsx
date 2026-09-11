import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const audienceCards = [
  {
    title: "CyberShield Kids",
    audience: "Elementary Students",
    detailOne: "6 modules",
    detailTwo: "30 lessons",
    description:
      "An elementary cyber safety path about private information, passwords, scam spotting, kind choices, digital footprints, trusted adults, and safer online habits.",
    href: "/kids",
  },
  {
    title: "CyberShield Junior",
    audience: "Middle School Students",
    detailOne: "Middle school path",
    detailTwo: "Practical learning",
    description:
      "Age-appropriate learning about scams, passwords, privacy, safe browsing, reporting, digital citizenship, and responsible technology use.",
    href: "/junior",
  },
  {
    title: "CyberShield High School",
    audience: "High School Students",
    detailOne: "3 learning levels",
    detailTwo: "Beginner to Advanced",
    description:
      "A deeper cybersecurity curriculum with Beginner, Intermediate, and Advanced tracks focused on ethical, defensive, evidence-based cybersecurity learning.",
    href: "/high-school",
  },
];

const featureCards = [
  {
    title: "Learning Library",
    description:
      "Explore cybersecurity lessons and age-level learning paths built for students from elementary through high school.",
    href: "/lessons",
    label: "Open Learning Library",
  },
  {
    title: "Interactive Practice",
    description:
      "Use Scenario Room, Practice Lab, quizzes, and focused activities to apply cybersecurity concepts safely.",
    href: "/activities",
    label: "Try Activities",
  },
  {
    title: "Cyber Safety Starter",
    description:
      "Open the dedicated elementary-friendly Cyber Safety Starter for a focused introduction to safer online choices.",
    href: "/cyber-safety-starter",
    label: "Open Cyber Safety Starter",
  },
  {
    title: "Student Resources",
    description:
      "Review cybersecurity vocabulary, safety checklists, reporting guidance, and other useful learning references.",
    href: "/resources",
    label: "View Resources",
  },
];

const activityCards = [
  {
    title: "Scenario Room",
    description:
      "Read fictional cybersecurity situations and choose the safest response.",
    href: "/scenario-room",
  },
  {
    title: "Practice Lab",
    description:
      "Move through safe practice stations connected to core cybersecurity skills.",
    href: "/practice-lab",
  },
  {
    title: "Spot the Scam",
    description:
      "Practice identifying suspicious messages, fake prizes, urgency, and unsafe requests.",
    href: "/spot-the-scam",
  },
  {
    title: "Password Lab",
    description:
      "Use fake passwords only to learn about length, uniqueness, and safer account habits.",
    href: "/password-lab",
  },
];

const learningFlow = [
  {
    step: "1",
    title: "Learn",
    description:
      "Start with a lesson or learning track that matches your age and experience level.",
  },
  {
    step: "2",
    title: "Practice",
    description:
      "Use scenarios, quizzes, labs, and activities with fictional examples.",
  },
  {
    step: "3",
    title: "Reflect",
    description:
      "Explain warning signs, safer choices, privacy decisions, and responsible responses.",
  },
  {
    step: "4",
    title: "Apply Safely",
    description:
      "Use what you learned to make better real-world online safety decisions without testing risky situations.",
  },
];

const safetyPrinciples = [
  "Use fictional or synthetic examples for cybersecurity practice.",
  "Never enter real passwords into practice activities.",
  "Do not open or test real suspicious links, files, or messages.",
  "Protect private and personal information.",
  "Do not access accounts, devices, networks, or files without permission.",
  "Ask a trusted adult, teacher, or appropriate technology staff member for help when something feels suspicious.",
];

const quickLinks = [
  {
    label: "Lessons",
    href: "/lessons",
  },
  {
    label: "Kids",
    href: "/kids",
  },
  {
    label: "Junior",
    href: "/junior",
  },
  {
    label: "High School",
    href: "/high-school",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "Cyber Safety Starter",
    href: "/cyber-safety-starter",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  CyberShield Academy
                </p>

                <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
                  Learn cybersecurity. Practice safely. Build stronger digital habits.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  CyberShield Academy is a student-built cybersecurity education
                  platform with age-level learning tracks, interactive practice,
                  online safety activities, and ethical defensive cybersecurity
                  content for students.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/lessons"
                    className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Start Learning
                  </Link>

                  <Link
                    href="/cyber-safety-starter"
                    className="rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/15"
                  >
                    Cyber Safety Starter
                  </Link>

                  <Link
                    href="/activities"
                    className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Try Activities
                  </Link>
                </div>

                <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
                  Safety reminder: CyberShield Academy teaches safe, ethical, and
                  defensive cybersecurity only. Use fictional examples, protect
                  privacy, and never test suspicious content or systems without
                  proper permission.
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 shadow-xl shadow-cyan-950/20">
                <h2 className="text-2xl font-bold text-cyan-200">
                  What you can do here
                </h2>

                <div className="mt-6 grid gap-3">
                  {[
                    "Learn through Kids, Junior, and High School tracks",
                    "Move from Beginner to Advanced cybersecurity learning",
                    "Practice with scenarios, quizzes, labs, and challenges",
                    "Use the dedicated Cyber Safety Starter",
                    "Review cybersecurity resources and safety guidance",
                    "Explore careers, certifications, and defensive cybersecurity concepts",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Learn more about CyberShield Academy →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                <h2 className="text-2xl font-bold text-white">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  {feature.label} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Choose a Learning Track
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is organized by age level so students can move
              into material that matches their experience while keeping the same
              emphasis on safety, ethics, privacy, and defensive thinking.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {audienceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {card.audience}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {card.title}
                  </h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm font-semibold text-cyan-200">
                      {card.detailOne}
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm font-semibold text-cyan-200">
                      {card.detailTwo}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {card.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    Open track →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              How students move through CyberShield
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use the platform as a simple cycle: learn the concept, practice in a
              safe environment, reflect on the decision, and apply the lesson
              responsibly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {learningFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Featured Practice Activities
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Practice cybersecurity decision-making with fictional examples and
              defensive learning activities.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {activityCards.map((activity) => (
                <Link
                  key={activity.href}
                  href={activity.href}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="text-2xl font-bold text-cyan-200">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activity.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    Open activity →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="overflow-hidden rounded-3xl border border-purple-500/30 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_36%),linear-gradient(135deg,_rgba(88,28,135,0.22),_rgba(15,23,42,0.9))] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                  Elementary Focus
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  Cyber Safety Starter
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  Open the dedicated Cyber Safety Starter when you want a focused,
                  elementary-friendly introduction to online safety. It remains a
                  separate part of CyberShield so it is quick to find and use.
                </p>
              </div>

              <Link
                href="/cyber-safety-starter"
                className="inline-flex justify-center rounded-xl bg-purple-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-purple-200"
              >
                Open Cyber Safety Starter
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Safety principles behind every page
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield learning is designed around defensive, ethical,
              age-appropriate, and privacy-aware cybersecurity.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {safetyPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {principle}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/safety"
                className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Review Safety & Privacy →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Explore CyberShield Academy
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Jump directly to a learning track, activity hub, the Cyber Safety
              Starter, resources, or information about the platform.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label} →
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