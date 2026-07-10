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
  `${modulePath}/lost-device-response-and-backups`;
const nextLesson = `${modulePath}/module-test`;

const vocab = [
  [
    "Device hardening",
    "Reducing unnecessary risk by strengthening settings, limiting access, applying updates, and preparing for recovery.",
  ],
  [
    "Security baseline",
    "A minimum approved set of protections that every device should meet.",
  ],
  [
    "Layered defense",
    "Using several protections together so one failure does not leave the entire device exposed.",
  ],
  [
    "Risk priority",
    "The order in which problems should be addressed based on urgency, likelihood, and possible impact.",
  ],
  [
    "Configuration review",
    "A structured check of device settings, permissions, updates, protection tools, backups, and access controls.",
  ],
  [
    "Remediation",
    "The approved action used to correct or reduce a security weakness.",
  ],
];

const hardeningStages = [
  {
    title: "Inventory",
    example:
      "Identify the device owner, purpose, operating system, management status, accounts, apps, and backup responsibility.",
  },
  {
    title: "Inspect",
    example:
      "Review locks, update status, built-in protection, permissions, removable-media practices, and recovery readiness.",
  },
  {
    title: "Prioritize",
    example:
      "Address active exposure, missing updates, disabled protection, unknown access, and missing backups before lower-risk improvements.",
  },
  {
    title: "Improve",
    example:
      "Apply approved fixes, document changes, verify results, and report anything that requires trusted support.",
  },
];

const reviewRows = [
  {
    item: "Access control",
    source: "Weak passcode and thirty-minute automatic-lock timeout",
    review:
      "Strengthen the approved lock and shorten the timeout.",
  },
  {
    item: "Operating system",
    source: "Verified security patch pending restart for eleven days",
    review:
      "Save work, restart at an approved time, and confirm completion.",
  },
  {
    item: "Built-in protection",
    source: "Real-time protection is disabled on a managed device",
    review:
      "Do not bypass management. Report the issue to technology staff immediately.",
  },
  {
    item: "App permissions",
    source: "Simple utility app has microphone, contacts, files, and location access",
    review:
      "Remove excessive access or uninstall the app through the approved process.",
  },
  {
    item: "Recovery readiness",
    source: "No verified backup for important school files",
    review:
      "Create an approved protected backup and confirm the recovery point.",
  },
];

const mistakes = [
  "Changing many settings without first recording the original condition.",
  "Fixing low-priority cosmetic issues before active account or device risks.",
  "Disabling management controls to make a device easier to configure.",
  "Assuming one security tool makes updates, locks, permissions, and backups unnecessary.",
  "Connecting unknown media during a hardening review.",
  "Marking an issue complete without verifying that the approved fix worked.",
];

const quizQuestions = [
  {
    question: "What is device hardening?",
    choices: [
      "Reducing unnecessary risk by strengthening approved settings and protections.",
      "Installing every available app.",
      "Disabling all security notifications.",
      "Sharing one account across every device.",
    ],
    answer: 0,
    explanation:
      "Hardening reduces exposure through approved access controls, updates, protections, permissions, backups, and safer practices.",
  },
  {
    question: "Which issue should usually receive the highest priority?",
    choices: [
      "Real-time protection is disabled and an unknown session is active.",
      "The desktop wallpaper is outdated.",
      "The device name is too long.",
      "A folder icon is the wrong color.",
    ],
    answer: 0,
    explanation:
      "Active unauthorized access and disabled protection create more immediate risk than cosmetic settings.",
  },
  {
    question: "Why is a security baseline useful?",
    choices: [
      "It defines the minimum approved protections every device should meet.",
      "It guarantees no incident can ever occur.",
      "It removes the need for user judgment.",
      "It replaces backups and recovery planning.",
    ],
    answer: 0,
    explanation:
      "A baseline creates a consistent minimum standard that can be reviewed and verified.",
  },
  {
    question: "What should happen after a hardening change is applied?",
    choices: [
      "Verify the result and document the approved change.",
      "Assume it worked without checking.",
      "Disable alerts so no one notices.",
      "Connect unknown hardware to test the device.",
    ],
    answer: 0,
    explanation:
      "Verification confirms that the issue was actually corrected and did not create another problem.",
  },
  {
    question: "What is layered defense?",
    choices: [
      "Using several protections together so one failure does not expose the entire device.",
      "Using only one antivirus tool.",
      "Keeping every app permission enabled.",
      "Using the same weak passcode everywhere.",
    ],
    answer: 0,
    explanation:
      "Locks, updates, protection tools, permissions, safe hardware habits, backups, and reporting support one another.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Complete Module B10</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B10.6 Lost Device Response and Backups
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
          Open B10 Module Test
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

function HardeningFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Device Hardening Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A strong review moves from inventory to inspection, priority, approved
        remediation, and final verification.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {hardeningStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> do not make
        unauthorized changes to school, work, family, or managed devices.
        Document and escalate anything outside your permission.
      </div>
    </section>
  );
}

function FakeHardeningPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Device Hardening Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel combines lock, update, protection, permission,
            hardware, backup, and recovery evidence.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {reviewRows.map((row) => (
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
  const areas = [
    {
      name: "Critical",
      saferQuestion:
        "Is there active unauthorized access, disabled protection, exposed credentials, or serious device behavior?",
      saferChoice:
        "Contain immediately and involve trusted technology staff or the account owner.",
    },
    {
      name: "High",
      saferQuestion:
        "Are important security updates missing, unknown devices attached, or excessive permissions exposing sensitive data?",
      saferChoice:
        "Correct promptly through approved settings or support processes.",
    },
    {
      name: "Medium",
      saferQuestion:
        "Are lock timeouts, backup schedules, old apps, or privacy settings weaker than the approved baseline?",
      saferChoice:
        "Schedule improvements and verify each change.",
    },
    {
      name: "Ongoing",
      saferQuestion:
        "Does the device need recurring review, updates, backup checks, permission cleanup, or inventory maintenance?",
      saferChoice:
        "Create a repeatable review schedule and document ownership and responsibility.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Device Hardening Priority Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong hardening addresses the highest-impact active risks first and
        places routine improvements into a documented plan.
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

export default function DeviceHardeningChecklistLabPage() {
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
              Lesson 7 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.7 Device Hardening Checklist Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apply device locks, updates, built-in protection, app permissions,
            removable-media safety, backups, lost-device response, priority,
            remediation, and verification to one fictional device review.
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
          lessonTitle="Device Hardening Checklist Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can review locks, updates, protection, permissions, hardware, backups, and recovery readiness.",
            "I will use fictional devices, accounts, apps, settings, files, media, alerts, and backups only.",
            "I am ready to prioritize risks and recommend approved defensive improvements.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Secure Device Depends on Several Connected Layers"
        >
          <p className="leading-8">
            A strong passcode cannot fix an unpatched operating system. An
            updated device can still be exposed by excessive app permissions.
            Built-in protection cannot replace backups, careful hardware
            decisions, or lost-device planning. Device hardening connects all of
            these layers.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> this lab uses
            fake settings and evidence only. Never disable protection, bypass
            management, connect unknown devices, test suspicious files, or
            change a real managed device without permission.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Apply a structured hardening review across all major Module B10 device-safety areas.",
            "Classify findings by priority and choose approved remediation actions.",
            "Create a documented security baseline and verification checklist.",
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
          title="Small Weaknesses Can Combine Into a Larger Risk"
        >
          <p className="leading-8">
            A long screen-lock timeout, delayed patch, disabled protection,
            excessive app permissions, unknown USB drive, and missing backup may
            seem separate. Together, they create multiple opportunities for
            unauthorized access, data exposure, or difficult recovery.
          </p>
        </SectionCard>

        <HardeningFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Build a Baseline, Then Verify Every Improvement"
        >
          <p className="leading-8">
            A security baseline defines the minimum approved condition for a
            device. The defender compares the current state with that baseline,
            records the differences, prioritizes them, applies authorized fixes,
            and confirms the final result.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Device Hardening
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
        <FakeHardeningPanel />

        <FakeDashboardCard
          title="Fake Device Hardening Dashboard"
          subtitle="Training dashboard using fictional lock, update, protection, permission, hardware, backup, and recovery evidence."
          metrics={[
            {
              label: "Controls reviewed",
              value: "28",
              note: "Fictional settings and practices across seven defensive areas.",
            },
            {
              label: "High-priority findings",
              value: "6",
              note: "Disabled protection, delayed patches, unknown access, and missing recovery safeguards.",
            },
            {
              label: "Verified improvements",
              value: "19",
              note: "Approved changes were completed, documented, and checked.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Device Controls Below Approved Baseline"
          severity="High"
          time="9:42 AM"
          source="Fake Device Hardening Training"
          details="A fictional managed laptop has a weak lock timeout, a pending security restart, disabled real-time protection, an excessive-permission utility app, and no verified backup."
          recommendation="Report the managed protection issue, complete the approved update, strengthen access settings, remove unnecessary permissions, establish a protected backup, and verify every change."
        />

        <FakeLogPanel
          title="Fake Device Hardening Review Log"
          logs={[
            "09:08:12 INVENTORY owner='student' device='managed_laptop' purpose='schoolwork'",
            "09:13:27 ACCESS lock='enabled' timeout='30_minutes' baseline='not_met'",
            "09:18:44 UPDATE security_patch='downloaded' restart='pending_11_days'",
            "09:23:19 PROTECTION real_time='disabled' managed='true'",
            "09:28:56 APP utility_permissions='microphone,contacts,files,location' purpose_match='false'",
            "09:34:31 BACKUP verified='false' important_files='present'",
            "09:42:05 ACTION technology_staff='notified' remediation_plan='created'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Finding Should Be Addressed First?"
          evidence={[
            "A fictional managed laptop has real-time protection disabled.",
            "A verified security patch is waiting for restart.",
            "The screen-lock timeout is too long.",
            "The desktop background does not match school branding.",
          ]}
          question="What is the best priority decision?"
          options={[
            "Report and restore approved protection first, then complete the security update, strengthen the timeout, and leave cosmetic issues for later.",
            "Change the desktop background first.",
            "Ignore the protection issue because the device still works.",
            "Remove management controls and configure everything independently.",
          ]}
          bestAnswer={0}
          explanation="Disabled protection is an immediate high-priority issue. The patch and timeout also matter, while the background is cosmetic."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken a Hardening Review"
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
          title="Complete a Fictional Device Hardening Assessment"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Device Profile
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Student Laptop Security Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional school laptop has a long lock timeout, pending
                restart, disabled protection, an over-permissioned utility app,
                an unknown USB drive nearby, no recent backup, and no documented
                lost-device plan.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Record ownership, purpose, management, and current state.</li>
                <li>Compare each control with the approved baseline.</li>
                <li>Classify findings as critical, high, medium, or ongoing.</li>
                <li>Choose only authorized remediation actions.</li>
                <li>Escalate managed or unclear issues.</li>
                <li>Verify and document the final result.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Managed Laptop Has Several Weak Settings"
          scenario="A fictional school laptop has disabled protection, a pending restart, a long lock timeout, and an app with excessive permissions."
          choices={[
            {
              label: "Choice A",
              response:
                "Report the protection issue, complete approved updates, strengthen access settings, remove unnecessary permissions, and verify each result.",
              outcome:
                "Best defensive choice. It prioritizes active protection and uses approved remediation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove school management and configure the laptop independently.",
              outcome:
                "Risky. The student is not authorized to bypass management.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore every issue because the laptop still turns on.",
              outcome:
                "Unsafe. Functionality does not prove the device meets the security baseline.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Unknown USB Drive Appears During the Review"
          scenario="A fictional USB drive is found beside the laptop while the hardening assessment is being completed."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not connect it. Preserve the situation and report the drive through the approved process.",
              outcome:
                "Best defensive choice. The hardening review should not introduce a new unknown risk.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Connect it to test whether protection is working.",
              outcome:
                "Risky. Unknown media should never be used as a test.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Open the files to identify the owner.",
              outcome:
                "Unsafe. The drive’s history and contents are unknown.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Device Hardening Checklist"
          items={[
            "I identify device ownership, purpose, management, accounts, apps, and backup responsibility.",
            "I verify locks, automatic timeout, screen privacy, and shared-device handling.",
            "I review operating-system updates, restart status, and support status.",
            "I confirm approved built-in protection and firewall features are active and current.",
            "I review app sources, publishers, permissions, and continued need.",
            "I avoid unknown removable media, adapters, cables, and hardware.",
            "I confirm protected backups and a trusted lost-device response path.",
            "I prioritize, remediate, verify, document, and escalate through approved processes.",
          ]}
        />

        <MiniQuiz
          title="B10.7 Mini Quiz: Device Hardening Checklist Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional device hardening report. Include device inventory, baseline, findings, priority, approved remediation, responsible person, verification evidence, and follow-up schedule."
          tips={[
            "Use fictional devices, accounts, settings, apps, media, backups, owners, and alerts only.",
            "Do not include real credentials, private data, managed-device details, or suspicious files.",
            "Clearly separate findings, authorized fixes, escalation needs, and verification results.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Device hardening combines locks, updates, built-in protection, permissions, hardware safety, backups, and recovery planning.",
            "A security baseline defines the minimum approved condition for a device.",
            "Active unauthorized access and disabled protection receive higher priority than cosmetic or routine issues.",
            "Managed-device problems should be escalated rather than bypassed.",
            "Every approved improvement should be verified and documented.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}