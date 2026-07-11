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
  `${modulePath}/building-a-beginner-cyber-portfolio`;
const nextLesson =
  `${modulePath}/module-test`;

const vocab = [
  [
    "Career goal",
    "A specific direction a learner wants to explore, such as a role, skill area, project type, course, certification, internship, or leadership opportunity.",
  ],
  [
    "Skill gap",
    "The difference between a learner's current ability and the knowledge or performance needed for a goal.",
  ],
  [
    "Action step",
    "A clear, realistic task with an owner, deadline, and expected result.",
  ],
  [
    "Milestone",
    "A measurable checkpoint used to review progress, evidence, obstacles, and the next decision.",
  ],
  [
    "Networking",
    "Building professional relationships through respectful communication, learning, collaboration, mentorship, events, and shared interests.",
  ],
  [
    "Contingency plan",
    "An alternative route used when time, cost, readiness, opportunity, or priorities change.",
  ],
];

const planningStages = [
  {
    title: "Choose a direction",
    example:
      "Select one or two career families to explore instead of trying to master everything at once.",
  },
  {
    title: "Measure the starting point",
    example:
      "Review current knowledge, strengths, interests, experience, time, budget, and support.",
  },
  {
    title: "Build evidence",
    example:
      "Complete authorized learning, projects, practice, reflection, teamwork, and communication milestones.",
  },
  {
    title: "Review and adjust",
    example:
      "Compare results with the goal, seek feedback, update priorities, and use an alternative path when needed.",
  },
];

const planRows = [
  {
    item: "Foundation milestone",
    source: "Complete networking, operating-system, security, and communication basics",
    review:
      "Creates transferable knowledge before deeper specialization.",
  },
  {
    item: "Project milestone",
    source: "Finish a fictional SOC case report and secure-system diagram",
    review:
      "Produces safe evidence of analysis, documentation, and design thinking.",
  },
  {
    item: "Career exploration milestone",
    source: "Interview a fictional professional profile and compare three job descriptions",
    review:
      "Clarifies responsibilities, work style, required skills, and possible fit.",
  },
  {
    item: "Credential decision milestone",
    source: "Review objectives, prerequisites, cost, schedule, and practice readiness",
    review:
      "Prevents choosing a certification only for its title or popularity.",
  },
  {
    item: "Portfolio milestone",
    source: "Publish six reviewed fictional artifacts with reflection and privacy checks",
    review:
      "Shows growth, ethics, communication, and evidence of learning.",
  },
];

const mistakes = [
  "Creating a plan with goals but no measurable action steps or deadlines.",
  "Choosing too many priorities and completing none of them.",
  "Ignoring school workload, health, transportation, budget, and available support.",
  "Treating one rejected opportunity or failed exam as the end of the career path.",
  "Networking by asking strangers for favors without building a respectful relationship.",
  "Leaving no review dates, evidence requirements, feedback sources, or backup options.",
];

const quizQuestions = [
  {
    question: "What makes a career goal useful?",
    choices: [
      "It is specific enough to guide realistic action steps and evidence.",
      "It is based only on a popular job title.",
      "It never changes.",
      "It includes no deadline or measurement.",
    ],
    answer: 0,
    explanation:
      "A useful goal helps the learner decide what to study, practice, build, review, and adjust.",
  },
  {
    question: "What is a skill gap?",
    choices: [
      "The difference between current ability and what a goal requires.",
      "A permanent failure.",
      "A type of cyberattack.",
      "A replacement for practice.",
    ],
    answer: 0,
    explanation:
      "Identifying skill gaps helps the learner choose focused study and practice steps.",
  },
  {
    question: "Why are milestones important?",
    choices: [
      "They make progress measurable and create review points.",
      "They guarantee every opportunity.",
      "They replace reflection.",
      "They remove the need for deadlines.",
    ],
    answer: 0,
    explanation:
      "Milestones help learners check evidence, obstacles, progress, and next decisions.",
  },
  {
    question: "What is a strong networking approach?",
    choices: [
      "Build respectful relationships through learning, questions, collaboration, and follow-up.",
      "Send the same request for a job to every stranger.",
      "Misrepresent experience to impress people.",
      "Share private contact information publicly.",
    ],
    answer: 0,
    explanation:
      "Professional networking grows through respectful, genuine, and mutually valuable interaction.",
  },
  {
    question: "Why should a career plan include a contingency path?",
    choices: [
      "Because goals, opportunities, time, cost, and readiness can change.",
      "Because the main plan should be ignored.",
      "Because no progress can be measured.",
      "Because every certification is required.",
    ],
    answer: 0,
    explanation:
      "Alternative routes make the plan resilient when circumstances or priorities change.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B13</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B13.6 Building a Beginner Cyber Portfolio
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
          Open B13 Module Test
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

function CareerPlanFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Career-Planning Cycle
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong career plans connect direction, self-assessment, evidence,
        feedback, milestones, and flexible next steps.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {planningStages.map((stage, index) => (
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
        <span className="font-bold">Planning rule:</span> a career plan is a
        guide, not a permanent promise. Review it when evidence, interests,
        opportunities, or circumstances change.
      </div>
    </section>
  );
}

function FakePlanPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Career Plan Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Milestone and Evidence Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel reviews milestones, evidence, deadlines,
            readiness, ownership, and next decisions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {planRows.map((row) => (
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

function PlanningDecisionBoard() {
  const areas = [
    {
      name: "Direction",
      saferQuestion:
        "Which one or two career families, roles, or skill areas should the learner explore first?",
      saferChoice:
        "Choose a focused direction while keeping one realistic alternative path.",
    },
    {
      name: "Readiness",
      saferQuestion:
        "What strengths, foundations, experience, time, budget, support, and constraints exist now?",
      saferChoice:
        "Use an honest starting-point review to select the right next level.",
    },
    {
      name: "Evidence",
      saferQuestion:
        "Which projects, labs, reflections, presentations, assessments, or teamwork experiences will show progress?",
      saferChoice:
        "Define safe artifacts and measurable outcomes for each milestone.",
    },
    {
      name: "Review",
      saferQuestion:
        "When will the learner review progress, seek feedback, and adjust the plan?",
      saferChoice:
        "Schedule regular checkpoints with evidence, lessons learned, and updated actions.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Career Planning
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Career-Plan Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        A realistic plan balances ambition with readiness, time, health, cost,
        evidence, support, and flexible alternatives.
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
                Planning question
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

export default function CareerPlanningLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.7 Career Planning Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Combine career interests, skill gaps, learning choices,
            certifications, projects, portfolios, networking, milestones, and
            backup options into a realistic one-year cybersecurity plan.
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
          lessonTitle="Career Planning Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that career plans should be specific, realistic, measurable, and flexible.",
            "I will use fictional profiles, organizations, job descriptions, mentors, applications, and progress data only.",
            "I am ready to connect goals with action steps, evidence, deadlines, feedback, and alternative routes.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Goal Becomes Useful When It Produces the Next Action"
        >
          <p className="leading-8">
            Saying “I want a cybersecurity career” is a starting point. A strong
            plan identifies what to explore, what to learn, what to build, how
            progress will be measured, who can provide feedback, and what to do
            when the original route changes.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Career safety reminder:</span> never
            misrepresent age, identity, experience, certifications, project
            results, references, or eligibility when applying for programs,
            internships, jobs, or competitions.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Create a focused one-year career plan with goals, milestones, evidence, deadlines, and review dates.",
            "Connect career families with foundations, certifications, projects, portfolios, networking, and professional habits.",
            "Build contingency options for changing interests, cost, time, readiness, and opportunity.",
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
          title="Career Growth Is Built Through Repeated, Measurable Decisions"
        >
          <p className="leading-8">
            Large goals can feel overwhelming when they are not divided into
            smaller actions. A structured plan makes progress visible, reveals
            obstacles early, and helps the learner use time and resources more
            effectively.
          </p>
        </SectionCard>

        <CareerPlanFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="The Best Plan Connects Learning, Evidence, Relationships, and Reflection"
        >
          <p className="leading-8">
            Courses and certifications matter, but so do projects, communication,
            teamwork, mentorship, clubs, competitions, presentations,
            volunteering, reflection, and professional behavior. A strong plan
            combines these into a coherent growth story.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Career Planning
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

        <PlanningDecisionBoard />
        <FakePlanPanel />

        <FakeDashboardCard
          title="Fake One-Year Career Plan Dashboard"
          subtitle="Training dashboard using fictional goals, milestones, schedules, projects, credentials, feedback, and progress evidence."
          metrics={[
            {
              label: "Primary career families",
              value: "2",
              note: "Security operations and governance, risk, and compliance.",
            },
            {
              label: "Planned artifacts",
              value: "7",
              note: "Case reports, diagrams, risk reviews, presentations, reflections, and a final portfolio.",
            },
            {
              label: "Formal review points",
              value: "6",
              note: "Monthly progress checks, quarterly plan reviews, and one final annual reflection.",
            },
          ]}
        />

        <FakeAlertCard
          title="Career Plan Has Too Many Simultaneous Priorities"
          severity="Medium"
          time="5:45 PM"
          source="Fake Career Plan Review"
          details="A fictional student plans five certifications, twelve projects, three clubs, two competitions, daily study, and an internship search during the same school term."
          recommendation="Prioritize one or two career directions, reduce simultaneous goals, protect school and health responsibilities, and create realistic milestones with review dates."
        />

        <FakeLogPanel
          title="Fake Career Planning Log"
          logs={[
            "16:10:12 GOAL primary='soc_operations' secondary='grc'",
            "16:18:26 BASELINE networking='beginner' writing='strong' teamwork='strong'",
            "16:27:49 CONSTRAINT school='high_load' weekly_time='6_hours'",
            "16:39:05 PLAN foundations='12_weeks' projects='3' portfolio='6_artifacts'",
            "16:52:31 NETWORKING mentors='2' events='3' follow_up='monthly'",
            "17:08:44 MILESTONE certification_decision='month_6'",
            "17:23:18 REVIEW quarterly='true' contingency='grc_first_path'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which One-Year Plan Is Strongest?"
          evidence={[
            "A fictional student has six hours per week during a demanding school year.",
            "The student is interested in SOC operations and GRC.",
            "The student has beginner networking knowledge but strong writing and teamwork skills.",
            "The student wants projects, a portfolio, and possibly one certification.",
          ]}
          question="What is the strongest plan?"
          options={[
            "Build foundations, complete a small set of SOC and GRC projects, review progress quarterly, build a portfolio, and decide on one suitable credential after measuring readiness.",
            "Attempt five advanced certifications immediately.",
            "Ignore school workload and study every night without rest.",
            "Claim professional SOC experience after completing one fictional alert exercise.",
          ]}
          bestAnswer={0}
          explanation="The strongest plan matches the student's time, starting point, interests, strengths, and need for measurable evidence."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Career Plans"
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
          eyebrow="Career Planning Lab"
          title="Build a Fictional One-Year Cybersecurity Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Student Profile
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                One-Year Career Readiness Plan
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional high school student has six weekly hours, a limited
                budget, beginner technical foundations, strong communication
                skills, and interests in SOC analysis, GRC, and security
                awareness.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Planning Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Choose a primary and secondary career direction.</li>
                <li>Record strengths, skill gaps, constraints, and available support.</li>
                <li>Create monthly learning, project, communication, and portfolio goals.</li>
                <li>Add one networking or mentorship action per month.</li>
                <li>Set evidence requirements and milestone review dates.</li>
                <li>Create a contingency path for cost, time, readiness, or changing interests.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Student's Original Plan Becomes Unrealistic"
          scenario="A fictional student planned ten weekly study hours, but school, family responsibilities, and health needs leave only four reliable hours."
          choices={[
            {
              label: "Choice A",
              response:
                "Reduce the number of simultaneous goals, protect essential responsibilities, adjust milestones, and update the review schedule.",
              outcome:
                "Best planning choice. A realistic plan is stronger than an overloaded plan.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore sleep and health to keep the original schedule.",
              outcome:
                "Risky. Unsustainable pressure can harm learning and well-being.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Pretend every milestone was completed.",
              outcome:
                "Unsafe and dishonest. Progress records must remain accurate.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Student Wants to Network With Professionals"
          scenario="A fictional student plans to send the same message to dozens of strangers asking directly for internships and recommendations."
          choices={[
            {
              label: "Choice A",
              response:
                "Attend appropriate events, ask thoughtful questions, learn from professionals, follow up respectfully, and build genuine relationships over time.",
              outcome:
                "Best networking choice. Professional relationships grow through respect and shared learning.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Send repeated requests until someone replies.",
              outcome:
                "Risky. Repetitive pressure can damage professional trust.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Exaggerate skills and experience to appear qualified.",
              outcome:
                "Unsafe and dishonest. Networking should be accurate and respectful.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Career Planning Checklist"
          items={[
            "I choose one or two focused career directions to explore.",
            "I record my current strengths, skill gaps, interests, constraints, and support.",
            "I turn goals into realistic action steps with deadlines and evidence.",
            "I include foundations, projects, portfolio work, communication, networking, and reflection.",
            "I set milestone reviews and adjust the plan when evidence or circumstances change.",
            "I create a contingency path for time, cost, readiness, opportunity, or changing interests.",
            "I represent my identity, skills, credentials, experience, and results honestly.",
          ]}
        />

        <MiniQuiz
          title="B13.7 Mini Quiz: Career Planning Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional one-year cybersecurity career plan. Include the learner's primary and secondary career directions, strengths, skill gaps, weekly schedule, budget, foundational topics, projects, possible certification, portfolio milestones, networking actions, review dates, evidence requirements, risks, and contingency path."
          tips={[
            "Use fictional students, mentors, organizations, applications, progress data, and opportunities only.",
            "Do not include real private contact information, credentials, school records, or employer information.",
            "Make every milestone specific, realistic, measurable, and connected to evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Career plans become useful when goals are translated into realistic actions, evidence, deadlines, and review dates.",
            "Strong plans connect learning, projects, portfolios, communication, networking, and reflection.",
            "Skill gaps are planning information, not permanent failures.",
            "Contingency paths help learners continue when time, cost, readiness, interests, or opportunities change.",
            "Honesty, ethics, health, school responsibilities, and sustainable progress matter throughout career development.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}