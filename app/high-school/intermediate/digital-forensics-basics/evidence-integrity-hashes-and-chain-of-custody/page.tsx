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
const previousLesson = `${modulePath}/evidence-sources-and-collection-planning`;
const nextLesson = `${modulePath}/file-metadata-and-artifact-analysis`;

const objectives = [
  "Explain how fictional evidence integrity supports trust, reproducibility, review, transfer, analysis, reporting, and closure.",
  "Distinguish original evidence, preserved copies, verified working copies, exports, screenshots, notes, and derived evidence while maintaining clear source lineage.",
  "Use fictional cryptographic hash concepts appropriately as integrity checks without claiming that a matching hash proves ownership, intent, completeness, or authenticity by itself.",
  "Create a complete fictional chain-of-custody record containing evidence identifiers, owners, transfers, access events, purposes, timestamps, integrity checks, conditions, and exceptions.",
  "Recognize and document integrity risks involving renaming, conversion, extraction, decompression, metadata changes, unsupported tools, incomplete transfers, missing handlers, and unclear custody."
];
const vocabulary = [
  [
    "Evidence integrity",
    "Confidence that fictional evidence remains complete, traceable, protected from undocumented change, and consistent with its preserved source and handling record."
  ],
  [
    "Hash value",
    "A fixed-length fictional integrity result produced from digital data. Matching values can support that two compared copies are identical under the chosen method."
  ],
  [
    "Integrity verification",
    "The fictional process of comparing expected and observed integrity information before and after transfer, copying, analysis, or storage."
  ],
  [
    "Original evidence",
    "The fictional first preserved form of an approved record or acquisition that should remain protected from analysis changes."
  ],
  [
    "Preserved copy",
    "A fictional protected copy created from an approved source and retained as a stable reference."
  ],
  [
    "Working copy",
    "A fictional verified copy used for authorized analysis so the original or preserved reference remains unchanged."
  ],
  [
    "Derived evidence",
    "A fictional filtered export, screenshot, timeline, table, note, chart, extracted file, or report item created from earlier evidence."
  ],
  [
    "Source lineage",
    "The fictional relationship connecting every derived record back to the original or preserved source that produced it."
  ],
  [
    "Chain of custody",
    "The fictional chronological record of who possessed, transferred, accessed, stored, reviewed, or modified the handling state of evidence and why."
  ],
  [
    "Custodian",
    "The fictional person or role responsible for preserving, controlling, transferring, and documenting evidence according to the case plan."
  ],
  [
    "Transfer event",
    "A fictional documented change in evidence possession, storage location, control, or access responsibility."
  ],
  [
    "Access event",
    "A fictional documented instance in which evidence was opened, copied, verified, analyzed, exported, or reviewed under an approved purpose."
  ],
  [
    "Integrity exception",
    "A fictional condition such as a mismatch, missing handler, altered metadata, incomplete copy, failed verification, or unclear transfer that requires investigation and escalation."
  ],
  [
    "Verification point",
    "A fictional planned moment when evidence integrity is checked, such as after collection, transfer, storage, working-copy creation, or final archival."
  ],
  [
    "Evidence disposition",
    "The fictional final approved action for evidence, such as retained, archived, returned, transferred, or securely deleted under policy."
  ]
];
const hashConcepts = [
  {
    "title": "What a matching fictional hash can support",
    "detail": "When the same approved method produces the same value for two compared files, the result can support that the file contents are identical at the time of comparison.",
    "supports": "Copy verification, transfer verification, working-copy verification, archive checks, and duplicate-content comparison.",
    "does_not_support": "Who created the file, who intended an action, whether the source is complete, whether the file is authorized, or whether every surrounding record is trustworthy."
  },
  {
    "title": "What a fictional hash mismatch means",
    "detail": "A mismatch shows that the compared data is not identical under the chosen method, but it does not automatically prove malicious alteration.",
    "supports": "The need to investigate copy method, source version, transfer completeness, decompression, conversion, metadata inclusion, corruption, or actual content change.",
    "does_not_support": "Automatic proof of tampering, guilt, breach, or intentional evidence destruction."
  },
  {
    "title": "Why method and scope matter",
    "detail": "A fictional hash should be connected to the exact evidence object, method, tool, time, handler, and version being verified.",
    "supports": "Reproducibility and accurate comparison between the correct files or images.",
    "does_not_support": "Comparing unrelated exports, differently packaged folders, converted files, or extracted data without documenting the transformation."
  },
  {
    "title": "Why hash values need handling records",
    "detail": "A fictional value alone does not explain where the evidence came from, who possessed it, how it was transferred, or which copy was analyzed.",
    "supports": "Integrity checks when combined with identifiers, lineage, custody, storage, access, and transfer records.",
    "does_not_support": "A complete chain of custody by itself."
  },
  {
    "title": "Why derived evidence gets its own identifier",
    "detail": "A fictional timeline, screenshot, table, or filtered export should be identified separately while preserving its parent-source references.",
    "supports": "Clear distinction between originals and analyst-created artifacts.",
    "does_not_support": "Replacing original evidence with a screenshot or summary."
  },
  {
    "title": "Why verification repeats",
    "detail": "Fictional evidence should be checked at meaningful control points rather than only once during collection.",
    "supports": "Detection of transfer errors, storage changes, incomplete copying, wrong-file selection, and undocumented modification.",
    "does_not_support": "A guarantee that no future handling problem can occur."
  }
];
const custodyFields = [
  {
    "field": "Evidence identifier",
    "purpose": "Provides a unique fictional reference for the exact original, preserved copy, working copy, export, screenshot, note, or derived artifact.",
    "example": "NRA-E-003-ORIG, NRA-E-003-WORK-01, or NRA-D-014-TIMELINE.",
    "risk": "Reusing one identifier for several objects makes transfers, access, and findings ambiguous."
  },
  {
    "field": "Description and scope",
    "purpose": "Explains what the fictional evidence is, which source or subject it covers, and the relevant time or case boundary.",
    "example": "Supplied process snapshot for the archive-export worker captured at 09:24.",
    "risk": "A vague description such as log file can cause the wrong evidence to be reviewed."
  },
  {
    "field": "Source and owner",
    "purpose": "Records the fictional system, export process, custodian, data owner, or provider responsible for the evidence.",
    "example": "Northbridge Archive Platform, supplied by the fictional platform custodian.",
    "risk": "Unknown ownership weakens authorization, provenance, and transfer accountability."
  },
  {
    "field": "Collection or receipt time",
    "purpose": "Records when the fictional evidence was created, exported, received, or preserved, including time zone and source timing limitations.",
    "example": "Received 2026-07-21 09:31 UTC-04:00; source clock reported current.",
    "risk": "Missing time-zone or source-health information can distort chronology."
  },
  {
    "field": "Integrity information",
    "purpose": "Records the fictional verification method, expected result, observed result, tool or process, and comparison time.",
    "example": "Preserved-copy verification matched the original supplied package.",
    "risk": "A value without object identity, method, or comparison context is difficult to reproduce."
  },
  {
    "field": "Storage and protection",
    "purpose": "Documents the fictional approved location, access restriction, encryption or protection state, backup, retention, and monitoring.",
    "example": "Restricted evidence repository; read access limited to incident lead, evidence custodian, and assigned analyst.",
    "risk": "Uncontrolled storage creates exposure, loss, and undocumented access risk."
  },
  {
    "field": "Transfer history",
    "purpose": "Records every fictional change in possession, location, custody, or control with sender, receiver, time, purpose, condition, and verification.",
    "example": "Custodian transferred working copy to assigned analyst for metadata review; verification passed.",
    "risk": "A missing handler creates an unexplained custody gap."
  },
  {
    "field": "Access and analysis history",
    "purpose": "Records who opened, copied, verified, filtered, exported, reviewed, or used the fictional evidence and why.",
    "example": "Analyst reviewed the verified working copy to compare paths, hashes, and timestamps.",
    "risk": "Unlogged access prevents reviewers from understanding potential changes or exposure."
  },
  {
    "field": "Derived-artifact lineage",
    "purpose": "Connects fictional screenshots, notes, timelines, tables, findings, and reports to the exact parent evidence records.",
    "example": "Timeline event T-07 derived from NRA-E-002, NRA-E-003, and NRA-E-005.",
    "risk": "Unsupported summaries can become detached from their original evidence."
  },
  {
    "field": "Exception and disposition",
    "purpose": "Records fictional mismatches, damage, incomplete transfer, out-of-scope material, restricted evidence, retention, return, archive, or deletion decisions.",
    "example": "Working copy mismatch quarantined; new copy created and verified; failed copy retained as exception evidence.",
    "risk": "Deleting or hiding exceptions can make the custody record inaccurate."
  }
];
const copyTypes = [
  {
    "type": "Original supplied evidence",
    "purpose": "The first fictional approved record received or preserved for the case.",
    "handling": "Restrict access, preserve its original packaging and context, verify upon receipt, and avoid direct analysis changes.",
    "example": "The original supplied metadata export package."
  },
  {
    "type": "Preserved reference copy",
    "purpose": "A fictional protected copy retained as a stable comparison point when the original source must remain separately controlled.",
    "handling": "Verify against the original, assign a new identifier, record parent lineage, and store with restricted access.",
    "example": "A verified preserved copy of the process snapshot."
  },
  {
    "type": "Working copy",
    "purpose": "A fictional verified copy used for approved sorting, filtering, indexing, annotation, or tool review.",
    "handling": "Record creation method, verification, handler, tool, purpose, and every derived artifact.",
    "example": "A working copy of the cloud audit export used for timeline analysis."
  },
  {
    "type": "Filtered export",
    "purpose": "A fictional subset created from a working copy to focus on approved fields, identities, events, or time windows.",
    "handling": "Assign a derived identifier, preserve filter criteria, parent source, row counts, exclusions, and verification.",
    "example": "A filtered identity-event table for the approved export window."
  },
  {
    "type": "Screenshot or visual exhibit",
    "purpose": "A fictional visual representation created for review, teaching, or reporting.",
    "handling": "Record the parent evidence, display state, filters, time zone, capture time, creator, and limitation.",
    "example": "A screenshot showing the fictional process parent-child relationship."
  },
  {
    "type": "Analyst note",
    "purpose": "A fictional record of observations, questions, methods, hypotheses, decisions, and limitations.",
    "handling": "Separate observation from interpretation, link evidence identifiers, preserve revisions, and never replace the original source.",
    "example": "A note comparing metadata timestamps with delayed application records."
  },
  {
    "type": "Normalized timeline",
    "purpose": "A fictional derived chronology combining events from several sources.",
    "handling": "Preserve original and normalized times, source health, conversion method, conflicts, confidence, parent identifiers, and version history.",
    "example": "Northbridge timeline version 2 after delayed application records arrive."
  },
  {
    "type": "Final report exhibit",
    "purpose": "A fictional approved artifact selected to support a report finding or limitation.",
    "handling": "Link the exact parent evidence, explain relevance, preserve masking and audience limits, and avoid unsupported conclusions.",
    "example": "An exhibit comparing matching file hashes and different path metadata."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Assign the evidence identity",
    "detail": "Create the fictional case identifier, evidence identifier, description, source, owner, subject, time window, authorization reference, and evidence type.",
    "output": "Evidence register entry."
  },
  {
    "step": "2",
    "title": "Preserve the original form",
    "detail": "Protect the fictional original or first supplied form, record packaging and source context, restrict access, and avoid analysis changes.",
    "output": "Original-preservation record."
  },
  {
    "step": "3",
    "title": "Verify integrity",
    "detail": "Record the fictional verification method, expected and observed result, handler, time, tool or process, and any mismatch or limitation.",
    "output": "Integrity verification record."
  },
  {
    "step": "4",
    "title": "Create the approved working copy",
    "detail": "Copy from the preserved source using the approved method, assign a new identifier, verify the copy, and document its parent lineage.",
    "output": "Verified working-copy record."
  },
  {
    "step": "5",
    "title": "Record transfers and access",
    "detail": "Document every fictional sender, receiver, custodian, location, time, purpose, condition, verification, and authorized access event.",
    "output": "Chain-of-custody and access history."
  },
  {
    "step": "6",
    "title": "Create and link derived evidence",
    "detail": "Assign identifiers to fictional screenshots, filters, timelines, tables, notes, and exhibits while preserving parent records and transformation details.",
    "output": "Derived-evidence lineage map."
  },
  {
    "step": "7",
    "title": "Investigate exceptions",
    "detail": "Quarantine fictional mismatches, incomplete transfers, damaged files, unknown handlers, wrong identifiers, altered metadata, or unsupported formats without hiding the problem.",
    "output": "Integrity exception and corrective action record."
  },
  {
    "step": "8",
    "title": "Review and archive",
    "detail": "Confirm fictional completeness, verification, custody, access, lineage, exceptions, owner approval, retention, disposition, and portfolio-safety requirements.",
    "output": "Evidence-handling completion review."
  }
];
const evidenceRegister = [
  {
    "id": "NRA-E-001-ORIG",
    "type": "Original support report",
    "source": "Fictional archive owner",
    "integrity": "Verified upon receipt; no later change recorded.",
    "custody": "Received by evidence custodian and stored in the restricted case repository.",
    "lineage": "Parent of intake summary NRA-D-001.",
    "status": "Preserved"
  },
  {
    "id": "NRA-E-002-ORIG",
    "type": "Original metadata export",
    "source": "Fictional archive platform",
    "integrity": "Initial and post-transfer verification matched.",
    "custody": "Transferred from platform custodian to evidence custodian.",
    "lineage": "Parent of working copy NRA-E-002-WORK-01 and exhibit NRA-D-011.",
    "status": "Preserved"
  },
  {
    "id": "NRA-E-002-WORK-01",
    "type": "Verified metadata working copy",
    "source": "Derived from NRA-E-002-ORIG",
    "integrity": "Verified against preserved source before analysis.",
    "custody": "Assigned to fictional forensic analyst for path, timestamp, and hash comparison.",
    "lineage": "Parent of filtered table NRA-D-006.",
    "status": "Active analysis"
  },
  {
    "id": "NRA-E-003-ORIG",
    "type": "Original process snapshot",
    "source": "Fictional endpoint custodian",
    "integrity": "Verified at receipt; capture-method limitation documented.",
    "custody": "Transferred through the evidence custodian to restricted storage.",
    "lineage": "Parent of process map NRA-D-008.",
    "status": "Preserved"
  },
  {
    "id": "NRA-E-004-ORIG",
    "type": "Original identity export",
    "source": "Fictional identity platform",
    "integrity": "Verification passed after export transfer.",
    "custody": "Received from identity owner with approved time-window statement.",
    "lineage": "Parent of identity-event subset NRA-D-009.",
    "status": "Preserved"
  },
  {
    "id": "NRA-E-005-ORIG",
    "type": "Original cloud audit export",
    "source": "Fictional cloud platform",
    "integrity": "Verification passed; retention and event-coverage limitations recorded.",
    "custody": "Vendor export transferred to platform custodian, then evidence custodian.",
    "lineage": "Parent of sharing-check table NRA-D-010.",
    "status": "Preserved"
  },
  {
    "id": "NRA-E-006-ORIG",
    "type": "Delayed application audit export",
    "source": "Fictional archive application",
    "integrity": "Verification passed after delayed delivery; completeness review completed.",
    "custody": "Application owner transferred export after source repair.",
    "lineage": "Parent of timeline version 2 NRA-D-014.",
    "status": "Preserved"
  },
  {
    "id": "NRA-D-014",
    "type": "Normalized timeline version 2",
    "source": "Derived from NRA-E-002, NRA-E-003, NRA-E-004, NRA-E-005, and NRA-E-006",
    "integrity": "Derived artifact identifier and parent-source references verified.",
    "custody": "Created and reviewed within the fictional forensic workspace.",
    "lineage": "Supports findings F-01, F-02, and limitation L-03.",
    "status": "Reviewed"
  }
];
const custodyEvents = [
  {
    "time": "09:06",
    "event": "Original metadata export received",
    "handler": "Platform Custodian → Evidence Custodian",
    "purpose": "Preserve approved fictional file metadata for the duplicate-folder case.",
    "verification": "Initial verification passed."
  },
  {
    "time": "09:11",
    "event": "Preserved metadata copy stored",
    "handler": "Evidence Custodian",
    "purpose": "Protect stable reference before analysis.",
    "verification": "Post-copy verification matched."
  },
  {
    "time": "09:15",
    "event": "Working copy created",
    "handler": "Evidence Custodian → Forensic Analyst",
    "purpose": "Authorized path, timestamp, and content-hash comparison.",
    "verification": "Working copy matched preserved reference."
  },
  {
    "time": "09:23",
    "event": "Process snapshot received",
    "handler": "Endpoint Custodian → Evidence Custodian",
    "purpose": "Preserve fictional process and session state.",
    "verification": "Verification passed; snapshot timing limitation noted."
  },
  {
    "time": "09:34",
    "event": "Identity export received",
    "handler": "Identity Owner → Evidence Custodian",
    "purpose": "Review approved service-identity activity during the case window.",
    "verification": "Verification passed."
  },
  {
    "time": "09:41",
    "event": "Cloud audit export received",
    "handler": "Cloud Custodian → Evidence Custodian",
    "purpose": "Review fictional sharing, download, and administrative activity.",
    "verification": "Verification passed; retention limitation noted."
  },
  {
    "time": "09:48",
    "event": "Filtered metadata table created",
    "handler": "Forensic Analyst",
    "purpose": "Create a fictional approved time-window subset from the working copy.",
    "verification": "Row count, filter criteria, parent source, and output identifier recorded."
  },
  {
    "time": "10:02",
    "event": "Application audit export received",
    "handler": "Application Owner → Evidence Custodian",
    "purpose": "Reconcile delayed fictional application events.",
    "verification": "Verification and completeness review passed."
  },
  {
    "time": "10:18",
    "event": "Timeline version 2 created",
    "handler": "Forensic Analyst",
    "purpose": "Integrate delayed application records with metadata, process, identity, and cloud events.",
    "verification": "Parent identifiers, normalization method, changes, conflicts, and reviewer recorded."
  },
  {
    "time": "10:45",
    "event": "Evidence handling review",
    "handler": "Evidence Custodian + Incident Lead",
    "purpose": "Confirm fictional integrity, custody, lineage, access, exceptions, and readiness for reporting.",
    "verification": "Review approved with one documented limitation and no unresolved custody gap."
  }
];
const commonMistakes = [
  "Treating a matching fictional hash as proof of authorship, intent, ownership, completeness, authorization, or absence of compromise.",
  "Treating a hash mismatch as automatic proof of malicious tampering without checking packaging, conversion, extraction, copy method, corruption, version, and tool behavior.",
  "Recording an integrity value without identifying the exact evidence object, method, time, handler, and comparison target.",
  "Using one fictional evidence identifier for an original, preserved copy, working copy, filtered export, screenshot, and report exhibit.",
  "Working directly on the only original or preserved reference.",
  "Failing to verify a fictional working copy before analysis begins.",
  "Renaming, converting, extracting, decompressing, annotating, or filtering evidence without documenting the transformation.",
  "Replacing original evidence with screenshots, notes, timelines, or summaries.",
  "Failing to record who possessed, transferred, accessed, analyzed, or stored the fictional evidence.",
  "Leaving a custody gap when evidence moves between an owner, custodian, analyst, vendor, reviewer, or storage location.",
  "Deleting a failed copy or mismatch instead of preserving and documenting the integrity exception.",
  "Assuming the presence of a chain-of-custody form proves that every event is accurate and complete.",
  "Failing to connect derived fictional artifacts and report statements to parent evidence identifiers.",
  "Publishing real hashes, paths, filenames, evidence labels, custody names, tool details, storage locations, timestamps, or internal procedures in a portfolio."
];
const quizQuestions = [
  {
    "question": "What can a matching fictional hash most directly support?",
    "choices": [
      "That the compared digital contents are identical under the chosen method at the time of comparison.",
      "Who created the file.",
      "Why the file was created.",
      "That the evidence source is complete."
    ],
    "answer": 0,
    "explanation": "A matching result supports integrity comparison, not authorship, intent, completeness, or authorization."
  },
  {
    "question": "What should happen after a fictional hash mismatch?",
    "choices": [
      "Preserve the mismatch, stop relying on the copy, investigate method, version, transfer, packaging, corruption, and possible change, then document the resolution.",
      "Declare malicious tampering immediately.",
      "Delete both files.",
      "Ignore the mismatch if the filenames are the same."
    ],
    "answer": 0,
    "explanation": "A mismatch requires investigation and documentation rather than an unsupported conclusion."
  },
  {
    "question": "Why should a working copy receive a new fictional evidence identifier?",
    "choices": [
      "It is a separate evidence object with its own creation, verification, access, analysis, and derived-artifact history.",
      "Identifiers are only decorative.",
      "The original identifier should be reused for convenience.",
      "A working copy does not need custody records."
    ],
    "answer": 0,
    "explanation": "Separate identifiers preserve clarity between originals and analysis copies."
  },
  {
    "question": "What belongs in a fictional chain-of-custody transfer event?",
    "choices": [
      "Sender, receiver, time, purpose, evidence identifier, condition, location or control change, and integrity verification.",
      "Only the receiver name.",
      "Only the filename.",
      "Only the final report conclusion."
    ],
    "answer": 0,
    "explanation": "A complete transfer record explains who controlled the evidence and verifies its condition."
  },
  {
    "question": "Which item is derived evidence?",
    "choices": [
      "A fictional normalized timeline created from several preserved source records.",
      "The original supplied cloud audit export.",
      "The original process snapshot.",
      "The first preserved metadata package."
    ],
    "answer": 0,
    "explanation": "The timeline is created from earlier evidence and must preserve parent-source lineage."
  },
  {
    "question": "What should happen when a fictional working copy fails verification?",
    "choices": [
      "Quarantine the failed copy, preserve the exception, create a new approved copy, verify it, and record the corrective action.",
      "Use it because the difference may be small.",
      "Rename it so it appears correct.",
      "Delete the exception from the custody record."
    ],
    "answer": 0,
    "explanation": "Integrity exceptions should remain visible and be resolved through a documented process."
  },
  {
    "question": "Why should verification occur at several points?",
    "choices": [
      "Repeated checks can detect transfer errors, wrong-file selection, storage changes, incomplete copying, and undocumented modification.",
      "One verification is never useful.",
      "Repeated checks prove no future change is possible.",
      "Verification replaces access logging."
    ],
    "answer": 0,
    "explanation": "Verification at control points strengthens the evidence-handling chain."
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

export default function EvidenceIntegrityHashesChainOfCustodyPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.3 Evidence Integrity, Hashes, and Chain of Custody
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how an authorized defender protects fictional originals,
            verifies copies, distinguishes evidence types, records every
            transfer and access event, preserves source lineage, investigates
            integrity exceptions, and explains exactly what a hash can and
            cannot prove.
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
          lessonTitle="Evidence Integrity, Hashes, and Chain of Custody"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive evidence.",
            "I will not collect, copy, hash, open, inspect, alter, export, image, decrypt, transfer, or access any real device, account, file, log, cloud service, network, or private record.",
            "I will protect originals and use verified working copies for analysis.",
            "I will distinguish integrity checks from proof of ownership, intent, completeness, authenticity, or authorization.",
            "I will preserve every fictional transfer, access event, derived artifact, exception, limitation, and source-lineage relationship.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Finding Is Only as Trustworthy as the Evidence-Handling Record behind It"
        >
          <p className="leading-8">
            The fictional Northbridge case now contains metadata, identity,
            process, cloud, application, deployment, support, and source-health
            records. Several preserved copies and working copies must move
            between fictional owners, custodians, analysts, and reviewers. One
            failed working-copy verification appears during the process. The
            team must determine whether the problem came from an incomplete
            transfer, a wrong version, a packaging change, corruption, or a real
            content difference without hiding the mismatch or overstating what
            it proves.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak handling
              </p>
              <p className="mt-2 leading-7">
                Reuse one filename and one identifier for every copy, work
                directly on originals, delete failed copies, and treat a hash
                mismatch as proof of tampering.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional handling
              </p>
              <p className="mt-2 leading-7">
                Preserve originals, assign unique identifiers, verify at control
                points, record every handler and purpose, quarantine exceptions,
                create new verified copies, and maintain complete lineage.
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
          title="Integrity Is a Documented Process, Not a Single Number"
        >
          <p className="leading-8">
            A fictional hash result can help verify that two compared data
            objects are identical, but trustworthy handling also requires
            identifiers, source ownership, authorization, preservation,
            verification method, transfers, access history, storage, working
            copies, derived-artifact lineage, limitations, exceptions, review,
            and disposition. A complete record allows another reviewer to
            understand where the evidence came from and how each conclusion was
            produced.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Identity–Integrity–Custody–Lineage Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Identity", "Which exact fictional evidence object, source, owner, time window, type, version, and case question are being handled?"],
              ["Integrity", "Which fictional method verified the object before and after collection, transfer, copying, analysis, storage, or archive?"],
              ["Custody", "Who controlled, transferred, stored, accessed, reviewed, or approved the fictional evidence, when, why, and under which conditions?"],
              ["Lineage", "Which fictional originals produced each copy, filter, screenshot, note, timeline, exhibit, finding, and report statement?"],
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
            Evidence Integrity and Custody Terms
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
            Hash Concepts
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What a Fictional Hash Can and Cannot Prove
          </h2>

          <div className="mt-6 grid gap-5">
            {hashConcepts.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Can support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Does not prove
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.does_not_support}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Chain-of-Custody Fields
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Records That Protect the Evidence Story
          </h2>

          <div className="mt-6 grid gap-5">
            {custodyFields.map((item) => (
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

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Risk if missing
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
            Evidence Types
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Distinguish Originals, Copies, and Derived Artifacts
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copyTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.type}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-sm leading-6 text-blue-50">
                  <span className="font-black text-blue-200">Handling: </span>
                  {item.handling}
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-50">
                  <span className="font-black text-emerald-200">Example: </span>
                  {item.example}
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
            Preserve, Verify, Transfer, Analyze, and Review
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
          title="Fake Northbridge Evidence Integrity Dashboard"
          subtitle="Training dashboard for fictional evidence handling only."
          metrics={[
            {
              label: "Original evidence records",
              value: "6",
              note: "Six fictional original or first-preserved records are registered and protected.",
            },
            {
              label: "Verified working copies",
              value: "5",
              note: "Five working copies passed comparison before analysis.",
            },
            {
              label: "Open integrity exceptions",
              value: "1",
              note: "One failed copy is quarantined while a new verified copy and corrective record are completed.",
            },
          ]}
        />

        <FakeAlertCard
          title="Working-Copy Integrity Verification Failed"
          severity="High"
          time="09:52 AM"
          source="Fake Evidence Integrity Console"
          details="A fictional cloud-audit working copy does not match the preserved reference after transfer to the analysis workspace."
          recommendation="Stop using the failed copy, preserve and quarantine it, verify the preserved reference, review transfer and packaging records, confirm the exact source version and method, create a new approved working copy, verify the new copy, document the exception and corrective action, and continue only after the evidence custodian approves."
        />

        <FakeLogPanel
          title="Fake Northbridge Chain-of-Custody Records"
          logs={[
            "09:06 RECEIVE evidence='NRA-E-002-ORIG' sender='Platform-Custodian'",
            "09:07 VERIFY evidence='NRA-E-002-ORIG' result='pass'",
            "09:11 PRESERVE evidence='NRA-E-002-PRES-01' parent='NRA-E-002-ORIG'",
            "09:15 COPY evidence='NRA-E-002-WORK-01' parent='NRA-E-002-PRES-01'",
            "09:16 VERIFY evidence='NRA-E-002-WORK-01' result='pass'",
            "09:23 RECEIVE evidence='NRA-E-003-ORIG' source='Process-Snapshot'",
            "09:34 RECEIVE evidence='NRA-E-004-ORIG' source='Identity-Export'",
            "09:41 RECEIVE evidence='NRA-E-005-ORIG' source='Cloud-Audit'",
            "09:47 COPY evidence='NRA-E-005-WORK-01' parent='NRA-E-005-ORIG'",
            "09:52 VERIFY evidence='NRA-E-005-WORK-01' result='fail'",
            "09:53 QUARANTINE evidence='NRA-E-005-WORK-01' exception='INT-01'",
            "09:58 REVIEW transfer='incomplete_package' source_version='confirmed'",
            "10:01 COPY evidence='NRA-E-005-WORK-02' parent='NRA-E-005-ORIG'",
            "10:02 VERIFY evidence='NRA-E-005-WORK-02' result='pass'",
            "10:18 DERIVE evidence='NRA-D-014' type='timeline_v2'",
            "10:45 REVIEW custody='complete' exceptions='documented'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Evidence Identity and Lineage Records
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">{item.type}</h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Source", item.source],
                    ["Integrity", item.integrity],
                    ["Custody", item.custody],
                    ["Lineage", item.lineage],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Custody Timeline
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Evidence Transfers and Access Events
          </h2>

          <div className="mt-6 grid gap-4">
            {custodyEvents.map((item) => (
              <article
                key={`${item.time}-${item.event}`}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.18fr_0.45fr_0.65fr_1fr_0.75fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.time}
                </p>

                <p className="font-black text-white">{item.event}</p>

                <p className="text-sm font-semibold text-blue-200">
                  {item.handler}
                </p>

                <p className="text-sm leading-6 text-slate-300">
                  {item.purpose}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  {item.verification}
                </p>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Integrity Conclusion Is Best Supported?"
          evidence={[
            "The fictional preserved cloud-audit reference passed verification upon receipt.",
            "The first working copy failed verification after transfer to the analysis workspace.",
            "The failed copy was preserved and quarantined rather than deleted.",
            "The transfer review identified an incomplete packaging step.",
            "A new working copy created from the preserved reference passed verification.",
            "The chain-of-custody record includes handlers, times, purposes, verification, exception, corrective action, and approval.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The first working copy was unreliable because of an incomplete transfer or packaging process; the preserved reference remained verified, the exception was documented, and the new verified copy may be used for analysis.",
            "The original evidence was maliciously altered.",
            "The analyst intentionally changed the evidence.",
            "Every cloud-audit record in the case is untrustworthy.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a handling problem affecting one working copy, not intentional alteration of the preserved original or every source record."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Evidence Integrity and Custody"
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
          title="Build the Northbridge Evidence Register and Chain of Custody"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Evidence Identity, Integrity, Custody, and Lineage Package
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete evidence register, transfer history, access record,
                integrity-exception report, and derived-artifact lineage map.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Unique identifiers for originals, preserved copies, working copies, and derived artifacts.</li>
                <li>Source, owner, description, scope, creation or receipt time, and authorization reference.</li>
                <li>Integrity method, expected result, observed result, handler, time, and verification point.</li>
                <li>Storage, protection, access, retention, and need-to-know controls.</li>
                <li>Transfer history with sender, receiver, purpose, condition, and verification.</li>
                <li>Access and analysis history.</li>
                <li>Derived-artifact parent-source map.</li>
                <li>Integrity-exception, corrective-action, approval, and final review record.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not hash, copy, inspect, transfer, or analyze any real evidence.
            Complete the lab only with fictional records displayed in this
            lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Working Copy Fails Verification"
          scenario="A fictional working copy does not match the preserved reference after transfer to the analysis workspace."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop using the copy, preserve and quarantine it, verify the reference, investigate transfer and packaging, create a new approved copy, verify it, document the exception, and resume only after custodian approval.",
              outcome:
                "Best defensive choice. The mismatch remains visible and the analysis continues only with a verified copy.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the copy because the filenames and sizes appear similar.",
              outcome:
                "Unsafe. Similar appearance does not resolve an integrity mismatch.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the failed copy and remove the event from the custody record.",
              outcome:
                "Unsafe. The exception and handling history must remain documented.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Reviewer Requests a Screenshot without Parent Evidence"
          scenario="A fictional reviewer wants to use an analyst screenshot in the final report but the screenshot has no evidence identifier, capture context, filter state, or parent-source reference."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use it yet; identify the parent working copy, recreate the exhibit using the approved method, record filters and display state, assign a derived identifier, verify the context, and obtain review approval.",
              outcome:
                "Best defensive choice. The exhibit becomes traceable and reproducible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use it because the image looks clear.",
              outcome:
                "Weak. Visual clarity does not create source lineage.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Call the screenshot original evidence.",
              outcome:
                "Unsafe. A screenshot is a derived representation, not the preserved source.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Evidence Integrity, Hashes, and Chain-of-Custody Checklist"
          items={[
            "I can assign a unique fictional identifier to every original, preserved copy, working copy, export, screenshot, note, timeline, and report exhibit.",
            "I can explain exactly what a matching or mismatching fictional hash can and cannot support.",
            "I can record evidence description, source, owner, subject, time window, authorization, and evidence type.",
            "I can preserve originals and analyze only verified working copies.",
            "I can record verification method, expected and observed result, handler, time, tool or process, and limitation.",
            "I can document every fictional transfer, storage change, access event, analysis action, and reviewer event.",
            "I can preserve source lineage from original evidence to every derived artifact and report statement.",
            "I can quarantine and investigate fictional mismatches, incomplete transfers, wrong versions, altered metadata, unknown handlers, and unsupported formats.",
            "I can complete retention, archive, return, transfer, or deletion decisions under documented owner approval.",
            "I will use only fictional evidence and never expose real files, hashes, paths, logs, users, identities, handlers, locations, contacts, owners, or private records.",
          ]}
        />

        <MiniQuiz
          title="I12.3 Mini Quiz: Evidence Integrity, Hashes, and Chain of Custody"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Digital Evidence Integrity and Chain-of-Custody Package for the Northbridge Research Archive case. Include evidence identifiers, source and owner, description, scope, receipt time, authorization reference, original and working-copy records, verification points, transfer history, access history, derived-artifact lineage, one integrity exception, corrective action, storage controls, retention, disposition, review approval, and portfolio-safety statement."
          tips={[
            "Use only fictional evidence names, identifiers, handlers, storage locations, hashes, dates, times, systems, owners, and organizations.",
            "Never present a hash as proof of intent, authorship, completeness, authorization, or absence of compromise.",
            "Keep failed copies and mismatches visible through exception records rather than deleting them.",
            "Link every screenshot, filter, timeline, note, exhibit, and finding to its exact fictional parent evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Evidence integrity is a documented chain of identity, preservation, verification, custody, access, lineage, exception handling, review, and disposition.",
            "A matching fictional hash can support content identity between compared objects but cannot independently prove ownership, intent, completeness, authenticity, or authorization.",
            "Originals, preserved references, working copies, filtered exports, screenshots, notes, timelines, and report exhibits should have distinct identifiers and handling records.",
            "Every transfer and access event should record who, when, why, which evidence object, which condition, and which verification result.",
            "Derived evidence is useful only when its parent sources, transformations, filters, limitations, and review history remain visible.",
            "Integrity mismatches should be preserved, quarantined, investigated, corrected, reviewed, and documented rather than hidden.",
            "Portfolio artifacts should recreate the integrity workflow with clearly fictional evidence rather than exposing real evidence-handling details.",
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