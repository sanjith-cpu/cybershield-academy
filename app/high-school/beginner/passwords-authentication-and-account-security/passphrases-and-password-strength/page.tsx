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
const previousLesson = `${modulePath}/why-authentication-exists`;
const nextLesson = `${modulePath}/password-managers-and-reuse-risk`;

const vocab = [
  [
    "Password",
    "A secret string used as a knowledge-based credential during authentication.",
  ],
  [
    "Passphrase",
    "A longer login secret made from several words or a memorable sentence structure.",
  ],
  [
    "Length",
    "The number of characters in a password or passphrase, which can increase the number of possible combinations.",
  ],
  [
    "Uniqueness",
    "The practice of using a different password or passphrase for every account.",
  ],
  [
    "Predictability",
    "How easily a password can be guessed from common patterns, personal details, keyboard sequences, or reused phrases.",
  ],
  [
    "Credential stuffing",
    "A defensive concept describing how reused credentials from one exposed account may be tried against other accounts.",
  ],
];

const strengthStages = [
  {
    title: "Increase length",
    example:
      "Use a longer passphrase that is easier to remember but harder to guess than a short password.",
  },
  {
    title: "Reduce predictability",
    example:
      "Avoid names, birthdays, teams, common phrases, keyboard patterns, and obvious substitutions.",
  },
  {
    title: "Keep it unique",
    example:
      "Use a different credential for every account so one exposure does not affect several services.",
  },
  {
    title: "Protect the secret",
    example:
      "Do not share, post, reuse, or enter the credential into untrusted forms or messages.",
  },
];

const passphraseReviewRows = [
  {
    item: "Falcons2026",
    source: "Team name plus current year",
    review:
      "Predictable and connected to public information. Replace it with a longer, unrelated, unique passphrase.",
  },
  {
    item: "qwerty12345",
    source: "Keyboard sequence plus numbers",
    review:
      "Common and easy to guess. Length alone does not help when the pattern is highly predictable.",
  },
  {
    item: "Blue-Lantern-River-Notebook",
    source: "Four unrelated words",
    review:
      "Longer and less predictable as a fake example, but it should still be unique to one account.",
  },
  {
    item: "Password!1",
    source: "Common word with basic substitutions",
    review:
      "Obvious substitutions do not make a common password strong.",
  },
  {
    item: "Same passphrase on five accounts",
    source: "Credential reuse",
    review:
      "High reuse risk. Each account should have its own unique credential.",
  },
];

const mistakes = [
  "Using names, birthdays, school names, teams, pets, usernames, or graduation years in a password.",
  "Believing one capital letter and one symbol automatically make a short password strong.",
  "Reusing the same strong-looking passphrase across several accounts.",
  "Changing only one digit when a password must be updated.",
  "Sharing passwords or passphrases with friends, teammates, or classmates.",
  "Entering real credentials into quizzes, training pages, messages, or forms that were not opened from the official service.",
];

const quizQuestions = [
  {
    question: "Which change usually improves a login secret the most?",
    choices: [
      "Making it longer, less predictable, and unique to one account.",
      "Replacing the letter a with @ in a common word.",
      "Adding the current year to a team name.",
      "Using the same password on every account.",
    ],
    answer: 0,
    explanation:
      "Strong credentials combine length, unpredictability, and uniqueness rather than relying on simple substitutions.",
  },
  {
    question: "Why is a passphrase often easier to use safely than a short complex password?",
    choices: [
      "It can be longer and memorable without depending on obvious personal information.",
      "It should always include a birthday.",
      "It can be reused across every account.",
      "It does not need to remain secret.",
    ],
    answer: 0,
    explanation:
      "A passphrase can provide more length while remaining memorable, but it still needs to be unique and protected.",
  },
  {
    question: "Which fake example is the most predictable?",
    choices: [
      "BriarWoods2026!",
      "Copper-Window-Cloud-Pencil",
      "Mango-Bridge-River-Clock",
      "Orbit-Canvas-Lemon-Train",
    ],
    answer: 0,
    explanation:
      "A school name and graduation year may be easy to discover or guess from public information.",
  },
  {
    question: "Why is password reuse dangerous?",
    choices: [
      "One exposed credential may place several accounts at risk.",
      "It makes every password longer.",
      "It guarantees that MFA is enabled.",
      "It automatically creates backups.",
    ],
    answer: 0,
    explanation:
      "Reuse connects the security of multiple accounts. If one credential is exposed, other accounts using it may also be targeted.",
  },
  {
    question: "What should a student do when a real account asks for a password change?",
    choices: [
      "Open the official service directly, create a new unique credential, and avoid sharing it.",
      "Reply to an unexpected message with the old password.",
      "Use the same password with one extra number.",
      "Post the new password in a private group chat.",
    ],
    answer: 0,
    explanation:
      "Password changes should happen through the official service using a new unique credential that remains private.",
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
          Previous: B7.1 Why Authentication Exists
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
          Next: B7.3 Password Managers and Reuse Risk
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

function PassphraseStrengthFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Four-Part Passphrase Strength Model
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong credentials depend on more than symbols. Defenders review length,
        predictability, uniqueness, and how safely the secret is handled.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {strengthStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> use long, unique,
        unpredictable credentials and never type real passwords or passphrases
        into a training activity.
      </div>
    </section>
  );
}

function FakePassphrasePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Credential Strength Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares fake examples so students can practice
            password reasoning without entering real credentials.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {passphraseReviewRows.map((row) => (
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

function StrengthFactorBoard() {
  const factors = [
    {
      name: "Length",
      saferQuestion:
        "Is the credential long enough to create many possible combinations without becoming impossible to remember?",
      saferChoice:
        "Prefer a longer passphrase over a short password built from one familiar word.",
    },
    {
      name: "Predictability",
      saferQuestion:
        "Does it use public facts, common phrases, keyboard sequences, or obvious substitutions?",
      saferChoice:
        "Use unrelated words or a memorable structure that is not connected to public personal details.",
    },
    {
      name: "Uniqueness",
      saferQuestion:
        "Is this credential used anywhere else?",
      saferChoice:
        "Use a separate credential for every account so one exposure does not spread.",
    },
    {
      name: "Protection",
      saferQuestion:
        "Could anyone else see, receive, copy, or request the credential?",
      saferChoice:
        "Keep credentials private and enter them only through the official account service.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Credential Strength Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        A credential can look complicated and still be weak if it is short,
        predictable, reused, or exposed to other people.
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

export default function PassphrasesPasswordStrengthPage() {
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
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7.2 Passphrases and Password Strength
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how length, unpredictability, uniqueness, and safe handling
            affect credential strength—and why simple substitutions do not fix a
            weak password.
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
          lessonTitle="Passphrases and Password Strength"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a password is a credential used during authentication.",
            "I will use fake examples only and will not type a real password or passphrase.",
            "I am ready to compare length, predictability, uniqueness, and safe credential handling.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Complex-Looking Does Not Always Mean Strong"
        >
          <p className="leading-8">
            A short password can include symbols and still be predictable.
            Attackers and automated tools often expect common substitutions,
            years, names, keyboard patterns, and repeated structures. Defenders
            focus on longer, unique, less predictable credentials instead of
            cosmetic complexity alone.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every credential
            shown in this lesson is fictional. Never submit a real password,
            passphrase, MFA code, or recovery code to a lesson page.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how length, predictability, uniqueness, and handling affect credential strength.",
            "Compare fake passwords and passphrases without testing real credentials.",
            "Recognize personal information, common patterns, and reuse as account-security risks.",
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
          title="One Weak Credential Can Expose an Entire Account"
        >
          <p className="leading-8">
            Account security begins with a credential that is difficult to
            guess, unique to the service, and kept private. A weak or reused
            password can undermine other account protections and create a path
            to messages, files, school records, purchases, or recovery settings.
          </p>
        </SectionCard>

        <PassphraseStrengthFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Strength Comes From Several Properties Working Together"
        >
          <p className="leading-8">
            Longer credentials generally create more possible combinations.
            Unpredictable credentials avoid public details and familiar
            patterns. Unique credentials isolate account risk. Safe handling
            keeps the secret away from messages, shared notes, fake forms, and
            unauthorized people. All four properties matter.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Credential Strength Thinking
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

        <StrengthFactorBoard />
        <FakePassphrasePanel />

        <FakeDashboardCard
          title="Fake Credential Strength Dashboard"
          subtitle="Training dashboard using fictional credentials to practice safe strength analysis."
          metrics={[
            {
              label: "Fake credentials reviewed",
              value: "12",
              note: "No real passwords or account details are used.",
            },
            {
              label: "Predictable patterns",
              value: "7",
              note: "Names, years, keyboard sequences, and common substitutions were identified.",
            },
            {
              label: "Unique passphrases",
              value: "5",
              note: "Longer unrelated-word examples were assigned to separate fake accounts.",
            },
          ]}
        />

        <FakeAlertCard
          title="Credential Reuse Detected"
          severity="High"
          time="10:42 AM"
          source="Fake Account Security Training"
          details="A fictional student uses the same passphrase for school email, gaming, cloud storage, and a shopping account."
          recommendation="Replace the reused credential with a different unique passphrase for each account and prepare to use a trusted password manager in the next lesson."
        />

        <FakeLogPanel
          title="Fake Credential Review Log"
          logs={[
            "10:34:06 CREDENTIAL_REVIEW value='Falcons2026' pattern='public_team_plus_year' result='predictable'",
            "10:35:22 CREDENTIAL_REVIEW value='qwerty12345' pattern='keyboard_sequence' result='weak'",
            "10:37:09 CREDENTIAL_REVIEW value='Blue-Lantern-River-Notebook' pattern='unrelated_words' result='stronger_fake_example'",
            "10:38:41 REUSE_CHECK accounts='4' shared_credential='true' result='high_risk'",
            "10:40:15 SAFETY_CHECK real_credentials_entered='false' result='pass'",
            "10:42:03 SAFE_ACTION recommendation='use long unique credentials and never submit real passwords to training tools'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Credential Choice Is Strongest?"
          evidence={[
            "All examples are fictional and used only for training.",
            "Falcons2026 uses a school team name and current year.",
            "Password!1 uses a common word with obvious substitutions.",
            "Copper-Window-Cloud-Pencil uses four unrelated words and is assigned to one fake account only.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The unrelated-word passphrase is the strongest fake example because it is longer, less predictable, and unique.",
            "Falcons2026 is strongest because personal details are easy to remember.",
            "Password!1 is strongest because one symbol fixes a common word.",
            "All three should be reused across every account.",
          ]}
          bestAnswer={0}
          explanation="The unrelated-word example combines length, lower predictability, and uniqueness. It remains fictional and should never be copied as a real password."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Password Security"
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
          title="Rewrite Fake Weak Credentials"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Credential Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Student Account Examples
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student uses Falcons2026, Soccer!17, qwerty12345,
                and the same password for three different services.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify personal details and predictable patterns.</li>
                <li>Replace short examples with longer unrelated-word structures.</li>
                <li>Create a different fake passphrase for each fake account.</li>
                <li>Confirm that no real credential appears in the activity.</li>
                <li>Explain how uniqueness limits chain-reaction risk.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Friend Asks for an Account Password"
          scenario="A fictional student’s friend asks for the password to a streaming account and promises not to share it with anyone else."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the password. Use an approved sharing feature or ask a trusted adult about the account rules.",
              outcome:
                "Best defensive choice. It keeps the credential private and respects account permissions and service rules.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the password because the friend is trusted.",
              outcome:
                "Risky. Trust does not remove reuse, forwarding, device, privacy, or account-rule concerns.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Use the same password on another account so it is easier to remember.",
              outcome:
                "Unsafe. Reuse connects the security of multiple accounts.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Passphrase and Password Strength Checklist"
          items={[
            "I can explain why length, unpredictability, uniqueness, and protection all matter.",
            "I can recognize names, years, teams, keyboard patterns, and common substitutions as predictable.",
            "I understand why every account should use a different credential.",
            "I will not share credentials or enter real passwords into training activities.",
            "I know to use the official service and trusted help when a real password change or account warning appears.",
          ]}
        />

        <MiniQuiz
          title="B7.2 Mini Quiz: Passphrases and Password Strength"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fake credential strength guide. Compare four fictional examples using length, predictability, uniqueness, and safe handling. End with a four-step recommendation for creating stronger credentials."
          tips={[
            "Use fictional examples only and clearly label them as fake.",
            "Do not copy any example into a real account.",
            "Explain why simple substitutions and public personal details remain predictable.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Strong credentials combine length, lower predictability, uniqueness, and safe handling.",
            "Simple substitutions do not automatically make common passwords strong.",
            "Public details such as names, teams, schools, and years can make credentials easier to guess.",
            "Reusing one credential connects the risk of several accounts.",
            "Real passwords and passphrases should never be entered into lessons, quizzes, messages, or untrusted forms.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}