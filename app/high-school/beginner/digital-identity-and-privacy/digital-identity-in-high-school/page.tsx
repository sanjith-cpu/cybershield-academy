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
const nextLesson = `${modulePath}/personal-data-private-data-and-metadata`;

const vocab = [
  [
    "Digital identity",
    "The collection of accounts, profiles, posts, settings, usernames, school records, and public clues that represent a person online.",
  ],
  [
    "Audience",
    "The people or systems that can view, store, share, or make decisions based on information connected to you.",
  ],
  [
    "Context collapse",
    "When content meant for one audience is seen by another audience, such as classmates, teachers, clubs, colleges, or future employers.",
  ],
  [
    "Reputation signal",
    "A piece of information that shapes how others judge trust, responsibility, professionalism, or safety online.",
  ],
  [
    "Data trail",
    "The pattern of information left behind by accounts, searches, settings, posts, uploads, tags, and interactions.",
  ],
  [
    "Privacy posture",
    "The current strength of a person's privacy habits, settings, and sharing decisions.",
  ],
];

const identityLayers = [
  {
    title: "Accounts",
    detail:
      "School portals, email accounts, club tools, gaming accounts, social media, cloud storage, and learning platforms.",
  },
  {
    title: "Content",
    detail:
      "Posts, comments, bios, profile pictures, shared files, project pages, uploads, and messages.",
  },
  {
    title: "Connections",
    detail:
      "Followers, group memberships, tags, shared documents, team spaces, and people who can connect information together.",
  },
  {
    title: "Signals",
    detail:
      "Tone, consistency, privacy settings, public clues, timestamps, metadata, and professionalism patterns.",
  },
];

const mistakes = [
  "Assuming a post is private forever because it was originally shared with a small audience.",
  "Using the same username, profile picture, or bio everywhere without thinking about cross-account connections.",
  "Posting personal schedules, school details, location clues, or private information without considering who can see it.",
  "Treating privacy settings as permanent instead of reviewing them after app updates or account changes.",
  "Confusing digital identity with only social media; school accounts, cloud files, and public project pages also matter.",
  "Trying to erase a concern alone instead of asking a trusted adult, teacher, guardian, counselor, or school technology staff for help.",
];

const quizQuestions = [
  {
    question: "What is digital identity?",
    choices: [
      "The combined picture created by accounts, content, settings, connections, and online clues connected to a person.",
      "Only a student's school email address.",
      "Only a password used to log in to an account.",
      "A guarantee that online information will stay private forever.",
    ],
    answer: 0,
    explanation:
      "Digital identity is broader than one account. It includes profiles, accounts, content, settings, connections, and clues that can shape how someone is understood online.",
  },
  {
    question: "Which example shows context collapse?",
    choices: [
      "A joke meant for close friends is later seen by a teacher, club advisor, or college reviewer.",
      "A student changes a password after a login alert.",
      "A browser shows a warning before a download.",
      "A file is backed up to cloud storage.",
    ],
    answer: 0,
    explanation:
      "Context collapse happens when information intended for one audience reaches another audience. That is why audience control matters.",
  },
  {
    question: "Which habit best protects a high school student's digital identity?",
    choices: [
      "Review account privacy settings, limit unnecessary personal information, and think about who could view the content later.",
      "Post first and decide later if it was safe.",
      "Use the same public profile details on every platform so accounts are easier to find.",
      "Share school schedules publicly so friends know where to meet.",
    ],
    answer: 0,
    explanation:
      "Strong digital identity habits include audience awareness, privacy reviews, data minimization, and careful sharing choices.",
  },
  {
    question: "Why do usernames and profile pictures matter?",
    choices: [
      "They can connect accounts together and create reputation signals across different platforms.",
      "They have no effect on privacy or reputation.",
      "They automatically hide private data.",
      "They replace the need for account security settings.",
    ],
    answer: 0,
    explanation:
      "Repeated usernames, images, and bios can connect accounts. That can be fine, but students should understand the privacy and reputation effect.",
  },
  {
    question: "What should a student do if a post or account situation feels unsafe or embarrassing?",
    choices: [
      "Ask a trusted adult, guardian, teacher, counselor, or school technology staff member for help instead of handling it alone.",
      "Send the post to more people to ask for opinions.",
      "Try to pressure others into deleting screenshots.",
      "Ignore the situation if it involves school or personal safety.",
    ],
    answer: 0,
    explanation:
      "Students should not handle serious privacy, safety, harassment, or school-related issues alone. Trusted support is the safest path.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B6</h2>
      <div className="mt-5 flex flex-wrap gap-3">
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
          href="/high-school"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          High School Hub
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B6.2 Personal Data, Private Data, and Metadata
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

function IdentityLayerDiagram() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Digital Identity Layer Map
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A high school student's digital identity is not one profile. It is a
        layered picture created by accounts, content, connections, and signals.
        Defenders and responsible users look for how these layers interact.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {identityLayers.map((layer, index) => (
          <div
            key={layer.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-cyan-100">
              {layer.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {layer.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Important idea:</span> one detail may seem
        small by itself, but multiple details can combine into a much clearer
        picture. This is why students should think about patterns, not just
        individual posts.
      </div>
    </section>
  );
}

function FakeProfileReviewBoard() {
  const rows = [
    {
      area: "Profile bio",
      safer: "Lists general interests and school-safe project topics.",
      concern: "Includes grade level, school initials, daily schedule, or personal contact details.",
    },
    {
      area: "Username pattern",
      safer: "Different contexts use appropriate usernames and privacy settings.",
      concern: "Same username links personal, school, gaming, and public accounts together unexpectedly.",
    },
    {
      area: "Shared files",
      safer: "Public portfolio files are intentional and reviewed before sharing.",
      concern: "Private assignments or personal documents are shared with broad public access.",
    },
    {
      area: "Tagged content",
      safer: "Tags and mentions are reviewed and reported if they create a safety issue.",
      concern: "Other people can add context that changes how the student appears online.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Digital Identity Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        This fake review board shows how defenders and responsible students can
        separate safer signals from caution signals without judging a person.
      </p>

      <div className="mt-6 grid gap-4">
        {rows.map((row) => (
          <div
            key={row.area}
            className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.7fr_1fr_1fr]"
          >
            <div>
              <p className="text-sm text-slate-400">Review area</p>
              <h3 className="mt-1 text-lg font-black text-cyan-100">
                {row.area}
              </h3>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer pattern
              </p>
              <p className="mt-2 text-sm">{row.safer}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Caution pattern
              </p>
              <p className="mt-2 text-sm">{row.concern}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AudienceMapVisual() {
  const audiences = [
    "Close friends",
    "Classmates",
    "Teachers and clubs",
    "Family and guardians",
    "Colleges and programs",
    "Future workplaces",
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Model
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Audience Expansion Map
      </h2>
      <p className="mt-3 text-slate-300">
        In high school, a digital identity can move beyond the original
        audience. A responsible user asks, "Who can see this now, and who might
        see it later?"
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        {audiences.map((audience, index) => (
          <div
            key={audience}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 text-center"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <p className="mt-3 text-sm font-bold text-cyan-100">{audience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DigitalIdentityHighSchoolPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.1 Digital Identity in High School
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how accounts, profiles, posts, usernames, tags, files, and
            settings combine into a digital identity. The goal is to build a
            safer, more intentional online presence without sharing unnecessary
            personal information.
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
          lessonTitle="Digital Identity in High School"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that online information can reach more than one audience.",
            "I am ready to use fake examples only and not share real private details.",
            "I can think about privacy and professionalism without judging people unfairly.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Digital Identity Is a Trust Signal"
        >
          <p className="leading-8">
            Cybersecurity is not only about devices and passwords. It is also
            about identity. Schools, clubs, colleges, employers, and online
            communities may form opinions based on the information they can see
            or connect. A strong digital identity shows responsibility,
            consistency, and respect for privacy.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> students should
            not post private information, real schedules, addresses, passwords,
            private messages, or sensitive school details. If something online
            feels unsafe, ask trusted help.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Define digital identity and explain why it matters in high school.",
            "Identify how accounts, content, connections, and settings create a larger online picture.",
            "Choose safer privacy and professionalism habits for public and school-related spaces.",
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
          title="High School Adds New Audiences"
        >
          <p className="leading-8">
            High school students often join clubs, build portfolios, apply for
            programs, communicate with teachers, use school platforms, and
            create public projects. This creates more opportunities and more
            privacy decisions. A digital identity should support your goals
            without exposing unnecessary personal details.
          </p>
        </SectionCard>

        <IdentityLayerDiagram />

        <SectionCard eyebrow="Core Concept" title="Identity Is Built Over Time">
          <p className="leading-8">
            One post, username, or profile does not usually define a person. But
            patterns can create a lasting impression. A student who thinks like
            a defender asks: what information is visible, who can connect it,
            what could be misunderstood, and what settings reduce unnecessary
            exposure?
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Digital Identity Thinking
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

        <FakeProfileReviewBoard />
        <AudienceMapVisual />

        <FakeDashboardCard
          title="Fake Digital Identity Review Dashboard"
          subtitle="Training dashboard using fake data to show how a student can review visibility, not to judge a real person."
          metrics={[
            {
              label: "Public profile fields",
              value: "6",
              note: "Three are useful project details; three should be reviewed for privacy.",
            },
            {
              label: "Shared files",
              value: "12",
              note: "Two public files need access-setting review.",
            },
            {
              label: "Audience settings",
              value: "4",
              note: "Settings differ across school, club, and personal spaces.",
            },
          ]}
        />

        <FakeAlertCard
          title="Public Profile Contains Extra Personal Clues"
          severity="Medium"
          time="9:18 AM"
          source="Fake Privacy Review Training"
          details="A fake student portfolio page includes strong project work, but the bio also includes specific schedule clues, school initials, and a public contact method that was not needed."
          recommendation="Keep the project strengths, remove unnecessary personal details, review audience settings, and ask a trusted adult or teacher before publishing school-related pages."
        />

        <FakeLogPanel
          title="Fake Identity Visibility Log"
          logs={[
            "09:12:04 PROFILE_REVIEW account='student-portfolio.example' status='public'",
            "09:13:22 BIO_CHECK finding='general interests listed' risk='low'",
            "09:14:09 BIO_CHECK finding='specific schedule clue included' risk='medium'",
            "09:15:41 FILE_SHARE item='club-project-draft.pdf' access='anyone-with-link' review='needed'",
            "09:16:30 TAG_REVIEW finding='team photo tag visible' action='review audience'",
            "09:18:02 SAFE_ACTION recommendation='remove unnecessary personal details and ask trusted review before publishing'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should the Student Change Before Publishing?"
          evidence={[
            "The portfolio page shows strong project work and leadership experience.",
            "The bio includes exact after-school meeting days and school initials.",
            "A shared project draft is visible to anyone with the link.",
            "The student wants the page to support future applications.",
          ]}
          question="What is the safest and most professional recommendation?"
          options={[
            "Keep the project work, remove unnecessary personal clues, review file sharing, and ask a trusted adult or teacher to review before publishing.",
            "Delete the entire portfolio and never post anything online.",
            "Add more personal details so the page feels authentic.",
            "Share the page widely before checking settings so more people can give feedback.",
          ]}
          bestAnswer={0}
          explanation="The goal is not to avoid all online presence. The best choice keeps the useful portfolio content while reducing unnecessary privacy and safety exposure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Digital Identity Control"
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
          title="Review a Fake Student Profile"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Profile Snapshot
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Student Builder Portfolio
              </h3>
              <p className="mt-3 text-slate-300">
                The page includes cybersecurity projects, a club role, a public
                email, a profile photo, school initials, and a weekly meeting
                schedule. Some details support the student's goals. Others may
                reveal more than needed.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Keep helpful project descriptions and achievements.</li>
                <li>Remove exact schedule, location, and unnecessary school clues.</li>
                <li>Check whether contact information is appropriate for the audience.</li>
                <li>Review shared files before making the page public.</li>
                <li>Ask a teacher, guardian, or trusted adult to review if unsure.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Club Wants to Publish Your Profile"
          scenario="A school club asks you to submit a short profile for a public webpage. You want to look professional, but the draft includes your full schedule, personal contact information, and a link to a private project draft."
          choices={[
            {
              label: "Choice A",
              response:
                "Submit a revised version with project highlights, safe contact options, and no unnecessary personal details.",
              outcome:
                "Best defensive choice. You still build a positive digital identity while reducing privacy and safety risk.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Submit everything because more details make the profile more complete.",
              outcome:
                "Risky. Extra details can expose schedule, location, and private work beyond the intended audience.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Refuse to have any online presence forever.",
              outcome:
                "Too extreme for most situations. A safer public presence can be useful when it is intentional and reviewed.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          title="Digital Identity Checklist"
          items={[
            "I can explain that digital identity includes accounts, content, connections, settings, and signals.",
            "I can identify when a profile shares more personal information than necessary.",
            "I can explain why different audiences may interpret online content differently.",
            "I can choose safer steps before publishing a school, club, or portfolio page.",
            "I know to ask trusted help when an online identity issue feels unsafe or serious.",
          ]}
        />

        <MiniQuiz
          title="B6.1 Mini Quiz: Digital Identity"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Write a 5-7 sentence digital identity review for a fake student portfolio. Explain what should stay public, what should be removed or made private, and how the student can stay professional while protecting privacy."
          tips={[
            "Separate useful achievements from unnecessary personal clues.",
            "Recommend safer privacy settings or file-sharing settings.",
            "Explain when a trusted adult, teacher, or school technology staff member should help.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Digital identity is the combined picture created by accounts, content, connections, settings, and online clues.",
            "High school adds new audiences, including clubs, teachers, programs, colleges, and future opportunities.",
            "A safer online presence is not about hiding everything; it is about sharing intentionally and minimizing unnecessary personal details.",
            "Privacy settings, usernames, tags, and shared files should be reviewed regularly.",
            "Students should ask trusted adults or school staff for help when online identity concerns feel unsafe or serious.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}