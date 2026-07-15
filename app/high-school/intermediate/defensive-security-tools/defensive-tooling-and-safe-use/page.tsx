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
const modulePath = `${trackPath}/defensive-security-tools`;
const previousLesson = modulePath;
const nextLesson = `${modulePath}/endpoint-protection-and-edr-concepts`;

const objectives = [
  "Explain why authorization, scope, ownership, purpose, and safety boundaries must be established before using a defensive security tool.",
  "Distinguish read-only observation, evidence collection, analysis, testing, configuration change, containment, and remediation actions.",
  "Evaluate fictional defensive-tool output without treating alerts, dashboards, scan results, or automated labels as complete conclusions.",
  "Create a controlled tool-use workflow that includes evidence preservation, privacy protection, change approval, rollback, validation, and monitoring.",
  "Produce a professional fictional Authorized Tool Use Plan with confirmed facts, assumptions, limitations, confidence, owners, and safe next actions.",
];

const vocabulary = [
  ["Defensive security tool", "A technology used to improve visibility, protection, detection, analysis, response, validation, or reporting in an authorized environment."],
  ["Authorization", "Documented permission from the appropriate owner to perform a defined defensive activity."],
  ["Scope", "The exact systems, users, applications, data, time window, actions, and evidence included in the work."],
  ["Read-only action", "An activity intended to observe or review without changing the target system or control."],
  ["Change-capable action", "An activity that can modify configuration, access, service state, rules, files, accounts, or protection settings."],
  ["Owner", "The person or team responsible for a system, application, account, data source, control, or business process."],
  ["Rollback", "A prepared method for returning a change to the previously approved state if validation fails."],
  ["Validation", "Evidence that a tool, control, change, or recovery produced the intended defensive and business result."],
  ["Evidence preservation", "Keeping original alerts, records, fields, timestamps, settings, and source context unchanged for later review."],
  ["Least privilege", "Limiting tool access and actions to the minimum permissions necessary for the approved purpose."],
  ["False positive", "A tool output that appears concerning but is explained by expected or benign activity after review."],
  ["False negative", "Relevant activity that a tool fails to detect, alert on, or display under the available configuration and coverage."],
];

const toolCategories = [
  {
    category: "Endpoint protection and EDR",
    purpose: "Observe and protect devices by recording processes, files, services, users, devices, alerts, prevention actions, and response states.",
    commonActions: "Review alerts, inspect process context, confirm protection state, quarantine supplied fictional files, or isolate a fictional device through an approved simulation.",
    limitations: "Alert names and severity do not automatically prove execution, persistence, intent, scope, or compromise.",
  },
  {
    category: "Firewalls and network security",
    purpose: "Apply and record network-access decisions based on source, destination, port, protocol, application, direction, zone, and rule.",
    commonActions: "Review rules and connection logs, validate approved access, compare denied traffic, and test fictional rule logic.",
    limitations: "Allowed traffic is not automatically safe, and denied traffic is not automatically malicious.",
  },
  {
    category: "Vulnerability and configuration assessment",
    purpose: "Identify missing updates, exposed services, weak settings, software versions, unsupported systems, and configuration drift.",
    commonActions: "Review supplied fictional findings, verify asset ownership, confirm evidence, prioritize remediation, and validate correction.",
    limitations: "Findings can be outdated, misidentified, duplicated, incomplete, or based on limited visibility.",
  },
  {
    category: "SIEM and log management",
    purpose: "Collect, normalize, search, correlate, retain, alert on, and display events from many sources.",
    commonActions: "Search fictional events, review correlation rules, build timelines, compare data freshness, and tune noisy logic.",
    limitations: "A SIEM can only analyze the data it receives, and dashboards can hide source-level detail.",
  },
  {
    category: "Email, web, and DNS security",
    purpose: "Apply policy, reputation, content, attachment, URL, category, and destination controls across messaging and browsing workflows.",
    commonActions: "Review fictional message metadata, blocked destinations, rewritten links, quarantines, user reports, and layered control outcomes.",
    limitations: "One control action does not prove user intent, complete content, or the behavior of every downstream layer.",
  },
  {
    category: "Identity and access tools",
    purpose: "Manage authentication, MFA, sessions, roles, privilege, conditional access, account lifecycle, and access reviews.",
    commonActions: "Review fictional sign-ins, role assignments, MFA events, sessions, access decisions, and approved account changes.",
    limitations: "A successful authentication does not automatically prove the physical person or safe later activity.",
  },
  {
    category: "Ticketing, inventory, and change tools",
    purpose: "Provide ownership, asset role, approval, maintenance, change, rollback, validation, and business context.",
    commonActions: "Confirm scope, owner, approval, expected behavior, affected assets, change history, and closure criteria.",
    limitations: "Documentation may be incomplete, stale, approximate, or different from the actual technical state.",
  },
  {
    category: "Dashboards and reporting tools",
    purpose: "Summarize health, coverage, alerts, trends, findings, priorities, and outcomes for different audiences.",
    commonActions: "Review fictional metrics, identify gaps, compare trends, and communicate evidence-based findings.",
    limitations: "Summary views can omit filters, raw fields, collection gaps, source differences, and uncertainty.",
  },
];

const actionLevels = [
  {
    level: "Level 1 — Observe",
    description: "View supplied fictional dashboards, records, alerts, inventories, or reports without changing anything.",
    examples: "Read an alert, compare timestamps, identify source fields, review an approved rule, or inspect a fictional asset record.",
    approval: "Requires clear access authorization and privacy boundaries, even when no change is made.",
  },
  {
    level: "Level 2 — Analyze",
    description: "Filter, normalize, correlate, classify, summarize, and document supplied evidence.",
    examples: "Build a timeline, compare sources, classify a pattern, calculate coverage, or write a finding.",
    approval: "Requires approved purpose, evidence-handling rules, and defined report recipients.",
  },
  {
    level: "Level 3 — Test Safely",
    description: "Evaluate fictional or isolated tool logic in a controlled training environment.",
    examples: "Test a supplied rule against fictional records, compare two safe configurations, or validate a mock alert workflow.",
    approval: "Requires an isolated scope, expected result, owner, safety limit, and stop condition.",
  },
  {
    level: "Level 4 — Change",
    description: "Modify a fictional rule, threshold, exclusion, setting, access control, service state, or protection behavior.",
    examples: "Tune a mock alert rule, narrow a fictional firewall rule, or correct a training configuration.",
    approval: "Requires explicit change approval, dependency review, backup, rollback, validation, and monitoring.",
  },
  {
    level: "Level 5 — Contain or Remediate",
    description: "Take an approved action intended to reduce risk or restore a fictional system.",
    examples: "Quarantine a supplied training file, isolate a fictional device, revoke a simulated session, or restore a safe configuration.",
    approval: "Requires incident or change authority, owner coordination, impact review, validation, and residual-risk documentation.",
  },
];


const authorizationQuestions = [
  {
    question: "Who owns the system, application, account, data, or control?",
    why: "The correct owner must approve access, explain business purpose, validate impact, and accept the final outcome.",
  },
  {
    question: "What exact defensive question must the tool answer?",
    why: "A narrow question prevents unnecessary collection, broad access, and unrelated analysis.",
  },
  {
    question: "Which systems, users, data sources, and time window are included?",
    why: "Defined scope protects privacy and prevents accidental expansion into unapproved areas.",
  },
  {
    question: "Which actions are read-only, and which can change the environment?",
    why: "Observation and modification require different approvals, safeguards, and rollback plans.",
  },
  {
    question: "What evidence will be collected, retained, shared, or removed?",
    why: "Evidence handling must protect privacy, integrity, access, retention, and reporting boundaries.",
  },
  {
    question: "What could break, slow, block, isolate, or disrupt?",
    why: "Tool actions can affect users, services, dependencies, access, and business operations.",
  },
  {
    question: "What is the stop condition?",
    why: "The reviewer must know when to stop if results differ from expectations or risk increases.",
  },
  {
    question: "How will rollback and validation work?",
    why: "A change is incomplete until the previous state can be restored and the intended result is verified.",
  },
];

const evidenceMatrix = [
  {
    source: "Tool alert",
    supports: "The tool triggered under its configured logic and recorded the displayed fields, severity, time, and action.",
    limitation: "Does not automatically prove cause, intent, execution, persistence, impact, or full scope.",
  },
  {
    source: "Raw source event",
    supports: "The originating system recorded a specific action, result, state, or condition.",
    limitation: "May still omit business purpose, ownership, user intent, and related activity.",
  },
  {
    source: "Tool configuration",
    supports: "The active rule, threshold, exclusion, policy, data source, or response action used by the tool.",
    limitation: "Configuration may be stale, partially deployed, or different across environments.",
  },
  {
    source: "Tool-health record",
    supports: "Collector status, agent state, data freshness, last update, connectivity, or service health.",
    limitation: "A healthy status does not guarantee complete coverage or correct detection logic.",
  },
  {
    source: "Asset and identity inventory",
    supports: "Owner, role, sensitivity, expected software, privilege, device state, and approved use.",
    limitation: "Inventory can be outdated or incomplete.",
  },
  {
    source: "Change ticket",
    supports: "Approval, owner, purpose, scope, schedule, expected result, rollback, and validation plan.",
    limitation: "The documented plan may differ from the actual technical implementation.",
  },
  {
    source: "Owner or user confirmation",
    supports: "Expected activity, business impact, device use, application purpose, travel, maintenance, or recovery.",
    limitation: "Human reports can be approximate, delayed, mistaken, or incomplete.",
  },
  {
    source: "Post-action validation",
    supports: "Whether the intended tool behavior, system function, protection state, or user workflow succeeded afterward.",
    limitation: "Validation covers the tested conditions and does not guarantee permanent resolution.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define purpose",
    detail: "State the fictional defensive question, affected asset or workflow, owner, time window, and expected output.",
  },
  {
    step: "2",
    title: "Confirm scope and authority",
    detail: "Document approved systems, users, evidence, permissions, action level, privacy limits, and stop conditions.",
  },
  {
    step: "3",
    title: "Preserve evidence",
    detail: "Keep original alerts, events, rules, timestamps, settings, tool-health state, source records, and limitations.",
  },
  {
    step: "4",
    title: "Analyze and validate",
    detail: "Correlate tool output with raw events, inventory, identity, endpoint, application, network, change, owner, and business evidence.",
  },
  {
    step: "5",
    title: "Act narrowly",
    detail: "Recommend only the minimum authorized change or response supported by the evidence.",
  },
  {
    step: "6",
    title: "Verify and report",
    detail: "Validate tool and business outcomes, monitor for recurrence, document confidence, residual risk, ownership, and closure.",
  },
];

const safeUsePlan = [
  {
    field: "Purpose",
    strongEntry: "Review why a fictional endpoint alert appeared after an approved software deployment.",
    weakEntry: "Investigate everything on the device.",
  },
  {
    field: "Scope",
    strongEntry: "One fictional managed laptop, one alert, supplied endpoint events, deployment ticket, and 30-minute window.",
    weakEntry: "All devices and all historical activity.",
  },
  {
    field: "Action level",
    strongEntry: "Read-only review and correlation; no isolation, quarantine, process termination, or configuration changes.",
    weakEntry: "Use any tool action that seems useful.",
  },
  {
    field: "Evidence",
    strongEntry: "Preserve original alert fields, process path, publisher, action, device, user, deployment record, and validation evidence.",
    weakEntry: "Keep only screenshots of the dashboard summary.",
  },
  {
    field: "Privacy",
    strongEntry: "Use fictional identifiers, limit recipients, exclude unrelated user content, and retain only the approved report.",
    weakEntry: "Collect all available user activity for completeness.",
  },
  {
    field: "Stop condition",
    strongEntry: "Stop and notify the owner if evidence points outside the approved laptop, time window, or data sources.",
    weakEntry: "Continue until every question is answered.",
  },
  {
    field: "Change approval",
    strongEntry: "Separate approval is required before any exclusion, quarantine, isolation, rule, or protection change.",
    weakEntry: "Make a small change first and document it later.",
  },
  {
    field: "Validation",
    strongEntry: "Confirm tool health, expected application function, no recurrence, and owner acceptance before closure.",
    weakEntry: "Close the review when the alert disappears.",
  },
];

const mistakes = [
  "Using a tool before confirming the owner, authorization, scope, and defensive purpose.",
  "Treating read access as permission to collect unrelated private information.",
  "Assuming an alert title or severity is the final conclusion.",
  "Reviewing only the dashboard and not the original source records.",
  "Changing rules, thresholds, exclusions, accounts, services, or protections without separate approval.",
  "Using broad administrative permissions when narrower access is sufficient.",
  "Failing to preserve the original alert, rule, configuration, timestamp, and tool-health state.",
  "Ignoring false positives, false negatives, missing data, delayed collection, and coverage gaps.",
  "Suppressing a noisy alert broadly instead of tuning the exact expected pattern.",
  "Taking containment action without checking business impact, dependencies, owner, and rollback.",
  "Closing the review when the alert disappears instead of validating tool and business outcomes.",
  "Publishing real users, devices, addresses, domains, alerts, rules, screenshots, tickets, or internal security details.",
];

const quizQuestions = [
  {
    question: "What should happen before a defensive security tool is used?",
    choices: [
      "The owner, authorization, purpose, scope, action level, evidence boundary, and safety limits should be defined.",
      "The tool should be opened first so its capabilities can determine the scope.",
      "All available data should be collected before asking permission.",
      "The highest-privilege account should be used automatically.",
    ],
    answer: 0,
    explanation: "Authorization and scope come before tool use, not after it.",
  },
  {
    question: "What is the difference between a read-only action and a change-capable action?",
    choices: [
      "Read-only actions observe or analyze, while change-capable actions can modify the environment or control state.",
      "Read-only actions require no authorization.",
      "Change-capable actions are always safer.",
      "There is no meaningful difference.",
    ],
    answer: 0,
    explanation: "The action type determines approvals, safeguards, rollback, validation, and risk.",
  },
  {
    question: "What does a defensive-tool alert directly prove?",
    choices: [
      "The configured logic triggered and the tool recorded the displayed fields and action.",
      "The system is definitely compromised.",
      "The user acted intentionally.",
      "The alert caused every later event.",
    ],
    answer: 0,
    explanation: "Tool output is evidence that requires source-level validation and context.",
  },
  {
    question: "Why should the original source event be reviewed?",
    choices: [
      "It can confirm what the originating system recorded and reveal fields hidden by the dashboard summary.",
      "It always proves the alert is correct.",
      "It removes the need for ownership context.",
      "It automatically identifies intent.",
    ],
    answer: 0,
    explanation: "Raw evidence strengthens review but still has limits.",
  },
  {
    question: "Which response best follows least privilege?",
    choices: [
      "Use only the permissions required for the approved fictional review and request separate approval for any change.",
      "Use a full administrator account for convenience.",
      "Share one privileged account with the team.",
      "Keep elevated access after the review ends.",
    ],
    answer: 0,
    explanation: "Least privilege limits both accidental impact and unnecessary exposure.",
  },
  {
    question: "What is the strongest response to a noisy alert rule?",
    choices: [
      "Preserve the original logic, identify the exact expected pattern, propose a narrow change, test it, retain risky coverage, and monitor the result.",
      "Disable the entire rule.",
      "Ignore every future alert.",
      "Increase every threshold without testing.",
    ],
    answer: 0,
    explanation: "Safe tuning reduces noise without creating a broad visibility gap.",
  },
  {
    question: "When is a tool-use activity complete?",
    choices: [
      "After the evidence, action, tool behavior, business function, monitoring, residual risk, and owner acceptance are validated and documented.",
      "When the dashboard becomes green.",
      "When the first alert closes.",
      "When the reviewer finishes collecting screenshots.",
    ],
    answer: 0,
    explanation: "Closure requires technical and business validation, not merely a changed dashboard state.",
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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={trackPath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Intermediate Track
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}


function ToolCategoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Tool Categories
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Tool Families and Their Evidence Boundaries
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {toolCategories.map((item) => (
          <div key={item.category} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-cyan-100">{item.category}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Purpose
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.purpose}</p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Common defensive actions
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.commonActions}</p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Evidence limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitations}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ActionLevelGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Action Levels
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Tool Access Becomes More Controlled as Impact Increases
      </h2>

      <div className="mt-6 grid gap-4">
        {actionLevels.map((item) => (
          <div key={item.level} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1fr_1fr]">
            <div>
              <p className="text-lg font-black text-cyan-100">{item.level}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Description
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>

            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Examples
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.examples}</p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Approval expectation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.approval}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AuthorizationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Authorization Questions
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions to Answer Before Tool Use
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {authorizationQuestions.map((item, index) => (
          <div key={item.question} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 font-black text-white">{item.question}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.why}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Defensive Tool Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div key={item.source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.supports}</p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Controlled Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Use a Defensive Tool in Six Safe Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div key={item.step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlanGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Authorized Tool Use Plan
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Compare Strong Scope Statements with Unsafe or Vague Ones
      </h2>

      <div className="mt-6 grid gap-4">
        {safeUsePlan.map((item) => (
          <div key={item.field} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.35fr_1fr_1fr]">
            <div>
              <p className="font-black text-cyan-100">{item.field}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Strong entry
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.strongEntry}</p>
            </div>

            <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Weak entry
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">{item.weakEntry}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DefensiveToolingAndSafeUsePage() {
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
              Module I5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5.1 Defensive Tooling and Safe Use
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders establish authorization, scope, ownership,
            evidence boundaries, action levels, rollback, validation, and
            reporting before using any fictional defensive security tool.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I5: Defensive Security Tools"
          lessonTitle="Defensive Tooling and Safe Use"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that defensive purpose does not remove the need for authorization and scope.",
            "I understand that observation, analysis, testing, change, containment, and remediation have different risk levels.",
            "I will preserve original fictional alerts, records, rules, settings, timestamps, and tool-health evidence.",
            "I will not treat a dashboard, alert title, severity, or scan result as a complete conclusion.",
            "I will use only fictional systems, users, tools, rules, alerts, events, tickets, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Defensive Tool Can Still Cause Harm When Used Without Control"
        >
          <p className="leading-8">
            A security tool may have permission to isolate devices, quarantine
            files, block traffic, disable accounts, modify rules, collect user
            activity, or scan systems. Those capabilities can protect an
            environment, but they can also interrupt classes, lock out users,
            hide evidence, break applications, expose private information, or
            create new visibility gaps when used without approval and planning.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The tool is for security, so any action it offers is safe to
                use.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm purpose, owner, scope, action level, evidence boundary,
                impact, stop condition, rollback, validation, and reporting
                before using the tool.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Professional Tool Use Protects Systems, Evidence, Privacy, and Trust"
        >
          <p className="leading-8">
            Defensive tools are most useful when their access, data, actions,
            configuration, ownership, health, and limits are understood.
            Controlled use makes results reproducible, prevents accidental
            disruption, protects private information, and creates findings that
            another reviewer can verify.
          </p>
        </SectionCard>

        <ToolCategoryGuide />
        <ActionLevelGuide />
        <AuthorizationGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Tool Output Is a Lead That Must Be Validated"
        >
          <p className="leading-8">
            An alert proves that configured logic triggered. A scan finding
            proves that the assessment tool reported a condition. A firewall
            event proves that a rule made a network decision. A dashboard proves
            that summarized data was displayed. None of those facts alone prove
            intent, complete cause, full scope, business impact, or the best
            response.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Observe", "What exactly did the fictional tool record or do?"],
              ["Verify", "Which raw source records, settings, and health evidence support it?"],
              ["Contextualize", "Which owner, asset, user, application, change, and business purpose apply?"],
              ["Decide", "What conclusion, confidence, impact, and narrow action are supported?"],
              ["Validate", "Did the control and business workflow produce the intended result afterward?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <EvidenceGuide />
        <WorkflowGuide />
        <PlanGuide />


        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Defensive Tool Governance Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Defensive Tool Governance Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services defensive-tool environment."
          metrics={[
            {
              label: "Authorized reviews",
              value: "14",
              note: "Each has a named owner, purpose, scope, evidence boundary, action level, and report recipient.",
            },
            {
              label: "Change-capable requests",
              value: "4",
              note: "Three have approved rollback and validation plans; one remains blocked pending application-owner review.",
            },
            {
              label: "Evidence gaps",
              value: "6",
              note: "Two stale inventories, one delayed collector, one missing rule version, and two incomplete owner records require follow-up.",
            },
          ]}
        />

        <FakeAlertCard
          title="Endpoint Alert Appears After an Approved Software Deployment"
          severity="Medium"
          time="02:18 PM"
          source="Fake Endpoint Protection Console"
          details="A fictional managed laptop records a medium-severity alert for a newly installed application component. The path, publisher, package identifier, owner, deployment window, and change ticket match the approved installation. The tool blocked no process, and no related persistence, unusual connection, or account activity is supplied."
          recommendation="Keep the review read-only, preserve the original alert and source events, verify tool health and deployment evidence, document the expected installation with appropriate confidence, avoid creating a broad exclusion, and monitor the exact component for recurrence."
        />

        <FakeLogPanel
          title="Fake Authorized Tool Review Timeline"
          logs={[
            "14:00:00 CHANGE device='training-laptop-61' package='approved-study-client' owner='learning-apps' approved='true'",
            "14:05:10 INVENTORY device='training-laptop-61' status='managed' expected_package='approved-study-client'",
            "14:11:22 INSTALL package='approved-study-client' publisher='Northstar Training Software' result='success'",
            "14:12:01 ENDPOINT process='study-client-helper' path='C:\\TrainingApps\\StudyClient\\helper.exe' result='started'",
            "14:12:03 EDR alert='new_component_review' severity='medium' action='observed'",
            "14:12:05 EDR prevention='none' quarantine='none' isolation='none'",
            "14:13:00 NETWORK unusual_connections='0' destination='approved-learning-service'",
            "14:14:10 CHANGE validation='application_opened' owner_confirmation='expected'",
            "14:18:00 MONITOR persistence_events='0' additional_alerts='0'",
            "14:20:00 REVIEW classification='expected_deployment_activity' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Tool-Use Decision Is Best Supported?"
          evidence={[
            "The laptop is a managed fictional asset.",
            "The package installation has an approved owner and change ticket.",
            "The executable path and publisher match the approved package.",
            "The alert action is observation only.",
            "The tool records no quarantine, process block, or device isolation.",
            "No unusual connections, persistence events, or account activity are supplied.",
            "The application owner validates expected function.",
            "No additional related alerts occur during monitoring.",
          ]}
          question="Which decision is strongest?"
          options={[
            "Document the alert as expected deployment activity with high confidence, preserve the evidence, avoid broad exclusion, and continue narrow monitoring.",
            "Isolate the laptop immediately because every endpoint alert proves compromise.",
            "Disable the endpoint tool so the expected alert does not appear again.",
            "Create a permanent exclusion for the entire application folder without testing.",
          ]}
          bestAnswer={0}
          explanation="Change, inventory, path, publisher, tool-action, network, owner, and monitoring evidence support expected deployment activity while preserving future visibility."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Defensive Tool Use Unsafe or Unreliable"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build an Authorized Tool Use Plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Request
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Endpoint Alert Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                A fictional application owner asks the security team to review
                five endpoint alerts that appeared during an approved software
                deployment. Students receive only supplied alert fields,
                endpoint events, inventory, publisher, package, change, owner,
                tool-health, and validation records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Plan
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>State the defensive question and expected output.</li>
                <li>Name the owner, approver, systems, users, evidence, and time window.</li>
                <li>Choose the correct action level and list prohibited actions.</li>
                <li>Define privacy, retention, sharing, and report-recipient limits.</li>
                <li>Preserve original alert, event, rule, configuration, and tool-health evidence.</li>
                <li>Define stop conditions and escalation triggers.</li>
                <li>Describe separate approval, rollback, validation, monitoring, and closure requirements for any proposed change.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real consoles,
            scan systems, test credentials, isolate devices, quarantine files,
            change rules, capture traffic, inspect private activity, or publish
            real users, devices, paths, alerts, settings, screenshots, or
            internal security details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Reviewer Has Read Access but the Scope Is Vague"
          scenario="A fictional analyst is allowed to open an endpoint console but receives only the instruction, “Look around and find anything concerning.”"
          choices={[
            {
              label: "Choice A",
              response: "Pause the review and request a named owner, neutral question, approved devices, users, data sources, time window, evidence-handling rules, action level, and report recipients.",
              outcome: "Best defensive choice. Console access does not replace a defined purpose and scope.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Search every user and device because access has already been granted.",
              outcome: "Unsafe. Broad collection can exceed authorization and expose unrelated private information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Create a report from whatever looks unusual without preserving source evidence.",
              outcome: "Weak response. The conclusions would be difficult to verify and could be misleading.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Noisy Rule Produces Many Expected Alerts"
          scenario="A fictional SIEM rule alerts on service restarts. Most alerts match an approved deployment test, but one restart is linked to an unknown process and remains unexplained."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the original rule, exclude only the exact approved deployment identifier after change approval, retain coverage for recovery and unknown-process restarts, test the change, prepare rollback, and monitor the result.",
              outcome: "Best defensive choice. Narrow tuning reduces known noise without hiding the unresolved pattern.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the rule because most alerts are expected.",
              outcome: "Unsafe. The unexplained restart would lose coverage.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore all future service-restart alerts manually.",
              outcome: "Weak response. Manual disregard creates an undocumented visibility gap.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Defensive Tooling and Safe Use Checklist"
          items={[
            "I define the fictional defensive purpose, question, owner, systems, users, data, time window, and expected output.",
            "I confirm documented authorization before opening, searching, testing, or changing a defensive tool.",
            "I classify the activity as observation, analysis, safe testing, change, containment, or remediation.",
            "I use least privilege and request separate approval before any change-capable action.",
            "I preserve original alerts, events, rules, settings, timestamps, tool-health records, and source evidence.",
            "I protect privacy by excluding unrelated data and limiting retention, sharing, and report recipients.",
            "I treat tool output as evidence that requires source-level validation and business context.",
            "I define stop conditions, escalation triggers, dependencies, business impact, rollback, and validation.",
            "I document facts, conclusions, alternatives, gaps, confidence, impact, owner, monitoring, and residual risk.",
            "I use only fictional evidence and never publish real users, devices, addresses, domains, paths, alerts, settings, screenshots, tickets, or internal tool details.",
          ]}
        />

        <MiniQuiz
          title="I5.1 Mini Quiz: Defensive Tooling and Safe Use"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Authorized Tool Use Plan for a defensive review involving one endpoint tool, one SIEM, one firewall, one inventory source, and one change-management source. Include purpose, neutral review question, owners, approvers, scope, users, systems, evidence, time window, action levels, prohibited actions, least privilege, privacy, retention, report recipients, source preservation, stop conditions, escalation, change approval, dependencies, rollback, validation, monitoring, findings format, residual risk, and closure criteria."
          tips={[
            "Use only fictional systems, users, tools, alerts, rules, settings, events, tickets, and organizations.",
            "Clearly separate read-only review from testing, configuration change, containment, and remediation.",
            "Include one noisy alert example and show how narrow tuning preserves important coverage.",
            "Do not include real console screenshots, credentials, addresses, domains, usernames, device names, rules, alerts, or internal security details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Defensive purpose never removes the need for authorization, scope, ownership, privacy, and safety controls.",
            "Observation, analysis, testing, change, containment, and remediation require different permissions and safeguards.",
            "Tool alerts, dashboards, scan findings, and automated labels are evidence leads rather than complete conclusions.",
            "Original tool output, configuration, health state, and source events must remain preserved and reviewable.",
            "Least privilege, stop conditions, rollback, validation, monitoring, and residual-risk documentation protect both systems and users.",
            "Professional tool use produces reproducible evidence-based decisions without collecting or changing more than the approved purpose requires.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I5
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