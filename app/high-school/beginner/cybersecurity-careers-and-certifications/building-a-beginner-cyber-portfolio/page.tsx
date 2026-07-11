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
  `${modulePath}/certifications-and-learning-paths`;
const nextLesson =
  `${modulePath}/career-planning-lab`;

const vocab = [
  [
    "Portfolio",
    "A curated collection of projects, reports, diagrams, reflections, presentations, and other evidence of learning.",
  ],
  [
    "Artifact",
    "A specific item in a portfolio, such as a report, diagram, checklist, project page, lab reflection, or presentation.",
  ],
  [
    "Reflection",
    "A clear explanation of what was attempted, what worked, what was difficult, what changed, and what should happen next.",
  ],
  [
    "Evidence",
    "Information that supports a claim about knowledge, skill, effort, improvement, or project results.",
  ],
  [
    "Scope",
    "The approved boundaries of a project, including systems, data, goals, tools, methods, and limitations.",
  ],
  [
    "Redaction",
    "The removal or masking of private, sensitive, confidential, or unnecessary information before sharing an artifact.",
  ],
];

const portfolioStages = [
  {
    title: "Select the work",
    example:
      "Choose safe projects that represent different skills, responsibilities, and learning goals.",
  },
  {
    title: "Explain the process",
    example:
      "Describe the goal, scope, decisions, methods, evidence, obstacles, and ethical boundaries.",
  },
  {
    title: "Show the outcome",
    example:
      "Present the final artifact, what it demonstrates, what remains limited, and how success was measured.",
  },
  {
    title: "Reflect and improve",
    example:
      "Explain lessons learned, feedback received, corrections made, and the next improvement step.",
  },
];

const portfolioRows = [
  {
    item: "Defensive case report",
    source: "Fictional alert timeline, evidence, triage decision, and escalation summary",
    review:
      "Shows analysis, documentation, prioritization, and professional communication.",
  },
  {
    item: "Secure-system diagram",
    source: "Fictional users, data flows, trust boundaries, risks, and layered controls",
    review:
      "Shows architecture thinking, risk awareness, and control selection.",
  },
  {
    item: "GRC risk review",
    source: "Fictional risk statement, controls, evidence, treatment, owner, and review date",
    review:
      "Shows business reasoning, governance, evidence review, and accountability.",
  },
  {
    item: "Awareness presentation",
    source: "A lesson, poster, workshop, or campaign for a defined audience",
    review:
      "Shows communication, audience awareness, teaching, and behavior-focused security.",
  },
  {
    item: "Learning reflection",
    source: "A structured explanation of progress, mistakes, feedback, and next steps",
    review:
      "Shows honesty, self-assessment, growth, and professional maturity.",
  },
];

const mistakes = [
  "Uploading screenshots that contain real names, emails, account numbers, addresses, or credentials.",
  "Listing tools without explaining the problem, process, evidence, or outcome.",
  "Claiming professional-level expertise from one beginner project.",
  "Including unauthorized scans, attack attempts, copied work, or confidential employer data.",
  "Publishing an artifact without checking spelling, structure, accessibility, and redaction.",
  "Showing only successful results and hiding mistakes, limitations, feedback, or lessons learned.",
];

const quizQuestions = [
  {
    question: "What makes a portfolio artifact strong?",
    choices: [
      "Clear scope, process, evidence, outcome, ethics, reflection, and next steps.",
      "A long list of tools with no explanation.",
      "Private screenshots from real systems.",
      "Claims that cannot be verified.",
    ],
    answer: 0,
    explanation:
      "Strong artifacts explain what was done, why it was done, what evidence supports the result, and what was learned.",
  },
  {
    question: "Why is redaction important?",
    choices: [
      "It removes or masks private, sensitive, confidential, or unnecessary information.",
      "It makes copying acceptable.",
      "It replaces permission.",
      "It proves every project is advanced.",
    ],
    answer: 0,
    explanation:
      "Redaction helps protect people and organizations when sharing otherwise appropriate artifacts.",
  },
  {
    question: "What should a reflection include?",
    choices: [
      "What worked, what was difficult, what changed, what was learned, and what should happen next.",
      "Only praise.",
      "Only the project title.",
      "A copied answer key.",
    ],
    answer: 0,
    explanation:
      "Reflection shows self-awareness, learning, correction, and professional growth.",
  },
  {
    question: "Which artifact is safe for a beginner portfolio?",
    choices: [
      "A fictional defensive case report using invented users, devices, logs, and evidence.",
      "A screenshot of a real private account.",
      "An unauthorized scan of a school network.",
      "A copied report presented as original work.",
    ],
    answer: 0,
    explanation:
      "Fictional, authorized, clearly explained work is appropriate for a beginner portfolio.",
  },
  {
    question: "What should a student do before publishing a portfolio item?",
    choices: [
      "Review permission, scope, privacy, redaction, accuracy, originality, accessibility, and professional quality.",
      "Post it immediately.",
      "Add real passwords to prove the project is authentic.",
      "Remove all limitations and mistakes.",
    ],
    answer: 0,
    explanation:
      "A final review protects privacy, improves quality, and ensures the artifact is honest and safe to share.",
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
          Previous: B13.5 Certifications and Learning Paths
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
          Next: B13.7 Career Planning Lab
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

function PortfolioFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Beginner Portfolio Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong portfolios explain the work clearly instead of simply displaying
        a finished file.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {portfolioStages.map((stage, index) => (
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
        <span className="font-bold">Portfolio rule:</span> quality, honesty,
        safety, and explanation matter more than the number of projects.
      </div>
    </section>
  );
}

function FakePortfolioPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Portfolio Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Artifact Quality Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares portfolio artifacts by skill evidence,
            explanation quality, safety, and professional value.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {portfolioRows.map((row) => (
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

function PortfolioDecisionBoard() {
  const areas = [
    {
      name: "Purpose",
      saferQuestion:
        "What skill, responsibility, decision, or learning outcome does this artifact demonstrate?",
      saferChoice:
        "Write a clear summary connecting the artifact to a specific capability.",
    },
    {
      name: "Safety",
      saferQuestion:
        "Does the artifact contain private data, credentials, confidential details, or unauthorized activity?",
      saferChoice:
        "Use fictional data, confirm permission, redact sensitive details, and remove unsafe content.",
    },
    {
      name: "Evidence",
      saferQuestion:
        "What result, diagram, test, decision record, feedback, or reflection supports the claim?",
      saferChoice:
        "Include enough evidence to make the learning visible without exaggeration.",
    },
    {
      name: "Professional quality",
      saferQuestion:
        "Is the artifact accurate, organized, readable, accessible, original, and honest about limitations?",
      saferChoice:
        "Revise structure, wording, labels, citations, accessibility, and reflection before publishing.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Portfolio Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Artifact Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Each artifact should have a clear purpose, safe content, visible
        evidence, and professional presentation.
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
                Strong portfolio action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BuildingBeginnerCyberPortfolioPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.6 Building a Beginner Cyber Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to document safe cybersecurity projects with clear scope,
            evidence, reflection, ethical boundaries, redaction, accessibility,
            and professional presentation.
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
          lessonTitle="Building a Beginner Cyber Portfolio"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a portfolio should show honest evidence of learning rather than exaggerated claims.",
            "I will use fictional data, authorized projects, safe screenshots, and redacted examples only.",
            "I am ready to explain goals, scope, process, evidence, outcomes, limitations, and next steps.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Finished File Is Not the Same as a Strong Portfolio Artifact"
        >
          <p className="leading-8">
            A reviewer should be able to understand what problem you addressed,
            what boundaries you followed, what decisions you made, what evidence
            supports the result, what you learned, and what you would improve.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never publish
            real credentials, private student data, employer records,
            confidential screenshots, unauthorized scans, or harmful code.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain what makes a cybersecurity portfolio artifact clear, safe, honest, and useful.",
            "Organize fictional projects with scope, process, evidence, outcomes, reflection, and next steps.",
            "Review portfolio items for privacy, redaction, originality, accessibility, and professional quality.",
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
          title="Employers and Educators Need Context, Not Just Claims"
        >
          <p className="leading-8">
            A portfolio can show how a student thinks, communicates, solves
            problems, handles feedback, follows ethical boundaries, and improves
            over time. It is strongest when each claim is supported by a clear
            and safe artifact.
          </p>
        </SectionCard>

        <PortfolioFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Every Artifact Should Tell a Complete Learning Story"
        >
          <p className="leading-8">
            A strong artifact includes the goal, audience, scope, tools, process,
            evidence, result, limitations, reflection, feedback, and next step.
            It should also explain what the student personally contributed.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Portfolio Building
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

        <PortfolioDecisionBoard />
        <FakePortfolioPanel />

        <FakeDashboardCard
          title="Fake Beginner Portfolio Dashboard"
          subtitle="Training dashboard using fictional artifacts, project summaries, evidence, reflection notes, privacy reviews, and revision status."
          metrics={[
            {
              label: "Portfolio artifacts",
              value: "8",
              note: "Case reports, diagrams, risk reviews, presentations, checklists, and reflections.",
            },
            {
              label: "Artifacts fully documented",
              value: "6",
              note: "Goal, scope, process, evidence, result, reflection, and next step are complete.",
            },
            {
              label: "Privacy reviews pending",
              value: "2",
              note: "Screenshots and logs require fictional replacement or additional redaction.",
            },
          ]}
        />

        <FakeAlertCard
          title="Portfolio Screenshot Contains Real Personal Information"
          severity="High"
          time="7:05 PM"
          source="Fake Portfolio Privacy Review"
          details="A fictional student project includes a screenshot showing a real email address, account name, device identifier, and private message preview."
          recommendation="Remove the image, replace it with fictional data, confirm permission and scope, redact unnecessary details, and repeat the privacy review before publishing."
        />

        <FakeLogPanel
          title="Fake Portfolio Revision Log"
          logs={[
            "18:12:04 ARTIFACT type='soc_case_report' scope='fictional'",
            "18:19:22 REVIEW privacy='pass' credentials='none' authorization='documented'",
            "18:28:37 EVIDENCE timeline='included' decision_notes='included'",
            "18:36:51 REFLECTION mistakes='2' feedback='teacher_review'",
            "18:44:09 REVISION clarity='improved' accessibility='headings_added'",
            "18:53:24 ARTIFACT type='architecture_diagram' privacy='pending'",
            "19:05:42 ACTION replace_screenshot='required' publish='blocked'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Artifact Ready to Publish?"
          evidence={[
            "A fictional security case report clearly explains the goal, scope, timeline, evidence, and final decision.",
            "The student describes two mistakes and how feedback improved the report.",
            "One screenshot still displays a real email address and device name.",
            "The report includes no passwords or harmful instructions.",
          ]}
          question="What is the strongest next step?"
          options={[
            "Replace or redact the screenshot, repeat the privacy review, and publish only after the artifact is fully safe and accurate.",
            "Publish immediately because most of the report is strong.",
            "Add more real account details to prove authenticity.",
            "Delete the reflection so the mistakes are hidden.",
          ]}
          bestAnswer={0}
          explanation="The artifact is well documented, but the real personal information must be removed before sharing."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cyber Portfolios"
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
          title="Organize a Fictional Beginner Cyber Portfolio"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Portfolio
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Six-Artifact Starter Collection
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student has a SOC case report, secure-system
                diagram, GRC risk review, awareness presentation, backup
                checklist, and twelve-week learning reflection.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Portfolio Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Write a purpose statement for each artifact.</li>
                <li>Confirm authorization, scope, originality, and fictional data.</li>
                <li>Add process, evidence, outcomes, limitations, and reflection.</li>
                <li>Remove or redact sensitive and unnecessary information.</li>
                <li>Check structure, spelling, labels, accessibility, and citations.</li>
                <li>Choose the strongest artifacts and explain the overall growth story.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Student Wants to Upload a Real Security Screenshot"
          scenario="A fictional student has a screenshot from a real school system that displays names, email addresses, device details, and private messages."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not publish it. Replace it with a fictional recreation or an authorized, fully redacted training example.",
              outcome:
                "Best portfolio choice. Privacy, permission, and safety come before authenticity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Publish it because the project will look more realistic.",
              outcome:
                "Risky. Real private information and system details should not be exposed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Add login information so reviewers can verify the system.",
              outcome:
                "Unsafe. Credentials must never be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Portfolio Lists Tools but Explains No Learning"
          scenario="A fictional project page lists ten security tools but does not explain the goal, scope, process, evidence, result, limitations, or student contribution."
          choices={[
            {
              label: "Choice A",
              response:
                "Rewrite the artifact around the problem, decisions, evidence, outcome, reflection, and next step.",
              outcome:
                "Best portfolio choice. Explanation makes the skill evidence meaningful.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Add five more tool names.",
              outcome:
                "Risky. A longer list still does not show understanding.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Claim expert-level skill in every listed tool.",
              outcome:
                "Unsafe and dishonest. Skill claims must be accurate and supported.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Beginner Cyber Portfolio Checklist"
          items={[
            "I choose artifacts that demonstrate different skills and responsibilities.",
            "I explain the goal, audience, scope, process, evidence, outcome, and limitations.",
            "I identify my personal contribution honestly.",
            "I use fictional or authorized data and redact sensitive information.",
            "I include reflection, feedback, mistakes, revisions, and next steps.",
            "I review spelling, structure, accessibility, originality, and citations.",
            "I never include credentials, private records, unauthorized activity, or confidential system details.",
          ]}
        />

        <MiniQuiz
          title="B13.6 Mini Quiz: Building a Beginner Cyber Portfolio"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional portfolio homepage for a beginner cybersecurity student. Include a professional introduction, six artifact summaries, the skill demonstrated by each artifact, ethical boundaries, reflection highlights, current learning goals, and a privacy-review checklist."
          tips={[
            "Use fictional projects, users, systems, evidence, screenshots, and progress data only.",
            "Do not include real credentials, private records, school-system details, or confidential information.",
            "Keep every skill claim specific, honest, and supported by an artifact.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A strong portfolio explains the goal, scope, process, evidence, result, reflection, and next step.",
            "Quality and honesty matter more than the number of projects.",
            "Fictional data, authorization, redaction, privacy review, and ethical boundaries protect people and organizations.",
            "Mistakes, feedback, revisions, and limitations can strengthen an artifact when explained professionally.",
            "Every skill claim should be supported by clear and safe evidence.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}