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
const previousLesson = `${modulePath}/architecture-and-threat-model-phase`;
const nextLesson = `${modulePath}/incident-response-phase`;

const objectives = [
  "Translate A20 architecture and threat-model findings into specific defensive monitoring questions before choosing telemetry or alert logic.",
  "Evaluate telemetry by purpose, coverage, provenance, source health, freshness, timing, privacy, limitations, and the decisions each source can support.",
  "Distinguish observation, correlation, alert severity, alert confidence, investigation priority, and confirmed incident status.",
  "Design safe tuning and validation decisions that improve signal quality without creating blind spots, hidden suppression debt, or unsupported automation.",
  "Create a Detection and Monitoring Review that later incident-response, cloud, identity, risk, privacy, and executive phases can use consistently.",
];

const detectionConcepts = [
  {
    concept: "Detection objective",
    meaning:
      "A clear statement of what defensive question the monitoring should help answer and why that answer matters.",
    northbridge:
      "Determine whether privileged administrative activity matches approved maintenance scope and whether monitoring remains trustworthy during source delay.",
    professionalUse:
      "Keeps monitoring tied to a decision instead of generating alerts simply because data exists.",
  },
  {
    concept: "Telemetry",
    meaning:
      "The records, events, health signals, metrics, audit entries, and service context available to support a defensive question.",
    northbridge:
      "Identity events, application activity, worker queue health, collector backlog, change records, service-health metrics, and recovery checkpoints.",
    professionalUse:
      "Provides the evidence base, but each source has limits and cannot prove every part of the case.",
  },
  {
    concept: "Source health",
    meaning:
      "The current state of an evidence-producing or evidence-collecting source, including availability, delay, loss, backlog, clock accuracy, and recovery.",
    northbridge:
      "The central monitoring collector was delayed during part of the case window.",
    professionalUse:
      "Changes what missing events can mean and should be evaluated independently from the events themselves.",
  },
  {
    concept: "Context",
    meaning:
      "The business, architecture, identity, maintenance, ownership, timing, and service information that gives an event meaning.",
    northbridge:
      "The 09:11 privileged action occurred during an approved maintenance window but is not yet mapped to the exact approved task.",
    professionalUse:
      "Prevents an event from being treated as suspicious or harmless based on one field alone.",
  },
  {
    concept: "Correlation",
    meaning:
      "A reasoned connection among records using shared time, identity, service, asset, request, change, or dependency context.",
    northbridge:
      "Queue latency, portal errors, privileged activity, collector delay, and worker restart all overlap in time.",
    professionalUse:
      "Builds stronger case context while preserving the difference between relationship and causation.",
  },
  {
    concept: "Alert severity",
    meaning:
      "A representation of potential consequence or urgency if the alert condition is meaningful.",
    northbridge:
      "A privileged configuration change affecting a critical service may carry High potential impact.",
    professionalUse:
      "Helps prioritize consequences but does not describe how certain the interpretation is.",
  },
  {
    concept: "Alert confidence",
    meaning:
      "How strongly the available evidence supports the interpretation attached to the alert.",
    northbridge:
      "Collector delay and incomplete task-level approval evidence reduce confidence in the meaning of one privileged event.",
    professionalUse:
      "Prevents high-impact but uncertain events from being treated as confirmed incidents.",
  },
  {
    concept: "Validation",
    meaning:
      "Safe evidence that a detection behaves as intended for expected, unexpected, boundary, degraded-source, and recovery conditions.",
    northbridge:
      "Synthetic cases should show whether the alert recognizes approved maintenance context, source delay, duplicate records, and recovery transitions.",
    professionalUse:
      "Tests decision usefulness without probing real systems or using malicious content.",
  },
];

const defensiveQuestions = [
  {
    id: "DET-Q1",
    question:
      "Was the 09:11 privileged administrative action part of the approved change scope?",
    why:
      "This changes whether the event is expected maintenance context, a process deviation, or a separate review item.",
    evidence:
      "Change-task detail, privileged-role context, identity event, application event, owner confirmation.",
    limitation:
      "Successful authentication does not by itself prove the specific action was authorized.",
  },
  {
    id: "DET-Q2",
    question:
      "Was monitoring visibility healthy enough to support claims about missing privileged activity?",
    why:
      "Collector delay can turn an apparent absence of alerts into an evidence-quality problem.",
    evidence:
      "Collector backlog, ingestion delay, source heartbeat, last-seen time, recovery timestamp.",
    limitation:
      "A delayed central collector may not mean the producing source itself failed.",
  },
  {
    id: "DET-Q3",
    question:
      "Did queue degradation materially overlap with portal errors and worker changes?",
    why:
      "Dependency timing affects whether later incident analysis should prioritize application, queue, change, or multiple interacting explanations.",
    evidence:
      "Queue latency, worker health, application error rate, change timeline, restart timing.",
    limitation:
      "Temporal overlap does not prove causation.",
  },
  {
    id: "DET-Q4",
    question:
      "Did privileged activity affect a critical configuration or only a low-impact maintenance object?",
    why:
      "Potential business impact affects triage and communication priority.",
    evidence:
      "Action category, target object classification, service criticality, expected maintenance task.",
    limitation:
      "Object importance should be derived from the synthetic case, not guessed from a technical label.",
  },
  {
    id: "DET-Q5",
    question:
      "Did the monitoring pipeline recover fully after the backlog?",
    why:
      "Later evidence should not be treated as fully current until the backlog and processing state return to expected levels.",
    evidence:
      "Queue depth, ingest delay, source-health status, processed-through timestamp, recovery validation.",
    limitation:
      "A green dashboard alone may not prove that all delayed records were processed.",
  },
  {
    id: "DET-Q6",
    question:
      "Did the portal and queue return to expected behavior after the worker-service restart?",
    why:
      "Recovery monitoring should show whether the service stabilized rather than simply responding once.",
    evidence:
      "Error rate, queue latency, dependency health, validation checkpoints, observation window.",
    limitation:
      "Service availability does not prove complete security or root cause.",
  },
];

const telemetrySources = [
  {
    source: "Identity event stream",
    purpose:
      "Authentication, privileged-role use, account state, role context, and selected lifecycle evidence.",
    keyFields:
      "Synthetic identity ID, role, event category, decision outcome, event time, collection time, source health.",
    sourceHealth:
      "Producing source current; central collector delayed during part of the case.",
    supports:
      "Whether an identity event occurred and the context the source records.",
    cannotProve:
      "Human intent, complete authorization, or every later action performed by the session.",
  },
  {
    source: "Application audit stream",
    purpose:
      "Administrative actions, configuration changes, request outcomes, worker behavior, and application errors.",
    keyFields:
      "Synthetic action ID, actor reference, object category, outcome, event time, request correlation ID, service state.",
    sourceHealth:
      "Available with a short gap around worker restart.",
    supports:
      "Observed application-side actions and state transitions.",
    cannotProve:
      "Every network path, external cause, or activity outside application logging.",
  },
  {
    source: "Worker and queue health",
    purpose:
      "Queue latency, job backlog, worker state, retry behavior, processing delay, and recovery.",
    keyFields:
      "Queue depth, oldest-item age, worker state, retry count, processing latency, event time.",
    sourceHealth:
      "Current and directly relevant to the observed service interruption.",
    supports:
      "Dependency performance and timing.",
    cannotProve:
      "Whether a security event caused the queue condition.",
  },
  {
    source: "Monitoring collector health",
    purpose:
      "Ingestion delay, backlog, source last-seen, processing state, and recovery of centralized evidence.",
    keyFields:
      "Source name, queue depth, ingest lag, processed-through time, heartbeat, recovery state.",
    sourceHealth:
      "Degraded between approximately 09:08 and 09:17, then recovering.",
    supports:
      "Whether centralized visibility was delayed and when confidence should be bounded.",
    cannotProve:
      "Why the collector degraded unless additional evidence supports cause.",
  },
  {
    source: "Change-management record",
    purpose:
      "Approved maintenance purpose, affected services, owners, planned timing, rollback, and expected tasks.",
    keyFields:
      "Synthetic change ID, owner, approver, systems, task categories, window, validation and rollback state.",
    sourceHealth:
      "Current and available throughout the case.",
    supports:
      "Expected business context and approved maintenance scope.",
    cannotProve:
      "That every event during the window was expected or correctly executed.",
  },
  {
    source: "Service-health stream",
    purpose:
      "Portal availability, latency, error rate, dependency health, and recovery checkpoints.",
    keyFields:
      "Service, status, error rate, latency, dependency state, event time, observation window.",
    sourceHealth:
      "Current for the primary portal; one background dependency is partial.",
    supports:
      "Operational impact and recovery progression.",
    cannotProve:
      "Security cause, actor intent, or authorization.",
  },
  {
    source: "Recovery validation record",
    purpose:
      "Post-recovery checks, dependency state, expected behavior, denied behavior, and closure evidence.",
    keyFields:
      "Validation case, expected result, observed result, owner, timestamp, limitation, follow-up.",
    sourceHealth:
      "Current for the portal restart; broader restoration evidence remains older.",
    supports:
      "Whether selected recovery criteria were met.",
    cannotProve:
      "Complete resilience of all dependencies or future recovery readiness.",
  },
];

const sourceHealthStates = [
  {
    state: "Healthy",
    meaning:
      "Source is available, current, expected fields are present, timing is reliable enough, and no material processing delay is known.",
    decisionEffect:
      "Positive and negative evidence can be used within the source's normal limitations.",
  },
  {
    state: "Delayed",
    meaning:
      "Records are arriving later than expected but may still be recoverable.",
    decisionEffect:
      "Missing recent events should not be treated as strong negative evidence until the backlog is understood.",
  },
  {
    state: "Partial",
    meaning:
      "Some expected fields, systems, periods, or event classes are missing.",
    decisionEffect:
      "Conclusions should be bounded to the available coverage and missing areas should remain explicit.",
  },
  {
    state: "Blind",
    meaning:
      "The source cannot currently provide meaningful evidence for the relevant scope or time.",
    decisionEffect:
      "Do not infer absence of activity from the source; use other evidence or preserve Unknown.",
  },
  {
    state: "Conflicting",
    meaning:
      "Sources or internal records disagree materially and the difference has not yet been resolved.",
    decisionEffect:
      "Preserve both observations, investigate timing/provenance, and lower confidence in the combined interpretation.",
  },
  {
    state: "Recovering",
    meaning:
      "The source is processing again but backlog, completeness, or timing normalization is still being validated.",
    decisionEffect:
      "Increase confidence gradually as recovery evidence confirms the source has caught up.",
  },
];

const alertReviewModel = [
  {
    dimension: "Observation",
    question:
      "What exact event or condition did the synthetic rule observe?",
    example:
      "A privileged configuration action was recorded at 09:11.",
  },
  {
    dimension: "Context",
    question:
      "What architecture, identity, maintenance, ownership, service, or business information changes its meaning?",
    example:
      "The event occurred during approved maintenance, but exact task-level authorization is unresolved.",
  },
  {
    dimension: "Source health",
    question:
      "Were all required sources available and current enough to support the interpretation?",
    example:
      "Centralized monitoring was delayed during part of the same period.",
  },
  {
    dimension: "Potential impact",
    question:
      "What could matter if the interpretation is correct?",
    example:
      "Identity policy and service configuration are important to portal access and reliability.",
  },
  {
    dimension: "Confidence",
    question:
      "How strongly does the available evidence support the interpretation?",
    example:
      "Moderate confidence because the event is confirmed but approval scope and complete monitoring context are not.",
  },
  {
    dimension: "Decision",
    question:
      "What should a defender do now, and what would change that decision?",
    example:
      "Preserve and review the event, compare it with change scope, and avoid declaring an incident until stronger evidence supports that state.",
  },
];

const detectionCandidates = [
  {
    id: "MON-NB-01",
    title: "Privileged Change Outside Approved Scope",
    objective:
      "Surface privileged administrative actions that do not match approved maintenance context or known administrative purpose.",
    sources:
      "Identity event, application audit, change record.",
    initialSeverity:
      "High potential impact",
    initialConfidence:
      "Moderate until task scope and source health are confirmed",
    safeValidation:
      "Use invented approved and unapproved maintenance scenarios, missing-context cases, and delayed-source cases.",
    owner:
      "Fictional Identity and Monitoring Owners",
  },
  {
    id: "MON-NB-02",
    title: "Monitoring Source Delay or Backlog",
    objective:
      "Detect when source-health conditions lower the reliability of event or alert conclusions.",
    sources:
      "Collector health, source heartbeat, ingest lag, processed-through time.",
    initialSeverity:
      "Medium",
    initialConfidence:
      "High when health metrics agree",
    safeValidation:
      "Use synthetic lag, backlog, source-stop, recovery, and catch-up records.",
    owner:
      "Fictional Monitoring Platform Owner",
  },
  {
    id: "MON-NB-03",
    title: "Worker Queue Degradation",
    objective:
      "Identify queue conditions that may affect portal reliability or complicate security-event interpretation.",
    sources:
      "Worker health, queue metrics, application service health.",
    initialSeverity:
      "Medium",
    initialConfidence:
      "High for the queue condition; Low to Moderate for any causal claim",
    safeValidation:
      "Use synthetic normal, high-latency, restart, recovery, and partial-source scenarios.",
    owner:
      "Fictional Application Reliability Owner",
  },
  {
    id: "MON-NB-04",
    title: "Recovery Validation Incomplete",
    objective:
      "Surface when service availability has returned but one or more recovery criteria remain unverified.",
    sources:
      "Service health, recovery checklist, dependency state, observation window.",
    initialSeverity:
      "Medium",
    initialConfidence:
      "High when validation criteria are explicitly missing",
    safeValidation:
      "Use synthetic pass, partial, stale, contradictory, and pending validation records.",
    owner:
      "Fictional Recovery Owner",
  },
  {
    id: "MON-NB-05",
    title: "Workload Access Review Needed",
    objective:
      "Identify when current workload-identity authorization evidence is insufficient for a critical service relationship.",
    sources:
      "Role inventory, workload purpose, resource mapping, access-review record.",
    initialSeverity:
      "Medium",
    initialConfidence:
      "Low to Moderate until A20.6 reviews actual synthetic scope evidence",
    safeValidation:
      "Use invented role-scope records showing exact, broad, stale, missing-owner, and expired-review states.",
    owner:
      "Fictional Cloud and Identity Owner",
  },
];

const tuningPrinciples = [
  {
    principle: "Tune the cause of noise",
    explanation:
      "If approved maintenance creates repeated false escalation, add reliable maintenance context rather than simply raising a threshold until alerts disappear.",
  },
  {
    principle: "Preserve useful coverage",
    explanation:
      "A tuning change should still detect the risky condition the rule exists to surface.",
  },
  {
    principle: "Keep degraded-source behavior",
    explanation:
      "The detection should define what happens when an enrichment source, identity source, or collector is delayed or unavailable.",
  },
  {
    principle: "Measure duplicate fan-out",
    explanation:
      "Several alerts describing one underlying condition can waste analyst time without adding decision value.",
  },
  {
    principle: "Use ownership and rollback",
    explanation:
      "Every material tuning change should have an owner, reason, observation window, expected result, and rollback condition.",
  },
  {
    principle: "Track suppression debt",
    explanation:
      "Temporary exclusions and suppressions should remain visible, time-bounded, reviewed, and linked to the original problem.",
  },
  {
    principle: "Protect privacy",
    explanation:
      "More telemetry is not automatically better. Collect and retain only what is proportionate to the stated defensive purpose.",
  },
  {
    principle: "Validate with synthetic cases",
    explanation:
      "Use harmless invented records to test positive, negative, boundary, degraded-source, recovery, and regression behavior.",
  },
];

const metrics = [
  {
    metric: "Useful alert rate",
    meaning:
      "How often alerts contribute to a meaningful defensive decision or justified review.",
    caution:
      "A high closure count does not automatically mean alerts are useful.",
  },
  {
    metric: "Duplicate rate",
    meaning:
      "How often multiple alerts represent the same underlying condition without adding new evidence.",
    caution:
      "Raw alert volume can make monitoring appear active while increasing analyst effort.",
  },
  {
    metric: "Source-health coverage",
    meaning:
      "How consistently critical sources expose health, freshness, delay, and blind-state evidence.",
    caution:
      "Event coverage without source-health coverage can create false confidence.",
  },
  {
    metric: "Time to useful context",
    meaning:
      "How quickly an alert gains the identity, change, asset, service, or owner context needed for a decision.",
    caution:
      "Fast alert generation is less valuable if analysts must manually reconstruct basic context.",
  },
  {
    metric: "Reopen rate",
    meaning:
      "How often a closed alert or case must be reopened because important evidence or context was missing.",
    caution:
      "A low reopen rate may be misleading if closure quality is not reviewed.",
  },
  {
    metric: "Validation coverage",
    meaning:
      "How many expected, unexpected, boundary, degraded-source, and recovery cases are represented in safe testing.",
    caution:
      "A detection tested only on the easiest positive case is not well validated.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest starting point for the A20 detection and monitoring phase?",
    choices: [
      "Choose the largest available log source.",
      "Define the defensive question and decision the monitoring must support.",
      "Create as many alerts as possible.",
      "Assume every architecture threat needs automatic blocking.",
    ],
    answer: 1,
    explanation:
      "Detection begins with a decision need. Telemetry and alert logic should exist because they help answer a useful defensive question.",
  },
  {
    question:
      "A central collector is delayed during the case window. What does this change?",
    choices: [
      "It proves the producing sources failed.",
      "It lowers confidence in claims based on missing centrally collected events until backlog and recovery are understood.",
      "It proves malicious interference.",
      "It makes all earlier evidence invalid.",
    ],
    answer: 1,
    explanation:
      "Collector delay affects visibility and negative evidence. It does not automatically prove source failure or malicious cause.",
  },
  {
    question:
      "What is the difference between severity and confidence?",
    choices: [
      "Severity describes potential consequence; confidence describes how strongly evidence supports the interpretation.",
      "Severity and confidence are the same.",
      "Confidence is always higher than severity.",
      "Severity proves incident status.",
    ],
    answer: 0,
    explanation:
      "An event can have high potential impact but only moderate evidentiary confidence.",
  },
  {
    question:
      "Approved maintenance is producing noisy privileged-change alerts. What is the strongest tuning response?",
    choices: [
      "Disable all privileged monitoring.",
      "Raise thresholds until the alerts disappear.",
      "Add reliable approved-maintenance context, preserve risky-condition coverage, validate synthetic cases, and define rollback.",
      "Ignore every event during maintenance windows.",
    ],
    answer: 2,
    explanation:
      "Good tuning addresses the reason for noise while preserving coverage, ownership, validation, and rollback.",
  },
  {
    question:
      "Why should source health be monitored separately from security events?",
    choices: [
      "Because missing events are difficult to interpret when the source itself may be delayed, partial, blind, or recovering.",
      "Because source health replaces security monitoring.",
      "Because healthy sources prove no incident occurred.",
      "Because source health only matters for compliance.",
    ],
    answer: 0,
    explanation:
      "A monitoring system needs evidence about the evidence pipeline itself so defenders understand what presence or absence can support.",
  },
  {
    question:
      "Which metric most directly helps identify repeated alerts describing the same underlying condition?",
    choices: [
      "Duplicate rate",
      "Password length",
      "Backup size",
      "CPU model",
    ],
    answer: 0,
    explanation:
      "Duplicate rate helps show whether alert fan-out is adding evidence or simply increasing analyst workload.",
  },
  {
    question:
      "What is safest for validating A20 detections?",
    choices: [
      "Use synthetic positive, negative, boundary, degraded-source, recovery, and regression records.",
      "Trigger alerts against a public organization.",
      "Use real credentials in a lab account.",
      "Copy production logs into the portfolio.",
    ],
    answer: 0,
    explanation:
      "A20 uses fictional and synthetic evidence to validate defensive reasoning without real-world testing or sensitive data.",
  },
];

const takeaways = [
  "Detection should begin with a defensive question and decision, not with a log source or alert rule.",
  "Telemetry must be understood through provenance, coverage, source health, freshness, timing, privacy, and limitations.",
  "Source health is evidence about evidence; delayed or blind sources reduce what missing events can prove.",
  "Severity describes potential consequence, while confidence describes evidentiary support. Neither alone proves incident status.",
  "Correlation can strengthen context without proving causation.",
  "Good tuning addresses the actual source of noise while preserving useful coverage, degraded-state behavior, validation, ownership, and rollback.",
  "Monitoring quality should be measured through usefulness, duplication, source-health coverage, context speed, reopen rate, and validation coverage—not alert volume alone.",
  "The entire A20 monitoring phase remains fictional, synthetic, defensive, non-operational, and publication-safe.",
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
        Next Lesson
      </Link>
    </div>
  );
}

export default function DetectionMonitoringPhasePage() {
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
              A20.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Detection and Monitoring Phase
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A20.3 identified what matters in the fictional Northbridge
            architecture. A20.4 asks what defenders need to observe, which
            evidence sources can support those questions, how source health
            changes confidence, and how monitoring should be tuned and validated.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The goal is not maximum alert volume. The goal is decision-quality
            evidence: useful signals, clear limitations, source-health awareness,
            bounded confidence, safe validation, measurable outcomes, and
            accountable tuning.
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
          lessonTitle="Detection and Monitoring Phase"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain the main architecture findings from A20.3 and why they create monitoring questions.",
            "I understand that an alert is evidence requiring interpretation, not automatic proof of an incident.",
            "I can distinguish event content from source-health evidence.",
            "I will use only fictional Northbridge telemetry and synthetic validation cases.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Monitoring Is Valuable Only When It Improves a Defensive Decision"
        >
          <p className="leading-8">
            A system can generate thousands of alerts and still leave defenders
            uncertain about what matters. A professional detection program starts
            with a question: what decision should the evidence help someone make?
          </p>

          <p className="mt-4 leading-8">
            In Northbridge, defenders need to understand privileged maintenance,
            source delay, worker-queue degradation, service recovery, and workload
            access evidence. Each question requires different telemetry and
            different confidence limits. The architecture tells us where to look;
            the monitoring design tells us what evidence would be useful.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.4">
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
          eyebrow="Core Teaching"
          title="Eight Detection Concepts Before Any Alert Design"
        >
          <p className="leading-8">
            Detection quality depends on understanding the purpose of monitoring
            before discussing specific rules. These concepts describe how
            professionals move from a defensive question to evidence and then to a
            decision.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {detectionConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.concept}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Northbridge:</span>{" "}
                  {item.northbridge}
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  <span className="font-black">Professional use:</span>{" "}
                  {item.professionalUse}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Defensive Questions"
          title="Start With What Defenders Need to Know"
        >
          <div className="grid gap-5">
            {defensiveQuestions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-purple-50">{item.question}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Why it matters:</span>{" "}
                    {item.why}
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Useful evidence:</span>{" "}
                    {item.evidence}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Limitation:</span>{" "}
                  {item.limitation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Telemetry Review"
          title="Each Source Has a Purpose and a Limit"
        >
          <p className="leading-8">
            Telemetry is useful when its meaning is documented. The same record may
            be strong evidence for one question and weak evidence for another.
            Source-health state must travel with the evidence.
          </p>

          <div className="mt-6 grid gap-5">
            {telemetrySources.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.source}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Important fields
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.keyFields}
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Source health
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.sourceHealth}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supports
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.supports}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Cannot prove
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.cannotProve}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Monitoring Review Board"
          subtitle="Synthetic evidence-quality and detection-readiness snapshot"
          metrics={[
            {
              label: "Defensive questions",
              value: "6",
              note: "Each connects to a real capstone decision",
            },
            {
              label: "Telemetry sources",
              value: "7",
              note: "Identity, application, queue, collector, change, service health, recovery",
            },
            {
              label: "Source-health concern",
              value: "1 major",
              note: "Collector delay affects negative-evidence confidence",
            },
            {
              label: "Detection candidates",
              value: "5",
              note: "Privileged scope, source delay, queue health, recovery, workload access",
            },
          ]}
        />

        <FakeAlertCard
          title="Privileged Change During Partial Visibility"
          severity="High"
          time="09:11"
          source="Synthetic Northbridge Monitoring Queue"
          details="A privileged configuration action is confirmed during approved maintenance, but the central collector is delayed and the exact task-level authorization is not yet linked."
          recommendation="Treat potential impact as High but confidence as Moderate. Preserve the event, correlate approved change context, verify source health, and keep incident status unresolved until stronger evidence supports escalation."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Monitoring Timeline"
          logs={[
            "[09:05] CHG-NB-220 approved maintenance window begins",
            "[09:08] collector ingest lag rises above fictional target",
            "[09:11] privileged configuration action recorded by identity and application sources",
            "[09:13] worker queue oldest-item age rises above expected range",
            "[09:14] portal error rate increases",
            "[09:17] collector still delayed; absence-of-alert claims remain low confidence",
            "[09:21] worker-service restart approved",
            "[09:25] queue latency begins returning toward expected range",
            "[09:29] portal error rate returns to normal range",
            "[09:31] collector backlog processing continues",
            "[09:36] collector marked Recovering; processed-through time still behind current time",
            "[09:41] collector catch-up validation passes for supplied synthetic case window",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — High Severity, Moderate Confidence"
          question="How should the privileged-change alert be interpreted during the collector delay?"
          evidence={[
            "The privileged action itself is confirmed by two synthetic sources.",
            "The action affects a security-relevant configuration category.",
            "Approved maintenance is active.",
            "The exact task-level authorization is not yet linked.",
            "The central collector is delayed during part of the relevant period.",
          ]}
          options={[
            "High severity means the event is a confirmed security incident",
            "Potential impact can justify High severity while incomplete context and source delay keep confidence Moderate",
            "Approved maintenance means the event should be ignored",
            "Collector delay proves the event was malicious",
          ]}
          bestAnswer={1}
          explanation="Severity and confidence answer different questions. The event can matter greatly if problematic while evidence remains incomplete about its meaning."
        />

        <Section
          eyebrow="Source Health"
          title="The Monitoring System Must Monitor Its Own Ability to See"
        >
          <p className="leading-8">
            A missing alert is not strong evidence when the system that should have
            produced or collected the alert is delayed, partial, blind, conflicting,
            or still recovering. Source health therefore belongs beside event
            evidence, not in a separate operational dashboard that analysts ignore.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {sourceHealthStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.state}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Decision effect:</span>{" "}
                  {item.decisionEffect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Alert Interpretation"
          title="Six Dimensions Before You Escalate a Signal"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {alertReviewModel.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.question}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Northbridge example:</span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Detection Candidates"
          title="Five Monitoring Ideas Derived From the Architecture"
        >
          <p className="leading-8">
            These are not operational rules for a real environment. They are
            provider-neutral defensive design records showing how architecture and
            case questions become monitoring objectives and safe validation plans.
          </p>

          <div className="mt-6 grid gap-5">
            {detectionCandidates.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-purple-50">{item.title}</h3>
                </div>
                <p className="mt-4 leading-7 text-purple-100">
                  <span className="font-black">Objective:</span>{" "}
                  {item.objective}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Sources:</span> {item.sources}
                  </div>
                  <div className="rounded-xl border border-yellow-300/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Severity:</span>{" "}
                    {item.initialSeverity}
                    <br />
                    <span className="font-black">Confidence:</span>{" "}
                    {item.initialConfidence}
                  </div>
                  <div className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Safe validation:</span>{" "}
                    {item.safeValidation}
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Owner:</span> {item.owner}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — No Alert During a Delay"
          question="A reviewer says no additional privileged activity occurred between 09:12 and 09:16 because no central alert is visible. What is the strongest response?"
          evidence={[
            "The collector was delayed during the same period.",
            "Processed-through time lagged behind current time.",
            "The producing identity source itself was still operating.",
            "The central alert view had incomplete near-real-time coverage.",
          ]}
          options={[
            "Agree; no alert proves no activity occurred",
            "Treat the central absence as weak negative evidence until backlog recovery is validated and use other supplied sources where appropriate",
            "Assume the collector was deliberately disabled",
            "Delete the monitoring data from the case",
          ]}
          bestAnswer={1}
          explanation="Central visibility was incomplete. The correct response is to bound confidence and preserve the question until source recovery and other evidence clarify the period."
        />

        <Section
          eyebrow="Tuning and Validation"
          title="Better Detection Is Not the Same as Fewer Alerts"
        >
          <p className="leading-8">
            Tuning should improve decision usefulness. If a detection is noisy,
            first identify why. The answer may be missing maintenance context,
            duplicate fan-out, stale ownership, weak source health, broad logic, or
            poor enrichment. The fix should target the reason without hiding the
            original risk.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {tuningPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.principle}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Measurement"
          title="Measure Whether Monitoring Helps Defenders"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {metrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.metric}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Caution:</span> {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Monitoring Mistakes"
          title="What Weakens Detection Quality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Starting from available logs instead of a decision",
                detail:
                  "Data availability should not define the entire detection strategy. Begin with the security question.",
              },
              {
                title: "Treating alerts as incidents",
                detail:
                  "An alert is a signal that may justify triage. Incident status requires governed evidence and criteria.",
              },
              {
                title: "Ignoring source health",
                detail:
                  "Missing events cannot be interpreted confidently when the source is delayed, partial, blind, or recovering.",
              },
              {
                title: "Equating severity with confidence",
                detail:
                  "Potential impact and evidentiary certainty should be evaluated separately.",
              },
              {
                title: "Suppressing noise without ownership",
                detail:
                  "Temporary suppressions should be visible, time-bounded, reviewed, and linked to the original detection problem.",
              },
              {
                title: "Measuring volume instead of usefulness",
                detail:
                  "More alerts can increase work without improving decisions. Measure context, duplication, usefulness, validation, and source health.",
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
          title="Build the Detection and Monitoring Review"
        >
          <p className="leading-8">
            Use only the fictional Northbridge records supplied in A20.2–A20.4.
            The lab is a design and evidence-review exercise. It does not require a
            real SIEM, cloud tenant, endpoint, network, or security tool.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Define five defensive questions",
                detail:
                  "Use architecture findings to state what a defender needs to know and why the answer affects a decision.",
              },
              {
                title: "Task 2 — Build the telemetry map",
                detail:
                  "For each question, identify synthetic sources, key fields, source owner, source health, and what the source cannot prove.",
              },
              {
                title: "Task 3 — Design detection candidates",
                detail:
                  "Create at least four provider-neutral detection records with objective, evidence, severity, confidence, owner, and decision path.",
              },
              {
                title: "Task 4 — Define degraded-source behavior",
                detail:
                  "Explain what each important detection should do when a required source is delayed, partial, blind, conflicting, or recovering.",
              },
              {
                title: "Task 5 — Create safe validation cases",
                detail:
                  "Use synthetic positive, negative, maintenance, boundary, duplicate, source-degraded, recovery, and regression scenarios.",
              },
              {
                title: "Task 6 — Define monitoring metrics",
                detail:
                  "Choose measures such as usefulness, duplicates, source-health coverage, context speed, reopen rate, and validation coverage.",
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
          title="Scenario Decision 1 — Approved Maintenance Creates Noise"
          scenario="The privileged-change detection repeatedly alerts during approved maintenance because the alert does not include change-ticket context."
          choices={[
            {
              label: "Choice A",
              response:
                "Add reliable maintenance context, preserve detection of out-of-scope privileged actions, validate synthetic maintenance and non-maintenance cases, and define rollback if coverage degrades.",
              outcome:
                "Best tuning decision. It addresses the source of noise while preserving the original defensive objective.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable privileged-change monitoring during every maintenance window.",
              outcome:
                "Risky. Broad suppression can hide activity that does not match approved scope.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Increase the threshold until almost no events alert.",
              outcome:
                "Caution. This may reduce visible noise without fixing missing context or preserving meaningful coverage.",
              tone: "caution",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Collector Is Recovering"
          scenario="The collector starts processing again after a backlog, but processed-through time still trails current time by several minutes."
          choices={[
            {
              label: "Choice A",
              response:
                "Mark the source Recovering, preserve reduced confidence for the backlog period, and restore normal trust only after catch-up and completeness are validated.",
              outcome:
                "Best decision. Recovery should be evidenced rather than assumed from one green status.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark the source Healthy immediately because records are arriving again.",
              outcome:
                "Caution. Processing resumed, but completeness and timing are not yet fully validated.",
              tone: "caution",
            },
            {
              label: "Choice C",
              response:
                "Treat all delayed events as malicious because they arrived late.",
              outcome:
                "Risky. Late arrival is an evidence-pipeline condition, not proof of malicious activity.",
              tone: "risk",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Review One Alert Through Four Defensive Lenses"
        >
          <p className="leading-8">
            Use the fictional privileged-change alert and explain how four roles
            would interpret the same evidence without changing the underlying facts.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Detection Engineer",
                detail:
                  "Focus on alert objective, source health, enrichment, confidence, duplicates, validation, and tuning debt.",
              },
              {
                title: "Incident Responder",
                detail:
                  "Focus on what is confirmed, what remains uncertain, immediate triage, evidence preservation, and escalation criteria.",
              },
              {
                title: "Identity / Cloud Reviewer",
                detail:
                  "Focus on privileged-role purpose, approved scope, workload relationships, access lifecycle, and governance evidence.",
              },
              {
                title: "Risk / Executive Reviewer",
                detail:
                  "Focus on potential impact, confidence, service effect, owner decision, residual risk, and next checkpoint.",
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
          title="Detection and Monitoring Phase Checklist"
          items={[
            "I can begin with a defensive question instead of starting with a log source.",
            "I can identify which architecture findings deserve monitoring and why.",
            "I can document telemetry purpose, key fields, provenance, source health, freshness, and limitations.",
            "I can explain Healthy, Delayed, Partial, Blind, Conflicting, and Recovering source states.",
            "I can distinguish alert observation, context, severity, confidence, priority, and incident status.",
            "I can correlate records without claiming unsupported causation.",
            "I can design provider-neutral detection candidates tied to defensive decisions.",
            "I can define degraded-source behavior instead of assuming all sources are always healthy.",
            "I can tune the cause of noise while preserving useful coverage.",
            "I can document temporary suppressions, ownership, observation periods, and rollback.",
            "I can measure usefulness, duplication, source-health coverage, context speed, reopen rate, and validation coverage.",
            "I can validate with fictional synthetic records only.",
            "I can preserve privacy purpose, minimization, access, and retention in monitoring design.",
            "I will not probe, scan, exploit, monitor, or collect data from real systems for this capstone.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.4 Knowledge Check">
          <MiniQuiz
            title="A20.4 Mini Quiz: Detection and Monitoring Phase"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Detection and Monitoring Review"
          prompt="Create a fictional Northbridge Detection and Monitoring Review. Include at least five defensive questions, the architecture finding or risk each question supports, a telemetry map, source purpose, provenance, key fields, source owners, source-health states, freshness, limitations, what each source supports, what each source cannot prove, at least four provider-neutral detection candidates, severity, confidence, decision path, degraded-source behavior, maintenance context, duplicate handling, synthetic validation cases, tuning decisions, suppression debt, observation windows, rollback criteria, monitoring metrics, privacy purpose, minimization, retention considerations, unresolved evidence questions, and a short handoff explaining what A20.5 incident response should preserve."
          tips={[
            "Begin with the defensive decision, then choose evidence.",
            "Keep source health beside the event evidence that depends on it.",
            "Separate severity from confidence and both from incident status.",
            "Treat maintenance as context, not automatic permission for every event.",
            "Use synthetic validation for positive, negative, boundary, degraded-source, recovery, and regression cases.",
            "Measure usefulness and evidence quality rather than raw alert volume.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.5?"
        >
          <p className="leading-8">
            A20.5 moves into Incident Response Phase. Before continuing, make sure
            the monitoring review gives responders enough context to distinguish
            confirmed evidence from alert interpretation.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain which Northbridge alerts are observations and which conclusions remain hypotheses.",
              "I can identify where collector delay lowers confidence in missing-event conclusions.",
              "I can explain why the privileged event has meaningful potential impact without calling it a confirmed incident.",
              "I can describe which queue, service-health, change, and recovery evidence should enter the incident timeline.",
              "I can hand A20.5 a monitoring review that preserves uncertainty, owners, source health, and decision triggers.",
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
          title="Make the Monitoring Review Traceable Through the Rest of A20"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable detection IDs",
                detail:
                  "Give each monitoring objective and source-health finding an ID that later incident and risk artifacts can reference.",
              },
              {
                title: "Version tuning changes",
                detail:
                  "Record why a detection changed, the expected effect, validation evidence, observation period, and rollback condition.",
              },
              {
                title: "Preserve source-health history",
                detail:
                  "Do not rewrite the collector as Healthy for the whole case just because it eventually recovered.",
              },
              {
                title: "Link alerts to decisions",
                detail:
                  "Every important signal should identify the question and decision it is intended to support.",
              },
              {
                title: "Keep severity and confidence separate",
                detail:
                  "This makes later incident and executive communication more accurate.",
              },
              {
                title: "Carry unresolved questions forward",
                detail:
                  "Task-level authorization, workload scope, complete recovery, and causation remain later review items.",
              },
              {
                title: "Add privacy notes",
                detail:
                  "State why telemetry is needed and avoid unnecessary collection or retention in the fictional design.",
              },
              {
                title: "Maintain publication safety",
                detail:
                  "All logs, identities, alert logic descriptions, source names, addresses, and records must remain fictional and non-operational.",
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
            Monitoring design stays fictional, defensive, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Use only the synthetic Northbridge evidence provided in CyberShield
            Academy. Do not monitor real users, collect real logs, access security
            platforms, scan networks, probe applications, test credentials,
            exploit systems, evade monitoring, trigger live detections, or inspect
            private cloud environments. Validation must use harmless invented
            records and fictional expected outcomes.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.4 Detection and Monitoring Phase Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The capstone now has defensive questions, telemetry requirements,
            source-health states, alert interpretation, detection candidates,
            tuning principles, safe validation, and monitoring metrics. Next,
            A20.5 uses that evidence to make bounded incident-response decisions.
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