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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/assets-threats-impact-and-likelihood`;

const objectives = [
  "Explain cybersecurity risk as uncertainty about how security events could affect business services, data, people, operations, trust, and organizational goals.",
  "Distinguish assets, business services, threat events, control conditions, impact, likelihood, inherent risk, residual risk, and risk treatment.",
  "Identify the difference between a risk owner, control owner, system owner, data owner, and evidence owner.",
  "Evaluate fictional cyber risks using business context, existing controls, evidence quality, uncertainty, and decision states rather than relying on dramatic scores alone.",
  "Build a Cyber Risk Context Map that becomes the first artifact in the A15 Risk Register and Leadership Recommendation.",
];

const riskConcepts = [
  {
    concept: "Business service",
    meaning:
      "A capability the organization depends on, such as student support, scheduling, payroll, learning systems, communications, or recovery.",
    question:
      "What important outcome could be disrupted or harmed?",
  },
  {
    concept: "Asset",
    meaning:
      "Something valuable to the organization, such as data, applications, identities, infrastructure, reputation, people, or supplier relationships.",
    question:
      "What are we trying to protect?",
  },
  {
    concept: "Threat event",
    meaning:
      "A harmful event or condition that could affect a business service or asset.",
    question:
      "What could happen?",
  },
  {
    concept: "Exposure condition",
    meaning:
      "A weakness, dependency, gap, or circumstance that makes the harmful event more plausible or impactful.",
    question:
      "Why could this matter here?",
  },
  {
    concept: "Impact",
    meaning:
      "The business consequence if the scenario occurs, including confidentiality, integrity, availability, financial, legal, safety, operational, or reputational effects.",
    question:
      "What would the organization lose or struggle to do?",
  },
  {
    concept: "Likelihood",
    meaning:
      "A reasoned estimate of how plausible the scenario is within a defined period or context.",
    question:
      "How plausible is this under current conditions and evidence?",
  },
  {
    concept: "Control",
    meaning:
      "A safeguard that reduces likelihood, impact, detection time, recovery time, or another part of the risk.",
    question:
      "What already reduces the risk?",
  },
  {
    concept: "Residual risk",
    meaning:
      "The risk that remains after existing or planned controls are considered.",
    question:
      "What uncertainty or consequence still remains?",
  },
];

const riskTypes = [
  {
    type: "Confidentiality risk",
    example:
      "Sensitive student-support information could be viewed by identities that should not have access.",
    businessEffect:
      "Privacy harm, legal exposure, loss of trust, incident-response cost.",
  },
  {
    type: "Integrity risk",
    example:
      "A critical release artifact or business record could be changed without reliable detection.",
    businessEffect:
      "Incorrect decisions, unsafe software release, operational disruption, investigation cost.",
  },
  {
    type: "Availability risk",
    example:
      "A critical service or supplier could become unavailable during an important business period.",
    businessEffect:
      "Lost productivity, missed deadlines, service interruption, recovery cost.",
  },
  {
    type: "Identity and access risk",
    example:
      "A user or workload may have broader permissions than required for its role.",
    businessEffect:
      "Unauthorized actions, larger blast radius, difficult accountability.",
  },
  {
    type: "Third-party risk",
    example:
      "A key business service depends on a vendor whose failure or control weakness could affect the organization.",
    businessEffect:
      "Operational dependency, data exposure, concentration risk, delayed recovery.",
  },
  {
    type: "Compliance / governance risk",
    example:
      "A required control, exception, owner, or evidence process is missing or stale.",
    businessEffect:
      "Audit findings, unowned residual risk, policy violations, leadership uncertainty.",
  },
];

const inherentVsResidual = [
  {
    state: "Inherent risk",
    explanation:
      "The level of risk before considering the effect of existing controls.",
    example:
      "A public student-services portal processes sensitive data and is essential to a major business workflow.",
    value:
      "Helps show how serious the underlying business scenario could be without safeguards.",
  },
  {
    state: "Current control environment",
    explanation:
      "The set of safeguards already operating today.",
    example:
      "Strong authentication, workload identity, database encryption, monitoring, backups, incident response.",
    value:
      "Shows how the organization currently reduces likelihood, impact, or recovery time.",
  },
  {
    state: "Residual risk",
    explanation:
      "The risk remaining after existing controls are considered.",
    example:
      "The portal remains important and exposed to operational failure even though controls are strong.",
    value:
      "This is the risk leaders usually decide whether to monitor, treat further, accept, transfer, or avoid.",
  },
];

const owners = [
  {
    role: "Risk owner",
    responsibility:
      "Owns the business decision about the risk and whether the residual risk is acceptable.",
    example:
      "Student Services Product Owner",
  },
  {
    role: "Control owner",
    responsibility:
      "Operates or maintains a security control and is accountable for its effectiveness.",
    example:
      "Platform Security for authentication controls",
  },
  {
    role: "System owner",
    responsibility:
      "Owns the application or technology service and coordinates architecture, operation, and remediation.",
    example:
      "Student Services Application Owner",
  },
  {
    role: "Data owner",
    responsibility:
      "Defines data sensitivity, business use, retention, and acceptable disclosure.",
    example:
      "Student Services Data Steward",
  },
  {
    role: "Evidence owner",
    responsibility:
      "Maintains the records needed to show whether a control or risk conclusion remains supported.",
    example:
      "Security Operations for monitoring evidence",
  },
  {
    role: "Remediation owner",
    responsibility:
      "Executes a specific treatment action and provides closure evidence.",
    example:
      "Infrastructure Team for retiring a legacy dependency",
  },
];

const treatmentOptions = [
  {
    treatment: "Mitigate / Treat",
    meaning:
      "Reduce the risk using new or improved controls.",
    example:
      "Reduce broad permissions, improve monitoring, modernize legacy trust, or test recovery more frequently.",
  },
  {
    treatment: "Avoid",
    meaning:
      "Stop or redesign the activity that creates the risk.",
    example:
      "Do not launch a risky data-sharing workflow until the architecture can meet required safeguards.",
  },
  {
    treatment: "Transfer / Share",
    meaning:
      "Shift some financial or operational consequence through contracts, insurance, service agreements, or another party.",
    example:
      "Use contractual obligations and service commitments with a critical provider while retaining accountability for remaining risk.",
  },
  {
    treatment: "Accept",
    meaning:
      "Formally acknowledge the residual risk and continue under an authorized decision.",
    example:
      "A risk owner accepts a low residual risk for a defined period with monitoring.",
  },
  {
    treatment: "Monitor",
    meaning:
      "Keep the current control state while watching for evidence or business changes that could alter the risk.",
    example:
      "A well-controlled service remains under routine review because it is business-critical.",
  },
];

const uncertaintySources = [
  {
    source: "Incomplete evidence",
    effect:
      "The reviewer cannot confidently tell whether the control or dependency is current.",
    response:
      "Mark the conclusion Conditional or Unknown instead of pretending certainty.",
  },
  {
    source: "Changing business context",
    effect:
      "A service becomes more critical, handles new data, or expands to more users.",
    response:
      "Reopen the risk decision because impact and scope may have changed.",
  },
  {
    source: "Changing threat conditions",
    effect:
      "The plausibility of a harmful event may increase or decrease over time.",
    response:
      "Refresh likelihood reasoning with current, authorized evidence.",
  },
  {
    source: "Control drift",
    effect:
      "A control that worked previously becomes stale, misconfigured, unowned, or only partially effective.",
    response:
      "Use current control evidence rather than relying on the last review.",
  },
  {
    source: "Third-party dependency",
    effect:
      "Part of the risk depends on a supplier or partner that the organization does not fully control.",
    response:
      "Include supplier evidence, contracts, continuity, concentration, and exit considerations.",
  },
  {
    source: "Model uncertainty",
    effect:
      "Risk labels or scores simplify reality and may not perfectly predict future events.",
    response:
      "Use scores as decision aids, not as unquestionable facts.",
  },
];

const decisionStates = [
  {
    state: "Monitor",
    meaning:
      "Controls and residual risk are acceptable under current evidence, but review should continue.",
  },
  {
    state: "Treat",
    meaning:
      "The organization should reduce the risk through defined remediation or mitigation.",
  },
  {
    state: "Conditional",
    meaning:
      "The decision may continue only while a specific condition is actively managed.",
  },
  {
    state: "Accepted Risk",
    meaning:
      "An authorized risk owner has formally accepted the residual risk for a defined scope and time.",
  },
  {
    state: "Blocked",
    meaning:
      "The current risk or evidence gap is too significant for approval.",
  },
  {
    state: "Closed",
    meaning:
      "Evidence shows remediation or business change reduced the risk to the approved target state.",
  },
];

const principles = [
  {
    title: "Risk should describe a scenario",
    meaning:
      "A useful risk statement explains what could happen, what business service or asset is affected, and why the consequence matters.",
    review:
      "Can a leader understand the scenario without needing a technical dictionary?",
  },
  {
    title: "Impact and likelihood are different",
    meaning:
      "A rare event can still be severe, and a common event can have limited impact.",
    review:
      "Are both dimensions reasoned separately?",
  },
  {
    title: "Controls change risk, not business importance",
    meaning:
      "Strong controls can reduce likelihood or impact, but a critical service remains important to the organization.",
    review:
      "Does the analysis preserve the business consequence even when controls are strong?",
  },
  {
    title: "Uncertainty should stay visible",
    meaning:
      "Unknown evidence should not be converted into false confidence.",
    review:
      "Which assumptions could materially change the decision?",
  },
  {
    title: "Risk ownership is a business responsibility",
    meaning:
      "Security teams can analyze and recommend, but the accountable business risk owner makes the acceptance decision.",
    review:
      "Who has authority to accept the residual risk?",
  },
  {
    title: "Control ownership is different from risk ownership",
    meaning:
      "The team operating a safeguard is not automatically the team that owns the business consequence.",
    review:
      "Are these responsibilities clearly separated?",
  },
  {
    title: "Residual risk drives the final decision",
    meaning:
      "The question is not whether risk exists, but whether the remaining risk is acceptable and governed.",
    review:
      "What remains after current controls are considered?",
  },
  {
    title: "Risk decisions need review triggers",
    meaning:
      "A valid decision can become stale after ownership, architecture, data, provider, or control changes.",
    review:
      "What event automatically reopens the risk?",
  },
];

const vocabulary = [
  {
    term: "Risk",
    definition:
      "Uncertainty about how a harmful event could affect business objectives, services, assets, or stakeholders.",
  },
  {
    term: "Asset",
    definition:
      "Something valuable to the organization that may need protection.",
  },
  {
    term: "Threat event",
    definition:
      "A harmful event or condition that could affect an asset or business service.",
  },
  {
    term: "Impact",
    definition:
      "The consequence to the organization if the scenario occurs.",
  },
  {
    term: "Likelihood",
    definition:
      "A reasoned estimate of how plausible the scenario is under current conditions.",
  },
  {
    term: "Control",
    definition:
      "A safeguard that reduces risk by affecting likelihood, impact, detection, recovery, or another risk dimension.",
  },
  {
    term: "Inherent risk",
    definition:
      "Risk considered before the effect of existing controls.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk remaining after current controls are considered.",
  },
  {
    term: "Risk treatment",
    definition:
      "The chosen response to a risk, such as mitigation, avoidance, transfer, acceptance, or monitoring.",
  },
  {
    term: "Risk owner",
    definition:
      "The person or role accountable for the business decision about the risk.",
  },
  {
    term: "Control owner",
    definition:
      "The person or team accountable for operating and maintaining a security control.",
  },
  {
    term: "Risk appetite",
    definition:
      "The broad amount and type of risk an organization is willing to pursue or retain in support of its objectives.",
  },
  {
    term: "Risk tolerance",
    definition:
      "A more specific boundary for how much risk is acceptable in a particular context.",
  },
  {
    term: "Risk register",
    definition:
      "A structured record of risks, owners, evidence, controls, treatment, status, and review information.",
  },
];

const records = [
  {
    id: "CTX-01",
    service: "Student Services Portal",
    businessPurpose:
      "Provide student-support workflows and access to sensitive support records.",
    assets:
      "Student support data, portal availability, user identities, application trust",
    scenario:
      "A security or operational failure could expose sensitive records or interrupt support services.",
    impact:
      "High — privacy, service disruption, trust, and response cost",
    likelihood:
      "Medium under current exposure and control conditions",
    controls:
      "Strong authentication, workload identity, database encryption, monitoring, recovery",
    evidence:
      "Current architecture review + current access review + current restore evidence",
    riskOwner: "Student Services Product Owner",
    controlOwners:
      "Platform Security, Data Platform, Security Operations, Resilience Team",
    residualRisk:
      "Moderate due to business criticality and ongoing exposure despite strong controls",
    state: "Monitor",
    trigger:
      "Major identity change, new data class, outage, control degradation, or architecture redesign",
  },
  {
    id: "CTX-02",
    service: "Legacy Reporting Service",
    businessPurpose:
      "Provide access to historical reporting while modernization is underway.",
    assets:
      "Historical reports, legacy hosts, reporting availability, trust relationships",
    scenario:
      "Broad legacy trust, unowned key relationships, or weak transport could expose data or disrupt reporting.",
    impact:
      "High — sensitive data exposure, outage, difficult investigation, modernization delay",
    likelihood:
      "Medium-High because several control and ownership gaps remain",
    controls:
      "Restricted network scope, limited monitoring, time-bounded modernization exception",
    evidence:
      "Current exception + partial legacy inventory + current trust findings",
    riskOwner: "Reporting Product Owner",
    controlOwners:
      "Infrastructure Security, Reporting Platform Team",
    residualRisk:
      "High until obsolete trust, key ownership, and transport gaps are remediated",
    state: "Treat",
    trigger:
      "Exception expiry, new data onboarding, owner change, trust finding, incident, or migration milestone",
  },
  {
    id: "CTX-03",
    service: "Partner Scheduling Integration",
    businessPurpose:
      "Exchange scheduling data with an approved external partner.",
    assets:
      "Scheduling data, integration availability, partner trust, service identity",
    scenario:
      "Certificate lifecycle failure or partner trust breakdown could interrupt service or weaken identity assurance.",
    impact:
      "Medium-High — scheduling disruption and partner-service impact",
    likelihood:
      "Medium because renewal is approaching but controls are active",
    controls:
      "Partner sponsor, protected transport, certificate monitoring, renewal workflow",
    evidence:
      "Current certificate + current sponsor + active renewal ticket",
    riskOwner: "Integration Owner",
    controlOwners:
      "Integration Platform, Platform Security",
    residualRisk:
      "Moderate until renewal closes",
    state: "Conditional",
    trigger:
      "Certificate renewal, partner ownership change, integration redesign, provider change",
  },
  {
    id: "CTX-04",
    service: "Recovery Backup Repository",
    businessPurpose:
      "Restore critical systems and data after major service disruption.",
    assets:
      "Backup sets, recovery keys, recovery procedures, business continuity",
    scenario:
      "Recovery could fail if current backups, retained key versions, or recovery procedures are not usable when needed.",
    impact:
      "High — prolonged outage, data loss, delayed business recovery",
    likelihood:
      "Low-Medium when recovery testing is current",
    controls:
      "Encrypted backup storage, protected replication, restricted recovery access, restore testing",
    evidence:
      "Backup inventory + recovery-key register + latest restore test",
    riskOwner: "Resilience Leader",
    controlOwners:
      "Resilience Team, Data Platform",
    residualRisk:
      "Moderate because recovery can never be guaranteed with absolute certainty",
    state: "Monitor",
    trigger:
      "Restore-test failure, key rotation, provider change, backup-policy change",
  },
  {
    id: "CTX-05",
    service: "Critical SaaS Provider",
    businessPurpose:
      "Support an important business workflow through an external cloud service.",
    assets:
      "Business workflow, supplier relationship, availability, organization data",
    scenario:
      "Provider outage, control weakness, or business failure could interrupt the dependent service.",
    impact:
      "High — business interruption and potential data/control impact",
    likelihood:
      "Medium based on dependency and external control",
    controls:
      "Supplier assessment, contract terms, continuity plan, service monitoring",
    evidence:
      "Current supplier review + business continuity plan + contract evidence",
    riskOwner: "Business Service Owner",
    controlOwners:
      "Vendor Management, Service Owner",
    residualRisk:
      "Moderate-High because concentration on one supplier remains",
    state: "Treat",
    trigger:
      "Supplier incident, contract renewal, major control finding, financial change, service expansion",
  },
  {
    id: "CTX-06",
    service: "Analytics Export Workflow",
    businessPurpose:
      "Create approved report packages for authorized recipients.",
    assets:
      "Sensitive analytics data, recipient trust, export approval, temporary storage",
    scenario:
      "An export could be sent without proper business authorization or remain in temporary storage too long.",
    impact:
      "High — sensitive data disclosure and governance failure",
    likelihood:
      "Low-Medium under current controls",
    controls:
      "Export approval, encrypted staging, protected transfer, signed manifest, short retention",
    evidence:
      "Current export-control review + current recipient trust + retention evidence",
    riskOwner: "Analytics Product Owner",
    controlOwners:
      "Analytics Platform, Data Governance",
    residualRisk:
      "Low-Moderate when approval and retention controls operate correctly",
    state: "Monitor",
    trigger:
      "New data class, new recipient, retention change, export-process redesign",
  },
];

const dashboardMetrics = [
  {
    label: "Risk contexts reviewed",
    value: "6",
    note: "Portal, legacy reporting, partner, recovery, SaaS, and analytics export",
  },
  {
    label: "Treat",
    value: "2",
    note: "Legacy reporting and supplier concentration need further risk reduction",
  },
  {
    label: "Conditional",
    value: "1",
    note: "Partner integration remains time-bounded around certificate renewal",
  },
  {
    label: "Monitor",
    value: "3",
    note: "Portal, recovery, and analytics risks remain governed under current evidence",
  },
];

const logs = [
  "[08:12] CTX-01 service=STUDENT_PORTAL impact=HIGH likelihood=MEDIUM state=MONITOR",
  "[08:36] CTX-02 service=LEGACY_REPORTING impact=HIGH likelihood=MEDIUM_HIGH state=TREAT",
  "[09:00] CTX-03 service=PARTNER_SCHEDULING cert_renewal=OPEN state=CONDITIONAL",
  "[09:24] CTX-04 service=RECOVERY_BACKUP restore_evidence=CURRENT state=MONITOR",
  "[09:48] CTX-05 service=CRITICAL_SAAS concentration=SINGLE_PROVIDER state=TREAT",
  "[10:12] CTX-06 service=ANALYTICS_EXPORT auth=CURRENT retention=CURRENT state=MONITOR",
];

const antiPatterns = [
  {
    title: "Risk statement is only a vulnerability label",
    problem:
      "A note like 'legacy server' does not explain the business consequence or decision.",
    better:
      "Describe the harmful event, affected service or asset, consequence, and relevant control condition.",
  },
  {
    title: "Security team owns every risk",
    problem:
      "Technical teams may analyze the issue but lack authority to accept the business consequence.",
    better:
      "Assign a business risk owner and separate control ownership.",
  },
  {
    title: "Impact is reduced because controls are strong",
    problem:
      "Controls can reduce likelihood or consequences, but the service can still be business-critical.",
    better:
      "Preserve business impact reasoning and evaluate residual risk separately.",
  },
  {
    title: "Likelihood is treated as certainty",
    problem:
      "A simple label or score is treated like a prediction.",
    better:
      "Record uncertainty, evidence quality, assumptions, and review triggers.",
  },
  {
    title: "Unknown evidence becomes low risk",
    problem:
      "Missing evidence is interpreted as proof that nothing is wrong.",
    better:
      "Use Unknown or Conditional until evidence supports the decision.",
  },
  {
    title: "Accepted Risk means ignored risk",
    problem:
      "A risk is left open with no owner, expiry, or review.",
    better:
      "Accepted Risk should be explicit, authorized, scoped, and reviewed.",
  },
  {
    title: "Risk score replaces explanation",
    problem:
      "Leaders receive a number without understanding the scenario, controls, or consequence.",
    better:
      "Use scores only as summaries supported by narrative evidence.",
  },
  {
    title: "No trigger to reopen the decision",
    problem:
      "A risk remains unchanged in the register after the service, data, owner, or controls change.",
    better:
      "Add event-driven review triggers to every material risk.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the legacy reporting risk in Treat because high-impact control and ownership gaps remain despite a temporary exception.",
    outcome:
      "Best. A valid exception may govern continued operation, but it does not make the underlying risk disappear.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the risk Closed because the exception is approved.",
    outcome:
      "Risky. An exception changes governance status, not the technical reality of the risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete the risk from the register until modernization finishes.",
    outcome:
      "Risky. Removing visibility makes ownership and treatment harder to manage.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the critical SaaS risk in Treat and reduce concentration risk through continuity, exit planning, and alternate operating options.",
    outcome:
      "Best. Strong contracts help, but they do not eliminate dependency on one provider.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the risk Closed because the provider has a contract.",
    outcome:
      "Risky. A contract can transfer or shape some consequences but does not remove operational dependency.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Assume all supplier risk belongs entirely to the provider.",
    outcome:
      "Risky. The organization still owns the business consequences of supplier failure.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest definition of cybersecurity risk?",
    choices: [
      "Uncertainty about how security events could affect business objectives, services, assets, or stakeholders.",
      "A list of vulnerabilities only.",
      "Any technical issue with a high score.",
      "A guarantee that an incident will happen.",
    ],
    answer: 0,
    explanation:
      "Risk combines uncertainty, business consequence, context, and the conditions that shape the scenario.",
  },
  {
    question:
      "What is inherent risk?",
    choices: [
      "Risk considered before the effect of existing controls.",
      "Risk after all controls are considered.",
      "A formally accepted exception.",
      "A risk that has been closed.",
    ],
    answer: 0,
    explanation:
      "Inherent risk represents the underlying scenario before current safeguards reduce it.",
  },
  {
    question:
      "What is residual risk?",
    choices: [
      "Risk remaining after existing controls are considered.",
      "The same thing as inherent risk.",
      "A control owner.",
      "A risk with no business impact.",
    ],
    answer: 0,
    explanation:
      "Residual risk is what remains after the effect of safeguards is considered.",
  },
  {
    question:
      "Who should normally own the business decision about accepting residual risk?",
    choices: [
      "The authorized risk owner.",
      "Any security analyst.",
      "The evidence owner only.",
      "The control owner automatically.",
    ],
    answer: 0,
    explanation:
      "Security teams analyze and recommend, while the accountable business risk owner accepts or rejects residual risk.",
  },
  {
    question:
      "Why should uncertainty remain visible in a risk analysis?",
    choices: [
      "Because risk labels and evidence are imperfect and may change with business or threat conditions.",
      "Because uncertainty makes controls unnecessary.",
      "Because likelihood should never be estimated.",
      "Because all risks are identical.",
    ],
    answer: 0,
    explanation:
      "Good risk analysis records assumptions and uncertainty instead of pretending complete certainty.",
  },
  {
    question:
      "Which treatment reduces risk by improving controls?",
    choices: [
      "Mitigate / Treat.",
      "Ignore.",
      "Delete the risk record.",
      "Not Applicable.",
    ],
    answer: 0,
    explanation:
      "Mitigation or treatment reduces risk by changing the control environment or business design.",
  },
  {
    question:
      "Which statement about risk scores is strongest?",
    choices: [
      "Scores can summarize reasoning, but they should not replace the scenario, evidence, uncertainty, and ownership.",
      "A score perfectly predicts future events.",
      "A high score automatically identifies the correct treatment.",
      "A low score means evidence is unnecessary.",
    ],
    answer: 0,
    explanation:
      "Risk scores are decision aids. The underlying reasoning remains essential.",
  },
];

const checklistItems = [
  "The risk statement names a business service or asset.",
  "The harmful event or condition is clear.",
  "Business impact is explained.",
  "Likelihood reasoning is separated from impact.",
  "Current controls are listed.",
  "Evidence supporting the controls is current.",
  "Uncertainty and assumptions remain visible.",
  "Inherent risk and residual risk are not confused.",
  "Risk owner is named.",
  "Control owners are named separately.",
  "System/data/evidence owners are identified where useful.",
  "Treatment is explicit.",
  "Accepted Risk is used only with authorized ownership.",
  "Conditional decisions have clear conditions.",
  "Blocked decisions explain what prevents approval.",
  "Review cadence is documented.",
  "Event-driven review triggers are documented.",
  "Supplier dependencies are included where relevant.",
  "Legacy dependencies stay visible until closed.",
  "No risk assessment depends on offensive testing, unauthorized scanning, or access to real private systems.",
];

const takeaways = [
  "Cybersecurity risk is a business decision under uncertainty.",
  "Useful risk statements connect a harmful event to an asset or business service and consequence.",
  "Impact and likelihood should be reasoned separately.",
  "Inherent risk describes the scenario before controls; residual risk describes what remains after controls.",
  "Risk owners and control owners have different responsibilities.",
  "Strong controls do not erase business importance.",
  "Unknown evidence should reduce confidence rather than become assumed safety.",
  "Treatment options include mitigation, avoidance, transfer/share, acceptance, and monitoring.",
  "Risk scores summarize reasoning but should not replace evidence and explanation.",
  "The Cyber Risk Context Map prepares you for A15.2 Assets, Threats, Impact, and Likelihood.",
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
        A15 Module Home
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

export default function RiskManagementInCybersecurityPage() {
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
              A15.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk Management in Cybersecurity
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security professionals do not simply label systems as safe or
            unsafe. They help organizations understand uncertainty, business
            consequences, existing safeguards, residual risk, and the decision
            that an accountable owner needs to make.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional business services, synthetic risk
            records, and safe evidence only. It does not require testing,
            scanning, exploiting, or accessing real systems.
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
          lessonTitle="Risk Management in Cybersecurity"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.1 Entry Readiness"
          items={[
            "I can explain why cybersecurity decisions affect business services and people.",
            "I understand that controls reduce risk but do not eliminate all uncertainty.",
            "I can separate technical evidence from business decisions.",
            "I will use only fictional systems, risks, owners, controls, and evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Security Teams Help Leaders Decide What to Do About Uncertainty"
        >
          <p className="leading-8">
            Imagine a critical student-support portal with excellent security
            controls. The portal can still fail, a supplier can still have an
            outage, evidence can become stale, or a new business dependency can
            change the risk. Risk management gives leaders a disciplined way to
            decide what deserves more control, what can be monitored, and what
            residual risk is acceptable.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Risk is not just a technical weakness. It is uncertainty about how security conditions could affect business objectives.
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
          eyebrow="Core Concepts"
          title="Eight Pieces of a Useful Cyber Risk Scenario"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskConcepts.map((item) => (
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
                  Ask: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Risk Categories"
          title="Different Business Consequences Need Different Reasoning"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Business effect: {item.businessEffect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Risk Before and After Controls"
          title="Inherent Risk, Controls, and Residual Risk"
        >
          <div className="grid gap-5">
            {inherentVsResidual.map((item, index) => (
              <article
                key={item.state}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-emerald-50">
                      {item.state}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      {item.explanation}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-blue-100">
                      Example: {item.example}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white">
                      Why it matters: {item.value}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Ownership"
          title="The Person Who Operates a Control Is Not Automatically the Risk Owner"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {owners.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.responsibility}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Risk Treatment"
          title="A Risk Decision Should Lead to an Action"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {treatmentOptions.map((item) => (
              <article
                key={item.treatment}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.treatment}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
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
          eyebrow="Uncertainty"
          title="Risk Analysis Should Admit What It Does Not Know"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {uncertaintySources.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.source}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Effect: {item.effect}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Response: {item.response}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision States"
          title="Use Risk States That Tell People What to Do"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Defensible Risk Analysis"
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
          title="Risk Management Terms"
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
          eyebrow="Fictional Risk Context Register"
          title="Six Northbridge Risk Contexts"
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
                  {item.service}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Business purpose", item.businessPurpose],
                    ["Assets", item.assets],
                    ["Risk scenario", item.scenario],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Existing controls", item.controls],
                    ["Evidence", item.evidence],
                    ["Risk owner", item.riskOwner],
                    ["Control owners", item.controlOwners],
                    ["Residual risk", item.residualRisk],
                    ["Review trigger", item.trigger],
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
          title="Northbridge Cyber Risk Context Dashboard"
          subtitle="Fictional business risk contexts across services, suppliers, recovery, and data workflows"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Reporting Risk Requires Active Treatment"
          severity="High"
          time="08:36"
          source="Fictional Risk Review"
          details="CTX-02 combines high business impact with broad legacy trust, incomplete ownership, and modernization work that is still open. A temporary exception supports continued operation but does not remove the underlying residual risk."
          recommendation="Keep the risk in Treat, maintain the risk owner and exception scope, and require evidence-backed closure of legacy trust, ownership, and transport gaps."
        />

        <Section
          eyebrow="Risk Score vs. Risk Story"
          title="A Number Is Useful Only When the Reasoning Behind It Is Visible"
        >
          <p className="leading-8">
            Organizations sometimes use simple risk matrices or numeric scores.
            Those tools can help compare many risks, but the score should never
            become more important than the scenario, evidence, business impact,
            control state, uncertainty, and ownership behind it.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">
                Weak risk communication
              </h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                “Risk score: 16/25. High.”
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">
                Stronger risk communication
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                “The legacy reporting service has high business impact and
                several open trust and ownership gaps. Current compensating
                controls reduce exposure but residual risk remains high, so
                modernization treatment stays active.”
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Risk Context Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting"
          question="What is the strongest current decision for CTX-02?"
          evidence={[
            "The service supports historical reporting that the business still uses.",
            "Broad legacy trust and ownership gaps remain.",
            "A time-bounded modernization exception is current.",
            "Restricted network scope and partial monitoring reduce some exposure.",
            "Modernization and technical remediation are still open.",
          ]}
          options={[
            "Treat — keep remediation active while the exception governs continued operation.",
            "Closed — the exception means the risk no longer exists.",
            "Monitor only — no further treatment is needed.",
            "Not Applicable — legacy systems are outside risk management.",
          ]}
          bestAnswer={0}
          explanation="A valid exception can govern continued operation, but unresolved high-impact control gaps still require treatment."
        />

        <Section
          eyebrow="Common Risk Management Mistakes"
          title="Eight Ways Risk Analysis Becomes Weak"
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
          title="Scenario Decision Lab 1 — Exception Does Not Equal Closure"
          scenario="A legacy reporting service has a current risk exception and compensating controls, but broad trust and ownership gaps are still unresolved."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Critical Supplier Concentration"
          scenario="A critical business workflow depends heavily on one SaaS provider. The supplier has a strong contract and recent security review, but there is no practical alternate provider today."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cyber Risk Context Map"
        >
          <p className="leading-8">
            Use fictional services, assets, threat events, owners, controls,
            evidence, and decisions only. The goal is to understand business
            context before building a detailed risk register in later lessons.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional business-service risk contexts.",
              "Give every context a stable CTX ID.",
              "Record the business service or workflow.",
              "Record the business purpose.",
              "List important assets or data.",
              "Write one clear risk scenario.",
              "Describe business impact.",
              "Describe likelihood with reasoning.",
              "Record current controls.",
              "Record current evidence.",
              "Record evidence freshness.",
              "Assign a risk owner.",
              "Assign control owners separately.",
              "Record current residual risk.",
              "Choose Monitor, Treat, Conditional, Accepted Risk, Blocked, or Closed.",
              "Record assumptions and uncertainty.",
              "Record review cadence.",
              "Record event-driven review triggers.",
              "Include at least three data-confidentiality risks.",
              "Include at least three availability/recovery risks.",
              "Include at least two identity/access risks.",
              "Include at least two third-party risks.",
              "Include at least two governance/compliance risks.",
              "Include at least one legacy risk with incomplete evidence.",
              "Include at least one low residual risk that remains monitored because the service is critical.",
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
              Do not scan, probe, test, exploit, or investigate real systems,
              suppliers, or people. Do not collect credentials, private
              documents, or confidential risk records. Use fictional evidence
              only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Critical SaaS Dependency"
          question="What is the strongest interpretation of CTX-05?"
          evidence={[
            "The SaaS provider supports a critical business workflow.",
            "The provider has current security evidence and a strong contract.",
            "The organization has a continuity plan.",
            "There is no practical alternate provider today.",
            "A major provider outage would still have high business impact.",
          ]}
          options={[
            "Treat — reduce concentration and continuity risk even though supplier evidence is strong.",
            "Closed — contracts eliminate supplier risk.",
            "Accepted Risk automatically — the provider owns all consequences.",
            "Not Applicable — third-party systems are outside cybersecurity risk.",
          ]}
          bestAnswer={0}
          explanation="Supplier controls and contracts reduce risk, but the organization still owns the business consequence of dependency on one provider."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Fictional Enterprise Risk Governance Model"
        >
          <p className="leading-8">
            A fictional organization has technical security teams, business
            service owners, auditors, and suppliers, but nobody agrees on who
            owns cyber risk decisions. Design a governance model that makes
            ownership and decision boundaries clear.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Business-service ownership",
              "Risk ownership",
              "Control ownership",
              "System ownership",
              "Data ownership",
              "Evidence ownership",
              "Residual-risk decisions",
              "Risk treatment workflow",
              "Accepted Risk authority",
              "Exception governance",
              "Supplier-risk ownership",
              "Review cadence",
              "Change triggers",
              "Escalation path",
              "Leadership reporting",
              "Closure evidence",
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
            The strongest design should make it clear who analyzes risk, who
            operates controls, who accepts residual risk, who maintains
            evidence, and what events automatically reopen a decision.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.1 Mini Quiz: Risk Management in Cybersecurity"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cyber Risk Context Map"
          prompt="Create the first artifact for your A15 Risk Register and Leadership Recommendation: a fictional Cyber Risk Context Map with at least fifteen records. Include CTX ID, business service, business purpose, assets/data, risk scenario, impact, likelihood reasoning, current controls, evidence, freshness, risk owner, control owners, residual risk, decision state, uncertainty, review cadence, next action, and change trigger."
          tips={[
            "Write risk scenarios in business language.",
            "Separate impact from likelihood.",
            "Separate risk ownership from control ownership.",
            "Keep uncertainty visible.",
            "Use scores only as optional summaries.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.2?"
        >
          <p className="leading-8">
            A15.2 goes deeper into Assets, Threats, Impact, and Likelihood.
            Before continuing, make sure you can describe a risk scenario
            without jumping immediately to a score.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can define risk in business terms.",
              "I can distinguish inherent and residual risk.",
              "I can separate impact and likelihood.",
              "I can distinguish risk owner and control owner.",
              "I can choose a treatment and explain why the risk decision should be reviewed again later.",
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
          title="How to Make the Cyber Risk Context Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with business context",
                detail:
                  "Start with the service, objective, data, and stakeholders before describing the threat scenario.",
              },
              {
                title: "Write a clear scenario",
                detail:
                  "Explain what could happen and why it matters instead of listing a technology weakness alone.",
              },
              {
                title: "Separate impact and likelihood",
                detail:
                  "Show consequence and plausibility as different parts of the analysis.",
              },
              {
                title: "Show controls and evidence",
                detail:
                  "Record what reduces risk and what current evidence supports that conclusion.",
              },
              {
                title: "Show ownership",
                detail:
                  "Risk owner, control owner, and remediation owner should not be treated as interchangeable.",
              },
              {
                title: "Show uncertainty",
                detail:
                  "Mark incomplete evidence, assumptions, or changing dependencies directly.",
              },
              {
                title: "Show review triggers",
                detail:
                  "Owner, architecture, data, supplier, control, incident, or evidence changes should reopen material risks.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.2 will deepen your analysis of assets, threat events, impact, likelihood, and uncertainty.",
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
            Risk analysis does not require unsafe system testing
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, exploit, or test real systems, organizations,
            suppliers, or accounts. Do not collect private credentials or
            confidential risk documents. All systems, risks, owners, controls,
            dashboards, and evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.1 Risk Management in Cybersecurity Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a business-centered model for cybersecurity risk,
            ownership, controls, uncertainty, residual risk, treatment, and
            decision states. Next, A15.2 focuses on Assets, Threats, Impact, and
            Likelihood.
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