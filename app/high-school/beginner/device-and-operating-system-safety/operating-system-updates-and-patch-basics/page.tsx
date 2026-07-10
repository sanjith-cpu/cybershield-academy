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
  "/high-school/beginner/device-and-operating-system-safety";
const previousLesson =
  `${modulePath}/device-locks-and-screen-privacy`;
const nextLesson =
  `${modulePath}/antivirus-and-built-in-protection-concepts`;

const vocab = [
  [
    "Operating system",
    "The core software that manages a device’s hardware, apps, files, accounts, and security features.",
  ],
  [
    "Patch",
    "A software change that fixes a problem, improves stability, or reduces a known security weakness.",
  ],
  [
    "Security update",
    "An update focused on correcting security weaknesses and improving protection.",
  ],
  [
    "Update channel",
    "The official path used to receive updates, such as device settings, an approved app store, or a managed school system.",
  ],
  [
    "Restart requirement",
    "A message explaining that a device must restart before an update can finish applying.",
  ],
  [
    "End of support",
    "The point when a product no longer receives regular security updates from its official provider.",
  ],
];

const updateStages = [
  {
    title: "Verify the source",
    example:
      "Confirm the update appears in official device settings, the approved app store, or a trusted managed system.",
  },
  {
    title: "Review the purpose",
    example:
      "Check whether the notice describes a security patch, bug fix, feature update, or required restart.",
  },
  {
    title: "Schedule safely",
    example:
      "Save work, connect to reliable power if needed, and choose an approved time that will not interrupt an important task.",
  },
  {
    title: "Confirm completion",
    example:
      "Restart when required, verify the update finished, and report repeated failures or unusual warnings.",
  },
];

const updateRows = [
  {
    item: "Official settings notice",
    source: "Security update appears inside device settings",
    review:
      "Trusted source. Save work, schedule the update, and restart if required.",
  },
  {
    item: "Browser pop-up",
    source: "Urgent message says the operating system is infected",
    review:
      "Do not use the pop-up. Close it and check official device settings directly.",
  },
  {
    item: "Repeated restart delay",
    source: "Update has remained pending for several weeks",
    review:
      "Plan an approved restart soon so the patch can finish applying.",
  },
  {
    item: "Managed school laptop",
    source: "Update controls are limited by school policy",
    review:
      "Do not bypass management. Follow school instructions or contact technology staff.",
  },
  {
    item: "Unsupported system",
    source: "Device no longer receives official security updates",
    review:
      "Treat this as a long-term risk and discuss upgrade or replacement options with a trusted adult or administrator.",
  },
];

const mistakes = [
  "Downloading an operating-system update from an unexpected pop-up or message.",
  "Postponing important security updates for long periods without a plan.",
  "Ignoring restart requirements after an update is downloaded.",
  "Turning off update protections to stop notifications.",
  "Trying to bypass school or organization management controls.",
  "Assuming an old unsupported system is safe because it still turns on.",
];

const quizQuestions = [
  {
    question: "What is a security patch?",
    choices: [
      "A software change that fixes a security weakness or related problem.",
      "A physical sticker placed on a device.",
      "A replacement for device passwords.",
      "A type of removable storage.",
    ],
    answer: 0,
    explanation:
      "A patch changes software to correct weaknesses, bugs, or stability problems.",
  },
  {
    question: "Where should operating-system updates normally be obtained?",
    choices: [
      "Official device settings or an approved managed update system.",
      "An urgent browser pop-up.",
      "A random email attachment.",
      "An unknown file-sharing page.",
    ],
    answer: 0,
    explanation:
      "Official update channels reduce the risk of fake or harmful downloads.",
  },
  {
    question: "Why may a restart be required after an update?",
    choices: [
      "Some changes cannot finish applying while the operating system is still running.",
      "Restarting deletes every file.",
      "Restarts make passwords unnecessary.",
      "A restart proves every app is safe.",
    ],
    answer: 0,
    explanation:
      "Some system files can only be replaced or activated during a restart.",
  },
  {
    question: "What should a student do when updates are controlled by school technology staff?",
    choices: [
      "Follow the managed process and contact technology staff if there is a problem.",
      "Disable school management.",
      "Install an unofficial operating system.",
      "Ignore every update notice.",
    ],
    answer: 0,
    explanation:
      "Managed devices should be updated through the organization’s approved process.",
  },
  {
    question: "Why is end of support important?",
    choices: [
      "Unsupported systems may stop receiving security fixes.",
      "The device automatically becomes faster.",
      "All files are deleted immediately.",
      "The device no longer needs backups.",
    ],
    answer: 0,
    explanation:
      "A system that no longer receives patches may remain exposed to known weaknesses.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B10</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B10.1 Device Locks and Screen Privacy
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
          Next: B10.3 Antivirus and Built-In Protection Concepts
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

function UpdateFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Update Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Safe updating verifies the source, understands the purpose, schedules
        the change responsibly, and confirms the patch finished applying.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {updateStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> use official update
        settings—not pop-ups, attachments, random websites, or unverified tools.
      </div>
    </section>
  );
}

function FakeUpdatePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Operating System Update Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares official updates, fake prompts,
            restart delays, managed systems, and unsupported devices.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {updateRows.map((row) => (
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

function UpdatePriorityBoard() {
  const areas = [
    {
      name: "Security importance",
      saferQuestion:
        "Does the update address a security weakness, active warning, or important system issue?",
      saferChoice:
        "Give verified security updates a high priority and schedule them promptly.",
    },
    {
      name: "Official source",
      saferQuestion:
        "Did the update appear in official settings, an approved app store, or a managed school system?",
      saferChoice:
        "Ignore unexpected pop-ups and verify through the official update channel.",
    },
    {
      name: "Restart and timing",
      saferQuestion:
        "Is a restart required, and can the user save work and complete it without interrupting an important task?",
      saferChoice:
        "Save work, choose an approved time, and complete the restart rather than delaying indefinitely.",
    },
    {
      name: "Support status",
      saferQuestion:
        "Is the operating system still receiving official security updates?",
      saferChoice:
        "Discuss upgrade, replacement, or managed support options when a system reaches end of support.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Update Priority Board
      </h2>
      <p className="mt-3 text-slate-300">
        Good update decisions balance security importance, source trust,
        timing, restart needs, and device support status.
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

export default function OperatingSystemUpdatesPatchBasicsPage() {
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
              Module B10
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.2 Operating System Updates and Patch Basics
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn why operating systems receive patches, how official update
            channels reduce risk, why restarts matter, and what end of support
            means for device safety.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B10: Device and Operating System Safety"
          lessonTitle="Operating System Updates and Patch Basics"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that updates can fix security weaknesses, bugs, and stability problems.",
            "I will use fictional devices, settings, update notices, versions, and alerts only.",
            "I am ready to distinguish official updates from fake or unverified prompts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Known Weakness Stays Open Until the Fix Is Applied"
        >
          <p className="leading-8">
            Software providers release patches because problems are discovered
            after devices are already in use. Delaying an important security
            update may leave a known weakness uncorrected even when a trusted fix
            is available.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every update,
            version, device, alert, pop-up, and management system in this lesson
            is fictional. Do not install unverified software or bypass real
            school management controls.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain operating-system updates, security patches, restart requirements, and end of support.",
            "Distinguish official update channels from fake browser pop-ups, messages, or downloads.",
            "Prioritize verified updates and follow approved processes on personal, family, and managed school devices.",
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
          title="Updates Close Known Gaps"
        >
          <p className="leading-8">
            Strong passwords and cautious browsing are important, but they
            cannot repair weaknesses inside the operating system. Patches add a
            separate protective layer by correcting problems in the software
            itself.
          </p>
        </SectionCard>

        <UpdateFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Verify, Schedule, Apply, and Confirm"
        >
          <p className="leading-8">
            Safe updating is more than clicking a button. The user verifies the
            source, understands the notice, saves work, completes the update
            through the approved process, restarts when required, and checks
            whether the update finished successfully.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Updates and Patches
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

        <UpdatePriorityBoard />
        <FakeUpdatePanel />

        <FakeDashboardCard
          title="Fake Operating System Update Dashboard"
          subtitle="Training dashboard using fictional update status, restart, source, management, and support evidence."
          metrics={[
            {
              label: "Devices reviewed",
              value: "16",
              note: "Fictional phones, tablets, laptops, desktops, and managed school devices.",
            },
            {
              label: "Security updates pending",
              value: "7",
              note: "Verified patches waiting for download, restart, or approved scheduling.",
            },
            {
              label: "Unsupported systems",
              value: "3",
              note: "Devices requiring upgrade, replacement, or managed planning.",
            },
          ]}
        />

        <FakeAlertCard
          title="Important Security Patch Waiting for Restart"
          severity="Medium"
          time="4:16 PM"
          source="Fake Device Settings Training"
          details="A fictional laptop downloaded a verified operating-system security update, but the restart has been delayed for twelve days."
          recommendation="Save work, choose an approved time, restart the device, and verify that the update completed successfully."
        />

        <FakeLogPanel
          title="Fake Update Review Log"
          logs={[
            "16:02:11 UPDATE source='official_device_settings' type='security_patch'",
            "16:04:27 DOWNLOAD status='complete' signature='verified'",
            "16:06:44 RESTART required='true' delay_days='12'",
            "16:09:18 DEVICE managed='false' power='connected'",
            "16:12:35 SAFE_ACTION work='saved' restart='scheduled'",
            "16:16:02 RESULT update_status='installed' verification='complete'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Update Should Be Trusted?"
          evidence={[
            "A fictional laptop shows a security patch inside official device settings.",
            "A browser pop-up separately claims the operating system is infected.",
            "The official update requires a restart.",
            "The pop-up asks the student to download a tool from an unknown site.",
          ]}
          question="What is the safest response?"
          options={[
            "Use the official settings update, ignore the pop-up, save work, restart, and confirm completion.",
            "Download the tool from the pop-up first.",
            "Disable official updates to avoid confusion.",
            "Ignore both notices forever.",
          ]}
          bestAnswer={0}
          explanation="The verified settings notice is the trusted update channel. The unexpected pop-up and unknown download are warning signs."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Update Safety"
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
          title="Prioritize Fictional Operating System Updates"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Device Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Update and Patch Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a phone with automatic updates, a
                laptop awaiting restart, a managed school device, an old
                unsupported tablet, and a fake browser update prompt.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the official update source.</li>
                <li>Classify the update as security, feature, restart, fake, or unsupported-system risk.</li>
                <li>Prioritize verified security updates.</li>
                <li>Respect managed-device controls.</li>
                <li>Create a safe update or upgrade recommendation.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Browser Pop-Up Claims the Device Is Outdated"
          scenario="A fictional pop-up says the operating system is unsafe and provides a large Download Fix button."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the pop-up. Close it and check official device settings directly.",
              outcome:
                "Best defensive choice. Update status should be verified through the official operating-system channel.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Download the tool because the warning looks urgent.",
              outcome:
                "Risky. Unexpected update prompts may lead to unverified software.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable all update notifications.",
              outcome:
                "Unsafe. This may hide legitimate security updates.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A School Laptop Is Managed by Technology Staff"
          scenario="A fictional student notices a pending update, but the update controls are limited by school management."
          choices={[
            {
              label: "Choice A",
              response:
                "Follow school instructions and contact technology staff if the update does not complete.",
              outcome:
                "Best defensive choice. Managed devices should use the approved organizational process.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Try to remove the school management profile.",
              outcome:
                "Risky. The student is not authorized to bypass management controls.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Install an unofficial operating system.",
              outcome:
                "Unsafe. This bypasses trusted support and may create additional problems.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Operating System Updates and Patch Basics Checklist"
          items={[
            "I obtain updates through official settings, approved stores, or managed systems.",
            "I recognize that security patches correct known weaknesses.",
            "I save work and complete required restarts.",
            "I do not trust unexpected pop-ups, attachments, or random update downloads.",
            "I respect management controls on school or organization devices.",
            "I recognize end of support as a long-term security risk.",
          ]}
        />

        <MiniQuiz
          title="B10.2 Mini Quiz: Operating System Updates and Patch Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional operating-system update review. Include five devices, the update source, patch type, restart status, management status, support status, and recommended action."
          tips={[
            "Use fictional devices, versions, alerts, settings, and support dates only.",
            "Do not include real update links, downloads, credentials, or managed school details.",
            "Explain why official source verification matters.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Operating-system patches fix security weaknesses, bugs, and stability problems.",
            "Updates should come from official settings, approved app stores, or trusted management systems.",
            "Some updates require a restart before protection is fully applied.",
            "Managed school devices should follow the organization’s approved update process.",
            "End-of-support systems may stop receiving security fixes and require an upgrade or replacement plan.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}