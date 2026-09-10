import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const advancedPath = "/high-school/advanced";
const modulePath = "/high-school/advanced/advanced-defensive-labs";

const lessons = [
  {
    number: "A18.1",
    title: "Multi-Source Alert Investigation",
    href: `${modulePath}/multi-source-alert-investigation`,
    focus:
      "Correlate several fictional alerts, logs, timestamps, ownership records, and workflow clues without assuming that every signal tells the same story.",
    lab:
      "Build an investigation worksheet that separates observed evidence, inferred relationships, unanswered questions, and the next safe review action.",
    artifact:
      "Multi-Source Investigation Brief",
  },
  {
    number: "A18.2",
    title: "Network Defense Architecture Review",
    href: `${modulePath}/network-defense-architecture-review`,
    focus:
      "Review a fictional network-defense architecture for segmentation, trust boundaries, monitoring coverage, resilience, logging, and governance gaps.",
    lab:
      "Annotate a synthetic architecture case and produce a prioritized defensive improvement review without probing or testing any real network.",
    artifact:
      "Network Defense Architecture Review",
  },
  {
    number: "A18.3",
    title: "Cloud Security Review Case",
    href: `${modulePath}/cloud-security-review-case`,
    focus:
      "Evaluate a fictional cloud environment using shared-responsibility, identity, storage exposure, network boundaries, logging, backup, and configuration-governance concepts.",
    lab:
      "Turn synthetic cloud evidence into findings, risk statements, owners, compensating controls, and a remediation sequence.",
    artifact:
      "Cloud Security Case Review",
  },
  {
    number: "A18.4",
    title: "Identity Access Review Case",
    href: `${modulePath}/identity-access-review-case`,
    focus:
      "Analyze a fictional access-review case involving roles, privileges, stale access, service identities, approvals, exceptions, and monitoring evidence.",
    lab:
      "Create an access-review decision matrix that distinguishes retain, modify, remove, escalate, and evidence-insufficient outcomes.",
    artifact:
      "Identity Access Review Decision Pack",
  },
  {
    number: "A18.5",
    title: "Incident Response Tabletop Case",
    href: `${modulePath}/incident-response-tabletop-case`,
    focus:
      "Work through a fictional incident-response tabletop where evidence changes over time and teams must choose communication, containment-support, escalation, and recovery-review decisions.",
    lab:
      "Document decision points, owners, evidence gaps, assumptions, communications, and post-incident learning without performing real response actions.",
    artifact:
      "Incident Response Tabletop Record",
  },
  {
    number: "A18.6",
    title: "Detection Tuning Case",
    href: `${modulePath}/detection-tuning-case`,
    focus:
      "Review fictional alert volume, false-positive patterns, context, rule assumptions, and analyst feedback to improve a defensive detection safely.",
    lab:
      "Produce a tuning recommendation that preserves useful coverage while reducing avoidable noise and documenting what evidence justified the change.",
    artifact:
      "Detection Tuning Recommendation",
  },
  {
    number: "A18.7",
    title: "Risk Register Case",
    href: `${modulePath}/risk-register-case`,
    focus:
      "Translate mixed technical and operational evidence into clear risk statements, likelihood, impact, controls, owners, treatment decisions, and review dates.",
    lab:
      "Build a fictional risk register that connects technical findings to business consequences and governance decisions.",
    artifact:
      "Defensive Risk Register",
  },
  {
    number: "A18.8",
    title: "Forensics Timeline Case",
    href: `${modulePath}/forensics-timeline-case`,
    focus:
      "Reconstruct a defensive timeline from fictional timestamps, logs, tickets, and analyst notes while distinguishing fact, sequence, uncertainty, and interpretation.",
    lab:
      "Create a traceable timeline with source references, confidence labels, contradictions, and unanswered questions.",
    artifact:
      "Forensics Timeline and Evidence Narrative",
  },
  {
    number: "A18.9",
    title: "Executive Summary Writing",
    href: `${modulePath}/executive-summary-writing`,
    focus:
      "Convert detailed defensive case evidence into concise leadership communication that explains what happened, why it matters, what is known, what is uncertain, and what should happen next.",
    lab:
      "Write technical, manager, and executive versions of the same fictional case summary without exaggerating confidence.",
    artifact:
      "Executive Security Summary",
  },
  {
    number: "A18.10",
    title: "Advanced Lab Challenge",
    href: `${modulePath}/advanced-lab-challenge`,
    focus:
      "Integrate investigation, architecture, cloud, identity, incident-response, detection, risk, timeline, and communication skills into one multi-part defensive case.",
    lab:
      "Produce the final Advanced Defensive Casebook and Executive Review from a complex fictional evidence package.",
    artifact:
      "Advanced Defensive Casebook and Executive Review",
  },
];

const outcomes = [
  "Correlate multiple fictional evidence sources without confusing observation, inference, confidence, contradiction, and unanswered questions.",
  "Review defensive architecture across network, cloud, and identity systems using trust boundaries, least privilege, logging, resilience, governance, and business context.",
  "Make disciplined incident-response, detection-tuning, and risk decisions from incomplete evidence while preserving human judgment and documenting assumptions.",
  "Build defensible timelines and evidence narratives that preserve source references, timestamps, uncertainty, contradictions, and chain-of-reasoning summaries without fabricating missing facts.",
  "Translate technical findings into prioritized remediation, ownership, risk, and leadership communication that is clear enough for both practitioners and decision-makers.",
  "Produce an Advanced Defensive Casebook and Executive Review that demonstrates safe, evidence-based analysis across the full A18 case portfolio.",
];

const professionalRoles = [
  {
    role: "SOC Analyst",
    contribution:
      "Correlates alerts, logs, tickets, and context while documenting what is known and what still needs review.",
  },
  {
    role: "Detection Engineer",
    contribution:
      "Evaluates whether detections are useful, noisy, stale, overly broad, or missing the context analysts need.",
  },
  {
    role: "Security Architect",
    contribution:
      "Reviews trust boundaries, segmentation, resilience, control placement, identity dependencies, and monitoring coverage.",
  },
  {
    role: "Cloud Security Engineer",
    contribution:
      "Assesses fictional cloud configuration, identity, storage, network boundaries, logging, backup, and governance.",
  },
  {
    role: "Identity Security Analyst",
    contribution:
      "Reviews access, privilege, approvals, stale entitlements, service identities, exceptions, and monitoring.",
  },
  {
    role: "Incident Response Lead",
    contribution:
      "Coordinates evidence, decisions, communication, escalation, containment support, recovery review, and lessons learned.",
  },
  {
    role: "Digital Forensics Analyst",
    contribution:
      "Builds evidence-backed timelines while separating source facts from interpretation and uncertainty.",
  },
  {
    role: "Risk / Governance Analyst",
    contribution:
      "Translates technical evidence into risk, treatment, ownership, review cadence, and decision accountability.",
  },
  {
    role: "Security Program Manager",
    contribution:
      "Turns findings into prioritized work, owners, dependencies, milestones, and leadership updates.",
  },
  {
    role: "Executive Security Communicator",
    contribution:
      "Explains security evidence and decisions in concise language that preserves accuracy without drowning leadership in raw technical detail.",
  },
];

const caseReviewCycle = [
  {
    phase: "Understand the case",
    detail:
      "Read the fictional scenario, define the scope, identify the business or service context, and list the evidence sources before drawing conclusions.",
  },
  {
    phase: "Separate evidence from interpretation",
    detail:
      "Record what each log, alert, diagram, ticket, timeline entry, or ownership record actually shows before adding hypotheses.",
  },
  {
    phase: "Test the story",
    detail:
      "Compare timestamps, sources, architecture, identity, workflow state, and contradictory evidence to see which explanations remain plausible.",
  },
  {
    phase: "Make a defensive decision",
    detail:
      "Choose the next safe action, escalation, tuning recommendation, risk treatment, or architecture improvement based on the strongest supported evidence.",
  },
  {
    phase: "Communicate and preserve",
    detail:
      "Document findings, uncertainty, owners, priorities, evidence references, and the leadership-level meaning of the case.",
  },
];

const evidenceTypes = [
  {
    type: "Synthetic alerts",
    questions:
      "What triggered? How confident is the alert? What evidence supports it? What context is missing?",
    examples:
      "Alert ID, severity, timestamp, source, rule name, evidence summary, recommendation.",
  },
  {
    type: "Fictional logs",
    questions:
      "What event occurred? At what time? Which source produced the record? Is the timestamp comparable with other sources?",
    examples:
      "Authentication event, workflow state, service health, ticket update, configuration-change record.",
  },
  {
    type: "Architecture diagrams",
    questions:
      "Where are the trust boundaries? Which controls protect each transition? Where is monitoring or resilience weak?",
    examples:
      "User zone, application tier, management plane, identity provider, cloud service, logging path.",
  },
  {
    type: "Identity records",
    questions:
      "Who or what has access? Why? Who approved it? Is the access current, necessary, and monitored?",
    examples:
      "Role assignment, privilege level, approval state, review date, exception, service identity.",
  },
  {
    type: "Ticket and workflow records",
    questions:
      "Who owns the work? What state is it in? Which evidence is attached? Were handoffs or escalations correct?",
    examples:
      "Ticket ID, queue, owner, status, evidence package, decision, timestamp.",
  },
  {
    type: "Risk records",
    questions:
      "What could happen, why does it matter, how likely is it, what controls exist, and who owns treatment?",
    examples:
      "Risk statement, likelihood, impact, existing control, residual risk, owner, due date.",
  },
  {
    type: "Timeline evidence",
    questions:
      "What is the order of events? Which facts are directly supported? Where do timestamps conflict or remain uncertain?",
    examples:
      "Observed timestamp, normalized time, source, event, confidence, contradiction note.",
  },
  {
    type: "Leadership summaries",
    questions:
      "What does leadership need to know to make a decision without losing critical uncertainty or context?",
    examples:
      "What happened, why it matters, current exposure, actions underway, decisions needed, next checkpoint.",
  },
];

const portfolioSections = [
  {
    artifact: "Multi-Source Investigation Brief",
    lesson: "A18.1",
    purpose:
      "Shows how several evidence sources can be combined into one disciplined investigation without inventing missing facts.",
  },
  {
    artifact: "Network Defense Architecture Review",
    lesson: "A18.2",
    purpose:
      "Shows how architecture design affects trust, monitoring, containment, resilience, and operational risk.",
  },
  {
    artifact: "Cloud Security Case Review",
    lesson: "A18.3",
    purpose:
      "Shows how cloud identity, storage, networking, logging, backup, and governance combine into one defensive review.",
  },
  {
    artifact: "Identity Access Review Decision Pack",
    lesson: "A18.4",
    purpose:
      "Shows how access decisions remain evidence-based, least-privileged, reviewed, and accountable.",
  },
  {
    artifact: "Incident Response Tabletop Record",
    lesson: "A18.5",
    purpose:
      "Shows how teams make and document decisions while a fictional incident evolves.",
  },
  {
    artifact: "Detection Tuning Recommendation",
    lesson: "A18.6",
    purpose:
      "Shows how analysts improve signal quality without blindly suppressing difficult alerts.",
  },
  {
    artifact: "Defensive Risk Register",
    lesson: "A18.7",
    purpose:
      "Shows how technical findings become business-aware risk, treatment, ownership, and review decisions.",
  },
  {
    artifact: "Forensics Timeline and Evidence Narrative",
    lesson: "A18.8",
    purpose:
      "Shows how time-ordered evidence can support reconstruction while preserving uncertainty and source references.",
  },
  {
    artifact: "Executive Security Summary",
    lesson: "A18.9",
    purpose:
      "Shows how complex defensive evidence becomes concise leadership communication.",
  },
  {
    artifact: "Advanced Defensive Casebook and Executive Review",
    lesson: "A18.10",
    purpose:
      "Combines the entire module into one professional final case portfolio.",
  },
];

const fictionalCase = [
  {
    id: "CASE-18-01",
    source: "Synthetic Alert Queue",
    observation:
      "Three alerts were created within a sixteen-minute window for the same fictional service.",
    uncertainty:
      "The alerts may represent one related issue or several unrelated events.",
    next:
      "Compare alert evidence, timestamps, service ownership, and related ticket history.",
  },
  {
    id: "CASE-18-02",
    source: "Fictional Identity Review",
    observation:
      "One service identity has broader access than the current architecture diagram appears to require.",
    uncertainty:
      "The access may be stale, intentionally retained, or documented elsewhere.",
    next:
      "Review purpose, approval, last-review date, dependencies, and exception records.",
  },
  {
    id: "CASE-18-03",
    source: "Fictional Network Diagram",
    observation:
      "The management path and production application path share a monitoring dependency.",
    uncertainty:
      "The diagram does not show whether a second monitoring path exists.",
    next:
      "Record the resilience question rather than assuming a single point of failure.",
  },
  {
    id: "CASE-18-04",
    source: "Synthetic Ticket Workflow",
    observation:
      "A ticket was reassigned twice before reaching the service owner.",
    uncertainty:
      "The cause may be stale ownership, ambiguous routing rules, or human reassignment.",
    next:
      "Compare routing history with the ownership source and analyst notes.",
  },
  {
    id: "CASE-18-05",
    source: "Fictional Cloud Review",
    observation:
      "A storage object is classified as internal but the evidence package lacks the latest review timestamp.",
    uncertainty:
      "The configuration may be correct while governance evidence is stale.",
    next:
      "Separate configuration state from governance-evidence quality.",
  },
  {
    id: "CASE-18-06",
    source: "Synthetic Detection Metrics",
    observation:
      "Alert volume increased 60% after a fictional rule revision.",
    uncertainty:
      "The increase may represent better visibility, excessive noise, or a changed event population.",
    next:
      "Review true-positive indicators, false-positive patterns, analyst effort, and rule assumptions.",
  },
];

const dashboardMetrics = [
  {
    label: "Defensive cases",
    value: "10",
    note: "Investigation, architecture, cloud, identity, IR, detection, risk, forensics, communication, and capstone",
  },
  {
    label: "Primary evidence types",
    value: "8",
    note: "Alerts, logs, diagrams, identity, tickets, risks, timelines, and leadership summaries",
  },
  {
    label: "Real systems touched",
    value: "0",
    note: "All labs are fictional, synthetic, inert, and defensive",
  },
  {
    label: "Final portfolio",
    value: "1 casebook",
    note: "Advanced Defensive Casebook and Executive Review",
  },
];

const logs = [
  "[08:12] CASE-18-01 source=ALERT_QUEUE alerts=3 relationship=UNCONFIRMED action=CORRELATE_EVIDENCE",
  "[08:28] CASE-18-02 source=IDENTITY_REVIEW access=BROADER_THAN_DIAGRAM status=NEEDS_CONTEXT",
  "[08:46] CASE-18-03 source=ARCH_DIAGRAM monitoring_dependency=SHARED resilience=QUESTION_OPEN",
  "[09:04] CASE-18-04 source=TICKET_WORKFLOW reassignments=2 cause=UNKNOWN action=CHECK_ROUTING_HISTORY",
  "[09:22] CASE-18-05 source=CLOUD_REVIEW config_state=UNKNOWN evidence_freshness=STALE",
  "[09:40] CASE-18-06 source=DETECTION_METRICS alert_volume_change=+60% conclusion=NOT_YET_SUPPORTED",
];

const moduleBoundaries = [
  "Use fictional or synthetic logs, alerts, identities, networks, cloud records, tickets, diagrams, risks, and timelines only.",
  "Do not scan, probe, enumerate, fuzz, exploit, attack, or test real systems.",
  "Do not provide or use credential attacks, password guessing, token theft, privilege escalation, bypass techniques, or session hijacking.",
  "Do not create malicious payloads, exploit strings, destructive scripts, persistence techniques, or instructions for evading detection.",
  "Do not access real cloud tenants, endpoints, networks, accounts, secrets, private records, or production security tools.",
  "Architecture review remains conceptual and defensive; it does not become instructions for defeating the architecture.",
  "Forensics work uses synthetic evidence and focuses on timeline reasoning, source integrity, uncertainty, and reporting.",
  "Incident-response cases focus on decision-making, coordination, evidence, communication, and governance rather than operational attack or counterattack steps.",
  "Detection tuning should improve defensive signal quality without teaching evasion or ways to avoid detection.",
  "Executive summaries must preserve uncertainty and must not invent facts that the fictional evidence does not support.",
];

const takeaways = [
  "A18 is a case-based module: the goal is to reason from evidence, not memorize a repeated formula.",
  "Professional defensive analysis separates observation, inference, uncertainty, contradiction, and recommendation.",
  "Network, cloud, and identity reviews should connect technical controls to ownership, resilience, monitoring, and business impact.",
  "Incident response and detection tuning require judgment because evidence changes and metrics can be misleading.",
  "Risk registers translate technical findings into business-aware treatment and accountability.",
  "Forensics timelines are strongest when every event remains traceable to a source and uncertainty stays visible.",
  "Executive summaries should be shorter than technical reports but never less accurate.",
  "Every A18 lab remains fictional, synthetic, inert, defensive, and school-safe.",
  "The ten lesson artifacts accumulate into the final Advanced Defensive Casebook and Executive Review.",
  "The A18 module test will contain 25 questions covering the entire case-analysis curriculum.",
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

export default function AdvancedDefensiveLabsHomepage() {
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
              Module A18
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Defensive Casework
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            A18 — Advanced Defensive Labs
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Analyze Complex Defensive Cases Without Losing the Evidence
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A18 changes the rhythm of the Advanced track. Instead of learning one
            concept at a time, you will work through fictional cases that mix
            alerts, logs, architecture, identity, cloud, workflow, risk,
            timelines, and leadership communication.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The purpose is not to make every case fit one rigid framework. It is
            to develop disciplined defensive judgment: know what the evidence
            says, know what it does not say, choose the next safe action, and
            communicate the decision clearly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A18.1
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Advanced Track
            </Link>

            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-emerald-400 hover:text-emerald-100"
            >
              A18 Module Test
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A18 Entry Readiness"
          items={[
            "I can read fictional alerts, logs, tickets, architecture evidence, and risk records without treating one source as automatically correct.",
            "I can separate observed evidence from interpretation and unanswered questions.",
            "I can make defensive recommendations without scanning, exploiting, or interacting with real systems.",
            "I am ready to write both technical findings and concise leadership summaries.",
          ]}
        />

        <Section
          eyebrow="Module Mission"
          title="From Isolated Skills to Integrated Defensive Judgment"
        >
          <p className="leading-8">
            Earlier Advanced modules taught architecture, detection, incident
            response, cloud, identity, risk, privacy, automation, and other
            professional concepts in depth. A18 asks you to use those ideas at
            the same time.
          </p>

          <p className="mt-4 leading-8">
            Real defensive work rarely arrives neatly labeled. An alert may
            depend on an identity record. An architecture question may become a
            risk decision. A detection problem may actually be stale ownership.
            A timeline may contain conflicting clocks. An executive summary may
            need to explain uncertainty without sounding indecisive.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A18 is about making defensible decisions from mixed evidence—not forcing every case into the same answer pattern.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Module Outcomes"
          title="Six Capabilities You Should Leave With"
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
          eyebrow="Case Review Orientation"
          title="A Five-Part Review Cycle — Not a Rigid Lesson Template"
        >
          <p className="leading-8">
            These five phases are a module-level orientation. Some A18 lessons
            will emphasize architecture, some timelines, some risk, some
            detection, and some communication. The lesson structure should
            follow the case naturally rather than repeat the same numbered
            framework every time.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {caseReviewCycle.map((item, index) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-purple-50">{item.phase}</h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Professional Roles"
          title="A18 Cases Cross Multiple Security Roles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {professionalRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.contribution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Types"
          title="What You Will Analyze"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Ask: {item.questions}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Examples: {item.examples}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lesson Map"
          title="Ten Advanced Defensive Labs"
        >
          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {lesson.number}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {lesson.title}
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {lesson.lab}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Portfolio Artifact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {lesson.artifact}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={lesson.href}
                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Case Preview"
          title="One Case Can Produce Several Different Questions"
        >
          <p className="leading-8">
            The records below do not prove one final conclusion. They preview
            how A18 expects you to work: preserve what each source actually says,
            identify what remains uncertain, and decide which evidence should be
            compared next.
          </p>

          <div className="mt-6 grid gap-5">
            {fictionalCase.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.source}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Observation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.observation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Uncertainty
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.uncertainty}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Next Review Step
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.next}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="A18 Advanced Defensive Labs Dashboard"
          subtitle="Fictional case scope, evidence types, safety posture, and final portfolio"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Synthetic Case Correlation Required"
          severity="Medium"
          time="09:40"
          source="Fictional Advanced Lab Queue"
          details="Three alerts, one stale ownership record, a shared architecture dependency, and a detection-volume increase appear within the same fictional case package. The evidence is related by context but does not yet prove one root cause."
          recommendation="Separate observations from hypotheses, normalize timestamps, compare ownership and workflow evidence, and document which conclusions remain unsupported."
        />

        <FakeLogPanel
          title="A18 Fictional Case Evidence Preview"
          logs={logs}
        />

        <Section
          eyebrow="Portfolio"
          title="Ten Artifacts Build One Advanced Defensive Casebook"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {portfolioSections.map((item) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.lesson}
                  </span>
                  <h3 className="font-black text-cyan-50">{item.artifact}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.purpose}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module Test"
          title="A18 Assessment"
        >
          <p className="leading-8">
            After A18.10, the module test will contain exactly 25 questions in
            one scored quiz component. It will cover multi-source analysis,
            architecture review, cloud security, identity access, incident
            response, detection tuning, risk registers, forensic timelines,
            executive summaries, and integrated defensive judgment.
          </p>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-black text-emerald-100 transition hover:bg-emerald-400/20"
            >
              A18 Module Test
            </Link>
          </div>
        </Section>

        <Section
          eyebrow="Safety Boundary"
          title="Advanced Does Not Mean Offensive"
        >
          <p className="leading-8">
            A18 cases may be complex, but every lab stays inside the same
            defensive, ethical, fictional boundary as the rest of CyberShield
            Academy. Complexity comes from reasoning across evidence, not from
            interacting with real systems.
          </p>

          <div className="mt-6 grid gap-4">
            {moduleBoundaries.map((item, index) => (
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

        <DefenderChecklist
          title="A18 Module Readiness Checklist"
          items={[
            "I can distinguish observation from inference.",
            "I can identify uncertainty instead of inventing missing facts.",
            "I can compare multiple fictional evidence sources.",
            "I can review network, cloud, and identity architecture defensively.",
            "I can document incident-response decisions without performing real response actions.",
            "I can tune fictional detections without teaching evasion.",
            "I can translate technical findings into risk and ownership.",
            "I can construct evidence-backed timelines.",
            "I can write concise executive security summaries.",
            "I will keep every A18 lab fictional, synthetic, inert, and defensive.",
          ]}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Start the Module
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            A18.1 — Multi-Source Alert Investigation
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
            The first lab begins with several fictional evidence sources that do
            not immediately agree. You will learn how to correlate them without
            jumping to a conclusion.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A18.1
            </Link>

            <Link
              href={advancedPath}
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