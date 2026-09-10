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

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const previousLesson = modulePath;
const nextLesson = `${modulePath}/network-defense-architecture-review`;

const objectives = [
  "Correlate multiple fictional alerts, logs, tickets, ownership records, and architecture clues while preserving the source, timestamp, and confidence of each observation.",
  "Distinguish direct evidence from inference, hypothesis, contradiction, and unanswered questions so the investigation does not overstate what the case actually proves.",
  "Normalize and compare timestamps carefully, recognizing that clock differences, collection delay, and workflow delay can affect the apparent event sequence.",
  "Prioritize the next safe defensive review step using relevance, evidence quality, business context, ownership, and potential impact rather than choosing the most dramatic explanation.",
  "Build a Multi-Source Investigation Brief that summarizes the case, strongest evidence, contradictions, open questions, confidence, next review actions, and escalation needs.",
];

const evidenceVocabulary = [
  {
    term: "Observation",
    meaning:
      "A fact directly supported by one or more fictional evidence sources.",
    example:
      "Alert AL-1801 was created at 09:14 according to the synthetic alert queue.",
  },
  {
    term: "Inference",
    meaning:
      "A reasoned interpretation that connects evidence but is not itself directly recorded.",
    example:
      "The three alerts may be related because they involve the same fictional service within a short time window.",
  },
  {
    term: "Hypothesis",
    meaning:
      "A testable explanation that could account for several observations.",
    example:
      "A stale ownership record may have contributed to repeated ticket reassignment.",
  },
  {
    term: "Contradiction",
    meaning:
      "Two sources appear to disagree in a way that matters to the investigation.",
    example:
      "The architecture diagram lists Team Orion as owner while the current service registry lists Team Nova.",
  },
  {
    term: "Unanswered question",
    meaning:
      "A fact the current evidence package does not establish.",
    example:
      "The case does not yet show whether the ownership change was formally approved.",
  },
  {
    term: "Confidence",
    meaning:
      "How strongly the available evidence supports a conclusion.",
    example:
      "High confidence that the ticket was reassigned twice; low confidence about why.",
  },
  {
    term: "Source attribution",
    meaning:
      "The record of where an observation came from.",
    example:
      "Synthetic alert queue, fictional identity registry, ticket history, or architecture diagram.",
  },
  {
    term: "Evidence freshness",
    meaning:
      "Whether the information is current enough to support the decision being made.",
    example:
      "An ownership record last reviewed nine months ago may be less reliable than a current service registry.",
  },
  {
    term: "Correlation",
    meaning:
      "Connecting records that may describe the same event, service, identity, workflow, or time window.",
    example:
      "Matching the same fictional service ID across an alert, ticket, and owner record.",
  },
  {
    term: "Causation",
    meaning:
      "Evidence that one event actually produced another.",
    example:
      "Two events occurring close together does not by itself prove one caused the other.",
  },
];

const sourceQualityQuestions = [
  {
    source: "Synthetic alert",
    ask:
      "What condition triggered? What data supports it? What is the rule purpose? Is the alert complete?",
    caution:
      "Severity labels and rule names can influence interpretation even when supporting evidence is weak.",
  },
  {
    source: "Fictional log",
    ask:
      "Which system created it? Is the timestamp local or normalized? What event does the log actually record?",
    caution:
      "A log event is evidence of an event record, not automatically evidence of malicious intent.",
  },
  {
    source: "Ticket history",
    ask:
      "Who changed state or ownership? What reason was recorded? What evidence was attached at the time?",
    caution:
      "Workflow actions may reflect process issues rather than security events.",
  },
  {
    source: "Ownership registry",
    ask:
      "How current is the owner mapping? Who maintains it? Is there an active exception?",
    caution:
      "Stale ownership data can create false correlations or routing errors.",
  },
  {
    source: "Architecture diagram",
    ask:
      "What version is it? Which trust boundaries and dependencies are documented? What might be missing?",
    caution:
      "A diagram is a model of the environment, not guaranteed proof of every current configuration.",
  },
  {
    source: "Analyst note",
    ask:
      "Which statements are observations and which are interpretations? What evidence did the analyst have at that time?",
    caution:
      "Human notes can preserve valuable context but may also contain assumptions.",
  },
  {
    source: "Service-health record",
    ask:
      "Was the service degraded? Did the timing overlap the alerts? Could the health issue explain part of the evidence?",
    caution:
      "Operational failure can look suspicious until compared with broader context.",
  },
  {
    source: "Change record",
    ask:
      "What changed, when, by whom, and under what approval? Was the change completed as expected?",
    caution:
      "A nearby change is relevant context but not automatically the root cause.",
  },
];

const timestampConcepts = [
  {
    concept: "Observed time",
    explanation:
      "The timestamp written in the original record.",
  },
  {
    concept: "Normalized time",
    explanation:
      "A common reference time used so records from different sources can be compared.",
  },
  {
    concept: "Collection time",
    explanation:
      "When a monitoring or logging system received the event.",
  },
  {
    concept: "Processing time",
    explanation:
      "When an alert, ticket, or workflow engine processed the evidence.",
  },
  {
    concept: "Clock offset",
    explanation:
      "A known or suspected difference between system clocks.",
  },
  {
    concept: "Delay",
    explanation:
      "Time between the original event and when another system records or acts on it.",
  },
];

const confidenceModel = [
  {
    level: "High confidence",
    use:
      "Multiple independent sources agree, timestamps align, the source is current, and no meaningful contradiction remains.",
  },
  {
    level: "Moderate confidence",
    use:
      "Evidence is useful and mostly consistent, but one relevant source is missing, stale, or not fully independent.",
  },
  {
    level: "Low confidence",
    use:
      "The conclusion depends heavily on inference, stale context, ambiguous timestamps, or unresolved contradictions.",
  },
  {
    level: "Insufficient evidence",
    use:
      "The current case package does not support a defensible conclusion yet.",
  },
];

const northbridgeEvidence = [
  {
    id: "EV-1801",
    source: "Synthetic Alert Queue",
    observed:
      "Alert AL-1801 created at 09:14 for fictional service SRV-NB-22.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Shows alert creation, not root cause.",
  },
  {
    id: "EV-1802",
    source: "Synthetic Alert Queue",
    observed:
      "Alert AL-1802 created at 09:21 for SRV-NB-22 with a different detection label.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Temporal proximity suggests correlation should be reviewed.",
  },
  {
    id: "EV-1803",
    source: "Synthetic Alert Queue",
    observed:
      "Alert AL-1803 created at 09:30 for SRV-NB-22.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Three alerts now fall within a sixteen-minute window.",
  },
  {
    id: "EV-1804",
    source: "Fictional Service Registry",
    observed:
      "SRV-NB-22 current owner is Team Nova; record reviewed 11 days ago.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Current owner source.",
  },
  {
    id: "EV-1805",
    source: "Fictional Architecture Diagram",
    observed:
      "Diagram version 3.2 lists Team Orion as owner of SRV-NB-22.",
    direct:
      "Yes",
    freshness:
      "Stale",
    confidence:
      "High for what the diagram says",
    note:
      "The diagram itself is seven months old.",
  },
  {
    id: "EV-1806",
    source: "Synthetic Ticket History",
    observed:
      "Ticket TK-881 was first assigned to Team Orion, then reassigned to Team Nova.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Consistent with stale ownership influencing initial routing, but does not prove why the first assignment occurred.",
  },
  {
    id: "EV-1807",
    source: "Fictional Change Record",
    observed:
      "A planned maintenance change for SRV-NB-22 began at 08:55 and was marked complete at 09:18.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Timing overlaps the first alert and may be relevant context.",
  },
  {
    id: "EV-1808",
    source: "Fictional Service Health",
    observed:
      "SRV-NB-22 reported degraded performance from 09:07 to 09:26.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Operational degradation overlaps the first two alerts.",
  },
  {
    id: "EV-1809",
    source: "Fictional Analyst Note",
    observed:
      "Analyst wrote: 'possibly related to maintenance' at 09:24.",
    direct:
      "Partly",
    freshness:
      "Current",
    confidence:
      "Low as a conclusion",
    note:
      "The note records the analyst hypothesis, not proof of causation.",
  },
  {
    id: "EV-1810",
    source: "Synthetic Workflow Log",
    observed:
      "Ticket routing rule used ownership dataset revision OWN-77.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Need to compare OWN-77 contents with the current registry.",
  },
  {
    id: "EV-1811",
    source: "Fictional Ownership Dataset",
    observed:
      "Revision OWN-77 still maps SRV-NB-22 to Team Orion.",
    direct:
      "Yes",
    freshness:
      "Stale",
    confidence:
      "High",
    note:
      "Strong evidence that the routing dataset itself was outdated.",
  },
  {
    id: "EV-1812",
    source: "Synthetic Workflow Log",
    observed:
      "Ticket TK-881 was reassigned after analyst owner verification.",
    direct:
      "Yes",
    freshness:
      "Current",
    confidence:
      "High",
    note:
      "Shows correction after human review.",
  },
];

const caseFindings = [
  {
    finding: "Three alerts are genuinely related by service and time.",
    evidence:
      "EV-1801, EV-1802, EV-1803",
    confidence:
      "High",
    caution:
      "Related does not mean identical cause.",
  },
  {
    finding: "The ticket-routing ownership dataset is stale.",
    evidence:
      "EV-1804, EV-1810, EV-1811",
    confidence:
      "High",
    caution:
      "This explains the stale mapping but not every alert.",
  },
  {
    finding: "Ticket TK-881 was initially routed to the former owner.",
    evidence:
      "EV-1806, EV-1811, EV-1812",
    confidence:
      "High",
    caution:
      "The exact routing-rule logic has not yet been reviewed.",
  },
  {
    finding: "Maintenance and service degradation overlap the alert window.",
    evidence:
      "EV-1807, EV-1808",
    confidence:
      "High",
    caution:
      "Timing overlap alone does not prove the maintenance caused the alerts.",
  },
  {
    finding: "The analyst's maintenance explanation remains a hypothesis.",
    evidence:
      "EV-1809",
    confidence:
      "High",
    caution:
      "The note proves the analyst considered the idea, not that the idea is correct.",
  },
  {
    finding: "A final root cause is not established by the current package.",
    evidence:
      "Combined case review",
    confidence:
      "High",
    caution:
      "The strongest defensible outcome may be a bounded conclusion plus next evidence request.",
  },
];

const correlationQuestions = [
  "Do the records refer to the same fictional service, identity, ticket, owner, or workflow?",
  "Are the timestamps directly comparable?",
  "Are two records independent sources or copies of the same source?",
  "Does one source describe a technical event while another describes a workflow action?",
  "Could normal maintenance or service degradation explain part of the evidence?",
  "Could stale ownership or documentation explain a process anomaly?",
  "Which observations repeat across independent sources?",
  "Which conclusions depend on a single source?",
  "Which records are current enough to support the decision?",
  "What evidence would most reduce the remaining uncertainty?",
];

const contradictionPatterns = [
  {
    pattern: "Current source vs stale source",
    example:
      "Service registry says Team Nova; old diagram says Team Orion.",
    handling:
      "Preserve both, note freshness, and prefer the current authoritative source for present ownership.",
  },
  {
    pattern: "Technical record vs analyst interpretation",
    example:
      "Service health shows degradation; analyst writes 'possibly maintenance-related.'",
    handling:
      "Treat the health record as observation and the analyst statement as hypothesis.",
  },
  {
    pattern: "Event time vs ticket time",
    example:
      "The alert occurred before the ticket was created.",
    handling:
      "Do not confuse workflow processing time with original event time.",
  },
  {
    pattern: "Diagram vs operational record",
    example:
      "Architecture document and current registry disagree.",
    handling:
      "Check version, owner, and review date before assuming either source is current.",
  },
  {
    pattern: "Alert label vs supporting evidence",
    example:
      "A high-severity label appears even though supporting context is limited.",
    handling:
      "Review the underlying evidence instead of treating severity as a conclusion.",
  },
  {
    pattern: "Multiple alerts vs one incident",
    example:
      "Several alerts occur close together.",
    handling:
      "Correlate first; do not automatically merge or separate without evidence.",
  },
];

const prioritizationFactors = [
  {
    factor: "Evidence quality",
    question:
      "Which next step is most likely to produce trustworthy information?",
  },
  {
    factor: "Uncertainty reduction",
    question:
      "Which missing fact would change the investigation decision the most?",
  },
  {
    factor: "Business context",
    question:
      "Does the fictional service support an important workflow or dependency?",
  },
  {
    factor: "Ownership",
    question:
      "Who is accountable for the service, evidence source, or workflow being reviewed?",
  },
  {
    factor: "Time sensitivity",
    question:
      "Will delayed review cause evidence, context, or operational relevance to degrade?",
  },
  {
    factor: "Safety",
    question:
      "Can the next step remain read-only, evidence-focused, and non-disruptive?",
  },
  {
    factor: "Reversibility",
    question:
      "Does the next step preserve options rather than force an irreversible decision?",
  },
  {
    factor: "Communication need",
    question:
      "Does another team need a clear evidence package before they can help?",
  },
];

const investigationBriefFields = [
  {
    field: "Case ID",
    purpose:
      "Stable identifier for the investigation.",
    example:
      "CASE-A18-001",
  },
  {
    field: "Scope",
    purpose:
      "Defines which fictional service, alerts, tickets, users, or time window are included.",
    example:
      "SRV-NB-22, AL-1801–AL-1803, 08:55–09:40",
  },
  {
    field: "Evidence inventory",
    purpose:
      "Lists every source and its freshness.",
    example:
      "12 evidence records, 2 stale sources",
  },
  {
    field: "Confirmed observations",
    purpose:
      "Records what the evidence directly supports.",
    example:
      "Three alerts occurred; ticket was reassigned; ownership dataset is stale",
  },
  {
    field: "Working hypotheses",
    purpose:
      "Records explanations that remain under review.",
    example:
      "Maintenance may explain part of the alert cluster",
  },
  {
    field: "Contradictions",
    purpose:
      "Shows where sources disagree.",
    example:
      "Current registry vs stale architecture diagram",
  },
  {
    field: "Open questions",
    purpose:
      "Lists missing facts that matter.",
    example:
      "Did maintenance actually change the condition monitored by the alerts?",
  },
  {
    field: "Confidence",
    purpose:
      "Rates the strength of key conclusions.",
    example:
      "High confidence in stale owner mapping; low confidence in root-cause explanation",
  },
  {
    field: "Next safe review",
    purpose:
      "Defines the evidence-focused action that should happen next.",
    example:
      "Compare synthetic maintenance notes with alert evidence and update ownership dataset",
  },
  {
    field: "Escalation",
    purpose:
      "Defines who should receive the case if ownership or impact requires broader review.",
    example:
      "Service Owner + SOC Workflow Owner",
  },
  {
    field: "Decision",
    purpose:
      "Records the current bounded conclusion.",
    example:
      "Correlated case; root cause not yet established",
  },
  {
    field: "Evidence preservation",
    purpose:
      "Records which synthetic evidence references must remain attached.",
    example:
      "EV-1801 through EV-1812",
  },
];

const dashboardMetrics = [
  {
    label: "Evidence records",
    value: "12",
    note: "Alerts, service registry, architecture, ticket, change, health, analyst, and workflow sources",
  },
  {
    label: "Confirmed findings",
    value: "6",
    note: "Several are strong; final root cause remains unproven",
  },
  {
    label: "Stale sources",
    value: "2",
    note: "Architecture diagram and ownership dataset",
  },
  {
    label: "Unsafe actions",
    value: "0",
    note: "Investigation remains synthetic, read-only, and evidence-focused",
  },
];

const logPreview = [
  "[09:14] ALERT AL-1801 service=SRV-NB-22 source=SYNTHETIC_ALERT_QUEUE status=OPEN",
  "[09:18] CHANGE CHG-442 service=SRV-NB-22 state=COMPLETE",
  "[09:21] ALERT AL-1802 service=SRV-NB-22 source=SYNTHETIC_ALERT_QUEUE status=OPEN",
  "[09:24] NOTE analyst_hypothesis=MAINTENANCE_RELATED confidence=UNCONFIRMED",
  "[09:26] HEALTH SRV-NB-22 state=RECOVERED",
  "[09:30] ALERT AL-1803 service=SRV-NB-22 source=SYNTHETIC_ALERT_QUEUE status=OPEN",
  "[09:33] ROUTING TK-881 owner_dataset=OWN-77 initial_team=ORION",
  "[09:36] OWNER_CHECK current_owner=TEAM_NOVA source=SERVICE_REGISTRY",
  "[09:38] REASSIGN TK-881 from=TEAM_ORION to=TEAM_NOVA reason=OWNER_VERIFIED",
  "[09:40] CASE status=CORRELATION_REQUIRED root_cause=NOT_ESTABLISHED",
];

const labRecords = [
  "Create at least thirty fictional evidence records from alerts, logs, tickets, ownership data, architecture, change records, service health, and analyst notes.",
  "Give every evidence item a stable EV ID.",
  "Record the source of every observation.",
  "Record the observed timestamp and normalized timestamp where relevant.",
  "Mark freshness as Current, Stale, Missing, or Unknown.",
  "Separate direct evidence from inference.",
  "Record at least five working hypotheses.",
  "Record at least five contradictions.",
  "Record at least ten unanswered questions.",
  "Give each major finding a confidence level.",
  "Identify which evidence sources are independent.",
  "Identify which sources may simply repeat another source.",
  "Identify at least three places where workflow time differs from event time.",
  "Identify at least three stale-source problems.",
  "Identify at least three places where a severity label could bias interpretation.",
  "Identify at least three normal operational explanations that should be considered.",
  "Identify at least three cases where two events are correlated but causation is not established.",
  "Choose the strongest next evidence request for each major open question.",
  "Assign a fictional evidence owner where source freshness matters.",
  "Assign a fictional workflow owner where ticket or routing evidence matters.",
  "Record escalation criteria.",
  "Record evidence-preservation references.",
  "Write a bounded interim conclusion.",
  "Write a final investigation summary without claiming facts that the evidence does not prove.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the current service registry as the stronger present-owner source, preserve the stale diagram as contradictory evidence, and open a documentation-update question.",
    outcome:
      "Best. Freshness and source purpose matter, and the contradiction should remain visible.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Ignore the service registry because architecture diagrams are always authoritative.",
    outcome:
      "Risky. A stale architecture document should not automatically override a current owner registry.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Assume both teams currently own the service.",
    outcome:
      "Caution. The conflict needs review; it should not be converted into an unsupported conclusion.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Record maintenance as a plausible hypothesis, compare the change and service-health evidence with the alert evidence, and avoid calling it the root cause yet.",
    outcome:
      "Best. Timing makes the hypothesis relevant, but causation still needs evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Close the case as maintenance-related because the timestamps overlap.",
    outcome:
      "Risky. Temporal overlap is correlation, not proof of causation.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore the maintenance record because security alerts are always unrelated to normal operations.",
    outcome:
      "Risky. Defensive investigation should consider legitimate operational context.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the best definition of an observation in a defensive investigation?",
    choices: [
      "A fact directly supported by the available evidence.",
      "The analyst's preferred explanation.",
      "A prediction about what probably happened.",
      "Any statement written in a ticket.",
    ],
    answer: 0,
    explanation:
      "Observations should remain tied to actual evidence rather than interpretation.",
  },
  {
    question:
      "Why is timestamp normalization important?",
    choices: [
      "It allows events from different sources to be compared on a common time reference.",
      "It makes every system clock perfectly accurate.",
      "It proves causation.",
      "It removes the need for source attribution.",
    ],
    answer: 0,
    explanation:
      "Normalization helps compare records without assuming every source uses the same time basis.",
  },
  {
    question:
      "What is strongest when a current service registry and a seven-month-old architecture diagram disagree about ownership?",
    choices: [
      "Preserve both, prefer the current authoritative source for present ownership, and document the stale diagram.",
      "Use the old diagram because diagrams are always correct.",
      "Assume both owners are current.",
      "Delete the contradictory record.",
    ],
    answer: 0,
    explanation:
      "Freshness and source purpose should guide interpretation while contradictions remain visible.",
  },
  {
    question:
      "What does temporal correlation prove?",
    choices: [
      "That two events occurred near each other in time, not necessarily that one caused the other.",
      "That one event definitely caused the other.",
      "That the alerts should be closed.",
      "That the sources are independent.",
    ],
    answer: 0,
    explanation:
      "Correlation is useful for investigation but should not be mistaken for causation.",
  },
  {
    question:
      "What is a strong reason to lower confidence in a finding?",
    choices: [
      "The conclusion depends on stale context or unresolved contradictory evidence.",
      "The finding has a short title.",
      "The alert severity is Medium.",
      "The case contains more than one source.",
    ],
    answer: 0,
    explanation:
      "Stale, missing, or contradictory evidence makes a conclusion less certain.",
  },
  {
    question:
      "What should a Multi-Source Investigation Brief include?",
    choices: [
      "Scope, evidence inventory, confirmed observations, hypotheses, contradictions, open questions, confidence, next review, and escalation.",
      "Only the analyst's final guess.",
      "Only alert severity and ticket status.",
      "Real credentials and system commands.",
    ],
    answer: 0,
    explanation:
      "A strong brief preserves both the evidence and the uncertainty around the case.",
  },
  {
    question:
      "What is the safest next step when the root cause is not established?",
    choices: [
      "Identify the evidence that would reduce uncertainty the most and continue read-only defensive review.",
      "Choose the most dramatic explanation.",
      "Perform disruptive testing on a real system.",
      "Remove contradictory evidence.",
    ],
    answer: 0,
    explanation:
      "The investigation should continue with evidence-focused, non-disruptive review.",
  },
];

const checklistItems = [
  "Every observation has a source.",
  "Every important timestamp has context.",
  "Event time and workflow time are not confused.",
  "Direct evidence is separated from inference.",
  "Hypotheses are labeled as hypotheses.",
  "Contradictions remain visible.",
  "Stale evidence is marked.",
  "Missing evidence is marked.",
  "Independent sources are distinguished from copied sources.",
  "Severity labels are not treated as proof.",
  "Correlation is not confused with causation.",
  "Operational explanations are considered.",
  "Confidence is documented.",
  "Open questions are explicit.",
  "The next review step is evidence-focused.",
  "Ownership is identified where possible.",
  "Escalation criteria are clear.",
  "Evidence references are preserved.",
  "The interim conclusion is bounded.",
  "No real systems are probed, scanned, exploited, or changed.",
];

const takeaways = [
  "Multi-source investigation begins by preserving what each source actually says.",
  "Observation, inference, hypothesis, contradiction, and unanswered question are different evidence states.",
  "Source freshness and source purpose matter when records disagree.",
  "Timestamp normalization helps build sequence but does not prove causation.",
  "Several alerts in the same time window may be related without sharing one root cause.",
  "Analyst notes can contain valuable context while still representing interpretation rather than proof.",
  "Stale ownership and documentation can create workflow problems that look like security anomalies.",
  "A strong investigation can end with a bounded conclusion instead of a forced root-cause claim.",
  "The best next step is usually the one that reduces important uncertainty safely.",
  "The Multi-Source Investigation Brief becomes the first artifact in the A18 Advanced Defensive Casebook.",
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
        A18 Module Home
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

export default function MultiSourceAlertInvestigationPage() {
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
              A18.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Multi-Source Alert Investigation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Advanced defensive analysis rarely starts with one perfect source.
            It starts with fragments: an alert, a ticket, a service record, a
            stale diagram, an analyst note, and a timeline that does not
            immediately fit together.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lab teaches you to correlate those sources without turning
            uncertainty into certainty. Every record in the lesson is fictional
            or synthetic.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A18: Advanced Defensive Labs"
          lessonTitle="Multi-Source Alert Investigation"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.1 Entry Readiness"
          items={[
            "I can read fictional alerts and logs without assuming the alert label is the final conclusion.",
            "I understand that timestamps from different systems may need normalization before comparison.",
            "I can separate what evidence directly proves from what it merely suggests.",
            "I will keep all investigation work fictional, read-only, defensive, and non-disruptive.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Most Dangerous Investigation Error Is Often Overconfidence"
        >
          <p className="leading-8">
            When several alerts appear close together, it is tempting to build a
            story immediately. A service changed, then a health event appeared,
            then three alerts fired, then a ticket was reassigned. The sequence
            looks meaningful—but each link still needs evidence.
          </p>

          <p className="mt-4 leading-8">
            Professional investigators learn to preserve that difference. They
            can say, “These events are related by service and time,” without
            also saying, “We know one caused the others.”
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good correlation finds relationships. Good judgment prevents those relationships from becoming unsupported conclusions.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lab"
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
          eyebrow="Evidence Language"
          title="Use Precise Words for What the Case Actually Supports"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceVocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Source Quality"
          title="Different Evidence Sources Answer Different Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {sourceQualityQuestions.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.source}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Ask: {item.ask}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Timestamp Reasoning"
          title="A Timeline Is More Than Sorting by Time"
        >
          <p className="leading-8">
            Investigators often receive records from systems that measure time
            differently. One source may record the original event. Another may
            record when the event was collected. A ticket may be created several
            minutes later. A human note may be written after the analyst has
            already reviewed other evidence.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {timestampConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.concept}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Important distinction</p>
            <p className="mt-2 leading-7">
              A ticket created at 09:33 does not mean the underlying event
              happened at 09:33. Workflow timestamps and event timestamps answer
              different questions.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Confidence"
          title="Conclusions Should Carry the Strength of Their Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {confidenceModel.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.level}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case File"
          title="Northbridge Synthetic Investigation Evidence"
        >
          <p className="leading-8">
            The case below contains a real-looking mixture of evidence, but it
            is entirely fictional. Your job is to determine which conclusions
            are supported and which remain hypotheses.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeEvidence.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.source}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.freshness}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-white">{item.observed}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Direct evidence?
                    </p>
                    <p className="mt-2 text-sm text-blue-50">{item.direct}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Confidence
                    </p>
                    <p className="mt-2 text-sm text-emerald-50">
                      {item.confidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Investigator note
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Multi-Source Investigation Dashboard"
          subtitle="Fictional evidence volume, confirmed findings, stale sources, and safety posture"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Three Alerts Correlated to SRV-NB-22"
          severity="Medium"
          time="09:40"
          source="Fictional Investigation Queue"
          details="AL-1801, AL-1802, and AL-1803 occurred within sixteen minutes for the same fictional service. A maintenance window and service-health degradation overlap part of the alert window, while the ticket-routing ownership dataset is stale."
          recommendation="Correlate evidence, preserve uncertainty, correct the stale owner source, and avoid declaring maintenance to be the root cause without stronger evidence."
        />

        <FakeLogPanel
          title="Northbridge Synthetic Timeline Preview"
          logs={logPreview}
        />

        <Section
          eyebrow="Finding Development"
          title="What the Current Evidence Supports"
        >
          <div className="grid gap-5">
            {caseFindings.map((item) => (
              <article
                key={item.finding}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <h3 className="text-xl font-black text-blue-50">
                  {item.finding}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Confidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.confidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Caution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.caution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Ownership Conflict"
          question="What is the strongest conclusion about the conflicting Team Orion and Team Nova records?"
          evidence={[
            "The current service registry maps SRV-NB-22 to Team Nova.",
            "The registry was reviewed eleven days ago.",
            "The architecture diagram maps the service to Team Orion.",
            "The diagram is seven months old.",
            "The routing dataset OWN-77 also maps the service to Team Orion.",
            "Ticket TK-881 was reassigned to Team Nova after analyst verification.",
          ]}
          options={[
            "Current evidence strongly supports Team Nova as the present owner, while stale documentation and routing data still reference Team Orion and should be corrected.",
            "Team Orion must still be the current owner because two sources list it.",
            "Both teams definitely own the service.",
            "The ownership conflict proves the alerts are malicious.",
          ]}
          bestAnswer={0}
          explanation="The current registry and analyst verification support Team Nova, while the older sources explain why routing may have been wrong. Source freshness matters."
        />

        <Section
          eyebrow="Correlation"
          title="Questions That Help Connect Records Without Overreaching"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {correlationQuestions.map((item, index) => (
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

        <Section
          eyebrow="Contradictions"
          title="Disagreement Between Sources Is Useful Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {contradictionPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Handling: {item.handling}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Prioritization"
          title="Choosing the Next Safe Review Step"
        >
          <p className="leading-8">
            An advanced investigation may have dozens of possible next questions.
            The best choice is usually the one that reduces important
            uncertainty without creating unnecessary risk or delay.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {prioritizationFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Investigation Brief"
          title="What a Professional Multi-Source Investigation Brief Contains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {investigationBriefFields.map((item) => (
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

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Conflicting Ownership"
          scenario="The current fictional service registry lists Team Nova as owner, while a seven-month-old architecture diagram and stale routing dataset still list Team Orion."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Maintenance Overlap"
          scenario="A fictional maintenance window and service degradation overlap the time of several alerts, but no evidence directly proves the maintenance caused those alert conditions."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Multi-Source Investigation Brief"
        >
          <p className="leading-8">
            Build a fictional case package that forces you to compare evidence
            without turning correlation into causation or stale context into
            current truth.
          </p>

          <div className="mt-6 grid gap-4">
            {labRecords.map((item, index) => (
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
              Use only fictional or synthetic alerts, logs, tickets, ownership
              records, diagrams, health records, change records, and analyst
              notes. Do not scan, probe, enumerate, exploit, or test any real
              system. The lab is about evidence correlation and defensive
              reasoning.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Maintenance Hypothesis"
          question="What is the strongest conclusion about the maintenance window?"
          evidence={[
            "Maintenance started at 08:55.",
            "Service degradation began at 09:07.",
            "The first alert appeared at 09:14.",
            "Maintenance was marked complete at 09:18.",
            "A second alert appeared at 09:21.",
            "An analyst wrote 'possibly related to maintenance' at 09:24.",
            "The evidence package does not show a direct causal link.",
          ]}
          options={[
            "Maintenance is a relevant hypothesis because timing overlaps, but the case does not yet prove it caused the alerts.",
            "Maintenance definitely caused all alerts.",
            "Maintenance is irrelevant because it was planned.",
            "The analyst note is sufficient proof of root cause.",
          ]}
          bestAnswer={0}
          explanation="The timing makes maintenance important context, but temporal overlap and an analyst hypothesis are not enough to establish causation."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write Two Competing Case Narratives"
        >
          <p className="leading-8">
            Using only the fictional evidence in this lesson, write two
            plausible but different explanations for the case. Then identify
            which evidence supports each explanation, which evidence weakens it,
            and which missing fact would most help distinguish between them.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Narrative A",
              "Narrative B",
              "Evidence supporting A",
              "Evidence weakening A",
              "Evidence supporting B",
              "Evidence weakening B",
              "Shared observations",
              "Contradictory evidence",
              "Most important missing fact",
              "Current confidence",
              "Next safe evidence request",
              "Reason the case should remain open or bounded",
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
            The purpose is not to invent dramatic stories. It is to practice
            keeping several explanations alive until the evidence justifies
            narrowing them.
          </p>
        </Section>

        <DefenderChecklist
          title="A18.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.1 Mini Quiz: Multi-Source Alert Investigation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Multi-Source Investigation Brief"
          prompt="Create the first artifact for your A18 Advanced Defensive Casebook: a fictional Multi-Source Investigation Brief. Include case ID, scope, evidence inventory, source freshness, normalized timestamps, confirmed observations, working hypotheses, contradictions, unanswered questions, confidence levels, current bounded conclusion, next safe review actions, escalation needs, and evidence-preservation references."
          tips={[
            "Keep observations and interpretations in separate fields.",
            "Preserve contradictory evidence instead of deleting it.",
            "Mark stale and missing sources clearly.",
            "Do not confuse workflow time with event time.",
            "Use confidence labels that match the evidence.",
            "Keep every record fictional and non-disruptive.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A18.2?"
        >
          <p className="leading-8">
            A18.2 moves from alert correlation to network defense architecture
            review. Before continuing, make sure you can explain why an
            investigation should preserve uncertainty instead of forcing every
            clue into one final story.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish observation, inference, hypothesis, contradiction, and unanswered question.",
              "I can compare evidence sources based on freshness, purpose, and independence.",
              "I can normalize timelines without treating timing as proof of causation.",
              "I can choose a safe next review step that reduces uncertainty.",
              "I can write a bounded investigation conclusion that does not claim more than the evidence supports.",
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
          title="How to Make the Investigation Brief Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with scope",
                detail:
                  "A reviewer should immediately know which service, alerts, tickets, and time window the case covers.",
              },
              {
                title: "Use evidence IDs",
                detail:
                  "Stable references make it possible to trace every finding back to its source.",
              },
              {
                title: "Show contradictions",
                detail:
                  "Professional reports do not hide inconvenient evidence.",
              },
              {
                title: "Show confidence",
                detail:
                  "Confidence labels help readers distinguish strong findings from provisional hypotheses.",
              },
              {
                title: "Show the next question",
                detail:
                  "A good investigation brief explains what evidence would most reduce uncertainty.",
              },
              {
                title: "Avoid causal language unless supported",
                detail:
                  "Use 'correlated with' or 'overlaps' when causation has not been established.",
              },
              {
                title: "Preserve business context",
                detail:
                  "Ownership, maintenance, service health, and workflow evidence can change how security signals should be interpreted.",
              },
              {
                title: "Connect forward",
                detail:
                  "A18.2 will apply the same evidence discipline to a fictional network-defense architecture review.",
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
            A18.1 investigation stays fictional, read-only, defensive, and non-disruptive
          </h2>
          <p className="mt-3 leading-7">
            Do not scan, probe, enumerate, exploit, fuzz, disrupt, or access real
            systems. Do not use real credentials, private records, or live
            security platforms. The entire investigation should use synthetic
            evidence and focus on correlation, uncertainty, defensive judgment,
            documentation, and communication.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A18.1 Multi-Source Alert Investigation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a defensible method for correlating alerts, logs,
            tickets, ownership, architecture, changes, health records, and
            analyst notes while preserving source quality and uncertainty. Next,
            A18.2 applies the same evidence discipline to a network defense
            architecture review.
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