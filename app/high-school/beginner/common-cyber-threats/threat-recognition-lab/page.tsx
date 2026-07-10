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
const previousLesson =
  `${modulePath}/defense-basics-updates-backups-and-caution`;
const nextLesson = `${modulePath}/module-test`;

const vocab = [
  [
    "Threat recognition",
    "The process of noticing warning signs, classifying the possible threat, and choosing a safe response.",
  ],
  [
    "Evidence",
    "Safe details used to understand an event, such as sender, time, device, file type, account activity, or alert source.",
  ],
  [
    "Containment",
    "Immediate defensive action that limits possible harm, such as stopping interaction, removing unknown sessions, or isolating a device through an approved process.",
  ],
  [
    "Escalation",
    "Reporting a security concern to a trusted adult, teacher, guardian, administrator, or technology support team.",
  ],
  [
    "Recovery",
    "Restoring safe access, trusted settings, clean systems, or protected data after a security problem.",
  ],
  [
    "Incident report",
    "A clear record of what happened, what evidence was observed, what actions were taken, and who was notified.",
  ],
];

const scenarioStages = [
  {
    title: "Identify the warning signs",
    example:
      "Review the sender, request, account activity, device behavior, file details, and security alerts.",
  },
  {
    title: "Classify the event",
    example:
      "Decide whether the evidence suggests phishing, credential risk, unsafe download, malware warning, vulnerability, or normal activity.",
  },
  {
    title: "Choose containment",
    example:
      "Stop interaction, deny prompts, remove unknown sessions, avoid files, or follow the approved device-isolation process.",
  },
  {
    title: "Recover and report",
    example:
      "Use official services, protected backups, approved updates, and trusted support to restore security.",
  },
];

const incidentRows = [
  {
    item: "Urgent message",
    source: "Unknown sender requests a password and MFA code",
    review:
      "Phishing and credential-theft warning. Do not reply; verify through the official service and report it.",
  },
  {
    item: "Unknown session",
    source: "New browser appears in account activity",
    review:
      "Possible account takeover. Remove the session, replace credentials if needed, and review MFA and recovery.",
  },
  {
    item: "Double-extension file",
    source: "Attachment is named Project.pdf.exe",
    review:
      "Unsafe attachment warning. Do not open, rename, forward, upload, or test it.",
  },
  {
    item: "Unreadable files",
    source: "Several documents suddenly changed names and cannot be opened",
    review:
      "Possible malware or ransomware warning. Stop interaction and contact trusted technology staff immediately.",
  },
  {
    item: "Official update",
    source: "Update is available inside approved device settings",
    review:
      "Normal defensive activity when verified through the official process.",
  },
];

const mistakes = [
  "Reacting to urgency before checking the evidence.",
  "Opening suspicious files or links to investigate them.",
  "Approving unexpected MFA prompts to stop repeated notifications.",
  "Using unofficial repair tools or update downloads.",
  "Ignoring unknown sessions, recovery changes, or sent messages.",
  "Trying to handle a serious school or family technology incident alone.",
];

const quizQuestions = [
  {
    question: "What should happen first during threat recognition?",
    choices: [
      "Pause and review the available evidence.",
      "Open every file involved.",
      "Share credentials with a friend.",
      "Delete all alerts immediately.",
    ],
    answer: 0,
    explanation:
      "A calm review of the available evidence helps the defender avoid unsafe or unnecessary actions.",
  },
  {
    question: "Which response best contains a possible account takeover?",
    choices: [
      "Deny unexpected prompts and remove unknown sessions through the official service.",
      "Ignore the activity because the account still opens.",
      "Share the password with a friend.",
      "Disable security alerts.",
    ],
    answer: 0,
    explanation:
      "Containment limits current access while the account owner restores trusted credentials, MFA, and recovery settings.",
  },
  {
    question: "What is the safest response to a double-extension attachment?",
    choices: [
      "Do not open, rename, forward, upload, or test it; report it.",
      "Open it because the first extension says PDF.",
      "Send it to classmates.",
      "Disable warnings and try again.",
    ],
    answer: 0,
    explanation:
      "A double extension is a strong warning sign and the file should not be interacted with.",
  },
  {
    question: "Why are protected backups part of threat defense?",
    choices: [
      "They support recovery after data loss, corruption, or disruption.",
      "They make phishing impossible.",
      "They replace the need for updates.",
      "They should always remain connected to an affected device.",
    ],
    answer: 0,
    explanation:
      "Protected backups provide a known-good copy that trusted support can use during recovery.",
  },
  {
    question: "When should a threat be escalated?",
    choices: [
      "When it may affect important accounts, school systems, devices, data, or recovery steps.",
      "Only after all evidence is deleted.",
      "Never, because students should investigate alone.",
      "Only when the device battery is low.",
    ],
    answer: 0,
    explanation:
      "Serious, unclear, or high-impact events should be handled with trusted adults or technology staff.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B8</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B8.6 Defense Basics
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
          Open B8 Module Test
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

function ScenarioFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Threat Recognition Scenario Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        In a multi-step incident, defenders classify the evidence, contain the
        most urgent risk, and then recover through trusted official processes.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {scenarioStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> prioritize current
        unauthorized access, serious device behavior, and loss of recovery
        control before lower-risk cleanup tasks.
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
            Multi-Threat Incident Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel combines message, account, file, device, and
            update evidence into one defender review.
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
      name: "Current account access",
      saferQuestion:
        "Is an unknown session active, or are unexpected MFA prompts appearing?",
      saferChoice:
        "Deny prompts, remove unknown sessions, and secure the account through the official service.",
    },
    {
      name: "Device and file behavior",
      saferQuestion:
        "Are files changing, devices crashing, or security alerts showing unusual activity?",
      saferChoice:
        "Stop interaction and involve trusted technology staff immediately.",
    },
    {
      name: "Suspicious content",
      saferQuestion:
        "Is there an unexpected link, attachment, QR code, download, or installer?",
      saferChoice:
        "Do not interact. Verify through a separate official channel and report it.",
    },
    {
      name: "Recovery readiness",
      saferQuestion:
        "Are protected backups, current recovery methods, and approved restoration steps available?",
      saferChoice:
        "Use trusted recovery tools and protected backups only after containment.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Threat Response Priority Board
      </h2>
      <p className="mt-3 text-slate-300">
        The best response order depends on which risk is currently active and
        which systems, accounts, or data could be affected.
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

export default function ThreatRecognitionLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8.7 Threat Recognition Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply threat, phishing, malware, credential, file-safety, update,
            backup, and recovery concepts to a fictional multi-step incident.
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
          lessonTitle="Threat Recognition Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish threats, vulnerabilities, warning signs, and incidents.",
            "I will use fictional accounts, files, messages, devices, alerts, and codes only.",
            "I am ready to prioritize containment, recovery, reporting, and trusted escalation.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Real Incidents Often Combine More Than One Threat"
        >
          <p className="leading-8">
            A suspicious message may lead to credential exposure. An exposed
            account may show unknown sessions. A fake update may lead to unusual
            device behavior. Defenders connect the evidence and avoid treating
            each clue as an unrelated problem.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> this lab uses
            fake events only. Do not open suspicious content, access another
            person’s account, test files, or use real credentials.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Classify fictional message, account, file, device, and update evidence.",
            "Prioritize immediate containment and safe recovery actions.",
            "Write a clear defender recommendation and identify trusted escalation steps.",
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
          title="Correct Priorities Reduce Damage"
        >
          <p className="leading-8">
            When several warning signs appear together, the response order
            matters. Current unauthorized access, serious file changes, and loss
            of recovery control usually require faster action than routine
            updates or lower-risk cleanup.
          </p>
        </SectionCard>

        <ScenarioFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Classify, Contain, Recover, and Report"
        >
          <p className="leading-8">
            Threat recognition is not just naming the threat. A complete
            defensive response connects evidence to the right containment,
            recovery, and reporting actions while avoiding unsafe investigation.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Threat Scenario Analysis
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
          title="Fake Threat Recognition Dashboard"
          subtitle="Training dashboard combining fictional message, account, file, device, and recovery evidence."
          metrics={[
            {
              label: "Evidence items",
              value: "12",
              note: "Messages, sessions, files, alerts, updates, and backup details.",
            },
            {
              label: "Urgent actions",
              value: "4",
              note: "Deny prompts, remove access, stop file interaction, and escalate.",
            },
            {
              label: "Recovery actions",
              value: "5",
              note: "Replace credentials, review MFA, update systems, verify backups, and monitor.",
            },
          ]}
        />

        <FakeAlertCard
          title="Suspicious Message Followed by Account and File Changes"
          severity="High"
          time="12:42 PM"
          source="Fake School Security Training"
          details="A fictional student clicked a message link, then received MFA prompts, saw an unknown session, and noticed several files could no longer be opened."
          recommendation="Deny prompts, remove unknown access through the official service, stop using the affected device, and contact school technology staff immediately."
        />

        <FakeLogPanel
          title="Fake Multi-Threat Event Log"
          logs={[
            "12:28:07 MESSAGE urgency='high' sender='unknown' link_opened='true'",
            "12:30:18 MFA_PROMPT user_login_started='false' action='deny'",
            "12:31:42 SESSION browser='unknown' status='active'",
            "12:34:09 FILE_EVENT documents='unreadable' count='7'",
            "12:36:55 BACKUP_STATUS protected_copy='available' last_success='1_day_ago'",
            "12:42:03 SAFE_ACTION recommendation='contain account, stop device interaction, and escalate to technology staff'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Action Should Happen First?"
          evidence={[
            "A fictional student clicked a suspicious message link.",
            "An unknown browser session is currently active.",
            "Several files suddenly cannot be opened.",
            "A protected backup from the previous day exists.",
          ]}
          question="Which response uses the safest priority order?"
          options={[
            "Deny prompts, remove unknown access, stop using the affected device, report immediately, and use the protected backup only through trusted recovery.",
            "Open more files and then decide whether to report.",
            "Ignore the unknown session because a backup exists.",
            "Download a random repair tool before contacting anyone.",
          ]}
          bestAnswer={0}
          explanation="Current account access and serious file behavior require immediate containment and escalation. Recovery should happen afterward through trusted support."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Multi-Threat Response"
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
          title="Complete a Fictional Threat Investigation"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Incident File
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                SchoolCloud Threat Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives an urgent message, opens a fake
                login page, gets repeated MFA prompts, sees an unknown session,
                notices a suspicious attachment, and finds several unreadable
                files.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Response Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Classify the message as phishing and the account activity as possible takeover.</li>
                <li>Deny MFA prompts and remove unknown sessions.</li>
                <li>Stop interacting with suspicious files and the affected device.</li>
                <li>Replace credentials and review MFA and recovery through the official service.</li>
                <li>Report to trusted school technology staff and use approved recovery tools.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Message, Prompt, and Unknown Session Appear"
          scenario="A fictional student receives an urgent account warning, clicks the link, then sees repeated MFA prompts and an unfamiliar browser session."
          choices={[
            {
              label: "Choice A",
              response:
                "Deny the prompts, open the official service directly, remove the unknown session, replace credentials, review MFA and recovery, and report the event.",
              outcome:
                "Best defensive choice. It contains account access and restores trusted control.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the prompt because the message said the account was in danger.",
              outcome:
                "Risky. The prompt may allow unauthorized access.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the password to a friend for help.",
              outcome:
                "Unsafe. Credentials should never be shared.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Files Become Unreadable After a Download"
          scenario="A fictional student installs an unknown class tool. Soon afterward, several files change names and cannot be opened."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop using the device, do not open more files or install repair tools, and contact trusted technology staff immediately.",
              outcome:
                "Best defensive choice. It limits further interaction and gives trusted staff control of containment and recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open every file to measure the damage.",
              outcome:
                "Risky. Continued interaction may make the incident harder to manage.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Download an unknown cleanup program.",
              outcome:
                "Unsafe. Unverified repair tools may create more risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Threat Recognition Lab Checklist"
          items={[
            "I can classify phishing, credential, file, malware, vulnerability, and normal update evidence.",
            "I prioritize current unauthorized access and serious device behavior.",
            "I stop risky interaction instead of investigating suspicious content.",
            "I use official account services, approved updates, and protected backups.",
            "I document safe facts without exposing passwords, codes, or private information.",
            "I involve trusted adults or technology staff when the incident is serious or unclear.",
          ]}
        />

        <MiniQuiz
          title="B8.7 Mini Quiz: Threat Recognition Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional cyber threat incident report. Include the timeline, evidence, threat classifications, containment steps, recovery actions, trusted escalation path, and final recommendations."
          tips={[
            "Use fictional accounts, messages, files, devices, alerts, and codes only.",
            "Do not include harmful code, real suspicious links, or attack instructions.",
            "Explain why the response order matters.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Real incidents may combine phishing, credential exposure, account takeover, unsafe files, and device warnings.",
            "Defenders connect evidence instead of treating every clue as unrelated.",
            "Current unauthorized access and serious file changes usually require immediate containment.",
            "Recovery should use official services, protected backups, approved updates, and trusted support.",
            "A strong incident report records evidence, actions, escalation, and recommendations without exposing sensitive information.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}