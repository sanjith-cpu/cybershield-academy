import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aboutHighlights = [
  {
    label: "Project Type",
    value: "Student-Built",
    detail:
      "CyberShield Academy was created as a student-built cybersecurity education platform.",
  },
  {
    label: "Main Focus",
    value: "Cyber Literacy",
    detail:
      "The site focuses on online safety, scams, passwords, privacy, safe browsing, digital footprint, cyber ethics, and defensive cybersecurity.",
  },
  {
    label: "Learning Levels",
    value: "3 Age Groups",
    detail:
      "Content is organized for elementary, middle school, and high school students.",
  },
  {
    label: "Approach",
    value: "Safe + Defensive",
    detail:
      "Lessons and activities use fictional or synthetic examples and emphasize permission, privacy, ethics, and responsible decisions.",
  },
];

const missionCards = [
  {
    title: "Make cybersecurity easier to understand",
    detail:
      "Cybersecurity can feel technical or overwhelming. CyberShield breaks important ideas into clear explanations, examples, scenarios, and practice.",
  },
  {
    title: "Build safer digital habits",
    detail:
      "The platform focuses on habits students can use in everyday life, such as recognizing warning signs, protecting accounts, thinking before clicking, and respecting privacy.",
  },
  {
    title: "Grow from basics to advanced concepts",
    detail:
      "Students can begin with age-appropriate online safety and continue into deeper defensive cybersecurity, evidence-based reasoning, careers, and certifications.",
  },
];

const whoItServes = [
  {
    title: "Elementary Students",
    detail:
      "Younger students can learn basic online safety through simple explanations, fictional examples, trusted-adult reminders, and the dedicated Cyber Safety Starter.",
  },
  {
    title: "Middle School Students",
    detail:
      "Middle school students can practice spotting scams, protecting accounts, thinking about privacy, browsing safely, and making responsible technology choices.",
  },
  {
    title: "High School Students",
    detail:
      "High school students can progress through Beginner, Intermediate, and Advanced cybersecurity learning with a strong ethical and defensive focus.",
  },
];

const platformSections = [
  {
    title: "Learning Tracks",
    detail:
      "Age-level paths for Kids, Junior, and High School students provide a clear place to begin and continue learning.",
    href: "/lessons",
    label: "Explore Learning",
  },
  {
    title: "Interactive Practice",
    detail:
      "Scenario Room, Practice Lab, quizzes, scam spotting, password practice, browsing activities, and reflections help students apply concepts safely.",
    href: "/activities",
    label: "View Activities",
  },
  {
    title: "Cyber Safety Starter",
    detail:
      "A dedicated elementary-friendly starter page provides a focused introduction to safer online choices and common cyber safety ideas.",
    href: "/cyber-safety-starter",
    label: "Open Starter",
  },
  {
    title: "Student Resources",
    detail:
      "Resources provide cybersecurity vocabulary, safety checklists, reporting guidance, and references students can return to while learning.",
    href: "/resources",
    label: "View Resources",
  },
  {
    title: "Careers and Certifications",
    detail:
      "Older students can explore cybersecurity career paths and learn how certifications may fit into future study and skill development.",
    href: "/careers",
    label: "Explore Careers",
  },
  {
    title: "Safety and Privacy",
    detail:
      "Clear safety guidance explains how to use CyberShield responsibly and what students should avoid sharing or testing.",
    href: "/safety",
    label: "Safety & Privacy",
  },
];

const values = [
  {
    title: "Safe",
    detail:
      "CyberShield avoids real passwords, private account information, real suspicious links, and unauthorized access activities.",
  },
  {
    title: "Ethical",
    detail:
      "The platform emphasizes permission, privacy, respect, responsible reporting, and defensive cybersecurity.",
  },
  {
    title: "Student-Friendly",
    detail:
      "Material is organized and explained so students can understand the ideas without needing professional cybersecurity experience.",
  },
  {
    title: "Practical",
    detail:
      "Lessons connect concepts to decisions students may face online and give them safe ways to practice recognizing risks.",
  },
];

const safetyPromises = [
  "CyberShield does not ask students to enter real passwords into practice activities.",
  "CyberShield does not teach unauthorized access or harmful intrusion techniques.",
  "CyberShield does not require students to open real suspicious links, files, or messages.",
  "CyberShield does not require private account details or personal information for learning activities.",
  "Practice activities use fictional, synthetic, or clearly safe examples.",
  "Real cybersecurity concerns should be handled with an appropriate trusted adult, teacher, parent, guardian, or technology professional.",
];

const aboutLinks = [
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
    label: "Safety & Privacy",
    href: "/safety",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              About CyberShield Academy
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              A student-built platform for learning cybersecurity safely.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              CyberShield Academy helps students build cybersecurity knowledge
              through age-level learning tracks, interactive practice, online
              safety activities, and ethical defensive cybersecurity content.
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
                Explore Activities
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
              CyberShield Academy is for educational, ethical, and defensive
              learning. Students should not enter real passwords, share private
              account information, test suspicious content, or access systems
              without permission.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-semibold text-slate-400">
                  {item.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-cyan-200">
                  {item.value}
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Make cybersecurity education clearer, safer, and more useful.
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-slate-300">
              CyberShield Academy was created to give students a structured way
              to learn cybersecurity without turning the subject into unsafe
              experimentation. The goal is to explain important concepts,
              provide safe practice, strengthen digital judgment, and help
              students understand how cybersecurity connects to everyday life
              and future technology careers.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {missionCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-200">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Who CyberShield Academy Is For
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The platform is organized around student learning at different age
              and experience levels.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {whoItServes.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-100">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {group.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What the Website Includes
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield combines structured learning, practice, resources, and
              safety guidance in one connected student-focused platform.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platformSections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  <h3 className="text-xl font-bold text-cyan-200">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {section.detail}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    {section.label} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
              Why It Was Built
            </p>

            <h2 className="mt-3 text-3xl font-bold text-purple-100">
              From online safety basics to a full cybersecurity learning platform.
            </h2>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <p className="leading-8 text-slate-300">
                CyberShield Academy began with a simple goal: make cybersecurity
                easier for students to understand. As the project grew, that idea
                developed into separate age-level tracks, interactive activities,
                safety resources, and a much deeper high school curriculum.
              </p>

              <p className="leading-8 text-slate-300">
                The site is designed to show that cybersecurity education can be
                practical without being unsafe. Students can learn how to
                recognize risks, reason through evidence, protect privacy, and
                think defensively without practicing on real systems or real
                people.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
              <h2 className="text-3xl font-bold text-emerald-100">
                Project Values
              </h2>

              <p className="mt-3 leading-7 text-emerald-50/90">
                These values guide the way CyberShield lessons, activities, and
                resources are designed.
              </p>

              <div className="mt-6 grid gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-bold text-emerald-100">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {value.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Safety Promises
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Cybersecurity learning should help students become safer and more
                responsible online.
              </p>

              <div className="mt-6 grid gap-3">
                {safetyPromises.map((promise) => (
                  <div
                    key={promise}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {promise}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Explore CyberShield Academy
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Jump into a learning track, practice activity, Cyber Safety Starter,
              student resource, or safety page.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aboutLinks.map((link) => (
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