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
const modulePath = `${trackPath}/security-automation-concepts`;
const previousLesson = `${modulePath}/governance-for-automation`;
const moduleTest = `${modulePath}/module-test`;

const objectives = [
  "Integrate the A17 opportunity, human-judgment, enrichment, workflow, playbook/runbook, scripting-boundary, failure, value, and governance artifacts into one coherent automation design.",
  "Evaluate competing design choices using analyst value, evidence quality, ambiguity, consequence, reversibility, reliability, failure containment, privacy minimization, and governance authority.",
  "Produce a defensible automation decision that clearly separates what may be automated, what should remain recommendation-only, what requires approval, and what must remain prohibited.",
  "Build a leadership-ready operating view with priorities, owners, milestones, metrics, disable criteria, review cadence, and change triggers.",
  "Complete the final Safe Automation Design and Governance Plan as the A17 capstone portfolio artifact.",
];

const priorArtifacts = [
  {
    lesson: "A17.1",
    title: "Automation Opportunity Map",
    contribution:
      "Defines where repetitive defensive work exists and whether automation could produce useful value.",
    capstoneQuestion:
      "Is the opportunity worth automating at all?",
  },
  {
    lesson: "A17.2",
    title: "Human-in-the-Loop Decision Matrix",
    contribution:
      "Defines where automation may assist, where a human monitors, where approval is required, and where the decision remains human-led.",
    capstoneQuestion:
      "Where does machine support stop and human judgment begin?",
  },
  {
    lesson: "A17.3",
    title: "Alert Enrichment Plan",
    contribution:
      "Defines source quality, freshness, confidence, missing/conflicting states, and minimal useful context.",
    capstoneQuestion:
      "What evidence should automation add, and how trustworthy is it?",
  },
  {
    lesson: "A17.4",
    title: "Ticketing and Workflow Automation Map",
    contribution:
      "Defines creation, routing, assignment, duplicate handling, escalation, closure support, and exception queues.",
    capstoneQuestion:
      "How should work move safely through the defensive process?",
  },
  {
    lesson: "A17.5",
    title: "Playbook and Runbook Design",
    contribution:
      "Defines decision guidance, repeatable support procedures, branches, stop conditions, versioning, and fallback.",
    capstoneQuestion:
      "What guidance or bounded procedure should support the workflow?",
  },
  {
    lesson: "A17.6",
    title: "Safe Automation Boundary Checklist",
    contribution:
      "Defines purpose, authorization, least privilege, validation, dry run, rate limits, timeouts, idempotency, evidence, and prohibited scope.",
    capstoneQuestion:
      "What is the automation allowed to do?",
  },
  {
    lesson: "A17.7",
    title: "Automation Failure Mode Register",
    contribution:
      "Defines failure causes, propagation, containment, degraded mode, hard stops, recovery, and disable criteria.",
    capstoneQuestion:
      "How does the design fail safely?",
  },
  {
    lesson: "A17.8",
    title: "Automation Value Scorecard",
    contribution:
      "Defines baselines, targets, thresholds, balanced metrics, analyst effort, quality, reliability, safety, and decision rules.",
    capstoneQuestion:
      "How will the team know whether the automation is actually helping?",
  },
  {
    lesson: "A17.9",
    title: "Automation Governance Matrix",
    contribution:
      "Defines ownership, decision rights, review cadence, exceptions, change control, disable authority, re-enable criteria, and retirement.",
    capstoneQuestion:
      "Who is accountable for every important automation decision?",
  },
];

const capstoneDecisionQuestions = [
  {
    question: "1. Opportunity",
    detail:
      "What repetitive defensive problem is worth automating, and what evidence shows the problem is real?",
    required:
      "Baseline effort, repeat frequency, current pain, expected value, and exclusions.",
  },
  {
    question: "2. Human boundary",
    detail:
      "Which steps are automated support, human-on-the-loop, human-in-the-loop, human-led, or prohibited?",
    required:
      "Ambiguity, consequence, confidence, reversibility, authority, override, and timeout.",
  },
  {
    question: "3. Evidence and enrichment",
    detail:
      "Which context sources are necessary, current, attributable, minimal, and safe?",
    required:
      "Source, freshness, confidence, missing/stale/conflict behavior, owner, and degraded mode.",
  },
  {
    question: "4. Workflow",
    detail:
      "How does the work move from intake to review, escalation, exception handling, and closure?",
    required:
      "States, routing, duplicates, fallback queues, SLA reminders, escalation, and evidence.",
  },
  {
    question: "5. Guidance",
    detail:
      "Which decisions need a playbook, which bounded tasks need a runbook, and which checks need a checklist or decision tree?",
    required:
      "Entry conditions, evidence, branches, stop conditions, versioning, ownership, and feedback.",
  },
  {
    question: "6. Scripting boundary",
    detail:
      "What is the automation allowed to read, recommend, update, request, or never perform?",
    required:
      "Purpose, permissions, environment, allowlists, validation, dry run, rate limit, timeout, idempotency, and audit evidence.",
  },
  {
    question: "7. Failure resilience",
    detail:
      "How can the design fail, how visible is the failure, and how far can it propagate?",
    required:
      "Failure family, detectability, propagation, containment, recovery, fallback, disable, and re-enable.",
  },
  {
    question: "8. Value",
    detail:
      "How will improvement be measured without rewarding speed or volume at the expense of quality?",
    required:
      "Baseline, target, threshold, denominator, review window, confidence, metric owner, and decision rule.",
  },
  {
    question: "9. Governance",
    detail:
      "Who owns the automation, who may approve changes, who accepts exceptions, and who can disable or retire it?",
    required:
      "Decision rights, owners, review cadence, exceptions, change triggers, lifecycle, and retirement.",
  },
  {
    question: "10. Leadership decision",
    detail:
      "Should the automation proceed, proceed conditionally, remain manual, be redesigned, or be blocked?",
    required:
      "Evidence summary, risks, expected value, remaining uncertainty, milestones, and final recommendation.",
  },
];

const northbridgeScenario = [
  {
    id: "AUTO-D01",
    title: "Asset ownership enrichment",
    opportunity:
      "Analysts repeatedly spend time locating the current owner for synthetic service alerts.",
    humanBoundary:
      "Automated Support",
    enrichment:
      "Current asset owner, service, criticality, source, and freshness.",
    workflow:
      "Attach context before ticket routing.",
    guidance:
      "Reference guide only.",
    scripting:
      "Read-only enrichment validation.",
    failure:
      "Stale ownership may misroute work.",
    metric:
      "Time to usable evidence + stale-data rate.",
    governance:
      "Security Platform Owner + SOC Workflow Owner.",
    priority:
      "P1",
    decision:
      "Proceed",
  },
  {
    id: "AUTO-D02",
    title: "Ticket creation and routing",
    opportunity:
      "Manual ticket creation and assignment are repetitive and inconsistent.",
    humanBoundary:
      "Automated Support with analyst override",
    enrichment:
      "Owner, service, existing-ticket context.",
    workflow:
      "Create ticket, attach evidence, route to approved queue.",
    guidance:
      "Ticket Evidence Package Runbook.",
    scripting:
      "Low-impact administrative write with allowlist and dry run.",
    failure:
      "Duplicate tickets, stale routing, loops.",
    metric:
      "Routing accuracy, duplicate rate, reassignment rate.",
    governance:
      "SOC Workflow Owner.",
    priority:
      "P0",
    decision:
      "Proceed Conditionally",
  },
  {
    id: "AUTO-D03",
    title: "Playbook recommendation",
    opportunity:
      "Analysts spend time locating the most relevant approved defensive playbook.",
    humanBoundary:
      "Human in the Loop",
    enrichment:
      "Alert category, evidence completeness, current playbook version.",
    workflow:
      "Recommend guidance when ticket reaches review.",
    guidance:
      "Synthetic Alert Review Playbook.",
    scripting:
      "Recommendation-only.",
    failure:
      "Stale playbook mapping or overconfident recommendation.",
    metric:
      "Recommendation acceptance + override reasons.",
    governance:
      "Incident Response Process Owner.",
    priority:
      "P2",
    decision:
      "Proceed",
  },
  {
    id: "AUTO-D04",
    title: "High-consequence decision support",
    opportunity:
      "Automation can package conflicting evidence and identify the correct approver.",
    humanBoundary:
      "Human-Led",
    enrichment:
      "Evidence sources, conflict state, authority map.",
    workflow:
      "Pause and route to authorized reviewer.",
    guidance:
      "High-Ambiguity Escalation Playbook.",
    scripting:
      "Approval request only.",
    failure:
      "Approval timeout or implied approval.",
    metric:
      "Explicit approval completeness.",
    governance:
      "Incident Response Lead.",
    priority:
      "P0",
    decision:
      "Human Required",
  },
  {
    id: "AUTO-D05",
    title: "Routing-loop containment",
    opportunity:
      "Repeated queue bouncing can be detected mechanically.",
    humanBoundary:
      "Automated Support + human ownership resolution",
    enrichment:
      "Queue history and ownership source.",
    workflow:
      "Stop automatic routing and move to Workflow Exception Review.",
    guidance:
      "Routing Exception Runbook.",
    scripting:
      "Low-impact administrative write.",
    failure:
      "Loop detection threshold too broad or too narrow.",
    metric:
      "Routing-loop rate + exception age.",
    governance:
      "Security Platform Owner.",
    priority:
      "P1",
    decision:
      "Proceed",
  },
  {
    id: "AUTO-D06",
    title: "Automation-health disable recommendation",
    opportunity:
      "Health degradation can be detected faster from synthetic metrics.",
    humanBoundary:
      "Human in the Loop",
    enrichment:
      "Failure rate, stale-data rate, retry rate, exception rate.",
    workflow:
      "Recommend disable and prepare fallback plan.",
    guidance:
      "Automation Resilience Runbook.",
    scripting:
      "Recommendation-only.",
    failure:
      "Bad thresholds may recommend unnecessary disable.",
    metric:
      "Safe-fallback success + recovery time.",
    governance:
      "Security Platform Owner.",
    priority:
      "P1",
    decision:
      "Proceed",
  },
  {
    id: "AUTO-D07",
    title: "Candidate-for-closure validation",
    opportunity:
      "Mechanical evidence checks can be automated before a human closure decision.",
    humanBoundary:
      "Human in the Loop",
    enrichment:
      "Required evidence fields and review state.",
    workflow:
      "Mark Candidate for Closure only.",
    guidance:
      "Candidate-for-Closure Checklist.",
    scripting:
      "Low-impact administrative write.",
    failure:
      "Partial evidence package or silent missing fields.",
    metric:
      "Evidence completeness + reopen rate.",
    governance:
      "SOC Workflow Owner.",
    priority:
      "P2",
    decision:
      "Proceed Conditionally",
  },
  {
    id: "AUTO-D08",
    title: "Autonomous high-impact environment change",
    opportunity:
      "No valid student-curriculum opportunity; proposal crosses the safe boundary.",
    humanBoundary:
      "Prohibited",
    enrichment:
      "Not applicable.",
    workflow:
      "Reject and redesign.",
    guidance:
      "Governance boundary only.",
    scripting:
      "Prohibited autonomous action.",
    failure:
      "Boundary violation.",
    metric:
      "Unsafe autonomous action count = 0.",
    governance:
      "A17 Governance Boundary.",
    priority:
      "P0",
    decision:
      "Blocked",
  },
];

const architectureLayers = [
  {
    layer: "Intake layer",
    responsibility:
      "Receive synthetic alerts or workflow records, validate identifiers, and establish a stable trace ID.",
    controls:
      "Required-field validation, type checks, source attribution, duplicate request detection.",
  },
  {
    layer: "Evidence layer",
    responsibility:
      "Add approved operational context with source, freshness, confidence, and missing/conflict states.",
    controls:
      "Source ownership, freshness thresholds, privacy minimization, degraded mode.",
  },
  {
    layer: "Decision-support layer",
    responsibility:
      "Recommend playbooks, summarize evidence, and identify possible workflow paths without replacing judgment.",
    controls:
      "Human-in-the-loop design, explanation, uncertainty display, analyst override.",
  },
  {
    layer: "Workflow layer",
    responsibility:
      "Create fictional tickets, route work, track state, deduplicate, remind, and escalate.",
    controls:
      "Allowlists, idempotency, routing-loop detection, fallback queues, state evidence.",
  },
  {
    layer: "Approval layer",
    responsibility:
      "Pause authority-sensitive transitions and package evidence for the correct approver.",
    controls:
      "Explicit approval, no implied approval, safe timeout, escalation, evidence preservation.",
  },
  {
    layer: "Health layer",
    responsibility:
      "Measure reliability, failure, stale data, retries, overrides, and fallback behavior.",
    controls:
      "Thresholds, heartbeat, trend review, disable recommendation, recovery validation.",
  },
  {
    layer: "Governance layer",
    responsibility:
      "Own scope, permissions, changes, exceptions, metrics, lifecycle, disable authority, and retirement.",
    controls:
      "Review cadence, change approval, exception expiration, owner transfer, lifecycle evidence.",
  },
];

const designTradeoffs = [
  {
    tension: "Speed vs evidence completeness",
    weakChoice:
      "Drop evidence fields to reduce handling time.",
    strongerChoice:
      "Improve retrieval and packaging while keeping minimum evidence requirements intact.",
  },
  {
    tension: "Automation depth vs human judgment",
    weakChoice:
      "Automate the final decision because recommendation accuracy is high.",
    strongerChoice:
      "Keep high-ambiguity or authority-sensitive decisions human-led.",
  },
  {
    tension: "Context richness vs privacy minimization",
    weakChoice:
      "Copy every available record into the alert.",
    strongerChoice:
      "Use the minimum operational metadata needed for the review.",
  },
  {
    tension: "Reliability vs dependency count",
    weakChoice:
      "Add many optional enrichment dependencies to make alerts look richer.",
    strongerChoice:
      "Separate essential from optional sources and keep safe degraded mode.",
  },
  {
    tension: "Low exception rate vs honest uncertainty",
    weakChoice:
      "Force edge cases through normal logic to improve dashboard numbers.",
    strongerChoice:
      "Use exception paths when the workflow genuinely lacks confidence.",
  },
  {
    tension: "Broad permissions vs implementation convenience",
    weakChoice:
      "Grant write access widely so future features are easier.",
    strongerChoice:
      "Use least privilege and reopen review for every material permission expansion.",
  },
  {
    tension: "Fast recovery vs re-enable confidence",
    weakChoice:
      "Turn automation back on immediately after the dependency returns.",
    strongerChoice:
      "Validate root cause, source freshness, metrics, fallback, and affected records before re-enable.",
  },
  {
    tension: "Metric improvement vs metric gaming",
    weakChoice:
      "Optimize whichever number leadership sees most often.",
    strongerChoice:
      "Use balanced efficiency, quality, reliability, safety, human-effectiveness, and governance measures.",
  },
];

const leadershipPriorities = [
  {
    priority: "P0 — Must be correct before expansion",
    items:
      "Ticket idempotency, approval completeness, safe-action boundary, routing-loop containment, explicit disable authority.",
    leadershipMeaning:
      "These items protect against duplicate work, unauthorized decisions, and unsafe scope expansion.",
  },
  {
    priority: "P1 — Improve near-term reliability",
    items:
      "Ownership freshness, safe-fallback success, source health, recovery evidence, exception aging.",
    leadershipMeaning:
      "These items determine whether normal failures remain contained and recoverable.",
  },
  {
    priority: "P2 — Improve analyst effectiveness",
    items:
      "Playbook recommendation quality, candidate-for-closure quality, analyst feedback, documentation usability.",
    leadershipMeaning:
      "These improvements reduce repetitive effort while keeping human judgment meaningful.",
  },
  {
    priority: "P3 — Optimize after safety and quality",
    items:
      "Additional low-value clicks, dashboard presentation, optional enrichment, convenience improvements.",
    leadershipMeaning:
      "Useful improvements, but they should not outrank safety, evidence, reliability, or governance.",
  },
];

const roadmap = [
  {
    window: "0–30 days",
    focus:
      "Validate boundaries and critical controls.",
    actions:
      "Confirm owners, approval gates, allowlists, idempotency, safe fallback, failure thresholds, and evidence completeness.",
    evidence:
      "Dry-run results, owner signoff, failure tests, baseline metrics.",
  },
  {
    window: "31–60 days",
    focus:
      "Improve reliability and workflow quality.",
    actions:
      "Tune stale-source handling, routing accuracy, exception queues, duplicate detection, and playbook mapping.",
    evidence:
      "Weekly scorecard trends, override reasons, routing history, source health.",
  },
  {
    window: "61–90 days",
    focus:
      "Evaluate value and decide whether to scale.",
    actions:
      "Compare targets, review analyst feedback, close exceptions, validate governance cadence, and make expand/hold/retire decisions.",
    evidence:
      "Balanced scorecard, governance review, exception closure, leadership recommendation.",
  },
];

const finalPlanSections = [
  "Executive Summary",
  "Automation Opportunity Map",
  "Human-in-the-Loop Decision Matrix",
  "Alert Enrichment Plan",
  "Ticketing and Workflow Automation Map",
  "Playbook and Runbook Design",
  "Safe Automation Boundary Checklist",
  "Automation Failure Mode Register",
  "Automation Value Scorecard",
  "Automation Governance Matrix",
  "Integrated Architecture and Workflow View",
  "Priority and 90-Day Roadmap",
  "Leadership Recommendation",
];

const dashboardMetrics = [
  {
    label: "Capstone decisions",
    value: "8",
    note: "Proceed, conditional, human-led, and blocked automation patterns",
  },
  {
    label: "P0 items",
    value: "3",
    note: "Ticket routing, high-consequence approval, and prohibited autonomous action",
  },
  {
    label: "Human judgment retained",
    value: "4",
    note: "Recommendation, approval, closure, and ownership-resolution decisions remain human-controlled",
  },
  {
    label: "Unsafe autonomous actions",
    value: "0",
    note: "The final design keeps the prohibited boundary at zero",
  },
];

const logs = [
  "[08:10] AUTO-D01 decision=PROCEED mode=AUTOMATED_SUPPORT metric=TIME_TO_USABLE_EVIDENCE",
  "[08:32] AUTO-D02 decision=PROCEED_CONDITIONALLY mode=LOW_IMPACT_WRITE controls=IDEMPOTENCY,ALLOWLIST",
  "[08:54] AUTO-D03 decision=PROCEED mode=HUMAN_IN_LOOP recommendation=PLAYBOOK_ONLY",
  "[09:16] AUTO-D04 decision=HUMAN_REQUIRED approval=EXPLICIT automated_decision=NO",
  "[09:38] AUTO-D05 decision=PROCEED routing_loop_containment=ENABLED fallback=EXCEPTION_REVIEW",
  "[10:00] AUTO-D06 decision=PROCEED disable_action=RECOMMEND_ONLY owner=PLATFORM_OWNER",
  "[10:22] AUTO-D07 decision=PROCEED_CONDITIONALLY closure=HUMAN_CONFIRM_REQUIRED",
  "[10:44] AUTO-D08 decision=BLOCKED unsafe_autonomous_action=0 boundary=ENFORCED",
];

const antiPatterns = [
  {
    title: "Automate the biggest-looking problem first",
    problem:
      "The team chooses a high-impact workflow because it appears impressive rather than because it is safe and mature.",
    better:
      "Choose bounded, repeatable work with clear evidence and governance first.",
  },
  {
    title: "Design each artifact in isolation",
    problem:
      "The routing plan, failure plan, metrics, and governance assumptions contradict one another.",
    better:
      "Cross-check all artifacts as one operating system.",
  },
  {
    title: "Measure speed without rework",
    problem:
      "Automation looks efficient while analysts spend extra time fixing bad routes or missing evidence.",
    better:
      "Measure end-to-end analyst effort and quality together.",
  },
  {
    title: "Treat recommendations as decisions",
    problem:
      "The interface suggests a playbook and the workflow acts as though the analyst approved it.",
    better:
      "Preserve explicit analyst selection or approval.",
  },
  {
    title: "Use fallback only in documentation",
    problem:
      "The plan says manual fallback exists, but no owner, state, or evidence path is defined.",
    better:
      "Make fallback operationally specific and measurable.",
  },
  {
    title: "Ignore retirement",
    problem:
      "Successful automation stays active forever even when its purpose or dependencies change.",
    better:
      "Define replacement, retirement, evidence archive, and owner review.",
  },
  {
    title: "Accept every temporary exception",
    problem:
      "Exceptions become a second uncontrolled configuration path.",
    better:
      "Use narrow scope, compensating controls, expiration, and closure evidence.",
  },
  {
    title: "Let governance lag behind capability",
    problem:
      "Permissions and action impact expand faster than review and ownership.",
    better:
      "Treat new write capabilities, new purpose, and new environments as material changes.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Approve ticket routing only with idempotency, current ownership, queue allowlists, loop detection, analyst override, and fallback queue evidence.",
    outcome:
      "Best. The automation remains useful while its most important failure and governance risks are controlled.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve ticket routing broadly because the action is administrative.",
    outcome:
      "Risky. Administrative automation can still create duplicates, loops, and stale ownership errors.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep all ticket creation and routing manual forever.",
    outcome:
      "Caution. Manual work preserves control but gives up a strong bounded automation opportunity.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Block autonomous high-impact action and redesign the workflow around evidence packaging, recommendation, explicit approval, and human-led decision authority.",
    outcome:
      "Best. This preserves defensive value without crossing the safe automation boundary.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow autonomous action when the scorecard reaches 99% accuracy.",
    outcome:
      "Risky. Accuracy does not create authority or erase action impact.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Allow autonomous action only after several successful dry runs.",
    outcome:
      "Risky. Dry-run success does not make a prohibited action appropriate.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of the A17 capstone?",
    choices: [
      "Integrate opportunity, human judgment, evidence, workflow, boundaries, failure handling, value, and governance into one defensible automation design.",
      "Automate as many tasks as possible.",
      "Create the longest possible runbook.",
      "Replace human analysts.",
    ],
    answer: 0,
    explanation:
      "The capstone is about coherent defensive design, not maximum automation depth.",
  },
  {
    question:
      "What should happen when a workflow has high ambiguity and high consequence?",
    choices: [
      "Keep the decision human-led and use automation for evidence packaging and routing support.",
      "Automate the decision if confidence is above 90%.",
      "Treat timeout as approval.",
      "Remove the uncertainty label.",
    ],
    answer: 0,
    explanation:
      "High ambiguity and consequence strengthen the need for explicit human judgment and authority.",
  },
  {
    question:
      "What is strongest for ticket-routing automation?",
    choices: [
      "Use current ownership, allowlists, idempotency, loop detection, fallback queues, evidence, and analyst override.",
      "Use historical ownership only.",
      "Allow unlimited reassignment.",
      "Guess unknown queues.",
    ],
    answer: 0,
    explanation:
      "Routing automation is useful when duplicate, stale-data, and loop risks are bounded.",
  },
  {
    question:
      "Why must failure planning be part of the initial design?",
    choices: [
      "Because automation should define containment, fallback, recovery, and disable behavior before failure occurs.",
      "Because failures never happen after deployment.",
      "Because metrics replace fallback.",
      "Because only technical owners handle failure.",
    ],
    answer: 0,
    explanation:
      "Reliable automation is defined by both normal behavior and failure behavior.",
  },
  {
    question:
      "What is strongest when one metric improves but another critical quality metric worsens?",
    choices: [
      "Investigate the tradeoff before declaring the automation successful.",
      "Use only the improved metric.",
      "Remove the worsening metric.",
      "Raise the threshold.",
    ],
    answer: 0,
    explanation:
      "Balanced measurement prevents metric gaming and hidden quality loss.",
  },
  {
    question:
      "What should happen when automation requests broader write permission?",
    choices: [
      "Treat it as a material change and reopen boundary, testing, risk, and governance review.",
      "Approve automatically.",
      "Let the script decide.",
      "Hide it in a minor version.",
    ],
    answer: 0,
    explanation:
      "Permission expansion changes impact and requires renewed review.",
  },
  {
    question:
      "What is the purpose of the Safe Automation Design and Governance Plan?",
    choices: [
      "Provide a complete leadership-ready record of automation value, boundaries, evidence, workflow, failure resilience, metrics, ownership, and final decision.",
      "Create offensive automation.",
      "Remove human approval.",
      "Replace all manual security work.",
    ],
    answer: 0,
    explanation:
      "The final plan shows why the automation should or should not exist and how it remains controlled over time.",
  },
];

const checklistItems = [
  "The automation opportunity is clearly defined.",
  "Baseline manual effort is documented.",
  "Human judgment boundaries are explicit.",
  "High-consequence decisions remain human-controlled.",
  "Enrichment is minimal and source-attributed.",
  "Freshness and confidence are visible.",
  "Missing and conflicting evidence have safe paths.",
  "Workflow states are clear.",
  "Routing uses current ownership.",
  "Duplicate handling is defined.",
  "Fallback queues exist.",
  "Playbooks and runbooks match the task.",
  "Stop conditions are explicit.",
  "Scripting permissions are bounded.",
  "Allowlists and validation are defined.",
  "Dry run is used where appropriate.",
  "Timeout, retry, and idempotency are defined.",
  "Failure modes are documented.",
  "Degraded mode and hard-stop criteria are separated.",
  "Health monitoring is defined.",
  "Balanced value metrics are defined.",
  "Baselines, targets, thresholds, and denominators are clear.",
  "Metric owners are assigned.",
  "Governance roles and decision rights are explicit.",
  "Exceptions have scope and expiration.",
  "Disable and re-enable authority are explicit.",
  "Retirement criteria are defined.",
  "Leadership priorities are explicit.",
  "A 90-day roadmap is included.",
  "Unsafe autonomous action remains blocked.",
];

const takeaways = [
  "Good security automation starts with a worthwhile problem, not with code.",
  "The safest designs automate repetitive support while preserving human judgment at ambiguous or consequential decision points.",
  "Evidence quality, source freshness, privacy minimization, and uncertainty visibility are core automation controls.",
  "Ticketing and workflow automation need duplicate protection, routing safeguards, fallback, evidence, and override.",
  "Playbooks guide branching judgment; runbooks support bounded repeatable procedures.",
  "Scripting boundaries should define purpose, least privilege, validation, allowlists, dry runs, timeouts, idempotency, and audit evidence.",
  "Failure planning should distinguish graceful degradation, pause, exception handling, disable, recovery, and re-enable.",
  "Balanced measurement should combine efficiency, quality, human effectiveness, reliability, safety, and governance.",
  "Governance keeps ownership, authority, change control, exceptions, metrics, lifecycle, and retirement explicit.",
  "The final Safe Automation Design and Governance Plan is the complete A17 portfolio outcome.",
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
        Module A17
      </Link>

      <Link
        href={moduleTest}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        A17 Module Test
      </Link>
    </div>
  );
}

export default function SecurityAutomationDesignLabPage() {
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
              A17.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Security Automation Design Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The A17 capstone combines opportunity selection, human judgment,
            enrichment, ticketing, playbooks, scripting boundaries, failure
            resilience, measurement, and governance into one complete safe
            automation design.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All automations, alerts, tickets, queues, evidence, metrics, roles,
            systems, and decisions in this capstone are fictional or synthetic.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A17: Security Automation Concepts"
          lessonTitle="Security Automation Design Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.10 Capstone Readiness"
          items={[
            "I have completed or understand the purpose of all nine prior A17 artifacts.",
            "I can distinguish automation support from human judgment and authority.",
            "I can explain failure, measurement, and governance as part of the design rather than afterthoughts.",
            "I will keep the capstone fictional, inert, defensive, and school-safe.",
          ]}
        />

        <Section
          eyebrow="Capstone Purpose"
          title="A Good Automation Design Must Make Sense as One System"
        >
          <p className="leading-8">
            The previous lessons examined automation from different angles.
            This capstone tests whether those decisions still make sense when
            combined. A workflow can look strong in one document and weak in
            another. For example, a routing rule may appear efficient until the
            failure register shows stale ownership risk, or a recommendation may
            appear accurate until the human-judgment matrix shows that analysts
            have no meaningful override.
          </p>

          <p className="mt-4 leading-8">
            Your job in A17.10 is to resolve those conflicts and produce one
            final design that could be explained to analysts, platform owners,
            governance reviewers, and leadership.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The final question is not “Can we automate this?” It is “Should we automate this, how far, under whose authority, with what evidence, and with what failure plan?”
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capstone Capabilities"
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
          eyebrow="Portfolio Integration"
          title="Nine Prior Artifacts Become One Final Plan"
        >
          <div className="grid gap-5">
            {priorArtifacts.map((item) => (
              <article
                key={item.lesson}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.lesson}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.contribution}
                </p>

                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Capstone question: {item.capstoneQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Integrated Review"
          title="Ten Questions Every Final Automation Design Must Answer"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {capstoneDecisionQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Required evidence: {item.required}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Integrated Architecture"
          title="Seven Layers of a Safe Automation System"
        >
          <div className="grid gap-5">
            {architectureLayers.map((item, index) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-blue-50">
                      {item.layer}
                    </h3>
                    <p className="mt-2 leading-7 text-blue-100">
                      {item.responsibility}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Controls: {item.controls}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Tradeoffs"
          title="Eight Design Tensions the Capstone Must Resolve"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {designTradeoffs.map((item) => (
              <article
                key={item.tension}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.tension}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Weak choice: {item.weakChoice}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Stronger choice: {item.strongerChoice}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Capstone Decision Set"
          title="Eight Northbridge Automation Decisions"
        >
          <div className="grid gap-5">
            {northbridgeScenario.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.humanBoundary}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.priority}
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
                    ["Opportunity", item.opportunity],
                    ["Enrichment", item.enrichment],
                    ["Workflow", item.workflow],
                    ["Guidance", item.guidance],
                    ["Scripting boundary", item.scripting],
                    ["Failure concern", item.failure],
                    ["Primary metric", item.metric],
                    ["Governance", item.governance],
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
          title="Northbridge Safe Automation Design Dashboard"
          subtitle="Fictional capstone priorities, human-judgment boundaries, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Ticket Routing Still Below Final Accuracy Target"
          severity="High"
          time="10:12"
          source="Fictional A17 Capstone Review"
          details="AUTO-D02 is a strong bounded automation opportunity, but routing accuracy remains slightly below the final target and stale ownership remains the main error source."
          recommendation="Proceed conditionally. Keep idempotency, queue allowlists, loop detection, fallback queue, analyst override, and source-health monitoring in place until the target is met consistently."
        />

        <FakeLogPanel
          title="Fictional A17 Capstone Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Ticket Routing Final Decision"
          question="What is the strongest final recommendation for AUTO-D02?"
          evidence={[
            "Ticket creation and routing are repetitive administrative tasks.",
            "Routing accuracy improved from 81% to 94% but the target is at least 95%.",
            "Idempotency reduced duplicate creation to 0.4%.",
            "Queue allowlists and routing-loop detection are available.",
            "Analysts can override incorrect routing with a reason.",
            "A General Security Review fallback queue exists.",
          ]}
          options={[
            "Proceed conditionally with the existing controls, continue ownership-source improvement, and require target consistency before expansion.",
            "Approve broad routing with no conditions because performance improved.",
            "Return all ticketing to manual work permanently.",
            "Remove analyst override to make routing metrics look cleaner.",
          ]}
          bestAnswer={0}
          explanation="The opportunity is strong, but one important quality target is not yet consistently met. Conditional operation with clear controls is the defensible choice."
        />

        <Section
          eyebrow="Leadership Priorities"
          title="What Should Be Fixed First?"
        >
          <div className="grid gap-5">
            {leadershipPriorities.map((item) => (
              <article
                key={item.priority}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.priority}
                </h3>
                <p className="mt-3 leading-7 text-emerald-100">
                  {item.items}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Leadership meaning: {item.leadershipMeaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="90-Day Roadmap"
          title="A Practical Sequence for Safe Automation Improvement"
        >
          <div className="grid gap-5">
            {roadmap.map((item) => (
              <article
                key={item.window}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <h3 className="text-xl font-black text-cyan-50">
                  {item.window}
                </h3>
                <p className="mt-3 font-black text-white">{item.focus}</p>
                <p className="mt-3 leading-7 text-cyan-100">
                  Actions: {item.actions}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Final Portfolio"
          title="Safe Automation Design and Governance Plan"
        >
          <p className="leading-8">
            Your final A17 package should read like one professional review, not
            nine disconnected worksheets. Leadership should be able to see the
            opportunity, value, human boundary, evidence, workflow, technical
            boundary, failure behavior, metrics, governance, priorities, and
            final recommendation in one coherent story.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {finalPlanSections.map((item, index) => (
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
        </Section>

        <Section
          eyebrow="Leadership Recommendation"
          title="Final Northbridge Decision"
        >
          <div className="rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-black text-emerald-50">
              Proceed with bounded defensive automation—conditionally where quality is still below target
            </h3>
            <p className="mt-4 leading-8 text-emerald-100">
              Northbridge should automate repetitive evidence collection,
              ticket creation, routing support, recommendation support,
              workflow-health detection, and low-impact administrative
              transitions where controls are strong. High-ambiguity and
              high-consequence decisions should remain human-led.
            </p>

            <p className="mt-4 leading-8 text-emerald-100">
              Expansion should depend on routing accuracy, evidence
              completeness, stale-data rate, fallback success, approval
              completeness, duplicate rate, analyst override quality, and
              governance review. Any attempt to cross into prohibited autonomous
              destructive, exploitative, credential-related, bypass, or real
              environment-changing action remains blocked.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Common Capstone Mistakes"
          title="Eight Ways an Integrated Design Becomes Weak"
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
          title="Scenario Decision Lab 1 — Final Ticket Routing Approval"
          scenario="The fictional ticket-routing automation has strong controls and major improvement, but routing accuracy is still slightly below target because the ownership source occasionally becomes stale."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Autonomous High-Impact Proposal"
          scenario="A team proposes allowing the automation to make a high-impact real-world decision autonomously after several months of strong scorecard performance."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build the Final Safe Automation Design and Governance Plan"
        >
          <p className="leading-8">
            Integrate your prior A17 artifacts into one capstone package and
            resolve contradictions among automation value, evidence quality,
            human judgment, permissions, failure behavior, metrics, and
            governance.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen integrated AUTO-D decision records.",
              "Give every record a stable AUTO-D ID.",
              "Link every decision to relevant OPP, HITL, ENR, WFA, PRB, BND, FM, VAL, and GOV-A IDs.",
              "State the automation opportunity.",
              "State the baseline manual problem.",
              "Define the human-judgment mode.",
              "Define the necessary enrichment.",
              "Define freshness and evidence confidence.",
              "Define the workflow state changes.",
              "Define routing and duplicate behavior.",
              "Define playbook/runbook/checklist support.",
              "Define the scripting boundary.",
              "Define conceptual permissions.",
              "Define validation.",
              "Define allowlists.",
              "Define dry-run behavior.",
              "Define timeout and retry behavior.",
              "Define idempotency.",
              "Define failure modes.",
              "Define degraded mode.",
              "Define hard-stop criteria.",
              "Define recovery and re-enable criteria.",
              "Define balanced value metrics.",
              "Define baseline, target, and threshold.",
              "Assign metric owners.",
              "Assign automation and workflow owners.",
              "Assign evidence and control owners.",
              "Assign approval authority.",
              "Assign exception authority.",
              "Assign disable authority.",
              "Define review cadence.",
              "Define material change triggers.",
              "Define retirement criteria.",
              "Classify each decision as Proceed, Proceed Conditionally, Human Required, Redesign, or Blocked.",
              "Assign each decision a P0, P1, P2, or P3 priority.",
              "Write a 30-day action view.",
              "Write a 60-day action view.",
              "Write a 90-day action view.",
              "Write a monitoring-only view.",
              "Write a leadership summary.",
              "Write a final recommendation.",
              "Include at least three Automated Support decisions.",
              "Include at least three Human-in-the-Loop decisions.",
              "Include at least two Human-Led decisions.",
              "Include at least two Prohibited decisions.",
              "Include at least three conditional approvals tied to metric targets.",
              "Include at least three examples where a failure mode changes the final design.",
              "Include at least three examples where governance changes the final design.",
              "Include at least three examples where a metric improvement is rejected because another quality measure worsens.",
              "Include at least three examples where privacy minimization reduces enrichment scope.",
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
            <p className="font-black">Capstone safety boundary</p>
            <p className="mt-2 leading-7">
              Use only fictional alerts, tickets, queues, roles, systems,
              metrics, dependencies, approvals, and evidence. Do not connect the
              capstone to real endpoints, networks, cloud accounts, production
              platforms, credentials, private records, or live security tools.
              Do not create or execute destructive, exploitative,
              credential-related, bypass, unauthorized, or real
              environment-changing automation.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Final Autonomous-Action Proposal"
          question="What is the strongest final decision for AUTO-D08?"
          evidence={[
            "The proposed action is high impact.",
            "It would materially affect a real environment.",
            "The action is not required for evidence collection, routing, recommendation, or workflow support.",
            "The proposal removes explicit human authority.",
            "A safer design can package evidence and request approval instead.",
            "Strong past automation metrics do not create new authority.",
          ]}
          options={[
            "Block the autonomous action and redesign around evidence support plus explicit authorized human decision-making.",
            "Allow it once scorecard accuracy exceeds 99%.",
            "Allow it after several successful dry runs.",
            "Allow it if the technical owner approves.",
          ]}
          bestAnswer={0}
          explanation="Performance does not override the safe automation boundary. The design should remain defensive, bounded, and human-governed."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write the Leadership Decision Memo"
        >
          <p className="leading-8">
            Prepare a concise fictional leadership memo that answers one
            question: “What should Northbridge automate next, under what
            conditions, and what should remain human-controlled?”
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Top automation opportunities",
              "Top human-required decisions",
              "Top prohibited boundary",
              "Top evidence dependency",
              "Top reliability risk",
              "Top privacy consideration",
              "Top governance dependency",
              "Top metric to watch",
              "Top conditional approval",
              "Top disable trigger",
              "30-day priorities",
              "60-day priorities",
              "90-day decision",
              "Leadership owner",
              "Expected analyst benefit",
              "Expected business benefit",
              "Remaining uncertainty",
              "Final recommendation",
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
        </Section>

        <DefenderChecklist
          title="A17.10 Capstone Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Capstone Questions"
        >
          <MiniQuiz
            title="A17.10 Mini Quiz: Security Automation Design Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final Portfolio Build — Safe Automation Design and Governance Plan"
          prompt="Complete the final A17 capstone portfolio package. Integrate your Automation Opportunity Map, Human-in-the-Loop Decision Matrix, Alert Enrichment Plan, Ticketing and Workflow Automation Map, Playbook and Runbook Design, Safe Automation Boundary Checklist, Automation Failure Mode Register, Automation Value Scorecard, and Automation Governance Matrix into one Safe Automation Design and Governance Plan. Add an executive summary, integrated architecture view, at least fifteen AUTO-D decisions, P0–P3 priorities, a 90-day roadmap, leadership summary, and final recommendation."
          tips={[
            "Resolve contradictions across the nine prior artifacts.",
            "Keep the design bounded and defensible.",
            "Let failure evidence change the design.",
            "Let metrics and governance drive conditions for expansion.",
            "Keep high-impact judgment human-controlled.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A17 Module Test?"
        >
          <p className="leading-8">
            Before taking the module test, make sure you can connect automation
            opportunity, human judgment, evidence, workflow, documentation,
            scripting boundaries, failure, measurement, and governance without
            treating any one area as the entire answer.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why a strong automation opportunity is not automatically a strong automation design.",
              "I can identify exactly where human judgment and approval must remain.",
              "I can explain how failure modes, metrics, and governance change the final architecture.",
              "I can write a conditional approval tied to measurable evidence.",
              "I can defend the final Safe Automation Design and Governance Plan to a leadership audience.",
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
          title="How to Make the Final A17 Plan Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the decision",
                detail:
                  "Leadership should see what should proceed, what is conditional, what remains human-led, and what is blocked.",
              },
              {
                title: "Cross-reference the evidence",
                detail:
                  "Every final AUTO-D decision should link back to the prior A17 artifacts that support it.",
              },
              {
                title: "Show conditions",
                detail:
                  "Conditional approval should name the target, threshold, owner, and evidence needed for expansion.",
              },
              {
                title: "Show failure resilience",
                detail:
                  "The final plan should make degraded mode, hard stop, disable, recovery, and re-enable behavior clear.",
              },
              {
                title: "Show balanced value",
                detail:
                  "Efficiency should be presented alongside quality, reliability, human effectiveness, safety, and governance.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every major decision needs a responsible role, not a vague 'security team' label.",
              },
              {
                title: "Show the roadmap",
                detail:
                  "Leadership should understand what changes first and what evidence will support the 90-day decision.",
              },
              {
                title: "End with a clear recommendation",
                detail:
                  "Summarize the expected value, remaining risk, conditions, and final decision in plain language.",
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
            Capstone Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            A17.10 remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not connect the capstone to real security platforms, production
            ticketing systems, endpoints, networks, cloud accounts, credentials,
            private records, or live response tools. Do not create or execute
            destructive, exploitative, credential-related, bypass, unauthorized,
            or real environment-changing automation. The capstone is about safe
            architecture, evidence, workflow, human judgment, resilience,
            measurement, and governance.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.10 Security Automation Design Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You have now integrated all nine A17 artifacts into the final Safe
            Automation Design and Governance Plan. The next page is the A17
            Module Test covering Security Automation Concepts.
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