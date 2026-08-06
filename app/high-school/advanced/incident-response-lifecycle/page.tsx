import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/incident-response-lifecycle`;
const previousModule = `${trackPath}/siem-and-alert-triage-concepts`;

const lessons = [
  {
    number: "A7.1",
    title: "Advanced Incident Response Roles",
    slug: "advanced-incident-response-roles",
    summary:
      "Define how a fictional incident response program separates incident command, technical analysis, identity, service, infrastructure, communications, legal, privacy, continuity, recovery, supplier, evidence, and leadership responsibilities without allowing confusion, unsupported authority, or abandoned ownership.",
    skills: [
      "Distinguish incident lead, technical lead, service owner, identity owner, evidence coordinator, communications lead, continuity owner, privacy reviewer, supplier owner, and executive decision roles",
      "Document authority, alternates, availability, handoff acceptance, escalation paths, decision rights, and separation of duties",
      "Keep one coordinating owner while specialists answer bounded questions",
      "Recognize role conflicts, unavailable owners, unclear authority, duplicate command, and responsibility gaps",
    ],
    defensiveLab:
      "Create a fully fictional incident response role charter, authority matrix, alternate-owner map, handoff checklist, decision-rights table, and escalation-contact model for Northbridge.",
  },
  {
    number: "A7.2",
    title: "Preparation and Playbook Design",
    slug: "preparation-and-playbook-design",
    summary:
      "Design fictional incident response readiness through mission priorities, response criteria, playbook triggers, evidence needs, source-health checks, containment options, communication approvals, continuity requirements, recovery gates, exercises, ownership, expiration, and lifecycle review.",
    skills: [
      "Separate policy, plan, playbook, checklist, reference, contact list, and decision record",
      "Build scenario-specific playbooks with triggers, questions, owners, evidence, actions, validation, rollback, and closure",
      "Prepare source-health, privacy, continuity, supplier, communication, and leadership dependencies",
      "Test playbooks through safe fictional tabletop exercises and versioned improvement",
    ],
    defensiveLab:
      "Produce a fictional response-readiness package with mission priorities, activation criteria, playbook sections, authority, evidence, containment, continuity, communication, recovery, testing, and review.",
  },
  {
    number: "A7.3",
    title: "Detection and Scoping",
    slug: "detection-and-scoping",
    summary:
      "Turn fictional alerts and reports into incident-response scope decisions by separating observation, confirmed facts, hypotheses, source health, affected identities, devices, services, destinations, data, suppliers, time periods, active impact, dependencies, uncertainty, and owner questions.",
    skills: [
      "Distinguish an alert, event, issue, suspected incident, confirmed incident, and source-health problem",
      "Create scope statements using evidence, time, relationships, confidence, exclusions, and change history",
      "Avoid both premature broadening and dangerous under-scoping",
      "Track affected, possibly affected, unaffected, unknown, and out-of-scope categories",
    ],
    defensiveLab:
      "Build a fictional detection-to-scope workbook containing an evidence matrix, chronology, affected-entity register, source-health map, alternative explanations, confidence, and scope-change log.",
  },
  {
    number: "A7.4",
    title: "Containment Strategy",
    slug: "containment-strategy",
    summary:
      "Compare fictional containment choices using active harm, mission continuity, evidence preservation, identity, sessions, services, network boundaries, supplier dependencies, user safety, privacy, authorization, reversibility, validation, rollback, and residual risk.",
    skills: [
      "Distinguish immediate, short-term, long-term, identity, session, service, network, data, supplier, and communication containment",
      "Choose the narrowest authorized action that meaningfully reduces current risk",
      "Document expected benefit, operational cost, evidence effect, owner, validation, rollback, and decision trigger",
      "Avoid destructive, irreversible, unapproved, overly broad, or evidence-damaging actions",
    ],
    defensiveLab:
      "Create a fictional containment decision matrix and staged containment plan with options, owners, dependencies, continuity effects, validation, rollback, escalation, and residual risk.",
  },
  {
    number: "A7.5",
    title: "Eradication and Recovery Planning",
    slug: "eradication-and-recovery-planning",
    summary:
      "Plan fictional removal of confirmed causes and restoration of trustworthy service using root-cause evidence, approved changes, clean-state criteria, identity review, configuration validation, data integrity, backups, dependencies, monitoring, rollback, business acceptance, and residual-risk review.",
    skills: [
      "Separate containment, eradication, restoration, validation, monitoring, and closure",
      "Define trustworthy recovery rather than treating connectivity or availability as proof",
      "Coordinate identity, service, infrastructure, application, data, supplier, continuity, and risk owners",
      "Use staged recovery, validation gates, fallback paths, observation periods, and reopen triggers",
    ],
    defensiveLab:
      "Develop a fictional eradication and recovery plan with root-cause requirements, clean-state criteria, restoration sequence, owner approvals, validation, rollback, monitoring, and closure boundaries.",
  },
  {
    number: "A7.6",
    title: "Stakeholder Communication",
    slug: "stakeholder-communication",
    summary:
      "Create fictional incident communications that separate confirmed facts, supported conclusions, uncertainty, active impact, actions, decisions, owner needs, next updates, privacy, audience, timing, approvals, and legal or policy constraints without exaggeration or unnecessary disclosure.",
    skills: [
      "Tailor analyst, service-owner, user, supplier, leadership, privacy, legal, recovery, and public-safe messages",
      "Use bounded facts, non-proof statements, uncertainty, decisions, next steps, and update commitments",
      "Prevent conflicting messages through ownership, approval, versioning, distribution, and correction records",
      "Avoid blame, speculation, hidden uncertainty, excessive detail, and unsupported promises",
    ],
    defensiveLab:
      "Build a fictional stakeholder communication matrix, update template library, approval workflow, correction process, audience map, and leadership briefing.",
  },
  {
    number: "A7.7",
    title: "Evidence Preservation Concepts",
    slug: "evidence-preservation-concepts",
    summary:
      "Study fictional evidence preservation as a governed process involving purpose, authorization, scope, provenance, timing, integrity, source health, collection records, access, custody, storage, retention, privacy, review, transfer, and reporting without teaching invasive collection techniques.",
    skills: [
      "Distinguish preservation, collection, analysis, interpretation, storage, transfer, and disposal",
      "Document evidence identity, source, event time, collection time, handler, purpose, integrity checks, access, and limitations",
      "Preserve original evidence and work from controlled copies conceptually",
      "Recognize overcollection, missing authority, broken provenance, privacy exposure, silent modification, and unsupported conclusions",
    ],
    defensiveLab:
      "Create a fictional evidence preservation register, chain-of-custody model, access matrix, integrity record, retention schedule, transfer checklist, and public-safe evidence summary.",
  },
  {
    number: "A7.8",
    title: "Post-Incident Review",
    slug: "post-incident-review",
    summary:
      "Conduct fictional post-incident review across preparation, detection, source health, scoping, prioritization, containment, communication, evidence, eradication, recovery, continuity, ownership, decisions, metrics, residual risk, and improvement without blame.",
    skills: [
      "Separate timeline facts, decision context, outcomes, contributing conditions, root causes, and lessons",
      "Evaluate what worked, what failed, what was unavailable, and which assumptions changed",
      "Assign corrective actions with owners, due dates, evidence, validation, dependencies, and priority",
      "Connect lessons to playbooks, architecture, detections, sources, training, governance, recovery, and leadership decisions",
    ],
    defensiveLab:
      "Produce a fictional post-incident review report with chronology, decision review, contributing conditions, strengths, gaps, actions, owners, metrics, residual risk, and follow-up.",
  },
  {
    number: "A7.9",
    title: "Metrics and Continuous Improvement",
    slug: "metrics-and-continuous-improvement",
    summary:
      "Design fictional incident response metrics that support readiness, evidence, detection, scoping, containment, communication, recovery, case quality, owner response, continuity, exercises, corrective actions, privacy, residual risk, and program learning without rewarding speed alone.",
    skills: [
      "Define metric purpose, population, numerator, denominator, time range, source health, owner, limitation, and action",
      "Balance timeliness with decision quality, containment with continuity, recovery speed with trustworthy validation, and closure with reopening",
      "Measure readiness debt, source-health debt, playbook debt, owner delay, corrective-action aging, and exercise performance",
      "Recognize averages, unstable denominators, scope changes, personal rankings, metric gaming, and false improvement",
    ],
    defensiveLab:
      "Create a fictional incident response dashboard, metric dictionary, quality-gate scorecard, corrective-action tracker, exercise dashboard, and leadership improvement brief.",
  },
  {
    number: "A7.10",
    title: "Incident Response Simulation Lab",
    slug: "incident-response-simulation-lab",
    summary:
      "Integrate the complete A7 lifecycle in a fictional tabletop simulation involving activation, roles, evidence, source health, scoping, severity, priority, containment, continuity, communication, preservation, recovery, validation, leadership decisions, post-incident review, metrics, and improvement.",
    skills: [
      "Run a safe fictional incident response timeline using bounded decisions and documented owners",
      "Update scope, confidence, priority, containment, communication, and recovery as evidence changes",
      "Preserve chronology, decision rationale, alternatives, validation, residual uncertainty, residual risk, closure, and reopening",
      "Deliver an executive-ready incident response package and public-safe portfolio artifact",
    ],
    defensiveLab:
      "Complete a fully fictional Northbridge Incident Response Simulation Package containing role charter, playbook, evidence register, scope, containment, communication, recovery, review, metrics, and reflection.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Prepare mission, authority, and roles",
    description:
      "Define fictional critical services, users, data, identity, suppliers, continuity needs, response authority, incident lead, technical leads, alternates, decision rights, privacy, communications, evidence, recovery, and leadership roles.",
    output: "Incident response mission and authority charter",
  },
  {
    step: "2",
    title: "Design and test playbooks",
    description:
      "Create fictional activation criteria, triage questions, evidence requirements, source-health checks, containment choices, communications, continuity, recovery gates, rollback, closure, reopening, owners, and exercise cases.",
    output: "Versioned playbook and tabletop package",
  },
  {
    step: "3",
    title: "Detect and activate",
    description:
      "Evaluate fictional alerts, user reports, service symptoms, supplier notices, source-health failures, and owner observations to decide whether routine triage, incident coordination, or another workflow is justified.",
    output: "Activation decision and initial incident record",
  },
  {
    step: "4",
    title: "Scope with evidence",
    description:
      "Identify fictional affected, possibly affected, unaffected, unknown, excluded, and out-of-scope identities, devices, services, destinations, data, suppliers, users, dependencies, periods, and evidence limitations.",
    output: "Evidence-based scope and confidence map",
  },
  {
    step: "5",
    title: "Prioritize and coordinate",
    description:
      "Assess fictional potential consequence, evidence confidence, active effect, mission impact, privacy, scope, time sensitivity, recoverability, source health, owner availability, and decision deadlines.",
    output: "Severity-confidence-priority and coordination record",
  },
  {
    step: "6",
    title: "Contain narrowly and reversibly",
    description:
      "Compare fictional identity, session, service, network, data, supplier, and communication containment choices using authority, evidence, continuity, preservation, user effect, validation, rollback, and residual risk.",
    output: "Containment decision and validation plan",
  },
  {
    step: "7",
    title: "Communicate and preserve",
    description:
      "Send fictional audience-specific updates and preserve purpose-limited evidence with provenance, timing, integrity, access, custody, retention, privacy, correction, and transfer controls.",
    output: "Communication log and evidence register",
  },
  {
    step: "8",
    title: "Eradicate and recover",
    description:
      "Address fictional confirmed causes, restore trustworthy identity, configuration, service, data, dependencies, supplier state, evidence capability, and continuity through staged recovery and validation.",
    output: "Eradication, recovery, rollback, and monitoring plan",
  },
  {
    step: "9",
    title: "Close or reopen with evidence",
    description:
      "Evaluate fictional question resolution, source health, scope, impact, actions, validation, continuity, residual uncertainty, residual risk, owner acceptance, observation periods, closure criteria, and reopen triggers.",
    output: "Closure decision and reopening register",
  },
  {
    step: "10",
    title: "Review and improve",
    description:
      "Conduct fictional post-incident review, measure readiness and response quality, assign corrective actions, test improvements, update playbooks, reduce debt, and communicate leadership decisions.",
    output: "Post-incident review and continuous-improvement plan",
  },
];

const objectives = [
  "Explain the incident response lifecycle as a coordinated evidence, authority, continuity, communication, recovery, and improvement process rather than a single technical action.",
  "Design fictional incident response roles with decision rights, alternates, separation of duties, handoff acceptance, escalation, availability, and one coordinating owner.",
  "Create versioned fictional plans and playbooks with activation criteria, evidence requirements, source-health behavior, containment, communication, continuity, recovery, validation, rollback, closure, and reopening.",
  "Scope fictional incidents using neutral observations, affected and possibly affected entities, time, relationships, source health, confidence, exclusions, alternatives, dependencies, active impact, and scope-change records.",
  "Choose fictional containment strategies by balancing current risk, mission continuity, evidence preservation, privacy, authorization, reversibility, user impact, validation, rollback, and residual risk.",
  "Plan fictional eradication and trustworthy recovery using root-cause evidence, approved changes, clean-state criteria, identity review, data integrity, dependencies, staged restoration, monitoring, and owner acceptance.",
  "Write audience-specific fictional communications and evidence-preservation records that are factual, purpose-limited, privacy-aware, versioned, approved, traceable, and clear about uncertainty.",
  "Conduct fictional post-incident review and continuous improvement using chronology, decision context, contributing conditions, metrics, corrective actions, owners, validation, debt, residual risk, and leadership communication.",
];

const rolePreview = [
  {
    role: "Incident lead",
    mission:
      "Coordinates the fictional response, preserves the decision timeline, confirms authority, maintains scope, assigns owners, resolves conflicts, and controls state transitions.",
    doesNotReplace:
      "Technical, service, identity, privacy, evidence, communications, recovery, legal, supplier, or executive expertise.",
    readiness:
      "Named primary, alternate, availability expectation, authority boundary, escalation path, and handoff checklist.",
  },
  {
    role: "Technical analysis lead",
    mission:
      "Coordinates fictional evidence review, hypotheses, source health, technical questions, containment options, validation, and technical risk communication.",
    doesNotReplace:
      "Incident command, service ownership, policy approval, legal review, or business acceptance.",
    readiness:
      "Evidence access, source map, decision templates, alternate analyst, and validation responsibilities.",
  },
  {
    role: "Service and continuity owner",
    mission:
      "Explains fictional service purpose, critical workflows, user effect, dependencies, acceptable interruption, continuity options, recovery priorities, and acceptance criteria.",
    doesNotReplace:
      "Evidence interpretation, identity authority, privacy review, or executive risk acceptance.",
    readiness:
      "Critical-service map, dependency register, continuity plan, recovery objectives, alternates, and approval authority.",
  },
  {
    role: "Identity and access owner",
    mission:
      "Answers fictional account, role, group, session, approval, extension, revocation, effective access, recovery, and validation questions.",
    doesNotReplace:
      "Complete incident scope, service impact, communications, or evidence custody.",
    readiness:
      "Authority map, emergency process, alternate owner, evidence sources, response expectations, and validation checklist.",
  },
  {
    role: "Evidence coordinator",
    mission:
      "Maintains fictional evidence identity, provenance, timing, integrity, purpose, custody, access, transfer, retention, privacy, limitations, and reporting records.",
    doesNotReplace:
      "Technical conclusions, legal decisions, or incident command.",
    readiness:
      "Preservation register, access model, custody form, storage model, integrity process, and retention rules.",
  },
  {
    role: "Communications lead",
    mission:
      "Coordinates fictional audience, facts, uncertainty, approvals, timing, distribution, correction, next-update commitments, user guidance, and public-safe communication.",
    doesNotReplace:
      "Technical investigation, legal advice, privacy authority, or executive decision rights.",
    readiness:
      "Audience matrix, templates, approval chain, alternates, correction process, and communication log.",
  },
  {
    role: "Privacy and governance reviewer",
    mission:
      "Evaluates fictional purpose limitation, minimization, access, sharing, retention, user effect, legal or policy triggers, evidence exposure, and residual privacy risk.",
    doesNotReplace:
      "Incident command or technical analysis.",
    readiness:
      "Escalation criteria, decision authority, alternates, data map, communication review, and documentation requirements.",
  },
  {
    role: "Recovery and improvement owner",
    mission:
      "Coordinates fictional eradication, clean-state criteria, staged restoration, rollback, monitoring, business acceptance, post-incident actions, exercises, metrics, and debt reduction.",
    doesNotReplace:
      "Service owner acceptance, source-owner validation, or incident closure authority.",
    readiness:
      "Recovery plan, validation gates, fallback options, corrective-action register, metrics, and review schedule.",
  },
];

const evidencePreview = [
  {
    id: "IR-01",
    source: "Fictional activation report",
    observation:
      "Northbridge receives one SIEM alert, two user reports, and a supplier notice involving the same student-support service within twenty minutes.",
    supports:
      "A coordinated response review may be justified because multiple evidence categories point to one mission service.",
    limits:
      "The reports do not prove one cause, complete scope, confirmed incident status, or current service impact.",
    responseUse:
      "Define activation criteria, initial owner, evidence needs, source health, and first scope statement.",
  },
  {
    id: "IR-02",
    source: "Fictional role and availability matrix",
    observation:
      "The primary incident lead is unavailable, the alternate is available, and the service owner has not acknowledged the activation request.",
    supports:
      "The alternate incident lead should activate and the service-owner deadline requires aging.",
    limits:
      "Owner nonresponse does not prove impact, negligence, or incident severity.",
    responseUse:
      "Use alternate authority, preserve one coordinator, and activate the documented escalation path.",
  },
  {
    id: "IR-03",
    source: "Fictional scope worksheet",
    observation:
      "One identity and one service are confirmed, two devices are possibly affected, a supplier connection is unknown, and one source is Degraded.",
    supports:
      "The incident scope should separate confirmed, possible, unknown, and evidence-limited categories.",
    limits:
      "The worksheet does not prove the two devices or supplier are affected.",
    responseUse:
      "Assign bounded evidence questions and maintain a versioned scope-change log.",
  },
  {
    id: "IR-04",
    source: "Fictional containment options",
    observation:
      "A broad service shutdown would remove current access but interrupt urgent support workflows and reduce evidence visibility; a narrow session and role restriction is reversible.",
    supports:
      "The narrow authorized option may better balance immediate risk, continuity, and preservation.",
    limits:
      "The comparison does not prove narrow containment will be sufficient.",
    responseUse:
      "Document decision criteria, owner approval, validation, monitoring, escalation, and rollback.",
  },
  {
    id: "IR-05",
    source: "Fictional recovery review",
    observation:
      "The service is reachable again, but identity state, configuration integrity, data reconciliation, supplier dependency, and evidence-source recovery remain incomplete.",
    supports:
      "Connectivity restoration is not trustworthy recovery.",
    limits:
      "The review does not prove restoration failed or further user impact exists.",
    responseUse:
      "Keep recovery Conditional until clean-state and validation gates pass.",
  },
  {
    id: "IR-06",
    source: "Fictional post-incident dashboard",
    observation:
      "Containment time improved, but owner-response delay, evidence-source Blind minutes, reopened actions, and untested playbook steps increased.",
    supports:
      "Speed alone does not demonstrate program improvement.",
    limits:
      "The dashboard does not identify every cause or corrective action.",
    responseUse:
      "Use balanced readiness, quality, continuity, recovery, ownership, privacy, and residual-risk metrics.",
  },
];

const decisionQuestions = [
  ["Activation", "Does fictional evidence justify incident coordination, routine triage, service management, source recovery, privacy review, or another workflow?"],
  ["Authority", "Who may declare, direct, contain, communicate, recover, accept risk, close, and reopen the fictional response?"],
  ["Evidence", "Which fictional facts, source-health states, timing, provenance, limitations, alternatives, and owner statements support the current decision?"],
  ["Scope", "Which fictional identities, devices, services, destinations, data, users, suppliers, dependencies, and periods are affected, possibly affected, unknown, excluded, or out of scope?"],
  ["Containment", "Which fictional authorized action reduces current risk while preserving continuity, evidence, privacy, reversibility, and recovery options?"],
  ["Communication", "Which fictional audience needs which confirmed facts, uncertainty, action, decision request, guidance, approval, and next-update time?"],
  ["Recovery", "Which fictional clean-state criteria, dependencies, data checks, identity reviews, source recovery, monitoring, rollback, and owner acceptance prove trustworthy restoration?"],
  ["Improvement", "Which fictional lessons require playbook, role, source, architecture, detection, training, continuity, supplier, privacy, metric, or governance changes?"],
];

const portfolioArtifacts = [
  "Fictional incident response mission, scope, safety, authority, privacy, continuity, supplier, communication, evidence, recovery, and lifecycle charter",
  "Incident lead, technical lead, identity, service, evidence, communications, privacy, legal, continuity, recovery, supplier, and leadership role matrix",
  "Primary and alternate owner register with availability, authority, response expectations, decision rights, escalation, and handoff acceptance",
  "Versioned incident response plan, scenario playbooks, activation criteria, source-health requirements, containment options, communication approvals, recovery gates, and closure standards",
  "Fictional incident activation record, initial facts, primary questions, severity, confidence, priority, owner assignments, deadlines, and non-proof statements",
  "Evidence-based scope workbook with affected, possibly affected, unaffected, unknown, excluded, out-of-scope, and source-limited categories",
  "Chronology showing event time, collection time, processing time, report time, decision time, action time, validation time, communication time, recovery time, and closure time",
  "Containment decision matrix covering risk reduction, continuity, evidence, privacy, authority, operational cost, dependencies, validation, rollback, and residual risk",
  "Eradication and recovery plan with root-cause requirements, clean-state criteria, identity, configuration, data, dependencies, backups, staged restoration, monitoring, and owner acceptance",
  "Stakeholder communication matrix and template library for analysts, owners, users, suppliers, privacy, legal, leadership, recovery, and public-safe summaries",
  "Evidence preservation register with identity, source, provenance, purpose, timing, handler, integrity, access, custody, storage, retention, transfer, limitations, and disposal",
  "Case-management package containing notes, evidence references, hypotheses, decisions, actions, validation, state transitions, residual uncertainty, residual risk, closure, and reopening",
  "Post-incident review with facts, chronology, decisions, contributing conditions, strengths, gaps, root causes, lessons, corrective actions, owners, dependencies, and validation",
  "Incident response dashboard and metric dictionary covering readiness, activation, detection, scoping, owner delay, containment, continuity, communication, evidence, recovery, closure, reopening, privacy, and debt",
  "Corrective-action register with priority, mission effect, owner, due date, evidence, dependency, validation, aging, escalation, residual risk, and closure criteria",
  "Complete fictional Incident Response Simulation Package, leadership brief, technical appendix, tabletop record, public-safe portfolio summary, and reflection",
];

const risks = [
  {
    risk: "No clear incident authority",
    description:
      "Fictional analysts, service owners, and leaders may issue conflicting instructions, duplicate work, delay containment, or close the response without the required decision authority.",
    control:
      "Define incident lead, alternates, decision rights, authority boundaries, handoff acceptance, escalation, and one coordinating owner before activation.",
  },
  {
    risk: "Playbooks become rigid scripts",
    description:
      "Fictional teams may follow steps even when scope, source health, continuity, privacy, supplier context, evidence, or mission impact differs from the assumptions.",
    control:
      "Use decision points, conditions, alternatives, owner judgment, validation, rollback, expiration, and exercise-based revision.",
  },
  {
    risk: "The first alert defines the incident",
    description:
      "A fictional alert title or early hypothesis may become the final scope, cause, severity, or communication message before evidence is reviewed.",
    control:
      "Use neutral observations, versioned scope, source-health review, alternatives, confidence, owner questions, and change history.",
  },
  {
    risk: "Containment causes greater harm",
    description:
      "A fictional broad or irreversible action may interrupt critical support, destroy evidence, block recovery, affect unrelated users, or create privacy and continuity problems.",
    control:
      "Choose the narrowest authorized reversible action, document tradeoffs, validate outcomes, monitor effects, and preserve rollback.",
  },
  {
    risk: "Availability is treated as recovery",
    description:
      "A fictional service may be reachable while identity, configuration, data integrity, dependencies, supplier state, evidence sources, or monitoring remain untrustworthy.",
    control:
      "Define clean-state criteria, staged restoration, independent validation, observation periods, business acceptance, residual risk, and reopen triggers.",
  },
  {
    risk: "Communication exceeds evidence",
    description:
      "Fictional messages may speculate, assign blame, expose unnecessary details, hide uncertainty, create conflicting promises, or use an audience that does not need the information.",
    control:
      "Use confirmed facts, supported conclusions, non-proof statements, purpose limitation, approvals, versioning, correction records, and next-update commitments.",
  },
  {
    risk: "Evidence preservation becomes overcollection",
    description:
      "A fictional response may collect broad personal or operational information without a bounded question, authority, privacy purpose, retention rule, access model, or owner.",
    control:
      "Use purpose limitation, minimization, scope, authorization, provenance, custody, access, retention, review, and disposal requirements.",
  },
  {
    risk: "Real incident material enters the portfolio",
    description:
      "Using real alerts, tickets, messages, timelines, owner names, service diagrams, supplier details, response decisions, or screenshots can expose people and defensive capabilities.",
    control:
      "Invent every organization, identity, service, source, event, owner, message, action, metric, decision, date, and outcome from the beginning.",
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/advanced-incident-response-roles`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Begin A7.1
      </Link>
    </div>
  );
}

export default function IncidentResponseLifecycleModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Detection and Response
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Fictional Defensive Training
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7 Incident Response Lifecycle
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Develop professional incident response thinking across preparation,
            roles, activation, detection, scoping, containment, communication,
            evidence preservation, eradication, recovery, post-incident review,
            metrics, continuous improvement, and safe tabletop simulation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["10 lessons", "A complete professional response lifecycle"],
            ["1 module test", "25 hidden-answer assessment questions"],
            ["1 connected portfolio", "Incident response playbook and tabletop"],
            ["100% fictional", "No real incidents, systems, people, or data"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-2xl font-black text-cyan-200">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Module Mission"
          title="Respond with Evidence, Authority, Continuity, and Control"
        >
          <p className="leading-8">
            Incident response is not simply reacting quickly or performing one
            technical action. A professional fictional response must coordinate
            mission priorities, roles, authority, evidence, source health,
            scoping, containment, communication, continuity, privacy,
            preservation, recovery, validation, leadership decisions, closure,
            reopening, and improvement.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                Main question
              </p>
              <p className="mt-3 text-lg font-bold leading-8">
                How do professional defenders prepare for, coordinate, contain,
                communicate, recover from, review, and improve after a possible
                cybersecurity incident?
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                Safety boundary
              </p>
              <p className="mt-3 leading-7">
                All organizations, systems, alerts, records, identities,
                communications, containment choices, evidence, owners, actions,
                timelines, metrics, and outcomes are completely invented,
                defensive, authorized, inert, privacy-safe, and non-operational.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Entry Readiness"
          title="Before Beginning A7"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "I understand that a fictional alert or unusual event does not automatically prove an incident, harmful intent, impact, or complete scope.",
              "I will separate confirmed facts, supported conclusions, hypotheses, alternatives, source-health limitations, decisions, actions, validation, outcomes, residual uncertainty, and residual risk.",
              "I will define authority, owners, alternates, evidence, communications, continuity, containment, recovery, closure, and reopening before relying on a playbook.",
              "I will choose only fictional authorized, narrow, reversible, evidence-preserving response options and will document validation plus rollback.",
              "I will use purpose-limited fictional evidence and will not include real identities, private messages, internal diagrams, alerts, tickets, credentials, systems, suppliers, or incidents.",
              "I will treat trusted adults, teachers, school technology staff, organizational owners, and authorized professionals as the proper escalation path for real concerns.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="The Ten-Step Incident Response Lifecycle"
        >
          <div className="grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required professional output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Outcomes"
          title="Eight Advanced Module Objectives"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Role Readiness Preview"
          title="Eight Roles That Keep a Response Coordinated"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {rolePreview.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.role}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Mission
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.mission}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Does not replace
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.doesNotReplace}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Readiness requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.readiness}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Lesson Roadmap
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Complete All Ten A7 Lessons
          </h2>

          <div className="mt-6 grid gap-6">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950"
              >
                <div className="grid md:grid-cols-[0.24fr_1fr]">
                  <div className="flex min-h-44 flex-col justify-between border-b border-slate-700 bg-[linear-gradient(145deg,_rgba(34,211,238,0.16),_rgba(168,85,247,0.12),_rgba(15,23,42,0.95))] p-6 md:border-b-0 md:border-r">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                        Lesson {index + 1} of 10
                      </p>
                      <p className="mt-4 text-4xl font-black text-white">
                        {lesson.number}
                      </p>
                    </div>

                    <span className="mt-6 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                      Advanced Defensive Lesson
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-300">
                      {lesson.summary}
                    </p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                          Skills developed
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6">
                          {lesson.skills.map((skill) => (
                            <li key={skill}>• {skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Safe fictional defensive lab
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.defensiveLab}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`${modulePath}/${lesson.slug}`}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Incident Response Evidence You Will Learn to Analyze
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Incident response use", item.responseUse],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Response Decision Preview"
          title="Eight Questions Every Fictional Response Must Answer"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {decisionQuestions.map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Outcome"
          title="Build a Complete Incident Response Playbook and Tabletop Package"
        >
          <p className="leading-8">
            By the end of A7, you will have one connected fictional package
            showing how a professional response moves from preparation and
            activation to evidence, scope, containment, communication,
            preservation, recovery, closure, review, metrics, and continuous
            improvement.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Artifact {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{artifact}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Incident Response Risk Preview"
          title="Eight Mistakes This Module Will Teach You to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {risks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{item.risk}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it is risky
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.description}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Test"
          title="A7 Incident Response Lifecycle Assessment"
        >
          <p className="leading-8">
            Complete a 25-question hidden-answer assessment covering incident
            response roles, authority, alternates, plans, playbooks, activation,
            detection, scoping, source health, containment, continuity,
            communication, evidence preservation, eradication, recovery,
            validation, post-incident review, metrics, corrective actions,
            closure, reopening, privacy, ownership, and simulation decisions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "25 questions",
                "Answers and explanations remain hidden until the student submits the full assessment.",
              ],
              [
                "All ten lessons",
                "The assessment covers the complete A7 Incident Response Lifecycle pathway.",
              ],
              [
                "Decision-focused",
                "Questions measure evidence-aware coordination, containment, recovery, communication, and improvement judgment.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 font-black text-yellow-100 transition hover:bg-yellow-400/20"
            >
              Open A7 Module Test
            </Link>
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Begin Incident Response Lifecycle
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Start with A7.1 to learn how professional fictional response teams
            define leadership, technical ownership, service responsibility,
            evidence coordination, communication, privacy, continuity,
            recovery, alternates, authority, handoffs, and escalation before
            time pressure begins.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}