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

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const previousLesson = `${modulePath}/cloud-security-review-case`;
const nextLesson = `${modulePath}/incident-response-tabletop-case`;

const objectives = [
  "Review fictional user, service, and privileged access using business purpose, role design, least privilege, approval evidence, review freshness, ownership, monitoring, and exception status.",
  "Distinguish unusual access from unjustified access so decisions are based on evidence rather than role names, privilege level, or assumptions about intent.",
  "Evaluate stale entitlements, conflicting owner records, overlapping roles, service identities, temporary exceptions, and missing review evidence using clear confidence and escalation rules.",
  "Choose defensible retain, modify, remove, escalate, or evidence-insufficient outcomes while preserving necessary business access and avoiding unnecessary privilege expansion.",
  "Build an Identity Access Review Decision Pack with evidence references, decisions, rationale, owners, review dates, exception status, monitoring needs, validation criteria, and leadership summary.",
];

const identityReviewConcepts = [
  {
    concept: "Business purpose",
    meaning:
      "Why the fictional user or service identity needs access to a resource or workflow.",
    review:
      "Access without a current purpose is difficult to defend even when it was once legitimate.",
  },
  {
    concept: "Least privilege",
    meaning:
      "The identity should have only the access needed for its approved responsibility.",
    review:
      "Ask whether narrower access would still support the required task.",
  },
  {
    concept: "Role design",
    meaning:
      "Permissions are grouped around responsibilities rather than assigned randomly.",
    review:
      "Check whether the role still matches the person's or service's current function.",
  },
  {
    concept: "Approval evidence",
    meaning:
      "A current record shows who approved the access, for what purpose, and under what conditions.",
    review:
      "Old approval may not prove current need after role, team, or service changes.",
  },
  {
    concept: "Access review freshness",
    meaning:
      "The most recent access review is current enough to support today's decision.",
    review:
      "Stale review evidence should lower confidence even if the technical access looks reasonable.",
  },
  {
    concept: "Ownership",
    meaning:
      "A current owner is accountable for the resource, role, service identity, or exception.",
    review:
      "Conflicting ownership can make approval and escalation unreliable.",
  },
  {
    concept: "Separation of duties",
    meaning:
      "Certain responsibilities may need distinct roles so one person does not control incompatible stages without oversight.",
    review:
      "Overlapping roles are not automatically wrong, but they require clear justification and governance.",
  },
  {
    concept: "Exception governance",
    meaning:
      "Temporary deviation from the normal access model is documented, approved, bounded, monitored, and time-limited.",
    review:
      "Expired or ownerless exceptions should not continue by inertia.",
  },
  {
    concept: "Service identity governance",
    meaning:
      "Non-human identities need purpose, owner, permissions, dependency context, review, and monitoring.",
    review:
      "Service identities should not become forgotten permanent privilege containers.",
  },
  {
    concept: "Monitoring evidence",
    meaning:
      "Access use and important changes produce enough evidence for review.",
    review:
      "Lack of visibility can change whether access should remain active or require compensating controls.",
  },
];

const decisionOutcomes = [
  {
    outcome: "Retain",
    use:
      "Access has a current business purpose, appropriate scope, current approval, current ownership, and no unresolved governance issue.",
    evidence:
      "Purpose, owner, role mapping, review date, approval, monitoring.",
  },
  {
    outcome: "Modify",
    use:
      "The identity still needs access, but the current role or scope is broader than necessary.",
    evidence:
      "Current responsibility, narrower role option, owner validation, impact of change.",
  },
  {
    outcome: "Remove",
    use:
      "The access no longer has a current approved purpose or clearly belongs to a former role or service dependency.",
    evidence:
      "Role change, service retirement, owner confirmation, no active exception.",
  },
  {
    outcome: "Escalate",
    use:
      "The access may be justified, but the decision requires higher authority, risk acceptance, or conflict resolution.",
    evidence:
      "Conflicting approvals, privileged overlap, exception request, unclear authority.",
  },
  {
    outcome: "Evidence Insufficient",
    use:
      "The case package does not yet establish enough current evidence to retain, modify, or remove access safely.",
    evidence:
      "Missing owner, stale approval, missing dependency, unresolved business purpose.",
  },
];

const identityTypes = [
  {
    type: "Standard user identity",
    purpose:
      "Supports ordinary fictional workforce tasks.",
    reviewFocus:
      "Current role, team, application need, least privilege, approval, and inactivity.",
  },
  {
    type: "Privileged user identity",
    purpose:
      "Supports bounded administrative or security responsibilities.",
    reviewFocus:
      "Elevated role purpose, separation of duties, approval authority, review cadence, and monitored use.",
  },
  {
    type: "Service identity",
    purpose:
      "Supports a fictional application or automation dependency.",
    reviewFocus:
      "Owner, workload purpose, permission scope, dependency, review date, rotation/revocation governance, and monitoring.",
  },
  {
    type: "Emergency access identity",
    purpose:
      "Supports exceptional continuity needs under explicit governance.",
    reviewFocus:
      "Tight scope, explicit authorization, monitoring, review after use, and no routine dependence.",
  },
  {
    type: "External collaborator identity",
    purpose:
      "Supports approved work with a fictional partner or contractor.",
    reviewFocus:
      "Sponsor, end date, resource scope, business purpose, inactivity, and removal trigger.",
  },
  {
    type: "Shared functional role",
    purpose:
      "Represents permission bundles assigned to eligible identities.",
    reviewFocus:
      "Role purpose, membership criteria, owner, conflicting permissions, and review freshness.",
  },
];

const northbridgeIdentityEvidence = [
  {
    id: "IAM-1801",
    identity: "USR-NB-14",
    type: "Standard user",
    observation:
      "User moved from Team Orion to Team Nova 42 days ago.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "One Team Orion reporting role is still assigned.",
  },
  {
    id: "IAM-1802",
    identity: "USR-NB-14",
    type: "Role assignment",
    observation:
      "ROLE-ORION-REPORT remains active and provides read-only access to fictional Orion dashboards.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Current Team Nova role description does not require Orion reporting access.",
  },
  {
    id: "IAM-1803",
    identity: "USR-NB-14",
    type: "Approval",
    observation:
      "Original approval for ROLE-ORION-REPORT is eight months old and references the user's former team.",
    freshness:
      "Stale",
    confidence:
      "High",
    concern:
      "Old approval does not prove current need.",
  },
  {
    id: "IAM-1804",
    identity: "ADM-NB-03",
    type: "Privileged user",
    observation:
      "Administrator holds both Cloud Platform Admin and Security Review Admin under exception EXC-I44.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Dual-role access is allowed only through the temporary exception.",
  },
  {
    id: "IAM-1805",
    identity: "EXC-I44",
    type: "Exception",
    observation:
      "Exception EXC-I44 expires in two days and includes enhanced review logging.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "A decision is needed before expiration; no automatic extension is allowed.",
  },
  {
    id: "IAM-1806",
    identity: "SVC-NB-22",
    type: "Service identity",
    observation:
      "Service identity supports APP-NB-22 and has read access to DATA-NB-8 plus queue-update permission.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Permissions match the documented workload purpose.",
  },
  {
    id: "IAM-1807",
    identity: "SVC-NB-22",
    type: "Ownership",
    observation:
      "Service identity owner is listed as Team Atlas in the current service registry.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Healthy ownership evidence.",
  },
  {
    id: "IAM-1808",
    identity: "SVC-NB-22",
    type: "Review",
    observation:
      "Last service identity access review was 15 months ago.",
    freshness:
      "Stale",
    confidence:
      "High",
    concern:
      "Technical scope appears reasonable, but governance evidence is stale.",
  },
  {
    id: "IAM-1809",
    identity: "EXT-NB-07",
    type: "External collaborator",
    observation:
      "External collaborator sponsor is Team Atlas; project end date was 19 days ago.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "No extension record is attached.",
  },
  {
    id: "IAM-1810",
    identity: "EXT-NB-07",
    type: "Activity",
    observation:
      "No fictional sign-in activity has been recorded since five days before the project end date.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Supports review of whether access should be removed.",
  },
  {
    id: "IAM-1811",
    identity: "USR-NB-31",
    type: "Standard user",
    observation:
      "User has ROLE-FIN-READ and ROLE-OPS-READ.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "The user's current role description mentions operations support but not finance reporting.",
  },
  {
    id: "IAM-1812",
    identity: "USR-NB-31",
    type: "Manager note",
    observation:
      "Manager note says finance access may still be required for monthly reconciliation support.",
    freshness:
      "Current",
    confidence:
      "Moderate",
    concern:
      "Purpose is plausible but not yet tied to a formal current approval.",
  },
  {
    id: "IAM-1813",
    identity: "ROLE-SEC-REVIEW",
    type: "Role definition",
    observation:
      "Security Review role permits read-only access to fictional audit and control evidence.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Role itself appears appropriately bounded.",
  },
  {
    id: "IAM-1814",
    identity: "ROLE-CLOUD-ADMIN",
    type: "Role definition",
    observation:
      "Cloud Platform Admin can modify fictional platform configuration.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Elevated impact requires strong approval and separation-of-duties review.",
  },
  {
    id: "IAM-1815",
    identity: "BRK-NB-01",
    type: "Emergency identity",
    observation:
      "Emergency access identity has not been used in 211 days.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Inactivity is expected; review should focus on readiness, authorization, and monitoring rather than deleting it solely for low use.",
  },
  {
    id: "IAM-1816",
    identity: "BRK-NB-01",
    type: "Governance",
    observation:
      "Quarterly emergency-access review completed 17 days ago with owner and approver signoff.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Healthy governance evidence.",
  },
  {
    id: "IAM-1817",
    identity: "USR-NB-42",
    type: "Ownership conflict",
    observation:
      "Application owner registry lists Team Quartz, while an older entitlement spreadsheet lists Team Delta as approver.",
    freshness:
      "Mixed",
    confidence:
      "High",
    concern:
      "Approval authority should be resolved before changing access.",
  },
  {
    id: "IAM-1818",
    identity: "USR-NB-42",
    type: "Usage evidence",
    observation:
      "The user accessed the fictional application twice in the last 30 days.",
    freshness:
      "Current",
    confidence:
      "High",
    concern:
      "Usage shows activity, not necessarily business justification.",
  },
];

const reviewDecisions = [
  {
    id: "DEC-1801",
    identity:
      "USR-NB-14 / ROLE-ORION-REPORT",
    evidence:
      "IAM-1801, IAM-1802, IAM-1803",
    decision:
      "Remove",
    rationale:
      "The user changed teams, the former-team role is not required by the current role description, and the only approval references the former job context.",
    confidence:
      "High",
    owner:
      "Application Access Owner",
    validation:
      "Confirm the role is no longer assigned and Team Nova access remains unaffected.",
  },
  {
    id: "DEC-1802",
    identity:
      "ADM-NB-03 dual privileged roles",
    evidence:
      "IAM-1804, IAM-1805",
    decision:
      "Escalate",
    rationale:
      "The access is currently approved but depends on a temporary exception that expires in two days.",
    confidence:
      "High",
    owner:
      "Identity Governance Owner",
    validation:
      "Record explicit close, renew, or redesign decision before expiration.",
  },
  {
    id: "DEC-1803",
    identity:
      "SVC-NB-22",
    evidence:
      "IAM-1806, IAM-1807, IAM-1808",
    decision:
      "Retain with Review",
    rationale:
      "The service identity has clear purpose and appropriate scope, but its formal access review is stale.",
    confidence:
      "Moderate to High",
    owner:
      "Team Atlas Service Owner",
    validation:
      "Complete a current review and confirm permissions still match APP-NB-22 dependencies.",
  },
  {
    id: "DEC-1804",
    identity:
      "EXT-NB-07",
    evidence:
      "IAM-1809, IAM-1810",
    decision:
      "Remove",
    rationale:
      "The sponsored project ended, no extension exists, and no recent activity supports ongoing need.",
    confidence:
      "High",
    owner:
      "External Access Sponsor",
    validation:
      "Confirm external membership is removed and no active project dependency remains.",
  },
  {
    id: "DEC-1805",
    identity:
      "USR-NB-31 / ROLE-FIN-READ",
    evidence:
      "IAM-1811, IAM-1812",
    decision:
      "Evidence Insufficient",
    rationale:
      "A current manager note suggests possible need, but formal purpose and approval evidence are incomplete.",
    confidence:
      "High",
    owner:
      "Finance Application Owner",
    validation:
      "Obtain current business justification and approval before retaining or removing.",
  },
  {
    id: "DEC-1806",
    identity:
      "BRK-NB-01",
    evidence:
      "IAM-1815, IAM-1816",
    decision:
      "Retain",
    rationale:
      "Low usage is expected for emergency access, and current quarterly governance evidence supports the design.",
    confidence:
      "High",
    owner:
      "Platform Resilience Owner",
    validation:
      "Continue scheduled review and monitoring without using routine activity as the success measure.",
  },
  {
    id: "DEC-1807",
    identity:
      "USR-NB-42",
    evidence:
      "IAM-1817, IAM-1818",
    decision:
      "Escalate",
    rationale:
      "Current access is being used, but the case contains conflicting owner and approver evidence.",
    confidence:
      "High",
    owner:
      "Identity Governance Owner",
    validation:
      "Resolve current application ownership and approval authority before changing access.",
  },
];

const evidenceInterpretation = [
  {
    evidence:
      "A privileged account has not been used recently.",
    weak:
      "Unused privileged access should always be deleted.",
    stronger:
      "Review business purpose, emergency function, owner, approval, monitoring, and readiness before deciding.",
  },
  {
    evidence:
      "A user signs in frequently.",
    weak:
      "Frequent use proves the access is necessary.",
    stronger:
      "Usage proves activity, not business justification; current purpose and approval still matter.",
  },
  {
    evidence:
      "A role was approved last year.",
    weak:
      "The role is still justified.",
    stronger:
      "Old approval shows historical legitimacy but may not support current need after role or service changes.",
  },
  {
    evidence:
      "A service identity has broad-looking permissions.",
    weak:
      "The identity is definitely overprivileged.",
    stronger:
      "Compare permission scope with workload dependencies, owner, review date, and whether narrower access would still work.",
  },
  {
    evidence:
      "Two roles overlap.",
    weak:
      "The combination is automatically prohibited.",
    stronger:
      "Review separation-of-duties intent, exception status, business need, monitoring, and approval.",
  },
  {
    evidence:
      "An external collaborator's project ended.",
    weak:
      "The account itself must be suspicious.",
    stronger:
      "The access likely needs removal unless a current sponsor and extension justify continued need.",
  },
];

const staleAccessPatterns = [
  {
    pattern: "Former-team role remains",
    signal:
      "Identity changed jobs or teams but one prior role remains active.",
    risk:
      "Access may outlive its original business purpose.",
    response:
      "Validate current need and remove or modify if the old role no longer applies.",
  },
  {
    pattern: "Project access after end date",
    signal:
      "External or temporary access remains after the approved work ended.",
    risk:
      "Time-bounded access may become indefinite.",
    response:
      "Require current sponsor and extension or remove access.",
  },
  {
    pattern: "Service identity review overdue",
    signal:
      "Workload identity still functions, but governance review is stale.",
    risk:
      "Permissions may drift unnoticed as dependencies change.",
    response:
      "Revalidate purpose, scope, owner, dependency, and monitoring.",
  },
  {
    pattern: "Role owner changed",
    signal:
      "Current resource owner differs from older approval records.",
    risk:
      "Review decisions may rely on outdated authority.",
    response:
      "Resolve current ownership before making material access changes.",
  },
  {
    pattern: "Exception near expiration",
    signal:
      "Temporary privileged overlap remains active close to its end date.",
    risk:
      "The exception may continue without a deliberate decision.",
    response:
      "Close, renew, or redesign before expiration.",
  },
  {
    pattern: "Usage without purpose",
    signal:
      "The identity actively uses access but the business justification is missing.",
    risk:
      "Activity can normalize access that no longer has approved purpose.",
    response:
      "Obtain current purpose and approval instead of using usage alone as justification.",
  },
];

const prioritizationFactors = [
  {
    factor: "Privilege level",
    question:
      "How much authority could the identity exercise within the fictional environment?",
  },
  {
    factor: "Data sensitivity",
    question:
      "Does the access reach internal, restricted, financial, or sensitive evidence?",
  },
  {
    factor: "Business criticality",
    question:
      "Would incorrect removal or retention disrupt an important service or process?",
  },
  {
    factor: "Evidence freshness",
    question:
      "Are purpose, owner, approval, and review records current?",
  },
  {
    factor: "Exception status",
    question:
      "Is access operating under a temporary approved deviation, and when does it expire?",
  },
  {
    factor: "Separation of duties",
    question:
      "Could the role combination weaken independent review or approval?",
  },
  {
    factor: "Monitoring quality",
    question:
      "Would important use or change activity be visible to reviewers?",
  },
  {
    factor: "Reversibility",
    question:
      "Can the access be modified or restored safely if the decision changes?",
  },
];

const decisionPackFields = [
  {
    field: "Decision ID",
    purpose:
      "Stable reference for the access review decision.",
    example:
      "DEC-1805",
  },
  {
    field: "Identity",
    purpose:
      "Names the fictional user, service identity, role, or external collaborator.",
    example:
      "USR-NB-31",
  },
  {
    field: "Access / role",
    purpose:
      "Defines the permission or role being reviewed.",
    example:
      "ROLE-FIN-READ",
  },
  {
    field: "Business purpose",
    purpose:
      "States the current reason the access may be needed.",
    example:
      "Monthly reconciliation support",
  },
  {
    field: "Evidence references",
    purpose:
      "Links the decision to specific IAM records.",
    example:
      "IAM-1811, IAM-1812",
  },
  {
    field: "Owner / approver",
    purpose:
      "Names the current accountable fictional roles.",
    example:
      "Finance Application Owner",
  },
  {
    field: "Review freshness",
    purpose:
      "Shows whether approval and access-review evidence are current.",
    example:
      "Approval missing; manager note current",
  },
  {
    field: "Exception",
    purpose:
      "Records whether temporary deviation affects the decision.",
    example:
      "None",
  },
  {
    field: "Decision",
    purpose:
      "Records Retain, Modify, Remove, Escalate, or Evidence Insufficient.",
    example:
      "Evidence Insufficient",
  },
  {
    field: "Rationale",
    purpose:
      "Explains why the evidence supports the chosen outcome.",
    example:
      "Possible need exists but current formal approval is missing",
  },
  {
    field: "Monitoring need",
    purpose:
      "Defines any extra review or evidence needed while the decision remains open.",
    example:
      "Track unresolved access review until owner decision",
  },
  {
    field: "Validation",
    purpose:
      "Defines what confirms the decision was implemented correctly.",
    example:
      "Current approval recorded or role removed with no required workflow impact",
  },
];

const dashboardMetrics = [
  {
    label: "Identity evidence records",
    value: "18",
    note: "Users, roles, service identities, exceptions, approvals, ownership, and activity",
  },
  {
    label: "Review decisions",
    value: "7",
    note: "Retain, remove, escalate, retain-with-review, and evidence-insufficient outcomes",
  },
  {
    label: "Stale governance records",
    value: "3",
    note: "Former-team approval, service identity review, and mixed owner evidence",
  },
  {
    label: "Real identities changed",
    value: "0",
    note: "All access review work remains fictional and evidence-based",
  },
];

const logs = [
  "[08:10] IAM-1801 identity=USR-NB-14 team_change=ORION_TO_NOVA age=42_DAYS",
  "[08:28] IAM-1802 role=ROLE-ORION-REPORT state=ACTIVE current_need=NOT_DOCUMENTED",
  "[08:46] IAM-1805 exception=EXC-I44 expires_in=2_DAYS action=DECISION_REQUIRED",
  "[09:04] IAM-1808 identity=SVC-NB-22 review_age=15_MONTHS scope=DOCUMENTED",
  "[09:22] IAM-1809 identity=EXT-NB-07 project_end_age=19_DAYS extension=NONE",
  "[09:40] IAM-1812 identity=USR-NB-31 finance_need=POSSIBLE formal_approval=MISSING",
  "[09:58] IAM-1816 identity=BRK-NB-01 quarterly_review=PASS owner=CONFIRMED",
  "[10:16] IAM-1817 identity=USR-NB-42 approver_sources=CONFLICTING action=ESCALATE",
];

const safeLabTasks = [
  "Create at least forty fictional IAM evidence records.",
  "Give each evidence record a stable IAM ID.",
  "Include at least ten standard-user access records.",
  "Include at least six privileged-user records.",
  "Include at least six service-identity records.",
  "Include at least five external-collaborator records.",
  "Include at least three emergency-access records.",
  "Include at least six role-definition records.",
  "Document current business purpose where known.",
  "Document identity type.",
  "Document current role or permission.",
  "Document resource owner.",
  "Document approver.",
  "Document last access review date.",
  "Document original approval date.",
  "Document exception status and expiration.",
  "Document monitoring evidence.",
  "Document team or job changes.",
  "Document project end dates for temporary access.",
  "Document service dependencies for service identities.",
  "Mark evidence freshness.",
  "Mark contradictory owner or approval evidence.",
  "Create at least twenty DEC decisions.",
  "Give every decision a stable DEC ID.",
  "Use Retain outcomes.",
  "Use Modify outcomes.",
  "Use Remove outcomes.",
  "Use Escalate outcomes.",
  "Use Evidence Insufficient outcomes.",
  "Write an evidence-linked rationale for every decision.",
  "Assign a confidence level.",
  "Assign a decision owner.",
  "Define monitoring needs.",
  "Define validation evidence.",
  "Identify at least five stale-entitlement cases.",
  "Identify at least five temporary-access expiration cases.",
  "Identify at least five service-identity governance cases.",
  "Identify at least five separation-of-duties cases.",
  "Identify at least five cases where usage does not prove justification.",
  "Identify at least five cases where unusual access is still legitimate.",
  "Write a prioritized remediation queue.",
  "Write a one-page leadership summary.",
  "Keep all identities, roles, access, approvals, and activity fictional.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Remove the former-team reporting role after owner confirmation because the current job no longer requires it and the only approval belongs to the old role context.",
    outcome:
      "Best. The access has lost its current business justification.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep the role because it is read-only.",
    outcome:
      "Caution. Lower-impact access still needs a current purpose.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Assume the user intentionally kept unauthorized access.",
    outcome:
      "Risky. Stale entitlement does not prove malicious intent.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Retain the emergency identity because its current governance review is healthy, while continuing scheduled review and monitoring.",
    outcome:
      "Best. Low use is expected for emergency access and should not be treated as automatic evidence of unnecessary access.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Remove the emergency identity solely because it has not been used recently.",
    outcome:
      "Caution. Usage frequency is not the right measure for emergency-access necessity.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Use the emergency identity routinely so its activity metric looks healthier.",
    outcome:
      "Risky. Emergency access should remain exceptional and governed.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest evidence that access should be retained?",
    choices: [
      "A current business purpose, appropriate scope, current owner, current approval, and healthy review evidence.",
      "Frequent usage alone.",
      "The role has existed for a long time.",
      "The user prefers to keep it.",
    ],
    answer: 0,
    explanation:
      "Access should be justified by current purpose, scope, ownership, approval, and review—not convenience or historical existence.",
  },
  {
    question:
      "What does frequent access usage prove?",
    choices: [
      "That the access is being used, not necessarily that it is still justified.",
      "That the access is always required.",
      "That the user owns the application.",
      "That the role should never be reviewed.",
    ],
    answer: 0,
    explanation:
      "Activity and authorization answer different questions.",
  },
  {
    question:
      "What is strongest when a service identity has appropriate technical permissions but its last formal review was fifteen months ago?",
    choices: [
      "Retain temporarily based on current purpose while completing a fresh access review.",
      "Delete it immediately.",
      "Broaden its permissions.",
      "Assume the old review is permanently valid.",
    ],
    answer: 0,
    explanation:
      "Technical scope and governance freshness should be evaluated separately.",
  },
  {
    question:
      "What should happen when current owner records conflict?",
    choices: [
      "Escalate or resolve ownership authority before making a material access decision.",
      "Choose the older owner.",
      "Choose whichever owner responds first.",
      "Ignore the conflict.",
    ],
    answer: 0,
    explanation:
      "Material access decisions should use current accountable ownership.",
  },
  {
    question:
      "Why are exception expiration dates important?",
    choices: [
      "They prevent temporary access deviations from becoming permanent without review.",
      "They prove misuse occurred.",
      "They remove the need for monitoring.",
      "They allow automatic extension.",
    ],
    answer: 0,
    explanation:
      "Expiration forces an explicit close, renew, or redesign decision.",
  },
  {
    question:
      "What is the best meaning of Evidence Insufficient?",
    choices: [
      "The current case package does not support a safe retain, modify, or remove decision yet.",
      "The reviewer does not want to make a decision.",
      "The access should automatically remain forever.",
      "The access should automatically be removed.",
    ],
    answer: 0,
    explanation:
      "Evidence-insufficient is a legitimate outcome when important purpose, owner, approval, or dependency evidence is missing.",
  },
  {
    question:
      "What is the purpose of the Identity Access Review Decision Pack?",
    choices: [
      "Document evidence-linked access decisions, rationale, ownership, freshness, exceptions, monitoring, validation, and leadership priorities.",
      "Provide methods for bypassing access controls.",
      "Create real privileged accounts.",
      "Replace identity governance.",
    ],
    answer: 0,
    explanation:
      "The artifact demonstrates disciplined defensive access review using fictional records.",
  },
];

const checklistItems = [
  "Business purpose is documented.",
  "Identity type is clear.",
  "Role and permission scope are clear.",
  "Least privilege is considered.",
  "Current owner is identified.",
  "Current approver is identified.",
  "Approval freshness is reviewed.",
  "Access review freshness is reviewed.",
  "Team or job changes are considered.",
  "Project end dates are considered.",
  "Service identity dependencies are documented.",
  "Privileged overlap is reviewed.",
  "Separation of duties is considered.",
  "Exceptions have expiration.",
  "Usage is not confused with justification.",
  "Unusual access is not assumed malicious.",
  "Evidence-insufficient is allowed as a valid outcome.",
  "Decision rationale is evidence-linked.",
  "Validation criteria are defined.",
  "No real identity, role, account, or permission is accessed or changed.",
];

const takeaways = [
  "Identity review is about current purpose, scope, ownership, approval, and evidence—not just whether access exists.",
  "Frequent use proves activity, not continuing business justification.",
  "Low use does not automatically make emergency access unnecessary.",
  "Service identities require the same governance discipline as human identities: purpose, owner, scope, review, monitoring, and lifecycle.",
  "Stale entitlement often appears after team, project, service, or ownership changes.",
  "Overlapping privileged roles may require separation-of-duties review and temporary exception governance.",
  "Evidence Insufficient is stronger than guessing when ownership, approval, or business purpose is unresolved.",
  "Retain, Modify, Remove, and Escalate decisions should always point back to evidence.",
  "Access decisions need validation so reviewers know the intended state was actually achieved.",
  "The Identity Access Review Decision Pack becomes the fourth artifact in the A18 Advanced Defensive Casebook.",
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
        Module A18
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

export default function IdentityAccessReviewCasePage() {
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
              A18.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Identity Access Review Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Access review is not a hunt for suspicious-looking permissions. It
            is a disciplined decision about whether each identity still has the
            right access, for the right reason, under the right owner, with
            current evidence.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Every identity, role, approval, exception, application, activity
            record, and decision in this lesson is fictional.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A18: Advanced Defensive Labs"
          lessonTitle="Identity Access Review Case"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.4 Entry Readiness"
          items={[
            "I can distinguish technical access state from business justification and governance evidence.",
            "I understand least privilege, role ownership, approval, review freshness, exception governance, and service identities conceptually.",
            "I will not assume that unusual or stale access proves malicious intent.",
            "I will not access, change, create, remove, or test any real identity or permission.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Unusual Access Is Not the Same as Unjustified Access"
        >
          <p className="leading-8">
            A rarely used account may be critical emergency access. A frequently
            used role may no longer match the user's job. A service identity may
            look broad until its application dependencies are reviewed. A
            temporary privileged overlap may be legitimate today and
            inappropriate three days later when its exception expires.
          </p>

          <p className="mt-4 leading-8">
            Good reviewers do not decide from appearance. They connect access to
            purpose, ownership, approval, time, dependency, monitoring, and
            business need.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Access review asks “Is this still justified?” before it asks “Does this look unusual?”
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lab"
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
          eyebrow="Identity Review Concepts"
          title="Ten Ideas That Shape an Access Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {identityReviewConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.concept}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review question: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Outcomes"
          title="Five Defensible Access Review Decisions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionOutcomes.map((item) => (
              <article
                key={item.outcome}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.outcome}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Use when: {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Identity Types"
          title="Different Identities Need Different Review Context"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {identityTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Purpose: {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Review focus: {item.reviewFocus}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case File"
          title="Northbridge Synthetic Identity Evidence"
        >
          <div className="grid gap-5">
            {northbridgeIdentityEvidence.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.identity}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.freshness}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-white">{item.observation}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Confidence
                    </p>
                    <p className="mt-2 text-sm text-emerald-50">
                      {item.confidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Review concern
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.concern}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Identity Access Review Dashboard"
          subtitle="Fictional access evidence, decision outcomes, stale governance, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Former-Team Role Still Assigned"
          severity="Medium"
          time="10:16"
          source="Fictional Identity Review Queue"
          details="USR-NB-14 moved from Team Orion to Team Nova 42 days ago, but ROLE-ORION-REPORT remains assigned. The only approval for that role references the user's former team and is eight months old."
          recommendation="Confirm the current role does not require the access, then remove the stale entitlement while preserving required Team Nova access."
        />

        <FakeLogPanel
          title="Northbridge Fictional Identity Review Log"
          logs={logs}
        />

        <Section
          eyebrow="Review Decisions"
          title="Seven Evidence-Linked Access Decisions"
        >
          <div className="grid gap-5">
            {reviewDecisions.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.decision}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.identity}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence", item.evidence],
                    ["Rationale", item.rationale],
                    ["Confidence", item.confidence],
                    ["Owner", item.owner],
                    ["Validation", item.validation],
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

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Former-Team Access"
          question="What is the strongest access-review decision for USR-NB-14?"
          evidence={[
            "USR-NB-14 moved from Team Orion to Team Nova 42 days ago.",
            "ROLE-ORION-REPORT is still active.",
            "The role is read-only.",
            "The user's current Team Nova job description does not require Orion reporting.",
            "The only approval references the former Team Orion position.",
          ]}
          options={[
            "Remove the former-team role after owner confirmation because current business need is not supported.",
            "Retain it permanently because the role is read-only.",
            "Assume malicious intent.",
            "Add more former-team roles for consistency.",
          ]}
          bestAnswer={0}
          explanation="Read-only access can still become stale. The strongest decision follows current job purpose and approval evidence."
        />

        <Section
          eyebrow="Evidence Interpretation"
          title="Avoid Turning One Signal Into the Whole Decision"
        >
          <div className="grid gap-5">
            {evidenceInterpretation.map((item) => (
              <article
                key={item.evidence}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="font-black text-white">{item.evidence}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak conclusion
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Stronger conclusion
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.stronger}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Stale Access"
          title="Six Patterns That Commonly Create Access Drift"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {staleAccessPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Signal: {item.signal}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Risk: {item.risk}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Response: {item.response}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Prioritization"
          title="Eight Factors That Shape Access Review Priority"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {prioritizationFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Pack"
          title="What a Professional Access Review Record Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionPackFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Former-Team Access"
          scenario="A fictional user moved to a new team 42 days ago but still holds a read-only reporting role from the previous team. The current job description does not require the old role."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Emergency Identity With Low Usage"
          scenario="A fictional emergency-access identity has not been used in 211 days, but its quarterly governance review was completed 17 days ago with current owner and approver signoff."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Identity Access Review Decision Pack"
        >
          <p className="leading-8">
            Review a synthetic identity population and make evidence-backed
            decisions without confusing unusual access, stale access, and
            unjustified access.
          </p>

          <div className="mt-6 grid gap-4">
            {safeLabTasks.map((item, index) => (
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
              Use fictional identities, roles, applications, approvals,
              exceptions, sponsors, activity records, and service dependencies
              only. Do not access, test, create, modify, disable, or remove any
              real account, role, credential, token, permission, or identity
              system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Emergency Access"
          question="What is the strongest decision for BRK-NB-01?"
          evidence={[
            "The emergency identity has not been used in 211 days.",
            "Low usage is expected for emergency access.",
            "Quarterly review completed 17 days ago.",
            "The owner and approver are current.",
            "The case shows no governance exception or missing review.",
          ]}
          options={[
            "Retain it under the current emergency-access model and continue scheduled review and monitoring.",
            "Remove it solely because it has low usage.",
            "Use it routinely so the activity metric increases.",
            "Broaden its permissions before the next emergency.",
          ]}
          bestAnswer={0}
          explanation="Emergency identities should be judged by purpose, governance, readiness, scope, and monitoring—not normal usage frequency."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Build a Conflicting-Evidence Access Review"
        >
          <p className="leading-8">
            Create a fictional case where an identity appears to have valid
            access in one record, stale approval in another, active usage in a
            third, and conflicting ownership in a fourth. Write the decision
            path without guessing.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Identity type",
              "Current role",
              "Business purpose",
              "Technical access state",
              "Current usage",
              "Owner evidence",
              "Approval evidence",
              "Review freshness",
              "Exception status",
              "Conflicting source",
              "Decision confidence",
              "Interim decision",
              "Missing evidence request",
              "Escalation owner",
              "Final validation",
              "Leadership note",
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
            The strongest result should demonstrate that “Evidence Insufficient”
            can be a disciplined professional decision rather than a failure to
            decide.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.4 Mini Quiz: Identity Access Review Case"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Identity Access Review Decision Pack"
          prompt="Create the fourth artifact for your A18 Advanced Defensive Casebook: a fictional Identity Access Review Decision Pack. Include identity type, access or role, business purpose, evidence references, current owner, approver, review freshness, exception status, usage context, service dependency where relevant, Retain/Modify/Remove/Escalate/Evidence Insufficient decision, confidence, rationale, monitoring need, validation criteria, remediation priority, and a one-page leadership summary."
          tips={[
            "Do not confuse frequent usage with current business justification.",
            "Do not assume unusual access is malicious.",
            "Treat service identities as governed identities with owners and review dates.",
            "Use Evidence Insufficient when important authority or purpose evidence is missing.",
            "Make every decision traceable to evidence.",
            "Keep every identity and permission fictional.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.5?"
        >
          <p className="leading-8">
            A18.5 moves into an Incident Response Tabletop Case. Before
            continuing, make sure you can make identity decisions from purpose,
            ownership, approval, freshness, privilege, exceptions, and evidence
            without jumping from unusual access to unsupported conclusions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish unusual access from unjustified access.",
              "I can evaluate human, privileged, service, emergency, and external identities differently.",
              "I can use Retain, Modify, Remove, Escalate, and Evidence Insufficient appropriately.",
              "I can explain why usage alone does not prove access is justified.",
              "I can produce an evidence-linked access decision without interacting with a real identity system.",
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
          title="How to Make the Access Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with purpose",
                detail:
                  "Access only makes sense relative to a current responsibility, service dependency, or approved business need.",
              },
              {
                title: "Separate state from justification",
                detail:
                  "An active role tells you what exists, not whether it should exist.",
              },
              {
                title: "Use evidence IDs",
                detail:
                  "Every decision should trace back to the records that support it.",
              },
              {
                title: "Show review freshness",
                detail:
                  "Old approvals and old access reviews should lower confidence in today's decision.",
              },
              {
                title: "Allow uncertainty",
                detail:
                  "Evidence Insufficient is appropriate when current ownership or purpose is missing.",
              },
              {
                title: "Treat service identities seriously",
                detail:
                  "Non-human identities need current owners, purpose, permission scope, monitoring, and review.",
              },
              {
                title: "Validate the result",
                detail:
                  "A good decision includes evidence that the intended access state was actually achieved.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.5 will apply the same evidence discipline to evolving incident-response decisions.",
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
            A18.4 stays fictional, defensive, evidence-based, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Do not access, test, create, modify, disable, or remove real user
            accounts, roles, service identities, credentials, tokens,
            permissions, or identity systems. This lesson teaches access-review
            reasoning, governance, ownership, evidence quality, and safe decision
            documentation using synthetic records only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.4 Identity Access Review Case Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a defensible access-review model covering human,
            privileged, service, emergency, and external identities; stale
            entitlements; approval freshness; ownership; exceptions; least
            privilege; evidence confidence; and decision validation. Next,
            A18.5 moves into an Incident Response Tabletop Case.
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