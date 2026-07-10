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
const previousLesson = `${modulePath}/digital-footprints-and-future-readiness`;
const nextLesson = `${modulePath}/privacy-review-lab`;

const vocab = [
  [
    "Data minimization",
    "The practice of collecting, sharing, storing, or requesting only the information needed for a clear purpose.",
  ],
  [
    "Purpose limitation",
    "Using information only for the specific reason it was collected, rather than for unrelated purposes.",
  ],
  [
    "Need-to-know",
    "Giving information only to people or systems that genuinely need it to complete an approved task.",
  ],
  [
    "Retention",
    "The amount of time information is kept before it is deleted, archived, or reviewed.",
  ],
  [
    "Oversharing",
    "Providing more personal, private, or sensitive information than the situation requires.",
  ],
  [
    "Safer alternative",
    "A choice that completes the task while exposing less information, using a smaller audience, or reducing storage time.",
  ],
];

const minimizationSteps = [
  {
    title: "Define the purpose",
    example:
      "Ask what task needs to be completed and why any information is required.",
  },
  {
    title: "Select the minimum",
    example:
      "Choose the smallest amount of information that is enough for the task.",
  },
  {
    title: "Limit the audience",
    example:
      "Share only with the people, groups, or systems that genuinely need access.",
  },
  {
    title: "Review and remove",
    example:
      "Delete, restrict, or update information when it is no longer needed.",
  },
];

const sharingReviewRows = [
  {
    item: "Club sign-up form",
    source: "Requests name, grade, school email, home address, and birthday",
    review:
      "Name, grade, and school email may fit the purpose. Home address and full birthday need stronger justification.",
  },
  {
    item: "Study group message",
    source: "Includes the meeting room and exact home address",
    review:
      "Share only the approved meeting information. Do not include a private home address unless a trusted adult has approved it.",
  },
  {
    item: "Public project page",
    source: "Shows full name, school ID, personal phone number, and project summary",
    review:
      "Keep the project summary, but remove school ID and private contact details.",
  },
  {
    item: "Photo upload",
    source: "Image includes a visible student badge and location details",
    review:
      "Crop or cover unnecessary identifiers before sharing with the approved audience.",
  },
  {
    item: "Old shared document",
    source: "Still accessible to people who no longer need it",
    review:
      "Review permissions and remove outdated access when the task is complete.",
  },
];

const mistakes = [
  "Filling every optional field because a form allows it.",
  "Sharing full dates of birth, exact schedules, private addresses, or personal phone numbers when a smaller detail would work.",
  "Sending the same document to a larger group than necessary.",
  "Leaving old links, folders, or shared files open after the project ends.",
  "Keeping copies of private information longer than needed.",
  "Trying to solve serious privacy exposure alone instead of asking trusted adults, teachers, guardians, counselors, or school technology staff.",
];

const quizQuestions = [
  {
    question: "Which action best demonstrates data minimization?",
    choices: [
      "Provide only the school email needed for a club sign-up.",
      "Add a home address and full birthday even though the form says they are optional.",
      "Post the entire sign-up list publicly.",
      "Keep every copy of the form forever.",
    ],
    answer: 0,
    explanation:
      "Data minimization means providing only the information needed for the task.",
  },
  {
    question: "What does need-to-know access mean?",
    choices: [
      "Only people who require the information for an approved purpose receive it.",
      "Everyone should receive the information just in case.",
      "The information should always be public.",
      "Passwords should be shared with trusted friends.",
    ],
    answer: 0,
    explanation:
      "Need-to-know limits access to people or systems that genuinely require the information.",
  },
  {
    question: "Which choice is the safest alternative for a public project page?",
    choices: [
      "Show the project summary and a school-approved contact method.",
      "Show a school ID, home address, and personal phone number.",
      "Upload private messages as proof of work.",
      "Include exact daily routines so viewers know when to contact the student.",
    ],
    answer: 0,
    explanation:
      "A project page can communicate the work without exposing private identifiers or routine information.",
  },
  {
    question: "Why should old shared files be reviewed?",
    choices: [
      "People may still have access even after the original task is finished.",
      "Old files can never contain private information.",
      "Every old file should automatically be made public.",
      "Reviewing access always deletes the file.",
    ],
    answer: 0,
    explanation:
      "Permissions can remain active longer than intended, so old access should be removed when it is no longer needed.",
  },
  {
    question: "What is the best response when a form requests more private information than its purpose seems to require?",
    choices: [
      "Pause, skip optional fields, ask why the information is needed, and seek trusted help if unsure.",
      "Enter every detail immediately.",
      "Use another person’s private information.",
      "Share the form publicly for advice.",
    ],
    answer: 0,
    explanation:
      "The safest response is to question unnecessary collection, limit what is shared, and ask trusted help when needed.",
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
          Previous: B6.5 Digital Footprints and Future Readiness
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
          Next: B6.7 Privacy Review Lab
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

function DataMinimizationFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Four-Step Data Minimization Process
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Safer sharing begins before information is sent. First identify the
        purpose, then choose the minimum data, limit the audience, and remove
        access when the purpose is complete.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {minimizationSteps.map((point, index) => (
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
        <span className="font-bold">Defender rule:</span> if a smaller amount
        of data, shorter retention period, or narrower audience can complete the
        task, use the safer option.
      </div>
    </section>
  );
}

function FakeSharingPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Safer Sharing Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel shows how students can compare the requested
            information with the real purpose before sharing.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {sharingReviewRows.map((row) => (
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

function SaferSharingBoard() {
  const examples = [
    {
      name: "Forms",
      saferQuestion:
        "Which fields are required for the task, and which fields are optional or unrelated?",
      saferChoice:
        "Complete only the necessary fields and ask trusted help when a request seems excessive.",
    },
    {
      name: "Photos and files",
      saferQuestion:
        "Does the image or document include IDs, addresses, schedules, names, metadata, or background details that are not needed?",
      saferChoice:
        "Crop, cover, remove, or replace unnecessary information before sharing.",
    },
    {
      name: "Messages and groups",
      saferQuestion:
        "Does everyone in this group need the information, or can the audience be smaller?",
      saferChoice:
        "Send the minimum details to the smallest approved audience.",
    },
    {
      name: "Shared links",
      saferQuestion:
        "Who can open the link, how long should access last, and can recipients download or reshare the file?",
      saferChoice:
        "Use restricted access, review permissions, and remove access after the task ends.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Safer Sharing Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Data minimization is a practical habit. Students can use it with forms,
        photos, messages, documents, shared links, group projects, and public
        profiles.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {examples.map((example) => (
          <div
            key={example.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{example.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Ask first
              </p>
              <p className="mt-2 text-sm">{example.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{example.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DataMinimizationSaferSharingPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.6 Data Minimization and Safer Sharing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to reduce unnecessary data exposure by sharing less,
            limiting audiences, reviewing permissions, and removing access when
            information is no longer needed.
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
          lessonTitle="Data Minimization and Safer Sharing"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that not every form field, permission, or audience is necessary.",
            "I can pause before sharing personal or private information.",
            "I will use fake examples only and will not enter real private information into training activities.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Good Defenders Reduce Unnecessary Data"
        >
          <p className="leading-8">
            Organizations reduce risk by collecting less data, limiting access,
            and deleting information when it is no longer needed. Students can
            use the same defensive idea in everyday life. A form, message,
            shared document, photo, or public profile should include only the
            information required for its real purpose.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> do not test real
            suspicious forms, upload private documents, or share real personal
            details during practice. Ask trusted adults, teachers, guardians, or
            school technology staff when a request feels excessive or unsafe.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how data minimization reduces privacy and security risk.",
            "Compare fake sharing choices and identify the smallest amount of information needed.",
            "Review audiences, permissions, files, and old links using a need-to-know approach.",
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
          title="Information Cannot Be Exposed If It Was Never Collected"
        >
          <p className="leading-8">
            Every extra detail creates another item that must be protected,
            stored, shared correctly, and eventually removed. Data minimization
            reduces the number of mistakes that can happen and limits the impact
            if an account, file, message, or service is accessed by the wrong
            person.
          </p>
        </SectionCard>

        <DataMinimizationFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Purpose Should Control the Amount of Data"
        >
          <p className="leading-8">
            The safest question is not “Can I share this?” but “What is the
            smallest amount needed for the approved purpose?” A club form may
            need a school email, but not a home address. A project page may need
            a summary, but not a student ID. A group message may need a meeting
            time, but not everyone’s private schedule.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Data Minimization Thinking
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

        <SaferSharingBoard />
        <FakeSharingPanel />

        <FakeDashboardCard
          title="Fake Data Minimization Dashboard"
          subtitle="Training dashboard using fictional forms, files, and audiences to practice safer sharing decisions."
          metrics={[
            {
              label: "Requested fields",
              value: "12",
              note: "Only 6 appear necessary for the stated purpose.",
            },
            {
              label: "Overbroad links",
              value: "3",
              note: "Old shared files still allow access to unnecessary viewers.",
            },
            {
              label: "Safer alternatives",
              value: "5",
              note: "Smaller audiences and reduced details can complete the same tasks.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unnecessary Private Fields Requested"
          severity="Medium"
          time="10:31 AM"
          source="Fake Form Review Training"
          details="A fictional club sign-up form asks for a student’s full birthday, home address, personal phone number, school email, grade, and emergency contact even though the form is only for receiving meeting updates."
          recommendation="Complete only the fields needed for the approved purpose, pause on unnecessary private requests, and ask a trusted adult or teacher for clarification."
        />

        <FakeLogPanel
          title="Fake Safer Sharing Review Log"
          logs={[
            "10:24:03 FORM_FIELD field='school_email' purpose='meeting_updates' review='necessary'",
            "10:24:41 FORM_FIELD field='grade_level' purpose='club_grouping' review='possibly necessary'",
            "10:25:18 FORM_FIELD field='home_address' purpose='meeting_updates' review='not justified'",
            "10:26:52 SHARED_LINK audience='anyone_with_link' task_status='complete' review='remove broad access'",
            "10:28:36 PHOTO_REVIEW visible_data='student_badge' review='crop or cover before sharing'",
            "10:31:07 SAFE_ACTION recommendation='share minimum data with minimum audience for minimum time'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Sharing Choice Best Uses Data Minimization?"
          evidence={[
            "A fictional club needs to send meeting reminders.",
            "The form requires a school email and grade level.",
            "The form also includes optional fields for home address, personal phone number, and full birthday.",
            "The club advisor says optional fields may be left blank.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "Provide the school email and grade level, leave unrelated optional private fields blank, and ask if anything is unclear.",
            "Fill every field so the form looks complete.",
            "Use another student’s information for the optional fields.",
            "Post the form publicly and ask strangers what to enter.",
          ]}
          bestAnswer={0}
          explanation="The school email and grade level match the stated purpose. Unrelated optional private fields should be left blank unless there is a clear approved reason."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Increase Unnecessary Exposure"
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
          title="Reduce a Fake Sharing Request"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Sharing Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Group Project File Request
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional project folder contains assignment notes, student
                names, personal phone numbers, schedules, draft files, and a
                final presentation. The project is complete, but the folder is
                still shared with every class member and anyone who has the link.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify which files must remain and which can be removed.</li>
                <li>Delete unnecessary private contact and schedule details.</li>
                <li>Keep only the final approved project materials.</li>
                <li>Remove outdated viewers and broad link access.</li>
                <li>Ask the teacher before deleting school-required records.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Photo Includes Unnecessary Personal Details"
          scenario="A fictional student wants to share a project photo. The image also shows a student badge, a classroom schedule, and a personal phone number written on a whiteboard."
          choices={[
            {
              label: "Choice A",
              response:
                "Crop or cover the unnecessary details, verify the audience, and share only the project content.",
              outcome:
                "Best defensive choice. It completes the purpose while minimizing unrelated information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Post the full image publicly because the project is school-related.",
              outcome:
                "Risky. School-related content can still expose private identifiers, routines, and contact information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Share the account password so a friend can edit the post later.",
              outcome:
                "Unsafe. Password sharing creates an additional account-security problem.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Data Minimization and Safer Sharing Checklist"
          items={[
            "I can explain why collecting and sharing less data reduces risk.",
            "I can identify optional or unrelated information in fake forms and profiles.",
            "I can choose a smaller audience, shorter retention period, or safer alternative.",
            "I can review old shared links, folders, photos, and files for unnecessary access.",
            "I know to ask trusted adults, teachers, guardians, counselors, or school staff when a request feels excessive or unsafe.",
          ]}
        />

        <MiniQuiz
          title="B6.6 Mini Quiz: Data Minimization and Safer Sharing"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake data minimization review for a fictional school club or group project. List the information requested, explain which details are necessary, identify what should be removed or limited, and recommend a safer audience and retention period."
          tips={[
            "Use fake names, fake forms, and fake documents only.",
            "Separate required, optional, unrelated, and sensitive information.",
            "End with a clear minimum-data recommendation.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Data minimization means collecting, sharing, and storing only what is needed for a clear purpose.",
            "Need-to-know access limits information to the smallest approved audience.",
            "Optional fields, broad links, old permissions, and unnecessary details increase exposure.",
            "Photos and files should be reviewed for visible identifiers, locations, schedules, and private contact details.",
            "Safer sharing uses the minimum data, minimum audience, and minimum retention time.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}