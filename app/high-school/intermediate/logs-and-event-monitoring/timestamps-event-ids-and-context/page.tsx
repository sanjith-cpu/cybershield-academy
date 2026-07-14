import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/logs-and-event-monitoring`;
const previousLesson = `${modulePath}/what-logs-are-and-why-they-matter`;
const nextLesson = `${modulePath}/authentication-logs`;

const objectives = [
  "Interpret fictional timestamps, time zones, clock offsets, collection times, event IDs, providers, severity labels, users, devices, processes, services, actions, results, and correlation identifiers.",
  "Explain why displayed event order can differ from actual event order when time zones, clock drift, forwarding delay, or collection delay are present.",
  "Use provider, log source, operating-system context, version, message, and surrounding evidence to interpret an event ID safely.",
  "Separate event creation time, collection time, ingestion time, and analyst review time without treating them as interchangeable.",
  "Build a defensible normalized event table that preserves original values, records transformations, and states confidence and evidence limitations.",
];

const vocabulary = [
  ["Event time", "The timestamp associated with when the source says the event occurred."],
  ["Collection time", "The time when a collector, agent, or platform received the event."],
  ["Ingestion time", "The time when an event entered a storage, analytics, or monitoring system."],
  ["Time zone", "The local offset or region used to interpret a timestamp."],
  ["UTC", "A common global time reference used to compare events from different locations."],
  ["Clock drift", "A difference between a device clock and the correct or comparison time source."],
  ["Forwarding delay", "The delay between event creation and delivery to another system."],
  ["Normalization", "Converting different timestamps, names, formats, and fields into a consistent structure."],
  ["Event ID", "A source-defined number or code that classifies an event type."],
  ["Provider", "The component, service, application, device, or control that generated the event."],
  ["Correlation identifier", "A shared session, request, activity, process, trace, or ticket value used to connect related events."],
  ["Severity", "A source-defined priority or importance label that requires context."],
];

const timestampTypes = [
  {
    type: "Event creation time",
    meaning: "When the source recorded that the activity occurred.",
    defenderUse: "Use it as the primary sequence clue when the source clock is trusted.",
    limitation: "The source clock may be wrong, delayed, manually changed, or missing time-zone context.",
  },
  {
    type: "Collection time",
    meaning: "When the agent, collector, gateway, or monitoring service received the event.",
    defenderUse: "Compare it with event time to identify forwarding or queue delay.",
    limitation: "A late collection time does not mean the activity occurred late.",
  },
  {
    type: "Ingestion time",
    meaning: "When the event was written into a platform, index, database, or analytics system.",
    defenderUse: "Identify pipeline delay, backlog, parsing delay, or storage timing.",
    limitation: "Ingestion can happen seconds, minutes, or longer after the event itself.",
  },
  {
    type: "Analyst review time",
    meaning: "When a person opened, searched, or documented the event.",
    defenderUse: "Measure response and review timing.",
    limitation: "It says nothing about when the original activity occurred.",
  },
  {
    type: "Application-generated time",
    meaning: "A timestamp embedded inside an application message, transaction, request, or job record.",
    defenderUse: "Connect application workflow stages and business activity.",
    limitation: "The application may format or round time differently from the operating system.",
  },
  {
    type: "External reference time",
    meaning: "A timestamp from a ticket, email, user report, maintenance window, or approved change.",
    defenderUse: "Add human and governance context to the technical timeline.",
    limitation: "Human-entered times may be approximate or use a different time zone.",
  },
];

const normalizationProblems = [
  {
    problem: "Different time zones",
    example: "A laptop records local time while a cloud service records UTC.",
    risk: "Events may appear hours apart even though they occurred within seconds.",
    response: "Record the original zone and convert both to a common reference while preserving the original values.",
  },
  {
    problem: "Clock drift",
    example: "A workstation clock is three minutes behind the identity platform.",
    risk: "Cause and effect may appear reversed.",
    response: "Measure the offset, document confidence, and adjust the working timeline without changing the original evidence.",
  },
  {
    problem: "Missing time-zone label",
    example: "A text export shows 09:22:41 but does not state whether it is local time or UTC.",
    risk: "The event cannot be placed accurately against other sources.",
    response: "Treat the zone as unknown until source configuration or related evidence confirms it.",
  },
  {
    problem: "Collection delay",
    example: "A mobile device stores events locally and forwards them after reconnecting.",
    risk: "Many older events may arrive together and appear to be new activity.",
    response: "Compare event time, collection time, ingestion time, device state, and connectivity evidence.",
  },
  {
    problem: "Timestamp precision",
    example: "One source records seconds while another records milliseconds.",
    risk: "Events may appear tied even when one happened first.",
    response: "Preserve the available precision and avoid claiming an exact order when the evidence cannot support it.",
  },
  {
    problem: "Daylight-saving or regional change",
    example: "A local system changes offset while a cloud system remains in UTC.",
    risk: "A one-hour difference may appear or disappear unexpectedly.",
    response: "Use region-aware conversion and record the applied offset for that exact date.",
  },
];

const eventIdPrinciples = [
  {
    principle: "Provider matters",
    detail: "The same number can have different meanings when generated by different applications, services, devices, or operating-system components.",
  },
  {
    principle: "Source matters",
    detail: "An event ID in an authentication log serves a different purpose from an event ID in a system, application, firewall, or endpoint log.",
  },
  {
    principle: "Version matters",
    detail: "Software updates can change fields, wording, categories, severity, or event behavior.",
  },
  {
    principle: "Message matters",
    detail: "The event message and named fields explain the specific account, process, service, path, action, or result.",
  },
  {
    principle: "Sequence matters",
    detail: "Events before and after the record may explain a retry, recovery, maintenance action, restart, or user workflow.",
  },
  {
    principle: "Business context matters",
    detail: "An event can be expected during an approved change and unusual outside the maintenance window.",
  },
];

const severityGuide = [
  {
    label: "Information",
    meaning: "The source recorded normal, completed, state-change, or diagnostic activity.",
    caution: "Information events can still matter when they show a privileged change, unusual source, new service, or key sequence step.",
  },
  {
    label: "Warning",
    meaning: "The source detected a condition that may need attention but did not necessarily stop the workflow.",
    caution: "A warning can be expected during maintenance or may be the first sign of a larger issue.",
  },
  {
    label: "Error",
    meaning: "A component recorded a failed operation or problem.",
    caution: "The event confirms the recorded failure, not the complete cause, intent, or business impact.",
  },
  {
    label: "Critical",
    meaning: "The source assigned very high urgency or importance.",
    caution: "Critical is source-defined and still requires owner, system role, dependency, timeline, and impact context.",
  },
  {
    label: "Audit success",
    meaning: "A selected audited action completed successfully under the recorded conditions.",
    caution: "Success does not automatically mean the action was authorized, expected, or safe.",
  },
  {
    label: "Audit failure",
    meaning: "A selected audited action did not complete successfully.",
    caution: "Failure does not automatically mean malicious activity or compromise.",
  },
];

const evidenceMatrix = [
  {
    source: "Original timestamp",
    supports: "The time value written by the source and the original display format.",
    limitation: "May lack a zone, may reflect clock drift, or may differ from actual activity time.",
  },
  {
    source: "Collector timestamp",
    supports: "When the event reached the collector or monitoring platform.",
    limitation: "Does not prove when the event occurred.",
  },
  {
    source: "Time synchronization record",
    supports: "Whether a device clock was aligned, offset, corrected, or unable to synchronize.",
    limitation: "May not describe the exact offset at every event moment.",
  },
  {
    source: "Provider and event ID",
    supports: "The source-defined category and component that created the record.",
    limitation: "Does not provide complete meaning without message, fields, version, and context.",
  },
  {
    source: "Correlation identifier",
    supports: "A relationship between events in the same session, request, activity, process, or trace.",
    limitation: "A missing or reused identifier may require additional time and context correlation.",
  },
  {
    source: "Change record",
    supports: "Approved owner, reason, maintenance window, expected action, test, and rollback context.",
    limitation: "Does not prove the technical event occurred exactly as documented.",
  },
  {
    source: "User or support report",
    supports: "Observed timing, action, impact, expected workflow, and human context.",
    limitation: "The reported time may be approximate and the explanation may be incomplete.",
  },
  {
    source: "Related application or system event",
    supports: "A second technical view of the same action, failure, recovery, or workflow.",
    limitation: "The sources may use different clocks, fields, names, or collection paths.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Preserve originals",
    detail: "Keep the fictional source timestamp, format, time zone, event ID, provider, message, fields, and collection time unchanged.",
  },
  {
    step: "2",
    title: "Record source settings",
    detail: "Identify the source system, provider, version, configured time zone, synchronization state, and collection path.",
  },
  {
    step: "3",
    title: "Choose a reference",
    detail: "Select a common comparison time such as UTC and document why it is appropriate.",
  },
  {
    step: "4",
    title: "Apply transformations",
    detail: "Convert zones, account for known clock offsets, preserve precision, and record every change in the normalized table.",
  },
  {
    step: "5",
    title: "Correlate context",
    detail: "Connect event IDs, users, devices, processes, services, sessions, requests, tickets, and approved changes.",
  },
  {
    step: "6",
    title: "State confidence",
    detail: "Explain which order is confirmed, likely, uncertain, or unsupported and identify remaining evidence gaps.",
  },
];

const normalizedEvents = [
  {
    original: "08:14:57 Local",
    source: "training-win-22",
    offset: "Device clock -02:00",
    normalized: "08:16:57 UTC",
    event: "Mail client reports stored credential rejected",
    note: "Local event corrected using the documented two-minute clock offset.",
  },
  {
    original: "08:16:59 UTC",
    source: "Identity platform",
    offset: "No known offset",
    normalized: "08:16:59 UTC",
    event: "Authentication failure for training-user-22",
    note: "Identity event follows the corrected application event by two seconds.",
  },
  {
    original: "08:17:05 UTC",
    source: "Support ticket",
    offset: "Approximate human time",
    normalized: "08:17:05 UTC",
    event: "User reports password was changed earlier",
    note: "Human-entered time is useful but should not be treated as millisecond-precise.",
  },
  {
    original: "08:17:21 Local",
    source: "training-win-22",
    offset: "Device clock -02:00",
    normalized: "08:19:21 UTC",
    event: "Stored mail credential updated",
    note: "The normalized time places this action after the support report.",
  },
  {
    original: "08:19:25 UTC",
    source: "Identity platform",
    offset: "No known offset",
    normalized: "08:19:25 UTC",
    event: "Authentication success",
    note: "The successful sign-in follows the updated credential by four seconds.",
  },
  {
    original: "08:19:28 UTC",
    source: "MFA platform",
    offset: "No known offset",
    normalized: "08:19:28 UTC",
    event: "MFA challenge approved",
    note: "The MFA event corroborates the authentication sequence.",
  },
];

const mistakes = [
  "Sorting events by displayed time without checking time zones or clock offsets.",
  "Treating collection time as if it were event creation time.",
  "Changing original timestamps instead of preserving them and adding a normalized value.",
  "Assuming every timestamp includes the same precision.",
  "Ignoring daylight-saving changes, regional offsets, or missing time-zone labels.",
  "Interpreting an event ID without checking provider, source, version, message, and surrounding records.",
  "Treating critical severity as proof of compromise or maximum business impact.",
  "Treating audit success as automatically approved or safe.",
  "Treating audit failure as automatically malicious.",
  "Forcing an exact event order when the available precision supports only a likely order.",
  "Ignoring collection delay, forwarding delay, offline devices, or queue backlogs.",
  "Publishing real timestamps, usernames, device names, addresses, paths, event IDs, or internal messages in a portfolio.",
];

const quizQuestions = [
  {
    question: "Why should original timestamps be preserved?",
    choices: [
      "So the source evidence remains available and every normalization step can be verified.",
      "So time zones no longer matter.",
      "So event IDs become unnecessary.",
      "So collection delay disappears.",
    ],
    answer: 0,
    explanation: "Preserving originals supports reproducibility and prevents hidden alteration of evidence.",
  },
  {
    question: "What does collection time represent?",
    choices: [
      "When the collector received the event.",
      "The exact moment the activity occurred.",
      "The user's local time.",
      "The time the analyst wrote the report.",
    ],
    answer: 0,
    explanation: "Collection time may be later than event time because of forwarding or queue delay.",
  },
  {
    question: "Why can displayed event order be misleading?",
    choices: [
      "Different time zones, clock drift, precision, and collection delays can change the apparent sequence.",
      "Event IDs always sort incorrectly.",
      "Critical events are always displayed first.",
      "Users can never read timestamps.",
    ],
    answer: 0,
    explanation: "Time context must be normalized before building a timeline.",
  },
  {
    question: "Why should an event ID be interpreted with its provider?",
    choices: [
      "The same number can have different meanings in different sources or components.",
      "Providers replace event messages.",
      "Providers determine the user's intent.",
      "The event ID becomes a timestamp.",
    ],
    answer: 0,
    explanation: "Provider, source, version, message, and fields give the ID meaning.",
  },
  {
    question: "What does a critical severity label prove?",
    choices: [
      "The source assigned high importance to the event under its own rules.",
      "The system is definitely compromised.",
      "The user acted maliciously.",
      "The event caused every later failure.",
    ],
    answer: 0,
    explanation: "Severity is one prioritization clue and still requires context.",
  },
  {
    question: "A device clock is known to be two minutes slow. How should its event time be handled?",
    choices: [
      "Preserve the original value, record the offset, and add a normalized comparison time.",
      "Delete the original timestamp.",
      "Ignore the event.",
      "Change the source log permanently.",
    ],
    answer: 0,
    explanation: "The original evidence and the documented transformation should both remain visible.",
  },
  {
    question: "What should happen when timestamp precision cannot establish an exact order?",
    choices: [
      "State that the order is uncertain and avoid claiming more precision than the evidence supports.",
      "Guess the order.",
      "Use severity to decide the order.",
      "Remove one of the events.",
    ],
    answer: 0,
    explanation: "Honest uncertainty is stronger than unsupported precision.",
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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

function TimestampGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Timestamp Types</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Not Every Timestamp Means the Same Thing</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {timestampTypes.map((item) => (
          <div key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.meaning}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Defender use</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.defenderUse}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Time Normalization Problems</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Six Ways Event Order Can Become Misleading</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {normalizationProblems.map((item) => (
          <div key={item.problem} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-100">{item.problem}</h3>
            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Example</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.example}</p>
            </div>
            <div className="mt-3 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">Risk</p>
              <p className="mt-2 text-sm leading-6 text-red-50">{item.risk}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Strong response</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.response}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventIdGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Event ID Context</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Event IDs Are Source-Defined Categories</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {eventIdPrinciples.map((item) => (
          <div key={item.principle} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.principle}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SeverityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Severity and Level</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Severity Helps Prioritize Review but Does Not Replace Context</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {severityGuide.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-100">{item.label}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.meaning}</p>
            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
              {item.caution}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Matrix</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What Time and Event Context Can and Cannot Prove</h2>
      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div key={item.source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Evidence source</p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Can support</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.supports}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Normalize Time and Context in Six Steps</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div key={item.step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.step}</div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NormalizedTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Normalized Event Table</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Preserve Original Time and Add a Common Comparison Time</h2>
      <div className="mt-6 grid gap-4">
        {normalizedEvents.map((item, index) => (
          <div key={`${item.original}-${item.source}`} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="grid gap-4 lg:grid-cols-[0.15fr_0.85fr_0.85fr_0.85fr_1.4fr] lg:items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Original</p>
                <p className="mt-2 font-mono text-sm text-slate-200">{item.original}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Source and offset</p>
                <p className="mt-2 text-sm font-semibold text-cyan-100">{item.source}</p>
                <p className="mt-1 text-xs text-slate-400">{item.offset}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Normalized</p>
                <p className="mt-2 font-mono text-sm font-black text-emerald-200">{item.normalized}</p>
              </div>
              <div>
                <p className="font-black text-white">{item.event}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TimestampsEventIdsAndContextPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I4</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 2 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.2 Timestamps, Event IDs, and Context
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how time zones, clock drift, collection delay, providers, event IDs, severity labels, users, devices, processes, actions, results, and correlation fields shape the meaning of a fictional event.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="Timestamps, Event IDs, and Context"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that logs are source-created records and not automatic conclusions.",
            "I understand that event time, collection time, ingestion time, and review time can be different.",
            "I will preserve original timestamps and add normalized values rather than replacing the source evidence.",
            "I will interpret event IDs with provider, source, version, message, fields, and related events.",
            "I will use only fictional timestamps, event IDs, users, devices, applications, addresses, and organizations.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Timeline Can Be Wrong Even When Every Timestamp Is Real">
          <p className="leading-8">
            Two devices can record the same workflow using different time zones, different clock accuracy, different timestamp precision, and different collection delays. If those records are sorted without normalization, the apparent cause may appear after the effect.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The first displayed event must have happened first.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Preserve the original values, confirm time zones and clock state, compare collection times, normalize the timeline, and state any uncertainty.”</p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Time and Context Determine Sequence, Meaning, and Confidence">
          <p className="leading-8">
            Accurate timing helps defenders connect sign-ins, application actions, process activity, network requests, service failures, alerts, and approved changes. Provider and event context help defenders understand what the source actually recorded.
          </p>
        </SectionCard>

        <TimestampGuide />
        <ProblemGuide />

        <SectionCard eyebrow="Core Concept" title="Original Time, Normalized Time, Provider, and Event Context Belong Together">
          <p className="leading-8">
            A professional timeline never hides the original evidence. It shows the source value, the known zone or offset, the normalized comparison value, the provider, the event ID, the event fields, and the confidence in the resulting order.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Original", "What exact timestamp did the source record?"],
              ["Offset", "Which zone, drift, or delay applies?"],
              ["Normalized", "What common comparison time is used?"],
              ["Provider", "Which component created the event?"],
              ["Context", "Which user, device, process, action, result, and change apply?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <EventIdGuide />
        <SeverityGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <NormalizedTable />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Time, Event ID, and Context Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Event Normalization Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services event pipeline."
          metrics={[
            {
              label: "Time zones represented",
              value: "4",
              note: "UTC, Eastern local time, Central local time, and one source with an unknown zone.",
            },
            {
              label: "Known clock offsets",
              value: "3",
              note: "One workstation is two minutes slow, one network device is eight seconds fast, and one server is synchronized.",
            },
            {
              label: "Delayed event batches",
              value: "2",
              note: "One mobile device forwarded events after reconnecting and one collector processed a short queue backlog.",
            },
          ]}
        />

        <FakeAlertCard
          title="Application Failure Appears Before the Related Authentication Event"
          severity="Medium"
          time="08:28 AM"
          source="Fake Event Correlation Monitor"
          details="A fictional mail-client error appears two minutes before the identity-platform failure when the raw records are sorted by displayed time. The workstation clock is documented as two minutes slow. After normalization, the application event occurs two seconds before the authentication failure, which matches the expected sign-in workflow."
          recommendation="Preserve original timestamps, document the workstation offset, normalize both events to UTC, correlate the user, device, application, and session, and state that the corrected order is high confidence."
        />

        <FakeLogPanel
          title="Fake Raw and Normalized Timeline"
          logs={[
            "RAW 08:14:57 LOCAL device='training-win-22' event='stored_credential_rejected' clock_offset='-02:00'",
            "RAW 08:16:59 UTC source='identity-platform' event='authentication_failed'",
            "NORMALIZED 08:16:57 UTC source='training-win-22' event='stored_credential_rejected'",
            "NORMALIZED 08:16:59 UTC source='identity-platform' event='authentication_failed'",
            "08:17:05 UTC source='support-ticket' event='password_change_reported' precision='approximate'",
            "RAW 08:17:21 LOCAL device='training-win-22' event='credential_updated' clock_offset='-02:00'",
            "NORMALIZED 08:19:21 UTC source='training-win-22' event='credential_updated'",
            "08:19:25 UTC source='identity-platform' event='authentication_success'",
            "08:19:28 UTC source='mfa-platform' event='challenge_approved'",
            "08:28:00 UTC finding='corrected_sequence_matches_expected_workflow' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Timeline Conclusion Is Best Supported?"
          evidence={[
            "The workstation clock is documented as two minutes slow.",
            "The mail-client error shows 08:14:57 local time.",
            "The identity-platform failure shows 08:16:59 UTC.",
            "After correcting the workstation offset, the application event becomes 08:16:57 UTC.",
            "The support ticket time is approximate.",
            "The stored credential was updated before the successful authentication.",
            "The MFA event followed the successful authentication.",
            "No conflicting time-synchronization evidence is supplied.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The normalized timeline places the mail-client error two seconds before the identity failure, and the sequence is high confidence because the device offset is documented.",
            "The raw displayed order proves the identity failure happened first.",
            "The support ticket provides millisecond-level timing.",
            "The criticality of the events determines their order.",
          ]}
          bestAnswer={0}
          explanation="Documented clock offset and consistent related events support the corrected order while preserving the original timestamps."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Time and Event Context Analysis">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Normalize a Fictional Multi-Source Event Set">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fictional Environment</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Time and Event Context Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional records from an identity platform, Windows workstation, Linux server, web application, firewall, endpoint tool, support ticket, and change system.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required Analysis</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve every original timestamp and source format.</li>
                <li>Identify event time, collection time, and ingestion time.</li>
                <li>Record time zone, clock offset, precision, and collection delay.</li>
                <li>Convert events to a common fictional UTC timeline.</li>
                <li>Interpret each event ID with provider, source, message, and fields.</li>
                <li>Mark the exact order as confirmed, likely, uncertain, or unsupported.</li>
                <li>Write a short explanation of the corrected sequence and evidence gaps.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not alter source evidence, access real systems, collect logs, change clocks, or publish real timestamps, event IDs, users, devices, addresses, or internal messages.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A High-Severity Event Arrives Twenty Minutes Late"
          scenario="A fictional endpoint alert has an event time of 11:10 UTC but an ingestion time of 11:30 UTC. The device was offline and reconnected at 11:28 UTC."
          choices={[
            {
              label: "Choice A",
              response: "Place the alert at 11:10 in the activity timeline, document the delayed ingestion, correlate device connectivity, and avoid treating it as new activity at 11:30.",
              outcome: "Best defensive choice. Event time and ingestion time serve different purposes.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Treat the event as occurring at 11:30 because that is when the platform received it.",
              outcome: "Incorrect. Collection delay changes arrival time, not necessarily activity time.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the event because it arrived late.",
              outcome: "Unsafe. Delayed evidence can still be important.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Two Events Share the Same Second but Different Precision"
          scenario="A fictional firewall log records 14:03:22 while an application log records 14:03:22.481. The firewall source records only whole seconds."
          choices={[
            {
              label: "Choice A",
              response: "Preserve both values and state that the exact order within that second is uncertain unless another source provides stronger sequence evidence.",
              outcome: "Best defensive choice. The firewall precision cannot support an exact sub-second claim.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Assume the firewall event happened first because it appears first in the export.",
              outcome: "Unsupported. Export order is not proof of event order.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Round the application event down and call the order confirmed.",
              outcome: "Weak response. Rounding removes useful precision and creates unsupported certainty.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Timestamps, Event IDs, and Context Checklist"
          items={[
            "I preserve the original fictional timestamp, format, source, provider, event ID, message, and fields.",
            "I distinguish event time, collection time, ingestion time, and analyst review time.",
            "I record time zone, clock offset, precision, daylight-saving context, forwarding delay, and collection delay.",
            "I choose a common comparison time and document every normalization step.",
            "I interpret event IDs with provider, source, version, message, fields, and surrounding events.",
            "I use severity as one review clue rather than proof of impact, intent, or compromise.",
            "I correlate users, devices, processes, services, sessions, requests, addresses, tickets, and changes.",
            "I identify exact order, likely order, uncertain order, and unsupported order honestly.",
            "I preserve evidence limitations and state confidence in the final timeline.",
            "I use only fictional records and never publish real timestamps, event IDs, usernames, devices, paths, addresses, or messages.",
          ]}
        />

        <MiniQuiz title="I4.2 Mini Quiz: Timestamps, Event IDs, and Context" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Event Normalization Workbook containing twelve events from at least six sources. Include original timestamp, source time zone, clock offset, event time, collection time, ingestion time, normalized UTC time, provider, event ID, user, device, process or service, action, result, severity, correlation identifier, confidence, and evidence limitation."
          tips={[
            "Use only fictional users, devices, event IDs, providers, timestamps, applications, addresses, and organizations.",
            "Include one clock-drift example, one missing time-zone label, one delayed event batch, and one precision conflict.",
            "Preserve the original timestamp and show the normalized value separately.",
            "Do not include real logs, screenshots, event exports, timestamps, usernames, device names, paths, addresses, or internal messages.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Event time, collection time, ingestion time, and analyst review time describe different moments.",
            "Time zones, clock drift, precision, daylight-saving changes, forwarding delay, and collection delay can alter apparent event order.",
            "Original timestamps should be preserved while normalized values are added transparently.",
            "Event IDs require provider, source, version, message, field, and sequence context.",
            "Severity helps prioritize review but does not prove cause, intent, impact, or compromise.",
            "Strong timelines state which order is confirmed, likely, uncertain, or unsupported.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I4</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}