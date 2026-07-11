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
  "/high-school/beginner/cybersecurity-careers-and-certifications";
const previousLesson =
  `${modulePath}/cybersecurity-career-families`;
const nextLesson =
  `${modulePath}/security-engineering-and-architecture-roles`;

const vocab = [
  [
    "Security operations center",
    "A team or function that monitors security events, reviews alerts, investigates evidence, documents findings, and supports incident response.",
  ],
  [
    "Alert triage",
    "The first review used to decide an alert's priority, relevance, possible impact, and next action.",
  ],
  [
    "False positive",
    "An alert that appears suspicious but is explained by normal, approved, or harmless activity.",
  ],
  [
    "Escalation",
    "Passing an alert or incident to a person or team with the authority, expertise, or responsibility to continue the response.",
  ],
  [
    "Case notes",
    "Clear documentation of evidence, actions, decisions, timestamps, owners, and unresolved questions.",
  ],
  [
    "Playbook",
    "An approved set of response steps for a common alert or incident type.",
  ],
];

const workflowStages = [
  {
    title: "Receive and prioritize",
    example:
      "Review the alert source, severity, asset, user, time, and possible business impact.",
  },
  {
    title: "Gather evidence",
    example:
      "Compare approved logs, account activity, device events, tickets, and known context.",
  },
  {
    title: "Decide and document",
    example:
      "Record what the evidence supports, what remains uncertain, and which action is justified.",
  },
  {
    title: "Escalate or close",
    example:
      "Send important cases to the correct response team or close explained alerts with clear notes.",
  },
];

const socRows = [
  {
    item: "Unusual login alert",
    source: "New location, expected user, successful MFA, approved travel",
    review:
      "Document the context and decide whether the alert can be safely closed or requires more verification.",
  },
  {
    item: "Malware warning",
    source: "Security tool blocks a suspicious file on a managed laptop",
    review:
      "Preserve evidence, isolate through approved procedures, and escalate to incident response.",
  },
  {
    item: "Repeated failed logins",
    source: "Many attempts against one account from unfamiliar sources",
    review:
      "Check account ownership, timing, source pattern, lockout status, and related alerts.",
  },
  {
    item: "Policy violation",
    source: "Approved software installed outside the normal maintenance window",
    review:
      "Verify the change ticket and avoid treating unusual timing as automatic malicious activity.",
  },
  {
    item: "Resolved alert",
    source: "Normal scheduled backup caused high network activity",
    review:
      "Close with evidence, owner confirmation, and a clear explanation for future analysts.",
  },
];

const mistakes = [
  "Closing alerts without documenting the evidence.",
  "Escalating every alert without performing basic triage.",
  "Assuming a high severity label automatically proves a serious incident.",
  "Changing or deleting evidence before authorized review.",
  "Contacting users through unapproved channels or asking for passwords.",
  "Writing vague case notes that another analyst cannot understand.",
];

const quizQuestions = [
  {
    question: "What is alert triage?",
    choices: [
      "The first review used to judge priority, relevance, impact, and next action.",
      "Deleting every alert.",
      "Changing every alert to high severity.",
      "Calling every user immediately.",
    ],
    answer: 0,
    explanation:
      "Triage helps analysts decide which alerts need urgent investigation, routine review, escalation, or closure.",
  },
  {
    question: "What is a false positive?",
    choices: [
      "An alert explained by normal, approved, or harmless activity.",
      "A confirmed serious incident.",
      "A deleted log file.",
      "A public password.",
    ],
    answer: 0,
    explanation:
      "A false positive looks suspicious at first but is not actually malicious after review.",
  },
  {
    question: "Why are case notes important?",
    choices: [
      "They preserve evidence, decisions, actions, ownership, and unresolved questions.",
      "They replace investigation.",
      "They make all alerts harmless.",
      "They remove the need for escalation.",
    ],
    answer: 0,
    explanation:
      "Clear notes help teammates understand what happened and continue the response accurately.",
  },
  {
    question: "When should an alert be escalated?",
    choices: [
      "When evidence, impact, uncertainty, or policy requires a more specialized or authorized response.",
      "Whenever the alert title sounds serious.",
      "Only after deleting the logs.",
      "Never.",
    ],
    answer: 0,
    explanation:
      "Escalation should follow evidence, risk, policy, scope, and analyst authority.",
  },
  {
    question: "What should a SOC analyst never request from a user?",
    choices: [
      "A password, MFA code, or recovery code.",
      "The approved ticket number.",
      "The time the event occurred.",
      "The device name.",
    ],
    answer: 0,
    explanation:
      "Analysts should use approved verification methods and never request account secrets.",
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
        Next Lesson
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B13</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B13.1 Cybersecurity Career Families
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
          Next: B13.3 Security Engineering and Architecture Roles
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

function SocFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Beginner SOC Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        SOC analysts move from alert intake to evidence review, documented
        decisions, and appropriate escalation or closure.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {workflowStages.map((stage, index) => (
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
        <span className="font-bold">Analyst rule:</span> alerts are starting
        points, not final conclusions. Evidence and context drive the decision.
      </div>
    </section>
  );
}

function FakeSocPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake SOC Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Alert Triage Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares alerts, evidence, business context,
            likely explanations, and response decisions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {socRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocDecisionBoard() {
  const areas = [
    {
      name: "Priority",
      saferQuestion:
        "Which asset, user, data, service, or business process could be affected?",
      saferChoice:
        "Prioritize based on evidence, exposure, criticality, scope, and time sensitivity.",
    },
    {
      name: "Evidence",
      saferQuestion:
        "Which approved logs, tickets, account events, device alerts, or owner confirmations explain the activity?",
      saferChoice:
        "Gather enough trusted context to support the next decision without altering evidence.",
    },
    {
      name: "Documentation",
      saferQuestion:
        "Could another analyst understand what happened and continue the case?",
      saferChoice:
        "Record timestamps, evidence, actions, reasoning, owners, and unanswered questions clearly.",
    },
    {
      name: "Escalation",
      saferQuestion:
        "Does the case exceed the analyst's authority, skill, scope, or response playbook?",
      saferChoice:
        "Escalate promptly to the correct team with organized evidence and a clear summary.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Professional Decision-Making
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        SOC Analyst Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong analysts balance speed with accuracy, evidence with context, and
        independent work with timely escalation.
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
                Strong analyst action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WhatSocAnalystsDoPage() {
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
              Module B13
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.2 What SOC Analysts Do
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how security operations center analysts review alerts, gather
            evidence, distinguish suspicious activity from normal behavior,
            document cases, follow playbooks, and escalate incidents.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B13: Cybersecurity Careers and Certifications"
          lessonTitle="What SOC Analysts Do"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that an alert is evidence to review, not automatic proof of an incident.",
            "I will use fictional users, devices, alerts, tickets, logs, accounts, and organizations only.",
            "I am ready to practice triage, documentation, escalation, and ethical communication.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="SOC Analysts Turn Noisy Alerts Into Defensible Decisions"
        >
          <p className="leading-8">
            Security tools may generate thousands of alerts. Analysts must
            decide which ones are urgent, which need more evidence, which are
            explained by approved activity, and which should be escalated to
            incident responders or specialists.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every alert,
            ticket, log, user, device, account, and organization in this lesson
            is fictional. Never request passwords, MFA codes, recovery codes, or
            private personal data during an investigation.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain alert triage, evidence review, case documentation, playbooks, escalation, and closure.",
            "Distinguish high-priority evidence from harmless or approved activity.",
            "Write clear fictional case notes that another analyst could understand and continue.",
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
          title="Fast but Unsupported Decisions Can Create More Risk"
        >
          <p className="leading-8">
            Closing a real incident too early can leave an organization exposed.
            Escalating every harmless alert wastes time. Strong SOC work depends
            on evidence, context, clear notes, and appropriate authority.
          </p>
        </SectionCard>

        <SocFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Triage Is Structured Reasoning Under Time Pressure"
        >
          <p className="leading-8">
            Analysts review the alert source, affected asset, user, timing,
            severity, related events, business context, and known changes. They
            then document what the evidence supports and choose the safest next
            step.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Security Operations
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

        <SocDecisionBoard />
        <FakeSocPanel />

        <FakeDashboardCard
          title="Fake SOC Shift Dashboard"
          subtitle="Training dashboard using fictional alerts, assets, users, tickets, severity labels, evidence, and case decisions."
          metrics={[
            {
              label: "Alerts reviewed",
              value: "38",
              note: "Fictional identity, endpoint, email, network, cloud, and policy alerts.",
            },
            {
              label: "Escalated cases",
              value: "7",
              note: "Evidence or impact required incident response or specialist review.",
            },
            {
              label: "Explained alerts",
              value: "23",
              note: "Approved changes, normal behavior, scheduled tasks, or duplicate detections.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Failed Logins Followed by a Successful MFA Login"
          severity="High"
          time="8:42 AM"
          source="Fake Identity Monitoring"
          details="A fictional account receives repeated failed login attempts from unfamiliar sources, followed by a successful login from a new location."
          recommendation="Preserve the authentication evidence, check the user's approved activity through trusted channels, review related alerts, and escalate if the login cannot be verified."
        />

        <FakeLogPanel
          title="Fake SOC Investigation Log"
          logs={[
            "08:14:03 ALERT type='failed_logins' user='student_portal_admin'",
            "08:17:28 SOURCE attempts='18' locations='multiple_unfamiliar'",
            "08:22:11 AUTH success='true' mfa='approved' location='new'",
            "08:27:46 USER_CONTEXT travel='not_documented' change_ticket='none'",
            "08:33:19 RELATED_ALERT endpoint='new_device' email='none'",
            "08:38:54 DECISION severity='high' escalation='identity_response'",
            "08:42:06 CASE notes='completed' owner='soc_shift_lead'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should This Alert Be Closed or Escalated?"
          evidence={[
            "A fictional administrator account receives 18 failed login attempts.",
            "A successful MFA login follows from a new location.",
            "No approved travel or change ticket is documented.",
            "The login uses a previously unseen device.",
          ]}
          question="What is the safest analyst decision?"
          options={[
            "Preserve evidence, verify the user's activity through an approved channel, review related events, document findings, and escalate if unconfirmed.",
            "Close the alert because MFA succeeded.",
            "Ask the user to send their password and MFA code.",
            "Delete the failed-login logs to reduce noise.",
          ]}
          bestAnswer={0}
          explanation="The successful MFA event does not explain the unfamiliar location, new device, and failed-attempt pattern. Further verified review is justified."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken SOC Work"
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
          eyebrow="Safe Career Lab"
          title="Triage a Fictional SOC Alert Queue"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Alert Queue
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Beginner SOC Shift
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional analyst reviews unusual login, blocked malware,
                scheduled backup traffic, after-hours software installation,
                public-link exposure, and repeated password-reset alerts.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Analyst Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the alert source, asset, user, time, and severity.</li>
                <li>Review trusted context and related evidence.</li>
                <li>Separate facts, assumptions, and unanswered questions.</li>
                <li>Choose close, monitor, investigate, or escalate.</li>
                <li>Write clear case notes and identify the next owner.</li>
                <li>Follow approved playbooks and protect all evidence.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A High-Severity Alert Has an Approved Explanation"
          scenario="A fictional high-severity network alert occurs during a documented backup test approved by the infrastructure team."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the change ticket and owner, compare the activity with the approved test, document the evidence, and close or downgrade according to policy.",
              outcome:
                "Best analyst choice. Severity alone does not override trusted context.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Escalate it as a confirmed attack without reviewing the ticket.",
              outcome:
                "Risky. The alert may be expected approved activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the alert without writing notes.",
              outcome:
                "Unsafe. Future analysts lose important context.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Malware Alert Appears on a Managed Laptop"
          scenario="A fictional endpoint tool blocks a suspicious file and reports that the user attempted to open it."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve alert evidence, follow the approved containment playbook, document the case, and escalate to incident response.",
              outcome:
                "Best analyst choice. The event requires authorized technical response and further investigation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ask the user to run the file again for confirmation.",
              outcome:
                "Risky. Re-execution could increase harm.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Request the user's password and MFA code.",
              outcome:
                "Unsafe. Analysts should never request account secrets.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="SOC Analyst Checklist"
          items={[
            "I treat alerts as starting points rather than final conclusions.",
            "I review trusted evidence, context, assets, users, time, and impact.",
            "I separate facts, assumptions, and unanswered questions.",
            "I preserve logs, alerts, tickets, timestamps, and related evidence.",
            "I write case notes another analyst can understand.",
            "I escalate cases that exceed my authority, expertise, scope, or playbook.",
            "I never request passwords, MFA codes, recovery codes, or private personal data.",
          ]}
        />

        <MiniQuiz
          title="B13.2 Mini Quiz: What SOC Analysts Do"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional SOC case report. Include alert summary, affected asset, user, timeline, severity, evidence, business context, facts, assumptions, unanswered questions, decision, escalation path, and final case notes."
          tips={[
            "Use fictional users, devices, logs, tickets, alerts, accounts, and organizations only.",
            "Do not include real credentials, private employer data, personal records, or live security logs.",
            "Write so another beginner analyst could understand why the case was closed, monitored, or escalated.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "SOC analysts review alerts, gather evidence, document findings, and support incident response.",
            "Alert severity is important, but evidence and context determine the decision.",
            "False positives should be explained and documented, not silently deleted.",
            "Clear case notes and timely escalation are essential professional skills.",
            "Analysts must protect evidence and never request account secrets.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}