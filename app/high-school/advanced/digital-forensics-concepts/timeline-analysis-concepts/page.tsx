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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/digital-forensics-concepts`;
const previousLesson = `${modulePath}/evidence-integrity-and-chain-of-custody`;
const nextLesson = `${modulePath}/endpoint-artifact-concepts`;

const objectives = [
  "Distinguish fictional event time, source-record time, receipt time, processing time, review time, decision time, action time, and communication time instead of collapsing them into one timestamp.",
  "Build a fictional multi-source chronology that preserves timezone, clock uncertainty, delayed delivery, duplication, gaps, conflicting timestamps, source health, and evidence provenance.",
  "Use before, after, concurrent, overlapping, delayed, unknown, and sequence relationships without treating temporal proximity as automatic proof of causation, attribution, intent, or impact.",
  "Evaluate fictional timeline confidence by connecting each chronology statement to evidence identity, source health, transformation history, timing precision, limitations, and alternative explanations.",
  "Create a versioned fictional timeline that can be corrected, reviewed, and updated without erasing earlier interpretations or overstating what incomplete evidence can prove.",
];

const vocabulary = [
  {
    term: "Event time",
    definition:
      "The fictional time when the underlying event is believed to have occurred according to the supplying source.",
  },
  {
    term: "Record time",
    definition:
      "The fictional time a source created or stored a record about an event, which may differ from the event itself.",
  },
  {
    term: "Receipt time",
    definition:
      "The fictional time a downstream source, collector, owner, or investigation process received the record.",
  },
  {
    term: "Processing time",
    definition:
      "The fictional time a system transformed, normalized, queued, correlated, indexed, or otherwise processed a record.",
  },
  {
    term: "Review time",
    definition:
      "The fictional time an authorized reviewer first examined the supplied evidence.",
  },
  {
    term: "Decision time",
    definition:
      "The fictional time an accountable owner made a decision using the evidence then available.",
  },
  {
    term: "Clock uncertainty",
    definition:
      "A documented fictional limitation describing how precisely two time sources can be compared.",
  },
  {
    term: "Timezone context",
    definition:
      "The fictional timezone or offset needed to interpret a timestamp correctly across sources.",
  },
  {
    term: "Delivery delay",
    definition:
      "The fictional gap between an event and when its record becomes available to another source or reviewer.",
  },
  {
    term: "Duplicate event",
    definition:
      "Two or more fictional records that may represent the same underlying event rather than separate events.",
  },
  {
    term: "Timeline gap",
    definition:
      "A fictional interval where expected evidence is unavailable, missing, Blind, delayed, or otherwise insufficient.",
  },
  {
    term: "Temporal proximity",
    definition:
      "Two fictional events occurring near each other in time. Proximity may support a relationship question but does not by itself prove causation.",
  },
];

const timelineDimensions = [
  {
    dimension: "Time type",
    question:
      "Which fictional timestamp is this: event, record, receipt, processing, review, decision, action, or communication time?",
    risk:
      "Treating one field as the complete chronology can reverse sequence or hide delay.",
    control:
      "Label each time type explicitly before comparing sources.",
  },
  {
    dimension: "Timezone",
    question:
      "Which fictional timezone or offset applies, and was it converted consistently?",
    risk:
      "A correct local timestamp can appear earlier or later than another event when offsets differ.",
    control:
      "Record source timezone and normalization assumptions without erasing the original value.",
  },
  {
    dimension: "Precision",
    question:
      "Is the fictional timestamp precise to seconds, minutes, an interval, or only an approximate period?",
    risk:
      "A low-precision time may be treated as if exact order is known.",
    control:
      "Use ranges, approximate labels, and uncertainty when precision differs.",
  },
  {
    dimension: "Source health",
    question:
      "Was the fictional source Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering during the relevant period?",
    risk:
      "Missing records may be interpreted as proof that nothing happened.",
    control:
      "Preserve Unknown during Blind or incomplete intervals.",
  },
  {
    dimension: "Delivery delay",
    question:
      "Could the fictional record have arrived later than the event it describes?",
    risk:
      "Processing order can be mistaken for event order.",
    control:
      "Separate event chronology from receipt and processing chronology.",
  },
  {
    dimension: "Duplication",
    question:
      "Do multiple fictional records represent separate events or copies/representations of one event?",
    risk:
      "Duplicates can exaggerate frequency or create a false sequence.",
    control:
      "Track evidence IDs, source relationship, identifiers, and duplication confidence.",
  },
  {
    dimension: "Transformation",
    question:
      "Was the fictional timestamp reformatted, summarized, normalized, rounded, or derived?",
    risk:
      "A transformed time can appear more precise or direct than its source.",
    control:
      "Document original value, transformed value, purpose, owner, and limitation.",
  },
  {
    dimension: "Causation limit",
    question:
      "Does the fictional sequence show only order, or is there evidence that one event caused another?",
    risk:
      "Before-and-after becomes an unsupported causal story.",
    control:
      "State sequence separately from causal interpretation and test alternatives.",
  },
];

const fictionalTimeline = [
  {
    id: "TL-01",
    source: "Fictional identity approval record",
    eventTime: "13:42",
    receiptTime: "14:07",
    processingTime: "13:43",
    reviewTime: "14:10",
    sourceHealth: "Healthy",
    observation:
      "Temporary support role became effective for Account A.",
    limitation:
      "Role state does not prove the account was actively used.",
  },
  {
    id: "TL-02",
    source: "Fictional service session record",
    eventTime: "14:01",
    receiptTime: "14:11",
    processingTime: "14:06",
    reviewTime: "14:14",
    sourceHealth: "Conditional",
    observation:
      "Service S recorded a session associated with Account A.",
    limitation:
      "Processing delay is known; physical-user attribution is not established.",
  },
  {
    id: "TL-03",
    source: "Fictional application workflow record",
    eventTime: "14:04",
    receiptTime: "14:23",
    processingTime: "14:21",
    reviewTime: "14:27",
    sourceHealth: "Degraded",
    observation:
      "Workflow W recorded one unusual state transition.",
    limitation:
      "The source was Degraded from 14:02 through 14:18, so completeness is uncertain.",
  },
  {
    id: "TL-04",
    source: "Fictional user support report",
    eventTime: "Approx. 14:05–14:10",
    receiptTime: "14:13",
    processingTime: "N/A",
    reviewTime: "14:16",
    sourceHealth: "Conditional",
    observation:
      "A fictional user reported delayed service behavior.",
    limitation:
      "Reported time is approximate and does not identify cause.",
  },
  {
    id: "TL-05",
    source: "Fictional supplier timing note",
    eventTime: "13:58",
    receiptTime: "14:39",
    processingTime: "Unknown",
    reviewTime: "14:42",
    sourceHealth: "Conditional",
    observation:
      "Supplier note references a dependency-state change before the session record.",
    limitation:
      "Original creation time remains under provenance review.",
  },
  {
    id: "TL-06",
    source: "Fictional source-health record",
    eventTime: "14:02–14:18",
    receiptTime: "14:26",
    processingTime: "14:20",
    reviewTime: "14:29",
    sourceHealth: "Healthy",
    observation:
      "Application source operated in a Degraded state during part of the review window.",
    limitation:
      "The source-health record explains coverage quality but does not prove the underlying workflow event.",
  },
];

const sequenceStatements = [
  {
    statement:
      "The fictional temporary role became effective before the recorded service session.",
    support:
      "TL-01 event time 13:42 and TL-02 event time 14:01.",
    confidence: "High",
    doesNotProve:
      "That the role caused the session or that a specific person used the account.",
  },
  {
    statement:
      "The fictional supplier note describes a dependency-state change before the service session.",
    support:
      "TL-05 references 13:58 and TL-02 references 14:01.",
    confidence: "Conditional",
    doesNotProve:
      "That the supplier change caused the session or service symptoms because TL-05 provenance remains incomplete.",
  },
  {
    statement:
      "The fictional workflow event and user-reported delay occurred in overlapping time ranges.",
    support:
      "TL-03 event time 14:04 and TL-04 approximate interval 14:05–14:10.",
    confidence: "Moderate",
    doesNotProve:
      "That the workflow event caused the user's experience.",
  },
  {
    statement:
      "The application evidence available during 14:02–14:18 may be incomplete.",
    support:
      "TL-06 documents a Degraded source during that interval.",
    confidence: "High",
    doesNotProve:
      "That missing workflow records represent hidden events; it means absence conclusions are weak.",
  },
];

const conflictExamples = [
  {
    conflict:
      "A fictional service record shows event time 14:01, while a downstream dashboard lists 14:06.",
    explanation:
      "The dashboard uses processing time rather than event time.",
    weak:
      "Treat the records as contradictory.",
    strong:
      "Preserve both time types and explain that the records describe different stages.",
  },
  {
    conflict:
      "A fictional supplier note references 13:58, but the note reached the investigation at 14:39.",
    explanation:
      "Receipt time is much later than the reported event time.",
    weak:
      "Place the supplier event at 14:39 in the event sequence.",
    strong:
      "Use 13:58 only as a Conditional reported event time and preserve 14:39 as receipt time.",
  },
  {
    conflict:
      "A fictional user report says the problem began 'around 14:05,' while a technical record shows 14:04:12.",
    explanation:
      "Human-reported time is approximate while the technical source is more precise.",
    weak:
      "Call one record wrong.",
    strong:
      "Represent the user report as an interval and avoid false precision.",
  },
  {
    conflict:
      "A fictional normalized record shows UTC while the source owner's note uses local time.",
    explanation:
      "The values may represent the same moment under different offsets.",
    weak:
      "Assume the earlier-looking time happened first.",
    strong:
      "Document both original values, timezone context, and the normalized comparison.",
  },
];

const causationQuestions = [
  {
    question:
      "Did Event A occur before Event B?",
    timelineCanAnswer:
      "Sometimes, when time types, precision, source health, and timezone are sufficiently clear.",
    timelineCannotAloneAnswer:
      "Whether A caused B.",
  },
  {
    question:
      "Did two fictional events overlap?",
    timelineCanAnswer:
      "Sometimes, especially when both are represented as ranges rather than false exact points.",
    timelineCannotAloneAnswer:
      "Whether they share the same actor, cause, or impact.",
  },
  {
    question:
      "Was a fictional record received after a decision?",
    timelineCanAnswer:
      "Yes, if receipt and decision times are documented.",
    timelineCannotAloneAnswer:
      "Whether the earlier decision was unreasonable; reviewers must consider what evidence was available then.",
  },
  {
    question:
      "Did a source record no event during a window?",
    timelineCanAnswer:
      "Only whether the supplied source contains a record.",
    timelineCannotAloneAnswer:
      "That nothing happened when source health was Blind, Degraded, delayed, filtered, or incomplete.",
  },
  {
    question:
      "Did Account A activity occur near a service symptom?",
    timelineCanAnswer:
      "Potentially, if the two event-time ranges genuinely overlap.",
    timelineCannotAloneAnswer:
      "That Account A caused the symptom or that a specific person performed the activity.",
  },
];

const correctionWorkflow = [
  {
    step: "1",
    title: "Preserve the earlier timeline version",
    detail:
      "Do not silently replace the fictional chronology that earlier reviewers used.",
  },
  {
    step: "2",
    title: "Register the new evidence or correction",
    detail:
      "Record the fictional evidence ID, source, owner, time type, source health, and reason the timeline may change.",
  },
  {
    step: "3",
    title: "Identify affected sequence statements",
    detail:
      "List which fictional before/after/overlap, confidence, causation-limit, or decision-context statements depend on the changed time.",
  },
  {
    step: "4",
    title: "Recalculate only what is justified",
    detail:
      "Update the sequence while preserving Unknown where the new evidence does not resolve uncertainty.",
  },
  {
    step: "5",
    title: "Version the timeline",
    detail:
      "Document prior value, new value, reason, owner, effective review time, affected conclusions, and reviewer.",
  },
  {
    step: "6",
    title: "Redistribute material corrections",
    detail:
      "Send the corrected fictional chronology to audiences whose decisions could change and preserve acknowledgement.",
  },
  {
    step: "7",
    title: "Revisit closure or reopen criteria",
    detail:
      "Determine whether late fictional evidence changes the case enough to reopen a closed question or corrective action.",
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
        Module A8
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function TimelineAnalysisConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A8
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A8.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Chronology Reasoning
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8.3 Timeline Analysis Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional investigations reconstruct
            chronology without turning timestamps into a story they cannot
            support. Separate event, receipt, processing, review, decision, and
            action times; preserve timezone and clock uncertainty; identify
            delayed delivery, duplicates, gaps, conflicts, and source-health
            limits; and keep sequence separate from causation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A8: Digital Forensics Concepts"
          lessonTitle="Timeline Analysis Concepts"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented records, timestamps, owners, identities, services, source states, and chronology examples supplied in the lesson.",
            "I will not access, collect, extract, inspect, capture, image, query, monitor, or acquire timeline evidence from any real device, account, service, application, storage system, or network.",
            "I will label fictional event time, receipt time, processing time, review time, decision time, action time, and communication time separately.",
            "I will preserve source-health, timezone, precision, delivery-delay, duplication, provenance, and clock-uncertainty limitations.",
            "I will not claim that two nearby fictional events prove causation, intent, attribution, compromise, or impact.",
            "I will use Unknown when a fictional gap, Blind source, delayed record, conflicting timestamp, or weak provenance prevents a supported sequence conclusion.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Record That Arrived Last May Describe the Event That Happened First"
        >
          <p className="leading-8">
            A fictional service alert appears at 14:06. A supplier note does not
            reach the investigation until 14:39, but the note references a
            dependency-state change at 13:58. If the investigator sorts only by
            receipt time, the supplier event appears to happen last. If the
            investigator sorts only by the reported event time, the incomplete
            provenance of the supplier note disappears from view.
          </p>

          <p className="mt-4 leading-8">
            Professional timeline analysis keeps both facts: the supplier note
            reports an earlier event time, and the investigation received the
            note much later. The first matters for possible event sequence. The
            second matters for decision context—owners could not use evidence
            they had not yet received.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak timeline
              </p>
              <p className="mt-2 leading-7">
                “Sort every row by one timestamp and assume that order explains
                what happened.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional timeline
              </p>
              <p className="mt-2 leading-7">
                “Preserve multiple time types, source quality, precision,
                timezone, delay, and uncertainty before making sequence
                statements.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A8.3"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why It Matters"
          title="Chronology Changes Decisions, But Only When the Time Fields Mean What You Think They Mean"
        >
          <p className="leading-8">
            A timeline can influence scope, containment, attribution, recovery,
            communication, post-incident review, and leadership decisions. That
            makes chronology powerful—and dangerous when simplified. Two rows
            that look out of order may use different time types. A missing
            event may fall inside a Blind interval. A user report may provide
            only an approximate range. A normalized dashboard may show
            processing time while the source owner discusses event time.
          </p>

          <p className="mt-4 leading-8">
            The professional standard is not to force every event into an exact
            sequence. It is to show what sequence is supported, what sequence is
            only probable, what overlaps, what remains Unknown, which records
            arrived after decisions were made, and where causal claims require
            evidence beyond timing.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Sequence",
                "Understand the supported order of fictional events without inventing precision.",
              ],
              [
                "Decision context",
                "Show which evidence was actually available when a fictional owner made a decision.",
              ],
              [
                "Source quality",
                "Keep Blind, Degraded, delayed, duplicate, or transformed records visible in the chronology.",
              ],
              [
                "Causation limits",
                "Prevent before-and-after relationships from becoming unsupported causal claims.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="Eight Dimensions of a Defensible Fictional Timeline"
        >
          <div className="grid gap-5">
            {timelineDimensions.map((item, index) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.dimension}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.question}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Timeline risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional control
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.control}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Vocabulary"
          title="Professional Terms for Timeline Reasoning"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Timeline Quality Dashboard"
          subtitle="Northbridge A8 chronology exercise — invented values only"
          metrics={[
            {
              label: "Timeline evidence items",
              value: "6",
              note: "All tied to one bounded fictional forensic question",
            },
            {
              label: "Time types represented",
              value: "5",
              note: "Event, receipt, processing, review, and interval time",
            },
            {
              label: "Source limitations",
              value: "3",
              note: "Conditional, Degraded, and provenance-limited records",
            },
            {
              label: "Sequence statements",
              value: "4",
              note: "Each includes confidence and a non-proof statement",
            },
          ]}
        />

        <SectionCard
          eyebrow="Multi-Time Timeline"
          title="One Fictional Event Can Have Several Important Times"
        >
          <p className="leading-8">
            The table below is deliberately not a single-column timeline.
            Different times answer different questions. Event time helps
            reconstruct what may have happened. Receipt and review times help
            reconstruct what investigators knew and when. Processing time helps
            explain why a dashboard may display a later value than the source
            event.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left">
              <thead className="bg-slate-950">
                <tr>
                  {[
                    "ID",
                    "Source",
                    "Event Time",
                    "Receipt",
                    "Processing",
                    "Review",
                    "Health",
                    "Observation",
                    "Limitation",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-slate-700 px-4 py-4 text-sm font-black text-cyan-200"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fictionalTimeline.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-800 bg-slate-900/50 align-top"
                  >
                    <td className="px-4 py-4 font-mono text-sm font-black text-white">
                      {item.id}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-slate-300">
                      {item.source}
                    </td>
                    <td className="px-4 py-4 font-mono text-sm text-blue-100">
                      {item.eventTime}
                    </td>
                    <td className="px-4 py-4 font-mono text-sm text-purple-100">
                      {item.receiptTime}
                    </td>
                    <td className="px-4 py-4 font-mono text-sm text-slate-300">
                      {item.processingTime}
                    </td>
                    <td className="px-4 py-4 font-mono text-sm text-emerald-100">
                      {item.reviewTime}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-yellow-100">
                      {item.sourceHealth}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-slate-300">
                      {item.observation}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-yellow-100">
                      {item.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Timeline Warning"
          severity="Medium"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="A downstream dashboard timestamp is five minutes later than the source event because it represents processing time."
          recommendation={["Source event time: 14:01",
            "Downstream processing time: 14:06",
            "Current risk: sequence may be misread if the two fields are treated as the same time type",
            "Source health: Conditional but usable for bounded chronology",
            "Required response: preserve both times and label their meanings before comparing order",].join(" • ")}
        />

        <SectionCard
          eyebrow="Sequence Statements"
          title="A Strong Timeline Says What the Order Supports—and What It Does Not"
        >
          <div className="grid gap-5">
            {sequenceStatements.map((item) => (
              <article
                key={item.statement}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.statement}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Confidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.confidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.doesNotProve}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Timeline Records"
          logs={[
            "13:42 | EVENT | evidence=TL-01 | type=role-effective | account=Account-A | source_health=Healthy",
            "13:58 | REPORTED_EVENT | evidence=TL-05 | type=supplier-state-change | provenance=Conditional",
            "14:01 | EVENT | evidence=TL-02 | type=service-session | account=Account-A | processing=14:06",
            "14:02-14:18 | SOURCE_HEALTH | evidence=TL-06 | application-source=Degraded | absence_claim=unsupported",
            "14:04 | EVENT | evidence=TL-03 | type=workflow-state | source_health=Degraded",
            "14:05-14:10 | APPROX_EVENT | evidence=TL-04 | type=user-reported-delay | precision=range",
            "14:39 | RECEIPT | evidence=TL-05 | supplier-note-received | reported_event=13:58 | provenance_review=open",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Timeline"
          question="Which fictional chronology statement is strongest?"
          evidence={[
            "TL-01 shows role-effective event time 13:42.",
            "TL-02 shows service-session event time 14:01 and processing time 14:06.",
            "TL-03 shows a workflow event at 14:04, but the application source was Degraded from 14:02 through 14:18.",
            "TL-04 reports a user delay approximately between 14:05 and 14:10.",
          ]}
          options={[
            "The role change caused the service session, which caused the workflow event, which caused the user delay.",
            "The role-effective event preceded the recorded session; the workflow event followed the recorded session; the user-reported delay overlaps the later period, but the supplied timeline does not by itself prove causation or person-level attribution.",
            "The workflow event did not happen because its source was Degraded.",
            "The user report proves the workflow event caused the delay.",
          ]}
          bestAnswer={1}
          explanation="The strongest statement preserves supported order and overlap while keeping causation, attribution, and Degraded-source limitations separate."
        />

        <SectionCard
          eyebrow="Clock and Timezone"
          title="A Timestamp Is Incomplete Without Context"
        >
          <p className="leading-8">
            A fictional timestamp can be technically correct and still be
            misleading if its timezone, precision, clock condition, or
            transformation is unknown. Timeline analysis should preserve the
            original time context and document any normalized comparison rather
            than replacing the source value without explanation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Original value",
                "Keep the fictional timestamp exactly as represented by the supplying evidence.",
              ],
              [
                "Timezone / offset",
                "Record the fictional local timezone or UTC offset where known.",
              ],
              [
                "Precision",
                "State whether the time is exact to seconds, minutes, rounded, or approximate.",
              ],
              [
                "Clock uncertainty",
                "Record known fictional drift, synchronization limitations, or owner uncertainty conceptually.",
              ],
              [
                "Normalized comparison",
                "If times are compared in one common representation, preserve how the conversion was derived.",
              ],
              [
                "Non-proof statement",
                "A normalized sequence still does not automatically prove causation, attribution, intent, or impact.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Timeline Conflicts"
          title="Different Timestamps Are Not Automatically Contradictions"
        >
          <div className="mt-2 grid gap-5">
            {conflictExamples.map((item) => (
              <article
                key={item.conflict}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Apparent conflict
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.conflict}</p>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-black text-cyan-100">
                    Possible explanation:
                  </span>{" "}
                  {item.explanation}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional response
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Late Supplier Note"
          scenario="A fictional supplier note reaches the investigation at 14:39 but references a dependency-state change at 13:58. The note's forwarding path is documented, while its original creation time remains under provenance review. A service session is recorded at 14:01."
          choices={[
            {
              label: "Choice A",
              response:
                "Place the supplier event at 13:58 as a confirmed fact and conclude it caused the 14:01 session.",
              outcome:
                "This overstates both provenance and causation.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Record 13:58 as the note's Conditional reported event time, preserve 14:39 as receipt time, state that the supplier event may precede the service session, and keep causation unresolved.",
              outcome:
                "This preserves the possible sequence while keeping evidence quality and causal limits visible.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Place the supplier event at 14:39 because that is when the investigation received it.",
              outcome:
                "Receipt time matters for decision context but should not replace the event time the note reports.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Duplicates and Repeated Records"
          title="More Rows Do Not Always Mean More Events"
        >
          <p className="leading-8">
            Fictional evidence pipelines may create multiple representations of
            one event: a source record, a normalized copy, an alert, a case
            entry, a dashboard row, and a report summary. Counting all of them
            as separate events can exaggerate frequency and create a false
            chronology.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Shared identifier",
                "Do the fictional records refer to the same event, account, session, workflow, or source identifier?",
              ],
              [
                "Source lineage",
                "Does one fictional record derive from another through correlation, normalization, or case creation?",
              ],
              [
                "Time relationship",
                "Are later timestamps processing or receipt times for the same event rather than new event times?",
              ],
              [
                "Field similarity",
                "Do the records carry the same core observation with different formatting?",
              ],
              [
                "Owner explanation",
                "Can the fictional source owner explain whether the records represent duplication, aggregation, or separate events?",
              ],
              [
                "Confidence",
                "If duplication cannot be resolved, can the timeline preserve a range or Unknown count rather than inventing certainty?",
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

        <AnalyzeEvidenceCard
          title="Analyze Possible Duplicates"
          question="Three fictional rows share the same event identifier but have timestamps 14:01, 14:06, and 14:07. The source owner explains that these are event, processing, and case-receipt times. What is strongest?"
          evidence={[
            "All three rows share the same fictional event identifier.",
            "14:01 is the source event time.",
            "14:06 is downstream processing time.",
            "14:07 is case receipt time.",
          ]}
          options={[
            "Count three separate events.",
            "Treat the rows as three time representations of one underlying fictional event unless other evidence shows separate activity.",
            "Use only the latest timestamp.",
            "Use only the earliest timestamp and delete the others.",
          ]}
          bestAnswer={1}
          explanation="The shared identifier and owner explanation support one event represented at multiple lifecycle stages. Preserving all time types is stronger than multiplying the event count."
        />

        <SectionCard
          eyebrow="Causation"
          title="A Timeline Can Show Order Without Proving Why"
        >
          <p className="leading-8">
            Temporal reasoning is strongest when it clearly distinguishes
            sequence from explanation. An account event before a service symptom
            may justify a correlation question. It does not automatically prove
            that the account event caused the symptom. A supplier change before
            an alert may be relevant without proving supplier fault.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left">
              <thead className="bg-slate-950">
                <tr>
                  {[
                    "Question",
                    "Timeline May Answer",
                    "Timeline Alone Cannot Prove",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-slate-700 px-5 py-4 text-sm font-black text-cyan-200"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {causationQuestions.map((item) => (
                  <tr
                    key={item.question}
                    className="border-b border-slate-800 bg-slate-900/50 align-top"
                  >
                    <td className="px-5 py-4 font-black text-white">
                      {item.question}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-emerald-100">
                      {item.timelineCanAnswer}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-yellow-100">
                      {item.timelineCannotAloneAnswer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Decision-Time Context"
          title="Review Decisions Using the Evidence Available at the Time"
        >
          <p className="leading-8">
            A late fictional record can change the final timeline without
            proving that an earlier owner made a poor decision. Professional
            review asks what evidence was available at the decision time, what
            its source health was, what uncertainty was known, what deadlines
            existed, and whether the decision was reasonable under that
            information.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Evidence then",
                "Which fictional records had actually been received and reviewed before the decision?",
              ],
              [
                "Source health then",
                "Were important fictional sources Healthy, Degraded, Blind, or still recovering?",
              ],
              [
                "Known uncertainty",
                "Which gaps or contradictions were already visible to the owner?",
              ],
              [
                "Decision deadline",
                "Was the fictional owner required to act before additional evidence could reasonably arrive?",
              ],
              [
                "Alternatives",
                "Which response choices were considered under the evidence available then?",
              ],
              [
                "Late evidence",
                "Does later fictional evidence change the final conclusion, the earlier decision review, both, or neither?",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Decision Made Before Late Evidence Arrived"
          scenario="At 14:20, a fictional incident owner makes a narrow containment decision using the evidence then available. At 14:39, the investigation receives a supplier note that changes the likely event sequence. The note did not exist in the case at decision time."
          choices={[
            {
              label: "Choice A",
              response:
                "Call the 14:20 decision wrong because the later evidence changes the final timeline.",
              outcome:
                "This judges the earlier decision using information the owner did not yet have.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Update the final fictional timeline with the late evidence, then separately review whether the 14:20 decision was reasonable using the evidence, source health, uncertainty, authority, and deadline that existed at 14:20.",
              outcome:
                "This preserves both final chronology and fair decision-time review.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Ignore the late evidence so the original decision remains unchanged.",
              outcome:
                "Late evidence may legitimately change the final conclusion even when the earlier decision remains reasonable.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Timeline Corrections"
          title="Late or Corrected Evidence Should Update the Timeline Without Erasing History"
        >
          <p className="leading-8">
            A timeline is a versioned analytical product. When a fictional
            source owner corrects a timezone, a delayed record arrives, a
            duplicate is identified, or provenance improves, the timeline may
            need revision. The revision should show what changed and which
            conclusions were affected.
          </p>

          <div className="mt-6 grid gap-5">
            {correctionWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Where Timeline Analysis Goes Wrong"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                mistake: "Sorting by one timestamp",
                why:
                  "Event, processing, receipt, and review times answer different questions.",
                correction:
                  "Label time type first and build separate event and decision-context views where useful.",
              },
              {
                mistake: "Inventing exact order",
                why:
                  "Approximate or low-precision fictional times may overlap.",
                correction:
                  "Use ranges, overlap, before/after with confidence, or Unknown.",
              },
              {
                mistake: "Ignoring timezone",
                why:
                  "Different offsets can make simultaneous events appear separated.",
                correction:
                  "Preserve original timezone context and document normalized comparison.",
              },
              {
                mistake: "Counting duplicates as separate events",
                why:
                  "One fictional event can appear in source, normalized, alert, case, dashboard, and report records.",
                correction:
                  "Use identifiers, lineage, owner explanation, and duplication confidence.",
              },
              {
                mistake: "Treating absence as evidence",
                why:
                  "Blind, Degraded, delayed, filtered, or retention-limited sources may omit real events.",
                correction:
                  "Use source-limited or Unknown language.",
              },
              {
                mistake: "Turning proximity into causation",
                why:
                  "Events near each other may share timing without sharing cause.",
                correction:
                  "Separate supported order from causal interpretation and test alternatives.",
              },
              {
                mistake: "Judging old decisions with new evidence",
                why:
                  "Late records were not available to the owner at the earlier decision time.",
                correction:
                  "Review decisions using the evidence and uncertainty available then.",
              },
              {
                mistake: "Silently updating chronology",
                why:
                  "Later reviewers cannot see what earlier versions said or which decisions depended on them.",
                correction:
                  "Version corrections and identify affected findings, audiences, and reopening needs.",
              },
            ].map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Lab"
          title="Build a Multi-Source Forensic Timeline"
        >
          <p className="leading-8">
            Use only TL-01 through TL-06 and the invented records supplied on
            this page. Do not access, search, query, collect, inspect, export,
            capture, image, extract, recover, monitor, or obtain any timeline
            information from a real device, account, service, application,
            storage system, network, website, school system, or person.
          </p>

          <div className="mt-6 grid gap-5">
            {[
              {
                phase: "Phase 1 — Classify time fields",
                tasks: [
                  "Create separate columns for fictional event, receipt, processing, review, decision, action, and communication time.",
                  "Mark N/A or Unknown instead of inventing missing timestamps.",
                  "Label approximate times as ranges rather than exact points.",
                ],
              },
              {
                phase: "Phase 2 — Record time quality",
                tasks: [
                  "Add source health, timezone context, precision, provenance, transformation, and clock-uncertainty fields.",
                  "Identify which records are Healthy, Conditional, and Degraded.",
                  "Explain why TL-05 cannot support a high-confidence exact sequence yet.",
                ],
              },
              {
                phase: "Phase 3 — Build event chronology",
                tasks: [
                  "Order the supported fictional event times while preserving ranges and uncertainty.",
                  "Mark overlapping intervals.",
                  "Do not use receipt time as a replacement for event time.",
                ],
              },
              {
                phase: "Phase 4 — Build decision chronology",
                tasks: [
                  "Create a second view showing when fictional evidence was received and reviewed.",
                  "Explain which records were unavailable before 14:20.",
                  "Write one fair decision-time review statement.",
                ],
              },
              {
                phase: "Phase 5 — Test duplicates and conflicts",
                tasks: [
                  "Create one duplicate hypothesis using source, normalized, and case representations.",
                  "Create one timezone or processing-time apparent conflict.",
                  "Resolve what can be resolved and label remaining uncertainty.",
                ],
              },
              {
                phase: "Phase 6 — Write findings",
                tasks: [
                  "Write three sequence findings with confidence.",
                  "Add one non-proof statement to each.",
                  "Write one causation hypothesis and explain what additional fictional evidence would be needed before it could become a supported conclusion.",
                ],
              },
            ].map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {item.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This activity uses only invented, pre-supplied timeline records.
              It does not authorize real forensic collection, querying,
              monitoring, packet capture, log acquisition, device inspection,
              account access, imaging, memory capture, extraction, recovery,
              surveillance, or investigation of real people or systems.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Rebuild a Timeline When Three Time Types Produce Three Different Stories"
        >
          <p className="leading-8">
            A fictional executive summary sorted by receipt time says the
            supplier event happened last. A technical dashboard sorted by
            processing time says the service event happened later than the
            application event. The source-owner view sorted by event time says
            the supplier change may have occurred first. Your challenge is to
            reconcile the three views without pretending one timeline answers
            every question.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Build one event-time chronology and one evidence-availability chronology.",
              "Explain why the same fictional records can be ordered differently without being contradictory.",
              "Identify which sequence statement is High confidence and which remains Conditional.",
              "Preserve the supplier-note provenance limitation.",
              "Show which evidence was unavailable at the fictional 14:20 decision time.",
              "Write one executive-safe explanation of why late evidence can change the final timeline without automatically making the earlier decision unreasonable.",
              "Include one duplicate-event caution.",
              "Include one explicit statement separating sequence from causation.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.3 Timeline Analysis Checklist"
          items={[
            "I can distinguish fictional event time from receipt, processing, review, decision, action, and communication time.",
            "I can preserve original timezone context while documenting normalized comparisons.",
            "I can represent approximate fictional times as ranges instead of inventing false precision.",
            "I can explain how clock uncertainty and source health affect sequence confidence.",
            "I can distinguish event chronology from evidence-availability and decision chronology.",
            "I can identify when a late record describes an earlier event.",
            "I can recognize possible duplicate representations of one fictional event.",
            "I can explain why a Blind or Degraded source weakens absence conclusions.",
            "I can write before, after, overlap, and Unknown statements without turning them into unsupported causation.",
            "I can review an earlier fictional decision using only the evidence and uncertainty available at that decision time.",
            "I can version a corrected timeline without erasing earlier interpretations.",
            "I can keep every timeline example fully fictional, pre-supplied, defensive, non-invasive, and privacy-safe.",
          ]}
        />

        <MiniQuiz
          title="A8.3 Mini Quiz: Timeline Analysis Concepts"
          questions={[
            {
              question:
                "A fictional event occurred at 14:01, was processed at 14:06, and reached the case at 14:07. Which is strongest?",
              choices: [
                "The event happened three times.",
                "The three timestamps may represent different lifecycle stages of one event.",
                "Only the latest timestamp matters.",
                "Only the earliest timestamp should be retained.",
              ],
              answer: 1,
              explanation:
                "Event, processing, and receipt time can describe different stages of one underlying event.",
            },
            {
              question:
                "A fictional source was Blind from 14:00 to 14:15 and shows no event during that period. What is strongest?",
              choices: [
                "No event occurred.",
                "The source proves the system was unaffected.",
                "The absence conclusion should remain Unknown or source-limited for the Blind interval.",
                "Every other source should automatically be added to scope.",
              ],
              answer: 2,
              explanation:
                "A Blind source cannot support a reliable absence conclusion for the affected period.",
            },
            {
              question:
                "A supplier note received at 14:39 reports an event at 13:58. What should the timeline preserve?",
              choices: [
                "Only 14:39.",
                "Only 13:58.",
                "13:58 as the reported event time with its provenance confidence, and 14:39 as receipt time.",
                "Neither timestamp.",
              ],
              answer: 2,
              explanation:
                "Both time types matter: one for possible event order and one for evidence availability.",
            },
            {
              question:
                "A user report says a problem began 'around 14:05,' while a technical record shows 14:04:12. What is strongest?",
              choices: [
                "The user report is wrong.",
                "Convert the user's estimate to exactly 14:05:00.",
                "Represent the user report as an approximate interval and avoid false precision.",
                "Ignore the technical record.",
              ],
              answer: 2,
              explanation:
                "Human-reported time should retain its lower precision instead of being converted into an exact point.",
            },
            {
              question:
                "Two fictional events occur within one minute of each other. What does that prove?",
              choices: [
                "The first caused the second.",
                "The same person performed both.",
                "Only that the events are temporally close; causation and attribution require additional evidence.",
                "The second event is malicious.",
              ],
              answer: 2,
              explanation:
                "Temporal proximity supports a relationship question, not automatic causation, attribution, or intent.",
            },
            {
              question:
                "Late fictional evidence changes the final event sequence. How should an earlier decision be reviewed?",
              choices: [
                "Judge it using all evidence known today.",
                "Ignore the late evidence entirely.",
                "Update the final timeline, then separately assess the earlier decision using the evidence, source health, uncertainty, authority, and deadline available at that time.",
                "Automatically mark the earlier decision as wrong.",
              ],
              answer: 2,
              explanation:
                "Final chronology and decision-time reasonableness are related but distinct review questions.",
            },
            {
              question:
                "Why should a fictional timeline correction be versioned?",
              choices: [
                "To make the report longer.",
                "To preserve what changed, why, which evidence triggered it, which findings were affected, and what earlier reviewers saw.",
                "To remove the old timeline from history.",
                "To avoid reviewing affected conclusions.",
              ],
              answer: 1,
              explanation:
                "Versioning preserves reconstructability and makes corrections transparent.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Multi-Time Forensic Timeline Package"
          prompt="Create a fully fictional A8.3 Multi-Time Forensic Timeline Package for Northbridge. Include at least eight invented evidence items; evidence IDs; source; event time; receipt time; processing time; review time; decision time where relevant; timezone context; precision; source health; provenance state; transformation state; duplicate status; observation; limitation; confidence; sequence relationship; one overlapping interval; one Blind or Degraded period; one delayed record; one apparent timezone conflict; one possible duplicate; one corrected timestamp; one late-evidence update; one decision-time review; at least six sequence findings; at least six non-proof statements; three alternative causal explanations; timeline version history; affected findings; redistribution decision; closure state; and reopen triggers. Every organization, account, device, service, source, record, timestamp, event, owner, and outcome must be invented."
          tips={[
            "Keep event chronology and evidence-availability chronology separate when useful.",
            "Preserve approximate fictional times as ranges instead of turning them into exact timestamps.",
            "Use source health to decide whether missing records support absence or Unknown.",
            "Treat repeated source, normalized, alert, case, and dashboard records as possible representations of one event until lineage is understood.",
            "Write sequence findings separately from causal hypotheses.",
            "Keep the entire portfolio package fictional, pre-supplied, non-invasive, defensive, and safe to share.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A8.4 Endpoint Artifact Concepts?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for time types, timezone, precision,
            clock uncertainty, source health, delivery delay, duplicates,
            chronology conflicts, decision-time context, causation limits,
            corrections, and versioning.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why event time and receipt time answer different questions.",
              "I can show how processing delay can make a later timestamp represent an earlier underlying event.",
              "I can preserve original timezone context and document normalized comparisons.",
              "I can represent approximate fictional times without false precision.",
              "I can identify when multiple records may be duplicates or representations of one event.",
              "I can use Blind and Degraded source states to limit absence conclusions.",
              "I can write sequence statements with confidence and non-proof language.",
              "I can keep temporal proximity separate from causation and attribution.",
              "I can review a fictional decision using the evidence that existed at the decision time.",
              "I can version a corrected or late-evidence timeline without erasing earlier history.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A professional fictional timeline separates event, record, receipt, processing, review, decision, action, and communication times instead of collapsing them.",
            "Timezone, precision, clock uncertainty, source health, delivery delay, transformation, and provenance all affect chronology confidence.",
            "A record received later may describe an event that occurred earlier; event order and evidence-availability order are different views.",
            "Approximate fictional times should remain ranges or low-precision values rather than being converted into exact points.",
            "Blind or Degraded sources weaken absence conclusions and may require Unknown.",
            "Multiple rows can represent one underlying fictional event across source, normalized, alert, case, dashboard, and report stages.",
            "Timeline conflicts often disappear when reviewers distinguish different time types or timezone contexts.",
            "Temporal proximity can support a correlation question but does not by itself prove causation, attribution, intent, or impact.",
            "Earlier fictional decisions should be reviewed using the evidence and uncertainty available at the time, even when late evidence changes the final chronology.",
            "Timeline corrections should be versioned, traceable, linked to affected findings, and redistributed when material.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This Lesson Teaches Timeline Reasoning, Not Real Evidence Collection
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A8.3 authorizes access, investigation, monitoring,
            querying, collection, preservation, imaging, memory capture,
            extraction, credential recovery, packet capture, log acquisition,
            account access, storage access, private-message review,
            configuration changes, surveillance, recovery actions, or
            examination involving any real device, account, application,
            service, storage system, network, organization, incident, classmate,
            teacher, family member, or other person. Use only fully invented,
            pre-supplied timeline records.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to Endpoint Artifact Concepts
          </h2>
          <p className="mt-3 max-w-3xl leading-7">
            A8.3 established how fictional evidence becomes a defensible
            chronology. A8.4 moves to high-level endpoint artifact concepts:
            what different evidence categories may represent, what they can
            support, what they cannot prove, how source health and privacy
            affect interpretation, and how to reason about supplied artifact
            descriptions without collecting from real devices.
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