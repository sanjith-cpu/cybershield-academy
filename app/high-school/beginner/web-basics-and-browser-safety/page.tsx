import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B5.1",
    title: "How Websites and Browsers Work",
    route: "how-websites-and-browsers-work",
    focus: "Understand the basic relationship between browsers, websites, requests, responses, and page content.",
    lab: "Trace a safe fake browser request from address bar to website response using a simple flow card.",
  },
  {
    number: "B5.2",
    title: "URLs, Domains, and Web Address Clues",
    route: "urls-domains-and-web-address-clues",
    focus: "Learn how to read web addresses carefully and spot clues that help users make safer decisions.",
    lab: "Review fake URLs and label the scheme, domain, path, and warning clues without visiting any site.",
  },
  {
    number: "B5.3",
    title: "HTTPS, Certificates, and Trust Signals",
    route: "https-certificates-and-trust-signals",
    focus: "Explain what HTTPS and certificates help prove, and what they do not automatically guarantee.",
    lab: "Compare fake browser trust signals and decide which evidence is useful but incomplete.",
  },
  {
    number: "B5.4",
    title: "Forms, Cookies, and Sessions",
    route: "forms-cookies-and-sessions",
    focus: "Understand how forms, cookies, and sessions support web experiences while creating privacy and account risks.",
    lab: "Analyze a fake login session diagram and identify safer choices for forms and saved sessions.",
  },
  {
    number: "B5.5",
    title: "Downloads, Redirects, and Browser Warnings",
    route: "downloads-redirects-and-browser-warnings",
    focus: "Learn how downloads, redirects, pop-ups, and warning screens can affect browser safety decisions.",
    lab: "Review fake browser warning cards and choose the safest response without clicking through danger.",
  },
  {
    number: "B5.6",
    title: "Safe Web Research Habits",
    route: "safe-web-research-habits",
    focus: "Practice safe research habits for schoolwork, projects, sources, citations, downloads, and unknown websites.",
    lab: "Build a web research checklist using fake search results and safe source evaluation clues.",
  },
  {
    number: "B5.7",
    title: "Web Safety Analysis Lab",
    route: "web-safety-analysis-lab",
    focus: "Apply browser safety concepts by reviewing fake pages, fake URLs, warnings, forms, and evidence.",
    lab: "Complete a fake website safety review and write a short defender recommendation.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B5 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain how browsers request and display web content at a beginner level.",
  "Read URLs, domains, paths, HTTPS indicators, and browser warnings more carefully.",
  "Describe the difference between useful trust signals and complete proof of safety.",
  "Recognize how forms, cookies, sessions, downloads, and redirects can affect user safety.",
  "Use fake website evidence to make safer decisions without testing suspicious real links.",
];

const browserFlow = [
  { label: "Address Bar", text: "A user types or selects a website address in the browser." },
  { label: "Browser Request", text: "The browser asks for the page using web rules and connection details." },
  { label: "Website Server", text: "The website responds with page content, scripts, images, or an error message." },
  { label: "Browser Checks", text: "The browser shows clues like HTTPS, warnings, redirects, downloads, or permission prompts." },
  { label: "User Decision", text: "The user decides whether to continue, stop, report, or ask for trusted help." },
];

const fakeBrowserEvents = [
  ["09:02", "Browser opened learning.example/resources", "Expected"],
  ["09:03", "HTTPS certificate checked for learning.example", "Normal"],
  ["09:05", "Download warning shown for unknown-study-guide.zip", "Review needed"],
  ["09:07", "User closed page and reported suspicious download prompt", "Safe choice"],
];

export default function WebBasicsBrowserSafetyModulePage() {
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
              href="/high-school/beginner/networking-basics"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/web-basics-and-browser-safety/how-websites-and-browsers-work"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B5
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Web Basics and Browser Safety
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how browsers, websites, web addresses, forms, cookies, sessions, downloads, redirects, and browser
                warnings work from a safe defensive perspective.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/web-basics-and-browser-safety/how-websites-and-browsers-work"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/web-basics-and-browser-safety/module-test"
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
            <h2 className="mt-3 text-3xl font-black text-white">Treat the browser like a decision point.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Beginner web safety is about slowing down and reading evidence before trusting a page, form, download, or
              warning. Students learn how the web works at a foundation level while practicing safe, fake-data analysis
              instead of testing suspicious real websites.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Reminder</p>
            <p className="mt-3 leading-7 text-yellow-50">
              Students should never visit suspicious links to test them. These lessons use fake URLs, fake warnings,
              fake browser panels, and safe examples only.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">Simple browser safety flow</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              A browser interaction includes technical steps and human decisions. Defenders look for clues before
              trusting the result.
            </p>
            <div className="mt-6 space-y-3">
              {browserFlow.map((step, index) => (
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
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fake Browser Panel</p>
                <h2 className="mt-2 text-2xl font-black text-white">Web Safety Events</h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeBrowserEvents.map(([time, event, status]) => (
                <div key={`${time}-${event}`} className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3">
                  <span className="font-mono font-bold text-cyan-200">{time}</span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. It helps students practice interpreting browser events without opening real risky
              pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B5 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fake websites, fake browser warnings, safe URL analysis, fictional forms, and defensive
            decision checks to build web safety confidence.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/web-basics-and-browser-safety/${lesson.route}`}
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
            <h2 className="mt-2 text-3xl font-black text-white">B5 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering browser concepts, URL clues, HTTPS basics,
              cookies and sessions, downloads, redirects, browser warnings, safe research habits, and fake website
              analysis. Answers and explanations stay hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/web-basics-and-browser-safety/module-test"
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
            href="/high-school/beginner/networking-basics"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/web-basics-and-browser-safety/how-websites-and-browsers-work"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B5.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}