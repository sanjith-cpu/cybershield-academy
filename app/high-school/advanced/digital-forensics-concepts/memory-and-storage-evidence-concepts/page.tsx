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
const previousLesson = `${modulePath}/endpoint-artifact-concepts`;
const nextLesson = `${modulePath}/browser-and-account-activity-concepts`;

const objectives = [
  "Distinguish fictional temporary, volatile, persistent, synchronized, backed-up, archived, and unavailable evidence states without teaching acquisition, capture, imaging, extraction, or recovery procedures.",
  "Explain how fictional memory-related and storage-related evidence differ in persistence, freshness, retention, overwrite risk, availability, and interpretive limits.",
  "Evaluate fictional evidence availability using source health, retention windows, encryption state, synchronization, backup status, ownership, and timing instead of treating missing evidence as proof of absence.",
  "Prioritize fictional preservation questions conceptually by considering evidence value, volatility, authority, privacy, continuity, owner responsibility, and time sensitivity.",
  "Write bounded fictional findings that separate evidence availability from event truth and preserve Unknown when temporary, overwritten, expired, inaccessible, synchronized, or source-limited evidence cannot support a conclusion.",
];

const vocabulary = [
  {
    term: "Volatile evidence",
    definition:
      "A fictional evidence state that may change or disappear quickly as system state changes.",
  },
  {
    term: "Persistent evidence",
    definition:
      "A fictional evidence state expected to remain available beyond immediate runtime or session state, subject to retention and lifecycle limits.",
  },
  {
    term: "Temporary state",
    definition:
      "A fictional condition that may exist only during an active session, process, transaction, or short-lived system condition.",
  },
  {
    term: "Durable state",
    definition:
      "A fictional condition represented in longer-lived storage or records and expected to survive normal short-term state changes.",
  },
  {
    term: "Retention window",
    definition:
      "The fictional period during which an evidence source is expected to keep a category of records.",
  },
  {
    term: "Overwrite risk",
    definition:
      "The fictional possibility that later system activity may replace or remove older evidence state.",
  },
  {
    term: "Synchronization",
    definition:
      "A fictional process that reflects state or records across devices, services, or storage locations, complicating origin and timing.",
  },
  {
    term: "Backup",
    definition:
      "A fictional retained copy or recovery-oriented representation that may preserve earlier state but may not match current state exactly.",
  },
  {
    term: "Archive",
    definition:
      "A fictional longer-term retained representation governed by purpose, access, and retention rules.",
  },
  {
    term: "Encryption state",
    definition:
      "A fictional evidence characteristic describing whether information is represented as protected and what authorized access limitations may exist.",
  },
  {
    term: "Availability state",
    definition:
      "A fictional classification such as Available, Conditional, Degraded, Blind, Expired, Overwritten, Archived, or Unknown.",
  },
  {
    term: "Preservation priority",
    definition:
      "A fictional reasoning decision about which evidence categories require timely owner action because their value may change or disappear.",
  },
];

const evidenceStates = [
  {
    state: "Temporary / volatile",
    description:
      "Fictional state may change quickly as sessions, applications, services, or active system conditions change.",
    maySupport:
      "Current or near-current state questions when the supplied evidence is timely and well documented.",
    limit:
      "Absence later does not prove the state never existed earlier.",
    ownerQuestion:
      "Which qualified fictional owner can explain expected lifetime and source behavior?",
  },
  {
    state: "Persistent / durable",
    description:
      "Fictional state is represented in longer-lived records or storage.",
    maySupport:
      "Historical state or activity questions within the retention period.",
    limit:
      "Persistence does not prove the record is complete, current, or sufficient for attribution.",
    ownerQuestion:
      "What retention, update, transformation, and source-health limits apply?",
  },
  {
    state: "Synchronized",
    description:
      "Fictional state may be copied or reflected across multiple devices or services.",
    maySupport:
      "That the state existed in one or more synchronized contexts.",
    limit:
      "Presence in one location may not establish where the activity originated.",
    ownerQuestion:
      "What is the fictional synchronization relationship and expected delay?",
  },
  {
    state: "Backed up",
    description:
      "A fictional copy may preserve an earlier state for continuity or recovery purposes.",
    maySupport:
      "Earlier retained state when version and timing are known.",
    limit:
      "A backup may not represent the current system and may omit changes after its creation.",
    ownerQuestion:
      "What fictional version, time, scope, and retention policy does the backup represent?",
  },
  {
    state: "Archived",
    description:
      "Fictional evidence is retained for longer-term governance or case purposes.",
    maySupport:
      "Historical review when archive provenance and access are clear.",
    limit:
      "Archived evidence may be summarized, transformed, incomplete, or purpose-limited.",
    ownerQuestion:
      "What was archived, what was omitted, and under which approved purpose?",
  },
  {
    state: "Unavailable / Unknown",
    description:
      "Fictional evidence cannot currently be reviewed because it expired, was overwritten, the source is Blind, access is unavailable, or provenance is insufficient.",
    maySupport:
      "A conclusion about evidence availability itself.",
    limit:
      "Unavailability does not prove the underlying event did or did not occur.",
    ownerQuestion:
      "Which source-health, retention, ownership, or lifecycle condition explains the gap?",
  },
];

const evidenceMatrix = [
  {
    id: "MS-01",
    category: "Temporary session-state summary",
    state: "Temporary / volatile",
    observation:
      "A fictional session-state record shows Account A active on Service S at 14:03.",
    supports:
      "Account A was associated with an active session at that recorded moment.",
    limits:
      "The supplied record does not show every earlier or later session state and does not identify the physical person.",
    sourceHealth: "Healthy",
    confidence: "High",
    priority: "Time-sensitive",
  },
  {
    id: "MS-02",
    category: "Persistent application event record",
    state: "Persistent",
    observation:
      "A fictional application record shows one workflow transition at 14:04.",
    supports:
      "The application recorded the transition within the approved window.",
    limits:
      "The record does not prove cause, intent, or complete system scope.",
    sourceHealth: "Conditional",
    confidence: "Moderate",
    priority: "Normal",
  },
  {
    id: "MS-03",
    category: "Synchronized state summary",
    state: "Synchronized",
    observation:
      "A fictional state appears on Endpoint D-17 and Service S after synchronization.",
    supports:
      "The state was reflected in both locations.",
    limits:
      "The supplied summary does not independently establish which location originated the change.",
    sourceHealth: "Healthy",
    confidence: "Moderate",
    priority: "Normal",
  },
  {
    id: "MS-04",
    category: "Backup snapshot summary",
    state: "Backed up",
    observation:
      "A fictional backup represents Application Q state as of 13:30.",
    supports:
      "The backup may describe state at or before 13:30.",
    limits:
      "It cannot represent changes after the backup point and does not prove current state at 14:04.",
    sourceHealth: "Healthy",
    confidence: "High",
    priority: "Low",
  },
  {
    id: "MS-05",
    category: "Expired short-retention source",
    state: "Unavailable / expired",
    observation:
      "A fictional local state source retained records for only thirty minutes and the relevant period has expired.",
    supports:
      "The source can no longer answer the historical question directly.",
    limits:
      "Expired evidence does not prove the event did not occur.",
    sourceHealth: "Blind for historical period",
    confidence: "High about unavailability",
    priority: "Closed gap",
  },
  {
    id: "MS-06",
    category: "Archived service summary",
    state: "Archived",
    observation:
      "A fictional archive contains a weekly summary rather than event-level records.",
    supports:
      "The archive may support high-level service-state trends.",
    limits:
      "It cannot resolve exact event timing or account-level activity.",
    sourceHealth: "Conditional",
    confidence: "Moderate",
    priority: "Low",
  },
];

const availabilityQuestions = [
  {
    question:
      "Is the fictional evidence expected to persist?",
    why:
      "Temporary state may disappear even when the underlying event really occurred.",
    weak:
      "Treat later absence as proof that nothing happened.",
    strong:
      "Document expected lifetime and preserve Unknown when the evidence window is gone.",
  },
  {
    question:
      "What is the fictional retention window?",
    why:
      "A source may be complete for current review but unable to answer older questions.",
    weak:
      "Assume all historical periods are equally reviewable.",
    strong:
      "Tie conclusions to the period the source actually retained.",
  },
  {
    question:
      "Could fictional synchronization affect origin?",
    why:
      "A state reflected on multiple systems may have originated elsewhere.",
    weak:
      "Treat presence as proof of local origin.",
    strong:
      "Separate reflected presence from origin and preserve synchronization delay.",
  },
  {
    question:
      "Does a fictional backup represent the relevant moment?",
    why:
      "Backups preserve versions, not continuous real-time state.",
    weak:
      "Use a backup as proof of current state.",
    strong:
      "Record backup version, creation time, scope, and post-backup limitation.",
  },
  {
    question:
      "Is fictional access currently available?",
    why:
      "Evidence may exist but remain unavailable to the current investigation owner.",
    weak:
      "Treat inaccessible as nonexistent.",
    strong:
      "Separate existence, availability, authorization, and reviewability.",
  },
  {
    question:
      "What source-health limits apply?",
    why:
      "A source may be Blind, Degraded, delayed, transformed, or incomplete.",
    weak:
      "Use missing records as a confident absence conclusion.",
    strong:
      "Use Conditional or Unknown when coverage is insufficient.",
  },
];

const priorityFramework = [
  {
    factor: "Volatility",
    question:
      "Could the fictional evidence state change or disappear quickly?",
    effect:
      "Higher volatility may increase the urgency of qualified owner action.",
  },
  {
    factor: "Decision value",
    question:
      "How directly does the fictional evidence help answer the approved forensic question?",
    effect:
      "High-value evidence may deserve priority over technically interesting but irrelevant material.",
  },
  {
    factor: "Authority",
    question:
      "Is the fictional evidence category covered by current purpose and authorization?",
    effect:
      "Urgency never overrides authority or scope.",
  },
  {
    factor: "Privacy",
    question:
      "Would using the fictional evidence expose sensitive or unrelated information?",
    effect:
      "Minimization and qualified review may reduce or delay use.",
  },
  {
    factor: "Availability",
    question:
      "Is the fictional evidence currently Available, Conditional, Degraded, Blind, Expired, or Archived?",
    effect:
      "Unavailable evidence may require Unknown rather than broader collection.",
  },
  {
    factor: "Owner readiness",
    question:
      "Is a qualified fictional owner available to explain source meaning and lifecycle?",
    effect:
      "Evidence without a qualified owner may remain Conditional.",
  },
  {
    factor: "Continuity",
    question:
      "Would preservation decisions conceptually affect fictional service continuity or other mission needs?",
    effect:
      "Professional planning balances evidence needs with mission and safety.",
  },
  {
    factor: "Alternatives",
    question:
      "Can another fictional evidence category answer the question with less risk or stronger integrity?",
    effect:
      "Use the minimum necessary evidence path rather than automatically pursuing the most volatile category.",
  },
];

const memoryStorageContrast = [
  {
    topic: "Persistence",
    memoryConcept:
      "Fictional memory-related state is generally treated as more temporary or volatile.",
    storageConcept:
      "Fictional storage-related state is generally treated as more durable, subject to retention and overwrite.",
  },
  {
    topic: "Freshness",
    memoryConcept:
      "May reflect near-current system state when the supplied record is timely.",
    storageConcept:
      "May reflect historical or retained state that can be current, stale, archived, or versioned.",
  },
  {
    topic: "Loss risk",
    memoryConcept:
      "May disappear as sessions, processes, or active state changes.",
    storageConcept:
      "May expire, be overwritten, rotated, summarized, synchronized, or removed under lifecycle rules.",
  },
  {
    topic: "Interpretation",
    memoryConcept:
      "Temporary presence may describe active state but does not automatically prove intent or person-level activity.",
    storageConcept:
      "Persistent presence may describe retained state but does not automatically prove current state or complete history.",
  },
  {
    topic: "Preservation reasoning",
    memoryConcept:
      "Potentially time-sensitive, but any action remains subject to authority, scope, privacy, and qualified ownership.",
    storageConcept:
      "Potentially less time-sensitive, but retention, access, backup, archive, and overwrite policies still matter.",
  },
  {
    topic: "Absence",
    memoryConcept:
      "Later absence may mean the temporary state ended.",
    storageConcept:
      "Absence may reflect retention, overwrite, filtering, deletion, synchronization, archive design, or source gaps.",
  },
];

const missingEvidencePatterns = [
  {
    pattern: "Expired retention",
    observation:
      "The fictional source no longer keeps records from the requested historical period.",
    wrong:
      "No record exists, so no event occurred.",
    strong:
      "The source cannot answer the historical question; underlying event status remains Unknown unless other evidence supports it.",
  },
  {
    pattern: "Overwritten state",
    observation:
      "Later fictional activity replaced earlier state in a short-lived source.",
    wrong:
      "The earlier state never existed.",
    strong:
      "Current absence is consistent with overwrite and cannot resolve earlier state by itself.",
  },
  {
    pattern: "Blind source",
    observation:
      "The fictional source was unavailable during part of the review period.",
    wrong:
      "The system was quiet during the gap.",
    strong:
      "The gap is evidence-limited and should remain Unknown.",
  },
  {
    pattern: "Synchronized copy",
    observation:
      "A fictional state exists in two locations after synchronization.",
    wrong:
      "Both locations independently created the state.",
    strong:
      "The evidence supports reflected presence; origin remains unresolved without stronger context.",
  },
  {
    pattern: "Backup mismatch",
    observation:
      "A fictional backup predates the event by thirty minutes.",
    wrong:
      "The backup proves the event state was impossible.",
    strong:
      "The backup describes an earlier version and cannot resolve later changes.",
  },
  {
    pattern: "Encrypted / access-limited",
    observation:
      "A fictional evidence category is represented as protected and unavailable to the current reviewer.",
    wrong:
      "Protected means suspicious.",
    strong:
      "Access limitation is a governance and availability fact, not evidence of intent or wrongdoing.",
  },
];

const reportingPatterns = [
  {
    weak:
      "No memory evidence exists, so the process never ran.",
    stronger:
      "The supplied fictional temporary-state evidence is unavailable for the relevant historical moment; the process-state question remains Unknown.",
  },
  {
    weak:
      "The backup proves the application was unchanged during the incident.",
    stronger:
      "The fictional backup represents application state as of 13:30; it does not establish changes that may have occurred afterward.",
  },
  {
    weak:
      "The file was missing, so it was deleted.",
    stronger:
      "The supplied fictional storage summary does not show the file reference; retention, synchronization, overwrite, source coverage, and other explanations remain possible.",
  },
  {
    weak:
      "Encrypted evidence means someone hid something.",
    stronger:
      "The fictional evidence is represented as access-limited; that fact does not establish intent, wrongdoing, or the content of the protected information.",
  },
  {
    weak:
      "The synchronized state originated on D-17.",
    stronger:
      "The fictional state is reflected on D-17 and Service S after synchronization; current evidence does not independently establish origin.",
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

export default function MemoryAndStorageEvidenceConceptsPage() {
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
              Lesson A8.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Evidence Availability
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8.5 Memory and Storage Evidence Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional investigators reason about
            temporary and persistent evidence, volatility, retention,
            synchronization, backups, archives, encryption state, overwrite
            risk, availability, preservation priorities, and missing evidence
            without teaching capture, imaging, extraction, bypass, recovery, or
            examination procedures.
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
          lessonTitle="Memory and Storage Evidence Concepts"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented evidence states, sources, owners, records, retention windows, backups, archives, and timelines supplied in the lesson.",
            "I will not capture memory, image storage, extract files, recover deleted data, bypass encryption, inspect real devices, or access real accounts or storage systems.",
            "I will treat memory and storage as conceptual evidence categories and focus on availability, persistence, timing, source health, privacy, and limitations.",
            "I will not interpret missing fictional evidence as proof that an event never happened.",
            "I will separate evidence availability from evidence meaning, attribution, intent, causation, and impact.",
            "I will keep every CyberShield example fully fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Evidence Can Disappear Without the Event Disappearing from History"
        >
          <p className="leading-8">
            A fictional investigator asks whether a temporary process state was
            present at 14:04. By the time the case reaches review, the short-lived
            state is gone. A persistent application record still exists, but the
            temporary-state source retained only recent state and no longer
            covers 14:04.
          </p>

          <p className="mt-4 leading-8">
            A weak conclusion says, “There is no temporary-state evidence, so
            the process was never present.” A professional conclusion separates
            two questions: is evidence available now, and what happened then?
            The first can be answered. The second may remain Unknown.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                “The temporary record is missing, so the event did not occur.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional conclusion
              </p>
              <p className="mt-2 leading-7">
                “The temporary-state source no longer covers the relevant
                moment, so the historical state cannot be confirmed or excluded
                from that source alone.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A8.5"
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
          title="Evidence Availability Has a Lifecycle"
        >
          <p className="leading-8">
            Some fictional evidence is short-lived. Some lasts for days, weeks,
            or longer. Some is synchronized, some is summarized, some is
            archived, and some disappears because a retention window ends.
            Backups can preserve earlier versions while missing later changes.
            Protected evidence can exist without being available to the current
            reviewer.
          </p>

          <p className="mt-4 leading-8">
            This means investigators must understand not only what a record says
            but also how long that evidence category is expected to exist, how
            fresh it is, which version it represents, where it may be reflected,
            whether the source is complete, and which owner controls access and
            retention.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Volatility",
                "Some fictional evidence can change quickly as active state changes.",
              ],
              [
                "Persistence",
                "Longer-lived fictional evidence may survive but still have retention and overwrite limits.",
              ],
              [
                "Availability",
                "Evidence can exist conceptually while being unavailable, inaccessible, expired, or source-limited.",
              ],
              [
                "Interpretation",
                "Missing or old evidence should not be converted into unsupported event conclusions.",
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
          title="Six Fictional Evidence Availability States"
        >
          <div className="grid gap-5">
            {evidenceStates.map((item, index) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.state}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      May support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.maySupport}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Owner question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.ownerQuestion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Vocabulary"
          title="Professional Terms for Memory and Storage Evidence"
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
          title="Fictional Evidence Availability Dashboard"
          subtitle="Northbridge A8 exercise — invented values only"
          metrics={[
            {
              label: "Evidence categories",
              value: "6",
              note: "Temporary, persistent, synchronized, backup, expired, and archived",
            },
            {
              label: "Time-sensitive items",
              value: "1",
              note: "Temporary session-state evidence",
            },
            {
              label: "Unavailable historical source",
              value: "1",
              note: "Short-retention source expired before review",
            },
            {
              label: "Origin uncertainties",
              value: "1",
              note: "Synchronized state does not independently prove origin",
            },
          ]}
        />

        <SectionCard
          eyebrow="Evidence Matrix"
          title="Temporary, Persistent, Synchronized, Backed-Up, and Archived State"
        >
          <div className="mt-2 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="font-black text-white">{item.category}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.state}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">
                    {item.sourceHealth}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Limitation", item.limits],
                    ["Confidence", item.confidence],
                    ["Priority", item.priority],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Evidence Availability Warning"
          severity="Medium"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="A short-retention source no longer covers the historical moment the investigation needs."
          recommendation={["Evidence category: temporary local state",
            "Retention window: thirty fictional minutes",
            "Relevant time: outside retained period",
            "Current availability: expired",
            "Required conclusion: source cannot confirm or exclude the historical state",].join(" • ")}
        />

        <SectionCard
          eyebrow="Memory vs. Storage"
          title="Temporary and Persistent Evidence Answer Different Questions"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left">
              <thead className="bg-slate-950">
                <tr>
                  {["Topic", "Memory-Related Concept", "Storage-Related Concept"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="border-b border-slate-700 px-5 py-4 text-sm font-black text-cyan-200"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {memoryStorageContrast.map((item) => (
                  <tr
                    key={item.topic}
                    className="border-b border-slate-800 bg-slate-900/50 align-top"
                  >
                    <td className="px-5 py-4 font-black text-white">
                      {item.topic}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-blue-100">
                      {item.memoryConcept}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-emerald-100">
                      {item.storageConcept}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Evidence Availability Records"
          logs={[
            "14:03 | TEMP_STATE | evidence=MS-01 | account=Account-A | service=Service-S | availability=Available",
            "14:04 | APP_EVENT | evidence=MS-02 | workflow=Workflow-W | persistence=Persistent | source_health=Conditional",
            "14:05 | SYNC_STATE | evidence=MS-03 | endpoint=D-17 | service=Service-S | origin=Unknown",
            "13:30 | BACKUP | evidence=MS-04 | application=Q | state_version=13:30 | later_changes=not-covered",
            "15:10 | RETENTION | evidence=MS-05 | historical_period=expired | event_status=Unknown",
            "16:00 | ARCHIVE | evidence=MS-06 | representation=weekly-summary | event-level-resolution=not-available",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze Missing Temporary Evidence"
          question="Which fictional conclusion is strongest when a temporary-state source no longer retains the relevant historical period?"
          evidence={[
            "The source retained only thirty minutes of temporary state.",
            "The requested historical moment is older than the retention window.",
            "A persistent application record still shows a related event.",
            "No current temporary-state record can represent the earlier moment.",
          ]}
          options={[
            "The temporary state never existed.",
            "The expired source proves the application record is wrong.",
            "The temporary-state source can no longer confirm or exclude the historical state; the persistent record may still support a related event, but the exact temporary state remains Unknown.",
            "The event must have been malicious.",
          ]}
          bestAnswer={2}
          explanation="Evidence unavailability is not evidence of event absence. The strongest conclusion preserves what the persistent record supports while keeping the expired temporary-state question Unknown."
        />

        <SectionCard
          eyebrow="Evidence Availability Questions"
          title="Ask Why Evidence Is Missing Before Interpreting the Gap"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {availabilityQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.why}
                </p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak interpretation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional interpretation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Preservation Priority"
          title="Urgency Does Not Override Authority"
        >
          <p className="leading-8">
            Some fictional evidence categories may be more time-sensitive than
            others. That can change coordination priority, but it does not
            create permission. Professional preservation reasoning combines
            volatility with authority, privacy, decision value, continuity,
            source health, ownership, and alternatives.
          </p>

          <div className="mt-6 grid gap-5">
            {priorityFramework.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.factor}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.question}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Effect on priority
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.effect}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Time-Sensitive Evidence Category"
          scenario="A fictional investigation identifies a temporary evidence category that may disappear quickly. The category is potentially relevant, but current scope approval covers only persistent application records. A privacy reviewer and evidence owner are available."
          choices={[
            {
              label: "Choice A",
              response:
                "Proceed immediately because volatility makes the evidence important.",
              outcome:
                "Time sensitivity does not create authority. This bypasses scope and privacy controls.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Document the volatility and decision value, request a bounded scope decision from the proper fictional owner, involve the privacy reviewer, and preserve Unknown if approval cannot be established in time.",
              outcome:
                "This balances time sensitivity with authority, privacy, and evidence quality.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Ignore all temporary evidence categories because they are too risky.",
              outcome:
                "Temporary evidence can be relevant; the correct response is governed prioritization rather than automatic exclusion.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Synchronization"
          title="Presence in Two Places Does Not Automatically Reveal Origin"
        >
          <p className="leading-8">
            Fictional synchronized state may appear on an endpoint, service,
            account, or storage location after being copied or reflected from
            somewhere else. Investigators should distinguish where a state is
            visible from where it began.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Origin",
                "Which fictional location first created or changed the state, if known?",
              ],
              [
                "Reflection",
                "Which fictional locations merely display the synchronized state?",
              ],
              [
                "Delay",
                "How much fictional synchronization delay could exist?",
              ],
              [
                "Direction",
                "Is fictional synchronization one-way, two-way, or owner-unknown?",
              ],
              [
                "Conflict",
                "What happens when fictional synchronized locations disagree?",
              ],
              [
                "Conclusion",
                "Can the evidence support presence without claiming origin?",
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

        <AnalyzeEvidenceCard
          title="Analyze Synchronized State"
          question="A fictional state is visible on Endpoint D-17 and Service S after synchronization. Which conclusion is strongest?"
          evidence={[
            "The state appears in both locations.",
            "Synchronization is known to occur between the endpoint and service.",
            "The supplied evidence does not identify the direction of the specific change.",
            "The timing difference is within the expected fictional synchronization delay.",
          ]}
          options={[
            "D-17 definitely originated the state.",
            "Service S definitely originated the state.",
            "The supplied evidence supports reflected presence in both locations; origin remains unresolved.",
            "The synchronization proves malicious activity.",
          ]}
          bestAnswer={2}
          explanation="Synchronized presence is useful, but without stronger origin evidence the direction of the change remains Unknown."
        />

        <SectionCard
          eyebrow="Backups and Archives"
          title="Historical Copies Preserve Versions, Not Continuous Reality"
        >
          <p className="leading-8">
            Backups and archives can be valuable fictional evidence sources, but
            each represents a specific retention design. A backup may preserve a
            point-in-time version. An archive may store summaries rather than
            event-level detail. Neither should be treated as a continuous,
            complete record unless the evidence owner supports that conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Version",
                "Which fictional state or period does the backup or archive represent?",
              ],
              [
                "Creation time",
                "When was the fictional retained copy produced relative to the event?",
              ],
              [
                "Scope",
                "Which records, fields, services, or categories are included or excluded?",
              ],
              [
                "Transformation",
                "Was the fictional retained representation summarized, compressed, filtered, or otherwise changed?",
              ],
              [
                "Retention",
                "How long is the fictional backup or archive expected to remain?",
              ],
              [
                "Current-state limit",
                "Which changes after the retained version are outside its ability to describe?",
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
          title="Scenario Decision Lab 2: The Backup That Predates the Event"
          scenario="A fictional backup represents Application Q as of 13:30. The unusual workflow event occurred at 14:04. A reviewer argues that because the backup looks normal, Application Q could not have changed before the event."
          choices={[
            {
              label: "Choice A",
              response:
                "Accept the conclusion because backups are authoritative.",
              outcome:
                "The backup does not represent changes after 13:30.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Use the backup only to describe the fictional state as of its version time and preserve all post-13:30 changes as unresolved unless other supplied evidence addresses them.",
              outcome:
                "This respects the backup's historical value without turning it into continuous coverage.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Ignore the backup because old evidence is never useful.",
              outcome:
                "Historical state can be valuable when its version and limitations are clear.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Encryption and Access Limits"
          title="Protected Evidence Is an Availability Fact, Not a Suspicion Signal"
        >
          <p className="leading-8">
            A fictional evidence category may be represented as encrypted or
            otherwise access-limited. This lesson does not teach how to bypass,
            unlock, recover, or access protected information. The forensic
            reasoning question is simpler: what can the investigation conclude
            from the fact that the evidence is currently unavailable?
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Protected or unavailable does not prove malicious intent.",
              "The fictional investigation should identify the qualified owner and approved access process rather than attempt circumvention.",
              "If access is not available, the finding may remain Unknown.",
              "The report should distinguish evidence existence, evidence availability, and evidence interpretation.",
              "Privacy and legal/governance review may be necessary before access decisions.",
              "CyberShield exercises never require real encrypted data, credentials, keys, bypass, recovery, or protected-account access.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-sm leading-7 text-yellow-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Missing Evidence"
          title="Six Missing-Evidence Patterns That Require Careful Language"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {missingEvidencePatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.pattern}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.observation}
                </p>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.wrong}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Reporting Language"
          title="Write Availability Findings Without Inventing Event Conclusions"
        >
          <div className="grid gap-5">
            {reportingPatterns.map((item, index) => (
              <article
                key={item.weak}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Reporting pattern {index + 1}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Overstated
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Bounded
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stronger}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Where Memory and Storage Evidence Reasoning Fails"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                mistake: "Missing means never existed",
                why:
                  "Temporary, expired, overwritten, Blind, delayed, or retention-limited evidence can disappear after the event.",
                correction:
                  "Separate evidence availability from event truth and use Unknown where appropriate.",
              },
              {
                mistake: "Persistent means complete",
                why:
                  "Longer-lived fictional records can still be filtered, incomplete, stale, transformed, or retention-limited.",
                correction:
                  "Evaluate source health, scope, retention, provenance, and transformation.",
              },
              {
                mistake: "Backup means current",
                why:
                  "A fictional backup represents a specific version or point in time.",
                correction:
                  "Tie every backup conclusion to its version time and post-backup limitation.",
              },
              {
                mistake: "Synchronized means originated here",
                why:
                  "A reflected fictional state may have come from another location.",
                correction:
                  "Separate presence from origin and document synchronization direction plus delay.",
              },
              {
                mistake: "Protected means suspicious",
                why:
                  "Access limitation is not evidence of harmful intent.",
                correction:
                  "Treat encryption or access limitation as a governance and availability condition.",
              },
              {
                mistake: "Volatility overrides authority",
                why:
                  "Time sensitivity can pressure teams into exceeding purpose or privacy boundaries.",
                correction:
                  "Prioritize owner decisions, not unauthorized action.",
              },
              {
                mistake: "Archived means event-level detail",
                why:
                  "Fictional archives may contain summaries rather than detailed historical events.",
                correction:
                  "Document what the archive actually retains and what it omits.",
              },
              {
                mistake: "More evidence is always better",
                why:
                  "Broad fictional evidence use can increase privacy, scope, review, and contradiction risk.",
                correction:
                  "Use the minimum necessary evidence path for the bounded question.",
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
          title="Build a Memory and Storage Evidence Availability Matrix"
        >
          <p className="leading-8">
            Use only MS-01 through MS-06 and the invented evidence descriptions
            supplied on this page. Do not capture, image, extract, recover,
            inspect, unlock, bypass, search, query, collect, preserve, monitor,
            or obtain information from any real device, storage system,
            application, account, process, memory state, network, website,
            school system, or person.
          </p>

          <div className="mt-6 grid gap-5">
            {[
              {
                phase: "Phase 1 — Classify evidence state",
                tasks: [
                  "Classify each fictional item as Temporary/volatile, Persistent, Synchronized, Backed up, Archived, or Unavailable/Unknown.",
                  "Record expected lifetime and current availability.",
                  "Identify which item is most time-sensitive conceptually.",
                ],
              },
              {
                phase: "Phase 2 — Map evidence to questions",
                tasks: [
                  "Write one bounded forensic question for each evidence item.",
                  "State what the item may support and what it cannot prove.",
                  "Add source health, owner, privacy, and retention fields.",
                ],
              },
              {
                phase: "Phase 3 — Analyze missing evidence",
                tasks: [
                  "Use the expired short-retention source and write a professional Unknown statement.",
                  "Compare expiration with overwrite and Blind-source scenarios.",
                  "Explain why each can produce missing evidence without proving event absence.",
                ],
              },
              {
                phase: "Phase 4 — Analyze synchronization and backup",
                tasks: [
                  "Write one reflected-presence finding for synchronized state.",
                  "Write one version-bounded finding for the fictional backup.",
                  "Add explicit origin and post-backup limits.",
                ],
              },
              {
                phase: "Phase 5 — Prioritize conceptually",
                tasks: [
                  "Rank the fictional evidence categories by time sensitivity, decision value, privacy, source health, and owner readiness.",
                  "Explain why urgency never overrides authority.",
                  "Identify one less-invasive alternative evidence category for a question.",
                ],
              },
              {
                phase: "Phase 6 — Report",
                tasks: [
                  "Write one Available finding, one Conditional finding, one Unknown finding, and one archived-summary limitation.",
                  "Include at least five non-proof statements.",
                  "Create a public-safe leadership summary using only invented evidence descriptions.",
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
              This is a reasoning and documentation lab using invented,
              pre-supplied evidence states only. It does not authorize real
              memory capture, disk imaging, storage acquisition, extraction,
              file recovery, bypass, unlocking, live collection, account access,
              device inspection, monitoring, surveillance, or technical
              investigation.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend an Unknown When Leadership Wants a Yes-or-No Answer"
        >
          <p className="leading-8">
            A fictional leadership reviewer asks whether a temporary state
            existed at 14:04. The source that could answer most directly expired
            before the investigation began. A persistent application record
            shows related activity, but it does not represent the temporary
            state itself.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "State exactly what the persistent fictional record supports.",
              "Explain why the expired temporary-state source cannot support either confirmation or absence.",
              "Show why the correct answer can remain Unknown without making the investigation incomplete or weak.",
              "Identify which alternative fictional evidence categories could provide contextual support without pretending they are equivalent.",
              "Write one leadership-safe explanation of evidence availability versus event truth.",
              "Explain why urgency after the fact cannot restore an expired evidence window.",
              "Include one privacy and minimization consideration.",
              "Create a public-safe portfolio summary that demonstrates disciplined uncertainty.",
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
          title="A8.5 Memory and Storage Evidence Checklist"
          items={[
            "I can distinguish fictional temporary, volatile, persistent, synchronized, backed-up, archived, and unavailable evidence states.",
            "I can explain why temporary evidence may disappear even when the underlying event really occurred.",
            "I can explain why persistent evidence may still be incomplete, stale, transformed, or retention-limited.",
            "I can use retention windows to decide whether a fictional source can answer a historical question.",
            "I can distinguish reflected synchronized presence from origin.",
            "I can explain why a fictional backup represents a version rather than continuous current state.",
            "I can treat encryption or access limitation as an availability and governance fact rather than evidence of intent.",
            "I can evaluate fictional preservation priority using volatility, decision value, authority, privacy, availability, owner readiness, continuity, and alternatives.",
            "I can explain why urgency never creates authority.",
            "I can use Unknown when expired, overwritten, Blind, synchronized, protected, or otherwise unavailable evidence cannot support a conclusion.",
            "I can write bounded evidence-availability findings with non-proof statements.",
            "I can keep every example fully fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <MiniQuiz
          title="A8.5 Mini Quiz: Memory and Storage Evidence Concepts"
          questions={[
            {
              question:
                "A fictional temporary-state source no longer retains the relevant historical period. What is strongest?",
              choices: [
                "The event did not occur.",
                "The source cannot confirm or exclude the historical state, so that question may remain Unknown.",
                "The source proves the persistent record is wrong.",
                "The event was malicious.",
              ],
              answer: 1,
              explanation:
                "Expired evidence availability does not prove event absence.",
            },
            {
              question:
                "What is the strongest distinction between temporary and persistent fictional evidence?",
              choices: [
                "Temporary evidence is always more trustworthy.",
                "Persistent evidence always proves complete history.",
                "Temporary evidence may change or disappear quickly, while persistent evidence is longer-lived but still subject to retention, overwrite, source-health, and interpretation limits.",
                "There is no meaningful difference.",
              ],
              answer: 2,
              explanation:
                "Persistence changes expected availability, not automatic evidentiary truth.",
            },
            {
              question:
                "A fictional state appears on an endpoint and service after synchronization. What is strongest?",
              choices: [
                "The endpoint originated the state.",
                "The service originated the state.",
                "The evidence supports reflected presence in both locations, while origin may remain unresolved.",
                "Synchronization proves compromise.",
              ],
              answer: 2,
              explanation:
                "Synchronized presence does not automatically establish origin direction.",
            },
            {
              question:
                "A fictional backup represents application state as of 13:30, and an event occurs at 14:04. What can the backup establish?",
              choices: [
                "The exact application state at 14:04.",
                "Only the retained state represented by the backup version, subject to its scope and limitations.",
                "That no changes happened after 13:30.",
                "That the event was impossible.",
              ],
              answer: 1,
              explanation:
                "Backups represent specific retained versions, not continuous coverage after their creation.",
            },
            {
              question:
                "A fictional evidence category is protected and unavailable to the current reviewer. What does that fact prove?",
              choices: [
                "Someone is hiding evidence.",
                "The evidence is malicious.",
                "Only that current access is limited; intent, wrongdoing, and content remain unproven.",
                "The evidence should be bypassed.",
              ],
              answer: 2,
              explanation:
                "Access limitation is an availability and governance condition, not proof of intent.",
            },
            {
              question:
                "Why does volatility not automatically justify immediate evidence use?",
              choices: [
                "Because volatile evidence is never useful.",
                "Because time sensitivity still must be governed by authority, purpose, privacy, ownership, and scope.",
                "Because persistent evidence is always better.",
                "Because all evidence should be ignored until closure.",
              ],
              answer: 1,
              explanation:
                "Urgency can affect prioritization, but it does not create permission.",
            },
            {
              question:
                "A fictional archive contains only weekly summaries. What is strongest?",
              choices: [
                "The archive can reconstruct exact event-level timing.",
                "The archive may support high-level historical trends but cannot resolve event-level details it does not retain.",
                "Archived evidence is always complete.",
                "The archive proves no account activity occurred.",
              ],
              answer: 1,
              explanation:
                "The evidentiary value of an archive depends on what it actually retains and how it was transformed.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Memory and Storage Evidence Availability Package"
          prompt="Create a fully fictional A8.5 Memory and Storage Evidence Availability Package for Northbridge. Include at least eight invented evidence items across temporary/volatile state, persistent records, synchronized state, backup state, archived summaries, expired retention, overwritten state, and protected/access-limited evidence. For each item include evidence ID, bounded question, category, availability state, expected lifetime, source owner, source health, retention window, version time where relevant, synchronization state, backup/archive state, privacy limit, observation, what it may support, what it cannot prove, confidence, preservation priority, alternative explanation, owner action, and reporting language. Include one expired-source Unknown, one synchronization-origin Unknown, one backup-version limit, one protected-evidence limit, one Degraded-source case, one preservation-priority decision, one rejected absence claim, one rejected intent claim, at least six non-proof statements, a leadership summary, and a public-safe portfolio summary. Every organization, person, account, device, service, storage system, evidence item, timestamp, owner, finding, and outcome must be invented."
          tips={[
            "Keep memory and storage discussion conceptual; do not include capture, imaging, extraction, recovery, bypass, or real forensic procedures.",
            "Separate evidence availability from event truth.",
            "Use retention, overwrite, synchronization, backup version, archive detail, access, and source health to explain missing or limited evidence.",
            "Use Unknown when evidence cannot confirm or exclude the historical state.",
            "Treat urgency as a coordination priority, not as permission to exceed authority or privacy boundaries.",
            "Keep the final portfolio package fully fictional, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A8.6 Browser and Account Activity Concepts?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for volatility, persistence,
            retention, overwrite risk, synchronization, backups, archives,
            protected evidence, source health, preservation priority, missing
            evidence, and Unknown conclusions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why temporary evidence may disappear without disproving an earlier event.",
              "I can explain why persistent evidence may still be incomplete or stale.",
              "I can use retention windows to bound historical conclusions.",
              "I can separate synchronized presence from origin.",
              "I can explain why a backup represents a version rather than continuous state.",
              "I can treat protected evidence as an availability limitation rather than a suspicion signal.",
              "I can compare preservation priorities without exceeding authority.",
              "I can use Unknown when a fictional source expired, was Blind, or cannot represent the relevant historical moment.",
              "I can write evidence-availability findings with non-proof statements.",
              "I can keep all memory and storage examples fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
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
            "Temporary and volatile fictional evidence may change or disappear quickly; later absence does not prove earlier absence.",
            "Persistent fictional evidence lasts longer but may still be stale, incomplete, transformed, overwritten, summarized, or retention-limited.",
            "Evidence availability and event truth are different questions.",
            "Retention windows determine which historical periods a fictional source can responsibly answer.",
            "Synchronized presence does not automatically reveal origin.",
            "Backups and archives represent retained versions or summaries rather than continuous complete history.",
            "Protected or access-limited fictional evidence does not prove concealment, harmful intent, or wrongdoing.",
            "Preservation priority should consider volatility, decision value, authority, privacy, availability, owner readiness, continuity, and alternatives.",
            "Urgency does not override scope, authority, minimization, privacy, or qualified ownership.",
            "Unknown is the professional answer when expired, overwritten, Blind, synchronized, protected, or otherwise unavailable evidence cannot support a stronger conclusion.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This Lesson Teaches Evidence Availability Reasoning, Not Acquisition
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A8.5 authorizes access, investigation, monitoring,
            querying, collection, preservation, imaging, memory capture,
            extraction, credential recovery, file recovery, encryption bypass,
            unlocking, packet capture, live acquisition, storage access,
            account access, private-message review, configuration changes,
            surveillance, recovery actions, or examination involving any real
            device, account, application, process, service, memory state,
            storage system, network, organization, incident, classmate, teacher,
            family member, or other person. Use only fully invented,
            pre-supplied evidence descriptions.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to Browser and Account Activity Concepts
          </h2>
          <p className="mt-3 max-w-3xl leading-7">
            A8.5 established how temporary, persistent, synchronized, backed-up,
            archived, expired, and protected evidence states affect forensic
            conclusions. A8.6 moves into browser and account activity concepts:
            sessions, authentication, navigation records, account events,
            notifications, synchronization, shared devices, automation, and
            attribution limits—still using only supplied fictional evidence.
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