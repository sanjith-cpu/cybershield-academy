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

const modulePath =
  "/high-school/beginner/beginner-defensive-practice-labs";
const previousLesson =
  `${modulePath}/backup-and-recovery-validation-lab`;
const nextLesson =
  `${modulePath}/module-test`;

const vocab = [
  [
    "Correlation",
    "The process of connecting related alerts, logs, users, devices, messages, and timestamps into one defensible case.",
  ],
  [
    "Prioritization",
    "Ranking cases by evidence, possible impact, urgency, spread risk, business importance, and available authority.",
  ],
  [
    "Case ownership",
    "Clear responsibility for coordinating investigation, documentation, escalation, and follow-up.",
  ],
  [
    "Incident timeline",
    "An ordered record of relevant events showing what happened, when it happened, and how the evidence connects.",
  ],
  [
    "Escalation",
    "Moving a case to a more specialized or authorized responder when risk, uncertainty, scope, or impact requires it.",
  ],
  [
    "Decision confidence",
    "A documented level of certainty based on the quality, consistency, and completeness of the available evidence.",
  ],
];

const challengeStages = [
  {
    title: "Group related evidence",
    example:
      "Connect fictional identity, email, endpoint, network, and backup events by user, device, time, and action.",
  },
  {
    title: "Set priorities",
    example:
      "Compare severity, impact, uncertainty, spread risk, asset importance, and active harm.",
  },
  {
    title: "Choose coordinated actions",
    example:
      "Decide what to preserve, verify, contain, recover, warn, monitor, close, or escalate.",
  },
  {
    title: "Document the case",
    example:
      "Record the timeline, evidence, decisions, owners, confidence, limitations, and next review point.",
  },
];

const queueRows = [
  {
    item: "Identity alert",
    source:
      "Administrator login succeeds from a new device with no approved travel record",
    review:
      "High priority because privileged access and unfamiliar context could affect multiple systems.",
  },
  {
    item: "Email report",
    source:
      "User reports an urgent shared-document message with a mismatched link",
    review:
      "Preserve the message and connect it to the affected account and endpoint timeline.",
  },
  {
    item: "Endpoint alert",
    source:
      "Unsigned script is blocked after an unexpected attachment download",
    review:
      "Contain through the approved playbook and preserve the process chain.",
  },
  {
    item: "Network alert",
    source:
      "Blocked outbound attempts appear from the same endpoint",
    review:
      "Correlate with the endpoint case and review destination, timing, and volume.",
  },
  {
    item: "Backup warning",
    source:
      "Critical restore test is overdue while the related system is under investigation",
    review:
      "Assign a recovery owner and validate readiness without disrupting the active case.",
  },
];

const mistakes = [
  "Treating every alert as a separate case when the evidence clearly connects them.",
  "Prioritizing only by severity label without reviewing impact and context.",
  "Containing systems without confirming authority or business impact.",
  "Closing an alert because one control blocked part of the activity.",
  "Leaving unclear ownership between identity, email, endpoint, network, and recovery teams.",
  "Writing conclusions that are stronger than the available evidence supports.",
];

const quizQuestions = [
  {
    question: "What is correlation?",
    choices: [
      "Connecting related alerts, logs, users, devices, messages, and timestamps into one case.",
      "Deleting duplicate alerts immediately.",
      "Changing every alert to high severity.",
      "Assigning every alert to a different team.",
    ],
    answer: 0,
    explanation:
      "Correlation helps defenders see the complete pattern rather than isolated events.",
  },
  {
    question: "Which factor should influence case priority?",
    choices: [
      "Evidence, possible impact, urgency, spread risk, asset importance, and uncertainty.",
      "Only the alert color.",
      "Only the first event time.",
      "Only the number of words in the alert.",
    ],
    answer: 0,
    explanation:
      "Priority should reflect the real defensive risk and available context, not just a severity label.",
  },
  {
    question: "Why is case ownership important?",
    choices: [
      "It ensures someone is responsible for coordination, documentation, escalation, and follow-up.",
      "It removes the need for teamwork.",
      "It guarantees every alert is malicious.",
      "It replaces evidence preservation.",
    ],
    answer: 0,
    explanation:
      "Clear ownership prevents gaps, duplicated work, and unresolved actions.",
  },
  {
    question: "What should a defender do when evidence is incomplete?",
    choices: [
      "Document uncertainty, collect approved context, choose a proportionate action, and escalate when needed.",
      "Invent missing details.",
      "Close the case immediately.",
      "State a final conclusion with total confidence.",
    ],
    answer: 0,
    explanation:
      "Honest uncertainty supports safer and more trustworthy decisions.",
  },
  {
    question: "What is the strongest multi-alert response?",
    choices: [
      "Correlate evidence, prioritize by risk, assign owners, take authorized actions, and document the timeline.",
      "Handle each alert alone without checking related evidence.",
      "Delete low-severity alerts before review.",
      "Ask users for passwords and MFA codes.",
    ],
    answer: 0,
    explanation:
      "Coordinated defensive work depends on correlation, prioritization, ownership, authorization, and documentation.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href="/high-school/beginner"
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Beginner Track
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">Finish Module B14</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B14.6 Backup and Recovery Validation Lab
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href="/high-school/beginner"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Beginner Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B14 Module Test
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function ChallengeFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Multi-Alert Defensive Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A coordinated response connects evidence, sets priorities, assigns
        owners, chooses authorized actions, and maintains one clear timeline.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {challengeStages.map((stage, index) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Challenge rule:</span> do not let multiple
        alerts create multiple disconnected stories when the evidence supports
        one coordinated case.
      </div>
    </section>
  );
}

function FakeChallengePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Multi-Alert Queue
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Correlation and Priority Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional queue combines identity, email, endpoint, network,
            and recovery evidence into one defensive challenge.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {queueRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.7fr_1.2fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">
              {row.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PriorityDecisionBoard() {
  const areas = [
    {
      name: "Evidence connection",
      saferQuestion:
        "Which alerts share the same user, device, message, destination, account, or time window?",
      saferChoice:
        "Group connected evidence into one case while preserving each original source.",
    },
    {
      name: "Priority",
      saferQuestion:
        "Which case has the greatest possible impact, urgency, spread risk, or privileged access?",
      saferChoice:
        "Rank cases using evidence and operational impact rather than severity labels alone.",
    },
    {
      name: "Ownership",
      saferQuestion:
        "Who coordinates identity, email, endpoint, network, recovery, and communication actions?",
      saferChoice:
        "Assign one case owner and clearly record supporting team responsibilities.",
    },
    {
      name: "Decision quality",
      saferQuestion:
        "Which conclusions are confirmed, likely, uncertain, or unsupported?",
      saferChoice:
        "Document confidence, missing evidence, limitations, and the next authorized step.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Challenge Planning
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Multi-Alert Priority Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong multi-alert decisions depend on correlation, impact, ownership,
        authorization, evidence quality, and clear uncertainty.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div
            key={area.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong defensive action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MultiAlertDefensiveChallengePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B14
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.7 Multi-Alert Defensive Challenge
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Combine identity, email, endpoint, network, backup, prioritization,
            documentation, ownership, and escalation skills in one fictional
            defensive shift.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B14: Beginner Defensive Practice Labs"
          lessonTitle="Multi-Alert Defensive Challenge"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will connect related evidence instead of treating every alert as isolated.",
            "I will prioritize using evidence, impact, uncertainty, spread risk, and asset importance.",
            "I will use fictional users, devices, messages, accounts, logs, backups, and organizations only.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Real Defensive Shift Rarely Delivers One Perfectly Organized Alert at a Time"
        >
          <p className="leading-8">
            Defenders often receive several incomplete alerts from different
            tools. The challenge is to determine which events are related,
            which case matters most, who owns the response, and what action is
            justified right now.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> this
            challenge uses fictional and inert evidence only. Do not access,
            test, scan, download, run, modify, or investigate real systems.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Correlate fictional identity, email, endpoint, network, and recovery evidence into one timeline.",
            "Prioritize cases using impact, urgency, spread risk, privileged access, uncertainty, and asset importance.",
            "Assign ownership and choose authorized preserve, verify, contain, recover, warn, monitor, close, or escalate actions.",
          ].map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Disconnected Alerts Can Hide One Larger Incident"
        >
          <p className="leading-8">
            An unusual login, suspicious email, blocked script, denied network
            connection, and overdue recovery test may look separate until the
            timeline reveals they involve the same user, device, and system.
          </p>
        </SectionCard>

        <ChallengeFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Build One Defensible Story From Multiple Evidence Sources"
        >
          <p className="leading-8">
            The goal is not to force every alert into one conclusion. The goal
            is to connect what is supported, keep unrelated evidence separate,
            document uncertainty, and choose the safest authorized response.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Multi-Alert Defense
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
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

        <PriorityDecisionBoard />
        <FakeChallengePanel />

        <FakeDashboardCard
          title="Fake Defensive Operations Dashboard"
          subtitle="Training dashboard using fictional identity, email, endpoint, network, backup, case, owner, and escalation data."
          metrics={[
            {
              label: "Alerts in queue",
              value: "18",
              note: "Fictional identity, email, endpoint, network, backup, and policy alerts.",
            },
            {
              label: "Correlated cases",
              value: "5",
              note: "Alerts grouped by shared users, devices, messages, timestamps, and systems.",
            },
            {
              label: "Cases requiring escalation",
              value: "3",
              note: "Privileged access, active endpoint activity, possible spread, and recovery risk.",
            },
          ]}
        />

        <FakeAlertCard
          title="Privileged Login, Suspicious Email, and Endpoint Script Share One Timeline"
          severity="High"
          time="2:41 PM"
          source="Fake Correlation Engine"
          details="A fictional administrator account receives a suspicious shared-document email, logs in from a new device, and triggers an endpoint script alert followed by blocked outbound traffic."
          recommendation="Preserve all evidence, assign one case owner, verify the account through approved channels, isolate the endpoint if authorized, review related traffic, and escalate."
        />

        <FakeLogPanel
          title="Fake Correlated Incident Timeline"
          logs={[
            "13:52:07 EMAIL user='admin_04' subject='shared_document_urgent'",
            "13:58:42 LINK destination='mismatch' click='reported'",
            "14:06:15 IDENTITY login='success' device='unfamiliar' mfa='completed'",
            "14:12:33 ENDPOINT file='document_update.zip' script='blocked'",
            "14:18:09 NETWORK outbound_attempts='7' result='denied'",
            "14:26:54 BACKUP critical_system='admin_portal' restore_test='overdue'",
            "14:41:20 CASE owner='incident_lead' priority='high' escalation='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Case Should Be Prioritized First?"
          evidence={[
            "A fictional administrator account logs in from an unfamiliar device.",
            "The same user reported a suspicious shared-document email.",
            "The endpoint tool blocked an unsigned script on that device.",
            "The device attempted several denied outbound connections.",
            "A separate low-severity printer alert has no related evidence.",
          ]}
          question="What is the strongest priority decision?"
          options={[
            "Prioritize the connected administrator case, preserve all evidence, assign ownership, contain as authorized, and escalate.",
            "Prioritize the printer alert because it appeared first.",
            "Close the administrator case because some activity was blocked.",
            "Delete the email report to reduce duplicate evidence.",
          ]}
          bestAnswer={0}
          explanation="Privileged access, correlated evidence, endpoint activity, and network attempts create the greatest supported risk."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Multi-Alert Response"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Run a Fictional Defensive Shift"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Shift Queue
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Security Desk
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional shift includes identity anomalies, phishing
                reports, endpoint alerts, network events, backup warnings,
                expected maintenance, false positives, and unresolved cases.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Challenge Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Preserve each original alert, log, message, and ticket.</li>
                <li>Group evidence by user, device, account, system, and time.</li>
                <li>Separate confirmed facts, likely connections, and unsupported assumptions.</li>
                <li>Rank cases by impact, urgency, spread risk, privilege, and uncertainty.</li>
                <li>Assign one owner and supporting team responsibilities.</li>
                <li>Choose authorized actions and document the full timeline.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Blocked Script Is Connected to a Privileged Account"
          scenario="A fictional endpoint tool blocks an unsigned script, but the same device also shows an unfamiliar privileged login and denied outbound connections."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the evidence as one high-priority case, preserve all sources, verify the account, contain as authorized, assign ownership, and escalate.",
              outcome:
                "Best defensive choice. The combined evidence is stronger than any single alert.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the endpoint alert because the script was blocked.",
              outcome:
                "Risky. The identity and network evidence remain unexplained.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask the user to send their password and MFA code.",
              outcome:
                "Unsafe. Credentials and authentication codes must never be requested.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A High-Severity Alert Has Weak Evidence"
          scenario="A fictional dashboard labels one alert high severity, but the activity matches an approved maintenance ticket, expected device group, signed software, and scheduled window."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the ticket and supporting evidence, document the explanation, and close or downgrade according to policy.",
              outcome:
                "Best triage choice. Evidence and context outweigh the label alone.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Escalate automatically because the label says high severity.",
              outcome:
                "Risky. Severity is important, but it must be interpreted with context.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the maintenance ticket.",
              outcome:
                "Unsafe. The ticket is important evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Multi-Alert Defensive Challenge Checklist"
          items={[
            "I preserve each original alert, log, message, ticket, and timestamp.",
            "I group evidence by user, device, account, system, and time window.",
            "I separate confirmed facts, likely connections, uncertainty, and unsupported assumptions.",
            "I prioritize using impact, urgency, spread risk, privilege, asset importance, and evidence.",
            "I assign one case owner and record supporting team responsibilities.",
            "I choose proportionate, authorized actions and document decision confidence.",
            "I record the timeline, limitations, escalation, follow-up, and next review point.",
          ]}
        />

        <MiniQuiz
          title="B14.7 Mini Quiz: Multi-Alert Defensive Challenge"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional multi-alert case report. Include all alerts, shared entities, timeline, confirmed facts, likely connections, uncertainty, priority, possible impact, owners, containment decisions, recovery considerations, escalation, confidence level, limitations, and next actions."
          tips={[
            "Use fictional users, devices, accounts, messages, alerts, systems, logs, and organizations only.",
            "Do not include real credentials, suspicious files, live links, private records, or production evidence.",
            "Explain why some alerts were correlated and why others remained separate.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Correlation connects related evidence without forcing unsupported conclusions.",
            "Priority should reflect evidence, impact, urgency, spread risk, privileged access, and uncertainty.",
            "One clear case owner helps coordinate multiple defensive teams.",
            "Defenders should document confirmed facts, assumptions, confidence, limitations, and missing context.",
            "Authorized, proportionate, coordinated action is stronger than isolated reactions to individual alerts.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}