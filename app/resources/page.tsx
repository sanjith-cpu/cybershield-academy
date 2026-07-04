import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vocabularyTerms = [
  {
    term: "Cybersecurity",
    definition:
      "The practice of protecting devices, accounts, networks, and information from online risks.",
  },
  {
    term: "Phishing",
    definition:
      "A scam where someone tries to trick you into clicking a link, opening a file, or sharing private information.",
  },
  {
    term: "Password",
    definition:
      "A secret word or phrase used to protect an account. Strong passwords should be private, unique, and hard to guess.",
  },
  {
    term: "Multi-Factor Authentication",
    definition:
      "An extra account protection step, such as a code or approval prompt, used along with a password.",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of information you leave online through posts, comments, photos, usernames, searches, and accounts.",
  },
  {
    term: "Privacy Settings",
    definition:
      "Controls that help you decide who can see your information, posts, profile, or activity.",
  },
  {
    term: "Suspicious Link",
    definition:
      "A link that looks strange, unexpected, misspelled, too urgent, or unrelated to the real website it claims to be from.",
  },
  {
    term: "Social Engineering",
    definition:
      "A trick where someone manipulates people using fear, urgency, trust, rewards, or pressure.",
  },
];

const studentChecklist = [
  "Use strong, unique passwords for important accounts.",
  "Do not share passwords with friends or classmates.",
  "Pause before clicking links in messages, pop-ups, or emails.",
  "Keep personal details like address, phone number, school schedule, and location private.",
  "Ask a trusted adult if something online feels scary, confusing, or suspicious.",
];

const parentChecklist = [
  "Talk regularly about scams, privacy, and safe online choices.",
  "Encourage students to report suspicious messages instead of hiding them.",
  "Help students check privacy settings on apps and accounts.",
  "Remind students that they should never enter real passwords into random websites.",
  "Create a calm plan for what to do if a student clicks something suspicious.",
];

const teacherChecklist = [
  "Use fake examples when teaching passwords or scams.",
  "Remind students not to share personal information during activities.",
  "Focus on defensive, ethical, and age-appropriate cybersecurity habits.",
  "Encourage students to ask for help instead of investigating suspicious links alone.",
  "Connect lessons to real-life student situations like games, school accounts, and group chats.",
];

const safeBrowsingSteps = [
  {
    title: "Check the address",
    detail:
      "Look carefully at the website address. Watch for misspellings, extra words, or strange domains.",
  },
  {
    title: "Avoid random pop-ups",
    detail:
      "Do not trust pop-ups that claim your device is infected, broken, or needs an urgent download.",
  },
  {
    title: "Use official websites",
    detail:
      "When possible, go directly to the official website or app instead of clicking a random message link.",
  },
  {
    title: "Slow down",
    detail:
      "Scams often try to make you panic or rush. Pausing gives you time to notice warning signs.",
  },
];

const whatToDoSteps = [
  {
    situation: "You clicked a suspicious link",
    response:
      "Stop interacting with the page. Do not enter passwords or personal information. Tell a trusted adult, teacher, or technology staff member.",
  },
  {
    situation: "You shared a password by mistake",
    response:
      "Ask for help changing the password quickly. If available, turn on multi-factor authentication and check account recovery options.",
  },
  {
    situation: "Someone is pressuring you online",
    response:
      "Do not keep it secret. Save evidence if needed, stop replying, and tell a trusted adult or school staff member.",
  },
  {
    situation: "A device shows a scary warning",
    response:
      "Do not download unknown tools from pop-ups. Ask a trusted adult or technology staff member to check it safely.",
  },
];

const quickLinks = [
  {
    label: "Take the Quiz",
    href: "/quiz",
  },
  {
    label: "Try Spot the Scam",
    href: "/spot-the-scam",
  },
  {
    label: "Use Password Lab",
    href: "/password-lab",
  },
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            CyberShield Resources
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Simple cybersecurity resources for students, parents, and teachers.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Use this page to review cybersecurity vocabulary, safe online habits,
            classroom reminders, and what to do when something suspicious happens
            online.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Cybersecurity Vocabulary
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These beginner-friendly definitions help students understand
              common cybersecurity words without needing advanced technical
              knowledge.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {vocabularyTerms.map((item) => (
                <div
                  key={item.term}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-cyan-200">
                    {item.term}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-cyan-200">
                Student Safety Checklist
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {studentChecklist.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-950/70 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-cyan-200">
                Parent Safety Checklist
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {parentChecklist.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-950/70 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-cyan-200">
                Teacher Safety Checklist
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {teacherChecklist.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-950/70 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Safe Browsing Checklist
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Before clicking links, downloading files, or entering information,
              students should slow down and check for warning signs.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {safeBrowsingSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              What To Do If Something Goes Wrong Online
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              Mistakes can happen. The safest response is to stop, avoid making
              the problem worse, and ask a trusted adult or school technology
              staff member for help.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {whatToDoSteps.map((step) => (
                <div
                  key={step.situation}
                  className="rounded-2xl border border-yellow-500/20 bg-slate-950/60 p-5"
                >
                  <h3 className="font-semibold text-yellow-100">
                    {step.situation}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-yellow-50/90">
                    {step.response}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Practice With Activities
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              After reviewing the resources, students can practice with
              interactive activities and classroom-friendly tools.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link) => (
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