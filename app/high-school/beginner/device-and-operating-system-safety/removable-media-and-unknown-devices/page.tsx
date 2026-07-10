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
  `${modulePath}/app-permissions-and-safe-installation`;
const nextLesson =
  `${modulePath}/lost-device-response-and-backups`;

const vocab = [
  [
    "Removable media",
    "Portable storage that can be connected to a device, such as a USB flash drive, memory card, or external drive.",
  ],
  [
    "Unknown device",
    "Hardware whose owner, history, purpose, or safety cannot be verified.",
  ],
  [
    "Auto-run",
    "A feature that may automatically open or start content when media is connected.",
  ],
  [
    "Trusted source",
    "A person, organization, or approved process whose identity and purpose can be verified.",
  ],
  [
    "Peripheral",
    "Hardware connected to a computer or device, such as a keyboard, mouse, storage device, headset, or charging accessory.",
  ],
  [
    "Data transfer",
    "The movement of files or information between devices, storage media, accounts, or systems.",
  ],
];

const mediaStages = [
  {
    title: "Stop before connecting",
    example:
      "Do not plug in unknown USB drives, external storage, adapters, cables, or borrowed devices.",
  },
  {
    title: "Verify ownership and purpose",
    example:
      "Ask whether the item belongs to a trusted person or organization and why it needs to be connected.",
  },
  {
    title: "Use approved equipment",
    example:
      "Use school-approved, family-approved, or personally owned accessories from trusted sources.",
  },
  {
    title: "Report or return safely",
    example:
      "Give found media or unknown devices to a responsible adult, teacher, administrator, or technology team.",
  },
];

const mediaRows = [
  {
    item: "Found USB drive",
    source: "Drive is discovered near a classroom computer",
    review:
      "Do not connect it. Give it to a teacher or technology staff member.",
  },
  {
    item: "Borrowed external drive",
    source: "Friend offers a drive with unknown history",
    review:
      "Avoid connecting it until ownership, purpose, and approval are verified.",
  },
  {
    item: "Trusted school drive",
    source: "Issued and labeled by school technology staff",
    review:
      "Use only for the approved purpose and follow school handling rules.",
  },
  {
    item: "Public charging cable",
    source: "Unattended cable is attached to an unknown station",
    review:
      "Use a trusted charger, power adapter, or approved charging-only option instead.",
  },
  {
    item: "Unknown keyboard adapter",
    source: "Small accessory is attached to a shared computer",
    review:
      "Do not remove or test it. Stop using the computer and report it.",
  },
];

const mistakes = [
  "Connecting a found USB drive to identify the owner.",
  "Testing an unknown device on a personal computer because it seems harmless.",
  "Borrowing storage media without knowing where it has been used.",
  "Assuming every charging cable or adapter only provides power.",
  "Opening files from removable media before verifying the source and purpose.",
  "Removing suspicious hardware from a shared or managed device without reporting it.",
];

const quizQuestions = [
  {
    question: "What should a student do with a USB drive found at school?",
    choices: [
      "Do not connect it; give it to a teacher or technology staff member.",
      "Open the files to identify the owner.",
      "Test it on a personal laptop.",
      "Pass it around to classmates.",
    ],
    answer: 0,
    explanation:
      "Unknown media should not be connected because its contents, history, and purpose cannot be verified.",
  },
  {
    question: "Why can an unknown peripheral create risk?",
    choices: [
      "Its behavior, history, and purpose may be unclear.",
      "Every peripheral is automatically safe.",
      "Peripherals cannot interact with devices.",
      "Only storage devices matter.",
    ],
    answer: 0,
    explanation:
      "Unknown accessories may behave differently than expected or expose the device to untrusted data or control.",
  },
  {
    question: "What is the safest charging choice?",
    choices: [
      "A trusted charger and power source approved for the device.",
      "Any unattended cable in a public area.",
      "An unknown adapter found on the floor.",
      "A cable provided by an unverified message sender.",
    ],
    answer: 0,
    explanation:
      "Trusted charging equipment reduces uncertainty about the accessory and connection.",
  },
  {
    question: "What should happen when an unknown adapter is attached to a shared school computer?",
    choices: [
      "Stop using the computer and report it without testing or removing the device.",
      "Open files from the adapter.",
      "Take the adapter home.",
      "Disable school security settings.",
    ],
    answer: 0,
    explanation:
      "Suspicious hardware on a managed device should be preserved and reported through the approved process.",
  },
  {
    question: "When is removable media safer to use?",
    choices: [
      "When its source, owner, purpose, and approval are known.",
      "Whenever it looks new.",
      "Whenever it contains interesting files.",
      "Whenever no one is watching.",
    ],
    answer: 0,
    explanation:
      "Trust should come from verified ownership, purpose, and approved handling—not appearance.",
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
          Previous: B10.4 App Permissions and Safe Installation
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
          Next: B10.6 Lost Device Response and Backups
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

function MediaFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Unknown Device Decision Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Safe removable-media decisions begin before anything is connected.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {mediaStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> do not connect unknown
        hardware to “see what is on it” or “test whether it works.”
      </div>
    </section>
  );
}

function FakeMediaPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Removable Media and Hardware Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares found storage, borrowed devices,
            trusted school media, public charging equipment, and unexpected
            accessories.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {mediaRows.map((row) => (
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

function HardwareBoard() {
  const areas = [
    {
      name: "Ownership",
      saferQuestion:
        "Who owns the device, and can that ownership be verified?",
      saferChoice:
        "Use personally owned, family-approved, school-issued, or organization-approved equipment.",
    },
    {
      name: "Purpose",
      saferQuestion:
        "Why does the item need to be connected, and is the request expected?",
      saferChoice:
        "Connect hardware only for a clear approved purpose.",
    },
    {
      name: "History",
      saferQuestion:
        "Where has the device been used, and has it been handled through a trusted process?",
      saferChoice:
        "Avoid hardware with unknown history or uncertain storage contents.",
    },
    {
      name: "Response",
      saferQuestion:
        "Was the item found, unexpectedly attached, or provided through an unverified request?",
      saferChoice:
        "Do not test it. Preserve the situation and report it to a trusted adult or technology team.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Hardware Trust Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Safe hardware decisions consider ownership, purpose, history, approval,
        and the correct response when something cannot be verified.
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

export default function RemovableMediaUnknownDevicesPage() {
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
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10.5 Removable Media and Unknown Devices
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to make safe decisions about USB drives, external
            storage, borrowed accessories, public charging equipment, shared
            computers, and hardware whose ownership or purpose is unknown.
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
          lessonTitle="Removable Media and Unknown Devices"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that unknown hardware should not be connected for testing or curiosity.",
            "I will use fictional devices, drives, cables, computers, files, and accessories only.",
            "I am ready to compare ownership, purpose, history, approval, and reporting decisions.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Small Device Can Carry Data, Software, or Unexpected Behavior"
        >
          <p className="leading-8">
            USB drives, external storage, adapters, keyboards, charging cables,
            and other accessories may interact with a device in different ways.
            The safest decision is often made before the connection happens.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every drive,
            accessory, computer, file, charger, and hardware event in this
            lesson is fictional. Never connect or test unknown hardware.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain removable media, peripherals, trusted sources, data transfer, and unknown-device risk.",
            "Recognize unsafe found drives, borrowed storage, public charging equipment, and unexpected attached hardware.",
            "Choose safe non-connection, verification, reporting, and approved-equipment responses.",
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
          title="Physical Connections Can Bypass Good Online Habits"
        >
          <p className="leading-8">
            A careful user may avoid phishing links and suspicious downloads but
            still create risk by connecting unknown storage or hardware. Device
            safety includes both online decisions and physical connection
            decisions.
          </p>
        </SectionCard>

        <MediaFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Unknown Means Stop and Verify"
        >
          <p className="leading-8">
            Appearance does not prove safety. A new-looking drive, cable, or
            adapter can still have an unknown history or purpose. Trusted
            ownership, approved use, and clear handling rules matter more than
            appearance.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Removable Media and Hardware Safety
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

        <HardwareBoard />
        <FakeMediaPanel />

        <FakeDashboardCard
          title="Fake Hardware Safety Dashboard"
          subtitle="Training dashboard using fictional storage, accessory, charging, ownership, and reporting evidence."
          metrics={[
            {
              label: "Items reviewed",
              value: "19",
              note: "Fictional USB drives, external disks, adapters, cables, keyboards, and charging devices.",
            },
            {
              label: "Unknown-source items",
              value: "11",
              note: "Ownership, history, purpose, or approval could not be verified.",
            },
            {
              label: "Safe decisions",
              value: "17",
              note: "Items were not connected and were returned, reported, or replaced with approved equipment.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unknown USB Device Attached to Shared Computer"
          severity="High"
          time="11:24 AM"
          source="Fake School Hardware Training"
          details="A fictional student notices a small unlabeled USB device attached behind a shared classroom computer."
          recommendation="Stop using the computer, do not remove or test the device, and report it to the teacher or school technology staff."
        />

        <FakeLogPanel
          title="Fake Removable Media Review Log"
          logs={[
            "11:09:14 DEVICE type='shared_computer' location='classroom'",
            "11:12:08 HARDWARE port='usb' item='unlabeled_adapter' owner='unknown'",
            "11:15:27 USER_ACTION files_opened='false' item_removed='false'",
            "11:18:42 SESSION activity='stopped' screen='locked'",
            "11:21:03 REPORT teacher='notified' technology_staff='requested'",
            "11:24:11 RESULT device_status='awaiting_authorized_review'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should This Device Be Connected?"
          evidence={[
            "A fictional USB drive is found outside a computer lab.",
            "The drive has no owner label.",
            "A student suggests opening the files to identify the owner.",
            "The school has a technology office for found equipment.",
          ]}
          question="What is the safest response?"
          options={[
            "Do not connect the drive; give it to the technology office or a responsible staff member.",
            "Open the files on a school computer.",
            "Test it on a personal laptop.",
            "Take it home and keep it.",
          ]}
          bestAnswer={0}
          explanation="The item has unknown ownership and history. It should be handled through the approved school process without connection."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Hardware Safety"
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
          title="Classify Fictional Removable Media and Accessories"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Hardware Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Connection Safety Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a found USB drive, a trusted school
                external drive, a borrowed memory card, an unattended charging
                cable, and an unknown adapter attached to a shared computer.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the owner and trusted source.</li>
                <li>Confirm the approved purpose.</li>
                <li>Review the known or unknown device history.</li>
                <li>Choose connect, do not connect, return, or report.</li>
                <li>Explain why appearance alone does not prove safety.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A USB Drive Is Found Near the Library"
          scenario="A fictional student finds an unlabeled USB drive and wants to identify the owner."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not connect it. Give it to library staff, a teacher, or technology staff.",
              outcome:
                "Best defensive choice. The drive can be handled through a trusted process without exposing a device.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the files on the nearest computer.",
              outcome:
                "Risky. The drive’s contents and history are unknown.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Take it home and test it later.",
              outcome:
                "Unsafe. Moving the risk to a personal device does not make the item trusted.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Unknown Adapter Is Attached to a Shared Computer"
          scenario="A fictional student notices a small unlabeled adapter connected behind a school computer."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop using the computer and report the hardware without removing or testing it.",
              outcome:
                "Best defensive choice. The situation is preserved for authorized review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove the adapter and plug it into another computer.",
              outcome:
                "Risky. This may spread the issue or destroy useful evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore it and continue signing in.",
              outcome:
                "Unsafe. The purpose of the attached hardware is unknown.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Removable Media and Unknown Devices Checklist"
          items={[
            "I do not connect found, borrowed, or unknown storage devices.",
            "I verify ownership, purpose, history, and approval before using hardware.",
            "I use trusted chargers, cables, adapters, and accessories.",
            "I do not open files from unknown removable media.",
            "I do not remove or test suspicious hardware attached to managed devices.",
            "I report found or unexpected devices to a trusted adult or technology team.",
          ]}
        />

        <MiniQuiz
          title="B10.5 Mini Quiz: Removable Media and Unknown Devices"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional hardware safety review. Include five removable-media or accessory scenarios, ownership, purpose, history, approval status, risk level, and recommended action."
          tips={[
            "Use fictional drives, devices, cables, computers, owners, and files only.",
            "Do not connect, test, open, or simulate real unknown hardware.",
            "Explain why the safest action may be not connecting the item at all.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Unknown removable media and peripherals should not be connected for curiosity or testing.",
            "Trusted ownership, purpose, history, and approval matter more than appearance.",
            "Found media should be returned or reported through an approved process.",
            "Public or unknown charging equipment may create uncertainty beyond power delivery.",
            "Unexpected hardware on a shared or managed device should be preserved and reported.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}