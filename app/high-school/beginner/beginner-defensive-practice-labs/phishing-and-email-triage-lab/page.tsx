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
  `${modulePath}/identity-and-access-review-lab`;
const nextLesson =
  `${modulePath}/endpoint-alert-analysis-lab`;

const vocab = [
  [
    "Phishing",
    "A deceptive message designed to pressure someone into revealing information, opening unsafe content, sending money, or taking another harmful action.",
  ],
  [
    "Email triage",
    "The structured review of a reported message to decide its priority, evidence, likely risk, and safest next action.",
  ],
  [
    "Display name",
    "The visible sender name shown by an email client, which may not match the real sending address.",
  ],
  [
    "Link mismatch",
    "A difference between the visible link text and the actual destination shown through safe inspection.",
  ],
  [
    "Attachment warning",
    "An indicator that a file type, filename, source, or delivery method may require additional caution.",
  ],
  [
    "Preservation",
    "Keeping the original message, headers, timestamps, and related evidence unchanged for authorized review.",
  ],
];

const triageStages = [
  {
    title: "Preserve the message",
    example:
      "Do not reply, forward casually, open attachments, or click links. Keep the original report and timestamps.",
  },
  {
    title: "Inspect safely",
    example:
      "Review sender details, wording, domain, link text, attachment name, headers, and known business context.",
  },
  {
    title: "Assess the evidence",
    example:
      "Separate confirmed indicators from assumptions and identify what still needs verification.",
  },
  {
    title: "Report and respond",
    example:
      "Use approved reporting channels, warn affected users when authorized, and escalate according to policy.",
  },
];

const emailRows = [
  {
    item: "Payroll update request",
    source: "Urgent message from a look-alike domain asking for bank details",
    review:
      "High concern. Preserve the message, report it, verify through a trusted channel, and do not use the embedded link.",
  },
  {
    item: "Shared document notice",
    source: "Unexpected attachment with a generic filename and no prior context",
    review:
      "Investigate safely. Do not open the file; confirm with the supposed sender through a separate channel.",
  },
  {
    item: "Password expiration warning",
    source: "Message threatens account closure and links to a mismatched domain",
    review:
      "Likely phishing. Use the official portal directly rather than the message link.",
  },
  {
    item: "Known vendor invoice",
    source: "Expected invoice from the correct address and documented purchase",
    review:
      "Lower concern, but still verify amount, attachment type, and business context before processing.",
  },
  {
    item: "School event reminder",
    source: "Expected announcement from the official domain with no attachment or login request",
    review:
      "Likely legitimate, but preserve normal caution and avoid unnecessary data sharing.",
  },
];

const mistakes = [
  "Clicking a suspicious link to see where it goes.",
  "Opening an attachment to confirm whether it is harmful.",
  "Replying to the sender with account or personal information.",
  "Trusting the display name without checking the actual address.",
  "Forwarding the suspicious message to friends instead of using the approved reporting method.",
  "Deleting the message before evidence and headers are preserved.",
];

const quizQuestions = [
  {
    question: "What is email triage?",
    choices: [
      "A structured review of a reported message to decide risk, priority, evidence, and next action.",
      "Opening every attachment immediately.",
      "Deleting every message from an unknown sender.",
      "Replying to ask whether the sender is real.",
    ],
    answer: 0,
    explanation:
      "Email triage uses evidence and context to decide how a message should be handled safely.",
  },
  {
    question: "Why is the display name not enough to trust a sender?",
    choices: [
      "Because the visible name can be changed and may not match the actual sending address.",
      "Because display names are always hidden.",
      "Because every display name is malicious.",
      "Because the email body matters less than the name.",
    ],
    answer: 0,
    explanation:
      "Attackers can imitate familiar names, so the actual address and domain must be reviewed.",
  },
  {
    question: "What is the safest action for an unexpected attachment?",
    choices: [
      "Do not open it; preserve the message and verify the request through a trusted channel.",
      "Open it in case it is important.",
      "Upload it to a public file-sharing site.",
      "Rename the file and run it.",
    ],
    answer: 0,
    explanation:
      "Unexpected attachments should be handled through approved review processes without opening them.",
  },
  {
    question: "What should a user do with a suspicious password-reset link?",
    choices: [
      "Avoid the link and access the official service directly through a known bookmark or typed address.",
      "Click it quickly before the account closes.",
      "Send the password in a reply.",
      "Forward it to friends.",
    ],
    answer: 0,
    explanation:
      "Using the official service directly avoids relying on a potentially deceptive message link.",
  },
  {
    question: "Why should the original message be preserved?",
    choices: [
      "It may contain headers, timestamps, sender details, and other evidence needed for review.",
      "It makes clicking safer.",
      "It guarantees the message is malicious.",
      "It removes the need for reporting.",
    ],
    answer: 0,
    explanation:
      "Preservation supports accurate investigation and documentation.",
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
          Previous: B14.2 Identity and Access Review Lab
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
          Next: B14.4 Endpoint Alert Analysis Lab
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

function EmailTriageFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Email-Triage Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Defensive email review protects the user, preserves evidence, and avoids
        interacting with suspicious content.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {triageStages.map((stage, index) => (
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
        <span className="font-bold">Triage rule:</span> investigate the message
        without interacting with its suspicious links, attachments, forms, or
        reply instructions.
      </div>
    </section>
  );
}

function FakeEmailPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Email Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Message Triage Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares sender details, message context,
            suspicious indicators, and safe defensive actions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {emailRows.map((row) => (
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

function EmailDecisionBoard() {
  const areas = [
    {
      name: "Sender",
      saferQuestion:
        "Does the actual address and domain match the person or organization being represented?",
      saferChoice:
        "Check the full address, spelling, domain, reply address, and known contact method.",
    },
    {
      name: "Message",
      saferQuestion:
        "Does the message use urgency, fear, secrecy, unusual wording, or an unexpected request?",
      saferChoice:
        "Compare the request with normal procedures and verify independently.",
    },
    {
      name: "Links and files",
      saferQuestion:
        "Are links mismatched, shortened, unfamiliar, or connected to unexpected attachments?",
      saferChoice:
        "Do not click or open them; use approved inspection and reporting methods.",
    },
    {
      name: "Response",
      saferQuestion:
        "Which reporting, warning, blocking, verification, or escalation step is authorized?",
      saferChoice:
        "Use the approved channel, preserve evidence, and document the decision.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Email Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Phishing Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong triage considers the sender, message, links, files, context,
        reporting path, and evidence together.
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

export default function PhishingAndEmailTriageLabPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.3 Phishing and Email Triage Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice reviewing fictional sender details, message wording,
            domains, links, attachments, headers, business context, and safe
            reporting decisions without interacting with suspicious content.
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
          lessonTitle="Phishing and Email Triage Lab"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that suspicious links and attachments should not be opened during triage.",
            "I will use fictional messages, senders, domains, links, files, headers, and organizations only.",
            "I am ready to preserve evidence, inspect safely, separate facts from assumptions, and report through approved channels.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Safest Email Investigation Often Begins by Not Clicking"
        >
          <p className="leading-8">
            Defenders can learn a great deal from sender details, wording,
            timing, domain differences, link mismatches, attachment names,
            headers, and business context without opening suspicious content.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> do not open
            attachments, visit links, reply to senders, enter credentials, or
            use real suspicious messages. Every example in this lesson is
            fictional and inert.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain phishing, email triage, display-name spoofing, link mismatches, attachment warnings, and evidence preservation.",
            "Analyze fictional sender, message, link, file, header, and business-context evidence.",
            "Choose safe reporting, verification, warning, blocking, and escalation actions.",
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
          title="One Message Can Target Accounts, Money, Data, Devices, and Trust"
        >
          <p className="leading-8">
            Phishing can imitate teachers, managers, vendors, banks, support
            teams, delivery companies, or friends. Strong triage protects the
            recipient while preserving the evidence needed to protect others.
          </p>
        </SectionCard>

        <EmailTriageFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="No Single Indicator Proves a Message Is Safe or Malicious"
        >
          <p className="leading-8">
            Defenders compare multiple clues: actual sender address, domain,
            wording, urgency, request type, link destination, attachment,
            timing, headers, prior conversation, and normal business procedure.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Phishing and Email Triage
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

        <EmailDecisionBoard />
        <FakeEmailPanel />

        <FakeDashboardCard
          title="Fake Phishing Triage Dashboard"
          subtitle="Training dashboard using fictional messages, senders, domains, links, attachments, headers, reports, and response decisions."
          metrics={[
            {
              label: "Messages reviewed",
              value: "36",
              note: "Fictional payroll, password, invoice, document-sharing, support, and school messages.",
            },
            {
              label: "Messages escalated",
              value: "9",
              note: "Look-alike domains, suspicious attachments, mismatched links, and credential requests.",
            },
            {
              label: "Legitimate messages",
              value: "21",
              note: "Expected messages verified through trusted context and official procedures.",
            },
          ]}
        />

        <FakeAlertCard
          title="Urgent Payroll Message Uses a Look-Alike Domain"
          severity="High"
          time="1:22 PM"
          source="Fake Email Security Monitor"
          details="A fictional message claims to be from payroll, threatens delayed payment, and asks the recipient to use a link from a domain with one substituted letter."
          recommendation="Do not click the link or reply. Preserve the message, report it through the approved channel, and verify payroll information through the official portal or known contact."
        />

        <FakeLogPanel
          title="Fake Email Triage Log"
          logs={[
            "12:48:03 REPORT user='teacher_12' subject='urgent_payroll_update'",
            "12:51:17 SENDER display='Payroll Office' domain='payro11-example.test'",
            "12:55:44 MESSAGE urgency='high' secrecy='requested' deadline='30_minutes'",
            "13:02:11 LINK visible='Official Payroll Portal' destination='mismatch'",
            "13:08:26 ATTACHMENT present='false' credential_request='true'",
            "13:15:39 CONTEXT payroll_campaign='none' official_notice='none'",
            "13:22:04 DECISION preserve='true' escalate='email_security'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="How Should This Message Be Handled?"
          evidence={[
            "A fictional payroll message uses urgent language and threatens delayed payment.",
            "The display name says Payroll Office, but the domain contains a substituted character.",
            "The visible link text says Official Payroll Portal, but the destination does not match.",
            "No official payroll campaign is documented.",
          ]}
          question="What is the safest response?"
          options={[
            "Do not click or reply; preserve the message, report it, and verify through the official payroll channel.",
            "Use the link quickly before the deadline.",
            "Reply with banking information to confirm the account.",
            "Forward the message to friends for advice.",
          ]}
          bestAnswer={0}
          explanation="The urgency, look-alike domain, link mismatch, and missing business context justify reporting and independent verification."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Increase Email Risk"
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
          title="Triage a Fictional Email Queue"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Message Queue
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Mailbox
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional queue includes payroll, shared-document, password,
                vendor-invoice, event-reminder, delivery, and support messages
                with different evidence and business context.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Triage Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Preserve the original message and report details.</li>
                <li>Review the display name, full address, domain, and reply address.</li>
                <li>Identify urgency, secrecy, payment, credential, or data requests.</li>
                <li>Inspect provided link and attachment metadata safely.</li>
                <li>Compare the request with normal business procedures.</li>
                <li>Choose report, verify, block, warn, monitor, or close.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Unexpected Attachment Comes From a Familiar Display Name"
          scenario="A fictional message appears to come from a teacher but contains an unexpected file and a short message saying, 'Open this now.'"
          choices={[
            {
              label: "Choice A",
              response:
                "Do not open the file. Check the full sender address, preserve the message, and verify with the teacher through a separate trusted channel.",
              outcome:
                "Best triage choice. Familiar display names can be imitated.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the attachment because the name looks familiar.",
              outcome:
                "Risky. The display name alone does not verify the sender.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reply with a password to confirm identity.",
              outcome:
                "Unsafe. Credentials must never be sent by email.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Password Warning Threatens Immediate Account Closure"
          scenario="A fictional message says the account will close in ten minutes unless the recipient signs in through an embedded link."
          choices={[
            {
              label: "Choice A",
              response:
                "Avoid the link, open the official service directly, check account status, preserve the message, and report it if suspicious.",
              outcome:
                "Best defensive choice. Independent verification avoids the untrusted link.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Click immediately because the deadline is short.",
              outcome:
                "Risky. Artificial urgency is a common phishing technique.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the password in a reply instead.",
              outcome:
                "Unsafe. Passwords must never be shared through email.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Phishing and Email Triage Checklist"
          items={[
            "I preserve the original message and report details.",
            "I check the full sender address, domain, and reply address.",
            "I identify urgency, secrecy, credential, payment, and data requests.",
            "I avoid clicking suspicious links or opening unexpected attachments.",
            "I verify requests through official portals or separate trusted channels.",
            "I separate confirmed indicators from assumptions and missing context.",
            "I report, document, and escalate through approved procedures.",
          ]}
        />

        <MiniQuiz
          title="B14.3 Mini Quiz: Phishing and Email Triage"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional email triage report. Include the sender display name, full address, domain, reply address, subject, request, urgency, link evidence, attachment evidence, business context, risk indicators, safe decision, reporting path, and final case notes."
          tips={[
            "Use fictional messages, names, addresses, domains, links, files, headers, and organizations only.",
            "Do not include real suspicious emails, credentials, private messages, or live malicious links.",
            "Explain which indicators are confirmed, which are assumptions, and what requires independent verification.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Phishing messages often use urgency, fear, secrecy, impersonation, suspicious links, or unexpected attachments.",
            "The display name alone does not verify the sender.",
            "Suspicious links and files should not be opened during triage.",
            "Independent verification should use official portals or separate trusted contact methods.",
            "Preservation, reporting, documentation, and escalation protect both the recipient and other users.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}