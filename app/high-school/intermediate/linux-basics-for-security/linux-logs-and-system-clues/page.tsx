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
const modulePath = `${trackPath}/linux-basics-for-security`;
const previousLesson = `${modulePath}/safe-command-line-navigation`;
const nextLesson = `${modulePath}/package-updates-and-system-care`;

const objectives = [
  "Explain how Linux system, authentication, service, application, package, audit, and monitoring logs support defensive analysis.",
  "Interpret timestamps, event sources, severity, users, services, processes, paths, addresses, and result fields in fictional log records.",
  "Build a reliable timeline by correlating multiple fictional log sources and accounting for time-zone or clock differences.",
  "Separate confirmed events, reasonable conclusions, missing evidence, and unsupported assumptions.",
  "Write a safe evidence-based Linux log summary with scope, confidence, limitations, ownership, and authorized next steps.",
];

const vocabulary = [
  ["Log event", "A timestamped record created by a system, service, application, or security control."],
  ["Event source", "The system, service, application, process, or control that generated a log record."],
  ["Timestamp", "The recorded date and time associated with an event."],
  ["Time zone", "The regional or standardized time context used to interpret a timestamp."],
  ["Severity", "A label such as informational, warning, error, or critical that suggests event importance."],
  ["Authentication event", "A record related to login, logout, identity verification, session creation, or access failure."],
  ["Service event", "A record describing startup, shutdown, failure, restart, configuration, or health activity for a managed service."],
  ["Application log", "A record produced by an application about requests, errors, users, jobs, or business activity."],
  ["Audit trail", "A sequence of records supporting accountability for changes, access, and administrative actions."],
  ["Correlation", "The process of connecting related events from multiple evidence sources."],
  ["Retention", "The period for which logs are stored and available for review."],
  ["Evidence gap", "A missing, delayed, incomplete, filtered, or unavailable portion of the event record."],
];

const logSources = [
  {
    source: "System logs",
    purpose: "Record startup, shutdown, hardware, kernel, storage, networking, and general system activity.",
    questions: "Was the system healthy? Did a restart, device issue, resource problem, or configuration event occur?",
  },
  {
    source: "Authentication logs",
    purpose: "Record login attempts, session activity, account use, privilege events, and access failures.",
    questions: "Which account was involved? Was the event successful? Which source, method, and time apply?",
  },
  {
    source: "Service logs",
    purpose: "Record service starts, stops, failures, restarts, dependencies, and configuration errors.",
    questions: "Which service changed state? What dependency, permission, file, or update explains the event?",
  },
  {
    source: "Application logs",
    purpose: "Record application requests, errors, users, jobs, workflows, and service-specific activity.",
    questions: "What action was requested? Which user, session, resource, status, and component apply?",
  },
  {
    source: "Package and update logs",
    purpose: "Record software installation, removal, upgrade, repository, dependency, and package-manager activity.",
    questions: "Was the change approved? Which package, version, repository, user, and maintenance window apply?",
  },
  {
    source: "Audit logs",
    purpose: "Record selected file, account, permission, process, and administrative activity.",
    questions: "Which identity performed the action? What object changed? Was the rule complete and active?",
  },
  {
    source: "Network and firewall logs",
    purpose: "Record allowed, denied, listening, and connected network activity related to the Linux system.",
    questions: "Which process, service, address, port, zone, and policy decision are connected?",
  },
  {
    source: "Monitoring and alert logs",
    purpose: "Record health checks, thresholds, outages, missing telemetry, and security detections.",
    questions: "What condition triggered the alert? Which raw evidence supports or limits the conclusion?",
  },
];

const eventFields = [
  ["Timestamp", "When the event was recorded, including time zone and synchronization context."],
  ["Host", "Which fictional Linux system generated or reported the event."],
  ["Source", "The service, application, process, facility, or control that created the record."],
  ["Identity", "The user, service account, session, process owner, or administrator associated with the event."],
  ["Action", "What was attempted, completed, denied, failed, started, stopped, changed, or observed."],
  ["Object", "The file, directory, service, package, account, process, address, or resource affected."],
  ["Result", "Whether the action succeeded, failed, was denied, timed out, or remained incomplete."],
  ["Context", "Additional details such as source address, PID, path, port, error, reason, or change identifier."],
];

const evidenceMatrix = [
  {
    source: "Authentication log",
    supports: "Login attempt, account, source, method, result, session, and time.",
    limitation: "Does not prove the person behind the account or the purpose of the session by itself.",
  },
  {
    source: "Service log",
    supports: "Service state, failure, restart, dependency, configuration, and error context.",
    limitation: "Does not always show the initiating user or complete application impact.",
  },
  {
    source: "Application log",
    supports: "Application request, user, resource, status, job, or error context.",
    limitation: "May omit operating-system, identity-provider, network, or infrastructure details.",
  },
  {
    source: "Package log",
    supports: "Installed, removed, or updated package, version, repository, user, and time.",
    limitation: "Does not prove that the package change caused every later problem.",
  },
  {
    source: "Audit record",
    supports: "Selected administrative, file, account, permission, or process actions.",
    limitation: "Only records activity covered by active audit rules and available retention.",
  },
  {
    source: "Monitoring alert",
    supports: "A threshold, health condition, detection, or missing-telemetry event occurred.",
    limitation: "Does not prove root cause or malicious intent without raw supporting evidence.",
  },
];

const workflow = [
  ["1", "Define scope and question", "Identify the fictional host, time window, systems, users, services, and defensive question."],
  ["2", "Normalize time", "Record time zones, clock offsets, NTP state, collection delay, and timestamp format."],
  ["3", "Collect multiple sources", "Review authentication, service, application, package, audit, network, and monitoring evidence."],
  ["4", "Build the timeline", "Order confirmed events and connect shared users, PIDs, services, paths, sessions, addresses, and changes."],
  ["5", "Classify conclusions", "Separate confirmed facts, reasonable conclusions, missing evidence, alternate explanations, and unsupported claims."],
  ["6", "Document and escalate", "Write the finding, confidence, impact, owner, evidence limits, preservation needs, and authorized next step."],
];

const mistakes = [
  "Treating a single error line as the complete root cause.",
  "Ignoring time zones, clock drift, collection delay, or inconsistent timestamp formats.",
  "Assuming a failed login proves malicious activity.",
  "Treating an alert label as stronger evidence than the underlying records.",
  "Reading only one log source when identity, process, application, and network evidence are available.",
  "Assuming absence of logs proves that an event did not happen.",
  "Ignoring retention, filtering, rotation, collection failure, or missing telemetry.",
  "Confusing event severity with confirmed business impact.",
  "Changing or deleting logs before preserving the original evidence.",
  "Publishing real usernames, addresses, paths, hostnames, session identifiers, or private log content in a portfolio.",
];

const quizQuestions = [
  {
    question: "Why should defenders correlate multiple Linux log sources?",
    choices: [
      "Different sources provide different parts of the identity, process, service, application, network, and change story.",
      "One log source is never useful.",
      "Correlation automatically proves intent.",
      "Every source records identical information.",
    ],
    answer: 0,
    explanation: "Multiple sources provide complementary evidence and reveal gaps or contradictions.",
  },
  {
    question: "Why must time zones and clock offsets be reviewed?",
    choices: [
      "They affect the correct ordering and interpretation of events.",
      "They change file permissions.",
      "They identify the system owner.",
      "They prove every log is complete.",
    ],
    answer: 0,
    explanation: "Misaligned time can create false event sequences.",
  },
  {
    question: "What does a failed authentication event prove?",
    choices: [
      "An authentication attempt failed under the recorded conditions.",
      "The account was definitely attacked.",
      "The user typed the wrong password intentionally.",
      "The system is compromised.",
    ],
    answer: 0,
    explanation: "The result is confirmed, but cause and intent require more evidence.",
  },
  {
    question: "What is an evidence gap?",
    choices: [
      "A missing, delayed, filtered, incomplete, or unavailable part of the event record.",
      "A guaranteed malicious event.",
      "A file permission.",
      "A successful package update.",
    ],
    answer: 0,
    explanation: "Evidence gaps limit the confidence and completeness of conclusions.",
  },
  {
    question: "Which evidence best explains why an approved service failed after a package update?",
    choices: [
      "Package, service, configuration, permission, change, and application logs correlated by time.",
      "Only the alert title.",
      "Only the package name.",
      "Only the final error line.",
    ],
    answer: 0,
    explanation: "Root-cause analysis requires multiple connected sources.",
  },
  {
    question: "A monitoring alert reports missing logs from one host. What is the strongest first conclusion?",
    choices: [
      "Telemetry is missing and collection, network, service, time, and host status require review.",
      "The host is definitely compromised.",
      "No events occurred on the host.",
      "The logs were intentionally deleted.",
    ],
    answer: 0,
    explanation: "Missing telemetry confirms a visibility problem, not its cause.",
  },
  {
    question: "Why should an analyst preserve raw logs before interpretation?",
    choices: [
      "So the original evidence remains available for verification, correlation, and later review.",
      "So every conclusion becomes correct.",
      "So timestamps no longer matter.",
      "So authorization is unnecessary.",
    ],
    answer: 0,
    explanation: "Preserving original evidence supports integrity and reproducibility.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I2</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Previous: I2.5 Safe Command-Line Navigation
        </Link>
        <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Back to Module
        </Link>
        <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
          Next: I2.7 Package Updates and System Care
        </Link>
      </div>
    </section>
  );
}

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

function LogSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Log Source Guide</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Different Logs Answer Different Questions</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {logSources.map((item) => (
          <div key={item.source} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-100">{item.source}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.purpose}</p>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Defender questions</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.questions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Event Anatomy</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Read Each Log Field in Context</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {eventFields.map(([field, meaning]) => (
          <div key={field} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{field}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceLimits() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Analysis</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What Linux Logs Can and Cannot Prove</h2>
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

function ReviewWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Analyze Linux Logs in Six Steps</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map(([step, title, detail]) => (
          <div key={step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{step}</div>
            <h3 className="mt-4 font-black text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LinuxLogsAndSystemCluesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I2</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 6 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.6 Linux Logs and System Clues
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Correlate fictional Linux system, authentication, service, application, package, audit, network, and monitoring logs into a defensible timeline.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Linux Logs and System Clues"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain Linux systems, paths, accounts, permissions, processes, services, and safe terminal evidence.",
            "I understand that one log line rarely proves complete cause, purpose, impact, or intent.",
            "I will record time zones, clock offsets, retention, missing telemetry, and source limitations.",
            "I will use only fictional hosts, users, services, applications, addresses, paths, sessions, and logs.",
            "I will not collect, access, alter, delete, or publish real private logs without explicit authorization.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Logs Are Clues, Not Automatic Conclusions">
          <p className="leading-8">
            A failed login may come from a mistyped password, expired account, automation error, stale configuration, or unauthorized attempt. A service failure may come from permissions, package changes, dependencies, resources, or configuration. Defenders build a timeline across multiple sources before naming a cause.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The alert says suspicious login, so the account was hacked.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Confirm the event, normalize time, correlate identity, service, application, network, change, and owner evidence, then state confidence and remaining gaps.”</p>
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

        <SectionCard eyebrow="Why This Matters" title="Reliable Timelines Support Troubleshooting, Accountability, and Incident Response">
          <p className="leading-8">
            Logs help defenders understand what happened, when it happened, which identity, process, service, application, package, or network path was involved, and what evidence is still missing. Poor timing or incomplete collection can create misleading conclusions.
          </p>
        </SectionCard>

        <LogSourceGuide />
        <EventFieldGuide />

        <SectionCard eyebrow="Core Concept" title="Build the Timeline Before Naming the Cause">
          <p className="leading-8">
            Start with confirmed events and a normalized time window. Then connect shared identifiers such as user, session, PID, service, package, path, address, port, change ticket, and host. Only after correlation should the analyst state a likely explanation.
          </p>
          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> write every finding using four labels: confirmed, likely, missing, and not supported.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Linux Logging and Timeline Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <EvidenceLimits />
        <ReviewWorkflow />

        <FakeDashboardCard
          title="Fake Linux Log Correlation Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services environment."
          metrics={[
            {
              label: "Correlated log sources",
              value: "7",
              note: "Authentication, service, application, package, audit, firewall, and monitoring evidence are available.",
            },
            {
              label: "Clock offsets",
              value: "1",
              note: "One application host is three minutes behind the centralized collector.",
            },
            {
              label: "Unresolved evidence gaps",
              value: "2",
              note: "A rotated application log and a delayed audit stream limit confidence for part of the timeline.",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated Login Failures Followed by Successful Service Access"
          severity="High"
          time="11:46 AM"
          source="Fake Linux Identity Correlation Monitor"
          details="The fictional service account report-sync shows five failed authentication attempts from the approved application server, followed by one successful login and a completed report transfer. A credential rotation occurred six minutes earlier, and the application service restarted three minutes before the successful login."
          recommendation="Preserve authentication, application, service, credential-change, and network evidence; normalize timestamps; confirm whether the application retried with an old secret before loading the new credential; then validate the approved service configuration."
        />

        <FakeLogPanel
          title="Fake Multi-Source Linux Timeline"
          logs={[
            "11:31:00 CHANGE credential='report-sync' action='rotated' approved='true'",
            "11:33:18 APP host='training-app-03' event='config_reload_scheduled'",
            "11:34:02 AUTH user='report-sync' source='training-app-03' result='failed'",
            "11:34:32 AUTH user='report-sync' source='training-app-03' result='failed'",
            "11:35:02 AUTH user='report-sync' source='training-app-03' result='failed'",
            "11:35:32 AUTH user='report-sync' source='training-app-03' result='failed'",
            "11:36:02 AUTH user='report-sync' source='training-app-03' result='failed'",
            "11:37:11 SERVICE host='training-app-03' name='report-agent' action='restart' result='success'",
            "11:37:26 AUTH user='report-sync' source='training-app-03' result='success'",
            "11:38:04 APP job='daily-report-transfer' result='success' files='12'",
            "11:46:12 CORRELATION finding='stale_credential_retries_before_service_reload' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Linux Log Conclusion Is Best Supported?"
          evidence={[
            "The fictional report-sync credential was rotated through an approved change.",
            "Five failed attempts came from the approved application server after rotation.",
            "The report-agent service had not yet restarted during the failed attempts.",
            "The service restarted successfully at 11:37:11.",
            "The next authentication attempt succeeded.",
            "The approved report-transfer job completed immediately afterward.",
            "No unapproved source or unexpected account use appears in the supplied evidence.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The application likely retried with the previous credential until the service reloaded the new secret; preserve evidence and validate the approved credential-reload process.",
            "The service account was definitely stolen.",
            "Delete the service account immediately.",
            "Ignore the failures because the final login succeeded.",
          ]}
          bestAnswer={0}
          explanation="The timing, approved source, service restart, successful authentication, and completed job strongly support a stale-credential reload issue rather than confirmed account theft."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Linux Log Analysis">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build a Fictional Linux Evidence Timeline">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fictional Environment</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Learning Portal Log Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review supplied fictional authentication, service, application, package, audit, firewall, and monitoring events from three Linux systems with one documented clock offset.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required Analysis</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define the question, host scope, and time window.</li>
                <li>Normalize all timestamps and document the clock offset.</li>
                <li>Group events by user, service, process, package, path, and source.</li>
                <li>Build a chronological timeline of confirmed facts.</li>
                <li>Identify one likely cause and two alternate explanations.</li>
                <li>Mark retention, rotation, collection, and missing-evidence limits.</li>
                <li>Write a confidence-rated finding and authorized next action.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional logs. Do not collect, access, copy, alter, delete, or publish logs from a real device, account, server, application, school network, cloud system, or website without explicit authorization.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Monitoring Dashboard Shows No Logs from One Host"
          scenario="A fictional collector has received no events from training-web-04 for 18 minutes. The host health monitor still reports the server as online, but the local log-forwarding service status is unavailable."
          choices={[
            {
              label: "Choice A",
              response: "Treat missing telemetry as confirmed, preserve collector and host-health evidence, and request authorized review of the forwarding service, network path, queue, and time state.",
              outcome: "Best defensive choice. The evidence confirms a visibility gap but not its cause.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Conclude that no events occurred on the host.",
              outcome: "Unsupported. Missing collection does not prove the absence of local activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Declare that someone deleted the logs.",
              outcome: "Unsupported. Collection, service, network, queue, and storage failures remain possible.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A High-Severity Service Alert Has Only One Error Line"
          scenario="A fictional alert labels a database service failure as critical, but the supplied evidence contains only the final timeout message and no startup, dependency, resource, or change records."
          choices={[
            {
              label: "Choice A",
              response: "Confirm the timeout event, preserve the alert and error, and request the authorized surrounding service, system, application, resource, and change timeline before naming the cause.",
              outcome: "Best defensive choice. Severity does not replace missing root-cause evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "State that the database package is corrupted.",
              outcome: "Unsupported. The current evidence does not identify the cause.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the alert because the evidence is incomplete.",
              outcome: "Weak response. The confirmed timeout still requires triage and additional evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Linux Log Analysis Checklist"
          items={[
            "I define the fictional host, time window, users, services, systems, and defensive question.",
            "I record timestamp format, time zone, clock offset, NTP state, and collection delay.",
            "I preserve original records before filtering, summarizing, or interpreting them.",
            "I correlate authentication, service, application, package, audit, network, and monitoring evidence.",
            "I connect shared identifiers such as user, session, PID, service, path, address, port, and change record.",
            "I distinguish event severity from confirmed business impact.",
            "I document missing logs, retention, rotation, filtering, delayed telemetry, and collection failures.",
            "I label confirmed facts, likely conclusions, alternate explanations, and unsupported claims.",
            "I include confidence, owner, impact, preservation needs, and authorized next steps.",
            "I use fictional evidence and never publish real private logs or identifying system details.",
          ]}
        />

        <MiniQuiz
          title="I2.6 Mini Quiz: Linux Logs and System Clues"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Linux Log Correlation Report for a learning-portal environment. Include seven log sources, normalized timestamps, one clock offset, one missing-log gap, a 15-event timeline, confirmed facts, likely explanation, alternate explanations, confidence, evidence limitations, owner, and authorized next action."
          tips={[
            "Use only fictional hosts, users, services, applications, addresses, paths, sessions, and logs.",
            "Include authentication, service, application, package, audit, firewall, and monitoring evidence.",
            "Clearly label confirmed, likely, missing, and unsupported statements.",
            "Do not include real usernames, IP addresses, hostnames, paths, tokens, session IDs, or private log content.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Linux logs provide clues about systems, identities, services, applications, packages, changes, and network activity.",
            "Timestamps require time-zone, clock-offset, NTP, delay, and retention context.",
            "One log line or alert rarely proves complete cause, intent, or impact.",
            "Strong analysis correlates multiple sources using shared users, PIDs, services, paths, sessions, addresses, and changes.",
            "Missing telemetry confirms a visibility gap, not the cause of that gap.",
            "Reliable reports preserve raw evidence and separate confirmed facts, likely conclusions, gaps, and unsupported claims.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}