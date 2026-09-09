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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/automation-vs-human-judgment`;

const objectives = [
  "Explain why defensive security teams automate repetitive, evidence-rich, time-sensitive, and high-volume work while preserving accountable human judgment for consequential decisions.",
  "Distinguish strong automation candidates from weak candidates by examining task repeatability, input quality, decision ambiguity, permissions, failure impact, exception rate, and evidence requirements.",
  "Evaluate how automation can improve consistency, queue health, evidence quality, routing, enrichment, analyst focus, and response support without treating speed or activity volume as the only measures of value.",
  "Recognize when a task should remain human-controlled because it requires contextual judgment, authority, uncertainty handling, ethical responsibility, or a potentially high-impact environment-changing decision.",
  "Build an Automation Opportunity Map that becomes the first artifact in the A17 Safe Automation Design and Governance Plan.",
];

const reasonsAutomationExists = [
  {
    reason: "Repetitive workload",
    explanation:
      "Analysts often repeat the same low-judgment steps across many alerts: collecting context, checking ownership, opening tickets, attaching evidence, updating status, and routing work.",
    value:
      "Automation can reduce repetitive effort so analysts spend more time interpreting evidence and making decisions.",
    caution:
      "A task being repetitive does not automatically make it safe to automate.",
  },
  {
    reason: "High alert volume",
    explanation:
      "A defensive team may receive more records than people can manually enrich or route consistently.",
    value:
      "Automation can normalize, group, enrich, and queue records before analyst review.",
    caution:
      "High volume should not pressure teams into automating risky decisions they do not understand.",
  },
  {
    reason: "Consistency",
    explanation:
      "Humans may format tickets differently, forget fields, or use inconsistent routing during busy periods.",
    value:
      "Automation can apply the same approved workflow logic and evidence structure every time.",
    caution:
      "Consistent execution of a bad rule is still bad execution.",
  },
  {
    reason: "Speed",
    explanation:
      "Context gathering, ticket creation, and evidence attachment can delay review when done manually.",
    value:
      "Automation can prepare evidence quickly so humans receive a better starting point.",
    caution:
      "Faster is useful only when the automated output is accurate, safe, and reviewable.",
  },
  {
    reason: "Evidence quality",
    explanation:
      "Manual processes can lose timestamps, source information, decision history, or ownership context.",
    value:
      "Automation can preserve structured metadata about what happened, when, why, and under which rule version.",
    caution:
      "Evidence should be content-minimized and should not duplicate sensitive data unnecessarily.",
  },
  {
    reason: "Queue health",
    explanation:
      "Unassigned, duplicate, stale, or misrouted work can make an analyst queue harder to manage.",
    value:
      "Automation can help deduplicate, prioritize, assign, and surface aging work for review.",
    caution:
      "Analysts need override capability when grouping or routing logic does not fit the real context.",
  },
  {
    reason: "Operational handoffs",
    explanation:
      "Defensive work often moves between detection, triage, incident response, identity, platform, and business teams.",
    value:
      "Automation can preserve the handoff package and make ownership transitions explicit.",
    caution:
      "Automation should not invent authority or decide who owns a business risk when governance is unclear.",
  },
  {
    reason: "Analyst focus",
    explanation:
      "Human attention is limited and is most valuable when evidence is ambiguous, incomplete, conflicting, or consequential.",
    value:
      "Automation can handle repeatable support steps and preserve human attention for judgment.",
    caution:
      "The goal is not to remove analysts; it is to use their judgment where it matters most.",
  },
];

const strongCandidateTraits = [
  {
    trait: "Repeatable inputs",
    strong:
      "The workflow receives a stable set of fields such as alert ID, timestamp, synthetic asset ID, and detection category.",
    weak:
      "Every case begins with unstructured information that requires interpretation before the workflow can even start.",
  },
  {
    trait: "Deterministic support step",
    strong:
      "The output can be produced through an approved rule, such as attaching known asset ownership or creating a ticket.",
    weak:
      "The output requires deciding whether a person is malicious, responsible, or trustworthy.",
  },
  {
    trait: "Low-impact output",
    strong:
      "The workflow enriches, routes, groups, records, recommends, or requests approval.",
    weak:
      "The workflow would directly alter a real environment, disable controls, or take destructive action.",
  },
  {
    trait: "Good evidence",
    strong:
      "Inputs are attributable, current, versioned, and can be checked by an analyst.",
    weak:
      "Inputs come from stale or unknown sources and the workflow cannot explain why it reached its output.",
  },
  {
    trait: "Manageable exceptions",
    strong:
      "Unusual cases are uncommon and can move safely to a human review queue.",
    weak:
      "Most cases are exceptions and require manual interpretation anyway.",
  },
  {
    trait: "Clear ownership",
    strong:
      "A platform owner, control owner, evidence owner, and human review role are known.",
    weak:
      "No one owns the workflow, rule updates, failures, or approval decisions.",
  },
  {
    trait: "Safe fallback",
    strong:
      "When enrichment is missing or a dependency fails, the workflow pauses, marks the gap, and routes to review.",
    weak:
      "The workflow guesses, silently skips evidence, or continues as though missing data were trustworthy.",
  },
  {
    trait: "Measurable outcome",
    strong:
      "The team can measure time saved, routing quality, exception rate, evidence completeness, and analyst workload.",
    weak:
      "Success is measured only by the number of automated actions.",
  },
];

const weakCandidateSignals = [
  {
    signal: "High-impact environment change",
    why:
      "A consequential action may require authority, context, proportionality, and confirmation that a machine rule cannot fully evaluate.",
    safer:
      "Automate evidence packaging and approval requests, not the final action.",
  },
  {
    signal: "Ambiguous evidence",
    why:
      "The same indicators can mean different things depending on business context, maintenance, user behavior, or system history.",
    safer:
      "Automate enrichment and let a qualified analyst interpret the evidence.",
  },
  {
    signal: "Unclear ownership",
    why:
      "Automation cannot fix a governance problem when no one knows who has decision authority.",
    safer:
      "Resolve ownership before automating the handoff.",
  },
  {
    signal: "Frequent exceptions",
    why:
      "A workflow with many edge cases may create more maintenance and false confidence than value.",
    safer:
      "Keep human review central until the process becomes stable and well understood.",
  },
  {
    signal: "Unreliable source data",
    why:
      "Stale, incomplete, contradictory, or unauthenticated inputs can make automated outputs misleading.",
    safer:
      "Add source-quality checks and safe fallback states first.",
  },
  {
    signal: "No audit trail",
    why:
      "A workflow that cannot explain its inputs, rule version, output, owner, and exceptions is difficult to trust or review.",
    safer:
      "Design evidence and observability before expanding automation.",
  },
  {
    signal: "Unbounded permissions",
    why:
      "Overly broad access increases the impact of mistakes and weakens least privilege.",
    safer:
      "Limit the workflow to the smallest permissions needed for the support task.",
  },
  {
    signal: "No shutdown condition",
    why:
      "Automation may continue operating after data, ownership, integrations, or business purpose change.",
    safer:
      "Define health checks, change triggers, disable criteria, and an accountable owner.",
  },
];

const automationValueDimensions = [
  {
    dimension: "Time to usable evidence",
    description:
      "How quickly an analyst receives a complete, reviewable evidence package.",
    healthy:
      "Context arrives faster without hiding missing or uncertain fields.",
  },
  {
    dimension: "Analyst effort",
    description:
      "How much repetitive work is removed from the human workflow.",
    healthy:
      "Analysts spend less time copying data and more time interpreting evidence.",
  },
  {
    dimension: "Consistency",
    description:
      "Whether approved fields, routing, evidence structure, and status transitions are applied reliably.",
    healthy:
      "The same input conditions produce the same documented support result.",
  },
  {
    dimension: "Evidence completeness",
    description:
      "Whether required sources, timestamps, ownership, rule versions, and exception states are visible.",
    healthy:
      "Missing evidence is labeled instead of silently treated as present.",
  },
  {
    dimension: "Exception rate",
    description:
      "How often the workflow requires manual intervention because normal logic does not fit.",
    healthy:
      "Exceptions remain manageable, visible, and useful for improving the design.",
  },
  {
    dimension: "Routing quality",
    description:
      "Whether work reaches the correct human owner without unnecessary reassignment.",
    healthy:
      "Fewer tickets bounce between teams and ownership is easier to understand.",
  },
  {
    dimension: "Queue health",
    description:
      "Whether duplicates, stale items, unassigned work, and aging records are easier to manage.",
    healthy:
      "Analysts can identify what needs attention instead of sorting the queue manually.",
  },
  {
    dimension: "Safety outcome",
    description:
      "Whether the workflow remains within approved boundaries and fails safely when conditions are uncertain.",
    healthy:
      "No unsafe autonomous action, hidden failure, or unreviewed high-impact decision occurs.",
  },
];

const humanJudgmentExamples = [
  {
    situation: "Conflicting evidence",
    automationCan:
      "Collect both sources, show timestamps, identify disagreement, and package the case.",
    humanMust:
      "Decide which evidence is more credible in context and what additional information is needed.",
  },
  {
    situation: "High-impact decision",
    automationCan:
      "Pause, summarize the case, identify the authorized reviewer, and request approval.",
    humanMust:
      "Approve, reject, or request more evidence within defined authority.",
  },
  {
    situation: "Unusual business activity",
    automationCan:
      "Attach known maintenance windows, system ownership, and related synthetic history.",
    humanMust:
      "Decide whether the activity is expected for that service and business context.",
  },
  {
    situation: "Weak source confidence",
    automationCan:
      "Mark enrichment as stale or missing and prevent the workflow from treating it as confirmed.",
    humanMust:
      "Determine whether the available evidence is sufficient to proceed.",
  },
  {
    situation: "Policy or ownership conflict",
    automationCan:
      "Route the issue to the recorded owner and show the conflicting requirements.",
    humanMust:
      "Resolve the governance question or escalate to the right authority.",
  },
  {
    situation: "New workflow purpose",
    automationCan:
      "Detect that the requested use differs from the registered purpose and open a change review.",
    humanMust:
      "Decide whether the new purpose should be approved and what controls must change.",
  },
];

const opportunityFields = [
  {
    field: "OPP ID",
    purpose:
      "Stable identifier for the automation opportunity.",
    example:
      "OPP-101",
  },
  {
    field: "Current task",
    purpose:
      "Describes the repetitive defensive work being performed today.",
    example:
      "Copy asset owner and criticality into each synthetic alert ticket",
  },
  {
    field: "Business outcome",
    purpose:
      "Explains what the team is trying to improve.",
    example:
      "Give analysts usable context earlier",
  },
  {
    field: "Inputs",
    purpose:
      "Lists the synthetic evidence the workflow depends on.",
    example:
      "Alert ID, asset ID, owner directory, criticality record",
  },
  {
    field: "Automation support",
    purpose:
      "Defines the bounded support action the workflow would perform.",
    example:
      "Attach owner and criticality to the alert record",
  },
  {
    field: "Human judgment",
    purpose:
      "Defines what remains with the analyst or authorized reviewer.",
    example:
      "Interpret the alert and decide disposition",
  },
  {
    field: "Failure impact",
    purpose:
      "Explains what happens if the workflow is wrong or unavailable.",
    example:
      "Analyst receives incomplete context; no environment change occurs",
  },
  {
    field: "Fallback",
    purpose:
      "Defines the safe state when data or dependencies are missing.",
    example:
      "Mark enrichment unavailable and send to analyst review",
  },
  {
    field: "Evidence",
    purpose:
      "Defines what proves the workflow behaved as intended.",
    example:
      "Source, timestamp, rule version, attached fields, missing-data state",
  },
  {
    field: "Owner",
    purpose:
      "Names the role responsible for workflow health and decisions.",
    example:
      "Security Platform Owner",
  },
  {
    field: "Candidate rating",
    purpose:
      "Summarizes whether the task is Strong, Conditional, Human-led, or Out of Bounds.",
    example:
      "Strong",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines what should reopen the automation decision.",
    example:
      "New data source, routing change, exception spike, or permission change",
  },
];

const northbridgeOpportunities = [
  {
    id: "OPP-101",
    task:
      "Attach fictional asset owner, business service, and criticality to synthetic alerts.",
    outcome:
      "Reduce analyst lookup time and improve initial context.",
    repeatability:
      "High",
    inputQuality:
      "High",
    ambiguity:
      "Low",
    failureImpact:
      "Low",
    automation:
      "Enrich alert metadata only.",
    human:
      "Analyst interprets alert significance.",
    fallback:
      "Mark missing enrichment and continue to human review.",
    evidence:
      "Source, timestamp, enrichment version, attached values, missing fields",
    owner:
      "Security Platform Owner",
    rating:
      "Strong candidate",
  },
  {
    id: "OPP-102",
    task:
      "Create and route a fictional ticket from a synthetic alert.",
    outcome:
      "Improve queue consistency and assignment speed.",
    repeatability:
      "High",
    inputQuality:
      "High",
    ambiguity:
      "Low-Medium",
    failureImpact:
      "Low",
    automation:
      "Create ticket, attach summary, assign approved team.",
    human:
      "Assigned analyst validates context and disposition.",
    fallback:
      "Send to general review queue if routing data is missing.",
    evidence:
      "Ticket ID, routing rule, reason, assignment time, exception state",
    owner:
      "SOC Workflow Owner",
    rating:
      "Strong candidate",
  },
  {
    id: "OPP-103",
    task:
      "Group synthetic alerts that match an approved duplicate fingerprint.",
    outcome:
      "Reduce repetitive queue review while preserving evidence.",
    repeatability:
      "High",
    inputQuality:
      "Moderate-High",
    ambiguity:
      "Medium",
    failureImpact:
      "Low-Medium",
    automation:
      "Group records and preserve all source IDs.",
    human:
      "Analyst can separate records when context differs.",
    fallback:
      "Do not group when fingerprint confidence is below threshold.",
    evidence:
      "Grouping rule, grouped IDs, confidence, analyst override",
    owner:
      "Detection Operations Owner",
    rating:
      "Conditional candidate",
  },
  {
    id: "OPP-104",
    task:
      "Recommend the appropriate defensive playbook based on alert category and evidence completeness.",
    outcome:
      "Help analysts reach relevant guidance faster.",
    repeatability:
      "High",
    inputQuality:
      "High",
    ambiguity:
      "Medium",
    failureImpact:
      "Low",
    automation:
      "Recommend guidance only.",
    human:
      "Analyst decides whether the playbook fits the case.",
    fallback:
      "Show general triage guidance when category is unclear.",
    evidence:
      "Recommendation reason, playbook version, analyst selection",
    owner:
      "Incident Response Process Owner",
    rating:
      "Decision-support candidate",
  },
  {
    id: "OPP-105",
    task:
      "Automatically make a consequential response decision when evidence is conflicting.",
    outcome:
      "Reduce analyst decision time.",
    repeatability:
      "Low",
    inputQuality:
      "Mixed",
    ambiguity:
      "High",
    failureImpact:
      "High",
    automation:
      "Not appropriate as an autonomous decision.",
    human:
      "Authorized analyst or response lead evaluates and decides.",
    fallback:
      "Package evidence and pause for human approval.",
    evidence:
      "Evidence summary, disagreement state, approver, decision rationale",
    owner:
      "Incident Response Lead",
    rating:
      "Human-led",
  },
  {
    id: "OPP-106",
    task:
      "Monitor fictional workflow health and create a maintenance ticket when error or exception thresholds are crossed.",
    outcome:
      "Detect automation degradation before analysts lose trust.",
    repeatability:
      "High",
    inputQuality:
      "High",
    ambiguity:
      "Low",
    failureImpact:
      "Low",
    automation:
      "Update dashboard and open maintenance ticket.",
    human:
      "Platform owner reviews root cause and decides changes.",
    fallback:
      "Display degraded status when the health source is unavailable.",
    evidence:
      "Metric history, threshold, ticket ID, owner decision",
    owner:
      "Security Platform Owner",
    rating:
      "Strong candidate",
  },
];

const dashboardMetrics = [
  {
    label: "Opportunities reviewed",
    value: "6",
    note: "Enrichment, ticketing, grouping, guidance, high-impact judgment, and health monitoring",
  },
  {
    label: "Strong candidates",
    value: "3",
    note: "Enrichment, ticket creation/routing, and health monitoring",
  },
  {
    label: "Conditional / support",
    value: "2",
    note: "Duplicate grouping and playbook recommendation retain analyst override",
  },
  {
    label: "Human-led",
    value: "1",
    note: "Consequential decision with conflicting evidence remains human-controlled",
  },
];

const logs = [
  "[08:12] OPP-101 task=ASSET_ENRICHMENT repeatability=HIGH ambiguity=LOW candidate=STRONG",
  "[08:34] OPP-102 task=TICKET_ROUTING input_quality=HIGH failure_impact=LOW candidate=STRONG",
  "[08:56] OPP-103 task=DUPLICATE_GROUPING ambiguity=MEDIUM analyst_override=YES candidate=CONDITIONAL",
  "[09:18] OPP-104 task=PLAYBOOK_RECOMMENDATION execute_action=NO candidate=DECISION_SUPPORT",
  "[09:40] OPP-105 task=CONSEQUENTIAL_DECISION ambiguity=HIGH failure_impact=HIGH candidate=HUMAN_LED",
  "[10:02] OPP-106 task=AUTOMATION_HEALTH repeatability=HIGH candidate=STRONG",
];

const antiPatterns = [
  {
    title: "Automate because volume is high",
    problem:
      "The team assumes that a large queue justifies automating decisions it does not understand.",
    better:
      "Automate bounded support work first and keep ambiguous judgment human-controlled.",
  },
  {
    title: "Measure success by action count",
    problem:
      "The workflow looks impressive because it performs many automated steps, even if analysts still spend the same time fixing errors.",
    better:
      "Measure evidence quality, analyst effort, routing quality, exception rate, queue health, and safety outcomes.",
  },
  {
    title: "Hide missing enrichment",
    problem:
      "The workflow continues as though absent context were confirmed.",
    better:
      "Label missing or stale evidence and route safely to human review.",
  },
  {
    title: "Remove analyst override",
    problem:
      "Grouping or routing logic cannot be corrected when business context differs from the rule.",
    better:
      "Preserve override, exception evidence, and feedback for rule improvement.",
  },
  {
    title: "Automate before ownership",
    problem:
      "The workflow has no clear platform owner, control owner, evidence owner, or approval authority.",
    better:
      "Resolve governance before expanding the workflow.",
  },
  {
    title: "Broad permissions for convenience",
    problem:
      "The automation receives more access than its bounded support task requires.",
    better:
      "Design least-privilege permissions around the exact workflow function.",
  },
  {
    title: "No failure state",
    problem:
      "Dependency outages or invalid inputs cause silent skips or unpredictable output.",
    better:
      "Define timeout, degraded, retry, manual-review, and disable states.",
  },
  {
    title: "Automation replaces accountability",
    problem:
      "The team treats a workflow output as final even when a consequential decision requires judgment and authority.",
    better:
      "Use automation to support the decision and keep accountable human approval where required.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Automate the owner and criticality lookup, attach the source and timestamp, and mark missing values clearly for analyst review.",
    outcome:
      "Best. This removes repetitive lookup work while preserving evidence quality and human interpretation.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Automate the final alert disposition because the asset owner is now known.",
    outcome:
      "Risky. Asset context improves the evidence but does not replace analyst judgment about the alert.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Skip enrichment entirely because any automation introduces risk.",
    outcome:
      "Caution. Bounded enrichment is a strong low-impact automation candidate when evidence and fallback are designed well.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Have the workflow package the conflicting evidence, pause, identify the authorized reviewer, and request a human decision.",
    outcome:
      "Best. High ambiguity and high consequence make this a human-controlled decision point.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Let the workflow choose whichever evidence source updated most recently.",
    outcome:
      "Risky. Freshness alone does not prove that one source is more credible in context.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Automatically choose the most severe outcome so the workflow is conservative.",
    outcome:
      "Risky. Severity bias is still an autonomous judgment and can create unnecessary harm or disruption.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why do defensive security teams use automation?",
    choices: [
      "To reduce repetitive support work, improve consistency and evidence, and preserve human attention for judgment.",
      "To remove all humans from security decisions.",
      "To make every response action autonomous.",
      "To maximize the number of actions a platform performs.",
    ],
    answer: 0,
    explanation:
      "The goal is to improve repetitive defensive work while keeping accountable human judgment where it matters.",
  },
  {
    question:
      "Which task is the strongest automation candidate?",
    choices: [
      "Attach current synthetic asset ownership and criticality to an alert record.",
      "Decide whether a person is malicious from conflicting evidence.",
      "Make an irreversible environment-changing decision.",
      "Resolve an unclear business-risk ownership dispute.",
    ],
    answer: 0,
    explanation:
      "Stable enrichment is repeatable, evidence-rich, low impact, and easy to review.",
  },
  {
    question:
      "What should happen when required enrichment data is missing?",
    choices: [
      "Label the missing evidence and use a safe fallback or human-review path.",
      "Guess the missing value.",
      "Continue as though the value were confirmed.",
      "Hide the failure so the workflow remains fast.",
    ],
    answer: 0,
    explanation:
      "Missing evidence should reduce confidence and remain visible.",
  },
  {
    question:
      "Why is action count a weak measure of automation value?",
    choices: [
      "A workflow can perform many actions while still creating errors, exceptions, rework, or unsafe outcomes.",
      "Automation should never be measured.",
      "Action count is always zero in security workflows.",
      "Only ticket volume matters.",
    ],
    answer: 0,
    explanation:
      "Value should include quality, effort, routing, evidence, exceptions, queue health, and safety.",
  },
  {
    question:
      "Which situation most strongly requires human judgment?",
    choices: [
      "Conflicting evidence at a consequential decision point.",
      "Adding a timestamp to a ticket.",
      "Attaching a fictional asset owner from a current directory.",
      "Opening a maintenance ticket when a workflow-health threshold is crossed.",
    ],
    answer: 0,
    explanation:
      "Ambiguity plus high impact is a strong signal for accountable human review.",
  },
  {
    question:
      "What is a safe fallback?",
    choices: [
      "A defined degraded state that pauses, labels uncertainty, or routes to human review when automation cannot operate safely.",
      "A hidden shortcut that skips evidence.",
      "A guess used when data is missing.",
      "A rule that always chooses the most severe outcome.",
    ],
    answer: 0,
    explanation:
      "Safe fallback keeps uncertainty visible and avoids unsafe continuation.",
  },
  {
    question:
      "What is the strongest purpose of the Automation Opportunity Map?",
    choices: [
      "Compare candidate tasks using repeatability, evidence, ambiguity, failure impact, human judgment, ownership, fallback, and measurable value.",
      "List every security task and automate all of them.",
      "Rank analysts by speed.",
      "Replace automation governance.",
    ],
    answer: 0,
    explanation:
      "The opportunity map helps teams decide what should be automated, what should remain human-led, and why.",
  },
];

const checklistItems = [
  "The current manual task is clearly described.",
  "The legitimate defensive outcome is documented.",
  "Inputs are known and attributable.",
  "Input freshness and confidence are considered.",
  "Repeatability is evaluated.",
  "Decision ambiguity is evaluated.",
  "Failure impact is evaluated.",
  "The automated output is bounded.",
  "Human judgment is explicitly preserved where needed.",
  "Permissions are limited to the support task.",
  "Missing-data behavior is defined.",
  "Dependency failure behavior is defined.",
  "Analyst override is considered.",
  "Evidence fields are defined.",
  "Workflow ownership is assigned.",
  "Exception ownership is assigned.",
  "Value metrics are defined.",
  "Change triggers are defined.",
  "Shutdown or disable conditions are considered.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "Security automation exists to reduce repetitive defensive work and improve consistency, evidence, routing, and analyst focus.",
  "The strongest candidates are repeatable, low-impact, evidence-rich, bounded, observable, and supported by safe fallback.",
  "High volume alone does not justify automating a consequential decision.",
  "Automation can prepare evidence without making the final judgment.",
  "Missing or stale data should lower confidence and remain visible.",
  "Analyst override is important when grouping, routing, or recommendations may not fit the full context.",
  "Value should be measured through outcomes such as analyst effort, evidence quality, queue health, exception rate, and safety.",
  "Automation ownership and permissions should be designed before scale.",
  "Human judgment is most valuable when evidence is ambiguous, authority matters, or the potential impact is high.",
  "The Automation Opportunity Map prepares you for A17.2 Automation vs Human Judgment.",
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
        Module A17
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Advanced Track
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

export default function WhySecurityAutomationExistsPage() {
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
              A17.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Why Security Automation Exists
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Defensive teams automate because analysts face repetitive work,
            high-volume queues, evidence gathering, routing, ticketing,
            duplicate handling, and operational handoffs. The goal is not to
            remove human judgment. The goal is to use automation where the task
            is repeatable, bounded, reviewable, and safe.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Every alert, workflow, asset, ticket, metric, and organization in
            this lesson is fictional or synthetic. No real systems, accounts,
            endpoints, credentials, or response actions are used.
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
          lessonTitle="Why Security Automation Exists"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.1 Entry Readiness"
          items={[
            "I can distinguish repetitive support work from consequential decision-making.",
            "I understand that faster automation is useful only when the output is safe and trustworthy.",
            "I can reason from fictional alerts, tickets, queues, evidence, and ownership.",
            "I will keep every automation example inert and defensive.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Analyst Time Is Too Valuable to Spend Copying the Same Context All Day"
        >
          <p className="leading-8">
            Imagine a fictional SOC analyst opening the fiftieth alert of the
            morning. Before they can interpret the alert, they must look up the
            asset owner, business service, criticality, maintenance window,
            related alert history, ticket queue, and current playbook. None of
            those lookups decide whether the alert is important. They simply
            prepare the evidence needed for a human decision.
          </p>

          <p className="mt-4 leading-8">
            That difference is the foundation of safe security automation.
            Repetitive evidence preparation is often a strong candidate.
            Ambiguous interpretation and consequential judgment usually are not.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Automation should remove repetitive work—not remove accountability.
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
          eyebrow="Why Automation Exists"
          title="Eight Operational Reasons Defensive Teams Automate"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reasonsAutomationExists.map((item) => (
              <article
                key={item.reason}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.reason}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Potential value: {item.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Candidate Quality"
          title="What Makes a Task a Strong Automation Candidate?"
        >
          <p className="leading-8">
            Good automation candidates are not simply tasks people dislike.
            They have stable inputs, bounded outputs, clear ownership, manageable
            exceptions, measurable value, and a safe degraded state.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {strongCandidateTraits.map((item) => (
              <article
                key={item.trait}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.trait}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Strong signal: {item.strong}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak signal: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Poor Candidates"
          title="Eight Signals That Automation Needs More Human Control"
        >
          <div className="grid gap-5">
            {weakCandidateSignals.map((item, index) => (
              <article
                key={item.signal}
                className="rounded-3xl border border-red-400/20 bg-red-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-red-50">
                      {item.signal}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-red-100">
                      Why it matters: {item.why}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Safer design: {item.safer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Automation Value"
          title="Value Is More Than Speed"
        >
          <p className="leading-8">
            A workflow can be very fast and still be poor automation. It may
            misroute tickets, hide missing evidence, create duplicates, force
            analysts to undo work, or continue operating after an integration
            changes. Professional teams measure value from several angles.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {automationValueDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Healthy outcome: {item.healthy}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Human Judgment"
          title="Where Automation Should Support Rather Than Decide"
        >
          <div className="grid gap-5">
            {humanJudgmentExamples.map((item) => (
              <article
                key={item.situation}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.situation}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Automation can
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.automationCan}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Human must
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.humanMust}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Opportunity Map Anatomy"
          title="What a Reviewable Automation Opportunity Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {opportunityFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
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
          eyebrow="Fictional Opportunity Map"
          title="Six Northbridge Automation Opportunities"
        >
          <div className="grid gap-5">
            {northbridgeOpportunities.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.rating}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.task}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Business outcome", item.outcome],
                    ["Repeatability", item.repeatability],
                    ["Input quality", item.inputQuality],
                    ["Decision ambiguity", item.ambiguity],
                    ["Failure impact", item.failureImpact],
                    ["Automation support", item.automation],
                    ["Human judgment", item.human],
                    ["Safe fallback", item.fallback],
                    ["Evidence", item.evidence],
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
          title="Northbridge Automation Opportunity Dashboard"
          subtitle="Fictional candidate quality, human judgment, and workflow-value summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="High-Ambiguity Decision Was Proposed for Autonomous Automation"
          severity="High"
          time="09:40"
          source="Fictional Automation Design Review"
          details="OPP-105 involves conflicting evidence and a consequential decision. The task has low repeatability, mixed input quality, high ambiguity, and high failure impact."
          recommendation="Do not automate the final decision. Package the evidence, pause the workflow, and require an authorized human reviewer."
        />

        <FakeLogPanel
          title="Fictional Automation Opportunity Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Asset Enrichment"
          question="What is the strongest design for OPP-101?"
          evidence={[
            "Analysts currently look up the same asset owner and criticality fields for every alert.",
            "The fictional asset directory has stable IDs and current ownership data.",
            "The enrichment itself does not make a response decision.",
            "Missing ownership can be labeled and routed to analyst review.",
            "Analysts still interpret the alert after enrichment.",
          ]}
          options={[
            "Automate the enrichment, preserve source/timestamp evidence, and keep alert interpretation with the analyst.",
            "Automate the final alert disposition because the owner is known.",
            "Avoid enrichment because any automation is unsafe.",
            "Guess the owner when the directory lookup fails.",
          ]}
          bestAnswer={0}
          explanation="This is a repeatable, low-impact, evidence-rich support task with a safe fallback and clear human judgment boundary."
        />

        <Section
          eyebrow="Common Automation Mistakes"
          title="Eight Ways Teams Automate the Wrong Thing"
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
          title="Scenario Decision Lab 1 — Repetitive Asset Context"
          scenario="A fictional SOC analyst manually looks up the same asset owner and business criticality for hundreds of synthetic alerts. The directory is current, the fields are stable, and missing values can be detected."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Conflicting Evidence at a Consequential Decision Point"
          scenario="A fictional workflow reaches a high-impact decision point. Two evidence sources disagree, business context is incomplete, and the next step requires authorized judgment."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Automation Opportunity Map"
        >
          <p className="leading-8">
            Review fictional defensive tasks and decide whether each should be a
            Strong Candidate, Conditional Candidate, Decision Support,
            Human-Led, or Out of Bounds.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty fictional automation opportunity records.",
              "Give every record a stable OPP ID.",
              "Name the current defensive task.",
              "Write the legitimate business or security outcome.",
              "Estimate current manual effort.",
              "Identify the workflow inputs.",
              "Record input source and freshness expectations.",
              "Rate input quality.",
              "Rate repeatability.",
              "Rate decision ambiguity.",
              "Rate failure impact.",
              "Describe the bounded automation support step.",
              "Describe what remains human-controlled.",
              "Record any approval gate.",
              "Record required permissions conceptually.",
              "Record the safe fallback.",
              "Record likely exceptions.",
              "Record analyst override needs.",
              "Define evidence fields.",
              "Name the workflow owner.",
              "Name the evidence owner where relevant.",
              "Define value metrics.",
              "Define change triggers.",
              "Define disable or shutdown conditions.",
              "Assign a candidate rating.",
              "Explain the rating in one paragraph.",
              "Include at least eight Strong Candidates.",
              "Include at least five Conditional Candidates.",
              "Include at least five Decision-Support candidates.",
              "Include at least five Human-Led decisions.",
              "Include at least three Out-of-Bounds actions.",
              "Include at least five examples where missing data triggers safe fallback.",
              "Include at least five examples with analyst override.",
              "Include at least three examples where high volume does not justify autonomous decision-making.",
              "Include at least three examples where a workflow-health issue should open maintenance work rather than continue silently.",
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
              Use fictional alerts, tickets, assets, users, queues, metrics,
              owners, and workflow records only. Do not connect to real security
              tools, accounts, networks, endpoints, credentials, or production
              systems. Do not design or execute destructive, exploitative,
              credential-related, bypass, or unauthorized automation.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Consequential Decision"
          question="What is the strongest design for OPP-105?"
          evidence={[
            "The evidence sources disagree.",
            "Business context is incomplete.",
            "The proposed output could have a high operational impact.",
            "The decision requires authorized judgment.",
            "The workflow can package the evidence and identify the correct approver.",
          ]}
          options={[
            "Package the evidence, pause, and request a decision from the authorized human reviewer.",
            "Choose the newest evidence source automatically.",
            "Choose the most severe outcome automatically.",
            "Hide the disagreement so the workflow remains fast.",
          ]}
          bestAnswer={0}
          explanation="High ambiguity, high impact, and explicit decision authority make this a human-controlled decision point. Automation can still support the reviewer."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Automation Candidate Review Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard that helps teams
            decide which defensive tasks are appropriate for automation and
            which should remain human-led.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Task purpose",
              "Manual effort",
              "Input stability",
              "Input confidence",
              "Repeatability",
              "Decision ambiguity",
              "Failure impact",
              "Bounded output",
              "Permission scope",
              "Human judgment point",
              "Approval authority",
              "Safe fallback",
              "Exception handling",
              "Analyst override",
              "Evidence requirements",
              "Workflow ownership",
              "Value metrics",
              "Change triggers",
              "Disable criteria",
              "Candidate classification",
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
            The standard should support professional judgment rather than force
            every security task toward maximum automation.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.1 Mini Quiz: Why Security Automation Exists"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Automation Opportunity Map"
          prompt="Create the first artifact for your A17 Safe Automation Design and Governance Plan: a fictional Automation Opportunity Map with at least thirty records. Include OPP ID, current task, defensive/business outcome, manual effort, inputs, source/freshness, input quality, repeatability, ambiguity, failure impact, bounded automation support, human judgment, approval gate, permission scope, safe fallback, exceptions, analyst override, evidence, owner, value metrics, change triggers, disable criteria, candidate rating, and rating rationale."
          tips={[
            "Start with the current manual task rather than the technology.",
            "Separate evidence preparation from consequential judgment.",
            "Treat missing data as uncertainty, not as permission to guess.",
            "Use value measures beyond speed.",
            "Define safe fallback and ownership before scale.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.2?"
        >
          <p className="leading-8">
            A17.2 focuses on Automation vs Human Judgment. Before continuing,
            make sure you can explain why some work should be automated, some
            should be decision support, and some should remain under direct
            human control.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why security automation exists without describing it as a replacement for analysts.",
              "I can identify strong and weak automation candidates.",
              "I can explain why ambiguity and failure impact affect the automation boundary.",
              "I can define safe fallback and analyst override.",
              "I can measure automation value using quality, effort, evidence, routing, exceptions, and safety.",
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
          title="How to Make the Automation Opportunity Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with work, not tools",
                detail:
                  "Describe what analysts currently do before proposing automation.",
              },
              {
                title: "Show the human boundary",
                detail:
                  "Make clear which evidence preparation is automated and which decisions remain human-controlled.",
              },
              {
                title: "Show failure impact",
                detail:
                  "A low-impact enrichment failure is different from a consequential decision error.",
              },
              {
                title: "Show fallback",
                detail:
                  "Explain exactly what happens when inputs are missing, stale, invalid, or unavailable.",
              },
              {
                title: "Show evidence",
                detail:
                  "Record sources, timestamps, versions, exceptions, overrides, and workflow status.",
              },
              {
                title: "Show value",
                detail:
                  "Use analyst effort, evidence quality, routing, queue health, and safety—not just action count.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every workflow needs an accountable operational owner and clear review responsibility.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.2 will turn these opportunities into a detailed Human-in-the-Loop Decision Matrix.",
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
            A17.1 automation remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not connect automation to real endpoints, networks, cloud
            accounts, credentials, production security tools, private records,
            or live response systems. Do not automate destructive,
            environment-changing, exploitative, credential-related, bypass, or
            unauthorized activity. This lesson is about opportunity analysis,
            evidence support, routing, workflow quality, and human judgment.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.1 Why Security Automation Exists Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for automation purpose, candidate
            quality, failure impact, evidence, value, fallback, ownership, and
            human judgment. Next, A17.2 focuses on Automation vs Human Judgment.
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