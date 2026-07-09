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

const modulePath = "/high-school/beginner/web-basics-and-browser-safety";
const previousLesson = `${modulePath}/safe-web-research-habits`;
const moduleTest = `${modulePath}/module-test`;

const objectives = [
  "Review a fake web safety case using browser clues, URL clues, certificate signals, form behavior, download warnings, and source quality.",
  "Separate confirmed evidence from guesses before making a safety decision.",
  "Choose a safe defensive response when a webpage, download, redirect, or login request feels questionable.",
  "Write a short professional web safety summary that avoids panic, blame, and unsafe testing.",
];

const vocab = [
  [
    "Web safety analysis",
    "A careful review of webpage clues, browser behavior, user reports, and fake evidence to decide the safest defensive response.",
  ],
  [
    "Evidence bundle",
    "A group of clues used together, such as a URL, browser warning, form request, redirect path, and user report.",
  ],
  [
    "Confirmed fact",
    "A detail clearly shown by the evidence, not something assumed or guessed.",
  ],
  [
    "Unverified claim",
    "A statement that might be true but needs more trusted evidence before it should be used for a conclusion.",
  ],
  [
    "Safe recommendation",
    "A defensive next step that protects users, devices, accounts, and privacy without testing real suspicious content.",
  ],
  [
    "Escalation",
    "Asking a trusted adult, teacher, guardian, or school technology staff member for help when the issue could affect safety or school systems.",
  ],
];

const mistakes = [
  "Clicking through warnings because a page looks important or urgent.",
  "Treating HTTPS as proof that a webpage is safe, accurate, or official.",
  "Entering school, personal, or account information into a page that has not been verified.",
  "Downloading a file just to find out whether it is safe.",
  "Making a dramatic conclusion from one clue without comparing the full evidence bundle.",
  "Trying to test a real suspicious website instead of using safe, fake training examples and trusted help.",
];

const analysisSteps = [
  {
    step: "1",
    title: "Identify the task",
    detail: "What was the student trying to do: research, log in, download, submit a form, or visit a class resource?",
  },
  {
    step: "2",
    title: "Check address clues",
    detail: "Review the fake URL, domain, spelling, path, and whether the page matches the expected organization.",
  },
  {
    step: "3",
    title: "Review browser signals",
    detail: "Look for warnings, certificate issues, redirects, pop-ups, strange forms, or unexpected permission requests.",
  },
  {
    step: "4",
    title: "Separate facts from guesses",
    detail: "Write only what the evidence shows. Mark missing context as unknown instead of assuming.",
  },
  {
    step: "5",
    title: "Choose the safe response",
    detail: "Stop risky actions, use trusted sources, report through the right channel, and ask trusted help when needed.",
  },
];

const evidenceItems = [
  {
    label: "Fake URL",
    value: "https://student-help-center.example-login.training/verify",
    interpretation:
      "The address looks related to school help, but the domain is not the official school portal in the fake scenario.",
    tone: "yellow",
  },
  {
    label: "Browser behavior",
    value: "Redirected twice before showing a login form",
    interpretation:
      "Redirects are not automatically unsafe, but unexpected redirects before a login page deserve caution.",
    tone: "yellow",
  },
  {
    label: "Form request",
    value: "Asks for school email, password, phone number, and recovery code",
    interpretation:
      "This is too much information for a basic resource page. The safest action is to stop and verify.",
    tone: "red",
  },
  {
    label: "Source quality",
    value: "No school branding policy link, no teacher-provided URL, no help desk reference",
    interpretation:
      "The page does not provide enough trusted context to use it for account entry.",
    tone: "red",
  },
  {
    label: "Safe alternative",
    value: "Teacher posted the official portal in the class LMS",
    interpretation:
      "Use the known trusted path instead of the questionable page.",
    tone: "emerald",
  },
];

const quizQuestions = [
  {
    question: "What is the safest first response when a fake research page unexpectedly asks for a school password?",
    choices: [
      "Stop, do not enter credentials, and verify through a trusted school portal or trusted adult.",
      "Enter the password only if the page uses HTTPS.",
      "Ask a classmate to try logging in first.",
      "Refresh the page until the warning disappears.",
    ],
    answer: 0,
    explanation:
      "Students should never enter credentials into an unverified page. The safe response is to stop and verify through trusted channels.",
  },
  {
    question: "Why is HTTPS not enough to prove a webpage is safe?",
    choices: [
      "HTTPS protects the connection, but it does not prove the page is official, honest, or appropriate.",
      "HTTPS means the site is always fake.",
      "HTTPS only matters for videos.",
      "HTTPS removes the need to check the domain.",
    ],
    answer: 0,
    explanation:
      "HTTPS is important, but defenders still check the domain, purpose, forms, redirects, warnings, and trusted source path.",
  },
  {
    question: "Which statement is a confirmed fact from evidence?",
    choices: [
      "The fake page asked for a password and recovery code.",
      "The website owner is definitely a criminal.",
      "Every redirect is dangerous.",
      "The student's device is infected.",
    ],
    answer: 0,
    explanation:
      "A confirmed fact is directly shown by evidence. The other choices jump beyond what the evidence proves.",
  },
  {
    question: "What should a student do with a suspicious download prompt during a school project?",
    choices: [
      "Do not download it; use a trusted source or ask a teacher, guardian, or school technology staff member.",
      "Download it to check whether it is safe.",
      "Share it with friends so they can test it.",
      "Open it only if the filename sounds educational.",
    ],
    answer: 0,
    explanation:
      "Students should not test questionable downloads. Safe analysis uses fake examples and trusted help, not real suspicious files.",
  },
  {
    question: "What makes a web safety summary professional?",
    choices: [
      "It separates facts, unknowns, risk, and a safe next step.",
      "It blames the first person who clicked the page.",
      "It includes instructions for bypassing browser warnings.",
      "It shares private account details to prove the issue.",
    ],
    answer: 0,
    explanation:
      "A professional summary is calm, evidence-based, respectful, privacy-protecting, and focused on safe defensive action.",
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
        href="/high-school"
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        High School Hub
      </Link>
      <Link
        href={moduleTest}
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
      <h2 className="mt-2 text-2xl font-bold text-white">Finish Module B5</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B5.6 Safe Web Research Habits
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
          href={moduleTest}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Go to B5 Module Test
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

function AnalysisWorkflowVisual() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Web Safety Analysis Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        This lab pulls together the full B5 module: browsers, URLs, HTTPS,
        forms, cookies, sessions, downloads, redirects, browser warnings, and
        safe research habits.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {analysisSteps.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 text-lg font-black text-cyan-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FakeBrowserCaseVisual() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Fake Screenshot
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Browser Safety Case Board
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        This is a fake training case. It is not a real website, phishing page,
        download, or school portal. Students should analyze the clues without
        testing real suspicious pages.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="flex flex-col gap-3 border-b border-slate-800 bg-slate-900 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 font-mono text-xs text-yellow-100">
            https://student-help-center.example-login.training/verify
          </div>
        </div>

        <div className="grid gap-5 p-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
              Fake Webpage Preview
            </p>
            <h3 className="mt-3 text-2xl font-black text-white">
              Student Account Verification Required
            </h3>
            <p className="mt-3 text-sm leading-6 text-yellow-50">
              The fake page claims a class research article is locked until the
              student verifies their school email, password, phone number, and
              recovery code.
            </p>
            <div className="mt-5 grid gap-3">
              {["School email", "Password", "Phone number", "Recovery code"].map((field) => (
                <div
                  key={field}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300"
                >
                  {field}: <span className="text-slate-500">Do not enter real information</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Safety Concern
              </p>
              <p className="mt-2 text-sm leading-6">
                The page asks for too much sensitive account information and is
                not reached through the official fake school portal.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer Action
              </p>
              <p className="mt-2 text-sm leading-6">
                Close the page, use the teacher-provided link in the class LMS,
                and ask trusted help if the student already entered information.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                Professional Note
              </p>
              <p className="mt-2 text-sm leading-6">
                The summary should describe evidence, not accuse anyone or test
                the page further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EvidenceGrid() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Evidence Bundle Review
      </h2>
      <div className="mt-6 grid gap-4">
        {evidenceItems.map((item) => (
          <div
            key={item.label}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.75fr_1fr_1.25fr]"
          >
            <div>
              <p className="text-sm text-slate-400">Evidence type</p>
              <h3 className="mt-1 text-lg font-black text-cyan-100">
                {item.label}
              </h3>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-slate-200">
              {item.value}
            </div>
            <div
              className={`rounded-xl border p-4 text-sm leading-6 ${
                item.tone === "emerald"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                  : item.tone === "red"
                    ? "border-red-400/30 bg-red-400/10 text-red-100"
                    : "border-yellow-400/30 bg-yellow-400/10 text-yellow-100"
              }`}
            >
              {item.interpretation}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FactsGapsRecommendations() {
  const cards = [
    {
      title: "Confirmed Facts",
      tone: "emerald",
      items: [
        "The fake page asks for sensitive school account information.",
        "The fake URL is not the teacher-provided portal path.",
        "The fake case includes unexpected redirects before the form appears.",
      ],
    },
    {
      title: "Gaps / Unknowns",
      tone: "yellow",
      items: [
        "We do not know who created the fake page from the evidence shown.",
        "We do not know whether any real student entered information.",
        "We should not test the fake page as if it were real.",
      ],
    },
    {
      title: "Safe Recommendations",
      tone: "cyan",
      items: [
        "Use the official teacher-provided portal link instead.",
        "Report the issue through a trusted school channel.",
        "Ask trusted staff for help if any account information was shared.",
      ],
    },
  ];

  return (
    <section className="grid gap-5 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-2xl border p-5 ${
            card.tone === "emerald"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
              : card.tone === "yellow"
                ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-100"
                : "border-cyan-400/30 bg-cyan-400/10 text-cyan-100"
          }`}
        >
          <h3 className="text-xl font-black text-white">{card.title}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default function WebSafetyAnalysisLabPage() {
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
              Module B5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B5.7 Web Safety Analysis Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice reviewing a fake web safety case by connecting browser
            clues, web address clues, HTTPS limits, form behavior, redirects,
            downloads, and safe research habits into one defensive decision.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B5: Web Basics and Browser Safety"
          lessonTitle="Web Safety Analysis Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can review fake web evidence without clicking or testing real suspicious websites.",
            "I understand that HTTPS, design quality, and urgency are not enough to prove trust.",
            "I am ready to separate facts, gaps, risks, and safe recommendations.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Defenders do not decide from one clue">
          <p className="leading-8">
            A web safety problem rarely has only one clue. A defender may need
            to compare the URL, browser warnings, redirects, certificate context,
            forms, download prompts, cookies, session behavior, user reports,
            and trusted source paths. The goal is not to be dramatic. The goal
            is to protect people while making a careful, evidence-based decision.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety boundary:</span> use only
            the fake evidence on this page. Do not visit, test, scan, submit
            information to, or download from real suspicious pages.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Web decisions affect accounts, devices, data, and trust">
          <p className="leading-8">
            A single unsafe web decision can expose account information, lead to
            unwanted downloads, confuse students with fake resources, or create
            extra work for teachers and technology staff. Safe analysis helps
            students pause before acting, document what happened, and choose a
            trusted path forward.
          </p>
        </SectionCard>

        <AnalysisWorkflowVisual />
        <FakeBrowserCaseVisual />

        <SectionCard eyebrow="Core Concept" title="Use an evidence bundle, not a feeling">
          <p className="leading-8">
            Web safety analysis is stronger when you combine several clues. A
            page can look polished but still ask for risky information. A page
            can use HTTPS but still be the wrong domain. A browser warning may
            be enough to stop, but a professional summary should still explain
            what evidence was observed and what safe action should happen next.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Words for Web Safety Analysis
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

        <EvidenceGrid />
        <FactsGapsRecommendations />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes to avoid in this lab">
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

        <SectionCard eyebrow="Safe Defensive Lab" title="Write a fake web safety triage note">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Student Report
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                A research page asked me to verify my school account
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The student says they were looking for a browser safety article,
                clicked a search result, saw two redirects, and then reached a
                form asking for school email, password, phone number, and a
                recovery code.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Your Defensive Task
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>List three confirmed facts from the fake evidence.</li>
                <li>List two unknowns that need trusted confirmation.</li>
                <li>Write one safe recommendation for the student.</li>
                <li>Explain who should help if information was entered.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Web Safety Review Dashboard"
          subtitle="Training-only dashboard using fake evidence from a fictional web safety case."
          metrics={[
            {
              label: "Evidence items",
              value: "5",
              note: "URL, redirects, form request, source quality, trusted alternative.",
            },
            {
              label: "Risk signals",
              value: "3",
              note: "Sensitive form, wrong trusted path, unexpected redirects.",
            },
            {
              label: "Safe action",
              value: "Stop",
              note: "Do not submit information or test the page further.",
            },
          ]}
        />

        <FakeAlertCard
          title="Sensitive account form on unverified page"
          severity="High"
          time="2:42 PM"
          source="Fake Browser Safety Training"
          details="A fake page that was not reached through the official class portal requested school email, password, phone number, and recovery code before showing a research article."
          recommendation="Do not enter information. Close the page, use the teacher-provided class portal link, and ask a teacher, guardian, or school technology staff member for help if any information was shared."
        />

        <FakeLogPanel
          title="Fake Web Safety Case Logs"
          logs={[
            "14:34:08 SEARCH query='browser safety article for class poster' source='training-browser'",
            "14:35:22 RESULT_OPENED title='Student Help Center Article' domain='example-login.training'",
            "14:35:25 REDIRECT from='/article' to='/verify' status='unexpected'",
            "14:35:30 FORM_DISPLAYED fields='email,password,phone,recovery-code'",
            "14:35:34 USER_ACTION action='stopped before submitting information'",
            "14:36:10 SAFE_PATH selected='teacher-provided LMS resource link'",
            "14:37:02 REPORT_DRAFTED summary='unverified page requested sensitive account details'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What is the safest conclusion?"
          evidence={[
            "The fake page asks for school email, password, phone number, and a recovery code.",
            "The fake page was not reached through the official teacher-provided portal path.",
            "The page appeared after unexpected redirects.",
            "The student has access to a trusted class LMS link as a safer alternative.",
          ]}
          question="Which conclusion is most responsible?"
          options={[
            "The evidence supports stopping, avoiding the form, using the trusted portal, and asking trusted help if information was entered.",
            "The page is automatically safe because it uses HTTPS.",
            "The student should download tools to investigate the page.",
            "The class should share the page so more students can test it.",
          ]}
          bestAnswer={0}
          explanation="The safest conclusion uses the full evidence bundle and chooses a defensive response. It does not rely on HTTPS alone or ask students to test risky content."
        />

        <ScenarioDecisionLab
          title="A classmate says the page might be real"
          scenario="A classmate says the fake verification page might be real because it has a lock icon and looks professional. They want to enter a school email and password to test whether it works."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not enter credentials. Use the teacher-provided portal and ask trusted school staff if the page needs review.",
              outcome:
                "Best defensive choice. It protects the account and uses trusted channels instead of risky testing.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Enter only the school email first because a lock icon means the connection is encrypted.",
              outcome:
                "Caution. Even partial account information should not be shared with an unverified page.",
              tone: "caution",
            },
            {
              label: "Choice C",
              response:
                "Try several fake passwords to see how the page responds.",
              outcome:
                "Risk. Students should not test real or suspicious login pages. This goes outside safe defensive learning.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="B5.7 Defender Checklist"
          items={[
            "I can review a fake web safety case without testing real suspicious pages.",
            "I can explain why HTTPS, design, urgency, or a familiar-looking name is not enough to prove trust.",
            "I can separate confirmed facts from unknowns and guesses.",
            "I can choose safe actions for risky forms, redirects, downloads, and browser warnings.",
            "I can write a professional summary that protects privacy and asks trusted adults, teachers, guardians, or school technology staff for help when needed.",
          ]}
        />

        <MiniQuiz title="B5.7 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a Web Safety Analysis Report"
          prompt="Write a short report for the fake web safety case. Include the situation, three evidence facts, two unknowns, the risk, and the safest recommendation."
          tips={[
            "Use calm language: observed, requested, unclear, recommend.",
            "Do not include real private information, real links, or instructions to test suspicious pages.",
            "End with a trusted-help step for students who feel unsafe or already shared information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Web safety analysis uses multiple clues together, not one clue alone.",
            "HTTPS is important, but it does not prove that a page is official or safe for account entry.",
            "Unexpected redirects, risky forms, suspicious downloads, and browser warnings should make students stop and verify.",
            "Professional summaries separate confirmed facts, gaps, risk, and safe recommendations.",
            "Students should use trusted sources and trusted adults instead of testing real suspicious websites.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}