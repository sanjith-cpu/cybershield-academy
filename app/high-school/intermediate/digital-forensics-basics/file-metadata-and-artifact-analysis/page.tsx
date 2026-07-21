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
const previousLesson = `${modulePath}/evidence-integrity-hashes-and-chain-of-custody`;
const nextLesson = `${modulePath}/memory-process-and-volatile-evidence-concepts`;

const objectives = [
  "Explain how fictional file-system artifacts, paths, names, extensions, sizes, hashes, timestamps, ownership, permissions, versions, shortcuts, caches, and recent-item records can support a defined forensic question.",
  "Separate direct observations from supported findings, alternative explanations, uncertainty, confidence, limitations, and follow-up evidence needs.",
  "Interpret fictional timestamp differences without assuming that creation, modification, access, synchronization, extraction, copying, upload, download, or export times all describe the same event.",
  "Correlate fictional file and metadata artifacts with identity, process, application, storage, cloud, deployment, support, and source-health evidence.",
  "Create a defensible fictional artifact-analysis worksheet and report that preserves evidence lineage, privacy, scope, reproducibility, and portfolio safety."
];
const vocabulary = [
  [
    "File artifact",
    "A fictional file, folder, path, shortcut, cache entry, recent-item record, version record, thumbnail, archive entry, or related digital object that may support the approved case question."
  ],
  [
    "Metadata",
    "Fictional descriptive information about a digital object, such as name, path, type, size, timestamps, owner, permissions, version, source, application, or hash."
  ],
  [
    "File path",
    "The fictional location and hierarchy showing where a file or folder appears within a storage structure."
  ],
  [
    "Extension",
    "The fictional suffix associated with a filename that may suggest a format but does not independently prove the actual content type."
  ],
  [
    "Magic value or signature",
    "A fictional internal format indicator used conceptually to compare claimed file type with actual structure without executing the file."
  ],
  [
    "Content hash",
    "A fictional integrity value that can support whether compared file contents are identical under the chosen method."
  ],
  [
    "Creation time",
    "A fictional timestamp that may describe when an object was created within a particular file system or environment, not necessarily when its content first existed."
  ],
  [
    "Modification time",
    "A fictional timestamp associated with a content or metadata change, depending on the source and platform."
  ],
  [
    "Access time",
    "A fictional timestamp that may change when an object is read or handled, depending on configuration, platform behavior, and collection method."
  ],
  [
    "Entry-modification time",
    "A fictional file-system timestamp concept describing a change to a directory or metadata record rather than necessarily to the file content."
  ],
  [
    "Version history",
    "A fictional record of prior object states, revisions, creators, storage locations, or synchronization events."
  ],
  [
    "Shortcut or link artifact",
    "A fictional reference pointing to another object and potentially preserving path, target, time, host, user, or application context."
  ],
  [
    "Cache artifact",
    "A fictional temporary or stored representation created by an application, operating system, browser, preview service, or synchronization process."
  ],
  [
    "Recent-item artifact",
    "A fictional record showing that an application or user context referenced an object, while not automatically proving that the content was fully opened or intentionally reviewed."
  ],
  [
    "Artifact lineage",
    "The fictional relationship connecting an observed artifact, extracted field, filtered table, screenshot, note, timeline event, finding, and report statement to its parent evidence."
  ],
  [
    "Artifact confidence",
    "The fictional level of support for an interpretation after considering source health, timestamp reliability, duplication, alternative explanations, and independent evidence."
  ]
];
const artifactFamilies = [
  {
    "title": "Names, paths, and folder structure",
    "observations": "Fictional filename, parent folder, relative and full path, naming pattern, extension, duplicate suffix, archive hierarchy, and storage location.",
    "can_support": "Where an object appeared, whether several paths reference identical content, and whether a naming pattern is consistent with an approved workflow.",
    "cannot_prove": "Who intentionally created the object, whether the path was manually chosen, whether the file was opened, or whether the content was shared.",
    "correlate": "Storage transactions, process records, application jobs, cloud object history, identity events, and business workflow documentation."
  },
  {
    "title": "Size, content hash, and duplicate relationships",
    "observations": "Fictional byte size, content hash, package size, object count, matching or mismatching values, and parent-child archive relationships.",
    "can_support": "Whether compared content is identical, whether a copy differs, and whether a duplicate folder contains the same supplied files.",
    "cannot_prove": "Authorship, intent, completeness of the source set, authorization, or whether a duplicate was malicious.",
    "correlate": "Copy-process records, storage events, export jobs, version history, backup catalogs, and chain-of-custody verification."
  },
  {
    "title": "Creation, modification, and access timestamps",
    "observations": "Fictional source timestamps, time zones, timestamp type, resolution, clock state, extraction time, export time, and collection time.",
    "can_support": "Possible order, duration, and relationship between file events when the source behavior is understood and compared with independent evidence.",
    "cannot_prove": "Exact human action, intent, or true chronological order when copy, extraction, synchronization, clock drift, delay, or platform behavior is unresolved.",
    "correlate": "Application, process, identity, transaction, cloud, deployment, support, source-health, and normalized timeline records."
  },
  {
    "title": "Ownership, permissions, and access-control metadata",
    "observations": "Fictional owner identifier, group, role, access list, permission state, inherited rule, service identity, and change history.",
    "can_support": "Which fictional identity or role was associated with access capability at a specific time.",
    "cannot_prove": "That the identity actually performed the action, that a human controlled the session, or that every effective permission was represented.",
    "correlate": "Authentication, session, process, storage transaction, policy, role assignment, and approval records."
  },
  {
    "title": "Document and application metadata",
    "observations": "Fictional author field, application name, template, revision number, last-saved-by field, export tool, embedded date, and format information.",
    "can_support": "Which application or workflow may have produced or modified the object and whether metadata is consistent with other records.",
    "cannot_prove": "True human authorship, intent, identity control, or that every metadata field is accurate or original.",
    "correlate": "Application jobs, identity sessions, process records, version history, support reports, and deployment records."
  },
  {
    "title": "Shortcuts, links, recent items, and jump records",
    "observations": "Fictional target path, target name, source host, application, user context, last-reference time, link identifier, and recent-item order.",
    "can_support": "That a fictional context referenced or was aware of an object and may identify a previous location or application path.",
    "cannot_prove": "That the full content was opened, read, modified, copied, or intentionally selected.",
    "correlate": "Application usage records, process launches, file access, identity sessions, support reports, and user workflow documentation."
  },
  {
    "title": "Caches, thumbnails, previews, and temporary artifacts",
    "observations": "Fictional preview entry, thumbnail identifier, cache path, temporary filename, generation time, source reference, and application owner.",
    "can_support": "That an approved service or application generated a representation or temporary object from another source.",
    "cannot_prove": "That a human saw the preview, that the original content was exported, or that the cache includes the entire file.",
    "correlate": "Preview-service logs, process records, storage events, identity sessions, job records, and cleanup activity."
  },
  {
    "title": "Deletion, recycle, archive, and recovery indicators",
    "observations": "Fictional deletion marker, recycle record, archive entry, tombstone, version deletion, restore record, recovery state, and missing-object reference.",
    "can_support": "That a storage or application process recorded removal, archiving, replacement, or restoration of an object.",
    "cannot_prove": "Who intended deletion, whether all content is gone, whether deletion was malicious, or whether a recovered object is complete.",
    "correlate": "Storage audit, application action, identity, backup, recovery, version history, support, and business records."
  }
];
const timestampQuestions = [
  {
    "title": "Which timestamp type is this?",
    "question": "Does the fictional record describe object creation, content modification, metadata change, access, upload, download, synchronization, export, extraction, collection, or report generation?",
    "strong": "Label the exact source and timestamp meaning instead of using the word time by itself.",
    "risk": "Treating every timestamp as the moment the content was first created."
  },
  {
    "title": "Which system produced the value?",
    "question": "Did the fictional file system, cloud platform, application, archive tool, operating system, export process, or collector generate the timestamp?",
    "strong": "Record source behavior, time zone, clock state, resolution, and expected update rules.",
    "risk": "Combining timestamps from several platforms without understanding their origin."
  },
  {
    "title": "Could copying or extraction change it?",
    "question": "Would the fictional action preserve, reset, recreate, transform, or omit the timestamp?",
    "strong": "Compare original, copied, exported, extracted, synchronized, and collected states with documented method.",
    "risk": "Assuming copied files retain every original timestamp."
  },
  {
    "title": "Is the source healthy?",
    "question": "Was the fictional source current, complete, correctly parsed, time-aligned, and expected to record the event?",
    "strong": "Preserve source-health status and delay before using silence or ordering as evidence.",
    "risk": "Treating missing or late events as proof that no action occurred."
  },
  {
    "title": "What is the timestamp resolution?",
    "question": "Does the fictional source record seconds, milliseconds, minutes, or another level of precision?",
    "strong": "Use a range or grouped ordering when the source does not support exact precision.",
    "risk": "Inventing exact order between events that share the same coarse timestamp."
  },
  {
    "title": "Do independent sources agree?",
    "question": "Do fictional process, identity, storage, application, cloud, support, and business records support a consistent event relationship?",
    "strong": "Correlate independent records and document conflicts or alternate explanations.",
    "risk": "Counting several views of one source as independent agreement."
  }
];
const analysisFields = [
  {
    "field": "Artifact identifier",
    "purpose": "Connects the fictional observed object to its original or working-copy evidence record.",
    "example": "NRA-A-017 derived from NRA-E-002-WORK-01.",
    "quality": "Unique, traceable, and never reused for a different object."
  },
  {
    "field": "Direct observation",
    "purpose": "Records exactly what the fictional artifact shows without interpretation.",
    "example": "Five files in the duplicate folder have content hashes matching five files in the approved export folder.",
    "quality": "Uses exact fields, paths, timestamps, values, and evidence references."
  },
  {
    "field": "Supported finding",
    "purpose": "Explains what the fictional observations collectively support in relation to the approved case question.",
    "example": "The duplicate folder contains copies of the five supplied export files rather than five different file contents.",
    "quality": "Bounded by evidence and separated from intent or unsupported impact."
  },
  {
    "field": "Alternative explanation",
    "purpose": "Preserves another fictional mechanism that could reasonably produce the same observed artifact.",
    "example": "A synchronization retry, manual copy, restore, or export-worker retry could create duplicate paths.",
    "quality": "Specific enough to test with other evidence."
  },
  {
    "field": "Corroborating evidence",
    "purpose": "Identifies genuinely different fictional sources that support or challenge the finding.",
    "example": "Process snapshot, application job record, storage transaction, and deployment configuration.",
    "quality": "Tracks source independence and avoids duplicate counting."
  },
  {
    "field": "Confidence",
    "purpose": "States how strongly the fictional finding is supported after considering source health, gaps, conflicts, and alternatives.",
    "example": "High confidence that the approved worker created the duplicate; low confidence about whether a human noticed it immediately.",
    "quality": "Explains the reason for the confidence level."
  },
  {
    "field": "Limitation",
    "purpose": "Records what the fictional artifact cannot show or which source condition reduces certainty.",
    "example": "Application records were delayed by twelve minutes and the process snapshot represents one moment.",
    "quality": "Visible in both technical and leadership reporting."
  },
  {
    "field": "Follow-up evidence need",
    "purpose": "Defines the next fictional source or test required to distinguish remaining explanations.",
    "example": "Compare the runtime configuration, application job identifier, and storage transaction sequence.",
    "quality": "Specific, authorized, owned, time-bounded, and connected to a decision."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the case question and artifact scope",
    "detail": "Restate the fictional question, approved subjects, time window, evidence identifiers, privacy boundary, and which artifact families may answer the question.",
    "output": "Artifact-analysis objective and source list."
  },
  {
    "step": "2",
    "title": "Verify the working copy and source context",
    "detail": "Confirm the fictional working-copy identifier, parent evidence, integrity result, collection method, source health, time zone, and handling history.",
    "output": "Verified analysis starting point."
  },
  {
    "step": "3",
    "title": "Record direct observations",
    "detail": "Capture fictional names, paths, sizes, hashes, timestamps, ownership, permissions, versions, links, caches, deletion markers, and other relevant fields without interpreting them yet.",
    "output": "Artifact observation table."
  },
  {
    "step": "4",
    "title": "Understand artifact behavior",
    "detail": "Document how the fictional platform or application creates, updates, copies, synchronizes, deletes, caches, or reports the artifact.",
    "output": "Artifact-behavior and timestamp guide."
  },
  {
    "step": "5",
    "title": "Build competing explanations",
    "detail": "Identify fictional approved, accidental, automated, recovery, synchronization, user-driven, and unsupported mechanisms that could produce the observations.",
    "output": "Hypothesis and alternative-explanation matrix."
  },
  {
    "step": "6",
    "title": "Correlate independent evidence",
    "detail": "Compare fictional process, identity, application, storage, cloud, deployment, support, business, and source-health records.",
    "output": "Correlated evidence map and confidence update."
  },
  {
    "step": "7",
    "title": "Write bounded findings",
    "detail": "Separate fictional observations, supported findings, alternatives, confidence, limitations, impact boundary, and follow-up needs.",
    "output": "Findings matrix and reviewer notes."
  },
  {
    "step": "8",
    "title": "Review and report",
    "detail": "Confirm fictional lineage, privacy, reproducibility, terminology, timestamp limits, source health, corrections, owner review, and portfolio safety.",
    "output": "Approved artifact-analysis report."
  }
];
const artifactRecords = [
  {
    "id": "A-01",
    "artifact": "Approved export folder",
    "observation": "Contains five fictional research files under /archive/exports/job-441/approved/.",
    "meaning": "Defines the expected output location for the documented workflow.",
    "limit": "The folder path alone does not prove which process created each file."
  },
  {
    "id": "A-02",
    "artifact": "Duplicate export folder",
    "observation": "Contains five files under /archive/exports/job-441/approved-copy/.",
    "meaning": "Confirms that a second path exists within the supplied metadata set.",
    "limit": "The suffix copy does not independently prove manual action."
  },
  {
    "id": "A-03",
    "artifact": "Matching content hashes",
    "observation": "Each duplicate file has a content hash matching its counterpart in the approved folder.",
    "meaning": "Supports identical supplied file contents between the two folders.",
    "limit": "Matching hashes do not prove creator, intent, or completeness of the evidence source."
  },
  {
    "id": "A-04",
    "artifact": "Different creation metadata",
    "observation": "Duplicate-folder creation values occur after the approved-folder values by several minutes.",
    "meaning": "Supports a later file-system creation event for the duplicate paths.",
    "limit": "Copying, extraction, synchronization, or restoration may reset creation metadata."
  },
  {
    "id": "A-05",
    "artifact": "Modification metadata preserved",
    "observation": "The duplicate files retain modification values matching the approved-folder files.",
    "meaning": "Is consistent with a copy process preserving content-modification metadata.",
    "limit": "Platform and tool behavior must be confirmed before treating this pattern as unique."
  },
  {
    "id": "A-06",
    "artifact": "Service ownership",
    "observation": "Both folders list the fictional archive-export service identity as owner.",
    "meaning": "Connects both paths to the service context.",
    "limit": "Ownership metadata does not prove which process instance created the folders."
  },
  {
    "id": "A-07",
    "artifact": "Preview cache entry",
    "observation": "A fictional preview cache contains entries for the approved folder but none for the duplicate folder.",
    "meaning": "Supports that the approved workflow generated previews for the expected path.",
    "limit": "Cache absence is meaningful only if cache health, cleanup, and coverage are verified."
  },
  {
    "id": "A-08",
    "artifact": "Recent-item reference",
    "observation": "A fictional recent-item record points to the approved folder from the archive-review application.",
    "meaning": "Supports that the application referenced the approved path.",
    "limit": "The record does not prove that a human fully opened or reviewed every file."
  },
  {
    "id": "A-09",
    "artifact": "Outdated configuration path",
    "observation": "The supplied process snapshot references a configuration naming the approved-copy suffix.",
    "meaning": "Supports an automated duplicate-path mechanism when correlated with job and deployment evidence.",
    "limit": "A snapshot does not prove how long the configuration was active."
  },
  {
    "id": "A-10",
    "artifact": "No external-sharing record",
    "observation": "The supplied fictional cloud audit set contains no public-link, external-share, or unrelated-account download event in the approved window.",
    "meaning": "Narrows supported impact within verified source coverage.",
    "limit": "The conclusion depends on retention, event coverage, source health, and approved time boundaries."
  }
];
const findingMatrix = [
  {
    "finding": "F-01",
    "statement": "The duplicate folder contains copies of the same five supplied file contents as the approved export folder.",
    "support": "Matching content hashes, file counts, sizes, and preserved modification metadata.",
    "alternative": "None supported for content identity within the supplied set.",
    "confidence": "High",
    "limitation": "The supplied set may not represent every historical version."
  },
  {
    "finding": "F-02",
    "statement": "The duplicate paths were created after the approved paths within the fictional export window.",
    "support": "File-system creation metadata, storage events, and normalized application timing.",
    "alternative": "Extraction or synchronization could also produce later creation values.",
    "confidence": "Medium-High",
    "limitation": "Creation-time behavior depends on the fictional platform and copy method."
  },
  {
    "finding": "F-03",
    "statement": "An approved export worker using an outdated configuration is the best-supported mechanism for creating the duplicate folder.",
    "support": "Process snapshot, service ownership, application job identifier, deployment record, and path pattern.",
    "alternative": "Manual copy or synchronization retry remain possible but receive less support.",
    "confidence": "High",
    "limitation": "The process snapshot captures one moment and delayed application records changed the timeline version."
  },
  {
    "finding": "F-04",
    "statement": "The supplied fictional evidence does not support external sharing or unrelated-account download.",
    "support": "Cloud audit, identity, network, support, and business records within the approved window.",
    "alternative": "An event outside retention, coverage, or the approved window cannot be ruled out.",
    "confidence": "Medium-High",
    "limitation": "This is a bounded no-supported-evidence conclusion rather than proof that sharing was impossible."
  },
  {
    "finding": "F-05",
    "statement": "The approved folder was referenced by the archive-review application and generated preview-cache entries.",
    "support": "Recent-item record, preview cache, application job, and support workflow.",
    "alternative": "Automated application behavior may create some artifacts without direct human interaction.",
    "confidence": "High for application reference; low for human viewing",
    "limitation": "The artifacts do not prove that a human fully opened every file."
  },
  {
    "finding": "F-06",
    "statement": "The unrelated research folder remains outside the current artifact-analysis scope.",
    "support": "Authorization brief, privacy rule, stop-condition register, and owner decision.",
    "alternative": "Future approved expansion could permit review if a new case question justifies it.",
    "confidence": "High",
    "limitation": "No conclusion may be drawn about the unrelated folder contents."
  }
];
const commonMistakes = [
  "Treating a filename or extension as proof of the actual fictional content type.",
  "Treating a matching content hash as proof of authorship, intent, ownership, completeness, or authorization.",
  "Assuming creation time means when the content was first created in every system.",
  "Assuming modification time always changes when an object is copied.",
  "Using access time as proof that a human opened or read the entire fictional file.",
  "Ignoring time zone, clock state, timestamp resolution, extraction, export, synchronization, and collection behavior.",
  "Treating a shortcut, recent-item record, cache entry, or thumbnail as proof of full content access.",
  "Assuming a service identity record identifies a human actor or proves intent.",
  "Counting several dashboards or exports from one underlying source as independent corroboration.",
  "Interpreting source silence without checking retention, parsing, delay, ownership, expected-event coverage, and source health.",
  "Opening fictional file contents when metadata, hashes, process, identity, storage, cloud, and business records already answer the approved question.",
  "Ignoring alternative explanations such as automated retry, synchronization, restore, extraction, preview generation, or approved workflow behavior.",
  "Writing conclusions before preserving direct observations and exact evidence references.",
  "Failing to connect screenshots, tables, timelines, notes, and report statements to parent evidence identifiers.",
  "Publishing real filenames, paths, hashes, timestamps, owners, applications, accounts, logs, or internal artifact details in a portfolio."
];
const quizQuestions = [
  {
    "question": "What can matching fictional content hashes most directly support?",
    "choices": [
      "That the compared file contents are identical under the chosen method at the time of comparison.",
      "Who created the files.",
      "Why the duplicate folder exists.",
      "That the evidence set is complete."
    ],
    "answer": 0,
    "explanation": "Matching hashes support content identity, not authorship, intent, mechanism, or completeness."
  },
  {
    "question": "Why should a fictional file extension not be treated as proof of format?",
    "choices": [
      "An extension can be renamed or misleading, so the claimed type should be compared with internal structure and source context.",
      "Extensions never provide useful information.",
      "Every extension is encrypted.",
      "Only timestamps identify a format."
    ],
    "answer": 0,
    "explanation": "Extensions are useful clues but should not be treated as conclusive proof."
  },
  {
    "question": "What should happen before comparing fictional timestamps from different sources?",
    "choices": [
      "Identify timestamp type, source behavior, time zone, clock state, resolution, delay, and transformation history.",
      "Sort them as text.",
      "Assume they all use the same clock.",
      "Delete timestamps that conflict."
    ],
    "answer": 0,
    "explanation": "Cross-source chronology requires timestamp normalization and source understanding."
  },
  {
    "question": "What can a fictional recent-item artifact support?",
    "choices": [
      "That an application or user context referenced the object under the artifact's documented conditions.",
      "That a human read every page.",
      "That the file was shared externally.",
      "That the content was modified."
    ],
    "answer": 0,
    "explanation": "A recent-item record is a contextual reference, not proof of full content interaction."
  },
  {
    "question": "Which statement is a direct observation?",
    "choices": [
      "Five duplicate-folder files have content hashes matching five approved-folder files.",
      "The service intentionally created unauthorized copies.",
      "A human reviewed every duplicate file.",
      "The event caused external disclosure."
    ],
    "answer": 0,
    "explanation": "The first statement directly reflects supplied artifact fields without adding intent or impact."
  },
  {
    "question": "What should happen when one fictional source is delayed?",
    "choices": [
      "Preserve the source-health limitation, use independent available evidence, adjust confidence, and revise the analysis when delayed records arrive.",
      "Assume no event occurred.",
      "Ignore every other source.",
      "Delete the earlier findings."
    ],
    "answer": 0,
    "explanation": "Delayed evidence should create a documented limitation and later reassessment."
  },
  {
    "question": "What makes a fictional artifact finding defensible?",
    "choices": [
      "It links direct observations to independent evidence, alternatives, confidence, limitations, scope, and follow-up needs.",
      "It uses strong language.",
      "It matches the first alert.",
      "It includes many screenshots."
    ],
    "answer": 0,
    "explanation": "Defensible findings are traceable, bounded, and open about uncertainty."
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

export default function FileMetadataArtifactAnalysisPage() {
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
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.4 File, Metadata, and Artifact Analysis
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how an authorized defender analyzes fictional file and
            metadata artifacts, interprets paths, names, hashes, timestamps,
            ownership, permissions, versions, recent-item records, caches,
            previews, and deletion indicators, and turns them into bounded,
            reproducible findings.
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
          lessonTitle="File, Metadata, and Artifact Analysis"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive evidence.",
            "I will not access, open, inspect, recover, decrypt, execute, upload, download, alter, collect, or analyze any real file, device, account, log, cloud service, or private record.",
            "I will work only from verified fictional working copies and preserve parent-source lineage.",
            "I will separate direct observations from findings, alternatives, confidence, limitations, and follow-up needs.",
            "I will not treat a path, extension, timestamp, hash, owner, cache, shortcut, or recent-item artifact as more conclusive than the evidence supports.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Metadata Can Explain a Workflow, but It Can Also Mislead an Analyst"
        >
          <p className="leading-8">
            The fictional Northbridge archive export contains an expected folder
            and a duplicate folder. Both contain five files with matching
            content hashes, but their creation metadata differs. The duplicate
            paths list the approved service identity as owner, a process
            snapshot references an outdated configuration suffix, application
            records were delayed, and cloud records show no supported external
            sharing. The challenge is to explain what the artifacts support
            without turning clues into unsupported claims about intent, human
            action, or impact.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak interpretation
              </p>

              <p className="mt-2 leading-7">
                The duplicate suffix proves a person made an unauthorized copy,
                the service owner proves who did it, and the later creation time
                proves exactly when the original content was created.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional interpretation
              </p>

              <p className="mt-2 leading-7">
                Record the artifact fields, understand source behavior, compare
                independent process and application evidence, test automated and
                manual explanations, and report a bounded confidence level.
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
          title="Artifacts Become Evidence Only through Context, Correlation, and Limitations"
        >
          <p className="leading-8">
            A fictional filename, path, timestamp, hash, owner, cache entry, or
            recent-item record is not a complete story. Each artifact is created
            by a particular system or application under specific rules. Copying,
            extraction, synchronization, restore, preview generation, cleanup,
            export, and collection may change or omit fields. Professional
            analysis therefore preserves the source, explains artifact behavior,
            correlates independent records, tests alternatives, and writes only
            conclusions that the evidence can support.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Observeā€“Understandā€“Correlateā€“Conclude Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Observe", "Record the exact fictional name, path, value, timestamp, owner, permission, hash, version, reference, cache, or deletion marker."],
              ["Understand", "Explain how the fictional file system, cloud platform, application, export tool, or collection method creates and updates that artifact."],
              ["Correlate", "Compare genuinely independent fictional process, identity, application, storage, cloud, deployment, support, business, and source-health evidence."],
              ["Conclude", "Write a bounded fictional finding with alternatives, confidence, limitations, scope, impact boundary, and follow-up evidence needs."],
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
            File, Metadata, and Artifact Analysis Terms
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
            Artifact Families
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Artifact Groups and Their Evidence Boundaries
          </h2>

          <div className="mt-6 grid gap-5">
            {artifactFamilies.map((item) => (
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
                      Direct observations
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.observations}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Can support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.can_support}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Cannot prove alone
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.cannot_prove}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Correlate with
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.correlate}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Timestamp Reasoning
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Questions before Using a Fictional Timestamp
          </h2>

          <div className="mt-6 grid gap-5">
            {timestampQuestions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong method
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Analysis risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix Fields
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields That Make Artifact Analysis Reviewable
          </h2>

          <div className="mt-6 grid gap-5">
            {analysisFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Analyze Fictional Artifacts without Overstating Them
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
          title="Fake Northbridge Artifact Analysis Dashboard"
          subtitle="Training dashboard for fictional evidence only."
          metrics={[
            {
              label: "Artifact records reviewed",
              value: "10",
              note: "Paths, hashes, timestamps, ownership, caches, recent items, configuration, and cloud records are indexed.",
            },
            {
              label: "Supported findings",
              value: "6",
              note: "Each fictional finding includes evidence, alternatives, confidence, limitation, and scope.",
            },
            {
              label: "Unresolved artifact questions",
              value: "2",
              note: "Human awareness and exact configuration activation duration remain outside current proof.",
            },
          ]}
        />

        <FakeAlertCard
          title="Timestamp Conflict between File Metadata and Application Records"
          severity="Medium"
          time="10:06 AM"
          source="Fake Artifact Correlation Console"
          details="The fictional duplicate-folder creation value appears three minutes before the delayed application event that records the copy operation."
          recommendation="Do not reorder the case from one field. Verify timestamp type, time zone, source delay, resolution, clock state, export behavior, and application delivery. Preserve original and normalized values, use a time range where exact order is unsupported, compare process and storage records, document the conflict, and revise confidence when source health is restored."
        />

        <FakeLogPanel
          title="Fake Northbridge Artifact Analysis Records"
          logs={[
            "09:58 ARTIFACT A-01 path='/archive/exports/job-441/approved/' files='5'",
            "09:59 ARTIFACT A-02 path='/archive/exports/job-441/approved-copy/' files='5'",
            "10:00 HASH compare='approved_vs_copy' result='5_of_5_match'",
            "10:01 TIME creation='copy_later' modification='preserved'",
            "10:02 OWNER approved='archive-export-service' copy='archive-export-service'",
            "10:03 CACHE approved='entries_present' copy='no_entries'",
            "10:04 RECENT target='approved_folder' app='archive-review'",
            "10:05 PROCESS child='copy-worker' config='approved-copy suffix'",
            "10:06 CONFLICT file_creation='09:17' app_event='09:20 delayed'",
            "10:07 HEALTH app_source='delayed_12m' timestamp_confidence='reduced'",
            "10:12 CLOUD external_share='none_supported' public_link='none_supported'",
            "10:16 CORRELATE mechanism='automated_copy_worker' confidence='high'",
            "10:18 LIMIT human_view='not_proven' intent='not_proven'",
            "10:21 FINDING duplicate_content='confirmed' external_disclosure='not_supported'",
            "10:25 SCOPE unrelated_folder='excluded' analysis='not_performed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Artifact Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge File and Metadata Evidence Set
          </h2>

          <div className="mt-6 grid gap-4">
            {artifactRecords.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.14fr_0.35fr_1fr_1fr_1fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.id}
                </p>

                <p className="font-black text-blue-200">{item.artifact}</p>

                <p className="text-sm leading-6 text-slate-200">
                  {item.observation}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  {item.meaning}
                </p>

                <p className="text-sm leading-6 text-slate-400">
                  {item.limit}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Artifact Findings and Limitations
          </h2>

          <div className="mt-6 grid gap-5">
            {findingMatrix.map((item) => (
              <article
                key={item.finding}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.finding}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Artifact Conclusion Is Best Supported?"
          evidence={[
            "The expected and duplicate folders each contain five supplied files.",
            "Each duplicate file has a content hash matching its counterpart.",
            "Duplicate paths have later file-system creation values while modification values are preserved.",
            "Both folders list the approved fictional export-service identity as owner.",
            "The process snapshot records a child copy worker using an outdated duplicate-suffix configuration.",
            "The delayed application records later confirm the same job identifier and copy operation.",
            "No supplied fictional cloud record supports external sharing or unrelated-account download.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The approved fictional export worker using an outdated configuration is the best-supported mechanism for creating a later duplicate path containing identical supplied file contents; human intent and external disclosure are not supported.",
            "A human intentionally stole the files.",
            "The duplicate filename proves unauthorized copying.",
            "No forensic conclusion is possible because one source was delayed.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion combines artifact, process, application, identity, and cloud evidence while preserving unsupported intent and impact boundaries."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken File and Metadata Analysis"
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
          title="Complete the Northbridge Artifact Analysis Worksheet"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Paths, Hashes, Timestamps, Ownership, Caches, and Findings
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete artifact-analysis worksheet and findings matrix.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Artifact identifiers and parent evidence references.</li>
                <li>Direct observations for paths, names, sizes, hashes, timestamps, ownership, permissions, versions, links, caches, previews, and deletion indicators.</li>
                <li>Artifact-behavior and timestamp interpretation notes.</li>
                <li>Approved, automated, accidental, synchronization, restore, and manual hypotheses.</li>
                <li>Independent corroborating and conflicting evidence.</li>
                <li>Finding, alternative explanation, confidence, limitation, impact boundary, and follow-up need.</li>
                <li>Timeline changes caused by delayed source delivery.</li>
                <li>Portfolio-safe technical and leadership summaries.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not open, recover, execute, inspect, upload, download, or analyze
            any real file. Complete the lab only from the fictional records on
            this page.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Later Creation Time Appears before a Delayed Application Event"
          scenario="The fictional file-system creation value for the duplicate path appears three minutes before the delayed application record that describes the copy operation."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve both original values, identify timestamp type and source behavior, account for application delay and resolution, compare process and storage evidence, use a range if needed, and update confidence without forcing an exact order.",
              outcome:
                "Best defensive choice. Timestamp meaning and source health are handled before chronology is claimed.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the application record false.",
              outcome:
                "Unsupported. Delivery delay may explain the apparent conflict.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the file timestamp so the timeline looks consistent.",
              outcome:
                "Unsafe. Evidence values must not be altered to fit a preferred story.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Recent-Item Record Points to the Approved Folder"
          scenario="A fictional recent-item artifact references the approved export folder from the archive-review application."
          choices={[
            {
              label: "Choice A",
              response:
                "Record that the application context referenced the folder, correlate with application and process records, and avoid claiming that a human fully opened or read every file.",
              outcome:
                "Best defensive choice. The artifact is used within its real evidence boundary.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that the named user read every file.",
              outcome:
                "Unsupported. A recent-item artifact does not prove full human review.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the artifact because it does not prove everything.",
              outcome:
                "Weak. The artifact still provides useful contextual evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="File, Metadata, and Artifact Analysis Checklist"
          items={[
            "I can identify fictional artifact names, paths, extensions, sizes, hashes, timestamps, ownership, permissions, versions, shortcuts, caches, recent items, and deletion indicators.",
            "I can explain what each artifact family can support and what it cannot prove alone.",
            "I can preserve the working-copy identifier, parent source, integrity result, source health, collection method, and time-zone context.",
            "I can distinguish timestamp types and account for copying, extraction, synchronization, export, delay, resolution, and clock differences.",
            "I can record direct observations before writing findings.",
            "I can build and test approved, automated, accidental, manual, synchronization, restore, preview, and recovery explanations.",
            "I can identify genuinely independent corroborating evidence and avoid counting duplicate views as separate support.",
            "I can write findings with alternatives, confidence, limitations, impact boundaries, and authorized follow-up needs.",
            "I can preserve source lineage from original evidence to screenshots, filtered tables, timelines, notes, findings, and reports.",
            "I will use only fictional evidence and never expose real files, paths, hashes, timestamps, users, accounts, logs, applications, owners, or private records.",
          ]}
        />

        <MiniQuiz
          title="I12.4 Mini Quiz: File, Metadata, and Artifact Analysis"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional File, Metadata, and Artifact Analysis Report for the Northbridge Research Archive case. Include evidence identifiers, direct observations, path and hash comparisons, timestamp-type notes, source health, ownership and permission context, shortcut or recent-item interpretation, cache or preview interpretation, deletion or recovery indicators, competing explanations, corroborating evidence, findings, confidence, limitations, follow-up needs, reviewer notes, and a portfolio-safety statement."
          tips={[
            "Use only fictional files, paths, hashes, timestamps, users, identities, applications, logs, owners, dates, and organizations.",
            "Do not treat a filename, extension, timestamp, owner, cache, shortcut, or recent-item record as proof of intent or impact.",
            "Preserve original and normalized times together with source behavior and confidence.",
            "Link every table, screenshot, timeline event, finding, and report statement to its exact fictional parent evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "File and metadata artifacts become useful through source context, artifact behavior, independent correlation, alternatives, confidence, and limitations.",
            "Paths, extensions, ownership, timestamps, caches, shortcuts, and recent-item records are clues rather than complete proof.",
            "Matching fictional content hashes can support identical compared content but cannot independently prove creator, intent, authorization, or completeness.",
            "Timestamp interpretation requires the exact timestamp type, source, time zone, clock state, resolution, collection method, transformation history, and source health.",
            "Direct observations should remain separate from findings, alternative explanations, impact claims, and owner decisions.",
            "Derived tables, screenshots, timelines, notes, and report exhibits should preserve parent-source lineage and review history.",
            "Portfolio artifacts should recreate the analysis with clearly fictional evidence rather than exposing real files, paths, metadata, logs, or organizational records.",
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