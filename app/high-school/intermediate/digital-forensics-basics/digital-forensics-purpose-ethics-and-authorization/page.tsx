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
const previousPage = modulePath;
const nextLesson = `${modulePath}/evidence-sources-and-collection-planning`;

const objectives = [
  "Explain the defensive purpose of digital forensics and distinguish it from unauthorized access, curiosity-driven searching, surveillance, or evidence alteration.",
  "Translate a fictional case request into a specific question, decision need, owner, approved scope, privacy boundary, evidence priority, method limit, and stop condition.",
  "Separate authorization, consent, organizational policy, technical capability, and ethical judgment instead of treating them as interchangeable.",
  "Use data-minimization, need-to-know access, least exposure, evidence preservation, and proportionality when planning a fictional forensic review.",
  "Recognize when evidence is outside scope, ownership is unclear, legal or policy review is required, collection could change data, or the requested conclusion exceeds the evidence."
];
const vocabulary = [
  [
    "Digital forensics",
    "An authorized defensive process for identifying, preserving, examining, correlating, explaining, and reporting digital evidence to answer defined questions."
  ],
  [
    "Authorization",
    "Documented permission from an appropriate fictional owner or authority defining what may be examined, by whom, for what purpose, during which period, and under which limits."
  ],
  [
    "Case objective",
    "The exact fictional decision or question the forensic work must support, such as explaining a duplicate archive folder or validating a known workflow."
  ],
  [
    "Scope",
    "The approved fictional systems, accounts, files, logs, time windows, evidence types, actions, owners, and exclusions covered by the case."
  ],
  [
    "Privacy boundary",
    "A fictional rule limiting access, collection, viewing, retention, sharing, and reporting to information necessary for the approved objective."
  ],
  [
    "Data minimization",
    "Collecting and reviewing only the fictional information reasonably necessary to answer the case question."
  ],
  [
    "Need to know",
    "Restricting fictional evidence access to people who require it for an approved role, decision, or action."
  ],
  [
    "Proportionality",
    "Matching the fictional forensic action to the seriousness, evidence need, privacy impact, operational risk, and available alternatives."
  ],
  [
    "Stop condition",
    "A fictional trigger requiring work to pause, such as out-of-scope evidence, unclear ownership, unexpected private data, technical risk, or missing authority."
  ],
  [
    "Chain of custody",
    "The fictional record of who controlled evidence, when, why, how it was transferred or accessed, and which original or working copy was involved."
  ],
  [
    "Observation",
    "A fictional fact directly visible in supplied evidence, such as a timestamp, hash value, path, process name, identity, or logged event."
  ],
  [
    "Finding",
    "A fictional evidence-supported interpretation that connects observations to the approved case question while preserving confidence and limitations."
  ],
  [
    "Alternative explanation",
    "Another fictional interpretation that remains possible and should be tested or documented rather than ignored."
  ],
  [
    "Limitation",
    "A fictional condition reducing certainty, such as missing logs, delayed delivery, clock drift, incomplete retention, unknown ownership, or unsupported tooling."
  ],
  [
    "Portfolio-safe report",
    "A fictional public-facing case artifact that demonstrates defensive reasoning without exposing real people, systems, routes, logs, files, credentials, contacts, or private records."
  ]
];
const authorizationQuestions = [
  {
    "title": "What is the exact case question?",
    "summary": "A fictional forensic request should identify the decision that the evidence must support instead of asking the analyst to search everything.",
    "good": "Determine whether the supplied archive-export records support that a duplicate folder was created by the approved export workflow during the defined window.",
    "weak": "Find anything suspicious in the archive.",
    "record": "Case question, decision owner, required answer format, deadline, confidence expectation, and allowed uncertainty."
  },
  {
    "title": "Who owns the decision and the evidence?",
    "summary": "The fictional requester, system owner, data owner, incident owner, privacy owner, and evidence custodian may have different responsibilities.",
    "good": "Document the fictional research-archive owner, incident lead, privacy reviewer, evidence custodian, and report approver.",
    "weak": "Assume the person who sent the message can authorize every source.",
    "record": "Named fictional roles, approval status, delegated authority, backup owner, conflicts, and escalation path."
  },
  {
    "title": "Which sources and actions are approved?",
    "summary": "Authorization should describe supplied evidence types and allowed analysis actions rather than giving a vague permission statement.",
    "good": "Review the supplied fictional file-metadata export, identity records, cloud audit records, process snapshot, support report, and source-health record.",
    "weak": "Access every device, account, backup, and cloud service connected to the organization.",
    "record": "Approved sources, excluded sources, read-only expectations, working-copy rules, export limits, retention, and deletion instructions."
  },
  {
    "title": "What time and subject boundaries apply?",
    "summary": "A fictional case should use a defined time window and subject boundary that can expand only through documented approval.",
    "good": "Review the approved export window plus the documented preparation and completion periods for the named fictional archive job.",
    "weak": "Review all historical activity because it may be useful.",
    "record": "Start and end times, time zone, relevant identities, services, files, folders, workflows, and expansion triggers."
  },
  {
    "title": "Which privacy protections are required?",
    "summary": "The case should protect unrelated fictional research content, personal information, support details, credentials, and confidential records.",
    "good": "Use metadata and event records first; avoid opening content unless the approved question cannot be answered otherwise and additional approval is documented.",
    "weak": "Read every file because access is technically possible.",
    "record": "Minimization rules, masking, content-review conditions, need-to-know access, storage, sharing, retention, and disposal."
  },
  {
    "title": "What are the stop and escalation conditions?",
    "summary": "The analyst should know when to pause before unexpected evidence, risk, privacy exposure, ownership conflict, or technical limitation becomes a larger problem.",
    "good": "Stop if supplied records reveal out-of-scope identities, protected research content, unclear ownership, corrupted evidence, or a need for real-system access.",
    "weak": "Continue until the analyst personally feels finished.",
    "record": "Stop trigger, immediate preservation action, responsible owner, escalation contact, required approval, and restart condition."
  }
];
const ethicalPrinciples = [
  {
    "title": "Authorization before capability",
    "detail": "A fictional analyst may understand how to inspect a source but should proceed only when the approved case scope and owner authority clearly permit that examination.",
    "example": "The supplied cloud audit export may be reviewed, but the analyst may not sign into a real cloud tenant or request broader access."
  },
  {
    "title": "Minimize exposure",
    "detail": "Use the least intrusive fictional evidence capable of answering the question, beginning with metadata, logs, hashes, event relationships, and documented business context.",
    "example": "Compare file hashes and metadata before opening fictional file contents."
  },
  {
    "title": "Preserve original meaning",
    "detail": "Do not alter fictional originals, rewrite timestamps, remove inconvenient records, merge conflicting sources without notation, or hide uncertainty.",
    "example": "Keep the original timestamp and the normalized timestamp together with the conversion method."
  },
  {
    "title": "Separate observation from interpretation",
    "detail": "A fictional report should show what the evidence directly records, what the analyst concludes, which alternatives remain possible, and what evidence is missing.",
    "example": "A child copy process is observed; intent and actor knowledge remain separate questions."
  },
  {
    "title": "Respect need to know",
    "detail": "Share fictional evidence only with approved roles and provide each audience the minimum detail necessary for its decision.",
    "example": "Leadership receives impact, confidence, limits, and decisions rather than every raw evidence record."
  },
  {
    "title": "Document limitations and corrections",
    "detail": "Source delay, clock drift, missing retention, parser uncertainty, incomplete collection, and later corrections should remain visible.",
    "example": "A delayed application source changes timeline confidence but does not erase the earlier version."
  },
  {
    "title": "Avoid outcome pressure",
    "detail": "A fictional analyst should not shape findings to match a preferred disciplinary, legal, operational, or leadership narrative.",
    "example": "Report that external sharing is unsupported rather than claiming it could not have happened under any condition."
  },
  {
    "title": "Keep the portfolio fictional",
    "detail": "Educational artifacts should use invented organizations, systems, identities, logs, files, contacts, owners, dates, metrics, and evidence.",
    "example": "Recreate the reasoning with Northbridge Research Archive instead of publishing real incident materials."
  }
];
const scopeStates = [
  {
    "state": "Approved",
    "meaning": "The fictional evidence source, subject, time window, action, and purpose are clearly covered by current authorization.",
    "example": "Review the supplied metadata export for the named archive folder during the approved export window.",
    "action": "Proceed using the documented read-only method and handling rules."
  },
  {
    "state": "Conditionally approved",
    "meaning": "The fictional source may be reviewed only after a stated condition, approval, privacy step, or technical safeguard is met.",
    "example": "Review file contents only if metadata and event records cannot answer the case question and the privacy owner approves.",
    "action": "Preserve the need, document the condition, obtain approval, and record the new boundary."
  },
  {
    "state": "Outside scope",
    "meaning": "The fictional source, identity, file, time period, action, or purpose is not included in the current case authorization.",
    "example": "Unrelated student records appear in the same export package.",
    "action": "Do not analyze the content; preserve context, restrict exposure, notify the owner, and request a scope decision."
  },
  {
    "state": "Ownership unclear",
    "meaning": "The fictional evidence may be relevant, but the person who can authorize access or use has not been confirmed.",
    "example": "A backup export belongs to a partner-controlled research repository.",
    "action": "Pause review, preserve the reference, identify the owner, and obtain explicit authorization."
  },
  {
    "state": "Method unsafe",
    "meaning": "The fictional requested action could change evidence, affect service, expose private data, or create an unsupported operational risk.",
    "example": "Opening the only original archive image in a tool that may update metadata.",
    "action": "Stop, preserve the original, propose a working copy or safer method, and document the decision."
  },
  {
    "state": "Question exceeds evidence",
    "meaning": "The fictional requester seeks a conclusion that the supplied records cannot reliably prove.",
    "example": "The case asks who intended to create a duplicate when the evidence supports only which identity and process performed the action.",
    "action": "Report the supported finding, preserve alternatives, state the limitation, and identify additional evidence that would be required."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Receive and preserve the request",
    "detail": "Record the fictional requester, original wording, date, urgency, business context, supplied evidence, requested output, and any stated assumptions before rewriting the request.",
    "output": "Original request record and intake identifier."
  },
  {
    "step": "2",
    "title": "Convert the request into a case question",
    "detail": "Rewrite broad language into a neutral, testable question tied to a decision, evidence need, time window, and acceptable uncertainty.",
    "output": "Case objective, decision owner, and required answer."
  },
  {
    "step": "3",
    "title": "Confirm authority and ownership",
    "detail": "Identify the fictional incident owner, system owner, data owner, privacy reviewer, evidence custodian, report approver, and any delegated authority.",
    "output": "Authorization matrix and escalation path."
  },
  {
    "step": "4",
    "title": "Define the evidence and action boundary",
    "detail": "List approved fictional sources, excluded sources, allowed methods, working-copy rules, content-review limits, retention, transfer, and deletion requirements.",
    "output": "Scope statement and evidence boundary."
  },
  {
    "step": "5",
    "title": "Apply privacy and proportionality",
    "detail": "Choose the least intrusive fictional evidence and method capable of answering the question while protecting unrelated people, content, services, and records.",
    "output": "Privacy and minimization plan."
  },
  {
    "step": "6",
    "title": "Define stop, escalation, and expansion rules",
    "detail": "Document what requires work to pause, which owner must be contacted, how evidence will be preserved, and what approval is required to restart or expand.",
    "output": "Stop-condition and scope-change register."
  },
  {
    "step": "7",
    "title": "Perform the authorized analysis",
    "detail": "Use only supplied fictional evidence, maintain originals and working copies, record methods, separate observations from findings, and preserve alternatives and limitations.",
    "output": "Analysis notes, evidence references, and findings matrix."
  },
  {
    "step": "8",
    "title": "Review and report",
    "detail": "Confirm that every fictional claim is evidence-linked, scope-bounded, privacy-aware, reproducible, approved for its audience, and safe for retention or portfolio use.",
    "output": "Reviewed report, correction path, and portfolio-safe summary."
  }
];
const caseRecords = [
  {
    "id": "REQ-01",
    "type": "Request",
    "record": "A fictional archive owner asks whether an unexpected duplicate folder was created by the approved export workflow.",
    "meaning": "Provides a neutral starting question tied to a real business decision."
  },
  {
    "id": "AUTH-01",
    "type": "Authorization",
    "record": "Approval covers supplied file metadata, identity records, cloud audit records, process snapshot, support report, deployment record, and source-health record for a defined two-hour window.",
    "meaning": "Defines approved evidence and time boundaries."
  },
  {
    "id": "PRIV-01",
    "type": "Privacy",
    "record": "File contents may not be opened unless metadata and event evidence are insufficient and the privacy reviewer approves expansion.",
    "meaning": "Applies data minimization and conditional authorization."
  },
  {
    "id": "META-14",
    "type": "File metadata",
    "record": "Five duplicate files have matching content hashes but different creation and path metadata.",
    "meaning": "Supports duplicate content without proving the mechanism by itself."
  },
  {
    "id": "ID-07",
    "type": "Identity",
    "record": "The approved archive-export service identity authenticated during the documented export window.",
    "meaning": "Connects the authorized workflow to the time period without proving every operation."
  },
  {
    "id": "PROC-09",
    "type": "Process snapshot",
    "record": "The scheduled export worker launched a child copy process using an outdated configuration reference.",
    "meaning": "Supports a technical mechanism that requires correlation with file, deployment, and cloud evidence."
  },
  {
    "id": "CLOUD-21",
    "type": "Cloud audit",
    "record": "No supplied record shows external sharing, public-link creation, or unrelated-account download in the approved window.",
    "meaning": "Narrows supported impact within source-health and retention limits."
  },
  {
    "id": "HEALTH-03",
    "type": "Source health",
    "record": "Application audit records arrived twelve minutes late while identity, file, cloud, and support records remained current.",
    "meaning": "Requires a visible limitation and later timeline revision."
  },
  {
    "id": "STOP-02",
    "type": "Stop condition",
    "record": "The evidence package references an unrelated research folder not included in authorization.",
    "meaning": "The analyst may preserve the reference but should not inspect that folder without approved expansion."
  },
  {
    "id": "DEC-04",
    "type": "Owner decision",
    "record": "The fictional privacy reviewer declines content review because metadata, process, and cloud evidence answer the approved question.",
    "meaning": "Documents proportionality and a defensible decision not to collect more."
  }
];
const commonMistakes = [
  "Treating technical ability as permission to examine a fictional source.",
  "Accepting a vague request such as find anything suspicious instead of defining a neutral case question.",
  "Assuming the person who submitted the request owns every system, account, file, log, or data source.",
  "Reviewing all available fictional records rather than minimizing collection to what the approved question requires.",
  "Opening file contents before checking whether metadata, hashes, event records, or business context answer the question.",
  "Using real devices, accounts, networks, cloud services, logs, files, routes, or private records in a training exercise.",
  "Changing originals, working directly on the only copy, or failing to distinguish original and derived evidence.",
  "Treating an observed identity or process as proof of human intent.",
  "Ignoring alternative explanations because one interpretation appears likely.",
  "Claiming that no event occurred when an important evidence source was delayed, incomplete, or unhealthy.",
  "Expanding fictional scope without owner approval, privacy review, documented reason, and a new evidence boundary.",
  "Hiding uncertainty, missing records, clock differences, parser limits, or corrections from the final report.",
  "Sharing raw evidence with people who do not need it for an approved decision.",
  "Publishing a real-looking portfolio artifact containing internal hostnames, paths, logs, contacts, owner names, timestamps, or evidence details."
];
const quizQuestions = [
  {
    "question": "What should happen before a fictional analyst examines a supplied evidence source?",
    "choices": [
      "Confirm that the source, purpose, action, owner, time window, and method are covered by documented authorization.",
      "Open the source first and ask for permission later.",
      "Assume that technical access equals authorization.",
      "Search every related account to avoid missing evidence."
    ],
    "answer": 0,
    "explanation": "Authorization should clearly cover the source and action before analysis begins."
  },
  {
    "question": "Which case question is most appropriate?",
    "choices": [
      "Do the supplied fictional records support that the approved export workflow created the duplicate folder during the defined window?",
      "Who is guilty?",
      "Find anything suspicious.",
      "Prove that the service identity caused a breach."
    ],
    "answer": 0,
    "explanation": "A neutral, testable question avoids assuming the conclusion."
  },
  {
    "question": "What is data minimization in fictional digital forensics?",
    "choices": [
      "Reviewing only the evidence reasonably necessary to answer the approved question.",
      "Deleting evidence that appears unrelated.",
      "Collecting everything but reporting very little.",
      "Avoiding all evidence collection."
    ],
    "answer": 0,
    "explanation": "Minimization reduces unnecessary privacy exposure and operational risk."
  },
  {
    "question": "What should happen when out-of-scope fictional evidence appears?",
    "choices": [
      "Pause analysis of that content, preserve the reference, restrict exposure, notify the owner, and request a scope decision.",
      "Analyze it because it may be interesting.",
      "Delete it immediately.",
      "Publish it in the report without review."
    ],
    "answer": 0,
    "explanation": "Unexpected relevance does not automatically create authorization."
  },
  {
    "question": "Which statement best separates observation from finding?",
    "choices": [
      "An observation records what the evidence directly shows, while a finding interprets several observations in relation to the case question.",
      "They are identical.",
      "A finding requires no evidence.",
      "An observation always proves intent."
    ],
    "answer": 0,
    "explanation": "Clear separation prevents interpretation from being presented as raw fact."
  },
  {
    "question": "Why should a fictional analyst preserve limitations?",
    "choices": [
      "Limitations help reviewers understand which conclusions are supported and where uncertainty remains.",
      "Limitations make the report look weaker and should be removed.",
      "Limitations are needed only when no conclusion is possible.",
      "Limitations replace evidence references."
    ],
    "answer": 0,
    "explanation": "Visible limitations improve accuracy, trust, and reproducibility."
  },
  {
    "question": "What is the safest portfolio approach?",
    "choices": [
      "Recreate the case using clearly fictional organizations, systems, identities, files, logs, contacts, timelines, owners, and evidence.",
      "Publish real screenshots after hiding one filename.",
      "Use internal logs because the project is educational.",
      "Include real evidence but remove the final conclusion."
    ],
    "answer": 0,
    "explanation": "A portfolio should preserve defensive reasoning without exposing real evidence or private organizational details."
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
        href={previousPage}
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

export default function DigitalForensicsPurposeEthicsAuthorizationPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12.1 Digital Forensics Purpose, Ethics, and Authorization
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how an authorized defender turns a broad fictional request
            into a clear forensic question, defined evidence boundary, privacy
            plan, proportional method, stop condition, reviewer path, and
            portfolio-safe final record.
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
          lessonTitle="Digital Forensics Purpose, Ethics, and Authorization"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Research Archive records.",
            "I will not access, collect, image, search, inspect, alter, recover, decrypt, or connect to any real device, account, file, log, network, cloud service, or private record.",
            "I will separate what is technically possible from what is authorized, necessary, ethical, privacy-aware, and safe.",
            "I will preserve observations, findings, alternatives, uncertainty, limitations, ownership, and stop conditions.",
            "I will create only fictional, portfolio-safe evidence and reporting artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The First Forensic Decision Happens before Any Evidence Is Opened"
        >
          <p className="leading-8">
            A fictional archive owner reports that an approved research export
            produced an unexpected duplicate folder. The owner asks the forensic
            team to determine what happened. The supplied package includes file
            metadata, an identity record, a process snapshot, cloud audit
            records, a support report, a deployment record, and a source-health
            record. It also references an unrelated research folder that is not
            part of the current approval.
          </p>

          <p className="mt-4 leading-8">
            A weak response begins opening every record and searching for
            anything suspicious. A professional response first defines the exact
            case question, identifies owners and decision needs, confirms
            authorization, minimizes exposure, protects originals, establishes
            stop conditions, and records what the evidence can and cannot prove.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Unsafe starting point
              </p>

              <p className="mt-2 leading-7">
                Search every available account, file, backup, and cloud service
                because technical access exists and the evidence may be useful.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional starting point
              </p>

              <p className="mt-2 leading-7">
                Use a neutral question, approved sources, least-intrusive
                methods, read-only working copies, privacy controls, documented
                owners, and stop conditions.
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
          title="Correct Analysis Can Still Be Unethical or Unauthorized"
        >
          <p className="leading-8">
            A fictional analyst might accurately interpret a record and still
            perform the work improperly if the source was outside scope, the
            owner lacked authority, the method altered evidence, unnecessary
            private information was exposed, or the conclusion answered a
            question that was never approved. Forensic quality therefore
            includes technical accuracy, authorization, privacy, proportionality,
            integrity, transparency, reproducibility, and safe communication.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Authorization Is a Detailed Boundary, Not a One-Word Permission"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Purpose", "Which fictional question and decision justify the work?"],
              ["People", "Who requests, owns, approves, performs, reviews, receives, and stores the result?"],
              ["Evidence", "Which fictional sources, subjects, systems, identities, files, logs, and time windows are approved?"],
              ["Actions", "Which read-only reviews, exports, comparisons, derived copies, notes, and reports are allowed?"],
              ["Privacy", "Which fictional information must be minimized, masked, restricted, retained, or excluded?"],
              ["Stops", "Which ownership, scope, evidence, technical, privacy, or safety condition requires work to pause?"],
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
            Digital Forensics Authorization Terms
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
            Authorization Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Questions to Answer before Analysis Begins
          </h2>

          <div className="mt-6 grid gap-5">
            {authorizationQuestions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.summary}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong approach
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.good}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak approach
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required record
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
            Ethical Principles
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Principles for Defensive Forensic Work
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {ethicalPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-50">
                  <span className="font-black text-emerald-200">Example: </span>
                  {item.example}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Scope States
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Decide Whether the Work May Proceed, Pause, or Expand
          </h2>

          <div className="mt-6 grid gap-4">
            {scopeStates.map((item) => (
              <article
                key={item.state}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.3fr_1fr_1fr_1fr]"
              >
                <p className="font-black text-cyan-100">{item.state}</p>
                <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
                <p className="text-sm leading-6 text-blue-100">{item.example}</p>
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
            From Request Intake to Reviewed Report
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
          title="Fake Northbridge Forensic Authorization Dashboard"
          subtitle="Training dashboard for supplied fictional evidence only."
          metrics={[
            {
              label: "Approved evidence sources",
              value: "7",
              note: "File metadata, identity, process, cloud, support, deployment, and source-health records are covered.",
            },
            {
              label: "Conditionally approved actions",
              value: "1",
              note: "File-content review requires proof that metadata and event records are insufficient plus privacy-owner approval.",
            },
            {
              label: "Active stop conditions",
              value: "1",
              note: "An unrelated research-folder reference is preserved but may not be examined under current authorization.",
            },
          ]}
        />

        <FakeAlertCard
          title="Out-of-Scope Evidence Reference Detected"
          severity="Medium"
          time="10:24 AM"
          source="Fake Evidence Intake Console"
          details="A supplied fictional metadata export contains a reference to an unrelated research folder that is outside the approved case subjects and time window."
          recommendation="Do not inspect or summarize the unrelated content. Preserve the reference and context, restrict exposure, record the stop condition, notify the fictional incident and privacy owners, request an explicit scope decision, and resume only after the evidence boundary is updated."
        />

        <FakeLogPanel
          title="Fake Northbridge Authorization and Intake Records"
          logs={[
            "09:00 REQUEST case_question='duplicate archive folder' requester='archive_owner'",
            "09:04 OWNER incident='IR-Lead' data='Archive-Owner' privacy='Privacy-Reviewer'",
            "09:08 AUTH sources='metadata,identity,process,cloud,support,deployment,health'",
            "09:10 WINDOW start='08:00' end='10:00' timezone='UTC-04:00'",
            "09:12 METHOD originals='preserve' working_copies='approved' content_review='conditional'",
            "09:14 PRIVACY minimize='metadata-first' masking='required' need_to_know='enforced'",
            "09:16 STOP out_of_scope='pause' unclear_owner='pause' real_access='prohibited'",
            "09:22 EVIDENCE META-14 hashes='matching' paths='different'",
            "09:27 EVIDENCE ID-07 identity='archive-export-service' workflow='approved'",
            "09:32 EVIDENCE PROC-09 child_process='copy-worker' config='outdated-reference'",
            "09:38 HEALTH app_audit='delayed_12m' alternate_sources='current'",
            "09:43 SCOPE unrelated_folder='reference_only' analysis='stopped'",
            "09:47 DECISION content_review='not_required' approver='Privacy-Reviewer'",
            "09:55 FINDING duplicate_mechanism='supported' external_sharing='not_supported'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Case Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Research Archive Authorization Set
          </h2>

          <div className="mt-6 grid gap-4">
            {caseRecords.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.2fr_0.3fr_1fr_1fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.id}
                </p>

                <p className="text-sm font-black text-blue-200">{item.type}</p>

                <p className="text-sm leading-6 text-slate-200">
                  {item.record}
                </p>

                <p className="text-sm leading-6 text-slate-400">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Authorization Decision Is Best Supported?"
          evidence={[
            "The fictional case question asks whether the approved archive-export workflow created the duplicate folder.",
            "Authorization covers supplied metadata, identity, process, cloud, support, deployment, and source-health records.",
            "The privacy rule requires metadata-first analysis and additional approval before file contents may be opened.",
            "Matching hashes, path metadata, process records, and identity records support a duplicate-copy mechanism.",
            "No supplied record supports external sharing or unrelated-account download within the approved window.",
            "An unrelated research-folder reference is outside current scope.",
          ]}
          question="What should the fictional analyst do next?"
          options={[
            "Complete the finding using the approved supplied records, preserve the out-of-scope reference without examining it, document the source-health limitation, and avoid file-content review because the current evidence answers the case question.",
            "Open every file and the unrelated folder to be completely certain.",
            "Declare intentional data theft by the service identity.",
            "Close the case without recording the authorization or privacy decision.",
          ]}
          bestAnswer={0}
          explanation="The strongest decision answers the approved question with the least intrusive evidence, preserves limitations, and respects the out-of-scope boundary."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Forensic Authorization and Ethics"
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
          title="Create a Fictional Forensic Authorization Brief"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Northbridge Research Archive Intake
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use the supplied fictional case records to create a complete
                authorization and ethics brief before any deeper artifact
                analysis begins.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Neutral case question and required decision.</li>
                <li>Requester, incident owner, system owner, data owner, privacy reviewer, evidence custodian, and report approver.</li>
                <li>Approved and excluded evidence sources, subjects, actions, and time windows.</li>
                <li>Privacy, minimization, masking, need-to-know, retention, and sharing rules.</li>
                <li>Original and working-copy expectations.</li>
                <li>Stop, escalation, scope-expansion, and restart conditions.</li>
                <li>Observation, finding, alternative explanation, limitation, and confidence fields.</li>
                <li>Portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not access or collect any real evidence. Create the brief only
            from the fictional records displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Requester Asks You to Search Every Related Account"
          scenario="The fictional archive owner says a broad search would be faster and asks you to review all related accounts, backups, and cloud folders even though they are not listed in the authorization."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the proposed expansion, preserve the reason it may be useful, identify the owners and privacy impact, request explicit authorization, and continue only within the currently approved evidence boundary.",
              outcome:
                "Best defensive choice. Relevance does not automatically create permission.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Search everything because the requester owns the archive workflow.",
              outcome:
                "Unsafe. The requester may not own every related system, account, or data source.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore every related source permanently.",
              outcome:
                "Incomplete. The need may be documented and reviewed through the proper expansion process.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Evidence References an Unrelated Research Folder"
          scenario="A fictional metadata export lists an unrelated research folder outside the approved subjects. The folder name appears relevant to another possible issue."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not inspect the folder content; preserve the reference and context, restrict exposure, record a stop condition, notify the owners, and request a documented scope decision.",
              outcome:
                "Best defensive choice. The reference can be preserved without crossing the current authorization boundary.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the folder because its name appears relevant.",
              outcome:
                "Unsafe. Appearance of relevance does not replace authorization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the reference from the evidence package.",
              outcome:
                "Unsafe. Evidence and context should not be altered to avoid a scope decision.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Forensic Purpose, Ethics, and Authorization Checklist"
          items={[
            "I can state the exact fictional case question and decision the analysis must support.",
            "I can identify the fictional requester, incident owner, system owner, data owner, privacy reviewer, evidence custodian, report approver, and backup authority.",
            "I can define approved and excluded evidence sources, subjects, systems, identities, files, logs, actions, and time windows.",
            "I can distinguish technical capability, authorization, consent, organizational policy, and ethical judgment.",
            "I can apply data minimization, need-to-know access, least exposure, masking, retention, sharing, and proportionality.",
            "I can preserve originals, distinguish working copies and derived records, and avoid altering evidence meaning or context.",
            "I can separate observations, findings, alternatives, confidence, limitations, and unsupported conclusions.",
            "I can identify stop conditions involving scope, ownership, privacy, evidence integrity, technical risk, or real-system access.",
            "I can document scope expansion, owner approval, new privacy boundaries, restart conditions, and report corrections.",
            "I will use only fictional records and never expose real systems, users, identities, files, logs, routes, credentials, contacts, owners, or private information.",
          ]}
        />

        <MiniQuiz
          title="I12.1 Mini Quiz: Purpose, Ethics, and Authorization"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional one-page Digital Forensics Authorization Brief for the Northbridge Research Archive case. Include the case question, decision owner, requester, system and data owners, privacy reviewer, evidence custodian, report approver, approved sources, exclusions, time window, allowed methods, original and working-copy rules, privacy protections, stop conditions, scope-expansion process, limitations, review requirements, and portfolio-safety statement."
          tips={[
            "Use only fictional organizations, systems, users, identities, files, logs, contacts, owners, dates, and evidence.",
            "Write a neutral question that does not assume guilt, intent, breach, or a preferred outcome.",
            "Use metadata-first and least-intrusive analysis whenever it can answer the approved question.",
            "Make stop conditions and scope-expansion requirements visible instead of relying on analyst judgment alone.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Digital forensics is an authorized defensive process for answering defined questions with preserved and reproducible evidence.",
            "Technical access does not automatically create permission, ownership, necessity, proportionality, or ethical justification.",
            "A strong authorization defines purpose, people, evidence, actions, time, privacy, handling, reporting, stop conditions, and expansion rules.",
            "Data minimization and need-to-know access protect unrelated people and information without weakening the approved case question.",
            "Observations, findings, alternatives, confidence, limitations, and corrections should remain separate and visible.",
            "Out-of-scope or unclear evidence should be preserved and escalated without being analyzed under the current authority.",
            "Portfolio artifacts should recreate the reasoning with clearly fictional evidence rather than exposing real incident or organizational records.",
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