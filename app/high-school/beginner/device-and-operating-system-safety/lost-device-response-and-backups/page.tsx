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
  "/high-school/beginner/device-and-operating-system-safety";
const previousLesson =
  `${modulePath}/removable-media-and-unknown-devices`;
const nextLesson =
  `${modulePath}/device-hardening-checklist-lab`;

const vocab = [
  [
    "Lost-device response",
    "The approved steps used to protect accounts, data, and access after a device is missing.",
  ],
  [
    "Remote lock",
    "An official feature that can lock a missing device from another trusted device or account.",
  ],
  [
    "Remote erase",
    "An approved recovery action that may remove data from a missing device when authorized and appropriate.",
  ],
  [
    "Protected backup",
    "A trusted copy of important files that can be used for recovery if the original device is lost, damaged, or unavailable.",
  ],
  [
    "Recovery point",
    "The date and time represented by a backup copy.",
  ],
  [
    "Device inventory",
    "A record of important device details such as owner, model, identifier, management status, and support contact.",
  ],
];

const responseStages = [
  {
    title: "Report quickly",
    example:
      "Tell a trusted adult, school administrator, technology team, or account owner as soon as the device is missing.",
  },
  {
    title: "Protect accounts",
    example:
      "Review active sessions, replace exposed credentials if needed, and verify MFA and recovery settings through official services.",
  },
  {
    title: "Use official device tools",
    example:
      "Use approved location, remote lock, lost mode, or erase options only through the trusted device account or organization.",
  },
  {
    title: "Recover safely",
    example:
      "Restore from a protected backup only after account and device risks are contained.",
  },
];

const deviceRows = [
  {
    item: "Missing school laptop",
    source: "Student notices the device is gone after class",
    review:
      "Report immediately to the teacher and school technology staff. Do not search alone in unsafe areas.",
  },
  {
    item: "Personal phone lost",
    source: "Device remains signed in to email and cloud storage",
    review:
      "Use official account tools to lock the device, review sessions, and involve a trusted adult.",
  },
  {
    item: "Recent protected backup",
    source: "Approved backup completed the previous evening",
    review:
      "Keep it unchanged until containment is complete, then use it for trusted recovery if needed.",
  },
  {
    item: "Unknown location message",
    source: "A stranger claims to have found the device and requests a password",
    review:
      "Do not share secrets. Verify through trusted adults, school staff, or official lost-device channels.",
  },
  {
    item: "Remote erase option",
    source: "Authorized account shows the device cannot be recovered safely",
    review:
      "Use only with permission and after confirming backup, ownership, and organizational policy.",
  },
];

const mistakes = [
  "Waiting many hours before reporting a missing device.",
  "Sharing a password, passcode, MFA code, or recovery code with someone who claims to have found the device.",
  "Using an unofficial tracking link sent by a stranger.",
  "Trying to recover files before protecting accounts and sessions.",
  "Using remote erase without confirming ownership, authorization, policy, and backup status.",
  "Assuming a backup is useful without checking when it was last completed.",
];

const quizQuestions = [
  {
    question: "What should happen first when a school laptop is missing?",
    choices: [
      "Report it immediately to a teacher and school technology staff.",
      "Wait until the end of the week.",
      "Post the device password online.",
      "Search unsafe areas alone.",
    ],
    answer: 0,
    explanation:
      "Fast reporting gives authorized staff more time to protect accounts, records, and device access.",
  },
  {
    question: "Why is a protected backup useful?",
    choices: [
      "It can restore important files after the original device is lost, damaged, or unavailable.",
      "It replaces all passwords.",
      "It guarantees the missing device will be returned.",
      "It makes reporting unnecessary.",
    ],
    answer: 0,
    explanation:
      "Backups support recovery, but they do not replace containment, account protection, or reporting.",
  },
  {
    question: "What should a user do if a stranger requests the lost device passcode?",
    choices: [
      "Do not share it; use trusted adults or official recovery channels.",
      "Share it so the stranger can verify ownership.",
      "Send an MFA code too.",
      "Post the passcode publicly.",
    ],
    answer: 0,
    explanation:
      "Device and account secrets must remain private even during recovery.",
  },
  {
    question: "When should remote erase be considered?",
    choices: [
      "Only through an approved account or organization, with authorization and backup considerations.",
      "Immediately on every misplaced device.",
      "Through a random message link.",
      "Before confirming the device belongs to the user.",
    ],
    answer: 0,
    explanation:
      "Remote erase is a serious recovery action that should follow trusted policy and authorization.",
  },
  {
    question: "What should happen before restoring data from a backup?",
    choices: [
      "Contain active account or device risks first.",
      "Share the backup with strangers.",
      "Disable all security settings.",
      "Ignore unknown sessions.",
    ],
    answer: 0,
    explanation:
      "Recovery is safer after current access and account risks are contained.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B10</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B10.5 Removable Media and Unknown Devices
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
          Next: B10.7 Device Hardening Checklist Lab
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

function ResponseFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Lost-Device Response Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong response combines quick reporting, account protection, official
        device tools, and trusted recovery.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {responseStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> protect accounts and
        report quickly before attempting recovery or sharing information with
        anyone who claims to have the device.
      </div>
    </section>
  );
}

function FakeLostDevicePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Lost Device and Backup Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares reporting, account access, official
            device tools, backup readiness, and recovery decisions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {deviceRows.map((row) => (
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

function RecoveryBoard() {
  const areas = [
    {
      name: "Reporting",
      saferQuestion:
        "Who owns or manages the device, and which trusted adult, school office, or technology team must be notified?",
      saferChoice:
        "Report immediately through the approved channel and provide safe facts about when and where the device was last seen.",
    },
    {
      name: "Account protection",
      saferQuestion:
        "Which accounts were signed in, and are there unknown sessions, password exposure, or MFA concerns?",
      saferChoice:
        "Review sessions, replace exposed credentials, and verify MFA and recovery settings through official services.",
    },
    {
      name: "Official device actions",
      saferQuestion:
        "Are trusted location, remote lock, lost mode, or erase options available and authorized?",
      saferChoice:
        "Use only official account or organization tools and follow ownership and policy requirements.",
    },
    {
      name: "Backup recovery",
      saferQuestion:
        "Is there a protected backup, and how recent is the recovery point?",
      saferChoice:
        "Restore only after containment and use the newest trusted backup that meets the recovery need.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Lost-Device Recovery Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong response separates immediate containment from later recovery.
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

export default function LostDeviceResponseBackupsPage() {
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
              Module B10
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.6 Lost Device Response and Backups
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how fast reporting, account protection, official device tools,
            trusted adults, protected backups, and careful recovery planning
            reduce the impact of a missing device.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B10: Device and Operating System Safety"
          lessonTitle="Lost Device Response and Backups"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a missing device may create account, privacy, and data risks.",
            "I will use fictional devices, accounts, locations, backups, sessions, and recovery tools only.",
            "I am ready to separate immediate containment from later recovery.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Missing Device Can Still Hold Active Access"
        >
          <p className="leading-8">
            A lost phone, tablet, or laptop may still contain open sessions,
            saved files, school portals, cloud storage, email, messages, and
            device-management information. Fast reporting gives authorized
            people more time to protect those services.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every device,
            account, location, session, backup, recovery action, and person in
            this lesson is fictional. Never share real passwords, passcodes,
            MFA codes, recovery codes, or private tracking information.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain lost-device reporting, remote lock, remote erase, protected backups, recovery points, and device inventories.",
            "Prioritize account protection, official device actions, trusted reporting, and recovery.",
            "Choose safe responses to missing personal, family, school, and shared devices.",
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
          title="Fast Reporting Can Limit Unauthorized Access"
        >
          <p className="leading-8">
            The device itself is only one part of the problem. A missing device
            may provide access to accounts, files, saved sessions, messages, and
            cloud services. Protecting those connections can be more urgent than
            replacing the physical device.
          </p>
        </SectionCard>

        <ResponseFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Contain First, Recover Second"
        >
          <p className="leading-8">
            Lost-device response begins with reporting and account protection.
            Recovery actions such as restoring files, replacing the device, or
            using a backup should happen after current access risks are reviewed
            and contained.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Lost Devices and Backups
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

        <RecoveryBoard />
        <FakeLostDevicePanel />

        <FakeDashboardCard
          title="Fake Lost Device Response Dashboard"
          subtitle="Training dashboard using fictional reporting, account, session, remote-action, backup, and recovery evidence."
          metrics={[
            {
              label: "Devices reviewed",
              value: "14",
              note: "Fictional phones, tablets, laptops, school devices, and family devices.",
            },
            {
              label: "Immediate actions",
              value: "9",
              note: "Reports, session reviews, credential changes, remote locks, and trusted notifications.",
            },
            {
              label: "Backup-ready devices",
              value: "10",
              note: "Protected backups had recent verified recovery points.",
            },
          ]}
        />

        <FakeAlertCard
          title="School Laptop Missing With Active Cloud Session"
          severity="High"
          time="2:32 PM"
          source="Fake School Device Training"
          details="A fictional student reports that a school laptop is missing and may still be signed in to email, cloud storage, and the school portal."
          recommendation="Notify school staff immediately, protect associated accounts through official services, and allow technology staff to use approved device-management actions."
        />

        <FakeLogPanel
          title="Fake Lost Device Response Log"
          logs={[
            "14:08:17 DEVICE type='school_laptop' status='missing'",
            "14:11:03 REPORT teacher='notified' technology_staff='notified'",
            "14:14:28 ACCOUNT_SESSIONS unknown='false' active='reviewed'",
            "14:18:42 DEVICE_ACTION remote_lock='requested' source='managed_system'",
            "14:23:16 BACKUP last_success='previous_evening' status='protected'",
            "14:32:09 RECOVERY action='pending_containment_completion'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should Happen First?"
          evidence={[
            "A fictional personal phone is missing.",
            "Email and cloud storage may still be signed in.",
            "A stranger sends a message asking for the passcode.",
            "A protected backup from the previous night is available.",
          ]}
          question="What is the safest response?"
          options={[
            "Do not share the passcode. Report the loss, lock the device through the official account, review sessions, and recover later from the trusted backup.",
            "Share the passcode so the stranger can verify ownership.",
            "Restore the backup before reviewing account access.",
            "Use the link sent by the stranger to track the phone.",
          ]}
          bestAnswer={0}
          explanation="Account protection and official device actions come before recovery. The stranger should not receive any secret or trusted access."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Lost-Device Response"
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
          title="Build a Fictional Lost-Device Response Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Device Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Lost Device and Backup Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a missing school laptop, personal
                phone, family tablet, shared camera, and external backup drive.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the owner and management responsibility.</li>
                <li>List the accounts and sessions connected to the device.</li>
                <li>Choose the correct reporting path.</li>
                <li>Review official lock, lost mode, location, or erase options.</li>
                <li>Confirm backup status and recovery point.</li>
                <li>Place containment before restoration.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A School Laptop Is Missing After Class"
          scenario="A fictional student notices that a school-issued laptop is missing and the school portal may still be open."
          choices={[
            {
              label: "Choice A",
              response:
                "Tell the teacher and school technology staff immediately and provide safe facts about when and where it was last seen.",
              outcome:
                "Best defensive choice. Authorized staff can protect the device, account access, and school records.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Wait several days in case the laptop appears.",
              outcome:
                "Risky. Delay gives unauthorized access more time to continue.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the school account password so others can help search.",
              outcome:
                "Unsafe. Account secrets must never be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Stranger Claims to Have Found a Lost Phone"
          scenario="A fictional stranger messages the student and requests the phone passcode before returning the device."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the passcode. Involve a trusted adult and use official lost-device or local return procedures.",
              outcome:
                "Best defensive choice. Recovery should not require sharing secrets with an unverified person.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the passcode to prove ownership.",
              outcome:
                "Risky. The stranger may use the code to access the device.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send an MFA code and recovery code too.",
              outcome:
                "Unsafe. These secrets can expose connected accounts.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Lost Device Response and Backups Checklist"
          items={[
            "I report missing personal, family, school, or shared devices quickly.",
            "I protect connected accounts and review active sessions.",
            "I use only official location, lock, lost mode, or erase tools.",
            "I never share passwords, passcodes, MFA codes, or recovery codes during recovery.",
            "I confirm backup status and recovery point before restoration.",
            "I contain active risks before restoring data or replacing the device.",
          ]}
        />

        <MiniQuiz
          title="B10.6 Mini Quiz: Lost Device Response and Backups"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional lost-device response plan. Include five devices, owner, management status, connected accounts, reporting path, official device actions, backup status, recovery point, and final recovery steps."
          tips={[
            "Use fictional devices, owners, accounts, locations, backups, and recovery tools only.",
            "Do not include real tracking data, passwords, passcodes, MFA codes, or recovery codes.",
            "Clearly separate containment actions from recovery actions.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Missing devices may expose accounts, files, sessions, messages, and cloud services.",
            "Fast reporting helps authorized people protect access and records.",
            "Official remote lock, lost mode, location, and erase tools should be used only through trusted accounts or organizations.",
            "Backups support recovery but do not replace containment.",
            "Recovery secrets should never be shared with someone who claims to have found the device.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}