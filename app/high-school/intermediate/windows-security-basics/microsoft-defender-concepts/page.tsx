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
const modulePath = `${trackPath}/windows-security-basics`;
const previousLesson = `${modulePath}/windows-updates-and-security-settings`;
const nextLesson = `${modulePath}/event-viewer-and-windows-logs`;

const objectives = [
  "Explain how Microsoft Defender concepts such as real-time protection, scans, detections, quarantine, exclusions, reputation checks, and cloud-delivered protection fit together.",
  "Interpret fictional Defender alerts using detection name, severity, file path, process, user, action, status, source, and timeline context.",
  "Distinguish confirmed alert facts from likely explanations, missing evidence, alternate explanations, and unsupported assumptions.",
  "Evaluate the risks of broad, stale, ownerless, or undocumented exclusions without modifying real devices.",
  "Create a professional Defender review with evidence preservation, containment, owner assignment, validation, rollback, monitoring, and documentation.",
];

const vocabulary = [
  [
    "Real-time protection",
    "Continuous monitoring intended to identify suspicious files, processes, downloads, and activity as they occur.",
  ],
  [
    "Quick scan",
    "A focused scan of common locations and active areas where suspicious activity is more likely to appear.",
  ],
  [
    "Full scan",
    "A broader scan that reviews more files, folders, and locations and usually takes longer.",
  ],
  [
    "Custom scan",
    "A scan limited to a specific file, folder, drive, or approved training location.",
  ],
  [
    "Detection",
    "A security record indicating that a file, process, behavior, or condition matched a protection rule or model.",
  ],
  [
    "Quarantine",
    "A controlled state used to isolate a detected item from normal access or execution.",
  ],
  [
    "Remediation",
    "The approved action used to remove, isolate, block, restore, or otherwise address a detected item or condition.",
  ],
  [
    "Exclusion",
    "A configured file, folder, process, or object that protection controls are instructed not to inspect normally.",
  ],
  [
    "Protection history",
    "A record of detections, actions, status changes, and related protection events.",
  ],
  [
    "Reputation-based protection",
    "Controls that use trust, prevalence, publisher, source, or reputation information to evaluate files and downloads.",
  ],
  [
    "Cloud-delivered protection",
    "A protection capability that uses online intelligence and rapid analysis to improve detection and response.",
  ],
  [
    "False positive",
    "A detection that identifies legitimate activity as suspicious or unsafe.",
  ],
];

const protectionLayers = [
  {
    layer: "Real-time protection",
    purpose:
      "Reviews active files, downloads, processes, and behavior as activity occurs.",
    evidence:
      "Protection state, detection time, affected path, process, user, action, and follow-up status.",
    limitation:
      "A clean result does not prove that every unsafe condition is absent.",
  },
  {
    layer: "Scheduled and manual scans",
    purpose:
      "Reviews selected areas or the wider device state on a recurring or requested basis.",
    evidence:
      "Scan type, start and finish time, scope, items reviewed, detections, errors, and completion status.",
    limitation:
      "Scan coverage depends on scope, timing, exclusions, access, and the device state during the scan.",
  },
  {
    layer: "Quarantine and remediation",
    purpose:
      "Isolates or addresses detected items so they cannot continue normal use.",
    evidence:
      "Detection, action, item status, remediation result, restore state, and follow-up scan.",
    limitation:
      "Quarantine does not automatically explain origin, user intent, or whether related activity occurred elsewhere.",
  },
  {
    layer: "Reputation and download protection",
    purpose:
      "Evaluates trust, source, prevalence, publisher, or reputation for files and downloads.",
    evidence:
      "Download source, publisher, reputation status, browser warning, file path, and user decision.",
    limitation:
      "Reputation changes over time and does not replace technical or business context.",
  },
  {
    layer: "Cloud-delivered protection",
    purpose:
      "Uses rapidly updated intelligence and analysis to improve detection and response speed.",
    evidence:
      "Protection state, connectivity, submission status, cloud verdict, timing, and local action.",
    limitation:
      "Availability, privacy settings, connectivity, and policy affect how this layer operates.",
  },
  {
    layer: "Tamper and configuration protection",
    purpose:
      "Helps preserve approved protection settings and reduce unauthorized changes.",
    evidence:
      "Setting state, change event, administrator context, policy source, exception, and owner.",
    limitation:
      "Does not prove the entire endpoint is secure or that every configuration drift was prevented.",
  },
];

const alertFields = [
  {
    field: "Detection name",
    meaning:
      "The label assigned to the matched file, behavior, condition, or rule.",
    question:
      "What exactly was detected, and which evidence supports that label?",
  },
  {
    field: "Severity",
    meaning:
      "A priority indicator such as low, medium, or high.",
    question:
      "Does the severity reflect confirmed impact, or only the alerting system's priority?",
  },
  {
    field: "Affected item",
    meaning:
      "The fictional file, folder, process, or object linked to the detection.",
    question:
      "What is the full path, owner, source, purpose, and business context?",
  },
  {
    field: "Process context",
    meaning:
      "The fictional process, parent process, user, or application associated with the event.",
    question:
      "Which approved workflow or software chain explains the activity?",
  },
  {
    field: "Action",
    meaning:
      "The response taken, such as blocked, quarantined, removed, allowed, or failed.",
    question:
      "Did the action complete successfully, and does follow-up evidence confirm the intended result?",
  },
  {
    field: "Status",
    meaning:
      "The current state of the detection or remediation workflow.",
    question:
      "Is the item resolved, pending, failed, restored, allowed, or awaiting review?",
  },
  {
    field: "Source and time",
    meaning:
      "Where the alert came from and when the event was recorded.",
    question:
      "Does the timeline align with downloads, sign-ins, application use, updates, and user reports?",
  },
  {
    field: "Exclusion context",
    meaning:
      "Whether the affected item or process is covered by an exclusion.",
    question:
      "Is the exclusion approved, narrow, owned, time-bounded, and still necessary?",
  },
];

const scanTypes = [
  {
    type: "Quick scan",
    bestFor:
      "Routine review of common active areas and likely locations.",
    evidence:
      "Start time, completion, reviewed scope, detections, errors, and follow-up.",
    caution:
      "A quick scan does not cover every file or location.",
  },
  {
    type: "Full scan",
    bestFor:
      "A broader device review when a wider scope is justified and operationally acceptable.",
    evidence:
      "Total duration, files or locations reviewed, inaccessible areas, detections, and system impact.",
    caution:
      "Long duration and resource use require planning; full scope still depends on access and exclusions.",
  },
  {
    type: "Custom scan",
    bestFor:
      "Targeted review of a supplied fictional file, folder, or approved training location.",
    evidence:
      "Exact path, owner, reason, scan result, and connection to the original alert.",
    caution:
      "The narrow scope may miss related activity outside the chosen location.",
  },
  {
    type: "Offline-style review concept",
    bestFor:
      "Understanding how defenders may use a controlled alternate state when normal running conditions interfere with inspection.",
    evidence:
      "Approved reason, owner, device state, result, recovery, and validation.",
    caution:
      "This lesson does not instruct students to run such a process on real devices.",
  },
];

const exclusionRisks = [
  {
    type: "Broad folder exclusion",
    example:
      "A fictional exclusion covers the entire Downloads folder.",
    risk:
      "High-risk files may bypass normal inspection in a common download location.",
    strongerDesign:
      "Use a narrower, documented, time-bounded exception tied to an approved test or application need.",
  },
  {
    type: "Process exclusion",
    example:
      "A fictional development tool process is excluded from scanning.",
    risk:
      "Files or activity handled by that process may receive reduced inspection.",
    strongerDesign:
      "Confirm publisher, path, owner, exact use, expiration, and whether a more limited path or file exception is possible.",
  },
  {
    type: "Stale project exclusion",
    example:
      "A fictional testing exclusion remains after the project ends.",
    risk:
      "Protection remains weakened after the approved business need disappears.",
    strongerDesign:
      "Remove the exclusion through controlled change after dependency and owner confirmation.",
  },
  {
    type: "Ownerless exception",
    example:
      "A fictional exclusion has no current application or security owner.",
    risk:
      "No one is accountable for risk, review, validation, or removal.",
    strongerDesign:
      "Assign a temporary review owner, validate dependency, and remove or renew with documented approval.",
  },
  {
    type: "Permanent exception",
    example:
      "A fictional exclusion has no expiration or recertification date.",
    risk:
      "Temporary risk acceptance can become permanent configuration drift.",
    strongerDesign:
      "Require expiration, review date, evidence, and approved renewal.",
  },
  {
    type: "Unverified source exception",
    example:
      "A fictional file is allowed because a user says it is safe.",
    risk:
      "User confidence does not replace trusted source, publisher, business need, or technical evidence.",
    strongerDesign:
      "Use multiple evidence sources and an approved review process before allowing or restoring.",
  },
];

const evidenceMatrix = [
  {
    source: "Protection state",
    supports:
      "Whether real-time, cloud, reputation, and related controls are reported as active or inactive.",
    limitation:
      "Does not prove that every control is functioning perfectly or that no unsafe condition exists.",
  },
  {
    source: "Detection record",
    supports:
      "Detection name, severity, affected item, process, user, time, and initial action.",
    limitation:
      "Does not prove complete origin, intent, impact, or related activity elsewhere.",
  },
  {
    source: "Quarantine record",
    supports:
      "Whether a detected item was isolated and what current action status is reported.",
    limitation:
      "Does not prove all copies, related files, persistence, or root cause were addressed.",
  },
  {
    source: "Scan history",
    supports:
      "Scan type, timing, scope, completion, errors, and detections.",
    limitation:
      "Coverage depends on scope, access, exclusions, device state, and timing.",
  },
  {
    source: "File and publisher metadata",
    supports:
      "Path, filename, publisher, signature, version, source, and ownership context.",
    limitation:
      "Metadata can be incomplete or misleading and does not prove safe behavior.",
  },
  {
    source: "Process and parent-process evidence",
    supports:
      "Which process handled the item, under which user, and which parent process launched it.",
    limitation:
      "Does not by itself prove the user's intent or the complete application workflow.",
  },
  {
    source: "Exclusion configuration",
    supports:
      "Which files, folders, processes, or objects receive reduced inspection.",
    limitation:
      "Does not prove the exclusion is approved, required, or safe.",
  },
  {
    source: "User, support, and change records",
    supports:
      "Reported action, business purpose, owner, approval, exception, and timeline context.",
    limitation:
      "Human reports and documentation may be incomplete or stale.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define device and scope",
    detail:
      "Identify the fictional device role, owner, user, time window, protection state, and approved evidence sources.",
  },
  {
    step: "2",
    title: "Preserve alert evidence",
    detail:
      "Record detection name, severity, path, process, user, action, status, time, source, and protection settings.",
  },
  {
    step: "3",
    title: "Correlate context",
    detail:
      "Connect downloads, browser events, file metadata, process chain, sign-ins, application use, exclusions, and user reports.",
  },
  {
    step: "4",
    title: "Assess action and scope",
    detail:
      "Confirm quarantine or remediation, review related items, identify evidence gaps, and check whether the alert is isolated or part of a wider pattern.",
  },
  {
    step: "5",
    title: "Review configuration",
    detail:
      "Evaluate real-time protection, scans, exclusions, reputation controls, cloud protection, ownership, and exceptions.",
  },
  {
    step: "6",
    title: "Document and validate",
    detail:
      "Write the finding, confidence, owner, containment, approved next step, follow-up scan, settings validation, monitoring, and review date.",
  },
];

const mistakes = [
  "Treating one Defender alert as proof of complete device compromise.",
  "Assuming quarantine automatically explains how the item arrived or whether related activity remains.",
  "Restoring a quarantined item because the user says it is needed.",
  "Deleting evidence before recording the alert, path, process, user, action, and timeline.",
  "Disabling real-time protection to make an application work.",
  "Creating a broad folder or process exclusion instead of solving the underlying compatibility problem.",
  "Leaving temporary exclusions in place after testing ends.",
  "Ignoring failed remediation, incomplete scans, inaccessible locations, or protection errors.",
  "Treating a clean scan as proof that the device is completely safe.",
  "Ignoring process and parent-process context.",
  "Failing to correlate the alert with downloads, browser events, user reports, updates, and application ownership.",
  "Publishing real detection names, usernames, device names, paths, file hashes, or internal alert details in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What does quarantine do?",
    choices: [
      "It isolates a detected item from normal use while defenders review or remediate it.",
      "It proves the entire device is clean.",
      "It deletes every related file automatically.",
      "It identifies the user's intent.",
    ],
    answer: 0,
    explanation:
      "Quarantine isolates the detected item but does not answer every investigative question.",
  },
  {
    question:
      "Why is a broad Downloads-folder exclusion risky?",
    choices: [
      "Files in a common high-risk location may bypass normal inspection.",
      "Downloads folders cannot contain files.",
      "Exclusions improve every application.",
      "The exclusion automatically expires.",
    ],
    answer: 0,
    explanation:
      "Broad exclusions reduce protection across a large and commonly used location.",
  },
  {
    question:
      "What does a clean quick scan prove?",
    choices: [
      "No detection appeared within the scan's reviewed scope under the recorded conditions.",
      "The device is guaranteed safe.",
      "No exclusions exist.",
      "No suspicious activity ever occurred.",
    ],
    answer: 0,
    explanation:
      "A clean result is limited by scope, timing, exclusions, and available access.",
  },
  {
    question:
      "Why should parent-process evidence be reviewed?",
    choices: [
      "It helps explain which application or workflow launched the detected process.",
      "It automatically proves the process is safe.",
      "It replaces the file path.",
      "It disables quarantine.",
    ],
    answer: 0,
    explanation:
      "Parent-child context helps reconstruct the execution chain.",
  },
  {
    question:
      "A quarantined file belongs to an approved business application. What is the strongest response?",
    choices: [
      "Preserve evidence, verify publisher, source, owner, version, process context, and business need, then use the approved review process before any restore decision.",
      "Restore it immediately.",
      "Disable Defender permanently.",
      "Delete the whole application without review.",
    ],
    answer: 0,
    explanation:
      "Business need matters, but restoration requires evidence and authorization.",
  },
  {
    question:
      "What makes an exclusion professionally governed?",
    choices: [
      "A narrow scope, named owner, documented purpose, approval, expiration, testing, and review date.",
      "A permanent broad path.",
      "No documentation.",
      "A user's verbal request only.",
    ],
    answer: 0,
    explanation:
      "Strong governance keeps exclusions limited, owned, time-bounded, and reviewable.",
  },
  {
    question:
      "What should happen after remediation?",
    choices: [
      "Validate protection state, item status, related files, follow-up scan, application function, events, and monitoring.",
      "Delete all logs.",
      "Assume no related activity exists.",
      "Remove the device owner.",
    ],
    answer: 0,
    explanation:
      "Post-remediation validation confirms the intended result and checks for gaps.",
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

function ProtectionLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Protection Layers
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Microsoft Defender Concepts Work Together
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {protectionLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.layer}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
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

function AlertFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Alert Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read Every Detection Field in Context
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {alertFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
              {item.question}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScanTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Scan Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Match Scan Scope to the Defensive Question
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {scanTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Best for
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.bestFor}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
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

function ExclusionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Exclusion Governance
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Exclusions Reduce Protection and Need Strong Ownership
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {exclusionRisks.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.example}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Stronger design
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongerDesign}
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
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Defender Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
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

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review a Defender Alert in Six Steps
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

export default function MicrosoftDefenderConceptsPage() {
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
              Module I3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3.4 Microsoft Defender Concepts
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional Microsoft Defender protection state, scans,
            detections, quarantine, remediation, exclusions, reputation checks,
            process context, user reports, and evidence limits using a safe
            defensive workflow.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I3: Windows Security Basics"
          lessonTitle="Microsoft Defender Concepts"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand Windows accounts, permissions, updates, security settings, evidence preservation, and controlled change.",
            "I understand that a detection is evidence, not automatic proof of complete compromise, user intent, or root cause.",
            "I will preserve alert, file, process, user, action, quarantine, exclusion, and timeline evidence before recommending changes.",
            "I will use only fictional devices, users, paths, files, alerts, applications, logs, and organizations.",
            "I will not restore, delete, scan, submit, quarantine, exclude, or modify anything on a real device without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Defender Alert Is the Start of Analysis, Not the End"
        >
          <p className="leading-8">
            A detection may point to a harmful item, a potentially unwanted
            application, a suspicious behavior, an outdated test file, or a
            legitimate tool that needs review. Strong defenders preserve the
            alert, confirm the action, correlate context, examine exclusions,
            and state confidence carefully.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Defender found something, so the entire device is compromised.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm what was detected, where it appeared, which process
                handled it, what action completed, what related evidence exists,
                and what remains unknown.”
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
          title="Protection Depends on Configuration, Context, and Follow-Up"
        >
          <p className="leading-8">
            Real-time protection, scans, quarantine, reputation controls, and
            cloud intelligence can reduce risk, but broad exclusions, failed
            remediation, stale settings, incomplete scans, or unsupported
            assumptions can weaken the result. Defenders need both protection
            technology and disciplined review.
          </p>
        </SectionCard>

        <ProtectionLayerGuide />
        <AlertFieldGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Detection, Action, and Conclusion Are Different"
        >
          <p className="leading-8">
            The detection records what matched. The action records what the
            protection control attempted or completed. The conclusion explains
            what the evidence supports after correlation. These three should not
            be treated as the same thing.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Detection",
                "What file, behavior, process, or condition matched a rule or model.",
              ],
              [
                "Action",
                "What Defender blocked, quarantined, removed, allowed, or failed to address.",
              ],
              [
                "Conclusion",
                "What the combined evidence supports, with confidence and limits.",
              ],
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

        <ScanTypeGuide />
        <ExclusionGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Microsoft Defender Review Terms
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

        <EvidenceGuide />
        <WorkflowGuide />

        <FakeDashboardCard
          title="Fake Microsoft Defender Governance Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Windows workstation fleet."
          metrics={[
            {
              label: "Open detections",
              value: "9",
              note: "Four quarantined items, two failed remediation records, two review-required potentially unwanted applications, and one exclusion-related alert.",
            },
            {
              label: "Active exclusions",
              value: "14",
              note: "Nine are approved and current, three are past expiration, and two have no current owner.",
            },
            {
              label: "Incomplete scans",
              value: "6",
              note: "Four devices were powered off, one scan encountered an inaccessible folder, and one device lost connectivity.",
            },
          ]}
        />

        <FakeAlertCard
          title="Quarantined Download Appears Inside a Broad Excluded Folder"
          severity="High"
          time="03:42 PM"
          source="Fake Microsoft Defender Correlation Monitor"
          details="The fictional staff device training-win-21 reports a potentially unwanted application in C:\Users\sample-user\Downloads\vendor-tools. The item was quarantined after the broad Downloads exclusion was temporarily removed. The exclusion was created for a testing project that ended two months ago and has no current owner."
          recommendation="Preserve detection, file, process, user, quarantine, exclusion, browser-download, owner, and project evidence; keep the item isolated; remove the stale broad exclusion through approved change; run an approved follow-up review; and validate the required vendor workflow."
        />

        <FakeLogPanel
          title="Fake Defender Detection Timeline"
          logs={[
            "15:02:00 DEVICE name='training-win-21' role='staff-workstation' owner='operations'",
            "15:05:14 PROTECTION realtime='on' cloud='on' reputation='on'",
            "15:08:22 EXCLUSION path='C:\\Users\\sample-user\\Downloads' created='74_days_ago' owner='none'",
            "15:12:41 PROJECT test_project='closed' end_date='61_days_ago'",
            "15:17:30 CHANGE exclusion='temporarily_removed' approval='yes'",
            "15:19:08 DETECTION name='PUA:TrainingVendorBundle' severity='medium'",
            "15:19:08 ITEM path='C:\\Users\\sample-user\\Downloads\\vendor-tools\\bundle.exe'",
            "15:19:09 PROCESS parent='browser.exe' user='sample-user'",
            "15:19:11 ACTION result='quarantined' status='success'",
            "15:24:46 DOWNLOAD source='approved-vendor-portal' publisher='training-vendor'",
            "15:31:02 OWNER vendor_tool_required='true' bundle_version='outdated'",
            "15:42:17 CORRELATION finding='stale_broad_exclusion_and_outdated_vendor_bundle' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Defender Decision Is Best Supported?"
          evidence={[
            "The fictional item was downloaded from an approved vendor portal.",
            "The publisher matches the fictional vendor.",
            "The bundle version is outdated.",
            "The item was successfully quarantined.",
            "A broad Downloads-folder exclusion existed for an old testing project.",
            "The project ended two months ago.",
            "The exclusion has no current owner.",
            "The required vendor workflow still exists, but the owner can use a current approved bundle.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Keep the old bundle quarantined, remove the stale broad exclusion through approved change, obtain the current approved vendor package, validate the workflow, and document the new baseline.",
            "Restore the old bundle because the vendor is approved.",
            "Disable real-time protection so the tool can run.",
            "Delete every file in Downloads.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports preserving quarantine, correcting the stale exclusion, and using a current approved package rather than weakening protection."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Defender Reviews"
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
          title="Complete a Fictional Defender Alert Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Northstar Endpoint Protection Queue
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional Defender records involving downloads,
                application installers, test files, potentially unwanted
                software, quarantine, failed remediation, exclusions, and scan
                gaps.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Record protection state, detection, severity, path, process, user, action, status, and time.</li>
                <li>Correlate download, browser, publisher, source, owner, and application evidence.</li>
                <li>Review quarantine, scan type, scan scope, errors, and follow-up status.</li>
                <li>Identify broad, stale, permanent, ownerless, and undocumented exclusions.</li>
                <li>Separate confirmed facts, likely explanations, gaps, and unsupported claims.</li>
                <li>Assign confidence, owner, containment, next action, validation, and review date.</li>
                <li>Write a safe improvement plan for protection settings and exception governance.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not restore, delete,
            quarantine, scan, submit, upload, exclude, or modify any real file,
            process, device, account, application, or protection setting.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Quarantined File Is Needed for an Approved Class Application"
          scenario="A fictional class application installer is quarantined. The teacher confirms the application is required, but the download came from an unofficial mirror and the publisher information is incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the item quarantined, preserve evidence, obtain the installer from the approved publisher or school software source, validate it, and document the result.",
              outcome:
                "Best defensive choice. Business need is preserved without restoring an unverified copy.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Restore the quarantined file because the application is needed.",
              outcome:
                "Unsafe. Need does not prove the specific file is trustworthy.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable Defender for the entire classroom.",
              outcome:
                "Unsafe and disproportionate.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Full Scan Completes with One Inaccessible Folder"
          scenario="A fictional full scan reports no detections but could not access one encrypted archive owned by a retired account. The archive remains within retention and has an assigned data owner."
          choices={[
            {
              label: "Choice A",
              response:
                "Record the scan limitation, preserve archive ownership and retention evidence, request authorized review from the data owner, and avoid claiming the device is fully clear.",
              outcome:
                "Best defensive choice. The clean result is reported accurately with the remaining evidence gap.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the device completely safe.",
              outcome:
                "Unsupported. One area was not reviewed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the archive to remove the uncertainty.",
              outcome:
                "Unsafe. Retention and ownership requirements still apply.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Microsoft Defender Review Checklist"
          items={[
            "I confirm the fictional device role, owner, user, time window, protection state, and approved evidence sources.",
            "I record detection name, severity, affected path, process, parent process, user, action, status, source, and time.",
            "I correlate downloads, browser events, publisher, source, file metadata, application ownership, and user reports.",
            "I confirm quarantine, remediation, restore, failure, or pending status.",
            "I review scan type, scope, completion, inaccessible areas, detections, and errors.",
            "I review exclusions for scope, owner, approval, purpose, expiration, testing, and review date.",
            "I separate confirmed facts, likely explanations, alternate explanations, evidence gaps, and unsupported claims.",
            "I assign a named owner, containment, approved next action, validation, monitoring, and review date.",
            "I validate protection state, application function, follow-up review, related items, events, and final baseline.",
            "I use only fictional evidence and never publish real detections, paths, users, devices, or protection settings.",
          ]}
        />

        <MiniQuiz
          title="I3.4 Mini Quiz: Microsoft Defender Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Microsoft Defender Alert Review for twelve records. Include device role, owner, protection state, scan type, detection name, severity, file path, publisher, source, process, parent process, user, action, quarantine status, exclusion context, timeline, confirmed facts, likely explanation, evidence gaps, confidence, containment, owner, approved next action, validation, monitoring, and review date."
          tips={[
            "Use only fictional devices, users, paths, files, publishers, alerts, processes, and organizations.",
            "Include one quarantined item, one failed remediation, one potentially unwanted application, one broad exclusion, one stale exclusion, and one incomplete scan.",
            "Clearly separate detection facts from conclusions and assumptions.",
            "Do not include real detection names, file hashes, usernames, device identifiers, internal paths, or alert screenshots.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Microsoft Defender concepts include real-time protection, scans, detections, quarantine, remediation, reputation, cloud intelligence, and exclusions.",
            "A detection, action, and conclusion are three different things.",
            "Quarantine isolates an item but does not prove complete origin, intent, impact, or cleanup.",
            "Scan results are limited by timing, scope, access, device state, and exclusions.",
            "Exclusions should be narrow, owned, approved, time-bounded, tested, and reviewed.",
            "Strong Defender reviews preserve evidence, correlate context, validate remediation, and document remaining gaps.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I3
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