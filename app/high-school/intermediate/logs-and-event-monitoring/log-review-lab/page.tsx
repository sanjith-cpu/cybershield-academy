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
const previousLesson = `${modulePath}/building-a-simple-event-timeline`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Apply the complete fictional log-review workflow from scoping and source inventory through normalization, correlation, pattern analysis, timeline construction, findings, and safe recommendations.",
  "Interpret authentication, system, application, network, web, endpoint, change, support, and monitoring evidence as one connected defensive case.",
  "Separate confirmed facts, corroborated facts, reasonable conclusions, alternate explanations, evidence gaps, unsupported claims, confidence, impact, and residual risk.",
  "Prioritize findings using evidence strength, privilege, scope, persistence, business impact, control outcome, owner context, and time sensitivity.",
  "Create a professional fictional Multi-Source Log Review Report that is clear, reproducible, privacy-protective, and suitable for a student cybersecurity portfolio.",
];

const vocabulary = [
  ["Scope", "The systems, accounts, applications, time window, evidence sources, and defensive question included in a review."],
  ["Evidence packet", "The fictional collection of logs, tickets, inventories, diagrams, baselines, and owner statements supplied for analysis."],
  ["Source inventory", "A record of which evidence sources are available, who owns them, what they record, and what limitations apply."],
  ["Normalization", "The documented process of aligning timestamps, names, identities, fields, formats, and source labels."],
  ["Correlation", "Connecting related records using time, user, device, process, service, application, session, request, address, path, or ticket evidence."],
  ["Finding", "A clearly stated defensive conclusion supported by evidence, confidence, impact, limitations, ownership, and next action."],
  ["Confidence", "The reviewer’s stated certainty based on source quality, agreement, timing accuracy, completeness, and remaining gaps."],
  ["Impact", "The observed or potential effect on users, systems, applications, services, data, operations, or security controls."],
  ["Residual risk", "The risk that remains after immediate correction, containment, validation, or monitoring."],
  ["Escalation", "The approved process for transferring a finding to the appropriate owner or response team."],
  ["Validation", "Evidence that a correction, recovery, change, or control produced the intended result."],
  ["Executive summary", "A short explanation of what happened, why it matters, confidence, impact, and the most important next actions."],
];

const caseSnapshot = [
  {
    category: "Environment",
    detail: "Fictional Northstar Learning Services training environment with identity, Windows-style endpoint, application, DNS, firewall, proxy, endpoint protection, change, support, and monitoring records.",
  },
  {
    category: "Primary question",
    detail: "Did the repeated failures, unusual web request, endpoint alert, and application outage represent one connected security event or several separate operational patterns?",
  },
  {
    category: "Time window",
    detail: "08:00–10:30 UTC, including thirty minutes before the first alert and thirty minutes after recovery validation.",
  },
  {
    category: "Important assets",
    detail: "training-laptop-52, report-app-2, identity-platform, proxy-1, firewall-1, endpoint-monitor, and the fictional cloud-report service.",
  },
  {
    category: "Important identities",
    detail: "training-user-52, svc-report-training, support-owner-4, and application-owner-2.",
  },
  {
    category: "Safety boundary",
    detail: "All users, devices, addresses, domains, paths, event IDs, tickets, alerts, and organizations are fictional and used only for read-only defensive analysis.",
  },
];

const sourceInventory = [
  {
    source: "Identity platform",
    owner: "Identity team",
    usefulFor: "Password reset, sign-in success and failure, MFA, lockout, policy outcome, session creation, and account state.",
    limitations: "Does not prove physical identity, endpoint process, application purpose, or every later session action.",
  },
  {
    source: "Windows-style endpoint logs",
    owner: "Endpoint team",
    usefulFor: "Process, service, startup, update, local user, file, path, application, device health, and protection state.",
    limitations: "One six-minute segment is missing because the device was offline from the collector.",
  },
  {
    source: "Report application logs",
    owner: "Application team",
    usefulFor: "Report job, service identity, file access, configuration, database call, export request, error, and recovery.",
    limitations: "Uses local time and records only whole seconds.",
  },
  {
    source: "DNS logs",
    owner: "Network team",
    usefulFor: "Client, query, record type, answer, result, resolver, and request timing.",
    limitations: "A query does not prove a connection or user intent.",
  },
  {
    source: "Firewall and proxy logs",
    owner: "Network security team",
    usefulFor: "Connection decision, source, destination, port, protocol, method, path, response, bytes, duration, rule, and request ID.",
    limitations: "Shared gateway addresses can hide original client context from downstream sources.",
  },
  {
    source: "Endpoint protection logs",
    owner: "Security operations",
    usefulFor: "Detection, process, path, publisher, action, quarantine, device, user, and protection status.",
    limitations: "One alert name is generic and requires process, path, publisher, action, and related activity.",
  },
  {
    source: "Change and support records",
    owner: "Service management",
    usefulFor: "Approved password reset, software deployment, maintenance, owner, user report, expected result, rollback, and validation.",
    limitations: "Human-entered times are approximate and may not exactly match technical activity.",
  },
  {
    source: "Monitoring dashboard",
    owner: "Operations",
    usefulFor: "Alert timing, service health, error rate, authentication trend, transfer volume, and recovery validation.",
    limitations: "Dashboard labels summarize underlying records and should not replace source evidence.",
  },
];

const labPhases = [
  {
    phase: "Phase 1",
    title: "Define the scope and question",
    tasks: [
      "Identify the fictional systems, accounts, applications, time window, owners, and observed impact.",
      "Write one neutral review question that does not assume compromise, innocence, or one shared cause.",
      "Record the safety and privacy boundary before reading the evidence packet.",
    ],
    output: "A one-paragraph Scope Statement and one-sentence Primary Review Question.",
  },
  {
    phase: "Phase 2",
    title: "Inventory the evidence",
    tasks: [
      "List every available source, owner, time format, useful fields, retention condition, and known limitation.",
      "Mark missing sources, delayed batches, approximate human times, and absent request or session identifiers.",
      "Separate direct technical evidence from owner statements, tickets, dashboards, and baseline records.",
    ],
    output: "A complete Source Inventory with availability, value, and limitation columns.",
  },
  {
    phase: "Phase 3",
    title: "Normalize time and fields",
    tasks: [
      "Preserve original timestamps and convert all events to fictional UTC.",
      "Document the report application’s two-minute slow clock and the endpoint collector delay.",
      "Align device names, users, application names, paths, addresses, domains, source labels, and request IDs.",
    ],
    output: "A Normalization Log showing each transformation and its confidence.",
  },
  {
    phase: "Phase 4",
    title: "Build the event timeline",
    tasks: [
      "Place all relevant records in normalized time order.",
      "Correlate using account, device, process, service, path, application, destination, request ID, and ticket evidence.",
      "Mark order and relationship as confirmed, likely, uncertain, parallel, or unsupported.",
    ],
    output: "A twenty-four-event Multi-Source Timeline with meaning and limitation notes.",
  },
  {
    phase: "Phase 5",
    title: "Analyze patterns and findings",
    tasks: [
      "Compare failures, rare requests, endpoint alerts, application errors, and transfers with approved baselines.",
      "Separate one connected sequence from unrelated or parallel activity.",
      "Write facts, conclusions, alternate explanations, evidence gaps, confidence, impact, and priority.",
    ],
    output: "A Finding Matrix with classification, confidence, owner, and next action.",
  },
  {
    phase: "Phase 6",
    title: "Recommend and validate",
    tasks: [
      "Recommend only narrow, authorized, reversible defensive actions supported by the evidence.",
      "Assign owners, validation steps, monitoring, rollback, and residual-risk statements.",
      "Create an executive summary that protects fictional privacy and avoids unsupported claims.",
    ],
    output: "A final Multi-Source Log Review Report and Executive Summary.",
  },
];

const evidencePacket = [
  { id: "E01", time: "08:00:00", source: "Change", event: "Approved password reset begins for training-user-52.", directSupport: "The reset was authorized and had an assigned support owner.", limitation: "Does not prove that all applications immediately updated saved credentials." },
  { id: "E02", time: "08:02:11", source: "Identity", event: "Password reset completes successfully.", directSupport: "The identity platform recorded successful credential replacement.", limitation: "Does not prove the physical person or every later authentication event." },
  { id: "E03", time: "08:03:04", source: "Application", event: "Mail client reports stored credential rejected on training-laptop-52.", directSupport: "The application attempted a saved credential that was not accepted.", limitation: "The application record alone does not prove the identity reason code." },
  { id: "E04", time: "08:03:06", source: "Authentication", event: "Sign-in fails for training-user-52 from expected laptop.", directSupport: "The identity platform recorded an unsuccessful attempt from the expected device.", limitation: "The exact sub-second order with E03 is unavailable." },
  { id: "E05", time: "08:03:22", source: "Authentication", event: "Second sign-in failure from the same device and application.", directSupport: "The failure repeated under the same source context.", limitation: "No endpoint process record is available for this exact second." },
  { id: "E06", time: "08:04:02", source: "Support", event: "User reports the mail client still has the old password.", directSupport: "The report matches the application and authentication sequence.", limitation: "The time is approximate and user-provided." },
  { id: "E07", time: "08:04:28", source: "Application", event: "Stored mail credential updated.", directSupport: "The application configuration changed before successful authentication.", limitation: "Does not prove who physically entered the new value." },
  { id: "E08", time: "08:04:32", source: "Authentication", event: "Sign-in succeeds from the expected laptop.", directSupport: "The authentication workflow completed after the credential update.", limitation: "Success does not prove every later action was approved." },
  { id: "E09", time: "08:04:36", source: "MFA", event: "MFA challenge approved for session-5201.", directSupport: "An additional verification factor completed for the same session.", limitation: "Does not prove the user understood every later application action." },
  { id: "E10", time: "08:04:41", source: "Application", event: "Mail session created successfully.", directSupport: "The application created a session after authentication and MFA.", limitation: "Does not list every activity inside the session." },
  { id: "E11", time: "08:20:00", source: "Change", event: "Approved report application update begins.", directSupport: "The deployment has an owner, maintenance window, test, and rollback plan.", limitation: "Does not prove the technical implementation matched the plan." },
  { id: "E12", time: "08:24:13", source: "Update", event: "Report application package installs successfully; restart required.", directSupport: "The installation completed but the intended running state may not yet be active.", limitation: "Installed does not mean validated." },
  { id: "E13", time: "08:31:05", source: "Application", event: "Report module returns access denied for a configuration file.", directSupport: "The application could not read the named fictional configuration path.", limitation: "The application record does not identify who changed the permission." },
  { id: "E14", time: "08:31:06", source: "System", event: "svc-report-training receives access denied on the same path.", directSupport: "A second source corroborates the permission failure.", limitation: "Does not prove whether the update caused the permission state." },
  { id: "E15", time: "08:33:00", source: "Permission review", event: "Required inherited read permission is missing after package installation.", directSupport: "The service identity lacks the access required by the report module.", limitation: "The review shows current state, not the exact moment or actor that changed it." },
  { id: "E16", time: "08:36:00", source: "Approved change", event: "Required read permission restored with rollback prepared.", directSupport: "A narrow authorized correction was applied.", limitation: "Recovery still requires functional validation and recurrence monitoring." },
  { id: "E17", time: "08:36:18", source: "Application", event: "Report module opens the configuration file successfully.", directSupport: "The immediate application function works after the correction.", limitation: "Does not prove every report workflow is healthy." },
  { id: "E18", time: "08:45:00", source: "Monitoring", event: "No additional access-denied errors; owner validation passes.", directSupport: "The observed error pattern stopped and the owner confirms the required function.", limitation: "Longer-term monitoring remains necessary." },
  { id: "E19", time: "09:05:14", source: "DNS", event: "training-laptop-52 requests cdn.training-update.test.", directSupport: "The laptop or one of its applications requested resolution for the fictional name.", limitation: "Does not prove a connection, user intent, or content." },
  { id: "E20", time: "09:05:16", source: "Endpoint", event: "Approved browser process requests the same destination.", directSupport: "The DNS activity is connected to the expected browser and user session.", limitation: "Does not prove what content the user viewed." },
  { id: "E21", time: "09:05:17", source: "Proxy", event: "GET request to /training-assets returns success under approved category.", directSupport: "The proxy allowed a web request from the expected user and browser.", limitation: "A successful response does not prove the user completed any business action." },
  { id: "E22", time: "09:07:30", source: "Endpoint protection", event: "Generic alert on cached training archive; file quarantined before execution.", directSupport: "The endpoint tool detected and quarantined the supplied fictional file.", limitation: "The generic alert name does not prove compromise or execution." },
  { id: "E23", time: "09:07:32", source: "Endpoint", event: "No process execution or persistence event follows the quarantine.", directSupport: "No supplied endpoint evidence shows execution or persistence.", limitation: "The conclusion applies only to available telemetry and the review window." },
  { id: "E24", time: "09:20:00", source: "Monitoring", event: "No related alerts, sessions, network connections, or additional files appear.", directSupport: "The observed pattern remains limited and contained under the available evidence.", limitation: "Continued monitoring is still appropriate." },
];


const findings = [
  {
    id: "F1",
    title: "Mail authentication failures after approved password reset",
    classification: "Expected failure pattern",
    confidence: "High",
    facts: "Approved reset, expected laptop, stored credential rejection, user report, credential update, later sign-in success, MFA approval, and no additional failures.",
    conclusion: "The failures most likely came from the mail client retrying an old saved password.",
    alternate: "A separate automated application retry could have contributed, but no conflicting source is supplied.",
    impact: "Temporary mail access disruption for one fictional user.",
    action: "Document the stale credential, confirm recovery, and monitor for recurrence.",
  },
  {
    id: "F2",
    title: "Report application access denied after approved update",
    classification: "Operational configuration failure",
    confidence: "High",
    facts: "Approved deployment, successful package install, matching application and system access-denied events, missing required read access, narrow restoration, and successful validation.",
    conclusion: "Missing required read permission most likely caused the report module failure.",
    alternate: "The update may have contributed to the permission state, but the exact actor and mechanism are not directly recorded.",
    impact: "Short report-generation outage during the maintenance window.",
    action: "Close the immediate outage after monitoring, then review packaging and permission-preservation controls.",
  },
  {
    id: "F3",
    title: "Rare web request to fictional training content destination",
    classification: "Expected web activity",
    confidence: "High",
    facts: "Expected user session, approved browser, approved proxy category, training-assets path, successful response, and no concerning related activity.",
    conclusion: "The request most likely represents approved training content delivery.",
    alternate: "The exact user intent and viewed content are not established by metadata alone.",
    impact: "No observed operational or security impact.",
    action: "Document the approved context and continue routine monitoring.",
  },
  {
    id: "F4",
    title: "Generic endpoint alert on cached archive",
    classification: "Contained alert requiring documentation",
    confidence: "Medium",
    facts: "The fictional file was detected and quarantined before execution, with no later process, persistence, session, connection, or related alert evidence.",
    conclusion: "The available evidence supports successful prevention and containment rather than confirmed device compromise.",
    alternate: "The missing endpoint segment prevents absolute certainty about unrelated activity before collection resumed.",
    impact: "One cached file removed; no confirmed execution or persistence.",
    action: "Preserve alert details, confirm protection state, validate no recurrence, and document the telemetry gap.",
  },
  {
    id: "F5",
    title: "Relationship among the four observed patterns",
    classification: "Separate and partially parallel events",
    confidence: "High",
    facts: "The authentication issue, application permission failure, approved web request, and contained endpoint alert involve different times, processes, owners, causes, and evidence chains.",
    conclusion: "The evidence does not support one connected security incident.",
    alternate: "A hidden relationship is theoretically possible, but no shared session, process, request, destination, path, or change evidence supports it.",
    impact: "Two operational issues, one expected web request, and one contained security alert.",
    action: "Track each finding under its correct owner and avoid merging unrelated events into one incident narrative.",
  },
];

const prioritizationMatrix = [
  { finding: "F1 Mail authentication failures", evidence: "Strong", impact: "Low", privilege: "Standard user", persistence: "Stopped after correction", priority: "Routine documentation" },
  { finding: "F2 Report application outage", evidence: "Strong", impact: "Moderate", privilege: "Service identity", persistence: "Stopped after approved correction", priority: "Operational follow-up" },
  { finding: "F3 Training-content web request", evidence: "Strong", impact: "None observed", privilege: "Standard user", persistence: "Single expected request", priority: "Routine monitoring" },
  { finding: "F4 Contained endpoint alert", evidence: "Moderate", impact: "Low under available evidence", privilege: "Standard user", persistence: "No recurrence observed", priority: "Security documentation and validation" },
  { finding: "F5 Combined-incident theory", evidence: "Weak", impact: "Would be broad if true", privilege: "Mixed", persistence: "No shared sequence", priority: "Reject unsupported merger" },
];

const reportSections = [
  {
    section: "Executive summary",
    include: "Primary question, overall conclusion, highest-priority findings, confidence, impact, and immediate next actions.",
    avoid: "Technical overload, unsupported blame, or claims that every event was connected.",
  },
  {
    section: "Scope and safety boundary",
    include: "Systems, accounts, applications, time window, owners, supplied evidence, exclusions, and fictional-data statement.",
    avoid: "Suggesting the review covered real systems or evidence outside the supplied packet.",
  },
  {
    section: "Source inventory",
    include: "Source, owner, useful fields, time format, retention, collection state, and limitation.",
    avoid: "Treating dashboards or alert labels as substitutes for original records.",
  },
  {
    section: "Normalization notes",
    include: "Original values, UTC conversion, known clock offset, collection delay, name mapping, field alignment, and assumptions.",
    avoid: "Changing evidence silently or removing the original source values.",
  },
  {
    section: "Event timeline",
    include: "Normalized time, source, event, related entity, evidence status, meaning, limitation, and correlation key.",
    avoid: "Using time proximity as automatic proof of causation.",
  },
  {
    section: "Findings",
    include: "Facts, conclusion, alternates, gaps, confidence, impact, priority, owner, and safe next action.",
    avoid: "Mixing facts and conclusions or hiding uncertainty.",
  },
  {
    section: "Recommendations",
    include: "Authorized owner, narrow action, rollback, validation, monitoring, documentation, and baseline improvement.",
    avoid: "Disruptive changes that are broader than the evidence supports.",
  },
  {
    section: "Residual risk and closure",
    include: "What remains unknown, what will be monitored, closure criteria, and when the finding should be reopened.",
    avoid: "Claiming permanent resolution without sufficient monitoring.",
  },
];

const commonMistakes = [
  "Starting with a conclusion instead of a neutral review question.",
  "Treating every event in the same time window as one connected incident.",
  "Using only dashboard labels instead of the underlying source records.",
  "Overwriting original timestamps during normalization.",
  "Ignoring clock offset, collection delay, precision, or approximate human times.",
  "Treating a username, device, address, process name, path, or severity label as proof by itself.",
  "Failing to separate direct facts, reasonable conclusions, alternate explanations, and evidence gaps.",
  "Ignoring recovery, validation, owner confirmation, and residual risk.",
  "Assigning high confidence when key sources are missing or conflicting.",
  "Recommending broad account, service, firewall, or permission changes without dependency and rollback context.",
  "Combining operational failures and security alerts without shared evidence.",
  "Publishing real logs, addresses, domains, users, devices, paths, tickets, alerts, or internal system details.",
];

const quizQuestions = [
  {
    question: "What is the best first step in a multi-source log review?",
    choices: [
      "Define a neutral scope and review question before deciding what happened.",
      "Choose the highest-severity alert as the root cause.",
      "Assume all events are connected.",
      "Remove incomplete records.",
    ],
    answer: 0,
    explanation: "A neutral question prevents confirmation bias and keeps the review evidence-based.",
  },
  {
    question: "Why is a source inventory important?",
    choices: [
      "It records what evidence exists, who owns it, what it can answer, and what limitations apply.",
      "It proves every event is accurate.",
      "It replaces normalization.",
      "It removes the need for owner context.",
    ],
    answer: 0,
    explanation: "Source quality, coverage, timing, ownership, and limitations shape the review.",
  },
  {
    question: "What is the strongest conclusion about the authentication failures in the lab?",
    choices: [
      "They most likely came from an old stored mail credential after the approved password reset.",
      "The account was definitely compromised.",
      "The user intentionally caused the failures.",
      "The identity platform failed completely.",
    ],
    answer: 0,
    explanation: "Change, application, authentication, support, MFA, and monitoring evidence support the stale-credential explanation.",
  },
  {
    question: "Why should the web request and endpoint alert not automatically be merged?",
    choices: [
      "They require shared process, session, request, destination, file, or other evidence before one causal chain is claimed.",
      "Events from different sources can never be related.",
      "Endpoint alerts are always false positives.",
      "Web traffic is never relevant to endpoint evidence.",
    ],
    answer: 0,
    explanation: "Time proximity alone does not prove one connected sequence.",
  },
  {
    question: "What does quarantine before execution support?",
    choices: [
      "The security control acted before the supplied evidence shows execution.",
      "The device was definitely compromised.",
      "The user intentionally downloaded harmful content.",
      "No further validation is needed.",
    ],
    answer: 0,
    explanation: "The action supports prevention and containment, while evidence limits and monitoring still matter.",
  },
  {
    question: "Which recommendation is strongest after the application permission failure?",
    choices: [
      "Validate the narrow authorized permission restoration, monitor recurrence, and review packaging controls.",
      "Give the service identity full control.",
      "Remove all permissions from the application folder.",
      "Disable the update service.",
    ],
    answer: 0,
    explanation: "The recommendation should be narrow, owned, reversible, validated, and connected to the supported cause.",
  },
  {
    question: "What belongs in the final executive summary?",
    choices: [
      "Primary question, overall conclusion, key findings, confidence, impact, and most important next actions.",
      "Every raw log line.",
      "Only the highest-severity label.",
      "Real account and network details.",
    ],
    answer: 0,
    explanation: "An executive summary communicates the result without hiding confidence or overwhelming the reader.",
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
        Module Test
      </Link>
    </div>
  );
}

function SnapshotGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Case Snapshot</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Understand the Fictional Review Before Reading the Events</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {caseSnapshot.map((item) => (
          <div key={item.category} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.category}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InventoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Source Inventory</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Know What Each Evidence Source Can and Cannot Answer</h2>
      <div className="mt-6 grid gap-4">
        {sourceInventory.map((item) => (
          <div key={item.source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_0.45fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Source</p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Owner</p>
              <p className="mt-2 text-sm font-semibold text-blue-200">{item.owner}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Useful for</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.usefulFor}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitations</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitations}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LabPhaseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Lab Workflow</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Complete the Review in Six Phases</h2>
      <div className="mt-6 grid gap-5">
        {labPhases.map((item) => (
          <div key={item.phase} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="grid gap-5 lg:grid-cols-[0.3fr_0.8fr_1.5fr_1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">{item.phase}</p>
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{item.title}</h3>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Required tasks</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {item.tasks.map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Required output</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.output}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidencePacketGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fictional Evidence Packet</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Twenty-Four Events for Multi-Source Review</h2>
      <div className="mt-6 grid gap-4">
        {evidencePacket.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="grid gap-4 lg:grid-cols-[0.2fr_0.45fr_0.45fr_1.2fr_1fr_1fr]">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">ID</p><p className="mt-2 font-black text-cyan-300">{item.id}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Time</p><p className="mt-2 font-mono text-sm text-slate-200">{item.time}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Source</p><p className="mt-2 text-sm font-black text-blue-200">{item.source}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Event</p><p className="mt-2 text-sm font-semibold text-white">{item.event}</p></div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Direct support</p><p className="mt-2 text-sm leading-6 text-emerald-50">{item.directSupport}</p></div>
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p><p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function FindingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Finding Matrix</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Five Evidence-Based Findings</h2>
      <div className="mt-6 grid gap-5">
        {findings.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-cyan-300">{item.id}</p>
                <h3 className="mt-1 text-xl font-black text-white">{item.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black text-blue-200">{item.classification}</span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">{item.confidence} confidence</span>
              </div>
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Confirmed facts</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{item.facts}</p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Best-supported conclusion</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.conclusion}</p>
              </div>
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Alternate or limitation</p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">{item.alternate}</p>
              </div>
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Impact and action</p>
                <p className="mt-2 text-sm leading-6 text-blue-50"><span className="font-black">Impact:</span> {item.impact}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50"><span className="font-black">Action:</span> {item.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PriorityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Prioritization Matrix</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Prioritize by Evidence, Impact, Privilege, and Persistence</h2>
      <div className="mt-6 grid gap-4">
        {prioritizationMatrix.map((item) => (
          <div key={item.finding} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[1.2fr_0.6fr_0.7fr_0.8fr_1fr]">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Finding</p><p className="mt-2 font-black text-white">{item.finding}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Evidence</p><p className="mt-2 text-sm font-semibold text-cyan-100">{item.evidence}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Impact</p><p className="mt-2 text-sm text-slate-200">{item.impact}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Privilege and persistence</p><p className="mt-2 text-sm text-slate-200">{item.privilege}; {item.persistence}</p></div>
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Priority</p><p className="mt-2 text-sm font-black text-emerald-50">{item.priority}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReportGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Final Report Structure</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Eight Sections of a Professional Log Review Report</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reportSections.map((item) => (
          <div key={item.section} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.section}</h3>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Include</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.include}</p>
            </div>
            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">Avoid</p>
              <p className="mt-2 text-sm leading-6 text-red-50">{item.avoid}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LogReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I4</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 8 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">I4.8 Log Review Lab</h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Apply the full Module I4 workflow to a fictional multi-source case: define scope, inventory evidence, normalize timestamps, correlate events, classify patterns, build findings, prioritize action, and write a professional defensive report.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="Log Review Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that the review question must remain neutral until the evidence supports a conclusion.",
            "I will preserve original fictional timestamps, messages, fields, source labels, and collection details.",
            "I will separate authentication, application, network, endpoint, operational, and change evidence before deciding which events are connected.",
            "I will state confidence, limitations, alternate explanations, residual risk, and safe next actions.",
            "I will use only fictional users, devices, addresses, domains, paths, applications, alerts, tickets, and organizations.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Good Analyst Can Separate One Busy Time Window into Several Accurate Stories">
          <p className="leading-8">
            Multiple alerts can appear close together without sharing one cause. The professional task is not to force them into one dramatic incident. It is to determine which records belong together, which are parallel, which are expected, which require escalation, and which remain evidence-incomplete.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“Several alerts happened this morning, so they must be one coordinated attack.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Build separate evidence chains, test shared identifiers, compare owners and changes, classify relationships, and merge events only when the evidence supports it.”</p>
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

        <SectionCard eyebrow="Why This Matters" title="Integrated Log Review Turns Separate Technical Clues into Defensible Decisions">
          <p className="leading-8">
            Real defensive work often combines identity, endpoint, system, application, network, web, change, support, and monitoring evidence. The reviewer must explain what happened, what did not happen, what remains unknown, and what action is justified.
          </p>
        </SectionCard>

        <SnapshotGuide />
        <InventoryGuide />
        <LabPhaseGuide />

        <SectionCard eyebrow="Core Concept" title="Build Separate Evidence Chains Before Building One Final Narrative">
          <p className="leading-8">
            Begin with each observed pattern independently. Correlate only when time, account, device, process, service, application, request, destination, path, owner, or change evidence supports a relationship. This prevents operational failures, expected activity, and contained alerts from being merged incorrectly.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Scope", "What systems, accounts, applications, sources, and time window are included?"],
              ["Normalize", "Which timestamps, names, fields, and collection delays must be aligned?"],
              ["Correlate", "Which users, devices, processes, sessions, requests, paths, destinations, and tickets connect?"],
              ["Evaluate", "Which facts, conclusions, alternates, gaps, confidence, impact, and priorities apply?"],
              ["Report", "Which owner, narrow action, validation, monitoring, and residual-risk statement are justified?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <EvidencePacketGuide />
        <FindingGuide />
        <PriorityGuide />
        <ReportGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Integrated Log Review Terms</h2>
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
          title="Fake Multi-Source Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services lab case."
          metrics={[
            { label: "Evidence sources", value: "8", note: "Identity, endpoint, application, DNS, firewall and proxy, protection, change and support, and monitoring records." },
            { label: "Events reviewed", value: "24", note: "Four evidence chains were analyzed across authentication, application, web, endpoint, and operational activity." },
            { label: "Final findings", value: "5", note: "Two operational findings, one expected web pattern, one contained security alert, and one relationship finding." },
          ]}
        />

        <FakeAlertCard
          title="Multiple Alerts Occur During the Same Morning Review Window"
          severity="High"
          time="09:25 AM"
          source="Fake Correlation Dashboard"
          details="Authentication failures, an application outage, a rare web request, and an endpoint alert appear in the same review window. Initial dashboard grouping suggests one incident, but source-level evidence shows separate accounts, processes, owners, destinations, paths, and causes."
          recommendation="Preserve each evidence chain, normalize time, compare shared identifiers, separate operational and security findings, reject unsupported event merging, assign the correct owners, and document the final relationship conclusion."
        />

        <FakeLogPanel
          title="Fake Integrated Evidence Summary"
          logs={[
            "08:00:00 CHANGE account='training-user-52' action='password_reset_started' approved='true'",
            "08:03:04 APPLICATION device='training-laptop-52' event='stored_credential_rejected'",
            "08:04:32 AUTH account='training-user-52' result='success' after='credential_update'",
            "08:20:00 CHANGE app='report-app-2' action='approved_update_started'",
            "08:31:05 APPLICATION component='report-module' result='access_denied'",
            "08:36:18 APPLICATION component='report-module' result='configuration_opened'",
            "09:05:14 DNS client='training-laptop-52' query='cdn.training-update.test'",
            "09:05:17 PROXY method='GET' path='/training-assets' result='success'",
            "09:07:30 ENDPOINT alert='generic_archive_detection' action='quarantined_before_execution'",
            "09:20:00 MONITOR related_execution='0' persistence='0' additional_alerts='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should the Four Observed Patterns Be Treated as One Incident?"
          evidence={[
            "The authentication failures are tied to an approved password reset and stale mail credential.",
            "The application outage is tied to missing required read permission after an approved update.",
            "The web request uses the approved browser, training-content destination, and allowed proxy category.",
            "The endpoint alert involves a cached fictional archive quarantined before execution.",
            "The four patterns occur at different times.",
            "They do not share one process, request ID, session, path, destination, or technical cause.",
            "They have different owners and recovery actions.",
            "No supplied evidence links them into one causal chain.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The evidence supports several separate or parallel events rather than one connected security incident.",
            "All alerts in the same morning must be one coordinated attack.",
            "The endpoint alert caused the earlier password failures.",
            "The application update caused the later web request.",
          ]}
          bestAnswer={0}
          explanation="Time proximity is insufficient. Different evidence chains, owners, causes, paths, destinations, and recovery actions support separate findings."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken an Integrated Log Review">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Hands-On Lab" title="Complete the Full Fictional Log Review">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Required Deliverables</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-300">
                <li>Scope Statement and Primary Review Question</li>
                <li>Source Inventory</li>
                <li>Normalization Log</li>
                <li>Twenty-Four-Event Timeline</li>
                <li>Pattern and Finding Matrix</li>
                <li>Prioritization Matrix</li>
                <li>Recommendations and Validation Plan</li>
                <li>Executive Summary</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Completion Standard</p>
              <ul className="mt-4 space-y-2 leading-7">
                <li>• Every conclusion cites at least two supporting fictional sources when available.</li>
                <li>• Every finding includes confidence, impact, owner, limitation, and safe next action.</li>
                <li>• Original evidence remains visible beside normalized values.</li>
                <li>• Separate events are not merged without shared evidence.</li>
                <li>• The report contains no real identifiers, logs, screenshots, or internal data.</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional evidence packet. Do not access real logs, test credentials, trigger alerts, inspect private activity, capture traffic, change permissions, alter services, visit real domains, or publish real users, devices, addresses, paths, tickets, screenshots, or internal system details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Dashboard Groups All Four Patterns into One Incident"
          scenario="A fictional dashboard automatically groups authentication failures, an application error, a web request, and an endpoint alert because they occur within ninety minutes on the same laptop."
          choices={[
            {
              label: "Choice A",
              response: "Treat the grouping as a review lead, preserve the source records, compare shared sessions, processes, paths, destinations, owners, and changes, and separate the findings when the evidence does not support one causal chain.",
              outcome: "Best defensive choice. Automated grouping can help review but does not prove one incident.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Accept the dashboard grouping as final proof.",
              outcome: "Unsupported. Dashboard correlation is a hypothesis that requires source-level validation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the dashboard completely.",
              outcome: "Weak response. The grouping is still a useful review lead.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="One Endpoint Segment Is Missing"
          scenario="The fictional endpoint collector has no events from 09:00 to 09:06 because the laptop was briefly offline. DNS and proxy evidence still show the training-content request during that period."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the DNS and proxy facts, document the endpoint visibility gap, lower confidence about local process details, and avoid claiming more than the available evidence supports.",
              outcome: "Best defensive choice. Missing telemetry limits confidence but does not erase other confirmed records.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Assume no endpoint activity occurred.",
              outcome: "Unsupported. Missing collection does not prove absence of local activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Invent the most likely process to complete the timeline.",
              outcome: "Unsafe. Missing evidence must never be fabricated.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Log Review Lab Checklist"
          items={[
            "I begin with a neutral fictional scope and review question.",
            "I inventory every available source, owner, useful field, time format, collection condition, and limitation.",
            "I preserve original timestamps, messages, fields, source labels, and event identifiers.",
            "I document every time conversion, clock offset, collection delay, name mapping, and field normalization.",
            "I build separate authentication, application, web, endpoint, operational, and change evidence chains.",
            "I correlate only when shared users, devices, processes, services, sessions, requests, paths, destinations, or tickets support the relationship.",
            "I separate confirmed facts, corroborated facts, reasonable conclusions, alternate explanations, evidence gaps, and unsupported claims.",
            "I assign classification, confidence, impact, priority, owner, safe action, validation, monitoring, and residual risk to every finding.",
            "I reject unsupported incident merging and explain why separate events remain separate or parallel.",
            "I use only fictional evidence and never publish real logs, users, devices, addresses, domains, paths, alerts, tickets, screenshots, or internal system details.",
          ]}
        />

        <MiniQuiz title="I4.8 Mini Quiz: Log Review Lab" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a complete fictional Multi-Source Log Review Report for the I4.8 case. Include an executive summary, scope statement, source inventory, normalization log, twenty-four-event timeline, five-finding matrix, prioritization matrix, evidence gaps, confidence statements, impact, owners, authorized recommendations, validation plan, monitoring plan, residual risk, and closure criteria."
          tips={[
            "Use only fictional users, devices, addresses, domains, paths, event IDs, alerts, tickets, applications, and organizations.",
            "Show which records belong to the same evidence chain and which remain separate or parallel.",
            "Include original timestamps beside normalized values and document the known application clock offset and endpoint collection gap.",
            "Do not include real logs, screenshots, usernames, device names, addresses, domains, paths, request IDs, alerts, tickets, or internal security details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Integrated log review begins with a neutral question, complete source inventory, and preserved original evidence.",
            "Multiple events in one time window do not automatically form one incident.",
            "Separate evidence chains should be merged only when shared technical and business context supports the relationship.",
            "Strong findings include facts, conclusions, alternates, gaps, confidence, impact, priority, owner, and safe next action.",
            "Operational failures, expected activity, and contained security alerts may require different owners and response paths.",
            "A professional final report is reproducible, privacy-protective, honest about uncertainty, and focused on defensible action.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Complete Module I4</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}