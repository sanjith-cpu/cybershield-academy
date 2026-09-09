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
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;
const previousLesson = `${modulePath}/balancing-security-privacy-and-usability`;
const moduleTest = `${modulePath}/module-test`;

const objectives = [
  "Integrate privacy context, data inventory, minimization, user expectations, retention, privacy risk, governance ownership, architecture, and tradeoff evidence into one coherent Privacy Engineering Review.",
  "Resolve fictional conflicts between business purpose, data scope, user expectations, supplier dependencies, lifecycle evidence, security controls, usability, accessibility, and residual privacy risk without hiding uncertainty.",
  "Prioritize privacy engineering actions using impact, likelihood, evidence confidence, business dependency, control strength, implementation complexity, user impact, and review urgency rather than relying on one score.",
  "Produce defensible privacy decisions with accountable owners, milestones, escalation criteria, closure evidence, change triggers, and leadership-ready recommendations.",
  "Complete the A16 Privacy Engineering Review as the final portfolio artifact for Privacy Engineering and Data Governance.",
];

const portfolioArtifacts = [
  {
    lesson: "A16.1",
    title: "Privacy Engineering Context Map",
    role:
      "Defines business services, data purposes, stakeholders, expectations, dependencies, privacy questions, and initial decision boundaries.",
    contributes:
      "Why the data practice exists and which people, services, and goals matter.",
  },
  {
    lesson: "A16.2",
    title: "Data Classification and Inventory Register",
    role:
      "Documents what data exists, where it comes from, where it lives, who owns it, who accesses it, who receives it, and how sensitive it is.",
    contributes:
      "The factual data foundation for every later privacy decision.",
  },
  {
    lesson: "A16.3",
    title: "Data Minimization Review",
    role:
      "Tests necessity, precision, access, sharing, copies, retention, and inference against the approved purpose.",
    contributes:
      "Which data or exposure can be removed, reduced, aggregated, separated, or shortened.",
  },
  {
    lesson: "A16.4",
    title: "Consent and Expectations Assessment",
    role:
      "Evaluates notice, meaningful choice, defaults, accessibility, secondary use, and whether actual system behavior matches reasonable expectations.",
    contributes:
      "The user-facing and contextual privacy perspective.",
  },
  {
    lesson: "A16.5",
    title: "Retention and Deletion Schedule",
    role:
      "Defines lifecycle states, retention triggers, end actions, supplier copies, temporary data, backup considerations, exceptions, and deletion evidence.",
    contributes:
      "How long data should exist and what proves lifecycle completion.",
  },
  {
    lesson: "A16.6",
    title: "Privacy Risk Assessment Register",
    role:
      "Connects privacy concerns to people, business context, impact, likelihood, controls, evidence confidence, inherent risk, residual risk, and treatment.",
    contributes:
      "Why unresolved privacy issues matter and how they should be prioritized.",
  },
  {
    lesson: "A16.7",
    title: "Data Governance Responsibility Matrix",
    role:
      "Assigns accountable owners, approvers, advisors, control owners, evidence owners, remediation owners, and escalation.",
    contributes:
      "Who has authority and responsibility to make the privacy decision real.",
  },
  {
    lesson: "A16.8",
    title: "Privacy-by-Design Architecture Review",
    role:
      "Turns privacy requirements into collection boundaries, narrow interfaces, purpose separation, defaults, lifecycle automation, and evidence.",
    contributes:
      "How the system should change so privacy becomes part of architecture.",
  },
  {
    lesson: "A16.9",
    title: "Security-Privacy-Usability Decision Brief",
    role:
      "Compares realistic options across security, privacy, usability, accessibility, operations, business value, complexity, and residual risk.",
    contributes:
      "Why the selected design is a balanced decision rather than a one-dimensional answer.",
  },
];

const capstoneQuestions = [
  {
    area: "Purpose",
    question:
      "What legitimate business or service outcome requires the data practice?",
    evidence:
      "CTX-P records, product requirement, service objective, owner decision.",
  },
  {
    area: "Data",
    question:
      "What data exists, where does it move, and how sensitive or linkable is it?",
    evidence:
      "DATA records, lineage, classification rationale, system maps.",
  },
  {
    area: "Necessity",
    question:
      "Which fields, copies, precision, recipients, inferences, and retention periods are truly necessary?",
    evidence:
      "MIN records, workflow evidence, interface schemas, reporting needs.",
  },
  {
    area: "Expectations",
    question:
      "Does actual system behavior match reasonable user expectations and any meaningful choices?",
    evidence:
      "EXP records, current interface, product behavior, purpose mapping.",
  },
  {
    area: "Lifecycle",
    question:
      "What should happen when the purpose ends, and what proves the end action occurred?",
    evidence:
      "RET records, closeout evidence, deletion results, supplier lifecycle evidence.",
  },
  {
    area: "Privacy risk",
    question:
      "What adverse consequence could occur, how plausible is it, and what remains after controls?",
    evidence:
      "PRA records, controls, evidence confidence, residual-risk reasoning.",
  },
  {
    area: "Governance",
    question:
      "Who owns the business decision, control, evidence, remediation, and approval?",
    evidence:
      "GOV records, responsibility matrix, escalation thresholds.",
  },
  {
    area: "Architecture",
    question:
      "Can the system enforce minimization, purpose separation, access boundaries, retention, and evidence by design?",
    evidence:
      "PBD records, schemas, system layers, lifecycle design, change triggers.",
  },
  {
    area: "Tradeoff",
    question:
      "How does the recommended design affect security, privacy, usability, accessibility, operations, and business value?",
    evidence:
      "BAL records, synthetic usability findings, support burden, control evidence.",
  },
  {
    area: "Decision",
    question:
      "What should happen next, who owns it, by when, and what evidence will prove success?",
    evidence:
      "Integrated decision record, leadership recommendation, milestone and closure criteria.",
  },
];

const evidenceConflicts = [
  {
    conflict:
      "Product says extra partner fields improve future flexibility, while the current scheduling workflow uses only four.",
    strongResolution:
      "Use the current approved purpose and field-level evidence. Keep the interface at four fields until a new purpose is specifically reviewed and approved.",
    weakResolution:
      "Keep the extra fields because future flexibility sounds valuable.",
  },
  {
    conflict:
      "Security says the partner transfer is strongly encrypted, while privacy says the data scope is overbroad.",
    strongResolution:
      "Acknowledge the strong security control but treat unnecessary sharing as a separate privacy issue.",
    weakResolution:
      "Mark the privacy risk Low because encryption is strong.",
  },
  {
    conflict:
      "Analytics needs long-term trends, while individual-level retention creates unnecessary historical exposure.",
    strongResolution:
      "Keep long-term aggregates and use bounded individual-level retention for approved projects.",
    weakResolution:
      "Give aggregate and individual data the same retention period.",
  },
  {
    conflict:
      "A research workspace is scheduled for deletion, but closeout evidence has not arrived yet.",
    strongResolution:
      "Keep the decision Conditional until current deletion and reconciliation evidence is available.",
    weakResolution:
      "Mark Closed because deletion was planned.",
  },
  {
    conflict:
      "A support team wants complete case-note access for convenience, while most cases need only limited context.",
    strongResolution:
      "Keep narrow default access and use governed escalation for exceptional cases.",
    weakResolution:
      "Give every support role complete access to avoid escalation.",
  },
  {
    conflict:
      "An account-recovery design is difficult for legitimate users, but the team fears that any alternative will weaken security.",
    strongResolution:
      "Design an equivalent governed recovery path with strong evidence and clear escalation rather than removing controls or excluding users.",
    weakResolution:
      "Keep the brittle path because friction is assumed to equal security.",
  },
  {
    conflict:
      "An individual engagement indicator is technically possible, but the current approved purpose needs only aggregate trends.",
    strongResolution:
      "Avoid persistent individual inference unless a separate approved purpose demonstrates necessity.",
    weakResolution:
      "Keep the indicator because source data already exists.",
  },
  {
    conflict:
      "Internal deletion is complete, but supplier-side lifecycle evidence is partial.",
    strongResolution:
      "Keep the lifecycle and privacy risk open until the supplier copy is sufficiently evidenced.",
    weakResolution:
      "Close the issue because the internal system completed deletion.",
  },
];

const priorityFactors = [
  {
    factor: "Impact on people",
    high:
      "Sensitive exposure, unfair inference, loss of control, significant expectation mismatch.",
    lower:
      "Low-sensitivity aggregate information with strong controls.",
  },
  {
    factor: "Likelihood / exposure",
    high:
      "Broad access, many copies, active supplier sharing, recurring manual failure.",
    lower:
      "Narrow exposure with strong automated controls.",
  },
  {
    factor: "Evidence confidence",
    highPriorityWhen:
      "Important claims are supported only by stale, partial, or contradictory evidence.",
    lowerPriorityWhen:
      "Current evidence strongly supports the control state.",
  },
  {
    factor: "Business dependency",
    high:
      "Critical service depends on the risky data practice or supplier.",
    lower:
      "The practice can be removed or replaced with little business impact.",
  },
  {
    factor: "User impact",
    high:
      "The design blocks legitimate access, creates repeated failure, or materially changes expectations.",
    lower:
      "The change is invisible to users and has little service effect.",
  },
  {
    factor: "Time sensitivity",
    high:
      "A launch, supplier change, expiry, project closeout, or major release is imminent.",
    lower:
      "The decision is stable and no material change is pending.",
  },
  {
    factor: "Control gap",
    high:
      "No effective minimization, lifecycle, access, governance, or architecture control exists.",
    lower:
      "Strong controls operate and only minor residual risk remains.",
  },
  {
    factor: "Reversibility",
    highPriorityWhen:
      "Once data is broadly shared, retained, or inferred, the exposure is hard to reverse.",
    lowerPriorityWhen:
      "The design can be safely changed with little lasting effect.",
  },
];

const decisionStates = [
  {
    state: "Monitor",
    meaning:
      "Current residual privacy risk is acceptable under current evidence and controls.",
    requirement:
      "Review cadence and change triggers remain active.",
  },
  {
    state: "Treat",
    meaning:
      "A privacy, control, lifecycle, architecture, or evidence issue requires active remediation.",
    requirement:
      "Owner, milestone, treatment, and closure evidence are defined.",
  },
  {
    state: "Conditional",
    meaning:
      "The activity may continue only under defined conditions while evidence or limited work remains pending.",
    requirement:
      "Conditions, owner, expiry, and escalation are explicit.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "An authorized owner accepts a bounded residual privacy risk.",
    requirement:
      "Rationale, authority, duration, review trigger, and remaining controls are documented.",
  },
  {
    state: "Blocked",
    meaning:
      "The data practice should not proceed until a material condition is resolved.",
    requirement:
      "The blocker and evidence required to reopen the decision are explicit.",
  },
  {
    state: "Closed",
    meaning:
      "Objective evidence shows the privacy issue was removed or reduced to the approved target state.",
    requirement:
      "Closure evidence is current and covers the required scope.",
  },
];

const integratedRecords = [
  {
    id: "DEC-P01",
    title:
      "Remove unused support-profile fields",
    linked:
      "CTX-P01 / DATA-201 / MIN-301 / EXP-407 / PRA-601 / GOV-701 / PBD-801",
    decision:
      "Treat",
    priority:
      "P1",
    current:
      "Three fields in the base support profile have no demonstrated current service purpose.",
    people:
      "Students using the support portal",
    privacy:
      "Unnecessary collection increases exposure and future secondary-use risk.",
    security:
      "Normal security controls protect the fields but do not create necessity.",
    usability:
      "Removing the fields simplifies the form.",
    evidence:
      "Current form schema + workflow map + product requirements",
    confidence:
      "High",
    recommendation:
      "Remove the three fields from the base profile and reconcile downstream copies.",
    owner:
      "Student Services Product Owner",
    milestone:
      "Next scheduled profile release",
    closure:
      "Updated schema + production release evidence + downstream data reconciliation",
  },
  {
    id: "DEC-P02",
    title:
      "Maintain narrow support case-note access",
    linked:
      "DATA-202 / MIN-302 / EXP-405 / RET-502 / PRA-602 / GOV-702 / PBD-802 / BAL-905",
    decision:
      "Monitor",
    priority:
      "P2",
    current:
      "Sensitive support notes are necessary, but most support roles need only a limited view.",
    people:
      "Students represented in support records",
    privacy:
      "Broad access would increase contextual exposure.",
    security:
      "Current narrow role-based access is effective.",
    usability:
      "Exceptional cases require a small escalation step.",
    evidence:
      "Role review + support workflow + access evidence",
    confidence:
      "High",
    recommendation:
      "Keep narrow default access and governed escalation for exceptional cases.",
    owner:
      "Student Services Data Owner",
    milestone:
      "Quarterly access review",
    closure:
      "Not a closure target; reopen after material role, purpose, or supplier change",
  },
  {
    id: "DEC-P03",
    title:
      "Separate long-term aggregates from bounded individual analytics",
    linked:
      "DATA-203 / MIN-303 / EXP-403 / RET-503 / PRA-603 / GOV-703 / PBD-803 / BAL-903",
    decision:
      "Treat",
    priority:
      "P1",
    current:
      "Individual events and aggregate trends currently use overlapping retention patterns.",
    people:
      "Students represented in learning analytics",
    privacy:
      "Long individual-level retention creates unnecessary historical exposure.",
    security:
      "Restricted analytics access is strong.",
    usability:
      "Analysts need detailed events only during approved bounded projects.",
    evidence:
      "Analytics requirements + project register + report design + workspace inventory",
    confidence:
      "High",
    recommendation:
      "Use bounded individual-level project workspaces and preserve approved aggregate trends longer.",
    owner:
      "Learning Analytics Owner",
    milestone:
      "Before next analytics project cycle",
    closure:
      "Standardized workspace expiry + aggregation pipeline + retention evidence",
  },
  {
    id: "DEC-P04",
    title:
      "Block persistent individual engagement inference",
    linked:
      "DATA-204 / MIN-304 / PRA-604 / GOV-704 / PBD-804 / BAL-904",
    decision:
      "Blocked",
    priority:
      "P0",
    current:
      "The platform can persist individual engagement indicators although the approved goal only requires aggregate program trends.",
    people:
      "Students represented by analytics",
    privacy:
      "The derived indicator creates a more sensitive individual interpretation without demonstrated necessity.",
    security:
      "Restricted access does not solve unnecessary inference.",
    usability:
      "Aggregate reporting remains available without the individual indicator.",
    evidence:
      "Model definition + current reporting requirements + approved-purpose records",
    confidence:
      "High",
    recommendation:
      "Keep persistent individual inference disabled unless a separate bounded purpose is approved.",
    owner:
      "Learning Analytics Data Owner",
    milestone:
      "Immediate design control",
    closure:
      "Configuration evidence showing persistent individual output disabled by default",
  },
  {
    id: "DEC-P05",
    title:
      "Reduce partner scheduling scope and refresh lifecycle evidence",
    linked:
      "CTX-P03 / DATA-205 / MIN-305 / EXP-402 / RET-505 / PRA-605 / GOV-705 / PBD-805 / BAL-902",
    decision:
      "Treat",
    priority:
      "P0",
    current:
      "The scheduling partner receives eight fields while the current purpose supports four, and supplier-side deletion evidence is incomplete.",
    people:
      "Students using partner scheduling",
    privacy:
      "Overbroad sharing and incomplete external lifecycle evidence create moderate-high residual privacy risk.",
    security:
      "Encrypted transport and supplier security controls are current.",
    usability:
      "Reducing the payload does not materially change appointment scheduling.",
    evidence:
      "Interface schema + purpose map + supplier review + partial lifecycle evidence",
    confidence:
      "Moderate",
    recommendation:
      "Move to the four-field purpose-specific interface and refresh supplier-side retention/deletion evidence.",
    owner:
      "Integration Product Owner",
    milestone:
      "Before next partner integration release",
    closure:
      "New schema + validation evidence + current supplier lifecycle evidence",
  },
  {
    id: "DEC-P06",
    title:
      "Complete research workspace closeout",
    linked:
      "DATA-206 / MIN-306 / EXP-404 / RET-506 / PRA-606 / GOV-706 / PBD-806 / BAL-906",
    decision:
      "Conditional",
    priority:
      "P1",
    current:
      "The temporary research project has a bounded lifecycle, but deletion evidence becomes available only at closeout.",
    people:
      "Individuals represented in the de-identified research sample",
    privacy:
      "Post-project persistence would create unnecessary exposure.",
    security:
      "Restricted project access is strong while the project is active.",
    usability:
      "A short closeout window supports documentation without indefinite retention.",
    evidence:
      "Project approval + workspace register + configured expiry",
    confidence:
      "High until closeout; final lifecycle confidence pending",
    recommendation:
      "Keep the project Conditional until deletion, workspace reconciliation, and closeout evidence are complete.",
    owner:
      "Research Program Owner",
    milestone:
      "Project close + 14-day closeout",
    closure:
      "Deletion result + workspace reconciliation + closeout attestation",
  },
  {
    id: "DEC-P07",
    title:
      "Maintain aggregate-only support quality reporting",
    linked:
      "DATA-207 / MIN-307 / EXP-406 / RET-507 / PRA-607 / GOV-707 / PBD-807 / BAL-907",
    decision:
      "Monitor",
    priority:
      "P3",
    current:
      "Aggregate metrics support leadership staffing decisions and routine individual drill-down is disabled.",
    people:
      "Support-service users represented in aggregate data",
    privacy:
      "Residual privacy risk is low under strong aggregation.",
    security:
      "Dashboard access and source controls are appropriate.",
    usability:
      "Leaders can make required decisions from aggregate trends.",
    evidence:
      "Dashboard architecture + aggregation review + export controls",
    confidence:
      "High",
    recommendation:
      "Keep aggregate-only reporting and reopen review before any individual drill-down or source export.",
    owner:
      "Operations Analytics Owner",
    milestone:
      "Quarterly review",
    closure:
      "Not a closure target; continue Monitor with change triggers",
  },
  {
    id: "DEC-P08",
    title:
      "Redesign account recovery for secure accessibility",
    linked:
      "BAL-901",
    decision:
      "Treat",
    priority:
      "P1",
    current:
      "Recovery is resistant to simple misuse but depends heavily on one communication channel and creates repeated legitimate-user failure.",
    people:
      "Users needing account recovery",
    privacy:
      "A proposal to collect broad identity data would create unnecessary new collection.",
    security:
      "Recovery remains a high-impact action requiring strong evidence.",
    usability:
      "Current legitimate-user failure and support burden are too high.",
    evidence:
      "Synthetic recovery testing + support workflow + architecture review",
    confidence:
      "Moderate",
    recommendation:
      "Add a governed alternative recovery path with strong evidence and escalation without broad new identity-data collection.",
    owner:
      "Identity Product Owner",
    milestone:
      "Next recovery redesign cycle",
    closure:
      "Test results showing improved legitimate completion with acceptable security and privacy outcomes",
  },
];

const dashboardMetrics = [
  {
    label: "Integrated decisions",
    value: "8",
    note: "Collection, access, analytics, inference, supplier, research, reporting, and recovery",
  },
  {
    label: "P0 / P1",
    value: "6",
    note: "Most decisions require active or near-term privacy engineering attention",
  },
  {
    label: "Treat / Blocked / Conditional",
    value: "6",
    note: "Six decisions remain active before the A16 review reaches its target state",
  },
  {
    label: "High confidence",
    value: "6",
    note: "Two decisions remain at Moderate or pending final evidence confidence",
  },
];

const logs = [
  "[08:05] DEC-P01 issue=UNUSED_FIELDS priority=P1 decision=TREAT owner=SUPPORT_PRODUCT",
  "[08:23] DEC-P02 issue=CASE_NOTE_ACCESS priority=P2 decision=MONITOR confidence=HIGH",
  "[08:41] DEC-P03 issue=ANALYTICS_RETENTION priority=P1 decision=TREAT",
  "[08:59] DEC-P04 issue=INDIVIDUAL_INFERENCE priority=P0 decision=BLOCKED",
  "[09:17] DEC-P05 issue=PARTNER_SCOPE priority=P0 decision=TREAT confidence=MODERATE",
  "[09:35] DEC-P06 issue=RESEARCH_CLOSEOUT priority=P1 decision=CONDITIONAL",
  "[09:53] DEC-P07 issue=AGGREGATE_REPORTING priority=P3 decision=MONITOR",
  "[10:11] DEC-P08 issue=ACCOUNT_RECOVERY priority=P1 decision=TREAT confidence=MODERATE",
];

const leadershipSections = [
  {
    section: "Executive Summary",
    include:
      "The most important privacy engineering decisions, why they matter, and what leadership needs to know now.",
  },
  {
    section: "Data and Purpose Overview",
    include:
      "Critical data categories, purposes, suppliers, sensitive inferences, and material lifecycle states.",
  },
  {
    section: "Top Privacy Risks",
    include:
      "P0/P1 risks, evidence confidence, current controls, residual risk, and business impact.",
  },
  {
    section: "Architecture Decisions",
    include:
      "The major privacy-by-design changes that reduce risk structurally.",
  },
  {
    section: "User and Usability Impact",
    include:
      "Where privacy and security controls affect user expectations, accessibility, support, or legitimate task completion.",
  },
  {
    section: "Governance and Ownership",
    include:
      "Accountable owners, approvals, unresolved handoffs, control/evidence owners, and escalation.",
  },
  {
    section: "Lifecycle and Supplier Dependencies",
    include:
      "Retention, deletion, temporary workspaces, supplier copies, and evidence gaps.",
  },
  {
    section: "Recommendation",
    include:
      "What should happen first, what can remain monitored, what is blocked, what evidence closes the issues, and when leadership should review again.",
  },
];

const antiPatterns = [
  {
    title: "Nine artifacts with no integration",
    problem:
      "The portfolio contains many tables but no explanation of how one decision affects another.",
    better:
      "Link every important decision across context, data, minimization, expectations, lifecycle, risk, governance, architecture, and tradeoffs.",
  },
  {
    title: "One score decides priority",
    problem:
      "A numeric privacy score overrides evidence confidence, business dependency, reversibility, or urgency.",
    better:
      "Use multiple priority factors and explain the reasoning.",
  },
  {
    title: "Strong security erases privacy risk",
    problem:
      "Encryption or access controls are used to dismiss overcollection, unnecessary sharing, or long retention.",
    better:
      "Credit strong security while treating purpose and privacy issues separately.",
  },
  {
    title: "Planned remediation equals closure",
    problem:
      "A future fix or ticket is treated as proof that residual risk is already lower.",
    better:
      "Keep the issue open until objective closure evidence exists.",
  },
  {
    title: "Low evidence treated as reassurance",
    problem:
      "Unknown supplier or lifecycle evidence is interpreted as low risk.",
    better:
      "Keep uncertainty visible and maintain Conditional or Treat states when evidence is incomplete.",
  },
  {
    title: "Leadership brief is a technical dump",
    problem:
      "The final recommendation lists schemas, IDs, and control details without explaining business consequence.",
    better:
      "Summarize the decision, consequence, options, residual risk, owner, and next action.",
  },
  {
    title: "Ownership disappears at the end",
    problem:
      "The final report recommends actions but does not name who is accountable.",
    better:
      "Every material recommendation needs an owner, milestone, escalation path, and closure evidence.",
  },
  {
    title: "Monitoring has no trigger",
    problem:
      "A Monitor decision becomes passive and never reopens after material change.",
    better:
      "Define event-driven review triggers for new data, purpose, supplier, retention, inference, access, or user impact.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep DEC-P05 at P0/Treat, reduce the partner payload to the four approved fields, and require current supplier lifecycle evidence before lowering residual risk.",
    outcome:
      "Best. This resolves both purpose overreach and evidence uncertainty while preserving the legitimate scheduling service.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Lower DEC-P05 to Monitor because encrypted transport is strong.",
    outcome:
      "Risky. Security is strong, but overbroad sharing and supplier lifecycle uncertainty remain.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Close DEC-P05 because the supplier is already approved.",
    outcome:
      "Risky. Existing supplier approval does not prove the current data scope or lifecycle is appropriate.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep DEC-P06 Conditional until current deletion, workspace reconciliation, and closeout evidence confirm that the temporary research lifecycle completed.",
    outcome:
      "Best. The decision preserves evidence discipline and avoids false closure.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark DEC-P06 Closed when the project end date arrives.",
    outcome:
      "Risky. Time passing does not prove deletion or reconciliation occurred.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the research data indefinitely because the project was approved.",
    outcome:
      "Risky. Project approval is not indefinite retention authority.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of the A16 Privacy Engineering Lab?",
    choices: [
      "Integrate context, inventory, minimization, expectations, lifecycle, privacy risk, governance, architecture, and tradeoff evidence into one coherent decision package.",
      "Create another independent data inventory.",
      "Replace privacy governance with security controls.",
      "Produce one privacy score for the whole organization.",
    ],
    answer: 0,
    explanation:
      "The capstone is about integrated privacy engineering decisions, not isolated artifacts.",
  },
  {
    question:
      "What is strongest when security evidence is strong but the data scope is unnecessary?",
    choices: [
      "Credit the strong security control while treating the unnecessary data scope as a separate privacy issue.",
      "Close the privacy issue because encryption is strong.",
      "Ignore minimization.",
      "Collect more data because it is protected.",
    ],
    answer: 0,
    explanation:
      "Security controls do not create purpose or necessity.",
  },
  {
    question:
      "What should happen when supplier deletion evidence is incomplete?",
    choices: [
      "Keep the relevant decision open or Conditional until the required external lifecycle evidence is current.",
      "Mark Closed because internal deletion is complete.",
      "Assume the contract proves deletion occurred.",
      "Ignore supplier copies.",
    ],
    answer: 0,
    explanation:
      "Supplier-held copies remain part of the privacy lifecycle scope.",
  },
  {
    question:
      "What is strongest for prioritizing privacy work?",
    choices: [
      "Use impact, likelihood, evidence confidence, business dependency, control gaps, user impact, urgency, and reversibility together.",
      "Use one numeric score only.",
      "Always prioritize the newest issue.",
      "Always prioritize the easiest fix.",
    ],
    answer: 0,
    explanation:
      "Privacy priorities need multidimensional reasoning.",
  },
  {
    question:
      "What is strongest for a Closed privacy decision?",
    choices: [
      "Current objective evidence demonstrates that the issue was removed or reduced to the approved target state.",
      "A ticket was created.",
      "A team plans to fix it.",
      "Leadership stopped asking about it.",
    ],
    answer: 0,
    explanation:
      "Closure should be evidence-based.",
  },
  {
    question:
      "What should a leadership privacy recommendation emphasize?",
    choices: [
      "Business consequence, decision needed, evidence confidence, realistic options, residual risk, owner, timing, and next action.",
      "Every technical implementation detail.",
      "Only the privacy score.",
      "Only the data classification.",
    ],
    answer: 0,
    explanation:
      "Leadership needs decision-ready information, not a technical dump.",
  },
  {
    question:
      "What is strongest for a Monitor decision?",
    choices: [
      "Keep clear review cadence and material-change triggers so the decision reopens when conditions change.",
      "Stop collecting evidence.",
      "Remove the owner.",
      "Treat Monitor as permanently Closed.",
    ],
    answer: 0,
    explanation:
      "Monitoring is an active governance state, not the absence of governance.",
  },
];

const checklistItems = [
  "All nine earlier A16 artifacts are linked into the capstone.",
  "Every major privacy decision has a stable DEC-P ID.",
  "Business purpose is explicit.",
  "Affected people or groups are identified.",
  "Relevant DATA and context records are linked.",
  "Minimization findings are linked.",
  "User-expectation findings are linked.",
  "Retention and deletion findings are linked.",
  "Privacy risk findings are linked.",
  "Governance ownership is linked.",
  "Privacy-by-design architecture is linked.",
  "Security-privacy-usability tradeoffs are linked.",
  "Impact and likelihood are reasoned separately.",
  "Evidence confidence is visible.",
  "Strong security controls do not erase purpose issues.",
  "Supplier dependencies are visible.",
  "Temporary data and lifecycle evidence are visible.",
  "Priority is explained.",
  "Accountable owner is named.",
  "Milestone or review date is defined.",
  "Escalation criteria are defined.",
  "Closure evidence is defined.",
  "Material-change triggers are defined.",
  "Leadership recommendation is concise and decision-ready.",
  "All scenarios and evidence remain fictional or synthetic.",
];

const takeaways = [
  "Privacy engineering is strongest when context, data, purpose, lifecycle, risk, governance, architecture, and user impact are analyzed together.",
  "Strong security controls can reduce security risk without resolving unnecessary collection, sharing, inference, or retention.",
  "Evidence confidence should affect the strength of the decision.",
  "Supplier and temporary-data lifecycle uncertainty should remain visible until current evidence exists.",
  "Priority should consider people impact, likelihood, evidence, business dependency, control gaps, urgency, and reversibility.",
  "Architecture can turn privacy principles into enforceable system behavior.",
  "Governance assigns authority, ownership, evidence, remediation, and escalation.",
  "Balanced design preserves security, privacy, accessibility, usability, operations, and legitimate business value.",
  "Closure requires evidence; monitoring requires triggers.",
  "The completed Privacy Engineering Review is the final A16 portfolio artifact.",
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
        Module A16
      </Link>

      <Link
        href={moduleTest}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        A16 Module Test
      </Link>
    </div>
  );
}

export default function PrivacyEngineeringLabPage() {
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
              A16.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy Engineering Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This capstone integrates the entire A16 module. You will combine
            privacy context, data inventory, minimization, user expectations,
            retention, privacy risk, governance, architecture, and balanced
            design evidence into one leadership-ready Privacy Engineering
            Review.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All organizations, users, systems, suppliers, risk records,
            interfaces, metrics, and evidence are fictional or synthetic. This
            lab is defensive and educational.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A16: Privacy Engineering and Data Governance"
          lessonTitle="Privacy Engineering Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.10 Capstone Readiness"
          items={[
            "I can explain the business purpose behind each major fictional data practice.",
            "I can trace data through inventory, minimization, expectations, retention, risk, governance, architecture, and tradeoff decisions.",
            "I can distinguish evidence, uncertainty, ownership, treatment, and closure.",
            "I will use only fictional or synthetic records and evidence.",
          ]}
        />

        <Section
          eyebrow="Capstone Mission"
          title="Turn Nine Artifacts Into One Coherent Privacy Engineering Review"
        >
          <p className="leading-8">
            The goal is not to create more disconnected tables. The goal is to
            show how evidence from one area changes the decision in another. A
            field that appears in the inventory may become a minimization issue.
            That minimization issue may change the user experience, retention,
            privacy risk, architecture, governance, and leadership
            recommendation.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A strong privacy engineer connects evidence across the system instead of reviewing each artifact in isolation.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capstone Capabilities"
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
          eyebrow="Portfolio Integration"
          title="The Nine Artifacts You Are Bringing Into the Lab"
        >
          <div className="grid gap-5">
            {portfolioArtifacts.map((item) => (
              <article
                key={item.lesson}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.lesson}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{item.role}</p>
                <p className="mt-3 leading-7 text-emerald-100">
                  Capstone contribution: {item.contributes}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone Questions"
          title="Ten Questions Every Integrated Review Should Answer"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {capstoneQuestions.map((item, index) => (
              <article
                key={item.area}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-blue-50">{item.area}</h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {item.question}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Evidence: {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Conflicts"
          title="Eight Conflicts a Privacy Engineer Must Resolve"
        >
          <p className="leading-8">
            Integrated reviews become valuable when evidence points in different
            directions. The right response is not to hide disagreement. It is to
            explain which evidence is stronger, where uncertainty remains, and
            what decision best protects the legitimate service.
          </p>

          <div className="mt-6 grid gap-5">
            {evidenceConflicts.map((item, index) => (
              <article
                key={item.conflict}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-black leading-7 text-purple-50">
                      {item.conflict}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Strong resolution: {item.strongResolution}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-100">
                      Weak resolution: {item.weakResolution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Prioritization"
          title="Priority Is More Than a Risk Score"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {priorityFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.factor}</h3>
                {"high" in item && (
                  <p className="mt-2 text-sm leading-7 text-yellow-100">
                    Higher concern: {item.high}
                  </p>
                )}
                {"lower" in item && (
                  <p className="mt-2 text-sm leading-7 text-white">
                    Lower concern: {item.lower}
                  </p>
                )}
                {"highPriorityWhen" in item && (
                  <p className="mt-2 text-sm leading-7 text-yellow-100">
                    Higher priority when: {item.highPriorityWhen}
                  </p>
                )}
                {"lowerPriorityWhen" in item && (
                  <p className="mt-2 text-sm leading-7 text-white">
                    Lower priority when: {item.lowerPriorityWhen}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision States"
          title="Use States That Reflect the Actual Governance Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Governance requirement: {item.requirement}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Integrated Decision Board"
          title="Eight Northbridge Privacy Engineering Decisions"
        >
          <div className="grid gap-5">
            {integratedRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.decision}
                  </span>
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">
                    {item.priority}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-mono text-xs leading-6 text-purple-200">
                  Linked evidence: {item.linked}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Current condition", item.current],
                    ["People / context", item.people],
                    ["Privacy effect", item.privacy],
                    ["Security effect", item.security],
                    ["Usability / service effect", item.usability],
                    ["Evidence", item.evidence],
                    ["Evidence confidence", item.confidence],
                    ["Recommendation", item.recommendation],
                    ["Accountable owner", item.owner],
                    ["Milestone / review", item.milestone],
                    ["Closure / next evidence", item.closure],
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
          title="Northbridge Privacy Engineering Capstone Dashboard"
          subtitle="Fictional integrated priority, decision state, ownership, and evidence-confidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Scheduling Is a P0 Integrated Privacy Decision"
          severity="High"
          time="09:17"
          source="Fictional Privacy Engineering Capstone"
          details="DEC-P05 combines overbroad partner sharing with incomplete supplier-side lifecycle evidence. Strong encrypted transport reduces security exposure, but it does not resolve purpose limitation or prove external deletion."
          recommendation="Keep DEC-P05 in Treat. Move to the four-field interface and obtain current supplier lifecycle evidence before lowering residual privacy risk."
        />

        <FakeLogPanel
          title="Fictional Integrated Privacy Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Scheduling Capstone Decision"
          question="What is the strongest integrated decision for DEC-P05?"
          evidence={[
            "The validated scheduling purpose requires four fields.",
            "The current interface sends eight fields.",
            "Encrypted transport is current.",
            "The supplier is approved.",
            "Supplier-side deletion evidence is incomplete.",
            "Reducing the payload does not materially harm the scheduling task.",
          ]}
          options={[
            "Keep the decision P0/Treat, reduce the payload to four fields, and require current supplier lifecycle evidence before lowering residual risk.",
            "Move the decision to Monitor because encryption is strong.",
            "Close the decision because the supplier is approved.",
            "Keep all eight fields to preserve future flexibility.",
          ]}
          bestAnswer={0}
          explanation="The integrated decision must consider purpose, privacy, supplier lifecycle evidence, security, usability, and residual risk together."
        />

        <Section
          eyebrow="Leadership Recommendation"
          title="Turn the Capstone Into a Decision-Ready Executive Brief"
        >
          <p className="leading-8">
            Leadership does not need every row of every artifact. Leaders need a
            concise explanation of what matters, what is uncertain, what should
            happen, what the options cost, who owns the work, and what residual
            risk remains.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {leadershipSections.map((item, index) => (
              <article
                key={item.section}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-cyan-50">
                      {item.section}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-cyan-100">
                      {item.include}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Recommended A16 Leadership View"
          title="What Northbridge Leadership Should See First"
        >
          <div className="grid gap-5">
            <article className="rounded-3xl border border-red-400/20 bg-red-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Immediate
              </p>
              <h3 className="mt-2 text-xl font-black text-red-50">
                DEC-P04 and DEC-P05
              </h3>
              <p className="mt-3 leading-7 text-red-100">
                Keep persistent individual engagement inference blocked. Reduce
                the scheduling partner payload to four approved fields and
                refresh supplier lifecycle evidence.
              </p>
            </article>

            <article className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Near-term treatment
              </p>
              <h3 className="mt-2 text-xl font-black text-yellow-50">
                DEC-P01, DEC-P03, DEC-P06, and DEC-P08
              </h3>
              <p className="mt-3 leading-7 text-yellow-100">
                Remove unused support fields, standardize bounded analytics
                retention, complete temporary research closeout evidence, and
                redesign account recovery for secure accessibility.
              </p>
            </article>

            <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Continue monitoring
              </p>
              <h3 className="mt-2 text-xl font-black text-emerald-50">
                DEC-P02 and DEC-P07
              </h3>
              <p className="mt-3 leading-7 text-emerald-100">
                Maintain narrow support-note access and aggregate-only quality
                reporting. Reopen review after material role, purpose, supplier,
                drill-down, export, or access changes.
              </p>
            </article>
          </div>
        </Section>

        <Section
          eyebrow="Common Capstone Mistakes"
          title="Eight Ways Integrated Privacy Reviews Lose Their Value"
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
          title="Scenario Decision Lab 1 — Partner Data, Security, and Lifecycle"
          scenario="The partner integration is strongly encrypted and the supplier is approved, but the interface sends four unnecessary fields and external deletion evidence is incomplete."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Research Closeout Evidence"
          scenario="A six-week research project reaches its planned end date. The workspace is configured for deletion, but current deletion and reconciliation evidence has not been produced yet."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Capstone Build"
          title="Build the Final Privacy Engineering Review"
        >
          <p className="leading-8">
            Your final A16 artifact should be a coherent decision package rather
            than a folder of separate worksheets. Use cross-references so a
            reviewer can trace each major decision back to the evidence that
            supports it.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create an Executive Summary no longer than one page.",
              "Include a Privacy Engineering Context section.",
              "Include a Data Inventory and Classification section.",
              "Include a Data Minimization section.",
              "Include a Consent and User Expectations section.",
              "Include a Retention and Deletion section.",
              "Include a Privacy Risk section.",
              "Include a Data Governance Roles section.",
              "Include a Privacy-by-Design Architecture section.",
              "Include a Security-Privacy-Usability Tradeoff section.",
              "Create at least fifteen integrated DEC-P records.",
              "Give every DEC-P record a stable ID.",
              "Link every DEC-P record to relevant earlier A16 artifact IDs.",
              "State the business purpose.",
              "Identify affected people or user groups.",
              "Record the current data practice.",
              "Record the privacy concern.",
              "Record the security effect.",
              "Record the usability or accessibility effect.",
              "Record the lifecycle effect.",
              "Record supplier dependency where relevant.",
              "Record current controls.",
              "Record evidence sources.",
              "Rate evidence confidence.",
              "Record inherent privacy risk where useful.",
              "Record residual privacy risk.",
              "Set a decision state.",
              "Set a priority.",
              "Explain the priority rationale.",
              "Compare realistic treatment options.",
              "Choose a recommendation.",
              "Name the accountable owner.",
              "Name key control, evidence, and remediation owners where relevant.",
              "Set a milestone or review date.",
              "Define escalation criteria.",
              "Define closure evidence.",
              "Define material-change triggers.",
              "Include at least two Blocked decisions.",
              "Include at least five Treat decisions.",
              "Include at least three Monitor decisions.",
              "Include at least two Conditional decisions.",
              "Include at least one bounded Accepted Risk decision.",
              "Include at least one Closed decision with objective closure evidence.",
              "Include at least three supplier-related decisions.",
              "Include at least three retention or deletion decisions.",
              "Include at least three inference or analytics decisions.",
              "Include at least three user-expectation or accessibility decisions.",
              "Include at least three architecture redesign decisions.",
              "Include at least three decisions where strong security exists but privacy treatment is still needed.",
              "Include at least three decisions with Moderate or Low evidence confidence.",
              "Create a leadership priority table.",
              "Create a 30-day action view.",
              "Create a 90-day action view.",
              "Create a monitoring and change-trigger view.",
              "End with one leadership recommendation stating what should happen first and why.",
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
            <p className="font-black">Capstone safety boundary</p>
            <p className="mt-2 leading-7">
              Use fictional or synthetic users, records, systems, suppliers,
              logs, architecture, metrics, risks, and evidence only. Do not
              inspect real people, private accounts, confidential datasets,
              internal systems, supplier environments, or restricted
              organizational records.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Research Closeout"
          question="What is the strongest current decision for DEC-P06?"
          evidence={[
            "The project end date has arrived.",
            "The workspace has an approved deletion configuration.",
            "The project purpose has ended.",
            "Current deletion-job evidence has not yet been reviewed.",
            "Workspace reconciliation evidence is still pending.",
          ]}
          options={[
            "Keep the decision Conditional until current deletion and reconciliation evidence confirm lifecycle completion.",
            "Mark Closed because the project date ended.",
            "Keep the data indefinitely because the original project was approved.",
            "Delete the governance record because the project is over.",
          ]}
          bestAnswer={0}
          explanation="Lifecycle intent is not the same as lifecycle evidence. The record should remain Conditional until the required scope is confirmed."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Build a 30-Day, 90-Day, and Monitoring Roadmap"
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">First 30 days</h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                Address P0 decisions, blocked inference, overbroad partner
                sharing, imminent closeouts, and urgent ownership or evidence
                gaps.
              </p>
            </article>

            <article className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
              <h3 className="font-black text-yellow-50">By 90 days</h3>
              <p className="mt-2 text-sm leading-7 text-yellow-100">
                Complete larger architecture changes, retention standardization,
                recovery redesign, evidence automation, and governance cleanup.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Ongoing monitoring</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Track aggregate reporting, support access, supplier change,
                lifecycle exceptions, new inference, product change, and
                evidence freshness.
              </p>
            </article>
          </div>

          <p className="mt-6 leading-8">
            The roadmap should explain why each action belongs in its time
            horizon. Urgency should come from impact, uncertainty, dependency,
            reversibility, and change—not from arbitrary deadlines.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.10 Capstone Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.10 Mini Quiz: Privacy Engineering Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final Portfolio Build — Privacy Engineering Review"
          prompt="Complete the final A16 Privacy Engineering Review. Integrate your A16.1–A16.9 artifacts into one leadership-ready package with an Executive Summary, linked DEC-P decisions, privacy priorities, evidence confidence, owners, milestones, escalation, closure evidence, 30-day actions, 90-day actions, monitoring triggers, and one final leadership recommendation."
          tips={[
            "Cross-link evidence instead of duplicating every artifact.",
            "Keep uncertainty visible.",
            "Separate strong security controls from unresolved privacy-purpose issues.",
            "Use decision-ready language for leadership.",
            "Make ownership and closure evidence explicit.",
            "Use fictional or synthetic evidence only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Module Readiness Reflection"
          title="Are You Ready for the A16 Module Test?"
        >
          <p className="leading-8">
            Before taking the module test, make sure you can move from a single
            data field or product feature all the way through purpose,
            classification, minimization, expectations, lifecycle, privacy risk,
            governance, architecture, tradeoffs, and final leadership decision.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can trace one data practice across all major A16 artifacts.",
              "I can resolve conflicting privacy, security, usability, supplier, and evidence signals.",
              "I can prioritize privacy work without relying on one score.",
              "I can distinguish Monitor, Treat, Conditional, Accepted Risk, Blocked, and Closed.",
              "I can produce a leadership-ready privacy recommendation with owner, timing, residual risk, and closure evidence.",
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
          title="How to Make the Final Privacy Engineering Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use one decision layer",
                detail:
                  "DEC-P records should connect the evidence from all earlier A16 artifacts into clear final decisions.",
              },
              {
                title: "Keep technical detail traceable",
                detail:
                  "Leadership should see the decision while reviewers can still trace the supporting DATA, MIN, EXP, RET, PRA, GOV, PBD, and BAL evidence.",
              },
              {
                title: "Show evidence confidence",
                detail:
                  "A recommendation supported by partial supplier or lifecycle evidence should say so.",
              },
              {
                title: "Show priority reasoning",
                detail:
                  "Explain urgency using impact, likelihood, dependency, reversibility, user effect, control gaps, and evidence.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every material action should have an accountable owner and clear escalation authority.",
              },
              {
                title: "Show closure criteria",
                detail:
                  "Do not close on promises, plans, or tickets. State the evidence that proves the target state.",
              },
              {
                title: "Show the roadmap",
                detail:
                  "Separate immediate, 90-day, and ongoing monitoring work.",
              },
              {
                title: "End with a decision",
                detail:
                  "The final page should tell leadership what should happen first, why, and what residual risk remains.",
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
            Lab Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            The entire A16 capstone remains fictional, synthetic, defensive, and school-appropriate
          </h2>
          <p className="mt-3 leading-7">
            Do not inspect real people, private accounts, sensitive personal
            information, confidential datasets, internal systems, real supplier
            environments, or restricted organizational records. Do not attempt
            to identify, re-identify, profile, track, or infer sensitive traits
            about real individuals. Use synthetic evidence only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            A16 Lesson Sequence Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.10 Privacy Engineering Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have now completed all ten A16 lessons and assembled the final
            Privacy Engineering Review. The next page is the A16 module test.
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