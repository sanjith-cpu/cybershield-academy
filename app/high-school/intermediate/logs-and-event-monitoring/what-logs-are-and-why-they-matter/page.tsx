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
const previousPage = modulePath;
const nextLesson = `${modulePath}/timestamps-event-ids-and-context`;

const objectives = [
  "Explain what logs are and why operating systems, applications, network devices, websites, cloud services, and security tools create them.",
  "Identify common log sources and connect each source with the defensive questions it can help answer.",
  "Interpret core event fields such as timestamp, source, user, device, action, result, severity, process, service, address, and correlation identifier.",
  "Separate what a fictional log record directly proves from what still requires context, corroboration, or additional evidence.",
  "Create a professional fictional Log Source Inventory that documents ownership, purpose, fields, retention, limitations, and review value.",
];

const vocabulary = [
  [
    "Log",
    "A structured or semi-structured record created by a system, application, device, service, or security control.",
  ],
  [
    "Event",
    "A recorded action, condition, change, request, result, failure, warning, or observation.",
  ],
  [
    "Log source",
    "The system, application, device, service, sensor, or platform that generated the record.",
  ],
  [
    "Timestamp",
    "The date and time associated with an event, including relevant time-zone and clock context.",
  ],
  [
    "Field",
    "A named part of a log record such as user, device, action, result, process, source address, or severity.",
  ],
  [
    "Event ID",
    "A source-defined code used to categorize a type of event.",
  ],
  [
    "Provider",
    "The component, service, application, or device that created the event record.",
  ],
  [
    "Severity",
    "A source-defined label such as information, warning, error, low, medium, high, or critical.",
  ],
  [
    "Retention",
    "How long log records remain available and under what storage conditions.",
  ],
  [
    "Collection",
    "The process of gathering records from one or more sources into a review or monitoring location.",
  ],
  [
    "Correlation",
    "Connecting related events using shared time, user, device, process, service, address, request, session, or other identifiers.",
  ],
  [
    "Evidence gap",
    "Missing, delayed, filtered, overwritten, unavailable, or uncollected information that limits confidence.",
  ],
];

const sourceTypes = [
  {
    source: "Authentication logs",
    createdBy:
      "Identity systems, operating systems, applications, remote-access services, and MFA platforms.",
    commonEvents:
      "Sign-in success, sign-in failure, lockout, MFA challenge, password reset, session start, session end, and account change.",
    defenderQuestions:
      "Which account, device, source, result, reason, MFA state, session, and expected-use context apply?",
    limitation:
      "An account name or source address does not automatically prove the physical person or intent.",
  },
  {
    source: "Operating-system logs",
    createdBy:
      "Windows, Linux, macOS, servers, workstations, drivers, services, and system components.",
    commonEvents:
      "Startup, shutdown, service change, driver problem, process event, hardware condition, update, and system error.",
    defenderQuestions:
      "Which component changed, failed, restarted, or recovered, and what dependency or maintenance activity applies?",
    limitation:
      "System logs may show a symptom without identifying the initiating application, user, or business cause.",
  },
  {
    source: "Application logs",
    createdBy:
      "Business applications, databases, classroom tools, web applications, backup software, and management platforms.",
    commonEvents:
      "Application start, job execution, transaction, request, file access, configuration change, error, and recovery.",
    defenderQuestions:
      "Which application component, user, request, file, service, dependency, or business workflow is involved?",
    limitation:
      "Application records may omit identity, operating-system, network, endpoint, or owner context.",
  },
  {
    source: "Firewall and network logs",
    createdBy:
      "Firewalls, routers, switches, access points, network sensors, VPNs, and flow collectors.",
    commonEvents:
      "Allowed connection, denied connection, source, destination, port, protocol, direction, bytes, duration, and zone.",
    defenderQuestions:
      "Was the connection expected, repeated, unusual, tied to an approved service, or affected by a rule change?",
    limitation:
      "Connection metadata does not automatically reveal content, complete application purpose, or user intent.",
  },
  {
    source: "DNS logs",
    createdBy:
      "DNS clients, local resolvers, internal DNS servers, filtering services, and cloud resolvers.",
    commonEvents:
      "Query, response, record type, client, resolver, answer, failure, timeout, and blocked name.",
    defenderQuestions:
      "Which device or application requested the name, what response returned, and did the request match expected activity?",
    limitation:
      "A DNS request does not prove that a connection succeeded or that a user intentionally visited the destination.",
  },
  {
    source: "Web and proxy logs",
    createdBy:
      "Web servers, reverse proxies, secure web gateways, content filters, and application gateways.",
    commonEvents:
      "Client, user, method, host, path, response code, bytes, user agent, referrer, action, and request duration.",
    defenderQuestions:
      "Which user or application made the request, what was requested, what response occurred, and was policy applied?",
    limitation:
      "A request path or response code alone does not prove that content was safe, harmful, or intentionally accessed.",
  },
  {
    source: "Endpoint and security logs",
    createdBy:
      "Endpoint protection, Microsoft Defender, antivirus, EDR, device-management tools, and security agents.",
    commonEvents:
      "Protection state, detection, scan, process, file path, action, quarantine, exclusion, device health, and update status.",
    defenderQuestions:
      "What was detected, which user and process were involved, what action completed, and what related evidence exists?",
    limitation:
      "A detection does not automatically prove complete compromise, root cause, intent, or cleanup.",
  },
  {
    source: "Change and support records",
    createdBy:
      "Ticketing systems, administrators, application owners, support teams, project teams, and change-management processes.",
    commonEvents:
      "Approved maintenance, deployment, account change, rule change, password reset, incident report, test, rollback, and validation.",
    defenderQuestions:
      "Was the activity expected, authorized, owned, time-bounded, tested, and documented?",
    limitation:
      "Documentation may be incomplete, stale, delayed, or different from the actual technical state.",
  },
];

const coreFields = [
  {
    field: "Timestamp",
    meaning:
      "When the event was created, recorded, collected, or forwarded.",
    defenderUse:
      "Place events in order and compare activity across devices, users, applications, and systems.",
    caution:
      "Time zones, clock drift, collection delay, and forwarding delay can change the apparent sequence.",
  },
  {
    field: "Source or provider",
    meaning:
      "The system, application, service, device, or component that generated the record.",
    defenderUse:
      "Interpret the event according to the source's purpose, field definitions, and limitations.",
    caution:
      "The same event ID or severity label can mean different things in different sources.",
  },
  {
    field: "User or identity",
    meaning:
      "The account, service identity, session, token, or principal associated with the event.",
    defenderUse:
      "Connect the record with role, privilege, group membership, owner, device, and expected activity.",
    caution:
      "The account name does not always prove the physical person or complete purpose.",
  },
  {
    field: "Device or asset",
    meaning:
      "The endpoint, server, application, service, network device, or collector associated with the event.",
    defenderUse:
      "Compare the activity with the asset role, exposure, sensitivity, owner, and baseline.",
    caution:
      "A collector may store an event that was originally created somewhere else.",
  },
  {
    field: "Action",
    meaning:
      "What the system recorded as attempted, requested, changed, started, stopped, allowed, denied, or completed.",
    defenderUse:
      "Identify the event's technical operation and connect it with user, process, service, and business context.",
    caution:
      "An attempted action and a completed action are not the same.",
  },
  {
    field: "Result",
    meaning:
      "Whether the action succeeded, failed, was blocked, allowed, denied, timed out, or remained incomplete.",
    defenderUse:
      "Separate the request from the outcome and determine whether additional evidence is needed.",
    caution:
      "A successful result does not automatically mean the action was approved or safe.",
  },
  {
    field: "Process or service",
    meaning:
      "The program, process identifier, parent process, service, task, or component involved.",
    defenderUse:
      "Connect path, publisher, account, package, parent-child relationship, owner, and application purpose.",
    caution:
      "A familiar name does not prove the program path or package is correct.",
  },
  {
    field: "Source and destination",
    meaning:
      "The fictional addresses, ports, hostnames, domains, URLs, zones, or systems involved in communication.",
    defenderUse:
      "Map the event to network role, approved service, direction, destination purpose, and expected access.",
    caution:
      "An address or domain alone does not prove content, intent, or successful communication.",
  },
  {
    field: "Severity or level",
    meaning:
      "A source-defined importance label such as information, warning, error, low, medium, high, or critical.",
    defenderUse:
      "Use it as one clue when prioritizing review.",
    caution:
      "Severity does not automatically equal business impact, malicious intent, or confirmed compromise.",
  },
  {
    field: "Correlation identifier",
    meaning:
      "A shared session, request, activity, trace, process, connection, or ticket value.",
    defenderUse:
      "Connect records that belong to the same workflow and separate them from nearby unrelated events.",
    caution:
      "Not every source includes the same identifiers, and some workflows require time and context instead.",
  },
];

const evidenceLevels = [
  {
    level: "Directly confirmed",
    description:
      "The fictional record directly states a time, source, user, action, result, device, process, service, or condition.",
    example:
      "The authentication service recorded a failed sign-in for training-user-4 at 08:17:22.",
  },
  {
    level: "Corroborated fact",
    description:
      "Two or more independent records support the same event, sequence, identity, device, or outcome.",
    example:
      "Authentication, MFA, and application-session records all show the same successful sign-in sequence.",
  },
  {
    level: "Reasonable conclusion",
    description:
      "Several connected facts support a likely explanation, but interpretation is still required.",
    example:
      "The repeated failures likely came from an old saved password because they stopped after the approved reset.",
  },
  {
    level: "Alternate explanation",
    description:
      "Another plausible cause remains possible under the available evidence.",
    example:
      "An automated synchronization client may also explain repeated authentication attempts.",
  },
  {
    level: "Evidence gap",
    description:
      "Missing, delayed, filtered, overwritten, unavailable, or uncollected information limits confidence.",
    example:
      "The endpoint record segment for the first five minutes is unavailable because the device was offline.",
  },
  {
    level: "Unsupported claim",
    description:
      "The statement goes beyond the evidence or treats one label, user, address, event, or alert as proof.",
    example:
      "The user intentionally attacked the system because one denied connection was recorded.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the question",
    detail:
      "Identify the fictional system, user, device, application, time window, owner, and defensive question.",
  },
  {
    step: "2",
    title: "Identify the sources",
    detail:
      "List the authentication, system, application, network, web, endpoint, and change records that may help.",
  },
  {
    step: "3",
    title: "Read the fields",
    detail:
      "Capture timestamp, provider, event ID, user, device, process, service, source, destination, action, result, severity, and correlation data.",
  },
  {
    step: "4",
    title: "Add context",
    detail:
      "Connect asset role, user role, normal schedule, approved applications, expected destinations, owner, and known changes.",
  },
  {
    step: "5",
    title: "Compare and correlate",
    detail:
      "Look for agreement, conflict, sequence, missing records, repeated patterns, and shared identifiers.",
  },
  {
    step: "6",
    title: "Document honestly",
    detail:
      "Separate facts, conclusions, alternate explanations, evidence gaps, confidence, impact, and safe next action.",
  },
];

const logLifecycle = [
  {
    stage: "Creation",
    detail:
      "A system, application, device, or control generates an event under its configured logging rules.",
    risk:
      "Important activity may not be recorded if logging is disabled, limited, or misconfigured.",
  },
  {
    stage: "Collection",
    detail:
      "The record may remain local or be forwarded to a centralized platform.",
    risk:
      "Network, service, permission, queue, or agent problems may delay or interrupt collection.",
  },
  {
    stage: "Normalization",
    detail:
      "Fields, names, timestamps, and source formats may be converted into a common structure.",
    risk:
      "Incorrect parsing or time conversion can change meaning or event order.",
  },
  {
    stage: "Storage",
    detail:
      "Records are stored under size, retention, access, and protection rules.",
    risk:
      "Older records may be overwritten, archived, inaccessible, or removed according to policy.",
  },
  {
    stage: "Review",
    detail:
      "Defenders search, filter, compare, correlate, and summarize relevant events.",
    risk:
      "Filters or assumptions may hide related evidence or overemphasize one event.",
  },
  {
    stage: "Reporting",
    detail:
      "Findings, confidence, limitations, impact, ownership, and next actions are communicated.",
    risk:
      "Poor wording can turn a technical clue into an unsupported accusation or misleading conclusion.",
  },
];

const reviewQuestions = [
  {
    question: "Who or what created the event?",
    purpose:
      "Identify the provider, log source, user, service identity, application, device, or control.",
  },
  {
    question: "When did it happen?",
    purpose:
      "Record event time, time zone, clock state, collection time, forwarding delay, and surrounding events.",
  },
  {
    question: "What was attempted?",
    purpose:
      "Identify the requested action, process, service, connection, file access, sign-in, or configuration change.",
  },
  {
    question: "What was the result?",
    purpose:
      "Separate success, failure, denial, blocking, timeout, retry, partial completion, and recovery.",
  },
  {
    question: "Was it expected?",
    purpose:
      "Compare the event with the device role, user role, application purpose, schedule, baseline, and change record.",
  },
  {
    question: "What else supports it?",
    purpose:
      "Search for related authentication, system, application, network, endpoint, support, and governance records.",
  },
  {
    question: "What is missing?",
    purpose:
      "Document unavailable fields, retention gaps, collection delays, missing owners, absent timelines, and unknown dependencies.",
  },
  {
    question: "What is the safe next step?",
    purpose:
      "Preserve evidence, assign an owner, request authorized review, validate impact, and avoid disruptive unsupported changes.",
  },
];

const mistakes = [
  "Treating every warning, error, denied connection, failed sign-in, or rare event as malicious.",
  "Reading only high-severity records and ignoring the events before and after them.",
  "Using one event ID without checking its provider, source, message, fields, and surrounding records.",
  "Assuming a username proves the physical person behind an action.",
  "Assuming an address, hostname, domain, process name, or user agent proves intent.",
  "Ignoring approved maintenance, password resets, deployments, travel, testing, outages, and support activity.",
  "Treating a successful action as automatically approved or safe.",
  "Treating a blocked or failed action as proof of compromise.",
  "Assuming missing logs prove that no activity occurred.",
  "Filtering too narrowly and hiding related records from other sources or time windows.",
  "Mixing confirmed facts, likely explanations, alternate explanations, evidence gaps, and recommendations.",
  "Publishing real logs, usernames, device names, addresses, domains, paths, alerts, or internal details in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is a log?",
    choices: [
      "A record created by a system, application, device, service, or control about an event or condition.",
      "A complete explanation of user intent.",
      "A guaranteed proof of compromise.",
      "A list of only critical security alerts.",
    ],
    answer: 0,
    explanation:
      "Logs are records. They still require context, correlation, and careful interpretation.",
  },
  {
    question:
      "Why do defenders review multiple log sources?",
    choices: [
      "Different sources record different parts of the same technical and business story.",
      "Every source contains identical information.",
      "One source can never contain useful evidence.",
      "Multiple sources automatically prove intent.",
    ],
    answer: 0,
    explanation:
      "Authentication, system, application, network, endpoint, and change records often provide different context.",
  },
  {
    question:
      "What does a failed sign-in directly prove?",
    choices: [
      "The identity system recorded an unsuccessful authentication attempt under the shown conditions.",
      "The user is malicious.",
      "The account is compromised.",
      "The device must be erased.",
    ],
    answer: 0,
    explanation:
      "The failed result is confirmed, but source, cause, user, application, and intent still require evidence.",
  },
  {
    question:
      "Why is severity only one clue?",
    choices: [
      "Severity is source-defined and may not match actual business impact, cause, or malicious intent.",
      "Severity labels are always incorrect.",
      "Only low-severity events are useful.",
      "Severity replaces event context.",
    ],
    answer: 0,
    explanation:
      "Severity helps prioritize review but does not replace evidence and context.",
  },
  {
    question:
      "What does missing telemetry from one device prove?",
    choices: [
      "A visibility gap exists and collection, device, service, network, queue, storage, or permission state requires review.",
      "No activity occurred.",
      "The user deleted the logs.",
      "The device is compromised.",
    ],
    answer: 0,
    explanation:
      "Missing records confirm incomplete visibility, not the reason for it.",
  },
  {
    question:
      "Which statement is a reasonable conclusion rather than a confirmed fact?",
    choices: [
      "Repeated failures likely came from an old saved password because they stopped after the approved reset.",
      "The authentication service recorded two failed attempts.",
      "The MFA service recorded a successful challenge.",
      "The support ticket began at 09:00.",
    ],
    answer: 0,
    explanation:
      "The conclusion connects several facts but still includes interpretation.",
  },
  {
    question:
      "What should a professional log review include?",
    choices: [
      "Scope, sources, facts, conclusions, evidence gaps, confidence, limitations, owner, and safe next action.",
      "Only screenshots of high-severity events.",
      "Only the analyst's final opinion.",
      "Real usernames and internal addresses for realism.",
    ],
    answer: 0,
    explanation:
      "A professional review is transparent, evidence-based, privacy-protective, and actionable.",
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousPage}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Module Homepage
      </Link>
      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Intermediate Track
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function SourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Common Log Sources
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Different Systems Record Different Parts of the Story
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {sourceTypes.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">
              {item.source}
            </h3>

            <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900/80 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Created by
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                {item.createdBy}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Common events
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.commonEvents}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defenderQuestions}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Event Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read Every Log Field in Context
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {coreFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defender use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defenderUse}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Caution
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.caution}
              </p>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Strength
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Match the Conclusion to the Evidence
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {evidenceLevels.map((item, index) => (
          <div
            key={item.level}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-lg font-black text-cyan-100">
                {item.level}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.description}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-sm leading-6 text-blue-50">
              {item.example}
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Logs in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifecycleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Log Lifecycle
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Logs Move Through Six Stages
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {logLifecycle.map((item, index) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-lg font-black text-blue-100">
                {item.stage}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Review risk
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuestionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Analyst Questions
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions to Ask About Every Event
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reviewQuestions.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.question}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WhatLogsAreAndWhyTheyMatterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I4
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.1 What Logs Are and Why They Matter
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how systems record fictional events, how defenders use those
            records, what common fields mean, and why a log entry is a clue
            rather than an automatic conclusion.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="What Logs Are and Why They Matter"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that logs are records created by systems, applications, devices, services, and security controls.",
            "I understand that one log entry does not automatically prove intent, cause, impact, or complete compromise.",
            "I will preserve timestamp, source, user, device, process, service, action, result, severity, and correlation evidence.",
            "I will use only fictional logs, accounts, devices, applications, addresses, domains, paths, alerts, and organizations.",
            "I will not access, export, clear, alter, investigate, or publish any real log data without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Logs Help Defenders See What Systems Recorded"
        >
          <p className="leading-8">
            A sign-in, denied connection, application error, service restart,
            file action, DNS query, web request, or security alert can leave a
            record. Defenders use those records to reconstruct activity,
            troubleshoot failures, monitor systems, support investigations, and
            explain what is known and unknown.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The log says error, so the device must be compromised.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the recorded event, identify the source and fields,
                compare related evidence, add context, and state the limits of
                the conclusion.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Logs Create Visibility Across Many Systems"
        >
          <p className="leading-8">
            Without logs, defenders may know that something failed or changed
            but not when, where, under which identity, on which device, through
            which process, or with what result. Good logging does not answer
            every question, but it gives defenders evidence they can preserve,
            compare, and communicate.
          </p>
        </SectionCard>

        <SourceGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="A Log Record Has a Source, Fields, Context, and Limitations"
        >
          <p className="leading-8">
            Strong analysis begins by asking who created the record, what fields
            are present, what the event directly supports, what context changes
            its meaning, and what evidence is still missing.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              ["Source", "Which system, application, device, service, or control created it?"],
              ["Fields", "Which time, user, device, action, result, process, and network details are available?"],
              ["Context", "What role, owner, schedule, baseline, change, or business purpose applies?"],
              ["Limitations", "What can this source not prove by itself?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FieldGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <LifecycleGuide />
        <QuestionGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Log and Event Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Log Visibility Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services environment."
          metrics={[
            {
              label: "Active log sources",
              value: "8",
              note: "Authentication, system, application, firewall, DNS, web, endpoint, and change records are available.",
            },
            {
              label: "Collection gaps",
              value: "3",
              note: "One delayed endpoint source, one overwritten application segment, and one device with incomplete forwarding.",
            },
            {
              label: "Events reviewed",
              value: "146",
              note: "Thirty-two authentication, forty-one system, twenty-eight application, twenty-five network, and twenty security records.",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated Authentication Failures Follow an Approved Password Reset"
          severity="Medium"
          time="09:18 AM"
          source="Fake Identity Monitoring Platform"
          details="A fictional account produces four failed sign-ins from its usual laptop immediately after an approved password reset. The mail application reports an old stored credential, the user updates it, MFA succeeds, and no further failures occur."
          recommendation="Preserve authentication, application, MFA, change, support, and monitoring evidence; confirm the expected device and owner; document the stored-credential explanation with appropriate confidence; and monitor for additional failures."
        />

        <FakeLogPanel
          title="Fake Multi-Source Event Preview"
          logs={[
            "09:00:00 CHANGE account='training-user-4' action='password_reset' approved='true'",
            "09:02:11 AUTH account='training-user-4' result='failed' device='training-laptop-4'",
            "09:02:14 APPLICATION name='mail-client' result='stored_credential_rejected'",
            "09:02:25 AUTH account='training-user-4' result='failed' device='training-laptop-4'",
            "09:03:07 SUPPORT user_report='mail_password_not_updated'",
            "09:03:42 APPLICATION name='mail-client' action='credential_updated'",
            "09:03:51 AUTH account='training-user-4' result='success' device='training-laptop-4'",
            "09:03:55 MFA account='training-user-4' result='approved'",
            "09:04:02 APPLICATION name='mail-client' session='created'",
            "09:18:00 MONITOR additional_failures='0' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Is the Strongest Log-Based Conclusion?"
          evidence={[
            "An approved password reset occurred at 09:00.",
            "Four failed sign-ins came from the account's expected laptop.",
            "The mail application reported an old stored credential.",
            "The user reported that the mail password had not yet been updated.",
            "The stored credential was updated.",
            "Authentication then succeeded from the expected device.",
            "The MFA challenge was approved.",
            "No additional failures occurred during the next fourteen minutes.",
          ]}
          question="Which conclusion is best supported?"
          options={[
            "The failures most likely came from the mail application retrying an old saved password after the approved reset.",
            "The account was definitely stolen.",
            "The user intentionally attacked the identity system.",
            "The logs prove that no other activity occurred anywhere.",
          ]}
          bestAnswer={0}
          explanation="The change, authentication, application, support, MFA, and monitoring records support a stored-credential explanation without proving physical identity or every unrelated event."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Log Review"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build a Fictional Log Source Inventory"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Log Visibility Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review eight fictional sources: identity, Windows, Linux,
                application, firewall, DNS, web proxy, endpoint protection, and
                change records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Name the source and technical owner.</li>
                <li>Describe why the source creates logs.</li>
                <li>List the most useful event fields.</li>
                <li>Write three defensive questions the source can help answer.</li>
                <li>State two limitations of the source.</li>
                <li>Record collection, retention, and visibility gaps.</li>
                <li>Classify one supplied event as fact, conclusion, alternate explanation, or evidence gap.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not access, export, clear,
            modify, collect, search, or publish any real logs, account details,
            addresses, domains, paths, event messages, or internal system data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Critical Event Appears Without Supporting Context"
          scenario="A fictional application log contains one critical event stating that a database client stopped unexpectedly. No System, service, update, resource, or change records are included in the current evidence packet."
          choices={[
            {
              label: "Choice A",
              response:
                "Confirm the application-stop event, preserve the record, and request authorized surrounding System, service, update, resource, and change evidence before naming the cause.",
              outcome:
                "Best defensive choice. The event is real under the supplied record, but root cause remains unconfirmed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the database client corrupted.",
              outcome:
                "Unsupported. The critical event confirms a stop, not the cause.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the event because the evidence is incomplete.",
              outcome:
                "Weak response. The recorded failure still requires triage and additional evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Device Stops Sending Logs"
          scenario="A fictional centralized collector receives no events from training-win-19 for twenty minutes. Device-health monitoring still reports the workstation online, but forwarding-service status is unavailable."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat missing telemetry as confirmed, preserve collector and device-health evidence, and request authorized review of forwarding, network, queue, storage, time, permission, and local log state.",
              outcome:
                "Best defensive choice. The evidence confirms a visibility gap, not its cause.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that no events occurred on the device.",
              outcome:
                "Unsupported. Missing collection does not prove absence of local activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare that the user deleted the logs.",
              outcome:
                "Unsupported. Several technical collection problems remain possible.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="What Logs Are and Why They Matter Checklist"
          items={[
            "I identify the fictional log source, provider, system, application, device, service, or control.",
            "I record timestamp, event ID, user, device, process, service, action, result, severity, source, destination, and correlation data.",
            "I explain what the event directly proves and what it does not prove.",
            "I compare authentication, system, application, network, web, endpoint, and change records when available.",
            "I add asset, identity, application, network, time, historical, change, and human context.",
            "I document collection delay, retention, filtering, overwrite, missing fields, and other evidence gaps.",
            "I separate confirmed facts, corroborated facts, reasonable conclusions, alternate explanations, and unsupported claims.",
            "I preserve original supplied evidence and document any normalization or filtering.",
            "I assign an owner and safe authorized next action when more review is needed.",
            "I use only fictional evidence and never publish real identifying or security-sensitive log details.",
          ]}
        />

        <MiniQuiz
          title="I4.1 Mini Quiz: What Logs Are and Why They Matter"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Log Source Inventory covering eight sources: authentication, operating system, application, firewall or network, DNS, web or proxy, endpoint security, and change records. For each source, include owner, purpose, common events, useful fields, collection method, retention, three defensive questions, two limitations, one evidence gap, and one sample fictional event."
          tips={[
            "Use only fictional users, devices, addresses, domains, applications, event IDs, paths, alerts, and organizations.",
            "Clearly separate what each source can support from what it cannot prove alone.",
            "Include at least one source with delayed collection and one source with limited retention.",
            "Do not include real screenshots, logs, usernames, addresses, domains, paths, or internal event messages.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Logs are records created by systems, applications, devices, services, and security controls.",
            "Different log sources record different parts of the same technical and business story.",
            "Every event should be interpreted using source, fields, context, related evidence, and limitations.",
            "Severity, usernames, addresses, process names, and single events do not automatically prove intent or impact.",
            "Missing logs confirm a visibility gap, not the reason for that gap.",
            "Professional log review separates facts, conclusions, alternate explanations, evidence gaps, confidence, and safe next actions.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I4
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}