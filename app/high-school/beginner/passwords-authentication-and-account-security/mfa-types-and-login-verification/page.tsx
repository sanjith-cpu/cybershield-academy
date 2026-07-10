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
const previousLesson = `${modulePath}/password-managers-and-reuse-risk`;
const nextLesson = `${modulePath}/account-recovery-and-login-alerts`;

const vocab = [
  [
    "Multi-factor authentication",
    "Authentication that uses two or more independent factor categories before granting access.",
  ],
  [
    "Knowledge factor",
    "Something the user knows, such as a password, passphrase, or PIN.",
  ],
  [
    "Possession factor",
    "Something the user has, such as an approved phone, authenticator app, or security key.",
  ],
  [
    "Biometric factor",
    "Something connected to the user’s physical characteristics, such as a fingerprint or face scan.",
  ],
  [
    "One-time code",
    "A temporary verification code that expires after a short period or after one use.",
  ],
  [
    "MFA fatigue",
    "A situation in which repeated approval prompts pressure a user to accept one without verifying it.",
  ],
];

const mfaWorkflow = [
  {
    title: "Enter the first factor",
    example:
      "The user begins with a password, passphrase, PIN, or another approved knowledge factor.",
  },
  {
    title: "Request a second factor",
    example:
      "The system asks for an authenticator code, approved device prompt, security key, or biometric check.",
  },
  {
    title: "Verify the context",
    example:
      "The user confirms that the login attempt, device, location, and timing match an action they started.",
  },
  {
    title: "Approve or deny",
    example:
      "The user approves an expected request or denies and reports an unexpected prompt.",
  },
];

const mfaReviewRows = [
  {
    item: "Authenticator app code",
    source: "Temporary code generated on an approved device",
    review:
      "Strong common option when the user verifies the official login and never shares the code.",
  },
  {
    item: "Push approval",
    source: "Approve or deny prompt on a phone",
    review:
      "Convenient, but users must deny unexpected prompts and avoid MFA fatigue.",
  },
  {
    item: "Security key",
    source: "Physical device used during sign-in",
    review:
      "Strong possession factor that should be protected from loss and registered carefully.",
  },
  {
    item: "Text message code",
    source: "Temporary code sent by SMS",
    review:
      "Better than password-only access in many cases, but users should protect the phone number and never share the code.",
  },
  {
    item: "Biometric check",
    source: "Fingerprint or face verification on a trusted device",
    review:
      "Useful when combined with secure device settings and a backup recovery method.",
  },
];

const mistakes = [
  "Approving an MFA prompt that was not caused by a login the user started.",
  "Sharing a one-time code with a caller, friend, message sender, or support impersonator.",
  "Believing two passwords count as two different authentication factors.",
  "Using an unlocked or unprotected phone as the only possession factor.",
  "Ignoring repeated approval prompts instead of denying them and reviewing the account.",
  "Removing backup and recovery options without creating a safer replacement.",
];

const quizQuestions = [
  {
    question: "What makes authentication truly multi-factor?",
    choices: [
      "It uses evidence from two or more different factor categories.",
      "It asks for the same password twice.",
      "It uses two usernames.",
      "It opens two browser tabs.",
    ],
    answer: 0,
    explanation:
      "MFA combines independent categories such as something known and something possessed.",
  },
  {
    question: "Which pair represents two different authentication factors?",
    choices: [
      "A passphrase and an authenticator app code.",
      "A password and a second password.",
      "A username and an email address.",
      "A PIN and a security question.",
    ],
    answer: 0,
    explanation:
      "A passphrase is a knowledge factor, while an authenticator app code is connected to a possession factor.",
  },
  {
    question: "What should a user do with an unexpected MFA approval prompt?",
    choices: [
      "Deny it, review official account activity, and change credentials if needed.",
      "Approve it to stop the notifications.",
      "Send the prompt to a friend.",
      "Ignore every future security message.",
    ],
    answer: 0,
    explanation:
      "An unexpected prompt may mean someone else knows the password or is attempting access.",
  },
  {
    question: "Why should one-time codes never be shared?",
    choices: [
      "They can complete authentication and allow another person to access the account.",
      "They are always public information.",
      "They make passwords longer.",
      "They automatically expire before use.",
    ],
    answer: 0,
    explanation:
      "A one-time code can be the final proof needed to complete a login, so it must remain private.",
  },
  {
    question: "What is MFA fatigue?",
    choices: [
      "Repeated approval prompts that pressure a user into accepting one.",
      "A phone battery reaching zero.",
      "A password manager storing too many entries.",
      "A website loading slowly.",
    ],
    answer: 0,
    explanation:
      "MFA fatigue relies on repeated prompts and user frustration, so unexpected requests should be denied and investigated.",
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
          Previous: B7.3 Password Managers and Reuse Risk
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
          Next: B7.5 Account Recovery and Login Alerts
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

function MfaWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Multi-Factor Verification Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        MFA adds another independent check after the first credential so one
        exposed password is less likely to be enough for account access.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {mfaWorkflow.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> approve an MFA request
        only when you started the login and the device, service, timing, and
        location make sense.
      </div>
    </section>
  );
}

function FakeMfaPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            MFA Method Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares common MFA methods and the defensive
            decisions that make each method safer.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {mfaReviewRows.map((row) => (
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

function FactorComparisonBoard() {
  const factors = [
    {
      name: "Knowledge factor",
      saferQuestion:
        "Is the user proving something only the real account owner should know?",
      saferChoice:
        "Use a strong unique passphrase and never share it with another person.",
    },
    {
      name: "Possession factor",
      saferQuestion:
        "Does the user control the approved phone, authenticator, or security key?",
      saferChoice:
        "Protect the device and deny any request that does not match a login you started.",
    },
    {
      name: "Biometric factor",
      saferQuestion:
        "Is the biometric check happening on a trusted, locked, and updated device?",
      saferChoice:
        "Use device protections and keep a safe backup recovery method.",
    },
    {
      name: "Context check",
      saferQuestion:
        "Do the time, device, service, and location match the expected login?",
      saferChoice:
        "Pause and review any mismatch before approving the request.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Authentication Factor Comparison Board
      </h2>
      <p className="mt-3 text-slate-300">
        Different factors provide different kinds of evidence. MFA is strongest
        when the factors are independent and the user verifies the login context.
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

export default function MfaTypesLoginVerificationPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.4 MFA Types and Login Verification
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Compare common multi-factor authentication methods, understand how
            independent factors strengthen login security, and practice safe
            responses to expected and unexpected verification prompts.
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
          lessonTitle="MFA Types and Login Verification"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that MFA combines independent factor categories.",
            "I will never share a real one-time code or approve a real prompt for a lesson.",
            "I am ready to compare authenticator apps, push prompts, security keys, text codes, and biometrics.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Password Should Not Be the Only Barrier"
        >
          <p className="leading-8">
            Passwords can be guessed, reused, exposed, or entered into fake
            pages. MFA adds another independent requirement so the password
            alone is not enough. The user must still verify that each prompt
            matches a login they actually started.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> use fake prompts
            and fake codes only. Never share or enter a real MFA code, recovery
            code, security key detail, or approval request in a lesson.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how MFA combines independent authentication factors.",
            "Compare common MFA methods and their defensive strengths.",
            "Recognize unexpected prompts, MFA fatigue, and unsafe code-sharing requests.",
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
          title="Independent Factors Reduce Single-Point Failure"
        >
          <p className="leading-8">
            When authentication depends on only one password, a single exposure
            may be enough for access. MFA reduces that risk by requiring another
            kind of evidence, such as an approved device, authenticator code,
            security key, or biometric check.
          </p>
        </SectionCard>

        <MfaWorkflow />

        <SectionCard
          eyebrow="Core Concept"
          title="Two Steps Are Not Always Two Factors"
        >
          <p className="leading-8">
            Two passwords are both knowledge factors. A password and a PIN are
            also both knowledge factors. True MFA uses different categories,
            such as a passphrase plus a security key or an authenticator app.
            The factors should be independent so one exposure does not defeat
            both.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for MFA and Verification Thinking
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

        <FactorComparisonBoard />
        <FakeMfaPanel />

        <FakeDashboardCard
          title="Fake MFA Activity Dashboard"
          subtitle="Training dashboard using fictional prompts and verification events."
          metrics={[
            {
              label: "Expected prompts",
              value: "14",
              note: "Matched logins started by the fictional account owner.",
            },
            {
              label: "Unexpected prompts",
              value: "3",
              note: "Denied because no matching login attempt was started.",
            },
            {
              label: "Codes shared",
              value: "0",
              note: "One-time codes remained private during every scenario.",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated MFA Approval Requests"
          severity="High"
          time="2:28 PM"
          source="Fake School Account Training"
          details="A fictional student receives six approval prompts in two minutes without attempting to sign in."
          recommendation="Deny every unexpected request, review the official account, change the password if needed, and report the activity to trusted adults or school technology staff."
        />

        <FakeLogPanel
          title="Fake MFA Verification Log"
          logs={[
            "14:21:09 LOGIN_START account='student.demo' device='recognized_laptop'",
            "14:21:13 FACTOR_ONE method='passphrase' result='success'",
            "14:21:18 FACTOR_TWO method='authenticator_code' result='success'",
            "14:25:47 PUSH_REQUEST device='unknown_phone' user_login_started='false'",
            "14:26:02 PUSH_RESPONSE action='deny'",
            "14:28:15 SAFE_ACTION recommendation='review account and replace exposed credential if necessary'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should This MFA Prompt Be Approved?"
          evidence={[
            "A fictional student is not currently signing in.",
            "An approval prompt names a new device.",
            "The location shown is unfamiliar.",
            "Three similar prompts arrived within one minute.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "Deny the prompt, review the official account, and involve trusted help if necessary.",
            "Approve the prompt so the notifications stop.",
            "Share the approval request with a classmate.",
            "Disable MFA immediately without reviewing the account.",
          ]}
          bestAnswer={0}
          explanation="The prompt does not match an expected login and shows several warning signs. It should be denied and investigated through the official account."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken MFA"
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
          title="Compare Fake MFA Options"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Account Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud MFA Setup
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional account offers an authenticator app, push approvals,
                text message codes, a security key, and a biometric check on a
                trusted device.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the factor category for each method.</li>
                <li>Separate convenience from defensive strength.</li>
                <li>Choose a primary method and a safe backup.</li>
                <li>Explain how unexpected prompts should be handled.</li>
                <li>Confirm that no real codes or account details are used.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Caller Asks for a One-Time Code"
          scenario="A fictional student receives a call from someone claiming to be account support. The caller says a one-time code is needed to verify the student’s identity."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the code. End the call and contact the organization through its official website or school support channel.",
              outcome:
                "Best defensive choice. Real verification codes should never be given to an unexpected caller.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the code because the caller knows the student’s name.",
              outcome:
                "Risky. Public or stolen information does not prove the caller is legitimate.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the code in a group chat and ask whether it looks real.",
              outcome:
                "Unsafe. One-time codes must remain private.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="MFA and Login Verification Checklist"
          items={[
            "I can explain why MFA must use different factor categories.",
            "I can compare authenticator apps, push prompts, security keys, text codes, and biometrics.",
            "I will approve only prompts connected to a login I started.",
            "I will never share a one-time code, MFA code, or recovery code.",
            "I know to deny repeated unexpected prompts and review the official account with trusted help.",
          ]}
        />

        <MiniQuiz
          title="B7.4 Mini Quiz: MFA Types and Login Verification"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake MFA comparison guide for five authentication methods. Identify each factor category, list one strength and one limitation, and end with a safe response plan for an unexpected prompt."
          tips={[
            "Use fictional prompts and codes only.",
            "Clearly distinguish two-step verification from true multi-factor authentication.",
            "Include a reminder that one-time codes and recovery codes must never be shared.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "MFA uses two or more independent authentication factor categories.",
            "Two passwords do not count as two different factors.",
            "Authenticator apps, push prompts, security keys, text codes, and biometrics require different safety decisions.",
            "Unexpected or repeated MFA prompts should be denied and reviewed through the official account.",
            "One-time codes, MFA codes, and recovery codes must remain private.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}