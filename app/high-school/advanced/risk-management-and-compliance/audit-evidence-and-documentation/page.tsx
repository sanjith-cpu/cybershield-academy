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
const modulePath = `${trackPath}/risk-management-and-compliance`;
const previousLesson = `${modulePath}/compliance-framework-concepts`;
const nextLesson = `${modulePath}/risk-acceptance-and-exceptions`;

const objectives = [
  "Explain what makes audit and assurance evidence relevant, sufficient, reliable, current, attributable, complete, traceable, and reviewable.",
  "Distinguish evidence that proves control design, evidence that proves operation, evidence that proves coverage, and evidence that only supports an assertion.",
  "Evaluate stale, partial, missing, contradictory, duplicated, and weakly attributed evidence without forcing a false pass/fail conclusion.",
  "Document audit work so another reviewer can understand the requirement, control, evidence source, test scope, conclusion, gap, owner, and next action.",
  "Build an Audit Evidence Register that becomes the sixth artifact in the A15 Risk Register and Leadership Recommendation.",
];

const evidenceDimensions = [
  {
    dimension: "Relevance",
    question:
      "Does the evidence actually address the requirement, control objective, population, or risk conclusion being reviewed?",
    strong:
      "A current privileged-access review for the exact production population named in the requirement.",
    weak:
      "A generic security-policy document used to prove a specific quarterly access review occurred.",
  },
  {
    dimension: "Sufficiency",
    question:
      "Is there enough evidence to support the conclusion across the intended scope?",
    strong:
      "Evidence covers the full in-scope population or a justified review sample plus follow-up where required.",
    weak:
      "One successful example is used to conclude that an entire control population is Effective.",
  },
  {
    dimension: "Reliability",
    question:
      "How trustworthy is the source, and can the evidence be independently understood or reproduced?",
    strong:
      "System-generated record with source, timestamp, owner, and consistent supporting documentation.",
    weak:
      "Unattributed screenshot with no source, date, or explanation.",
  },
  {
    dimension: "Freshness",
    question:
      "Does the evidence still describe the current environment, owner, scope, and control state?",
    strong:
      "Evidence created after the latest architecture and ownership changes.",
    weak:
      "An old test from before a major migration is treated as current proof.",
  },
  {
    dimension: "Attribution",
    question:
      "Can the reviewer identify where the evidence came from, who owns it, and which system or process produced it?",
    strong:
      "Evidence owner, source system, record ID, date, reviewer, and scope are documented.",
    weak:
      "A copied file has no clear origin or accountable owner.",
  },
  {
    dimension: "Completeness",
    question:
      "Does the evidence include the information needed to understand both normal operation and exceptions?",
    strong:
      "Completed review plus exception list, remediation status, and unresolved items.",
    weak:
      "Only the successful results are retained while failures are omitted.",
  },
  {
    dimension: "Traceability",
    question:
      "Can the evidence be traced back to the requirement, control, risk, owner, and conclusion?",
    strong:
      "MAP ID → CTL ID → evidence ID → reviewer conclusion → remediation record.",
    weak:
      "Evidence sits in a folder with no relationship to the decision it supports.",
  },
  {
    dimension: "Repeatability",
    question:
      "Could another authorized reviewer follow the documented method and understand how the conclusion was reached?",
    strong:
      "Scope, test steps, expected outcome, evidence source, and conclusion logic are documented.",
    weak:
      "The result depends on one analyst's memory with no recorded method.",
  },
];

const evidenceTypes = [
  {
    type: "System-generated evidence",
    examples:
      "Audit logs, monitoring records, access-review exports, backup status, lifecycle records.",
    strongestUse:
      "Supporting operating effectiveness, timing, events, and control activity.",
    caution:
      "Source health, collection scope, timestamps, and retention still matter.",
  },
  {
    type: "Configuration / design evidence",
    examples:
      "Approved control design, architecture record, policy configuration, scope definition.",
    strongestUse:
      "Supporting design effectiveness and intended coverage.",
    caution:
      "Design does not prove the control operated correctly over time.",
  },
  {
    type: "Human review evidence",
    examples:
      "Access approval, risk-owner decision, supplier review, control-owner attestation.",
    strongestUse:
      "Supporting governance decisions and business accountability.",
    caution:
      "Attestation is stronger when backed by objective supporting evidence.",
  },
  {
    type: "Test evidence",
    examples:
      "Recovery exercise result, control review, sample validation, synthetic check.",
    strongestUse:
      "Supporting whether an expected outcome was achieved.",
    caution:
      "Test scope and test date must match the decision being made.",
  },
  {
    type: "Third-party evidence",
    examples:
      "Supplier assessment, assurance report summary, contract evidence, service commitment.",
    strongestUse:
      "Supporting third-party control and governance decisions.",
    caution:
      "Scope, period, exclusions, and the organization's own dependency still matter.",
  },
  {
    type: "Policy / procedure evidence",
    examples:
      "Approved policy, standard, procedure, exception process, evidence-retention standard.",
    strongestUse:
      "Supporting governance intent and required process.",
    caution:
      "A document saying something should happen does not prove it actually happened.",
  },
];

const documentationLayers = [
  {
    layer: "Requirement / objective",
    purpose:
      "States what should be true and why it matters.",
    example:
      "Critical services must maintain tested recovery capability.",
  },
  {
    layer: "Mapped control",
    purpose:
      "Shows which safeguard or process is expected to satisfy the requirement.",
    example:
      "CTL-204 Backup Restore Validation.",
  },
  {
    layer: "Evidence item",
    purpose:
      "Provides the specific record used to support a test or conclusion.",
    example:
      "AUD-404 Restore test summary for the current recovery cycle.",
  },
  {
    layer: "Workpaper / review note",
    purpose:
      "Explains scope, method, result, exceptions, reviewer logic, and conclusion.",
    example:
      "Reviewer confirmed current backup sets, required key versions, recovery owners, and closure of test issues.",
  },
  {
    layer: "Finding / gap",
    purpose:
      "Records what is missing, stale, contradictory, or ineffective.",
    example:
      "Two critical recovery dependencies were absent from the first test scope.",
  },
  {
    layer: "Remediation / closure",
    purpose:
      "Shows what changed and what evidence proves the issue is resolved.",
    example:
      "Follow-up test includes both dependencies and passes expected recovery objectives.",
  },
];

const evidenceStates = [
  {
    state: "Strong",
    meaning:
      "Current, relevant, attributable, sufficiently complete evidence supports the conclusion.",
  },
  {
    state: "Sufficient with Caveat",
    meaning:
      "The evidence supports the conclusion, but a bounded limitation or assumption should remain visible.",
  },
  {
    state: "Partial",
    meaning:
      "Some but not all intended scope, population, or evidence elements are covered.",
  },
  {
    state: "Stale",
    meaning:
      "The evidence may no longer represent the current environment, owner, control, or business context.",
  },
  {
    state: "Missing",
    meaning:
      "Required evidence cannot currently be located or produced.",
  },
  {
    state: "Contradictory",
    meaning:
      "Two or more evidence sources support different conclusions and require reconciliation.",
  },
  {
    state: "Not Applicable",
    meaning:
      "The evidence requirement does not apply to the defined scope, with documented rationale.",
  },
];

const contradictionPatterns = [
  {
    pattern: "Policy says required; operation says missing",
    example:
      "Policy requires quarterly review, but no current review record exists.",
    interpretation:
      "Design intent may be clear while operating effectiveness remains Unknown or Not Met.",
  },
  {
    pattern: "Dashboard says healthy; test shows gap",
    example:
      "Dashboard reports full coverage, but sample review identifies several uncovered identities.",
    interpretation:
      "The dashboard may be incomplete or based on a different population.",
  },
  {
    pattern: "Owner attests complete; inventory says partial",
    example:
      "Control owner says all workspaces were destroyed, but the inventory still lists several open records.",
    interpretation:
      "Preserve the contradiction until the scope and evidence are reconciled.",
  },
  {
    pattern: "Old evidence says Effective; current change says uncertain",
    example:
      "A successful test predates a major migration.",
    interpretation:
      "Previous effectiveness can remain historical evidence but should not automatically support the current state.",
  },
  {
    pattern: "Supplier report says strong controls; continuity plan says no alternative",
    example:
      "Supplier security evidence is strong, but the organization still has concentration risk.",
    interpretation:
      "Different evidence sources prove different things; both can be true.",
  },
];

const evidenceRetention = [
  {
    topic: "Retention period",
    guidance:
      "Keep evidence long enough to support policy, audit, legal, contractual, operational, and historical decision needs.",
    caution:
      "Do not retain sensitive evidence forever without a business reason.",
  },
  {
    topic: "Access",
    guidance:
      "Limit evidence access to authorized reviewers, owners, auditors, and decision makers.",
    caution:
      "Audit evidence can itself contain sensitive system, identity, or business information.",
  },
  {
    topic: "Integrity",
    guidance:
      "Preserve evidence so reviewers can trust that the record has not been improperly altered.",
    caution:
      "Uncontrolled copies create confusion about which version is authoritative.",
  },
  {
    topic: "Versioning",
    guidance:
      "Record document or evidence version, review period, owner, and superseded status.",
    caution:
      "Using an obsolete version can produce an incorrect compliance conclusion.",
  },
  {
    topic: "Disposal",
    guidance:
      "Dispose of evidence according to approved retention rules when it is no longer needed.",
    caution:
      "Evidence disposal should not destroy records still required for an active risk, audit, or exception.",
  },
];

const documentationPrinciples = [
  {
    title: "Evidence should prove a claim",
    meaning:
      "Every evidence item should support a specific requirement, control objective, test result, or risk decision.",
    review:
      "What exact claim does this evidence prove?",
  },
  {
    title: "Evidence quality should match decision importance",
    meaning:
      "High-impact decisions deserve stronger, more current, and more complete evidence.",
    review:
      "Would this evidence be enough if the decision were challenged later?",
  },
  {
    title: "Documentation should be understandable by another reviewer",
    meaning:
      "A workpaper should not depend on one analyst's memory.",
    review:
      "Could another authorized reviewer reconstruct the logic?",
  },
  {
    title: "Weak evidence should stay weak",
    meaning:
      "An unattributed screenshot does not become strong because it is copied into an audit folder.",
    review:
      "Are source, date, scope, owner, and meaning clear?",
  },
  {
    title: "Exceptions and failures belong in the record",
    meaning:
      "Complete documentation includes unsuccessful results and unresolved items.",
    review:
      "Are failures and remediation visible, not only successful evidence?",
  },
  {
    title: "Contradictions should be preserved",
    meaning:
      "Conflicting evidence should be analyzed rather than hidden.",
    review:
      "What does each source actually prove?",
  },
  {
    title: "Evidence should age",
    meaning:
      "Evidence becomes less useful when systems, owners, scope, data, or controls change.",
    review:
      "What event invalidates or weakens this evidence?",
  },
  {
    title: "Sensitive evidence requires governance",
    meaning:
      "Security evidence can expose details that need controlled access and retention.",
    review:
      "Who should be allowed to view and retain this evidence?",
  },
];

const vocabulary = [
  {
    term: "Audit evidence",
    definition:
      "Information used to support a conclusion about a requirement, control, process, or risk decision.",
  },
  {
    term: "Workpaper",
    definition:
      "Documentation that records review scope, method, evidence, reasoning, conclusion, and follow-up.",
  },
  {
    term: "Evidence sufficiency",
    definition:
      "Whether enough evidence exists to support the conclusion across the intended scope.",
  },
  {
    term: "Evidence reliability",
    definition:
      "The degree to which evidence can be trusted based on source, attribution, consistency, and integrity.",
  },
  {
    term: "Evidence freshness",
    definition:
      "How well the evidence still represents the current control or environment.",
  },
  {
    term: "Traceability",
    definition:
      "The ability to connect requirement, control, evidence, conclusion, issue, and remediation.",
  },
  {
    term: "Attribution",
    definition:
      "The ability to identify the source, owner, system, date, or reviewer associated with evidence.",
  },
  {
    term: "Contradictory evidence",
    definition:
      "Evidence sources that support different conclusions and require reconciliation.",
  },
  {
    term: "Evidence retention",
    definition:
      "The approved period and method for keeping evidence available and protected.",
  },
  {
    term: "Evidence owner",
    definition:
      "The role accountable for maintaining an evidence source or record.",
  },
  {
    term: "Review period",
    definition:
      "The period of time the evidence and audit conclusion are intended to cover.",
  },
  {
    term: "Closure evidence",
    definition:
      "Evidence showing that a finding or remediation reached the approved target state.",
  },
];

const records = [
  {
    id: "AUD-401",
    requirement:
      "MAP-301 — privileged workforce access review",
    control:
      "CTL-201 Quarterly Workforce Access Review",
    evidence:
      "Quarterly review record, exception list, remediation closure",
    source:
      "Identity Governance review process",
    owner:
      "Identity Governance",
    period:
      "Current quarter",
    quality:
      "Strong",
    strengths:
      "Exact production population, current owner, completed review, exceptions retained, remediation traceable",
    limitation:
      "Must be refreshed after major identity-model change",
    conclusion:
      "Supports Met / Effective status under current scope",
    nextAction:
      "Retain according to evidence standard and refresh next quarter",
  },
  {
    id: "AUD-402",
    requirement:
      "MAP-302 — legacy compensating control",
    control:
      "CTL-202 Legacy Reporting Network Restriction",
    evidence:
      "Current network review, host inventory, modernization exception",
    source:
      "Infrastructure Security + Reporting Governance",
    owner:
      "Infrastructure Security",
    period:
      "Current month",
    quality:
      "Sufficient with Caveat",
    strengths:
      "Current compensating control scope and exception are documented",
    limitation:
      "Evidence does not prove obsolete trust, key ownership, or transport gaps are resolved",
    conclusion:
      "Supports Compensating status, not full compliance",
    nextAction:
      "Continue monthly evidence refresh until modernization closes",
  },
  {
    id: "AUD-403",
    requirement:
      "MAP-303 — partner certificate lifecycle",
    control:
      "CTL-203 Partner Certificate Renewal Monitoring",
    evidence:
      "Certificate inventory, alert, renewal ticket, sponsor confirmation",
    source:
      "Integration Platform",
    owner:
      "Integration Owner",
    period:
      "Current lifecycle window",
    quality:
      "Strong",
    strengths:
      "Current certificate state and active renewal workflow are attributable",
    limitation:
      "Replacement validation evidence not yet available",
    conclusion:
      "Supports Partially Met until replacement is validated",
    nextAction:
      "Add replacement validation and retirement evidence before expiry",
  },
  {
    id: "AUD-404",
    requirement:
      "MAP-304 — critical recovery capability",
    control:
      "CTL-204 Backup Restore Validation",
    evidence:
      "Restore test summary, key-version mapping, issue log, closure evidence",
    source:
      "Resilience Team",
    owner:
      "Resilience Team",
    period:
      "Current recovery cycle",
    quality:
      "Strong",
    strengths:
      "Current scope, expected outcome, required dependencies, and issue closure documented",
    limitation:
      "A planned test cannot reproduce every disaster condition",
    conclusion:
      "Supports Met / Effective status with normal residual uncertainty",
    nextAction:
      "Repeat after major architecture or key-lifecycle change",
  },
  {
    id: "AUD-405",
    requirement:
      "MAP-305 — critical supplier continuity",
    control:
      "CTL-205 Supplier Continuity Review",
    evidence:
      "Supplier assessment, contract review, continuity plan",
    source:
      "Vendor Management",
    owner:
      "Business Service Owner",
    period:
      "Current annual review",
    quality:
      "Sufficient with Caveat",
    strengths:
      "Current supplier security and continuity governance are documented",
    limitation:
      "No alternate provider exists, so concentration risk remains",
    conclusion:
      "Supports Partially Met; supplier evidence does not eliminate residual business dependency",
    nextAction:
      "Improve alternate operating procedures and refresh at contract renewal",
  },
  {
    id: "AUD-406",
    requirement:
      "MAP-306 — temporary data retention",
    control:
      "CTL-206 + CTL-207 temporary-data controls",
    evidence:
      "Current export cleanup evidence plus partial workspace cleanup evidence",
    source:
      "Analytics Platform + Data Science Platform",
    owner:
      "Data Governance",
    period:
      "Current project cycle",
    quality:
      "Partial",
    strengths:
      "Export cleanup is well supported",
    limitation:
      "Several recently closed workspace records lack complete destruction evidence",
    conclusion:
      "Supports Partially Met only",
    nextAction:
      "Refresh workspace evidence across full population",
  },
  {
    id: "AUD-407",
    requirement:
      "MAP-307 — current control ownership and evidence",
    control:
      "CTL-201 through CTL-207",
    evidence:
      "Control register, owner attestations, selected control-test records",
    source:
      "Security Governance",
    owner:
      "Security Governance",
    period:
      "Current quarter",
    quality:
      "Contradictory",
    strengths:
      "Control register lists all controls and owners as current",
    limitation:
      "CTL-207 operating evidence remains incomplete despite owner attestation that cleanup is complete",
    conclusion:
      "Requires reconciliation before full control-governance conclusion",
    nextAction:
      "Compare workspace inventory to attestation and refresh CTL-207 status",
  },
];

const dashboardMetrics = [
  {
    label: "Evidence records",
    value: "7",
    note: "Access, legacy, certificate, recovery, supplier, retention, and governance evidence",
  },
  {
    label: "Strong",
    value: "3",
    note: "Access review, certificate lifecycle, and recovery evidence are current and traceable",
  },
  {
    label: "Caveat / Partial",
    value: "3",
    note: "Legacy, supplier, and temporary-data evidence support bounded conclusions",
  },
  {
    label: "Contradictory",
    value: "1",
    note: "Workspace owner attestation conflicts with incomplete operating evidence",
  },
];

const logs = [
  "[08:22] AUD-401 source=IDENTITY_GOV quality=STRONG conclusion=MET",
  "[08:46] AUD-402 source=INFRA_SECURITY quality=CAVEAT conclusion=COMPENSATING",
  "[09:10] AUD-403 source=INTEGRATION quality=STRONG conclusion=PARTIAL",
  "[09:34] AUD-404 source=RESILIENCE quality=STRONG conclusion=MET",
  "[09:58] AUD-405 source=VENDOR_MGMT quality=CAVEAT concentration=OPEN",
  "[10:22] AUD-406 source=DATA_GOV quality=PARTIAL workspace_gap=OPEN",
  "[10:46] AUD-407 source=SEC_GOV quality=CONTRADICTORY owner_attestation=COMPLETE evidence=INCOMPLETE",
];

const antiPatterns = [
  {
    title: "Screenshot equals proof",
    problem:
      "A screenshot has no source, date, population, owner, or explanation.",
    better:
      "Record provenance, timestamp, scope, owner, and what the image actually proves.",
  },
  {
    title: "Policy used as operating evidence",
    problem:
      "A policy statement is treated as proof that the control operated.",
    better:
      "Use policy for design intent and operational evidence for actual performance.",
  },
  {
    title: "Only success evidence retained",
    problem:
      "Failed tests, exceptions, and open findings are omitted.",
    better:
      "Keep a complete evidence trail including gaps and remediation.",
  },
  {
    title: "Old evidence copied forward",
    problem:
      "Prior-year evidence is reused even after system or ownership change.",
    better:
      "Refresh evidence or mark the current conclusion Stale/Unknown.",
  },
  {
    title: "Attestation overrides objective evidence",
    problem:
      "An owner's statement is treated as stronger than contradictory system evidence.",
    better:
      "Preserve both sources and reconcile the difference.",
  },
  {
    title: "Evidence folder has no traceability",
    problem:
      "Files exist but are not mapped to requirements, controls, risks, or conclusions.",
    better:
      "Use stable evidence IDs and explicit relationships.",
  },
  {
    title: "Too much sensitive evidence",
    problem:
      "Teams collect and retain more sensitive detail than necessary for the decision.",
    better:
      "Collect the minimum evidence needed, control access, and apply retention rules.",
  },
  {
    title: "Closure based on task completion",
    problem:
      "A remediation ticket closes without evidence that the control state improved.",
    better:
      "Require validation evidence tied to closure criteria.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep AUD-407 Contradictory until owner attestation and current workspace evidence are reconciled.",
    outcome:
      "Best. Conflicting sources should remain visible until the reviewer understands what each actually proves.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark Strong because the control owner says cleanup is complete.",
    outcome:
      "Risky. Attestation does not automatically override incomplete operating evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark Missing because one source conflicts with another.",
    outcome:
      "Caution. Evidence exists; the issue is contradiction, not absence.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep AUD-405 Sufficient with Caveat because the supplier controls are well evidenced but concentration risk remains outside what that evidence can solve.",
    outcome:
      "Best. Strong supplier evidence and residual dependency risk can both be true.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark Strong with no caveat because the supplier assessment is current.",
    outcome:
      "Risky. Current supplier control evidence does not eliminate the organization's concentration risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark Missing because no alternate provider exists.",
    outcome:
      "Caution. The supplier evidence is present; the unresolved issue is business dependency, not missing evidence.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What makes audit evidence relevant?",
    choices: [
      "It directly supports the requirement, control objective, population, or conclusion being reviewed.",
      "It is visually impressive.",
      "It is stored in an audit folder.",
      "It is old enough to be historical.",
    ],
    answer: 0,
    explanation:
      "Relevant evidence must address the exact claim being tested.",
  },
  {
    question:
      "What does evidence sufficiency mean?",
    choices: [
      "Enough evidence exists to support the conclusion across the intended scope.",
      "The evidence has many pages.",
      "The control owner agrees with the result.",
      "The evidence is a screenshot.",
    ],
    answer: 0,
    explanation:
      "Sufficiency is about whether the evidence amount and coverage support the conclusion.",
  },
  {
    question:
      "What is strongest when a policy requires a control but no current operating record exists?",
    choices: [
      "The design requirement may be clear, but operating effectiveness remains unsupported.",
      "The control is automatically Effective.",
      "The policy proves operation.",
      "The requirement should be deleted.",
    ],
    answer: 0,
    explanation:
      "Policy supports design intent, not actual operation.",
  },
  {
    question:
      "What should happen with contradictory evidence?",
    choices: [
      "Preserve the contradiction and determine what each source actually proves.",
      "Delete the weaker source.",
      "Always trust the control owner.",
      "Average the two conclusions.",
    ],
    answer: 0,
    explanation:
      "Conflicting evidence should be reconciled rather than hidden.",
  },
  {
    question:
      "Why does evidence freshness matter?",
    choices: [
      "Old evidence may no longer describe the current environment, owner, scope, or control state.",
      "Old evidence is always invalid.",
      "Freshness only matters for physical controls.",
      "Freshness replaces traceability.",
    ],
    answer: 0,
    explanation:
      "Evidence can lose relevance after meaningful change.",
  },
  {
    question:
      "What is a workpaper?",
    choices: [
      "Documentation of review scope, method, evidence, reasoning, conclusion, and follow-up.",
      "A list of passwords.",
      "A policy exception only.",
      "A risk score with no explanation.",
    ],
    answer: 0,
    explanation:
      "Workpapers make audit reasoning understandable and reviewable.",
  },
  {
    question:
      "What is strongest for sensitive audit evidence?",
    choices: [
      "Collect only what is needed, restrict access, preserve integrity, apply retention, and dispose according to policy.",
      "Keep every detail forever.",
      "Share it widely for convenience.",
      "Remove all provenance information.",
    ],
    answer: 0,
    explanation:
      "Evidence governance should balance review needs with sensitivity, retention, and access control.",
  },
];

const checklistItems = [
  "Every evidence item has a stable ID.",
  "The supported requirement or control is identified.",
  "Evidence relevance is assessed.",
  "Evidence sufficiency is assessed.",
  "Evidence reliability is assessed.",
  "Evidence freshness is recorded.",
  "Evidence source is attributable.",
  "Evidence owner is named.",
  "Review period is recorded.",
  "Population or scope is recorded.",
  "Successful and unsuccessful results are retained.",
  "Exceptions and open issues are visible.",
  "Evidence traces to requirement, control, risk, and conclusion.",
  "Contradictory evidence remains visible until reconciled.",
  "Stale evidence reduces confidence.",
  "Workpaper method and conclusion are understandable.",
  "Sensitive evidence access is controlled.",
  "Retention and disposal are governed.",
  "Closure requires validation evidence.",
  "No evidence collection depends on unsafe access to real private systems or confidential records.",
];

const takeaways = [
  "Evidence should be relevant, sufficient, reliable, current, attributable, complete, traceable, and reviewable.",
  "Different evidence types prove different things.",
  "Policy proves intent; operational records prove operation.",
  "Strong design does not automatically prove strong operation.",
  "Contradictory evidence should be preserved and reconciled.",
  "Missing evidence means uncertainty, not automatic control failure.",
  "Workpapers should let another reviewer understand how the conclusion was reached.",
  "Audit evidence can be sensitive and needs access, integrity, retention, and disposal controls.",
  "Closure evidence should prove the risk or control state actually changed.",
  "The Audit Evidence Register prepares you for A15.7 Risk Acceptance and Exceptions.",
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A15
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

export default function AuditEvidenceAndDocumentationPage() {
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
              A15.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Audit Evidence and Documentation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security decisions are stronger when the evidence behind them can
            be understood, traced, reviewed, and challenged. This lesson focuses
            on what good evidence looks like and how to document a conclusion so
            another reviewer can follow the logic.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All evidence in this lesson is fictional and synthetic. Do not use
            confidential audit reports, private contracts, credentials, or
            restricted organizational records.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A15: Risk Management and Compliance"
          lessonTitle="Audit Evidence and Documentation"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.6 Entry Readiness"
          items={[
            "I can map a requirement to a control.",
            "I can distinguish design effectiveness from operating effectiveness.",
            "I can explain why compliance and security are related but not identical.",
            "I will use only fictional and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Conclusion Is Only as Strong as the Evidence and Documentation Behind It"
        >
          <p className="leading-8">
            An audit record should answer more than “pass” or “fail.” A reviewer
            should be able to see what requirement was tested, which control was
            expected to satisfy it, what evidence was used, what population was
            reviewed, what limitation existed, and why the final conclusion was
            reasonable.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good evidence makes a security decision explainable, repeatable, and defensible.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Quality"
          title="Eight Dimensions of Strong Audit Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong: {item.strong}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Weak: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Types"
          title="Different Sources Prove Different Things"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strongest use: {item.strongestUse}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Documentation Stack"
          title="Trace the Decision From Requirement to Closure"
        >
          <div className="grid gap-5">
            {documentationLayers.map((item, index) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-blue-50">
                      {item.layer}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {item.purpose}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Example: {item.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence States"
          title="Do Not Force Weak Evidence Into a Strong Conclusion"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Contradictory Evidence"
          title="Conflicts Often Mean the Sources Are Proving Different Things"
        >
          <div className="grid gap-5">
            {contradictionPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.pattern}
                </h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Interpretation: {item.interpretation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Governance"
          title="Audit Evidence Has Its Own Security and Lifecycle"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceRetention.map((item) => (
              <article
                key={item.topic}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.topic}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Guidance: {item.guidance}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Defensible Audit Documentation"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {documentationPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Audit Evidence and Documentation Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Evidence Register"
          title="Seven Northbridge Audit Evidence Records"
        >
          <div className="grid gap-5">
            {records.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.quality}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.requirement}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Mapped control", item.control],
                    ["Evidence", item.evidence],
                    ["Source", item.source],
                    ["Evidence owner", item.owner],
                    ["Review period", item.period],
                    ["Strengths", item.strengths],
                    ["Limitation", item.limitation],
                    ["Conclusion", item.conclusion],
                    ["Next action", item.nextAction],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Audit Evidence Dashboard"
          subtitle="Fictional evidence quality, traceability, caveat, and contradiction summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Control Governance Evidence Is Contradictory"
          severity="High"
          time="10:46"
          source="Fictional Audit Evidence Review"
          details="AUD-407 shows a current control-owner attestation stating temporary-workspace cleanup is complete, while the operating evidence for CTL-207 remains incomplete across the full in-scope population."
          recommendation="Keep the evidence state Contradictory until the workspace inventory, cleanup logs, and owner attestation are reconciled."
        />

        <Section
          eyebrow="Workpaper Quality"
          title="A Reviewer Should Be Able to Reconstruct the Decision"
        >
          <p className="leading-8">
            A good workpaper explains enough context that another authorized
            reviewer can understand the scope, control objective, evidence
            source, test method, exception, and conclusion without needing the
            original analyst to remember every detail.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">Weak workpaper</h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                “Checked logs. Looks good.”
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Stronger workpaper</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                “Reviewed the current-quarter production access population,
                confirmed completion status, reviewed documented exceptions,
                traced remediation for excess access, and found no remaining
                unapproved accounts in the reviewed scope.”
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Audit Evidence Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Conflicting Workspace Evidence"
          question="What is the strongest state for AUD-407?"
          evidence={[
            "The control register lists all control owners as current.",
            "The Data Science Platform owner attests that workspace cleanup is complete.",
            "CTL-207 operating evidence remains incomplete for several recently closed workspaces.",
            "The full workspace inventory has not yet been reconciled against the attestation.",
          ]}
          options={[
            "Contradictory until the attestation and operating evidence are reconciled.",
            "Strong because the owner attestation is current.",
            "Missing because there is disagreement.",
            "Not Applicable because the workspaces are temporary.",
          ]}
          bestAnswer={0}
          explanation="Evidence exists from multiple sources, but those sources support different conclusions. The contradiction should remain visible until scope and operating evidence are reconciled."
        />

        <Section
          eyebrow="Common Evidence Mistakes"
          title="Eight Ways Audit Evidence Becomes Misleading"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Owner Attestation Conflicts With Operating Evidence"
          scenario="A control owner says temporary workspace cleanup is complete, but current operating evidence is incomplete across the full population."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Strong Supplier Evidence, Residual Concentration Risk"
          scenario="A critical supplier has current security and continuity evidence, but the organization still has no practical alternate provider."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Audit Evidence Register"
        >
          <p className="leading-8">
            Use fictional evidence records, owners, control IDs, requirement
            IDs, workpapers, findings, and conclusions only.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty fictional evidence records.",
              "Give every evidence item a stable AUD ID.",
              "Map each evidence item to one or more MAP IDs.",
              "Map each evidence item to one or more CTL IDs.",
              "Map related RSK IDs where useful.",
              "Record evidence type.",
              "Record evidence source.",
              "Record evidence owner.",
              "Record review period.",
              "Record evidence date.",
              "Record scope or population.",
              "Assess relevance.",
              "Assess sufficiency.",
              "Assess reliability.",
              "Assess freshness.",
              "Assess attribution.",
              "Assess completeness.",
              "Assess traceability.",
              "Assess repeatability.",
              "Classify evidence as Strong, Sufficient with Caveat, Partial, Stale, Missing, Contradictory, or Not Applicable.",
              "Write the conclusion the evidence supports.",
              "Write one limitation.",
              "Record unresolved findings.",
              "Record remediation owner where needed.",
              "Record next action.",
              "Record retention classification.",
              "Record access classification.",
              "Record version or superseded state.",
              "Include at least five Strong records.",
              "Include at least five Partial or Caveat records.",
              "Include at least three Stale records.",
              "Include at least three Missing records.",
              "Include at least three Contradictory records.",
              "Include at least two Not Applicable records with rationale.",
              "Create at least five workpaper summaries another reviewer could follow.",
              "Trace at least five records from requirement to control to evidence to conclusion to remediation.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not collect confidential audit reports, private contracts,
              passwords, credentials, real system logs, or restricted
              organizational records. Use synthetic evidence only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Supplier Assurance vs. Concentration Risk"
          question="What is the strongest interpretation of AUD-405?"
          evidence={[
            "The supplier assessment is current.",
            "The contract review is current.",
            "A continuity plan exists.",
            "No practical alternate provider exists.",
            "A major supplier outage would still have high business impact.",
          ]}
          options={[
            "Sufficient with Caveat — evidence supports supplier governance, but not elimination of concentration risk.",
            "Strong with no limitation because the supplier assessment is current.",
            "Missing because there is no alternate provider.",
            "Not Applicable because the service is external.",
          ]}
          bestAnswer={0}
          explanation="The evidence is strong for supplier governance, but the unresolved business dependency remains outside what that evidence can prove away."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Audit Evidence and Workpaper Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard describing how
            evidence is collected, identified, evaluated, documented, retained,
            and linked to risk and compliance decisions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Evidence ID format",
              "Evidence types",
              "Required attribution",
              "Review period",
              "Population / scope",
              "Relevance criteria",
              "Sufficiency criteria",
              "Reliability criteria",
              "Freshness rules",
              "Traceability requirements",
              "Workpaper template",
              "Contradictory-evidence handling",
              "Missing-evidence handling",
              "Sensitive-evidence access",
              "Retention period",
              "Versioning",
              "Closure evidence",
              "Leadership reporting",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            The strongest standard should improve confidence without encouraging
            teams to collect unnecessary sensitive information.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.6 Mini Quiz: Audit Evidence and Documentation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Audit Evidence Register"
          prompt="Create the sixth artifact for your A15 Risk Register and Leadership Recommendation: a fictional Audit Evidence Register with at least thirty records. Include AUD ID, mapped MAP ID, mapped CTL ID, related RSK ID where useful, evidence type, source, owner, review period, date, population/scope, relevance, sufficiency, reliability, freshness, attribution, completeness, traceability, repeatability, evidence state, supported conclusion, limitation, finding, remediation owner, next action, retention classification, access classification, and version/superseded state."
          tips={[
            "Different evidence proves different claims.",
            "Keep stale, missing, and contradictory evidence visible.",
            "Make every workpaper understandable to another reviewer.",
            "Trace evidence back to requirements and controls.",
            "Collect only what is needed.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.7?"
        >
          <p className="leading-8">
            A15.7 focuses on Risk Acceptance and Exceptions. Before continuing,
            make sure you can tell the difference between strong evidence, weak
            evidence, and evidence that supports only part of a decision.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can evaluate relevance, sufficiency, reliability, and freshness.",
              "I can trace evidence from requirement to control to conclusion.",
              "I can explain why policy evidence does not prove operation.",
              "I can preserve contradictory evidence instead of hiding it.",
              "I can write a workpaper another reviewer could understand.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Audit Evidence Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable evidence IDs",
                detail:
                  "Evidence should stay traceable even when workpapers or review periods change.",
              },
              {
                title: "Show what each source proves",
                detail:
                  "Separate design intent, operating evidence, coverage evidence, approval, and recovery proof.",
              },
              {
                title: "Rate quality honestly",
                detail:
                  "Use Partial, Stale, Missing, or Contradictory when the evidence does not justify Strong.",
              },
              {
                title: "Document the review period",
                detail:
                  "A reader should know what time period the evidence is intended to support.",
              },
              {
                title: "Show provenance",
                detail:
                  "Record source, owner, date, population, and reviewer so evidence is attributable.",
              },
              {
                title: "Preserve limitations",
                detail:
                  "A good conclusion explains what the evidence does not prove.",
              },
              {
                title: "Protect sensitive evidence",
                detail:
                  "Use access and retention controls appropriate to the evidence sensitivity.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.7 will use evidence quality to decide when risk acceptance or a formal exception is justified.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Audit evidence should be sufficient without exposing unnecessary sensitive information
          </h2>
          <p className="mt-3 leading-7">
            Do not collect confidential audit reports, restricted contracts,
            real credentials, private organizational logs, or sensitive
            evidence you are not authorized to access. All evidence, owners,
            systems, workpapers, and findings in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.6 Audit Evidence and Documentation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for evidence quality, source
            attribution, freshness, traceability, workpapers, contradictions,
            retention, and closure evidence. Next, A15.7 focuses on Risk
            Acceptance and Exceptions.
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