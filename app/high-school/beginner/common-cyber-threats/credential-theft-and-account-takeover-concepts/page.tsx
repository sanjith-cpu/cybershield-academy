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

const modulePath = "/high-school/beginner/common-cyber-threats";
const previousLesson = `${modulePath}/phishing-and-social-engineering-overview`;
const nextLesson = `${modulePath}/unsafe-downloads-and-malicious-attachments`;

const vocab = [
  [
    "Credential theft",
    "The unauthorized collection or exposure of passwords, passphrases, MFA codes, recovery codes, tokens, or other login evidence.",
  ],
  [
    "Account takeover",
    "A situation in which someone other than the legitimate owner gains control of an account.",
  ],
  [
    "Session",
    "An active signed-in connection between an account and a browser, app, or device.",
  ],
  [
    "Recovery control",
    "The ability to use approved recovery email, phone, backup codes, or trusted devices to restore account access.",
  ],
  [
    "Unauthorized change",
    "A password, recovery, profile, device, or security setting change that the account owner did not request.",
  ],
  [
    "Containment",
    "Immediate defensive actions that limit access, such as denying prompts, removing sessions, or locking down recovery settings.",
  ],
];

const takeoverReviewStages = [
  {
    title: "Recognize the evidence",
    example:
      "Unexpected MFA prompts, unknown sessions, password changes, recovery changes, or sent messages may indicate account risk.",
  },
  {
    title: "Contain access",
    example:
      "Deny prompts, remove unknown sessions, secure the device, and stop using suspicious links or forms.",
  },
  {
    title: "Restore control",
    example:
      "Use the official service to replace credentials, review MFA, update recovery methods, and sign out other sessions.",
  },
  {
    title: "Report and monitor",
    example:
      "Tell trusted adults or technology staff, review alerts, and watch for follow-up activity on connected accounts.",
  },
];

const accountReviewRows = [
  {
    item: "Unexpected MFA prompt",
    source: "No matching login was started by the user",
    review:
      "Possible credential exposure. Deny the prompt and review the official account immediately.",
  },
  {
    item: "Unknown browser session",
    source: "Active session appears from an unfamiliar device",
    review:
      "Remove the session, review recent activity, and replace credentials if necessary.",
  },
  {
    item: "Recovery email changed",
    source: "Account owner did not request the change",
    review:
      "Urgent loss-of-control warning. Restore recovery settings through the official service and contact trusted support.",
  },
  {
    item: "Sent messages",
    source: "Account sent messages the owner did not create",
    review:
      "Possible account takeover. Secure the account and warn affected contacts through a trusted channel.",
  },
  {
    item: "Reused password",
    source: "Same credential appears on school email and gaming account",
    review:
      "Change the credential on every affected account and replace each one with a unique password or passphrase.",
  },
];

const mistakes = [
  "Approving an unexpected MFA prompt because the request keeps appearing.",
  "Changing only one reused password while leaving the same credential on other accounts.",
  "Using a recovery link from a suspicious message instead of opening the official service directly.",
  "Ignoring unknown sessions because the account still appears to work.",
  "Sharing verification codes, backup codes, or passwords with someone claiming to be support.",
  "Trying to recover a school or family-managed account alone when trusted staff or adults should be involved.",
];

const quizQuestions = [
  {
    question: "What is credential theft?",
    choices: [
      "The unauthorized collection or exposure of login evidence.",
      "A normal account update.",
      "A trusted backup process.",
      "A public profile change.",
    ],
    answer: 0,
    explanation:
      "Credential theft involves passwords, passphrases, codes, tokens, or other evidence used to access accounts.",
  },
  {
    question: "Which event is a strong sign of possible account takeover?",
    choices: [
      "Messages were sent from the account that the owner did not create.",
      "The profile picture was changed by the owner.",
      "The account owner installed an official update.",
      "A trusted device completed a normal login.",
    ],
    answer: 0,
    explanation:
      "Unauthorized messages, settings, sessions, or recovery changes may show that someone else has account control.",
  },
  {
    question: "What should happen after an unexpected MFA prompt?",
    choices: [
      "Deny it and review the official account activity.",
      "Approve it to stop the notification.",
      "Share the prompt with a friend.",
      "Disable every account alert.",
    ],
    answer: 0,
    explanation:
      "An unexpected prompt may mean someone else knows the password or is attempting access.",
  },
  {
    question: "Why must a reused credential be changed on every affected account?",
    choices: [
      "The same exposed secret may allow access to several accounts.",
      "Only one account can use MFA.",
      "Recovery codes work only with reused passwords.",
      "Unique passwords are always shorter.",
    ],
    answer: 0,
    explanation:
      "Reuse creates a connected risk. Every account using the exposed credential needs a separate replacement.",
  },
  {
    question: "What is the safest way to restore account control?",
    choices: [
      "Open the official service directly, replace credentials, review sessions, and update recovery settings.",
      "Reply to a suspicious message with the old password.",
      "Ask a friend to log in and investigate.",
      "Ignore the changes if the account still opens.",
    ],
    answer: 0,
    explanation:
      "Recovery and containment should happen through the official service using trusted support when needed.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B8</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B8.3 Phishing and Social Engineering Overview
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
          Next: B8.5 Unsafe Downloads and Malicious Attachments
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

function AccountTakeoverFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Account Takeover Response Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        When account control may be at risk, defenders recognize the evidence,
        contain current access, restore trusted settings, and monitor the account.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {takeoverReviewStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> use the official
        service, not a message link, when securing or recovering an account.
      </div>
    </section>
  );
}

function FakeAccountPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Account Takeover Evidence Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel helps students review account evidence and
            choose safe containment and recovery actions.
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

function AccountControlBoard() {
  const areas = [
    {
      name: "Credentials",
      saferQuestion:
        "Is the password or passphrase still private, unique, and under the owner’s control?",
      saferChoice:
        "Replace exposed or reused credentials through the official service.",
    },
    {
      name: "MFA",
      saferQuestion:
        "Were unexpected prompts, codes, or device approvals received?",
      saferChoice:
        "Deny unexpected requests and review registered authentication methods.",
    },
    {
      name: "Sessions and devices",
      saferQuestion:
        "Are there unknown browsers, apps, phones, or computers connected to the account?",
      saferChoice:
        "Remove unknown access and sign out other sessions when appropriate.",
    },
    {
      name: "Recovery settings",
      saferQuestion:
        "Does the real owner still control recovery email, phone, codes, and trusted devices?",
      saferChoice:
        "Restore recovery control and involve trusted support when changes were unauthorized.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Account Control Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Account takeover response focuses on four control areas: credentials,
        MFA, connected sessions, and recovery settings.
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

export default function CredentialTheftAccountTakeoverConceptsPage() {
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
              Module B8
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8.4 Credential Theft and Account Takeover Concepts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how exposed credentials, unsafe sharing, fake login prompts,
            unknown sessions, and unauthorized recovery changes can place
            accounts at risk—and practice safe containment and recovery.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B8: Common Cyber Threats"
          lessonTitle="Credential Theft and Account Takeover Concepts"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that credentials include passwords, MFA codes, recovery codes, and other login evidence.",
            "I will use fake accounts, sessions, devices, messages, and codes only.",
            "I am ready to focus on recognition, containment, recovery, and trusted escalation.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Account Control Can Change Before the Owner Notices"
        >
          <p className="leading-8">
            Account takeover may begin with one exposed credential, one approved
            prompt, one reused password, or one recovery change. Defenders review
            the full account—not just the password—because sessions, devices,
            MFA, and recovery methods can all affect control.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never enter real
            passwords, MFA codes, recovery codes, or private account details in
            this lesson. Do not attempt to access or investigate another person’s
            account.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain credential theft and account takeover using safe defensive concepts.",
            "Recognize evidence involving unexpected prompts, unknown sessions, unauthorized changes, and sent messages.",
            "Choose safe containment, credential, MFA, recovery, and reporting actions.",
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
          title="An Account Can Affect More Than One Service"
        >
          <p className="leading-8">
            Email accounts often control password resets for other services.
            Reused credentials can connect several accounts. A takeover may also
            affect messages, files, purchases, cloud storage, school records,
            and recovery settings. Fast containment can limit the damage.
          </p>
        </SectionCard>

        <AccountTakeoverFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Account Takeover Is a Loss of Trusted Control"
        >
          <p className="leading-8">
            Account takeover means someone other than the legitimate owner has
            gained access or control. Warning signs may include unknown logins,
            sent messages, changed passwords, changed recovery information,
            unexpected MFA prompts, or new connected devices.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Account Takeover Thinking
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

        <AccountControlBoard />
        <FakeAccountPanel />

        <FakeDashboardCard
          title="Fake Account Takeover Dashboard"
          subtitle="Training dashboard using fictional prompts, sessions, recovery changes, and credential evidence."
          metrics={[
            {
              label: "Account warnings",
              value: "9",
              note: "Unknown logins, prompts, sent messages, and settings changes.",
            },
            {
              label: "Sessions removed",
              value: "3",
              note: "Fictional unknown browsers and devices were signed out.",
            },
            {
              label: "Credentials replaced",
              value: "4",
              note: "Reused credentials were replaced with separate unique passwords.",
            },
          ]}
        />

        <FakeAlertCard
          title="Recovery Email Changed Without Permission"
          severity="High"
          time="2:17 PM"
          source="Fake School Account Training"
          details="A fictional student sees an unfamiliar recovery email, an unknown browser session, and several sent messages the student did not create."
          recommendation="Use the official service to remove unknown access, restore recovery control, replace credentials, review MFA, and contact trusted school technology staff."
        />

        <FakeLogPanel
          title="Fake Account Control Event Log"
          logs={[
            "14:08:04 MFA_PROMPT user_login_started='false' action='deny'",
            "14:09:26 SESSION browser='unknown' status='active'",
            "14:10:31 RECOVERY_EMAIL changed_by_owner='false' severity='high'",
            "14:12:18 SENT_MESSAGE created_by_owner='false' count='5'",
            "14:14:42 CREDENTIAL_REUSE affected_accounts='3' action='replace_all'",
            "14:17:03 SAFE_ACTION recommendation='contain access, restore recovery, review MFA, and escalate'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Evidence Most Strongly Suggests Account Takeover?"
          evidence={[
            "A fictional student receives one unexpected MFA prompt.",
            "The account shows an unknown active browser session.",
            "The recovery email was changed without permission.",
            "Five messages were sent that the student did not create.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The combined evidence strongly suggests loss of account control and requires immediate containment and recovery.",
            "The account is definitely safe because the student can still log in.",
            "Only the profile picture needs to be changed.",
            "The student should approve the MFA prompt to regain access.",
          ]}
          bestAnswer={0}
          explanation="Unknown sessions, unauthorized recovery changes, and sent messages together are strong evidence that someone else may control the account."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Increase Account Takeover Risk"
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
          title="Review a Fake Account Takeover Incident"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident File
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Account Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives repeated MFA prompts, sees two
                unknown sessions, discovers a changed recovery email, and learns
                that the same password is used on two other accounts.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Deny unexpected MFA prompts.</li>
                <li>Remove unknown sessions and devices.</li>
                <li>Restore recovery email and phone control.</li>
                <li>Replace reused credentials on every affected account.</li>
                <li>Review MFA, alerts, sent messages, and trusted support options.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Friend Says the Account Is Sending Strange Messages"
          scenario="A fictional student’s friend reports receiving unusual links from the student’s account. The student did not send them and sees an unfamiliar browser session."
          choices={[
            {
              label: "Choice A",
              response:
                "Use the official account service to remove the unknown session, replace credentials, review MFA and recovery, and warn contacts through a trusted channel.",
              outcome:
                "Best defensive choice. It contains access, restores control, and reduces harm to other people.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the messages because the student can still sign in.",
              outcome:
                "Risky. The account may still be under someone else’s control.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the password to the friend and ask them to investigate.",
              outcome:
                "Unsafe. Credentials should never be shared, and another person should not access the account.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Support Caller Requests an MFA Code"
          scenario="A fictional caller claims to be from account support and says an MFA code is needed to remove an attacker from the account."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the code. End the call and contact support through the official website or school channel.",
              outcome:
                "Best defensive choice. MFA codes can complete a login and must remain private.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the code because the caller sounds professional.",
              outcome:
                "Risky. Tone and confidence do not prove identity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the code in a group chat for advice.",
              outcome:
                "Unsafe. Verification codes must never be shared.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Credential Theft and Account Takeover Checklist"
          items={[
            "I can recognize unexpected prompts, unknown sessions, unauthorized changes, and sent messages as warning signs.",
            "I know to deny unexpected MFA requests and never share verification or recovery codes.",
            "I can remove unknown sessions and review connected devices through the official service.",
            "I can replace exposed or reused credentials on every affected account.",
            "I can restore recovery control and review alerts, MFA, and sent activity.",
            "I know when to involve trusted adults, guardians, teachers, or technology staff.",
          ]}
        />

        <MiniQuiz
          title="B8.4 Mini Quiz: Credential Theft and Account Takeover Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional account takeover response plan. Include warning signs, containment steps, credential changes, MFA review, session removal, recovery restoration, contact warnings, and trusted escalation."
          tips={[
            "Use fictional accounts, devices, messages, credentials, and codes only.",
            "Do not include real private information or account-access instructions.",
            "Explain which actions should happen first and why.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Credential theft involves passwords, codes, tokens, and other login evidence.",
            "Account takeover means the legitimate owner has lost some or all trusted control.",
            "Unknown sessions, unauthorized recovery changes, unexpected prompts, and sent messages are important warning signs.",
            "Containment includes denying prompts, removing sessions, and securing recovery control.",
            "Exposed or reused credentials must be replaced on every affected account through official services.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}