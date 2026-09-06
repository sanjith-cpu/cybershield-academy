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
const modulePath = `${trackPath}/cloud-security-architecture`;
const previousLesson = `${modulePath}/cloud-misconfiguration-prevention`;
const nextLesson = `${modulePath}/cloud-architecture-review-lab`;

const objectives = [
  "Explain cloud governance as the system of ownership, policy, standards, evidence, review, exceptions, risk decisions, and lifecycle accountability that keeps cloud architecture aligned with organizational goals.",
  "Distinguish policies, standards, procedures, guardrails, exceptions, risk acceptances, service ownership, evidence ownership, and review cadence by purpose and decision authority.",
  "Evaluate fictional cloud governance records for missing ownership, stale review, expired exceptions, weak evidence, untracked services, and unresolved risk decisions.",
  "Connect governance to IAM, storage, networks, monitoring, secrets, recovery, and configuration assurance so technical controls remain explainable over time.",
  "Build a Cloud Governance Decision Register that becomes the ninth artifact in the A12 Cloud Security Architecture Assessment.",
];

const governanceLayers = [
  {
    layer: "Policy",
    purpose:
      "States the organization's high-level security or business expectation.",
    example:
      "Sensitive cloud data must be protected according to approved classification and access requirements.",
    owner:
      "Security leadership, governance, legal, privacy, or another accountable organizational authority.",
    evidence:
      "Published policy, approval history, owner, review date, and scope.",
  },
  {
    layer: "Standard",
    purpose:
      "Turns policy into specific expected technical or operational requirements.",
    example:
      "Restricted cloud storage must remain private unless an approved exception documents the business need.",
    owner:
      "Cloud security architecture, platform engineering, security engineering, or another responsible standards body.",
    evidence:
      "Approved standard, version, owner, applicability, review date, and implementation guidance.",
  },
  {
    layer: "Procedure",
    purpose:
      "Describes how a team performs a repeatable governance or operational activity.",
    example:
      "Quarterly privileged-access review process with owners, evidence, and closure requirements.",
    owner:
      "Operational team that performs the activity.",
    evidence:
      "Procedure record, training or ownership, execution evidence, and review history.",
  },
  {
    layer: "Guardrail",
    purpose:
      "Constrains or detects configuration that should not normally be allowed.",
    example:
      "Prevent production storage from becoming publicly exposed without explicit approved policy.",
    owner:
      "Platform or cloud security engineering.",
    evidence:
      "Guardrail definition, scope, deployment record, test evidence, and exception path.",
  },
  {
    layer: "Exception",
    purpose:
      "Documents a bounded deviation from an approved policy, standard, or guardrail.",
    example:
      "Temporary manual freshness check while automated telemetry source-health integration is completed.",
    owner:
      "Business or technical owner who accepts responsibility for the deviation.",
    evidence:
      "Reason, risk, compensating control, owner, expiration, target state, review, and closure evidence.",
  },
  {
    layer: "Risk acceptance",
    purpose:
      "Records an informed decision to retain a known residual risk when remediation is not currently justified or possible.",
    example:
      "External SaaS dependency remains a recovery limitation while contractual and operational mitigations are maintained.",
    owner:
      "Authorized risk decision-maker appropriate to the impact.",
    evidence:
      "Risk statement, impact, rationale, owner, review date, conditions, and change triggers.",
  },
];

const ownershipModels = [
  {
    role: "Service owner",
    responsibility:
      "Owns the business or technical outcome of a cloud service and ensures that security, lifecycle, and operational responsibilities remain assigned.",
    evidence:
      "Service inventory, ownership record, architecture decision history, review sign-off.",
  },
  {
    role: "Control owner",
    responsibility:
      "Owns a specific security control such as privileged access, backup protection, monitoring, or configuration assurance.",
    evidence:
      "Control definition, implementation evidence, review records, remediation ownership.",
  },
  {
    role: "Evidence owner",
    responsibility:
      "Maintains the records needed to support an architecture or governance claim.",
    evidence:
      "Current source records, review date, source-health information, validation notes.",
  },
  {
    role: "Risk owner",
    responsibility:
      "Has authority to evaluate and accept or reject residual risk for the relevant business scope.",
    evidence:
      "Risk decision record, rationale, review cadence, conditions, approval.",
  },
  {
    role: "Platform owner",
    responsibility:
      "Owns shared cloud foundations such as IAM integration, logging, network patterns, deployment foundations, or approved guardrails.",
    evidence:
      "Platform standard, service catalog, support model, configuration baseline, change records.",
  },
  {
    role: "Application owner",
    responsibility:
      "Owns application-specific architecture, code, data use, dependencies, access needs, monitoring, and release decisions.",
    evidence:
      "Application inventory, architecture records, release evidence, dependency register.",
  },
];

const reviewCadences = [
  {
    trigger: "Scheduled review",
    meaning:
      "A governance item is reviewed on a recurring cadence such as monthly, quarterly, or annually.",
    bestFor:
      "Stable controls, standards, access reviews, ownership checks, and risk registers.",
    caution:
      "A calendar review should not be the only trigger when architecture changes quickly.",
  },
  {
    trigger: "Architecture change",
    meaning:
      "A new service, data flow, dependency, identity model, provider, or trust boundary triggers review.",
    bestFor:
      "Cloud architecture records, recovery plans, monitoring coverage, secrets governance, and trust-boundary maps.",
    caution:
      "Change-triggered review needs a reliable process for identifying meaningful changes.",
  },
  {
    trigger: "Ownership change",
    meaning:
      "A service or control owner changes roles, teams, or leaves.",
    bestFor:
      "Service inventory, exceptions, access, recovery, monitoring, and risk decisions.",
    caution:
      "Unowned records can quickly become stale if transfer is not part of the lifecycle.",
  },
  {
    trigger: "Exception expiration",
    meaning:
      "A temporary deviation reaches its review or end date.",
    bestFor:
      "Temporary configuration, partner, monitoring, access, and recovery exceptions.",
    caution:
      "An expired exception should not silently remain active.",
  },
  {
    trigger: "Incident or control failure",
    meaning:
      "A security event, outage, failed recovery exercise, missing telemetry source, or other control failure triggers reassessment.",
    bestFor:
      "Risk acceptance, baseline updates, recovery evidence, monitoring design, and guardrails.",
    caution:
      "Post-event review should improve architecture rather than only close the ticket.",
  },
  {
    trigger: "Policy or business change",
    meaning:
      "New requirements, contracts, privacy needs, service priorities, or business processes alter the expected control outcome.",
    bestFor:
      "Data handling, identity, retention, resilience, provider selection, and governance scope.",
    caution:
      "Technical teams may miss business-driven triggers unless ownership is clear.",
  },
];

const governancePrinciples = [
  {
    title: "Every service needs an owner",
    meaning:
      "Cloud resources should not outlive the people or teams responsible for their purpose, security, and lifecycle.",
    review:
      "Can every production service identify a current accountable owner?",
  },
  {
    title: "Standards should support engineering",
    meaning:
      "Good governance creates clear reusable expectations rather than vague rules that force every team to invent security from scratch.",
    review:
      "Does the standard make secure implementation easier to understand?",
  },
  {
    title: "Evidence should support claims",
    meaning:
      "Governance decisions should be based on current evidence rather than assumptions or old documentation.",
    review:
      "What current source proves the service meets the stated standard?",
  },
  {
    title: "Exceptions should be temporary or deliberately renewed",
    meaning:
      "A deviation should never become permanent by accident.",
    review:
      "Does every exception have owner, expiration, target state, and closure requirement?",
  },
  {
    title: "Residual risk should be explicit",
    meaning:
      "Some risk may remain after controls are applied, but it should be recorded, owned, and reviewed.",
    review:
      "Who is authorized to accept the remaining risk and under what conditions?",
  },
  {
    title: "Governance follows lifecycle",
    meaning:
      "Cloud services should have governance expectations from request and design through operation and retirement.",
    review:
      "Does retirement include removal of access, credentials, monitoring, backups, and exceptions?",
  },
  {
    title: "Review cadence should match change",
    meaning:
      "Fast-changing architecture may need event-driven review in addition to scheduled review.",
    review:
      "Which changes should automatically reopen the governance decision?",
  },
  {
    title: "Ownership and evidence are different",
    meaning:
      "The person accountable for a service may not be the team that maintains the supporting evidence.",
    review:
      "Are service owner, control owner, and evidence owner clearly distinguished?",
  },
];

const vocabulary = [
  {
    term: "Governance",
    definition:
      "The system of policy, standards, ownership, decision rights, evidence, review, exceptions, and accountability used to guide cloud architecture over time.",
  },
  {
    term: "Policy",
    definition:
      "A high-level organizational requirement or expectation approved by an appropriate authority.",
  },
  {
    term: "Standard",
    definition:
      "A specific expected technical or operational requirement used to implement policy consistently.",
  },
  {
    term: "Procedure",
    definition:
      "A repeatable method for carrying out an approved operational or governance activity.",
  },
  {
    term: "Control owner",
    definition:
      "The person or team accountable for ensuring a specific security control remains implemented and effective.",
  },
  {
    term: "Risk owner",
    definition:
      "The authorized person or role accountable for decisions about accepting, reducing, transferring, or avoiding a defined risk.",
  },
  {
    term: "Risk acceptance",
    definition:
      "A documented decision to retain a known residual risk under defined conditions and review expectations.",
  },
  {
    term: "Exception",
    definition:
      "A bounded approved deviation from a policy, standard, baseline, or guardrail.",
  },
  {
    term: "Review cadence",
    definition:
      "The scheduled or event-driven timing used to reassess a governance record or control.",
  },
  {
    term: "Service inventory",
    definition:
      "A maintained record of cloud services, owners, purpose, environment, data, dependencies, lifecycle, and governance status.",
  },
  {
    term: "Decision right",
    definition:
      "The authority assigned to a person or role to approve, reject, accept risk, or require remediation.",
  },
  {
    term: "Residual risk",
    definition:
      "The risk that remains after current controls and mitigations are considered.",
  },
];

const governanceRecords = [
  {
    id: "GOV-01",
    item: "Student Services Portal",
    type: "Service governance",
    owner: "Application Owner",
    standard:
      "Production application standard: approved IAM, private downstream services, logging, recovery, and change evidence",
    evidence:
      "A12 IAM, storage, network, monitoring, secrets, recovery, and configuration records",
    review:
      "Quarterly + architecture change",
    exception:
      "None",
    risk:
      "New analytics dependency must be incorporated into next review",
    status: "Confirmed",
    nextAction:
      "Update architecture records when analytics service is approved.",
  },
  {
    id: "GOV-02",
    item: "Platform Administrator Access",
    type: "Control governance",
    owner: "Platform Engineering Manager",
    standard:
      "Privileged administration uses approved JIT access and post-use review",
    evidence:
      "IAM activation records and management audit",
    review:
      "Monthly + emergency use",
    exception:
      "One missing post-use review",
    risk:
      "Evidence completeness gap for one emergency activation",
    status: "Conditional",
    nextAction:
      "Complete post-use review and close evidence gap.",
  },
  {
    id: "GOV-03",
    item: "Temporary Export Telemetry",
    type: "Monitoring exception",
    owner: "Security Monitoring",
    standard:
      "Critical cloud telemetry sources have automated freshness monitoring",
    evidence:
      "Monitoring coverage matrix + daily manual verification",
    review:
      "Daily until exception closure",
    exception:
      "EX-01 expires in 14 days",
    risk:
      "Source could become stale without automatic freshness detection",
    status: "Conditional",
    nextAction:
      "Complete automated source-health integration.",
  },
  {
    id: "GOV-04",
    item: "Legacy Reporting Credential",
    type: "Credential governance",
    owner: "Unknown",
    standard:
      "Production service credentials are owned, narrow, monitored, rotated, and revocable",
    evidence:
      "Secrets governance register shows owner and revocation gaps",
    review:
      "Overdue",
    exception:
      "None",
    risk:
      "Unowned long-lived credential remains active",
    status: "Blocked",
    nextAction:
      "Resolve business need and owner; replace or retire.",
  },
  {
    id: "GOV-05",
    item: "Report Storage Recovery",
    type: "Resilience governance",
    owner: "Reporting Team",
    standard:
      "Recovery evidence is refreshed after material architecture change",
    evidence:
      "Restore exercise is 210 days old and predates current architecture",
    review:
      "Before recovery readiness can be confirmed",
    exception:
      "None",
    risk:
      "Current restoration capability not yet proven",
    status: "Conditional",
    nextAction:
      "Complete current-architecture recovery exercise.",
  },
  {
    id: "GOV-06",
    item: "Development-to-Production Reporting Path",
    type: "Network governance",
    owner: "Unknown",
    standard:
      "No standing cross-environment production path without approved exception",
    evidence:
      "Trust-boundary and configuration records show legacy path",
    review:
      "Immediate",
    exception:
      "No valid exception",
    risk:
      "Unowned environment-boundary drift",
    status: "Blocked",
    nextAction:
      "Remove path or establish narrowly scoped approved exception if genuinely required.",
  },
  {
    id: "GOV-07",
    item: "Scheduling SaaS Integration",
    type: "Third-party governance",
    owner: "Integration Owner",
    standard:
      "Partner integrations are narrowly scoped, owned, monitored, reviewed, and lifecycle-managed",
    evidence:
      "Integration IAM, network, certificate, and monitoring records",
    review:
      "Every 30 days + contract/data-flow change",
    exception:
      "Certificate replacement validation pending",
    risk:
      "External SaaS availability and certificate lifecycle remain dependencies",
    status: "Conditional",
    nextAction:
      "Complete certificate replacement validation and partner review.",
  },
  {
    id: "GOV-08",
    item: "Public Help Content Storage",
    type: "Data governance",
    owner: "Communications Web Owner",
    standard:
      "Public storage contains only Public-classified content with controlled publishing",
    evidence:
      "Storage exposure review + publishing workflow",
    review:
      "Quarterly + content-classification change",
    exception:
      "None",
    risk:
      "Publishing process must prevent restricted content from entering the public location",
    status: "Confirmed",
    nextAction:
      "Maintain content-classification review.",
  },
];

const serviceInventory = [
  {
    id: "SVC-01",
    name: "Student Services Portal",
    purpose: "Student-support application",
    owner: "Application Owner",
    environment: "Production",
    data: "Restricted + Sensitive",
    dependencies:
      "Identity, database, report storage, monitoring, notification provider",
    lifecycle: "Active",
    governance: "Current",
  },
  {
    id: "SVC-02",
    name: "Student Support Database",
    purpose: "Primary application data store",
    owner: "Data Platform Owner",
    environment: "Production",
    data: "Restricted",
    dependencies:
      "Workload identity, backup service, key reference, private service path",
    lifecycle: "Active",
    governance: "Current",
  },
  {
    id: "SVC-03",
    name: "Generated Report Storage",
    purpose: "Short-term report storage",
    owner: "Reporting Team",
    environment: "Production",
    data: "Sensitive",
    dependencies:
      "Reporting workload, storage service, monitoring, recovery",
    lifecycle: "Active",
    governance: "Conditional",
  },
  {
    id: "SVC-04",
    name: "Scheduling Integration",
    purpose: "Approved appointment integration",
    owner: "Integration Owner",
    environment: "Production",
    data: "Minimized appointment fields",
    dependencies:
      "SaaS provider, external identity, certificate, network integration, monitoring",
    lifecycle: "Active",
    governance: "Conditional",
  },
  {
    id: "SVC-05",
    name: "Legacy Team File Share",
    purpose: "Historical file workflow",
    owner: "Unknown",
    environment: "Production",
    data: "Mixed / unclear",
    dependencies:
      "Legacy file service + inherited group",
    lifecycle: "Review for retirement",
    governance: "Blocked",
  },
  {
    id: "SVC-06",
    name: "Cloud Monitoring Platform",
    purpose: "Security and operational evidence",
    owner: "Security Monitoring",
    environment: "Production",
    data: "Security telemetry",
    dependencies:
      "Log sources, source health, alert routing, identity",
    lifecycle: "Active",
    governance: "Current",
  },
];

const riskDecisions = [
  {
    id: "RISK-01",
    risk:
      "External scheduling SaaS availability may delay complete integration recovery.",
    mitigation:
      "Narrow integration, monitoring, continuity procedure, internal configuration recovery, partner support agreement.",
    residual:
      "External provider availability remains outside direct organizational control.",
    owner:
      "Business Service Owner",
    review:
      "Quarterly + provider/service-level change",
    decision:
      "Accepted with conditions",
  },
  {
    id: "RISK-02",
    risk:
      "Temporary export telemetry does not yet have automated freshness monitoring.",
    mitigation:
      "Daily manual check and direct event-volume review while integration is completed.",
    residual:
      "Short-term chance of delayed awareness if the manual control fails.",
    owner:
      "Security Monitoring Manager",
    review:
      "Daily; exception expires in 14 days",
    decision:
      "Temporary acceptance",
  },
  {
    id: "RISK-03",
    risk:
      "Legacy reporting credential is active without confirmed owner or revocation path.",
    mitigation:
      "None sufficient at present.",
    residual:
      "Unbounded ownership and lifecycle risk.",
    owner:
      "Not assigned",
    review:
      "Immediate",
    decision:
      "Not accepted / Blocked",
  },
  {
    id: "RISK-04",
    risk:
      "Report-storage restoration evidence is stale.",
    mitigation:
      "Current backups and known recovery owner remain in place.",
    residual:
      "Current restoration capability has not been proven.",
    owner:
      "Reporting Service Owner",
    review:
      "Until new recovery exercise is completed",
    decision:
      "Conditional",
  },
];

const antiPatterns = [
  {
    title: "Governance means paperwork",
    problem:
      "Teams treat governance as documentation separate from architecture and engineering decisions.",
    better:
      "Use governance to clarify ownership, standards, exceptions, evidence, and decision authority.",
  },
  {
    title: "Every cloud resource is everyone's responsibility",
    problem:
      "No individual team is accountable for service lifecycle, evidence, or remediation.",
    better:
      "Assign service, control, evidence, and risk ownership explicitly.",
  },
  {
    title: "Exception equals permanent approval",
    problem:
      "Temporary deviations remain forever because no expiration or closure condition exists.",
    better:
      "Use bounded exceptions with review dates and target states.",
  },
  {
    title: "Policy without technical standard",
    problem:
      "Teams receive broad security language but no concrete expected configuration or evidence.",
    better:
      "Translate policy into practical standards and reusable patterns.",
  },
  {
    title: "Risk accepted by whoever finds it",
    problem:
      "A person without appropriate authority informally decides that a material risk is acceptable.",
    better:
      "Assign decision rights to authorized risk owners based on impact.",
  },
  {
    title: "Service inventory is only for billing",
    problem:
      "The organization knows what resources cost but not who owns them, what data they hold, or when they should retire.",
    better:
      "Use service inventory as a lifecycle and security-governance record.",
  },
  {
    title: "Review on a calendar only",
    problem:
      "A major architecture change occurs immediately after the annual review and goes unchecked for months.",
    better:
      "Combine scheduled and event-driven review triggers.",
  },
  {
    title: "Evidence from last year is good enough",
    problem:
      "Governance claims rely on records that predate current identities, integrations, or architecture.",
    better:
      "Require evidence current enough for the claim being made.",
  },
];

const dashboardMetrics = [
  {
    label: "Governance records",
    value: "8",
    note: "Service, control, monitoring, credential, resilience, network, partner, and data governance",
  },
  {
    label: "Current service owners",
    value: "6 / 8",
    note: "Legacy credential and development-to-production path remain unowned",
  },
  {
    label: "Open exceptions",
    value: "3",
    note: "Monitoring freshness, certificate validation, and one invalid legacy path record",
  },
  {
    label: "Blocked governance items",
    value: "2",
    note: "Unowned credential and unowned cross-environment path require immediate resolution",
  },
];

const logs = [
  "[08:15] GOV-01 student-portal owner=ApplicationOwner review=CURRENT status=CONFIRMED",
  "[08:41] GOV-02 platform-admin evidence=PARTIAL post_review=MISSING status=CONDITIONAL",
  "[09:04] GOV-03 temp-export exception=EX-01 expires=14d status=CONDITIONAL",
  "[09:32] GOV-04 legacy-credential owner=UNKNOWN risk_acceptance=NONE status=BLOCKED",
  "[09:58] GOV-05 report-recovery evidence=STALE owner=ReportingTeam",
  "[10:24] GOV-06 dev-to-prod owner=UNKNOWN exception=INVALID status=BLOCKED",
  "[10:51] GOV-07 scheduling-saas partner-review=8d certificate=CONDITIONAL",
  "[11:12] GOV-08 public-help classification=PUBLIC owner=Communications status=CONFIRMED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat GOV-04 as Blocked, identify a legitimate service owner and risk owner, confirm whether the credential is still needed, and require replacement or retirement before any acceptance decision.",
    outcome:
      "Best. Unowned risk should not be accepted by default.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Accept the risk because the credential has existed for a long time.",
    outcome:
      "Risky. Age does not establish ownership, business need, or acceptable residual risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the credential as Shared Responsibility so no owner is needed.",
    outcome:
      "Risky. Shared responsibility should clarify ownership, not erase it.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the temporary monitoring deviation Conditional, maintain the compensating manual control, honor the 14-day expiration, and require closure evidence before returning to Confirmed.",
    outcome:
      "Best. A bounded exception can manage temporary risk without pretending the preferred standard is already met.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Convert the 14-day exception into a permanent exception so no more reviews are needed.",
    outcome:
      "Risky. Permanent exceptions should not emerge simply because remediation is inconvenient.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove the source-health requirement from the standard so the system becomes compliant.",
    outcome:
      "Risky. Changing the standard only to hide drift weakens governance.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of cloud governance?",
    choices: [
      "A collection of billing reports.",
      "A system of policy, standards, ownership, decision rights, evidence, review, exceptions, risk decisions, and lifecycle accountability.",
      "Only technical configuration.",
      "Only legal review.",
    ],
    answer: 1,
    explanation:
      "Cloud governance connects organizational expectations to accountable architecture and operational decisions.",
  },
  {
    question:
      "What is the main difference between policy and standard?",
    choices: [
      "Policy states a high-level requirement, while a standard defines more specific expected implementation or control requirements.",
      "They are always identical.",
      "A standard has no owner.",
      "Policy only applies to vendors.",
    ],
    answer: 0,
    explanation:
      "Standards translate policy into practical expectations teams can implement and review.",
  },
  {
    question:
      "What should happen when a cloud service has no current owner?",
    choices: [
      "Assume the provider owns it.",
      "Treat it as a governance gap and resolve ownership before expanding risk or accepting exceptions.",
      "Ignore it if the service still works.",
      "Move it to a public environment.",
    ],
    answer: 1,
    explanation:
      "Unowned services cannot be reliably governed, reviewed, or retired.",
  },
  {
    question:
      "What makes a risk acceptance stronger?",
    choices: [
      "No written record.",
      "A defined risk, current evidence, mitigation, residual risk, authorized owner, review date, conditions, and change triggers.",
      "Permanent approval by the application developer.",
      "Removing the finding from the dashboard.",
    ],
    answer: 1,
    explanation:
      "Risk acceptance should be explicit, informed, authorized, and reviewable.",
  },
  {
    question:
      "Why should governance use event-driven review triggers in addition to scheduled review?",
    choices: [
      "Because architecture can change materially between scheduled reviews.",
      "Because calendars are never useful.",
      "Because every minor event should stop production.",
      "Because reviews should happen only during incidents.",
    ],
    answer: 0,
    explanation:
      "New services, identities, partners, data, or architecture changes can invalidate previous governance decisions.",
  },
  {
    question:
      "An exception expires tomorrow and the target state is not complete. What is the strongest next step?",
    choices: [
      "Ignore the expiration.",
      "Review the deviation, risk, compensating controls, and target state, then either close, explicitly renew with authority, or block the unsupported state.",
      "Delete the exception record.",
      "Assume permanent approval.",
    ],
    answer: 1,
    explanation:
      "Expired exceptions should trigger an explicit governance decision.",
  },
  {
    question:
      "Why is a service inventory useful for security governance?",
    choices: [
      "It can connect service purpose, owner, data, dependencies, lifecycle, and governance status.",
      "It only helps calculate cost.",
      "It replaces monitoring.",
      "It eliminates the need for standards.",
    ],
    answer: 0,
    explanation:
      "A security-aware service inventory helps prevent unowned and forgotten cloud resources.",
  },
];

const checklistItems = [
  "Every production cloud service has a current accountable owner.",
  "Service, control, evidence, and risk ownership are distinguished where appropriate.",
  "Policies have clear scope and accountable approval.",
  "Standards translate policy into practical expected cloud-security outcomes.",
  "Procedures describe repeatable review or operational activities.",
  "Guardrails align with approved standards and include an exception path.",
  "Exceptions include reason, owner, risk, compensating control, expiration, target state, and closure evidence.",
  "Risk acceptance is performed only by authorized decision-makers.",
  "Residual risk is documented rather than hidden inside a technical status.",
  "Service inventory includes purpose, environment, data, dependencies, owner, lifecycle, and governance state.",
  "Review cadence combines scheduled and event-driven triggers.",
  "Architecture changes reopen affected governance decisions.",
  "Ownership changes trigger transfer or reassignment.",
  "Expired exceptions do not silently remain active.",
  "Evidence is current enough to support the governance claim.",
  "Service retirement includes access, credential, monitoring, backup, data, and exception closure.",
  "No lesson activity requires access to real cloud governance systems, accounts, provider consoles, or private organizational records.",
];

const takeaways = [
  "Cloud governance connects organizational expectations to accountable technical decisions.",
  "Policies, standards, procedures, guardrails, exceptions, and risk acceptances serve different purposes.",
  "Every cloud service and control should have clear ownership.",
  "Evidence ownership may differ from service ownership.",
  "Exceptions should remain bounded, owned, and connected to a target state.",
  "Risk acceptance requires authorized decision rights and explicit residual-risk documentation.",
  "Service inventory is a security and lifecycle tool, not only an operations or billing record.",
  "Scheduled review should be combined with event-driven triggers such as architecture, ownership, provider, or policy changes.",
  "Unowned services and expired exceptions are governance risk even when the technology still works.",
  "The Cloud Governance Decision Register becomes the final supporting artifact before the A12.10 Cloud Architecture Review Lab.",
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
        Module A12
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

export default function CloudGovernanceConceptsPage() {
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
              A12.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Governance Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud governance is what keeps architecture decisions understandable
            after the original project ends. It connects policy, standards,
            service ownership, evidence, review, exceptions, residual risk, and
            lifecycle decisions across the cloud environment.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional service inventories, governance records,
            risk decisions, and synthetic evidence only.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A12: Cloud Security Architecture"
          lessonTitle="Cloud Governance Concepts"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.9 Entry Readiness"
          items={[
            "I understand cloud configuration assurance from A12.8.",
            "I can distinguish an architecture finding from a risk decision.",
            "I understand that exceptions require ownership and review.",
            "I will use only fictional governance and service records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Secure Cloud Service Can Become Ungovernable Even When It Still Works"
        >
          <p className="leading-8">
            Imagine a fictional cloud service that runs successfully for three
            years. Its original owner changes teams, its exception record
            expires, its recovery evidence becomes stale, and nobody updates the
            service inventory. The service may still be online, but the
            organization can no longer confidently explain who owns its risk,
            whether its controls remain current, or when it should be retired.
          </p>

          <p className="mt-4 leading-8">
            Governance keeps technical decisions connected to accountable
            people and current evidence.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Cloud governance makes security decisions durable beyond the original project team.
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
          eyebrow="Governance Layers"
          title="Policy, Standards, Procedures, Guardrails, Exceptions, and Risk Decisions"
        >
          <div className="grid gap-5">
            {governanceLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.layer}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Example
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Typical owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Ownership Model"
          title="Different Governance Responsibilities Need Different Owners"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {ownershipModels.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.responsibility}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Cadence"
          title="Governance Should React to Change, Not Only the Calendar"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewCadences.map((item) => (
              <article
                key={item.trigger}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.trigger}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.bestFor}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.caution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Governance Principles"
          title="Eight Principles for Sustainable Cloud Accountability"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governancePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Cloud Governance Terms"
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
          eyebrow="Fictional Governance Register"
          title="Eight Northbridge Governance Decisions"
        >
          <div className="grid gap-5">
            {governanceRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.item}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Owner", item.owner],
                    ["Standard", item.standard],
                    ["Evidence", item.evidence],
                    ["Review", item.review],
                    ["Exception", item.exception],
                    ["Residual risk", item.risk],
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

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Next action
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.nextAction}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud Governance Dashboard"
          subtitle="Fictional ownership, exception, risk, and review metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Unowned Credential Has No Valid Risk Acceptance"
          severity="High"
          time="09:32"
          source="Fictional Cloud Governance Review"
          details="GOV-04 shows a production legacy credential with Unknown ownership, overdue lifecycle evidence, and no authorized residual-risk acceptance."
          recommendation="Keep the item Blocked until business need, ownership, risk authority, remediation, and retirement or replacement are resolved."
        />

        <Section
          eyebrow="Service Inventory"
          title="Governance Starts With Knowing What Exists"
        >
          <p className="leading-8">
            A cloud service inventory becomes far more useful when it tracks
            purpose, owner, data, dependencies, environment, lifecycle, and
            governance status instead of only names and cost.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1200px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">ID</th>
                  <th className="border-b border-slate-700 p-4">Service</th>
                  <th className="border-b border-slate-700 p-4">Purpose</th>
                  <th className="border-b border-slate-700 p-4">Owner</th>
                  <th className="border-b border-slate-700 p-4">Environment</th>
                  <th className="border-b border-slate-700 p-4">Data</th>
                  <th className="border-b border-slate-700 p-4">Dependencies</th>
                  <th className="border-b border-slate-700 p-4">Lifecycle</th>
                  <th className="border-b border-slate-700 p-4">Governance</th>
                </tr>
              </thead>
              <tbody>
                {serviceInventory.map((item) => (
                  <tr key={item.id} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-mono text-sm font-black text-cyan-200">
                      {item.id}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-white">
                      {item.name}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.purpose}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm text-purple-100">
                      {item.owner}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm text-blue-100">
                      {item.environment}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm text-yellow-100">
                      {item.data}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.dependencies}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm text-emerald-100">
                      {item.lifecycle}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-cyan-100">
                      {item.governance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Residual Risk"
          title="Governance Includes Decisions About Risk That Remains"
        >
          <div className="grid gap-5">
            {riskDecisions.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.decision}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Risk
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Mitigation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.mitigation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Residual risk
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.residual}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Owner / review
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.owner} — {item.review}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cloud Governance Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Unowned Credential Risk"
          question="What is the strongest governance conclusion about GOV-04?"
          evidence={[
            "The production credential remains active.",
            "No current service owner is documented.",
            "Rotation is overdue.",
            "Revocation readiness is Unknown.",
            "No authorized risk acceptance exists.",
          ]}
          options={[
            "The risk is automatically accepted because the credential still works.",
            "The item should remain Blocked until ownership, business need, remediation, and an authorized risk decision are established.",
            "The cloud provider should be listed as the owner.",
            "The credential should be removed from the register.",
          ]}
          bestAnswer={1}
          explanation="A risk cannot be meaningfully accepted when ownership and decision authority are absent."
        />

        <Section
          eyebrow="Governance Anti-Patterns"
          title="Eight Ways Accountability Becomes Weak"
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

        <Section
          eyebrow="Lifecycle Governance"
          title="A Cloud Service Should Be Governed From Request to Retirement"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Request / intake",
                detail:
                  "Document purpose, owner, data, environment, business need, and expected service model.",
              },
              {
                title: "Design",
                detail:
                  "Apply standards for IAM, storage, networks, logging, secrets, recovery, and configuration assurance.",
              },
              {
                title: "Approval",
                detail:
                  "Resolve blocking findings, document exceptions, and assign risk decisions.",
              },
              {
                title: "Operation",
                detail:
                  "Maintain evidence, source health, access reviews, ownership, monitoring, backup, and change records.",
              },
              {
                title: "Change",
                detail:
                  "Reopen affected governance decisions when architecture, provider, identities, data, or dependencies change.",
              },
              {
                title: "Exception review",
                detail:
                  "Close, renew, or block deviations when review or expiration dates arrive.",
              },
              {
                title: "Risk review",
                detail:
                  "Reassess accepted residual risk when conditions, controls, or impact change.",
              },
              {
                title: "Retirement",
                detail:
                  "Remove access, identities, secrets, data, backups, monitoring, partner paths, exceptions, and service records as appropriate.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Risk Without an Owner"
          scenario="A long-lived production credential is still active, but no current owner, valid lifecycle evidence, or authorized risk acceptance exists."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Temporary Monitoring Exception"
          scenario="Automated source-health monitoring for one telemetry source is incomplete. A 14-day exception has an owner, manual compensating check, expiration, and target state."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Governance Decision Register"
        >
          <p className="leading-8">
            Use fictional services, standards, owners, exceptions, risk
            decisions, and evidence only. Do not use private organizational
            records or real cloud governance systems.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional governance records.",
              "Include service, IAM, storage, network, monitoring, secrets, recovery, configuration, partner, and data-governance items.",
              "Give each record a stable ID.",
              "State the governed item and type.",
              "Assign a service or control owner.",
              "Identify the applicable policy or standard.",
              "Record supporting evidence.",
              "Record scheduled and event-driven review triggers.",
              "Link exception IDs where applicable.",
              "Record residual risk.",
              "Assign risk owner when acceptance is possible.",
              "Record the governance decision.",
              "Record next action.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted, or Retired.",
              "Create at least three explicit risk-decision records.",
              "Create a service inventory with owner, purpose, environment, data, dependencies, lifecycle, and governance status.",
              "Identify at least two items with missing or weak ownership.",
              "Identify at least two expired or near-expiry review conditions.",
              "Define closure or escalation for each governance gap.",
              "Add change triggers for ownership, provider, data, architecture, policy, contract, incident, and retirement changes.",
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
              This is a fictional governance-design exercise. Do not use real
              company policies, private risk registers, internal cloud account
              details, production service identifiers, credentials, or private
              compliance records.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expiring Monitoring Exception"
          question="What is the strongest governance decision for GOV-03?"
          evidence={[
            "Automated telemetry freshness monitoring is incomplete.",
            "A daily manual source check is operating as a temporary compensating control.",
            "The exception has an accountable owner.",
            "The exception expires in 14 days.",
            "The target state is automated source-health monitoring.",
          ]}
          options={[
            "The exception makes the control fully Confirmed.",
            "The item can remain Conditional until the target state is validated; expiration should force closure, authorized renewal, or blocking.",
            "The exception should be permanent.",
            "The standard should be deleted.",
          ]}
          bestAnswer={1}
          explanation="A governed exception temporarily manages deviation; it does not erase the preferred standard or eliminate the need for closure."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Create Governance for a New Multi-Team Cloud Service"
        >
          <p className="leading-8">
            A fictional organization is launching a new analytics service owned
            by the Data Team but using shared identity, monitoring, network,
            storage, key, and recovery platforms. Design the governance model
            so responsibility remains clear across teams.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Service owner",
              "Platform owners",
              "Control owners",
              "Evidence owners",
              "Risk owner",
              "Applicable cloud standards",
              "IAM review trigger",
              "Storage/data-governance trigger",
              "Network and partner review trigger",
              "Monitoring ownership",
              "Secrets/key governance",
              "Recovery ownership",
              "Configuration assurance",
              "Exception process",
              "Residual-risk decision rights",
              "Retirement criteria",
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
            A strong design allows shared platform teams to own reusable
            controls while the service owner remains accountable for the
            business and architecture outcome.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.9 Mini Quiz: Cloud Governance Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Governance Decision Register"
          prompt="Create the ninth artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Governance Decision Register with at least twelve records. Include record ID, governed item, governance type, owner, applicable policy/standard, evidence, review cadence, event-driven triggers, exception reference, residual risk, risk owner, decision, status, next action, and closure or retirement condition."
          tips={[
            "Include technical and organizational governance records.",
            "Create at least three explicit risk-decision records.",
            "Include a service inventory with purpose, owner, data, dependencies, environment, lifecycle, and governance state.",
            "Keep unowned items Blocked instead of silently accepting risk.",
            "Show scheduled and event-driven review triggers.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.10?"
        >
          <p className="leading-8">
            A12.10 is the Cloud Architecture Review Lab. Before continuing, make
            sure you can combine technical architecture evidence with ownership,
            exceptions, residual risk, and governance decisions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish policy, standard, procedure, guardrail, exception, and risk acceptance.",
              "I can identify service, control, evidence, and risk owners.",
              "I can evaluate whether a risk decision has appropriate evidence and authority.",
              "I can explain why service inventory supports cloud security lifecycle.",
              "I can connect governance to IAM, storage, networks, monitoring, secrets, recovery, and configuration assurance.",
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
          title="How to Make the Governance Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Separate governance record types",
                detail:
                  "Make service, control, exception, and risk-decision records visually distinct.",
              },
              {
                title: "Show decision authority",
                detail:
                  "Identify who owns the service and who is authorized to accept residual risk.",
              },
              {
                title: "Show review triggers",
                detail:
                  "Include both recurring review dates and architecture-change triggers.",
              },
              {
                title: "Show current evidence",
                detail:
                  "Connect decisions to the A12 IAM, storage, network, monitoring, secrets, recovery, and configuration artifacts.",
              },
              {
                title: "Keep unowned items visible",
                detail:
                  "Do not convert missing ownership into Shared or Accepted status.",
              },
              {
                title: "Show exception lifecycle",
                detail:
                  "Every exception should have expiration, target state, and closure evidence.",
              },
              {
                title: "Show retirement",
                detail:
                  "Governance should explain how services, access, data, monitoring, backups, and credentials are closed when no longer needed.",
              },
              {
                title: "Prepare for A12.10",
                detail:
                  "Use stable IDs so the final architecture review can reference governance decisions directly.",
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
            Governance review does not require private organizational access
          </h2>
          <p className="mt-3 leading-7">
            Do not use real internal policies, confidential risk registers,
            private service inventories, account identifiers, credentials,
            production architecture details, or restricted compliance records.
            All governance examples in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.9 Cloud Governance Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a governance model for policy, standards, ownership,
            review cadence, exceptions, risk decisions, service inventory,
            lifecycle, and evidence. Next, A12.10 brings the full module
            together in the Cloud Architecture Review Lab.
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