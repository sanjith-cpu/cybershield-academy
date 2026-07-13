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
const previousLesson = `${modulePath}/package-updates-and-system-care`;
const moduleTest = `${modulePath}/module-test`;

const objectives = [
  "Integrate Linux system role, paths, users, groups, permissions, processes, services, logs, packages, and update evidence.",
  "Build a multi-source timeline from fictional inventory, metadata, service, authentication, package, network, and change records.",
  "Separate confirmed facts, reasonable conclusions, missing evidence, alternate explanations, and unsupported claims.",
  "Prioritize findings by exposure, sensitivity, business impact, confidence, owner, and ease of safe correction.",
  "Create a professional Linux security review report with evidence, risk, ownership, validation, rollback, and monitoring.",
];

const caseFacts = [
  {
    category: "System role",
    detail:
      "training-web-09 is documented as an internal learning portal owned by the Learning Applications team.",
  },
  {
    category: "Filesystem",
    detail:
      "The public document root contains one internal deployment note and a symbolic link to a private user directory.",
  },
  {
    category: "Accounts",
    detail:
      "A temporary support account remains enabled after expiration and still belongs to the web-content group.",
  },
  {
    category: "Permissions",
    detail:
      "The public-content directory grants group write access, and one sensitive file is readable by others.",
  },
  {
    category: "Processes and services",
    detail:
      "The approved web service is healthy, but a legacy file-sharing service is enabled with no current owner.",
  },
  {
    category: "Logs",
    detail:
      "Authentication and service records show normal portal activity, one expired-account login, and no recent legacy-service use.",
  },
  {
    category: "Packages",
    detail:
      "The web package needs a relevant security update, while the legacy file-sharing package is unsupported.",
  },
  {
    category: "Change management",
    detail:
      "A maintenance window, backup, test plan, and rollback exist for the web update but not for legacy-service removal.",
  },
];

const evidenceDomains = [
  {
    domain: "Inventory and ownership",
    evidence:
      "Host role, owner, environment, sensitivity, support status, and lifecycle records.",
    question:
      "Does the observed system still match its approved purpose and ownership?",
  },
  {
    domain: "Files and directories",
    evidence:
      "Paths, ownership, permissions, symbolic links, timestamps, classifications, and service mappings.",
    question:
      "Are files stored, protected, and exposed according to their purpose and sensitivity?",
  },
  {
    domain: "Users and groups",
    evidence:
      "Account type, owner, status, expiration, group membership, activity, and role records.",
    question:
      "Does each identity still need its current access and duration?",
  },
  {
    domain: "Processes and services",
    evidence:
      "PID, user, executable, package, startup state, ports, dependencies, failures, and logs.",
    question:
      "Is each running or enabled service required, owned, healthy, and appropriately exposed?",
  },
  {
    domain: "Logs and timelines",
    evidence:
      "Authentication, service, application, package, audit, firewall, and monitoring events.",
    question:
      "What happened, when, with which identity or service, and what gaps remain?",
  },
  {
    domain: "Packages and updates",
    evidence:
      "Installed versions, approved repositories, advisories, dependencies, tests, restarts, and validation.",
    question:
      "Which updates or removals are relevant, urgent, safe, and ready?",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define scope",
    detail:
      "Identify the fictional host, owner, system role, time window, approved evidence, and stopping conditions.",
  },
  {
    step: "2",
    title: "Preserve evidence",
    detail:
      "Record original inventories, paths, metadata, permissions, process state, logs, packages, and change records.",
  },
  {
    step: "3",
    title: "Correlate sources",
    detail:
      "Connect users, groups, files, services, packages, ports, timestamps, owners, and changes.",
  },
  {
    step: "4",
    title: "Classify findings",
    detail:
      "Separate confirmed facts, likely explanations, alternate causes, missing evidence, and unsupported claims.",
  },
  {
    step: "5",
    title: "Prioritize risk",
    detail:
      "Consider exposure, sensitivity, business impact, confidence, dependency, owner, and available controls.",
  },
  {
    step: "6",
    title: "Plan corrections",
    detail:
      "Define authorization, owner, exact change, test, backup, rollback, validation, monitoring, and documentation.",
  },
];

const findingMatrix = [
  {
    finding: "Expired support account retains web-content write access",
    evidence:
      "Expired lifecycle, enabled status, group membership, write permission, no active owner need.",
    risk:
      "Stale access can alter production content and weakens accountability.",
    priority: "High",
  },
  {
    finding: "Internal deployment note in public document root",
    evidence:
      "Internal classification, public path, broad read permission, successful web access.",
    risk:
      "Internal operational information is exposed to unintended users.",
    priority: "High",
  },
  {
    finding: "Legacy file-sharing service remains enabled",
    evidence:
      "Service and package active, no owner, no recent connections, project ended.",
    risk:
      "Unnecessary service exposure and unsupported software increase attack surface.",
    priority: "Medium",
  },
  {
    finding: "Relevant web package update pending",
    evidence:
      "Affected version, active feature, approved fixed version, test and rollback in progress.",
    risk:
      "Known weakness remains relevant until safely updated.",
    priority: "High",
  },
  {
    finding: "Symbolic link points to private user directory",
    evidence:
      "Public path link, private target, internal notes, broad web reachability.",
    risk:
      "Indirect exposure bypasses intended data-location boundaries.",
    priority: "High",
  },
];

const commonMistakes = [
  "Fixing the first visible issue before understanding dependencies and evidence relationships.",
  "Treating every finding as malicious activity rather than a configuration, lifecycle, ownership, or maintenance problem.",
  "Making multiple unrelated changes at once and losing the ability to validate cause and effect.",
  "Ignoring evidence gaps because several sources appear to agree.",
  "Prioritizing by alert color alone instead of exposure, sensitivity, business impact, and confidence.",
  "Removing services or accounts without confirming owners, dependencies, jobs, files, and rollback.",
  "Reporting only technical details without stating ownership, impact, next action, and validation.",
  "Publishing real usernames, hostnames, paths, addresses, package versions, logs, or credentials in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is the strongest first step in a Linux security review?",
    choices: [
      "Define scope, system role, owner, evidence sources, time window, and stopping conditions.",
      "Disable every unfamiliar service.",
      "Delete temporary files.",
      "Apply every available update immediately.",
    ],
    answer: 0,
    explanation:
      "A controlled review begins by establishing authorization, purpose, scope, and evidence boundaries.",
  },
  {
    question:
      "Why should multiple evidence sources be correlated?",
    choices: [
      "Each source contributes different identity, file, service, network, timeline, ownership, and change context.",
      "One source is never useful.",
      "Correlation automatically proves intent.",
      "All sources contain identical data.",
    ],
    answer: 0,
    explanation:
      "The strongest findings connect complementary evidence and reveal gaps or contradictions.",
  },
  {
    question:
      "Which finding should usually receive higher priority?",
    choices: [
      "A confirmed sensitive-data exposure with active reachability.",
      "A harmless cosmetic filename difference.",
      "An inactive package with no relevant feature.",
      "A resolved warning with full validation.",
    ],
    answer: 0,
    explanation:
      "Active exposure of sensitive data creates immediate confidentiality risk.",
  },
  {
    question:
      "What makes a finding professionally defensible?",
    choices: [
      "Clear evidence, scope, confidence, impact, limitations, owner, and authorized next action.",
      "A dramatic alert title.",
      "One unexplained log line.",
      "A guess stated with certainty.",
    ],
    answer: 0,
    explanation:
      "Professional findings distinguish evidence, inference, uncertainty, and action.",
  },
  {
    question:
      "Why should corrections be applied one controlled change at a time?",
    choices: [
      "It improves validation, rollback, accountability, and cause-and-effect understanding.",
      "It makes every change risk-free.",
      "It removes the need for testing.",
      "It guarantees no downtime.",
    ],
    answer: 0,
    explanation:
      "Controlled sequencing makes outcomes easier to verify and reverse.",
  },
  {
    question:
      "An expired account, public file exposure, and pending update all exist. What is the best approach?",
    choices: [
      "Prioritize by exposure, sensitivity, business impact, confidence, dependencies, and readiness, then assign owners and controlled actions.",
      "Choose randomly.",
      "Fix only the easiest item.",
      "Ignore all findings until every detail is known.",
    ],
    answer: 0,
    explanation:
      "Risk prioritization balances urgency with evidence quality and change readiness.",
  },
  {
    question:
      "What should the final report include?",
    choices: [
      "Scope, evidence, timeline, findings, confidence, risk, owner, action, validation, rollback, monitoring, and limitations.",
      "Only screenshots.",
      "Only the final score.",
      "Only raw logs with no explanation.",
    ],
    answer: 0,
    explanation:
      "A professional report connects evidence to decisions and controlled follow-up.",
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={moduleTest}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function LinuxSecurityBasicsLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I2.8 Linux Security Basics Lab
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Combine Linux roles, files, users, groups, permissions, processes,
            services, safe terminal evidence, logs, packages, updates, ownership,
            and change records into one defensive review.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I2: Linux Basics for Security"
          lessonTitle="Linux Security Basics Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I completed or reviewed I2.1 through I2.7.",
            "I will use only the supplied fictional systems, accounts, paths, services, logs, packages, and organizations.",
            "I will preserve evidence before recommending any correction.",
            "I will separate confirmed facts, likely explanations, missing evidence, and unsupported assumptions.",
            "I will not test, inspect, reconfigure, or access any real system without explicit authorization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Real Defensive Work Connects Multiple Small Clues"
        >
          <p className="leading-8">
            A stale account, broad permission, legacy service, exposed file,
            missing owner, failed update, and suspicious-looking log line may all
            appear in the same environment. The defender's job is not to react
            to each item separately. The job is to connect evidence, identify
            root causes, prioritize risk, and recommend safe, authorized change.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="font-bold text-red-200">Weak response</p>
              <p className="mt-2">
                “Disable everything unusual and update everything immediately.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="font-bold text-emerald-200">Strong response</p>
              <p className="mt-2">
                “Preserve evidence, correlate sources, classify confidence,
                prioritize risk, assign owners, and make controlled changes with
                validation and rollback.”
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
          eyebrow="Case Overview"
          title="Fictional Training System: training-web-09"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {caseFacts.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  {item.category}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Evidence Domains
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review the System from Six Connected Angles
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {evidenceDomains.map((item) => (
              <div
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.domain}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.evidence}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
                  {item.question}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Integrated Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete the Review in Six Stages
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Finding Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Prioritize Confirmed Linux Security Findings
          </h2>

          <div className="mt-6 grid gap-4">
            {findingMatrix.map((item) => (
              <div
                key={item.finding}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[1fr_1.3fr_1.1fr_0.35fr]"
              >
                <p className="font-black text-white">{item.finding}</p>
                <p className="text-sm leading-6 text-slate-300">
                  {item.evidence}
                </p>
                <p className="text-sm leading-6 text-yellow-100">
                  {item.risk}
                </p>
                <span
                  className={`h-fit rounded-full px-3 py-1 text-center text-xs font-black uppercase tracking-[0.12em] ${
                    item.priority === "High"
                      ? "bg-red-400/15 text-red-200"
                      : "bg-yellow-400/15 text-yellow-200"
                  }`}
                >
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Linux Security Review Dashboard"
          subtitle="Integrated training dashboard for the fictional Northstar Learning Portal."
          metrics={[
            {
              label: "Confirmed findings",
              value: "5",
              note: "Four high-priority findings and one medium-priority stale-service finding.",
            },
            {
              label: "Evidence sources",
              value: "9",
              note: "Inventory, filesystem, identity, process, service, package, authentication, network, and change evidence are available.",
            },
            {
              label: "Open evidence gaps",
              value: "3",
              note: "Legacy-service dependency, symbolic-link creation history, and account-owner review date remain incomplete.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Linux Baseline Deviations Require Coordinated Review"
          severity="High"
          time="09:48 AM"
          source="Fake Integrated Linux Defense Monitor"
          details="The fictional host training-web-09 has an expired support account with write access, an internal file in the public document root, a symbolic link to a private directory, an unowned legacy service, and a relevant pending web-package update."
          recommendation="Preserve all evidence, assign finding owners, restrict active exposure first, complete dependency review, apply one controlled change at a time, and validate services, permissions, logs, packages, and monitoring after each action."
        />

        <FakeLogPanel
          title="Fake Integrated Linux Evidence Timeline"
          logs={[
            "08:41:00 INVENTORY host='training-web-09' role='internal-learning-portal' owner='learning-apps'",
            "08:44:12 ACCOUNT user='temp-support' status='enabled' expiration='10_days_ago'",
            "08:45:03 GROUP user='temp-support' membership='web-content'",
            "08:46:27 PATH path='/srv/training-web/public/internal-deployment-notes.txt' classification='internal'",
            "08:47:14 LINK path='/srv/training-web/public/support-docs' target='/home/deploy-user/private-notes'",
            "08:49:32 SERVICE name='legacy-file-share' state='running' owner='unknown'",
            "08:51:10 NETWORK service='legacy-file-share' exposure='staff-zone' recent_connections='0'",
            "08:53:44 PACKAGE name='training-web-library' installed='4.8.1' fixed='4.8.3' feature='active'",
            "08:56:19 CHANGE update_window='tomorrow_22:00' backup='ready' rollback='ready'",
            "09:02:07 AUTH user='temp-support' result='success' source='approved-admin-host'",
            "09:15:33 OWNER temp_account_required='false' legacy_service_required='unknown'",
            "09:48:05 CORRELATION finding='coordinated_linux_baseline_deviation' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Integrated Conclusion Is Best Supported?"
          evidence={[
            "The temporary support account is expired, enabled, and still has write access.",
            "An internal file is directly served from the public content directory.",
            "A symbolic link exposes a private user directory through the public path.",
            "The legacy service is enabled, unowned, and has no recent use.",
            "The web package is affected by a relevant issue and has an approved fixed version.",
            "Backup, rollback, and a maintenance window exist for the web update.",
            "The legacy service dependency is still uncertain.",
          ]}
          question="What is the strongest coordinated response?"
          options={[
            "Restrict confirmed active exposure first, preserve evidence, remove expired access through authorized change, complete dependency review for the legacy service, and apply the tested web update with validation and rollback.",
            "Delete the entire server immediately.",
            "Ignore all findings until every evidence gap is closed.",
            "Make every change simultaneously to save time.",
          ]}
          bestAnswer={0}
          explanation="The best response prioritizes confirmed exposure, preserves evidence, respects dependencies, and sequences controlled changes so each outcome can be validated."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Integrated Linux Reviews"
        >
          <div className="grid gap-3">
            {commonMistakes.map((mistake) => (
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
          eyebrow="Safe Capstone Lab"
          title="Complete the Fictional Linux Security Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-white">
                Deliverable A: Evidence Workbook
              </h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-300">
                <li>System role, owner, environment, sensitivity, and support status.</li>
                <li>Filesystem and symbolic-link map.</li>
                <li>User, group, ownership, and permission review.</li>
                <li>Process and service inventory.</li>
                <li>Normalized multi-source timeline.</li>
                <li>Package and update readiness table.</li>
                <li>Evidence gaps and confidence notes.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="text-xl font-black text-emerald-100">
                Deliverable B: Action Plan
              </h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7">
                <li>Rank findings by risk and confidence.</li>
                <li>Assign an owner to every finding.</li>
                <li>Define the exact authorized change.</li>
                <li>List dependencies and stopping conditions.</li>
                <li>Include backup and rollback.</li>
                <li>Define validation and monitoring.</li>
                <li>Update the baseline and review date.</li>
              </ol>
            </div>
          </div>

          <p className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This lab is entirely fictional and read-only. Do not inspect,
            access, modify, scan, test, or reconfigure any real Linux device,
            server, cloud system, website, account, or school computer.
          </p>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Wants to Fix All Five Findings in One Window"
          scenario="The fictional team proposes disabling the expired account, moving files, removing the symbolic link, stopping the legacy service, and updating the web package at the same time."
          choices={[
            {
              label: "Choice A",
              response:
                "Sequence the changes by risk and dependency, validate after each one, and preserve the ability to roll back individual actions.",
              outcome:
                "Best defensive choice. Controlled sequencing protects availability and improves evidence quality.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve all changes at once because every finding is important.",
              outcome:
                "Risky. Simultaneous changes weaken validation and rollback.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Make no changes because the environment still functions.",
              outcome:
                "Unsafe. Confirmed exposure and stale access still require action.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Legacy Service Owner Cannot Be Identified"
          scenario="The fictional file-sharing service appears stale and unused, but one application dependency record is incomplete and no current owner responds."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict exposure if authorized, preserve service and dependency evidence, assign a temporary review owner, test in a controlled window, and remove only after dependency validation.",
              outcome:
                "Best defensive choice. The service can be contained while uncertainty is resolved.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the package immediately.",
              outcome:
                "Risky. An unknown dependency may still exist.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave the service permanently because ownership is unclear.",
              outcome:
                "Weak governance. Unowned exposure should not remain indefinitely.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Integrated Linux Security Review Checklist"
          items={[
            "I define system role, owner, environment, sensitivity, scope, and stopping conditions.",
            "I preserve inventory, path, permission, process, service, log, package, network, and change evidence.",
            "I connect users, groups, files, services, packages, ports, timestamps, owners, and dependencies.",
            "I separate confirmed facts, likely explanations, alternate causes, missing evidence, and unsupported claims.",
            "I prioritize findings by exposure, sensitivity, business impact, confidence, dependency, and readiness.",
            "I assign an owner and exact authorized next action to every finding.",
            "I sequence changes so each action can be tested, validated, and rolled back independently.",
            "I include backup, monitoring, evidence preservation, and documentation updates.",
            "I validate the system role, permissions, services, applications, packages, logs, and controls after change.",
            "I use only fictional evidence and never publish real Linux system details.",
          ]}
        />

        <MiniQuiz
          title="I2.8 Mini Quiz: Linux Security Basics Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a complete fictional Linux Security Review Report for training-web-09. Include executive summary, scope, system role, evidence inventory, filesystem map, account and permission matrix, process and service inventory, normalized timeline, package update plan, prioritized findings, confidence, evidence gaps, owner, action, validation, rollback, monitoring, and final baseline."
          tips={[
            "Use only fictional systems, users, groups, paths, services, packages, logs, addresses, and organizations.",
            "Include at least five findings with different evidence sources and priorities.",
            "Separate confirmed facts, likely conclusions, missing evidence, and unsupported claims.",
            "Do not include real hostnames, usernames, paths, IP addresses, package versions, logs, credentials, or internal details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Linux defense requires connecting system role, files, identities, permissions, processes, services, logs, packages, and changes.",
            "Strong findings rely on multiple evidence sources and clearly stated limitations.",
            "Confirmed exposure should be prioritized, but dependencies and availability still matter.",
            "One controlled change at a time improves validation, rollback, and accountability.",
            "Professional reports include scope, evidence, confidence, risk, owner, action, validation, monitoring, and gaps.",
            "Safe defensive work stays authorized, fictional, evidence-based, and reversible.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Finish Module I2
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}