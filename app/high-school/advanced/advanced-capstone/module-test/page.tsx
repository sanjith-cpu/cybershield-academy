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

const modulePath = "/high-school/advanced/advanced-capstone";
const lessonTenPath = `${modulePath}/advanced-final-readiness-review`;
const advancedPath = "/high-school/advanced";

const coverage = [
  {
    range: "Questions 1–2",
    area: "A20.1 — Advanced Track Knowledge Review",
    review:
      "Cross-domain reasoning, evidence-supported readiness, review by decision, and identifying weak concepts without relying on memorization alone.",
  },
  {
    range: "Questions 3–5",
    area: "A20.2 — Capstone Scenario Briefing",
    review:
      "Mission, scope, stakeholders, assumptions, unknowns, evidence inventories, source limitations, fact-vs-hypothesis discipline, and decision framing.",
  },
  {
    range: "Questions 6–8",
    area: "A20.3 — Architecture and Threat Model Phase",
    review:
      "Assets, trust boundaries, identities, dependencies, degraded states, control expectations, bounded threat statements, recovery paths, and design-vs-implementation evidence.",
  },
  {
    range: "Questions 9–11",
    area: "A20.4 — Detection and Monitoring Phase",
    review:
      "Defensive questions, telemetry, source health, correlation, severity vs. confidence, safe validation, tuning, degraded visibility, and monitoring quality.",
  },
  {
    range: "Questions 12–14",
    area: "A20.5 — Incident Response Phase",
    review:
      "Triage, scope, competing hypotheses, proportional containment, decision ownership, recovery criteria, closure, residual uncertainty, and reassessment triggers.",
  },
  {
    range: "Questions 15–17",
    area: "A20.6 — Cloud and Identity Review Phase",
    review:
      "Shared responsibility, authentication vs. authorization, workforce and workload identities, privilege, lifecycle, federation, configuration governance, and recovery access.",
  },
  {
    range: "Questions 18–20",
    area: "A20.7 — Risk and Privacy Review Phase",
    review:
      "Likelihood, impact, controls, inherent and residual risk, treatment, acceptance, privacy purpose, minimization, access, retention, lifecycle, and proportionality.",
  },
  {
    range: "Questions 21–22",
    area: "A20.8 — Executive Communication Phase",
    review:
      "Materiality, confidence, audience adaptation, business impact, recommendations, ownership, tradeoffs, residual risk, and next checkpoints.",
  },
  {
    range: "Questions 23–24",
    area: "A20.9 — Final Portfolio Submission",
    review:
      "Curation, traceability, cross-artifact consistency, revision history, contribution transparency, limitations, oral defense, and publication safety.",
  },
  {
    range: "Question 25",
    area: "A20.10 — Advanced Final Readiness Review",
    review:
      "Integrated Advanced reasoning, targeted review, assessment strategy, evidence boundaries, and readiness based on applied scenario performance.",
  },
];

const questions = [
  {
    question:
      "A student can define least privilege, residual risk, and source health but struggles when one scenario combines all three. What is the strongest readiness conclusion?",
    choices: [
      "The student is fully ready because the definitions are correct.",
      "The student should focus on cross-domain scenario practice that requires connecting the concepts to one decision.",
      "The student should memorize longer definitions.",
      "The student should avoid integrated questions.",
    ],
    answer: 1,
    explanation:
      "Advanced readiness depends on applying connected concepts to decisions, not recognizing definitions in isolation.",
  },
  {
    question:
      "Which self-review method best matches A20.1?",
    choices: [
      "Rate a topic strong only if you can explain it, identify useful evidence, make a bounded defensive decision, and state limitations or validation needs.",
      "Rate a topic strong if the vocabulary sounds familiar.",
      "Rate every completed lesson as mastered automatically.",
      "Review only the topics that appear most technical.",
    ],
    answer: 0,
    explanation:
      "A20.1 treats readiness as applied understanding supported by evidence, decisions, and awareness of limitations.",
  },
  {
    question:
      "Why should a capstone begin with a case charter?",
    choices: [
      "To establish root cause before technical review.",
      "To define mission, scope, stakeholders, evidence, assumptions, unknowns, exclusions, constraints, and decision boundaries.",
      "To eliminate the need for later architecture work.",
      "To make every source equally reliable.",
    ],
    answer: 1,
    explanation:
      "The charter gives later reviewers one shared starting point and prevents scope or evidence assumptions from drifting.",
  },
  {
    question:
      "A privileged administrative action occurs during an approved maintenance window. What is the strongest briefing statement if exact task-level authorization is not yet available?",
    choices: [
      "The action was authorized because maintenance was approved.",
      "The action was unauthorized because the exact task is missing.",
      "The action is confirmed and occurred during approved maintenance, while action-level authorization remains unresolved.",
      "The action caused the service disruption.",
    ],
    answer: 2,
    explanation:
      "The evidence supports event occurrence and maintenance context, but not a stronger claim about authorization or causation.",
  },
  {
    question:
      "A monitoring source was delayed during part of the case. What should the evidence inventory record?",
    choices: [
      "Only the source name.",
      "That source health was degraded and that missing recent events have reduced evidentiary value until backlog and recovery are understood.",
      "That every record from the source is false.",
      "That the delay proves malicious interference.",
    ],
    answer: 1,
    explanation:
      "Evidence inventories should capture source health and limitations because those conditions change what presence or absence can prove.",
  },
  {
    question:
      "What makes a trust boundary security-relevant?",
    choices: [
      "It is always a physical firewall.",
      "Identity, privilege, data sensitivity, environment, control, or operational responsibility changes across the relationship.",
      "It contains the most servers.",
      "It proves a vulnerability exists.",
    ],
    answer: 1,
    explanation:
      "Trust boundaries mark meaningful changes in trust, authority, sensitivity, environment, or responsibility that affect defensive decisions.",
  },
  {
    question:
      "Which statement is the strongest bounded threat statement?",
    choices: [
      "The worker service will be hacked.",
      "If the worker identity has broader access than its business purpose requires, more protected resources could be affected; scoped authorization and review would reduce that exposure.",
      "The cloud is unsafe.",
      "Every administrator is a threat.",
    ],
    answer: 1,
    explanation:
      "A strong threat statement identifies a plausible condition, affected asset or outcome, consequence, and defensive control direction without unsupported certainty.",
  },
  {
    question:
      "A recovery architecture shows current backups but older-than-preferred restoration evidence. What is the strongest conclusion?",
    choices: [
      "Recovery is fully validated.",
      "Backups definitely fail.",
      "Backup availability is current, while restoration readiness remains partly unvalidated and should be refreshed or governed as residual risk.",
      "Recovery does not belong in architecture review.",
    ],
    answer: 2,
    explanation:
      "Backup status and restoration readiness are separate claims. Recovery also depends on identities, dependencies, configuration, and validation.",
  },
  {
    question:
      "What is the strongest starting point for detection design?",
    choices: [
      "The largest available log source.",
      "A defensive question tied to a decision, asset, risk, or architecture concern.",
      "A goal of producing as many alerts as possible.",
      "A list of technical fields with no stated purpose.",
    ],
    answer: 1,
    explanation:
      "Detection should begin with what defenders need to know or decide, then identify useful evidence.",
  },
  {
    question:
      "A synthetic alert has High severity and Moderate confidence. What does that mean?",
    choices: [
      "The alert is a confirmed incident.",
      "The potential consequence may be serious, but the evidence does not yet fully support the interpretation.",
      "The event should be ignored.",
      "Severity and confidence are the same measurement.",
    ],
    answer: 1,
    explanation:
      "Severity describes potential impact, while confidence describes the strength of evidentiary support.",
  },
  {
    question:
      "Approved maintenance causes repeated false escalation because the alert lacks change context. What is the strongest tuning response?",
    choices: [
      "Disable the detection during every maintenance window.",
      "Raise the threshold until almost nothing alerts.",
      "Add reliable maintenance context, preserve detection of out-of-scope activity, validate with synthetic cases, and keep rollback criteria.",
      "Ignore all privileged events during approved changes.",
    ],
    answer: 2,
    explanation:
      "Good tuning addresses the actual cause of noise while preserving useful coverage, validation, ownership, and rollback.",
  },
  {
    question:
      "Why should incident responders preserve competing hypotheses early in a case?",
    choices: [
      "To make the incident appear more complex.",
      "Because several explanations may fit incomplete evidence and selecting one too early can distort later decisions.",
      "Because root cause can never be determined.",
      "Because every hypothesis should always have equal confidence.",
    ],
    answer: 1,
    explanation:
      "Competing hypotheses reduce confirmation bias while evidence is incomplete and should gain or lose confidence as new evidence appears.",
  },
  {
    question:
      "Which containment choice is strongest when evidence is incomplete but potential impact is meaningful?",
    choices: [
      "Use the broadest disruptive action immediately.",
      "Take no action until certainty is absolute.",
      "Use a proportional, owned, evidence-preserving, preferably reversible action with reassessment triggers.",
      "Delete the original evidence after containment.",
    ],
    answer: 2,
    explanation:
      "Strong containment manages risk under uncertainty while considering continuity, reversibility, ownership, evidence preservation, and future reassessment.",
  },
  {
    question:
      "Portal errors return to normal, but task authorization and monitoring validation remain open. What is the strongest response state?",
    choices: [
      "Close the case automatically.",
      "Remain in recovery or follow-up until defined closure criteria are met or residual items are transferred to owned risk and review records.",
      "Declare the worker restart the sole root cause.",
      "Erase unresolved questions because service is stable.",
    ],
    answer: 1,
    explanation:
      "Service recovery is not the same as complete closure. Open evidence and residual-risk items must remain governed.",
  },
  {
    question:
      "What does cloud shared responsibility mean?",
    choices: [
      "The provider owns every security decision.",
      "The customer operates the provider's physical infrastructure.",
      "Provider capabilities and customer-controlled decisions about identity, configuration, data, monitoring, recovery, and governance must be distinguished.",
      "Nobody is accountable because responsibility is shared.",
    ],
    answer: 2,
    explanation:
      "Shared responsibility separates platform capability from customer configuration, access, data, evidence, recovery, and governance decisions.",
  },
  {
    question:
      "A privileged user authenticates successfully. What does that prove?",
    choices: [
      "Every later action was authorized.",
      "The authentication event succeeded, while action-level authorization still requires supporting evidence.",
      "The user acted maliciously.",
      "The action matched the approved change task.",
    ],
    answer: 1,
    explanation:
      "Authentication confirms identity access, not business authorization for every later action.",
  },
  {
    question:
      "The worker service has a valid business purpose, but exact current permissions are not fully documented. What is the strongest finding?",
    choices: [
      "The worker is definitely overprivileged.",
      "The worker is definitely least privilege because the service works.",
      "The purpose is established, while current authorization scope remains a validation need.",
      "Workload identities do not require governance.",
    ],
    answer: 2,
    explanation:
      "Purpose and current authorization evidence are distinct. Missing evidence creates uncertainty, not automatic proof of weakness or correctness.",
  },
  {
    question:
      "What is residual risk?",
    choices: [
      "Risk before any controls are considered.",
      "Meaningful exposure that remains after current controls and treatment are considered.",
      "Risk that has no owner.",
      "A risk that can never change.",
    ],
    answer: 1,
    explanation:
      "Residual risk describes the exposure that remains after relevant controls, treatment, evidence, and limitations are considered.",
  },
  {
    question:
      "A monitoring team wants to collect additional identity fields only because the platform makes them available. What is the strongest privacy response?",
    choices: [
      "Collect all fields automatically.",
      "Require a documented defensive purpose and determine whether the minimized existing dataset is sufficient before expanding collection.",
      "Remove all security monitoring.",
      "Keep every new field forever.",
    ],
    answer: 1,
    explanation:
      "Security collection should be purpose-driven, minimized, access-limited, and retained according to legitimate need.",
  },
  {
    question:
      "Which example best represents professional risk acceptance?",
    choices: [
      "Ignore a control gap because remediation is inconvenient.",
      "Record the residual risk, accountable owner, rationale, duration, evidence, and review trigger.",
      "Delete the risk from the register.",
      "Assume every low-severity issue is accepted permanently.",
    ],
    answer: 1,
    explanation:
      "Risk acceptance is an explicit, accountable, reviewable business decision rather than inaction.",
  },
  {
    question:
      "What should change when the same case is communicated to technical reviewers and executives?",
    choices: [
      "The facts and uncertainty.",
      "The level of detail, terminology, emphasis, and decision framing while the underlying truth stays consistent.",
      "The authorization status.",
      "The incident status.",
    ],
    answer: 1,
    explanation:
      "Audience adaptation changes depth and emphasis, not confirmed facts, confidence, incident state, or unresolved questions.",
  },
  {
    question:
      "Which executive recommendation is strongest?",
    choices: [
      "Improve security.",
      "Fix everything immediately.",
      "Complete targeted privileged-task traceability and recovery validation improvements, assign named owners, state the tradeoffs and residual risk, and set the next review checkpoint.",
      "Include every technical log line so leaders can decide for themselves.",
    ],
    answer: 2,
    explanation:
      "Decision-ready recommendations identify the action, rationale, owner, tradeoff, residual risk, and next checkpoint.",
  },
  {
    question:
      "What is the strongest way to organize the final A20 portfolio?",
    choices: [
      "Include every draft and screenshot in chronological order.",
      "Curate the strongest artifacts into one coherent evidence story with traceability, revisions, contribution statements, limitations, and safe supporting material.",
      "Include only the executive summary.",
      "Remove all unresolved questions to make the project look complete.",
    ],
    answer: 1,
    explanation:
      "A strong portfolio demonstrates reasoning through curation, traceability, revision, contribution transparency, limitations, and consistency.",
  },
  {
    question:
      "A technical artifact says the 09:11 action is unresolved, while an executive slide labels it unauthorized. What is the strongest portfolio correction?",
    choices: [
      "Keep both because audiences can have different facts.",
      "Align both artifacts to the evidence-supported unresolved status and vary only the amount of detail.",
      "Change the technical record to unauthorized.",
      "Remove the event from the portfolio.",
    ],
    answer: 1,
    explanation:
      "Cross-artifact consistency must come from the evidence. Different audiences can receive different depth but not different case truth.",
  },
  {
    question:
      "A student scores well overall but repeatedly confuses workload identity purpose with proof of current authorization scope. What is the strongest final-readiness strategy?",
    choices: [
      "Reread every Advanced lesson equally.",
      "Ignore the weakness because the overall score is high.",
      "Complete targeted workload-identity scenario review using purpose, required resources, owner, lifecycle, authorization evidence, and residual risk, then reassess readiness.",
      "Memorize the phrase least privilege.",
    ],
    answer: 2,
    explanation:
      "A20.10 emphasizes targeted review of recurring reasoning weaknesses using applied scenarios rather than broad rereading or vocabulary memorization.",
  },
];

const reviewMap = [
  {
    signal: "Missed A20.1 readiness questions",
    lesson:
      "Review A20.1 and focus on review-by-decision, cross-domain relationships, evidence-supported readiness, limitations, and targeted study planning.",
  },
  {
    signal: "Missed A20.2 briefing questions",
    lesson:
      "Review A20.2 and focus on mission, scope, evidence inventory, source limitations, assumptions, unknowns, exclusions, facts, hypotheses, and decision framing.",
  },
  {
    signal: "Missed A20.3 architecture questions",
    lesson:
      "Review A20.3 and focus on trust boundaries, identities, dependencies, degraded states, bounded threat statements, design-vs-implementation evidence, and recovery paths.",
  },
  {
    signal: "Missed A20.4 monitoring questions",
    lesson:
      "Review A20.4 and focus on defensive questions, telemetry, source health, severity vs. confidence, tuning, safe validation, degraded visibility, and monitoring metrics.",
  },
  {
    signal: "Missed A20.5 response questions",
    lesson:
      "Review A20.5 and focus on competing hypotheses, proportional containment, ownership, decision history, recovery criteria, closure, and reassessment triggers.",
  },
  {
    signal: "Missed A20.6 cloud or identity questions",
    lesson:
      "Review A20.6 and focus on shared responsibility, authentication vs. authorization, privileged and workload identities, lifecycle, federation, configuration governance, and recovery access.",
  },
  {
    signal: "Missed A20.7 risk or privacy questions",
    lesson:
      "Review A20.7 and focus on likelihood, impact, controls, inherent vs. residual risk, treatment, acceptance, purpose, minimization, retention, lifecycle, and proportionality.",
  },
  {
    signal: "Missed A20.8 communication questions",
    lesson:
      "Review A20.8 and focus on materiality, confidence, impact, recommendation structure, ownership, tradeoffs, residual risk, audience depth, and next checkpoints.",
  },
  {
    signal: "Missed A20.9 portfolio questions",
    lesson:
      "Review A20.9 and focus on curation, traceability, cross-artifact consistency, revision history, contribution transparency, limitations, oral defense, and publication safety.",
  },
  {
    signal: "Missed A20.10 readiness question",
    lesson:
      "Review A20.10 and focus on integrated Advanced reasoning, targeted review, evidence boundaries, cross-domain scenarios, and assessment strategy.",
  },
];

const performanceGuide = [
  {
    score: "23–25 correct",
    meaning:
      "Excellent A20 readiness. You are applying the capstone's evidence, architecture, monitoring, response, governance, risk, privacy, recovery, and communication reasoning consistently.",
  },
  {
    score: "20–22 correct",
    meaning:
      "Strong A20 readiness. Review the few missed reasoning patterns, then make sure you can explain why the corrected answer is stronger than the alternatives.",
  },
  {
    score: "17–19 correct",
    meaning:
      "Developing A20 readiness. Use the targeted review map and return to the lessons connected to your missed cross-domain decisions.",
  },
  {
    score: "13–16 correct",
    meaning:
      "Partial A20 readiness. Rebuild the most important evidence boundaries and decision patterns before moving into full-track practice assessments.",
  },
  {
    score: "0–12 correct",
    meaning:
      "Foundation review recommended. Revisit A20.1–A20.10 in targeted groups and practice applying the concepts to new fictional scenarios before the full Advanced assessments.",
  },
];

const checklistItems = [
  "I can review Advanced concepts by the decisions they support rather than definitions alone.",
  "I can define mission, scope, stakeholders, assumptions, unknowns, evidence, limitations, exclusions, and decision boundaries.",
  "I can identify assets, identities, trust boundaries, dependencies, degraded states, control expectations, and recovery paths.",
  "I can write bounded threat statements without claiming unsupported vulnerabilities, intent, or exploitation.",
  "I can start detection work from a defensive question and identify telemetry, source health, confidence, validation, tuning, and metrics.",
  "I can explain how delayed, partial, blind, conflicting, or recovering evidence sources change conclusions.",
  "I can preserve competing hypotheses and choose proportional, owned, evidence-preserving response actions.",
  "I can distinguish service recovery from incident closure and define reassessment or reopen triggers.",
  "I can separate provider capability from customer-controlled identity, configuration, data, monitoring, recovery, and governance.",
  "I can distinguish authentication, authorization, approval, business purpose, privilege, role scope, and lifecycle.",
  "I can evaluate inherent and residual risk, treatment, acceptance, ownership, control evidence, and review triggers.",
  "I can apply privacy purpose, minimization, access, retention, sharing, lifecycle, and proportionality to security evidence.",
  "I can communicate the same facts and uncertainty to technical, manager, executive, risk/privacy, and portfolio audiences.",
  "I can curate a portfolio with traceability, revision history, contribution transparency, limitations, and publication safety.",
  "I can identify my weakest Advanced reasoning patterns and create targeted scenario-based review before the full-track assessments.",
];

const takeaways = [
  "The A20 capstone integrates the Advanced Track through evidence-aware, cross-domain defensive decision-making.",
  "Facts, hypotheses, source health, architecture assumptions, control evidence, authorization, risk, privacy, recovery, and communication should remain distinguishable even when they influence one another.",
  "Strong Advanced answers usually preserve uncertainty, respect source limitations, choose proportionate actions, assign ownership, and identify validation or review triggers.",
  "Authentication does not prove authorization, design does not prove implementation, sequence does not prove causation, and missing alerts do not prove inactivity when source health is degraded.",
  "Cloud, identity, monitoring, response, risk, privacy, recovery, governance, and executive communication should be treated as connected decision systems.",
  "The strongest portfolio and assessment work is traceable, internally consistent, bounded by evidence, honest about contribution, and safe to share.",
  "Use missed module-test questions to identify reasoning patterns rather than memorizing the exact wording of answers.",
  "After A20 is verified and deployed, the Advanced Track can move to two 50-question practice tests and the 125-question final assessment.",
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

export default function A20ModuleTestPage() {
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
              A20 Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Capstone
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A20 Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment checks the complete A20 capstone:
            Advanced knowledge integration, case briefing, architecture and threat
            modeling, detection and monitoring, incident response, cloud and
            identity, risk and privacy, executive communication, final portfolio
            submission, and Advanced readiness.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Choose the most defensible answer. All organizations, identities,
            services, records, alerts, risks, incidents, architecture, and evidence
            are fictional and synthetic. No real security testing or private
            information is required.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Back to A20.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Module A20
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have reviewed A20.1 through A20.10.",
            "I am ready to choose the strongest evidence-supported answer rather than the most dramatic or absolute option.",
            "I can distinguish source limitations, confidence, authorization, risk, privacy, recovery, ownership, and communication decisions.",
            "I understand that answers and explanations remain hidden according to the existing CyberShield quiz behavior until submission or reveal.",
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
            A20 Advanced Capstone
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
            Complete all 25 questions using the established CyberShield quiz
            controls. Answers and explanations remain hidden according to the
            shared component behavior until you submit or reveal your results.
          </p>

          <div className="mt-8">
            <MiniQuiz
              title="A20 Module Test: Advanced Capstone"
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
          title="A20 Module Mastery Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Keep every A20 assessment scenario fictional, synthetic, defensive, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            This assessment does not authorize access, scanning, probing,
            exploitation, credential testing, bypass, evasion, monitoring of real
            people, collection of real logs, cloud-account access, configuration
            changes, incident investigation, or review of real private systems. Use
            only CyberShield Academy materials and synthetic evidence.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            A20 Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Advanced Capstone Module Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-emerald-50">
            After reviewing your result, revisit any weak A20 lesson and update
            your Advanced Final Readiness Plan. Your completed A20 outcome is the
            Advanced Capstone Portfolio Submission and Final Readiness Review Pack,
            connecting the full Advanced Track through evidence-based defensive
            reasoning.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Review A20.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              A20 Module Home
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