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
const previousLesson = `${modulePath}/cybersecurity-foundations-review`;
const nextLesson = `${modulePath}/networking-and-web-concepts-review`;

const vocabulary = [
  ["Authorization", "Explicit permission from the responsible owner to perform specific actions in a defined environment."],
  ["Scope", "The approved boundaries of systems, data, tools, actions, time, and goals."],
  ["Responsible disclosure", "Reporting a security issue through an approved channel without exposing unnecessary details."],
  ["Privacy", "The appropriate handling and protection of personal, sensitive, and confidential information."],
  ["Stop condition", "A rule requiring activity to pause when unexpected risk, real data, uncertainty, instability, or unclear permission appears."],
  ["Evidence handling", "Preserving, documenting, storing, and sharing security evidence in a safe, accurate, and authorized way."],
];

const ethicsPrinciples = [
  {
    title: "Permission before action",
    question: "Do I have clear authorization from the responsible owner for this exact environment and activity?",
    examples: "Written scope, approved training accounts, fictional data, allowed tools, time limits, and named owners.",
  },
  {
    title: "Minimize harm",
    question: "Could this action disrupt a system, expose data, affect another person, or weaken evidence?",
    examples: "Use simulations, read-only review, test copies, isolated labs, and proportionate defensive actions.",
  },
  {
    title: "Protect privacy",
    question: "Am I collecting, viewing, storing, or sharing more information than the task requires?",
    examples: "Redaction, limited access, secure storage, minimal collection, safe screenshots, and approved retention.",
  },
  {
    title: "Be accountable",
    question: "Can another reviewer understand what I did, why I did it, and what evidence supports my conclusion?",
    examples: "Clear notes, timestamps, owners, limitations, uncertainty, approvals, and documented mistakes.",
  },
];

const scenarioRows = [
  {
    activity: "Fictional sandbox review",
    context: "Instructor provides invented users, logs, alerts, and an approved read-only task",
    decision: "Authorized when the learner follows the stated scope, evidence rules, and stop conditions.",
  },
  {
    activity: "Testing a public login page",
    context: "The page is visible online but no permission or scope exists",
    decision: "Not authorized. Public visibility does not create permission to test.",
  },
  {
    activity: "Unexpected real personal data",
    context: "A real-looking name, email, or student record appears in a fictional lab package",
    decision: "Stop, preserve the source safely, notify the instructor, and wait for a sanitized replacement.",
  },
  {
    activity: "Reporting a possible weakness",
    context: "A learner notices a weakness in an approved environment",
    decision: "Document only necessary evidence and report through the approved owner or disclosure channel.",
  },
  {
    activity: "Sharing a portfolio screenshot",
    context: "The image includes usernames, internal details, and ticket numbers",
    decision: "Redact or replace sensitive details before sharing, and confirm permission.",
  },
];

const mistakes = [
  "Assuming educational intent automatically makes an action ethical or authorized.",
  "Treating public access as permission to test.",
  "Collecting more personal information than the task requires.",
  "Continuing after a stop condition appears.",
  "Publishing sensitive evidence before the owner can review it.",
  "Hiding mistakes or overstating confidence in a conclusion.",
];

const quizQuestions = [
  {
    question: "What does authorization mean in cybersecurity learning?",
    choices: [
      "Explicit permission from the responsible owner for specific actions in a defined environment.",
      "Anything that is technically possible.",
      "Any public website or service.",
      "A learner's belief that the activity is helpful.",
    ],
    answer: 0,
    explanation: "Authorization must come from the responsible owner and define what actions are allowed.",
  },
  {
    question: "What is scope?",
    choices: [
      "The approved boundaries of systems, data, tools, actions, time, and goals.",
      "Every system connected to the internet.",
      "Only the lesson title.",
      "A list of tools the learner wants to try.",
    ],
    answer: 0,
    explanation: "Scope tells the learner exactly where and how authorized work may occur.",
  },
  {
    question: "What should happen when unexpected real data appears in a fictional lab?",
    choices: [
      "Stop, preserve the source safely, and notify the instructor or owner.",
      "Continue because the lab has already started.",
      "Share the data as proof.",
      "Copy it into a personal document.",
    ],
    answer: 0,
    explanation: "Unexpected real data creates privacy and authorization risk and should trigger a stop condition.",
  },
  {
    question: "What is responsible disclosure?",
    choices: [
      "Reporting a security issue through an approved channel without exposing unnecessary details.",
      "Publishing the issue immediately on social media.",
      "Testing the issue on unrelated systems.",
      "Keeping the issue secret forever.",
    ],
    answer: 0,
    explanation: "Responsible disclosure protects users and gives the issue a safe path to review and correction.",
  },
  {
    question: "Which action best reflects professional accountability?",
    choices: [
      "Documenting actions, evidence, approvals, uncertainty, mistakes, and next steps clearly.",
      "Hiding errors to protect reputation.",
      "Claiming total confidence without enough evidence.",
      "Deleting case notes after completion.",
    ],
    answer: 0,
    explanation: "Professional accountability requires transparent, accurate, and reviewable documentation.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href="/high-school/beginner" className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Beginner Track
      </Link>
      <Link href={nextLesson} className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B15</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Previous: B15.1 Cybersecurity Foundations Review
        </Link>
        <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Back to Module
        </Link>
        <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Beginner Track
        </Link>
        <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
          Next: B15.3 Networking and Web Concepts Review
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function EthicsReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Review</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Four Questions for Ethical Cybersecurity Decisions</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Ethical cybersecurity learning protects people, systems, data, evidence, trust, and the learner's future.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {ethicsPrinciples.map((principle, index) => (
          <div key={principle.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">{index + 1}</div>
            <h3 className="mt-4 text-xl font-black text-white">{principle.title}</h3>
            <p className="mt-3 font-semibold text-cyan-100">{principle.question}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{principle.examples}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EthicsScenarioBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Ethics Review Board</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Authorized, Prohibited, or Stop-and-Ask?</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each fictional scenario must be judged using permission, scope, privacy, evidence handling, harm reduction, and accountability.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">Fake Data</span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {scenarioRows.map((row) => (
          <div key={row.activity} className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1.2fr_1.5fr]">
            <p className="font-bold text-cyan-100">{row.activity}</p>
            <p className="text-slate-300">{row.context}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.decision}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EthicsAndSafeLearningReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Beginner</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module B15</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 2 of 7</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.2 Ethics and Safe Learning Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Review authorization, scope, privacy, evidence handling, safe labs, responsible disclosure, stop conditions, accountability, and professional cybersecurity conduct.
          </p>

          <div className="mt-8"><TopNav /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B15: Beginner Capstone Review"
          lessonTitle="Ethics and Safe Learning Review"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that good intentions do not replace authorization.",
            "I can explain why scope, privacy, evidence handling, and stop conditions matter.",
            "I will use only fictional, simulated, sandboxed, or otherwise explicitly approved examples.",
          ]}
        />

        <SectionCard eyebrow="Capstone Hook" title="The Strongest Cybersecurity Skill Is Knowing When Not to Act">
          <p className="leading-8">
            Technical ability without judgment can create harm. Ethical defenders confirm permission, stay within scope, protect privacy, preserve evidence, reduce disruption, report responsibly, and stop when the situation becomes unclear.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Review rule:</span> if permission or scope is unclear, stop and ask. Uncertainty is never authorization.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain authorization, scope, privacy, stop conditions, responsible disclosure, and evidence handling.",
            "Classify fictional activities as authorized, prohibited, uncertain, or requiring escalation.",
            "Build a safe learning plan that protects people, systems, data, evidence, and trust.",
          ].map((objective) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Learning Objective</p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Ethics Protects More Than Systems">
          <p className="leading-8">
            Safe cybersecurity learning protects privacy, reputation, relationships, legal responsibilities, evidence integrity, and future opportunities. Professional trust depends on consistent judgment, not just technical results.
          </p>
        </SectionCard>

        <EthicsReviewBoard />

        <SectionCard eyebrow="Core Concept" title="Authorization, Scope, and Harm Reduction Must Work Together">
          <p className="leading-8">
            Permission identifies who approved the activity. Scope defines what is allowed. Harm reduction guides how the activity is performed. Privacy, evidence handling, and stop conditions protect everyone involved.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Ethics and Safe Learning Review Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <EthicsScenarioBoard />

        <FakeDashboardCard
          title="Fake Safe Learning Dashboard"
          subtitle="Training dashboard using fictional lab approvals, scope records, privacy reviews, evidence rules, stop conditions, and disclosure cases."
          metrics={[
            {
              label: "Activities reviewed",
              value: "28",
              note: "Fictional sandbox tasks, evidence reviews, portfolio artifacts, reports, and disclosure scenarios.",
            },
            {
              label: "Stop conditions triggered",
              value: "6",
              note: "Unexpected real data, unclear scope, instability, missing permission, and privacy risk.",
            },
            {
              label: "Responsible reports completed",
              value: "11",
              note: "Issues documented and sent through approved owner or disclosure channels.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Real Student Data Appears in Training File"
          severity="High"
          time="12:14 PM"
          source="Fake Privacy and Scope Monitor"
          details="A fictional lab package contains one screenshot with a real-looking student name, email address, and message preview that were not included in the approved data set."
          recommendation="Stop the activity, preserve the source without sharing it, notify the instructor or owner, and wait for a sanitized replacement."
        />

        <FakeLogPanel
          title="Fake Ethics Review Log"
          logs={[
            "11:42:03 AUTH owner='training_instructor' status='approved'",
            "11:45:27 SCOPE environment='fictional_sandbox' action='read_only'",
            "11:49:14 PRIVACY data_set='invented_users_only'",
            "11:53:08 EVIDENCE originals='preserve' sharing='restricted'",
            "12:02:31 EVENT unexpected_real_data='detected'",
            "12:05:47 STOP_CONDITION activity='paused' notification='sent'",
            "12:14:22 DECISION replacement='sanitized_copy_required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Learning Activity Authorized?"
          evidence={[
            "A fictional instructor authorizes read-only review of a sandbox dashboard.",
            "The learner notices a real public login page in another browser tab.",
            "The scope allows only the named sandbox and provided logs.",
            "No scanning, testing, or interaction with real services is permitted.",
          ]}
          question="What is the strongest decision?"
          options={[
            "Work only inside the named sandbox and do not interact with the real public login page.",
            "Test the public page because it is visible.",
            "Try common passwords against the page.",
            "Scan the domain for more systems.",
          ]}
          bestAnswer={0}
          explanation="Only the named sandbox and provided evidence are authorized. Public visibility does not create permission."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Break Safe Learning">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Capstone Lab" title="Review a Fictional Cybersecurity Learning Plan">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fake Learning Plan</p>
              <h3 className="mt-3 text-xl font-black text-white">Community Learning Portal Security Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                A fictional student is asked to review invented accounts, logs, alerts, and screenshots in an isolated environment and produce a redacted defensive report.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Review Steps</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Confirm the approving owner and exact learning goal.</li>
                <li>List approved systems, data, tools, actions, and time limits.</li>
                <li>Identify privacy, evidence, and sharing requirements.</li>
                <li>Define prohibited actions and stop conditions.</li>
                <li>Choose the approved reporting or disclosure path.</li>
                <li>Document mistakes, uncertainty, and final decisions honestly.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Learner Finds a Possible Weakness in an Approved Sandbox"
          scenario="A fictional learner notices that one sandbox account has broader access than expected."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the evidence, avoid expanding access, document only what is necessary, and report through the approved owner or instructor.",
              outcome: "Best ethical choice. The learner stays in scope and reports responsibly.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Use the extra access to explore every connected system.",
              outcome: "Risky. Discovering a weakness does not expand the approved scope.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Post screenshots publicly before notifying the owner.",
              outcome: "Unsafe. Unnecessary disclosure can expose users and systems.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Portfolio Screenshot Contains Sensitive Details"
          scenario="A fictional student wants to publish a screenshot that includes usernames, internal ticket numbers, and configuration details."
          choices={[
            {
              label: "Choice A",
              response: "Use a fictional recreation or redact sensitive details, confirm permission, and explain the project without exposing private information.",
              outcome: "Best portfolio choice. The artifact demonstrates skill while protecting privacy and trust.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Publish the original screenshot because the project is educational.",
              outcome: "Risky. Educational purpose does not remove privacy obligations.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Include passwords to prove the access was real.",
              outcome: "Unsafe. Credentials must never be exposed.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Ethics and Safe Learning Review Checklist"
          items={[
            "I confirm authorization before acting.",
            "I stay within the approved systems, data, tools, actions, and time window.",
            "I minimize harm and use fictional, simulated, isolated, or read-only practice.",
            "I protect privacy and collect only what the task requires.",
            "I preserve evidence and share it only through approved channels.",
            "I stop for real data, unclear permission, instability, or unexpected systems.",
            "I document actions, mistakes, uncertainty, approvals, and next steps honestly.",
          ]}
        />

        <MiniQuiz title="B15.2 Mini Quiz: Ethics and Safe Learning Review" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional safe-learning plan. Include the owner, purpose, approved environment, systems, accounts, data, tools, actions, prohibited actions, privacy rules, evidence rules, stop conditions, disclosure path, redaction plan, and final reflection."
          tips={[
            "Use fictional organizations, users, systems, data, screenshots, and evidence only.",
            "Explain how authorization, scope, privacy, and harm reduction work together.",
            "Include one example of when the learner must stop and ask for guidance.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Good intentions do not replace explicit authorization.",
            "Scope defines the systems, data, tools, actions, time, and goals that are approved.",
            "Privacy and evidence handling protect people, organizations, and trust.",
            "Responsible disclosure uses approved channels and avoids unnecessary exposure.",
            "Professional learners stop when permission, scope, safety, or privacy becomes unclear.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}