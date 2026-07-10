import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B6.1",
    title: "Digital Identity in High School",
    route: "digital-identity-in-high-school",
    focus: "Understand how school, personal, social, and future-facing accounts combine into a digital identity.",
    lab: "Map a fake student identity profile and separate public, private, school, and future-ready information.",
  },
  {
    number: "B6.2",
    title: "Personal Data, Private Data, and Metadata",
    route: "personal-data-private-data-and-metadata",
    focus: "Learn the difference between personal data, sensitive private data, and hidden context clues like metadata.",
    lab: "Review fake file and profile details to decide what information should be protected more carefully.",
  },
  {
    number: "B6.3",
    title: "How Apps and Websites Collect Data",
    route: "how-apps-and-websites-collect-data",
    focus: "Explain common ways apps and websites collect information through accounts, settings, forms, activity, and permissions.",
    lab: "Analyze a fake app data collection panel and identify what the user can reduce or turn off.",
  },
  {
    number: "B6.4",
    title: "Privacy Settings and Audience Control",
    route: "privacy-settings-and-audience-control",
    focus: "Practice choosing safer privacy settings by thinking about audience, purpose, visibility, and long-term impact.",
    lab: "Adjust a fake privacy settings dashboard to match safer sharing goals for school and personal life.",
  },
  {
    number: "B6.5",
    title: "Digital Footprints and Future Readiness",
    route: "digital-footprints-and-future-readiness",
    focus: "Connect digital footprint choices to scholarships, jobs, teams, clubs, internships, and future opportunities.",
    lab: "Review fake search results and create a professional improvement plan without collecting real student data.",
  },
  {
    number: "B6.6",
    title: "Data Minimization and Safer Sharing",
    route: "data-minimization-and-safer-sharing",
    focus: "Learn how to share only what is necessary, reduce unnecessary exposure, and avoid oversharing by default.",
    lab: "Rewrite fake sign-up and profile examples using safer data minimization choices.",
  },
  {
    number: "B6.7",
    title: "Privacy Review Lab",
    route: "privacy-review-lab",
    focus: "Apply identity, metadata, collection, settings, footprint, and minimization concepts in a complete privacy review.",
    lab: "Complete a fake privacy audit and write a short defender-style recommendation.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B6 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain how digital identity is built from accounts, posts, settings, records, and online behavior.",
  "Separate personal data, private data, and metadata using safe fake examples.",
  "Describe common app and website data collection patterns without using real private data.",
  "Choose privacy settings based on audience, purpose, and long-term impact.",
  "Apply data minimization and safer sharing habits to school, personal, and future-readiness scenarios.",
];

const identityFlow = [
  { label: "Accounts", text: "School, personal, social, gaming, shopping, and project accounts all become part of identity." },
  { label: "Data", text: "Names, usernames, photos, activity, settings, and metadata can reveal more than expected." },
  { label: "Audience", text: "Friends, classmates, teachers, schools, clubs, employers, and strangers may see different parts." },
  { label: "Settings", text: "Privacy controls, permissions, profile visibility, and sharing defaults change exposure." },
  { label: "Future Impact", text: "A safer identity supports scholarships, jobs, teams, leadership, and professional trust." },
];

const fakePrivacyEvents = [
  ["Profile", "Public username visible on school project page", "Review audience"],
  ["App", "Location permission requested for a study timer", "Probably unnecessary"],
  ["File", "Photo contains hidden date and device metadata", "Metadata clue"],
  ["Settings", "Old posts visible to everyone by default", "Reduce exposure"],
];

export default function DigitalIdentityPrivacyModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Beginner Track
            </Link>
            <Link
              href="/high-school/beginner/web-basics-and-browser-safety"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/digital-identity-and-privacy/digital-identity-in-high-school"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B6
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Digital Identity and Privacy
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Move beyond basic privacy into digital identity, metadata, app data collection, audience control,
                digital footprints, future readiness, and safer sharing decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/digital-identity-and-privacy/digital-identity-in-high-school"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/digital-identity-and-privacy/module-test"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-xl font-black text-cyan-200">Module Snapshot</h2>
              <div className="mt-5 space-y-4">
                {moduleStats.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Module Mission</p>
            <h2 className="mt-3 text-3xl font-black text-white">Protect identity before problems appear.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Digital identity is not just one profile. It is the collection of accounts, data, settings, posts, metadata,
              permissions, and decisions that shape how a person is seen and protected online. Students learn to reduce
              unnecessary exposure while still using technology for school, projects, and future opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Reminder</p>
            <p className="mt-3 leading-7 text-yellow-50">
              This module uses fake profiles, fake settings, fake posts, and fake metadata. Students should not share real
              private information, passwords, addresses, school IDs, or personal account details in any activity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">Digital identity exposure flow</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Defenders think about what exists, who can see it, how it is collected, and what can be reduced safely.
            </p>
            <div className="mt-6 space-y-3">
              {identityFlow.map((step, index) => (
                <div
                  key={step.label}
                  className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:grid-cols-[auto_1fr] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div className="hidden h-px w-10 bg-cyan-400/30 sm:block" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{step.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fake Privacy Panel</p>
                <h2 className="mt-2 text-2xl font-black text-white">Identity Review Events</h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakePrivacyEvents.map(([area, event, status]) => (
                <div key={`${area}-${event}`} className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3">
                  <span className="font-mono font-bold text-cyan-200">{area}</span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. It helps students practice privacy reasoning without using real accounts or real
              student information.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B6 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fake identity artifacts, fake privacy panels, fake settings, and safe decision checks to build
            professional privacy habits.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/digital-identity-and-privacy/${lesson.route}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
            >
              <div className="grid gap-5 lg:grid-cols-[0.25fr_1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-cyan-300">{lesson.number}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Lesson {index + 1}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.focus}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Safe Lab</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.lab}</p>
                </div>
                <span className="text-sm font-bold text-cyan-300">Open →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Objectives</p>
            <h2 className="mt-2 text-3xl font-black text-white">By the end, students can:</h2>
            <div className="mt-5 space-y-3">
              {objectives.map((objective) => (
                <div key={objective} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">Module Assessment</p>
            <h2 className="mt-2 text-3xl font-black text-white">B6 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering personal and private data, metadata, privacy
              settings, digital reputation, data minimization, safer sharing, app collection clues, and privacy scenario
              judgment. Answers and explanations stay hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/digital-identity-and-privacy/module-test"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Module Test →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href="/high-school/beginner/web-basics-and-browser-safety"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/digital-identity-and-privacy/digital-identity-in-high-school"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B6.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}