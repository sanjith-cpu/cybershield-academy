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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/linux-basics-for-security`;
const previousLesson = `${modulePath}/linux-systems-and-security-roles`;
const nextLesson = `${modulePath}/users-groups-and-permissions`;

const objectives = [
  "Explain absolute paths, relative paths, the root directory, home directories, hidden files, and common Linux filesystem locations.",
  "Connect file and directory locations with system purpose, ownership, sensitivity, evidence value, and defensive risk.",
  "Interpret fictional directory listings and metadata without changing system state.",
  "Distinguish expected system files from temporary, user-created, stale, misplaced, or review-required content.",
  "Create a safe fictional filesystem map that separates confirmed facts, likely explanations, and missing evidence.",
];

const vocabulary = [
  [
    "Root directory",
    "The top of the Linux filesystem hierarchy, represented by a single forward slash.",
  ],
  [
    "Absolute path",
    "A complete path that begins at the root directory, such as /var/log/training-app.log.",
  ],
  [
    "Relative path",
    "A path interpreted from the current working directory rather than from the root.",
  ],
  [
    "Home directory",
    "A user-specific location for personal files, settings, and approved work.",
  ],
  [
    "Current working directory",
    "The directory where the shell or application is currently operating.",
  ],
  [
    "Parent directory",
    "The directory one level above the current directory, commonly represented by two dots.",
  ],
  [
    "Hidden file",
    "A file or directory whose name begins with a dot and is normally omitted from basic listings.",
  ],
  [
    "Mount point",
    "A directory where another filesystem, device, or storage resource becomes accessible.",
  ],
  [
    "Symbolic link",
    "A filesystem reference that points to another file or directory.",
  ],
  [
    "Configuration file",
    "A file containing settings that control system, service, or application behavior.",
  ],
  [
    "Temporary file",
    "A short-lived file created during normal processing, updates, sessions, or application work.",
  ],
  [
    "Filesystem metadata",
    "Information such as ownership, permissions, timestamps, type, size, and location.",
  ],
];

const directoryGuide = [
  {
    path: "/etc",
    purpose:
      "System-wide configuration files and service settings.",
    defenderQuestions:
      "Which application owns the file? Was the change approved? Do permissions and timestamps match expectations?",
  },
  {
    path: "/var/log",
    purpose:
      "System, authentication, service, application, and monitoring logs.",
    defenderQuestions:
      "Are timestamps aligned? Is collection complete? Which owner and retention policy apply?",
  },
  {
    path: "/home",
    purpose:
      "User home directories, personal settings, documents, and approved work.",
    defenderQuestions:
      "Does the account still exist? Are sensitive files stored appropriately? Are hidden files expected?",
  },
  {
    path: "/root",
    purpose:
      "The home directory for the root administrative account.",
    defenderQuestions:
      "Is access tightly restricted? Are scripts and keys approved, owned, and documented?",
  },
  {
    path: "/srv",
    purpose:
      "Data served by approved applications or network services.",
    defenderQuestions:
      "Which service uses the content? Who owns it? Are permissions and backups appropriate?",
  },
  {
    path: "/tmp",
    purpose:
      "Temporary storage used by users, applications, installers, and services.",
    defenderQuestions:
      "Is the file expected, current, owned correctly, and safe to retain? Does it contain sensitive data?",
  },
  {
    path: "/usr",
    purpose:
      "User-space applications, libraries, commands, documentation, and shared data.",
    defenderQuestions:
      "Was software installed through approved packages? Does the location match the baseline?",
  },
  {
    path: "/var",
    purpose:
      "Variable data such as logs, caches, queues, databases, websites, and application state.",
    defenderQuestions:
      "Which service owns the data? Is growth expected? Are retention, permissions, and backups correct?",
  },
  {
    path: "/opt",
    purpose:
      "Optional or third-party application software.",
    defenderQuestions:
      "Is the software approved, supported, owned, updated, and required by the current system role?",
  },
  {
    path: "/mnt and /media",
    purpose:
      "Common locations for mounted storage, removable media, or temporary filesystem access.",
    defenderQuestions:
      "Who mounted the resource? Is it approved? What data, permissions, and lifecycle apply?",
  },
];

const pathTypes = [
  {
    type: "Expected system path",
    example: "/etc/training-web/app.conf",
    interpretation:
      "The location fits a configuration role, but ownership, permissions, change history, and content purpose still require review.",
  },
  {
    type: "Expected service data",
    example: "/srv/training-web/public",
    interpretation:
      "The path fits the fictional web-server role when the service owner, backup, access, and deployment records agree.",
  },
  {
    type: "User-created content",
    example: "/home/student-analyst/report.txt",
    interpretation:
      "The location may be normal for approved user work, but sensitivity, sharing, ownership, and retention matter.",
  },
  {
    type: "Temporary content",
    example: "/tmp/training-update-4821",
    interpretation:
      "The path may be normal during an approved update but should be correlated with process, owner, time, and cleanup evidence.",
  },
  {
    type: "Misplaced sensitive file",
    example: "/srv/training-web/public/internal-notes.txt",
    interpretation:
      "A publicly served directory is an inappropriate location for internal documentation and requires controlled correction.",
  },
  {
    type: "Stale or unknown content",
    example: "/opt/legacy-sync",
    interpretation:
      "The location alone does not prove risk, but unknown ownership, expired purpose, or unsupported software requires review.",
  },
];

const evidenceMatrix = [
  {
    source: "Directory listing",
    supports:
      "Names, file types, sizes, ownership, permissions, and sometimes timestamps.",
    limitation:
      "Does not prove file contents, business purpose, current use, or safety by itself.",
  },
  {
    source: "File metadata",
    supports:
      "Owner, group, permissions, timestamps, size, type, and link information.",
    limitation:
      "Timestamps may change for multiple reasons and do not prove who performed an action.",
  },
  {
    source: "Asset and role baseline",
    supports:
      "Which directories, applications, logs, and data locations should exist for the system role.",
    limitation:
      "May be incomplete or stale unless validated against current evidence.",
  },
  {
    source: "Service configuration",
    supports:
      "Which paths an application reads, writes, serves, logs to, or uses for data.",
    limitation:
      "Does not prove the current service process is active or every file is required.",
  },
  {
    source: "Process and open-file evidence",
    supports:
      "Which process is currently using a file or directory.",
    limitation:
      "Does not prove long-term ownership, approved purpose, or future use.",
  },
  {
    source: "Change and deployment records",
    supports:
      "Approved creation, modification, movement, removal, backup, and rollback activity.",
    limitation:
      "Does not prove no undocumented change occurred.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the path",
    detail:
      "Record the exact fictional absolute path, type, owner, group, permissions, size, and timestamps.",
  },
  {
    step: "2",
    title: "Connect it to system role",
    detail:
      "Ask whether the location fits the approved web, database, file, monitoring, workstation, or gateway role.",
  },
  {
    step: "3",
    title: "Find the using service or user",
    detail:
      "Correlate the path with a process, service, account, application, package, deployment, or backup record.",
  },
  {
    step: "4",
    title: "Assess sensitivity and exposure",
    detail:
      "Determine whether the location is private, shared, temporary, served publicly, backed up, or accessible across zones.",
  },
  {
    step: "5",
    title: "Compare with baseline and changes",
    detail:
      "Check expected paths, ownership, permissions, approved changes, timestamps, and lifecycle.",
  },
  {
    step: "6",
    title: "Recommend a controlled action",
    detail:
      "Document the owner, risk, evidence, authorization, safe move or correction, validation, and rollback.",
  },
];

const mistakes = [
  "Assuming a suspicious-looking filename proves malicious activity.",
  "Ignoring the full absolute path and reviewing only the filename.",
  "Treating a hidden file as automatically unsafe.",
  "Deleting temporary files without checking active processes, ownership, dependencies, or change windows.",
  "Moving a configuration file without understanding which service uses it.",
  "Assuming a recent timestamp proves who changed a file or why.",
  "Ignoring symbolic links and reviewing only the visible link path.",
  "Storing confidential information in a publicly served or broadly shared directory.",
  "Using real system paths or private filenames in a public portfolio.",
  "Changing files during an investigation before preserving metadata and original evidence.",
];

const quizQuestions = [
  {
    question:
      "Which path is absolute?",
    choices: [
      "/var/log/training-app.log",
      "logs/training-app.log",
      "../training-app.log",
      "./training-app.log",
    ],
    answer: 0,
    explanation:
      "An absolute path begins at the root directory.",
  },
  {
    question:
      "What does a filename beginning with a dot commonly indicate?",
    choices: [
      "It is normally hidden from basic directory listings.",
      "It is definitely malicious.",
      "It cannot be opened.",
      "It belongs to the root user.",
    ],
    answer: 0,
    explanation:
      "Dot-prefixed files are commonly hidden configuration or application files, but still require context.",
  },
  {
    question:
      "Which directory commonly stores system-wide configuration?",
    choices: [
      "/etc",
      "/tmp",
      "/home",
      "/media",
    ],
    answer: 0,
    explanation:
      "/etc commonly contains system-wide and service configuration.",
  },
  {
    question:
      "Why is /var/log important to defenders?",
    choices: [
      "It commonly contains system, authentication, service, and application logs.",
      "It always contains user passwords.",
      "It replaces monitoring tools.",
      "It is the only directory that can contain evidence.",
    ],
    answer: 0,
    explanation:
      "Logs are important evidence, but defenders still correlate them with other sources.",
  },
  {
    question:
      "What does file metadata prove?",
    choices: [
      "It supports facts such as owner, permissions, type, size, and timestamps, but not complete purpose or intent.",
      "It proves the file is safe.",
      "It proves who created the file in every case.",
      "It proves the file is actively used.",
    ],
    answer: 0,
    explanation:
      "Metadata is valuable evidence with important limits.",
  },
  {
    question:
      "A confidential internal note appears in a fictional web server's public content directory. What is the strongest response?",
    choices: [
      "Preserve evidence, confirm exposure and ownership, restrict access, and request an authorized move to an appropriate protected location.",
      "Publish the link so others can review it.",
      "Delete the entire website.",
      "Ignore it because it is only a text file.",
    ],
    answer: 0,
    explanation:
      "The file is misplaced in an exposed location and should be handled through controlled evidence preservation and correction.",
  },
  {
    question:
      "Why should defenders review a symbolic link's destination?",
    choices: [
      "The visible link may point to a different file or directory with different ownership, permissions, sensitivity, or purpose.",
      "Symbolic links are always malicious.",
      "Symbolic links cannot be logged.",
      "The destination never matters.",
    ],
    answer: 0,
    explanation:
      "The target determines what resource is actually accessed.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">
        Continue Module I2
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: I2.1 Linux Systems and Security Roles
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: I2.3 Users, Groups, and Permissions
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

function DirectoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Filesystem Map
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Common Linux Directories and Defensive Questions
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {directoryGuide.map((item) => (
          <div
            key={item.path}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-mono text-lg font-black text-cyan-100">
              {item.path}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.defenderQuestions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PathTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Path Interpretation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Location Changes the Defensive Meaning
      </h2>

      <div className="mt-6 grid gap-4">
        {pathTypes.map((item) => (
          <div
            key={item.type}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_0.9fr_1.5fr]"
          >
            <div>
              <p className="font-black text-cyan-100">{item.type}</p>
            </div>
            <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 font-mono text-sm text-blue-100">
              {item.example}
            </div>
            <p className="text-sm leading-6 text-slate-300">
              {item.interpretation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceLimits() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Filesystem Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review a File or Directory in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FilesDirectoriesAndPathsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.2 Files, Directories, and Paths
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Read fictional Linux filesystem paths, directories, metadata,
            ownership, service locations, temporary files, and evidence safely
            without changing system state.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Files, Directories, and Paths"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain a Linux system role, owner, baseline, package, service, and defensive purpose.",
            "I understand that a filename alone does not prove ownership, purpose, safety, or intent.",
            "I will preserve paths and metadata before recommending moves, permission changes, or removal.",
            "I will use only fictional directories, filenames, users, services, systems, logs, and organizations.",
            "I will not inspect, copy, move, delete, rename, or publish files from any real system without authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Same File Can Be Normal in One Location and Dangerous in Another"
        >
          <p className="leading-8">
            A configuration file in an approved service directory may be
            expected. The same file copied into a publicly served directory may
            expose internal settings. A temporary installer file may be normal
            during an update but suspicious months later. Defenders review the
            full path, owner, permissions, service relationship, timestamps,
            sensitivity, and change history.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The filename looks unusual, so delete it.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the exact path and metadata, identify the using user
                or service, compare the baseline and change history, and act
                only through authorized correction.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Filesystem Structure Helps Defenders Understand Purpose, Exposure, and Evidence"
        >
          <p className="leading-8">
            Linux paths reveal where configuration, logs, user data,
            applications, temporary files, backups, and service content are
            stored. That location helps defenders connect a file with its
            owner, process, application, sensitivity, access path, and expected
            lifecycle.
          </p>
        </SectionCard>

        <DirectoryGuide />
        <PathTypeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Always Review the Full Path and Context"
        >
          <p className="leading-8">
            The name report.txt says very little by itself. The path
            /home/student-analyst/report.txt suggests approved user work, while
            /srv/training-web/public/report.txt suggests the file may be served
            to application users. Defenders also review symbolic-link targets,
            mounts, ownership, permissions, timestamps, service use, and change
            records.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> record paths
            as complete fictional absolute paths so another defender can
            understand exactly which object was reviewed.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Linux Filesystem and Path Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
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

        <EvidenceLimits />
        <ReviewWorkflow />

        <FakeDashboardCard
          title="Fake Linux Filesystem Review Dashboard"
          subtitle="Training dashboard for the fictional Harborview Learning Portal."
          metrics={[
            {
              label: "Reviewed paths",
              value: "34",
              note: "Configuration, logs, service data, user files, temporary content, and optional software were compared.",
            },
            {
              label: "Misplaced sensitive files",
              value: "1",
              note: "An internal deployment note appears inside a publicly served directory.",
            },
            {
              label: "Unknown legacy directories",
              value: "2",
              note: "Two /opt locations have no confirmed owner, active package, or current dependency.",
            },
          ]}
        />

        <FakeAlertCard
          title="Internal Deployment Notes Stored in Public Web Content"
          severity="High"
          time="01:24 PM"
          source="Fake Linux Filesystem Monitor"
          details="The fictional file /srv/training-web/public/internal-deployment-notes.txt is owned by the web-content group and readable through the public content path. The document is classified as internal and the approved deployment process stores internal notes under /srv/training-web/private-docs."
          recommendation="Preserve path, metadata, access, owner, classification, web-service, and deployment evidence; restrict exposure; then request an authorized move to the approved protected location with link validation and rollback."
        />

        <FakeLogPanel
          title="Fake Filesystem Evidence Timeline"
          logs={[
            "12:58:00 BASELINE public_path='/srv/training-web/public' classification='public-content-only'",
            "13:02:11 FILE path='/srv/training-web/public/internal-deployment-notes.txt' owner='deploy-user' group='web-content'",
            "13:02:11 METADATA permissions='0644' modified='today_12:41' size='18KB'",
            "13:04:29 CLASSIFICATION file='internal-deployment-notes.txt' sensitivity='internal'",
            "13:06:42 WEB_SERVICE document_root='/srv/training-web/public' state='running'",
            "13:09:18 ACCESS_TEST fictional_url='/internal-deployment-notes.txt' result='served'",
            "13:14:06 DEPLOYMENT expected_internal_docs_path='/srv/training-web/private-docs'",
            "13:18:53 OWNER_CONFIRMATION public_location='not_approved' move_required='true'",
            "13:24:17 CORRELATION finding='misplaced_internal_file_in_public_path' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Filesystem Conclusion Is Best Supported?"
          evidence={[
            "The fictional web document root is /srv/training-web/public.",
            "The file internal-deployment-notes.txt is stored inside that directory.",
            "Its classification is internal rather than public.",
            "The web service successfully serves the file through the fictional public path.",
            "The approved deployment process stores internal notes under /srv/training-web/private-docs.",
            "The owner confirms the public location is not approved.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The internal document is misplaced and exposed through the public web path; preserve evidence, restrict access, and request an authorized move to the approved protected location with validation and rollback.",
            "The entire server is definitely compromised.",
            "Publish the file link so more people can inspect it.",
            "Delete every file in the public directory.",
          ]}
          bestAnswer={0}
          explanation="The evidence directly confirms a classification and location mismatch. The correction should preserve evidence, reduce exposure, move the file safely, validate application links, and document the change."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Filesystem Analysis"
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
          eyebrow="Safe Practice Lab"
          title="Map a Fictional Linux Filesystem"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Training Web Server
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review a supplied fictional directory tree containing
                configuration, service data, logs, user files, packages,
                temporary files, mounted backups, symbolic links, and legacy
                application directories.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Label every path as system, service, user, temporary, mounted, linked, or legacy.</li>
                <li>Record owner, group, permissions, size, and timestamps.</li>
                <li>Connect important paths to services, users, packages, and backups.</li>
                <li>Identify misplaced, stale, unknown, sensitive, or exposed content.</li>
                <li>State what each item confirms and what remains uncertain.</li>
                <li>Prioritize findings by sensitivity, exposure, dependency, and owner.</li>
                <li>Write an authorized correction, validation, and rollback plan.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This is a read-only fictional evidence lab. Do not browse, copy,
            rename, move, delete, upload, or inspect files on a real system,
            school device, website, server, cloud account, or virtual machine.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Large File Appears in /tmp During an Approved Update"
          scenario="A fictional server creates /tmp/training-update-4821 while an approved package update is running. The file is owned by the package service, its timestamp matches the change window, and the update remains active."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve metadata, correlate it with the active update and change record, and verify approved cleanup after the update completes.",
              outcome:
                "Best defensive choice. The evidence supports expected temporary activity during the authorized update.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the file immediately because everything in /tmp is unsafe.",
              outcome:
                "Unsafe. Removing an active temporary file may interrupt the update and destroy evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare the server compromised because the file is large.",
              outcome:
                "Unsupported. Size alone does not prove hostile activity.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Symbolic Link Points Outside the Approved Service Directory"
          scenario="A fictional web-content link under /srv/training-web/public points to /home/deploy-user/private-notes. The target contains internal deployment documentation."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve link and target evidence, restrict exposure, confirm ownership and dependencies, and request an authorized correction to remove the unsafe reference.",
              outcome:
                "Best defensive choice. The symbolic link creates an unintended path to sensitive content.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Review only the visible link name and ignore the target.",
              outcome:
                "Weak analysis. The target determines the actual resource being exposed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Make every home directory publicly readable so the link works consistently.",
              outcome:
                "Unsafe and excessively broad.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Linux Filesystem Review Checklist"
          items={[
            "I record the complete absolute path rather than only the filename.",
            "I identify file type, owner, group, permissions, size, timestamps, and symbolic-link target when relevant.",
            "I connect the path to the approved system role, user, service, process, package, backup, or deployment.",
            "I determine whether the location is private, shared, temporary, mounted, served publicly, or broadly accessible.",
            "I compare the path and metadata with the approved baseline and recent changes.",
            "I distinguish expected, temporary, stale, unknown, misplaced, sensitive, and exposed content.",
            "I state what the evidence confirms and what it cannot prove alone.",
            "I preserve original metadata and paths before recommending changes.",
            "I include authorization, ownership, validation, rollback, and documentation updates.",
            "I use fictional evidence and never inspect or publish real filesystem details.",
          ]}
        />

        <MiniQuiz
          title="I2.2 Mini Quiz: Files, Directories, and Paths"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Linux Filesystem Security Map for a learning-portal server. Include /etc, /var/log, /home, /root, /srv, /tmp, /usr, /var, /opt, and one mounted backup location. For each path, show purpose, owner, sensitivity, expected contents, service relationship, permissions concept, logging or backup need, and review questions."
          tips={[
            "Use only fictional hostnames, paths, users, groups, services, packages, files, logs, and organizations.",
            "Include one misplaced sensitive file, one symbolic-link concern, one expected temporary file, and one stale legacy directory.",
            "Mark confirmed facts, likely explanations, missing evidence, and recommended actions separately.",
            "Do not include real usernames, internal paths, filenames, credentials, backups, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Linux uses a single hierarchical filesystem beginning at the root directory.",
            "Absolute paths identify the exact location from root; relative paths depend on the current working directory.",
            "A filename gains defensive meaning from its full path, ownership, permissions, service use, sensitivity, and history.",
            "Hidden files, temporary files, and symbolic links are not automatically unsafe, but they require context.",
            "Directory listings and metadata are useful evidence with important limits.",
            "Safe filesystem corrections preserve evidence and use authorization, dependency review, validation, rollback, and documentation.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}