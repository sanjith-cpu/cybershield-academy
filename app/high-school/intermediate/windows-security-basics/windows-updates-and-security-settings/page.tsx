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
const previousLesson = `${modulePath}/file-permissions-and-shared-folders`;
const nextLesson = `${modulePath}/microsoft-defender-concepts`;

const objectives = [
  "Explain how Windows updates, restart state, support lifecycle, firewall profiles, encryption, sign-in protections, and secure configuration work together.",
  "Distinguish update installation from update activation, restart completion, application validation, and operational readiness.",
  "Evaluate fictional Windows settings using device role, owner, exposure, sensitivity, business impact, compatibility, and approved baseline.",
  "Prioritize fictional update and configuration findings without changing real devices.",
  "Create a professional Windows maintenance and security-settings plan with authorization, testing, backup, rollback, validation, monitoring, and review dates.",
];

const vocabulary = [
  [
    "Security update",
    "A software change intended to correct a security weakness or reduce known risk.",
  ],
  [
    "Quality update",
    "An update focused on reliability, stability, bug fixes, and cumulative maintenance.",
  ],
  [
    "Feature update",
    "A larger Windows release change that introduces new capabilities, behavior, defaults, or support requirements.",
  ],
  [
    "Pending restart",
    "A state in which an installed change requires a restart before the intended running state becomes active.",
  ],
  [
    "Support lifecycle",
    "The period during which a Windows release receives normal security updates and vendor maintenance.",
  ],
  [
    "Firewall profile",
    "A group of firewall behaviors associated with a network context such as domain, private, or public.",
  ],
  [
    "Device encryption",
    "Protection designed to reduce unauthorized access to data stored on a device.",
  ],
  [
    "Secure baseline",
    "An approved set of expected security settings used to compare and evaluate a device.",
  ],
  [
    "Maintenance window",
    "An approved period for controlled updates, restarts, testing, validation, and rollback.",
  ],
  [
    "Rollback",
    "A documented method for returning to a previous known-good state after an unsuccessful change.",
  ],
  [
    "Compensating control",
    "A temporary control used to reduce risk while a preferred fix is being tested or scheduled.",
  ],
  [
    "Configuration drift",
    "A difference between the approved baseline and the device's current settings.",
  ],
];

const updateTypes = [
  {
    type: "Security update",
    purpose:
      "Addresses a known weakness in Windows, a built-in component, driver, service, or supported application.",
    review:
      "Affected version, exploitability, active feature, exposure, fixed release, restart requirement, compatibility, and compensating controls.",
    risk:
      "Delaying a relevant update can leave a known weakness exposed.",
  },
  {
    type: "Quality update",
    purpose:
      "Improves reliability, stability, performance, and cumulative operating-system behavior.",
    review:
      "Known issues, application compatibility, maintenance timing, restart needs, and post-update validation.",
    risk:
      "Unmanaged reliability problems can disrupt services or weaken later security maintenance.",
  },
  {
    type: "Feature update",
    purpose:
      "Moves the device to a newer Windows release with changed capabilities, defaults, and support dates.",
    review:
      "Hardware readiness, application compatibility, storage, encryption recovery, user communication, support lifecycle, and rollback.",
    risk:
      "A rushed feature update can create compatibility, performance, or recovery problems.",
  },
  {
    type: "Driver or firmware update",
    purpose:
      "Updates hardware support, stability, compatibility, or device-level security behavior.",
    review:
      "Device model, source trust, hardware dependency, restart requirement, rollback, and test results.",
    risk:
      "Incorrect or untested updates may affect startup, networking, storage, display, or peripherals.",
  },
  {
    type: "Application update",
    purpose:
      "Updates a supported application installed on the Windows device.",
    review:
      "Publisher, source, version, user impact, plug-ins, integrations, data compatibility, and application owner.",
    risk:
      "Outdated applications may remain vulnerable or incompatible with the supported operating system.",
  },
  {
    type: "Emergency change",
    purpose:
      "Accelerates a high-priority update or setting correction under an approved emergency process.",
    review:
      "Confirmed urgency, decision authority, backup, rollback, communication, test evidence, and heightened monitoring.",
    risk:
      "Emergency speed can weaken validation if the process is not disciplined.",
  },
];

const securitySettings = [
  {
    setting: "Firewall profiles",
    healthyState:
      "Each active network profile uses an approved firewall policy, and unnecessary inbound access is restricted.",
    evidence:
      "Active network profile, firewall state, allow or deny rules, listening services, owner, and approved exception.",
    questions:
      "Which profile is active? Which services are allowed? Are exceptions still required, narrow, owned, and reviewed?",
  },
  {
    setting: "Device encryption",
    healthyState:
      "Sensitive data is protected at rest, recovery information is managed, and startup remains reliable.",
    evidence:
      "Encryption state, recovery ownership, device role, storage scope, exception record, and recovery test.",
    questions:
      "Is encryption active? Is recovery available to the approved owner? Is any exception documented and time-bounded?",
  },
  {
    setting: "Administrator membership",
    healthyState:
      "Administrator access is limited, named, approved, separate from daily work, and reviewed regularly.",
    evidence:
      "Local group membership, owner, role, last use, expiration, support ticket, and sign-in protections.",
    questions:
      "Who needs elevated access? Is the account still required? Can a standard account be used for daily work?",
  },
  {
    setting: "Sign-in and lock behavior",
    healthyState:
      "Users authenticate through approved methods, sessions lock automatically, and inactive access is controlled.",
    evidence:
      "Sign-in method, inactivity lock, account status, failed sign-ins, owner, and approved exception.",
    questions:
      "Does the device lock appropriately? Are sign-in protections suitable for the role and location?",
  },
  {
    setting: "Update behavior",
    healthyState:
      "Supported updates install through approved sources, restarts are completed, and results are validated.",
    evidence:
      "Update history, pending restart, support status, source, maintenance window, test, rollback, and validation.",
    questions:
      "Are relevant updates installed and active? Is a restart pending? Is the device still supported?",
  },
  {
    setting: "Sharing and discovery",
    healthyState:
      "Network sharing is limited to approved roles, trusted contexts, and necessary services.",
    evidence:
      "Network profile, share configuration, listening services, firewall rules, owner, and classification.",
    questions:
      "Is sharing required? Which users or devices need it? Is it disabled on untrusted networks?",
  },
  {
    setting: "Browser and reputation protection",
    healthyState:
      "Reputation-based protection, safe browsing controls, download review, and approved browser settings are active.",
    evidence:
      "Protection state, browser policy, download source, warning events, extension inventory, and exception record.",
    questions:
      "Are warnings active? Are risky exclusions or extensions present? Is the browser supported and updated?",
  },
  {
    setting: "Backup and recovery",
    healthyState:
      "Required data and system state are recoverable, protected, tested, and owned.",
    evidence:
      "Backup status, last success, scope, retention, recovery owner, restoration test, and failure logs.",
    questions:
      "What is backed up? When was recovery last tested? Are backups protected from ordinary user changes?",
  },
];

const prioritizationFactors = [
  {
    factor: "Device role",
    detail:
      "A classroom laptop, staff workstation, administrator device, kiosk, shared lab system, and server have different risk and continuity requirements.",
  },
  {
    factor: "Exposure",
    detail:
      "Internet-facing, remote-access, shared, traveling, internal-only, and isolated devices face different likelihood and urgency.",
  },
  {
    factor: "Privilege",
    detail:
      "Devices used for administration, software deployment, or sensitive data access require tighter controls.",
  },
  {
    factor: "Sensitivity",
    detail:
      "Stored credentials, personal data, school records, internal documents, and confidential business information increase impact.",
  },
  {
    factor: "Exploitability",
    detail:
      "A relevant weakness with an active attack path may require faster action than a low-reachability issue.",
  },
  {
    factor: "Compatibility",
    detail:
      "Applications, drivers, peripherals, encryption, network tools, and management agents must be tested.",
  },
  {
    factor: "Change readiness",
    detail:
      "Owner approval, backup, test, maintenance window, communication, rollback, and support staffing determine safe timing.",
  },
  {
    factor: "Compensating controls",
    detail:
      "Firewall restrictions, segmentation, disabled features, limited privilege, application controls, and monitoring may reduce temporary exposure.",
  },
];

const evidenceMatrix = [
  {
    source: "Update history",
    supports:
      "Installed updates, failed updates, dates, result codes, restart requirements, and update categories.",
    limitation:
      "Does not prove the device restarted, the update is active, or applications still function correctly.",
  },
  {
    source: "Support-lifecycle record",
    supports:
      "Whether the Windows release and device remain within normal maintenance and security support.",
    limitation:
      "Does not prove every application, driver, or hardware component is still supported.",
  },
  {
    source: "Firewall configuration",
    supports:
      "Active profiles, enabled state, approved rules, allowed services, and exceptions.",
    limitation:
      "Does not prove application-level security, complete network segmentation, or actual traffic content.",
  },
  {
    source: "Encryption status",
    supports:
      "Whether protected storage is enabled and which device or volume state is reported.",
    limitation:
      "Does not prove recovery information is available, access controls are strong, or every data location is covered.",
  },
  {
    source: "Security baseline comparison",
    supports:
      "Which current settings match, exceed, or differ from the approved configuration.",
    limitation:
      "Does not prove the baseline is current, suitable for the role, or fully implemented.",
  },
  {
    source: "Change and maintenance record",
    supports:
      "Owner, approval, test, backup, rollback, communication, window, exception, and validation plan.",
    limitation:
      "Does not prove the technical change was completed or successful.",
  },
  {
    source: "Application and service validation",
    supports:
      "Whether required applications, services, network functions, and user workflows operate after change.",
    limitation:
      "A limited test may not cover every user, dependency, edge case, or long-term effect.",
  },
  {
    source: "Monitoring and event records",
    supports:
      "Post-change failures, restarts, service events, warning conditions, and device-health changes.",
    limitation:
      "Absence of alerts does not prove complete security or reliability.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Inventory and classify",
    detail:
      "Record the fictional device role, owner, Windows release, support status, exposure, sensitivity, and required applications.",
  },
  {
    step: "2",
    title: "Collect current state",
    detail:
      "Review update history, restart status, firewall profiles, encryption, sign-in settings, sharing, backup, and baseline comparison.",
  },
  {
    step: "3",
    title: "Assess relevance and risk",
    detail:
      "Connect active features, privilege, exposure, exploitability, business impact, dependencies, and compensating controls.",
  },
  {
    step: "4",
    title: "Plan the change",
    detail:
      "Define owner approval, maintenance window, communication, backup, test plan, restart, rollback, and stopping conditions.",
  },
  {
    step: "5",
    title: "Apply and monitor",
    detail:
      "Follow the approved fictional plan, preserve evidence, complete required restart, and monitor service and device health.",
  },
  {
    step: "6",
    title: "Validate and document",
    detail:
      "Confirm version, update activation, applications, services, firewall, encryption, sign-in, backups, logs, and the new baseline.",
  },
];

const mistakes = [
  "Assuming an installed update is active even when a restart is still pending.",
  "Treating every missing update as equally urgent without checking role, exposure, active features, and exploitability.",
  "Delaying all updates because one application may have compatibility risk.",
  "Applying feature updates without hardware, storage, encryption, driver, and recovery checks.",
  "Turning off the firewall to solve an application issue.",
  "Creating broad firewall rules instead of narrow service-specific exceptions.",
  "Enabling device encryption without confirming recovery ownership and support.",
  "Ignoring support lifecycle because the device still appears to function.",
  "Changing multiple unrelated security settings at once and weakening validation.",
  "Skipping backups, maintenance windows, user communication, monitoring, or rollback.",
  "Assuming no alerts after change means every application and control is working.",
  "Publishing real device names, update versions, firewall rules, encryption state, or internal settings in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What does a pending restart mean after a Windows update?",
    choices: [
      "The update may be installed, but the intended running state is not fully active until restart and validation.",
      "The update definitely failed.",
      "The device is unsupported.",
      "The firewall is disabled.",
    ],
    answer: 0,
    explanation:
      "Some changes require a restart before updated components become active.",
  },
  {
    question:
      "Why should support lifecycle be reviewed?",
    choices: [
      "Unsupported releases may stop receiving normal security updates and vendor maintenance.",
      "Support status changes file ownership.",
      "Supported devices never need updates.",
      "Lifecycle records replace backups.",
    ],
    answer: 0,
    explanation:
      "Support status affects long-term security and maintenance options.",
  },
  {
    question:
      "What is the safest firewall response when an approved application needs one inbound service?",
    choices: [
      "Create the narrowest approved rule for the required service, profile, source, owner, and duration, then validate it.",
      "Disable the firewall.",
      "Allow every inbound connection.",
      "Use the same broad rule on every device.",
    ],
    answer: 0,
    explanation:
      "Narrow, owned, and tested exceptions preserve protection while supporting approved use.",
  },
  {
    question:
      "Why must device-encryption recovery be reviewed?",
    choices: [
      "Authorized recovery may be needed if normal startup or access fails.",
      "Encryption never affects recovery.",
      "Recovery information should be public.",
      "Encryption replaces backups.",
    ],
    answer: 0,
    explanation:
      "Encryption protects data, but recovery ownership and testing are essential for availability.",
  },
  {
    question:
      "Which evidence best confirms a Windows update succeeded?",
    choices: [
      "Installed version, completed restart, application tests, service health, event review, and monitoring considered together.",
      "Only the download completion message.",
      "Only the restart time.",
      "Only the advisory title.",
    ],
    answer: 0,
    explanation:
      "Installation, activation, function, and health all require validation.",
  },
  {
    question:
      "A high-priority update is relevant, but a required application has not been tested. What is the strongest plan?",
    choices: [
      "Accelerate testing, apply temporary controls, prepare backup and rollback, and use the earliest safe approved window.",
      "Ignore the update permanently.",
      "Install it without testing or rollback.",
      "Remove the application immediately.",
    ],
    answer: 0,
    explanation:
      "Security urgency and change readiness should be managed together.",
  },
  {
    question:
      "What should happen after changing a Windows security setting?",
    choices: [
      "Validate the intended control, required applications, services, users, logs, recovery, and updated baseline.",
      "Delete all previous evidence.",
      "Assume no user impact.",
      "Remove the device owner.",
    ],
    answer: 0,
    explanation:
      "Post-change validation confirms the control works without breaking approved use.",
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

function UpdateTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Update Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Different Windows Changes Need Different Planning
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {updateTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Review
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.review}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Main risk
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

function SettingsGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Security Settings
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review the Device as a Connected Control System
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {securitySettings.map((item) => (
          <div
            key={item.setting}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.setting}
            </h3>

            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Healthy state
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.healthyState}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.questions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrioritizationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Prioritization Model
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Balance Security Urgency with Change Readiness
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {prioritizationFactors.map((item) => (
          <div
            key={item.factor}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.factor}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
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
        What Update and Setting Evidence Can and Cannot Prove
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
        Manage Updates and Settings in Six Steps
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

export default function WindowsUpdatesAndSecuritySettingsPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3.3 Windows Updates and Security Settings
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional Windows updates, restart state, support lifecycle,
            firewall profiles, encryption, sign-in settings, sharing, backup,
            compatibility, and secure maintenance using evidence-based change
            control.
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
          lessonTitle="Windows Updates and Security Settings"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand Windows accounts, permissions, ownership, least privilege, and controlled change.",
            "I can distinguish update installation, restart completion, activation, application validation, and monitoring.",
            "I will preserve update, settings, baseline, support, owner, test, backup, rollback, and validation evidence.",
            "I will use only fictional devices, versions, updates, settings, applications, events, and organizations.",
            "I will not install updates, change firewall rules, enable encryption, or alter any real device without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Installed Update Is Not the Same as a Completed Security Change"
        >
          <p className="leading-8">
            A Windows update may download successfully and still require a
            restart, service validation, application testing, driver checks,
            encryption recovery review, user communication, and monitoring.
            Secure maintenance connects technical urgency with operational
            readiness.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The update says installed, so the device is fully protected.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm restart state, active version, application health,
                firewall, encryption, event logs, backup, monitoring, and the
                approved baseline.”
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
          title="Outdated Systems and Uncontrolled Changes Both Create Risk"
        >
          <p className="leading-8">
            Delayed updates can leave known weaknesses exposed. Unplanned
            updates or setting changes can interrupt required applications,
            networking, startup, encryption recovery, or user work. A mature
            process reduces both security and operational risk.
          </p>
        </SectionCard>

        <UpdateTypeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Security Urgency and Change Readiness Are Separate Ratings"
        >
          <p className="leading-8">
            A relevant high-severity update may have high urgency but only
            medium readiness if testing, backup, rollback, or owner approval are
            incomplete. A lower-severity setting drift may be easy and safe to
            correct immediately. Both ratings matter.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 p-5">
              <p className="font-black text-red-100">Security urgency</p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                Relevance, exposure, privilege, exploitability, sensitivity,
                business impact, and available compensating controls.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
              <p className="font-black text-blue-100">Change readiness</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Owner approval, test results, backup, maintenance window,
                communication, restart plan, rollback, validation, and staffing.
              </p>
            </div>
          </div>
        </SectionCard>

        <SettingsGuide />
        <PrioritizationGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Windows Update and Security-Setting Terms
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
          title="Fake Windows Security Maintenance Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services workstation fleet."
          metrics={[
            {
              label: "Devices pending restart",
              value: "18",
              note: "Twelve completed security-update installation, four completed driver updates, and two completed feature updates.",
            },
            {
              label: "Baseline differences",
              value: "11",
              note: "Four broad firewall exceptions, three encryption gaps, two delayed locks, and two unsupported sharing configurations.",
            },
            {
              label: "Devices nearing end of support",
              value: "7",
              note: "Seven devices require compatibility testing and a managed feature-update or replacement plan.",
            },
          ]}
        />

        <FakeAlertCard
          title="Security Update Installed but Device Still Runs Previous Protected State"
          severity="High"
          time="06:24 PM"
          source="Fake Windows Maintenance Governance Monitor"
          details="The fictional staff workstation training-win-12 installed a relevant security update successfully. A restart is still required. The device is used for staff records, encryption is active, backup is current, the approved maintenance window remains open, and the required records application passed pre-restart testing."
          recommendation="Preserve update and change evidence, confirm recovery information and owner approval, complete the restart during the active window, then validate the running version, records application, firewall, encryption, services, event logs, and monitoring."
        />

        <FakeLogPanel
          title="Fake Windows Update and Settings Timeline"
          logs={[
            "17:41:00 INVENTORY device='training-win-12' role='staff-records-workstation' owner='records-team'",
            "17:44:18 SUPPORT windows_release='supported' feature_update_due='120_days'",
            "17:47:29 UPDATE category='security' result='installed' restart='required'",
            "17:50:02 BACKUP last_success='today_15:00' recovery_test='passed'",
            "17:52:41 ENCRYPTION status='active' recovery_owner='device-operations'",
            "17:55:08 FIREWALL profiles='enabled' exceptions='approved'",
            "17:58:36 APPLICATION name='records-client' pre_restart_test='passed'",
            "18:03:21 CHANGE window='17:30-19:00' rollback='prepared' owner='approved'",
            "18:08:44 MONITOR device_health='normal' restart_pending='true'",
            "18:24:05 CORRELATION finding='installed_update_not_yet_active' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Windows Maintenance Decision Is Best Supported?"
          evidence={[
            "The fictional security update is relevant and installed successfully.",
            "A restart is still required.",
            "The Windows release remains supported.",
            "The device stores staff-record data and uses active encryption.",
            "Backup is current and recovery testing passed.",
            "The required application passed pre-restart testing.",
            "The maintenance window remains open and rollback is prepared.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Complete the authorized restart during the open window, then validate version, application, services, firewall, encryption, events, and monitoring before closing the change.",
            "Declare the update complete without restarting.",
            "Disable encryption before restarting.",
            "Wait indefinitely because the device is currently healthy.",
          ]}
          bestAnswer={0}
          explanation="The device is ready for a controlled restart and full post-change validation, which completes activation and confirms the intended protected state."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Windows Maintenance"
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
          title="Prioritize a Fictional Windows Maintenance Queue"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Windows Security Board
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional Windows devices across staff,
                classroom, shared lab, administration, travel, kiosk, and
                support roles.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Record role, owner, release, support status, exposure, privilege, and sensitivity.</li>
                <li>Review update history, restart state, firewall, encryption, lock behavior, sharing, and backup.</li>
                <li>Rate security urgency and change readiness separately.</li>
                <li>Identify application, driver, encryption, network, and recovery dependencies.</li>
                <li>Assign owners, maintenance windows, communication, testing, and rollback.</li>
                <li>Write post-change validation and monitoring steps.</li>
                <li>Document exceptions with expiration and review dates.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Analyze only the supplied fictional records. Do not install
            updates, change firewall rules, enable or disable encryption,
            modify sign-in settings, or reconfigure any real Windows device
            without explicit authorization.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Public-Network Firewall Profile Is Disabled"
          scenario="A fictional travel laptop normally uses hotel and airport networks. Its public firewall profile is disabled because a temporary support test required inbound access. The test ended three days ago, and no current exception owner exists."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve configuration and change evidence, confirm the test ended, re-enable the public firewall through approved change, remove stale rules, and validate required applications and networking.",
              outcome:
                "Best defensive choice. The temporary exposure is removed while approved use is tested.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the firewall disabled because the laptop still works.",
              outcome:
                "Unsafe. A travel device needs stronger protection on untrusted networks.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable every network adapter.",
              outcome:
                "Disruptive and unsupported. The control can be corrected narrowly.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Device Nears End of Support but a Legacy Application Blocks Upgrade"
          scenario="A fictional staff device will leave normal support soon. A required legacy application has not passed feature-update testing. The device is internal-only, encrypted, segmented, backed up, and closely monitored."
          choices={[
            {
              label: "Choice A",
              response:
                "Document lifecycle risk, accelerate application testing, maintain temporary controls, prepare rollback, and schedule a time-bounded upgrade or replacement plan.",
              outcome:
                "Best defensive choice. The team reduces short-term risk while moving toward a supported state.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore support status because the device is internal.",
              outcome:
                "Unsafe. Internal devices still require supported maintenance.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Force the upgrade immediately without testing or rollback.",
              outcome:
                "Risky. The application dependency and continuity requirements remain unresolved.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Windows Updates and Security Settings Checklist"
          items={[
            "I record the fictional device role, owner, Windows release, support status, exposure, privilege, and sensitivity.",
            "I review installed updates, failed updates, restart state, feature-update readiness, and approved sources.",
            "I review firewall profiles, exceptions, sharing, sign-in settings, encryption, browser protections, and backups.",
            "I compare the current device state with the approved security baseline.",
            "I rate security urgency and change readiness separately.",
            "I identify application, driver, service, network, encryption, backup, and recovery dependencies.",
            "I define owner approval, maintenance window, communication, test, restart, rollback, and stopping conditions.",
            "I validate version, update activation, applications, services, firewall, encryption, logs, monitoring, and user impact.",
            "I document exceptions, expiration dates, review dates, and the final baseline.",
            "I use only fictional evidence and never publish real Windows settings, rules, versions, or device details.",
          ]}
        />

        <MiniQuiz
          title="I3.3 Mini Quiz: Windows Updates and Security Settings"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Windows Update and Security Settings Review for twelve devices. Include role, owner, release, support status, exposure, sensitivity, update history, restart state, firewall profiles, rules, encryption, sign-in protections, sharing, backup, security baseline, urgency, readiness, dependencies, owner, maintenance window, test, rollback, validation, monitoring, exception, and review date."
          tips={[
            "Use only fictional devices, versions, updates, rules, applications, users, and organizations.",
            "Include one pending restart, one end-of-support device, one broad firewall exception, one encryption-recovery gap, and one feature-update compatibility issue.",
            "Rate security urgency and change readiness separately.",
            "Do not include real device names, update IDs, firewall rules, encryption recovery details, or internal settings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Windows security maintenance connects updates, restart state, support lifecycle, firewall, encryption, sign-in, sharing, backup, and validation.",
            "Installed does not always mean active; restart and post-change verification may still be required.",
            "Security urgency and change readiness should be measured separately.",
            "Firewall and other security exceptions should be narrow, owned, documented, time-bounded, and tested.",
            "Encryption protects confidentiality but requires controlled recovery and validation.",
            "Supported lifecycle, testing, backup, rollback, monitoring, and documentation are essential to secure maintenance.",
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