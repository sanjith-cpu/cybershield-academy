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
  "/high-school/beginner/phishing-and-social-engineering-defense/module-test";
const nextLesson =
  `${modulePath}/operating-system-updates-and-patch-basics`;

const vocab = [
  [
    "Screen lock",
    "A device control that requires an approved password, passcode, biometric, or other trusted method before access is restored.",
  ],
  [
    "Automatic lock",
    "A setting that locks a device after a period of inactivity.",
  ],
  [
    "Shoulder surfing",
    "Watching someone enter a password, passcode, or view private information without permission.",
  ],
  [
    "Session",
    "The period during which a user is signed in and actively using a device or service.",
  ],
  [
    "Shared device",
    "A computer, tablet, or other system used by more than one authorized person.",
  ],
  [
    "Privacy screen awareness",
    "Positioning and using a device so nearby people cannot easily view private, school, or account information.",
  ],
];

const lockStages = [
  {
    title: "Control access",
    example:
      "Use a strong device lock and keep the passcode or password private.",
  },
  {
    title: "Lock automatically",
    example:
      "Set a reasonable inactivity timeout so an unattended device does not remain open.",
  },
  {
    title: "Protect the screen",
    example:
      "Position the device carefully and avoid displaying private information in crowded or public areas.",
  },
  {
    title: "End the session",
    example:
      "Lock or sign out before walking away, lending the device, or finishing work on a shared system.",
  },
];

const deviceRows = [
  {
    item: "Unlocked laptop",
    source: "Student leaves a school laptop open during lunch",
    review:
      "Lock the screen before leaving so another person cannot access the session.",
  },
  {
    item: "Long timeout",
    source: "Device locks only after thirty minutes of inactivity",
    review:
      "Use a shorter approved timeout that balances security and usability.",
  },
  {
    item: "Visible passcode",
    source: "Passcode is entered while several people are watching",
    review:
      "Shield the screen or keypad and enter the code privately.",
  },
  {
    item: "Shared computer",
    source: "Previous user’s account is still signed in",
    review:
      "Do not explore the account. Sign out if appropriate and report the issue.",
  },
  {
    item: "Public display",
    source: "Private school information is visible in a crowded area",
    review:
      "Reposition the screen, close sensitive content, or move to a more private location.",
  },
];

const mistakes = [
  "Walking away from a device without locking the screen.",
  "Using a simple device passcode that other people can easily guess.",
  "Sharing a device password or passcode with friends.",
  "Entering a passcode where nearby people can watch.",
  "Leaving personal or school information open on a shared computer.",
  "Exploring another person’s account when a device was left unlocked.",
];

const quizQuestions = [
  {
    question: "What is the main purpose of a screen lock?",
    choices: [
      "To prevent unauthorized access when the device is not being actively used.",
      "To make the battery charge faster.",
      "To remove the need for account passwords.",
      "To replace software updates.",
    ],
    answer: 0,
    explanation:
      "A screen lock protects the active device session from unauthorized access.",
  },
  {
    question: "What should a student do before walking away from a laptop?",
    choices: [
      "Lock the screen.",
      "Leave every account open.",
      "Share the passcode with a friend.",
      "Disable automatic locking.",
    ],
    answer: 0,
    explanation:
      "Locking the screen immediately protects the active session while the student is away.",
  },
  {
    question: "What is shoulder surfing?",
    choices: [
      "Watching someone enter a password or view private information.",
      "Updating a device through official settings.",
      "Creating a protected backup.",
      "Using a trusted school portal.",
    ],
    answer: 0,
    explanation:
      "Shoulder surfing is observing sensitive information without permission.",
  },
  {
    question: "What should happen if another user’s account is open on a shared computer?",
    choices: [
      "Do not explore it; sign out if appropriate and report the issue.",
      "Read the messages to identify the owner.",
      "Change the account password.",
      "Save copies of private files.",
    ],
    answer: 0,
    explanation:
      "The safest response protects privacy without accessing another person’s information.",
  },
  {
    question: "Why is automatic locking useful?",
    choices: [
      "It protects the device if the user forgets to lock it manually.",
      "It makes every password unnecessary.",
      "It prevents all phishing.",
      "It permanently deletes open files.",
    ],
    answer: 0,
    explanation:
      "Automatic locking adds a backup layer when a user forgets to lock the screen.",
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
          Previous: B9 Module Test
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
          Next: B10.2 Operating System Updates and Patch Basics
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

function LockFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Device Access Protection Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong device privacy combines access control, automatic locking,
        careful screen use, and responsible session handling.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {lockStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> lock the screen before
        leaving the device, even for a short time.
      </div>
    </section>
  );
}

function FakeDevicePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Device Lock and Privacy Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares screen-lock, timeout, passcode,
            shared-device, and privacy situations.
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

function PrivacyBoard() {
  const areas = [
    {
      name: "Device lock",
      saferQuestion:
        "Does the device require a strong approved method before access is restored?",
      saferChoice:
        "Use a strong passcode or password and approved biometric options where permitted.",
    },
    {
      name: "Automatic timeout",
      saferQuestion:
        "How long can the device remain unattended before it locks automatically?",
      saferChoice:
        "Use a reasonably short approved timeout and lock manually before leaving.",
    },
    {
      name: "Screen visibility",
      saferQuestion:
        "Can nearby people see private messages, grades, account information, or passcodes?",
      saferChoice:
        "Reposition the screen, close sensitive content, and shield passcode entry.",
    },
    {
      name: "Shared-device session",
      saferQuestion:
        "Are personal accounts, files, or browser sessions still open after use?",
      saferChoice:
        "Sign out, close sensitive content, and follow the approved shared-device process.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Screen Privacy and Access Board
      </h2>
      <p className="mt-3 text-slate-300">
        Device safety depends on both settings and user behavior.
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

export default function DeviceLocksScreenPrivacyPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.1 Device Locks and Screen Privacy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how screen locks, automatic locking, careful passcode entry,
            privacy awareness, and responsible shared-device habits protect
            accounts, files, schoolwork, and personal information.
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
          lessonTitle="Device Locks and Screen Privacy"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a device lock protects the active device session.",
            "I will use fictional devices, settings, accounts, passcodes, and alerts only.",
            "I am ready to review screen-lock, timeout, privacy, and shared-device decisions.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Unlocked Device Can Expose Every Open Account"
        >
          <p className="leading-8">
            A device may already contain open email, school portals, cloud
            storage, documents, messages, and saved sessions. Locking the screen
            protects all of those services at once when the user steps away.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every device,
            account, passcode, user, setting, and shared-computer scenario in
            this lesson is fictional. Never access another person’s account.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how device locks and automatic locking protect active sessions.",
            "Recognize shoulder surfing, visible screens, weak timeouts, and shared-device privacy risks.",
            "Choose safe lock, sign-out, passcode, and screen-positioning habits.",
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
          title="Physical Access Can Become Account Access"
        >
          <p className="leading-8">
            Even strong online passwords cannot help if a logged-in device is
            left open. A nearby person may view files, send messages, change
            settings, or access cloud services through the active session.
          </p>
        </SectionCard>

        <LockFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Locking the Screen Protects the Session"
        >
          <p className="leading-8">
            A screen lock does not replace account security, but it adds an
            important layer between the physical device and every service already
            open on it. Manual locking and automatic locking work best together.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Device Access and Privacy
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

        <PrivacyBoard />
        <FakeDevicePanel />

        <FakeDashboardCard
          title="Fake Device Privacy Dashboard"
          subtitle="Training dashboard using fictional lock, timeout, screen-visibility, and shared-device evidence."
          metrics={[
            {
              label: "Devices reviewed",
              value: "18",
              note: "Fictional laptops, tablets, phones, and shared computers.",
            },
            {
              label: "Lock issues",
              value: "9",
              note: "Weak passcodes, long timeouts, unlocked sessions, and visible screens.",
            },
            {
              label: "Safer settings",
              value: "13",
              note: "Stronger locks, shorter approved timeouts, sign-outs, and privacy improvements.",
            },
          ]}
        />

        <FakeAlertCard
          title="Shared Laptop Left Unlocked With School Portal Open"
          severity="Medium"
          time="12:18 PM"
          source="Fake School Device Training"
          details="A fictional student leaves a shared laptop unattended while email, cloud storage, and the school portal remain open."
          recommendation="Lock the device immediately, close sensitive content, and follow the approved shared-device sign-out process."
        />

        <FakeLogPanel
          title="Fake Screen Privacy Review Log"
          logs={[
            "12:04:11 DEVICE type='shared_laptop' user_session='active'",
            "12:06:33 AUTO_LOCK timeout='30_minutes' approved='false'",
            "12:09:05 SCREEN content='school_portal_and_email' visibility='public_area'",
            "12:11:47 USER action='walked_away' manual_lock='false'",
            "12:14:29 SAFE_ACTION screen='locked' sensitive_windows='closed'",
            "12:18:02 RECOMMENDATION timeout='shorter_approved_value' sign_out='after_use'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Actions Best Protect This Device?"
          evidence={[
            "A fictional laptop is used in a crowded library.",
            "The automatic lock timeout is thirty minutes.",
            "The student leaves the school portal and email open.",
            "Nearby people can see the screen and passcode entry.",
          ]}
          question="What is the safest response?"
          options={[
            "Shorten the approved timeout, shield passcode entry, close sensitive content, and lock the screen before leaving.",
            "Share the passcode with a friend for backup.",
            "Disable automatic locking to avoid interruptions.",
            "Leave the accounts open so the next user can continue.",
          ]}
          bestAnswer={0}
          explanation="The strongest response combines safer settings with better physical privacy and session habits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Device Privacy"
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
          title="Review Fictional Device Lock and Privacy Settings"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Device Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Lock and Privacy Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a personal phone, school laptop,
                family tablet, shared library computer, and classroom display.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Check whether a strong approved lock is enabled.</li>
                <li>Review the automatic-lock timeout.</li>
                <li>Identify shoulder-surfing and screen-visibility risks.</li>
                <li>Review shared-device sign-out and session handling.</li>
                <li>Create one practical improvement for each device.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Student Leaves a Laptop During Lunch"
          scenario="A fictional student plans to leave a school laptop on a desk for five minutes while email and cloud storage remain open."
          choices={[
            {
              label: "Choice A",
              response:
                "Lock the screen before leaving, even for a short time.",
              outcome:
                "Best defensive choice. The lock protects all active services while the student is away.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave it open because the student will return soon.",
              outcome:
                "Risky. Unauthorized access can happen quickly.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask a friend to watch the open screen and share the passcode.",
              outcome:
                "Unsafe. Passcodes should remain private.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Another User’s Account Is Open on a Shared Computer"
          scenario="A fictional student sits at a library computer and sees another student’s email and school portal still open."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not explore the account. Sign out if appropriate and report the issue to the responsible adult or staff member.",
              outcome:
                "Best defensive choice. It protects the other user’s privacy without accessing their information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Read the messages to identify the owner.",
              outcome:
                "Risky. This accesses private information without permission.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the password to protect the account.",
              outcome:
                "Unsafe. The student is not authorized to change another person’s account.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Device Locks and Screen Privacy Checklist"
          items={[
            "I use a strong approved device lock and keep the secret private.",
            "I lock the screen manually before walking away.",
            "I use a reasonable approved automatic-lock timeout.",
            "I shield passcode entry and reduce screen visibility in public spaces.",
            "I sign out and close sensitive content on shared devices.",
            "I never explore another person’s open account or files.",
          ]}
        />

        <MiniQuiz
          title="B10.1 Mini Quiz: Device Locks and Screen Privacy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional device privacy review. Include five devices, the lock method, timeout, screen-visibility risk, shared-use concern, and one safer improvement for each."
          tips={[
            "Use fictional devices, users, accounts, passcodes, settings, and locations only.",
            "Do not include real passwords, passcodes, private information, or managed school settings.",
            "Explain how each improvement protects the active session.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A device lock protects every active account and service open on the device.",
            "Manual locking and automatic locking work best together.",
            "Shoulder surfing and visible screens can expose passcodes and private information.",
            "Shared devices require careful sign-out and session handling.",
            "An open account should never be explored by someone who is not authorized.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}