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
const previousLesson = `${modulePath}/risk-acceptance-and-exceptions`;
const nextLesson = `${modulePath}/communicating-risk-to-leaders`;

const objectives = [
  "Explain third-party risk as the business and security risk created when an organization depends on suppliers, vendors, partners, service providers, contractors, and other external entities.",
  "Evaluate supplier criticality using business dependency, data access, identity access, service importance, recovery needs, geographic or operational concentration, and substitutability.",
  "Assess third-party evidence using scope, freshness, reliability, contractual expectations, control ownership, fourth-party dependencies, and unresolved findings.",
  "Connect third-party risk to onboarding, monitoring, incidents, contract renewal, continuity, concentration risk, exit planning, risk acceptance, and leadership decisions.",
  "Build a Third-Party Risk Review that becomes the eighth artifact in the A15 Risk Register and Leadership Recommendation.",
];

const thirdPartyCategories = [
  {
    category: "Cloud or SaaS provider",
    examples:
      "Hosted business application, collaboration service, analytics platform, identity service.",
    risk:
      "The organization depends on an external platform for availability, data handling, identity, logging, recovery, or business continuity.",
    review:
      "What business capability stops if the provider is unavailable?",
  },
  {
    category: "Technology supplier",
    examples:
      "Software vendor, hardware supplier, managed platform, security technology provider.",
    risk:
      "Product quality, support, update lifecycle, ownership, and supplier operations can affect internal security.",
    review:
      "How dependent is the organization on the supplier's product lifecycle and support?",
  },
  {
    category: "Business-process provider",
    examples:
      "Payroll provider, scheduling service, payment processor, records service.",
    risk:
      "The supplier may process sensitive information or perform a critical business function.",
    review:
      "What business and data consequences follow from supplier failure?",
  },
  {
    category: "Managed service provider",
    examples:
      "Managed infrastructure, help desk, security operations, hosted administration.",
    risk:
      "The provider may have broad operational access and significant influence over availability and control operation.",
    review:
      "Which privileged or operational responsibilities are delegated?",
  },
  {
    category: "Partner integration",
    examples:
      "Data exchange partner, scheduling partner, research partner, approved API integration.",
    risk:
      "Trust, certificates, data exchange, ownership, and lifecycle decisions are shared across organizational boundaries.",
    review:
      "What happens if partner ownership, trust, or availability changes?",
  },
  {
    category: "Contractor or consultant",
    examples:
      "Temporary specialist, implementation partner, project support team.",
    risk:
      "Temporary access can become overbroad, poorly offboarded, or disconnected from long-term ownership.",
    review:
      "How is access scoped, reviewed, and removed when the engagement ends?",
  },
];

const criticalityDimensions = [
  {
    dimension: "Business dependency",
    question:
      "How much does a critical service depend on the third party?",
    low:
      "Convenient but easily replaceable.",
    high:
      "Major business workflow cannot operate without the provider.",
  },
  {
    dimension: "Data sensitivity",
    question:
      "What data does the third party store, process, transmit, or receive?",
    low:
      "Public or low-sensitivity data only.",
    high:
      "Sensitive, regulated, confidential, or high-impact business data.",
  },
  {
    dimension: "Access privilege",
    question:
      "What identities, systems, interfaces, or administrative capabilities can the supplier use?",
    low:
      "No internal access or narrowly scoped integration.",
    high:
      "Broad privileged, administrative, or production access.",
  },
  {
    dimension: "Availability impact",
    question:
      "What happens if the provider is unavailable?",
    low:
      "Short interruption with simple workaround.",
    high:
      "Critical service outage with limited alternative operating path.",
  },
  {
    dimension: "Substitutability",
    question:
      "How quickly could the organization move to another provider or internal solution?",
    low:
      "Multiple practical alternatives and portable data/processes.",
    high:
      "No practical alternative, major migration effort, or proprietary dependency.",
  },
  {
    dimension: "Recovery dependency",
    question:
      "Does the organization rely on the supplier for backup, recovery, restoration, or incident support?",
    low:
      "Recovery is independently controlled and tested.",
    high:
      "Provider availability is essential to restore business capability.",
  },
  {
    dimension: "Concentration",
    question:
      "How many critical services depend on the same supplier, platform, location, or technology?",
    low:
      "Dependency is distributed.",
    high:
      "Many critical services share one external dependency.",
  },
  {
    dimension: "Regulatory / contractual exposure",
    question:
      "Could supplier failure create legal, contractual, notification, or audit consequences?",
    low:
      "Limited obligations.",
    high:
      "Material legal, contractual, or governance consequences.",
  },
];

const evidenceTypes = [
  {
    evidence: "Security assessment",
    proves:
      "How the supplier describes its controls, scope, governance, and security practices.",
    caution:
      "Assess scope, date, exclusions, and whether the evidence matches the service actually used.",
  },
  {
    evidence: "Independent assurance",
    proves:
      "An external reviewer evaluated defined controls for a defined period and scope.",
    caution:
      "Do not assume an assurance report covers every product, region, or dependency.",
  },
  {
    evidence: "Contract / agreement",
    proves:
      "The parties have documented responsibilities, service expectations, notification terms, and other obligations.",
    caution:
      "A contract does not prove the control operates or eliminate business dependency.",
  },
  {
    evidence: "Service-level record",
    proves:
      "Current availability, support, recovery, or performance commitments and operating history.",
    caution:
      "Past performance does not guarantee future availability.",
  },
  {
    evidence: "Incident / issue history",
    proves:
      "How prior service failures, findings, or control issues were handled.",
    caution:
      "Use authorized records and avoid overgeneralizing from one event.",
  },
  {
    evidence: "Architecture / integration record",
    proves:
      "What data, identities, interfaces, and business services actually depend on the supplier.",
    caution:
      "Architecture changes can quickly make old dependency evidence stale.",
  },
  {
    evidence: "Continuity / exit evidence",
    proves:
      "Whether the organization has practical plans for disruption, transition, data return, migration, or service termination.",
    caution:
      "A written plan is stronger when it has been validated or rehearsed safely.",
  },
  {
    evidence: "Ownership record",
    proves:
      "Which internal sponsor, service owner, data owner, risk owner, and control owner are accountable.",
    caution:
      "Supplier relationships become risky when business ownership disappears.",
  },
];

const lifecycle = [
  {
    phase: "Before onboarding",
    purpose:
      "Understand business need, criticality, data, access, architecture, and supplier risk before approval.",
    decision:
      "Approve, conditionally approve, require treatment, choose another supplier, or do not proceed.",
  },
  {
    phase: "Contracting",
    purpose:
      "Document responsibilities, security expectations, notification, evidence, continuity, data handling, and exit requirements.",
    decision:
      "Ensure contractual commitments align with actual risk and service dependence.",
  },
  {
    phase: "Implementation",
    purpose:
      "Validate the intended integration, access scope, data flows, ownership, and controls before full production reliance.",
    decision:
      "Confirm the implemented service matches the approved risk scope.",
  },
  {
    phase: "Ongoing monitoring",
    purpose:
      "Review current evidence, incidents, service changes, ownership, financial or operational changes, and control findings.",
    decision:
      "Keep, treat, escalate, restrict, reapprove, or reassess risk as conditions change.",
  },
  {
    phase: "Renewal",
    purpose:
      "Reassess whether business need, risk, evidence, pricing, ownership, concentration, and alternatives still support renewal.",
    decision:
      "Renew, renegotiate, reduce scope, require remediation, or prepare exit.",
  },
  {
    phase: "Offboarding / exit",
    purpose:
      "Remove access, return or destroy data, confirm ownership transition, preserve required evidence, and validate continuity.",
    decision:
      "Close the relationship only after evidence shows the intended exit state exists.",
  },
];

const contractConcepts = [
  {
    concept: "Security responsibilities",
    why:
      "Clarifies which party operates which controls and where shared responsibility exists.",
    question:
      "Who is accountable for identity, logging, encryption, backup, incident response, and data handling?",
  },
  {
    concept: "Incident notification",
    why:
      "Defines how and when the supplier communicates relevant security or service incidents.",
    question:
      "Does notification timing support the organization's own response obligations?",
  },
  {
    concept: "Evidence / assurance access",
    why:
      "Supports ongoing governance and review.",
    question:
      "What evidence can the organization reasonably obtain and how often?",
  },
  {
    concept: "Data handling",
    why:
      "Defines expected use, storage, return, deletion, and retention of organizational data.",
    question:
      "What happens to data during operation, termination, and provider transition?",
  },
  {
    concept: "Service continuity",
    why:
      "Sets expectations around availability, recovery, support, and critical-service disruption.",
    question:
      "What support or restoration commitments matter to the business?",
  },
  {
    concept: "Subcontractor / fourth-party expectations",
    why:
      "Recognizes that the supplier may depend on other external entities.",
    question:
      "Which important subcontractors could materially affect the service?",
  },
  {
    concept: "Exit / transition",
    why:
      "Reduces lock-in and uncertainty if the relationship ends.",
    question:
      "Can the organization retrieve data, transfer operations, remove access, and verify closure?",
  },
  {
    concept: "Change notification",
    why:
      "Supports reassessment when service design, ownership, location, or controls materially change.",
    question:
      "Which changes should automatically trigger risk review?",
  },
];

const concentrationConcepts = [
  {
    pattern: "Single-provider dependence",
    example:
      "One critical SaaS service has no practical alternative.",
    businessRisk:
      "Provider outage, failure, or major change can interrupt the entire dependent workflow.",
    response:
      "Continuity planning, manual workaround, alternate operating path, exit planning, leadership acceptance.",
  },
  {
    pattern: "Shared-platform dependence",
    example:
      "Several critical services rely on the same external identity platform.",
    businessRisk:
      "One platform failure can affect many services simultaneously.",
    response:
      "Map shared dependencies, test recovery paths, prioritize resilient architecture, monitor concentration.",
  },
  {
    pattern: "Geographic concentration",
    example:
      "Multiple suppliers depend on the same regional infrastructure or operational location.",
    businessRisk:
      "Regional disruption can affect apparently separate services at the same time.",
    response:
      "Understand actual dependency geography and realistic recovery alternatives.",
  },
  {
    pattern: "Technology concentration",
    example:
      "Many suppliers rely on the same underlying technology or platform.",
    businessRisk:
      "A systemic issue can cross organizational boundaries.",
    response:
      "Track shared technology dependencies where material and avoid false diversification.",
  },
  {
    pattern: "Operational concentration",
    example:
      "One vendor provides help desk, infrastructure operations, and backup administration.",
    businessRisk:
      "A single supplier problem can affect multiple control and recovery functions.",
    response:
      "Separate responsibilities where useful and ensure business continuity does not rely on one operational channel.",
  },
];

const fourthPartyConcepts = [
  {
    concept: "Fourth party",
    meaning:
      "A subcontractor or supplier used by your direct third party.",
    example:
      "Your SaaS provider relies on another hosting, identity, support, or payment provider.",
  },
  {
    concept: "Material dependency",
    meaning:
      "A fourth party matters when its failure could materially affect the service you depend on.",
    example:
      "The direct supplier's service cannot operate without its underlying hosting provider.",
  },
  {
    concept: "Visibility limit",
    meaning:
      "Organizations rarely have the same evidence or contract rights over fourth parties as direct suppliers.",
    example:
      "You may know a dependency exists without receiving full assurance evidence.",
  },
  {
    concept: "Risk response",
    meaning:
      "Focus on material dependencies, supplier governance, continuity, notification, and practical business impact.",
    example:
      "Require the direct supplier to manage subcontractor risk and notify material changes where appropriate.",
  },
];

const principles = [
  {
    title: "Outsourcing does not outsource accountability",
    meaning:
      "The supplier may operate the service, but the organization still owns the business consequence.",
    review:
      "Who is the internal business risk owner?",
  },
  {
    title: "Criticality comes before questionnaire volume",
    meaning:
      "A low-risk supplier and a critical supplier should not receive identical depth of review.",
    review:
      "How important is the provider to data, access, operations, and recovery?",
  },
  {
    title: "Supplier evidence has scope",
    meaning:
      "Assurance evidence applies to specific services, periods, controls, and populations.",
    review:
      "Does the evidence actually cover the service the organization uses?",
  },
  {
    title: "Contracts transfer some consequences, not all risk",
    meaning:
      "Contract terms can allocate obligations and costs, but an outage can still interrupt the business.",
    review:
      "What residual operational risk remains even with strong contract language?",
  },
  {
    title: "Concentration deserves its own analysis",
    meaning:
      "A supplier can be individually strong and still create material dependency risk.",
    review:
      "What happens if this provider is unavailable for a meaningful period?",
  },
  {
    title: "Fourth parties matter when they are material",
    meaning:
      "Not every subcontractor needs direct review, but critical dependencies should be understood.",
    review:
      "Which downstream supplier could meaningfully affect the service?",
  },
  {
    title: "Exit planning begins before exit",
    meaning:
      "Data portability, access removal, migration, ownership, and continuity should be considered before a crisis.",
    review:
      "Could the organization leave the provider in a controlled way?",
  },
  {
    title: "Supplier risk changes over time",
    meaning:
      "Service scope, ownership, financial condition, technology, incidents, contracts, and fourth parties can change.",
    review:
      "Which changes should trigger reassessment?",
  },
];

const vocabulary = [
  {
    term: "Third party",
    definition:
      "An external supplier, vendor, partner, service provider, contractor, or other organization that supports business activity.",
  },
  {
    term: "Fourth party",
    definition:
      "A supplier or subcontractor used by one of the organization's direct third parties.",
  },
  {
    term: "Supplier criticality",
    definition:
      "The importance of a third party based on business dependency, data, access, availability, recovery, and substitutability.",
  },
  {
    term: "Concentration risk",
    definition:
      "Risk created when many important services depend on one supplier, platform, location, technology, or operational channel.",
  },
  {
    term: "Substitutability",
    definition:
      "How easily a supplier or service can be replaced without unacceptable business disruption.",
  },
  {
    term: "Third-party assurance",
    definition:
      "Evidence used to understand a supplier's security, governance, continuity, or control environment.",
  },
  {
    term: "Business sponsor",
    definition:
      "The internal owner responsible for the business relationship and continued need for the supplier.",
  },
  {
    term: "Exit plan",
    definition:
      "A plan for ending or transitioning a supplier relationship while preserving business continuity, data handling, and access control.",
  },
  {
    term: "Shared responsibility",
    definition:
      "A model in which both the organization and supplier operate different parts of the security and business-control environment.",
  },
  {
    term: "Service dependency",
    definition:
      "A business capability, system, identity, data flow, or recovery process that relies on the supplier.",
  },
  {
    term: "Supplier monitoring",
    definition:
      "Ongoing review of evidence, service health, incidents, ownership, contracts, changes, and risk conditions.",
  },
  {
    term: "Supplier offboarding",
    definition:
      "The controlled process for ending the relationship, removing access, handling data, and validating closure.",
  },
];

const records = [
  {
    id: "TPR-601",
    supplier: "Northbridge Cloud Learning Platform",
    service:
      "Hosted learning platform used for daily instructional workflows",
    criticality:
      "High",
    data:
      "Student profile and course participation data",
    access:
      "Application-level data access; no direct infrastructure administration",
    businessDependency:
      "Daily learning workflows depend on service availability",
    evidence:
      "Current supplier assessment + independent assurance summary + service continuity documentation",
    owner:
      "Digital Learning Service Owner",
    concentration:
      "Medium — important service but not shared across unrelated critical workflows",
    fourthParty:
      "Material hosting dependency disclosed by supplier",
    continuity:
      "Documented outage procedure and alternate communication workflow",
    exit:
      "Data export and transition process documented",
    residual:
      "Moderate",
    state:
      "Monitor",
    nextAction:
      "Refresh assurance at annual review and after material hosting changes",
  },
  {
    id: "TPR-602",
    supplier: "Northbridge Identity Cloud",
    service:
      "External identity platform used by several major business services",
    criticality:
      "Critical",
    data:
      "Identity attributes and authentication metadata",
    access:
      "Central authentication dependency across multiple services",
    businessDependency:
      "Failure can interrupt access to several critical applications at once",
    evidence:
      "Current assurance + uptime history + architecture dependency map + recovery procedure",
    owner:
      "Identity Platform Owner",
    concentration:
      "High — multiple critical services share one identity dependency",
    fourthParty:
      "Hosting and messaging dependencies disclosed",
    continuity:
      "Limited alternate access path for selected emergency operations",
    exit:
      "Migration plan exists but would require major effort",
    residual:
      "Moderate-High concentration risk",
    state:
      "Treat",
    nextAction:
      "Improve continuity and alternate-access planning for critical operations",
  },
  {
    id: "TPR-603",
    supplier: "Partner Scheduling Service",
    service:
      "External scheduling integration for approved student-service workflows",
    criticality:
      "Medium-High",
    data:
      "Scheduling records and limited approved profile data",
    access:
      "Scoped integration identity and certificate trust",
    businessDependency:
      "Scheduling workflow is disrupted if integration trust or service availability fails",
    evidence:
      "Current partner assessment + certificate lifecycle record + sponsor confirmation",
    owner:
      "Integration Owner",
    concentration:
      "Low-Medium",
    fourthParty:
      "No material fourth-party dependency identified in current review",
    continuity:
      "Manual scheduling fallback exists",
    exit:
      "Integration can be disabled and data flow terminated",
    residual:
      "Moderate until certificate renewal closes",
    state:
      "Conditional",
    nextAction:
      "Validate replacement certificate and refresh partner review at renewal",
  },
  {
    id: "TPR-604",
    supplier: "Critical Payroll SaaS",
    service:
      "Payroll processing service",
    criticality:
      "Critical",
    data:
      "Sensitive employee and payroll information",
    access:
      "Processes approved payroll data; restricted integration access",
    businessDependency:
      "Payroll operations depend heavily on the provider",
    evidence:
      "Current supplier assurance + contract review + service continuity documentation",
    owner:
      "Finance Operations Owner",
    concentration:
      "High — no practical alternate payroll provider on short notice",
    fourthParty:
      "Banking and hosting dependencies disclosed",
    continuity:
      "Manual emergency payroll procedure exists but is limited",
    exit:
      "Migration plan documented but not recently rehearsed",
    residual:
      "Moderate-High",
    state:
      "Treat",
    nextAction:
      "Refresh exit exercise and strengthen emergency payroll continuity",
  },
  {
    id: "TPR-605",
    supplier: "Managed Infrastructure Support",
    service:
      "External support team for approved infrastructure operations",
    criticality:
      "High",
    data:
      "Limited operational metadata; no routine access to business records",
    access:
      "Privileged administrative access to defined infrastructure scope",
    businessDependency:
      "Important operational support, but internal escalation path exists",
    evidence:
      "Current access review + supplier assessment + contract + monitoring records",
    owner:
      "Infrastructure Services Owner",
    concentration:
      "Medium",
    fourthParty:
      "Supplier support subcontractor used for after-hours coverage",
    continuity:
      "Internal emergency administration path exists",
    exit:
      "Access can be revoked and support transferred internally",
    residual:
      "Moderate",
    state:
      "Monitor",
    nextAction:
      "Review subcontractor access boundaries and offboarding evidence quarterly",
  },
  {
    id: "TPR-606",
    supplier: "Analytics Export Partner",
    service:
      "Receives approved analytics report packages",
    criticality:
      "Medium",
    data:
      "Sensitive approved analytics exports",
    access:
      "No internal system access; receives controlled exports only",
    businessDependency:
      "Business can pause exports temporarily without critical outage",
    evidence:
      "Current recipient approval + contract terms + transfer-control evidence",
    owner:
      "Analytics Product Owner",
    concentration:
      "Low",
    fourthParty:
      "No material processing subcontractor in current scope",
    continuity:
      "Exports can be paused",
    exit:
      "Recipient relationship can be terminated and future transfers blocked",
    residual:
      "Low-Moderate",
    state:
      "Monitor",
    nextAction:
      "Refresh recipient and data-handling review before annual renewal",
  },
  {
    id: "TPR-607",
    supplier: "Legacy Records Processing Vendor",
    service:
      "Processes a narrow historical records workflow",
    criticality:
      "Medium-High",
    data:
      "Historical sensitive records",
    access:
      "Receives approved batch files through legacy workflow",
    businessDependency:
      "Historical processing continues to support reporting obligations",
    evidence:
      "Supplier review is current, but transfer architecture evidence is stale",
    owner:
      "Records Operations Owner",
    concentration:
      "Low",
    fourthParty:
      "Unknown under current evidence",
    continuity:
      "Manual delay is possible for a limited period",
    exit:
      "Transition plan exists but depends on modernization",
    residual:
      "Moderate-High and uncertain",
    state:
      "Conditional",
    nextAction:
      "Refresh transfer architecture, identify material fourth parties, and align with modernization",
  },
];

const dashboardMetrics = [
  {
    label: "Suppliers reviewed",
    value: "7",
    note: "Learning, identity, scheduling, payroll, infrastructure, analytics, and legacy records",
  },
  {
    label: "Critical / High",
    value: "4",
    note: "Identity, payroll, learning, and managed infrastructure have major business dependency",
  },
  {
    label: "Treat",
    value: "2",
    note: "Identity concentration and payroll continuity need additional risk reduction",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Scheduling certificate lifecycle and legacy records evidence require active conditions",
  },
];

const logs = [
  "[08:26] TPR-601 supplier=LEARNING_PLATFORM criticality=HIGH state=MONITOR",
  "[08:50] TPR-602 supplier=IDENTITY_CLOUD criticality=CRITICAL concentration=HIGH state=TREAT",
  "[09:14] TPR-603 supplier=SCHEDULING_PARTNER cert_renewal=OPEN state=CONDITIONAL",
  "[09:38] TPR-604 supplier=PAYROLL_SAAS criticality=CRITICAL concentration=HIGH state=TREAT",
  "[10:02] TPR-605 supplier=MANAGED_INFRA access=PRIVILEGED state=MONITOR",
  "[10:26] TPR-606 supplier=ANALYTICS_PARTNER criticality=MEDIUM state=MONITOR",
  "[10:50] TPR-607 supplier=LEGACY_RECORDS transfer_evidence=STALE fourth_party=UNKNOWN state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Every supplier gets the same review",
    problem:
      "Low-risk vendors and critical providers receive identical questionnaires and evidence requirements.",
    better:
      "Scale review depth to criticality, data, access, dependency, continuity, and substitutability.",
  },
  {
    title: "Strong supplier controls mean no supplier risk",
    problem:
      "The organization ignores concentration and business dependency because the provider has strong assurance.",
    better:
      "Separate supplier control quality from residual dependency and continuity risk.",
  },
  {
    title: "Contract equals control effectiveness",
    problem:
      "Contract language is treated as proof that operational controls work.",
    better:
      "Use contracts for obligations and assurance evidence for control operation.",
  },
  {
    title: "Business sponsor disappears after onboarding",
    problem:
      "Nobody inside the organization remains accountable for the supplier relationship.",
    better:
      "Maintain a current business sponsor and risk owner throughout the lifecycle.",
  },
  {
    title: "Fourth parties ignored entirely",
    problem:
      "The direct supplier depends on material subcontractors, but nobody understands the dependency.",
    better:
      "Focus on material fourth-party dependencies and require supplier governance and change notification.",
  },
  {
    title: "Exit planning starts during crisis",
    problem:
      "The organization first thinks about data return, migration, and access removal after the provider is already failing.",
    better:
      "Design exit and transition requirements before a crisis.",
  },
  {
    title: "Questionnaire never refreshed",
    problem:
      "Old supplier evidence remains unchanged despite new data, access, acquisitions, service scope, or incidents.",
    better:
      "Use scheduled and event-driven reassessment.",
  },
  {
    title: "Supplier owns the risk",
    problem:
      "The organization assumes outsourced services mean outsourced accountability.",
    better:
      "The supplier operates controls, but the organization still owns the business consequence and residual-risk decision.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep TPR-602 in Treat because strong supplier assurance does not remove high concentration across several critical services.",
    outcome:
      "Best. Supplier control quality and business dependency should be analyzed separately.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Close TPR-602 because the provider has current assurance.",
    outcome:
      "Risky. Assurance evidence cannot eliminate the operational consequence of shared identity dependency.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Transfer all risk to the supplier through contract language.",
    outcome:
      "Risky. Contracts can allocate obligations, but the organization still owns the consequence of service disruption.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep TPR-607 Conditional until transfer architecture and material fourth-party evidence are refreshed.",
    outcome:
      "Best. Current supplier assessment alone does not resolve stale integration evidence and unknown downstream dependency.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark TPR-607 Monitor because the supplier review is current.",
    outcome:
      "Caution. The supplier may be well governed, but important integration and fourth-party uncertainty remains.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark TPR-607 Closed because the workflow is legacy.",
    outcome:
      "Risky. Legacy status does not remove active business or supplier dependency.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of third-party risk?",
    choices: [
      "Business and security risk created when an organization depends on external suppliers, vendors, partners, or service providers.",
      "Only risk caused by cloud providers.",
      "Only contract risk.",
      "Risk that belongs entirely to the supplier.",
    ],
    answer: 0,
    explanation:
      "Third-party risk includes business dependency, data, access, continuity, control, and governance concerns.",
  },
  {
    question:
      "What makes a supplier critical?",
    choices: [
      "High business dependency, sensitive data, privileged access, recovery dependency, low substitutability, or concentration.",
      "The supplier has a large company logo.",
      "The contract is expensive.",
      "The supplier uses cloud infrastructure.",
    ],
    answer: 0,
    explanation:
      "Criticality should reflect business and security dependency, not brand or cost alone.",
  },
  {
    question:
      "What is concentration risk?",
    choices: [
      "Risk created when many important services depend on one supplier, platform, location, technology, or operational channel.",
      "A supplier audit finding.",
      "A password-policy issue.",
      "A contract renewal date.",
    ],
    answer: 0,
    explanation:
      "Concentration risk is about shared dependency and lack of alternatives.",
  },
  {
    question:
      "What is a fourth party?",
    choices: [
      "A supplier or subcontractor used by one of the organization's direct third parties.",
      "The organization's fourth-largest vendor.",
      "A second risk owner.",
      "An internal control owner.",
    ],
    answer: 0,
    explanation:
      "Fourth parties are downstream dependencies of direct suppliers.",
  },
  {
    question:
      "Which statement about contracts is strongest?",
    choices: [
      "Contracts can define obligations and allocate some consequences, but they do not prove control operation or remove business dependency.",
      "Contracts eliminate third-party risk.",
      "Contracts replace supplier evidence.",
      "Contracts mean continuity planning is unnecessary.",
    ],
    answer: 0,
    explanation:
      "Contracts support governance, but operational and business risks still remain.",
  },
  {
    question:
      "When should supplier risk be reassessed?",
    choices: [
      "On a defined schedule and after material changes such as incidents, ownership changes, scope expansion, new data, contract renewal, or major architecture change.",
      "Only during initial onboarding.",
      "Only after a breach.",
      "Never if assurance evidence exists.",
    ],
    answer: 0,
    explanation:
      "Supplier risk changes over time and should be refreshed after meaningful events.",
  },
  {
    question:
      "What is strongest for supplier exit planning?",
    choices: [
      "Plan data return/deletion, access removal, migration, continuity, ownership transition, and closure evidence before a crisis occurs.",
      "Wait until the supplier fails.",
      "Assume the supplier will handle everything.",
      "Delete all evidence at contract termination.",
    ],
    answer: 0,
    explanation:
      "Exit planning is strongest when designed before emergency pressure exists.",
  },
];

const checklistItems = [
  "Every supplier has a stable TPR ID.",
  "Business sponsor is named.",
  "Risk owner is named.",
  "Business service dependency is documented.",
  "Data scope is documented.",
  "Identity and access scope is documented.",
  "Criticality is assessed.",
  "Availability impact is assessed.",
  "Substitutability is assessed.",
  "Recovery dependency is assessed.",
  "Concentration risk is assessed.",
  "Material fourth-party dependencies are considered.",
  "Supplier assurance evidence is current.",
  "Evidence scope matches the actual service used.",
  "Contracts are treated as governance evidence, not proof of control operation.",
  "Continuity planning is documented.",
  "Exit planning is documented.",
  "Review cadence is defined.",
  "Material change triggers are defined.",
  "No supplier review requires unauthorized testing, probing, or collection of private third-party information.",
];

const takeaways = [
  "Third-party risk is business risk created through external dependency.",
  "Outsourcing a service does not outsource accountability for the business consequence.",
  "Supplier criticality depends on data, access, service importance, recovery, concentration, and substitutability.",
  "Strong assurance evidence does not eliminate concentration risk.",
  "Contracts define obligations but do not prove controls operate.",
  "Fourth parties matter when they are material to the service.",
  "Supplier risk should be monitored throughout onboarding, operation, renewal, and exit.",
  "Exit planning should exist before a crisis.",
  "A supplier can be secure and still create unacceptable business dependency.",
  "The Third-Party Risk Review prepares you for A15.9 Communicating Risk to Leaders.",
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

export default function ThirdPartyRiskConceptsPage() {
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
              A15.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Third-Party Risk Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Modern organizations depend on suppliers for applications,
            infrastructure, identity, payroll, communications, support,
            analytics, and other important services. Third-party risk management
            asks what the organization still owns when part of the service is
            outside its direct control.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All suppliers, contracts, assessments, integrations, evidence, and
            risks in this lesson are fictional. Students do not investigate,
            test, probe, or access real third-party systems.
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
          lessonTitle="Third-Party Risk Concepts"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.8 Entry Readiness"
          items={[
            "I can explain residual risk and risk ownership.",
            "I can evaluate evidence quality and exceptions.",
            "I understand that contracts and controls prove different things.",
            "I will use fictional supplier and dependency records only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Supplier Operates the Service, but Your Organization Still Owns the Consequence"
        >
          <p className="leading-8">
            A supplier can have excellent controls and still create major risk
            if several critical business services depend on it. Third-party risk
            management therefore looks at both supplier security and the
            organization's own dependency.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Strong supplier security does not automatically mean low business dependency risk.
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
          eyebrow="Third-Party Landscape"
          title="External Dependency Takes Many Forms"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {thirdPartyCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.category}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Risk: {item.risk}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Supplier Criticality"
          title="Review Depth Should Match Business and Security Dependency"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {criticalityDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Lower concern: {item.low}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Higher concern: {item.high}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Supplier Evidence"
          title="Different Evidence Sources Answer Different Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceTypes.map((item) => (
              <article
                key={item.evidence}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">
                  {item.evidence}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Proves: {item.proves}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle"
          title="Third-Party Risk Starts Before Onboarding and Ends After Exit"
        >
          <div className="grid gap-5">
            {lifecycle.map((item, index) => (
              <article
                key={item.phase}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-cyan-50">
                      {item.phase}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-cyan-100">
                      {item.purpose}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Decision: {item.decision}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Contracts"
          title="Contracts Support Governance but Do Not Replace Risk Analysis"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {contractConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.concept}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Why it matters: {item.why}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Concentration Risk"
          title="A Strong Supplier Can Still Be a Single Point of Business Dependency"
        >
          <div className="grid gap-5">
            {concentrationConcepts.map((item) => (
              <article
                key={item.pattern}
                className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-6"
              >
                <h3 className="text-xl font-black text-yellow-50">
                  {item.pattern}
                </h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Business risk: {item.businessRisk}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Response: {item.response}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fourth Parties"
          title="Your Supplier May Depend on Other Suppliers"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {fourthPartyConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.concept}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Third-Party Risk Management"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
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
          title="Third-Party Risk Terms"
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
          eyebrow="Fictional Supplier Register"
          title="Seven Northbridge Third-Party Risk Records"
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
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.supplier}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Service", item.service],
                    ["Criticality", item.criticality],
                    ["Data", item.data],
                    ["Access", item.access],
                    ["Business dependency", item.businessDependency],
                    ["Evidence", item.evidence],
                    ["Business / risk owner", item.owner],
                    ["Concentration", item.concentration],
                    ["Fourth-party dependency", item.fourthParty],
                    ["Continuity", item.continuity],
                    ["Exit planning", item.exit],
                    ["Residual risk", item.residual],
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
          title="Northbridge Third-Party Risk Dashboard"
          subtitle="Fictional supplier criticality, concentration, continuity, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Identity Provider Creates High Concentration Risk"
          severity="High"
          time="08:50"
          source="Fictional Third-Party Risk Review"
          details="TPR-602 has strong current supplier assurance, but several critical business services depend on the same external identity platform. A provider outage could create simultaneous access disruption across multiple systems."
          recommendation="Keep the risk in Treat and improve alternate-access, continuity, and recovery options for critical business operations."
        />

        <Section
          eyebrow="Supplier Control Strength vs. Dependency Risk"
          title="Both Can Be True at the Same Time"
        >
          <p className="leading-8">
            One of the hardest third-party risk concepts is recognizing that a
            supplier can be well controlled and still create high residual risk.
            Supplier assurance tells you about the supplier's control
            environment. Concentration and continuity analysis tell you what
            happens to your organization if the service is unavailable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">
                Supplier assurance question
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                “Are the supplier's relevant controls well designed and
                operating under current evidence?”
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Dependency question
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                “What happens to our business if this provider is unavailable,
                changes materially, or can no longer meet our needs?”
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Third-Party Risk Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: External Identity Concentration"
          question="What is the strongest current decision for TPR-602?"
          evidence={[
            "The supplier has current assurance evidence.",
            "Several critical services rely on the same external identity platform.",
            "A limited emergency access path exists for selected operations.",
            "Full migration to another provider would require major effort.",
            "A provider outage could affect several business services simultaneously.",
          ]}
          options={[
            "Treat — keep supplier assurance current while reducing concentration and continuity risk.",
            "Closed — strong assurance eliminates supplier risk.",
            "Accepted Risk automatically — the supplier owns the service.",
            "Not Applicable — identity platforms are outside third-party risk.",
          ]}
          bestAnswer={0}
          explanation="Strong assurance reduces uncertainty about supplier controls but does not eliminate the business consequence of shared dependency."
        />

        <Section
          eyebrow="Common Third-Party Risk Mistakes"
          title="Eight Ways Supplier Review Becomes Misleading"
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
          title="Scenario Decision Lab 1 — Strong Supplier, High Concentration"
          scenario="A critical identity provider has strong assurance evidence, but multiple essential applications depend on it and migration would take months."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Current Supplier Review, Stale Integration Evidence"
          scenario="A legacy records vendor has a current supplier assessment, but the transfer architecture is stale and material fourth-party dependencies are unknown."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Third-Party Risk Review"
        >
          <p className="leading-8">
            Use fictional suppliers, contracts, services, evidence, data flows,
            owners, continuity plans, and exit decisions only.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional supplier records.",
              "Give every supplier a stable TPR ID.",
              "Record supplier/service name.",
              "Record internal business sponsor.",
              "Record risk owner.",
              "Record business service dependency.",
              "Record data handled.",
              "Record identity or access scope.",
              "Assign criticality.",
              "Assess business impact if unavailable.",
              "Assess substitutability.",
              "Assess recovery dependency.",
              "Assess supplier concentration.",
              "Identify material fourth-party dependencies where known.",
              "Record supplier assurance evidence.",
              "Record evidence freshness.",
              "Record assurance scope.",
              "Record contract or governance expectations.",
              "Record incident-notification expectations.",
              "Record continuity plan.",
              "Record exit plan.",
              "Record data-return/deletion expectations.",
              "Record review cadence.",
              "Record event-driven review triggers.",
              "Record residual risk.",
              "Choose Monitor, Treat, Conditional, Accepted Risk, Blocked, or Closed.",
              "Record next action.",
              "Include at least five Critical or High suppliers.",
              "Include at least five Low or Medium suppliers.",
              "Include at least three suppliers with privileged access.",
              "Include at least three suppliers with sensitive data.",
              "Include at least three concentration-risk scenarios.",
              "Include at least three material fourth-party scenarios.",
              "Include at least three suppliers with weak exit planning.",
              "Include at least two suppliers with stale evidence.",
              "Include at least two suppliers where strong assurance still leaves high business dependency risk.",
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
              Do not scan, probe, test, exploit, or investigate real vendors,
              supplier systems, employees, accounts, or infrastructure. Do not
              collect confidential contracts, restricted supplier reports, or
              private assurance evidence. Use synthetic records only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Records Vendor"
          question="What is the strongest current state for TPR-607?"
          evidence={[
            "The supplier assessment is current.",
            "The business still relies on the workflow.",
            "Transfer architecture evidence is stale.",
            "Material fourth-party dependencies are currently unknown.",
            "A modernization plan exists but is not complete.",
          ]}
          options={[
            "Conditional until integration evidence and material fourth-party dependencies are refreshed.",
            "Monitor because the supplier assessment is current.",
            "Closed because the workflow is legacy.",
            "Accepted Risk automatically because the vendor is under contract.",
          ]}
          bestAnswer={0}
          explanation="The supplier itself may be well reviewed, but important dependency and integration uncertainty remains unresolved."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Third-Party Risk Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for supplier
            criticality, onboarding, evidence, monitoring, concentration,
            fourth-party dependencies, renewal, incidents, and exit.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Supplier classification",
              "Criticality criteria",
              "Business sponsor",
              "Risk-owner responsibility",
              "Data and access review",
              "Assurance requirements",
              "Evidence freshness",
              "Contract expectations",
              "Incident notification",
              "Fourth-party governance",
              "Concentration analysis",
              "Continuity requirements",
              "Exit planning",
              "Renewal review",
              "Event-driven reassessment",
              "Risk acceptance",
              "Offboarding evidence",
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
            The strongest standard should scale review depth to supplier
            criticality rather than treating every vendor as equally risky.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.8 Mini Quiz: Third-Party Risk Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Third-Party Risk Review"
          prompt="Create the eighth artifact for your A15 Risk Register and Leadership Recommendation: a fictional Third-Party Risk Review with at least twenty-five records. Include TPR ID, supplier/service, business sponsor, risk owner, business dependency, data scope, access scope, criticality, availability impact, substitutability, recovery dependency, concentration risk, material fourth parties, assurance evidence, evidence freshness, evidence scope, contract expectations, continuity plan, exit plan, data-return/deletion expectations, review cadence, change triggers, residual risk, decision state, and next action."
          tips={[
            "Separate supplier control quality from your organization's dependency.",
            "Scale review depth to criticality.",
            "Keep concentration risk visible.",
            "Treat contracts as governance evidence, not operational proof.",
            "Include exit planning before crisis conditions.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.9?"
        >
          <p className="leading-8">
            A15.9 focuses on Communicating Risk to Leaders. Before continuing,
            make sure you can summarize a complex supplier risk in terms of
            business consequence, evidence, options, and recommended action.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain supplier criticality.",
              "I can distinguish supplier assurance from concentration risk.",
              "I can explain why fourth parties matter when they are material.",
              "I can identify the purpose of continuity and exit planning.",
              "I can explain why the organization still owns the business consequence after outsourcing.",
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
          title="How to Make the Third-Party Risk Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with business dependency",
                detail:
                  "Explain what service depends on the supplier before describing assurance details.",
              },
              {
                title: "Show criticality factors",
                detail:
                  "Data, access, availability, substitutability, recovery, and concentration should shape review depth.",
              },
              {
                title: "Show evidence scope",
                detail:
                  "Record what supplier evidence covers and what it does not cover.",
              },
              {
                title: "Show concentration",
                detail:
                  "A strong supplier can still be risky if too many critical services depend on it.",
              },
              {
                title: "Show fourth-party limits",
                detail:
                  "Record material downstream dependencies without pretending full visibility always exists.",
              },
              {
                title: "Show continuity",
                detail:
                  "Explain practical workarounds, recovery options, and business impact during provider disruption.",
              },
              {
                title: "Show exit readiness",
                detail:
                  "Data, access, migration, ownership, and continuity should be planned before termination.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.9 will turn detailed risk records into concise leadership decisions and recommendations.",
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
            Supplier risk review uses authorized governance evidence—not investigation of real vendors
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, test, exploit, or investigate real vendors,
            supplier systems, accounts, employees, or infrastructure. Do not
            collect confidential contracts or restricted third-party assurance
            records. All suppliers, services, evidence, contracts, owners, and
            risks in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.8 Third-Party Risk Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for supplier criticality, evidence,
            business dependency, contracts, concentration risk, fourth parties,
            continuity, monitoring, and exit planning. Next, A15.9 focuses on
            Communicating Risk to Leaders.
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