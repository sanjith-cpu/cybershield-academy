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
const previousLesson = `${modulePath}/downloads-redirects-and-browser-warnings`;
const nextLesson = `${modulePath}/web-safety-analysis-lab`;

const vocab = [
  [
    "Source evaluation",
    "The process of checking whether a web source is trustworthy, relevant, current, and appropriate for the task.",
  ],
  [
    "Search result",
    "A listing shown by a search engine that may include a title, web address, short preview, date, and other clues.",
  ],
  [
    "Credibility clue",
    "A detail that helps you judge whether a source is likely to be reliable, such as author, organization, purpose, date, and evidence.",
  ],
  [
    "Sponsored result",
    "A result or placement that may be paid advertising. It can still be legitimate, but it should not be treated the same as neutral evidence.",
  ],
  [
    "Citation trail",
    "The path of sources, references, and original evidence behind a claim.",
  ],
  [
    "Research boundary",
    "A safety limit that helps students avoid unsafe websites, unknown downloads, private information sharing, or real suspicious links.",
  ],
];

const mistakes = [
  "Using the first search result without checking who made it or why it exists.",
  "Treating professional-looking design as proof that a source is trustworthy.",
  "Downloading files just to access a basic article or image.",
  "Copying claims without checking whether the source gives evidence or cites original information.",
  "Entering personal, school, or account information into unknown sites during research.",
  "Opening suspicious links repeatedly because the assignment feels urgent.",
];

const researchChecks = [
  {
    check: "Who made it?",
    safer: "The author, organization, or publisher is clear and connected to the topic.",
    caution: "The page hides the author, uses a fake-sounding name, or gives no organization details.",
  },
  {
    check: "Why does it exist?",
    safer: "The purpose is to teach, report, document, or provide public information.",
    caution: "The page mainly pressures visitors to click, buy, download, sign in, or share personal data.",
  },
  {
    check: "What evidence supports it?",
    safer: "The source gives dates, references, data, examples, or links to original material.",
    caution: "The page makes big claims without evidence, sources, or context.",
  },
  {
    check: "Is it safe to use?",
    safer: "The site can be read without odd downloads, unnecessary permissions, or private information requests.",
    caution: "The site demands a download, browser permission, account login, or private data for a simple research task.",
  },
];

const searchResultCards = [
  {
    label: "Result A",
    title: "National Student Safety Center: Browser Research Guide",
    url: "https://example.edu/student-research/browser-safety",
    preview:
      "A school-safe guide explaining source checks, citations, privacy, and safe research habits for students.",
    verdict: "Strong option",
    reason:
      "The title matches the task, the purpose is educational, and the page does not pressure downloads or personal information.",
    tone: "emerald",
  },
  {
    label: "Result B",
    title: "FREE Answers Pack - Download Viewer Required!!!",
    url: "http://study-helper-prize.example/download-now",
    preview:
      "Instant report sources, no teacher will know. Install our helper to unlock everything now.",
    verdict: "Avoid",
    reason:
      "The page uses pressure, encourages dishonest behavior, and requires an unnecessary download.",
    tone: "red",
  },
  {
    label: "Result C",
    title: "Blog Post: My Opinion About Online Safety",
    url: "https://personal-example.blog/opinion/browser-safety",
    preview:
      "A personal reflection with no date, no author background, and no source list.",
    verdict: "Use carefully",
    reason:
      "It may be useful for perspective, but it should not be the main evidence source without stronger support.",
    tone: "yellow",
  },
];

const quizQuestions = [
  {
    question: "What is the best first habit when choosing a web source for school research?",
    choices: [
      "Check who made it, why it exists, what evidence it gives, and whether it is safe to use.",
      "Use the first result because search engines always rank the safest source first.",
      "Pick the source with the most exciting title.",
      "Download whatever file the website says is required.",
    ],
    answer: 0,
    explanation:
      "Good research combines credibility checks and safety checks. A source should match the task, provide evidence, and avoid risky requests.",
  },
  {
    question: "Which source is most concerning for a basic school research task?",
    choices: [
      "A page that demands a mystery installer before showing a normal article.",
      "A school library database article with title, author, and date.",
      "A public museum page with references and clear organization information.",
      "A government education page that opens normally in the browser.",
    ],
    answer: 0,
    explanation:
      "A normal article should not usually require a mystery installer. That is a strong signal to stop and ask trusted help.",
  },
  {
    question: "Why should students notice sponsored results?",
    choices: [
      "They may be paid placements, so students should evaluate them carefully instead of treating them as neutral evidence.",
      "They are always unsafe.",
      "They are always the most accurate source.",
      "They do not need citations.",
    ],
    answer: 0,
    explanation:
      "Sponsored does not automatically mean unsafe, but it does mean students should understand the result may have a promotional purpose.",
  },
  {
    question: "A website asks for your school login to view a public article. What should you do?",
    choices: [
      "Stop and verify through a trusted school portal, teacher, guardian, or school technology staff.",
      "Enter the login because the article is needed for homework.",
      "Ask a friend to enter their login first.",
      "Try random passwords until the page opens.",
    ],
    answer: 0,
    explanation:
      "Students should not enter credentials into unknown pages. They should verify through trusted school systems or trusted adults.",
  },
  {
    question: "What is a citation trail?",
    choices: [
      "The path of sources and original evidence behind a claim.",
      "A browser setting that blocks pop-ups.",
      "A type of password manager.",
      "A guarantee that an article is correct.",
    ],
    answer: 0,
    explanation:
      "A citation trail helps students trace where claims came from and whether the evidence is strong enough to use.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B5</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B5.5 Downloads, Redirects, and Browser Warnings
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
          Next: B5.7 Web Safety Analysis Lab
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

function ResearchWorkflowVisual() {
  const steps = [
    {
      title: "Search with purpose",
      detail: "Use specific terms connected to the assignment instead of random clicking.",
    },
    {
      title: "Open carefully",
      detail: "Prefer known, school-safe, official, or clearly educational sources.",
    },
    {
      title: "Evaluate the source",
      detail: "Check author, organization, date, evidence, purpose, and safety requests.",
    },
    {
      title: "Record useful details",
      detail: "Save the title, source name, date, and citation information for later.",
    },
    {
      title: "Stop when unsafe",
      detail: "Avoid unknown downloads, logins, personal data requests, or suspicious prompts.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Safe Research Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A safe research habit is not just about finding information quickly. It
        means moving through the web in a way that protects accounts, devices,
        privacy, and academic honesty.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-cyan-100">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FakeSearchResultsVisual() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Fake Screenshot
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Search Result Triage Board
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        These are fake search results for practice. The point is to evaluate
        clues before clicking, downloading, signing in, or using the source in a
        school project.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-full border border-slate-700 bg-slate-950 px-4 py-1 text-xs text-slate-400">
            search-training.local/results?q=browser+safety+research
          </div>
        </div>

        <div className="grid gap-4 p-5">
          {searchResultCards.map((result) => (
            <div
              key={result.label}
              className={`rounded-2xl border p-5 ${
                result.tone === "emerald"
                  ? "border-emerald-400/30 bg-emerald-400/10"
                  : result.tone === "red"
                    ? "border-red-400/30 bg-red-400/10"
                    : "border-yellow-400/30 bg-yellow-400/10"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                    {result.label}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">
                    {result.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-cyan-200">
                    {result.url}
                  </p>
                </div>
                <span className="rounded-full border border-slate-600 bg-slate-950 px-3 py-1 text-sm font-bold text-slate-100">
                  {result.verdict}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {result.preview}
              </p>
              <p className="mt-3 rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm leading-6 text-slate-300">
                <span className="font-bold text-cyan-100">Reasoning: </span>
                {result.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchChecksTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Four Source and Safety Checks
      </h2>
      <div className="mt-6 grid gap-4">
        {researchChecks.map((item) => (
          <div
            key={item.check}
            className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.65fr_1fr_1fr]"
          >
            <div>
              <p className="text-sm text-slate-400">Research check</p>
              <h3 className="mt-1 text-lg font-black text-cyan-100">
                {item.check}
              </h3>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer clue
              </p>
              <p className="mt-2 text-sm">{item.safer}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Caution clue
              </p>
              <p className="mt-2 text-sm">{item.caution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CitationTrailVisual() {
  const trail = [
    "Search result preview",
    "Article or source page",
    "Named author or organization",
    "Original evidence, data, report, or reference",
    "Student notes and citation",
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Model
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Citation Trail Thinking
      </h2>
      <p className="mt-3 text-slate-300">
        A strong source lets you trace claims back to evidence. If the trail
        disappears, treat the claim more carefully and look for stronger support.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {trail.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <p className="mt-4 text-sm font-semibold text-cyan-100">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SafeWebResearchHabitsPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B5.6 Safe Web Research Habits
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to research online with stronger source judgment, safer
            browsing habits, better citation thinking, and clearer boundaries
            around downloads, logins, permissions, and private information.
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
          lessonTitle="Safe Web Research Habits"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I know that a search result is only a starting point, not automatic proof.",
            "I can pause before downloading files, granting permissions, or entering account information.",
            "I am ready to use fake examples only and avoid testing real suspicious websites.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Research Is Also a Security Skill">
          <p className="leading-8">
            Cybersecurity professionals constantly research alerts, tools,
            policies, vendors, risks, and technical claims. They do not trust
            every result immediately. They compare sources, check evidence,
            protect private information, and avoid risky actions while gathering
            facts.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety rule:</span> if research leads
            to an unexpected download, login request, browser warning, adult or
            disturbing content, or private-data request, stop and ask a trusted
            adult, teacher, guardian, or school technology staff member.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Evaluate search results using source, purpose, evidence, date, and safety clues.",
            "Explain why safe research means avoiding unknown downloads, private data entry, and unnecessary permissions.",
            "Build a simple web research checklist that supports schoolwork and cybersecurity habits.",
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

        <SectionCard eyebrow="Why This Matters" title="Fast Searching Can Create Slow Problems">
          <p className="leading-8">
            Students often research under time pressure. That pressure can make
            risky pages feel tempting: answer packs, fake source generators,
            suspicious downloads, pop-ups, copied claims, or unknown sign-in
            pages. Safe web research protects your device, your accounts, your
            privacy, and the quality of your schoolwork.
          </p>
        </SectionCard>

        <ResearchWorkflowVisual />
        <FakeSearchResultsVisual />

        <SectionCard eyebrow="Core Concept" title="Credibility and Safety Work Together">
          <p className="leading-8">
            A source can be safe to open but weak for evidence. A source can
            look useful but make unsafe requests. Strong web research checks
            both sides: whether the information is trustworthy and whether the
            page behaves safely. A good researcher slows down before trusting,
            downloading, signing in, or copying claims.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Safe Research
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

        <ResearchChecksTable />
        <CitationTrailVisual />

        <FakeDashboardCard
          title="Fake Research Safety Dashboard"
          subtitle="Training view of a fake research session. No real student data, websites, or browsing history are used."
          metrics={[
            {
              label: "Sources reviewed",
              value: "9",
              note: "Three were strong enough for school notes.",
            },
            {
              label: "Downloads avoided",
              value: "2",
              note: "Both were unnecessary for reading a page.",
            },
            {
              label: "Private-data requests",
              value: "1",
              note: "The student stopped and used a trusted source instead.",
            },
          ]}
        />

        <FakeAlertCard
          title="Research Page Requests School Login"
          severity="Medium"
          time="1:18 PM"
          source="Fake Browser Safety Training"
          details="A fake research result opened a page that claimed a public article required a school email and password before viewing. The page was not part of the school portal."
          recommendation="Do not enter credentials. Return to the official school portal, use a trusted library or classroom source, and ask a teacher or school technology staff member if unsure."
        />

        <FakeLogPanel
          title="Fake Research Session Log"
          logs={[
            "13:10:04 SEARCH query='browser privacy research school project' source='student-training-browser'",
            "13:12:21 RESULT_OPENED title='Browser Privacy Guide for Students' action='read only'",
            "13:14:40 SOURCE_CHECK author='organization listed' evidence='references included' status='usable'",
            "13:16:03 RESULT_OPENED title='Unlock Report Sources Free' action='reviewed preview'",
            "13:16:09 DOWNLOAD_PROMPT filename='source-unlocker.zip' action='declined'",
            "13:18:32 LOGIN_PROMPT domain='not-school-portal.example' action='stopped and asked teacher'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Source Should the Student Use?"
          evidence={[
            "Source A clearly lists an educational organization, date, purpose, and references.",
            "Source B promises free answers and requires a download before showing information.",
            "Source C is an opinion blog with no date and no source list.",
            "The assignment asks for reliable information, not just personal opinions.",
          ]}
          question="What is the safest and strongest research decision?"
          options={[
            "Use Source A as the main source and record citation details.",
            "Use Source B because it promises quick answers.",
            "Use Source C as the only source because it is easy to read.",
            "Enter personal information into all three sources to unlock more details.",
          ]}
          bestAnswer={0}
          explanation="Source A has the best combination of credibility clues and safe behavior. Source B uses pressure and a download. Source C may be perspective, but it is weak as main evidence."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Research Safety">
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

        <SectionCard eyebrow="Safe Defensive Lab" title="Build a Safe Research Checklist">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Student Task
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Research Browser Safety for a Class Poster
              </h3>
              <p className="mt-3 text-slate-300">
                The student needs three reliable sources, no downloads, no
                personal information sharing, and citation details for each
                source.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Checklist
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Use specific search terms tied to the assignment.</li>
                <li>Prefer school library, educational, official, or clearly sourced pages.</li>
                <li>Check author, organization, date, purpose, and evidence.</li>
                <li>Avoid unknown downloads, private data requests, and unusual permission prompts.</li>
                <li>Record source details before moving on.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Research Page Looks Helpful but Risky"
          scenario="You find a page that seems to contain exactly what you need for a school project. Before showing the article, it asks you to download a source viewer and enter your school email."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not download or enter credentials; use a trusted source or ask a teacher/school technology staff member.",
              outcome:
                "Best defensive choice. You protect the account and device while still continuing the research safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Download the viewer because the source seems useful for the assignment.",
              outcome:
                "Risky. A normal article should not require an unknown viewer, and testing it on a real device is unsafe.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Enter a school email but not the password, just to see what happens next.",
              outcome:
                "Caution. Unknown pages should not receive school account information. Stop before sharing data.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          title="Safe Web Research Checklist"
          items={[
            "I can evaluate search results before trusting or clicking them.",
            "I can explain why author, organization, date, purpose, and evidence matter.",
            "I can avoid unknown downloads, unnecessary permissions, and private information requests while researching.",
            "I can use citation trail thinking to trace claims back to stronger evidence.",
            "I can stop and ask trusted adults, teachers, guardians, or school technology staff when a research page feels unsafe.",
          ]}
        />

        <MiniQuiz title="B5.6 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a Research Safety Card"
          prompt="Write a one-page research safety card for high school students. It should explain how to choose sources, avoid risky web behavior, and record citation details."
          tips={[
            "Include at least five checks students should complete before using a source.",
            "Mention what students should do if a page asks for downloads, logins, or private information.",
            "Keep the language clear enough for a ninth grader to follow.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A search result is only a starting point, not automatic proof.",
            "Strong sources show clear authorship, purpose, evidence, dates, and references.",
            "Safe research also means avoiding unknown downloads, suspicious logins, unnecessary permissions, and private data sharing.",
            "Citation trails help students trace claims back to stronger evidence.",
            "When a research page feels unsafe, students should stop and ask trusted help instead of testing it.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}