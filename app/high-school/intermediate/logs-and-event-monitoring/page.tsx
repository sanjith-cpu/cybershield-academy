import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/logs-and-event-monitoring`;

const lessons = [
  {
    number: "I4.1",
    title: "What Logs Are and Why They Matter",
    route: "what-logs-are-and-why-they-matter",
    focus:
      "Understand what logs record, why systems create them, and how defenders use logs for visibility, troubleshooting, monitoring, and response.",
    lab:
      "Classify fictional event records by source, purpose, useful fields, owner, and evidence limitation.",
  },
  {
    number: "I4.2",
    title: "Timestamps, Event IDs, and Context",
    route: "timestamps-event-ids-and-context",
    focus:
      "Read timestamps, event IDs, providers, severity labels, users, devices, actions, results, and correlation fields in context.",
    lab:
      "Normalize fictional records with different time zones, clock offsets, event formats, and collection delays.",
  },
  {
    number: "I4.3",
    title: "Authentication Logs",
    route: "authentication-logs",
    focus:
      "Interpret fictional successful and failed sign-ins, lockouts, MFA activity, password resets, account changes, and session evidence.",
    lab:
      "Review an authentication sequence and distinguish expected password-reset activity from a pattern that needs escalation.",
  },
  {
    number: "I4.4",
    title: "System and Application Logs",
    route: "system-and-application-logs",
    focus:
      "Connect operating-system, service, process, update, application, configuration, error, and recovery records.",
    lab:
      "Correlate a fictional application failure with service, permission, update, owner, and change evidence.",
  },
  {
    number: "I4.5",
    title: "Network and Web Logs",
    route: "network-and-web-logs",
    focus:
      "Interpret firewall, DNS, proxy, web server, and connection records using source, destination, port, protocol, request, response, and ownership context.",
    lab:
      "Trace a fictional web request across DNS, firewall, proxy, and server logs without inspecting real traffic.",
  },
  {
    number: "I4.6",
    title: "Normal vs Suspicious Patterns",
    route: "normal-vs-suspicious-patterns",
    focus:
      "Compare current activity with approved baselines and evaluate timing, frequency, source, destination, privilege, failure, and change context.",
    lab:
      "Classify fictional patterns as expected, unusual, suspicious, administrative, failed, or evidence-incomplete.",
  },
  {
    number: "I4.7",
    title: "Building a Simple Event Timeline",
    route: "building-a-simple-event-timeline",
    focus:
      "Normalize and combine events from multiple sources into a clear chronological narrative with facts, conclusions, gaps, and confidence.",
    lab:
      "Build a twenty-event fictional timeline using authentication, system, application, network, endpoint, and change records.",
  },
  {
    number: "I4.8",
    title: "Log Review Lab",
    route: "log-review-lab",
    focus:
      "Combine log sources, time normalization, event context, pattern analysis, correlation, and documentation into one defensive review.",
    lab:
      "Complete a multi-source fictional log review and create an evidence-based report with safe recommendations.",
  },
];

const objectives = [
  "Explain what logs are, why systems create them, and how defenders use them.",
  "Interpret timestamps, event IDs, providers, users, devices, processes, actions, results, and severity labels.",
  "Review fictional authentication, system, application, network, web, and endpoint logs.",
  "Compare current activity with approved baselines and expected business context.",
  "Build a simple multi-source event timeline while separating facts from conclusions and evidence gaps.",
  "Document findings, confidence, limitations, ownership, escalation, and safe defensive next actions.",
];

const workflow = [
  {
    step: "Collect",
    detail:
      "Gather the fictional log sources, systems, users, time window, retention details, and review question.",
  },
  {
    step: "Normalize",
    detail:
      "Align timestamps, time zones, device names, user identities, event fields, source labels, and formats.",
  },
  {
    step: "Contextualize",
    detail:
      "Connect events with asset roles, user roles, expected schedules, applications, owners, and approved changes.",
  },
  {
    step: "Correlate",
    detail:
      "Link related events using time, users, devices, processes, services, addresses, sessions, and request identifiers.",
  },
  {
    step: "Document",
    detail:
      "Record confirmed facts, likely explanations, alternate explanations, evidence gaps, confidence, impact, and next action.",
  },
];

const fakeEvents = [
  {
    time: "10:02:14",
    source: "Authentication",
    event: "Two failed sign-ins from training-laptop-12",
    meaning:
      "Shows unsuccessful attempts from an expected device but does not yet explain the cause.",
  },
  {
    time: "10:02:18",
    source: "Application",
    event: "Mail client reports stored credential rejected",
    meaning:
      "Adds application context suggesting an automatic retry with an old saved password.",
  },
  {
    time: "10:03:07",
    source: "Support",
    event: "User confirms password was changed minutes earlier",
    meaning:
      "Provides human and change context that may explain the failed attempts.",
  },
  {
    time: "10:03:31",
    source: "Authentication",
    event: "Successful sign-in and approved MFA challenge",
    meaning:
      "Shows the expected device completed the updated authentication sequence successfully.",
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

export default function LogsAndEventMonitoringModulePage() {
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
                  Module I4 of 17
                </span>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
                  Defensive Only
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                I4: Logs and Event Monitoring
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how defenders read authentication, system, application,
                network, web, and endpoint logs, connect related events, and
                explain evidence without jumping to conclusions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${modulePath}/what-logs-are-and-why-they-matter`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Start I4.1
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
                <Stat label="Module" value="I4 of 17" />
                <Stat label="Lessons" value="8" />
                <Stat label="Module test" value="25 questions" />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5">
                <p className="font-black text-blue-200">
                  Evidence before conclusions
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  This module adds log sources, event fields, timestamp
                  normalization, authentication review, pattern analysis,
                  event correlation, and timeline documentation.
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
              How do defenders connect separate event records into an accurate
              and useful explanation?
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
              Students will compare timestamps, users, devices, applications,
              services, addresses, actions, results, baselines, and approved
              changes before deciding what is confirmed, likely, uncertain, or
              unsupported.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety Boundary
            </p>
            <p className="mt-4 leading-7 text-yellow-50">
              Every log, event, account, address, domain, process, device,
              application, service, file, request, and organization in this
              module is fictional. Practice stays read-only, authorized, and
              limited to supplied training evidence.
            </p>
          </div>
        </section>

        <SectionCard
          eyebrow="Professional Workflow"
          title="Collect, Normalize, Contextualize, Correlate, and Document"
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
              Each lesson includes professional hooks, fictional log evidence,
              safe defensive labs, scenario decisions, a scored quiz, a
              checklist, and a portfolio prompt.
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
          title="How Intermediate Log Evidence Connects"
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
            A strong conclusion uses the records together: authentication
            results, application behavior, approved password change, device
            context, MFA, timestamps, and the absence of continued failures.
          </div>
        </SectionCard>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Portfolio Outcome
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Multi-Source Log Review Report
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Students will build a fictional report containing source
              inventory, normalized timestamps, event fields, authentication,
              system, application, network, and web evidence, a correlated
              timeline, pattern analysis, confidence, limitations, and safe
              defensive recommendations.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-300/30 bg-yellow-300/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Module Assessment
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              25-Question I4 Module Test
            </h2>
            <p className="mt-4 leading-7 text-yellow-50">
              The test will cover log vocabulary, timestamps, event IDs,
              context, authentication, system, application, network, web,
              patterns, timelines, evidence limitations, and safe suspicious
              activity analysis. Answers stay hidden until submission.
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
            href={`${modulePath}/what-logs-are-and-why-they-matter`}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Start I4.1 →
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