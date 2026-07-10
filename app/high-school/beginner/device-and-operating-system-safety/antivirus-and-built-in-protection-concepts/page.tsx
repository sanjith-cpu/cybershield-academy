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
  `${modulePath}/operating-system-updates-and-patch-basics`;
const nextLesson =
  `${modulePath}/app-permissions-and-safe-installation`;

const vocab = [
  [
    "Antivirus",
    "Security software that helps detect, block, and respond to known or suspicious harmful software.",
  ],
  [
    "Built-in protection",
    "Security features included with an operating system, such as malware protection, firewall controls, reputation checks, and security alerts.",
  ],
  [
    "Real-time protection",
    "A feature that monitors files, apps, downloads, and activity as they are accessed or changed.",
  ],
  [
    "Scan",
    "A defensive review that checks selected files, folders, or the device for known or suspicious indicators.",
  ],
  [
    "Quarantine",
    "A protected area where a suspicious item may be isolated so it cannot run normally.",
  ],
  [
    "Firewall",
    "A security control that helps manage which network connections are allowed or blocked.",
  ],
];

const protectionStages = [
  {
    title: "Keep protection active",
    example:
      "Use the approved built-in or managed security tools and avoid disabling them.",
  },
  {
    title: "Keep tools updated",
    example:
      "Allow security definitions, protection engines, and operating-system components to update through official channels.",
  },
  {
    title: "Review alerts carefully",
    example:
      "Check the alert source, severity, item, recommended action, and whether trusted support is needed.",
  },
  {
    title: "Respond through approved steps",
    example:
      "Use official quarantine, scan, restart, reporting, or technology-support processes instead of random repair tools.",
  },
];

const protectionRows = [
  {
    item: "Protection disabled",
    source: "Built-in security shows real-time protection is off",
    review:
      "Restore approved protection if permitted or contact technology staff on a managed device.",
  },
  {
    item: "Definitions outdated",
    source: "Security tool has not updated for several weeks",
    review:
      "Connect through the official update process and confirm protection data is current.",
  },
  {
    item: "Suspicious file alert",
    source: "Built-in protection isolates an unexpected download",
    review:
      "Do not restore or open it. Review the alert and follow the approved response.",
  },
  {
    item: "Fake warning pop-up",
    source: "Browser page claims hundreds of infections and demands payment",
    review:
      "Do not click, call, pay, or install anything. Close the page and check official security tools.",
  },
  {
    item: "Managed school device",
    source: "Protection settings are controlled by school technology staff",
    review:
      "Do not bypass management. Report problems through the official school process.",
  },
];

const mistakes = [
  "Turning off built-in protection because an alert feels inconvenient.",
  "Restoring or opening a quarantined item without trusted review.",
  "Assuming antivirus makes every download, link, or attachment safe.",
  "Trusting browser pop-ups that claim to detect many infections.",
  "Installing multiple unknown cleanup tools from advertisements or messages.",
  "Trying to bypass managed security settings on a school or organization device.",
];

const quizQuestions = [
  {
    question: "What is the main role of antivirus or built-in protection?",
    choices: [
      "To help detect, block, and respond to known or suspicious harmful software.",
      "To replace all passwords and MFA.",
      "To make every link safe.",
      "To remove the need for updates.",
    ],
    answer: 0,
    explanation:
      "Protection tools add an important defensive layer, but they work best with updates, safe behavior, backups, and reporting.",
  },
  {
    question: "What does quarantine mean?",
    choices: [
      "Isolating a suspicious item so it cannot run normally.",
      "Sending a file to classmates.",
      "Deleting every file on the device.",
      "Turning off the firewall.",
    ],
    answer: 0,
    explanation:
      "Quarantine limits a suspicious item's ability to interact with the rest of the system.",
  },
  {
    question: "What should a student do when a browser pop-up claims the device has hundreds of infections?",
    choices: [
      "Close the page and check the official built-in security tool.",
      "Call the phone number in the pop-up.",
      "Pay for the offered cleanup service.",
      "Install the suggested remote-access tool.",
    ],
    answer: 0,
    explanation:
      "Browser pop-ups are not trusted proof of infection and should not be used for diagnosis or repair.",
  },
  {
    question: "Why must protection tools stay updated?",
    choices: [
      "Updates improve the tool's ability to recognize and respond to newer threats.",
      "Updates make screen locks unnecessary.",
      "Updates automatically back up every file.",
      "Updates remove the need for user judgment.",
    ],
    answer: 0,
    explanation:
      "Security tools rely on current protection data and software components.",
  },
  {
    question: "What should happen if protection settings are managed by school technology staff?",
    choices: [
      "Follow the managed process and report problems to technology staff.",
      "Remove the management controls.",
      "Install an unknown replacement tool.",
      "Disable all alerts.",
    ],
    answer: 0,
    explanation:
      "Managed devices should use the organization's approved security process.",
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
          Previous: B10.2 Operating System Updates and Patch Basics
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
          Next: B10.4 App Permissions and Safe Installation
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

function ProtectionFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Built-In Protection Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong protection keeps approved tools active and current, reviews
        alerts carefully, and follows trusted response steps.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {protectionStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> protection tools are
        one layer—not permission to ignore risky links, files, downloads, or
        device behavior.
      </div>
    </section>
  );
}

function FakeProtectionPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Antivirus and Built-In Protection Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares protection status, updates, alerts,
            quarantine, fake warnings, and managed-device conditions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {protectionRows.map((row) => (
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

function ProtectionBoard() {
  const areas = [
    {
      name: "Protection status",
      saferQuestion:
        "Are approved real-time protection and firewall features active?",
      saferChoice:
        "Keep approved protections enabled and report settings that cannot be restored.",
    },
    {
      name: "Update status",
      saferQuestion:
        "Are the protection engine, definitions, and operating-system security components current?",
      saferChoice:
        "Update through official settings or the managed organizational process.",
    },
    {
      name: "Alert quality",
      saferQuestion:
        "Did the warning come from the official security tool, or from a browser page, advertisement, message, or unknown app?",
      saferChoice:
        "Trust official security tools and verify unexpected warnings through device settings.",
    },
    {
      name: "Response action",
      saferQuestion:
        "Does the alert recommend quarantine, scan, restart, or contacting trusted support?",
      saferChoice:
        "Use approved response options and avoid restoring suspicious items or installing random repair tools.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Protection Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong defensive review checks whether protection is active, current,
        trustworthy, and connected to an approved response.
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

export default function AntivirusBuiltInProtectionConceptsPage() {
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
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.3 Antivirus and Built-In Protection Concepts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how antivirus, built-in protection, real-time monitoring,
            scans, quarantine, firewalls, updates, and trusted alerts work as
            part of a layered device-defense strategy.
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
          lessonTitle="Antivirus and Built-In Protection Concepts"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that security tools are one layer of defense, not a guarantee.",
            "I will use fictional devices, files, alerts, scans, settings, and quarantine events only.",
            "I am ready to distinguish official protection alerts from fake browser warnings.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Security Tools Help, but Judgment Still Matters"
        >
          <p className="leading-8">
            Antivirus and built-in protection can detect many known or
            suspicious items, but no tool can make every link, attachment,
            download, permission, or user decision safe. Strong defense combines
            tools with updates, caution, backups, and reporting.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            alert, scan, device, detection, quarantine item, and protection
            setting in this lesson is fictional. Do not disable real protection
            or test suspicious files.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain antivirus, built-in protection, real-time monitoring, scans, quarantine, and firewall concepts.",
            "Distinguish official security alerts from fake browser warnings and advertisements.",
            "Choose safe update, scan, quarantine, reporting, and escalation actions.",
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
          title="Protection Tools Can Limit Harm Before It Spreads"
        >
          <p className="leading-8">
            When approved protection detects and isolates a suspicious item, it
            can reduce the chance that the item runs normally or affects more of
            the device. The user still needs to review the alert and follow the
            correct response process.
          </p>
        </SectionCard>

        <ProtectionFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Keep Protection Active, Current, and Trusted"
        >
          <p className="leading-8">
            Strong device protection depends on three things: the tool is
            enabled, the tool is updated, and the user responds through official
            settings or trusted support. Fake warnings often imitate security
            tools, so the alert source matters.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Device Protection
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

        <ProtectionBoard />
        <FakeProtectionPanel />

        <FakeDashboardCard
          title="Fake Device Protection Dashboard"
          subtitle="Training dashboard using fictional protection status, updates, scans, alerts, quarantine, and firewall evidence."
          metrics={[
            {
              label: "Devices reviewed",
              value: "17",
              note: "Fictional laptops, tablets, phones, desktops, and managed school systems.",
            },
            {
              label: "Protection issues",
              value: "8",
              note: "Disabled features, outdated definitions, unresolved alerts, and fake warnings.",
            },
            {
              label: "Safe responses",
              value: "14",
              note: "Official updates, quarantine review, scans, restarts, and trusted escalation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Official Protection Tool Quarantines Unexpected Download"
          severity="High"
          time="10:48 AM"
          source="Fake Built-In Security Training"
          details="A fictional device security tool detects an unexpected download and moves it into quarantine before it runs."
          recommendation="Do not restore or open the item. Review the official alert, update protection, run the approved scan if recommended, and report the event if the device is managed."
        />

        <FakeLogPanel
          title="Fake Protection Review Log"
          logs={[
            "10:36:07 PROTECTION real_time='enabled' definitions='current'",
            "10:39:22 DOWNLOAD source='unexpected_message' execution='blocked'",
            "10:41:18 DETECTION severity='high' action='quarantined'",
            "10:43:55 USER_ACTION restore='false' open='false'",
            "10:46:11 SCAN type='approved_quick_scan' result='no_additional_findings'",
            "10:48:03 REPORT managed_device='true' technology_staff='notified'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Warning Should Be Trusted?"
          evidence={[
            "A fictional built-in security tool reports one quarantined item.",
            "A browser pop-up claims the device has 312 infections.",
            "The pop-up demands payment and a phone call.",
            "Official device settings show protection is active and current.",
          ]}
          question="What is the safest response?"
          options={[
            "Ignore the pop-up, review the official quarantined item, and follow the approved security process.",
            "Call the number in the pop-up.",
            "Pay for the offered cleanup service.",
            "Disable the official security tool.",
          ]}
          bestAnswer={0}
          explanation="The official built-in tool is the trusted source. The browser pop-up uses fear and payment pressure and should not be trusted."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Device Protection"
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
          title="Review Fictional Protection Status and Alerts"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Device Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Protection and Alert Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a laptop with outdated definitions,
                a phone with active protection, a managed school device, a
                browser scare pop-up, and one quarantined file.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Check whether approved protection is active.</li>
                <li>Review update and definition status.</li>
                <li>Identify whether the alert source is official or fake.</li>
                <li>Review quarantine and scan recommendations without restoring items.</li>
                <li>Choose the correct reporting or technology-support path.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Browser Warning Demands Payment"
          scenario="A fictional browser page says the device has hundreds of infections and provides a phone number and payment button."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not call, pay, or install anything. Close the page and check the official built-in protection tool.",
              outcome:
                "Best defensive choice. Browser scare pages are not trusted security diagnoses.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Pay immediately because the infection count is high.",
              outcome:
                "Risky. The warning may be designed to create fear and collect money or information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Install the remote-access tool offered by the page.",
              outcome:
                "Unsafe. Unverified remote access can expose the entire device.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Quarantined File Appears on a School Laptop"
          scenario="A fictional school laptop reports that an unexpected download was blocked and moved to quarantine."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not restore or open the file. Follow the official alert guidance and notify school technology staff.",
              outcome:
                "Best defensive choice. Managed devices should use the approved response process.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Restore the item so the student can see whether it works.",
              outcome:
                "Risky. Restoring may allow the suspicious item to run.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable protection so the alert disappears.",
              outcome:
                "Unsafe. This weakens the device and does not resolve the event.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Antivirus and Built-In Protection Checklist"
          items={[
            "I keep approved real-time protection and firewall features active.",
            "I update protection tools through official or managed channels.",
            "I distinguish official security alerts from browser pop-ups and advertisements.",
            "I do not restore, open, forward, upload, or test quarantined items.",
            "I understand that antivirus does not make every link, file, or download safe.",
            "I report serious or unclear alerts to trusted technology staff.",
          ]}
        />

        <MiniQuiz
          title="B10.3 Mini Quiz: Antivirus and Built-In Protection Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional device protection review. Include five devices, protection status, update status, alert source, scan or quarantine evidence, management status, and recommended action."
          tips={[
            "Use fictional devices, files, alerts, detections, scans, and settings only.",
            "Do not include real suspicious files, links, security logs, or managed-device details.",
            "Explain why protection tools are one layer rather than a complete solution.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Antivirus and built-in protection help detect, block, and respond to known or suspicious harmful software.",
            "Real-time protection, scans, quarantine, and firewalls provide different defensive functions.",
            "Security tools must stay active and updated through official channels.",
            "Browser pop-ups and advertisements are not trusted security diagnoses.",
            "Protection tools work best with updates, safe behavior, backups, and trusted reporting.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}