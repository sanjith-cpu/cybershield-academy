import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/security-automation-concepts`;

const lessons = [
  {
    number: "A17.1",
    title: "Why Security Automation Exists",
    href: `${modulePath}/why-security-automation-exists`,
    focus:
      "Understand why defensive teams automate repetitive, evidence-rich work and where automation can improve consistency, speed, scale, and analyst focus.",
    lab:
      "Map fictional repetitive security tasks and decide which are good automation candidates, poor candidates, or human-only decisions.",
    artifact:
      "Automation Opportunity Map",
  },
  {
    number: "A17.2",
    title: "Automation vs Human Judgment",
    href: `${modulePath}/automation-vs-human-judgment`,
    focus:
      "Separate repeatable machine-supported work from decisions that require context, authority, uncertainty handling, or accountable human judgment.",
    lab:
      "Build a Human-in-the-Loop Decision Matrix for fictional alert and workflow scenarios.",
    artifact:
      "Human-in-the-Loop Decision Matrix",
  },
  {
    number: "A17.3",
    title: "Alert Enrichment Concepts",
    href: `${modulePath}/alert-enrichment-concepts`,
    focus:
      "Learn how safe enrichment can attach context, ownership, asset metadata, known-good references, timestamps, and related evidence to alerts without taking unsafe response action.",
    lab:
      "Design an inert enrichment plan using synthetic alert metadata and fictional asset records.",
    artifact:
      "Alert Enrichment Plan",
  },
  {
    number: "A17.4",
    title: "Ticketing and Workflow Automation",
    href: `${modulePath}/ticketing-and-workflow-automation`,
    focus:
      "Explore safe workflow automation for ticket creation, assignment, deduplication, evidence attachment, status updates, reminders, and escalation.",
    lab:
      "Model a fictional ticket lifecycle with clear owners, evidence, and escalation rules.",
    artifact:
      "Ticketing and Workflow Automation Map",
  },
  {
    number: "A17.5",
    title: "Playbooks and Runbooks",
    href: `${modulePath}/playbooks-and-runbooks`,
    focus:
      "Distinguish playbooks, runbooks, decision support, analyst guidance, approval gates, and evidence capture without turning documentation into unsafe execution.",
    lab:
      "Build a safe decision-support playbook for a fictional alert triage scenario.",
    artifact:
      "Playbook and Runbook Design",
  },
  {
    number: "A17.6",
    title: "Safe Scripting Boundaries",
    href: `${modulePath}/safe-scripting-boundaries`,
    focus:
      "Define where security automation scripts may safely operate, what they must never do automatically, and how permissions, approvals, dry runs, validation, and logging reduce risk.",
    lab:
      "Create a fictional automation boundary checklist without accessing or changing real systems.",
    artifact:
      "Safe Automation Boundary Checklist",
  },
  {
    number: "A17.7",
    title: "Automation Failure Modes",
    href: `${modulePath}/automation-failure-modes`,
    focus:
      "Study stale data, loops, duplicate actions, false confidence, missing approvals, dependency failure, bad routing, partial execution, and silent evidence gaps.",
    lab:
      "Build a failure-mode register for fictional automations and design safe fallback states.",
    artifact:
      "Automation Failure Mode Register",
  },
  {
    number: "A17.8",
    title: "Measuring Automation Value",
    href: `${modulePath}/measuring-automation-value`,
    focus:
      "Measure automation with time saved, consistency, false-positive handling, analyst effort, queue health, exception rate, evidence quality, and safety outcomes.",
    lab:
      "Create a balanced automation value scorecard using synthetic operational metrics.",
    artifact:
      "Automation Value Scorecard",
  },
  {
    number: "A17.9",
    title: "Governance for Automation",
    href: `${modulePath}/governance-for-automation`,
    focus:
      "Assign automation owners, control owners, evidence owners, approval authority, change review, exception handling, monitoring, and shutdown criteria.",
    lab:
      "Create a governance matrix for fictional automation services and approval gates.",
    artifact:
      "Automation Governance Matrix",
  },
  {
    number: "A17.10",
    title: "Security Automation Design Lab",
    href: `${modulePath}/security-automation-design-lab`,
    focus:
      "Integrate opportunity selection, human judgment, enrichment, ticketing, playbooks, safe boundaries, failure handling, measurement, and governance into one defensive automation design.",
    lab:
      "Build the final Safe automation design and governance plan using synthetic evidence only.",
    artifact:
      "Safe Automation Design and Governance Plan",
  },
];

const outcomes = [
  "Explain why defensive security teams automate repetitive, evidence-rich work while preserving human judgment for ambiguous, high-impact, or authority-sensitive decisions.",
  "Design safe alert enrichment and workflow automation that adds context, creates or updates tickets, routes work, records evidence, and supports analysts without taking unsafe response actions.",
  "Distinguish playbooks, runbooks, automation logic, approval gates, human review points, failure handling, and governance responsibilities.",
  "Evaluate automation failure modes including stale context, duplicate actions, broken dependencies, loops, partial execution, silent failure, bad routing, and false confidence.",
  "Measure automation value using speed, consistency, analyst effort, exception rate, evidence quality, queue health, false-positive handling, and safety outcomes rather than raw activity counts.",
  "Produce a Safe automation design and governance plan that combines boundaries, ownership, evidence, measurement, fallback behavior, human review, and change controls.",
];

const professionalRoles = [
  {
    role: "Security Automation Engineer",
    responsibility:
      "Designs defensive workflow automation, enrichment, integrations, validation, observability, and safe failure behavior.",
  },
  {
    role: "SOC Analyst",
    responsibility:
      "Uses automation-supported evidence while retaining human judgment for ambiguous or high-impact decisions.",
  },
  {
    role: "Detection Engineer",
    responsibility:
      "Defines alert context, enrichment needs, evidence quality, and detection-to-workflow handoffs.",
  },
  {
    role: "Incident Response Lead",
    responsibility:
      "Defines response authority, approval gates, escalation, and which decisions must remain human-controlled.",
  },
  {
    role: "Security Platform Owner",
    responsibility:
      "Owns the reliability, permissions, lifecycle, integrations, and operational health of the automation platform.",
  },
  {
    role: "Control Owner",
    responsibility:
      "Defines the intended control behavior and evidence required to show the automation supports it safely.",
  },
  {
    role: "Evidence Owner",
    responsibility:
      "Ensures automation logs, decisions, exceptions, and review evidence remain attributable and current.",
  },
  {
    role: "Risk / Governance Owner",
    responsibility:
      "Approves boundaries, exceptions, material changes, residual risk, and escalation within defined authority.",
  },
];

const automationModel = [
  {
    step: "Understand the work",
    description:
      "Start with the real analyst task, input evidence, business purpose, current pain points, and decision authority.",
    question:
      "What repetitive work is the team actually trying to improve?",
  },
  {
    step: "Choose the safe automation boundary",
    description:
      "Automate deterministic support tasks such as enrichment, routing, ticketing, evidence attachment, reminders, and low-risk normalization.",
    question:
      "What can the system do safely without making a high-impact judgment?",
  },
  {
    step: "Preserve human judgment",
    description:
      "Keep approval gates for uncertain, consequential, authority-sensitive, or environment-changing decisions.",
    question:
      "Where must a qualified person review the evidence and decide?",
  },
  {
    step: "Design failure and evidence",
    description:
      "Define validation, timeout, retry, duplicate protection, exception handling, logs, ownership, and safe fallback behavior.",
    question:
      "What happens when data is wrong, missing, late, duplicated, or unavailable?",
  },
  {
    step: "Measure and govern",
    description:
      "Track value, safety, exceptions, quality, ownership, changes, and review triggers over time.",
    question:
      "How will the organization know whether the automation remains useful and safe?",
  },
];

const safeAutomationExamples = [
  {
    id: "AUT-01",
    name: "Alert Context Enrichment",
    input:
      "Synthetic alert ID, fictional asset ID, timestamp, detection category",
    automation:
      "Attach asset owner, business criticality, known maintenance window, and related synthetic alert references.",
    human:
      "Analyst reviews the combined evidence and decides the next investigative step.",
    evidence:
      "Enrichment timestamp, source, version, confidence, missing-field status",
    state:
      "Safe candidate",
  },
  {
    id: "AUT-02",
    name: "Ticket Creation and Routing",
    input:
      "Synthetic alert metadata and severity category",
    automation:
      "Create a ticket, attach evidence summary, assign the correct fictional team, and set the review SLA.",
    human:
      "Assigned analyst validates context and determines the disposition.",
    evidence:
      "Ticket ID, rule version, routing reason, assignment timestamp",
    state:
      "Safe candidate",
  },
  {
    id: "AUT-03",
    name: "Duplicate Alert Grouping",
    input:
      "Synthetic alert fingerprints and timestamps",
    automation:
      "Group alerts that match an approved duplicate rule and preserve all original references.",
    human:
      "Analyst can separate the group when context shows the events are not equivalent.",
    evidence:
      "Grouping rule, grouped IDs, exception history, analyst override",
    state:
      "Safe with override",
  },
  {
    id: "AUT-04",
    name: "Playbook Recommendation",
    input:
      "Synthetic alert category, asset type, evidence completeness",
    automation:
      "Recommend the appropriate defensive review playbook and highlight missing evidence.",
    human:
      "Analyst chooses whether the playbook fits the current context.",
    evidence:
      "Recommendation reason, playbook version, analyst selection",
    state:
      "Decision support",
  },
  {
    id: "AUT-05",
    name: "Approval Gate",
    input:
      "Fictional workflow reaches a high-impact decision point",
    automation:
      "Pause the workflow, package current evidence, identify the authorized approver, and request review.",
    human:
      "Authorized reviewer approves, rejects, or requests more evidence.",
    evidence:
      "Approver, decision, timestamp, rationale, evidence version",
    state:
      "Human required",
  },
  {
    id: "AUT-06",
    name: "Automation Health Monitoring",
    input:
      "Synthetic workflow metrics, failures, exceptions, latency, and stale-data signals",
    automation:
      "Update a health dashboard and open a maintenance ticket when agreed thresholds are crossed.",
    human:
      "Platform owner reviews trends and decides whether to change or disable the workflow.",
    evidence:
      "Metric history, threshold, ticket, owner decision",
    state:
      "Safe candidate",
  },
];

const evidencePreview = [
  {
    type: "Automation Opportunity Record",
    purpose:
      "Shows the repetitive task, inputs, desired outcome, current manual effort, business value, and whether automation is appropriate.",
  },
  {
    type: "Human Review Matrix",
    purpose:
      "Shows which decisions are automated, recommended, approval-gated, or fully human-controlled.",
  },
  {
    type: "Enrichment Record",
    purpose:
      "Shows which context sources are added, their freshness, confidence, owner, and what happens when enrichment is missing.",
  },
  {
    type: "Workflow Record",
    purpose:
      "Shows ticket creation, routing, duplicate handling, status transitions, evidence attachment, and escalation.",
  },
  {
    type: "Failure / Exception Record",
    purpose:
      "Shows timeouts, stale context, failed dependencies, duplicates, partial execution, manual fallback, and ownership.",
  },
  {
    type: "Automation Governance Decision",
    purpose:
      "Shows owner, permissions, approval authority, evidence, change trigger, metrics, review cadence, and shutdown criteria.",
  },
];

const portfolioSections = [
  "Executive Summary",
  "Automation Opportunity Map",
  "Human-in-the-Loop Decision Matrix",
  "Alert Enrichment Plan",
  "Ticketing and Workflow Automation Map",
  "Playbook and Runbook Design",
  "Safe Automation Boundary Checklist",
  "Automation Failure Mode Register",
  "Automation Value Scorecard",
  "Automation Governance Matrix",
  "Safe Automation Design and Governance Plan",
];

const dashboardMetrics = [
  {
    label: "A17 lessons",
    value: "10",
    note: "From automation purpose through the final design lab",
  },
  {
    label: "Automation theme",
    value: "Support",
    note: "Enrichment, ticketing, routing, evidence, recommendations, and workflow assistance",
  },
  {
    label: "High-impact actions",
    value: "Human gated",
    note: "Consequential or environment-changing decisions remain under authorized human judgment",
  },
  {
    label: "Portfolio outcome",
    value: "1 integrated plan",
    note: "Safe automation design and governance plan",
  },
];

const logs = [
  "[08:10] AUT-01 function=ENRICH_ALERT action=ADD_CONTEXT environment_change=NO state=SAFE_CANDIDATE",
  "[08:32] AUT-02 function=CREATE_TICKET action=ROUTE_WORK environment_change=NO state=SAFE_CANDIDATE",
  "[08:54] AUT-03 function=GROUP_DUPLICATES analyst_override=YES state=SAFE_WITH_OVERRIDE",
  "[09:16] AUT-04 function=RECOMMEND_PLAYBOOK execute_response=NO state=DECISION_SUPPORT",
  "[09:38] AUT-05 function=APPROVAL_GATE automated_decision=NO state=HUMAN_REQUIRED",
  "[10:00] AUT-06 function=HEALTH_MONITOR action=MAINTENANCE_TICKET state=SAFE_CANDIDATE",
];

const takeaways = [
  "Security automation should improve repetitive defensive work without removing accountable human judgment from consequential decisions.",
  "Safe automation candidates include enrichment, ticketing, routing, evidence attachment, reminders, duplicate handling, recommendations, and health monitoring.",
  "Human review is especially important when context is ambiguous, evidence is incomplete, authority is required, or an action could materially change an environment.",
  "Automation needs explicit permissions, validation, evidence, ownership, failure handling, and safe fallback behavior.",
  "A successful workflow must handle stale data, missing dependencies, duplicates, loops, timeouts, partial failure, and analyst override.",
  "Automation value should be measured by outcomes and quality, not by the number of automated actions.",
  "Governance should define owners, approvals, evidence, metrics, change triggers, exception handling, review cadence, and shutdown criteria.",
  "A17 remains defensive and inert: the curriculum teaches workflow support and planning, not autonomous offensive or destructive action.",
  "The final A17 portfolio outcome is the Safe automation design and governance plan.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

export default function SecurityAutomationConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Module A17
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Governance and Automation
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Module 17
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Security Automation Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defensive teams plan safe automation for alert
            enrichment, ticketing, routing, analyst support, playbooks,
            evidence, failure handling, measurement, and governance—without
            turning automation into unsafe autonomous action.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The module uses fictional systems, synthetic alerts, inert workflow
            records, and school-safe decision scenarios. It does not require
            access to real security tools, accounts, networks, endpoints,
            credentials, or production environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/why-security-automation-exists`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A17.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Advanced Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A17 Entry Readiness"
          items={[
            "I understand that automation should support defensive work, not remove accountability.",
            "I can distinguish repetitive workflow steps from high-impact decisions.",
            "I can reason from fictional alerts, tickets, logs, ownership, and evidence.",
            "I will use only synthetic and inert examples throughout this module.",
          ]}
        />

        <Section
          eyebrow="Module Purpose"
          title="Safe Automation Planning for Defensive Security Work"
        >
          <p className="leading-8">
            Security teams often face repetitive work: attaching context to
            alerts, opening tickets, routing work, recording evidence, tracking
            status, reminding owners, grouping duplicates, and presenting
            analysts with the right playbook. These tasks can be excellent
            automation candidates when their inputs, outputs, permissions,
            failure states, and ownership are understood.
          </p>

          <p className="mt-4 leading-8">
            The module does not treat automation as “let the system do
            everything.” Instead, it teaches a professional distinction between
            deterministic support work and decisions that require human
            judgment, authority, context, or accountability.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-lg font-black">
              Official purpose
            </p>
            <p className="mt-2 leading-8">
              Teach safe automation planning for alert enrichment, ticketing,
              workflows, and response support without unsafe actions.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Outcomes"
          title="Six Capabilities You Will Build"
        >
          <div className="grid gap-4">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{outcome}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module-Level Decision Model"
          title="From Repetitive Work to Governed Automation"
        >
          <p className="leading-8">
            This five-part model is an orientation for the module, not a rigid
            template every lesson repeats. Different lessons will use the
            structure that best fits enrichment, workflow design, playbooks,
            failure analysis, measurement, or governance.
          </p>

          <div className="mt-6 grid gap-5">
            {automationModel.map((item, index) => (
              <article
                key={item.step}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.step}
                    </h3>
                    <p className="mt-2 leading-7 text-purple-100">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Key question: {item.question}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Professional Roles"
          title="Who Works With Security Automation?"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {professionalRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.responsibility}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Automation Boundary"
          title="What A17 Automates—and What It Does Not"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6">
              <h3 className="text-xl font-black text-emerald-50">
                Safe defensive support
              </h3>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-emerald-100">
                {[
                  "Attach synthetic context to fictional alerts.",
                  "Create and route fictional tickets.",
                  "Group duplicate synthetic records while preserving originals.",
                  "Recommend a playbook without executing response actions.",
                  "Package evidence for human review.",
                  "Send reminders and escalation notices.",
                  "Track workflow health and open maintenance tickets.",
                  "Measure time, quality, exceptions, and analyst workload.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-400/20 bg-slate-950/50 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-red-400/25 bg-red-400/10 p-6">
              <h3 className="text-xl font-black text-red-50">
                Outside the A17 boundary
              </h3>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-red-100">
                {[
                  "No autonomous destructive or environment-changing response.",
                  "No credential access or secret collection.",
                  "No real endpoint, cloud, network, or account modification.",
                  "No scanning, probing, exploitation, password guessing, or bypass activity.",
                  "No disabling security controls.",
                  "No hidden or unlogged actions.",
                  "No automation designed to conceal activity.",
                  "No real-world response execution by the student.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-red-400/20 bg-slate-950/50 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <Section
          eyebrow="Fictional Automation Portfolio"
          title="Six Northbridge Automation Records"
        >
          <div className="grid gap-5">
            {safeAutomationExamples.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.name}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Input
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.input}
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Automation support
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.automation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Human responsibility
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.human}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="A17 Security Automation Module Dashboard"
          subtitle="Fictional automation scope, safety boundary, and portfolio summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Automation Reached a High-Impact Decision Point"
          severity="High"
          time="09:38"
          source="Fictional Northbridge Workflow Engine"
          details="AUT-05 reached a decision point that requires contextual judgment and authorized approval. The workflow packaged the current evidence and paused instead of taking autonomous action."
          recommendation="Keep the workflow paused until the authorized human reviewer approves, rejects, or requests additional evidence."
        />

        <FakeLogPanel
          title="Fictional A17 Automation Preview Log"
          logs={logs}
        />

        <Section
          eyebrow="Evidence Preview"
          title="What You Will Learn to Produce"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidencePreview.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.purpose}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lesson Sequence"
          title="A17 Has 10 Lessons"
        >
          <div className="grid gap-5">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="group rounded-3xl border border-slate-700 bg-slate-950 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                        {lesson.number}
                      </span>
                      <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">
                        {lesson.title}
                      </h3>
                    </div>

                    <p className="mt-4 leading-8 text-slate-300">
                      {lesson.focus}
                    </p>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                          Defensive lab
                        </p>
                        <p className="mt-2 text-sm leading-7 text-purple-50">
                          {lesson.lab}
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                          Portfolio artifact
                        </p>
                        <p className="mt-2 text-sm leading-7 text-emerald-50">
                          {lesson.artifact}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950">
                    Open Lesson →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Outcome"
          title="Safe Automation Design and Governance Plan"
        >
          <p className="leading-8">
            The A17 portfolio builds cumulatively. Each lesson contributes one
            piece of evidence to a final safe automation design that explains
            what should be automated, what should remain human-controlled, how
            failures are handled, how evidence is recorded, how value is
            measured, and how the workflow is governed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioSections.map((section, index) => (
              <div
                key={section}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{section}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module Assessment"
          title="25-Question A17 Module Test"
        >
          <p className="leading-8">
            After A17.10, the module concludes with a 25-question assessment
            covering automation purpose, human review, enrichment, ticketing,
            playbooks, safe boundaries, failure modes, metrics, and governance.
          </p>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-black text-cyan-100 transition hover:bg-cyan-400/20"
            >
              A17 Module Test
            </Link>
          </div>
        </Section>

        <Section
          eyebrow="Change and Governance"
          title="Automation Is a Living Control"
        >
          <p className="leading-8">
            A workflow that was safe last month can become unreliable after a
            data source changes, a ticket field is renamed, a routing owner
            leaves, an enrichment source becomes stale, a playbook changes, or
            the business starts using the workflow for a different purpose.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "New input source",
              "New workflow purpose",
              "New high-impact decision",
              "Changed ticket schema",
              "Changed owner or approval authority",
              "Stale enrichment source",
              "New external dependency",
              "Repeated exception or failure",
              "Major increase in false positives",
              "Unexpected automation loop",
              "Evidence gap",
              "Material metric deterioration",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            A17 Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Automation in this module is defensive, fictional, inert, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not connect lesson work to real endpoints, networks, cloud
            accounts, production security tools, credentials, private data, or
            real response systems. Do not automate destructive,
            environment-changing, exploitative, credential-related, or
            unauthorized actions. A17 focuses on enrichment, ticketing,
            routing, evidence, recommendations, measurement, safe boundaries,
            and human approval.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Start A17
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Begin with A17.1 — Why Security Automation Exists
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The first lesson starts with the problem automation is meant to
            solve: repetitive defensive work, evidence overload, inconsistent
            workflows, analyst time, and the need to preserve human judgment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/why-security-automation-exists`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A17.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}