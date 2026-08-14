import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/digital-forensics-concepts`;
const previousLesson = `${modulePath}/digital-forensics-capstone-lab`;
const nextModule = `${trackPath}/malware-defense-concepts`;

const coverage = [
  {
    lesson: "A8.1",
    title: "Forensic Questions and Investigation Scope",
    questions: "Questions 1–2",
    focus:
      "Purpose, authority, bounded questions, scope dimensions, exclusions, stop conditions, and scope changes.",
  },
  {
    lesson: "A8.2",
    title: "Evidence Integrity and Chain of Custody",
    questions: "Questions 3–5",
    focus:
      "Evidence identity, provenance, integrity, custody, transformations, ownership, and traceability.",
  },
  {
    lesson: "A8.3",
    title: "Timeline Analysis Concepts",
    questions: "Questions 6–8",
    focus:
      "Event time, receipt time, processing time, source health, sequence, uncertainty, and non-causal reasoning.",
  },
  {
    lesson: "A8.4",
    title: "Endpoint Artifact Concepts",
    questions: "Questions 9–11",
    focus:
      "Endpoint evidence categories, shared-device limits, stale state, automation, synchronization, and attribution.",
  },
  {
    lesson: "A8.5",
    title: "Memory and Storage Evidence Concepts",
    questions: "Questions 12–14",
    focus:
      "Temporary versus persistent evidence, retention, backups, synchronization, protected evidence, and Unknowns.",
  },
  {
    lesson: "A8.6",
    title: "Browser and Account Activity Concepts",
    questions: "Questions 15–17",
    focus:
      "Authentication, sessions, browser context, notifications, synchronization, shared devices, and person-attribution limits.",
  },
  {
    lesson: "A8.7",
    title: "Log Correlation for Forensics",
    questions: "Questions 18–20",
    focus:
      "Cross-source correlation, duplicates, contradictions, source health, relationship strength, and alternative explanations.",
  },
  {
    lesson: "A8.8",
    title: "Forensic Reporting Standards",
    questions: "Questions 21–22",
    focus:
      "Evidence-linked findings, confidence, limitations, audience design, versioning, corrections, and Unknowns.",
  },
  {
    lesson: "A8.9",
    title: "Ethical Limits in Investigations",
    questions: "Questions 23–24",
    focus:
      "Authorization, necessity, proportionality, minimization, privacy, conflicts, purpose changes, retention, and disclosure.",
  },
  {
    lesson: "A8.10",
    title: "Digital Forensics Capstone Lab",
    questions: "Question 25",
    focus:
      "Integrated forensic reasoning across scope, evidence, timeline, correlation, reporting, ethics, and professional uncertainty.",
  },
];

const quizQuestions = [
  {
    question:
      "1. A fictional investigation begins because leadership asks, “Who caused the incident?” Which first step is strongest?",
    choices: [
      "Search every available fictional source for a person’s name.",
      "Rewrite the request into a bounded forensic question tied to a decision, authority, systems, time range, evidence categories, exclusions, and stop conditions.",
      "Assume the most likely account owner is responsible.",
      "Start with the most technically detailed evidence source.",
    ],
    answer: 1,
    explanation:
      "A8 begins with a bounded question and approved scope. A broad accusation is not a defensible forensic question.",
  },
  {
    question:
      "2. One supplied fictional record references Service T, which is outside the approved investigation scope. What is strongest?",
    choices: [
      "Immediately investigate Service T because it may be important.",
      "Ignore the record completely.",
      "Record the reference at a high level, keep Service T outside current analysis, and seek a qualified owner decision only if it becomes material to the approved question.",
      "Assume Service T caused the event.",
    ],
    answer: 2,
    explanation:
      "A reference does not create authority. Scope expansion requires a materiality and owner decision.",
  },
  {
    question:
      "3. What is the strongest purpose of a fictional evidence ID?",
    choices: [
      "To make a report look more technical.",
      "To keep an evidence item traceable across source, owner, transformations, handoffs, analysis, findings, and reporting.",
      "To hide the source name.",
      "To guarantee the evidence is correct.",
    ],
    answer: 1,
    explanation:
      "Evidence identity supports traceability and helps reviewers follow the item through its lifecycle.",
  },
  {
    question:
      "4. A fictional dashboard row was generated from an earlier service record. How should the two records be treated?",
    choices: [
      "As automatically independent evidence.",
      "As potentially related representations whose lineage and transformation must be preserved before counting or comparing them.",
      "The dashboard row should replace the source record.",
      "The source record should be discarded after transformation.",
    ],
    answer: 1,
    explanation:
      "Derived records may remain useful, but their provenance and transformation must stay visible.",
  },
  {
    question:
      "5. A fictional evidence package changes after a qualified owner corrects one field. What is strongest?",
    choices: [
      "Silently replace the old version.",
      "Preserve the earlier version, record the correction, reason, affected fields or findings, reviewer, and updated distribution state.",
      "Delete both versions.",
      "Keep only whichever version supports the preferred conclusion.",
    ],
    answer: 1,
    explanation:
      "Version history protects traceability and prevents silent alteration of the evidence or report lifecycle.",
  },
  {
    question:
      "6. A fictional service event has event time 14:01, processing time 14:06, and case receipt time 14:07. What should the timeline do?",
    choices: [
      "Use only 14:07 because it is the latest.",
      "Use only 14:01 because it is the earliest.",
      "Preserve all three time types because they answer different forensic questions.",
      "Average the three times.",
    ],
    answer: 2,
    explanation:
      "Event, processing, and receipt times represent different stages and should not be collapsed.",
  },
  {
    question:
      "7. A fictional update completes at 13:20 and a service symptom appears at 14:04. What does timing alone establish?",
    choices: [
      "The update caused the symptom.",
      "The update was malicious.",
      "The update preceded the symptom, assuming the time fields are reliable.",
      "The symptom was expected.",
    ],
    answer: 2,
    explanation:
      "Sequence is not causation. Additional relationship evidence and alternatives are required.",
  },
  {
    question:
      "8. A fictional application source is Degraded from 14:02 through 14:18. No matching record appears at 14:10. What is strongest?",
    choices: [
      "No event occurred at 14:10.",
      "The absence should remain source-limited or Unknown because the source cannot provide complete coverage.",
      "The source is useless for the entire investigation.",
      "The missing record proves another source is false.",
    ],
    answer: 1,
    explanation:
      "A Degraded source weakens absence conclusions during the affected interval.",
  },
  {
    question:
      "9. A fictional session record associates Account A with shared Endpoint D-17. What is strongest?",
    choices: [
      "Person A definitely controlled D-17.",
      "The evidence supports an Account A / endpoint association while physical-person attribution may remain Unknown.",
      "The shared device makes the session record useless.",
      "The session proves harmful intent.",
    ],
    answer: 1,
    explanation:
      "Shared-device context limits person attribution without erasing the account-endpoint relationship.",
  },
  {
    question:
      "10. A fictional process-state summary shows Service Helper running during the event window, and the owner says it often runs automatically. What is strongest?",
    choices: [
      "Service Helper caused the event.",
      "The process state is relevant context, but automation and causal limits must remain visible.",
      "The process state proves manual activity.",
      "Expected software can never be relevant.",
    ],
    answer: 1,
    explanation:
      "Running state does not automatically establish manual action, harmfulness, or causation.",
  },
  {
    question:
      "11. A fictional state appears current but the supplying dashboard refreshes only every fifteen minutes. What should the investigator consider?",
    choices: [
      "The state must be current because it is displayed now.",
      "The state may be stale, so freshness, update behavior, source health, and owner explanation matter.",
      "The dashboard should be ignored entirely.",
      "Stale state proves tampering.",
    ],
    answer: 1,
    explanation:
      "Displayed state may represent an earlier condition and should be interpreted with freshness context.",
  },
  {
    question:
      "12. A fictional temporary-state source retained only thirty minutes of history and the requested time has expired. What is strongest?",
    choices: [
      "The event never happened.",
      "The source cannot now confirm or exclude the historical state, so the question may remain Unknown.",
      "The persistent source must be wrong.",
      "Expired evidence proves malicious deletion.",
    ],
    answer: 1,
    explanation:
      "Evidence unavailability is not evidence of event absence.",
  },
  {
    question:
      "13. A fictional backup represents Application Q state as of 13:30. An event happens at 14:04. What can the backup establish?",
    choices: [
      "The exact application state at 14:04.",
      "Only the retained state represented by the backup version, subject to its scope and post-backup limitation.",
      "That no change occurred after 13:30.",
      "That the event was impossible.",
    ],
    answer: 1,
    explanation:
      "Backups describe retained versions rather than continuous state after the backup point.",
  },
  {
    question:
      "14. A fictional evidence category is protected and unavailable to the current reviewer. What does that fact prove?",
    choices: [
      "Someone is hiding something.",
      "The evidence is malicious.",
      "Only that current access is limited; intent, wrongdoing, and content remain unproven.",
      "The protection should be bypassed.",
    ],
    answer: 2,
    explanation:
      "Protected or unavailable evidence is an availability and governance condition, not proof of wrongdoing.",
  },
  {
    question:
      "15. A fictional authentication record shows Account A successfully entered Service S. What does that alone prove?",
    choices: [
      "Person A physically performed the authentication.",
      "Account A was represented as successfully authenticated, subject to source and context limits.",
      "Every later action was manual.",
      "The account was compromised.",
    ],
    answer: 1,
    explanation:
      "Authentication is an account-level observation, not automatic person-level attribution.",
  },
  {
    question:
      "16. A fictional session remains active on a shared workstation after the original authentication. What is strongest?",
    choices: [
      "The original person remained physically present for the whole session.",
      "The account session remained represented as active; continuous physical-person control is not independently established.",
      "Every action was authorized.",
      "A long session proves compromise.",
    ],
    answer: 1,
    explanation:
      "Session continuity describes service state, not continuous physical presence.",
  },
  {
    question:
      "17. A fictional role-change notification was generated, but no acknowledgement record exists. What is strongest?",
    choices: [
      "The user saw and accepted the notification.",
      "The service generated the notification; acknowledgement and awareness remain Unknown.",
      "The notification proves authorization.",
      "The notification should be ignored.",
    ],
    answer: 1,
    explanation:
      "Generation is different from delivery, acknowledgement, understanding, or action.",
  },
  {
    question:
      "18. Three fictional records share Event ID EVT-44 and owner-confirmed lineage. Their times represent event, processing, and receipt stages. What is strongest?",
    choices: [
      "Count three separate events.",
      "Treat them as multiple representations of one underlying event while preserving each lifecycle stage.",
      "Use only the newest record.",
      "Delete the downstream records.",
    ],
    answer: 1,
    explanation:
      "Lineage and shared identity show that multiple records may derive from one source event.",
  },
  {
    question:
      "19. Two fictional sources materially disagree about the same account-state relationship. What is strongest?",
    choices: [
      "Choose the source that best supports the original hypothesis.",
      "Preserve both records, compare source health, timing, freshness, transformation, and owner context, and keep the conflict visible until resolved.",
      "Assume both are false.",
      "Average their values.",
    ],
    answer: 1,
    explanation:
      "Contradictions are evidence and should not be hidden through selective correlation.",
  },
  {
    question:
      "20. A fictional supplier note reports a dependency change before a workflow event, but its original creation-time provenance is incomplete. What is strongest?",
    choices: [
      "The supplier caused the workflow event.",
      "The relationship is Conditional and may support sequence, while provenance and causation remain unresolved.",
      "The note is useless.",
      "The supplier is at fault because the event occurred first.",
    ],
    answer: 1,
    explanation:
      "Conditional evidence can support narrow sequence findings without proving cause or fault.",
  },
  {
    question:
      "21. Which fictional report sentence is strongest?",
    choices: [
      "Person A caused the service incident.",
      "The supplied evidence associates Account A with Session S during the workflow-event window; physical-person attribution and causation remain unresolved.",
      "The session proves harmful intent.",
      "The investigation proved everything important.",
    ],
    answer: 1,
    explanation:
      "Professional reporting matches the claim to the actual evidence level and keeps attribution plus causation separate.",
  },
  {
    question:
      "22. A fictional report version already distributed contains a materially incorrect processing timestamp. What is strongest?",
    choices: [
      "Silently overwrite the report.",
      "Preserve the prior version, issue a corrected version, record the reason and affected findings, re-review, and redistribute where the correction matters.",
      "Ignore the issue because event time did not change.",
      "Withdraw every finding in the case.",
    ],
    answer: 1,
    explanation:
      "Versioned corrections preserve traceability while limiting the change to affected material.",
  },
  {
    question:
      "23. A fictional browser summary unexpectedly shows unrelated personal activity. What is strongest?",
    choices: [
      "Review it because it is already visible.",
      "Exclude and minimize it because it does not answer the approved question, and follow the fictional privacy process if needed.",
      "Add it to the report for completeness.",
      "Use it to expand the investigation.",
    ],
    answer: 1,
    explanation:
      "Technical visibility does not create purpose, necessity, or authority.",
  },
  {
    question:
      "24. A fictional reviewer approved the change now being evaluated. What should happen?",
    choices: [
      "Hide the prior involvement.",
      "Assume misconduct.",
      "Disclose the potential conflict and let the appropriate owner decide about recusal, limited participation, or independent review.",
      "Cancel the entire investigation.",
    ],
    answer: 2,
    explanation:
      "Conflict management protects impartiality and trust without assuming wrongdoing.",
  },
  {
    question:
      "25. The fictional capstone strongly supports Account A / Session S association, moderately supports workflow overlap, conditionally supports an earlier supplier change, and leaves physical-person attribution plus causation unresolved. What is the strongest final conclusion?",
    choices: [
      "Choose the most likely person and cause so leadership receives one answer.",
      "State the supported account/session, timeline, workflow, and supplier findings; preserve source limitations and the unresolved person-attribution and causation questions; then identify which decisions can still be made.",
      "Give no conclusion because some questions remain Unknown.",
      "Remove uncertainty from the executive summary and keep it only in the technical appendix.",
    ],
    answer: 1,
    explanation:
      "A professional capstone preserves supported findings and Unknowns at the same time. Uncertainty should remain visible where it materially affects the conclusion.",
  },
];

const performanceBands = [
  {
    score: "23–25",
    label: "Advanced Ready",
    meaning:
      "You can integrate A8 forensic reasoning across scope, evidence, chronology, endpoint and account evidence, correlation, reporting, and ethics.",
    action: "Continue to A9 Malware Defense Concepts.",
  },
  {
    score: "20–22",
    label: "Strong",
    meaning:
      "Your A8 foundation is strong, with a small number of concepts worth tightening before moving forward.",
    action:
      "Review the specific lessons connected to your missed questions, then continue to A9.",
  },
  {
    score: "17–19",
    label: "Developing",
    meaning:
      "You understand many A8 ideas but may still overstate attribution, causation, absence, or confidence in mixed-source cases.",
    action:
      "Use the targeted review map and revisit the affected A8 lessons before advancing.",
  },
  {
    score: "13–16",
    label: "Needs Review",
    meaning:
      "Several core forensic reasoning boundaries are not yet consistent.",
    action:
      "Revisit scope, timeline, evidence limitations, correlation, reporting, and ethics before retaking the module test.",
  },
  {
    score: "0–12",
    label: "Rebuild the Foundation",
    meaning:
      "The safest next step is to rebuild A8 from the investigation question outward rather than memorizing isolated terms.",
    action:
      "Return to A8.1 and work through the module again with emphasis on what each fictional evidence category supports and does not prove.",
  },
];

const reviewMap = [
  {
    range: "Questions 1–2",
    lesson: "A8.1 Forensic Questions and Investigation Scope",
    review:
      "Bounded questions, authority, included and excluded systems, scope changes, and stop conditions.",
  },
  {
    range: "Questions 3–5",
    lesson: "A8.2 Evidence Integrity and Chain of Custody",
    review:
      "Evidence identity, provenance, ownership, transformation, integrity, versioning, and traceability.",
  },
  {
    range: "Questions 6–8",
    lesson: "A8.3 Timeline Analysis Concepts",
    review:
      "Time types, source-health intervals, sequence versus causation, delayed evidence, and Unknowns.",
  },
  {
    range: "Questions 9–11",
    lesson: "A8.4 Endpoint Artifact Concepts",
    review:
      "Endpoint object levels, shared devices, automation, synchronization, stale state, and attribution limits.",
  },
  {
    range: "Questions 12–14",
    lesson: "A8.5 Memory and Storage Evidence Concepts",
    review:
      "Volatility, persistence, retention, backups, synchronization, protected evidence, and evidence availability.",
  },
  {
    range: "Questions 15–17",
    lesson: "A8.6 Browser and Account Activity Concepts",
    review:
      "Authentication, sessions, notifications, browser context, stale sessions, shared devices, and person attribution.",
  },
  {
    range: "Questions 18–20",
    lesson: "A8.7 Log Correlation for Forensics",
    review:
      "Lineage, duplicates, contradictions, source health, relationship states, suppliers, and alternative explanations.",
  },
  {
    range: "Questions 21–22",
    lesson: "A8.8 Forensic Reporting Standards",
    review:
      "Evidence-linked findings, confidence, limitations, versioning, corrections, audiences, and Unknowns.",
  },
  {
    range: "Questions 23–24",
    lesson: "A8.9 Ethical Limits in Investigations",
    review:
      "Purpose, minimization, unrelated information, conflicts, recusal, new purposes, retention, and disclosure.",
  },
  {
    range: "Question 25",
    lesson: "A8.10 Digital Forensics Capstone Lab",
    review:
      "Integrated evidence-bounded conclusion writing across the complete A8 workflow.",
  },
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
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
        Module A8
      </Link>
      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-blue-400 hover:text-blue-200"
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

export default function A8ModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A8 Assessment
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              25 Questions
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Hidden Answers
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            A8 Module Test
          </h1>

          <p className="mt-4 text-xl font-bold text-cyan-200">
            Digital Forensics Concepts
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your ability to reason through fictional forensic questions
            without overstepping evidence, authority, privacy, or ethics. The
            assessment covers all ten A8 lessons and emphasizes professional
            judgment: what the supplied evidence supports, what it does not
            prove, when confidence should decrease, when Unknown is correct,
            and when the investigation should stop rather than expand.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A8 Module Test Readiness"
          items={[
            "I completed or reviewed A8.1 through A8.10.",
            "I can distinguish a forensic question from an accusation or assumption.",
            "I can explain why evidence identity, provenance, source health, time type, transformation, and ownership affect findings.",
            "I can keep account, session, endpoint, browser, process, application, and supplier relationships separate from physical-person attribution.",
            "I can distinguish sequence, overlap, correlation, causation, intent, and impact.",
            "I understand that Blind, Degraded, expired, transformed, synchronized, shared-device, or otherwise limited evidence may require Conditional or Unknown conclusions.",
            "I can apply purpose limitation, necessity, proportionality, minimization, privacy, conflicts, retention, distribution, and stop conditions.",
            "I will answer only from the fictional, defensive A8 concepts and will not treat this assessment as authorization to investigate any real system or person.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="How to Use the A8 Assessment"
        >
          <p className="leading-8">
            Answer all 25 questions before revealing the explanations whenever
            possible. Each question has one strongest answer based on the A8
            professional reasoning model. Some distractors may contain a true
            fragment but still overstate attribution, causation, confidence,
            authority, or evidence completeness.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Choose the answer that most accurately matches what the fictional evidence supports.",
              "Do not choose a stronger conclusion merely because it sounds more decisive.",
              "Treat source-health and provenance limitations as part of the evidence.",
              "Remember that account, session, endpoint, and browser associations are not automatically person attribution.",
              "Remember that sequence and correlation are not automatically causation.",
              "Choose Unknown or Conditional when the fictional evidence cannot support a stronger answer.",
              "Use scope and ethics before assuming that more evidence should be investigated.",
              "After finishing, use the performance guide and targeted review map rather than reviewing the entire module blindly.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-sm leading-7 text-blue-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Assessment Coverage"
          title="All Ten A8 Lessons Are Represented"
        >
          <div className="grid gap-5">
            {coverage.map((item) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.lesson}
                  </span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    {item.questions}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.focus}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="A8 Module Test: 25 Questions"
          questions={quizQuestions}
        />

        <SectionCard
          eyebrow="Performance Guide"
          title="Interpret Your Score"
        >
          <div className="grid gap-5">
            {performanceBands.map((band) => (
              <article
                key={band.score}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-400 px-3 py-1 text-sm font-black text-slate-950">
                    {band.score}
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {band.label}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {band.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Next action
                  </p>
                  <p className="mt-2 text-sm leading-6">{band.action}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Targeted Review Map"
          title="Review the Lesson Connected to the Questions You Missed"
        >
          <div className="grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.range}
                  </span>
                  <h3 className="font-black text-white">{item.lesson}</h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.review}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8 Digital Forensics Concepts Completion Checklist"
          items={[
            "I can define a bounded fictional forensic question before selecting evidence.",
            "I can document authority, purpose, scope, exclusions, owners, stop conditions, and scope changes.",
            "I can preserve evidence identity, provenance, integrity, transformations, custody concepts, and version history.",
            "I can distinguish event time, receipt time, processing time, review time, and decision time.",
            "I can interpret fictional endpoint artifacts without turning device or account evidence into unsupported person attribution.",
            "I can reason about temporary, persistent, synchronized, backed-up, archived, expired, and protected evidence states.",
            "I can interpret fictional authentication, sessions, browser context, notifications, synchronization, and recovery evidence.",
            "I can correlate fictional identity, endpoint, application, service, supplier, and audit evidence without double-counting or hiding contradictions.",
            "I can write forensic findings with evidence references, confidence, limitations, alternatives, non-proof statements, and Unknowns.",
            "I can apply authorization, necessity, proportionality, minimization, privacy, conflicts, recusal, retention, disclosure, and stop conditions.",
            "I can build a fictional capstone that remains useful even when person attribution or causation cannot be resolved.",
            "I can keep every Digital Forensics Concepts exercise fully fictional, defensive, non-invasive, privacy-safe, and suitable for public learning.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Digital forensics begins with a bounded question, purpose, and authority rather than with unrestricted evidence access.",
            "Evidence integrity depends on traceable identity, provenance, ownership, source health, transformation, timing, and version history.",
            "A forensic timeline should preserve different time types and should not convert sequence into causation.",
            "Endpoint, account, session, browser, process, application, storage, supplier, and audit evidence support different levels of conclusion.",
            "Shared devices, stale sessions, automation, synchronization, source degradation, incomplete provenance, backups, and expired evidence can materially reduce confidence.",
            "Correlation should preserve duplicates, contradictions, source lineage, alternatives, and relationship strength.",
            "Professional findings keep object association, physical-person attribution, causation, intent, and impact separate.",
            "Unknown and Conditional are valid professional results when the evidence cannot support stronger conclusions.",
            "Ethical forensic work includes knowing when to stop, minimize, recuse, refer, narrow, or request a new purpose decision.",
            "A8 success means reasoning accurately from fictional evidence while preserving safety, privacy, uncertainty, and professional defensibility.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-3xl font-black">
            A8 Digital Forensics Concepts Complete
          </h2>
          <p className="mt-4 max-w-4xl leading-8">
            You have completed the Digital Forensics Concepts learning sequence
            and its assessment. The next Advanced module is A9 Malware Defense
            Concepts, where the focus moves from forensic reconstruction to
            safe, defensive reasoning about malware behaviors, prevention,
            detection, containment, recovery, and evidence-aware defensive
            decisions without teaching malware creation, deployment, evasion,
            persistence, or harmful execution.
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