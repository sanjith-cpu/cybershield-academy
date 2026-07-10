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
const previousLesson =
  "/high-school/beginner/digital-identity-and-privacy/module-test";
const nextLesson = `${modulePath}/passphrases-and-password-strength`;

const vocab = [
  [
    "Authentication",
    "The process a system uses to verify that a person, device, or service is allowed to claim an identity.",
  ],
  [
    "Identity claim",
    "The username, email address, account name, device identity, or other identifier presented during sign-in.",
  ],
  [
    "Credential",
    "Evidence used to support an identity claim, such as a password, passphrase, approved device, security key, or biometric.",
  ],
  [
    "Authorization",
    "The decision about what an authenticated user is allowed to view, change, create, or manage.",
  ],
  [
    "Authentication factor",
    "A category of evidence based on something a user knows, has, or is.",
  ],
  [
    "Session",
    "The temporary period during which a system remembers that a user has successfully signed in.",
  ],
];

const authenticationStages = [
  {
    title: "Claim an identity",
    example:
      "The user enters a username, email address, account name, or another approved identifier.",
  },
  {
    title: "Present evidence",
    example:
      "The user provides a credential such as a passphrase, approved device, security key, or biometric.",
  },
  {
    title: "Verify the evidence",
    example:
      "The system compares the credential with the expected record or trusted verification method.",
  },
  {
    title: "Decide access",
    example:
      "The system allows, limits, blocks, or challenges the login and records the result.",
  },
];

const accountReviewRows = [
  {
    item: "School portal",
    source: "Username and passphrase required",
    review:
      "Authentication protects grades, assignments, messages, and school records from unauthorized access.",
  },
  {
    item: "Shared classroom device",
    source: "Previous student remains signed in",
    review:
      "End the session and report the issue. A successful login should not give later users access.",
  },
  {
    item: "Password reset",
    source: "Recovery email or approved verification required",
    review:
      "Recovery is another identity check and should use trusted, current information.",
  },
  {
    item: "New device login",
    source: "Extra verification requested",
    review:
      "The challenge helps the system decide whether the login matches the real account owner.",
  },
  {
    item: "Account permissions",
    source: "Student and teacher roles have different access",
    review:
      "Authentication proves identity; authorization decides what each role can do.",
  },
];

const mistakes = [
  "Confusing identification, authentication, and authorization as if they were the same step.",
  "Assuming that knowing a username proves who owns an account.",
  "Leaving an account signed in on a shared or public device.",
  "Approving an unexpected login or verification prompt without checking why it appeared.",
  "Sharing passwords, passphrases, MFA codes, or recovery codes with friends.",
  "Trying to investigate serious account access problems alone instead of asking trusted adults or school technology staff.",
];

const quizQuestions = [
  {
    question: "What is the main purpose of authentication?",
    choices: [
      "To verify that an identity claim is supported by trusted evidence.",
      "To make every account public.",
      "To remove all account permissions.",
      "To guarantee that a device can never be lost.",
    ],
    answer: 0,
    explanation:
      "Authentication checks whether the person, device, or service claiming an identity can provide acceptable evidence.",
  },
  {
    question: "Which is the best example of a credential?",
    choices: [
      "A passphrase used to prove control of an account.",
      "The color of a website background.",
      "A public club announcement.",
      "A device battery percentage.",
    ],
    answer: 0,
    explanation:
      "A credential is evidence used during authentication, such as a passphrase, security key, approved device, or biometric.",
  },
  {
    question: "What is the difference between authentication and authorization?",
    choices: [
      "Authentication verifies identity; authorization decides what that identity may access.",
      "Authentication changes colors; authorization changes fonts.",
      "Authentication is only for teachers; authorization is only for students.",
      "There is no difference.",
    ],
    answer: 0,
    explanation:
      "Authentication answers who is signing in. Authorization answers what that verified identity is allowed to do.",
  },
  {
    question:
      "A student finds a school computer still signed in to another person’s account. What is the safest response?",
    choices: [
      "Do not explore the account, sign out if appropriate, and notify a teacher or school technology staff member.",
      "Read the messages to identify the owner.",
      "Change the account settings as a joke.",
      "Save the password for later.",
    ],
    answer: 0,
    explanation:
      "The student should not access another person’s information. Ending the exposed session and reporting it protects the account.",
  },
  {
    question:
      "Why might a system request extra verification after a login from a new device?",
    choices: [
      "The system wants more evidence before trusting an unfamiliar login context.",
      "Every new device is automatically malicious.",
      "The account no longer needs a password.",
      "The system is asking the user to share credentials with friends.",
    ],
    answer: 0,
    explanation:
      "A new device or unusual context can increase uncertainty, so the system may request another trusted factor.",
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
          Previous: B6 Module Test
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
          Next: B7.2 Passphrases and Password Strength
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

function AuthenticationFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Authentication Decision Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Authentication is a sequence. A user claims an identity, presents
        evidence, the system verifies that evidence, and then makes an access
        decision.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {authenticationStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> a username identifies
        an account, but trusted credentials and verification are needed before
        the system should grant access.
      </div>
    </section>
  );
}

function FakeAuthenticationPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Account Authentication Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel shows how authentication protects different
            accounts, sessions, and access decisions without using real
            credentials.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {accountReviewRows.map((row) => (
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

function AuthenticationFactorBoard() {
  const factors = [
    {
      name: "Something you know",
      saferQuestion:
        "Can the user provide a secret that should be known only by the account owner?",
      saferChoice:
        "Use a strong, unique passphrase and never share it in a lesson, message, or form.",
    },
    {
      name: "Something you have",
      saferQuestion:
        "Does the user control an approved device, security key, authenticator, or verification method?",
      saferChoice:
        "Protect the device or token and never approve an unexpected request.",
    },
    {
      name: "Something you are",
      saferQuestion:
        "Is an approved biometric being used on a trusted device with proper privacy controls?",
      saferChoice:
        "Use device protections and understand that biometrics are part of a larger security system.",
    },
    {
      name: "Context signals",
      saferQuestion:
        "Is the login coming from a recognized device, usual location, expected time, and normal pattern?",
      saferChoice:
        "Treat unusual context as a reason to verify carefully, not as automatic proof of an attack.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Authentication Factor Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Systems can use different categories of evidence. Stronger
        authentication often combines more than one independent factor.
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

export default function WhyAuthenticationExistsPage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.1 Why Authentication Exists
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how authentication verifies identity, why accounts need
            trusted evidence before granting access, and how authentication
            differs from identification and authorization.
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
          lessonTitle="Why Authentication Exists"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a username identifies an account but does not prove who controls it.",
            "I will use fake credentials and fake account examples only.",
            "I am ready to compare identification, authentication, authorization, and session security.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Accounts Need Evidence, Not Just Names"
        >
          <p className="leading-8">
            A system cannot safely grant access just because someone knows an
            account name. Authentication requires evidence that supports the
            identity claim. Schools, banks, games, email services, cloud
            platforms, and workplaces all use authentication to reduce
            unauthorized access.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never enter real
            passwords, passphrases, MFA codes, recovery codes, or private
            account information into a lesson. Use fake examples only.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain why authentication is required before a system grants access.",
            "Distinguish identification, authentication, authorization, and sessions.",
            "Review fake login evidence and choose a safe defensive response.",
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
          title="Authentication Protects More Than a Login Screen"
        >
          <p className="leading-8">
            Authentication protects messages, grades, files, purchases,
            identities, cloud data, recovery settings, and actions performed
            under an account. When authentication fails, the wrong person may
            appear to be the real owner and gain access to information or
            permissions that do not belong to them.
          </p>
        </SectionCard>

        <AuthenticationFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Identification, Authentication, and Authorization Are Different"
        >
          <p className="leading-8">
            Identification tells the system which identity is being claimed.
            Authentication checks the evidence supporting that claim.
            Authorization determines what the verified identity is allowed to
            do. A session then remembers the successful login for a limited
            period so the user does not have to authenticate before every
            action.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Authentication Thinking
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

        <AuthenticationFactorBoard />
        <FakeAuthenticationPanel />

        <FakeDashboardCard
          title="Fake Authentication Signal Dashboard"
          subtitle="Training dashboard using fictional login evidence to practice identity-verification decisions."
          metrics={[
            {
              label: "Successful logins",
              value: "18",
              note: "Recognized devices and expected login patterns.",
            },
            {
              label: "Challenges issued",
              value: "3",
              note: "New-device and unusual-context logins required extra verification.",
            },
            {
              label: "Blocked attempts",
              value: "2",
              note: "Incorrect credentials and an unapproved recovery request were denied.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Verification Prompt"
          severity="Medium"
          time="9:14 AM"
          source="Fake School Account Training"
          details="A fictional student receives an MFA approval prompt even though the student is not trying to sign in."
          recommendation="Do not approve the prompt. Review account activity from the official service, change credentials if needed, and ask trusted adults or school technology staff for help."
        />

        <FakeLogPanel
          title="Fake Authentication Event Log"
          logs={[
            "09:08:12 IDENTITY_CLAIM account='student.demo' source='recognized_school_device'",
            "09:08:15 CREDENTIAL_CHECK method='passphrase' result='success'",
            "09:08:18 AUTHORIZATION role='student' access='student_portal'",
            "09:12:47 IDENTITY_CLAIM account='student.demo' source='new_device'",
            "09:12:49 MFA_CHALLENGE method='approval_prompt' status='pending'",
            "09:14:03 SAFE_ACTION recommendation='deny unexpected prompt and review official account activity'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Login Event Needs the Most Caution?"
          evidence={[
            "A fictional student signs in from a recognized school laptop using the correct passphrase.",
            "Two minutes later, an approval prompt appears on the student’s phone without a new login attempt.",
            "The school portal shows no planned maintenance.",
            "The student has not shared the account with anyone.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "Do not approve the unexpected prompt; review the official account and involve trusted help if necessary.",
            "Approve the prompt because it may save time.",
            "Send the verification code to a classmate.",
            "Ignore every future security alert.",
          ]}
          bestAnswer={0}
          explanation="An unexpected prompt may mean someone else is trying to authenticate. The safest action is to deny it, review official account activity, and seek trusted help."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Authentication"
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
          title="Review a Fake Login Flow"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Account Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Sign-In
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional school platform asks for an account name, a
                passphrase, and extra verification on a new device. After
                successful login, the student can view assignments but cannot
                change teacher settings.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the claimed account identity.</li>
                <li>List the credentials or factors used to verify it.</li>
                <li>Explain why the new device creates extra uncertainty.</li>
                <li>Separate authentication from the student role’s permissions.</li>
                <li>Describe when the session should end or be locked.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Shared Computer Is Still Signed In"
          scenario="A fictional student opens a school computer and finds another student’s portal account still active. Grades, messages, and assignments are visible."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not explore the account, sign out if appropriate, and notify a teacher or school technology staff member.",
              outcome:
                "Best defensive choice. It protects the exposed account and reports the session problem safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Read the messages to identify the owner before reporting it.",
              outcome:
                "Risky and inappropriate. The student should not access another person’s private account information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the account password so no one else can use it.",
              outcome:
                "Unsafe. Changing another person’s credentials is unauthorized and can lock out the real owner.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Authentication Foundations Checklist"
          items={[
            "I can explain why a username alone does not prove account ownership.",
            "I can distinguish identification, authentication, authorization, and sessions.",
            "I can name examples of knowledge, possession, and biometric authentication factors.",
            "I can recognize an unexpected verification prompt and avoid approving it.",
            "I know to involve trusted adults, teachers, guardians, or school technology staff when account access feels unsafe.",
          ]}
        />

        <MiniQuiz
          title="B7.1 Mini Quiz: Why Authentication Exists"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake authentication flow for a fictional school portal. Show the identity claim, credential check, optional extra verification, access decision, authorization role, and session ending point."
          tips={[
            "Use fake usernames, fake credentials, and fake account data only.",
            "Label identification, authentication, authorization, and session clearly.",
            "End with one recommendation for handling an unexpected login prompt.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication verifies whether trusted evidence supports an identity claim.",
            "Identification, authentication, authorization, and sessions perform different security jobs.",
            "Authentication factors can involve something a user knows, has, or is.",
            "Unexpected verification prompts should not be approved without checking the official account.",
            "Shared-device sessions should be ended safely and reported when another person’s account is exposed.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}