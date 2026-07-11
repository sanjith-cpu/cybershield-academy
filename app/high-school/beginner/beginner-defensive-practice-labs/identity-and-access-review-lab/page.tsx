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
  "/high-school/beginner/beginner-defensive-practice-labs";
const previousLesson =
  `${modulePath}/lab-safety-scope-and-authorization`;
const nextLesson =
  `${modulePath}/phishing-and-email-triage-lab`;

const vocab = [
  [
    "Identity",
    "The digital representation of a person, service, device, or application in a system.",
  ],
  [
    "Authentication",
    "The process of verifying that an identity is who or what it claims to be.",
  ],
  [
    "Authorization",
    "The process of deciding which resources and actions an authenticated identity may access.",
  ],
  [
    "Least privilege",
    "Giving an identity only the minimum access needed for its approved responsibilities.",
  ],
  [
    "Role-based access control",
    "Assigning permissions based on a defined job, function, or responsibility rather than granting access individually without structure.",
  ],
  [
    "Access review",
    "A periodic check of accounts, roles, permissions, ownership, MFA status, and continued business need.",
  ],
];

const reviewStages = [
  {
    title: "Identify the account",
    example:
      "Confirm the fictional user, service, owner, department, role, and account status.",
  },
  {
    title: "Review authentication",
    example:
      "Check MFA enrollment, login history, trusted devices, failed attempts, and unusual locations.",
  },
  {
    title: "Review authorization",
    example:
      "Compare assigned roles and permissions with the account's approved responsibilities.",
  },
  {
    title: "Choose and document action",
    example:
      "Keep, reduce, suspend, reset, investigate, or escalate access based on evidence and policy.",
  },
];

const identityRows = [
  {
    item: "Teacher account",
    source: "Active employee with course-management responsibilities",
    review:
      "Keep standard teaching access and remove unrelated administrative permissions.",
  },
  {
    item: "Former contractor",
    source: "Contract ended 21 days ago; account remains enabled",
    review:
      "Suspend the account, preserve evidence, confirm offboarding, and escalate the process gap.",
  },
  {
    item: "Shared admin account",
    source: "Used by four staff members with no individual accountability",
    review:
      "Replace with named admin accounts, least privilege, MFA, and documented emergency access.",
  },
  {
    item: "Student help-desk volunteer",
    source: "Can view password-reset tickets but cannot approve resets",
    review:
      "Appropriate if the role is documented, supervised, and limited to necessary ticket data.",
  },
  {
    item: "Service account",
    source: "Runs nightly reports and has interactive login enabled",
    review:
      "Disable unnecessary interactive login, rotate credentials through approved processes, and confirm ownership.",
  },
];

const mistakes = [
  "Keeping access because an account has always had it.",
  "Assuming MFA alone proves every login is safe.",
  "Using shared administrator accounts for convenience.",
  "Leaving former users, contractors, or temporary accounts enabled.",
  "Granting broad permissions when a narrower role would work.",
  "Removing access without documenting evidence, ownership, approval, or business impact.",
];

const quizQuestions = [
  {
    question: "What is least privilege?",
    choices: [
      "Giving an identity only the minimum access needed for approved responsibilities.",
      "Giving every user administrator access.",
      "Allowing access based only on seniority.",
      "Removing all access from every account.",
    ],
    answer: 0,
    explanation:
      "Least privilege reduces unnecessary exposure while still supporting approved work.",
  },
  {
    question: "What is the difference between authentication and authorization?",
    choices: [
      "Authentication verifies identity; authorization determines permitted access.",
      "They are exactly the same.",
      "Authentication grants admin rights automatically.",
      "Authorization verifies passwords only.",
    ],
    answer: 0,
    explanation:
      "Authentication answers who you are, while authorization answers what you may do.",
  },
  {
    question: "What should happen to an account belonging to a former contractor?",
    choices: [
      "Suspend or disable it through the approved offboarding process and document the gap.",
      "Leave it active indefinitely.",
      "Share it with a replacement contractor.",
      "Remove the audit logs first.",
    ],
    answer: 0,
    explanation:
      "Former-user accounts should not remain active after the approved need ends.",
  },
  {
    question: "Why are shared administrator accounts risky?",
    choices: [
      "They weaken accountability and make it harder to know who performed an action.",
      "They always improve security.",
      "They make MFA unnecessary.",
      "They reduce the need for logs.",
    ],
    answer: 0,
    explanation:
      "Named accounts improve accountability, access review, and incident investigation.",
  },
  {
    question: "What is the strongest access-review decision?",
    choices: [
      "Match permissions to current approved responsibilities and document every change.",
      "Keep every permission to avoid questions.",
      "Grant extra access just in case.",
      "Delete accounts without evidence or approval.",
    ],
    answer: 0,
    explanation:
      "Access reviews should use current business need, least privilege, evidence, and documented approval.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B14</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B14.1 Lab Safety, Scope, and Authorization
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
          Next: B14.3 Phishing and Email Triage Lab
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

function AccessReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Identity and Access Review Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong access reviews connect identity, authentication, authorization,
        business need, evidence, ownership, and documented action.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {reviewStages.map((stage, index) => (
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
        <span className="font-bold">Access rule:</span> access should reflect
        current approved responsibilities, not old assumptions or convenience.
      </div>
    </section>
  );
}

function FakeIdentityPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Identity Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Account and Permission Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares account purpose, ownership,
            permissions, authentication status, and recommended action.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {identityRows.map((row) => (
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

function AccessDecisionBoard() {
  const areas = [
    {
      name: "Identity status",
      saferQuestion:
        "Is the account active, inactive, temporary, shared, service-based, or no longer needed?",
      saferChoice:
        "Verify ownership and current need before keeping, changing, or disabling access.",
    },
    {
      name: "Authentication",
      saferQuestion:
        "Is MFA enabled, are devices expected, and do login patterns match approved activity?",
      saferChoice:
        "Review trusted context and escalate unusual activity that cannot be verified.",
    },
    {
      name: "Authorization",
      saferQuestion:
        "Do roles and permissions match the account's current responsibilities?",
      saferChoice:
        "Remove unnecessary access and keep only documented, approved permissions.",
    },
    {
      name: "Documentation",
      saferQuestion:
        "Can another reviewer understand the evidence, decision, owner, and next step?",
      saferChoice:
        "Record the reason, approval, timestamp, evidence, and follow-up action clearly.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Identity Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Access Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Each decision should be based on current need, trusted evidence, least
        privilege, clear ownership, and approved process.
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
                Strong defensive action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function IdentityAndAccessReviewLabPage() {
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
              Module B14
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.2 Identity and Access Review Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice reviewing fictional identities, accounts, login events,
            MFA status, roles, permissions, ownership, least privilege, and
            documented access decisions.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B14: Beginner Defensive Practice Labs"
          lessonTitle="Identity and Access Review Lab"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that authentication verifies identity while authorization controls access.",
            "I will use fictional users, accounts, roles, login events, devices, and organizations only.",
            "I am ready to apply least privilege, ownership, evidence, documentation, and escalation rules.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Most Access Problems Begin With One Unanswered Question: Does This Account Still Need This Permission?"
        >
          <p className="leading-8">
            Accounts change as people join, move roles, take leave, complete
            projects, or leave an organization. Defenders must regularly confirm
            who owns each identity, what it is for, how it authenticates, and
            whether its access still matches approved responsibilities.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> do not use
            real usernames, passwords, MFA codes, student records, employee
            records, or live account details. All evidence in this lab is
            fictional.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain identity, authentication, authorization, least privilege, role-based access, and access reviews.",
            "Evaluate fictional accounts for current need, ownership, MFA, unusual login activity, and permission fit.",
            "Choose and document safe actions such as keep, reduce, suspend, reset, investigate, or escalate.",
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
          title="Old, Shared, or Over-Permissioned Accounts Create Avoidable Risk"
        >
          <p className="leading-8">
            Unused accounts, excessive privileges, shared credentials, and weak
            offboarding can allow inappropriate access or make investigations
            difficult. Regular reviews reduce exposure and improve
            accountability.
          </p>
        </SectionCard>

        <AccessReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Access Should Follow Current Responsibility"
        >
          <p className="leading-8">
            A user's access should be tied to a current approved role or task.
            When that need changes, permissions should be reviewed and adjusted
            through an authorized process with evidence and clear ownership.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Identity and Access Review
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

        <AccessDecisionBoard />
        <FakeIdentityPanel />

        <FakeDashboardCard
          title="Fake Identity and Access Dashboard"
          subtitle="Training dashboard using fictional users, roles, permissions, MFA status, login events, owners, and review decisions."
          metrics={[
            {
              label: "Accounts reviewed",
              value: "42",
              note: "Fictional employee, student, contractor, service, administrator, and temporary accounts.",
            },
            {
              label: "Access reductions",
              value: "8",
              note: "Unnecessary administrative, reporting, storage, and support permissions were removed.",
            },
            {
              label: "Accounts requiring escalation",
              value: "5",
              note: "Former users, shared admin access, unusual logins, and unowned service accounts.",
            },
          ]}
        />

        <FakeAlertCard
          title="Former Contractor Account Still Enabled"
          severity="High"
          time="9:26 AM"
          source="Fake Identity Governance Monitor"
          details="A fictional contractor account remains active 21 days after the contract ended and still has access to shared files and an internal reporting tool."
          recommendation="Suspend the account through the approved process, preserve login evidence, confirm ownership and offboarding status, and escalate the process failure."
        />

        <FakeLogPanel
          title="Fake Access Review Log"
          logs={[
            "08:45:02 ACCOUNT user='contractor_17' status='enabled'",
            "08:48:19 OWNER department='facilities' contract_end='21_days_ago'",
            "08:52:44 ACCESS groups='shared_files,reporting_tool'",
            "08:57:31 AUTH mfa='enabled' last_login='2_days_ago'",
            "09:03:08 BUSINESS_NEED manager_confirmed='none'",
            "09:14:56 DECISION action='suspend_and_escalate'",
            "09:26:11 CASE owner='identity_team' evidence='preserved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should This Account Keep Its Current Access?"
          evidence={[
            "A fictional teacher account is active and still employed.",
            "The account has normal teaching access plus system-wide user administration.",
            "The teacher's role does not include account administration.",
            "No approval record explains the extra permission.",
          ]}
          question="What is the strongest access-review decision?"
          options={[
            "Keep teaching access, remove the unexplained administrative permission through the approved process, and document the decision.",
            "Keep all permissions because the account is active.",
            "Give the teacher additional administrator rights.",
            "Delete the account immediately without confirming ownership.",
          ]}
          bestAnswer={0}
          explanation="The account is valid, but the extra administrative access does not match the user's approved responsibilities."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Access Reviews"
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
          eyebrow="Safe Practice Lab"
          title="Review a Fictional Access Inventory"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Access Inventory
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Accounts
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional inventory includes teacher, student, contractor,
                administrator, volunteer, guest, emergency, and service
                accounts with different MFA, ownership, login, and role details.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Confirm the account type, owner, status, and business purpose.</li>
                <li>Review MFA, login history, device context, and unusual activity.</li>
                <li>Compare assigned roles with current responsibilities.</li>
                <li>Identify shared, inactive, excessive, temporary, or unowned access.</li>
                <li>Choose keep, reduce, suspend, reset, investigate, or escalate.</li>
                <li>Document evidence, approval, owner, timestamp, and follow-up.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Shared Administrator Account Is Used by Four Staff Members"
          scenario="A fictional support team uses one administrator account because it is easier than managing separate named accounts."
          choices={[
            {
              label: "Choice A",
              response:
                "Replace the shared account with named accounts, least privilege, MFA, logging, and documented emergency-access procedures.",
              outcome:
                "Best identity choice. Named access improves accountability and control.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep sharing the account because the team trusts each other.",
              outcome:
                "Risky. Trust does not replace accountability and access control.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the shared password in the team chat.",
              outcome:
                "Unsafe. Credentials must never be exposed or shared casually.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An MFA Login Comes From an Unfamiliar Device"
          scenario="A fictional administrator account completes MFA from a new device and location with no approved travel or change record."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve evidence, verify the user's activity through an approved channel, review related events, and escalate if unconfirmed.",
              outcome:
                "Best defensive choice. MFA success does not remove the need for context.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the alert because MFA was completed.",
              outcome:
                "Risky. The unfamiliar device and location remain unexplained.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask the user to send the MFA code.",
              outcome:
                "Unsafe. Account secrets and codes must never be requested.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Identity and Access Review Checklist"
          items={[
            "I confirm account ownership, status, purpose, and current business need.",
            "I distinguish authentication from authorization.",
            "I review MFA, login history, devices, locations, and related events.",
            "I compare permissions with approved responsibilities.",
            "I apply least privilege and remove unnecessary access.",
            "I escalate shared, inactive, suspicious, excessive, or unowned accounts.",
            "I document evidence, decisions, approvals, owners, timestamps, and follow-up.",
          ]}
        />

        <MiniQuiz
          title="B14.2 Mini Quiz: Identity and Access Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional identity and access review report. Include account type, owner, status, business purpose, MFA status, login evidence, assigned roles, excessive permissions, risk, decision, approval, owner, timestamp, and follow-up action."
          tips={[
            "Use fictional names, accounts, devices, roles, login events, and organizations only.",
            "Do not include real usernames, passwords, MFA codes, private records, or live account screenshots.",
            "Explain why each access decision follows least privilege and current business need.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication verifies identity; authorization determines permitted access.",
            "Least privilege limits access to the minimum required for approved responsibilities.",
            "Access reviews should confirm ownership, current need, MFA, login context, roles, and permissions.",
            "Shared, inactive, excessive, suspicious, and unowned accounts require action or escalation.",
            "Every access change should be supported by evidence, approval, documentation, and clear ownership.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}