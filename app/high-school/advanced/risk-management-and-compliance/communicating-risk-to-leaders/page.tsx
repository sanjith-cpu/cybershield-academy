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
const previousLesson = `${modulePath}/third-party-risk-concepts`;
const nextLesson = `${modulePath}/risk-decision-lab`;

const objectives = [
  "Translate technical cybersecurity risk into concise business language that explains the affected service, likely consequence, uncertainty, and decision needed.",
  "Distinguish raw technical detail from executive-level risk communication while preserving enough evidence and context to support the recommendation.",
  "Compare treatment options using residual risk, cost, effort, timing, dependencies, business impact, and ownership.",
  "Build leadership-ready recommendations that state what should happen, who owns it, when it should happen, what remains uncertain, and what would change the decision.",
  "Create a Leadership Risk Brief that becomes the ninth artifact in the A15 Risk Register and Leadership Recommendation.",
];

const leaderQuestions = [
  {
    question: "What business outcome is at risk?",
    why:
      "Leaders need to understand the affected service, customers, employees, data, revenue, trust, or operation before technical detail.",
    strong:
      "A payroll outage during processing could delay employee payments and create operational and reputational impact.",
    weak:
      "The vendor has a security risk.",
  },
  {
    question: "How serious is the consequence?",
    why:
      "Impact helps leaders understand urgency and business significance.",
    strong:
      "High — critical payroll operations could be interrupted for multiple business days.",
    weak:
      "High because the score is red.",
  },
  {
    question: "How plausible is the scenario?",
    why:
      "Likelihood and uncertainty help distinguish severe-but-rare risks from frequent-but-limited ones.",
    strong:
      "Medium — supplier controls are strong, but no practical alternate provider exists.",
    weak:
      "It might happen.",
  },
  {
    question: "What already reduces the risk?",
    why:
      "Leaders need to know whether the organization is starting from zero or already has meaningful safeguards.",
    strong:
      "Current supplier monitoring, continuity procedures, contract commitments, and emergency operating steps reduce some exposure.",
    weak:
      "Security has controls.",
  },
  {
    question: "What remains after current controls?",
    why:
      "Residual risk is the part leadership must decide how to handle.",
    strong:
      "Moderate-High concentration risk remains because the service has no practical substitute.",
    weak:
      "Some risk remains.",
  },
  {
    question: "What decision is needed now?",
    why:
      "A risk brief should end in a decision, not just a description.",
    strong:
      "Approve a six-month continuity-improvement plan and require a tested emergency payroll process before contract renewal.",
    weak:
      "Please review.",
  },
];

const translationPairs = [
  {
    technical:
      "Several privileged service accounts retain broad access after role changes.",
    leadership:
      "Former role privileges remain active for several production identities, increasing the chance that a single account could affect more systems than intended.",
  },
  {
    technical:
      "Restore testing is incomplete across the latest backup set.",
    leadership:
      "The organization cannot yet prove that all critical services can be restored within expected recovery time after a major disruption.",
  },
  {
    technical:
      "The supplier's independent assurance is current, but concentration remains high.",
    leadership:
      "The provider appears well controlled, but multiple critical services depend on the same external platform, so one provider outage could affect several operations at once.",
  },
  {
    technical:
      "The exception expires in 21 days and remediation milestones are incomplete.",
    leadership:
      "The temporary approval will soon end, but the underlying control gap is still open. Leadership must either complete remediation, reapprove under updated evidence, or stop relying on the exception.",
  },
  {
    technical:
      "Evidence for workspace destruction is partial.",
    leadership:
      "Current records do not fully prove that temporary sensitive workspaces are being removed after project closure, so the retention risk remains uncertain.",
  },
  {
    technical:
      "Partner certificate renewal has entered the warning window.",
    leadership:
      "A required trust credential is approaching expiry. Renewal is in progress, but a delay could interrupt the partner scheduling service.",
  },
];

const executiveBriefSections = [
  {
    section: "Decision headline",
    purpose:
      "One sentence stating the recommended leadership action.",
    example:
      "Approve continuity treatment for the critical payroll supplier before contract renewal.",
  },
  {
    section: "Business context",
    purpose:
      "Explain what service, people, data, or business objective depends on the decision.",
    example:
      "Payroll processing is a critical employee service with no practical short-term replacement provider.",
  },
  {
    section: "Risk scenario",
    purpose:
      "Describe what could happen and why the consequence matters.",
    example:
      "A major supplier outage could delay payroll processing and require emergency manual procedures.",
  },
  {
    section: "Evidence and confidence",
    purpose:
      "Summarize what evidence supports the conclusion and where uncertainty remains.",
    example:
      "Supplier assurance and contract evidence are current; alternate-provider readiness remains weak.",
  },
  {
    section: "Current controls",
    purpose:
      "Show safeguards already reducing the risk.",
    example:
      "Supplier monitoring, continuity plan, contract commitments, emergency operating procedure.",
  },
  {
    section: "Treatment options",
    purpose:
      "Give leaders realistic choices rather than one unexplained answer.",
    example:
      "Improve continuity, formally accept residual concentration risk, reduce service dependency, or transition providers.",
  },
  {
    section: "Recommendation",
    purpose:
      "State the preferred action and why it is the strongest balance of risk and business need.",
    example:
      "Improve continuity now while maintaining the current supplier because immediate replacement would create more disruption.",
  },
  {
    section: "Owner and timeline",
    purpose:
      "Make accountability and urgency explicit.",
    example:
      "Finance Operations Owner; continuity validation due before contract renewal.",
  },
  {
    section: "Residual risk / trigger",
    purpose:
      "Explain what remains and what would reopen the decision.",
    example:
      "Moderate-High concentration remains; supplier incident or continuity-test failure triggers escalation.",
  },
];

const optionComparison = [
  {
    option: "Treat now",
    riskEffect:
      "Reduces residual risk through improved controls, architecture, continuity, or ownership.",
    businessEffect:
      "Requires budget, staff effort, project time, or operational change.",
    bestWhen:
      "Risk is above tolerance and treatment is practical.",
    caution:
      "Treatment should have milestones and measurable closure evidence.",
  },
  {
    option: "Accept temporarily",
    riskEffect:
      "Retains known residual risk under defined governance.",
    businessEffect:
      "Avoids immediate disruption or costly change.",
    bestWhen:
      "Residual risk is understood, evidence is current, and the approver has authority.",
    caution:
      "Acceptance needs scope, expiry/review, triggers, and ownership.",
  },
  {
    option: "Avoid / stop",
    riskEffect:
      "Removes or redesigns the activity creating the risk.",
    businessEffect:
      "May delay a project, remove a service, or change business capability.",
    bestWhen:
      "Risk is unacceptable and safer alternatives exist.",
    caution:
      "Business impact of avoidance should be explicit.",
  },
  {
    option: "Transfer / share",
    riskEffect:
      "Shifts some financial or operational consequence.",
    businessEffect:
      "May change contracts, insurance, service commitments, or cost.",
    bestWhen:
      "Some consequences can reasonably be allocated elsewhere.",
    caution:
      "The organization still owns remaining business impact.",
  },
  {
    option: "Monitor",
    riskEffect:
      "Keeps current controls and watches for change.",
    businessEffect:
      "Low immediate disruption.",
    bestWhen:
      "Residual risk is within tolerance and evidence remains strong.",
    caution:
      "Monitoring requires evidence, cadence, and change triggers.",
  },
];

const communicationLevels = [
  {
    audience: "Board / senior leadership",
    needs:
      "Business impact, major dependencies, risk posture, decisions, investment, accountability, trend.",
    avoid:
      "Low-level logs, configuration detail, technical jargon without business meaning.",
  },
  {
    audience: "Executive / business owner",
    needs:
      "Service impact, treatment choices, timeline, residual risk, ownership, exception decisions.",
    avoid:
      "Technical detail that does not affect the decision.",
  },
  {
    audience: "Risk / governance committee",
    needs:
      "Risk scenario, evidence quality, controls, treatment, tolerance, exceptions, escalation, closure.",
    avoid:
      "Unexplained severity labels.",
  },
  {
    audience: "Technical leadership",
    needs:
      "Architecture impact, control gaps, operational dependencies, remediation sequencing, evidence.",
    avoid:
      "Overly simplified statements that hide implementation constraints.",
  },
  {
    audience: "Control owner / remediation team",
    needs:
      "Specific gap, expected outcome, scope, due date, test evidence, escalation, closure criteria.",
    avoid:
      "High-level summaries with no actionable detail.",
  },
];

const uncertaintyLanguage = [
  {
    phrase: "High confidence",
    meaning:
      "Current, relevant, direct, and sufficiently complete evidence supports the conclusion.",
    example:
      "High confidence: current restore testing covers all critical services in scope.",
  },
  {
    phrase: "Moderate confidence",
    meaning:
      "The conclusion is supported, but one or more bounded assumptions or limitations remain.",
    example:
      "Moderate confidence: supplier assurance is current, but fourth-party visibility is limited.",
  },
  {
    phrase: "Low confidence",
    meaning:
      "Evidence is stale, partial, missing, or contradictory.",
    example:
      "Low confidence: workspace cleanup evidence is incomplete across recently closed projects.",
  },
  {
    phrase: "Unknown",
    meaning:
      "The organization cannot currently make a reliable judgment.",
    example:
      "Unknown whether the expired legacy transfer workflow is still active.",
  },
];

const leadershipMetrics = [
  {
    metric: "Risks above tolerance",
    value:
      "Shows where current residual risk exceeds approved business boundaries.",
    usefulBecause:
      "Directs leadership attention toward decisions requiring treatment or acceptance authority.",
  },
  {
    metric: "Overdue treatment",
    value:
      "Shows risks whose committed milestones have slipped.",
    usefulBecause:
      "Highlights execution risk and accountability gaps.",
  },
  {
    metric: "Unowned risks",
    value:
      "Shows records without a current accountable business owner.",
    usefulBecause:
      "A risk without ownership is difficult to govern or close.",
  },
  {
    metric: "Expired exceptions",
    value:
      "Shows temporary approvals that are no longer valid.",
    usefulBecause:
      "Indicates immediate governance attention is needed.",
  },
  {
    metric: "Control effectiveness trend",
    value:
      "Shows whether major controls are improving, stable, or degrading.",
    usefulBecause:
      "Connects investment to actual risk reduction.",
  },
  {
    metric: "Supplier concentration",
    value:
      "Shows dependence on external providers across critical services.",
    usefulBecause:
      "Makes systemic business dependency visible.",
  },
  {
    metric: "Evidence confidence",
    value:
      "Shows where conclusions rely on stale, partial, or contradictory evidence.",
    usefulBecause:
      "Helps leaders understand uncertainty, not just risk labels.",
  },
];

const principles = [
  {
    title: "Lead with the business consequence",
    meaning:
      "Start with the service, people, data, revenue, trust, or operation affected.",
    review:
      "Could a leader understand why the risk matters before hearing technical details?",
  },
  {
    title: "State the decision needed",
    meaning:
      "A leadership brief should make clear what action or approval is being requested.",
    review:
      "What exactly should leadership decide today?",
  },
  {
    title: "Preserve uncertainty",
    meaning:
      "Strong communication does not hide weak or incomplete evidence.",
    review:
      "What assumptions could materially change the recommendation?",
  },
  {
    title: "Compare realistic options",
    meaning:
      "Leaders need tradeoffs, not a single unexplained recommendation.",
    review:
      "What happens if we Treat, Accept, Avoid, Transfer, or Monitor?",
  },
  {
    title: "Separate urgency from emotion",
    meaning:
      "High urgency should come from impact, timing, exposure, or tolerance—not fear.",
    review:
      "What evidence makes this urgent now?",
  },
  {
    title: "Show accountability",
    meaning:
      "Every recommendation should name the owner, milestone, and expected outcome.",
    review:
      "Who is responsible for the next action?",
  },
  {
    title: "Keep residual risk visible",
    meaning:
      "Even after treatment, leadership should know what risk remains.",
    review:
      "What will still be true after the recommended action?",
  },
  {
    title: "Use metrics to support, not replace, judgment",
    meaning:
      "Dashboards summarize patterns but cannot explain every decision.",
    review:
      "Which narrative context must accompany the metric?",
  },
];

const vocabulary = [
  {
    term: "Executive risk brief",
    definition:
      "A concise leadership-facing summary of risk context, evidence, options, recommendation, ownership, and next action.",
  },
  {
    term: "Decision headline",
    definition:
      "A short statement of the action or approval being requested from leadership.",
  },
  {
    term: "Risk appetite",
    definition:
      "The broad amount and type of risk an organization is willing to pursue or retain in support of objectives.",
  },
  {
    term: "Risk tolerance",
    definition:
      "A more specific acceptable boundary for residual risk in a defined context.",
  },
  {
    term: "Residual risk",
    definition:
      "The risk that remains after current controls or planned treatment are considered.",
  },
  {
    term: "Risk tradeoff",
    definition:
      "The balance among risk reduction, business value, cost, effort, timing, disruption, and uncertainty.",
  },
  {
    term: "Escalation",
    definition:
      "Moving a decision to a higher authority because of impact, urgency, tolerance, ownership, or unresolved treatment.",
  },
  {
    term: "Decision authority",
    definition:
      "The role permitted to approve, accept, fund, block, or otherwise decide on a defined risk.",
  },
  {
    term: "Confidence statement",
    definition:
      "A concise explanation of how strong the evidence is behind the risk conclusion.",
  },
  {
    term: "Treatment option",
    definition:
      "A possible response to a risk such as mitigate, avoid, transfer/share, accept, or monitor.",
  },
  {
    term: "Risk trend",
    definition:
      "How a risk, control, evidence, or treatment condition changes over time.",
  },
  {
    term: "Leadership recommendation",
    definition:
      "A clear proposed decision supported by business context, evidence, tradeoffs, owner, and timeline.",
  },
];

const records = [
  {
    id: "LDR-701",
    title:
      "Legacy Reporting Requires Continued P0 Treatment",
    business:
      "Historical reporting remains required for business operations.",
    risk:
      "Legacy trust, ownership, and transport gaps could expose sensitive reports or interrupt service.",
    impact:
      "High",
    likelihood:
      "Medium-High",
    evidence:
      "Current exception, partial inventory, current trust findings, active treatment milestones",
    confidence:
      "Moderate — several dependencies remain incompletely mapped",
    options:
      "Continue treatment; accept high residual risk; accelerate retirement; reduce service scope",
    recommendation:
      "Continue P0 treatment and escalate any missed milestone. Do not convert the gap to Accepted Risk without higher authority and updated evidence.",
    owner:
      "Reporting Product Owner",
    timeline:
      "Monthly milestone review; exception expires 2027-01-31",
    residual:
      "High until modernization and trust retirement are validated",
    decision:
      "Treat / Escalate",
  },
  {
    id: "LDR-702",
    title:
      "External Identity Platform Needs Concentration-Risk Reduction",
    business:
      "Several critical services depend on one external identity platform.",
    risk:
      "A provider outage could prevent access to multiple essential applications at once.",
    impact:
      "High",
    likelihood:
      "Medium",
    evidence:
      "Current supplier assurance, uptime history, dependency map, limited emergency-access procedure",
    confidence:
      "High regarding dependency; Moderate regarding extreme outage conditions",
    options:
      "Improve continuity; accept concentration; redesign dependencies; transition provider",
    recommendation:
      "Fund alternate-access and continuity improvements while retaining the current provider.",
    owner:
      "Identity Platform Owner",
    timeline:
      "Continuity design this quarter; validation next quarter",
    residual:
      "Moderate-High concentration remains until alternate access improves",
    decision:
      "Treat",
  },
  {
    id: "LDR-703",
    title:
      "Partner Certificate Renewal Is Time-Sensitive but Controlled",
    business:
      "Partner scheduling depends on current certificate trust.",
    risk:
      "Renewal delay could interrupt scheduling integration.",
    impact:
      "Medium-High",
    likelihood:
      "Medium",
    evidence:
      "Current certificate, alert, active renewal ticket, sponsor confirmation",
    confidence:
      "High",
    options:
      "Continue renewal; accept short-term risk; pause integration; accelerate partner validation",
    recommendation:
      "Keep Conditional and complete replacement validation before expiry.",
    owner:
      "Integration Owner",
    timeline:
      "Before current certificate expiration",
    residual:
      "Moderate until replacement is validated",
    decision:
      "Conditional",
  },
  {
    id: "LDR-704",
    title:
      "Critical Payroll Supplier Needs Stronger Continuity",
    business:
      "Payroll is a critical employee service with no practical short-term replacement provider.",
    risk:
      "A major provider outage could delay payroll processing.",
    impact:
      "High",
    likelihood:
      "Medium",
    evidence:
      "Current supplier assurance, contract, continuity plan, limited emergency payroll procedure",
    confidence:
      "Moderate-High",
    options:
      "Improve continuity; accept residual concentration; change provider; build internal alternative",
    recommendation:
      "Approve continuity improvement and an emergency payroll validation before contract renewal.",
    owner:
      "Finance Operations Owner",
    timeline:
      "Before contract renewal",
    residual:
      "Moderate-High until emergency operating capability improves",
    decision:
      "Treat",
  },
  {
    id: "LDR-705",
    title:
      "Temporary Workspace Cleanup Evidence Is Not Yet Strong Enough",
    business:
      "Temporary data-science workspaces may contain sensitive derived data.",
    risk:
      "Data could persist beyond approved project closure.",
    impact:
      "Medium-High",
    likelihood:
      "Low-Medium",
    evidence:
      "Strong design, encrypted storage, restricted access, incomplete full-population destruction evidence",
    confidence:
      "Low-Moderate",
    options:
      "Refresh evidence; accept uncertainty; pause sensitive new projects; strengthen lifecycle monitoring",
    recommendation:
      "Do not approve risk acceptance yet. Refresh full-population cleanup evidence first.",
    owner:
      "Data Science Platform Owner",
    timeline:
      "Before next sensitive project closeout",
    residual:
      "Moderate and uncertain",
    decision:
      "Under Review",
  },
  {
    id: "LDR-706",
    title:
      "Recovery Control Is Strong but Residual Uncertainty Remains",
    business:
      "Critical services depend on successful backup restoration after major disruption.",
    risk:
      "A real event could differ from tested recovery conditions.",
    impact:
      "High",
    likelihood:
      "Low-Medium",
    evidence:
      "Current restore testing, key-version mapping, issue closure, protected replication",
    confidence:
      "High",
    options:
      "Monitor; increase test frequency; redesign recovery; accept residual uncertainty",
    recommendation:
      "Maintain current controls and approved residual-risk acceptance with annual full validation.",
    owner:
      "Resilience Leader",
    timeline:
      "Annual full validation plus change-triggered review",
    residual:
      "Moderate normal recovery uncertainty",
    decision:
      "Monitor / Accepted Risk",
  },
  {
    id: "LDR-707",
    title:
      "Expired Legacy Transfer Exception Requires Immediate Decision",
    business:
      "It is unclear whether a legacy transfer workflow remains in use.",
    risk:
      "The organization may be relying on an expired approval with stale control evidence.",
    impact:
      "Potentially High",
    likelihood:
      "Unknown",
    evidence:
      "Expired exception, stale control evidence, no current workflow confirmation",
    confidence:
      "Low",
    options:
      "Confirm retirement; reassess and reapprove; remediate; block continued use",
    recommendation:
      "Treat prior approval as invalid until workflow status is confirmed. Block continued reliance if the workflow remains active without a fresh decision.",
    owner:
      "Legacy Integration Owner",
    timeline:
      "Immediate",
    residual:
      "Unknown until current evidence is obtained",
    decision:
      "Blocked / Reassess",
  },
];

const dashboardMetrics = [
  {
    label: "Leadership briefs",
    value: "7",
    note: "Legacy, identity, partner, payroll, workspace, recovery, and expired-transfer decisions",
  },
  {
    label: "Treat / Escalate",
    value: "3",
    note: "Legacy, identity concentration, and payroll continuity need active reduction",
  },
  {
    label: "Conditional / Review",
    value: "2",
    note: "Partner renewal and workspace evidence depend on current conditions",
  },
  {
    label: "Blocked / Immediate",
    value: "1",
    note: "Expired transfer exception needs current evidence before continued reliance",
  },
];

const logs = [
  "[08:28] LDR-701 decision=TREAT_ESCALATE impact=HIGH confidence=MODERATE",
  "[08:52] LDR-702 decision=TREAT concentration=HIGH owner=IDENTITY_PLATFORM",
  "[09:16] LDR-703 decision=CONDITIONAL cert_renewal=OPEN confidence=HIGH",
  "[09:40] LDR-704 decision=TREAT payroll_continuity=IMPROVE",
  "[10:04] LDR-705 decision=UNDER_REVIEW evidence=PARTIAL confidence=LOW_MODERATE",
  "[10:28] LDR-706 decision=MONITOR_ACCEPTED evidence=STRONG",
  "[10:52] LDR-707 decision=BLOCK_REASSESS exception=EXPIRED confidence=LOW",
];

const antiPatterns = [
  {
    title: "Start with technical detail",
    problem:
      "The leader hears logs, ports, configuration names, and acronyms before understanding the business consequence.",
    better:
      "Lead with the service, consequence, urgency, and decision needed.",
  },
  {
    title: "Risk score with no story",
    problem:
      "A red box or number is presented without scenario, evidence, or residual risk.",
    better:
      "Use the score as a summary and preserve the underlying reasoning.",
  },
  {
    title: "Recommendation with no options",
    problem:
      "Leadership cannot see the tradeoff between treatment, acceptance, avoidance, transfer, or monitoring.",
    better:
      "Show realistic options and explain why one is preferred.",
  },
  {
    title: "Hide uncertainty",
    problem:
      "Weak evidence is communicated with the same confidence as strong evidence.",
    better:
      "State confidence and the evidence limitations directly.",
  },
  {
    title: "No owner or timeline",
    problem:
      "The recommendation sounds important but nobody is accountable for action.",
    better:
      "Name the risk owner, remediation owner, milestone, and review trigger.",
  },
  {
    title: "Urgency based on fear",
    problem:
      "Language becomes dramatic even when evidence does not support immediate action.",
    better:
      "Tie urgency to impact, likelihood, deadline, tolerance, control failure, or evidence state.",
  },
  {
    title: "Too much detail for the audience",
    problem:
      "Leadership receives pages of technical evidence when a concise decision brief is needed.",
    better:
      "Keep detailed evidence available, but summarize only what affects the decision.",
  },
  {
    title: "No residual-risk statement",
    problem:
      "The brief implies the recommended action will eliminate all risk.",
    better:
      "State what remains after treatment and when the decision should be revisited.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Recommend continuity treatment for the payroll supplier, explain that assurance is strong but concentration remains, and set a deadline before contract renewal.",
    outcome:
      "Best. The recommendation connects business impact, evidence, residual risk, ownership, and timing.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Tell leadership the supplier is secure because the assurance report is current.",
    outcome:
      "Risky. Supplier assurance does not eliminate business continuity and concentration risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Present only the supplier's technical control list and let leadership choose.",
    outcome:
      "Caution. Leaders need decision-ready options and business consequences, not raw control detail.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "State that confidence is Low, treat the expired approval as invalid, and require current evidence before continued reliance.",
    outcome:
      "Best. The communication preserves uncertainty and asks for a concrete governance decision.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Tell leadership the risk is probably Low because no recent incident is known.",
    outcome:
      "Risky. Missing current evidence should not be converted into low risk.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Avoid mentioning the expired exception because it may create concern.",
    outcome:
      "Risky. Hiding material governance evidence weakens decision quality.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What should a leadership risk brief usually lead with?",
    choices: [
      "The business consequence and decision needed.",
      "Raw logs.",
      "Technical acronyms.",
      "A control inventory.",
    ],
    answer: 0,
    explanation:
      "Leadership communication should begin with business impact and the decision required.",
  },
  {
    question:
      "Why should treatment options be compared?",
    choices: [
      "Leaders need to understand tradeoffs among risk reduction, cost, effort, timing, and business impact.",
      "Because every option is equally good.",
      "Because risk owners should not make decisions.",
      "Because scores replace judgment.",
    ],
    answer: 0,
    explanation:
      "Decision makers need realistic choices and their consequences.",
  },
  {
    question:
      "What is a confidence statement?",
    choices: [
      "A concise explanation of how strong the evidence is behind the risk conclusion.",
      "A promise that the risk will not happen.",
      "A risk score.",
      "A project deadline.",
    ],
    answer: 0,
    explanation:
      "Confidence communicates evidence quality and uncertainty.",
  },
  {
    question:
      "What is strongest when evidence is stale or contradictory?",
    choices: [
      "Communicate lower confidence and explain what must be resolved.",
      "Use the strongest available label anyway.",
      "Hide the limitation.",
      "Assume the old conclusion remains valid.",
    ],
    answer: 0,
    explanation:
      "Uncertainty should remain visible in leadership decisions.",
  },
  {
    question:
      "What should a recommendation include besides the preferred action?",
    choices: [
      "Owner, timeline, residual risk, evidence, and review triggers.",
      "Only the risk score.",
      "Only the technical cause.",
      "Only the budget estimate.",
    ],
    answer: 0,
    explanation:
      "A recommendation becomes actionable when accountability and follow-up are clear.",
  },
  {
    question:
      "Which statement about metrics is strongest?",
    choices: [
      "Metrics summarize patterns, but narrative context is still needed for important decisions.",
      "Metrics eliminate the need for judgment.",
      "One dashboard can explain every risk.",
      "Only red metrics matter.",
    ],
    answer: 0,
    explanation:
      "Metrics support but do not replace risk reasoning.",
  },
  {
    question:
      "What is strongest for executive risk communication?",
    choices: [
      "Use plain business language while keeping detailed evidence available for deeper review.",
      "Remove all uncertainty.",
      "Use as many acronyms as possible.",
      "Avoid discussing residual risk.",
    ],
    answer: 0,
    explanation:
      "Good executive communication is concise without becoming misleading.",
  },
];

const checklistItems = [
  "The affected business service is named.",
  "The business consequence is clear.",
  "Impact is stated.",
  "Likelihood is stated with reasoning.",
  "Evidence confidence is stated.",
  "Current controls are summarized.",
  "Residual risk is explicit.",
  "Risk tolerance or escalation context is included where relevant.",
  "Realistic treatment options are compared.",
  "The preferred recommendation is clear.",
  "Recommendation rationale is concise.",
  "Risk owner is named.",
  "Remediation or action owner is named.",
  "Timeline or milestone is stated.",
  "Budget / effort considerations are included where relevant.",
  "Dependencies are visible.",
  "Uncertainty is preserved.",
  "Change triggers are stated.",
  "Detailed technical evidence remains available for deeper review.",
  "No leadership communication relies on unsafe or unauthorized testing of real systems.",
];

const takeaways = [
  "Leadership risk communication starts with business consequence, not technical detail.",
  "A strong brief explains impact, likelihood, evidence confidence, current controls, residual risk, and the decision needed.",
  "Treatment options should be compared using risk, cost, effort, timing, and business effect.",
  "Uncertainty should be stated directly instead of hidden.",
  "Good recommendations name the owner, timeline, and expected outcome.",
  "Residual risk should remain visible after treatment.",
  "Metrics support decisions but do not replace narrative context.",
  "Different audiences need different levels of technical detail.",
  "Escalation should be based on impact, tolerance, urgency, ownership, or evidence—not fear.",
  "The Leadership Risk Brief prepares you for A15.10 Risk Decision Lab.",
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

export default function CommunicatingRiskToLeadersPage() {
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
              A15.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Communicating Risk to Leaders
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security teams often understand the technical problem long before a
            business decision is made. This lesson teaches how to translate that
            analysis into a concise leadership recommendation that explains what
            matters, what is uncertain, what choices exist, and what should
            happen next.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All dashboards, risk briefs, evidence, owners, suppliers, and
            leadership decisions are fictional and defensive.
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
          lessonTitle="Communicating Risk to Leaders"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.9 Entry Readiness"
          items={[
            "I can explain a risk scenario in business language.",
            "I can describe residual risk and evidence quality.",
            "I can compare treatment, acceptance, monitoring, avoidance, and transfer.",
            "I will use only fictional leadership and risk records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Good Risk Brief Helps Someone Make a Decision"
        >
          <p className="leading-8">
            Leaders rarely need every log line or technical configuration
            detail. They need to understand which business outcome is at risk,
            how serious the consequence is, how strong the evidence is, which
            options exist, and which action security recommends.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Leadership communication should reduce confusion without reducing accuracy.
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
          eyebrow="Leadership Questions"
          title="Six Questions Every Decision Brief Should Answer"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {leaderQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Why: {item.why}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong: {item.strong}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Weak: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Translation"
          title="Turn Technical Findings Into Business Meaning"
        >
          <div className="grid gap-5">
            {translationPairs.map((item) => (
              <article
                key={item.technical}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                      Technical finding
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {item.technical}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Leadership translation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.leadership}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Executive Brief"
          title="Anatomy of a Leadership Risk Brief"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {executiveBriefSections.map((item) => (
              <article
                key={item.section}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.section}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Treatment Options"
          title="Leaders Need Tradeoffs, Not Just a Warning"
        >
          <div className="grid gap-5">
            {optionComparison.map((item) => (
              <article
                key={item.option}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <h3 className="text-xl font-black text-cyan-50">
                  {item.option}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Risk effect: {item.riskEffect}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Business effect: {item.businessEffect}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Best when: {item.bestWhen}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Audience"
          title="Different Stakeholders Need Different Levels of Detail"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {communicationLevels.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">
                  {item.audience}
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Needs: {item.needs}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Avoid: {item.avoid}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Confidence"
          title="Tell Leaders How Strong the Evidence Really Is"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {uncertaintyLanguage.map((item) => (
              <article
                key={item.phrase}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.phrase}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
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
          eyebrow="Leadership Metrics"
          title="Use Metrics to Reveal Patterns"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {leadershipMetrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.metric}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Why useful: {item.usefulBecause}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Leadership Risk Communication"
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
          title="Leadership Risk Communication Terms"
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
          eyebrow="Fictional Leadership Briefs"
          title="Seven Northbridge Decision-Ready Risk Summaries"
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
                    {item.decision}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Business context", item.business],
                    ["Risk scenario", item.risk],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Evidence", item.evidence],
                    ["Confidence", item.confidence],
                    ["Treatment options", item.options],
                    ["Recommendation", item.recommendation],
                    ["Owner", item.owner],
                    ["Timeline", item.timeline],
                    ["Residual risk", item.residual],
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
          title="Northbridge Leadership Risk Dashboard"
          subtitle="Fictional treatment, escalation, confidence, and decision summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Expired Legacy Transfer Approval Requires Immediate Leadership Decision"
          severity="High"
          time="10:52"
          source="Fictional Leadership Risk Review"
          details="LDR-707 has low confidence because the previous exception expired and the organization has not confirmed whether the workflow is retired. Continuing to rely on the old approval would create an ungoverned risk."
          recommendation="Treat the previous approval as invalid, confirm current workflow status immediately, and block continued reliance if the workflow remains active without a fresh authorized decision."
        />

        <Section
          eyebrow="One-Minute Risk Brief"
          title="Compress Without Distorting"
        >
          <p className="leading-8">
            A strong one-minute risk brief can be concise because the detailed
            analysis already exists behind it. The goal is not to erase
            evidence; the goal is to surface only the information that changes
            the decision.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Business service and consequence",
              "Impact and likelihood",
              "Evidence confidence",
              "Current controls",
              "Residual risk",
              "Treatment options",
              "Recommendation",
              "Owner and deadline",
              "Trigger that changes the decision",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Leadership Risk Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Critical Payroll Supplier"
          question="What is the strongest leadership recommendation for LDR-704?"
          evidence={[
            "Payroll is a critical employee service.",
            "Supplier assurance and contract evidence are current.",
            "No practical alternate provider exists on short notice.",
            "An emergency payroll procedure exists but has limited validation.",
            "Contract renewal is approaching.",
          ]}
          options={[
            "Approve continuity improvement and validate the emergency payroll process before contract renewal.",
            "Close the risk because supplier assurance is current.",
            "Accept all residual risk automatically because a contract exists.",
            "Replace the provider immediately without considering transition impact.",
          ]}
          bestAnswer={0}
          explanation="The recommendation balances business continuity, supplier control quality, residual concentration risk, and a practical deadline."
        />

        <Section
          eyebrow="Common Communication Mistakes"
          title="Eight Ways Risk Communication Loses Decision Value"
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
          title="Scenario Decision Lab 1 — Supplier Is Strong, Continuity Is Weak"
          scenario="A payroll supplier has strong current assurance, but the business has no practical replacement provider and only a limited emergency operating process."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Expired Approval, Low Confidence"
          scenario="A legacy transfer exception expired and current evidence cannot confirm whether the workflow remains active."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Leadership Risk Brief"
        >
          <p className="leading-8">
            Use fictional risk records, owners, costs, evidence, treatment
            options, and leadership decisions only.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional leadership risk briefs.",
              "Give every brief a stable LDR ID.",
              "Link each brief to one or more RSK IDs.",
              "Link related CTL, MAP, AUD, EXC, or TPR IDs where useful.",
              "Write a decision headline.",
              "State the business service or objective.",
              "Write the risk scenario in business language.",
              "State impact.",
              "State likelihood.",
              "State evidence confidence.",
              "Summarize current controls.",
              "State residual risk.",
              "List at least two realistic treatment options.",
              "Explain business tradeoffs for each option.",
              "Choose one preferred recommendation.",
              "Explain why that recommendation is strongest.",
              "Name the risk owner.",
              "Name the action or remediation owner.",
              "Set a timeline or milestone.",
              "Record cost/effort category where useful.",
              "Record dependencies.",
              "Record uncertainty.",
              "Record escalation criteria.",
              "Record review or change triggers.",
              "Include at least three briefs for high-impact supplier or concentration risks.",
              "Include at least three briefs for control-effectiveness gaps.",
              "Include at least two briefs for expired or near-expiry exceptions.",
              "Include at least two briefs with low evidence confidence.",
              "Include at least two briefs where Monitor is the correct decision.",
              "Include at least two briefs where acceptance is reasonable.",
              "Include at least two briefs where Blocked is the correct recommendation.",
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
              Do not use confidential executive communications, private risk
              registers, restricted financial data, or real organizational
              decisions. Do not scan, probe, or test real systems to create a
              leadership brief. Use synthetic records only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Expired Approval and Low Confidence"
          question="What is the strongest leadership message for LDR-707?"
          evidence={[
            "The prior exception expired.",
            "Current control evidence is stale.",
            "The organization has not confirmed whether the workflow is retired.",
            "The old approval was tied to a temporary migration period.",
          ]}
          options={[
            "State Low confidence, treat the old approval as invalid, and require current evidence before continued reliance.",
            "State Low risk because no recent incident is known.",
            "Ignore the expired exception to avoid alarming leadership.",
            "Mark the risk Closed because the exception expired.",
          ]}
          bestAnswer={0}
          explanation="The strongest brief preserves uncertainty and asks for a clear governance action instead of converting missing evidence into a reassuring conclusion."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Leadership Risk Reporting Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for how risks are
            escalated, summarized, compared, and reported to business and senior
            leaders.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Decision headline",
              "Business context",
              "Impact language",
              "Likelihood language",
              "Evidence confidence",
              "Residual risk",
              "Treatment options",
              "Cost / effort",
              "Recommendation",
              "Risk owner",
              "Action owner",
              "Timeline",
              "Escalation threshold",
              "Risk tolerance",
              "Metrics",
              "Trend reporting",
              "Change triggers",
              "Decision history",
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
            The strongest standard should help technical teams communicate risk
            clearly without hiding evidence, uncertainty, or business tradeoffs.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.9 Mini Quiz: Communicating Risk to Leaders"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Leadership Risk Brief"
          prompt="Create the ninth artifact for your A15 Risk Register and Leadership Recommendation: a fictional Leadership Risk Brief with at least fifteen decision-ready records. Include LDR ID, linked risk/control/compliance/evidence/exception/supplier IDs, decision headline, business context, risk scenario, impact, likelihood, evidence confidence, current controls, residual risk, treatment options, tradeoffs, recommendation, rationale, risk owner, action owner, timeline, cost/effort category, dependencies, uncertainty, escalation criteria, and review/change triggers."
          tips={[
            "Lead with business consequence.",
            "State the decision needed.",
            "Preserve evidence confidence and uncertainty.",
            "Compare realistic options.",
            "Name owners and deadlines.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.10?"
        >
          <p className="leading-8">
            A15.10 is the Risk Decision Lab. Before continuing, make sure you can
            turn a detailed risk record into a concise recommendation without
            losing the evidence, uncertainty, and ownership behind it.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can translate technical findings into business language.",
              "I can explain evidence confidence.",
              "I can compare treatment options and tradeoffs.",
              "I can write a clear recommendation with owner and timeline.",
              "I can explain what residual risk remains after the recommended action.",
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
          title="How to Make the Leadership Risk Brief Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use decision-first writing",
                detail:
                  "State what leadership should decide before presenting supporting detail.",
              },
              {
                title: "Translate technical language",
                detail:
                  "Explain the service, consequence, dependency, and residual risk in plain business terms.",
              },
              {
                title: "Show confidence",
                detail:
                  "Tell the reader whether evidence is Strong, Moderate, Low, or Unknown.",
              },
              {
                title: "Compare options",
                detail:
                  "Present practical treatment choices and their tradeoffs.",
              },
              {
                title: "Name accountability",
                detail:
                  "Every recommendation should identify the risk owner, action owner, and milestone.",
              },
              {
                title: "Keep residual risk visible",
                detail:
                  "Explain what remains even after the preferred treatment.",
              },
              {
                title: "Use metrics carefully",
                detail:
                  "Support decisions with trends and counts, but keep the narrative context.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.10 will combine every A15 artifact into a full enterprise risk decision package.",
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
            Leadership risk communication uses authorized, safe evidence
          </h2>
          <p className="mt-3 leading-7">
            Do not collect confidential executive communications, private risk
            records, restricted financial data, real credentials, or sensitive
            organizational evidence. Do not scan, probe, exploit, or test real
            systems. All leadership briefs, decisions, evidence, systems,
            suppliers, and owners in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.9 Communicating Risk to Leaders Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for translating technical risk into
            business consequences, confidence statements, treatment options,
            tradeoffs, leadership recommendations, owners, timelines, and
            residual risk. Next, A15.10 is the Risk Decision Lab.
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