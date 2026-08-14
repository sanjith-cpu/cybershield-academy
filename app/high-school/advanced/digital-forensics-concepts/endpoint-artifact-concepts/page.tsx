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
const previousLesson = `${modulePath}/timeline-analysis-concepts`;
const nextLesson = `${modulePath}/memory-and-storage-evidence-concepts`;

const objectives = [
  "Explain fictional endpoint artifacts as high-level evidence categories that may describe device state, application state, account association, sessions, updates, configuration, files, processes, or activity without teaching acquisition or extraction methods.",
  "Map a bounded fictional forensic question to the minimum endpoint evidence categories that could help answer it, including source owner, source health, privacy limits, and non-proof statements.",
  "Distinguish observation from interpretation, attribution, intent, causation, and impact when supplied fictional endpoint evidence appears to connect a device, account, application, or process.",
  "Recognize endpoint evidence limitations including shared devices, automation, synchronization, stale state, cached information, delayed records, missing context, source gaps, and transformed summaries.",
  "Build a fictional endpoint artifact reasoning matrix that connects evidence identity, meaning, limitations, alternatives, confidence, privacy, owner questions, and reporting language.",
];

const vocabulary = [
  ["Endpoint", "A fictional user or organization device represented only conceptually in this lesson."],
  ["Artifact category", "A high-level class of supplied fictional evidence that may describe some aspect of endpoint state or activity."],
  ["System-state evidence", "Fictional evidence describing configuration, software, updates, services, settings, device status, or another state of the endpoint."],
  ["Application evidence", "Fictional records associated with an application's presence, state, events, settings, or relationship to the device."],
  ["Session evidence", "Fictional evidence describing a session's existence, state, timing, account association, or lifecycle."],
  ["Process evidence", "A conceptual fictional category describing a program or service state without teaching collection or inspection methods."],
  ["File-state evidence", "A fictional category describing the existence, metadata, state, or relationship of a file without teaching recovery or extraction."],
  ["Configuration evidence", "Fictional evidence describing settings or policy state relevant to a bounded question."],
  ["Stale state", "Fictional evidence that may reflect an earlier condition rather than the current endpoint state."],
  ["Automation", "A fictional system or application action that may occur without a person manually performing each event."],
  ["Synchronization", "A fictional process where state or records may be reflected across services or devices, complicating origin and attribution."],
  ["Attribution limit", "A documented boundary explaining that device or account evidence does not automatically establish which person physically acted or why."],
];

const categories = [
  {
    title: "Device identity and inventory",
    supports: "Which fictional endpoint reference, owner group, management state, or asset identity is associated with the case.",
    limits: "Who physically used the device, whether compromise occurred, or what activity happened.",
    privacy: "Use only minimum fictional asset and ownership fields needed for the approved question.",
  },
  {
    title: "Application presence and state",
    supports: "That a fictional application or application state was represented on the endpoint during the relevant period.",
    limits: "That a specific person used the application, that it caused an event, or that its presence was harmful.",
    privacy: "Avoid unrelated application inventories or personal software details outside purpose.",
  },
  {
    title: "Session and account association",
    supports: "That a fictional session or event was associated with an account or device object.",
    limits: "Which person physically controlled the session, why the session existed, or whether every action was authorized.",
    privacy: "Keep account identifiers bounded and avoid unrelated profile or communication data.",
  },
  {
    title: "Process or service state",
    supports: "That a fictional process or service state was represented at a defined time or interval.",
    limits: "Intent, origin of every action, persistence, causation, or maliciousness.",
    privacy: "Use only supplied conceptual state descriptions; do not expose real process lists or operational details.",
  },
  {
    title: "File-state metadata",
    supports: "That a fictional file reference, metadata value, or file-state relationship existed in the supplied evidence.",
    limits: "Who created or opened the file, why it existed, what every historical version contained, or whether it caused an event.",
    privacy: "Avoid unrelated personal file names, content, or broad storage review.",
  },
  {
    title: "Configuration and policy state",
    supports: "That a fictional setting, control, policy, or configuration state was represented for the endpoint.",
    limits: "That the state caused the incident, was intentionally changed, or was effective at every moment.",
    privacy: "Do not publish real internal configurations, security settings, or defensive details.",
  },
  {
    title: "Update and change history",
    supports: "That a fictional update, approved change, rollback, or version transition was recorded.",
    limits: "That the change caused a symptom or that an unrecorded change did not occur.",
    privacy: "Use fictional change references and public-safe descriptions only.",
  },
  {
    title: "Local event summaries",
    supports: "That the fictional endpoint recorded a supplied event related to the bounded question.",
    limits: "Complete chronology, person-level attribution, intent, impact, or system-wide scope.",
    privacy: "Use only pre-supplied event summaries and minimum fields needed for the question.",
  },
];

const evidence = [
  {
    id: "EP-01",
    source: "Fictional endpoint inventory",
    observation: "Endpoint D-17 is assigned to the Support Team and is an approved shared workstation.",
    supports: "The endpoint is not exclusively associated with one fictional person.",
    limits: "The record does not identify who physically used D-17 during the event.",
    health: "Healthy",
  },
  {
    id: "EP-02",
    source: "Fictional application-state record",
    observation: "Application Q is represented as present and active on D-17 during the approved review period.",
    supports: "Application Q was associated with the endpoint state in the supplied evidence.",
    limits: "Presence and active state do not prove which person used it or that it caused the unusual workflow event.",
    health: "Healthy",
  },
  {
    id: "EP-03",
    source: "Fictional session association",
    observation: "A supplied endpoint session record is associated with Account A from 14:01 through 14:19.",
    supports: "Account A had a session represented on the endpoint during the period.",
    limits: "The shared workstation and automation context prevent confident physical-person attribution.",
    health: "Conditional",
  },
  {
    id: "EP-04",
    source: "Fictional process-state summary",
    observation: "A supplied summary represents Service Helper as running at 14:04.",
    supports: "The fictional process state may overlap the workflow event.",
    limits: "The summary is transformed and does not establish who initiated the process or whether it caused the workflow change.",
    health: "Conditional",
  },
  {
    id: "EP-05",
    source: "Fictional configuration-state record",
    observation: "A temporary support setting was effective from 13:45 until 15:00.",
    supports: "The endpoint was allowed to operate under the temporary support policy during the event window.",
    limits: "The policy state does not prove every action was authorized or that the setting caused the event.",
    health: "Healthy",
  },
  {
    id: "EP-06",
    source: "Fictional approved change record",
    observation: "An approved application update completed at 13:20.",
    supports: "A change occurred before the review period.",
    limits: "Temporal proximity alone does not prove the update caused later service behavior.",
    health: "Healthy",
  },
];

const ambiguities = [
  ["Shared device", "More than one approved fictional person can use the endpoint.", "Device evidence may be misreported as person evidence.", "State device-level or account-level association and preserve person-level Unknown unless stronger evidence exists."],
  ["Automation", "A fictional application, service, scheduled workflow, or background task may create events automatically.", "Automated activity may be described as a person's manual action.", "Ask whether the supplied evidence distinguishes manual, automated, delegated, or system-generated activity."],
  ["Synchronization", "A fictional state may be reflected across devices or services after originating elsewhere.", "Presence on one endpoint may be treated as proof that the action began there.", "Preserve origin uncertainty and compare supplied synchronization context."],
  ["Stale state", "A fictional cached, delayed, retained, or historical state may remain visible after the real condition changed.", "Old state may be treated as current state.", "Record time, freshness, source health, expected update behavior, and owner clarification."],
  ["Transformed summary", "A fictional dashboard or report may summarize more detailed source evidence.", "Omitted fields or transformed meanings may disappear from analysis.", "Document lineage, transformation purpose, retained fields, omitted context, and limitations."],
  ["Source gap", "The fictional endpoint source may be Blind, Degraded, delayed, or retention-limited.", "No visible artifact may be reported as proof that no event happened.", "Use source-limited or Unknown language."],
];

const reportingPatterns = [
  ["User A ran Application Q on the shared workstation.", "The supplied fictional endpoint and session records associate Account A and Application Q with shared Endpoint D-17 during the review period; the current evidence does not independently establish the physical person who performed each action."],
  ["The update caused the service problem.", "The fictional update completed before the service symptom, but the current evidence establishes sequence only; causation remains unproven."],
  ["Nothing happened because no local event exists.", "No matching fictional local event is visible in the supplied source, but the source was Degraded during part of the period, so absence remains Conditional."],
  ["The process was malicious.", "The supplied fictional process-state summary shows the process was represented as running; intent and harmfulness are not established by the state alone."],
  ["The file proves data was stolen.", "The supplied fictional file-state metadata may support that a file reference existed, but it does not by itself establish who accessed it, why, whether content moved, or whether data exposure occurred."],
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

export default function EndpointArtifactConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A8</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A8.4</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Endpoint Evidence Reasoning</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8.4 Endpoint Artifact Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional investigators reason about endpoint evidence categories without collecting from real devices. Map supplied artifact descriptions to bounded questions, separate device and account associations from person-level attribution, preserve source-health and timeline limits, consider shared-device, automation, synchronization, and stale-state alternatives, and write findings that stay within what the evidence can support.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A8: Digital Forensics Concepts"
          lessonTitle="Endpoint Artifact Concepts"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented endpoint descriptions, evidence categories, owners, accounts, applications, records, timelines, and outcomes supplied in the lesson.",
            "I will not access, inspect, search, query, image, capture, extract, recover, or collect information from any real endpoint, account, application, storage system, process list, service, or network.",
            "I will treat endpoint artifacts as conceptual evidence categories rather than instructions for acquisition or examination.",
            "I will separate device, account, session, application, process, file, configuration, and update observations from person-level attribution, intent, causation, and impact.",
            "I will preserve shared-device, automation, synchronization, stale-state, transformation, source-health, timing, and privacy limitations.",
            "I will keep all CyberShield portfolio material fully fictional, public-safe, non-invasive, defensive, and free of real internal system details.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Shared Workstation Can Show Account Activity Without Identifying the Person">
          <p className="leading-8">
            A fictional endpoint record shows that Account A had a session on shared workstation D-17 during the same period that Application Q recorded an unusual workflow state. A rushed conclusion says, “Person A used D-17 to cause the event.” But the workstation is approved for multiple people, the session may include automated activity, and the endpoint evidence alone does not explain the workflow effect.
          </p>
          <p className="mt-4 leading-8">
            The stronger forensic question is not “Who did it?” It is: what does the supplied endpoint evidence actually establish? The answer may be that Account A, Application Q, and D-17 are associated with the same time window. That is useful. It is also narrower than person-level attribution, intent, or causation.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak conclusion</p>
              <p className="mt-2 leading-7">“The endpoint record proves Person A performed the unusual action.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional conclusion</p>
              <p className="mt-2 leading-7">“The supplied fictional records associate Account A and Application Q with shared Endpoint D-17 during the review period; physical-person attribution and causation remain unresolved.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A8.4">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Endpoint Evidence Is Rich in Context—and Rich in Ways to Overinterpret">
          <p className="leading-8">
            Endpoints sit close to users, applications, sessions, files, configuration, updates, and local system state. That makes endpoint evidence potentially useful for reconstructing part of a fictional investigation. It also creates a temptation to treat device-level evidence as a complete explanation.
          </p>
          <p className="mt-4 leading-8">
            Professional reasoning asks which object the evidence actually describes. A device record may describe the endpoint. A session record may describe an account association. A process-state summary may describe a program's state. A configuration record may describe a policy. None of those automatically identifies a person, proves intent, establishes causation, or measures impact.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Object discipline", "Say whether the fictional evidence describes a device, account, session, application, process, file, or setting."],
              ["Attribution limits", "Do not convert object association into person identity without stronger evidence."],
              ["Alternative explanations", "Consider shared use, automation, synchronization, stale state, and transformed summaries."],
              ["Privacy", "Use only the minimum fictional endpoint information necessary for the bounded question."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Eight High-Level Endpoint Artifact Categories">
          <p className="leading-8">
            A8.4 intentionally stays at the category level. The lesson asks what a supplied fictional artifact may mean and how it connects to a bounded question. It does not teach commands, tools, acquisition, extraction, recovery, or live examination.
          </p>
          <div className="mt-6 grid gap-5">
            {categories.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <h3 className="pt-2 text-xl font-black text-white">{item.title}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">May support</p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Does not prove</p>
                    <p className="mt-2 text-sm leading-6">{item.limits}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Privacy boundary</p>
                    <p className="mt-2 text-sm leading-6">{item.privacy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Vocabulary" title="Professional Terms for Endpoint Evidence Reasoning">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Endpoint Evidence Dashboard"
          subtitle="Northbridge A8 exercise — invented evidence only"
          metrics={[
            { label: "Endpoint evidence items", value: "6", note: "All pre-supplied and tied to one approved forensic question" },
            { label: "Shared endpoints", value: "1", note: "D-17 cannot support exclusive person attribution" },
            { label: "Conditional evidence items", value: "2", note: "Session association and transformed process-state summary" },
            { label: "Open owner questions", value: "4", note: "Automation, transformation, expected policy state, and workflow effect" },
          ]}
        />

        <SectionCard eyebrow="Fictional Endpoint Evidence Matrix" title="What Each Supplied Artifact Supports—and Where It Stops">
          <div className="grid gap-5">
            {evidence.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <h3 className="font-black text-white">{item.source}</h3>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">{item.health}</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Limitation", item.limits],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Attribution Warning"
          severity="High"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="Shared Endpoint D-17 and Account A overlap the event window, but the supplied evidence does not identify the physical person who performed each action."
          recommendation={["Endpoint D-17: approved shared workstation",
            "Account A: session associated from 14:01 through 14:19",
            "Automation context: not yet fully explained",
            "Person-level evidence: unavailable",
            "Required response: report device/account association and preserve person attribution as Unknown",].join(" • ")}
        />

        <SectionCard eyebrow="Interpretation Ladder" title="Do Not Jump from Observation to Blame">
          <p className="leading-8">
            Endpoint evidence becomes dangerous when a report skips reasoning levels. A supplied session record may support an account-device association. That association may be relevant to a workflow event. But relevance is not the same as attribution, intent, causation, or impact.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Observation", "The supplied fictional endpoint record associates Account A with Session S on Endpoint D-17 from 14:01 to 14:19.", "Directly traceable to the supplied evidence."],
              ["Supported relationship", "The fictional session overlaps the workflow-event period.", "Time types, source health, precision, and evidence identity are sufficiently clear."],
              ["Interpretation", "The session may be relevant to the workflow event because the times overlap and both involve Service S.", "Clearly labeled as interpretation with alternatives."],
              ["Attribution", "A specific fictional person physically performed the activity.", "Requires additional evidence beyond a shared endpoint or account association and may remain unresolved."],
              ["Intent", "The activity was deliberate or harmful.", "Requires evidence about purpose and context; endpoint artifacts alone usually cannot establish intent."],
              ["Causation", "The endpoint state caused the service symptom.", "Requires relationship evidence, alternatives, and sufficient source quality—not timing alone."],
              ["Impact", "The activity affected specific users, data, or services.", "Requires evidence from the affected workflow, service, data, or owner context."],
            ].map(([level, example, requirement], index) => (
              <article key={level} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{level}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{example}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence requirement</p>
                  <p className="mt-2 text-sm leading-6">{requirement}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Endpoint Evidence Records"
          logs={[
            "13:20 | UPDATE | evidence=EP-06 | application=Q | state=approved-update-complete | source_health=Healthy",
            "13:45 | POLICY | evidence=EP-05 | endpoint=D-17 | temporary-support-state=effective | end=15:00",
            "14:01 | SESSION | evidence=EP-03 | endpoint=D-17 | account=Account-A | shared_device=true | source_health=Conditional",
            "14:04 | PROCESS_STATE | evidence=EP-04 | process=Service-Helper | state=running | representation=summary | transform=owner-review-pending",
            "14:04 | APPLICATION | evidence=EP-02 | endpoint=D-17 | application=Q | state=active | source_health=Healthy",
            "14:08 | INVENTORY | evidence=EP-01 | endpoint=D-17 | ownership=Support-Team | exclusive_user=false",
            "14:12 | QUESTION | attribution=person-level | status=Unknown | reason=shared-device-plus-automation-context",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Endpoint Evidence"
          question="Which fictional conclusion is strongest?"
          evidence={[
            "D-17 is an approved shared workstation.",
            "Account A had a supplied session associated with D-17 during the review window.",
            "Application Q was represented as active during the same period.",
            "The process-state summary is transformed and automation context remains under owner review.",
          ]}
          options={[
            "Person A definitely used Application Q to cause the workflow event.",
            "Account A, Application Q, and shared Endpoint D-17 are associated with the review window; the supplied evidence does not independently establish the physical person, manual versus automated activity, intent, or causation.",
            "The process-state summary proves malicious activity.",
            "The shared device proves Account A was not used.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports object-level associations and timing. Shared-device and automation ambiguity prevent stronger person-level, intent, and causation conclusions."
        />

        <SectionCard eyebrow="Ambiguity Patterns" title="Six Reasons Endpoint Evidence Can Mean Less Than It First Appears">
          <div className="grid gap-5 md:grid-cols-2">
            {ambiguities.map(([pattern, explanation, danger, control]) => (
              <article key={pattern} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-purple-100">{pattern}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{explanation}</p>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Interpretation danger</p>
                  <p className="mt-2 text-sm leading-6">{danger}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional control</p>
                  <p className="mt-2 text-sm leading-6">{control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: Shared Endpoint, Shared Responsibility"
          scenario="A fictional case asks whether unusual activity associated with Account A occurred on shared Endpoint D-17. The endpoint is approved for several Support Team members. A session record ties Account A to D-17, but no supplied evidence identifies the physical person controlling the workstation at each moment."
          choices={[
            {
              label: "Choice A",
              response: "Report that Person A performed the activity because the account belongs to them.",
              outcome: "This turns account association into unsupported physical-person attribution.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Report that the supplied evidence associates Account A with shared Endpoint D-17 during the review period, preserve person-level attribution as Unknown, and document what additional owner context would be needed for a stronger conclusion.",
              outcome: "This keeps the finding useful while respecting the shared-device limitation.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Ignore the session record because the device is shared.",
              outcome: "Shared use limits attribution but does not erase the supported account-device association.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Question-to-Evidence Mapping" title="Choose Endpoint Evidence from the Question, Not from Curiosity">
          <p className="leading-8">
            A bounded forensic question should determine which endpoint evidence categories are necessary. The goal is not to review the entire fictional endpoint. It is to use the minimum supplied evidence needed to answer the approved question.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Was Endpoint D-17 an approved shared workstation during the review period?", "Device identity, inventory, ownership, and management-state evidence.", "Unrelated application content, personal files, broad account history, or private communications.", "Device ownership does not identify who physically used the endpoint."],
              ["Was Application Q represented as active during the workflow-event window?", "Application state, local event summary, source-health, and timeline context.", "Every application installed on the endpoint.", "Application activity does not automatically prove causation or harmful intent."],
              ["Was Account A associated with a session on D-17?", "Session association, identity approval, and endpoint identity evidence.", "Unrelated accounts or full personal profile information.", "Account association does not automatically establish the physical person."],
              ["Did a fictional configuration state allow temporary support behavior?", "Configuration, policy, approval, and change-state evidence.", "Real internal configuration details or unrelated endpoint settings.", "Allowed state does not prove that every resulting action was approved."],
            ].map(([question, useful, notNeeded, limit]) => (
              <article key={question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{question}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Useful categories</p>
                    <p className="mt-2 text-sm leading-6">{useful}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Not needed</p>
                    <p className="mt-2 text-sm leading-6">{notNeeded}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Conclusion limit</p>
                    <p className="mt-2 text-sm leading-6">{limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze a Configuration Record"
          question="A fictional temporary support policy was effective from 13:45 to 15:00, and an unusual service action occurred at 14:04. What is strongest?"
          evidence={[
            "The policy state was approved and effective during the event window.",
            "The policy allowed a broader set of fictional support actions than normal.",
            "The supplied evidence does not identify which exact policy capability was used.",
            "The workflow event occurred while the policy was active.",
          ]}
          options={[
            "The temporary policy caused the event.",
            "The event was automatically authorized because the policy was active.",
            "The policy state provides relevant context that broader support behavior was allowed during the event window, but it does not by itself prove which action occurred, whether it was approved, or whether the policy caused the event.",
            "The policy proves harmful intent.",
          ]}
          bestAnswer={2}
          explanation="Configuration state can explain what was possible or expected, but it does not automatically establish action, authorization of every action, intent, or causation."
        />

        <SectionCard eyebrow="Freshness and Stale State" title="Endpoint State May Describe the Past Better Than the Present">
          <p className="leading-8">
            Fictional endpoint evidence can be cached, delayed, synchronized, periodically updated, or retained after a state changes. A record that says “Application Q active” needs timing and freshness context. Was the state current at 14:04? Was it last refreshed at 13:30? Did a downstream summary update every fifteen minutes? Without that context, apparently exact state can become misleading.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Observed time", "When did the fictional evidence represent the state?"],
              ["Refresh time", "When was the fictional state last updated or confirmed?"],
              ["Expected delay", "Does the supplying source normally update immediately or later?"],
              ["Synchronization", "Could the fictional state have originated on another device or service?"],
              ["Source health", "Was the source Healthy, Conditional, Degraded, Blind, or Recovering?"],
              ["Owner explanation", "Can the fictional source owner explain freshness and meaning without exposing real system details?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Process and Application State" title="Running Does Not Mean Harmful—and Present Does Not Mean Used by a Person">
          <p className="leading-8">
            A fictional process-state summary or application-presence record can be highly relevant. It may help answer whether a program or service was represented on the endpoint. But the artifact usually cannot establish why the state existed, who initiated it, whether it was expected, or whether it caused another event.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Expected state", "Would the fictional application or process normally be present under the approved support workflow?"],
              ["Automation", "Could the fictional state arise automatically rather than through a person's direct action?"],
              ["Owner context", "Can the fictional application owner explain the meaning of the state?"],
              ["Time relationship", "Does the state overlap the event, or is it merely before or after?"],
              ["Source representation", "Is the evidence direct, summarized, transformed, cached, or delayed?"],
              ["Causal evidence", "Is there any supplied evidence connecting the state to the actual service or workflow effect?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Running Process"
          scenario="A supplied fictional endpoint summary shows Service Helper running at 14:04, the same time as an unusual workflow event. The application owner explains that Service Helper commonly runs automatically during approved support sessions. The current summary is transformed and does not show how the process was initiated."
          choices={[
            {
              label: "Choice A",
              response: "Conclude that Service Helper caused the unusual workflow event because it was running at the same time.",
              outcome: "Temporal overlap and process presence do not establish causation.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Report that Service Helper was represented as running during the event window, note that automatic execution is expected in some support sessions, preserve the transformed-summary limitation, and keep causation unresolved.",
              outcome: "This uses the supplied state while preserving expected behavior, transformation, and causal limits.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Ignore the process because expected software can never be relevant.",
              outcome: "Expected state may still be relevant context; it simply should not be overinterpreted.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Reporting Language" title="Write Endpoint Findings at the Level the Evidence Supports">
          <div className="grid gap-5">
            {reportingPatterns.map(([weak, strong], index) => (
              <article key={weak} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Reporting pattern {index + 1}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Overstated</p>
                    <p className="mt-2 text-sm leading-6">{weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Bounded</p>
                    <p className="mt-2 text-sm leading-6">{strong}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Privacy and Minimization" title="Endpoint Evidence Should Not Become a Tour of Someone's Digital Life">
          <p className="leading-8">
            A fictional endpoint can contain many categories of information, but only a small portion may be necessary for the approved forensic question. A8.4 treats minimization as part of evidence quality: unrelated applications, personal file names, communication content, browsing activity, account details, or other sensitive information should not enter the investigation just because an endpoint could theoretically contain them.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "State the exact fictional endpoint question before selecting evidence categories.",
              "Use only the minimum fictional fields needed to answer the approved question.",
              "Keep unrelated personal applications, files, communications, and account details outside scope.",
              "Use role-based fictional access and need-to-know distribution.",
              "Document sensitive-information encounters and stop or escalate when purpose changes.",
              "Use invented public-safe examples instead of real endpoint screenshots or records in the CyberShield portfolio.",
              "Avoid real device names, usernames, internal applications, configurations, security tools, file paths, or organization-specific details.",
              "Define fictional retention and disposition so endpoint evidence does not remain indefinitely.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-sm leading-7 text-yellow-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Common Mistakes" title="Where Endpoint Artifact Reasoning Fails">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Device equals person", "Shared endpoints, automation, delegated access, and other contexts weaken person-level attribution.", "Report the device or account association the evidence actually supports."],
              ["Presence equals use", "A fictional application or file may be present without proving active use by a person.", "Separate presence, active state, session association, and manual activity."],
              ["Running equals malicious", "Expected fictional services and applications may run automatically.", "Ask whether the state is expected and what supplied evidence connects it to the bounded question."],
              ["Before equals cause", "A fictional update or configuration change before a symptom may only establish sequence.", "Require stronger causal evidence and test alternatives."],
              ["No artifact equals no event", "Blind, Degraded, delayed, stale, filtered, or retention-limited sources can omit evidence.", "Use Unknown or source-limited absence language."],
              ["Summary equals source", "A fictional dashboard or transformed summary may omit context.", "Document lineage, transformation, retained fields, omitted context, and limitations."],
              ["Current-looking state is current", "Cached or synchronized fictional state may be stale.", "Record freshness, refresh time, source health, and owner explanation."],
              ["Endpoint review means everything", "Broad fictional endpoint review can expose unrelated personal or operational information.", "Use purpose limitation and minimum-necessary evidence categories."],
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

        <SectionCard eyebrow="Safe Fictional Lab" title="Build an Endpoint Artifact Reasoning Matrix">
          <p className="leading-8">
            Use only EP-01 through EP-06 and the invented endpoint descriptions supplied on this page. Do not access, inspect, query, search, image, capture, extract, recover, collect, preserve, or examine data from any real endpoint, account, application, process, file system, storage system, service, network, website, school device, or person.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Phase 1 — Define questions", ["Write four bounded fictional endpoint questions: device identity, application state, account-session association, and configuration context.", "For each question, identify the owner and decision need.", "List two questions that are explicitly out of scope."]],
              ["Phase 2 — Map categories", ["Map each question to the minimum useful fictional endpoint evidence categories.", "List which tempting but unrelated categories should remain excluded.", "Add source-health and privacy fields."]],
              ["Phase 3 — Analyze artifacts", ["Create a row for EP-01 through EP-06.", "Record observation, may-support, does-not-prove, source health, confidence, alternative explanation, and next owner question.", "Label person-level attribution Unknown where appropriate."]],
              ["Phase 4 — Test ambiguity", ["Apply shared-device, automation, synchronization, stale-state, transformed-summary, and source-gap alternatives.", "Explain which findings remain strong after each alternative.", "Identify which conclusions must become Conditional."]],
              ["Phase 5 — Write findings", ["Write one device-level finding, one account-level finding, one application-state finding, and one configuration-context finding.", "Add a non-proof statement to each.", "Write one rejected person-level attribution and explain why it is unsupported."]],
              ["Phase 6 — Create public-safe output", ["Summarize the fictional endpoint evidence for a leadership audience.", "Remove unnecessary technical and personal detail.", "State what the evidence supports, what remains Unknown, which owner questions remain open, and why no real endpoint data belongs in the portfolio."]],
            ].map(([phase, tasks]) => (
              <article key={phase as string} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{phase}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {(tasks as string[]).map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This lab is a classification, writing, and reasoning exercise using invented, pre-supplied evidence descriptions. It does not authorize real endpoint acquisition, imaging, memory capture, process inspection, file recovery, extraction, live collection, account access, private-message review, storage access, monitoring, surveillance, or configuration changes.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Narrow Finding When Leadership Wants a Person-Level Answer">
          <p className="leading-8">
            A fictional leadership reviewer asks, “Who used the workstation?” The supplied endpoint evidence strongly connects Account A, Application Q, and shared Endpoint D-17 to the event window, but no supplied evidence identifies the physical person. Your challenge is to defend a narrower conclusion without sounding evasive.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "State the strongest device-level and account-level findings.",
              "Explain why a shared endpoint weakens exclusive person attribution.",
              "Explain how automation further limits assumptions about manual activity.",
              "Identify which supplied evidence would be needed conceptually for a stronger attribution conclusion without proposing real collection.",
              "Write one leadership-safe Unknown statement.",
              "Explain why preserving Unknown protects fairness and report credibility.",
              "Show how the current evidence can still support service or control decisions without naming a person.",
              "Create one public-safe portfolio summary that demonstrates reasoning without real endpoint details.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.4 Endpoint Artifact Concepts Checklist"
          items={[
            "I can explain endpoint artifacts as conceptual evidence categories rather than acquisition instructions.",
            "I can distinguish device identity, application state, session association, process state, file-state metadata, configuration, update history, and local event summaries.",
            "I can state what each fictional category may support and what it cannot prove.",
            "I can map a bounded forensic question to minimum-necessary endpoint evidence categories.",
            "I can keep unrelated fictional endpoint information outside scope.",
            "I can preserve shared-device, automation, synchronization, stale-state, source-gap, and transformation alternatives.",
            "I can separate observation, supported relationship, interpretation, attribution, intent, causation, and impact.",
            "I can explain why account association does not automatically identify the physical person.",
            "I can explain why application presence or process state does not automatically prove use, harmfulness, or causation.",
            "I can use source health and freshness to limit absence or current-state conclusions.",
            "I can write bounded endpoint findings with explicit non-proof statements and owner questions.",
            "I can keep every endpoint example fully fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <MiniQuiz
          title="A8.4 Mini Quiz: Endpoint Artifact Concepts"
          questions={[
            {
              question: "A fictional shared endpoint shows a session associated with Account A. What is strongest?",
              choices: ["Person A definitely used the device.", "The supplied evidence supports an Account A session association with the endpoint; person-level attribution requires additional evidence and may remain Unknown.", "The session proves harmful intent.", "The shared endpoint makes the session record useless."],
              answer: 1,
              explanation: "Shared-device context limits physical-person attribution while preserving the supported account-endpoint association.",
            },
            {
              question: "A fictional application is represented as present on an endpoint. What does that alone prove?",
              choices: ["A specific person used it.", "It caused the service problem.", "Only that the application was represented as present in the supplied evidence, subject to source and freshness limits.", "It was malicious."],
              answer: 2,
              explanation: "Presence is an object-state observation, not automatic proof of use, intent, or causation.",
            },
            {
              question: "A fictional process is running during the event window, but the application owner says it commonly starts automatically. What is strongest?",
              choices: ["The process caused the event.", "The process state is relevant context, but automated expected behavior and causal limits must be preserved.", "The process can be ignored completely.", "A running process proves manual activity."],
              answer: 1,
              explanation: "Expected automation is a plausible alternative explanation that limits manual-action and causation claims.",
            },
            {
              question: "Why can stale fictional endpoint state be misleading?",
              choices: ["Because old evidence is always false.", "Because cached, delayed, synchronized, or retained state may describe an earlier condition rather than the current one.", "Because endpoint evidence never has timestamps.", "Because stale state proves tampering."],
              answer: 1,
              explanation: "Freshness matters. A state can remain visible after the underlying condition changed.",
            },
            {
              question: "A fictional update completed before a service symptom. What does timing alone establish?",
              choices: ["The update caused the symptom.", "The update was malicious.", "Only that the update preceded the symptom, assuming the time fields are reliable.", "The symptom was expected."],
              answer: 2,
              explanation: "Sequence is not causation. Additional relationship evidence and alternatives are required.",
            },
            {
              question: "A supplied fictional endpoint source is Degraded and shows no matching local event. What is strongest?",
              choices: ["No event occurred.", "The absence should remain Conditional or Unknown because source coverage is incomplete.", "The device was safe.", "The account was unused."],
              answer: 1,
              explanation: "A Degraded source weakens absence conclusions and should not be treated as complete coverage.",
            },
            {
              question: "What is the strongest reason to map endpoint evidence categories from the forensic question?",
              choices: ["To make the evidence matrix shorter.", "To ensure the investigation uses only evidence necessary for the approved purpose and avoids unrelated endpoint information.", "To avoid documenting source health.", "To guarantee person-level attribution."],
              answer: 1,
              explanation: "Question-driven evidence selection supports purpose limitation, privacy, relevance, and stronger reasoning.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Endpoint Artifact Reasoning Package"
          prompt="Create a fully fictional A8.4 Endpoint Artifact Reasoning Package for Northbridge. Include at least eight invented endpoint evidence items across device identity, application state, session association, process state, file-state metadata, configuration, update history, and local event summaries. For each item include evidence ID, bounded question, source owner, source health, time context, freshness, observation, what it may support, what it does not prove, privacy limit, alternative explanation, attribution limit, confidence, next owner question, and reporting language. Include one shared-device case, one automation case, one synchronization case, one stale-state case, one transformed-summary case, one Degraded-source case, one rejected causation claim, one rejected person-level attribution claim, five non-proof statements, a leadership summary, and a public-safe portfolio summary. Every organization, person, device, account, application, process, file, source, record, time, finding, and outcome must be invented."
          tips={[
            "Keep evidence categories high-level and conceptual; do not include tools, commands, acquisition, extraction, or recovery procedures.",
            "Say exactly which object the fictional evidence describes: device, account, session, application, process, file, configuration, or update.",
            "Use shared-device, automation, synchronization, stale-state, source-health, and transformation alternatives before person-level conclusions.",
            "Write sequence separately from causation and account association separately from physical-person attribution.",
            "Use minimum-necessary fields and keep unrelated personal or operational information out of the artifact.",
            "Make the final portfolio artifact fully fictional, defensive, non-invasive, privacy-safe, and suitable for public sharing.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A8.5 Memory and Storage Evidence Concepts?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for endpoint evidence categories, object-level observations, question-to-evidence mapping, shared-device ambiguity, automation, synchronization, stale state, source health, attribution limits, causation limits, privacy, and bounded reporting.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain what an endpoint artifact category may support without turning the lesson into real evidence collection.",
              "I can distinguish a device observation from an account, session, application, process, file, configuration, or update observation.",
              "I can map a bounded fictional question to the minimum endpoint evidence categories needed.",
              "I can keep person-level attribution Unknown when a shared endpoint or account association is insufficient.",
              "I can recognize automation as an alternative to assuming manual activity.",
              "I can recognize synchronization and stale state as limits on origin and current-state conclusions.",
              "I can explain why process or application presence does not automatically prove harmfulness or causation.",
              "I can use Degraded or Blind source health to limit absence conclusions.",
              "I can write endpoint findings with explicit non-proof statements.",
              "I can keep all endpoint learning material fictional, pre-supplied, non-invasive, privacy-safe, and public-safe.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Endpoint artifacts are high-level evidence categories that may describe fictional device, application, session, process, file, configuration, update, or event state.",
            "A8.4 teaches reasoning about supplied fictional endpoint evidence and never teaches acquisition, extraction, imaging, capture, recovery, or real-device inspection.",
            "The strongest endpoint finding names the exact object the evidence describes instead of jumping to person-level attribution.",
            "Shared devices, automation, synchronization, stale state, transformed summaries, and source gaps can significantly limit conclusions.",
            "Application presence does not automatically prove use, process state does not automatically prove harmfulness, and update sequence does not automatically prove causation.",
            "Account or session association does not automatically identify the physical person controlling the endpoint.",
            "Question-driven evidence selection improves relevance, privacy, and forensic quality by preventing unnecessary endpoint review.",
            "Source health and freshness determine whether missing or current-looking endpoint evidence can support strong conclusions.",
            "Professional reports separate observation, supported relationship, interpretation, attribution, intent, causation, and impact.",
            "CyberShield endpoint evidence examples must remain fully fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">This Lesson Teaches Endpoint Evidence Reasoning, Not Endpoint Examination</h2>
          <p className="mt-3 leading-7">
            Nothing in A8.4 authorizes access, investigation, monitoring, querying, collection, preservation, imaging, memory capture, extraction, credential recovery, process inspection, file recovery, packet capture, live acquisition, storage access, account access, private-message review, configuration changes, surveillance, recovery actions, or examination involving any real endpoint, device, account, application, process, file system, service, storage system, network, organization, incident, classmate, teacher, family member, or other person. Use only fully invented, pre-supplied endpoint evidence descriptions.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Memory and Storage Evidence Concepts</h2>
          <p className="mt-3 max-w-3xl leading-7">
            A8.4 established how to reason about endpoint evidence categories without overinterpreting device or account state. A8.5 moves into high-level memory and storage evidence concepts: temporary versus persistent state, volatility, retention, synchronization, backups, encryption, missing evidence, and preservation priorities—still without teaching capture, imaging, extraction, bypass, or recovery procedures.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}