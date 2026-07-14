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
const previousLesson = `${modulePath}/authentication-logs`;
const nextLesson = `${modulePath}/network-and-web-logs`;

const objectives = [
  "Explain how operating systems, services, applications, tasks, updates, drivers, and dependencies create different kinds of fictional event records.",
  "Interpret system and application events using timestamp, provider, event ID, process, service, user, device, path, action, result, severity, and dependency context.",
  "Distinguish symptoms, causes, contributing conditions, recovery events, and evidence gaps in a fictional system timeline.",
  "Correlate service, process, application, update, configuration, permission, resource, owner, and change records before assigning root cause.",
  "Create a professional fictional System and Application Review Report with confirmed facts, likely explanations, alternates, limitations, confidence, impact, and safe next actions.",
];

const vocabulary = [
  ["System log", "A record created by an operating system, driver, service, hardware component, or core platform function."],
  ["Application log", "A record created by a program, business system, database, agent, client, or application component."],
  ["Service", "A background operating-system component or application process that provides a defined function."],
  ["Process", "A running instance of a program with its own identifier, memory, resources, user context, and parent relationship."],
  ["Dependency", "A service, file, permission, network connection, library, database, device, or configuration required by another component."],
  ["Crash", "An unexpected termination recorded by an operating system or application."],
  ["Restart", "A stop-and-start sequence that may be automatic, manual, scheduled, or part of recovery."],
  ["Configuration change", "A modification to settings, files, registry-like data, policies, environment values, or application parameters."],
  ["Resource pressure", "A condition involving CPU, memory, storage, network, handles, or other limited system resources."],
  ["Update event", "A record connected to installation, restart, activation, rollback, compatibility, or failure of an operating-system or application update."],
  ["Recovery event", "A record showing retry, restart, rollback, failover, restoration, or return to normal service."],
  ["Root cause", "The underlying condition that best explains why the observed failure or change occurred."],
];

const sourceTypes = [
  {
    source: "Operating-system System logs",
    records: "Startup, shutdown, service state, driver load, hardware condition, storage warning, time synchronization, update, and system failure.",
    questions: "Which operating-system component changed, failed, restarted, recovered, or reported a dependency issue?",
    limitation: "The system log may show a symptom without identifying the application, owner, user, or business reason.",
  },
  {
    source: "Application logs",
    records: "Application start, request, job, transaction, module load, file access, database call, error, warning, and recovery.",
    questions: "Which application component, user workflow, request, file, database, service, or dependency is involved?",
    limitation: "Application logs may omit operating-system, identity, endpoint, network, and change-management context.",
  },
  {
    source: "Service-control records",
    records: "Service start, stop, pause, failure, restart, account, startup type, dependency, and recovery action.",
    questions: "Was the state change expected, which account ran the service, and what depended on it?",
    limitation: "A service restart does not automatically explain why the service stopped.",
  },
  {
    source: "Process and task records",
    records: "Process start, process end, parent process, executable path, scheduled task trigger, result, and exit code.",
    questions: "Which program launched, under which identity, from which path, with what parent, and with what result?",
    limitation: "A familiar process name does not prove that the path, package, owner, or purpose is correct.",
  },
  {
    source: "Update and installation records",
    records: "Package download, installation, restart requirement, compatibility check, failure, rollback, and completion.",
    questions: "Was the change approved, did it require restart, and did services or applications recover afterward?",
    limitation: "An installed status does not always mean the intended running state is active.",
  },
  {
    source: "Resource and performance records",
    records: "CPU, memory, storage, queue length, response time, handle count, process use, and threshold events.",
    questions: "Did resource pressure occur before, during, or after the failure, and was it normal for the workload?",
    limitation: "High resource use proves consumption, not maliciousness or exact cause.",
  },
  {
    source: "Permission and file records",
    records: "Access denied, file missing, file changed, ownership, path, permission modification, and configuration-file state.",
    questions: "Did the application or service lose access to a required file, folder, library, or configuration?",
    limitation: "A permission event may show the blocked operation without explaining who changed the access or why.",
  },
  {
    source: "Change and support records",
    records: "Approved maintenance, deployment, owner, ticket, test, rollback, user report, outage, validation, and closure.",
    questions: "Was the activity authorized, expected, owned, time-bounded, tested, and validated?",
    limitation: "Documentation can be incomplete, stale, delayed, or different from the actual technical state.",
  },
];

const eventFields = [
  {
    field: "Provider",
    meaning: "The operating-system component, service, application, driver, task, or platform that created the event.",
    use: "Interpret the event ID, message, fields, severity, and limitations according to the correct source.",
    caution: "The same event number or severity can mean something different under another provider.",
  },
  {
    field: "Process",
    meaning: "The running program, process identifier, parent process, command context, and executable path associated with the event.",
    use: "Connect the event with application purpose, publisher, owner, account, parent-child relationship, and later activity.",
    caution: "A process name alone does not prove the executable path, package, or legitimacy.",
  },
  {
    field: "Service",
    meaning: "The background component, service name, state, startup type, account, dependency, and recovery behavior.",
    use: "Determine whether a service stopped, restarted, failed, recovered, or blocked a dependent application.",
    caution: "The service event may not show the original trigger or business impact.",
  },
  {
    field: "Application component",
    meaning: "The module, job, database client, web component, plug-in, library, agent, or feature involved.",
    use: "Narrow the failing part of the application and identify relevant dependencies.",
    caution: "A component error may be secondary to a system, permission, network, or update problem.",
  },
  {
    field: "Path or file",
    meaning: "The executable, library, configuration, data file, folder, package, or storage location referenced by the event.",
    use: "Compare the path with the approved installation, ownership, permissions, version, and expected application layout.",
    caution: "A path can be missing, stale, redirected, inaccessible, or different across devices.",
  },
  {
    field: "Action and result",
    meaning: "The attempted operation and whether it succeeded, failed, was denied, timed out, retried, or rolled back.",
    use: "Separate the requested activity from the actual outcome and the analyst's conclusion.",
    caution: "A failed action may be a symptom rather than the root cause.",
  },
  {
    field: "Exit or error code",
    meaning: "A provider-defined value associated with application or process completion.",
    use: "Use it with provider documentation, message text, version, workflow, and surrounding events.",
    caution: "Codes can be reused across programs and may not identify the complete cause.",
  },
  {
    field: "User or service identity",
    meaning: "The account under which the application, service, task, or process ran.",
    use: "Compare role, privilege, ownership, expected sign-in type, permissions, and account lifecycle.",
    caution: "The account name does not prove the physical user or who initiated the process.",
  },
  {
    field: "Resource state",
    meaning: "CPU, memory, storage, response time, queue, handle, or connection state associated with the event.",
    use: "Determine whether resource pressure may have contributed to failure or slow performance.",
    caution: "Resource use can be expected during heavy work and does not automatically prove the cause.",
  },
  {
    field: "Recovery state",
    meaning: "Retry, restart, rollback, failover, restoration, validation, or return-to-service evidence.",
    use: "Confirm whether the system or application recovered and whether required functions work.",
    caution: "A recovery event does not prove that the underlying issue was permanently fixed.",
  },
];

const failurePatterns = [
  {
    pattern: "Application error follows a service stop",
    possibleCause: "The application depends on the stopped service and cannot complete its workflow.",
    alternate: "The service stop and application error may share another cause such as an update, permission change, or resource problem.",
    evidence: "Service state, dependency map, application error, process, update, permission, owner, and recovery records.",
  },
  {
    pattern: "Service repeatedly crashes and restarts",
    possibleCause: "A damaged configuration, incompatible update, missing dependency, permission problem, or resource limit may be involved.",
    alternate: "A scheduled maintenance action or approved test may intentionally restart the service.",
    evidence: "Service-control events, application logs, crash records, update history, configuration changes, resource data, and tickets.",
  },
  {
    pattern: "Application reports access denied",
    possibleCause: "The application identity may lack required permission to a file, folder, registry-like setting, or network resource.",
    alternate: "The path may be incorrect, the resource may be unavailable, or the application may be using the wrong identity.",
    evidence: "Permission event, effective access, application account, path, ownership, configuration, service state, and change record.",
  },
  {
    pattern: "Errors begin after an update",
    possibleCause: "The update may have changed compatibility, restart state, configuration, service behavior, or dependency versions.",
    alternate: "The timing may be coincidental, or another change may have occurred in the same maintenance window.",
    evidence: "Update records, restart state, version, change ticket, application errors, service events, test results, rollback, and validation.",
  },
  {
    pattern: "High CPU appears before slow application response",
    possibleCause: "A process may be consuming resources needed by the application.",
    alternate: "The high use may be normal for the workload, and the delay may come from storage, database, network, or queue issues.",
    evidence: "Process resource data, response time, workload schedule, baseline, storage, network, database, owner, and later recovery.",
  },
  {
    pattern: "Task completes with a nonzero exit code",
    possibleCause: "The task may have failed or partially completed.",
    alternate: "Some applications use nonzero codes for warnings or provider-specific outcomes.",
    evidence: "Task definition, provider documentation, message, application output, file changes, owner, schedule, and validation.",
  },
  {
    pattern: "Application starts but users cannot complete work",
    possibleCause: "A downstream database, file share, identity service, network connection, or dependency may be unavailable.",
    alternate: "The user workflow, permission, browser, client, or data input may be the actual issue.",
    evidence: "Application startup, dependency calls, network, authentication, user report, service status, and transaction logs.",
  },
  {
    pattern: "Automatic recovery restores service",
    possibleCause: "A transient failure may have been corrected by restart or retry.",
    alternate: "The same underlying issue may remain and recur later.",
    evidence: "Failure event, recovery action, service state, application validation, recurrence history, monitoring, and root-cause review.",
  },
];

const evidenceMatrix = [
  {
    source: "System event",
    supports: "Operating-system, service, driver, hardware, storage, update, startup, shutdown, or platform state recorded by the source.",
    limitation: "May show the symptom without the initiating application, user, owner, or business reason.",
  },
  {
    source: "Application event",
    supports: "Application component, request, job, transaction, file, database, module, warning, error, or recovery state.",
    limitation: "May not include operating-system, identity, network, endpoint, or change context.",
  },
  {
    source: "Service-control record",
    supports: "Service start, stop, restart, failure, recovery, account, startup type, and dependency state.",
    limitation: "Does not always reveal why the service changed state.",
  },
  {
    source: "Process record",
    supports: "Process start or end, path, parent, account, identifier, result, and timing.",
    limitation: "A process name alone does not establish publisher, purpose, or safety.",
  },
  {
    source: "Update record",
    supports: "Package installation, version, restart requirement, completion, failure, rollback, and timing.",
    limitation: "Does not automatically prove that the update caused a later application problem.",
  },
  {
    source: "Permission or file record",
    supports: "Access denied, ownership, permission, path, file state, and configuration change.",
    limitation: "May not identify who changed access or whether the file was otherwise valid.",
  },
  {
    source: "Resource record",
    supports: "CPU, memory, storage, queue, response, handle, or process consumption during the observed period.",
    limitation: "Resource use is a condition, not automatic proof of root cause or maliciousness.",
  },
  {
    source: "Change and support record",
    supports: "Authorization, owner, maintenance, deployment, user impact, test, rollback, and validation.",
    limitation: "The record may be incomplete or differ from actual technical activity.",
  },
];


const workflow = [
  {
    step: "1",
    title: "Define the affected function",
    detail: "Identify the fictional application, service, users, device, expected workflow, time window, owner, and observed impact.",
  },
  {
    step: "2",
    title: "Preserve related evidence",
    detail: "Collect system, application, service, process, task, update, permission, resource, change, and support records.",
  },
  {
    step: "3",
    title: "Normalize the sequence",
    detail: "Align timestamps, providers, event IDs, device names, process identifiers, paths, users, and collection delay.",
  },
  {
    step: "4",
    title: "Map dependencies",
    detail: "Connect applications with services, accounts, files, databases, network resources, libraries, updates, and scheduled tasks.",
  },
  {
    step: "5",
    title: "Test explanations against evidence",
    detail: "Compare symptoms, possible causes, alternate explanations, change history, recovery, and missing records.",
  },
  {
    step: "6",
    title: "Document and validate",
    detail: "Record facts, conclusions, confidence, impact, safe change, rollback, validation, monitoring, and residual risk.",
  },
];

const sampleTimeline = [
  {
    time: "13:00:00",
    source: "Change ticket",
    event: "Approved application update begins",
    meaning: "Provides owner, authorization, maintenance window, test plan, and rollback context.",
  },
  {
    time: "13:04:12",
    source: "Update service",
    event: "Application package installed successfully",
    meaning: "Confirms the package installation step completed.",
  },
  {
    time: "13:04:30",
    source: "Update service",
    event: "Restart required",
    meaning: "Shows the intended running state may not yet be active.",
  },
  {
    time: "13:10:00",
    source: "Support",
    event: "Application owner reports users cannot open reports",
    meaning: "Adds business impact but does not identify the technical cause.",
  },
  {
    time: "13:10:03",
    source: "Application",
    event: "Report module returns access denied for configuration file",
    meaning: "Identifies the failing application component, path, and result.",
  },
  {
    time: "13:10:04",
    source: "System",
    event: "Service account access denied on the same configuration path",
    meaning: "Corroborates the permission failure from a second source.",
  },
  {
    time: "13:12:00",
    source: "Permission review",
    event: "Inherited read permission missing after package installation",
    meaning: "Provides a likely explanation that must still be tested carefully.",
  },
  {
    time: "13:15:00",
    source: "Approved change",
    event: "Required read permission restored with rollback prepared",
    meaning: "Documents a narrow, authorized correction.",
  },
  {
    time: "13:15:18",
    source: "Application",
    event: "Report module opens configuration successfully",
    meaning: "Validates the immediate application function after the correction.",
  },
  {
    time: "13:25:00",
    source: "Monitoring",
    event: "No additional access-denied errors and user workflow passes",
    meaning: "Supports recovery while leaving longer-term recurrence monitoring in place.",
  },
];

const mistakes = [
  "Treating the first visible error as the root cause.",
  "Treating a critical event as proof of compromise or maximum business impact.",
  "Reviewing only application logs and ignoring system, service, update, permission, resource, and change evidence.",
  "Reviewing only system logs and ignoring application workflow and user impact.",
  "Assuming a service restart explains why the service stopped.",
  "Assuming high CPU, memory, or storage use is malicious.",
  "Interpreting process names without checking path, publisher, parent, account, owner, and package.",
  "Changing services, files, or permissions without checking dependencies, backups, rollback, and validation.",
  "Treating an installed update as fully active without checking restart and application state.",
  "Ignoring owner reports, approved maintenance, support tickets, and application baselines.",
  "Mixing symptoms, contributing conditions, root cause, recovery, and residual risk.",
  "Publishing real event messages, usernames, devices, paths, process names, service names, tickets, or internal application details.",
];

const quizQuestions = [
  {
    question: "What is the difference between a symptom and a root cause?",
    choices: [
      "A symptom is an observed effect, while the root cause is the underlying condition that best explains it.",
      "They always mean the same thing.",
      "A symptom is always more important than the cause.",
      "A root cause can be identified from severity alone.",
    ],
    answer: 0,
    explanation: "Application errors and service stops may be symptoms of a deeper permission, update, resource, dependency, or configuration problem.",
  },
  {
    question: "What does a service restart directly prove?",
    choices: [
      "The service changed from stopped to running under the recorded conditions.",
      "The original failure cause is known.",
      "The service is permanently fixed.",
      "The event was malicious.",
    ],
    answer: 0,
    explanation: "A restart confirms a state change, not the complete reason or long-term resolution.",
  },
  {
    question: "Why should application logs be reviewed with system logs?",
    choices: [
      "They often describe different parts of the same failure, dependency, and recovery sequence.",
      "They are always identical.",
      "System logs replace application logs.",
      "Application logs contain no useful evidence.",
    ],
    answer: 0,
    explanation: "System and application records can corroborate or clarify one another.",
  },
  {
    question: "What does high CPU usage prove?",
    choices: [
      "A process or workload consumed significant CPU during the observed period.",
      "The process is malicious.",
      "The application must be deleted.",
      "The update caused the issue.",
    ],
    answer: 0,
    explanation: "Resource use is a condition requiring workload, process, baseline, timing, and dependency context.",
  },
  {
    question: "Why should a restart-required update be treated as incomplete?",
    choices: [
      "The installed files may not be active in the running system until restart and validation.",
      "Every update with a restart requirement failed.",
      "Restarts remove all permissions.",
      "The update should be rolled back immediately.",
    ],
    answer: 0,
    explanation: "Installed and active are not always the same state.",
  },
  {
    question: "Which evidence best supports a permission-related application failure?",
    choices: [
      "Application access-denied event, matching system event, effective-access review, change record, narrow restoration, and successful validation.",
      "Only one critical application event.",
      "Only a user's guess.",
      "Only high memory use.",
    ],
    answer: 0,
    explanation: "Correlated technical, change, and validation evidence provides a stronger conclusion.",
  },
  {
    question: "What should happen after a service or application appears to recover?",
    choices: [
      "Validate required functions, monitor for recurrence, and document residual risk.",
      "Delete all related logs.",
      "Assume the root cause is permanently fixed.",
      "Close the review without testing.",
    ],
    answer: 0,
    explanation: "Recovery must be validated and monitored because the underlying issue may remain.",
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

function SourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">System and Application Sources</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Different Sources Describe Different Parts of the Failure</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {sourceTypes.map((item) => (
          <div key={item.source} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-cyan-100">{item.source}</h3>
            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Common records</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.records}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Defender questions</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.questions}</p>
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

function FieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Event Anatomy</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Ten Fields That Shape System and Application Meaning</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {eventFields.map((item) => (
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

function PatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Failure Pattern Analysis</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Compare Symptoms, Possible Causes, Alternates, and Evidence</h2>
      <div className="mt-6 grid gap-5">
        {failurePatterns.map((item) => (
          <div key={item.pattern} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-white">{item.pattern}</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Possible cause</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{item.possibleCause}</p>
              </div>
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Alternate explanation</p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">{item.alternate}</p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Evidence to compare</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.evidence}</p>
              </div>
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
      <h2 className="mt-2 text-2xl font-bold text-white">What Each Source Can and Cannot Prove</h2>
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
      <h2 className="mt-2 text-2xl font-bold text-white">Review System and Application Events in Six Steps</h2>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Correlated Failure Timeline</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Connect Update, Application, System, Permission, Change, and Validation Evidence</h2>
      <div className="mt-6 grid gap-3">
        {sampleTimeline.map((item) => (
          <div key={`${item.time}-${item.source}`} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.25fr_0.85fr_1fr]">
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

export default function SystemAndApplicationLogsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I4</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 4 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.4 System and Application Logs
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders connect fictional operating-system, service, process, application, update, permission, resource, recovery, and change events to separate symptoms from likely causes.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="System and Application Logs"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that operating-system logs and application logs describe different parts of the same technical story.",
            "I understand that an error or service restart can be a symptom rather than the root cause.",
            "I will preserve provider, event ID, process, service, user, path, action, result, update, permission, resource, and recovery evidence.",
            "I will check dependencies, ownership, approved changes, rollback, and validation before recommending action.",
            "I will use only fictional devices, applications, services, users, paths, events, tickets, and organizations.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The First Error Is Not Always the Root Cause">
          <p className="leading-8">
            An application may report that a file could not be opened, while the operating system records access denied, the service log shows a restart, and the change record shows a recent package installation. Defenders connect those records before deciding which condition best explains the failure.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The application crashed, so reinstall it immediately.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Preserve the application error, correlate system, service, process, update, permission, resource, and change evidence, then test the narrowest supported explanation.”</p>
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

        <SectionCard eyebrow="Why This Matters" title="Applications Depend on Systems, Services, Files, Permissions, Resources, and Changes">
          <p className="leading-8">
            A user-facing application can fail because of an operating-system service, missing permission, incompatible update, unavailable database, storage condition, configuration problem, task failure, network dependency, or resource pressure. Logs help defenders compare those layers.
          </p>
        </SectionCard>

        <SourceGuide />

        <SectionCard eyebrow="Core Concept" title="Separate Symptoms, Causes, Contributing Conditions, and Recovery">
          <p className="leading-8">
            A symptom is what users or systems observe. A possible cause is a condition that could explain it. A contributing condition can make the issue worse without being the primary cause. Recovery shows that function returned, but it does not automatically prove the underlying issue is permanently resolved.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              ["Symptom", "What failed, slowed, stopped, or became unavailable?"],
              ["Cause", "Which condition best explains the symptom under the evidence?"],
              ["Contribution", "Which resource, configuration, dependency, or timing factor increased the problem?"],
              ["Recovery", "Which retry, restart, rollback, restoration, test, and monitoring evidence confirms return to service?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FieldGuide />
        <PatternGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">System and Application Review Terms</h2>
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
          title="Fake System and Application Health Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services application environment."
          metrics={[
            {
              label: "Application errors",
              value: "18",
              note: "Twelve are linked to one report module, four to an expected maintenance window, and two remain under review.",
            },
            {
              label: "Service restarts",
              value: "7",
              note: "Five were approved update restarts, one was automatic recovery, and one needs additional evidence.",
            },
            {
              label: "Recovery validation",
              value: "92%",
              note: "Most required application functions passed after approved correction; one long-term recurrence check remains open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Report Module Fails After an Approved Application Update"
          severity="High"
          time="01:12 PM"
          source="Fake Application Health Monitor"
          details="A fictional report module records access denied to a configuration file after an approved package installation. A matching system event shows the service account cannot read the same path. Permission review finds inherited read access missing, and the update is still within the maintenance window."
          recommendation="Preserve application, system, update, permission, service, owner, and change evidence; prepare rollback; restore only the required read permission through approved change; validate report generation, service health, and recurrence monitoring."
        />

        <FakeLogPanel
          title="Fake System and Application Timeline"
          logs={[
            "13:00:00 CHANGE app='report-suite' action='update_started' approved='true'",
            "13:04:12 UPDATE package='report-suite-4.8' result='installed'",
            "13:04:30 UPDATE package='report-suite-4.8' restart_required='true'",
            "13:10:00 SUPPORT impact='users_cannot_open_reports'",
            "13:10:03 APPLICATION component='report-module' result='access_denied' path='C:\\TrainingApp\\config\\reports.json'",
            "13:10:04 SYSTEM identity='svc-report-training' result='access_denied' path='C:\\TrainingApp\\config\\reports.json'",
            "13:12:00 PERMISSION inherited_read='missing' identity='svc-report-training'",
            "13:15:00 CHANGE action='required_read_restored' rollback='prepared'",
            "13:15:18 APPLICATION component='report-module' result='configuration_opened'",
            "13:25:00 MONITOR additional_access_denied='0' user_validation='passed'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Root-Cause Conclusion Is Best Supported?"
          evidence={[
            "The application update was approved and installed.",
            "The report module later recorded access denied to one configuration file.",
            "A system event recorded the service account denied on the same path.",
            "Permission review found inherited read access missing.",
            "No broad service failure or storage outage was recorded.",
            "The required read permission was restored through approved change.",
            "The report module then opened the file successfully.",
            "No additional access-denied events occurred during validation.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The report failure was most likely caused by missing required read access to the configuration file after the approved package installation.",
            "The entire device was compromised.",
            "High CPU caused the report failure.",
            "The update must have damaged every application file.",
          ]}
          bestAnswer={0}
          explanation="Application, system, permission, change, and successful validation evidence support the narrow permission explanation without proving broader compromise."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken System and Application Analysis">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Review a Fictional Application Failure">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fictional Environment</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Application Reliability Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twenty fictional events involving one Windows-style system, one Linux-style service, two applications, one scheduled task, one update, one permission change, one resource alert, and one support ticket.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required Analysis</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve every original system and application event.</li>
                <li>Normalize timestamps, providers, event IDs, users, paths, services, and processes.</li>
                <li>Identify the observed symptom and affected business function.</li>
                <li>Map service, permission, file, update, resource, and network dependencies.</li>
                <li>Write at least two possible causes and two alternate explanations.</li>
                <li>Use recovery and validation evidence to test the strongest explanation.</li>
                <li>Document confidence, impact, owner, safe change, rollback, monitoring, and residual risk.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not stop real services, change permissions, run commands, install or remove software, restart devices, alter files, or publish real event messages, paths, accounts, applications, services, or tickets.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Service Restarts and the Application Recovers"
          scenario="A fictional service crashes once, automatically restarts, and the application resumes normal work. No configuration, update, permission, or resource records are supplied."
          choices={[
            {
              label: "Choice A",
              response: "Confirm the crash and recovery, preserve the service and application evidence, monitor for recurrence, and request authorized configuration, update, resource, and dependency evidence before assigning root cause.",
              outcome: "Best defensive choice. Recovery is confirmed, but the cause remains unknown.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare the service permanently fixed.",
              outcome: "Unsupported. Automatic recovery does not prove the underlying issue is resolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete the service because it crashed.",
              outcome: "Unsafe. The service has a documented application dependency.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="High CPU and Slow Application Response Occur Together"
          scenario="A fictional reporting process uses high CPU while a scheduled report is generated. Users report slow response, but storage, database, and network evidence are not yet available."
          choices={[
            {
              label: "Choice A",
              response: "Confirm the high CPU and slow response, compare workload baseline and process purpose, and request storage, database, network, queue, owner, and later recovery evidence before naming the cause.",
              outcome: "Best defensive choice. High CPU may be relevant but is not yet proven as the root cause.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare the reporting process malicious.",
              outcome: "Unsupported. Resource use alone does not prove maliciousness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Terminate the process immediately without checking the scheduled report.",
              outcome: "Risky. The process may be performing required work.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="System and Application Logs Checklist"
          items={[
            "I identify the fictional system, application, service, process, task, user, owner, time window, and affected function.",
            "I preserve provider, event ID, message, path, account, action, result, severity, exit code, resource, and recovery evidence.",
            "I distinguish symptoms, possible causes, contributing conditions, recovery, and residual risk.",
            "I correlate system, application, service, process, task, update, permission, resource, change, and support records.",
            "I map file, service, account, database, network, library, configuration, update, and task dependencies.",
            "I interpret process names with path, publisher, parent, account, owner, and package context.",
            "I treat resource use as a condition requiring baseline and workload context.",
            "I preserve original evidence and document normalization, filtering, assumptions, and gaps.",
            "I recommend only narrow authorized changes with owner, test, backup, rollback, validation, and monitoring.",
            "I use only fictional evidence and never publish real event messages, paths, users, devices, applications, services, tickets, or internal system details.",
          ]}
        />

        <MiniQuiz title="I4.4 Mini Quiz: System and Application Logs" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional System and Application Review Report containing at least twenty-five events across operating-system, service, process, application, update, permission, resource, change, support, and validation sources. Include symptom, affected function, dependency map, normalized timeline, confirmed facts, likely causes, alternate explanations, evidence gaps, confidence, impact, owner, safe change, rollback, validation, monitoring, and residual risk."
          tips={[
            "Use only fictional devices, users, services, processes, paths, applications, event IDs, tickets, and organizations.",
            "Include one service-restart pattern, one permission-related application failure, one update-related sequence, and one resource-pressure pattern.",
            "Separate immediate recovery from long-term root-cause resolution.",
            "Do not include real logs, screenshots, process names, service names, paths, accounts, applications, or internal event messages.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "System logs and application logs record different parts of the same failure and recovery story.",
            "The first visible error is often a symptom rather than the root cause.",
            "Services, processes, permissions, files, updates, resources, tasks, networks, and owners can all affect application behavior.",
            "High resource use and severe events require workload, baseline, dependency, and impact context.",
            "Recovery confirms function returned but does not automatically prove permanent resolution.",
            "Strong analysis correlates multiple sources and validates the narrowest evidence-supported explanation.",
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