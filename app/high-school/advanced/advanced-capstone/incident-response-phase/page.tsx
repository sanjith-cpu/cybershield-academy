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
const previousLesson = `${modulePath}/detection-and-monitoring-phase`;
const nextLesson = `${modulePath}/cloud-and-identity-review-phase`;

const objectives = [
  "Explain how incident response turns imperfect evidence into proportional, reversible, and accountable defensive decisions without overstating certainty.",
  "Separate facts, hypotheses, impact, scope, priority, containment rationale, recovery evidence, and unresolved questions throughout the response lifecycle.",
  "Use source health, architecture, identity, change, service-health, and monitoring evidence together when deciding whether to escalate, contain, monitor, or recover.",
  "Define recovery criteria and reassessment triggers that prove more than simple service availability and preserve residual uncertainty after immediate stabilization.",
  "Create an Incident Response Decision Record that captures what was known, what was decided, why the decision was justified, who owned it, and what evidence could change it.",
];

const responseConcepts = [
  {
    concept: "Triage",
    meaning:
      "Rapidly determine what the current evidence actually shows, what may matter most, and what requires deeper review.",
    northbridge:
      "The privileged action, portal errors, queue degradation, collector delay, and approved maintenance must be reviewed together rather than ranked by one alert color.",
    decisionEffect:
      "Triage sets priority and next evidence needs without pretending the case is already solved.",
  },
  {
    concept: "Scope",
    meaning:
      "Define which fictional services, identities, data, time window, evidence sources, and effects are currently part of the response.",
    northbridge:
      "Portal, identity, worker, queue, monitoring, protected data relationships, and the approved change window are inside the current case.",
    decisionEffect:
      "Scope prevents a local observation from becoming an unsupported claim about the entire environment.",
  },
  {
    concept: "Containment",
    meaning:
      "A bounded defensive action used to reduce immediate risk while preserving service, evidence, reversibility, and ownership where possible.",
    northbridge:
      "A responder may temporarily restrict a specific administrative path only if evidence and business impact justify it.",
    decisionEffect:
      "Containment should match the confidence and potential consequence of the current case.",
  },
  {
    concept: "Decision ownership",
    meaning:
      "The named role with authority to approve a response action, accept residual risk, restore service, or communicate externally.",
    northbridge:
      "Identity owner, application owner, incident lead, recovery owner, and risk owner have different authorities.",
    decisionEffect:
      "A technically reasonable action can still be weak if nobody has authority or accountability for it.",
  },
  {
    concept: "Evidence preservation",
    meaning:
      "Keep the original synthetic case records, source-health context, timestamps, and decision history available for later review.",
    northbridge:
      "Do not rewrite the 09:11 event as approved or unauthorized after later evidence appears; preserve what was known at each decision point.",
    decisionEffect:
      "Preservation supports traceability and prevents hindsight from distorting earlier choices.",
  },
  {
    concept: "Recovery",
    meaning:
      "Return the service to an approved, stable, and sufficiently trusted state using explicit criteria and validation evidence.",
    northbridge:
      "Portal availability returned after worker restart and queue recovery, but broader recovery confidence still depends on monitoring catch-up and selected validation checks.",
    decisionEffect:
      "A service responding once is not enough to prove complete recovery.",
  },
  {
    concept: "Reassessment trigger",
    meaning:
      "A defined condition that should change the response decision, confidence, scope, or escalation level.",
    northbridge:
      "Task-level authorization evidence, a new privileged event, renewed queue degradation, or failed recovery validation could reopen the case.",
    decisionEffect:
      "Triggers make the response adaptable instead of frozen around the first interpretation.",
  },
  {
    concept: "Closure",
    meaning:
      "A governed decision that immediate response work is complete enough, with residual risk, follow-up actions, ownership, and reopen criteria preserved.",
    northbridge:
      "The case should not close merely because portal errors stop.",
    decisionEffect:
      "Closure depends on evidence and governance, not silence or elapsed time.",
  },
];

const timeline = [
  {
    time: "09:05",
    event:
      "Approved synthetic change window begins for identity-policy and worker-service maintenance.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Creates important business context but does not automatically classify every later action as expected.",
  },
  {
    time: "09:08",
    event:
      "Central monitoring collector begins accumulating backlog.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Reduces confidence in missing-alert conclusions during the delayed interval.",
  },
  {
    time: "09:11",
    event:
      "Privileged administrative action is recorded by identity and application evidence.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Potentially important because of authority level and timing; task-level authorization remains unresolved.",
  },
  {
    time: "09:13",
    event:
      "Worker queue latency rises above the fictional expected range.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Adds a plausible operational dependency explanation that must be compared with other hypotheses.",
  },
  {
    time: "09:14",
    event:
      "Portal error rate rises and users experience service degradation.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Establishes real case impact inside the synthetic scenario and increases response priority.",
  },
  {
    time: "09:17",
    event:
      "Collector remains delayed.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Negative monitoring evidence remains weak for the affected period.",
  },
  {
    time: "09:21",
    event:
      "Worker-service restart is approved after queue and application review.",
    state:
      "Confirmed decision",
    responseMeaning:
      "A reversible recovery-oriented action is selected with service-owner approval.",
  },
  {
    time: "09:25",
    event:
      "Queue latency begins returning toward expected range.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Supports recovery progress but does not independently establish root cause.",
  },
  {
    time: "09:29",
    event:
      "Portal errors return to the fictional normal range.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Supports service recovery but still requires observation and evidence validation.",
  },
  {
    time: "09:41",
    event:
      "Collector catch-up validation reaches the end of the relevant synthetic case window.",
    state:
      "Confirmed fact",
    responseMeaning:
      "Improves confidence in the completeness of centralized evidence after the backlog.",
  },
];

const competingHypotheses = [
  {
    id: "HYP-NB-01",
    hypothesis:
      "The approved maintenance included a change that contributed to worker or queue degradation.",
    supporting:
      "Maintenance began before queue degradation and included worker-service work.",
    weakening:
      "The current briefing does not yet connect a specific approved task to the observed queue behavior.",
    nextEvidence:
      "Task-level change detail, configuration version, normalized service timeline, and post-change validation.",
  },
  {
    id: "HYP-NB-02",
    hypothesis:
      "The 09:11 privileged action was outside the intended maintenance task and affected a security-relevant configuration.",
    supporting:
      "The privileged action is confirmed and exact task-level authorization is unresolved.",
    weakening:
      "It occurred during an approved maintenance window and no current evidence proves the action caused service degradation.",
    nextEvidence:
      "Approved task detail, owner confirmation, target-object classification, and related application state changes.",
  },
  {
    id: "HYP-NB-03",
    hypothesis:
      "Worker queue degradation was primarily an operational dependency issue that later affected the portal.",
    supporting:
      "Queue latency increased before portal errors and improved before portal health normalized.",
    weakening:
      "The timeline alone does not prove that the queue condition was the sole or primary cause.",
    nextEvidence:
      "Dependency metrics, worker state, queue processing records, and configuration-change context.",
  },
  {
    id: "HYP-NB-04",
    hypothesis:
      "Several interacting conditions contributed to the incident-like service disruption.",
    supporting:
      "Maintenance, privileged activity, monitoring delay, queue degradation, and portal errors overlap.",
    weakening:
      "Interaction remains a model until evidence shows how those conditions influenced one another.",
    nextEvidence:
      "Normalized cross-source timeline, task-level change mapping, dependency health, and recovery validation.",
  },
];

const responseDecisions = [
  {
    id: "DEC-NB-01",
    decision:
      "Preserve the 09:11 privileged event as a high-priority review item without classifying it as malicious or approved.",
    evidence:
      "Event confirmed by two sources; exact task authorization unresolved; collector delayed.",
    owner:
      "Fictional Incident Lead + Identity Owner",
    reversible:
      "Yes — the classification can change as evidence improves.",
    trigger:
      "Task-level authorization, new related privileged activity, or contradictory identity evidence.",
  },
  {
    id: "DEC-NB-02",
    decision:
      "Prioritize worker queue and portal recovery while preserving evidence and monitoring the administrative path.",
    evidence:
      "Queue degradation and portal errors are confirmed; worker restart is a bounded service action with named owner.",
    owner:
      "Fictional Application Owner",
    reversible:
      "Yes — rollback and additional containment remain available if service or security evidence worsens.",
    trigger:
      "Failed restart, renewed queue degradation, expanded impact, or stronger security evidence.",
  },
  {
    id: "DEC-NB-03",
    decision:
      "Do not use missing central alerts as proof of no additional privileged activity during the collector-delay period.",
    evidence:
      "Collector health is degraded and processed-through time lags the event window.",
    owner:
      "Fictional Monitoring Owner",
    reversible:
      "The confidence state can improve after backlog catch-up validation.",
    trigger:
      "Collector recovery, alternate-source evidence, or a remaining unexplained gap.",
  },
  {
    id: "DEC-NB-04",
    decision:
      "Treat portal availability at 09:29 as recovery progress, not final closure.",
    evidence:
      "Portal errors return to normal, but monitoring catch-up and selected dependency validation continue.",
    owner:
      "Fictional Recovery Owner",
    reversible:
      "Yes — service can return to heightened observation or response if recovery criteria fail.",
    trigger:
      "Renewed errors, queue instability, failed collector catch-up, or failed validation case.",
  },
  {
    id: "DEC-NB-05",
    decision:
      "Keep root cause open while documenting the strongest current contributing factors.",
    evidence:
      "Multiple plausible hypotheses remain and no supplied evidence establishes one sole cause.",
    owner:
      "Fictional Incident Lead",
    reversible:
      "Yes — the conclusion should update if later evidence supports a stronger causal finding.",
    trigger:
      "Task-level change evidence, configuration comparison, dependency analysis, or confirmed causal relationship.",
  },
];

const containmentPrinciples = [
  {
    principle: "Proportionality",
    meaning:
      "The response should match the potential impact and confidence of the current evidence.",
    example:
      "A high-impact privileged event with incomplete context may justify urgent review without automatically disabling every administrator.",
  },
  {
    principle: "Reversibility",
    meaning:
      "Prefer actions that can be safely undone when uncertainty remains, unless stronger risk requires a more durable action.",
    example:
      "A temporary bounded access restriction can be reviewed once task authorization is confirmed.",
  },
  {
    principle: "Business continuity",
    meaning:
      "Containment should consider how security actions affect essential service delivery and recovery.",
    example:
      "A broad change freeze may reduce one risk while delaying the worker recovery needed to restore the portal.",
  },
  {
    principle: "Evidence preservation",
    meaning:
      "Response actions should avoid destroying the records needed to understand what happened and why.",
    example:
      "Preserve synthetic event references, source-health state, approval records, and decision timestamps.",
  },
  {
    principle: "Ownership",
    meaning:
      "A containment action should have a named decision owner and technical owner.",
    example:
      "The incident lead may coordinate the decision while the identity owner executes an approved access change.",
  },
  {
    principle: "Reassessment",
    meaning:
      "Containment should define what evidence would expand, reduce, reverse, or end the action.",
    example:
      "Confirmed out-of-scope privilege could expand response; task authorization could narrow it.",
  },
];

const recoveryCriteria = [
  {
    area: "Portal health",
    criterion:
      "Error rate and latency remain within the fictional expected range for the defined observation period.",
    evidence:
      "Service-health stream and application validation record.",
  },
  {
    area: "Worker and queue",
    criterion:
      "Worker remains stable and queue latency returns to expected operating range without repeated abnormal backlog.",
    evidence:
      "Worker state, queue depth, oldest-item age, processing latency.",
  },
  {
    area: "Monitoring visibility",
    criterion:
      "Collector backlog is cleared through the relevant case window and source-health state returns to Healthy.",
    evidence:
      "Processed-through timestamp, ingest lag, source heartbeat, recovery validation.",
  },
  {
    area: "Identity and privilege",
    criterion:
      "Privileged role state, task-level authorization status, and any temporary access changes are reviewed and documented.",
    evidence:
      "Identity records, approved task detail, access-review record, revocation or confirmation.",
  },
  {
    area: "Configuration",
    criterion:
      "Relevant configuration state is compared with the approved post-change target and unexpected differences are resolved or governed.",
    evidence:
      "Synthetic configuration version, change record, owner validation.",
  },
  {
    area: "Business function",
    criterion:
      "Critical user workflows complete successfully without creating new high-priority errors or unacceptable workarounds.",
    evidence:
      "Synthetic user-flow validation and service-owner confirmation.",
  },
  {
    area: "Residual risk",
    criterion:
      "Remaining uncertainty, stale restoration evidence, monitoring limitations, and follow-up actions have owners and review dates.",
    evidence:
      "Risk register, follow-up record, risk-owner decision.",
  },
];

const communicationViews = [
  {
    audience: "Technical team",
    needs:
      "Timeline, evidence sources, source health, competing hypotheses, actions, validation, open questions, and specific handoffs.",
    avoid:
      "Unsupported root cause, unexplained certainty, and raw data without interpretation.",
  },
  {
    audience: "Service manager",
    needs:
      "Affected service, current state, business impact, actions taken, owners, risks, dependencies, and expected next checkpoint.",
    avoid:
      "Unnecessary low-level detail that hides the actual decision.",
  },
  {
    audience: "Executive",
    needs:
      "Material impact, confidence, current service state, important residual risk, decision needed, accountable owner, and next update.",
    avoid:
      "Technical speculation presented as fact or a long list of every alert.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest initial treatment of the 09:11 privileged event?",
    choices: [
      "Declare it malicious because it is privileged.",
      "Declare it approved because maintenance is active.",
      "Preserve it as a confirmed high-priority event while task authorization and causal meaning remain unresolved.",
      "Ignore it until the service fully recovers.",
    ],
    answer: 2,
    explanation:
      "The event is confirmed, but its purpose and causal relationship are not. Strong response preserves both the fact and the uncertainty.",
  },
  {
    question:
      "Why should incident response preserve competing hypotheses?",
    choices: [
      "To make the case look more complex.",
      "Because several explanations may fit early evidence, and prematurely selecting one can distort later decisions.",
      "Because root cause can never be determined.",
      "Because every hypothesis should be treated as equally likely forever.",
    ],
    answer: 1,
    explanation:
      "Competing hypotheses reduce confirmation bias while evidence is incomplete. Confidence should change as supporting or weakening evidence appears.",
  },
  {
    question:
      "Which containment approach is strongest when evidence is incomplete?",
    choices: [
      "Use the broadest possible action immediately.",
      "Use a proportional, owned, preferably reversible action with clear reassessment triggers.",
      "Avoid every response until certainty is absolute.",
      "Delete the evidence after containment.",
    ],
    answer: 1,
    explanation:
      "Response must manage risk under uncertainty. Proportionality, ownership, reversibility, continuity, and reassessment improve decision quality.",
  },
  {
    question:
      "Portal errors return to normal at 09:29. What does this prove?",
    choices: [
      "The case can automatically close.",
      "The worker restart was definitely the sole root cause.",
      "Service recovery is progressing, but closure still depends on broader recovery, evidence, and residual-risk criteria.",
      "No security concern ever existed.",
    ],
    answer: 2,
    explanation:
      "Availability is one recovery signal. Monitoring, identity, configuration, dependency, and residual-risk checks may still be open.",
  },
  {
    question:
      "What is the purpose of a reassessment trigger?",
    choices: [
      "To define evidence or conditions that should change the current response decision.",
      "To prevent any decision from ever changing.",
      "To replace ownership.",
      "To hide uncertainty from leaders.",
    ],
    answer: 0,
    explanation:
      "Reassessment triggers make decisions adaptive and explain what would justify expansion, reduction, reversal, escalation, or closure.",
  },
  {
    question:
      "Why should decision history be preserved?",
    choices: [
      "So later evidence can be used to pretend responders knew more earlier.",
      "So reviewers can understand what was known at the time, why a choice was reasonable, and how later evidence changed it.",
      "Because no decision should ever be revised.",
      "Because timestamps are more important than evidence.",
    ],
    answer: 1,
    explanation:
      "Decision history supports accountability and protects against hindsight rewriting.",
  },
  {
    question:
      "What is safest for the A20 incident-response phase?",
    choices: [
      "Use only synthetic Northbridge evidence and fictional response decisions.",
      "Investigate a real organization to make the case realistic.",
      "Test real credentials to confirm identity hypotheses.",
      "Collect live logs from a school network.",
    ],
    answer: 0,
    explanation:
      "The A20 capstone demonstrates incident-response reasoning using fictional, synthetic evidence only.",
  },
];

const takeaways = [
  "Incident response is a decision process under uncertainty, not a race to declare a root cause.",
  "Facts, hypotheses, impact, scope, priority, containment, recovery, and closure should remain distinct and evidence-backed.",
  "Competing hypotheses protect the case from confirmation bias when several explanations remain plausible.",
  "Containment should be proportional, owned, evidence-preserving, continuity-aware, reversible where appropriate, and connected to reassessment triggers.",
  "Source-health limitations must travel into response decisions because missing events can be weak evidence during delayed or blind periods.",
  "Recovery requires explicit service, dependency, monitoring, identity, configuration, and residual-risk criteria—not just restored availability.",
  "Decision history should preserve what was known at the time and why later evidence changed or confirmed the response.",
  "The entire A20 incident-response phase remains fictional, synthetic, defensive, non-operational, and publication-safe.",
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

export default function IncidentResponsePhasePage() {
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
              A20.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Incident Response Phase
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A20.4 gave the case better monitoring context. A20.5 turns that
            evidence into response decisions while preserving uncertainty,
            continuity, ownership, and recovery. The goal is to act proportionally
            without pretending the first plausible explanation is the final answer.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            You will create a fictional Incident Response Decision Record showing
            what was known at each point, what decisions were made, why those
            decisions were justified, and which evidence could change them.
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
          lessonTitle="Incident Response Phase"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish an alert from an incident and severity from confidence.",
            "I can preserve competing hypotheses when the evidence does not establish one cause.",
            "I understand that the collector delay weakens negative monitoring evidence during part of the case.",
            "I will use only synthetic Northbridge evidence and fictional response decisions.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Responders Must Make Decisions Before They Know Everything"
        >
          <p className="leading-8">
            Incident response would be easy if every case arrived with a complete
            timeline and proven root cause. In practice, responders often have to
            protect services and reduce risk while important evidence is still
            missing or contradictory.
          </p>

          <p className="mt-4 leading-8">
            Professional response therefore depends on bounded decisions. A strong
            responder can say what is confirmed, what is only plausible, what action
            is justified now, who owns that action, and what evidence would change
            the decision.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.5">
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
          title="Eight Incident-Response Concepts Before the Case Decisions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {responseConcepts.map((item) => (
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
                  <span className="font-black">Decision effect:</span>{" "}
                  {item.decisionEffect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case Timeline"
          title="Build Chronology Without Turning Sequence Into Cause"
        >
          <p className="leading-8">
            Timeline quality depends on preserving what each record actually says.
            Earlier events may be relevant, but their order alone does not prove
            causal relationships. The response should connect chronology to
            evidence and confidence.
          </p>

          <div className="mt-6 grid gap-5">
            {timeline.map((item) => (
              <article
                key={`${item.time}-${item.event}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.time}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.state}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-white">{item.event}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <span className="font-black">Response meaning:</span>{" "}
                  {item.responseMeaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Incident Response Board"
          subtitle="Synthetic triage, recovery, and evidence-readiness snapshot"
          metrics={[
            {
              label: "Confirmed timeline points",
              value: "10",
              note: "Change, collector, privilege, queue, portal, restart, recovery",
            },
            {
              label: "Competing hypotheses",
              value: "4",
              note: "No single cause is yet proven",
            },
            {
              label: "Active response decisions",
              value: "5",
              note: "Each has evidence, owner, reversibility, and trigger",
            },
            {
              label: "Recovery criteria",
              value: "7",
              note: "Service, queue, monitoring, identity, configuration, business, risk",
            },
          ]}
        />

        <FakeAlertCard
          title="Root Cause Declared Before Evidence Supports It"
          severity="High"
          time="09:30"
          source="Synthetic Northbridge Incident Quality Review"
          details="A draft incident summary states that the 09:11 privileged action caused the portal disruption because the action occurred before the error increase."
          recommendation="Downgrade the cause statement to a hypothesis, preserve queue and change-related alternatives, and continue response based on confirmed impact and recovery needs rather than unsupported causation."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Incident Decision Log"
          logs={[
            "[09:14] portal degradation confirmed; response priority increased",
            "[09:15] privileged event preserved as high-priority review item; intent and authorization unresolved",
            "[09:17] collector delay documented; negative alert evidence confidence reduced",
            "[09:18] queue degradation added as competing explanatory factor",
            "[09:21] worker-service restart approved by fictional application owner",
            "[09:25] queue recovery evidence improving",
            "[09:29] portal health returns to expected range; case remains in recovery observation",
            "[09:36] collector marked Recovering; backlog not yet fully cleared",
            "[09:41] collector catch-up validation passes for relevant case window",
            "[09:44] root cause remains Open; task-level authorization and configuration comparison still pending",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Incident or High-Priority Review?"
          question="What is the strongest current treatment of the 09:11 privileged event?"
          evidence={[
            "The privileged action is confirmed by two synthetic sources.",
            "The action occurs during an approved maintenance window.",
            "Exact task-level authorization remains unresolved.",
            "The collector is delayed during part of the surrounding period.",
            "No supplied evidence proves malicious intent or direct causation.",
          ]}
          options={[
            "Declare a confirmed malicious incident",
            "Ignore the event because maintenance was approved",
            "Preserve the event as a high-priority response item while authorization, scope, and causal meaning remain unresolved",
            "Close the event because portal health later recovers",
          ]}
          bestAnswer={2}
          explanation="The event matters and deserves urgent review, but the evidence does not support stronger claims about intent, authorization, or cause."
        />

        <Section
          eyebrow="Competing Hypotheses"
          title="Preserve More Than One Plausible Explanation"
        >
          <p className="leading-8">
            Competing hypotheses are not a sign of weak analysis. They are a way
            to prevent confirmation bias when several explanations fit early
            evidence. Each hypothesis should record what supports it, what weakens
            it, and what evidence would meaningfully change confidence.
          </p>

          <div className="mt-6 grid gap-5">
            {competingHypotheses.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-purple-50">
                    {item.hypothesis}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Supporting:</span>{" "}
                    {item.supporting}
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Weakening:</span>{" "}
                    {item.weakening}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Next evidence:</span>{" "}
                  {item.nextEvidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Record"
          title="Five Response Decisions With Evidence and Reassessment Triggers"
        >
          <div className="grid gap-5">
            {responseDecisions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">
                    Owner: {item.owner}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-emerald-50">
                  <span className="font-black">Decision:</span> {item.decision}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Evidence:</span> {item.evidence}
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Reversible:</span>{" "}
                    {item.reversible}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Reassessment trigger:</span>{" "}
                  {item.trigger}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Containment"
          title="Containment Should Reduce Risk Without Creating Unnecessary Harm"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {containmentPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.principle}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Northbridge example:</span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Recovery or Closure?"
          question="Portal errors have returned to normal, but monitoring catch-up and task-level authorization review are still open. What is the strongest response state?"
          evidence={[
            "Portal health is normal again.",
            "Queue latency has improved.",
            "Collector catch-up is still being validated.",
            "Task-level authorization for the privileged event is unresolved.",
            "No new user-facing impact is currently observed.",
          ]}
          options={[
            "Close the case because the portal works",
            "Remain in recovery observation, continue the open evidence reviews, and define closure criteria before ending response",
            "Declare the worker restart the root cause",
            "Escalate every remaining unknown to a confirmed incident",
          ]}
          bestAnswer={1}
          explanation="Service recovery is important but not equivalent to full closure. Open evidence and governance questions should remain visible until defined criteria are met or explicitly transferred to follow-up risk."
        />

        <Section
          eyebrow="Recovery"
          title="Seven Criteria for a Defensible Return to Normal Operations"
        >
          <p className="leading-8">
            Recovery should prove that the service, its important dependencies,
            monitoring, identity state, configuration, business function, and
            residual-risk ownership are sufficiently trustworthy. A single green
            indicator is not enough.
          </p>

          <div className="mt-6 grid gap-5">
            {recoveryCriteria.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.area}</h3>
                <p className="mt-3 leading-7 text-blue-100">
                  <span className="font-black">Criterion:</span>{" "}
                  {item.criterion}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Communication"
          title="The Same Case Needs Different Depth for Different Audiences"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {communicationViews.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.audience}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  <span className="font-black">Needs:</span> {item.needs}
                </p>
                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Avoid:</span> {item.avoid}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Response Mistakes"
          title="What Weakens Incident-Response Decision Quality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Declaring root cause too early",
                detail:
                  "Chronology and correlation can prioritize a hypothesis without proving causation.",
              },
              {
                title: "Treating maintenance as automatic authorization",
                detail:
                  "Approved maintenance provides context, but specific privileged actions still need task-level evidence.",
              },
              {
                title: "Using missing alerts as proof during source delay",
                detail:
                  "Negative evidence is weak when the monitoring pipeline is delayed or blind.",
              },
              {
                title: "Using containment without an owner",
                detail:
                  "A response action needs authority, accountability, purpose, and reassessment criteria.",
              },
              {
                title: "Equating availability with recovery",
                detail:
                  "Recovery also depends on dependencies, monitoring, identity, configuration, business validation, and residual risk.",
              },
              {
                title: "Rewriting history after new evidence",
                detail:
                  "Preserve the original decision context so reviewers can understand why a choice changed.",
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
          title="Build the Incident Response Decision Record"
        >
          <p className="leading-8">
            Use only the synthetic Northbridge evidence already provided in A20.
            The lab evaluates response reasoning and documentation, not live
            security operations.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Build the response timeline",
                detail:
                  "Record at least eight synthetic events with source, state, confidence, and response meaning.",
              },
              {
                title: "Task 2 — Preserve competing hypotheses",
                detail:
                  "Write at least three plausible explanations with supporting evidence, weakening evidence, and next evidence needs.",
              },
              {
                title: "Task 3 — Record response decisions",
                detail:
                  "Document at least four decisions with evidence, owner, purpose, reversibility, and reassessment trigger.",
              },
              {
                title: "Task 4 — Define containment boundaries",
                detail:
                  "Explain what action could reduce immediate risk without unnecessarily disrupting the fictional service or destroying evidence.",
              },
              {
                title: "Task 5 — Define recovery criteria",
                detail:
                  "Create explicit service, dependency, monitoring, identity, configuration, business, and residual-risk checks.",
              },
              {
                title: "Task 6 — Write three communications",
                detail:
                  "Produce technical, manager, and executive updates that preserve the same facts, uncertainty, decisions, and next checkpoint.",
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
          title="Scenario Decision 1 — Whether to Restrict Privileged Access"
          scenario="The privileged event is confirmed and potentially high impact, but task authorization is still unresolved and no new related privileged activity is observed."
          choices={[
            {
              label: "Choice A",
              response:
                "Use a bounded, owner-approved response that preserves evidence, increases monitoring, verifies task authorization quickly, and defines conditions for temporary restriction if risk increases.",
              outcome:
                "Best response. It manages a potentially serious condition without pretending the current evidence proves malicious activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable every administrator immediately regardless of business impact or evidence.",
              outcome:
                "Risky. Broad containment may create unnecessary operational harm and exceeds the current evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Take no action because the event happened during maintenance.",
              outcome:
                "Risky. Approved maintenance does not automatically validate the specific privileged action.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Whether to Close the Case"
          scenario="Portal and queue health are stable, the collector has caught up, but the exact authorization of the 09:11 privileged action and current full-restoration evidence remain open follow-up items."
          choices={[
            {
              label: "Choice A",
              response:
                "Complete immediate response only if defined recovery criteria are met, transfer remaining issues into owned follow-up risk or review records, and preserve explicit reopen triggers.",
              outcome:
                "Best governance decision. Closure can be responsible when residual issues remain visible, owned, and governed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete all open questions because the service is stable.",
              outcome:
                "Risky. Stability does not erase unresolved authorization or recovery evidence gaps.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep the incident open forever until every theoretical uncertainty is eliminated.",
              outcome:
                "Caution. Closure should be evidence-based and governed, not dependent on impossible absolute certainty.",
              tone: "caution",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Reconstruct the Same Decision at Three Different Times"
        >
          <p className="leading-8">
            Choose the privileged event and write how the strongest response
            changes as evidence improves. This demonstrates decision quality over
            time rather than hindsight.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "09:15 — Early evidence",
                detail:
                  "Event confirmed, service degrading, collector delayed, task authorization unresolved. State what action is justified now and why.",
              },
              {
                title: "09:29 — Service recovery",
                detail:
                  "Portal and queue improve. Explain why recovery progress changes operational priority without automatically resolving event meaning.",
              },
              {
                title: "09:41 — Monitoring catch-up",
                detail:
                  "Collector evidence becomes more complete. Explain how confidence changes and which questions still require governance or follow-up.",
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
          title="Incident Response Phase Checklist"
          items={[
            "I can distinguish an alert, finding, risk, incident, hypothesis, and decision.",
            "I can build a normalized timeline without turning sequence into unsupported causation.",
            "I can preserve competing hypotheses and identify evidence that strengthens or weakens each one.",
            "I can define scope and avoid expanding conclusions beyond supplied evidence.",
            "I can choose proportional containment based on potential impact and confidence.",
            "I can include reversibility, continuity, ownership, evidence preservation, and reassessment in containment decisions.",
            "I can preserve source-health limitations when interpreting missing events.",
            "I can record what was known at the time of each response decision.",
            "I can define recovery criteria beyond simple service availability.",
            "I can separate immediate response closure from owned residual-risk follow-up.",
            "I can communicate the same case accurately to technical, manager, and executive audiences.",
            "I can preserve explicit reopen criteria when uncertainty remains.",
            "I will use only fictional Northbridge evidence and non-operational defensive decisions.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.5 Knowledge Check">
          <MiniQuiz
            title="A20.5 Mini Quiz: Incident Response Phase"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Incident Response Decision Record"
          prompt="Create a fictional Northbridge Incident Response Decision Record. Include case scope, affected services, at least eight timeline events, source references, source-health context, facts, interpretations, at least three competing hypotheses, supporting and weakening evidence, impact, priority, at least four response decisions, decision owners, containment rationale, reversibility, business-continuity considerations, evidence-preservation notes, reassessment triggers, recovery criteria for service, dependencies, monitoring, identity, configuration, business function, and residual risk, open questions, closure criteria, reopen criteria, and technical, manager, and executive communications that preserve the same underlying facts."
          tips={[
            "Preserve what was known at each decision point rather than rewriting history after later evidence appears.",
            "Keep the 09:11 privileged event important without overstating intent, authorization, or causation.",
            "Treat the collector delay as a confidence limitation for negative evidence.",
            "Use recovery criteria that include dependencies, monitoring, identity, configuration, and residual risk.",
            "Give each material response action a fictional owner and reassessment trigger.",
            "Use only synthetic Northbridge evidence and defensive, non-operational response decisions.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.6?"
        >
          <p className="leading-8">
            A20.6 moves into Cloud and Identity Review Phase. Before continuing,
            make sure the incident record clearly identifies which identity and
            cloud questions remain open after immediate stabilization.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why the 09:11 event remains important even when malicious intent is unproven.",
              "I can identify which task-level authorization evidence A20.6 should review.",
              "I can explain why workload identity scope remains a separate governance question.",
              "I can carry recovery and cloud-dependency questions forward without calling them solved.",
              "I can hand A20.6 a decision record that preserves owners, evidence, uncertainty, and residual risk.",
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
          title="Make the Incident Record Useful Through the Rest of A20"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable decision IDs",
                detail:
                  "Later cloud, risk, and executive artifacts should be able to reference exact response decisions.",
              },
              {
                title: "Version the timeline",
                detail:
                  "If timestamps or event meanings change, record the correction and reason instead of silently replacing earlier notes.",
              },
              {
                title: "Separate event from interpretation",
                detail:
                  "Keep the original synthetic observation beside any hypothesis or finding built from it.",
              },
              {
                title: "Record source health",
                detail:
                  "Monitoring delay should remain visible wherever negative evidence from the affected period is discussed.",
              },
              {
                title: "Keep owner roles consistent",
                detail:
                  "Incident, identity, application, monitoring, recovery, and risk owners should align with later governance records.",
              },
              {
                title: "Link recovery to evidence",
                detail:
                  "Do not label an area recovered without the specific validation record or accepted limitation supporting that state.",
              },
              {
                title: "Carry residual issues forward",
                detail:
                  "Task authorization, workload identity scope, and restoration freshness belong in later A20 review rather than disappearing at incident closure.",
              },
              {
                title: "Maintain publication safety",
                detail:
                  "All incident details, logs, identities, decisions, timing, and system names must remain fictional and synthetic.",
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
            Incident response stays fictional, defensive, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Use only synthetic Northbridge records and fictional decisions supplied
            for CyberShield Academy. Do not access real accounts, collect live logs,
            test credentials, scan systems, probe networks, exploit applications,
            bypass controls, monitor real users, change real configurations, or
            investigate real organizations. The lesson evaluates evidence-based
            response reasoning, documentation, governance, recovery, and
            communication only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.5 Incident Response Phase Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The capstone now has a defensible incident timeline, competing
            hypotheses, response decisions, containment reasoning, recovery
            criteria, communication views, and residual open questions. Next,
            A20.6 examines cloud and identity governance around privileged and
            workload access.
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