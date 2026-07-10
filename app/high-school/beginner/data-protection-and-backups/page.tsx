import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B11.1",
    title: "Why Data Needs Protection",
    route: "why-data-needs-protection",
    focus:
      "Understand why personal, school, family, and organizational data has value and how exposure, loss, or misuse can create harm.",
    lab:
      "Review fictional data examples and identify the owner, value, possible impact, and safest protection decision.",
  },
  {
    number: "B11.2",
    title: "Confidentiality, Integrity, and Availability in Data",
    route: "confidentiality-integrity-and-availability-in-data",
    focus:
      "Apply confidentiality, integrity, and availability to files, records, accounts, cloud storage, and recovery decisions.",
    lab:
      "Classify fictional data incidents by which CIA goal was affected and choose a defensive response.",
  },
  {
    number: "B11.3",
    title: "File Organization and Data Classification Basics",
    route: "file-organization-and-data-classification-basics",
    focus:
      "Use clear file organization, naming, ownership, retention, and classification labels to reduce mistakes and protect important information.",
    lab:
      "Organize fictional files into public, internal, private, and highly sensitive categories with matching handling rules.",
  },
  {
    number: "B11.4",
    title: "Cloud Storage Safety",
    route: "cloud-storage-safety",
    focus:
      "Review cloud accounts, sharing settings, synchronization, permissions, links, version history, and trusted recovery options.",
    lab:
      "Inspect fictional cloud folders and correct unsafe access, public links, oversharing, and account-recovery weaknesses.",
  },
  {
    number: "B11.5",
    title: "Backup Types and Recovery Goals",
    route: "backup-types-and-recovery-goals",
    focus:
      "Compare full, incremental, differential, local, cloud, offline, and managed backups while learning recovery-point and recovery-time goals.",
    lab:
      "Match fictional data needs with practical backup types, schedules, locations, and recovery goals.",
  },
  {
    number: "B11.6",
    title: "Human Error and Data Loss Scenarios",
    route: "human-error-and-data-loss-scenarios",
    focus:
      "Recognize accidental deletion, overwriting, wrong-recipient sharing, sync mistakes, lost devices, and weak backup habits.",
    lab:
      "Prioritize containment, reporting, version recovery, access review, and restoration in fictional data-loss scenarios.",
  },
  {
    number: "B11.7",
    title: "Backup Planning Lab",
    route: "backup-planning-lab",
    focus:
      "Apply data value, CIA goals, classification, cloud safety, backup types, recovery goals, and human-error response.",
    lab:
      "Create a complete fictional backup and recovery plan for personal, school, and small-organization data.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B11 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain why different kinds of data need different levels of protection.",
  "Apply confidentiality, integrity, and availability to data-handling decisions.",
  "Organize and classify files using clear ownership, sensitivity, retention, and access rules.",
  "Review cloud storage, sharing links, synchronization, permissions, and account recovery safely.",
  "Choose backup types, schedules, storage locations, and recovery goals for fictional data needs.",
];

const protectionFlow = [
  {
    label: "Identify",
    text:
      "Determine what the data is, who owns it, where it is stored, who needs it, and why it matters.",
  },
  {
    label: "Classify",
    text:
      "Label data according to sensitivity, impact, access needs, retention, and approved handling rules.",
  },
  {
    label: "Protect",
    text:
      "Use trusted accounts, limited permissions, secure storage, careful sharing, and clear organization.",
  },
  {
    label: "Back Up",
    text:
      "Create protected copies using appropriate types, locations, schedules, and recovery goals.",
  },
  {
    label: "Recover",
    text:
      "Contain the problem, verify the trusted recovery point, restore carefully, and document lessons learned.",
  },
];

const fakeDataEvents = [
  [
    "Classification",
    "Student contact list is stored in a public class folder",
    "Restrict access",
  ],
  [
    "Integrity",
    "Final project file is overwritten by an older version",
    "Use version history",
  ],
  [
    "Availability",
    "Only copy of a report is on a lost laptop",
    "Restore from backup",
  ],
  [
    "Cloud sharing",
    "Folder link allows anyone with the link to edit",
    "Limit permissions",
  ],
];

export default function DataProtectionBackupsModulePage() {
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
              href="/high-school/beginner/device-and-operating-system-safety"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/intro-to-cryptography-concepts"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Next Module →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B11
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Data Protection and Backups
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn why data matters and how classification, organization,
                cloud safety, backup types, recovery goals, and careful response
                protect people, schools, families, and organizations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/data-protection-and-backups/why-data-needs-protection"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/data-protection-and-backups/module-test"
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
              Keep important data trustworthy, available, and appropriately private.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Data protection is not only about secrecy. Information must also
              remain accurate, organized, available when needed, limited to the
              correct people, and recoverable after mistakes, loss, damage, or
              service problems.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Safety Reminder
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Every file, account, cloud folder, sharing link, classification,
              backup, recovery point, incident, and organization in this module
              is fictional. Students should never expose real private data,
              change real sharing settings without permission, or test recovery
              using important live files.
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
              The data-protection workflow
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Strong data protection begins by understanding the information
              and continues through classification, controlled access, backups,
              and verified recovery.
            </p>

            <div className="mt-6 space-y-3">
              {protectionFlow.map((step, index) => (
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
                  Fake Data Panel
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Defensive Review Events
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeDataEvents.map(([area, event, response]) => (
                <div
                  key={`${area}-${event}`}
                  className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3"
                >
                  <span className="font-mono font-bold text-cyan-200">
                    {area}
                  </span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">
                    {response}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. Students review displayed information
              only and never expose real files, accounts, cloud links, or private
              records.
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
            <h2 className="mt-2 text-4xl font-black text-white">B11 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional files, records, cloud folders, backup
            systems, sharing settings, incidents, and recovery plans to build
            practical defensive judgment.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/data-protection-and-backups/${lesson.route}`}
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
              B11 Module Test
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering why data
              needs protection, confidentiality, integrity, availability, file
              organization, classification, cloud storage safety, backup types,
              recovery goals, human error, data loss, and backup planning.
              Answers and explanations remain hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/data-protection-and-backups/module-test"
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
            href="/high-school/beginner/device-and-operating-system-safety"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/data-protection-and-backups/why-data-needs-protection"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B11.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}