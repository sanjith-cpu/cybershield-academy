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
const previousLesson = `${modulePath}/risk-assessment-project`;
const nextLesson = `${modulePath}/security-policy-draft-project`;

const objectives = [
  "Explain what a defensive detection plan is, how it connects risk to observable evidence, and why detection is different from prevention, investigation, and response.",
  "Identify useful fictional telemetry sources, detection objectives, signals, context, enrichment, ownership, and evidence limitations without teaching evasion or offensive testing.",
  "Distinguish alert severity, confidence, priority, false positives, duplicate signals, missing telemetry, and evidence quality when reviewing a detection design.",
  "Design safe validation and tuning activities using only synthetic records, including success criteria, rollback conditions, review metrics, and documented assumptions.",
  "Create a portfolio-ready Detection Plan Project that communicates what defenders want to observe, why it matters, how alerts should be handled, and how the plan will be reviewed over time.",
];

const coreConcepts = [
  {
    title: "Detection begins with a security question",
    detail:
      "A detection plan should start with something defenders need to know, such as whether a privileged role changed unexpectedly, whether an important service became unavailable, or whether an identity workflow departed from an approved pattern.",
  },
  {
    title: "Telemetry is evidence, not the conclusion",
    detail:
      "Logs, alerts, health records, identity events, and application records are evidence sources. One record rarely proves the full story. A strong plan states what each source can support and what it cannot prove by itself.",
  },
  {
    title: "Context changes meaning",
    detail:
      "The same event can have different significance depending on asset importance, identity role, time, ownership, expected workflow, prior changes, recovery state, and related evidence.",
  },
  {
    title: "Detection should support a decision",
    detail:
      "An alert is useful when it helps a defender choose a safe next step: review evidence, confirm ownership, escalate, preserve records, validate recovery, or close a benign event with a documented reason.",
  },
  {
    title: "Quality matters more than alert volume",
    detail:
      "A plan that generates many low-value alerts can hide important signals. Defenders therefore measure relevance, duplication, missing context, investigation effort, and whether the alert actually supports a decision.",
  },
  {
    title: "Tuning must preserve defensive value",
    detail:
      "Reducing noise should not mean weakening visibility blindly. Changes should be bounded, justified, reversible, validated with synthetic evidence, and reviewed after deployment.",
  },
];

const detectionPlanElements = [
  {
    element: "Detection objective",
    question: "What defensive question should this plan help answer?",
    example:
      "Can defenders identify an unexpected change to a fictional privileged role quickly enough to review it?",
  },
  {
    element: "Protected asset",
    question: "What system, identity, data, process, or business function makes the signal important?",
    example:
      "Admin Review Console ADM-NB-2 and the integrity of protected configuration.",
  },
  {
    element: "Telemetry sources",
    question: "Which synthetic evidence sources could support the decision?",
    example:
      "Identity audit events, approval records, admin-console activity, and role-review records.",
  },
  {
    element: "Signal logic",
    question: "What high-level condition would make the evidence worth reviewing?",
    example:
      "A privileged membership change appears without the expected matching approval context.",
  },
  {
    element: "Required context",
    question: "What information helps distinguish expected from concerning activity?",
    example:
      "Role owner, change ticket, approved maintenance window, identity type, and related administrative activity.",
  },
  {
    element: "Severity and confidence",
    question: "How important is the possible impact, and how strongly does the evidence support the interpretation?",
    example:
      "High potential impact but Moderate confidence until approval and ownership evidence are correlated.",
  },
  {
    element: "Triage action",
    question: "What safe defensive review should happen first?",
    example:
      "Confirm the fictional role owner, correlate approval evidence, review related synthetic events, and document the result.",
  },
  {
    element: "Escalation rule",
    question: "When should the alert move to a higher level of attention?",
    example:
      "Escalate if the change affects a critical role and cannot be matched to approved ownership or change evidence.",
  },
  {
    element: "Validation method",
    question: "How will the team know the detection behaves as intended?",
    example:
      "Replay supplied synthetic examples representing approved, suspicious-looking, and ambiguous cases, then compare expected outcomes.",
  },
  {
    element: "Review and ownership",
    question: "Who maintains the plan, and when should it be reassessed?",
    example:
      "Security Monitoring Lead, with review after material system changes and at a scheduled governance checkpoint.",
  },
];

const signalQuality = [
  {
    dimension: "Relevance",
    description:
      "How often the alert represents something that actually deserves defensive review in the defined fictional environment.",
    question:
      "Does this detection help answer a meaningful security question, or does it mostly create work?",
  },
  {
    dimension: "Context completeness",
    description:
      "Whether the alert contains the identity, asset, ownership, timing, approval, and related evidence needed for triage.",
    question:
      "Can a defender understand why the event matters without searching through many unrelated records?",
  },
  {
    dimension: "Duplication",
    description:
      "Whether several alerts represent the same underlying activity and should be grouped or correlated.",
    question:
      "Are repeated notifications adding new evidence, or simply repeating the same signal?",
  },
  {
    dimension: "Coverage",
    description:
      "Whether the expected telemetry sources and important scenarios are represented in the plan.",
    question:
      "Which defensive situations could be missed if a source is unavailable or a workflow changes?",
  },
  {
    dimension: "Timeliness",
    description:
      "Whether evidence arrives soon enough to support the intended decision.",
    question:
      "Would a delayed signal still be useful for triage, containment planning, or recovery validation?",
  },
  {
    dimension: "Explainability",
    description:
      "Whether the plan makes clear why an alert exists and what evidence caused it.",
    question:
      "Can a reviewer trace the alert back to a risk, asset, signal, and decision?",
  },
];

const severityVsConfidence = [
  {
    label: "Severity",
    meaning:
      "How serious the potential consequence could be if the alert represents a real problem.",
    example:
      "A change to a privileged administrative role may have high potential impact.",
  },
  {
    label: "Confidence",
    meaning:
      "How strongly the available evidence supports the interpretation that the alert represents the condition of concern.",
    example:
      "Confidence may be Moderate until approval, ownership, and related activity are correlated.",
  },
  {
    label: "Priority",
    meaning:
      "How quickly the organization should act after considering severity, confidence, asset importance, timing, dependencies, and current workload.",
    example:
      "A high-severity, moderate-confidence alert on a critical service may still receive high review priority.",
  },
];

const northbridgePlans = [
  {
    id: "DET-NB-301",
    name: "Privileged Role Change Review",
    risk: "RISK-NB-201",
    objective:
      "Identify fictional privileged-role changes that lack the expected approval or lifecycle context.",
    sources:
      "Identity audit record, approval record, role-owner record, admin-console activity",
    signal:
      "A privileged membership change is recorded and the synthetic evidence set does not contain the expected matching approval context.",
    context:
      "Role sensitivity, identity type, change owner, maintenance window, previous membership state",
    severity: "High",
    confidence: "Moderate until correlated",
    triage:
      "Confirm role ownership, correlate approval evidence, review nearby synthetic administrative events, and record the decision.",
    validation:
      "Use approved synthetic examples for authorized changes, ambiguous changes, duplicate records, and missing approval context.",
    metric:
      "Percent of alerts with complete ownership and approval context at first review",
  },
  {
    id: "DET-NB-302",
    name: "API Authorization Decision Review",
    risk: "RISK-NB-202",
    objective:
      "Surface unusual fictional authorization decisions around protected profile resources without assuming authentication alone proves appropriate access.",
    sources:
      "API authorization events, identity context, application audit records",
    signal:
      "A protected-resource request produces an authorization outcome that differs from the expected fictional resource-access pattern.",
    context:
      "Identity role, resource classification, expected application workflow, recent approved changes",
    severity: "High",
    confidence: "Moderate",
    triage:
      "Review synthetic authorization evidence, confirm expected role-to-resource relationship, and escalate if ownership cannot explain the decision.",
    validation:
      "Use only supplied synthetic allowed, denied, changed-role, and ambiguous examples.",
    metric:
      "Decision-support rate: alerts that contain enough context for a reviewer to classify the event without unnecessary follow-up",
  },
  {
    id: "DET-NB-303",
    name: "Telemetry Source Health Review",
    risk: "RISK-NB-203",
    objective:
      "Identify when an expected fictional telemetry source is delayed, missing, or outside its documented freshness expectation.",
    sources:
      "Source-health heartbeat, ingestion status, synthetic timestamp comparison",
    signal:
      "An expected source does not report within its fictional freshness window or reports inconsistent health status.",
    context:
      "Source owner, expected cadence, maintenance status, dependent detections",
    severity: "Medium",
    confidence: "High for source-health state, lower for security meaning",
    triage:
      "Confirm the source-health condition, identify dependent detections, document reduced visibility, and notify the fictional owner.",
    validation:
      "Compare normal synthetic heartbeats with delayed and maintenance-window examples.",
    metric:
      "Time to identify and document a visibility gap affecting dependent detections",
  },
  {
    id: "DET-NB-304",
    name: "Service Identity Scope Review",
    risk: "RISK-NB-204",
    objective:
      "Surface fictional service-identity behavior that falls outside the documented workload purpose or approved change context.",
    sources:
      "Service identity events, workload audit records, approved deployment notes",
    signal:
      "The worker identity performs an action category not represented in its approved synthetic workload profile.",
    context:
      "Workload owner, deployment window, service role purpose, application dependency",
    severity: "High",
    confidence: "Moderate",
    triage:
      "Correlate the event with synthetic deployment and workload records, confirm ownership, and document whether the behavior is expected.",
    validation:
      "Use synthetic normal-workload, approved-change, and unexpected-category examples without executing anything.",
    metric:
      "Percent of service-identity alerts correctly enriched with workload owner and deployment context",
  },
  {
    id: "DET-NB-305",
    name: "Queue Backlog and Recovery Signal",
    risk: "RISK-NB-205",
    objective:
      "Identify fictional queue conditions that could affect time-sensitive processing and recovery readiness.",
    sources:
      "Queue health metrics, worker health, application status, synthetic recovery records",
    signal:
      "Backlog, processing delay, or worker health departs from the documented fictional service-health range.",
    context:
      "Maintenance status, business period, worker availability, recovery owner",
    severity: "Medium",
    confidence: "High for health condition",
    triage:
      "Confirm service-health evidence, correlate worker status, notify the fictional operations owner, and track recovery validation.",
    validation:
      "Use synthetic normal-load, maintenance, delayed-processing, and recovery examples.",
    metric:
      "Time from source-health change to owner notification and recovery-status documentation",
  },
  {
    id: "DET-NB-306",
    name: "Federation Lifecycle Review",
    risk: "RISK-NB-206",
    objective:
      "Identify fictional federation relationships or role mappings that remain active beyond their documented business lifecycle.",
    sources:
      "Relationship inventory, role mapping record, lifecycle review record, identity governance event",
    signal:
      "A relationship status changes while associated trust or mapping records remain marked active in the synthetic evidence set.",
    context:
      "Relationship owner, contract lifecycle state, mapped roles, last review date",
    severity: "High",
    confidence: "Moderate",
    triage:
      "Confirm relationship ownership and lifecycle evidence, review associated mappings, and route the finding to the fictional identity-governance owner.",
    validation:
      "Use synthetic active, changed, expired, and owner-unknown relationship records.",
    metric:
      "Percent of lifecycle alerts with a named owner and disposition documented",
  },
];

const tuningPrinciples = [
  {
    title: "Enrich before suppressing",
    detail:
      "If an alert is noisy because it lacks context, first consider whether ownership, maintenance, identity, asset, or approval data can make the alert more useful.",
  },
  {
    title: "Deduplicate repeated evidence",
    detail:
      "Several records about one activity can often be grouped into one case while preserving the underlying evidence and timestamps.",
  },
  {
    title: "Use bounded exclusions",
    detail:
      "If a clearly approved synthetic pattern should not alert, document the exact reason, scope, owner, expiration, and review condition rather than creating a broad permanent exception.",
  },
  {
    title: "Preserve rollback",
    detail:
      "A tuning change should be reversible. Record what changed, why, who approved it, what success looks like, and what evidence would trigger rollback.",
  },
  {
    title: "Measure after tuning",
    detail:
      "Review whether relevance, context completeness, duplicate rate, investigation effort, or coverage improved without creating unacceptable blind spots.",
  },
  {
    title: "Never tune to help evasion",
    detail:
      "Detection tuning exists to improve defensive signal quality. It should never provide instructions for avoiding detection, bypassing controls, or hiding harmful activity.",
  },
];

const validationCases = [
  {
    case: "Approved privileged-role change",
    expected:
      "The plan should either remain quiet or provide low-friction context showing the approval and owner, depending on the documented design.",
    evidence:
      "Synthetic identity event plus matching approval, role owner, and maintenance record.",
  },
  {
    case: "Privileged change with missing approval context",
    expected:
      "The plan should create a reviewable signal with the role, identity, timestamp, and missing-context status visible.",
    evidence:
      "Synthetic identity event with no matching approval in the supplied evidence set.",
  },
  {
    case: "Duplicate telemetry for one activity",
    expected:
      "The plan should preserve the underlying evidence while avoiding unnecessary duplicate analyst work.",
    evidence:
      "Two synthetic sources describing the same approved event.",
  },
  {
    case: "Telemetry source maintenance",
    expected:
      "Source-health logic should distinguish a known fictional maintenance window from an unexplained visibility gap.",
    evidence:
      "Synthetic maintenance record plus source-health status.",
  },
  {
    case: "Ambiguous service-identity activity",
    expected:
      "The plan should maintain bounded confidence and request ownership or deployment context rather than assuming malicious intent.",
    evidence:
      "Synthetic workload event with incomplete change context.",
  },
];

const commonMistakes = [
  {
    mistake: "Starting with a log field instead of a security question",
    correction:
      "First define the risk, asset, and decision. Then choose evidence sources that can help answer that question.",
  },
  {
    mistake: "Treating severity as certainty",
    correction:
      "A potentially serious event can still have limited evidence confidence. Record severity and confidence separately.",
  },
  {
    mistake: "Assuming more alerts means better detection",
    correction:
      "High volume can increase fatigue and hide meaningful signals. Measure usefulness, context, duplication, and decision support.",
  },
  {
    mistake: "Suppressing noise without understanding it",
    correction:
      "Review why the alert fires, add context, group duplicates, or create bounded exceptions before considering broader suppression.",
  },
  {
    mistake: "Ignoring source health",
    correction:
      "A detection plan depends on telemetry. Missing or delayed sources should be visible because they change evidence confidence and coverage.",
  },
  {
    mistake: "Validating on real systems without authorization",
    correction:
      "Student portfolio work should use synthetic events and safe fictional scenarios only.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest starting point for a defensive detection plan?",
    choices: [
      "A clear security question tied to a risk, asset, and decision defenders need to make",
      "A random log field that looks technical",
      "A goal of generating as many alerts as possible",
      "A list of ways to avoid detection",
    ],
    answer: 0,
    explanation:
      "A useful detection plan begins with a defensive question and then selects evidence that can help answer it.",
  },
  {
    question:
      "Why should severity and confidence be recorded separately?",
    choices: [
      "Potential impact can be high even when available evidence is incomplete or ambiguous",
      "Severity always proves an incident occurred",
      "Confidence is only used for low-severity alerts",
      "They are identical measurements",
    ],
    answer: 0,
    explanation:
      "Severity describes possible consequence; confidence describes how strongly evidence supports the interpretation.",
  },
  {
    question:
      "Which tuning choice is strongest when an alert is noisy because ownership context is missing?",
    choices: [
      "Add safe enrichment such as the fictional owner and approval context before considering suppression",
      "Disable the entire detection",
      "Publish instructions for avoiding the alert",
      "Ignore the problem permanently",
    ],
    answer: 0,
    explanation:
      "Enrichment can improve triage quality while preserving defensive visibility.",
  },
  {
    question:
      "What does a telemetry-source health gap mean?",
    choices: [
      "Visibility is reduced and confidence or coverage may be affected; the gap should be documented and owned",
      "An attack definitely occurred",
      "Nothing happened because there is no log",
      "The monitoring system should be removed",
    ],
    answer: 0,
    explanation:
      "Missing telemetry changes what defenders can know. It is not proof of either compromise or safety.",
  },
  {
    question:
      "Why should a detection-tuning change have rollback criteria?",
    choices: [
      "So defenders can reverse a change if it reduces important visibility or creates unexpected problems",
      "So alerts can be hidden permanently",
      "Because rollback increases alert volume",
      "Because no validation is needed after tuning",
    ],
    answer: 0,
    explanation:
      "Reversibility is part of safe change management and protects against unintended loss of defensive coverage.",
  },
  {
    question:
      "Which metric best reflects detection quality?",
    choices: [
      "A combination of relevance, context completeness, duplication, coverage, timeliness, and decision support",
      "Raw alert count only",
      "Number of red icons",
      "How complicated the rule looks",
    ],
    answer: 0,
    explanation:
      "Detection quality is multidimensional and should reflect whether alerts help defenders make good decisions.",
  },
  {
    question:
      "What is safest for a student Detection Plan Project?",
    choices: [
      "Use fictional systems, synthetic evidence, conceptual signal logic, and no real probing, evasion, credentials, or production access",
      "Test a real organization's alerts without permission",
      "Include bypass instructions to prove expertise",
      "Collect private logs from real accounts",
    ],
    answer: 0,
    explanation:
      "The project should demonstrate defensive reasoning without accessing or affecting real systems.",
  },
];

const takeaways = [
  "A detection plan connects risk to observable evidence and a clear defensive decision.",
  "Telemetry is evidence, not the conclusion; one source rarely proves the whole story.",
  "Severity, confidence, and priority answer different questions and should not be treated as interchangeable.",
  "Useful alerts contain enough identity, asset, ownership, timing, approval, and related context to support triage.",
  "Detection quality includes relevance, context completeness, duplication, coverage, timeliness, and explainability.",
  "Tuning should improve signal quality while preserving defensive value, ownership, validation, and rollback.",
  "Source health matters because delayed or missing telemetry changes what defenders can confidently know.",
  "Student detection projects should remain fictional, synthetic, authorized, and non-operational and must never teach evasion.",
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

export default function DetectionPlanProjectPage() {
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
              A19.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Detection Plan Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A strong detection plan explains what defenders want to observe, why
            the signal matters, which evidence sources support the decision, how
            alerts should be reviewed, and how the plan will be validated and
            improved over time.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson stays entirely defensive and synthetic. You will design
            detection logic conceptually from fictional Northbridge evidence. You
            will not probe systems, collect real logs, test credentials, bypass
            controls, or learn techniques for avoiding detection.
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
          lessonTitle="Detection Plan Project"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand how the A19.5 Risk Assessment Project identifies priorities that may need monitoring.",
            "I can distinguish a log or alert from a confirmed security conclusion.",
            "I understand that this lesson uses only fictional systems and synthetic evidence.",
            "I will focus on defensive observability, triage, quality, validation, and governance rather than evasion or offensive testing.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="A Risk Is Hard to Manage If Nobody Can See Its Warning Signs">
          <p className="leading-8">
            Risk assessment tells an organization what deserves attention.
            Detection planning asks a related question: what evidence would help
            defenders recognize that an important condition is changing? If a
            privileged role changes, a critical telemetry source stops reporting,
            or a shared service begins falling outside its expected health range,
            defenders need reliable evidence before they can make a sound decision.
          </p>

          <p className="mt-4 leading-8">
            Detection is not about collecting every possible event. It is about
            building useful visibility around important risks. A good plan explains
            the security question, the evidence sources, the context needed for
            triage, the expected alert behavior, the decision owner, and how the
            team will know whether the detection remains useful.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.6">
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

        <Section eyebrow="Core Teaching" title="What a Detection Plan Actually Does">
          <p className="leading-8">
            A detection plan is a design document for defensive visibility. It
            describes a condition worth observing and the evidence that could help
            defenders recognize that condition. Unlike prevention, which tries to
            stop an unwanted action, detection helps the organization notice and
            interpret evidence. Unlike incident response, detection does not by
            itself decide the full response. It supplies information that supports
            later review and action.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {coreConcepts.map((item) => (
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

        <Section eyebrow="Plan Anatomy" title="Ten Elements of a Reviewable Detection Plan">
          <div className="grid gap-5">
            {detectionPlanElements.map((item, index) => (
              <article
                key={item.element}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.element}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.question}
                    </p>
                    <p className="mt-3 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                      <span className="font-black">Fictional example:</span>{" "}
                      {item.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence Reasoning" title="Telemetry Is a Source, Not a Verdict">
          <p className="leading-8">
            One of the most important detection skills is knowing what evidence can
            and cannot prove. A login record may show that an authentication event
            occurred. It may not prove why the person logged in, whether the action
            was approved, or what happened afterward. An application alert may show
            a pattern worth reviewing, but the surrounding identity, asset,
            ownership, and change context may determine whether the activity is
            expected.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Direct evidence",
                detail:
                  "A synthetic record directly shows an event or state, such as a role membership change or source-health status.",
              },
              {
                title: "Corroborating evidence",
                detail:
                  "Another independent source supports the same interpretation, such as an approval record matching an identity event.",
              },
              {
                title: "Context evidence",
                detail:
                  "Ownership, asset importance, maintenance windows, expected workflows, or change records explain how the event should be interpreted.",
              },
              {
                title: "Evidence gap",
                detail:
                  "A source, timestamp, owner, or expected record is missing. The gap changes confidence but does not automatically prove the worst case.",
              },
            ].map((item) => (
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

        <Section eyebrow="Signal Quality" title="Six Ways to Judge Whether an Alert Is Actually Useful">
          <div className="grid gap-5 md:grid-cols-2">
            {signalQuality.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.description}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Review question:</span>{" "}
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Severity, Confidence, Priority" title="Three Labels That Answer Different Questions">
          <div className="grid gap-5 md:grid-cols-3">
            {severityVsConfidence.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="text-xl font-black text-yellow-50">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.meaning}
                </p>
                <p className="mt-4 text-sm leading-7 text-white">
                  <span className="font-black">Example:</span> {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Detection Planning Board"
          subtitle="Synthetic portfolio dashboard summarizing six fictional detection plans."
          metrics={[
            {
              label: "Detection plans",
              value: "6",
              note: "Each plan maps to a risk from the fictional A19.5 assessment",
            },
            {
              label: "Telemetry groups",
              value: "8",
              note: "Identity, application, approval, workload, queue, monitoring, lifecycle, and recovery evidence",
            },
            {
              label: "Validation cases",
              value: "5",
              note: "Approved, ambiguous, duplicate, maintenance, and missing-context synthetic scenarios",
            },
            {
              label: "Open review issues",
              value: "3",
              note: "Ownership enrichment, source freshness, and duplicate grouping need continued tuning review",
            },
          ]}
        />

        <FakeAlertCard
          title="Privileged Role Change Needs Context"
          severity="High"
          time="Synthetic review window"
          source="Northbridge Identity Monitoring"
          details="A fictional privileged-role membership change is present, but the current alert does not include the matching approval owner or maintenance context."
          recommendation="Correlate the synthetic approval and ownership records before increasing confidence. Improve the plan so future alerts include that context automatically."
        />

        <FakeLogPanel
          title="Synthetic Detection Evidence Preview"
          logs={[
            "[DET-301] privileged-role-change recorded for fictional role ADM-REVIEWER",
            "[CTX-301] approval reference not attached to initial alert payload",
            "[OWNER] identity governance owner exists in synthetic inventory",
            "[DET-303] source-health heartbeat delayed beyond fictional freshness target",
            "[MAINT] no matching maintenance record in supplied evidence set",
            "[DET-305] queue backlog increased while worker health remained normal",
            "[CORR] two application alerts refer to the same synthetic event window",
            "[SAFETY] records are fictional and intended only for defensive portfolio analysis",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — High Severity, Moderate Confidence"
          question="A privileged-role change alert has High severity but only Moderate confidence. What is the strongest interpretation?"
          evidence={[
            "The role can change important fictional configuration, so potential impact is high.",
            "The identity event confirms that membership changed.",
            "The initial alert does not contain the expected approval and owner context.",
            "A separate synthetic approval source may still explain the change.",
          ]}
          options={[
            "Treat the potential impact seriously while correlating approval and ownership evidence before concluding the change is unauthorized",
            "High severity proves the change was malicious",
            "Close the alert because confidence is not High",
            "Test a real privileged account to determine intent",
          ]}
          bestAnswer={0}
          explanation="Severity describes possible consequence, while confidence reflects how strongly evidence supports the interpretation. High impact can justify prompt review even when more context is needed."
        />

        <Section eyebrow="Fictional Case" title="Six Northbridge Detection Plans">
          <p className="leading-8">
            Each plan below maps back to a risk from A19.5. The portfolio value
            comes from showing why the signal matters, what evidence supports it,
            what context is required, how triage remains safe, and how the plan will
            be validated.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgePlans.map((plan) => (
              <article
                key={plan.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {plan.id}
                  </span>
                  <h3 className="font-black text-white">{plan.name}</h3>
                  <span className="text-sm text-slate-400">
                    maps to {plan.risk}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-200">
                  <span className="font-black text-white">Objective:</span>{" "}
                  {plan.objective}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Sources
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {plan.sources}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Signal
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {plan.signal}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required Context
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {plan.context}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Rating
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      Severity: {plan.severity} · Confidence: {plan.confidence}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                    Triage
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {plan.triage}
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {plan.validation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality Metric
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {plan.metric}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Missing Telemetry"
          question="DET-NB-303 reports that an expected source is delayed. What does that evidence support?"
          evidence={[
            "The synthetic source-health heartbeat is outside its documented freshness target.",
            "Several detections depend on that source for context.",
            "No evidence in the exercise proves why the source is delayed.",
            "A missing source reduces visibility until the condition is explained.",
          ]}
          options={[
            "Document a visibility gap, identify affected detections, notify the fictional owner, and keep the reason for the delay unresolved until supported by evidence",
            "Conclude that an attacker disabled logging",
            "Assume nothing happened because there are no events",
            "Ignore source health because detection rules are unchanged",
          ]}
          bestAnswer={0}
          explanation="Source-health evidence can prove reduced visibility, but it cannot automatically prove the cause. Strong defensive reasoning preserves that boundary."
        />

        <Section eyebrow="Tuning" title="Improve Signal Quality Without Creating Blind Spots">
          <p className="leading-8">
            Detection tuning is the process of improving how alerts support
            defenders. The goal is not simply fewer alerts. The goal is better
            relevance, context, grouping, coverage, and decision support while
            preserving the ability to recognize important conditions.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {tuningPrinciples.map((item) => (
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

        <Section eyebrow="Safe Validation" title="Test the Plan With Synthetic Cases, Not Real Systems">
          <p className="leading-8">
            A detection plan should be validated before a team trusts it. In this
            portfolio, validation means comparing the plan against supplied
            fictional records and checking whether the expected decision occurs.
            Nothing is executed against a live environment.
          </p>

          <div className="mt-6 grid gap-5">
            {validationCases.map((item) => (
              <article
                key={item.case}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.case}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Expected behavior:</span>{" "}
                  {item.expected}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Synthetic evidence:</span>{" "}
                  {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Metrics" title="Measure Whether the Detection Helps Defenders">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Alert relevance",
                detail:
                  "What percentage of reviewed alerts represented conditions that actually deserved analyst attention in the synthetic evaluation set?",
              },
              {
                title: "Context completeness",
                detail:
                  "How often did the alert include enough ownership, asset, identity, timing, and approval context for first-pass review?",
              },
              {
                title: "Duplicate burden",
                detail:
                  "How many alerts represented the same underlying activity and could be grouped without losing useful evidence?",
              },
              {
                title: "Time to useful decision",
                detail:
                  "How long did the fictional workflow take from alert creation to a documented triage conclusion?",
              },
              {
                title: "Coverage confidence",
                detail:
                  "Which important risks and workflows have observable evidence, and where are the known visibility gaps?",
              },
              {
                title: "Post-tuning quality",
                detail:
                  "Did a tuning change improve relevance or analyst effort without creating unacceptable loss of coverage?",
              },
            ].map((item) => (
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

        <Section eyebrow="Common Mistakes" title="Avoid These Detection-Planning Anti-Patterns">
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

        <Section eyebrow="Safe Fictional Lab" title="Build the Northbridge Detection Plan">
          <p className="leading-8">
            Choose three of the six Northbridge plans. Your goal is to improve the
            documentation and decision support using only the supplied synthetic
            evidence.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Define the question",
                detail:
                  "For each chosen plan, write the exact defensive question the alert is supposed to help answer and name the linked risk.",
              },
              {
                title: "Task 2 — Map evidence",
                detail:
                  "List the direct, corroborating, and context evidence used by the plan. Add one known evidence limitation.",
              },
              {
                title: "Task 3 — Improve enrichment",
                detail:
                  "Identify one ownership, asset, approval, change, or lifecycle field that would make first-pass triage easier.",
              },
              {
                title: "Task 4 — Separate ratings",
                detail:
                  "Assign severity, confidence, and priority separately and explain why the three values may differ.",
              },
              {
                title: "Task 5 — Create validation cases",
                detail:
                  "Write one expected, one ambiguous, and one review-worthy synthetic scenario and describe the alert behavior you expect.",
              },
              {
                title: "Task 6 — Define quality",
                detail:
                  "Choose two metrics that would show whether the detection is helping defenders make better decisions.",
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
          title="Scenario Decision 1 — Noisy but Valuable Alert"
          scenario="A fictional privileged-role alert fires often during approved maintenance because the first version lacks change-window and approval context."
          choices={[
            {
              label: "Choice A",
              response:
                "Add synthetic approval and maintenance enrichment, group duplicates, validate the change, and keep rollback criteria in case important visibility decreases.",
              outcome:
                "Best defensive choice. It improves signal quality without blindly removing the detection.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the entire detection permanently because it creates too many alerts.",
              outcome:
                "Risky. Broad suppression can remove useful visibility before the team understands the noise.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Document ways someone could make the activity avoid the alert.",
              outcome:
                "Unsafe. Detection tuning must never teach evasion or concealment.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Source Health Degrades"
          scenario="A synthetic application source stops meeting its freshness expectation, and three fictional detections depend on that data for context."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the visibility gap, identify dependent detections, lower confidence where appropriate, notify the fictional source owner, and track restoration evidence.",
              outcome:
                "Best defensive choice. It treats telemetry as a dependency and keeps uncertainty visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave alert confidence unchanged because the detection rules themselves did not change.",
              outcome:
                "Risky. Evidence quality and coverage affect what the alerts can support.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Connect to a real production source without authorization to restore coverage.",
              outcome:
                "Unsafe. The lesson is synthetic and does not authorize access to real systems.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Defend One Detection Plan to Three Reviewers">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Detection Engineer",
                detail:
                  "Explain the objective, telemetry, context, signal quality, validation cases, metrics, and tuning boundaries.",
              },
              {
                title: "Incident Responder",
                detail:
                  "Explain what the alert can establish, what remains uncertain, which evidence should be correlated, and when escalation is justified.",
              },
              {
                title: "Portfolio Reviewer",
                detail:
                  "Explain how the project demonstrates risk-to-detection mapping, evidence discipline, safe validation, measurement, communication, and governance.",
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
          title="Detection Plan Project Checklist"
          items={[
            "I linked each detection objective to a defined fictional risk and protected asset.",
            "I stated the defensive question before choosing telemetry.",
            "I identified direct, corroborating, and context evidence where appropriate.",
            "I explained what each source can and cannot prove.",
            "I kept severity, confidence, and priority separate.",
            "I included ownership, asset, timing, approval, or lifecycle context needed for triage.",
            "I documented known telemetry gaps and source-health dependencies.",
            "I designed validation using synthetic records only.",
            "I included tuning controls such as enrichment, deduplication, bounded exceptions, validation, and rollback.",
            "I chose metrics that measure signal usefulness rather than raw alert count alone.",
            "I did not include evasion, bypass, offensive testing, credential abuse, or real-system access instructions.",
            "My portfolio copy contains only fictional systems and synthetic evidence.",
          ]}
        />

        <Section eyebrow="Assessment" title="A19.6 Knowledge Check">
          <MiniQuiz
            title="A19.6 Mini Quiz: Detection Plan Project"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Detection Plan Project"
          prompt="Create a polished fictional Northbridge Detection Plan Project. Include three to six detection objectives mapped to A19.5 risks, protected assets, telemetry sources, high-level signal conditions, required context, severity and confidence, safe triage actions, escalation criteria, synthetic validation cases, quality metrics, tuning and rollback guidance, ownership, known evidence gaps, and a short publication-safety statement."
          tips={[
            "Start each detection with a security question and decision, not with a random log field.",
            "Use only synthetic Northbridge events, alerts, health records, identities, and approval data.",
            "Explain what the evidence supports and what remains uncertain.",
            "Prefer enrichment and correlation before broad suppression when a signal lacks context.",
            "Include at least one source-health dependency and explain how missing telemetry changes confidence.",
            "Keep tuning strictly defensive and never include instructions for avoiding or bypassing detection.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.7?">
          <p className="leading-8">
            A19.7 moves into the Security Policy Draft Project. Before continuing,
            make sure you can explain how risk, detection, ownership, escalation,
            evidence, and review expectations can be translated into clear policy
            requirements without turning policy into vague slogans or overly
            technical procedures.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain how a detection plan connects a risk to observable evidence.",
              "I can distinguish telemetry, an alert, a finding, and a confirmed incident.",
              "I can explain severity, confidence, and priority separately.",
              "I can describe safe validation and tuning using synthetic evidence, metrics, and rollback.",
              "I can explain why source health and evidence limitations belong in the final detection plan.",
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

        <Section eyebrow="Portfolio Build Guide" title="Keep the Detection Plan Professional and Easy to Review">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Map every plan to a risk",
                detail:
                  "A reviewer should be able to trace why the detection exists and which business or security concern it supports.",
              },
              {
                title: "Use stable detection IDs",
                detail:
                  "IDs help connect plan entries, alerts, validation cases, tuning notes, and portfolio revisions.",
              },
              {
                title: "Separate evidence from interpretation",
                detail:
                  "State which records are present before explaining what they may mean. This keeps confidence honest.",
              },
              {
                title: "Show context requirements",
                detail:
                  "List the ownership, asset, identity, approval, timing, and change context that makes triage efficient.",
              },
              {
                title: "Define validation in advance",
                detail:
                  "Document expected outcomes for approved, ambiguous, duplicate, and review-worthy synthetic cases before claiming the plan works.",
              },
              {
                title: "Make tuning reversible",
                detail:
                  "Record what changed, why, who owns it, what success looks like, and when rollback is required.",
              },
              {
                title: "Use meaningful metrics",
                detail:
                  "Measure relevance, context, coverage, duplicate burden, timeliness, and decision support instead of celebrating raw alert volume.",
              },
              {
                title: "Keep the portfolio safe",
                detail:
                  "Fictional diagrams, synthetic logs, and conceptual signals can demonstrate strong detection reasoning without exposing a real environment.",
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
            Detection planning is for defensive visibility, not evasion
          </h2>
          <p className="mt-3 leading-7">
            Use only fictional Northbridge systems and synthetic evidence. Do not
            scan, probe, enumerate, fuzz, exploit, test credentials, collect real
            logs, bypass controls, change production configurations, or access
            private information. Do not create guidance for avoiding alerts,
            concealing activity, weakening visibility, or bypassing monitoring.
            Validation and tuning in this lesson are conceptual and use only
            supplied synthetic records.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.6 Detection Plan Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a portfolio structure that connects risk, evidence,
            signal quality, triage, validation, tuning, metrics, and ownership.
            Next, A19.7 turns security expectations into a clear and reviewable
            Security Policy Draft Project.
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