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
const previousLesson = `${modulePath}/account-security-checklist`;
const nextLesson = `${modulePath}/module-test`;

const vocab = [
  [
    "Authentication incident",
    "An event involving suspicious login attempts, unexpected verification prompts, exposed credentials, or unusual account activity.",
  ],
  [
    "Evidence",
    "The details used to understand an account event, such as time, device, location, alert type, and recent user actions.",
  ],
  [
    "Containment",
    "Immediate defensive actions that limit possible unauthorized access, such as denying prompts or ending unknown sessions.",
  ],
  [
    "Account hardening",
    "Improving account protections by changing credentials, enabling MFA, updating recovery settings, and reviewing devices.",
  ],
  [
    "Escalation",
    "Reporting an account problem to a trusted adult, teacher, guardian, administrator, or technology support team.",
  ],
  [
    "Post-incident review",
    "A structured check completed after an account event to confirm what happened and improve future protection.",
  ],
];

const incidentWorkflow = [
  {
    title: "Pause and verify",
    example:
      "Do not approve prompts, share codes, or click urgent links until the event is checked through the official service.",
  },
  {
    title: "Contain access",
    example:
      "Deny unexpected requests, remove unknown sessions, lock the device, or sign out of shared systems when appropriate.",
  },
  {
    title: "Secure the account",
    example:
      "Replace exposed credentials, enable or review MFA, and update recovery methods through official settings.",
  },
  {
    title: "Document and escalate",
    example:
      "Record safe details about the event and involve trusted adults or technology staff when the issue is serious.",
  },
];

const incidentReviewRows = [
  {
    item: "Unexpected MFA prompt",
    source: "No matching login attempt was started",
    review:
      "Deny the prompt, review official account activity, and change the credential if exposure is possible.",
  },
  {
    item: "Unknown browser session",
    source: "Session appears on an unfamiliar device",
    review:
      "Remove the session, review recent activity, and secure the account.",
  },
  {
    item: "Recovery email changed",
    source: "Account owner did not request the change",
    review:
      "Treat as urgent, restore recovery control through the official service, and involve trusted support.",
  },
  {
    item: "Password reused",
    source: "Same fake credential appears on four accounts",
    review:
      "Replace it everywhere with separate unique credentials, starting with email and recovery-related accounts.",
  },
  {
    item: "Shared computer session",
    source: "Another student’s account remains open",
    review:
      "Do not explore the account, sign out if appropriate, and notify a teacher or school technology staff member.",
  },
];

const mistakes = [
  "Approving an unexpected prompt just to make repeated notifications stop.",
  "Clicking an urgent recovery link before checking the official service.",
  "Changing only one reused password while leaving the same credential on other accounts.",
  "Investigating another person’s open account instead of protecting privacy and reporting the session.",
  "Deleting alerts before recording the safe details needed for a trusted report.",
  "Trying to manage a serious school, family, or financial account incident alone.",
];

const quizQuestions = [
  {
    question: "What should happen first after an unexpected MFA prompt?",
    choices: [
      "Deny the prompt and verify account activity through the official service.",
      "Approve it so the notifications stop.",
      "Share the prompt with a classmate.",
      "Disable every security alert.",
    ],
    answer: 0,
    explanation:
      "An unexpected prompt may indicate an unauthorized login attempt, so it should be denied and reviewed safely.",
  },
  {
    question: "Which action is an example of containment?",
    choices: [
      "Removing an unknown active session from the account.",
      "Posting the password publicly.",
      "Ignoring the alert.",
      "Reusing the same credential on another service.",
    ],
    answer: 0,
    explanation:
      "Containment limits possible access while the account owner continues the security review.",
  },
  {
    question: "Why should reused credentials be changed on every affected account?",
    choices: [
      "One exposed credential may place all accounts using it at risk.",
      "Only one account can use MFA.",
      "Login alerts work only with short passwords.",
      "Recovery methods require identical passwords.",
    ],
    answer: 0,
    explanation:
      "Password reuse creates a chain-reaction risk across every account using the same or a closely related credential.",
  },
  {
    question: "What is the safest response to another student’s account left open on a shared device?",
    choices: [
      "Do not explore it, sign out if appropriate, and report the issue.",
      "Read the messages to identify the owner.",
      "Change the account password.",
      "Save screenshots of private information.",
    ],
    answer: 0,
    explanation:
      "The correct defensive response protects the exposed account without accessing another person’s private information.",
  },
  {
    question: "When should an account incident be escalated?",
    choices: [
      "When the issue involves serious access risk, school systems, family-managed accounts, or unclear recovery steps.",
      "Only after posting about it publicly.",
      "Never, because every student should solve account problems alone.",
      "Only when the account has no password.",
    ],
    answer: 0,
    explanation:
      "Trusted adults and technology staff can help protect the user, preserve access, and follow the correct recovery process.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">
        Complete Module B7
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B7.6 Account Security Checklist
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
          Open B7 Module Test
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

function IncidentResponseFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Authentication Incident Response Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Account incidents are safer to manage when students follow a calm,
        repeatable process instead of reacting to urgency.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {incidentWorkflow.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> do not let urgency
        replace verification. Pause, use the official service, protect access,
        and involve trusted help.
      </div>
    </section>
  );
}

function FakeIncidentPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Authentication Incident Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel combines the major account-security decisions
            from Module B7 into one incident review.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {incidentReviewRows.map((row) => (
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

function EvidencePriorityBoard() {
  const factors = [
    {
      name: "User action",
      saferQuestion:
        "Did the account owner actually start the login, password reset, recovery request, or device connection?",
      saferChoice:
        "Treat events with no matching user action as suspicious and verify them through the official service.",
    },
    {
      name: "Device and session",
      saferQuestion:
        "Does the device, browser, location, and active session match normal use?",
      saferChoice:
        "Remove unknown access and review recent activity before continuing.",
    },
    {
      name: "Credential status",
      saferQuestion:
        "Is the credential unique, private, and unchanged by anyone else?",
      saferChoice:
        "Replace exposed or reused credentials everywhere they appear.",
    },
    {
      name: "Recovery control",
      saferQuestion:
        "Does the real owner still control recovery email, phone, codes, and trusted devices?",
      saferChoice:
        "Restore recovery control and involve official support when settings were changed unexpectedly.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Authentication Evidence Priority Board
      </h2>
      <p className="mt-3 text-slate-300">
        Defenders compare account evidence before choosing an action. The most
        urgent problems involve current unauthorized access or loss of recovery
        control.
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

export default function AuthenticationScenarioLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.7 Authentication Scenario Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply authentication, passphrase, password-manager, MFA, recovery,
            alert, and account-review skills to realistic fictional incidents
            using a calm defender response process.
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
          lessonTitle="Authentication Scenario Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish authentication, authorization, credentials, MFA, recovery, sessions, and alerts.",
            "I will use fictional accounts, credentials, devices, codes, and messages only.",
            "I am ready to prioritize containment, account hardening, documentation, and trusted escalation.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Good Incident Response Is Calm, Ordered, and Evidence-Based"
        >
          <p className="leading-8">
            Authentication incidents often include urgency, confusing alerts,
            repeated prompts, unfamiliar devices, or changed recovery settings.
            Defenders slow down, verify official information, protect current
            access, and complete the most important actions in the correct
            order.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> do not test real
            accounts, enter real passwords, share codes, investigate another
            person’s account, or attempt unauthorized access. Every scenario in
            this lab is fictional.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Analyze authentication evidence and identify the most urgent account risk.",
            "Choose safe containment, credential, MFA, recovery, and session actions.",
            "Write a clear defender recommendation and identify when trusted escalation is required.",
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
          title="Correct Priorities Reduce Damage"
        >
          <p className="leading-8">
            When an unknown session is active, removing access may come before
            updating less urgent settings. When recovery control is lost,
            official support may be needed immediately. When a credential is
            reused, every connected account must be reviewed. Prioritization is
            part of account defense.
          </p>
        </SectionCard>

        <IncidentResponseFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Contain First, Then Rebuild Protection"
        >
          <p className="leading-8">
            Containment stops or limits current access. Account hardening then
            improves credentials, MFA, recovery, devices, sessions, and alerts.
            Documentation records safe facts without exposing secrets.
            Escalation brings in trusted people when the account, evidence, or
            recovery process is too serious to manage alone.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Authentication Incident Response
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

        <EvidencePriorityBoard />
        <FakeIncidentPanel />

        <FakeDashboardCard
          title="Fake Authentication Incident Dashboard"
          subtitle="Training dashboard combining fictional login, credential, MFA, session, and recovery evidence."
          metrics={[
            {
              label: "Security events",
              value: "8",
              note: "Login prompts, session changes, recovery alerts, and credential findings.",
            },
            {
              label: "Urgent actions",
              value: "3",
              note: "Deny a prompt, remove an unknown session, and restore recovery control.",
            },
            {
              label: "Follow-up actions",
              value: "5",
              note: "Replace reused credentials, review MFA, enable alerts, document, and escalate.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Account Security Changes"
          severity="High"
          time="3:48 PM"
          source="Fake SchoolCloud Training"
          details="A fictional student receives an unexpected MFA prompt, sees an unknown browser session, and notices that the recovery email was changed."
          recommendation="Deny the prompt, use the official service to remove unknown access, restore recovery control, replace credentials, and contact trusted school technology staff."
        />

        <FakeLogPanel
          title="Fake Authentication Incident Log"
          logs={[
            "15:39:08 MFA_PROMPT user_login_started='false' action='deny'",
            "15:40:21 ACTIVE_SESSION browser='unknown' status='remove_immediately'",
            "15:41:36 RECOVERY_EMAIL changed_by_user='false' status='urgent'",
            "15:43:09 PASSWORD_REUSE accounts='3' credential_id='reuse_B'",
            "15:45:12 ACCOUNT_HARDENING mfa='review' alerts='enable' devices='audit'",
            "15:48:30 ESCALATION contact='trusted_school_technology_staff' status='recommended'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should Happen First?"
          evidence={[
            "A fictional student did not start a login but received an MFA prompt.",
            "An unknown browser session is currently active.",
            "The recovery email was changed without permission.",
            "The same password is reused on two other accounts.",
          ]}
          question="Which response uses the safest priority order?"
          options={[
            "Deny the prompt, remove unknown access, restore recovery control, replace reused credentials, and involve trusted support.",
            "Change the profile picture before reviewing the session.",
            "Approve the prompt and wait to see what happens.",
            "Share the current password with a friend for backup.",
          ]}
          bestAnswer={0}
          explanation="The safest sequence contains current access first, restores recovery control, replaces exposed credentials, and escalates the serious incident."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Authentication Incidents Worse"
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
          title="Complete a Multi-Step Fake Account Incident"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident File
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Access Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives repeated MFA prompts, finds an
                unknown active browser, discovers an old recovery phone, and
                learns that the same password is used for school email and cloud
                storage.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Response Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Deny all unexpected prompts.</li>
                <li>Remove the unknown browser session.</li>
                <li>Replace reused credentials on every affected account.</li>
                <li>Update the recovery phone and review backup methods.</li>
                <li>Document safe facts and involve trusted technology staff.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Urgent Account Message Demands a Recovery Code"
          scenario="A fictional student receives a message claiming that the school account is under attack. The message demands a backup code and says the account will be deleted in five minutes."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not reply or share the code. Open the official school portal directly and contact school technology staff through a trusted channel.",
              outcome:
                "Best defensive choice. It protects the recovery secret and verifies the situation using official sources.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Send the code because the deadline is urgent.",
              outcome:
                "Risky. Urgency and a request for a recovery code are strong warning signs.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the message and backup code in a group chat for advice.",
              outcome:
                "Unsafe. Recovery codes must remain private.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Shared Device Shows Another Student’s Account"
          scenario="A fictional student opens a classroom laptop and sees another student’s email, grades, and files because the previous session was not closed."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not explore the account, sign out if appropriate, and notify the teacher or school technology staff.",
              outcome:
                "Best defensive choice. It protects privacy and reports the session problem without unauthorized access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Read recent messages to identify the student.",
              outcome:
                "Risky. Accessing another person’s private information is not an appropriate investigation method.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the password so no one else can use the account.",
              outcome:
                "Unsafe. Changing another person’s credential is unauthorized and may lock out the owner.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Authentication Scenario Lab Checklist"
          items={[
            "I pause before approving prompts, sharing codes, or opening urgent recovery links.",
            "I verify events through the official service.",
            "I prioritize current unauthorized sessions and recovery-control changes.",
            "I replace every reused or exposed credential on affected accounts.",
            "I review MFA, recovery options, devices, sessions, and alerts after containment.",
            "I document safe facts without exposing credentials or private information.",
            "I involve trusted adults or technology staff when the incident is serious or unclear.",
          ]}
        />

        <MiniQuiz
          title="B7.7 Mini Quiz: Authentication Scenario Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional authentication incident report. Include the evidence, risk level, containment steps, account-hardening steps, trusted escalation path, and post-incident checklist."
          tips={[
            "Use fake accounts, devices, alerts, credentials, and codes only.",
            "Do not include real private information or instructions for unauthorized access.",
            "Explain why the response order matters.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication incidents should be handled with a calm, evidence-based process.",
            "Unexpected prompts, unknown sessions, and unauthorized recovery changes require immediate attention.",
            "Containment limits current access before longer-term account hardening begins.",
            "Reused credentials must be replaced on every affected account.",
            "Trusted adults and technology staff should be involved when an account incident is serious, unclear, or connected to school systems.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}