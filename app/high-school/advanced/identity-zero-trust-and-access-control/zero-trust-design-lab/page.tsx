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
const modulePath = `${trackPath}/identity-zero-trust-and-access-control`;
const previousLesson = `${modulePath}/balancing-security-and-usability`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate identity perimeter, zero-trust, federation, conditional-access, authorization-model, privileged-access, monitoring, governance, and usability evidence into one coherent architecture review.",
  "Evaluate fictional identity-to-resource relationships using purpose, ownership, privilege, environment, lifecycle, trust assumptions, policy outcomes, monitoring coverage, and evidence freshness.",
  "Resolve conflicting or incomplete evidence without turning Unknown, Conditional, or Blocked findings into false confidence.",
  "Produce release criteria, remediation priorities, residual-risk decisions, and an architecture recommendation grounded in defensible evidence.",
  "Complete an Enterprise Identity and Zero-Trust Review that serves as the final A13 portfolio artifact.",
];

const architectureDomains = [
  {
    domain: "Identity perimeter",
    artifact: "A13.1 Identity Perimeter Map",
    reviewFocus:
      "Human, privileged, workload, external, temporary, and legacy identities; identity-to-resource paths; ownership and lifecycle.",
    keyQuestion:
      "Can every important access path identify who or what is acting, why access exists, what resource is reached, and who owns the relationship?",
  },
  {
    domain: "Zero-trust principles",
    artifact: "A13.2 Zero Trust Principles Assessment",
    reviewFocus:
      "Explicit verification, least privilege, bounded trust, resource-specific authorization, continuous evaluation, and exceptions.",
    keyQuestion:
      "Where does the architecture still depend on assumed trust instead of explicit, reviewable access decisions?",
  },
  {
    domain: "Federation and SSO",
    artifact: "A13.3 Federation Trust Register",
    reviewFocus:
      "Identity providers, relying services, external federation, SSO scope, identity context, and trust lifecycle.",
    keyQuestion:
      "Does federation centralize authentication without accidentally broadening authorization?",
  },
  {
    domain: "Conditional access",
    artifact: "A13.4 Conditional Access Decision Matrix",
    reviewFocus:
      "Identity, resource, privilege, environment, device/session context, evidence health, policy outcomes, and precedence.",
    keyQuestion:
      "Can the policy explain why each sensitive request is allowed, denied, stepped up, limited, or reviewed?",
  },
  {
    domain: "RBAC / ABAC",
    artifact: "A13.5 Access Model Comparison",
    reviewFocus:
      "Roles, attributes, hybrid models, role explosion, attribute quality, maintainability, and reviewability.",
    keyQuestion:
      "Is each access model understandable enough to govern while still precise enough to enforce least privilege?",
  },
  {
    domain: "Privileged access",
    artifact: "A13.6 Privileged Access Governance Register",
    reviewFocus:
      "Eligibility, approval, JIT activation, duration, administrative evidence, emergency access, and post-use review.",
    keyQuestion:
      "Is high-impact privilege temporary, attributable, bounded, observable, and lifecycle-managed?",
  },
  {
    domain: "Identity monitoring",
    artifact: "A13.7 Identity Monitoring Coverage Matrix",
    reviewFocus:
      "Authentication, authorization, privilege, workload, federation, lifecycle, policy changes, source health, and alert ownership.",
    keyQuestion:
      "Can the organization see the identity decisions it relies on and distinguish healthy silence from missing evidence?",
  },
  {
    domain: "Access governance",
    artifact: "A13.8 Access Review Decision Register",
    reviewFocus:
      "Purpose, entitlement, lifecycle, ownership, activity evidence, exceptions, residual risk, remediation, and closure.",
    keyQuestion:
      "Should each identity-to-resource relationship still exist now?",
  },
  {
    domain: "Security and usability",
    artifact: "A13.9 Security and Usability Tradeoff Review",
    reviewFocus:
      "Proportional controls, useful friction, accessibility, supportability, recoverability, false positives, and resilience.",
    keyQuestion:
      "Is the secure path realistic enough that legitimate users and operators can follow it reliably?",
  },
];

const assessmentStates = [
  {
    state: "Confirmed",
    meaning:
      "Current, consistent evidence supports the architecture claim and no unresolved material condition changes the conclusion.",
  },
  {
    state: "Conditional",
    meaning:
      "The control can remain in use while a known, bounded condition is tracked to review or closure.",
  },
  {
    state: "Unknown",
    meaning:
      "Evidence is insufficient, stale, conflicting, or unavailable, so a confident conclusion cannot be made.",
  },
  {
    state: "Blocked",
    meaning:
      "A material access, ownership, lifecycle, or control problem must be resolved before approval.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "A known residual risk has been explicitly approved by an authorized owner for a bounded period and scope.",
  },
  {
    state: "Not Applicable",
    meaning:
      "The control or evidence domain does not apply to the reviewed architecture, with a documented reason.",
  },
];

const designScenario = [
  {
    system: "Student Services Portal",
    purpose:
      "Supports counselor workflows for student services.",
    identities:
      "Counselor workforce identities + Student Portal workload identity.",
    resources:
      "Portal, Student Support Database, Generated Report Storage.",
    privilege:
      "Standard counselor role; application workload permissions.",
    federation:
      "Workforce SSO for counselors.",
    accessModel:
      "RBAC for counselor duties; workload identity with resource-specific policy.",
    monitoring:
      "Authentication, portal authorization, workload authentication, database access.",
    status:
      "Confirmed",
  },
  {
    system: "Cloud Management Plane",
    purpose:
      "Supports approved infrastructure administration.",
    identities:
      "Platform Engineers with privileged eligibility.",
    resources:
      "Production management plane.",
    privilege:
      "JIT platform administration.",
    federation:
      "Workforce federation establishes identity before privilege activation.",
    accessModel:
      "Hybrid: stable admin eligibility + contextual activation.",
    monitoring:
      "Eligibility, activation, management audit, deactivation, post-use review.",
    status:
      "Conditional",
  },
  {
    system: "Scheduling Integration",
    purpose:
      "Supports external partner scheduling operations.",
    identities:
      "Scheduling Partner Support identities.",
    resources:
      "Scheduling Integration Console.",
    privilege:
      "Limited support role.",
    federation:
      "External federation from approved partner identity provider.",
    accessModel:
      "Hybrid: external support role + sponsor/review attributes.",
    monitoring:
      "Federation health, external sign-in, application authorization, review date.",
    status:
      "Conditional",
  },
  {
    system: "Reporting Platform",
    purpose:
      "Supports approved analytics and reporting.",
    identities:
      "Reporting Analysts + legacy reporting account.",
    resources:
      "Reporting Dashboard, Sensitive Export, Generated Report Storage.",
    privilege:
      "Standard reporting + sensitive export under stronger policy.",
    federation:
      "Workforce SSO for analysts; legacy local identity remains outside federation.",
    accessModel:
      "Hybrid for analysts; legacy local permission set for historical job.",
    monitoring:
      "Reporting authn/authz, export decision, device-context source, partial legacy audit.",
    status:
      "Blocked",
  },
  {
    system: "Migration Console",
    purpose:
      "Historical project-based migration administration.",
    identities:
      "Former Migration Project Administrator.",
    resources:
      "Migration Console.",
    privilege:
      "Project-bound privileged eligibility.",
    federation:
      "Temporary project identity relationship.",
    accessModel:
      "Hybrid project role + expiration attribute.",
    monitoring:
      "Project closure, privileged eligibility, activation history.",
    status:
      "Blocked",
  },
  {
    system: "Recovery Administration",
    purpose:
      "Provides critical emergency administrative capability.",
    identities:
      "Emergency Recovery Operator.",
    resources:
      "Recovery-critical services.",
    privilege:
      "Emergency administrative access.",
    federation:
      "Emergency path exists for identity-service disruption.",
    accessModel:
      "Exceptional privileged access with strong governance.",
    monitoring:
      "Emergency activation, admin audit, incident timeline, post-use review.",
    status:
      "Conditional",
  },
];

const evidenceRecords = [
  {
    id: "ZTARCH-01",
    domain: "Identity Perimeter",
    claim:
      "Counselor workforce identities are named, current, and scoped to the Student Services Portal.",
    evidence:
      "Current workforce role + portal authorization + application owner confirmation.",
    freshness: "Current",
    owner: "Student Services Application Owner",
    state: "Confirmed",
    implication:
      "Routine counselor access is supported without unnecessary privileged-style friction.",
  },
  {
    id: "ZTARCH-02",
    domain: "Workload Identity",
    claim:
      "Student Portal workload identity accesses only approved production data resources.",
    evidence:
      "Workload binding + production environment scope + database authorization telemetry.",
    freshness: "Current",
    owner: "Application Team + Data Platform",
    state: "Confirmed",
    implication:
      "Network location is not used as the sole trust basis.",
  },
  {
    id: "ZTARCH-03",
    domain: "Privileged Access",
    claim:
      "Platform administration uses JIT privilege instead of standing production administration.",
    evidence:
      "Eligibility + activation + 60-minute duration + management audit.",
    freshness: "Current",
    owner: "Platform Engineering",
    state: "Confirmed",
    implication:
      "High-impact privilege is bounded to approved tasks.",
  },
  {
    id: "ZTARCH-04",
    domain: "Privileged Review",
    claim:
      "Every privileged session has complete post-use review evidence.",
    evidence:
      "Most sessions complete; one emergency session has Partial post-use review.",
    freshness: "Current",
    owner: "Security + Resilience",
    state: "Conditional",
    implication:
      "Emergency privileged architecture remains usable, but governance closure is incomplete.",
  },
  {
    id: "ZTARCH-05",
    domain: "External Federation",
    claim:
      "Partner support federation has current sponsorship and narrow application scope.",
    evidence:
      "Current sponsor + limited support role + federation logs; review due in 30 days.",
    freshness: "Current",
    owner: "Integration Owner",
    state: "Conditional",
    implication:
      "External access is legitimate but requires timely recertification.",
  },
  {
    id: "ZTARCH-06",
    domain: "Environment Separation",
    claim:
      "Staging workloads cannot access production student data.",
    evidence:
      "Environment-aware authorization + explicit staging-to-production denial.",
    freshness: "Current",
    owner: "Analytics + Data Platform",
    state: "Confirmed",
    implication:
      "Environment is part of identity scope and authorization.",
  },
  {
    id: "ZTARCH-07",
    domain: "Conditional Access",
    claim:
      "Sensitive report exports have reliable contextual evidence and fallback behavior.",
    evidence:
      "Workforce identity current; device-context source stale; fallback not fully defined.",
    freshness: "Stale / Partial",
    owner: "Analytics Product Owner + Identity Platform",
    state: "Unknown",
    implication:
      "The design needs a governed fallback before the sensitive-export control can be considered fully reliable.",
  },
  {
    id: "ZTARCH-08",
    domain: "Legacy Identity",
    claim:
      "Legacy Reporting Account has accountable ownership and current authorization evidence.",
    evidence:
      "Owner Unknown + historical permission set + Partial monitoring + no current exception.",
    freshness: "Partial",
    owner: "Unknown",
    state: "Blocked",
    implication:
      "Production release cannot treat the legacy reporting path as governed.",
  },
  {
    id: "ZTARCH-09",
    domain: "Access Governance",
    claim:
      "Project-bound privileged eligibility is removed when projects end.",
    evidence:
      "Migration project closed, but former administrator remains eligible.",
    freshness: "Current",
    owner: "Migration Project Owner",
    state: "Blocked",
    implication:
      "Lifecycle governance is not yet fully enforced.",
  },
  {
    id: "ZTARCH-10",
    domain: "Monitoring",
    claim:
      "Identity monitoring covers authentication and authorization for modern access paths.",
    evidence:
      "Current workforce, workload, federation, and privileged telemetry.",
    freshness: "Current",
    owner: "Identity Monitoring Owner",
    state: "Confirmed",
    implication:
      "Modern identity paths have reviewable decision evidence.",
  },
  {
    id: "ZTARCH-11",
    domain: "Security and Usability",
    claim:
      "Privileged controls add friction only where resource sensitivity justifies it.",
    evidence:
      "Routine workforce access low friction; privileged production activation uses targeted step-up.",
    freshness: "Current",
    owner: "Identity Security Architecture",
    state: "Confirmed",
    implication:
      "The design uses proportional rather than maximum friction.",
  },
  {
    id: "ZTARCH-12",
    domain: "Recovery",
    claim:
      "Emergency access is available without becoming a routine bypass.",
    evidence:
      "Emergency-only eligibility + incident approval + audit + mandatory post-use review.",
    freshness: "Current",
    owner: "Resilience + Security",
    state: "Conditional",
    implication:
      "Architecture is resilient, but the incomplete prior review must close.",
  },
];

const conflicts = [
  {
    id: "CONFLICT-01",
    topic: "Legacy Reporting Account",
    evidenceA:
      "Operational team says the account is still needed because scheduled reports continue to run.",
    evidenceB:
      "Identity governance shows Unknown owner, stale entitlement metadata, Partial monitoring, and no current exception.",
    decision:
      "Do not convert operational usefulness into Confirmed governance. Keep Blocked until purpose and ownership are established and the path is redesigned or retired.",
  },
  {
    id: "CONFLICT-02",
    topic: "Sensitive Export Policy",
    evidenceA:
      "Conditional-access policy requires current device context for sensitive export.",
    evidenceB:
      "Device-context source is stale and the fallback path is not fully defined.",
    decision:
      "Keep the control Unknown/Conditional and design a governed fallback; do not silently allow or permanently deny.",
  },
  {
    id: "CONFLICT-03",
    topic: "Migration Privileged Eligibility",
    evidenceA:
      "Historical approval shows the administrator was legitimately eligible during the project.",
    evidenceB:
      "Project closure evidence shows the responsibility ended.",
    decision:
      "Current lifecycle evidence overrides historical need. Remove the obsolete eligibility.",
  },
  {
    id: "CONFLICT-04",
    topic: "Emergency Administrative Access",
    evidenceA:
      "Recovery evidence shows emergency access was legitimately used and service recovery succeeded.",
    evidenceB:
      "Mandatory post-use review remains incomplete.",
    decision:
      "Keep emergency capability but classify the evidence Conditional until review closure is complete.",
  },
];

const releaseCriteria = [
  {
    criterion: "Identity ownership",
    required:
      "Every production identity and material access path has a current owner or sponsor.",
    current:
      "Not met — legacy reporting ownership unresolved.",
    state: "Blocked",
  },
  {
    criterion: "Privilege lifecycle",
    required:
      "Obsolete privileged eligibility is removed and current privilege is time-bounded.",
    current:
      "Not met — former migration admin eligibility still assigned.",
    state: "Blocked",
  },
  {
    criterion: "Sensitive policy evidence",
    required:
      "Sensitive export control has current context evidence or a governed fallback.",
    current:
      "Partially met — device-context source is stale and fallback incomplete.",
    state: "Conditional",
  },
  {
    criterion: "External identity lifecycle",
    required:
      "Partner access has current sponsor, narrow scope, and scheduled review.",
    current:
      "Met with upcoming review due in 30 days.",
    state: "Conditional",
  },
  {
    criterion: "Privileged evidence",
    required:
      "Privileged activation, activity, deactivation, and required post-use review are complete.",
    current:
      "Mostly met — one emergency post-use review remains incomplete.",
    state: "Conditional",
  },
  {
    criterion: "Monitoring coverage",
    required:
      "Modern identity paths produce current authentication, authorization, privilege, lifecycle, and source-health evidence.",
    current:
      "Met for modern paths; legacy path remains a separate Blocked finding.",
    state: "Confirmed",
  },
  {
    criterion: "Environment separation",
    required:
      "Lower-environment identities do not automatically reach production resources.",
    current:
      "Met — staging-to-production access is explicitly denied.",
    state: "Confirmed",
  },
  {
    criterion: "Usability and resilience",
    required:
      "Controls are proportionate, supportable, accessible, and recoverable without broad bypass.",
    current:
      "Partially met — sensitive-export fallback requires redesign.",
    state: "Conditional",
  },
];

const remediation = [
  {
    id: "REM-01",
    finding: "Unowned Legacy Reporting Account",
    priority: "Blocker",
    action:
      "Identify accountable business/service owner, confirm current need, map resource scope, modernize into a named workload identity or retire the path.",
    owner: "Reporting Service Owner — currently unresolved",
    closure:
      "No production legacy identity remains without current ownership and reviewable authorization.",
    status: "Open",
  },
  {
    id: "REM-02",
    finding: "Obsolete Migration Admin Eligibility",
    priority: "Blocker",
    action:
      "Remove privileged eligibility because the approved migration project has ended.",
    owner: "Migration Project Owner",
    closure:
      "Eligibility feed confirms the former administrator can no longer request the project admin role.",
    status: "Open",
  },
  {
    id: "REM-03",
    finding: "Sensitive Export Evidence Gap",
    priority: "High",
    action:
      "Restore device-context source health and define a governed fallback for approved sensitive exports during evidence-source disruption.",
    owner: "Analytics Product Owner + Identity Platform",
    closure:
      "Current context evidence or tested fallback supports a predictable policy outcome.",
    status: "Open",
  },
  {
    id: "REM-04",
    finding: "Emergency Post-Use Review Incomplete",
    priority: "High",
    action:
      "Complete review comparing approved recovery purpose with observed administrative activity.",
    owner: "Security + Resilience",
    closure:
      "Review is signed off and all unexplained activity is resolved.",
    status: "Open",
  },
  {
    id: "REM-05",
    finding: "Partner Federation Review Due",
    priority: "Medium",
    action:
      "Sponsor confirms continued business need, narrow access scope, and next expiration/review date.",
    owner: "Integration Owner / Partner Sponsor",
    closure:
      "Federation relationship is renewed, reduced, or expired before the current review deadline.",
    status: "Open",
  },
  {
    id: "REM-06",
    finding: "Identity Architecture Evidence Baseline",
    priority: "Medium",
    action:
      "Package current identity, policy, monitoring, privileged, and governance evidence into a versioned architecture review baseline.",
    owner: "Identity Security Architecture",
    closure:
      "Decision board can trace every major architecture conclusion to current evidence.",
    status: "Planned",
  },
];

const decisionBoard = [
  {
    area: "Workforce access",
    recommendation: "Approve",
    rationale:
      "Named identities, federation, application roles, lifecycle, and monitoring are current.",
  },
  {
    area: "Workload identity",
    recommendation: "Approve",
    rationale:
      "Production workload has explicit identity, resource scope, environment alignment, and authorization evidence.",
  },
  {
    area: "Privileged administration",
    recommendation: "Approve with conditions",
    rationale:
      "JIT model is strong, but the emergency post-use review must close.",
  },
  {
    area: "Partner federation",
    recommendation: "Approve with conditions",
    rationale:
      "Scope and sponsor are current, but scheduled review is approaching.",
  },
  {
    area: "Sensitive export",
    recommendation: "Hold for redesign",
    rationale:
      "Required context evidence is stale and fallback behavior is incomplete.",
  },
  {
    area: "Legacy reporting identity",
    recommendation: "Block",
    rationale:
      "Unknown owner, stale lifecycle, Partial monitoring, and ungoverned local access.",
  },
  {
    area: "Migration privileged eligibility",
    recommendation: "Block until removed",
    rationale:
      "Project ended, so current eligibility has no valid business purpose.",
  },
  {
    area: "Overall identity architecture",
    recommendation: "HOLD",
    rationale:
      "Core architecture is strong, but two Blocked findings prevent a full approval decision.",
  },
];

const dashboardMetrics = [
  {
    label: "Architecture domains",
    value: "9",
    note: "A13.1 through A13.9 integrated into one review",
  },
  {
    label: "Evidence records",
    value: "12",
    note: "Identity, workload, privilege, federation, conditional access, governance, monitoring, recovery, and usability",
  },
  {
    label: "Blockers",
    value: "2",
    note: "Legacy reporting identity and obsolete migration privilege",
  },
  {
    label: "Final recommendation",
    value: "HOLD",
    note: "Core architecture is viable but blocker closure is required before full approval",
  },
];

const logs = [
  "[08:00] ZTARCH-01 workforce-perimeter state=CONFIRMED owner=STUDENT_SERVICES",
  "[08:12] ZTARCH-02 workload-identity state=CONFIRMED env=PROD scope=APP_ONLY",
  "[08:24] ZTARCH-03 privileged-jit state=CONFIRMED standing_privilege=NONE",
  "[08:36] ZTARCH-04 emergency-review state=CONDITIONAL post_review=PARTIAL",
  "[08:48] ZTARCH-05 partner-federation state=CONDITIONAL review_due=30d",
  "[09:00] ZTARCH-06 environment-separation state=CONFIRMED prod_crossing=DENIED",
  "[09:12] ZTARCH-07 sensitive-export state=UNKNOWN device_source=STALE",
  "[09:24] ZTARCH-08 legacy-reporting state=BLOCKED owner=UNKNOWN",
  "[09:36] ZTARCH-09 migration-eligibility state=BLOCKED project=CLOSED",
  "[09:48] ZTARCH-10 monitoring-coverage state=CONFIRMED modern_paths=CURRENT",
  "[10:00] ZTARCH-11 security-usability state=CONFIRMED friction=PROPORTIONATE",
  "[10:12] ZTARCH-12 recovery-access state=CONDITIONAL review=INCOMPLETE",
  "[10:24] ARCH-DECISION blockers=2 conditions=3 recommendation=HOLD",
];

const antiPatterns = [
  {
    title: "Green dashboard overrides Blocked evidence",
    problem:
      "Most controls look healthy, so reviewers ignore a small number of high-impact unresolved findings.",
    better:
      "Use release criteria that prevent material blockers from disappearing inside aggregate scores.",
  },
  {
    title: "Authentication evidence treated as full access evidence",
    problem:
      "A successful sign-in is used to prove the application authorization is correct.",
    better:
      "Keep authentication, authorization, privilege, and resource evidence distinct.",
  },
  {
    title: "Historical approval treated as current approval",
    problem:
      "A project role remains because it was once legitimate.",
    better:
      "Use current lifecycle evidence to decide whether access should still exist now.",
  },
  {
    title: "Operational need excuses unowned identity",
    problem:
      "A legacy account remains because something depends on it, even though nobody owns the risk.",
    better:
      "Resolve ownership and modernize or formally govern the dependency.",
  },
  {
    title: "Unknown context silently becomes allow",
    problem:
      "A stale evidence source is treated as if its last value were still current.",
    better:
      "Use a visible fallback and preserve Unknown until evidence is restored.",
  },
  {
    title: "Emergency access gets weaker governance",
    problem:
      "Recovery pressure causes teams to skip review and evidence requirements.",
    better:
      "Keep emergency capability available but require strong post-use review.",
  },
  {
    title: "Security usability is ignored at architecture review",
    problem:
      "A control is approved because it is restrictive even though users cannot reliably follow it.",
    better:
      "Evaluate friction, accessibility, supportability, recoverability, and resilience.",
  },
  {
    title: "Remediation has no closure criteria",
    problem:
      "Findings remain open for months because nobody can define what complete means.",
    better:
      "Assign owner, priority, target action, and evidence-based closure criteria.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Issue an overall HOLD recommendation because the unowned legacy identity and obsolete privileged eligibility are material blockers even though most modern identity controls are strong.",
    outcome:
      "Best. Architecture approval should reflect blocker severity, not just the percentage of green controls.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve because ten of twelve evidence records are not Blocked.",
    outcome:
      "Risky. Aggregate counts can hide high-impact unresolved access paths.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Reject the entire identity architecture permanently.",
    outcome:
      "Overly broad. The modern design is strong; targeted remediation can resolve the blockers.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep sensitive-export access in Review/Unknown until current context evidence or a governed fallback supports a predictable decision.",
    outcome:
      "Best. The architecture preserves both security intent and operational resilience.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat the last known device state as current indefinitely.",
    outcome:
      "Risky. Stale evidence cannot support a current zero-trust decision.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove the export feature permanently because one telemetry source failed.",
    outcome:
      "Caution. A resilient design should define a governed fallback rather than permanent disruption.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest final recommendation when an identity architecture has strong modern controls but still contains two material Blocked findings?",
    choices: [
      "Approve because most controls are green.",
      "HOLD until the blockers are resolved or explicitly governed through an authorized decision.",
      "Reject all identity architecture permanently.",
      "Ignore the blockers if they are old.",
    ],
    answer: 1,
    explanation:
      "Material Blocked findings should prevent full approval until they are resolved or formally addressed.",
  },
  {
    question:
      "Why should a legacy account remain Blocked when it still performs useful work but has Unknown ownership?",
    choices: [
      "Because operational usefulness does not replace accountable ownership, lifecycle, scope, and evidence.",
      "Because all legacy systems must be deleted immediately.",
      "Because service accounts can never be legitimate.",
      "Because monitoring is unnecessary for old systems.",
    ],
    answer: 0,
    explanation:
      "A current business dependency still needs accountable identity governance.",
  },
  {
    question:
      "A project admin role was legitimate during a migration, but the project is closed. What evidence matters most now?",
    choices: [
      "Historical approval only.",
      "Current lifecycle evidence showing the responsibility ended.",
      "Whether the administrator remembers the password.",
      "Whether the role has a familiar name.",
    ],
    answer: 1,
    explanation:
      "Current lifecycle evidence determines whether the privileged relationship should still exist.",
  },
  {
    question:
      "What is the strongest response to stale device context used by a sensitive access policy?",
    choices: [
      "Treat stale evidence as current.",
      "Use a defined governed fallback or keep the decision Unknown/Conditional until evidence is restored.",
      "Disable all monitoring.",
      "Allow every request.",
    ],
    answer: 1,
    explanation:
      "Zero-trust decisions should fail visibly when required evidence becomes stale.",
  },
  {
    question:
      "Why should emergency administrative access remain available?",
    choices: [
      "To support critical recovery when normal identity paths fail, while remaining exceptional, monitored, and reviewed.",
      "To provide an easier everyday admin path.",
      "To eliminate the need for privileged identity.",
      "To avoid post-use review.",
    ],
    answer: 0,
    explanation:
      "Resilience requires emergency capability, but governance must keep it from becoming routine standing access.",
  },
  {
    question:
      "What makes a remediation item professionally useful?",
    choices: [
      "A vague note that something should improve.",
      "A named finding, priority, action, accountable owner, and evidence-based closure criterion.",
      "No owner so anyone can close it.",
      "A permanent exception with no target state.",
    ],
    answer: 1,
    explanation:
      "Remediation should be specific enough that closure can be objectively verified.",
  },
  {
    question:
      "What should the final A13 architecture review integrate?",
    choices: [
      "Only authentication.",
      "Identity perimeter, zero trust, federation, conditional access, RBAC/ABAC, privileged access, monitoring, governance, and security/usability evidence.",
      "Only privileged access.",
      "Only SSO.",
    ],
    answer: 1,
    explanation:
      "A mature identity architecture review integrates the entire identity-to-resource lifecycle and evidence model.",
  },
];

const checklistItems = [
  "Every material identity type is represented.",
  "Every material identity-to-resource path has purpose and ownership.",
  "Authentication and authorization remain separate evidence domains.",
  "Federation trust does not automatically broaden application authorization.",
  "Conditional-access decisions have understandable outcomes and precedence.",
  "RBAC, ABAC, or hybrid models are chosen for maintainability and least privilege.",
  "Privileged eligibility is separate from active privilege.",
  "Standing privilege is minimized where practical.",
  "Emergency access is exceptional, monitored, and reviewed.",
  "Workload identities are named and scoped to approved resources.",
  "Environment boundaries prevent lower-environment identities from inheriting production access.",
  "Identity monitoring includes authentication and authorization.",
  "Source health is part of evidence confidence.",
  "Access reviews use current purpose, lifecycle, ownership, and activity evidence.",
  "External identities have sponsors and review/expiration.",
  "Legacy identities remain visible as findings.",
  "Security friction is proportionate to sensitivity and privilege.",
  "Recovery and fallback paths preserve security assurance.",
  "Blocked findings have named remediation and closure criteria.",
  "The final recommendation is based on evidence state rather than optimism.",
];

const takeaways = [
  "Identity architecture is a connected system of principals, resources, policy, lifecycle, privilege, evidence, and ownership.",
  "Zero trust does not mean deny everything; it means reduce assumptions and make access decisions explicit.",
  "Federation centralizes some identity trust while application authorization remains resource-specific.",
  "Conditional access should use relevant context and preserve Unknown when required evidence is stale.",
  "RBAC and ABAC are design tools, not competing products; hybrid models often separate stable responsibility from changing context.",
  "Privileged access should be temporary, attributable, bounded, monitored, and reviewed.",
  "Identity monitoring should cover both authentication and authorization and include source health.",
  "Access governance asks whether access should still exist now, not whether it was once legitimate.",
  "Usability, accessibility, recoverability, and supportability affect whether security controls work in practice.",
  "A professional architecture decision can be HOLD when targeted blockers prevent full approval even though the broader design is strong.",
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
        Module A13
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function ZeroTrustDesignLabPage() {
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
              A13.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Final Design Lab
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Zero Trust Design Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This final A13 lesson combines every identity architecture concept
            from the module into one fictional enterprise review. You will
            evaluate whether the design is ready, conditionally acceptable,
            blocked, or requires additional evidence.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All identities, policies, applications, logs, findings, and
            decisions are fictional. The lab is architecture and governance
            analysis only and does not involve real accounts, credentials,
            policy changes, or access testing.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A13: Identity, Zero Trust, and Access Control"
          lessonTitle="Zero Trust Design Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.10 Entry Readiness"
          items={[
            "I can map identities and identity-to-resource paths.",
            "I can explain zero trust, federation, conditional access, RBAC/ABAC, and privileged access.",
            "I can evaluate monitoring, access reviews, lifecycle, and usability evidence.",
            "I will use only fictional architecture records and safe synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Challenge"
          title="Can the Identity Architecture Be Approved?"
        >
          <p className="leading-8">
            Northbridge Learning Services is preparing a major identity
            architecture release. Most modern controls are well designed:
            workforce identities are federated, production workloads use named
            identities, privileged access is time-bounded, environment
            separation is enforced, and modern access paths are monitored.
          </p>

          <p className="mt-4 leading-8">
            The review also finds an unowned legacy reporting account, obsolete
            migration-admin eligibility, a stale context source affecting
            sensitive exports, an upcoming partner recertification, and one
            incomplete emergency post-use review. Your job is not to make the
            architecture look green. Your job is to decide what the evidence
            actually supports.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A professional review preserves good controls, isolates blockers, keeps uncertainty visible, and defines exactly what must happen next.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Final Lab"
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
          eyebrow="Integrated Architecture"
          title="Nine A13 Domains Become One Identity Review"
        >
          <div className="grid gap-5">
            {architectureDomains.map((item, index) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-black text-white">
                      {item.domain}
                    </h3>
                    <p className="mt-2 text-sm font-black text-purple-200">
                      {item.artifact}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.reviewFocus}
                    </p>

                    <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                        Key question
                      </p>
                      <p className="mt-2 text-sm leading-7 text-cyan-50">
                        {item.keyQuestion}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Assessment States"
          title="Do Not Hide Uncertainty Behind a Green Label"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {assessmentStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-lg font-black text-blue-50">
                  {item.state}
                </h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Scenario"
          title="Northbridge Identity Architecture Release Candidate"
        >
          <div className="grid gap-5">
            {designScenario.map((item) => (
              <article
                key={item.system}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.system}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Identities", item.identities],
                    ["Resources", item.resources],
                    ["Privilege", item.privilege],
                    ["Federation", item.federation],
                    ["Access model", item.accessModel],
                    ["Monitoring", item.monitoring],
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

        <Section
          eyebrow="Evidence Board"
          title="Twelve Cross-Domain Architecture Records"
        >
          <div className="grid gap-5">
            {evidenceRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.domain}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-black text-white">
                  {item.claim}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Freshness / owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.freshness} — {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Implication
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.implication}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Zero-Trust Architecture Dashboard"
          subtitle="Fictional integrated identity architecture review summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Two Identity Architecture Blockers Prevent Full Approval"
          severity="High"
          time="10:24"
          source="Fictional Identity Architecture Decision Board"
          details="The release candidate still contains an unowned legacy reporting identity and obsolete migration-admin eligibility. Both are material identity-governance failures despite strong modern controls elsewhere."
          recommendation="Issue HOLD, preserve validated controls, and close REM-01 and REM-02 before full approval."
        />

        <Section
          eyebrow="Conflicting Evidence"
          title="Architecture Review Means Reconciling Claims, Not Averaging Them"
        >
          <div className="grid gap-5">
            {conflicts.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 font-mono text-xs font-black text-yellow-100">
                    {item.id}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.topic}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Evidence A
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidenceA}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Evidence B
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.evidenceB}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Architecture decision
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.decision}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Integrated Architecture Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Release Decision"
          question="What is the strongest overall architecture recommendation?"
          evidence={[
            "Modern workforce, workload, federation, privileged, and monitoring controls are mostly strong.",
            "Legacy Reporting Account has Unknown owner and Partial evidence.",
            "Former Migration Project Administrator still has obsolete privileged eligibility.",
            "Sensitive Export policy has a stale context source and incomplete fallback.",
            "Partner federation review is due in 30 days.",
            "One emergency privileged session has incomplete post-use review.",
          ]}
          options={[
            "Approve because most controls are healthy.",
            "HOLD until the two Blocked findings are closed, while tracking the Conditional items through remediation.",
            "Reject the architecture permanently.",
            "Ignore legacy and temporary findings because they affect only a few identities.",
          ]}
          bestAnswer={1}
          explanation="The architecture has a strong foundation, but material Blocked identity paths prevent full approval. HOLD preserves the valid design while requiring targeted closure."
        />

        <Section
          eyebrow="Release Criteria"
          title="What Must Be True Before Full Approval?"
        >
          <div className="grid gap-5">
            {releaseCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.criterion}
                  </h3>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.state}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Required: {item.required}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Current: {item.current}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Remediation Register"
          title="Turn Findings Into Owned Closure Work"
        >
          <div className="grid gap-5">
            {remediation.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">
                    {item.priority}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.finding}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.action}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Closure
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.closure}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Board"
          title="Final Identity Architecture Recommendation"
        >
          <div className="grid gap-5">
            {decisionBoard.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-black text-blue-50">{item.area}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.recommendation}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.rationale}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
              Final Recommendation
            </p>
            <h3 className="mt-2 text-3xl font-black text-white">
              HOLD
            </h3>
            <p className="mt-3 leading-8 text-red-50">
              The identity architecture demonstrates strong modern controls,
              but full approval should wait until the unowned legacy reporting
              identity and obsolete migration privileged eligibility are closed.
              Conditional findings should remain tracked through defined
              remediation and evidence-based closure.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Architecture Anti-Patterns"
          title="Eight Ways an Integrated Review Can Lose Credibility"
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
          title="Scenario Decision Lab 1 — Strong Majority, Two Blockers"
          scenario="Most modern identity controls are healthy, but the release still contains an unowned legacy reporting identity and obsolete privileged eligibility from a closed project."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Sensitive Control During Evidence Failure"
          scenario="A sensitive export policy requires current device context, but the source is stale and the fallback process is incomplete."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Final Lab"
          title="Build the Enterprise Identity and Zero-Trust Review"
        >
          <p className="leading-8">
            Use fictional identities, services, policies, access records,
            monitoring evidence, owners, findings, and decisions only. This is
            a defensive architecture and governance exercise.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create an executive summary for the fictional architecture.",
              "List all major human, privileged, workload, external, temporary, and legacy identity types.",
              "Map at least fifteen identity-to-resource relationships.",
              "Show which relationships use federation and which do not.",
              "Show application/resource-specific authorization.",
              "Show conditional-access decisions for sensitive actions.",
              "Show RBAC, ABAC, and hybrid access-model decisions.",
              "Show privileged eligibility, activation, duration, and review.",
              "Show authentication and authorization monitoring coverage.",
              "Show source-health states for important telemetry.",
              "Show access-review decisions and lifecycle triggers.",
              "Show external sponsor and expiration conditions.",
              "Show workload identity ownership and environment scope.",
              "Show security/usability tradeoffs for at least five workflows.",
              "Create at least twelve integrated evidence records.",
              "Create at least four conflicting-evidence records.",
              "Define release criteria.",
              "Identify Blocked, Conditional, Unknown, Confirmed, and Accepted Risk states where appropriate.",
              "Create at least six remediation items.",
              "Assign priority and owner to each remediation item.",
              "Define evidence-based closure criteria.",
              "Create a final decision board.",
              "Issue an overall Approve, Approve with Conditions, HOLD, or Reject recommendation.",
              "Explain why the recommendation follows from the evidence.",
              "Create a one-page portfolio summary suitable for a school or internship portfolio.",
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
            <p className="font-black">Final lab boundary</p>
            <p className="mt-2 leading-7">
              Do not access real identity providers, user directories,
              privileged systems, logs, tokens, credentials, policies, or
              administrative consoles. Do not attempt authentication bypass,
              account enumeration, privilege escalation, session manipulation,
              or changes to live access controls.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting Identity"
          question="How should ZTARCH-08 affect the final architecture decision?"
          evidence={[
            "The account supports intermittent production reporting.",
            "Current owner is Unknown.",
            "The permission model is historical.",
            "Monitoring is Partial.",
            "No valid current exception exists.",
            "The path sits outside the preferred workload-identity architecture.",
          ]}
          options={[
            "Ignore the finding because the account still works.",
            "Keep it Blocked, make remediation a release blocker, and require ownership plus modernization or retirement before full approval.",
            "Mark it Accepted Risk without an owner.",
            "Convert it to permanent standing access.",
          ]}
          bestAnswer={1}
          explanation="The account is a material production identity path without accountable governance. Its operational usefulness does not erase the ownership and evidence gap."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Present the Architecture to a Fictional Review Board"
        >
          <p className="leading-8">
            Prepare a concise review-board briefing that explains the design
            without drowning the audience in every log record. Your briefing
            should make the decision traceable from architecture claims to
            evidence, blockers, conditions, remediation, and final recommendation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Architecture purpose",
              "Identity populations",
              "Trust boundaries",
              "Federation model",
              "Authorization model",
              "Conditional-access model",
              "Privileged-access model",
              "Monitoring model",
              "Access-governance model",
              "Usability/resilience model",
              "Top confirmed strengths",
              "Top conditional findings",
              "Top blockers",
              "Conflicting evidence",
              "Remediation plan",
              "Final recommendation",
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
            The board should be able to answer three questions after your
            briefing: What is safe enough to keep? What remains uncertain? What
            must close before the architecture can be approved?
          </p>
        </Section>

        <DefenderChecklist
          title="A13.10 Final Architecture Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.10 Mini Quiz: Zero Trust Design Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final Portfolio Build — Enterprise Identity and Zero-Trust Review"
          prompt="Create the final A13 portfolio artifact: an Enterprise Identity and Zero-Trust Review that integrates your A13.1–A13.9 work. Include executive summary, architecture scope, identity populations, trust relationships, federation, conditional access, RBAC/ABAC, privileged access, monitoring, access reviews, usability/resilience, integrated evidence records, conflicts, release criteria, remediation register, final decision board, and overall recommendation."
          tips={[
            "Use stable IDs so findings can be traced across artifacts.",
            "Preserve Confirmed, Conditional, Unknown, Blocked, Accepted Risk, and Not Applicable states.",
            "Do not average blockers into a green score.",
            "Tie every major conclusion to current evidence and ownership.",
            "Define closure criteria for every remediation item.",
            "Use fictional provider-neutral evidence only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A13 Module Test?"
        >
          <p className="leading-8">
            The module test will evaluate your understanding across all ten A13
            lessons. Before continuing, make sure you can reason from identity
            architecture evidence rather than memorizing individual terms.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can map identity-to-resource relationships and trust boundaries.",
              "I can explain zero trust, federation, conditional access, RBAC/ABAC, and privileged access together.",
              "I can evaluate monitoring, evidence freshness, and access governance.",
              "I can balance security strength with usability, recovery, and operational resilience.",
              "I can issue an architecture decision with blockers, conditions, remediation, and closure criteria.",
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
          title="How to Make the Final A13 Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the decision",
                detail:
                  "State the overall recommendation and the most important reasons before presenting every detail.",
              },
              {
                title: "Trace claims to evidence",
                detail:
                  "Use stable IDs so each architecture conclusion can be connected to current evidence.",
              },
              {
                title: "Separate blockers from conditions",
                detail:
                  "Do not present a due-soon review as equivalent to an unowned production identity.",
              },
              {
                title: "Keep Unknown visible",
                detail:
                  "Stale or conflicting evidence should remain visibly uncertain until resolved.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every access path, finding, exception, and remediation item should have an accountable owner.",
              },
              {
                title: "Use closure criteria",
                detail:
                  "Define what evidence proves each remediation item is actually complete.",
              },
              {
                title: "Preserve usable controls",
                detail:
                  "Do not redesign healthy identity paths simply because another part of the architecture has a blocker.",
              },
              {
                title: "Prepare for the module test",
                detail:
                  "Use this review as the study map for A13's identity, zero-trust, access-control, monitoring, and governance concepts.",
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
            The final design lab is defensive architecture analysis only
          </h2>
          <p className="mt-3 leading-7">
            Do not access real accounts, identity providers, privileged
            consoles, logs, credentials, tokens, policies, or production
            systems. Do not attempt authentication bypass, account enumeration,
            privilege escalation, session manipulation, or access-control
            changes. All evidence and architecture records are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.10 Zero Trust Design Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have now integrated all A13 identity, zero-trust, authorization,
            privileged-access, monitoring, governance, and usability concepts
            into one Enterprise Identity and Zero-Trust Review. The next step is
            the A13 Module Test.
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