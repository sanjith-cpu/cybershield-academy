import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/digital-forensics-basics`;
const previousLesson = `${modulePath}/digital-forensics-basics-lab`;

const questions = [
  {
    "question": "What should happen before a fictional digital-forensics review begins?",
    "choices": [
      "Confirm the approved case question, owners, scope, evidence sources, methods, privacy boundaries, and stop conditions.",
      "Open every available record immediately.",
      "Assume technical access equals permission.",
      "Write the final conclusion before collecting evidence."
    ],
    "answer": 0,
    "explanation": "Authorization and scope define what may be reviewed, why, by whom, and under which limits."
  },
  {
    "question": "Which fictional case question is the most neutral and testable?",
    "choices": [
      "Do the supplied records support that the approved export workflow created the duplicate folder during job 441?",
      "Who is guilty of stealing the files?",
      "Find anything suspicious in the archive.",
      "Prove that the service identity caused a breach."
    ],
    "answer": 0,
    "explanation": "A defensible case question does not assume guilt, intent, or a preferred outcome."
  },
  {
    "question": "What does data minimization require in a fictional forensic case?",
    "choices": [
      "Review only the information reasonably necessary to answer the approved question.",
      "Collect everything and decide later.",
      "Delete evidence that appears unrelated.",
      "Avoid documenting privacy limits."
    ],
    "answer": 0,
    "explanation": "Minimization reduces unnecessary privacy exposure while preserving the evidence needed for the case."
  },
  {
    "question": "What should happen when a supplied fictional record references an out-of-scope folder?",
    "choices": [
      "Preserve the reference, restrict exposure, record a stop condition, and request a documented scope decision before reviewing the content.",
      "Open the folder because it may be relevant.",
      "Delete the reference from the evidence package.",
      "Publish it in the final report."
    ],
    "answer": 0,
    "explanation": "Potential relevance does not automatically create authorization."
  },
  {
    "question": "Which factors should shape fictional evidence-collection priority?",
    "choices": [
      "Relevance, volatility, source health, privacy, authority, integrity risk, operational impact, and alternate-source availability.",
      "File size and visual appearance only.",
      "Which source is easiest to open.",
      "Which dashboard has the highest severity."
    ],
    "answer": 0,
    "explanation": "Collection order should protect evidence value while controlling loss, privacy, authority, and operational risks."
  },
  {
    "question": "Why should an approved supplied export sometimes be used instead of contacting a live source?",
    "choices": [
      "It may answer the case question with lower operational, privacy, and evidence-alteration risk.",
      "Supplied exports are always complete.",
      "Live sources are never useful.",
      "An export removes the need for source lineage."
    ],
    "answer": 0,
    "explanation": "The least intrusive reliable source is often the safest collection choice."
  },
  {
    "question": "What is the correct relationship between fictional original evidence and a working copy?",
    "choices": [
      "The original remains protected while a separately identified and verified working copy is used for analysis.",
      "The original should be edited directly.",
      "The working copy should reuse the original identifier.",
      "The original may be deleted after copying."
    ],
    "answer": 0,
    "explanation": "Separate identifiers, verification, and handling records preserve evidence integrity and lineage."
  },
  {
    "question": "What can a matching fictional content hash most directly support?",
    "choices": [
      "That the compared digital contents are identical under the chosen method at the time of comparison.",
      "Who created the files.",
      "Why the files were copied.",
      "That the evidence source is complete."
    ],
    "answer": 0,
    "explanation": "A matching hash supports content identity, not authorship, intent, authorization, or completeness."
  },
  {
    "question": "What should happen after a fictional working copy fails integrity verification?",
    "choices": [
      "Stop using it, preserve and quarantine it, investigate the mismatch, create a new approved copy, verify it, and document the corrective action.",
      "Use it because the filename looks correct.",
      "Delete it and remove the event from the custody record.",
      "Rename it so the values appear to match."
    ],
    "answer": 0,
    "explanation": "Integrity exceptions should remain visible and be resolved through a documented process."
  },
  {
    "question": "Which information belongs in a fictional chain-of-custody transfer record?",
    "choices": [
      "Evidence identifier, sender, receiver, time, purpose, condition, location or control change, and verification result.",
      "Only the filename.",
      "Only the receiver's name.",
      "Only the final report conclusion."
    ],
    "answer": 0,
    "explanation": "A complete transfer record explains who controlled the evidence and verifies its condition."
  },
  {
    "question": "Which statement is a direct fictional observation?",
    "choices": [
      "Five files in the duplicate folder have content hashes matching five files in the approved folder.",
      "The service intentionally created unauthorized copies.",
      "A human reviewed every duplicate file.",
      "The event caused external disclosure."
    ],
    "answer": 0,
    "explanation": "The first statement records supplied evidence without adding unsupported intent or impact."
  },
  {
    "question": "Why should a fictional filename extension not be treated as proof of file format?",
    "choices": [
      "An extension can be renamed or misleading and should be compared with internal structure and source context.",
      "Extensions never provide useful clues.",
      "Only ownership metadata identifies format.",
      "Every extension is encrypted."
    ],
    "answer": 0,
    "explanation": "Extensions are useful clues but are not conclusive by themselves."
  },
  {
    "question": "What should be checked before comparing fictional timestamps from different sources?",
    "choices": [
      "Timestamp meaning, source, time zone, clock state, resolution, delay, and transformation history.",
      "Only the displayed hour.",
      "Only the filename.",
      "Whether the values support the preferred conclusion."
    ],
    "answer": 0,
    "explanation": "Cross-source chronology requires source-aware normalization and preserved original values."
  },
  {
    "question": "What can a fictional recent-item artifact support?",
    "choices": [
      "That an application or user context referenced an object under the artifact's documented conditions.",
      "That a human read every page.",
      "That the object was shared externally.",
      "That the object was intentionally modified."
    ],
    "answer": 0,
    "explanation": "A recent-item record provides contextual evidence but does not prove full human interaction."
  },
  {
    "question": "Why is fictional volatile evidence time-sensitive?",
    "choices": [
      "Processes, sessions, connections, modules, queues, and temporary state may change or disappear quickly.",
      "It is always more accurate than preserved evidence.",
      "It never requires authorization.",
      "It automatically proves intent."
    ],
    "answer": 0,
    "explanation": "Volatility can create evidence-loss risk, but urgency does not remove authorization or safety requirements."
  },
  {
    "question": "What can a fictional parent-child process relationship support?",
    "choices": [
      "Which process launched another process and how that relationship fits an approved or unexpected workflow.",
      "Which human intended the action.",
      "That every child process is malicious.",
      "That the parent performed every child action."
    ],
    "answer": 0,
    "explanation": "Parent-child relationships provide execution context, not automatic intent or classification."
  },
  {
    "question": "What can an open fictional file handle support?",
    "choices": [
      "That a process had an active relationship with the object at the snapshot moment.",
      "That the entire file was read.",
      "That the file was shared externally.",
      "That a human intentionally selected it."
    ],
    "answer": 0,
    "explanation": "An open handle is useful context but should not be overstated."
  },
  {
    "question": "What can a fictional network-flow record most directly support?",
    "choices": [
      "That a recorded source communicated with a recorded destination under the documented conditions.",
      "The full payload content.",
      "Human intent.",
      "External disclosure by itself."
    ],
    "answer": 0,
    "explanation": "Flow evidence shows a network relationship but not complete application meaning or intent."
  },
  {
    "question": "What is independent corroboration?",
    "choices": [
      "Support from a genuinely different fictional source with its own event-generation and collection path.",
      "A screenshot and CSV from the same dashboard.",
      "Two copies of the same export.",
      "A summary that repeats one log record."
    ],
    "answer": 0,
    "explanation": "Independent evidence should not share the same underlying source and failure mode."
  },
  {
    "question": "How should a fictional application record with separate event and receipt times be placed in a timeline?",
    "choices": [
      "Use the event time for the activity while preserving the receipt time and delay as source-health context.",
      "Use only the receipt time.",
      "Use whichever value matches the preferred sequence.",
      "Delete the delayed record."
    ],
    "answer": 0,
    "explanation": "Event time and receipt time answer different questions and both should remain visible."
  },
  {
    "question": "When can fictional negative evidence be useful?",
    "choices": [
      "When source health, coverage, retention, ownership, account, platform, and time boundaries are verified.",
      "Whenever one dashboard shows no event.",
      "Whenever no record is immediately visible.",
      "Only when every system is offline."
    ],
    "answer": 0,
    "explanation": "Absence is meaningful only within a verified evidence boundary."
  },
  {
    "question": "Why should earlier fictional timeline versions be preserved?",
    "choices": [
      "They show how new evidence, corrections, and source-health changes affected events, findings, and confidence.",
      "They are only decorative.",
      "They should be deleted to prevent questions.",
      "They replace the evidence register."
    ],
    "answer": 0,
    "explanation": "Version history makes the analytical process transparent and reviewable."
  },
  {
    "question": "What is the strongest structure for a fictional forensic finding?",
    "choices": [
      "Finding statement, evidence support, conflicts, alternatives, confidence, limitation, impact boundary, and decision effect.",
      "A conclusion without evidence identifiers.",
      "A screenshot and severity label.",
      "A list of raw log lines without interpretation."
    ],
    "answer": 0,
    "explanation": "A defensible finding preserves both evidence support and uncertainty."
  },
  {
    "question": "How should the same fictional finding be communicated to technical and leadership audiences?",
    "choices": [
      "Keep the underlying facts, confidence, and limits consistent while changing detail level, terminology, evidence depth, and action focus.",
      "Use a stronger conclusion for leadership.",
      "Remove every limitation from the leadership version.",
      "Change the facts to make the message shorter."
    ],
    "answer": 0,
    "explanation": "Audience tailoring should never change the underlying case truth."
  },
  {
    "question": "Which final conclusion is best supported by the fictional Northbridge evidence?",
    "choices": [
      "The approved export workflow using an outdated configuration created a duplicate path containing the same five supplied files; no supported external disclosure appears within verified coverage, and the corrected workflow passed validation.",
      "A human intentionally stole the files.",
      "The internal network connection proves data exfiltration.",
      "The duplicate folder name proves malicious activity."
    ],
    "answer": 0,
    "explanation": "The strongest conclusion integrates the supported mechanism, bounded impact, corrective action, and validation without adding unsupported intent."
  }
];

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
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

export default function DigitalForensicsBasicsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.11),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-200">
              Module I12
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              25-Question Module Test
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12 Digital Forensics Basics Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of fictional authorization,
            collection planning, evidence integrity, hashes, chain of custody,
            artifact analysis, volatile evidence, network and cloud
            correlation, timeline reasoning, findings, reporting, privacy, and
            portfolio safety.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed I12.1 through I12.8.",
            "I will answer every question before revealing the explanation.",
            "I understand that all organizations, evidence, systems, identities, files, logs, routes, and events in this test are fictional.",
            "I will use only defensive, authorized, privacy-aware reasoning.",
            "I will review every missed question and update my fictional portfolio package before marking the module complete.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Assessment Rules
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Complete All 25 Questions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
              <p className="font-black text-blue-100">Answer first</p>
              <p className="mt-2 text-sm leading-6">
                Select the strongest answer before opening the explanation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="font-black text-emerald-100">Target score</p>
              <p className="mt-2 text-sm leading-6">
                Score at least 20 out of 25 before marking Module I12 complete.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="font-black text-yellow-100">Use bounded reasoning</p>
              <p className="mt-2 text-sm leading-6">
                Prefer answers that preserve authorization, evidence limits,
                alternatives, confidence, privacy, and source health.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="font-black text-purple-100">Review missed concepts</p>
              <p className="mt-2 text-sm leading-6">
                Return to the matching lesson and revise the related fictional
                portfolio artifact after every missed question.
              </p>
            </div>
          </div>
        </section>

        <MiniQuiz
          title="I12 Module Test: Digital Forensics Basics"
          questions={questions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Score Guide
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Interpret Your Module-Test Result
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xl font-black text-emerald-100">23–25</p>
              <p className="mt-2 text-sm leading-6">
                Excellent mastery. Your evidence reasoning, limits, and
                communication are consistently professional.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-xl font-black text-cyan-100">20–22</p>
              <p className="mt-2 text-sm leading-6">
                Module standard achieved. Review missed questions and improve
                the matching portfolio sections.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xl font-black text-yellow-100">16–19</p>
              <p className="mt-2 text-sm leading-6">
                Developing mastery. Revisit the weakest lessons and retake the
                test after revising your case package.
              </p>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xl font-black text-red-100">0–15</p>
              <p className="mt-2 text-sm leading-6">
                Rebuild the foundations. Review I12.1 through I12.8 in order
                before attempting the module test again.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Mastery Review
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Connect Missed Questions to the Correct Lesson
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "I12.1",
                "Authorization, ethics, privacy, scope, minimization, and stop conditions",
              ],
              [
                "I12.2",
                "Evidence sources, collection priority, volatility, source health, and alternate evidence",
              ],
              [
                "I12.3",
                "Integrity, hashes, originals, working copies, chain of custody, and lineage",
              ],
              [
                "I12.4",
                "Files, metadata, timestamps, hashes, artifacts, observations, and findings",
              ],
              [
                "I12.5",
                "Processes, sessions, parent-child relationships, handles, connections, and snapshot limits",
              ],
              [
                "I12.6",
                "Network and cloud evidence, timestamp normalization, source independence, and versioned timelines",
              ],
              [
                "I12.7",
                "Findings, confidence, limitations, exhibits, audience communication, and corrections",
              ],
              [
                "I12.8",
                "Integrated case reasoning, final conclusions, reporting package, and portfolio safety",
              ],
            ].map(([lesson, focus]) => (
              <div
                key={lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="font-black text-cyan-100">{lesson}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Module I12 Mastery Checklist"
          items={[
            "I can define a neutral fictional forensic question with authorization, owners, scope, privacy, approved sources, methods, and stop conditions.",
            "I can create a collection plan using relevance, volatility, source health, integrity risk, privacy, authority, operational impact, and alternate evidence.",
            "I can preserve originals and use separately identified, verified working copies.",
            "I can explain exactly what matching and mismatching fictional hashes can and cannot support.",
            "I can maintain chain-of-custody, access, transfer, storage, integrity, exception, and source-lineage records.",
            "I can analyze fictional paths, names, hashes, timestamps, ownership, recent items, previews, processes, sessions, handles, and connections within their evidence limits.",
            "I can preserve original and normalized times, event and receipt times, source delay, precision, conflicts, and timeline versions.",
            "I can distinguish genuinely independent evidence from duplicate dashboards, screenshots, exports, and summaries.",
            "I can write findings with support, alternatives, confidence, limitations, impact boundaries, owner decisions, and follow-up needs.",
            "I can communicate one consistent fictional case truth to technical, incident, leadership, privacy, support, owner, custody, and portfolio audiences.",
            "I can use bounded no-supported-evidence language when conclusions depend on verified coverage and source health.",
            "I will never use or expose real devices, accounts, files, logs, routes, credentials, contacts, owners, systems, or private records in these labs.",
          ]}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Check"
          prompt="Review your fictional Northbridge Digital Forensics Basics Case Package. Confirm that it includes an authorization brief, collection plan, evidence register, chain of custody, integrity records, artifact worksheet, process and session map, source-health register, timeline versions 1 and 2, findings matrix, technical report, executive summary, privacy statement, support note, technical-owner brief, evidence exhibits, reviewer checklist, correction record, communication log, lessons learned, closure criteria, and portfolio-safety statement."
          tips={[
            "Remove or replace anything that resembles real organizational evidence.",
            "Confirm that every finding links to exact fictional parent evidence.",
            "Preserve alternatives, confidence, limitations, and timeline corrections.",
            "Make the final package understandable to both technical and nontechnical reviewers.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Digital forensics begins with authorization, a neutral question, a defined evidence boundary, privacy protection, and stop conditions.",
            "Evidence integrity depends on identity, preservation, verification, custody, access, source lineage, exceptions, and review.",
            "Files, metadata, processes, sessions, network records, cloud records, and timestamps must be interpreted within their real evidence limits.",
            "Independent corroboration strengthens findings, while duplicate views should not be counted as separate sources.",
            "Timeline reasoning preserves original values, normalization methods, delay, precision, conflicts, and every version.",
            "Findings should separate observations, alternatives, confidence, limitations, impact boundaries, decisions, and follow-up needs.",
            "Different audiences may receive different detail, but the facts, confidence, and limitations must remain consistent.",
            "Portfolio artifacts should use fully fictional evidence and never expose real systems, people, files, logs, routes, credentials, or private records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Review or Return to the Intermediate Track
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