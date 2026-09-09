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
const previousLesson = `${modulePath}/why-security-automation-exists`;
const nextLesson = `${modulePath}/alert-enrichment-concepts`;

const objectives = [
  "Explain how ambiguity, evidence quality, consequence, authority, reversibility, exception rate, and business context determine whether a step should be automated, recommended, approval-gated, or human-led.",
  "Distinguish human-in-the-loop, human-on-the-loop, and human-led workflow patterns conceptually without treating any one pattern as universally best.",
  "Design approval gates that provide meaningful evidence, sufficient time, clear authority, and safe fallback rather than turning the human reviewer into a rubber stamp.",
  "Evaluate override, escalation, disagreement, stale evidence, conflicting context, and exception handling so humans can correct or stop automation safely.",
  "Build a Human-in-the-Loop Decision Matrix that becomes the second artifact in the A17 Safe Automation Design and Governance Plan.",
];

const judgmentDimensions = [
  {
    dimension: "Ambiguity",
    low:
      "Inputs are stable, well-defined, and map to a bounded support outcome.",
    high:
      "Evidence can reasonably support multiple interpretations depending on context.",
    design:
      "Higher ambiguity usually increases the need for analyst review.",
  },
  {
    dimension: "Consequence",
    low:
      "The output adds context, records evidence, routes work, or creates a reversible support record.",
    high:
      "The decision could materially affect a real user, system, service, or business process.",
    design:
      "Higher consequence increases the need for explicit authority and human control.",
  },
  {
    dimension: "Evidence confidence",
    low:
      "Sources are stale, incomplete, contradictory, or difficult to attribute.",
    high:
      "Sources are current, attributable, versioned, and consistent.",
    design:
      "Low confidence should push the workflow toward pause, review, or additional evidence.",
  },
  {
    dimension: "Reversibility",
    low:
      "The outcome is difficult to undo or may create lasting impact.",
    high:
      "The output can be safely corrected, re-routed, or removed.",
    design:
      "Low reversibility is a strong reason to retain human decision authority.",
  },
  {
    dimension: "Decision authority",
    low:
      "The workflow has no clear authority to make the decision.",
    high:
      "The output is a bounded support action already authorized by policy and design.",
    design:
      "Automation must never invent authority that governance has not assigned.",
  },
  {
    dimension: "Exception rate",
    low:
      "Most cases follow the normal logic and exceptions are visible and manageable.",
    high:
      "Many cases require contextual interpretation or manual correction.",
    design:
      "High exception rates usually indicate the process is not mature enough for deeper automation.",
  },
  {
    dimension: "Business context",
    low:
      "The task depends on service-specific meaning, local operating context, maintenance, or user intent.",
    high:
      "The support outcome is independent of unusual business context.",
    design:
      "Context-heavy decisions are stronger candidates for human judgment.",
  },
  {
    dimension: "Ethical / fairness impact",
    low:
      "The step is administrative and does not evaluate a person.",
    high:
      "The decision may affect how a person is treated, prioritized, investigated, or restricted.",
    design:
      "People-impacting decisions deserve stronger human accountability and review.",
  },
];

const controlPatterns = [
  {
    pattern: "Fully automated support step",
    description:
      "The system performs a bounded, low-impact, deterministic task with clear evidence and safe fallback.",
    example:
      "Attach a synthetic asset owner and ticket ID to a fictional alert.",
    humanRole:
      "Review only if the workflow marks an exception or missing evidence.",
  },
  {
    pattern: "Human on the loop",
    description:
      "Automation performs routine support work while a human monitors outcomes, trends, exceptions, and health.",
    example:
      "A fictional workflow groups duplicate records but analysts can inspect and separate the group.",
    humanRole:
      "Monitor quality and intervene when the automation drifts or exceptions rise.",
  },
  {
    pattern: "Human in the loop",
    description:
      "Automation prepares evidence or a recommendation, but a human must approve or choose before the workflow advances.",
    example:
      "The system recommends a defensive playbook and waits for analyst selection.",
    humanRole:
      "Review current evidence and explicitly choose the next governed step.",
  },
  {
    pattern: "Human-led",
    description:
      "The person makes the decision and automation only assists with context, documentation, or routing.",
    example:
      "An authorized analyst resolves conflicting evidence at a consequential decision point.",
    humanRole:
      "Own the interpretation, decision, rationale, and escalation.",
  },
  {
    pattern: "Automation prohibited",
    description:
      "The proposed action falls outside the approved defensive boundary or would create unsafe autonomous impact.",
    example:
      "A workflow proposes an autonomous destructive or unauthorized environment-changing action.",
    humanRole:
      "Reject the automation design; use safe decision-support alternatives.",
  },
];

const approvalGateQualities = [
  {
    quality: "Meaningful evidence",
    strong:
      "The reviewer sees the current inputs, missing fields, uncertainty, relevant context, and recommendation rationale.",
    weak:
      "The reviewer sees only a button labeled Approve.",
  },
  {
    quality: "Clear authority",
    strong:
      "The workflow identifies which role is allowed to approve the specific decision.",
    weak:
      "Anyone with access can approve because the system lacks authority checks.",
  },
  {
    quality: "Enough time",
    strong:
      "The reviewer has enough time to inspect evidence before the workflow times out or escalates.",
    weak:
      "The system creates pressure to click immediately to keep the queue moving.",
  },
  {
    quality: "Real alternatives",
    strong:
      "Approve, reject, request more evidence, or escalate are available where appropriate.",
    weak:
      "The only practical choice is Approve.",
  },
  {
    quality: "Visible uncertainty",
    strong:
      "Missing, stale, contradictory, or low-confidence evidence is clearly marked.",
    weak:
      "The interface presents uncertain evidence as confirmed.",
  },
  {
    quality: "Decision rationale",
    strong:
      "The reviewer records a short rationale or selects an approved reason.",
    weak:
      "The workflow records only the click, not why the decision was made.",
  },
  {
    quality: "Safe timeout",
    strong:
      "If no reviewer acts, the workflow pauses or escalates safely.",
    weak:
      "No response is treated as approval.",
  },
  {
    quality: "Evidence preservation",
    strong:
      "The workflow stores the evidence version, approver, time, outcome, and exception state.",
    weak:
      "The system cannot reconstruct what the reviewer saw.",
  },
];

const overridePatterns = [
  {
    situation: "Wrong routing",
    automation:
      "Assigns a ticket to the team predicted by the current routing table.",
    override:
      "Analyst reassigns the ticket and records why the routing rule was wrong.",
    learning:
      "Repeated overrides can indicate stale ownership or a weak routing rule.",
  },
  {
    situation: "Duplicate grouping error",
    automation:
      "Groups synthetic alerts using an approved fingerprint.",
    override:
      "Analyst separates one record because the business context differs.",
    learning:
      "The workflow preserves the exception so the grouping logic can be reviewed.",
  },
  {
    situation: "Stale enrichment",
    automation:
      "Attempts to add asset context from a source that has not refreshed.",
    override:
      "Workflow marks the field stale and analyst chooses whether to continue with limited context.",
    learning:
      "The source may need health monitoring or a stronger freshness requirement.",
  },
  {
    situation: "Playbook mismatch",
    automation:
      "Recommends a playbook from the alert category.",
    override:
      "Analyst selects a different approved playbook because the evidence shows a different context.",
    learning:
      "Recommendation quality can be measured from analyst acceptance and override reasons.",
  },
  {
    situation: "Approval disagreement",
    automation:
      "Packages evidence and requests approval from the assigned reviewer.",
    override:
      "Reviewer rejects and requests more evidence.",
    learning:
      "A healthy approval gate allows disagreement without breaking the workflow.",
  },
  {
    situation: "Health degradation",
    automation:
      "Continues producing outputs while exception rate rises.",
    override:
      "Platform owner disables the workflow and moves affected work to the manual fallback.",
    learning:
      "Human authority to pause automation is part of safe governance.",
  },
];

const decisionMatrixFields = [
  {
    field: "HITL ID",
    purpose:
      "Stable identifier for the decision boundary.",
    example:
      "HITL-201",
  },
  {
    field: "Workflow step",
    purpose:
      "Names the exact step being evaluated.",
    example:
      "Attach asset ownership to alert",
  },
  {
    field: "Decision type",
    purpose:
      "Classifies the step as Automated Support, Human-on-the-Loop, Human-in-the-Loop, Human-Led, or Prohibited.",
    example:
      "Automated Support",
  },
  {
    field: "Ambiguity",
    purpose:
      "Shows how much interpretation the step requires.",
    example:
      "Low",
  },
  {
    field: "Consequence",
    purpose:
      "Shows potential impact if the output is wrong.",
    example:
      "Low",
  },
  {
    field: "Evidence confidence",
    purpose:
      "Shows how trustworthy and current the supporting evidence is.",
    example:
      "High",
  },
  {
    field: "Reversibility",
    purpose:
      "Shows how easily the outcome can be corrected.",
    example:
      "High",
  },
  {
    field: "Authority",
    purpose:
      "Shows which role may approve or own the decision.",
    example:
      "SOC Analyst",
  },
  {
    field: "Automation output",
    purpose:
      "Defines the bounded machine-supported action.",
    example:
      "Attach owner and criticality",
  },
  {
    field: "Human action",
    purpose:
      "Defines what the person must review, approve, decide, or monitor.",
    example:
      "Interpret the alert",
  },
  {
    field: "Fallback",
    purpose:
      "Defines what happens when evidence or automation is insufficient.",
    example:
      "Pause and route to manual review",
  },
  {
    field: "Override / escalation",
    purpose:
      "Defines how people correct, reject, or escalate the automation.",
    example:
      "Analyst override with reason code",
  },
];

const northbridgeMatrix = [
  {
    id: "HITL-201",
    step:
      "Attach fictional asset owner and criticality",
    type:
      "Automated Support",
    ambiguity:
      "Low",
    consequence:
      "Low",
    confidence:
      "High",
    reversibility:
      "High",
    authority:
      "Security Platform Owner",
    automation:
      "Attach current synthetic context with source and timestamp.",
    human:
      "Analyst interprets alert significance.",
    fallback:
      "Mark enrichment missing and continue to human review.",
    override:
      "Analyst flags incorrect ownership.",
    state:
      "Approved",
  },
  {
    id: "HITL-202",
    step:
      "Group matching synthetic duplicate alerts",
    type:
      "Human on the Loop",
    ambiguity:
      "Medium",
    consequence:
      "Low-Medium",
    confidence:
      "Moderate-High",
    reversibility:
      "High",
    authority:
      "Detection Operations Owner",
    automation:
      "Group records using approved fingerprint and preserve source IDs.",
    human:
      "Analyst monitors grouping quality and separates mismatches.",
    fallback:
      "Do not group when confidence is below threshold.",
    override:
      "Analyst split-group override with reason.",
    state:
      "Conditional",
  },
  {
    id: "HITL-203",
    step:
      "Recommend a defensive playbook",
    type:
      "Human in the Loop",
    ambiguity:
      "Medium",
    consequence:
      "Low",
    confidence:
      "High",
    reversibility:
      "High",
    authority:
      "SOC Analyst",
    automation:
      "Recommend approved guidance from category and evidence completeness.",
    human:
      "Analyst chooses whether the playbook fits the case.",
    fallback:
      "Present general triage guidance when category is uncertain.",
    override:
      "Analyst selects another approved playbook.",
    state:
      "Approved",
  },
  {
    id: "HITL-204",
    step:
      "Resolve conflicting evidence at a consequential decision point",
    type:
      "Human-Led",
    ambiguity:
      "High",
    consequence:
      "High",
    confidence:
      "Mixed",
    reversibility:
      "Low-Medium",
    authority:
      "Incident Response Lead",
    automation:
      "Package evidence, mark disagreement, identify approver, and pause.",
    human:
      "Authorized lead interprets evidence and decides.",
    fallback:
      "Escalate if assigned authority is unavailable.",
    override:
      "Human decision is final within governance authority.",
    state:
      "Human Required",
  },
  {
    id: "HITL-205",
    step:
      "Create and route fictional ticket",
    type:
      "Automated Support",
    ambiguity:
      "Low-Medium",
    consequence:
      "Low",
    confidence:
      "High",
    reversibility:
      "High",
    authority:
      "SOC Workflow Owner",
    automation:
      "Create ticket, attach summary, and assign approved queue.",
    human:
      "Assigned analyst validates context and disposition.",
    fallback:
      "General review queue if ownership is missing.",
    override:
      "Analyst reassigns ticket with reason.",
    state:
      "Approved",
  },
  {
    id: "HITL-206",
    step:
      "Disable a workflow after sustained health degradation",
    type:
      "Human in the Loop",
    ambiguity:
      "Medium",
    consequence:
      "Medium",
    confidence:
      "High",
    reversibility:
      "High",
    authority:
      "Security Platform Owner",
    automation:
      "Detect threshold breach, open maintenance ticket, and recommend disable.",
    human:
      "Platform owner approves disable and moves work to manual fallback.",
    fallback:
      "Continue in degraded mode only if approved and bounded.",
    override:
      "Owner can keep workflow active with documented exception.",
    state:
      "Approval Gated",
  },
  {
    id: "HITL-207",
    step:
      "Autonomously perform a destructive or unauthorized environment change",
    type:
      "Prohibited",
    ambiguity:
      "High",
    consequence:
      "High",
    confidence:
      "Irrelevant",
    reversibility:
      "Low",
    authority:
      "Outside student curriculum boundary",
    automation:
      "Not permitted.",
    human:
      "Use safe defensive review and authorized professional procedures outside this lesson.",
    fallback:
      "Reject design and replace with evidence packaging or approval support.",
    override:
      "No override within A17.",
    state:
      "Blocked",
  },
];

const dashboardMetrics = [
  {
    label: "Decision boundaries",
    value: "7",
    note: "Support, monitored automation, approval gates, human-led judgment, and prohibited actions",
  },
  {
    label: "Automated support",
    value: "2",
    note: "Asset enrichment and ticket creation/routing",
  },
  {
    label: "Human review patterns",
    value: "4",
    note: "Human-on-the-loop, human-in-the-loop, and human-led controls",
  },
  {
    label: "Prohibited",
    value: "1",
    note: "Unsafe autonomous environment-changing action remains outside A17",
  },
];

const logs = [
  "[08:14] HITL-201 step=ASSET_ENRICHMENT ambiguity=LOW consequence=LOW mode=AUTOMATED_SUPPORT",
  "[08:36] HITL-202 step=DUPLICATE_GROUPING ambiguity=MEDIUM analyst_override=YES mode=HUMAN_ON_LOOP",
  "[08:58] HITL-203 step=PLAYBOOK_RECOMMENDATION approval=ANALYST_SELECTION mode=HUMAN_IN_LOOP",
  "[09:20] HITL-204 step=CONFLICTING_EVIDENCE consequence=HIGH authority=IR_LEAD mode=HUMAN_LED",
  "[09:42] HITL-205 step=TICKET_ROUTING fallback=GENERAL_QUEUE mode=AUTOMATED_SUPPORT",
  "[10:04] HITL-206 step=WORKFLOW_DISABLE health=DEGRADED approval=PLATFORM_OWNER mode=HUMAN_IN_LOOP",
  "[10:26] HITL-207 step=UNSAFE_ENVIRONMENT_CHANGE mode=PROHIBITED state=BLOCKED",
];

const antiPatterns = [
  {
    title: "Human as rubber stamp",
    problem:
      "The reviewer sees little evidence and is pressured to approve quickly.",
    better:
      "Provide real evidence, uncertainty, alternatives, rationale capture, and safe timeout.",
  },
  {
    title: "No override",
    problem:
      "Analysts cannot correct grouping, routing, or recommendation errors.",
    better:
      "Preserve override with reason and use repeated overrides as feedback.",
  },
  {
    title: "Automatic approval on timeout",
    problem:
      "Silence becomes permission for a consequential decision.",
    better:
      "Pause or escalate safely when approval is missing.",
  },
  {
    title: "Authority inferred from access",
    problem:
      "Anyone who can click the button is treated as authorized to decide.",
    better:
      "Map approval authority to governance, not merely system access.",
  },
  {
    title: "Confidence hidden",
    problem:
      "Low-quality evidence is presented with the same visual certainty as strong evidence.",
    better:
      "Display confidence, freshness, missing context, and source disagreement.",
  },
  {
    title: "Human review everywhere",
    problem:
      "Every trivial support step requires a click, creating fatigue and slowing work without adding judgment.",
    better:
      "Automate low-impact deterministic support tasks and reserve review for meaningful decisions.",
  },
  {
    title: "Automation everywhere",
    problem:
      "The system makes consequential judgments because the normal cases appear predictable.",
    better:
      "Keep high-impact, ambiguous, authority-sensitive decisions under human control.",
  },
  {
    title: "Override without learning",
    problem:
      "People repeatedly correct the workflow but the reasons are never analyzed.",
    better:
      "Track override patterns as evidence for rule, source, or ownership improvements.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Let the automation recommend a playbook and require the analyst to choose, reject, or request more evidence before the workflow advances.",
    outcome:
      "Best. The automation saves search time while the analyst retains contextual judgment.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Automatically execute whatever the recommended playbook says.",
    outcome:
      "Risky. Recommendation quality does not justify autonomous consequential action.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Require analysts to manually search the playbook library every time.",
    outcome:
      "Caution. Human judgment is preserved, but safe decision support could reduce repetitive work.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Pause the workflow, show both evidence sources and their confidence, identify the authorized reviewer, and require a human decision.",
    outcome:
      "Best. High ambiguity and high consequence demand meaningful human judgment.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Automatically choose the source with the newest timestamp.",
    outcome:
      "Risky. Freshness is only one evidence quality factor and may not resolve the conflict.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ask a human to click Approve without showing the disagreement.",
    outcome:
      "Risky. That creates a rubber-stamp approval gate rather than meaningful review.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest reason to keep a step human-led?",
    choices: [
      "The step combines high ambiguity, high consequence, limited reversibility, and explicit decision authority.",
      "The step is repetitive.",
      "The step adds a timestamp.",
      "The step creates a reversible ticket.",
    ],
    answer: 0,
    explanation:
      "Ambiguity, consequence, reversibility, and authority are core reasons to preserve human judgment.",
  },
  {
    question:
      "What is human-in-the-loop automation?",
    choices: [
      "Automation prepares or recommends, but a person must review or approve before the workflow advances.",
      "Automation performs everything while a human receives a monthly report.",
      "Humans manually perform every step.",
      "Automation operates with no possibility of human intervention.",
    ],
    answer: 0,
    explanation:
      "Human-in-the-loop means the human decision is inside the workflow path.",
  },
  {
    question:
      "What makes an approval gate meaningful?",
    choices: [
      "The reviewer sees current evidence, uncertainty, alternatives, authority, and can approve, reject, escalate, or request more information.",
      "The button is large and easy to click.",
      "Approval is the only available choice.",
      "The workflow treats timeout as approval.",
    ],
    answer: 0,
    explanation:
      "Meaningful review requires evidence and real decision authority.",
  },
  {
    question:
      "Why is analyst override important?",
    choices: [
      "It allows people to correct automation when context, ownership, grouping, or recommendations are wrong.",
      "It lets analysts bypass all controls.",
      "It eliminates the need for evidence.",
      "It means the automation should never be monitored.",
    ],
    answer: 0,
    explanation:
      "Override is a safe correction mechanism and a source of feedback.",
  },
  {
    question:
      "What should happen when an approval times out?",
    choices: [
      "Pause or escalate safely according to the workflow design.",
      "Automatically approve.",
      "Guess what the reviewer would have chosen.",
      "Delete the evidence.",
    ],
    answer: 0,
    explanation:
      "Silence should not become implicit permission for a consequential decision.",
  },
  {
    question:
      "What is human-on-the-loop?",
    choices: [
      "Automation performs routine work while a person monitors quality, exceptions, and health and can intervene.",
      "A human approves every single support field.",
      "A person has no ability to intervene.",
      "Automation is prohibited entirely.",
    ],
    answer: 0,
    explanation:
      "Human-on-the-loop keeps oversight without requiring a decision at every routine step.",
  },
  {
    question:
      "What is the purpose of the Human-in-the-Loop Decision Matrix?",
    choices: [
      "Map each workflow step to ambiguity, consequence, evidence, authority, reversibility, automation mode, human action, fallback, and override.",
      "Automate every step that is technically possible.",
      "Replace workflow governance.",
      "Rank analysts by approval speed.",
    ],
    answer: 0,
    explanation:
      "The matrix makes the automation-versus-judgment boundary explicit and reviewable.",
  },
];

const checklistItems = [
  "Every workflow step has a named decision type.",
  "Ambiguity is evaluated.",
  "Consequence is evaluated.",
  "Evidence confidence is evaluated.",
  "Reversibility is evaluated.",
  "Decision authority is explicit.",
  "Human review is meaningful rather than symbolic.",
  "Approval gates show current evidence.",
  "Uncertainty is visible.",
  "Approval alternatives are real.",
  "Timeout behavior is safe.",
  "Analyst override is available where appropriate.",
  "Override reasons are recorded.",
  "Repeated overrides can trigger review.",
  "Human-on-the-loop monitoring is defined where useful.",
  "High-impact decisions remain human-controlled.",
  "Unsafe autonomous actions are blocked.",
  "Fallback paths are defined.",
  "Evidence preservation is defined.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "The right automation boundary depends on ambiguity, consequence, evidence confidence, reversibility, authority, exceptions, and context.",
  "Human-in-the-loop, human-on-the-loop, and human-led are different governance patterns, not quality rankings.",
  "A meaningful approval gate gives the reviewer evidence, uncertainty, authority, alternatives, and enough time.",
  "Timeout should pause or escalate rather than silently approve.",
  "Analyst override is essential when context can invalidate grouping, routing, or recommendations.",
  "Repeated overrides are useful evidence that a workflow may need redesign.",
  "Human review everywhere creates fatigue; automation everywhere removes needed judgment.",
  "Authority must come from governance, not from whoever has system access.",
  "Unsafe autonomous environment-changing actions remain outside the A17 curriculum boundary.",
  "The Human-in-the-Loop Decision Matrix prepares you for A17.3 Alert Enrichment Concepts.",
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
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function AutomationVsHumanJudgmentPage() {
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
              A17.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Automation vs Human Judgment
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Safe automation is not defined by how much a machine can do. It is
            defined by where the workflow preserves judgment, authority,
            uncertainty handling, override, escalation, and accountability.
            This lesson focuses on designing that boundary deliberately.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All workflows, alerts, approvals, analysts, assets, evidence, and
            organizations in this lesson are fictional or synthetic.
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
          lessonTitle="Automation vs Human Judgment"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.2 Entry Readiness"
          items={[
            "I can explain why some repetitive tasks are good automation candidates.",
            "I can identify when a decision is ambiguous or consequential.",
            "I understand that approval authority should be governed, not guessed.",
            "I will keep all examples fictional, inert, and defensive.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Goal Is Not Human Approval Everywhere—or Automation Everywhere"
        >
          <p className="leading-8">
            A poor workflow can fail in two opposite ways. It can ask a human to
            click through every harmless support step until reviewers become
            fatigued, or it can automate consequential judgments until nobody is
            clearly accountable. Professional workflow design avoids both.
          </p>

          <p className="mt-4 leading-8">
            The useful question is not “Can this be automated?” The useful
            question is “Which part can be automated safely, what must remain
            human-controlled, and what evidence makes that boundary defensible?”
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Humans should review decisions that need judgment—not merely click because the workflow demands a click.
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
          eyebrow="Judgment Boundary"
          title="Eight Dimensions That Change the Automation Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {judgmentDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Lower concern / stronger automation fit: {item.low}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Higher concern / stronger human need: {item.high}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Design effect: {item.design}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Control Patterns"
          title="Five Ways Humans and Automation Can Share Work"
        >
          <div className="grid gap-5">
            {controlPatterns.map((item, index) => (
              <article
                key={item.pattern}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.pattern}
                    </h3>
                    <p className="mt-2 leading-7 text-purple-100">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Example: {item.example}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Human role: {item.humanRole}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Approval Gates"
          title="Eight Qualities of Meaningful Human Review"
        >
          <p className="leading-8">
            A human approval step is valuable only when the person can actually
            evaluate the decision. Poor approval design can create the
            appearance of accountability without meaningful judgment.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {approvalGateQualities.map((item) => (
              <article
                key={item.quality}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.quality}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Strong: {item.strong}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Override and Intervention"
          title="Humans Need a Safe Way to Correct Automation"
        >
          <div className="grid gap-5">
            {overridePatterns.map((item) => (
              <article
                key={item.situation}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.situation}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Automation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.automation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Human intervention
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.override}
                    </p>
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      What the system learns
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.learning}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Human-in-the-Loop Matrix"
          title="What a Reviewable Decision Boundary Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionMatrixFields.map((item) => (
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
          eyebrow="Fictional Decision Matrix"
          title="Seven Northbridge Automation Boundaries"
        >
          <div className="grid gap-5">
            {northbridgeMatrix.map((item) => (
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
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.step}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Ambiguity", item.ambiguity],
                    ["Consequence", item.consequence],
                    ["Evidence confidence", item.confidence],
                    ["Reversibility", item.reversibility],
                    ["Decision authority", item.authority],
                    ["Automation output", item.automation],
                    ["Human action", item.human],
                    ["Fallback", item.fallback],
                    ["Override / escalation", item.override],
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
          title="Northbridge Human Judgment Dashboard"
          subtitle="Fictional automation modes, approval gates, analyst override, and prohibited-action summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Conflicting Evidence Reached a High-Consequence Decision Point"
          severity="High"
          time="09:20"
          source="Fictional Human-in-the-Loop Review"
          details="HITL-204 combines high ambiguity, high consequence, mixed evidence confidence, limited reversibility, and explicit incident-response authority. The workflow can package evidence but should not make the final decision."
          recommendation="Pause the workflow, show the evidence disagreement, and require an authorized human decision."
        />

        <FakeLogPanel
          title="Fictional Human-in-the-Loop Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Playbook Recommendation"
          question="What is the strongest workflow mode for HITL-203?"
          evidence={[
            "The alert category can be mapped to an approved playbook library.",
            "The recommended playbook may not fit unusual business context.",
            "Selecting a different approved playbook is easy and reversible.",
            "The analyst is already responsible for interpreting the alert.",
            "The recommendation can explain why it was suggested.",
          ]}
          options={[
            "Use human-in-the-loop: recommend the playbook and require analyst selection before advancing.",
            "Automatically execute the recommended playbook.",
            "Require analysts to search manually with no recommendation.",
            "Hide the recommendation rationale so the analyst is not distracted.",
          ]}
          bestAnswer={0}
          explanation="The recommendation removes repetitive search effort while preserving contextual judgment and analyst authority."
        />

        <Section
          eyebrow="Common Judgment Mistakes"
          title="Eight Ways Human Review Becomes Weak or Excessive"
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
          title="Scenario Decision Lab 1 — Recommended Playbook"
          scenario="A fictional workflow can identify a likely defensive playbook from the alert category, but unusual business context sometimes makes another approved playbook more appropriate."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Conflicting Evidence"
          scenario="Two fictional evidence sources disagree at a high-consequence decision point. The workflow knows which authorized reviewer should make the decision."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Human-in-the-Loop Decision Matrix"
        >
          <p className="leading-8">
            Take your A17.1 automation opportunities and map each important
            workflow step to the right level of automation, oversight, approval,
            judgment, override, and fallback.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty fictional HITL decision records.",
              "Give every record a stable HITL ID.",
              "Link each record to an OPP ID from A17.1.",
              "Name the exact workflow step.",
              "Classify the mode as Automated Support, Human-on-the-Loop, Human-in-the-Loop, Human-Led, or Prohibited.",
              "Rate ambiguity.",
              "Rate consequence.",
              "Rate evidence confidence.",
              "Rate reversibility.",
              "Record the decision authority.",
              "Describe the automation output.",
              "Describe the required human action.",
              "Define the approval gate where relevant.",
              "Define what evidence the reviewer sees.",
              "Define reviewer alternatives.",
              "Define timeout behavior.",
              "Define safe fallback.",
              "Define analyst override.",
              "Define override reason capture.",
              "Define escalation.",
              "Define evidence preservation.",
              "Define review cadence.",
              "Define change triggers.",
              "Include at least eight Automated Support steps.",
              "Include at least five Human-on-the-Loop steps.",
              "Include at least five Human-in-the-Loop steps.",
              "Include at least five Human-Led decisions.",
              "Include at least three Prohibited actions.",
              "Include at least five timeout-to-safe-fallback examples.",
              "Include at least five override examples.",
              "Include at least three examples where low confidence forces review.",
              "Include at least three examples where high consequence forces human authority.",
              "Include at least three examples where human review is removed because it adds no meaningful judgment.",
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
              Use fictional alerts, tickets, owners, approvals, evidence,
              decisions, and workflow states only. Do not connect to real
              security tools, accounts, endpoints, networks, credentials, or
              production response systems. Do not design autonomous destructive,
              exploitative, credential-related, bypass, or unauthorized actions.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: High-Consequence Decision"
          question="What is the strongest workflow mode for HITL-204?"
          evidence={[
            "Two evidence sources disagree.",
            "The decision may create high operational impact.",
            "The outcome is not easily reversible.",
            "The workflow can identify the authorized Incident Response Lead.",
            "The workflow can package the evidence and mark uncertainty.",
          ]}
          options={[
            "Human-led: package the evidence, pause, and require the authorized reviewer to decide.",
            "Automatically choose the newest evidence source.",
            "Automatically choose the most severe outcome.",
            "Use a one-click approval with no evidence detail.",
          ]}
          bestAnswer={0}
          explanation="High ambiguity, high consequence, low reversibility, and explicit authority make this a human-led decision."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Human Decision Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for deciding when
            automation may act, when a person should monitor, when approval is
            mandatory, and when the entire decision must remain human-led.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Ambiguity rating",
              "Consequence rating",
              "Evidence confidence",
              "Reversibility",
              "Business context",
              "Ethical / fairness impact",
              "Authority mapping",
              "Automated-support criteria",
              "Human-on-the-loop criteria",
              "Human-in-the-loop criteria",
              "Human-led criteria",
              "Prohibited-action criteria",
              "Approval evidence",
              "Approval alternatives",
              "Timeout behavior",
              "Override design",
              "Escalation",
              "Evidence preservation",
              "Review triggers",
              "Disable criteria",
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
            The standard should avoid two extremes: meaningless human approval
            for every harmless step and unsafe automation for decisions that
            genuinely require judgment and authority.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.2 Mini Quiz: Automation vs Human Judgment"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Human-in-the-Loop Decision Matrix"
          prompt="Create the second artifact for your A17 Safe Automation Design and Governance Plan: a fictional Human-in-the-Loop Decision Matrix with at least thirty records. Include HITL ID, linked OPP ID, workflow step, automation mode, ambiguity, consequence, evidence confidence, reversibility, authority, automation output, human action, approval gate, reviewer evidence, reviewer alternatives, timeout behavior, fallback, override, override reason capture, escalation, evidence preservation, review cadence, and change triggers."
          tips={[
            "Use human review where judgment is real, not decorative.",
            "Show uncertainty clearly.",
            "Make timeout behavior safe.",
            "Preserve analyst override and reason capture.",
            "Map authority explicitly.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.3?"
        >
          <p className="leading-8">
            A17.3 focuses on Alert Enrichment Concepts. Before continuing, make
            sure you can define exactly which enrichment work can be automated,
            what an analyst still decides, and how stale or missing context
            changes the workflow.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish automated support, human-on-the-loop, human-in-the-loop, human-led, and prohibited workflow modes.",
              "I can explain how ambiguity, consequence, confidence, reversibility, and authority affect automation depth.",
              "I can design a meaningful approval gate.",
              "I can define safe timeout, override, and escalation behavior.",
              "I can explain why human review should be used selectively where judgment adds value.",
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
          title="How to Make the Human-in-the-Loop Decision Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Map exact steps",
                detail:
                  "Do not label an entire workflow as automated or manual. Evaluate the individual decisions inside it.",
              },
              {
                title: "Use multiple judgment dimensions",
                detail:
                  "Ambiguity, consequence, evidence, reversibility, authority, and context should all shape the decision.",
              },
              {
                title: "Show real human value",
                detail:
                  "A reviewer should interpret, approve, reject, escalate, or correct—not simply click.",
              },
              {
                title: "Show override",
                detail:
                  "Analysts need a controlled way to correct automation when context changes.",
              },
              {
                title: "Show timeout",
                detail:
                  "A missing human response should lead to a safe state rather than implicit approval.",
              },
              {
                title: "Show authority",
                detail:
                  "The matrix should identify who is actually authorized to decide.",
              },
              {
                title: "Show learning",
                detail:
                  "Repeated override and exception patterns should trigger workflow review.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.3 will apply these boundaries to safe alert enrichment and evidence quality.",
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
            A17.2 remains fictional, inert, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not connect approval flows or automation to real endpoints,
            networks, cloud accounts, credentials, production security tools,
            or live response systems. Do not design autonomous destructive,
            environment-changing, exploitative, credential-related, bypass, or
            unauthorized actions. The lesson focuses on decision boundaries,
            approval, evidence, override, escalation, and governance.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.2 Automation vs Human Judgment Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for automation depth, human
            oversight, approval gates, authority, override, timeout, escalation,
            and meaningful review. Next, A17.3 focuses on Alert Enrichment
            Concepts.
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