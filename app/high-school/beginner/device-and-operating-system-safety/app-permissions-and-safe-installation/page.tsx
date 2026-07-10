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
  `${modulePath}/antivirus-and-built-in-protection-concepts`;
const nextLesson =
  `${modulePath}/removable-media-and-unknown-devices`;

const vocab = [
  [
    "App permission",
    "Approval that allows an app to access a device feature, account, file type, sensor, or category of information.",
  ],
  [
    "Least privilege",
    "Giving an app only the minimum access needed for its intended purpose.",
  ],
  [
    "Official app store",
    "An approved platform used to distribute, review, update, and manage applications.",
  ],
  [
    "Publisher",
    "The person or organization listed as responsible for releasing an app.",
  ],
  [
    "Installation source",
    "The location or service from which an app or installer is obtained.",
  ],
  [
    "Permission review",
    "Checking whether requested access matches the app’s purpose and can be limited, denied, or removed.",
  ],
];

const installationStages = [
  {
    title: "Verify the source",
    example:
      "Use an approved app store, official publisher website, or managed school installation process.",
  },
  {
    title: "Verify the app",
    example:
      "Review the publisher, app name, purpose, reviews, update history, and whether the app was expected.",
  },
  {
    title: "Review permissions",
    example:
      "Compare each permission with the app’s purpose and deny access that is unnecessary.",
  },
  {
    title: "Monitor and update",
    example:
      "Install updates through official channels, review permission changes, and remove apps that are no longer needed.",
  },
];

const permissionRows = [
  {
    item: "Flashlight app",
    source: "Requests contacts, microphone, and location",
    review:
      "Permissions do not match the purpose. Deny access and avoid installing the app.",
  },
  {
    item: "Video-call app",
    source: "Requests camera and microphone during a call",
    review:
      "Permissions may be expected, but access should still be limited to when the feature is in use.",
  },
  {
    item: "Unknown installer",
    source: "Downloaded from a message attachment",
    review:
      "Do not install it. Verify the app through the official publisher or approved app store.",
  },
  {
    item: "School-managed app",
    source: "Installed through the official device-management system",
    review:
      "Use the managed process and contact technology staff if the app or permissions seem incorrect.",
  },
  {
    item: "Old unused app",
    source: "Still has access to photos, files, and location",
    review:
      "Remove unnecessary permissions or uninstall the app if it is no longer needed.",
  },
];

const mistakes = [
  "Approving every permission quickly so installation can finish.",
  "Assuming an app is safe because its name or icon looks familiar.",
  "Installing apps from message links, pop-ups, or unknown download pages.",
  "Giving a simple app access to contacts, microphone, camera, files, and location without a clear reason.",
  "Ignoring permission changes after an app update.",
  "Keeping old or unused apps with broad access to device information.",
];

const quizQuestions = [
  {
    question: "What does least privilege mean for an app?",
    choices: [
      "The app receives only the minimum access needed for its purpose.",
      "The app receives every available permission.",
      "The app never needs updates.",
      "The app can bypass device security.",
    ],
    answer: 0,
    explanation:
      "Least privilege reduces risk by limiting access to only what the app truly needs.",
  },
  {
    question: "Which installation source is usually safest?",
    choices: [
      "An approved app store, official publisher site, or managed school process.",
      "An unexpected message attachment.",
      "A random pop-up advertisement.",
      "An unknown file-sharing page.",
    ],
    answer: 0,
    explanation:
      "Approved sources provide stronger publisher, update, and distribution controls.",
  },
  {
    question: "A flashlight app requests contacts and microphone access. What should the user do?",
    choices: [
      "Deny the permissions and question whether the app should be installed.",
      "Approve everything because the app is simple.",
      "Share the device password with the publisher.",
      "Disable built-in protection.",
    ],
    answer: 0,
    explanation:
      "The requested access does not match the app’s basic purpose.",
  },
  {
    question: "What should happen when an app is no longer used?",
    choices: [
      "Remove unnecessary permissions or uninstall the app.",
      "Give it more permissions.",
      "Ignore its access forever.",
      "Install a duplicate copy.",
    ],
    answer: 0,
    explanation:
      "Unused apps can retain access and should be reviewed or removed.",
  },
  {
    question: "What should a student do if a school-managed app requests unusual access?",
    choices: [
      "Do not bypass management; ask school technology staff to review it.",
      "Remove school management controls.",
      "Install a different unknown app.",
      "Approve the request without checking.",
    ],
    answer: 0,
    explanation:
      "Managed devices should be handled through the approved school support process.",
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
          Previous: B10.3 Antivirus and Built-In Protection Concepts
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
          Next: B10.5 Removable Media and Unknown Devices
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

function InstallationFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe App Installation Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Safer installation verifies the source and publisher, reviews
        permissions, and continues monitoring the app after installation.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {installationStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> an app should not
        receive access simply because it asks. The permission must match the
        app’s purpose.
      </div>
    </section>
  );
}

function FakePermissionPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            App Source and Permission Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares app purpose, publisher, installation
            source, permissions, management, and continued need.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {permissionRows.map((row) => (
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

function PermissionBoard() {
  const areas = [
    {
      name: "Source and publisher",
      saferQuestion:
        "Did the app come from an approved store, official publisher site, or managed installation system?",
      saferChoice:
        "Avoid message attachments, pop-ups, unknown download pages, and unverified publishers.",
    },
    {
      name: "Permission purpose",
      saferQuestion:
        "Does each requested permission directly support a feature the app is expected to provide?",
      saferChoice:
        "Deny unnecessary access and choose an alternative app if the request is excessive.",
    },
    {
      name: "Access timing",
      saferQuestion:
        "Does the app need continuous access, or only while a specific feature is being used?",
      saferChoice:
        "Choose the most limited approved option, such as access only while using the app.",
    },
    {
      name: "Ongoing review",
      saferQuestion:
        "Is the app still needed, current, trusted, and using the same permissions originally approved?",
      saferChoice:
        "Review after updates and remove unnecessary permissions or unused apps.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        App Permission Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Safe app decisions compare the source, purpose, requested access,
        timing, management, and continued need.
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

export default function AppPermissionsSafeInstallationPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.4 App Permissions and Safe Installation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to judge app sources, publishers, requested permissions,
            access timing, update methods, managed installations, and whether an
            app still needs access after installation.
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
          lessonTitle="App Permissions and Safe Installation"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that apps should receive only the access needed for their purpose.",
            "I will use fictional apps, publishers, stores, installers, accounts, and permissions only.",
            "I am ready to compare source trust, app purpose, permission scope, and continued need.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An App’s Purpose Should Match Its Access"
        >
          <p className="leading-8">
            A flashlight may need the camera light, but it should not normally
            need contacts, microphone recordings, private files, or continuous
            location access. Permission decisions become stronger when the user
            asks what the app does and why each permission is necessary.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every app,
            publisher, permission, installer, store, device, and account in this
            lesson is fictional. Do not install unverified software or change
            real managed-device settings.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain app permissions, least privilege, official stores, publishers, and installation sources.",
            "Recognize excessive permissions, unknown installers, mismatched app purposes, and unsafe update methods.",
            "Choose safer installation, denial, limitation, removal, and trusted-support actions.",
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
          title="Permissions Can Expose More Than the App Needs"
        >
          <p className="leading-8">
            Apps may request access to location, camera, microphone, contacts,
            photos, files, notifications, nearby devices, or account data.
            Limiting access reduces the amount of information or control
            available if the app is misused, compromised, or no longer trusted.
          </p>
        </SectionCard>

        <InstallationFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Source Trust and Least Privilege Work Together"
        >
          <p className="leading-8">
            A trusted installation source does not mean every permission should
            be approved. Safe installation requires both a trustworthy source
            and a permission set that matches the app’s actual purpose.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for App Installation and Permissions
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

        <PermissionBoard />
        <FakePermissionPanel />

        <FakeDashboardCard
          title="Fake App Permission Dashboard"
          subtitle="Training dashboard using fictional app sources, publishers, permissions, updates, and management evidence."
          metrics={[
            {
              label: "Apps reviewed",
              value: "21",
              note: "Fictional school, communication, utility, media, game, and productivity apps.",
            },
            {
              label: "Excessive permissions",
              value: "10",
              note: "Access requests did not match the app’s stated purpose.",
            },
            {
              label: "Safer decisions",
              value: "16",
              note: "Permissions were denied, limited, reviewed, or removed.",
            },
          ]}
        />

        <FakeAlertCard
          title="Simple Utility App Requests Broad Device Access"
          severity="Medium"
          time="3:06 PM"
          source="Fake App Store Training"
          details="A fictional flashlight app requests contacts, microphone, files, precise location, and permission to run continuously in the background."
          recommendation="Do not approve the excessive permissions. Avoid installation and choose a trusted alternative with limited access."
        />

        <FakeLogPanel
          title="Fake App Permission Review Log"
          logs={[
            "14:51:07 APP category='utility' purpose='flashlight'",
            "14:53:18 SOURCE store='unknown_download_page' publisher_verified='false'",
            "14:55:42 PERMISSION contacts='requested' microphone='requested' location='precise'",
            "14:58:09 BACKGROUND_ACCESS continuous='requested' purpose_match='false'",
            "15:01:36 USER_ACTION install='cancelled' permissions='denied'",
            "15:06:02 RECOMMENDATION source='approved_store' least_privilege='required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should This App Be Installed?"
          evidence={[
            "A fictional study timer app comes from an unknown message link.",
            "The listed publisher cannot be verified.",
            "The app requests contacts, microphone, camera, files, and precise location.",
            "The timer feature does not require most of those permissions.",
          ]}
          question="What is the safest decision?"
          options={[
            "Do not install it; use an approved source and choose an alternative with permissions that match the purpose.",
            "Install it and approve everything so the timer works.",
            "Disable built-in protection before installation.",
            "Share the device password with the publisher.",
          ]}
          bestAnswer={0}
          explanation="The unverified source, unknown publisher, and excessive permissions create several related warning signs."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken App Safety"
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
          title="Review Fictional App Sources and Permissions"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake App Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                App Installation and Permission Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a video-call app, flashlight app,
                school-managed app, game installer, and old photo-editing app.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Verify the installation source and publisher.</li>
                <li>Compare each permission with the app’s purpose.</li>
                <li>Choose the most limited approved access level.</li>
                <li>Review whether the app is managed or required by school.</li>
                <li>Remove unnecessary permissions or unused apps.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Game Installer Arrives Through a Message"
          scenario="A fictional student receives a message promising early access to a new game and includes an installer file."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not install the file. Check the official publisher or approved app store for the game.",
              outcome:
                "Best defensive choice. Message attachments are not trusted installation sources.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Install immediately because early access is limited.",
              outcome:
                "Risky. Scarcity and an unverified installer are warning signs.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable protection so the installer can run.",
              outcome:
                "Unsafe. This weakens the device and bypasses trusted controls.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Video-Call App Requests Camera and Microphone Access"
          scenario="A fictional student opens a trusted video-call app and is asked for camera and microphone access before joining a meeting."
          choices={[
            {
              label: "Choice A",
              response:
                "Allow the permissions only while using the app, if the features are needed for the meeting.",
              outcome:
                "Best defensive choice. The permissions match the purpose and can be limited in time.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Grant permanent access to every device feature.",
              outcome:
                "Risky. Broader access is unnecessary.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Share the device passcode with the app publisher.",
              outcome:
                "Unsafe. Device secrets should never be shared.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="App Permissions and Safe Installation Checklist"
          items={[
            "I use approved app stores, official publishers, or managed installation systems.",
            "I compare every requested permission with the app’s purpose.",
            "I choose the least amount of access and shortest access duration needed.",
            "I avoid installers from messages, pop-ups, unknown pages, or unverified publishers.",
            "I review permission changes after updates.",
            "I remove unnecessary permissions and uninstall apps I no longer use.",
          ]}
        />

        <MiniQuiz
          title="B10.4 Mini Quiz: App Permissions and Safe Installation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional app permission review. Include five apps, the source, publisher, purpose, requested permissions, management status, risk classification, and recommended action."
          tips={[
            "Use fictional apps, publishers, stores, devices, accounts, and permissions only.",
            "Do not include real installer links, credentials, private information, or managed-device details.",
            "Explain how least privilege improves each decision.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Apps should receive only the permissions needed for their purpose.",
            "Approved stores and official publishers are safer than message attachments, pop-ups, and unknown download pages.",
            "A trusted source does not automatically justify every permission request.",
            "Permissions can often be limited by feature, duration, or usage.",
            "Unused apps and unnecessary permissions should be reviewed and removed.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}