import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/advanced/advanced-defensive-labs";
const lessonTenPath = `${modulePath}/advanced-lab-challenge`;
const advancedPath = "/high-school/advanced";

const questions = [
  {
    question:
      "A fictional alert, service-health record, ownership record, and change ticket point in different directions. What is the strongest first analytical move?",
    choices: [
      "Choose the alert because alerts are always the most important source.",
      "Separate observations from interpretations, note source freshness, and build more than one evidence-supported hypothesis.",
      "Assume the maintenance ticket explains every unusual event.",
      "Ignore any source that creates uncertainty.",
    ],
    answer: 1,
    explanation:
      "Multi-source investigation begins by preserving what each source actually shows, checking freshness and provenance, and keeping competing explanations visible until evidence supports a bounded conclusion.",
  },
  {
    question:
      "Which statement is an interpretation rather than a direct observation?",
    choices: [
      "The fictional service-health record shows degraded response time at 14:08.",
      "The ticket was opened at 14:16.",
      "The service identity was definitely misused because an unusual event occurred.",
      "The change record lists an approved maintenance window from 14:00 to 15:00.",
    ],
    answer: 2,
    explanation:
      "A claim of definite misuse goes beyond the records described. Observations report what evidence shows; interpretations explain what those observations may mean and therefore need supporting evidence and confidence language.",
  },
  {
    question:
      "Why should investigators normalize timestamps before comparing fictional records from several systems?",
    choices: [
      "To make every event appear simultaneous.",
      "To remove conflicting records from the case.",
      "To convert every record into the analyst-note time.",
      "To compare sequence more fairly when sources use different clocks, offsets, or collection delays.",
    ],
    answer: 3,
    explanation:
      "Timestamp normalization helps compare events that may use different time references. It does not erase uncertainty, clock offsets, or delayed collection.",
  },
  {
    question:
      "What is the strongest way to review a fictional defensive architecture?",
    choices: [
      "Treat it as a dependency and trust-boundary review, including identity, logging, management, external services, and degraded modes.",
      "Count how many security products appear in the diagram.",
      "Assume every internal zone is trusted equally.",
      "Focus only on internet-facing systems.",
    ],
    answer: 0,
    explanation:
      "Architecture review is fundamentally about dependencies, trust boundaries, ownership, resilience, and the effect of failures—not merely product count or internet exposure.",
  },
  {
    question:
      "A monitoring platform is the only place several critical services send security telemetry. What is the most important defensive concern?",
    choices: [
      "The platform uses a different icon on the diagram.",
      "Monitoring concentration may create a resilience dependency that could reduce visibility during failure.",
      "Every service should be placed in one network zone instead.",
      "The architecture should remove all logging.",
    ],
    answer: 1,
    explanation:
      "Concentrated monitoring can create a meaningful dependency. The review should consider resilience, degraded visibility, alternate evidence, and recovery rather than assuming centralization is automatically wrong.",
  },
  {
    question:
      "A fictional cloud storage service is intentionally public for a customer-facing purpose. Which conclusion is strongest?",
    choices: [
      "Public reachability is automatically insecure.",
      "Public reachability never matters if the service has an owner.",
      "Review whether the exposure is intentional, bounded, monitored, owned, correctly classified, and consistent with the architecture.",
      "Disable every public cloud service regardless of business purpose.",
    ],
    answer: 2,
    explanation:
      "Public reachability is a condition that requires context. Defensive review considers purpose, data classification, boundaries, monitoring, ownership, and architecture rather than relying on one label.",
  },
  {
    question:
      "Why is a safe-looking cloud configuration not enough by itself to prove strong governance?",
    choices: [
      "Governance evidence such as classification, ownership, review freshness, exceptions, and recovery validation may still be stale or incomplete.",
      "Technical configuration never matters.",
      "Cloud systems cannot be governed.",
      "Only the provider is responsible for security.",
    ],
    answer: 0,
    explanation:
      "Technical state and governance evidence are related but different. A configuration can look appropriate while review, classification, ownership, or exception evidence is outdated.",
  },
  {
    question:
      "An external collaborator has an unusual but current permission with a documented business need, current sponsor, and valid review. What is the strongest decision?",
    choices: [
      "Remove it because unusual access is always wrong.",
      "Retain it if the scope remains appropriate and the evidence supports current justification.",
      "Escalate only because the user is external.",
      "Remove it because frequent review proves the access is risky.",
    ],
    answer: 1,
    explanation:
      "Unusual access is not automatically unjustified. Access-review decisions should rely on current business purpose, scope, ownership, approval, separation of duties, and review evidence.",
  },
  {
    question:
      "What does frequent use of a privileged entitlement prove most directly?",
    choices: [
      "That the entitlement should never expire.",
      "That the user is trustworthy.",
      "That the access is automatically least privilege.",
      "That the entitlement is active, not that its business justification is still valid.",
    ],
    answer: 3,
    explanation:
      "Activity proves use, not continuing justification. A review still needs purpose, owner, scope, approval authority, separation of duties, and current need.",
  },
  {
    question:
      "During a fictional incident tabletop, later evidence weakens an early misuse hypothesis. How should the record handle the earlier decision?",
    choices: [
      "Delete the earlier decision so the timeline looks cleaner.",
      "Rewrite the earlier decision as if the later evidence was already known.",
      "Preserve the earlier decision with the evidence available at that time, then record the later reassessment separately.",
      "Keep the original hypothesis at the same confidence forever.",
    ],
    answer: 2,
    explanation:
      "Incident records should preserve decision context over time. Later evidence can change confidence and action without rewriting what was known earlier.",
  },
  {
    question:
      "Which communication pattern is strongest during a fictional incident tabletop?",
    choices: [
      "Separate confirmed facts, hypotheses, impact, decisions, unresolved questions, and the next checkpoint.",
      "Report only the most alarming possibility.",
      "Hide uncertainty until the investigation is complete.",
      "Send raw logs without interpretation to leadership.",
    ],
    answer: 0,
    explanation:
      "Clear incident communication distinguishes evidence states and tells the audience what is known, what remains uncertain, what has been decided, and when the next reassessment will occur.",
  },
  {
    question:
      "Which condition best supports a recovery-readiness decision in the A18 tabletop model?",
    choices: [
      "The incident has been open for a long time.",
      "Service stability, healthy telemetry, owner confirmation, bounded unresolved hypotheses, and validation evidence meet explicit criteria.",
      "One analyst believes the service is probably fine.",
      "The most severe alert has disappeared from the dashboard.",
    ],
    answer: 1,
    explanation:
      "Recovery should use explicit evidence-based criteria rather than time elapsed, a single alert, or one person's confidence.",
  },
  {
    question:
      "A fictional detection produces many alerts, but most are duplicate fan-out from the same small set of cases. What is the strongest tuning direction?",
    choices: [
      "Disable the detection entirely.",
      "Raise every threshold until the alert count is small.",
      "Improve deduplication or correlation while preserving useful defensive coverage.",
      "Automatically close every repeated alert.",
    ],
    answer: 2,
    explanation:
      "The source of noise should be addressed directly. Duplicate fan-out suggests correlation or deduplication improvement rather than removing useful coverage.",
  },
  {
    question:
      "Why is lower alert volume not enough to prove a successful tuning change?",
    choices: [
      "Because quality, evidence completeness, escalation value, reopen rate, missed-context signals, and analyst usefulness may have become worse.",
      "Because alert count should always increase.",
      "Because tuning should never change a detection.",
      "Because only severity labels matter.",
    ],
    answer: 0,
    explanation:
      "Detection quality is multidimensional. Lower volume can be useful, but only if important defensive value and evidence quality are preserved.",
  },
  {
    question:
      "What is the purpose of a rollback criterion in detection tuning?",
    choices: [
      "To guarantee the original detection was perfect.",
      "To define when evidence shows the change should be reversed or paused because quality or coverage degraded.",
      "To hide failed experiments from reviewers.",
      "To remove the need for post-change monitoring.",
    ],
    answer: 1,
    explanation:
      "Rollback criteria make tuning controlled and reversible. They define the evidence that should trigger a pause or return to a safer known state.",
  },
  {
    question:
      "Which statement best follows the A18 risk-statement model?",
    choices: [
      "Monitoring is bad.",
      "The service is high risk because it is important.",
      "Because several critical telemetry sources depend on one monitoring component, a platform failure could reduce evidence collection and analyst visibility during an important event.",
      "Every shared dependency will fail.",
    ],
    answer: 2,
    explanation:
      "A strong risk statement connects a condition, a plausible event, and a consequence without claiming certainty that the event will occur.",
  },
  {
    question:
      "What is the difference between inherent risk and residual risk?",
    choices: [
      "Inherent risk is before controls; residual risk is what remains after controls are considered.",
      "Inherent risk is always low; residual risk is always high.",
      "Inherent risk applies only to cloud systems.",
      "Residual risk means the risk has been eliminated.",
    ],
    answer: 0,
    explanation:
      "Inherent risk describes exposure before controls, while residual risk reflects the remaining exposure after control effectiveness is considered.",
  },
  {
    question:
      "Which condition is required for responsible risk acceptance?",
    choices: [
      "The analyst prefers not to remediate the risk.",
      "The risk has existed for a long time.",
      "The issue is difficult to explain.",
      "An authorized owner understands the residual risk, records rationale and boundaries, and defines a review date or trigger.",
    ],
    answer: 3,
    explanation:
      "Risk acceptance is a governance decision. It requires authority, understood residual risk, explicit rationale, boundaries, and future review.",
  },
  {
    question:
      "Why is a forensic timeline more than a sorted list of timestamps?",
    choices: [
      "Because every timestamp should be replaced with analyst-note time.",
      "Because the timeline must account for provenance, clock differences, collection delay, confidence, contradictions, gaps, and event relationships.",
      "Because timestamps are usually unnecessary.",
      "Because the newest record should always be treated as the cause.",
    ],
    answer: 1,
    explanation:
      "A defensible timeline explains what each time means, where the record came from, how reliable it is, and what can or cannot be concluded from sequence.",
  },
  {
    question:
      "A log event occurred at 09:02, was collected at 09:07, and an analyst wrote a note about it at 09:18. Which time best represents the source event itself?",
    choices: [
      "09:18, because analyst notes are always authoritative.",
      "09:07, because collection time replaces event time.",
      "09:02, while the other times remain important for provenance and workflow context.",
      "All three times should be silently changed to one value.",
    ],
    answer: 2,
    explanation:
      "Source event time describes when the recorded event occurred. Collection and analyst-note times remain useful because they show when evidence arrived and when it was interpreted.",
  },
  {
    question:
      "Two fictional records occur close together in time. What is the strongest conclusion from sequence alone?",
    choices: [
      "The first event caused the second.",
      "The events are automatically part of one incident.",
      "The later event is less trustworthy.",
      "The sequence may support correlation, but causation requires additional evidence.",
    ],
    answer: 3,
    explanation:
      "Temporal sequence can support a relationship hypothesis, but it does not by itself prove causation.",
  },
  {
    question:
      "What should an executive security summary emphasize most?",
    choices: [
      "Every raw log line and technical timestamp.",
      "Business meaning, material impact or risk, confirmed facts, important uncertainty, the decision needed, owner, recommendation, confidence, and next checkpoint.",
      "Only the highest severity label.",
      "A long list of every tool involved in the case.",
    ],
    answer: 1,
    explanation:
      "Executive communication compresses evidence into decision-relevant meaning without hiding uncertainty or inventing certainty.",
  },
  {
    question:
      "A severe technical alert had no confirmed customer or service impact. How should an executive summary describe it?",
    choices: [
      "State that severe technical priority and business impact are separate, and report only the impact supported by evidence.",
      "Claim a major business outage because the severity label is high.",
      "Remove the alert from the summary because impact is uncertain.",
      "Describe a root cause even if only correlation exists.",
    ],
    answer: 0,
    explanation:
      "Severity and material business impact are related but not identical. Leadership communication should preserve the distinction and avoid unsupported claims.",
  },
  {
    question:
      "In the A18 capstone, several artifacts disagree about ownership and timing. What is the strongest integrated response?",
    choices: [
      "Choose one artifact as the official truth and discard the others.",
      "Keep the disagreement visible, reconcile what can be reconciled through provenance and freshness, and carry unresolved conflict into findings and decisions.",
      "Assume the newest artifact is automatically correct.",
      "Delay every decision until all uncertainty disappears.",
    ],
    answer: 1,
    explanation:
      "Integrated defensive reasoning preserves conflicts, uses source quality and freshness to resolve what can be resolved, and clearly documents what remains uncertain.",
  },
  {
    question:
      "What is the strongest final outcome of the A18 Advanced Defensive Casebook and Executive Review?",
    choices: [
      "A collection of disconnected artifacts with no shared conclusion.",
      "A technical report that hides uncertainty from leadership.",
      "A defensible case package that connects evidence, findings, risks, decisions, owners, priorities, a phased improvement roadmap, and an evidence-bounded executive conclusion.",
      "A real-world incident-response playbook for changing production systems.",
    ],
    answer: 2,
    explanation:
      "The capstone demonstrates integrated professional judgment: evidence is preserved, uncertainty remains visible, priorities are owned, and leadership receives a bounded decision-ready conclusion.",
  },
];

const coverage = [
  {
    range: "Questions 1–3",
    area: "A18.1 Multi-Source Alert Investigation",
    review:
      "Evidence vs interpretation, source freshness, competing hypotheses, correlation, and timestamp normalization.",
  },
  {
    range: "Questions 4–5",
    area: "A18.2 Network Defense Architecture Review",
    review:
      "Trust boundaries, dependencies, monitoring concentration, resilience, and degraded visibility.",
  },
  {
    range: "Questions 6–7",
    area: "A18.3 Cloud Security Review Case",
    review:
      "Intentional exposure, shared responsibility, classification, ownership, governance evidence, and recovery context.",
  },
  {
    range: "Questions 8–9",
    area: "A18.4 Identity Access Review Case",
    review:
      "Current justification, least privilege, external access, stale entitlements, activity evidence, and access decisions.",
  },
  {
    range: "Questions 10–12",
    area: "A18.5 Incident Response Tabletop Case",
    review:
      "Decision history, reassessment, communication, ownership, business impact, and recovery criteria.",
  },
  {
    range: "Questions 13–15",
    area: "A18.6 Detection Tuning Case",
    review:
      "Noise sources, signal quality, deduplication, balanced metrics, monitoring windows, and rollback.",
  },
  {
    range: "Questions 16–18",
    area: "A18.7 Risk Register Case",
    review:
      "Condition-event-consequence statements, inherent and residual risk, control effectiveness, treatment, and acceptance.",
  },
  {
    range: "Questions 19–21",
    area: "A18.8 Forensics Timeline Case",
    review:
      "Event time, collection time, provenance, clock uncertainty, contradictions, sequence, correlation, and causation.",
  },
  {
    range: "Questions 22–23",
    area: "A18.9 Executive Summary Writing",
    review:
      "Materiality, audience, business impact, evidence compression, uncertainty, recommendations, and decision needs.",
  },
  {
    range: "Questions 24–25",
    area: "A18.10 Advanced Lab Challenge",
    review:
      "Cross-artifact reasoning, conflict reconciliation, ownership, priorities, roadmap, and final executive conclusion.",
  },
];

const reviewMap = [
  {
    signal: "Missed multi-source investigation questions",
    lesson:
      "Review A18.1 and focus on observation vs interpretation, freshness, contradiction, competing hypotheses, source attribution, and bounded conclusions.",
  },
  {
    signal: "Missed architecture questions",
    lesson:
      "Review A18.2 and focus on trust boundaries, dependencies, management and monitoring concentration, resilience, degraded modes, and ownership.",
  },
  {
    signal: "Missed cloud review questions",
    lesson:
      "Review A18.3 and focus on intentional exposure, shared responsibility, identity, classification, logging, recovery, architecture freshness, and governance evidence.",
  },
  {
    signal: "Missed identity questions",
    lesson:
      "Review A18.4 and focus on current justification, least privilege, approval evidence, service and privileged identities, external access, and stale entitlements.",
  },
  {
    signal: "Missed incident-response questions",
    lesson:
      "Review A18.5 and focus on facts vs hypotheses, decision ownership, decisions at the time, communication, reassessment triggers, and recovery criteria.",
  },
  {
    signal: "Missed detection-tuning questions",
    lesson:
      "Review A18.6 and focus on the true source of noise, duplicate fan-out, maintenance context, enrichment, usefulness, reopen rate, monitoring windows, and rollback.",
  },
  {
    signal: "Missed risk questions",
    lesson:
      "Review A18.7 and focus on risk statements, likelihood, impact, control effectiveness, inherent vs residual risk, treatment, owners, and review triggers.",
  },
  {
    signal: "Missed forensic-timeline questions",
    lesson:
      "Review A18.8 and focus on event vs collection time, clock offset, provenance, gaps, contradictions, confidence, correlation, and causation.",
  },
  {
    signal: "Missed executive-summary questions",
    lesson:
      "Review A18.9 and focus on audience, materiality, business impact, confirmed facts, uncertainty, decision needs, recommendations, and next checkpoints.",
  },
  {
    signal: "Missed integrated-capstone questions",
    lesson:
      "Review A18.10 and focus on cross-artifact evidence, unresolved conflict, findings, risks, decisions, priorities, ownership, phased improvement, and leadership communication.",
  },
];

const performanceGuide = [
  {
    score: "23–25 correct",
    meaning:
      "Excellent readiness. You can connect evidence, architecture, identity, response, tuning, risk, timelines, and executive communication into one defensible review.",
  },
  {
    score: "20–22 correct",
    meaning:
      "Strong readiness. Review the few missed domains, then confirm you can explain why the strongest answer is evidence-bounded.",
  },
  {
    score: "17–19 correct",
    meaning:
      "Developing readiness. Use the targeted review map to revisit the lessons where your reasoning was weakest.",
  },
  {
    score: "13–16 correct",
    meaning:
      "Partial readiness. Revisit the connected A18 artifacts and practice separating facts, interpretations, risks, decisions, and unresolved questions.",
  },
  {
    score: "0–12 correct",
    meaning:
      "Foundation review needed. Work back through A18.1–A18.10 and rebuild the evidence reasoning behind each defensive decision.",
  },
];

const checklistItems = [
  "I can separate observation, interpretation, hypothesis, contradiction, and unanswered questions.",
  "I can compare evidence from multiple fictional sources using provenance, freshness, timestamps, and confidence.",
  "I can review architecture through trust boundaries, dependencies, ownership, monitoring, and resilience.",
  "I can distinguish cloud technical state from governance evidence.",
  "I can evaluate identity access using current business justification rather than appearance or activity alone.",
  "I can preserve incident decisions according to the evidence available at the time.",
  "I can explain recovery readiness using explicit validation criteria.",
  "I can tune detections without treating lower alert volume as the only success measure.",
  "I can explain why monitoring windows and rollback criteria matter after tuning.",
  "I can write condition-event-consequence risk statements.",
  "I can distinguish inherent risk, control effectiveness, residual risk, and risk treatment.",
  "I can build a forensic timeline that preserves provenance, uncertainty, contradictions, and gaps.",
  "I can explain why sequence and correlation do not automatically prove causation.",
  "I can tailor the same evidence for technical, manager, and executive audiences.",
  "I can integrate A18 evidence into a bounded defensive conclusion with owners, priorities, decisions, and unresolved questions.",
];

const takeaways = [
  "Professional defensive judgment begins by separating what the evidence shows from what the analyst thinks it may mean.",
  "Architecture, cloud, identity, and workflow reviews are strongest when they expose dependencies, ownership, freshness, exceptions, and degraded modes.",
  "Incident decisions should preserve the evidence available at the time and change transparently when later evidence changes confidence.",
  "Detection tuning should improve quality at the real source of noise while preserving useful defensive coverage and rollback options.",
  "Risk decisions require clear statements, effective-control review, residual-risk understanding, authorized ownership, and review triggers.",
  "Forensic timelines require provenance, time normalization, uncertainty, contradictions, and gaps—not just chronological sorting.",
  "Executive summaries should communicate material business meaning and decision needs without exaggerating severity or hiding uncertainty.",
  "The A18 capstone connects evidence, findings, risks, decisions, ownership, priorities, and leadership communication into one defensible casebook.",
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

export default function A18ModuleTestPage() {
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
              A18 Module Test
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Defensive Labs
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A18 Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment checks your ability to reason across the
            full A18 defensive case workflow: multi-source evidence, architecture,
            cloud, identity, incident response, detection tuning, risk, forensic
            timelines, executive communication, and integrated case judgment.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All scenarios and records are fictional, synthetic, inert, defensive,
            and school-appropriate. No real systems, accounts, credentials,
            devices, networks, or private data are required.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Back to A18.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Module A18
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have reviewed A18.1 through A18.10.",
            "I can separate evidence from interpretation and preserve uncertainty when the record is incomplete.",
            "I am ready to reason across technical, operational, governance, risk, timeline, and communication evidence together.",
            "I will choose the most defensible evidence-bounded answer rather than the most dramatic conclusion.",
          ]}
        />

        <Section
          eyebrow="Assessment Coverage"
          title="What the 25 Questions Measure"
        >
          <div className="grid gap-4">
            {coverage.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.range}
                  </span>
                  <h3 className="font-black text-blue-50">{item.area}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
            25-Question Assessment
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A18 Advanced Defensive Labs
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
            Work through all 25 questions. Use the existing quiz controls to
            reveal answers and explanations only when you are ready to check
            your reasoning.
          </p>

          <div className="mt-8">
            <MiniQuiz
              title="A18 Module Test: Advanced Defensive Labs"
              questions={questions}
            />
          </div>
        </section>

        <Section
          eyebrow="Performance Guide"
          title="How to Interpret Your Result"
        >
          <div className="grid gap-4">
            {performanceGuide.map((item) => (
              <article
                key={item.score}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.score}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Targeted Review Map"
          title="What to Review If You Missed a Topic"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewMap.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A18 Module Mastery Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Keep every A18 case fictional, synthetic, defensive, and evidence-bounded
          </h2>
          <p className="mt-3 leading-7">
            A18 evaluates professional defensive reasoning using supplied fictional
            evidence. It does not authorize real forensic acquisition, account or
            device access, password bypass, scanning, probing, credential attacks,
            control bypass, evasion, real containment, destructive changes, private
            data access, or modifications to real cloud, endpoint, or network systems.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            A18 Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Advanced Defensive Labs Module Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            After reviewing your results, return to any lesson that needs
            reinforcement. When your reasoning is solid, your final A18 portfolio
            outcome is the Advanced Defensive Casebook and Executive Review.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Review A18.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              A18 Module Home
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}