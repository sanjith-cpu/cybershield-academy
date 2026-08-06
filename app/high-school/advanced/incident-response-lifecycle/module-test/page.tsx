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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/incident-response-lifecycle`;
const previousLesson = `${modulePath}/incident-response-simulation-lab`;
const nextModule = `${trackPath}/digital-forensics-concepts`;

const coverage = [
  {
    "lesson": "A7.1",
    "title": "Advanced Incident Response Roles",
    "focus": "Incident leadership, domain ownership, alternates, authority, handoffs, accountability, and decision rights.",
    "questions": "1–2"
  },
  {
    "lesson": "A7.2",
    "title": "Preparation and Playbook Design",
    "focus": "Playbook triggers, roles, evidence needs, source-health branches, validation, rollback, communication, and escalation.",
    "questions": "3"
  },
  {
    "lesson": "A7.3",
    "title": "Detection and Scoping",
    "focus": "Activation, confirmed and possible scope, Unknowns, source health, decision clocks, priority, and next evidence.",
    "questions": "4–7"
  },
  {
    "lesson": "A7.4",
    "title": "Containment Strategy",
    "focus": "Containment objectives, proportional options, authority, mission impact, expected state, validation, rollback, and residual risk.",
    "questions": "8–10"
  },
  {
    "lesson": "A7.5",
    "title": "Eradication and Recovery Planning",
    "focus": "Cause, eradication, clean-state criteria, recovery waves, canary testing, failed gates, observation, and rollback.",
    "questions": "11–13"
  },
  {
    "lesson": "A7.6",
    "title": "Stakeholder Communication",
    "focus": "Audience-specific updates, user guidance, supplier coordination, uncertainty, corrections, acknowledgement, and next updates.",
    "questions": "14–16"
  },
  {
    "lesson": "A7.7",
    "title": "Evidence Preservation Concepts",
    "focus": "Purpose, authorization, minimum necessary scope, provenance, chronology, custody, access, retention, corrections, and disposition.",
    "questions": "17–19"
  },
  {
    "lesson": "A7.8",
    "title": "Post-Incident Review",
    "focus": "Blameless accountability, decision-time context, strengths, gaps, lessons, corrective actions, validation, and residual risk.",
    "questions": "20–21"
  },
  {
    "lesson": "A7.9",
    "title": "Metrics and Continuous Improvement",
    "focus": "Populations, denominators, quality gates, distributions, metric gaming, action validation, recurrence, and metric lifecycle.",
    "questions": "22–23"
  },
  {
    "lesson": "A7.10",
    "title": "Incident Response Simulation Lab",
    "focus": "Integrated lifecycle reasoning across recovery, closure, reopening, safety, evidence, communication, metrics, and program improvement.",
    "questions": "24–25"
  }
];
const quizQuestions = [
  {
    question: "Which statement best describes the fictional incident lead's role?",
    choices: [
      "Make every technical, privacy, service, supplier, and recovery decision alone.",
      "Coordinate the response, maintain decision flow, and bring the correct accountable owners into bounded decisions.",
      "Replace every domain owner when time is limited.",
      "Approve actions without documenting authority.",
    ],
    answer: 1,
    explanation: "The incident lead coordinates the lifecycle and decision process. Domain owners retain their specialized authority, evidence responsibilities, and acceptance duties.",
  },
  {
    question: "A fictional primary evidence coordinator is unavailable during an important transfer. What is the strongest response?",
    choices: [
      "Allow any available person to take ownership without documentation.",
      "Pause every response activity until the primary returns.",
      "Activate the documented alternate, confirm authority, record the handoff, and preserve acknowledgement.",
      "Delete the transfer requirement.",
    ],
    answer: 2,
    explanation: "Alternate ownership should already be documented. The transfer remains governed by authority, purpose, handoff acceptance, and evidence history.",
  },
  {
    question: "What makes a fictional incident-response playbook decision-ready?",
    choices: [
      "It lists general advice but no owners or decision branches.",
      "It defines triggers, roles, authority, evidence needs, source-health branches, options, validation, rollback, communication, and escalation.",
      "It requires the broadest containment action in every case.",
      "It assumes every required source is always Healthy.",
    ],
    answer: 1,
    explanation: "A decision-ready playbook connects triggers to owners, evidence, source conditions, options, authority, validation, rollback, communication, and escalation.",
  },
  {
    question: "A fictional temporary role remains Active near expiration and one privileged session reaches an administrative destination. Which conclusion is strongest?",
    choices: [
      "Harmful intent and data access are confirmed.",
      "The signal justifies bounded incident coordination while intent, impact, and complete scope remain unresolved.",
      "The service must be shut down immediately.",
      "The alert can be ignored because the role was once approved.",
    ],
    answer: 1,
    explanation: "The evidence supports structured coordination and further review, but it does not automatically prove intent, data access, broad impact, or complete scope.",
  },
  {
    question: "Which fictional scope model is strongest?",
    choices: [
      "Affected or unaffected only.",
      "Confirmed, possible, Unknown, unaffected, excluded, and out of scope, each with evidence, source health, owner, limitation, and next evidence.",
      "Every related entity is affected.",
      "Only the original alert entity is documented.",
    ],
    answer: 1,
    explanation: "The multi-state model preserves uncertainty, relationship strength, evidence quality, and ownership without overclaiming impact.",
  },
  {
    question: "A fictional group-membership source is Degraded during the relevant period. What should the response do?",
    choices: [
      "Treat the group state as safe.",
      "Treat the group state as unsafe.",
      "Keep the conclusion Conditional, document the limitation, assign alternate evidence, and plan source recovery.",
      "Remove the group from scope.",
    ],
    answer: 2,
    explanation: "Degraded evidence supports qualification and additional work, not a forced safe or unsafe conclusion.",
  },
  {
    question: "Which fictional condition most strongly increases response priority?",
    choices: [
      "A dramatic alert title.",
      "A privileged session remains active, authority is uncertain, the service is mission-critical, and the response window is short.",
      "The case has many notes.",
      "The alert is assigned a bright color.",
    ],
    answer: 1,
    explanation: "Priority combines consequence, active state, evidence, uncertainty, mission effect, recoverability, and time sensitivity.",
  },
  {
    question: "What is the strongest fictional containment objective?",
    choices: [
      "Stop everything that might be related.",
      "Reduce the strongest evidence-supported current risk with the smallest justified mission blast radius.",
      "Remove every identity from the service.",
      "Preserve speed even if validation is impossible.",
    ],
    answer: 1,
    explanation: "Containment should be proportional, authorized, evidence-supported, continuity-aware, validated, reversible when appropriate, and connected to residual risk.",
  },
  {
    question: "One fictional session is confirmed, but broad identity misuse and service-wide impact are not. Which action is generally strongest?",
    choices: [
      "Pause the entire service automatically.",
      "Disable every related identity.",
      "Compare options and choose a narrow authorized session-level action with expected-state validation and rollback.",
      "Wait until every Unknown is resolved.",
    ],
    answer: 2,
    explanation: "A narrow session-level action can reduce confirmed risk while preserving continuity and avoiding unsupported broad disruption.",
  },
  {
    question: "One fictional user reports a delayed submission while the service remains broadly available. What is the strongest impact statement?",
    choices: [
      "Every user is affected.",
      "No user is affected.",
      "Possible limited user impact is under review; broad disruption is not confirmed.",
      "The user report proves the supplier caused the incident.",
    ],
    answer: 2,
    explanation: "One report supports possible limited impact and continuity review, not a population-wide or causation conclusion.",
  },
  {
    question: "Why is fictional session containment not the same as eradication?",
    choices: [
      "Containment never changes risk.",
      "Closing a session may reduce current risk while lifecycle, role, group, cause, control-gap, and recurrence conditions remain unresolved.",
      "Eradication always occurs before containment.",
      "Eradication requires deleting all evidence.",
    ],
    answer: 1,
    explanation: "Containment addresses current unsafe state. Eradication addresses supported causes and enabling conditions, then validates the corrected state.",
  },
  {
    question: "What should a fictional clean-state gate contain?",
    choices: [
      "A general statement that the system looks normal.",
      "A domain-specific required state, evidence, source health, owner, validation, break condition, and rollback.",
      "Only service availability.",
      "Only the incident lead's opinion.",
    ],
    answer: 1,
    explanation: "Clean-state gates must be specific, evidence-supported, owned, testable, and connected to break conditions and rollback.",
  },
  {
    question: "A fictional identity canary signs in, but the critical submission workflow fails. What is strongest?",
    choices: [
      "Expand recovery because sign-in succeeded.",
      "Freeze expansion, preserve evidence, maintain the alternate workflow, investigate the failed dependency, and roll back or revise.",
      "Remove the workflow gate.",
      "Close the incident.",
    ],
    answer: 1,
    explanation: "A canary must validate the critical mission workflow, not only authentication or service reachability.",
  },
  {
    question: "Why should fictional incident messages be tailored by audience?",
    choices: [
      "To hide all facts from leadership.",
      "Different audiences need different decisions, actions, guidance, reassurance, detail, confidentiality, and next-update commitments.",
      "To create as many versions as possible.",
      "Because analysts should never see evidence.",
    ],
    answer: 1,
    explanation: "Audience tailoring improves usefulness, privacy, clarity, and action without changing the underlying approved facts.",
  },
  {
    question: "A fictional update said protected data was unaffected, but the required source was Blind. What is strongest?",
    choices: [
      "Quietly edit the message.",
      "Leave it unchanged because no access event was recorded.",
      "Preserve the prior version, issue an explicit correction to Unknown, redistribute, obtain acknowledgement, and update connected decisions.",
      "State that access definitely occurred.",
    ],
    answer: 2,
    explanation: "A decision-changing correction should preserve history, explain the evidence reason, reach affected audiences, and update connected records.",
  },
  {
    question: "Which fictional supplier request is strongest?",
    choices: [
      "Send every internal incident detail and ask the supplier to investigate everything.",
      "Accuse the supplier of causing the incident.",
      "Request bounded evidence for a defined dependency, period, fields, confidentiality level, deadline, owner, and acknowledgement.",
      "Wait indefinitely for the supplier.",
    ],
    answer: 2,
    explanation: "Supplier coordination should be purpose-limited, fair, minimal, decision-focused, time-bounded, and owned.",
  },
  {
    question: "What is the strongest first step in fictional evidence preservation?",
    choices: [
      "Preserve every available record forever.",
      "Define the decision question, authority, minimum-necessary scope, owner, access, retention, and non-purpose boundary.",
      "Give every responder full access.",
      "Create a screenshot before identifying the source.",
    ],
    answer: 1,
    explanation: "Purpose, authority, scope, access, and lifecycle governance should exist before preservation expands.",
  },
  {
    question: "Why should fictional event time, collection time, processing time, review time, and decision time remain separate?",
    choices: [
      "To make the evidence register longer.",
      "Because they describe different stages and substituting one for another can distort chronology, scope, and decision quality.",
      "Because only processing time matters.",
      "Because time fields replace source health.",
    ],
    answer: 1,
    explanation: "Different timestamps answer different questions. Collapsing them can create false sequence or delay conclusions.",
  },
  {
    question: "Which fictional custody and retention practice is strongest?",
    choices: [
      "Allow unrecorded transfers and keep evidence indefinitely.",
      "Record purpose-based access, handlers, transfers, acknowledgements, corrections, review triggers, duration, owner, and disposition.",
      "Delete prior versions after correction.",
      "Let the communications team browse every item.",
    ],
    answer: 1,
    explanation: "Reconstructable handling and purpose-based retention protect evidence quality, privacy, and accountability.",
  },
  {
    question: "What does a fictional blameless post-incident review require?",
    choices: [
      "No accountability or action ownership.",
      "A focus on evidence, decision-time context, systems, conditions, strengths, gaps, and accountable corrective actions without unsupported personal blame.",
      "One person must be named as the cause.",
      "Every decision must be described as correct.",
    ],
    answer: 1,
    explanation: "Blameless review avoids unsupported blame but still requires accountable decisions, owners, actions, validation, risk, and escalation.",
  },
  {
    question: "When is a fictional corrective action complete?",
    choices: [
      "When it is assigned.",
      "When a document or workflow is changed.",
      "When the intended outcome passes defined validation, receives owner acceptance, and residual risk is reviewed.",
      "When the post-incident meeting ends.",
    ],
    answer: 2,
    explanation: "Assignment and implementation are activity states. Completion requires evidence-supported outcome validation and acceptance.",
  },
  {
    question: "Why must a fictional rate define and preserve its denominator?",
    choices: [
      "Because denominators make dashboards look technical.",
      "Because the eligible population determines what the percentage means and whether periods are comparable.",
      "Because the denominator is always total alerts.",
      "Because a denominator removes source-health limitations.",
    ],
    answer: 1,
    explanation: "Unstable or hidden populations can produce false improvement even when the displayed percentage rises.",
  },
  {
    question: "Fictional closure speed improves, but sampled cases lack owner validation and one case reopens after late evidence. Which conclusion is strongest?",
    choices: [
      "The entire program improved because the speed metric is green.",
      "Closure timing improved, but the overall quality claim is Conditional and the target may be rewarding premature closure.",
      "Closure timing should never be measured.",
      "The entire program failed because one case reopened.",
    ],
    answer: 1,
    explanation: "The valid timing result can be preserved while failed quality gates and possible gaming prevent a broader improvement claim.",
  },
  {
    question: "When is a fictional incident ready for closure?",
    choices: [
      "When alerts stop.",
      "When the service responds.",
      "When evidence, source health, scope, containment, recovery, communication, preservation, risk, actions, observation, archive, and reopen criteria are complete enough under defined authority.",
      "When the case becomes old.",
    ],
    answer: 2,
    explanation: "Closure is a governed lifecycle decision. Silence, age, one completed action, or service availability is not enough.",
  },
  {
    question: "Which approach is required for a public CyberShield A7 portfolio artifact?",
    choices: [
      "Sanitize a real incident report by changing names.",
      "Use real screenshots with blurred details.",
      "Invent every organization, role, identity, service, source, supplier, record, message, action, metric, date, and outcome.",
      "Use real recovery plans without contact details.",
    ],
    answer: 2,
    explanation: "Complete fictionalization protects real people, systems, incidents, suppliers, priorities, evidence, and defensive capabilities.",
  },
];
const performanceBands = [
  {
    "score": "23–25",
    "level": "Advanced Ready",
    "meaning": "You consistently integrate evidence, source health, authority, proportional containment, continuity, communication, preservation, recovery, accountability, and improvement.",
    "next_step": "Continue to Module A8: Digital Forensics Concepts."
  },
  {
    "score": "20–22",
    "level": "Strong",
    "meaning": "Your incident-response judgment is strong, with a few areas needing sharper evidence, ownership, recovery, or validation reasoning.",
    "next_step": "Review every missed explanation, then continue."
  },
  {
    "score": "17–19",
    "level": "Developing",
    "meaning": "You understand the main lifecycle but need more consistency when evidence changes, sources weaken, or multiple stakeholders and recovery gates interact.",
    "next_step": "Revisit the A7 lessons connected to missed questions."
  },
  {
    "score": "13–16",
    "level": "Needs Review",
    "meaning": "Several decisions may rely too heavily on speed, broad action, service availability, incomplete evidence, or unvalidated improvement.",
    "next_step": "Repeat the targeted module review before moving forward."
  },
  {
    "score": "0–12",
    "level": "Rebuild the Foundation",
    "meaning": "Return to the module homepage and work through the lessons, labs, hidden-answer checks, simulation, and portfolio prompts again.",
    "next_step": "Focus first on roles, evidence, source health, scoping, containment, recovery, communication, and closure."
  }
];
const reviewMap = [
  {
    "missed": "Questions 1–2",
    "review": "A7.1 Advanced Incident Response Roles",
    "focus": "Incident coordination, domain ownership, alternates, authority, handoffs, and accountability."
  },
  {
    "missed": "Question 3",
    "review": "A7.2 Preparation and Playbook Design",
    "focus": "Decision-ready playbooks, source-health branches, evidence, validation, rollback, and escalation."
  },
  {
    "missed": "Questions 4–7",
    "review": "A7.3 Detection and Scoping",
    "focus": "Activation, scope categories, source health, decision clocks, priority, limitations, and next evidence."
  },
  {
    "missed": "Questions 8–10",
    "review": "A7.4 Containment Strategy",
    "focus": "Containment objectives, option comparison, authority, proportionality, continuity, validation, and residual risk."
  },
  {
    "missed": "Questions 11–13",
    "review": "A7.5 Eradication and Recovery Planning",
    "focus": "Cause, eradication, clean state, canary recovery, failed gates, rollback, observation, and acceptance."
  },
  {
    "missed": "Questions 14–16",
    "review": "A7.6 Stakeholder Communication",
    "focus": "Audience needs, user guidance, supplier requests, uncertainty, correction, acknowledgement, and next updates."
  },
  {
    "missed": "Questions 17–19",
    "review": "A7.7 Evidence Preservation Concepts",
    "focus": "Purpose, scope, provenance, multi-time chronology, access, custody, retention, correction, and disposition."
  },
  {
    "missed": "Questions 20–21",
    "review": "A7.8 Post-Incident Review",
    "focus": "Blameless accountability, decision-time context, lessons, corrective actions, validation, and risk."
  },
  {
    "missed": "Questions 22–23",
    "review": "A7.9 Metrics and Continuous Improvement",
    "focus": "Denominators, quality gates, gaming, distributions, action validation, recurrence, and metric governance."
  },
  {
    "missed": "Questions 24–25",
    "review": "A7.10 Incident Response Simulation Lab",
    "focus": "Integrated closure, reopening, evidence, recovery, communication, safety, and complete fictionalization."
  }
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A7
      </Link>
      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
      >
        Advanced Track
      </Link>
      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function A7ModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A7 Assessment
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              25 Questions
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Hidden Answers
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A7 Module Test
          </h1>

          <p className="mt-4 text-2xl font-bold text-cyan-200">
            Incident Response Lifecycle
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your ability to apply advanced incident-response roles,
            preparation, playbooks, detection, source health, scoping,
            prioritization, containment, continuity, communication, evidence
            preservation, eradication, recovery, post-incident review,
            corrective actions, metrics, closure, reopening, and integrated
            simulation reasoning.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Assessment Readiness"
          items={[
            "I completed or reviewed all ten lessons in Module A7.",
            "I will choose an answer before revealing the explanation.",
            "I will count one point for each correct answer.",
            "I understand that every incident, role, identity, service, source, supplier, message, record, decision, metric, and outcome is fictional.",
            "I will not treat this assessment as permission for any real-world access, investigation, monitoring, collection, containment, preservation, recovery, configuration, or communication.",
            "I will use missed questions to identify the exact A7 lesson I need to review.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="Complete the Assessment without Revealing Answers Early"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Step 1", "Read the full fictional scenario and every answer choice."],
              ["Step 2", "Choose one answer before opening the hidden explanation."],
              ["Step 3", "Reveal the answer and give yourself one point only if your original choice was correct."],
              ["Step 4", "Record the question numbers you missed instead of immediately retrying them."],
              ["Step 5", "Use the targeted review map after Question 25 to return to the correct A7 lesson."],
              ["Step 6", "A strong answer should protect evidence, source health, authority, proportionality, continuity, privacy, validation, accountability, and reopening together."],
            ].map(([step, instruction]) => (
              <div
                key={step}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{step}</p>
                <p className="mt-2 leading-7">{instruction}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This is an open-learning assessment, not a speed challenge. The
            explanations remain hidden so you can commit to an answer first.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Assessment Coverage
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            All Ten A7 Lessons Are Tested
          </h2>

          <div className="mt-6 grid gap-5">
            {coverage.map((item) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <span className="rounded-xl bg-cyan-400 px-4 py-2 text-center font-black text-slate-950">
                    {item.lesson}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.focus}
                    </p>
                  </div>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-black text-purple-200">
                    Questions {item.questions}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <MiniQuiz
          title="A7 Module Test: 25 Questions"
          questions={quizQuestions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Performance Guide
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Interpret Your Score
          </h2>

          <div className="mt-6 grid gap-5">
            {performanceBands.map((band) => (
              <article
                key={band.score}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.4fr_1fr_1fr] lg:items-start">
                  <span className="rounded-xl bg-cyan-400 px-4 py-2 text-center font-black text-slate-950">
                    {band.score}
                  </span>

                  <h3 className="text-lg font-black text-cyan-100">
                    {band.level}
                  </h3>

                  <p className="leading-7 text-slate-300">{band.meaning}</p>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-50">
                    {band.next_step}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Targeted Review Map
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Match Missed Questions to the Correct Lesson
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.missed}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[auto_0.7fr_1fr] md:items-center">
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-black text-red-200">
                    {item.missed}
                  </span>

                  <h3 className="font-black text-cyan-100">{item.review}</h3>

                  <p className="text-sm leading-6 text-slate-300">
                    {item.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Module A7 Mastery Checklist"
          items={[
            "I can assign fictional incident command, technical, service, identity, evidence, privacy, communications, supplier, continuity, recovery, and risk responsibilities.",
            "I can design fictional playbooks with triggers, roles, authority, source-health branches, options, validation, rollback, communication, and escalation.",
            "I can activate fictional response without overstating intent, data access, impact, or complete scope.",
            "I can maintain confirmed, possible, Unknown, unaffected, excluded, and out-of-scope entities with evidence, source health, owners, and next steps.",
            "I can compare fictional containment options and select the narrowest authorized effective action.",
            "I can protect fictional users, accessibility, continuity, privacy, suppliers, evidence, and mission during response.",
            "I can create accurate fictional audience-specific communications, corrections, acknowledgements, and next-update commitments.",
            "I can preserve fictional evidence with purpose, minimum necessary scope, provenance, chronology, custody, access, retention, corrections, and disposition.",
            "I can separate fictional containment, eradication, recovery preparation, restoration, validation, observation, closure, and reopening.",
            "I can conduct fictional post-incident review without unsupported blame and convert lessons into owned, validated corrective actions.",
            "I can define fictional metrics with populations, denominators, source health, quality gates, distributions, gaming review, and owned actions.",
            "I can keep every CyberShield A7 artifact completely fictional, defensive, privacy-safe, non-operational, and safe to share.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Incident response is a coordinated lifecycle of preparation, activation, evidence, decisions, communication, recovery, review, and improvement.",
            "Roles require clear authority, alternates, handoffs, decision rights, evidence needs, and accountability.",
            "Source health changes what fictional evidence can support and must remain visible in scope, communication, recovery, metrics, and closure.",
            "Strong scoping separates confirmed, possible, Unknown, unaffected, excluded, and out-of-scope entities.",
            "Containment should be proportional, authorized, evidence-supported, continuity-aware, validated, reversible when appropriate, and connected to residual risk.",
            "Service availability does not equal eradication or trusted recovery; clean-state gates, canary testing, rollback, observation, and acceptance remain essential.",
            "Stakeholder communication should preserve one approved fact set while adapting decisions, guidance, detail, privacy, and next updates for each audience.",
            "Evidence preservation requires purpose, authority, minimum necessary scope, provenance, timing, access, custody, retention, corrections, and disposition.",
            "Post-incident lessons become improvement only when corrective actions are owned, validated, measured, monitored, and connected to residual risk.",
            "Closure preserves open obligations, archives, action ownership, observation, source reconciliation, and explicit reopen triggers.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            You Completed Module A7
          </h2>
          <p className="mt-3 max-w-3xl leading-7">
            Review any missed questions, confirm your simulation and portfolio
            work are fully fictional, and continue to Module A8 when you are
            ready.
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