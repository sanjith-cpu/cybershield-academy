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
const previousLesson = `${modulePath}/cloud-and-identity-review-phase`;
const nextLesson = `${modulePath}/executive-communication-phase`;

const objectives = [
  "Explain how cybersecurity findings become business risk decisions by connecting threat condition, likelihood, impact, control strength, evidence confidence, ownership, treatment, and residual risk.",
  "Evaluate privacy through purpose, minimization, access, retention, sharing, transparency, lifecycle, and proportionality instead of treating privacy as a separate afterthought.",
  "Distinguish a technical observation, security finding, privacy concern, risk statement, treatment option, exception, acceptance decision, and review trigger.",
  "Use uncertainty explicitly when risk or privacy evidence is incomplete, stale, conflicting, or dependent on unresolved authorization and recovery questions.",
  "Create a Risk and Privacy Decision Register that preserves evidence, rationale, owners, treatment decisions, privacy controls, residual risk, and future review triggers.",
];

const riskConcepts = [
  {
    concept: "Risk statement",
    meaning:
      "A concise explanation of a plausible condition, the asset or business outcome affected, and the adverse consequence that matters.",
    northbridge:
      "If privileged administrative actions cannot be mapped reliably to approved task scope, Northbridge may have reduced confidence in configuration integrity and accountability.",
    professionalUse:
      "Turns a technical concern into a decision-relevant statement without claiming a confirmed incident.",
  },
  {
    concept: "Likelihood",
    meaning:
      "A reasoned estimate of how plausible the risk condition is within the fictional case, based on evidence, exposure, controls, and uncertainty.",
    northbridge:
      "The 09:11 action is confirmed, but task authorization remains unresolved, so likelihood of an authorization-control problem cannot be stated as certain.",
    professionalUse:
      "Prevents risk ratings from pretending that incomplete evidence is complete.",
  },
  {
    concept: "Impact",
    meaning:
      "The consequence to mission, service availability, protected data, trust, privacy, compliance, recovery, or decision quality if the condition occurs.",
    northbridge:
      "A privileged configuration problem could affect portal access, service reliability, or confidence in administrative governance.",
    professionalUse:
      "Explains why the issue deserves attention in business terms.",
  },
  {
    concept: "Control strength",
    meaning:
      "How well current preventive, detective, response, recovery, privacy, and governance controls reduce the risk in practice.",
    northbridge:
      "Approved maintenance, role design, logging, source-health monitoring, recovery, and change review exist, but several evidence gaps remain.",
    professionalUse:
      "Separates control design from actual evidence that the control is current and effective.",
  },
  {
    concept: "Inherent risk",
    meaning:
      "The risk level before considering the effect of current controls.",
    northbridge:
      "Privileged administrative changes to identity or service configuration have meaningful potential impact before control protections are considered.",
    professionalUse:
      "Shows why the control environment matters.",
  },
  {
    concept: "Residual risk",
    meaning:
      "The meaningful exposure that remains after current controls, treatment, evidence, and limitations are considered.",
    northbridge:
      "Even with approved maintenance and logging, incomplete task mapping leaves residual uncertainty about one privileged event.",
    professionalUse:
      "Prevents the existence of controls from being treated as complete risk elimination.",
  },
  {
    concept: "Treatment",
    meaning:
      "The chosen response to risk: reduce, avoid, transfer/share where appropriate, or accept with accountable rationale and review.",
    northbridge:
      "Northbridge may reduce authorization uncertainty by improving task-level privileged-action traceability and owner review.",
    professionalUse:
      "Turns analysis into an owned business decision.",
  },
  {
    concept: "Review trigger",
    meaning:
      "A future event that should cause the risk or privacy decision to be re-evaluated.",
    northbridge:
      "A new privileged event, identity-role change, service redesign, failed recovery exercise, or material monitoring change could trigger reassessment.",
    professionalUse:
      "Keeps decisions current when systems and evidence change.",
  },
];

const privacyConcepts = [
  {
    concept: "Purpose limitation",
    meaning:
      "Collect or use data for a defined, legitimate defensive or business purpose rather than simply because it is available.",
    northbridge:
      "Monitoring records should support identity, service-health, incident, audit, and recovery decisions defined by the capstone.",
    decisionEffect:
      "A data field with no clear defensive purpose should not be automatically added to the fictional monitoring design.",
  },
  {
    concept: "Data minimization",
    meaning:
      "Use the least amount and sensitivity of data needed to achieve the stated purpose.",
    northbridge:
      "A detection may need synthetic role, action category, target class, and timing without needing unnecessary personal details.",
    decisionEffect:
      "Security visibility and privacy protection can improve together when collection is purpose-driven.",
  },
  {
    concept: "Access limitation",
    meaning:
      "Only appropriate roles should view security or privacy-sensitive evidence.",
    northbridge:
      "Technical responders may need detailed event records while executives need summarized impact and decision information.",
    decisionEffect:
      "Audience needs should influence both communication and access.",
  },
  {
    concept: "Retention",
    meaning:
      "Keep evidence only as long as needed for security, legal, operational, learning, or governance purposes defined by policy.",
    northbridge:
      "Synthetic monitoring evidence should have a fictional retention rule tied to review and training needs.",
    decisionEffect:
      "Indefinite retention is not automatically justified by potential future usefulness.",
  },
  {
    concept: "Sharing",
    meaning:
      "Define when data may move between teams, systems, providers, or external parties and what safeguards apply.",
    northbridge:
      "A fictional executive summary may share conclusions without exposing all technical event details.",
    decisionEffect:
      "Communication should preserve decision value while limiting unnecessary detail.",
  },
  {
    concept: "Transparency",
    meaning:
      "Explain what data is collected or used, why, by whom, and under what governance when appropriate.",
    northbridge:
      "Monitoring design should document the purpose of identity and service evidence rather than hiding collection inside technical implementation.",
    decisionEffect:
      "Clear purpose improves both trust and governance.",
  },
  {
    concept: "Lifecycle",
    meaning:
      "Privacy decisions should cover collection, use, storage, access, retention, archival, and deletion or disposal.",
    northbridge:
      "The monitoring and incident evidence should have an end-to-end fictional lifecycle, not only an ingestion step.",
    decisionEffect:
      "Good privacy review follows the data from creation through final disposition.",
  },
  {
    concept: "Proportionality",
    meaning:
      "The privacy cost or intrusiveness of a control should be reasonable compared with the security purpose and risk it addresses.",
    northbridge:
      "A low-risk service-health question should not justify collecting substantially more identity detail than needed.",
    decisionEffect:
      "Security controls should be strong enough for the risk without becoming unnecessarily invasive.",
  },
];

const riskRecords = [
  {
    id: "RISK-NB-01",
    title: "Privileged Task Traceability Gap",
    condition:
      "A confirmed privileged administrative action cannot yet be mapped to the exact approved maintenance task.",
    impact:
      "Configuration integrity, accountability, and incident interpretation may be harder to defend.",
    likelihood:
      "Medium uncertainty — the event is confirmed, but authorization evidence is incomplete.",
    controls:
      "Privileged role separation, maintenance approval, identity logging, application audit, owner review.",
    residual:
      "Moderate until task-level evidence is resolved or governance is improved.",
    treatment:
      "Reduce through task-level action mapping, post-change validation, and owner confirmation.",
    owner:
      "Fictional Identity Governance Owner",
    review:
      "Review after the missing task record is resolved and after any future privileged-maintenance redesign.",
  },
  {
    id: "RISK-NB-02",
    title: "Monitoring Visibility Concentration",
    condition:
      "Several defensive decisions depend on a central collector that can experience delay or backlog.",
    impact:
      "Detection confidence and incident chronology may degrade during important periods.",
    likelihood:
      "Demonstrated in the synthetic case; recurrence likelihood not yet established.",
    controls:
      "Source-health monitoring, backlog visibility, alternate source context, catch-up validation.",
    residual:
      "Low to Moderate if degraded-source behavior and recovery validation remain effective.",
    treatment:
      "Reduce through explicit degraded-state handling and continued source-health validation.",
    owner:
      "Fictional Monitoring Platform Owner",
    review:
      "Review after material collector changes or another source-health event.",
  },
  {
    id: "RISK-NB-03",
    title: "Worker Workload Authorization Scope",
    condition:
      "The worker identity has a valid business purpose but incomplete current evidence showing exact authorization scope.",
    impact:
      "Excess or stale permissions could increase exposure to protected data or job-processing resources.",
    likelihood:
      "Unknown until current synthetic role scope is compared with required access.",
    controls:
      "Workload identity separation, architecture mapping, access review, audit evidence.",
    residual:
      "Cannot be rated confidently until the scope evidence gap is resolved.",
    treatment:
      "Review and reduce any access that is not required by the worker purpose.",
    owner:
      "Fictional Cloud and Identity Owner",
    review:
      "Review after role comparison and after major worker-service or data-access changes.",
  },
  {
    id: "RISK-NB-04",
    title: "Recovery Validation Freshness",
    condition:
      "Current backups exist, but the latest complete restoration exercise is older than the preferred review window.",
    impact:
      "Leadership may overestimate how confidently the service can be restored during a future disruption.",
    likelihood:
      "The evidence-freshness gap is confirmed.",
    controls:
      "Current backup monitoring, recovery owner, prior restoration exercise, service validation.",
    residual:
      "Moderate until restoration evidence is refreshed or the risk owner accepts the gap.",
    treatment:
      "Reduce through a fictional scheduled recovery validation and refreshed dependency review.",
    owner:
      "Fictional Recovery Owner",
    review:
      "Review after the next restoration exercise or significant architecture change.",
  },
  {
    id: "RISK-NB-05",
    title: "Monitoring Data Proportionality",
    condition:
      "Security telemetry may collect more identity or activity detail than is necessary for the documented defensive purpose.",
    impact:
      "Unnecessary collection, access, or retention could increase privacy and governance exposure.",
    likelihood:
      "Review needed — purpose is defined, but field-level minimization has not been completed.",
    controls:
      "Purpose documentation, role-limited access, retention policy, privacy review.",
    residual:
      "Unknown until the data-field and retention review is complete.",
    treatment:
      "Reduce by mapping each collected field to a defensive purpose and removing unnecessary fields.",
    owner:
      "Fictional Monitoring Owner + Privacy Reviewer",
    review:
      "Review after monitoring design changes, new data sources, or revised retention needs.",
  },
];

const privacyInventory = [
  {
    data: "Synthetic identity identifier",
    purpose:
      "Correlate authentication, role, and administrative activity within the fictional case.",
    minimize:
      "Use an invented stable identifier rather than real personal information.",
    access:
      "Technical responder and identity-review roles only.",
    retention:
      "Retain only for the duration of the fictional case and portfolio artifact as anonymized synthetic evidence.",
    concern:
      "No real identity data should ever be substituted.",
  },
  {
    data: "Synthetic role and privilege state",
    purpose:
      "Determine whether an action occurred under standard or privileged authority.",
    minimize:
      "Record role category and needed scope instead of unrelated profile information.",
    access:
      "Identity, incident, risk, and selected governance reviewers.",
    retention:
      "Retain as part of the fictional decision record.",
    concern:
      "Role information can still be sensitive in real environments, so the portfolio uses invented roles only.",
  },
  {
    data: "Synthetic application action",
    purpose:
      "Understand what administrative or service action occurred and which decision it may affect.",
    minimize:
      "Use action category and fictional target class without exposing real commands, secrets, or sensitive content.",
    access:
      "Technical reviewers and summarized management views.",
    retention:
      "Retain only as needed for the capstone evidence chain.",
    concern:
      "Do not include operational instructions or real production values.",
  },
  {
    data: "Service-health metrics",
    purpose:
      "Measure portal, worker, queue, collector, and recovery state.",
    minimize:
      "Collect only metrics needed for availability, source health, and recovery decisions.",
    access:
      "Technical and service owners; summarized for leadership.",
    retention:
      "Keep according to the fictional monitoring requirement and portfolio need.",
    concern:
      "Service-health data is less personal but can still reveal sensitive architecture in real environments.",
  },
  {
    data: "Change-management context",
    purpose:
      "Compare administrative events with approved maintenance scope and ownership.",
    minimize:
      "Use fictional change ID, owner role, task category, and timing rather than real employee details.",
    access:
      "Incident, identity, service, and governance reviewers.",
    retention:
      "Retain through case closure and review.",
    concern:
      "Approval context is evidence, not automatic proof that every event was expected.",
  },
  {
    data: "Recovery evidence",
    purpose:
      "Show whether service, dependencies, monitoring, and configuration meet return-to-service criteria.",
    minimize:
      "Record pass/fail/partial status and evidence references without real backup contents.",
    access:
      "Recovery, incident, risk, and leadership reviewers as appropriate.",
    retention:
      "Retain as evidence of the fictional review cycle.",
    concern:
      "Never include real backup files, secrets, or protected records in a portfolio.",
  },
];

const decisionStates = [
  {
    state: "Observation",
    example:
      "The monitoring collector experienced delay during the case window.",
    decisionMeaning:
      "A factual condition that may influence risk or privacy analysis.",
  },
  {
    state: "Finding",
    example:
      "Collector delay reduces confidence in negative monitoring evidence.",
    decisionMeaning:
      "A defensible conclusion about why the observation matters.",
  },
  {
    state: "Risk",
    example:
      "Monitoring concentration could delay detection and weaken incident decisions during future collector degradation.",
    decisionMeaning:
      "A future or remaining adverse outcome requiring ownership and treatment.",
  },
  {
    state: "Privacy concern",
    example:
      "Some identity fields may exceed the documented purpose of the fictional detection.",
    decisionMeaning:
      "A data-use or lifecycle question that requires purpose, minimization, access, and retention review.",
  },
  {
    state: "Treatment",
    example:
      "Add source-health-aware degraded behavior and reduce unnecessary identity fields.",
    decisionMeaning:
      "An action selected to reduce risk or privacy exposure.",
  },
  {
    state: "Exception",
    example:
      "A temporary retention period exceeds the standard because an active review requires additional evidence history.",
    decisionMeaning:
      "A bounded approved deviation with owner, rationale, expiration, risk, and compensating controls.",
  },
  {
    state: "Acceptance",
    example:
      "The risk owner accepts a short evidence-freshness gap until the scheduled recovery review.",
    decisionMeaning:
      "A business decision to live with residual risk for a defined reason and period.",
  },
  {
    state: "Review trigger",
    example:
      "A new cloud service, privileged-role redesign, or failed recovery exercise requires reassessment.",
    decisionMeaning:
      "A condition that causes the current decision to be revisited.",
  },
];

const treatmentOptions = [
  {
    option: "Reduce",
    use:
      "Strengthen controls, improve evidence, narrow access, improve recovery, or change a process so the risk becomes smaller.",
    northbridge:
      "Improve privileged task traceability and workload-role review.",
    caution:
      "Treatment should identify the specific risk reduction and validation evidence expected.",
  },
  {
    option: "Avoid",
    use:
      "Stop or redesign an activity when the risk exceeds the value and cannot be reduced appropriately.",
    northbridge:
      "A fictional data collection with no defensible purpose could be removed rather than retained.",
    caution:
      "Avoidance should not be confused with hiding evidence or disabling important monitoring.",
  },
  {
    option: "Share / transfer where appropriate",
    use:
      "Use contractual, service, insurance, or shared operational arrangements to distribute parts of the consequence or responsibility.",
    northbridge:
      "A managed service may shift some operational responsibility while Northbridge still owns identity, data, configuration, and governance decisions.",
    caution:
      "Responsibility can be shared, but accountability for customer-controlled decisions does not disappear.",
  },
  {
    option: "Accept",
    use:
      "An authorized risk owner decides that the remaining exposure is tolerable for a defined reason, duration, and context.",
    northbridge:
      "The recovery owner may accept a short validation-schedule gap if current controls and business context justify it.",
    caution:
      "Acceptance requires rationale, owner, evidence, residual-risk statement, and review trigger.",
  },
];

const privacyQuestions = [
  {
    question: "Why is this data needed?",
    strong:
      "The field is tied to a documented defensive or business decision.",
    weak:
      "The field is collected because the platform makes it available.",
  },
  {
    question: "Can less data achieve the same purpose?",
    strong:
      "Use the least detail needed for the security question.",
    weak:
      "Keep every available field in case it becomes useful someday.",
  },
  {
    question: "Who needs access?",
    strong:
      "Access follows role purpose and audience need.",
    weak:
      "Everyone on the project can view everything.",
  },
  {
    question: "How long is it needed?",
    strong:
      "Retention is connected to investigation, policy, learning, and governance requirements.",
    weak:
      "Keep the evidence forever by default.",
  },
  {
    question: "What happens when the purpose ends?",
    strong:
      "Archive, delete, anonymize, or otherwise dispose according to the defined lifecycle.",
    weak:
      "No end-state decision exists.",
  },
  {
    question: "What changes require review?",
    strong:
      "New data sources, new purposes, changed access, longer retention, new sharing, or redesigned monitoring trigger privacy reassessment.",
    weak:
      "Privacy is reviewed only once at project launch.",
  },
];

const riskPrivacyDecisions = [
  {
    id: "DEC-RP-01",
    decision:
      "Treat privileged task traceability as a control-improvement risk rather than a confirmed security breach.",
    evidence:
      "The event is confirmed; maintenance is approved; task-level mapping is incomplete; malicious intent is unproven.",
    privacy:
      "Use synthetic role and action references only; no real user details are needed.",
    owner:
      "Fictional Identity Governance Owner",
    treatment:
      "Improve task-level mapping, post-change validation, and periodic privileged-access review.",
    residual:
      "Moderate until evidence improves.",
  },
  {
    id: "DEC-RP-02",
    decision:
      "Treat central monitoring delay as a visibility and decision-quality risk.",
    evidence:
      "The collector backlog demonstrably reduced near-real-time confidence during the case.",
    privacy:
      "Source-health monitoring can often rely on service metrics rather than collecting additional identity details.",
    owner:
      "Fictional Monitoring Platform Owner",
    treatment:
      "Strengthen degraded-state indicators, backlog validation, and alternate evidence context.",
    residual:
      "Low to Moderate after current controls.",
  },
  {
    id: "DEC-RP-03",
    decision:
      "Keep worker workload authorization risk unrated until current synthetic scope evidence is compared with required access.",
    evidence:
      "Business purpose is clear, but exact role scope is incomplete.",
    privacy:
      "Because the worker reaches protected data, unnecessary access could increase both security and privacy exposure.",
    owner:
      "Fictional Cloud and Identity Owner",
    treatment:
      "Complete role comparison and reduce any permissions not justified by service purpose.",
    residual:
      "Unknown pending evidence.",
  },
  {
    id: "DEC-RP-04",
    decision:
      "Require monitoring-data minimization review before expanding synthetic identity telemetry.",
    evidence:
      "Current monitoring purpose is defined, but additional identity fields are not yet justified.",
    privacy:
      "Purpose, minimization, access, retention, and transparency should be reviewed before collection expands.",
    owner:
      "Fictional Privacy Reviewer + Monitoring Owner",
    treatment:
      "Map each field to a defensive question and exclude unnecessary fields.",
    residual:
      "Low if current limited dataset is retained; unknown for proposed expansion.",
  },
  {
    id: "DEC-RP-05",
    decision:
      "Treat stale full-restoration evidence as an owned residual-risk item until refreshed.",
    evidence:
      "Current backups are confirmed, but complete restoration validation is older than the preferred window.",
    privacy:
      "Recovery evidence should avoid containing real protected records or secrets.",
    owner:
      "Fictional Recovery Owner",
    treatment:
      "Refresh restoration validation and dependency review or document time-bounded acceptance.",
    residual:
      "Moderate until resolved or accepted.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of a risk statement?",
    choices: [
      "To give every technical issue a High rating.",
      "To connect a plausible condition to the business or security consequence that matters.",
      "To replace incident response.",
      "To prove malicious intent.",
    ],
    answer: 1,
    explanation:
      "A useful risk statement connects condition, affected asset or outcome, and adverse consequence so an owner can make a decision.",
  },
  {
    question:
      "The worker workload identity has a valid purpose, but exact current permissions are unknown. What is the strongest risk treatment?",
    choices: [
      "Rate the risk High immediately.",
      "Assume the permissions are least privilege because the service works.",
      "Preserve the evidence gap, compare required access with current synthetic scope, and rate residual risk only when evidence supports it.",
      "Delete the worker identity from the architecture.",
    ],
    answer: 2,
    explanation:
      "Incomplete evidence should remain visible. Risk ratings should not invent certainty about either excessive or correct access.",
  },
  {
    question:
      "What does data minimization mean?",
    choices: [
      "Collect every field and delete it later.",
      "Use the least amount and sensitivity of data needed for the documented purpose.",
      "Never collect security evidence.",
      "Store security evidence forever.",
    ],
    answer: 1,
    explanation:
      "Data minimization seeks the smallest useful dataset for the legitimate purpose.",
  },
  {
    question:
      "Why is residual risk important?",
    choices: [
      "Because controls never matter.",
      "Because it describes meaningful exposure remaining after controls and treatment are considered.",
      "Because every residual risk must be zero.",
      "Because it replaces control validation.",
    ],
    answer: 1,
    explanation:
      "Controls can reduce risk without eliminating it. Residual risk makes the remaining exposure and ownership visible.",
  },
  {
    question:
      "When is risk acceptance strongest?",
    choices: [
      "When nobody owns the decision.",
      "When an authorized owner records the residual risk, rationale, duration, evidence, and review trigger.",
      "When the team is too busy to remediate.",
      "When the issue is removed from the register.",
    ],
    answer: 1,
    explanation:
      "Acceptance is an accountable business decision, not inaction or forgotten work.",
  },
  {
    question:
      "A monitoring team wants additional identity fields only because the platform makes them available. What is the strongest privacy response?",
    choices: [
      "Collect them automatically.",
      "Require a defined defensive purpose and determine whether less data can support the same decision.",
      "Publish the fields in the portfolio.",
      "Assume security use has no privacy impact.",
    ],
    answer: 1,
    explanation:
      "Availability is not purpose. Collection should be necessary and proportionate to the documented defensive need.",
  },
  {
    question:
      "What is safest for the A20 risk and privacy review?",
    choices: [
      "Use only fictional Northbridge data, synthetic records, and invented governance decisions.",
      "Review real student records for realism.",
      "Copy real security logs into the project.",
      "Use real cloud identities after removing names.",
    ],
    answer: 0,
    explanation:
      "The capstone demonstrates risk and privacy reasoning using fictional and synthetic evidence only.",
  },
];

const takeaways = [
  "Risk analysis connects technical conditions to business consequence, likelihood, control strength, ownership, treatment, and residual exposure.",
  "A risk rating should reflect evidence and uncertainty rather than forcing precision where important facts are unresolved.",
  "Control design, control existence, control effectiveness, and residual risk are separate questions.",
  "Privacy review evaluates purpose, minimization, access, retention, sharing, transparency, lifecycle, and proportionality.",
  "Security usefulness does not automatically justify every available data field or unlimited retention.",
  "Risk treatment can reduce, avoid, share/transfer where appropriate, or accept exposure, but each decision needs ownership and rationale.",
  "Exceptions and risk acceptance should be bounded, time-aware, reviewable, and connected to future triggers.",
  "The entire A20 risk and privacy phase remains fictional, synthetic, defensive, non-operational, and publication-safe.",
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

export default function RiskPrivacyReviewPhasePage() {
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
              A20.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk and Privacy Review Phase
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The capstone now has architecture, monitoring, incident-response,
            cloud, and identity findings. A20.7 converts those technical results
            into business risk and privacy decisions: what matters, how certain we
            are, which controls reduce the concern, what remains exposed, what data
            is truly necessary, and who owns the next decision.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The goal is not to turn every finding into a dramatic High risk or to
            treat privacy as a paperwork step. Strong review connects evidence,
            uncertainty, treatment, accountability, proportional data use, and
            future review.
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
          lessonTitle="Risk and Privacy Review Phase"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish a technical finding from a business risk.",
            "I understand that incomplete evidence should lower confidence rather than force an exact risk rating.",
            "I can explain why security monitoring still needs a documented privacy purpose.",
            "I will use only fictional Northbridge records and synthetic data throughout this review.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Risk Decides What Matters; Privacy Decides Whether the Data Use Is Justified"
        >
          <p className="leading-8">
            Security teams often identify technical conditions faster than an
            organization can decide what to do about them. Risk management provides
            the decision layer: consequence, likelihood, controls, residual
            exposure, treatment, ownership, and review.
          </p>

          <p className="mt-4 leading-8">
            Privacy adds another question. Even when a security control has a valid
            purpose, is the data collection necessary, proportionate, limited,
            protected, retained appropriately, and shared only with people who need
            it? Strong security and strong privacy should reinforce one another.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.7">
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
          eyebrow="Risk Concepts"
          title="Eight Ideas That Turn Technical Findings Into Decisions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {riskConcepts.map((item) => (
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
          eyebrow="Privacy Concepts"
          title="Eight Privacy Questions That Belong Inside Security Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {privacyConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.concept}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Northbridge:</span>{" "}
                  {item.northbridge}
                </p>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  <span className="font-black">Decision effect:</span>{" "}
                  {item.decisionEffect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Risk and Privacy Review Board"
          subtitle="Synthetic business-risk, residual-risk, and privacy-decision snapshot"
          metrics={[
            {
              label: "Priority risk records",
              value: "5",
              note: "Privilege, monitoring, workload identity, recovery, privacy",
            },
            {
              label: "Privacy data classes",
              value: "6",
              note: "Identity, role, action, service health, change, recovery",
            },
            {
              label: "Treatment states",
              value: "4",
              note: "Reduce, avoid, share/transfer where appropriate, accept",
            },
            {
              label: "Major unresolved ratings",
              value: "2",
              note: "Worker authorization scope and proposed telemetry expansion",
            },
          ]}
        />

        <FakeAlertCard
          title="Risk Rating Exceeds Evidence"
          severity="High"
          time="A20.7 review"
          source="Synthetic Northbridge Risk Quality Queue"
          details="A draft register rates the worker workload identity as High risk because exact current permission scope is not present in the supplied evidence."
          recommendation="Keep the business purpose confirmed, record current scope as Unknown, compare required resources with synthetic authorization evidence, and assign a risk rating only when the evidence supports the likelihood and residual-risk conclusion."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Risk and Privacy Notes"
          logs={[
            "[RISK] privileged task traceability gap remains open; event confirmed, authorization unresolved",
            "[RISK] monitoring collector delay demonstrated decision-quality concentration risk",
            "[IDENTITY] worker workload purpose confirmed; exact current authorization scope review pending",
            "[RECOVERY] backup status current; complete restoration evidence remains older than preferred review window",
            "[PRIVACY] monitoring collection purpose documented for identity, service, incident, and recovery decisions",
            "[PRIVACY] additional identity fields require purpose and minimization review before collection expands",
            "[GOV] every treatment decision requires a fictional owner, rationale, and review trigger",
            "[GOV] risk acceptance does not mean removing the item from the register",
            "[SAFETY] all identities, data, risks, records, owners, and decisions are fictional",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Unknown Scope Is Not Automatic High Risk"
          question="How should the worker workload authorization issue be represented before exact current permissions are available?"
          evidence={[
            "The worker has a legitimate queue-processing and protected-data purpose.",
            "The architecture defines the resources the worker is expected to use.",
            "The exact current authorization map is incomplete.",
            "No supplied evidence proves that current permissions are either excessive or perfectly scoped.",
          ]}
          options={[
            "Rate the identity High risk because evidence is incomplete",
            "Assume least privilege because the service works",
            "Record an authorization-evidence gap, compare required access with current synthetic role scope, and defer precise residual-risk rating until supported",
            "Remove the risk because workload identities are automated",
          ]}
          bestAnswer={2}
          explanation="Uncertainty should remain visible. The correct analysis preserves the legitimate purpose while avoiding unsupported conclusions about current authorization."
        />

        <Section
          eyebrow="Risk Register"
          title="Five Priority Northbridge Risk Records"
        >
          <div className="grid gap-5">
            {riskRecords.map((item) => (
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

                <p className="mt-4 leading-7 text-slate-300">
                  <span className="font-black text-white">Condition:</span>{" "}
                  {item.condition}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                    <span className="font-black">Impact:</span> {item.impact}
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Likelihood:</span>{" "}
                    {item.likelihood}
                  </div>
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                    <span className="font-black">Current controls:</span>{" "}
                    {item.controls}
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Residual risk:</span>{" "}
                    {item.residual}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Treatment:</span> {item.treatment}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Owner:</span>{" "}
                  {item.owner}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Review trigger:</span>{" "}
                  {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Privacy Inventory"
          title="Review the Data Needed to Support the Capstone"
        >
          <p className="leading-8">
            Privacy review should follow the evidence lifecycle. For each data type,
            document why it is needed, how it can be minimized, who needs access,
            how long it should remain, and what concern still needs governance.
          </p>

          <div className="mt-6 grid gap-5">
            {privacyInventory.map((item) => (
              <article
                key={item.data}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.data}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Purpose:</span> {item.purpose}
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Minimize:</span> {item.minimize}
                  </div>
                  <div className="rounded-xl border border-blue-300/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                    <span className="font-black">Access:</span> {item.access}
                  </div>
                  <div className="rounded-xl border border-purple-300/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Retention:</span> {item.retention}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Concern:</span> {item.concern}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Language"
          title="Keep Observations, Findings, Risks, Privacy Concerns, and Decisions Distinct"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.state}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.example}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Decision meaning:</span>{" "}
                  {item.decisionMeaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Security Purpose vs. Privacy Scope"
          question="The monitoring team proposes collecting additional synthetic identity fields because they may be useful later. What is the strongest privacy decision?"
          evidence={[
            "Current defensive questions can already be answered with role, action category, target class, and timing.",
            "The proposed additional fields do not yet have a documented decision purpose.",
            "More identity detail would increase the amount of data accessible to monitoring reviewers.",
            "No current capstone requirement depends on the proposed fields.",
          ]}
          options={[
            "Collect all fields because more data always improves security",
            "Require a documented purpose, test whether the existing minimized dataset is sufficient, and add only fields necessary for the decision",
            "Remove all identity monitoring",
            "Keep the extra fields forever in case a future reviewer wants them",
          ]}
          bestAnswer={1}
          explanation="Security collection should remain purpose-driven and proportionate. Availability alone does not justify broader data use."
        />

        <Section
          eyebrow="Treatment Decisions"
          title="Four Ways Organizations Can Respond to Risk"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {treatmentOptions.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.option}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.use}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Northbridge:</span>{" "}
                  {item.northbridge}
                </p>
                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Caution:</span> {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Privacy Decision Questions"
          title="Six Questions Before Collecting, Keeping, or Sharing More Data"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {privacyQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.question}</h3>
                <p className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Strong:</span> {item.strong}
                </p>
                <p className="mt-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                  <span className="font-black">Weak:</span> {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone Decisions"
          title="Five Integrated Risk and Privacy Decisions"
        >
          <div className="grid gap-5">
            {riskPrivacyDecisions.map((item) => (
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
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                    <span className="font-black">Evidence:</span> {item.evidence}
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                    <span className="font-black">Privacy:</span> {item.privacy}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Treatment:</span> {item.treatment}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Residual risk:</span>{" "}
                  {item.residual}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Risk and Privacy Mistakes"
          title="What Weakens Business Decision Quality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Forcing a precise rating from weak evidence",
                detail:
                  "Use Unknown, bounded confidence, or a range of concern when important likelihood or control facts are unresolved.",
              },
              {
                title: "Treating a finding as a risk",
                detail:
                  "A finding describes a condition; a risk explains the adverse outcome and business consequence that could result.",
              },
              {
                title: "Treating control existence as effectiveness",
                detail:
                  "A policy or feature may exist without current validation that it is implemented, reviewed, and working as intended.",
              },
              {
                title: "Collecting every available field",
                detail:
                  "Security usefulness should be tied to purpose and minimization rather than platform availability.",
              },
              {
                title: "Using risk acceptance as a hiding place",
                detail:
                  "Accepted risk still needs an owner, rationale, residual-risk statement, duration, and review trigger.",
              },
              {
                title: "Reviewing privacy only once",
                detail:
                  "New data sources, new purposes, longer retention, new sharing, or changed monitoring can require another privacy decision.",
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
          title="Build the Risk and Privacy Decision Register"
        >
          <p className="leading-8">
            Use only the fictional Northbridge evidence created in A20.2–A20.6.
            The lab is a business-decision and privacy-governance exercise, not a
            real risk assessment of any organization.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Write five risk statements",
                detail:
                  "Connect each condition to a protected asset or business outcome and adverse consequence.",
              },
              {
                title: "Task 2 — Assess evidence and controls",
                detail:
                  "Record likelihood confidence, impact, current controls, control-evidence strength, and meaningful unknowns.",
              },
              {
                title: "Task 3 — Determine residual risk",
                detail:
                  "State what exposure remains after current controls without forcing a precise rating where evidence is incomplete.",
              },
              {
                title: "Task 4 — Build the privacy inventory",
                detail:
                  "For at least five synthetic data classes, record purpose, minimization, access, retention, sharing, lifecycle, and review triggers.",
              },
              {
                title: "Task 5 — Select treatment",
                detail:
                  "Choose reduce, avoid, share/transfer where appropriate, or accept, then name the fictional owner and rationale.",
              },
              {
                title: "Task 6 — Prepare executive handoff",
                detail:
                  "Summarize the three most material risks, the most important privacy decision, owners, treatment status, residual uncertainty, and next checkpoint.",
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
          title="Scenario Decision 1 — Recovery Evidence Is Stale"
          scenario="Northbridge has current backup status, but the last complete restoration exercise is older than the preferred review window. The service is currently stable."
          choices={[
            {
              label: "Choice A",
              response:
                "Record the evidence-freshness gap as residual risk, assign the recovery owner, schedule or simulate refreshed validation, and use time-bounded acceptance only if an authorized owner documents the rationale.",
              outcome:
                "Best decision. It preserves current strengths while governing the remaining uncertainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Rate recovery risk zero because backups are current.",
              outcome:
                "Risky. Backup availability does not prove complete restoration readiness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare recovery impossible because the exercise is old.",
              outcome:
                "Caution. Stale evidence reduces confidence but does not prove failure.",
              tone: "caution",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Monitoring Wants More Identity Data"
          scenario="The monitoring team proposes adding several synthetic identity fields that are available from the platform but are not necessary for current defensive questions."
          choices={[
            {
              label: "Choice A",
              response:
                "Require purpose for each field, keep only the minimum data needed for the documented security decisions, limit access and retention, and review again if the monitoring purpose changes.",
              outcome:
                "Best privacy decision. It preserves useful monitoring while keeping collection proportionate.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Collect everything because security data should never be minimized.",
              outcome:
                "Risky. Security purpose does not justify unnecessary collection.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove all identity telemetry to avoid privacy concerns.",
              outcome:
                "Caution. Necessary defensive evidence can still be used when purpose, minimization, access, retention, and governance are strong.",
              tone: "caution",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Defend One Decision From Security, Privacy, Risk, and Executive Perspectives"
        >
          <p className="leading-8">
            Use the proposed monitoring-data expansion as the example. Explain the
            same decision through four professional perspectives without changing
            the underlying case facts.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Security perspective",
                detail:
                  "Explain which defensive questions need identity context and what minimum evidence supports those decisions.",
              },
              {
                title: "Privacy perspective",
                detail:
                  "Explain purpose, minimization, access, retention, sharing, and lifecycle for the proposed fields.",
              },
              {
                title: "Risk perspective",
                detail:
                  "Compare the security benefit of improved context with the privacy and governance exposure of broader collection.",
              },
              {
                title: "Executive perspective",
                detail:
                  "Explain the decision, material benefit, residual risk, owner, and review trigger without technical overload.",
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
          title="Risk and Privacy Review Phase Checklist"
          items={[
            "I can write a risk statement that connects a plausible condition to a business or security consequence.",
            "I can distinguish likelihood confidence from impact.",
            "I can separate control design, control evidence, control effectiveness, and residual risk.",
            "I can preserve Unknown or bounded confidence when evidence is incomplete.",
            "I can identify treatment options and explain why a specific treatment fits the risk.",
            "I can document risk acceptance with an authorized owner, rationale, duration, and review trigger.",
            "I can explain purpose limitation and data minimization for security monitoring.",
            "I can define who needs access to security evidence and why.",
            "I can define retention and lifecycle rather than defaulting to indefinite storage.",
            "I can distinguish a security finding from a privacy concern and from a risk statement.",
            "I can carry unresolved identity, monitoring, and recovery questions into residual-risk decisions.",
            "I can create executive-ready risk and privacy handoffs without overstating certainty.",
            "I will use only fictional Northbridge risks, data, identities, records, and governance decisions.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.7 Knowledge Check">
          <MiniQuiz
            title="A20.7 Mini Quiz: Risk and Privacy Review Phase"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Risk and Privacy Decision Register"
          prompt="Create a fictional Northbridge Risk and Privacy Decision Register. Include at least five risk statements; affected assets or business outcomes; likelihood confidence; impact; current controls; control-evidence strength; inherent and residual risk where supportable; uncertainty; treatment choice; treatment rationale; fictional owner; target evidence; review trigger; exception or acceptance details where relevant; at least five privacy data classes with purpose, minimization, access, sharing, retention, lifecycle, and review triggers; a mapping between security monitoring purpose and required data fields; unresolved privacy or risk questions; and a short executive handoff identifying the three most material risks, the most important privacy decision, accountable owners, treatment status, and next checkpoint."
          tips={[
            "Do not force exact risk ratings when important evidence is still Unknown.",
            "Keep findings, risks, treatments, exceptions, and acceptance decisions distinct.",
            "Link every collected data field to a documented purpose.",
            "Prefer the minimum data needed to support the defensive decision.",
            "Make residual risk, ownership, and review triggers visible.",
            "Use only fictional Northbridge data and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.8?"
        >
          <p className="leading-8">
            A20.8 moves into Executive Communication Phase. Before continuing,
            make sure the risk and privacy register identifies the material
            decisions leadership actually needs to understand.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify the three most material Northbridge risks without turning every finding into High risk.",
              "I can explain which risk ratings are bounded by incomplete evidence.",
              "I can state the most important privacy purpose and minimization decision clearly.",
              "I can identify owners, treatment state, residual risk, and review triggers.",
              "I can summarize the case for leadership without changing the underlying technical facts.",
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
          title="Make the Risk and Privacy Register Useful Through A20.10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable risk IDs",
                detail:
                  "Executive communication and final portfolio artifacts should reference the same risk records consistently.",
              },
              {
                title: "Version ratings and rationale",
                detail:
                  "If evidence changes likelihood, impact, or residual risk, record what changed and why.",
              },
              {
                title: "Keep privacy purpose beside data",
                detail:
                  "A future reviewer should be able to see why each data class exists without searching another document.",
              },
              {
                title: "Track treatment evidence",
                detail:
                  "A treatment is not complete merely because work was assigned; record the evidence that shows the intended risk reduction occurred.",
              },
              {
                title: "Preserve acceptance decisions",
                detail:
                  "Accepted residual risk should remain visible until its review trigger, not disappear from the register.",
              },
              {
                title: "Carry unresolved ratings",
                detail:
                  "If authorization scope or telemetry necessity remains Unknown, preserve the uncertainty rather than forcing closure.",
              },
              {
                title: "Prepare leadership summaries",
                detail:
                  "Tag the most material decisions so A20.8 can build a concise executive brief from the same evidence.",
              },
              {
                title: "Maintain publication safety",
                detail:
                  "All identities, risks, data descriptions, records, metrics, owners, and decisions must remain fictional and synthetic.",
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
            Risk and privacy review stays fictional, defensive, and publication-safe
          </h2>
          <p className="mt-3 leading-7">
            Use only synthetic Northbridge records, invented identities, fictional
            business impacts, and fictional privacy data. Do not collect real
            student information, inspect private records, copy production logs,
            access real cloud accounts, monitor real people, test credentials,
            probe systems, or investigate real organizations. The lesson evaluates
            risk reasoning, privacy governance, treatment, ownership, and
            professional communication only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.7 Risk and Privacy Review Phase Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The capstone now has risk statements, privacy-purpose decisions,
            treatment choices, residual-risk ownership, review triggers, and an
            executive-ready decision register. Next, A20.8 turns the strongest
            technical and business conclusions into clear executive communication.
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