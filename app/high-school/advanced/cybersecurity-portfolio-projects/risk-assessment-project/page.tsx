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
const previousLesson = `${modulePath}/threat-model-project`;
const nextLesson = `${modulePath}/detection-plan-project`;

const objectives = [
  "Explain how a cybersecurity risk assessment turns technical concerns into defensible business decisions about likelihood, impact, ownership, treatment, and residual risk.",
  "Distinguish assets, threats, vulnerabilities or control gaps, likelihood, impact, inherent risk, current controls, residual risk, and treatment decisions.",
  "Write clear fictional risk statements that connect a plausible cause, affected asset, security consequence, business effect, and supporting evidence without exaggeration.",
  "Compare risk-treatment choices such as mitigate, avoid, transfer, and accept while preserving accountability, review dates, evidence, and decision ownership.",
  "Create a portfolio-ready Risk Assessment Project that demonstrates evidence-based prioritization, professional communication, safe assumptions, and traceable recommendations.",
];

const riskTerms = [
  {
    term: "Asset",
    meaning:
      "Something the organization values and needs to protect, such as a fictional service, dataset, identity system, business process, reputation, or recovery capability.",
    example:
      "Northbridge Student Portal availability and the fictional profile records it processes.",
  },
  {
    term: "Threat",
    meaning:
      "A plausible event or condition that could negatively affect an asset. In this course, threats are described at a defensive and non-operational level.",
    example:
      "Unauthorized access, stale privilege, service disruption, incomplete logging, or a failed dependency.",
  },
  {
    term: "Control gap",
    meaning:
      "A missing, weak, uncertain, or unverified defensive control that can increase exposure. A gap is not automatically proof that an incident occurred.",
    example:
      "The review cadence for a privileged fictional role has not yet been confirmed.",
  },
  {
    term: "Likelihood",
    meaning:
      "A reasoned estimate of how plausible the risk event is in the defined context, based on exposure, conditions, control strength, history, dependencies, and uncertainty.",
    example:
      "Moderate because the workflow is privileged but already has several limiting controls.",
  },
  {
    term: "Impact",
    meaning:
      "The realistic consequence if the risk event occurs, including confidentiality, integrity, availability, operational, financial, legal, trust, or recovery effects.",
    example:
      "A privileged configuration error could interrupt an important service and require recovery work.",
  },
  {
    term: "Inherent risk",
    meaning:
      "The level of risk considered before giving credit to current controls.",
    example:
      "A privileged administrative function may have high inherent impact because it can change important settings.",
  },
  {
    term: "Current controls",
    meaning:
      "Existing preventive, limiting, detective, recovery, validation, or governance measures that reduce the risk.",
    example:
      "Strong authentication, narrow role membership, approvals, logging, and recurring access review.",
  },
  {
    term: "Residual risk",
    meaning:
      "The remaining risk after considering the current controls and their known effectiveness.",
    example:
      "Residual risk remains moderate until the role-review cadence and evidence are confirmed.",
  },
  {
    term: "Risk treatment",
    meaning:
      "The decision about what to do with a risk: reduce it, avoid the activity, transfer part of the exposure, or knowingly accept it under defined conditions.",
    example:
      "Mitigate by improving role review, or accept temporarily with an owner and expiration date.",
  },
  {
    term: "Risk owner",
    meaning:
      "The person or role accountable for deciding how the organization will handle a risk and for ensuring that the decision remains reviewed.",
    example:
      "A fictional service owner or security governance lead.",
  },
];

const assessmentDimensions = [
  {
    title: "Likelihood is contextual",
    detail:
      "Do not rate likelihood from fear or technical complexity alone. Consider who can reach the workflow, how often the condition could occur, current controls, dependencies, prior synthetic evidence, and what remains unknown.",
  },
  {
    title: "Impact is broader than technical severity",
    detail:
      "Technical effects matter, but a portfolio-quality assessment also explains what those effects mean for users, service availability, data trust, recovery effort, legal obligations, reputation, or business operations.",
  },
  {
    title: "Controls change the decision",
    detail:
      "A risk can have high inherent exposure but lower residual exposure when strong, relevant controls exist and there is credible evidence that they are working.",
  },
  {
    title: "Uncertainty belongs in the assessment",
    detail:
      "Missing evidence should reduce confidence in the rating. It should not be hidden or automatically converted into a worst-case conclusion.",
  },
  {
    title: "Priority is not the same as severity",
    detail:
      "A moderate technical issue may deserve earlier attention if it affects a critical dependency, has unclear ownership, or blocks recovery. A severe theoretical issue may rank lower if exposure is tightly limited and controls are strong.",
  },
  {
    title: "Risk is a decision record",
    detail:
      "The final assessment should show who owns the decision, what treatment was chosen, what evidence supports it, when it will be reviewed, and what would cause the decision to change.",
  },
];

const treatmentOptions = [
  {
    option: "Mitigate",
    definition:
      "Reduce the likelihood, impact, or uncertainty by improving controls, architecture, monitoring, recovery, training, ownership, or validation.",
    example:
      "Add a documented access-review schedule and evidence requirement for a fictional privileged role.",
    caution:
      "Mitigation should be specific enough to verify. 'Improve security' is not an actionable treatment.",
  },
  {
    option: "Avoid",
    definition:
      "Stop or redesign the activity that creates the risk when the value does not justify the exposure or when safe control is impractical.",
    example:
      "Remove an unnecessary fictional integration that adds no meaningful business value.",
    caution:
      "Avoidance may affect functionality, cost, or user needs, so the decision should include business context.",
  },
  {
    option: "Transfer",
    definition:
      "Shift part of the financial or operational responsibility through a contract, service agreement, insurance arrangement, or managed provider while recognizing that accountability does not disappear.",
    example:
      "Use a fictional managed service with defined security responsibilities and service commitments.",
    caution:
      "Transfer never means the organization can ignore governance, oversight, or residual risk.",
  },
  {
    option: "Accept",
    definition:
      "Knowingly retain the residual risk because further reduction is not currently justified, while documenting owner approval, rationale, conditions, expiration, and review.",
    example:
      "Temporarily accept a low-impact fictional reporting limitation until a planned platform upgrade.",
    caution:
      "Acceptance should be explicit and time-bounded where appropriate. Ignoring a risk is not the same as accepting it.",
  },
];

const riskRecords = [
  {
    id: "RISK-NB-201",
    title: "Privileged role review cadence is not yet confirmed",
    asset: "Admin Review Console ADM-NB-2 and configuration integrity",
    cause:
      "A privileged fictional role may remain assigned longer than the user's current responsibilities require if lifecycle review is inconsistent.",
    consequence:
      "Unnecessary administrative authority could increase the scope of an accidental or unauthorized configuration change.",
    inherent: "High",
    likelihood: "Moderate",
    impact: "High",
    controls:
      "Restricted admin zone, stronger authentication, approval workflow, administrative logging, named role concept",
    evidence:
      "Architecture and threat-model evidence show the privileged boundary, but the review schedule is still an assumption.",
    residual: "Moderate",
    treatment:
      "Mitigate by defining an owner, review cadence, expiration for temporary grants, and evidence that each review occurred.",
    owner: "Identity Governance Lead",
    review: "30-day design review checkpoint",
  },
  {
    id: "RISK-NB-202",
    title: "API authorization evidence is design-based rather than implementation-based",
    asset: "Synthetic student profile confidentiality and integrity",
    cause:
      "The model depends on API-NB-14 to enforce resource-level authorization, but the student portfolio intentionally contains no production configuration evidence.",
    consequence:
      "If authorization were not implemented as designed, a valid identity context could potentially receive or change a record outside its approved scope.",
    inherent: "High",
    likelihood: "Low to Moderate",
    impact: "High",
    controls:
      "Identity authentication, API authorization requirement, application logging, owner review",
    evidence:
      "The architecture clearly assigns authorization responsibility to the API; implementation is recorded as an unverified design requirement.",
    residual: "Moderate",
    treatment:
      "Mitigate by defining validation evidence that an authorized implementation owner would review before production approval.",
    owner: "Application Security Owner",
    review: "Before fictional production approval",
  },
  {
    id: "RISK-NB-203",
    title: "Monitoring-source freshness is not documented consistently",
    asset: "Detection confidence, investigation quality, and recovery validation",
    cause:
      "Synthetic identity, application, queue, and logging sources may not all arrive with the same freshness or coverage.",
    consequence:
      "Defenders could make a slower or less confident decision when reviewing unusual activity or validating recovery.",
    inherent: "Moderate",
    likelihood: "Moderate",
    impact: "Moderate",
    controls:
      "Centralized monitoring, source-health concept, escalation process",
    evidence:
      "A fictional review note records telemetry freshness as an open evidence gap rather than a confirmed failure.",
    residual: "Moderate",
    treatment:
      "Mitigate by defining expected source coverage, freshness targets, source-health ownership, and fallback review steps.",
    owner: "Security Monitoring Lead",
    review: "Next monitoring design review",
  },
  {
    id: "RISK-NB-204",
    title: "Worker service identity may accumulate unnecessary privilege over time",
    asset: "Data Service DS-NB-6 integrity and least-privilege design",
    cause:
      "A service identity used by Worker WK-NB-8 could gain permissions as the workload changes if grants are not periodically reviewed.",
    consequence:
      "A software defect or unintended automated action could affect a broader set of fictional records than required.",
    inherent: "High",
    likelihood: "Low",
    impact: "High",
    controls:
      "Dedicated service identity, scoped role design, service logging, workload ownership",
    evidence:
      "The threat model identifies the privileged service dependency but contains no real permission list.",
    residual: "Low to Moderate",
    treatment:
      "Mitigate through least-privilege requirements, change-triggered review, named ownership, and synthetic validation evidence.",
    owner: "Platform Engineering Owner",
    review: "At each material workload change",
  },
  {
    id: "RISK-NB-205",
    title: "Queue dependency can delay time-sensitive processing",
    asset: "Application availability and workflow integrity",
    cause:
      "API-NB-14 and Worker WK-NB-8 both depend on Queue Q-NB-5 for asynchronous work.",
    consequence:
      "A fictional queue outage or backlog could delay important updates and increase recovery effort.",
    inherent: "Moderate",
    likelihood: "Low to Moderate",
    impact: "Moderate",
    controls:
      "Queue-health monitoring, worker monitoring, retry concept, documented recovery procedure",
    evidence:
      "The architecture confirms dependency concentration, while exact performance thresholds are outside the exercise.",
    residual: "Low to Moderate",
    treatment:
      "Mitigate with clear health criteria, backlog monitoring, recovery ownership, and safe synthetic recovery testing.",
    owner: "Application Operations Lead",
    review: "Quarterly architecture review",
  },
  {
    id: "RISK-NB-206",
    title: "External federation relationship needs lifecycle ownership",
    asset: "Identity trust, authorization, and accountability",
    cause:
      "A fictional external trust could remain active after the associated relationship changes if ownership and offboarding are unclear.",
    consequence:
      "Access could continue beyond the intended business relationship, creating unnecessary authorization exposure.",
    inherent: "High",
    likelihood: "Low",
    impact: "High",
    controls:
      "Federation approval, relationship owner concept, role mappings, access review",
    evidence:
      "The model includes the dependency but no real external partner or live federation metadata.",
    residual: "Low to Moderate",
    treatment:
      "Mitigate by defining relationship ownership, lifecycle review, mapping validation, and closure evidence.",
    owner: "Identity Architecture Lead",
    review: "At relationship change and scheduled governance review",
  },
];

const evidenceQuality = [
  {
    level: "Strong evidence",
    description:
      "Several independent synthetic sources agree, ownership is clear, timestamps and scope are consistent, and the evidence directly supports the rating.",
    use:
      "A rating can be stated with higher confidence while still acknowledging normal limitations.",
  },
  {
    level: "Moderate evidence",
    description:
      "The main condition is supported, but one or more control-effectiveness, ownership, timing, or dependency details remain incomplete.",
    use:
      "Keep the rating but include a confidence note and a validation action.",
  },
  {
    level: "Weak evidence",
    description:
      "The concern is mostly based on assumption, a single ambiguous record, or incomplete context.",
    use:
      "Avoid strong claims. Record the gap, identify safe evidence needed, and consider a provisional rating.",
  },
];

const commonMistakes = [
  {
    mistake: "Using a score without explaining it",
    correction:
      "A number or color is useful for sorting, but include a short rationale based on likelihood, impact, controls, and evidence confidence.",
  },
  {
    mistake: "Treating every theoretical threat as a current incident",
    correction:
      "Risk assessment considers plausible future loss. Keep hypothetical risk separate from confirmed incident evidence.",
  },
  {
    mistake: "Ignoring current controls",
    correction:
      "Residual risk cannot be reasoned about fairly without considering controls and the evidence supporting their effectiveness.",
  },
  {
    mistake: "Writing only technical impact",
    correction:
      "Explain what the technical consequence means for users, operations, trust, recovery, compliance, or business objectives.",
  },
  {
    mistake: "Calling missing evidence proof of failure",
    correction:
      "An evidence gap changes confidence. It does not automatically prove the worst case.",
  },
  {
    mistake: "Accepting risk without ownership",
    correction:
      "A valid acceptance decision needs an accountable owner, rationale, conditions, review date, and clear residual risk.",
  },
];

const quizQuestions = [
  {
    question:
      "What best distinguishes inherent risk from residual risk?",
    choices: [
      "Inherent risk is considered before current controls, while residual risk is what remains after current controls are considered",
      "Inherent risk is always low and residual risk is always high",
      "Residual risk means the risk has been completely removed",
      "They are two names for the same measurement",
    ],
    answer: 0,
    explanation:
      "Inherent risk describes exposure before existing controls receive credit. Residual risk reflects the remaining exposure after those controls are considered.",
  },
  {
    question:
      "Which is the strongest risk statement?",
    choices: [
      "A clear statement connecting a plausible cause, affected asset, security consequence, business effect, controls, evidence, and uncertainty",
      "The cloud is dangerous",
      "Everything should be rated critical",
      "Security could be better",
    ],
    answer: 0,
    explanation:
      "A professional risk statement provides enough context for another person to understand and review the decision.",
  },
  {
    question:
      "What does risk acceptance require in a professional assessment?",
    choices: [
      "Explicit ownership, rationale, known residual risk, conditions or expiration where appropriate, and a review point",
      "Ignoring the finding until someone notices it",
      "Removing all documentation of the risk",
      "A guarantee that no negative event can occur",
    ],
    answer: 0,
    explanation:
      "Acceptance is a conscious governance decision, not inaction. It should be visible, owned, justified, and reviewed.",
  },
  {
    question:
      "How should missing evidence affect a risk assessment?",
    choices: [
      "It should be recorded as uncertainty and may lower confidence in the rating until safe validation is completed",
      "It always proves the worst case is true",
      "It should be hidden so the portfolio looks stronger",
      "It means the risk must be deleted",
    ],
    answer: 0,
    explanation:
      "Evidence gaps affect confidence. A strong assessment keeps them visible and identifies what would resolve them.",
  },
  {
    question:
      "Why can a high-inherent-risk item have lower residual risk?",
    choices: [
      "Relevant controls may significantly reduce likelihood or impact when there is credible evidence that they are effective",
      "High inherent risk automatically disappears after documentation",
      "Residual risk ignores controls",
      "A high impact asset can never have lower residual risk",
    ],
    answer: 0,
    explanation:
      "Effective controls can lower the remaining exposure even when the uncontrolled scenario would be serious.",
  },
  {
    question:
      "Which treatment means stopping or redesigning the activity that creates the exposure?",
    choices: [
      "Avoid",
      "Accept",
      "Transfer",
      "Observe",
    ],
    answer: 0,
    explanation:
      "Avoidance removes or redesigns the activity producing the risk when the value does not justify the exposure.",
  },
  {
    question:
      "What is safest for a student cybersecurity risk-assessment portfolio?",
    choices: [
      "Use fictional systems, synthetic evidence, bounded risk statements, and no real confidential security information",
      "Publish a real organization's unresolved weaknesses",
      "Include real credentials as evidence",
      "Test a real account to improve the likelihood rating",
    ],
    answer: 0,
    explanation:
      "The portfolio should demonstrate reasoning without exposing, accessing, or testing real systems or sensitive information.",
  },
];

const takeaways = [
  "Risk assessment converts cybersecurity concerns into structured decisions about likelihood, impact, controls, ownership, treatment, and residual risk.",
  "Inherent risk describes exposure before current controls; residual risk describes what remains after relevant controls are considered.",
  "A useful risk statement connects cause, asset, security consequence, business effect, evidence, controls, and uncertainty.",
  "Likelihood and impact should be reasoned from context rather than dramatic language or a single score.",
  "Mitigate, avoid, transfer, and accept are different risk treatments; each requires clear rationale and ownership.",
  "Missing evidence changes confidence and should lead to a validation action, not an unsupported worst-case claim.",
  "Risk acceptance is a visible governance decision with an owner, rationale, conditions, residual risk, and review point.",
  "Portfolio work should use fictional systems and synthetic evidence only and should never expose real credentials, confidential weaknesses, or private records.",
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

export default function RiskAssessmentProjectPage() {
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
              A19.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Risk Assessment Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Threat models identify what could plausibly go wrong. Risk assessments
            decide what those concerns mean for the organization, which ones deserve
            attention first, who owns the decision, and what treatment is justified.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses only fictional Northbridge systems and synthetic
            evidence. You are practicing professional reasoning and communication,
            not testing, scanning, exploiting, or changing real systems.
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
          lessonTitle="Risk Assessment Project"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that risk assessment supports defensive business decisions rather than offensive testing.",
            "I can distinguish a hypothetical threat from evidence that an incident actually occurred.",
            "I can explain at a basic level how controls reduce likelihood, impact, or uncertainty.",
            "I will keep all systems, records, identities, evidence, and examples fictional and publication-safe.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="Security Teams Cannot Fix Everything at Once">
          <p className="leading-8">
            Cybersecurity work produces more concerns than most organizations can
            address immediately. A team may identify a privileged-access issue, an
            unclear recovery dependency, incomplete logging, a cloud design
            assumption, and a supplier question at the same time. Risk assessment
            helps decide which concern matters most and why.
          </p>

          <p className="mt-4 leading-8">
            The strongest assessments do not simply label everything high risk.
            They compare realistic likelihood, realistic impact, current controls,
            evidence confidence, business importance, recovery readiness, and
            ownership. The result is a decision record that another professional can
            understand and challenge.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.5">
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

        <Section eyebrow="Core Teaching" title="What a Cybersecurity Risk Assessment Is">
          <p className="leading-8">
            A cybersecurity risk assessment is a structured analysis of potential
            loss. It asks what asset matters, what event or condition could affect
            it, how plausible that event is, what the consequence could be, what
            controls already reduce the exposure, what risk remains, and how the
            organization should respond.
          </p>

          <p className="mt-4 leading-8">
            Risk is not exactly the same as a threat, vulnerability, finding, or
            incident. A threat is a potential adverse event or condition. A control
            gap is a weakness or uncertainty that can increase exposure. An incident
            is an event that has actually occurred. Risk combines the possibility of
            an adverse event with the consequence to something the organization
            values.
          </p>

          <p className="mt-4 leading-8">
            In professional work, the assessment also records uncertainty. A rating
            based on strong evidence should not look identical to a rating based
            mostly on assumptions. Confidence is part of the quality of the
            decision.
          </p>
        </Section>

        <Section eyebrow="Risk Vocabulary" title="Ten Terms You Need Before Building the Project">
          <div className="grid gap-5">
            {riskTerms.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.term}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.meaning}</p>
                <p className="mt-3 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Fictional example:</span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Assessment Reasoning" title="Six Principles That Keep Ratings Defensible">
          <div className="grid gap-5 md:grid-cols-2">
            {assessmentDimensions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Inherent vs Residual" title="Controls Change the Risk Picture">
          <p className="leading-8">
            Inherent risk asks what the exposure would look like before giving
            credit to current controls. Residual risk asks what remains after those
            controls are considered. This distinction helps explain why a powerful
            administrative function can have high inherent risk but lower residual
            risk when access is tightly limited, strongly authenticated, logged,
            reviewed, and recoverable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5">
              <h3 className="font-black text-red-50">Inherent Risk View</h3>
              <p className="mt-3 text-sm leading-7 text-red-100">
                Imagine the relevant controls are not yet receiving credit. Focus
                on the value of the asset, plausible event, exposure, privilege, and
                realistic consequence.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Residual Risk View</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-100">
                Now consider current controls and the evidence supporting them.
                Residual risk is the remaining exposure, including uncertainty and
                control limitations.
              </p>
            </article>
          </div>
        </Section>

        <Section eyebrow="Risk Statements" title="Write the Risk So a Decision Maker Can Understand It">
          <p className="leading-8">
            A useful risk statement explains cause and effect. It should be clear
            enough that a technical reviewer and a business owner can both
            understand why the concern matters.
          </p>

          <div className="mt-6 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
            <p className="font-black">Practical structure</p>
            <p className="mt-3 leading-7">
              Because of <span className="font-semibold">a defined condition or control gap</span>,
              a <span className="font-semibold">plausible event</span> could affect
              a <span className="font-semibold">named asset</span>, leading to a
              <span className="font-semibold">bounded security and business consequence</span>.
              Current controls reduce the exposure to a stated residual level, with
              any uncertainty kept visible.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                label: "Too vague",
                text:
                  "Admin access is dangerous.",
                reason:
                  "It does not identify the condition, asset, consequence, controls, evidence, or decision.",
              },
              {
                label: "Stronger",
                text:
                  "If privileged role membership remains after responsibilities change, unnecessary administrative authority could increase the scope of an incorrect configuration change. Strong authentication, approvals, logging, and recurring access review reduce the exposure, but review cadence still needs evidence.",
                reason:
                  "It connects condition, asset, consequence, controls, and uncertainty.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.label}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Risk Treatment" title="Four Ways Organizations Respond to Risk">
          <div className="grid gap-5 md:grid-cols-2">
            {treatmentOptions.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.option}
                </h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.definition}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Example:</span> {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  <span className="font-black">Caution:</span> {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Risk Assessment Board"
          subtitle="Synthetic portfolio dashboard for a fictional security-governance review."
          metrics={[
            {
              label: "Risks reviewed",
              value: "6",
              note: "All records are synthetic and derived from fictional architecture and threat-model evidence",
            },
            {
              label: "Highest inherent",
              value: "High",
              note: "Privileged access, authorization, service identity, and federation carry larger uncontrolled consequences",
            },
            {
              label: "Residual priorities",
              value: "3",
              note: "Role review, API validation evidence, and monitoring-source freshness require follow-up",
            },
            {
              label: "Open evidence gaps",
              value: "4",
              note: "Control validation, review cadence, telemetry freshness, and recovery evidence remain bounded uncertainties",
            },
          ]}
        />

        <FakeAlertCard
          title="Risk Review Requires an Owner"
          severity="Medium"
          time="Synthetic governance checkpoint"
          source="Northbridge Risk Review Queue"
          details="RISK-NB-201 has a defensible residual rating, but the fictional review record does not yet name who must approve the final treatment decision."
          recommendation="Assign a fictional accountable risk owner and record the treatment, rationale, review date, and validation evidence before marking the risk decision complete."
        />

        <FakeLogPanel
          title="Synthetic Risk Review Notes"
          logs={[
            "[RISK-201] Privileged-role review cadence remains an assumption; inherent High, residual Moderate.",
            "[RISK-202] API authorization is a confirmed design requirement; implementation validation evidence is outside the student model.",
            "[RISK-203] Monitoring freshness is an evidence gap, not proof of telemetry failure.",
            "[RISK-204] Service identity has elevated function; least-privilege review is required when workload scope changes.",
            "[RISK-205] Queue dependency creates availability concentration; recovery ownership lowers residual exposure.",
            "[RISK-206] Federation lifecycle requires named relationship ownership and closure evidence.",
            "[GOV] No accepted risk is complete without an accountable owner and review point.",
            "[SAFETY] All evidence is synthetic; no real systems, accounts, credentials, or production records are used.",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — High Inherent, Moderate Residual"
          question="Why can RISK-NB-201 reasonably be rated High inherent risk but Moderate residual risk?"
          evidence={[
            "The fictional administrative role can change sensitive configuration, so uncontrolled impact could be high.",
            "The design already includes stronger authentication, a restricted admin zone, approvals, and administrative logging.",
            "Role-review cadence is still an assumption and has not been supported with validation evidence.",
            "No real account or production configuration is part of the exercise.",
          ]}
          options={[
            "The existing controls reduce the exposure, but the governance evidence gap prevents treating the remaining risk as fully resolved",
            "Residual risk must always equal inherent risk",
            "The risk should be deleted because controls exist",
            "The student should test a real admin account to determine the rating",
          ]}
          bestAnswer={0}
          explanation="Residual risk considers existing controls and their evidence. The controls reduce exposure, while the unresolved review-cadence assumption keeps meaningful residual uncertainty."
        />

        <Section eyebrow="Fictional Case" title="Northbridge Risk Register Extract">
          <p className="leading-8">
            These records are designed to show how a portfolio risk assessment
            connects security reasoning to a business decision. Each record includes
            the asset, cause, consequence, rating, controls, evidence, residual risk,
            treatment, owner, and review point.
          </p>

          <div className="mt-6 grid gap-5">
            {riskRecords.map((risk) => (
              <article
                key={risk.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {risk.id}
                  </span>
                  <h3 className="font-black text-white">{risk.title}</h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Asset
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {risk.asset}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Cause / Condition
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {risk.cause}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Consequence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {risk.consequence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Current Controls
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {risk.controls}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-4">
                  <div className="rounded-xl border border-slate-700 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Inherent
                    </p>
                    <p className="mt-2 font-black text-white">{risk.inherent}</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Likelihood
                    </p>
                    <p className="mt-2 font-black text-white">{risk.likelihood}</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Impact
                    </p>
                    <p className="mt-2 font-black text-white">{risk.impact}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                      Residual
                    </p>
                    <p className="mt-2 font-black text-purple-50">
                      {risk.residual}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {risk.evidence}
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Treatment
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {risk.treatment}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Ownership / Review
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {risk.owner} · {risk.review}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Evidence Gap vs Confirmed Failure"
          question="RISK-NB-203 says telemetry freshness is not consistently documented. What is the strongest conclusion?"
          evidence={[
            "Synthetic monitoring records exist from several sources.",
            "The exact freshness expectation is not documented for every source.",
            "There is no evidence in the exercise proving a monitoring outage.",
            "Detection confidence depends partly on source coverage and freshness.",
          ]}
          options={[
            "Record a monitoring-governance evidence gap, keep confidence bounded, and define source-health validation rather than claiming a confirmed outage",
            "Declare the monitoring platform failed",
            "Assume missing documentation proves malicious activity",
            "Connect to a real monitoring system to gather logs",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an uncertainty about monitoring governance, not a confirmed operational failure. Professional risk writing preserves that distinction."
        />

        <Section eyebrow="Evidence Confidence" title="A Rating Is Only as Defensible as Its Evidence">
          <div className="grid gap-5 md:grid-cols-3">
            {evidenceQuality.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.level}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.description}
                </p>
                <p className="mt-4 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Use:</span> {item.use}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Avoid These Risk-Assessment Anti-Patterns">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.mistake}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.correction}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safe Fictional Lab" title="Build the Northbridge Risk Assessment">
          <p className="leading-8">
            Use the six supplied records as the evidence set. Your task is to refine
            the assessment, not to investigate anything outside the page.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Select the top three",
                detail:
                  "Choose the three risks you believe deserve attention first. Explain the order using asset importance, likelihood, impact, controls, uncertainty, dependencies, and recovery.",
              },
              {
                title: "Task 2 — Challenge one rating",
                detail:
                  "Pick one record and argue for a different likelihood, impact, or residual rating. Your argument must cite the supplied fictional evidence and controls.",
              },
              {
                title: "Task 3 — Improve one treatment",
                detail:
                  "Rewrite one treatment so it has a clear owner, action, evidence of completion, and review point.",
              },
              {
                title: "Task 4 — Add one accepted risk",
                detail:
                  "Create a low or moderate fictional risk that can reasonably be accepted. Include owner, rationale, residual risk, conditions, expiration, and review date.",
              },
              {
                title: "Task 5 — Write an executive summary",
                detail:
                  "Summarize the risk posture in one short paragraph without copying all six records. State the highest priorities, overall confidence, and immediate decisions.",
              },
              {
                title: "Task 6 — Check publication safety",
                detail:
                  "Confirm that the final artifact contains only fictional systems and synthetic evidence and reveals no real internal security information.",
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
          title="Scenario Decision 1 — Risk Acceptance Request"
          scenario="A fictional service owner asks to accept a moderate residual risk because the planned mitigation would not be completed until the next quarter."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the residual risk, owner, business rationale, temporary conditions, expiration or review date, and the event that would require earlier reconsideration.",
              outcome:
                "Best choice. Acceptance is an explicit governance decision with accountability and a future review point.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove the risk from the register because the owner does not want to fix it yet.",
              outcome:
                "Risky. Delayed mitigation does not make the residual exposure disappear.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Test a real production system so the owner cannot disagree with the risk.",
              outcome:
                "Unsafe. This portfolio exercise does not authorize testing or investigation of real systems.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Two Similar Risk Scores"
          scenario="Two fictional risks both receive a Moderate residual rating. One affects a low-impact reporting feature; the other affects a shared monitoring dependency used during incident response."
          choices={[
            {
              label: "Choice A",
              response:
                "Use business importance, dependency concentration, recovery impact, evidence confidence, and ownership to decide which Moderate risk deserves attention first.",
              outcome:
                "Best choice. Equal labels do not mean equal priority when the business and dependency context differ.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Treat the risks as identical because the residual labels match.",
              outcome:
                "Risky. A rating summarizes risk but does not replace contextual prioritization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Raise both to Critical so they receive attention.",
              outcome:
                "Risky. Inflating ratings reduces trust in the assessment and weakens decision quality.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Defend the Risk Decision to Different Audiences">
          <p className="leading-8">
            Choose one of the six Northbridge risks and explain it to each audience
            below. Keep the facts and rating consistent while changing the emphasis.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Technical Reviewer",
                detail:
                  "Focus on the condition, controls, evidence quality, residual exposure, and validation need.",
              },
              {
                title: "Risk Owner",
                detail:
                  "Focus on the business consequence, treatment choices, cost or effort tradeoffs, ownership, and review date.",
              },
              {
                title: "Portfolio Reviewer",
                detail:
                  "Focus on how the artifact proves your reasoning, evidence discipline, ethical boundaries, communication, and revision skill.",
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
          title="Risk Assessment Project Checklist"
          items={[
            "I defined the fictional system scope and the assets that matter.",
            "I separated threats, control gaps, incidents, and risks instead of using the terms interchangeably.",
            "I explained likelihood and impact with context rather than relying only on a color or number.",
            "I distinguished inherent risk from residual risk.",
            "I documented relevant current controls and did not assume that design intent proves effectiveness.",
            "I kept evidence gaps and uncertainty visible.",
            "I selected a clear treatment for each important risk.",
            "I assigned a fictional accountable owner and review point.",
            "Any accepted risk includes rationale, known residual exposure, conditions, and a review or expiration date.",
            "My recommendations remain defensive, proportionate, and verifiable.",
            "My executive summary communicates priority without exaggeration.",
            "My portfolio copy contains no real credentials, private records, production diagrams, or confidential security weaknesses.",
          ]}
        />

        <Section eyebrow="Assessment" title="A19.5 Knowledge Check">
          <MiniQuiz
            title="A19.5 Mini Quiz: Risk Assessment Project"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Risk Assessment Project"
          prompt="Create a professional fictional Northbridge Risk Assessment. Include scope, assets, at least six risk statements, likelihood and impact rationale, inherent risk, current controls, evidence confidence, residual risk, treatment, owner, review date, top-three priorities, one carefully governed accepted-risk example, an executive summary, and a short publication-safety statement."
          tips={[
            "Use the A19.4 Threat Model Project as an input, but do not simply copy threat statements into the risk register.",
            "Explain how technical effects connect to business or operational consequences.",
            "Keep the difference between a design requirement and validated control evidence visible.",
            "Use ratings as summaries, then explain the reasoning in words.",
            "Show at least one uncertainty and one condition that would cause a risk decision to be reviewed.",
            "Keep every system, role, identity, record, and evidence source fictional and synthetic.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.6?">
          <p className="leading-8">
            A19.6 moves into the Detection Plan Project. Before continuing, make
            sure you can explain how risk priorities influence what defenders choose
            to observe, what evidence they need, which conditions deserve alerts,
            and how detection quality supports decisions without becoming an
            offensive exercise.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain inherent risk and residual risk.",
              "I can write a risk statement that connects cause, asset, consequence, controls, and uncertainty.",
              "I can explain why likelihood and impact require context and evidence.",
              "I can compare mitigate, avoid, transfer, and accept treatments.",
              "I can describe what makes a risk decision accountable and reviewable.",
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

        <Section eyebrow="Portfolio Build Guide" title="Keep the Final Risk Assessment Clear and Reviewable">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable risk IDs",
                detail:
                  "IDs make it easy to connect the register, treatment plan, executive summary, and future revisions without repeating entire paragraphs.",
              },
              {
                title: "Explain ratings in plain language",
                detail:
                  "A reader should understand why a risk is Moderate or High even if the scoring method is removed.",
              },
              {
                title: "Show the controls that matter",
                detail:
                  "List only relevant controls and explain how they reduce likelihood, impact, or uncertainty.",
              },
              {
                title: "Keep confidence separate from severity",
                detail:
                  "A serious risk can still have low evidence confidence. Record both rather than pretending uncertainty does not exist.",
              },
              {
                title: "Make treatment measurable",
                detail:
                  "The owner should know what action is expected and what evidence will show that the treatment or review is complete.",
              },
              {
                title: "Show governance",
                detail:
                  "Owner, rationale, review date, acceptance conditions, exceptions, and residual risk prove that the assessment supports real decisions.",
              },
              {
                title: "Write for the reader",
                detail:
                  "Use technical details where they support the decision, but summarize the business meaning so nontechnical reviewers can understand the priority.",
              },
              {
                title: "Protect sensitive information",
                detail:
                  "A school portfolio should prove your reasoning with fictional systems, not with confidential details from a real organization.",
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
            Risk assessment does not authorize testing or investigation of real systems
          </h2>
          <p className="mt-3 leading-7">
            Use only fictional Northbridge records and synthetic evidence. Do not
            scan, probe, enumerate, exploit, fuzz, guess credentials, test access,
            collect private information, bypass controls, change configurations, or
            investigate real environments. Do not publish real internal diagrams,
            credentials, private records, confidential findings, or unresolved
            weaknesses from a real organization. The purpose is defensive risk
            reasoning, prioritization, governance, communication, and portfolio
            development.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.5 Risk Assessment Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a portfolio structure for turning threat-model findings
            into owned, evidence-based risk decisions. Next, A19.6 builds a
            Detection Plan Project focused on what defenders need to observe and
            how detection evidence supports safe decisions.
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