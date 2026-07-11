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
  "/high-school/beginner/cybersecurity-careers-and-certifications/module-test";
const nextLesson =
  `${modulePath}/identity-and-access-review-lab`;

const vocab = [
  [
    "Authorization",
    "Clear permission from the responsible owner to perform specific actions in a defined environment.",
  ],
  [
    "Scope",
    "The approved boundaries of a lab, including systems, accounts, data, tools, actions, time, and goals.",
  ],
  [
    "Out of scope",
    "Anything not explicitly approved for the lab, even if it is technically reachable or visible.",
  ],
  [
    "Stop condition",
    "A rule requiring the learner to pause or end activity when unexpected risk, real data, instability, or uncertainty appears.",
  ],
  [
    "Evidence preservation",
    "Protecting logs, screenshots, timestamps, tickets, and other records from accidental change or loss.",
  ],
  [
    "Isolated environment",
    "A fictional, simulated, sandboxed, or otherwise separated environment designed for safe practice.",
  ],
];

const safetyStages = [
  {
    title: "Confirm permission",
    example:
      "Identify who approved the lab, which environment is authorized, and what evidence proves permission.",
  },
  {
    title: "Read the scope",
    example:
      "Review approved systems, accounts, data, tools, actions, time limits, and prohibited activity.",
  },
  {
    title: "Protect evidence",
    example:
      "Use copies, notes, screenshots, logs, and timestamps without altering the original source.",
  },
  {
    title: "Stop when required",
    example:
      "Pause immediately when real data, unexpected systems, instability, or unclear authorization appears.",
  },
];

const scopeRows = [
  {
    item: "Fictional identity dashboard",
    source: "Approved training tenant with invented users and accounts",
    review:
      "Inside scope because the environment and data are explicitly authorized.",
  },
  {
    item: "School production login page",
    source: "Real public service visible from the browser",
    review:
      "Out of scope because visibility does not equal permission to test.",
  },
  {
    item: "Provided log file",
    source: "Downloaded from the lab package for read-only analysis",
    review:
      "Inside scope if the learner preserves the original and analyzes a copy.",
  },
  {
    item: "Personal email account",
    source: "Real account belonging to the learner",
    review:
      "Out of scope unless the lab specifically authorizes that account and activity.",
  },
  {
    item: "Unexpected real name in a screenshot",
    source: "Private data appears in an otherwise fictional lab",
    review:
      "Triggers a stop condition, privacy review, and instructor escalation.",
  },
];

const mistakes = [
  "Assuming a public website is automatically authorized for testing.",
  "Continuing after real personal data appears unexpectedly.",
  "Using tools or actions not listed in the approved lab brief.",
  "Changing or deleting original logs before analysis is complete.",
  "Ignoring time limits, stop conditions, or instructor instructions.",
  "Sharing screenshots that contain credentials, private data, or confidential system details.",
];

const quizQuestions = [
  {
    question: "What does authorization mean in a defensive lab?",
    choices: [
      "Clear permission from the responsible owner for specific actions in a defined environment.",
      "Any system visible on the internet.",
      "Permission to do anything after opening a browser.",
      "A suggestion rather than a requirement.",
    ],
    answer: 0,
    explanation:
      "Authorization must come from the responsible owner and must define what actions are permitted.",
  },
  {
    question: "What is scope?",
    choices: [
      "The approved boundaries of systems, data, tools, actions, time, and goals.",
      "Every device connected to the internet.",
      "Only the title of the lab.",
      "A list of guesses about what might be allowed.",
    ],
    answer: 0,
    explanation:
      "Scope defines exactly where and how defensive practice may occur.",
  },
  {
    question: "What should happen when unexpected real data appears?",
    choices: [
      "Stop, preserve the evidence safely, and notify the instructor or owner.",
      "Continue because the lab already started.",
      "Publish the data as proof.",
      "Copy the data into a personal document.",
    ],
    answer: 0,
    explanation:
      "Unexpected real data is a stop condition because it may create privacy or authorization risk.",
  },
  {
    question: "Why should original evidence be preserved?",
    choices: [
      "So the source remains unchanged and later review stays trustworthy.",
      "So it can be deleted after one screenshot.",
      "So the learner can edit it freely.",
      "So documentation is unnecessary.",
    ],
    answer: 0,
    explanation:
      "Preserving originals protects integrity and supports accurate review.",
  },
  {
    question: "Which statement is strongest?",
    choices: [
      "If an action is not clearly authorized and in scope, do not perform it.",
      "If a system responds, testing is allowed.",
      "If the learner is curious, scope can be ignored.",
      "If no one notices, the action is safe.",
    ],
    answer: 0,
    explanation:
      "Defensive practice must stay within explicit authorization and scope.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B14</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B13 Module Test
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
          Next: B14.2 Identity and Access Review Lab
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

function SafetyFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Defensive-Lab Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Every lab begins with permission and scope before any evidence is
        reviewed or action is taken.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {safetyStages.map((stage, index) => (
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
        <span className="font-bold">Safety rule:</span> if permission or scope is
        unclear, stop and ask. Uncertainty is never permission.
      </div>
    </section>
  );
}

function FakeScopePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Scope Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            In-Scope and Out-of-Scope Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares approved systems, evidence sources,
            prohibited targets, and stop conditions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {scopeRows.map((row) => (
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

function ScopeDecisionBoard() {
  const areas = [
    {
      name: "Environment",
      saferQuestion:
        "Is the system fictional, simulated, sandboxed, or otherwise explicitly approved?",
      saferChoice:
        "Work only inside the named training environment and approved account set.",
    },
    {
      name: "Actions",
      saferQuestion:
        "Which viewing, analysis, configuration, containment, or reporting actions are allowed?",
      saferChoice:
        "Perform only the actions listed in the lab brief or approved by the instructor.",
    },
    {
      name: "Evidence",
      saferQuestion:
        "How should logs, screenshots, notes, tickets, and files be preserved?",
      saferChoice:
        "Keep originals unchanged, analyze copies, record timestamps, and store evidence safely.",
    },
    {
      name: "Stop conditions",
      saferQuestion:
        "What events require the learner to pause and notify the instructor?",
      saferChoice:
        "Stop for real data, unexpected systems, instability, missing permission, or unclear scope.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Lab Planning
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Scope and Authorization Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Safe practice depends on clear boundaries before the lab begins.
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
                Safe action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LabSafetyScopeAuthorizationPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.1 Lab Safety, Scope, and Authorization
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how defensive labs use written authorization, approved scope,
            fictional data, isolated environments, evidence preservation,
            privacy controls, and clear stop conditions.
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
          lessonTitle="Lab Safety, Scope, and Authorization"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that defensive practice requires explicit authorization and approved scope.",
            "I will use only fictional, simulated, sandboxed, or otherwise authorized systems and data.",
            "I will stop when real data, unexpected systems, instability, or unclear permission appears.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The First Defensive Skill Is Knowing Where You Are Allowed to Work"
        >
          <p className="leading-8">
            A technically correct action can still be unsafe or unauthorized if
            it occurs outside the approved environment. Professional defenders
            confirm permission, scope, evidence rules, privacy requirements, and
            stop conditions before beginning.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> every system,
            account, message, file, log, and organization in this lesson is
            fictional. Do not test real school, business, family, or public
            systems.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain authorization, scope, out-of-scope activity, stop conditions, isolation, and evidence preservation.",
            "Classify fictional systems, data, actions, and tools as approved, prohibited, or uncertain.",
            "Build a safe lab brief with clear boundaries, owners, evidence rules, and escalation steps.",
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
          title="Defensive Intent Does Not Replace Permission"
        >
          <p className="leading-8">
            Curiosity, educational purpose, or good intentions do not create
            authorization. Safe learning protects people, systems, evidence,
            privacy, and trust by staying within clearly approved boundaries.
          </p>
        </SectionCard>

        <SafetyFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Scope Must Be Specific Enough to Guide Every Action"
        >
          <p className="leading-8">
            A strong lab brief identifies the environment, accounts, data,
            allowed tools, permitted actions, prohibited actions, time window,
            evidence handling, privacy rules, owners, escalation contacts, and
            stop conditions.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Safe Defensive Practice
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

        <ScopeDecisionBoard />
        <FakeScopePanel />

        <FakeDashboardCard
          title="Fake Defensive Lab Authorization Dashboard"
          subtitle="Training dashboard using fictional systems, accounts, data, tools, approvals, evidence rules, and stop conditions."
          metrics={[
            {
              label: "Approved systems",
              value: "4",
              note: "Fictional identity, email, endpoint, and backup training environments.",
            },
            {
              label: "Permitted actions",
              value: "9",
              note: "Read-only review, note-taking, classification, documentation, and approved simulated response.",
            },
            {
              label: "Stop conditions",
              value: "6",
              note: "Real data, unexpected systems, instability, missing permission, scope conflict, or evidence risk.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Real Personal Data Appears in Training Screenshot"
          severity="High"
          time="10:18 AM"
          source="Fake Lab Privacy Monitor"
          details="A fictional lab package contains one screenshot with a real-looking name, email address, device identifier, and message preview that were not listed in the approved data set."
          recommendation="Stop the lab, preserve the file without sharing it, notify the instructor or owner, and wait for a sanitized replacement."
        />

        <FakeLogPanel
          title="Fake Lab Authorization Log"
          logs={[
            "09:00:00 AUTH owner='training_instructor' status='approved'",
            "09:03:12 SCOPE systems='identity,email,endpoint,backup_sandbox'",
            "09:05:44 ACTIONS allowed='read_only,notes,classification,simulated_response'",
            "09:07:19 PROHIBITED scanning='true' credential_testing='true'",
            "09:09:31 EVIDENCE originals='preserve' analysis='copy_only'",
            "09:12:08 STOP_CONDITION real_data='true' instability='true'",
            "10:18:26 EVENT unexpected_personal_data='detected' lab='paused'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Action Authorized?"
          evidence={[
            "The fictional lab brief lists one sandbox identity dashboard as approved.",
            "A public school login page is visible in another browser tab.",
            "The brief allows read-only analysis of provided logs.",
            "No scanning, password testing, or interaction with real services is authorized.",
          ]}
          question="What is the strongest action?"
          options={[
            "Analyze only the provided logs and sandbox dashboard, and avoid interacting with the real school login page.",
            "Test the public school page because it is visible.",
            "Try common passwords against the real page.",
            "Scan the school domain for additional systems.",
          ]}
          bestAnswer={0}
          explanation="Only the named sandbox and provided logs are authorized. Public visibility does not create permission."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Break Lab Safety"
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
          title="Review a Fictional Defensive Lab Brief"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Lab Brief
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Sandbox
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional lab includes an identity dashboard, email queue,
                endpoint alerts, network summaries, backup reports, and a set of
                invented users and devices.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Lab Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the approving owner and time window.</li>
                <li>List approved systems, accounts, tools, actions, and data.</li>
                <li>List prohibited systems, actions, and information.</li>
                <li>Record evidence-preservation and privacy rules.</li>
                <li>Define stop conditions and escalation contacts.</li>
                <li>Confirm how completion and documentation will be reviewed.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Real Website Appears During a Fictional Lab"
          scenario="A fictional learner notices that a provided link redirects to a real public service not listed in the lab brief."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop, do not interact with the real service, preserve the redirect information, and notify the instructor.",
              outcome:
                "Best lab choice. The real service is outside the approved scope.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Continue because the redirect happened automatically.",
              outcome:
                "Risky. Unexpected access does not create authorization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Test the real service to see whether it is secure.",
              outcome:
                "Unsafe and unauthorized. Testing requires explicit permission.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Provided Log File Changes During Analysis"
          scenario="A fictional learner opens the original log in an editor and accidentally changes one line."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop editing, preserve the altered copy separately, restore the original from the lab package, and document what happened.",
              outcome:
                "Best evidence choice. Transparency and preservation protect the review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Hide the change and continue.",
              outcome:
                "Risky. Undocumented evidence changes reduce trust.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all copies of the log.",
              outcome:
                "Unsafe. Evidence should be preserved and the mistake documented.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Lab Safety, Scope, and Authorization Checklist"
          items={[
            "I confirm explicit authorization before beginning.",
            "I identify approved systems, accounts, data, tools, actions, and time limits.",
            "I treat anything not clearly approved as out of scope.",
            "I preserve original evidence and analyze copies when possible.",
            "I protect privacy and avoid sharing sensitive information.",
            "I stop for real data, unexpected systems, instability, or unclear permission.",
            "I document decisions, mistakes, evidence handling, and escalation.",
          ]}
        />

        <MiniQuiz
          title="B14.1 Mini Quiz: Lab Safety, Scope, and Authorization"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional defensive lab authorization brief. Include the owner, purpose, approved environment, systems, accounts, data, tools, actions, prohibited activity, time window, evidence rules, privacy requirements, stop conditions, escalation contacts, and completion criteria."
          tips={[
            "Use fictional organizations, users, systems, accounts, logs, and evidence only.",
            "Do not include real credentials, private records, public targets, or live system details.",
            "Make the boundaries specific enough that another learner could follow them safely.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Defensive intent does not replace explicit authorization.",
            "Scope defines the approved environment, systems, data, tools, actions, time, and goals.",
            "Anything not clearly approved should be treated as out of scope.",
            "Original evidence should be preserved and analyzed safely.",
            "Real data, unexpected systems, instability, or unclear permission should trigger an immediate stop.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}