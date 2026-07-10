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
const previousLesson = `${modulePath}/passphrases-and-password-strength`;
const nextLesson = `${modulePath}/mfa-types-and-login-verification`;

const vocab = [
  [
    "Password manager",
    "A tool designed to store and organize account credentials in an encrypted vault.",
  ],
  [
    "Vault",
    "The protected storage area inside a password manager where saved credentials are kept.",
  ],
  [
    "Master password",
    "The primary secret used to unlock a password manager vault.",
  ],
  [
    "Password reuse",
    "Using the same or nearly the same credential on more than one account.",
  ],
  [
    "Unique credential",
    "A password or passphrase used for one account and not reused anywhere else.",
  ],
  [
    "Credential exposure",
    "A situation in which a password, passphrase, token, or other login secret may no longer be private.",
  ],
];

const managerWorkflow = [
  {
    title: "Create one strong vault secret",
    example:
      "Protect the password manager with a long, unique master password or passphrase that is never reused.",
  },
  {
    title: "Generate unique credentials",
    example:
      "Use different long credentials for every account instead of memorizing one shared password.",
  },
  {
    title: "Store and autofill carefully",
    example:
      "Use the official password manager to fill credentials only on the correct service or app.",
  },
  {
    title: "Review and update",
    example:
      "Replace reused or exposed credentials and remove old account entries that are no longer needed.",
  },
];

const reuseReviewRows = [
  {
    item: "School email",
    source: "Same fake password as gaming account",
    review:
      "High reuse risk. Replace both credentials so each account has a unique login secret.",
  },
  {
    item: "Cloud storage",
    source: "Unique generated credential",
    review:
      "Safer structure. Keep it stored in the protected vault and do not copy it into notes or messages.",
  },
  {
    item: "Shopping account",
    source: "Same base password with one number changed",
    review:
      "Still predictable reuse. Small variations do not isolate account risk.",
  },
  {
    item: "Password manager vault",
    source: "Master passphrase used nowhere else",
    review:
      "Correct defensive practice. The vault secret must remain unique, private, and protected with MFA when available.",
  },
  {
    item: "Old forum account",
    source: "Reused credential and no longer used",
    review:
      "Change or remove the credential, close the account if appropriate, and confirm the password is not used elsewhere.",
  },
];

const mistakes = [
  "Using the password manager master password on any other account.",
  "Saving passwords in plain-text notes, screenshots, messages, or unprotected documents.",
  "Assuming a password is unique because only one number or symbol changed.",
  "Copying a credential into an unfamiliar form without confirming the official domain or app.",
  "Ignoring old accounts that still use reused credentials.",
  "Trying to investigate a real credential exposure alone instead of using official account recovery and trusted help.",
];

const quizQuestions = [
  {
    question: "What is the main benefit of a password manager?",
    choices: [
      "It helps users store and use unique credentials for different accounts.",
      "It allows one password to be reused everywhere.",
      "It makes MFA unnecessary.",
      "It automatically makes every website trustworthy.",
    ],
    answer: 0,
    explanation:
      "A password manager supports unique account credentials so one exposed password does not place every account at risk.",
  },
  {
    question: "What should be true about a password manager’s master password?",
    choices: [
      "It should be long, unique, private, and used nowhere else.",
      "It should match the school email password.",
      "It should be shared with close friends.",
      "It should be posted in a private group chat.",
    ],
    answer: 0,
    explanation:
      "The master password protects the vault, so it must be unique and carefully protected.",
  },
  {
    question: "Which example still counts as password reuse?",
    choices: [
      "Using Falcons2026 for one account and Falcons2027 for another.",
      "Using unrelated unique credentials for every account.",
      "Using a generated credential stored in a password manager.",
      "Using a different passphrase for each account.",
    ],
    answer: 0,
    explanation:
      "Small changes to the same base password remain predictable and connect account risk.",
  },
  {
    question: "What should happen after learning that a reused credential may be exposed?",
    choices: [
      "Change it on every account where it was used, starting with the most important accounts.",
      "Keep using it until an account is definitely taken over.",
      "Send the password to a friend for safekeeping.",
      "Post the credential publicly so others know not to use it.",
    ],
    answer: 0,
    explanation:
      "A reused exposed credential should be replaced everywhere it appears, beginning with critical accounts such as email and recovery services.",
  },
  {
    question: "What is the safest way to use password-manager autofill?",
    choices: [
      "Confirm the official site or app before filling credentials.",
      "Autofill on every page that asks for a password.",
      "Disable all account alerts.",
      "Copy the vault contents into a document first.",
    ],
    answer: 0,
    explanation:
      "Autofill should be used only after checking that the user is on the correct official service.",
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
          Previous: B7.2 Passphrases and Password Strength
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
          Next: B7.4 MFA Types and Login Verification
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

function PasswordManagerFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Password Manager Defense Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Password managers reduce reuse by helping users create, store, and use
        different credentials for different accounts.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {managerWorkflow.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> one protected vault
        can support many unique credentials, but the vault’s master password
        must be strong, unique, and never shared.
      </div>
    </section>
  );
}

function FakeReusePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Password Reuse Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel shows how reuse connects account risk and how a
            password manager can support safer unique credentials.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {reuseReviewRows.map((row) => (
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

function VaultSafetyBoard() {
  const factors = [
    {
      name: "Master password",
      saferQuestion:
        "Is the vault protected by a long, unique secret used nowhere else?",
      saferChoice:
        "Create one strong vault passphrase and protect it with MFA when available.",
    },
    {
      name: "Unique entries",
      saferQuestion:
        "Does every saved account have a different credential?",
      saferChoice:
        "Replace reused and slightly modified passwords with separate credentials.",
    },
    {
      name: "Official autofill",
      saferQuestion:
        "Is the credential being filled only on the correct official site or app?",
      saferChoice:
        "Check the domain, app, and context before allowing autofill.",
    },
    {
      name: "Vault recovery",
      saferQuestion:
        "Are recovery settings current, protected, and controlled by the account owner?",
      saferChoice:
        "Review recovery methods and never share recovery codes or backup secrets.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Password Manager Safety Board
      </h2>
      <p className="mt-3 text-slate-300">
        A password manager is most useful when the vault, saved credentials,
        autofill behavior, and recovery options are all reviewed defensively.
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

export default function PasswordManagersReuseRiskPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.3 Password Managers and Reuse Risk
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn why reused credentials connect account risk and how password
            managers support unique passwords, safer autofill, protected vaults,
            and better recovery planning.
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
          lessonTitle="Password Managers and Reuse Risk"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand why each account should use a different credential.",
            "I know that a password manager vault needs its own strong master password.",
            "I will use fake credentials and fake account examples only.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Reused Password Can Connect Many Accounts"
        >
          <p className="leading-8">
            Password reuse creates a chain. If one account exposes a reused
            credential, every other account using the same password may also be
            at risk. Password managers help break that chain by storing a
            different credential for each service inside a protected vault.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never enter real
            passwords, master passwords, recovery codes, or vault contents into
            a lesson. Use fictional credentials only.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how password reuse creates chain-reaction account risk.",
            "Describe how a password manager stores and uses unique credentials.",
            "Review fake vault, autofill, and recovery settings using safe defensive reasoning.",
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
          title="Account Independence Limits Damage"
        >
          <p className="leading-8">
            Unique credentials separate account risk. A problem with one
            entertainment account should not automatically expose school email,
            cloud storage, banking, recovery, or other important services.
            Password managers make that separation practical.
          </p>
        </SectionCard>

        <PasswordManagerFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="The Vault Protects Many Unique Secrets"
        >
          <p className="leading-8">
            A password manager stores credentials in a protected vault. The user
            remembers one strong master password while the manager creates and
            stores different credentials for other accounts. The master
            password must never be reused, and the vault should use MFA when
            available.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Password Manager Thinking
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

        <VaultSafetyBoard />
        <FakeReusePanel />

        <FakeDashboardCard
          title="Fake Password Reuse Dashboard"
          subtitle="Training dashboard using fictional accounts and credentials to practice reuse analysis."
          metrics={[
            {
              label: "Fake accounts",
              value: "10",
              note: "School, cloud, gaming, shopping, and project accounts.",
            },
            {
              label: "Reused credentials",
              value: "4",
              note: "One shared password and three slightly modified versions were found.",
            },
            {
              label: "Unique entries",
              value: "6",
              note: "Separate generated credentials are stored in the fake vault.",
            },
          ]}
        />

        <FakeAlertCard
          title="Reused Credential May Be Exposed"
          severity="High"
          time="12:16 PM"
          source="Fake Password Manager Training"
          details="A fictional gaming account reports a credential exposure. The same fake password is also used for school email and cloud storage."
          recommendation="Change the reused password on every affected account, beginning with email and recovery-related services, and replace each one with a unique credential."
        />

        <FakeLogPanel
          title="Fake Password Manager Review Log"
          logs={[
            "12:07:02 VAULT_ENTRY account='school_email' credential_id='reuse_A'",
            "12:07:31 VAULT_ENTRY account='gaming' credential_id='reuse_A'",
            "12:08:06 VAULT_ENTRY account='cloud_storage' credential_id='reuse_A'",
            "12:10:44 EXPOSURE_ALERT source='gaming_service' credential_id='reuse_A' status='possible_exposure'",
            "12:12:19 PRIORITY_CHANGE account='school_email' action='replace_first'",
            "12:16:03 SAFE_ACTION recommendation='replace every reused credential and enable MFA where available'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Accounts Need Immediate Credential Changes?"
          evidence={[
            "A fictional gaming service reports that a reused credential may be exposed.",
            "The same credential is used for school email and cloud storage.",
            "A shopping account uses a separate unique credential.",
            "The password manager vault uses a different master passphrase.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "Change the credential on gaming, school email, and cloud storage because all three share the exposed secret.",
            "Change only the shopping account because it is separate.",
            "Keep the reused password until an account is definitely taken over.",
            "Share the vault master password with a friend for backup.",
          ]}
          bestAnswer={0}
          explanation="Every account using the reused exposed credential is at risk. The unique shopping credential and separate vault master password are not part of that reuse chain."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Password Manager Safety"
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
          title="Break a Fake Password Reuse Chain"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Account Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Student Vault Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student uses one password for school email, gaming,
                and cloud storage, a slightly changed version for shopping, and
                a unique generated credential for a project account.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Map which fake accounts share the same base credential.</li>
                <li>Prioritize email, recovery, and cloud accounts first.</li>
                <li>Create separate fictional replacement credentials.</li>
                <li>Confirm the vault master password is unique.</li>
                <li>Review MFA and recovery options for important accounts.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Password Manager Does Not Autofill"
          scenario="A fictional student opens a page that looks similar to the school portal, but the password manager does not recognize the site and does not autofill."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause, check the domain, close the page if it is not official, and open the school portal through a trusted bookmark or school link.",
              outcome:
                "Best defensive choice. The failed autofill may be a useful clue that the site does not match the saved official domain.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Copy and paste the password manually because the page looks familiar.",
              outcome:
                "Risky. Appearance alone does not prove that the page is the official service.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the password to a friend and ask them to test the page.",
              outcome:
                "Unsafe. Credentials should never be shared or tested on questionable pages.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Password Manager and Reuse Risk Checklist"
          items={[
            "I can explain how reused credentials connect the risk of several accounts.",
            "I understand why a password manager master password must be unique and private.",
            "I can review fake vault entries and identify reused or slightly modified credentials.",
            "I can use missing or unexpected autofill as a reason to verify the official site.",
            "I know to change every affected credential and ask trusted help when a real exposure alert appears.",
          ]}
        />

        <MiniQuiz
          title="B7.3 Mini Quiz: Password Managers and Reuse Risk"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake password reuse map for six fictional accounts. Show which accounts share credentials, identify the highest-priority changes, and explain how a password manager would create safer account separation."
          tips={[
            "Use fake account names and fictional credentials only.",
            "Do not display or describe any real password.",
            "Include the vault master password rule and one autofill safety reminder.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Password reuse connects the security of several accounts.",
            "Password managers support separate unique credentials stored inside a protected vault.",
            "The vault master password should be long, unique, private, and protected with MFA when available.",
            "Small password changes do not fully remove reuse risk.",
            "A missing or unexpected autofill event is a reason to verify the official site before entering credentials.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}