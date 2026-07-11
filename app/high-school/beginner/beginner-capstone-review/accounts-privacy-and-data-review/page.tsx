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

const modulePath = "/high-school/beginner/beginner-capstone-review";
const previousLesson = `${modulePath}/networking-and-web-concepts-review`;
const nextLesson = `${modulePath}/threats-and-defenses-review`;

const vocabulary = [
  [
    "Digital identity",
    "The accounts, profiles, identifiers, credentials, devices, and activity connected to a person or organization online.",
  ],
  [
    "Passphrase",
    "A long, memorable secret made from multiple words or a sentence and used to protect an account.",
  ],
  [
    "Password manager",
    "A tool that securely stores and generates unique account passwords.",
  ],
  [
    "Multi-factor authentication",
    "A sign-in method requiring two or more different types of verification.",
  ],
  [
    "Data classification",
    "The process of labeling information by sensitivity, value, legal need, and required protection.",
  ],
  [
    "Account recovery",
    "The approved process used to regain access after a password, device, or authentication factor is lost.",
  ],
];

const protectionLayers = [
  {
    title: "Account protection",
    question:
      "How are sign-in secrets, MFA methods, recovery options, and login alerts protected?",
    examples:
      "Unique passphrases, password managers, MFA, recovery codes, trusted devices, and account alerts.",
  },
  {
    title: "Privacy protection",
    question:
      "Which personal details, permissions, contacts, locations, and profile information are actually necessary?",
    examples:
      "Minimal sharing, permission review, privacy settings, limited collection, and safer defaults.",
  },
  {
    title: "Data protection",
    question:
      "How is information classified, stored, shared, backed up, retained, and deleted?",
    examples:
      "Classification labels, restricted sharing, encryption concepts, backups, retention, and secure disposal.",
  },
  {
    title: "Recovery protection",
    question:
      "Can the owner safely regain access and restore important data after a problem?",
    examples:
      "Verified recovery channels, current contacts, protected codes, tested backups, and documented ownership.",
  },
];

const reviewRows = [
  {
    item: "School account",
    evidence:
      "Unique passphrase, MFA enabled, current recovery contact, and normal login alerts",
    decision:
      "Strong baseline protection if recovery codes and trusted devices are also stored safely.",
  },
  {
    item: "Social profile",
    evidence:
      "Public birthday, school name, location history, and friend list",
    decision:
      "Reduce unnecessary exposure and review who can see personal details and activity.",
  },
  {
    item: "Shared project folder",
    evidence:
      "Anyone-with-link access remains active after the project ends",
    decision:
      "Restrict access, confirm current members, remove the public link, and document ownership.",
  },
  {
    item: "Cloud photo archive",
    evidence:
      "Only one copy exists and account recovery information is outdated",
    decision:
      "Update recovery, enable MFA, create a separate protected backup, and test access.",
  },
  {
    item: "Password reuse",
    evidence:
      "The same password protects email, school, gaming, and shopping accounts",
    decision:
      "Replace reused passwords with unique credentials stored in a password manager.",
  },
];

const mistakes = [
  "Reusing one password across multiple important accounts.",
  "Saving passwords in public notes, messages, or shared documents.",
  "Treating MFA as a reason to ignore suspicious login activity.",
  "Publishing more personal information than the service requires.",
  "Leaving old sharing links, app permissions, or recovery contacts active.",
  "Assuming a backup is useful without confirming it can be accessed and restored.",
];

const quizQuestions = [
  {
    question: "Why should important accounts use unique passwords?",
    choices: [
      "So one exposed password does not endanger every other account.",
      "So passwords are easier to share.",
      "So MFA becomes unnecessary.",
      "So recovery options can be removed.",
    ],
    answer: 0,
    explanation:
      "Unique credentials limit the damage if one account or password is compromised.",
  },
  {
    question: "What is the main purpose of a password manager?",
    choices: [
      "To generate and securely store unique passwords.",
      "To publish passwords across devices.",
      "To replace every security control.",
      "To remove the need for account recovery.",
    ],
    answer: 0,
    explanation:
      "Password managers make it practical to use strong, unique credentials across many accounts.",
  },
  {
    question: "What does multi-factor authentication add?",
    choices: [
      "Another type of verification beyond the password.",
      "A second copy of the same password.",
      "A public recovery code.",
      "Automatic administrator access.",
    ],
    answer: 0,
    explanation:
      "MFA requires different verification factors and reduces dependence on the password alone.",
  },
  {
    question: "What is data classification?",
    choices: [
      "Labeling information by sensitivity, value, and required protection.",
      "Deleting every file.",
      "Sharing all data publicly.",
      "Giving every user the same access.",
    ],
    answer: 0,
    explanation:
      "Classification helps determine who may access data and how it should be stored, shared, retained, and protected.",
  },
  {
    question: "Which account recovery practice is strongest?",
    choices: [
      "Use current trusted recovery methods, protect recovery codes, and review them regularly.",
      "Post recovery codes in a public note.",
      "Use an old phone number that no longer belongs to you.",
      "Share recovery access with strangers.",
    ],
    answer: 0,
    explanation:
      "Recovery methods should be current, trusted, protected, and regularly reviewed.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B15</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B15.3 Networking and Web Concepts Review
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
          Next: B15.5 Threats and Defenses Review
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

function ProtectionReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Four Connected Protection Layers
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Accounts, privacy, data, and recovery support one another. A weakness in
        one layer can expose the others.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {protectionLayers.map((layer, index) => (
          <div
            key={layer.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">{layer.title}</h3>
            <p className="mt-3 font-semibold text-cyan-100">{layer.question}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {layer.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccountDataReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Account and Data Review
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Protection Gaps and Safer Decisions
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each fictional example connects identity, credentials, privacy,
            sharing, backup, recovery, and ownership.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {reviewRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1.3fr_1.5fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.evidence}</p>
            <p className="text-sm font-semibold text-yellow-100">
              {row.decision}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AccountsPrivacyAndDataReviewPage() {
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
              Module B15
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.4 Accounts, Privacy, and Data Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Review digital identity, passphrases, password managers, MFA,
            account recovery, privacy settings, permissions, data
            classification, secure sharing, cloud storage, backups, and restore
            readiness.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B15: Beginner Capstone Review"
          lessonTitle="Accounts, Privacy, and Data Review"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain why unique credentials, password managers, MFA, and recovery planning work together.",
            "I understand that privacy means limiting unnecessary collection, exposure, permissions, and sharing.",
            "I will use only fictional accounts, data, settings, logs, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Capstone Hook"
          title="A Secure Account Can Still Expose Too Much Data"
        >
          <p className="leading-8">
            Strong passwords and MFA protect sign-in, but privacy settings,
            sharing permissions, data classification, cloud storage, recovery,
            and backups determine what happens after access is granted.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Review rule:</span> never request,
            display, or share real passwords, MFA codes, recovery codes, private
            records, or sensitive account details.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how passphrases, password managers, MFA, recovery, and login alerts protect accounts.",
            "Review privacy settings, app permissions, personal information, sharing links, and data classifications.",
            "Build a layered plan for secure storage, backups, restoration, retention, and recovery ownership.",
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
          title="Account Security, Privacy, and Data Protection Are One Connected System"
        >
          <p className="leading-8">
            A compromised email account may affect password resets. A public
            sharing link may expose private data. Outdated recovery methods may
            lock out the rightful owner. Untested backups may fail during a real
            emergency.
          </p>
        </SectionCard>

        <ProtectionReviewBoard />

        <SectionCard
          eyebrow="Core Concept"
          title="Protect the Identity, Limit the Data, Control the Access, and Plan the Recovery"
        >
          <p className="leading-8">
            Strong protection combines unique credentials, MFA, trusted
            recovery, minimal personal exposure, least privilege, careful
            sharing, protected storage, separate backups, and tested recovery.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Accounts, Privacy, and Data Review Terms
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
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

        <AccountDataReviewBoard />

        <FakeDashboardCard
          title="Fake Account, Privacy, and Data Dashboard"
          subtitle="Training dashboard using fictional accounts, MFA status, privacy settings, sharing links, classifications, backups, and recovery reviews."
          metrics={[
            {
              label: "Accounts reviewed",
              value: "35",
              note: "Fictional school, email, cloud, social, shopping, gaming, and administrator accounts.",
            },
            {
              label: "Privacy gaps",
              value: "12",
              note: "Public profile details, broad app permissions, open links, and unnecessary data collection.",
            },
            {
              label: "Recovery gaps",
              value: "7",
              note: "Outdated contacts, unprotected codes, missing backups, and untested restores.",
            },
          ]}
        />

        <FakeAlertCard
          title="Shared Project Folder Remains Public After Project Ends"
          severity="High"
          time="4:16 PM"
          source="Fake Data Sharing Monitor"
          details="A fictional project folder containing names, class schedules, draft assignments, and contact details remains available through an anyone-with-link setting after the project is complete."
          recommendation="Restrict access, review prior sharing, remove the public link, confirm the owner, classify the contents, and document any possible exposure."
        />

        <FakeLogPanel
          title="Fake Account and Data Review Log"
          logs={[
            "15:32:08 ACCOUNT user='student_09' mfa='enabled'",
            "15:35:27 RECOVERY email='current' phone='outdated'",
            "15:39:14 FOLDER name='science_project' sharing='anyone_with_link'",
            "15:42:51 DATA class='personal_and_school_related'",
            "15:47:09 BACKUP copies='one' restore_test='none'",
            "15:52:43 OWNER teacher='assigned' review='requested'",
            "16:16:20 DECISION restrict='true' update_recovery='true' backup='required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Protection Gap Should Be Fixed First?"
          evidence={[
            "A fictional email account uses a unique password and MFA.",
            "The recovery phone number belongs to someone else after a recent number change.",
            "The account controls password resets for several other services.",
            "A profile picture is slightly outdated.",
          ]}
          question="What is the strongest priority decision?"
          options={[
            "Update the recovery phone through the official account process and review other recovery methods immediately.",
            "Change only the profile picture.",
            "Disable MFA because recovery is inconvenient.",
            "Share the password with a friend as a backup.",
          ]}
          bestAnswer={0}
          explanation="The outdated recovery phone could allow another person to affect access to the email account and connected services."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Account, Privacy, and Data Protection"
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
          eyebrow="Safe Capstone Lab"
          title="Build a Fictional Account and Data Protection Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake User Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Student
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                A fictional student uses school email, a learning portal, cloud
                storage, social platforms, a shopping account, a gaming account,
                and a phone containing photos and recovery codes.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Review unique passwords, password-manager use, MFA, and login alerts.</li>
                <li>Confirm recovery contacts, trusted devices, and protected recovery codes.</li>
                <li>Review profile visibility, app permissions, location access, and personal details.</li>
                <li>Classify files and remove unnecessary public or broad sharing.</li>
                <li>Confirm separate protected backups and restore readiness.</li>
                <li>Assign owners, deadlines, and follow-up review dates.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="One Password Protects Four Important Accounts"
          scenario="A fictional student uses the same memorable password for email, school, shopping, and gaming accounts."
          choices={[
            {
              label: "Choice A",
              response:
                "Create unique passwords with a password manager, enable MFA where available, and review connected recovery methods.",
              outcome:
                "Best account-security choice. One exposed password will no longer unlock every account.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep reusing the password because it is long.",
              outcome:
                "Risky. Length does not remove the danger of reuse.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the password to a friend for safekeeping.",
              outcome:
                "Unsafe. Passwords should not be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Cloud Folder Uses Anyone-With-Link Sharing"
          scenario="A fictional folder contains class rosters, schedules, draft work, and contact details, but anyone with the link can open it."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict access to approved users, review current members, remove the open link, and document the owner and data classification.",
              outcome:
                "Best data-protection choice. The response protects privacy while preserving authorized access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the link public because sharing is easier.",
              outcome:
                "Risky. Convenience does not justify unnecessary exposure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the folder without checking ownership or availability needs.",
              outcome:
                "Unsafe. The response should reduce exposure without causing unnecessary data loss.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Accounts, Privacy, and Data Review Checklist"
          items={[
            "I use unique credentials and a trusted password manager.",
            "I enable MFA and review suspicious login alerts.",
            "I keep recovery methods current and protect recovery codes.",
            "I limit unnecessary personal information, permissions, and location sharing.",
            "I classify data and use least-privilege sharing.",
            "I keep separate protected backups and confirm recovery readiness.",
            "I document owners, risks, changes, and follow-up dates.",
          ]}
        />

        <MiniQuiz
          title="B15.4 Mini Quiz: Accounts, Privacy, and Data Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional account, privacy, and data protection review. Include account purpose, password strategy, password-manager use, MFA, login alerts, recovery methods, profile visibility, app permissions, data classifications, sharing settings, storage location, backup plan, restore status, owner, risks, and next actions."
          tips={[
            "Use fictional users, accounts, data, settings, devices, and organizations only.",
            "Never include real passwords, MFA codes, recovery codes, private records, or personal account screenshots.",
            "Explain how account protection, privacy, sharing, backup, and recovery support one another.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Unique credentials, password managers, MFA, login alerts, and recovery planning protect accounts together.",
            "Privacy improves when people reduce unnecessary collection, exposure, permissions, and sharing.",
            "Data classification helps determine access, storage, sharing, retention, and protection requirements.",
            "Backups should be separate, protected, owned, and tested for recovery.",
            "Strong protection connects identity, accounts, privacy, data, and recovery instead of treating them as separate problems.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}