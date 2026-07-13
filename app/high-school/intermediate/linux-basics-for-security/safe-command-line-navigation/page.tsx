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
const previousLesson = `${modulePath}/processes-and-services`;
const nextLesson = `${modulePath}/linux-logs-and-system-clues`;

const objectives = [
  "Explain how a Linux shell, prompt, current directory, command, option, argument, and output fit together.",
  "Use safe read-only navigation concepts to identify location, list directory contents, inspect file type, and review metadata.",
  "Distinguish observation commands from commands that modify, delete, move, overwrite, or reconfigure system state.",
  "Interpret fictional terminal output while separating confirmed facts, likely explanations, missing evidence, and assumptions.",
  "Document a safe command-line investigation plan that uses authorization, scope, evidence preservation, and stopping conditions.",
];

const vocabulary = [
  [
    "Shell",
    "A command interpreter that accepts typed commands and returns output or errors.",
  ],
  [
    "Prompt",
    "The text shown by a shell before a command is entered, often including user, host, or directory context.",
  ],
  [
    "Command",
    "The program or built-in instruction requested from the shell.",
  ],
  [
    "Option",
    "A flag that changes how a command behaves or what information it displays.",
  ],
  [
    "Argument",
    "A value supplied to a command, such as a fictional path or filename.",
  ],
  [
    "Current working directory",
    "The directory where the shell is currently operating.",
  ],
  [
    "Standard output",
    "Normal information returned by a command.",
  ],
  [
    "Standard error",
    "Error or diagnostic information returned when a command cannot complete as requested.",
  ],
  [
    "Read-only command",
    "A command used only to observe information without intentionally changing system state.",
  ],
  [
    "Path expansion",
    "The shell process of interpreting shortcuts, wildcards, variables, or relative paths before execution.",
  ],
  [
    "Command history",
    "A record of previously entered shell commands that may support authorized review.",
  ],
  [
    "Stopping condition",
    "A rule that tells an analyst when to stop, preserve evidence, and escalate rather than continue.",
  ],
];

const safeCommands = [
  {
    command: "pwd",
    purpose:
      "Shows the current working directory.",
    evidence:
      "Confirms the shell's present location at the time of the command.",
    limitation:
      "Does not list files or prove how the user reached that directory.",
  },
  {
    command: "ls",
    purpose:
      "Lists directory entries using the supplied fictional path and options.",
    evidence:
      "May show names, types, ownership, permissions, size, and timestamps.",
    limitation:
      "Does not prove file contents, business purpose, or whether every entry is safe.",
  },
  {
    command: "cd",
    purpose:
      "Changes the shell's current directory without changing file contents.",
    evidence:
      "Supports controlled navigation to an authorized fictional location.",
    limitation:
      "It changes shell context, so analysts must keep track of the new location.",
  },
  {
    command: "file",
    purpose:
      "Reports a file-type interpretation based on the supplied fictional object.",
    evidence:
      "May distinguish text, directory, link, archive, image, executable format, or other type.",
    limitation:
      "Does not prove trustworthiness, ownership, purpose, or complete content.",
  },
  {
    command: "stat",
    purpose:
      "Displays detailed fictional metadata for a file or directory.",
    evidence:
      "May show type, size, ownership, permissions, inode, and timestamps.",
    limitation:
      "Metadata alone does not prove who performed an action or why.",
  },
  {
    command: "whoami",
    purpose:
      "Shows the current effective username.",
    evidence:
      "Confirms the identity context under which the shell is operating.",
    limitation:
      "Does not prove authorization for every file, service, or command.",
  },
  {
    command: "id",
    purpose:
      "Shows the current user's identity and group memberships.",
    evidence:
      "Supports analysis of which owner or group permission sets may apply.",
    limitation:
      "Does not prove every membership is still approved or required.",
  },
  {
    command: "head / tail / less",
    purpose:
      "Displays a limited or paged view of supplied fictional text evidence.",
    evidence:
      "Supports safe review of logs, configuration excerpts, and reports.",
    limitation:
      "May show only part of a file and can miss important surrounding context.",
  },
];

const commandAnatomy = [
  {
    part: "Prompt context",
    example: "analyst@training-host:/var/log$",
    meaning:
      "Suggests the fictional user, host, and current directory, but must still be verified.",
  },
  {
    part: "Command",
    example: "ls",
    meaning:
      "The requested program or shell built-in.",
  },
  {
    part: "Option",
    example: "-l",
    meaning:
      "Requests a long-format listing with additional metadata.",
  },
  {
    part: "Argument",
    example: "/var/log/training-app",
    meaning:
      "The fictional directory or object the command should inspect.",
  },
  {
    part: "Output",
    example: "-rw-r----- app-user log-team 4096 training-app.log",
    meaning:
      "Returned evidence that requires interpretation and correlation.",
  },
];

const evidenceMatrix = [
  {
    source: "Prompt and pwd output",
    supports:
      "Current user, host label, and working-directory context at a specific moment.",
    limitation:
      "Prompt text can be customized and should not be treated as complete proof by itself.",
  },
  {
    source: "Directory listing",
    supports:
      "Names, object types, ownership, permissions, size, and timestamps when requested.",
    limitation:
      "Does not prove content, purpose, active use, or safety.",
  },
  {
    source: "file and stat output",
    supports:
      "File type, metadata, ownership, permissions, size, and timestamp context.",
    limitation:
      "Does not prove intent, authorization, or complete provenance.",
  },
  {
    source: "whoami and id output",
    supports:
      "Effective identity and group membership during the session.",
    limitation:
      "Does not prove that access is approved or that every membership is still needed.",
  },
  {
    source: "Text preview",
    supports:
      "A limited view of supplied fictional logs, reports, or configuration text.",
    limitation:
      "A preview may omit relevant lines before, after, or elsewhere in the file.",
  },
  {
    source: "Command history or session record",
    supports:
      "Which commands were entered and in what order during an authorized session.",
    limitation:
      "May be incomplete, altered by retention, or missing actions performed through other tools.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Confirm authorization and scope",
    detail:
      "Identify the fictional system, approved objective, allowed paths, allowed commands, owner, and stopping conditions.",
  },
  {
    step: "2",
    title: "Verify identity and location",
    detail:
      "Use supplied fictional whoami, id, prompt, and pwd output before interpreting any directory evidence.",
  },
  {
    step: "3",
    title: "Navigate deliberately",
    detail:
      "Move only through approved fictional paths and record each location change.",
  },
  {
    step: "4",
    title: "Observe with narrow commands",
    detail:
      "List, identify, and preview only the minimum fictional evidence needed for the task.",
  },
  {
    step: "5",
    title: "Preserve exact output",
    detail:
      "Record command, options, path, timestamp, output, errors, and interpretation separately.",
  },
  {
    step: "6",
    title: "Stop and escalate when needed",
    detail:
      "Do not continue if scope is unclear, sensitive data appears, permissions fail, or a modifying action would be required.",
  },
];

const mistakes = [
  "Running commands before confirming the current user, host, directory, and authorized scope.",
  "Copying a command without understanding its options, arguments, path expansion, or effect.",
  "Assuming a command is safe because its name looks familiar.",
  "Using broad wildcards when a precise fictional path would provide enough evidence.",
  "Reading more data than the approved task requires.",
  "Ignoring permission-denied errors and attempting to bypass access controls.",
  "Treating partial output from head or tail as the complete file.",
  "Mixing observation and interpretation in the same notes.",
  "Continuing after unexpected sensitive information appears.",
  "Publishing real terminal prompts, usernames, hostnames, paths, logs, or command history in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What does pwd show?",
    choices: [
      "The current working directory.",
      "The current user's password.",
      "Every running process.",
      "The package repository.",
    ],
    answer: 0,
    explanation:
      "pwd reports the shell's current working directory.",
  },
  {
    question:
      "Which command commonly shows the current effective username?",
    choices: [
      "whoami",
      "file",
      "stat",
      "pwd",
    ],
    answer: 0,
    explanation:
      "whoami reports the current effective username.",
  },
  {
    question:
      "Why should an analyst record the full command and path?",
    choices: [
      "So another defender can understand exactly what was requested and which object was reviewed.",
      "So the command automatically becomes safe.",
      "So permissions are bypassed.",
      "So the output cannot contain errors.",
    ],
    answer: 0,
    explanation:
      "Precise documentation improves reproducibility and evidence quality.",
  },
  {
    question:
      "What does a permission-denied error mean?",
    choices: [
      "The current identity was not permitted to complete the requested access under the observed conditions.",
      "The file is definitely malicious.",
      "The analyst should bypass the control.",
      "The directory does not exist in every case.",
    ],
    answer: 0,
    explanation:
      "Permission denied is an access-control result, not proof of malicious activity.",
  },
  {
    question:
      "Why can a prompt not be treated as complete proof of user and host identity?",
    choices: [
      "Prompt text may be customized and should be verified with additional evidence.",
      "Prompts never include useful context.",
      "Prompts delete files.",
      "Prompts always show the root user.",
    ],
    answer: 0,
    explanation:
      "Prompt context is helpful but should be corroborated.",
  },
  {
    question:
      "Which response is safest when an unexpected sensitive file appears during a fictional review?",
    choices: [
      "Stop, preserve the observed path and metadata, avoid opening more content, and escalate according to scope.",
      "Copy the entire file.",
      "Publish the path for help.",
      "Change its permissions immediately.",
    ],
    answer: 0,
    explanation:
      "Unexpected sensitive data is a stopping condition that requires controlled escalation.",
  },
  {
    question:
      "What is the main risk of interpreting only the last few log lines?",
    choices: [
      "Important earlier context, causes, or related events may be missing.",
      "The command always changes the file.",
      "The user identity changes.",
      "The service automatically stops.",
    ],
    answer: 0,
    explanation:
      "A limited preview may omit essential context.",
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
          Previous: I2.4 Processes and Services
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
          Next: I2.6 Linux Logs and System Clues
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

function SafeCommandGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Read-Only Command Guide
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Observe the Minimum Evidence Needed
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {safeCommands.map((item) => (
          <div
            key={item.command}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="inline-flex rounded-xl border border-blue-400/30 bg-blue-400/10 px-4 py-2 font-mono text-lg font-black text-blue-100">
              {item.command}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
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

function CommandAnatomyGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Command Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read Each Terminal Line Carefully
      </h2>

      <div className="mt-6 grid gap-4">
        {commandAnatomy.map((item) => (
          <div
            key={item.part}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_0.9fr_1.4fr]"
          >
            <p className="font-black text-cyan-100">{item.part}</p>
            <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 font-mono text-sm text-blue-100">
              {item.example}
            </div>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
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
        What Terminal Output Can and Cannot Prove
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
        Safe Navigation Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Use a Controlled Six-Step Terminal Process
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

export default function SafeCommandLineNavigationPage() {
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
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.5 Safe Command-Line Navigation
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Read fictional Linux terminal prompts, commands, paths, metadata,
            listings, text previews, identities, errors, and session evidence
            using a controlled read-only workflow.
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
          lessonTitle="Safe Command-Line Navigation"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain Linux paths, users, groups, permissions, processes, services, and system roles.",
            "I understand that every command has a context, effect, scope, and evidence limitation.",
            "I will verify user, host, directory, authorization, and stopping conditions before reviewing output.",
            "I will use only fictional commands, prompts, users, hosts, paths, files, logs, and organizations.",
            "I will not run commands on a real device, server, cloud system, website, virtual machine, or school computer without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Safe Terminal Work Begins Before the First Command"
        >
          <p className="leading-8">
            Defenders confirm authorization, user identity, host, current
            directory, objective, allowed paths, and stopping conditions before
            entering a command. Even a familiar command can create risk when its
            options, wildcard expansion, arguments, permissions, or target are
            misunderstood.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Paste the command and see what happens.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Understand the command, option, argument, path, expected output,
                effect, authorization, and stopping condition before proceeding.”
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
          title="Terminal Output Can Be Valuable Evidence When Collected Carefully"
        >
          <p className="leading-8">
            A command-line session can show exact paths, ownership, permissions,
            types, timestamps, identity, and limited file content. Poorly scoped
            work can expose sensitive information, alter evidence, cross
            authorization boundaries, or create misleading conclusions.
          </p>
        </SectionCard>

        <CommandAnatomyGuide />
        <SafeCommandGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Observation, Interpretation, and Action Are Different Steps"
        >
          <p className="leading-8">
            The command produces output. The analyst interprets that output.
            Any corrective action requires separate authorization, planning,
            validation, and rollback. A read-only review should not quietly turn
            into a configuration change.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> write terminal
            notes in four columns: exact fictional command, exact output,
            evidence meaning, and remaining questions.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Linux Shell and Navigation Terms
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
          title="Fake Safe Terminal Review Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Linux Evidence Lab."
          metrics={[
            {
              label: "Authorized read-only commands",
              value: "8",
              note: "The session scope permits identity, location, listing, type, metadata, and limited text review.",
            },
            {
              label: "Unexpected sensitive paths",
              value: "1",
              note: "A private-key backup filename appears in a broadly readable training directory.",
            },
            {
              label: "Stopped sessions",
              value: "1",
              note: "The analyst correctly stopped when the supplied scope did not include opening sensitive file content.",
            },
          ]}
        />

        <FakeAlertCard
          title="Sensitive Backup Filename Appears Outside Approved Review Scope"
          severity="High"
          time="10:28 AM"
          source="Fake Terminal Session Monitor"
          details="During an authorized fictional directory listing of /srv/training-app/reports, the analyst observes the filename old-service-private-key.backup with broad read permissions. The approved scope allows path and metadata review but does not authorize opening or copying sensitive content."
          recommendation="Preserve the exact command, path, listing, ownership, permissions, and timestamp; do not open or copy the file; stop and escalate to the owner for authorized containment and review."
        />

        <FakeLogPanel
          title="Fake Read-Only Terminal Session"
          logs={[
            "10:21:02 SCOPE host='training-linux-05' paths='/srv/training-app/reports' mode='read-only'",
            "10:21:25 PROMPT 'analyst@training-linux-05:~$'",
            "10:21:31 COMMAND 'whoami' OUTPUT 'analyst'",
            "10:21:38 COMMAND 'pwd' OUTPUT '/home/analyst'",
            "10:22:04 COMMAND 'cd /srv/training-app/reports' RESULT 'success'",
            "10:22:09 COMMAND 'pwd' OUTPUT '/srv/training-app/reports'",
            "10:22:21 COMMAND 'ls -l' OUTPUT includes='old-service-private-key.backup'",
            "10:22:21 METADATA owner='legacy-admin' group='staff' permissions='rw-r--r--'",
            "10:23:14 SCOPE_CHECK content_review='not_authorized'",
            "10:28:03 ACTION session='stopped' escalation='owner_and_security_review'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Terminal Decision Is Best Supported?"
          evidence={[
            "The fictional session is authorized only for read-only path and metadata review.",
            "The analyst verifies the user and current directory.",
            "A directory listing reveals old-service-private-key.backup.",
            "The file is owned by a legacy account and is broadly readable.",
            "The approved scope does not allow opening or copying sensitive content.",
            "The analyst has enough metadata to document and escalate the finding.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Preserve the exact command and metadata, do not open or copy the file, stop the session, and escalate for authorized containment and review.",
            "Open the file to determine whether the key still works.",
            "Copy the file into the analyst's home directory.",
            "Change the permissions immediately without approval.",
          ]}
          bestAnswer={0}
          explanation="The finding is important, but the current authorization ends at metadata review. The correct response is evidence preservation, stopping, and controlled escalation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Command-Line Safety"
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
          title="Complete a Fictional Read-Only Navigation Challenge"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Northstar Linux Evidence Workspace
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review a supplied fictional terminal transcript containing
                prompts, identity checks, path changes, listings, file-type
                output, metadata, text previews, permission errors, and stopping
                conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Verify the fictional user, host, scope, and starting directory.</li>
                <li>Separate command, option, argument, output, and error.</li>
                <li>Track every current-directory change.</li>
                <li>Identify which outputs confirm identity, type, ownership, permissions, and timestamps.</li>
                <li>Mark incomplete previews and evidence limitations.</li>
                <li>Identify the correct stopping point.</li>
                <li>Write a read-only evidence summary and escalation note.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Analyze only the supplied fictional transcript. Do not reproduce
            these commands against a real device, server, virtual machine,
            cloud system, website, school computer, or account unless you have
            explicit authorization and a controlled lab environment.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Permission-Denied Error Appears"
          scenario="A fictional read-only session receives a permission-denied result while listing a protected application directory. The current scope does not authorize elevated access."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the exact command and error, document the access boundary, and request authorized evidence from the owner if it is still needed.",
              outcome:
                "Best defensive choice. The access control should be respected and the missing evidence obtained through approved channels.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Attempt to bypass the access control.",
              outcome:
                "Unsafe and outside the approved scope.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Conclude that the directory is malicious.",
              outcome:
                "Unsupported. A permission denial only confirms that the current identity lacks access.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Text Preview Shows Only the Final Ten Log Lines"
          scenario="A fictional tail output shows repeated service failures, but the supplied evidence does not include the earlier startup and configuration events."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the failures as confirmed but request the authorized surrounding timeline before deciding the cause.",
              outcome:
                "Best defensive choice. The current output supports failure events but not the complete explanation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the final line to be the root cause.",
              outcome:
                "Unsupported. Limited output may omit the initiating event.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the failures because the full file is unavailable.",
              outcome:
                "Weak analysis. The visible failures remain valid evidence with documented limits.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Safe Command-Line Navigation Checklist"
          items={[
            "I confirm the fictional system, user, host, objective, allowed paths, commands, and stopping conditions.",
            "I verify identity and current directory before interpreting output.",
            "I understand each command, option, argument, wildcard, and expected effect.",
            "I use the narrowest read-only command and path needed for the approved task.",
            "I record exact commands, output, errors, timestamps, and directory changes.",
            "I separate observation, interpretation, missing evidence, and recommendation.",
            "I respect permission boundaries and never attempt to bypass access controls.",
            "I stop when sensitive information, unclear scope, or a modifying action appears.",
            "I preserve evidence and escalate through the owner or approved process.",
            "I use fictional evidence and never publish real terminal, host, path, account, or log details.",
          ]}
        />

        <MiniQuiz
          title="I2.5 Mini Quiz: Safe Command-Line Navigation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Safe Linux Terminal Session Workbook. Include authorization scope, user and host verification, starting directory, eight read-only commands, exact fictional output, evidence meaning, limitations, one permission error, one sensitive-data stopping condition, and a final escalation note."
          tips={[
            "Use only fictional users, hosts, paths, files, commands, outputs, logs, and organizations.",
            "Keep every command read-only and explain its expected effect before showing output.",
            "Separate exact output from your interpretation and remaining questions.",
            "Do not include real terminal history, hostnames, usernames, paths, credentials, keys, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Safe command-line work begins with authorization, identity, host, directory, scope, and stopping conditions.",
            "Commands contain a command name, options, arguments, and path context.",
            "Read-only output still has evidence limitations and may expose sensitive information.",
            "Prompts, listings, metadata, identity output, and text previews should be correlated rather than trusted alone.",
            "Permission errors are access-control evidence, not invitations to bypass controls.",
            "Strong defenders preserve exact output, stop when scope ends, and separate observation from action.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}