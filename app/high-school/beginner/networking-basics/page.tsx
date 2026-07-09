import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B4.1",
    title: "What a Network Is",
    route: "what-a-network-is",
    focus: "Understand networks as groups of devices that share information using agreed rules and safe connection paths.",
    lab: "Build a fake classroom network map and label which devices communicate with each other.",
  },
  {
    number: "B4.2",
    title: "IP Addresses and Network Identity",
    route: "ip-addresses-and-network-identity",
    focus: "Learn how IP addresses help devices identify where information should go on a network.",
    lab: "Review fake device address cards and match them to a safe network diagram.",
  },
  {
    number: "B4.3",
    title: "Routers, Switches, and Wi-Fi",
    route: "routers-switches-and-wi-fi",
    focus: "Explain how common network devices help traffic move inside homes, schools, and organizations.",
    lab: "Analyze a fake school network cabinet and decide which device role matches each connection.",
  },
  {
    number: "B4.4",
    title: "DNS and Website Names",
    route: "dns-and-website-names",
    focus: "Understand DNS as the system that helps turn readable website names into network destinations.",
    lab: "Trace a safe fake website-name lookup from browser request to destination answer.",
  },
  {
    number: "B4.5",
    title: "Packets and Network Traffic Concepts",
    route: "packets-and-network-traffic-concepts",
    focus: "Learn how information is broken into smaller pieces and why defenders care about traffic patterns.",
    lab: "Review a fake packet-flow timeline and identify what looks normal, delayed, or blocked.",
  },
  {
    number: "B4.6",
    title: "Home, School, and Public Network Safety",
    route: "home-school-and-public-network-safety",
    focus: "Compare network environments and choose safer behavior for home, school, guest, and public Wi-Fi.",
    lab: "Choose safe actions for fake network scenarios involving cafés, school Wi-Fi, and home routers.",
  },
  {
    number: "B4.7",
    title: "Network Diagram Review Lab",
    route: "network-diagram-review-lab",
    focus: "Apply beginner networking concepts by reading and improving a safe fake network diagram.",
    lab: "Complete a fake network review and write a short defender recommendation.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B4 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain what a network is and why devices need rules to communicate safely.",
  "Describe beginner IP address, DNS, router, switch, and Wi-Fi concepts without unsafe testing.",
  "Read simple network diagrams and identify how information moves between devices.",
  "Compare home, school, and public networks using safer decision-making.",
  "Use fake evidence to reason about traffic flow, connection problems, and defensive next steps.",
];

const networkFlow = [
  { label: "Device", text: "A laptop, tablet, printer, or server starts the request." },
  { label: "Local Network", text: "The request moves across home Wi-Fi, school Wi-Fi, or a computer lab network." },
  { label: "Router", text: "The router helps send traffic toward the correct outside destination." },
  { label: "DNS", text: "DNS helps translate a website name into a network destination." },
  { label: "Destination", text: "The request reaches the website, service, printer, or classroom platform." },
];

const fakeNetworkEvents = [
  ["08:10", "Student laptop joined classroom Wi-Fi", "Expected"],
  ["08:12", "Browser requested learning.example", "Normal"],
  ["08:12", "DNS lookup completed for learning.example", "Normal"],
  ["08:13", "Public guest network blocked internal printer access", "Safe block"],
];

export default function NetworkingBasicsModulePage() {
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
              href="/high-school/beginner/computers-devices-and-operating-systems"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/networking-basics/what-a-network-is"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B4
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Networking Basics
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how devices connect, how information moves, and how defenders think about networks using safe
                diagrams, fake traffic examples, and beginner-friendly defensive decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/networking-basics/what-a-network-is"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/networking-basics/module-test"
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
            <h2 className="mt-3 text-3xl font-black text-white">See the path information takes.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Beginner networking is about understanding connection paths, not attacking or testing systems. Students
              learn how devices communicate, why names and addresses matter, and how safer network choices protect
              people, schoolwork, accounts, and devices.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Reminder</p>
            <p className="mt-3 leading-7 text-yellow-50">
              Students should never scan, probe, monitor, or test real networks. These lessons use fake diagrams,
              fictional addresses, and safe explanations only.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">Simple network communication path</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              A network request usually passes through multiple layers. Defenders use diagrams to understand the path
              before they make decisions.
            </p>
            <div className="mt-6 space-y-3">
              {networkFlow.map((step, index) => (
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
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fake Log Panel</p>
                <h2 className="mt-2 text-2xl font-black text-white">Classroom Network Events</h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeNetworkEvents.map(([time, event, status]) => (
                <div key={`${time}-${event}`} className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3">
                  <span className="font-mono font-bold text-cyan-200">{time}</span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. It helps students practice reading events without touching a real network.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B4 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses safe network diagrams, fake device examples, fictional logs, and defensive decision checks
            to build beginner networking confidence.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/networking-basics/${lesson.route}`}
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
            <h2 className="mt-2 text-3xl font-black text-white">B4 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering network vocabulary, IP and DNS basics, routers,
              switches, Wi-Fi, packet flow, diagrams, and safe network decisions. Answers and explanations stay hidden
              until submission.
            </p>
            <Link
              href="/high-school/beginner/networking-basics/module-test"
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
            href="/high-school/beginner/computers-devices-and-operating-systems"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/networking-basics/what-a-network-is"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B4.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}