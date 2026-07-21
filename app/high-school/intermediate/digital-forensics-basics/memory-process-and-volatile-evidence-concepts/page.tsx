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
const modulePath = `${trackPath}/digital-forensics-basics`;
const previousLesson = `${modulePath}/file-metadata-and-artifact-analysis`;
const nextLesson = `${modulePath}/network-cloud-and-timeline-correlation`;

const objectives = [
  "Explain why fictional volatile evidence may change or disappear quickly and why collection order, authorization, operational safety, and source context matter.",
  "Interpret fictional running-process, parent-child, session, connection, loaded-module, command-history, temporary-data, service, and memory-snapshot concepts without executing commands or accessing real systems.",
  "Separate direct observations from supported findings, alternative explanations, confidence, limitations, and follow-up evidence needs.",
  "Correlate fictional volatile evidence with file, identity, application, deployment, network, cloud, support, business, and source-health records.",
  "Create a defensible fictional volatile-evidence analysis package with process maps, session maps, collection priorities, evidence lineage, findings, and portfolio-safe reporting."
];
const vocabulary = [
  [
    "Volatile evidence",
    "Fictional digital information that may change, disappear, rotate, or lose context quickly while a system is running."
  ],
  [
    "Memory snapshot",
    "A fictional preserved representation of active memory supplied for authorized defensive analysis."
  ],
  [
    "Running process",
    "A fictional program or service instance active at a particular moment with a process identifier, owner, parent, start time, path, arguments, state, and related resources."
  ],
  [
    "Parent-child relationship",
    "A fictional link showing which process started another process and providing context for approved workflows, automation, service behavior, or unexpected execution."
  ],
  [
    "Process tree",
    "A fictional hierarchical map of parent and child processes used to understand execution relationships and context."
  ],
  [
    "Session",
    "A fictional authenticated or service context associated with a user, account, token, device, application, or remote connection."
  ],
  [
    "Loaded module",
    "A fictional library, component, package, or code unit associated with a running process at the time of the supplied snapshot."
  ],
  [
    "Command history",
    "A fictional record of commands or actions preserved by an approved source, which may be incomplete and should not be treated as a full record of every activity."
  ],
  [
    "Open connection",
    "A fictional network relationship between a process and another system, service, or destination at a specific time."
  ],
  [
    "Temporary data",
    "Fictional information held in memory, cache, queue, clipboard, temporary storage, or process state that may disappear when the system changes or stops."
  ],
  [
    "Volatility order",
    "A fictional collection priority based on how quickly evidence may disappear, how relevant it is, how collection may affect operations, and which safer alternate sources exist."
  ],
  [
    "Snapshot limitation",
    "A fictional boundary showing that a preserved snapshot represents one moment and may omit earlier, later, paged-out, encrypted, protected, or already-terminated activity."
  ],
  [
    "Process baseline",
    "A fictional documented expectation for approved process names, owners, parents, paths, arguments, modules, connections, schedules, and versions."
  ],
  [
    "Orphaned process",
    "A fictional process whose expected parent is missing or inactive, requiring context before interpretation."
  ],
  [
    "Process injection concept",
    "A defensive fictional concept describing code or activity appearing inside another process; this lesson discusses recognition and reporting only, not operational techniques."
  ],
  [
    "Volatile-evidence confidence",
    "The fictional support level for a conclusion after considering snapshot timing, completeness, source health, shared identities, and independent evidence."
  ]
];
const volatileSources = [
  {
    "title": "Running processes and process trees",
    "examples": "Fictional process name, identifier, parent, owner, start time, executable path, arguments, state, session, and child processes.",
    "can_support": "Which services or programs were active, how they relate, which approved workflow may have launched them, and which process requires further review.",
    "cannot_prove": "Human intent, full historical activity, every executed command, or whether the process performed every action attributed to it.",
    "correlate": "Deployment records, service configuration, application jobs, identity sessions, file activity, network connections, and business workflow."
  },
  {
    "title": "Authenticated and service sessions",
    "examples": "Fictional user sessions, service tokens, login identifiers, start and end times, source context, role, device, and session state.",
    "can_support": "Which fictional identity context was active and which processes or services may be associated with it.",
    "cannot_prove": "Which human controlled a shared account, whether a session performed a specific action, or whether every token use appears in the snapshot.",
    "correlate": "Identity audit, process ownership, application requests, storage transactions, network records, support reports, and role assignments."
  },
  {
    "title": "Open files and handles",
    "examples": "Fictional file paths, object handles, locks, mapped objects, temporary files, open directories, and access modes.",
    "can_support": "Which fictional process had an active relationship with an object at the snapshot moment.",
    "cannot_prove": "That the entire file was read, modified, copied, shared, or intentionally selected.",
    "correlate": "File metadata, storage transactions, application logs, process arguments, preview records, and business workflow."
  },
  {
    "title": "Network connections",
    "examples": "Fictional local and remote endpoints, process association, protocol, connection state, start time, destination category, and service mapping.",
    "can_support": "That a fictional process communicated with a destination or service under the observed conditions.",
    "cannot_prove": "The content transferred, purpose, success, user intent, or every event within the connection.",
    "correlate": "DNS, proxy, firewall, flow, application request, cloud audit, identity session, and vendor records."
  },
  {
    "title": "Loaded modules and runtime components",
    "examples": "Fictional module name, path, version, publisher, load time, parent process, expected baseline, and signature status.",
    "can_support": "Which fictional components were associated with a process and whether the set matches an approved baseline.",
    "cannot_prove": "That a module executed a specific action or that an unexpected module is malicious without additional evidence.",
    "correlate": "Software inventory, deployment artifacts, file hashes, package records, process behavior, support notices, and configuration."
  },
  {
    "title": "Command and action history",
    "examples": "Fictional shell history, administrative action log, application command record, job history, and recent task sequence.",
    "can_support": "That a recorded command or action was submitted within the source's coverage and retention boundaries.",
    "cannot_prove": "That no unrecorded commands occurred, that the command succeeded, or that the named user personally typed it.",
    "correlate": "Process creation, application results, file changes, identity session, network activity, and support records."
  },
  {
    "title": "Temporary and in-memory data",
    "examples": "Fictional cache entries, queued jobs, temporary tokens, process state, clipboard concept, pending requests, and uncommitted application data.",
    "can_support": "The active state of a fictional workflow or service at a particular moment.",
    "cannot_prove": "Long-term persistence, final transaction outcome, or complete historical state.",
    "correlate": "Application logs, database transactions, storage events, job records, support reports, and recovery records."
  },
  {
    "title": "System and service state",
    "examples": "Fictional uptime, service status, scheduled tasks, environment variables, active configuration, runtime version, mounted resources, and queue depth.",
    "can_support": "Which fictional configuration and service conditions existed when the snapshot was taken.",
    "cannot_prove": "That the same state existed earlier or later, or that repository state matches runtime state.",
    "correlate": "Deployment history, configuration repository, startup logs, monitoring, recovery records, and business operations."
  }
];
const priorityFactors = [
  {
    "factor": "Volatility",
    "question": "How quickly could the fictional evidence disappear, rotate, terminate, reconnect, unload, or be overwritten?",
    "higher": "Active processes, sessions, open connections, queued jobs, temporary data, and short-lived runtime state.",
    "lower": "Already preserved exports, archived support records, immutable deployment artifacts, and retained business records.",
    "record": "Expected lifetime, collection deadline, owner, and alternate source."
  },
  {
    "factor": "Case relevance",
    "question": "How directly can the fictional volatile source answer the approved question or test a meaningful alternative explanation?",
    "higher": "The export worker, its child copy process, its service session, its open archive handles, and its current configuration.",
    "lower": "Unrelated processes sharing only a platform or operating system.",
    "record": "Case question supported, hypothesis tested, and decision value."
  },
  {
    "factor": "Collection effect",
    "question": "Could the fictional collection action change the evidence, terminate a process, alter performance, create new logs, or disrupt service?",
    "higher": "A live action that pauses a critical service or changes process state.",
    "lower": "Reviewing a supplied preserved snapshot.",
    "record": "Expected effect, safety check, approval, monitoring, rollback, and stop condition."
  },
  {
    "factor": "Authorization and ownership",
    "question": "Is the fictional source and collection method approved by the correct system, data, privacy, incident, or business owner?",
    "higher": "Partner-controlled systems, shared services, protected data, and methods not listed in the current plan.",
    "lower": "A supplied fictional memory and process snapshot explicitly covered by authorization.",
    "record": "Owner, approval, conditions, delegated authority, and escalation."
  },
  {
    "factor": "Source health and completeness",
    "question": "Does the fictional snapshot contain the expected process, session, connection, module, timing, and capture context?",
    "higher": "A partial or truncated snapshot missing expected process or capture metadata.",
    "lower": "A supplied verified snapshot with documented collection context and known limits.",
    "record": "Capture time, completeness, tool or process, missing regions, delay, and limitation."
  },
  {
    "factor": "Independent alternatives",
    "question": "Which fictional nonvolatile sources can preserve the same case question if the volatile source is incomplete or unavailable?",
    "higher": "No alternate source records the active state.",
    "lower": "Application, identity, deployment, file, storage, cloud, and network records can independently support the same event.",
    "record": "Alternate source, expected overlap, unique value, and reassessment trigger."
  }
];
const processFields = [
  {
    "field": "Process identifier and name",
    "purpose": "Distinguishes the fictional process instance and its reported program name.",
    "example": "PID 4412, archive-export-worker.",
    "risk": "Process identifiers may be reused over time and names may be misleading without path, time, parent, and version context."
  },
  {
    "field": "Parent process",
    "purpose": "Shows which fictional process launched or manages the current process.",
    "example": "scheduler-service → archive-export-worker → copy-worker.",
    "risk": "A missing or unexpected parent requires context and does not automatically prove malicious behavior."
  },
  {
    "field": "Owner and session",
    "purpose": "Connects the fictional process to a service identity, user session, role, or runtime context.",
    "example": "archive-export-service, session SVC-22.",
    "risk": "Ownership does not prove human identity or intent."
  },
  {
    "field": "Executable path and version",
    "purpose": "Identifies the fictional program location, approved artifact, runtime version, and baseline relationship.",
    "example": "/services/archive/export-worker-v3.8.",
    "risk": "A matching path does not prove the runtime binary matches the approved artifact without integrity and deployment evidence."
  },
  {
    "field": "Arguments and configuration",
    "purpose": "Shows the fictional parameters, job identifier, target path, environment, and configuration reference associated with the process.",
    "example": "--job 441 --target approved-copy --config export-legacy.",
    "risk": "Arguments may be truncated, hidden, transformed, or generated automatically."
  },
  {
    "field": "Start time and runtime state",
    "purpose": "Places the fictional process within the event window and shows whether it was active, waiting, stopped, or terminated.",
    "example": "Started 09:15:42; waiting on archive write completion.",
    "risk": "Snapshot timing may omit the start event or later completion."
  },
  {
    "field": "Open files and handles",
    "purpose": "Connects the fictional process to active paths, folders, temporary objects, or mapped resources.",
    "example": "Open handle to /archive/exports/job-441/approved-copy/.",
    "risk": "An open handle does not prove full read, write, copy, or human review."
  },
  {
    "field": "Connections and destinations",
    "purpose": "Links the fictional process to an application service, storage platform, database, or network destination.",
    "example": "Connection to archive-storage-api.internal on the approved service route.",
    "risk": "A connection does not prove payload, purpose, success, or external disclosure."
  },
  {
    "field": "Loaded modules",
    "purpose": "Shows the fictional runtime components associated with the process.",
    "example": "archive-copy-lib v2.1 loaded from the approved package directory.",
    "risk": "Unexpected modules require verification and correlation rather than immediate classification."
  },
  {
    "field": "Derived process finding",
    "purpose": "Connects the fictional process observations to the approved case question with alternatives, confidence, limitations, and parent evidence.",
    "example": "The scheduled export workflow is the best-supported source of the duplicate-copy process.",
    "risk": "Skipping the evidence and limitation fields turns interpretation into unsupported fact."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm authorization and supplied snapshot scope",
    "detail": "Restate the fictional case question, approved process and session subjects, capture time, source owner, privacy boundary, collection method, and prohibited actions.",
    "output": "Volatile-evidence analysis objective."
  },
  {
    "step": "2",
    "title": "Verify evidence identity and integrity",
    "detail": "Confirm the fictional snapshot identifier, parent evidence, integrity result, collection context, source health, completeness statement, and chain-of-custody record.",
    "output": "Verified volatile-evidence starting point."
  },
  {
    "step": "3",
    "title": "Inventory processes, sessions, and runtime state",
    "detail": "Record fictional process names, identifiers, parents, owners, sessions, paths, versions, arguments, start times, states, files, connections, modules, and services.",
    "output": "Process and session inventory."
  },
  {
    "step": "4",
    "title": "Build the process and session maps",
    "detail": "Connect fictional parent-child relationships, service identities, job identifiers, open files, network destinations, application roles, and business workflows.",
    "output": "Process tree and session map."
  },
  {
    "step": "5",
    "title": "Compare with approved baselines",
    "detail": "Check fictional expected names, paths, owners, parents, arguments, modules, connections, schedules, artifacts, configuration, and deployment versions.",
    "output": "Baseline comparison and deviations."
  },
  {
    "step": "6",
    "title": "Test alternative explanations",
    "detail": "Compare fictional approved automation, retry, synchronization, maintenance, recovery, user action, stale configuration, and unsupported process behavior.",
    "output": "Hypothesis matrix with evidence and gaps."
  },
  {
    "step": "7",
    "title": "Correlate independent sources",
    "detail": "Compare fictional file, identity, application, deployment, network, cloud, support, business, storage, and source-health records.",
    "output": "Correlated findings and confidence update."
  },
  {
    "step": "8",
    "title": "Report bounded conclusions",
    "detail": "Write fictional observations, findings, alternatives, confidence, limitations, impact boundaries, collection gaps, follow-up needs, and reviewer decisions.",
    "output": "Volatile-evidence findings package."
  }
];
const processRecords = [
  {
    "id": "P-01",
    "process": "scheduler-service",
    "parent": "service-manager",
    "owner": "archive-platform-service",
    "state": "Running",
    "path": "/services/scheduler/v5.2",
    "arguments": "--schedule archive-export-jobs",
    "meaning": "Expected fictional parent service for approved export jobs.",
    "limit": "The snapshot does not show every earlier scheduling event."
  },
  {
    "id": "P-02",
    "process": "archive-export-worker",
    "parent": "scheduler-service",
    "owner": "archive-export-service",
    "state": "Running",
    "path": "/services/archive/export-worker-v3.8",
    "arguments": "--job 441 --config export-legacy",
    "meaning": "Connects the approved export job to the outdated configuration reference.",
    "limit": "Runtime path requires deployment and integrity evidence to confirm the exact approved artifact."
  },
  {
    "id": "P-03",
    "process": "copy-worker",
    "parent": "archive-export-worker",
    "owner": "archive-export-service",
    "state": "Waiting",
    "path": "/services/archive/copy-worker-v2.1",
    "arguments": "--source approved --target approved-copy",
    "meaning": "Provides the strongest fictional volatile link to the duplicate-path mechanism.",
    "limit": "The snapshot represents one moment and does not show the full operation history."
  },
  {
    "id": "P-04",
    "process": "preview-worker",
    "parent": "archive-export-worker",
    "owner": "archive-preview-service",
    "state": "Idle",
    "path": "/services/archive/preview-worker-v4.0",
    "arguments": "--target approved",
    "meaning": "Matches the expected preview workflow for the approved folder.",
    "limit": "Idle state does not prove whether earlier previews completed successfully."
  },
  {
    "id": "P-05",
    "process": "archive-review-ui",
    "parent": "desktop-session",
    "owner": "research-review-user",
    "state": "Running",
    "path": "/apps/archive-review/v6.4",
    "arguments": "--case RA-202",
    "meaning": "Supports an active fictional review application session connected to the approved workflow.",
    "limit": "The process does not prove which files a human viewed or read."
  },
  {
    "id": "P-06",
    "process": "sync-agent",
    "parent": "service-manager",
    "owner": "archive-sync-service",
    "state": "Running",
    "path": "/services/archive/sync-agent-v7.1",
    "arguments": "--scope recovery-mirror",
    "meaning": "Provides an alternative automated-copy hypothesis that must be compared with path and job evidence.",
    "limit": "The supplied connection and handle records do not link this process to the duplicate folder."
  },
  {
    "id": "P-07",
    "process": "support-monitor",
    "parent": "monitoring-agent",
    "owner": "operations-monitor",
    "state": "Running",
    "path": "/services/monitor/support-monitor-v2.5",
    "arguments": "--watch archive-job-health",
    "meaning": "Explains the fictional support alert and service-health records.",
    "limit": "Monitoring data reflects configured coverage and may omit unmonitored events."
  },
  {
    "id": "P-08",
    "process": "temp-export-cleaner",
    "parent": "scheduler-service",
    "owner": "archive-maintenance-service",
    "state": "Sleeping",
    "path": "/services/archive/temp-cleaner-v1.9",
    "arguments": "--retention 60m",
    "meaning": "Explains temporary-file cleanup behavior and missing cache artifacts.",
    "limit": "The snapshot does not prove which temporary objects were removed earlier."
  }
];
const sessionRecords = [
  {
    "id": "S-01",
    "session": "SVC-22",
    "identity": "archive-export-service",
    "type": "Service session",
    "start": "09:14",
    "related": "P-02 and P-03",
    "evidence": "Identity event, process ownership, application job, and storage transaction.",
    "conclusion": "Best-supported service context for the fictional duplicate-copy operation."
  },
  {
    "id": "S-02",
    "session": "SVC-19",
    "identity": "archive-preview-service",
    "type": "Service session",
    "start": "09:16",
    "related": "P-04",
    "evidence": "Preview cache, application job, and process snapshot.",
    "conclusion": "Expected preview-service context for the approved folder."
  },
  {
    "id": "S-03",
    "session": "USR-08",
    "identity": "research-review-user",
    "type": "User application session",
    "start": "09:28",
    "related": "P-05",
    "evidence": "Recent-item artifact, application launch, and support workflow.",
    "conclusion": "Supports that the review application referenced the approved folder, not that every file was read."
  },
  {
    "id": "S-04",
    "session": "SVC-31",
    "identity": "archive-sync-service",
    "type": "Service session",
    "start": "08:52",
    "related": "P-06",
    "evidence": "Sync schedule, recovery-mirror connection, and no duplicate-folder handle.",
    "conclusion": "Related platform activity but not the best-supported source of the duplicate path."
  }
];
const findingMatrix = [
  {
    "finding": "F-01",
    "statement": "The fictional scheduler launched the approved archive-export worker for job 441.",
    "support": "Expected parent-child relationship, service identity, job arguments, application record, and business schedule.",
    "alternative": "Manual execution is not supported by the supplied session or command-history records.",
    "confidence": "High",
    "limitation": "The snapshot does not include every earlier process event."
  },
  {
    "finding": "F-02",
    "statement": "The export worker launched a child copy process targeting the duplicate approved-copy path.",
    "support": "Process tree, arguments, open path handle, storage event, delayed application job, and matching file hashes.",
    "alternative": "Synchronization or manual copying remain possible but receive less support.",
    "confidence": "High",
    "limitation": "The process snapshot represents one moment and does not capture the full copy duration."
  },
  {
    "finding": "F-03",
    "statement": "The outdated export-legacy configuration is the best-supported condition enabling the duplicate-path behavior.",
    "support": "Worker arguments, runtime configuration, deployment record, path suffix, and later configuration correction.",
    "alternative": "A one-time manual override is not supported by the supplied command or owner records.",
    "confidence": "High",
    "limitation": "Exact activation start time requires deployment and startup-log correlation."
  },
  {
    "finding": "F-04",
    "statement": "The review application referenced the approved folder during a user session.",
    "support": "Running application process, recent-item artifact, support workflow, and approved-folder preview cache.",
    "alternative": "Automated application initialization may create some reference artifacts.",
    "confidence": "High for application reference; low for human viewing",
    "limitation": "The evidence does not prove that the user fully opened or read every file."
  },
  {
    "finding": "F-05",
    "statement": "The fictional sync agent is related to the archive platform but is not supported as the creator of the duplicate folder.",
    "support": "Its session, arguments, open handles, and connection target are limited to the recovery mirror.",
    "alternative": "Earlier activity outside the snapshot remains possible but is not supported by storage or application records.",
    "confidence": "Medium-High",
    "limitation": "A snapshot cannot prove the process never interacted with the folder at another time."
  },
  {
    "finding": "F-06",
    "statement": "No supplied volatile, file, cloud, or network record supports external disclosure.",
    "support": "Internal-only connections, cloud audit, no public-share event, no unrelated-account session, and no external destination.",
    "alternative": "Activity outside the approved window or unavailable retention cannot be completely excluded.",
    "confidence": "Medium-High",
    "limitation": "This is a bounded no-supported-evidence conclusion rather than proof of impossibility."
  }
];
const commonMistakes = [
  "Treating a fictional memory or process snapshot as a complete history of the system.",
  "Assuming a process name proves what the process actually is or what it did.",
  "Assuming an unexpected parent-child relationship automatically proves malicious behavior.",
  "Treating a service identity as proof of a specific human actor or intent.",
  "Treating an open file handle as proof that the full file was read, copied, modified, or shared.",
  "Treating an open network connection as proof of content transfer, purpose, success, or external disclosure.",
  "Using command history as a complete record of every command or action.",
  "Ignoring snapshot time, collection method, completeness, source health, paged-out data, protected regions, terminated processes, and later changes.",
  "Collecting live volatile evidence without authorization, owner coordination, operational review, or a documented safe method.",
  "Running commands, tools, or scripts against a real system as part of a training exercise.",
  "Failing to preserve the original fictional snapshot and working only from screenshots or copied notes.",
  "Claiming exact human intent or external impact from process and session artifacts alone.",
  "Publishing real process names, paths, modules, sessions, connections, command records, users, timestamps, or internal configurations in a portfolio."
];
const quizQuestions = [
  {
    "question": "What makes fictional volatile evidence different from many preserved records?",
    "choices": [
      "It may change, terminate, rotate, disappear, or lose context quickly while the system or service is running.",
      "It is always more reliable.",
      "It never requires authorization.",
      "It automatically proves intent."
    ],
    "answer": 0,
    "explanation": "Volatile evidence may have high time sensitivity and should be handled through an authorized, safe collection plan."
  },
  {
    "question": "What can a fictional parent-child process relationship support?",
    "choices": [
      "Which process launched another process and how the execution fits an approved or unexpected workflow.",
      "Which human intended the action.",
      "That every child process is malicious.",
      "That the parent performed every child action."
    ],
    "answer": 0,
    "explanation": "Parent-child relationships provide execution context but not automatic intent or classification."
  },
  {
    "question": "What can an open fictional file handle support?",
    "choices": [
      "That a process had an active relationship with the object at the snapshot moment.",
      "That the entire file was read.",
      "That the file was shared externally.",
      "That a human selected the file."
    ],
    "answer": 0,
    "explanation": "A handle is useful contextual evidence but should not be overstated."
  },
  {
    "question": "Why should a process path and version be correlated with deployment evidence?",
    "choices": [
      "The reported path does not independently prove that the running binary matches the approved artifact or configuration.",
      "Paths are never useful.",
      "Deployment records always replace process evidence.",
      "Versions prove human intent."
    ],
    "answer": 0,
    "explanation": "Runtime state should be compared with approved source, artifact, configuration, and deployment records."
  },
  {
    "question": "What should happen when a fictional snapshot is incomplete?",
    "choices": [
      "Document the limitation, use independent alternate sources, adjust confidence, preserve missing questions, and avoid claiming a complete history.",
      "Assume missing activity did not occur.",
      "Delete the snapshot.",
      "Fill the gap with guesses."
    ],
    "answer": 0,
    "explanation": "Incomplete volatile evidence creates uncertainty that should remain visible."
  },
  {
    "question": "Which conclusion is strongest when a user application process and recent-item record reference a folder?",
    "choices": [
      "The application context referenced the folder, but full human viewing or reading is not proven.",
      "The user read every file.",
      "The folder was shared externally.",
      "The files were modified."
    ],
    "answer": 0,
    "explanation": "The evidence supports application reference while preserving the human-interaction limit."
  },
  {
    "question": "What makes a fictional volatile-evidence finding defensible?",
    "choices": [
      "It links observations to baselines, independent evidence, alternatives, confidence, limitations, scope, and follow-up needs.",
      "It uses the strongest possible language.",
      "It relies on one process name.",
      "It contains many screenshots."
    ],
    "answer": 0,
    "explanation": "Defensible findings are traceable, bounded, reproducible, and open about uncertainty."
  }
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
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
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

export default function MemoryProcessVolatileEvidenceConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.11),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I12
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.5 Memory, Process, and Volatile Evidence Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how a defender interprets supplied fictional
            memory and process evidence, builds process and session maps,
            compares runtime state with approved baselines, accounts for
            volatility and snapshot limitations, tests alternative
            explanations, and writes bounded findings without executing
            commands or touching real systems.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I12: Digital Forensics Basics"
          lessonTitle="Memory, Process, and Volatile Evidence Concepts"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive snapshot and related records.",
            "I will not run commands, scripts, tools, collectors, scanners, memory utilities, or forensic software against any real system.",
            "I will not access, image, inspect, alter, connect to, terminate, suspend, dump, or collect from any real process, device, account, session, network, or private record.",
            "I will treat the fictional snapshot as one bounded moment rather than a complete system history.",
            "I will separate observations, findings, alternatives, confidence, limitations, impact boundaries, and follow-up evidence needs.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Process Snapshot Can Show an Active Workflow, but Not the Entire Story"
        >
          <p className="leading-8">
            The fictional Northbridge process snapshot shows the
            approved scheduler, an archive-export worker, a child copy worker,
            a preview worker, a review application, a synchronization service,
            a monitoring process, and a temporary-file cleaner. The child copy
            process targets the duplicate folder and uses an outdated
            configuration reference. However, the snapshot captures only one
            moment. It does not independently prove human intent, complete
            historical activity, external disclosure, or every command that
            occurred before or after collection.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak interpretation
              </p>

              <p className="mt-2 leading-7">
                The unfamiliar child process proves malicious activity, the
                service account identifies the human responsible, and the open
                connection proves data left the organization.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional interpretation
              </p>

              <p className="mt-2 leading-7">
                Record the process tree, owner, path, version, arguments, files,
                modules, sessions, connections, and capture limits; compare the
                approved baseline; correlate independent evidence; and preserve
                alternatives.
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
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Volatile Evidence May Disappear Quickly and Still Remain Incomplete"
        >
          <p className="leading-8">
            Fictional processes terminate, sessions expire, network
            connections close, modules unload, queues drain, caches change, and
            temporary state disappears. This creates urgency, but urgency does
            not remove authorization, privacy, integrity, operational safety, or
            evidence limits. A professional defender uses a documented
            collection plan, preserves the supplied snapshot, records capture
            context, understands what may be missing, and avoids claiming a
            complete history from one moment.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Snapshot–Baseline–Correlation–Boundary Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Snapshot", "What fictional processes, sessions, files, modules, connections, services, arguments, and temporary states appear at the capture moment?"],
              ["Baseline", "Which fictional names, paths, owners, parents, versions, modules, schedules, arguments, and destinations are expected?"],
              ["Correlation", "Which independent fictional file, identity, application, deployment, network, cloud, support, storage, and business records agree or conflict?"],
              ["Boundary", "Which fictional historical actions, intent, human control, content transfer, missing processes, and later events remain unsupported?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Memory, Process, and Volatile-Evidence Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Volatile Evidence Sources
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Runtime Evidence Families and Their Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {volatileSources.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Examples
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.examples}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Can support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.can_support}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Cannot prove alone
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.cannot_prove}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Correlate with
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.correlate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Collection Priority
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Factors before Preserving Volatile Evidence
          </h2>

          <div className="mt-6 grid gap-5">
            {priorityFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.factor}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Higher priority or risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.higher}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Lower priority or risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.lower}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Record in the plan
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.record}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Process Analysis Fields
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fields for a Reviewable Process Record
          </h2>

          <div className="mt-6 grid gap-5">
            {processFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Interpretation risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Analyze a Supplied Fictional Volatile-Evidence Snapshot
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Volatile-Evidence Dashboard"
          subtitle="Training dashboard for fictional evidence."
          metrics={[
            {
              label: "Processes indexed",
              value: "8",
              note: "Eight fictional processes are mapped with parent, owner, path, arguments, state, and evidence limits.",
            },
            {
              label: "Sessions correlated",
              value: "4",
              note: "Service and user sessions are linked to process, identity, application, and business records.",
            },
            {
              label: "Unresolved runtime questions",
              value: "2",
              note: "Exact configuration activation time and complete human interaction remain outside current proof.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Child Process Uses an Outdated Configuration"
          severity="High"
          time="09:24 AM"
          source="Fake Volatile Evidence Console"
          details="The fictional archive-export worker launched a child copy process with the target approved-copy and the configuration reference export-legacy."
          recommendation="Preserve the supplied snapshot and context, verify integrity and lineage, compare the process tree with the approved baseline, correlate deployment, application, file, storage, identity, network, and business evidence, preserve alternative explanations, avoid terminating or modifying any real process, and report only bounded findings."
        />

        <FakeLogPanel
          title="Fake Northbridge Process and Session Records"
          logs={[
            "09:14 SESSION SVC-22 identity='archive-export-service' state='active'",
            "09:15 PROCESS P-01 name='scheduler-service' parent='service-manager'",
            "09:15 PROCESS P-02 name='archive-export-worker' parent='scheduler-service'",
            "09:15 ARG P-02 job='441' config='export-legacy'",
            "09:16 PROCESS P-03 name='copy-worker' parent='archive-export-worker'",
            "09:16 ARG P-03 source='approved' target='approved-copy'",
            "09:16 HANDLE P-03 path='/archive/exports/job-441/approved-copy/'",
            "09:17 CONNECT P-03 destination='archive-storage-api.internal'",
            "09:18 PROCESS P-04 name='preview-worker' target='approved'",
            "09:28 SESSION USR-08 identity='research-review-user' app='archive-review-ui'",
            "09:29 RECENT USR-08 target='approved_folder'",
            "09:31 PROCESS P-06 name='sync-agent' scope='recovery-mirror'",
            "09:32 HANDLE P-06 target='recovery_mirror_only'",
            "09:38 HEALTH application_logs='delayed_12m'",
            "09:54 CORRELATE duplicate_mechanism='copy-worker' confidence='high'",
            "10:02 LIMIT human_intent='not_proven' external_disclosure='not_supported'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Process Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Process Inventory
          </h2>

          <div className="mt-6 grid gap-5">
            {processRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.process}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.state}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Parent", item.parent],
                    ["Owner", item.owner],
                    ["Path", item.path],
                    ["Arguments", item.arguments],
                    ["Evidence meaning", item.meaning],
                    ["Limitation", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Session Map
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Identity and Process Context
          </h2>

          <div className="mt-6 grid gap-4">
            {sessionRecords.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.14fr_0.28fr_0.45fr_0.35fr_0.55fr_1fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.id}
                </p>

                <p className="font-black text-blue-200">{item.session}</p>

                <p className="text-sm font-semibold text-white">
                  {item.identity}
                </p>

                <p className="text-sm text-slate-300">{item.type}</p>

                <p className="text-sm text-emerald-100">
                  {item.start} · {item.related}
                </p>

                <div>
                  <p className="text-sm leading-6 text-slate-300">
                    {item.evidence}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cyan-100">
                    {item.conclusion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Volatile-Evidence Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findingMatrix.map((item) => (
              <article
                key={item.finding}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.finding}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Volatile-Evidence Conclusion Is Best Supported?"
          evidence={[
            "The fictional scheduler launched the approved archive-export worker for job 441.",
            "The export worker launched a child copy process targeting the duplicate approved-copy path.",
            "The process arguments reference the outdated export-legacy configuration.",
            "The copy process holds the duplicate-folder path and connects only to the internal archive-storage service.",
            "File metadata shows matching content hashes between approved and duplicate folders.",
            "Delayed application records later confirm the same job identifier and copy operation.",
            "No supplied fictional cloud, network, or identity evidence supports external disclosure.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The approved fictional export workflow using an outdated configuration is the best-supported source of the duplicate-copy process; the evidence does not support human intent or external disclosure.",
            "A human intentionally stole the files.",
            "The unfamiliar child process proves malware.",
            "The internal network connection proves data exfiltration.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion connects process, file, application, identity, and network evidence while preserving the human-intent and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Volatile-Evidence Analysis"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
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
          title="Build the Northbridge Process and Session Analysis"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Process Tree, Session Map, Baseline Comparison, and Findings
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional snapshot and related records to
                create a complete volatile-evidence analysis package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Snapshot identifier, source, owner, capture time, integrity, completeness, and limitation statement.</li>
                <li>Process inventory with identifiers, parents, owners, sessions, paths, versions, arguments, state, files, connections, and modules.</li>
                <li>Process tree and session map.</li>
                <li>Approved baseline comparison and deviations.</li>
                <li>Volatility, collection effect, authorization, source-health, and alternate-source notes.</li>
                <li>Approved workflow, retry, synchronization, maintenance, recovery, user-action, and stale-configuration hypotheses.</li>
                <li>Independent corroboration, conflicts, findings, confidence, impact boundary, and follow-up needs.</li>
                <li>Portfolio-safe technical and leadership summaries.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not run tools, commands, scripts, memory collectors, or process
            utilities on any real system. Complete the lab only from fictional
            records shown on this page.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Unexpected Child Process Appears"
          scenario="The fictional export worker has a child copy process using an outdated configuration and the duplicate-folder target."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the supplied snapshot, compare the process with the approved baseline, correlate deployment, application, file, storage, identity, network, and business records, test automated and manual explanations, and report bounded confidence.",
              outcome:
                "Best defensive choice. The process is investigated without assuming classification or intent.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Call it malware because the process is unexpected.",
              outcome:
                "Unsupported. Unexpected does not automatically mean malicious.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Terminate the process on a real system to see what happens.",
              outcome:
                "Unsafe and unauthorized. This lesson uses supplied fictional evidence only.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A User Session and Recent-Item Record Reference the Folder"
          scenario="The fictional archive-review application runs under a user session and a recent-item artifact points to the approved folder."
          choices={[
            {
              label: "Choice A",
              response:
                "Record that the application context referenced the folder, correlate application and support records, and avoid claiming that the human fully opened or read every file.",
              outcome:
                "Best defensive choice. The evidence remains within its real boundary.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that the user reviewed every file.",
              outcome:
                "Unsupported. Process and recent-item evidence do not prove full human interaction.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the records because they do not prove everything.",
              outcome:
                "Weak. They still provide useful contextual evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Memory, Process, and Volatile-Evidence Checklist"
          items={[
            "I can explain why fictional processes, sessions, connections, modules, temporary data, and runtime state may change or disappear quickly.",
            "I can verify the supplied snapshot identifier, integrity, source, capture time, completeness, chain of custody, and limitations.",
            "I can record process identifiers, names, parents, owners, sessions, paths, versions, arguments, start times, state, files, connections, and modules.",
            "I can build process trees and session maps without treating them as proof of intent.",
            "I can compare fictional runtime state with approved process, path, owner, parent, version, argument, module, connection, and schedule baselines.",
            "I can distinguish an open file handle from proof of full read, copy, modification, sharing, or human selection.",
            "I can distinguish an open connection from proof of payload, purpose, success, or external disclosure.",
            "I can preserve snapshot limitations and use independent file, identity, application, deployment, network, cloud, support, storage, and business evidence.",
            "I can write findings with alternatives, confidence, impact boundaries, gaps, and authorized follow-up needs.",
            "I will use only fictional records and never expose or inspect real processes, sessions, modules, commands, connections, users, systems, or private information.",
          ]}
        />

        <MiniQuiz
          title="I12.5 Mini Quiz: Memory, Process, and Volatile Evidence Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Memory, Process, and Volatile Evidence Analysis Package for the Northbridge Research Archive case. Include snapshot identity and integrity, capture context, volatility assessment, process inventory, process tree, session map, baseline comparison, files and connections, module notes, source-health and completeness limits, competing explanations, independent corroboration, findings, confidence, limitations, impact boundaries, follow-up needs, reviewer notes, and a portfolio-safety statement."
          tips={[
            "Use only fictional processes, identifiers, sessions, paths, modules, commands, connections, files, users, owners, times, services, and organizations.",
            "Never present a process name, parent-child relationship, open handle, connection, module, or command-history record as proof of intent or impact by itself.",
            "Treat the snapshot as one bounded moment and preserve what may be missing before, during, or after collection.",
            "Link every process map, session map, table, timeline event, finding, and report statement to its exact fictional parent evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Volatile evidence may disappear quickly, but urgency does not remove authorization, privacy, integrity, operational safety, or evidence limits.",
            "A fictional process snapshot represents one moment rather than a complete history of the system.",
            "Process names, owners, parent-child relationships, arguments, handles, connections, modules, and sessions provide context but do not independently prove human intent or impact.",
            "Runtime state should be compared with approved baselines and correlated with independent file, identity, application, deployment, network, cloud, storage, support, and business records.",
            "Open files and connections should be reported within their real evidence boundary rather than treated as proof of full access or disclosure.",
            "Volatile-evidence findings should preserve snapshot completeness, source health, alternatives, confidence, limitations, and follow-up needs.",
            "Portfolio artifacts should recreate the defensive reasoning with clearly fictional processes and records rather than exposing real runtime or organizational details.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Next I12
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