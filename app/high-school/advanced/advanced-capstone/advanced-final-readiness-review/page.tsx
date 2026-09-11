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

const modulePath = "/high-school/advanced/advanced-capstone";
const previousLesson = `${modulePath}/final-portfolio-submission`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Evaluate readiness across the full Advanced Track by testing whether major cybersecurity concepts can be applied together rather than recalled as isolated definitions.",
  "Identify high-confidence, medium-confidence, and review-needed domains using evidence from the Advanced Capstone Portfolio Submission, prior module work, and targeted self-checks.",
  "Recognize recurring Advanced reasoning patterns involving scope, evidence quality, source health, identity, architecture, monitoring, incident response, cloud, risk, privacy, recovery, governance, and communication.",
  "Create a targeted final-review plan that prioritizes weak decision-making patterns instead of rereading the entire Advanced Track without focus.",
  "Prepare for the A20 Module Test and the later Advanced Practice Tests and Final Test using safe, ethical, scenario-based reasoning and disciplined answer selection.",
];

const readinessDomains = [
  {
    domain: "Architecture and dependencies",
    readyMeans:
      "I can explain mission, assets, identities, service flows, trust boundaries, concentration dependencies, degraded states, controls, and recovery paths.",
    commonWeakness:
      "Treating a diagram as proof of current implementation or ignoring shared dependencies.",
    capstoneEvidence:
      "A20.3 Architecture and Threat Model Decision Pack.",
    finalQuestion:
      "Can I explain why one architecture relationship changes a monitoring, identity, recovery, or risk decision?",
  },
  {
    domain: "Threat modeling",
    readyMeans:
      "I can write bounded threat statements connecting a plausible condition to an affected asset or outcome, controls, evidence, and uncertainty.",
    commonWeakness:
      "Calling every concern a confirmed vulnerability or assuming malicious intent.",
    capstoneEvidence:
      "A20.3 bounded threat statements and validation needs.",
    finalQuestion:
      "Can I distinguish a plausible threat condition from evidence that an incident actually occurred?",
  },
  {
    domain: "Identity and access",
    readyMeans:
      "I can distinguish authentication, authorization, approval, purpose, privilege, ownership, lifecycle, and action-level evidence for human and workload identities.",
    commonWeakness:
      "Treating successful authentication as proof that every action was authorized.",
    capstoneEvidence:
      "A20.6 Cloud and Identity Governance Review.",
    finalQuestion:
      "Can I explain why a confirmed identity event may still have unresolved authorization status?",
  },
  {
    domain: "Detection and monitoring",
    readyMeans:
      "I can start from a defensive question, choose telemetry, evaluate source health, separate severity from confidence, validate safely, and measure usefulness.",
    commonWeakness:
      "Treating alerts as incidents or missing alerts as proof during source delay.",
    capstoneEvidence:
      "A20.4 Detection and Monitoring Review.",
    finalQuestion:
      "Can I explain what a delayed source changes about positive and negative evidence?",
  },
  {
    domain: "Incident response",
    readyMeans:
      "I can triage, scope, preserve competing hypotheses, choose proportional response, record decisions, define recovery, and preserve reopen triggers.",
    commonWeakness:
      "Declaring root cause too early or equating restored availability with complete closure.",
    capstoneEvidence:
      "A20.5 Incident Response Decision Record.",
    finalQuestion:
      "Can I explain what action is justified now and what evidence would change that action?",
  },
  {
    domain: "Cloud security",
    readyMeans:
      "I can separate provider capability from customer responsibility across identity, configuration, data, monitoring, recovery, and governance.",
    commonWeakness:
      "Assuming a cloud feature automatically means the customer configured or governs it correctly.",
    capstoneEvidence:
      "A20.6 shared-responsibility and cloud-control review.",
    finalQuestion:
      "Can I identify who owns the decision rather than merely naming the platform feature?",
  },
  {
    domain: "Risk management",
    readyMeans:
      "I can connect condition, likelihood, impact, controls, evidence confidence, treatment, residual risk, ownership, and review triggers.",
    commonWeakness:
      "Forcing precise risk ratings from incomplete evidence or treating control existence as effectiveness.",
    capstoneEvidence:
      "A20.7 Risk and Privacy Decision Register.",
    finalQuestion:
      "Can I explain why residual risk may remain even when several controls are present?",
  },
  {
    domain: "Privacy",
    readyMeans:
      "I can evaluate purpose, minimization, access, retention, sharing, transparency, lifecycle, and proportionality inside security design.",
    commonWeakness:
      "Assuming security purpose automatically justifies all available data collection.",
    capstoneEvidence:
      "A20.7 privacy inventory and monitoring-data decisions.",
    finalQuestion:
      "Can I identify the minimum data needed for the defensive decision?",
  },
  {
    domain: "Recovery and resilience",
    readyMeans:
      "I can distinguish backup availability from restoration readiness and evaluate dependencies, identity, configuration, validation, and residual risk.",
    commonWeakness:
      "Treating a current backup or one healthy service check as proof of complete recovery.",
    capstoneEvidence:
      "A20.3 recovery architecture, A20.5 recovery criteria, and A20.7 recovery risk.",
    finalQuestion:
      "Can I state what evidence is needed before normal confidence should return?",
  },
  {
    domain: "Governance and exceptions",
    readyMeans:
      "I can assign policy, control, evidence, risk, exception, decision, and review ownership and explain how deviations are governed.",
    commonWeakness:
      "Treating acceptance or exception as a reason to remove the issue from review.",
    capstoneEvidence:
      "A20.6 control governance and A20.7 treatment/acceptance decisions.",
    finalQuestion:
      "Can I identify the owner, rationale, duration, residual risk, and review trigger for a deviation?",
  },
  {
    domain: "Evidence discipline",
    readyMeans:
      "I can distinguish facts, interpretations, hypotheses, assumptions, findings, risks, incidents, recommendations, decisions, and unknowns.",
    commonWeakness:
      "Turning correlation, chronology, policy expectation, or missing evidence into a stronger conclusion than supported.",
    capstoneEvidence:
      "A20.2 case charter, A20.5 incident record, and A20.9 traceability index.",
    finalQuestion:
      "Can I say exactly what the evidence proves and what it does not prove?",
  },
  {
    domain: "Professional communication",
    readyMeans:
      "I can preserve the same facts and uncertainty while changing detail for technical, manager, executive, risk/privacy, and portfolio audiences.",
    commonWeakness:
      "Changing the case truth for a leadership audience or hiding uncertainty to sound confident.",
    capstoneEvidence:
      "A20.8 Executive Capstone Brief.",
    finalQuestion:
      "Can I make the message shorter without changing authorization, incident, confidence, or risk status?",
  },
];

const recurringPatterns = [
  {
    pattern: "Scope before conclusion",
    explanation:
      "Define what systems, identities, evidence, time periods, and decisions are actually included before making broad claims.",
    example:
      "A privileged event inside one maintenance window does not justify claims about every administrator or every cloud service.",
  },
  {
    pattern: "Evidence before certainty",
    explanation:
      "Use what the source supports and preserve Unknown when key evidence is missing.",
    example:
      "Incomplete worker-role evidence means current authorization scope is unresolved, not automatically excessive.",
  },
  {
    pattern: "Source health before negative evidence",
    explanation:
      "Absence of an event is only useful when the source that should have produced or collected it was healthy enough.",
    example:
      "Collector delay weakens the claim that no additional privileged activity occurred.",
  },
  {
    pattern: "Design before implementation",
    explanation:
      "A diagram, policy, standard, or control expectation describes intended behavior; implementation evidence shows what actually occurred.",
    example:
      "A privileged-access policy requiring approval does not prove the 09:11 action matched the approved task.",
  },
  {
    pattern: "Severity before confidence—but keep them separate",
    explanation:
      "Potential consequence and evidence strength answer different questions.",
    example:
      "A privileged configuration action may have High potential impact while authorization confidence remains Moderate.",
  },
  {
    pattern: "Correlation before causation",
    explanation:
      "Related timing and context can prioritize hypotheses without proving a sole root cause.",
    example:
      "Queue latency rising before portal errors makes the queue relevant but does not prove it caused the disruption.",
  },
  {
    pattern: "Containment before overreaction",
    explanation:
      "Response actions should be proportional, owned, evidence-preserving, continuity-aware, and reversible where appropriate.",
    example:
      "Incomplete privileged-action context may justify urgent review without disabling every administrator.",
  },
  {
    pattern: "Recovery before closure",
    explanation:
      "Service restoration is only one part of returning to a trusted state.",
    example:
      "Portal health improved before monitoring catch-up and authorization review were complete.",
  },
  {
    pattern: "Purpose before data",
    explanation:
      "Security collection should start from the defensive question rather than from every field a platform can provide.",
    example:
      "Additional identity telemetry needs a documented purpose and minimization review.",
  },
  {
    pattern: "Risk before treatment",
    explanation:
      "Treatment should address a clearly defined condition and consequence rather than becoming a generic control wish list.",
    example:
      "Task-level traceability improvement is tied to administrative accountability risk.",
  },
  {
    pattern: "Owner before completion",
    explanation:
      "A recommendation, exception, recovery action, or risk decision is incomplete when accountability is unclear.",
    example:
      "Recovery validation has a named fictional owner and a future review checkpoint.",
  },
  {
    pattern: "Truth before audience",
    explanation:
      "Communication can become shorter, but the underlying incident status, authorization state, confidence, and residual risk must stay the same.",
    example:
      "The executive brief cannot call the privileged action unauthorized when the technical record says unresolved.",
  },
];

const readinessScale = [
  {
    level: "Level 4 — Ready to Explain and Apply",
    description:
      "I can explain the concept, apply it to a new fictional scenario, compare strong and weak reasoning, and defend the decision without prompts.",
    evidence:
      "Strong capstone artifact plus successful new-scenario reasoning.",
    action:
      "Use brief review only; spend study time elsewhere.",
  },
  {
    level: "Level 3 — Mostly Ready",
    description:
      "I understand the concept and usually apply it correctly, but one subtopic or edge case still causes hesitation.",
    evidence:
      "Good artifact and quiz performance with a small recurring mistake.",
    action:
      "Review one focused lesson or complete two targeted scenario questions.",
  },
  {
    level: "Level 2 — Review Needed",
    description:
      "I recognize the vocabulary but cannot consistently explain the decision logic, evidence requirement, or limitation.",
    evidence:
      "Weak scenario explanations, repeated confusion, or dependence on memorized phrases.",
    action:
      "Return to the relevant module, rebuild the concept, then retest with a new scenario.",
  },
  {
    level: "Level 1 — Not Yet Ready",
    description:
      "I cannot explain the concept accurately enough to make a defensible decision.",
    evidence:
      "Incorrect or unsafe reasoning, inability to distinguish key concepts, or no supporting artifact.",
    action:
      "Prioritize this domain before taking the full-track final assessment.",
  },
];

const capstoneReadinessRecords = [
  {
    id: "READY-A20-01",
    domain: "Evidence discipline",
    state: "Level 4",
    evidence:
      "The final submission consistently preserves event occurrence, authorization uncertainty, source-health limits, and unresolved root cause.",
    strength:
      "Strongest area: separating what is confirmed from what is inferred.",
    review:
      "Brief review of fact vs. hypothesis vs. finding vs. risk before the module test.",
  },
  {
    id: "READY-A20-02",
    domain: "Architecture and dependencies",
    state: "Level 4",
    evidence:
      "The architecture pack identifies trust boundaries, identities, concentration dependencies, degraded states, controls, and recovery paths.",
    strength:
      "Strongest area: connecting architecture to later monitoring and recovery decisions.",
    review:
      "Review one dependency scenario to keep causation reasoning sharp.",
  },
  {
    id: "READY-A20-03",
    domain: "Detection and monitoring",
    state: "Level 3",
    evidence:
      "Source health and alert confidence are strong; duplicate metrics and degraded-source behavior need one quick review.",
    strength:
      "Strongest area: no-event vs. no-source reasoning.",
    review:
      "Revisit validation, tuning, duplicate rate, and source-health states.",
  },
  {
    id: "READY-A20-04",
    domain: "Incident response",
    state: "Level 4",
    evidence:
      "The incident record preserves competing hypotheses, proportional decisions, recovery criteria, owners, and reopen triggers.",
    strength:
      "Strongest area: decision-making under uncertainty.",
    review:
      "Review the difference between recovery progress, closure, and residual-risk transfer.",
  },
  {
    id: "READY-A20-05",
    domain: "Cloud and identity",
    state: "Level 3",
    evidence:
      "Shared responsibility and privileged access are strong; workload lifecycle and federation edge cases deserve one targeted review.",
    strength:
      "Strongest area: authentication vs. authorization.",
    review:
      "Revisit workload purpose, owner, lifecycle, resource scope, and federation trust.",
  },
  {
    id: "READY-A20-06",
    domain: "Risk and privacy",
    state: "Level 3",
    evidence:
      "Risk treatment and privacy minimization are strong; inherent vs. residual risk and exception governance need one comparison exercise.",
    strength:
      "Strongest area: purpose-before-data reasoning.",
    review:
      "Practice one risk-treatment and one privacy-lifecycle scenario.",
  },
  {
    id: "READY-A20-07",
    domain: "Recovery and resilience",
    state: "Level 4",
    evidence:
      "The portfolio repeatedly distinguishes current backup status from restoration evidence, dependency recovery, and validation.",
    strength:
      "Strongest area: recovery criteria beyond availability.",
    review:
      "Quick review of degraded-state ownership and reopen triggers.",
  },
  {
    id: "READY-A20-08",
    domain: "Executive communication",
    state: "Level 4",
    evidence:
      "Technical and executive versions preserve the same case truth while changing detail appropriately.",
    strength:
      "Strongest area: materiality and bounded uncertainty.",
    review:
      "Review recommendation structure: action, rationale, owner, tradeoff, residual risk, checkpoint.",
  },
];

const questionTypes = [
  {
    type: "Best next decision",
    whatItTests:
      "Whether you can choose a proportional action from incomplete evidence.",
    strategy:
      "Identify confirmed facts, material uncertainty, current impact, owner, and the least overconfident defensible action.",
    trap:
      "Choosing the most dramatic option instead of the most evidence-supported one.",
  },
  {
    type: "What does this evidence prove?",
    whatItTests:
      "Evidence scope, provenance, source health, and interpretation limits.",
    strategy:
      "Ask what the source directly records and what additional claim would require another source.",
    trap:
      "Treating authentication as authorization, policy as implementation, or chronology as causation.",
  },
  {
    type: "Strongest risk statement",
    whatItTests:
      "Ability to connect condition, asset/business outcome, consequence, controls, and uncertainty.",
    strategy:
      "Prefer statements that are specific, decision-relevant, and bounded by evidence.",
    trap:
      "Choosing vague statements such as cloud risk is high or security needs improvement.",
  },
  {
    type: "Privacy decision",
    whatItTests:
      "Purpose, minimization, access, retention, sharing, lifecycle, and proportionality.",
    strategy:
      "Start with the legitimate purpose, then ask whether less data can support the same decision.",
    trap:
      "Assuming security automatically justifies unlimited data collection.",
  },
  {
    type: "Incident interpretation",
    whatItTests:
      "Facts, hypotheses, severity, confidence, source health, containment, recovery, and closure.",
    strategy:
      "Preserve competing explanations until evidence meaningfully strengthens or weakens them.",
    trap:
      "Treating an alert as a confirmed incident or a recovered service as final root-cause proof.",
  },
  {
    type: "Architecture decision",
    whatItTests:
      "Trust boundaries, dependencies, identities, degraded states, control expectations, and recovery.",
    strategy:
      "Choose the option that explains relationships and evidence needs without inventing implementation facts.",
    trap:
      "Treating the architecture diagram as live configuration evidence.",
  },
  {
    type: "Cloud and identity governance",
    whatItTests:
      "Shared responsibility, privilege, workload access, lifecycle, ownership, and action-level authorization.",
    strategy:
      "Separate provider capability from customer decision and separate authentication from authorization.",
    trap:
      "Assuming a cloud security feature or successful login proves correct governance.",
  },
  {
    type: "Executive communication",
    whatItTests:
      "Materiality, confidence, impact, recommendation, ownership, residual risk, and consistency.",
    strategy:
      "Pick the concise answer that preserves the technical truth and makes the decision clear.",
    trap:
      "Choosing stronger language simply because it sounds more decisive.",
  },
];

const finalReviewPriorities = [
  {
    priority: "Priority 1 — Evidence boundaries",
    why:
      "Many Advanced questions are decided by whether the answer respects what a source can actually prove.",
    review:
      "Authentication vs. authorization; design vs. implementation; correlation vs. causation; absence vs. source health; alert vs. incident.",
  },
  {
    priority: "Priority 2 — Identity and workload governance",
    why:
      "Identity appears across cloud, architecture, monitoring, incident response, recovery, and risk.",
    review:
      "Purpose, owner, privilege, scope, approval, lifecycle, federation, workload access, recovery roles.",
  },
  {
    priority: "Priority 3 — Monitoring and source health",
    why:
      "Detection quality depends on telemetry reliability, context, confidence, tuning, validation, and degraded-state behavior.",
    review:
      "Healthy/Delayed/Partial/Blind/Conflicting/Recovering, severity vs. confidence, safe validation, metrics.",
  },
  {
    priority: "Priority 4 — Risk, privacy, and governance",
    why:
      "These topics turn technical evidence into organizational decisions.",
    review:
      "Likelihood, impact, controls, inherent/residual risk, treatment, acceptance, purpose, minimization, retention, review triggers.",
  },
  {
    priority: "Priority 5 — Recovery and communication",
    why:
      "Advanced questions often ask what must happen after immediate stabilization and how decisions should be explained.",
    review:
      "Recovery criteria, validation, residual risk, closure, reopen triggers, materiality, owners, next checkpoints.",
  },
];

const testStrategy = [
  {
    step: "Read the final sentence first",
    reason:
      "Identify whether the question asks for the strongest conclusion, best next action, evidence meaning, risk decision, or communication.",
  },
  {
    step: "Find the confirmed facts",
    reason:
      "Separate what the scenario actually states from assumptions you might bring from outside knowledge.",
  },
  {
    step: "Look for an evidence limitation",
    reason:
      "Source delay, missing approval, stale recovery evidence, partial scope, unknown ownership, or incomplete role data often changes the best answer.",
  },
  {
    step: "Eliminate overconfident choices",
    reason:
      "Answers using definitely, proves, always, harmless, malicious, fully secure, or zero risk are often weak when the scenario preserves uncertainty.",
  },
  {
    step: "Check proportionality",
    reason:
      "The strongest Advanced answer usually matches the action to evidence, impact, confidence, ownership, and reversibility.",
  },
  {
    step: "Check cross-domain effects",
    reason:
      "Architecture may affect monitoring; identity may affect incident response; privacy may affect telemetry; recovery may affect risk.",
  },
  {
    step: "Choose the most governed answer",
    reason:
      "Strong answers often include owner, validation, review trigger, residual risk, or next evidence rather than a one-time technical action.",
  },
  {
    step: "Do not add facts",
    reason:
      "Use only what the scenario provides. Do not assume malicious intent, hidden vulnerabilities, real-world platform behavior, or missing evidence.",
  },
];

const scenarioReview = [
  {
    scenario:
      "A privileged action occurs during approved maintenance. Authentication succeeds, but task-level approval is not shown.",
    strongest:
      "Event confirmed; authorization unresolved.",
    weak:
      "Automatically approved or automatically unauthorized.",
    domains:
      "Identity, incident response, governance, evidence discipline.",
  },
  {
    scenario:
      "No alert appears while the central collector is delayed.",
    strongest:
      "Negative evidence is weak until source recovery and backlog completeness are validated.",
    weak:
      "No alert proves no activity.",
    domains:
      "Detection, source health, incident response, evidence quality.",
  },
  {
    scenario:
      "A worker service functions but exact current permissions are missing.",
    strongest:
      "Business purpose is known; authorization scope needs validation.",
    weak:
      "Working service proves least privilege or missing evidence proves overprivilege.",
    domains:
      "Cloud, workload identity, risk, architecture.",
  },
  {
    scenario:
      "Backups are current but restoration testing is old.",
    strongest:
      "Backup status is strong; recovery readiness remains partly unvalidated.",
    weak:
      "Backups prove complete recovery.",
    domains:
      "Recovery, resilience, risk, governance.",
  },
  {
    scenario:
      "A monitoring platform offers extra identity fields.",
    strongest:
      "Collect only fields with a documented defensive purpose after minimization review.",
    weak:
      "Collect everything because more data improves security.",
    domains:
      "Privacy, monitoring, governance, risk.",
  },
  {
    scenario:
      "Executives ask whether one event caused the outage.",
    strongest:
      "State confirmed evidence, current uncertainty, strongest hypotheses, recommendation, and next checkpoint.",
    weak:
      "Change the technical conclusion to provide a simple yes/no answer.",
    domains:
      "Communication, incident response, evidence discipline, governance.",
  },
];

const quizQuestions = [
  {
    question:
      "Which statement best describes Advanced-track readiness?",
    choices: [
      "Recognizing most cybersecurity vocabulary.",
      "Being able to apply concepts to a new fictional scenario, explain evidence limits, and defend a proportionate decision.",
      "Memorizing every lesson heading.",
      "Choosing the most technical answer available.",
    ],
    answer: 1,
    explanation:
      "Advanced readiness is demonstrated through applied reasoning, evidence discipline, and defensible decisions rather than vocabulary recall alone.",
  },
  {
    question:
      "A privileged event is confirmed, but exact task-level authorization is missing. What is the strongest status?",
    choices: [
      "Authorized.",
      "Unauthorized.",
      "Event confirmed; authorization unresolved pending supporting evidence.",
      "Malicious incident.",
    ],
    answer: 2,
    explanation:
      "The evidence supports event occurrence but not action-level authorization or malicious intent.",
  },
  {
    question:
      "A monitoring collector was delayed during the period when no alert was visible. What should happen to confidence in the absence of activity?",
    choices: [
      "Increase confidence because no alert appeared.",
      "Reduce confidence until source health and backlog completeness are understood.",
      "Assume an attacker disabled the collector.",
      "Ignore all monitoring permanently.",
    ],
    answer: 1,
    explanation:
      "Negative evidence depends on the health of the source that should have produced or collected the record.",
  },
  {
    question:
      "What is the strongest privacy approach to additional security telemetry?",
    choices: [
      "Collect every available field.",
      "Define the defensive purpose, use the minimum data needed, limit access and retention, and review again when purpose changes.",
      "Never collect monitoring data.",
      "Store all records forever.",
    ],
    answer: 1,
    explanation:
      "Purpose limitation, minimization, access, retention, and lifecycle are core privacy decisions inside security monitoring.",
  },
  {
    question:
      "Which statement best distinguishes recovery from closure?",
    choices: [
      "They always mean the same thing.",
      "Recovery restores service and confidence through defined criteria; closure is a governed decision that immediate response work is complete enough and residual items are owned.",
      "Closure occurs as soon as a service responds once.",
      "Recovery is only about backups.",
    ],
    answer: 1,
    explanation:
      "Recovery and closure are related but distinct. Closure requires residual issues and reopen criteria to be governed.",
  },
  {
    question:
      "What is the strongest final-review strategy?",
    choices: [
      "Reread every Advanced page equally.",
      "Use capstone evidence and self-checks to identify weak reasoning patterns, then review those domains with targeted scenarios.",
      "Memorize answer letters.",
      "Skip topics that contain uncertainty.",
    ],
    answer: 1,
    explanation:
      "Targeted review is more effective when it focuses on demonstrated weak areas and tests whether understanding transfers to new scenarios.",
  },
  {
    question:
      "What is safest for all Advanced final-assessment preparation?",
    choices: [
      "Use fictional, synthetic, defensive scenarios and the CyberShield learning materials.",
      "Test concepts on real systems.",
      "Use real credentials to make identity questions realistic.",
      "Collect live security logs from an organization.",
    ],
    answer: 0,
    explanation:
      "Advanced assessment preparation should remain fictional, synthetic, defensive, and non-operational.",
  },
];

const takeaways = [
  "Advanced readiness means applying cybersecurity concepts to new scenarios while preserving evidence limits, ownership, uncertainty, and proportional decisions.",
  "Scope, source health, provenance, assumptions, confidence, ownership, validation, and residual risk recur across nearly every Advanced domain.",
  "Authentication does not prove authorization, architecture does not prove implementation, chronology does not prove causation, and alert absence does not prove inactivity during source delay.",
  "Identity, monitoring, incident response, cloud, risk, privacy, recovery, governance, and communication should be reviewed as connected decision systems.",
  "Targeted review is stronger than rereading everything when capstone evidence already shows which subtopics need reinforcement.",
  "Strong assessment answers are usually bounded, evidence-aware, proportionate, owned, and connected to validation or review triggers.",
  "The A20 Module Test is the next checkpoint, followed later by two 50-question Advanced practice tests and one 125-question Advanced final test.",
  "All final-assessment preparation remains fictional, synthetic, defensive, non-operational, and safe for public learning.",
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
        Module A20
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function AdvancedFinalReadinessReviewPage() {
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
              A20.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Advanced Final Readiness Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            You have reached the final lesson of the Advanced Track. This review
            does not attempt to repeat every earlier module. Instead, it tests
            whether the reasoning patterns from A1 through A20 can be applied
            together when a new scenario contains incomplete evidence, competing
            priorities, and cross-domain decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Your next checkpoint is the 25-question A20 Module Test. After A20 is
            complete, the Advanced Track will move to two 50-question practice tests
            and one 125-question final assessment.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A20: Advanced Capstone"
          lessonTitle="Advanced Final Readiness Review"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have completed or reviewed the Advanced Capstone Portfolio Submission from A20.9.",
            "I am willing to mark a domain Review Needed instead of pretending every topic is equally strong.",
            "I understand that final assessment questions will often test decisions across several cybersecurity domains at once.",
            "I will prepare using fictional, synthetic, defensive examples only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Final Skill Is Integration"
        >
          <p className="leading-8">
            The Advanced Track has covered many topics, but professional
            cybersecurity rarely presents those topics separately. An identity
            event may matter because of architecture, monitoring health, incident
            context, cloud responsibility, business risk, privacy, recovery, and
            executive communication at the same time.
          </p>

          <p className="mt-4 leading-8">
            Final readiness therefore means more than remembering definitions. You
            should be able to decide what the evidence supports, what remains
            unknown, which action is proportionate, who owns the decision, what
            validation is needed, and how the answer changes—or does not change—for
            different audiences.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.10">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-cyan-50">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Advanced Readiness"
          title="Twelve Domains to Be Able to Explain and Apply"
        >
          <p className="leading-8">
            Readiness is not binary. Use the capstone, earlier module work, and new
            scenario reasoning to decide how confidently you can apply each domain.
          </p>

          <div className="mt-6 grid gap-5">
            {readinessDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-xl font-black text-blue-50">
                  {item.domain}
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  <span className="font-black">Ready means:</span>{" "}
                  {item.readyMeans}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Common weakness:</span>{" "}
                    {item.commonWeakness}
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Capstone evidence:</span>{" "}
                    {item.capstoneEvidence}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Final self-check:</span>{" "}
                  {item.finalQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Recurring Reasoning"
          title="Twelve Patterns That Appear Across the Advanced Track"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {recurringPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.pattern}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.explanation}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Example:</span> {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Advanced Final Readiness Board"
          subtitle="Synthetic readiness snapshot based on the completed A20 capstone"
          metrics={[
            {
              label: "Advanced domains",
              value: "12",
              note: "Architecture through professional communication",
            },
            {
              label: "Recurring reasoning patterns",
              value: "12",
              note: "Scope, evidence, source health, identity, risk, recovery, communication",
            },
            {
              label: "High-confidence areas",
              value: "5",
              note: "Evidence, architecture, incident response, recovery, communication",
            },
            {
              label: "Targeted-review areas",
              value: "3",
              note: "Monitoring edge cases, workload/federation identity, risk/privacy comparisons",
            },
          ]}
        />

        <FakeAlertCard
          title="Memorization Mistaken for Readiness"
          severity="Medium"
          time="A20.10 final review"
          source="Synthetic Advanced Readiness Queue"
          details="A student can define source health and residual risk but cannot explain how a delayed collector changes negative evidence or how current controls affect the remaining risk."
          recommendation="Mark the domains Mostly Ready or Review Needed, then complete targeted scenario practice that requires applying the concept rather than rereading the definition."
        />

        <FakeLogPanel
          title="Synthetic Advanced Final Review Notes"
          logs={[
            "[EVIDENCE] distinguish fact, interpretation, hypothesis, finding, risk, incident, and decision",
            "[ARCH] map mission, trust boundaries, dependencies, degraded states, and recovery",
            "[IDENTITY] authentication is not action-level authorization",
            "[MONITOR] source health determines what missing events can support",
            "[IR] proportional decisions preserve competing hypotheses and reassessment triggers",
            "[CLOUD] provider capability does not replace customer governance",
            "[RISK] control existence is not the same as control effectiveness or zero residual risk",
            "[PRIVACY] purpose and minimization come before collecting additional data",
            "[RECOVERY] backup availability is not complete restoration readiness",
            "[COMMS] audience changes detail, not underlying case truth",
            "[SAFETY] all final-review scenarios remain fictional, synthetic, and non-operational",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Can You Apply the Principle?"
          question="A synthetic privileged action occurred during approved maintenance. The identity authenticated successfully, but the exact task-level authorization is missing. What is the strongest Advanced answer?"
          evidence={[
            "The event itself is confirmed.",
            "The maintenance window is approved.",
            "Authentication succeeded.",
            "The summarized task record does not explicitly map the action.",
            "No evidence proves malicious intent or full authorization.",
          ]}
          options={[
            "The action was authorized because maintenance was approved",
            "The action was unauthorized because task detail is missing",
            "The event is confirmed, while action-level authorization remains unresolved pending supporting evidence",
            "The action is a confirmed security incident",
          ]}
          bestAnswer={2}
          explanation="The strongest answer preserves the confirmed event while refusing to invent authorization, intent, or incident status."
        />

        <Section
          eyebrow="Readiness Scale"
          title="Use Four Levels Instead of Ready / Not Ready"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {readinessScale.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.level}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.description}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Review action:</span>{" "}
                  {item.action}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone-Based Readiness"
          title="Example Final Readiness Records"
        >
          <p className="leading-8">
            The capstone provides stronger readiness evidence than confidence alone.
            A student should be able to point to a concrete artifact and a new
            scenario that supports each readiness judgment.
          </p>

          <div className="mt-6 grid gap-5">
            {capstoneReadinessRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.domain}</h3>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.state}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  <span className="font-black text-white">Evidence:</span>{" "}
                  {item.evidence}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Strength:</span> {item.strength}
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Targeted review:</span>{" "}
                    {item.review}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Assessment Patterns"
          title="Eight Question Types You Should Be Ready to Reason Through"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {questionTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Tests:</span> {item.whatItTests}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Strategy:</span> {item.strategy}
                </p>
                <p className="mt-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                  <span className="font-black">Common trap:</span> {item.trap}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Recovery Readiness"
          question="A fictional organization has current backups, stable service, and older-than-preferred restoration testing. Which answer best demonstrates Advanced reasoning?"
          evidence={[
            "Backup status is current.",
            "The service is stable now.",
            "The latest complete restoration exercise is old.",
            "Recovery depends on identity, configuration, data, and service dependencies.",
            "A named recovery owner has a future validation action.",
          ]}
          options={[
            "Recovery is fully validated because backups exist",
            "Recovery is impossible because the test is old",
            "Backup availability is a strength, while restoration readiness remains partly unvalidated and should be refreshed or governed as residual risk",
            "Current service stability makes recovery evidence unnecessary",
          ]}
          bestAnswer={2}
          explanation="Advanced reasoning preserves both strengths and limitations while assigning ownership and a review action."
        />

        <Section
          eyebrow="Targeted Review"
          title="Five Priorities Before the Full Advanced Assessments"
        >
          <div className="grid gap-5">
            {finalReviewPriorities.map((item) => (
              <article
                key={item.priority}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.priority}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  <span className="font-black">Why it matters:</span>{" "}
                  {item.why}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Review:</span> {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Test Strategy"
          title="Eight Steps for Strong Scenario Reasoning"
        >
          <p className="leading-8">
            These steps are not tricks for guessing. They help you read Advanced
            scenario questions carefully and avoid introducing unsupported facts.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {testStrategy.map((item, index) => (
              <article
                key={item.step}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="font-black text-blue-50">{item.step}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Scenario Review"
          title="Six Fast Cross-Domain Self-Checks"
        >
          <div className="grid gap-5">
            {scenarioReview.map((item) => (
              <article
                key={item.scenario}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <p className="leading-7 text-emerald-50">
                  <span className="font-black">Scenario:</span> {item.scenario}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Strongest reasoning:</span>{" "}
                  {item.strongest}
                </p>
                <p className="mt-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                  <span className="font-black">Weak reasoning:</span>{" "}
                  {item.weak}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Domains:</span> {item.domains}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Final-Review Mistakes"
          title="What Can Hurt Readiness Even After Completing the Track"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Rereading instead of applying",
                detail:
                  "Recognition feels familiar but does not prove you can make the correct decision in a new scenario.",
              },
              {
                title: "Memorizing absolute phrases",
                detail:
                  "Advanced scenarios often preserve uncertainty, so words like always, proves, definitely, and zero risk should be examined carefully.",
              },
              {
                title: "Ignoring source limitations",
                detail:
                  "Many wrong conclusions come from forgetting delay, partial coverage, stale evidence, missing approval, or unknown role scope.",
              },
              {
                title: "Studying topics in isolation",
                detail:
                  "Identity can affect response, monitoring can affect evidence confidence, privacy can affect telemetry, and recovery can affect residual risk.",
              },
              {
                title: "Choosing the most aggressive action",
                detail:
                  "The strongest response is usually the most proportionate and governed action supported by the evidence.",
              },
              {
                title: "Changing facts for the audience",
                detail:
                  "Executive communication can be shorter, but it cannot change authorization state, incident status, confidence, or root cause.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build the Advanced Final Readiness Plan"
        >
          <p className="leading-8">
            Use your completed Advanced Capstone Portfolio Submission, previous
            module tests, and fictional scenario practice. The goal is to decide
            exactly what deserves review before the final assessments.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Rate twelve domains",
                detail:
                  "Assign each domain Level 4, 3, 2, or 1 using evidence from your capstone and recent scenario reasoning.",
              },
              {
                title: "Task 2 — Identify recurring mistakes",
                detail:
                  "Look for patterns such as overconfidence, source-health errors, identity confusion, risk-rating uncertainty, or privacy overcollection.",
              },
              {
                title: "Task 3 — Choose five review priorities",
                detail:
                  "Rank the areas that would most improve your ability to answer cross-domain scenario questions.",
              },
              {
                title: "Task 4 — Build targeted practice",
                detail:
                  "For each priority, write two new fictional scenario questions that require a decision rather than a definition.",
              },
              {
                title: "Task 5 — Define readiness evidence",
                detail:
                  "State what you must be able to explain correctly before moving a topic from Review Needed to Mostly Ready or Ready.",
              },
              {
                title: "Task 6 — Prepare assessment sequence",
                detail:
                  "Complete the A20 Module Test first, then use later 50-question practice tests to identify remaining full-track gaps before the 125-question final.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision 1 — One Weak Area Before the Test"
          scenario="A student is strong in architecture, incident response, recovery, and communication but repeatedly confuses workload identity purpose with proof of current permission scope."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep strong domains at their evidence-supported readiness levels and complete a targeted workload-identity review using purpose, required resources, owner, lifecycle, and authorization evidence.",
              outcome:
                "Best preparation. It targets the actual weakness without restarting the entire curriculum.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Reread every Advanced lesson equally before taking any assessment.",
              outcome:
                "Caution. Broad review may waste time and fail to address the recurring reasoning error.",
              tone: "caution",
            },
            {
              label: "Choice C",
              response:
                "Ignore workload identity because the student is strong overall.",
              outcome:
                "Risky. A recurring cross-domain weakness can affect cloud, architecture, risk, privacy, and incident questions.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Two Answers Seem Plausible"
          scenario="A scenario contains a High-severity privileged alert during approved maintenance, but source health is degraded and task-level authorization is incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Choose the answer that preserves the confirmed event, recognizes High potential impact, lowers confidence because context is incomplete, and identifies the next validation step.",
              outcome:
                "Best Advanced reasoning. It separates severity, confidence, authorization, and incident status.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Choose the answer that calls it a confirmed incident because severity is High.",
              outcome:
                "Risky. Severity does not prove incident status or evidentiary confidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Choose the answer that dismisses the event because maintenance was approved.",
              outcome:
                "Risky. Maintenance provides context but does not prove every action was in scope.",
              tone: "risk",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Explain One Scenario Across Six Advanced Domains"
        >
          <p className="leading-8">
            Use this fictional condition: a privileged action occurs during
            approved maintenance, the collector is delayed, queue latency rises,
            service errors appear, and the portal later recovers. Explain how six
            domains interpret the same facts differently but consistently.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Architecture",
                detail:
                  "Identify dependencies, trust boundaries, identity paths, degraded states, and which design assumptions matter.",
              },
              {
                title: "Detection",
                detail:
                  "Identify defensive questions, telemetry, source-health limitations, severity, confidence, and safe validation.",
              },
              {
                title: "Incident response",
                detail:
                  "Separate facts and hypotheses, define proportional actions, owners, recovery criteria, and reassessment triggers.",
              },
              {
                title: "Cloud and identity",
                detail:
                  "Separate authentication from authorization, review workload access, shared responsibility, and task-level privilege evidence.",
              },
              {
                title: "Risk and privacy",
                detail:
                  "Evaluate business consequence, controls, residual risk, treatment, data purpose, minimization, and review triggers.",
              },
              {
                title: "Executive communication",
                detail:
                  "State impact, current status, confidence, material risks, recommendation, owners, and next checkpoint without changing the facts.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="Advanced Final Readiness Checklist"
          items={[
            "I can explain major Advanced concepts in my own words rather than relying on memorized definitions.",
            "I can apply architecture, identity, monitoring, response, cloud, risk, privacy, recovery, governance, and communication together.",
            "I can distinguish authentication from authorization.",
            "I can distinguish architecture or policy expectations from current implementation evidence.",
            "I can distinguish correlation and chronology from causation.",
            "I can explain how source health changes the meaning of missing evidence.",
            "I can separate alert severity, alert confidence, investigation priority, and incident status.",
            "I can preserve competing hypotheses and choose proportionate response actions.",
            "I can distinguish backup availability from complete restoration readiness.",
            "I can calculate no hidden certainty into risk when likelihood or control evidence is incomplete.",
            "I can apply privacy purpose and minimization to security telemetry.",
            "I can identify owners, residual risk, review triggers, and validation evidence.",
            "I can communicate the same underlying truth to technical and executive audiences.",
            "I have identified my weakest Advanced domains and created targeted review actions.",
            "I will prepare only with fictional, synthetic, defensive, non-operational scenarios.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.10 Knowledge Check">
          <MiniQuiz
            title="A20.10 Mini Quiz: Advanced Final Readiness Review"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Advanced Final Readiness Plan"
          prompt="Create an Advanced Final Readiness Plan using the completed Advanced Capstone Portfolio Submission and prior Advanced work. Rate at least twelve cybersecurity domains using Level 4 Ready to Explain and Apply, Level 3 Mostly Ready, Level 2 Review Needed, or Level 1 Not Yet Ready. For each domain include evidence supporting the rating, one recurring reasoning pattern, one common mistake to avoid, one targeted review action, and the evidence required before raising the readiness level. Identify your five highest-priority review areas, create at least two new fictional scenario questions for each priority, and include an assessment sequence covering the A20 Module Test, Advanced Practice Test 1, Advanced Practice Test 2, and the 125-question Advanced Final Test."
          tips={[
            "Use applied scenario reasoning as the standard for readiness, not familiarity with vocabulary.",
            "Do not lower strong domains simply because another domain needs review.",
            "Prioritize recurring mistakes that affect several domains.",
            "Review evidence boundaries, identity, source health, risk/privacy, recovery, and communication carefully.",
            "Use practice questions that require decisions rather than simple definitions.",
            "Keep all review scenarios fictional, synthetic, defensive, and safe.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A20 Module Test?"
        >
          <p className="leading-8">
            The module test is the next checkpoint—not the final Advanced
            assessment. Use it to verify that you can integrate the A20 capstone
            concepts before moving to the two full-track practice tests.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain the strongest A20 decisions without rereading the lesson text.",
              "I can identify evidence limits before choosing a conclusion.",
              "I can connect at least six cybersecurity domains inside one fictional scenario.",
              "I know which three to five areas deserve review after the A20 Module Test.",
              "I understand that the two later practice tests are diagnostic preparation for the 125-question Advanced final.",
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
          title="Carry the Readiness Plan Into the Final Assessments"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use the A20 Module Test diagnostically",
                detail:
                  "After the test, map missed questions to reasoning patterns and domains rather than reviewing only the exact question wording.",
              },
              {
                title: "Update readiness levels",
                detail:
                  "Raise or lower a domain only when new assessment evidence supports the change.",
              },
              {
                title: "Create focused review notes",
                detail:
                  "Keep each weak area to a short concept summary, one common trap, and two or three scenario examples.",
              },
              {
                title: "Use Practice Test 1 broadly",
                detail:
                  "Identify which Advanced domains still produce errors across the full curriculum.",
              },
              {
                title: "Use Practice Test 2 for refinement",
                detail:
                  "Confirm that targeted review corrected earlier patterns and identify the final few weak areas.",
              },
              {
                title: "Use the final test as synthesis",
                detail:
                  "Expect questions to combine evidence, architecture, identity, monitoring, response, risk, privacy, recovery, and communication.",
              },
              {
                title: "Preserve confidence discipline",
                detail:
                  "Do not become more absolute simply because an assessment asks for one best answer; choose the best-supported option.",
              },
              {
                title: "Maintain the safety boundary",
                detail:
                  "Final assessment preparation does not require real systems, real credentials, real logs, or live security testing.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Final readiness is demonstrated with fictional, synthetic, defensive reasoning
          </h2>
          <p className="mt-3 leading-7">
            Do not access real systems, scan networks, probe applications, test
            credentials, bypass controls, collect live security logs, inspect
            private cloud accounts, monitor real users, or investigate real
            organizations for final-assessment preparation. Use CyberShield Academy
            lessons, synthetic evidence, fictional scenarios, safe quizzes, and
            your own portfolio artifacts only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Advanced Lesson Track Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.10 Advanced Final Readiness Review Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have now completed all ten Advanced Capstone lessons. The next step
            is the 25-question A20 Module Test. After A20 is finished and verified,
            the Advanced Track moves to Practice Test 1, Practice Test 2, and the
            125-question Advanced Final Test.
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