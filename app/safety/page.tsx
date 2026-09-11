import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const safetyPrinciples = [
  {
    title: "Educational Purpose Only",
    detail:
      "CyberShield Academy is designed for online safety, scam awareness, privacy, password security, digital citizenship, and ethical defensive cybersecurity learning.",
  },
  {
    title: "No Real Passwords",
    detail:
      "Students should never type real school, email, gaming, banking, or social media passwords into CyberShield Academy activities.",
  },
  {
    title: "Protect Private Information",
    detail:
      "Students should avoid sharing private details such as addresses, phone numbers, school IDs, login codes, account details, or personal schedules.",
  },
  {
    title: "Defensive Cybersecurity Only",
    detail:
      "CyberShield focuses on recognizing risks, protecting accounts, respecting privacy, reporting concerns, and making safer online decisions.",
  },
];

const privacySnapshot = [
  {
    label: "Real Passwords",
    status: "Not needed",
    detail:
      "CyberShield activities use fake or fictional examples and should never require a real account password.",
  },
  {
    label: "Student Accounts",
    status: "Not required",
    detail:
      "Students can use the learning content without creating a CyberShield student profile.",
  },
  {
    label: "Private Account Details",
    status: "Not needed",
    detail:
      "Activities do not require private messages, login codes, account recovery details, or personal account information.",
  },
  {
    label: "Real Incident Reports",
    status: "Not accepted here",
    detail:
      "CyberShield is a learning platform, not a place to submit real security incidents, emergencies, or sensitive reports.",
  },
];

const safeLearningRules = [
  "Use fictional or clearly safe examples during cybersecurity practice.",
  "Do not enter real passwords into practice activities.",
  "Do not share private personal or account information.",
  "Do not try to access another person’s account, device, file, or network.",
  "Do not open or test real suspicious links, downloads, attachments, or messages.",
  "Use cybersecurity knowledge to protect people and systems, not to trick, harm, embarrass, or invade privacy.",
  "Keep all practice ethical, defensive, permission-based, and age-appropriate.",
  "Ask a trusted adult or appropriate technology professional for help when a real situation feels suspicious.",
];

const informationToProtect = [
  "Real passwords",
  "Login or verification codes",
  "Home addresses",
  "Phone numbers",
  "Student ID numbers",
  "Private account details",
  "Personal schedules",
  "Private messages",
  "Financial information",
  "Medical information",
  "Exact personal location",
  "Sensitive security reports",
];

const safeUseExamples = [
  {
    title: "Use fake practice data",
    detail:
      "When an activity needs a password, message, account, organization, or scenario, use the fictional examples provided by CyberShield.",
  },
  {
    title: "Keep real problems separate",
    detail:
      "Do not paste real suspicious messages, private conversations, account alerts, or personal security problems into activities.",
  },
  {
    title: "Do not experiment on real systems",
    detail:
      "Learning about cybersecurity does not give permission to test accounts, websites, networks, devices, or files that are not yours.",
  },
  {
    title: "Get help for real concerns",
    detail:
      "If something actually happens online, use the appropriate trusted adult, official support channel, school process, or qualified technology professional.",
  },
];

const helpSteps = [
  {
    step: "1",
    title: "Stop",
    detail:
      "If something feels suspicious, stop clicking, replying, downloading, or entering information.",
  },
  {
    step: "2",
    title: "Protect your information",
    detail:
      "Do not send passwords, verification codes, payment information, addresses, or other private details.",
  },
  {
    step: "3",
    title: "Ask for help",
    detail:
      "Tell a trusted adult or appropriate technology professional about the suspicious message, account warning, link, or online interaction.",
  },
  {
    step: "4",
    title: "Use official support",
    detail:
      "For a real account, device, or service, use the official help or recovery process instead of trying to solve a security issue through experimentation.",
  },
];

const siteLimitations = [
  {
    title: "Not an emergency service",
    detail:
      "CyberShield Academy is not a place to report emergencies or urgent personal safety threats.",
  },
  {
    title: "Not professional legal advice",
    detail:
      "The site provides general cybersecurity education and does not provide legal advice.",
  },
  {
    title: "Not an incident response service",
    detail:
      "CyberShield does not investigate real hacks, malware, scams, account takeovers, or device problems.",
  },
  {
    title: "Not permission to test",
    detail:
      "Educational cybersecurity content does not authorize anyone to access or test real systems, accounts, devices, networks, or files.",
  },
];

const whatThisSiteDoesNotDo = [
  "It does not require real passwords for learning activities.",
  "It does not require students to share private personal information.",
  "It does not verify or investigate real cybersecurity incidents.",
  "It does not replace help from trusted adults or qualified technology professionals.",
  "It does not teach students to break into accounts, devices, networks, or files.",
  "It does not encourage students to test real suspicious links, downloads, or messages.",
  "It does not give permission to experiment on systems that are not explicitly authorized for learning.",
  "It is not a place to submit emergencies, sensitive reports, or private account recovery information.",
];

const relatedLinks = [
  {
    label: "Cyber Safety Starter",
    href: "/cyber-safety-starter",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function SafetyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(234,179,8,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Safety & Privacy
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Learn cybersecurity without putting real information or systems at risk.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              CyberShield Academy is an educational platform for safer online
              habits and ethical defensive cybersecurity. Practice should stay
              fictional, privacy-aware, permission-based, and focused on learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cyber-safety-starter"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Cyber Safety Starter
              </Link>

              <Link
                href="/resources"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View Resources
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Practice Safely
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
              Important: never enter real passwords, login codes, private account
              details, addresses, phone numbers, school IDs, or other sensitive
              information into CyberShield practice activities.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {safetyPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h2 className="text-xl font-bold text-cyan-200">
                  {principle.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {principle.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Privacy Snapshot
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-emerald-50/90">
              CyberShield learning activities are designed so students do not
              need to provide sensitive account information in order to learn.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {privacySnapshot.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5"
                >
                  <p className="text-sm font-semibold text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-emerald-100">
                    {item.status}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Safe Cyber Learning Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These rules apply across CyberShield lessons, tracks, scenarios,
              quizzes, labs, and other activities.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {safeLearningRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              Information to Keep Private
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield practice does not need this information. Keep it out of
              activities, examples, and practice responses.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {informationToProtect.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-red-500/20 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Using CyberShield Safely
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The safest way to use CyberShield is to keep learning separate from
              real accounts, real incidents, and real systems.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {safeUseExamples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-8">
            <h2 className="text-3xl font-bold text-purple-100">
              If Something Online Feels Suspicious
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield can teach safer habits, but real online problems should
              be handled through trusted and official help.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {helpSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-purple-500/20 bg-slate-950/70 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {item.step}
                  </div>

                  <h3 className="mt-4 font-bold text-purple-100">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Site Limitations
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield Academy is a learning platform. It can teach concepts
              and safer habits, but it is not a professional response service for
              real incidents.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {siteLimitations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-200">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              What This Site Does Not Do
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              These boundaries keep the platform focused on safe cybersecurity
              education rather than real-world security operations.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {whatThisSiteDoesNotDo.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-yellow-500/20 bg-slate-950/60 p-5 text-sm leading-6 text-yellow-50/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Safely
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Continue with the Cyber Safety Starter, student resources, practice
              activities, or information about CyberShield Academy.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedLinks.map((link) => (
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