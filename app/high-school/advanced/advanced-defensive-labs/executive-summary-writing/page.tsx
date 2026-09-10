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
const previousLesson = `${modulePath}/forensics-timeline-case`;
const nextLesson = `${modulePath}/advanced-lab-challenge`;

const objectives = [
  "Explain how technical, manager, and executive security summaries differ in audience, detail, materiality, evidence references, and decision focus.",
  "Translate fictional security evidence into clear business and service meaning without exaggerating severity, hiding uncertainty, or claiming unsupported root cause.",
  "Separate confirmed facts, current interpretation, unresolved uncertainty, impact, risk, ownership, recommendation, and next checkpoint in concise leadership communication.",
  "Choose evidence and wording based on materiality so an executive summary is shorter than a technical record without becoming vague or misleading.",
  "Produce a portfolio-ready Executive Security Summary that preserves confidence, decision needs, ownership, priorities, and concise evidence references from a synthetic case.",
];

const audienceProfiles = [
  {
    audience: "Technical reviewer",
    primaryNeed: "Evidence quality and reasoning",
    include: "Systems, timestamps, source references, observed conditions, assumptions, contradictions, confidence, and technical dependencies.",
    avoid: "Dumping every raw record without interpretation.",
    success: "Another technical reviewer can understand how the conclusion was reached and what remains uncertain.",
  },
  {
    audience: "Manager / operational owner",
    primaryNeed: "Operational meaning and accountable execution",
    include: "Service impact, affected teams, current status, owner, dependency, priority, remediation state, decision blockers, and next checkpoint.",
    avoid: "Deep technical detail that does not change ownership or action.",
    success: "The manager understands what needs attention, who owns it, what is blocking progress, and when the next update is expected.",
  },
  {
    audience: "Executive / senior leader",
    primaryNeed: "Material business meaning and decisions",
    include: "What happened, why it matters, material risk or impact, confidence, major decision or resource need, accountable owner, and next checkpoint.",
    avoid: "Jargon, raw logs, speculative claims, technical trivia, and severity labels presented as business impact.",
    success: "The leader can make or sponsor the right decision without needing to decode the investigation record.",
  },
];

const materialityDimensions = [
  {
    dimension: "Business or service consequence",
    teaching: "A security event becomes leadership-relevant when it materially affects service delivery, customers, safety, financial exposure, legal obligations, strategic work, or an important business dependency.",
    question: "What changed for the organization, service, users, or decision makers?",
  },
  {
    dimension: "Scope",
    teaching: "Scope describes how much of the environment or organization is credibly affected. One unusual record and a confirmed organization-wide outage are not equivalent.",
    question: "How broad is the supported impact, and what evidence defines the boundary?",
  },
  {
    dimension: "Duration and persistence",
    teaching: "A short, recovered service disturbance and a persistent unresolved condition can carry different operational significance even if they share the same technical severity label.",
    question: "Is the effect ongoing, recovered, intermittent, or still unknown?",
  },
  {
    dimension: "Criticality",
    teaching: "The same technical condition can matter differently depending on the importance of the affected service, identity, data, process, or dependency.",
    question: "How important is the affected asset or process to the business?",
  },
  {
    dimension: "Decision urgency",
    teaching: "Executives need to know whether a decision is required now, at a scheduled checkpoint, or only if a trigger occurs. Urgency should come from evidence and consequence, not dramatic wording.",
    question: "What decision, if any, must leadership make and by when?",
  },
  {
    dimension: "Uncertainty",
    teaching: "Material uncertainty can itself be leadership-relevant when it limits a major decision. Uncertainty should be named, bounded, and linked to what evidence would reduce it.",
    question: "Which unknowns could materially change the decision or risk?",
  },
];

const impactVsSeverity = [
  {
    concept: "Technical severity",
    means: "A technical prioritization signal based on the nature of a condition, rule, finding, or event.",
    doesNotMean: "Automatic proof of business impact, confirmed compromise, or executive urgency.",
    example: "A High alert on a synthetic service identity can still turn out to be maintenance-related after additional evidence is reviewed.",
  },
  {
    concept: "Operational impact",
    means: "What changed in service availability, reliability, workflow, staffing, or operational performance.",
    doesNotMean: "Automatic security root cause.",
    example: "A four-minute API degradation is operationally meaningful even if the exact cause remains uncertain.",
  },
  {
    concept: "Business impact",
    means: "The material consequence for customers, revenue, obligations, reputation, strategic activity, or another business outcome.",
    doesNotMean: "The same thing as a technical alert score.",
    example: "A brief internal service slowdown may be operationally visible but still have no demonstrated customer or financial effect.",
  },
  {
    concept: "Risk",
    means: "A possible future unwanted consequence connected to a condition or event, evaluated with evidence and controls.",
    doesNotMean: "A fact that the consequence has already occurred.",
    example: "A recurring telemetry gap may create future detection and reconstruction risk even when no current compromise is confirmed.",
  },
];

const confidenceLanguage = [
  {
    level: "High confidence",
    useWhen: "Multiple current, independent, credible sources support the same conclusion and important contradictions have been resolved or bounded.",
    wording: "Evidence strongly supports...",
  },
  {
    level: "Moderate confidence",
    useWhen: "The best explanation is supported, but a meaningful gap, stale source, clock issue, or unresolved dependency remains.",
    wording: "Current evidence supports... with moderate confidence...",
  },
  {
    level: "Low confidence",
    useWhen: "The conclusion is tentative because evidence is incomplete, contradictory, indirect, or dependent on assumptions.",
    wording: "Available evidence suggests..., but confidence remains low because...",
  },
  {
    level: "Unknown / not established",
    useWhen: "The evidence does not support a defensible conclusion yet.",
    wording: "The current evidence does not establish...",
  },
];

const evidenceCompressionRules = [
  {
    principle: "Compress detail, not meaning",
    explanation: "A short summary can omit dozens of individual log rows while still preserving the conclusion, confidence, impact, owner, decision, and most important unresolved question.",
  },
  {
    principle: "Keep decisive evidence references",
    explanation: "Use a small number of concise evidence references when they anchor a claim or let another reviewer trace the decision. Executives do not need every record, but unsupported statements are not acceptable.",
  },
  {
    principle: "Retain uncertainty that changes decisions",
    explanation: "If an unresolved telemetry gap could materially change the confidence or risk decision, it belongs in the summary even if many lower-value technical details do not.",
  },
  {
    principle: "Separate facts from interpretation",
    explanation: "A fact can be compressed into a concise sentence; an interpretation should still be presented as interpretation rather than silently promoted into certainty.",
  },
  {
    principle: "Preserve the decision path",
    explanation: "A summary should make clear what decision is needed, who owns it, what recommendation is supported, and what next checkpoint or trigger applies.",
  },
  {
    principle: "Remove jargon before removing substance",
    explanation: "Plain language is not less precise. Replace specialized wording with business-readable language while preserving the real technical meaning.",
  },
];

const executiveSummaryElements = [
  {
    label: "What happened",
    purpose: "State the supported event or condition in plain language.",
    good: "A brief API service degradation occurred during approved maintenance while a service-identity alert was under review.",
    weak: "Critical cyber incident detected!",
  },
  {
    label: "Why it matters",
    purpose: "Explain the material operational or business consequence.",
    good: "The service recovered within minutes and no customer impact is currently demonstrated, but a telemetry gap limits full reconstruction of the event window.",
    weak: "The alert was High severity, so leadership should be concerned.",
  },
  {
    label: "What is confirmed",
    purpose: "Separate evidence-backed facts from interpretation.",
    good: "Approved maintenance overlapped the alert window, the service identity was confirmed as authorized, and no repeated unusual activity was observed afterward.",
    weak: "Maintenance caused everything.",
  },
  {
    label: "What remains uncertain",
    purpose: "Name the unknowns that could change confidence or decisions.",
    good: "The exact cause of the six-minute queue telemetry gap remains unresolved.",
    weak: "There are no unknowns.",
  },
  {
    label: "Current assessment",
    purpose: "Give a bounded interpretation with confidence.",
    good: "Current evidence supports approved maintenance as the strongest explanation for the identity alert; misuse is not confirmed.",
    weak: "The system was definitely safe.",
  },
  {
    label: "Decision / recommendation",
    purpose: "Tell leadership what choice or sponsorship is needed.",
    good: "Keep the incident closed as unconfirmed misuse while assigning the telemetry gap as a monitoring-quality remediation item with an accountable owner.",
    weak: "Investigate more.",
  },
  {
    label: "Owner and next checkpoint",
    purpose: "Make accountability and timing visible.",
    good: "Monitoring Engineering owns the telemetry-gap review; leadership receives the next status at the scheduled Friday checkpoint or earlier if repeat gaps appear.",
    weak: "The security team will handle it.",
  },
];

const antiPatterns = [
  {
    title: "Sensational language",
    weak: "A devastating critical cyberattack nearly took down the platform.",
    better: "A brief service degradation and unusual identity alert were reviewed; current evidence does not confirm malicious activity.",
    why: "Executive communication should communicate material facts, not create urgency through unsupported emotion.",
  },
  {
    title: "Severity equals business impact",
    weak: "The alert was High, therefore the business impact was High.",
    better: "The alert was technically prioritized as High, while demonstrated service impact was brief and no customer impact is currently established.",
    why: "Technical severity is an investigation signal, not a substitute for impact analysis.",
  },
  {
    title: "Correlation becomes root cause",
    weak: "The identity event caused the service degradation because they happened at the same time.",
    better: "The events overlapped, but the current timeline does not establish causation.",
    why: "Chronological proximity supports correlation, not automatic causal proof.",
  },
  {
    title: "Hiding uncertainty",
    weak: "The case is fully resolved.",
    better: "Misuse is not confirmed; a queue telemetry gap remains unresolved and limits complete reconstruction.",
    why: "Uncertainty that affects confidence or future risk must remain visible.",
  },
  {
    title: "Raw-log dumping",
    weak: "Paste twelve pages of synthetic timestamps into the executive summary.",
    better: "Reference the few records that support the decision and keep the detailed timeline in the technical appendix.",
    why: "Executives need the decision-relevant meaning, not the full evidence packet.",
  },
  {
    title: "Vague ownership",
    weak: "Security should monitor the issue.",
    better: "Monitoring Engineering owns the telemetry remediation; the Incident Lead owns case status and the Friday checkpoint.",
    why: "A summary that does not identify accountability is difficult to act on.",
  },
  {
    title: "False precision",
    weak: "There is exactly a 97% chance the alert was maintenance-related.",
    better: "Current evidence supports the maintenance explanation with moderate-to-high confidence; the telemetry gap prevents stronger certainty.",
    why: "Precision should come from a real measurement model, not invented percentages.",
  },
  {
    title: "Unsupported detail",
    weak: "Customers lost transactions during the event.",
    better: "No customer impact is demonstrated in the synthetic evidence provided.",
    why: "A summary must not add facts simply because they would make the story sound complete.",
  },
];

const northbridgeFacts = [
  {
    id: "NB-EX-01",
    category: "Approved change",
    fact: "CHG-FT-41 authorized maintenance on API-NB-41 and service identity SVC-NB-40 beginning at 09:00.",
    significance: "Provides legitimate operational context but does not automatically explain every event.",
  },
  {
    id: "NB-EX-02",
    category: "Detection",
    fact: "DET-NB-7 created a High-priority unusual service-identity alert at 09:05:11.",
    significance: "Required investigation; severity alone does not establish compromise or business impact.",
  },
  {
    id: "NB-EX-03",
    category: "Service health",
    fact: "API error rate and latency increased from approximately 09:06 to 09:10 before returning to baseline.",
    significance: "Confirms brief operational degradation.",
  },
  {
    id: "NB-EX-04",
    category: "Application audit",
    fact: "API audit evidence linked the unusual service-identity activity to maintenance transaction CHG-FT-41.",
    significance: "Materially weakens the misuse hypothesis.",
  },
  {
    id: "NB-EX-05",
    category: "Identity ownership",
    fact: "The current identity owner confirmed that SVC-NB-40 was authorized for the maintenance scope.",
    significance: "Supports legitimate use while still requiring evidence review.",
  },
  {
    id: "NB-EX-06",
    category: "Timeline quality",
    fact: "The identity event source had an approximate +78 second clock offset and delayed collection.",
    significance: "Limits exact sequence confidence and prevents simplistic timestamp comparison.",
  },
  {
    id: "NB-EX-07",
    category: "Monitoring",
    fact: "QUEUE-NB-2 telemetry was unavailable for 6 minutes and 42 seconds during the review window.",
    significance: "Creates a reconstruction limitation and a defensible monitoring-quality risk.",
  },
  {
    id: "NB-EX-08",
    category: "Analyst reassessment",
    fact: "Misuse confidence was lowered from Medium to Low after maintenance linkage and ownership evidence arrived.",
    significance: "Shows evidence-driven reassessment rather than retroactive certainty.",
  },
  {
    id: "NB-EX-09",
    category: "Current status",
    fact: "No repeated unusual service-identity behavior was observed after the maintenance window.",
    significance: "Supports lower current concern but is not proof that nothing adverse could have occurred.",
  },
  {
    id: "NB-EX-10",
    category: "Impact",
    fact: "The synthetic case does not establish customer loss, financial loss, data exposure, or confirmed malicious activity.",
    significance: "Prevents the executive summary from inventing material impact.",
  },
];

const threeAudienceVersions = [
  {
    audience: "Technical version",
    length: "Detailed",
    text: "Between 09:00 and 09:31, approved change CHG-FT-41 overlapped an unusual SVC-NB-40 identity alert and a brief API-NB-41 service degradation. Identity-source timestamps include an approximate +78 second offset and delayed collection. API audit evidence links the identity action to the approved change, and the current owner confirms authorization for the maintenance scope. Misuse confidence moved from Medium to Low as these records arrived. QUEUE-NB-2 telemetry is missing for 6 minutes 42 seconds, so exact reconstruction of that interval remains incomplete. Current evidence does not confirm malicious activity or establish causation between the identity event and service degradation.",
    whyItFits: "It preserves timestamps, evidence quality, clock uncertainty, system identifiers, and hypothesis changes for technical review.",
  },
  {
    audience: "Manager version",
    length: "Moderate",
    text: "A brief API service degradation occurred during approved maintenance while an unusual service-identity alert was investigated. Current evidence supports authorized maintenance activity rather than confirmed misuse, and the service returned to baseline within minutes. A six-minute queue telemetry gap limits full reconstruction and requires follow-up. Monitoring Engineering owns the telemetry review, while the Incident Lead maintains case status and will reassess if repeat gaps or new identity evidence appear.",
    whyItFits: "It emphasizes operational status, ownership, dependency, and follow-up while retaining the main uncertainty.",
  },
  {
    audience: "Executive version",
    length: "Concise",
    text: "A short internal service degradation occurred during approved maintenance. Current evidence does not confirm malicious activity or customer impact, and the service recovered within minutes. The main remaining concern is a six-minute monitoring gap that limits complete reconstruction and creates future detection risk. Recommendation: close the misuse hypothesis at low confidence, assign the monitoring gap for remediation, and review progress at the next scheduled leadership checkpoint.",
    whyItFits: "It focuses on material impact, current confidence, the remaining risk, a clear recommendation, and the leadership-relevant checkpoint.",
  },
];

const decisionLanguage = [
  {
    situation: "No immediate leadership decision",
    communication: "State that no immediate executive action is required, identify the accountable owner, and define the next checkpoint or escalation trigger.",
  },
  {
    situation: "Resource or priority decision",
    communication: "State what resource, priority change, or sponsorship is needed and connect it to a supported risk or service consequence.",
  },
  {
    situation: "Risk acceptance",
    communication: "Name the residual risk, accountable risk owner, rationale, boundaries, review date, and trigger that would reopen the decision.",
  },
  {
    situation: "Operational escalation",
    communication: "Explain what changed, why the existing owner or process is insufficient, what decision authority is needed, and what happens if the decision is delayed.",
  },
  {
    situation: "Evidence insufficient",
    communication: "Say clearly that the evidence does not yet support the decision, identify the missing evidence, and define the next evidence checkpoint.",
  },
];

const conciseEvidenceReferences = [
  {
    claim: "Maintenance is the strongest current explanation for the identity event.",
    reference: "CHG-FT-41 + API audit linkage + current owner confirmation",
    why: "Three different evidence types support the interpretation without claiming absolute certainty.",
  },
  {
    claim: "Operational impact was brief.",
    reference: "Service health 09:06–09:10",
    why: "A single concise reference anchors the duration without reproducing every metric row.",
  },
  {
    claim: "Full reconstruction remains limited.",
    reference: "QUEUE-NB-2 gap 09:12:58–09:19:39",
    why: "The unresolved gap is decision-relevant and should remain visible in leadership communication.",
  },
  {
    claim: "No confirmed malicious activity is established.",
    reference: "Analyst reassessment + no repeat unusual behavior + evidence review status",
    why: "The statement is bounded; it does not claim proof that no adverse activity was possible.",
  },
];

const labTasks = [
  "Read the synthetic Northbridge case and identify the five most decision-relevant facts before writing any summary.",
  "Write a short materiality note that distinguishes technical alert severity, operational impact, business impact, and future monitoring risk.",
  "List what is confirmed, what is interpreted, and what remains uncertain. Do not merge these categories.",
  "Choose no more than four concise evidence references for the leadership version and explain why each one matters.",
  "Write a technical summary that preserves evidence quality, timestamps, systems, contradictions, and confidence without copying the raw log panel.",
  "Rewrite the same facts as a manager summary focused on operational impact, ownership, remediation, dependencies, and status.",
  "Rewrite the same facts as an executive summary focused on material meaning, risk, decision, owner, recommendation, and next checkpoint.",
  "Check all three versions for unsupported claims, hidden uncertainty, sensational wording, false precision, and jargon.",
  "Confirm that the facts are consistent across all three versions even though the level of detail changes.",
  "Add a one-sentence leadership decision statement that clearly says whether immediate action, sponsorship, or only a future checkpoint is needed.",
  "Add a confidence statement that explains the most important reason confidence is not higher.",
  "Document the final Executive Security Summary as the ninth artifact in the A18 Advanced Defensive Casebook.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response: "Tell leadership that the High alert confirms a major cyber incident because the technical severity is High.",
    outcome: "Risky. Alert severity does not prove compromise or material business impact.",
    tone: "risk" as const,
  },
  {
    label: "Choice B",
    response: "State that a High-priority alert and brief service degradation were reviewed, current evidence does not confirm malicious activity, and the remaining material concern is the telemetry gap.",
    outcome: "Best. This preserves technical significance, business meaning, current confidence, and the unresolved risk without exaggeration.",
    tone: "best" as const,
  },
  {
    label: "Choice C",
    response: "Remove the alert from the summary entirely because later evidence made misuse less likely.",
    outcome: "Caution. The alert is still relevant context; the correct approach is to summarize its meaning accurately rather than erase it.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response: "Tell the executive team that no action is needed and omit the queue telemetry gap because the service already recovered.",
    outcome: "Risky. Recovery does not remove a monitoring-quality limitation that could matter in a future event.",
    tone: "risk" as const,
  },
  {
    label: "Choice B",
    response: "Escalate the telemetry gap as proof that malicious activity occurred during the missing interval.",
    outcome: "Caution. A gap is a limitation, not proof of what occurred inside it.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response: "Describe the gap as an unresolved monitoring-quality risk, assign an owner, define a remediation checkpoint, and state that it limits confidence but does not prove malicious activity.",
    outcome: "Best. This turns uncertainty into accountable risk communication without inventing a conclusion.",
    tone: "best" as const,
  },
];

const dashboardMetrics = [
  {
    label: "Service degradation",
    value: "~4 min",
    note: "Synthetic API latency and error-rate increase before recovery",
  },
  {
    label: "Customer impact established",
    value: "No",
    note: "The fictional evidence packet does not demonstrate customer loss or disruption",
  },
  {
    label: "Confirmed malicious activity",
    value: "0",
    note: "Current evidence does not confirm misuse or compromise",
  },
  {
    label: "Remaining evidence gap",
    value: "6m 42s",
    note: "QUEUE-NB-2 telemetry unavailable during part of the review window",
  },
  {
    label: "Current misuse confidence",
    value: "Low",
    note: "Reduced after maintenance linkage and current ownership confirmation",
  },
  {
    label: "Executive decision needed",
    value: "Priority / owner",
    note: "Confirm monitoring remediation ownership and checkpoint rather than emergency response",
  },
  {
    label: "Real systems accessed",
    value: "0",
    note: "All data in the lesson is fictional and synthetic",
  },
];

const logs = [
  "[09:00:00] CHG-FT-41 state=APPROVED_MAINTENANCE scope=API-NB-41,SVC-NB-40",
  "[09:05:11] DET-NB-7 severity=HIGH signal=UNUSUAL_SERVICE_IDENTITY status=OPEN",
  "[09:06:02] SERVICE API-NB-41 errors=ELEVATED latency=ELEVATED",
  "[09:07:09] API-AUDIT transaction=CHG-FT-41 identity=SVC-NB-40 linkage=FOUND",
  "[09:10:02] SERVICE API-NB-41 state=BASELINE_RECOVERED",
  "[09:12:46] OPS-1842 maintenance_linkage=CONFIRMED",
  "[09:12:58] QUEUE-NB-2 telemetry=GAP_START",
  "[09:13:20] ID-OWNER identity=SVC-NB-40 scope=AUTHORIZED owner=CONFIRMED",
  "[09:19:40] QUEUE-NB-2 telemetry=RESUMED gap_duration=00:06:42",
  "[09:21:12] ANALYST misuse_hypothesis=LOW evidence=MAINTENANCE_PLUS_OWNER_CONFIRMATION",
  "[09:31:00] CASE status=EVIDENCE_REVIEW malicious_activity=NOT_CONFIRMED",
  "[10:00:00] OWNER monitoring_gap=ASSIGNED team=MONITORING_ENGINEERING checkpoint=FRIDAY",
];

const quizQuestions = [
  {
    question: "What is the main purpose of an executive security summary?",
    choices: [
      "Translate supported security evidence into material business meaning, current confidence, major decisions, ownership, and next checkpoints.",
      "Copy every log and timestamp into one document.",
      "Replace the technical investigation record.",
      "Make every security event sound urgent enough to get leadership attention.",
    ],
    answer: 0,
    explanation: "An executive summary is a decision-oriented translation of evidence, not a raw evidence dump or a replacement for the technical record.",
  },
  {
    question: "A synthetic alert is marked High severity, but the service recovered quickly and no customer impact is established. What is the best executive wording?",
    choices: [
      "Describe the technical priority accurately while separately stating the demonstrated operational and business impact.",
      "Call the business impact High because the alert was High.",
      "Hide the alert because no customer impact was shown.",
      "State that a breach definitely occurred.",
    ],
    answer: 0,
    explanation: "Technical severity and business impact are different concepts and should be communicated separately.",
  },
  {
    question: "Why can an executive summary omit many detailed records without becoming misleading?",
    choices: [
      "Because it can compress detail while preserving decision-relevant facts, uncertainty, evidence anchors, ownership, and meaning.",
      "Because executives never need evidence support.",
      "Because uncertainty should be removed from leadership communication.",
      "Because only the final severity score matters.",
    ],
    answer: 0,
    explanation: "Good compression removes lower-value detail, not the evidence, uncertainty, or decision logic that gives the summary integrity.",
  },
  {
    question: "What is the best treatment of the unresolved QUEUE-NB-2 telemetry gap?",
    choices: [
      "Present it as a monitoring-quality limitation and future risk with an owner and checkpoint, while avoiding claims about what happened inside the gap.",
      "Use it as proof of malicious activity.",
      "Omit it because service health recovered.",
      "Claim there is no uncertainty because the identity alert was likely maintenance-related.",
    ],
    answer: 0,
    explanation: "The gap matters because it limits reconstruction and creates monitoring risk, but it does not prove malicious activity.",
  },
  {
    question: "How should the same fictional case differ across technical, manager, and executive summaries?",
    choices: [
      "The supported facts should remain consistent while the level of detail and emphasis change according to audience needs.",
      "Each audience should receive a different set of facts.",
      "The executive version should remove all uncertainty.",
      "The manager version should contain more raw logs than the technical version.",
    ],
    answer: 0,
    explanation: "Audience changes presentation and emphasis, not the underlying truth of the evidence.",
  },
  {
    question: "Which sentence is the strongest example of bounded executive language?",
    choices: [
      "Current evidence supports approved maintenance as the strongest explanation for the identity alert; malicious activity is not confirmed, and the telemetry gap remains unresolved.",
      "Maintenance definitely caused every event.",
      "A catastrophic breach almost certainly occurred.",
      "Everything is resolved and there are no unknowns.",
    ],
    answer: 0,
    explanation: "Bounded language communicates the strongest current interpretation, what is not confirmed, and what remains uncertain.",
  },
  {
    question: "What should an executive summary say when no immediate executive action is required?",
    choices: [
      "State that no immediate action is required, identify the accountable owner, and define the next checkpoint or escalation trigger.",
      "Invent an urgent decision so the summary appears important.",
      "Omit ownership because there is no emergency.",
      "Leave the next checkpoint undefined.",
    ],
    answer: 0,
    explanation: "Leadership communication remains useful even without an emergency decision when ownership, monitoring, and future triggers are clear.",
  },
];

const checklistItems = [
  "The intended audience is explicit.",
  "The summary states what happened in plain language.",
  "Technical severity is not treated as automatic business impact.",
  "Operational impact and business impact are separated.",
  "Confirmed facts are separated from interpretation.",
  "Uncertainty that affects decisions remains visible.",
  "Correlation is not described as proven root cause.",
  "Confidence is stated using evidence-based language rather than invented percentages.",
  "Material evidence references are concise and traceable.",
  "Raw logs are kept out of the executive version unless a specific record is truly decision-relevant.",
  "No unsupported customer, financial, legal, or data-impact claims are added.",
  "The summary explains why the issue matters now.",
  "The current risk is distinct from already-observed impact.",
  "The recommendation is specific enough to act on.",
  "The accountable owner is named by role or team.",
  "The next checkpoint or escalation trigger is explicit.",
  "The technical, manager, and executive versions use the same underlying facts.",
  "Jargon is translated into readable language without losing meaning.",
  "The executive version is concise but not vague.",
  "The telemetry gap remains visible as a monitoring-quality limitation.",
  "No confirmed malicious activity is claimed without evidence.",
  "The Executive Security Summary is portfolio-ready.",
  "All evidence remains fictional, synthetic, inert, and school-appropriate.",
];

const takeaways = [
  "Executive security writing is evidence translation for decisions, not simplification by deleting inconvenient facts.",
  "Technical, manager, and executive audiences need different levels of detail, but they should receive the same supported facts.",
  "Materiality asks what changes for the organization, service, customer, obligation, risk, or decision—not merely what severity label appeared.",
  "Technical severity, operational impact, business impact, and future risk are related but distinct concepts.",
  "A concise summary should preserve decisive evidence anchors, uncertainty, confidence, ownership, recommendation, and next checkpoint.",
  "Bounded language is stronger than dramatic language because it tells leadership what is known, what is not known, and how sure the team is.",
  "A telemetry gap can be important executive information when it limits reconstruction or creates future monitoring risk, even if it does not prove malicious activity.",
  "Leadership communication should make clear whether an immediate decision is needed, who owns the next action, and what trigger causes reassessment.",
  "The Northbridge case supports approved maintenance as the strongest explanation for the identity alert while preserving the unresolved monitoring gap.",
  "The Executive Security Summary becomes the ninth artifact in the A18 Advanced Defensive Casebook.",
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
        Module A18
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

export default function ExecutiveSummaryWritingPage() {
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
              A18.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Executive Summary Writing
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security professionals often understand far more evidence than a
            leader needs to read. The challenge is not to hide that evidence or
            oversimplify it. The challenge is to translate it into the material
            facts, uncertainty, impact, risk, ownership, recommendation, and
            decision that the audience actually needs.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches that communication skill first, then applies it
            to the same completely fictional Northbridge case from A18.8. No
            real systems, accounts, devices, cloud environments, credentials,
            or private data are accessed.
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
          lessonTitle="Executive Summary Writing"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.9 Entry Readiness"
          items={[
            "I can separate facts, interpretations, and unresolved questions.",
            "I can explain a bounded conclusion without pretending uncertainty is gone.",
            "I understand that technical severity and business impact are not the same thing.",
            "I will use only the synthetic Northbridge evidence provided in this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Leadership Does Not Need Less Truth — It Needs Better Translation"
        >
          <p className="leading-8">
            A weak executive summary is sometimes described as a shorter
            technical report. That misses the real skill. Executive writing is
            a change in purpose. A technical reviewer needs enough detail to
            evaluate evidence quality. A manager needs enough context to own the
            work. An executive needs to understand material meaning, risk,
            confidence, priority, and the decision that requires leadership
            attention.
          </p>

          <p className="mt-4 leading-8">
            The facts must remain consistent across all three audiences. What
            changes is the amount of detail and the question the writing is
            designed to answer. Good communication does not make the evidence
            more dramatic, more certain, or more convenient than it really is.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The best executive summary lets a leader make the right decision
              without forcing that leader to reconstruct the investigation.
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
          eyebrow="Audience Awareness"
          title="The Same Evidence Serves Different Decisions"
        >
          <p className="leading-8">
            Audience awareness is not about changing the truth. It is about
            understanding what kind of decision or review the reader is
            responsible for. When the audience changes, the summary should
            change its level of detail, vocabulary, and emphasis while keeping
            the same evidence-backed core.
          </p>

          <div className="mt-6 grid gap-5">
            {audienceProfiles.map((profile) => (
              <article
                key={profile.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-300">
                      Audience
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {profile.audience}
                    </h3>
                    <p className="mt-3 font-bold text-cyan-200">
                      Primary need: {profile.primaryNeed}
                    </p>
                  </div>

                  <div className="grid gap-3 text-sm leading-7">
                    <p>
                      <span className="font-black text-emerald-300">Include: </span>
                      {profile.include}
                    </p>
                    <p>
                      <span className="font-black text-yellow-300">Avoid: </span>
                      {profile.avoid}
                    </p>
                    <p>
                      <span className="font-black text-blue-300">Success looks like: </span>
                      {profile.success}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-6 text-purple-50">
            <p className="font-black">Professional rule</p>
            <p className="mt-2 leading-7">
              If the executive version contains a different factual story than
              the technical version, the problem is not audience tailoring. The
              problem is inconsistency. Detail can change. Supported facts
              cannot.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Materiality"
          title="What Deserves Leadership Attention?"
        >
          <p className="leading-8">
            Materiality is the bridge between technical evidence and leadership
            meaning. A detail is material when it can change an important
            business, service, risk, ownership, priority, resource, or timing
            decision. This is why an executive summary should not be organized
            around whichever log line looks most technical or whichever alert
            has the highest label.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {materialityDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <h3 className="text-xl font-black">{item.dimension}</h3>
                <p className="mt-3 leading-7">{item.teaching}</p>
                <div className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Ask
                  </p>
                  <p className="mt-2 text-sm leading-7">{item.question}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 leading-8">
            Materiality does not mean that every uncertain issue should be sent
            to executives. It means uncertainty should be elevated when it can
            materially change risk, decision quality, or accountability. A
            missing six-minute telemetry window, for example, may matter less
            than a confirmed outage today but still matter enough to justify
            ownership and remediation because it weakens future detection and
            reconstruction.
          </p>
        </Section>

        <Section
          eyebrow="Impact Reasoning"
          title="Severity, Impact, and Risk Are Not Interchangeable"
        >
          <p className="leading-8">
            One of the most common communication mistakes is turning a technical
            severity label into a business-impact statement. Security work uses
            many labels to prioritize investigation. Leadership communication
            must translate what those labels actually mean in context.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {impactVsSeverity.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.concept}</h3>
                <p className="mt-3 leading-7">
                  <span className="font-black text-emerald-300">Means: </span>
                  {item.means}
                </p>
                <p className="mt-3 leading-7">
                  <span className="font-black text-red-300">Does not mean: </span>
                  {item.doesNotMean}
                </p>
                <p className="mt-3 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                  {item.example}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Why this changes executive writing</p>
            <p className="mt-2 leading-7">
              A High alert can coexist with low demonstrated business impact. A
              short outage can create real operational impact without proving a
              security root cause. A monitoring gap can create future risk even
              when current impact is limited. The summary should say each of
              those things separately.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Confidence"
          title="Say How Sure You Are Without Inventing Precision"
        >
          <p className="leading-8">
            Leadership often needs confidence information because decisions are
            made before every unknown disappears. Confidence should reflect the
            quality, independence, freshness, and consistency of evidence. It
            should not be expressed as a fake percentage unless a real
            measurement model exists.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-5 py-4 font-black text-white">Level</th>
                  <th className="px-5 py-4 font-black text-white">Use when</th>
                  <th className="px-5 py-4 font-black text-white">Useful wording</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                {confidenceLanguage.map((item) => (
                  <tr key={item.level}>
                    <td className="px-5 py-4 font-black text-cyan-200">{item.level}</td>
                    <td className="px-5 py-4 leading-7 text-slate-300">{item.useWhen}</td>
                    <td className="px-5 py-4 leading-7 text-slate-300">{item.wording}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 leading-8">
            Confidence should also explain its limiting factor. “Moderate
            confidence because the maintenance linkage is supported by current
            ownership and application audit evidence, while a queue telemetry
            gap still limits complete reconstruction” is more useful than simply
            writing “moderate confidence.”
          </p>
        </Section>

        <Section
          eyebrow="Evidence Compression"
          title="Shorter Does Not Mean Less Defensible"
        >
          <p className="leading-8">
            The executive version should usually be much shorter than the
            technical record. The skill is deciding what can be safely
            compressed and what must remain visible because it changes the
            decision. Think of compression as reducing repetition and technical
            granularity while preserving the evidence-backed meaning.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {evidenceCompressionRules.map((item) => (
              <div
                key={item.principle}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <h3 className="text-lg font-black">{item.principle}</h3>
                <p className="mt-3 leading-7">{item.explanation}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Executive Summary Anatomy"
          title="What a Decision-Ready Summary Needs to Communicate"
        >
          <p className="leading-8">
            There is no requirement that every executive summary use the same
            number of headings. The content should follow the case naturally.
            However, strong leadership communication usually answers a familiar
            set of questions: what happened, why it matters, what is confirmed,
            what remains uncertain, what the current assessment is, what
            decision or recommendation follows, and who owns the next step.
          </p>

          <div className="mt-6 grid gap-5">
            {executiveSummaryElements.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.label}</h3>
                <p className="mt-2 leading-7 text-slate-400">{item.purpose}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                      Strong example
                    </p>
                    <p className="mt-2 text-sm leading-7">{item.good}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-7">{item.weak}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Language"
          title="Sometimes the Right Executive Message Is That No Immediate Action Is Required"
        >
          <p className="leading-8">
            Executive communication is not valuable only when leadership must
            make an emergency decision. A mature summary can state that no
            immediate action is required while still preserving accountability,
            risk, review dates, and escalation triggers. This prevents the team
            from inventing urgency merely to make the report feel important.
          </p>

          <div className="mt-6 grid gap-4">
            {decisionLanguage.map((item) => (
              <div
                key={item.situation}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black">{item.situation}</h3>
                <p className="mt-2 leading-7">{item.communication}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Anti-Patterns"
          title="How Executive Security Writing Becomes Misleading"
        >
          <p className="leading-8">
            Most executive-writing failures are not grammar problems. They are
            reasoning problems: exaggeration, hidden uncertainty, unsupported
            impact, vague ownership, or excessive technical detail that hides
            the actual decision.
          </p>

          <div className="mt-6 grid gap-5">
            {antiPatterns.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.why}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 text-sm leading-7">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                      Better
                    </p>
                    <p className="mt-2 text-sm leading-7">{item.better}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Northbridge Case"
          title="Now Apply the Communication Concepts to a Fictional Case"
        >
          <p className="leading-8">
            The teaching above defines the communication discipline. The
            Northbridge case now gives you a realistic but completely synthetic
            evidence set to practice with. The case is intentionally not a
            dramatic breach story. It contains a meaningful alert, short service
            degradation, legitimate maintenance context, a monitoring gap, and
            changing analyst confidence.
          </p>

          <div className="mt-6 grid gap-4">
            {northbridgeFacts.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="text-sm font-black text-purple-200">{item.category}</span>
                </div>
                <p className="mt-3 leading-7 text-slate-200">{item.fact}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  <span className="font-black text-emerald-300">Why it matters: </span>
                  {item.significance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Leadership View — Synthetic Case"
          subtitle="Decision-relevant case status, not a live dashboard"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="DET-NB-7 — Unusual Service Identity Activity"
          severity="High"
          time="09:05:11"
          source="Synthetic Detection Feed"
          details="Service identity SVC-NB-40 generated unusual activity during the approved CHG-FT-41 maintenance window. The alert is important investigation evidence but does not itself establish compromise or material business impact."
          recommendation="Review the alert in context with approved change, application audit, identity ownership, service-health, and timeline evidence before drawing a conclusion."
        />

        <FakeLogPanel
          title="Synthetic Case Record — Executive Summary Source Material"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Severity Versus Material Impact"
          question="What is the strongest leadership interpretation of the High-priority alert?"
          evidence={[
            "DET-NB-7 was marked High priority.",
            "API service degradation lasted only a few minutes and recovered.",
            "No customer, financial, or data impact is established in the synthetic case.",
            "Maintenance and current ownership evidence materially weaken the misuse hypothesis.",
            "A six-minute telemetry gap remains unresolved.",
          ]}
          options={[
            "Explain that the alert was technically important, current evidence does not confirm malicious activity, demonstrated operational impact was brief, and the monitoring gap is the main remaining risk.",
            "State that High technical severity proves High business impact.",
            "Remove the alert because it did not become a confirmed incident.",
            "Describe the telemetry gap as proof that malicious activity occurred.",
          ]}
          bestAnswer={0}
          explanation="The best executive interpretation separates technical priority, demonstrated impact, current confidence, and remaining risk instead of collapsing them into one severity label."
        />

        <Section
          eyebrow="Same Facts, Different Audience"
          title="Three Versions of One Northbridge Case"
        >
          <p className="leading-8">
            The facts below stay consistent. What changes is the level of detail
            and the decision the reader needs to support. Read the three
            versions and notice that the executive version is shorter without
            hiding the telemetry gap, confidence, or recommendation.
          </p>

          <div className="mt-6 grid gap-5">
            {threeAudienceVersions.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-white">{item.audience}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">
                    {item.length}
                  </span>
                </div>

                <p className="mt-4 leading-8 text-slate-200">{item.text}</p>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-50">
                  <p className="text-sm leading-7">
                    <span className="font-black">Why it fits: </span>
                    {item.whyItFits}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 leading-8">
            Notice what the executive version does not do. It does not hide the
            alert. It does not pretend the monitoring gap disappeared. It does
            not claim a root cause that the timeline cannot prove. It simply
            removes technical detail that does not change the leadership
            decision.
          </p>
        </Section>

        <Section
          eyebrow="Evidence References"
          title="Use Enough Evidence to Support the Decision — Not Enough to Rebuild the Log"
        >
          <p className="leading-8">
            Executive summaries can include concise evidence references when a
            claim needs traceability. The purpose is not to turn the summary
            into a technical appendix. A small number of references can anchor
            the most important conclusions and make follow-up easier.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {conciseEvidenceReferences.map((item) => (
              <article
                key={item.claim}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black">{item.claim}</h3>
                <p className="mt-3 text-sm leading-7">
                  <span className="font-black text-cyan-200">Reference: </span>
                  {item.reference}
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-100">{item.why}</p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — High Alert, Limited Demonstrated Impact"
          scenario="A senior leader sees the word High on the synthetic alert and asks whether the organization experienced a major cyber incident."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Recovered Service, Unresolved Monitoring Gap"
          scenario="The service is stable again, but the Northbridge timeline still contains a six-minute telemetry gap that limits complete reconstruction."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Write the Same Case for Three Audiences"
        >
          <p className="leading-8">
            Use only the synthetic evidence on this page and the fictional
            timeline concepts from A18.8. You are practicing evidence-based
            communication, not investigating or accessing a real system.
          </p>

          <div className="mt-6 grid gap-4">
            {labTasks.map((item, index) => (
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
              Do not collect evidence from real devices, access real accounts,
              inspect real cloud environments, recover private data, bypass
              credentials, or perform real incident-response actions. The case
              is entirely synthetic and designed for defensive reasoning and
              communication practice.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: What Belongs in the Executive Version?"
          question="Which information should remain in the executive summary even though it is technical in origin?"
          evidence={[
            "The identity source had an approximate +78 second clock offset.",
            "The queue telemetry gap lasted 6 minutes and 42 seconds.",
            "The current misuse hypothesis is Low confidence after maintenance and ownership evidence was reviewed.",
            "No customer impact is established.",
            "Monitoring Engineering owns remediation with a defined checkpoint.",
          ]}
          options={[
            "Keep the telemetry gap, current confidence, no-demonstrated-customer-impact statement, owner, and checkpoint; move the clock-offset detail to the technical record unless it materially changes the leadership decision.",
            "Keep every technical timing detail because executives need the full timeline.",
            "Remove all uncertainty and mention only that the service recovered.",
            "Keep only the High alert severity because it is easiest to understand.",
          ]}
          bestAnswer={0}
          explanation="Decision-relevant uncertainty and ownership belong in the executive summary. Technical details such as a specific clock offset can remain in the technical record unless they materially affect the leadership decision."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Produce a Decision-Ready One-Page Executive Security Summary"
        >
          <p className="leading-8">
            Write a one-page Northbridge executive summary that a senior leader
            could use without opening the raw evidence packet. It should be
            concise, but every important sentence should be traceable to the
            synthetic case.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "One-sentence statement of what happened",
              "Demonstrated operational impact",
              "Demonstrated business/customer impact",
              "What is confirmed",
              "What is not confirmed",
              "Strongest current interpretation",
              "Confidence level and limiting factor",
              "Most important unresolved uncertainty",
              "Material future risk",
              "Recommendation",
              "Accountable owner",
              "Whether executive action is required now",
              "Next checkpoint",
              "Escalation trigger",
              "No more than four concise evidence references",
              "Final plain-language review for jargon and unsupported claims",
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

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="font-black">Model leadership-ready version</p>
            <p className="mt-2 leading-7">
              A short internal API service degradation occurred during approved
              maintenance while an unusual service-identity alert was reviewed.
              The service recovered within minutes, and the synthetic evidence
              does not establish customer impact or confirmed malicious
              activity. Current evidence supports authorized maintenance as the
              strongest explanation for the identity alert, with confidence
              limited by a six-minute queue telemetry gap. The remaining
              material concern is monitoring quality rather than an active
              compromise. Recommendation: retain the case as unconfirmed misuse,
              assign the telemetry gap for remediation to Monitoring
              Engineering, and review progress at the scheduled leadership
              checkpoint or sooner if repeat gaps or new identity evidence
              appear.
            </p>
          </div>
        </Section>

        <DefenderChecklist
          title="A18.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A18.9 Mini Quiz: Executive Summary Writing"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Executive Security Summary"
          prompt="Create the ninth artifact for your A18 Advanced Defensive Casebook: an Executive Security Summary based only on the synthetic Northbridge evidence. Communicate what happened, why it matters, what is confirmed, what remains uncertain, demonstrated impact, current risk, confidence, recommendation, accountable owner, decision need, next checkpoint, and a small number of concise evidence references."
          tips={[
            "Use the same supported facts as the technical and manager versions.",
            "Do not convert technical severity into unsupported business impact.",
            "Keep uncertainty visible when it changes confidence or risk.",
            "Use plain language without weakening the technical meaning.",
            "Name the owner and next checkpoint explicitly.",
            "Keep the executive version concise and move lower-value technical detail to the supporting record.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A18 Capstone?"
        >
          <p className="leading-8">
            A18.10 combines every A18 artifact into one Advanced Defensive
            Casebook and Executive Review. Before continuing, make sure you can
            move between deep evidence and concise leadership meaning without
            changing the underlying facts.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why technical, manager, and executive summaries use different levels of detail.",
              "I can separate technical severity, operational impact, business impact, and future risk.",
              "I can preserve uncertainty without making the summary vague.",
              "I can state a recommendation, owner, decision need, and next checkpoint clearly.",
              "I can compress evidence without changing the supported facts.",
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
          title="How the Executive Security Summary Fits the A18 Casebook"
        >
          <p className="leading-8">
            The first eight A18 artifacts build increasingly complete defensive
            evidence and judgment. A18.9 adds the leadership-communication layer
            that turns those findings into a decision-ready summary. Keep the
            detailed evidence in its original artifacts and use the Executive
            Security Summary as the leadership-facing entry point.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "A18.1 — Multi-Source Investigation Brief",
              "A18.2 — Network Defense Architecture Review",
              "A18.3 — Cloud Security Case Review",
              "A18.4 — Identity Access Review Decision Pack",
              "A18.5 — Incident Response Tabletop Record",
              "A18.6 — Detection Tuning Recommendation",
              "A18.7 — Defensive Risk Register",
              "A18.8 — Forensics Timeline and Evidence Narrative",
              "A18.9 — Executive Security Summary",
              "A18.10 — Advanced Defensive Casebook and Executive Review",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                  Artifact {index + 1}
                </p>
                <p className="mt-2 font-black">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            In A18.10, the executive summary should not replace the detailed
            sections. It should guide the reader to the most material findings,
            decisions, and priorities while the full casebook preserves the
            evidence needed for deeper review.
          </p>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <Section
          eyebrow="Safety Boundary"
          title="Communication Practice Only — Synthetic Evidence"
        >
          <p className="leading-8">
            Every alert, log, ticket, timestamp, identity, service, dashboard,
            owner, impact statement, and decision in this lesson is fictional.
            The lesson teaches defensive evidence interpretation and leadership
            communication only.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="font-black">Allowed in this lesson</p>
              <p className="mt-2 text-sm leading-7">
                Synthetic evidence review, fictional impact assessment,
                materiality reasoning, confidence language, risk communication,
                ownership, recommendations, checkpoints, and portfolio writing.
              </p>
            </div>

            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 p-5 text-red-50">
              <p className="font-black">Not part of this lesson</p>
              <p className="mt-2 text-sm leading-7">
                Real system access, real account access, password bypass,
                credential use, private-data recovery, scanning, probing,
                exploitation, evasion, endpoint changes, cloud changes, network
                changes, or real incident-response execution.
              </p>
            </div>
          </div>
        </Section>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <Navigation />
        </div>
      </div>

      <Footer />
    </main>
  );
}