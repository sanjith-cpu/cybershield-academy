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
  "/high-school/beginner/passwords-authentication-and-account-security";
const previousLesson = `${modulePath}/mfa-types-and-login-verification`;
const nextLesson = `${modulePath}/account-security-checklist`;

const vocab = [
  [
    "Account recovery",
    "The approved process used to restore access when a user cannot complete the normal login.",
  ],
  [
    "Recovery email",
    "A trusted email address used to receive account recovery notices or verification requests.",
  ],
  [
    "Recovery phone",
    "A trusted phone number connected to account recovery or verification.",
  ],
  [
    "Backup code",
    "A one-time recovery code stored safely for use when a normal MFA method is unavailable.",
  ],
  [
    "Login alert",
    "A notification about a sign-in, new device, unusual location, password change, or other account event.",
  ],
  [
    "Trusted device",
    "A device the account owner recognizes and has approved for normal use.",
  ],
];

const recoveryWorkflow = [
  {
    title: "Recognize the problem",
    example:
      "The user cannot sign in, receives an unexpected alert, or loses access to an approved authentication method.",
  },
  {
    title: "Open the official service",
    example:
      "The user reaches the account through a trusted bookmark, official app, or known organization website.",
  },
  {
    title: "Verify identity safely",
    example:
      "The service checks approved recovery information, backup codes, trusted devices, or another authorized method.",
  },
  {
    title: "Secure and review",
    example:
      "The user updates credentials, recovery settings, devices, and alerts after access is restored.",
  },
];

const recoveryReviewRows = [
  {
    item: "Recovery email",
    source: "Old address that the user no longer controls",
    review:
      "Update it before an emergency. Recovery information must remain current and accessible.",
  },
  {
    item: "Recovery phone",
    source: "Current number protected by a device lock",
    review:
      "Safer setup. Continue protecting the phone and reviewing account notifications.",
  },
  {
    item: "Backup codes",
    source: "Stored in a private protected location",
    review:
      "Useful emergency option. Never place codes in public notes, messages, or screenshots.",
  },
  {
    item: "New device alert",
    source: "Login from a device the user does not recognize",
    review:
      "Review immediately through the official account and remove unauthorized sessions if confirmed.",
  },
  {
    item: "Password change alert",
    source: "Notification appears without a requested change",
    review:
      "Treat as urgent. Open the official service, secure the account, and involve trusted help.",
  },
];

const mistakes = [
  "Using an old recovery email or phone number that the account owner no longer controls.",
  "Sharing backup codes, recovery links, or verification codes with another person.",
  "Opening recovery links from unexpected messages instead of visiting the official service directly.",
  "Ignoring a new-device or password-change alert because the account still appears to work.",
  "Keeping unknown devices and old sessions connected to the account.",
  "Trying to recover a school or family-managed account alone instead of involving the proper trusted adult or technology staff.",
];

const quizQuestions = [
  {
    question: "What is the safest way to begin account recovery?",
    choices: [
      "Open the official service directly through a trusted bookmark, app, or known website.",
      "Click the first recovery link in an unexpected message.",
      "Ask a friend to enter the account password.",
      "Post the account problem publicly.",
    ],
    answer: 0,
    explanation:
      "Recovery should begin through the official service so the user does not give credentials or codes to an impersonator.",
  },
  {
    question: "Why should recovery information be reviewed before an emergency?",
    choices: [
      "Old or inaccessible recovery methods may prevent the real owner from restoring access.",
      "Recovery information should always be public.",
      "It removes the need for authentication.",
      "It guarantees that alerts are unnecessary.",
    ],
    answer: 0,
    explanation:
      "Current recovery email, phone, backup codes, and trusted devices make legitimate recovery more reliable.",
  },
  {
    question: "What should a user do after receiving an unfamiliar new-device alert?",
    choices: [
      "Review the official account activity and remove the session if it is unauthorized.",
      "Ignore it because alerts are never important.",
      "Send the account password to a friend.",
      "Approve every future login automatically.",
    ],
    answer: 0,
    explanation:
      "An unfamiliar device may indicate unauthorized access, so the user should review the official account and secure it.",
  },
  {
    question: "How should backup codes be handled?",
    choices: [
      "Store them privately in a protected location and never share them.",
      "Post them in a group chat.",
      "Use the same code on every account.",
      "Attach them to a public profile.",
    ],
    answer: 0,
    explanation:
      "Backup codes can restore account access, so they must be treated like sensitive credentials.",
  },
  {
    question: "What makes a login alert most useful?",
    choices: [
      "Reviewing whether the device, time, location, and action match expected activity.",
      "Approving it without reading the details.",
      "Forwarding it to strangers.",
      "Deleting every alert immediately.",
    ],
    answer: 0,
    explanation:
      "Alert details help the account owner decide whether the activity is expected or suspicious.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B7</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B7.4 MFA Types and Login Verification
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
          Next: B7.6 Account Security Checklist
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

function RecoveryWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Account Recovery Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Account recovery should use official channels, approved identity checks,
        and a complete security review after access is restored.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {recoveryWorkflow.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> begin recovery from
        the official service, keep recovery secrets private, and review account
        activity after access is restored.
      </div>
    </section>
  );
}

function FakeRecoveryPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Recovery and Login Alert Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel shows how recovery settings and account alerts
            help the real owner restore and protect access.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {recoveryReviewRows.map((row) => (
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

function RecoverySafetyBoard() {
  const factors = [
    {
      name: "Recovery email",
      saferQuestion:
        "Does the account owner still control the address, and is that email account secured?",
      saferChoice:
        "Use a current protected address and review it whenever contact information changes.",
    },
    {
      name: "Recovery phone",
      saferQuestion:
        "Is the number current and protected by a locked device and secure mobile account?",
      saferChoice:
        "Update old numbers and avoid sharing verification messages or codes.",
    },
    {
      name: "Backup codes",
      saferQuestion:
        "Are emergency codes stored privately where unauthorized people cannot access them?",
      saferChoice:
        "Keep codes in a protected location and replace them if exposure is suspected.",
    },
    {
      name: "Login alerts",
      saferQuestion:
        "Do the device, location, time, and account action match expected activity?",
      saferChoice:
        "Review unfamiliar events through the official account and secure the account when details do not match.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Recovery Readiness Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Recovery works best when contact methods, backup options, device access,
        and login alerts are reviewed before an account emergency.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {factors.map((factor) => (
          <div
            key={factor.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{factor.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{factor.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{factor.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AccountRecoveryLoginAlertsPage() {
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
              Module B7
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.5 Account Recovery and Login Alerts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how recovery methods restore legitimate access, how login
            alerts reveal unusual activity, and how to review devices, sessions,
            contact methods, and backup options before an emergency.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B7: Passwords, Authentication, and Account Security"
          lessonTitle="Account Recovery and Login Alerts"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that account recovery is another identity-verification process.",
            "I will use fake recovery details, fake codes, and fake alerts only.",
            "I am ready to review recovery email, phone, backup codes, devices, sessions, and login alerts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Recovery Settings Matter Before Access Is Lost"
        >
          <p className="leading-8">
            Recovery options are easy to ignore while an account works normally.
            During an emergency, however, an old email address, lost phone
            number, missing backup code, or unknown connected device can make
            recovery slower and less safe. Preparation reduces that risk.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never enter real
            recovery codes, verification links, phone numbers, email addresses,
            or account details into a lesson. Use fictional examples only.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how account recovery verifies identity and restores legitimate access.",
            "Review recovery email, phone, backup codes, trusted devices, and active sessions.",
            "Interpret fake login alerts and choose a safe response to unusual account activity.",
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
          title="Recovery Can Protect or Expose an Account"
        >
          <p className="leading-8">
            Recovery methods are powerful because they can reset credentials or
            restore access. That power also makes them sensitive. If recovery
            email, phone numbers, codes, or trusted devices are outdated or
            exposed, the wrong person may be able to interfere with the account.
          </p>
        </SectionCard>

        <RecoveryWorkflow />

        <SectionCard
          eyebrow="Core Concept"
          title="Alerts Provide Evidence, Not Automatic Answers"
        >
          <p className="leading-8">
            A login alert should be reviewed using context. The account owner
            checks whether the device, location, time, browser, and action match
            expected activity. An unfamiliar detail does not always prove an
            attack, but it is a reason to pause, verify, and secure the account
            through official channels.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Recovery and Alert Thinking
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

        <RecoverySafetyBoard />
        <FakeRecoveryPanel />

        <FakeDashboardCard
          title="Fake Recovery Readiness Dashboard"
          subtitle="Training dashboard using fictional recovery settings and account alerts."
          metrics={[
            {
              label: "Recovery methods",
              value: "4",
              note: "Email, phone, backup codes, and a trusted device are configured.",
            },
            {
              label: "Outdated methods",
              value: "1",
              note: "An old recovery email requires replacement.",
            },
            {
              label: "Unknown sessions",
              value: "2",
              note: "Two fictional sessions need review and possible removal.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Password Change"
          severity="High"
          time="4:37 PM"
          source="Fake School Account Training"
          details="A fictional student receives a password-change alert but did not request a password change."
          recommendation="Open the official service directly, secure the account, review recovery methods and sessions, and contact trusted school technology staff or a guardian."
        />

        <FakeLogPanel
          title="Fake Account Recovery Event Log"
          logs={[
            "16:29:11 LOGIN_ALERT device='unknown_browser' location='unfamiliar' result='review_needed'",
            "16:31:04 PASSWORD_CHANGE requested_by_user='false'",
            "16:32:18 RECOVERY_EMAIL status='outdated'",
            "16:33:52 ACTIVE_SESSION device='recognized_phone' action='keep'",
            "16:34:20 ACTIVE_SESSION device='unknown_laptop' action='remove'",
            "16:37:06 SAFE_ACTION recommendation='use official recovery, replace credentials, and review every recovery method'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Alert Requires Immediate Action?"
          evidence={[
            "A fictional student receives a password-change alert without requesting a change.",
            "The account shows a new device the student does not recognize.",
            "The recovery email is old and inaccessible.",
            "The student can still open the account from a trusted device.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "Secure the account immediately through the official service, update recovery methods, remove unknown sessions, and ask trusted help.",
            "Ignore the alert because the account still opens.",
            "Send the current password to a friend for backup.",
            "Approve the unknown device to avoid losing access.",
          ]}
          bestAnswer={0}
          explanation="The unrequested password change, unknown device, and outdated recovery method create an urgent need for official account review and trusted assistance."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Recovery and Alert Response"
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
          title="Complete a Fake Recovery Readiness Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Account Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Recovery Setup
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional account has an old recovery email, a current phone,
                four unused backup codes, one trusted laptop, and two unknown
                active sessions.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Replace the old recovery email.</li>
                <li>Confirm the recovery phone is current and protected.</li>
                <li>Store backup codes in a private protected location.</li>
                <li>Remove or investigate unknown sessions.</li>
                <li>Test only fake alerts and fake recovery scenarios.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Recovery Message Arrives Unexpectedly"
          scenario="A fictional student receives a message saying the school account will be locked unless the student clicks a recovery link and enters a backup code immediately."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the message link. Open the official school portal directly and contact school technology staff through a trusted channel.",
              outcome:
                "Best defensive choice. It verifies the situation without giving a recovery secret to an untrusted message.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Click the link and enter the backup code because the message sounds urgent.",
              outcome:
                "Risky. Urgency and a request for a recovery code are warning signs.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the backup code to a friend and ask them to test it.",
              outcome:
                "Unsafe. Recovery codes must remain private and should never be tested by another person.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Account Recovery and Login Alert Checklist"
          items={[
            "I can explain how account recovery verifies identity and restores access.",
            "I can review recovery email, phone, backup codes, trusted devices, and active sessions.",
            "I will begin recovery through the official service instead of an unexpected message link.",
            "I can compare alert details with expected device, time, location, and account activity.",
            "I know to secure the account and involve trusted help when an alert does not match my actions.",
          ]}
        />

        <MiniQuiz
          title="B7.5 Mini Quiz: Account Recovery and Login Alerts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake account recovery readiness plan. Include recovery email, recovery phone, backup codes, trusted devices, active sessions, login alerts, and a five-step response to an unfamiliar login."
          tips={[
            "Use fictional contact information, devices, codes, and alerts only.",
            "Explain why recovery begins through the official service.",
            "End with one reminder about involving trusted adults or school technology staff.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Recovery methods should be current, protected, and reviewed before an emergency.",
            "Backup codes and recovery links are sensitive and must remain private.",
            "Login alerts are most useful when device, time, location, and action details are reviewed.",
            "Unknown sessions and unrequested password changes require prompt official account review.",
            "Safe recovery includes securing credentials, updating recovery settings, reviewing devices, and involving trusted help.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}