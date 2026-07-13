import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/linux-basics-for-security`;

const questions = [
  {
    "question": "What is the strongest reason to identify a Linux system's approved role before reviewing it?",
    "choices": [
      "The role defines which users, services, packages, ports, logs, and controls should normally exist.",
      "The role proves every running process is safe.",
      "The role replaces technical evidence.",
      "The role makes ownership unnecessary."
    ],
    "answer": 0,
    "explanation": "A system role provides the baseline used to judge expected and unnecessary behavior."
  },
  {
    "question": "What is a Linux distribution?",
    "choices": [
      "A packaged operating system combining the Linux kernel with tools, libraries, repositories, and defaults.",
      "Only a graphical theme.",
      "Only a hardware driver.",
      "A single user account."
    ],
    "answer": 0,
    "explanation": "A distribution combines the kernel with the surrounding operating-system ecosystem."
  },
  {
    "question": "Which statement about a running service is most accurate?",
    "choices": [
      "It proves the service is active, but not that it is required, secure, owned, or correctly configured.",
      "It proves the service is approved.",
      "It proves the system is compromised.",
      "It proves the service is internet-facing."
    ],
    "answer": 0,
    "explanation": "Running state is only one part of a complete defensive review."
  },
  {
    "question": "Which path is absolute?",
    "choices": [
      "/var/log/training-app.log",
      "logs/training-app.log",
      "../training-app.log",
      "./training-app.log"
    ],
    "answer": 0,
    "explanation": "An absolute path begins at the root directory."
  },
  {
    "question": "Which directory commonly stores system-wide configuration files?",
    "choices": [
      "/etc",
      "/tmp",
      "/home",
      "/media"
    ],
    "answer": 0,
    "explanation": "/etc commonly contains system-wide and service configuration."
  },
  {
    "question": "Why should defenders review a symbolic link's destination?",
    "choices": [
      "The visible link may point to a different object with different ownership, permissions, sensitivity, or exposure.",
      "Symbolic links are always malicious.",
      "The destination never matters.",
      "Symbolic links cannot be logged."
    ],
    "answer": 0,
    "explanation": "The target determines which resource is actually accessed."
  },
  {
    "question": "What does rw-r----- mean?",
    "choices": [
      "The owner can read and write, the group can read, and others have no access.",
      "Everyone has full access.",
      "Only others can write.",
      "The file is executable by everyone."
    ],
    "answer": 0,
    "explanation": "The three permission triplets represent owner, group, and others."
  },
  {
    "question": "Why is execute permission important on a directory?",
    "choices": [
      "It controls the ability to traverse the directory path and access entries.",
      "It automatically runs every file inside.",
      "It changes the group owner.",
      "It proves the directory is public."
    ],
    "answer": 0,
    "explanation": "Directory execute permission supports traversal rather than running the directory."
  },
  {
    "question": "Which account should normally receive only the narrow permissions required by one application?",
    "choices": [
      "A service account.",
      "A shared administrator account.",
      "Every standard user.",
      "A disabled account."
    ],
    "answer": 0,
    "explanation": "A service account should be limited to the exact resources its application needs."
  },
  {
    "question": "What is a Linux process?",
    "choices": [
      "A running instance of a program with its own identifier, user context, state, and resources.",
      "Only a file stored on disk.",
      "A user group.",
      "A network address."
    ],
    "answer": 0,
    "explanation": "A process is active execution rather than only the program file itself."
  },
  {
    "question": "Why is a process's parent useful evidence?",
    "choices": [
      "It helps explain what launched the process and the surrounding execution chain.",
      "It proves the child process is safe.",
      "It replaces service logs.",
      "It identifies the default gateway."
    ],
    "answer": 0,
    "explanation": "Parent-child relationships provide important execution context."
  },
  {
    "question": "A service repeatedly restarts after a configuration change. What is the strongest response?",
    "choices": [
      "Preserve status and logs, compare the approved change and dependencies, and use authorized correction or rollback with validation.",
      "Delete the service immediately.",
      "Disable all monitoring.",
      "Assume the system is compromised."
    ],
    "answer": 0,
    "explanation": "A restart loop requires evidence, dependency review, and controlled recovery."
  },
  {
    "question": "What does pwd show?",
    "choices": [
      "The current working directory.",
      "The current user's password.",
      "Every running process.",
      "The package repository."
    ],
    "answer": 0,
    "explanation": "pwd reports the shell's current working directory."
  },
  {
    "question": "Which command commonly shows the current effective username?",
    "choices": [
      "whoami",
      "file",
      "stat",
      "pwd"
    ],
    "answer": 0,
    "explanation": "whoami reports the current effective username."
  },
  {
    "question": "What is the safest response to a permission-denied error during a read-only review?",
    "choices": [
      "Preserve the exact command and error, respect the access boundary, and request authorized evidence if still needed.",
      "Attempt to bypass the control.",
      "Conclude the directory is malicious.",
      "Change permissions immediately."
    ],
    "answer": 0,
    "explanation": "Permission denial is an access-control result and should be handled through approved channels."
  },
  {
    "question": "Why should defenders correlate multiple Linux log sources?",
    "choices": [
      "Different sources provide different parts of the identity, process, service, application, network, and change story.",
      "Every source records identical information.",
      "Correlation automatically proves intent.",
      "One source is never useful."
    ],
    "answer": 0,
    "explanation": "Multiple sources provide complementary evidence and reveal gaps or contradictions."
  },
  {
    "question": "Why must time zones and clock offsets be reviewed?",
    "choices": [
      "They affect the correct ordering and interpretation of events.",
      "They change file permissions.",
      "They identify the system owner.",
      "They prove every log is complete."
    ],
    "answer": 0,
    "explanation": "Misaligned time can create false event sequences."
  },
  {
    "question": "What does a failed authentication event prove?",
    "choices": [
      "An authentication attempt failed under the recorded conditions.",
      "The account was definitely attacked.",
      "The system is compromised.",
      "The user intentionally entered the wrong password."
    ],
    "answer": 0,
    "explanation": "The result is confirmed, but cause and intent require more evidence."
  },
  {
    "question": "What is a Linux package repository?",
    "choices": [
      "An approved source of software packages and metadata used by a package manager.",
      "A user home directory.",
      "A running process.",
      "A firewall rule."
    ],
    "answer": 0,
    "explanation": "Repositories provide managed package sources and metadata."
  },
  {
    "question": "Why does an installed vulnerable package not automatically prove active exposure?",
    "choices": [
      "Feature use, configuration, reachability, version, and compensating controls still require review.",
      "Installed packages cannot contain vulnerabilities.",
      "Only kernels require updates.",
      "Package versions never matter."
    ],
    "answer": 0,
    "explanation": "Exposure depends on how the package is used and configured."
  },
  {
    "question": "What is the purpose of a maintenance window?",
    "choices": [
      "To provide an approved period for controlled change, validation, and rollback.",
      "To disable monitoring.",
      "To make every update automatic.",
      "To remove the need for backups."
    ],
    "answer": 0,
    "explanation": "A maintenance window creates controlled conditions for change."
  },
  {
    "question": "Which evidence best confirms that a Linux update succeeded?",
    "choices": [
      "Package version, package logs, service health, application tests, and monitoring reviewed together.",
      "Only the package-manager success message.",
      "Only the reboot time.",
      "Only the advisory title."
    ],
    "answer": 0,
    "explanation": "Technical installation and functional validation both matter."
  },
  {
    "question": "An expired temporary account still has write access to production content. What is the strongest next step?",
    "choices": [
      "Preserve account and access evidence, confirm no current need remains, and request authorized disablement and group cleanup.",
      "Give it administrator access for easier monitoring.",
      "Ignore it because the account is inactive.",
      "Delete every file the account could access."
    ],
    "answer": 0,
    "explanation": "Expired access should be removed through controlled lifecycle management."
  },
  {
    "question": "An internal document is stored in a publicly served directory. What is the strongest response?",
    "choices": [
      "Preserve evidence, restrict exposure, and request an authorized move to an approved protected location with validation.",
      "Publish the link for review.",
      "Delete the entire website.",
      "Ignore it because it is only a text file."
    ],
    "answer": 0,
    "explanation": "The document is misplaced and exposed, so containment and controlled correction are appropriate."
  },
  {
    "question": "A Linux review finds an expired account, a stale service, and a pending relevant update. What is the best overall approach?",
    "choices": [
      "Prioritize by exposure, sensitivity, business impact, confidence, dependencies, and readiness, then apply one controlled change at a time.",
      "Fix only the easiest item.",
      "Make every change at once.",
      "Ignore all findings until no evidence gaps remain."
    ],
    "answer": 0,
    "explanation": "Integrated review balances urgency, evidence quality, dependencies, and safe change sequencing."
  }
];

const domains = [
  ["Questions 1–3", "Linux systems, distributions, roles, and baselines"],
  ["Questions 4–6", "Files, directories, paths, and symbolic links"],
  ["Questions 7–9", "Users, groups, ownership, and permissions"],
  ["Questions 10–12", "Processes, services, dependencies, and recovery"],
  ["Questions 13–15", "Safe command-line navigation and scope"],
  ["Questions 16–18", "Logs, timelines, authentication, and evidence gaps"],
  ["Questions 19–22", "Packages, repositories, updates, and validation"],
  ["Questions 23–25", "Integrated Linux security analysis and prioritization"],
];

const remediation = [
  ["1–3", "Review I2.1: Linux Systems and Security Roles"],
  ["4–6", "Review I2.2: Files, Directories, and Paths"],
  ["7–9", "Review I2.3: Users, Groups, and Permissions"],
  ["10–12", "Review I2.4: Processes and Services"],
  ["13–15", "Review I2.5: Safe Command-Line Navigation"],
  ["16–18", "Review I2.6: Linux Logs and System Clues"],
  ["19–22", "Review I2.7: Package Updates and System Care"],
  ["23–25", "Review I2.8: Linux Security Basics Lab"],
];

export default function I2ModuleTestPage() {
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
            <span className="rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-yellow-200">
              25-Question Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2 Module Test: Linux Basics for Security
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your understanding of Linux systems, paths, permissions,
            processes, services, safe terminal navigation, logs, package
            management, updates, and integrated defensive analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={modulePath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Module
            </Link>
            <Link
              href={`${modulePath}/linux-security-basics-lab`}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Review I2.8
            </Link>
            <Link
              href={trackPath}
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Module Test"
          lessonNumber={9}
          totalLessons={9}
        />

        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed all eight I2 lessons.",
            "I will answer every question before submitting.",
            "I understand that answers and explanations stay hidden until submission.",
            "I will use my result to identify weak domains rather than focusing only on the total score.",
            "I understand that every system, account, path, service, package, and log in this test is fictional.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-200">
            Test Instructions
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Complete all 25 questions in one focused attempt
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
              <p className="font-black text-cyan-100">Recommended process</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
                <li>Read the full question and every answer choice.</li>
                <li>Identify the strongest supported evidence.</li>
                <li>Eliminate overconfident, destructive, or unauthorized choices.</li>
                <li>Select the most defensible and controlled response.</li>
                <li>Submit after all questions are answered.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
              <p className="font-black text-emerald-100">Suggested score guide</p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-emerald-50">
                <p><span className="font-bold">23–25:</span> Strong I2 mastery</p>
                <p><span className="font-bold">20–22:</span> Ready with targeted review</p>
                <p><span className="font-bold">16–19:</span> Review weak domains before continuing</p>
                <p><span className="font-bold">0–15:</span> Revisit the I2 lessons and labs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Domain Coverage
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            What this test measures
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {domains.map(([range, domain]) => (
              <div
                key={range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {range}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-200">
                  {domain}
                </p>
              </div>
            ))}
          </div>
        </section>

        <MiniQuiz
          title="I2 Linux Basics for Security Module Test"
          questions={questions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Targeted Remediation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Review by question range
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {remediation.map(([range, review]) => (
              <div
                key={range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Questions {range}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-200">
                  {review}
                </p>
              </div>
            ))}
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            "Linux defense starts by confirming system role, ownership, exposure, lifecycle, and expected baseline.",
            "Full paths, ownership, permissions, symbolic links, users, and groups must be interpreted together.",
            "Processes and services require parent, user, executable, package, port, file, log, and dependency context.",
            "Safe terminal work stays read-only, authorized, precise, documented, and bounded by stopping conditions.",
            "Logs require time normalization, multiple sources, evidence preservation, and explicit confidence limits.",
            "Package updates require trusted sources, relevance analysis, testing, rollback, validation, and lifecycle planning.",
            "Integrated findings should be prioritized and corrected one controlled change at a time.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review or return to the Intermediate Track
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/linux-security-basics-lab`}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Review I2.8
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to I2 Module
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}