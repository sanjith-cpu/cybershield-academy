import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/digital-forensics-basics`;

const workflow = [
  [
    "01",
    "Define the authorized question",
    "Set the fictional case objective, approved scope, privacy boundary, responsible owner, evidence need, decision requirement, and stop conditions."
  ],
  [
    "02",
    "Identify and preserve evidence",
    "Locate supplied fictional file, disk, identity, process, memory, network, cloud, application, support, and business records without changing their meaning."
  ],
  [
    "03",
    "Verify integrity and lineage",
    "Record fictional identifiers, source, collection time, owner, handling history, integrity checks, derived copies, limitations, and chain-of-custody transitions."
  ],
  [
    "04",
    "Analyze artifacts",
    "Examine fictional metadata, file activity, process relationships, sessions, connections, cloud events, and alternate explanations."
  ],
  [
    "05",
    "Correlate and test",
    "Compare independent fictional sources, normalize timestamps, document source delay and conflicts, challenge assumptions, and assign confidence."
  ],
  [
    "06",
    "Report and preserve",
    "Create fictional findings, exhibits, limitations, actions, owner decisions, reviewer notes, and a portfolio-safe final case record."
  ]
];
const objectives = [
  "Explain the purpose, limits, ethics, authorization, privacy, and defensive role of digital forensics.",
  "Plan fictional evidence collection using case questions, volatility, relevance, accessibility, ownership, and preservation needs.",
  "Maintain fictional evidence integrity, chain of custody, source lineage, working copies, handling history, and documented limitations.",
  "Analyze fictional files, metadata, processes, volatile-evidence concepts, network records, cloud activity, and timelines without overstating conclusions.",
  "Correlate fictional evidence across independent sources while accounting for source health, delay, clock differences, duplication, conflicts, and gaps.",
  "Create a professional fictional forensic report with facts, supported findings, alternatives, confidence, limitations, exhibits, actions, and portfolio-safe communication."
];
const lessons = [
  [
    "I12.1",
    "Digital Forensics Purpose, Ethics, and Authorization",
    "digital-forensics-purpose-ethics-and-authorization",
    "Understand what digital forensics can and cannot prove, why authorization and privacy limits matter, and how case questions guide every collection and analysis decision.",
    "Build a fictional authorization brief with objective, scope, owner, privacy limits, excluded actions, decision needs, and stop conditions."
  ],
  [
    "I12.2",
    "Evidence Sources and Collection Planning",
    "evidence-sources-and-collection-planning",
    "Identify fictional disk, file, account, application, endpoint, memory, process, network, cloud, backup, support, and business evidence and prioritize collection safely.",
    "Create a fictional collection plan covering source, reason, owner, order, preservation, dependency, limitation, alternate source, and completion evidence."
  ],
  [
    "I12.3",
    "Evidence Integrity, Hashes, and Chain of Custody",
    "evidence-integrity-hashes-and-chain-of-custody",
    "Use fictional integrity checks, evidence identifiers, originals, working copies, source lineage, handling history, transfer records, and chain-of-custody documentation.",
    "Complete a fictional evidence register and handling trail for originals, preserved images, exports, timelines, screenshots, notes, and reviewed copies."
  ],
  [
    "I12.4",
    "File, Metadata, and Artifact Analysis",
    "file-metadata-and-artifact-analysis",
    "Interpret fictional filenames, paths, extensions, timestamps, ownership, metadata, document properties, shortcuts, caches, recent-item records, and deletion indicators.",
    "Analyze a fictional artifact set and separate observations, supported findings, alternatives, confidence, gaps, and follow-up evidence needs."
  ],
  [
    "I12.5",
    "Memory, Process, and Volatile Evidence Concepts",
    "memory-process-and-volatile-evidence-concepts",
    "Study defensive concepts for fictional running processes, parent-child relationships, sessions, connections, loaded modules, temporary data, volatility, and collection order.",
    "Review a fictional volatile-evidence snapshot and build a process-and-session map without executing commands or inspecting a real device."
  ],
  [
    "I12.6",
    "Network, Cloud, and Timeline Correlation",
    "network-cloud-and-timeline-correlation",
    "Correlate fictional authentication, network, DNS, proxy, storage, cloud, deployment, support, and business events while preserving source health and uncertainty.",
    "Build a fictional normalized timeline, identify conflicts and gaps, assign confidence, and explain which conclusions remain supported."
  ],
  [
    "I12.7",
    "Reporting, Findings, and Case Communication",
    "reporting-findings-and-case-communication",
    "Write fictional forensic findings that separate evidence, observation, interpretation, alternatives, confidence, limitation, impact boundary, owner action, and reviewer needs.",
    "Create a fictional technical report, leadership summary, exhibit list, limitation statement, correction record, and portfolio-safe case summary."
  ],
  [
    "I12.8",
    "Digital Forensics Basics Lab",
    "digital-forensics-basics-lab",
    "Integrate authorization, collection, preservation, integrity, chain of custody, artifact analysis, volatile evidence, correlation, timeline building, reporting, and review.",
    "Complete the fictional Northbridge Research Archive case with an evidence register, collection plan, artifact analysis, process map, timeline, findings matrix, and final report."
  ]
];
const evidencePreview = [
  [
    "E-01",
    "Support report",
    "A fictional researcher reports that an approved archive export created an unexpected duplicate folder.",
    "Provides the original observation but does not prove how the duplicate was created."
  ],
  [
    "E-02",
    "File metadata",
    "Five duplicate files have matching content hashes but different path and creation metadata.",
    "Supports duplication of known content while preserving uncertainty about the process."
  ],
  [
    "E-03",
    "Identity record",
    "An approved service identity accessed the archive during the documented export window.",
    "Connects an authorized workflow to the time window without proving every file operation."
  ],
  [
    "E-04",
    "Process snapshot",
    "A scheduled export worker launched a child copy process using an outdated configuration reference.",
    "Supports a technical explanation that must be correlated with other records."
  ],
  [
    "E-05",
    "Cloud audit",
    "No external sharing, public-link creation, or unrelated-account download appears in the supplied window.",
    "Narrows supported impact within source-health and retention boundaries."
  ],
  [
    "E-06",
    "Source health",
    "Application audit delivery was delayed by twelve minutes while identity, storage, cloud, and support records remained current.",
    "Requires a visible limitation and later timeline revision."
  ]
];

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Intermediate Track
      </Link>

      <Link
        href={`${modulePath}/digital-forensics-purpose-ethics-and-authorization`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Start I12.1
      </Link>
    </div>
  );
}

export default function DigitalForensicsBasicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.11),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-200">
              Module I12
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              Defensive and Fictional
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I12 Digital Forensics Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how authorized defenders preserve, organize, analyze,
            correlate, explain, and report fictional digital evidence. This
            module focuses on evidence integrity, chain of custody, source
            lineage, file and metadata artifacts, volatile-evidence concepts,
            timeline reasoning, professional reporting, privacy, and
            portfolio-safe communication.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Module Snapshot
            </p>

            <h2 className="mt-2 text-2xl font-black text-white">
              Build Trustworthy Findings without Changing or Overstating the Evidence
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Digital forensics is not about searching everything or proving a
              dramatic story. It is a disciplined, authorized process for
              answering defined questions with preserved evidence, documented
              methods, reproducible analysis, visible limitations, and
              professional reporting.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                ["8 lessons", "Concepts, guided analysis, and one integrated lab"],
                ["1 module test", "Twenty-five questions with hidden answers"],
                ["1 portfolio package", "A fictional forensic case file and report"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4"
                >
                  <p className="font-black text-cyan-100">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-cyan-50">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety and Authorization Boundary
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Analyze Only Supplied Fictional Evidence
            </h2>

            <p className="mt-4 leading-8">
              Do not access, collect, image, inspect, search, alter, recover,
              decrypt, connect to, or analyze any real device, account, file,
              system, network, cloud service, user, log, credential, contact,
              or private record.
            </p>
          </aside>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Main Question
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            How Can a Defender Turn Digital Records into Trustworthy, Reproducible Findings?
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-300">
            A professional fictional case connects authorization, collection,
            preservation, integrity, source health, artifact interpretation,
            timeline reasoning, competing explanations, confidence, reporting,
            privacy, review, and decision support.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Six-Step Workflow
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            The Intermediate Digital Forensics Workflow
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map(([step, title, detail]) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {step}
                  </span>
                  <h3 className="font-black text-cyan-100">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Learning Objectives
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            What You Will Be Able to Do
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Module Lessons
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Eight Lessons from Authorization to Final Reporting
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map(([number, title, slug, focus, lab], index) => (
              <article
                key={number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {number}
                      </span>
                      <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                        Lesson {index + 1} of 8
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-black text-white">{title}</h3>

                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                          Focus
                        </p>
                        <p className="mt-2 text-sm leading-6">{focus}</p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Defensive Lab
                        </p>
                        <p className="mt-2 text-sm leading-6">{lab}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`${modulePath}/${slug}`}
                    className="shrink-0 rounded-xl bg-cyan-400 px-5 py-3 text-center font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Fictional Evidence Preview
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Northbridge Research Archive Case
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-300">
            The integrated lab uses a fictional archive-export case with
            conflicting timestamps, duplicate content, an approved service
            workflow, an outdated configuration reference, delayed application
            records, and no supported external sharing.
          </p>

          <div className="mt-6 grid gap-4">
            {evidencePreview.map(([id, source, record, use]) => (
              <article
                key={id}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.18fr_0.35fr_1fr_1fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">{id}</p>
                <p className="text-sm font-black text-blue-200">{source}</p>
                <p className="text-sm leading-6 text-slate-200">{record}</p>
                <p className="text-sm leading-6 text-slate-400">{use}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <article className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              Portfolio Outcome
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Fictional Digital Forensics Case Package
            </h2>

            <p className="mt-4 leading-8">
              Build a portfolio-safe authorization brief, collection plan,
              evidence register, chain-of-custody record, artifact analysis,
              volatile-evidence map, normalized timeline, findings matrix,
              technical report, leadership summary, limitation statement,
              evidence exhibit list, and reviewer checklist.
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Module Assessment
            </p>

            <h2 className="mt-2 text-2xl font-black">
              I12 Digital Forensics Basics Module Test
            </h2>

            <p className="mt-4 leading-8">
              Complete twenty-five questions covering authorization, collection,
              preservation, integrity, chain of custody, artifacts, volatile
              evidence, network and cloud records, timeline correlation,
              reporting, privacy, and portfolio safety.
            </p>

            <Link
              href={`${modulePath}/module-test`}
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Open Module Test
            </Link>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Module Completion Standard
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Complete, Review, and Verify the Full Evidence Chain
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Complete I12.1 through I12.8 in order.",
              "Answer prompts before revealing explanations.",
              "Use only supplied fictional evidence and authorized defensive reasoning.",
              "Preserve facts, inferences, alternatives, confidence, source health, and limitations.",
              "Complete the fictional evidence register and chain-of-custody records.",
              "Build a reproducible timeline and findings matrix.",
              "Score at least 20 out of 25 on the module test.",
              "Confirm all lesson and module-test routes load from this homepage.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Begin Module I12</h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}