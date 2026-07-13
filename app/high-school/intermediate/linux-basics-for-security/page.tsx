import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/linux-basics-for-security`;

const lessons = [
  {
    number: "I2.1",
    title: "Linux Systems and Security Roles",
    route: "linux-systems-and-security-roles",
    focus:
      "Understand where Linux is used, how distributions differ, and why defenders review system roles, ownership, and approved purpose.",
    lab:
      "Classify fictional Linux systems by role, sensitivity, owner, exposure, and defensive responsibility.",
  },
  {
    number: "I2.2",
    title: "Files, Directories, and Paths",
    route: "files-directories-and-paths",
    focus:
      "Read Linux paths, distinguish common system directories, and connect file location with purpose, ownership, and evidence.",
    lab:
      "Organize a fictional directory map and identify expected, sensitive, temporary, and review-required locations.",
  },
  {
    number: "I2.3",
    title: "Users, Groups, and Permissions",
    route: "users-groups-and-permissions",
    focus:
      "Interpret user, group, ownership, and read-write-execute permission concepts using least privilege and approved access.",
    lab:
      "Review fictional account and permission records and recommend safer, narrower access.",
  },
  {
    number: "I2.4",
    title: "Processes and Services",
    route: "processes-and-services",
    focus:
      "Connect running processes and background services with system roles, owners, dependencies, startup behavior, and logs.",
    lab:
      "Analyze a fictional process and service inventory for expected, stopped, duplicate, stale, and review-required entries.",
  },
  {
    number: "I2.5",
    title: "Safe Command-Line Navigation",
    route: "safe-command-line-navigation",
    focus:
      "Use safe, read-only command-line concepts to understand the current location, list files, inspect context, and avoid risky assumptions.",
    lab:
      "Complete a fictional read-only terminal navigation challenge without changing system state.",
  },
  {
    number: "I2.6",
    title: "Linux Logs and System Clues",
    route: "linux-logs-and-system-clues",
    focus:
      "Read fictional authentication, service, system, and application log clues while respecting timestamps and evidence limits.",
    lab:
      "Correlate fake Linux log entries into a defensive timeline and separate facts from likely explanations.",
  },
  {
    number: "I2.7",
    title: "Package Updates and System Care",
    route: "package-updates-and-system-care",
    focus:
      "Understand trusted repositories, package versions, update planning, restart needs, validation, rollback, and system maintenance.",
    lab:
      "Prioritize fictional Linux updates using asset role, exposure, severity, compatibility, owner, and change windows.",
  },
  {
    number: "I2.8",
    title: "Linux Security Basics Lab",
    route: "linux-security-basics-lab",
    focus:
      "Combine roles, paths, users, groups, permissions, processes, services, logs, and updates into one defensive review.",
    lab:
      "Complete a multi-source fictional Linux security assessment and write an evidence-based improvement plan.",
  },
];

const objectives = [
  "Explain how Linux distributions, kernels, shells, services, and system roles connect in a defensive environment.",
  "Navigate fictional Linux file systems and interpret important paths without changing real systems.",
  "Review users, groups, ownership, and permissions using least privilege and approved purpose.",
  "Connect processes and services with owners, dependencies, startup behavior, ports, and logs.",
  "Interpret safe command-line output and distinguish observation from system modification.",
  "Correlate Linux logs, package records, inventories, and changes into evidence-based defensive conclusions.",
];

const workflow = [
  {
    step: "Identify",
    detail:
      "Confirm the fictional system role, owner, environment, sensitivity, exposure, and approved purpose.",
  },
  {
    step: "Observe",
    detail:
      "Review files, directories, accounts, groups, permissions, processes, services, packages, and logs.",
  },
  {
    step: "Correlate",
    detail:
      "Connect users, owners, paths, timestamps, service activity, updates, and change records.",
  },
  {
    step: "Compare",
    detail:
      "Check observed state against the approved baseline, least privilege, system role, and maintenance plan.",
  },
  {
    step: "Document",
    detail:
      "Record confirmed facts, uncertainty, risk, owner, recommendation, validation, and rollback.",
  },
];

const fakeEvents = [
  {
    time: "08:41:12",
    source: "Inventory",
    event: "training-web-02 role confirmed as internal learning portal",
    meaning:
      "Provides approved system purpose, owner, environment, and expected services.",
  },
  {
    time: "08:43:27",
    source: "Account",
    event: "Temporary support account remains enabled after project end",
    meaning:
      "Shows current account state but still requires ownership and dependency review.",
  },
  {
    time: "08:45:06",
    source: "Permission",
    event: "/srv/training-content group write granted to all staff",
    meaning:
      "Indicates broader access than the current content-owner group appears to require.",
  },
  {
    time: "08:47:33",
    source: "Service Log",
    event: "Approved web service healthy; legacy sync service still starts",
    meaning:
      "Connects service state with a possible stale dependency that needs validation.",
  },
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

export default function LinuxBasicsForSecurityModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href={trackPath}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Beginner Review
            </Link>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  High School Intermediate
                </span>
                <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-200">
                  Module I2 of 17
                </span>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
                  Defensive Only
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                I2: Linux Basics for Security
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Build safe Linux foundations for understanding system roles,
                paths, accounts, permissions, processes, services, logs,
                updates, and defensive administration.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${modulePath}/linux-systems-and-security-roles`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Start I2.1
                </Link>
                <Link
                  href={`${modulePath}/module-test`}
                  className="rounded-xl border border-yellow-300/50 bg-yellow-300/10 px-6 py-3 font-black text-yellow-100 transition hover:border-yellow-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                Module Snapshot
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Stat label="Track" value="Intermediate" />
                <Stat label="Module" value="I2 of 17" />
                <Stat label="Lessons" value="8" />
                <Stat label="Module test" value="25 questions" />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5">
                <p className="font-black text-blue-200">
                  Systems defense begins here
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  This module adds Linux structure, account and permission
                  review, process and service context, safe terminal reading,
                  log correlation, and controlled update reasoning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:px-8">
        <section className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Main Question
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              How do defenders understand a Linux system well enough to protect
              it without making unsafe or unsupported changes?
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
              Students will connect system role, paths, users, groups,
              permissions, processes, services, logs, packages, ownership, and
              approved change records before recommending defensive actions.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety Boundary
            </p>
            <p className="mt-4 leading-7 text-yellow-50">
              Every Linux host, account, directory, permission, process,
              service, package, command output, log, and organization in this
              module is fictional. Practice stays read-only, authorized, and
              limited to supplied training evidence.
            </p>
          </div>
        </section>

        <SectionCard
          eyebrow="Professional Workflow"
          title="Identify, Observe, Correlate, Compare, and Document"
        >
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-black text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="What Students Will Be Able to Do"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {objectives.map((objective) => (
              <div
                key={objective}
                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-slate-950">
                  ✓
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section>
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Module Path
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              Eight Intermediate Lessons
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Each lesson includes professional hooks, fictional system
              evidence, safe defensive labs, scenario decisions, a scored quiz,
              a checklist, and a portfolio prompt.
            </p>
          </div>

          <div className="grid gap-5">
            {lessons.map((lesson, index) => (
              <Link
                key={lesson.number}
                href={`${modulePath}/${lesson.route}`}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <div className="grid gap-5 lg:grid-cols-[0.22fr_1fr_1fr_auto] lg:items-center">
                  <div>
                    <p className="text-lg font-black text-cyan-300">
                      {lesson.number}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
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

                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {lesson.lab}
                    </p>
                  </div>

                  <span className="font-black text-cyan-300">Open →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Fake Evidence Preview"
          title="How Intermediate Linux Evidence Connects"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            {fakeEvents.map((event) => (
              <div
                key={`${event.time}-${event.source}`}
                className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.45fr_0.5fr_1.1fr_1.4fr]"
              >
                <p className="font-mono text-sm text-slate-400">{event.time}</p>
                <p className="font-black text-cyan-200">{event.source}</p>
                <p className="text-sm text-slate-200">{event.event}</p>
                <p className="text-sm leading-6 text-yellow-100">
                  {event.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
            A strong conclusion uses the records together: system purpose,
            account state, permission scope, service activity, ownership,
            change history, timestamps, and current defensive need.
          </div>
        </SectionCard>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Portfolio Outcome
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Linux Security Review Report
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Students will build a fictional report containing a system-role
              summary, directory map, account and permission review, process and
              service inventory, log timeline, update plan, evidence limits,
              risk priorities, and authorized next actions.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-300/30 bg-yellow-300/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Module Assessment
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              25-Question I2 Module Test
            </h2>
            <p className="mt-4 leading-7 text-yellow-50">
              The test will cover Linux structure, files and paths, users,
              groups, permissions, processes, services, safe navigation, logs,
              package updates, system care, and defensive system reasoning.
              Answers stay hidden until submission.
            </p>

            <Link
              href={`${modulePath}/module-test`}
              className="mt-6 inline-flex rounded-xl bg-yellow-300 px-5 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="flex flex-wrap justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href={trackPath}
            className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Intermediate Track
          </Link>
          <Link
            href={`${modulePath}/linux-systems-and-security-roles`}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Start I2.1 →
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}