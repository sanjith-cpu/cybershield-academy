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

const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";
const previousLesson = `${modulePath}/security-diagram-project`;
const nextLesson = `${modulePath}/threat-model-project`;

const objectives = [
  "Explain the purpose of a professional incident report and distinguish it from an alert transcript, chat log, technical dump, or unsupported narrative.",
  "Organize fictional incident evidence into scope, timeline, impact, findings, decisions, actions, ownership, uncertainty, recovery status, and follow-up without overstating what the evidence proves.",
  "Write clearly for technical, operational, and leadership readers while preserving the same confirmed facts, evidence references, and confidence boundaries.",
  "Review an incident report for missing provenance, timeline ambiguity, weak impact language, unsupported root-cause claims, poor decision ownership, and incomplete follow-up evidence.",
  "Create a portfolio-ready Incident Report Project that demonstrates evidence-based reasoning, professional communication, ethical handling of information, and revision quality using only synthetic case material.",
];

const reportPurpose = [
  {
    title: "Preserve a defensible record",
    detail:
      "An incident report should show what was known, when it was known, which evidence supported the understanding, and which questions remained open. The report becomes a durable record that later reviewers can evaluate without relying on memory.",
  },
  {
    title: "Separate evidence from interpretation",
    detail:
      "Logs, alerts, tickets, service-health records, and approvals are evidence sources. Statements such as 'the outage was caused by the identity event' are interpretations that require support. A strong report keeps those categories distinct.",
  },
  {
    title: "Explain impact without exaggeration",
    detail:
      "Security severity and business impact are related but not identical. The report should describe which fictional service, users, workflow, or data process was affected and what evidence supports that conclusion.",
  },
  {
    title: "Record decisions and ownership",
    detail:
      "Professional reporting explains who made important decisions, what evidence was available at the time, what constraints existed, and what validation was required before the next decision point.",
  },
  {
    title: "Create a learning and improvement artifact",
    detail:
      "A completed report should help the organization improve detection, architecture, documentation, communication, recovery, governance, or ownership. The goal is not only to describe the event but to support better future decisions.",
  },
];

const reportSections = [
  {
    name: "Executive Summary",
    purpose:
      "A concise description of what happened, why it mattered, current status, major uncertainty, and the decision or follow-up that leadership should understand.",
    evidenceQuestion:
      "Can every material statement in the summary be traced to evidence or clearly labeled analysis?",
  },
  {
    name: "Scope and Context",
    purpose:
      "Defines the fictional services, identities, time window, business process, and boundaries included in the report, plus what is explicitly out of scope.",
    evidenceQuestion:
      "Could another reviewer understand exactly what the report covers without guessing?",
  },
  {
    name: "Evidence Inventory",
    purpose:
      "Lists the alert, log, ticket, change record, service-health, identity, architecture, analyst-note, and approval sources used during review.",
    evidenceQuestion:
      "Are source IDs, timestamps, provenance, freshness, and known limitations visible?",
  },
  {
    name: "Timeline",
    purpose:
      "Presents important events in normalized order while keeping source time, workflow time, uncertainty, delayed collection, and contradictory records visible.",
    evidenceQuestion:
      "Does the timeline preserve uncertainty instead of silently forcing conflicting records into one story?",
  },
  {
    name: "Findings and Analysis",
    purpose:
      "Explains what the evidence supports, what remains a hypothesis, what was contradicted, and which conditions or control gaps deserve attention.",
    evidenceQuestion:
      "Are findings bounded to the evidence, or do they quietly become unsupported conclusions?",
  },
  {
    name: "Impact Assessment",
    purpose:
      "Describes observed technical and operational effects, affected fictional users or services, duration, degradation, and any evidence that limits the impact estimate.",
    evidenceQuestion:
      "Is impact described from evidence rather than copied from an alert severity label?",
  },
  {
    name: "Decisions and Response Record",
    purpose:
      "Documents conceptual decisions, decision owners, rationale, checkpoints, approval context, and why a decision was reasonable based on evidence available at that time.",
    evidenceQuestion:
      "Would a later reviewer understand who decided what and why, without rewriting history using later evidence?",
  },
  {
    name: "Recovery and Validation",
    purpose:
      "Explains the evidence used to judge stability, telemetry health, owner confirmation, residual uncertainty, and readiness to return to normal monitoring.",
    evidenceQuestion:
      "Are recovery claims tied to explicit criteria rather than vague statements such as 'everything looked fine'?",
  },
  {
    name: "Follow-Up Actions",
    purpose:
      "Records defensive improvements, accountable owners, due dates, review triggers, validation evidence, and any residual risk requiring governance attention.",
    evidenceQuestion:
      "Does every important recommendation have an owner and a way to verify completion?",
  },
];

const evidenceLanguage = [
  {
    label: "Confirmed fact",
    definition:
      "A statement directly supported by one or more supplied fictional records whose meaning is clear enough for the claim being made.",
    example:
      "Service-health record SH-NB-31 shows elevated API latency from 14:08 to 14:26 normalized time.",
  },
  {
    label: "Supported interpretation",
    definition:
      "A reasoned conclusion that combines evidence sources but still depends on analysis rather than direct observation alone.",
    example:
      "The timing suggests the queue backlog contributed to customer-visible delay, but the evidence does not prove it was the only cause.",
  },
  {
    label: "Hypothesis",
    definition:
      "A possible explanation that should be tested against additional evidence and should not be presented as confirmed cause.",
    example:
      "The unusual service-identity event may be related to the degraded workflow, pending comparison with approved change activity.",
  },
  {
    label: "Assumption",
    definition:
      "A working belief used temporarily because required evidence is missing or not yet reviewed. Assumptions should be visible and revisited.",
    example:
      "The first analyst assumed all event sources used synchronized clocks, but later review found one source had a known offset.",
  },
  {
    label: "Contradicted statement",
    definition:
      "A claim that later or stronger evidence weakens or disproves. The original reasoning can remain in the decision history while the final report explains the correction.",
    example:
      "The initial theory of unauthorized privilege use was weakened when the access event matched an approved maintenance record and expected service behavior.",
  },
  {
    label: "Unresolved question",
    definition:
      "A material point that cannot yet be answered with the available evidence and should remain explicit rather than being guessed away.",
    example:
      "Why did telemetry from MON-NB-8 arrive seven minutes late even though the monitoring service remained available?",
  },
];

const writingPrinciples = [
  {
    title: "Use evidence-backed verbs",
    detail:
      "Prefer language such as observed, recorded, confirmed, indicated, supported, contradicted, or remained unresolved. Avoid verbs that imply certainty when the evidence is incomplete.",
  },
  {
    title: "Keep cause separate from sequence",
    detail:
      "An event occurring before another event does not automatically prove causation. A report can state that events overlapped or followed one another while remaining careful about causal claims.",
  },
  {
    title: "Write impact in operational terms",
    detail:
      "Explain what fictional users, services, processing, availability, monitoring, or recovery functions were affected. Severity labels alone do not explain business meaning.",
  },
  {
    title: "Preserve decision-time context",
    detail:
      "A decision should be judged using the evidence available when it was made. Later evidence can change confidence without making the earlier record disappear.",
  },
  {
    title: "Name ownership clearly",
    detail:
      "When a report assigns a follow-up, identify an accountable role or fictional team. Phrases such as 'someone should review this' are not operationally useful.",
  },
  {
    title: "State limitations",
    detail:
      "Missing logs, stale ownership, delayed collection, uncertain clocks, incomplete architecture, or unavailable records affect confidence. Good reports say so explicitly.",
  },
  {
    title: "Revise for audience without changing facts",
    detail:
      "Technical, manager, and executive versions may differ in detail, but they should not contradict one another about what happened, what is known, or what remains uncertain.",
  },
];

const northbridgeCase = [
  {
    id: "EV-NB-301",
    time: "14:02",
    source: "CHG-NB-92",
    type: "Approved change",
    detail:
      "Maintenance window begins for API-NB-61 and service identity SVC-NB-61. Scope includes a planned application update and queue validation.",
    significance:
      "Provides legitimate context but does not automatically explain every later alert or service-health change.",
  },
  {
    id: "EV-NB-302",
    time: "14:07",
    source: "ID-NB-18",
    type: "Identity record",
    detail:
      "SVC-NB-61 performs an expected privileged service action associated with the maintenance workflow.",
    significance:
      "Initially unusual to the analyst because the event was rare, but later correlated with the approved change.",
  },
  {
    id: "EV-NB-303",
    time: "14:08",
    source: "SH-NB-31",
    type: "Service health",
    detail:
      "API latency rises above the fictional normal range. Customer portal remains reachable but some transactions are delayed.",
    significance:
      "Confirms operational degradation without proving a security cause.",
  },
  {
    id: "EV-NB-304",
    time: "14:09",
    source: "DET-NB-12",
    type: "Synthetic alert",
    detail:
      "Detection flags rare privileged service-identity activity during the same period as elevated latency.",
    significance:
      "Raises a review question but cannot determine authorization or business impact by itself.",
  },
  {
    id: "EV-NB-305",
    time: "14:11",
    source: "LOG-NB-44",
    type: "Application log",
    detail:
      "Queue processing time increases while request volume remains within the expected afternoon range.",
    significance:
      "Suggests an application or queue bottleneck may contribute to the degradation.",
  },
  {
    id: "EV-NB-306",
    time: "14:13",
    source: "TKT-NB-73",
    type: "Workflow record",
    detail:
      "Service desk opens an incident ticket after three user reports of delayed processing. No data-loss evidence is reported.",
    significance:
      "Workflow time occurs after the technical degradation began, demonstrating why ticket creation time is not incident start time.",
  },
  {
    id: "EV-NB-307",
    time: "14:15",
    source: "AN-NB-20",
    type: "Analyst note",
    detail:
      "Analyst records an initial hypothesis that the identity alert and latency may be connected, with confidence marked low.",
    significance:
      "Shows an interpretation that should remain labeled as a hypothesis, not rewritten as a fact.",
  },
  {
    id: "EV-NB-308",
    time: "14:17",
    source: "MON-NB-8",
    type: "Monitoring evidence",
    detail:
      "Queue backlog peaks. Collection timestamp is 14:24 because this source experienced a seven-minute forwarding delay.",
    significance:
      "Demonstrates that event time and collection time differ; late arrival must not move the actual event to 14:24.",
  },
  {
    id: "EV-NB-309",
    time: "14:18",
    source: "CHG-NB-92",
    type: "Change note",
    detail:
      "Maintenance owner confirms SVC-NB-61 activity was expected and provides the approved change step referencing the service action.",
    significance:
      "Substantially weakens the unauthorized-access hypothesis but does not yet explain service degradation.",
  },
  {
    id: "EV-NB-310",
    time: "14:20",
    source: "ARCH-NB-14",
    type: "Architecture record",
    detail:
      "Current architecture shows API-NB-61 depends on QUEUE-NB-6 for asynchronous transaction processing.",
    significance:
      "Provides a defensible dependency relationship that helps interpret the queue evidence.",
  },
  {
    id: "EV-NB-311",
    time: "14:23",
    source: "LOG-NB-45",
    type: "Application log",
    detail:
      "Queue processing returns toward baseline after the maintenance owner completes a planned validation step.",
    significance:
      "Supports recovery progress but does not prove root cause by itself.",
  },
  {
    id: "EV-NB-312",
    time: "14:26",
    source: "SH-NB-31",
    type: "Service health",
    detail:
      "API latency returns to the fictional normal range. Portal transaction delays stop appearing in health metrics.",
    significance:
      "Provides an explicit service-stability checkpoint.",
  },
  {
    id: "EV-NB-313",
    time: "14:31",
    source: "DET-NB-12",
    type: "Detection record",
    detail:
      "No additional rare service-identity alerts are generated after the expected maintenance activity ends.",
    significance:
      "Supports bounded closure of the identity concern but is only one evidence source.",
  },
  {
    id: "EV-NB-314",
    time: "14:35",
    source: "OWN-NB-7",
    type: "Owner confirmation",
    detail:
      "Application owner confirms service function is normal and no customer data integrity issue is known from supplied evidence.",
    significance:
      "Adds operational validation while preserving the limitation that absence of known evidence is not proof of every possible condition.",
  },
  {
    id: "EV-NB-315",
    time: "14:42",
    source: "TKT-NB-73",
    type: "Incident decision",
    detail:
      "Team records that the strongest supported explanation is maintenance-related queue degradation, while exact technical root cause remains under follow-up review.",
    significance:
      "Demonstrates a bounded conclusion: enough evidence for status and recovery decisions without pretending that every causal detail is proven.",
  },
];

const findings = [
  {
    title: "Operational degradation is confirmed",
    evidence: "SH-NB-31, LOG-NB-44, TKT-NB-73",
    statement:
      "The customer portal remained reachable, but some transactions experienced delayed processing between approximately 14:08 and 14:26 normalized time.",
    confidence: "High",
    limitation:
      "The supplied records describe delay but do not provide a complete count of every affected fictional transaction.",
  },
  {
    title: "The rare identity activity was authorized",
    evidence: "ID-NB-18, CHG-NB-92",
    statement:
      "The unusual SVC-NB-61 action matched an approved maintenance step and was confirmed by the maintenance owner.",
    confidence: "High",
    limitation:
      "Authorization of this event does not automatically explain the separate service-health degradation.",
  },
  {
    title: "Queue behavior is materially relevant",
    evidence: "LOG-NB-44, MON-NB-8, ARCH-NB-14",
    statement:
      "Queue processing delay overlapped the degraded API period, and architecture evidence confirms the API depends on the queue for the affected workflow.",
    confidence: "Medium-High",
    limitation:
      "The records support contribution and correlation, not exclusive root cause.",
  },
  {
    title: "Monitoring delay reduced early clarity",
    evidence: "MON-NB-8",
    statement:
      "One monitoring source forwarded a key queue event seven minutes after the source event time, delaying analyst access to relevant context.",
    confidence: "High",
    limitation:
      "The supplied case does not establish why forwarding was delayed.",
  },
  {
    title: "Initial analyst hypothesis was reasonable but weakened",
    evidence: "AN-NB-20, DET-NB-12, CHG-NB-92",
    statement:
      "The analyst initially considered a connection between rare identity activity and service degradation, then reduced confidence after change evidence explained the identity event.",
    confidence: "High",
    limitation:
      "The report should preserve the initial hypothesis as decision history rather than presenting it as a mistake erased by hindsight.",
  },
];

const antiPatterns = [
  {
    weak: "The critical alert caused the outage.",
    problem:
      "This treats alert severity as causal proof and overstates the service condition, which was degradation rather than full outage in the supplied evidence.",
    stronger:
      "A high-priority alert occurred during the degraded period, but later change evidence showed the flagged identity activity was authorized. The alert did not establish the cause of the service degradation.",
  },
  {
    weak: "The incident started at 14:13 because that is when the ticket was created.",
    problem:
      "Ticket creation is a workflow event. Service-health evidence shows degradation several minutes earlier.",
    stronger:
      "The incident ticket was opened at 14:13 after user reports, while technical evidence indicates degradation was already observable by 14:08.",
  },
  {
    weak: "No data was affected.",
    problem:
      "The evidence only says no data-integrity issue was known from the supplied records. That is narrower than proving nothing was affected anywhere.",
    stronger:
      "No data-integrity issue was identified in the supplied case evidence; this conclusion is limited to the records reviewed.",
  },
  {
    weak: "The root cause was the queue.",
    problem:
      "The queue is strongly relevant, but the supplied evidence does not isolate a single proven root cause.",
    stronger:
      "Queue degradation is the strongest supported contributing explanation, while exact technical root cause remains a follow-up question.",
  },
  {
    weak: "The analyst was wrong to investigate the identity alert.",
    problem:
      "This uses hindsight. Rare privileged activity during service degradation was a reasonable review question before change context was confirmed.",
    stronger:
      "The identity event was appropriately reviewed. Later change evidence reduced concern and allowed the investigation to focus on the queue and service-health evidence.",
  },
];

const revisionChecklist = [
  "Every material statement is either evidence-backed or clearly labeled as interpretation, hypothesis, assumption, or unresolved question.",
  "The scope and time window are explicit, and important out-of-scope areas are not implied to have been reviewed.",
  "Timeline entries distinguish technical event time from ticket, collection, processing, or analyst-note time where relevant.",
  "Impact language describes actual fictional service effects instead of repeating severity labels.",
  "Cause is not claimed merely because two events overlap or occur in sequence.",
  "Important decisions include owner, rationale, evidence available at the time, and next checkpoint.",
  "Recovery statements use concrete validation evidence such as service stability, telemetry health, owner confirmation, and bounded residual uncertainty.",
  "Follow-up recommendations identify accountable ownership and validation evidence rather than vague tasks.",
  "Sensitive or real-world details are absent; all records, identities, systems, organizations, and events are synthetic.",
  "The final report is readable for the intended audience and avoids unnecessary jargon, duplicate detail, and unsupported certainty.",
];

const quizQuestions = [
  {
    question: "What is the strongest purpose of an incident report?",
    choices: [
      "Create a defensible record of evidence, impact, decisions, uncertainty, recovery, and follow-up",
      "Copy every raw log into one document",
      "Prove that the first alert was correct",
      "Replace all technical records with a short opinion",
    ],
    answer: 0,
    explanation:
      "A professional incident report preserves the evidence-based story of the event, including what was known, how decisions were made, what impact occurred, what remained uncertain, and what follow-up is required.",
  },
  {
    question:
      "A ticket was created at 14:13, but service-health records show degradation beginning at 14:08. Which statement is best?",
    choices: [
      "The technical degradation appears to begin around 14:08; the ticket at 14:13 is a later workflow event",
      "The incident must begin at 14:13 because tickets define technical reality",
      "Both timestamps should be deleted because they conflict",
      "The report should choose whichever time looks cleaner",
    ],
    answer: 0,
    explanation:
      "Workflow time and technical event time are different. A good report preserves both and explains their relationship instead of forcing them into one timestamp.",
  },
  {
    question:
      "Why should a report avoid saying 'the queue caused the incident' when the evidence only shows strong correlation and dependency?",
    choices: [
      "Because correlation and dependency can support a contributing explanation without proving exclusive root cause",
      "Because incident reports should never discuss causes",
      "Because queues cannot affect application performance",
      "Because only alert severity can establish causation",
    ],
    answer: 0,
    explanation:
      "A bounded conclusion can explain that queue behavior is strongly relevant while preserving uncertainty about exact root cause.",
  },
  {
    question:
      "What should happen to an early analyst hypothesis that is later weakened by stronger evidence?",
    choices: [
      "Preserve it as part of the decision history and explain how later evidence changed confidence",
      "Delete it so the report appears perfectly certain from the beginning",
      "Keep presenting it as confirmed even after contradictory evidence arrives",
      "Convert it into a finding without evidence",
    ],
    answer: 0,
    explanation:
      "Professional reporting preserves what was reasonably believed at each stage and shows how evidence changed the analysis over time.",
  },
  {
    question: "Which statement best describes impact?",
    choices: [
      "Specific observed effects on fictional services, users, workflows, availability, data handling, or operations supported by evidence",
      "The alert severity copied directly into the report",
      "The analyst's emotional reaction",
      "The number of pages in the incident ticket",
    ],
    answer: 0,
    explanation:
      "Impact should describe what actually happened to the service or business process, not simply repeat a severity label.",
  },
  {
    question:
      "What makes a follow-up recommendation portfolio-ready and professionally useful?",
    choices: [
      "It identifies the improvement, accountable owner, rationale, validation evidence, and review point",
      "It says someone should fix the problem later",
      "It includes a real production credential for proof",
      "It hides uncertainty so the recommendation sounds stronger",
    ],
    answer: 0,
    explanation:
      "A strong recommendation connects evidence to an owned, verifiable improvement without exposing real sensitive information.",
  },
  {
    question:
      "Which publication choice is safest for a student incident-report portfolio artifact?",
    choices: [
      "Use fully fictional or carefully reconstructed records with no real private identifiers, credentials, internal details, or confidential incident data",
      "Publish a real company incident if names are abbreviated",
      "Include real screenshots but blur one field",
      "Use private production logs because they look more professional",
    ],
    answer: 0,
    explanation:
      "A student portfolio should demonstrate reasoning with synthetic evidence, not expose real organizational or personal information.",
  },
];

const takeaways = [
  "A professional incident report is an evidence-backed decision record, not a raw-data dump or dramatic narrative.",
  "Facts, interpretations, hypotheses, assumptions, contradictions, and unresolved questions should remain visibly distinct.",
  "Technical event time, collection time, ticket time, and analyst-note time can differ; the report should preserve those differences.",
  "Impact should describe observed service or business effects rather than simply repeating an alert severity label.",
  "Sequence and correlation can support analysis without proving causation or exclusive root cause.",
  "Decision history should preserve what was known at the time instead of rewriting earlier judgments with later evidence.",
  "A portfolio-ready incident report includes scope, evidence inventory, timeline, findings, impact, decisions, recovery evidence, follow-up ownership, limitations, and revision notes.",
  "All CyberShield Academy incident-report work should use fictional, synthetic, privacy-safe evidence only.",
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
        Module A19
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

export default function IncidentReportProjectPage() {
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
              A19.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Incident Report Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A strong incident report does more than describe that something went
            wrong. It shows the evidence, timeline, impact, decisions, uncertainty,
            recovery status, ownership, and follow-up in a form another reviewer can
            understand and defend.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches how to build that record using only fictional case
            evidence. You will practice professional reporting without accessing,
            changing, investigating, or responding to any real system.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A19: Cybersecurity Portfolio Projects"
          lessonTitle="Incident Report Project"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that this lesson uses only synthetic Northbridge records and does not involve a real incident.",
            "I can distinguish a confirmed observation from an interpretation or hypothesis.",
            "I understand that a report should preserve uncertainty instead of inventing missing facts.",
            "I am ready to write for clarity, evidence, ownership, and professional review rather than drama.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="The Report Is Part of the Defense">
          <p className="leading-8">
            Security work is often judged after the urgent moment has passed. A
            manager may ask why a decision was made. An engineer may need to know
            which dependency failed. A reviewer may need to separate a confirmed
            fact from an early theory. A future analyst may need to understand which
            evidence source was delayed. The incident report is the artifact that
            keeps those answers from disappearing.
          </p>

          <p className="mt-4 leading-8">
            That is why professional reporting is not an administrative afterthought.
            It supports accountability, recovery, lessons learned, risk decisions,
            and better future response. A technically accurate report can still be
            weak if it hides uncertainty, lacks ownership, confuses sequence with
            cause, or gives the reader no way to trace important claims back to
            evidence.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.3">
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

        <Section eyebrow="Core Teaching" title="What an Incident Report Is Actually For">
          <p className="leading-8">
            A report is strongest when every section has a purpose. The document
            should help a reader reconstruct the event, evaluate the reasoning, and
            understand what still needs attention. It should not force the reader to
            decode a wall of raw evidence or trust conclusions that appear without
            support.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reportPurpose.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Report Anatomy" title="Nine Sections That Make the Story Reviewable">
          <p className="leading-8">
            These sections are not a rigid universal template. Real organizations
            use different formats. What matters is that the report communicates the
            evidence, reasoning, impact, decisions, and follow-up clearly enough for
            the intended audience.
          </p>

          <div className="mt-6 grid gap-5">
            {reportSections.map((section) => (
              <article
                key={section.name}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-xl font-black text-blue-50">{section.name}</h3>
                <p className="mt-3 leading-7 text-blue-100">{section.purpose}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-slate-950/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Reviewer question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {section.evidenceQuestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence Language" title="Write What the Evidence Supports — No More, No Less">
          <p className="leading-8">
            Incident reports become unreliable when analysis is written as fact.
            Professional language helps the reader understand the strength of each
            statement. The goal is not to sound uncertain about everything; the goal
            is to be precise about what is confirmed and what still depends on
            interpretation.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {evidenceLanguage.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.definition}
                </p>
                <div className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Fictional example
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.example}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Professional Writing" title="Seven Principles That Keep a Report Credible">
          <div className="grid gap-5 md:grid-cols-2">
            {writingPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Incident Reporting Dashboard"
          subtitle="Synthetic reporting metrics for the A19.3 portfolio case"
          metrics={[
            {
              label: "Evidence sources",
              value: "8",
              note: "Alerts, logs, health, identity, change, architecture, ticket, analyst notes",
            },
            {
              label: "Confirmed degradation window",
              value: "18 min",
              note: "Approximately 14:08–14:26 normalized time",
            },
            {
              label: "Major unresolved causal question",
              value: "1",
              note: "Exact technical root cause of queue degradation remains under review",
            },
            {
              label: "Known collection delay",
              value: "7 min",
              note: "One monitoring record arrived after its actual source event",
            },
          ]}
        />

        <FakeAlertCard
          title="Rare Privileged Service Identity Activity"
          severity="High"
          time="14:09 normalized"
          source="Synthetic detection DET-NB-12"
          details="SVC-NB-61 performed a rare privileged service action during an approved maintenance window while API latency was elevated."
          recommendation="Correlate the identity event with approved change evidence, service health, architecture dependencies, and the incident timeline before drawing a conclusion."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Evidence Extract"
          logs={[
            "14:02 CHG-NB-92 maintenance_window=start scope=API-NB-61,SVC-NB-61",
            "14:07 ID-NB-18 service_identity=SVC-NB-61 action=approved_maintenance_step",
            "14:08 SH-NB-31 api_latency=degraded portal_status=reachable",
            "14:09 DET-NB-12 rare_privileged_activity service_identity=SVC-NB-61",
            "14:11 LOG-NB-44 queue_processing=slow request_volume=expected_range",
            "14:13 TKT-NB-73 incident_ticket=open user_reports=3",
            "14:17 MON-NB-8 event=queue_backlog_peak collection_time=14:24",
            "14:18 CHG-NB-92 owner_confirmation=service_action_expected",
            "14:26 SH-NB-31 api_latency=normal portal_delay=not_observed",
          ]}
        />

        <Section eyebrow="Fictional Case" title="Reconstruct the Northbridge Reporting Story">
          <p className="leading-8">
            The case below is intentionally designed so the first alert does not tell
            the whole story. A strong incident report should preserve the early
            identity concern, explain why that concern weakened, show the service
            impact, and keep the remaining root-cause question visible.
          </p>

          <div className="mt-6 grid gap-4">
            {northbridgeCase.map((event) => (
              <article
                key={event.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {event.id}
                  </span>
                  <span className="text-sm font-black text-cyan-100">{event.time}</span>
                  <span className="text-sm text-slate-400">{event.type}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-200">
                  Source: {event.source}
                </p>
                <p className="mt-3 leading-7 text-slate-300">{event.detail}</p>
                <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Reporting significance
                  </p>
                  <p className="mt-2 text-sm leading-7 text-purple-100">
                    {event.significance}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Review 1 — Alert vs. Authorization"
          question="What is the strongest report statement after correlating the rare service-identity alert with the approved change record?"
          evidence={[
            "DET-NB-12 records rare privileged SVC-NB-61 activity at 14:09.",
            "CHG-NB-92 began at 14:02 and explicitly included SVC-NB-61 maintenance activity.",
            "At 14:18 the maintenance owner confirmed that the observed service action matched an approved change step.",
            "Service degradation still requires separate analysis because authorization of the identity event does not explain every health metric.",
          ]}
          options={[
            "The identity event was authorized maintenance activity; this substantially weakens the unauthorized-access hypothesis, while service degradation remains a separate reporting question.",
            "The high-severity alert proves the identity was compromised even though the action was approved.",
            "Because maintenance was occurring, every alert and service problem should be ignored.",
            "Delete the alert from the report so readers never see the initial concern.",
          ]}
          bestAnswer={0}
          explanation="The strongest statement preserves both parts of the evidence: the identity concern was reasonably reviewed and later explained by authorized maintenance, while the service degradation still deserves independent analysis."
        />

        <Section eyebrow="Findings" title="Turn Evidence Into Bounded Findings">
          <p className="leading-8">
            A finding should be specific enough to matter and bounded enough to be
            defensible. Notice that several of these findings include a limitation.
            The limitation does not weaken professional writing; it tells the reader
            exactly how far the evidence can support the conclusion.
          </p>

          <div className="mt-6 grid gap-5">
            {findings.map((finding) => (
              <article
                key={finding.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-black text-emerald-50">
                    {finding.title}
                  </h3>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">
                    Confidence: {finding.confidence}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-emerald-200">
                  Evidence: {finding.evidence}
                </p>
                <p className="mt-3 leading-7 text-emerald-100">
                  {finding.statement}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Limitation
                  </p>
                  <p className="mt-2 text-sm leading-7">{finding.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Impact" title="Describe What Changed for the Service">
          <p className="leading-8">
            The strongest impact statement for this fictional case is not "a high
            alert occurred." The observed impact is delayed customer transaction
            processing while the portal remained reachable. That distinction matters
            because leaders need to understand service meaning, not only security
            tooling language.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">Weak impact statement</h3>
              <p className="mt-3 leading-7 text-red-100">
                "A critical security incident caused a major outage."
              </p>
              <p className="mt-3 text-sm leading-7 text-red-100/90">
                This overstates both the evidence and the impact. The case shows
                degraded processing, not a proven full outage, and the identity alert
                was later explained by approved maintenance.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Stronger impact statement</h3>
              <p className="mt-3 leading-7 text-emerald-100">
                "From approximately 14:08 to 14:26, the customer portal remained
                reachable but some transactions experienced delayed processing. No
                data-integrity issue was identified in the supplied evidence."
              </p>
              <p className="mt-3 text-sm leading-7 text-emerald-100/90">
                This tells the reader what was observed and preserves the evidence
                boundary.
              </p>
            </article>
          </div>
        </Section>

        <Section eyebrow="Decision History" title="Do Not Rewrite Earlier Decisions With Later Knowledge">
          <p className="leading-8">
            Incident reports often become misleading when the final explanation is
            projected backward onto every earlier decision. At 14:15, the analyst did
            not yet have the 14:18 owner confirmation. It was therefore reasonable to
            keep the identity hypothesis open with low confidence. The final report
            should show how confidence changed rather than pretending the answer was
            obvious from the beginning.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-900 text-cyan-100">
                <tr>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Decision state</th>
                  <th className="px-4 py-3">Evidence available</th>
                  <th className="px-4 py-3">Professional interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-300">
                <tr>
                  <td className="px-4 py-4 font-bold text-white">14:15</td>
                  <td className="px-4 py-4">Keep identity hypothesis open</td>
                  <td className="px-4 py-4">Rare identity alert + service degradation</td>
                  <td className="px-4 py-4">Reasonable low-confidence hypothesis; more context needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-bold text-white">14:18</td>
                  <td className="px-4 py-4">Reduce identity concern</td>
                  <td className="px-4 py-4">Approved change + owner confirmation</td>
                  <td className="px-4 py-4">Unauthorized-access hypothesis is substantially weakened</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-bold text-white">14:24</td>
                  <td className="px-4 py-4">Focus on queue/service dependency</td>
                  <td className="px-4 py-4">Delayed queue backlog record + architecture dependency</td>
                  <td className="px-4 py-4">Queue is strongly relevant, but exact cause remains bounded</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-bold text-white">14:35</td>
                  <td className="px-4 py-4">Validate recovery</td>
                  <td className="px-4 py-4">Service health normalized + owner confirmation + no new identity alerts</td>
                  <td className="px-4 py-4">Evidence supports service recovery with one causal question remaining</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Review 2 — Recovery Status"
          question="Which evidence combination best supports a professional recovery statement for the fictional case?"
          evidence={[
            "SH-NB-31 shows API latency returned to the expected range at 14:26.",
            "DET-NB-12 generated no additional rare service-identity alerts after maintenance activity ended.",
            "Application owner confirmed normal service function at 14:35.",
            "The exact technical root cause of queue degradation remains a follow-up question.",
          ]}
          options={[
            "State that service recovery is supported by health, detection, and owner evidence while preserving the unresolved root-cause question.",
            "Claim the incident is fully understood because the service is stable again.",
            "Ignore recovery evidence until every possible technical question is answered.",
            "Say the service is safe because the alert count became zero.",
          ]}
          bestAnswer={0}
          explanation="Recovery readiness and complete causal understanding are different questions. A report can support service recovery while honestly preserving an unresolved technical cause."
        />

        <Section eyebrow="Anti-Patterns" title="Five Report Sentences That Need Revision">
          <div className="grid gap-5">
            {antiPatterns.map((item) => (
              <article
                key={item.weak}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Weak wording
                </p>
                <p className="mt-2 font-bold text-yellow-50">{item.weak}</p>
                <p className="mt-4 text-sm leading-7 text-yellow-100">
                  <span className="font-black">Why it is weak:</span> {item.problem}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Stronger wording
                  </p>
                  <p className="mt-2 text-sm leading-7">{item.stronger}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safe Fictional Lab" title="Build the Northbridge Incident Report Project">
          <p className="leading-8">
            Use only the supplied synthetic records on this page. Your task is to
            transform the evidence into a professional report, not to investigate a
            real device, account, network, cloud tenant, or organization.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Case scope",
                detail:
                  "Define the fictional service, systems, identities, time window, business workflow, and evidence boundaries included in your report.",
              },
              {
                title: "Evidence inventory",
                detail:
                  "List each source ID, source type, relevant timestamp, provenance, major limitation, and what the source can or cannot establish.",
              },
              {
                title: "Normalized timeline",
                detail:
                  "Build a concise timeline that keeps the delayed monitoring collection, later ticket creation, and analyst-note timing visible.",
              },
              {
                title: "Findings",
                detail:
                  "Write at least four bounded findings with evidence references, confidence, and limitations.",
              },
              {
                title: "Impact statement",
                detail:
                  "Describe the observed customer and service impact without copying the alert severity or claiming unsupported data effects.",
              },
              {
                title: "Decision history",
                detail:
                  "Document how the identity hypothesis changed after owner confirmation and why that evolution was reasonable.",
              },
              {
                title: "Recovery statement",
                detail:
                  "Use service-health, detection, and owner evidence to explain why recovery was supported while exact root cause remained open.",
              },
              {
                title: "Follow-up plan",
                detail:
                  "Recommend improvements for monitoring delay, change-context enrichment, queue observability, and reporting quality with fictional ownership and validation.",
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
          title="Scenario Decision 1 — Early Identity Concern"
          scenario="At 14:15, the analyst has a rare privileged service-identity alert, elevated API latency, and a maintenance window, but the maintenance owner has not yet confirmed whether the identity action was expected. How should the report capture the situation?"
          choices={[
            {
              label: "Choice A",
              response:
                "Record the identity connection as a low-confidence hypothesis, list the evidence that supports review, note the maintenance context, and identify owner confirmation as the next evidence need.",
              outcome:
                "Best. This preserves the concern without turning it into unsupported fact and defines the evidence needed to update confidence.",
              tone: "best" as const,
            },
            {
              label: "Choice B",
              response:
                "Write that SVC-NB-61 was compromised because the alert severity is high.",
              outcome:
                "Risky. Alert severity does not establish authorization status, compromise, or cause.",
              tone: "risk" as const,
            },
            {
              label: "Choice C",
              response:
                "Ignore the identity alert because maintenance is occurring.",
              outcome:
                "Caution. Maintenance is relevant context, but it does not automatically explain every observed event.",
              tone: "caution" as const,
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Final Root-Cause Language"
          scenario="By 14:42, the service is stable, queue behavior is the strongest technical explanation, and the identity concern has been resolved as authorized maintenance. However, no supplied evidence proves a single exclusive root cause. What should the final report say?"
          choices={[
            {
              label: "Choice A",
              response:
                "State that maintenance-related queue degradation is the strongest supported explanation, explain the evidence, and keep exact technical root cause as a follow-up question.",
              outcome:
                "Best. This gives the reader a useful conclusion without claiming more certainty than the evidence supports.",
              tone: "best" as const,
            },
            {
              label: "Choice B",
              response:
                "Declare the queue as proven root cause so the report sounds decisive.",
              outcome:
                "Risky. Decisive wording is not a substitute for causal evidence.",
              tone: "risk" as const,
            },
            {
              label: "Choice C",
              response:
                "Refuse to write any conclusion because one technical question remains open.",
              outcome:
                "Caution. Reports can make bounded conclusions while preserving unresolved questions.",
              tone: "caution" as const,
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Write Three Versions Without Changing the Facts">
          <p className="leading-8">
            Create three short summaries of the same Northbridge case: technical,
            manager, and executive. The detail should change, but the confirmed
            facts, impact, uncertainty, and current status must stay consistent.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Technical version",
                detail:
                  "Include normalized timestamps, source IDs, queue dependency, delayed collection, identity correlation, confidence, and the remaining root-cause question.",
              },
              {
                title: "Manager version",
                detail:
                  "Emphasize service degradation, ownership, recovery evidence, change context, monitoring delay, and follow-up actions.",
              },
              {
                title: "Executive version",
                detail:
                  "Emphasize business meaning, duration, current status, material risk, confidence, required decision or priority, and next checkpoint.",
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
          title="Incident Report Quality Checklist"
          items={revisionChecklist}
        />

        <Section eyebrow="Assessment" title="A19.3 Knowledge Check">
          <p className="leading-8">
            Answer all seven questions before reviewing the explanations. Focus on
            evidence quality, reporting language, timeline reasoning, impact,
            decision history, ownership, and portfolio safety.
          </p>

          <div className="mt-6">
            <MiniQuiz
              title="A19.3 Mini Quiz: Incident Report Project"
              questions={quizQuestions}
            />
          </div>
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Incident Report Project"
          prompt="Create a polished fictional incident report for the Northbridge case. Include an executive summary, case scope, evidence inventory, normalized timeline, findings with confidence and limitations, impact assessment, decision history, recovery evidence, follow-up actions with owners and validation, unresolved questions, and a short revision note explaining how you improved the report after review."
          tips={[
            "Use the synthetic evidence IDs and fictional Northbridge names supplied in this lesson only.",
            "Do not claim compromise, data loss, outage, or root cause unless the supplied evidence supports that exact statement.",
            "Keep the first analyst hypothesis visible in the decision history and explain how later evidence changed confidence.",
            "Make the report readable enough that a reviewer can trace important claims without reading every raw record first.",
            "End with a short publication-safety check confirming that no real private or organizational information appears in the artifact.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.4?">
          <p className="leading-8">
            A19.4 moves into the Threat Model Project. Before continuing, make sure
            you can explain not just what happened in this fictional incident, but
            how evidence, assumptions, dependencies, impact, ownership, and
            uncertainty shaped the final report.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why an incident report is an evidence and decision record rather than a raw log dump.",
              "I can distinguish confirmed facts, supported interpretations, hypotheses, assumptions, contradictions, and unresolved questions.",
              "I can preserve technical event time, collection time, ticket time, and analyst-note time without confusing them.",
              "I can write a bounded impact statement and avoid turning severity or correlation into unsupported causation.",
              "I can document decision ownership, recovery evidence, follow-up validation, and publication safety professionally.",
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

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Incident Report Look Professional Without Making It Artificial">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lead with the case question",
                detail:
                  "The reader should understand which fictional service, time period, and operational problem the report addresses before seeing detailed evidence.",
              },
              {
                title: "Use stable evidence references",
                detail:
                  "Reference supplied IDs consistently so findings, timeline entries, and recommendations can be traced back to the same source inventory.",
              },
              {
                title: "Keep chronology readable",
                detail:
                  "Use only the events that materially change understanding. A professional timeline is selective enough to read but complete enough to defend the story.",
              },
              {
                title: "Show confidence honestly",
                detail:
                  "Use confidence labels or bounded wording when evidence is incomplete. Do not add certainty just to make the portfolio artifact sound advanced.",
              },
              {
                title: "Make ownership visible",
                detail:
                  "Findings and recommendations become stronger when the report identifies who should validate, decide, review, or accept residual risk.",
              },
              {
                title: "Show revision",
                detail:
                  "A short revision note can demonstrate growth: explain which statements were tightened, which unsupported claims were removed, and how evidence references improved.",
              },
              {
                title: "Design for scanning",
                detail:
                  "Use headings, short finding blocks, compact tables, and consistent labels so a reviewer can find impact, status, decisions, and follow-up quickly.",
              },
              {
                title: "Protect confidentiality",
                detail:
                  "A strong school portfolio proves your reasoning with fictionalized evidence. Real internal records, screenshots, credentials, private data, or incident details do not make the work more professional.",
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
            Keep the entire incident-report project fictional and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Do not investigate real incidents, collect data from real devices or
            accounts, access private logs, use real credentials, test live systems,
            change configurations, isolate endpoints, block traffic, recover private
            data, or perform real response actions for this lesson. Use only the
            synthetic Northbridge records supplied in the curriculum. The purpose is
            to practice evidence reasoning, reporting, communication, governance, and
            portfolio presentation safely.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.3 Incident Report Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have the structure for a portfolio-ready fictional incident
            report that preserves evidence, uncertainty, impact, decisions, recovery,
            ownership, and follow-up. Next, A19.4 applies similar evidence discipline
            to a Threat Model Project.
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