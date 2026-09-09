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

const modulePath = "/high-school/advanced/security-automation-concepts";
const lessonTenPath = `${modulePath}/security-automation-design-lab`;
const advancedPath = "/high-school/advanced";

const questions = [
  {
    question:
      "Which task is usually the strongest candidate for defensive security automation?",
    choices: [
      "A repetitive, low-ambiguity task with stable inputs, clear evidence, bounded impact, and a safe fallback.",
      "A high-consequence decision with unclear evidence and no human review.",
      "A task chosen only because automation would look impressive.",
      "Any process that takes more than five minutes.",
    ],
    answer: 0,
    explanation:
      "Strong automation opportunities are repeatable, bounded, evidence-rich, and safe to recover or escalate when something changes.",
  },
  {
    question:
      "Why should an Automation Opportunity Map include the current manual process?",
    choices: [
      "So the team can compare the proposed automation with a real baseline of effort, repetition, errors, and value.",
      "So every manual step can automatically be removed.",
      "So analysts can be evaluated by speed alone.",
      "So governance review is unnecessary.",
    ],
    answer: 0,
    explanation:
      "A current-state baseline helps determine whether automation solves a real problem and whether later improvements are meaningful.",
  },
  {
    question:
      "Which factor most strongly suggests a task should remain human-led?",
    choices: [
      "High ambiguity combined with high consequence or authority-sensitive judgment.",
      "The task contains a timestamp.",
      "The same ticket field appears often.",
      "The workflow has a dashboard.",
    ],
    answer: 0,
    explanation:
      "When evidence is ambiguous and the consequence or authority requirement is high, meaningful human judgment should remain central.",
  },
  {
    question:
      "What is the strongest use of human-in-the-loop automation?",
    choices: [
      "Automation prepares or recommends, then a person reviews and makes the governed decision.",
      "Automation makes the final decision and asks a person to approve it afterward.",
      "The person clicks an approval button without seeing evidence.",
      "The workflow treats silence as approval.",
    ],
    answer: 0,
    explanation:
      "Human-in-the-loop design preserves meaningful review before an authority-sensitive or ambiguous decision advances.",
  },
  {
    question:
      "What is alert enrichment supposed to do?",
    choices: [
      "Add relevant, attributable, current context that helps an analyst understand an alert.",
      "Automatically decide whether every alert is harmless.",
      "Copy all available organizational data into every alert.",
      "Replace the original alert evidence.",
    ],
    answer: 0,
    explanation:
      "Enrichment should improve context while preserving source attribution, uncertainty, privacy minimization, and analyst judgment.",
  },
  {
    question:
      "What is the strongest response when two trusted enrichment sources disagree?",
    choices: [
      "Show the conflicting values, sources, and timestamps and require human review where the difference matters.",
      "Silently choose whichever value lowers severity.",
      "Hide both values.",
      "Treat the older source as correct every time.",
    ],
    answer: 0,
    explanation:
      "Conflicting evidence should remain visible rather than being silently resolved by automation.",
  },
  {
    question:
      "What is the strongest fallback when ticket ownership cannot be determined?",
    choices: [
      "Route the ticket to a defined general review or exception queue and mark ownership as unresolved.",
      "Guess from an old ticket.",
      "Leave the ticket unassigned forever.",
      "Close the ticket.",
    ],
    answer: 0,
    explanation:
      "A governed fallback queue keeps work visible and accountable without inventing uncertain ownership.",
  },
  {
    question:
      "What is the best response to a routing loop between two queues?",
    choices: [
      "Stop automatic reassignment and move the ticket to a workflow exception path for ownership review.",
      "Keep reassigning until one queue accepts it.",
      "Create one duplicate ticket for each queue.",
      "Delete the ticket.",
    ],
    answer: 0,
    explanation:
      "Loop detection should contain the failure and move it to a human-owned exception state.",
  },
  {
    question:
      "What is the strongest distinction between a playbook and a runbook?",
    choices: [
      "A playbook supports branching judgment, while a runbook supports repeatable bounded procedures.",
      "A runbook always contains more steps.",
      "A playbook never includes evidence.",
      "They should always be identical.",
    ],
    answer: 0,
    explanation:
      "Playbooks are best for context-dependent paths; runbooks are best for stable, repeatable support procedures.",
  },
  {
    question:
      "What should a safe runbook do when required input validation fails?",
    choices: [
      "Stop and use the defined fallback or exception path.",
      "Guess the missing input.",
      "Continue silently.",
      "Increase its permissions.",
    ],
    answer: 0,
    explanation:
      "Runbooks need validation, stop conditions, and safe fallback instead of forcing completion.",
  },
  {
    question:
      "What is the purpose of dry-run mode?",
    choices: [
      "Preview what an approved automation would do without applying the state change.",
      "Bypass approval requirements.",
      "Hide logging.",
      "Replace input validation.",
    ],
    answer: 0,
    explanation:
      "Dry runs help reviewers inspect expected effects before an allowed change is applied.",
  },
  {
    question:
      "What does least privilege mean for automation?",
    choices: [
      "Give the automation only the permissions needed for its approved bounded task.",
      "Give broad access so future features are easier.",
      "Let the automation request any permission at runtime.",
      "Use one highly privileged identity for every workflow.",
    ],
    answer: 0,
    explanation:
      "Least privilege limits both accidental impact and unsafe scope expansion.",
  },
  {
    question:
      "Why is idempotency important in workflow automation?",
    choices: [
      "It helps prevent retries or duplicate requests from creating repeated side effects.",
      "It makes every workflow faster.",
      "It removes the need for error handling.",
      "It guarantees a dependency will never fail.",
    ],
    answer: 0,
    explanation:
      "Idempotency helps contain duplicate execution when retries or repeated events occur.",
  },
  {
    question:
      "What is a retry storm?",
    choices: [
      "Repeated failed attempts create more load, duplicates, or cascading failures.",
      "A normal bounded retry.",
      "A manual analyst escalation.",
      "A scheduled governance review.",
    ],
    answer: 0,
    explanation:
      "Unlimited or poorly controlled retries can amplify a small failure into a larger operational problem.",
  },
  {
    question:
      "What should happen when an optional enrichment dependency is unavailable?",
    choices: [
      "Mark it unavailable and use a visible degraded path if the base alert can still be reviewed safely.",
      "Guess the missing value.",
      "Stop the entire security queue.",
      "Hide the missing context.",
    ],
    answer: 0,
    explanation:
      "Optional dependencies should not become unnecessary single points of failure when safe manual review remains possible.",
  },
  {
    question:
      "What should happen when explicit approval is missing for a high-consequence workflow transition?",
    choices: [
      "Pause or escalate and require an authorized human decision.",
      "Treat timeout as approval.",
      "Use an automation confidence score instead.",
      "Allow any available user to approve.",
    ],
    answer: 0,
    explanation:
      "Authorization must be explicit; silence and confidence are not substitutes for authority.",
  },
  {
    question:
      "Why can total automated action count be a misleading value metric?",
    choices: [
      "It measures activity without proving improvements in quality, analyst effort, reliability, safety, or outcomes.",
      "Automation should never be measured.",
      "Action count can never be calculated.",
      "It is only useful for cloud systems.",
    ],
    answer: 0,
    explanation:
      "Volume is a vanity metric unless it is paired with outcome, quality, reliability, and safety evidence.",
  },
  {
    question:
      "Why does a metric denominator matter?",
    choices: [
      "It defines the population that a percentage or rate actually represents.",
      "It automatically makes the metric more accurate.",
      "It eliminates the need for a review period.",
      "It replaces the metric target.",
    ],
    answer: 0,
    explanation:
      "A percentage is difficult to interpret when the total population is unclear.",
  },
  {
    question:
      "What is the strongest conclusion if automation gets faster but evidence completeness drops?",
    choices: [
      "Investigate the quality loss before declaring the automation successful.",
      "Keep optimizing speed.",
      "Remove the completeness metric.",
      "Reduce human review.",
    ],
    answer: 0,
    explanation:
      "Balanced measurement prevents one attractive metric from hiding worse overall performance.",
  },
  {
    question:
      "What should the target be for prohibited autonomous actions actually executed?",
    choices: [
      "Zero.",
      "Below 5%.",
      "Below 10%.",
      "Whatever the historical baseline was.",
    ],
    answer: 0,
    explanation:
      "Unsafe or prohibited autonomous actions are boundary violations, not ordinary optimization targets.",
  },
  {
    question:
      "What is automation governance primarily responsible for?",
    choices: [
      "Ownership, authority, evidence, review, change control, exceptions, monitoring, and lifecycle responsibility.",
      "Writing code faster.",
      "Removing all human review.",
      "Maximizing permissions.",
    ],
    answer: 0,
    explanation:
      "Governance keeps automation accountable across its full lifecycle.",
  },
  {
    question:
      "What should happen when an approved read-only automation requests a new write permission?",
    choices: [
      "Treat it as a material change and reopen boundary, testing, least-privilege, and governance review.",
      "Approve it automatically.",
      "Hide it in a minor version update.",
      "Let the script decide.",
    ],
    answer: 0,
    explanation:
      "New write capability changes action impact and requires renewed review.",
  },
  {
    question:
      "Why should governance exceptions have expiration dates?",
    choices: [
      "So temporary deviations do not become permanent without explicit review.",
      "So all automation stops on the same date.",
      "So compensating controls are unnecessary.",
      "So evidence does not need to be retained.",
    ],
    answer: 0,
    explanation:
      "Expiration forces a decision to close, renew, redesign, or stop the exception.",
  },
  {
    question:
      "What is the strongest final recommendation for a bounded automation that creates clear value but remains slightly below one important quality target?",
    choices: [
      "Proceed conditionally with controls, monitoring, owners, and a measurable requirement before expansion.",
      "Approve broad expansion because performance improved.",
      "Ignore the missed target.",
      "Disable analyst override so the metric improves.",
    ],
    answer: 0,
    explanation:
      "Conditional approval lets useful automation operate while tying expansion to clear evidence and governance.",
  },
  {
    question:
      "What is the main purpose of the Safe Automation Design and Governance Plan?",
    choices: [
      "Integrate automation opportunity, human judgment, evidence, workflow, technical boundaries, failure resilience, value, governance, and leadership decisions into one defensible plan.",
      "Automate every security task.",
      "Replace human analysts with scripts.",
      "Create real-world offensive automation.",
    ],
    answer: 0,
    explanation:
      "The A17 capstone is a complete defensive design and governance package, not a maximum-automation exercise.",
  },
];

const coverage = [
  {
    range: "Questions 1–2",
    area: "A17.1 Automation Opportunities",
    review:
      "Opportunity quality, manual baseline, repetition, ambiguity, bounded impact, and value.",
  },
  {
    range: "Questions 3–4",
    area: "A17.2 Automation vs Human Judgment",
    review:
      "Human-led decisions, human-in-the-loop, consequence, ambiguity, authority, and approval.",
  },
  {
    range: "Questions 5–6",
    area: "A17.3 Alert Enrichment Concepts",
    review:
      "Relevant context, source quality, freshness, conflicts, uncertainty, and analyst judgment.",
  },
  {
    range: "Questions 7–8",
    area: "A17.4 Ticketing and Workflow Automation",
    review:
      "Fallback queues, routing, ownership, routing loops, and exception handling.",
  },
  {
    range: "Questions 9–10",
    area: "A17.5 Playbooks and Runbooks",
    review:
      "Playbooks vs runbooks, validation, stop conditions, fallback, and bounded procedures.",
  },
  {
    range: "Questions 11–13",
    area: "A17.6 Safe Scripting Boundaries",
    review:
      "Dry runs, least privilege, idempotency, validation, permissions, and safe execution limits.",
  },
  {
    range: "Questions 14–16",
    area: "A17.7 Automation Failure Modes",
    review:
      "Retry storms, degraded mode, dependency failures, approval failure, and containment.",
  },
  {
    range: "Questions 17–20",
    area: "A17.8 Measuring Automation Value",
    review:
      "Balanced metrics, denominators, quality vs speed, and zero-tolerance safety metrics.",
  },
  {
    range: "Questions 21–23",
    area: "A17.9 Governance for Automation",
    review:
      "Ownership, authority, change control, permission expansion, exceptions, and lifecycle.",
  },
  {
    range: "Questions 24–25",
    area: "A17.10 Security Automation Design Lab",
    review:
      "Conditional approval, integrated architecture, leadership decisions, and the final portfolio plan.",
  },
];

const reviewMap = [
  {
    signal: "Missed questions about automation opportunities",
    lesson:
      "Review A17.1 and focus on repetition, baseline effort, ambiguity, reversibility, evidence, and expected value.",
  },
  {
    signal: "Missed human-judgment questions",
    lesson:
      "Review A17.2 and focus on Automated Support, Human in the Loop, Human Led, approval gates, and prohibited decisions.",
  },
  {
    signal: "Missed enrichment questions",
    lesson:
      "Review A17.3 and focus on source, freshness, confidence, Missing/Stale/Conflicting states, and privacy minimization.",
  },
  {
    signal: "Missed routing or workflow questions",
    lesson:
      "Review A17.4 and focus on fallback queues, assignment, duplicates, routing loops, escalation, and closure evidence.",
  },
  {
    signal: "Missed playbook/runbook questions",
    lesson:
      "Review A17.5 and focus on document type, branches, validation, stop conditions, versioning, and human judgment.",
  },
  {
    signal: "Missed scripting-boundary questions",
    lesson:
      "Review A17.6 and focus on least privilege, dry run, allowlists, validation, timeout, rate limit, idempotency, and human gates.",
  },
  {
    signal: "Missed failure-mode questions",
    lesson:
      "Review A17.7 and focus on stale data, duplicate execution, retry storms, degraded mode, hard stops, containment, and recovery.",
  },
  {
    signal: "Missed measurement questions",
    lesson:
      "Review A17.8 and focus on baselines, denominators, thresholds, balanced metrics, hidden rework, and safety outcomes.",
  },
  {
    signal: "Missed governance questions",
    lesson:
      "Review A17.9 and focus on ownership, decision rights, change control, exceptions, disable/re-enable authority, and retirement.",
  },
  {
    signal: "Missed capstone questions",
    lesson:
      "Review A17.10 and focus on integrated decisions, conditional approval, leadership priorities, and the Safe Automation Design and Governance Plan.",
  },
];

const performanceGuide = [
  {
    score: "23–25 correct",
    meaning:
      "Excellent readiness. You can connect automation value, human judgment, technical boundaries, failure resilience, measurement, and governance.",
  },
  {
    score: "20–22 correct",
    meaning:
      "Strong readiness. Review the few topics you missed before moving on.",
  },
  {
    score: "17–19 correct",
    meaning:
      "Developing readiness. Revisit the targeted lessons shown in the review map.",
  },
  {
    score: "13–16 correct",
    meaning:
      "Partial readiness. Review the module artifacts and retake the test after strengthening weak areas.",
  },
  {
    score: "0–12 correct",
    meaning:
      "Rebuild the foundation. Work back through A17.1–A17.10 and focus on why automation boundaries and governance matter.",
  },
];

const checklistItems = [
  "I can identify strong and weak automation opportunities.",
  "I can explain when human judgment must remain central.",
  "I can evaluate enrichment source quality and uncertainty.",
  "I can design safe ticket routing, duplicate handling, and exception queues.",
  "I can distinguish playbooks from runbooks.",
  "I can explain least privilege, dry runs, validation, and idempotency.",
  "I can identify major automation failure modes.",
  "I can distinguish graceful degradation from a hard stop.",
  "I can explain why metrics need baselines, denominators, and thresholds.",
  "I can identify misleading automation metrics.",
  "I can map governance roles and decision rights.",
  "I can explain why permission expansion is a material change.",
  "I can govern temporary exceptions with expiration and closure evidence.",
  "I can explain conditional automation approval.",
  "I can describe the Safe Automation Design and Governance Plan.",
];

const takeaways = [
  "Security automation should begin with a worthwhile, bounded defensive problem.",
  "Human judgment becomes more important as ambiguity, consequence, and authority increase.",
  "Enrichment should add trustworthy context without hiding uncertainty or collecting unnecessary data.",
  "Workflow automation should move and organize work without silently making consequential decisions.",
  "Playbooks support branching judgment; runbooks support repeatable bounded procedures.",
  "Safe scripting requires least privilege, validation, allowlists, dry runs, bounded retries, idempotency, evidence, and fallback.",
  "Automation failure must be anticipated through containment, degraded modes, hard stops, recovery, and disable criteria.",
  "Automation value must be measured with balanced efficiency, quality, reliability, human-effectiveness, safety, and governance metrics.",
  "Governance assigns ownership, authority, change control, exceptions, lifecycle, and retirement responsibility.",
  "The final A17 outcome is a Safe Automation Design and Governance Plan that explains what should be automated, how far, under whose authority, and with what evidence.",
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

export default function A17ModuleTestPage() {
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
              A17 Module Test
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Security Automation Concepts
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A17 Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment checks your understanding of safe,
            human-governed security automation from opportunity selection
            through evidence, workflow design, scripting boundaries, failure
            resilience, measurement, governance, and final leadership decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All scenarios are fictional, inert, defensive, and designed for
            learning. The test does not require access to real security systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Back to A17.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Module A17
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have reviewed A17.1 through A17.10.",
            "I understand that correct answers should preserve safe defensive boundaries.",
            "I am ready to reason about evidence, workflow, failure, value, and governance together.",
            "I will answer based on the A17 concepts rather than choosing the most aggressive automation.",
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
            A17 Security Automation Concepts
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
            Work through all 25 questions. Use the quiz controls to reveal
            answers and explanations only when you are ready to check your work.
          </p>

          <div className="mt-8">
            <MiniQuiz
              title="A17 Module Test: Security Automation Concepts"
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
          title="A17 Module Mastery Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Keep automation defensive, bounded, fictional, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            The strongest A17 answers preserve evidence quality, meaningful
            human authority, safe fallback, least privilege, failure
            containment, balanced measurement, and governance. The module does
            not teach offensive automation, unauthorized access, credential
            attacks, bypassing controls, or destructive real-world actions.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            A17 Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Security Automation Concepts Module Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            After reviewing your results, return to any lesson that needs
            reinforcement. When your understanding is solid, the complete A17
            portfolio is your Safe Automation Design and Governance Plan.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Review A17.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              A17 Module Home
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