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
const previousLesson = `${modulePath}/ids-ips-concepts-and-network-visibility`;
const nextLesson = `${modulePath}/wireless-defense-strategy`;

const objectives = [
  "Explain fictional secure remote access as a complete identity, device, authorization, destination, session, evidence, privacy, support, failure, recovery, and lifecycle system rather than a simple connection method.",
  "Differentiate fictional employee, administrator, supplier, support, emergency, recovery, and service remote-access use cases by purpose, authority, object scope, device conditions, time, approval, and destination.",
  "Design fictional remote-access decisions using verified identity, managed-device context, least privilege, conditional access, bounded sessions, segmentation, monitoring, revocation, and safe alternatives.",
  "Evaluate fictional remote-access evidence without assuming that successful authentication proves authorization, device safety, approved purpose, safe action, or correct business outcome.",
  "Create a portfolio-ready fictional remote-access architecture, access-decision register, session-evidence plan, exception workflow, recovery process, residual-risk statement, and maintenance schedule.",
];

const vocabulary = [
  [
    "Remote access",
    "A fictional capability that allows an approved human, device, service, supplier, administrator, support role, or recovery role to reach defined resources from outside the normal local trust context.",
  ],
  [
    "Remote-access gateway",
    "A fictional control point that evaluates identity, device, role, purpose, destination, session, policy, evidence, and failure conditions before enabling approved connectivity.",
  ],
  [
    "Authentication",
    "The fictional process of verifying a claimed human, device, or service identity.",
  ],
  [
    "Authorization",
    "The fictional decision about whether an authenticated identity may perform a specific action on a specific destination or object under defined conditions.",
  ],
  [
    "Device trust",
    "A fictional decision based on device identity, ownership, management state, lifecycle, approved configuration, source health, and policy context.",
  ],
  [
    "Managed device",
    "A fictional endpoint with assigned ownership, approved lifecycle, policy, update, evidence, support, and retirement processes.",
  ],
  [
    "Unmanaged device",
    "A fictional endpoint that lacks sufficient organizational ownership, lifecycle, configuration, evidence, or support assurance.",
  ],
  [
    "Conditional access",
    "A fictional policy decision that considers identity, role, device, destination, purpose, risk, time, location context, environment, and session state.",
  ],
  [
    "Least privilege",
    "Granting only the fictional authority required for one approved purpose, destination, object, service, time, and state.",
  ],
  [
    "Least connectivity",
    "Allowing only the fictional communication path required for one approved remote-access purpose.",
  ],
  [
    "Session",
    "A fictional bounded period during which an identity and device may perform approved actions under defined policy and evidence.",
  ],
  [
    "Session evidence",
    "Fictional records describing identity, device, role, destination, start, end, purpose, approval, actions, policy results, failures, and revocation.",
  ],
  [
    "Session timeout",
    "A fictional policy that ends or revalidates a remote session after inactivity, duration, risk change, device change, or other approved condition.",
  ],
  [
    "Step-up verification",
    "A fictional requirement for stronger identity confirmation before higher-impact actions or destinations.",
  ],
  [
    "Privileged remote access",
    "Fictional remote access used for administration, configuration, maintenance, emergency response, recovery, or other high-impact actions.",
  ],
  [
    "Supplier remote access",
    "Fictional access granted to an external support or service identity under limited purpose, destination, approval, session evidence, time, and lifecycle conditions.",
  ],
  [
    "Support remote access",
    "Fictional access used by authorized support roles to assist users or systems under bounded assignments, approvals, evidence, and confirmation.",
  ],
  [
    "Emergency access",
    "Fictional time-bound access activated during an authorized urgent condition with stronger approval, evidence, review, expiration, revocation, and retrospective requirements.",
  ],
  [
    "Break-glass concept",
    "A fictional emergency-access process designed for rare situations when normal identity or approval workflows are unavailable.",
  ],
  [
    "Just-in-time access",
    "A fictional access model where authority is granted only when needed for an approved task and removed after the defined window.",
  ],
  [
    "Just-enough access",
    "A fictional access model granting only the minimum role, destination, operation, and object scope required.",
  ],
  [
    "Session isolation",
    "A fictional design that separates remote activity from broader device, network, administrative, or user trust.",
  ],
  [
    "Revocation",
    "The fictional removal of remote-access authority, session, identity, device, exception, or emergency permission.",
  ],
  [
    "Remote-access review trigger",
    "A fictional event requiring revalidation, such as identity, role, device, supplier, destination, service, architecture, segmentation, wireless, DNS, recovery, or mission change.",
  ],
];

const principles = [
  {
    principle: "Connection is not authorization",
    description:
      "A fictional remote user may successfully connect but still require role, destination, object, purpose, state, time, and approval decisions.",
    strongPractice:
      "A support analyst reaches only assigned cases and approved support functions after identity, device, role, object, and reason checks.",
    failure:
      "Successful login may be mistaken for permission to reach every service or perform every action.",
  },
  {
    principle: "Separate access use cases",
    description:
      "Employee, support, administrator, supplier, emergency, recovery, and service access have different authority, evidence, risk, and lifecycle needs.",
    strongPractice:
      "Create distinct fictional policy profiles rather than one shared remote-access group.",
    failure:
      "Broad shared access can expand blast radius and weaken accountability.",
  },
  {
    principle: "Verify both identity and device",
    description:
      "Fictional remote access should evaluate who is acting and which endpoint or service is being used.",
    strongPractice:
      "Require approved human identity plus managed-device identity for privileged destinations.",
    failure:
      "Strong user authentication cannot compensate for unknown or unowned device context.",
  },
  {
    principle: "Limit destinations and actions",
    description:
      "Fictional remote access should expose only the resources and functions needed for the approved task.",
    strongPractice:
      "A supplier identity reaches one support interface and cannot reach unrelated application, data, monitoring, or management services.",
    failure:
      "Remote connectivity may become broad internal reachability.",
  },
  {
    principle: "Bind access to purpose and time",
    description:
      "Fictional authority should have one documented reason, owner, approval, start, end, and review state.",
    strongPractice:
      "A temporary maintenance session expires automatically after the approved window.",
    failure:
      "Temporary access can become permanent entitlement.",
  },
  {
    principle: "Preserve session accountability",
    description:
      "Fictional defenders need enough evidence to explain identity, device, destination, action, policy decision, failure, and closure.",
    strongPractice:
      "Correlate gateway, identity, destination, change, ticket, approval, and application evidence.",
    failure:
      "A connection may be visible while the actual business action remains unclear.",
  },
  {
    principle: "Design safe failure",
    description:
      "Fictional identity, device, policy, gateway, DNS, monitoring, or approval services may become unavailable.",
    strongPractice:
      "Define which access stops, continues safely limited, or moves to independently approved emergency workflows.",
    failure:
      "Broad fail-open behavior can expand trust, while unplanned fail-closed behavior can block critical support or recovery.",
  },
  {
    principle: "Protect privacy and user trust",
    description:
      "Fictional remote support and monitoring should collect only approved evidence and clearly limit audience, purpose, retention, and use.",
    strongPractice:
      "Record structured action and confirmation evidence rather than unnecessary personal content.",
    failure:
      "Over-collection may create privacy, governance, and trust harm.",
  },
  {
    principle: "Revoke completely",
    description:
      "Fictional access removal should cover sessions, roles, device trust, temporary exceptions, supplier relationships, emergency access, and cached authority.",
    strongPractice:
      "Offboarding closes active sessions, removes policy membership, invalidates temporary access, and records completion.",
    failure:
      "One stale access path may remain after the visible account is disabled.",
  },
  {
    principle: "Review the full lifecycle",
    description:
      "Fictional remote access requires request, approval, provisioning, use, evidence, recertification, exception, revocation, recovery, and retirement.",
    strongPractice:
      "Review after identity, supplier, device, role, destination, architecture, segmentation, or recovery change.",
    failure:
      "Remote-access trust can outlive its purpose and owner.",
  },
];

const accessProfiles = [
  {
    profile: "Employee application access",
    purpose:
      "Allow fictional employees to reach approved business applications needed for normal work.",
    identity:
      "Verified employee identity with current role and lifecycle.",
    device:
      "Managed device or approved limited alternative.",
    destinations:
      "Only assigned application groups and required services.",
    evidence:
      "Authentication, device, role, application, session, policy result, denial, and source health.",
    failure:
      "Use safe limited access or approved alternate workflow when identity or device policy is unavailable.",
  },
  {
    profile: "Support analyst access",
    purpose:
      "Allow fictional support staff to assist assigned users or cases.",
    identity:
      "Verified analyst identity, current support role, and case assignment.",
    device:
      "Managed support device with current policy state.",
    destinations:
      "Support console and approved case-related functions only.",
    evidence:
      "Identity, assignment, reason, target, action, old state, new state, result, ticket, and user confirmation.",
    failure:
      "Block high-impact changes when assignment or verification evidence is unavailable.",
  },
  {
    profile: "Infrastructure administrator access",
    purpose:
      "Allow fictional administrators to perform approved maintenance and configuration.",
    identity:
      "Separate privileged identity with current role and approval.",
    device:
      "Dedicated or strongly managed administrative device.",
    destinations:
      "Only approved management interfaces and assigned infrastructure groups.",
    evidence:
      "Identity, device, approval, destination, session, action, change, result, rollback, and review.",
    failure:
      "Move to controlled emergency access with independent approval and stronger evidence.",
  },
  {
    profile: "Supplier support access",
    purpose:
      "Allow a fictional supplier to support one approved service relationship.",
    identity:
      "Named supplier identity or service identity with current sponsor and contract purpose.",
    device:
      "Approved supplier device context or isolated access environment.",
    destinations:
      "One support interface or service group; no broad internal access.",
    evidence:
      "Supplier identity, sponsor, approval, destination, session, action, result, source health, and expiration.",
    failure:
      "Pause access and use an approved internal support or evidence-sharing process.",
  },
  {
    profile: "Emergency access",
    purpose:
      "Support an urgent fictional mission or recovery condition when normal workflows are insufficient.",
    identity:
      "Strongly verified emergency role with independent approval.",
    device:
      "Approved emergency or administrative device.",
    destinations:
      "Only critical destinations required for the declared event.",
    evidence:
      "Trigger, approver, identity, device, destination, action, result, time, review, revocation, and closure.",
    failure:
      "Return to controlled degraded mode and preserve evidence rather than silently broadening access.",
  },
  {
    profile: "Recovery access",
    purpose:
      "Restore fictional identity, DNS, applications, data, evidence, notifications, and business state.",
    identity:
      "Recovery coordinator and approved recovery service identities.",
    device:
      "Approved recovery workstation or service environment.",
    destinations:
      "Defined recovery sequence with dependency gates.",
    evidence:
      "Trigger, approval, source artifact, destination, action, result, validation, reconciliation, communication, revocation, and closure.",
    failure:
      "Re-enter degraded mode, correct sequence, and revalidate dependencies.",
  },
  {
    profile: "Service remote access",
    purpose:
      "Allow a fictional non-human service identity to perform one approved remote operation.",
    identity:
      "Owned service identity with narrow purpose and lifecycle.",
    device:
      "Approved service workload or automation environment.",
    destinations:
      "One documented service or integration destination.",
    evidence:
      "Service identity, owner, purpose, source, destination, operation, result, health, and review.",
    failure:
      "Pause automation, preserve state, and route to approved manual review.",
  },
  {
    profile: "Temporary project access",
    purpose:
      "Support a fictional migration, testing, transition, or project task for a limited period.",
    identity:
      "Named project role with sponsor and end date.",
    device:
      "Approved managed device or isolated project environment.",
    destinations:
      "Only project-specific services and data.",
    evidence:
      "Request, sponsor, purpose, scope, session, usage, expiration, rollback, and closure.",
    failure:
      "Expire automatically unless separately reauthorized.",
  },
];

const decisionDimensions = [
  {
    dimension: "Identity",
    question:
      "Which fictional human, device, service, supplier, emergency, or recovery identity is requesting access?",
    strongEvidence:
      "Identity source, role, service identity, device identity, lifecycle, and authentication result.",
    warning:
      "Authentication alone does not establish authority.",
  },
  {
    dimension: "Purpose",
    question:
      "Which fictional mission, support, administrative, supplier, emergency, or recovery task requires access?",
    strongEvidence:
      "Ticket, change, service objective, case assignment, incident declaration, recovery trigger, or project record.",
    warning:
      "“Needs access” is not a complete purpose.",
  },
  {
    dimension: "Device",
    question:
      "Which fictional endpoint or service environment is used, who owns it, and what policy state applies?",
    strongEvidence:
      "Device identity, owner, management state, policy result, health, lifecycle, and exception.",
    warning:
      "A valid user identity does not prove a device is appropriate.",
  },
  {
    dimension: "Role and assignment",
    question:
      "Which fictional role, team, case, service, system, or project assignment authorizes the request?",
    strongEvidence:
      "Role record, assignment, object ownership, sponsor, approval, and expiration.",
    warning:
      "Broad team membership may exceed the task.",
  },
  {
    dimension: "Destination",
    question:
      "Which fictional application, service, management interface, object, or recovery target may be reached?",
    strongEvidence:
      "Destination group, service owner, object scope, environment, and policy mapping.",
    warning:
      "One gateway should not imply broad internal reachability.",
  },
  {
    dimension: "Action",
    question:
      "Which fictional operation may the identity perform?",
    strongEvidence:
      "Allowed function, object, change type, state transition, approval, and expected result.",
    warning:
      "Connectivity does not define business authority.",
  },
  {
    dimension: "Time and duration",
    question:
      "When does fictional access begin, end, revalidate, time out, or expire?",
    strongEvidence:
      "Start, end, inactivity, maximum duration, schedule, exception window, and review date.",
    warning:
      "Temporary access without automatic expiration often becomes permanent.",
  },
  {
    dimension: "Session evidence",
    question:
      "How will fictional defenders explain identity, device, destination, action, result, failure, and closure?",
    strongEvidence:
      "Gateway, identity, device, application, ticket, change, session, policy, and source-health evidence.",
    warning:
      "Gateway logs alone may not explain business actions.",
  },
  {
    dimension: "Failure and recovery",
    question:
      "What happens if fictional identity, device, gateway, policy, DNS, monitoring, or destination becomes unavailable?",
    strongEvidence:
      "Safe limited mode, blocked actions, alternate workflow, emergency approval, alert, rollback, recovery, and closure.",
    warning:
      "Broad fallback can become uncontrolled access.",
  },
  {
    dimension: "Revocation and lifecycle",
    question:
      "How is fictional access removed after role, device, supplier, project, emergency, or mission change?",
    strongEvidence:
      "Session termination, role removal, group removal, device removal, exception closure, supplier offboarding, and recertification.",
    warning:
      "Disabling one account may leave other access paths active.",
  },
];

const sessionFields = [
  {
    field: "Session identifier",
    purpose:
      "Provide a stable fictional reference for identity, device, actions, approvals, evidence, findings, and closure.",
    strongExample:
      "RA-SESSION-204",
    weakExample:
      "Remote login.",
  },
  {
    field: "Identity",
    purpose:
      "Record the fictional human, service, supplier, emergency, or recovery identity.",
    strongExample:
      "Named support analyst with current case assignment.",
    weakExample:
      "Support team.",
  },
  {
    field: "Device or service context",
    purpose:
      "Record the fictional endpoint, ownership, management, workload, and policy state.",
    strongExample:
      "Managed support device with current device-policy result.",
    weakExample:
      "Laptop.",
  },
  {
    field: "Purpose and approval",
    purpose:
      "Explain the fictional task, ticket, change, case, recovery trigger, sponsor, and approver.",
    strongExample:
      "Approved notification-preference correction for assigned case with supervisor approval.",
    weakExample:
      "Troubleshooting.",
  },
  {
    field: "Destination and object",
    purpose:
      "Define the fictional application, service, interface, system group, or object scope.",
    strongExample:
      "Support console and one assigned case object.",
    weakExample:
      "Internal systems.",
  },
  {
    field: "Allowed actions",
    purpose:
      "Define which fictional operations may occur.",
    strongExample:
      "View assigned case, update approved preference field, and submit confirmation.",
    weakExample:
      "Full access.",
  },
  {
    field: "Start, end, and timeout",
    purpose:
      "Bound the fictional session and require revalidation after time or risk change.",
    strongExample:
      "Starts after approval, ends after task completion or maximum session duration, and times out after inactivity.",
    weakExample:
      "Until no longer needed.",
  },
  {
    field: "Policy results",
    purpose:
      "Record fictional identity, device, role, destination, action, risk, and exception decisions.",
    strongExample:
      "Identity allowed, managed device allowed, assigned object allowed, administrative destination denied.",
    weakExample:
      "Access granted.",
  },
  {
    field: "Actions and results",
    purpose:
      "Connect fictional remote access to the actual business or technical outcome.",
    strongExample:
      "Preference changed from old state to approved new state; notification test succeeded; user confirmation recorded.",
    weakExample:
      "Session successful.",
  },
  {
    field: "Source health",
    purpose:
      "Show whether fictional identity, gateway, device, policy, application, and evidence sources were current and available.",
    strongExample:
      "Gateway current, identity source current, application correlation current, no blind period.",
    weakExample:
      "All systems green.",
  },
  {
    field: "Revocation and closure",
    purpose:
      "Confirm fictional session end, temporary-role removal, exception closure, emergency-access revocation, and owner review.",
    strongExample:
      "Session terminated, temporary assignment removed, approval closed, evidence reviewed, no remaining access.",
    weakExample:
      "User logged out.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define when fictional policy, device, role, destination, evidence, or session design must be reconsidered.",
    strongExample:
      "Review after role, device, supplier, gateway, identity, segmentation, monitoring, or recovery change.",
    weakExample:
      "Review annually.",
  },
];

const lifecycle = [
  {
    stage: "1. Request",
    purpose:
      "A fictional user, owner, supplier sponsor, administrator, support role, or recovery role documents the required remote-access purpose.",
    evidence:
      "Request, purpose, identity, device, role, destination, action, duration, sponsor, owner, and risk.",
    failure:
      "Vague access requests can produce broad standing authority.",
  },
  {
    stage: "2. Identity and device review",
    purpose:
      "The fictional organization confirms human or service identity and evaluates the endpoint or service environment.",
    evidence:
      "Authentication, role, device identity, owner, management state, service identity, lifecycle, and exception.",
    failure:
      "Strong user authentication may hide weak device or service assurance.",
  },
  {
    stage: "3. Authorization review",
    purpose:
      "Authorized fictional owners evaluate destination, object, action, purpose, state, time, environment, and residual risk.",
    evidence:
      "Role, assignment, object, service, destination, approval, conditions, and expiration.",
    failure:
      "Connectivity may be granted without business or object-level authority.",
  },
  {
    stage: "4. Provisioning",
    purpose:
      "The fictional role, destination group, session condition, and expiration are applied through authorized change.",
    evidence:
      "Provisioning record, policy version, approver, start, end, expected result, rollback, and owner.",
    failure:
      "Implemented access may differ from the approved request.",
  },
  {
    stage: "5. Session establishment",
    purpose:
      "The fictional gateway evaluates current identity, device, role, destination, risk, time, and policy.",
    evidence:
      "Authentication, device result, policy result, session identifier, source health, destination, and denial reason.",
    failure:
      "Stale cached authority or unhealthy sources may produce incorrect decisions.",
  },
  {
    stage: "6. Session operation",
    purpose:
      "The fictional identity performs only approved actions while evidence and policy remain healthy.",
    evidence:
      "Session, actions, destinations, application results, ticket, change, alerts, source health, and timeouts.",
    failure:
      "The session may expand beyond purpose or lose correlation with business action.",
  },
  {
    stage: "7. Step-up or exception",
    purpose:
      "Higher-impact fictional actions require stronger verification, independent approval, or temporary exception.",
    evidence:
      "Reason, identity, device, action, approver, time, scope, compensating controls, and residual risk.",
    failure:
      "Broad standing authority may be used instead of task-specific approval.",
  },
  {
    stage: "8. Session closure",
    purpose:
      "The fictional task ends, the session terminates, temporary authority is removed, and business outcome is confirmed.",
    evidence:
      "End time, result, user or owner confirmation, role removal, session termination, and closure.",
    failure:
      "Access may remain active after the task is complete.",
  },
  {
    stage: "9. Recertification and offboarding",
    purpose:
      "The fictional organization confirms current need or removes access after role, supplier, device, project, or employment change.",
    evidence:
      "Owner decision, role review, device status, supplier sponsor, usage, exception, and removal evidence.",
    failure:
      "Stale access may survive visible account changes.",
  },
  {
    stage: "10. Recovery and retrospective",
    purpose:
      "The fictional team restores remote-access capability safely after failure and reviews emergency use, blind periods, revocation, and lessons learned.",
    evidence:
      "Failure, alternate path, emergency approval, source health, restoration, reconciliation, closure, and review.",
    failure:
      "Recovery may restore connectivity without restoring correct authority or evidence.",
  },
];

const evidenceMatrix = [
  {
    id: "RA-01",
    source: "Fictional remote-access inventory",
    observation:
      "Employee, support, administrator, supplier, emergency, recovery, service, and temporary project profiles are documented.",
    supports:
      "Remote-access use cases can be separated by purpose and authority.",
    limits:
      "The inventory does not prove current provisioning, correct policy, session behavior, or complete revocation.",
    use:
      "Build distinct fictional policy and evidence requirements for each profile.",
  },
  {
    id: "RA-02",
    source: "Fictional gateway policy summary",
    observation:
      "Support and infrastructure administrators share one gateway but use different roles and destination groups.",
    supports:
      "A shared gateway may still enforce distinct access profiles.",
    limits:
      "The summary does not prove destination enforcement, session isolation, or effective policy.",
    use:
      "Validate role, destination, device, action, session, and denial evidence.",
  },
  {
    id: "RA-03",
    source: "Fictional supplier access review",
    observation:
      "One supplier role has a current sponsor and destination, but its automatic expiration and recent session evidence are incomplete.",
    supports:
      "Supplier access requires lifecycle and session-evidence review.",
    limits:
      "Incomplete expiration evidence does not prove active misuse or excessive destination scope.",
    use:
      "Mark the access Conditional and assign sponsor validation.",
  },
  {
    id: "RA-04",
    source: "Fictional support ticket pattern",
    observation:
      "Three remote support sessions show valid identity and device evidence but lack complete reason and user-confirmation fields.",
    supports:
      "Authentication and device trust do not prove the business action was authorized or correct.",
    limits:
      "The pattern does not prove harmful intent, wrong changes, or user impact.",
    use:
      "Improve structured support purpose, action, confirmation, and closure evidence.",
  },
  {
    id: "RA-05",
    source: "Fictional emergency-access exercise",
    observation:
      "Emergency access restored administration during an identity outage, but one temporary role remained active after the exercise.",
    supports:
      "Emergency-access revocation and retrospective controls need improvement.",
    limits:
      "One stale temporary role does not prove misuse or permanent broad access.",
    use:
      "Create automatic expiration, independent closure, and post-exercise recertification.",
  },
  {
    id: "RA-06",
    source: "Fictional device-policy review",
    observation:
      "Two unmanaged devices attempted employee application access and were redirected to limited approved functions.",
    supports:
      "Device-aware policy and safe limited alternatives can preserve some mission access.",
    limits:
      "The attempts do not prove compromise or unsafe device behavior.",
    use:
      "Review whether limited access is appropriate for each service and data class.",
  },
  {
    id: "RA-07",
    source: "Fictional source-health dashboard",
    observation:
      "Gateway connectivity is Green, but device-policy freshness is eighteen minutes behind.",
    supports:
      "Remote-access decisions may rely on stale device evidence.",
    limits:
      "Delay does not prove the devices became unsafe or access decisions were wrong.",
    use:
      "Mark device evidence Degraded and define safe limited behavior.",
  },
  {
    id: "RA-08",
    source: "Fictional offboarding review",
    observation:
      "A former project role was removed, but one temporary destination-group membership remains unconfirmed.",
    supports:
      "Revocation must cover every session, role, group, device, exception, and cached authority path.",
    limits:
      "The review does not prove the membership is active or usable.",
    use:
      "Treat offboarding as incomplete until closure evidence is available.",
  },
];

const defects = [
  {
    defect: "Authentication equals authorization",
    observation:
      "A fictional remote user is granted broad access after successful login.",
    impact:
      "The identity may reach destinations or actions outside the approved role and purpose.",
    correction:
      "Evaluate role, object, destination, action, state, time, purpose, and approval separately.",
  },
  {
    defect: "One access profile for everyone",
    observation:
      "Fictional employees, support staff, administrators, suppliers, and recovery roles share one policy group.",
    impact:
      "Different authority and evidence needs collapse into broad standing access.",
    correction:
      "Create distinct profiles with least privilege and lifecycle controls.",
  },
  {
    defect: "Unknown device context",
    observation:
      "A fictional privileged identity connects from an endpoint with unclear ownership or management state.",
    impact:
      "Strong identity cannot establish endpoint suitability.",
    correction:
      "Require managed-device or isolated-session context for higher-impact destinations.",
  },
  {
    defect: "Broad destination access",
    observation:
      "A fictional supplier or support role can reach an entire internal zone.",
    impact:
      "Remote access may bypass segmentation and increase blast radius.",
    correction:
      "Limit access to one support interface, service group, object, or approved function.",
  },
  {
    defect: "Permanent temporary access",
    observation:
      "A fictional project, maintenance, or emergency role remains after its approved window.",
    impact:
      "Temporary authority becomes standing entitlement.",
    correction:
      "Use automatic expiration, closure evidence, recertification, and exception review.",
  },
  {
    defect: "Gateway-only evidence",
    observation:
      "A fictional team records connection start and end but not application action, object, result, approval, or confirmation.",
    impact:
      "The business effect of the session cannot be explained.",
    correction:
      "Correlate gateway, identity, device, application, ticket, change, and owner evidence.",
  },
  {
    defect: "Broad fail-open",
    observation:
      "A fictional identity or device-policy outage allows all internal destinations.",
    impact:
      "A control outage becomes a trust-expansion event.",
    correction:
      "Use fail-limited behavior with pre-approved critical paths and blocked high-impact actions.",
  },
  {
    defect: "No emergency revocation",
    observation:
      "A fictional break-glass role is activated but has no automatic expiration or independent closure review.",
    impact:
      "Emergency authority may remain after the event.",
    correction:
      "Require time limit, session evidence, revocation, retrospective, and owner confirmation.",
  },
  {
    defect: "Incomplete offboarding",
    observation:
      "A fictional account is disabled, but destination groups, temporary roles, sessions, devices, or supplier identities remain unverified.",
    impact:
      "Residual access may survive visible account removal.",
    correction:
      "Use a complete revocation checklist with evidence and closure.",
  },
  {
    defect: "No lifecycle trigger",
    observation:
      "Fictional remote access remains unchanged after role, device, supplier, gateway, identity, segmentation, or recovery changes.",
    impact:
      "Policy and access drift accumulate.",
    correction:
      "Use event-driven review, versions, recertification, findings, and retirement.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define remote-access purposes",
    action:
      "List the fictional employee, support, administrator, supplier, emergency, recovery, service, and temporary project use cases.",
    output:
      "Remote-access use-case register.",
    quality:
      "Each use case has one mission purpose and accountable owner.",
  },
  {
    step: "2",
    title: "Define identities and devices",
    action:
      "Record fictional human, service, supplier, device, workload, ownership, management, lifecycle, and exception context.",
    output:
      "Identity and device-trust register.",
    quality:
      "Identity and device evidence remain separate.",
  },
  {
    step: "3",
    title: "Limit destinations and actions",
    action:
      "Document fictional destination groups, object scope, services, actions, environments, and states for each profile.",
    output:
      "Remote-access authorization matrix.",
    quality:
      "No profile receives broad internal reachability without explicit justification.",
  },
  {
    step: "4",
    title: "Set conditional policies",
    action:
      "Define fictional identity, device, role, purpose, destination, time, risk, session, and step-up conditions.",
    output:
      "Conditional-access decision matrix.",
    quality:
      "The policy explains why access is allowed, denied, limited, or escalated.",
  },
  {
    step: "5",
    title: "Design session evidence",
    action:
      "Record fictional session identifier, identity, device, approval, destination, action, policy result, business outcome, source health, closure, and review trigger.",
    output:
      "Session-evidence and provenance plan.",
    quality:
      "Evidence explains business action without unnecessary personal content.",
  },
  {
    step: "6",
    title: "Govern supplier and temporary access",
    action:
      "Define fictional sponsor, purpose, destination, device context, approval, session evidence, expiration, residual risk, rollback, and closure.",
    output:
      "Supplier and temporary-access register.",
    quality:
      "No external or temporary access remains open without active sponsorship.",
  },
  {
    step: "7",
    title: "Design emergency access",
    action:
      "Define fictional trigger, independent approval, identity, device, destination, action, time limit, evidence, revocation, retrospective, and recovery.",
    output:
      "Emergency and break-glass access plan.",
    quality:
      "Emergency authority is stronger in accountability, not simply broader.",
  },
  {
    step: "8",
    title: "Plan failure and recovery",
    action:
      "Define fictional fail-open, fail-closed, fail-limited, alternate workflow, degraded mode, source-health response, rollback, restoration, and closure.",
    output:
      "Remote-access failure and recovery plan.",
    quality:
      "The plan preserves critical mission needs without uncontrolled trust expansion.",
  },
  {
    step: "9",
    title: "Validate and revoke",
    action:
      "Use invented employee, support, administrator, supplier, unmanaged-device, identity-outage, emergency, offboarding, and recovery cases.",
    output:
      "Validation, revocation, and closure matrix.",
    quality:
      "No real account, device, gateway, session, identity provider, or network is accessed or changed.",
  },
  {
    step: "10",
    title: "Maintain and communicate",
    action:
      "Assign fictional owners, versions, recertification dates, findings, residual risks, review triggers, leadership decisions, and retirement conditions.",
    output:
      "Remote-access architecture and portfolio package.",
    quality:
      "The final artifact is traceable, maintainable, privacy-safe, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What does successful fictional remote authentication prove?",
    choices: [
      "The user may reach every internal resource.",
      "The claimed identity was verified under the supplied conditions, but role, destination, object, action, purpose, device, and time still require authorization.",
      "The device is trusted.",
      "The business action is correct.",
    ],
    answer: 1,
    explanation:
      "Authentication identifies the actor; authorization and business controls determine permitted actions.",
  },
  {
    question:
      "Why should remote-access profiles be separated?",
    choices: [
      "Because every user needs a different product.",
      "Because employee, support, administrator, supplier, emergency, recovery, and service use cases have different authority, evidence, risk, and lifecycle needs.",
      "Because suppliers never require support access.",
      "Because all remote sessions are privileged.",
    ],
    answer: 1,
    explanation:
      "Distinct profiles reduce unnecessary standing authority and improve accountability.",
  },
  {
    question:
      "A privileged identity connects from an unmanaged fictional device. What is the strongest response?",
    choices: [
      "Allow access because the identity is valid.",
      "Deny or limit high-impact access and require an approved managed or isolated device context.",
      "Grant access but disable evidence.",
      "Assume the device is compromised.",
    ],
    answer: 1,
    explanation:
      "Identity strength does not replace endpoint ownership and policy assurance.",
  },
  {
    question:
      "What is strongest for supplier remote access?",
    choices: [
      "Broad internal access while the contract remains active.",
      "Named or owned identity, active sponsor, approved device context, narrow destination, purpose, session evidence, time limit, review, and revocation.",
      "Shared credentials for convenience.",
      "No session logging.",
    ],
    answer: 1,
    explanation:
      "Supplier access should be narrow, sponsored, time-bound, evidenced, and fully revocable.",
  },
  {
    question:
      "Why is gateway-only evidence incomplete?",
    choices: [
      "Because gateways never record sessions.",
      "Because it may show connectivity but not the exact application action, object, approval, result, or business outcome.",
      "Because application evidence is never useful.",
      "Because all sessions should be anonymous.",
    ],
    answer: 1,
    explanation:
      "Strong accountability correlates remote connectivity with the actual task and outcome.",
  },
  {
    question:
      "What is the strongest response to identity-service failure?",
    choices: [
      "Allow every internal destination.",
      "Block every action including recovery.",
      "Use pre-approved fail-limited access, block high-impact actions, preserve alternate evidence, communicate degradation, and restore normal policy through validation.",
      "Disable session evidence.",
    ],
    answer: 2,
    explanation:
      "Fail-limited design balances mission continuity with trust reduction and accountability.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real remote-access diagram but remove names.",
      "Use real session logs with changed dates.",
      "Invent every identity, device, destination, session, policy, record, owner, date, decision, and outcome from scratch.",
      "Use real supplier-access details because they are defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real identities, devices, gateways, suppliers, access paths, evidence, and recovery details.",
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

export default function SecureRemoteAccessConceptsPage() {
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
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Identity, Device, Session, and Revocation
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.5 Secure Remote Access Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional remote access
            around verified identity, device context, role, object, purpose,
            destination, time, session evidence, supplier support, emergency
            access, safe failure, revocation, recovery, privacy, and lifecycle
            governance.
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
          lessonTitle="Secure Remote Access Concepts"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented identities, devices, gateways, destinations, sessions, policies, suppliers, evidence, owners, dates, decisions, and outcomes.",
            "I understand that successful remote authentication does not prove authorization, device safety, approved purpose, safe action, or correct business outcome.",
            "I will separate employee, support, administrator, supplier, emergency, recovery, service, and temporary remote-access use cases.",
            "I will design session evidence, safe failure, revocation, offboarding, emergency access, and recovery with the access policy.",
            "I will preserve privacy, usability, accessibility, support needs, ownership, source health, and uncertainty.",
            "I will not access, connect to, test, configure, bypass, monitor, inspect, revoke, or modify any real remote-access gateway, account, device, session, identity provider, network, or system.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Successful Login Can Still Produce an Unsafe Remote Session"
        >
          <p className="leading-8">
            A fictional Northbridge support analyst signs in successfully from
            a managed device. The gateway allows access, but the analyst's case
            assignment has expired, the destination group includes unrelated
            administrative services, and the session record lacks a complete
            reason and user-confirmation field. Identity and device evidence are
            strong, yet the business authorization and session scope remain
            weak.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The login and device checks passed, so every action in the
                session was authorized.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional identity and device were verified, but role,
                assignment, destination, action, purpose, session evidence, and
                business outcome still require validation.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Secure remote access is a chain of decisions. Authentication is one
            link, not the whole chain.
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
          title="Remote Access Extends Identity and Trust beyond Normal Boundaries"
        >
          <p className="leading-8">
            Fictional remote access may connect employees, administrators,
            suppliers, support staff, service identities, and recovery roles to
            sensitive applications and infrastructure. Without clear device,
            destination, purpose, session, evidence, failure, and revocation
            controls, one access path can bypass segmentation and expand blast
            radius.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Identity and authority",
                "Know who or what acts, which role applies, which object or destination is allowed, and why.",
              ],
              [
                "Session accountability",
                "Connect gateway access to device, approval, action, result, user or owner confirmation, and closure.",
              ],
              [
                "Lifecycle control",
                "Expire temporary access, revoke emergency authority, remove supplier access, and verify offboarding completely.",
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

        <SectionCard eyebrow="Core Framework" title="The R-E-M-O-T-E Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "R — Recognize the use case",
                "Define the fictional employee, support, administrator, supplier, emergency, recovery, service, or project purpose.",
              ],
              [
                "E — Establish identity and device",
                "Verify fictional human or service identity, role, device, ownership, management, lifecycle, and source health.",
              ],
              [
                "M — Minimize authority",
                "Limit fictional destination, object, action, service, environment, state, and duration.",
              ],
              [
                "O — Observe the session",
                "Record fictional gateway, identity, device, approval, policy, action, result, failure, and business outcome evidence.",
              ],
              [
                "T — Treat failure safely",
                "Design fictional fail-open, fail-closed, fail-limited, emergency, degraded, rollback, recovery, and alternate-workflow decisions.",
              ],
              [
                "E — End and evaluate",
                "Terminate fictional sessions, remove temporary authority, revoke completely, recertify, review, and preserve history.",
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
              Decision-ready remote-access statement
            </p>
            <p className="mt-2 leading-7">
              This fictional remote-access decision supports one approved
              purpose for a verified identity and approved device, limited to
              defined destinations, objects, actions, time, session conditions,
              evidence, failure behavior, revocation, residual risk, and review
              triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Secure Remote Access"
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
            Apply Ten Secure Remote-Access Principles
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
          title="Separate Eight Remote-Access Profiles"
        >
          <div className="grid gap-5">
            {accessProfiles.map((item) => (
              <article
                key={item.profile}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.profile}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Identity", item.identity],
                    ["Device", item.device],
                    ["Destinations", item.destinations],
                    ["Evidence", item.evidence],
                    ["Failure behavior", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.profile}-${label}`}
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
            Evaluate Ten Access-Decision Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {decisionDimensions.map((item) => (
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
          eyebrow="Instructional Section 4"
          title="Write Every Session with Twelve Fields"
        >
          <div className="grid gap-5">
            {sessionFields.map((item, index) => (
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
          eyebrow="Instructional Section 5"
          title="Follow the Ten-Stage Remote-Access Lifecycle"
        >
          <div className="grid gap-5">
            {lifecycle.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.stage}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Fictional evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      If weak
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Separate Remote Connectivity from Business Authorization"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Decision layer",
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
                    "Connection",
                    "Can the fictional device reach the remote-access gateway?",
                    "Connection result, source context, gateway health, time, and policy entry.",
                    "Identity, authorization, or safe action.",
                  ],
                  [
                    "Authentication",
                    "Was the fictional human, device, or service identity verified?",
                    "Identity result, device identity, service identity, session, and source health.",
                    "Permission to reach a destination or object.",
                  ],
                  [
                    "Device trust",
                    "Is the fictional endpoint appropriate for this access type?",
                    "Device owner, management state, lifecycle, policy result, and exception.",
                    "That the user is authorized for the task.",
                  ],
                  [
                    "Authorization",
                    "May the fictional identity reach this destination and perform this action?",
                    "Role, assignment, object, destination, action, purpose, approval, state, and time.",
                    "That the requested data or change is correct.",
                  ],
                  [
                    "Business action",
                    "Should the fictional case, preference, service, configuration, or recovery state change?",
                    "Current state, approved operation, old state, new state, result, owner, and confirmation.",
                    "That every dependency or later effect is correct.",
                  ],
                  [
                    "Session closure",
                    "Was fictional access fully ended and temporary authority removed?",
                    "End time, session termination, role removal, group removal, device status, exception closure, and review.",
                    "That no alternate or cached access remains unless validated.",
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
          eyebrow="Instructional Section 7"
          title="Design Safe Failure, Emergency Access, and Complete Revocation"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Identity outage",
                "Allow only pre-approved fictional fail-limited access for critical roles, block high-impact changes, use independent approval and alternate evidence.",
                "Do not broadly trust every cached session.",
              ],
              [
                "Device-policy outage",
                "Limit fictional access to low-risk destinations or isolated workflows until current device evidence returns.",
                "Do not treat stale device evidence as current assurance.",
              ],
              [
                "Gateway outage",
                "Use a separately governed fictional alternate path only for approved critical services and roles.",
                "Do not create an undocumented bypass.",
              ],
              [
                "DNS or destination failure",
                "Preserve fictional destination validation, communicate degraded status, and avoid broad alternate routing.",
                "Connectivity should not silently shift to unknown targets.",
              ],
              [
                "Monitoring outage",
                "Mark fictional blind periods, limit high-impact remote changes, use alternate evidence, and reassess dependent decisions.",
                "Missing evidence is not proof of safe behavior.",
              ],
              [
                "Emergency access",
                "Require fictional trigger, independent approver, strong identity, approved device, narrow destination, time limit, evidence, revocation, and retrospective.",
                "Emergency should not mean unaccountable.",
              ],
              [
                "Supplier offboarding",
                "Remove fictional identities, sessions, destination groups, device trust, exceptions, support paths, and cached authority.",
                "Ending a contract or disabling one account may be incomplete.",
              ],
              [
                "Role or project change",
                "Revoke fictional assignments, roles, sessions, temporary groups, approvals, and device associations.",
                "Access should not remain because the person still works for the organization.",
              ],
              [
                "Recovery operation",
                "Use fictional dependency order, recovery identity, destination gates, evidence, reconciliation, communication, revocation, and closure.",
                "Restored connectivity does not prove correct authority.",
              ],
              [
                "Retirement",
                "Preserve fictional access history, owner decisions, closure evidence, lessons learned, and review triggers.",
                "Future teams should not recreate unsupported standing access.",
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
          eyebrow="Fictional Remote-Access View"
          title="Northbridge Layered Remote-Access Architecture"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It shows access decisions and evidence without real
            gateways, addresses, routes, credentials, device identifiers,
            session records, supplier details, configuration steps, or internal
            access paths.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Employee access", "Verified identity, managed device, approved applications"],
                ["Support access", "Role, case assignment, reason, action, confirmation"],
                ["Administrator access", "Privileged identity, approved device, destination, change"],
                ["Supplier access", "Sponsor, purpose, isolated destination, expiration"],
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
                Fictional Northbridge Remote-Access Decision Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Identity", "Human, device, service, supplier, emergency, recovery"],
                  ["Purpose", "Work, support, administration, maintenance, recovery"],
                  ["Authorization", "Role, object, destination, action, state, time"],
                  ["Session", "Start, end, timeout, policy, evidence, step-up"],
                  ["Segmentation", "Only approved destination and service groups"],
                  ["Evidence", "Gateway, identity, device, application, ticket, source health"],
                  ["Failure", "Fail-open, fail-closed, fail-limited, alternate workflow"],
                  ["Lifecycle", "Provision, recertify, revoke, offboard, recover, retire"],
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
                ["Temporary project", "Sponsor, narrow scope, automatic expiration, closure"],
                ["Emergency access", "Trigger, approver, limited destination, revocation"],
                ["Recovery access", "Dependency order, validation, reconciliation, closure"],
                ["Service access", "Owned identity, one operation, one destination, health"],
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
          title="Fake Northbridge Remote-Access Dashboard"
          subtitle="Fictional identity, device, destination, session, supplier, emergency, revocation, and evidence status for training only."
          metrics={[
            {
              label: "Access profiles with complete policy",
              value: "6 / 8",
              note: "Supplier and temporary project profiles still lack complete expiration or closure evidence.",
            },
            {
              label: "Sessions missing business-action evidence",
              value: "3",
              note: "Identity and device checks passed, but reason, object, result, or confirmation fields remain incomplete.",
            },
            {
              label: "Revocation actions incomplete",
              value: "2",
              note: "One emergency role and one temporary destination-group membership require closure evidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Emergency Role Remains Active after Exercise"
          severity="High"
          time="5:02 PM"
          source="Fake Northbridge Remote-Access Assurance Console"
          details="A fictional break-glass role used during an identity-outage exercise remains assigned after the declared event ended. The session is closed, but automatic expiration, role removal, destination-group removal, and independent closure review are incomplete."
          recommendation="Treat revocation as incomplete. Remove the fictional emergency role and related group memberships through authorized closure, verify no active sessions or cached authority remain, review evidence, document residual risk, and improve automatic expiration."
        />

        <FakeLogPanel
          title="Fake Remote-Access Review Timeline"
          logs={[
            "09:00 PROFILE employee='defined'",
            "09:08 PROFILE support='defined'",
            "09:16 PROFILE administrator='defined'",
            "09:24 PROFILE supplier='conditional'",
            "09:32 PROFILE emergency='defined'",
            "09:40 PROFILE recovery='defined'",
            "09:48 PROFILE service='defined'",
            "09:56 PROFILE project='conditional'",
            "10:04 DEVICE managed-policy='current'",
            "10:12 DEVICE unmanaged-limited='2-attempts'",
            "10:20 SESSION complete-evidence='17-of-20'",
            "10:28 SESSION business-action-gap='3'",
            "10:36 SUPPLIER expiration='incomplete'",
            "10:44 EMERGENCY exercise='completed'",
            "10:52 EMERGENCY role-removal='incomplete'",
            "11:00 OFFBOARD role-removed='true'",
            "11:08 OFFBOARD destination-group='unconfirmed'",
            "11:16 SOURCE device-policy='delayed-18m'",
            "11:24 CONFIDENCE remote-access='moderate'",
            "17:02 ALERT issue='emergency-revocation-incomplete'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Remote-Access Evidence Supports—and What It Does Not Prove
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
                    ["Remote-access use", item.use],
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
          title="Which Remote-Access Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional emergency-role evidence?"
          evidence={[
            "The fictional emergency role was activated during an approved identity-outage exercise.",
            "The related remote session is closed.",
            "The emergency role remains assigned.",
            "Destination-group removal is not yet confirmed.",
            "Automatic expiration and independent closure review are incomplete.",
            "No supplied evidence proves misuse or an active session.",
            "The role can affect privileged administrative destinations.",
            "Overall remote-access confidence is Moderate.",
          ]}
          options={[
            "Treat revocation as incomplete, assign the fictional identity and recovery owners, remove the emergency role and related groups through authorized closure, verify no active or cached access remains, review evidence, and improve automatic expiration.",
            "Assume the role was misused and begin an incident response.",
            "Ignore the role because the session is closed.",
            "Disable all remote access permanently.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the supplied evidence, preserves uncertainty, closes the full access lifecycle, and improves future emergency governance without unsupported claims."
        />

        <SectionCard
          eyebrow="Remote-Access Defects"
          title="Ten Problems That Weaken Remote Access"
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
          title="Build the Northbridge Secure Remote-Access Package"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            access, connect to, test, configure, bypass, monitor, inspect,
            revoke, disable, or modify any real remote-access gateway, account,
            identity provider, device, session, network, supplier connection,
            administrative path, or organizational infrastructure.
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
          title="A Supplier Needs Urgent Support Access"
          scenario="A fictional supplier reports a service issue and requests broad remote access to several internal zones. The supplier has a current sponsor, but no destination-specific approval, session-evidence plan, automatic expiration, or rollback process exists."
          choices={[
            {
              label: "Choice A",
              response:
                "Create a fictional time-bound supplier session limited to one approved support interface, require named identity, sponsor, approved device context, purpose, session evidence, destination restriction, expiration, rollback, and closure review.",
              outcome:
                "Best defensive choice. It supports urgent work without granting broad standing access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Grant broad internal access because the supplier supports a critical service.",
              outcome:
                "Weak. Criticality does not justify unlimited destination or action scope.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Deny every supplier-support option and wait indefinitely.",
              outcome:
                "Weak. A safe, bounded, authorized path can support the mission.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Device-Policy Evidence Becomes Stale"
          scenario="A fictional administrator successfully authenticates, but device-policy evidence is eighteen minutes behind. The requested action affects a high-impact management destination."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark device trust Degraded, block or delay the high-impact action, allow only approved low-risk functions if justified, use alternate evidence, notify owners, and revalidate when current device evidence returns.",
              outcome:
                "Best choice. It preserves mission options without treating stale evidence as current assurance.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow the action because the administrator identity is valid.",
              outcome:
                "Weak. Identity verification does not establish current device suitability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume the device is compromised.",
              outcome:
                "Weak. Stale evidence supports caution, not an unsupported compromise claim.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design One Remote-Access Architecture for Conflicting Needs"
        >
          <p className="leading-8">
            Fictional Northbridge needs employee application access, remote
            support, infrastructure administration, supplier maintenance,
            emergency access, and recovery access. Leadership wants a simple
            experience, while privacy, identity, network, support, and recovery
            owners need different controls.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Separate profiles",
                "Create fictional employee, support, administrator, supplier, emergency, recovery, service, and project profiles.",
              ],
              [
                "Use shared identity carefully",
                "Keep one fictional identity foundation but apply distinct role, device, destination, action, time, and evidence decisions.",
              ],
              [
                "Limit destinations",
                "Expose only approved application, support, management, supplier, and recovery interfaces.",
              ],
              [
                "Design session evidence",
                "Correlate fictional gateway, identity, device, approval, application, change, support, and closure records.",
              ],
              [
                "Plan degraded access",
                "Use fail-limited behavior, alternate evidence, blocked high-impact actions, emergency approval, and recovery.",
              ],
              [
                "Revoke completely",
                "Remove fictional sessions, roles, groups, devices, supplier access, temporary exceptions, and cached authority.",
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
              Produce a fictional remote-access architecture, profile matrix,
              identity and device policy, destination and action matrix,
              supplier-access plan, session-evidence model, emergency-access
              workflow, failure and recovery plan, revocation checklist,
              residual-risk statement, and leadership explanation.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Secure Remote Access Checklist"
          items={[
            "I can explain why remote connectivity, authentication, device trust, authorization, business action, and session closure are separate decisions.",
            "I can distinguish fictional employee, support, administrator, supplier, emergency, recovery, service, and temporary project access.",
            "I can evaluate human, device, service, supplier, role, object, destination, action, purpose, time, and state context.",
            "I can design least-privilege and least-connectivity remote-access profiles.",
            "I can require stronger identity, device, approval, destination, session, and revocation controls for privileged access.",
            "I can build session evidence that connects gateway access to the actual business or technical outcome.",
            "I can govern supplier and temporary access with active sponsorship, expiration, evidence, rollback, and closure.",
            "I can design emergency access with trigger, independent approval, strong identity, approved device, narrow destination, evidence, revocation, and retrospective.",
            "I can design fail-open, fail-closed, fail-limited, alternate-workflow, rollback, and recovery behavior.",
            "I can revoke sessions, roles, groups, devices, temporary authority, supplier relationships, emergency access, and cached permissions.",
            "I can assign owners, recertification dates, source-health requirements, findings, residual risks, review triggers, and retirement conditions.",
            "I can create a completely fictional remote-access artifact without using real accounts, gateways, addresses, device identifiers, session records, credentials, suppliers, logs, or internal access paths.",
          ]}
        />

        <MiniQuiz
          title="A4.5 Mini Quiz: Secure Remote Access Concepts"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Secure Remote-Access Architecture and Governance Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, employee profile, support profile, administrator profile, supplier profile, emergency profile, recovery profile, service profile, temporary project profile, human identity, device identity, service identity, role, assignment, object scope, destination groups, allowed actions, environments, states, time, duration, timeout, step-up verification, just-in-time access, just-enough access, session isolation, gateway evidence, device evidence, identity evidence, application evidence, source health, privacy purpose, access, retention, supplier sponsorship, emergency approval, fail-open, fail-closed, fail-limited, alternate workflow, rollback, recovery, revocation, offboarding, recertification, validation cases, findings, completion criteria, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, identity, device, gateway, destination, session, policy, record, owner, date, decision, and outcome is invented."
          tips={[
            "Separate remote connectivity, authentication, device trust, authorization, business action, and session closure.",
            "Create distinct fictional profiles for employee, support, administrator, supplier, emergency, recovery, service, and temporary access.",
            "Correlate gateway evidence with identity, device, destination, application, ticket, change, confirmation, and closure evidence.",
            "Design failure, emergency access, revocation, offboarding, and recovery with the initial access policy.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Wireless Defense Strategy?"
        >
          <p className="leading-8">
            Before moving to A4.6, rate your readiness from 1 to 5 for remote
            identity, device trust, roles, assignments, destinations, actions,
            sessions, supplier access, emergency use, evidence, failure,
            revocation, recovery, lifecycle, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why successful authentication does not prove authorization or safe action.",
              "I can create distinct remote-access profiles for different purposes and risk levels.",
              "I can require appropriate device context without assuming an unmanaged device is malicious.",
              "I can limit remote access by destination, object, action, purpose, environment, state, and time.",
              "I can correlate gateway evidence with business-action and closure evidence.",
              "I can design supplier and emergency access with stronger expiration and revocation.",
              "I can use fail-limited behavior when identity, device, gateway, or monitoring evidence is degraded.",
              "I can produce a safe fictional remote-access package without copying, modifying, or exposing real access information.",
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
            Record one fictional profile you narrowed, one device-trust
            decision, one session-evidence gap, one emergency-access correction,
            one revocation action, and one question you will carry into A4.6.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Secure remote access is a fictional identity, device, authorization, destination, session, evidence, failure, recovery, and lifecycle system.",
            "Successful authentication does not prove device suitability, destination authority, object permission, safe action, or correct business outcome.",
            "Employee, support, administrator, supplier, emergency, recovery, service, and temporary access require distinct profiles.",
            "Least privilege and least connectivity limit fictional remote access by role, object, destination, action, purpose, environment, state, and time.",
            "Session evidence should connect gateway, identity, device, approval, application, change, result, confirmation, and closure.",
            "Supplier and temporary access require active sponsorship, narrow scope, evidence, expiration, rollback, residual risk, and closure.",
            "Emergency access should be stronger in approval and accountability, not simply broader.",
            "Fail-limited behavior can preserve critical mission access without turning a control outage into uncontrolled trust expansion.",
            "Revocation must cover sessions, roles, groups, devices, suppliers, temporary authority, emergency access, exceptions, and cached permissions.",
            "Every CyberShield remote-access artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, design fictional wireless defense around employee, managed,
            guest, service-device, and administrative network classes,
            onboarding, identity, device context, management, monitoring,
            privacy, support, degraded operation, recovery, and lifecycle.
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