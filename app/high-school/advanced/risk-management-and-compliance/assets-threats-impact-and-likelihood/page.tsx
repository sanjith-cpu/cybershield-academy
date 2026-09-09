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
const previousLesson = `${modulePath}/risk-management-in-cybersecurity`;
const nextLesson = `${modulePath}/risk-registers-and-ownership`;

const objectives = [
  "Identify business services, assets, data, people, suppliers, identities, and operational dependencies that shape cybersecurity risk.",
  "Write clear threat-event scenarios that describe what could happen without turning risk analysis into offensive testing.",
  "Evaluate business impact across confidentiality, integrity, availability, financial, legal, operational, safety, and reputational dimensions.",
  "Estimate likelihood using current evidence, exposure conditions, control strength, history, dependency, and uncertainty rather than treating a score as a prediction.",
  "Build a Risk Analysis Worksheet that becomes the second artifact in the A15 Risk Register and Leadership Recommendation.",
];

const assetClasses = [
  {
    type: "Business service",
    examples:
      "Student support, scheduling, finance, learning systems, communications, recovery, analytics.",
    why:
      "Risk matters because business services deliver outcomes people depend on.",
    question:
      "What important service could be interrupted, degraded, misused, or lose trust?",
  },
  {
    type: "Data",
    examples:
      "Student records, employee information, reports, exports, credentials, audit evidence, backups.",
    why:
      "Data sensitivity, integrity, retention, and availability shape impact.",
    question:
      "What happens if this data is exposed, altered, unavailable, or retained incorrectly?",
  },
  {
    type: "Identity",
    examples:
      "Students, staff, administrators, service accounts, workloads, partners, suppliers.",
    why:
      "Identity controls determine who can act and what actions they can perform.",
    question:
      "Which identity relationship could create a larger business consequence?",
  },
  {
    type: "Application / platform",
    examples:
      "Web portals, APIs, databases, cloud services, backup platforms, internal tools.",
    why:
      "Applications and platforms deliver business functions and enforce many controls.",
    question:
      "What happens to the business if this technology fails or behaves incorrectly?",
  },
  {
    type: "Third party",
    examples:
      "SaaS provider, payment processor, scheduling partner, managed service provider.",
    why:
      "The organization can depend on systems it does not fully control.",
    question:
      "Which supplier failure could create a major business or security consequence?",
  },
  {
    type: "People and process",
    examples:
      "Approvers, operators, help desk, incident responders, business owners, auditors.",
    why:
      "Human decisions and process quality can strengthen or weaken controls.",
    question:
      "Which role or process is essential to prevention, detection, response, or recovery?",
  },
];

const threatScenarioElements = [
  {
    element: "Business context",
    meaning:
      "Name the service, process, asset, or dependency that matters.",
    example:
      "Critical student-support portal used throughout the school day.",
  },
  {
    element: "Threat event",
    meaning:
      "Describe the harmful event at a high level.",
    example:
      "The portal becomes unavailable during a high-demand period.",
  },
  {
    element: "Exposure condition",
    meaning:
      "Describe the relevant weakness or dependency without offensive detail.",
    example:
      "The service depends on one external identity provider with limited alternate access.",
  },
  {
    element: "Business consequence",
    meaning:
      "Explain what the organization loses or struggles to do.",
    example:
      "Students and support staff cannot access critical support workflows.",
  },
  {
    element: "Current controls",
    meaning:
      "Record safeguards that reduce the risk.",
    example:
      "Service monitoring, backup authentication path, continuity procedures.",
  },
  {
    element: "Evidence / uncertainty",
    meaning:
      "Show what supports the judgment and what remains unclear.",
    example:
      "Continuity procedure is current, but the alternate-authentication test is six months old.",
  },
];

const impactDimensions = [
  {
    dimension: "Confidentiality",
    low: "Limited internal information exposed with little business consequence.",
    medium: "Sensitive information exposed to a bounded group or limited scope.",
    high: "Sensitive or regulated information exposed broadly or to unauthorized parties.",
  },
  {
    dimension: "Integrity",
    low: "Minor incorrect data that can be corrected quickly.",
    medium: "Important records or decisions may be wrong until detected and corrected.",
    high: "Critical decisions, financial records, release artifacts, or safety-relevant data cannot be trusted.",
  },
  {
    dimension: "Availability",
    low: "Short interruption with easy workaround.",
    medium: "Noticeable service interruption requiring manual workaround or delayed work.",
    high: "Critical service outage with major operational or recovery impact.",
  },
  {
    dimension: "Financial",
    low: "Small operational cost.",
    medium: "Meaningful remediation, delay, contractual, or productivity cost.",
    high: "Major direct or indirect financial consequence.",
  },
  {
    dimension: "Legal / compliance",
    low: "Minimal policy issue with straightforward correction.",
    medium: "Material audit finding, notification obligation, or policy exception.",
    high: "Major regulatory, contractual, legal, or governance consequence.",
  },
  {
    dimension: "Reputation / trust",
    low: "Limited stakeholder concern.",
    medium: "Noticeable loss of confidence among a user or partner group.",
    high: "Broad stakeholder or leadership trust loss affecting the organization.",
  },
];

const likelihoodFactors = [
  {
    factor: "Exposure",
    question:
      "How often is the service, data, or trust relationship exposed to the relevant condition?",
    evidence:
      "Architecture scope, user population, external dependency, workflow frequency.",
  },
  {
    factor: "Control strength",
    question:
      "How effectively do current controls prevent, detect, contain, or recover from the scenario?",
    evidence:
      "Control test, monitoring, access review, recovery evidence, policy state.",
  },
  {
    factor: "History",
    question:
      "Has the organization or a closely related process experienced similar failures?",
    evidence:
      "Authorized incident summaries, outage records, control findings, trend reports.",
  },
  {
    factor: "Change",
    question:
      "Has the environment recently changed in a way that increases uncertainty?",
    evidence:
      "Migration, new supplier, new data class, ownership change, architecture redesign.",
  },
  {
    factor: "Dependency",
    question:
      "How much does the scenario depend on one system, team, vendor, or control?",
    evidence:
      "Single points of failure, supplier concentration, recovery alternatives.",
  },
  {
    factor: "Evidence quality",
    question:
      "How current and complete is the information behind the estimate?",
    evidence:
      "Source owner, freshness, consistency, completeness, validation.",
  },
];

const likelihoodScale = [
  {
    level: "Low",
    description:
      "Scenario is plausible but currently constrained by strong controls, limited exposure, strong alternatives, or weak evidence of occurrence.",
    caution:
      "Low does not mean impossible.",
  },
  {
    level: "Low-Medium",
    description:
      "Some exposure or dependency exists, but controls and evidence still reduce plausibility substantially.",
    caution:
      "Watch for change triggers that could move the estimate upward.",
  },
  {
    level: "Medium",
    description:
      "Scenario is reasonably plausible under current business and control conditions.",
    caution:
      "Document which assumptions would move the estimate up or down.",
  },
  {
    level: "Medium-High",
    description:
      "Several exposure, dependency, control, or evidence conditions make the scenario notably plausible.",
    caution:
      "Treatment or closer monitoring is usually warranted.",
  },
  {
    level: "High",
    description:
      "Current evidence strongly suggests the scenario is highly plausible or already recurring.",
    caution:
      "High likelihood should still be supported by clear evidence, not fear.",
  },
];

const evidenceQuality = [
  {
    quality: "Current and direct",
    example:
      "Current access review, recovery test, supplier assessment, control validation, or architecture record.",
    confidence:
      "Strongest support for the present decision.",
  },
  {
    quality: "Current but indirect",
    example:
      "Recent monitoring or related operational evidence that supports but does not directly prove the scenario.",
    confidence:
      "Useful with clearly stated inference.",
  },
  {
    quality: "Partial",
    example:
      "Some systems, owners, or dependencies are known while others are still being mapped.",
    confidence:
      "Supports a Conditional conclusion, not full confidence.",
  },
  {
    quality: "Stale",
    example:
      "An old control test or supplier review no longer reflects the current environment.",
    confidence:
      "Should reduce confidence and often trigger review.",
  },
  {
    quality: "Missing",
    example:
      "No current owner or evidence can be found for a material dependency.",
    confidence:
      "Use Unknown or a more cautious likelihood/decision state.",
  },
  {
    quality: "Contradictory",
    example:
      "One source says the control is current while another shows a failed test or unresolved dependency.",
    confidence:
      "Preserve the conflict and resolve what each source actually proves.",
  },
];

const reasoningPrinciples = [
  {
    title: "Impact is about consequence",
    meaning:
      "Impact asks what happens to the organization if the scenario occurs.",
    review:
      "Would the impact still be serious even if likelihood were low?",
  },
  {
    title: "Likelihood is about plausibility",
    meaning:
      "Likelihood asks how plausible the scenario is under current conditions and evidence.",
    review:
      "What evidence makes the scenario more or less plausible?",
  },
  {
    title: "Controls usually affect likelihood or consequence",
    meaning:
      "A control can reduce the chance of the event, reduce the damage, speed detection, or improve recovery.",
    review:
      "Which part of the scenario does each control actually change?",
  },
  {
    title: "Criticality should not be hidden",
    meaning:
      "A business-critical service may still have high impact even when controls make the event unlikely.",
    review:
      "Are you reducing impact just because controls are strong?",
  },
  {
    title: "Evidence freshness matters",
    meaning:
      "A once-strong control may no longer be strong after change or drift.",
    review:
      "When was the evidence last validated?",
  },
  {
    title: "One score should not erase uncertainty",
    meaning:
      "Risk matrices simplify a complex judgment.",
    review:
      "Which assumptions are hidden behind the label or score?",
  },
  {
    title: "Dependency raises business sensitivity",
    meaning:
      "A strong supplier or platform can still create concentration or single-point-of-failure risk.",
    review:
      "What happens if the dependency is unavailable?",
  },
  {
    title: "Reassessment follows change",
    meaning:
      "Likelihood and impact can change after new users, data, suppliers, architecture, controls, or ownership.",
    review:
      "What event should reopen the estimate?",
  },
];

const vocabulary = [
  {
    term: "Asset criticality",
    definition:
      "The importance of an asset or service to organizational objectives.",
  },
  {
    term: "Threat event",
    definition:
      "A harmful event or condition that could affect a business service or asset.",
  },
  {
    term: "Exposure condition",
    definition:
      "A weakness, dependency, or circumstance that affects how plausible or harmful a scenario is.",
  },
  {
    term: "Impact",
    definition:
      "The business consequence if the scenario occurs.",
  },
  {
    term: "Likelihood",
    definition:
      "A reasoned estimate of how plausible the scenario is under current conditions.",
  },
  {
    term: "Risk scenario",
    definition:
      "A structured description connecting a threat event, business context, exposure condition, and consequence.",
  },
  {
    term: "Evidence quality",
    definition:
      "How current, complete, direct, attributable, and consistent the supporting information is.",
  },
  {
    term: "Assumption",
    definition:
      "A condition treated as true for the analysis even though it may not be fully proven.",
  },
  {
    term: "Uncertainty",
    definition:
      "The degree to which the reviewer lacks complete confidence about the scenario, evidence, or future conditions.",
  },
  {
    term: "Dependency",
    definition:
      "A system, person, supplier, control, or process that another business service relies on.",
  },
  {
    term: "Concentration risk",
    definition:
      "Risk created when too much business capability depends on one provider, technology, location, or control.",
  },
  {
    term: "Risk matrix",
    definition:
      "A simplified tool that combines impact and likelihood labels to support prioritization.",
  },
];

const records = [
  {
    id: "ANL-01",
    service: "Student Services Portal",
    asset: "Sensitive student-support workflow",
    threatEvent:
      "Portal service becomes unavailable during a high-demand school period.",
    exposure:
      "Heavy dependence on a small number of critical platform services.",
    impact:
      "High — support workflows stop, users lose access, recovery effort increases.",
    likelihood:
      "Low-Medium — strong monitoring and redundancy exist, but dependency remains.",
    evidence:
      "Current availability architecture + current recovery test + service monitoring",
    uncertainty:
      "Actual business load during peak events can vary significantly.",
    controls:
      "Monitoring, redundancy, recovery procedures, capacity management",
    decision:
      "Monitor",
  },
  {
    id: "ANL-02",
    service: "Legacy Reporting Service",
    asset: "Historical sensitive reports",
    threatEvent:
      "Legacy trust or transport weakness contributes to unauthorized exposure or service disruption.",
    exposure:
      "Broad trust relationships, incomplete ownership, aging platform, modernization incomplete.",
    impact:
      "High — sensitive data exposure, operational disruption, investigation difficulty.",
    likelihood:
      "Medium-High — multiple active gaps increase plausibility.",
    evidence:
      "Current exception + partial inventory + current trust findings",
    uncertainty:
      "Several dependencies remain incompletely mapped.",
    controls:
      "Restricted network scope, partial monitoring, modernization plan",
    decision:
      "Treat",
  },
  {
    id: "ANL-03",
    service: "Partner Scheduling Integration",
    asset: "Scheduling data and partner availability",
    threatEvent:
      "Partner certificate lifecycle failure interrupts trusted service communication.",
    exposure:
      "Current certificate expires in 45 days.",
    impact:
      "Medium-High — scheduling disruption and partner-service interruption.",
    likelihood:
      "Medium — renewal is approaching but sponsor and workflow are active.",
    evidence:
      "Current certificate + renewal ticket + current partner sponsor",
    uncertainty:
      "Partner deployment timing remains externally dependent.",
    controls:
      "Certificate monitoring, renewal process, sponsor oversight",
    decision:
      "Conditional",
  },
  {
    id: "ANL-04",
    service: "Recovery Backup Repository",
    asset: "Critical recovery data",
    threatEvent:
      "A major disruption occurs and required data cannot be restored within business expectations.",
    exposure:
      "Recovery depends on current backup data, keys, procedures, and platform availability.",
    impact:
      "High — prolonged outage, potential data loss, major recovery cost.",
    likelihood:
      "Low-Medium when current restore validation passes.",
    evidence:
      "Current backup inventory + current key inventory + most recent restore test",
    uncertainty:
      "A real disaster can differ from a planned recovery test.",
    controls:
      "Encrypted backups, protected replication, restricted recovery, restore testing",
    decision:
      "Monitor",
  },
  {
    id: "ANL-05",
    service: "Critical SaaS Provider",
    asset: "Business workflow dependent on one supplier",
    threatEvent:
      "Provider outage or business failure interrupts the dependent service.",
    exposure:
      "No practical alternate provider is available today.",
    impact:
      "High — major business interruption until service or workaround is restored.",
    likelihood:
      "Medium — supplier is stable but concentration remains.",
    evidence:
      "Current supplier review + contract + continuity plan",
    uncertainty:
      "Future provider stability and outage conditions cannot be predicted precisely.",
    controls:
      "Supplier monitoring, contractual commitments, continuity procedures",
    decision:
      "Treat",
  },
  {
    id: "ANL-06",
    service: "Analytics Export Workflow",
    asset: "Sensitive report package",
    threatEvent:
      "An approved export remains in temporary storage longer than intended.",
    exposure:
      "Temporary staging exists outside the primary application data store.",
    impact:
      "Medium-High — sensitive duplicate data remains accessible longer than necessary.",
    likelihood:
      "Low-Medium — automated cleanup exists but requires current evidence.",
    evidence:
      "Current retention policy + recent cleanup validation",
    uncertainty:
      "Large or interrupted export jobs may follow different timing.",
    controls:
      "Encrypted staging, short retention, cleanup monitoring, export authorization",
    decision:
      "Monitor",
  },
];

const dashboardMetrics = [
  {
    label: "Scenarios analyzed",
    value: "6",
    note: "Business-service, legacy, partner, recovery, supplier, and export risks",
  },
  {
    label: "High impact",
    value: "4",
    note: "Portal outage, legacy reporting, recovery failure, and SaaS concentration",
  },
  {
    label: "Medium-High likelihood",
    value: "1",
    note: "Legacy reporting has multiple active exposure conditions",
  },
  {
    label: "Treat / Conditional",
    value: "3",
    note: "Legacy, supplier concentration, and partner lifecycle require action or conditions",
  },
];

const logs = [
  "[08:14] ANL-01 portal impact=HIGH likelihood=LOW_MEDIUM evidence=CURRENT state=MONITOR",
  "[08:38] ANL-02 legacy impact=HIGH likelihood=MEDIUM_HIGH evidence=PARTIAL state=TREAT",
  "[09:02] ANL-03 partner impact=MEDIUM_HIGH likelihood=MEDIUM cert_expiry=45d state=CONDITIONAL",
  "[09:26] ANL-04 recovery impact=HIGH likelihood=LOW_MEDIUM restore=CURRENT state=MONITOR",
  "[09:50] ANL-05 supplier impact=HIGH likelihood=MEDIUM concentration=SINGLE_PROVIDER state=TREAT",
  "[10:14] ANL-06 export impact=MEDIUM_HIGH likelihood=LOW_MEDIUM cleanup=CURRENT state=MONITOR",
];

const antiPatterns = [
  {
    title: "Asset list without business meaning",
    problem:
      "The worksheet lists servers and applications but never explains what service or business outcome they support.",
    better:
      "Connect technology assets to the business service, data, people, and dependency that matter.",
  },
  {
    title: "Threat event is too vague",
    problem:
      "A label like 'cyberattack' does not explain the scenario.",
    better:
      "Describe the high-level harmful event, affected service, exposure condition, and consequence.",
  },
  {
    title: "Impact and likelihood blended together",
    problem:
      "A severe consequence is automatically treated as highly likely.",
    better:
      "Reason about consequence and plausibility separately.",
  },
  {
    title: "Strong controls reduce impact score automatically",
    problem:
      "A critical outage still has high consequence even if controls make it less likely.",
    better:
      "Use controls to change the part of the analysis they actually affect.",
  },
  {
    title: "Likelihood based on fear",
    problem:
      "A dramatic scenario receives a High label without supporting evidence.",
    better:
      "Use exposure, controls, history, change, dependency, and evidence quality.",
  },
  {
    title: "Old evidence treated as current",
    problem:
      "A years-old test continues to support today's risk estimate.",
    better:
      "Record evidence freshness and lower confidence when it becomes stale.",
  },
  {
    title: "Third-party dependency ignored",
    problem:
      "Supplier controls look strong, so concentration and continuity risk disappear from the analysis.",
    better:
      "Separate supplier control quality from dependency consequences.",
  },
  {
    title: "Risk matrix becomes the analysis",
    problem:
      "The final output is only a colored box or number.",
    better:
      "Preserve scenario, impact reasoning, likelihood reasoning, evidence, uncertainty, and ownership.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep ANL-02 at High impact and Medium-High likelihood because business consequence is serious and several active exposure conditions remain.",
    outcome:
      "Best. The estimate separates consequence from plausibility and uses current evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Lower impact because some compensating controls exist.",
    outcome:
      "Caution. Controls may reduce likelihood or consequence, but the underlying business impact of exposure or disruption remains high.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Set likelihood to Low because no major incident happened this week.",
    outcome:
      "Risky. A short absence of incidents does not outweigh multiple current exposure conditions.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep ANL-05 at High impact and Medium likelihood while treating concentration and continuity risk.",
    outcome:
      "Best. Strong supplier evidence reduces uncertainty but does not remove the business consequence of dependency.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Lower impact because the supplier has a strong contract.",
    outcome:
      "Risky. Contractual safeguards may transfer some consequence but do not make a major outage less disruptive.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark likelihood High because every supplier eventually has an outage.",
    outcome:
      "Caution. That statement is too broad; the current estimate should be based on available evidence and context.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What makes an asset important in risk analysis?",
    choices: [
      "Its relationship to business services, data, people, operations, trust, or organizational goals.",
      "Only its purchase price.",
      "Only whether it is a server.",
      "Only whether it is internet-facing.",
    ],
    answer: 0,
    explanation:
      "Asset value comes from the business outcome or dependency it supports.",
  },
  {
    question:
      "What should a strong threat-event scenario include?",
    choices: [
      "Business context, harmful event, exposure condition, consequence, controls, and evidence.",
      "An exploit procedure.",
      "Only a vulnerability name.",
      "Only a numeric risk score.",
    ],
    answer: 0,
    explanation:
      "Risk scenarios should be decision-ready and business-focused.",
  },
  {
    question:
      "What does impact measure?",
    choices: [
      "The consequence to the organization if the scenario occurs.",
      "The probability of the scenario.",
      "The number of controls.",
      "The age of the system.",
    ],
    answer: 0,
    explanation:
      "Impact is about business consequence.",
  },
  {
    question:
      "What does likelihood measure?",
    choices: [
      "How plausible the scenario is under current conditions and evidence.",
      "How expensive the asset is.",
      "Whether the impact is severe.",
      "Whether the risk owner agrees with security.",
    ],
    answer: 0,
    explanation:
      "Likelihood is a reasoned estimate of plausibility, not a guarantee.",
  },
  {
    question:
      "Why should evidence freshness matter to likelihood reasoning?",
    choices: [
      "Because old evidence may no longer describe the current control or dependency state.",
      "Because old evidence is always wrong.",
      "Because likelihood should ignore controls.",
      "Because risk scores never change.",
    ],
    answer: 0,
    explanation:
      "Changing environments and control drift can make old evidence unreliable.",
  },
  {
    question:
      "What is concentration risk?",
    choices: [
      "Risk created when too much business capability depends on one provider, technology, location, or control.",
      "A type of password policy.",
      "A guarantee that a vendor will fail.",
      "A synonym for impact.",
    ],
    answer: 0,
    explanation:
      "Concentration risk focuses on dependency and lack of alternatives.",
  },
  {
    question:
      "Which statement about risk matrices is strongest?",
    choices: [
      "They can help prioritize, but they should not replace scenario, evidence, uncertainty, and ownership.",
      "They perfectly predict future incidents.",
      "They eliminate the need for business context.",
      "They are always more accurate than narrative analysis.",
    ],
    answer: 0,
    explanation:
      "Matrices simplify risk reasoning and should remain supported by evidence and explanation.",
  },
];

const checklistItems = [
  "Every risk scenario names a business service or asset.",
  "Business purpose and criticality are visible.",
  "Data and identity dependencies are included.",
  "Third-party dependencies are included where relevant.",
  "Threat event is written at a safe, high level.",
  "Exposure condition is explained without offensive detail.",
  "Impact is reasoned separately from likelihood.",
  "Confidentiality, integrity, and availability impacts are considered.",
  "Financial, legal, operational, safety, and reputational impacts are considered where relevant.",
  "Likelihood uses exposure, control strength, history, change, dependency, and evidence quality.",
  "Evidence source is named.",
  "Evidence freshness is recorded.",
  "Assumptions remain visible.",
  "Uncertainty remains visible.",
  "Control effect is explained.",
  "Dependency and concentration risk are considered.",
  "Risk matrix labels do not replace narrative reasoning.",
  "Review triggers are documented.",
  "Risk decision state is explicit.",
  "No scenario requires scanning, exploitation, credential access, or testing real organizations or suppliers.",
];

const takeaways = [
  "Risk starts with business services, assets, data, identities, people, and dependencies.",
  "Threat scenarios should describe what could happen and why it matters without teaching offensive procedures.",
  "Impact describes consequence; likelihood describes plausibility.",
  "Strong controls can reduce likelihood without changing how critical the underlying service is.",
  "Evidence quality and freshness should directly affect confidence.",
  "Dependency and concentration risk matter even when suppliers have strong controls.",
  "Uncertainty should remain visible instead of being hidden inside a score.",
  "Risk matrices are prioritization aids, not predictions.",
  "Change in data, ownership, architecture, supplier, or control state should reopen the analysis.",
  "The Risk Analysis Worksheet prepares you for A15.3 Risk Registers and Ownership.",
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

export default function AssetsThreatsImpactAndLikelihoodPage() {
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
              A15.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Risk Management and Compliance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A15.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Assets, Threats, Impact, and Likelihood
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Good risk analysis starts before the score. You need to understand
            what matters, what could happen, what the business consequence would
            be, how plausible the scenario is, and how strong the evidence
            behind that judgment really is.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional scenarios and safe business-risk
            evidence only. It does not teach or require scanning, exploitation,
            credential attacks, or testing of real systems or suppliers.
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
          lessonTitle="Assets, Threats, Impact, and Likelihood"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A15.2 Entry Readiness"
          items={[
            "I can define cybersecurity risk in business terms.",
            "I can distinguish inherent and residual risk.",
            "I understand that risk owners and control owners are different.",
            "I will use fictional scenarios and safe evidence only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Before You Rate Risk, Understand What the Organization Depends On"
        >
          <p className="leading-8">
            A highly protected database can still be critical. A trusted vendor
            can still create concentration risk. A severe scenario can still be
            unlikely. Risk analysis becomes useful when it separates these
            ideas instead of collapsing them into one number.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Strong risk reasoning connects assets, threat events, consequences, plausibility, controls, evidence, and uncertainty.
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
          eyebrow="Asset View"
          title="Risk Can Center on More Than Technology"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {assetClasses.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
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
          eyebrow="Threat Scenarios"
          title="Write Risk Scenarios That Explain the Business Problem"
        >
          <div className="grid gap-5">
            {threatScenarioElements.map((item, index) => (
              <article
                key={item.element}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.element}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.meaning}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Example: {item.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Impact"
          title="Impact Is the Business Consequence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {impactDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Low: {item.low}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Medium: {item.medium}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  High: {item.high}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Likelihood"
          title="Likelihood Is a Reasoned Estimate, Not a Prediction"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {likelihoodFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Likelihood Scale"
          title="Use Labels Carefully"
        >
          <div className="grid gap-5">
            {likelihoodScale.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.level}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Quality"
          title="Confidence Should Match the Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceQuality.map((item) => (
              <article
                key={item.quality}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.quality}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Confidence effect: {item.confidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Reasoning Principles"
          title="Eight Principles for Impact and Likelihood Analysis"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reasoningPrinciples.map((item) => (
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
          title="Risk Analysis Terms"
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
          eyebrow="Fictional Analysis Register"
          title="Six Northbridge Risk Analysis Worksheets"
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
                  {item.service}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Asset / service", item.asset],
                    ["Threat event", item.threatEvent],
                    ["Exposure condition", item.exposure],
                    ["Impact", item.impact],
                    ["Likelihood", item.likelihood],
                    ["Evidence", item.evidence],
                    ["Uncertainty", item.uncertainty],
                    ["Controls", item.controls],
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
          title="Northbridge Risk Analysis Dashboard"
          subtitle="Fictional impact, likelihood, evidence, and treatment summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Reporting Has High Impact and Medium-High Likelihood"
          severity="High"
          time="08:38"
          source="Fictional Risk Analysis Review"
          details="ANL-02 combines high business consequence with several current exposure conditions: broad legacy trust, incomplete ownership, aging platform dependencies, and incomplete modernization."
          recommendation="Keep the scenario in Treat, preserve uncertainty where evidence is incomplete, and use current control and remediation evidence to refresh likelihood over time."
        />

        <Section
          eyebrow="Impact vs. Likelihood"
          title="A Severe Scenario Can Still Be Unlikely"
        >
          <p className="leading-8">
            One of the most important risk-analysis habits is resisting the urge
            to make impact and likelihood move together. A critical service
            outage can have High impact and Low likelihood. A small recurring
            control failure can have Low impact and High likelihood. Both
            dimensions matter for different reasons.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">Impact asks</h3>
              <p className="mt-2 text-sm leading-7 text-red-100">
                “If this happens, what is the business consequence?”
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Likelihood asks</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                “How plausible is this under current exposure, controls,
                dependencies, history, and evidence?”
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Risk Analysis Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting Impact and Likelihood"
          question="What is the strongest interpretation of ANL-02?"
          evidence={[
            "Historical reports remain business-relevant and sensitive.",
            "Several legacy trust and ownership gaps remain open.",
            "A current exception and partial monitoring reduce some exposure.",
            "Modernization is incomplete.",
            "Several dependencies are still only partially mapped.",
          ]}
          options={[
            "High impact, Medium-High likelihood, with explicit uncertainty and active treatment.",
            "Low impact because compensating controls exist.",
            "Low likelihood because no major incident happened recently.",
            "Closed because a modernization exception is current.",
          ]}
          bestAnswer={0}
          explanation="The business consequence remains high, while multiple active exposure conditions support a Medium-High likelihood estimate. Partial evidence should remain visible as uncertainty."
        />

        <Section
          eyebrow="Common Analysis Mistakes"
          title="Eight Ways Impact and Likelihood Get Distorted"
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
          title="Scenario Decision Lab 1 — Legacy Risk With Partial Evidence"
          scenario="A legacy reporting service has several open control gaps, partial dependency evidence, and a current modernization exception."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Critical Supplier Concentration"
          scenario="A stable SaaS provider has strong evidence and contracts, but one critical business workflow has no practical alternative provider."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Risk Analysis Worksheet"
        >
          <p className="leading-8">
            Use fictional business services, assets, suppliers, threat events,
            impact reasoning, likelihood reasoning, controls, and evidence only.
            No real system testing is needed.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty fictional risk-analysis records.",
              "Give every record a stable ANL ID.",
              "Record the business service.",
              "Record the asset or dependency.",
              "Write a high-level threat event.",
              "Record the exposure condition.",
              "Analyze confidentiality impact where relevant.",
              "Analyze integrity impact where relevant.",
              "Analyze availability impact where relevant.",
              "Analyze financial/operational impact where relevant.",
              "Analyze legal/compliance impact where relevant.",
              "Analyze reputational impact where relevant.",
              "Assign an overall impact label with reasoning.",
              "Record current controls.",
              "Record control evidence.",
              "Record evidence freshness.",
              "Analyze exposure frequency.",
              "Analyze dependency or concentration.",
              "Analyze recent change.",
              "Analyze relevant history if available.",
              "Assign a likelihood label with reasoning.",
              "Record assumptions.",
              "Record uncertainty.",
              "Choose a decision state.",
              "Record what evidence would move likelihood higher.",
              "Record what evidence would move likelihood lower.",
              "Include at least four High-impact / Low-or-Medium-likelihood scenarios.",
              "Include at least three Medium-impact / High-likelihood scenarios.",
              "Include at least three third-party dependency scenarios.",
              "Include at least two scenarios with stale evidence.",
              "Include at least two scenarios with contradictory evidence.",
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
              Do not scan, probe, exploit, test, or investigate real systems,
              vendors, or people. Do not attempt to prove likelihood through
              unsafe testing. Use fictional and authorized evidence only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Supplier Concentration"
          question="What is the strongest interpretation of ANL-05?"
          evidence={[
            "The supplier supports a critical business workflow.",
            "The supplier has current security evidence and contract commitments.",
            "A continuity plan exists.",
            "No practical alternate provider is available today.",
            "A major provider outage would still have high business impact.",
          ]}
          options={[
            "High impact, Medium likelihood, with concentration risk requiring treatment.",
            "Low impact because the supplier is strong.",
            "High likelihood because every supplier eventually fails.",
            "Closed because a continuity plan exists.",
          ]}
          bestAnswer={0}
          explanation="Strong supplier controls reduce likelihood and uncertainty, but they do not eliminate high business consequence or concentration risk."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Risk Rating Method That Does Not Hide Uncertainty"
        >
          <p className="leading-8">
            Create a fictional organization-wide method for describing impact
            and likelihood without turning the result into fake precision.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Impact dimensions",
              "Likelihood factors",
              "Evidence freshness",
              "Assumption field",
              "Uncertainty field",
              "Dependency field",
              "Control-strength field",
              "Change trigger",
              "Third-party concentration",
              "Recovery dependency",
              "Business criticality",
              "Decision state",
              "Narrative rationale",
              "Score or matrix as optional summary",
              "Review cadence",
              "Leadership explanation",
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
            The strongest method should help reviewers compare risks without
            pretending that a label or score can perfectly predict the future.
          </p>
        </Section>

        <DefenderChecklist
          title="A15.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A15.2 Mini Quiz: Assets, Threats, Impact, and Likelihood"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Risk Analysis Worksheet"
          prompt="Create the second artifact for your A15 Risk Register and Leadership Recommendation: a fictional Risk Analysis Worksheet with at least twenty records. Include ANL ID, business service, asset/dependency, threat event, exposure condition, impact dimensions, overall impact, controls, evidence, freshness, likelihood factors, overall likelihood, assumptions, uncertainty, decision state, evidence that would raise likelihood, evidence that would lower likelihood, and review trigger."
          tips={[
            "Keep impact and likelihood separate.",
            "Use business consequences, not technical drama.",
            "Record evidence freshness.",
            "Preserve uncertainty.",
            "Include supplier and concentration risk.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A15.3?"
        >
          <p className="leading-8">
            A15.3 focuses on Risk Registers and Ownership. Before continuing,
            make sure you can explain a risk clearly enough that it can be
            entered into a professional register.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify business assets and dependencies.",
              "I can write a safe, high-level threat scenario.",
              "I can separate impact and likelihood.",
              "I can explain how evidence freshness changes confidence.",
              "I can document uncertainty instead of hiding it in a score.",
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
          title="How to Make the Risk Analysis Worksheet Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with business context",
                detail:
                  "Show what service, asset, data, user group, or supplier matters before describing the threat event.",
              },
              {
                title: "Make impact multidimensional",
                detail:
                  "Consider confidentiality, integrity, availability, financial, legal, operational, and reputational consequences where relevant.",
              },
              {
                title: "Explain likelihood",
                detail:
                  "Show exposure, controls, history, change, dependency, and evidence quality behind the label.",
              },
              {
                title: "Show uncertainty",
                detail:
                  "Record missing, partial, stale, or contradictory evidence explicitly.",
              },
              {
                title: "Show dependencies",
                detail:
                  "Include suppliers, identities, recovery, single points of failure, and concentration where relevant.",
              },
              {
                title: "Use scores carefully",
                detail:
                  "A score or matrix can summarize the result, but the narrative should remain the real analysis.",
              },
              {
                title: "Show change triggers",
                detail:
                  "New data, owner, supplier, architecture, control, incident, or evidence changes should reopen the estimate.",
              },
              {
                title: "Connect forward",
                detail:
                  "A15.3 will turn these worksheets into a structured Cybersecurity Risk Register with accountable ownership.",
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
            Likelihood reasoning does not require attacking real systems
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, exploit, test, or investigate real systems,
            vendors, accounts, or people. Do not collect credentials or private
            organizational evidence. All scenarios, suppliers, assets,
            controls, logs, and evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15.2 Assets, Threats, Impact, and Likelihood Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured way to analyze assets, threat events,
            business impact, likelihood, dependencies, evidence quality, and
            uncertainty. Next, A15.3 focuses on Risk Registers and Ownership.
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