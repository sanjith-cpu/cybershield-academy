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
  `${modulePath}/reporting-workflows-and-trusted-help`;
const nextLesson = `${modulePath}/module-test`;

const vocab = [
  [
    "Evidence cluster",
    "Several related warning signs that become more meaningful when reviewed together.",
  ],
  [
    "Threat classification",
    "The process of deciding whether evidence suggests phishing, impersonation, credential theft, unsafe content, or normal activity.",
  ],
  [
    "Priority",
    "The order in which defensive actions should be completed based on urgency and possible impact.",
  ],
  [
    "Containment",
    "Immediate action that limits possible harm, such as denying prompts, removing unknown sessions, or stopping device use.",
  ],
  [
    "Escalation",
    "Reporting a serious or unclear event to a trusted adult, teacher, administrator, or technology team.",
  ],
  [
    "Recovery",
    "Restoring trusted access, settings, devices, or data after the immediate risk is contained.",
  ],
];

const responseStages = [
  {
    title: "Detect",
    example:
      "Notice suspicious sender, pressure, request, link, attachment, account, or device evidence.",
  },
  {
    title: "Classify",
    example:
      "Decide whether the evidence suggests phishing, impersonation, unsafe content, credential exposure, or account takeover.",
  },
  {
    title: "Prioritize",
    example:
      "Address active unauthorized access, serious device behavior, and exposed credentials before lower-risk cleanup.",
  },
  {
    title: "Respond",
    example:
      "Stop interaction, verify officially, report clearly, and complete trusted containment and recovery.",
  },
];

const incidentRows = [
  {
    item: "Urgent teacher email",
    source: "Unknown sender includes a link and attachment",
    review:
      "Phishing warning. Do not click or open; verify with the teacher through the official school channel.",
  },
  {
    item: "Unexpected MFA prompt",
    source: "Student is not signing in",
    review:
      "Possible credential or account risk. Deny the prompt and review official account activity.",
  },
  {
    item: "Unknown browser session",
    source: "New device appears in account settings",
    review:
      "Possible account takeover. Remove the session, replace credentials, and review MFA and recovery.",
  },
  {
    item: "Fake support call",
    source: "Caller asks for a recovery code",
    review:
      "Impersonation warning. End the call and contact support through a known official number.",
  },
  {
    item: "Protected backup",
    source: "Approved backup from the previous day is available",
    review:
      "Recovery resource. Use only through trusted technology staff after containment.",
  },
];

const mistakes = [
  "Treating each warning sign as unrelated when several clues point to one incident.",
  "Approving an unexpected MFA prompt to stop repeated notifications.",
  "Opening a suspicious link or attachment to investigate it.",
  "Using the suspicious sender’s contact information to verify the request.",
  "Trying to recover files before containing active account or device risk.",
  "Hiding a mistake instead of reporting quickly and honestly.",
];

const quizQuestions = [
  {
    question:
      "What should happen first when a suspicious link, unexpected MFA prompt, and unknown session appear together?",
    choices: [
      "Deny the prompt, stop interaction, remove unknown access through the official service, and report the event.",
      "Open the link again to investigate.",
      "Approve the prompt so the notifications stop.",
      "Ignore the session because the account still works.",
    ],
    answer: 0,
    explanation:
      "Current account risk should be contained immediately through official account tools and trusted reporting.",
  },
  {
    question:
      "Which clue is evidence of possible impersonation?",
    choices: [
      "A caller claims to be support and requests a recovery code.",
      "An official portal displays a normal assignment.",
      "A student updates a profile picture.",
      "A device completes a verified update.",
    ],
    answer: 0,
    explanation:
      "Support requests for recovery secrets are major impersonation and account-access warning signs.",
  },
  {
    question:
      "What is the safest response to an unexpected attachment from a familiar display name?",
    choices: [
      "Do not open it; verify the sender through a separate trusted channel.",
      "Open it because the display name is familiar.",
      "Forward it to classmates.",
      "Upload it to another site for testing.",
    ],
    answer: 0,
    explanation:
      "Display names can be copied, so unexpected files should be verified independently.",
  },
  {
    question:
      "Why should recovery happen after containment?",
    choices: [
      "Recovery is safer after active unauthorized access or suspicious activity has been limited.",
      "Containment is never necessary.",
      "Backups automatically remove attackers.",
      "Reporting should wait until every file is restored.",
    ],
    answer: 0,
    explanation:
      "Restoring access or data before containing the active risk may allow the problem to continue.",
  },
  {
    question:
      "What makes a strong phishing incident report?",
    choices: [
      "A clear timeline, safe evidence, actions taken, trusted contacts, and recovery steps.",
      "The user’s real password and MFA codes.",
      "A forwarded suspicious attachment.",
      "Only the statement that something felt strange.",
    ],
    answer: 0,
    explanation:
      "A strong report gives trusted responders useful facts without exposing secrets or spreading suspicious content.",
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
        Module Test
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B9</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B9.6 Reporting Workflows and Trusted Help
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
          Open B9 Module Test
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

function ResponseFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Phishing Defense Lab Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong defenders connect the evidence, classify the threat, prioritize
        the active risk, and respond through trusted official processes.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {responseStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> active unauthorized
        access, exposed credentials, and serious device behavior usually require
        faster action than routine cleanup.
      </div>
    </section>
  );
}

function FakeIncidentPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Multi-Stage Phishing Incident Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel combines email, link, attachment, MFA, session,
            support, and recovery evidence into one defender review.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {incidentRows.map((row) => (
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

function PriorityBoard() {
  const priorities = [
    {
      name: "Message and sender evidence",
      saferQuestion:
        "Does the sender, request, urgency, domain, link, attachment, or context suggest phishing?",
      saferChoice:
        "Stop interaction and verify through a separate official channel.",
    },
    {
      name: "Account evidence",
      saferQuestion:
        "Are there unexpected MFA prompts, unknown sessions, recovery changes, or sent messages?",
      saferChoice:
        "Deny prompts, remove unknown access, replace exposed credentials, and review MFA and recovery.",
    },
    {
      name: "Device and file evidence",
      saferQuestion:
        "Did a suspicious download lead to file changes, unusual warnings, crashes, or other abnormal behavior?",
      saferChoice:
        "Stop using the device and involve trusted technology staff.",
    },
    {
      name: "Reporting and recovery",
      saferQuestion:
        "What safe facts, trusted contacts, and approved recovery resources are available?",
      saferChoice:
        "Report clearly, preserve safe evidence, and recover only after containment.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Phishing Response Priority Board
      </h2>
      <p className="mt-3 text-slate-300">
        The response should follow the evidence and address the most urgent
        active risk first.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {priorities.map((priority) => (
          <div
            key={priority.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{priority.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{priority.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{priority.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PhishingDefenseLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.7 Phishing Defense Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply manipulation, email, smishing, vishing, social media,
            impersonation, link, attachment, reporting, containment, and
            recovery skills to one fictional multi-stage incident.
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
          lessonTitle="Phishing Defense Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can identify manipulation, sender, link, attachment, account, and support warning signs.",
            "I will use fictional messages, accounts, links, files, calls, codes, and devices only.",
            "I am ready to prioritize containment, reporting, recovery, and trusted escalation.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Phishing Message Can Create Several Connected Problems"
        >
          <p className="leading-8">
            A single message may begin with urgency, lead to a fake login page,
            expose a password, trigger MFA prompts, create an unknown session,
            and later produce a fake support call. Defenders must connect the
            full chain of evidence.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> this lab uses
            fake evidence only. Never open suspicious content, share real
            credentials or codes, contact suspicious senders, or test files.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Classify fictional phishing, impersonation, credential, account, link, attachment, and support evidence.",
            "Prioritize immediate containment and safe official verification.",
            "Write a clear defender recommendation with reporting, escalation, recovery, and follow-up.",
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
          title="Response Order Can Reduce the Impact"
        >
          <p className="leading-8">
            The best response is not simply “delete the message.” If credentials
            were entered, an MFA prompt appeared, a session became active, or a
            device changed behavior, the incident requires account or device
            containment, reporting, and recovery.
          </p>
        </SectionCard>

        <ResponseFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Evidence Clusters Matter More Than One Clue"
        >
          <p className="leading-8">
            One unusual detail may require verification. Several related details
            can reveal a larger phishing incident. Defenders connect the
            timeline, classify each clue, and choose the safest priority order.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Multi-Stage Phishing Defense
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

        <PriorityBoard />
        <FakeIncidentPanel />

        <FakeDashboardCard
          title="Fake Phishing Defense Dashboard"
          subtitle="Training dashboard combining fictional message, link, attachment, MFA, session, support, and recovery evidence."
          metrics={[
            {
              label: "Evidence items",
              value: "14",
              note: "Sender, urgency, link, attachment, MFA, session, call, and backup evidence.",
            },
            {
              label: "Immediate actions",
              value: "5",
              note: "Stop interaction, deny prompts, remove access, secure credentials, and report.",
            },
            {
              label: "Recovery actions",
              value: "6",
              note: "Review MFA, recovery, sessions, devices, backups, and monitoring.",
            },
          ]}
        />

        <FakeAlertCard
          title="Phishing Link Followed by MFA Prompt and Fake Support Call"
          severity="High"
          time="1:44 PM"
          source="Fake School Security Training"
          details="A fictional student clicks an urgent teacher-style email link, enters a password, receives an unexpected MFA prompt, sees an unknown browser session, and then gets a call requesting a recovery code."
          recommendation="Deny the prompt, remove unknown access through the official service, replace the exposed credential, end the call, report immediately, and complete trusted recovery."
        />

        <FakeLogPanel
          title="Fake Multi-Stage Phishing Incident Log"
          logs={[
            "13:12:07 EMAIL display_name='Teacher' sender_domain='unrelated-example.test'",
            "13:15:22 LINK action='opened' official_domain_match='false'",
            "13:17:49 CREDENTIAL_EVENT password_entered='true' mfa_code_shared='false'",
            "13:20:14 MFA_PROMPT expected='false' action='denied'",
            "13:22:51 SESSION browser='unknown' status='active'",
            "13:27:33 CALL claimed_identity='Account Support' recovery_code_requested='true'",
            "13:31:48 CONTAINMENT unknown_session='removed' credential='replaced'",
            "13:44:02 REPORT recipient='school_technology_staff' status='submitted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Response Uses the Best Priority Order?"
          evidence={[
            "A fictional student entered a password on a suspicious page.",
            "An unexpected MFA prompt appeared and was denied.",
            "An unknown browser session is still active.",
            "A fake support caller requests a recovery code.",
          ]}
          question="What should the student do next?"
          options={[
            "End the call, remove unknown access through the official service, replace the exposed credential, review MFA and recovery, and report immediately.",
            "Share the recovery code so support can remove the attacker.",
            "Ignore the session because the MFA prompt was denied.",
            "Return to the suspicious page and enter more information.",
          ]}
          bestAnswer={0}
          explanation="The active session and exposed password require immediate account containment. The caller is unverified and should not receive any recovery secret."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Multi-Stage Phishing Response"
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
          title="Complete a Fictional Phishing Incident Investigation"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident File
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Phishing Chain
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives an urgent teacher-style email,
                clicks a look-alike login link, enters a password, denies an MFA
                prompt, sees an unknown session, and receives a fake support call.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Response Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the manipulation and phishing warning signs.</li>
                <li>Classify the credential and account evidence.</li>
                <li>Deny prompts and remove unknown sessions.</li>
                <li>Replace exposed credentials and review MFA and recovery.</li>
                <li>End fake support contact and report to trusted technology staff.</li>
                <li>Document the timeline, actions, impact, and follow-up.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Fake Teacher Email Leads to an Unknown Session"
          scenario="A fictional student clicks an urgent teacher-style email link, enters a password, denies an unexpected MFA prompt, and then sees an unfamiliar browser session."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove the session through the official service, replace the exposed credential, review MFA and recovery, and report the event.",
              outcome:
                "Best defensive choice. It contains current access and restores trusted account control.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the session because the MFA prompt was denied.",
              outcome:
                "Risky. The session may still represent current unauthorized access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Approve the next MFA prompt to see what happens.",
              outcome:
                "Unsafe. Unexpected prompts should be denied.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Fake Support Caller Requests a Recovery Code"
          scenario="After the phishing event, a fictional caller claims to be account support and asks for a recovery code to secure the student’s account."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not share the code. End the call and contact support through the official school portal or directory.",
              outcome:
                "Best defensive choice. Recovery codes can restore account access and must remain private.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Share the code because the account was already targeted.",
              outcome:
                "Risky. The caller may be continuing the same incident.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Post the code in a group chat for advice.",
              outcome:
                "Unsafe. Recovery secrets should never be shared.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Phishing Defense Lab Checklist"
          items={[
            "I connect message, link, attachment, account, support, and device evidence.",
            "I identify manipulation tactics and the requested unsafe action.",
            "I prioritize active unauthorized access and exposed credentials.",
            "I do not click, open, reply, call, pay, approve, download, share, forward, upload, or test suspicious content.",
            "I verify through separate official channels and report clearly.",
            "I complete containment, recovery, and follow-up through trusted processes.",
          ]}
        />

        <MiniQuiz
          title="B9.7 Mini Quiz: Phishing Defense Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional phishing incident report. Include the timeline, manipulation tactics, sender evidence, link or attachment clues, account evidence, support impersonation, containment, trusted reporting, recovery, and final recommendations."
          tips={[
            "Use fictional accounts, messages, links, files, calls, codes, devices, and organizations only.",
            "Do not include real credentials, recovery secrets, suspicious URLs, files, or private information.",
            "Explain why the response order matters.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Phishing incidents may combine manipulation, fake identities, unsafe links, credential exposure, MFA prompts, unknown sessions, and fake support.",
            "Evidence clusters reveal more than one clue alone.",
            "Active account access and exposed credentials require immediate containment.",
            "Verification must happen through separate official channels.",
            "Strong response includes clear reporting, trusted escalation, recovery, and follow-up monitoring.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}