import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/windows-security-basics`;
const previousLesson = `${modulePath}/windows-security-review-lab`;

const assessmentDomains = [
  {
    domain: "Domain 1",
    title: "Windows Accounts and Profiles",
    questions: "Questions 1–3",
    focus:
      "Account types, administrator access, temporary accounts, lifecycle review, profiles, ownership, sign-in evidence, and dependency checks.",
    evidence:
      "Account inventory, local groups, owner records, expiration, profile paths, last sign-in, services, tasks, and file ownership.",
  },
  {
    domain: "Domain 2",
    title: "File Permissions and Shared Folders",
    questions: "Questions 4–6",
    focus:
      "Read, write, modify, full control, inheritance, explicit permissions, nested groups, shares, ownership, and effective access.",
    evidence:
      "Local permissions, share permissions, group membership, ownership, classification, role need, and effective-access results.",
  },
  {
    domain: "Domain 3",
    title: "Windows Updates and Security Settings",
    questions: "Questions 7–9",
    focus:
      "Security updates, restart state, support lifecycle, firewall profiles, encryption, maintenance windows, compatibility, and validation.",
    evidence:
      "Update history, pending restart, support status, firewall configuration, encryption state, backup, test, rollback, and monitoring.",
  },
  {
    domain: "Domain 4",
    title: "Microsoft Defender Concepts",
    questions: "Questions 10–12",
    focus:
      "Real-time protection, scans, detections, quarantine, remediation, reputation, cloud protection, exclusions, and alert limitations.",
    evidence:
      "Protection state, detection name, severity, path, process, user, action, quarantine, exclusion, source, publisher, and follow-up.",
  },
  {
    domain: "Domain 5",
    title: "Event Viewer and Windows Logs",
    questions: "Questions 13–15",
    focus:
      "Security, System, Application, Setup, Defender, and operational logs; timestamps, providers, event IDs, users, processes, services, and correlation.",
    evidence:
      "Multi-channel event records, normalized time, correlation identifiers, change records, owner reports, and evidence gaps.",
  },
  {
    domain: "Domain 6",
    title: "Startup Apps and Services",
    questions: "Questions 16–18",
    focus:
      "Startup applications, services, tasks, triggers, executable paths, publishers, accounts, dependencies, resource use, and approved baselines.",
    evidence:
      "Startup inventory, service state, task results, process data, event records, package metadata, owner records, and controlled test results.",
  },
  {
    domain: "Domain 7",
    title: "Local Security Habits",
    questions: "Questions 19–21",
    focus:
      "Locking, standard-user use, trusted downloads, browser warnings, removable media, protected storage, backup, privacy, and reporting.",
    evidence:
      "Session records, download warnings, Defender history, media records, backup scope, user reports, training, and approved procedures.",
  },
  {
    domain: "Domain 8",
    title: "Integrated Windows Security Review",
    questions: "Questions 22–25",
    focus:
      "Authorization, scope, evidence strength, confidence, prioritization, dependencies, change readiness, remediation, validation, and residual risk.",
    evidence:
      "Correlated evidence from all seven lesson domains plus governance, ownership, testing, rollback, monitoring, and review dates.",
  },
];

const examSkills = [
  {
    title: "Identify confirmed facts",
    detail:
      "Recognize what a fictional account record, permission entry, alert, event, service state, or update history directly proves.",
  },
  {
    title: "Respect evidence limits",
    detail:
      "Avoid treating one event, username, alert severity, scan result, or dashboard metric as a complete conclusion.",
  },
  {
    title: "Correlate multiple sources",
    detail:
      "Connect users, groups, paths, processes, services, events, updates, protection records, owner reports, and change history.",
  },
  {
    title: "Apply least privilege",
    detail:
      "Choose the narrowest account, permission, service, firewall, exclusion, and user-access design that supports approved work.",
  },
  {
    title: "Protect continuity",
    detail:
      "Check applications, services, tasks, backups, recovery, files, users, and network dependencies before changing a Windows system.",
  },
  {
    title: "Use controlled change",
    detail:
      "Include authorization, owner, testing, backup, rollback, validation, monitoring, residual risk, and review dates.",
  },
];

const finalReview = [
  "Review the difference between standard users, administrators, service identities, temporary accounts, disabled accounts, and user profiles.",
  "Review ownership, inheritance, explicit permissions, nested groups, share permissions, and effective access.",
  "Review update installation, restart activation, support lifecycle, firewall profiles, encryption, backup, and secure maintenance.",
  "Review Defender detections, quarantine, scans, exclusions, process context, publisher, source, and alert limitations.",
  "Review Windows log channels, timestamps, providers, event IDs, users, processes, services, results, and evidence gaps.",
  "Review startup applications, services, tasks, triggers, paths, publishers, accounts, dependencies, and baselines.",
  "Review locking, standard-account use, trusted sources, browser warnings, removable media, backups, and reporting.",
  "Review authorization, scope, confidence, prioritization, change readiness, remediation, validation, monitoring, and residual risk.",
];

const questions = [
  {
    question:
      "A fictional temporary support account expired ten days ago, remains enabled, belongs to the local Administrators group, has no active ticket, and has no service or scheduled-task dependency. What is the strongest response?",
    choices: [
      "Preserve account and profile evidence, transfer required data, remove administrator membership, disable the account through approved change, and validate dependencies.",
      "Leave the account enabled because it was once approved.",
      "Delete the profile immediately before checking its contents.",
      "Give the account a new permanent expiration date.",
    ],
    answer: 0,
    explanation:
      "Lifecycle, ownership, privilege, and dependency evidence support a controlled removal while preserving required profile data.",
  },
  {
    question:
      "Which statement about an inactive Windows account is most accurate?",
    choices: [
      "Inactivity is useful evidence, but ownership, role, services, tasks, file ownership, and retention still require review.",
      "An inactive account is always safe to delete immediately.",
      "An inactive account cannot own files.",
      "An inactive account has no group memberships.",
    ],
    answer: 0,
    explanation:
      "Last sign-in is only one source; dependencies and retained data may still exist.",
  },
  {
    question:
      "Why should a retired Windows profile be reviewed before removal?",
    choices: [
      "It may contain required files, application data, browser state, ownership information, or retention-controlled content.",
      "Profiles never contain user data.",
      "Removing a profile automatically transfers file ownership.",
      "A retired profile always belongs to an administrator.",
    ],
    answer: 0,
    explanation:
      "Profile data must be classified, transferred, retained, or removed through an approved process.",
  },
  {
    question:
      "What is effective access?",
    choices: [
      "The final result after relevant direct, group, inherited, explicit, allow, deny, local, and share rules are considered.",
      "Only the permission shown on the parent folder.",
      "Only the user's direct permission entry.",
      "Only the network share permission.",
    ],
    answer: 0,
    explanation:
      "Windows access can result from several overlapping permission paths.",
  },
  {
    question:
      "A fictional internal folder gives All Staff modify access through inheritance, but only Project Editors need to change files. What is the strongest correction?",
    choices: [
      "Preserve the permission evidence, reduce All Staff to read-only at the required layers, retain modify for Project Editors, and validate applications, services, and backups.",
      "Delete the entire shared folder.",
      "Remove all access from every group.",
      "Leave the access unchanged because no misuse is recorded.",
    ],
    answer: 0,
    explanation:
      "The approved role supports a least-privilege correction while preserving legitimate readers and editors.",
  },
  {
    question:
      "Why should both share permissions and local file permissions be reviewed?",
    choices: [
      "Network access can depend on both layers, and the final effective result may be narrower than either layer alone.",
      "Share permissions automatically replace all local permissions.",
      "Local permissions matter only for administrators.",
      "The two permission types never interact.",
    ],
    answer: 0,
    explanation:
      "A network-shared folder may apply both share-level and local file-system controls.",
  },
  {
    question:
      "A fictional Windows security update says installed, but a restart is still required. What is the strongest conclusion?",
    choices: [
      "Installation succeeded, but the intended running state may not be active until restart and post-change validation.",
      "The update definitely failed.",
      "The device is fully protected with no further action.",
      "The firewall must be disabled before restart.",
    ],
    answer: 0,
    explanation:
      "Installed does not always mean active; restart and validation may still be needed.",
  },
  {
    question:
      "Why should Windows support lifecycle be included in a security review?",
    choices: [
      "Unsupported releases may stop receiving normal security updates and vendor maintenance.",
      "Support lifecycle determines file ownership.",
      "Supported devices never need updates.",
      "Lifecycle records replace application testing.",
    ],
    answer: 0,
    explanation:
      "Long-term security depends on a supported operating-system and application environment.",
  },
  {
    question:
      "An approved application needs one inbound network service. Which firewall response is strongest?",
    choices: [
      "Create the narrowest approved rule for the required service, profile, source, owner, and duration, then validate it.",
      "Disable the firewall entirely.",
      "Allow all inbound connections on every profile.",
      "Copy a broad rule from another unrelated device.",
    ],
    answer: 0,
    explanation:
      "Narrow, owned, and tested exceptions support the application without removing broader protection.",
  },
  {
    question:
      "What does Defender quarantine prove?",
    choices: [
      "The recorded item was isolated from normal use under the shown action status.",
      "The entire device is definitely clean.",
      "Every related file was found and removed.",
      "The user's intent is known.",
    ],
    answer: 0,
    explanation:
      "Quarantine confirms an isolation action, not complete origin, intent, scope, or cleanup.",
  },
  {
    question:
      "Why is a broad Downloads-folder Defender exclusion risky?",
    choices: [
      "Files in a common high-risk location may bypass normal protection.",
      "Downloads folders cannot contain applications.",
      "Exclusions automatically expire.",
      "A broad exclusion improves every program.",
    ],
    answer: 0,
    explanation:
      "Broad exclusions reduce inspection across many unrelated files and workflows.",
  },
  {
    question:
      "A blocked installer is required for a fictional classroom application, but it came from an unofficial mirror. What is the strongest response?",
    choices: [
      "Keep it isolated, obtain the current installer from the approved source, verify publisher and owner, and validate the application through the authorized process.",
      "Restore it immediately because the application is required.",
      "Disable real-time protection for the whole classroom.",
      "Create a permanent Downloads exclusion.",
    ],
    answer: 0,
    explanation:
      "Business need does not prove that the specific file or source is trustworthy.",
  },
  {
    question:
      "Why must a Windows event ID be interpreted with its provider and log channel?",
    choices: [
      "The number alone may not fully identify the event meaning across different Windows components and contexts.",
      "Event IDs replace timestamps.",
      "Providers are unrelated to event meaning.",
      "The channel automatically proves malicious activity.",
    ],
    answer: 0,
    explanation:
      "Provider, channel, message, version, and related events give the event ID useful context.",
  },
  {
    question:
      "A centralized collector receives no Windows events from one fictional device for thirty minutes. What is the strongest conclusion?",
    choices: [
      "A visibility gap exists, and forwarding, network, queue, service, storage, time, permissions, and local log state require review.",
      "No activity occurred on the device.",
      "The user definitely cleared the logs.",
      "The device is definitely compromised.",
    ],
    answer: 0,
    explanation:
      "Missing telemetry confirms incomplete visibility, not the reason for it.",
  },
  {
    question:
      "Which evidence best supports the conclusion that a permission change caused a Windows service failure?",
    choices: [
      "A change record, access-denied event, service failure, application error, narrow permission restoration, and successful validation aligned by time.",
      "One critical event with no surrounding context.",
      "Only a user's guess.",
      "Only the service display name.",
    ],
    answer: 0,
    explanation:
      "A correlated multi-source timeline provides stronger evidence than one isolated record.",
  },
  {
    question:
      "What does high CPU use by a Windows process prove?",
    choices: [
      "The process used significant CPU during the observed period; purpose and cause require more evidence.",
      "The process is definitely malicious.",
      "The service should be deleted immediately.",
      "The publisher is untrusted.",
    ],
    answer: 0,
    explanation:
      "Resource use is a signal that needs path, owner, workload, duration, event, and baseline context.",
  },
  {
    question:
      "A fictional service starts automatically, its project ended months ago, no active dependency remains, controlled stop testing passes, and rollback works. What is the strongest next action?",
    choices: [
      "Preserve evidence, remove unnecessary access, disable the service through approved change, monitor the device, and update the baseline.",
      "Delete the executable before documenting it.",
      "Leave it running because it has a known publisher.",
      "Give the service account administrator access.",
    ],
    answer: 0,
    explanation:
      "Lifecycle, ownership, dependency, testing, and rollback evidence support a controlled disablement.",
  },
  {
    question:
      "Why should startup and service changes be made one at a time?",
    choices: [
      "Sequenced changes improve cause-and-effect testing and make rollback easier.",
      "One-at-a-time changes guarantee that no failures occur.",
      "They remove the need for backups.",
      "They eliminate all dependencies.",
    ],
    answer: 0,
    explanation:
      "Controlled sequencing makes validation and recovery more reliable.",
  },
  {
    question:
      "Why should users lock a Windows device before stepping away?",
    choices: [
      "To prevent unauthorized access to the active session, files, applications, and account authority.",
      "To force every update to install.",
      "To disable all network connections.",
      "To delete the profile.",
    ],
    answer: 0,
    explanation:
      "A screen lock protects the signed-in session from physical access.",
  },
  {
    question:
      "A fictional user sees a school sign-in page after following a shortened link, but the address is unfamiliar and the browser warns about the page. What is the strongest response?",
    choices: [
      "Do not enter credentials, preserve the message and warning, use the known portal directly, and report the link.",
      "Enter the password because the school logo appears.",
      "Disable the browser warning.",
      "Share the password with someone who can test the page.",
    ],
    answer: 0,
    explanation:
      "Source verification should happen through a known approved route before credentials are entered.",
  },
  {
    question:
      "Why is saving required work only to a local Desktop folder risky?",
    choices: [
      "The folder may not be included in approved backup, retention, sharing, or recovery processes.",
      "Desktop folders cannot contain files.",
      "Local files are always encrypted and backed up automatically.",
      "The Desktop is visible only to administrators.",
    ],
    answer: 0,
    explanation:
      "Protected storage and tested recovery must be confirmed rather than assumed.",
  },
  {
    question:
      "What should be confirmed before beginning an integrated Windows security review?",
    choices: [
      "Authorization, scope, devices, owners, users, time window, evidence sources, systems, and review questions.",
      "Which services should be deleted first.",
      "Which event logs should be cleared.",
      "Which administrator account should be shared.",
    ],
    answer: 0,
    explanation:
      "Authorization and scope define what can be reviewed and what actions are permitted.",
  },
  {
    question:
      "Why should a finding include a confidence rating?",
    choices: [
      "It communicates how strongly the available evidence supports the conclusion.",
      "It replaces the evidence.",
      "It proves malicious intent.",
      "It removes the need for validation.",
    ],
    answer: 0,
    explanation:
      "Confidence helps readers understand the strength and limitations of the finding.",
  },
  {
    question:
      "Which finding should usually receive the highest priority?",
    choices: [
      "An enabled expired administrator account with no owner or dependency on a shared device containing sensitive data.",
      "A cosmetic setting difference with no security or operational effect.",
      "A stopped manual service that matches the approved baseline.",
      "An approved application using normal resources during an expected task.",
    ],
    answer: 0,
    explanation:
      "Privilege, exposure, sensitivity, lifecycle, and lack of ownership increase risk.",
  },
  {
    question:
      "Which recommendation is the most professional?",
    choices: [
      "Assign a named owner, preserve evidence, define the exact authorized change, test it, prepare rollback, validate required functions, monitor results, and set a review date.",
      "Fix the issue immediately.",
      "Remove every account and service.",
      "Ignore evidence gaps and close the finding.",
    ],
    answer: 0,
    explanation:
      "Professional remediation is specific, controlled, accountable, testable, reversible, and validated.",
  },
];

const scoringBands = [
  {
    range: "23–25 correct",
    level: "Advanced readiness",
    meaning:
      "You consistently connect Windows evidence, context, risk, dependencies, and controlled response.",
    nextStep:
      "Review any missed explanation, finalize the I3 portfolio report, and continue to Module I4.",
  },
  {
    range: "19–22 correct",
    level: "Strong readiness",
    meaning:
      "You understand most Windows security concepts but should review the domains connected to missed questions.",
    nextStep:
      "Revisit the relevant lesson evidence model, scenario lab, checklist, and portfolio prompt.",
  },
  {
    range: "15–18 correct",
    level: "Developing readiness",
    meaning:
      "You understand important ideas but need more practice correlating evidence and selecting controlled actions.",
    nextStep:
      "Review I3.1–I3.8, especially evidence limits, dependencies, prioritization, and validation.",
  },
  {
    range: "0–14 correct",
    level: "Rebuild the foundation",
    meaning:
      "Core Windows identity, access, maintenance, protection, logging, service, and review concepts need reinforcement.",
    nextStep:
      "Return to the module homepage and complete each lesson's readiness check, lab, quiz, checklist, and takeaways.",
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
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

function DomainGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Assessment Blueprint
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Windows Security Domains
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {assessmentDomains.map((item) => (
          <div
            key={item.domain}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  {item.domain}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {item.title}
                </h3>
              </div>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                {item.questions}
              </span>
            </div>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.focus}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScoringGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Scoring Guide
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Use Your Results to Plan the Next Review
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {scoringBands.map((item) => (
          <div
            key={item.range}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-black text-cyan-100">
                {item.range}
              </h3>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                {item.level}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Next step
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.nextStep}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WindowsSecurityBasicsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.14),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Module I3
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-200">
              25-Question Assessment
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I3 Module Test: Windows Security Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your ability to analyze Windows accounts, permissions,
            updates, security settings, Microsoft Defender, Event Viewer,
            startup apps, services, local habits, and integrated defensive
            evidence.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed all eight I3 lessons.",
            "I understand that the assessment requires evidence-based defensive reasoning, not memorizing labels alone.",
            "I will answer all twenty-five questions before revealing explanations.",
            "I will review every missed question and return to the connected lesson domain.",
            "I understand that every device, account, alert, path, event, service, and organization in this test is fictional.",
          ]}
        />

        <section className="grid gap-5 md:grid-cols-4">
          {[
            ["25", "Questions"],
            ["8", "Domains"],
            ["1", "Best answer each"],
            ["Hidden", "Answers until review"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-center"
            >
              <p className="text-3xl font-black text-yellow-100">{value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-yellow-200">
                {label}
              </p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Assessment Instructions"
          title="How to Complete the I3 Module Test"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Read the entire scenario before choosing an answer.",
              "Select the option best supported by the supplied fictional evidence.",
              "Prefer narrow, authorized, owned, testable, and reversible defensive actions.",
              "Do not assume that one alert, event, username, or severity proves intent or complete compromise.",
              "Check account, permission, application, service, backup, user, and network dependencies.",
              "Use the explanations after submission to identify which lesson needs review.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DomainGuide />

        <SectionCard
          eyebrow="Exam Skills"
          title="What Strong Answers Have in Common"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {examSkills.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Final Review"
          title="Eight Things to Check Before Starting"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {finalReview.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>


        <SectionCard
          eyebrow="Decision Standard"
          title="How to Choose Between Similar Answers"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Prefer evidence over appearance",
                "Choose the answer supported by account, permission, alert, event, service, owner, timeline, or change evidence—not by a familiar name, warning color, or assumption.",
              ],
              [
                "Prefer narrow action over broad disruption",
                "Correct the exact account, group, rule, exclusion, service, file path, or workflow instead of disabling protection or removing all access.",
              ],
              [
                "Preserve required work",
                "Check files, profiles, applications, services, tasks, backups, recovery, users, and network dependencies before remediation.",
              ],
              [
                "State uncertainty honestly",
                "When evidence is incomplete, preserve the finding, identify the gap, reduce exposure if needed, and obtain authorized evidence before claiming certainty.",
              ],
              [
                "Include ownership and approval",
                "The strongest response names who is responsible and uses an approved ticket, maintenance window, exception, or reporting process.",
              ],
              [
                "Validate the final state",
                "A change is not complete until required access, applications, services, protection, logs, backups, recovery, and user workflows are checked.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="I3 Module Test: Windows Security Basics"
          questions={questions}
        />

        <ScoringGuide />

        <DefenderChecklist
          title="Post-Test Review Checklist"
          items={[
            "I completed all twenty-five questions before reviewing explanations.",
            "I identified which missed questions belong to accounts, permissions, updates, Defender, logs, startup, habits, or integrated review.",
            "I reviewed why the strongest answer used evidence, ownership, least privilege, dependencies, and controlled change.",
            "I returned to the connected lesson for every domain that needs reinforcement.",
            "I updated my fictional Windows Security Review portfolio artifact using what I learned.",
            "I confirmed that my final report separates facts, conclusions, evidence gaps, risks, actions, and residual risk.",
            "I included test, rollback, validation, monitoring, and review dates in every major recommendation.",
            "I kept all devices, users, accounts, paths, events, alerts, services, rules, and organizations fictional.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Windows security is a connected system of identity, access, maintenance, protection, logging, software, user behavior, and governance.",
            "Strong answers use multiple evidence sources and respect what each source cannot prove.",
            "Least privilege applies to users, administrators, services, tasks, permissions, firewall rules, and Defender exclusions.",
            "Defensive changes should preserve required applications, services, backups, recovery, users, and network functions.",
            "Professional recommendations are authorized, owned, specific, tested, reversible, validated, monitored, and reviewed.",
            "The strongest Windows report clearly separates facts, conclusions, gaps, risk, actions, and residual risk.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Completion
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Finish the Full I3 Review
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-emerald-50">
            After completing the test, return to the module homepage and open
            all eight lessons plus this assessment. Confirm that every route
            loads and that the top and bottom navigation work correctly.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}