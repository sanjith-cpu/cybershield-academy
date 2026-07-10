import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B10.1",
    title: "Device Locks and Screen Privacy",
    route: "device-locks-and-screen-privacy",
    focus:
      "Learn how screen locks, automatic locking, privacy awareness, trusted access, and shared-device habits protect personal and school devices.",
    lab:
      "Review fictional device settings and choose safer lock, timeout, visibility, and shared-use decisions.",
  },
  {
    number: "B10.2",
    title: "Operating System Updates and Patch Basics",
    route: "operating-system-updates-and-patch-basics",
    focus:
      "Understand why operating systems receive patches, how update timing affects risk, and why official update channels matter.",
    lab:
      "Prioritize fictional update notices and distinguish official settings from fake update prompts.",
  },
  {
    number: "B10.3",
    title: "Antivirus and Built-In Protection Concepts",
    route: "antivirus-and-built-in-protection-concepts",
    focus:
      "Study built-in protection, scans, alerts, quarantine concepts, firewalls, and why protection tools are only one security layer.",
    lab:
      "Analyze fake protection alerts and choose safe review, update, scan, and escalation steps.",
  },
  {
    number: "B10.4",
    title: "App Permissions and Safe Installation",
    route: "app-permissions-and-safe-installation",
    focus:
      "Judge app sources, requested permissions, publisher trust, update methods, and whether access matches the app’s purpose.",
    lab:
      "Review fictional app-installation panels and classify permissions as expected, excessive, or report-first.",
  },
  {
    number: "B10.5",
    title: "Removable Media and Unknown Devices",
    route: "removable-media-and-unknown-devices",
    focus:
      "Recognize risks from unknown USB drives, external storage, borrowed accessories, charging devices, and untrusted hardware.",
    lab:
      "Choose safe responses to fictional removable-media and unknown-device scenarios without connecting or testing anything.",
  },
  {
    number: "B10.6",
    title: "Lost Device Response and Backups",
    route: "lost-device-response-and-backups",
    focus:
      "Learn how device locks, account protection, location tools, reporting, remote actions, and protected backups support lost-device response.",
    lab:
      "Build a fictional lost-device response plan using official account, school, family, and recovery channels.",
  },
  {
    number: "B10.7",
    title: "Device Hardening Checklist Lab",
    route: "device-hardening-checklist-lab",
    focus:
      "Apply locks, updates, built-in protection, permissions, removable-media safety, backups, and lost-device planning.",
    lab:
      "Complete a fictional device review and produce a prioritized defensive hardening checklist.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B10 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain how device locks, automatic locking, screen privacy, and trusted access protect personal and school devices.",
  "Recognize why operating-system updates and patches should come through official settings and approved channels.",
  "Describe antivirus, built-in protection, scans, alerts, quarantine, and firewall concepts defensively.",
  "Evaluate app sources and permissions before installation or approval.",
  "Respond safely to unknown removable media, lost devices, and backup or recovery needs.",
];

const defenseFlow = [
  {
    label: "Lock",
    text:
      "Use strong device access controls, automatic locking, screen privacy, and careful shared-device habits.",
  },
  {
    label: "Update",
    text:
      "Install operating-system and app updates through official settings, approved stores, and trusted management tools.",
  },
  {
    label: "Protect",
    text:
      "Keep built-in security tools active, review alerts carefully, and involve trusted support when warnings are serious or unclear.",
  },
  {
    label: "Limit",
    text:
      "Install only trusted apps, grant only necessary permissions, and avoid unknown removable media or devices.",
  },
  {
    label: "Prepare",
    text:
      "Maintain protected backups, know the lost-device reporting path, and review official account and recovery options.",
  },
];

const fakeDeviceEvents = [
  [
    "Lock",
    "School laptop remains unlocked after five minutes",
    "Shorten timeout",
  ],
  [
    "Update",
    "Official system settings show a pending security patch",
    "Schedule update",
  ],
  [
    "Permission",
    "Flashlight app requests contacts and microphone access",
    "Deny and review",
  ],
  [
    "USB",
    "Unknown drive is found near a classroom computer",
    "Do not connect",
  ],
];

export default function DeviceOperatingSystemSafetyModulePage() {
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
              href="/high-school/beginner/phishing-and-social-engineering-defense"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/data-protection-and-backups"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Next Module →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B10
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Device and Operating System Safety
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Build practical defensive habits for personal, school, and
                shared devices using locks, updates, built-in protection,
                careful permissions, safe removable-media decisions, protected
                backups, and lost-device planning.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/device-and-operating-system-safety/device-locks-and-screen-privacy"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/device-and-operating-system-safety/module-test"
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
              Reduce device risk through practical, repeatable safety habits.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Device safety is not one setting or one app. It combines access
              control, timely updates, built-in protection, limited permissions,
              trusted installation sources, safe hardware decisions, backups,
              reporting, and recovery planning.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Safety Reminder
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Every device, account, alert, app, file, permission, USB drive,
              backup, and lost-device scenario in this module is fictional.
              Students should not connect unknown hardware, disable real
              protection, install unverified software, or change managed school
              settings without permission.
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
              The device-safety workflow
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Safer devices use several defensive layers that support one
              another before, during, and after a security problem.
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
                  Fake Device Panel
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
              {fakeDeviceEvents.map(([area, event, response]) => (
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
              This panel is fictional. Students review displayed settings and
              evidence only and never connect unknown devices, disable
              protection, or install unverified software.
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
            <h2 className="mt-2 text-4xl font-black text-white">B10 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional settings, alerts, app requests, devices,
            media, backups, and lost-device scenarios to build practical
            defensive judgment.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/device-and-operating-system-safety/${lesson.route}`}
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
              B10 Module Test
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering device
              locks, screen privacy, operating-system updates, patches,
              antivirus and built-in protection, app permissions, safe
              installation, removable media, unknown devices, lost-device
              response, backups, and defensive hardening. Answers and
              explanations remain hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/device-and-operating-system-safety/module-test"
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
            href="/high-school/beginner/phishing-and-social-engineering-defense"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/device-and-operating-system-safety/device-locks-and-screen-privacy"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B10.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}