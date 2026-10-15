import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const logFields = [
  {
    field: "Time",
    guidance:
      "Record when the finding was observed and when the change was made. Use one consistent time format throughout the round.",
  },
  {
    field: "System",
    guidance:
      "Identify the exact workstation, server, Linux host, switch, router, or forensic case involved.",
  },
  {
    field: "Owner",
    guidance:
      "Record which teammate investigated or changed the item so follow-up questions have a clear owner.",
  },
  {
    field: "Finding",
    guidance:
      "Describe the observed issue precisely instead of writing vague notes like 'fixed security problem.'",
  },
  {
    field: "Evidence",
    guidance:
      "Include commands, logs, paths, event IDs, usernames, PIDs, ports, ACL entries, hashes, or screenshots that support the finding.",
  },
  {
    field: "Change",
    guidance:
      "Record the exact command, setting, group membership, service state, ACL edit, or file change that was made.",
  },
  {
    field: "Reason",
    guidance:
      "Explain why the change was justified by the mission and evidence.",
  },
  {
    field: "Verification",
    guidance:
      "Record the exact check that confirmed the remediation worked and required functionality still works.",
  },
  {
    field: "Follow-up",
    guidance:
      "Record unresolved questions, dependencies, or items that another teammate needs to revisit.",
  },
];

const evidenceCategories = [
  {
    title: "Identity evidence",
    examples: [
      "Approved-user roster",
      "Administrators / sudo membership",
      "Account-change events",
      "Successful and failed logons",
    ],
  },
  {
    title: "Service evidence",
    examples: [
      "Service name and state",
      "Executable path",
      "Start account",
      "Listener / port",
    ],
  },
  {
    title: "Process evidence",
    examples: [
      "PID and parent PID",
      "Executable path",
      "Command line",
      "Network connection",
    ],
  },
  {
    title: "Persistence evidence",
    examples: [
      "Scheduled task",
      "Cron job",
      "Systemd timer",
      "Run key / startup item",
    ],
  },
  {
    title: "Network evidence",
    examples: [
      "Listening ports",
      "Remote endpoints",
      "VLAN / trunk state",
      "ACL counters",
    ],
  },
  {
    title: "File evidence",
    examples: [
      "Full path",
      "SHA-256 hash",
      "Size",
      "Timestamps",
    ],
  },
];

const observationExamples = [
  {
    weak: "Bad admin account removed.",
    strong:
      "User 'tempadmin' was present in local Administrators but absent from the approved roster. Security log showed recent privileged logon. Removed tempadmin from Administrators and verified approved admin access remained functional.",
  },
  {
    weak: "Suspicious service disabled.",
    strong:
      "Service 'UpdaterHelper' ran from C:\\Temp\\updater.exe under LocalSystem and listened on TCP 8089. Recorded path, PID, service account, listener, and install event before disabling the service.",
  },
  {
    weak: "Fixed trunk.",
    strong:
      "VLAN 20 was required on the SW1-R1 trunk but was missing from the allowed VLAN list. Added VLAN 20 only and verified student VLAN reachability afterward.",
  },
  {
    weak: "Linux user fixed.",
    strong:
      "User alex was approved but had unexpected NOPASSWD sudo. Removed only the broad sudoers rule and verified required nonprivileged access still worked.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Observe",
    description:
      "Record the current state before changing it. Capture commands, output, paths, accounts, PIDs, ports, or configuration that prove the finding.",
  },
  {
    step: "02",
    title: "Classify",
    description:
      "Decide whether the item is required, suspicious, unnecessary, broken, or unresolved.",
  },
  {
    step: "03",
    title: "Preserve",
    description:
      "Save the evidence that could disappear after remediation, especially logs, hashes, task details, service state, and network context.",
  },
  {
    step: "04",
    title: "Change",
    description:
      "Make the smallest justified correction instead of broad cleanup.",
  },
  {
    step: "05",
    title: "Verify",
    description:
      "Repeat the relevant check and confirm the mission-required function still works.",
  },
  {
    step: "06",
    title: "Record",
    description:
      "Complete the log entry so another teammate can understand exactly what happened.",
  },
];

const quickCommands = [
  {
    platform: "Windows",
    commands: [
      "Get-Date",
      "hostname",
      "whoami",
      "Get-FileHash <Path> -Algorithm SHA256",
    ],
  },
  {
    platform: "Linux",
    commands: [
      "date",
      "hostname",
      "whoami",
      "sha256sum <path>",
    ],
  },
  {
    platform: "Cisco",
    commands: [
      "show clock",
      "show running-config",
      "show logging",
      "show archive log config all",
    ],
  },
];

const handoffFields = [
  "What was found",
  "What evidence supports it",
  "What was changed",
  "What still needs attention",
  "What must not be broken",
  "What should be verified next",
];

const commonMistakes = [
  "Writing only the final fix and not the original evidence.",
  "Recording 'fixed' without the exact command or setting changed.",
  "Not writing down which teammate made the change.",
  "Failing to record whether required functionality still worked afterward.",
  "Keeping important evidence only in terminal scrollback.",
  "Using vague labels like suspicious, bad, weird, or hacked without describing the actual observation.",
  "Forgetting to record time and system name.",
  "Deleting or disabling something before capturing the evidence needed to explain it.",
];

const finalChecklist = [
  "A shared change log was created before major remediation began.",
  "Each high-impact finding includes system, owner, evidence, and time.",
  "Every major change includes the exact command or setting changed.",
  "The reason for each major change is tied to mission requirements or evidence.",
  "Verification results are recorded after remediation.",
  "Important hashes, paths, event IDs, PIDs, ports, and configuration details are preserved.",
  "Observation and interpretation are clearly separated.",
  "Unresolved findings are marked as unresolved instead of guessed.",
  "Platform handoffs include status, open questions, and next verification steps.",
  "The team can reconstruct what changed during the round from the log alone.",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function EvidenceChangeLogChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/services-remote-access-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/mid-round-verification-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 09 &middot; Documentation
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Evidence &amp; Change Log Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Record original state, evidence, exact remediation, reasoning,
                verification, and unresolved follow-up so the entire team can
                understand what changed during the round.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A strong change log reduces duplicate work, protects evidence,
                improves handoffs, and makes it easier to detect accidental
                breakage later.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Start</span>
                  <span className="font-bold text-white">Before remediation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Record</span>
                  <span className="font-bold text-white">Evidence + Change</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Always include</span>
                  <span className="font-bold text-white">Verification</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Use for</span>
                  <span className="font-bold text-white">Team handoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Documentation rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A change is not complete until the reason and verification are recorded
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The log should make sense to someone who was not watching your
            terminal. Record enough context that another teammate can continue
            the investigation without repeating the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Core log fields"
            title="Use the same structure for every important change"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {logFields.map((item, index) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Required field
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.guidance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence categories"
            title="Capture the details that make a finding reproducible"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {evidenceCategories.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <div className="mt-4 grid gap-2">
                  {item.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Documentation workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Observe, preserve, change, verify, record
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Strong notes"
            title="Replace vague statements with evidence-supported entries"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {observationExamples.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Too vague
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Better
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.strong}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Quick capture"
            title="Useful commands for evidence context"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {quickCommands.map((item) => (
              <div
                key={item.platform}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.platform}</h3>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
                      {command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Team handoff"
            title="Every handoff should answer six questions"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {handoffFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common documentation mistakes
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid notes that cannot be verified later
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {commonMistakes.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Evidence &amp; Change Log final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish with a record the whole team can trust
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
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/services-remote-access-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/mid-round-verification-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
