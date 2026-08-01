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
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/threat-modeling`;
const previousLesson = `${modulePath}/threat-modeling-workshop-lab`;
const nextModule = `${trackPath}/advanced-networking-defense`;

const coverage = [
  {
    lesson: "A3.1",
    title: "Why Threat Modeling Exists",
    focus:
      "Purpose, timing, decision framing, scope, lifecycle, evidence, ownership, and the difference between threat modeling and related activities.",
    questions: "1–2",
  },
  {
    lesson: "A3.2",
    title: "Assets, Actors, and Entry Points",
    focus:
      "Mission, data, identity, privacy, evidence, service, recovery, human and service actors, authority, ownership, interfaces, and lifecycle.",
    questions: "3–4",
  },
  {
    lesson: "A3.3",
    title: "Data Flows and Trust Boundaries",
    focus:
      "Purpose, source, destination, data, identity, state, validation, timing, evidence, failure, recovery, and changes in trust or responsibility.",
    questions: "5–7",
  },
  {
    lesson: "A3.4",
    title: "Abuse Cases and Misuse Thinking",
    focus:
      "Safe fictional misuse scenarios, preconditions, outcomes, evidence, controls, intent uncertainty, process failure, degraded operation, and recovery.",
    questions: "8–10",
  },
  {
    lesson: "A3.5",
    title: "Threat Categories Conceptually",
    focus:
      "Primary and secondary categories, category purpose, category limits, overlap, uncategorized concerns, and separation from severity or intent.",
    questions: "11–12",
  },
  {
    lesson: "A3.6",
    title: "Risk Ranking in Threat Models",
    focus:
      "Impact, likelihood, exposure, control strength, uncertainty, confidence, inherent risk, residual risk, priority, urgency, and review triggers.",
    questions: "13–15",
  },
  {
    lesson: "A3.7",
    title: "Choosing Mitigations",
    focus:
      "Root-condition reduction, layered design, prevention, detection, response, recovery, privacy, governance, communication, validation, and residual risk.",
    questions: "16–18",
  },
  {
    lesson: "A3.8",
    title: "Documenting Assumptions and Limits",
    focus:
      "Observations, interpretations, assumptions, unknowns, exclusions, constraints, evidence limits, confidence, ownership, expiration, and decision blocking.",
    questions: "19–21",
  },
  {
    lesson: "A3.9",
    title: "Reviewing a Threat Model",
    focus:
      "Scope, evidence, consistency, coverage, traceability, model defects, review findings, completion criteria, disagreement, sign-off, and maintenance.",
    questions: "22–23",
  },
  {
    lesson: "A3.10",
    title: "Threat Modeling Workshop Lab",
    focus:
      "Integrated workshop reasoning, multidisciplinary roles, decision readiness, conditional approval, blocked decisions, safe publication, and maintenance.",
    questions: "24–25",
  },
];

const questions = [
  {
    question:
      "1. Which statement best explains why professional teams use threat modeling?",
    choices: [
      "To predict every future attack with certainty.",
      "To identify a single most dangerous actor.",
      "To make structured fictional decisions about assets, actors, flows, boundaries, misuse, risk, controls, assumptions, owners, and review before or during change.",
      "To replace architecture review, risk assessment, incident response, and control validation.",
    ],
    answer: 2,
    explanation:
      "Threat modeling supports structured defensive decisions. It does not predict every event or replace related security and governance activities.",
  },
  {
    question:
      "2. A fictional team begins ranking risks before defining the decision, scope, current state, future state, owners, and evidence. What is the strongest first correction?",
    choices: [
      "Assign temporary numerical scores so the workshop can continue.",
      "Frame the decision, define scope and exclusions, identify owners, document evidence and assumptions, and then resume scenario analysis.",
      "Choose a threat category for the entire system.",
      "Start writing mitigations immediately.",
    ],
    answer: 1,
    explanation:
      "A threat model requires a stable decision and scope before rankings or mitigations can be interpreted responsibly.",
  },
  {
    question:
      "3. Which fictional asset register is strongest?",
    choices: [
      "A list containing only servers, applications, and databases.",
      "A list of technical products with no owners or value statements.",
      "A register covering mission, users, data, identity, privacy, service, evidence, safety, trust, supplier, and recovery values with owners, harm, dependencies, and evidence.",
      "A list of the most expensive components.",
    ],
    answer: 2,
    explanation:
      "Advanced threat modeling protects mission and human outcomes as well as technical components, and connects each value to ownership and evidence.",
  },
  {
    question:
      "4. A fictional support analyst has a valid identity and role but attempts to change a case outside the analyst's assignment. What is the strongest conclusion?",
    choices: [
      "Authentication automatically authorizes the action.",
      "The actor relationship and object-level authority must be evaluated; valid identity alone does not approve the action.",
      "Every support analyst should receive administrator rights.",
      "The action proves malicious intent.",
    ],
    answer: 1,
    explanation:
      "Actor modeling includes identity, role, object, assignment, conditions, purpose, lifecycle, and evidence. Authentication alone is not authorization.",
  },
  {
    question:
      "5. What information should a strong fictional data-flow record contain?",
    choices: [
      "Only a source, destination, and arrow.",
      "Only the type of data moving.",
      "Purpose, source, destination, data, identity, state, validation, timing, trust change, evidence, failure behavior, recovery, owner, and review triggers.",
      "Only whether the connection uses encryption.",
    ],
    answer: 2,
    explanation:
      "A decision-ready flow explains meaning, control, ownership, failure, and recovery—not merely connectivity.",
  },
  {
    question:
      "6. What makes a fictional trust boundary meaningful?",
    choices: [
      "It separates two differently colored boxes.",
      "It marks where authority, ownership, identity, validation, data handling, responsibility, evidence, or control expectations change.",
      "It always represents the public internet.",
      "It proves the system on one side is trusted.",
    ],
    answer: 1,
    explanation:
      "Trust boundaries describe changes in responsibility and decision conditions. They do not automatically make either side safe or unsafe.",
  },
  {
    question:
      "7. A fictional supplier result crosses into an internal workflow. Which boundary decision is strongest?",
    choices: [
      "Accept the result because the supplier authenticated.",
      "Accept the result because the connection is encrypted.",
      "Validate source identity, purpose, schema, correlation, freshness, state compatibility, ordering, duplicate handling, evidence health, and recovery behavior before changing business state.",
      "Reject every supplier result permanently.",
    ],
    answer: 2,
    explanation:
      "A valid identity and protected connection do not establish semantic correctness, current state, authorization, or safe recovery.",
  },
  {
    question:
      "8. Which statement best describes a safe fictional abuse case?",
    choices: [
      "A detailed procedure for exploiting a real application.",
      "An outcome-focused scenario describing actor context, assets, preconditions, capability, unsafe result, evidence, controls, unknowns, and owners without operational harmful instructions.",
      "A claim that a user is malicious.",
      "A category label with no scenario.",
    ],
    answer: 1,
    explanation:
      "Safe abuse cases support defensive reasoning while remaining fictional, bounded, non-operational, and evidence-aware.",
  },
  {
    question:
      "9. Several fictional notification-change tickets lack reason and user-confirmation fields. What is the strongest abuse-case conclusion?",
    choices: [
      "The support analysts acted maliciously.",
      "The changes were unauthorized.",
      "The evidence record is incomplete, so the model should examine verification, authorization, accountability, user impact, alternate explanations, and workflow controls without assuming intent.",
      "The notification service is compromised.",
    ],
    answer: 2,
    explanation:
      "Missing evidence supports defensive questions but does not prove intent, authorization failure, compromise, or impact.",
  },
  {
    question:
      "10. Why should degraded and recovery states appear in fictional abuse cases?",
    choices: [
      "Because only outages create risk.",
      "Because identities, controls, evidence, workflows, dependencies, and business state may behave differently during disruption and restoration.",
      "Because normal operation never needs review.",
      "Because recovery always removes residual risk.",
    ],
    answer: 1,
    explanation:
      "Unsafe outcomes can emerge during fallback, retry, emergency access, partial recovery, stale state, and reconciliation.",
  },
  {
    question:
      "11. What is the strongest use of a fictional threat category?",
    choices: [
      "To prove an event occurred.",
      "To determine severity automatically.",
      "To organize defensive questions, assets, evidence, controls, owners, and review while preserving the scenario's actual context.",
      "To label the actor's intent.",
    ],
    answer: 2,
    explanation:
      "Categories support organization and review. They do not prove occurrence, intent, exploitability, or severity.",
  },
  {
    question:
      "12. A fictional scenario is labeled with eight categories, but most labels do not change evidence, controls, owners, or recovery. What is the strongest correction?",
    choices: [
      "Add more categories to improve completeness.",
      "Choose one primary category and retain only secondary categories that materially change the defensive decision.",
      "Remove the scenario.",
      "Use the most severe-sounding category as the primary label.",
    ],
    answer: 1,
    explanation:
      "Category inflation reduces clarity. Labels should remain only when they improve the decision.",
  },
  {
    question:
      "13. Why must impact and likelihood be evaluated separately?",
    choices: [
      "Because impact is always higher than likelihood.",
      "Because a severe outcome may be unlikely, while a frequent condition may have limited impact.",
      "Because likelihood does not require evidence.",
      "Because categories determine impact.",
    ],
    answer: 1,
    explanation:
      "Separating dimensions prevents dramatic impact from being mistaken for likely occurrence and prevents frequent low-impact conditions from being overstated.",
  },
  {
    question:
      "14. A fictional control appears in a design document but has no implementation, operating, monitoring, failure, or recovery evidence. How should it affect residual risk?",
    choices: [
      "Treat it as fully effective.",
      "Treat it as proof the risk is Low.",
      "Recognize design intent but preserve uncertainty and avoid claiming unsupported risk reduction.",
      "Treat it as proof the control failed.",
    ],
    answer: 2,
    explanation:
      "Design evidence does not establish implementation or effectiveness. Residual-risk reduction should reflect only supported control effects.",
  },
  {
    question:
      "15. Current use of a fictional supplier free-text field is unknown, and the final privacy ranking depends on that fact. What is the strongest response?",
    choices: [
      "Assign Low because misuse is not proven.",
      "Assign Very High because anything is possible.",
      "Mark the final decision blocked or provisional, record confidence and evidence limits, assign a data owner, and define the evidence required to continue.",
      "Remove privacy from the model.",
    ],
    answer: 2,
    explanation:
      "Decision-blocking uncertainty should remain visible and owned rather than being converted into an unsupported rating.",
  },
  {
    question:
      "16. Which mitigation is strongest when a fictional supplier does not need a free-text support-note field?",
    choices: [
      "Keep the field and collect every value in monitoring.",
      "Remove or replace the field with a minimal approved value, enforce the minimized schema, validate purpose and retention, and document residual risk.",
      "Encrypt the field and keep all other behavior unchanged.",
      "Rely on annual awareness training.",
    ],
    answer: 1,
    explanation:
      "Removing the unnecessary risky condition is stronger than merely surrounding it with additional controls.",
  },
  {
    question:
      "17. What does defense in depth mean when selecting fictional mitigations?",
    choices: [
      "Using many controls that all depend on one dashboard.",
      "Combining complementary design, prevention, detection, response, recovery, privacy, governance, communication, and evidence controls so one failure does not determine the outcome.",
      "Selecting the most expensive control.",
      "Adding more alerts for every scenario.",
    ],
    answer: 1,
    explanation:
      "Layered controls should provide independent or complementary protection across the complete lifecycle.",
  },
  {
    question:
      "18. A compensating fictional control is introduced until a preferred design change is ready. Which governance is strongest?",
    choices: [
      "Treat the compensating control as permanent once deployed.",
      "Give it an equivalent control objective, owner, evidence, limitations, expiration, replacement milestone, review trigger, and residual-risk decision.",
      "Avoid documenting it so it remains flexible.",
      "Remove all monitoring because the design change is delayed.",
    ],
    answer: 1,
    explanation:
      "Compensating controls should be time-bound, evidence-supported, owned, and connected to the preferred long-term solution.",
  },
  {
    question:
      "19. Which fictional assumption statement is strongest?",
    choices: [
      "The supplier is secure.",
      "The queue probably works normally.",
      "Assume result ordering is preserved for one case reference until the fictional workflow owner validates delay, retry, and recovery evidence; confidence is Moderate and the assumption expires after queue or supplier change.",
      "No problems have been reported.",
    ],
    answer: 2,
    explanation:
      "A strong assumption is precise, testable, evidence-aware, owned, time-bound, and connected to consequences and review.",
  },
  {
    question:
      "20. What is the difference between a fictional observation and an interpretation?",
    choices: [
      "There is no difference.",
      "An observation is directly represented by supplied evidence; an interpretation explains what that evidence may mean.",
      "An interpretation is always more reliable.",
      "An observation proves cause.",
    ],
    answer: 1,
    explanation:
      "Separating evidence from reasoning prevents possibilities and hypotheses from being presented as confirmed facts.",
  },
  {
    question:
      "21. Why must a fictional model publish exclusions?",
    choices: [
      "To make the model appear incomplete.",
      "So readers know which systems, actors, environments, workflows, states, or questions were not analyzed and do not overgeneralize the conclusions.",
      "Because excluded areas never matter.",
      "To avoid assigning owners.",
    ],
    answer: 1,
    explanation:
      "Visible exclusions protect decision integrity and identify where follow-up modeling may be required.",
  },
  {
    question:
      "22. Which review finding is strongest?",
    choices: [
      "The risk section is weak.",
      "Three fictional High residual risks lack linked control-operating evidence, so risk reduction may be overstated; control owners must provide current evidence or revise the rankings before acceptance.",
      "The reviewer dislikes the scoring method.",
      "The team should improve security.",
    ],
    answer: 1,
    explanation:
      "A strong finding identifies the criterion, observation, decision impact, action, owner need, and blocked decision.",
  },
  {
    question:
      "23. A fictional review finds strong architecture coverage but unresolved privacy evidence and an expired identity assumption. What is the strongest sign-off decision?",
    choices: [
      "Approve the entire model because most sections are complete.",
      "Reject every section because uncertainty remains.",
      "Issue partial or conditional sign-off for decision-ready areas while blocking privacy and identity-dependent decisions until measurable closure evidence exists.",
      "Remove the unresolved sections from the report.",
    ],
    answer: 2,
    explanation:
      "Ready, conditional, and blocked decisions should be separated instead of hidden behind one overall approval label.",
  },
  {
    question:
      "24. During a fictional workshop, one participant's statement conflicts with the supplied evidence. What should the facilitator do?",
    choices: [
      "Accept the statement because the participant is senior.",
      "Ignore the evidence to preserve consensus.",
      "Record the statement and evidence separately, document the contradiction, identify affected decisions, assign validation, and preserve disagreement until authorized resolution.",
      "Accuse the participant of dishonesty.",
    ],
    answer: 2,
    explanation:
      "Threat-model workshops should challenge reasoning and evidence without blaming people or assuming intent.",
  },
  {
    question:
      "25. A complete fictional workshop package has strong traceability and safe-publication review, but supplier-field use, archival identity ownership, and several control-operating claims remain unresolved. What is the strongest final decision?",
    choices: [
      "Approve every decision because the package is detailed.",
      "Reject the entire package because uncertainty exists.",
      "Issue partial and conditional sign-off, preserve blocked decisions, assign owners and completion criteria, update dependent risks and mitigations, document residual uncertainty, and set review triggers.",
      "Mark every unresolved risk Very High.",
    ],
    answer: 2,
    explanation:
      "A mature final decision distinguishes usable areas from blocked areas, preserves evidence limits, and assigns measurable next actions without overpromising.",
  },
];

const masteryAreas = [
  {
    title: "Purpose, scope, and lifecycle",
    questions: "1–2",
    review:
      "Review why threat modeling exists, how it differs from related activities, when to begin, how to frame the decision, and how scope, evidence, owners, assumptions, and review fit together.",
  },
  {
    title: "Assets, actors, and entry points",
    questions: "3–4",
    review:
      "Review mission and human assets, actor relationships, identity, authority, ownership, service identities, object scope, lifecycle, and interface purpose.",
  },
  {
    title: "Flows and trust boundaries",
    questions: "5–7",
    review:
      "Review source, destination, purpose, data, identity, state, validation, timing, responsibility, evidence, failure, recovery, and boundary decisions.",
  },
  {
    title: "Abuse cases and categories",
    questions: "8–12",
    review:
      "Review safe misuse thinking, preconditions, outcomes, process and recovery scenarios, intent uncertainty, category purpose, overlap, and category inflation.",
  },
  {
    title: "Risk ranking",
    questions: "13–15",
    review:
      "Review impact, likelihood, exposure, control maturity, uncertainty, confidence, inherent risk, residual risk, priority, urgency, and decision blocking.",
  },
  {
    title: "Mitigation selection",
    questions: "16–18",
    review:
      "Review root-condition reduction, defense in depth, control objectives, tradeoffs, failure behavior, validation, compensating controls, and residual risk.",
  },
  {
    title: "Assumptions and limits",
    questions: "19–21",
    review:
      "Review observations, interpretations, assumptions, unknowns, exclusions, evidence limits, confidence, owners, consequences, expiration, and triggers.",
  },
  {
    title: "Review and workshop integration",
    questions: "22–25",
    review:
      "Review structured findings, measurable closure, partial sign-off, disagreement, traceability, blocked decisions, safe publication, and living-model maintenance.",
  },
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
        Module A3
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function A3ThreatModelingModuleTestPage() {
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
              Module A3 Assessment
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Exactly 25 Questions
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Hidden Answers and Scoring
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3 Module Test
          </h1>

          <p className="mt-4 text-2xl font-bold text-cyan-200">
            Threat Modeling
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your ability to frame a fictional threat-modeling decision,
            identify assets, actors, entry points, flows, and trust boundaries,
            build safe abuse cases, use threat categories conceptually, rank
            risk, choose layered mitigations, document assumptions and limits,
            review model quality, and defend conditional or blocked decisions.
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
            "I completed or reviewed all ten lessons in Module A3.",
            "I will answer every question before submitting or revealing explanations.",
            "I understand that all organizations, systems, identities, assets, actors, flows, scenarios, records, controls, dates, and outcomes are fictional.",
            "I will use missed questions to identify the exact A3 lesson and reasoning skill I need to review.",
            "I will keep evidence, interpretation, assumption, uncertainty, category, severity, intent, control state, and residual risk separate.",
            "I will not treat this assessment as permission to access, scan, test, configure, investigate, monitor, recover, or change any real system.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Rules"
          title="Complete All Twenty-Five Questions"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Read fully",
                "Read the complete fictional scenario and every answer choice before selecting a response.",
              ],
              [
                "Choose defensively",
                "Select the answer that is most evidence-aware, least assumptive, safest, most traceable, and easiest to validate.",
              ],
              [
                "Keep answers hidden",
                "Do not reveal explanations until you have committed to an answer.",
              ],
              [
                "Use one point",
                "Count one point for each correct response and use the score guide only after all twenty-five questions.",
              ],
              [
                "Record missed concepts",
                "Write down the question number and misconception instead of immediately guessing again.",
              ],
              [
                "Preserve the boundary",
                "Every scenario is invented and authorizes no real-world access, testing, monitoring, investigation, or change.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Coverage Map"
          title="Every A3 Lesson Appears in the Assessment"
        >
          <div className="grid gap-5">
            {coverage.map((item) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      {item.lesson}
                    </p>
                    <h3 className="mt-1 text-lg font-black text-white">
                      {item.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                    Questions {item.questions}
                  </span>
                </div>

                <p className="mt-3 leading-7 text-slate-300">{item.focus}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Pre-Test Threat-Model Dashboard"
          subtitle="Fictional readiness, traceability, blocked decisions, and evidence status for assessment analysis only."
          metrics={[
            {
              label: "Traceable high-priority risks",
              value: "4 / 4",
              note: "Each fictional High-priority risk links to assets, actors, flows, scenarios, evidence, controls, assumptions, owners, and triggers.",
            },
            {
              label: "Decision-blocking gaps",
              value: "3",
              note: "Supplier-field use, archival identity ownership, and incomplete control-operating evidence still block final decisions.",
            },
            {
              label: "Review actions with measurable closure",
              value: "11 / 13",
              note: "Two fictional actions still use vague ownership or completion language.",
            },
          ]}
        />

        <FakeAlertCard
          title="Final Sign-Off Overstates Decision Readiness"
          severity="High"
          time="6:18 PM"
          source="Fake Northbridge Threat-Model Governance Console"
          details="The fictional summary says every threat-model decision is approved even though the supplier free-text field remains unresolved, the archival service identity lacks current ownership, and three control claims lack complete operating evidence."
          recommendation="Use partial or conditional sign-off, preserve blocked decisions, assign owners and measurable completion criteria, update dependent risks and mitigations, and set review triggers."
        />

        <FakeLogPanel
          title="Fake A3 Assessment Evidence Timeline"
          logs={[
            "09:00 SCOPE decision='support-portal-threat-model' state='current+future'",
            "09:08 ASSET mission='defined' privacy='defined' recovery='defined'",
            "09:16 ACTOR service-identity='archive-owner-missing'",
            "09:24 FLOW supplier-result state-validation='partial'",
            "09:32 BOUNDARY supplier trust='conditional'",
            "09:40 ABUSECASE count='18' unsafe-detail='none'",
            "09:48 CATEGORY inflation='4-scenarios'",
            "09:56 RISK high='4' blocked='2' provisional='3'",
            "10:04 MITIGATION layered='5-packages'",
            "10:12 CONTROL operating-evidence='partial'",
            "10:20 ASSUMPTION open='14' expired='1' unowned='3'",
            "10:28 REVIEW findings='12' blockers='3'",
            "10:36 SIGNOFF architecture='conditional'",
            "10:44 SIGNOFF privacy='blocked'",
            "10:52 SIGNOFF publication='ready'",
            "11:00 MAINTENANCE triggers='defined'",
            "11:08 CONFIDENCE model='moderate'",
            "18:18 ALERT issue='signoff-overstatement'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Final Evidence Check before the Test"
          question="Which fictional decision is most defensible based on the supplied evidence?"
          evidence={[
            "The model has clear scope, assets, actors, entry points, flows, boundaries, abuse cases, categories, risk records, mitigations, assumptions, and review artifacts.",
            "Four high-priority fictional risks are traceable.",
            "Current use, purpose, access, retention, and ownership of a supplier free-text field remain unresolved.",
            "The archival service identity lacks current ownership and review evidence.",
            "Several controls are designed but lack complete operating, failure, or recovery evidence.",
            "A recovery exercise supports a sequencing concern but does not establish production frequency.",
            "Safe-publication review found no real targets, credentials, configurations, routes, or operational harmful instructions.",
            "Overall model confidence is Moderate.",
          ]}
          options={[
            "Issue partial and conditional sign-off for decision-ready areas, preserve blocked privacy, identity, and control-effectiveness decisions, assign measurable owner actions, update dependent artifacts, and maintain review triggers.",
            "Approve the complete model because it contains many artifacts.",
            "Reject every decision because uncertainty remains.",
            "Mark all unresolved scenarios Very High.",
          ]}
          bestAnswer={0}
          explanation="The first option uses the full fictional evidence set, preserves uncertainty, separates ready and blocked areas, assigns next actions, and avoids both false approval and unnecessary rejection."
        />

        <MiniQuiz
          title="A3 Threat Modeling Module Test: 25 Questions"
          questions={questions}
        />

        <SectionCard eyebrow="Score Guide" title="Interpret Your Result">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "23–25",
                "Advanced Ready",
                "You can integrate scope, assets, actors, flows, misuse, categories, risk, controls, assumptions, review, and maintenance into defensible decisions.",
              ],
              [
                "20–22",
                "Strong Readiness",
                "You understand A3 well. Review every missed explanation and the related lesson before beginning A4.",
              ],
              [
                "17–19",
                "Targeted Review",
                "Revisit the specific A3 lessons connected to missed questions and repeat their fictional evidence and portfolio activities.",
              ],
              [
                "0–16",
                "Rebuild A3 Foundations",
                "Review the full module, especially traceability, uncertainty, control evidence, assumptions, conditional decisions, and safe workshop reasoning.",
              ],
            ].map(([score, label, detail]) => (
              <article
                key={score}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-2xl font-black text-cyan-100">{score}</p>
                <h3 className="mt-2 font-black text-white">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            A score is only one readiness signal. Strong A3 mastery also
            requires complete fictional artifacts, evidence-aware reasoning,
            safe communication, review discipline, reflection, revision, and
            the ability to defend conditional or blocked decisions.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Mastery Review"
          title="Eight Areas to Review after the Test"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {masteryAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-black text-cyan-100">{area.title}</h3>
                  <span className="rounded-full border border-cyan-300/30 bg-slate-950/70 px-3 py-1 text-xs font-black uppercase tracking-[0.15em]">
                    Questions {area.questions}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6">{area.review}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A3 Final Readiness Checklist"
          items={[
            "I can explain why threat modeling exists and how it supports a defined fictional decision.",
            "I can identify mission, data, identity, privacy, service, evidence, safety, trust, supplier, and recovery assets.",
            "I can model human, service, supplier, automated, support, administrative, emergency, and recovery actors by relationship and authority.",
            "I can document entry points, data flows, trust changes, validation, evidence, failure, and recovery.",
            "I can write safe fictional abuse cases without operational harmful instructions or unsupported intent claims.",
            "I can use threat categories as conceptual organizers without confusing them with severity or proof.",
            "I can rank risk using impact, likelihood, exposure, control strength, uncertainty, confidence, residual risk, priority, and urgency.",
            "I can choose layered mitigations and explain tradeoffs, control evidence, failure behavior, validation, and residual risk.",
            "I can document assumptions, unknowns, exclusions, confidence, owners, consequences, expiration, and triggers.",
            "I can review traceability, evidence, consistency, coverage, findings, completion criteria, sign-off, and maintenance.",
            "I can preserve Ready, Conditional, Blocked, Accepted, Provisional, and Reopened decision states.",
            "I can keep every threat-model artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, and safe for public learning.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Threat modeling is a structured fictional decision process, not a prediction of every future event.",
            "Strong models connect mission and assets to actors, interfaces, flows, boundaries, misuse, categories, risks, controls, assumptions, owners, and review.",
            "Categories organize defensive questions but do not prove occurrence, intent, exploitability, or severity.",
            "Risk ranking requires separate reasoning for impact, likelihood, exposure, controls, uncertainty, confidence, priority, urgency, and residual risk.",
            "Mitigations should reduce exact scenario conditions through layered and failure-aware controls.",
            "Unknowns should remain visible and may justify provisional or blocked decisions.",
            "Review findings need evidence, owners, measurable completion criteria, closure, and maintenance triggers.",
            "Conditional or partial sign-off can be more responsible than one overall approval label.",
            "Safe publication requires complete fictionalization and removal of real or operational internal-style details.",
            "Every CyberShield A3 assessment scenario remains fictional and authorizes no real-world access, testing, monitoring, investigation, or change.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Finish Module A3
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Review every missed question, revisit the matching lesson, and make
            sure the complete fictional A3 threat-model package is traceable,
            evidence-aware, reviewed, maintainable, and safe before continuing
            to Advanced Module A4.
          </p>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}