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
const previousLesson = `${modulePath}/malware-and-ransomware-concepts`;
const nextLesson = `${modulePath}/credential-theft-and-account-takeover-concepts`;

const vocab = [
  [
    "Phishing",
    "A deceptive message or website designed to trick a person into revealing information, opening harmful content, or taking an unsafe action.",
  ],
  [
    "Social engineering",
    "The use of psychological pressure, trust, fear, urgency, rewards, or impersonation to influence a person’s decisions.",
  ],
  [
    "Impersonation",
    "Pretending to be a trusted person, organization, service, or authority.",
  ],
  [
    "Urgency cue",
    "Language that pressures a person to act quickly before checking the claim.",
  ],
  [
    "Verification channel",
    "A separate trusted method used to confirm a request, such as an official website, known phone number, teacher, or school portal.",
  ],
  [
    "Suspicious link",
    "A link whose destination, spelling, context, or request does not match the expected official service.",
  ],
];

const phishingReviewStages = [
  {
    title: "Pause before acting",
    example:
      "Do not click, reply, download, scan, or share information simply because a message feels urgent.",
  },
  {
    title: "Inspect the clues",
    example:
      "Review the sender, wording, destination, attachment, request, timing, and whether the message was expected.",
  },
  {
    title: "Verify separately",
    example:
      "Open the official service directly or contact the person through a known trusted channel.",
  },
  {
    title: "Report and remove",
    example:
      "Use the approved reporting method, preserve safe details, and delete or quarantine the message when instructed.",
  },
];

const phishingReviewRows = [
  {
    item: "Prize message",
    source: "Claims the student won a gift card but must sign in immediately",
    review:
      "Reward and urgency clues. Do not use the link; verify through the official organization.",
  },
  {
    item: "Teacher impersonation",
    source: "Unknown address asks for a file upload and school password",
    review:
      "Sender mismatch and credential request. Contact the teacher through the school directory or portal.",
  },
  {
    item: "Account warning",
    source: "Message claims the account will close in ten minutes",
    review:
      "Urgency clue. Open the official account directly and review alerts there.",
  },
  {
    item: "Unexpected attachment",
    source: "Invoice or schedule file from an unfamiliar sender",
    review:
      "Do not open it. Confirm the file through an official trusted channel.",
  },
  {
    item: "Known school notice",
    source: "Announcement appears inside the official school portal",
    review:
      "More trustworthy context, but still review the request and avoid sharing sensitive information.",
  },
];

const mistakes = [
  "Trusting a message only because it uses a familiar logo, name, or profile picture.",
  "Clicking first and planning to verify later.",
  "Replying to the suspicious message to ask whether it is real.",
  "Sharing passwords, MFA codes, recovery codes, or private information with a sender.",
  "Forwarding suspicious links or attachments to friends for testing.",
  "Ignoring a possible phishing event after entering information instead of securing the account and reporting it.",
];

const quizQuestions = [
  {
    question: "What is phishing?",
    choices: [
      "A deceptive attempt to influence someone into revealing information or taking an unsafe action.",
      "A normal software update.",
      "A protected backup process.",
      "A type of device battery warning.",
    ],
    answer: 0,
    explanation:
      "Phishing uses deceptive messages or websites to push people toward unsafe actions.",
  },
  {
    question: "Which clue is commonly used in social engineering?",
    choices: [
      "Urgency that pressures the user to act before checking.",
      "A verified official request opened through a trusted portal.",
      "A normal account setting reviewed by the owner.",
      "An approved software update.",
    ],
    answer: 0,
    explanation:
      "Urgency, fear, rewards, trust, and impersonation are common social-engineering pressure techniques.",
  },
  {
    question: "What is the safest way to verify a suspicious message from a teacher?",
    choices: [
      "Contact the teacher through the official school directory, portal, or known address.",
      "Reply to the suspicious message with the school password.",
      "Open the attachment to see whether it looks real.",
      "Forward the message to classmates.",
    ],
    answer: 0,
    explanation:
      "Verification should happen through a separate trusted channel rather than through the suspicious message itself.",
  },
  {
    question: "A message says an account will close in ten minutes unless the user clicks a link. What should the user do?",
    choices: [
      "Open the official service directly and review account alerts there.",
      "Click immediately because time is limited.",
      "Send the password to the sender.",
      "Share the message in a group chat for testing.",
    ],
    answer: 0,
    explanation:
      "Urgency is a warning sign. The user should verify through the official service without using the message link.",
  },
  {
    question: "What should happen after a student realizes a password was entered into a suspicious page?",
    choices: [
      "Change the password through the official service, review sessions, enable or verify MFA, and report the event.",
      "Ignore it if the account still works.",
      "Reuse the same password on another account.",
      "Send the suspicious page to friends.",
    ],
    answer: 0,
    explanation:
      "The account should be secured immediately through official channels, and trusted support should be involved.",
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
          Previous: B8.2 Malware and Ransomware Concepts
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
          Next: B8.4 Credential Theft and Account Takeover Concepts
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

function PhishingReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Phishing Review Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Suspicious messages should be handled with a calm process: pause, inspect
        the clues, verify separately, and report through an approved channel.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {phishingReviewStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> verify through a
        separate official channel. Do not use the suspicious message’s link,
        phone number, attachment, QR code, or reply button.
      </div>
    </section>
  );
}

function FakePhishingPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Phishing Clue Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel helps students identify manipulation clues and
            choose safe verification actions without opening suspicious content.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {phishingReviewRows.map((row) => (
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
      name: "Urgency and fear",
      saferQuestion:
        "Does the message threaten account closure, punishment, lost access, or immediate consequences?",
      saferChoice:
        "Pause and verify through the official service before taking any action.",
    },
    {
      name: "Reward and curiosity",
      saferQuestion:
        "Does the message promise a prize, exclusive access, surprising news, or a secret file?",
      saferChoice:
        "Do not click. Confirm the offer through the official organization.",
    },
    {
      name: "Authority and trust",
      saferQuestion:
        "Does the sender claim to be a teacher, administrator, bank, support agent, or family member?",
      saferChoice:
        "Contact the person or organization using a known trusted method.",
    },
    {
      name: "Sensitive request",
      saferQuestion:
        "Does the message ask for a password, MFA code, recovery code, payment, or private information?",
      saferChoice:
        "Do not provide the information. Report the request and secure the account if anything was shared.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Social Engineering Manipulation Board
      </h2>
      <p className="mt-3 text-slate-300">
        Social engineering targets human decision-making. Recognizing emotional
        pressure helps users slow down and verify before acting.
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

export default function PhishingSocialEngineeringOverviewPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8.3 Phishing and Social Engineering Overview
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how deceptive messages use urgency, fear, rewards, authority,
            and impersonation—and practice safe verification without opening
            links, attachments, QR codes, or suspicious forms.
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
          lessonTitle="Phishing and Social Engineering Overview"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that phishing uses deception to influence a person’s actions.",
            "I will not open, scan, reply to, or test suspicious links, attachments, QR codes, or forms.",
            "I am ready to verify requests through separate official channels.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Message May Look Real Because It Was Designed to"
        >
          <p className="leading-8">
            Phishing messages often copy logos, names, writing styles, or common
            account notices. A familiar appearance is not proof. Defenders focus
            on the request, the context, the destination, and whether the message
            can be confirmed through a trusted channel.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every message,
            link, attachment, sender, and account in this lesson is fictional.
            Never test suspicious content or submit real credentials.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain phishing and social engineering using safe defensive concepts.",
            "Recognize urgency, fear, reward, authority, impersonation, and sensitive-information requests.",
            "Verify suspicious requests through separate official channels and report them safely.",
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
          title="People Are Often the Target"
        >
          <p className="leading-8">
            Strong technology controls can still be weakened when a person is
            pressured into sharing a password, approving a prompt, opening a
            file, or sending money. Social engineering succeeds by influencing
            decisions, so pausing and verifying are important security skills.
          </p>
        </SectionCard>

        <PhishingReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Verify the Request, Not the Appearance"
        >
          <p className="leading-8">
            A message may use a real logo, correct name, or familiar writing
            style. Those details can be copied. The safer question is whether
            the request is expected, appropriate, and confirmed through a
            separate official channel.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Phishing and Social Engineering
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
        <FakePhishingPanel />

        <FakeDashboardCard
          title="Fake Phishing Review Dashboard"
          subtitle="Training dashboard using fictional messages, senders, requests, and verification outcomes."
          metrics={[
            {
              label: "Messages reviewed",
              value: "18",
              note: "Fictional email, text, chat, and portal examples.",
            },
            {
              label: "Pressure clues",
              value: "11",
              note: "Urgency, fear, rewards, authority, and impersonation.",
            },
            {
              label: "Verified safely",
              value: "7",
              note: "Requests were checked through separate official channels.",
            },
          ]}
        />

        <FakeAlertCard
          title="Urgent Teacher Message Requests Password"
          severity="High"
          time="8:46 AM"
          source="Fake School Message Training"
          details="A fictional message claims to be from a teacher and asks the student to reply with a school password before class begins."
          recommendation="Do not reply or share credentials. Contact the teacher through the official school portal or directory and report the message."
        />

        <FakeLogPanel
          title="Fake Phishing Review Log"
          logs={[
            "08:38:02 MESSAGE sender='unknown_address' display_name='Teacher Name'",
            "08:39:11 REQUEST type='password' urgency='before_class'",
            "08:40:27 LINK destination='unverified_domain' action='not_opened'",
            "08:42:06 VERIFICATION channel='official_school_portal' result='request_not_confirmed'",
            "08:44:18 REPORT method='school_phishing_report' status='submitted'",
            "08:46:03 SAFE_ACTION recommendation='change credentials only if information was entered and review MFA'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Clues Make This Message Suspicious?"
          evidence={[
            "A fictional message uses the principal’s name and school logo.",
            "The sender address does not match the school domain.",
            "The message threatens account closure within ten minutes.",
            "The link destination is different from the official school portal.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The sender mismatch, urgency, and destination mismatch are strong phishing clues; verify through the official portal.",
            "The logo proves the message is real.",
            "The student should click the link before time runs out.",
            "The student should reply with the password to confirm identity.",
          ]}
          bestAnswer={0}
          explanation="Names and logos can be copied. The mismatched sender, urgency, and unofficial destination support a phishing classification."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Phishing More Effective"
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
          title="Review Fictional Messages Without Opening Them"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Message Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Communication Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives a prize message, a teacher
                impersonation, an urgent account warning, and an unexpected
                attachment claiming to contain a schedule.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify emotional pressure and impersonation clues.</li>
                <li>Compare sender information with the expected official source.</li>
                <li>Do not open links, attachments, QR codes, or forms.</li>
                <li>Verify each request through a separate official channel.</li>
                <li>Report suspicious messages using the approved process.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Message Claims to Be From School Support"
          scenario="A fictional student receives a chat message saying the school account has been compromised. The sender asks for the student’s MFA code to stop the attack."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the code. Open the official school portal and contact technology staff through a trusted school channel.",
              outcome:
                "Best defensive choice. MFA codes are sensitive, and verification should happen separately.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the code because the message mentions an attack.",
              outcome:
                "Risky. The code may allow the sender to complete a login.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the code and message to friends for advice.",
              outcome:
                "Unsafe. Verification codes must remain private.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Prize Link Appears in a Group Chat"
          scenario="A fictional group chat message promises free headphones to the first students who sign in through a linked form."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the link. Verify the offer through the official organization and report the message if it is suspicious.",
              outcome:
                "Best defensive choice. Rewards and limited-time pressure are common manipulation clues.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Sign in quickly before the offer ends.",
              outcome:
                "Risky. The form may be designed to capture credentials.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Share the link with more students.",
              outcome:
                "Unsafe. Suspicious content should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Phishing and Social Engineering Checklist"
          items={[
            "I pause before clicking, replying, scanning, downloading, or sharing information.",
            "I review sender, wording, destination, timing, request, and whether the message was expected.",
            "I recognize urgency, fear, reward, authority, and impersonation pressure.",
            "I verify requests through a separate official channel.",
            "I never share passwords, MFA codes, recovery codes, or private information with a message sender.",
            "I know how to report suspicious messages and secure an account if information was entered.",
          ]}
        />

        <MiniQuiz
          title="B8.3 Mini Quiz: Phishing and Social Engineering Overview"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional phishing analysis chart. Include four fake messages, the manipulation clue in each, the safe verification channel, and the recommended defensive response."
          tips={[
            "Use fictional senders, links, attachments, organizations, and account details only.",
            "Do not include real suspicious URLs, QR codes, or files.",
            "Explain why appearance alone does not prove legitimacy.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Phishing uses deceptive messages or websites to influence unsafe actions.",
            "Social engineering targets human decision-making through urgency, fear, rewards, authority, trust, and impersonation.",
            "Names, logos, and familiar writing styles can be copied.",
            "Verification should happen through a separate official channel.",
            "Passwords, MFA codes, recovery codes, payments, and private information should never be provided to an unexpected sender.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}