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
const previousLesson = `${modulePath}/forensic-questions-and-investigation-scope`;
const nextLesson = `${modulePath}/timeline-analysis-concepts`;

const objectives = [
  "Explain fictional evidence integrity as a combination of identity, provenance, traceability, handling, access, timing, source health, and documented limitations rather than a single technical property.",
  "Build a fictional evidence register that records purpose, evidence ID, origin, owner, time fields, source health, status, access, handling, transfer, retention, correction, and disposition.",
  "Explain chain of custody as a documented responsibility history that shows who controlled a fictional evidence item, why, when, under what authority, and what changed.",
  "Recognize integrity risks such as missing provenance, unexplained transformation, broken chronology, unauthorized access, silent correction, ambiguous ownership, excessive retention, and undocumented transfer.",
  "Write bounded fictional findings that distinguish evidence quality from evidence meaning and preserve Conditional, Degraded, Blind, Conflicting, and Unknown states.",
];

const vocabulary = [
  ["Evidence identity", "The fictional evidence ID, category, source, object reference, and version information that distinguish one evidence item from another."],
  ["Provenance", "The documented fictional origin and history that explain where evidence came from, who supplied it, when, and through which transformations."],
  ["Integrity", "The degree to which a fictional evidence item is sufficiently traceable, controlled, consistent, and documented for its intended conclusion."],
  ["Chain of custody", "A fictional history of responsibility, possession, transfer, access, and acknowledgement for an evidence item across its lifecycle."],
  ["Custodian", "The fictional role accountable for controlling an evidence item during a defined period."],
  ["Transfer", "A documented fictional handoff of evidence responsibility from one authorized custodian or storage responsibility to another."],
  ["Handling record", "A fictional entry explaining who accessed, reviewed, transformed, annotated, moved, corrected, or otherwise handled the evidence and why."],
  ["Transformation", "A documented fictional change in representation such as export, normalization, filtering, conversion, summary, or formatting that may affect interpretation."],
  ["Correction history", "A fictional record preserving what was corrected, why, by whom, when, and whether the earlier version remains traceable."],
  ["Retention", "The approved fictional period and purpose for keeping an evidence item or related record before review, archive, or disposition."],
  ["Disposition", "The fictional lifecycle decision for what happens to evidence when its approved retention purpose ends."],
  ["Evidence limitation", "A documented fictional condition that weakens or bounds how strongly an evidence item can support a conclusion."],
];

const integrityDimensions = [
  ["Identity", "Can reviewers tell exactly which fictional evidence item, version, source, category, and object reference they are discussing?", "Unique evidence ID, source, category, version, owner, and linked question.", "Generic labels such as screenshot, log, or export with no reliable differentiation."],
  ["Origin", "Is the fictional source and supplier of the evidence documented?", "Origin, source owner, supplied-by role, purpose, and time are recorded.", "The item appears in a case folder with no explanation of where it came from."],
  ["Timing", "Are relevant fictional event, export, receipt, review, and transfer times distinguishable?", "Different time fields are recorded separately with timezone and delay notes.", "One timestamp is treated as the entire chronology."],
  ["Handling", "Can reviewers reconstruct how the fictional item was accessed, moved, reviewed, transformed, or corrected?", "Every material action has role, reason, time, authority, and result.", "The item changes state or format with no documented handling record."],
  ["Access", "Is fictional evidence exposure limited to roles that need it for the approved purpose?", "Need-to-know access, acknowledgements, and review purpose are documented.", "Broad access exists because the evidence folder is convenient to share."],
  ["Transformation", "Are fictional exports, summaries, filters, formatting changes, and other representations traceable?", "Original reference, transformation purpose, fields retained, fields omitted, and limitations are documented.", "A summary is treated as equivalent to the original source without transformation history."],
  ["Source health", "Was the fictional source Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering for the relevant period?", "Source-health state and its effect on conclusions are explicit.", "The existence of a record is treated as proof that the source had complete coverage."],
  ["Lifecycle", "Are fictional retention, correction, archive, transfer, closure, and disposition responsibilities defined?", "Owner, purpose, review date, retention period, archive state, disposition, and reopen rules exist.", "Evidence remains indefinitely because nobody owns the lifecycle."],
];

const evidenceRegister = [
  ["NB-DF-001", "Identity approval record", "Fictional identity-owner supplied record", "Determine whether Account A had approved support role", "Identity evidence owner", "Healthy", "Registered", "Supports role state only; does not prove who physically used the account."],
  ["NB-DF-002", "Service session record", "Fictional service-owner supplied export", "Determine whether Account A had an active service session", "Service evidence owner", "Conditional", "Registered", "One processing-delay field requires owner clarification before precise chronology."],
  ["NB-DF-003", "Workflow event summary", "Fictional application-team supplied summary", "Evaluate whether Workflow W recorded a related event", "Application evidence owner", "Degraded", "Conditional", "Summary was created from a Degraded source and omits part of the approved window."],
  ["NB-DF-004", "Source-health report", "Fictional source-owner status record", "Determine whether missing workflow evidence can support absence", "Source owner", "Healthy", "Registered", "Describes source health; does not itself prove whether the underlying event occurred."],
  ["NB-DF-005", "Supplier timing note", "Fictional supplier-owner forwarded note", "Clarify one timing conflict", "Supplier evidence owner", "Conditional", "Provenance review", "Forwarding path is documented, but the original creation time remains unconfirmed."],
];

const custodyEvents = [
  ["14:07", "NB-DF-001", "Identity evidence owner", "Investigation coordinator", "Approved identity-role question", "Accepted", "Evidence ID assigned and purpose recorded."],
  ["14:12", "NB-DF-002", "Service evidence owner", "Investigation coordinator", "Approved session-state question", "Accepted", "Processing-delay limitation preserved."],
  ["14:24", "NB-DF-003", "Application evidence owner", "Investigation coordinator", "Workflow-event question", "Conditional", "Degraded source interval documented before interpretation."],
  ["14:31", "NB-DF-001", "Investigation coordinator", "Privacy reviewer", "Minimum-necessary field review", "Accepted", "No unrelated profile fields included."],
  ["14:41", "NB-DF-005", "Supplier evidence owner", "Investigation coordinator", "Timing-conflict clarification", "Pending provenance clarification", "Do not use as sole support until creation-time origin is explained."],
];

const commonMistakes = [
  ["Trusting appearance", "A polished screenshot, export, or report can look authoritative while origin and transformation remain unclear.", "Evaluate identity, provenance, timing, source health, handling, access, and transformation before relying on appearance."],
  ["Treating custody as a formality", "Names without purpose, acknowledgement, status, timing, and responsibility gaps do not reconstruct the evidence lifecycle.", "Record why each fictional transfer occurred and whether the receiving owner accepted responsibility."],
  ["Equating integrity with truth", "A well-governed item can faithfully represent a limited or misleading observation.", "Separate evidence quality from what the evidence actually supports."],
  ["Ignoring transformation", "Filtered or summarized evidence may omit context needed for the current question.", "Document representation changes and assess whether omitted context affects interpretation."],
  ["Overwriting corrections", "Silent changes destroy the history of what earlier reviewers saw.", "Preserve prior value, corrected value, reason, owner, affected findings, and redistribution."],
  ["Sharing broadly", "Convenient access can expose unnecessary fictional personal or operational information.", "Use need-to-know access and purpose-based distribution."],
  ["Keeping evidence forever", "Unlimited retention creates privacy, access, governance, and future misuse risk.", "Use owner-defined retention, review, archive, and disposition states."],
  ["Calling missing provenance proof of tampering", "Incomplete provenance weakens confidence but does not automatically prove malicious alteration.", "Use Conditional or Unknown language and request qualified clarification."],
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
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">Module A8</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function EvidenceIntegrityAndChainOfCustodyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A8</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A8.2</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Evidence Governance</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A8.2 Evidence Integrity and Chain of Custody</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Learn how professional fictional investigations document evidence identity, provenance, timing, source health, handling, access, transfer, correction, retention, disposition, and limitations so a reviewer can understand not only what an evidence item says, but whether its history is clear enough for the intended conclusion.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Advanced" moduleTitle="A8: Digital Forensics Concepts" lessonTitle="Evidence Integrity and Chain of Custody" lessonNumber={2} totalLessons={10} />

        <ReadinessCheck title="Before You Start" items={[
          "I will use only supplied fictional evidence records, owners, dates, source states, transfers, versions, and case details.",
          "I will not collect, image, capture, extract, recover, inspect, or acquire evidence from any real device, account, storage system, application, service, network, or person.",
          "I will treat chain of custody as a documentation and accountability concept rather than a procedure for acquiring real evidence.",
          "I will separate evidence quality from evidence meaning: a well-documented item can still have limited relevance, and a relevant-looking item can still have weak provenance.",
          "I will preserve fictional source-health, transformation, correction, access, privacy, retention, and lifecycle limitations.",
          "I will not publish or reuse any real screenshot, log, message, account record, device detail, timeline, case note, or incident material.",
        ]} />

        <SectionCard eyebrow="Professional Hook" title="A Clear Screenshot Can Be Weak Evidence">
          <p className="leading-8">A fictional investigator receives a screenshot that appears to show an important service event. The image is sharp, the timestamp is visible, and the event looks highly relevant. But the case record does not say who created the screenshot, which source produced the underlying event, when the screenshot was made, whether the display was filtered, whether the timestamp uses local time, or whether the screenshot is the first version.</p>
          <p className="mt-4 leading-8">The problem is not that the screenshot is automatically false. The problem is that its evidentiary strength is uncertain. Professional integrity asks whether reviewers can reconstruct identity, origin, timing, handling, transformation, access, source health, and limitations. Visual clarity is not the same as evidentiary clarity.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak conclusion</p><p className="mt-2 leading-7">“The screenshot is clear, so it proves the event exactly as shown.”</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional conclusion</p><p className="mt-2 leading-7">“The screenshot may support the displayed observation, but its current evidentiary use is Conditional until origin, transformation, timing, and handling are documented.”</p></div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A8.2">
          <div className="grid gap-4 md:grid-cols-2">{objectives.map((objective, index) => <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p><p className="mt-3 text-sm font-semibold leading-7">{objective}</p></div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Evidence Must Be Reviewable Beyond the Person Who First Saw It">
          <p className="leading-8">A forensic finding should not depend on one analyst remembering where a file came from or what happened to it. Evidence governance creates a shared record so another qualified reviewer can answer: what is this item, why is it in the case, where did it come from, who owned it, what happened to it, who accessed it, what changed, what source-health limits exist, and how long should it remain?</p>
          <p className="mt-4 leading-8">That traceability supports quality, fairness, privacy, correction, continuity, review, and accountability. If a conclusion later changes, reviewers can reconstruct whether the evidence changed, the interpretation changed, the source health changed, or a new record arrived.</p>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Eight Dimensions of Fictional Evidence Integrity">
          <div className="grid gap-5">{integrityDimensions.map(([dimension, question, strong, weak], index) => <article key={dimension} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span><div><h3 className="text-xl font-black text-white">{dimension}</h3><p className="mt-2 leading-7 text-slate-300">{question}</p></div></div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong record</p><p className="mt-2 text-sm leading-6">{strong}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak record</p><p className="mt-2 text-sm leading-6">{weak}</p></div></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Vocabulary" title="Professional Terms for Evidence Integrity">
          <div className="grid gap-4 md:grid-cols-2">{vocabulary.map(([term, definition]) => <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></div>)}</div>
        </SectionCard>

        <FakeDashboardCard title="Fictional Evidence Integrity Dashboard" subtitle="Northbridge A8 exercise — invented records only" metrics={[
          { label: "Registered evidence items", value: "5", note: "All linked to one approved forensic question" },
          { label: "Provenance complete", value: "4 / 5", note: "One supplier note remains Conditional" },
          { label: "Open custody acknowledgements", value: "1", note: "Supplier-origin clarification pending" },
          { label: "Source-health limitations", value: "2", note: "One Conditional source and one Degraded source" },
        ]} />

        <SectionCard eyebrow="Evidence Register" title="Every Fictional Evidence Item Needs an Identity and Purpose">
          <p className="leading-8">An evidence register is the case index of what is being used and why. It prevents vague references such as “the log” or “that screenshot.” A professional record ties each item to an approved question and explains its limitations before findings depend on it.</p>
          <div className="mt-6 overflow-x-auto"><table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left"><thead className="bg-slate-950"><tr>{["Evidence ID","Category","Origin","Purpose","Owner","Health","Status","Limitation"].map(h => <th key={h} className="border-b border-slate-700 px-4 py-4 text-sm font-black text-cyan-200">{h}</th>)}</tr></thead><tbody>{evidenceRegister.map(([id, category, origin, purpose, owner, health, status, limitation]) => <tr key={id} className="border-b border-slate-800 bg-slate-900/50 align-top"><td className="px-4 py-4 font-mono text-sm font-black text-white">{id}</td><td className="px-4 py-4 text-sm leading-6 text-slate-300">{category}</td><td className="px-4 py-4 text-sm leading-6 text-blue-100">{origin}</td><td className="px-4 py-4 text-sm leading-6 text-slate-300">{purpose}</td><td className="px-4 py-4 text-sm leading-6 text-purple-100">{owner}</td><td className="px-4 py-4 text-sm leading-6 text-yellow-100">{health}</td><td className="px-4 py-4 text-sm leading-6 text-emerald-100">{status}</td><td className="px-4 py-4 text-sm leading-6 text-slate-300">{limitation}</td></tr>)}</tbody></table></div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Evidence Quality Alert"
          severity="Medium"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="Supplier timing note cannot yet be used as sole support for a precise chronology conclusion."
          recommendation={["Evidence ID: NB-DF-005",
          "Forwarding path: documented",
          "Original creation time: unconfirmed",
          "Current source-health state: Conditional",
          "Owner action: supplier evidence owner must clarify provenance before high-confidence timing use",].join(" • ")}
        />

        <SectionCard eyebrow="Chain of Custody" title="Custody Shows Responsibility Across the Evidence Lifecycle">
          <p className="leading-8">Chain of custody is not only a sequence of names. A useful fictional custody record explains who transferred responsibility, who accepted it, why the transfer occurred, what authority applied, what the evidence status was, what limitations remained, and whether the receiving owner acknowledged responsibility.</p>
          <div className="mt-6 overflow-x-auto"><table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left"><thead className="bg-slate-950"><tr>{["Time","Evidence","From","To","Purpose","Acknowledgement","Note"].map(h => <th key={h} className="border-b border-slate-700 px-4 py-4 text-sm font-black text-cyan-200">{h}</th>)}</tr></thead><tbody>{custodyEvents.map(([time,evidence,from,to,purpose,ack,note]) => <tr key={`${time}-${evidence}-${to}`} className="border-b border-slate-800 bg-slate-900/50 align-top"><td className="px-4 py-4 font-mono text-sm text-white">{time}</td><td className="px-4 py-4 font-mono text-sm text-cyan-100">{evidence}</td><td className="px-4 py-4 text-sm text-slate-300">{from}</td><td className="px-4 py-4 text-sm text-purple-100">{to}</td><td className="px-4 py-4 text-sm text-slate-300">{purpose}</td><td className="px-4 py-4 text-sm text-emerald-100">{ack}</td><td className="px-4 py-4 text-sm text-yellow-100">{note}</td></tr>)}</tbody></table></div>
        </SectionCard>

        <FakeLogPanel title="Fictional Evidence Handling Records" logs={[
          "14:07 | REGISTER | evidence=NB-DF-001 | origin=identity-owner | purpose=role-state | source_health=Healthy",
          "14:12 | REGISTER | evidence=NB-DF-002 | origin=service-owner | purpose=session-state | source_health=Conditional",
          "14:24 | REGISTER | evidence=NB-DF-003 | origin=application-owner | purpose=workflow-event | source_health=Degraded",
          "14:31 | ACCESS | evidence=NB-DF-001 | reviewer=privacy-reviewer | purpose=minimization-check | fields=approved-only",
          "14:35 | CORRECTION | evidence=NB-DF-002 | field=processing-delay-note | prior=unclear | new=owner-clarification-pending",
          "14:41 | TRANSFER | evidence=NB-DF-005 | from=supplier-owner | to=investigation-coordinator | ack=Conditional",
          "14:44 | HOLD | evidence=NB-DF-005 | reason=creation-time-provenance-unconfirmed | finding_use=limited",
        ]} />

        <AnalyzeEvidenceCard title="Analyze the Evidence Handling Record" question="Which conclusion is strongest about NB-DF-005?" evidence={[
          "The supplier owner forwarded the fictional note through an approved channel.",
          "The receiving investigator acknowledged the transfer.",
          "The original creation time of the note is not yet confirmed.",
          "The note is relevant to a timing conflict but is not the only evidence in the case.",
        ]} options={[
          "The note is invalid and must be ignored forever.",
          "The note is fully reliable because the supplier owner forwarded it.",
          "The note is currently Conditional: transfer is traceable, but origin-time provenance remains incomplete, so it should not be sole support for a precise chronology conclusion.",
          "The note proves the supplier caused the incident.",
        ]} bestAnswer={2} explanation="Traceable transfer is useful, but incomplete creation-time provenance limits how strongly the note can support precise chronology. The strongest conclusion preserves both the value and the limitation." />

        <SectionCard eyebrow="Evidence Quality vs. Evidence Meaning" title="Good Custody Does Not Prove the Finding">
          <p className="leading-8">Strong evidence governance means the item is traceable enough to interpret responsibly. It does not guarantee that the item proves the suspected event. A perfectly documented fictional account record may show that Account A was active while still failing to identify the physical person, intent, cause, or impact.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[
            ["High integrity / relevant", "Use with explicit limits; the item is traceable and directly supports part of the approved question."],
            ["High integrity / weak relevance", "Keep it outside the finding if it does not materially answer the approved question."],
            ["Conditional integrity / relevant", "Use only for bounded conclusions and preserve the provenance, timing, or transformation limitation."],
            ["Weak integrity / apparently relevant", "Treat the content as Conditional or Unknown until evidence quality improves."],
          ].map(([state,detail]) => <div key={state} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><h3 className="font-black">{state}</h3><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
        </SectionCard>

        <ScenarioDecisionLab title="Scenario Decision Lab 1: The Unlabeled Export" scenario="A fictional analyst finds a service export in the case workspace. The values look useful, but the file name is generic, the source owner is not recorded, and nobody can yet explain whether the export was filtered before it reached the case." choices={[
          { label: "Choice A", response: "Use it immediately because the values match the current hypothesis.", outcome: "Matching a hypothesis does not repair missing identity, origin, transformation, ownership, or handling history.", tone: "risk" },
          { label: "Choice B", response: "Register it as a Conditional evidence candidate, document the missing provenance and transformation questions, identify an owner, and avoid using it as sole support until those questions are resolved.", outcome: "This preserves possible value without overstating integrity.", tone: "best" },
          { label: "Choice C", response: "Delete it because anything with incomplete provenance is useless.", outcome: "This is too absolute. The item may later become usable if qualified owners clarify its origin and transformation history.", tone: "caution" },
        ]} />

        <SectionCard eyebrow="Transformations and Corrections" title="A Summary Is Not the Same Thing as Its Source—and a Correction Should Not Erase History">
          <p className="leading-8">Fictional evidence may be exported, filtered, summarized, converted, or reformatted before a reviewer sees it. Those changes do not automatically make the evidence unreliable, but they must remain traceable to the original reference, purpose, owner, fields retained, fields omitted, and limitations.</p>
          <p className="mt-4 leading-8">Corrections require similar transparency. When a fictional owner clarifies a timezone, source-health interval, field meaning, or labeling problem, preserve the earlier value, record the new value and reason, identify affected findings, version the record, and redistribute the correction where it materially changes interpretation.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[
            ["Original reference", "Which fictional evidence item or source does the representation come from?"],
            ["Purpose", "Why was the fictional transformation or correction performed?"],
            ["Fields retained", "Which fields, records, time ranges, or categories remain visible?"],
            ["Fields omitted", "What context was intentionally or unintentionally removed?"],
            ["Owner", "Which fictional role can explain and approve the change?"],
            ["Affected findings", "Which conclusions or decisions used the earlier representation or value?"],
          ].map(([title,detail]) => <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"><h3 className="font-black text-purple-100">{title}</h3><p className="mt-2 text-sm leading-6">{detail}</p></div>)}</div>
        </SectionCard>

        <AnalyzeEvidenceCard title="Analyze a Fictional Summary" question="A fictional application summary contains only failed events and omits successful events. The current question asks whether any event occurred. What is strongest?" evidence={[
          "The summary was intentionally filtered to failures for a service-quality review.",
          "The current forensic question asks whether any event associated with Account A occurred.",
          "Successful events are therefore relevant to the current question.",
          "The summary remains traceable to its source and owner.",
        ]} options={[
          "Use the summary as proof that only failed events occurred.",
          "Treat the summary as a traceable but incomplete representation for the current forensic question and request the minimum additional supplied context needed.",
          "Assume the omitted successful events are harmless.",
          "Discard the summary because filtered evidence can never be useful.",
        ]} bestAnswer={1} explanation="The summary can remain useful, but its filtering purpose makes it incomplete for the current question. Traceability does not eliminate representational limits." />

        <ScenarioDecisionLab title="Scenario Decision Lab 2: The Corrected Timestamp" scenario="A fictional source owner explains that one processing timestamp in NB-DF-002 was displayed in the wrong timezone. The event time itself was correct, but the investigation timeline already used the processing time in one sequence statement." choices={[
          { label: "Choice A", response: "Overwrite the timestamp and continue without documenting the change.", outcome: "This hides which value earlier reviewers saw and prevents reconstruction of affected decisions.", tone: "risk" },
          { label: "Choice B", response: "Preserve the earlier value, record the corrected value and owner explanation, identify the affected timeline statement, update the conclusion if needed, version the record, and redistribute the correction where material.", outcome: "This maintains transparency and makes the case history reconstructable.", tone: "best" },
          { label: "Choice C", response: "Treat every other timestamp in the case as unreliable.", outcome: "One corrected field does not automatically invalidate unrelated evidence. Each item should be evaluated on its own provenance and quality.", tone: "caution" },
        ]} />

        <SectionCard eyebrow="Retention and Disposition" title="Evidence Integrity Includes the End of the Lifecycle">
          <p className="leading-8">A fictional investigation is not complete merely because the report is written. Evidence lifecycle governance asks what still needs to be retained, for what approved purpose, by which owner, under which access rules, until which review point, and what happens when that purpose ends.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[
            ["Active review", "Needed for the current approved fictional question under active access controls."],
            ["Follow-up hold", "A named fictional owner action or review dependency still requires the evidence."],
            ["Closed / retained", "The case is closed, but an approved records, governance, or review purpose still exists."],
            ["Archived", "No longer active, but retained under controlled storage for the approved purpose."],
            ["Disposition pending", "Retention purpose ended and an accountable owner must complete the disposition decision."],
            ["Disposed", "The lifecycle record shows the evidence is no longer retained under the case purpose."],
          ].map(([state,detail]) => <div key={state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{state}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Common Mistakes" title="Where Evidence Integrity Reasoning Fails">
          <div className="grid gap-5 md:grid-cols-2">{commonMistakes.map(([mistake,why,correction]) => <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-red-100">{mistake}</h3><div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why it fails</p><p className="mt-2 text-sm leading-6">{why}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p><p className="mt-2 text-sm leading-6">{correction}</p></div></article>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Lab" title="Build an Evidence Integrity and Custody Package">
          <p className="leading-8">Use only the supplied fictional Northbridge records on this page. Do not collect, image, capture, extract, inspect, recover, preserve, or acquire data from any real device, account, application, storage system, network, service, website, person, school system, or organization.</p>
          <div className="mt-6 grid gap-5">{[
            ["Phase 1 — Register evidence", ["Create one row for each fictional evidence item NB-DF-001 through NB-DF-005.", "Record evidence ID, category, origin, purpose, owner, source health, receipt time, status, and limitation.", "Identify which item is currently Conditional because provenance remains incomplete."]],
            ["Phase 2 — Build custody history", ["Create a fictional custody table with from-role, to-role, purpose, time, acknowledgement, authority, and note.", "Identify which handoff remains incomplete.", "Explain why acknowledgement matters for responsibility."]],
            ["Phase 3 — Evaluate transformations", ["Select one fictional summary or export.", "Document original reference, transformation purpose, fields retained, fields omitted, owner, and limitation.", "State whether the representation is sufficient for its current question."]],
            ["Phase 4 — Handle a correction", ["Use the fictional timezone correction for NB-DF-002.", "Write the prior value state, corrected state, reason, owner, affected finding, version update, and redistribution decision.", "Explain why silent overwrite would weaken case integrity."]],
            ["Phase 5 — Plan access and retention", ["Define which fictional roles need access to each evidence category and why.", "Choose an appropriate fictional lifecycle state for each evidence item.", "Write one retention review trigger and one disposition owner rule."]],
            ["Phase 6 — Write integrity findings", ["Write one High-integrity finding, one Conditional-integrity finding, and one Unknown finding.", "For each, separate evidence quality from evidence meaning.", "Include a non-proof statement so the conclusion does not exceed the supplied record."]],
          ].map(([phase,tasks]) => <article key={phase as string} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{phase as string}</h3><ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">{(tasks as string[]).map(task => <li key={task}>• {task}</li>)}</ul></article>)}</div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50"><p className="font-black">Lab boundary</p><p className="mt-2 leading-7">This is a documentation and reasoning lab using invented, pre-supplied evidence records only. It does not authorize real evidence acquisition, collection, preservation, imaging, memory capture, extraction, recovery, account access, storage access, private-message review, network monitoring, or device inspection.</p></div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Defend an Important Finding When the Best-Looking Evidence Has the Weakest Provenance">
          <p className="leading-8">A fictional leadership reviewer prefers one visually clear summary because it is easy to understand. A less polished source-owner record is more traceable and has stronger provenance, but its conclusion is narrower. Build a professional recommendation that explains why presentation quality should not outrank evidence quality.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[
            "Compare clarity of presentation with strength of provenance.",
            "Explain why a transformed summary may remain useful without becoming equivalent to its source.",
            "Show how the visually clear item could be labeled Conditional rather than discarded.",
            "Explain why the traceable source may support a narrower but stronger conclusion.",
            "Write a finding that uses both items without hiding their different quality states.",
            "Include one non-proof statement protecting against unsupported attribution or causation.",
            "Describe which owner clarification would most improve the Conditional item.",
            "Explain how the final report should show the difference between evidence quality and finding confidence.",
          ].map(item => <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>)}</div>
        </SectionCard>

        <DefenderChecklist title="A8.2 Evidence Integrity and Custody Checklist" items={[
          "I can explain why evidence integrity includes identity, provenance, timing, handling, access, transformation, source health, and lifecycle records.",
          "I can create a fictional evidence register that links each item to a purpose and decision question.",
          "I can explain chain of custody as a documented responsibility history rather than a list of names.",
          "I can distinguish a traceable transfer from an incomplete handoff.",
          "I can identify why unlabeled copies, silent transformations, broad access, hidden corrections, and unlimited retention weaken evidence governance.",
          "I can document a fictional transformation without treating a summary as identical to its source.",
          "I can preserve earlier values when a fictional correction occurs.",
          "I can identify which findings need revision or redistribution after a correction.",
          "I can separate evidence integrity from evidence relevance and evidence meaning.",
          "I can use Conditional or Unknown when provenance, source health, timing, or handling is insufficient.",
          "I can explain why incomplete provenance does not automatically prove tampering.",
          "I can keep all forensic evidence examples fully fictional, pre-supplied, privacy-safe, defensive, and non-invasive.",
        ]} />

        <MiniQuiz title="A8.2 Mini Quiz: Evidence Integrity and Chain of Custody" questions={[
          { question: "Which statement best defines fictional evidence integrity in this lesson?", choices: ["Evidence is trustworthy whenever it looks clear.", "Evidence integrity depends on sufficiently documented identity, provenance, timing, handling, access, transformation, source health, and lifecycle for the intended conclusion.", "Evidence integrity means the item proves the investigation hypothesis.", "Evidence integrity means no one has ever viewed the evidence."], answer: 1, explanation: "Integrity is about traceability and governance for the intended use, not visual quality or automatic truth." },
          { question: "A fictional evidence item has a clear forwarding path but an unconfirmed original creation time. What is strongest?", choices: ["Treat it as fully reliable.", "Treat it as automatically false.", "Treat it as Conditional for conclusions that depend on precise creation timing.", "Assume the supplier altered it."], answer: 2, explanation: "Incomplete creation-time provenance limits timing conclusions without proving that the item is false or altered." },
          { question: "Why is acknowledgement important in a fictional custody transfer?", choices: ["It makes the evidence technically stronger.", "It records that the receiving role accepted responsibility and helps prevent an ownership gap.", "It proves the finding is correct.", "It allows unlimited sharing."], answer: 1, explanation: "Custody is about responsibility and traceability; acknowledgement shows that the handoff was accepted." },
          { question: "A fictional summary is traceable to its source but omits successful events. The current question asks whether any event occurred. What is strongest?", choices: ["The summary proves only failures occurred.", "The summary is traceable but incomplete for the current question and should be treated accordingly.", "Filtered summaries are never useful.", "The omitted events can be ignored."], answer: 1, explanation: "Traceability does not remove representational limits. The filtering makes the summary incomplete for this question." },
          { question: "What is the strongest way to handle a corrected fictional timestamp?", choices: ["Overwrite the old value and remove history.", "Preserve the old value, record the corrected value and reason, identify affected findings, version the record, and redistribute when material.", "Invalidate every timestamp in the case.", "Ignore the correction if the report is already drafted."], answer: 1, explanation: "Professional correction preserves the case history and makes affected decisions reconstructable." },
          { question: "Which statement correctly separates evidence integrity from evidence meaning?", choices: ["High-integrity evidence always proves the suspected event.", "Low-integrity evidence is always false.", "A well-documented item can still support only a narrow conclusion, while an apparently relevant item with weak provenance may need Conditional treatment.", "Evidence meaning does not depend on context."], answer: 2, explanation: "Evidence quality and evidentiary meaning are related but different dimensions." },
          { question: "Why should fictional evidence not be retained indefinitely by default?", choices: ["Because old evidence automatically becomes inaccurate.", "Because unnecessary retention increases privacy, access, governance, confusion, and future misuse risk.", "Because custody records expire after one day.", "Because every investigation must delete everything immediately at closure."], answer: 1, explanation: "Retention should remain tied to approved purpose, ownership, review, and lifecycle obligations." },
        ]} />

        <PortfolioPrompt title="Portfolio Prompt: Evidence Integrity and Chain-of-Custody Package" prompt="Create a fully fictional A8.2 Evidence Integrity and Chain-of-Custody Package for Northbridge. Include an evidence register with at least six invented evidence IDs; approved purpose; evidence category; origin; source owner; supplied-by role; event, receipt, review, and transfer time fields; source health; status; provenance notes; access rules; handling history; transformation history; custody transfers; acknowledgements; privacy classification; minimum-necessary fields; limitations; one Conditional item; one Degraded item; one correction event; prior and corrected values; affected findings; redistribution decision; retention state; review date; disposition owner; closure state; and at least five non-proof statements. Include a final public-safe summary explaining why strong provenance does not automatically prove the underlying event." tips={[
          "Give every fictional evidence item a unique ID and link it to a bounded forensic question.",
          "Separate event time, receipt time, review time, and transfer time rather than collapsing them.",
          "Use custody records to show responsibility, purpose, acknowledgement, and unresolved limitations.",
          "Document transformations such as filtering or summarization and state what context may be missing.",
          "Preserve earlier values when corrections occur and identify which findings depended on them.",
          "Keep all organizations, accounts, systems, evidence items, records, dates, owners, findings, and outcomes completely invented.",
        ]} />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A8.3 Timeline Analysis Concepts?">
          <p className="leading-8">Rate your readiness from 1 to 5 for evidence identity, provenance, chain of custody, source health, transformations, handling history, corrections, access, retention, disposition, and evidence-quality language.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[
            "I can explain why a clear-looking fictional artifact can still have weak provenance.",
            "I can build an evidence register that distinguishes one fictional item and version from another.",
            "I can reconstruct a custody transfer using from-role, to-role, purpose, time, authority, acknowledgement, and limitations.",
            "I can explain why a filtered or summarized representation is not automatically equivalent to its source.",
            "I can preserve a correction without silently rewriting the earlier record.",
            "I can identify which findings should be revisited after a correction.",
            "I can separate evidence quality from relevance and from the meaning of the evidence.",
            "I can use Conditional or Unknown without claiming that missing provenance proves tampering.",
            "I can define purpose-based access, retention, archive, and disposition states.",
            "I can keep the entire learning exercise fictional, pre-supplied, non-invasive, defensive, and privacy-safe.",
          ].map(item => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>)}</div>
        </SectionCard>

        <KeyTakeaways takeaways={[
          "Fictional evidence integrity is about traceability, accountability, and suitability for a specific conclusion—not whether an artifact looks convincing.",
          "Every evidence item should have a clear identity, purpose, origin, owner, timing, source-health state, handling history, access model, limitation, and lifecycle state.",
          "Chain of custody documents responsibility, transfers, acknowledgement, purpose, and status across the evidence lifecycle.",
          "Incomplete provenance weakens confidence but does not automatically prove that evidence is false or altered.",
          "Transformations such as filtering, summarization, export, or formatting should remain traceable to the source and disclose omitted context.",
          "Corrections should preserve earlier values, explain the reason, identify affected findings, version the record, and trigger redistribution when material.",
          "Strong evidence governance does not make every conclusion strong; evidence quality, relevance, and meaning must be evaluated separately.",
          "Purpose-based access and retention protect privacy and reduce unnecessary evidence exposure.",
          "A fictional evidence item can be High integrity, Conditional, Degraded, Blind, Conflicting, or Unknown depending on the exact conclusion being considered.",
          "CyberShield forensic work uses only fully invented, pre-supplied evidence and never authorizes real acquisition, collection, imaging, extraction, recovery, surveillance, or device/account access.",
        ]} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p><h2 className="mt-2 text-2xl font-black">This Lesson Teaches Evidence Documentation, Not Evidence Acquisition</h2><p className="mt-3 leading-7">Nothing in A8.2 authorizes access, investigation, monitoring, collection, preservation, imaging, memory capture, extraction, credential recovery, packet capture, acquisition, storage access, account access, private-message review, configuration changes, recovery actions, surveillance, or examination involving any real device, account, application, service, storage system, network, organization, incident, classmate, teacher, family member, or other person. Use only fully invented evidence records supplied within the learning scenario.</p></section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p><h2 className="mt-2 text-2xl font-black">Continue to Timeline Analysis Concepts</h2><p className="mt-3 max-w-3xl leading-7">A8.2 established how fictional evidence identity, provenance, custody, handling, corrections, and lifecycle are documented. A8.3 moves into chronology: how event time, receipt time, processing time, review time, timezone, delays, duplicates, conflicts, gaps, and source health change the story a timeline can responsibly tell.</p><div className="mt-6"><Navigation /></div></section>
      </div>
      <Footer />
    </main>
  );
}