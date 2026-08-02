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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/advanced-networking-defense`;
const previousLesson = `${modulePath}/segmentation-and-microsegmentation-concepts`;
const nextLesson = `${modulePath}/ids-ips-concepts-and-network-visibility`;

const objectives = [
  "Explain firewall strategy as a fictional policy lifecycle connecting mission purpose, source, destination, service, identity context, approval, evidence, exceptions, failure, recovery, and retirement.",
  "Evaluate fictional firewall rules for least privilege, necessity, specificity, ownership, duplication, shadowing, staleness, temporary status, evidence quality, and review readiness.",
  "Design a fictional rule-governance process covering request, review, approval, implementation evidence, validation, exception handling, expiration, cleanup, rollback, and closure.",
  "Analyze fictional firewall evidence without assuming that a listed rule is implemented, active, reachable, used, effective, safe, or maliciously abused.",
  "Create a portfolio-ready fictional firewall strategy, rule-review register, exception log, cleanup plan, evidence matrix, residual-risk summary, and maintenance schedule.",
];

const vocabulary = [
  ["Firewall strategy", "A fictional governance and architecture approach for deciding which communication should be allowed, denied, logged, reviewed, expired, or retired and why."],
  ["Rule", "A fictional policy statement describing source, destination, service, action, conditions, owner, purpose, evidence, and lifecycle."],
  ["Rule base", "A fictional ordered collection of firewall policy statements and supporting metadata."],
  ["Rule hygiene", "The fictional practice of keeping firewall policy necessary, specific, owned, evidenced, non-duplicative, reviewable, current, and aligned with architecture."],
  ["Least privilege", "Allowing only the fictional communication required for an approved mission purpose under narrow source, destination, service, identity, time, and state conditions."],
  ["Default deny", "A fictional policy principle in which communication is not approved unless an explicit documented requirement exists."],
  ["Explicit allow", "A fictional communication relationship approved for a defined source, destination, service, purpose, owner, evidence, and lifecycle."],
  ["Explicit deny", "A fictional policy statement blocking a defined communication relationship for a documented reason or control objective."],
  ["Implicit deny", "A conceptual fictional outcome where communication not matched by an approved rule is denied by default."],
  ["Rule shadowing", "A fictional condition where an earlier rule may prevent a later rule from ever being evaluated as intended."],
  ["Rule overlap", "A fictional condition where two or more rules cover some of the same communication space."],
  ["Duplicate rule", "A fictional rule that repeats another rule's effective purpose and scope without a distinct owner or justification."],
  ["Broad rule", "A fictional rule whose source, destination, service, time, or conditions are wider than the documented mission need."],
  ["Stale rule", "A fictional rule that may no longer match current services, owners, identities, destinations, environments, or mission needs."],
  ["Temporary rule", "A fictional rule approved for a limited migration, troubleshooting, support, recovery, or transition purpose with expiration and closure conditions."],
  ["Emergency rule", "A fictional time-bound rule used during an authorized urgent condition with stronger approval, evidence, review, revocation, and retrospective requirements."],
  ["Rule owner", "The fictional role accountable for business purpose, scope, risk, evidence, review, and retirement of a rule."],
  ["Control owner", "The fictional role accountable for operating, validating, monitoring, changing, and recovering the firewall control."],
  ["Exception owner", "The fictional role accountable for a temporary deviation, compensating controls, evidence, residual risk, expiration, and closure."],
  ["Rule recertification", "A fictional review confirming that a rule remains necessary, correctly scoped, owned, evidenced, and aligned with current architecture."],
  ["Usage evidence", "Fictional records indicating whether communication matching a rule has been observed during a defined period and under which source-health conditions."],
  ["Policy evidence", "Fictional records showing request, approval, implementation, decision, result, source health, exception, change, and review."],
  ["Cleanup campaign", "A fictional structured effort to identify and resolve broad, duplicate, stale, temporary, shadowed, unowned, or unsupported rules."],
  ["Rule retirement", "A fictional authorized lifecycle decision to remove or disable a rule after dependency, evidence, rollback, risk, and owner review."],
  ["Firewall review trigger", "A fictional event requiring revalidation, such as service, identity, supplier, environment, data flow, segmentation, remote-access, wireless, recovery, or mission change."],
];

const principles = [
  {
    principle: "Start with communication purpose",
    description: "Every fictional rule should exist because a documented mission workflow requires one source to reach one destination for one service under defined conditions.",
    strongPractice: "The workflow service may send approved message requests to the notification service because that communication supports case-status updates.",
    failure: "Rules created without purpose can remain broad, unused, duplicated, or difficult to retire.",
  },
  {
    principle: "Make scope specific",
    description: "A fictional rule should be no broader than the required source, destination, service, identity context, environment, state, and duration.",
    strongPractice: "Limit a supplier-result path to one integration identity, one destination group, one approved service, and one defined environment.",
    failure: "Broad scope increases blast radius and weakens evidence and accountability.",
  },
  {
    principle: "Separate rule intent from implementation",
    description: "A fictional policy request or design does not prove that the rule is implemented, active, ordered correctly, used, or effective.",
    strongPractice: "Record request, approval, implemented version, policy evidence, validation evidence, and review status separately.",
    failure: "The model may count a planned or stale rule as an operating control.",
  },
  {
    principle: "Assign one accountable owner",
    description: "Every fictional rule should have a business or service owner who can explain the need and decide whether it remains acceptable.",
    strongPractice: "The supplier integration owner recertifies the rule after schema, identity, supplier, or workflow change.",
    failure: "Shared team ownership often leaves stale rules active.",
  },
  {
    principle: "Govern temporary access",
    description: "Fictional migration, support, testing, recovery, and emergency rules require expiration, evidence, compensating controls, residual risk, rollback, and closure.",
    strongPractice: "A recovery rule expires automatically after the approved exercise window unless separately reauthorized.",
    failure: "Temporary rules can become permanent architecture.",
  },
  {
    principle: "Review ordering and interaction",
    description: "Fictional firewall decisions may depend on rule order, overlap, broad matches, duplicate conditions, or shadowing.",
    strongPractice: "Review conceptual effective policy and intended outcomes rather than reading each rule in isolation.",
    failure: "A narrow rule may never matter because an earlier broad rule already matches.",
  },
  {
    principle: "Design evidence with the rule",
    description: "Fictional defenders need evidence of request, approval, decision, allow, deny, failure, exception, source health, and review.",
    strongPractice: "Capture minimized decision metadata sufficient to explain source, destination, service, action, policy version, reason, and result.",
    failure: "A rule may appear controlled while implementation or usage cannot be validated.",
  },
  {
    principle: "Plan safe failure",
    description: "Fictional firewall management, policy distribution, identity dependencies, logging, DNS, or enforcement may fail.",
    strongPractice: "Define safe limited behavior, blocked high-impact paths, alternate evidence, owner escalation, and recovery validation.",
    failure: "Control failure can either expand trust or stop critical mission and recovery communication.",
  },
  {
    principle: "Validate before cleanup",
    description: "A fictional stale-looking rule should be reviewed for dependencies, alternate paths, failure behavior, owner confirmation, and rollback before retirement.",
    strongPractice: "Use supplied usage, application, change, and dependency evidence before authorizing removal.",
    failure: "Immediate cleanup without dependency review can cause unnecessary outages.",
  },
  {
    principle: "Maintain the policy lifecycle",
    description: "Fictional firewall policy needs versions, owners, recertification, exceptions, expiration, findings, closure, review triggers, and retirement history.",
    strongPractice: "Connect rule review to architecture, segmentation, service, supplier, identity, wireless, remote-access, and recovery changes.",
    failure: "Policy drift grows when firewall rules are treated as permanent technical objects.",
  },
];

const ruleFields = [
  {
    field: "Rule identifier",
    purpose: "Give the fictional rule a stable reference for approvals, evidence, exceptions, findings, changes, and retirement.",
    strongExample: "FW-RULE-017",
    weakExample: "Temporary supplier rule.",
  },
  {
    field: "Business purpose",
    purpose: "Explain the fictional mission workflow supported by the rule.",
    strongExample: "Allow the integration service to send minimized document-processing requests to the approved supplier endpoint.",
    weakExample: "Needed for the application.",
  },
  {
    field: "Source",
    purpose: "Define the fictional source zone, service, workload, identity, device class, or administrative group.",
    strongExample: "Northbridge supplier-integration service identity in the integration zone.",
    weakExample: "Internal network.",
  },
  {
    field: "Destination",
    purpose: "Define the fictional destination zone, service, application group, or approved external relationship.",
    strongExample: "Approved fictional supplier processing service group.",
    weakExample: "External systems.",
  },
  {
    field: "Service or operation",
    purpose: "Define the fictional communication service or business operation required.",
    strongExample: "Approved supplier request operation using the documented application service profile.",
    weakExample: "Any service.",
  },
  {
    field: "Identity and context",
    purpose: "Record fictional human, device, service, workload, role, purpose, environment, state, or time conditions.",
    strongExample: "Only the integration service identity in the approved production-like environment during normal processing state.",
    weakExample: "Trusted source.",
  },
  {
    field: "Action and rationale",
    purpose: "State the fictional allow, deny, log, conditional, or emergency outcome and why.",
    strongExample: "Allow and log because the path is required for approved supplier processing and is constrained by identity, destination, schema, and owner review.",
    weakExample: "Allow.",
  },
  {
    field: "Owner and approver",
    purpose: "Assign fictional accountability for business purpose, control operation, exception, and risk.",
    strongExample: "Rule owner: supplier integration owner; control owner: network policy owner; approver: service risk owner.",
    weakExample: "IT team.",
  },
  {
    field: "Evidence requirements",
    purpose: "Define fictional request, approval, implementation, policy decision, usage, source-health, validation, and review evidence.",
    strongExample: "Approved request, policy version, decision metadata, source health, correlation, usage summary, validation result, and recertification record.",
    weakExample: "Firewall logs.",
  },
  {
    field: "Exception and expiration",
    purpose: "Record whether the fictional rule is temporary, emergency, compensating, or conditional.",
    strongExample: "Expires after the migration window; requires compensating monitoring, rollback, and closure approval.",
    weakExample: "Temporary.",
  },
  {
    field: "Failure and rollback",
    purpose: "Explain what happens if the fictional rule is wrong, unavailable, misordered, too broad, or removed.",
    strongExample: "Move the workflow to controlled degraded mode, preserve queue state, restore the prior approved version, validate business state, and review evidence.",
    weakExample: "Undo the change.",
  },
  {
    field: "Review and retirement",
    purpose: "Define fictional recertification date, review triggers, usage window, stale criteria, and removal evidence.",
    strongExample: "Review after supplier, identity, schema, environment, service, segmentation, or recovery change; retire when the dependency is removed and rollback is validated.",
    weakExample: "Review annually.",
  },
];

const qualityTypes = [
  ["Necessary and specific", "Supports a current mission purpose and is limited to the required source, destination, service, context, and duration.", "Retain and recertify with current owner and evidence."],
  ["Broad but justified", "Wider than ideal because of a documented technical or operational constraint.", "Treat as conditional with compensating controls and a reduction plan."],
  ["Temporary", "Supports a time-bound migration, support, recovery, or transition need.", "Expire automatically unless separately reauthorized."],
  ["Duplicate", "Repeats another effective policy without a distinct purpose or owner.", "Consolidate only after dependency and rollback review."],
  ["Overlapping", "Covers some communication already matched by another rule.", "Clarify which rule should govern and reduce ambiguity."],
  ["Shadowed", "May never evaluate because an earlier broader rule matches first.", "Review ordering and validate the effective outcome."],
  ["Stale", "References retired services, destinations, owners, identities, or completed projects.", "Mark unvalidated and decide retain, restrict, or retire."],
  ["Unowned", "No role can confirm current purpose, risk, evidence, or lifecycle.", "Escalate ownership and block automatic recertification."],
  ["Unsupported", "Lacks sufficient implementation, usage, effective-policy, or mission evidence.", "Treat as provisional and gather evidence before change or reliance."],
  ["Retirement candidate", "Appears unnecessary and has safe dependency, rollback, approval, and validation evidence.", "Remove through authorized change and verify mission outcomes."],
];

const reviewQuestions = [
  ["Purpose", "Which fictional workflow requires this communication, and what outcome would fail without it?", "Service objective, dependency, owner decision, application flow, and impact statement."],
  ["Source specificity", "Is the fictional source the narrowest appropriate zone, service, workload, identity, device class, or administrative group?", "Source inventory, service identity, role, device class, environment, and usage."],
  ["Destination specificity", "Is the fictional destination limited to the required service or group?", "Destination inventory, service owner, application function, environment, and policy mapping."],
  ["Service specificity", "Does the fictional rule allow only the required communication service or business operation?", "Service profile, application dependency, operation, schema, policy decision, and validation."],
  ["Identity and context", "Does the fictional rule consider human, device, service, workload, role, purpose, state, environment, and time where appropriate?", "Identity source, policy context, session, workload identity, role, approval, and lifecycle."],
  ["Ordering and interaction", "Could a fictional broader, earlier, duplicate, or overlapping rule change the intended outcome?", "Rule order, effective-policy review, match comparison, decision result, and validation case."],
  ["Evidence", "Can fictional defenders confirm request, approval, implementation, decision, usage, denial, exception, source health, and review?", "Change record, policy version, decision metadata, source health, usage summary, and recertification."],
  ["Failure", "What happens if fictional policy management, identity, DNS, logging, enforcement, or the rule itself fails?", "Failure-mode review, degraded plan, alert, alternate evidence, rollback, and recovery test."],
  ["Exception", "Is the fictional rule temporary, emergency, compensating, conditional, or past its expiration?", "Exception record, owner, approver, dates, residual risk, compensating controls, and closure."],
  ["Lifecycle", "Which fictional change or evidence should trigger recertification, restriction, consolidation, or retirement?", "Architecture version, service catalog, ownership, usage, dependency, supplier, identity, recovery, and change history."],
];

const lifecycle = [
  ["1. Request", "A fictional service owner documents the required communication and mission outcome.", "Request identifier, purpose, source, destination, service, identity context, duration, owner, and risk.", "Vague requests create broad policy."],
  ["2. Architecture review", "The team checks segmentation, trust boundaries, supplier design, administration, visibility, and recovery.", "Architecture decision, dependency map, zone matrix, risk rationale, and alternatives.", "A technically valid rule may conflict with architecture."],
  ["3. Approval", "Authorized owners accept scope, conditions, evidence, exception status, and residual risk.", "Owner, control owner, approver, date, conditions, and expiration.", "Implementation may proceed without accountability."],
  ["4. Implementation", "The fictional policy is added through authorized change.", "Change identifier, implemented version, reviewer, policy group, rollback, and expected result.", "The requested and implemented rule may differ."],
  ["5. Validation", "Invented cases confirm expected allow, deny, failure, evidence, and mission outcomes.", "Validation cases, decision results, source health, business outcome, error condition, and reviewer.", "A rule can be present but misordered or disruptive."],
  ["6. Operation", "The rule supports approved communication while evidence and source health remain available.", "Policy result, usage summary, denial summary, source health, exception, alert, and owner review.", "Operational drift may go unnoticed."],
  ["7. Recertification", "The owner confirms continued need, scope, evidence, and architectural alignment.", "Owner decision, service dependency, usage, policy version, exceptions, and risk review.", "Rules can remain because no one decides."],
  ["8. Cleanup", "The team evaluates broad, duplicate, overlapping, shadowed, stale, temporary, unowned, or unsupported policy.", "Finding, owner, dependency review, usage window, rollback, risk, and action.", "Cleanup by appearance can disrupt dependencies."],
  ["9. Retirement", "The rule is removed through authorized change after dependency and rollback review.", "Retirement approval, prior version, rollback, validation, mission result, and closure.", "Removal may break a legitimate hidden path."],
  ["10. Historical retention", "Enough metadata is preserved to explain why the rule existed, changed, and ended.", "Purpose, owner, versions, approvals, findings, retirement date, validation, and lessons.", "Future reviewers may recreate unnecessary policy."],
];

const evidenceMatrix = [
  {
    id: "FW-01",
    source: "Fictional firewall rule register",
    observation: "The register contains 142 rules; 108 have current owners and review dates, 18 are temporary, and 16 require ownership or purpose validation.",
    supports: "A structured cleanup and recertification campaign is justified.",
    limits: "The register does not prove which rules are implemented, active, used, ordered correctly, or effective.",
    use: "Prioritize evidence collection and owner validation before making changes.",
  },
  {
    id: "FW-02",
    source: "Fictional temporary exception log",
    observation: "Six temporary rules are past expiration; two support completed migration work and four support recovery or supplier operations.",
    supports: "Expiration, closure, compensating-control, and residual-risk review are required.",
    limits: "Expired status does not prove the rules are active, unnecessary, or unsafe.",
    use: "Classify each rule as unvalidated and assign owner review.",
  },
  {
    id: "FW-03",
    source: "Fictional effective-policy review",
    observation: "Three narrow deny rules may be shadowed by an earlier broad allow rule.",
    supports: "Rule ordering and interaction require conceptual validation.",
    limits: "The review does not prove the exact outcome without current implementation evidence.",
    use: "Open a High review finding and validate policy order before relying on the denies.",
  },
  {
    id: "FW-04",
    source: "Fictional usage summary",
    observation: "Nine rules show no matching communication during the supplied review window.",
    supports: "Those rules may be retirement candidates.",
    limits: "No observed use does not prove no dependency exists, especially for seasonal, emergency, recovery, or infrequent workflows.",
    use: "Combine usage with service, owner, change, recovery, and dependency evidence.",
  },
  {
    id: "FW-05",
    source: "Fictional service catalog",
    observation: "Four rules reference retired service names, while one destination group remains shared with a current recovery workflow.",
    supports: "Stale references and shared dependency review are required.",
    limits: "Retired names do not prove current policy is unused or safe to remove.",
    use: "Map current destinations and validate recovery dependency before cleanup.",
  },
  {
    id: "FW-06",
    source: "Fictional policy-decision evidence",
    observation: "Allowed and denied decisions are available at major zone boundaries, but service-to-service and recovery rules have incomplete source-health evidence.",
    supports: "Evidence quality differs across policy layers.",
    limits: "Incomplete evidence does not prove policy failure or bypass.",
    use: "Prioritize source-health and decision evidence for high-impact rules.",
  },
  {
    id: "FW-07",
    source: "Fictional rollback exercise",
    observation: "A rule cleanup was reversed after a notification dependency was discovered during validation.",
    supports: "Rollback and mission validation are necessary parts of rule retirement.",
    limits: "One reversal does not prove cleanup is unsafe or every rule has hidden dependencies.",
    use: "Strengthen dependency review and test cases before future retirement.",
  },
  {
    id: "FW-08",
    source: "Fictional recovery policy review",
    observation: "Emergency recovery rules use broader destination groups and stronger approval but incomplete automatic expiration.",
    supports: "Recovery rules need time-bound scope, evidence, revocation, and closure.",
    limits: "Broad recovery policy does not prove misuse or permanent reachability.",
    use: "Treat the rules as conditional until expiration and closure evidence are complete.",
  },
];

const defects = [
  ["Broad source", "A fictional rule permits communication from an entire internal zone when only one service identity requires access.", "Unrelated services may gain unnecessary reachability.", "Narrow the source by service, workload, identity, or application role."],
  ["Broad destination", "A fictional rule targets a large destination group even though one service is required.", "One workflow may expose unrelated functions.", "Limit destination scope and document any temporary constraint."],
  ["Any-service rule", "A fictional rule permits all services because the exact dependency was not documented.", "The rule may enable unnecessary operations.", "Identify the required service or operation before approval."],
  ["Shadowed deny", "A fictional narrow deny may never apply because a broad allow appears earlier.", "Defenders may believe a control exists when effective policy differs.", "Review conceptual order and validate the intended outcome."],
  ["Duplicate policy", "Multiple fictional rules allow the same communication under different names and owners.", "Changes and retirement become inconsistent.", "Consolidate after ownership, dependency, exception, and rollback review."],
  ["Expired temporary rule", "A fictional migration or support rule remains beyond its approved window.", "Temporary broad access may become permanent.", "Require retain, restrict, or retire review."],
  ["Unowned rule", "No fictional owner can confirm the current purpose or risk.", "The rule may never be recertified or retired.", "Escalate ownership and block automatic approval."],
  ["No implementation evidence", "A requested rule appears in documentation, but current implemented version and policy result are missing.", "The rule may be counted as a control without proof.", "Separate request, approval, implementation, operation, and validation evidence."],
  ["No rollback", "A fictional cleanup change lacks a plan to restore the prior approved policy.", "A hidden dependency may cause prolonged disruption.", "Define rollback, validation, communication, and recovery."],
  ["No lifecycle trigger", "A fictional rule remains unchanged after service, supplier, identity, segmentation, or recovery changes.", "Policy drift and stale access accumulate.", "Use event-driven review triggers, versions, ownership, and retirement history."],
];

const labSteps = [
  ["1", "Write the firewall strategy objective", "Define the fictional mission, segmentation, communication, administrative, supplier, wireless, evidence, or recovery problem.", "Firewall strategy purpose and decision statement.", "The objective is a mission and control outcome, not a product choice."],
  ["2", "Build the rule register", "Record rule identifier, purpose, source, destination, service, identity context, action, owner, approver, evidence, exception, expiration, failure, rollback, review, and retirement.", "Complete firewall rule register.", "Every rule can be explained without real configuration syntax."],
  ["3", "Classify rule quality", "Label rules as necessary, broad-but-justified, temporary, duplicate, overlapping, shadowed, stale, unowned, unsupported, or retirement candidate.", "Rule-quality review matrix.", "Classification is evidence-based."],
  ["4", "Review effective policy", "Examine ordering, overlap, broad matches, duplicate conditions, exceptions, and intended outcomes.", "Conceptual effective-policy review.", "The review explains which policy decision should govern."],
  ["5", "Design evidence", "Define request, approval, implementation, allow, deny, source-health, usage, exception, failure, rollback, and recertification evidence.", "Firewall evidence and source-health plan.", "Evidence is minimized and decision-relevant."],
  ["6", "Govern temporary and emergency rules", "Record scope, owner, approval, dates, compensating controls, residual risk, expiration, rollback, and closure.", "Temporary and emergency rule register.", "No exception remains open without review."],
  ["7", "Plan safe failure and rollback", "Define behavior for policy-management, identity, DNS, logging, enforcement, misordering, overblocking, and over-permitting failures.", "Failure, degraded-mode, rollback, and recovery plan.", "The plan protects trust boundaries and mission communication."],
  ["8", "Prioritize cleanup", "Rank findings by decision impact, blast radius, administrative reach, evidence weakness, expiration, owner gap, and mission dependency.", "Cleanup backlog with review severity.", "Priority is not based only on age or rule count."],
  ["9", "Validate changes", "Use invented allow, deny, dependency, failure, emergency, recovery, and rollback cases.", "Validation and closure matrix.", "No real firewall or network is accessed."],
  ["10", "Maintain and communicate", "Assign owners, recertification dates, triggers, residual risks, findings, completion criteria, retirement history, and leadership decisions.", "Firewall governance and portfolio package.", "The artifact is traceable and completely fictional."],
];

const quizQuestions = [
  {
    question: "What is the strongest purpose of a firewall strategy?",
    choices: [
      "To maximize the number of rules.",
      "To govern which fictional communication is allowed, denied, evidenced, reviewed, expired, and retired and why.",
      "To replace segmentation, identity, and application authorization.",
      "To assume internal traffic is trusted.",
    ],
    answer: 1,
    explanation: "Firewall strategy is a mission and governance discipline, not only a technical rule list.",
  },
  {
    question: "A fictional rule appears in an approved request. What does that prove?",
    choices: [
      "The rule is implemented and effective.",
      "The rule has been requested and approved, but implementation, ordering, operation, usage, and effectiveness still require evidence.",
      "The communication is safe.",
      "The rule will never need review.",
    ],
    answer: 1,
    explanation: "Request and approval evidence should remain separate from implementation and operating evidence.",
  },
  {
    question: "What is rule shadowing?",
    choices: [
      "A fictional rule that has no owner.",
      "A fictional condition where an earlier rule may prevent a later rule from being evaluated as intended.",
      "A rule that is used only at night.",
      "A rule that collects too much evidence.",
    ],
    answer: 1,
    explanation: "Rule order can cause effective policy to differ from the apparent purpose of later rules.",
  },
  {
    question: "Nine fictional rules show no usage during the supplied review window. What is the strongest conclusion?",
    choices: [
      "Delete all nine immediately.",
      "Keep all nine permanently.",
      "Treat them as review candidates and combine usage with owner, dependency, seasonal, emergency, recovery, and rollback evidence.",
      "Assume they are malicious.",
    ],
    answer: 2,
    explanation: "No observed use is useful evidence but does not prove no dependency exists.",
  },
  {
    question: "Which temporary-rule governance is strongest?",
    choices: [
      "Mark the rule temporary but leave the end date blank.",
      "Record purpose, scope, owner, approver, dates, evidence, compensating controls, residual risk, automatic expiration, rollback, and closure.",
      "Hide temporary rules from normal review.",
      "Make every temporary rule permanent after one successful use.",
    ],
    answer: 1,
    explanation: "Temporary access should be narrow, time-bound, evidenced, owned, and explicitly closed.",
  },
  {
    question: "Why must firewall cleanup include rollback?",
    choices: [
      "Because every cleanup will fail.",
      "Because hidden fictional dependencies may appear during validation, and the prior approved state may need to be restored safely.",
      "Because rollback replaces review.",
      "Because old rules are always safer.",
    ],
    answer: 1,
    explanation: "Rollback supports controlled change and mission recovery without proving the original rule should remain.",
  },
  {
    question: "Which portfolio approach is safest?",
    choices: [
      "Use a real firewall rule base but replace addresses.",
      "Use copied internal policy names without organization names.",
      "Invent every rule, source, destination, identity, service, exception, record, owner, date, decision, and outcome from scratch.",
      "Use real logs because the project is defensive.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real network policy, identities, services, evidence, suppliers, and recovery details.",
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A4
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function FirewallStrategyAndRuleHygienePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A4
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Policy Lifecycle and Cleanup
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.3 Firewall Strategy and Rule Hygiene
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders treat fictional firewall policy as
            a complete lifecycle of purpose, source, destination, service,
            identity context, approval, implementation evidence, validation,
            operation, exceptions, recertification, cleanup, rollback,
            retirement, and historical accountability.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A4: Advanced Networking Defense"
          lessonTitle="Firewall Strategy and Rule Hygiene"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented rules, sources, destinations, identities, services, evidence, exceptions, owners, dates, decisions, and outcomes.",
            "I understand that a firewall rule request does not prove implementation, operation, order, usage, or effectiveness.",
            "I will evaluate purpose, specificity, ownership, evidence, exceptions, failure, rollback, and lifecycle rather than only allow or deny.",
            "I will not remove fictional rules without reviewing dependencies, alternate paths, recovery, owner evidence, and rollback.",
            "I will preserve uncertainty and avoid claiming that stale, broad, unused, or unowned policy proves compromise or malicious use.",
            "I will not access, inspect, export, test, configure, modify, bypass, or remove any real firewall rule, policy, device, network, or service.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Large Rule Base Can Hide Both Risk and Mission Dependencies"
        >
          <p className="leading-8">
            A fictional Northbridge firewall register contains 142 rules. Some
            are clearly necessary. Others are broad, temporary, duplicated,
            shadowed, stale, unowned, unsupported, or tied to retired services.
            A rushed cleanup could improve policy—or break supplier processing,
            support, notification, or recovery. The professional task is not to
            delete the most rules. It is to make every rule explainable,
            evidence-supported, and aligned with current architecture.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak cleanup decision
              </p>
              <p className="mt-2 leading-7">
                “Delete every old or unused-looking rule immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong cleanup decision
              </p>
              <p className="mt-2 leading-7">
                “Review mission purpose, source, destination, service,
                identity, effective policy, ownership, usage, dependency,
                exception, failure, rollback, residual risk, and closure before
                retaining, restricting, consolidating, or retiring a rule.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Firewall hygiene is evidence-based lifecycle governance. A lower
            rule count can be useful, but the real goal is necessary, precise,
            owned, validated, maintainable, and recoverable policy.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exactly Five Learning Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why This Matters"
          title="Firewall Rules Influence Reachability, Blast Radius, Availability, Evidence, and Recovery"
        >
          <p className="leading-8">
            Fictional firewall policy can support least connectivity and strong
            segmentation, but weak rule hygiene can quietly create broad trust,
            hidden dependencies, stale exceptions, misleading control claims,
            or fragile operations. Every important rule should be understood as
            a decision with owners, evidence, failure behavior, and lifecycle.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Architecture alignment", "Rules should implement fictional communication decisions already justified by mission, zones, identities, services, and dependencies."],
              ["Control assurance", "Request, approval, implementation, effective policy, usage, source health, and validation must remain distinct."],
              ["Safe change", "Cleanup and retirement require dependency review, rollback, business validation, evidence continuity, and closure."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The C-L-E-A-N Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["C — Confirm purpose", "Identify the fictional mission workflow, owner, source, destination, service, identity, state, and duration."],
              ["L — Limit scope", "Use the narrowest practical fictional source, destination, service, identity, environment, and time conditions."],
              ["E — Examine effective policy", "Review fictional ordering, overlap, duplicate matches, shadowing, exceptions, implementation, and decision evidence."],
              ["A — Assign evidence and accountability", "Define fictional rule owner, control owner, approver, source health, validation, exception, risk, and closure."],
              ["N — Normalize lifecycle", "Recertify, restrict, consolidate, expire, retire, rollback, preserve history, and trigger review after change."],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Decision-ready firewall rule statement
            </p>
            <p className="mt-2 leading-7">
              This fictional rule supports a documented mission purpose for a
              defined source, destination, service, identity, environment,
              state, and duration. It has an accountable owner, approved
              evidence, known interactions, safe failure, rollback, exception
              status, recertification date, residual risk, and retirement
              trigger.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Firewall Strategy and Rule Hygiene"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 1
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Apply Ten Firewall Strategy Principles
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongPractice}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    If ignored
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Document Every Rule with Twelve Fields"
        >
          <div className="grid gap-5">
            {ruleFields.map((item, index) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.field}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.purpose}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strongExample}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weakExample}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Classify Ten Rule-Quality Types
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {qualityTypes.map(([type, description, action]) => (
              <article
                key={type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">{type}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {description}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Action
                  </p>
                  <p className="mt-2 text-sm leading-6">{action}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Ask Ten Firewall Review Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewQuestions.map(([area, question, evidence]) => (
              <article
                key={area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{area}</h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Supporting fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Follow the Ten-Stage Rule Lifecycle"
        >
          <div className="grid gap-5">
            {lifecycle.map(([stage, purpose, evidence, failure]) => (
              <article
                key={stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">{stage}</h3>
                <p className="mt-3 leading-7 text-slate-300">{purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{evidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      If weak
                    </p>
                    <p className="mt-2 text-sm leading-6">{failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Separate Documentation from Effective Control"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {["Evidence layer", "What it supports", "What it does not prove", "Required next question"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  ["Rule request", "A fictional communication need was submitted.", "Approval, implementation, or safety.", "Who reviewed scope, alternatives, and residual risk?"],
                  ["Approval record", "Authorized fictional owners accepted the request conditions.", "The implemented rule matches the approval.", "Which version was implemented and when?"],
                  ["Implementation record", "A fictional policy change was made.", "Correct order, effective match, or mission outcome.", "Was the expected behavior validated?"],
                  ["Rule register", "The organization documents policy intent and metadata.", "Current implementation, usage, or effectiveness.", "Does current policy evidence match the register?"],
                  ["Policy decision evidence", "A fictional allow or deny outcome was recorded.", "Complete coverage, correct business action, or healthy evidence.", "Was the source healthy and the decision appropriate?"],
                  ["Usage summary", "Communication matching the fictional rule was or was not observed.", "Permanent necessity or safe retirement.", "Is the workflow seasonal, emergency, recovery, or hidden behind another path?"],
                  ["Validation result", "Invented cases produced expected fictional outcomes at one time.", "Future correctness after change or failure.", "What triggers revalidation?"],
                  ["Recertification", "A fictional owner confirmed continued need and scope.", "That no hidden dependency or interaction remains.", "Was evidence current, independent, and complete?"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-4 align-top leading-6 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Design Cleanup Priorities without Breaking the Mission"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["High-priority review", "Broad administrative, supplier, recovery, data-zone, unowned, expired, shadowed, or unsupported rules affecting critical assets.", "Review owner, effective policy, evidence, dependency, failure, rollback, and residual risk first."],
              ["Moderate-priority review", "Duplicate, overlapping, stale-reference, limited-use, or broad-but-compensated rules.", "Clarify ownership, usage, interaction, maintainability, and consolidation opportunities."],
              ["Routine recertification", "Necessary, specific, owned, evidenced, and stable rules.", "Confirm continued purpose, scope, source health, triggers, and review date."],
              ["Temporary closeout", "Migration, support, emergency, or recovery rules approaching or past expiration.", "Validate closure, remove temporary access, preserve evidence, and confirm business state."],
              ["Retirement candidate", "Rules with no current dependency, sufficient evidence, owner approval, rollback, and low change risk.", "Use authorized change, validation, monitoring, and closure."],
              ["Decision-blocked", "Rules with unresolved owner, implementation, dependency, source-health, or recovery information.", "Do not recertify or remove automatically; assign evidence actions."],
            ].map(([title, description, action]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {description}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Recommended fictional action
                  </p>
                  <p className="mt-2 text-sm leading-6">{action}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Firewall View"
          title="Northbridge Firewall Policy Lifecycle"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It teaches policy reasoning without real firewall
            syntax, addresses, routes, devices, ports, vendors, credentials,
            configuration steps, or internal rule bases.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.4fr_0.95fr]">
            <div className="grid gap-3">
              {[
                ["Request", "Mission purpose, source, destination, service, identity, owner"],
                ["Review", "Architecture, segmentation, alternatives, risk, evidence"],
                ["Approval", "Authorized conditions, exception, expiration, residual risk"],
                ["Implementation", "Version, change, rollback, expected policy result"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"
                >
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Northbridge Rule Base
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Public boundary", "User-to-portal and portal-to-application policy"],
                  ["Application boundary", "Service-to-service and application-to-data policy"],
                  ["Supplier boundary", "Minimized request and validated result policy"],
                  ["Administration", "Support, infrastructure, supplier, and recovery access policy"],
                  ["Wireless", "Managed, employee, guest, service-device, and administrative policy"],
                  ["Monitoring", "Evidence delivery and analyst-access policy"],
                  ["DNS and dependencies", "Approved naming and shared-service communication"],
                  ["Recovery", "Emergency, restore, validation, revocation, and closure policy"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Validate", "Allow, deny, interaction, source health, failure, mission outcome"],
                ["Operate", "Usage, exceptions, alerts, drift, owner review"],
                ["Clean up", "Broad, duplicate, shadowed, stale, temporary, unowned"],
                ["Retire", "Dependency review, rollback, change, validation, closure, history"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"
                >
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Firewall Hygiene Dashboard"
          subtitle="Fictional rule purpose, ownership, exception, evidence, recertification, and cleanup status for training only."
          metrics={[
            {
              label: "Rules requiring review",
              value: "34",
              note: "Sixteen need owner or purpose validation, twelve have quality findings, and six temporary rules are past expiration.",
            },
            {
              label: "Possible shadowing findings",
              value: "3",
              note: "Three narrow deny rules may be affected by an earlier broad allow.",
            },
            {
              label: "Retirement candidates with complete evidence",
              value: "5",
              note: "Five fictional rules have owner approval, dependency review, usage evidence, rollback, and closure criteria.",
            },
          ]}
        />

        <FakeAlertCard
          title="Broad Allow May Shadow Three Narrow Deny Rules"
          severity="High"
          time="3:06 PM"
          source="Fake Northbridge Firewall Assurance Console"
          details="A fictional effective-policy review indicates that an earlier broad allow may match communication before three later deny rules are evaluated. Current implementation evidence and source-health records are incomplete."
          recommendation="Treat the deny controls as unproven. Review fictional ordering, scope, implemented version, policy-decision evidence, source health, dependencies, validation cases, rollback, owner approval, and residual risk before relying on or changing the policy."
        />

        <FakeLogPanel
          title="Fake Firewall Review Timeline"
          logs={[
            "09:00 REGISTER rules='142'",
            "09:08 OWNER current='108'",
            "09:16 TEMPORARY rules='18'",
            "09:24 TEMPORARY expired='6'",
            "09:32 QUALITY broad='9'",
            "09:40 QUALITY duplicate='4'",
            "09:48 QUALITY overlap='5'",
            "09:56 QUALITY shadowing='3'",
            "10:04 QUALITY stale='8'",
            "10:12 QUALITY unowned='16'",
            "10:20 USAGE no-match='9'",
            "10:28 EVIDENCE boundary='strong'",
            "10:36 EVIDENCE service-to-service='partial'",
            "10:44 EVIDENCE recovery='partial'",
            "10:52 RETIREMENT ready='5'",
            "11:00 RETIREMENT blocked='7'",
            "11:08 ROLLBACK tested='8-of-12'",
            "11:16 RECERTIFICATION overdue='11'",
            "11:24 CONFIDENCE policy='moderate'",
            "15:06 ALERT issue='possible-shadowing'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Firewall Evidence Supports—and What It Does Not Prove
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
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
                    ["Firewall review use", item.use],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Firewall Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional possible-shadowing evidence?"
          evidence={[
            "Three narrow deny rules appear after one broad allow rule.",
            "The fictional effective-policy review suggests the broad allow may match first.",
            "Current implemented version and source-health evidence are incomplete.",
            "The deny rules protect administrative and recovery-related communication.",
            "The evidence does not prove the deny rules are ineffective in every state.",
            "Immediate reordering could disrupt an undocumented dependency.",
            "Relying on the deny rules without validation could create false confidence.",
            "Overall policy confidence is Moderate.",
          ]}
          options={[
            "Treat the deny controls as unproven, assign owners, validate fictional ordering and effective policy using supplied evidence and invented cases, review dependencies and rollback, then authorize the narrowest safe correction.",
            "Delete the broad allow immediately.",
            "Assume the deny rules work because they appear in the rule base.",
            "Assume the broad allow is being maliciously abused.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves mission safety and uncertainty while requiring implementation, ordering, dependency, validation, rollback, ownership, and residual-risk evidence."
        />

        <SectionCard
          eyebrow="Firewall Defects"
          title="Ten Problems That Weaken Rule Hygiene"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {defects.map(([defect, observation, impact, correction]) => (
              <article
                key={defect}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{defect}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Decision impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Firewall Strategy and Rule-Hygiene Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, inspect, export, test, configure, reorder, bypass, disable,
            remove, monitor, investigate, or modify any real firewall, policy,
            rule base, network, device, service, account, or organizational
            infrastructure.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map(([step, title, action, output, quality]) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{action}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Unused-Looking Rule Supports Recovery"
          scenario="A fictional rule shows no matching communication during the supplied ninety-day review window. The service owner says it may be used only during recovery exercises, but the recovery evidence and next exercise date are incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Classify the rule as Decision-Blocked, assign the fictional recovery owner, validate purpose, exercise dependency, source health, scope, rollback, and review date, and do not remove or recertify it automatically.",
              outcome:
                "Best defensive choice. Infrequent or emergency use requires evidence and ownership rather than assumptions.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the rule because no usage was observed.",
              outcome:
                "Weak. The supplied window may not include legitimate recovery use.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep the rule permanently because recovery may need it.",
              outcome:
                "Weak. A possibility does not replace scope, owner, evidence, expiration, and risk review.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Cleanup Change Breaks Notifications"
          scenario="A fictional duplicate-looking rule is removed during cleanup. Validation reveals that notification delivery stops because the remaining rule applies only in normal state and not during the approved degraded workflow."
          choices={[
            {
              label: "Choice A",
              response:
                "Use the fictional rollback plan, restore the prior approved policy, preserve evidence, document the hidden degraded-state dependency, revise the communication model, and retest a narrower maintainable rule.",
              outcome:
                "Best choice. Rollback protects the mission while the design is corrected.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the change in place because duplicate rules should always be removed.",
              outcome:
                "Weak. Policy appearance does not outweigh mission evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow all notification-related traffic permanently.",
              outcome:
                "Weak. Broad access abandons least privilege and avoids understanding the dependency.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Clean a Complex Rule Base without Losing Mission Continuity"
        >
          <p className="leading-8">
            Fictional leadership wants a thirty-percent reduction in firewall
            rules. The rule base contains broad application rules, duplicate
            supplier rules, shadowed denies, old service names, temporary
            migration access, emergency recovery rules, and incomplete
            evidence. Build a safe strategy that refuses to treat rule count as
            the only success measure.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Prioritize by decision impact", "Review fictional administrative, supplier, recovery, data, unowned, expired, shadowed, and unsupported rules first."],
              ["Protect mission dependencies", "Use service, owner, usage, seasonal, degraded, emergency, recovery, and alternate-path evidence."],
              ["Consolidate carefully", "Combine fictional duplicate or overlapping rules only when purpose, scope, ownership, evidence, and rollback align."],
              ["Correct effective policy", "Address fictional broad matches and shadowing through validated ordering and scope decisions."],
              ["Close temporary access", "Expire fictional migration, support, and emergency rules through authorized closure and business validation."],
              ["Measure real improvement", "Track fewer unowned, broad, unsupported, expired, duplicate, shadowed, and unvalidated rules—not only total count."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional rule-quality inventory, effective-policy
              findings, cleanup prioritization model, temporary-rule closure
              plan, rollback strategy, validation matrix, owner action register,
              residual-risk summary, success metrics, and leadership
              explanation of why safe cleanup is more important than raw rule
              reduction.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Firewall Strategy and Rule Hygiene Checklist"
          items={[
            "I can explain firewall strategy as a fictional policy lifecycle rather than only a rule list.",
            "I can connect every fictional rule to a mission purpose, source, destination, service, identity context, owner, evidence, and lifecycle.",
            "I can distinguish request, approval, implementation, effective policy, usage, validation, and recertification evidence.",
            "I can identify broad, duplicate, overlapping, shadowed, stale, temporary, unowned, unsupported, and retirement-candidate rules.",
            "I can review conceptual rule ordering and interaction without using real configurations.",
            "I can govern temporary, emergency, compensating, and conditional rules through expiration, evidence, residual risk, rollback, and closure.",
            "I can interpret no-usage evidence cautiously and consider seasonal, emergency, recovery, and hidden dependencies.",
            "I can design safe failure, degraded operation, rollback, alternate evidence, and recovery.",
            "I can prioritize cleanup by mission and decision impact rather than rule age or count alone.",
            "I can validate fictional allow, deny, failure, dependency, emergency, recovery, and rollback outcomes.",
            "I can assign owners, recertification dates, triggers, findings, completion criteria, retirement history, and residual risks.",
            "I can create a completely fictional firewall artifact without using real rules, addresses, routes, devices, ports, identities, DNS records, logs, suppliers, or internal policy names.",
          ]}
        />

        <MiniQuiz
          title="A4.3 Mini Quiz: Firewall Strategy and Rule Hygiene"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Firewall Strategy and Rule-Hygiene Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, architecture alignment, segmentation alignment, at least forty fictional rules, stable identifiers, source, destination, service, identity context, environment, state, action, rationale, owner, approver, evidence, source health, usage, exception, expiration, failure behavior, rollback, recertification, review triggers, effective-policy analysis, broad-rule review, duplicate review, overlap review, shadowing review, stale-rule review, unowned-rule review, unsupported-rule review, temporary-rule register, emergency-rule register, cleanup prioritization, retirement candidates, validation cases, findings, completion criteria, residual risks, success metrics, leadership summary, technical appendix, reflection, and a statement that every organization, rule, source, destination, identity, service, exception, record, owner, date, decision, and outcome is invented."
          tips={[
            "Start from fictional mission and communication purpose rather than from a raw rule list.",
            "Separate request, approval, implementation, effective policy, usage, validation, and recertification evidence.",
            "Do not retire a fictional rule without dependency review, owner approval, rollback, business validation, and closure evidence.",
            "Measure improved ownership, specificity, evidence, exception closure, and policy clarity—not only lower rule count.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for IDS/IPS Concepts and Network Visibility?"
        >
          <p className="leading-8">
            Before moving to A4.4, rate your readiness from 1 to 5 for rule
            purpose, scope, identity context, ownership, ordering, overlap,
            shadowing, evidence, temporary access, recertification, cleanup,
            rollback, retirement, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a firewall rule request does not prove an operating control.",
              "I can distinguish a necessary specific rule from a broad, duplicate, overlapping, shadowed, stale, unowned, or unsupported rule.",
              "I can review fictional effective policy instead of reading each rule independently.",
              "I can interpret no-usage evidence without assuming a rule is unnecessary.",
              "I can govern temporary and emergency rules with expiration, compensating controls, rollback, and closure.",
              "I can design firewall cleanup around mission continuity and evidence.",
              "I can explain why rollback and business validation belong in rule retirement.",
              "I can produce a safe fictional firewall package without copying, modifying, or exposing real firewall policy.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional rule you narrowed, one shadowing concern, one
            exception you closed, one retirement you blocked for missing
            evidence, one rollback lesson, and one question you will carry into
            A4.4.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Firewall strategy is a fictional policy lifecycle connecting mission, architecture, segmentation, ownership, evidence, failure, recovery, and retirement.",
            "A rule request or register entry does not prove implementation, ordering, operation, usage, or effectiveness.",
            "Every important rule should have purpose, source, destination, service, identity context, owner, approver, evidence, exception, failure, rollback, and review fields.",
            "Broad, duplicate, overlapping, shadowed, stale, temporary, unowned, and unsupported rules require different evidence and actions.",
            "No observed usage does not prove that a rule has no seasonal, emergency, recovery, or hidden dependency.",
            "Temporary and emergency rules need narrow scope, strong ownership, evidence, compensating controls, automatic expiration, rollback, residual risk, and closure.",
            "Cleanup should prioritize mission and decision impact rather than age or count alone.",
            "Rollback and business validation protect the mission during rule retirement.",
            "Firewall hygiene depends on recertification, versions, source health, findings, completion criteria, review triggers, and historical accountability.",
            "Every CyberShield firewall artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A4
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, examine fictional IDS/IPS concepts and network visibility:
            placement, coverage, blind spots, encrypted boundaries, source
            health, tuning, privacy, alert meaning, prevention tradeoffs,
            escalation, and recovery.
          </p>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}