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
  "/high-school/beginner/phishing-and-social-engineering-defense";
const previousLesson =
  "/high-school/beginner/common-cyber-threats/module-test";
const nextLesson = `${modulePath}/phishing-email-warning-signs`;

const vocab = [
  [
    "Social engineering",
    "The use of psychological pressure, trust, fear, urgency, authority, curiosity, scarcity, or rewards to influence a person’s decisions.",
  ],
  [
    "Manipulation tactic",
    "A method used to pressure or persuade someone into taking an action that benefits the sender.",
  ],
  [
    "Authority cue",
    "A claim that the sender is a teacher, administrator, support agent, company, government office, or other trusted authority.",
  ],
  [
    "Urgency cue",
    "Language that pressures someone to act immediately before checking the request.",
  ],
  [
    "Scarcity cue",
    "A claim that an offer, opportunity, or deadline is available for only a short time or to only a few people.",
  ],
  [
    "Verification channel",
    "A separate trusted method used to confirm a request, such as an official website, known phone number, school portal, teacher, guardian, or technology team.",
  ],
];

const manipulationStages = [
  {
    title: "Gain attention",
    example:
      "The message uses a surprising claim, urgent warning, reward, familiar name, or important-looking request.",
  },
  {
    title: "Create pressure",
    example:
      "The sender adds fear, time limits, authority, secrecy, scarcity, or emotional stress.",
  },
  {
    title: "Request an action",
    example:
      "The target is asked to click, reply, approve, download, pay, call, scan, or share information.",
  },
  {
    title: "Reduce verification",
    example:
      "The message discourages questions, demands secrecy, or insists the action must happen before anyone else is contacted.",
  },
];

const tacticReviewRows = [
  {
    item: "Urgency",
    source: "Your account closes in ten minutes",
    review:
      "Pause. Open the official service directly and verify the claim without using the message link.",
  },
  {
    item: "Authority",
    source: "The principal needs your password immediately",
    review:
      "Passwords should not be requested. Contact the school through an official directory or portal.",
  },
  {
    item: "Reward",
    source: "You won a gift card—sign in now",
    review:
      "Do not use the link. Confirm the promotion through the official organization.",
  },
  {
    item: "Fear",
    source: "Police action will begin unless payment is sent",
    review:
      "Do not pay or reply. Contact a trusted adult and verify through an official public channel.",
  },
  {
    item: "Secrecy",
    source: "Do not tell your teacher, parent, or technology staff",
    review:
      "A demand for secrecy is a major warning sign. Stop and involve trusted help.",
  },
];

const mistakes = [
  "Acting quickly because a message includes a short deadline.",
  "Trusting a request because the sender uses a familiar name, title, logo, or profile picture.",
  "Assuming fear or embarrassment means the message must be handled privately.",
  "Believing a reward is legitimate because the offer looks exciting or exclusive.",
  "Following a request that says not to contact a teacher, guardian, supervisor, or technology team.",
  "Using the suspicious message’s reply button, link, phone number, or QR code to verify the claim.",
];

const quizQuestions = [
  {
    question: "What is social engineering?",
    choices: [
      "The use of psychological pressure or trust to influence a person’s decisions.",
      "A normal software update process.",
      "A type of protected backup.",
      "A device battery problem.",
    ],
    answer: 0,
    explanation:
      "Social engineering targets human decision-making through pressure, emotion, authority, trust, or rewards.",
  },
  {
    question: "Which statement is an urgency cue?",
    choices: [
      "Act in the next five minutes or your account will be deleted.",
      "Review this announcement when convenient.",
      "The official portal contains next month’s schedule.",
      "Your teacher will explain the assignment in class.",
    ],
    answer: 0,
    explanation:
      "Urgency cues create time pressure so the target acts before checking the request.",
  },
  {
    question: "Why is a demand for secrecy suspicious?",
    choices: [
      "It may prevent the target from asking trusted people to verify the request.",
      "Every private conversation is harmful.",
      "Official support always posts requests publicly.",
      "Secrecy makes account recovery stronger.",
    ],
    answer: 0,
    explanation:
      "Manipulative requests often discourage outside advice because verification may expose the deception.",
  },
  {
    question: "How should a student verify a message claiming to be from the principal?",
    choices: [
      "Use the official school portal, directory, or another known school contact method.",
      "Reply to the message with a password.",
      "Click the message link and sign in.",
      "Forward the request to classmates.",
    ],
    answer: 0,
    explanation:
      "Verification should happen through a separate trusted channel, not through the suspicious message.",
  },
  {
    question: "What is the best first response to emotional pressure in a message?",
    choices: [
      "Pause before clicking, replying, paying, approving, or sharing information.",
      "Act immediately so the deadline is not missed.",
      "Share the message with strangers.",
      "Disable security alerts.",
    ],
    answer: 0,
    explanation:
      "Pausing creates time to inspect the evidence and verify the request safely.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B9</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B8 Module Test
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
          Next: B9.2 Phishing Email Warning Signs
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

function ManipulationFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        How Manipulative Requests Are Structured
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Social engineering often follows a predictable pattern: gain attention,
        create pressure, request an action, and reduce the chance of verification.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {manipulationStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> emotional pressure is
        a reason to slow down, not a reason to skip verification.
      </div>
    </section>
  );
}

function FakeTacticPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Manipulation Tactic Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel helps students identify the tactic, target
            action, and safest response without interacting with suspicious
            content.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {tacticReviewRows.map((row) => (
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

function ManipulationClueBoard() {
  const clues = [
    {
      name: "Urgency and scarcity",
      saferQuestion:
        "Does the message use a countdown, deadline, limited offer, or claim that only a few people can act?",
      saferChoice:
        "Pause and verify through the official organization before taking any action.",
    },
    {
      name: "Authority and trust",
      saferQuestion:
        "Does the sender claim to be a teacher, administrator, support agent, company, family member, or official?",
      saferChoice:
        "Contact the person or organization through a known trusted channel.",
    },
    {
      name: "Fear and embarrassment",
      saferQuestion:
        "Does the message threaten punishment, account closure, legal trouble, public embarrassment, or loss?",
      saferChoice:
        "Do not act privately. Involve a trusted adult and verify the claim separately.",
    },
    {
      name: "Reward and curiosity",
      saferQuestion:
        "Does the request promise a prize, exclusive information, secret file, refund, or unexpected opportunity?",
      saferChoice:
        "Do not click or sign in. Confirm the offer through the official source.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Manipulation Clue Board
      </h2>
      <p className="mt-3 text-slate-300">
        The same emotional tactics can appear in email, text, calls, direct
        messages, social posts, support chats, and in-person requests.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {clues.map((clue) => (
          <div
            key={clue.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{clue.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{clue.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{clue.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HowSocialEngineeringManipulatesPeoplePage() {
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
              Module B9
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.1 How Social Engineering Manipulates People
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how urgency, fear, authority, trust, scarcity, curiosity,
            rewards, and secrecy can influence decisions—and practice pausing
            before taking an unsafe action.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B9: Phishing and Social Engineering Defense"
          lessonTitle="How Social Engineering Manipulates People"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that social engineering targets human decisions rather than only technology.",
            "I will use fictional messages, identities, accounts, links, calls, and requests only.",
            "I am ready to identify emotional pressure and choose a safe verification step.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Strongest Warning May Be How the Message Makes You Feel"
        >
          <p className="leading-8">
            Social engineering is designed to create a fast emotional reaction.
            A message may make someone feel afraid, excited, curious, guilty,
            respected, rushed, or embarrassed. Those feelings are not proof that
            the request is real.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every person,
            organization, message, request, account, and scenario in this lesson
            is fictional. Never submit real credentials, codes, payment
            information, or private details.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how emotional and psychological pressure can influence security decisions.",
            "Identify urgency, fear, authority, trust, scarcity, reward, curiosity, and secrecy cues.",
            "Choose a safe pause and verification action before clicking, replying, paying, approving, or sharing information.",
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
          title="Good Judgment Protects More Than One Account"
        >
          <p className="leading-8">
            A single manipulated decision can expose credentials, authorize a
            payment, approve an MFA request, reveal private information, or lead
            to a suspicious download. Learning to recognize pressure protects
            accounts, devices, files, money, privacy, and other people.
          </p>
        </SectionCard>

        <ManipulationFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Pressure Is a Signal to Verify"
        >
          <p className="leading-8">
            Social engineering attempts often remove time for careful thinking.
            The safer response is to create distance from the request, identify
            the pressure tactic, and verify through a separate trusted channel.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Understanding Manipulation
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

        <ManipulationClueBoard />
        <FakeTacticPanel />

        <FakeDashboardCard
          title="Fake Social Engineering Review Dashboard"
          subtitle="Training dashboard using fictional emotional cues, requests, channels, and verification outcomes."
          metrics={[
            {
              label: "Requests reviewed",
              value: "20",
              note: "Fictional email, text, call, direct-message, and support examples.",
            },
            {
              label: "Pressure tactics",
              value: "14",
              note: "Urgency, fear, authority, scarcity, rewards, curiosity, and secrecy.",
            },
            {
              label: "Verified safely",
              value: "9",
              note: "Requests were checked through separate official channels.",
            },
          ]}
        />

        <FakeAlertCard
          title="Fake Administrator Demands Immediate Password"
          severity="High"
          time="9:14 AM"
          source="Fake School Message Training"
          details="A fictional message claims to be from a school administrator and threatens immediate account suspension unless the student replies with a password."
          recommendation="Do not reply or share credentials. Open the official school portal or contact the school through the known directory and report the message."
        />

        <FakeLogPanel
          title="Fake Manipulation Review Log"
          logs={[
            "09:05:11 MESSAGE display_name='School Administrator' sender='unknown_address'",
            "09:06:22 PRESSURE tactic='authority_and_urgency' deadline='10_minutes'",
            "09:07:40 REQUEST type='password' policy_match='false'",
            "09:09:13 VERIFICATION channel='official_school_directory' result='request_not_confirmed'",
            "09:11:48 REPORT method='school_phishing_report' status='submitted'",
            "09:14:02 SAFE_ACTION recommendation='do not reply, click, or share credentials'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Manipulation Tactics Are Present?"
          evidence={[
            "A fictional message claims to come from a school administrator.",
            "The student is told the account will be suspended in ten minutes.",
            "The message requests a password.",
            "The sender says not to contact teachers or technology staff.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The message combines authority, urgency, credential pressure, and secrecy; verify through official school channels.",
            "The administrator title proves the message is legitimate.",
            "The student should reply quickly before the deadline.",
            "The student should forward the password to a friend for advice.",
          ]}
          bestAnswer={0}
          explanation="The combination of authority, urgency, a credential request, and secrecy strongly supports a social-engineering classification."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Manipulation More Effective"
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
          title="Identify the Pressure Tactic and Pause Point"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Scenario Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Manipulation Tactic Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives a limited-time prize, an urgent
                account warning, a fake administrator request, and a secret
                emergency-payment message.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the emotion or trust being targeted.</li>
                <li>Name the pressure tactic.</li>
                <li>Identify the action the sender wants.</li>
                <li>Choose the earliest safe pause point.</li>
                <li>Select a separate official verification channel.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Friend Sends an Emergency Money Request"
          scenario="A fictional direct message appears to come from a close friend. The sender says the phone is broken, money is needed immediately, and nobody else should be contacted."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not send money. Contact the friend or a trusted adult through another known channel to verify the request.",
              outcome:
                "Best defensive choice. The request uses urgency, trust, and secrecy, so separate verification is necessary.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Send money because the profile picture and name look correct.",
              outcome:
                "Risky. Profiles can be copied or accounts can be compromised.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask the sender for account passwords as proof.",
              outcome:
                "Unsafe. Credentials should never be requested or shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Limited-Time Prize Requires a Login"
          scenario="A fictional message says the student is one of five winners and must sign in within three minutes to claim a new device."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the link. Verify the promotion through the organization’s official website or known contact information.",
              outcome:
                "Best defensive choice. The message combines reward, scarcity, and urgency.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Sign in immediately because only five winners were selected.",
              outcome:
                "Risky. Scarcity and urgency are designed to reduce careful checking.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the link to classmates so they can try too.",
              outcome:
                "Unsafe. Suspicious links should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Social Engineering Manipulation Checklist"
          items={[
            "I pause when a message creates urgency, fear, excitement, curiosity, guilt, or embarrassment.",
            "I recognize authority, trust, scarcity, reward, and secrecy cues.",
            "I identify the exact action the sender wants me to take.",
            "I do not click, reply, approve, pay, download, scan, or share information before verification.",
            "I verify through a separate official channel.",
            "I involve trusted adults or technology staff when the request is serious, secretive, or unclear.",
          ]}
        />

        <MiniQuiz
          title="B9.1 Mini Quiz: How Social Engineering Manipulates People"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional social-engineering analysis chart. Include five fake requests, the emotion or trust being targeted, the manipulation tactic, the requested action, the safe pause point, and the official verification method."
          tips={[
            "Use fictional people, organizations, accounts, links, calls, and requests only.",
            "Do not include real suspicious URLs, credentials, codes, or private information.",
            "Explain why emotional pressure should increase verification rather than reduce it.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Social engineering targets human decisions through pressure, emotion, authority, trust, scarcity, curiosity, rewards, and secrecy.",
            "A familiar name, title, logo, voice, or profile picture does not prove identity.",
            "Urgency is a reason to pause and verify.",
            "Requests for passwords, MFA codes, recovery codes, payment, or secrecy are major warning signs.",
            "Verification should happen through a separate official channel.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}