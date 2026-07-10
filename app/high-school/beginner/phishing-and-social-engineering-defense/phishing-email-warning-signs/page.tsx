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
  `${modulePath}/how-social-engineering-manipulates-people`;
const nextLesson =
  `${modulePath}/smishing-vishing-and-social-media-scams`;

const vocab = [
  [
    "Sender address",
    "The full email address that shows where a message was sent from, which may differ from the displayed name.",
  ],
  [
    "Display name",
    "The visible sender name shown by an email service. It can be copied and does not prove identity.",
  ],
  [
    "Domain",
    "The main website or email address name associated with an organization, such as the part after the @ symbol.",
  ],
  [
    "Spoofing",
    "Making a message or sender identity appear to come from a trusted person or organization.",
  ],
  [
    "Link destination",
    "The website address a link is expected to open. It should match the official service and context.",
  ],
  [
    "Attachment",
    "A file included with an email. Unexpected or suspicious attachments should not be opened or tested.",
  ],
];

const emailReviewStages = [
  {
    title: "Check the sender",
    example:
      "Compare the display name, full address, domain, and whether the sender is expected.",
  },
  {
    title: "Check the request",
    example:
      "Identify what the message wants: a click, reply, login, payment, download, approval, or sensitive information.",
  },
  {
    title: "Check the evidence",
    example:
      "Review urgency, wording, links, attachments, context, and whether the request matches normal procedures.",
  },
  {
    title: "Verify separately",
    example:
      "Use the official website, school portal, directory, known phone number, or trusted person instead of the email.",
  },
];

const emailReviewRows = [
  {
    item: "Sender mismatch",
    source: "Display name says School Support, but the address uses an unrelated domain",
    review:
      "Strong warning sign. Do not reply; verify through the official school directory or portal.",
  },
  {
    item: "Urgent account threat",
    source: "Subject says account closes today unless the student signs in",
    review:
      "Urgency clue. Open the official account directly and review alerts there.",
  },
  {
    item: "Unexpected attachment",
    source: "File claims to contain an updated class schedule",
    review:
      "Do not open it. Confirm the schedule through the official portal or teacher.",
  },
  {
    item: "Credential request",
    source: "Message asks the student to reply with a password and MFA code",
    review:
      "High-risk request. Never share credentials or codes; report the email.",
  },
  {
    item: "Known portal notice",
    source: "Notification appears inside the official school portal",
    review:
      "More trustworthy context, but still review the request and avoid sharing sensitive information.",
  },
];

const mistakes = [
  "Trusting the display name without checking the full sender address.",
  "Clicking a link because the message uses a real logo or familiar colors.",
  "Assuming grammar or spelling alone can prove whether an email is legitimate.",
  "Opening an unexpected attachment to see what it contains.",
  "Replying with a password, MFA code, recovery code, or private information.",
  "Using the suspicious email’s link, phone number, or reply button to verify the message.",
];

const quizQuestions = [
  {
    question: "Why is the display name not enough to prove who sent an email?",
    choices: [
      "Display names can be copied or changed.",
      "Display names are always hidden.",
      "Only attachments identify senders.",
      "Every display name belongs to a school.",
    ],
    answer: 0,
    explanation:
      "A sender can choose a familiar display name, so the full address and domain must also be checked.",
  },
  {
    question: "Which clue is the strongest sender warning sign?",
    choices: [
      "The display name says School Support, but the address uses an unrelated domain.",
      "The email includes a greeting.",
      "The subject line is short.",
      "The message was received in the morning.",
    ],
    answer: 0,
    explanation:
      "A mismatch between the claimed identity and the actual sender domain is an important phishing clue.",
  },
  {
    question: "What is the safest response to an urgent account-warning email?",
    choices: [
      "Open the official account directly and review alerts without using the email link.",
      "Click immediately before the deadline.",
      "Reply with the account password.",
      "Forward the email to classmates.",
    ],
    answer: 0,
    explanation:
      "Urgent account claims should be checked through the official service rather than through the email.",
  },
  {
    question: "What should a student do with an unexpected attachment?",
    choices: [
      "Do not open it; verify the sender and purpose through a separate trusted channel.",
      "Open it in a different browser.",
      "Rename it and try again.",
      "Upload it to another website.",
    ],
    answer: 0,
    explanation:
      "Suspicious attachments should not be opened, renamed, forwarded, uploaded, or tested.",
  },
  {
    question: "Which request should never be completed through email?",
    choices: [
      "Sending a password or MFA code.",
      "Reading a normal school announcement.",
      "Checking the date of a meeting.",
      "Viewing a verified portal notice.",
    ],
    answer: 0,
    explanation:
      "Passwords, MFA codes, and recovery codes must remain private and should never be sent by email.",
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
          Previous: B9.1 How Social Engineering Manipulates People
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
          Next: B9.3 Smishing, Vishing, and Social Media Scams
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

function EmailReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Phishing Email Review Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong email review checks the sender, request, evidence, and official
        verification path before any interaction.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {emailReviewStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> inspect displayed
        evidence without clicking links, opening attachments, replying, calling
        numbers, or entering information.
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
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Phishing Email Warning-Sign Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel helps students compare sender, subject,
            request, link, attachment, and context clues safely.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {emailReviewRows.map((row) => (
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

function EmailClueBoard() {
  const clues = [
    {
      name: "Sender identity",
      saferQuestion:
        "Do the display name, full address, domain, and expected sender all match?",
      saferChoice:
        "Treat mismatches as warning signs and verify through a known official channel.",
    },
    {
      name: "Request and pressure",
      saferQuestion:
        "Does the email ask for credentials, codes, money, downloads, approvals, secrecy, or immediate action?",
      saferChoice:
        "Pause and confirm the request independently before doing anything.",
    },
    {
      name: "Links and destinations",
      saferQuestion:
        "Does the displayed link appear to match the official service and context?",
      saferChoice:
        "Do not use the email link; open the official website or app directly.",
    },
    {
      name: "Attachments and files",
      saferQuestion:
        "Was the file expected, and does its name, type, sender, and purpose make sense?",
      saferChoice:
        "Do not open unexpected files; verify the sender and assignment separately.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Phishing Email Clue Board
      </h2>
      <p className="mt-3 text-slate-300">
        No single clue proves everything. Defenders compare several pieces of
        evidence before deciding whether an email is normal, suspicious, or
        report-first.
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

export default function PhishingEmailWarningSignsPage() {
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
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.2 Phishing Email Warning Signs
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to inspect sender details, subject lines, wording,
            requests, links, attachments, and context without interacting with
            suspicious email content.
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
          lessonTitle="Phishing Email Warning Signs"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a display name or logo does not prove who sent an email.",
            "I will not click, reply, call, download, open, forward, upload, or test suspicious email content.",
            "I am ready to compare several clues before classifying an email.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Professional-Looking Email Can Still Be Fake"
        >
          <p className="leading-8">
            Phishing emails may use copied logos, familiar names, official
            colors, realistic signatures, and correct personal details.
            Defenders look beyond appearance and inspect the full sender,
            request, context, destination, and file evidence.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every email,
            sender, domain, link, attachment, account, and organization in this
            lesson is fictional. Never use real suspicious content.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Inspect display name, full sender address, domain, subject, wording, request, link, attachment, and context.",
            "Identify mismatches, urgency, credential requests, unexpected files, and unofficial destinations.",
            "Verify suspicious email claims through a separate official channel and report them safely.",
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
          title="Email Is Often the Beginning of a Larger Incident"
        >
          <p className="leading-8">
            A phishing email may attempt to steal credentials, capture MFA
            codes, deliver a suspicious file, request money, change account
            recovery, or pressure the target into approving access. Recognizing
            warning signs early can prevent several connected problems.
          </p>
        </SectionCard>

        <EmailReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Compare Identity, Request, and Context"
        >
          <p className="leading-8">
            The strongest phishing judgments use multiple clues. A mismatched
            sender, unusual request, urgent deadline, suspicious destination,
            unexpected attachment, and broken context become more meaningful
            when considered together.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Phishing Email Analysis
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

        <EmailClueBoard />
        <FakeEmailPanel />

        <FakeDashboardCard
          title="Fake Phishing Email Dashboard"
          subtitle="Training dashboard using fictional sender, subject, request, link, attachment, and verification evidence."
          metrics={[
            {
              label: "Emails reviewed",
              value: "24",
              note: "Fictional school, account, prize, payment, and support messages.",
            },
            {
              label: "Sender mismatches",
              value: "9",
              note: "Display names did not match the full sender address or expected domain.",
            },
            {
              label: "Reported safely",
              value: "11",
              note: "Suspicious messages were verified separately and reported through approved channels.",
            },
          ]}
        />

        <FakeAlertCard
          title="School Support Email Requests Password and MFA Code"
          severity="High"
          time="10:26 AM"
          source="Fake School Email Training"
          details="A fictional email uses the display name School Support, but the sender address uses an unrelated domain and asks the student to reply with a password and MFA code."
          recommendation="Do not reply or share credentials. Open the official school portal, contact technology staff through the school directory, and report the email."
        />

        <FakeLogPanel
          title="Fake Email Analysis Log"
          logs={[
            "10:14:06 EMAIL display_name='School Support' sender_domain='unrelated-example.test'",
            "10:15:31 SUBJECT urgency='account_closes_today'",
            "10:17:04 REQUEST password='true' mfa_code='true'",
            "10:19:22 LINK destination_match='false' action='not_opened'",
            "10:23:18 VERIFICATION channel='official_school_directory' result='message_not_confirmed'",
            "10:26:02 REPORT method='school_phishing_report' status='submitted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Clues Make This Email Suspicious?"
          evidence={[
            "The display name says School Technology Office.",
            "The full sender address uses an unrelated domain.",
            "The email threatens account closure in ten minutes.",
            "The message asks for a password and MFA code.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The sender mismatch, urgency, and credential request strongly suggest phishing; verify through official school channels.",
            "The display name proves the message is legitimate.",
            "The student should reply quickly before the deadline.",
            "The student should forward the password to a friend.",
          ]}
          bestAnswer={0}
          explanation="A familiar display name can be copied. The unrelated domain, urgency, and request for sensitive login evidence are major warning signs."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Email Judgment"
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
          title="Classify Fictional Emails Without Interacting"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Email Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Email Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives an urgent account warning, an
                unexpected schedule attachment, a prize email, a fake support
                request, and one verified portal notification.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Check the display name, full address, and domain.</li>
                <li>Identify urgency, fear, rewards, secrecy, or authority pressure.</li>
                <li>Identify the requested action and sensitive information involved.</li>
                <li>Review link and attachment clues without opening them.</li>
                <li>Classify each message as normal, suspicious, or report-first.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Teacher Email Contains an Unexpected Attachment"
          scenario="A fictional email uses a teacher’s name and includes a file called UpdatedExamSchedule.zip. The message came from an unfamiliar address, and the student was not expecting the file."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not open the file. Contact the teacher through the official school portal or known school email address.",
              outcome:
                "Best defensive choice. The sender and context do not match expectations, so separate verification is required.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the file because the teacher’s name appears in the display name.",
              outcome:
                "Risky. Display names can be copied.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the attachment to classmates for testing.",
              outcome:
                "Unsafe. Suspicious attachments should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Account Warning Uses a Login Button"
          scenario="A fictional email says the student’s account will be deleted today and provides a button labeled Verify Now."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the button. Open the official account service directly and review alerts there.",
              outcome:
                "Best defensive choice. The urgent claim should be checked through the official service.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Click immediately because the deadline is today.",
              outcome:
                "Risky. Urgency is designed to reduce careful verification.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reply with the password instead of clicking.",
              outcome:
                "Unsafe. Passwords should never be sent by email.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Phishing Email Warning-Sign Checklist"
          items={[
            "I check the full sender address and domain, not only the display name.",
            "I identify the action the email wants me to take.",
            "I notice urgency, fear, rewards, authority, secrecy, and unusual requests.",
            "I do not click links, open attachments, reply, call numbers, or share information before verification.",
            "I open official services directly instead of using suspicious email links.",
            "I report suspicious emails through the approved school, family, or organization process.",
          ]}
        />

        <MiniQuiz
          title="B9.2 Mini Quiz: Phishing Email Warning Signs"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional phishing email analysis sheet. Include sender details, subject, request, pressure tactic, link or attachment clue, context, classification, verification channel, and recommended response."
          tips={[
            "Use fictional sender addresses, domains, links, attachments, organizations, and account details only.",
            "Do not include real suspicious URLs, files, credentials, or private information.",
            "Explain how several clues support the final classification.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A display name, logo, signature, or professional design does not prove who sent an email.",
            "The full sender address and domain are important evidence.",
            "Urgent deadlines, credential requests, suspicious links, and unexpected attachments are major warning signs.",
            "Suspicious claims should be verified through a separate official channel.",
            "Students should inspect displayed evidence without clicking, replying, downloading, opening, forwarding, uploading, or testing content.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}