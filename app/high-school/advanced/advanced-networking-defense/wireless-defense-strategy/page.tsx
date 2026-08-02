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
const previousLesson = `${modulePath}/secure-remote-access-concepts`;
const nextLesson = `${modulePath}/network-baselines-and-anomaly-concepts`;

const objectives = [
  "Explain fictional wireless defense as a complete identity, device, network-class, onboarding, authorization, management, evidence, support, privacy, failure, recovery, and lifecycle system.",
  "Differentiate fictional managed-device, employee, guest, service-device, administrative, temporary, emergency, and recovery wireless use cases by purpose, identity, device trust, destination, ownership, and risk.",
  "Design fictional wireless policy that connects user identity, device identity, network class, destination class, session evidence, segmentation, monitoring, revocation, and safe alternatives.",
  "Evaluate fictional wireless evidence without assuming that a successful connection proves authorization, device safety, approved purpose, correct network class, or harmless behavior.",
  "Create a portfolio-ready fictional wireless defense strategy with network classes, onboarding, policy, monitoring, support, degraded operation, recovery, ownership, residual risk, validation, and review triggers.",
];

const vocabulary = [
  [
    "Wireless defense strategy",
    "A fictional governance and architecture approach for deciding which users and devices may join which wireless classes, reach which destinations, produce which evidence, and follow which lifecycle.",
  ],
  [
    "Wireless network class",
    "A fictional policy group for users and devices with similar purpose, identity, ownership, destination, evidence, support, and recovery requirements.",
  ],
  [
    "Managed-device wireless",
    "A fictional class for organization-owned or approved devices with current identity, ownership, policy, lifecycle, and support evidence.",
  ],
  [
    "Employee wireless",
    "A fictional class for approved employee identities and devices reaching defined business services under documented policy.",
  ],
  [
    "Guest wireless",
    "A fictional class designed for visitors or untrusted personal devices with limited access and separation from internal services.",
  ],
  [
    "Service-device wireless",
    "A fictional class for scanners, displays, sensors, printers, kiosks, or other non-user devices with narrow purpose, identity, owner, destination, and lifecycle.",
  ],
  [
    "Administrative wireless",
    "A fictional class or use case for privileged management requiring stronger identity, device, destination, evidence, time, approval, and revocation.",
  ],
  [
    "Device onboarding",
    "The fictional process of registering identity, ownership, class, purpose, policy, evidence, support, expiration, and allowed destinations before wireless access.",
  ],
  [
    "Device identity",
    "A fictional representation used to distinguish one approved device or workload from another.",
  ],
  [
    "User identity",
    "A fictional representation used to verify the human associated with a wireless session.",
  ],
  [
    "Network authorization",
    "A fictional decision about which wireless class and destination group a user or device may access under defined conditions.",
  ],
  [
    "Captive-portal concept",
    "A fictional user-facing step that may provide terms, identity, sponsor, or limited access for guest onboarding; it does not itself prove device trust.",
  ],
  [
    "Wireless controller concept",
    "A fictional management capability used to apply approved configuration, policy, evidence, health, and lifecycle decisions across wireless infrastructure.",
  ],
  [
    "Access-point concept",
    "A fictional wireless infrastructure component that provides approved connectivity under centrally governed identity, policy, evidence, and management.",
  ],
  [
    "Roaming",
    "A fictional transition of a wireless session between coverage areas while preserving or re-evaluating identity, authorization, evidence, and service continuity.",
  ],
  [
    "Wireless segmentation",
    "Fictional separation of managed, employee, guest, service-device, administrative, supplier, recovery, and other wireless communication.",
  ],
  [
    "Client isolation concept",
    "A fictional policy that limits direct communication among devices in the same wireless class when peer communication is unnecessary.",
  ],
  [
    "Rogue-device finding",
    "A fictional observation that an unowned or unexpected wireless-capable device appears in supplied evidence; it does not automatically prove malicious intent.",
  ],
  [
    "Rogue-access-point finding",
    "A fictional observation that an unapproved or unexpected wireless infrastructure identity appears in supplied evidence; it requires validation before conclusions.",
  ],
  [
    "Coverage gap",
    "A fictional area where approved wireless service or evidence is unavailable or unreliable.",
  ],
  [
    "Interference condition",
    "A fictional radio or environmental condition that may reduce quality or availability without proving harmful activity.",
  ],
  [
    "Wireless source health",
    "Fictional evidence about controller, access-point, identity, policy, session, event, clock, collector, and monitoring freshness.",
  ],
  [
    "Wireless offboarding",
    "The fictional process of removing identities, device records, network-class membership, sessions, exceptions, sponsor relationships, and cached authority.",
  ],
  [
    "Wireless review trigger",
    "A fictional event requiring revalidation, such as device, identity, network class, service, supplier, building, management, monitoring, remote-access, DNS, recovery, or mission change.",
  ],
];

const principles = [
  {
    principle: "Begin with wireless purpose",
    description:
      "Every fictional wireless class should exist for a defined user, device, service, support, guest, administrative, or recovery need.",
    strongPractice:
      "Create separate managed, guest, service-device, and administrative classes because their destinations, evidence, support, and risk differ.",
    failure:
      "One shared wireless network may combine incompatible trust and lifecycle requirements.",
  },
  {
    principle: "Identify both user and device",
    description:
      "Fictional wireless decisions should distinguish the human identity, device identity, ownership, class, and management state.",
    strongPractice:
      "Allow an employee identity on a managed device to reach approved applications while limiting an unmanaged device to low-risk functions.",
    failure:
      "A valid user identity may be paired with an unknown or unowned endpoint.",
  },
  {
    principle: "Authorize the network class",
    description:
      "Successful fictional connection should not automatically grant the same destinations or services to every identity and device.",
    strongPractice:
      "Map each user-device pair to one approved network class and destination set.",
    failure:
      "Authentication may be mistaken for broad internal authorization.",
  },
  {
    principle: "Separate guests and service devices",
    description:
      "Fictional visitors and non-user devices often require different onboarding, ownership, communication, monitoring, support, and retirement.",
    strongPractice:
      "Guest devices receive limited external access, while service devices reach only named application and management services.",
    failure:
      "Guests or service devices may inherit unnecessary internal reachability.",
  },
  {
    principle: "Protect wireless management",
    description:
      "Fictional administrative interfaces, controller services, support paths, configuration changes, and recovery functions require stronger controls.",
    strongPractice:
      "Use separate privileged identities, managed administrative devices, approved destinations, change evidence, and revocation.",
    failure:
      "Normal wireless access may become a path to infrastructure management.",
  },
  {
    principle: "Design evidence with onboarding",
    description:
      "Fictional defenders need evidence of identity, device, class, policy, destination, session, source health, support, exception, and offboarding.",
    strongPractice:
      "Link onboarding records with session and destination-policy evidence.",
    failure:
      "A device may remain connected or misclassified without accountable ownership.",
  },
  {
    principle: "Treat unexpected devices carefully",
    description:
      "A fictional unrecognized device or access point supports validation and ownership questions, not automatic claims of malicious intent.",
    strongPractice:
      "Record observation, scope, source health, alternatives, owner search, confidence, and next action.",
    failure:
      "Teams may escalate harmless lab, support, replacement, or stale-inventory conditions incorrectly.",
  },
  {
    principle: "Plan safe degraded operation",
    description:
      "Fictional identity, controller, policy, DNS, monitoring, or onboarding services may fail.",
    strongPractice:
      "Define fail-limited access, blocked administrative actions, safe guest behavior, alternate support, evidence, and recovery.",
    failure:
      "Broad fail-open behavior can expand trust, while unplanned fail-closed behavior can block critical service devices.",
  },
  {
    principle: "Preserve privacy and accessibility",
    description:
      "Fictional wireless evidence and onboarding should collect only required data and provide understandable, accessible alternatives.",
    strongPractice:
      "Use minimal identity, device, class, session, and policy fields with clear support and retention.",
    failure:
      "Over-collection or inaccessible onboarding may create privacy and usability harm.",
  },
  {
    principle: "Maintain the full lifecycle",
    description:
      "Fictional wireless access requires request, onboarding, authorization, session, monitoring, support, recertification, exception, offboarding, recovery, and retirement.",
    strongPractice:
      "Review after identity, device, class, destination, building, service, supplier, monitoring, or recovery change.",
    failure:
      "Stale devices and network-class memberships may remain indefinitely.",
  },
];

const wirelessClasses = [
  {
    className: "Managed employee class",
    purpose:
      "Support fictional employees using organization-managed devices to reach approved business applications.",
    identity:
      "Current employee identity plus approved managed-device identity.",
    destinations:
      "Assigned application and support services only.",
    controls:
      "User and device verification, network authorization, segmentation, session evidence, source health, support, and revocation.",
    evidence:
      "User, device, class, policy result, session, destination class, denial, source health, and offboarding.",
    failure:
      "Use safe limited access or approved alternate workflow if device or identity evidence is degraded.",
  },
  {
    className: "Employee personal-device class",
    purpose:
      "Support limited fictional access from approved personal or unmanaged devices where policy permits.",
    identity:
      "Current employee identity with reduced device assurance.",
    destinations:
      "Low-risk web applications or isolated access functions only.",
    controls:
      "Conditional access, limited destinations, stronger application controls, privacy notice, session limits, and support.",
    evidence:
      "User, device category, class, policy result, destination, session, denial, exception, and source health.",
    failure:
      "Do not silently promote the device into a managed class.",
  },
  {
    className: "Guest class",
    purpose:
      "Provide fictional visitors with limited connectivity separate from internal services.",
    identity:
      "Guest, sponsor, event, or accepted terms according to approved design.",
    destinations:
      "External or specifically approved visitor services only.",
    controls:
      "Isolation, limited duration, rate handling, privacy notice, support, source health, and expiration.",
    evidence:
      "Guest session, sponsor or event context, class, policy, duration, source health, and closure.",
    failure:
      "Preserve separation even if identity or onboarding services are unavailable.",
  },
  {
    className: "Service-device class",
    purpose:
      "Support fictional printers, displays, scanners, kiosks, sensors, and other non-user devices.",
    identity:
      "Owned device identity with purpose, model category, location class, lifecycle, and sponsor.",
    destinations:
      "Only required application, management, update, DNS, time, monitoring, or support services.",
    controls:
      "Narrow policy, client isolation where appropriate, ownership, monitoring, replacement, and retirement.",
    evidence:
      "Device identity, owner, class, destination, session, policy result, health, support, and lifecycle.",
    failure:
      "Move to safe limited operation or manual fallback rather than broad network access.",
  },
  {
    className: "Administrative class",
    purpose:
      "Support fictional privileged wireless management or emergency administration where explicitly approved.",
    identity:
      "Separate privileged human identity plus managed administrative device.",
    destinations:
      "Only approved controller, management, monitoring, or recovery interfaces.",
    controls:
      "Strong identity, device assurance, destination restriction, approval, session evidence, change control, and revocation.",
    evidence:
      "Administrator, device, approval, destination, action, change, result, session, source health, and closure.",
    failure:
      "Use controlled emergency administration or out-of-band alternatives.",
  },
  {
    className: "Supplier support class",
    purpose:
      "Support fictional supplier maintenance for one approved wireless or service relationship.",
    identity:
      "Named supplier identity with active sponsor and approved device context.",
    destinations:
      "One support or management interface as authorized.",
    controls:
      "Time-bound session, sponsor approval, destination restriction, evidence, rollback, expiration, and closure.",
    evidence:
      "Supplier, sponsor, device, class, destination, action, result, source health, and revocation.",
    failure:
      "Pause access and use an approved internal support path.",
  },
  {
    className: "Temporary event class",
    purpose:
      "Support a fictional event, project, classroom, or short-term operational need.",
    identity:
      "Event participant, sponsor, project role, or device registration.",
    destinations:
      "Only event-specific services and approved external access.",
    controls:
      "Start and end dates, capacity planning, isolation, privacy notice, support, expiration, and cleanup.",
    evidence:
      "Event, sponsor, class, session, destination, policy, source health, expiration, and closure.",
    failure:
      "Avoid converting temporary event access into permanent guest or employee access.",
  },
  {
    className: "Recovery wireless class",
    purpose:
      "Support fictional emergency coordination, temporary service restoration, validation, or recovery operations.",
    identity:
      "Recovery coordinator and approved recovery-device identities.",
    destinations:
      "Defined recovery, identity, DNS, monitoring, communication, and management services.",
    controls:
      "Trigger, independent approval, time limit, destination gates, session evidence, revocation, reconciliation, and closure.",
    evidence:
      "Trigger, identity, device, class, destination, action, result, source health, recovery state, revocation, and closure.",
    failure:
      "Return to controlled degraded operation and preserve alternate evidence.",
  },
];

const decisionDimensions = [
  {
    dimension: "Mission purpose",
    question:
      "Why does the fictional user or device need wireless access, and which service outcome depends on it?",
    evidence:
      "Service objective, user journey, device purpose, support plan, owner decision, and impact.",
    warning:
      "Convenience alone may not justify broad internal access.",
  },
  {
    dimension: "User identity",
    question:
      "Which fictional employee, guest, supplier, administrator, support, or recovery role is associated with the session?",
    evidence:
      "Identity result, role, sponsor, assignment, event context, approval, and lifecycle.",
    warning:
      "User identity may not apply to non-user service devices.",
  },
  {
    dimension: "Device identity",
    question:
      "Which fictional endpoint is connecting, who owns it, and what lifecycle applies?",
    evidence:
      "Device identity, owner, class, registration, management state, service purpose, expiration, and support.",
    warning:
      "A valid user identity does not prove the device belongs in the same class.",
  },
  {
    dimension: "Network class",
    question:
      "Which fictional wireless class matches the purpose, identity, device, ownership, and risk?",
    evidence:
      "Class decision, policy result, device category, user role, sponsor, and exception.",
    warning:
      "Defaulting every device into one internal class defeats segmentation.",
  },
  {
    dimension: "Destinations",
    question:
      "Which fictional application, service, DNS, update, monitoring, management, or recovery destinations are required?",
    evidence:
      "Destination group, dependency, owner, service purpose, policy, and usage.",
    warning:
      "Broad destination access can increase blast radius.",
  },
  {
    dimension: "Session and time",
    question:
      "When does the fictional session begin, end, roam, revalidate, time out, or expire?",
    evidence:
      "Session identifier, start, end, roaming, timeout, event window, exception, and review date.",
    warning:
      "Temporary or guest access should not remain indefinitely.",
  },
  {
    dimension: "Source health",
    question:
      "Are fictional controller, access-point, identity, policy, session, clock, and collector sources current?",
    evidence:
      "Connectivity, freshness, event volume, policy version, queue age, clock alignment, and blind periods.",
    warning:
      "Green infrastructure does not prove complete or current evidence.",
  },
  {
    dimension: "Monitoring and privacy",
    question:
      "Which fictional evidence is necessary, who may access it, and how long is it retained?",
    evidence:
      "Purpose, fields, access role, retention, deletion, source health, and privacy review.",
    warning:
      "Wireless visibility should not become unnecessary personal tracking.",
  },
  {
    dimension: "Failure and support",
    question:
      "What happens if fictional identity, device policy, controller, access point, DNS, monitoring, or onboarding fails?",
    evidence:
      "Degraded class, safe limited access, blocked actions, alternate support, communication, and recovery.",
    warning:
      "Fail-open and fail-closed behavior can each create mission harm.",
  },
  {
    dimension: "Revocation and lifecycle",
    question:
      "How is fictional access removed after device, role, supplier, event, support, recovery, ownership, or mission change?",
    evidence:
      "Session termination, class removal, device removal, sponsor closure, exception closure, recertification, and retirement.",
    warning:
      "Deleting one record may leave active sessions or cached authority.",
  },
];

const onboardingFields = [
  {
    field: "Device record",
    purpose:
      "Provide a stable fictional reference for ownership, class, sessions, evidence, support, findings, and retirement.",
    strongExample:
      "WD-DEVICE-118",
    weakExample:
      "Lobby tablet.",
  },
  {
    field: "Owner or sponsor",
    purpose:
      "Assign fictional accountability for purpose, lifecycle, support, evidence, and removal.",
    strongExample:
      "Facilities service-device owner with support sponsor.",
    weakExample:
      "IT.",
  },
  {
    field: "Purpose",
    purpose:
      "Explain why the fictional user or device needs wireless access.",
    strongExample:
      "Display approved queue status from the student-support application.",
    weakExample:
      "Needs Wi-Fi.",
  },
  {
    field: "Identity type",
    purpose:
      "Record fictional human, device, service, supplier, guest, administrative, or recovery identity.",
    strongExample:
      "Owned service-device identity with no human login.",
    weakExample:
      "Trusted device.",
  },
  {
    field: "Network class",
    purpose:
      "Assign the fictional device to the narrowest appropriate wireless class.",
    strongExample:
      "Service-device class.",
    weakExample:
      "Internal wireless.",
  },
  {
    field: "Allowed destinations",
    purpose:
      "Define which fictional applications, services, DNS, updates, monitoring, or management systems are required.",
    strongExample:
      "Queue-display service, approved DNS, time, update, and monitoring services only.",
    weakExample:
      "All internal systems.",
  },
  {
    field: "Session conditions",
    purpose:
      "Define fictional time, roaming, revalidation, timeout, event, location class, or recovery conditions.",
    strongExample:
      "Continuous service session with daily health review and revalidation after policy or ownership change.",
    weakExample:
      "Always connected.",
  },
  {
    field: "Evidence requirements",
    purpose:
      "Define fictional identity, class, session, policy, destination, source-health, support, and lifecycle evidence.",
    strongExample:
      "Device identity, class decision, policy result, destinations, source health, owner review, and retirement record.",
    weakExample:
      "Controller logs.",
  },
  {
    field: "Privacy and retention",
    purpose:
      "Limit fictional collection, audience, retention, and use to approved defensive purposes.",
    strongExample:
      "Retain minimized session and policy metadata for the approved review period.",
    weakExample:
      "Keep everything forever.",
  },
  {
    field: "Support and fallback",
    purpose:
      "Explain how fictional users or devices continue safely when onboarding or wireless service fails.",
    strongExample:
      "Use wired fallback or manual queue display process under approved degraded operation.",
    weakExample:
      "Open unrestricted wireless.",
  },
  {
    field: "Expiration and offboarding",
    purpose:
      "Define when fictional guest, event, supplier, project, device, or emergency access ends.",
    strongExample:
      "Expires at event close or device retirement; removes sessions, class membership, sponsor link, and exceptions.",
    weakExample:
      "Remove when remembered.",
  },
  {
    field: "Review trigger",
    purpose:
      "Define which fictional changes require revalidation.",
    strongExample:
      "Review after owner, device, class, destination, building, controller, identity, monitoring, supplier, or recovery change.",
    weakExample:
      "Review yearly.",
  },
];

const lifecycle = [
  {
    stage: "1. Need identification",
    purpose:
      "A fictional owner defines the user, device, service, event, supplier, administrative, or recovery need.",
    evidence:
      "Purpose, owner, identity type, device type, destinations, class, duration, and risk.",
    failure:
      "A vague need may create broad standing wireless access.",
  },
  {
    stage: "2. Ownership and classification",
    purpose:
      "The fictional organization confirms who owns or sponsors the device and which class fits.",
    evidence:
      "Owner, sponsor, user role, device category, management state, support, lifecycle, and exception.",
    failure:
      "Unowned devices may remain connected indefinitely.",
  },
  {
    stage: "3. Onboarding",
    purpose:
      "The fictional identity, device, class, destination, session, evidence, expiration, and support policy are registered.",
    evidence:
      "Onboarding record, approver, class decision, policy version, start, end, and expected result.",
    failure:
      "The implemented class may not match the approved purpose.",
  },
  {
    stage: "4. Network authorization",
    purpose:
      "The fictional system evaluates user, device, class, destination, time, source health, and exception conditions.",
    evidence:
      "Identity result, device result, class, policy decision, denial reason, source health, and session.",
    failure:
      "Stale or missing identity and device evidence may produce incorrect access.",
  },
  {
    stage: "5. Session operation",
    purpose:
      "The fictional user or device communicates only with approved destinations under current policy.",
    evidence:
      "Session, class, destinations, policy results, roaming, source health, support, and alerts.",
    failure:
      "The session may drift into unexpected destinations or remain after purpose ends.",
  },
  {
    stage: "6. Monitoring and support",
    purpose:
      "Fictional defenders and support owners review health, policy, ownership, failures, user impact, and evidence.",
    evidence:
      "Controller health, access-point health, identity, session, destination, denial, support, alert, and source-health records.",
    failure:
      "A Green dashboard may hide stale evidence or poor user experience.",
  },
  {
    stage: "7. Exception or temporary change",
    purpose:
      "The fictional organization authorizes a bounded event, supplier, support, recovery, or emergency deviation.",
    evidence:
      "Reason, owner, approver, class, destinations, dates, compensating controls, residual risk, and rollback.",
    failure:
      "Temporary access may become permanent.",
  },
  {
    stage: "8. Recertification",
    purpose:
      "The fictional owner confirms continued purpose, ownership, class, destinations, evidence, and support.",
    evidence:
      "Owner decision, usage, class, destination, source health, exception, and review date.",
    failure:
      "Stale devices and memberships may survive unnoticed.",
  },
  {
    stage: "9. Offboarding and retirement",
    purpose:
      "The fictional organization removes sessions, identities, class membership, sponsor links, exceptions, and cached authority.",
    evidence:
      "Retirement request, session termination, device removal, group removal, exception closure, and owner confirmation.",
    failure:
      "Removing one record may leave residual access.",
  },
  {
    stage: "10. Recovery and lessons learned",
    purpose:
      "The fictional team restores correct wireless policy, evidence, support, DNS, management, and service operation after failure.",
    evidence:
      "Failure, degraded mode, alternate path, restoration, validation, reconciliation, communication, closure, and review.",
    failure:
      "Connectivity may return while authorization, monitoring, or device ownership remains incorrect.",
  },
];

const evidenceMatrix = [
  {
    id: "WL-01",
    source: "Fictional wireless class inventory",
    observation:
      "Managed, personal-device, guest, service-device, administrative, supplier, temporary-event, and recovery classes are documented.",
    supports:
      "The fictional environment recognizes different user, device, ownership, destination, and lifecycle needs.",
    limits:
      "The inventory does not prove correct assignment, active policy, complete evidence, or full offboarding.",
    use:
      "Validate policy and ownership for each class.",
  },
  {
    id: "WL-02",
    source: "Fictional service-device inventory",
    observation:
      "Two service devices have current sessions but unclear owners and replacement dates.",
    supports:
      "Ownership, support, lifecycle, destination, and retirement review are needed.",
    limits:
      "Unclear ownership does not prove the devices are unsafe or unauthorized.",
    use:
      "Mark the devices Unvalidated and assign an owner search before changing access.",
  },
  {
    id: "WL-03",
    source: "Fictional guest policy review",
    observation:
      "Guest sessions are isolated from internal services and expire daily, but one event exception extends access without a current sponsor.",
    supports:
      "Guest separation is generally strong, while the event exception needs ownership and expiration review.",
    limits:
      "The exception record does not prove broad internal reachability or misuse.",
    use:
      "Treat the exception as Conditional until sponsorship and closure are verified.",
  },
  {
    id: "WL-04",
    source: "Fictional source-health dashboard",
    observation:
      "Controller connectivity is Green, but one access-point evidence stream is sixteen minutes behind.",
    supports:
      "Wireless infrastructure health and evidence freshness are separate conditions.",
    limits:
      "Delay does not prove connection failure, data loss, tampering, or one cause.",
    use:
      "Mark the affected coverage area Degraded and use alternate evidence.",
  },
  {
    id: "WL-05",
    source: "Fictional unexpected-device alert",
    observation:
      "An unrecognized device identity appears in a service-device class near a classroom support area.",
    supports:
      "Ownership, inventory, onboarding, replacement, support, and source-health validation are justified.",
    limits:
      "The alert does not prove malicious intent, unauthorized access, or harmful behavior.",
    use:
      "Validate identity, owner, location class, session, destinations, and inventory history.",
  },
  {
    id: "WL-06",
    source: "Fictional administrative-session review",
    observation:
      "One privileged wireless session used a managed administrative device and approved identity, but the destination-group evidence is incomplete.",
    supports:
      "Administrative destination scope and session evidence need review.",
    limits:
      "The record does not prove broad access or unsafe action.",
    use:
      "Keep the session finding open until destination and action evidence are complete.",
  },
  {
    id: "WL-07",
    source: "Fictional recovery exercise",
    observation:
      "A recovery wireless class restored coordination, but normal monitoring was incomplete and one temporary device remained enrolled afterward.",
    supports:
      "Recovery evidence continuity and offboarding need stronger controls.",
    limits:
      "One exercise does not prove permanent policy failure or misuse.",
    use:
      "Improve alternate evidence, automatic expiration, and post-exercise closure.",
  },
  {
    id: "WL-08",
    source: "Fictional support trend",
    observation:
      "Users report repeated reauthentication in one coverage area during roaming, while service-device sessions remain stable.",
    supports:
      "User-session continuity, access-point health, policy revalidation, and accessibility review are needed.",
    limits:
      "The reports do not prove a security event or one infrastructure cause.",
    use:
      "Correlate support, roaming, source-health, identity, policy, and coverage evidence.",
  },
];

const defects = [
  {
    defect: "One wireless class for everyone",
    observation:
      "Fictional employees, guests, service devices, suppliers, and administrators share one policy group.",
    impact:
      "Different trust, ownership, destination, evidence, and lifecycle needs collapse into broad access.",
    correction:
      "Create purpose-driven classes and destination policies.",
  },
  {
    defect: "User identity without device context",
    observation:
      "A fictional employee identity receives the same access from managed and unmanaged devices.",
    impact:
      "Endpoint assurance and support differences are ignored.",
    correction:
      "Use user-plus-device decisions and safe limited alternatives.",
  },
  {
    defect: "Unowned service devices",
    observation:
      "Fictional non-user devices remain connected without current owners, sponsors, support, or retirement dates.",
    impact:
      "Policy and lifecycle decisions become unaccountable.",
    correction:
      "Require owner, purpose, class, destinations, evidence, replacement, and retirement.",
  },
  {
    defect: "Guest leakage",
    observation:
      "Fictional guest access can reach internal service or management destinations.",
    impact:
      "Visitor and personal-device access may expand beyond approved purpose.",
    correction:
      "Use strong separation, limited destinations, isolation, expiration, and evidence.",
  },
  {
    defect: "Management on normal wireless",
    observation:
      "Fictional infrastructure administration uses the same class as ordinary employee traffic.",
    impact:
      "Privileged paths may become broadly reachable and hard to review.",
    correction:
      "Use separate administrative identity, device, destination, approval, session, and revocation.",
  },
  {
    defect: "Alert equals rogue intent",
    observation:
      "A fictional unexpected-device alert is described as a malicious device.",
    impact:
      "Unsupported conclusions may cause unnecessary disruption or blame.",
    correction:
      "Validate inventory, ownership, replacement, support, session, destinations, and source health.",
  },
  {
    defect: "Green infrastructure equals complete evidence",
    observation:
      "A fictional controller is reachable while one access-point stream is delayed.",
    impact:
      "Coverage and session decisions may rely on stale evidence.",
    correction:
      "Track freshness, event volume, queue age, clock, schema, and blind periods.",
  },
  {
    defect: "Permanent event access",
    observation:
      "A fictional temporary event class remains after the event ends.",
    impact:
      "Temporary access becomes standing access.",
    correction:
      "Use automatic expiration, sponsor closure, session termination, and evidence review.",
  },
  {
    defect: "No degraded plan",
    observation:
      "A fictional identity or controller outage either opens broad access or blocks every service device.",
    impact:
      "Trust or mission continuity may fail unnecessarily.",
    correction:
      "Design fail-limited classes, blocked high-impact actions, alternate support, and recovery.",
  },
  {
    defect: "Incomplete offboarding",
    observation:
      "A fictional device record is deleted, but active sessions, class memberships, sponsor links, or exceptions remain unverified.",
    impact:
      "Residual wireless access may continue.",
    correction:
      "Use a complete offboarding and closure checklist.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define wireless use cases",
    action:
      "List fictional managed, employee personal-device, guest, service-device, administrative, supplier, temporary-event, and recovery needs.",
    output:
      "Wireless use-case register.",
    quality:
      "Each use case has one mission purpose and accountable owner or sponsor.",
  },
  {
    step: "2",
    title: "Inventory identities and devices",
    action:
      "Record fictional human, device, service, supplier, administrative, guest, event, and recovery identities with ownership and lifecycle.",
    output:
      "Wireless identity and device inventory.",
    quality:
      "User and device identity remain separate.",
  },
  {
    step: "3",
    title: "Create network classes",
    action:
      "Group fictional users and devices by purpose, ownership, device trust, destinations, support, evidence, and recovery.",
    output:
      "Wireless class architecture.",
    quality:
      "Classes remain understandable, maintainable, and no broader than required.",
  },
  {
    step: "4",
    title: "Define destination policy",
    action:
      "Document fictional applications, services, DNS, updates, monitoring, management, external access, and recovery destinations for each class.",
    output:
      "Class-to-destination communication matrix.",
    quality:
      "Guest, service-device, supplier, and administrative destinations remain distinct.",
  },
  {
    step: "5",
    title: "Design onboarding",
    action:
      "Define fictional owner, sponsor, purpose, identity, class, policy, evidence, privacy, support, expiration, and review.",
    output:
      "Wireless onboarding and approval workflow.",
    quality:
      "Onboarding explains both access and lifecycle.",
  },
  {
    step: "6",
    title: "Design monitoring and source health",
    action:
      "Define fictional identity, device, class, session, destination, policy, access-point, controller, freshness, queue, clock, and blind-period evidence.",
    output:
      "Wireless visibility and source-health plan.",
    quality:
      "Evidence is minimized, privacy-safe, and tied to defender questions.",
  },
  {
    step: "7",
    title: "Plan support and accessibility",
    action:
      "Define fictional onboarding help, reauthentication support, device replacement, guest assistance, accessible instructions, and approved alternatives.",
    output:
      "Wireless support and accessibility plan.",
    quality:
      "Security does not depend on users finding unsafe workarounds.",
  },
  {
    step: "8",
    title: "Design failure and recovery",
    action:
      "Define fictional fail-open, fail-closed, fail-limited, degraded classes, alternate support, management recovery, evidence continuity, revocation, and closure.",
    output:
      "Wireless failure and recovery plan.",
    quality:
      "Critical services remain safe without uncontrolled trust expansion.",
  },
  {
    step: "9",
    title: "Validate and offboard",
    action:
      "Use invented managed, personal, guest, service-device, administrative, unexpected-device, source-degraded, event, recovery, and retirement cases.",
    output:
      "Validation and offboarding matrix.",
    quality:
      "No real wireless network, device, controller, access point, account, or session is accessed or changed.",
  },
  {
    step: "10",
    title: "Maintain and communicate",
    action:
      "Assign fictional owners, versions, recertification dates, findings, residual risks, review triggers, leadership decisions, and retirement conditions.",
    output:
      "Wireless defense strategy and portfolio package.",
    quality:
      "The final artifact is traceable, maintainable, privacy-safe, and completely fictional.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of wireless network classes?",
    choices: [
      "To create more network names.",
      "To separate fictional users and devices by purpose, identity, ownership, destination, evidence, support, and lifecycle needs.",
      "To make every connected device trusted.",
      "To replace application authorization.",
    ],
    answer: 1,
    explanation:
      "Wireless classes organize trust and policy according to mission and lifecycle, not convenience alone.",
  },
  {
    question:
      "A fictional employee successfully authenticates to wireless. What does that prove?",
    choices: [
      "The device belongs in the managed class.",
      "The identity was verified, but device trust, class, destinations, actions, and session policy still require authorization.",
      "The device is harmless.",
      "All internal access is approved.",
    ],
    answer: 1,
    explanation:
      "User identity is only one input to wireless authorization.",
  },
  {
    question:
      "What is strongest for fictional service devices?",
    choices: [
      "Place them in the employee class for convenience.",
      "Give them owned device identities, narrow purpose, limited destinations, monitoring, support, replacement, and retirement.",
      "Allow direct communication with every nearby device.",
      "Avoid documenting them.",
    ],
    answer: 1,
    explanation:
      "Non-user devices need strong ownership and narrow communication because their lifecycle differs from human-operated endpoints.",
  },
  {
    question:
      "An unexpected fictional device appears in supplied wireless evidence. What is the strongest conclusion?",
    choices: [
      "It is malicious.",
      "It proves unauthorized access.",
      "It requires identity, ownership, inventory, onboarding, session, destination, location-class, and source-health validation.",
      "It should be publicly identified.",
    ],
    answer: 2,
    explanation:
      "Unexpected evidence supports defensive questions, not unsupported intent claims.",
  },
  {
    question:
      "Why is controller Green status insufficient?",
    choices: [
      "Because controllers never work.",
      "Because connectivity may be healthy while event freshness, access-point evidence, policy, clock, or session data is delayed or incomplete.",
      "Because Green always means failure.",
      "Because source health is unnecessary.",
    ],
    answer: 1,
    explanation:
      "Wireless source health requires multiple dimensions beyond simple connectivity.",
  },
  {
    question:
      "What is the strongest response to an identity-service outage?",
    choices: [
      "Place every device in the internal class.",
      "Block every service device and recovery function.",
      "Use pre-approved fail-limited classes, block high-impact administrative access, preserve alternate evidence, communicate degradation, and restore normal policy through validation.",
      "Disable monitoring.",
    ],
    answer: 2,
    explanation:
      "Fail-limited design preserves critical mission needs without broad trust expansion.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use a real wireless diagram but remove the organization name.",
      "Use real device identifiers with changed dates.",
      "Invent every network class, identity, device, session, policy, record, owner, date, decision, and outcome from scratch.",
      "Use real controller logs because the project is defensive.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real wireless infrastructure, identities, devices, evidence, and access paths.",
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

export default function WirelessDefenseStrategyPage() {
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
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Identity, Device, Class, and Lifecycle
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4.6 Wireless Defense Strategy
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional wireless access
            around user identity, device identity, network classes, onboarding,
            destinations, management, monitoring, guest separation,
            service-device ownership, administrative access, support, privacy,
            degraded operation, recovery, revocation, and lifecycle governance.
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
          lessonTitle="Wireless Defense Strategy"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented wireless classes, identities, devices, sessions, policies, evidence, owners, dates, decisions, and outcomes.",
            "I understand that a successful wireless connection does not prove authorization, device safety, approved purpose, correct class, or harmless behavior.",
            "I will separate managed, personal-device, guest, service-device, administrative, supplier, temporary-event, and recovery use cases.",
            "I will design onboarding, monitoring, support, degraded operation, offboarding, recovery, and lifecycle with wireless access.",
            "I will preserve privacy, accessibility, evidence limits, source-health uncertainty, and alternative explanations.",
            "I will not scan, map, capture, connect to, test, configure, disrupt, monitor, identify, disable, or modify any real wireless network, access point, controller, device, account, or session.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Connected Device Can Still Be in the Wrong Trust Class"
        >
          <p className="leading-8">
            A fictional Northbridge service display joins wireless successfully.
            The device identity is valid, but the device appears in the managed
            employee class instead of the service-device class. It can reach
            destinations unrelated to its display purpose, and the current
            owner is unclear. Authentication succeeded, yet classification,
            authorization, ownership, destination scope, and lifecycle remain
            incomplete.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The device connected successfully, so it is trusted and
                correctly authorized.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional device identity was accepted, but class,
                ownership, purpose, destinations, evidence, support, and
                lifecycle require validation.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Wireless defense is not simply allowing a device onto a network. It
            is assigning the correct identity, class, destinations, evidence,
            support, failure behavior, and lifecycle.
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
          title="Wireless Access Combines Identity, Devices, Location, Mobility, Policy, and Support"
        >
          <p className="leading-8">
            Fictional wireless environments connect human users, personal
            devices, managed endpoints, service devices, guests, suppliers,
            administrators, and recovery teams. Without strong class,
            destination, ownership, evidence, support, failure, and offboarding
            decisions, one wireless path can bypass segmentation or become
            difficult to govern.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Correct classification",
                "Place fictional users and devices into the network class that matches purpose, identity, ownership, destination, and lifecycle.",
              ],
              [
                "Controlled destinations",
                "Limit each class to approved applications, services, management, updates, DNS, monitoring, or external access.",
              ],
              [
                "Complete lifecycle",
                "Onboard, monitor, support, recertify, expire, offboard, recover, and retire wireless access.",
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

        <SectionCard eyebrow="Core Framework" title="The W-I-R-E-L-E-S-S Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "W — Write the purpose",
                "Define the fictional user, device, service, guest, event, administrative, supplier, or recovery need.",
              ],
              [
                "I — Identify user and device",
                "Verify fictional human, device, service, owner, sponsor, management, and lifecycle context.",
              ],
              [
                "R — Route to the right class",
                "Assign the narrowest fictional managed, personal, guest, service, administrative, supplier, event, or recovery class.",
              ],
              [
                "E — Establish destinations",
                "Allow only required fictional applications, services, DNS, updates, monitoring, management, or recovery paths.",
              ],
              [
                "L — Log decision evidence",
                "Record fictional identity, device, class, policy, session, destination, source health, support, and lifecycle.",
              ],
              [
                "E — Expect failure",
                "Design fictional fail-limited access, blocked high-impact actions, alternate support, management recovery, and evidence continuity.",
              ],
              [
                "S — Support and safeguard",
                "Provide fictional accessible onboarding, privacy, troubleshooting, replacement, guest help, and safe alternatives.",
              ],
              [
                "S — Sunset access",
                "Expire fictional sessions, classes, devices, sponsors, events, exceptions, and recovery access with closure evidence.",
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
              Decision-ready wireless statement
            </p>
            <p className="mt-2 leading-7">
              This fictional wireless decision supports one approved purpose for
              a verified user or device, assigned to the correct network class,
              limited to defined destinations and session conditions, with
              current evidence, source health, support, privacy, failure,
              revocation, residual risk, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Wireless Defense Strategy"
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
            Apply Ten Wireless Defense Principles
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
          title="Separate Eight Wireless Network Classes"
        >
          <div className="grid gap-5">
            {wirelessClasses.map((item) => (
              <article
                key={item.className}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.className}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Identity", item.identity],
                    ["Destinations", item.destinations],
                    ["Controls", item.controls],
                    ["Evidence", item.evidence],
                    ["Failure behavior", item.failure],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.className}-${label}`}
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
            Evaluate Ten Wireless Decision Dimensions
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
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
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
          title="Write Every Onboarding Record with Twelve Fields"
        >
          <div className="grid gap-5">
            {onboardingFields.map((item, index) => (
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
          title="Follow the Ten-Stage Wireless Lifecycle"
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
          title="Separate Connection, Identity, Class, Destination, and Business Action"
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
                    "Wireless connection",
                    "Can the fictional device establish a session with approved wireless infrastructure?",
                    "Connection result, access-point context, controller health, time, and session identifier.",
                    "User identity, device ownership, class, destination authority, or harmless behavior.",
                  ],
                  [
                    "User identity",
                    "Which fictional human identity is associated with the session?",
                    "Authentication, role, sponsor, assignment, event, and lifecycle.",
                    "That the device belongs in a managed or privileged class.",
                  ],
                  [
                    "Device identity",
                    "Which fictional endpoint or service device is connecting?",
                    "Device record, owner, class, management state, support, replacement, and retirement.",
                    "That every user of the device is authorized.",
                  ],
                  [
                    "Network class",
                    "Which fictional trust and policy group applies?",
                    "Class decision, identity, device category, purpose, policy version, and exception.",
                    "That every destination or application action is authorized.",
                  ],
                  [
                    "Destination policy",
                    "Which fictional services may the session reach?",
                    "Destination groups, service purpose, DNS, updates, monitoring, management, and policy result.",
                    "That a business action is correct.",
                  ],
                  [
                    "Business action",
                    "Should the fictional application, support, administrative, or recovery state change?",
                    "Application identity, object, operation, approval, result, confirmation, and closure.",
                    "That the wireless session alone explains every effect.",
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
          title="Design Wireless Source Health, Support, and Recovery"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Controller health",
                "Track fictional connectivity, policy version, configuration state, event freshness, queue age, clock, and management access.",
                "Green connectivity does not prove current sessions or policy evidence.",
              ],
              [
                "Access-point health",
                "Track fictional availability, event freshness, session volume, policy state, coverage class, and management evidence.",
                "One healthy component does not prove complete coverage.",
              ],
              [
                "Identity health",
                "Track fictional authentication freshness, failures, role data, sponsor data, device records, and cached authority.",
                "Stale identity evidence may produce wrong class decisions.",
              ],
              [
                "Session health",
                "Track fictional starts, ends, roaming, reauthentication, denial, duration, destination policy, and source health.",
                "A connected session may still have poor user experience or wrong authorization.",
              ],
              [
                "Support health",
                "Track fictional onboarding failures, reauthentication reports, device replacements, guest issues, accessibility barriers, and resolution.",
                "Support volume does not prove a security event.",
              ],
              [
                "Coverage health",
                "Track fictional service availability, evidence availability, user impact, roaming, and alternate access.",
                "Coverage problems may reflect design, environment, maintenance, or source-health conditions.",
              ],
              [
                "Degraded operation",
                "Define fictional fail-limited classes, blocked administrative use, safe service-device behavior, guest separation, and alternate support.",
                "Do not broadly open access during identity or controller failure.",
              ],
              [
                "Recovery",
                "Restore fictional management, identity, policy, DNS, monitoring, sessions, ownership, evidence, and offboarding.",
                "Connectivity returning does not prove correct policy or complete evidence.",
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
                    Evidence limit
                  </p>
                  <p className="mt-2 text-sm leading-6">{caution}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Wireless View"
          title="Northbridge Wireless Defense Architecture"
        >
          <p className="leading-8">
            This conceptual view is completely invented and intentionally
            non-operational. It teaches identity, class, destination, evidence,
            support, failure, and lifecycle decisions without real network
            names, addresses, device identifiers, controller details,
            credentials, configurations, coverage maps, or internal logs.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Managed employee", "User plus managed device and approved applications"],
                ["Personal device", "Limited employee access and stronger application controls"],
                ["Guest", "Isolated visitor access with expiration"],
                ["Service devices", "Owned identities and narrow destinations"],
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
                Fictional Northbridge Wireless Decision Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Identity", "User, device, service, guest, supplier, administrator, recovery"],
                  ["Class", "Managed, personal, guest, service, administrative, supplier, event, recovery"],
                  ["Destinations", "Applications, DNS, updates, monitoring, management, external access"],
                  ["Session", "Start, end, roaming, timeout, policy, source health"],
                  ["Segmentation", "Class separation and destination restrictions"],
                  ["Evidence", "Onboarding, policy, session, support, alerts, source health"],
                  ["Failure", "Fail-open, fail-closed, fail-limited, degraded support"],
                  ["Lifecycle", "Sponsor, recertify, expire, offboard, recover, retire"],
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
                ["Administrative", "Privileged identity, device, destination, change, revocation"],
                ["Supplier", "Sponsor, isolated destination, session, expiration"],
                ["Temporary event", "Capacity, isolation, support, automatic closure"],
                ["Recovery", "Trigger, coordination, evidence, revocation, reconciliation"],
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
          title="Fake Northbridge Wireless Defense Dashboard"
          subtitle="Fictional class, ownership, session, source-health, exception, support, and offboarding status for training only."
          metrics={[
            {
              label: "Wireless devices with current owners",
              value: "46 / 49",
              note: "Two service devices and one temporary event device require fictional owner or sponsor validation.",
            },
            {
              label: "Network classes with complete evidence",
              value: "6 / 8",
              note: "Administrative destination evidence and recovery offboarding evidence remain incomplete.",
            },
            {
              label: "Open source-health findings",
              value: "3",
              note: "One delayed access-point stream, one roaming evidence gap, and one recovery blind period remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Device Appears in Service-Device Class"
          severity="High"
          time="6:14 PM"
          source="Fake Northbridge Wireless Assurance Console"
          details="A fictional unrecognized device identity appears in the service-device class near a classroom support area. The session is current, but ownership, onboarding history, purpose, destination scope, and inventory status are unresolved."
          recommendation="Treat the device as Unvalidated. Preserve the fictional session and policy evidence, validate inventory, owner, replacement history, purpose, destinations, location class, source health, and support records, then make an authorized retain, reclassify, isolate, or offboard decision."
        />

        <FakeLogPanel
          title="Fake Wireless Defense Review Timeline"
          logs={[
            "09:00 CLASS managed-employee='defined'",
            "09:08 CLASS personal-device='limited'",
            "09:16 CLASS guest='isolated'",
            "09:24 CLASS service-device='defined'",
            "09:32 CLASS administrative='conditional'",
            "09:40 CLASS supplier='defined'",
            "09:48 CLASS event='temporary'",
            "09:56 CLASS recovery='conditional'",
            "10:04 OWNER current='46-of-49'",
            "10:12 SESSION active='39'",
            "10:20 SOURCE controller='green'",
            "10:28 SOURCE access-point='delayed-16m'",
            "10:36 SUPPORT roaming-reports='7'",
            "10:44 EXCEPTION event-sponsor='missing'",
            "10:52 ADMIN destination-evidence='partial'",
            "11:00 RECOVERY device-offboarding='incomplete'",
            "11:08 ALERT unexpected-device='open'",
            "11:16 CONFIDENCE device-owner='low'",
            "11:24 CONFIDENCE wireless='moderate'",
            "18:14 ALERT issue='unexpected-service-device'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Wireless Evidence Supports—and What It Does Not Prove
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
                    ["Wireless-defense use", item.use],
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
          title="Which Wireless Decision Is Best Supported?"
          question="Which conclusion most responsibly addresses the fictional unexpected-device evidence?"
          evidence={[
            "An unrecognized fictional device identity appears in the service-device class.",
            "The session is current.",
            "Ownership, onboarding history, purpose, destination scope, and inventory status are unresolved.",
            "The affected class can reach limited application, DNS, update, and monitoring destinations.",
            "No supplied evidence proves malicious intent, harmful action, or broad internal access.",
            "Immediate removal could disrupt an undocumented classroom support function.",
            "Leaving the device unreviewed would preserve uncertain access.",
            "Overall confidence in device ownership is Low.",
          ]}
          options={[
            "Treat the device as Unvalidated, preserve evidence, assign an owner search, validate inventory, purpose, destinations, replacement history, source health, and support records, then authorize retain, reclassify, isolate, or offboard with closure criteria.",
            "Assume the device is malicious and publicly identify it.",
            "Ignore it because the service-device class is limited.",
            "Delete every service-device record immediately.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the supplied evidence, preserves uncertainty, protects mission continuity, and requires ownership, policy, lifecycle, and closure without unsupported claims."
        />

        <SectionCard
          eyebrow="Wireless Defense Defects"
          title="Ten Problems That Weaken Wireless Security"
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
          title="Build the Northbridge Wireless Defense Strategy"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            scan, map, capture, connect to, test, configure, disrupt, monitor,
            identify, disable, isolate, offboard, or modify any real wireless
            network, access point, controller, device, account, session,
            identity provider, or organizational infrastructure.
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
          title="An Event Exception Has No Current Sponsor"
          scenario="A fictional temporary event wireless class remains active after the event ended. Sessions are limited to external access, but the sponsor, expiration confirmation, and closure evidence are missing."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark the fictional event class Conditional, assign a sponsor search, stop new enrollment, review active sessions and dependencies, confirm event status, then expire and close the class through authorized offboarding.",
              outcome:
                "Best defensive choice. It prevents new access while preserving evidence and avoiding unsupported disruption.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the class indefinitely because it is isolated.",
              outcome:
                "Weak. Isolation does not replace ownership, expiration, evidence, and lifecycle.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable every wireless class immediately.",
              outcome:
                "Weak. The evidence supports a targeted lifecycle correction, not broad disruption.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Identity Failure Threatens Service Devices"
          scenario="The fictional identity service becomes unavailable. A proposal would place all service devices and employees into one open internal class until identity returns."
          choices={[
            {
              label: "Choice A",
              response:
                "Use fictional fail-limited classes: preserve only pre-approved service-device and critical employee destinations, block administrative access, keep guests separated, use alternate evidence, communicate degradation, and revalidate normal policy after recovery.",
              outcome:
                "Best choice. It preserves critical service without turning the outage into broad trust expansion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open one internal class for every device because the outage is temporary.",
              outcome:
                "Weak. Temporary broad trust can create significant blast radius and weak accountability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disconnect every service device with no fallback.",
              outcome:
                "Weak. Unplanned fail-closed behavior can cause avoidable mission harm.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design One Wireless Strategy for People, Services, Guests, and Recovery"
        >
          <p className="leading-8">
            Fictional Northbridge needs managed employee access, limited
            personal-device access, guest connectivity, service devices,
            privileged administration, supplier support, event access, and
            recovery coordination. Leadership wants simplicity, while identity,
            network, privacy, support, accessibility, and recovery owners need
            different controls.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create clear classes",
                "Separate fictional managed, personal, guest, service-device, administrative, supplier, event, and recovery use.",
              ],
              [
                "Use user-plus-device identity",
                "Evaluate fictional human, device, service, owner, sponsor, management, and lifecycle context.",
              ],
              [
                "Limit destinations",
                "Define fictional application, DNS, update, monitoring, management, external, and recovery destination groups.",
              ],
              [
                "Design evidence and privacy",
                "Use minimized fictional onboarding, class, session, policy, source-health, support, and lifecycle evidence.",
              ],
              [
                "Plan degraded operation",
                "Use fail-limited classes, blocked administrative actions, safe service-device fallback, alternate support, and recovery.",
              ],
              [
                "Close the lifecycle",
                "Expire fictional events, suppliers, emergency access, retired devices, sessions, sponsor links, and exceptions.",
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
              Produce a fictional wireless class architecture, user-and-device
              identity matrix, class-to-destination matrix, onboarding plan,
              service-device ownership model, guest and event strategy,
              administrative policy, source-health plan, support and
              accessibility plan, degraded-operation design, offboarding
              checklist, residual-risk statement, and leadership explanation.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Wireless Defense Strategy Checklist"
          items={[
            "I can explain wireless defense as a fictional identity, device, class, destination, session, evidence, support, failure, recovery, and lifecycle system.",
            "I can separate managed, personal-device, guest, service-device, administrative, supplier, temporary-event, and recovery classes.",
            "I can distinguish user identity, device identity, network authorization, destination policy, and business action.",
            "I can give service devices owners, purposes, narrow destinations, monitoring, support, replacement, and retirement.",
            "I can keep guest access separated, limited, time-bound, privacy-aware, and supported.",
            "I can protect administrative wireless with stronger identity, device, destination, approval, session, change, and revocation controls.",
            "I can interpret unexpected-device evidence without assuming malicious intent.",
            "I can measure controller, access-point, identity, policy, session, clock, collector, and evidence freshness separately.",
            "I can design accessible onboarding and support that discourages unsafe workarounds.",
            "I can design fail-open, fail-closed, fail-limited, degraded, alternate-support, rollback, and recovery behavior.",
            "I can offboard sessions, identities, devices, classes, sponsors, suppliers, events, exceptions, and cached authority completely.",
            "I can create a completely fictional wireless artifact without using real network names, device identifiers, controller details, credentials, coverage maps, access-point data, logs, suppliers, or internal architecture.",
          ]}
        />

        <MiniQuiz
          title="A4.6 Mini Quiz: Wireless Defense Strategy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Wireless Defense Strategy for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, managed employee class, employee personal-device class, guest class, service-device class, administrative class, supplier class, temporary-event class, recovery class, human identity, device identity, service identity, ownership, sponsorship, onboarding, network authorization, class-to-destination policy, DNS, updates, monitoring, management, client isolation concept, session start, session end, roaming, timeout, evidence, source health, controller health, access-point health, freshness, queue age, clock, blind periods, privacy purpose, access, retention, support, accessibility, device replacement, event expiration, supplier closure, fail-open, fail-closed, fail-limited, degraded operation, recovery, offboarding, validation cases, findings, completion criteria, residual risks, review triggers, leadership summary, technical appendix, reflection, and a statement that every organization, network class, identity, device, session, policy, record, owner, date, decision, and outcome is invented."
          tips={[
            "Separate fictional user identity, device identity, class assignment, destination authorization, and application action.",
            "Give service devices explicit purpose, owner, destination, support, replacement, and retirement.",
            "Use minimized wireless evidence with source-health, privacy, support, and lifecycle context.",
            "Design degraded operation, recovery, event closure, supplier closure, and offboarding with the original wireless policy.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Network Baselines and Anomaly Concepts?"
        >
          <p className="leading-8">
            Before moving to A4.7, rate your readiness from 1 to 5 for wireless
            purpose, identities, devices, classes, destinations, onboarding,
            evidence, source health, guest separation, service-device
            ownership, administration, support, degraded operation, recovery,
            offboarding, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why successful wireless connection does not prove correct authorization.",
              "I can assign fictional users and devices to purpose-driven network classes.",
              "I can distinguish managed, personal, guest, service, administrative, supplier, event, and recovery needs.",
              "I can give service devices clear owners, destinations, support, evidence, and retirement.",
              "I can interpret unexpected-device and source-health alerts cautiously.",
              "I can design wireless support and accessibility without weakening segmentation.",
              "I can use fail-limited classes during identity, controller, or monitoring failure.",
              "I can produce a safe fictional wireless strategy without copying, modifying, or exposing real wireless information.",
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
            Record one fictional device you reclassified, one destination you
            narrowed, one source-health gap, one event or guest exception you
            closed, one degraded-mode decision, and one question you will carry
            into A4.7.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Wireless defense is a fictional identity, device, class, destination, session, evidence, support, failure, recovery, and lifecycle system.",
            "A successful wireless connection does not prove user authorization, device trust, correct class, safe destination access, or harmless behavior.",
            "Managed, personal-device, guest, service-device, administrative, supplier, temporary-event, and recovery use cases require distinct policies.",
            "User identity and device identity should be evaluated separately and combined for network authorization.",
            "Service devices need explicit purpose, ownership, narrow destinations, monitoring, support, replacement, and retirement.",
            "Unexpected-device or unexpected-access-point findings support validation and ownership questions, not automatic malicious-intent claims.",
            "Wireless source health includes controller, access-point, identity, policy, session, freshness, queue, clock, collector, and blind-period evidence.",
            "Guest, event, supplier, administrative, and recovery access need stronger separation, expiration, evidence, and closure.",
            "Fail-limited wireless design can preserve critical service without uncontrolled trust expansion.",
            "Every CyberShield wireless artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
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
            Next, build fictional network baselines and analyze anomalies using
            service, identity, destination, timing, volume, protocol, change,
            maintenance, source-health, seasonality, degraded operation, and
            recovery context.
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