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

const modulePath = "/high-school/beginner/digital-identity-and-privacy";
const previousLesson = `${modulePath}/digital-identity-in-high-school`;
const nextLesson = `${modulePath}/how-apps-and-websites-collect-data`;

const vocab = [
  [
    "Personal data",
    "Information connected to a person, such as a name, username, school role, account activity, interests, or profile details.",
  ],
  [
    "Private data",
    "Information that should be protected more carefully, such as passwords, home address, exact location, private messages, personal documents, or sensitive account details.",
  ],
  [
    "Metadata",
    "Data about data, such as timestamps, file names, device clues, location tags, author names, sharing settings, or document history.",
  ],
  [
    "Sensitive information",
    "Information that could create safety, privacy, identity, reputation, or security risk if exposed to the wrong audience.",
  ],
  [
    "Data minimization",
    "The habit of sharing only what is needed for the purpose and removing details that do not need to be public.",
  ],
  [
    "Access setting",
    "A permission choice that controls who can view, edit, comment on, download, or share a file or account item.",
  ],
];

const dataTypes = [
  {
    title: "Public or low-risk data",
    detail:
      "General project topic, school-safe club role, public portfolio title, or broad interest that is intentionally shared.",
    tone: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  },
  {
    title: "Personal data",
    detail:
      "Username, profile bio, activity history, school-related account name, or information that can connect content to a person.",
    tone: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
  },
  {
    title: "Private data",
    detail:
      "Password, exact schedule, address, phone number, private documents, personal messages, account recovery details, or family information.",
    tone: "border-yellow-400/30 bg-yellow-400/10 text-yellow-50",
  },
  {
    title: "Metadata",
    detail:
      "Timestamp, file author, edit history, location tag, device name, image details, file path, or sharing status that can reveal context.",
    tone: "border-purple-400/30 bg-purple-400/10 text-purple-100",
  },
];

const metadataExamples = [
  {
    item: "Photo upload",
    visible: "The image itself",
    hiddenContext:
      "Possible date, device, location tag, file name, or platform history depending on settings.",
  },
  {
    item: "Shared document",
    visible: "The document text",
    hiddenContext:
      "Author name, edit history, comments, sharing permission, file owner, or previous title.",
  },
  {
    item: "Calendar screenshot",
    visible: "One event or meeting title",
    hiddenContext:
      "Other schedule details, school timing, names, reminders, and private commitments around the event.",
  },
  {
    item: "Profile page",
    visible: "Bio, projects, and links",
    hiddenContext:
      "Cross-account username patterns, public contact methods, tags, linked files, or audience settings.",
  },
];

const mistakes = [
  "Treating metadata as harmless because it is not always obvious on the screen.",
  "Posting screenshots without checking for names, tabs, notifications, locations, or schedule details in the background.",
  "Sharing cloud files with broad access when only a small audience needs to view them.",
  "Confusing personal data with private data and assuming all information needs the same protection level.",
  "Ignoring document history, comments, file titles, and author details before sharing a file publicly.",
  "Trying to fix a serious privacy exposure alone instead of asking trusted adult, teacher, guardian, counselor, or school technology help.",
];

const quizQuestions = [
  {
    question: "What is metadata?",
    choices: [
      "Information about data, such as timestamps, file authors, location tags, edit history, or sharing settings.",
      "Only the main text a person typed into a document.",
      "A password used to unlock an account.",
      "A guarantee that a file is safe to share publicly.",
    ],
    answer: 0,
    explanation:
      "Metadata is data about data. It can reveal context even when the main content seems harmless.",
  },
  {
    question: "Which example is most likely private data?",
    choices: [
      "A password recovery code for a school account.",
      "A general club name listed on a public portfolio.",
      "A broad interest like robotics or cybersecurity.",
      "A public project title reviewed by a teacher.",
    ],
    answer: 0,
    explanation:
      "Password recovery codes and account recovery details are private and should be protected carefully.",
  },
  {
    question: "Why can a screenshot be risky to share?",
    choices: [
      "It may show background details like tabs, names, notifications, schedules, or location clues.",
      "Screenshots never contain metadata or context.",
      "Screenshots automatically remove all personal information.",
      "Screenshots are safer than all other files by default.",
    ],
    answer: 0,
    explanation:
      "Screenshots can accidentally expose surrounding details. Students should inspect the whole image before sharing.",
  },
  {
    question: "What does data minimization mean?",
    choices: [
      "Share only what is needed for the purpose and remove unnecessary personal or private details.",
      "Share everything so people can understand the full story.",
      "Delete all accounts and avoid school tools.",
      "Use the same access setting for every file.",
    ],
    answer: 0,
    explanation:
      "Data minimization reduces exposure by keeping only the necessary information for the intended audience.",
  },
  {
    question: "A student accidentally makes a private school document public. What is the safest next step?",
    choices: [
      "Stop sharing it, ask a trusted adult or school technology staff for help, and review what information was exposed.",
      "Ignore it because public links always disappear quickly.",
      "Share the link with more classmates to ask what they think.",
      "Try to hide the issue from adults and hope nobody notices.",
    ],
    answer: 0,
    explanation:
      "The safest response is to limit access, get trusted help, and review the exposure calmly and responsibly.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B6</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B6.1 Digital Identity in High School
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
          Next: B6.3 How Apps and Websites Collect Data
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

function DataClassificationDiagram() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Data Classification Ladder
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Not every piece of information has the same risk. Cyber defenders sort
        information by sensitivity so they can decide what should be public,
        limited, private, or removed before sharing.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {dataTypes.map((type, index) => (
          <div key={type.title} className={`rounded-2xl border p-5 ${type.tone}`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-xl font-black text-white">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black">{type.title}</h3>
            <p className="mt-3 text-sm leading-6">{type.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> before sharing, ask
        what the information reveals, who needs it, who could misuse it, and
        whether metadata or background details reveal more than intended.
      </div>
    </section>
  );
}

function MetadataInspector() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Metadata Inspector Board
      </h2>
      <p className="mt-3 text-slate-300">
        Metadata often sits around the main content. Students do not need to
        investigate real files here. This fake board shows the kind of context
        defenders think about before information is shared.
      </p>

      <div className="mt-6 grid gap-4">
        {metadataExamples.map((example) => (
          <div
            key={example.item}
            className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.6fr_1fr_1fr]"
          >
            <div>
              <p className="text-sm text-slate-400">Item type</p>
              <h3 className="mt-1 text-lg font-black text-cyan-100">
                {example.item}
              </h3>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                Visible content
              </p>
              <p className="mt-2 text-sm">{example.visible}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Possible hidden context
              </p>
              <p className="mt-2 text-sm">{example.hiddenContext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FakeFileSharingPanel() {
  const rows = [
    {
      file: "club-poster-final.pdf",
      access: "Anyone with link can view",
      decision: "Review before public sharing",
    },
    {
      file: "scholarship-draft-notes.docx",
      access: "Private to owner",
      decision: "Keep private",
    },
    {
      file: "portfolio-project-summary.pdf",
      access: "Public portfolio folder",
      decision: "Acceptable after teacher review",
    },
    {
      file: "team-calendar-screenshot.png",
      access: "Ready to post",
      decision: "Do not post until private schedule details are removed",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Safe Sharing Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This dashboard is fictional. It shows how a student can think about
            file names, access settings, and private context before sharing.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {rows.map((row) => (
          <div
            key={row.file}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[1fr_1fr_1.2fr]"
          >
            <p className="font-bold text-cyan-100">{row.file}</p>
            <p className="text-slate-300">{row.access}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.decision}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PersonalDataPrivateDataMetadataPage() {
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
              Module B6
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.2 Personal Data, Private Data, and Metadata
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to separate everyday personal information from private
            information, and understand why metadata can reveal context even
            when the main content looks safe.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B6: Digital Identity and Privacy"
          lessonTitle="Personal Data, Private Data, and Metadata"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that not all information has the same privacy level.",
            "I will use fake examples only and will not type real passwords, addresses, schedules, or private details.",
            "I am ready to inspect screenshots, files, and posts for extra context before sharing.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Defenders Think About Data Sensitivity"
        >
          <p className="leading-8">
            Cybersecurity teams do not protect every piece of information the
            exact same way. A public project title, a club role, a private
            message, a password reset code, and a photo timestamp all have
            different risk levels. The defender mindset is to classify the data
            before deciding how it should be stored, shared, or protected.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never share real
            passwords, recovery codes, personal documents, exact location, home
            address, private messages, or sensitive school information in a
            practice activity.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain the difference between personal data, private data, and metadata.",
            "Identify hidden context in fake screenshots, files, and profile examples.",
            "Apply data minimization before sharing school, club, or portfolio content.",
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
          title="Small Details Can Combine Into Bigger Clues"
        >
          <p className="leading-8">
            A single detail may not seem serious by itself. But a file name, a
            timestamp, a school logo, a profile bio, and a background calendar
            notification can combine into a bigger picture. Safer sharing means
            checking the main content and the surrounding context before making
            information public.
          </p>
        </SectionCard>

        <DataClassificationDiagram />

        <SectionCard eyebrow="Core Concept" title="Data Has Context">
          <p className="leading-8">
            Personal data connects information to a person. Private data needs
            stronger protection because it could create direct safety, account,
            or identity risk. Metadata may not be the main content, but it can
            reveal when, where, how, by whom, or with what settings something
            was created or shared.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Data Privacy Thinking
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

        <MetadataInspector />
        <FakeFileSharingPanel />

        <FakeDashboardCard
          title="Fake Data Exposure Review Dashboard"
          subtitle="Training dashboard using fictional examples to practice classifying data before sharing."
          metrics={[
            {
              label: "Public-ready items",
              value: "3",
              note: "General project titles and teacher-reviewed summaries.",
            },
            {
              label: "Needs privacy review",
              value: "5",
              note: "Screenshots, file access settings, and document history.",
            },
            {
              label: "Do not share",
              value: "4",
              note: "Recovery codes, private messages, exact schedule, and personal contact details.",
            },
          ]}
        />

        <FakeAlertCard
          title="Screenshot Contains Extra Private Context"
          severity="Medium"
          time="10:06 AM"
          source="Fake Privacy Review Training"
          details="A fake student wants to post a screenshot of a project dashboard, but the browser tabs, notification banner, and file title reveal private school and schedule details."
          recommendation="Crop or recreate the screenshot with fake data, remove private context, review metadata and file access settings, and ask trusted help before publishing school-related material."
        />

        <FakeLogPanel
          title="Fake Metadata Review Log"
          logs={[
            "10:02:11 FILE_CHECK item='portfolio-summary.pdf' author='student display name' review='acceptable after teacher review'",
            "10:03:22 SCREENSHOT_CHECK item='dashboard-image.png' finding='calendar notification visible' risk='medium'",
            "10:04:18 SHARE_CHECK item='club-notes.docx' access='anyone-with-link' review='needed'",
            "10:05:30 IMAGE_CHECK item='team-photo.png' finding='location tag disabled' risk='low'",
            "10:06:44 PRIVATE_DATA_CHECK finding='account recovery code in draft notes' action='do not share'",
            "10:07:19 SAFE_ACTION recommendation='remove private details, narrow file access, use fake data for public examples'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should Be Removed Before Sharing?"
          evidence={[
            "A project screenshot shows the main dashboard clearly.",
            "The top browser tab shows a private school document title.",
            "A notification banner shows a meeting time and a student's first name.",
            "The screenshot will be posted on a public portfolio page.",
          ]}
          question="What is the safest sharing decision?"
          options={[
            "Do not post the screenshot as-is. Recreate it with fake data or crop/remove private context before sharing.",
            "Post it immediately because the main dashboard looks professional.",
            "Ask classmates to inspect the private notification first.",
            "Share the original file publicly so people can zoom in and understand the project better.",
          ]}
          bestAnswer={0}
          explanation="The best choice protects the useful project content while removing private context and metadata clues that do not need to be public."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Expose More Data Than Intended"
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
          eyebrow="Safe Defensive Lab"
          title="Classify a Fake Sharing Situation"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Sharing Request
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Public Portfolio Update
              </h3>
              <p className="mt-3 text-slate-300">
                A student wants to upload a project summary, a dashboard
                screenshot, a team photo, and draft notes. The goal is to show
                learning, but the files include a mixture of public-ready,
                personal, private, and metadata-heavy details.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Classify each item as public, personal, private, or metadata-sensitive.</li>
                <li>Remove exact schedules, personal contact details, recovery details, and private messages.</li>
                <li>Check file access settings before sharing links.</li>
                <li>Use fake data for dashboards, examples, and screenshots.</li>
                <li>Ask a trusted adult, teacher, or school technology staff member if the exposure seems serious.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Friend Wants You to Post a Club Screenshot"
          scenario="A friend sends you a screenshot from a club planning document and asks you to post it to promote an event. The event title is fine, but the screenshot also shows student names, meeting times, and a private document link."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not post it as-is. Ask to make a clean public version with only approved event details.",
              outcome:
                "Best defensive choice. It supports the event while protecting private names, schedules, and document links.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Post it because the event needs attention quickly.",
              outcome:
                "Risky. Speed does not justify exposing private context or internal links.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the screenshot and tell everyone the event cannot be promoted online.",
              outcome:
                "Too extreme. A safer edited or recreated version can promote the event without unnecessary private details.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          title="Data and Metadata Checklist"
          items={[
            "I can explain the difference between personal data, private data, and metadata.",
            "I can identify background details in fake screenshots that should not be public.",
            "I can explain why file access settings matter before sharing links.",
            "I can apply data minimization to public portfolio, school, or club examples.",
            "I know to ask trusted help if private information is exposed or if I am unsure what to do.",
          ]}
        />

        <MiniQuiz
          title="B6.2 Mini Quiz: Data and Metadata"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Write a short data privacy review for a fake student who wants to publish a project page. Identify one piece of public-ready data, one piece of personal data, one piece of private data, and one metadata clue that should be reviewed before publishing."
          tips={[
            "Use fake examples only and do not include real private details.",
            "Explain what should stay, what should be removed, and what should have restricted access.",
            "Mention when a teacher, guardian, or school technology staff member should review the material.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Personal data connects information to a person, while private data needs stronger protection.",
            "Metadata can reveal context such as time, author, location, file history, or sharing settings.",
            "Screenshots and shared files can expose hidden details even when the main content looks safe.",
            "Data minimization means sharing only what is needed for the audience and purpose.",
            "Students should ask trusted help when private information is exposed or when a sharing decision feels unsafe.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}