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
  "/high-school/beginner/intro-to-cryptography-concepts/module-test";
const nextLesson =
  `${modulePath}/what-soc-analysts-do`;

const vocab = [
  [
    "Career family",
    "A group of cybersecurity roles that share similar goals, responsibilities, tools, or work environments.",
  ],
  [
    "Security operations",
    "Defensive work focused on monitoring, alert review, investigation, escalation, and incident response.",
  ],
  [
    "Security engineering",
    "Work that designs, builds, configures, tests, and improves technical security controls and systems.",
  ],
  [
    "Governance, risk, and compliance",
    "Work that connects security with policy, business risk, laws, standards, audits, privacy, and organizational responsibilities.",
  ],
  [
    "Digital forensics",
    "The careful collection, preservation, examination, and reporting of digital evidence through authorized processes.",
  ],
  [
    "Security awareness",
    "Education and communication that help people make safer decisions and follow approved security practices.",
  ],
];

const careerStages = [
  {
    title: "Protect and monitor",
    example:
      "Operations professionals review alerts, investigate evidence, document findings, and support incident response.",
  },
  {
    title: "Design and build",
    example:
      "Engineers and architects create secure systems, controls, networks, applications, and cloud environments.",
  },
  {
    title: "Guide and evaluate",
    example:
      "Risk, compliance, audit, privacy, and governance professionals connect security with organizational needs.",
  },
  {
    title: "Investigate and educate",
    example:
      "Forensics, threat intelligence, research, training, and awareness professionals examine evidence and improve understanding.",
  },
];

const careerRows = [
  {
    item: "SOC analyst",
    source: "Reviews alerts, logs, tickets, and escalation evidence",
    review:
      "Fits security operations, monitoring, investigation, and response.",
  },
  {
    item: "Security engineer",
    source: "Builds and maintains defensive controls and secure configurations",
    review:
      "Fits engineering, implementation, testing, and technical improvement.",
  },
  {
    item: "GRC analyst",
    source: "Reviews risks, policies, controls, standards, and business needs",
    review:
      "Fits governance, risk, compliance, audit, and communication.",
  },
  {
    item: "Digital forensics examiner",
    source: "Preserves and analyzes authorized digital evidence",
    review:
      "Fits investigations, evidence handling, reporting, and legal or policy processes.",
  },
  {
    item: "Security awareness specialist",
    source: "Creates training, campaigns, lessons, and safer-behavior guidance",
    review:
      "Fits education, communication, culture, and human-risk reduction.",
  },
];

const mistakes = [
  "Assuming every cybersecurity job involves penetration testing.",
  "Choosing a career only because of salary or popularity.",
  "Ignoring communication, writing, teamwork, ethics, and business understanding.",
  "Treating job titles as identical across every organization.",
  "Claiming professional experience or certifications that have not been earned.",
  "Building a career plan without considering interests, strengths, constraints, or preferred work style.",
];

const quizQuestions = [
  {
    question: "What is a cybersecurity career family?",
    choices: [
      "A group of roles with related goals, responsibilities, or work environments.",
      "A single required job title.",
      "A list of every computer brand.",
      "A type of password manager.",
    ],
    answer: 0,
    explanation:
      "Career families group related cybersecurity roles so students can compare the kind of work they perform.",
  },
  {
    question: "Which career family commonly reviews alerts and escalates incidents?",
    choices: [
      "Security operations.",
      "Graphic design.",
      "Public relations only.",
      "Building maintenance.",
    ],
    answer: 0,
    explanation:
      "Security operations teams commonly monitor alerts, investigate evidence, document findings, and escalate incidents.",
  },
  {
    question: "Which career family commonly designs and builds security controls?",
    choices: [
      "Security engineering and architecture.",
      "Event planning.",
      "Retail sales.",
      "Transportation management.",
    ],
    answer: 0,
    explanation:
      "Engineers and architects design, implement, test, and improve technical security systems and controls.",
  },
  {
    question: "Which career family connects security with policy and business risk?",
    choices: [
      "Governance, risk, and compliance.",
      "Video editing.",
      "Catering.",
      "Landscape design.",
    ],
    answer: 0,
    explanation:
      "GRC professionals connect security controls with policy, standards, audits, privacy, risk, and organizational goals.",
  },
  {
    question: "Why should students explore several career families?",
    choices: [
      "To compare responsibilities, skills, work styles, and learning paths before choosing a direction.",
      "Because one career choice can never change.",
      "Because every role requires the same skills.",
      "Because certifications automatically guarantee a job.",
    ],
    answer: 0,
    explanation:
      "Exploration helps students build informed and flexible plans based on real responsibilities and personal fit.",
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
          Previous: B12 Module Test
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
          Next: B13.2 What SOC Analysts Do
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

function CareerFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Major Cybersecurity Career Families
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Cybersecurity includes technical, investigative, business, educational,
        privacy, policy, and leadership work.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {careerStages.map((stage, index) => (
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
        <span className="font-bold">Career rule:</span> job titles vary between
        organizations. Focus on responsibilities, skills, and work environment
        rather than the title alone.
      </div>
    </section>
  );
}

function FakeCareerPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Career Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Responsibility and Career-Family Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares responsibilities, work products,
            communication needs, and likely career families.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {careerRows.map((row) => (
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

function CareerFamilyBoard() {
  const areas = [
    {
      name: "Operations and response",
      saferQuestion:
        "Do you enjoy reviewing alerts, analyzing evidence, documenting cases, and responding under time pressure?",
      saferChoice:
        "Explore SOC analysis, incident response, detection, threat intelligence, and security monitoring.",
    },
    {
      name: "Engineering and architecture",
      saferQuestion:
        "Do you enjoy building systems, solving technical problems, testing controls, and improving designs?",
      saferChoice:
        "Explore security engineering, cloud security, network security, application security, and architecture.",
    },
    {
      name: "Governance and risk",
      saferQuestion:
        "Do you enjoy policy, writing, business decisions, audits, privacy, standards, and structured evaluation?",
      saferChoice:
        "Explore governance, risk, compliance, audit, privacy, third-party risk, and security awareness.",
    },
    {
      name: "Investigation and education",
      saferQuestion:
        "Do you enjoy evidence, research, communication, teaching, behavior, and explaining complex ideas?",
      saferChoice:
        "Explore digital forensics, cybercrime investigation, research, awareness, training, and education.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Career Exploration
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Career-Family Fit Board
      </h2>
      <p className="mt-3 text-slate-300">
        Interests are clues, not permanent labels. Students can explore several
        areas and change direction as they learn.
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
                Reflection question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Possible direction
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CybersecurityCareerFamiliesPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.1 Cybersecurity Career Families
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore major cybersecurity career families and learn how operations,
            engineering, governance, privacy, investigations, awareness,
            research, education, and leadership contribute to security.
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
          lessonTitle="Cybersecurity Career Families"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that cybersecurity includes many different technical and nontechnical roles.",
            "I will use fictional job descriptions, organizations, resumes, projects, and career plans only.",
            "I am ready to compare responsibilities, skills, work styles, environments, and learning paths.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Cybersecurity Is a Team of Different Specialties"
        >
          <p className="leading-8">
            One professional may investigate alerts, another may design secure
            cloud systems, another may evaluate risk, and another may train
            employees. All contribute to security, but their daily work can look
            very different.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Career reminder:</span> never claim a
            certification, job title, project result, skill level, or work
            experience that has not been earned. Use honest evidence of growth.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Describe major cybersecurity career families and their common responsibilities.",
            "Match fictional tasks and work products with suitable role categories.",
            "Reflect on interests, strengths, work style, and learning needs without locking into one permanent path.",
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
          title="The Right Career Fit Depends on the Work, Not the Hype"
        >
          <p className="leading-8">
            Students sometimes assume cybersecurity means only hacking. In
            reality, the field needs analysts, engineers, writers, auditors,
            investigators, privacy professionals, educators, project leaders,
            researchers, and many other specialists.
          </p>
        </SectionCard>

        <CareerFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Job Titles Change, but Responsibilities Reveal the Role"
        >
          <p className="leading-8">
            The same title may mean different things in different organizations.
            A better way to compare opportunities is to review daily tasks,
            expected outcomes, tools, communication, teamwork, schedule,
            environment, and required experience.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Career Exploration
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

        <CareerFamilyBoard />
        <FakeCareerPanel />

        <FakeDashboardCard
          title="Fake Cybersecurity Career Exploration Dashboard"
          subtitle="Training dashboard using fictional roles, responsibilities, strengths, work styles, and learning interests."
          metrics={[
            {
              label: "Career families reviewed",
              value: "9",
              note: "Operations, engineering, architecture, risk, privacy, investigations, awareness, research, and leadership.",
            },
            {
              label: "Role descriptions compared",
              value: "24",
              note: "Fictional entry-level, mid-level, specialist, and leadership descriptions.",
            },
            {
              label: "Possible matches identified",
              value: "7",
              note: "Several directions matched the student's interests and preferred work style.",
            },
          ]}
        />

        <FakeAlertCard
          title="Career Plan Is Based Only on One Popular Job Title"
          severity="Medium"
          time="4:20 PM"
          source="Fake Career Planning Training"
          details="A fictional student chooses one cybersecurity job without reviewing its daily tasks, required experience, work schedule, communication demands, or alternative roles."
          recommendation="Compare several career families, review real responsibilities, identify transferable foundations, and create more than one possible learning route."
        />

        <FakeLogPanel
          title="Fake Career Exploration Log"
          logs={[
            "15:42:08 INTERESTS analysis='high' writing='medium' teaching='high'",
            "15:48:17 WORK_STYLE teamwork='preferred' on_call='uncertain' public_speaking='comfortable'",
            "15:55:31 ROLE_REVIEW soc_analyst='possible' security_engineer='possible'",
            "16:01:46 ROLE_REVIEW grc_analyst='strong_match' awareness_specialist='strong_match'",
            "16:09:22 SKILL_GAPS networking='beginner' policy_writing='developing'",
            "16:20:04 PLAN explore_roles='4' foundation_projects='3' review_date='90_days'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Career Families Fit the Evidence?"
          evidence={[
            "A fictional student enjoys writing, presenting, research, and structured evaluation.",
            "The student likes technology but does not want constant alert monitoring.",
            "The student is interested in privacy, policy, and helping people make safer choices.",
            "The student wants to build technical foundations without focusing only on engineering.",
          ]}
          question="What is the strongest initial career exploration plan?"
          options={[
            "Explore GRC, privacy, security awareness, and policy roles while continuing foundational technical learning.",
            "Choose SOC analysis because every cybersecurity student must start there.",
            "Avoid cybersecurity because the student does not prefer constant alert monitoring.",
            "Claim advanced privacy experience without completing any projects.",
          ]}
          bestAnswer={0}
          explanation="The interests align well with policy, privacy, awareness, communication, and structured risk work while technical foundations remain valuable."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Career Exploration"
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
          title="Match Fictional Responsibilities With Career Families"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Role Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Career-Family Matching Exercise
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews roles involving alert analysis,
                secure design, policy writing, privacy review, evidence
                preservation, training, research, and security leadership.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Career Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the main responsibility and expected outcome.</li>
                <li>Identify technical, communication, business, and teamwork skills.</li>
                <li>Review the likely work environment and schedule.</li>
                <li>Match the role to one or more career families.</li>
                <li>Identify beginner foundations that transfer across roles.</li>
                <li>Record one question to research before choosing a path.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Student Thinks Cybersecurity Means Only Hacking"
          scenario="A fictional student ignores operations, engineering, privacy, risk, forensics, awareness, and leadership roles because only offensive work seems interesting online."
          choices={[
            {
              label: "Choice A",
              response:
                "Explore several career families, compare real responsibilities, and complete safe beginner activities before choosing a direction.",
              outcome:
                "Best career choice. Broader exploration creates a more informed and flexible plan.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Choose a career based only on social media clips.",
              outcome:
                "Risky. Short clips may not represent daily professional work.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Test skills on systems without permission to build experience.",
              outcome:
                "Unsafe and unethical. Career development must use authorized learning environments.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Job Title Sounds Perfect but the Daily Work Does Not"
          scenario="A fictional student likes the title security analyst but dislikes constant alert review, shift work, ticket documentation, and time-sensitive escalation."
          choices={[
            {
              label: "Choice A",
              response:
                "Review other analyst, engineering, policy, privacy, awareness, research, and project-focused roles before deciding.",
              outcome:
                "Best career choice. Responsibilities and work style matter more than the title.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the daily work because the title sounds impressive.",
              outcome:
                "Risky. Poor fit can reduce motivation and satisfaction.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Claim experience in the role without doing the work.",
              outcome:
                "Unsafe and dishonest. Career evidence must be accurate.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cybersecurity Career Families Checklist"
          items={[
            "I understand that cybersecurity includes many technical and nontechnical specialties.",
            "I compare responsibilities instead of relying only on job titles.",
            "I consider interests, strengths, values, work style, schedule, and learning needs.",
            "I value communication, ethics, documentation, teamwork, and business understanding.",
            "I explore several possible career families before choosing a direction.",
            "I use only authorized and ethical projects to build experience.",
            "I describe my skills, certifications, and experience honestly.",
          ]}
        />

        <MiniQuiz
          title="B13.1 Mini Quiz: Cybersecurity Career Families"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cybersecurity career-family comparison. Include six career families, common responsibilities, typical work products, important technical skills, communication skills, work environments, beginner learning ideas, and personal-fit questions."
          tips={[
            "Use fictional employers, job descriptions, resumes, projects, interviews, and career plans only.",
            "Do not include real private employer information, credentials, or confidential work examples.",
            "Explain which responsibilities interest the student and which require more exploration.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cybersecurity includes operations, engineering, architecture, risk, privacy, investigations, awareness, research, education, and leadership.",
            "Job titles vary, so daily responsibilities are the best comparison point.",
            "Communication, ethics, teamwork, and documentation matter across the field.",
            "Career exploration should consider interests, strengths, work style, and practical constraints.",
            "Students can explore several paths and adjust their goals as they gain experience.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}