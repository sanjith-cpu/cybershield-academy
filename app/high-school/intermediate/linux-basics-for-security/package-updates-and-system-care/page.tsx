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

const modulePath = "/high-school/intermediate/linux-basics-for-security";
const previousLesson = `${modulePath}/linux-logs-and-system-clues`;
const nextLesson = `${modulePath}/linux-security-basics-lab`;

const objectives = [
  "Explain packages, repositories, versions, dependencies, security updates, and support status.",
  "Prioritize updates using system role, exposure, severity, exploitability, compatibility, and business impact.",
  "Interpret fictional package, service, reboot, test, and validation evidence.",
  "Distinguish update urgency from change readiness.",
  "Create an authorized maintenance plan with backup, testing, rollback, validation, and monitoring.",
];

const vocabulary = [
  ["Package", "A managed software unit containing files, metadata, version information, dependencies, and installation instructions."],
  ["Repository", "An approved source of packages and metadata used by a Linux package manager."],
  ["Dependency", "A package, library, service, file, or component another package requires."],
  ["Security update", "An update intended to correct a security weakness or reduce known risk."],
  ["Maintenance window", "An approved period for controlled change, testing, validation, and rollback."],
  ["Rollback", "A documented method for restoring the previous known-good state if a change fails."],
  ["Reboot requirement", "A need to restart a service or system so an updated component becomes active."],
  ["End of support", "The point when a release no longer receives normal vendor maintenance or security updates."],
];

const updateTypes = [
  ["Security update", "Reduces a known weakness.", "Is the affected feature active, exposed, and relevant to this version?"],
  ["Bug-fix update", "Corrects reliability or behavior problems.", "Could the fix change application behavior or dependencies?"],
  ["Feature update", "Adds or changes functionality.", "Is it needed, tested, and compatible with the approved baseline?"],
  ["Kernel update", "Updates the operating-system kernel.", "Is a reboot required, and are drivers and rollback validated?"],
  ["Package removal", "Removes obsolete or unnecessary software.", "Which services, scripts, users, or jobs still depend on it?"],
  ["Repository change", "Changes where packages are obtained.", "Is the source approved, signed, supported, and owned?"],
];

const factors = [
  ["System role", "Public web servers, databases, gateways, workstations, and test hosts have different priorities."],
  ["Exposure", "Internet-facing, partner-facing, staff-only, isolated, and offline systems face different likelihood."],
  ["Severity and exploitability", "Advisory severity must be combined with active features and realistic attack paths."],
  ["Business impact", "Downtime, compatibility, data risk, and recovery requirements affect scheduling."],
  ["Dependencies", "Applications, libraries, scripts, services, and drivers may rely on current behavior."],
  ["Support status", "Unsupported releases increase long-term risk and reduce normal update options."],
  ["Change readiness", "Testing, owner approval, backup, rollback, monitoring, and staffing determine safe timing."],
  ["Compensating controls", "Segmentation, access limits, disabled features, and monitoring may reduce temporary exposure."],
];

const evidence = [
  ["Package inventory", "Installed name, version, architecture, and source.", "Does not prove active use or exposure."],
  ["Repository metadata", "Available versions, approved source, and update status.", "Does not prove application compatibility."],
  ["Security advisory", "Affected versions, severity, fixed release, and mitigation context.", "Does not prove the feature is active or reachable."],
  ["Service evidence", "Whether a package supports a running service or process.", "Does not prove every installed feature is used."],
  ["Change records", "Approval, test, owner, backup, rollback, and maintenance window.", "Does not prove production success."],
  ["Package logs", "Install, update, dependency, restart, and failure events.", "Do not replace functional validation."],
];

const workflow = [
  ["1", "Inventory", "Record system role, owner, exposure, package, version, repository, and support status."],
  ["2", "Assess relevance", "Review the advisory, active feature, exploitability, dependencies, and compensating controls."],
  ["3", "Plan", "Define owner approval, maintenance window, backup, test, communication, restart, and rollback."],
  ["4", "Test", "Validate the update in an approved fictional nonproduction environment."],
  ["5", "Apply and monitor", "Follow the approved plan and preserve package, service, and application evidence."],
  ["6", "Validate", "Confirm version, running state, service health, application behavior, logs, and updated documentation."],
];

const mistakes = [
  "Updating every system immediately without considering compatibility, ownership, or recovery.",
  "Delaying every update because one application may have compatibility risk.",
  "Using unapproved repositories or unknown package sources.",
  "Assuming an installed package is actively exposed without checking version, feature use, and reachability.",
  "Applying multiple unrelated changes without clear validation.",
  "Ignoring restart or reboot requirements.",
  "Removing packages before checking services, scripts, and scheduled-task dependencies.",
  "Treating package-manager success as complete application validation.",
  "Skipping backup, rollback, monitoring, or documentation.",
];

const quizQuestions = [
  {
    question: "What is a Linux package repository?",
    choices: [
      "An approved source of software packages and metadata.",
      "A user home directory.",
      "A running process.",
      "A firewall rule.",
    ],
    answer: 0,
    explanation: "Repositories provide managed package sources and metadata.",
  },
  {
    question: "Why does an installed vulnerable package not automatically prove active exposure?",
    choices: [
      "Feature use, configuration, reachability, version, and controls still require review.",
      "Packages cannot contain vulnerabilities.",
      "Only kernels require updates.",
      "Versions never matter.",
    ],
    answer: 0,
    explanation: "Exposure depends on how the package is used and configured.",
  },
  {
    question: "What is the purpose of a maintenance window?",
    choices: [
      "To provide an approved period for controlled change, validation, and rollback.",
      "To disable monitoring.",
      "To make every update automatic.",
      "To remove the need for backups.",
    ],
    answer: 0,
    explanation: "A maintenance window creates controlled conditions for change.",
  },
  {
    question: "Why might a kernel update require a reboot?",
    choices: [
      "The system may need to restart before the new kernel becomes active.",
      "Every update always requires a reboot.",
      "A reboot removes all dependencies.",
      "The repository becomes unavailable.",
    ],
    answer: 0,
    explanation: "The new kernel is normally activated during a restart.",
  },
  {
    question: "Which evidence best confirms an update succeeded?",
    choices: [
      "Version, package logs, service health, application tests, and monitoring reviewed together.",
      "Only a success message.",
      "Only the reboot time.",
      "Only the advisory title.",
    ],
    answer: 0,
    explanation: "Installation and functional validation both matter.",
  },
  {
    question: "An internet-facing service has a relevant high-severity update, but compatibility is uncertain. What is strongest?",
    choices: [
      "Prioritize testing, use temporary controls, prepare rollback, and schedule the earliest safe update.",
      "Ignore it permanently.",
      "Apply it without testing.",
      "Disable logging.",
    ],
    answer: 0,
    explanation: "Urgency and change safety should be managed together.",
  },
  {
    question: "What should happen after a successful update?",
    choices: [
      "Validate services and applications, monitor logs, confirm version, and update documentation.",
      "Delete all logs.",
      "Remove the backup immediately.",
      "Assume dependencies work.",
    ],
    answer: 0,
    explanation: "Post-change validation completes the lifecycle.",
  },
];

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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 hover:border-cyan-400">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 hover:border-cyan-400">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function PackageUpdatesAndSystemCarePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I2</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 7 of 8</span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.7 Package Updates and System Care
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Prioritize fictional Linux packages and updates using trusted repositories,
            system role, exposure, severity, compatibility, maintenance windows,
            testing, rollback, validation, and monitoring.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Package Updates and System Care"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain Linux roles, services, logs, packages, and evidence limits.",
            "I understand that urgency must be balanced with compatibility and recovery.",
            "I will preserve package, advisory, service, test, and validation evidence.",
            "I will use only fictional systems, packages, versions, repositories, and organizations.",
            "I will not install, update, remove, or reconfigure software on a real system without authorization.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Secure Maintenance Is More Than Clicking Update">
          <p className="leading-8">
            An update can reduce security risk while also changing dependencies,
            service behavior, defaults, restart requirements, or application
            compatibility. Defenders must understand what is installed, why it
            exists, how exposed it is, what the update changes, and how to recover.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="font-bold text-red-200">Weak response</p>
              <p className="mt-2">“Install every update immediately and hope nothing breaks.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="font-bold text-emerald-200">Strong response</p>
              <p className="mt-2">
                “Assess relevance, test the change, prepare backup and rollback,
                apply it in an approved window, and validate the full system.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Unpatched and Poorly Managed Systems Both Create Risk">
          <p className="leading-8">
            Delayed updates can leave known weaknesses exposed. Unplanned updates
            can interrupt critical services or weaken recovery. A mature update
            process reduces both security and operational risk.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Update Types</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Different Changes Need Different Planning</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {updateTypes.map(([type, purpose, question]) => (
              <div key={type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{type}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{purpose}</p>
                <p className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Prioritization Model</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Prioritize Risk and Change Safety Together</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {factors.map(([factor, detail]) => (
              <div key={factor} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{factor}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionCard eyebrow="Core Concept" title="Rate Security Urgency and Change Readiness Separately">
          <p className="leading-8">
            Severity alone does not determine the complete plan. Review active
            features, reachability, controls, dependencies, business importance,
            testing, owner approval, backup, rollback, and monitoring.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Linux Package and Maintenance Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Analysis</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Update Evidence Can and Cannot Prove</h2>
          <div className="mt-6 grid gap-4">
            {evidence.map(([source, supports, limitation]) => (
              <div key={source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
                <p className="font-black text-cyan-100">{source}</p>
                <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-50">{supports}</p>
                <p className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm text-yellow-50">{limitation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Manage Linux Updates in Six Steps</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map(([step, title, detail]) => (
              <div key={step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{step}</div>
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Linux Update Readiness Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Learning Services environment."
          metrics={[
            { label: "Pending security updates", value: "14", note: "Four affect active services, six affect inactive features, and four need owner confirmation." },
            { label: "End-of-support systems", value: "2", note: "Two internal servers require migration plans." },
            { label: "Updates awaiting test", value: "3", note: "A kernel, database client, and web library need compatibility validation." },
          ]}
        />

        <FakeAlertCard
          title="Relevant Web-Service Update Delayed by Compatibility Uncertainty"
          severity="High"
          time="04:12 PM"
          source="Fake Linux Update Governance Monitor"
          details="The fictional internet-facing server training-web-07 uses a package version affected by a high-severity issue in an active feature. A fixed version is available from the approved repository, but compatibility testing is not complete."
          recommendation="Prioritize testing, preserve advisory and inventory evidence, maintain temporary controls, prepare backup and rollback, and use the earliest safe approved maintenance window."
        />

        <FakeLogPanel
          title="Fake Linux Update Planning Timeline"
          logs={[
            "15:18:00 INVENTORY host='training-web-07' role='internet-facing-learning-portal'",
            "15:20:14 PACKAGE name='training-web-library' installed='4.8.1' repository='approved-main'",
            "15:22:09 ADVISORY affected_versions='<4.8.3' severity='high' feature='request-parser'",
            "15:24:31 SERVICE feature='request-parser' active='true' exposure='internet-facing'",
            "15:28:44 REPOSITORY fixed_version='4.8.3' signature='valid'",
            "15:31:08 TEST status='pending' owner='learning-apps'",
            "15:36:22 CONTROLS segmentation='active' monitoring='active'",
            "15:42:57 CHANGE backup='planned' rollback='prepared' window='tomorrow_22:00'",
            "16:12:05 CORRELATION urgency='high' readiness='medium'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Update Decision Is Best Supported?"
          evidence={[
            "The fictional server is internet-facing.",
            "The installed version is affected.",
            "The vulnerable feature is active.",
            "A fixed version is available from an approved repository.",
            "Compatibility testing is pending.",
            "Temporary controls reduce but do not remove risk.",
            "Backup, rollback, and a near-term window are being prepared.",
          ]}
          question="What is the strongest update plan?"
          options={[
            "Accelerate testing, maintain temporary controls, complete backup and rollback, and update in the earliest safe approved window.",
            "Ignore the update because controls exist.",
            "Install it immediately without testing.",
            "Remove the entire application.",
          ]}
          bestAnswer={0}
          explanation="The risk is relevant and exposed, but controlled testing and recovery planning are still necessary."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Linux Update Management">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Prioritize a Fictional Linux Update Queue">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-white">Northstar Linux Maintenance Board</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twelve fictional updates across web, database, monitoring,
                file, workstation, backup, gateway, and test systems.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <ol className="list-decimal space-y-2 pl-5 leading-7">
                <li>Classify each update type.</li>
                <li>Rate urgency and readiness separately.</li>
                <li>Review exposure, active features, dependencies, support, and controls.</li>
                <li>Identify test, backup, restart, communication, and rollback needs.</li>
                <li>Prioritize the queue and justify each position.</li>
                <li>Create validation and monitoring steps.</li>
              </ol>
            </div>
          </div>
          <p className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Analyze only supplied fictional records. Do not install, update,
            remove, or change software on a real system without authorization.
          </p>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Kernel Update Is Installed but the Host Has Not Rebooted"
          scenario="A fictional kernel package update completed, but the system is still running the previous kernel. The approved window includes a reboot and validation."
          choices={[
            {
              label: "Choice A",
              response: "Confirm backup and approval, perform the authorized reboot in the window, and validate kernel, services, application, network, and monitoring.",
              outcome: "Best defensive choice. The intended running state still needs activation and validation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare the update complete because the package manager succeeded.",
              outcome: "Incomplete. The new kernel is not active.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Reboot immediately outside the approved window.",
              outcome: "Risky unless an emergency process applies.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Unsupported Internal Server Cannot Be Updated"
          scenario="A fictional internal file server runs an end-of-support release, and one legacy application blocks an immediate operating-system upgrade."
          choices={[
            {
              label: "Choice A",
              response: "Document the risk, restrict exposure, strengthen monitoring and backups, assign an owner, test migration, and create a time-bounded replacement plan.",
              outcome: "Best defensive choice. Temporary controls reduce risk while migration removes the unsupported platform.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Ignore it because the server is internal.",
              outcome: "Unsafe. Internal systems still require lifecycle management.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Add an unknown repository for unofficial packages.",
              outcome: "Unsafe. Unapproved sources increase integrity and support risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Linux Update and System Care Checklist"
          items={[
            "I record system role, owner, exposure, package, version, repository, support status, and active use.",
            "I confirm whether the advisory applies to the installed version and active feature.",
            "I assess severity, exploitability, reachability, dependencies, business impact, and controls.",
            "I rate security urgency and change readiness separately.",
            "I use only approved repositories.",
            "I define approval, window, communication, backup, testing, restart, reboot, and rollback.",
            "I preserve package, service, application, change, and validation evidence.",
            "I validate version, running state, services, application behavior, logs, and monitoring.",
            "I update the baseline, inventory, exception, lifecycle, and maintenance records.",
            "I use fictional evidence and never publish real package or maintenance details.",
          ]}
        />

        <MiniQuiz
          title="I2.7 Mini Quiz: Package Updates and System Care"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Linux Update Prioritization and Maintenance Plan for twelve systems. Include role, exposure, package, installed and fixed versions, update type, active feature, severity, dependencies, support status, controls, urgency, readiness, owner, testing, backup, rollback, validation, and final status."
          tips={[
            "Use only fictional systems, packages, versions, repositories, services, and organizations.",
            "Include one internet-facing update, one inactive-feature update, one kernel reboot, and one unsupported system.",
            "Separate security urgency from change readiness.",
            "Do not include real package inventories, repositories, hostnames, or maintenance windows.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Linux package management connects packages, repositories, versions, dependencies, updates, and support status.",
            "Installed software does not automatically equal active exposure.",
            "Update priority depends on both security urgency and change readiness.",
            "Testing, backups, maintenance windows, rollback, and validation reduce change risk.",
            "Package-manager success does not replace service and application validation.",
            "Unsupported systems require temporary controls and a time-bounded migration plan.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I2</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}