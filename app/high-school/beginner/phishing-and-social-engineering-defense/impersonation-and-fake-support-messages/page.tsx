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
  `${modulePath}/smishing-vishing-and-social-media-scams`;
const nextLesson =
  `${modulePath}/safe-link-and-attachment-judgment`;

const vocab = [
  [
    "Impersonation",
    "Pretending to be a trusted person, organization, support agent, teacher, company, or authority.",
  ],
  [
    "Fake support message",
    "A deceptive request that claims to come from technical support, account support, school technology staff, or customer service.",
  ],
  [
    "Identity proof",
    "Reliable evidence that confirms who is making a request, usually through an official trusted channel.",
  ],
  [
    "Remote access request",
    "A request to install software or allow another person to control or view a device. Unverified requests should never be approved.",
  ],
  [
    "Recovery secret",
    "A password, MFA code, backup code, recovery code, or other private detail that can restore or complete account access.",
  ],
  [
    "Official channel",
    "A verified website, app, school portal, directory, known phone number, or trusted contact method controlled by the real organization.",
  ],
];

const impersonationStages = [
  {
    title: "Create a trusted identity",
    example:
      "The sender copies a name, logo, profile photo, title, phone number, email style, or support language.",
  },
  {
    title: "Create a problem",
    example:
      "The message claims there is fraud, account compromise, unpaid fees, a device infection, or a school-system issue.",
  },
  {
    title: "Request control or secrets",
    example:
      "The target is asked for a password, MFA code, recovery code, payment, download, login approval, or remote access.",
  },
  {
    title: "Block outside verification",
    example:
      "The sender demands secrecy, urgency, or continued communication only through the same message or call.",
  },
];

const supportReviewRows = [
  {
    item: "Fake school support",
    source: "Message asks for a password and MFA code",
    review:
      "Never share credentials or codes. Contact school technology staff through the official directory or portal.",
  },
  {
    item: "Fake bank support",
    source: "Caller requests a one-time code to stop fraud",
    review:
      "End the call and use the official app, website, or number on the card.",
  },
  {
    item: "Remote access request",
    source: "Chat claims a technician must control the device",
    review:
      "Do not install software or approve access unless the request was initiated and verified through official support.",
  },
  {
    item: "Copied friend profile",
    source: "Similar username asks for emergency money",
    review:
      "Verify through another known channel because the profile may be copied or compromised.",
  },
  {
    item: "Recovery-code request",
    source: "Support message says a backup code is needed to secure the account",
    review:
      "Do not share it. Recovery codes are private secrets that can restore access.",
  },
];

const mistakes = [
  "Trusting a support request because the sender uses a professional title or logo.",
  "Assuming a familiar caller ID, profile picture, or display name proves identity.",
  "Sharing passwords, MFA codes, recovery codes, or backup codes with support.",
  "Installing remote-access software from an unexpected message or call.",
  "Allowing a sender to keep the conversation inside the suspicious channel.",
  "Ignoring unusual support requests because the account or device still appears to work.",
];

const quizQuestions = [
  {
    question: "What is impersonation?",
    choices: [
      "Pretending to be a trusted person, organization, or authority.",
      "A normal software update.",
      "A protected backup process.",
      "A verified support request.",
    ],
    answer: 0,
    explanation:
      "Impersonation copies trusted identities to make a deceptive request appear legitimate.",
  },
  {
    question: "What should happen when a support message requests an MFA code?",
    choices: [
      "Do not share the code; verify support through the official organization.",
      "Share the code because support needs it.",
      "Post the code in a group chat.",
      "Approve every login request.",
    ],
    answer: 0,
    explanation:
      "MFA codes can complete authentication and must remain private.",
  },
  {
    question: "Why is an unexpected remote-access request dangerous?",
    choices: [
      "It may give an unverified person control of the device.",
      "Remote access always improves security.",
      "It automatically creates a backup.",
      "It removes the need for passwords.",
    ],
    answer: 0,
    explanation:
      "Remote access can expose files, accounts, and device control, so it must be independently verified.",
  },
  {
    question: "How should a student verify a message claiming to be school technology support?",
    choices: [
      "Use the official school portal, directory, or known school contact method.",
      "Reply to the message with a password.",
      "Call the number inside the message.",
      "Install the requested software immediately.",
    ],
    answer: 0,
    explanation:
      "Verification should happen through a separate official school channel.",
  },
  {
    question: "What is the safest response to a copied social profile asking for emergency money?",
    choices: [
      "Verify the person through another known channel before sending anything.",
      "Send money because the photo looks correct.",
      "Ask for the account password.",
      "Forward the request to strangers.",
    ],
    answer: 0,
    explanation:
      "Names and photos can be copied, and accounts can be compromised, so separate verification is necessary.",
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
          Previous: B9.3 Smishing, Vishing, and Social Media Scams
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
          Next: B9.5 Safe Link and Attachment Judgment
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

function ImpersonationFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        How Fake Support and Impersonation Requests Work
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Impersonation attempts often build trust first, create a problem, request
        secrets or control, and then discourage outside verification.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {impersonationStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> legitimate support
        should be reached through official channels and should never require
        passwords, MFA codes, recovery codes, or secret payments.
      </div>
    </section>
  );
}

function FakeSupportPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Impersonation and Support Request Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares copied identities, support claims,
            requested actions, and safe verification methods.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {supportReviewRows.map((row) => (
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

function IdentityVerificationBoard() {
  const areas = [
    {
      name: "Claimed identity",
      saferQuestion:
        "Who does the sender claim to be, and is that identity expected in this situation?",
      saferChoice:
        "Treat the claim as unverified until it is confirmed through an official channel.",
    },
    {
      name: "Requested access",
      saferQuestion:
        "Does the request ask for a password, code, login approval, payment, download, or remote control?",
      saferChoice:
        "Do not provide access or secrets. End the interaction and verify separately.",
    },
    {
      name: "Communication path",
      saferQuestion:
        "Did the contact begin through an unexpected message, call, pop-up, direct message, or unofficial address?",
      saferChoice:
        "Use a trusted website, portal, directory, app, or known number instead.",
    },
    {
      name: "Pressure and secrecy",
      saferQuestion:
        "Does the sender demand urgency, secrecy, continued contact, or avoidance of trusted adults or staff?",
      saferChoice:
        "Stop the interaction and involve trusted help.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Identity Verification Board
      </h2>
      <p className="mt-3 text-slate-300">
        The sender’s claim is not proof. Defenders compare the claimed identity,
        requested access, communication path, and pressure tactics.
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

export default function ImpersonationFakeSupportMessagesPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.4 Impersonation and Fake Support Messages
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how copied identities and fake support requests use authority,
            urgency, account warnings, credential requests, remote-access
            requests, and recovery-code pressure.
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
          lessonTitle="Impersonation and Fake Support Messages"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that names, logos, titles, caller ID, photos, and writing style can be copied.",
            "I will not share passwords, MFA codes, recovery codes, backup codes, payments, or remote access.",
            "I am ready to verify identities through separate official channels.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Support Requests Need Identity Verification Too"
        >
          <p className="leading-8">
            A message can sound technical, professional, and urgent while still
            being fake. Real support processes should be reached through trusted
            official channels, and support staff should not need a user’s
            password, MFA code, or recovery code.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every support
            agent, account, call, message, device, phone number, code, and
            organization in this lesson is fictional.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain impersonation and fake support using safe defensive concepts.",
            "Recognize copied identities, credential requests, remote-access demands, urgency, and secrecy.",
            "Verify support and identity claims through separate official channels.",
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
          title="Fake Support Can Request Full Account or Device Control"
        >
          <p className="leading-8">
            A deceptive support request may attempt to capture credentials,
            approve account access, install remote-control software, collect
            payment, change recovery settings, or gain access to private files.
            Verification must happen before access is granted.
          </p>
        </SectionCard>

        <ImpersonationFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="A Trusted Identity Must Be Proven, Not Assumed"
        >
          <p className="leading-8">
            Display names, logos, voices, profile photos, phone numbers, and job
            titles can all be copied. The safest response is to end the
            suspicious interaction and contact the real organization through a
            known official method.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Identity and Support Verification
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

        <IdentityVerificationBoard />
        <FakeSupportPanel />

        <FakeDashboardCard
          title="Fake Support Verification Dashboard"
          subtitle="Training dashboard using fictional support identities, requests, channels, and verification outcomes."
          metrics={[
            {
              label: "Support requests",
              value: "19",
              note: "Fictional school, bank, device, social, and account-support contacts.",
            },
            {
              label: "Secret requests",
              value: "12",
              note: "Passwords, MFA codes, recovery codes, payments, and login approvals.",
            },
            {
              label: "Verified officially",
              value: "8",
              note: "Requests were checked through official apps, portals, directories, and known numbers.",
            },
          ]}
        />

        <FakeAlertCard
          title="Fake Support Agent Requests Remote Access"
          severity="High"
          time="1:52 PM"
          source="Fake Device Support Training"
          details="A fictional chat claims the student’s device is infected and asks the student to install remote-control software immediately."
          recommendation="Do not install anything or approve access. Close the chat and contact trusted school or family technology support through an official channel."
        />

        <FakeLogPanel
          title="Fake Support Request Log"
          logs={[
            "13:41:02 CONTACT channel='unexpected_chat' identity='Device Support'",
            "13:43:15 CLAIM device_infected='true' evidence_provided='false'",
            "13:45:28 REQUEST remote_access='true' software_install='true'",
            "13:47:03 PRESSURE urgency='immediate' secrecy='requested'",
            "13:49:44 VERIFICATION channel='official_support_portal' result='request_not_confirmed'",
            "13:52:01 SAFE_ACTION recommendation='do not install software or approve remote access'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Clues Make This Support Request Suspicious?"
          evidence={[
            "A fictional pop-up claims the device is infected.",
            "The message says a technician must connect immediately.",
            "The student is told to install remote-control software.",
            "The sender says not to contact school technology staff.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The unexpected pop-up, remote-access request, urgency, and secrecy strongly suggest fake support; close it and verify officially.",
            "The word technician proves the request is legitimate.",
            "The student should install the software quickly.",
            "The student should share the device password first.",
          ]}
          bestAnswer={0}
          explanation="Unexpected remote-access requests combined with urgency and secrecy are major fake-support warning signs."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Impersonation More Effective"
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
          title="Review Fictional Impersonation and Support Requests"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Request Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Identity and Support Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives a school-support message, a bank
                call, a remote-access chat, a copied friend profile, and an
                account-recovery request.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the claimed identity and communication channel.</li>
                <li>Identify the requested secret, payment, access, or action.</li>
                <li>Identify urgency, authority, and secrecy clues.</li>
                <li>Choose a separate official verification method.</li>
                <li>Decide whether the request should be ignored, blocked, or reported.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Support Chat Requests a Backup Code"
          scenario="A fictional support message says the student’s account is compromised and asks for a backup recovery code to remove the attacker."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the code. Open the official account service directly and contact support through the verified help page.",
              outcome:
                "Best defensive choice. Recovery codes can restore access and must remain private.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the code because the account may be under attack.",
              outcome:
                "Risky. The code may allow the sender to access or recover the account.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the code in a group chat for advice.",
              outcome:
                "Unsafe. Recovery secrets must never be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Familiar Profile Requests Emergency Payment"
          scenario="A fictional social profile uses a family member’s name and photo. The sender asks for immediate payment and says not to call because the phone is broken."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not pay. Contact the family member or another trusted relative through a separate known channel.",
              outcome:
                "Best defensive choice. The account may be copied or compromised.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Pay because the name and photo look correct.",
              outcome:
                "Risky. Names and photos can be copied.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask the sender for the family member’s password.",
              outcome:
                "Unsafe. Credentials should never be requested or shared.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Impersonation and Fake Support Checklist"
          items={[
            "I understand that names, logos, titles, caller ID, voices, photos, and writing styles can be copied.",
            "I identify what secret, payment, access, download, or approval is being requested.",
            "I never share passwords, MFA codes, recovery codes, or backup codes with support.",
            "I do not install remote-access software or approve device control from an unexpected contact.",
            "I end suspicious interactions and verify through official channels.",
            "I involve trusted adults or technology staff when a request is serious, secretive, or unclear.",
          ]}
        />

        <MiniQuiz
          title="B9.4 Mini Quiz: Impersonation and Fake Support Messages"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional impersonation and fake-support analysis chart. Include five requests, the claimed identity, requested action, warning signs, official verification channel, and safest response."
          tips={[
            "Use fictional people, organizations, phone numbers, profiles, accounts, codes, and support requests only.",
            "Do not include real credentials, recovery secrets, payment details, or remote-access tools.",
            "Explain why the claimed identity is not enough proof.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Impersonation uses copied identities to make deceptive requests appear trustworthy.",
            "Fake support may request passwords, MFA codes, recovery codes, payments, software installation, or remote access.",
            "Names, logos, titles, caller ID, voices, photos, and writing styles do not prove identity.",
            "Support should be reached through official websites, apps, portals, directories, or known numbers.",
            "Sensitive secrets and device control should never be given to an unverified sender or caller.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}