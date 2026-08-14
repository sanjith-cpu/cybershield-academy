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
const previousLesson = `${modulePath}/browser-and-account-activity-concepts`;
const nextLesson = `${modulePath}/forensic-reporting-standards`;

const objectives = [
  "Correlate supplied fictional identity, endpoint, application, service, supplier, and audit records around one bounded forensic question instead of joining every available record.",
  "Preserve fictional evidence identity, provenance, source health, time type, transformation, duplication, missing fields, and ownership while comparing records.",
  "Distinguish strong, moderate, weak, conflicting, duplicate, unrelated, and Unknown relationships without treating shared identifiers or nearby timestamps as automatic proof.",
  "Build a fictional correlation matrix that records the relationship question, supporting evidence, contradiction, alternatives, confidence, limitations, and next owner action.",
  "Write bounded fictional correlation findings that separate observation, relationship, attribution, causation, intent, and impact while protecting privacy and scope.",
];

const vocabulary = [
  ["Correlation", "The fictional reasoning process of comparing two or more supplied evidence items to decide whether they support a meaningful relationship for a bounded question."],
  ["Correlation key", "A fictional shared reference such as an account, session, service, event, device, workflow, or case identifier used to compare records."],
  ["Relationship strength", "A fictional classification describing how strongly supplied evidence supports a connection between records."],
  ["Supporting relationship", "Two or more fictional records that reinforce the same bounded observation while preserving each source's limitations."],
  ["Contradiction", "A fictional relationship where traceable records materially disagree and require explanation rather than silent selection."],
  ["Duplicate", "Multiple fictional records that may represent one underlying event or state rather than independent events."],
  ["Transformation", "A fictional change in representation such as normalization, filtering, aggregation, export, or summary that may change fields or timing context."],
  ["Missing field", "A fictional record attribute that is absent or unavailable and may limit comparison or confidence."],
  ["Source health", "A fictional state such as Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering that affects evidentiary weight."],
  ["Alternative explanation", "A plausible fictional explanation that fits the supplied evidence without requiring the first hypothesis to be true."],
  ["Non-proof statement", "A sentence explicitly stating what correlated fictional evidence still does not establish."],
  ["Correlation scope", "The approved fictional boundary defining which evidence categories, identities, systems, periods, and questions may be compared."],
];

const principles = [
  {
    title: "Question before join",
    meaning: "Only correlate fictional records when the relationship helps answer the approved forensic question.",
    risk: "Joining everything can create accidental stories, privacy overreach, and irrelevant complexity.",
    control: "Write the relationship question first and identify the minimum necessary sources.",
  },
  {
    title: "Identity before similarity",
    meaning: "Records should remain tied to fictional evidence IDs, sources, owners, versions, and transformations.",
    risk: "Similar-looking values may be mistaken for the same event.",
    control: "Preserve provenance, source lineage, and evidence identity before comparing fields.",
  },
  {
    title: "Time type before proximity",
    meaning: "Nearby timestamps must represent comparable time types before they support a temporal relationship.",
    risk: "Event, processing, receipt, and review times can look close while describing different stages.",
    control: "Label time meaning before comparing chronology.",
  },
  {
    title: "Source health before absence",
    meaning: "A missing record matters only if the source could reliably have recorded it.",
    risk: "Blind or Degraded sources can turn missing data into false absence conclusions.",
    control: "Preserve source health in every correlation decision.",
  },
  {
    title: "Relationship before attribution",
    meaning: "A correlation may connect an account, device, session, service, or workflow without identifying a physical person.",
    risk: "Object relationships can become unsupported person-level blame.",
    control: "State the exact objects connected and preserve attribution limits.",
  },
  {
    title: "Contradiction before certainty",
    meaning: "Conflicting fictional evidence should remain visible instead of being discarded because one source fits the hypothesis better.",
    risk: "Selective correlation creates confirmation bias.",
    control: "Record both sources, owner explanations, source health, and unresolved conflict.",
  },
  {
    title: "Alternative before conclusion",
    meaning: "Strong fictional correlation survives comparison against plausible benign, timing, automation, synchronization, and source-health explanations.",
    risk: "One plausible story can become the only story.",
    control: "Document alternatives and what evidence strengthens or weakens each.",
  },
  {
    title: "Confidence before communication",
    meaning: "Every fictional correlation finding should declare how strong the relationship is and why.",
    risk: "A polished narrative may sound more certain than the evidence.",
    control: "Include confidence, limitations, contradiction, alternatives, and non-proof language.",
  },
];

const sourceFamilies = [
  {
    source: "Identity",
    evidence: "Fictional role, authentication, account-state, approval, and session records.",
    owner: "Identity owner",
    strength: "Useful for account and access context when source health and timing are clear.",
    limit: "Does not automatically identify the physical person or establish intent.",
  },
  {
    source: "Endpoint",
    evidence: "Fictional device identity, application state, session association, update, configuration, and local event summaries.",
    owner: "Endpoint owner",
    strength: "Useful for device and local-state relationships.",
    limit: "Shared-device, stale-state, automation, and synchronization context may weaken attribution.",
  },
  {
    source: "Application",
    evidence: "Fictional workflow, request, result, application-state, and change records.",
    owner: "Application owner",
    strength: "Useful for application behavior and workflow-state questions.",
    limit: "May be transformed, delayed, or incomplete and does not independently prove intent.",
  },
  {
    source: "Service",
    evidence: "Fictional session, service-state, request, response, and availability records.",
    owner: "Service owner",
    strength: "Useful for service context and timing.",
    limit: "May describe downstream effects without proving origin or cause.",
  },
  {
    source: "Supplier",
    evidence: "Fictional dependency-state, maintenance, timing, status, and notification records.",
    owner: "Supplier owner",
    strength: "Useful for external dependency and service context.",
    limit: "Forwarded or summarized supplier records may have provenance and timing limits.",
  },
  {
    source: "Audit / Governance",
    evidence: "Fictional approval, ownership, change, review, and decision records.",
    owner: "Governance owner",
    strength: "Useful for authorization, policy, ownership, and decision context.",
    limit: "Approval records describe intended governance state, not every actual action.",
  },
];

const correlationMatrix = [
  {
    id: "CR-01",
    question: "Was Account A associated with the same fictional service session represented on Endpoint D-17?",
    evidenceA: "Identity record BA-01",
    evidenceB: "Endpoint session record EP-03",
    key: "Account A + Session S",
    relationship: "Supporting",
    sourceHealth: "Healthy / Conditional",
    confidence: "Moderate-High",
    supports: "The account and endpoint records refer to the same fictional session object.",
    limits: "The relationship does not identify the physical person controlling shared D-17.",
  },
  {
    id: "CR-02",
    question: "Did Application Q and Workflow W activity overlap the fictional Account A session?",
    evidenceA: "Application record TL-03",
    evidenceB: "Session record BA-02",
    key: "Service S + event window",
    relationship: "Supporting with source limit",
    sourceHealth: "Degraded / Conditional",
    confidence: "Moderate",
    supports: "The supplied event times overlap the active session interval.",
    limits: "Application source degradation prevents complete coverage, and overlap does not prove causation.",
  },
  {
    id: "CR-03",
    question: "Does the fictional supplier note describe a dependency change before the workflow event?",
    evidenceA: "Supplier note TL-05",
    evidenceB: "Workflow record TL-03",
    key: "Dependency + event time",
    relationship: "Conditional",
    sourceHealth: "Conditional / Degraded",
    confidence: "Low-Moderate",
    supports: "The supplier note reports an earlier dependency-state change.",
    limits: "Supplier creation-time provenance is incomplete and causation remains unresolved.",
  },
  {
    id: "CR-04",
    question: "Are two fictional service rows separate events or duplicate representations?",
    evidenceA: "Service source row",
    evidenceB: "Normalized case row",
    key: "Event ID EVT-44",
    relationship: "Probable duplicate",
    sourceHealth: "Healthy / Healthy",
    confidence: "High",
    supports: "The records share the same fictional event ID and owner-confirmed lineage.",
    limits: "Different processing times should not be counted as separate event times.",
  },
  {
    id: "CR-05",
    question: "Does the fictional notification prove a person knew about the role change?",
    evidenceA: "Notification BA-04",
    evidenceB: "Later session BA-02",
    key: "Account A + timeline",
    relationship: "Temporal only",
    sourceHealth: "Healthy / Conditional",
    confidence: "High sequence / Low awareness",
    supports: "The notification was generated before the later session.",
    limits: "No acknowledgement evidence exists, so awareness remains Unknown.",
  },
  {
    id: "CR-06",
    question: "Can the missing fictional application event be treated as evidence of absence?",
    evidenceA: "Application source gap TL-06",
    evidenceB: "Service session BA-02",
    key: "14:02-14:18 interval",
    relationship: "Evidence-limited",
    sourceHealth: "Degraded / Conditional",
    confidence: "High about limitation",
    supports: "The application source cannot provide complete coverage for the interval.",
    limits: "Missing application records do not prove no related event occurred.",
  },
];

const relationshipStates = [
  ["Strong supporting", "Multiple traceable fictional records independently support the same bounded relationship with healthy or well-understood sources.", "State the supported relationship and still include non-proof limits."],
  ["Moderate supporting", "The relationship is supported, but timing, transformation, attribution, or source-health limits remain.", "Use moderate confidence and name the exact limitation."],
  ["Weak / Conditional", "A plausible relationship exists, but provenance, source health, missing fields, timing, or context significantly limits confidence.", "Keep the finding Conditional and avoid using it as sole support."],
  ["Conflicting", "Traceable fictional sources materially disagree about the same relationship.", "Preserve both records and the unresolved conflict."],
  ["Probable duplicate", "Multiple fictional records likely represent one underlying event or state.", "Avoid double-counting while preserving each representation and lineage."],
  ["Unrelated", "The fictional records do not materially help answer the same bounded question.", "Do not force a connection because identifiers or times happen to be similar."],
  ["Unknown", "The supplied fictional evidence is insufficient to decide whether a meaningful relationship exists.", "Preserve Unknown and identify the owner clarification needed."],
];

const contradictionCases = [
  {
    title: "Different timestamps",
    a: "A fictional service source shows event time 14:01.",
    b: "A normalized case row shows 14:06.",
    explanation: "The second value is processing time for the same event.",
    handling: "Preserve both time types and classify the rows as duplicate representations rather than a contradiction.",
  },
  {
    title: "Different account state",
    a: "A fictional identity record shows temporary role active at 14:04.",
    b: "A downstream summary shows normal role state at 14:04.",
    explanation: "The summary updates every fifteen minutes and may be stale.",
    handling: "Treat the downstream summary as freshness-limited and request owner clarification before calling the records conflicting.",
  },
  {
    title: "Missing application event",
    a: "A fictional service record shows a session during the interval.",
    b: "The application source shows no matching event.",
    explanation: "The application source was Degraded for much of the same interval.",
    handling: "Do not treat missing application evidence as contradiction or absence proof.",
  },
  {
    title: "Supplier timing disagreement",
    a: "A fictional supplier note reports 13:58.",
    b: "A service owner expected the dependency change after 14:00.",
    explanation: "Supplier creation-time provenance is incomplete and owner expectation is not direct event evidence.",
    handling: "Keep timing Conditional and separate recorded evidence from owner expectation.",
  },
];

const alternatives = [
  {
    observation: "Account A, shared Endpoint D-17, and Application Q overlap in time.",
    items: ["Approved shared-device use", "A stale or continuing session", "Automated application behavior", "Synchronization from another approved device"],
    conclusion: "Correlation supports object-level relationship, not automatic person attribution or harmful intent.",
  },
  {
    observation: "A fictional update occurs before a service symptom.",
    items: ["Unrelated timing coincidence", "Expected service maintenance", "Supplier dependency change", "Application source degradation"],
    conclusion: "Sequence supports a causal question, not a causal conclusion.",
  },
  {
    observation: "A notification precedes an account session.",
    items: ["Notification not seen", "Notification delivered but not acknowledged", "Session started through an approved workflow", "Account activity unrelated to notification"],
    conclusion: "Timing does not prove awareness, consent, or action.",
  },
  {
    observation: "A browser state appears on two endpoints.",
    items: ["Expected synchronization", "Reflected state from one device", "Shared account context", "Delayed browser-state update"],
    conclusion: "Presence on both endpoints does not establish origin or coordinated human action.",
  },
];

const workflow = [
  ["1", "Restate the bounded relationship question", "Define exactly which fictional objects, time range, and decision the correlation should address."],
  ["2", "Select the minimum sources", "Choose only fictional evidence categories necessary to answer the relationship question."],
  ["3", "Preserve evidence identity", "Record evidence IDs, source owners, provenance, transformation, and lifecycle status."],
  ["4", "Normalize meaning, not history", "Compare identifiers and time context without erasing original values or source-specific meanings."],
  ["5", "Check source health and missing fields", "Identify Blind, Degraded, Conditional, transformed, or incomplete evidence before interpreting absence."],
  ["6", "Test duplicate and lineage relationships", "Determine whether multiple fictional rows are independent evidence or representations of one source event."],
  ["7", "Record support and contradiction", "Keep both reinforcing and conflicting fictional records visible."],
  ["8", "Test alternative explanations", "Compare benign, timing, automation, synchronization, shared-device, source-health, and process explanations."],
  ["9", "Assign confidence", "Use Strong, Moderate, Conditional, Conflicting, Duplicate, Unrelated, or Unknown states with reasons."],
  ["10", "Write a bounded finding", "State the fictional relationship, support, limits, non-proof statements, and next owner action."],
];

const reportingPatterns = [
  ["The identity and endpoint logs prove Person A used D-17.", "The fictional identity and endpoint records correlate Account A with Session S on shared Endpoint D-17; the supplied evidence does not independently establish the physical person controlling the device."],
  ["The supplier change caused the workflow event.", "The fictional supplier note reports a dependency-state change before the workflow event, but supplier provenance is Conditional and the current correlation does not prove causation."],
  ["Two alerts mean two separate events.", "The fictional records share one event identifier and owner-confirmed lineage, so they are best treated as duplicate representations unless additional evidence establishes separate events."],
  ["No application record means the event did not happen.", "No matching fictional application record is visible, but the source was Degraded during the interval; absence remains unsupported."],
  ["The notification proves the user knew about the change.", "The fictional notification was generated before the later session; acknowledgement and person-level awareness remain Unknown."],
  ["The browser state on both devices proves coordinated activity.", "The fictional browser state was reflected on two approved endpoints within the expected synchronization interval; coordinated human activity and origin are not established."],
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Module A8
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function LogCorrelationForForensicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A8</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A8.7</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Cross-Source Evidence Reasoning</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A8.7 Log Correlation for Forensics</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional investigators compare supplied records across identity, endpoint, application, service, supplier, and audit sources without turning shared identifiers or nearby timestamps into unsupported stories. Preserve provenance, time meaning, source health, transformation, duplication, contradiction, alternatives, attribution limits, and uncertainty.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A8: Digital Forensics Concepts"
          lessonTitle="Log Correlation for Forensics"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented identity, endpoint, application, service, supplier, audit, session, browser, and timeline records supplied in the lesson.",
            "I will not access, search, query, collect, monitor, export, capture, extract, or correlate logs from any real device, account, service, application, network, school system, or person.",
            "I will correlate only the minimum fictional sources needed for one bounded forensic question.",
            "I will preserve evidence identity, source owner, provenance, time type, source health, transformation, duplication, missing fields, and limitations.",
            "I will not treat shared identifiers, nearby timestamps, or multiple records as automatic proof of person attribution, causation, intent, or impact.",
            "I will keep every CyberShield correlation example fully fictional, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Three Matching Records Can Still Describe One Event">
          <p className="leading-8">
            A fictional service event appears in the source system, a normalized case record, and a dashboard. The three rows share the same event ID but show times of 14:01, 14:06, and 14:07. A rushed investigator counts three events and reports repeated activity.
          </p>
          <p className="mt-4 leading-8">
            The source owner explains that 14:01 is event time, 14:06 is processing time, and 14:07 is case receipt time. The records are useful, but they are not independent evidence of three separate events. Correlation begins by understanding lineage before counting, comparing, or interpreting.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak correlation</p>
              <p className="mt-2 leading-7">“Three records with nearby times mean three separate events.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional correlation</p>
              <p className="mt-2 leading-7">“The three fictional records share one event ID and documented lineage, so they are best treated as multiple representations of one event.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A8.7">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Correlation Creates Context—but Can Also Create False Stories">
          <p className="leading-8">
            One fictional source rarely answers every forensic question. An identity record may explain account state, an endpoint record may explain device context, an application record may explain workflow activity, a service record may explain session state, and a supplier record may explain dependency timing. Correlation can connect those pieces into a stronger picture.
          </p>
          <p className="mt-4 leading-8">
            Correlation is also where confirmation bias can become a polished narrative. Shared account references, matching service IDs, nearby timestamps, and repeated rows can look convincing even when sources are transformed, duplicated, Degraded, stale, or unrelated. Professional correlation keeps every source's meaning and limits visible.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Context", "Combine fictional sources only when the relationship answers the bounded question."],
              ["Lineage", "Know whether records are independent or derived from the same underlying event."],
              ["Contradiction", "Preserve disagreement instead of selecting whichever source fits the hypothesis."],
              ["Uncertainty", "Keep Conditional and Unknown relationships visible rather than forcing a complete story."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Eight Principles of Defensible Correlation">
          <div className="grid gap-5">
            {principles.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.meaning}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Correlation risk</p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional control</p>
                    <p className="mt-2 text-sm leading-6">{item.control}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Vocabulary" title="Professional Terms for Cross-Source Correlation">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Source Catalog" title="Six Fictional Evidence Families Commonly Compared">
          <div className="grid gap-5 md:grid-cols-2">
            {sourceFamilies.map((item) => (
              <article key={item.source} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-purple-100">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-3 text-sm text-cyan-100"><span className="font-black">Owner:</span> {item.owner}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strength</p>
                  <p className="mt-2 text-sm leading-6">{item.strength}</p>
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limit</p>
                  <p className="mt-2 text-sm leading-6">{item.limit}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Correlation Dashboard"
          subtitle="Northbridge A8 exercise — invented evidence only"
          metrics={[
            { label: "Correlation questions", value: "6", note: "Each tied to one bounded forensic decision" },
            { label: "Sources represented", value: "6", note: "Identity, endpoint, application, service, supplier, audit" },
            { label: "Potential duplicates", value: "1", note: "One source event represented in multiple downstream records" },
            { label: "Evidence-limited relationships", value: "3", note: "Conditional, Degraded, and acknowledgement-Unknown cases" },
          ]}
        />

        <SectionCard eyebrow="Correlation Matrix" title="Connect Records by Question, Not by Coincidence">
          <div className="grid gap-5">
            {correlationMatrix.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{item.relationship}</span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.question}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence A", item.evidenceA],
                    ["Evidence B", item.evidenceB],
                    ["Correlation key", item.key],
                    ["Source health", item.sourceHealth],
                    ["Supports", item.supports],
                    ["Limitation", item.limits],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Correlation Warning"
          severity="High"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="Identity and endpoint records correlate Account A with shared Endpoint D-17, but the relationship does not establish the physical person."
          recommendation={["Identity source: Account A authenticated",
            "Endpoint source: Session S represented on shared D-17",
            "Shared key: Account A + Session S",
            "Source health: Healthy / Conditional",
            "Required reporting state: object-level relationship supported; person attribution Unknown",].join(" • ")}
        />

        <SectionCard eyebrow="Relationship States" title="Not Every Correlation Has the Same Strength">
          <div className="grid gap-4 md:grid-cols-2">
            {relationshipStates.map(([state, meaning, report]) => (
              <div key={state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{state}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{meaning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Reporting behavior</p>
                  <p className="mt-2 text-sm leading-6">{report}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Cross-Source Records"
          logs={[
            "14:01 | IDENTITY | account=Account-A | session=Session-S | result=success | evidence=BA-01",
            "14:01 | ENDPOINT | endpoint=D-17 | session=Session-S | account=Account-A | shared=true | evidence=EP-03",
            "14:04 | APPLICATION | workflow=Workflow-W | state=unusual-transition | source_health=Degraded | evidence=TL-03",
            "14:06 | SERVICE | event_id=EVT-44 | stage=processing | source_event_time=14:01 | evidence=SR-02",
            "14:07 | CASE | event_id=EVT-44 | stage=receipt | lineage=service-source | evidence=CS-11",
            "13:58 | SUPPLIER | dependency=Dependency-R | state=changed | provenance=Conditional | evidence=TL-05",
            "14:12 | CORRELATION | account+endpoint=Supported | person_attribution=Unknown | causation=Unknown",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Correlation"
          question="Which fictional conclusion is strongest?"
          evidence={[
            "Identity evidence associates Account A with Session S.",
            "Endpoint evidence associates Session S with shared Endpoint D-17.",
            "The endpoint is approved for more than one fictional user.",
            "No supplied evidence independently identifies the physical person controlling D-17.",
          ]}
          options={[
            "Person A definitely controlled D-17.",
            "Account A and Session S correlate with shared Endpoint D-17, while physical-person attribution remains Unknown.",
            "The shared endpoint makes the identity record useless.",
            "The correlation proves harmful intent.",
          ]}
          bestAnswer={1}
          explanation="The correlation supports an object-level relationship between account, session, and endpoint. Shared-device context prevents a stronger person-level conclusion."
        />

        <SectionCard eyebrow="Time and Correlation" title="Nearby Timestamps Matter Only When Their Meanings Are Comparable">
          <p className="leading-8">
            A fictional identity event at 14:01, application event at 14:04, service processing event at 14:06, and case receipt at 14:07 may belong to one sequence—or may simply be different stages and independent events. Before comparing proximity, investigators must identify which times are event, processing, receipt, or other time types.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Same time type?", "Are the fictional timestamps both event times, or are different lifecycle stages being compared?"],
              ["Same precision?", "Are the times exact, rounded, approximate, or interval-based?"],
              ["Same timezone?", "Do the fictional sources share a comparable timezone context?"],
              ["Known delay?", "Could processing, synchronization, forwarding, or ingestion delay explain the difference?"],
              ["Source health?", "Was either fictional source Degraded, Blind, Conditional, or transformed?"],
              ["Causal evidence?", "Does the supplied evidence show more than sequence or overlap?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Duplicates" title="Independent Evidence and Derived Evidence Must Not Be Counted the Same">
          <p className="leading-8">
            A source event may generate a normalized row, an alert, a dashboard entry, a case record, and a report summary. Those records can be valuable because they show processing and decision context, but they may all trace back to one original observation.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Evidence ID", "Do the fictional records carry the same event or object identifier?"],
              ["Lineage", "Does one fictional record explicitly derive from another?"],
              ["Transformation", "Was the fictional event normalized, summarized, filtered, or enriched downstream?"],
              ["Time type", "Are later times processing or receipt times rather than separate event times?"],
              ["Owner explanation", "Can the fictional source owner confirm whether the rows represent one or multiple events?"],
              ["Counting rule", "Can the case preserve all representations without counting them as independent observations?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze Potential Duplicates"
          question="Three fictional records share Event ID EVT-44. The source owner confirms one is the source event, one is a normalized copy, and one is a case receipt record. What is strongest?"
          evidence={[
            "All three records share Event ID EVT-44.",
            "The owner confirms direct lineage.",
            "Their timestamps represent event, processing, and receipt time.",
            "No supplied evidence shows three separate underlying events.",
          ]}
          options={[
            "Count three events.",
            "Treat the records as three representations of one underlying fictional event while preserving each record's lifecycle meaning.",
            "Delete the downstream records.",
            "Use only the latest record.",
          ]}
          bestAnswer={1}
          explanation="Lineage and shared identity support one event represented at multiple stages. All records can remain useful without inflating event count."
        />

        <SectionCard eyebrow="Contradictions" title="Disagreement Is Evidence Too">
          <div className="grid gap-5">
            {contradictionCases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Source A</p>
                    <p className="mt-2 text-sm leading-6">{item.a}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Source B</p>
                    <p className="mt-2 text-sm leading-6">{item.b}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300"><span className="font-black text-cyan-100">Possible explanation:</span> {item.explanation}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional handling</p>
                  <p className="mt-2 text-sm leading-6">{item.handling}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Missing Application Record"
          scenario="A fictional service session is active from 14:01 through 14:19. The application source shows no matching event at 14:10, but that source was Degraded from 14:02 through 14:18."
          choices={[
            {
              label: "Choice A",
              response: "Conclude that no application activity occurred because the source shows no event.",
              outcome: "A Degraded source cannot support a strong absence conclusion for that interval.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Record that the service session existed, the application source lacks a matching event, and the Degraded interval prevents treating that absence as proof.",
              outcome: "This preserves both records and the source-health limitation.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Assume the application source is completely useless for the whole case.",
              outcome: "A Degraded interval limits specific conclusions but does not necessarily invalidate all evidence from the source.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Alternative Explanations" title="A Correlation Becomes Stronger When It Survives Competing Explanations">
          <div className="grid gap-5">
            {alternatives.map((item) => (
              <article key={item.observation} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.observation}</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {item.items.map((alternative) => (
                    <div key={alternative} className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">{alternative}</div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Bounded conclusion</p>
                  <p className="mt-2 text-sm leading-6">{item.conclusion}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Professional Workflow" title="The Ten-Step Correlation Process">
          <div className="grid gap-5">
            {workflow.map(([step, title, detail]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{step}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Supplier Timing Correlation"
          scenario="A fictional supplier note reports a dependency change at 13:58. A workflow event occurs at 14:04. The supplier note reached the case later and its original creation-time provenance remains incomplete."
          choices={[
            {
              label: "Choice A",
              response: "Conclude that the supplier change caused the workflow event because it happened first.",
              outcome: "This overstates both provenance and causation.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Record a Conditional temporal relationship: the supplier note reports an earlier dependency change, but creation-time provenance and causation remain unresolved.",
              outcome: "This preserves the useful timing relationship without exceeding the evidence.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Ignore the supplier note because Conditional evidence can never be useful.",
              outcome: "Conditional evidence can still support bounded questions when its limitations are explicit.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Privacy and Scope" title="Correlation Should Not Become Cross-System Surveillance">
          <p className="leading-8">
            The ability to connect fictional records across systems does not justify broad review. Correlation scope should remain tied to one approved question. Adding more sources can expose unrelated identities, browsing activity, messages, personal information, supplier details, or internal configuration without improving the finding.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Define the exact fictional relationship question before selecting sources.",
              "Use only the minimum evidence categories needed to answer that relationship question.",
              "Exclude unrelated identities, services, accounts, communications, and time periods.",
              "Keep credentials, secrets, private messages, real URLs, internal configurations, and operational security details out of the exercise.",
              "Require fictional owner approval before expanding to another system, supplier, identity, or sensitive evidence category.",
              "Use public-safe invented summaries instead of real logs or screenshots in the portfolio.",
              "Document why each correlated source is necessary.",
              "Stop when the next source would exceed purpose, privacy, or authority.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-sm leading-7 text-yellow-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Reporting Language" title="Write Correlation Findings Without Turning Relationships into Unsupported Conclusions">
          <div className="grid gap-5">
            {reportingPatterns.map(([weak, stronger], index) => (
              <article key={weak} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Reporting pattern {index + 1}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Overstated</p>
                    <p className="mt-2 text-sm leading-6">{weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Bounded</p>
                    <p className="mt-2 text-sm leading-6">{stronger}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Common Mistakes" title="Where Log Correlation Goes Wrong">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Join everything", "Broad fictional correlation can create irrelevant relationships, privacy exposure, and confirmation bias.", "Correlate only sources needed for the bounded question."],
              ["Same identifier means same event", "Shared identifiers may represent a session, account, service, or reused object rather than one event.", "Use evidence identity, lineage, time type, and owner context."],
              ["More rows means more evidence", "Downstream normalized, alert, case, dashboard, and report rows may all derive from one source event.", "Distinguish independent evidence from duplicate representations."],
              ["Nearby time means causation", "Temporal proximity supports a relationship question, not automatic cause.", "Preserve sequence separately and test alternatives."],
              ["Missing row means absence", "Blind, Degraded, delayed, filtered, or retention-limited sources may omit evidence.", "Use source-limited or Unknown conclusions."],
              ["Contradiction means one source is false", "Different time types, stale state, transformation, precision, or source health can explain disagreement.", "Preserve both records and investigate the reason for conflict."],
              ["Account correlation means person attribution", "Shared devices, stale sessions, automation, delegated use, and synchronization can weaken physical-person conclusions.", "State the exact object relationship the evidence supports."],
              ["Conditional evidence is useless", "A fictional source with known limits can still support narrow conclusions.", "Use bounded confidence and avoid sole reliance where the limitation is material."],
            ].map(([mistake, why, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why it fails</p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Lab" title="Build a Cross-Source Correlation Workbook">
          <p className="leading-8">
            Use only CR-01 through CR-06 and the invented records supplied on this page. Do not access, search, query, collect, export, monitor, correlate, capture, extract, or inspect any real logs, accounts, devices, applications, services, suppliers, networks, school systems, websites, or people.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Phase 1 — Define relationship questions", [
                "Write one fictional account-to-endpoint question, one session-to-application question, one supplier-to-workflow question, and one duplicate-record question.",
                "State the decision owner and why each relationship matters.",
                "List three relationships that are explicitly out of scope.",
              ]],
              ["Phase 2 — Register sources", [
                "Create a source table for identity, endpoint, application, service, supplier, and audit evidence.",
                "Record evidence ID, source owner, source health, time type, transformation, and privacy limit.",
                "Identify which records are independent and which may share lineage.",
              ]],
              ["Phase 3 — Build the correlation matrix", [
                "Create one row for CR-01 through CR-06.",
                "Record correlation key, relationship state, support, contradiction, confidence, limits, and next owner question.",
                "Add one non-proof statement to every row.",
              ]],
              ["Phase 4 — Test duplicates and contradictions", [
                "Use Event ID EVT-44 to explain why three records represent one fictional event.",
                "Analyze one apparent timestamp conflict and one stale-state conflict.",
                "Preserve unresolved contradiction when the evidence cannot reconcile it.",
              ]],
              ["Phase 5 — Test alternatives", [
                "For at least three correlations, list shared-device, automation, synchronization, timing, source-health, or benign alternatives.",
                "Explain which alternatives remain plausible.",
                "Revise confidence if an alternative materially weakens the relationship.",
              ]],
              ["Phase 6 — Report", [
                "Write one Strong supporting finding, one Moderate finding, one Conditional finding, one probable duplicate finding, one Conflicting finding, and one Unknown finding.",
                "Add at least six non-proof statements.",
                "Create a public-safe leadership summary using only invented evidence.",
              ]],
            ].map(([phase, tasks]) => (
              <article key={phase as string} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{phase as string}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {(tasks as string[]).map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This activity is a reasoning and documentation exercise using invented, pre-supplied records only. It does not authorize real log collection, querying, export, monitoring, network capture, account access, device access, private-message review, storage access, extraction, surveillance, or investigation of real people or systems.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Correlation When One Source Supports It and Another Source Is Silent">
          <p className="leading-8">
            A fictional identity source and endpoint source strongly correlate Account A with Session S on D-17. The application source shows no matching event—but the application source was Degraded during most of the relevant interval. Leadership asks whether the missing application row disproves the account-to-endpoint relationship.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "State the strongest identity-to-endpoint correlation.",
              "Explain why the Degraded application source cannot strongly contradict the relationship.",
              "Separate absence of an application row from absence of the account session.",
              "Write one person-attribution non-proof statement.",
              "Write one causation non-proof statement.",
              "Explain how source health changes the weight of silence.",
              "Identify what qualified owner clarification could improve the application-source conclusion.",
              "Create a public-safe executive explanation of why different evidence families can support different parts of the same forensic question.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.7 Log Correlation Checklist"
          items={[
            "I can define a bounded fictional relationship question before selecting sources.",
            "I can correlate identity, endpoint, application, service, supplier, and audit evidence without joining unrelated data.",
            "I can preserve evidence ID, provenance, owner, time type, transformation, source health, and limitations.",
            "I can distinguish independent evidence from duplicate downstream representations.",
            "I can explain why shared identifiers do not automatically mean same event, same person, or same cause.",
            "I can use time type and source health before interpreting proximity or absence.",
            "I can preserve contradictions instead of selecting only the source that supports the hypothesis.",
            "I can test shared-device, automation, synchronization, timing, supplier, source-health, and benign alternatives.",
            "I can classify fictional correlations as Strong, Moderate, Conditional, Conflicting, Duplicate, Unrelated, or Unknown.",
            "I can keep account, device, session, application, person attribution, intent, causation, and impact as separate evidence levels.",
            "I can write bounded correlation findings with confidence and non-proof statements.",
            "I can keep every correlation example fully fictional, pre-supplied, defensive, non-invasive, privacy-safe, and public-safe.",
          ]}
        />

        <MiniQuiz
          title="A8.7 Mini Quiz: Log Correlation for Forensics"
          questions={[
            {
              question: "Three fictional records share one event ID and owner-confirmed lineage. Their times represent event, processing, and receipt stages. What is strongest?",
              choices: [
                "Count three separate events.",
                "Treat them as multiple representations of one underlying event while preserving each lifecycle stage.",
                "Delete the downstream records.",
                "Use only the latest timestamp.",
              ],
              answer: 1,
              explanation: "Shared identity and lineage support one event represented at multiple stages.",
            },
            {
              question: "A fictional identity record and endpoint record both reference Account A and Session S on shared D-17. What does the correlation support?",
              choices: [
                "Person A definitely controlled D-17.",
                "An account/session relationship with the shared endpoint, while physical-person attribution may remain Unknown.",
                "Harmful intent.",
                "That no other approved user could have used the device.",
              ],
              answer: 1,
              explanation: "The evidence supports object-level correlation, not automatic physical-person attribution.",
            },
            {
              question: "A fictional application source is Degraded and shows no matching event. What is strongest?",
              choices: [
                "No event occurred.",
                "The missing row should be treated as source-limited and cannot strongly support absence.",
                "The source proves the service record is false.",
                "Every application record should be discarded.",
              ],
              answer: 1,
              explanation: "Degraded source health weakens the evidentiary meaning of silence.",
            },
            {
              question: "A fictional supplier note reports a change before a workflow event, but its creation-time provenance is incomplete. What is strongest?",
              choices: [
                "The supplier change caused the workflow event.",
                "The relationship is Conditional and may support sequence, but provenance and causation remain unresolved.",
                "The note is automatically false.",
                "The workflow event proves supplier fault.",
              ],
              answer: 1,
              explanation: "Conditional evidence can support a bounded temporal relationship without proving cause.",
            },
            {
              question: "Why should correlation preserve contradictions?",
              choices: [
                "To make reports longer.",
                "Because disagreement may reveal timing, freshness, transformation, source-health, or meaning differences that affect confidence.",
                "Because one source must always be wrong.",
                "Because contradictions prove compromise.",
              ],
              answer: 1,
              explanation: "Contradictions are part of the evidence and can reveal important limits or alternate explanations.",
            },
            {
              question: "Two fictional events occur within one minute and share the same service. What does that alone prove?",
              choices: [
                "The first caused the second.",
                "The same person performed both.",
                "Only a potentially relevant temporal relationship; causation and attribution require additional evidence.",
                "The service was compromised.",
              ],
              answer: 2,
              explanation: "Temporal proximity and shared service context do not automatically prove cause or person identity.",
            },
            {
              question: "What is the strongest reason to correlate only the minimum necessary sources?",
              choices: [
                "To reduce page length.",
                "To protect purpose, privacy, relevance, and evidence quality while avoiding accidental relationships.",
                "Because supplier evidence is never useful.",
                "Because only two sources may ever be compared.",
              ],
              answer: 1,
              explanation: "Question-driven minimization keeps correlation relevant, privacy-aware, and defensible.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Cross-Source Forensic Correlation Workbook"
          prompt="Create a fully fictional A8.7 Cross-Source Forensic Correlation Workbook for Northbridge. Include at least ten invented evidence items across identity, endpoint, application, service, supplier, and audit/governance sources. For each correlation include relationship question, evidence IDs, source owners, provenance state, source health, time type, correlation key, transformation, duplicate status, missing fields, supporting relationship, contradiction, alternative explanation, confidence, attribution limit, causation limit, privacy limit, next owner question, and bounded reporting language. Include one Strong supporting correlation, one Moderate correlation, one Conditional correlation, one probable duplicate, one Conflicting relationship, one Unrelated relationship, one Unknown relationship, one Degraded-source absence case, one supplier-provenance case, one shared-device attribution limit, one notification-awareness limit, at least eight non-proof statements, a leadership summary, and a public-safe portfolio summary. Every organization, person, account, endpoint, session, application, service, supplier, event, source, timestamp, owner, finding, and outcome must be invented."
          tips={[
            "Start with the relationship question before selecting fictional sources.",
            "Preserve evidence lineage so duplicate downstream representations are not counted as independent events.",
            "Compare time meaning before comparing timestamp proximity.",
            "Use source health before interpreting missing records as absence.",
            "Keep object relationships separate from person attribution, intent, causation, and impact.",
            "Keep the final portfolio artifact fully fictional, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A8.8 Forensic Reporting Standards?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for correlation questions, source selection, evidence identity, provenance, time type, source health, duplicates, contradictions, alternatives, confidence, attribution limits, and bounded reporting.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can define a fictional correlation question before choosing evidence sources.",
              "I can distinguish independent evidence from multiple representations of one event.",
              "I can explain why nearby timestamps need comparable time meaning before they support sequence.",
              "I can preserve Degraded or Blind source limits when interpreting missing records.",
              "I can keep contradictions visible and investigate why traceable sources disagree.",
              "I can test shared-device, automation, synchronization, timing, source-health, and benign alternatives.",
              "I can separate account, device, session, application, and supplier relationships from person attribution and causation.",
              "I can assign a defensible fictional relationship state and confidence.",
              "I can write a correlation finding with support, limits, alternatives, and non-proof language.",
              "I can keep all correlation work fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Forensic correlation should begin with one bounded relationship question, not with a desire to join every available fictional record.",
            "Evidence identity, provenance, source owner, time type, transformation, source health, and lineage should remain visible during correlation.",
            "Multiple downstream rows may represent one underlying fictional event and should not automatically be counted as independent evidence.",
            "Shared identifiers and nearby timestamps can support a relationship question without proving person attribution, intent, causation, or impact.",
            "Blind or Degraded sources weaken the meaning of missing records and may require Conditional or Unknown conclusions.",
            "Contradictions should be preserved and investigated rather than hidden.",
            "Strong correlation reasoning tests alternative explanations such as shared devices, automation, synchronization, timing, source-health limits, and benign workflows.",
            "Relationship states such as Strong, Moderate, Conditional, Conflicting, Duplicate, Unrelated, and Unknown make confidence explicit.",
            "Professional correlation findings state what the evidence supports and what it still does not prove.",
            "CyberShield correlation work uses only fully invented, pre-supplied records and never authorizes real log collection, monitoring, querying, extraction, or cross-system surveillance.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">This Lesson Teaches Correlation Reasoning, Not Real Log Collection</h2>
          <p className="mt-3 leading-7">
            Nothing in A8.7 authorizes access, investigation, monitoring, querying, log collection, export, network capture, account access, device access, application access, storage access, private-message review, extraction, credential use, surveillance, configuration changes, or cross-system investigation involving any real device, account, application, service, supplier, network, organization, incident, classmate, teacher, family member, or other person. Use only fully invented, pre-supplied evidence records.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Forensic Reporting Standards</h2>
          <p className="mt-3 max-w-3xl leading-7">
            A8.7 established how to connect fictional evidence across multiple sources while preserving source meaning, lineage, contradictions, alternatives, and confidence. A8.8 turns those findings into a professional forensic report with purpose, scope, evidence, chronology, findings, limitations, review, versioning, distribution, and public-safe communication.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}