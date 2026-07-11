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
  `${modulePath}/governance-risk-and-compliance-roles`;
const nextLesson =
  `${modulePath}/building-a-beginner-cyber-portfolio`;

const vocab = [
  [
    "Learning path",
    "A planned sequence of skills, lessons, projects, practice, feedback, and milestones that supports a specific goal.",
  ],
  [
    "Certification",
    "A credential earned by meeting the requirements of an assessment or program offered by an issuing organization.",
  ],
  [
    "Foundational knowledge",
    "Core understanding of computing, networking, operating systems, security, communication, ethics, and problem-solving.",
  ],
  [
    "Hands-on practice",
    "Authorized learning through labs, simulations, projects, competitions, troubleshooting, and documented exercises.",
  ],
  [
    "Prerequisite",
    "Knowledge, experience, or preparation recommended or required before beginning a course, exam, or project.",
  ],
  [
    "Milestone",
    "A measurable checkpoint used to review progress, evidence, challenges, and the next step in a learning plan.",
  ],
];

const learningStages = [
  {
    title: "Choose a direction",
    example:
      "Identify an interest area, realistic goal, time available, budget, and current skill level.",
  },
  {
    title: "Build foundations",
    example:
      "Study computing, networking, operating systems, security concepts, ethics, writing, and communication.",
  },
  {
    title: "Practice and document",
    example:
      "Complete authorized labs and projects, explain decisions, record evidence, and reflect on mistakes.",
  },
  {
    title: "Review and adjust",
    example:
      "Use milestones, feedback, practice results, and changing interests to update the plan.",
  },
];

const pathwayRows = [
  {
    item: "Course or class",
    source: "Structured lessons, assignments, explanations, and feedback",
    review:
      "Useful for building organized knowledge and consistent study habits.",
  },
  {
    item: "Certification",
    source: "Defined objectives, assessment, and credential requirements",
    review:
      "Useful when it matches the learner's level, goal, budget, and actual preparation.",
  },
  {
    item: "Hands-on lab",
    source: "Authorized practice with fictional or isolated systems",
    review:
      "Useful for applying concepts, troubleshooting, documenting evidence, and learning from errors.",
  },
  {
    item: "Project or portfolio",
    source: "A completed artifact that explains planning, decisions, results, and reflection",
    review:
      "Useful for showing growth, communication, ethics, and problem-solving.",
  },
  {
    item: "Competition or club",
    source: "Teamwork, deadlines, scenarios, leadership, and repeated practice",
    review:
      "Useful for collaboration and experience when activities remain authorized and safe.",
  },
];

const mistakes = [
  "Collecting credentials without building the underlying knowledge or skills.",
  "Choosing an advanced exam before understanding its prerequisites.",
  "Assuming a certification guarantees a job, internship, or salary.",
  "Ignoring project work, communication, teamwork, ethics, and reflection.",
  "Spending money before comparing objectives, preparation needs, and alternatives.",
  "Building a schedule with no review dates, practice checkpoints, or backup plan.",
];

const quizQuestions = [
  {
    question: "What is a learning path?",
    choices: [
      "A planned sequence of skills, practice, projects, feedback, and milestones.",
      "A list of random exam names.",
      "A guarantee of employment.",
      "A replacement for hands-on learning.",
    ],
    answer: 0,
    explanation:
      "A learning path connects a goal with ordered preparation, evidence, review, and next steps.",
  },
  {
    question: "What should happen before choosing a certification?",
    choices: [
      "Compare the objectives, level, prerequisites, cost, preparation time, and relevance to the goal.",
      "Choose the most expensive option.",
      "Assume every certification is beginner-friendly.",
      "Skip foundational learning.",
    ],
    answer: 0,
    explanation:
      "A credential is most useful when it matches the learner's current level and planned direction.",
  },
  {
    question: "Why is hands-on practice important?",
    choices: [
      "It helps learners apply concepts, troubleshoot, document evidence, and learn from mistakes.",
      "It makes ethics unnecessary.",
      "It replaces all theory and communication.",
      "It permits testing any real system.",
    ],
    answer: 0,
    explanation:
      "Authorized practice turns knowledge into usable skill while preserving safety and ethics.",
  },
  {
    question: "What is a milestone?",
    choices: [
      "A measurable checkpoint for reviewing progress and planning the next step.",
      "A permanent career decision.",
      "A password-reset method.",
      "An automatic certification.",
    ],
    answer: 0,
    explanation:
      "Milestones make a learning plan measurable and easier to adjust.",
  },
  {
    question: "Which statement about certifications is strongest?",
    choices: [
      "They can support a learning path, but they do not replace knowledge, practice, ethics, communication, or experience.",
      "They guarantee every job.",
      "They are the only evidence that matters.",
      "The most advanced credential is always the best first choice.",
    ],
    answer: 0,
    explanation:
      "Credentials are one part of career readiness and should be supported by real learning and evidence.",
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
          Previous: B13.4 Governance, Risk, and Compliance Roles
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
          Next: B13.6 Building a Beginner Cyber Portfolio
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

function LearningPathFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Beginner Learning-Path Cycle
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong plans connect direction, foundations, practice, evidence,
        feedback, and regular review.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {learningStages.map((stage, index) => (
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
        <span className="font-bold">Planning rule:</span> a certification should
        support the learning goal. The goal should not be reduced to collecting
        as many credentials as possible.
      </div>
    </section>
  );
}

function FakePathwayPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Learning Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Learning Option Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares courses, certifications, labs,
            projects, competitions, and other learning options.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {pathwayRows.map((row) => (
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

function PathwayDecisionBoard() {
  const areas = [
    {
      name: "Goal fit",
      saferQuestion:
        "Does this option support the role, skill, project, class, or milestone the student is pursuing?",
      saferChoice:
        "Choose learning that clearly connects to the current direction and next measurable outcome.",
    },
    {
      name: "Readiness",
      saferQuestion:
        "Does the student have the recommended foundations, study time, reading level, and practice experience?",
      saferChoice:
        "Build missing prerequisites first or choose a more appropriate starting level.",
    },
    {
      name: "Evidence",
      saferQuestion:
        "Will the student produce practice results, projects, reports, reflections, or other proof of learning?",
      saferChoice:
        "Pair study with authorized hands-on work and clear documentation.",
    },
    {
      name: "Constraints",
      saferQuestion:
        "Are the cost, schedule, materials, exam rules, support, and preparation time realistic?",
      saferChoice:
        "Compare alternatives and choose a plan that can be completed without unsafe pressure or misleading claims.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Learning-Path Decisions
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Course and Certification Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        A strong choice matches the learner's goal, readiness, evidence needs,
        time, budget, and practical constraints.
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
                Strong planning action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CertificationsAndLearningPathsPage() {
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
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.5 Certifications and Learning Paths
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to compare certifications, courses, college programs,
            labs, projects, competitions, clubs, and experience as parts of a
            realistic cybersecurity learning path.
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
          lessonTitle="Certifications and Learning Paths"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that certifications are one part of learning and do not guarantee employment.",
            "I will compare goals, prerequisites, cost, time, practice, and evidence before choosing a path.",
            "I am ready to build a realistic plan that can change as my skills and interests grow.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Credential Is Most Valuable When It Represents Real Learning"
        >
          <p className="leading-8">
            A certification can help organize study and confirm that a learner
            met defined requirements. It becomes much stronger when supported by
            foundational knowledge, authorized practice, projects, reflection,
            communication, and honest evidence.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Planning reminder:</span> never claim a
            certification before earning it, share protected exam content, use
            unauthorized answers, or misrepresent preparation and experience.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how certifications, courses, labs, projects, competitions, and experience contribute to a learning path.",
            "Compare learning options by goal, level, prerequisites, cost, time, and evidence.",
            "Build a beginner roadmap with foundations, practice, milestones, review dates, and alternatives.",
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
          title="Random Credentials Do Not Create a Coherent Skill Set"
        >
          <p className="leading-8">
            Learners can lose time and money by choosing exams that are too
            advanced, unrelated to their goals, or unsupported by practice. A
            planned sequence creates stronger foundations and clearer evidence
            of progress.
          </p>
        </SectionCard>

        <LearningPathFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Learning Paths Should Be Goal-Based, Evidence-Based, and Flexible"
        >
          <p className="leading-8">
            The best path depends on the learner's starting point, career
            interest, available time, budget, preferred learning style, access
            to support, and opportunities for safe practice. It should include
            review points where the plan can be changed.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Certifications and Learning Plans
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

        <PathwayDecisionBoard />
        <FakePathwayPanel />

        <FakeDashboardCard
          title="Fake Cyber Learning-Path Dashboard"
          subtitle="Training dashboard using fictional courses, certification goals, practice milestones, projects, schedules, and budgets."
          metrics={[
            {
              label: "Foundational topics",
              value: "8",
              note: "Computing, networking, operating systems, security, ethics, writing, teamwork, and problem-solving.",
            },
            {
              label: "Authorized practice projects",
              value: "6",
              note: "Fictional labs, diagrams, reports, troubleshooting exercises, and defensive scenarios.",
            },
            {
              label: "Review milestones",
              value: "5",
              note: "Knowledge checks, practice results, project reviews, schedule review, and final reflection.",
            },
          ]}
        />

        <FakeAlertCard
          title="Advanced Credential Selected Without Prerequisites"
          severity="Medium"
          time="6:10 PM"
          source="Fake Learning Plan Review"
          details="A fictional beginner chooses an advanced certification because the title sounds impressive, but has not studied networking, operating systems, security fundamentals, or the exam objectives."
          recommendation="Review prerequisites and objectives, complete foundational learning and authorized practice, then reassess whether the credential still matches the goal."
        />

        <FakeLogPanel
          title="Fake Learning-Path Planning Log"
          logs={[
            "17:05:10 GOAL role='soc_analyst' timeline='12_months'",
            "17:12:48 BASELINE networking='beginner' operating_systems='beginner'",
            "17:21:33 STUDY foundations='12_weeks' schedule='5_hours_weekly'",
            "17:34:09 PRACTICE labs='6' case_reports='3' portfolio='planned'",
            "17:47:26 CREDENTIAL level='foundational' prerequisites='matched'",
            "17:55:41 MILESTONE practice_score='target_80_percent'",
            "18:10:02 REVIEW date='90_days' backup_path='grc_exploration'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Learning Path Is Most Realistic?"
          evidence={[
            "A fictional student is new to networking and operating systems.",
            "The student has five hours per week and a limited budget.",
            "The student wants to explore SOC analysis but is also interested in GRC.",
            "An advanced certification requires knowledge the student has not yet built.",
          ]}
          question="What is the strongest initial plan?"
          options={[
            "Build foundations, complete safe SOC and GRC projects, use milestones, and choose a suitable beginner credential only after reviewing objectives and readiness.",
            "Register immediately for the advanced credential.",
            "Skip practice and collect only course-completion badges.",
            "Claim the credential as in progress on every application without studying.",
          ]}
          bestAnswer={0}
          explanation="The strongest path matches the student's starting level, time, budget, interests, and need for practical evidence."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Learning Paths"
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
          title="Build a Fictional Beginner Learning Roadmap"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Student Profile
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Twelve-Month Cybersecurity Roadmap
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student has beginner computing knowledge, six hours
                per week, a limited budget, and interests in SOC operations,
                security engineering, and GRC.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Roadmap Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Define the career directions to explore.</li>
                <li>Measure current knowledge and missing prerequisites.</li>
                <li>Choose foundational topics and a weekly schedule.</li>
                <li>Add authorized labs, projects, teamwork, and reflection.</li>
                <li>Compare suitable credentials without assuming they are required.</li>
                <li>Set milestones, review dates, evidence goals, and backup options.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Student Wants the Most Advanced Certification First"
          scenario="A fictional beginner selects an advanced credential without reviewing prerequisites, exam objectives, study time, cost, or hands-on expectations."
          choices={[
            {
              label: "Choice A",
              response:
                "Review the goal and prerequisites, build foundations, complete authorized practice, and select a level-appropriate credential later.",
              outcome:
                "Best planning choice. Readiness and relevance matter more than title difficulty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Pay immediately because a harder credential must always be better.",
              outcome:
                "Risky. The exam may not match the learner's current level or goal.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Search for unauthorized exam answers.",
              outcome:
                "Unsafe and dishonest. Protected exam content and cheating must never be used.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Learning Plan Contains Only Videos and Notes"
          scenario="A fictional student has watched many lessons but has no labs, projects, practice checks, portfolio evidence, feedback, or review milestones."
          choices={[
            {
              label: "Choice A",
              response:
                "Add authorized labs, small projects, explanations, practice checks, feedback, reflection, and scheduled reviews.",
              outcome:
                "Best learning choice. Practice and evidence make the plan measurable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Continue collecting videos without checking understanding.",
              outcome:
                "Risky. Passive study may not reveal skill gaps.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Test skills on real systems without permission.",
              outcome:
                "Unsafe and unethical. Practice must remain authorized and isolated.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Certifications and Learning Paths Checklist"
          items={[
            "I define the goal before choosing a course, exam, lab, or project.",
            "I compare objectives, level, prerequisites, cost, time, and relevance.",
            "I build computing, networking, operating-system, security, ethics, and communication foundations.",
            "I include authorized hands-on practice and documented projects.",
            "I use milestones, feedback, practice results, and review dates.",
            "I understand that certifications support learning but do not guarantee employment.",
            "I never misrepresent credentials, experience, exam results, or project work.",
          ]}
        />

        <MiniQuiz
          title="B13.5 Mini Quiz: Certifications and Learning Paths"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional twelve-month cybersecurity learning roadmap. Include the learner's goal, starting level, prerequisites, foundational topics, weekly schedule, courses, authorized labs, projects, possible certification, budget, milestones, evidence, review dates, and backup path."
          tips={[
            "Use a fictional student profile and fictional progress data.",
            "Do not copy protected exam questions or include unauthorized study materials.",
            "Explain why each part of the plan matches the learner's goal, level, time, and budget.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A learning path connects goals, foundations, practice, evidence, milestones, and review.",
            "Certifications can support learning, but they do not replace skills, ethics, communication, or experience.",
            "The strongest credential choice matches the learner's level, prerequisites, budget, time, and direction.",
            "Authorized labs and projects turn knowledge into demonstrable skill.",
            "Career plans should be reviewed and adjusted as interests, opportunities, and abilities change.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}