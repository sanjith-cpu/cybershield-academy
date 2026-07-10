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
const previousLesson = `${modulePath}/privacy-settings-and-audience-control`;
const nextLesson = `${modulePath}/data-minimization-and-safer-sharing`;

const vocab = [
  [
    "Digital footprint",
    "The collection of information, activity, content, and traces connected to a person’s use of digital systems.",
  ],
  [
    "Active footprint",
    "Information a person intentionally creates or shares, such as posts, comments, uploads, profiles, forms, or messages.",
  ],
  [
    "Passive footprint",
    "Information created through normal use, such as timestamps, device details, usage patterns, cookies, or service logs.",
  ],
  [
    "Context collapse",
    "A situation where content intended for one audience is later seen by a different audience that may interpret it differently.",
  ],
  [
    "Professional presence",
    "The public-facing digital identity a person builds through portfolios, school projects, accomplishments, profiles, and communication.",
  ],
  [
    "Future readiness",
    "Preparing digital content and habits so they support future school, scholarship, work, leadership, and community opportunities.",
  ],
];

const footprintLayers = [
  {
    title: "What you create",
    example:
      "Posts, videos, comments, profile details, usernames, uploads, forms, messages, and project work.",
  },
  {
    title: "What others connect",
    example:
      "Tags, mentions, shared photos, group posts, comments, recommendations, and reposted content.",
  },
  {
    title: "What systems record",
    example:
      "Login times, device details, cookies, activity history, account changes, and service logs.",
  },
  {
    title: "What future audiences see",
    example:
      "Public profiles, old content, search results, portfolios, school work, and information shared by others.",
  },
];

const footprintReviewRows = [
  {
    item: "Old public post",
    source: "A two-year-old joke visible to everyone",
    review:
      "Review the audience and context. Remove or restrict it if it no longer represents the student appropriately.",
  },
  {
    item: "School project",
    source: "A public cybersecurity presentation",
    review:
      "Potentially positive. Remove private details and present the work clearly as part of a professional portfolio.",
  },
  {
    item: "Tagged photo",
    source: "Posted by another student",
    review:
      "Check consent, location clues, visible IDs, and the audience. Remove the tag or ask for changes when needed.",
  },
  {
    item: "Username",
    source: "Reused across several public platforms",
    review:
      "Consider whether reuse makes unrelated accounts easier to connect. Use purpose-based usernames when appropriate.",
  },
  {
    item: "Profile biography",
    source: "Includes school, exact schedule, and personal contact details",
    review:
      "Reduce unnecessary information. Keep only details that support the profile’s clear purpose.",
  },
];

const mistakes = [
  "Assuming old posts no longer matter because they were created months or years ago.",
  "Believing deleted content is guaranteed to disappear from screenshots, archives, backups, or other people’s devices.",
  "Using the same public username everywhere without considering how accounts can be connected.",
  "Posting exact schedules, locations, school IDs, travel details, or private contact information to build a more complete profile.",
  "Treating every audience as if it understands the same joke, tone, or context.",
  "Trying to erase or investigate serious online problems alone instead of asking trusted adults, teachers, guardians, counselors, or school technology staff.",
];

const quizQuestions = [
  {
    question: "Which is the best example of an active digital footprint?",
    choices: [
      "A student posts a public comment on a school club page.",
      "A service records a login timestamp automatically.",
      "A browser stores a technical cookie for a session.",
      "A device reports its screen size to a website.",
    ],
    answer: 0,
    explanation:
      "An active footprint is created intentionally by the user. Posting a comment is a direct action.",
  },
  {
    question: "Why can context collapse create problems?",
    choices: [
      "Content meant for one audience may be seen and interpreted differently by another audience.",
      "It guarantees that every audience understands the creator’s intention.",
      "It automatically removes old content from search results.",
      "It prevents anyone from taking screenshots.",
    ],
    answer: 0,
    explanation:
      "Different audiences may not share the same background, expectations, or understanding of the original context.",
  },
  {
    question: "Which action best supports future readiness?",
    choices: [
      "Review old public content and build a clean portfolio of school-safe work.",
      "Add exact daily schedules to a public biography.",
      "Reuse the same password for every account.",
      "Accept every follow request to increase visibility.",
    ],
    answer: 0,
    explanation:
      "Future readiness combines safer privacy habits with a positive, accurate professional presence.",
  },
  {
    question: "What should a student do after finding an unwanted tagged photo?",
    choices: [
      "Review the audience, remove the tag when possible, and ask trusted help if the situation is serious.",
      "Share the account password so someone else can fix it.",
      "Post private information about the person who uploaded it.",
      "Ignore it because tags never affect digital identity.",
    ],
    answer: 0,
    explanation:
      "The safest response uses platform controls, respectful communication, documentation when appropriate, and trusted help.",
  },
  {
    question: "Which statement about deletion is most accurate?",
    choices: [
      "Deleting content can reduce exposure, but copies or screenshots may still exist.",
      "Deleting content guarantees that no copy exists anywhere.",
      "Deleted content automatically removes all related metadata from every system.",
      "Only public content can ever be copied.",
    ],
    answer: 0,
    explanation:
      "Deletion is useful, but students should not assume it can erase every copy, screenshot, backup, or reshare.",
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
          Previous: B6.4 Privacy Settings and Audience Control
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
          Next: B6.6 Data Minimization and Safer Sharing
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

function DigitalFootprintFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        How a Digital Footprint Grows
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A digital footprint is larger than public posts. It can include content
        created by the student, information added by other people, technical
        records created by systems, and material later viewed by new audiences.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {footprintLayers.map((point, index) => (
          <div
            key={point.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {point.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> review what is public,
        remove unnecessary exposure, and build a positive professional presence
        with school-safe work that accurately represents your skills and values.
      </div>
    </section>
  );
}

function FakeFutureReadinessPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Future Readiness Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel shows how students can review digital
            footprint items without searching for or exposing real private
            account information.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {footprintReviewRows.map((row) => (
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

function ReputationReviewBoard() {
  const reviewAreas = [
    {
      name: "Search and profiles",
      saferQuestion:
        "What would a teacher, coach, scholarship reviewer, or future teammate understand from this public information?",
      saferChoice:
        "Keep public profiles accurate, school-appropriate, and limited to information that supports a clear purpose.",
    },
    {
      name: "Old content",
      saferQuestion:
        "Does this post still represent the student appropriately, and is the audience still correct?",
      saferChoice:
        "Remove, archive, or restrict unnecessary content and review similar posts.",
    },
    {
      name: "Tags and shared media",
      saferQuestion:
        "Did everyone agree to the post, and does the image reveal private details, IDs, locations, or schedules?",
      saferChoice:
        "Use tag review, request changes respectfully, and ask trusted help for serious issues.",
    },
    {
      name: "Positive presence",
      saferQuestion:
        "Does the public footprint show useful skills, responsibility, projects, or community contributions?",
      saferChoice:
        "Build a small professional portfolio using fake or school-approved examples and no private information.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Future Readiness Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Future readiness is not about creating a perfect image. It is about
        keeping public information accurate, appropriate, limited, and aligned
        with the student’s real goals and accomplishments.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reviewAreas.map((area) => (
          <div
            key={area.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Ask first
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DigitalFootprintsFutureReadinessPage() {
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
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.5 Digital Footprints and Future Readiness
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how digital footprints grow, how old content can reach new
            audiences, and how students can build a safer, accurate, and
            professional online presence for future opportunities.
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
          lessonTitle="Digital Footprints and Future Readiness"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that digital footprints include more than public posts.",
            "I know that other people can add tags, photos, comments, and context to an online identity.",
            "I will use fake examples only and will not search for or expose real private student information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Digital Identity Can Outlast the Original Moment"
        >
          <p className="leading-8">
            Cybersecurity professionals think about the full information
            lifecycle: how data is created, stored, shared, copied, reviewed,
            and eventually removed. Digital footprints work the same way. A
            post created for one moment may later be viewed by a teacher,
            teammate, scholarship reviewer, employer, or community leader who
            does not know the original context.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> do not search
            for, collect, or share private information about classmates or real
            people. Use fake examples and ask trusted adults or school staff
            when a real situation feels serious or unsafe.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Distinguish between active, passive, and connected parts of a digital footprint.",
            "Review fake public content and identify items that may create unnecessary future risk.",
            "Plan a positive professional presence using school-safe projects, accomplishments, and responsible communication.",
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
          title="Future Audiences May See a Different Story"
        >
          <p className="leading-8">
            A username, old comment, tagged image, public biography, school
            project, or club post can become part of a larger public story.
            Future readiness means reducing unnecessary exposure while building
            an accurate record of positive work, learning, leadership, and
            responsibility.
          </p>
        </SectionCard>

        <DigitalFootprintFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="A Digital Footprint Is a Collection, Not One Post"
        >
          <p className="leading-8">
            Digital identity is built from many small pieces. Some are created
            directly by the user, some are added by other people, and some are
            recorded automatically by systems. The safest approach is regular
            review: check what is public, correct inaccurate information,
            remove unnecessary details, and strengthen the positive parts that
            represent real skills and values.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Digital Footprint Thinking
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

        <ReputationReviewBoard />
        <FakeFutureReadinessPanel />

        <FakeDashboardCard
          title="Fake Digital Footprint Dashboard"
          subtitle="Training dashboard using fictional public information to practice future-readiness decisions."
          metrics={[
            {
              label: "Public items",
              value: "8",
              note: "Posts, profiles, tags, and project pages need review.",
            },
            {
              label: "Needs attention",
              value: "3",
              note: "An old post, reused username, and detailed biography create unnecessary exposure.",
            },
            {
              label: "Positive artifacts",
              value: "4",
              note: "School projects and club work can support a professional presence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Public Profile Reveals Routine Information"
          severity="Medium"
          time="3:26 PM"
          source="Fake Future Readiness Training"
          details="A fictional public profile lists the student’s school, exact after-school schedule, activity location, and personal contact information."
          recommendation="Remove unnecessary schedule, location, and contact details. Keep only information that supports the profile’s clear purpose."
        />

        <FakeLogPanel
          title="Fake Digital Footprint Review Log"
          logs={[
            "15:19:04 PUBLIC_PROFILE field='school_name' review='consider purpose and audience'",
            "15:19:48 PUBLIC_PROFILE field='exact_schedule' review='remove unnecessary routine information'",
            "15:20:37 OLD_POST age='2_years' audience='public' review='check context and restrict if needed'",
            "15:22:15 TAGGED_PHOTO location='visible' consent='not_confirmed' review='request change or remove tag'",
            "15:24:03 PORTFOLIO_ITEM type='school_project' privacy='reviewed' status='positive artifact'",
            "15:26:11 SAFE_ACTION recommendation='reduce exposure and strengthen accurate professional content'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Item Creates the Greatest Future-Readiness Concern?"
          evidence={[
            "A fictional student has a public cybersecurity project page with no private information.",
            "The student’s biography includes an exact weekly schedule and personal phone number.",
            "A club page lists the student’s first name and role with school approval.",
            "An old post is limited to approved friends.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The public biography needs immediate review because exact routines and private contact details create unnecessary exposure.",
            "The school project should be deleted because public work is always unsafe.",
            "The club role proves every other profile detail is safe.",
            "The friends-only post should automatically be made public.",
          ]}
          bestAnswer={0}
          explanation="The exact schedule and private contact details do not support a normal public profile purpose and create unnecessary personal and physical-safety exposure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Can Harm Future Readiness"
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
          title="Build a Fake Digital Footprint Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Student Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Scholarship Readiness Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student has an old public joke, a detailed profile
                biography, several tagged team photos, a strong science project,
                and a school club leadership page. The student wants the public
                footprint to be safer and more accurate before applying for a
                scholarship.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>List public, limited, and private footprint items.</li>
                <li>Remove or restrict unnecessary personal details.</li>
                <li>Review old posts, tags, usernames, and shared photos.</li>
                <li>Keep accurate positive artifacts that show real work.</li>
                <li>Ask trusted help when a serious item cannot be removed safely.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Old Post Appears Before an Application"
          scenario="A fictional student finds an old public post that may be misunderstood by a scholarship reviewer. The post includes no threat or illegal content, but it no longer represents the student’s current judgment."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict or remove the post, review similar content, and strengthen the profile with accurate school-safe work.",
              outcome:
                "Best defensive choice. It reduces unnecessary exposure and builds a more accurate current presence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore it because old content can never affect future audiences.",
              outcome:
                "Risky. Old public content may still appear in searches, screenshots, shares, or profile reviews.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post private information about other students to distract attention.",
              outcome:
                "Unsafe and unethical. Never expose other people’s information to manage a reputation concern.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Digital Footprint and Future Readiness Checklist"
          items={[
            "I can explain active, passive, and connected parts of a digital footprint.",
            "I can review old posts, tags, usernames, profiles, and public project pages.",
            "I understand that deletion may reduce exposure without guaranteeing every copy is gone.",
            "I can build a positive professional presence using accurate school-safe work.",
            "I know to ask trusted adults, teachers, guardians, counselors, or school staff for help with serious online problems.",
          ]}
        />

        <MiniQuiz
          title="B6.5 Mini Quiz: Digital Footprints and Future Readiness"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake digital footprint review for a fictional high school student. Separate active, passive, and connected footprint items. Identify what should be removed, restricted, corrected, or kept as a positive professional artifact."
          tips={[
            "Use fake usernames, fake posts, and fake profile details only.",
            "Explain the audience, risk, and purpose of each item.",
            "End with a three-step monthly future-readiness routine.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Digital footprints include intentional content, automatic records, and information connected by other people.",
            "Old content may reach new audiences that do not understand the original context.",
            "Deleting or restricting content can reduce exposure, but copies may still exist.",
            "Future readiness combines privacy review with accurate positive school-safe work.",
            "Serious online problems should be handled with trusted help, not retaliation or private investigation.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}