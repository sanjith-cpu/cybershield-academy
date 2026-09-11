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
const previousLesson = `${modulePath}/risk-and-privacy-review-phase`;
const nextLesson = `${modulePath}/final-portfolio-submission`;

const objectives = [
  "Explain how communication depth should change by audience while confirmed facts, uncertainty, risk, ownership, and material conclusions remain consistent.",
  "Translate technical findings into decision-ready language that emphasizes business impact, confidence, options, accountable owners, and next checkpoints without oversimplifying the evidence.",
  "Distinguish technical detail, management context, executive materiality, and portfolio presentation so each audience receives the information needed for its decisions.",
  "Use bounded language for unresolved cause, incomplete authorization, stale recovery evidence, and privacy questions instead of hiding uncertainty or overstating certainty.",
  "Create an Executive Capstone Brief containing aligned technical, manager, and executive views of the fictional Northbridge case.",
];

const communicationConcepts = [
  {
    concept: "Audience",
    meaning:
      "The person or group receiving the communication and the decisions they are responsible for making.",
    northbridge:
      "Detection engineers, service managers, risk owners, privacy reviewers, and executives need different levels of detail.",
    decisionEffect:
      "Audience changes depth and emphasis, not the underlying case truth.",
  },
  {
    concept: "Materiality",
    meaning:
      "The degree to which a fact, risk, or uncertainty could meaningfully affect the recipient's decision.",
    northbridge:
      "Portal disruption, privileged-task traceability, monitoring visibility, recovery confidence, and workload access are material because they affect service, trust, or risk ownership.",
    decisionEffect:
      "Executives should see what could change the business decision, not every low-level technical event.",
  },
  {
    concept: "Confidence",
    meaning:
      "How strongly the available evidence supports a claim or interpretation.",
    northbridge:
      "The 09:11 privileged event is confirmed, while its exact task authorization remains unresolved.",
    decisionEffect:
      "Strong communication states both the conclusion and the evidence limit.",
  },
  {
    concept: "Impact",
    meaning:
      "The effect on service, protected data, decision quality, privacy, recovery, trust, or business operations.",
    northbridge:
      "The portal experienced temporary degradation while several governance questions remained open.",
    decisionEffect:
      "Impact explains why a technical condition matters to leadership.",
  },
  {
    concept: "Decision",
    meaning:
      "The specific choice or approval the recipient must make or understand.",
    northbridge:
      "Leaders may need to approve risk treatment, recovery validation timing, or ownership for control improvements.",
    decisionEffect:
      "Communication should identify whether the audience is being informed, asked to approve, or asked to choose.",
  },
  {
    concept: "Owner",
    meaning:
      "The accountable role responsible for the risk, control, service, treatment, recovery action, or communication.",
    northbridge:
      "Identity, monitoring, cloud, recovery, risk, and privacy owners each have different responsibilities.",
    decisionEffect:
      "A recommendation without ownership is difficult to execute or review.",
  },
  {
    concept: "Option",
    meaning:
      "A feasible path the decision-maker can choose, including tradeoffs and residual risk.",
    northbridge:
      "Northbridge can improve privileged-task traceability immediately, defer under time-bounded acceptance, or redesign the maintenance process more broadly.",
    decisionEffect:
      "Options turn technical findings into decision support.",
  },
  {
    concept: "Next checkpoint",
    meaning:
      "The next date, condition, evidence event, or review point when the decision should be reassessed.",
    northbridge:
      "Task-level authorization review, workload-role comparison, and recovery validation create clear future checkpoints.",
    decisionEffect:
      "A checkpoint prevents unresolved risk from disappearing after the meeting.",
  },
];

const audienceViews = [
  {
    audience: "Technical reviewer",
    purpose:
      "Understand evidence, chronology, source health, architecture, hypotheses, controls, validation, and unresolved technical questions.",
    include:
      "Evidence IDs, timestamps, source limitations, dependency relationships, identity context, validation status, exact unresolved questions.",
    avoid:
      "Replacing evidence with vague business language or hiding uncertainty for brevity.",
    example:
      "The 09:11 synthetic privileged event is confirmed by identity and application sources; task-level authorization remains unresolved, and collector delay reduces confidence in missing central alerts during part of the window.",
  },
  {
    audience: "Service or security manager",
    purpose:
      "Coordinate people, services, priorities, treatments, timelines, and operational follow-up.",
    include:
      "Affected service, current state, owner assignments, high-priority findings, treatment status, dependencies, deadlines, and escalation triggers.",
    avoid:
      "Dumping raw logs without explaining the action required.",
    example:
      "Portal service recovered, but identity-task traceability and recovery-evidence freshness remain owned follow-up items before the capstone can call governance fully complete.",
  },
  {
    audience: "Executive",
    purpose:
      "Understand material impact, current risk, confidence, choices, accountability, and what decision is needed next.",
    include:
      "Business effect, top risks, confidence, current status, options, recommended path, owner, residual risk, and next checkpoint.",
    avoid:
      "Technical overload, dramatic unsupported language, or false certainty.",
    example:
      "Service is stable. No supplied evidence proves malicious activity, but gaps in privileged-task traceability and recovery validation warrant targeted control improvements with named owners.",
  },
  {
    audience: "Privacy and risk reviewer",
    purpose:
      "Evaluate proportionality, treatment, residual risk, data purpose, minimization, retention, acceptance, and review triggers.",
    include:
      "Risk statements, evidence confidence, data-purpose mapping, treatment, residual risk, exceptions, ownership, and future review.",
    avoid:
      "Treating security purpose as automatic justification for all available data collection.",
    example:
      "Current identity telemetry supports the defined defensive questions; proposed additional fields should not be collected unless a documented purpose shows that the minimized dataset is insufficient.",
  },
  {
    audience: "Portfolio reviewer",
    purpose:
      "Evaluate whether the student can explain the work, decisions, revisions, evidence, limitations, and professional contribution.",
    include:
      "Artifact purpose, reasoning, evidence, revision history, limitations, contribution statement, safety boundary, and reflection.",
    avoid:
      "Publishing sensitive or real-world details, claiming unsupported work, or using polished visuals without defensible reasoning.",
    example:
      "The final capstone uses one fictional case to demonstrate architecture, monitoring, response, identity, risk, privacy, recovery, and executive communication while preserving evidence boundaries.",
  },
];

const executiveStructure = [
  {
    element: "Situation",
    question:
      "What happened or what condition requires leadership attention?",
    northbridge:
      "The fictional portal experienced a short service disruption during approved maintenance while a privileged event and monitoring delay created unresolved governance questions.",
  },
  {
    element: "Business impact",
    question:
      "What service, mission, trust, data, or operational effect matters?",
    northbridge:
      "Portal availability was temporarily degraded, and incomplete administrative traceability reduced confidence in the exact maintenance sequence.",
  },
  {
    element: "Current state",
    question:
      "What is true now?",
    northbridge:
      "The portal and queue are stable, collector backlog has caught up, and no supplied evidence proves malicious activity.",
  },
  {
    element: "Confidence and uncertainty",
    question:
      "Which conclusions are strong and which remain bounded?",
    northbridge:
      "Service recovery is strongly supported; exact authorization of the 09:11 privileged action and complete restoration readiness remain less certain.",
  },
  {
    element: "Material risks",
    question:
      "Which remaining exposures deserve leadership awareness or decision?",
    northbridge:
      "Privileged-task traceability, monitoring concentration, workload-role scope, and recovery-evidence freshness are the most material remaining items.",
  },
  {
    element: "Recommendation",
    question:
      "What path is recommended and why?",
    northbridge:
      "Complete targeted governance improvements rather than broad disruptive changes because the current evidence supports specific gaps rather than a confirmed compromise.",
  },
  {
    element: "Owner",
    question:
      "Who is accountable for the next action?",
    northbridge:
      "Identity, monitoring, cloud, and recovery owners have specific follow-up responsibilities coordinated by the fictional risk owner.",
  },
  {
    element: "Next checkpoint",
    question:
      "When or under what condition should leadership receive the next update?",
    northbridge:
      "After task-level authorization review, worker-role comparison, and refreshed recovery validation are completed or materially delayed.",
  },
];

const materialFindings = [
  {
    id: "EXEC-NB-01",
    title: "Privileged Task Traceability",
    technical:
      "The 09:11 action is confirmed by two synthetic sources, but exact task-level authorization remains unresolved.",
    business:
      "Administrative accountability is weaker when high-authority actions cannot be mapped cleanly to approved work.",
    confidence:
      "High confidence in event occurrence; Moderate confidence in governance interpretation.",
    recommendation:
      "Improve task-level privileged-action mapping and post-change validation.",
    owner:
      "Fictional Identity Governance Owner",
    checkpoint:
      "After task-level evidence review and next maintenance-process update.",
  },
  {
    id: "EXEC-NB-02",
    title: "Monitoring Visibility Concentration",
    technical:
      "Central collector delay reduced confidence in missing-alert conclusions during part of the case.",
    business:
      "Delayed visibility can slow or weaken incident decisions during future disruptions.",
    confidence:
      "High confidence that the delay occurred; recurrence likelihood remains uncertain.",
    recommendation:
      "Maintain source-health monitoring, degraded-state indicators, and catch-up validation.",
    owner:
      "Fictional Monitoring Platform Owner",
    checkpoint:
      "After the next collector-health review or material platform change.",
  },
  {
    id: "EXEC-NB-03",
    title: "Worker Workload Authorization",
    technical:
      "The worker's business purpose is clear, but exact current permission scope is not fully represented in the supplied evidence.",
    business:
      "Unnecessary workload access could increase exposure to protected data or processing resources.",
    confidence:
      "Purpose is High confidence; current scope is Unknown pending comparison.",
    recommendation:
      "Compare required resources with current synthetic role scope and remove unnecessary permissions if found.",
    owner:
      "Fictional Cloud and Identity Owner",
    checkpoint:
      "After the role comparison is completed.",
  },
  {
    id: "EXEC-NB-04",
    title: "Recovery Evidence Freshness",
    technical:
      "Current backup status is documented, while full restoration validation is older than the preferred review window.",
    business:
      "Leadership could overestimate recovery confidence if backup availability is treated as complete restoration readiness.",
    confidence:
      "High confidence in the evidence-age gap.",
    recommendation:
      "Refresh restoration validation or document time-bounded residual-risk acceptance.",
    owner:
      "Fictional Recovery Owner",
    checkpoint:
      "After the next fictional restoration exercise.",
  },
  {
    id: "EXEC-NB-05",
    title: "Monitoring Data Proportionality",
    technical:
      "Current synthetic telemetry supports the defined defensive questions; proposed extra identity fields lack documented need.",
    business:
      "Unnecessary collection could increase privacy and governance exposure without improving decisions.",
    confidence:
      "High confidence for current purpose; proposed expansion not justified yet.",
    recommendation:
      "Require purpose mapping and minimization before adding new fields.",
    owner:
      "Fictional Privacy Reviewer + Monitoring Owner",
    checkpoint:
      "Before any monitoring-data expansion.",
  },
];

const communicationQuality = [
  {
    quality: "Accurate",
    meaning:
      "Claims match the evidence and preserve the difference between confirmed facts and unresolved interpretation.",
    weak:
      "The executive brief says the privileged action caused the disruption.",
    strong:
      "The executive brief says the action is confirmed and relevant, while causal meaning remains unresolved.",
  },
  {
    quality: "Material",
    meaning:
      "The communication emphasizes what could change the recipient's decision.",
    weak:
      "The executive brief lists every synthetic log line.",
    strong:
      "The executive brief summarizes service impact, top residual risks, owners, recommendation, and next checkpoint.",
  },
  {
    quality: "Bounded",
    meaning:
      "Uncertainty and source limitations remain visible without overwhelming the message.",
    weak:
      "The manager update says there was no other privileged activity because no central alert appeared.",
    strong:
      "The manager update notes that central monitoring was delayed during part of the period.",
  },
  {
    quality: "Actionable",
    meaning:
      "The recipient can tell what decision or action is required and who owns it.",
    weak:
      "The report says access should be improved.",
    strong:
      "The identity owner should complete task-level action mapping before the next maintenance review.",
  },
  {
    quality: "Consistent",
    meaning:
      "Technical, manager, executive, and portfolio versions preserve the same core facts.",
    weak:
      "The technical report says authorization is unresolved while the executive summary calls the action unauthorized.",
    strong:
      "All versions preserve unresolved authorization and simply vary the level of detail.",
  },
  {
    quality: "Proportionate",
    meaning:
      "The amount of detail matches the recipient's role and decision needs.",
    weak:
      "Executives receive pages of raw telemetry while technical reviewers receive only a one-line conclusion.",
    strong:
      "Technical reviewers receive evidence depth and executives receive material decision context.",
  },
];

const weakToStrong = [
  {
    weak:
      "A suspicious privileged user caused an outage.",
    strong:
      "A privileged administrative action occurred shortly before service degradation; the action is confirmed, while task authorization and causal relationship remain unresolved.",
    lesson:
      "Remove unsupported intent and cause.",
  },
  {
    weak:
      "The SIEM failed and missed attacks.",
    strong:
      "The central collector experienced delay, reducing confidence in negative alert evidence during the affected interval.",
    lesson:
      "State the evidence-quality effect without inventing attacker activity.",
  },
  {
    weak:
      "Cloud security needs improvement.",
    strong:
      "The worker workload identity has a valid service purpose, but current permission scope should be compared with required resources before residual risk is finalized.",
    lesson:
      "Replace vague improvement language with a specific decision and evidence need.",
  },
  {
    weak:
      "Backups mean recovery is covered.",
    strong:
      "Backup status is current, but full restoration evidence is older than the preferred review window, leaving a bounded recovery-confidence gap.",
    lesson:
      "Separate backup existence from restoration readiness.",
  },
  {
    weak:
      "We need more logs for security.",
    strong:
      "Current telemetry answers the defined defensive questions; any additional identity fields should require documented purpose and minimization review.",
    lesson:
      "Connect collection to purpose and proportionality.",
  },
  {
    weak:
      "All risks are under control.",
    strong:
      "Service recovery is stable, while privileged-task traceability, workload-role evidence, and restoration freshness remain owned residual-risk items.",
    lesson:
      "Preserve residual risk instead of implying complete elimination.",
  },
];

const decisionOptions = [
  {
    decision: "Privileged task traceability",
    optionA:
      "Improve action-to-task mapping and post-change review before the next major maintenance window.",
    optionB:
      "Accept the current documentation gap temporarily with a named owner and review date.",
    recommendation:
      "Option A, because the improvement is targeted, supports accountability, and addresses a demonstrated evidence gap.",
    tradeoff:
      "Requires process effort but avoids broad restrictions that current evidence does not justify.",
  },
  {
    decision: "Recovery validation freshness",
    optionA:
      "Refresh the fictional restoration exercise and dependency validation.",
    optionB:
      "Accept the current evidence-age gap for a limited period.",
    recommendation:
      "Option A where practical; Option B only when an authorized risk owner documents rationale and a firm checkpoint.",
    tradeoff:
      "Validation consumes time but improves confidence in actual restoration rather than backup status alone.",
  },
  {
    decision: "Worker workload scope",
    optionA:
      "Complete the role comparison before assigning a precise residual-risk rating.",
    optionB:
      "Assume current permissions match design.",
    recommendation:
      "Option A, because purpose is known but implementation evidence is incomplete.",
    tradeoff:
      "Review adds effort but avoids both overestimating and underestimating risk.",
  },
  {
    decision: "Monitoring data expansion",
    optionA:
      "Add fields only after purpose and minimization show the current dataset is insufficient.",
    optionB:
      "Collect all available identity fields now.",
    recommendation:
      "Option A, because decision usefulness should justify collection.",
    tradeoff:
      "May limit future convenience but reduces unnecessary privacy and governance exposure.",
  },
];

const executiveBriefExample = [
  {
    label: "Situation",
    text:
      "Northbridge's fictional learning portal experienced a temporary service disruption during approved maintenance. The service is now stable.",
  },
  {
    label: "What is confirmed",
    text:
      "A privileged administrative action occurred, a worker queue degraded, central monitoring was delayed, and portal errors increased before recovery.",
  },
  {
    label: "What is not confirmed",
    text:
      "The supplied evidence does not prove malicious activity, a single root cause, or whether the 09:11 privileged action was explicitly included in the approved task.",
  },
  {
    label: "Top remaining risks",
    text:
      "Privileged-task traceability, monitoring visibility concentration, worker workload authorization evidence, and restoration-validation freshness.",
  },
  {
    label: "Privacy decision",
    text:
      "Current synthetic telemetry is sufficient for the documented defensive questions; additional identity fields should require purpose and minimization review.",
  },
  {
    label: "Recommended action",
    text:
      "Complete targeted governance improvements and evidence validation rather than broad disruptive controls unsupported by the case.",
  },
  {
    label: "Owners",
    text:
      "Identity, monitoring, cloud, privacy, and recovery owners retain their assigned follow-up actions under risk-owner coordination.",
  },
  {
    label: "Next checkpoint",
    text:
      "Update leadership after privileged-task mapping, worker-role comparison, and recovery validation are complete or materially delayed.",
  },
];

const quizQuestions = [
  {
    question:
      "What should change when the same cybersecurity case is communicated to a different audience?",
    choices: [
      "The underlying facts.",
      "The level of detail and emphasis, while facts, uncertainty, material conclusions, and ownership remain consistent.",
      "The incident status.",
      "The evidence confidence.",
    ],
    answer: 1,
    explanation:
      "Audience changes depth and emphasis, not the underlying truth of the case.",
  },
  {
    question:
      "Which sentence is strongest for an executive brief?",
    choices: [
      "A suspicious admin caused the outage.",
      "A privileged action occurred during maintenance; the event is confirmed, while exact task authorization and causal relationship remain unresolved.",
      "Nothing happened because the portal recovered.",
      "The monitoring system definitely missed an attack.",
    ],
    answer: 1,
    explanation:
      "The strongest sentence preserves the confirmed event while keeping authorization and causation bounded by evidence.",
  },
  {
    question:
      "Why should an executive brief identify owners?",
    choices: [
      "To assign blame.",
      "So leaders know who is accountable for treatment, recovery, control improvement, or follow-up decisions.",
      "Because technical details are unimportant.",
      "To replace risk analysis.",
    ],
    answer: 1,
    explanation:
      "Ownership turns findings and recommendations into accountable actions.",
  },
  {
    question:
      "What does materiality mean in executive communication?",
    choices: [
      "Including every technical detail.",
      "Focusing on information that could meaningfully affect the recipient's decision.",
      "Using stronger language than the evidence supports.",
      "Removing all uncertainty.",
    ],
    answer: 1,
    explanation:
      "Material information is information relevant to the decision the audience must make.",
  },
  {
    question:
      "Why should technical and executive summaries preserve the same uncertainty?",
    choices: [
      "Because changing uncertainty by audience would change the underlying case truth.",
      "Because executives need every raw log.",
      "Because technical teams do not need evidence.",
      "Because uncertainty should never be discussed.",
    ],
    answer: 0,
    explanation:
      "Different audiences can receive different depth, but the evidentiary limits must stay consistent.",
  },
  {
    question:
      "Which is the strongest recommendation structure?",
    choices: [
      "Improve security.",
      "Fix everything immediately.",
      "State the recommended action, why it fits the evidence, the owner, tradeoff, residual risk, and next checkpoint.",
      "List every possible technical control.",
    ],
    answer: 2,
    explanation:
      "Decision-ready recommendations explain what to do, why, who owns it, and how the decision will be reviewed.",
  },
  {
    question:
      "What is safest for the A20 executive communication phase?",
    choices: [
      "Use only fictional Northbridge facts, synthetic evidence, and invented business decisions.",
      "Add real customer or student information for realism.",
      "Copy real incident reports into the portfolio.",
      "Use production architecture screenshots.",
    ],
    answer: 0,
    explanation:
      "The capstone must remain fictional, synthetic, defensive, and publication-safe.",
  },
];

const takeaways = [
  "Audience changes the level of detail and emphasis, not the underlying facts, uncertainty, or material conclusions.",
  "Executive communication should focus on situation, impact, current state, confidence, material risks, recommendation, owner, and next checkpoint.",
  "Technical depth belongs where it supports technical decisions; executives need enough evidence context to understand confidence and tradeoffs.",
  "Materiality helps decide which facts belong in a leadership brief and which belong in supporting technical records.",
  "Bounded language is stronger than dramatic language because it preserves what the evidence actually proves.",
  "Recommendations become actionable when they include rationale, owner, tradeoff, residual risk, and review trigger.",
  "Privacy and risk decisions should remain visible in executive communication when they materially affect the organization's next action.",
  "The entire A20 executive communication phase remains fictional, synthetic, defensive, non-operational, and publication-safe.",
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

export default function ExecutiveCommunicationPhasePage() {
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
              A20.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Executive Communication Phase
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A20.7 established which risks, privacy decisions, treatments, owners,
            and uncertainties matter. A20.8 turns those results into communication
            that technical teams, managers, and executives can actually use.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The goal is not to make the case sound simpler than it is. The goal is
            to preserve the same truth at different levels of detail so every
            audience understands the impact, confidence, decision, owner, and next
            checkpoint appropriate to its role.
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
          lessonTitle="Executive Communication Phase"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can identify the most material Northbridge risks without listing every technical finding.",
            "I can explain the difference between confirmed facts and unresolved interpretation.",
            "I can name the owners and next decisions associated with the most important findings.",
            "I will preserve the same evidence boundaries in technical, manager, executive, and portfolio versions.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Good Security Communication Makes Better Decisions Possible"
        >
          <p className="leading-8">
            A technically correct report can still fail if the intended reader
            cannot tell what matters, what is known, what remains uncertain, what
            decision is needed, or who owns the next action.
          </p>

          <p className="mt-4 leading-8">
            Strong communication reduces unnecessary detail without reducing
            integrity. The technical record may contain source-health history,
            timeline evidence, and validation notes. The executive brief may need
            only the material impact, confidence, recommendation, residual risk,
            owner, and next checkpoint—but those conclusions must still match the
            technical record.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.8">
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
          title="Eight Communication Concepts Before Writing the Brief"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {communicationConcepts.map((item) => (
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
          eyebrow="Audience Design"
          title="Five Audiences, One Consistent Case"
        >
          <p className="leading-8">
            A communication package should not be a copy-and-paste exercise. Each
            audience receives the information needed for its role while the facts,
            confidence, and material conclusions stay aligned.
          </p>

          <div className="mt-6 grid gap-5">
            {audienceViews.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.audience}
                </h3>
                <p className="mt-3 leading-7 text-purple-100">
                  <span className="font-black">Purpose:</span> {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Include:</span> {item.include}
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Avoid:</span> {item.avoid}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Example:</span> {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Executive Communication Board"
          subtitle="Synthetic materiality, decision, ownership, and communication-readiness snapshot"
          metrics={[
            {
              label: "Material findings",
              value: "5",
              note: "Privilege, monitoring, workload access, recovery, privacy",
            },
            {
              label: "Audience views",
              value: "5",
              note: "Technical, manager, executive, risk/privacy, portfolio",
            },
            {
              label: "Confirmed malicious activity",
              value: "0",
              note: "No supplied evidence proves malicious activity",
            },
            {
              label: "Owned follow-up items",
              value: "5",
              note: "Each material item has an accountable fictional owner",
            },
          ]}
        />

        <FakeAlertCard
          title="Executive Summary Overstates Root Cause"
          severity="High"
          time="A20.8 review"
          source="Synthetic Northbridge Communication Quality Queue"
          details="A draft executive summary says a privileged administrator caused the portal outage, while the technical record says only that the privileged action is confirmed and causation remains unresolved."
          recommendation="Align the executive wording with the technical evidence: preserve the event, service impact, remaining uncertainty, material risks, targeted recommendation, owners, and next checkpoint without inventing cause or intent."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Communication Notes"
          logs={[
            "[FACT] portal disruption occurred during approved maintenance and later recovered",
            "[FACT] privileged action confirmed by identity and application evidence",
            "[UNKNOWN] exact task-level authorization of 09:11 action remains unresolved",
            "[FACT] monitoring collector delay reduced confidence in negative alert evidence",
            "[RISK] worker workload scope requires current authorization comparison",
            "[RISK] restoration evidence is older than the preferred review window",
            "[PRIVACY] proposed extra identity fields lack documented purpose",
            "[DECISION] targeted governance improvements preferred over broad disruptive changes",
            "[OWNERS] identity, monitoring, cloud, privacy, and recovery follow-ups assigned",
            "[SAFETY] all people, systems, risks, evidence, and communications are fictional",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — What Belongs in the Executive Brief?"
          question="Which summary best reflects the Northbridge case for leadership?"
          evidence={[
            "Portal service recovered after a short disruption.",
            "A privileged event is confirmed, but task authorization and causal relationship remain unresolved.",
            "Collector delay affected negative-evidence confidence.",
            "Several targeted governance and recovery follow-ups have named owners.",
            "No supplied evidence proves malicious activity.",
          ]}
          options={[
            "An administrator caused a security breach that took down the portal",
            "Service is stable; no malicious activity is proven, but targeted improvements are needed for privileged-task traceability, monitoring resilience, workload authorization evidence, and recovery validation",
            "Nothing important happened because the portal recovered",
            "All cloud and identity controls failed",
          ]}
          bestAnswer={1}
          explanation="The strongest executive summary communicates current status, bounded evidence, material residual risks, and targeted next actions without exaggeration."
        />

        <Section
          eyebrow="Executive Structure"
          title="Eight Elements of a Decision-Ready Leadership Brief"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {executiveStructure.map((item) => (
              <article
                key={item.element}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.element}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Northbridge:</span>{" "}
                  {item.northbridge}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Material Findings"
          title="Five Findings Worth Leadership Attention"
        >
          <div className="grid gap-5">
            {materialFindings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.title}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                    <span className="font-black">Technical meaning:</span>{" "}
                    {item.technical}
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Business meaning:</span>{" "}
                    {item.business}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Confidence:</span>{" "}
                  {item.confidence}
                </p>
                <p className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Recommendation:</span>{" "}
                  {item.recommendation}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Owner:</span>{" "}
                  {item.owner}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Checkpoint:</span>{" "}
                  {item.checkpoint}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Communication Quality"
          title="Six Qualities of Strong Security Communication"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {communicationQuality.map((item) => (
              <article
                key={item.quality}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.quality}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                  <span className="font-black">Weak:</span> {item.weak}
                </p>
                <p className="mt-3 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Strong:</span> {item.strong}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Different Audience, Same Truth"
          question="The technical report says worker authorization scope is Unknown pending role comparison. What should the executive brief say?"
          evidence={[
            "The worker has a legitimate business purpose.",
            "Exact current authorization scope is not fully represented in the supplied evidence.",
            "No evidence proves the role is overprivileged.",
            "The cloud owner has a planned role comparison.",
          ]}
          options={[
            "The worker identity is dangerously overprivileged",
            "The worker role is fully safe",
            "Current workload scope has not yet been fully validated; the cloud owner will compare required resources with current role evidence before residual risk is finalized",
            "Remove the issue because executives do not need uncertainty",
          ]}
          bestAnswer={2}
          explanation="The executive version should preserve the same evidence boundary while translating it into a concise decision and ownership statement."
        />

        <Section
          eyebrow="Rewrite Practice"
          title="Turn Weak Security Language Into Defensible Communication"
        >
          <div className="grid gap-5">
            {weakToStrong.map((item) => (
              <article
                key={item.weak}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <p className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                  <span className="font-black">Weak:</span> {item.weak}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Stronger:</span> {item.strong}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  <span className="font-black">Lesson:</span> {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Support"
          title="Give Leaders Options, Tradeoffs, and a Recommended Path"
        >
          <p className="leading-8">
            Executive communication is stronger when leaders can see the actual
            choice. A recommendation should explain why one option fits the
            evidence better, what tradeoff remains, and who owns the outcome.
          </p>

          <div className="mt-6 grid gap-5">
            {decisionOptions.map((item) => (
              <article
                key={item.decision}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-xl font-black text-blue-50">
                  {item.decision}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                    <span className="font-black">Option A:</span> {item.optionA}
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Option B:</span> {item.optionB}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Recommendation:</span>{" "}
                  {item.recommendation}
                </p>
                <p className="mt-3 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Tradeoff:</span> {item.tradeoff}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Example Executive Brief"
          title="Northbridge Leadership Summary"
        >
          <p className="leading-8">
            This example shows how a leadership brief can remain concise without
            losing evidence discipline.
          </p>

          <div className="mt-6 grid gap-4">
            {executiveBriefExample.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  {item.label}
                </p>
                <p className="mt-2 leading-7 text-purple-50">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Communication Mistakes"
          title="What Weakens Executive Security Communication"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Changing the truth for the audience",
                detail:
                  "Simplification should remove unnecessary detail, not change authorization status, incident status, confidence, or causation.",
              },
              {
                title: "Leading with technical volume",
                detail:
                  "Thousands of events are not automatically material. Explain the business decision supported by the evidence.",
              },
              {
                title: "Hiding uncertainty",
                detail:
                  "Bounded uncertainty builds credibility and helps leaders understand which evidence or decisions remain open.",
              },
              {
                title: "Giving recommendations without owners",
                detail:
                  "A leader should be able to tell who is responsible for the next action and when progress will be reviewed.",
              },
              {
                title: "Using dramatic language",
                detail:
                  "Words such as breach, compromise, attack, or failure should match the evidence and governance state.",
              },
              {
                title: "Leaving out privacy and residual risk",
                detail:
                  "Leadership needs material privacy, treatment, recovery, and residual-risk decisions when they affect the organization's next action.",
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
          title="Build the Executive Capstone Brief"
        >
          <p className="leading-8">
            Use only the fictional Northbridge evidence created in A20.2–A20.7.
            Your goal is to create aligned communication for several audiences, not
            to add new facts.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Select material findings",
                detail:
                  "Choose the three to five findings most likely to affect leadership decisions and explain why each is material.",
              },
              {
                title: "Task 2 — Write the technical view",
                detail:
                  "Preserve evidence, source health, confidence, owners, validation, and unresolved questions.",
              },
              {
                title: "Task 3 — Write the manager view",
                detail:
                  "Summarize service state, priorities, owners, treatment progress, dependencies, deadlines, and escalation triggers.",
              },
              {
                title: "Task 4 — Write the executive view",
                detail:
                  "Use situation, impact, current state, confidence, top risks, recommendation, owner, and next checkpoint.",
              },
              {
                title: "Task 5 — Check consistency",
                detail:
                  "Compare all versions and verify that incident status, authorization state, confidence, risk, and privacy decisions are identical underneath the different depth.",
              },
              {
                title: "Task 6 — Prepare presentation notes",
                detail:
                  "Create a short speaking outline that explains the case without reading every slide or adding unsupported claims.",
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
          title="Scenario Decision 1 — Executive Wants a Yes-or-No Root Cause"
          scenario="A fictional executive asks whether the privileged action caused the service disruption. The supplied evidence still supports several plausible explanations."
          choices={[
            {
              label: "Choice A",
              response:
                "State that the privileged action is confirmed and material, but current evidence does not establish it as the root cause; summarize the strongest known contributing conditions and the next evidence checkpoint.",
              outcome:
                "Best communication. It answers directly while preserving the evidentiary boundary.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Say yes because executives need certainty.",
              outcome:
                "Risky. Audience pressure does not justify changing the evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Refuse to provide any useful status until every uncertainty is resolved.",
              outcome:
                "Caution. Leaders can receive a bounded answer that clearly states what is known and unknown.",
              tone: "caution",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Executive Brief Is Too Technical"
          scenario="The draft leadership brief includes every synthetic timestamp, telemetry field, and source-health metric, but the actual decision request is hard to find."
          choices={[
            {
              label: "Choice A",
              response:
                "Move detailed evidence to the technical appendix and lead the executive brief with impact, confidence, material risks, recommendation, owner, tradeoff, and next checkpoint.",
              outcome:
                "Best audience design. Technical traceability is preserved without burying the leadership decision.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete all technical supporting evidence from the project.",
              outcome:
                "Risky. Executive brevity should not eliminate the technical record.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep every detail in the leadership brief because more information is always better.",
              outcome:
                "Caution. Excess detail can hide the material decision and reduce communication usefulness.",
              tone: "caution",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Deliver the Same Finding in Four Levels of Detail"
        >
          <p className="leading-8">
            Use privileged-task traceability as the finding. Write four versions
            that preserve the same status and confidence.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "One technical paragraph",
                detail:
                  "Include evidence sources, event state, maintenance context, source-health limitation, authorization gap, and validation need.",
              },
              {
                title: "One manager paragraph",
                detail:
                  "Include service relevance, current state, owner, priority, next action, and escalation trigger.",
              },
              {
                title: "Two executive sentences",
                detail:
                  "State the material issue, current confidence, recommended action, and accountable owner.",
              },
              {
                title: "One portfolio caption",
                detail:
                  "Explain what the artifact demonstrates about evidence discipline, professional communication, and bounded reasoning.",
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
          title="Executive Communication Phase Checklist"
          items={[
            "I can identify the audience and the decision that audience needs to make.",
            "I can distinguish material information from supporting technical detail.",
            "I can preserve the same confirmed facts and uncertainty across technical, manager, executive, risk/privacy, and portfolio views.",
            "I can explain service impact in business language without inventing additional impact.",
            "I can communicate severity or importance separately from evidence confidence.",
            "I can present options and recommend a path based on the available evidence.",
            "I can identify an accountable owner for every material recommendation.",
            "I can state residual risk and privacy implications when they affect the decision.",
            "I can define the next checkpoint or review trigger.",
            "I can remove dramatic or unsupported language such as breach, attack, or compromise when the evidence does not prove those states.",
            "I can keep technical evidence available in supporting artifacts without overwhelming leadership communication.",
            "I can prepare concise presentation notes without changing the case facts.",
            "I will use only fictional Northbridge evidence, impacts, owners, and decisions.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.8 Knowledge Check">
          <MiniQuiz
            title="A20.8 Mini Quiz: Executive Communication Phase"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Executive Capstone Brief"
          prompt="Create a fictional Northbridge Executive Capstone Brief. Include a technical view, manager view, executive view, and portfolio-facing summary that preserve the same confirmed facts and uncertainty. Identify the situation, business impact, current state, evidence confidence, three to five material risks or governance findings, privacy implications, recovery state, options, recommendation, tradeoffs, residual risk, accountable owners, decisions required, next checkpoints, and reopen or escalation triggers. Add a consistency review showing that incident status, privileged-action authorization status, workload-identity scope, monitoring-source health, recovery confidence, and privacy decisions are aligned across all audience versions."
          tips={[
            "Change depth and emphasis by audience, not the underlying facts.",
            "Lead executive communication with impact, current state, confidence, decision, owner, and next checkpoint.",
            "Keep technical evidence in supporting records so brevity does not destroy traceability.",
            "Use bounded language for unresolved authorization, root cause, workload scope, and recovery evidence.",
            "Include privacy and residual-risk decisions when they materially affect leadership.",
            "Use only fictional Northbridge systems, records, risks, people, and business impacts.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.9?"
        >
          <p className="leading-8">
            A20.9 moves into Final Portfolio Submission. Before continuing, make
            sure the capstone can be explained coherently without contradictions
            between the technical record and leadership summary.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can summarize the Northbridge case in two executive sentences without changing the facts.",
              "I can explain which details belong in technical evidence rather than the executive brief.",
              "I can preserve unresolved authorization and causation honestly across every audience view.",
              "I can identify owners, recommendations, residual risks, privacy decisions, and next checkpoints.",
              "I can prepare the capstone for portfolio submission without exposing real-world sensitive information.",
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
          title="Make the Executive Brief Ready for Final Submission"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Keep one source of truth",
                detail:
                  "Use the technical evidence record as the foundation so later summaries cannot quietly change case status.",
              },
              {
                title: "Use stable finding IDs",
                detail:
                  "Executive findings should point back to architecture, monitoring, incident, cloud, identity, risk, and privacy records.",
              },
              {
                title: "Record recommendation rationale",
                detail:
                  "A reviewer should understand why the selected option fits the evidence better than alternatives.",
              },
              {
                title: "Show uncertainty deliberately",
                detail:
                  "Bounded confidence demonstrates mature reasoning rather than weakness.",
              },
              {
                title: "Preserve owners and checkpoints",
                detail:
                  "Follow-up actions should remain visible in the final portfolio instead of ending at the presentation slide.",
              },
              {
                title: "Separate appendix from summary",
                detail:
                  "Keep technical evidence accessible while making the executive view concise and readable.",
              },
              {
                title: "Add presentation reflection",
                detail:
                  "Explain how the communication changed for each audience and what information remained constant.",
              },
              {
                title: "Maintain publication safety",
                detail:
                  "All case names, identities, systems, impacts, records, architecture, and metrics must remain fictional and synthetic.",
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
            Executive communication stays fictional, defensive, and publication-safe
          </h2>
          <p className="mt-3 leading-7">
            Use only synthetic Northbridge evidence, invented identities, fictional
            business impacts, and fictional owner roles. Do not include real
            incident details, private records, real organization names, production
            architecture, credentials, internal screenshots, customer or student
            information, or unresolved real-world security findings. The lesson
            evaluates accurate communication, decision support, ownership, and
            professional presentation only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.8 Executive Communication Phase Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The capstone now has aligned technical, manager, executive, risk/privacy,
            and portfolio communication with material findings, recommendations,
            owners, residual risk, and next checkpoints. Next, A20.9 assembles the
            strongest work into the Final Portfolio Submission.
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