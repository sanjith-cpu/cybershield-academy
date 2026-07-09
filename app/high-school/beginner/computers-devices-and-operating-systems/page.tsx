import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B3.1",
    title: "Device Components and What They Do",
    route: "device-components-and-what-they-do",
    focus: "Understand the main parts of a device and how each part supports performance, storage, access, and security.",
    lab: "Label a fake student laptop diagram and connect each component to one defensive safety habit.",
  },
  {
    number: "B3.2",
    title: "Operating Systems and User Accounts",
    route: "operating-systems-and-user-accounts",
    focus: "Learn what operating systems manage and why separate user accounts help protect devices and data.",
    lab: "Review a fake shared-computer account setup and decide which settings are safer.",
  },
  {
    number: "B3.3",
    title: "Files, Folders, and Extensions",
    route: "files-folders-and-extensions",
    focus: "Explain file organization, extensions, and why confusing file names can create safety risks.",
    lab: "Sort fake files by type, risk level, and the safest next step before opening or sharing.",
  },
  {
    number: "B3.4",
    title: "Apps, Processes, and Permissions",
    route: "apps-processes-and-permissions",
    focus: "Understand how apps run, what processes are, and why permissions should match real need.",
    lab: "Analyze a fake app permission panel and decide which requests are reasonable or risky.",
  },
  {
    number: "B3.5",
    title: "Updates and System Health",
    route: "updates-and-system-health",
    focus: "Learn why updates, restarts, storage space, and device health checks support security.",
    lab: "Use a fake system health dashboard to prioritize safe maintenance actions.",
  },
  {
    number: "B3.6",
    title: "Shared Devices and Safe Use",
    route: "shared-devices-and-safe-use",
    focus: "Build safe habits for school laptops, family computers, libraries, labs, and other shared devices.",
    lab: "Choose the safest actions for fake shared-device scenarios involving accounts, downloads, and privacy.",
  },
  {
    number: "B3.7",
    title: "Device Basics Review Lab",
    route: "device-basics-review-lab",
    focus: "Apply the full module to a safe defensive review of a fake student device setup.",
    lab: "Complete a fake device review checklist and write a short beginner-friendly safety recommendation.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B3 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain what major device components do from a beginner defensive point of view.",
  "Describe how operating systems manage users, files, apps, updates, and settings.",
  "Recognize safer file, folder, extension, and download habits.",
  "Evaluate app permissions and running processes without making risky assumptions.",
  "Apply safe shared-device habits for school, home, library, and lab environments.",
];

const deviceLayers = [
  { label: "Hardware", text: "Physical parts like storage, memory, camera, microphone, ports, and network adapters." },
  { label: "Operating System", text: "The main software layer that manages accounts, files, apps, updates, and device settings." },
  { label: "User Accounts", text: "Profiles that separate people, permissions, files, and personalization on the same device." },
  { label: "Apps & Processes", text: "Programs and background activity that should only have the permissions they actually need." },
  { label: "Data", text: "Files, photos, schoolwork, browser data, saved logins, and other information that needs protection." },
];

const fakeDeviceHealth = [
  ["Update status", "Restart required", "Medium"],
  ["Storage", "18% free", "Review soon"],
  ["Account type", "Student standard user", "Good"],
  ["App permissions", "Camera access allowed for 2 apps", "Check need"],
];

export default function ComputersDevicesOperatingSystemsModulePage() {
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
              href="/high-school/beginner/ethics-and-responsible-learning"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/computers-devices-and-operating-systems/device-components-and-what-they-do"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B3
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Computers, Devices, and Operating Systems
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how devices work from a defensive point of view: hardware, operating systems, accounts,
                files, apps, permissions, updates, and shared-device safety.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/computers-devices-and-operating-systems/device-components-and-what-they-do"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/computers-devices-and-operating-systems/module-test"
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
            <h2 className="mt-3 text-3xl font-black text-white">Understand the device before defending it.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Students use devices every day, but cybersecurity becomes clearer when they understand what the device is
              actually managing. This module connects beginner technical concepts to safe habits: user separation,
              careful file handling, permission review, updates, and responsible use of shared computers.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Reminder</p>
            <p className="mt-3 leading-7 text-yellow-50">
              Students should not change school device settings, install apps, inspect someone else&apos;s files, or test
              real systems without clear permission from a trusted adult or school technology staff.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">Device security layers</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              A device is not just one thing. Defenders think in layers so they can protect accounts, apps, settings,
              and data without guessing.
            </p>
            <div className="mt-6 space-y-3">
              {deviceLayers.map((layer, index) => (
                <div key={layer.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{layer.label}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{layer.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fake Dashboard</p>
                <h2 className="mt-2 text-2xl font-black text-white">Student Device Health</h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeDeviceHealth.map(([item, status, priority]) => (
                <div key={item} className="grid grid-cols-3 gap-3 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0">
                  <span className="font-bold text-slate-200">{item}</span>
                  <span className="text-slate-300">{status}</span>
                  <span className="text-right font-bold text-cyan-200">{priority}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This dashboard is a safe visual example. Students analyze priorities without touching real device settings.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B3 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fake device examples, fake dashboards, safe analysis, decision checks, and scored review to
            connect technical device concepts to responsible defensive habits.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/computers-devices-and-operating-systems/${lesson.route}`}
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
            <h2 className="mt-2 text-3xl font-black text-white">B3 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering device parts, operating system roles, account
              types, file safety, permissions, updates, and safe shared-device choices. Answers and explanations stay
              hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/computers-devices-and-operating-systems/module-test"
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
            href="/high-school/beginner/ethics-and-responsible-learning"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/computers-devices-and-operating-systems/device-components-and-what-they-do"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B3.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}