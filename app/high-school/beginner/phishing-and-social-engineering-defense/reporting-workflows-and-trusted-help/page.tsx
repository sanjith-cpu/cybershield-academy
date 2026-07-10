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
  `${modulePath}/safe-link-and-attachment-judgment`;
const nextLesson =
  `${modulePath}/phishing-defense-lab`;

const vocab = [
  [
    "Incident report",
    "A clear record of what happened, what evidence was observed, what actions were taken, and who was notified.",
  ],
  [
    "Trusted contact",
    "A verified adult, teacher, guardian, supervisor, administrator, or technology professional who can help handle a security concern.",
  ],
  [
    "Escalation",
    "Moving a serious or unclear security issue to someone with the authority, tools, or responsibility to respond.",
  ],
  [
    "Evidence preservation",
    "Keeping useful safe details such as time, sender, subject, displayed domain, filename, and account alert without opening or spreading suspicious content.",
  ],
  [
    "Containment",
    "Immediate defensive action that limits possible harm, such as denying prompts, removing unknown sessions, or stopping device use.",
  ],
  [
    "Recovery action",
    "A trusted step used after containment, such as replacing credentials, reviewing MFA, restoring settings, or using an approved backup.",
  ],
];

const reportingStages = [
  {
    title: "Stop interaction",
    example:
      "Do not click, reply, call, pay, approve, download, open, forward, upload, or test suspicious content.",
  },
  {
    title: "Record safe facts",
    example:
      "Note the time, sender, subject, channel, displayed domain, filename, request, and warning signs.",
  },
  {
    title: "Report to the right person",
    example:
      "Use the approved school, family, workplace, service, or technology-support reporting path.",
  },
  {
    title: "Secure and follow up",
    example:
      "Contain account or device risk, complete trusted recovery steps, and monitor for additional signs.",
  },
];

const workflowRows = [
  {
    item: "Suspicious school email",
    source: "Unknown sender requests a password and MFA code",
    review:
      "Do not reply. Report through the school phishing process and contact technology staff through the official directory.",
  },
  {
    item: "Unexpected login prompt",
    source: "MFA request appears when the student is not signing in",
    review:
      "Deny it, review official account activity, remove unknown sessions, and tell a trusted adult or support team.",
  },
  {
    item: "Possible device issue",
    source: "Files change names after a suspicious download",
    review:
      "Stop using the device and report immediately to trusted technology staff.",
  },
  {
    item: "Fake support call",
    source: "Caller requests a recovery code",
    review:
      "End the call, preserve safe details, and contact the organization through a known official number.",
  },
  {
    item: "Suspicious social request",
    source: "Copied profile asks for emergency money",
    review:
      "Do not pay. Verify the person through another known channel and report the profile if needed.",
  },
];

const mistakes = [
  "Deleting useful evidence before a trusted person can review it.",
  "Forwarding suspicious links, attachments, or messages to classmates.",
  "Including real passwords, MFA codes, recovery codes, or private information in a report.",
  "Waiting too long because the user feels embarrassed about clicking or replying.",
  "Trying to solve a serious account or device incident alone.",
  "Reporting only that something feels wrong without including safe facts such as time, sender, request, and observed changes.",
];

const quizQuestions = [
  {
    question: "What should a useful phishing report include?",
    choices: [
      "Safe facts such as time, sender, channel, request, warning signs, and actions taken.",
      "The user’s real password.",
      "A forwarded suspicious attachment.",
      "Private recovery codes.",
    ],
    answer: 0,
    explanation:
      "Useful reports include clear safe facts without exposing secrets or spreading suspicious content.",
  },
  {
    question: "Why should serious incidents be escalated?",
    choices: [
      "Trusted adults or technology staff may have the authority and tools to contain and recover safely.",
      "Students should investigate everything alone.",
      "Escalation always deletes evidence.",
      "Reporting makes MFA unnecessary.",
    ],
    answer: 0,
    explanation:
      "Serious incidents often require approved tools, account access, device support, or organizational authority.",
  },
  {
    question: "What is the safest response after an unexpected MFA prompt?",
    choices: [
      "Deny it, review official account activity, and report the event if needed.",
      "Approve it to stop the notification.",
      "Share the code with a friend.",
      "Disable all alerts.",
    ],
    answer: 0,
    explanation:
      "Unexpected MFA prompts may signal attempted access and should be denied and reviewed.",
  },
  {
    question: "Why should suspicious files not be forwarded with a report?",
    choices: [
      "Forwarding may spread the risk to other people.",
      "Files can never be described.",
      "Reports should contain no details.",
      "Only teachers can receive email.",
    ],
    answer: 0,
    explanation:
      "Reports should describe the file safely rather than spreading the suspicious attachment.",
  },
  {
    question: "What should happen if a student clicked a suspicious link?",
    choices: [
      "Report honestly, stop further interaction, and follow trusted account or device recovery steps.",
      "Hide the event and hope nothing happens.",
      "Keep clicking to investigate.",
      "Share the password in the report.",
    ],
    answer: 0,
    explanation:
      "Fast, honest reporting helps trusted responders contain possible harm before it grows.",
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
          Previous: B9.5 Safe Link and Attachment Judgment
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
          Next: B9.7 Phishing Defense Lab
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

function ReportingFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Reporting and Trusted-Help Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong reporting stops interaction, preserves safe facts, reaches the
        correct trusted person, and supports containment and recovery.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {reportingStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> reporting quickly and
        honestly is safer than hiding a mistake or continuing to investigate.
      </div>
    </section>
  );
}

function FakeWorkflowPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Reporting Workflow Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel connects common phishing evidence with the
            correct reporting, escalation, containment, and recovery route.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {workflowRows.map((row) => (
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

function ReportingBoard() {
  const areas = [
    {
      name: "Safe evidence",
      saferQuestion:
        "What can be recorded without exposing secrets or interacting with suspicious content?",
      saferChoice:
        "Record time, sender, channel, subject, displayed domain, filename, request, and observed behavior.",
    },
    {
      name: "Correct contact",
      saferQuestion:
        "Who has the authority or responsibility to help with this account, device, school, family, or service?",
      saferChoice:
        "Use the official reporting path, trusted adult, administrator, or technology team.",
    },
    {
      name: "Immediate containment",
      saferQuestion:
        "Is there current unauthorized access, repeated MFA activity, suspicious file behavior, or an exposed credential?",
      saferChoice:
        "Deny prompts, remove unknown sessions, stop risky interaction, and secure the affected account or device.",
    },
    {
      name: "Follow-up recovery",
      saferQuestion:
        "What approved steps are needed after the immediate risk is contained?",
      saferChoice:
        "Replace credentials, review MFA and recovery, update systems, monitor activity, and use trusted backups if needed.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Reporting and Escalation Board
      </h2>
      <p className="mt-3 text-slate-300">
        A strong report helps the right person understand the event and choose
        the next defensive action quickly.
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

export default function ReportingWorkflowsTrustedHelpPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.6 Reporting Workflows and Trusted Help
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to stop interaction, preserve safe evidence, write a clear
            report, choose the right trusted contact, and support containment
            and recovery after a phishing event.
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
          lessonTitle="Reporting Workflows and Trusted Help"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fast, honest reporting can reduce harm.",
            "I will preserve safe facts without sharing credentials, codes, private information, or suspicious files.",
            "I am ready to choose trusted adults, teachers, administrators, and technology staff for serious incidents.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Strong Report Helps Defenders Act Faster"
        >
          <p className="leading-8">
            Technology staff cannot respond effectively to “something looked
            weird” alone. A clear report explains what happened, when it
            happened, what the sender requested, which warning signs appeared,
            what the user did, and whether any account or device changes followed.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> all reports,
            accounts, devices, messages, files, senders, and support contacts in
            this lesson are fictional.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Preserve safe evidence without interacting with or spreading suspicious content.",
            "Write a clear report that includes timeline, sender, request, warning signs, actions, and impact.",
            "Choose the correct trusted contact and support containment and recovery.",
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
          title="Silence and Delay Can Increase the Impact"
        >
          <p className="leading-8">
            People sometimes hide a click, reply, payment, or login because they
            feel embarrassed. Fast reporting gives trusted responders a better
            chance to protect accounts, devices, files, money, privacy, and other
            users.
          </p>
        </SectionCard>

        <ReportingFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Report Facts, Not Secrets"
        >
          <p className="leading-8">
            A useful report describes the event clearly without including
            passwords, MFA codes, recovery codes, private data, or dangerous
            content. The goal is to give trusted responders enough information to
            act safely.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Reporting and Trusted Response
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

        <ReportingBoard />
        <FakeWorkflowPanel />

        <FakeDashboardCard
          title="Fake Phishing Reporting Dashboard"
          subtitle="Training dashboard using fictional reports, escalation paths, containment actions, and recovery results."
          metrics={[
            {
              label: "Reports reviewed",
              value: "18",
              note: "Fictional email, text, phone, social, account, and device incidents.",
            },
            {
              label: "Reports with clear timelines",
              value: "14",
              note: "Included time, channel, sender, request, action, and observed impact.",
            },
            {
              label: "Escalated correctly",
              value: "12",
              note: "Reached trusted adults, official support, or technology staff.",
            },
          ]}
        />

        <FakeAlertCard
          title="Suspicious Link Click Followed by Unknown Login"
          severity="High"
          time="2:23 PM"
          source="Fake School Incident Training"
          details="A fictional student clicked an email link, entered a password, then received an unexpected MFA prompt and saw an unknown browser session."
          recommendation="Deny prompts, remove the unknown session, replace the exposed credential, review MFA and recovery, and report the event to school technology staff immediately."
        />

        <FakeLogPanel
          title="Fake Reporting Workflow Log"
          logs={[
            "14:08:17 MESSAGE channel='email' sender='unknown_address' request='account_login'",
            "14:10:41 INTERACTION link_opened='true' password_entered='true'",
            "14:12:09 MFA_PROMPT expected='false' action='denied'",
            "14:14:33 SESSION browser='unknown' status='removed'",
            "14:18:26 REPORT recipient='school_technology_staff' safe_facts='included'",
            "14:23:02 RECOVERY credential_replaced='true' mfa_reviewed='true' monitoring='enabled'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Should This Report Include?"
          evidence={[
            "A fictional student clicked a suspicious link at 2:10 PM.",
            "The student entered a password but denied the MFA prompt.",
            "An unknown browser session appeared and was removed.",
            "The student has not shared any password or code with technology staff.",
          ]}
          question="Which report is most useful and safe?"
          options={[
            "Include the time, sender, suspicious request, actions taken, unknown session, and recovery steps—but not the password or MFA code.",
            "Include the real password so staff can test it.",
            "Forward the suspicious attachment to every teacher.",
            "Delete all evidence and report only that the account felt strange.",
          ]}
          bestAnswer={0}
          explanation="The best report contains clear safe facts, impact, and actions while protecting credentials and avoiding the spread of suspicious content."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Reporting and Recovery"
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
          title="Build a Fictional Phishing Incident Report"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident File
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Account Report
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives a fake support email, clicks a
                login link, enters a password, denies an MFA prompt, and notices
                an unknown session.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Report Sections
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Incident date, time, and communication channel.</li>
                <li>Claimed sender and requested action.</li>
                <li>Warning signs and safe evidence.</li>
                <li>Actions already taken by the student.</li>
                <li>Trusted contact, containment, recovery, and monitoring steps.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Student Clicked a Suspicious Login Link"
          scenario="A fictional student clicked a link, entered a password, and then realized the page was not the official school portal."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop interacting, report immediately, replace the exposed credential through the official service, review MFA and sessions, and monitor the account.",
              outcome:
                "Best defensive choice. Fast reporting and recovery reduce the chance of continued unauthorized access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Hide the event because the student feels embarrassed.",
              outcome:
                "Risky. Delay may allow the incident to grow.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Return to the suspicious page and enter more information.",
              outcome:
                "Unsafe. Continued interaction increases exposure.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Files Change After an Unexpected Download"
          scenario="A fictional student opens an unverified attachment, and several files soon change names and cannot be opened."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop using the device, preserve safe details, and contact trusted technology staff immediately.",
              outcome:
                "Best defensive choice. Serious device behavior requires escalation and approved containment.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open more files to investigate.",
              outcome:
                "Risky. Continued interaction may make the incident harder to manage.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Download a random repair tool before reporting.",
              outcome:
                "Unsafe. Unverified repair tools may add more risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Reporting Workflows and Trusted Help Checklist"
          items={[
            "I stop interaction before preserving safe facts.",
            "I record time, sender, channel, request, warning signs, actions, and observed impact.",
            "I do not include passwords, MFA codes, recovery codes, private information, or suspicious files in reports.",
            "I use approved reporting paths and trusted official contacts.",
            "I escalate serious account, device, payment, or privacy incidents quickly.",
            "I support containment, recovery, and follow-up monitoring after reporting.",
          ]}
        />

        <MiniQuiz
          title="B9.6 Mini Quiz: Reporting Workflows and Trusted Help"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional phishing incident report. Include the timeline, channel, sender, requested action, warning signs, safe evidence, actions taken, trusted contact, containment, recovery, and follow-up."
          tips={[
            "Use fictional accounts, messages, senders, devices, links, files, and organizations only.",
            "Do not include real passwords, codes, private information, or suspicious attachments.",
            "Write the report so a trusted responder can understand the event quickly.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fast, honest reporting can reduce the impact of phishing and account incidents.",
            "Useful reports include clear safe facts without exposing secrets.",
            "Suspicious links and attachments should be described, not forwarded or tested.",
            "Serious or unclear incidents should be escalated to trusted adults or technology staff.",
            "Containment and recovery may include denying prompts, removing sessions, replacing credentials, reviewing MFA and recovery, and monitoring activity.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}