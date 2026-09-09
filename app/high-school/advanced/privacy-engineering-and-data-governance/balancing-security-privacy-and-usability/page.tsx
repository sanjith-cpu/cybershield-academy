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
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;
const previousLesson = `${modulePath}/privacy-by-design-in-systems`;
const nextLesson = `${modulePath}/privacy-engineering-lab`;

const objectives = [
  "Explain why privacy, security, usability, accessibility, fraud prevention, operational reliability, and business value can create legitimate design tensions rather than simple right-versus-wrong choices.",
  "Evaluate fictional design options using business purpose, user impact, privacy risk, security risk, accessibility, implementation complexity, evidence confidence, and residual risk.",
  "Recognize weak decision patterns such as maximizing one goal while ignoring the others, using convenience as the only justification, or treating friction as proof that a control is effective.",
  "Recommend balanced design decisions that preserve essential security and privacy protections while reducing unnecessary friction, exclusion, overcollection, or operational burden.",
  "Build a Security-Privacy-Usability Decision Brief that becomes the ninth artifact in the A16 Privacy Engineering Review.",
];

const decisionDimensions = [
  {
    dimension: "Security",
    question:
      "Does the design adequately protect accounts, data, systems, and service integrity from unauthorized use or harmful change?",
    evidence:
      "Control design, authentication architecture, access review, incident history, threat model.",
    caution:
      "More friction is not automatically more secure.",
  },
  {
    dimension: "Privacy",
    question:
      "Does the design minimize unnecessary collection, sharing, retention, inference, and surprise while preserving legitimate purpose?",
    evidence:
      "Data inventory, minimization review, purpose map, retention design, privacy risk assessment.",
    caution:
      "A privacy goal should not blindly remove data that a required service genuinely needs.",
  },
  {
    dimension: "Usability",
    question:
      "Can intended users complete the legitimate task accurately and efficiently?",
    evidence:
      "Task flow, support data, usability testing, completion rate, error rate.",
    caution:
      "Convenience alone does not justify weakening important protections.",
  },
  {
    dimension: "Accessibility",
    question:
      "Can users with different abilities, devices, needs, and interaction methods use the design?",
    evidence:
      "Accessibility review, keyboard path, screen-reader behavior, recovery alternatives, readable interface.",
    caution:
      "A secure design that excludes legitimate users is not a complete design.",
  },
  {
    dimension: "Fraud / abuse resistance",
    question:
      "Can the system distinguish legitimate use from suspicious or abusive patterns without collecting more data than necessary?",
    evidence:
      "Synthetic abuse scenarios, fraud-control design, false-positive review, escalation data.",
    caution:
      "Fraud prevention can become an excuse for broad behavioral collection unless purpose and proportionality are reviewed.",
  },
  {
    dimension: "Operational reliability",
    question:
      "Can the organization operate, support, monitor, recover, and maintain the control consistently?",
    evidence:
      "Support workflow, recovery design, control ownership, service metrics, change process.",
    caution:
      "A control that is too complex to operate reliably may create new risk.",
  },
  {
    dimension: "Business value",
    question:
      "Does the design preserve the legitimate service outcome the organization needs?",
    evidence:
      "Business requirement, service objective, product decision, leadership priority.",
    caution:
      "Business value should be specific; “we might use the data later” is not enough.",
  },
  {
    dimension: "Evidence confidence",
    question:
      "How certain are we that the claimed benefits and risks are supported by current evidence?",
    evidence:
      "Current tests, synthetic user studies, architecture review, owner attestation, control evidence.",
    caution:
      "Low confidence should stay visible rather than being converted into false certainty.",
  },
];

const tradeoffPatterns = [
  {
    title: "Authentication strength vs user friction",
    tension:
      "Stronger verification can protect accounts but may increase failure, abandonment, or support burden.",
    balanced:
      "Use risk-appropriate authentication, accessible recovery, clear guidance, and stronger verification for higher-risk actions.",
    avoid:
      "Treating the hardest possible login flow as the most secure by default.",
  },
  {
    title: "Fraud detection vs data minimization",
    tension:
      "Fraud controls may benefit from additional signals, but broad data collection can create privacy risk.",
    balanced:
      "Use the smallest set of defensible signals, short retention where appropriate, narrow access, and false-positive review.",
    avoid:
      "Collecting every available behavioral signal because it may be useful someday.",
  },
  {
    title: "Analytics detail vs privacy",
    tension:
      "Detailed individual data can support analysis, but aggregate data may be enough for many business decisions.",
    balanced:
      "Use individual-level data only for bounded approved work and preserve aggregates for broader long-term reporting.",
    avoid:
      "Keeping detailed data indefinitely because aggregate reports were generated from it.",
  },
  {
    title: "Support context vs least privilege",
    tension:
      "Support staff need enough information to help users, but broad access can expose sensitive records.",
    balanced:
      "Give role-appropriate context, use escalation for exceptional cases, and separate highly sensitive details.",
    avoid:
      "Giving every support agent access to complete records for convenience.",
  },
  {
    title: "Transparency vs interface overload",
    tension:
      "Users need meaningful explanations, but too much text can make important information unreadable.",
    balanced:
      "Use concise just-in-time explanations with deeper detail available when needed.",
    avoid:
      "Hiding material practices in vague language to keep screens short.",
  },
  {
    title: "Strict session controls vs workflow continuity",
    tension:
      "Short sessions can reduce account exposure but may interrupt legitimate work.",
    balanced:
      "Use context-aware session design, stronger protection for sensitive actions, and safe reauthentication paths.",
    avoid:
      "Using one extreme timeout for every task and every device.",
  },
  {
    title: "Recovery security vs account accessibility",
    tension:
      "Account recovery must resist misuse while remaining possible for legitimate users.",
    balanced:
      "Use multiple safe recovery options, clear escalation, strong evidence, and avoid overreliance on one inaccessible method.",
    avoid:
      "Making recovery impossible for users who cannot access one specific channel.",
  },
  {
    title: "Observability vs sensitive logging",
    tension:
      "Teams need enough evidence to detect problems and prove controls, but logs can become another sensitive dataset.",
    balanced:
      "Record necessary metadata, status, IDs, counts, and decision evidence without copying unnecessary sensitive content.",
    avoid:
      "Logging full personal records because it makes debugging easier.",
  },
];

const decisionEvidence = [
  {
    evidence: "User task completion",
    use:
      "Shows whether legitimate users can complete the intended workflow.",
    caution:
      "High completion does not prove security or privacy is adequate.",
  },
  {
    evidence: "False-positive rate",
    use:
      "Shows how often a fraud or security control incorrectly blocks legitimate activity.",
    caution:
      "Low false positives do not prove the control catches enough harmful activity.",
  },
  {
    evidence: "Support burden",
    use:
      "Shows whether a design creates repeated recovery, access, or confusion problems.",
    caution:
      "Support burden should not be solved by removing necessary security safeguards without analysis.",
  },
  {
    evidence: "Privacy risk",
    use:
      "Shows how collection, sharing, retention, inference, and expectations affect people and the organization.",
    caution:
      "Privacy risk should be based on actual system behavior and evidence.",
  },
  {
    evidence: "Security risk",
    use:
      "Shows how threats, control gaps, account misuse, unauthorized access, or integrity issues could affect the service.",
    caution:
      "Security risk should be evaluated alongside user impact and operational feasibility.",
  },
  {
    evidence: "Accessibility findings",
    use:
      "Shows whether users can perceive, understand, navigate, and complete the workflow using different interaction methods.",
    caution:
      "Accessibility should be part of core design, not a late exception.",
  },
  {
    evidence: "Operational reliability",
    use:
      "Shows whether the organization can consistently operate, monitor, and recover the control.",
    caution:
      "A theoretically strong control can still fail if ownership and operations are weak.",
  },
  {
    evidence: "Business criticality",
    use:
      "Shows how important the feature is to the service outcome and what disruption would mean.",
    caution:
      "Criticality can justify resilience investment, not unlimited data collection.",
  },
];

const decisionOptions = [
  {
    option: "Keep current design",
    when:
      "Evidence shows the design already meets security, privacy, usability, accessibility, and business needs at an acceptable residual risk.",
    risk:
      "Teams may choose this too quickly because change is inconvenient.",
  },
  {
    option: "Reduce friction",
    when:
      "The current control creates unnecessary user or support burden without meaningfully reducing risk.",
    risk:
      "Reducing friction must not remove protections that are still necessary.",
  },
  {
    option: "Increase protection",
    when:
      "The current design underprotects a materially sensitive or high-impact action.",
    risk:
      "Use targeted protection instead of adding maximum friction everywhere.",
  },
  {
    option: "Minimize data",
    when:
      "The design collects, shares, or retains more data than the balanced purpose requires.",
    risk:
      "Confirm that legitimate security, fraud, support, and operational needs remain supported.",
  },
  {
    option: "Separate workflows",
    when:
      "High-risk actions need stronger controls than normal low-risk activity.",
    risk:
      "Too many separate flows can become confusing unless the distinction is meaningful.",
  },
  {
    option: "Add accessible alternative",
    when:
      "One security or privacy mechanism excludes legitimate users.",
    risk:
      "Alternative paths must remain secure and governed rather than becoming uncontrolled bypasses.",
  },
  {
    option: "Pilot and measure",
    when:
      "Evidence is incomplete and the organization can safely evaluate a bounded fictional or staged design.",
    risk:
      "A pilot should have clear success measures and should not become permanent by inertia.",
  },
  {
    option: "Block pending redesign",
    when:
      "The current option creates unacceptable risk or lacks sufficient evidence to proceed.",
    risk:
      "Blocking should include a path to resolution, owner, and decision criteria.",
  },
];

const decisionBriefFields = [
  {
    field: "BAL ID",
    purpose:
      "Stable identifier for the balanced-design decision.",
    example:
      "BAL-901",
  },
  {
    field: "Decision",
    purpose:
      "States the concrete product, privacy, or security choice.",
    example:
      "Redesign account recovery for stronger security and accessibility",
  },
  {
    field: "Business purpose",
    purpose:
      "Explains what legitimate service outcome must be preserved.",
    example:
      "Allow authorized users to regain access safely",
  },
  {
    field: "Security effect",
    purpose:
      "Explains how each option changes security risk.",
    example:
      "Stronger evidence for high-risk recovery",
  },
  {
    field: "Privacy effect",
    purpose:
      "Explains how each option changes data collection, sharing, retention, or inference.",
    example:
      "Avoid collecting broad identity data for routine recovery",
  },
  {
    field: "Usability effect",
    purpose:
      "Explains user effort, completion, confusion, or support impact.",
    example:
      "Reduces failure for users without one specific device",
  },
  {
    field: "Accessibility effect",
    purpose:
      "Explains whether the design works for varied user needs.",
    example:
      "Provides equivalent keyboard and assistive-technology paths",
  },
  {
    field: "Operational effect",
    purpose:
      "Shows staffing, support, monitoring, and maintenance implications.",
    example:
      "Adds reviewed escalation queue",
  },
  {
    field: "Evidence confidence",
    purpose:
      "Shows how strongly current evidence supports the recommendation.",
    example:
      "Moderate",
  },
  {
    field: "Residual risk",
    purpose:
      "Shows what remains after the proposed balance.",
    example:
      "Moderate-Low",
  },
  {
    field: "Owner",
    purpose:
      "Names the accountable product, business, or data role.",
    example:
      "Identity Product Owner",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines what should reopen the decision.",
    example:
      "Fraud increase, recovery failures, accessibility regression, new sensitive data",
  },
];

const northbridgeRecords = [
  {
    id: "BAL-901",
    decision:
      "Support account recovery design",
    purpose:
      "Allow legitimate users to recover access while resisting unauthorized recovery.",
    current:
      "Recovery depends heavily on one communication channel and creates a high support burden for users who cannot access it.",
    security:
      "Current design is strong against simple misuse but brittle in exceptional cases.",
    privacy:
      "Adding broad identity data would increase unnecessary collection.",
    usability:
      "High failure for users without the original channel.",
    accessibility:
      "Limited alternatives create unequal access.",
    operations:
      "Support teams spend significant time on manual exceptions.",
    recommendation:
      "Add a governed alternative recovery path with strong evidence, clear escalation, and no broad new identity-data collection.",
    confidence:
      "Moderate",
    residual:
      "Moderate-Low",
    owner:
      "Identity Product Owner",
    state:
      "Redesign",
  },
  {
    id: "BAL-902",
    decision:
      "Partner scheduling field scope",
    purpose:
      "Complete appointment scheduling with an approved external partner.",
    current:
      "Eight profile fields are shared while four support the validated purpose.",
    security:
      "Encrypted transport is current.",
    privacy:
      "Extra fields create unnecessary external exposure.",
    usability:
      "Reducing the payload does not materially affect the user task.",
    accessibility:
      "No significant change.",
    operations:
      "A narrow schema slightly increases interface-maintenance discipline.",
    recommendation:
      "Use the four-field purpose-specific interface and review future field additions individually.",
    confidence:
      "High",
    residual:
      "Low-Moderate after supplier lifecycle evidence improves",
    owner:
      "Integration Product Owner",
    state:
      "Minimize",
  },
  {
    id: "BAL-903",
    decision:
      "Learning analytics retention",
    purpose:
      "Support long-term program trends and bounded detailed analysis.",
    current:
      "Individual-level events are retained for the same period as long-term aggregate trends.",
    security:
      "Restricted analytics access is strong.",
    privacy:
      "Long individual retention creates unnecessary historical exposure.",
    usability:
      "Analysts need detailed data only during approved projects.",
    accessibility:
      "No direct user-interface effect.",
    operations:
      "Separate lifecycle rules require stronger workspace automation.",
    recommendation:
      "Keep aggregate trends longer and use bounded retention for individual-level project data.",
    confidence:
      "High",
    residual:
      "Low-Moderate after lifecycle standardization",
    owner:
      "Learning Analytics Owner",
    state:
      "Redesign",
  },
  {
    id: "BAL-904",
    decision:
      "Individual engagement indicator",
    purpose:
      "Current approved goal is aggregate program improvement.",
    current:
      "The platform can create individual engagement indicators even though the current business goal does not require them.",
    security:
      "Access can be restricted, but the derived value remains sensitive.",
    privacy:
      "Unnecessary individual inference creates high privacy concern.",
    usability:
      "Removing the indicator does not reduce the aggregate reporting experience.",
    accessibility:
      "No direct effect.",
    operations:
      "Aggregate reporting is simpler to govern.",
    recommendation:
      "Keep persistent individual inference blocked for the current purpose and use aggregate trends.",
    confidence:
      "High",
    residual:
      "Low if individual inference remains disabled",
    owner:
      "Learning Analytics Data Owner",
    state:
      "Block / Minimize",
  },
  {
    id: "BAL-905",
    decision:
      "Support case-note access",
    purpose:
      "Give authorized support staff enough context to resolve cases.",
    current:
      "Narrow role access is effective, but some teams request full-note access for convenience.",
    security:
      "Broadening access increases exposure.",
    privacy:
      "Sensitive contextual records should remain purpose-limited.",
    usability:
      "Some support cases require escalation for additional context.",
    accessibility:
      "No direct user-interface effect.",
    operations:
      "Tiered access adds a small escalation step.",
    recommendation:
      "Keep narrow default access and use governed escalation for exceptional cases.",
    confidence:
      "High",
    residual:
      "Moderate due to inherent note sensitivity",
    owner:
      "Student Services Data Owner",
    state:
      "Monitor",
  },
  {
    id: "BAL-906",
    decision:
      "Temporary research closeout",
    purpose:
      "Support a six-week research project while preventing long-lived temporary copies.",
    current:
      "Manual closeout can leave workspaces unresolved.",
    security:
      "Restricted workspace access is strong during the project.",
    privacy:
      "Post-project persistence creates unnecessary risk.",
    usability:
      "Researchers need a short closeout window to finish documentation.",
    accessibility:
      "No significant effect.",
    operations:
      "Automated expiry improves consistency but needs an exception process.",
    recommendation:
      "Use automated expiry with a short closeout window and a documented extension path.",
    confidence:
      "High",
    residual:
      "Low-Moderate until closeout evidence arrives",
    owner:
      "Research Program Owner",
    state:
      "Conditional",
  },
  {
    id: "BAL-907",
    decision:
      "Support quality dashboard drill-down",
    purpose:
      "Help leaders understand service demand and response performance.",
    current:
      "Aggregate reporting meets the leadership need; individual drill-down is disabled.",
    security:
      "Aggregate access is low risk under current design.",
    privacy:
      "Individual drill-down would increase privacy exposure.",
    usability:
      "Leaders can make staffing decisions from aggregate trends.",
    accessibility:
      "Current dashboard supports the required interaction patterns.",
    operations:
      "Aggregate reporting is simpler to maintain.",
    recommendation:
      "Keep aggregate-only reporting and require a fresh review before any individual drill-down.",
    confidence:
      "High",
    residual:
      "Low",
    owner:
      "Operations Analytics Owner",
    state:
      "Monitor",
  },
];

const dashboardMetrics = [
  {
    label: "Balanced decisions",
    value: "7",
    note: "Recovery, partner, analytics, inference, support, research, and dashboard decisions",
  },
  {
    label: "Redesign / Minimize",
    value: "4",
    note: "Recovery, partner scope, analytics retention, and individual inference need design change",
  },
  {
    label: "Monitor / Conditional",
    value: "3",
    note: "Support access, research closeout, and aggregate dashboard remain bounded",
  },
  {
    label: "High confidence",
    value: "6",
    note: "Most decisions are supported by clear business, privacy, and system evidence",
  },
];

const logs = [
  "[08:11] BAL-901 decision=ACCOUNT_RECOVERY security=STRONG usability=WEAK accessibility=WEAK action=REDESIGN",
  "[08:33] BAL-902 decision=PARTNER_SCOPE privacy=OVERBROAD usability_impact=LOW action=MINIMIZE",
  "[08:55] BAL-903 decision=ANALYTICS_RETENTION aggregate_need=LONG raw_need=BOUNDED action=REDESIGN",
  "[09:17] BAL-904 decision=INDIVIDUAL_INFERENCE business_need=NO privacy_risk=HIGH action=BLOCK",
  "[09:39] BAL-905 decision=CASE_NOTE_ACCESS access=NARROW support_escalation=AVAILABLE state=MONITOR",
  "[10:01] BAL-906 decision=RESEARCH_CLOSEOUT automation=YES exception_path=REQUIRED state=CONDITIONAL",
  "[10:23] BAL-907 decision=DASHBOARD_DRILLDOWN aggregate_sufficient=TRUE state=MONITOR",
];

const antiPatterns = [
  {
    title: "Maximum security everywhere",
    problem:
      "The design adds the strongest possible friction to every action regardless of risk.",
    better:
      "Use stronger protection where the action, data, or context actually justifies it.",
  },
  {
    title: "Convenience wins automatically",
    problem:
      "A user-friendly path is chosen even though it exposes unnecessary data or weakens important controls.",
    better:
      "Reduce unnecessary friction without removing protections that remain necessary.",
  },
  {
    title: "Privacy means no data",
    problem:
      "The team removes data so aggressively that a legitimate service, accessibility need, or security control stops working.",
    better:
      "Minimize to the amount actually needed for the legitimate purpose.",
  },
  {
    title: "Fraud prevention means collect everything",
    problem:
      "The organization accumulates broad behavioral data without proving necessity or proportionality.",
    better:
      "Use bounded, purpose-specific signals with short retention and review.",
  },
  {
    title: "Accessibility handled as an exception",
    problem:
      "The main control path excludes some legitimate users and forces them into an ad hoc support process.",
    better:
      "Design equivalent accessible paths as part of the control from the start.",
  },
  {
    title: "Friction used as evidence",
    problem:
      "The team assumes a difficult workflow must be effective because users struggle with it.",
    better:
      "Measure the actual risk reduction, false positives, completion, and support burden.",
  },
  {
    title: "One metric decides the design",
    problem:
      "The team optimizes only for fraud rate, conversion, completion, privacy score, or support cost.",
    better:
      "Use multiple dimensions and make tradeoffs explicit.",
  },
  {
    title: "Tradeoff never revisited",
    problem:
      "A design decision stays unchanged after risk, user needs, suppliers, data, or evidence change.",
    better:
      "Define review triggers and reassess material change.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Add a governed alternative recovery path with strong evidence and escalation while avoiding broad new identity-data collection.",
    outcome:
      "Best. The design improves accessibility and usability without turning recovery into a weak or overcollecting path.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Require the original communication channel for every user because the most restrictive path is always more secure.",
    outcome:
      "Risky. This can exclude legitimate users and create brittle support work without proving the best risk reduction.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove verification entirely so recovery is easy.",
    outcome:
      "Risky. That reduces legitimate security protection too far.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep narrow default access to support notes and provide a governed escalation path for the small number of cases that need more context.",
    outcome:
      "Best. The design preserves privacy and security while still supporting legitimate operational needs.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Give every support agent full access so no case ever needs escalation.",
    outcome:
      "Risky. Convenience does not justify broad access to sensitive records.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Hide all case notes from support staff.",
    outcome:
      "Caution. That protects privacy but breaks the legitimate support purpose.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest way to think about security, privacy, and usability tradeoffs?",
    choices: [
      "Treat them as design dimensions that should be balanced against purpose, evidence, user impact, accessibility, operations, and residual risk.",
      "Always maximize security friction.",
      "Always maximize convenience.",
      "Always minimize data regardless of business need.",
    ],
    answer: 0,
    explanation:
      "Balanced design preserves necessary protections while avoiding unnecessary harm or friction.",
  },
  {
    question:
      "What does a high false-positive rate tell you about a fraud or security control?",
    choices: [
      "The control may be blocking too many legitimate users and should be reviewed alongside its actual risk-reduction benefit.",
      "The control is automatically strong.",
      "Privacy does not matter.",
      "The design should collect more data without review.",
    ],
    answer: 0,
    explanation:
      "False positives are an important usability and operational signal, not proof that a control is effective.",
  },
  {
    question:
      "What is strongest when aggregate analytics meets the business need?",
    choices: [
      "Use aggregate reporting broadly and keep detailed individual-level data only for bounded approved work.",
      "Keep all detailed data forever.",
      "Delete every aggregate.",
      "Share raw data with more teams.",
    ],
    answer: 0,
    explanation:
      "The design can preserve business value with lower individual-level exposure.",
  },
  {
    question:
      "Why should accessibility be part of security design?",
    choices: [
      "A control is incomplete if legitimate users cannot reasonably perceive, operate, or recover through it.",
      "Accessibility makes security weaker.",
      "Accessibility only matters after launch.",
      "Accessible alternatives should bypass all verification.",
    ],
    answer: 0,
    explanation:
      "Strong controls should include safe, equivalent paths for varied user needs.",
  },
  {
    question:
      "What is strongest for support access to sensitive case notes?",
    choices: [
      "Keep narrow default access and use governed escalation for exceptional cases.",
      "Give every agent full access for convenience.",
      "Give no support staff any access.",
      "Copy all notes into a general dashboard.",
    ],
    answer: 0,
    explanation:
      "Tiered access can balance privacy with legitimate support operations.",
  },
  {
    question:
      "Why is more friction not automatically more security?",
    choices: [
      "Friction can create workarounds, failures, exclusion, and support burden without necessarily reducing the relevant risk.",
      "Security controls should never add friction.",
      "Friction only affects privacy.",
      "Friction proves users are authenticated.",
    ],
    answer: 0,
    explanation:
      "Control effectiveness should be measured by risk reduction, not difficulty alone.",
  },
  {
    question:
      "When should a balanced design decision be reassessed?",
    choices: [
      "After material changes to risk, data, suppliers, user needs, accessibility findings, control performance, or business purpose.",
      "Never after approval.",
      "Only after an incident.",
      "Only when the interface colors change.",
    ],
    answer: 0,
    explanation:
      "Tradeoffs depend on current context and evidence.",
  },
];

const checklistItems = [
  "The legitimate business purpose is explicit.",
  "Security effect is documented.",
  "Privacy effect is documented.",
  "Usability effect is documented.",
  "Accessibility effect is documented.",
  "Fraud or abuse considerations are documented where relevant.",
  "Operational impact is documented.",
  "Business value is documented.",
  "Evidence confidence is stated.",
  "False positives are considered where relevant.",
  "User completion or support burden is considered where relevant.",
  "Data minimization is considered.",
  "Alternative accessible paths are considered.",
  "High-risk actions are distinguished from routine actions.",
  "Residual privacy risk is documented.",
  "Residual security risk is documented.",
  "Accountable owner is named.",
  "Decision authority is clear.",
  "Review triggers are defined.",
  "All scenarios remain fictional or synthetic.",
];

const takeaways = [
  "Security, privacy, usability, accessibility, operations, and business value can create legitimate design tensions.",
  "The strongest decision is rarely “maximize one dimension regardless of the others.”",
  "More friction is not automatically more secure.",
  "Convenience does not justify unnecessary data exposure.",
  "Accessibility belongs inside the main security and privacy design.",
  "Aggregate data can preserve business value with less individual-level exposure.",
  "Fraud prevention should use purpose-specific, proportionate signals rather than unlimited collection.",
  "Tiered controls can protect sensitive actions without burdening every routine task equally.",
  "Balanced decisions should show evidence confidence and residual risk.",
  "The Security-Privacy-Usability Decision Brief prepares you for A16.10 Privacy Engineering Lab.",
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
        Module A16
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

export default function BalancingSecurityPrivacyAndUsabilityPage() {
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
              A16.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Balancing Security, Privacy, and Usability
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Professional design is rarely about maximizing one goal. This
            lesson examines how teams make evidence-based tradeoffs when
            security, privacy, fraud prevention, usability, accessibility,
            support, operations, and business value pull a system in different
            directions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All users, systems, metrics, support scenarios, design options, and
            evidence in this lesson are fictional or synthetic.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A16: Privacy Engineering and Data Governance"
          lessonTitle="Balancing Security, Privacy, and Usability"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.9 Entry Readiness"
          items={[
            "I can explain a fictional system's privacy and security controls.",
            "I can identify the legitimate user task the system must preserve.",
            "I can distinguish control strength from user friction.",
            "I will use only fictional or synthetic design evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Control Is Not Successful If Legitimate Users Cannot Use the Service"
        >
          <p className="leading-8">
            Security, privacy, and usability are often treated as competitors.
            In strong engineering, they are design constraints that must be
            reasoned about together. A secure but unusable recovery system can
            create support workarounds. A convenient integration can expose too
            much data. A privacy-maximized design can fail if it removes data
            the legitimate service truly needs.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Balanced design asks which protections are necessary, which friction is justified, and which risks remain after the tradeoff.
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
          eyebrow="Decision Dimensions"
          title="Eight Dimensions That Shape a Balanced Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Design Tensions"
          title="Tradeoffs That Require Judgment Rather Than a Single Formula"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tradeoffPatterns.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Tension: {item.tension}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Balanced approach: {item.balanced}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Avoid: {item.avoid}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence"
          title="What Should Support a Tradeoff Decision?"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionEvidence.map((item) => (
              <article
                key={item.evidence}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.evidence}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Use: {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Options"
          title="Balanced Decisions Need Real Alternatives"
        >
          <p className="leading-8">
            A professional decision brief should not compare a reasonable
            design against obviously bad choices. Strong analysis compares
            realistic options and explains how each changes risk, friction,
            accessibility, cost, and business value.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {decisionOptions.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.option}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Good fit: {item.when}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Watch for: {item.risk}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Authentication and Recovery"
          title="Security Strength Should Match the Action"
        >
          <p className="leading-8">
            Not every action carries the same risk. Viewing a low-sensitivity
            preference is different from changing a recovery method or
            authorizing a sensitive data export. Balanced design can apply
            stronger controls to higher-risk actions while keeping routine
            actions efficient.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Routine action",
                detail:
                  "Use appropriate baseline protection without unnecessary repeated friction.",
              },
              {
                title: "Sensitive action",
                detail:
                  "Use stronger reauthentication, confirmation, or approval when the consequence justifies it.",
              },
              {
                title: "Recovery action",
                detail:
                  "Use strong evidence and accessible alternatives because recovery is both high-impact and essential.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Accessibility"
          title="Accessible Alternatives Should Be Designed, Not Improvised"
        >
          <p className="leading-8">
            Accessibility is not a permission to weaken controls. It is a
            requirement to design equivalent safe paths. If one authentication
            or recovery method is not usable by every legitimate user, the
            alternative should still be governed, documented, and protected.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Equivalent path",
                detail:
                  "The alternative should achieve the same security goal through a different usable method.",
              },
              {
                title: "Clear escalation",
                detail:
                  "Exceptional cases should have a defined support or review path instead of informal bypass.",
              },
              {
                title: "No hidden penalty",
                detail:
                  "Users should not lose unrelated core functionality because they need an accessible method.",
              },
              {
                title: "Evidence",
                detail:
                  "Measure whether the accessible path works for legitimate users and remains secure.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Brief Anatomy"
          title="What a Professional Balanced-Design Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionBriefFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Decision Brief"
          title="Seven Northbridge Security-Privacy-Usability Decisions"
        >
          <div className="grid gap-5">
            {northbridgeRecords.map((item) => (
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
                  {item.decision}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Business purpose", item.purpose],
                    ["Current design", item.current],
                    ["Security effect", item.security],
                    ["Privacy effect", item.privacy],
                    ["Usability effect", item.usability],
                    ["Accessibility effect", item.accessibility],
                    ["Operational effect", item.operations],
                    ["Recommendation", item.recommendation],
                    ["Evidence confidence", item.confidence],
                    ["Residual risk", item.residual],
                    ["Owner", item.owner],
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
          title="Northbridge Balanced Design Dashboard"
          subtitle="Fictional security, privacy, usability, accessibility, operations, and residual-risk summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Account Recovery Is Secure but Too Brittle for Legitimate Users"
          severity="High"
          time="08:11"
          source="Fictional Balanced Design Review"
          details="BAL-901 relies heavily on one recovery channel. The current path resists simple misuse, but legitimate users who lose access to that channel face high failure and support escalation. Adding broad identity-data collection would create a separate privacy problem."
          recommendation="Add a governed alternative recovery path with strong evidence and escalation while avoiding unnecessary new identity-data collection."
        />

        <FakeLogPanel
          title="Fictional Balanced Design Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Account Recovery"
          question="What is the strongest current recommendation for BAL-901?"
          evidence={[
            "The current recovery path depends heavily on one communication channel.",
            "Users who cannot access that channel have a high failure rate.",
            "Manual support exceptions are common.",
            "The current proposal would collect several new identity attributes from every user.",
            "A governed alternative recovery path can use stronger evidence only when needed.",
          ]}
          options={[
            "Add a governed alternative recovery path with strong evidence and escalation, without broad new identity-data collection.",
            "Keep the current design because more friction always means more security.",
            "Remove verification from recovery.",
            "Collect every available identity attribute from all users just in case recovery is needed.",
          ]}
          bestAnswer={0}
          explanation="The strongest design improves accessibility and operational reliability while keeping recovery protected and avoiding unnecessary data collection."
        />

        <Section
          eyebrow="Common Tradeoff Mistakes"
          title="Eight Ways Balanced Decisions Become One-Dimensional"
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
          title="Scenario Decision Lab 1 — Accessible Account Recovery"
          scenario="A recovery flow is resistant to simple misuse but depends on one communication channel. Legitimate users who lose access to that channel are frequently locked out, and support teams rely on manual exceptions."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Support Context vs Least Privilege"
          scenario="Most support cases can be solved with a limited set of case details, but a small number need deeper context. A manager proposes giving every support agent complete case-note access to avoid escalation."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Security-Privacy-Usability Decision Brief"
        >
          <p className="leading-8">
            Compare realistic design options for fictional product decisions and
            show how each option changes security, privacy, usability,
            accessibility, operational reliability, business value, and
            residual risk.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional balanced-design records.",
              "Give every record a stable BAL ID.",
              "Link each decision to relevant PBD, PRA, or GOV IDs.",
              "Name the product, service, feature, or architecture decision.",
              "Write the legitimate business purpose.",
              "Describe the current design.",
              "Identify the main security concern.",
              "Identify the main privacy concern.",
              "Identify the main usability concern.",
              "Identify the main accessibility concern.",
              "Identify any fraud or abuse concern.",
              "Identify operational or support impact.",
              "Identify the business-value requirement.",
              "Record current evidence.",
              "Rate evidence confidence.",
              "Compare at least three realistic design options.",
              "Record security impact for each option.",
              "Record privacy impact for each option.",
              "Record usability impact for each option.",
              "Record accessibility impact for each option.",
              "Record operational impact for each option.",
              "Record implementation complexity.",
              "Choose a recommendation.",
              "Record residual privacy risk.",
              "Record residual security risk.",
              "Name the accountable owner.",
              "Define a milestone or decision date.",
              "Define review triggers.",
              "Define closure evidence.",
              "Include at least five authentication or recovery decisions.",
              "Include at least five analytics or data-minimization tradeoffs.",
              "Include at least five access or support-workflow tradeoffs.",
              "Include at least three supplier or integration decisions.",
              "Include at least three accessibility-focused decisions.",
              "Include at least three fraud-prevention decisions.",
              "Include at least three logging or observability decisions.",
              "Include at least three decisions where reducing friction is appropriate.",
              "Include at least three decisions where stronger protection is appropriate.",
              "Include at least three decisions where the strongest choice is to keep the current design.",
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
              Use fictional users, systems, account flows, metrics, support
              records, and evidence only. Do not test real accounts, collect
              real behavioral data, access private systems, or attempt to
              bypass real authentication or recovery controls.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Support Note Access"
          question="What is the strongest balanced design for BAL-905?"
          evidence={[
            "Most support cases can be resolved with the current narrow-access view.",
            "A small number of cases require additional sensitive context.",
            "Full-note access would expose more sensitive information to every support role.",
            "A governed escalation path can provide additional context when justified.",
            "The current escalation adds a small operational delay.",
          ]}
          options={[
            "Keep narrow default access and use governed escalation for exceptional cases.",
            "Give every support agent full case-note access.",
            "Remove all case-note access from support staff.",
            "Copy complete notes into the general support dashboard.",
          ]}
          bestAnswer={0}
          explanation="The narrow default with governed escalation preserves legitimate support capability while reducing unnecessary sensitive-data exposure."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Balanced Decision Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for resolving product
            and architecture tradeoffs without turning privacy, security, or
            usability into an automatic winner.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Business-purpose statement",
              "Security impact",
              "Privacy impact",
              "Usability impact",
              "Accessibility impact",
              "Fraud / abuse impact",
              "Operational impact",
              "Business-value impact",
              "Evidence confidence",
              "False-positive analysis",
              "Support burden",
              "Data minimization",
              "Alternative paths",
              "Implementation complexity",
              "Residual privacy risk",
              "Residual security risk",
              "Accountable owner",
              "Decision authority",
              "Review triggers",
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
            The standard should require thoughtful comparison of realistic
            options rather than forcing every decision into one universal
            formula.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.9 Mini Quiz: Balancing Security, Privacy, and Usability"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Security-Privacy-Usability Decision Brief"
          prompt="Create the ninth artifact for your A16 Privacy Engineering Review: a fictional Security-Privacy-Usability Decision Brief with at least twenty-five records. Include BAL ID, linked PBD/PRA/GOV IDs, decision, business purpose, current design, security concern, privacy concern, usability concern, accessibility concern, fraud/abuse concern where relevant, operational impact, business-value requirement, evidence, evidence confidence, at least three realistic design options, security/privacy/usability/accessibility/operational impact for each option, implementation complexity, recommendation, residual privacy risk, residual security risk, accountable owner, milestone, review triggers, and closure evidence."
          tips={[
            "Compare realistic options, not obvious straw-man choices.",
            "Treat accessibility as a core design dimension.",
            "Use evidence rather than assuming more friction is more secure.",
            "Do not let convenience justify unnecessary data exposure.",
            "Keep residual privacy and security risk visible.",
            "Use fictional or synthetic evidence only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.10?"
        >
          <p className="leading-8">
            A16.10 is the Privacy Engineering Lab. Before continuing, make sure
            you can combine privacy principles, data inventory, minimization,
            consent, retention, risk, governance, architecture, and balanced
            decision-making into one leadership-ready review.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can evaluate a design across security, privacy, usability, accessibility, operations, and business value.",
              "I can explain why stronger friction is not automatically stronger security.",
              "I can design accessible alternatives without removing necessary controls.",
              "I can compare realistic options and explain residual risk.",
              "I can make a balanced recommendation using evidence rather than one metric.",
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
          title="How to Make the Security-Privacy-Usability Decision Brief Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "State the real decision",
                detail:
                  "Do not write a generic topic. Name the exact product, control, data, or architecture choice.",
              },
              {
                title: "Show the legitimate purpose",
                detail:
                  "A balanced decision must preserve the service outcome that actually matters.",
              },
              {
                title: "Compare realistic alternatives",
                detail:
                  "Strong analysis shows meaningful choices with different benefits and tradeoffs.",
              },
              {
                title: "Use multiple evidence types",
                detail:
                  "Combine risk evidence, user impact, support burden, accessibility, and business need.",
              },
              {
                title: "Show confidence",
                detail:
                  "Do not present weak or incomplete evidence as certainty.",
              },
              {
                title: "Show residual risk",
                detail:
                  "A balanced design can still leave privacy and security risk that requires monitoring.",
              },
              {
                title: "Show ownership",
                detail:
                  "Name the role accountable for the final decision and the trigger for reassessment.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.10 will combine this decision brief with all earlier A16 artifacts into the final Privacy Engineering Review.",
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
            Tradeoff exercises use fictional systems, users, and metrics only
          </h2>
          <p className="mt-3 leading-7">
            Do not test real accounts, authentication systems, recovery flows,
            private records, behavioral data, fraud systems, or confidential
            support tools. Do not attempt to bypass real controls. All design
            evidence and scenarios in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.9 Balancing Security, Privacy, and Usability Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for balancing security, privacy,
            usability, accessibility, fraud resistance, operations, and
            business value using evidence and residual risk. Next, A16.10 is the
            Privacy Engineering Lab.
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