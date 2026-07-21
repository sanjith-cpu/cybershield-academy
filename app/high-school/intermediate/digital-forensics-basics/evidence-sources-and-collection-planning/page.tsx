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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/digital-forensics-basics`;
const previousLesson = `${modulePath}/digital-forensics-purpose-ethics-and-authorization`;
const nextLesson = `${modulePath}/evidence-integrity-hashes-and-chain-of-custody`;

const objectives = [
  "Identify the major fictional evidence-source categories that may support a digital-forensics case, including file, endpoint, identity, application, network, cloud, backup, support, and business records.",
  "Prioritize fictional evidence collection using relevance, volatility, accessibility, ownership, source health, privacy impact, preservation risk, duplication, and decision value.",
  "Create a defensible fictional collection plan with source identifiers, owners, approved methods, collection order, expected limitations, alternate sources, and completion criteria.",
  "Distinguish original evidence, preserved copies, working copies, exports, screenshots, notes, derived records, and summaries so that source lineage remains clear.",
  "Recognize when collection should pause because authorization, ownership, privacy, technical safety, evidence integrity, or real-system access is unclear."
];
const vocabulary = [
  [
    "Evidence source",
    "A fictional system, record set, file, account, device, service, workflow, person, or business process that may contain information relevant to the approved case question."
  ],
  [
    "Collection plan",
    "A fictional documented order and method for preserving approved evidence while protecting integrity, privacy, availability, ownership, and source context."
  ],
  [
    "Volatility",
    "How quickly fictional evidence may change, disappear, rotate, expire, be overwritten, or lose useful context."
  ],
  [
    "Relevance",
    "How directly a fictional source can answer the approved case question or test an important alternative explanation."
  ],
  [
    "Source health",
    "The fictional condition of an evidence source, including delivery, completeness, retention, parsing, timestamps, ownership, accessibility, and expected event coverage."
  ],
  [
    "Original evidence",
    "The fictional first preserved form of a supplied record or approved acquisition that should remain unchanged and traceable."
  ],
  [
    "Working copy",
    "A fictional authorized copy used for analysis so the original can remain preserved."
  ],
  [
    "Derived evidence",
    "A fictional timeline, filtered export, table, chart, screenshot, hash list, note, or correlation result created from one or more earlier sources."
  ],
  [
    "Source lineage",
    "The fictional record showing which original source produced each export, working copy, screenshot, note, timeline event, finding, or report statement."
  ],
  [
    "Collection order",
    "The fictional sequence in which evidence sources are preserved based on volatility, relevance, risk, ownership, dependencies, and operational constraints."
  ],
  [
    "Collection dependency",
    "A fictional prerequisite such as owner approval, system availability, decryption authority, export capability, time synchronization, or evidence-custodian support."
  ],
  [
    "Alternate source",
    "A different fictional evidence source that may answer the same question when the preferred source is unavailable, delayed, incomplete, or unhealthy."
  ],
  [
    "Coverage gap",
    "A fictional time, event type, identity, asset, file, workflow, or source condition not represented by the available evidence."
  ],
  [
    "Collection completion",
    "The fictional point at which the approved source is preserved, verified, indexed, transferred, documented, and ready for review under the case plan."
  ],
  [
    "Collection exception",
    "A fictional approved deviation from the collection plan with reason, risk, owner, alternate evidence, deadline, and reassessment trigger."
  ]
];
const evidenceCategories = [
  {
    "title": "File and storage evidence",
    "examples": "Fictional files, folders, paths, names, sizes, hashes, timestamps, permissions, ownership, version history, storage events, exports, and deletion indicators.",
    "value": "Can support what content existed, where it appeared, how copies relate, which account or process touched it, and whether the supplied set changed over time.",
    "limits": "Metadata may be changed by copying, synchronization, restoration, extraction, time-zone conversion, or the collection method itself.",
    "alternate": "Storage audit records, application logs, cloud history, backup catalogs, deployment records, and business workflow records."
  },
  {
    "title": "Endpoint and operating-system evidence",
    "examples": "Fictional event logs, services, scheduled tasks, process records, recent items, installed applications, configuration, user sessions, and device health.",
    "value": "Can support which fictional device, service, account, process, or configuration participated in an event.",
    "limits": "Retention, clock drift, local alteration, collection timing, shared accounts, unsupported systems, and missing context may reduce certainty.",
    "alternate": "Identity logs, application records, network telemetry, deployment records, endpoint-management data, and support history."
  },
  {
    "title": "Identity and access evidence",
    "examples": "Fictional sign-ins, tokens, service identities, role assignments, permission changes, session events, authentication results, and account lifecycle records.",
    "value": "Can connect activity to a fictional identity, access path, role, session, or authorization state.",
    "limits": "An identity record does not automatically identify the human intent, device user, or exact action taken after authentication.",
    "alternate": "Endpoint sessions, application logs, storage transactions, network records, ticket history, and business workflow approvals."
  },
  {
    "title": "Application and service evidence",
    "examples": "Fictional application events, request identifiers, job records, transaction logs, errors, API activity, service health, configuration, and deployment version.",
    "value": "Can explain how an approved workflow processed data and which service action produced an observed result.",
    "limits": "Application logs may be delayed, filtered, sampled, incomplete, misparsed, or missing when the service fails.",
    "alternate": "Storage transactions, identity records, deployment records, process snapshots, support reports, and business records."
  },
  {
    "title": "Network and connection evidence",
    "examples": "Fictional DNS, proxy, firewall, flow, connection, destination, source, protocol, timing, and service-routing records.",
    "value": "Can support communication between fictional systems, services, identities, or external destinations.",
    "limits": "A connection does not prove content, purpose, success, user intent, or every action within the session.",
    "alternate": "Application requests, endpoint process connections, cloud audit events, identity sessions, and vendor records."
  },
  {
    "title": "Cloud and platform evidence",
    "examples": "Fictional audit events, storage actions, sharing settings, service identities, administrative changes, API calls, object history, and platform health.",
    "value": "Can support actions performed through a fictional hosted platform and show administrative or data-access changes.",
    "limits": "Retention, export delay, account ownership, provider interpretation, regional time, and unavailable event types may create gaps.",
    "alternate": "Application records, identity events, network telemetry, support tickets, backup records, and vendor response."
  },
  {
    "title": "Backup and recovery evidence",
    "examples": "Fictional backup catalogs, restore points, image manifests, retention schedules, version snapshots, recovery tests, and storage locations.",
    "value": "Can show earlier states, missing versions, recovery alignment, and whether a condition existed before or after a change.",
    "limits": "Backups may be incomplete, stale, encrypted, overwritten, outside current ownership, or unsafe to restore into a live environment.",
    "alternate": "File version history, deployment artifacts, configuration repositories, cloud snapshots, and business archives."
  },
  {
    "title": "Support and business evidence",
    "examples": "Fictional user reports, tickets, approvals, workflow schedules, case notes, ownership records, service expectations, and business impact statements.",
    "value": "Provides the real-world context needed to interpret technical activity and distinguish approved work from unexpected behavior.",
    "limits": "Human reports may be incomplete, delayed, mistaken, influenced by later information, or unable to prove technical details.",
    "alternate": "Application, file, identity, process, transaction, and source-health evidence."
  }
];
const planningFactors = [
  {
    "factor": "Relevance",
    "question": "How directly can this fictional source answer the approved case question or test a meaningful alternative explanation?",
    "high": "The source records the exact workflow, file, identity, process, or transaction under review.",
    "low": "The source is only broadly related by vendor, department, or technology.",
    "record": "Case question supported, competing explanation tested, and expected decision value."
  },
  {
    "factor": "Volatility",
    "question": "How quickly could the fictional evidence change, rotate, expire, be overwritten, or lose context?",
    "high": "Running-process, active-session, temporary, short-retention, queue, or in-memory records.",
    "low": "Preserved reports, immutable exports, approved snapshots, archived tickets, and retained business records.",
    "record": "Expected lifetime, overwrite risk, collection deadline, and alternate source."
  },
  {
    "factor": "Source health",
    "question": "Is the fictional source current, complete, accessible, correctly parsed, time-aligned, owned, and expected to contain the event?",
    "high": "Delivery is current and completeness checks pass.",
    "low": "The source is delayed, partially retained, misconfigured, inaccessible, or missing expected events.",
    "record": "Health status, last verified event, delay, retention, parser state, owner, and limitation."
  },
  {
    "factor": "Integrity risk",
    "question": "Could the fictional collection method alter timestamps, metadata, state, access history, content, or system behavior?",
    "high": "Opening the only original in a tool that may write metadata or executing a live query that changes service state.",
    "low": "Reviewing a supplied read-only export or approved verified working copy.",
    "record": "Original-preservation method, working-copy method, verification, and stop condition."
  },
  {
    "factor": "Privacy impact",
    "question": "How much unrelated fictional personal, research, credential, support, or confidential information could be exposed?",
    "high": "Full content review across unrelated folders, accounts, or time periods.",
    "low": "Targeted metadata and event review within an approved subject and time window.",
    "record": "Minimization, masking, access, storage, sharing, retention, and approval conditions."
  },
  {
    "factor": "Operational impact",
    "question": "Could collection affect fictional service availability, performance, evidence generation, business workflow, or recovery readiness?",
    "high": "A live acquisition may pause a critical service or consume limited resources.",
    "low": "An existing export can be preserved without contacting the running service.",
    "record": "Expected effect, maintenance window, business owner, monitoring, rollback, and fallback."
  },
  {
    "factor": "Ownership and authority",
    "question": "Is the fictional source owned and approved by the correct system, data, privacy, incident, partner, or vendor authority?",
    "high": "A partner-controlled backup or vendor platform requires separate approval.",
    "low": "The supplied source is explicitly listed in current authorization.",
    "record": "Owner, approval, delegated authority, conditions, conflicts, and escalation path."
  },
  {
    "factor": "Duplication and independence",
    "question": "Does the fictional source provide new information, or is it another view of the same underlying records?",
    "high": "A separate storage transaction record independently supports an application event.",
    "low": "A dashboard screenshot and CSV are both generated from the same log source.",
    "record": "Original source, transformation, duplicate relationship, and independent evidentiary value."
  }
];
const sourceStates = [
  {
    "state": "Ready to collect",
    "meaning": "The fictional source is relevant, authorized, owned, accessible, healthy, and safe to preserve using the approved method.",
    "action": "Assign identifier, preserve the original form, verify integrity, record lineage and handling, and create the approved working copy."
  },
  {
    "state": "Collect immediately",
    "meaning": "The fictional source is both highly relevant and volatile, and delay could cause loss or material reduction in evidentiary value.",
    "action": "Use the approved expedited method, record time and reason, protect operations, verify the result, and notify the evidence custodian."
  },
  {
    "state": "Collect after dependency",
    "meaning": "The fictional source is relevant but requires owner approval, service window, export support, decryption authority, privacy review, or technical preparation.",
    "action": "Preserve the request, assign the dependency, set a deadline, identify alternate evidence, and define escalation."
  },
  {
    "state": "Use supplied export",
    "meaning": "The fictional case already contains an approved export that can answer the question without contacting the live source.",
    "action": "Preserve the export, verify its source and time range, document generation method and limitations, and avoid unnecessary live collection."
  },
  {
    "state": "Source unhealthy",
    "meaning": "The fictional source is delayed, incomplete, misparsed, inaccessible, or missing expected events.",
    "action": "Document the health failure, use alternate evidence, repair and test the source, adjust confidence, and reassess when records arrive."
  },
  {
    "state": "Outside current scope",
    "meaning": "The fictional source, subject, time window, owner, or collection method is not covered by current authorization.",
    "action": "Do not collect or inspect it; preserve the reference, restrict exposure, request a scope decision, and proceed only after approval."
  },
  {
    "state": "Collection unsafe",
    "meaning": "The fictional method could alter the only original, disrupt a critical workflow, destroy volatile evidence, or expose unnecessary private data.",
    "action": "Stop, preserve current context, propose a safer method, create a working copy or maintenance plan, and obtain approval."
  },
  {
    "state": "Not necessary",
    "meaning": "The fictional source adds little decision value because the approved question is already answered by stronger, less intrusive evidence.",
    "action": "Record why collection is unnecessary and preserve the expansion trigger that would justify revisiting the source."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Restate the approved question",
    "detail": "Confirm the fictional decision, scope, owners, privacy boundary, time window, and what level of confidence the collection must support.",
    "output": "Collection objective and evidence questions."
  },
  {
    "step": "2",
    "title": "Build the source inventory",
    "detail": "List fictional file, endpoint, identity, application, network, cloud, backup, support, business, vendor, and source-health records that may be relevant.",
    "output": "Evidence-source inventory with owners and identifiers."
  },
  {
    "step": "3",
    "title": "Assess source value and risk",
    "detail": "Score fictional relevance, volatility, health, integrity risk, privacy impact, operational impact, authority, duplication, and alternate-source availability.",
    "output": "Collection-priority matrix."
  },
  {
    "step": "4",
    "title": "Define the approved method",
    "detail": "Document whether the fictional source will be preserved from a supplied export, read-only snapshot, approved image, vendor export, custodian transfer, or other authorized method.",
    "output": "Method, owner, dependency, verification, and stop condition."
  },
  {
    "step": "5",
    "title": "Set the collection order",
    "detail": "Preserve highly relevant and volatile fictional evidence first while considering operational windows, source dependencies, privacy, and safer existing exports.",
    "output": "Ordered collection schedule and deadlines."
  },
  {
    "step": "6",
    "title": "Prepare alternates and exceptions",
    "detail": "For every important fictional source, identify an alternate, expected gap, exception owner, escalation threshold, and reassessment trigger.",
    "output": "Alternate-source and exception register."
  },
  {
    "step": "7",
    "title": "Preserve, verify, and index",
    "detail": "Assign the fictional evidence identifier, preserve the original, verify integrity, record source lineage and handling, and create the approved working copy.",
    "output": "Evidence register, transfer record, and verified working copy."
  },
  {
    "step": "8",
    "title": "Review collection completeness",
    "detail": "Compare the fictional preserved set with the case questions, source-health state, expected events, gaps, dependencies, privacy rules, and owner decisions.",
    "output": "Collection-completion review and next-analysis handoff."
  }
];
const collectionPlan = [
  {
    "id": "SRC-01",
    "source": "Supplied file-metadata export",
    "priority": "1 - Immediate",
    "reason": "Directly records the duplicate folder, paths, sizes, timestamps, and matching hashes.",
    "method": "Preserve supplied export as original; create verified working copy.",
    "dependency": "Confirm exporter, generation time, scope, and time zone.",
    "alternate": "Storage audit and backup catalog.",
    "limit": "Export may not show every historical metadata state."
  },
  {
    "id": "SRC-02",
    "source": "Supplied process snapshot",
    "priority": "2 - Immediate",
    "reason": "Records the fictional export worker, child copy process, parent relationship, configuration reference, and session state.",
    "method": "Preserve supplied snapshot and documented capture context.",
    "dependency": "Confirm capture timing and whether the process state was complete.",
    "alternate": "Application job records and deployment logs.",
    "limit": "Snapshot represents one moment and may omit earlier process activity."
  },
  {
    "id": "SRC-03",
    "source": "Identity and access records",
    "priority": "3 - High",
    "reason": "Connect the approved service identity and session to the export window.",
    "method": "Preserve approved export with source-health record.",
    "dependency": "Confirm retention and whether session identifiers are included.",
    "alternate": "Application request and storage transaction records.",
    "limit": "Authentication does not prove every later action or human intent."
  },
  {
    "id": "SRC-04",
    "source": "Cloud audit records",
    "priority": "4 - High",
    "reason": "Test whether fictional external sharing, public links, downloads, or administrative changes occurred.",
    "method": "Use supplied audit export; preserve original and working copy.",
    "dependency": "Confirm event types, retention, export delay, and platform time zone.",
    "alternate": "Network, application, support, and vendor records.",
    "limit": "Absence is meaningful only within verified coverage."
  },
  {
    "id": "SRC-05",
    "source": "Application audit records",
    "priority": "5 - High after delay",
    "reason": "May explain the export request, file operation sequence, result code, and duplicate-creation path.",
    "method": "Preserve delayed supplied records when delivered; retain earlier source-health status.",
    "dependency": "Delivery repair and completeness validation.",
    "alternate": "Process, storage, identity, and support records.",
    "limit": "Twelve-minute delay affects timeline confidence until reconciled."
  },
  {
    "id": "SRC-06",
    "source": "Deployment and configuration records",
    "priority": "6 - Medium",
    "reason": "Test whether an outdated fictional configuration reference was active for the export worker.",
    "method": "Use supplied version and deployment history.",
    "dependency": "Confirm approved version, runtime version, and configuration source.",
    "alternate": "Process snapshot and application startup records.",
    "limit": "Repository state may not equal runtime state."
  },
  {
    "id": "SRC-07",
    "source": "Support and business records",
    "priority": "7 - Medium",
    "reason": "Explain the approved workflow, user observation, timing, urgency, and business effect.",
    "method": "Preserve supplied report with author and creation context.",
    "dependency": "Confirm original wording and later edits.",
    "alternate": "Workflow schedule and application job records.",
    "limit": "Human reports may be incomplete or influenced by later information."
  },
  {
    "id": "SRC-08",
    "source": "Unrelated research-folder content",
    "priority": "Do not collect",
    "reason": "The folder is outside the approved subjects and is unnecessary for the current case question.",
    "method": "Preserve only the reference already present in the supplied metadata export.",
    "dependency": "Explicit new owner and privacy approval would be required.",
    "alternate": "None needed for the current approved question.",
    "limit": "No conclusion may be made about the unrelated folder content."
  }
];
const commonMistakes = [
  "Collecting fictional evidence simply because it is available rather than because it supports an approved question.",
  "Using collection order based only on convenience instead of relevance, volatility, source health, privacy, integrity risk, ownership, and operational effect.",
  "Treating every dashboard, CSV, screenshot, and report as independent evidence even when they come from one underlying source.",
  "Failing to preserve the original fictional export before filtering, sorting, renaming, annotating, or converting it.",
  "Working directly on the only copy of a fictional evidence file.",
  "Opening full content when metadata, hashes, identity, process, transaction, or business records can answer the question with less exposure.",
  "Assuming a source is complete because it produced some records.",
  "Treating source silence as proof when retention, delay, parsing, ownership, or expected-event coverage is unknown.",
  "Ignoring collection dependencies such as owner approval, privacy review, maintenance window, vendor support, or decryption authority.",
  "Collecting from an out-of-scope fictional account, folder, system, backup, or time window without approved expansion.",
  "Using a live collection method that could change evidence or disrupt a critical fictional workflow when a safer supplied export exists.",
  "Failing to identify an alternate source for high-value evidence.",
  "Closing collection without checking whether every case question, source-health gap, expected event, dependency, and limitation has been addressed.",
  "Publishing real-looking evidence identifiers, paths, filenames, logs, contacts, system names, hashes, timestamps, or internal collection procedures in a portfolio."
];
const quizQuestions = [
  {
    "question": "Which factor should most strongly influence fictional collection priority?",
    "choices": [
      "The combination of relevance, volatility, source health, integrity risk, privacy, authority, operational impact, and alternate-source availability.",
      "Which source is easiest to open.",
      "Which dashboard looks most serious.",
      "Which source contains the most data."
    ],
    "answer": 0,
    "explanation": "Collection priority should balance evidence value with loss, safety, privacy, authority, and operational risks."
  },
  {
    "question": "Why should a supplied fictional export sometimes be used instead of contacting the live source?",
    "choices": [
      "A verified supplied export may answer the question with lower operational, privacy, and evidence-alteration risk.",
      "Live sources are never useful.",
      "Supplied exports are automatically complete.",
      "Using an export removes the need for source lineage."
    ],
    "answer": 0,
    "explanation": "The least intrusive reliable source is often the safest collection choice."
  },
  {
    "question": "What makes a fictional source volatile?",
    "choices": [
      "Its useful records may change, rotate, expire, be overwritten, or lose context quickly.",
      "It contains a large number of files.",
      "It is stored in the cloud.",
      "It has a high alert severity."
    ],
    "answer": 0,
    "explanation": "Volatility is about the risk of evidence loss or change over time."
  },
  {
    "question": "What should happen when a critical fictional source is delayed?",
    "choices": [
      "Document the health gap, preserve alternate evidence, repair and validate the source, adjust confidence, and reassess when records arrive.",
      "Assume no activity occurred.",
      "Declare the source malicious.",
      "Discard every other source."
    ],
    "answer": 0,
    "explanation": "A delayed source creates uncertainty that must remain visible."
  },
  {
    "question": "Which item is derived evidence?",
    "choices": [
      "A fictional normalized timeline created from preserved identity, application, file, and cloud records.",
      "The original supplied cloud audit export.",
      "The original support report.",
      "The first preserved process snapshot."
    ],
    "answer": 0,
    "explanation": "A timeline is created from earlier sources and should preserve its lineage."
  },
  {
    "question": "What should happen when a fictional evidence source is outside the approved scope?",
    "choices": [
      "Do not collect or inspect it; preserve the reference, restrict exposure, and request a documented scope decision.",
      "Collect it because it may become useful.",
      "Delete the reference.",
      "Include it in the portfolio."
    ],
    "answer": 0,
    "explanation": "Potential relevance does not automatically create authorization."
  },
  {
    "question": "When is fictional collection complete?",
    "choices": [
      "When the approved source is preserved, verified, indexed, transferred, documented, and reviewed against case questions, gaps, dependencies, and limitations.",
      "When the file has been downloaded.",
      "When the analyst has enough screenshots.",
      "When every available source has been collected."
    ],
    "answer": 0,
    "explanation": "Completion requires both technical preservation and case-level review."
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
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

export default function EvidenceSourcesCollectionPlanningPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.11),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I12
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.2 Evidence Sources and Collection Planning
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how an authorized defender identifies fictional evidence
            sources, evaluates their relevance and volatility, verifies source
            health and ownership, protects privacy and operations, chooses safe
            collection methods, records alternate sources, and creates a
            defensible collection order.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I12: Digital Forensics Basics"
          lessonTitle="Evidence Sources and Collection Planning"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive evidence.",
            "I will not collect, image, connect to, search, inspect, alter, export, decrypt, or access any real device, account, file, log, network, cloud service, backup, or private record.",
            "I will prioritize evidence by approved case value, volatility, source health, privacy, integrity risk, ownership, and operational effect.",
            "I will distinguish originals, preserved copies, working copies, exports, screenshots, notes, timelines, and summaries.",
            "I will pause when authorization, ownership, safety, privacy, or evidence integrity is unclear.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Collecting More Evidence Is Not Automatically Better"
        >
          <p className="leading-8">
            The fictional Northbridge archive case contains several useful
            sources: file metadata, identity records, a process snapshot, cloud
            audit records, deployment history, application events, a support
            report, and source-health information. One source is delayed. One
            folder is outside scope. Some records are volatile while others are
            already preserved exports. A professional collection plan must
            decide what to preserve first, what can wait, what should not be
            collected, and which alternate sources can protect the case if an
            expected record is unavailable.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak approach
              </p>
              <p className="mt-2 leading-7">
                Collect every fictional source in any order, work directly on
                originals, ignore source health, and assume more data always
                creates more certainty.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional approach
              </p>
              <p className="mt-2 leading-7">
                Preserve the most relevant and volatile approved evidence using
                safe methods, document health and lineage, minimize exposure,
                identify alternates, and stop at the authorization boundary.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="A Collection Plan Protects Evidence before Analysis Begins"
        >
          <p className="leading-8">
            Without a collection plan, a fictional team may lose volatile
            records, alter originals, expose unrelated information, duplicate
            the same source, miss an important owner, disrupt service, or spend
            time preserving evidence that cannot answer the case question. The
            plan makes priorities, methods, dependencies, gaps, alternates,
            owners, and completion standards visible before the deeper analysis
            starts.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Evidence Valueâ€“Loss Riskâ€“Collection Risk Model"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Evidence value", "How strongly can the fictional source answer the approved question or test an alternative?"],
              ["Loss risk", "How quickly could the fictional source change, rotate, expire, be overwritten, or lose context?"],
              ["Collection risk", "Could preservation alter evidence, expose private information, disrupt service, or cross authority?"],
              ["Source health", "Is delivery current, complete, accessible, correctly parsed, time-aligned, and expected to contain the event?"],
              ["Alternate evidence", "Which different fictional source can support the same question if the preferred source fails?"],
              ["Completion proof", "What shows the fictional source is preserved, verified, indexed, transferred, documented, and ready for analysis?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence Collection Planning Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Evidence Categories
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Sources That May Support a Fictional Case
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Examples
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.examples}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence value
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.value}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Important limits
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limits}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Alternate sources
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Priority Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Factors That Shape Collection Order
          </h2>

          <div className="mt-6 grid gap-5">
            {planningFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.factor}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Higher priority example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.high}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Lower priority example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.low}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Record in the plan
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.record}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Source States
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Decide Whether to Collect, Delay, Substitute, or Stop
          </h2>

          <div className="mt-6 grid gap-4">
            {sourceStates.map((item) => (
              <article
                key={item.state}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.35fr_1fr_1fr]"
              >
                <p className="font-black text-cyan-100">{item.state}</p>
                <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
                <p className="text-sm leading-6 text-emerald-100">{item.action}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Build and Execute a Fictional Collection Plan
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Collection Planning Dashboard"
          subtitle="Training dashboard for supplied fictional evidence only."
          metrics={[
            {
              label: "Approved evidence sources",
              value: "7",
              note: "Seven supplied fictional sources are covered by the current authorization.",
            },
            {
              label: "Volatile high-value sources",
              value: "2",
              note: "The supplied process snapshot and delayed application records require immediate preservation and health review.",
            },
            {
              label: "Sources not to collect",
              value: "1",
              note: "The unrelated research-folder content remains outside current scope and unnecessary for the approved question.",
            },
          ]}
        />

        <FakeAlertCard
          title="Critical Application Source Is Delayed"
          severity="High"
          time="09:38 AM"
          source="Fake Evidence Source Health Console"
          details="The fictional application audit source is twelve minutes behind current time while identity, file, cloud, support, deployment, and process records are available."
          recommendation="Preserve the available independent sources, document the application-source health gap, assign the source owner, validate delivery repair, retain the earlier timeline version, adjust confidence, identify expected missing events, and reassess the collection when delayed records arrive."
        />

        <FakeLogPanel
          title="Fake Northbridge Collection Planning Records"
          logs={[
            "09:00 CASE question='duplicate archive folder' scope='approved export workflow'",
            "09:03 INVENTORY sources='metadata,process,identity,cloud,application,deployment,support'",
            "09:06 PRIORITY SRC-01='metadata immediate' reason='direct artifact evidence'",
            "09:08 PRIORITY SRC-02='process immediate' reason='volatile supplied snapshot'",
            "09:10 PRIORITY SRC-03='identity high' health='current'",
            "09:12 PRIORITY SRC-04='cloud high' coverage='sharing and downloads'",
            "09:15 HEALTH SRC-05='application delayed_12m' alternate='process,storage,identity'",
            "09:18 METHOD originals='preserve' working_copies='verified'",
            "09:21 PRIVACY content_review='not_required' metadata_first='true'",
            "09:24 SCOPE SRC-08='unrelated folder' collection='prohibited'",
            "09:28 DEPENDENCY deployment_runtime='confirm version alignment'",
            "09:32 ALTERNATE cloud='network,application,support,vendor'",
            "09:36 COMPLETE metadata='verified' process='verified' identity='verified'",
            "09:42 EXCEPTION application='open' owner='App-Platform' deadline='10:00'",
            "09:54 REASSESS delayed_records='received' timeline_version='v2'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Collection Plan
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Research Archive Evidence Priorities
          </h2>

          <div className="mt-6 grid gap-5">
            {collectionPlan.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="text-lg font-black text-white">{item.source}</h3>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.priority}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Reason", item.reason],
                    ["Method", item.method],
                    ["Dependency", item.dependency],
                    ["Alternate", item.alternate],
                    ["Limitation", item.limit],
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

        <AnalyzeEvidenceCard
          title="Which Collection Decision Is Best Supported?"
          evidence={[
            "The fictional metadata export directly records the duplicate paths and matching hashes.",
            "The supplied process snapshot is time-sensitive and documents the export worker and child copy process.",
            "The application audit source is delayed by twelve minutes.",
            "Identity, cloud, file, deployment, support, and process records remain available.",
            "The unrelated research folder is outside current authorization.",
            "Metadata, process, identity, and cloud records can answer the approved case question without opening file contents.",
          ]}
          question="What should the fictional collection lead do?"
          options={[
            "Preserve and verify the supplied metadata and process records first, collect the approved identity and cloud exports, document the delayed application source and alternates, avoid file-content review, and do not collect the unrelated folder.",
            "Collect the unrelated folder first because it may contain useful information.",
            "Wait for the delayed application source before preserving any other evidence.",
            "Open every file and work directly on the supplied originals.",
          ]}
          bestAnswer={0}
          explanation="The strongest plan protects high-value and volatile evidence, uses available independent sources, preserves the health gap, minimizes exposure, and respects scope."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Evidence Collection Planning"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Create the Northbridge Fictional Collection Plan"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Evidence Source Inventory and Collection Order
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                collection plan that protects evidence value, privacy,
                ownership, source health, and operational safety.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Evidence-source inventory with identifiers and owners.</li>
                <li>Relevance, volatility, source-health, privacy, authority, and integrity-risk ratings.</li>
                <li>Approved method, original-preservation rule, working-copy rule, and verification step.</li>
                <li>Collection order with deadlines and dependencies.</li>
                <li>Alternate source and expected limitation for every high-value record.</li>
                <li>Source-health exception and reassessment trigger.</li>
                <li>Out-of-scope and not-necessary decisions.</li>
                <li>Collection-completion checklist and analysis handoff.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not collect any real evidence. Build the plan only from the
            fictional records displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Application Source Is Delayed"
          scenario="The fictional application audit source is twelve minutes behind, but file metadata, identity, cloud, process, deployment, and support records are current."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the available independent sources, document the source-health gap, assign repair and completeness validation, use alternates, adjust confidence, and reassess when delayed records arrive.",
              outcome:
                "Best defensive choice. Collection continues without pretending the delayed source is complete.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume no application activity occurred.",
              outcome:
                "Unsafe. Source delay makes silence unreliable.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Stop preserving every other source.",
              outcome:
                "Weak. Available high-value evidence may be lost while waiting.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Live Collection Could Alter the Only Original"
          scenario="A fictional analyst proposes opening the only original evidence package in a tool that may update access metadata."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop, preserve the original, verify it, create an approved working copy, document lineage, test the tool on the working copy, and analyze only after the evidence custodian approves.",
              outcome:
                "Best defensive choice. The original remains protected and the method becomes reproducible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the original because the change would be small.",
              outcome:
                "Unsafe. Even a small undocumented change can weaken integrity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Rename the original and treat the renamed file as a copy.",
              outcome:
                "Unsafe. Renaming does not create a verified preserved original and working-copy chain.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Evidence Sources and Collection Planning Checklist"
          items={[
            "I can connect every fictional source to an approved case question or alternative explanation.",
            "I can rate relevance, volatility, source health, integrity risk, privacy impact, operational impact, ownership, duplication, and alternate-source availability.",
            "I can distinguish originals, preserved copies, working copies, exports, screenshots, notes, timelines, and summaries.",
            "I can document source lineage from original evidence to every derived record and report statement.",
            "I can choose a collection order that protects high-value volatile evidence without ignoring privacy, authority, or operations.",
            "I can identify collection dependencies, owners, deadlines, escalation, and completion criteria.",
            "I can document delayed, incomplete, inaccessible, misparsed, or unhealthy sources and adjust confidence.",
            "I can identify alternate evidence that is genuinely independent rather than another view of the same source.",
            "I can stop when a source is outside scope, ownership is unclear, the method is unsafe, or real-system access would be required.",
            "I will use only fictional sources and never expose real systems, accounts, files, logs, routes, credentials, contacts, owners, backups, or private records.",
          ]}
        />

        <MiniQuiz
          title="I12.2 Mini Quiz: Evidence Sources and Collection Planning"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Digital Forensics Collection Plan for the Northbridge Research Archive case. Include the case questions, source inventory, identifiers, owners, relevance, volatility, source health, privacy impact, authority, integrity risk, approved method, original and working-copy rules, collection order, dependencies, alternates, limitations, exceptions, completion criteria, and analysis handoff."
          tips={[
            "Use only fictional systems, accounts, files, logs, identities, owners, dates, methods, paths, hashes, records, and organizations.",
            "Prioritize evidence by decision value and loss risk rather than by convenience or volume.",
            "Treat dashboards, screenshots, exports, and summaries from one underlying source as related rather than independent.",
            "Make out-of-scope, not-necessary, unsafe, delayed, and conditionally approved sources visible in the plan.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A forensic collection plan connects approved case questions to specific evidence sources, owners, methods, priorities, risks, alternates, and completion standards.",
            "Evidence value, volatility, source health, integrity risk, privacy, authority, operational impact, and duplication should shape collection order.",
            "Originals should remain preserved while analysis occurs on verified working copies with documented lineage.",
            "Source silence is not reliable when delivery, retention, parsing, accessibility, ownership, or expected-event coverage is uncertain.",
            "Alternate evidence should come from genuinely different relevant sources whenever possible.",
            "Out-of-scope, unnecessary, unsafe, or ownership-unclear evidence should not be collected without a documented decision.",
            "Portfolio artifacts should recreate the collection workflow with clearly fictional evidence rather than exposing real systems or private records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I12
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}