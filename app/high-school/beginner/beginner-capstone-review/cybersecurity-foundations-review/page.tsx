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

const modulePath = "/high-school/beginner/beginner-capstone-review";
const previousLesson =
  "/high-school/beginner/beginner-defensive-practice-labs/module-test";
const nextLesson = `${modulePath}/ethics-and-safe-learning-review`;

const vocabulary = [
  [
    "Asset",
    "Something valuable that should be protected, such as data, accounts, devices, services, reputation, or people.",
  ],
  [
    "Threat",
    "A person, event, action, or condition that could cause harm to an asset.",
  ],
  [
    "Vulnerability",
    "A weakness that could be used or triggered by a threat.",
  ],
  [
    "Risk",
    "The possibility that a threat will use a vulnerability and cause harm to an asset.",
  ],
  [
    "Control",
    "A safeguard used to prevent, detect, respond to, or recover from risk.",
  ],
  [
    "Defense in depth",
    "Using multiple protective layers so one failed control does not expose everything.",
  ],
];

const ciaPrinciples = [
  {
    title: "Confidentiality",
    question: "Who should be allowed to view or use the information?",
    examples:
      "Access control, encryption, privacy settings, classification, secure sharing, and least privilege.",
  },
  {
    title: "Integrity",
    question: "How do we know the information or system has not been changed improperly?",
    examples:
      "Permissions, hashes, logs, approvals, version history, backups, and change controls.",
  },
  {
    title: "Availability",
    question: "Can approved users access the service or data when needed?",
    examples:
      "Updates, backups, redundancy, monitoring, incident response, and recovery planning.",
  },
];

const riskRows = [
  {
    asset: "Student learning portal",
    threat: "Account takeover",
    vulnerability: "Weak reused passphrase and no MFA",
    control:
      "Unique passphrase, password manager, MFA, login alerts, and recovery review",
  },
  {
    asset: "Teacher shared drive",
    threat: "Accidental exposure",
    vulnerability: "Public sharing link with broad permissions",
    control:
      "Restricted sharing, access review, classification, and expiration settings",
  },
  {
    asset: "School laptop",
    threat: "Malicious software",
    vulnerability: "Unpatched software and unsafe download behavior",
    control:
      "Updates, endpoint protection, safe browsing, reporting, and least privilege",
  },
  {
    asset: "Course database",
    threat: "Data loss",
    vulnerability: "Backups exist but restores are untested",
    control:
      "Protected copies, restore validation, ownership, and documented recovery goals",
  },
];

const commonMistakes = [
  "Calling every unusual event a confirmed attack without reviewing evidence.",
  "Confusing a threat with a vulnerability.",
  "Selecting controls without identifying the asset and risk first.",
  "Protecting confidentiality while ignoring integrity or availability.",
  "Depending on one control instead of using layered defenses.",
  "Writing conclusions that are stronger than the available evidence supports.",
];

const quizQuestions = [
  {
    question: "What is an asset in cybersecurity?",
    choices: [
      "Something valuable that should be protected.",
      "Only a physical computer.",
      "A confirmed cyberattack.",
      "A password requirement.",
    ],
    answer: 0,
    explanation:
      "Assets can include people, information, systems, services, devices, money, and reputation.",
  },
  {
    question: "What is the difference between a threat and a vulnerability?",
    choices: [
      "A threat may cause harm, while a vulnerability is a weakness that could be used.",
      "They are exactly the same.",
      "A vulnerability is always a person.",
      "A threat is always software.",
    ],
    answer: 0,
    explanation:
      "Threats create or trigger harm, while vulnerabilities are weaknesses that make harm more likely.",
  },
  {
    question: "Which principle focuses on preventing improper changes?",
    choices: [
      "Integrity.",
      "Availability.",
      "Confidentiality.",
      "Convenience.",
    ],
    answer: 0,
    explanation:
      "Integrity protects the accuracy, trustworthiness, and authorized state of data and systems.",
  },
  {
    question: "What does defense in depth mean?",
    choices: [
      "Using multiple protective layers so one failed control does not expose everything.",
      "Using one expensive tool as the entire security plan.",
      "Giving every user administrator access.",
      "Turning off monitoring.",
    ],
    answer: 0,
    explanation:
      "Layered controls reduce dependence on a single safeguard.",
  },
  {
    question: "What is the strongest risk decision?",
    choices: [
      "Identify the asset, threat, vulnerability, possible impact, existing controls, and next action.",
      "Select a tool before understanding the problem.",
      "Assume every unusual event is malicious.",
      "Ignore business and user impact.",
    ],
    answer: 0,
    explanation:
      "Risk decisions should connect evidence, assets, threats, vulnerabilities, impact, and controls.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B15</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B14 Module Test
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
          Next: B15.2 Ethics and Safe Learning Review
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

function CiaReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Confidentiality, Integrity, and Availability
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        The CIA triad helps defenders ask three different protection questions
        about the same asset.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {ciaPrinciples.map((principle, index) => (
          <div
            key={principle.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">
              {principle.title}
            </h3>
            <p className="mt-3 font-semibold text-cyan-100">
              {principle.question}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {principle.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RiskChainBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Risk Register
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Asset → Threat → Vulnerability → Control
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each row connects something valuable with a possible source of harm,
            an exploitable weakness, and layered safeguards.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {riskRows.map((row) => (
          <div
            key={row.asset}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 lg:grid-cols-4"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Asset
              </p>
              <p className="mt-2 font-bold text-cyan-100">{row.asset}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Threat
              </p>
              <p className="mt-2 text-slate-300">{row.threat}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Vulnerability
              </p>
              <p className="mt-2 text-yellow-100">{row.vulnerability}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Controls
              </p>
              <p className="mt-2 text-emerald-100">{row.control}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CybersecurityFoundationsReviewPage() {
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
              Module B15
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.1 Cybersecurity Foundations Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Review confidentiality, integrity, availability, assets, threats,
            vulnerabilities, risk, controls, defense in depth, evidence, and
            the defender mindset.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B15: Beginner Capstone Review"
          lessonTitle="Cybersecurity Foundations Review"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain the difference between an asset, threat, vulnerability, risk, and control.",
            "I remember that confidentiality, integrity, and availability protect different needs.",
            "I am ready to use fictional evidence and defensive reasoning only.",
          ]}
        />

        <SectionCard
          eyebrow="Capstone Hook"
          title="Every Cybersecurity Decision Begins With What Matters and What Could Harm It"
        >
          <p className="leading-8">
            Cybersecurity is not only about tools. Defenders identify valuable
            assets, understand threats and vulnerabilities, estimate possible
            impact, choose controls, review evidence, and improve protection
            over time.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Review rule:</span> strong conclusions
            come from evidence and context. An alert, weakness, or unusual event
            is not automatically a confirmed incident.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain the CIA triad and connect each principle to real defensive goals.",
            "Distinguish assets, threats, vulnerabilities, risks, impacts, and controls.",
            "Build a layered protection plan using evidence, priorities, and defense in depth.",
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
          title="Foundations Help Defenders Explain Why a Control Is Needed"
        >
          <p className="leading-8">
            A password manager, update, backup, access review, firewall rule, or
            training program is more meaningful when the defender can explain
            which asset it protects, which risk it reduces, and what evidence
            shows it is working.
          </p>
        </SectionCard>

        <CiaReviewBoard />

        <SectionCard
          eyebrow="Core Concept"
          title="Risk Connects Assets, Threats, Vulnerabilities, Impact, and Controls"
        >
          <p className="leading-8">
            A threat may take advantage of a vulnerability and affect an asset.
            Defenders estimate likelihood and impact, review existing controls,
            decide what additional protection is needed, and document remaining
            risk.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Foundations Review Terms
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

        <RiskChainBoard />

        <FakeDashboardCard
          title="Fake Cybersecurity Foundations Dashboard"
          subtitle="Training dashboard using fictional assets, risks, controls, owners, findings, and review decisions."
          metrics={[
            {
              label: "Assets reviewed",
              value: "32",
              note: "Fictional accounts, devices, applications, services, data sets, and recovery systems.",
            },
            {
              label: "Risks requiring action",
              value: "9",
              note: "Weak authentication, broad sharing, missing updates, untested recovery, and unclear ownership.",
            },
            {
              label: "Layered controls",
              value: "21",
              note: "Preventive, detective, response, recovery, technical, administrative, and physical safeguards.",
            },
          ]}
        />

        <FakeAlertCard
          title="Critical Learning Portal Depends on One Unverified Control"
          severity="High"
          time="10:42 AM"
          source="Fake Risk Review Monitor"
          details="A fictional learning portal stores important course data and relies on nightly backups, but the restore process has not been tested and no recovery owner is assigned."
          recommendation="Assign ownership, validate recovery through an approved test, document recovery goals, and add layered safeguards rather than relying on backup job status alone."
        />

        <FakeLogPanel
          title="Fake Foundations Review Log"
          logs={[
            "09:18:02 ASSET name='learning_portal' criticality='high'",
            "09:21:44 THREAT type='data_loss_or_service_failure'",
            "09:25:16 VULNERABILITY restore_test='missing' owner='unassigned'",
            "09:29:53 IMPACT confidentiality='medium' integrity='high' availability='high'",
            "09:34:28 CONTROL backup_job='nightly_success'",
            "09:39:11 GAP recovery_validation='overdue' defense_layers='insufficient'",
            "10:42:07 DECISION assign_owner='true' validate_restore='urgent'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Risk Should Be Addressed First?"
          evidence={[
            "A fictional course database is required for daily instruction.",
            "Nightly backups report success, but no restore test has occurred in nine months.",
            "The recovery owner field is empty.",
            "A separate public information page has a minor formatting error.",
          ]}
          question="What is the strongest priority decision?"
          options={[
            "Prioritize recovery validation and ownership for the course database because availability and integrity risks are high.",
            "Prioritize the formatting error because it is visible.",
            "Assume recovery will work because backup jobs succeed.",
            "Delete the backup logs.",
          ]}
          bestAnswer={0}
          explanation="The critical database has a meaningful availability and integrity risk supported by evidence, while the formatting issue has low security impact."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Foundational Reasoning"
        >
          <div className="grid gap-3">
            {commonMistakes.map((mistake) => (
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
          eyebrow="Safe Capstone Lab"
          title="Build a Fictional Risk and Control Map"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Organization
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional organization uses student accounts, teacher
                accounts, managed laptops, a learning website, shared cloud
                storage, email, network services, and backup systems.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>List the most valuable assets and their owners.</li>
                <li>Identify threats and vulnerabilities separately.</li>
                <li>Describe confidentiality, integrity, and availability impact.</li>
                <li>Review existing preventive, detective, response, and recovery controls.</li>
                <li>Identify control gaps and remaining risk.</li>
                <li>Prioritize actions and document the evidence.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Shared Folder Is Publicly Accessible"
          scenario="A fictional teacher folder containing class resources is available through a public link, even though only enrolled students need access."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict sharing to approved users, review existing access, document the change, and confirm whether any sensitive data was exposed.",
              outcome:
                "Best defensive choice. The action protects confidentiality and supports evidence-based follow-up.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the link public because no complaint has been received.",
              outcome:
                "Risky. Lack of a complaint does not remove the exposure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the entire folder without reviewing impact.",
              outcome:
                "Unsafe. The response should protect data while preserving availability and evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="One Security Tool Blocks a Suspicious File"
          scenario="A fictional endpoint tool blocks a suspicious file, but related email and network events remain unexplained."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the alert, review related evidence, apply authorized containment if needed, and escalate according to the playbook.",
              outcome:
                "Best defensive choice. One successful control does not remove the need for layered investigation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case because one tool blocked the file.",
              outcome:
                "Risky. Other evidence may show continuing risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the security tool to avoid future alerts.",
              outcome:
                "Unsafe. Monitoring and prevention are important defensive layers.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cybersecurity Foundations Review Checklist"
          items={[
            "I identify the asset before selecting a control.",
            "I separate threats from vulnerabilities.",
            "I consider confidentiality, integrity, and availability.",
            "I review possible likelihood, impact, and existing safeguards.",
            "I use multiple preventive, detective, response, and recovery layers.",
            "I separate evidence from assumptions and unsupported conclusions.",
            "I document priorities, owners, remaining risk, and next actions.",
          ]}
        />

        <MiniQuiz
          title="B15.1 Mini Quiz: Cybersecurity Foundations Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cybersecurity risk and control map. Include the asset, owner, confidentiality need, integrity need, availability need, threat, vulnerability, possible impact, existing controls, control gaps, priority, remaining risk, and next action."
          tips={[
            "Use fictional organizations, systems, accounts, data, risks, and evidence only.",
            "Show the difference between a threat and a vulnerability.",
            "Explain why each control protects confidentiality, integrity, availability, or more than one principle.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Assets are protected from threats that may use vulnerabilities and cause harm.",
            "Confidentiality, integrity, and availability describe different protection goals.",
            "Risk decisions connect likelihood, impact, evidence, controls, priorities, and remaining risk.",
            "Defense in depth uses multiple layers instead of depending on one safeguard.",
            "Strong defenders explain what is known, what is uncertain, who owns the action, and what happens next.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}