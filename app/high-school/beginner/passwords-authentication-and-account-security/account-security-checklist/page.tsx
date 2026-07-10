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
const previousLesson = `${modulePath}/account-recovery-and-login-alerts`;
const nextLesson = `${modulePath}/authentication-scenario-lab`;

const vocab = [
  [
    "Account security review",
    "A structured check of credentials, MFA, recovery options, devices, sessions, alerts, and account settings.",
  ],
  [
    "Security baseline",
    "The minimum protections that should be enabled before an account is considered ready for normal use.",
  ],
  [
    "Active session",
    "A signed-in connection between an account and a browser, app, or device.",
  ],
  [
    "Trusted device",
    "A device the account owner recognizes, controls, and has approved for account access.",
  ],
  [
    "Security alert",
    "A notification about important account events such as sign-ins, password changes, recovery changes, or unusual activity.",
  ],
  [
    "Layered security",
    "Using several protections together so one failure does not automatically expose the account.",
  ],
];

const checklistWorkflow = [
  {
    title: "Review credentials",
    example:
      "Confirm that every important account uses a long, unique credential stored safely.",
  },
  {
    title: "Verify MFA",
    example:
      "Check that MFA is enabled, expected prompts are understood, and backup methods are protected.",
  },
  {
    title: "Inspect recovery",
    example:
      "Confirm recovery email, phone, backup codes, and trusted devices are current.",
  },
  {
    title: "Review activity",
    example:
      "Check active sessions, connected devices, login alerts, and recent security events.",
  },
];

const checklistRows = [
  {
    item: "Primary password",
    source: "Unique passphrase stored in password manager",
    review:
      "Meets the baseline. Confirm it is used nowhere else and remains private.",
  },
  {
    item: "MFA",
    source: "Authenticator app enabled with protected backup codes",
    review:
      "Strong setup. Review backup storage and deny unexpected prompts.",
  },
  {
    item: "Recovery email",
    source: "Current address with its own MFA",
    review:
      "Safer recovery path. Confirm the address remains accessible and protected.",
  },
  {
    item: "Active sessions",
    source: "One recognized phone and one unknown browser",
    review:
      "Remove the unknown session and review recent activity.",
  },
  {
    item: "Login alerts",
    source: "Enabled for new devices and password changes",
    review:
      "Useful monitoring layer. Review alerts promptly instead of dismissing them.",
  },
];

const mistakes = [
  "Reviewing only the password while ignoring MFA, recovery, sessions, alerts, and connected devices.",
  "Keeping unknown or unused devices signed in because the account still works.",
  "Treating a checklist as complete without checking whether recovery information is current.",
  "Saving backup codes in messages, screenshots, or public notes.",
  "Approving repeated MFA prompts to stop the notifications.",
  "Using one checklist once and never reviewing the account again after major changes or alerts.",
];

const quizQuestions = [
  {
    question: "What is the purpose of an account security checklist?",
    choices: [
      "To review several protective layers in a consistent order.",
      "To replace every account with one shared password.",
      "To remove all login alerts.",
      "To make recovery information public.",
    ],
    answer: 0,
    explanation:
      "A checklist helps users review credentials, MFA, recovery, devices, sessions, and alerts without forgetting important protections.",
  },
  {
    question: "Which item should be removed during an account review?",
    choices: [
      "An active session from an unknown browser.",
      "A recognized trusted device.",
      "A current recovery email.",
      "An enabled login alert.",
    ],
    answer: 0,
    explanation:
      "Unknown sessions should be investigated and removed because they may represent unauthorized access.",
  },
  {
    question: "What does layered security mean?",
    choices: [
      "Using several protections together so one failure is not enough.",
      "Using the same password on every account.",
      "Disabling MFA after setting a strong password.",
      "Ignoring recovery settings.",
    ],
    answer: 0,
    explanation:
      "Layered security combines unique credentials, MFA, recovery readiness, alerts, and activity review.",
  },
  {
    question: "When should an account review be repeated?",
    choices: [
      "After important changes, alerts, device loss, credential exposure, or at regular intervals.",
      "Only once when the account is created.",
      "Only after every account has been deleted.",
      "Never if MFA is enabled.",
    ],
    answer: 0,
    explanation:
      "Account conditions change over time, so reviews should be repeated after meaningful events and periodically.",
  },
  {
    question: "What is the safest response to an unknown connected device?",
    choices: [
      "Remove it, review recent activity, and secure the account if needed.",
      "Rename it and keep it connected.",
      "Send the password to a friend.",
      "Disable all alerts.",
    ],
    answer: 0,
    explanation:
      "Unknown devices should be removed and the account should be reviewed for additional signs of unauthorized access.",
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
          Previous: B7.5 Account Recovery and Login Alerts
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
          Next: B7.7 Authentication Scenario Lab
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

function ChecklistWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Four-Part Account Security Review
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A complete review checks credentials, MFA, recovery readiness, and
        account activity instead of focusing on only one setting.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {checklistWorkflow.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> an account is only as
        strong as its weakest important layer, so review every part instead of
        stopping after the password.
      </div>
    </section>
  );
}

function FakeChecklistPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Account Security Checklist Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel combines the main protections from Module B7
            into one complete account review.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {checklistRows.map((row) => (
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

function LayeredSecurityBoard() {
  const factors = [
    {
      name: "Credential layer",
      saferQuestion:
        "Is the password or passphrase long, unique, private, and stored safely?",
      saferChoice:
        "Replace reused credentials and use a trusted password manager.",
    },
    {
      name: "Verification layer",
      saferQuestion:
        "Is MFA enabled with a protected primary method and backup option?",
      saferChoice:
        "Use MFA and deny any prompt that does not match a login you started.",
    },
    {
      name: "Recovery layer",
      saferQuestion:
        "Are recovery email, phone, backup codes, and trusted devices current?",
      saferChoice:
        "Update old methods and store recovery secrets privately.",
    },
    {
      name: "Monitoring layer",
      saferQuestion:
        "Are active sessions, connected devices, login alerts, and recent events reviewed?",
      saferChoice:
        "Remove unknown access and respond quickly to unusual alerts.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Layered Account Security Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong account security comes from several connected layers that support
        prevention, verification, recovery, and monitoring.
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

export default function AccountSecurityChecklistPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.6 Account Security Checklist
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Combine unique credentials, password managers, MFA, recovery
            readiness, trusted devices, active sessions, and login alerts into
            one repeatable defensive account review.
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
          lessonTitle="Account Security Checklist"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand the roles of credentials, MFA, recovery, sessions, devices, and alerts.",
            "I will use fake accounts and fake security settings only.",
            "I am ready to combine the Module B7 protections into one repeatable checklist.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Checklist Prevents Important Steps From Being Forgotten"
        >
          <p className="leading-8">
            Account security involves several connected settings. A user may
            remember to change a password but forget an unknown session, an old
            recovery email, disabled alerts, or missing MFA. A checklist turns
            separate protections into a reliable process.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never enter real
            credentials, recovery information, backup codes, or account details
            into a lesson. Use fictional examples only.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Build a complete account security checklist using layered protections.",
            "Review fake credentials, MFA, recovery methods, devices, sessions, and alerts.",
            "Prioritize the safest next action when one checklist item fails.",
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
          title="Security Fails When One Important Layer Is Ignored"
        >
          <p className="leading-8">
            A strong password cannot protect an account if an old recovery email
            is controlled by someone else. MFA cannot fully help if repeated
            prompts are approved. Alerts cannot protect the user if they are
            ignored. A checklist helps every layer support the others.
          </p>
        </SectionCard>

        <ChecklistWorkflow />

        <SectionCard
          eyebrow="Core Concept"
          title="Review Prevention, Verification, Recovery, and Monitoring"
        >
          <p className="leading-8">
            Prevention uses strong unique credentials. Verification uses MFA and
            safe login decisions. Recovery keeps legitimate access possible.
            Monitoring uses alerts, sessions, and device review to detect
            unusual activity. A complete checklist includes all four areas.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Account Security Review
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

        <LayeredSecurityBoard />
        <FakeChecklistPanel />

        <FakeDashboardCard
          title="Fake Account Security Scoreboard"
          subtitle="Training dashboard combining fictional credentials, MFA, recovery, sessions, and alerts."
          metrics={[
            {
              label: "Checklist items",
              value: "12",
              note: "Four protection areas with three review items each.",
            },
            {
              label: "Items complete",
              value: "9",
              note: "Credentials, MFA, and most recovery settings meet the baseline.",
            },
            {
              label: "Items needing action",
              value: "3",
              note: "One unknown session, one old device, and one outdated recovery method remain.",
            },
          ]}
        />

        <FakeAlertCard
          title="Account Review Incomplete"
          severity="Medium"
          time="11:52 AM"
          source="Fake Account Security Training"
          details="A fictional account has a strong unique passphrase and MFA, but an unknown browser session and outdated recovery email remain active."
          recommendation="Remove the unknown session, update the recovery email, review recent activity, and repeat the checklist after changes are saved."
        />

        <FakeLogPanel
          title="Fake Account Security Review Log"
          logs={[
            "11:41:06 CREDENTIAL_CHECK unique='true' stored_in_manager='true' result='pass'",
            "11:42:18 MFA_CHECK enabled='true' backup_method='protected' result='pass'",
            "11:44:02 RECOVERY_EMAIL status='outdated' result='action_needed'",
            "11:45:36 ACTIVE_SESSION browser='unknown' result='remove'",
            "11:48:12 LOGIN_ALERTS new_device='enabled' password_change='enabled' result='pass'",
            "11:52:03 SAFE_ACTION recommendation='fix failed items and repeat full checklist'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Checklist Item Should Be Fixed First?"
          evidence={[
            "A fictional account uses a strong unique passphrase.",
            "MFA is enabled with protected backup codes.",
            "An unknown browser session is currently active.",
            "The recovery email is old but still controlled by the student.",
          ]}
          question="What is the safest priority?"
          options={[
            "Remove the unknown active session first, review recent activity, and then update the recovery email.",
            "Disable MFA because the password is strong.",
            "Ignore the session and change the profile picture.",
            "Share the backup codes with a friend.",
          ]}
          bestAnswer={0}
          explanation="An unknown active session may represent current unauthorized access, so it should be addressed immediately before completing the remaining review items."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Security Reviews Incomplete"
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
          title="Complete a Fake Account Security Audit"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Account Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Security Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional account has a unique passphrase, MFA, one outdated
                recovery email, three active sessions, one unknown device, and
                login alerts enabled only for password changes.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Confirm the credential is unique and safely stored.</li>
                <li>Review MFA and backup methods.</li>
                <li>Update the recovery email.</li>
                <li>Remove the unknown device and session.</li>
                <li>Enable alerts for new-device sign-ins and security changes.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Checklist Finds Several Problems"
          scenario="A fictional student discovers a reused password, no MFA, an old recovery phone, and two unknown active sessions on an important account."
          choices={[
            {
              label: "Choice A",
              response:
                "Use the official service, remove unknown sessions, replace the password with a unique one, enable MFA, and update recovery information.",
              outcome:
                "Best defensive choice. It addresses current access risk first and then rebuilds the account’s protective layers.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Change only the profile name because the account still opens.",
              outcome:
                "Risky. The important security problems remain unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the password to a friend and ask them to check the sessions.",
              outcome:
                "Unsafe. Credentials should never be shared, and another person should not access the account.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Complete Account Security Checklist"
          items={[
            "Every important account uses a long, unique credential.",
            "Credentials are stored safely and are not shared.",
            "MFA is enabled with a protected backup method.",
            "Recovery email, phone, backup codes, and trusted devices are current.",
            "Unknown devices and active sessions are removed.",
            "Login alerts are enabled and reviewed promptly.",
            "The checklist is repeated after important alerts, changes, or device loss.",
          ]}
        />

        <MiniQuiz
          title="B7.6 Mini Quiz: Account Security Checklist"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page account security checklist for a fictional student account. Organize it into credential, MFA, recovery, and monitoring sections. Add a priority order for fixing failed items."
          tips={[
            "Use fictional settings and account data only.",
            "Include checkboxes or status labels for each protection.",
            "End with a schedule for repeating the review after important events.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A complete account review covers credentials, MFA, recovery, devices, sessions, and alerts.",
            "Layered security reduces the chance that one failure will expose the entire account.",
            "Unknown active sessions and devices should be investigated and removed promptly.",
            "Recovery methods and backup codes must remain current and protected.",
            "Account security checklists should be repeated after alerts, major changes, device loss, or credential exposure.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}