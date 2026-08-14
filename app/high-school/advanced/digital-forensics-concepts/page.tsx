import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/digital-forensics-concepts`;
const previousModule = `${trackPath}/incident-response-lifecycle`;

const lessons = [
  {
    "number": "A8.1",
    "title": "Forensic Questions and Investigation Scope",
    "slug": "forensic-questions-and-investigation-scope",
    "summary": "Learn how professional fictional investigations begin with a bounded question, valid authority, defined purpose, relevant people and systems, time limits, evidence categories, exclusions, privacy limits, owner responsibilities, and explicit stop conditions instead of collecting everything that might be available.",
    "skills": [
      "Translate vague concerns into neutral, answerable forensic questions",
      "Define fictional purpose, authority, systems, identities, time range, evidence categories, exclusions, owners, and stop conditions",
      "Separate what is known, unknown, assumed, disputed, unavailable, and outside scope",
      "Recognize scope creep, curiosity-driven collection, unsupported attribution, and privacy overreach"
    ],
    "defensiveLab": "Create a fully fictional forensic-question charter, scope matrix, authority map, evidence-category plan, privacy boundary, assumptions register, stop-condition list, and scope-change record for Northbridge."
  },
  {
    "number": "A8.2",
    "title": "Evidence Integrity and Chain of Custody",
    "slug": "evidence-integrity-and-chain-of-custody",
    "summary": "Study evidence integrity and chain of custody as documentation and governance concepts: evidence identity, origin, purpose, ownership, access, handling history, timestamps, status, transfers, preservation decisions, corrections, retention, and disposition—without performing invasive acquisition.",
    "skills": [
      "Explain why evidence integrity depends on traceability, preservation, controlled access, and documented handling",
      "Distinguish evidence identity, provenance, custody, access, review, transfer, retention, and disposition",
      "Recognize unexplained changes, missing ownership, broken chronology, excessive access, and undocumented transfers",
      "Document fictional evidence limitations and confidence without claiming more than the record supports"
    ],
    "defensiveLab": "Build a fictional evidence register and chain-of-custody model using supplied records only, including purpose, evidence ID, origin, owner, timestamps, access, transfer, status, limitations, correction history, retention, and disposition."
  },
  {
    "number": "A8.3",
    "title": "Timeline Analysis Concepts",
    "slug": "timeline-analysis-concepts",
    "summary": "Learn how defenders reason about chronology by separating event time, record time, receipt time, processing time, review time, decision time, source timezone, clock uncertainty, duplicate events, delayed records, gaps, conflicts, and sequence hypotheses.",
    "skills": [
      "Separate different kinds of timestamps instead of treating one field as the complete chronology",
      "Build fictional event sequences while preserving uncertainty, gaps, delays, and conflicting evidence",
      "Use before, during, after, concurrent, and unknown relationships carefully",
      "Avoid treating temporal proximity as proof of causation, identity, intent, or impact"
    ],
    "defensiveLab": "Create a fictional multi-source timeline worksheet from supplied records, label each time type, mark confidence and source health, identify gaps and conflicts, and write bounded sequence conclusions."
  },
  {
    "number": "A8.4",
    "title": "Endpoint Artifact Concepts",
    "slug": "endpoint-artifact-concepts",
    "summary": "Study endpoint artifacts only as conceptual evidence categories that may help answer bounded questions about system state, user activity, applications, configuration, files, processes, sessions, updates, and changes—without teaching acquisition commands, extraction methods, or invasive procedures.",
    "skills": [
      "Explain what an artifact category can conceptually represent and what it cannot prove",
      "Map fictional questions to high-level endpoint evidence categories without operational collection steps",
      "Separate observation from interpretation, attribution, intent, and impact",
      "Recognize missing context, stale records, shared-device ambiguity, source limitations, and privacy concerns"
    ],
    "defensiveLab": "Use a supplied fictional endpoint-artifact catalog to map evidence categories to questions, expected meaning, limitations, privacy concerns, source health, alternative explanations, and owner decisions."
  },
  {
    "number": "A8.5",
    "title": "Memory and Storage Evidence Concepts",
    "slug": "memory-and-storage-evidence-concepts",
    "summary": "Learn high-level differences between temporary and persistent evidence, volatile and durable state, memory-related concepts, storage-related concepts, snapshots, backups, deleted-state uncertainty, encryption, access boundaries, and preservation priorities without teaching capture, imaging, extraction, bypass, or recovery techniques.",
    "skills": [
      "Distinguish volatile and persistent evidence conceptually",
      "Explain why evidence availability can change over time and why preservation decisions need qualified owners",
      "Recognize encryption, retention, overwrite, synchronization, backup, and access boundaries as evidence limitations",
      "Avoid assuming that missing data proves absence or that persistent data proves current state"
    ],
    "defensiveLab": "Classify supplied fictional evidence descriptions as temporary, persistent, mixed, unknown, or unavailable and document what each category may support, what it cannot prove, privacy limits, and escalation needs."
  },
  {
    "number": "A8.6",
    "title": "Browser and Account Activity Concepts",
    "slug": "browser-and-account-activity-concepts",
    "summary": "Study browser and account activity as high-level evidence categories involving sessions, authentication, navigation records, account events, approvals, notifications, synchronization, shared devices, and identity context while avoiding credential access, secret recovery, bypass, or invasive inspection.",
    "skills": [
      "Distinguish browser activity, account activity, authentication evidence, session evidence, and user attribution",
      "Recognize shared-device, synchronization, automated activity, stale-session, and timezone ambiguity",
      "Use privacy minimization when fictional records include personal or communication context",
      "Avoid claiming that a record proves who physically performed an action or why"
    ],
    "defensiveLab": "Analyze a supplied fictional browser-and-account evidence matrix to identify supported observations, identity limitations, privacy concerns, source health, alternative explanations, and next owner questions."
  },
  {
    "number": "A8.7",
    "title": "Log Correlation for Forensics",
    "slug": "log-correlation-for-forensics",
    "summary": "Learn how forensic reasoning compares supplied fictional records across identity, endpoint, application, service, network, supplier, and audit sources while preserving provenance, clock differences, source health, missing fields, duplicate events, transformation, and correlation uncertainty.",
    "skills": [
      "Correlate supplied fictional records around one bounded question rather than joining everything",
      "Preserve source meaning, provenance, source health, timing, and transformation limitations",
      "Recognize coincidence, shared identifiers, delayed records, duplicates, and missing evidence",
      "Build a defensible correlation narrative that separates observation, support, contradiction, and unknowns"
    ],
    "defensiveLab": "Create a fictional correlation worksheet linking supplied records by question, identifier, time, relationship, source health, support, conflict, alternative explanation, confidence, and unresolved evidence."
  },
  {
    "number": "A8.8",
    "title": "Forensic Reporting Standards",
    "slug": "forensic-reporting-standards",
    "summary": "Write professional fictional forensic reports that separate purpose, scope, authority, evidence, safe high-level methodology description, findings, limitations, chronology, confidence, alternative explanations, conclusions, unresolved questions, privacy, review, and distribution.",
    "skills": [
      "Separate facts, interpretations, conclusions, limitations, assumptions, and recommendations",
      "Write reproducible reasoning without publishing invasive procedures or sensitive operational details",
      "Use audience-appropriate language for technical, leadership, legal, privacy, and public-safe summaries",
      "Preserve correction history, versioning, reviewer comments, evidence references, and distribution controls"
    ],
    "defensiveLab": "Draft a fictional forensic report package with executive summary, scope, authority, evidence table, chronology, findings, limitations, alternatives, conclusions, unresolved questions, review record, and public-safe summary."
  },
  {
    "number": "A8.9",
    "title": "Ethical Limits in Investigations",
    "slug": "ethical-limits-in-investigations",
    "summary": "Study professional limits involving authorization, necessity, proportionality, privacy, minimization, sensitive information, unrelated findings, personal devices, communications, minors, third parties, legal review, conflicts, retention, disclosure, and stopping when authority or purpose changes.",
    "skills": [
      "Recognize when investigative curiosity exceeds the approved fictional purpose",
      "Apply minimization, need-to-know, access limits, retention, escalation, recusal, and stop conditions",
      "Separate a security question from unrelated personal, academic, medical, legal, or private information",
      "Protect fairness by avoiding unsupported blame, selective evidence, hidden uncertainty, and unnecessary disclosure"
    ],
    "defensiveLab": "Complete a fictional ethics-and-scope decision matrix covering authority, purpose, minimization, sensitive information, unrelated findings, third parties, conflicts, escalation, retention, communication, and stopping conditions."
  },
  {
    "number": "A8.10",
    "title": "Forensics Reasoning Lab",
    "slug": "forensics-reasoning-lab",
    "summary": "Integrate the full A8 workflow using supplied fictional evidence only: define the question, confirm authority, set scope, classify evidence, assess provenance and source health, build a timeline, correlate records, evaluate alternatives, document limitations, reach bounded conclusions, and write a professional report.",
    "skills": [
      "Run a complete fictional forensic reasoning workflow without accessing or examining real systems",
      "Connect evidence identity, provenance, integrity, chronology, source health, correlation, privacy, and reporting",
      "Revise conclusions when supplied evidence conflicts, arrives late, or changes source-health confidence",
      "Produce an executive-ready report and public-safe portfolio artifact using only invented material"
    ],
    "defensiveLab": "Complete the fictional Northbridge Forensics Reasoning Package using supplied artifacts and records only, including question charter, scope, evidence register, custody model, timeline, correlation matrix, findings, alternatives, limitations, report, ethics review, and reflection."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Define the forensic question",
    "description": "Translate a fictional concern into one neutral, answerable question that identifies the decision the evidence is meant to support and avoids assumptions about guilt, intent, compromise, or cause.",
    "output": "Bounded forensic question and decision statement"
  },
  {
    "step": "2",
    "title": "Confirm authority and purpose",
    "description": "Identify fictional authorization, requesting owner, purpose, allowed evidence categories, privacy expectations, recipients, retention, escalation, and explicit exclusions before analysis begins.",
    "output": "Authority, purpose, privacy, and ownership charter"
  },
  {
    "step": "3",
    "title": "Set investigation scope",
    "description": "Define fictional identities, systems, services, time periods, evidence categories, relevant relationships, exclusions, stop conditions, scope-change approval, and questions that remain outside the investigation.",
    "output": "Versioned scope and exclusion matrix"
  },
  {
    "step": "4",
    "title": "Register supplied evidence",
    "description": "Assign fictional evidence identifiers and document origin, provenance, owner, time fields, source health, access, handling status, limitations, purpose, retention, and any correction or transfer history.",
    "output": "Evidence register and custody record"
  },
  {
    "step": "5",
    "title": "Evaluate integrity and source health",
    "description": "Assess whether supplied fictional evidence is complete enough, traceable, current, consistent, readable, appropriately handled, and suitable for the specific conclusion being considered.",
    "output": "Integrity, provenance, and source-health assessment"
  },
  {
    "step": "6",
    "title": "Build the chronology",
    "description": "Separate fictional event time, receipt time, processing time, review time, timezone, delay, duplication, gaps, conflicts, and uncertainty before describing sequence.",
    "output": "Multi-time forensic timeline"
  },
  {
    "step": "7",
    "title": "Correlate around the question",
    "description": "Compare supplied fictional records only where a relationship helps answer the bounded question, preserving source meaning, identifiers, time differences, alternatives, and confidence.",
    "output": "Correlation and relationship matrix"
  },
  {
    "step": "8",
    "title": "Test alternative explanations",
    "description": "Compare fictional benign, administrative, timing, automation, synchronization, shared-device, source-health, configuration, supplier, and process explanations against the same evidence.",
    "output": "Alternative-explanation and contradiction register"
  },
  {
    "step": "9",
    "title": "State findings with limits",
    "description": "Separate fictional observations, supported findings, confidence, uncertainty, contradictions, unresolved questions, non-proof statements, privacy limits, and owner decisions.",
    "output": "Evidence-to-finding traceability matrix"
  },
  {
    "step": "10",
    "title": "Report, review, retain, and close",
    "description": "Produce a fictional report with scope, evidence, chronology, findings, limitations, review, versioning, distribution, retention, disposition, open questions, and criteria for reopening.",
    "output": "Reviewed forensic report and closure record"
  }
];

const objectives = [
  "Explain digital forensics as disciplined evidence reasoning and documentation rather than unrestricted technical collection.",
  "Frame fictional investigations using neutral questions, valid authority, purpose limitation, precise scope, ownership, exclusions, stop conditions, and controlled scope change.",
  "Evaluate fictional evidence integrity through identity, provenance, source health, timing, access, handling history, custody, retention, correction, and disposition records.",
  "Build fictional timelines that preserve multiple time fields, timezone, delay, duplication, gaps, conflicts, clock uncertainty, and non-causal relationships.",
  "Reason safely about endpoint, memory, storage, browser, account, and log evidence categories without teaching invasive acquisition, extraction, bypass, or recovery procedures.",
  "Correlate supplied fictional records across multiple evidence categories while preserving source meaning, privacy, alternatives, contradictions, and confidence.",
  "Write professional fictional forensic reports that separate facts, findings, interpretation, limitations, alternatives, unresolved questions, review, distribution, and public-safe summaries.",
  "Apply ethical limits including authorization, minimization, proportionality, need-to-know, sensitive-information handling, conflicts, third-party privacy, retention, escalation, and stopping when purpose changes."
];

const rolePreview = [
  {
    "role": "Question before evidence",
    "mission": "The fictional investigation begins with a decision question, not with an urge to search every available source.",
    "doesNotReplace": "Evidence quality, authority, privacy, source health, owner judgment, or later review.",
    "readiness": "Question, purpose, owner, authority, scope, exclusions, stop conditions, and expected decision are written first."
  },
  {
    "role": "Integrity before interpretation",
    "mission": "A supplied fictional record must have enough identity, provenance, context, timing, and handling history to support reliable interpretation.",
    "doesNotReplace": "A missing or weak provenance record cannot be repaired by analyst confidence or a persuasive narrative.",
    "readiness": "Evidence ID, origin, source owner, time fields, source health, handling, access, status, and limitations are recorded."
  },
  {
    "role": "Chronology before causation",
    "mission": "Events may occur near each other without proving that one caused another.",
    "doesNotReplace": "Temporal proximity does not establish identity, intent, causation, scope, or impact.",
    "readiness": "Sequence, uncertainty, delay, duplicates, missing intervals, alternative explanations, and non-proof statements remain visible."
  },
  {
    "role": "Correlation before attribution",
    "mission": "Matching identifiers or time windows can support relationships without proving who physically acted or why.",
    "doesNotReplace": "Shared-device, automation, synchronization, stale-session, supplier, or delegated-role ambiguity.",
    "readiness": "Relationship strength, identity limitations, source health, alternatives, and owner context are documented."
  },
  {
    "role": "Minimization before curiosity",
    "mission": "Only fictional evidence relevant to the approved purpose should be used.",
    "doesNotReplace": "Need-to-know, privacy, access limits, retention, third-party protection, or unrelated-finding governance.",
    "readiness": "Purpose, allowed fields, recipients, access, retention, redaction needs, unrelated findings, and escalation paths are defined."
  },
  {
    "role": "Limitations before certainty",
    "mission": "Professional findings explain what the supplied evidence does not establish.",
    "doesNotReplace": "Missing sources, conflicting timestamps, weak attribution, uncertainty, alternatives, or unresolved questions.",
    "readiness": "Every important finding includes support, contradiction, source health, confidence, limitations, alternatives, and unresolved questions."
  },
  {
    "role": "Review before release",
    "mission": "Forensic conclusions receive the appropriate fictional technical, privacy, legal, service, leadership, or other owner review before distribution.",
    "doesNotReplace": "Evidence traceability, author responsibility, versioning, correction, or audience control.",
    "readiness": "Reviewer, version, approval state, audience, distribution purpose, correction process, and public-safe boundary are documented."
  },
  {
    "role": "Lifecycle before archive",
    "mission": "Closing a fictional investigation includes open questions, retention, disposition, corrective actions, lessons, and reopening criteria.",
    "doesNotReplace": "Ongoing owner obligations or the need to reassess when material new evidence arrives.",
    "readiness": "Closure owner, open items, retention, disposition, follow-up, archive, reopen triggers, and lessons are recorded."
  }
];

const evidencePreview = [
  {
    "id": "DF-01",
    "source": "Fictional investigation request",
    "observation": "A Northbridge service owner asks whether an unusual account event occurred during a specific two-hour support window.",
    "supports": "A bounded forensic question can be defined around account activity, time, service context, and the decision the owner needs to make.",
    "limits": "The request does not prove misuse, identity, impact, cause, or that every connected source should be reviewed.",
    "responseUse": "Define purpose, authority, scope, allowed evidence categories, exclusions, privacy, owners, and stop conditions."
  },
  {
    "id": "DF-02",
    "source": "Fictional evidence register",
    "observation": "Three supplied records have clear IDs and owners, while one exported summary has no documented origin time or transformation history.",
    "supports": "The three traceable records may support stronger findings than the untraceable summary.",
    "limits": "A missing provenance field does not automatically make the summary false; it makes its evidentiary use Conditional.",
    "responseUse": "Record provenance limitations, request qualified clarification, and avoid using the summary as sole support for a high-confidence conclusion."
  },
  {
    "id": "DF-03",
    "source": "Fictional multi-time timeline",
    "observation": "One account event occurred before a service alert but was processed after the alert because the source delivered records late.",
    "supports": "Event chronology and processing chronology are different and should not be collapsed.",
    "limits": "The time relationship does not prove the account event caused the service alert.",
    "responseUse": "Separate event, receipt, processing, review, and decision times and preserve delay plus causation limits."
  },
  {
    "id": "DF-04",
    "source": "Fictional endpoint artifact catalog",
    "observation": "A supplied artifact category indicates that an application was present on one device during the review period.",
    "supports": "The device had evidence associated with that application category.",
    "limits": "Presence does not prove who used it, when every action occurred, harmful intent, or incident impact.",
    "responseUse": "Connect the artifact only to bounded questions it can support and document attribution plus timing limitations."
  },
  {
    "id": "DF-05",
    "source": "Fictional browser and account matrix",
    "observation": "A browser session, account event, and notification share a fictional account identifier, but the device is used by more than one approved person.",
    "supports": "The records may describe activity associated with the account and device context.",
    "limits": "The shared device prevents confident physical-person attribution from those records alone.",
    "responseUse": "Preserve identity uncertainty, compare owner context, and avoid personal blame."
  },
  {
    "id": "DF-06",
    "source": "Fictional correlation worksheet",
    "observation": "Identity, application, and service records align within the same support window, while a fourth source is Blind for forty minutes.",
    "supports": "Multiple sources support part of the chronology and relationship.",
    "limits": "The Blind source prevents a complete cross-source conclusion for the full window.",
    "responseUse": "State which period is supported, which remains Unknown, and what owner decision depends on source recovery."
  }
];

const decisionQuestions = [
  [
    "Question",
    "What exact fictional decision question is the investigation trying to answer without assuming guilt, cause, identity, or intent?"
  ],
  [
    "Authority",
    "Who authorized the fictional review, for what purpose, over which evidence categories, people, systems, time period, and recipients?"
  ],
  [
    "Integrity",
    "What fictional evidence identity, provenance, timing, source health, handling, access, transfer, transformation, and limitation records exist?"
  ],
  [
    "Timeline",
    "Which fictional event, receipt, processing, review, and decision times are known, delayed, duplicated, conflicting, or Unknown?"
  ],
  [
    "Correlation",
    "Which supplied fictional records genuinely relate to the bounded question, and which relationships are coincidental, weak, incomplete, or unsupported?"
  ],
  [
    "Alternatives",
    "Which fictional administrative, technical, timing, synchronization, automation, shared-device, supplier, source-health, or benign explanations remain plausible?"
  ],
  [
    "Ethics",
    "Which fictional privacy, minimization, sensitive-information, third-party, conflict, retention, access, and stop-condition boundaries apply?"
  ],
  [
    "Reporting",
    "What can the fictional evidence support, what can it not prove, what remains unresolved, who must review it, and which audience needs the result?"
  ]
];

const portfolioArtifacts = [
  "Fictional forensic-question charter with decision need, neutral wording, requesting owner, authority, purpose, privacy, scope, exclusions, stop conditions, and scope-change governance",
  "Investigation scope matrix covering fictional identities, systems, services, evidence categories, time periods, relationships, owners, in-scope questions, excluded questions, and escalation",
  "Evidence register containing fictional evidence ID, category, origin, provenance, owner, time fields, source health, handling status, access, purpose, limitation, retention, correction, transfer, and disposition",
  "Chain-of-custody concept model documenting fictional handlers, transfers, acknowledgements, review access, correction history, storage responsibility, and lifecycle status",
  "Multi-time chronology distinguishing fictional event time, receipt time, processing time, review time, decision time, timezone, clock limitations, delayed records, duplicates, gaps, and conflicts",
  "Endpoint artifact concept map showing fictional evidence categories, what each may support, what each cannot prove, privacy considerations, source health, and alternative explanations",
  "Memory and storage evidence concept matrix distinguishing fictional temporary, persistent, mixed, unknown, unavailable, synchronized, backed-up, encrypted, and retention-limited states",
  "Browser and account activity matrix separating fictional account association, browser context, session state, notifications, shared-device ambiguity, automation, synchronization, and attribution limits",
  "Cross-source correlation worksheet linking fictional identity, endpoint, application, service, supplier, and audit records by question, identifier, time, relationship, source health, support, contradiction, and confidence",
  "Alternative-explanation register comparing fictional benign, administrative, technical, timing, automation, synchronization, source-health, supplier, process, and unknown explanations",
  "Evidence-to-finding traceability matrix connecting each fictional finding to evidence IDs, support, contradiction, confidence, limitations, non-proof statements, owner questions, and unresolved evidence",
  "Professional forensic report with fictional purpose, authority, scope, evidence summary, safe methodology description, chronology, findings, limitations, alternatives, conclusions, unresolved questions, review, and distribution",
  "Executive briefing translating fictional forensic findings into bounded business decisions, risk, uncertainty, required owner actions, follow-up, and reopening criteria",
  "Privacy and ethics review covering fictional minimization, need-to-know, sensitive information, unrelated findings, third parties, conflicts, retention, correction, redaction, and public-safe release",
  "Forensics Reasoning Lab package integrating fictional question framing, scope, integrity, custody, timeline, artifact reasoning, correlation, alternatives, reporting, ethics, review, closure, and reflection",
  "Public-safe portfolio case study containing only fully invented organizations, people, systems, evidence, timelines, decisions, findings, lessons, and diagrams"
];

const risks = [
  {
    "risk": "The investigation starts with a conclusion",
    "description": "A fictional analyst may begin by trying to prove misuse, compromise, or blame instead of defining a neutral question.",
    "control": "Write the decision question first, document alternatives, preserve uncertainty, and separate observation from interpretation and attribution."
  },
  {
    "risk": "Scope expands through curiosity",
    "description": "A fictional review can drift into unrelated accounts, systems, communications, people, time periods, or personal information because the evidence is interesting.",
    "control": "Use purpose limitation, explicit exclusions, owner-approved scope changes, minimization, access controls, and stop conditions."
  },
  {
    "risk": "Evidence provenance is ignored",
    "description": "A copied summary, transformed export, screenshot, or supplied record may be treated as equally reliable even when origin, timing, ownership, or transformation is unclear.",
    "control": "Track evidence identity, provenance, time fields, source health, handling, transformations, limitations, and evidentiary purpose."
  },
  {
    "risk": "A timestamp becomes a complete story",
    "description": "One time field may be treated as proof of event sequence even when records were delayed, duplicated, transformed, synchronized, or generated in different time contexts.",
    "control": "Separate multiple time types, document timezone and clock limitations, preserve gaps, and avoid claiming causation from proximity alone."
  },
  {
    "risk": "A device or account is treated as a person",
    "description": "Fictional records tied to an account or device may be attributed to one person despite shared access, automation, delegated roles, stale sessions, or synchronization.",
    "control": "Use attribution limits, owner context, relationship strength, alternatives, source health, and evidence-specific confidence."
  },
  {
    "risk": "Missing evidence is treated as proof of absence",
    "description": "A fictional source may be Blind, Degraded, expired, incomplete, delayed, retained for too short a period, or unavailable for another reason.",
    "control": "Label Unknown and source-limited conclusions explicitly and never convert unavailable evidence into a confident absence claim."
  },
  {
    "risk": "The report hides uncertainty",
    "description": "A polished fictional report may sound definitive while omitting conflicts, Blind periods, alternative explanations, weak attribution, privacy limits, or unresolved questions.",
    "control": "Require evidence-to-finding traceability, confidence, limitations, contradictions, alternatives, review, and non-proof statements."
  },
  {
    "risk": "Real forensic material enters the portfolio",
    "description": "Real screenshots, logs, account records, device details, communications, internal timelines, identities, or case summaries can expose people, systems, and defensive capabilities.",
    "control": "Invent every organization, identity, device, account, service, source, artifact, record, date, event, finding, conclusion, and outcome from the beginning."
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/forensic-questions-and-investigation-scope`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Begin A8.1
      </Link>
    </div>
  );
}

export default function DigitalForensicsConceptsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Investigation and Evidence Reasoning
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Fictional Non-Invasive Training
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8 Digital Forensics Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn professional forensic reasoning through questions, scope, evidence
            integrity, custody, timelines, high-level artifact concepts,
            correlation, reporting, ethical limits, and safe fictional analysis
            without invasive collection techniques or real-system investigation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["10 lessons", "A complete conceptual forensic reasoning pathway"],
            ["1 module test", "25 hidden-answer assessment questions"],
            ["1 connected portfolio", "Forensics reasoning, evidence, timeline, and reporting package"],
            ["100% fictional", "No real systems, invasive collection, private cases, or operational acquisition"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-2xl font-black text-cyan-200">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Module Professional meaning"
          title="Answer Forensic Questions with Evidence, Limits, and Professional Discipline"
        >
          <p className="leading-8">
            Digital forensics is not simply “finding evidence.” A professional
            fictional investigation must connect a bounded question, authority,
            purpose, scope, evidence identity, provenance, source health,
            chronology, correlation, alternative explanations, privacy,
            reporting, review, retention, closure, and reopening.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                Main question
              </p>
              <p className="mt-3 text-lg font-bold leading-8">
                How do professional defenders use supplied evidence, chronology,
                provenance, correlation, privacy, and careful reporting to
                answer forensic questions without exceeding authority or
                overstating conclusions?
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                Safety boundary
              </p>
              <p className="mt-3 leading-7">
                Every organization, person, account, device, service, artifact,
                record, timeline, source, evidence item, investigation, finding,
                conclusion, and outcome is invented. A8 does not teach or
                authorize imaging, memory capture, extraction, bypass, invasive
                acquisition, credential recovery, or real-system investigation.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Entry Readiness"
          title="Before Beginning A8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "I understand that forensic reasoning begins with a bounded question, valid authority, defined purpose, scope, exclusions, privacy limits, owners, and stop conditions.",
              "I will use only supplied fictional records and will not collect, extract, image, capture, recover, inspect, or access data from any real device, account, service, application, storage system, or network.",
              "I will separate observation, interpretation, finding, confidence, limitation, alternative explanation, unresolved question, and conclusion.",
              "I will treat missing, Blind, Degraded, delayed, conflicting, or poorly traced evidence as a limitation rather than forcing a confident answer.",
              "I will avoid attributing fictional device or account activity to a person unless the supplied evidence genuinely supports that conclusion.",
              "I will protect privacy through minimization, need-to-know, purpose limitation, controlled access, retention, careful reporting, and complete fictionalization.",
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

        <SectionCard
          eyebrow="Professional Workflow"
          title="The Ten-Step Forensic Reasoning Workflow"
        >
          <div className="grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required professional output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Outcomes"
          title="Eight Advanced Module Objectives"
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
          eyebrow="Role Readiness Preview"
          title="Eight Principles That Keep Forensic Reasoning Defensible"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {rolePreview.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.role}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Professional meaning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.mission}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Must not replace
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.doesNotReplace}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Readiness requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.readiness}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Lesson Roadmap
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Complete All Ten A8 Lessons
          </h2>

          <div className="mt-6 grid gap-6">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950"
              >
                <div className="grid md:grid-cols-[0.24fr_1fr]">
                  <div className="flex min-h-44 flex-col justify-between border-b border-slate-700 bg-[linear-gradient(145deg,_rgba(34,211,238,0.16),_rgba(168,85,247,0.12),_rgba(15,23,42,0.95))] p-6 md:border-b-0 md:border-r">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                        Lesson {index + 1} of 10
                      </p>
                      <p className="mt-4 text-4xl font-black text-white">
                        {lesson.number}
                      </p>
                    </div>

                    <span className="mt-6 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                      Advanced Defensive Lesson
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-300">
                      {lesson.summary}
                    </p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                          Skills developed
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6">
                          {lesson.skills.map((skill) => (
                            <li key={skill}>• {skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Safe fictional defensive lab
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.defensiveLab}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`${modulePath}/${lesson.slug}`}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Forensic Evidence You Will Learn to Reason About Safely
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Forensic reasoning use", item.responseUse],
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
        </section>

        <SectionCard
          eyebrow="Forensic Decision Preview"
          title="Eight Questions Every Fictional Investigation Must Answer"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {decisionQuestions.map(([title, detail]) => (
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

        <SectionCard
          eyebrow="Portfolio Outcome"
          title="Build a Complete Fictional Forensics Reasoning and Reporting Package"
        >
          <p className="leading-8">
            By the end of A8, you will have one connected fictional package
            showing how a professional forensic question moves from authority
            and scope to integrity, chronology, artifact reasoning, correlation,
            alternatives, findings, ethical review, reporting, closure, and
            public-safe reflection.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Artifact {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{artifact}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Forensic Risk Preview"
          title="Eight Forensic Reasoning Mistakes This Module Will Teach You to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {risks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{item.risk}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it is risky
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.description}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Conceptual Evidence Boundaries"
          title="What A8 Teaches—and What It Deliberately Does Not Teach"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">A8 teaches</p>
              <ul className="mt-4 space-y-3 text-sm leading-7">
                {[
                  "Neutral forensic questions, valid authority, purpose, scope, exclusions, and stop conditions",
                  "Evidence identity, provenance, integrity, source health, chronology, custody, access, retention, and limitations",
                  "High-level endpoint, memory, storage, browser, account, and log evidence categories",
                  "Timeline reasoning, correlation, alternatives, attribution limits, privacy, and professional reporting",
                  "How to state what supplied fictional evidence supports and what it does not prove",
                ].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 p-6 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">A8 does not teach</p>
              <ul className="mt-4 space-y-3 text-sm leading-7">
                {[
                  "Disk imaging, memory capture, live collection, extraction, credential recovery, or bypass",
                  "Commands, scripts, acquisition utilities, invasive tools, recovery procedures, or private-account access",
                  "Surveillance, hidden monitoring, evidence alteration, trace removal, evasion, or unauthorized investigation",
                  "Investigation of real classmates, teachers, family members, organizations, devices, accounts, or incidents",
                  "Publication of real evidence, screenshots, logs, identities, timelines, systems, suppliers, or case information",
                ].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Test"
          title="A8 Digital Forensics Concepts Assessment"
        >
          <p className="leading-8">
            Complete a 25-question hidden-answer assessment covering forensic
            questions, authority, scope, evidence integrity, chain of custody,
            timelines, endpoint artifact concepts, memory and storage concepts,
            browser and account activity, correlation, reporting, ethical
            limits, privacy, attribution, alternatives, confidence, and
            integrated reasoning.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "25 questions",
                "Answers and explanations remain hidden until the student chooses to reveal them.",
              ],
              [
                "All ten lessons",
                "The assessment covers the complete A8 Digital Forensics Concepts pathway.",
              ],
              [
                "Decision-focused",
                "Questions measure evidence quality, chronology, scope, ethics, correlation, reporting, and bounded forensic judgment.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 font-black text-yellow-100 transition hover:bg-yellow-400/20"
            >
              Open A8 Module Test
            </Link>
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Begin Digital Forensics Concepts
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Start with A8.1 to learn how a professional fictional investigation
            begins with a neutral question, decision need, valid authority,
            purpose, scope, evidence categories, exclusions, privacy boundaries,
            owners, assumptions, and stop conditions before any evidence is
            interpreted.
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