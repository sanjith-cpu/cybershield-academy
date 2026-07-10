import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B9.1",
    title: "How Social Engineering Manipulates People",
    route: "how-social-engineering-manipulates-people",
    focus:
      "Study how urgency, fear, trust, curiosity, authority, scarcity, and rewards can influence decisions.",
    lab:
      "Analyze fictional persuasion attempts and identify the emotion, pressure tactic, target action, and safest pause point.",
  },
  {
    number: "B9.2",
    title: "Phishing Email Warning Signs",
    route: "phishing-email-warning-signs",
    focus:
      "Inspect sender details, subject lines, wording, requests, links, attachments, and context without engaging with suspicious content.",
    lab:
      "Review fake email panels and classify evidence as normal, suspicious, or report-first.",
  },
  {
    number: "B9.3",
    title: "Smishing, Vishing, and Social Media Scams",
    route: "smishing-vishing-and-social-media-scams",
    focus:
      "Compare deceptive text messages, phone calls, direct messages, posts, and account-recovery scams.",
    lab:
      "Evaluate fictional mobile, phone, and social-platform scenarios using safe verification choices.",
  },
  {
    number: "B9.4",
    title: "Impersonation and Fake Support Messages",
    route: "impersonation-and-fake-support-messages",
    focus:
      "Recognize copied identities, fake authority, support impersonation, account warnings, and requests for credentials or codes.",
    lab:
      "Compare fake support conversations and choose a separate official verification channel.",
  },
  {
    number: "B9.5",
    title: "Safe Link and Attachment Judgment",
    route: "safe-link-and-attachment-judgment",
    focus:
      "Judge links and attachments by source, context, destination clues, file identity, security warnings, and expected purpose.",
    lab:
      "Sort fictional links and files without opening, scanning, forwarding, uploading, or testing them.",
  },
  {
    number: "B9.6",
    title: "Reporting Workflows and Trusted Help",
    route: "reporting-workflows-and-trusted-help",
    focus:
      "Learn how to preserve safe evidence, write a useful report, choose the correct trusted contact, and secure an account after interaction.",
    lab:
      "Build a fictional phishing report with timeline, evidence, immediate actions, escalation, and follow-up.",
  },
  {
    number: "B9.7",
    title: "Phishing Defense Lab",
    route: "phishing-defense-lab",
    focus:
      "Apply manipulation, email, text, call, social media, impersonation, link, attachment, and reporting skills.",
    lab:
      "Complete a multi-stage fictional phishing incident and produce a defender recommendation.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B9 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain how social engineering uses emotion, trust, authority, urgency, scarcity, and rewards.",
  "Inspect fictional email, text, phone, social media, link, and attachment evidence safely.",
  "Recognize impersonation, fake support, credential requests, and verification-code requests.",
  "Verify suspicious requests through separate official channels without engaging with the suspicious source.",
  "Create clear reports and choose trusted help after suspicious interaction or possible credential exposure.",
];

const defenseFlow = [
  {
    label: "Pause",
    text:
      "Stop before clicking, replying, calling, downloading, approving, paying, or sharing information.",
  },
  {
    label: "Inspect",
    text:
      "Review sender identity, wording, pressure, request, destination, attachment, context, and whether the message was expected.",
  },
  {
    label: "Verify",
    text:
      "Use a separate official website, known number, school portal, directory, teacher, guardian, or technology team.",
  },
  {
    label: "Report",
    text:
      "Preserve safe details and use the approved reporting process without forwarding dangerous content.",
  },
  {
    label: "Recover",
    text:
      "Secure credentials, MFA, recovery settings, sessions, devices, and connected accounts when interaction may have occurred.",
  },
];

const fakeMessageEvents = [
  [
    "Email",
    "Unknown sender claims the school account expires today",
    "Pause and verify",
  ],
  [
    "Text",
    "Delivery message requests payment through a shortened link",
    "Do not engage",
  ],
  [
    "Call",
    "Fake support agent requests an MFA code",
    "End and report",
  ],
  [
    "Social",
    "Impersonated friend requests emergency money",
    "Verify separately",
  ],
];

export default function PhishingSocialEngineeringDefenseModulePage() {
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
              href="/high-school/beginner/common-cyber-threats"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/phishing-and-social-engineering-defense/how-social-engineering-manipulates-people"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B9
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Phishing and Social Engineering Defense
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how manipulation works, inspect suspicious communication
                safely, verify through trusted channels, report useful evidence,
                and recover after possible interaction.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/phishing-and-social-engineering-defense/how-social-engineering-manipulates-people"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/phishing-and-social-engineering-defense/module-test"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-xl font-black text-cyan-200">
                Module Snapshot
              </h2>
              <div className="mt-5 space-y-4">
                {moduleStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-bold text-white">
                      {value}
                    </span>
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Module Mission
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Recognize manipulation, verify safely, and report clearly.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Phishing is not limited to email. Deceptive requests can appear
              through texts, calls, direct messages, social posts, fake support
              chats, QR codes, links, attachments, and account alerts. Students
              will learn a consistent defensive process without engaging with
              suspicious content.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Safety Reminder
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Every sender, message, account, call, link, attachment, QR code,
              website, and support request in this module is fictional. Students
              should not open suspicious content, contact suspicious senders, or
              submit real passwords, codes, payment details, or private
              information.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Visual Framework
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              The phishing-defense workflow
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Strong defenders pause, inspect the evidence, verify through a
              separate official channel, report correctly, and recover any
              affected accounts or devices.
            </p>

            <div className="mt-6 space-y-3">
              {defenseFlow.map((step, index) => (
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
                    <h3 className="text-xl font-black text-white">
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                  Fake Message Panel
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Communication Review Events
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeMessageEvents.map(([channel, event, response]) => (
                <div
                  key={`${channel}-${event}`}
                  className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3"
                >
                  <span className="font-mono font-bold text-cyan-200">
                    {channel}
                  </span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">
                    {response}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. Students inspect displayed evidence only
              and never open links, answer calls, download files, scan codes, or
              contact suspicious accounts.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Learning Path
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">B9 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional messages, calls, support requests, links,
            files, evidence panels, and reporting scenarios to build safe
            phishing-defense judgment.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/phishing-and-social-engineering-defense/${lesson.route}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
            >
              <div className="grid gap-5 lg:grid-cols-[0.25fr_1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-cyan-300">
                    {lesson.number}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Lesson {index + 1}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.focus}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    Safe Lab
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.lab}
                  </p>
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Objectives
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              By the end, students can:
            </h2>

            <div className="mt-5 space-y-3">
              {objectives.map((objective) => (
                <div
                  key={objective}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Module Assessment
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              B9 Module Test
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering phishing
              indicators, manipulation tactics, email clues, smishing, vishing,
              social media scams, impersonation, fake support, safe link and
              attachment judgment, reporting workflows, trusted help, and
              fictional message analysis. Answers and explanations remain hidden
              until submission.
            </p>
            <Link
              href="/high-school/beginner/phishing-and-social-engineering-defense/module-test"
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
            href="/high-school/beginner/common-cyber-threats"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/phishing-and-social-engineering-defense/how-social-engineering-manipulates-people"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B9.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}