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
const previousLesson = `${modulePath}/defensive-network-architecture`;
const nextLesson = `${modulePath}/firewall-strategy-and-rule-hygiene`;

const objectives = [
  "Explain segmentation and microsegmentation as fictional trust-reduction and blast-radius-control strategies driven by mission, identity, asset value, service purpose, communication need, evidence, and recovery.",
  "Compare fictional macrosegmentation, microsegmentation, identity-aware policy, workload-aware policy, application-aware policy, administrative separation, and recovery segmentation conceptually.",
  "Build a fictional zone-to-zone and service-to-service communication model that distinguishes required paths, prohibited paths, conditional paths, temporary exceptions, dependencies, and failure behavior.",
  "Evaluate fictional segmentation tradeoffs involving usability, accessibility, operations, support, monitoring, privacy, supplier access, performance, complexity, resilience, emergency access, and recovery.",
  "Create a portfolio-ready fictional segmentation decision package with policy objectives, communication matrices, ownership, evidence, exceptions, assumptions, residual risks, validation, and review triggers.",
];

const vocabulary = [
  [
    "Segmentation",
    "A fictional design strategy that separates users, systems, services, workloads, devices, data, administration, suppliers, wireless classes, or recovery functions into trust or policy groups.",
  ],
  [
    "Macrosegmentation",
    "Broad fictional separation between major zones such as public access, application services, sensitive data, administration, suppliers, wireless, monitoring, and recovery.",
  ],
  [
    "Microsegmentation",
    "Finer-grained fictional policy that limits communication between workloads, services, identities, or application components based on purpose and context.",
  ],
  [
    "Policy group",
    "A fictional collection of sources or destinations that share an approved mission purpose, trust requirement, owner, or communication policy.",
  ],
  [
    "Communication matrix",
    "A fictional table that records which source may communicate with which destination, for what service, purpose, identity, state, owner, evidence, exception, and review period.",
  ],
  [
    "Default-deny concept",
    "A fictional policy principle where communication is not approved unless a documented mission need and required conditions exist.",
  ],
  [
    "Least connectivity",
    "Allowing only the fictional communication needed for an approved purpose under defined identity, service, destination, time, state, and ownership conditions.",
  ],
  [
    "Allowlist concept",
    "A fictional set of explicitly approved communication relationships defined by source, destination, purpose, identity, service, state, owner, and evidence.",
  ],
  [
    "East-west control",
    "Fictional policy governing communication between internal services, workloads, zones, or application components.",
  ],
  [
    "North-south control",
    "Fictional policy governing communication entering or leaving a defined environment.",
  ],
  [
    "Identity-aware policy",
    "A fictional policy decision that considers the acting human, device, service, role, assignment, purpose, and lifecycle rather than location alone.",
  ],
  [
    "Workload-aware policy",
    "A fictional policy decision that uses service or workload identity, application role, environment, owner, and purpose.",
  ],
  [
    "Application-aware policy",
    "A fictional policy decision that recognizes business service, request type, object, state, and application context in addition to network reachability.",
  ],
  [
    "Administrative segmentation",
    "Fictional separation of privileged management, support, configuration, monitoring, emergency, and recovery paths from normal user and service communication.",
  ],
  [
    "Supplier segmentation",
    "Fictional separation and policy control for external service identities, data flows, support, evidence, failure, recovery, and offboarding.",
  ],
  [
    "Recovery segmentation",
    "Fictional separation of backup, restore, emergency access, validation, reconciliation, and continuity services with stronger governance and lifecycle controls.",
  ],
  [
    "Policy enforcement point",
    "A fictional location where a segmentation, identity, device, application, or service policy is evaluated.",
  ],
  [
    "Policy decision point",
    "A fictional service or process that evaluates identity, purpose, destination, object, state, ownership, risk, or approval context before a policy outcome.",
  ],
  [
    "Policy exception",
    "A fictional authorized deviation from normal segmentation with scope, purpose, owner, evidence, expiration, compensating controls, residual risk, and review.",
  ],
  [
    "Shadow path",
    "A fictional alternate communication route that bypasses or weakens the intended segmentation policy.",
  ],
  [
    "Blast-radius reduction",
    "The fictional reduction in assets, services, users, data, identities, or recovery functions affected by one unsafe condition or control failure.",
  ],
  [
    "Policy drift",
    "The fictional divergence between intended segmentation and current approved or observed communication.",
  ],
  [
    "Segmentation evidence",
    "Fictional records showing policy intent, implementation, evaluation, denial, exception, source health, review, and failure behavior.",
  ],
  [
    "Segmentation review trigger",
    "A fictional change that requires policy review, such as a new service, supplier, identity, environment, data flow, remote-access path, wireless class, recovery method, or mission requirement.",
  ],
];

const principles = [
  {
    principle: "Segment by mission purpose",
    description:
      "Fictional segmentation should reflect the work a service or actor performs, the assets involved, the trust required, and the owner responsible.",
    strongPractice:
      "Separate student-facing portal services, workflow services, sensitive data, supplier processing, administration, evidence, wireless, and recovery because their purposes and control needs differ.",
    failure:
      "Zones based only on technical convenience can permit unnecessary communication or block legitimate mission workflows.",
  },
  {
    principle: "Approve communication, not locations",
    description:
      "Being in a fictional internal zone should not automatically grant broad communication rights.",
    strongPractice:
      "Approve a workflow-service-to-data-service relationship because one identity needs one operation for one business purpose.",
    failure:
      "Location-based trust can create large blast radius and weak accountability.",
  },
  {
    principle: "Use identity and service context",
    description:
      "Fictional microsegmentation is strongest when policy considers human, device, service, role, workload, object, purpose, and environment context.",
    strongPractice:
      "Allow one approved workflow service identity to reach one data function under one state and deny unrelated workloads.",
    failure:
      "Address-only thinking may not survive scaling, migration, dynamic workloads, or identity changes.",
  },
  {
    principle: "Separate administration",
    description:
      "Fictional privileged management, support, monitoring, emergency, and recovery communication should not share the same trust model as normal application traffic.",
    strongPractice:
      "Use dedicated administrative policy groups, stronger identity, managed devices, destination restrictions, approval, session evidence, and revocation.",
    failure:
      "Broad administrative paths can defeat otherwise strong segmentation.",
  },
  {
    principle: "Model every dependency",
    description:
      "Identity, DNS, monitoring, time, management, supplier, queue, storage, and recovery dependencies may require cross-zone communication.",
    strongPractice:
      "Document each dependency path with purpose, owner, service, evidence, failure, and recovery.",
    failure:
      "Hidden dependencies can cause outages, shadow paths, or emergency exceptions.",
  },
  {
    principle: "Design evidence with policy",
    description:
      "Fictional defenders need evidence of allowed, denied, failed, exceptional, degraded, and recovered communication.",
    strongPractice:
      "Record policy decision, source identity, destination, service, purpose, result, source health, exception, and correlation.",
    failure:
      "A policy can appear strong while defenders cannot prove whether it is evaluated or bypassed.",
  },
  {
    principle: "Plan safe failure",
    description:
      "Fictional segmentation controls may be unavailable, stale, overloaded, misconfigured, or dependent on unhealthy identity or policy services.",
    strongPractice:
      "Define which communication fails closed, fails safely limited, enters degraded mode, or requires approved manual review.",
    failure:
      "Control failure can either expose too much or stop critical mission services.",
  },
  {
    principle: "Govern exceptions",
    description:
      "Temporary fictional communication should have narrow scope, one owner, evidence, expiration, compensating controls, residual risk, and rollback.",
    strongPractice:
      "A migration path expires automatically unless the owner revalidates purpose and dependencies.",
    failure:
      "Temporary exceptions can become permanent architecture.",
  },
  {
    principle: "Validate end to end",
    description:
      "Fictional segmentation should be reviewed across user, application, data, supplier, management, evidence, DNS, wireless, and recovery workflows.",
    strongPractice:
      "Use invented test cases and supplied evidence to confirm expected allow, deny, failure, recovery, and user outcomes.",
    failure:
      "A policy may work in one layer while an alternate path remains open or the mission cannot recover.",
  },
  {
    principle: "Maintain and retire",
    description:
      "Fictional segmentation is a living system of owners, versions, evidence, exceptions, review dates, triggers, and retirement decisions.",
    strongPractice:
      "Review policy after service, identity, supplier, environment, data, remote-access, wireless, or recovery change.",
    failure:
      "Policy drift grows when intended design and current operation are never reconciled.",
  },
];

const segmentationLayers = [
  {
    layer: "Zone-level segmentation",
    purpose:
      "Separate major fictional trust and mission areas such as public access, application services, sensitive data, administration, suppliers, wireless, monitoring, and recovery.",
    strengths:
      "Clear ownership, broad blast-radius reduction, simpler policy review, and visible trust boundaries.",
    limits:
      "May still allow unnecessary communication among services inside one zone.",
    evidence:
      "Zone register, path matrix, policy decisions, owner approval, usage evidence, exceptions, and review.",
    strongestWhen:
      "Major differences in mission, data sensitivity, administration, supplier responsibility, or recovery exist.",
  },
  {
    layer: "Service-level segmentation",
    purpose:
      "Limit fictional communication between named services based on business role and dependency.",
    strengths:
      "Reduces unnecessary east-west reachability and improves service accountability.",
    limits:
      "Requires accurate service identity, dependency mapping, ownership, and lifecycle.",
    evidence:
      "Service identity, source, destination, service purpose, dependency, policy result, and change record.",
    strongestWhen:
      "Application components have distinct roles or sensitive dependencies.",
  },
  {
    layer: "Workload-level segmentation",
    purpose:
      "Apply fictional policy to workload or application instances using identity and environment context.",
    strengths:
      "Supports dynamic environments and reduces reliance on location alone.",
    limits:
      "Identity, orchestration, policy distribution, source health, and change complexity become critical.",
    evidence:
      "Workload identity, environment, policy version, decision, deployment state, source health, and owner.",
    strongestWhen:
      "Services scale, move, or use multiple runtime environments.",
  },
  {
    layer: "Identity-aware segmentation",
    purpose:
      "Use fictional human, device, service, role, assignment, purpose, and lifecycle in communication decisions.",
    strengths:
      "Separates authorization from network location and supports more precise access.",
    limits:
      "Identity outage, stale roles, shared identities, weak device context, or emergency access can undermine policy.",
    evidence:
      "Authentication, device identity, service identity, role, assignment, purpose, policy result, and revocation.",
    strongestWhen:
      "Remote access, administration, supplier access, and service-to-service relationships vary by identity.",
  },
  {
    layer: "Application-aware segmentation",
    purpose:
      "Consider fictional request type, object, state, transaction, or application function in addition to connectivity.",
    strengths:
      "Better aligns network policy with business meaning and object-level decisions.",
    limits:
      "Requires reliable application context, integration, evidence, and failure behavior.",
    evidence:
      "Application identity, request purpose, object, state, decision, result, correlation, and source health.",
    strongestWhen:
      "The same service path supports actions with different risk or authority.",
  },
  {
    layer: "Administrative segmentation",
    purpose:
      "Separate fictional management, support, monitoring, change, emergency, and recovery actions from normal service traffic.",
    strengths:
      "Reduces privileged blast radius and improves accountability.",
    limits:
      "Can create operational delay or unsafe workarounds if support and recovery needs are poorly designed.",
    evidence:
      "Administrator identity, device, approval, destination, action, session, result, change, and revocation.",
    strongestWhen:
      "Privileged users or services can change multiple critical assets.",
  },
  {
    layer: "Supplier segmentation",
    purpose:
      "Limit fictional external service communication, data, support, evidence, and recovery responsibility.",
    strengths:
      "Reduces external trust and clarifies shared responsibility.",
    limits:
      "Supplier changes, support needs, data schemas, identity, and availability can create pressure for broad exceptions.",
    evidence:
      "Supplier identity, destination, fields, purpose, policy, correlation, source health, owner, and contract decision.",
    strongestWhen:
      "External services process data or affect business state.",
  },
  {
    layer: "Recovery segmentation",
    purpose:
      "Separate fictional backup, restore, emergency access, validation, reconciliation, and continuity communication.",
    strengths:
      "Protects recovery assets and prevents emergency paths from becoming normal bypasses.",
    limits:
      "Recovery must remain usable when identity, DNS, management, monitoring, or normal policy is degraded.",
    evidence:
      "Recovery trigger, approval, identity, destination, action, artifact, result, validation, revocation, and closure.",
    strongestWhen:
      "Recovery requires broader temporary authority or alternate infrastructure.",
  },
];

const policyDimensions = [
  {
    dimension: "Mission purpose",
    question:
      "Why does the fictional communication exist, and which user or service outcome depends on it?",
    strongEvidence:
      "Service objective, workflow, owner approval, dependency, and impact statement.",
    warning:
      "Technical reachability without business purpose is not enough.",
  },
  {
    dimension: "Source identity",
    question:
      "Which fictional human, device, service, workload, supplier, or recovery identity initiates the communication?",
    strongEvidence:
      "Identity source, role, device, service identity, lifecycle, and policy decision.",
    warning:
      "Shared or stale identities weaken precision and accountability.",
  },
  {
    dimension: "Destination and object",
    question:
      "Which fictional service, zone, function, or object may be reached?",
    strongEvidence:
      "Destination group, application function, object scope, owner, and environment.",
    warning:
      "Broad destinations can create unnecessary blast radius.",
  },
  {
    dimension: "Service and operation",
    question:
      "Which fictional communication service or business operation is approved?",
    strongEvidence:
      "Service dependency, request type, operation, schema, and owner decision.",
    warning:
      "One reachable destination may expose many unneeded functions.",
  },
  {
    dimension: "State and environment",
    question:
      "Does the fictional policy apply in production-like, test, temporary, degraded, emergency, or recovery state?",
    strongEvidence:
      "Environment, deployment state, change window, recovery status, and policy version.",
    warning:
      "Future, temporary, and recovery paths should not be mistaken for normal permanent access.",
  },
  {
    dimension: "Time and duration",
    question:
      "When and for how long is the fictional communication required?",
    strongEvidence:
      "Schedule, session start, session end, exception window, expiration, and review date.",
    warning:
      "Permanent policy should not be created for a temporary need without review.",
  },
  {
    dimension: "Evidence and source health",
    question:
      "How will fictional defenders know the policy was evaluated and the evidence source remained healthy?",
    strongEvidence:
      "Policy result, decision reason, source identity, destination, service, health, alert, and correlation.",
    warning:
      "Missing evidence does not prove communication was denied or allowed.",
  },
  {
    dimension: "Failure behavior",
    question:
      "What happens if fictional identity, policy, DNS, management, monitoring, or enforcement becomes unavailable?",
    strongEvidence:
      "Safe default, degraded mode, blocked action, alternate evidence, alert, escalation, and recovery.",
    warning:
      "Fail-open and fail-closed choices can each create mission or safety harm.",
  },
  {
    dimension: "Owner and exception",
    question:
      "Who owns the fictional communication and any temporary deviation from policy?",
    strongEvidence:
      "Owner, approver, reason, compensating controls, residual risk, expiration, and closure.",
    warning:
      "Shared team ownership often leaves exceptions unreviewed.",
  },
  {
    dimension: "Review and retirement",
    question:
      "Which fictional changes require revalidation or policy removal?",
    strongEvidence:
      "Review trigger, architecture version, usage evidence, service retirement, supplier offboarding, and change history.",
    warning:
      "Unused or stale communication can remain indefinitely without lifecycle governance.",
  },
];

const policyPatterns = [
  {
    pattern: "Public-to-application",
    objective:
      "Allow fictional users to reach approved portal functions without broad direct access to internal services.",
    preferredContext:
      "Authenticated session, approved request type, input validation, object context, rate handling, and evidence.",
    avoid:
      "Direct public reachability to sensitive data, administration, monitoring, or recovery functions.",
    failure:
      "Identity or application failure should produce safe limited behavior and clear user status.",
  },
  {
    pattern: "Application-to-data",
    objective:
      "Allow only approved fictional service identities to perform required operations on required data functions.",
    preferredContext:
      "Service identity, application role, object, operation, state, purpose, and evidence.",
    avoid:
      "Broad zone-wide data access for every application component.",
    failure:
      "Policy or identity failure should not silently expand data reachability.",
  },
  {
    pattern: "Service-to-service",
    objective:
      "Limit fictional east-west communication to documented dependencies.",
    preferredContext:
      "Source service identity, destination service, operation, environment, owner, policy version, and correlation.",
    avoid:
      "Allow-all communication inside an application zone.",
    failure:
      "Define safe retry, alternate path, alerting, and degraded operation without broad bypass.",
  },
  {
    pattern: "Supplier integration",
    objective:
      "Restrict fictional supplier requests and results to approved identities, destinations, fields, schemas, and business states.",
    preferredContext:
      "Supplier identity, minimized data, correlation, freshness, state compatibility, source health, and owner review.",
    avoid:
      "Supplier reachability into unrelated internal zones or broad support administration.",
    failure:
      "Use queue isolation, controlled review, communication, and reconciliation.",
  },
  {
    pattern: "Administrative access",
    objective:
      "Restrict fictional privileged communication by identity, managed device, role, purpose, destination, time, approval, and session evidence.",
    preferredContext:
      "Dedicated management policy, strong identity, separate role, approved target, change reason, and revocation.",
    avoid:
      "Using the same policy as normal user traffic or granting broad environment-wide access.",
    failure:
      "Move to controlled emergency process with independent approval and closure.",
  },
  {
    pattern: "Monitoring and evidence",
    objective:
      "Allow fictional evidence sources to send only required defensive data to approved collectors and analysts.",
    preferredContext:
      "Source identity, event purpose, schema, health, privacy, retention, access, and correlation.",
    avoid:
      "Broad two-way management reachability or unnecessary content collection.",
    failure:
      "Mark blind periods, use alternate evidence, and reassess dependent decisions.",
  },
  {
    pattern: "Wireless access",
    objective:
      "Separate fictional managed, employee, guest, service-device, and administrative wireless communication.",
    preferredContext:
      "User identity, device identity, network class, destination class, policy result, session, and revocation.",
    avoid:
      "Guest or unowned-device access to internal service and management paths.",
    failure:
      "Provide safe limited access or approved alternate workflow.",
  },
  {
    pattern: "Recovery access",
    objective:
      "Allow fictional emergency and restore communication only under defined trigger, approval, destination, order, evidence, time limit, and revocation.",
    preferredContext:
      "Recovery identity, artifact, destination, action, dependency state, validation, reconciliation, and closure.",
    avoid:
      "Permanent broad emergency paths that bypass normal accountability.",
    failure:
      "Return to controlled degraded mode and reassess the recovery plan.",
  },
];

const evidenceMatrix = [
  {
    id: "SG-01",
    source: "Fictional zone communication register",
    observation:
      "Twenty-six of thirty-one paths have approved purpose, owner, evidence, and review; five remain temporary or unvalidated.",
    supports:
      "Most fictional macrosegmentation decisions are documented, but exception and lifecycle work remains.",
    limits:
      "The register does not prove implementation, current use, denial behavior, or alternate-path absence.",
    use:
      "Create a policy validation plan and assign owners for unvalidated paths.",
  },
  {
    id: "SG-02",
    source: "Fictional service dependency map",
    observation:
      "Several application services share identity, DNS, monitoring, and queue dependencies despite being placed in separate zones.",
    supports:
      "Microsegmentation and resilience decisions must consider common dependencies and required service-to-service communication.",
    limits:
      "Shared dependencies do not prove segmentation failure.",
    use:
      "Document required dependency paths and shared failure domains.",
  },
  {
    id: "SG-03",
    source: "Fictional administrative access review",
    observation:
      "Support and infrastructure administrators share one remote-access gateway but have different destinations, roles, devices, and purposes.",
    supports:
      "Identity-aware administrative segmentation is appropriate.",
    limits:
      "A shared gateway does not prove broad access or unsafe sessions.",
    use:
      "Create distinct fictional policy groups and evidence requirements.",
  },
  {
    id: "SG-04",
    source: "Fictional temporary exception register",
    observation:
      "A migration exception remains open after the project ended and has no current owner, usage evidence, or expiration.",
    supports:
      "Exception governance and retain, restrict, or retire review are required.",
    limits:
      "The record does not prove the path is active, necessary, or unsafe.",
    use:
      "Mark the path unvalidated and prevent silent permanent policy.",
  },
  {
    id: "SG-05",
    source: "Fictional network visibility summary",
    observation:
      "Allowed and denied outcomes are visible at zone boundaries, while some service-to-service and recovery decisions lack independent evidence.",
    supports:
      "Microsegmentation needs policy and source-health evidence at finer-grained control points.",
    limits:
      "Incomplete evidence does not prove policy absence or bypass.",
    use:
      "Prioritize evidence for high-impact and administrative relationships.",
  },
  {
    id: "SG-06",
    source: "Fictional supplier-result exercise",
    observation:
      "A supplier result reached the integration zone but was delayed before the workflow service accepted it.",
    supports:
      "Segmentation should preserve queue isolation, state validation, and controlled service-to-service paths.",
    limits:
      "The exercise does not prove malicious activity or general supplier failure.",
    use:
      "Model normal, delayed, uncertain, and recovery communication states.",
  },
  {
    id: "SG-07",
    source: "Fictional recovery test",
    observation:
      "Emergency recovery access restored data connectivity but used a broader policy group than normal administration and lacked complete revocation evidence.",
    supports:
      "Recovery segmentation, time-bound policy, approval, destination control, evidence, and closure need improvement.",
    limits:
      "The test does not prove current misuse or permanent broad access.",
    use:
      "Treat recovery policy as conditional until closure evidence is complete.",
  },
  {
    id: "SG-08",
    source: "Fictional policy review history",
    observation:
      "Two service policies were revised after application ownership changed, but one old destination group remains referenced.",
    supports:
      "Policy lifecycle, ownership, versioning, dependency review, and retirement are necessary.",
    limits:
      "The reference does not prove current reachability or policy evaluation.",
    use:
      "Open a stale-reference finding and validate before removal.",
  },
];

const defects = [
  {
    defect: "Flat internal allow model",
    observation:
      "Fictional internal services may communicate broadly because they share one zone.",
    impact:
      "One unsafe service, error, or identity can affect unrelated assets.",
    correction:
      "Use service purpose, identity, dependency, destination, operation, evidence, and owner to narrow communication.",
  },
  {
    defect: "Segmentation by address only",
    observation:
      "Fictional policy relies only on location and does not recognize service identity, application role, or environment.",
    impact:
      "Dynamic or migrated workloads may receive incorrect access.",
    correction:
      "Add identity-, workload-, or application-aware context and lifecycle evidence.",
  },
  {
    defect: "Oversegmentation without mission analysis",
    observation:
      "Fictional services are divided into many groups without understanding required workflows or support needs.",
    impact:
      "Complexity, outages, exceptions, and unsafe workarounds may increase.",
    correction:
      "Start with mission dependencies and use the least complexity that achieves required blast-radius reduction.",
  },
  {
    defect: "Hidden shadow path",
    observation:
      "A fictional service can reach the same destination through an alternate integration or management route.",
    impact:
      "Intended policy may be bypassed or evidence may become incomplete.",
    correction:
      "Map all approved and exceptional paths, correlate evidence, and remove or govern alternates.",
  },
  {
    defect: "Permanent temporary exception",
    observation:
      "A fictional migration or support path remains after its original purpose ended.",
    impact:
      "Broad access can outlive ownership, evidence, and risk acceptance.",
    correction:
      "Require expiration, usage evidence, owner review, compensating controls, and retain, restrict, or retire decision.",
  },
  {
    defect: "Policy without evidence",
    observation:
      "A fictional design states that communication is denied, but no policy decision or source-health evidence is available.",
    impact:
      "Defenders cannot prove implementation, operation, or bypass resistance.",
    correction:
      "Define policy decision, result, identity, source, destination, service, health, exception, and review evidence.",
  },
  {
    defect: "Shared administrative policy",
    observation:
      "Fictional support, infrastructure, supplier, and recovery administrators use one broad destination group.",
    impact:
      "Privileged blast radius and accountability may be excessive.",
    correction:
      "Create separate purpose-, identity-, device-, destination-, time-, and approval-bound policies.",
  },
  {
    defect: "Fail-open without bounded design",
    observation:
      "A fictional segmentation control allows broad communication when identity or policy services are unavailable.",
    impact:
      "A control outage may become a trust-expansion event.",
    correction:
      "Define safe limited behavior, blocked high-risk actions, alerts, alternate evidence, and recovery.",
  },
  {
    defect: "Fail-closed without mission plan",
    observation:
      "A fictional control blocks all communication during failure, including critical support or recovery paths.",
    impact:
      "Security controls may cause unnecessary service or safety harm.",
    correction:
      "Define approved degraded modes and independently governed emergency paths.",
  },
  {
    defect: "No review trigger",
    observation:
      "Fictional policy remains unchanged after service, identity, supplier, environment, wireless, or recovery changes.",
    impact:
      "Policy drift and stale communication accumulate.",
    correction:
      "Use versions, ownership, review dates, architecture triggers, usage evidence, and retirement.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define the segmentation objective",
    action:
      "State the fictional mission, asset, trust, blast-radius, administrative, supplier, wireless, evidence, or recovery problem segmentation should address.",
    output:
      "Segmentation purpose and success statement.",
    quality:
      "The objective describes a risk or mission outcome rather than simply “create more zones.”",
  },
  {
    step: "2",
    title: "Inventory required communication",
    action:
      "List fictional user, service, data, supplier, administrative, monitoring, DNS, wireless, and recovery relationships.",
    output:
      "Source-to-destination communication inventory.",
    quality:
      "Every relationship has one mission purpose and accountable owner.",
  },
  {
    step: "3",
    title: "Classify policy groups",
    action:
      "Group fictional actors and services by purpose, identity, asset value, trust, environment, administration, evidence, and recovery needs.",
    output:
      "Zone and microsegmentation group register.",
    quality:
      "Groups remain understandable and maintainable.",
  },
  {
    step: "4",
    title: "Write policy requirements",
    action:
      "For each relationship, record fictional source, destination, identity, service, purpose, state, time, evidence, owner, exception, and failure behavior.",
    output:
      "Communication and policy matrix.",
    quality:
      "Approved communication is specific enough to review without using real configuration syntax.",
  },
  {
    step: "5",
    title: "Select enforcement layers",
    action:
      "Choose fictional zone, service, workload, identity, application, administrative, supplier, or recovery policy layers.",
    output:
      "Enforcement-layer decision map.",
    quality:
      "The chosen layers match the mission and operational complexity.",
  },
  {
    step: "6",
    title: "Design evidence",
    action:
      "Define fictional allow, deny, exception, failure, source-health, review, and recovery evidence.",
    output:
      "Segmentation evidence and source-health plan.",
    quality:
      "Evidence is minimized, privacy-aware, owned, and tied to defender questions.",
  },
  {
    step: "7",
    title: "Govern exceptions",
    action:
      "Record fictional temporary communication with purpose, scope, approver, compensating controls, owner, expiration, residual risk, rollback, and closure.",
    output:
      "Exception and expiration register.",
    quality:
      "No temporary exception can remain open without explicit review.",
  },
  {
    step: "8",
    title: "Model failure and recovery",
    action:
      "Decide how fictional policy behaves when identity, DNS, enforcement, management, monitoring, or recovery services fail.",
    output:
      "Safe-failure and degraded-mode plan.",
    quality:
      "The plan limits trust expansion while preserving critical mission and recovery needs.",
  },
  {
    step: "9",
    title: "Validate with invented cases",
    action:
      "Use fictional allow, deny, delay, identity-change, supplier, administrative, wireless, and recovery cases to evaluate expected outcomes.",
    output:
      "Validation matrix and findings.",
    quality:
      "Validation checks both policy correctness and mission impact without touching real systems.",
  },
  {
    step: "10",
    title: "Maintain and communicate",
    action:
      "Assign fictional owners, versions, review dates, triggers, residual risks, leadership decisions, and retirement conditions.",
    output:
      "Segmentation governance and portfolio brief.",
    quality:
      "The final artifact is traceable, maintainable, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of segmentation?",
    choices: [
      "To create as many zones as possible.",
      "To reduce unnecessary trust and blast radius while preserving approved fictional mission communication.",
      "To make every internal service trusted.",
      "To replace identity and application authorization.",
    ],
    answer: 1,
    explanation:
      "Segmentation limits communication based on purpose and context while still supporting required mission workflows.",
  },
  {
    question:
      "How does microsegmentation differ conceptually from broad zone segmentation?",
    choices: [
      "It always uses a specific product.",
      "It applies finer-grained fictional policy between workloads, services, identities, or application components.",
      "It removes the need for macrosegmentation.",
      "It guarantees no communication failures.",
    ],
    answer: 1,
    explanation:
      "Microsegmentation provides finer policy granularity but still depends on identity, ownership, evidence, operations, and recovery.",
  },
  {
    question:
      "A fictional application service can reach the data zone. What should policy still evaluate?",
    choices: [
      "Nothing else, because reachability is enough.",
      "Service identity, approved operation, object, state, purpose, environment, owner, evidence, and failure behavior.",
      "Only the source address.",
      "Only whether traffic is encrypted.",
    ],
    answer: 1,
    explanation:
      "Reachability does not establish authorization, semantic validity, or safe business action.",
  },
  {
    question:
      "Why can oversegmentation be harmful?",
    choices: [
      "Because segmentation never improves security.",
      "Because unnecessary policy complexity can cause outages, exceptions, weak ownership, and unsafe workarounds.",
      "Because every service should share one zone.",
      "Because microsegmentation eliminates monitoring.",
    ],
    answer: 1,
    explanation:
      "Segmentation should be proportionate, mission-driven, understandable, and maintainable.",
  },
  {
    question:
      "What is the strongest treatment for a temporary fictional policy exception?",
    choices: [
      "Leave it open because it may be needed again.",
      "Give it purpose, narrow scope, owner, approver, evidence, compensating controls, expiration, residual risk, rollback, and closure criteria.",
      "Delete it immediately without dependency review.",
      "Hide it from normal policy reporting.",
    ],
    answer: 1,
    explanation:
      "Temporary communication requires explicit governance so it does not become permanent unreviewed architecture.",
  },
  {
    question:
      "Why must segmentation failure behavior be designed?",
    choices: [
      "Because controls never work.",
      "Because fail-open can expand trust while fail-closed can stop critical mission or recovery communication.",
      "Because every control should always fail open.",
      "Because recovery should bypass all policy.",
    ],
    answer: 1,
    explanation:
      "Safe failure balances trust reduction, mission continuity, evidence, degraded operation, and recovery.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real communication matrix but replace organization names.",
      "Use real firewall rules without addresses.",
      "Invent every zone, identity, service, path, policy, exception, record, owner, date, decision, and outcome from scratch.",
      "Use copied internal diagrams because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real architecture, policy, identities, suppliers, evidence, and recovery details.",
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

export default function SegmentationAndMicrosegmentationConceptsPage() {
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
              Lesson 2 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Trust Reduction and Blast-Radius Control
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.2 Segmentation and Microsegmentation Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders divide fictional networks and
            services into meaningful policy groups based on mission purpose,
            identity, service communication, asset value, trust, administration,
            suppliers, evidence, failure, and recovery. Compare broad
            segmentation with finer-grained microsegmentation without using real
            configurations or operational network details.
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
          lessonTitle="Segmentation and Microsegmentation Concepts"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented zones, services, identities, communication paths, policy groups, exceptions, evidence, owners, dates, decisions, and outcomes.",
            "I understand that segmentation reduces unnecessary trust but does not replace identity, authorization, validation, application controls, monitoring, or recovery.",
            "I will begin with mission and required communication rather than creating arbitrary zones or rules.",
            "I will evaluate both undersegmentation and oversegmentation risks.",
            "I will document exceptions, failure behavior, evidence, ownership, expiration, residual risk, and review triggers.",
            "I will not access, scan, map, capture, test, configure, bypass, reroute, block, monitor, investigate, or modify any real network or system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="More Segmentation Is Not Automatically Better Segmentation"
        >
          <p className="leading-8">
            A fictional Northbridge team wants to reduce internal trust. One
            proposal places every service in its own policy group. Another keeps
            all application services together because they are “internal.”
            The first proposal may create fragile complexity and constant
            exceptions. The second may allow unrelated services to communicate
            broadly. The correct design begins with mission dependencies,
            service identity, data sensitivity, administration, support,
            evidence, failure, and recovery.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak segmentation decision
              </p>
              <p className="mt-2 leading-7">
                “Block everything between all services, then add exceptions
                whenever something breaks.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong segmentation decision
              </p>
              <p className="mt-2 leading-7">
                “Approve only documented fictional communication based on
                mission purpose, identity, source, destination, service,
                environment, state, evidence, owner, failure behavior, and
                review.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Segmentation should reduce blast radius and unnecessary trust without
            creating unsafe outages, hidden bypasses, unmanageable policy, or
            emergency exceptions that become permanent.
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
          title="Segmentation Shapes Blast Radius, Accountability, Visibility, and Recovery"
        >
          <p className="leading-8">
            Fictional segmentation decisions determine which users, devices,
            services, workloads, suppliers, administrators, monitoring systems,
            wireless classes, and recovery roles can communicate. Poorly
            designed segmentation may allow unnecessary reachability, hide
            shadow paths, block legitimate mission work, weaken evidence, or
            fail during recovery.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Trust reduction",
                "Limit fictional communication to approved purpose, identity, destination, service, state, and owner conditions.",
              ],
              [
                "Blast-radius control",
                "Prevent one unsafe service, identity, error, supplier condition, or control failure from affecting unrelated assets.",
              ],
              [
                "Operational confidence",
                "Design evidence, exceptions, failure behavior, support, degraded modes, and recovery with the policy.",
              ],
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

        <SectionCard eyebrow="Core Framework" title="The S-E-G-M-E-N-T Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "S — Scope the mission",
                "Define fictional users, services, data, identities, suppliers, administration, evidence, wireless, and recovery outcomes.",
              ],
              [
                "E — Enumerate communication",
                "List every required source, destination, service, purpose, state, owner, and dependency.",
              ],
              [
                "G — Group by trust and purpose",
                "Create understandable fictional zones and service groups based on mission, identity, sensitivity, administration, and recovery.",
              ],
              [
                "M — Match policy to context",
                "Use zone, service, workload, identity, application, supplier, administrative, or recovery policy where justified.",
              ],
              [
                "E — Establish evidence",
                "Define allow, deny, exception, source-health, failure, review, and recovery evidence.",
              ],
              [
                "N — Note exceptions and failure",
                "Document fictional temporary needs, compensating controls, safe defaults, degraded modes, expiration, and residual risk.",
              ],
              [
                "T — Test and trace",
                "Use invented cases to trace policy from mission through identity, path, decision, evidence, outcome, and review.",
              ],
              [
                "T — Tune and retire",
                "Maintain owners, versions, usage evidence, review dates, triggers, stale references, and retirement decisions.",
              ],
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
              Decision-ready segmentation statement
            </p>
            <p className="mt-2 leading-7">
              This fictional segmentation design permits only approved
              communication needed for the mission. Each relationship is tied to
              a source, destination, identity, service, purpose, state, owner,
              evidence source, exception process, failure mode, recovery plan,
              residual risk, and review trigger.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Segmentation and Microsegmentation"
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
            Apply Ten Segmentation Principles
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
          title="Compare Eight Segmentation Layers"
        >
          <p className="leading-8">
            Macrosegmentation and microsegmentation are not opponents. A mature
            fictional design often combines broad zones with finer service,
            workload, identity, application, administrative, supplier, and
            recovery controls.
          </p>

          <div className="mt-6 grid gap-5">
            {segmentationLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.layer}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Strengths", item.strengths],
                    ["Limits", item.limits],
                    ["Evidence", item.evidence],
                    ["Strongest when", item.strongestWhen],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.layer}-${label}`}
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
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evaluate Ten Policy Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {policyDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Decision question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strongEvidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Warning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.warning}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Use Eight Defensive Policy Patterns"
        >
          <div className="grid gap-5">
            {policyPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.pattern}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Objective", item.objective],
                    ["Preferred fictional context", item.preferredContext],
                    ["Avoid", item.avoid],
                    ["Failure behavior", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.pattern}-${label}`}
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
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Macrosegmentation and Microsegmentation Are Complementary"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Comparison area",
                    "Macrosegmentation",
                    "Microsegmentation",
                    "Combined decision",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  [
                    "Primary unit",
                    "Major fictional zone or trust area.",
                    "Service, workload, identity, or application component.",
                    "Use broad boundaries plus finer policy where risk and mission justify it.",
                  ],
                  [
                    "Policy context",
                    "Source zone, destination zone, service, and owner.",
                    "Service identity, workload identity, application role, object, state, or environment.",
                    "Keep one traceable communication record across layers.",
                  ],
                  [
                    "Operational complexity",
                    "Often easier to understand and maintain.",
                    "Potentially more precise but more dependent on identity, policy distribution, ownership, and evidence.",
                    "Choose the least complexity that achieves the required risk reduction.",
                  ],
                  [
                    "Blast-radius reduction",
                    "Limits broad movement between major trust areas.",
                    "Limits movement among services or workloads inside one area.",
                    "Measure fictional affected assets and failure domains, not policy count.",
                  ],
                  [
                    "Evidence",
                    "Zone-boundary allow, deny, exception, and source-health records.",
                    "Service, workload, identity, application, policy-version, and decision records.",
                    "Correlate evidence across layers and document blind spots.",
                  ],
                  [
                    "Failure risk",
                    "A zone control failure may affect many services.",
                    "A policy or identity failure may create many small outages or broad fallback.",
                    "Design safe failure, degraded modes, alternate evidence, and recovery.",
                  ],
                  [
                    "Change management",
                    "Changes often follow architecture and zone relationships.",
                    "Changes may follow deployment, scaling, identity, service, or application updates.",
                    "Use shared ownership, versioning, testing, and review triggers.",
                  ],
                  [
                    "Best use",
                    "Clear separation of public, data, administration, supplier, wireless, monitoring, and recovery.",
                    "High-value service-to-service, administrative, supplier, or sensitive workload communication.",
                    "Combine according to mission, risk, maintainability, and evidence maturity.",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-4 align-top leading-6 text-slate-300"
                      >
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
          eyebrow="Instructional Section 6"
          title="Design Exceptions, Failure, and Recovery with the Policy"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Temporary migration",
                "Define fictional source, destination, service, data, owner, approval, usage evidence, expiration, rollback, and closure.",
                "Do not convert a temporary dependency into permanent broad access.",
              ],
              [
                "Support exception",
                "Define fictional support identity, device, assigned case, destination, purpose, time, evidence, review, and revocation.",
                "Do not grant general administrative access because one support action is difficult.",
              ],
              [
                "Supplier support",
                "Define fictional supplier identity, approved destination, session evidence, approval, data limits, duration, and owner.",
                "Do not let supplier troubleshooting bypass normal ownership and evidence.",
              ],
              [
                "Identity outage",
                "Define which fictional communication stops, continues safely limited, or moves to independently approved emergency access.",
                "Do not fail broadly open or block every recovery function without planning.",
              ],
              [
                "Policy-service outage",
                "Define fictional cached decisions, limited fallback, blocked high-impact actions, alerting, evidence, and restoration.",
                "Do not assume the policy engine is always available or correct.",
              ],
              [
                "Monitoring outage",
                "Mark fictional blind periods, preserve alternate evidence, restrict high-risk changes, and reassess dependent decisions.",
                "Do not treat missing evidence as proof of normal behavior.",
              ],
              [
                "Recovery operation",
                "Use fictional recovery identity, destination, order, approval, time limit, evidence, reconciliation, revocation, and closure.",
                "Do not make emergency segmentation a permanent bypass.",
              ],
              [
                "Policy retirement",
                "Confirm fictional service retirement, dependency removal, usage evidence, owner approval, rollback, and documentation update.",
                "Do not leave unused destination groups or stale references.",
              ],
            ].map(([title, design, caution]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {design}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6">{caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Segmentation View"
          title="Northbridge Layered Segmentation Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It shows policy relationships and evidence needs
            without real addresses, routes, devices, rules, ports, wireless
            identifiers, DNS records, vendors, or configuration steps.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Public access group", "Student users and approved portal functions"],
                ["Wireless classes", "Managed, employee, guest, and service-device contexts"],
                ["Remote-access groups", "Support, infrastructure, supplier, and recovery identities"],
                ["Supplier group", "Minimized request and validated result communication"],
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
                Fictional Northbridge Segmentation Layers
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Portal services", "Public-facing identity and request policy"],
                  ["Workflow services", "Service-to-service and state policy"],
                  ["Sensitive data", "Object, operation, purpose, and recovery policy"],
                  ["Supplier integration", "External identity, schema, and queue policy"],
                  ["Administration", "Identity, device, destination, time, and approval policy"],
                  ["Monitoring", "Evidence-source and analyst-access policy"],
                  ["Wireless", "User, device, class, destination, and lifecycle policy"],
                  ["Recovery", "Trigger, identity, destination, order, evidence, and revocation"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Identity context", "Human, device, service, workload, supplier, and recovery"],
                ["Application context", "Purpose, operation, object, state, and environment"],
                ["Evidence context", "Decision, source health, exception, correlation, and review"],
                ["Lifecycle context", "Owner, approval, expiration, change, rollback, and retirement"],
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
          title="Fake Northbridge Segmentation Dashboard"
          subtitle="Fictional communication, exception, evidence, ownership, and validation status for training only."
          metrics={[
            {
              label: "Documented communication relationships",
              value: "31",
              note: "Twenty-six are approved, three are conditional, and two are unvalidated temporary paths.",
            },
            {
              label: "Policies lacking independent evidence",
              value: "5",
              note: "Three service-to-service and two recovery relationships rely on incomplete or shared sources.",
            },
            {
              label: "Exceptions past review date",
              value: "2",
              note: "Migration and supplier-support exceptions require fictional owner validation.",
            },
          ]}
        />

        <FakeAlertCard
          title="Temporary Migration Exception Has Become Permanent"
          severity="High"
          time="2:18 PM"
          source="Fake Northbridge Segmentation Assurance Console"
          details="The fictional application-to-management communication exception remains open after migration completion. No current owner, usage evidence, expiration, compensating control review, or closure decision is attached."
          recommendation="Mark the exception Unvalidated. Assign a fictional owner, review supplied usage and dependency evidence, define residual risk and rollback, and make an authorized retain, restrict, or retire decision."
        />

        <FakeLogPanel
          title="Fake Segmentation Review Timeline"
          logs={[
            "09:00 OBJECTIVE blast-radius='reduce' mission='student-support'",
            "09:08 GROUP public-access owner='portal-team'",
            "09:16 GROUP workflow owner='application-team'",
            "09:24 GROUP data owner='data-team'",
            "09:32 GROUP supplier owner='integration-team'",
            "09:40 GROUP administration owner='infrastructure-team'",
            "09:48 GROUP evidence owner='monitoring-team'",
            "09:56 GROUP wireless owner='network-team'",
            "10:04 GROUP recovery owner='continuity-team'",
            "10:12 RELATIONSHIP documented='31'",
            "10:20 RELATIONSHIP approved='26'",
            "10:28 RELATIONSHIP conditional='3'",
            "10:36 RELATIONSHIP unvalidated='2'",
            "10:44 EVIDENCE independent='26-of-31'",
            "10:52 EXCEPTION expired='2'",
            "11:00 FAILURE identity-outage='reviewed'",
            "11:08 FAILURE policy-service='partial'",
            "11:16 RECOVERY segmentation='conditional'",
            "11:24 CONFIDENCE design='moderate'",
            "14:18 ALERT issue='migration-exception-expired'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Segmentation Evidence Supports—and What It Does Not Prove
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
                    ["Segmentation use", item.use],
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

        <AnalyzeEvidenceCard
          title="Which Segmentation Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional temporary migration exception?"
          evidence={[
            "The fictional migration project is complete.",
            "The application-to-management exception remains documented as open.",
            "Current owner, usage, purpose, dependencies, and expiration are unknown.",
            "No supplied evidence proves the path is active, necessary, unsafe, or misused.",
            "The path could affect administrative separation and blast radius.",
            "Immediate removal could disrupt an undocumented dependency.",
            "Keeping the exception indefinitely would preserve unreviewed access.",
            "Overall segmentation confidence is Moderate.",
          ]}
          options={[
            "Mark the exception Unvalidated, assign an owner, review only supplied fictional usage and dependency evidence, define rollback and residual risk, then authorize a retain, restrict, or retire decision with closure criteria.",
            "Delete the path immediately because migration is complete.",
            "Keep it permanently because no known problem occurred.",
            "Assume the path is being abused and begin an incident response.",
          ]}
          bestAnswer={0}
          explanation="The first option preserves mission safety and uncertainty while requiring evidence, ownership, expiration, rollback, residual-risk review, and an authorized lifecycle decision."
        />

        <SectionCard
          eyebrow="Segmentation Defects"
          title="Ten Problems That Weaken Policy Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {defects.map((item) => (
              <article
                key={item.defect}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.defect}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Decision impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Segmentation Decision Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, scan, map, capture, test, configure, bypass, reroute, block,
            investigate, monitor, recover, or change any real network, device,
            service, account, wireless system, DNS service, gateway, firewall,
            sensor, or organizational infrastructure.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Microsegmentation Breaks a Critical Workflow"
          scenario="The fictional team applies a new service-to-service policy. Student requests reach the workflow service, but notification updates stop because an undocumented dependency was not included."
          choices={[
            {
              label: "Choice A",
              response:
                "Move the fictional workflow into a controlled degraded state, preserve evidence, validate the dependency and owner, update the communication matrix, test the corrected policy with invented data, and document the review trigger.",
              outcome:
                "Best defensive choice. It restores the mission through a controlled, evidence-aware change rather than broad bypass.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow all application-zone communication permanently.",
              outcome:
                "Weak. A broad bypass abandons the segmentation objective and may expand blast radius.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the notification failure because core processing still works.",
              outcome:
                "Weak. User communication is part of the fictional mission and may affect trust and duplicate actions.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Identity Service Failure Triggers Broad Fallback"
          scenario="The fictional identity-aware policy service becomes unavailable. A proposed fallback would allow every internal service to communicate until identity returns."
          choices={[
            {
              label: "Choice A",
              response:
                "Use a fictional safe limited fallback: preserve only pre-approved critical relationships, block high-impact administrative changes, alert owners, use alternate evidence, communicate degraded status, and restore normal policy through validation.",
              outcome:
                "Best choice. It protects mission continuity without turning a control outage into broad trust expansion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow everything internally because the outage is temporary.",
              outcome:
                "Weak. Temporary broad trust can create significant blast radius and weak accountability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Block every service, including recovery and safety-related communication, with no degraded plan.",
              outcome:
                "Weak. Unplanned fail-closed behavior can cause unnecessary mission and recovery harm.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design Proportionate Segmentation under Conflicting Constraints"
        >
          <p className="leading-8">
            Fictional leadership wants stronger east-west control but refuses a
            design that causes frequent outages or requires constant manual
            exceptions. The application team has dynamic workloads, the support
            team needs bounded administration, the supplier needs one result
            path, and recovery needs emergency reachability.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Use broad zones first",
                "Separate fictional public, application, data, supplier, administration, monitoring, wireless, and recovery trust areas.",
              ],
              [
                "Apply microsegmentation selectively",
                "Use finer service or identity policy for sensitive data, supplier results, administration, and recovery.",
              ],
              [
                "Preserve dynamic operation",
                "Rely on fictional service identity, environment, owner, and application role instead of location alone.",
              ],
              [
                "Design safe failure",
                "Define limited fallback, blocked high-impact actions, alternate evidence, degraded status, and recovery.",
              ],
              [
                "Govern exceptions",
                "Use narrow scope, approval, owner, evidence, expiration, compensating controls, and closure.",
              ],
              [
                "Measure success",
                "Track reduced unnecessary relationships, fewer broad policies, stable mission outcomes, explainable denials, and reviewed residual risk.",
              ],
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
              Produce a fictional segmentation architecture, communication
              matrix, enforcement-layer decision, administrative and recovery
              policy groups, exception register, evidence plan, safe-failure
              design, validation matrix, residual-risk statement, and leadership
              explanation of why the design is proportionate.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Segmentation and Microsegmentation Checklist"
          items={[
            "I can explain segmentation as trust reduction and blast-radius control rather than simply creating more zones.",
            "I can distinguish macrosegmentation, microsegmentation, identity-aware, workload-aware, application-aware, administrative, supplier, and recovery policy.",
            "I can begin with fictional mission dependencies and required communication.",
            "I can write a source-to-destination communication matrix with purpose, identity, service, state, owner, evidence, exception, failure, and review fields.",
            "I can separate reachability from authorization and application action.",
            "I can identify undersegmentation, oversegmentation, shadow paths, policy drift, and permanent temporary exceptions.",
            "I can design policy evidence covering allow, deny, exception, source health, failure, recovery, and review.",
            "I can govern administrative and supplier communication with stronger identity, destination, approval, evidence, expiration, and revocation.",
            "I can design safe fail-open, fail-limited, fail-closed, degraded, and recovery behavior conceptually.",
            "I can validate fictional policy using invented allow, deny, delay, identity-change, supplier, administrative, wireless, and recovery cases.",
            "I can assign owners, versions, expiration, usage evidence, review triggers, findings, and retirement decisions.",
            "I can create a completely fictional segmentation artifact without using real addresses, routes, rules, ports, identities, DNS records, wireless names, logs, suppliers, or internal diagrams.",
          ]}
        />

        <MiniQuiz
          title="A4.2 Mini Quiz: Segmentation and Microsegmentation Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Segmentation and Microsegmentation Decision Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, current state, future state, at least eight macrosegmentation zones, at least twelve microsegmentation groups, at least thirty communication relationships, source, destination, identity, service, operation, purpose, environment, state, time, owner, evidence, source health, exception, expiration, failure behavior, recovery, administrative policy, supplier policy, wireless policy, monitoring policy, recovery policy, shared dependencies, shadow-path review, undersegmentation analysis, oversegmentation analysis, exception register, validation cases, findings, completion criteria, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, zone, identity, service, path, policy, exception, record, owner, date, decision, and outcome is invented."
          tips={[
            "Start from fictional mission and required communication rather than from a product or rule list.",
            "Combine broad zones with finer service, identity, workload, application, administrative, supplier, and recovery controls only where justified.",
            "Design evidence, source health, exceptions, failure behavior, degraded modes, recovery, and lifecycle with the policy.",
            "Use the least complexity that produces the needed trust reduction and blast-radius control.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Firewall Strategy and Rule Hygiene?"
        >
          <p className="leading-8">
            Before moving to A4.3, rate your readiness from 1 to 5 for mission
            communication, macrosegmentation, microsegmentation, policy context,
            identity, evidence, exceptions, safe failure, recovery, ownership,
            validation, maintenance, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why more segmentation is not automatically better segmentation.",
              "I can choose between broad zone separation and finer service or identity policy.",
              "I can document every fictional communication relationship before designing enforcement.",
              "I can identify where address-only policy is too weak and where microsegmentation would be unnecessarily complex.",
              "I can create bounded administrative, supplier, wireless, monitoring, and recovery policy groups.",
              "I can explain how identity or policy-service failure affects segmentation decisions.",
              "I can govern temporary exceptions and stale references through evidence and lifecycle review.",
              "I can produce a safe fictional segmentation package without copying, modifying, or exposing real network policy.",
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
            Record one fictional relationship you narrowed, one policy you kept
            broad for maintainability, one exception you expired, one failure
            mode you redesigned, one residual risk, and one question you will
            carry into A4.3.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Segmentation reduces fictional unnecessary trust and blast radius while preserving required mission communication.",
            "Macrosegmentation creates broad trust boundaries; microsegmentation creates finer policy among services, workloads, identities, or application components.",
            "A strong policy considers mission purpose, identity, destination, service, object, environment, state, time, evidence, owner, and lifecycle.",
            "Reachability does not prove authorization, semantic validity, or safe business action.",
            "Undersegmentation expands trust, while oversegmentation can create outages, complexity, exceptions, and unsafe workarounds.",
            "Administrative, supplier, wireless, monitoring, and recovery communication require distinct policy and evidence.",
            "Temporary exceptions need purpose, narrow scope, approval, owner, evidence, compensating controls, expiration, rollback, residual risk, and closure.",
            "Segmentation controls need planned fail-open, fail-limited, fail-closed, degraded, and recovery behavior.",
            "Policy effectiveness depends on evidence, source health, validation, review, versioning, and retirement.",
            "Every CyberShield segmentation artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, translate fictional communication requirements into a
            maintainable firewall strategy with rule purpose, source,
            destination, service, ownership, approval, evidence, exceptions,
            expiration, cleanup, validation, and retirement.
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