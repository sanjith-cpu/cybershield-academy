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
const previousLesson = `${modulePath}/executive-summary-writing`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate the nine earlier A18 artifacts into one coherent defensive casebook while keeping evidence status, source limits, and uncertainty visible.",
  "Distinguish facts, hypotheses, assumptions, findings, issues, risks, incidents, exceptions, recommendations, decisions, and unresolved questions when they appear in the same case.",
  "Connect architecture, cloud, identity, incident, detection, risk, and timeline evidence only when the evidence actually supports the relationship.",
  "Prioritize defensive improvements using evidence quality, business relevance, dependencies, ownership, control effectiveness, and validation instead of severity labels alone.",
  "Produce an Advanced Defensive Casebook and Executive Review that is traceable, concise at the leadership level, detailed in the supporting sections, and completely fictional.",
];

const artifactMap = [
  { number: "A18.1", artifact: "Multi-Source Investigation Brief", contribution: "Evidence correlation, hypotheses, contradictions, source freshness, and bounded conclusions.", capstoneUse: "Provides the initial investigation record and evidence inventory." },
  { number: "A18.2", artifact: "Network Defense Architecture Review", contribution: "Trust boundaries, dependencies, segmentation, resilience, ownership, and validation.", capstoneUse: "Explains which architecture dependencies affect defensive confidence." },
  { number: "A18.3", artifact: "Cloud Security Case Review", contribution: "Cloud identity, logging, storage, backup, recovery, governance freshness, and ownership.", capstoneUse: "Adds cloud-control and recovery evidence without confusing configuration with governance." },
  { number: "A18.4", artifact: "Identity Access Review Decision Pack", contribution: "Purpose, least privilege, approval, review freshness, ownership, and service-identity governance.", capstoneUse: "Shows whether unusual identity activity is currently justified." },
  { number: "A18.5", artifact: "Incident Response Tabletop Record", contribution: "Decision chronology, changing scope, authority, reassessment triggers, communication, and recovery criteria.", capstoneUse: "Preserves what was known when each decision was made." },
  { number: "A18.6", artifact: "Detection Tuning Recommendation", contribution: "Alert quality, duplicates, context, routing, analyst usefulness, reopen rate, and rollback criteria.", capstoneUse: "Separates useful detection coverage from avoidable workflow noise." },
  { number: "A18.7", artifact: "Defensive Risk Register", contribution: "Risk statements, inherent and residual risk, controls, treatment, ownership, and review triggers.", capstoneUse: "Turns evidence-backed weaknesses into governed priorities." },
  { number: "A18.8", artifact: "Forensics Timeline and Evidence Narrative", contribution: "Normalized time, provenance, contradictions, gaps, sequence, clock uncertainty, and confidence.", capstoneUse: "Provides the defensible chronology without treating sequence as proof of cause." },
  { number: "A18.9", artifact: "Executive Security Summary", contribution: "Materiality, impact, confidence, recommendations, decisions, owners, and next checkpoints.", capstoneUse: "Provides the leadership-facing summary while preserving technical traceability." },
];

const evidenceClasses = [
  { label: "Fact", meaning: "Directly supported by a synthetic source.", test: "Can the statement be traced to a specific record without adding interpretation?", example: "CHG-FT-41 was approved before the maintenance window.", commonError: "Turning an analyst explanation into a fact." },
  { label: "Hypothesis", meaning: "A testable explanation for observations.", test: "What evidence would strengthen or weaken it?", example: "The unusual identity activity may be maintenance related.", commonError: "Treating the first plausible explanation as final." },
  { label: "Assumption", meaning: "A temporary condition accepted for reasoning but not fully proven.", test: "What changes if this assumption is wrong?", example: "The current ownership record is assumed complete until a newer dependency map arrives.", commonError: "Leaving assumptions unlabeled." },
  { label: "Finding", meaning: "An evidence-backed observation that deserves review.", test: "What condition is demonstrated, and why does it matter?", example: "QUEUE-NB-2 has a documented telemetry gap.", commonError: "Writing a vague concern without evidence." },
  { label: "Issue", meaning: "A problem already occurring.", test: "Is the unwanted condition happening now?", example: "Late owner enrichment causes ticket reassignment today.", commonError: "Calling every possible future concern an issue." },
  { label: "Risk", meaning: "A possible unwanted consequence connected to a condition and plausible event.", test: "What could happen, why, and with what consequence?", example: "A shared monitoring failure could reduce visibility during an important event.", commonError: "Calling a condition by itself a complete risk statement." },
  { label: "Incident", meaning: "A security-relevant event requiring coordinated response under the fictional process.", test: "Has the event met the defined response threshold?", example: "The tabletop was activated for coordinated evidence review.", commonError: "Equating one High alert with confirmed compromise." },
  { label: "Exception", meaning: "An approved temporary deviation with boundaries and review requirements.", test: "Who approved it, for how long, and under what conditions?", example: "A temporary monitoring dependency exception remains approved pending validation.", commonError: "Treating an undocumented gap as an approved exception." },
  { label: "Recommendation", meaning: "A proposed evidence-based improvement.", test: "Does it address the observed problem and include validation?", example: "Move owner enrichment earlier and measure reassignment reduction.", commonError: "Recommending a broad tool change with no evidence link." },
  { label: "Decision", meaning: "An authorized choice made using the evidence available at that time.", test: "Who decided, why, and what would trigger reassessment?", example: "The lead kept the case in evidence-review status rather than declaring misuse.", commonError: "Rewriting an earlier decision using later knowledge." },
  { label: "Unresolved question", meaning: "A material unknown that could change confidence, scope, risk, or priority.", test: "Would the answer change the casebook?", example: "What caused the QUEUE-NB-2 telemetry gap?", commonError: "Hiding uncertainty because one hypothesis looks strongest." },
];

const northbridgeCase = [
  { id: "NB-CAP-01", domain: "Change", evidence: "CHG-FT-41 approved API-NB-41 maintenance using SVC-NB-40 from 09:00 to 09:20.", status: "Fact", significance: "Provides legitimate context but does not automatically explain every event in the window." },
  { id: "NB-CAP-02", domain: "Detection", evidence: "DET-NB-7 opened at 09:05:11 as a High-priority unusual service-identity alert.", status: "Fact", significance: "The alert is important evidence, but its severity label is not a final conclusion." },
  { id: "NB-CAP-03", domain: "Service health", evidence: "API-NB-41 degraded briefly and returned to baseline by 09:10:02.", status: "Fact", significance: "Confirms operational impact during the review window without proving security causation." },
  { id: "NB-CAP-04", domain: "Application audit", evidence: "Synthetic audit records link SVC-NB-40 activity to CHG-FT-41.", status: "Fact", significance: "Strengthens the approved-maintenance explanation." },
  { id: "NB-CAP-05", domain: "Identity", evidence: "Current owner, purpose, and permission scope for SVC-NB-40 are documented and approved.", status: "Fact", significance: "Supports current justification while leaving review-timeliness governance separate." },
  { id: "NB-CAP-06", domain: "Timeline", evidence: "QUEUE-NB-2 telemetry is missing for six minutes and forty-two seconds.", status: "Finding", significance: "Limits reconstruction confidence and creates a monitoring-quality concern." },
  { id: "NB-CAP-07", domain: "Incident review", evidence: "The original misuse hypothesis was reduced to Low confidence after later evidence arrived.", status: "Decision", significance: "Shows how confidence can change without rewriting the earlier chronology." },
  { id: "NB-CAP-08", domain: "Architecture", evidence: "Several important telemetry sources depend on shared monitoring components.", status: "Finding", significance: "Creates a cross-domain resilience dependency affecting visibility and evidence collection." },
  { id: "NB-CAP-09", domain: "Detection quality", evidence: "DET-NB-7 baseline includes duplicates, maintenance overlap, stale routing, and delayed context.", status: "Issue", significance: "Supports workflow and enrichment improvements rather than broad suppression." },
  { id: "NB-CAP-10", domain: "Cloud recovery", evidence: "Backups complete successfully, but recovery-validation evidence is stale.", status: "Finding", significance: "Backup success and demonstrated recovery readiness are different claims." },
  { id: "NB-CAP-11", domain: "Risk", evidence: "RR-NB-18 records monitoring visibility as a priority residual risk with an accountable owner.", status: "Risk", significance: "Translates the evidence limitation into a governed future consequence." },
  { id: "NB-CAP-12", domain: "Leadership", evidence: "Current evidence does not confirm malicious service-identity use.", status: "Finding", significance: "Supports a bounded executive conclusion while keeping open remediation work visible." },
  { id: "NB-CAP-13", domain: "Recommendation", evidence: "Improve monitoring resilience, detection context, routing, and recovery validation with measurable checkpoints.", status: "Recommendation", significance: "Addresses the strongest remaining defensive-quality concerns." },
  { id: "NB-CAP-14", domain: "Open question", evidence: "The exact cause of the telemetry gap is not established by the current packet.", status: "Unresolved question", significance: "Preserves a material unknown instead of silently filling the evidence gap." },
];

const crossCaseFindings = [
  { title: "Monitoring resilience is the strongest cross-domain concern", evidence: "Architecture, incident, risk, and timeline artifacts all depend on trustworthy monitoring evidence.", interpretation: "A shared monitoring weakness can affect detection, response confidence, reconstruction, and risk decisions at the same time.", priority: "High", owner: "Monitoring Engineering + Security Architecture", validation: "Use a synthetic degraded-mode exercise to confirm improved evidence continuity." },
  { title: "Current identity access is justified while review timeliness needs improvement", evidence: "SVC-NB-40 has current purpose, ownership, scope, and authorization, but one governance review was late.", interpretation: "Authorization and review freshness answer different questions and should not be collapsed into one access judgment.", priority: "Medium", owner: "IAM Governance", validation: "Measure on-time service-identity review completion and owner follow-up." },
  { title: "Detection quality is reduced by context and workflow friction", evidence: "Duplicates, maintenance overlap, stale routing, and delayed enrichment create analyst rework while high-confidence escalations remain useful.", interpretation: "The detection still has defensive value; the better response is deduplication, earlier context, and measured workflow improvement.", priority: "High", owner: "Detection Engineering + SOC Workflow Owner", validation: "Compare duplicate, reassignment, reopen, context-completeness, and escalation-quality metrics after changes." },
  { title: "Recovery assurance needs current validation evidence", evidence: "Backups complete, but recovery-validation evidence is stale.", interpretation: "A working backup process does not by itself prove recovery readiness.", priority: "High", owner: "Platform Operations", validation: "Complete a synthetic recovery-validation exercise and document the result." },
];

const priorityDecisions = [
  { decision: "Keep malicious service-identity misuse unconfirmed", rationale: "Current evidence favors approved maintenance and does not establish unauthorized use.", evidence: "Change approval, application-audit linkage, current ownership, scoped permissions, and later reassessment.", authority: "Incident Review Lead", trigger: "Reassess if new identity evidence or a stronger timeline contradiction appears." },
  { decision: "Treat the QUEUE-NB-2 gap as a monitoring-quality priority", rationale: "The gap limits reconstruction confidence but is not evidence of malicious activity by itself.", evidence: "Timeline gap, architecture dependency review, and residual monitoring risk.", authority: "Monitoring Engineering Owner", trigger: "Escalate if gaps recur or affect additional critical sources." },
  { decision: "Improve DET-NB-7 through context and workflow quality", rationale: "The rule retains defensive value while duplicates, maintenance context, routing, and enrichment create avoidable workload.", evidence: "A18.6 baseline and reopen data.", authority: "Detection Engineering Lead", trigger: "Pause or roll back if visibility or escalation quality worsens." },
  { decision: "Refresh recovery and governance validation", rationale: "Control existence and successful backup execution do not replace current evidence of effectiveness.", evidence: "Cloud review, identity review, and recovery criteria.", authority: "Platform Operations + Governance Owners", trigger: "Escalate if validation fails or ownership remains unclear." },
];

const roadmap = [
  { phase: "Phase 1 — Establish owners and baselines", horizon: "Near term", goals: ["Confirm owners for the telemetry gap, detection workflow, identity review cadence, and recovery validation.", "Record current detection, routing, evidence-quality, and review-age baselines.", "Define validation and reassessment triggers before changing controls."], success: "Every priority has an owner, starting measure, and checkpoint." },
  { phase: "Phase 2 — Improve defensive quality", horizon: "Following operating cycle", goals: ["Reduce avoidable monitoring dependencies at the design level.", "Improve detection deduplication, maintenance context, owner enrichment, and routing without auto-closing alerts.", "Refresh recovery, cloud, identity, and architecture governance evidence."], success: "Defensive improvements are implemented without reducing useful visibility." },
  { phase: "Phase 3 — Validate outcomes", horizon: "After changes mature", goals: ["Compare post-change metrics against the original baseline.", "Repeat a synthetic timeline and recovery exercise to test evidence continuity and readiness.", "Update residual risks and leadership priorities using new control-effectiveness evidence."], success: "The organization can demonstrate improvement with evidence rather than status labels." },
];

const dashboardMetrics = [
  { label: "Confirmed malicious activity", value: "0", note: "Current synthetic evidence does not confirm service-identity misuse" },
  { label: "Material evidence gap", value: "6m 42s", note: "QUEUE-NB-2 telemetry remains incomplete during part of the review window" },
  { label: "Current identity justification", value: "Supported", note: "Purpose, owner, and permission scope are current in the fictional packet" },
  { label: "Detection baseline", value: "420 alerts", note: "Fourteen-day synthetic baseline includes duplicate and maintenance-related workload" },
  { label: "Cross-case priorities", value: "3", note: "Monitoring resilience, detection quality, and recovery validation" },
  { label: "Real systems accessed", value: "0", note: "All services, identities, logs, tickets, and actions are fictional" },
];

const logs = [
  "[09:00:00] CHANGE CHG-FT-41 state=APPROVED scope=API-NB-41,SVC-NB-40",
  "[09:05:11] DETECTION DET-NB-7 severity=HIGH identity=SVC-NB-40 status=OPEN",
  "[09:06:02] SERVICE API-NB-41 state=DEGRADED",
  "[09:07:09] APP-AUDIT identity=SVC-NB-40 change_link=CHG-FT-41 result=FOUND",
  "[09:10:02] SERVICE API-NB-41 state=BASELINE_RECOVERED",
  "[09:12:58] TELEMETRY QUEUE-NB-2 state=GAP_START",
  "[09:13:20] IAM SVC-NB-40 owner=CONFIRMED scope=AUTHORIZED",
  "[09:19:40] TELEMETRY QUEUE-NB-2 state=RESUMED gap_duration=00:06:42",
  "[09:21:12] ANALYST hypothesis=SERVICE_IDENTITY_MISUSE confidence=LOW",
  "[09:24:00] ARCH monitoring_dependency=SHARED review_status=OPEN",
  "[09:27:15] CLOUD backup_status=SUCCESS recovery_validation=STALE",
  "[09:31:00] CASE malicious_activity=NOT_CONFIRMED status=EVIDENCE_REVIEW",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response: "Combine every weakness into one Critical incident because several A18 artifacts contain High-priority findings.",
    outcome: "Risky. Different findings, risks, issues, and evidence limitations have different meanings, owners, and levels of confidence. Aggregating them into one dramatic incident destroys analytical precision.",
    tone: "risk" as const,
  },
  {
    label: "Choice B",
    response: "Build a cross-case finding that identifies monitoring resilience as a shared dependency across detection, response, timeline reconstruction, and risk while keeping the identity-misuse conclusion separate.",
    outcome: "Best. This integrates evidence where the domains truly converge without pretending unrelated facts prove one cause.",
    tone: "best" as const,
  },
  {
    label: "Choice C",
    response: "Keep every artifact isolated and avoid any cross-case conclusion because integration could introduce interpretation.",
    outcome: "Caution. Professional casework requires synthesis, but synthesis must remain traceable, bounded, and explicit about interpretation.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response: "Prioritize the loudest technical alert first and delay monitoring-resilience work because no compromise was confirmed.",
    outcome: "Caution. Alert severity is important, but cross-case impact can make a resilience weakness more material to future defensive capability.",
    tone: "caution" as const,
  },
  {
    label: "Choice B",
    response: "Prioritize monitoring resilience using cross-case evidence, assign owners and validation, retain the unconfirmed identity conclusion, and define triggers that would change the priority order.",
    outcome: "Best. This uses evidence, business relevance, dependencies, and future defensive value rather than relying on one label.",
    tone: "best" as const,
  },
  {
    label: "Choice C",
    response: "Mark every finding High so leadership can decide later which ones actually matter.",
    outcome: "Risky. Inflating every item removes the prioritization signal and shifts analytical responsibility away from the casebook author.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question: "What is the strongest purpose of the A18.10 capstone?",
    choices: [
      "Integrate the prior A18 artifacts into one traceable defensive casebook while preserving evidence status, uncertainty, ownership, priorities, and audience-appropriate communication.",
      "Replace all previous artifacts with one shorter document.",
      "Prove that every High-priority alert represents a confirmed incident.",
      "Create a real-world incident-response playbook for live systems.",
    ],
    answer: 0,
    explanation: "The capstone demonstrates integration without erasing the distinctions that made each earlier artifact defensible.",
  },
  {
    question: "Why should the current SVC-NB-40 access state and the late review record be documented separately?",
    choices: [
      "Because current justification and governance-review freshness answer different questions; valid access can coexist with a review-timeliness finding.",
      "Because a late review automatically proves the access is malicious.",
      "Because frequent use proves the access is justified forever.",
      "Because governance evidence never matters when technical permissions look correct.",
    ],
    answer: 0,
    explanation: "A mature review separates the technical or business state from the freshness and quality of the governance evidence used to support it.",
  },
  {
    question: "What is the best cross-case interpretation of the QUEUE-NB-2 telemetry gap?",
    choices: [
      "It is an evidence and monitoring-quality limitation that affects reconstruction confidence and may connect to broader monitoring-resilience risk, but it does not prove malicious activity occurred during the gap.",
      "It proves an attacker hid activity during those minutes.",
      "It can be ignored because API-NB-41 recovered.",
      "It proves the detection rule should be disabled.",
    ],
    answer: 0,
    explanation: "A gap can be materially important without becoming proof of events that were not observed.",
  },
  {
    question: "Why is lower alert volume not a sufficient success measure for the capstone roadmap?",
    choices: [
      "Because defensive quality should also consider duplicate rate, context completeness, analyst usefulness, escalation quality, reopen rate, reassignment, and possible visibility loss.",
      "Because alert volume should always increase after tuning.",
      "Because analysts should ignore workload metrics entirely.",
      "Because any reduction in alerts proves evasion occurred.",
    ],
    answer: 0,
    explanation: "The module teaches quality-oriented tuning, not volume reduction as an isolated goal.",
  },
  {
    question: "A later audit record makes the maintenance hypothesis much stronger. How should the earlier incident decision be documented?",
    choices: [
      "Keep the earlier decision in its original chronology and explain that later evidence changed confidence afterward.",
      "Rewrite the earlier record so it appears the team already knew the audit result.",
      "Delete the initial hypothesis because it later weakened.",
      "Treat the later record as proof that every earlier alert was false.",
    ],
    answer: 0,
    explanation: "Defensible casework preserves what was known when a decision was made and documents later reassessment separately.",
  },
  {
    question: "What makes a recommendation portfolio-ready in the final casebook?",
    choices: [
      "It is tied to evidence, addresses the actual problem, identifies an accountable owner, includes priority or timing, and defines how improvement will be validated or reconsidered.",
      "It uses the strongest possible language even when evidence is limited.",
      "It recommends buying a new tool for every finding.",
      "It removes all uncertainty so leadership sees a decisive answer.",
    ],
    answer: 0,
    explanation: "Professional recommendations are traceable, owned, testable, and proportionate to the evidence.",
  },
  {
    question: "What should the executive review communicate about the overall Northbridge case?",
    choices: [
      "Current evidence does not confirm malicious service-identity use; monitoring resilience and evidence quality remain important priorities, with accountable remediation and defined reassessment triggers.",
      "A major breach is confirmed because the original alert was High.",
      "Everything is resolved because maintenance was approved.",
      "The telemetry gap should be hidden because it complicates the message.",
    ],
    answer: 0,
    explanation: "The strongest leadership communication preserves the bounded conclusion, material remaining risk, ownership, and the triggers that would change the assessment.",
  },
];

const checklistItems = [
  "The case scope is explicit and limited to the fictional Northbridge evidence packet.",
  "Facts, hypotheses, assumptions, findings, issues, risks, incidents, exceptions, recommendations, decisions, and unresolved questions are not used interchangeably.",
  "Material claims can be traced back to synthetic evidence.",
  "Current, stale, delayed, contradictory, and missing sources remain visible.",
  "Later evidence changes confidence without rewriting earlier chronology.",
  "Sequence is not treated as automatic proof of causation.",
  "The SVC-NB-40 misuse hypothesis remains unconfirmed unless new synthetic evidence supports it.",
  "Identity authorization is separated from governance-review freshness.",
  "Architecture and cloud findings describe dependencies, ownership, resilience, and validation needs.",
  "Detection recommendations improve quality without teaching evasion or blindly suppressing alerts.",
  "The QUEUE-NB-2 gap remains visible as an evidence limitation and monitoring risk.",
  "Risk statements describe condition, plausible event, and consequence.",
  "Priority decisions identify accountable owners and reassessment triggers.",
  "Recommendations include a way to validate whether the improvement worked.",
  "Leadership communication separates technical severity, operational impact, business impact, and future risk.",
  "No unsupported compromise, customer, financial, legal, or data-loss claims are added.",
  "The final casebook integrates the nine prior A18 artifacts without flattening their different purposes.",
  "All work remains conceptual, defensive, fictional, synthetic, and school-appropriate.",
];

const takeaways = [
  "A professional casebook connects evidence, interpretations, decisions, ownership, and communication without forcing every source into one story.",
  "Integration is strongest when facts, hypotheses, findings, risks, incidents, exceptions, recommendations, decisions, and open questions remain distinct.",
  "Current identity authorization can be valid while review freshness still needs improvement.",
  "A monitoring gap can materially reduce confidence without proving hidden malicious activity.",
  "Detection quality should be improved through context, deduplication, routing, enrichment, and measured outcomes rather than alert-count reduction alone.",
  "Backup success and control existence do not replace evidence of recovery readiness or control effectiveness.",
  "Later evidence can change confidence while the original chronology and earlier decisions remain historically accurate.",
  "The final Advanced Defensive Casebook and Executive Review should give leaders a bounded conclusion while preserving technical traceability underneath it.",
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/20 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 text-slate-300">{children}</div>
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

export default function AdvancedLabChallengePage() {
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
              A18.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Defensive Labs
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A18.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Advanced Lab Challenge
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Build the final <span className="font-black text-cyan-200">Advanced Defensive Casebook and Executive Review</span> by integrating the investigation, architecture, cloud, identity, incident-response, detection, risk, timeline, and communication skills developed across A18.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The goal is not to force nine earlier artifacts into one repetitive template. The capstone teaches how professionals preserve evidence status, reconcile uncertainty, connect genuine cross-domain dependencies, prioritize defensible improvements, and communicate a bounded conclusion. Every service, alert, log, identity, ticket, architecture record, risk, and decision is fictional and synthetic.
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
          lessonTitle="Advanced Lab Challenge"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A18.10 Capstone Readiness"
          items={[
            "I can separate direct evidence from interpretation and preserve meaningful uncertainty.",
            "I can evaluate architecture, cloud, identity, detection, risk, timeline, and governance evidence without treating them as interchangeable.",
            "I can explain why a decision must be judged using the evidence available at the time it was made.",
            "I can communicate a bounded conclusion to leadership without exaggerating severity or hiding unresolved questions.",
            "I will work only with the synthetic Northbridge evidence provided by this curriculum.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Casebook Is an Argument About Evidence, Not a Binder of Screenshots"
        >
          <p className="leading-8">
            By the time a complex defensive review reaches a senior analyst, architect, incident lead, risk owner, or security leader, the hard problem is rarely finding one more isolated fact. The hard problem is deciding how evidence from different sources fits together without pretending that every source answers the same question. An identity review can show current authorization. A timeline can show sequence. An architecture review can reveal shared dependencies. A detection baseline can expose workflow noise. A risk register can express future consequence. None of those artifacts automatically proves the others.
          </p>
          <p className="mt-4 leading-8">
            That is why the final A18 challenge is about synthesis. Synthesis means connecting evidence where the connection is justified, keeping categories separate when they answer different questions, and explaining how the complete body of evidence changes decisions. A strong casebook lets another reviewer trace a leadership conclusion back to detailed evidence without requiring leadership to read every record first.
          </p>
          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The capstone standard: integrate without flattening, conclude without overstating, prioritize without hiding uncertainty, and communicate without losing traceability.
            </p>
          </div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for This Lab">
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

        <Section eyebrow="Capstone Teaching" title="What Integration Really Means">
          <p className="leading-8">
            A beginner may think integration means placing all evidence in chronological order. An intermediate reviewer may group evidence by technology domain. An advanced reviewer goes further: they ask what question each source can legitimately answer, where independent sources reinforce one another, where contradictions remain, what decisions the evidence supports, and which uncertainties are still material.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Corroboration",
                text: "Independent sources that support the same bounded proposition can increase confidence. Approved change evidence, application audit linkage, and current identity ownership together strengthen the maintenance explanation because they answer related but not identical questions.",
              },
              {
                title: "Complementarity",
                text: "Different sources can contribute different pieces without directly confirming one another. Architecture evidence explains dependency risk while timeline evidence explains sequence. Together they improve understanding without becoming proof of one technical cause.",
              },
              {
                title: "Contradiction",
                text: "A conflict between sources should remain visible until it is explained or bounded. Do not silently choose the source that makes the story easier. Record provenance, freshness, clock behavior, ownership, and confidence before deciding what the contradiction means.",
              },
              {
                title: "Independence",
                text: "Two records are not truly independent if they both originate from the same upstream system. Counting duplicates as separate confirmations can create false confidence, especially in alerts and monitoring evidence.",
              },
              {
                title: "Materiality",
                text: "Not every technically interesting detail deserves the same casebook prominence. Materiality asks whether the evidence changes scope, impact, risk, decision, ownership, confidence, or a leadership priority.",
              },
              {
                title: "Traceability",
                text: "A reader should be able to move from executive statement to finding, from finding to evidence, and from evidence to its source and time context. Traceability is what makes concise leadership communication defensible.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Artifact Integration" title="How the Nine Earlier A18 Artifacts Contribute">
          <p className="leading-8">
            Each prior artifact remains useful because it preserves a different professional perspective. The capstone should reference and integrate them, not erase them. Think of the final casebook as an index of defensible reasoning: leadership can start with the executive review, while a technical reviewer can follow evidence back into the relevant detailed section.
          </p>
          <div className="mt-6 grid gap-4">
            {artifactMap.map((item) => (
              <article key={item.number} className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">{item.number}</span>
                  <h3 className="font-black">{item.artifact}</h3>
                </div>
                <p className="mt-3 text-sm leading-7"><span className="font-black text-cyan-200">What it contributes: </span>{item.contribution}</p>
                <p className="mt-3 text-sm leading-7"><span className="font-black text-emerald-200">Capstone use: </span>{item.capstoneUse}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence Language" title="Use the Right Word for the Right Evidentiary State">
          <p className="leading-8">
            One of the easiest ways to make a casebook sound more certain than the evidence is to use professional terms loosely. A finding is not automatically a risk. A risk is not an incident. An exception is not simply an undocumented weakness. A recommendation is not a decision until the proper authority chooses it. Use the distinctions below as a quality-control language model for the entire capstone.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1050px] w-full text-left text-sm">
              <thead className="bg-slate-800 text-slate-100">
                <tr>
                  <th className="p-4">State</th>
                  <th className="p-4">Meaning</th>
                  <th className="p-4">Professional test</th>
                  <th className="p-4">Synthetic example</th>
                  <th className="p-4">Common error</th>
                </tr>
              </thead>
              <tbody>
                {evidenceClasses.map((item) => (
                  <tr key={item.label} className="border-t border-slate-800 align-top">
                    <td className="p-4 font-black text-cyan-200">{item.label}</td>
                    <td className="p-4 leading-6 text-slate-300">{item.meaning}</td>
                    <td className="p-4 leading-6 text-slate-300">{item.test}</td>
                    <td className="p-4 leading-6 text-emerald-200">{item.example}</td>
                    <td className="p-4 leading-6 text-yellow-100">{item.commonError}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="Case Scope" title="Northbridge Capstone — Synthetic Defensive Review">
          <p className="leading-8">
            The final case brings together a brief API service degradation, an unusual service-identity alert, approved maintenance, identity authorization, monitoring gaps, architecture dependencies, cloud governance freshness, detection workflow quality, risk treatment, recovery validation, and leadership communication. The evidence is intentionally mixed because professional review requires deciding which relationships are supported and which are only possible.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Primary services", "APP-NB-40, API-NB-41, QUEUE-NB-2"],
              ["Identity", "SVC-NB-40"],
              ["Detection", "DET-NB-7"],
              ["Approved change", "CHG-FT-41"],
              ["Operations ticket", "OPS-1842"],
              ["Environment", "Northbridge fictional internal platform"],
              ["Primary case question", "What does the complete evidence support, and what defensive priorities remain?"],
              ["Evidence boundary", "Only the synthetic records supplied by A18"],
              ["Safety boundary", "No real acquisition, access, containment, blocking, scanning, probing, or system changes"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-50">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">{label}</p>
                <p className="mt-2 leading-7">{value}</p>
              </div>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Capstone Review — Synthetic Leadership Dashboard"
          subtitle="Cross-case evidence status for the fictional A18 capstone"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="DET-NB-7 — Unusual Service Identity Activity"
          severity="High"
          time="09:05:11"
          source="Synthetic Detection Feed"
          details="SVC-NB-40 produced unusual activity during the approved CHG-FT-41 maintenance window while API-NB-41 experienced a short service degradation. Later application-audit and identity evidence support authorized maintenance as the strongest explanation, while a separate QUEUE-NB-2 telemetry gap remains unresolved."
          recommendation="Keep alert significance, identity authorization, service impact, maintenance context, timeline uncertainty, and monitoring risk separate. Do not call the alert a confirmed compromise and do not hide the unresolved evidence gap."
        />

        <FakeLogPanel
          title="Synthetic Cross-Case Record"
          logs={logs}
        />

        <Section eyebrow="Evidence Inventory" title="Northbridge Capstone Evidence">
          <p className="leading-8">
            The same case can contain direct facts, findings, issues, decisions, recommendations, and unresolved questions at the same time. Read the status column before interpreting significance. The purpose is to practice disciplined language rather than make every row sound equally severe.
          </p>
          <div className="mt-6 grid gap-4">
            {northbridgeCase.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-200">{item.domain}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">{item.status}</span>
                </div>
                <p className="mt-3 leading-7 text-slate-200">{item.evidence}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400"><span className="font-black text-yellow-200">Narrative significance: </span>{item.significance}</p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — What Does the Identity Evidence Actually Support?"
          question="Which capstone conclusion best integrates the High alert, approved maintenance, application audit, current identity ownership, and the telemetry gap?"
          evidence={[
            "DET-NB-7 opened as a High-priority unusual service-identity alert.",
            "CHG-FT-41 authorized maintenance using SVC-NB-40 during the same window.",
            "Application-audit evidence links SVC-NB-40 activity to the approved change.",
            "Current identity ownership and permission scope are confirmed.",
            "QUEUE-NB-2 contains a separate six-minute forty-two-second telemetry gap.",
          ]}
          options={[
            "Current evidence supports authorized maintenance as the strongest explanation for the identity activity; malicious use is not confirmed, while the telemetry gap remains a separate monitoring-quality limitation that reduces reconstruction confidence.",
            "The High alert proves SVC-NB-40 was compromised, and the telemetry gap proves activity was hidden.",
            "Approved maintenance means every event in the window should be considered benign and the alert can be ignored.",
            "Because the telemetry gap remains unresolved, no conclusions of any kind can be made about the identity evidence.",
          ]}
          bestAnswer={0}
          explanation="The strongest answer integrates independent evidence without overclaiming. Maintenance and authorization materially weaken misuse, while the telemetry gap remains important because it limits evidence quality—not because it proves hidden activity."
        />

        <Section eyebrow="Cross-Case Analysis" title="Where the Earlier Artifacts Actually Converge">
          <p className="leading-8">
            Cross-case findings should exist only when multiple artifacts genuinely point to the same underlying defensive concern. The strongest example in Northbridge is monitoring resilience: architecture, incident response, timeline reconstruction, risk, and leadership communication all depend on trustworthy evidence availability. Other findings remain separate because they answer different questions.
          </p>
          <div className="mt-6 grid gap-5">
            {crossCaseFindings.map((item) => (
              <article key={item.title} className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6 text-blue-50">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs font-black">Priority: {item.priority}</span>
                </div>
                <p className="mt-4 text-sm leading-7"><span className="font-black text-cyan-200">Evidence convergence: </span>{item.evidence}</p>
                <p className="mt-3 text-sm leading-7"><span className="font-black text-purple-200">Interpretation: </span>{item.interpretation}</p>
                <p className="mt-3 text-sm leading-7"><span className="font-black text-emerald-200">Owner: </span>{item.owner}</p>
                <p className="mt-3 text-sm leading-7"><span className="font-black text-yellow-200">Validation: </span>{item.validation}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Professional Reasoning" title="Prioritization Is More Than Severity">
          <p className="leading-8">
            A casebook becomes useful when it helps decision makers choose what deserves attention first. Severity labels can contribute to prioritization, but they cannot substitute for it. The same technical condition may deserve different treatment depending on service criticality, control effectiveness, scope, dependency concentration, evidence confidence, ownership, recurrence, business consequence, and whether an improvement can be validated safely.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Material consequence", "What service, customer, obligation, evidence capability, or business outcome could realistically be affected?"],
              ["Defensive dependency", "Does the weakness affect several defensive capabilities at once, such as detection, response, reconstruction, and confidence?"],
              ["Evidence confidence", "How well supported is the finding, and could a major contradiction materially change the priority?"],
              ["Control effectiveness", "Are safeguards operating, partially effective, stale, unvalidated, or concentrated on one dependency?"],
              ["Time sensitivity", "Is the problem already happening, likely to recur soon, or bounded until a later checkpoint?"],
              ["Ownership", "Is there an accountable team with authority and resources to act, or is unclear ownership itself part of the problem?"],
              ["Validation", "Can the proposed improvement be tested with evidence so success is more than a status label?"],
              ["Change risk", "Could the proposed improvement accidentally reduce useful visibility, resilience, or operational quality?"],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
                <h3 className="font-black text-white">{label}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Integrate Without Overclaiming"
          scenario="The Northbridge review contains a High identity alert, valid maintenance evidence, a monitoring gap, stale recovery validation, duplicate detection workload, and several governance-freshness findings. Leadership asks for one coherent explanation."
          choices={scenarioOneChoices}
        />

        <Section eyebrow="Decision Record" title="Priority Decisions and Reassessment Triggers">
          <p className="leading-8">
            A professional casebook does not stop at 'recommend improvements.' It records what decision is supported, why, who has authority or ownership, and what future evidence should trigger reassessment. This makes the casebook durable when conditions change.
          </p>
          <div className="mt-6 grid gap-5">
            {priorityDecisions.map((item, index) => (
              <article key={item.decision} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-emerald-50">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="font-black">{item.decision}</h3>
                    <p className="mt-3 text-sm leading-7"><span className="font-black text-cyan-200">Rationale: </span>{item.rationale}</p>
                    <p className="mt-3 text-sm leading-7"><span className="font-black text-purple-200">Evidence: </span>{item.evidence}</p>
                    <p className="mt-3 text-sm leading-7"><span className="font-black text-yellow-200">Authority / owner: </span>{item.authority}</p>
                    <p className="mt-3 text-sm leading-7"><span className="font-black text-emerald-200">Reassessment trigger: </span>{item.trigger}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — What Should Leadership Prioritize?"
          scenario="The identity misuse hypothesis is now Low confidence, but monitoring resilience, detection workflow quality, and stale recovery validation remain. Leadership can sponsor only a limited number of improvements in the next operating cycle."
          choices={scenarioTwoChoices}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Which Roadmap Is Defensible?"
          question="Which improvement roadmap best follows the A18 evidence?"
          evidence={[
            "Monitoring resilience affects evidence collection, alerting, response confidence, and timeline reconstruction.",
            "DET-NB-7 retains defensive value but suffers duplicate, maintenance-context, routing, and enrichment friction.",
            "Recovery validation is stale even though backup jobs complete.",
            "Current SVC-NB-40 authorization is supported while identity review timing needs governance improvement.",
            "No confirmed malicious activity or demonstrated customer impact is established.",
          ]}
          options={[
            "First establish owners and baselines, then improve monitoring resilience, detection context/workflow, recovery validation, and governance freshness, and finally measure outcomes with rollback or reassessment triggers.",
            "Disable the detection immediately because it generates too many alerts and close all maintenance-related alerts automatically.",
            "Remove SVC-NB-40 because its previous review was late even though current purpose and scope are justified.",
            "Declare a major incident and prioritize emergency containment because the original alert was High.",
          ]}
          bestAnswer={0}
          explanation="The first roadmap is proportional to the evidence, preserves useful detection coverage, separates governance findings from unjustified access, and requires measurable validation instead of dramatic unsupported action."
        />

        <Section eyebrow="Phased Improvement" title="A Roadmap That Can Be Measured and Reconsidered">
          <p className="leading-8">
            A roadmap should not imply that every improvement can or should happen simultaneously. Sequencing matters. Establishing owners and baselines before changes protects the ability to measure whether those changes helped. Validation and rollback criteria protect against improvements that accidentally reduce visibility or create new operational problems.
          </p>
          <div className="mt-6 grid gap-5">
            {roadmap.map((phase) => (
              <article key={phase.phase} className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-6 text-purple-50">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black">{phase.phase}</h3>
                  <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-black">{phase.horizon}</span>
                </div>
                <div className="mt-4 grid gap-3">
                  {phase.goals.map((goal) => (
                    <div key={goal} className="rounded-xl border border-purple-300/15 bg-slate-950/30 p-4 text-sm leading-7">{goal}</div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7"><span className="font-black text-emerald-200">Success evidence: </span>{phase.success}</p>
              </article>
            ))}
          </div>
        </Section>

<Section eyebrow="Safe Fictional Lab" title="Build the Advanced Defensive Casebook and Executive Review">
          <p className="leading-8">
            Use the synthetic Northbridge packet and your prior A18 artifacts. Your goal is to create a coherent professional portfolio, not reproduce every sentence from earlier lessons. Preserve detailed evidence where it supports traceability, summarize repeated material intelligently, and keep unresolved questions visible.
          </p>
          <div className="mt-6 grid gap-4">
            {[
              "Write a one-paragraph case scope that names the fictional services, identity, detection, change, time window, business boundary, and safety boundary.",
              "Create an evidence inventory that identifies source, freshness, provenance, time characteristics, owner, and whether each source is direct, derived, delayed, contradictory, or incomplete.",
              "Summarize the A18.1 multi-source investigation with the strongest current hypotheses, contradictions, confidence, and bounded conclusion.",
              "Add the A18.2 architecture review and identify trust boundaries, monitoring dependencies, degraded modes, resilience concerns, owners, and validation needs.",
              "Add the A18.3 cloud review while separating configuration state, governance evidence, classification freshness, logging, backup, recovery validation, and exceptions.",
              "Add the A18.4 identity decision pack with current justification, ownership, permission scope, review freshness, exceptions, service-identity lifecycle, and final access decisions.",
              "Preserve the A18.5 tabletop decision chronology, including what was known at each decision point, authority, reassessment triggers, impact statements, and recovery criteria.",
              "Add the A18.6 detection recommendation with baseline metrics, noise sources, analyst usefulness, reopen rate, safer tuning categories, monitoring window, and rollback criteria.",
              "Add the A18.7 risk register and ensure each material risk has a complete statement, control-effectiveness analysis, residual risk, treatment, owner, due date, review trigger, and validation evidence.",
              "Add the A18.8 normalized timeline, anchor events, contradictions, delayed records, clock uncertainty, evidence gaps, confidence labels, hypotheses, and bounded narrative.",
              "Add the A18.9 Executive Security Summary as the leadership-facing entry point while keeping the detailed evidence available in the supporting sections.",
              "Create a cross-case findings section that combines evidence only where multiple artifacts genuinely converge.",
              "Create a priority-decision section that records recommendation, evidence, authority or owner, decision, rationale, and reassessment trigger.",
              "Create a phased improvement roadmap that establishes baselines first, improves defensive controls and governance second, then measures outcomes and residual risk.",
              "Write a leadership decision summary that clearly states what requires sponsorship now, what remains owned operational work, and what conditions would trigger escalation.",
              "Finish with a lessons-learned section explaining how the case changed from initial alert interpretation to the final bounded conclusion without rewriting earlier evidence.",
              "Run a final terminology check for facts, hypotheses, assumptions, findings, issues, risks, incidents, exceptions, recommendations, decisions, and unresolved questions.",
              "Run a final safety check confirming the casebook contains no real access instructions, credentials, scanning, exploitation, bypass, evasion, containment execution, or private data.",
            ].map((task, index) => (
              <div key={task} className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{task}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab safety boundary</p>
            <p className="mt-2 leading-7">
              This capstone is analysis and documentation practice using synthetic evidence only. Do not acquire evidence from real devices, access real accounts, use credentials, inspect real cloud consoles, scan or probe systems, extract private information, bypass controls, modify endpoints, change network or cloud settings, disable detections, or execute real containment. Incident-response actions remain tabletop and conceptual.
            </p>
          </div>
        </Section>

        <Section eyebrow="Advanced Challenge" title="Defend the Casebook Before a Fictional Review Board">
          <p className="leading-8">
            The final challenge is not to make the casebook sound impressive. It is to make it survive questioning. Imagine a fictional review board containing a security architect, incident lead, IAM owner, platform owner, risk manager, detection engineer, and executive sponsor. Prepare concise evidence-backed answers to the questions below.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "What is the strongest current explanation for DET-NB-7, and why is it not stated with absolute certainty?",
              "Which evidence is direct, which is interpretive, and which remains incomplete?",
              "Why does the QUEUE-NB-2 gap matter even though it does not prove malicious activity?",
              "What changed between the initial incident hypothesis and the final assessment?",
              "Which earlier decisions were reasonable based on the evidence available at that time?",
              "Why is the late identity review a governance finding instead of proof that SVC-NB-40 is unjustified?",
              "Why should detection tuning focus on deduplication, enrichment, routing, and quality metrics instead of broad suppression?",
              "Which architecture dependency creates the most cross-domain defensive risk?",
              "Why does successful backup completion not prove recovery readiness?",
              "Which risks remain after current controls, and who owns them?",
              "What evidence would cause leadership to change the current priority order?",
              "What can leadership decide from the executive review without reading every technical record?",
              "Which statements would become misleading if the word 'confirmed' were added to them?",
              "Where does the casebook intentionally preserve uncertainty, and why is that a strength?",
              "How will the organization know whether the phased roadmap actually improved defensive quality?",
              "What evidence supports closing the identity-misuse hypothesis as unconfirmed while keeping monitoring remediation open?",
            ].map((question, index) => (
              <div key={question} className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">Review question {index + 1}</p>
                <p className="mt-2 leading-7">{question}</p>
              </div>
            ))}
          </div>
        </Section>

<DefenderChecklist
          title="A18.10 Capstone Defender Checklist"
          items={checklistItems}
        />

        <Section eyebrow="Skill Check" title="Seven Capstone Questions">
          <MiniQuiz
            title="A18.10 Mini Quiz: Advanced Lab Challenge"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Final A18 Portfolio — Advanced Defensive Casebook and Executive Review"
          prompt="Produce the tenth and final A18 artifact: an Advanced Defensive Casebook and Executive Review using only the fictional Northbridge evidence. Integrate the prior nine A18 artifacts into a traceable professional portfolio with an executive summary, case scope, evidence inventory, multi-source investigation, architecture review, cloud review, identity review, incident tabletop record, detection tuning recommendation, risk register, forensics timeline, cross-case findings, priority decisions, phased improvement roadmap, leadership decision summary, and final lessons learned. Preserve evidence status, uncertainty, ownership, validation, and safety boundaries throughout."
          tips={[
            "Use cross-references so an executive statement can be traced to the detailed evidence that supports it.",
            "Do not merge different evidence categories merely to make the story simpler.",
            "Keep the original chronology of decisions even when later evidence changes confidence.",
            "Use condition-event-consequence language for material risks and separate issues already happening from possible future consequences.",
            "Prioritize monitoring resilience, detection quality, and recovery validation according to the evidence rather than severity alone.",
            "Keep the service-identity misuse conclusion bounded: current evidence does not confirm malicious use.",
            "Define owners, checkpoints, validation, and reassessment triggers for major recommendations and decisions.",
            "Keep the executive review concise while the supporting casebook preserves technical depth.",
            "Use only synthetic evidence and conceptual defensive actions.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for the A18 Module Test?">
          <p className="leading-8">
            The module test will ask you to reason across the whole A18 curriculum rather than remember isolated vocabulary. Before continuing, you should be able to explain not only what each artifact contains, but why the artifacts sometimes support one another and sometimes must remain analytically separate.
          </p>
          <div className="mt-6 grid gap-4">
            {[
              "I can correlate multiple synthetic sources without confusing correlation and causation.",
              "I can identify trust boundaries, dependencies, resilience concerns, governance freshness, and validation needs in architecture and cloud reviews.",
              "I can justify an identity access decision using purpose, ownership, scope, approval, review freshness, activity evidence, exceptions, and lifecycle governance.",
              "I can preserve incident decisions in the chronology in which they were made and explain what later evidence changed.",
              "I can evaluate detection quality using more than alert volume and can define safer tuning, monitoring, and rollback logic.",
              "I can write a risk statement, distinguish inherent and residual risk, evaluate control effectiveness, and explain treatment ownership.",
              "I can normalize synthetic timeline evidence while preserving provenance, clock uncertainty, contradictions, gaps, and confidence.",
              "I can write technical, manager, and executive summaries using the same supported facts at different levels of detail.",
              "I can integrate the entire case into cross-case findings and priority decisions without overstating what the evidence proves.",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Portfolio Build Guide" title="Recommended Final Casebook Structure">
          <p className="leading-8">
            The final artifact should read like one professional case portfolio while keeping enough internal structure that another reviewer can navigate quickly. The section order below is recommended because it moves from leadership meaning into evidence and analysis, then returns to priorities and lessons learned. You can use natural subsections inside each area instead of forcing identical step counts.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Executive Summary",
              "Case Scope",
              "Evidence Inventory",
              "Multi-Source Investigation",
              "Network Defense Architecture Review",
              "Cloud Security Review",
              "Identity Access Review",
              "Incident Response Tabletop Record",
              "Detection Tuning Recommendation",
              "Defensive Risk Register",
              "Forensics Timeline and Evidence Narrative",
              "Cross-Case Findings",
              "Priority Decisions",
              "Phased Improvement Roadmap",
              "Leadership Decision Summary",
              "Final Review and Lessons Learned",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-50">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">Section {index + 1}</p>
                <p className="mt-2 font-black">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="font-black">Official A18 portfolio outcome</p>
            <p className="mt-2 text-xl font-black">Advanced Defensive Casebook and Executive Review</p>
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <Section eyebrow="Safety Boundary" title="Professional Defensive Reasoning — Synthetic Case Only">
          <p className="leading-8">
            A18.10 remains a school-appropriate defensive analysis and documentation exercise. Every account, service, alert, ticket, cloud record, architecture condition, identity, metric, timestamp, risk, and decision is fictional. The casebook teaches how to reason about evidence and governance without performing real forensic acquisition, live response, or system modification.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="font-black">Allowed capstone work</p>
              <p className="mt-2 text-sm leading-7">
                Synthetic alerts and logs, fictional architecture review, trust-boundary analysis, identity governance, cloud shared responsibility, evidence correlation, conceptual incident-tabletop decisions, detection quality metrics, risk registers, forensic timeline reasoning, executive communication, remediation planning, ownership, review triggers, and validation criteria.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 p-5 text-red-50">
              <p className="font-black">Not part of the capstone</p>
              <p className="mt-2 text-sm leading-7">
                Real scanning, probing, enumeration, exploitation, password guessing, credential use, token theft, privilege escalation, control bypass, evasion, persistence, malicious code, private-data recovery, real cloud or account access, endpoint modification, network modification, disabling security controls, destructive automation, or real-world containment execution.
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