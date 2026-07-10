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
  `${modulePath}/unsafe-downloads-and-malicious-attachments`;
const nextLesson = `${modulePath}/threat-recognition-lab`;

const vocab = [
  [
    "Security update",
    "An approved software change that fixes known problems, improves protection, or reduces vulnerabilities.",
  ],
  [
    "Patch",
    "A focused update that corrects a specific software flaw or security weakness.",
  ],
  [
    "Backup",
    "A protected copy of important data that can support recovery after loss, corruption, or disruption.",
  ],
  [
    "Recovery point",
    "A known-good version of data or a system that can be used during restoration.",
  ],
  [
    "Verification",
    "Confirming a message, file, update, request, or account event through a trusted official source.",
  ],
  [
    "Defense in depth",
    "Using several security layers together so one mistake or failure is less likely to cause major harm.",
  ],
];

const defenseFlowStages = [
  {
    title: "Prevent",
    example:
      "Install approved updates, use strong account security, avoid suspicious downloads, and follow school or family device rules.",
  },
  {
    title: "Detect",
    example:
      "Notice unusual alerts, unknown sessions, unexpected file changes, fake update prompts, and suspicious messages.",
  },
  {
    title: "Respond",
    example:
      "Stop risky interaction, protect accounts, preserve safe details, and report through a trusted channel.",
  },
  {
    title: "Recover",
    example:
      "Use protected backups, official recovery tools, and trusted technology support to restore safe operation.",
  },
];

const defenseReviewRows = [
  {
    item: "Approved update",
    source: "Available through official device settings",
    review:
      "Install through the official process after confirming the device is ready and important work is saved.",
  },
  {
    item: "Browser pop-up update",
    source: "Random webpage says installation is required",
    review:
      "Do not download it. Close the page and check the browser’s official settings.",
  },
  {
    item: "Protected backup",
    source: "Recent copy is stored separately in an approved system",
    review:
      "Strong recovery layer. Keep the backup protected from affected devices and unauthorized accounts.",
  },
  {
    item: "Unknown attachment",
    source: "Unexpected file arrives with an urgent message",
    review:
      "Do not open it. Verify the request through a separate trusted channel.",
  },
  {
    item: "Security alert",
    source: "Approved protection tool reports unusual file activity",
    review:
      "Stop risky interaction and follow the official reporting or technology-support process.",
  },
];

const mistakes = [
  "Postponing important approved updates for long periods without a plan.",
  "Installing updates from advertisements, pop-ups, or unofficial download pages.",
  "Keeping the only backup connected to the same device or account at all times.",
  "Assuming one security tool can replace careful behavior and account protection.",
  "Ignoring warning signs because no obvious damage is visible yet.",
  "Trying to recover a serious school or family device incident without trusted support.",
];

const quizQuestions = [
  {
    question: "Why are security updates important?",
    choices: [
      "They can fix known weaknesses and improve protection.",
      "They guarantee that users never need backups.",
      "They make every download trustworthy.",
      "They replace the need for account security.",
    ],
    answer: 0,
    explanation:
      "Approved updates often correct known flaws and reduce exposure to threats.",
  },
  {
    question: "Where should software updates normally come from?",
    choices: [
      "Official device settings, the official application, or an approved app store.",
      "Any pop-up that says the update is urgent.",
      "An unknown email attachment.",
      "A random file-sharing page.",
    ],
    answer: 0,
    explanation:
      "Official settings and approved stores reduce the risk of installing a fake update.",
  },
  {
    question: "Why should backups be protected separately?",
    choices: [
      "A separate protected copy is less likely to be affected by the same incident.",
      "Backups should always be public.",
      "Connected backups cannot store files.",
      "Separate backups remove the need for recovery planning.",
    ],
    answer: 0,
    explanation:
      "If a backup is constantly exposed to the same device or account, the same incident may affect both the original and the copy.",
  },
  {
    question: "What does defense in depth mean?",
    choices: [
      "Using several security layers together.",
      "Using only one very long password.",
      "Ignoring alerts until damage appears.",
      "Disabling updates to avoid changes.",
    ],
    answer: 0,
    explanation:
      "Defense in depth combines updates, backups, account security, careful behavior, monitoring, and reporting.",
  },
  {
    question: "What should happen when an approved security tool reports unusual file activity?",
    choices: [
      "Stop risky interaction and follow the official reporting process.",
      "Disable the alert.",
      "Open more files to test the problem.",
      "Install an unknown cleanup tool.",
    ],
    answer: 0,
    explanation:
      "Approved alerts should be taken seriously and handled through trusted support rather than personal investigation.",
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
          Previous: B8.5 Unsafe Downloads and Malicious Attachments
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
          Next: B8.7 Threat Recognition Lab
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

function DefenseFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Basic Threat Defense Cycle
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong basic defense combines prevention, detection, response, and
        recovery instead of depending on one tool or one perfect decision.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {defenseFlowStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> updates, backups,
        account security, careful verification, and trusted reporting work best
        together.
      </div>
    </section>
  );
}

function FakeDefensePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Basic Defense Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel connects approved updates, protected backups,
            careful verification, and safe reporting decisions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {defenseReviewRows.map((row) => (
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

function DefenseLayerBoard() {
  const layers = [
    {
      name: "Updates",
      saferQuestion:
        "Are operating systems, browsers, applications, and security tools receiving approved updates?",
      saferChoice:
        "Use automatic or scheduled updates from official settings and approved stores.",
    },
    {
      name: "Backups",
      saferQuestion:
        "Is there a recent protected copy that is separate from the main device or account?",
      saferChoice:
        "Use an approved backup process and verify that recovery copies are current and protected.",
    },
    {
      name: "Caution",
      saferQuestion:
        "Are messages, links, files, QR codes, prompts, and requests verified before interaction?",
      saferChoice:
        "Pause and confirm through a separate trusted channel.",
    },
    {
      name: "Account protection",
      saferQuestion:
        "Are credentials unique, MFA enabled, recovery settings current, and sessions reviewed?",
      saferChoice:
        "Use layered account security and respond quickly to unexpected changes.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Basic Defense Layer Board
      </h2>
      <p className="mt-3 text-slate-300">
        Each layer reduces a different kind of risk. Together, they create
        defense in depth.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {layers.map((layer) => (
          <div
            key={layer.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{layer.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{layer.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{layer.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DefenseBasicsUpdatesBackupsCautionPage() {
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
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8.6 Defense Basics: Updates, Backups, and Caution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how approved updates, protected backups, careful verification,
            account security, and trusted reporting work together as basic
            defense against common cyber threats.
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
          lessonTitle="Defense Basics: Updates, Backups, and Caution"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that no single defense can stop every threat.",
            "I will use official update sources, fictional examples, and approved backup concepts only.",
            "I am ready to connect prevention, detection, response, and recovery.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Basic Security Works Best as a System"
        >
          <p className="leading-8">
            Updates reduce known weaknesses. Backups support recovery. Careful
            verification reduces unsafe clicks and downloads. Account security
            protects access. Trusted reporting helps serious problems reach the
            right people quickly.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> do not install
            unknown tools, test suspicious files, or change school-managed
            systems without permission. Follow official school, family, or
            organization procedures.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how approved updates reduce known software weaknesses.",
            "Explain how protected backups support recovery after data loss or disruption.",
            "Combine caution, account security, monitoring, and trusted reporting into a layered defense plan.",
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
          title="Small Defensive Habits Reduce Larger Risks"
        >
          <p className="leading-8">
            Many serious incidents become harder to manage when devices remain
            outdated, backups are missing, credentials are reused, or warning
            signs are ignored. Consistent basic habits make prevention and
            recovery stronger.
          </p>
        </SectionCard>

        <DefenseFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Updates Prevent Some Problems; Backups Help Recover From Others"
        >
          <p className="leading-8">
            Updates can fix known flaws, but they cannot prevent every mistake or
            threat. Backups can restore trusted data, but they do not replace
            prevention. Caution can stop many unsafe interactions, but users
            still need account protection and trusted reporting. Defense in depth
            combines all of these layers.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Basic Threat Defense
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

        <DefenseLayerBoard />
        <FakeDefensePanel />

        <FakeDashboardCard
          title="Fake Basic Defense Dashboard"
          subtitle="Training dashboard using fictional update, backup, account, and warning-sign evidence."
          metrics={[
            {
              label: "Approved updates",
              value: "14",
              note: "Operating system, browser, application, and security-tool updates.",
            },
            {
              label: "Protected backups",
              value: "6",
              note: "Recent copies stored separately in approved systems.",
            },
            {
              label: "Threats avoided",
              value: "9",
              note: "Suspicious files, fake updates, account prompts, and phishing messages were not opened.",
            },
          ]}
        />

        <FakeAlertCard
          title="Backup Is Outdated and Device Has Missing Updates"
          severity="Medium"
          time="4:06 PM"
          source="Fake School Device Training"
          details="A fictional school device has several approved updates waiting, while the most recent protected backup is three weeks old."
          recommendation="Install updates through official settings, save current approved work, and complete the authorized backup process before the device is needed for critical tasks."
        />

        <FakeLogPanel
          title="Fake Defense Readiness Log"
          logs={[
            "15:52:04 UPDATE_STATUS operating_system='pending_critical'",
            "15:54:16 UPDATE_SOURCE channel='official_device_settings' verified='true'",
            "15:56:48 BACKUP_STATUS last_success='21_days_ago' status='outdated'",
            "15:59:03 ACCOUNT_SECURITY mfa='enabled' recovery='current'",
            "16:02:27 USER_BEHAVIOR suspicious_attachment='not_opened' report='submitted'",
            "16:06:11 SAFE_ACTION recommendation='update through official settings and refresh protected backup'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Defense Plan Is Most Complete?"
          evidence={[
            "A fictional student uses unique credentials and MFA.",
            "The device has approved updates waiting.",
            "The only backup is stored on the same device.",
            "The student verifies suspicious messages through official channels.",
          ]}
          question="What should be improved first?"
          options={[
            "Install approved updates and create a protected backup stored separately.",
            "Disable MFA to reduce login steps.",
            "Open suspicious files to test the security tools.",
            "Keep the only backup on the same device.",
          ]}
          bestAnswer={0}
          explanation="The student already has strong account and verification habits, but missing updates and a non-separate backup weaken prevention and recovery."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Basic Defense"
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
          title="Build a Fictional Layered Defense Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake System Profile
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Student Device Readiness Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student has strong MFA, an outdated backup, two
                approved updates waiting, one suspicious attachment, and a recent
                unknown login alert.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defense Planning Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Install approved updates through official settings.</li>
                <li>Refresh the protected backup through the approved process.</li>
                <li>Do not open the suspicious attachment.</li>
                <li>Review the official account activity and remove unknown sessions.</li>
                <li>Document the response and report serious concerns to trusted support.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Website Offers an Urgent Security Update"
          scenario="A fictional student sees a pop-up claiming the browser is dangerously outdated and must download a special security update immediately."
          choices={[
            {
              label: "Choice A",
              response:
                "Close the page and check for updates through the browser’s official settings or the school’s approved process.",
              outcome:
                "Best defensive choice. Updates should come from trusted official sources.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Download the update because the message sounds serious.",
              outcome:
                "Risky. Fake update prompts often use urgency and professional-looking design.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable browser warnings and try again.",
              outcome:
                "Unsafe. Security warnings should not be bypassed for an unknown download.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Only Backup Is Connected to the Device"
          scenario="A fictional student notices unusual file changes while an external backup drive is connected to the same device."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop interacting with the files and contact trusted technology support before changing or reconnecting anything.",
              outcome:
                "Best defensive choice. Trusted staff can protect the device and determine how to handle the backup safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open more files to see whether the backup is also affected.",
              outcome:
                "Risky. Continued interaction may make the situation harder to contain.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Copy all files between the device and backup immediately.",
              outcome:
                "Unsafe. Unverified copying may spread or preserve damaged data.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Updates, Backups, and Caution Checklist"
          items={[
            "I obtain updates from official settings, approved stores, or trusted school processes.",
            "I understand that updates reduce known weaknesses but do not replace other defenses.",
            "I keep recent protected backups separate from the main device or account.",
            "I verify suspicious messages, files, prompts, and requests before interaction.",
            "I use unique credentials, MFA, current recovery settings, and session review.",
            "I report serious alerts and device problems to trusted adults or technology staff.",
          ]}
        />

        <MiniQuiz
          title="B8.6 Mini Quiz: Defense Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional layered defense plan for a student device and account. Include updates, backups, account security, cautious behavior, monitoring, reporting, and recovery."
          tips={[
            "Use fictional devices, accounts, alerts, updates, and backup details only.",
            "Do not include real private information or unsafe troubleshooting instructions.",
            "Explain how each layer supports prevention, detection, response, or recovery.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Approved updates reduce known software weaknesses.",
            "Protected backups support recovery after data loss, corruption, or disruption.",
            "Careful verification reduces phishing, download, attachment, and fake-update risk.",
            "Account security and trusted reporting are important parts of threat defense.",
            "Defense in depth combines several layers so one mistake or failure is less likely to cause major harm.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}