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
const previousLesson = `${modulePath}/advanced-track-knowledge-review`;
const nextLesson = `${modulePath}/architecture-and-threat-model-phase`;

const objectives = [
  "Explain why a professional capstone begins with a case charter and evidence inventory before responders, architects, or risk owners make strong conclusions.",
  "Define mission, scope, stakeholders, assets, decisions, constraints, assumptions, unknowns, exclusions, and stop conditions for a fictional cybersecurity case.",
  "Classify supplied records by evidence source, purpose, provenance, source health, freshness, reliability, limitations, and the decisions they can support.",
  "Separate confirmed facts from interpretations, hypotheses, assumptions, findings, risks, incidents, exceptions, recommendations, decisions, and unresolved questions.",
  "Create a Capstone Case Charter and Evidence Inventory that gives later A20 phases a consistent, safe, and defensible starting point.",
];

const caseCharterElements = [
  {
    title: "Mission",
    meaning:
      "State what business or service outcome matters and why the review exists.",
    example:
      "Maintain trustworthy access to the fictional Northbridge Learning Portal while protecting student-service data and administrative functions.",
  },
  {
    title: "Primary decision",
    meaning:
      "Identify the decision the capstone team must support rather than starting with a preferred technical solution.",
    example:
      "Determine what is confirmed about the service interruption and unusual administrative activity, what remains uncertain, and which defensive actions are justified.",
  },
  {
    title: "Scope",
    meaning:
      "Name the fictional systems, identities, data, time window, evidence, and activities included in the review.",
    example:
      "Portal application, identity service, worker service, protected data store, monitoring sources, recovery records, and selected governance evidence.",
  },
  {
    title: "Exclusions",
    meaning:
      "State what the case does not attempt to prove or review.",
    example:
      "No real infrastructure, no external organizations, no live scanning, no credential testing, no offensive validation, and no claims about systems outside the synthetic case.",
  },
  {
    title: "Stakeholders",
    meaning:
      "Identify who needs the result and who owns the services, controls, risks, data, recovery actions, and communications.",
    example:
      "Application owner, identity owner, monitoring owner, cloud owner, privacy reviewer, risk owner, incident lead, and executive sponsor.",
  },
  {
    title: "Constraints",
    meaning:
      "Record limitations that shape what the review can safely conclude.",
    example:
      "Some synthetic telemetry is delayed, one recovery record is stale, and only approved case evidence may be used.",
  },
  {
    title: "Assumptions",
    meaning:
      "Record necessary but unconfirmed statements separately from facts.",
    example:
      "The fictional architecture inventory is assumed current unless another supplied record contradicts it.",
  },
  {
    title: "Unknowns",
    meaning:
      "List unanswered questions that could materially change the decision.",
    example:
      "Whether one privileged action was expected during the approved change window remains unresolved.",
  },
];

const evidenceClasses = [
  {
    source: "Architecture inventory",
    supports:
      "Intended system relationships, trust boundaries, dependencies, service roles, control placement, and recovery paths.",
    doesNotProve:
      "That every deployed component currently matches the design or that every control is effective.",
    health:
      "Current design record with one dependency marked for review.",
  },
  {
    source: "Identity records",
    supports:
      "Authentication timing, identity type, role assignment, account state, approval context, and selected lifecycle events.",
    doesNotProve:
      "Physical identity, complete user intent, or authorization for every later action.",
    health:
      "Current except for a short synthetic ingestion delay during the case window.",
  },
  {
    source: "Application logs",
    supports:
      "Request timing, application errors, worker activity, job state, service responses, and selected business events.",
    doesNotProve:
      "Complete endpoint behavior, human intent, or every network path.",
    health:
      "Available with one four-minute gap during service restart.",
  },
  {
    source: "Monitoring alerts",
    supports:
      "Which synthetic detection conditions fired, severity, confidence, source references, and triage context.",
    doesNotProve:
      "That an alert is a confirmed incident, complete scope, or root cause.",
    health:
      "One source was delayed; alert absence in that window has reduced evidentiary value.",
  },
  {
    source: "Change records",
    supports:
      "Approved purpose, planned timing, owner, expected systems, rollback plan, and documented maintenance context.",
    doesNotProve:
      "That every observed action was part of the approved change or that the change caused later symptoms.",
    health:
      "Current and signed by the fictional service owner.",
  },
  {
    source: "Service-health records",
    supports:
      "Availability, latency, queue state, dependency health, restart timing, and recovery checkpoints.",
    doesNotProve:
      "Whether a security event caused the operational condition.",
    health:
      "Current for the primary portal, partial for one background dependency.",
  },
  {
    source: "Risk and policy records",
    supports:
      "Expected controls, business importance, risk ownership, exception state, review requirements, and decision authority.",
    doesNotProve:
      "Current implementation effectiveness unless supporting control evidence is present.",
    health:
      "Current policy; one risk review is due soon.",
  },
  {
    source: "Recovery records",
    supports:
      "Backup coverage, restoration ownership, recovery objectives, prior validation, and dependency requirements.",
    doesNotProve:
      "Current restoration success if the most recent exercise is stale.",
    health:
      "Backup status current; full restoration evidence older than the preferred review window.",
  },
];

const caseFacts = [
  {
    id: "FACT-NB-01",
    statement:
      "The fictional Northbridge Learning Portal experienced elevated error rates between 09:14 and 09:29.",
    source:
      "Application and service-health records agree on the affected period.",
    confidence: "High",
  },
  {
    id: "FACT-NB-02",
    statement:
      "An approved administrative change began at 09:05 and included identity-policy and worker-service maintenance.",
    source:
      "Synthetic change record CHG-NB-220 with named fictional owners.",
    confidence: "High",
  },
  {
    id: "FACT-NB-03",
    statement:
      "A privileged identity performed an administrative action at 09:11.",
    source:
      "Identity and application records contain matching synthetic event references.",
    confidence: "High",
  },
  {
    id: "FACT-NB-04",
    statement:
      "The monitoring collector was delayed for part of the 09:08–09:17 period.",
    source:
      "Source-health dashboard and collector backlog record.",
    confidence: "High",
  },
  {
    id: "FACT-NB-05",
    statement:
      "One background processing queue exceeded its fictional normal latency before portal errors increased.",
    source:
      "Service-health and application records.",
    confidence: "Medium",
  },
  {
    id: "FACT-NB-06",
    statement:
      "Portal availability returned after a worker-service restart and queue recovery.",
    source:
      "Application, service-health, and recovery checkpoint records.",
    confidence: "High",
  },
];

const reasoningStates = [
  {
    state: "Fact",
    meaning:
      "A statement directly supported by the supplied evidence at the stated confidence.",
    example:
      "A privileged administrative event was recorded at 09:11.",
  },
  {
    state: "Interpretation",
    meaning:
      "A reasoned meaning assigned to one or more facts without claiming more certainty than the evidence supports.",
    example:
      "The privileged action may be relevant because it occurred during the maintenance window and before service degradation.",
  },
  {
    state: "Hypothesis",
    meaning:
      "A testable possible explanation that competes with other explanations.",
    example:
      "The service interruption may have resulted from an approved change interacting with a queue dependency.",
  },
  {
    state: "Assumption",
    meaning:
      "A statement temporarily accepted so work can proceed, but not independently confirmed.",
    example:
      "The provided architecture inventory is assumed current for the capstone.",
  },
  {
    state: "Finding",
    meaning:
      "A defensible conclusion about a condition that matters to the review.",
    example:
      "Monitoring delay reduces confidence in negative evidence during the affected period.",
  },
  {
    state: "Risk",
    meaning:
      "A possible adverse outcome evaluated through likelihood, impact, controls, ownership, and residual exposure.",
    example:
      "Concentrated monitoring dependence could delay detection and response during future service disruptions.",
  },
  {
    state: "Incident",
    meaning:
      "A governed response state for an event or condition requiring coordinated handling under defined criteria.",
    example:
      "The current briefing does not yet prove whether the case meets the fictional incident threshold.",
  },
  {
    state: "Exception",
    meaning:
      "An approved deviation from an expected requirement, with rationale, owner, risk, limits, and review.",
    example:
      "A temporary monitoring retention exception exists for one synthetic source and expires next month.",
  },
  {
    state: "Recommendation",
    meaning:
      "A proposed defensive action supported by evidence and linked to an owner and intended outcome.",
    example:
      "Validate monitoring-source recovery and improve dependency-health context before future maintenance windows.",
  },
  {
    state: "Decision",
    meaning:
      "An authorized choice made by the appropriate owner using the evidence and risk available at that time.",
    example:
      "Continue service recovery while preserving the administrative action as an unresolved review item.",
  },
  {
    state: "Unresolved question",
    meaning:
      "A material question that remains open and could change confidence, priority, or the final decision.",
    example:
      "Was the 09:11 privileged action part of the approved change scope or a separate administrative action?",
  },
];

const decisionQuestions = [
  {
    category: "Mission",
    question:
      "Which service outcomes are most important to preserve during the review?",
  },
  {
    category: "Scope",
    question:
      "Which fictional systems, identities, data, time window, and evidence are actually included?",
  },
  {
    category: "Evidence",
    question:
      "Which records agree, contradict, lag, or have known source-health limitations?",
  },
  {
    category: "Identity",
    question:
      "Which human or workload identities acted, under what role, purpose, approval, and lifecycle context?",
  },
  {
    category: "Architecture",
    question:
      "Which trust boundaries and dependencies could connect the observed conditions without implying causation prematurely?",
  },
  {
    category: "Response",
    question:
      "What defensive decisions are justified now, and which should wait for stronger evidence?",
  },
  {
    category: "Recovery",
    question:
      "What evidence shows the service is restored, dependencies are healthy, and confidence is sufficient for normal operation?",
  },
  {
    category: "Risk",
    question:
      "Which unresolved conditions create material residual risk and who owns the decision?",
  },
  {
    category: "Privacy",
    question:
      "What data is being reviewed, for what purpose, by whom, and with what minimization and retention expectations?",
  },
  {
    category: "Communication",
    question:
      "What do technical teams, managers, and leaders need to know now without overstating certainty?",
  },
];

const unresolvedQuestions = [
  {
    id: "UQ-NB-01",
    question:
      "Was the 09:11 privileged administrative action explicitly included in the approved change scope?",
    whyItMatters:
      "This affects whether the event is expected maintenance context, a process deviation, or a separate investigation item.",
    evidenceNeeded:
      "Approved change-task details, owner confirmation, and matching workflow record.",
  },
  {
    id: "UQ-NB-02",
    question:
      "Did the queue-latency increase begin before, during, or after the worker-service configuration change?",
    whyItMatters:
      "Sequence may help distinguish dependency degradation from later application symptoms.",
    evidenceNeeded:
      "Normalized application, service-health, and change timestamps.",
  },
  {
    id: "UQ-NB-03",
    question:
      "How much monitoring evidence was delayed during the collector backlog?",
    whyItMatters:
      "The answer changes confidence in claims based on missing alerts or events.",
    evidenceNeeded:
      "Source-health timeline, ingestion delay range, and recovery confirmation.",
  },
  {
    id: "UQ-NB-04",
    question:
      "Was the worker-service restart sufficient for trusted recovery or did another dependency also change?",
    whyItMatters:
      "Recovery causation should not be assigned to one action if several conditions changed together.",
    evidenceNeeded:
      "Recovery checkpoint, queue health, dependency status, and change timeline.",
  },
  {
    id: "UQ-NB-05",
    question:
      "Does the current restoration evidence satisfy the fictional recovery-review requirement?",
    whyItMatters:
      "Backup availability is not the same as validated restoration readiness.",
    evidenceNeeded:
      "Current restoration test record or documented risk-owner decision on the evidence gap.",
  },
];

const quizQuestions = [
  {
    question:
      "Why should the A20 capstone begin with a case charter?",
    choices: [
      "To decide the root cause before reviewing evidence.",
      "To define mission, scope, stakeholders, evidence, constraints, assumptions, unknowns, and decisions before strong conclusions are made.",
      "To replace all later architecture and incident-response work.",
      "To authorize real-world testing.",
    ],
    answer: 1,
    explanation:
      "A case charter creates a shared decision boundary so later phases do not make incompatible assumptions about scope, evidence, or purpose.",
  },
  {
    question:
      "A monitoring source was delayed during the case window. What is the strongest treatment of missing alerts from that period?",
    choices: [
      "Treat the absence of alerts as proof that nothing happened.",
      "Ignore the source-health issue.",
      "Reduce confidence in negative evidence and document the affected window.",
      "Assume the source was intentionally disabled.",
    ],
    answer: 2,
    explanation:
      "Negative evidence is only as reliable as the source that should have produced it. Delay weakens what absence can prove.",
  },
  {
    question:
      "Which statement is a hypothesis rather than a fact?",
    choices: [
      "The portal showed elevated errors between 09:14 and 09:29.",
      "An approved change began at 09:05.",
      "The approved change caused the portal interruption.",
      "The collector experienced delayed ingestion.",
    ],
    answer: 2,
    explanation:
      "The supplied records establish timing and conditions but do not yet prove causation.",
  },
  {
    question:
      "What is the main purpose of documenting exclusions?",
    choices: [
      "To hide weak areas.",
      "To state what the case does not attempt to review or prove and prevent conclusions from expanding beyond scope.",
      "To remove the need for evidence.",
      "To make every unknown irrelevant.",
    ],
    answer: 1,
    explanation:
      "Exclusions keep analysis bounded and prevent one synthetic case from being treated as evidence about systems or questions outside the review.",
  },
  {
    question:
      "An approved change record shows that maintenance was planned. What does it not automatically prove?",
    choices: [
      "That the change had an owner.",
      "That the change had a documented purpose.",
      "That every unusual action during the window was expected and safe.",
      "That the record exists.",
    ],
    answer: 2,
    explanation:
      "Approved maintenance provides important context, but each relevant event still needs to be compared with the actual approved scope and evidence.",
  },
  {
    question:
      "Which unresolved question is most useful?",
    choices: [
      "Was something bad happening?",
      "Could anything be possible?",
      "Was the 09:11 privileged action explicitly included in the approved change task, and which records can confirm that?",
      "Why is cybersecurity difficult?",
    ],
    answer: 2,
    explanation:
      "Useful unresolved questions are specific, decision-relevant, and connected to identifiable evidence.",
  },
  {
    question:
      "What is safest for the A20 capstone briefing?",
    choices: [
      "Use only fictional systems and synthetic records supplied for the educational case.",
      "Add real cloud screenshots to increase realism.",
      "Test public systems to validate assumptions.",
      "Use private logs after removing usernames.",
    ],
    answer: 0,
    explanation:
      "The capstone is designed to demonstrate professional defensive reasoning without real-world access, private evidence, or security testing.",
  },
];

const takeaways = [
  "A professional capstone begins by defining the decision environment before deciding the answer.",
  "Mission, scope, stakeholders, assets, evidence, constraints, assumptions, unknowns, exclusions, and decision authority form the foundation of the case charter.",
  "Evidence should be evaluated by source, provenance, health, freshness, reliability, limitation, and the decisions it can support.",
  "Facts, interpretations, hypotheses, assumptions, findings, risks, incidents, exceptions, recommendations, decisions, and unresolved questions are related but not interchangeable.",
  "Approved maintenance is context, not proof that every event during the window was expected.",
  "Source-health problems reduce confidence in absence-of-event conclusions and should remain visible throughout later capstone phases.",
  "Strong unresolved questions are specific, decision-relevant, and linked to the evidence needed for resolution.",
  "The A20 case remains completely fictional and requires no real security access, testing, monitoring, or investigation.",
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

export default function CapstoneScenarioBriefingPage() {
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
              A20.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Capstone Scenario Briefing
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complex cybersecurity cases become unreliable when people start with a
            preferred explanation. A professional briefing establishes what the
            mission is, what evidence exists, what the evidence can prove, which
            questions matter, and where uncertainty must remain visible.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson introduces the fictional Northbridge capstone case and
            creates the Case Charter and Evidence Inventory that every later A20
            phase will reuse.
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
          lessonTitle="Capstone Scenario Briefing"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can enter a case without assuming the root cause, incident status, or final risk rating.",
            "I understand that source health affects what missing evidence can prove.",
            "I can distinguish a fact from a hypothesis or assumption.",
            "I will use only the supplied fictional Northbridge evidence and will not access real systems.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Briefing Is a Decision Boundary, Not a Story About What You Think Happened"
        >
          <p className="leading-8">
            A weak briefing begins with a conclusion and selects evidence that fits
            it. A strong briefing begins with the mission, scope, evidence, source
            limitations, stakeholders, constraints, and unanswered questions.
            Conclusions come later.
          </p>

          <p className="mt-4 leading-8">
            This matters because A20 will move through architecture, monitoring,
            incident response, cloud, identity, privacy, risk, and executive
            communication. If every phase begins with a different definition of the
            case, the final capstone will contradict itself.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.2">
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
          eyebrow="Case Charter"
          title="Define the Case Before You Analyze It"
        >
          <p className="leading-8">
            The case charter gives every later reviewer the same starting point.
            It does not predict the answer. It explains what matters, what is
            included, who owns the decisions, and which limitations prevent
            overconfidence.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {caseCharterElements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Northbridge example:</span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Inventory"
          title="Know What Each Source Can Support—and What It Cannot"
        >
          <p className="leading-8">
            Evidence inventory is more than a list of logs. A professional record
            captures purpose, provenance, source health, freshness, reliability,
            limitations, and the decisions a source can support.
          </p>

          <div className="mt-6 grid gap-5">
            {evidenceClasses.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.source}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
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
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.doesNotProve}
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Source health
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.health}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Capstone Briefing Dashboard"
          subtitle="Synthetic case-state snapshot before architecture, detection, or response decisions"
          metrics={[
            {
              label: "Primary assets",
              value: "7",
              note: "Portal, identity, data, worker, queue, monitoring, recovery",
            },
            {
              label: "Evidence classes",
              value: "8",
              note: "Architecture through recovery records",
            },
            {
              label: "Confirmed facts",
              value: "6",
              note: "Facts are preserved separately from interpretation",
            },
            {
              label: "Material unknowns",
              value: "5",
              note: "Each is connected to a decision and evidence need",
            },
          ]}
        />

        <FakeAlertCard
          title="Correlation Mistaken for Root Cause"
          severity="High"
          time="09:32"
          source="Synthetic Northbridge Case Review"
          details="A draft briefing says the 09:11 privileged action caused the portal interruption because it occurred shortly before elevated errors."
          recommendation="Reclassify causation as a hypothesis. Preserve the privileged action as a confirmed fact, compare it with approved change scope, normalize the timeline, and keep competing explanations visible."
        />

        <FakeLogPanel
          title="Northbridge Synthetic Briefing Records"
          logs={[
            "[09:05] CHG-NB-220 approved maintenance window begins",
            "[09:08] monitoring collector backlog starts increasing",
            "[09:11] privileged administrative action recorded by identity and application sources",
            "[09:13] worker queue latency rises above fictional baseline",
            "[09:14] portal error rate begins increasing",
            "[09:17] monitoring collector remains delayed; negative evidence confidence reduced",
            "[09:21] worker-service restart approved by fictional service owner",
            "[09:25] queue health improves",
            "[09:29] portal error rate returns to normal range",
            "[09:34] recovery checkpoint confirms portal availability; full causal analysis remains open",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Fact or Cause?"
          question="What is the strongest conclusion about the 09:11 privileged action during the initial briefing?"
          evidence={[
            "The action is present in two synthetic evidence sources.",
            "It occurred during an approved maintenance window.",
            "Portal errors began three minutes later.",
            "The monitoring source was delayed and a queue dependency was also degrading.",
            "The approved change task does not yet confirm whether this exact action was expected.",
          ]}
          options={[
            "The privileged action caused the service interruption",
            "The privileged action is a confirmed event that may be relevant, but its purpose and causal relationship remain unresolved",
            "The action is harmless because maintenance was approved",
            "The monitoring delay proves the action was malicious",
          ]}
          bestAnswer={1}
          explanation="The event itself is well supported, but its purpose and causal relationship are not. Strong briefing language keeps those separate."
        />

        <Section
          eyebrow="Reasoning States"
          title="Do Not Collapse Different Kinds of Statements Into One Category"
        >
          <p className="leading-8">
            Advanced case quality depends on language discipline. A fact can support
            a hypothesis. A hypothesis may later become a finding. A finding may
            create a risk. A risk may influence an incident decision. These are
            connected, but they are not interchangeable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reasoningStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.state}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Example:</span> {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Confirmed Facts"
          title="Six Facts the Capstone Can Safely Carry Forward"
        >
          <div className="grid gap-5">
            {caseFacts.map((fact) => (
              <article
                key={fact.id}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-slate-950">
                    {fact.id}
                  </span>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">
                    Confidence: {fact.confidence}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-emerald-50">
                  {fact.statement}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Support:</span> {fact.source}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Questions"
          title="What the Capstone Team Actually Needs to Decide"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {decisionQuestions.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  {item.category}
                </p>
                <p className="mt-3 leading-7 text-cyan-50">{item.question}</p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Approved Change Context"
          question="An approved change record covers identity-policy and worker-service maintenance. What is the strongest use of that record?"
          evidence={[
            "The change has a fictional owner, approved purpose, timing, affected services, and rollback plan.",
            "A privileged action occurs inside the maintenance window.",
            "The exact action is not listed in the summarized change task.",
            "A queue dependency also degrades during the same period.",
          ]}
          options={[
            "Treat every event in the window as authorized and expected",
            "Use the change as important context, then verify whether specific relevant actions and effects match the approved scope",
            "Ignore the change because service errors occurred",
            "Treat the change owner as responsible for root cause before evidence review",
          ]}
          bestAnswer={1}
          explanation="Approval establishes context and intended activity. It does not automatically classify every event or prove causation."
        />

        <Section
          eyebrow="Unresolved Questions"
          title="Good Unknowns Are Specific Enough to Guide Evidence Review"
        >
          <p className="leading-8">
            An unresolved-question register prevents uncertainty from disappearing
            when the team becomes busy. Each question should explain why it matters
            and what evidence could change the decision.
          </p>

          <div className="mt-6 grid gap-5">
            {unresolvedQuestions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-yellow-50">{item.question}</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-yellow-100">
                  <span className="font-black">Why it matters:</span>{" "}
                  {item.whyItMatters}
                </p>
                <p className="mt-3 rounded-xl border border-yellow-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Evidence needed:</span>{" "}
                  {item.evidenceNeeded}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Briefing Mistakes"
          title="What Weakens a Capstone Before Analysis Even Begins"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Starting with root cause",
                detail:
                  "A briefing should not claim a cause before the evidence inventory and competing explanations have been reviewed.",
              },
              {
                title: "Treating all evidence equally",
                detail:
                  "Sources have different purposes, health states, freshness, coverage, and limitations.",
              },
              {
                title: "Hiding unknowns",
                detail:
                  "Unanswered questions should remain visible when they could change scope, confidence, priority, or ownership.",
              },
              {
                title: "Confusing approval with proof",
                detail:
                  "An approved change can explain expected activity but does not prove every observed action or effect was intended.",
              },
              {
                title: "Expanding beyond scope",
                detail:
                  "A local synthetic observation cannot justify claims about systems, identities, or time periods outside the charter.",
              },
              {
                title: "Ignoring decision owners",
                detail:
                  "The case should identify who has authority to accept risk, approve recovery, change policy, or communicate material conclusions.",
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
          title="Build the Northbridge Capstone Case Charter"
        >
          <p className="leading-8">
            Use only the synthetic evidence already provided on this page. Your job
            is to create a defensible starting point, not solve the entire case.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Define mission and decision",
                detail:
                  "Write one mission statement and one primary decision question that explain why the case exists.",
              },
              {
                title: "Task 2 — Bound the scope",
                detail:
                  "List included systems, identities, evidence classes, time window, and explicit exclusions.",
              },
              {
                title: "Task 3 — Build an evidence inventory",
                detail:
                  "For at least six sources, record what each supports, what it cannot prove, and its current health or limitation.",
              },
              {
                title: "Task 4 — Classify statements",
                detail:
                  "Write at least four facts, two interpretations, two hypotheses, two assumptions, and two unresolved questions.",
              },
              {
                title: "Task 5 — Assign owners",
                detail:
                  "Identify fictional owners for application, identity, monitoring, recovery, risk, privacy, and incident decisions.",
              },
              {
                title: "Task 6 — Write the briefing summary",
                detail:
                  "Produce a short summary that states confirmed conditions, major uncertainty, immediate decision needs, and what the briefing does not prove.",
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
          title="Scenario Decision 1 — Leadership Wants an Immediate Cause"
          scenario="A fictional executive asks whether the approved maintenance caused the portal interruption before the architecture and timeline review are complete."
          choices={[
            {
              label: "Choice A",
              response:
                "State that maintenance is relevant context, summarize the confirmed timing, explain that causation is still a hypothesis, and identify the evidence needed before confidence can increase.",
              outcome:
                "Best professional response. It supports decision-making without inventing certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Confirm that maintenance caused the interruption because it happened first.",
              outcome:
                "Risky. Temporal order alone does not prove cause.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Refuse to communicate anything until every question is solved.",
              outcome:
                "Caution. Leaders can receive a bounded interim update that clearly separates facts from unresolved analysis.",
              tone: "caution",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Missing Alert During Source Delay"
          scenario="A reviewer argues that no privileged alert means no privileged concern existed during the monitoring-delay window."
          choices={[
            {
              label: "Choice A",
              response:
                "Document that the source delay weakens negative evidence, preserve the activity state as unresolved, and use other supplied records where appropriate.",
              outcome:
                "Best defensive decision. Source health defines what absence can support.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Accept the missing alert as proof no relevant activity occurred.",
              outcome:
                "Risky. The evidence source was not fully healthy.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume an attacker disabled monitoring.",
              outcome:
                "Risky. The supplied source delay does not prove intent or cause.",
              tone: "risk",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write Three Briefings Without Changing the Facts"
        >
          <p className="leading-8">
            Use the same Northbridge case evidence to produce three briefing
            versions. The underlying facts and uncertainty must remain consistent.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Technical briefing",
                detail:
                  "Emphasize sources, timing, architecture dependencies, source-health limitations, hypotheses, and evidence needs.",
              },
              {
                title: "Manager briefing",
                detail:
                  "Emphasize affected service, current status, owners, immediate decisions, uncertainty, and recovery progress.",
              },
              {
                title: "Executive briefing",
                detail:
                  "Emphasize material impact, confidence, current risk, decision needs, owner accountability, and next checkpoint.",
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
          title="Capstone Scenario Briefing Checklist"
          items={[
            "I can state the mission and primary decision without assuming the answer.",
            "I can define included systems, identities, data, time window, evidence, and exclusions.",
            "I can identify service, control, evidence, risk, privacy, recovery, and decision owners.",
            "I can explain what each evidence source supports and what it cannot prove.",
            "I can record source health and freshness before relying on missing or delayed evidence.",
            "I can separate facts, interpretations, hypotheses, assumptions, findings, risks, incidents, exceptions, recommendations, decisions, and unresolved questions.",
            "I can treat approved maintenance as context rather than automatic proof.",
            "I can write unresolved questions that identify why they matter and what evidence could resolve them.",
            "I can communicate an interim briefing without overstating cause, scope, or confidence.",
            "I can keep the case bounded to supplied fictional evidence.",
            "I can preserve privacy and avoid unnecessary data collection.",
            "I will not access, test, scan, probe, exploit, monitor, or modify real systems for this capstone.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.2 Knowledge Check">
          <MiniQuiz
            title="A20.2 Mini Quiz: Capstone Scenario Briefing"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Capstone Case Charter and Evidence Inventory"
          prompt="Create a fictional Northbridge Capstone Case Charter and Evidence Inventory. Include mission, primary decision, scope, exclusions, stakeholders, owners, constraints, assumptions, unknowns, stop conditions, at least six evidence sources, provenance, source-health state, freshness, what each source supports, what each source cannot prove, at least four confirmed facts, two interpretations, two hypotheses, two findings, two risks or risk questions, two unresolved questions, and a short technical and executive briefing that preserve the same underlying case truth."
          tips={[
            "Write the decision question before proposing solutions.",
            "Keep source limitations beside the evidence rather than hiding them in a footnote.",
            "Do not convert sequence or correlation into causation without supporting evidence.",
            "Treat approved maintenance as context that still requires event-level validation.",
            "Make unresolved questions specific enough to identify the next evidence needed.",
            "Use only fictional systems, synthetic records, and defensive reasoning.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.3?"
        >
          <p className="leading-8">
            A20.3 moves into Architecture and Threat Model Phase. Before continuing,
            make sure the case has a stable scope and that your architecture review
            will begin from confirmed case facts rather than a preferred cause.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain the mission and primary decision of the Northbridge capstone.",
              "I can identify which evidence sources are current, delayed, partial, or limited.",
              "I can separate the privileged event from any unsupported conclusion about its purpose or cause.",
              "I can carry unresolved questions forward instead of forcing closure.",
              "I can use the case charter as the boundary for the architecture and threat-model phase.",
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
          title="Keep the Case Charter Useful Through A20.10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Version the charter",
                detail:
                  "If scope or evidence changes later, record the revision instead of silently rewriting the original briefing.",
              },
              {
                title: "Use stable IDs",
                detail:
                  "Facts, findings, risks, evidence sources, and unresolved questions should be easy to reference from later artifacts.",
              },
              {
                title: "Record evidence limits beside evidence",
                detail:
                  "Do not separate a source from the limitation that determines what it can support.",
              },
              {
                title: "Carry unknowns forward",
                detail:
                  "Later phases should close, revise, or preserve unresolved questions explicitly.",
              },
              {
                title: "Preserve decision history",
                detail:
                  "If new evidence changes the case, show what was known before and why the updated decision changed.",
              },
              {
                title: "Keep owners consistent",
                detail:
                  "Application, identity, monitoring, recovery, risk, and privacy ownership should remain compatible across later artifacts.",
              },
              {
                title: "Reuse the executive summary",
                detail:
                  "Update it as confidence changes, but keep material facts and limitations aligned with the technical record.",
              },
              {
                title: "Maintain the safety boundary",
                detail:
                  "Every new A20 artifact should remain fictional, synthetic, defensive, and publication-safe.",
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
            The case briefing is entirely fictional and read-only
          </h2>
          <p className="mt-3 leading-7">
            Use only the synthetic Northbridge records supplied within CyberShield
            Academy. Do not access, scan, probe, enumerate, exploit, test
            credentials, bypass controls, collect real logs, inspect private
            records, connect to real cloud accounts, modify configurations, or
            investigate any real organization. The capstone evaluates evidence
            reasoning and defensive decision quality, not operational security
            testing.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.2 Capstone Scenario Briefing Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The Northbridge capstone now has a mission, bounded scope, evidence
            inventory, source-health context, confirmed facts, unresolved questions,
            and decision framework. Next, A20.3 uses this briefing to build the
            Architecture and Threat Model Decision Pack.
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