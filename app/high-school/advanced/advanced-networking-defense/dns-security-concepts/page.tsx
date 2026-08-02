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
const previousLesson = `${modulePath}/network-baselines-and-anomaly-concepts`;
const nextLesson = `${modulePath}/network-resilience-and-redundancy`;

const objectives = [
  "Explain fictional DNS as a critical naming, service-discovery, policy, evidence, privacy, availability, supplier, and recovery dependency rather than a simple address-lookup feature.",
  "Differentiate fictional recursive resolution, authoritative naming, zones, records, caching, validation, policy, logging, ownership, change control, and recovery responsibilities.",
  "Evaluate fictional DNS evidence involving stale records, unexpected resolution, resolver changes, cache behavior, source-health gaps, policy differences, and service impact without assuming malicious intent.",
  "Design fictional DNS governance covering approved resolvers, naming zones, record ownership, least privilege, change approval, monitoring, privacy, resilience, safe failure, rollback, and lifecycle review.",
  "Create a portfolio-ready fictional DNS governance, visibility, resilience, and change-review package with evidence limits, owners, validation cases, residual risk, and recovery criteria.",
];

const vocabulary = [
  [
    "Domain Name System concept",
    "A fictional distributed naming and service-discovery system that helps approved users, devices, and services locate named resources through governed queries and responses.",
  ],
  [
    "DNS namespace",
    "The fictional organized collection of approved names and delegated naming responsibilities used by an environment.",
  ],
  [
    "Zone",
    "A fictional administrative portion of a namespace with defined ownership, records, change control, evidence, availability, and recovery responsibilities.",
  ],
  [
    "Record",
    "A fictional naming statement that maps a name or service label to approved information such as a service destination, alias, mail role, delegation, or policy-related value.",
  ],
  [
    "Authoritative service",
    "A fictional naming service responsible for answering from an approved zone's governed record set.",
  ],
  [
    "Recursive resolver",
    "A fictional service that accepts approved naming questions from users or services, follows the resolution process conceptually, applies policy, and returns a result.",
  ],
  [
    "Forwarding resolver",
    "A fictional resolver that sends approved questions to another designated resolver according to policy and availability design.",
  ],
  [
    "Stub resolver concept",
    "A fictional client-side naming component that sends questions to an approved recursive resolver rather than resolving the full naming chain itself.",
  ],
  [
    "Delegation",
    "A fictional governance decision assigning responsibility for part of a namespace to another approved authoritative service or owner.",
  ],
  [
    "Caching",
    "The fictional temporary storage of naming answers to improve performance and reduce repeated dependency work.",
  ],
  [
    "Time-to-live concept",
    "A fictional duration indicating how long a cached naming answer may be reused before fresh resolution is expected.",
  ],
  [
    "Negative caching concept",
    "The fictional temporary storage of a valid response indicating that a requested name or record was not found.",
  ],
  [
    "Record owner",
    "The fictional role accountable for the business purpose, correctness, lifecycle, evidence, and retirement of one naming record or group.",
  ],
  [
    "Zone owner",
    "The fictional role accountable for the governance, availability, delegation, change, monitoring, recovery, and retirement of a naming zone.",
  ],
  [
    "Resolver policy",
    "A fictional set of approved decisions governing which identities or network classes may ask which naming questions, how responses are handled, and what evidence is retained.",
  ],
  [
    "Split-view concept",
    "A fictional design in which different approved audiences may receive different naming answers according to documented purpose and governance.",
  ],
  [
    "Validation concept",
    "A fictional process that checks whether a naming answer, record set, change, source, or chain of responsibility meets approved integrity expectations.",
  ],
  [
    "DNSSEC concept",
    "A conceptual integrity mechanism using signed naming data to help validate that certain responses align with the published authoritative data; it does not encrypt queries or guarantee that a service itself is safe.",
  ],
  [
    "Encrypted DNS concept",
    "A conceptual method of protecting naming queries in transit between an approved client and resolver; it does not automatically prove resolver trust, answer correctness, policy compliance, or service safety.",
  ],
  [
    "DNS logging",
    "Fictional evidence describing approved requester groups, resolver, question category, response category, timing, policy result, source health, change, and correlation.",
  ],
  [
    "Resolver source health",
    "Fictional evidence about resolver availability, freshness, response timing, policy version, clock, logging, upstream dependencies, and blind periods.",
  ],
  [
    "Stale record",
    "A fictional record that may no longer match the current service, owner, destination, environment, supplier, or mission requirement.",
  ],
  [
    "Unexpected resolution",
    "A fictional naming answer that differs from the approved expectation and requires validation of records, caches, resolvers, policy, change, source health, and service context.",
  ],
  [
    "DNS review trigger",
    "A fictional event requiring revalidation, such as service, owner, supplier, resolver, zone, record, architecture, segmentation, remote-access, wireless, monitoring, or recovery change.",
  ],
];

const principles = [
  {
    principle: "Treat DNS as critical infrastructure",
    description:
      "Fictional services may depend on naming for identity, applications, suppliers, notifications, monitoring, updates, administration, and recovery.",
    strongPractice:
      "Map naming dependencies alongside routing, identity, firewall, application, and recovery dependencies.",
    failure:
      "A naming failure can appear as a network, application, supplier, or identity outage.",
  },
  {
    principle: "Assign clear ownership",
    description:
      "Every fictional zone, record, resolver, policy, exception, delegation, and recovery path should have an accountable owner.",
    strongPractice:
      "The notification service owner approves its service name, while the DNS owner governs the zone and change process.",
    failure:
      "Stale or conflicting records can remain because no role owns the decision.",
  },
  {
    principle: "Separate names from service safety",
    description:
      "A fictional name resolving successfully does not prove the destination is authorized, healthy, available, or safe.",
    strongPractice:
      "Correlate naming evidence with service identity, network policy, application state, change, and owner approval.",
    failure:
      "Successful resolution may be mistaken for complete service assurance.",
  },
  {
    principle: "Govern every change",
    description:
      "Fictional records, delegations, resolvers, forwarders, policies, caching behavior, and recovery values should follow approved change control.",
    strongPractice:
      "Document purpose, owner, old value, new value, expected effect, validation, rollback, expiration, and closure.",
    failure:
      "A small naming change can redirect many dependent services or create difficult-to-explain outages.",
  },
  {
    principle: "Design caching deliberately",
    description:
      "Fictional caching improves performance and resilience but can extend outdated or incorrect answers.",
    strongPractice:
      "Choose cache duration according to service stability, change frequency, recovery needs, and validation capability.",
    failure:
      "A corrected record may not immediately remove a stale answer from all approved caches.",
  },
  {
    principle: "Measure resolver and evidence health",
    description:
      "Fictional defenders need to know whether resolvers, authoritative services, collectors, clocks, policies, and upstream dependencies are current and available.",
    strongPractice:
      "Track response health, freshness, policy version, event timing, queue age, logging, and blind periods.",
    failure:
      "A Green resolver dashboard may hide stale answers or incomplete evidence.",
  },
  {
    principle: "Protect privacy",
    description:
      "Fictional naming evidence can reveal service interests, user activity patterns, device roles, and internal dependencies.",
    strongPractice:
      "Collect minimized requester group, question category, policy result, source health, and correlation fields when exact content is unnecessary.",
    failure:
      "Over-collection can create confidentiality, retention, access, and trust risk.",
  },
  {
    principle: "Validate unexpected answers carefully",
    description:
      "A fictional unexpected resolution supports questions about records, caches, resolver policy, change, delegation, source health, and service impact.",
    strongPractice:
      "Preserve uncertainty and compare approved authoritative, recursive, cache, change, and application evidence.",
    failure:
      "Teams may assume manipulation or ignore a real governance problem without sufficient evidence.",
  },
  {
    principle: "Design safe failure and recovery",
    description:
      "Fictional resolver, authoritative, policy, logging, network, identity, supplier, or recovery dependencies may fail.",
    strongPractice:
      "Define approved degraded behavior, alternate services, cache limits, communication, rollback, validation, reconciliation, and closure.",
    failure:
      "Broad fallback can weaken policy, while unplanned fail-closed behavior can stop critical services.",
  },
  {
    principle: "Maintain the complete lifecycle",
    description:
      "Fictional naming requires request, approval, implementation, validation, operation, monitoring, recertification, retirement, recovery, and historical evidence.",
    strongPractice:
      "Review records after service, supplier, owner, architecture, environment, or recovery change.",
    failure:
      "Naming debt grows when records and delegations are treated as permanent.",
  },
];

const dnsRoles = [
  {
    role: "Client or stub resolver",
    purpose:
      "Represent the fictional user, device, or service component that requests a naming answer from an approved resolver.",
    ownerQuestions:
      "Which identity or device class may ask, which resolver is approved, and what application depends on the answer?",
    evidence:
      "Requester group, device or service identity, resolver selection, question category, timing, policy result, and source health.",
    limitations:
      "Client evidence alone does not prove the authoritative answer, cache state, destination safety, or service outcome.",
    recovery:
      "Use an approved alternate resolver or degraded workflow only under documented policy and validation.",
  },
  {
    role: "Recursive resolver",
    purpose:
      "Provide fictional resolution, caching, policy evaluation, forwarding, evidence, availability, and response behavior.",
    ownerQuestions:
      "Who owns the resolver, which clients may use it, which upstream relationships apply, and what happens during failure?",
    evidence:
      "Resolver identity, requester group, query category, response category, cache state, policy result, latency, source health, and upstream status.",
    limitations:
      "A response from an approved resolver does not prove that the destination service is authorized or healthy.",
    recovery:
      "Fail over only to approved resolvers with known policy, evidence, privacy, capacity, and validation behavior.",
  },
  {
    role: "Authoritative naming service",
    purpose:
      "Answer fictional questions from the approved zone data and delegation structure.",
    ownerQuestions:
      "Which zone is served, who owns the data, how is it changed, validated, replicated, monitored, and recovered?",
    evidence:
      "Zone version, record set, delegation, change, publication state, response health, source health, and recovery status.",
    limitations:
      "Authoritative publication does not prove every cache has refreshed or every client uses the intended resolver.",
    recovery:
      "Restore approved zone data, validate version and delegation, then confirm dependent service behavior.",
  },
  {
    role: "Zone owner",
    purpose:
      "Govern fictional namespace purpose, delegation, record standards, approvals, evidence, availability, and lifecycle.",
    ownerQuestions:
      "Which teams may request records, what approval is required, and which changes trigger review?",
    evidence:
      "Zone charter, owner, approvers, record inventory, delegations, exceptions, review dates, and recovery plan.",
    limitations:
      "Governance documentation does not prove current implementation or healthy resolution.",
    recovery:
      "Coordinate record restoration, owner validation, dependency communication, and closure.",
  },
  {
    role: "Record owner",
    purpose:
      "Confirm the fictional business purpose, destination, environment, service, supplier, and lifecycle of a record.",
    ownerQuestions:
      "Is the record still needed, does it point to the intended service, and when should it change or retire?",
    evidence:
      "Service catalog, owner approval, destination mapping, environment, change history, usage context, and retirement criteria.",
    limitations:
      "An owner statement does not prove resolver behavior or cache freshness.",
    recovery:
      "Approve corrected values, expected propagation behavior, rollback, and service validation.",
  },
  {
    role: "DNS policy owner",
    purpose:
      "Govern fictional resolver access, filtering, logging, privacy, exceptions, encrypted-query handling, and degraded behavior.",
    ownerQuestions:
      "Which requester groups, question categories, responses, exceptions, and evidence are approved?",
    evidence:
      "Policy version, approval, requester groups, decision results, exceptions, source health, and review history.",
    limitations:
      "A policy document does not prove every resolver enforces the current version.",
    recovery:
      "Restore policy distribution, validate effective outcomes, reconcile exceptions, and communicate limitations.",
  },
  {
    role: "Monitoring and evidence owner",
    purpose:
      "Maintain fictional DNS visibility, source health, alerting, privacy, retention, correlation, and blind-period records.",
    ownerQuestions:
      "Which defender questions must be answered, which fields are necessary, and how is source health verified?",
    evidence:
      "Collector health, event freshness, schema, queue age, clock, alert provenance, access, retention, and deletion.",
    limitations:
      "Missing or delayed logs do not prove naming behavior was normal or harmful.",
    recovery:
      "Restore evidence collection, identify blind periods, use alternate sources, and reassess prior decisions.",
  },
  {
    role: "Recovery owner",
    purpose:
      "Coordinate fictional naming restoration, dependency order, alternate resolvers, record validation, service checks, and closure.",
    ownerQuestions:
      "Which services require naming first, which records and zones are critical, and how is correctness proven?",
    evidence:
      "Recovery trigger, approved source, zone version, resolver state, dependency gates, validation, reconciliation, communication, and closure.",
    limitations:
      "A resolver answering does not prove all services receive correct answers or that caches are current.",
    recovery:
      "Restore in dependency order and validate both naming and business outcomes.",
  },
];

const recordCategories = [
  {
    category: "Service destination record",
    purpose:
      "Allow a fictional name to identify the approved destination for an application or infrastructure service.",
    owner:
      "Service owner confirms purpose and destination; DNS owner governs publication and lifecycle.",
    evidence:
      "Name, service, environment, destination group, owner, approval, change, validation, source health, and retirement.",
    risks:
      "Stale destination, wrong environment, unowned service, conflicting cache, or undocumented dependency.",
    review:
      "Revalidate after service migration, environment change, supplier change, ownership change, or retirement.",
  },
  {
    category: "Alias record",
    purpose:
      "Allow a fictional friendly or transitional name to refer to another approved name.",
    owner:
      "Application owner confirms the alias purpose and target; zone owner controls naming standards.",
    evidence:
      "Alias, target name, purpose, environment, owner, change, chain review, validation, and expiration.",
    risks:
      "Long alias chains, stale targets, hidden dependencies, circular design, or permanent migration aliases.",
    review:
      "Revalidate after target change and remove temporary aliases after transition.",
  },
  {
    category: "Mail-routing record concept",
    purpose:
      "Identify fictional approved services responsible for receiving organizational messages.",
    owner:
      "Messaging owner confirms service relationship; DNS owner manages publication and evidence.",
    evidence:
      "Service role, priority concept, supplier relationship, owner, change, validation, policy, and recovery.",
    risks:
      "Stale supplier relationship, incorrect priority, incomplete change, or missing recovery dependency.",
    review:
      "Revalidate after messaging, supplier, continuity, or ownership changes.",
  },
  {
    category: "Service-discovery record concept",
    purpose:
      "Help fictional clients discover an approved service and its role.",
    owner:
      "Service owner confirms discovery behavior; zone owner controls publication.",
    evidence:
      "Service role, environment, target group, owner, approval, validation, clients, and lifecycle.",
    risks:
      "Unexpected target, wrong environment, undocumented client dependency, or stale discovery data.",
    review:
      "Revalidate after application, environment, identity, or service-topology change.",
  },
  {
    category: "Delegation record concept",
    purpose:
      "Assign fictional naming responsibility for a sub-area to an approved authoritative owner.",
    owner:
      "Parent-zone owner approves delegation; delegated-zone owner accepts operational responsibility.",
    evidence:
      "Scope, parent, child owner, authoritative services, approval, validation, availability, and recovery.",
    risks:
      "Orphaned delegation, ownership conflict, unavailable authority, stale relationship, or incomplete evidence.",
    review:
      "Revalidate after owner, supplier, authority, architecture, or contract change.",
  },
  {
    category: "Validation-support record concept",
    purpose:
      "Publish fictional information used to support integrity validation of approved zone data.",
    owner:
      "Zone and integrity-policy owners coordinate publication, rollover, evidence, and recovery.",
    evidence:
      "Zone version, validation state, approved material, change, publication, monitoring, and recovery.",
    risks:
      "Expired or inconsistent validation data, failed rollover, incomplete chain, or false assurance.",
    review:
      "Review before and after every planned integrity-material change.",
  },
  {
    category: "Policy-support record concept",
    purpose:
      "Publish fictional information that helps approved services apply messaging, verification, or other naming-related policy.",
    owner:
      "Business control owner defines policy; DNS owner manages record publication and change.",
    evidence:
      "Policy purpose, scope, owner, approved value, change, validation, consumers, and review date.",
    risks:
      "Stale policy, syntax mismatch, unsupported interpretation, conflicting owners, or incomplete rollout.",
    review:
      "Revalidate after policy, service, supplier, or application change.",
  },
  {
    category: "Reverse-mapping record concept",
    purpose:
      "Provide fictional reverse naming context for approved infrastructure, evidence, support, or service operations.",
    owner:
      "Infrastructure owner confirms purpose; DNS owner governs record correctness and lifecycle.",
    evidence:
      "Infrastructure identity, reverse name, owner, environment, change, validation, and monitoring.",
    risks:
      "Misleading identity, stale infrastructure, wrong environment, or unsupported trust assumptions.",
    review:
      "Revalidate after infrastructure replacement, address-plan change, or service retirement.",
  },
];

const governanceDimensions = [
  {
    dimension: "Mission and service purpose",
    question:
      "Which fictional user, application, supplier, administrative, monitoring, or recovery workflow depends on this name?",
    strongEvidence:
      "Service catalog, application flow, owner approval, dependency map, and business impact.",
    warning:
      "A record should not remain only because it has existed for a long time.",
  },
  {
    dimension: "Zone and record ownership",
    question:
      "Who owns the fictional zone, record purpose, destination, change, evidence, and retirement?",
    strongEvidence:
      "Named zone owner, record owner, control owner, approver, recovery owner, and review date.",
    warning:
      "Shared team ownership can leave stale records unresolved.",
  },
  {
    dimension: "Resolver trust",
    question:
      "Which fictional resolvers are approved for each user, device, service, remote-access, wireless, supplier, and recovery context?",
    strongEvidence:
      "Resolver inventory, client policy, forwarding relationship, privacy, source health, capacity, and failover.",
    warning:
      "An alternate resolver may return answers but apply different policy, evidence, or privacy behavior.",
  },
  {
    dimension: "Record correctness",
    question:
      "Does the fictional record match the intended service, environment, destination, owner, and lifecycle?",
    strongEvidence:
      "Current service catalog, destination mapping, approval, change record, validation, and owner confirmation.",
    warning:
      "Successful resolution does not prove the record is correct.",
  },
  {
    dimension: "Caching and freshness",
    question:
      "How long may a fictional answer remain cached, and how will defenders recognize stale or inconsistent answers?",
    strongEvidence:
      "Cache-duration rationale, change plan, resolver state, validation cases, source health, and recovery procedure.",
    warning:
      "Changing an authoritative record may not update every cache immediately.",
  },
  {
    dimension: "Change and rollback",
    question:
      "How is a fictional naming change approved, tested, released, observed, reversed, and closed?",
    strongEvidence:
      "Request, old value, new value, owner, approver, expected effect, validation, monitoring, rollback, and closure.",
    warning:
      "DNS changes can affect many dependent services at once.",
  },
  {
    dimension: "Visibility and source health",
    question:
      "Which fictional queries, answers, policy results, errors, resolver states, changes, and failures can defenders explain?",
    strongEvidence:
      "Minimized logs, resolver health, authoritative health, policy version, event freshness, queue age, clock, and blind periods.",
    warning:
      "Missing evidence does not prove normal or harmful behavior.",
  },
  {
    dimension: "Privacy",
    question:
      "Which fictional naming evidence is necessary, who may access it, and how long is it retained?",
    strongEvidence:
      "Purpose, field minimization, requester grouping, access roles, retention, deletion, and review.",
    warning:
      "Exact naming activity may reveal sensitive interests or internal architecture.",
  },
  {
    dimension: "Availability and resilience",
    question:
      "What happens if fictional recursive, authoritative, network, identity, supplier, policy, or evidence dependencies fail?",
    strongEvidence:
      "Redundant services, diverse dependencies, capacity, failover policy, degraded mode, recovery order, and exercise evidence.",
    warning:
      "Multiple resolver names do not prove independent resilience.",
  },
  {
    dimension: "Retirement and recovery",
    question:
      "How is fictional naming removed or restored after service, supplier, owner, zone, environment, or mission change?",
    strongEvidence:
      "Dependency review, owner approval, cache plan, rollback, validation, communication, reconciliation, and closure.",
    warning:
      "Deleting a record can disrupt hidden clients, while restoring it may not immediately repair cached state.",
  },
];

const changeFields = [
  {
    field: "Change identifier",
    purpose:
      "Provide a stable fictional reference for request, approvals, implementation, evidence, rollback, findings, and closure.",
    strongExample:
      "DNS-CHANGE-031",
    weakExample:
      "Update the portal name.",
  },
  {
    field: "Business purpose",
    purpose:
      "Explain the fictional service, supplier, migration, resilience, policy, or recovery need.",
    strongExample:
      "Move the student-notification service to the approved replacement environment.",
    weakExample:
      "Needed by IT.",
  },
  {
    field: "Zone and record scope",
    purpose:
      "Identify the fictional zone, record category, names, environments, and related delegations affected.",
    strongExample:
      "Notification service record and temporary migration alias in the internal application zone.",
    weakExample:
      "DNS records.",
  },
  {
    field: "Old and new intended state",
    purpose:
      "Describe the fictional approved state before and after the change without exposing real values.",
    strongExample:
      "Old destination group: notification environment A; new destination group: notification environment B.",
    weakExample:
      "Point it somewhere new.",
  },
  {
    field: "Owners and approvers",
    purpose:
      "Assign fictional record, service, DNS, risk, monitoring, and recovery accountability.",
    strongExample:
      "Record owner: notification service; DNS owner: naming team; approver: application risk owner.",
    weakExample:
      "Network team.",
  },
  {
    field: "Caching and timing plan",
    purpose:
      "Define fictional cache behavior, release sequence, observation period, expiration, and expected inconsistency window.",
    strongExample:
      "Reduce approved cache duration before the change, observe mixed-answer period, then restore the stable duration after validation.",
    weakExample:
      "Wait for propagation.",
  },
  {
    field: "Validation plan",
    purpose:
      "Define fictional authoritative, resolver, client, application, policy, source-health, and business-outcome checks.",
    strongExample:
      "Confirm zone version, approved resolver answers, service identity, policy result, notification flow, source health, and user outcome.",
    weakExample:
      "Check that the name resolves.",
  },
  {
    field: "Monitoring plan",
    purpose:
      "Specify fictional errors, unexpected answers, response health, cache state, source health, service failures, and support signals to review.",
    strongExample:
      "Track response category, inconsistent resolver answers, notification errors, queue age, support reports, and blind periods.",
    weakExample:
      "Watch logs.",
  },
  {
    field: "Rollback plan",
    purpose:
      "Define how the fictional prior approved naming and service state will be restored if validation fails.",
    strongExample:
      "Restore the prior record set, confirm authoritative version, validate approved resolvers, reconcile service state, and communicate recovery.",
    weakExample:
      "Change it back.",
  },
  {
    field: "Exception and expiration",
    purpose:
      "Record fictional temporary aliases, split views, alternate resolvers, supplier relationships, or recovery values with end conditions.",
    strongExample:
      "Migration alias expires after all approved clients move and owner validation is complete.",
    weakExample:
      "Temporary until later.",
  },
  {
    field: "Completion criteria",
    purpose:
      "Define when the fictional change is considered successful and closed.",
    strongExample:
      "All approved resolver views agree, service health is normal, no unexpected destinations remain, support is stable, and temporary records are retired.",
    weakExample:
      "No one complained.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define which fictional changes require future revalidation.",
    strongExample:
      "Review after service, owner, supplier, zone, resolver, architecture, policy, monitoring, or recovery change.",
    weakExample:
      "Review annually.",
  },
];

const incidentCategories = [
  {
    category: "Stale record finding",
    observation:
      "A fictional record points toward a retired or replaced service destination.",
    possibleCauses:
      "Incomplete retirement, hidden dependency, failed change, old owner data, delayed cache refresh, or inventory mismatch.",
    evidence:
      "Record inventory, service catalog, authoritative data, resolver answers, cache state, change history, owner review, and usage context.",
    action:
      "Mark Unvalidated, identify dependencies, define rollback, and authorize retain, correct, or retire.",
  },
  {
    category: "Unexpected resolution finding",
    observation:
      "A fictional approved name returns a destination different from the expected governed value.",
    possibleCauses:
      "Cache inconsistency, resolver difference, change, split view, delegation issue, stale data, source-health error, or unapproved modification.",
    evidence:
      "Authoritative version, approved resolver results, client context, policy, change, source health, and application outcome.",
    action:
      "Preserve evidence and validate each layer before containment or blame.",
  },
  {
    category: "Resolver-policy difference",
    observation:
      "Two fictional resolver groups return different policy outcomes for the same question category.",
    possibleCauses:
      "Different approved audiences, policy-version drift, configuration change, exception, forwarding relationship, or unhealthy evidence.",
    evidence:
      "Resolver identity, requester group, policy version, response category, source health, change, and owner approval.",
    action:
      "Determine whether the difference is intended, documented, and safe.",
  },
  {
    category: "Delegation-governance gap",
    observation:
      "A fictional delegated zone lacks a current owner, review date, or recovery evidence.",
    possibleCauses:
      "Supplier change, team reorganization, project completion, incomplete contract closure, or documentation drift.",
    evidence:
      "Parent-zone record, child-zone owner, authority inventory, contract, change, monitoring, and recovery plan.",
    action:
      "Treat the delegation as Conditional and restore ownership before relying on it.",
  },
  {
    category: "DNS availability degradation",
    observation:
      "Fictional resolver response time rises and some clients experience naming failures.",
    possibleCauses:
      "Capacity, upstream dependency, network failure, policy delay, source-health problem, service overload, or maintenance.",
    evidence:
      "Resolver health, upstream status, network path, client errors, source health, capacity, change, and support reports.",
    action:
      "Use approved degraded behavior, alternate service, communication, and recovery while preserving evidence.",
  },
  {
    category: "Evidence-source degradation",
    observation:
      "Fictional resolver connectivity is Green but query evidence is delayed or incomplete.",
    possibleCauses:
      "Collector queue, clock, schema, transformation, storage, access, or pipeline failure.",
    evidence:
      "Freshness, queue age, event volume, clock, schema, collector, storage, and alternate records.",
    action:
      "Mark visibility Degraded and avoid unsupported claims about underlying naming behavior.",
  },
  {
    category: "Privacy-policy concern",
    observation:
      "Fictional DNS evidence retains more detailed requester and name information than required for the approved defender question.",
    possibleCauses:
      "Default logging, undefined purpose, weak retention, broad access, or unreviewed troubleshooting collection.",
    evidence:
      "Purpose statement, fields, audience, retention, access, deletion, privacy approval, and actual use.",
    action:
      "Minimize collection and preserve only evidence needed for approved defense.",
  },
  {
    category: "Recovery inconsistency",
    observation:
      "Fictional authoritative data is restored, but approved resolvers and applications show inconsistent answers.",
    possibleCauses:
      "Cache state, version mismatch, failover sequence, incomplete dependency restoration, or delayed policy distribution.",
    evidence:
      "Zone version, resolver cache state, application results, policy version, source health, timeline, and recovery actions.",
    action:
      "Continue controlled recovery, validate each dependency, reconcile state, and communicate limitations.",
  },
];

const evidenceMatrix = [
  {
    id: "DNS-01",
    source: "Fictional DNS governance register",
    observation:
      "Twenty-nine critical records are documented; twenty-four have current owners and review dates, while five require ownership or lifecycle validation.",
    supports:
      "A focused ownership and record-recertification review is justified.",
    limits:
      "The register does not prove current authoritative publication, cache state, resolver use, service dependency, or harmful impact.",
    use:
      "Assign evidence actions before changing or relying on the five unvalidated records.",
  },
  {
    id: "DNS-02",
    source: "Fictional authoritative-zone summary",
    observation:
      "The notification service record changed during an approved migration, and a temporary alias remains after the planned transition date.",
    supports:
      "The alias requires purpose, dependency, expiration, and retirement review.",
    limits:
      "The summary does not prove the alias is active, unnecessary, unsafe, or used by current clients.",
    use:
      "Treat the alias as Conditional until usage and owner evidence are complete.",
  },
  {
    id: "DNS-03",
    source: "Fictional resolver comparison",
    observation:
      "Two approved resolver groups return different destination categories for the same internal service name.",
    supports:
      "Resolver, cache, split-view, policy, change, and source-health validation are required.",
    limits:
      "Different answers do not prove manipulation or policy failure; they may be intentionally audience-specific.",
    use:
      "Compare approved audience, authoritative data, cache age, policy version, and owner intent.",
  },
  {
    id: "DNS-04",
    source: "Fictional source-health dashboard",
    observation:
      "Resolver connectivity is Green, but one evidence collector is nineteen minutes behind and its clock-alignment status is unknown.",
    supports:
      "DNS visibility is Degraded even if resolution remains available.",
    limits:
      "Delayed evidence does not prove incorrect answers, event loss, or harmful activity.",
    use:
      "Use alternate resolver, application, and change evidence while restoring source health.",
  },
  {
    id: "DNS-05",
    source: "Fictional application dependency review",
    observation:
      "Portal, identity, notification, supplier, monitoring, and recovery workflows depend on approved naming services.",
    supports:
      "DNS belongs in service criticality, architecture, change, availability, and recovery planning.",
    limits:
      "Dependency documentation does not prove sufficient redundancy or successful failover.",
    use:
      "Create dependency-specific recovery gates and validation cases.",
  },
  {
    id: "DNS-06",
    source: "Fictional privacy review",
    observation:
      "Existing logs include exact requester and name details even though most defender questions require only requester group, question category, response category, policy result, and source health.",
    supports:
      "Evidence minimization and access review are justified.",
    limits:
      "The review does not prove misuse, unauthorized access, or harm.",
    use:
      "Reduce collection while preserving approved defensive usefulness.",
  },
  {
    id: "DNS-07",
    source: "Fictional failover exercise",
    observation:
      "The alternate resolver answered requests, but it used an older policy version and did not provide complete monitoring evidence.",
    supports:
      "Resolver availability alone does not prove equivalent policy, privacy, visibility, or resilience.",
    limits:
      "One exercise does not establish all future failover behavior.",
    use:
      "Treat failover readiness as Conditional until policy and evidence parity are validated.",
  },
  {
    id: "DNS-08",
    source: "Fictional recovery timeline",
    observation:
      "Authoritative zone data was restored before the application and resolver caches were reconciled, producing mixed answers for fourteen minutes.",
    supports:
      "DNS recovery requires dependency order, cache awareness, application validation, communication, and closure.",
    limits:
      "The timeline does not prove user harm or malicious change.",
    use:
      "Improve recovery gates, mixed-answer communication, reconciliation, and post-recovery validation.",
  },
];

const defects = [
  {
    defect: "No record owner",
    observation:
      "A fictional service name exists, but no current role can confirm its purpose or destination.",
    impact:
      "Stale or incorrect naming may persist without an accountable decision.",
    correction:
      "Assign a record owner and require retain, correct, or retire review.",
  },
  {
    defect: "Resolver equals trust",
    observation:
      "A fictional team assumes every answer from an approved resolver is authorized and safe.",
    impact:
      "Resolver approval may be mistaken for service authorization or application safety.",
    correction:
      "Correlate naming with service identity, destination policy, owner, change, and application state.",
  },
  {
    defect: "Uncontrolled temporary alias",
    observation:
      "A fictional migration alias remains without a current end date or dependency evidence.",
    impact:
      "Hidden clients and naming debt may grow.",
    correction:
      "Add owner, usage review, expiration, rollback, validation, and closure.",
  },
  {
    defect: "Caching ignored",
    observation:
      "A fictional change plan assumes every client receives the new answer immediately.",
    impact:
      "Mixed answers and inconsistent service behavior may occur.",
    correction:
      "Document cache duration, expected inconsistency, observation, support, rollback, and completion criteria.",
  },
  {
    defect: "Split-view ambiguity",
    observation:
      "Fictional users receive different answers, but audience, purpose, policy, and ownership are undocumented.",
    impact:
      "Intended separation and unintended inconsistency become difficult to distinguish.",
    correction:
      "Document approved audiences, answer categories, resolver policy, validation, and source health.",
  },
  {
    defect: "Green resolver equals complete health",
    observation:
      "A fictional resolver answers requests while logs are delayed and policy-version evidence is incomplete.",
    impact:
      "Availability may hide visibility or control uncertainty.",
    correction:
      "Track resolution, policy, evidence, freshness, clock, capacity, and upstream health separately.",
  },
  {
    defect: "Over-collection",
    observation:
      "Fictional DNS logs retain exact requester and name details without a defined need.",
    impact:
      "Privacy, access, retention, and trust risks increase.",
    correction:
      "Use purpose-based minimization and approved retention.",
  },
  {
    defect: "Failover without parity",
    observation:
      "A fictional alternate resolver is available but uses different policy, logging, privacy, or source-health behavior.",
    impact:
      "Failover may preserve naming while weakening defense or evidence.",
    correction:
      "Validate policy, capacity, monitoring, privacy, and recovery equivalence.",
  },
  {
    defect: "Recovery stops at resolution",
    observation:
      "A fictional recovery is declared complete when names answer, without validating application, cache, policy, and user outcomes.",
    impact:
      "Mixed or wrong service behavior may remain.",
    correction:
      "Validate authoritative, resolver, client, application, support, and business state.",
  },
  {
    defect: "No lifecycle trigger",
    observation:
      "Fictional records and zones remain unchanged after service, owner, supplier, architecture, environment, or recovery change.",
    impact:
      "Naming debt and hidden dependencies accumulate.",
    correction:
      "Use event-driven recertification, versioning, findings, and retirement.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define the naming mission",
    action:
      "List the fictional portal, identity, notification, supplier, monitoring, administrative, wireless, remote-access, and recovery workflows that depend on DNS.",
    output:
      "DNS mission and dependency statement.",
    quality:
      "Every naming requirement connects to one service outcome and accountable owner.",
  },
  {
    step: "2",
    title: "Map roles and responsibilities",
    action:
      "Identify fictional clients, recursive resolvers, authoritative services, zones, record owners, policy owners, evidence owners, and recovery owners.",
    output:
      "DNS responsibility and ownership matrix.",
    quality:
      "Zone ownership and record-purpose ownership remain distinct.",
  },
  {
    step: "3",
    title: "Build the record register",
    action:
      "Document fictional record identifier, category, purpose, zone, owner, service, environment, destination category, approval, validation, change, and retirement.",
    output:
      "DNS record and delegation register.",
    quality:
      "No record depends on real domains, addresses, or operational values.",
  },
  {
    step: "4",
    title: "Define resolver policy",
    action:
      "Assign fictional employee, service, remote-access, wireless, supplier, administrative, and recovery requester groups to approved resolver behavior.",
    output:
      "Resolver and requester-policy matrix.",
    quality:
      "The matrix explains policy, privacy, evidence, exceptions, and failover.",
  },
  {
    step: "5",
    title: "Design change control",
    action:
      "Record fictional purpose, old state, new state, caching, timing, owners, validation, monitoring, rollback, expiration, and completion criteria.",
    output:
      "DNS change and rollback worksheet.",
    quality:
      "The plan accounts for mixed answers and hidden dependencies.",
  },
  {
    step: "6",
    title: "Design visibility and privacy",
    action:
      "Define fictional requester group, question category, response category, policy result, resolver, timing, source health, access, retention, and deletion.",
    output:
      "DNS evidence and privacy plan.",
    quality:
      "Evidence is minimized and tied to approved defender questions.",
  },
  {
    step: "7",
    title: "Review unexpected resolution",
    action:
      "Compare fictional authoritative, resolver, cache, policy, change, client, application, source-health, and owner evidence.",
    output:
      "Unexpected-resolution analysis record.",
    quality:
      "The record separates observation, alternatives, confidence, scope, impact, and intent.",
  },
  {
    step: "8",
    title: "Plan failure and recovery",
    action:
      "Define fictional resolver, authoritative, policy, logging, network, supplier, and application failure behavior with degraded modes and recovery order.",
    output:
      "DNS resilience and recovery plan.",
    quality:
      "Alternate service is validated for policy, privacy, evidence, capacity, and correctness.",
  },
  {
    step: "9",
    title: "Validate with invented cases",
    action:
      "Use fictional stale-record, resolver-difference, cache, source-degraded, privacy, failover, recovery, supplier, wireless, and retirement cases.",
    output:
      "DNS validation and findings matrix.",
    quality:
      "No real domain, resolver, record, network, account, or service is queried, inspected, or changed.",
  },
  {
    step: "10",
    title: "Maintain and communicate",
    action:
      "Assign fictional owners, versions, review dates, triggers, residual risks, completion criteria, leadership decisions, and retirement history.",
    output:
      "DNS governance, visibility, resilience, and portfolio package.",
    quality:
      "The final artifact is traceable, maintainable, privacy-safe, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest way to describe fictional DNS?",
    choices: [
      "Only a tool that converts names to destinations.",
      "A critical naming, service-discovery, policy, evidence, privacy, availability, change, supplier, and recovery dependency.",
      "A guarantee that a resolved destination is safe.",
      "A replacement for application authorization.",
    ],
    answer: 1,
    explanation:
      "DNS participates in many mission and control dependencies and must be governed as infrastructure.",
  },
  {
    question:
      "A fictional name resolves successfully. What does that prove?",
    choices: [
      "The destination is authorized and healthy.",
      "The resolver returned an answer under the available conditions, but service authorization, correctness, health, and business outcome still require validation.",
      "Every cache has the same answer.",
      "The service is secure.",
    ],
    answer: 1,
    explanation:
      "Successful resolution is only one evidence layer and does not prove destination or application safety.",
  },
  {
    question:
      "Two approved fictional resolvers return different answers. What is the strongest response?",
    choices: [
      "Assume one resolver was manipulated.",
      "Validate approved audience, split-view intent, authoritative data, cache state, policy version, source health, change, and service outcome.",
      "Delete both resolvers.",
      "Ignore the difference because both are approved.",
    ],
    answer: 1,
    explanation:
      "Different answers may be intended or unintended; evidence is required before conclusions.",
  },
  {
    question:
      "Why must DNS change planning include caching?",
    choices: [
      "Because caching guarantees every answer is current.",
      "Because cached answers may persist after authoritative data changes, producing temporary inconsistency.",
      "Because caching replaces rollback.",
      "Because cache duration never changes.",
    ],
    answer: 1,
    explanation:
      "Cache state affects timing, validation, support, rollback, and recovery.",
  },
  {
    question:
      "What is the strongest evidence-minimization approach?",
    choices: [
      "Retain exact requester and name details forever.",
      "Collect only the fictional requester group, question category, response category, policy result, timing, source health, and correlation needed for approved defender questions.",
      "Disable every DNS log.",
      "Publish all naming evidence publicly.",
    ],
    answer: 1,
    explanation:
      "Purpose-based minimization preserves useful defense while reducing privacy and governance risk.",
  },
  {
    question:
      "An alternate fictional resolver answers during failover. What does that prove?",
    choices: [
      "DNS resilience is complete.",
      "Naming availability exists, but policy, privacy, logging, capacity, validation, and application outcomes still require evidence.",
      "Every service has recovered.",
      "The primary resolver can be retired immediately.",
    ],
    answer: 1,
    explanation:
      "Availability alone is not equivalent to full defensive and mission resilience.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real domains but replace organization names.",
      "Use real resolver logs with requester details removed.",
      "Invent every namespace, zone, record, resolver, query, response, owner, date, decision, and outcome from scratch.",
      "Use real DNS screenshots because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real naming infrastructure, services, users, suppliers, evidence, and architecture.",
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

export default function DnsSecurityConceptsPage() {
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
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Naming, Governance, Evidence, and Recovery
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.8 DNS Security Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Study fictional DNS as a critical naming, service-discovery,
            policy, evidence, privacy, availability, supplier, change-control,
            and recovery dependency. Learn to reason about approved resolvers,
            authoritative zones, records, caching, ownership, monitoring,
            unexpected resolution, safe failure, and lifecycle without touching
            real domains or systems.
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
          lessonTitle="DNS Security Concepts"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented namespaces, zones, records, resolvers, queries, responses, policies, evidence, owners, dates, decisions, and outcomes.",
            "I understand that successful name resolution does not prove destination authorization, service health, application safety, or correct business outcome.",
            "I will separate authoritative data, resolver behavior, cache state, policy, source health, client context, and application impact.",
            "I will preserve privacy, ownership, change control, rollback, degraded operation, recovery, evidence limits, and uncertainty.",
            "I will not assume that stale or unexpected fictional resolution proves manipulation, compromise, or malicious intent.",
            "I will not query, enumerate, inspect, modify, redirect, register, analyze, or test any real domain, resolver, zone, record, network, account, or service.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Name Can Resolve Correctly and the Service Can Still Be Wrong"
        >
          <p className="leading-8">
            A fictional Northbridge notification name resolves successfully
            through an approved resolver. The answer, however, points to an old
            migration destination. The authoritative zone shows the new
            destination, one resolver still has cached data, application
            correlation is incomplete, and a temporary alias remains open.
            Resolution worked—but governance, cache state, service purpose,
            owner, and recovery evidence do not yet agree.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The name resolved, so DNS and the notification service are
                healthy.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional resolver returned an answer, but authoritative
                version, cache state, record purpose, owner, service identity,
                policy, source health, application outcome, and migration
                closure still require validation.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            DNS availability, answer correctness, service authorization,
            application health, privacy, evidence, and recovery are related but
            distinct questions.
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
          title="DNS Sits inside Application, Identity, Supplier, Monitoring, and Recovery Paths"
        >
          <p className="leading-8">
            Fictional services often rely on naming before they can reach an
            identity provider, application, supplier, notification platform,
            monitoring destination, administrative interface, or recovery
            service. Weak ownership, stale records, inconsistent resolvers,
            poor cache planning, incomplete evidence, or failed recovery can
            affect many systems at once.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Integrity and governance",
                "Ensure fictional names, records, delegations, owners, changes, and validation align with approved service purpose.",
              ],
              [
                "Availability and evidence",
                "Separate resolver availability, answer freshness, policy behavior, logging health, and application outcomes.",
              ],
              [
                "Recovery and lifecycle",
                "Restore fictional authoritative data, caches, resolvers, policy, applications, ownership, and temporary records in the correct order.",
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

        <SectionCard eyebrow="Core Framework" title="The R-E-S-O-L-V-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "R — Recognize the mission",
                "Define the fictional service, user, identity, supplier, monitoring, administrative, or recovery need supported by naming.",
              ],
              [
                "E — Establish ownership",
                "Assign fictional zone, record, resolver, policy, evidence, supplier, and recovery owners.",
              ],
              [
                "S — Separate evidence layers",
                "Distinguish fictional authoritative data, resolver response, cache state, policy result, client context, source health, and application outcome.",
              ],
              [
                "O — Organize change control",
                "Document fictional old state, new state, caching, timing, approval, validation, monitoring, rollback, expiration, and closure.",
              ],
              [
                "L — Limit collection and trust",
                "Use minimized fictional evidence and remember that resolution does not equal authorization or service safety.",
              ],
              [
                "V — Validate answers and dependencies",
                "Compare fictional approved resolver, authoritative, client, application, policy, source-health, supplier, and recovery evidence.",
              ],
              [
                "E — Engineer resilience",
                "Design fictional diverse resolvers, authoritative services, capacity, policy parity, fail-limited behavior, recovery order, and exercises.",
              ],
              [
                "E — End stale access and records",
                "Retire fictional aliases, records, delegations, suppliers, exceptions, caches, and ownership relationships with closure evidence.",
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
              Decision-ready DNS statement
            </p>
            <p className="mt-2 leading-7">
              This fictional naming decision supports a documented mission
              purpose through approved zones, records, resolvers, policies,
              owners, cache behavior, evidence, privacy, change control,
              validation, failure behavior, recovery, residual risk, and review
              triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for DNS Security Concepts"
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
            Apply Ten DNS Defense Principles
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
          title="Understand Eight DNS Roles"
        >
          <div className="grid gap-5">
            {dnsRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Ownership questions", item.ownerQuestions],
                    ["Fictional evidence", item.evidence],
                    ["Evidence limitations", item.limitations],
                    ["Recovery responsibility", item.recovery],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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
          eyebrow="Instructional Section 3"
          title="Review Eight Record Categories Conceptually"
        >
          <p className="leading-8">
            These categories teach ownership and defensive reasoning without
            using real record values, domains, addresses, configuration syntax,
            or operational change instructions.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {recordCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Ownership
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.owner}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Fictional evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Risks
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risks}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Review trigger
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.review}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 4
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evaluate Ten DNS Governance Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {governanceDimensions.map((item) => (
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
                    Strong fictional evidence
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
          eyebrow="Instructional Section 5"
          title="Write Every DNS Change with Twelve Fields"
        >
          <div className="grid gap-5">
            {changeFields.map((item, index) => (
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
                    <p className="mt-2 text-sm leading-6">
                      {item.strongExample}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weakExample}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Distinguish Eight DNS Findings"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {incidentCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.category}
                </h3>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Possible causes
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.possibleCauses}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Evidence to review
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Proportional action
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.action}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 7"
          title="Separate DNS Answering from Complete Service Assurance"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Evidence layer",
                    "Question answered",
                    "Fictional evidence",
                    "What it does not prove",
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
                    "Client request",
                    "Did a fictional user, device, or service ask an approved resolver a naming question?",
                    "Requester group, client identity, resolver selection, time, question category, and source health.",
                    "Authoritative truth, answer correctness, or destination safety.",
                  ],
                  [
                    "Resolver answer",
                    "What fictional answer did the approved recursive resolver return?",
                    "Resolver identity, cache state, response category, policy result, latency, and source health.",
                    "That the resolver used current authoritative data or that the destination is authorized.",
                  ],
                  [
                    "Authoritative data",
                    "What fictional record set and zone version are currently published?",
                    "Zone, record, version, delegation, owner, change, publication, and authoritative health.",
                    "That every resolver cache or client has the same answer.",
                  ],
                  [
                    "Policy result",
                    "Was the fictional question or response allowed, limited, denied, redirected, or handled under exception?",
                    "Requester group, resolver policy version, decision, reason, exception, and source health.",
                    "That the service operation itself is authorized.",
                  ],
                  [
                    "Application outcome",
                    "Did the fictional service connect to the intended destination and produce the correct mission result?",
                    "Service identity, destination group, application state, error, queue, user result, and owner confirmation.",
                    "That DNS alone caused the result.",
                  ],
                  [
                    "Recovery closure",
                    "Were fictional authoritative data, resolvers, caches, policy, applications, monitoring, and business state reconciled?",
                    "Recovery sequence, zone version, resolver results, cache review, application validation, communication, and closure.",
                    "That future failures cannot recur.",
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
          eyebrow="Instructional Section 8"
          title="Design DNS Privacy, Resilience, and Recovery"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Purpose-based logging",
                "Collect fictional requester group, question category, response category, policy result, resolver, timing, and source health only when needed.",
                "Avoid collecting exact personal naming activity by default.",
              ],
              [
                "Access and retention",
                "Limit fictional DNS evidence to approved roles and retain it only for documented defensive, operational, or compliance purposes.",
                "Long retention and broad access can reveal sensitive behavior and architecture.",
              ],
              [
                "Resolver diversity",
                "Use fictional alternate resolvers with independent capacity and validated policy, privacy, logging, upstream, and management dependencies.",
                "Two resolver labels may still share the same failure domain.",
              ],
              [
                "Authoritative resilience",
                "Use fictional replicated authoritative services with validated zone versions, delegation, capacity, monitoring, and recovery.",
                "Replication can copy incorrect data unless change governance is strong.",
              ],
              [
                "Cache-aware failover",
                "Document fictional cache behavior, stale-answer limits, mixed-answer windows, and client validation during failover.",
                "Failover may return an available but outdated answer.",
              ],
              [
                "Degraded operation",
                "Define which fictional critical services may use approved cached or alternate answers and which high-impact actions should stop.",
                "Broad fallback can bypass naming policy or integrity expectations.",
              ],
              [
                "Dependency order",
                "Restore fictional network, identity, resolver, authoritative, policy, monitoring, application, supplier, and recovery dependencies in an approved sequence.",
                "DNS availability may depend on systems it is also expected to help restore.",
              ],
              [
                "Recovery reconciliation",
                "Compare fictional authoritative data, resolver answers, cache state, application destinations, service outcomes, support reports, and monitoring evidence.",
                "A single successful lookup is not enough to close recovery.",
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
          eyebrow="Fictional DNS View"
          title="Northbridge DNS Governance and Evidence Architecture"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It shows naming relationships without real
            domains, addresses, record values, resolver names, query data,
            configuration syntax, supplier details, or internal infrastructure.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Client groups", "Employee, managed device, service, wireless, remote, supplier, recovery"],
                ["Approved resolvers", "Policy, cache, privacy, evidence, capacity, failover"],
                ["Authoritative zones", "Ownership, records, delegation, versions, monitoring"],
                ["Record owners", "Purpose, service, destination, change, lifecycle"],
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
                Fictional Northbridge DNS Decision Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Namespace", "Zones, delegations, naming standards, ownership"],
                  ["Records", "Purpose, service, environment, destination category, lifecycle"],
                  ["Resolution", "Client, resolver, authoritative, cache, response"],
                  ["Policy", "Requester group, question category, decision, exception"],
                  ["Evidence", "Response, source health, change, timing, correlation"],
                  ["Privacy", "Purpose, minimization, access, retention, deletion"],
                  ["Resilience", "Diversity, capacity, policy parity, failover, degraded mode"],
                  ["Recovery", "Dependency order, validation, cache reconciliation, closure"],
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
                ["Applications", "Portal, identity, notification, supplier, monitoring"],
                ["Administration", "Management names, privileged policy, change, evidence"],
                ["Wireless and remote", "Approved resolver use and requester context"],
                ["Recovery", "Critical records, alternate services, reconciliation, retirement"],
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
          title="Fake Northbridge DNS Assurance Dashboard"
          subtitle="Fictional record ownership, resolver consistency, source health, privacy, change, and recovery status for training only."
          metrics={[
            {
              label: "Critical records with current owners",
              value: "24 / 29",
              note: "Five fictional records require owner, purpose, or lifecycle validation.",
            },
            {
              label: "Resolver groups with consistent expected answers",
              value: "5 / 7",
              note: "Two fictional resolver groups differ for one internal service and require cache, policy, audience, and change review.",
            },
            {
              label: "Open DNS resilience findings",
              value: "4",
              note: "Policy parity, evidence freshness, mixed-answer recovery, and temporary-alias closure remain incomplete.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Resolvers Return Different Service Destinations"
          severity="High"
          time="3:41 PM"
          source="Fake Northbridge DNS Assurance Console"
          details="Two fictional approved resolver groups return different destination categories for the same notification-service name. The authoritative zone shows the new destination, one resolver may hold older cached data, and a temporary migration alias remains open. Evidence collection for one resolver is nineteen minutes behind."
          recommendation="Keep the finding In Review. Compare fictional audience policy, authoritative version, cache state, temporary alias, resolver policy version, source health, application destination, service outcome, owner approval, expiration, and rollback before changing or escalating."
        />

        <FakeLogPanel
          title="Fake DNS Change and Resolution Timeline"
          logs={[
            "09:00 ZONE notification='version-12'",
            "09:08 CHANGE migration='approved'",
            "09:16 RECORD primary-destination='new-environment'",
            "09:24 RECORD temporary-alias='open'",
            "09:32 RESOLVER group-a='new-destination'",
            "09:40 RESOLVER group-b='old-destination'",
            "09:48 CACHE group-b='possible-stale'",
            "09:56 POLICY group-a='version-7'",
            "10:04 POLICY group-b='version-7'",
            "10:12 SOURCE group-a='current'",
            "10:20 SOURCE group-b='delayed-19m'",
            "10:28 APPLICATION notification-path='mixed'",
            "10:36 OWNER record='assigned'",
            "10:44 OWNER alias='unconfirmed'",
            "10:52 CONFIDENCE answer-difference='high'",
            "11:00 CONFIDENCE cause='moderate'",
            "11:08 IMPACT user='unconfirmed'",
            "11:16 STATUS finding='in-review'",
            "11:24 CONFIDENCE dns='moderate'",
            "15:41 ALERT issue='resolver-answer-difference'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the DNS Evidence Supports—and What It Does Not Prove
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
                    ["DNS-review use", item.use],
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
          title="Which DNS Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional resolver-answer difference?"
          evidence={[
            "Two approved fictional resolver groups return different destination categories for one service name.",
            "The authoritative zone shows the new destination.",
            "One resolver may hold older cached data.",
            "A temporary migration alias remains open.",
            "Resolver policy versions appear equal.",
            "Evidence for one resolver is nineteen minutes behind.",
            "No supplied evidence proves manipulation, compromise, or user impact.",
            "Confidence in the answer difference is High; confidence in cause is Moderate.",
          ]}
          options={[
            "Keep the finding In Review, validate fictional audience policy, authoritative version, cache state, alias purpose and expiration, resolver source health, application destination, service outcome, owner approval, and rollback before correction or escalation.",
            "Declare that one resolver was compromised.",
            "Delete the temporary alias and all caches immediately.",
            "Ignore the difference because both resolvers are approved.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the evidence without overclaiming. It recognizes that cache state, audience policy, temporary migration, source health, and service context may explain the difference."
        />

        <SectionCard
          eyebrow="DNS Governance Defects"
          title="Ten Problems That Weaken DNS Security"
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
          title="Build the Northbridge DNS Governance and Resilience Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            query, enumerate, inspect, capture, resolve, register, modify,
            redirect, configure, test, monitor, analyze, or interfere with any
            real domain, resolver, zone, record, network, account, supplier,
            service, or organizational infrastructure.
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
          title="A Stale Migration Alias May Still Have Hidden Clients"
          scenario="A fictional migration alias remains after the project ended. The service owner believes it is no longer needed, but usage evidence is incomplete and one recovery document still references it."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark the fictional alias Conditional, assign the record and recovery owners, review supplied client, application, recovery, resolver, cache, and support evidence, define rollback and completion criteria, then authorize retain, restrict, or retire.",
              outcome:
                "Best defensive choice. It addresses naming debt without breaking an undocumented dependency.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the alias immediately because the migration ended.",
              outcome:
                "Weak. The recovery reference and incomplete usage evidence create dependency uncertainty.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep the alias permanently because it has not caused a known problem.",
              outcome:
                "Weak. Lack of known harm does not replace purpose, ownership, evidence, expiration, and review.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Failover Preserves Resolution but Weakens Policy Evidence"
          scenario="The fictional primary resolver becomes unavailable. The alternate resolver answers requests, but it uses an older policy version and its logging source is degraded."
          choices={[
            {
              label: "Choice A",
              response:
                "Use fictional fail-limited operation for approved critical services, block or review high-impact naming actions, mark policy and visibility Degraded, use alternate evidence, restore parity, validate application outcomes, and close recovery only after reconciliation.",
              outcome:
                "Best choice. It preserves mission access without pretending that availability equals full control assurance.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Treat failover as complete because names resolve.",
              outcome:
                "Weak. Policy, privacy, evidence, and service outcomes remain uncertain.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow every naming request and disable logging until the primary returns.",
              outcome:
                "Weak. Broad fallback expands trust and removes accountability.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design DNS Governance across Applications, Suppliers, Remote Access, and Recovery"
        >
          <p className="leading-8">
            Fictional Northbridge depends on DNS for its portal, identity
            service, supplier integration, notifications, monitoring, wireless
            devices, remote administration, and recovery environment.
            Leadership wants simple changes and rapid failover, while service,
            privacy, network, identity, supplier, support, and recovery owners
            need stronger assurance.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Map critical dependencies",
                "Connect fictional names, zones, records, resolvers, applications, suppliers, monitoring, and recovery services.",
              ],
              [
                "Separate ownership",
                "Assign fictional zone, record, resolver, policy, evidence, service, supplier, and recovery owners.",
              ],
              [
                "Govern change and caching",
                "Use fictional old state, new state, cache behavior, validation, mixed-answer support, rollback, expiration, and closure.",
              ],
              [
                "Design resolver policy",
                "Define fictional employee, service, remote, wireless, supplier, administrative, and recovery requester groups.",
              ],
              [
                "Preserve privacy and visibility",
                "Collect minimized fictional question, response, policy, timing, source-health, change, and correlation evidence.",
              ],
              [
                "Validate resilience",
                "Test fictional authoritative, recursive, policy, capacity, evidence, cache, application, communication, and recovery outcomes.",
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
              Produce a fictional DNS dependency map, responsibility matrix,
              record register, resolver-policy matrix, change and rollback
              workflow, privacy and evidence plan, source-health model,
              unexpected-resolution analysis, resilience design, recovery
              gates, residual-risk statement, and leadership explanation.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="DNS Security Concepts Checklist"
          items={[
            "I can explain fictional DNS as a critical naming, service-discovery, policy, evidence, privacy, availability, supplier, and recovery dependency.",
            "I can distinguish client, recursive resolver, authoritative service, zone owner, record owner, policy owner, evidence owner, and recovery owner responsibilities.",
            "I can separate authoritative data, resolver response, cache state, policy outcome, client context, source health, and application result.",
            "I can explain why successful resolution does not prove destination authorization, service health, application safety, or correct business outcome.",
            "I can map fictional service, alias, mail-routing, service-discovery, delegation, validation-support, policy-support, and reverse-mapping record concepts.",
            "I can design fictional DNS change control with old state, new state, caching, timing, owners, validation, monitoring, rollback, expiration, and closure.",
            "I can evaluate stale records and unexpected resolution without assuming manipulation or malicious intent.",
            "I can minimize fictional DNS evidence according to purpose, access, retention, deletion, and privacy.",
            "I can measure resolver availability, policy version, evidence freshness, clock, capacity, upstream health, and blind periods separately.",
            "I can design fail-open, fail-closed, fail-limited, alternate-resolver, cache-aware, application-aware, and recovery behavior conceptually.",
            "I can retire fictional records, aliases, delegations, suppliers, exceptions, caches, and ownership relationships with evidence.",
            "I can create a completely fictional DNS artifact without using real domains, addresses, record values, resolver names, queries, logs, suppliers, users, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A4.8 Mini Quiz: DNS Security Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional DNS Governance, Visibility, Resilience, and Change-Review Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, namespace, at least six zones, at least thirty fictional records, record categories, delegations, zone owners, record owners, service owners, policy owners, evidence owners, recovery owners, client groups, approved resolvers, forwarding relationships, authoritative services, cache-duration rationale, negative-caching concept, split-view concept, DNSSEC concept, encrypted-DNS concept, resolver policy, requester groups, privacy purpose, minimized fields, access, retention, deletion, source health, freshness, queue age, clock, policy version, blind periods, at least ten fictional changes, old state, new state, timing, caching, validation, monitoring, rollback, expiration, completion criteria, stale-record findings, unexpected-resolution findings, resolver differences, delegation gaps, availability degradation, evidence degradation, privacy concerns, failover exercises, recovery inconsistencies, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, namespace, zone, record, resolver, query, response, owner, date, decision, and outcome is invented."
          tips={[
            "Treat fictional DNS as part of application, identity, supplier, monitoring, remote-access, wireless, and recovery architecture.",
            "Separate zone governance, record purpose, resolver behavior, cache state, policy, source health, and application outcome.",
            "Design every fictional change with cache-aware timing, validation, monitoring, rollback, expiration, and closure.",
            "Use minimized DNS evidence and state exactly what it can and cannot prove.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Network Resilience and Redundancy?"
        >
          <p className="leading-8">
            Before moving to A4.9, rate your readiness from 1 to 5 for DNS
            mission, ownership, zones, records, resolvers, caching, change,
            validation, policy, privacy, source health, unexpected resolution,
            failover, recovery, lifecycle, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why successful fictional name resolution does not prove complete service assurance.",
              "I can distinguish authoritative data, resolver answers, cache state, policy, source health, and application outcomes.",
              "I can assign separate zone, record, resolver, policy, evidence, service, and recovery owners.",
              "I can design a cache-aware fictional DNS change and rollback plan.",
              "I can evaluate different resolver answers without assuming manipulation or compromise.",
              "I can minimize fictional DNS evidence while preserving approved defender questions.",
              "I can design resolver and authoritative resilience beyond simple availability.",
              "I can produce a safe fictional DNS package without querying, copying, changing, or exposing real naming information.",
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
            Record one fictional stale record you reviewed, one resolver
            difference you investigated, one privacy field you removed, one
            failover gap, one recovery gate, and one question you will carry
            into A4.9.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Fictional DNS is a critical naming, service-discovery, policy, evidence, privacy, availability, supplier, and recovery dependency.",
            "Successful name resolution does not prove destination authorization, service health, application safety, or correct business outcome.",
            "Authoritative data, resolver answers, cache state, policy results, client context, source health, and application outcomes are separate evidence layers.",
            "Zones, records, delegations, resolvers, policies, changes, evidence, and recovery paths require clear ownership and lifecycle.",
            "Caching improves performance and resilience but can extend stale or incorrect answers after change.",
            "Different resolver answers may reflect intended audience policy, cache state, change, source health, or a governance problem; they do not automatically prove manipulation.",
            "DNS evidence should be minimized because naming activity can reveal sensitive user behavior and internal architecture.",
            "Resolver availability alone does not prove policy, privacy, logging, capacity, correctness, or service resilience.",
            "DNS recovery requires authoritative, resolver, cache, policy, application, monitoring, communication, reconciliation, and closure validation.",
            "Every CyberShield DNS artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, design fictional network resilience and redundancy around
            service objectives, diverse dependencies, capacity, failover,
            degraded modes, routing and naming dependencies, evidence,
            communication, recovery order, reconciliation, and testing.
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