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
const previousLesson = `${modulePath}/data-minimization-and-safer-sharing`;
const nextLesson = `${modulePath}/module-test`;

const vocab = [
  [
    "Privacy review",
    "A structured check of accounts, audiences, permissions, public content, shared files, and data exposure.",
  ],
  [
    "Exposure",
    "The amount of information visible or available to people, systems, or audiences that may not need it.",
  ],
  [
    "Privacy risk",
    "The chance that information could be misunderstood, copied, shared too widely, misused, or connected to other details.",
  ],
  [
    "Mitigation",
    "A safer action that reduces risk, such as limiting an audience, removing a permission, or deleting unnecessary information.",
  ],
  [
    "Evidence",
    "The fake settings, logs, alerts, profile details, or sharing records used to support a defensive conclusion.",
  ],
  [
    "Review cycle",
    "A repeated schedule for checking privacy settings, old content, permissions, and shared access.",
  ],
];

const reviewStages = [
  {
    title: "Discover",
    example:
      "List the account settings, public details, permissions, tags, shared files, and audiences that need review.",
  },
  {
    title: "Evaluate",
    example:
      "Compare each item with its purpose, sensitivity, audience, and possible future impact.",
  },
  {
    title: "Reduce",
    example:
      "Remove unnecessary data, narrow audiences, turn off unneeded permissions, and correct unsafe defaults.",
  },
  {
    title: "Document",
    example:
      "Record the evidence, decision, safer action, and reason without using real private information.",
  },
];

const caseReviewRows = [
  {
    item: "Public profile biography",
    source: "Includes school, exact practice schedule, and personal phone number",
    review:
      "Remove routine and private contact details. Keep only information that supports the profile’s clear purpose.",
  },
  {
    item: "Default post audience",
    source: "Set to Public",
    review:
      "Change to an approved audience so future posts do not automatically reach more people than intended.",
  },
  {
    item: "Photo permission",
    source: "A study app can access the full photo library",
    review:
      "Limit access to selected photos or deny the permission if the feature does not need it.",
  },
  {
    item: "Old shared folder",
    source: "Anyone with the link can still open completed project files",
    review:
      "Restrict access and remove unnecessary viewers after confirming school retention requirements.",
  },
  {
    item: "Tagged team photo",
    source: "Shows uniforms, a location sign, and several students",
    review:
      "Review consent, audience, location clues, and tagging controls before keeping or sharing it.",
  },
];

const mistakes = [
  "Changing one privacy setting and assuming every other account, post, message, tag, file, and permission is protected.",
  "Making decisions without comparing the setting to the real purpose.",
  "Treating every public detail as equally risky instead of prioritizing by sensitivity and impact.",
  "Deleting school-related information without checking teacher or school requirements.",
  "Writing reports that include real passwords, private messages, addresses, phone numbers, or student records.",
  "Handling serious harassment, impersonation, threats, or privacy exposure alone instead of involving trusted adults or school staff.",
];

const quizQuestions = [
  {
    question: "What should happen first in a privacy review?",
    choices: [
      "Identify the accounts, settings, permissions, audiences, and shared items that need review.",
      "Delete every account immediately.",
      "Share the account password with a friend.",
      "Make all content public for easier inspection.",
    ],
    answer: 0,
    explanation:
      "A structured review begins by identifying the items and evidence that need attention.",
  },
  {
    question: "Which issue should usually receive the highest priority?",
    choices: [
      "A public profile that exposes exact routines and private contact information.",
      "A school-approved project page with no private information.",
      "A private draft that only the student can access.",
      "A profile color that the student no longer likes.",
    ],
    answer: 0,
    explanation:
      "Exact routines and private contact details create stronger personal and physical-safety concerns than low-risk appearance choices.",
  },
  {
    question: "What is the best example of mitigation?",
    choices: [
      "Change a public default audience to approved followers and review old posts.",
      "Ignore the issue because the account is old.",
      "Give more people access so they can help.",
      "Post the evidence publicly.",
    ],
    answer: 0,
    explanation:
      "Mitigation reduces exposure through a clear defensive action.",
  },
  {
    question: "Why should privacy-review decisions be documented?",
    choices: [
      "Documentation explains the evidence, decision, action, and reason clearly.",
      "Documentation guarantees every risk disappears.",
      "Documentation should include real passwords for proof.",
      "Documentation replaces the need for trusted help.",
    ],
    answer: 0,
    explanation:
      "Good documentation supports clear reasoning without exposing real private information.",
  },
  {
    question: "What should a student do when a privacy issue involves serious harassment or threats?",
    choices: [
      "Use platform safety tools, preserve appropriate evidence, and involve trusted adults or school staff.",
      "Investigate the person privately.",
      "Retaliate by posting their private information.",
      "Share account credentials with classmates.",
    ],
    answer: 0,
    explanation:
      "Serious situations require trusted help and safe reporting, not retaliation or private investigation.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B6</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B6.6 Data Minimization and Safer Sharing
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
          Next: Module B6 Test
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

function PrivacyReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Privacy Review Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A good privacy review follows a repeatable process. Students identify
        what is exposed, evaluate the risk, reduce unnecessary access, and
        document the decision using fake evidence only.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {reviewStages.map((point, index) => (
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
        <span className="font-bold">Defender rule:</span> prioritize the
        settings or details that create the greatest exposure, then choose the
        safest action that still supports the approved purpose.
      </div>
    </section>
  );
}

function FakeCasePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Privacy Case Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional case combines settings, permissions, profile details,
            tags, and shared files into one defensive review.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {caseReviewRows.map((row) => (
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

function RiskPriorityBoard() {
  const priorities = [
    {
      name: "High priority",
      saferQuestion:
        "Does the issue reveal private contact information, exact routines, locations, IDs, or unsafe access?",
      saferChoice:
        "Reduce exposure immediately and involve trusted help when the situation is serious.",
    },
    {
      name: "Medium priority",
      saferQuestion:
        "Could the setting, permission, tag, or old link expose more information than the task requires?",
      saferChoice:
        "Narrow the audience, remove unnecessary access, and review similar settings.",
    },
    {
      name: "Low priority",
      saferQuestion:
        "Is the issue mainly about appearance, organization, or a preference with little privacy impact?",
      saferChoice:
        "Document it, but handle higher-risk exposure first.",
    },
    {
      name: "Positive item",
      saferQuestion:
        "Does the content safely show useful skills, accomplishments, or school-approved work?",
      saferChoice:
        "Keep it accurate, remove private details, and use it as a positive professional artifact.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Privacy Risk Priority Board
      </h2>
      <p className="mt-3 text-slate-300">
        Not every issue has the same impact. A strong review prioritizes
        exposure involving private data, routines, locations, broad access, and
        future consequences.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {priorities.map((priority) => (
          <div
            key={priority.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{priority.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{priority.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive action
              </p>
              <p className="mt-2 text-sm">{priority.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PrivacyReviewLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.7 Privacy Review Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply the full Module B6 privacy workflow by reviewing fake account
            settings, digital footprint clues, permissions, audiences, and
            shared files before writing a clear defensive recommendation.
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
          lessonTitle="Privacy Review Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain personal data, private data, metadata, permissions, audiences, and digital footprints.",
            "I can use data minimization to reduce unnecessary sharing.",
            "I will use fake evidence only and will not enter real passwords, private messages, or personal account details.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Privacy Reviews Turn Information Into Action"
        >
          <p className="leading-8">
            Defenders do more than notice a risky setting. They collect
            evidence, compare it with the approved purpose, prioritize the
            greatest risk, choose a mitigation, and document the reason. This
            lab combines the main skills from Module B6 into one safe fictional
            case.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> do not review
            real classmates, private accounts, or suspicious services. Use fake
            examples only and involve trusted adults or school staff when a real
            privacy situation feels serious or unsafe.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Review a complete set of fake privacy evidence using a repeatable workflow.",
            "Prioritize issues based on sensitivity, audience, purpose, and possible impact.",
            "Write a clear defensive recommendation that reduces exposure without using real private data.",
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
          title="One Small Setting Can Affect the Entire Privacy Picture"
        >
          <p className="leading-8">
            A private account can still have public posts. A safe profile can
            still have broad app permissions. A strong project can still reveal
            private contact details. A complete review connects these separate
            clues so the safest action addresses the whole situation instead of
            only one visible symptom.
          </p>
        </SectionCard>

        <PrivacyReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Evidence, Purpose, Risk, and Action Must Connect"
        >
          <p className="leading-8">
            A strong privacy conclusion explains four things: what the evidence
            shows, why the information or access is unnecessary, what risk it
            creates, and what safer action should be taken. Good reasoning is
            specific, calm, defensive, and supported by the fake evidence.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Privacy Review Thinking
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

        <RiskPriorityBoard />
        <FakeCasePanel />

        <FakeDashboardCard
          title="Fake Privacy Case Dashboard"
          subtitle="Training dashboard combining fictional profile, permission, audience, tag, and shared-file evidence."
          metrics={[
            {
              label: "Evidence items",
              value: "10",
              note: "Profile details, permissions, audiences, tags, logs, and shared files.",
            },
            {
              label: "High priority",
              value: "3",
              note: "Exact routine, private contact details, and broad file access need attention.",
            },
            {
              label: "Positive items",
              value: "2",
              note: "School-approved project and club work can remain after privacy review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Privacy Exposures Detected"
          severity="High"
          time="2:18 PM"
          source="Fake Privacy Review Lab"
          details="A fictional student profile exposes a personal phone number and exact practice schedule. New posts default to Public, and a completed project folder remains open to anyone with the link."
          recommendation="Remove private contact and routine details, change the default audience, restrict the old folder, and review related posts and permissions."
        />

        <FakeLogPanel
          title="Fake Privacy Review Evidence Log"
          logs={[
            "14:09:02 PROFILE_FIELD field='personal_phone' visibility='public' priority='high'",
            "14:09:51 PROFILE_FIELD field='practice_schedule' visibility='public' priority='high'",
            "14:11:04 POST_DEFAULT audience='public' review='narrow to approved audience'",
            "14:12:26 APP_PERMISSION permission='full_photo_library' feature='study_timer' review='not justified'",
            "14:14:17 SHARED_FOLDER access='anyone_with_link' task_status='complete' priority='high'",
            "14:16:08 POSITIVE_ARTIFACT type='school_project' privacy='reviewed' status='keep'",
            "14:18:42 SAFE_ACTION recommendation='remove private details, reduce audiences, limit permissions, document changes'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Action Should Happen First?"
          evidence={[
            "A fictional public profile includes a personal phone number and exact weekly practice schedule.",
            "The default audience for new posts is Public.",
            "A completed project folder allows anyone with the link to open it.",
            "A school-approved project page contains no private information.",
          ]}
          question="What is the strongest first priority?"
          options={[
            "Remove the public phone number and exact routine, then continue with audience and shared-file review.",
            "Delete the school-approved project page first.",
            "Make every item public so the review is easier.",
            "Ignore the profile because the project folder is older.",
          ]}
          bestAnswer={0}
          explanation="Public contact and routine information creates immediate personal and physical-safety exposure. After reducing that risk, the reviewer should fix the public default and broad shared-folder access."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken a Privacy Review"
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
          title="Complete the Fictional Privacy Case"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Case File
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                StudentHub Account Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student uses a private account with public post
                defaults, a detailed profile biography, open location sharing,
                an old group folder, broad photo permissions, several tags, and
                a strong school project portfolio.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Lab Instructions
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>List each evidence item and its current audience or access.</li>
                <li>Classify the item as high, medium, low, or positive.</li>
                <li>Explain the purpose and why the current exposure is or is not necessary.</li>
                <li>Recommend one specific defensive action for each risky item.</li>
                <li>Write a final three-sentence privacy summary.</li>
              </ol>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Serious Privacy Issue Appears During the Review"
          scenario="While reviewing the fictional case, the student receives repeated unwanted messages that mention the student’s school routine and exact practice location."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop engaging, use block and report tools, preserve appropriate evidence, and involve trusted adults or school staff.",
              outcome:
                "Best defensive choice. It reduces contact, supports safe reporting, and brings in trusted help for a serious situation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Reply with more personal details to find out what the sender knows.",
              outcome:
                "Unsafe. Responding can reveal more information and increase the risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the sender’s private information publicly as revenge.",
              outcome:
                "Unsafe and unethical. Retaliation can harm others and make the situation worse.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Privacy Review Lab Checklist"
          items={[
            "I can collect and organize fake privacy evidence without using real private information.",
            "I can prioritize risks involving private data, exact routines, location, broad audiences, and unnecessary access.",
            "I can connect evidence, purpose, risk, and mitigation in one clear conclusion.",
            "I can preserve positive school-safe artifacts while removing unnecessary exposure.",
            "I know to involve trusted adults, teachers, guardians, counselors, or school staff when a privacy issue becomes serious.",
          ]}
        />

        <MiniQuiz
          title="B6.7 Mini Quiz: Privacy Review Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Write a one-page fake privacy review report for the fictional StudentHub case. Include an evidence summary, risk priorities, recommended mitigations, positive items to keep, and a short review schedule."
          tips={[
            "Use fake names, fake settings, and fake evidence only.",
            "Explain why each recommendation matches the evidence and purpose.",
            "End with a monthly or quarterly privacy-review cycle.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A complete privacy review connects settings, audiences, permissions, digital footprints, and shared access.",
            "High-priority risks often involve private contact details, exact routines, locations, broad audiences, or open files.",
            "Strong recommendations explain the evidence, purpose, risk, action, and reason.",
            "Positive school-safe work can remain after unnecessary private details are removed.",
            "Serious privacy issues require platform safety tools and trusted help, not retaliation or private investigation.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}