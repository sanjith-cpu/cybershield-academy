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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/evidence-integrity-and-chain-of-custody`;

const objectives = [
  "Translate a vague fictional concern into one neutral, answerable forensic question tied to a legitimate decision need.",
  "Define fictional investigative authority, purpose, systems, identities, time range, evidence categories, recipients, owners, exclusions, and stop conditions before analysis begins.",
  "Separate in-scope, conditionally in-scope, excluded, out-of-scope, unknown, and scope-change items using evidence and ownership rather than curiosity.",
  "Recognize how scope creep, unsupported attribution, overcollection, vague authority, and privacy exposure can weaken both forensic quality and trust.",
  "Create a versioned fictional investigation charter that connects question, scope, evidence needs, privacy, source health, review, escalation, and closure.",
];

const vocabulary = [
  ["Forensic question", "A neutral, bounded question that identifies what decision the supplied fictional evidence is intended to support."],
  ["Decision need", "The specific owner decision that requires evidence, such as whether a fictional account event occurred during a defined service window."],
  ["Purpose limitation", "The rule that fictional evidence should be used only for the approved reason that justified the investigation."],
  ["Authority", "The documented fictional permission and ownership that define who may request, review, decide, communicate, retain, or close an investigation."],
  ["Scope", "The approved boundary covering fictional systems, identities, services, time periods, evidence categories, questions, recipients, and allowed review activity."],
  ["Exclusion", "A fictional item intentionally kept outside the review because it is irrelevant, unauthorized, unnecessary, too sensitive, or owned by another process."],
  ["Stop condition", "A predefined fictional condition that requires the review to pause, escalate, or obtain new approval before continuing."],
  ["Scope change", "A documented fictional modification to the original investigation boundary with reason, owner, evidence, approval, effective time, and new limits."],
  ["Evidence category", "A high-level class of supplied fictional records that may help answer a bounded question, such as identity, application, endpoint, service, or audit evidence."],
  ["Source health", "A description of whether a fictional source is Healthy, Conditional, Degraded, Blind, Conflicting, or Recovering for a specific conclusion."],
  ["Attribution", "A conclusion about who performed an action. In A8, attribution must remain limited to what the supplied fictional evidence genuinely supports."],
  ["Unknown", "A valid forensic state used when supplied fictional evidence cannot support either confirmation or absence."],
];

const questionPatterns = [
  {
    weak: "Who attacked the service?",
    problem: "Assumes an attack, intent, one actor, and a conclusion before the evidence is reviewed.",
    stronger: "What supplied fictional evidence supports or contradicts unusual activity associated with Account A during the approved service window, and what attribution limits remain?",
  },
  {
    weak: "What did this user do?",
    problem: "Targets a person broadly and encourages review of unrelated activity rather than one decision question.",
    stronger: "Which supplied fictional account and service records document activity associated with Account A during the approved support window?",
  },
  {
    weak: "Can we check everything connected to this alert?",
    problem: "Uses technical relationship as a substitute for purpose, authority, minimization, and relevance.",
    stronger: "Which supplied fictional evidence categories are necessary to decide whether the observed account event affected the defined service workflow?",
  },
  {
    weak: "Did data get stolen?",
    problem: "Assumes an outcome and fails to define which data, event, time, or evidence standard would support the conclusion.",
    stronger: "Do the supplied fictional service and data-access records support that protected Dataset D was accessed during the approved review period, and what source-health limitations remain?",
  },
  {
    weak: "Was the account compromised?",
    problem: "Collapses many possible states into one label without defining the evidence required for the conclusion.",
    stronger: "Which supplied fictional identity, session, approval, and service records support or contradict unauthorized use of Account A during the defined period?",
  },
];

const scopeStates = [
  {
    state: "In scope",
    meaning: "Explicitly covered by fictional purpose, authority, decision question, evidence plan, and time boundary.",
    example: "Account A activity during the approved two-hour service-support window.",
    handling: "Review only supplied evidence categories necessary for the approved question.",
  },
  {
    state: "Conditionally in scope",
    meaning: "Potentially relevant, but use depends on an owner decision, additional authority, privacy review, source recovery, or evidence threshold.",
    example: "A supplier record that may clarify the event but requires the fictional supplier owner to approve the request.",
    handling: "Record the dependency and do not treat the item as automatically reviewable.",
  },
  {
    state: "Unknown",
    meaning: "The team cannot yet determine whether the item belongs inside the review because evidence, ownership, purpose, or source health is incomplete.",
    example: "A second identity linked by a delayed correlation source with no confirmed relationship.",
    handling: "Preserve uncertainty, assign an owner question, and avoid automatic expansion.",
  },
  {
    state: "Excluded",
    meaning: "Relevant enough to document but intentionally excluded under the current fictional purpose or privacy boundary.",
    example: "Personal communication content unrelated to the approved service-state question.",
    handling: "Record the exclusion reason and do not inspect or redistribute unrelated content.",
  },
  {
    state: "Out of scope",
    meaning: "Not covered by the current fictional question, authority, time, systems, identities, or evidence categories.",
    example: "Activity from another service outside the defined support window.",
    handling: "Do not include it merely because a technical relationship exists.",
  },
  {
    state: "Scope-change candidate",
    meaning: "New fictional evidence may justify expanding, narrowing, or otherwise changing the investigation boundary.",
    example: "A traceable service record indicates the original time window may need to extend by fifteen minutes.",
    handling: "Document evidence, decision need, privacy effect, owner, proposed change, and approval before using the new boundary.",
  },
];

const authorityMatrix = [
  ["Requesting owner", "Decision need, business purpose, initial question, urgency, and why evidence review is necessary.", "Automatic technical access, privacy exceptions, unlimited collection, or every specialist conclusion."],
  ["Investigation coordinator", "Question discipline, scope versioning, owner assignments, evidence references, decision chronology, and closure coordination.", "Unilateral expansion into unrelated systems, identities, or sensitive information."],
  ["Evidence owner", "Meaning, provenance, source health, access rules, retention, limitations, and clarification for a fictional evidence category.", "The final integrated conclusion by themselves."],
  ["Privacy reviewer", "Purpose limitation, minimization, sensitive-information handling, third-party exposure, access, retention, and distribution concerns.", "Technical findings or business acceptance."],
  ["Service owner", "Service purpose, critical workflow, impact context, expected behavior, dependencies, continuity, and business interpretation.", "Identity attribution or evidence custody."],
  ["Governance owner", "Fictional policy, contractual, records, legal, or specialized governance questions when they arise.", "Routine technical evidence interpretation outside their expertise."],
];

const evidencePlan = [
  {
    question: "Did Account A have an approved role during the fictional support window?",
    category: "Identity and approval records",
    owner: "Identity owner",
    health: "Healthy",
    needed: "Account reference, role, approval state, effective start/end, owner, and source-health state.",
    notNeeded: "Unrelated personal profile details, unrelated accounts, or communication content.",
  },
  {
    question: "Was Account A active in Service S during the approved window?",
    category: "Session and service records",
    owner: "Service evidence owner",
    health: "Conditional",
    needed: "Account reference, service reference, session state, event time, processing time, result, and source health.",
    notNeeded: "All activity from every service or the fictional account's entire history.",
  },
  {
    question: "Did the observed activity affect Workflow W?",
    category: "Application workflow records",
    owner: "Application owner",
    health: "Degraded",
    needed: "Workflow reference, event type, result, time, account reference if available, and limitation.",
    notNeeded: "Unrelated application content, unrelated records, or personal messages.",
  },
  {
    question: "Is the current absence of a matching event reliable?",
    category: "Source-health and coverage records",
    owner: "Source owner",
    health: "Blind",
    needed: "Coverage period, Blind interval, recovery state, expected events, owner, and next validation.",
    notNeeded: "Broad system internals or operational configuration details.",
  },
];

const scopeChanges = [
  [
    "A related fictional record predates the current start time by twelve minutes.",
    "Silently widen the time range and continue.",
    "Document the evidence trigger, explain the decision need, assess privacy effect, request the bounded time-window change, obtain owner approval, and version the scope.",
  ],
  [
    "A second fictional identity appears in one correlation record.",
    "Add the identity automatically because it is technically related.",
    "Classify it as Unknown or a scope-change candidate until relationship strength, purpose, privacy, ownership, and evidence need justify expansion.",
  ],
  [
    "A supplier may hold one record that could resolve a timing conflict.",
    "Request every record the supplier has about the service.",
    "Define one bounded question, minimum necessary fields, period, confidentiality level, supplier owner, deadline, and escalation path.",
  ],
  [
    "A supplied fictional artifact includes unrelated personal information.",
    "Review it because the artifact is already available.",
    "Keep unrelated content excluded, use only the approved evidentiary portion, document the privacy issue, and escalate only if broader use becomes necessary.",
  ],
];

const closureCriteria = [
  "The primary fictional forensic question has an evidence-supported answer or an explicitly accepted Unknown state.",
  "Every material finding identifies supporting evidence, source health, confidence, limitations, alternatives, contradictions, and unresolved questions.",
  "Scope changes and exclusions are documented with owner decisions and effective times.",
  "Unrelated or unnecessary fictional information is not retained or distributed beyond the approved purpose.",
  "Outstanding owner questions, source-recovery needs, corrective actions, or follow-up reviews have named owners and deadlines.",
  "The report has appropriate technical, privacy, service, governance, and leadership review where required.",
  "Retention, disposition, distribution, correction, archive, and reopening criteria are documented.",
  "A public CyberShield portfolio version is fully fictional and contains no real case material.",
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
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Module A8</Link>
      <Link href={trackPath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">Advanced Track</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function ForensicQuestionsAndInvestigationScopePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A8</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A8.1</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Forensic Reasoning</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A8.1 Forensic Questions and Investigation Scope</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional investigations begin before evidence interpretation: define the decision question, confirm authority, state purpose, set boundaries, choose only necessary evidence categories, protect privacy, assign owners, document exclusions, and create stop conditions that prevent curiosity from becoming uncontrolled scope.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Advanced" moduleTitle="A8: Digital Forensics Concepts" lessonTitle="Forensic Questions and Investigation Scope" lessonNumber={1} totalLessons={10} />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented organizations, identities, devices, accounts, services, evidence categories, records, dates, findings, and outcomes.",
            "I will treat forensic work as bounded evidence reasoning, not permission to access, collect from, inspect, image, capture, extract, recover, or investigate any real system.",
            "I will define a neutral question, decision need, authority, purpose, scope, exclusions, privacy, owners, and stop conditions before analyzing supplied fictional evidence.",
            "I will separate observations, findings, confidence, limitations, alternative explanations, contradictions, Unknowns, and conclusions.",
            "I will not treat account activity or device evidence as automatic proof of a person's identity, intent, or actions.",
            "I will stop and escalate when a fictional question requires new authority, a broader purpose, sensitive information, a different owner, or a material scope change.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Technically Relevant Record Can Still Be Out of Scope">
          <p className="leading-8">A fictional service owner asks a simple question: did Account A perform an unusual service action during a two-hour support window? The team is given four supplied records that directly relate to the account and service. A fifth record contains an unrelated personal message from another fictional user. The message happens to mention the same service, so it feels relevant.</p>
          <p className="mt-4 leading-8">A weak investigation says, “It might help, so review it.” A professional investigation asks something different: does the approved purpose require this record, is it covered by authority, is the personal content necessary, who owns that decision, and can the original question be answered without using it? Technical connection is not the same as investigative permission.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak approach</p><p className="mt-2 leading-7">“Review anything connected to the account in case it becomes useful.”</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional approach</p><p className="mt-2 leading-7">“Use the minimum supplied evidence necessary to answer the approved question, document exclusions, and require a new owner decision before purpose or scope expands.”</p></div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A8.1">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Scope Is a Quality Control, Privacy Control, and Trust Control">
          <p className="leading-8">Investigative scope is sometimes treated like paperwork added after technical work. In professional practice, scope is one of the controls that makes the work defensible. It tells reviewers why the investigation exists, what decision it is meant to support, which evidence categories are necessary, who authorized the work, which people and systems are included, what time period matters, which information must remain excluded, and when the team must stop.</p>
          <p className="mt-4 leading-8">Good scope also protects the investigation itself. If reviewers examine unrelated records, they create more information to secure, more privacy risk, more opportunities for confirmation bias, more conflicting details, more review debt, and more chances to lose the original question. More evidence is not automatically better evidence.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Evidence quality", "A bounded question makes it easier to judge whether each fictional record truly supports the decision."],
              ["Privacy", "Minimization prevents unrelated or excessive fictional personal information from entering the case."],
              ["Accountability", "Named owners can approve, reject, narrow, expand, review, correct, and close the investigation."],
              ["Reproducibility", "Future reviewers can understand what the team was allowed to examine and why each conclusion was reached."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p></div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Question → Authority → Purpose → Scope → Evidence → Limits → Decision">
          <p className="leading-8">A8.1 uses a seven-part model. The order matters because every later step depends on the earlier boundary. Evidence should not define its own purpose, and technical access should not define its own authority.</p>
          <div className="mt-6 grid gap-5">
            {[
              ["1", "Question", "Write one neutral question that can be answered from supplied fictional evidence without assuming compromise, guilt, intent, cause, or impact.", "One sentence describing the exact uncertainty to resolve."],
              ["2", "Authority", "Identify the fictional requesting owner, decision owner, evidence owners, reviewers, recipients, approval boundaries, and who may authorize changes.", "A named fictional authority and ownership map."],
              ["3", "Purpose", "State why the answer is needed and what decision it will support. The purpose should be specific enough to justify evidence use.", "A purpose statement tied to one fictional decision."],
              ["4", "Scope", "Define identities, systems, services, evidence categories, time range, questions, exclusions, privacy limits, recipients, and stop conditions.", "A versioned scope charter."],
              ["5", "Evidence", "List only the supplied fictional evidence categories necessary to answer the question and document owner plus source-health expectations.", "A minimum-necessary evidence plan."],
              ["6", "Limits", "Identify Blind sources, attribution limits, missing periods, conflicting records, unavailable owners, sensitive information, and conclusions that cannot be supported.", "A limitations and Unknown register."],
              ["7", "Decision", "Describe what owner decision will be made from the findings and what state requires follow-up, scope change, closure, or reopening.", "A decision and lifecycle statement."],
            ].map(([number, title, text, output]) => (
              <article key={number} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{number}</span><div><h3 className="text-xl font-black text-white">{title}</h3><p className="mt-2 leading-7 text-slate-300">{text}</p></div></div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Required output</p><p className="mt-2 text-sm leading-6">{output}</p></div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Vocabulary" title="Professional Terms for Question and Scope Discipline">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Question Design" title="Neutral Questions Prevent the Conclusion from Entering the Scope">
          <p className="leading-8">A forensic question should be narrow enough to guide evidence use but open enough to allow the evidence to contradict the initial concern. Words like attacker, stolen, malicious, compromised, or guilty can quietly turn a question into a conclusion.</p>
          <div className="mt-6 grid gap-5">
            {questionPatterns.map((item, index) => (
              <article key={item.weak} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">Question pattern {index + 1}</p>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak question</p><p className="mt-2 text-sm leading-6">{item.weak}</p></div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Why it is weak</p><p className="mt-2 text-sm leading-6">{item.problem}</p></div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Stronger question</p><p className="mt-2 text-sm leading-6">{item.stronger}</p></div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Investigation Intake Dashboard"
          subtitle="Northbridge evidence-reasoning exercise — invented values only"
          metrics={[
            { label: "Open forensic questions", value: "4", note: "Two decision-ready, one Conditional, one awaiting owner clarification" },
            { label: "Approved evidence categories", value: "6", note: "Identity, session, service, workflow, source health, owner statements" },
            { label: "Scope-change candidates", value: "2", note: "One time-window question and one supplier evidence dependency" },
            { label: "Excluded items", value: "5", note: "Unrelated personal content and unrelated services remain outside purpose" },
          ]}
        />

        <SectionCard eyebrow="Authority" title="Technical Ability Does Not Create Investigative Authority">
          <p className="leading-8">A fictional analyst may know that a record exists or may have technical capability to reach a system, but capability alone does not justify review. Professional authority asks who requested the work, who owns the evidence, what purpose is approved, who may authorize expansion, who reviews sensitive information, who receives the result, and who accepts residual uncertainty.</p>
          <div className="mt-6 grid gap-5">
            {authorityMatrix.map(([role, owns, doesNotOwn]) => (
              <article key={role} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-purple-100">{role}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Owns</p><p className="mt-2 text-sm leading-6">{owns}</p></div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Does not automatically own</p><p className="mt-2 text-sm leading-6">{doesNotOwn}</p></div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Scope Warning"
          severity="Medium"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="A newly supplied record contains a second identity and unrelated personal content."
          recommendation={["Current question: determine whether Account A performed an unusual service action during the approved support window.",
            "Second identity relationship: not yet established.",
            "Personal content: unrelated to the current decision need.",
            "Source health: Conditional because provenance clarification is pending.",
            "Required response: classify the second identity and personal content before any scope expansion.",].join(" • ")}
        />

        <SectionCard eyebrow="Scope States" title="Not Everything Is Simply In Scope or Out of Scope">
          <p className="leading-8">Binary scope can hide real uncertainty. Professional fictional investigations benefit from multiple states so teams can separate approved evidence from candidates, Unknowns, exclusions, and items that genuinely belong to another process.</p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left">
              <thead className="bg-slate-950">
                <tr>
                  {["State", "Meaning", "Fictional Example", "Handling"].map((heading) => (
                    <th key={heading} className="border-b border-slate-700 px-5 py-4 text-sm font-black text-cyan-200">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scopeStates.map((item) => (
                  <tr key={item.state} className="border-b border-slate-800 bg-slate-900/50 align-top">
                    <td className="px-5 py-4 font-black text-white">{item.state}</td>
                    <td className="px-5 py-4 text-sm leading-6 text-slate-300">{item.meaning}</td>
                    <td className="px-5 py-4 text-sm leading-6 text-blue-100">{item.example}</td>
                    <td className="px-5 py-4 text-sm leading-6 text-emerald-100">{item.handling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Minimum-Necessary Evidence Planning" title="Choose Evidence Categories from the Question, Not from Availability">
          <p className="leading-8">The strongest evidence plan does not ask, “What can we get?” It asks, “What supplied fictional evidence is necessary to answer the approved question?” This prevents evidence availability from silently expanding purpose.</p>
          <div className="mt-6 grid gap-5">
            {evidencePlan.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.question}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Evidence category", item.category],
                    ["Owner", item.owner],
                    ["Source health", item.health],
                    ["Minimum necessary", item.needed],
                    ["Not needed", item.notNeeded],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{value}</p></div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Investigation Intake Records"
          logs={[
            "14:03 | REQUEST | owner=service-owner | question=account-event-during-support-window | authority=approved | scope_version=1",
            "14:07 | EVIDENCE | category=identity-approval | source_health=Healthy | purpose=authorization-question | status=in-scope",
            "14:11 | EVIDENCE | category=service-session | source_health=Conditional | purpose=activity-question | status=in-scope",
            "14:14 | RECORD | category=personal-message | purpose_match=no | privacy=high | status=excluded",
            "14:18 | CORRELATION | second_identity=observed | relationship=unconfirmed | status=scope-change-candidate",
            "14:23 | SOURCE | workflow-records=Degraded | absence_conclusion=not-supported | owner=application-owner",
            "14:28 | DECISION | time_window_change=requested | reason=related-event-precedes-start-by-12m | approval=pending",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Intake Record"
          question="Which conclusion best respects the current fictional question and investigation scope?"
          evidence={[
            "The approved question concerns Account A and one service during a two-hour support window.",
            "A supplied personal message mentions the same service but does not match the approved purpose.",
            "A second identity appears in one correlation record, but the relationship is unconfirmed.",
            "Workflow evidence is Degraded, so absence conclusions are not reliable.",
          ]}
          options={[
            "Expand immediately to every identity and communication related to the service.",
            "Keep the personal message excluded, classify the second identity as a scope-change candidate or Unknown, preserve the Degraded-source limitation, and request bounded owner decisions before expansion.",
            "Assume the second identity is involved because a correlation record exists.",
            "Close the investigation because the current workflow source does not show a matching event.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports disciplined scope management, not automatic expansion. The unrelated personal message remains excluded, the second identity needs stronger relationship and purpose evidence, and Degraded workflow evidence cannot support a confident absence conclusion."
        />

        <SectionCard eyebrow="Source Health and Scope" title="A Blind Source Can Change What the Investigation Is Allowed to Conclude">
          <p className="leading-8">Source health is not only a later analysis concern. It affects investigation design. If a required source is Blind, the team may need to narrow the question, preserve Unknown, request another evidence category, wait for source recovery, or change the decision timeline. A Blind source does not automatically justify collecting broader unrelated evidence.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Healthy", "The source is sufficiently available, current, traceable, and suitable for the specific fictional conclusion."],
              ["Conditional", "The source may support limited conclusions if its known limitation is preserved."],
              ["Degraded", "The source provides incomplete, delayed, inconsistent, or otherwise weakened evidence."],
              ["Blind", "The source cannot support a reliable confirmation or absence conclusion for the relevant period."],
              ["Conflicting", "The source disagrees materially with another traceable source or with itself and requires reconciliation."],
              ["Recovering", "The source is returning to service, but historical gaps or validation needs still affect conclusions."],
            ].map(([state, detail]) => (
              <div key={state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{state}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Scope Change" title="Expansion Requires a Decision, Not Just a New Technical Relationship">
          <p className="leading-8">New evidence can legitimately change an investigation. The control is not “never expand.” The control is “expand deliberately.” A professional scope change should preserve why the change was proposed, what evidence triggered it, how it affects privacy and workload, who owns the decision, which new items become reviewable, what remains excluded, and when the new version takes effect.</p>
          <div className="mt-6 grid gap-5">
            {scopeChanges.map(([trigger, wrong, professional]) => (
              <article key={trigger} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Trigger</p><p className="mt-2 text-sm leading-6">{trigger}</p></div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak response</p><p className="mt-2 text-sm leading-6">{wrong}</p></div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional response</p><p className="mt-2 text-sm leading-6">{professional}</p></div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Second Identity"
          scenario="Northbridge's fictional review asks whether Account A performed an unusual action during one approved support window. A supplied correlation record references Account B at a similar time. The relationship between the accounts is not established, and no owner has requested review of Account B."
          choices={[
            { label: "Choice A", response: "Add Account B to the investigation immediately because it appears in a related record.", outcome: "This allows a technical relationship to expand scope without purpose, relationship evidence, privacy review, or owner authority.", tone: "risk" },
            { label: "Choice B", response: "Classify Account B as a scope-change candidate or Unknown, document the relationship evidence and decision need, and request bounded approval before reviewing additional Account B evidence.", outcome: "This preserves possible relevance without silently expanding the investigation.", tone: "best" },
            { label: "Choice C", response: "Ignore Account B permanently because it was not in the original scope.", outcome: "This is too rigid. New evidence may justify a legitimate scope change when the proper decision process is followed.", tone: "caution" },
          ]}
        />

        <SectionCard eyebrow="Privacy and Minimization" title="Forensic Relevance Does Not Remove Privacy Obligations">
          <p className="leading-8">A supplied fictional artifact may contain both relevant and irrelevant information. Professional handling asks whether the entire artifact is necessary, whether only specific fields are needed, whether unrelated content should remain excluded, whether a privacy reviewer is required, and whether the same decision can be reached with less information.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Purpose", "What decision requires this specific fictional information?"],
              ["Necessity", "Can the question be answered without the unrelated or sensitive portion?"],
              ["Access", "Which fictional roles genuinely need to see the relevant portion?"],
              ["Retention", "How long is the information needed for the approved purpose and follow-up?"],
              ["Distribution", "Which audience needs the finding versus the underlying evidence?"],
              ["Public portfolio", "Can the learning objective be demonstrated using fully invented material instead?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"><h3 className="font-black text-purple-100">{title}</h3><p className="mt-2 text-sm leading-6">{detail}</p></div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Attribution Limits" title="Account Activity Is Not Automatically Person Activity">
          <p className="leading-8">A forensic scope can become unfair when the name of a person enters the question too early. A fictional record may identify an account, device, session, application, or service object. That can support an observation about the object. It may not establish who physically performed the action, whether the action was automated, whether a session was shared, whether a delegated role was active, or why the event occurred.</p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-700 text-left">
              <thead className="bg-slate-950"><tr>{["Supplied Evidence", "May Support", "Does Not Automatically Prove", "Next Question"].map((heading) => <th key={heading} className="border-b border-slate-700 px-5 py-4 text-sm font-black text-cyan-200">{heading}</th>)}</tr></thead>
              <tbody>
                {[
                  ["Account event", "An event was associated with the fictional account reference.", "Which person acted, harmful intent, compromise, or impact.", "What identity, session, approval, device, and owner context is necessary?"],
                  ["Device event", "A fictional device recorded or was associated with an event.", "Which person used it, who initiated the event, or why.", "Is the device shared, automated, remotely managed, or used by multiple approved roles?"],
                  ["Session record", "A fictional session existed or changed state.", "Who physically controlled it or whether every action was authorized.", "What account, approval, session-age, and service context exists?"],
                  ["Application record", "A fictional application observed a defined event.", "Complete user behavior, causation, intent, or system-wide impact.", "Which related evidence categories are necessary for the bounded question?"],
                ].map(([evidence, supports, limits, next]) => (
                  <tr key={evidence} className="border-b border-slate-800 bg-slate-900/50 align-top"><td className="px-5 py-4 font-black text-white">{evidence}</td><td className="px-5 py-4 text-sm leading-6 text-emerald-100">{supports}</td><td className="px-5 py-4 text-sm leading-6 text-yellow-100">{limits}</td><td className="px-5 py-4 text-sm leading-6 text-blue-100">{next}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze an Attribution Statement"
          question="Which fictional statement is strongest when the supplied record identifies Account A but the device is shared and no physical-user evidence exists?"
          evidence={[
            "The application record contains Account A as the account reference.",
            "The device is approved for use by more than one fictional staff member.",
            "The supplied evidence does not identify the physical person at the keyboard.",
            "No harmful intent is established by the event itself.",
          ]}
          options={[
            "Person A definitely performed the action.",
            "The activity was associated with Account A in the supplied application record; the current evidence does not independently establish which person physically performed the action or why.",
            "Someone else must have used Account A because the device is shared.",
            "The account was compromised.",
          ]}
          bestAnswer={1}
          explanation="The strongest statement preserves the supported account association while making the attribution and intent limits explicit."
        />

        <SectionCard eyebrow="Stop Conditions" title="A Professional Investigation Knows When Not to Continue">
          <p className="leading-8">Stop conditions prevent momentum from becoming permission. A fictional investigation should pause or escalate when the next action would exceed the approved purpose, require new evidence access, expose sensitive information, cross into another owner's system, create a new investigative question, or rely on evidence that is too weak for the decision.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "The next fictional evidence category is not covered by current authority.",
              "The question changes from service-state review to personal attribution.",
              "Sensitive or unrelated fictional information becomes necessary to continue.",
              "A new identity, system, supplier, or time period requires material scope expansion.",
              "The evidence owner cannot explain provenance, source health, transformation, or meaning.",
              "A Blind or Conflicting source makes the intended conclusion unsupported.",
              "The investigation begins to overlap with another fictional process that has a different qualified owner.",
              "A reviewer identifies a conflict of interest, fairness concern, or need for independent review.",
              "The current purpose can already be satisfied without additional fictional information.",
              "The requested next step would involve a real system, real person, real account, real device, real evidence, or invasive collection.",
            ].map((item) => <div key={item} className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-sm leading-7 text-yellow-50">{item}</div>)}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Unrelated Personal Message"
          scenario="A supplied fictional export contains one service-status field that may help the approved question and a long personal message unrelated to the investigation. The personal content includes information the current investigation does not need."
          choices={[
            { label: "Choice A", response: "Read the entire message because the export is already part of the case.", outcome: "Availability does not create purpose. This unnecessarily expands exposure to unrelated personal information.", tone: "risk" },
            { label: "Choice B", response: "Use only the minimum supplied field necessary for the approved question, keep unrelated content excluded, document the minimization decision, and escalate if broader use later becomes necessary.", outcome: "This preserves evidence relevance while protecting privacy and purpose limitation.", tone: "best" },
            { label: "Choice C", response: "Delete the supplied export immediately.", outcome: "This may discard relevant fictional evidence without following the evidence owner's handling and retention process.", tone: "caution" },
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Where Advanced Forensic Scope Goes Wrong">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Starting with blame", "A question like ‘who did this?’ can bias evidence selection before event, account, identity, timing, and source-health questions are resolved.", "Start with the observed fictional event and decision need."],
              ["Treating connection as relevance", "A related account, device, supplier, service, or communication may be technically connected but unnecessary for the approved question.", "Require purpose, evidence need, relationship strength, ownership, privacy, and approval."],
              ["Letting tools define scope", "A tool may technically expose many records, but interface availability is not an authorization model.", "Use the written fictional charter, not the size of the available dataset."],
              ["Expanding silently", "A team can gradually widen time, systems, identities, or evidence categories without realizing the original investigation changed.", "Version every material fictional scope change."],
              ["Using absence from a Blind source", "No visible event in an unavailable or incomplete source is not reliable evidence of absence.", "Use Unknown, source-limited language, alternate evidence, or source recovery."],
              ["Attributing accounts to people", "Shared devices, automation, stale sessions, delegated access, and other conditions may weaken person-level attribution.", "State the exact object association the evidence supports."],
              ["Keeping everything", "Excess fictional evidence increases privacy, retention, access, review, contradiction, and lifecycle risk.", "Use minimum necessary evidence and purpose-based retention."],
              ["Treating closure as certainty", "Some fictional investigations may close with accepted Unknowns, open actions, source gaps, or future reopening conditions.", "Document what is resolved, what is not, who owns it, and what would reopen the review."],
            ].map(([mistake, why, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-red-100">{mistake}</h3><div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why it fails</p><p className="mt-2 text-sm leading-6">{why}</p></div><div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p><p className="mt-2 text-sm leading-6">{correction}</p></div></article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Lab" title="Build a Forensic Question and Investigation Scope Package">
          <p className="leading-8">Use only the fictional Northbridge material supplied on this page. Do not access, collect, inspect, search, image, capture, extract, recover, preserve, or analyze anything from a real device, account, service, application, storage system, network, website, organization, classmate, teacher, family member, or other real person.</p>
          <div className="mt-6 grid gap-5">
            {[
              ["Phase 1 — Question", [
                "Write one neutral primary question about Account A and Service S during the fictional support window.",
                "Write two subquestions that help answer the primary question without assuming intent or person-level attribution.",
                "List three conclusions the current question must not assume.",
              ]],
              ["Phase 2 — Authority and purpose", [
                "Name the fictional requesting owner, decision owner, investigation coordinator, evidence owners, and privacy reviewer.",
                "Write the approved purpose in one sentence.",
                "State what decision the result will support and who owns that decision.",
              ]],
              ["Phase 3 — Scope", [
                "Define the fictional account, service, workflow, time range, evidence categories, recipients, and exclusions.",
                "Classify Account B using one of the six scope states and explain why.",
                "Write at least five explicit stop conditions.",
              ]],
              ["Phase 4 — Evidence planning", [
                "Choose the minimum fictional evidence categories needed for authorization, activity, workflow effect, and source-health questions.",
                "Identify the source owner and current health state for each category.",
                "List information that is technically available but unnecessary for the approved purpose.",
              ]],
              ["Phase 5 — Scope change", [
                "Draft a fictional time-window change request for a related event that occurred twelve minutes before the current start.",
                "State the evidence trigger, decision need, privacy effect, proposed new boundary, owner, and approval status.",
                "Explain why the change should not happen silently.",
              ]],
              ["Phase 6 — Closure", [
                "Use the closure criteria to decide what must be resolved before the fictional investigation closes.",
                "List which Unknowns may remain open with named owners.",
                "Write three reopen triggers based on late evidence, source recovery, contradiction, or material scope change.",
              ]],
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
            <p className="mt-2 leading-7">This activity is a writing and reasoning exercise using invented supplied records only. It does not authorize real investigation, monitoring, collection, preservation, imaging, capture, extraction, recovery, account access, device access, storage access, network access, configuration changes, or technical testing.</p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Defend a Scope Decision When the Most Interesting Evidence Is Not Necessary">
          <p className="leading-8">A fictional leadership reviewer argues that the team should include every technically related account, message, service, and device because “more evidence can only help.” Your challenge is to write a professional response explaining why disciplined minimization can improve forensic quality.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Explain how unrelated fictional evidence can increase confirmation bias, privacy exposure, review burden, contradiction, retention risk, and reporting complexity.",
              "Explain how a bounded question makes evidence sufficiency and source-health limitations easier to evaluate.",
              "Show how scope-change governance still allows legitimate expansion when new evidence truly changes the decision need.",
              "Distinguish a technically related record from a purpose-necessary record.",
              "Explain how an excluded item can remain documented without being analyzed.",
              "Describe why an accepted Unknown can be more professional than an unsupported conclusion.",
              "Create one example where narrowing scope improves fairness.",
              "Create one example where expanding scope is justified and show the required owner approval.",
            ].map((item) => <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>)}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Closure Readiness" title="When Can the Fictional Investigation End?">
          <div className="grid gap-4 md:grid-cols-2">
            {closureCriteria.map((criterion, index) => (
              <div key={criterion} className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Criterion {index + 1}</p>
                <p className="mt-2 text-sm leading-6">{criterion}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.1 Forensic Question and Scope Checklist"
          items={[
            "I can write a neutral fictional forensic question without assuming compromise, guilt, intent, attribution, cause, or impact.",
            "I can connect the forensic question to a specific fictional decision need and accountable owner.",
            "I can distinguish technical capability from valid investigative authority.",
            "I can define fictional purpose, systems, identities, services, time period, evidence categories, recipients, owners, exclusions, privacy limits, and stop conditions.",
            "I can use In scope, Conditional, Unknown, Excluded, Out of scope, and Scope-change candidate states rather than forcing every item into a binary category.",
            "I can choose minimum-necessary fictional evidence categories from the question instead of from technical availability.",
            "I can explain how source health changes what the investigation can conclude without automatically justifying broader evidence use.",
            "I can preserve account, device, session, and application evidence without turning object association into unsupported person attribution.",
            "I can document a fictional scope change with trigger, evidence, purpose, owner, approval, privacy effect, effective time, and new boundary.",
            "I can stop or escalate when purpose, authority, evidence category, identity, system, time, privacy, or qualified ownership changes.",
            "I can close a fictional investigation with accepted Unknowns when the remaining uncertainty is explicit, owned, and governed.",
            "I can keep every CyberShield forensic artifact fully fictional, non-invasive, privacy-safe, defensive, and safe to share.",
          ]}
        />

        <MiniQuiz
          title="A8.1 Mini Quiz: Forensic Questions and Investigation Scope"
          questions={[
            {
              question: "Which fictional forensic question is strongest?",
              choices: [
                "Who attacked the service?",
                "What supplied evidence supports or contradicts unusual activity associated with Account A during the approved support window, and what attribution limits remain?",
                "What else can we find about the user?",
                "Was the account definitely compromised?",
              ],
              answer: 1,
              explanation: "The strongest question is neutral, bounded, evidence-oriented, time-aware, and explicit about attribution limits.",
            },
            {
              question: "A fictional second identity appears in one correlation record, but its relationship to the approved question is not established. What is strongest?",
              choices: [
                "Automatically add the identity to scope.",
                "Ignore it permanently.",
                "Classify it as Unknown or a scope-change candidate and require relationship, purpose, privacy, ownership, and approval before expansion.",
                "Assume the second identity caused the event.",
              ],
              answer: 2,
              explanation: "Possible relevance should be preserved without silently expanding the investigation.",
            },
            {
              question: "Why does technical access not create investigative authority?",
              choices: [
                "Because technical access is never useful.",
                "Because authority depends on approved purpose, ownership, scope, privacy, recipients, and decision rights rather than capability alone.",
                "Because only leadership may view evidence.",
                "Because every investigation must avoid technical evidence.",
              ],
              answer: 1,
              explanation: "Capability and permission are different. Professional investigation requires documented purpose and authority.",
            },
            {
              question: "A required fictional source is Blind during the relevant period. Which conclusion is strongest?",
              choices: [
                "Nothing happened because no event is visible.",
                "The source proves the account was safe.",
                "The conclusion should remain Unknown or source-limited unless other reliable evidence supports it.",
                "Expand to every unrelated evidence source automatically.",
              ],
              answer: 2,
              explanation: "A Blind source cannot support a reliable confirmation or absence conclusion for that period.",
            },
            {
              question: "A supplied fictional export contains one relevant service field and unrelated personal content. What is strongest?",
              choices: [
                "Review all content because the export is already available.",
                "Use only the minimum necessary supplied field, keep unrelated content excluded, and escalate if broader use later becomes necessary.",
                "Share the full export with every reviewer.",
                "Treat personal content as relevant because it mentions the service.",
              ],
              answer: 1,
              explanation: "Availability does not remove purpose limitation or minimization requirements.",
            },
            {
              question: "Which statement best handles fictional account attribution?",
              choices: [
                "An event associated with Account A proves Person A performed it.",
                "The record supports activity associated with Account A; person-level attribution requires additional evidence and may remain unresolved.",
                "A shared device proves someone else used the account.",
                "An account event proves harmful intent.",
              ],
              answer: 1,
              explanation: "Account association is not automatically person attribution, especially when device, session, automation, or delegation context is incomplete.",
            },
            {
              question: "What is the strongest reason to version a fictional scope change?",
              choices: [
                "To make the investigation look more formal.",
                "To preserve what changed, why it changed, which evidence triggered it, who approved it, when it took effect, and what new boundaries apply.",
                "To avoid documenting the original scope.",
                "To allow analysts to expand without owner review.",
              ],
              answer: 1,
              explanation: "Versioning makes scope evolution reconstructable, reviewable, accountable, and privacy-aware.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Forensic Investigation Charter"
          prompt="Create a fully fictional A8.1 Forensic Investigation Charter for Northbridge. Include one neutral primary forensic question, three bounded subquestions, the decision need, requesting owner, decision owner, investigation coordinator, evidence owners, privacy reviewer, qualified governance reviewer, purpose, systems, identities, services, approved time range, evidence categories, source-health expectations, minimum-necessary fields, excluded data, unrelated-information rule, recipients, access model, retention concept, stop conditions, scope states, one Unknown item, one excluded item, one scope-change candidate, scope-change approval workflow, attribution limits, non-proof statements, five alternative explanations, open owner questions, closure criteria, reopen triggers, and a statement that every organization, identity, account, device, service, source, record, date, event, decision, and outcome is invented."
          tips={[
            "Write the question before listing evidence so evidence availability does not define purpose.",
            "Keep account, device, session, and application observations separate from person-level attribution.",
            "Use Unknown when a Blind, Degraded, delayed, conflicting, or missing source prevents a supported conclusion.",
            "Document exclusions as deliberate controls rather than silently ignoring why information is not being used.",
            "Show one legitimate scope-change example and include the evidence trigger, owner, approval, effective time, privacy effect, and new boundary.",
            "Keep the artifact completely fictional, non-invasive, privacy-safe, defensive, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A8.2 Evidence Integrity and Chain of Custody?">
          <p className="leading-8">Rate your readiness from 1 to 5 for neutral forensic questions, purpose limitation, authority, scope states, minimization, source health, attribution limits, scope change, privacy, stop conditions, closure, and public-safe fictionalization.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a forensic question should describe uncertainty instead of embedding a conclusion.",
              "I can identify the fictional decision owner and explain why the answer is needed.",
              "I can distinguish technical relevance from approved investigative purpose.",
              "I can classify new fictional evidence as In scope, Conditional, Unknown, Excluded, Out of scope, or Scope-change candidate.",
              "I can explain why a Blind source supports Unknown rather than a confident absence conclusion.",
              "I can prevent account or device records from becoming unsupported person attribution.",
              "I can document a scope change instead of silently widening the investigation.",
              "I can identify when minimization protects both privacy and evidence quality.",
              "I can write stop conditions that pause the fictional investigation when authority or purpose changes.",
              "I can explain how a forensic investigation may close with transparent, owned Unknowns.",
            ].map((item) => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>)}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Professional forensic reasoning begins with a neutral question and decision need, not with open-ended evidence collection.",
            "Technical capability does not create investigative authority; purpose, ownership, privacy, scope, recipients, and decision rights must be documented.",
            "Scope should identify fictional systems, identities, services, time, evidence categories, questions, exclusions, recipients, owners, and stop conditions.",
            "In scope, Conditional, Unknown, Excluded, Out of scope, and Scope-change candidate states preserve nuance and prevent silent expansion.",
            "Evidence plans should be minimum necessary and driven by the approved question rather than by technical availability.",
            "Source health affects which conclusions are supportable; Blind or Degraded evidence may require Unknown, alternate evidence, source recovery, or narrower conclusions.",
            "Account, device, session, and application records support object-level observations but do not automatically prove who physically acted or why.",
            "Scope changes can be legitimate, but they should be evidence-triggered, purpose-limited, privacy-aware, owner-approved, versioned, and time-bounded.",
            "Stop conditions protect the investigation when authority, purpose, sensitive information, ownership, evidence quality, or scope materially changes.",
            "A strong forensic investigation can close with transparent Unknowns when remaining uncertainty, ownership, follow-up, retention, and reopening criteria are documented.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">This Lesson Teaches Forensic Reasoning, Not Real Investigation</h2>
          <p className="mt-3 leading-7">Nothing in A8.1 authorizes access, investigation, monitoring, collection, preservation, imaging, memory capture, extraction, credential recovery, packet capture, live acquisition, storage access, account access, private-message review, configuration changes, recovery actions, surveillance, or examination involving any real device, account, application, service, storage system, network, organization, incident, classmate, teacher, family member, or other person. Use only fully invented supplied evidence.</p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Evidence Integrity and Chain of Custody</h2>
          <p className="mt-3 max-w-3xl leading-7">A8.1 defined what the investigation is allowed to ask and review. A8.2 moves to the next professional question: once a fictional evidence item is in scope, how do defenders document its identity, provenance, handling, access, transfer, integrity, retention, correction, and limitations?</p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}