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
  `${modulePath}/security-engineering-and-architecture-roles`;
const nextLesson =
  `${modulePath}/certifications-and-learning-paths`;

const vocab = [
  [
    "Governance",
    "The structures, responsibilities, policies, decision processes, and oversight used to guide security across an organization.",
  ],
  [
    "Risk",
    "The possibility that a threat could exploit a weakness and cause harm to people, systems, data, operations, or goals.",
  ],
  [
    "Compliance",
    "The process of meeting applicable laws, regulations, standards, contracts, policies, and documented requirements.",
  ],
  [
    "Control",
    "A safeguard designed to reduce risk, such as approval rules, access limits, training, encryption, monitoring, or backups.",
  ],
  [
    "Audit evidence",
    "Reliable documentation showing whether a control exists, is operating, and is reviewed as required.",
  ],
  [
    "Risk treatment",
    "A decision to reduce, avoid, transfer, or accept a risk based on evidence, authority, cost, and organizational priorities.",
  ],
];

const grcStages = [
  {
    title: "Understand the organization",
    example:
      "Identify goals, systems, data, users, obligations, critical services, and decision owners.",
  },
  {
    title: "Identify and assess risk",
    example:
      "Review threats, weaknesses, impact, likelihood, existing controls, and uncertainty.",
  },
  {
    title: "Choose and document treatment",
    example:
      "Reduce, avoid, transfer, or accept risk through an approved and accountable process.",
  },
  {
    title: "Monitor and improve",
    example:
      "Review evidence, control performance, audits, incidents, changes, exceptions, and new requirements.",
  },
];

const grcRows = [
  {
    item: "GRC analyst",
    source: "Reviews risks, controls, policies, evidence, and business requirements",
    review:
      "Connects security decisions with organizational goals and documented accountability.",
  },
  {
    item: "Risk analyst",
    source: "Evaluates likelihood, impact, controls, uncertainty, and treatment options",
    review:
      "Helps leaders understand and prioritize security risk.",
  },
  {
    item: "Compliance analyst",
    source: "Maps laws, standards, contracts, and policies to required controls",
    review:
      "Supports evidence collection, gap tracking, reporting, and remediation planning.",
  },
  {
    item: "Security auditor",
    source: "Independently reviews evidence to determine whether controls are designed and operating",
    review:
      "Provides objective findings, limitations, and recommendations.",
  },
  {
    item: "Privacy analyst",
    source: "Reviews personal-data use, access, retention, sharing, and protection",
    review:
      "Connects privacy principles with security, legal, policy, and business requirements.",
  },
];

const mistakes = [
  "Treating compliance as proof that all security risk is eliminated.",
  "Writing policies that no team can realistically follow or measure.",
  "Accepting risk without an authorized owner, rationale, review date, or conditions.",
  "Collecting evidence without checking whether it is current, complete, and relevant.",
  "Using vague risk labels without describing impact, likelihood, and uncertainty.",
  "Ignoring privacy, business operations, cost, people, and communication when recommending controls.",
];

const quizQuestions = [
  {
    question: "What is governance in cybersecurity?",
    choices: [
      "The structures, responsibilities, policies, and oversight used to guide security decisions.",
      "A type of antivirus scan.",
      "A password format.",
      "A single firewall rule.",
    ],
    answer: 0,
    explanation:
      "Governance defines who makes decisions, how responsibilities are assigned, and how security is directed and reviewed.",
  },
  {
    question: "What is compliance?",
    choices: [
      "Meeting applicable laws, regulations, standards, contracts, policies, and requirements.",
      "Guaranteeing that no incident can occur.",
      "Deleting all risk records.",
      "Allowing every user full access.",
    ],
    answer: 0,
    explanation:
      "Compliance means meeting documented obligations, but it does not remove every possible risk.",
  },
  {
    question: "Which is a valid risk treatment option?",
    choices: [
      "Reduce, avoid, transfer, or accept the risk through an authorized process.",
      "Hide the risk from leadership.",
      "Delete the evidence.",
      "Assume the risk will disappear.",
    ],
    answer: 0,
    explanation:
      "Organizations commonly reduce, avoid, transfer, or accept risk depending on evidence, authority, cost, and priorities.",
  },
  {
    question: "Why is audit evidence important?",
    choices: [
      "It shows whether a control exists, operates, and is reviewed as required.",
      "It replaces every security control.",
      "It makes risk assessment unnecessary.",
      "It guarantees perfect security.",
    ],
    answer: 0,
    explanation:
      "Reliable evidence supports objective review and helps determine whether controls are working as intended.",
  },
  {
    question: "What should happen when a control gap is found?",
    choices: [
      "Document the gap, assess the risk, assign an owner, choose treatment, and track remediation.",
      "Ignore it permanently.",
      "Delete the finding.",
      "Blame a user without evidence.",
    ],
    answer: 0,
    explanation:
      "Control gaps should be evaluated, owned, prioritized, and tracked through an approved process.",
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
          Previous: B13.3 Security Engineering and Architecture Roles
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
          Next: B13.5 Certifications and Learning Paths
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

function GrcFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Governance, Risk, and Compliance Cycle
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        GRC professionals help organizations make consistent, documented,
        evidence-based security decisions.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {grcStages.map((stage, index) => (
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
        <span className="font-bold">GRC rule:</span> compliance is not the same
        as complete security. A control can meet a requirement and still need
        improvement as risks, systems, and threats change.
      </div>
    </section>
  );
}

function FakeGrcPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake GRC Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Role and Responsibility Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares GRC, risk, compliance, audit, and
            privacy responsibilities.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {grcRows.map((row) => (
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

function RiskDecisionBoard() {
  const areas = [
    {
      name: "Risk description",
      saferQuestion:
        "What could happen, what might cause it, and what people, systems, data, or goals could be affected?",
      saferChoice:
        "Write a specific risk statement that separates threat, weakness, event, and impact.",
    },
    {
      name: "Evidence",
      saferQuestion:
        "Which current documents, interviews, logs, tests, configurations, or records support the assessment?",
      saferChoice:
        "Use relevant, reliable, dated evidence and document any limitations.",
    },
    {
      name: "Treatment",
      saferQuestion:
        "Should the organization reduce, avoid, transfer, or accept the risk?",
      saferChoice:
        "Choose a treatment based on authority, cost, impact, likelihood, uncertainty, and priorities.",
    },
    {
      name: "Accountability",
      saferQuestion:
        "Who owns the risk, the control, the action plan, and the review date?",
      saferChoice:
        "Assign clear owners, deadlines, conditions, evidence, and follow-up.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Decision Framework
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Risk and Compliance Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong GRC decisions are specific, documented, evidence-based, and
        assigned to accountable owners.
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
                Strong GRC action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GovernanceRiskComplianceRolesPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.4 Governance, Risk, and Compliance Roles
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore how governance, risk, compliance, audit, and privacy
            professionals connect security controls with policy, evidence,
            organizational priorities, legal obligations, and accountable
            decision-making.
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
          lessonTitle="Governance, Risk, and Compliance Roles"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that GRC work combines security, policy, evidence, communication, risk, and business needs.",
            "I will use fictional organizations, policies, risks, evidence, audits, and records only.",
            "I am ready to separate compliance requirements from broader security risk.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Security Decisions Need More Than Technical Tools"
        >
          <p className="leading-8">
            Organizations must decide which risks matter most, who owns them,
            which controls are required, how evidence will be collected, and
            whether obligations are being met. GRC professionals help create
            that structure.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Professional reminder:</span> never
            invent audit evidence, hide findings, change records, or claim that
            a control is operating without reliable proof.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain governance, risk, compliance, audit, privacy, controls, evidence, and risk treatment.",
            "Compare GRC-related career responsibilities and work products.",
            "Evaluate fictional risks, evidence, control gaps, owners, and treatment decisions.",
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
          title="Organizations Need Evidence, Ownership, and Consistent Decisions"
        >
          <p className="leading-8">
            Security programs can fail when policies are unclear, risk owners
            are missing, controls are not measured, or findings are not tracked.
            GRC work helps leaders understand what is required, what is at risk,
            and what action is justified.
          </p>
        </SectionCard>

        <GrcFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Compliance Supports Security, but It Does Not Replace Risk Management"
        >
          <p className="leading-8">
            Compliance checks whether defined requirements are being met. Risk
            management considers what could still go wrong, how serious it could
            be, what uncertainty remains, and whether additional treatment is
            needed.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for GRC, Risk, Audit, and Privacy
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

        <RiskDecisionBoard />
        <FakeGrcPanel />

        <FakeDashboardCard
          title="Fake GRC Program Dashboard"
          subtitle="Training dashboard using fictional policies, risks, controls, findings, evidence, owners, and remediation plans."
          metrics={[
            {
              label: "Risks reviewed",
              value: "27",
              note: "Identity, privacy, vendor, data, availability, access, backup, and awareness risks.",
            },
            {
              label: "Control gaps",
              value: "6",
              note: "Ownership, review frequency, evidence quality, exceptions, and documentation gaps.",
            },
            {
              label: "Open remediation items",
              value: "9",
              note: "Each item has a fictional owner, target date, evidence requirement, and status.",
            },
          ]}
        />

        <FakeAlertCard
          title="Risk Acceptance Has No Owner or Review Date"
          severity="Medium"
          time="11:30 AM"
          source="Fake Risk Register Review"
          details="A fictional organization marks a data-retention risk as accepted but records no authorized owner, business rationale, conditions, expiration date, or review schedule."
          recommendation="Require an authorized risk owner, documented rationale, acceptance conditions, review date, supporting evidence, and monitoring expectations."
        />

        <FakeLogPanel
          title="Fake GRC Review Log"
          logs={[
            "09:12:05 RISK asset='student_records' event='excess_retention'",
            "09:18:31 IMPACT privacy='high' legal='possible' operations='medium'",
            "09:26:44 CONTROL retention_policy='exists' deletion_review='missing'",
            "09:34:20 EVIDENCE policy_date='current' deletion_log='unavailable'",
            "09:47:53 TREATMENT proposal='reduce' action='automated_review'",
            "10:02:11 OWNER role='data_governance_lead' due='30_days'",
            "11:30:04 STATUS residual_risk='medium' review='quarterly'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Risk Decision Complete?"
          evidence={[
            "A fictional organization stores sensitive records longer than its policy allows.",
            "The written retention policy is current.",
            "No deletion review log or control owner can be identified.",
            "The risk register says accepted but has no authorized approver or review date.",
          ]}
          question="What is the strongest GRC recommendation?"
          options={[
            "Document the control gap, reassess the risk, assign an authorized owner, choose treatment, set deadlines, and require evidence and review.",
            "Leave the risk accepted because a policy exists.",
            "Delete the finding so the audit can pass.",
            "Claim the control is effective without evidence.",
          ]}
          bestAnswer={0}
          explanation="The policy alone does not prove the retention control operates. Ownership, evidence, treatment, approval, and review are incomplete."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken GRC Work"
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
          title="Review a Fictional Risk and Control Register"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Organization
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Platform
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional platform manages accounts, student submissions,
                teacher access, cloud storage, email notifications, backups,
                vendors, policies, privacy requests, and incident records.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                GRC Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify obligations, assets, owners, data, and critical services.</li>
                <li>Write specific risk statements with impact and likelihood.</li>
                <li>Map each risk to existing and planned controls.</li>
                <li>Review evidence quality, date, completeness, and relevance.</li>
                <li>Choose treatment and assign accountable owners.</li>
                <li>Track deadlines, exceptions, residual risk, and review dates.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Team Says Compliance Means the System Is Fully Secure"
          scenario="A fictional system passed a checklist review, but recent changes introduced new vendor, access, logging, and data-retention risks."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the compliance result, reassess the changed risks, review controls, gather evidence, and update treatment plans.",
              outcome:
                "Best GRC choice. Compliance status does not remove the need for ongoing risk review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore all new risks because the checklist was passed.",
              outcome:
                "Risky. Changes can create exposures not covered by the earlier review.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the change records so no finding appears.",
              outcome:
                "Unsafe and unethical. Evidence must remain accurate and complete.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Audit Finding Has No Remediation Owner"
          scenario="A fictional audit identifies weak access reviews, but the report has no assigned owner, deadline, status, or evidence requirement."
          choices={[
            {
              label: "Choice A",
              response:
                "Assign an accountable owner, define actions, set a target date, specify evidence, track progress, and reassess residual risk.",
              outcome:
                "Best GRC choice. Findings need ownership and measurable follow-through.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the finding because the report was written.",
              outcome:
                "Risky. Documentation alone does not fix the control gap.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the finding to compliant without new evidence.",
              outcome:
                "Unsafe and dishonest. Status must reflect reliable evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Governance, Risk, and Compliance Checklist"
          items={[
            "I understand that governance defines direction, responsibility, and oversight.",
            "I describe risks specifically using threats, weaknesses, events, impact, likelihood, and uncertainty.",
            "I separate compliance status from broader security risk.",
            "I use reliable, current, complete, and relevant evidence.",
            "I assign owners, deadlines, conditions, and review dates.",
            "I track findings, exceptions, remediation, residual risk, and treatment decisions.",
            "I never invent, hide, alter, or misrepresent audit or control evidence.",
          ]}
        />

        <MiniQuiz
          title="B13.4 Mini Quiz: Governance, Risk, and Compliance"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional GRC risk review. Include the organization goal, asset, risk statement, impact, likelihood, uncertainty, existing controls, evidence, control gaps, treatment choice, owner, deadline, residual risk, and review date."
          tips={[
            "Use fictional organizations, policies, risks, evidence, audits, vendors, and records only.",
            "Do not include real private employer data, legal records, student records, or confidential audit findings.",
            "Explain why the chosen treatment is reasonable and what evidence would prove completion.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Governance defines how security decisions, responsibilities, policies, and oversight are organized.",
            "Risk management evaluates what could happen, how serious it could be, and what treatment is justified.",
            "Compliance means meeting defined obligations, but it does not guarantee complete security.",
            "Reliable audit evidence and clear ownership make security decisions accountable.",
            "GRC professionals combine security, business, communication, policy, privacy, and analytical skills.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}