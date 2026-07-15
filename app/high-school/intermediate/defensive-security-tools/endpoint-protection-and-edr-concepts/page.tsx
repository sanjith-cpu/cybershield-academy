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
const modulePath = `${trackPath}/defensive-security-tools`;
const previousLesson = `${modulePath}/defensive-tooling-and-safe-use`;
const nextLesson = `${modulePath}/firewalls-and-network-security-tools`;

const objectives = [
  "Explain the purpose and limitations of endpoint protection and endpoint detection and response tools.",
  "Interpret fictional endpoint alerts using device, user, process, parent process, path, publisher, file, service, network, action, and timeline context.",
  "Distinguish detection, prevention, quarantine, isolation, process termination, remediation, recovery, and validation.",
  "Evaluate whether a fictional endpoint event represents expected software behavior, an operational issue, a contained alert, a suspicious pattern, or evidence-incomplete activity.",
  "Create a professional fictional Endpoint Alert Review Report with confirmed facts, limitations, confidence, impact, ownership, and safe next actions.",
];

const vocabulary = [
  ["Endpoint", "A user device, workstation, server, kiosk, laptop, or other managed system protected by security controls."],
  ["Endpoint protection", "A tool category focused on preventing, detecting, blocking, and recording unsafe or policy-violating activity on devices."],
  ["EDR", "Endpoint detection and response, which provides detailed endpoint visibility, investigation context, and authorized response capabilities."],
  ["Detection", "A tool observation that matched configured logic or analysis and produced a recorded event or alert."],
  ["Prevention", "A control action that blocked or stopped activity before or during execution."],
  ["Quarantine", "Moving or restricting a file so it cannot be used normally while it is reviewed."],
  ["Isolation", "Restricting a device's network communication through an approved response action."],
  ["Remediation", "An authorized action intended to correct or reduce a confirmed problem."],
  ["Parent process", "The process that created or launched another process."],
  ["Publisher", "The fictional software organization or signer associated with an executable or package."],
  ["Persistence", "A mechanism that allows software or a process to continue or return after restart, sign-in, or interruption."],
  ["Protection state", "The current status of endpoint controls, updates, policies, agents, and prevention features."],
];

const endpointEvidenceFields = [
  {
    field: "Device",
    meaning:
      "The fictional endpoint name, identifier, operating system, owner, role, management state, and sensitivity.",
    use:
      "Compare the alert with asset inventory, expected software, user assignment, exposure, and business function.",
    caution:
      "A device name alone may be stale, reused, or incomplete.",
  },
  {
    field: "User or account",
    meaning:
      "The account active during the process, file, service, sign-in, or alert event.",
    use:
      "Add role, privilege, expected device, application use, schedule, and account lifecycle context.",
    caution:
      "An account does not automatically prove the physical person.",
  },
  {
    field: "Process",
    meaning:
      "The fictional executable, command, service, script host, application, or component involved.",
    use:
      "Review path, publisher, parent, child activity, arguments, owner, and expected purpose.",
    caution:
      "A familiar process name does not prove the expected path, publisher, or behavior.",
  },
  {
    field: "Parent and child process",
    meaning:
      "The relationship between the process that launched and the process that was created.",
    use:
      "Understand the application workflow and whether the relationship matches approved software behavior.",
    caution:
      "One unusual parent-child relationship is a review clue, not a final conclusion.",
  },
  {
    field: "Path",
    meaning:
      "The fictional file-system location of an executable, file, library, configuration, or startup item.",
    use:
      "Compare the location with approved installation folders, user-writable areas, temporary locations, and change records.",
    caution:
      "A path does not prove publisher, content, or execution by itself.",
  },
  {
    field: "Publisher or signature",
    meaning:
      "The source-defined signer, publisher, package identity, or trust result associated with the file.",
    use:
      "Compare with inventory, deployment, package, owner, and application records.",
    caution:
      "A valid publisher does not guarantee that every file or action is safe or approved.",
  },
  {
    field: "Action",
    meaning:
      "Observed, allowed, blocked, prevented, quarantined, terminated, isolated, removed, or another tool-defined response.",
    use:
      "Determine what the control actually did and what further validation is required.",
    caution:
      "A prevention action does not automatically prove complete containment or zero impact.",
  },
  {
    field: "Severity and confidence",
    meaning:
      "The tool's assigned importance and certainty under its own model or rule.",
    use:
      "Prioritize review while preserving source-specific meaning.",
    caution:
      "Severity and confidence are not substitutes for source evidence, scope, or business impact.",
  },
  {
    field: "Network activity",
    meaning:
      "The fictional destinations, ports, protocols, connections, DNS requests, bytes, and timing associated with a process.",
    use:
      "Connect local behavior with firewall, proxy, DNS, flow, and application evidence.",
    caution:
      "A connection alone does not prove content, intent, or unsafe purpose.",
  },
  {
    field: "Timeline",
    meaning:
      "The ordered fictional process, file, service, account, network, alert, action, change, and recovery events.",
    use:
      "Separate what occurred before, during, and after the alert.",
    caution:
      "Endpoint collection delay, missing telemetry, or clock differences can affect sequence confidence.",
  },
];

const endpointToolLayers = [
  {
    layer: "Prevention layer",
    purpose:
      "Block known or strongly matched unsafe files, processes, behaviors, or policy violations before or during execution.",
    evidence:
      "Detection name, file or process, policy, action, result, time, device, user, and prevention state.",
    limitation:
      "Prevention can stop one observed behavior without proving there was no earlier or unrelated activity.",
  },
  {
    layer: "Behavioral detection",
    purpose:
      "Identify patterns such as unusual process relationships, persistence, credential access attempts, or unexpected system changes.",
    evidence:
      "Parent, child, path, user, process, event sequence, rule, severity, and correlated behavior.",
    limitation:
      "Behavior can be shared by administration, software deployment, troubleshooting, and unsafe activity.",
  },
  {
    layer: "Telemetry collection",
    purpose:
      "Record processes, files, services, users, network activity, alerts, protection changes, and device state.",
    evidence:
      "Detailed endpoint events that support timelines and correlation.",
    limitation:
      "Coverage depends on agent health, policy, retention, operating system support, and connectivity.",
  },
  {
    layer: "Investigation view",
    purpose:
      "Connect alerts, processes, files, users, devices, network activity, and related events for review.",
    evidence:
      "Entity relationships, timeline, alert grouping, scope, and source links.",
    limitation:
      "Automated grouping is a lead and may combine unrelated events.",
  },
  {
    layer: "Response actions",
    purpose:
      "Support approved quarantine, process termination, device isolation, session response, remediation, or evidence collection.",
    evidence:
      "Requested action, approver, time, result, device, owner, validation, and rollback or release state.",
    limitation:
      "Response actions can disrupt users and services and require explicit authorization.",
  },
  {
    layer: "Health and coverage",
    purpose:
      "Show agent status, policy state, last check-in, update level, data freshness, coverage, and protection condition.",
    evidence:
      "Agent version, service state, connectivity, policy assignment, last event, and update status.",
    limitation:
      "A healthy status does not guarantee complete detection logic or visibility into every activity.",
  },
];

const alertClassifications = [
  {
    label: "Expected software activity",
    evidence:
      "Approved package, expected path, known publisher, matching owner, deployment window, normal process tree, and no concerning follow-on behavior.",
    response:
      "Document the expected context, preserve evidence, avoid broad exclusions, and monitor the exact pattern.",
  },
  {
    label: "Operational issue",
    evidence:
      "Known application or service error, failed update, missing dependency, resource condition, or configuration problem with owner evidence.",
    response:
      "Assign the application or system owner, apply a controlled fix, validate function, and monitor recurrence.",
  },
  {
    label: "Contained alert",
    evidence:
      "The tool blocked or quarantined the supplied fictional activity before execution or impact, with no related persistence or follow-on behavior.",
    response:
      "Confirm protection state, preserve the action, review scope, validate no recurrence, and document evidence limitations.",
  },
  {
    label: "Suspicious endpoint pattern",
    evidence:
      "Multiple concerning signals such as unknown publisher, user-writable path, privileged account, unusual parent process, persistence, and unexplained network activity.",
    response:
      "Preserve evidence, verify through approved channels, escalate, and consider authorized containment based on impact and scope.",
  },
  {
    label: "Evidence-incomplete",
    evidence:
      "The alert exists, but process, path, publisher, action, device health, network, owner, or timeline evidence is missing.",
    response:
      "State confirmed facts, identify the gaps, lower confidence, and request authorized supporting evidence.",
  },
];

const evidenceMatrix = [
  {
    source: "Endpoint alert",
    supports:
      "The tool matched configured logic and recorded the displayed entities, severity, confidence, and action.",
    limitation:
      "Does not automatically prove execution, persistence, intent, impact, or full device compromise.",
  },
  {
    source: "Process event",
    supports:
      "A process started, stopped, created a child, or performed a recorded action under the shown account and device.",
    limitation:
      "A process name alone does not prove path, publisher, purpose, or safety.",
  },
  {
    source: "File event",
    supports:
      "A fictional file was created, modified, accessed, detected, quarantined, or removed.",
    limitation:
      "Does not always prove execution or user intent.",
  },
  {
    source: "Publisher and package evidence",
    supports:
      "The file or software matches a known fictional publisher, package, deployment, or application owner.",
    limitation:
      "Publisher evidence can be incomplete, outdated, or insufficient without path and behavior context.",
  },
  {
    source: "Network evidence",
    supports:
      "The process or device communicated with a recorded destination, port, protocol, and time.",
    limitation:
      "Does not prove content or malicious purpose.",
  },
  {
    source: "Protection action",
    supports:
      "The tool observed, blocked, quarantined, terminated, isolated, or remediated under its policy.",
    limitation:
      "Does not guarantee that all related activity was stopped or that the business function remains healthy.",
  },
  {
    source: "Tool-health record",
    supports:
      "Agent, service, policy, update, data freshness, and connectivity state.",
    limitation:
      "Healthy status does not prove complete telemetry or perfect detection.",
  },
  {
    source: "Change and owner evidence",
    supports:
      "Approved software, expected process, maintenance, business purpose, validation, and ownership.",
    limitation:
      "Documentation may differ from the exact technical state.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the alert question",
    detail:
      "Identify the fictional device, user, process, alert, time window, owner, and decision the review must support.",
  },
  {
    step: "2",
    title: "Preserve endpoint evidence",
    detail:
      "Capture the original alert, process tree, path, publisher, file, action, network, tool-health, and timeline records.",
  },
  {
    step: "3",
    title: "Add asset and change context",
    detail:
      "Compare inventory, owner, privilege, expected software, deployment, maintenance, user report, and application purpose.",
  },
  {
    step: "4",
    title: "Correlate related sources",
    detail:
      "Connect endpoint, authentication, system, application, DNS, firewall, proxy, ticket, and monitoring evidence.",
  },
  {
    step: "5",
    title: "Classify and prioritize",
    detail:
      "Choose expected, operational, contained, suspicious, or evidence-incomplete and state confidence and impact.",
  },
  {
    step: "6",
    title: "Respond and validate",
    detail:
      "Recommend the narrowest authorized action, verify protection and business function, monitor, and document residual risk.",
  },
];


const processTreeExamples = [
  {
    pattern: "Approved application launch",
    parent: "learning-portal.exe",
    child: "report-viewer.exe",
    supportingContext:
      "Expected path, approved publisher, known package, matching owner, standard user, and no unusual network activity.",
    interpretation:
      "The process relationship most likely represents normal application behavior.",
  },
  {
    pattern: "Software deployment helper",
    parent: "deployment-agent.exe",
    child: "study-client-installer.exe",
    supportingContext:
      "Approved change ticket, maintenance window, package identifier, expected publisher, and successful owner validation.",
    interpretation:
      "The relationship is expected administrative activity when the deployment evidence agrees.",
  },
  {
    pattern: "Service recovery",
    parent: "service-manager.exe",
    child: "report-service.exe",
    supportingContext:
      "Application failure, automatic recovery policy, service owner, matching system events, and successful validation.",
    interpretation:
      "The process start is part of an operational recovery sequence rather than proof of compromise.",
  },
  {
    pattern: "Unknown child from user-writable path",
    parent: "document-viewer.exe",
    child: "unknown-helper.exe",
    supportingContext:
      "Unapproved path, unknown publisher, privileged user, new persistence event, and unexplained outbound connection.",
    interpretation:
      "Multiple signals justify suspicious classification and prompt authorized escalation.",
  },
  {
    pattern: "Browser cache detection",
    parent: "approved-browser.exe",
    child: "none",
    supportingContext:
      "Cached fictional archive, quarantine before execution, no child process, no persistence, and no related connection.",
    interpretation:
      "The supplied evidence supports a contained alert with documented limitations.",
  },
  {
    pattern: "Scheduled maintenance script",
    parent: "task-service.exe",
    child: "maintenance-helper.exe",
    supportingContext:
      "Approved schedule, known service identity, expected path, signed script package, and named owner.",
    interpretation:
      "The activity is administrative when scope, timing, ownership, and results match.",
  },
];

const responseActions = [
  {
    action: "Observe",
    purpose:
      "Record the event without blocking, removing, terminating, or isolating.",
    risk:
      "The activity may continue if the alert represents a real concern.",
    validation:
      "Confirm tool health, source evidence, and whether additional related events appear.",
  },
  {
    action: "Block or prevent",
    purpose:
      "Stop the specific observed process, file, behavior, or policy violation.",
    risk:
      "A false positive can interrupt approved software or user work.",
    validation:
      "Confirm the action succeeded, required applications still function, and no related behavior continues.",
  },
  {
    action: "Quarantine",
    purpose:
      "Restrict a supplied fictional file from normal use while preserving evidence.",
    risk:
      "The file may be required by an approved application, or related files may remain.",
    validation:
      "Confirm the exact file, path, owner, application impact, protection state, and recurrence.",
  },
  {
    action: "Terminate process",
    purpose:
      "Stop a running process through an approved response action.",
    risk:
      "Terminating a system or application process can cause data loss or service interruption.",
    validation:
      "Confirm process state, application health, user impact, restart behavior, and related activity.",
  },
  {
    action: "Isolate device",
    purpose:
      "Restrict network communication while preserving approved response channels.",
    risk:
      "Isolation can interrupt classes, remote management, business services, and evidence collection.",
    validation:
      "Confirm authorization, device identity, isolation state, owner communication, evidence preservation, release plan, and recovery.",
  },
  {
    action: "Remediate",
    purpose:
      "Apply an authorized correction to remove or reduce a verified problem.",
    risk:
      "Broad remediation can modify files, settings, services, applications, or user data.",
    validation:
      "Confirm the intended correction, rollback readiness, required function, monitoring, and residual risk.",
  },
];

const healthChecks = [
  {
    check: "Agent service",
    question:
      "Is the fictional endpoint agent installed, running, connected, and reporting from the expected device?",
    gap:
      "An offline or stopped agent can create a visibility gap.",
  },
  {
    check: "Policy assignment",
    question:
      "Does the device have the intended prevention, detection, response, and collection policy?",
    gap:
      "A device can appear healthy while receiving the wrong policy.",
  },
  {
    check: "Update state",
    question:
      "Are the tool engine, signatures, behavioral model, and agent version current for the fictional environment?",
    gap:
      "Outdated protection can reduce detection quality or compatibility.",
  },
  {
    check: "Data freshness",
    question:
      "When did the tool last receive process, file, network, alert, and health telemetry?",
    gap:
      "Delayed data can make the timeline appear incomplete or out of order.",
  },
  {
    check: "Coverage",
    question:
      "Which devices, operating systems, users, applications, and event types are actually monitored?",
    gap:
      "Unmanaged systems and unsupported event types may remain invisible.",
  },
  {
    check: "Exclusions",
    question:
      "Which paths, processes, publishers, files, users, or behaviors are excluded from inspection or alerting?",
    gap:
      "Broad exclusions can create important blind spots.",
  },
  {
    check: "Response capability",
    question:
      "Which actions are available, approved, tested, and reversible in the fictional environment?",
    gap:
      "A visible action button does not mean the reviewer is authorized to use it.",
  },
  {
    check: "Retention",
    question:
      "How long are endpoint events, alerts, process trees, files, and response records retained?",
    gap:
      "Short retention can remove evidence needed for historical review.",
  },
];

const timeline = [
  {
    time: "13:00:00",
    source: "Change ticket",
    event:
      "Approved fictional study-client deployment begins on training-laptop-72.",
    meaning:
      "Provides package, publisher, owner, device, scope, time window, rollback, and validation context.",
  },
  {
    time: "13:03:14",
    source: "Deployment",
    event:
      "study-client-installer.exe starts from the approved package location.",
    meaning:
      "Confirms the expected installer and path under the deployment workflow.",
  },
  {
    time: "13:03:18",
    source: "Endpoint process",
    event:
      "deployment-agent.exe launches study-client-installer.exe.",
    meaning:
      "Shows the expected parent-child relationship for the approved deployment.",
  },
  {
    time: "13:03:22",
    source: "Endpoint alert",
    event:
      "Behavioral rule flags a new service registration.",
    meaning:
      "Confirms the rule triggered but does not determine whether the service is approved.",
  },
  {
    time: "13:03:24",
    source: "System",
    event:
      "StudyClientUpdate service is created with the approved application path.",
    meaning:
      "Corroborates the endpoint event and supplies service configuration context.",
  },
  {
    time: "13:04:00",
    source: "Publisher evidence",
    event:
      "Service executable matches Northstar Training Software package identity.",
    meaning:
      "Supports the approved software explanation when combined with path and change evidence.",
  },
  {
    time: "13:04:15",
    source: "Network",
    event:
      "Service connects only to approved-learning-service.test over HTTPS.",
    meaning:
      "Shows expected destination and service communication without proving content.",
  },
  {
    time: "13:05:10",
    source: "Endpoint action",
    event:
      "Alert remains observation-only; no block, quarantine, termination, or isolation occurs.",
    meaning:
      "Clarifies the tool response state.",
  },
  {
    time: "13:06:30",
    source: "Application validation",
    event:
      "Study client opens, updates, and displays the fictional training dashboard.",
    meaning:
      "Confirms required business function after installation.",
  },
  {
    time: "13:20:00",
    source: "Monitoring",
    event:
      "No additional alerts, persistence changes, unusual processes, or unexpected destinations appear.",
    meaning:
      "Supports expected deployment activity with high confidence.",
  },
];

const mistakes = [
  "Treating every endpoint alert as proof of device compromise.",
  "Using the alert name without reviewing process, parent, path, publisher, action, and timeline evidence.",
  "Assuming a familiar process name proves the expected executable or behavior.",
  "Treating quarantine as proof that execution or impact occurred.",
  "Treating no alert as proof that no concerning activity occurred.",
  "Ignoring agent health, policy assignment, updates, data freshness, exclusions, and retention.",
  "Grouping all endpoint events on one device into one incident without shared evidence.",
  "Using isolation, process termination, quarantine, or remediation without explicit authorization and impact review.",
  "Creating broad folder, publisher, process, or file exclusions to silence expected alerts.",
  "Ignoring application-owner, change, inventory, authentication, network, and system evidence.",
  "Closing the alert when the dashboard changes state without validating the device and required business function.",
  "Publishing real device names, users, paths, process trees, alerts, files, destinations, screenshots, or tool settings.",
];

const quizQuestions = [
  {
    question: "What does an endpoint alert directly prove?",
    choices: [
      "The tool matched configured logic and recorded the displayed endpoint evidence and action.",
      "The device is definitely compromised.",
      "The user acted intentionally.",
      "The alert caused every later event.",
    ],
    answer: 0,
    explanation:
      "An alert is a tool-generated evidence lead that still requires source and business context.",
  },
  {
    question: "Why is the parent process useful?",
    choices: [
      "It helps explain how a process was launched and whether the relationship matches an expected application workflow.",
      "It proves the child process is safe.",
      "It determines the physical user.",
      "It replaces path and publisher evidence.",
    ],
    answer: 0,
    explanation:
      "Parent-child relationships add context but do not provide a complete conclusion alone.",
  },
  {
    question: "What does quarantine before execution best support?",
    choices: [
      "The control restricted the supplied fictional file before the available evidence shows execution.",
      "The device was definitely compromised.",
      "The file created persistence.",
      "The user intended to run the file.",
    ],
    answer: 0,
    explanation:
      "The evidence supports prevention or containment, with scope and telemetry limitations still documented.",
  },
  {
    question: "Which combination most strongly supports expected deployment activity?",
    choices: [
      "Approved change, expected path, known publisher, matching package, expected parent process, owner validation, and no concerning follow-on behavior.",
      "A medium-severity alert by itself.",
      "A familiar filename by itself.",
      "A successful network connection by itself.",
    ],
    answer: 0,
    explanation:
      "Multiple independent technical and business sources support the expected explanation.",
  },
  {
    question: "Why should endpoint tool health be reviewed?",
    choices: [
      "Agent, policy, update, freshness, exclusion, and coverage gaps affect what the tool can observe and conclude.",
      "A healthy tool proves the device is safe.",
      "Tool health replaces source events.",
      "Only offline devices require health checks.",
    ],
    answer: 0,
    explanation:
      "Endpoint visibility depends on more than whether a dashboard shows the device as active.",
  },
  {
    question: "When is device isolation appropriate?",
    choices: [
      "When explicitly authorized after identity, impact, ownership, evidence, communication, validation, and release planning.",
      "Whenever any alert appears.",
      "Whenever a user is unavailable.",
      "Whenever the device is remote.",
    ],
    answer: 0,
    explanation:
      "Isolation is disruptive and requires controlled incident-response authority.",
  },
  {
    question: "What should happen after an endpoint action appears successful?",
    choices: [
      "Validate protection state, device health, required applications, related activity, monitoring, and residual risk.",
      "Delete the evidence.",
      "Assume permanent resolution.",
      "Disable future alerts of the same type.",
    ],
    answer: 0,
    explanation:
      "Tool action success is only one part of technical and business recovery.",
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

function EvidenceFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Endpoint Evidence Fields</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Ten Fields That Shape Endpoint Alert Meaning</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {endpointEvidenceFields.map((item) => (
          <div key={item.field} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.meaning}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Defender use</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.use}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Caution</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.caution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Endpoint Tool Layers</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Protection, Visibility, Investigation, and Response Work Together</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {endpointToolLayers.map((item) => (
          <div key={item.layer} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-blue-100">{item.layer}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.purpose}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Useful evidence</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.evidence}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClassificationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Alert Classification</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Five Defensible Endpoint Alert Outcomes</h2>
      <div className="mt-6 grid gap-5">
        {alertClassifications.map((item) => (
          <div key={item.label} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1fr]">
            <div><p className="text-lg font-black text-cyan-100">{item.label}</p></div>
            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Supporting evidence</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.evidence}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Strong response</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.response}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessTreeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Process Relationships</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Interpret Parent and Child Processes with Context</h2>
      <div className="mt-6 grid gap-4">
        {processTreeExamples.map((item) => (
          <div key={item.pattern} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-white">{item.pattern}</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Parent</p>
                <p className="mt-2 font-mono text-sm text-cyan-200">{item.parent}</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Child</p>
                <p className="mt-2 font-mono text-sm text-blue-200">{item.child}</p>
              </div>
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Context</p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">{item.supportingContext}</p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Interpretation</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.interpretation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function ResponseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Response Actions</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Endpoint Actions Require Authorization, Impact Review, and Validation</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {responseActions.map((item) => (
          <div key={item.action} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.action}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.purpose}</p>
            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">Risk</p>
              <p className="mt-2 text-sm leading-6 text-red-50">{item.risk}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Validation</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.validation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HealthGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Tool Health and Coverage</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Eight Checks Before Trusting Endpoint Visibility</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {healthChecks.map((item) => (
          <div key={item.check} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.check}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.question}</p>
            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Potential gap</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.gap}</p>
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
      <h2 className="mt-2 text-2xl font-bold text-white">What Endpoint Evidence Can and Cannot Prove</h2>
      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div key={item.source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Evidence source</p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Can support</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.supports}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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
      <h2 className="mt-2 text-2xl font-bold text-white">Review an Endpoint Alert in Six Steps</h2>
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

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Correlated Endpoint Timeline</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Follow an Alert from Approved Change to Validation</h2>
      <div className="mt-6 grid gap-3">
        {timeline.map((item) => (
          <div key={`${item.time}-${item.source}`} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]">
            <p className="font-mono text-sm font-black text-cyan-300">{item.time}</p>
            <p className="text-sm font-black text-blue-200">{item.source}</p>
            <p className="text-sm font-semibold text-white">{item.event}</p>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EndpointProtectionAndEDRConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I5</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 2 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5.2 Endpoint Protection and EDR Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders interpret fictional endpoint alerts, process trees, files, services, users, devices, network activity, prevention actions, tool health, containment, recovery, and evidence limitations.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I5: Defensive Security Tools"
          lessonTitle="Endpoint Protection and EDR Concepts"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that an endpoint alert is evidence that configured logic triggered, not automatic proof of compromise.",
            "I will review device, user, process, parent process, path, publisher, action, network, timeline, and change context.",
            "I understand that quarantine, isolation, termination, and remediation are change-capable actions requiring authorization.",
            "I will validate agent health, policy, updates, data freshness, exclusions, coverage, and retention.",
            "I will use only fictional devices, users, processes, files, paths, publishers, alerts, destinations, and organizations.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Alert Name Is Not the Investigation">
          <p className="leading-8">
            Endpoint tools can summarize complicated process, file, user, device, and network behavior into one alert title. That summary helps prioritize review, but it can also hide the exact process tree, action, path, publisher, tool state, and evidence gap that determine what actually happened.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The alert says suspicious, so isolate the device immediately.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Preserve the alert, review the endpoint evidence and tool health, add asset and change context, classify the pattern, and use only the authorized response supported by impact and scope.”</p>
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

        <SectionCard eyebrow="Why This Matters" title="Endpoint Tools Connect Local Behavior with Defensive Response">
          <p className="leading-8">
            Endpoint protection and EDR tools can show which process ran, which file appeared, which account was active, which service changed, which destination was contacted, which control acted, and whether the device remained healthy. Their value depends on complete context and controlled response.
          </p>
        </SectionCard>

        <EvidenceFieldGuide />
        <LayerGuide />
        <ClassificationGuide />

        <SectionCard eyebrow="Core Concept" title="Detection, Prevention, Containment, and Recovery Are Different Outcomes">
          <p className="leading-8">
            Detection means the tool recorded a match. Prevention means it stopped a specific action. Containment limits communication or activity. Remediation changes the environment to reduce risk. Recovery confirms the device and required business function returned to an acceptable state.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Detect", "What endpoint behavior matched the fictional rule or model?"],
              ["Verify", "Which process, file, path, publisher, user, device, and source records support it?"],
              ["Classify", "Is it expected, operational, contained, suspicious, or evidence-incomplete?"],
              ["Respond", "What is the narrowest authorized action supported by scope and impact?"],
              ["Recover", "Did protection, device health, applications, users, and monitoring return to the intended state?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ProcessTreeGuide />
        <ResponseGuide />
        <HealthGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Endpoint Protection and EDR Terms</h2>
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
          title="Fake Endpoint Protection Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services endpoint environment."
          metrics={[
            {
              label: "Managed endpoints",
              value: "146",
              note: "One hundred forty-two report current policy and telemetry; four require health review.",
            },
            {
              label: "Open endpoint alerts",
              value: "11",
              note: "Six match approved deployments, three are contained detections, and two require additional evidence.",
            },
            {
              label: "Response actions",
              value: "3",
              note: "Two quarantines and one process block are validated; no device isolation is currently approved.",
            },
          ]}
        />

        <FakeAlertCard
          title="New Service Registration During Approved Study-Client Deployment"
          severity="Medium"
          time="01:03 PM"
          source="Fake Endpoint Detection and Response Console"
          details="A fictional deployment agent launches the approved study-client installer, which registers StudyClientUpdate from the expected application path. The publisher, package, owner, maintenance window, network destination, and application validation match the approved deployment. The alert remains observation-only."
          recommendation="Preserve the endpoint alert and process tree, confirm agent health and source events, document the activity as expected deployment behavior with high confidence, avoid creating a broad exclusion, and continue narrow monitoring for unexpected paths, publishers, or destinations."
        />

        <FakeLogPanel
          title="Fake Endpoint Alert Timeline"
          logs={[
            "13:00:00 CHANGE device='training-laptop-72' package='study-client' approved='true'",
            "13:03:14 PROCESS image='study-client-installer.exe' path='C:\\TrainingApps\\Packages\\study-client-installer.exe'",
            "13:03:18 PROCESS parent='deployment-agent.exe' child='study-client-installer.exe'",
            "13:03:22 EDR alert='new_service_registration' severity='medium' action='observed'",
            "13:03:24 SYSTEM service='StudyClientUpdate' path='C:\\TrainingApps\\StudyClient\\update-service.exe'",
            "13:04:00 PUBLISHER signer='Northstar Training Software' package_match='true'",
            "13:04:15 NETWORK process='update-service.exe' destination='approved-learning-service.test' port='443'",
            "13:05:10 EDR blocked='false' quarantined='false' isolated='false'",
            "13:06:30 VALIDATION application='study-client' result='healthy'",
            "13:20:00 MONITOR additional_alerts='0' unexpected_destinations='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Endpoint Alert Conclusion Is Best Supported?"
          evidence={[
            "The deployment has a fictional approved change ticket and owner.",
            "The parent process is the expected deployment agent.",
            "The child process and service use the approved application path.",
            "The publisher and package identity match the deployment record.",
            "The service contacts only the approved fictional learning destination.",
            "The endpoint action is observation-only.",
            "The study client passes functional validation.",
            "No additional alerts or unexpected destinations appear.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The endpoint alert most likely represents expected service registration during the approved software deployment.",
            "The device is definitely compromised because a new service appeared.",
            "The alert should be suppressed for every service registration.",
            "The device should be isolated immediately without owner review.",
          ]}
          bestAnswer={0}
          explanation="Change, process, path, publisher, package, network, action, owner, and validation evidence support expected deployment behavior without justifying broad suppression."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Endpoint Alert Review">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Review a Fictional Endpoint Alert Packet">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fictional Environment</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Endpoint Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review eighteen supplied fictional records involving one laptop, one user, one deployment agent, one application installer, one endpoint alert, one service, one destination, one change ticket, one tool-health record, and one validation report.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required Analysis</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve the original fictional alert and source events.</li>
                <li>Record device, user, process, parent, path, publisher, file, service, action, network, and time fields.</li>
                <li>Review agent health, policy, update, freshness, exclusions, coverage, and retention.</li>
                <li>Add asset, identity, application, owner, and change context.</li>
                <li>Classify the alert and state confidence, impact, alternatives, and evidence gaps.</li>
                <li>Choose the narrowest authorized response and define rollback or release requirements.</li>
                <li>Validate protection state, application function, monitoring, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real endpoint consoles, run files, isolate devices, terminate processes, quarantine content, change exclusions, inspect private activity, or publish real device names, users, paths, process trees, alerts, destinations, screenshots, or tool settings.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A File Is Quarantined Before Any Execution Event"
          scenario="A fictional endpoint tool detects a cached training archive and quarantines it. No process, child process, persistence, session, or related network event is supplied."
          choices={[
            {
              label: "Choice A",
              response: "Document that the supplied evidence supports quarantine before observed execution, confirm tool health and file scope, preserve the alert, validate no recurrence, and state the telemetry limits.",
              outcome: "Best defensive choice. The prevention action is confirmed without overstating device compromise.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare that the device was fully compromised.",
              outcome: "Unsupported. No supplied evidence shows execution, persistence, or broader impact.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the alert because the file was quarantined.",
              outcome: "Unsafe. The evidence and control outcome still require documentation and validation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Isolation Button Is Available but Not Approved"
          scenario="A fictional analyst reviews a medium-severity endpoint alert. The console displays an isolate-device action, but the review authorization is read-only and the device supports an active classroom session."
          choices={[
            {
              label: "Choice A",
              response: "Keep the review read-only, preserve and correlate the evidence, notify the authorized owner if risk increases, and request separate containment approval with impact and release planning if isolation becomes justified.",
              outcome: "Best defensive choice. Tool capability does not equal authorization.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Isolate the device because the button is available.",
              outcome: "Unsafe. The action exceeds scope and could disrupt the classroom session.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the alert because isolation is not currently approved.",
              outcome: "Weak response. Read-only evidence review and escalation are still required.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Endpoint Protection and EDR Checklist"
          items={[
            "I identify the fictional device, user, process, parent, path, publisher, file, service, alert, action, time window, and owner.",
            "I preserve the original alert, process tree, endpoint events, tool configuration, tool-health state, and source records.",
            "I review agent service, policy assignment, updates, data freshness, coverage, exclusions, response capability, and retention.",
            "I distinguish detection, prevention, quarantine, process termination, isolation, remediation, recovery, and validation.",
            "I correlate endpoint evidence with authentication, system, application, DNS, firewall, proxy, inventory, owner, and change records.",
            "I classify the alert as expected, operational, contained, suspicious, or evidence-incomplete.",
            "I state confirmed facts, reasonable conclusions, alternatives, evidence gaps, confidence, impact, priority, and residual risk.",
            "I use only the authorized response level and request separate approval for any change-capable action.",
            "I validate protection state, device health, required applications, user impact, monitoring, and closure criteria.",
            "I use only fictional evidence and never publish real device names, users, paths, files, process trees, alerts, destinations, screenshots, or endpoint settings.",
          ]}
        />

        <MiniQuiz title="I5.2 Mini Quiz: Endpoint Protection and EDR Concepts" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Endpoint Alert Review Report containing at least twenty endpoint, system, application, authentication, network, inventory, change, tool-health, and validation records. Include device, user, process, parent, child, path, publisher, file, service, action, severity, confidence, destination, timeline, protection state, tool health, classification, confirmed facts, reasonable conclusion, alternate explanation, evidence gaps, impact, owner, authorized response, rollback or release plan, validation, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional devices, users, processes, files, paths, publishers, services, alerts, destinations, tickets, and organizations.",
            "Include one expected deployment alert, one operational issue, one contained detection, one suspicious pattern, and one evidence-incomplete case.",
            "Clearly separate alert severity from evidence confidence and business impact.",
            "Do not include real console screenshots, files, usernames, device names, paths, process trees, destinations, alerts, or endpoint configuration.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Endpoint alerts are evidence leads that require device, user, process, path, publisher, action, network, timeline, and owner context.",
            "Detection, prevention, containment, remediation, recovery, and validation are separate outcomes.",
            "Parent-child relationships and process names are useful clues but do not prove purpose or safety alone.",
            "Agent health, policy, updates, freshness, exclusions, coverage, response capability, and retention shape endpoint visibility.",
            "Quarantine or blocking can support prevention without proving complete compromise or zero residual risk.",
            "Endpoint response actions must be authorized, narrow, impact-aware, validated, monitored, and documented.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I5</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}