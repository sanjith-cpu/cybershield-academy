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
  "/high-school/beginner/passwords-authentication-and-account-security/module-test";
const nextLesson = `${modulePath}/malware-and-ransomware-concepts`;

const vocab = [
  [
    "Cyber threat",
    "A person, event, condition, or action that could harm systems, accounts, data, privacy, or digital services.",
  ],
  [
    "Vulnerability",
    "A weakness that could make harm more likely, such as outdated software, weak settings, or reused credentials.",
  ],
  [
    "Risk",
    "The combination of how likely a harmful event may be and how serious its impact could become.",
  ],
  [
    "Security incident",
    "An event that affects or may affect the confidentiality, integrity, or availability of systems, accounts, or data.",
  ],
  [
    "Warning sign",
    "A clue that deserves review, such as an unexpected alert, unfamiliar device, suspicious message, or unusual file behavior.",
  ],
  [
    "Defensive response",
    "A safe action that reduces risk, protects people and systems, and involves trusted help when needed.",
  ],
];

const threatReviewStages = [
  {
    title: "Notice the event",
    example:
      "A user sees an unusual message, file, account alert, device warning, or system behavior.",
  },
  {
    title: "Review the evidence",
    example:
      "The user checks the sender, timing, device, account activity, file source, and official service information.",
  },
  {
    title: "Estimate the risk",
    example:
      "The user considers what could be affected and whether current access, data, privacy, or availability may be at risk.",
  },
  {
    title: "Choose a safe response",
    example:
      "The user avoids risky interaction, protects access, reports the event, and asks trusted support for help.",
  },
];

const threatReviewRows = [
  {
    item: "Unexpected attachment",
    source: "Message claims to contain an urgent school schedule",
    review:
      "Possible threat warning sign. Do not open it; verify through the official school channel.",
  },
  {
    item: "Outdated device",
    source: "Important security updates have not been installed",
    review:
      "Vulnerability. Install approved updates through official settings.",
  },
  {
    item: "Unknown login",
    source: "New browser appears in account activity",
    review:
      "Possible account incident. Review sessions, secure credentials, and involve trusted help if needed.",
  },
  {
    item: "Official update notice",
    source: "Update appears inside the device’s trusted settings",
    review:
      "Normal defensive activity when verified through the official system.",
  },
  {
    item: "File changes",
    source: "Several school files suddenly cannot be opened",
    review:
      "Serious warning sign. Stop interacting, preserve the device state, and report to trusted technology staff.",
  },
];

const mistakes = [
  "Treating every unusual event as harmless without checking the evidence.",
  "Treating every warning sign as proof of an attack before verification.",
  "Opening suspicious files or links to investigate them personally.",
  "Ignoring outdated software, weak account settings, or unsafe device practices.",
  "Deleting useful alerts before recording safe details for a trusted report.",
  "Trying to solve a serious school, family, or device security problem alone.",
];

const quizQuestions = [
  {
    question: "What is a cyber threat?",
    choices: [
      "A person, event, condition, or action that could cause digital harm.",
      "Any computer with a dark background.",
      "A guarantee that an incident has already occurred.",
      "A normal software feature that never creates risk.",
    ],
    answer: 0,
    explanation:
      "A threat is something that could cause harm to systems, accounts, data, privacy, or services.",
  },
  {
    question: "What is a vulnerability?",
    choices: [
      "A weakness that could make harmful activity more likely or more damaging.",
      "A completed incident report.",
      "A trusted backup.",
      "A verified software update.",
    ],
    answer: 0,
    explanation:
      "Vulnerabilities are weaknesses such as outdated software, unsafe settings, or reused credentials.",
  },
  {
    question: "Which example is a warning sign rather than automatic proof of an attack?",
    choices: [
      "An unfamiliar login alert that needs review.",
      "A confirmed unauthorized password change.",
      "A verified account takeover.",
      "A technology team’s completed incident report.",
    ],
    answer: 0,
    explanation:
      "An unfamiliar login alert is evidence that needs investigation, but the alert alone does not prove exactly what happened.",
  },
  {
    question: "What is the safest response to an unexpected attachment?",
    choices: [
      "Do not open it; verify the message through an official trusted channel.",
      "Open it quickly before it expires.",
      "Forward it to classmates for testing.",
      "Upload it to another device.",
    ],
    answer: 0,
    explanation:
      "Suspicious attachments should not be opened or tested. Verification should happen through a trusted official source.",
  },
  {
    question: "When should trusted adults or technology staff be involved?",
    choices: [
      "When a threat may affect school systems, important accounts, devices, data, or recovery steps.",
      "Only after all evidence has been deleted.",
      "Never, because students should investigate alone.",
      "Only when a device battery is low.",
    ],
    answer: 0,
    explanation:
      "Trusted support should be involved when the issue is serious, unclear, or connected to important systems, accounts, or data.",
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
          Previous: B7 Module Test
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
          Next: B8.2 Malware and Ransomware Concepts
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

function ThreatReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Threat Recognition Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Defenders do not react to one clue alone. They notice an event, review
        evidence, estimate risk, and choose a safe response.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {threatReviewStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> a warning sign deserves
        careful review, but students should never open, run, test, or investigate
        suspicious content themselves.
      </div>
    </section>
  );
}

function FakeThreatPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Threat Classification Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel helps students separate threats,
            vulnerabilities, incidents, and normal defensive activity.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {threatReviewRows.map((row) => (
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

function ThreatCategoryBoard() {
  const categories = [
    {
      name: "Account threats",
      saferQuestion:
        "Is there an unknown login, unexpected MFA prompt, password change, or recovery change?",
      saferChoice:
        "Review the official account, deny unexpected prompts, remove unknown sessions, and secure credentials.",
    },
    {
      name: "Message threats",
      saferQuestion:
        "Does the message use urgency, impersonation, suspicious links, or unexpected attachments?",
      saferChoice:
        "Do not interact. Verify through a separate official channel and report the message.",
    },
    {
      name: "Device threats",
      saferQuestion:
        "Is the device behaving unusually, showing repeated warnings, or changing files unexpectedly?",
      saferChoice:
        "Stop risky activity, disconnect only if instructed, and contact trusted technology staff.",
    },
    {
      name: "Data threats",
      saferQuestion:
        "Could files, privacy, availability, or backups be affected?",
      saferChoice:
        "Protect access, preserve safe evidence, avoid changing affected files, and use trusted recovery support.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Common Threat Category Board
      </h2>
      <p className="mt-3 text-slate-300">
        Threat categories help defenders organize evidence and choose the right
        safe response without interacting with suspicious content.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{category.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{category.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{category.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WhatCyberThreatsArePage() {
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
              Lesson 1 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8.1 What Cyber Threats Are
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how cyber threats differ from vulnerabilities, warning signs,
            risks, and incidents—and how defenders classify events before
            choosing a safe response.
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
          lessonTitle="What Cyber Threats Are"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a threat, vulnerability, warning sign, and incident are different concepts.",
            "I will use fictional alerts, messages, files, devices, and accounts only.",
            "I am ready to classify evidence without opening, running, or testing suspicious content.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Defenders Classify Before They React"
        >
          <p className="leading-8">
            A suspicious event can be confusing. It may be a harmless mistake,
            a vulnerability, a warning sign, or a confirmed security incident.
            Defenders compare evidence before deciding what the event means and
            what action is safest.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never open,
            execute, test, forward, or investigate suspicious files, links, or
            software. Use fake examples and trusted support only.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain the difference between threats, vulnerabilities, risks, warning signs, and incidents.",
            "Classify fictional account, message, file, device, and update events.",
            "Choose safe defensive actions without interacting with suspicious content.",
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
          title="Good Classification Improves Defensive Decisions"
        >
          <p className="leading-8">
            If every alert is ignored, real problems may grow. If every unusual
            event is treated as a confirmed attack, users may panic or take the
            wrong action. Threat recognition helps people pause, gather safe
            evidence, estimate risk, and involve the correct trusted support.
          </p>
        </SectionCard>

        <ThreatReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Threats, Vulnerabilities, Risks, and Incidents Connect"
        >
          <p className="leading-8">
            A threat is something that could cause harm. A vulnerability is a
            weakness that could be used or affected. Risk describes likelihood
            and impact. A security incident is an event that affects or may
            affect systems, accounts, data, privacy, or availability.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Threat Recognition
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

        <ThreatCategoryBoard />
        <FakeThreatPanel />

        <FakeDashboardCard
          title="Fake Threat Recognition Dashboard"
          subtitle="Training dashboard using fictional account, message, device, and file events."
          metrics={[
            {
              label: "Events reviewed",
              value: "16",
              note: "Fictional warning signs from accounts, messages, files, and devices.",
            },
            {
              label: "Vulnerabilities",
              value: "5",
              note: "Outdated software, weak settings, and reused credentials.",
            },
            {
              label: "Incidents escalated",
              value: "3",
              note: "Unknown account access, file availability problems, and unauthorized changes.",
            },
          ]}
        />

        <FakeAlertCard
          title="Several Files Suddenly Cannot Be Opened"
          severity="High"
          time="1:24 PM"
          source="Fake School Device Training"
          details="A fictional student reports that several class files changed unexpectedly and now display errors."
          recommendation="Stop interacting with the files, do not download repair tools, and report the device to a teacher or school technology staff member immediately."
        />

        <FakeLogPanel
          title="Fake Threat Classification Log"
          logs={[
            "13:11:04 EVENT type='unexpected_attachment' classification='warning_sign'",
            "13:13:18 EVENT type='outdated_software' classification='vulnerability'",
            "13:15:42 EVENT type='unknown_login' classification='possible_incident'",
            "13:18:09 EVENT type='official_update' classification='normal_defensive_activity'",
            "13:21:37 EVENT type='unavailable_files' classification='high_priority_warning'",
            "13:24:06 SAFE_ACTION recommendation='stop interaction and escalate to trusted technology staff'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This a Threat, Vulnerability, or Incident?"
          evidence={[
            "A fictional school laptop has missed several approved security updates.",
            "No unusual account activity or file changes are currently visible.",
            "The official device settings show the updates are available.",
            "The student has permission to install school-approved updates.",
          ]}
          question="What is the safest classification and response?"
          options={[
            "This is a vulnerability; install the approved updates through official settings.",
            "This is confirmed ransomware; delete every file.",
            "This is phishing; reply to the update notice.",
            "This is harmless and should always be ignored.",
          ]}
          bestAnswer={0}
          explanation="Missing updates create a weakness, but the evidence does not show a confirmed incident. Installing approved updates is the safe response."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Threat Recognition"
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
          title="Classify Fictional Security Events"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Event Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Technology Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student sees an unexpected attachment, an official
                update notice, an unknown account login, and several files that
                suddenly cannot be opened.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Classify each event using the available evidence.</li>
                <li>Separate normal activity from warning signs.</li>
                <li>Identify vulnerabilities that need correction.</li>
                <li>Prioritize events that may involve current harm.</li>
                <li>Write one safe response without opening suspicious content.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Unexpected File Arrives"
          scenario="A fictional student receives a file from an unfamiliar sender. The message says the file contains an urgent exam schedule and must be opened immediately."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not open the file. Verify the schedule through the official school portal or a trusted teacher.",
              outcome:
                "Best defensive choice. It avoids risky interaction and checks the claim through an official source.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the file quickly because the message sounds urgent.",
              outcome:
                "Risky. Urgency and an unfamiliar sender are warning signs.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the file to classmates and ask them to test it.",
              outcome:
                "Unsafe. Suspicious content should not be spread or tested by other students.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cyber Threat Recognition Checklist"
          items={[
            "I can distinguish threats, vulnerabilities, risks, warning signs, and incidents.",
            "I can review fictional evidence without opening or testing suspicious content.",
            "I can identify account, message, device, and data threat categories.",
            "I can separate verified normal activity from events that need review.",
            "I know to pause, protect access, report safely, and involve trusted adults or technology staff.",
          ]}
        />

        <MiniQuiz
          title="B8.1 Mini Quiz: What Cyber Threats Are"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional threat classification chart. Include one threat, one vulnerability, one warning sign, one incident, one normal defensive event, and the safest response for each."
          tips={[
            "Use fictional accounts, messages, files, alerts, and devices only.",
            "Do not include real suspicious links, attachments, or harmful software details.",
            "Explain which evidence supports each classification.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cyber threats are people, events, conditions, or actions that could cause digital harm.",
            "Vulnerabilities are weaknesses that can increase the likelihood or impact of harm.",
            "Warning signs need review but do not automatically prove exactly what happened.",
            "Security incidents affect or may affect systems, accounts, data, privacy, or availability.",
            "Safe threat recognition means pausing, reviewing evidence, avoiding risky interaction, and involving trusted help.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}