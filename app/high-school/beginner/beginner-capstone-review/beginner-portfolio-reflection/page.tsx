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
const previousLesson = `${modulePath}/threats-and-defenses-review`;
const nextLesson = `${modulePath}/beginner-final-readiness-lab`;

const vocabulary = [
  [
    "Portfolio artifact",
    "A project, report, reflection, diagram, checklist, presentation, or other work sample that demonstrates learning.",
  ],
  [
    "Evidence of learning",
    "Specific work, decisions, explanations, revisions, or results that support a claim about a skill.",
  ],
  [
    "Reflection",
    "A structured explanation of what was learned, what changed, what remains difficult, and what should happen next.",
  ],
  [
    "Redaction",
    "Removing or replacing sensitive, private, identifying, or unnecessary details before sharing an artifact.",
  ],
  [
    "Revision",
    "Improving an artifact after feedback, self-review, testing, or new understanding.",
  ],
  [
    "Skill claim",
    "A clear statement about what the learner can explain, apply, analyze, create, or improve.",
  ],
];

const reflectionStages = [
  {
    title: "Select",
    question: "Which artifacts best show important Beginner Track skills?",
    examples:
      "Risk maps, phishing triage reports, account plans, browser reviews, defensive labs, diagrams, and reflections.",
  },
  {
    title: "Explain",
    question: "What skill does each artifact demonstrate, and what evidence supports that claim?",
    examples:
      "Reasoning, decisions, diagrams, checklists, quiz improvement, revisions, and documented outcomes.",
  },
  {
    title: "Protect",
    question: "Has sensitive information been removed, replaced, or recreated safely?",
    examples:
      "Fictional users, redacted screenshots, sanitized logs, invented domains, and no credentials or private data.",
  },
  {
    title: "Improve",
    question: "What should be revised before the artifact is presented to a teacher, school, or future program?",
    examples:
      "Clearer labels, stronger explanations, better structure, accurate claims, citations, and visual consistency.",
  },
];

const artifactRows = [
  {
    artifact: "Fictional phishing triage report",
    evidence:
      "Shows sender review, URL analysis, preservation, reporting, and a safe user decision",
    improvement:
      "Add a clearer timeline and separate confirmed facts from assumptions.",
  },
  {
    artifact: "Account protection plan",
    evidence:
      "Connects unique credentials, password-manager use, MFA, recovery, privacy, and backups",
    improvement:
      "Add ownership, review dates, and a stronger explanation of account recovery risk.",
  },
  {
    artifact: "Network and web diagram",
    evidence:
      "Explains devices, DNS, IP addresses, routers, services, protocols, HTTPS, and browser evidence",
    improvement:
      "Label the security checks at each step and explain what HTTPS does not guarantee.",
  },
  {
    artifact: "Defensive practice lab",
    evidence:
      "Shows authorization, scope, evidence handling, prioritization, containment, escalation, and documentation",
    improvement:
      "Add a short reflection on uncertainty and why the chosen response was proportionate.",
  },
  {
    artifact: "Career pathway map",
    evidence:
      "Connects interests, role families, skills, certifications, projects, and next steps",
    improvement:
      "Replace broad claims with specific evidence and a realistic learning timeline.",
  },
];

const mistakes = [
  "Listing completed pages without explaining what skills they demonstrate.",
  "Claiming advanced expertise when the evidence shows beginner-level understanding.",
  "Sharing screenshots that contain real names, emails, ticket numbers, or internal details.",
  "Using vague reflections such as 'I learned a lot' without specific evidence.",
  "Ignoring feedback and submitting the first version as the final artifact.",
  "Including every project instead of selecting the strongest and most relevant examples.",
];

const quizQuestions = [
  {
    question: "What makes a strong portfolio artifact?",
    choices: [
      "It clearly demonstrates a skill through specific evidence and explanation.",
      "It is the longest file in the folder.",
      "It contains private information.",
      "It uses the most technical words possible.",
    ],
    answer: 0,
    explanation:
      "A strong artifact connects a clear skill claim with understandable evidence.",
  },
  {
    question: "Why is redaction important?",
    choices: [
      "It protects sensitive, private, identifying, and unnecessary information before sharing.",
      "It makes every artifact shorter.",
      "It removes the need for permission.",
      "It hides all learning evidence.",
    ],
    answer: 0,
    explanation:
      "Redaction allows the learner to demonstrate skill without exposing information that should remain protected.",
  },
  {
    question: "What should a reflection include?",
    choices: [
      "What was learned, what evidence shows it, what was difficult, what changed, and what comes next.",
      "Only the assignment title.",
      "Only a final score.",
      "Only positive statements.",
    ],
    answer: 0,
    explanation:
      "Reflection should be specific, honest, evidence-based, and focused on growth.",
  },
  {
    question: "Which skill claim is strongest?",
    choices: [
      "I can analyze a fictional phishing report by reviewing sender, URL, urgency, request, evidence, and safe next actions.",
      "I know everything about cybersecurity.",
      "I am an expert because I completed one quiz.",
      "Cybersecurity is easy for me.",
    ],
    answer: 0,
    explanation:
      "The strongest claim is specific, limited, measurable, and supported by relevant evidence.",
  },
  {
    question: "What is the best response to feedback on an artifact?",
    choices: [
      "Review the feedback, decide what improves accuracy or clarity, revise the artifact, and document the change.",
      "Ignore all feedback.",
      "Delete the artifact immediately.",
      "Add more private details.",
    ],
    answer: 0,
    explanation:
      "Revision turns feedback into visible improvement and stronger evidence of learning.",
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
          Previous: B15.5 Threats and Defenses Review
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
          Next: B15.7 Beginner Final Readiness Lab
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

function ReflectionReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Select, Explain, Protect, and Improve
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A strong beginner portfolio shows what the learner can do, why the work
        matters, how the evidence supports the claim, and what changed through
        revision.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {reflectionStages.map((stage, index) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">{stage.title}</h3>
            <p className="mt-3 font-semibold text-cyan-100">{stage.question}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArtifactReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Portfolio Review Board
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence and Revision Decisions
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each fictional artifact includes a skill claim, supporting evidence,
            and a possible improvement.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {artifactRows.map((row) => (
          <div
            key={row.artifact}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1.3fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.artifact}</p>
            <p className="text-slate-300">{row.evidence}</p>
            <p className="text-sm font-semibold text-yellow-100">
              {row.improvement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BeginnerPortfolioReflectionPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.6 Beginner Portfolio Reflection
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Review completed work, identify evidence of growth, improve
            explanations, protect sensitive information, revise artifacts, and
            build honest cybersecurity skill claims.
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
          lessonTitle="Beginner Portfolio Reflection"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can select work that demonstrates a clear cybersecurity skill.",
            "I understand that a strong portfolio claim must be specific, accurate, and supported by evidence.",
            "I will remove or replace real names, credentials, private records, internal details, and sensitive screenshots.",
          ]}
        />

        <SectionCard
          eyebrow="Capstone Hook"
          title="A Portfolio Is Strongest When the Evidence Explains the Skill"
        >
          <p className="leading-8">
            Completing a project is only the beginning. A strong portfolio helps
            another person understand the problem, the learner's role, the
            decisions made, the evidence used, the result, the revision, and the
            next learning goal.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Portfolio safety rule:</span> recreate
            examples with fictional data whenever possible. Never publish real
            passwords, MFA codes, recovery codes, private records, suspicious
            files, internal tickets, or sensitive system details.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Select Beginner Track artifacts that show clear cybersecurity knowledge, reasoning, and defensive habits.",
            "Write specific skill claims supported by evidence, reflection, revision, and honest limits.",
            "Redact or recreate artifacts so they can be shared without exposing private or sensitive information.",
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
          title="Reflection Turns Completed Work Into Evidence of Growth"
        >
          <p className="leading-8">
            Teachers, programs, employers, and future collaborators need more
            than a list of files. They need a clear explanation of what the
            learner understood, applied, improved, and still plans to learn.
          </p>
        </SectionCard>

        <ReflectionReviewBoard />

        <SectionCard
          eyebrow="Core Concept"
          title="Use Specific Claims, Specific Evidence, and Honest Limits"
        >
          <p className="leading-8">
            Instead of saying “I know cybersecurity,” describe the exact task
            you can perform, the evidence that supports it, the conditions under
            which you practiced, and the next skill you are building.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Portfolio Reflection Terms
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

        <ArtifactReviewBoard />

        <FakeDashboardCard
          title="Fake Beginner Portfolio Dashboard"
          subtitle="Training dashboard using fictional artifacts, skill claims, revisions, redactions, feedback, and readiness evidence."
          metrics={[
            {
              label: "Artifacts reviewed",
              value: "18",
              note: "Fictional risk maps, reports, diagrams, checklists, labs, presentations, and reflections.",
            },
            {
              label: "Artifacts revised",
              value: "11",
              note: "Improved structure, clearer evidence, safer redaction, stronger labels, and more accurate claims.",
            },
            {
              label: "Ready to present",
              value: "7",
              note: "Selected work now includes context, role, evidence, reflection, and protected details.",
            },
          ]}
        />

        <FakeAlertCard
          title="Portfolio Screenshot Contains Private Account and Ticket Details"
          severity="High"
          time="3:18 PM"
          source="Fake Portfolio Privacy Monitor"
          details="A fictional student selects a screenshot that includes real-looking usernames, email addresses, internal ticket numbers, timestamps, and configuration details."
          recommendation="Replace the screenshot with a fictional recreation or redact all sensitive details, confirm permission, and keep only the evidence needed to demonstrate the skill."
        />

        <FakeLogPanel
          title="Fake Portfolio Revision Log"
          logs={[
            "14:22:08 ARTIFACT name='phishing_triage_report' selected='true'",
            "14:27:41 CLAIM skill='evidence_based_email_review'",
            "14:34:15 PRIVACY usernames='visible' ticket_ids='visible'",
            "14:38:52 REDACTION required='true' method='fictional_recreation'",
            "14:47:09 FEEDBACK clarity='needs_timeline_and_limits'",
            "14:56:33 REVISION timeline='added' limitations='added'",
            "15:18:20 STATUS ready_to_present='true'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Portfolio Claim Is Strongest?"
          evidence={[
            "A fictional student completed a phishing triage lab.",
            "The report reviews sender details, URL evidence, urgency, user request, preservation, and reporting.",
            "The learner revised the report after feedback and added a timeline and uncertainty section.",
            "The artifact uses fictional domains and redacted screenshots.",
          ]}
          question="Which claim is best supported?"
          options={[
            "I can analyze a fictional phishing report by reviewing message evidence, explaining uncertainty, choosing safe actions, and documenting the case.",
            "I am an expert in all areas of cybersecurity.",
            "I can investigate any real system without permission.",
            "I never make mistakes in security work.",
          ]}
          bestAnswer={0}
          explanation="The first claim is specific, accurate, limited to the demonstrated task, and supported by visible evidence and revision."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken a Beginner Portfolio"
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
          eyebrow="Safe Capstone Lab"
          title="Build a Fictional Beginner Portfolio Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Portfolio Folder
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Beginner Portfolio
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional portfolio contains risk maps, safe-learning plans,
                browser reviews, account-protection plans, threat-triage
                reports, defensive labs, career maps, quizzes, and reflections.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Select five to seven artifacts that show different Beginner Track skills.</li>
                <li>Write one specific skill claim for each artifact.</li>
                <li>Identify the evidence that supports each claim.</li>
                <li>Remove, replace, or redact sensitive and unnecessary details.</li>
                <li>Add a reflection on challenge, feedback, revision, and growth.</li>
                <li>Record the next learning goal connected to each artifact.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Strong Project Contains Sensitive Screenshots"
          scenario="A fictional defensive lab report clearly demonstrates good reasoning, but the screenshots include real-looking names, emails, ticket numbers, and internal details."
          choices={[
            {
              label: "Choice A",
              response:
                "Create fictional replacements or redact the sensitive details, keep only the evidence needed, and confirm permission before sharing.",
              outcome:
                "Best portfolio choice. The skill remains visible without exposing protected information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Publish the screenshots because the project received a good score.",
              outcome:
                "Risky. A strong project does not remove privacy and permission requirements.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Add more account details to prove the work was real.",
              outcome:
                "Unsafe. A portfolio should never expose credentials or unnecessary private information.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Learner Wants to Claim Expert-Level Skill"
          scenario="A fictional student completed beginner lessons and several guided labs and now wants the portfolio headline to say 'Cybersecurity Expert.'"
          choices={[
            {
              label: "Choice A",
              response:
                "Use a specific beginner-level claim that matches the evidence and include the next skills being developed.",
              outcome:
                "Best professional choice. Accurate claims build trust and show self-awareness.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the expert title because it sounds more impressive.",
              outcome:
                "Risky. Overstated claims weaken credibility.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove all evidence and keep only the title.",
              outcome:
                "Unsafe for credibility. Strong claims require visible support.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Beginner Portfolio Reflection Checklist"
          items={[
            "I select artifacts that demonstrate different cybersecurity skills.",
            "I write specific, accurate, and evidence-based skill claims.",
            "I explain the problem, my role, my decision, the evidence, and the result.",
            "I remove, replace, or redact sensitive and unnecessary information.",
            "I include feedback, revision, challenge, growth, and honest limitations.",
            "I use consistent labels, structure, and visual presentation.",
            "I connect every artifact to a realistic next learning goal.",
          ]}
        />

        <MiniQuiz
          title="B15.6 Mini Quiz: Beginner Portfolio Reflection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page Beginner Track portfolio reflection. Select three fictional or safely recreated artifacts. For each one, include the skill claim, task, your role, evidence, challenge, decision, feedback, revision, result, privacy protection, honest limitation, and next learning goal."
          tips={[
            "Use fictional or safely recreated examples and remove all real credentials, private records, internal details, and sensitive screenshots.",
            "Choose specific claims such as 'I can analyze a fictional phishing report' rather than broad claims such as 'I know cybersecurity.'",
            "Show at least one visible improvement made after feedback or self-review.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A strong portfolio artifact connects a clear skill claim with specific evidence.",
            "Reflection explains learning, challenge, feedback, revision, growth, limits, and next steps.",
            "Redaction and fictional recreation protect sensitive information before an artifact is shared.",
            "Accurate beginner-level claims build more trust than exaggerated titles.",
            "Revision turns completed work into stronger evidence of learning and professional growth.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}