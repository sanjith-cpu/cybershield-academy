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
const previousLesson = `${modulePath}/phishing-email-warning-signs`;
const nextLesson = `${modulePath}/impersonation-and-fake-support-messages`;

const vocab = [
  [
    "Smishing",
    "Phishing delivered through text messages, messaging apps, or other mobile-message channels.",
  ],
  [
    "Vishing",
    "Voice phishing carried out through phone calls, voicemail, or voice-based communication.",
  ],
  [
    "Direct-message scam",
    "A deceptive request sent through a social platform, gaming service, chat app, or community account.",
  ],
  [
    "Caller ID spoofing",
    "Making a call appear to come from a trusted number even when the caller is somewhere else.",
  ],
  [
    "Account impersonation",
    "Using a copied profile, stolen account, familiar name, or similar username to appear trustworthy.",
  ],
  [
    "Separate verification",
    "Confirming a request through another known official channel instead of replying, calling back, or using the suspicious message.",
  ],
];

const channelReviewStages = [
  {
    title: "Identify the channel",
    example:
      "Decide whether the request arrived by text, phone, voicemail, direct message, social post, or gaming chat.",
  },
  {
    title: "Identify the pressure",
    example:
      "Look for urgency, fear, rewards, authority, secrecy, emergency claims, or requests for quick payment.",
  },
  {
    title: "Identify the target action",
    example:
      "Determine whether the sender wants a click, reply, call, payment, code, login, download, or account approval.",
  },
  {
    title: "Verify separately",
    example:
      "Use an official website, known number, school portal, trusted adult, or known contact method.",
  },
];

const channelReviewRows = [
  {
    item: "Delivery text",
    source: "Shortened link asks for a small redelivery fee",
    review:
      "Do not use the link. Open the delivery company’s official website or app directly.",
  },
  {
    item: "Bank call",
    source: "Caller demands a one-time code to stop fraud",
    review:
      "End the call. Contact the bank through the number on the official website or card.",
  },
  {
    item: "Friend direct message",
    source: "Account requests emergency money and says not to call",
    review:
      "Verify through another known channel because the account may be copied or compromised.",
  },
  {
    item: "Prize post",
    source: "Social message claims the student won and must sign in now",
    review:
      "Do not use the link. Confirm the promotion through the verified official account.",
  },
  {
    item: "School voicemail",
    source: "Message asks the student to call an unfamiliar number and provide credentials",
    review:
      "Do not call the number. Use the official school directory or portal.",
  },
];

const mistakes = [
  "Trusting a text because it includes the correct name, location, or recent activity.",
  "Assuming caller ID proves who is calling.",
  "Calling back the number provided in a suspicious voicemail.",
  "Sending money because a familiar social profile claims there is an emergency.",
  "Sharing MFA codes, recovery codes, passwords, or payment details during a call or chat.",
  "Using the suspicious message’s link, number, profile, or reply thread to verify the request.",
];

const quizQuestions = [
  {
    question: "What is smishing?",
    choices: [
      "Phishing delivered through text or mobile-message channels.",
      "A normal software update.",
      "A protected backup process.",
      "A type of device repair.",
    ],
    answer: 0,
    explanation:
      "Smishing is phishing delivered through text messages, chat apps, or similar mobile channels.",
  },
  {
    question: "What is vishing?",
    choices: [
      "Voice phishing through calls or voicemail.",
      "A verified video meeting.",
      "A trusted school announcement.",
      "A password manager feature.",
    ],
    answer: 0,
    explanation:
      "Vishing uses phone calls, voicemail, or other voice communication to pressure people into unsafe actions.",
  },
  {
    question: "Why should caller ID not be trusted by itself?",
    choices: [
      "Caller ID can be spoofed to display a familiar number.",
      "Caller ID is never shown.",
      "Only businesses can place calls.",
      "Every unknown call is automatically safe.",
    ],
    answer: 0,
    explanation:
      "A displayed number can be manipulated, so important calls should be verified through an official known number.",
  },
  {
    question: "A friend’s social account asks for emergency money and says not to call. What is the safest response?",
    choices: [
      "Verify through another known channel before sending anything.",
      "Send money immediately.",
      "Ask for the friend’s password.",
      "Share the request publicly.",
    ],
    answer: 0,
    explanation:
      "The account may be copied or compromised, so separate verification is necessary.",
  },
  {
    question: "What should a student do with a delivery text containing a shortened payment link?",
    choices: [
      "Open the official delivery website or app directly instead of using the text link.",
      "Click the link because the fee is small.",
      "Forward the link to classmates.",
      "Reply with payment information.",
    ],
    answer: 0,
    explanation:
      "Shortened links hide the destination, so the claim should be checked through the official service.",
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
          Previous: B9.2 Phishing Email Warning Signs
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
          Next: B9.4 Impersonation and Fake Support Messages
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

function ChannelReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Cross-Channel Scam Review Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        The communication channel may change, but the defensive process remains
        consistent: identify the channel, pressure, requested action, and trusted
        verification method.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {channelReviewStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> never verify a
        suspicious request using the same message, phone number, profile, or
        reply thread that delivered it.
      </div>
    </section>
  );
}

function FakeChannelPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Smishing, Vishing, and Social Scam Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares deceptive texts, calls, voicemails,
            direct messages, and social posts without contacting any sender.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {channelReviewRows.map((row) => (
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

function ChannelClueBoard() {
  const clues = [
    {
      name: "Text-message clues",
      saferQuestion:
        "Does the text use a shortened link, urgent fee, delivery claim, account warning, prize, or unknown sender?",
      saferChoice:
        "Do not reply or use the link. Open the official service directly.",
    },
    {
      name: "Phone-call clues",
      saferQuestion:
        "Does the caller demand secrecy, payment, remote access, a code, or immediate action?",
      saferChoice:
        "End the call and contact the organization using a known official number.",
    },
    {
      name: "Social-profile clues",
      saferQuestion:
        "Does the account have a similar username, copied photo, unusual request, new payment demand, or changed writing style?",
      saferChoice:
        "Verify through another known channel before trusting the profile.",
    },
    {
      name: "Recovery and account clues",
      saferQuestion:
        "Does the message request a password, MFA code, recovery code, login approval, or account-reset action?",
      saferChoice:
        "Do not provide anything. Review the official account and report the request.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Communication Channel Clue Board
      </h2>
      <p className="mt-3 text-slate-300">
        Different channels have different clues, but requests for urgency,
        secrecy, money, credentials, codes, or unsafe links require the same
        careful verification.
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

export default function SmishingVishingSocialMediaScamsPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.3 Smishing, Vishing, and Social Media Scams
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how phishing appears through texts, calls, voicemail, direct
            messages, social posts, gaming chats, and copied profiles—and
            practice safe verification across channels.
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
          lessonTitle="Smishing, Vishing, and Social Media Scams"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that phishing can happen through text, phone, voicemail, direct messages, social posts, and gaming chats.",
            "I will not click, reply, call back, pay, download, or share codes or credentials.",
            "I am ready to verify suspicious requests through a separate official or known channel.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Channel Changes, but the Manipulation Often Stays the Same"
        >
          <p className="leading-8">
            A suspicious request may arrive as a delivery text, fraud call,
            voicemail, copied social profile, emergency direct message, prize
            post, or gaming chat. The sender may change the channel to make the
            request feel more personal or urgent.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every phone
            number, text, voicemail, account, profile, post, link, and payment
            request in this lesson is fictional.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain smishing, vishing, direct-message scams, and social account impersonation.",
            "Recognize suspicious links, caller pressure, copied profiles, emergency requests, and code demands.",
            "Choose separate verification channels without replying, calling back, paying, or sharing information.",
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
          title="Fast, Personal Channels Can Reduce Careful Thinking"
        >
          <p className="leading-8">
            Texts, calls, and direct messages often feel immediate and personal.
            That speed can make people respond before checking. Strong defenders
            create distance from the request and verify through another trusted
            route.
          </p>
        </SectionCard>

        <ChannelReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Verify the Person or Organization Outside the Suspicious Channel"
        >
          <p className="leading-8">
            A familiar number, voice, profile picture, username, or message
            history does not prove identity. Numbers can be spoofed, profiles can
            be copied, and accounts can be compromised. Separate verification is
            essential.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Cross-Channel Phishing
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

        <ChannelClueBoard />
        <FakeChannelPanel />

        <FakeDashboardCard
          title="Fake Cross-Channel Scam Dashboard"
          subtitle="Training dashboard using fictional text, phone, voicemail, direct-message, and social-platform evidence."
          metrics={[
            {
              label: "Requests reviewed",
              value: "22",
              note: "Fictional texts, calls, voicemails, social posts, and direct messages.",
            },
            {
              label: "Impersonation clues",
              value: "13",
              note: "Spoofed numbers, copied profiles, familiar names, and fake support identities.",
            },
            {
              label: "Verified separately",
              value: "10",
              note: "Requests were checked using official websites, known numbers, or trusted contacts.",
            },
          ]}
        />

        <FakeAlertCard
          title="Caller Requests MFA Code to Stop Fraud"
          severity="High"
          time="3:18 PM"
          source="Fake Phone Scam Training"
          details="A fictional caller claims to be from a bank, says fraud is happening now, and requests a one-time code to secure the account."
          recommendation="Do not share the code. End the call, open the official banking app or website, and contact the bank through a known official number."
        />

        <FakeLogPanel
          title="Fake Cross-Channel Review Log"
          logs={[
            "15:06:02 CALLER_ID displayed='known_bank_number' identity_verified='false'",
            "15:08:17 PRESSURE tactic='fraud_urgency' secrecy='requested'",
            "15:10:31 REQUEST type='one_time_code' policy_match='false'",
            "15:12:46 CALL action='ended_without_sharing_information'",
            "15:15:09 VERIFICATION channel='official_bank_app' result='no_matching_alert'",
            "15:18:04 REPORT method='trusted_adult_and_official_bank_number' status='completed'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Makes This Social Message Suspicious?"
          evidence={[
            "A fictional profile uses a close friend’s name and photo.",
            "The username contains one extra character.",
            "The message asks for emergency money immediately.",
            "The sender says not to call or tell anyone.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The similar username, urgency, money request, and secrecy are major warning signs; verify through another known channel.",
            "The photo proves the account belongs to the friend.",
            "The student should send money before the emergency gets worse.",
            "The student should ask for the friend’s password.",
          ]}
          bestAnswer={0}
          explanation="Copied photos and names can make an account look familiar. The altered username, emergency request, and secrecy strengthen the scam classification."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Cross-Channel Scams More Effective"
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
          title="Compare Fictional Text, Call, and Social Scenarios"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Scenario Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Cross-Channel Scam Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives a delivery text, a bank call, an
                emergency friend message, a prize post, and a school voicemail.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the communication channel.</li>
                <li>Name the manipulation tactic and requested action.</li>
                <li>Identify what evidence is unverified.</li>
                <li>Choose a separate official verification channel.</li>
                <li>Decide whether the scenario should be ignored, verified, or reported immediately.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Delivery Text Requests a Small Fee"
          scenario="A fictional text says a package cannot be delivered until a small fee is paid through a shortened link."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the link. Open the delivery company’s official website or app directly and check the tracking information.",
              outcome:
                "Best defensive choice. Shortened links hide the destination, and the claim should be verified separately.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Pay because the fee is small.",
              outcome:
                "Risky. A small amount can still expose payment information or lead to a fake site.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the link to friends for testing.",
              outcome:
                "Unsafe. Suspicious links should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Caller Claims to Be School Technology Support"
          scenario="A fictional caller says the student’s school account is being attacked and asks for the current MFA code."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the code. End the call and contact school technology staff through the official directory or portal.",
              outcome:
                "Best defensive choice. MFA codes must remain private, and caller identity has not been verified.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the code because the caller sounds professional.",
              outcome:
                "Risky. Tone and caller ID do not prove identity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the code in a group chat for advice.",
              outcome:
                "Unsafe. Verification codes should never be shared.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Smishing, Vishing, and Social Scam Checklist"
          items={[
            "I identify whether the request arrived by text, call, voicemail, direct message, post, or gaming chat.",
            "I recognize shortened links, spoofed caller ID, copied profiles, emergency claims, and secrecy demands.",
            "I do not reply, call back, click, pay, approve, download, or share credentials or codes.",
            "I verify through an official website, known number, trusted adult, or known contact method.",
            "I understand that familiar numbers, voices, names, photos, and message history do not prove identity.",
            "I report serious requests and secure accounts if I interacted with suspicious content.",
          ]}
        />

        <MiniQuiz
          title="B9.3 Mini Quiz: Smishing, Vishing, and Social Media Scams"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cross-channel scam comparison. Include one text, one phone call, one voicemail, one direct message, and one social post. For each, identify the pressure tactic, requested action, warning signs, separate verification method, and safest response."
          tips={[
            "Use fictional numbers, accounts, messages, links, organizations, and payment requests only.",
            "Do not include real suspicious phone numbers, URLs, credentials, or private information.",
            "Explain why the displayed number, profile, or name does not prove identity.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Smishing uses text or mobile messages, while vishing uses phone calls or voicemail.",
            "Copied profiles, compromised accounts, and spoofed caller ID can make scams appear familiar.",
            "Emergency requests, secrecy, quick payment demands, and requests for codes are major warning signs.",
            "Verification should happen outside the suspicious channel.",
            "Passwords, MFA codes, recovery codes, payment details, and private information should never be shared with an unverified sender or caller.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}