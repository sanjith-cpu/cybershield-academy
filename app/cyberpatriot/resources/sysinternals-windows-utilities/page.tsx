import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "Sysinternals Suite",
    href: "https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite",
    description:
      "Microsoft's bundled collection of Sysinternals troubleshooting and diagnostic utilities.",
  },
  {
    title: "Process Explorer",
    href: "https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer",
    description:
      "Inspect active processes, ownership, handles, loaded DLLs, and parent-child process relationships.",
  },
  {
    title: "Process Monitor",
    href: "https://learn.microsoft.com/en-us/sysinternals/downloads/procmon",
    description:
      "Observe real-time file system, Registry, process, thread, and related operating-system activity.",
  },
  {
    title: "Autoruns",
    href: "https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
    description:
      "Review many Windows auto-start locations including logon entries, services, drivers, scheduled tasks, and other persistence points.",
  },
  {
    title: "TCPView",
    href: "https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview",
    description:
      "Inspect TCP and UDP endpoints, local and remote addresses, connection state, and owning processes.",
  },
  {
    title: "Sigcheck",
    href: "https://learn.microsoft.com/en-us/sysinternals/downloads/sigcheck",
    description:
      "Inspect file versions, hashes, digital signatures, certificate chains, and signing information.",
  },
];

const toolMap = [
  {
    tool: "Process Explorer",
    use: "Processes, ownership, parent-child relationships, handles, and loaded modules.",
    question: "What is running, who owns it, and what is it connected to inside the system?",
  },
  {
    tool: "Process Monitor",
    use: "Detailed activity involving files, Registry keys, processes, and threads.",
    question: "What is this process actually touching or changing right now?",
  },
  {
    tool: "Autoruns",
    use: "Startup and persistence locations across Windows.",
    question: "What is configured to launch automatically and from where?",
  },
  {
    tool: "TCPView",
    use: "Live TCP and UDP endpoints mapped to processes.",
    question: "Which process owns this listener or connection?",
  },
  {
    tool: "Sigcheck",
    use: "Hashes, signatures, publisher information, and file metadata.",
    question: "What can I verify about this executable without assuming it is safe or malicious?",
  },
  {
    tool: "AccessChk",
    use: "Effective permissions on files, Registry keys, services, processes, and other securable objects.",
    question: "Who can access or modify this object?",
  },
  {
    tool: "Handle",
    use: "Command-line view of open file and object handles.",
    question: "Which process has this file or object open?",
  },
  {
    tool: "PsTools",
    use: "Command-line system and process administration utilities.",
    question: "What system or process information can I inspect efficiently from the command line?",
  },
];

const evidenceWorkflow = [
  {
    step: "01",
    title: "Start with a question",
    detail:
      "Choose a tool because you need a specific answer, not because the tool looks powerful.",
  },
  {
    step: "02",
    title: "Capture original state",
    detail:
      "Record the process, path, account, listener, startup entry, signature, or other relevant evidence before remediation.",
  },
  {
    step: "03",
    title: "Correlate",
    detail:
      "Combine Sysinternals evidence with Event Viewer, services, scheduled tasks, firewall state, and mission context.",
  },
  {
    step: "04",
    title: "Decide narrowly",
    detail:
      "Do not treat one suspicious-looking field as proof. Decide only when multiple pieces of evidence support the conclusion.",
  },
  {
    step: "05",
    title: "Verify",
    detail:
      "After an authorized change, confirm the security result and required Windows functionality.",
  },
];

const practicalCases = [
  {
    title: "Unfamiliar process",
    steps: [
      "Use Process Explorer to inspect process ownership and parent-child relationships.",
      "Review executable path and loaded modules when relevant.",
      "Use Sigcheck to inspect signature and hash information.",
      "Check network behavior with TCPView if the process is communicating.",
      "Correlate with services, startup entries, scheduled tasks, and event evidence before acting.",
    ],
  },
  {
    title: "Suspicious startup behavior",
    steps: [
      "Use Autoruns to identify the exact auto-start location.",
      "Record the entry, executable path, publisher, user context, and category.",
      "Check whether the executable is signed and whether the startup behavior is mission-required.",
      "Correlate with scheduled tasks, services, Registry evidence, and related logs.",
      "Change only the confirmed persistence mechanism and verify normal startup behavior afterward.",
    ],
  },
  {
    title: "Unexpected network listener",
    steps: [
      "Use TCPView or built-in networking tools to identify the endpoint and owning process.",
      "Inspect the process with Process Explorer.",
      "Determine whether the listener belongs to a required service.",
      "Review firewall and service configuration.",
      "Do not terminate the process solely because the port is unfamiliar.",
    ],
  },
  {
    title: "File cannot be changed or removed",
    steps: [
      "Use Process Explorer or Handle to identify which process has the file open.",
      "Record the owning process and file path.",
      "Determine whether the process is required or suspicious.",
      "Preserve evidence before stopping anything.",
      "Verify the affected application or service after the authorized action.",
    ],
  },
];

const builtInTools = [
  ["Task Manager", "Quick process, startup, performance, user, and service visibility."],
  ["Event Viewer", "Authentication, service, system, application, and audit evidence."],
  ["Services", "Service state, startup type, account, and description."],
  ["Task Scheduler", "Scheduled task triggers, actions, accounts, and persistence clues."],
  ["Resource Monitor", "CPU, disk, network, and process activity."],
  ["Windows Security", "Defender, firewall, account protection, and security status."],
  ["PowerShell", "Structured inspection of processes, services, users, networking, and event data."],
  ["Command Prompt", "Built-in observation and troubleshooting commands."],
];

const weakVsBetter = [
  {
    weak: "Terminate an unfamiliar process immediately.",
    better:
      "Identify ownership, path, parent process, service relationship, network behavior, and mission purpose first.",
  },
  {
    weak: "Disable every Autoruns entry that is not Microsoft-signed.",
    better:
      "Treat signature information as one clue and classify the entry using path, owner, purpose, and scenario context.",
  },
  {
    weak: "A signed executable must be safe.",
    better:
      "Use signatures to verify publisher information, but still evaluate behavior and context.",
  },
  {
    weak: "A network connection means the process is malicious.",
    better:
      "Map the connection to the owning process and determine whether that communication is expected.",
  },
  {
    weak: "Keep every Sysinternals tool open during the whole round.",
    better:
      "Use the smallest tool that answers the current question so evidence stays understandable.",
  },
  {
    weak: "Use VirusTotal-style reputation as the decision by itself.",
    better:
      "Treat reputation as supplemental evidence and preserve the competition scenario and local system context.",
  },
];

const finalChecklist = [
  "Use official Microsoft Sysinternals documentation as the primary reference.",
  "Choose the tool based on the question you need answered.",
  "Capture original process, file, startup, or network state before remediation.",
  "Use Process Explorer to understand process relationships and ownership.",
  "Use Autoruns to investigate startup and persistence locations.",
  "Use TCPView to map endpoints to processes.",
  "Use Sigcheck to inspect hashes and digital signatures.",
  "Correlate Sysinternals findings with built-in Windows evidence.",
  "Do not assume unsigned means malicious or signed means safe.",
  "Avoid terminating processes before understanding mission impact.",
  "Verify Windows functionality after authorized changes.",
  "Use the competition scenario as the final authority for required services and applications.",
];

export default function SysinternalsWindowsUtilitiesResourcePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Resources
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources/cisco-networking" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Previous Resource
            </Link>
            <Link href="/cyberpatriot/resources/linux-commands-manual-pages" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 06
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sysinternals &amp; Windows Utilities
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use Microsoft Sysinternals and built-in Windows utilities to inspect processes, persistence, file activity, network endpoints, signatures, permissions, services, and evidence without guessing.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            These tools are strongest when they answer a specific question. Collect evidence first, correlate it with mission context, then make the narrowest justified change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Tool rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Use the tool to answer a question, not to hunt randomly</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A process name, unsigned file, listener, or startup entry is only a clue. Use multiple evidence sources before classifying or changing it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Official Microsoft references</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {officialResources.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/40">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              <p className="mt-4 text-sm font-bold text-cyan-300">Open Microsoft reference &rarr;</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Tool map</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {toolMap.map((item) => (
            <div key={item.tool} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-xl font-black text-white">{item.tool}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.use}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-cyan-300">Question</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">Evidence workflow</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {evidenceWorkflow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black text-cyan-300">{item.step}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Using the tools in competition practice</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {practicalCases.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 grid gap-2">
                {item.steps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="font-black text-cyan-300">{index + 1}</span>
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Built-in Windows utilities still matter</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {builtInTools.map(([tool, purpose]) => (
            <div key={tool} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-cyan-300">{tool}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Weak habit vs better habit</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak habit</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better habit</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">Sysinternals resource checklist</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-emerald-200">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Resources</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources/cisco-networking" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Resource</Link>
            <Link href="/cyberpatriot/resources/linux-commands-manual-pages" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
