import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "NIST SP 800-86",
    href: "https://csrc.nist.gov/pubs/sp/800/86/final",
    description:
      "NIST guidance for integrating computer and network forensic techniques into incident response and troubleshooting.",
  },
  {
    title: "NIST SP 800-61 Rev. 3",
    href: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
    description:
      "Current NIST incident-response recommendations aligned with the Cybersecurity Framework 2.0.",
  },
  {
    title: "Microsoft Windows Event Log",
    href: "https://learn.microsoft.com/en-us/windows/win32/wes/windows-event-log",
    description:
      "Microsoft reference for the Windows Event Log infrastructure used to record and examine operating-system and application events.",
  },
  {
    title: "Autopsy User Documentation",
    href: "https://www.sleuthkit.org/autopsy/docs/user-docs/4.23.0/",
    description:
      "Official documentation for the Autopsy digital-forensics platform and its analysis features.",
  },
];

const evidencePrinciples = [
  {
    title: "Preserve",
    description:
      "Record useful state before making changes so the original evidence is not silently lost.",
  },
  {
    title: "Verify Integrity",
    description:
      "Hashes can help confirm that a copied file or evidence set has not changed unexpectedly.",
  },
  {
    title: "Keep Context",
    description:
      "A filename, event, timestamp, or process is much more useful when tied to its system, user, path, and surrounding activity.",
  },
  {
    title: "Build a Timeline",
    description:
      "Correlate timestamps from multiple sources to understand sequence rather than examining isolated artifacts.",
  },
  {
    title: "Separate Fact from Interpretation",
    description:
      "Document what the evidence directly shows separately from what you think it may mean.",
  },
  {
    title: "Report Reproducibly",
    description:
      "Record enough detail that another teammate can locate and verify the same evidence.",
  },
];

const dataSources = [
  {
    title: "Files",
    items: [
      "File names and paths",
      "Hashes",
      "Size and type",
      "Ownership and permissions",
      "Created, modified, and accessed times where available",
      "Archives and downloaded content",
    ],
  },
  {
    title: "Operating System",
    items: [
      "Users and groups",
      "Processes",
      "Services",
      "Startup locations",
      "Scheduled tasks",
      "Installed software",
    ],
  },
  {
    title: "Logs",
    items: [
      "Authentication events",
      "Account changes",
      "Service activity",
      "System errors",
      "Application logs",
      "Firewall and security events",
    ],
  },
  {
    title: "Network",
    items: [
      "Listening sockets",
      "Established connections",
      "Remote endpoints",
      "DNS activity",
      "Packet captures",
      "Firewall state",
    ],
  },
  {
    title: "Applications",
    items: [
      "Browser history",
      "Download history",
      "Application-specific logs",
      "Configuration files",
      "Recent files",
      "Application startup behavior",
    ],
  },
  {
    title: "Persistence",
    items: [
      "Windows startup locations",
      "Scheduled tasks",
      "Services",
      "Linux cron jobs",
      "systemd units",
      "Shell startup files",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Define the question",
    description:
      "State what you are trying to determine before collecting large amounts of unrelated evidence.",
  },
  {
    number: "02",
    title: "Identify relevant sources",
    description:
      "Choose files, logs, processes, network activity, accounts, or application artifacts that can answer the question.",
  },
  {
    number: "03",
    title: "Preserve useful state",
    description:
      "Capture important evidence before making a change that could overwrite, delete, restart, or alter it.",
  },
  {
    number: "04",
    title: "Examine",
    description:
      "Extract relevant details such as timestamps, users, paths, event IDs, hashes, processes, and network endpoints.",
  },
  {
    number: "05",
    title: "Correlate",
    description:
      "Compare independent data sources and build a sequence of related activity.",
  },
  {
    number: "06",
    title: "Analyze",
    description:
      "Determine what the combined evidence supports without overstating certainty.",
  },
  {
    number: "07",
    title: "Document",
    description:
      "Record the finding, evidence location, interpretation, action taken, and verification result.",
  },
];

const hashReferences = [
  {
    platform: "Windows PowerShell",
    command: "Get-FileHash .\\evidence.bin -Algorithm SHA256",
    purpose:
      "Calculate a SHA-256 hash for a file using PowerShell.",
  },
  {
    platform: "Linux",
    command: "sha256sum evidence.bin",
    purpose:
      "Calculate a SHA-256 hash for a file using a common Linux utility.",
  },
];

const timelineQuestions = [
  "Which timestamp occurred first?",
  "Are the systems using the same timezone?",
  "Could one system clock be inaccurate?",
  "What happened immediately before the event?",
  "What happened immediately after the event?",
  "Which user was active at that time?",
  "Which process or service was running?",
  "Was a network connection created near the same time?",
  "Did a file appear or change near the same time?",
  "Do two independent evidence sources support the same sequence?",
];

const windowsSources = [
  ["Security", "Authentication, account, group, privilege, and audit events."],
  ["System", "Operating-system, driver, service, and system-component events."],
  ["Application", "Events written by applications and software components."],
  ["Task Scheduler", "Scheduled-task execution and operational activity."],
  ["PowerShell", "PowerShell operational and scripting-related events when logging is available."],
  ["Defender", "Microsoft Defender operational and detection-related evidence when present."],
];

const linuxSources = [
  ["/var/log/", "Traditional operating-system and service logs."],
  ["journalctl", "Systemd journal containing system and service events."],
  ["auth.log", "Authentication and sudo-related evidence on many Ubuntu systems."],
  ["last / lastlog", "Login-history information where available."],
  ["systemctl", "Service state and unit information."],
  ["cron locations", "Scheduled commands and recurring jobs."],
];

const evidenceRecord = [
  ["System", "Which computer, VM, or device produced the evidence?"],
  ["Time", "When was the event observed? Include timezone when relevant."],
  ["Source", "Which file, log, utility, or artifact contains the evidence?"],
  ["Location", "What exact path, event log, record, or object should another analyst open?"],
  ["Observation", "What does the evidence directly show?"],
  ["Correlation", "Which other evidence supports or contradicts the observation?"],
  ["Interpretation", "What conclusion is reasonably supported?"],
  ["Action", "What change, if any, was made because of the finding?"],
  ["Verification", "How was the result checked afterward?"],
];

const competitionCases = [
  {
    title: "A suspicious account appears",
    steps: [
      "Confirm whether the scenario authorizes the account.",
      "Record account state, groups, privilege, and recent relevant activity.",
      "Review authentication and account-change evidence.",
      "Determine whether another service depends on the identity.",
      "Make only the justified change.",
      "Verify required access still works.",
    ],
  },
  {
    title: "An unfamiliar file appears",
    steps: [
      "Record its path, owner, size, type, and timestamps.",
      "Calculate a hash if useful.",
      "Determine which process or user may have created it.",
      "Check nearby log and network activity.",
      "Do not delete the file until useful evidence has been preserved.",
      "Document the reasoning behind any action.",
    ],
  },
  {
    title: "A service may have been added",
    steps: [
      "Record service name, executable path, account, and startup configuration.",
      "Check service-install and system logs.",
      "Inspect the executable and related files.",
      "Check listening sockets and network connections.",
      "Determine whether the service is required by the mission.",
      "Verify system function after any authorized change.",
    ],
  },
  {
    title: "A timeline does not make sense",
    steps: [
      "Check timezone assumptions.",
      "Compare timestamps from multiple sources.",
      "Check whether one clock may be offset.",
      "Distinguish creation, modification, access, and log timestamps.",
      "Use sequence and correlation instead of relying on one time field.",
    ],
  },
];

const weakVsBetter = [
  {
    weak: "Delete a suspicious file as soon as you find it.",
    better:
      "Record its metadata, location, hash, related processes, and surrounding evidence before making a justified change.",
  },
  {
    weak: "One log entry proves exactly what happened.",
    better:
      "Correlate logs with files, users, processes, services, and network evidence.",
  },
  {
    weak: "Every timestamp represents the same kind of event.",
    better:
      "Identify what each timestamp means and account for timezone and clock differences.",
  },
  {
    weak: "A hash tells you whether a file is malicious.",
    better:
      "A hash primarily identifies file content and helps verify integrity; interpretation still requires context.",
  },
  {
    weak: "Absence of a log entry proves an event did not occur.",
    better:
      "Consider logging configuration, retention, deletion, collection scope, and alternate evidence sources.",
  },
  {
    weak: "Document only the final conclusion.",
    better:
      "Document the source evidence, reasoning, changes, and verification so another teammate can reproduce the finding.",
  },
];

const finalChecklist = [
  "Define the forensic question before collecting unrelated data.",
  "Preserve useful state before making changes.",
  "Record exact evidence locations.",
  "Use hashes when file-integrity verification is useful.",
  "Keep timestamps tied to timezone and system context.",
  "Correlate files, logs, processes, services, users, and network activity.",
  "Separate direct observations from interpretation.",
  "Use Windows Event Logs and Linux logs as evidence sources, not automatic conclusions.",
  "Review persistence mechanisms carefully.",
  "Document changes made during investigation.",
  "Verify system functionality after remediation.",
  "State only what the available evidence actually supports.",
];

export default function ForensicsEvidenceReferencesResourcePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources/wireshark-packet-analysis"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/nist-cisa-security-standards" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 09
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Forensics &amp; Evidence References
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use forensic references to preserve evidence, examine system
            artifacts, correlate multiple data sources, reconstruct timelines,
            and document conclusions that another teammate can verify.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            In CyberPatriot practice, the goal is not to perform a full legal
            forensic investigation. The goal is to use disciplined evidence
            handling so security decisions are supported by observable facts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Evidence rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve before you change
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Restarting a service, deleting a file, disabling an account, or
            changing configuration can alter useful evidence. Record what
            matters before remediation whenever practical.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Official reference library
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {officialResources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/40"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <p className="mt-4 text-sm font-bold text-cyan-300">
                Open reference &rarr;
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Evidence principles
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {evidencePrinciples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Common evidence sources
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dataSources.map((source) => (
            <div
              key={source.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">{source.title}</h3>

              <div className="mt-4 grid gap-2">
                {source.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Evidence workflow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.number}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          File integrity references
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {hashReferences.map((item) => (
            <div
              key={item.platform}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">
                {item.platform}
              </h3>

              <code className="mt-4 block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-cyan-300">
                {item.command}
              </code>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.purpose}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-500">
          A matching hash can help establish that two files contain the same
          data. A hash by itself does not determine whether the file is safe,
          approved, or malicious.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Timeline questions
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {timelineQuestions.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm leading-6 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <h2 className="text-2xl font-black text-white">
              Windows evidence sources
            </h2>

            <div className="mt-6 grid gap-3">
              {windowsSources.map(([source, detail]) => (
                <div
                  key={source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="font-black text-cyan-300">{source}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <h2 className="text-2xl font-black text-white">
              Linux evidence sources
            </h2>

            <div className="mt-6 grid gap-3">
              {linuxSources.map(([source, detail]) => (
                <div
                  key={source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="font-black text-cyan-300">{source}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Evidence record template
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {evidenceRecord.map(([field, question]) => (
            <div
              key={field}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="font-black text-cyan-300">{field}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {question}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Competition evidence situations
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {competitionCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">
                {item.title}
              </h3>

              <div className="mt-4 grid gap-2">
                {item.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                  >
                    <span className="font-black text-cyan-300">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-slate-300">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Weak interpretation vs better interpretation
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak interpretation
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better interpretation
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.better}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Forensics resource checklist
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources/wireshark-packet-analysis"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/nist-cisa-security-standards" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}