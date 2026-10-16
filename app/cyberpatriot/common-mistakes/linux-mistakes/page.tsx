import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Using recursive chmod or chown without scoping the target",
    what:
      "A team may use recursive permission or ownership changes to fix one suspicious file or directory quickly.",
    consequence:
      "Applications, services, user access, and system behavior can break across an entire directory tree.",
    replacement:
      "Inspect the exact path, expected owner, group, mode, inheritance behavior, and affected application before making the smallest necessary change.",
  },
  {
    title: "Editing sudoers directly without validation",
    what:
      "Privilege rules may be changed quickly in /etc/sudoers or /etc/sudoers.d without syntax validation.",
    consequence:
      "A syntax error can break sudo access and make recovery difficult.",
    replacement:
      "Use visudo or an equivalent validation step, change only the justified rule, and verify approved privilege afterward.",
  },
  {
    title: "Disabling SSH automatically",
    what:
      "SSH may be turned off because remote access is seen as risky.",
    consequence:
      "If SSH is required by the mission, approved administration can be lost.",
    replacement:
      "Confirm whether SSH is required, then restrict users, authentication methods, listener scope, and firewall exposure instead of disabling blindly.",
  },
  {
    title: "Killing unknown processes before collecting evidence",
    what:
      "A process may be terminated simply because its name or behavior looks suspicious.",
    consequence:
      "Command-line context, parent-child relationships, open files, network connections, and other transient evidence can disappear.",
    replacement:
      "Record PID, PPID, executable path, command line, user, open files, sockets, and service relationship before containment.",
  },
  {
    title: "Deleting cron jobs or timers before documenting them",
    what:
      "Suspicious persistence may be removed as soon as it is discovered.",
    consequence:
      "The team can lose evidence showing what ran, when it ran, and which user or executable was involved.",
    replacement:
      "Capture the cron entry or timer unit, ownership, command, timestamps, and related logs before remediation.",
  },
  {
    title: "Assuming every account with a shell is a normal user",
    what:
      "Teams may classify Linux identities only by whether they have an interactive shell.",
    consequence:
      "Service, system, or automation accounts can be misidentified and disabled incorrectly.",
    replacement:
      "Review UID, groups, shell, home directory, recent activity, sudo rights, and service dependencies before changing the account.",
  },
  {
    title: "Removing packages because they look unnecessary",
    what:
      "A package may be removed to reduce attack surface without checking which service or mission function depends on it.",
    consequence:
      "Required applications, libraries, services, or administration tools can stop working.",
    replacement:
      "Identify the package purpose, reverse dependencies, associated services, and mission role before removal.",
  },
  {
    title: "Ignoring systemd unit files and overrides",
    what:
      "Teams may check only whether a service is running and skip the unit definition, drop-ins, or environment configuration.",
    consequence:
      "Suspicious startup commands, altered paths, or persistence can remain hidden.",
    replacement:
      "Inspect the unit file, drop-in overrides, ExecStart, environment, account, dependencies, and journal activity.",
  },
  {
    title: "Treating world-writable files as identical risk",
    what:
      "Every world-writable path may be changed without considering why it exists or whether sticky-bit behavior is expected.",
    consequence:
      "Normal Linux behavior can be broken while the real dangerous permission remains unresolved elsewhere.",
    replacement:
      "Evaluate the path, file type, owner, purpose, sticky bit, service dependency, and whether the permission is actually unsafe in context.",
  },
  {
    title: "Changing the firewall without mapping required services",
    what:
      "UFW or nftables rules may be tightened broadly without checking required listeners and remote administration.",
    consequence:
      "SSH, web services, DNS, or other required traffic can be blocked.",
    replacement:
      "Map required services, interfaces, ports, and clients first, then narrow only unnecessary exposure.",
  },
];

const identityChecks = [
  "Review /etc/passwd and getent output instead of judging users only by name.",
  "Compare approved users with UID, groups, shell, and home directory.",
  "Review sudo or wheel membership.",
  "Check effective sudo rights, not only group membership.",
  "Identify service accounts before disabling users.",
  "Review recent authentication activity where evidence exists.",
];

const permissionChecks = [
  "Inspect exact owner, group, and mode before changing a path.",
  "Avoid broad recursive chmod or chown unless the scope is fully understood.",
  "Review SUID and SGID findings in context.",
  "Review world-writable paths and sticky-bit behavior.",
  "Check ACLs when traditional mode bits do not explain effective access.",
  "Retest the dependent service or application after permission changes.",
];

const persistenceChecks = [
  "Systemd services",
  "Systemd timers",
  "Cron jobs",
  "User crontabs",
  "Shell startup files",
  "Unexpected startup scripts or service overrides",
];

const evidenceCommands = [
  {
    title: "Process context",
    commands: [
      "ps -ef",
      "pstree -ap",
      "readlink -f /proc/<PID>/exe",
      "tr '\\0' ' ' < /proc/<PID>/cmdline",
    ],
  },
  {
    title: "Service context",
    commands: [
      "systemctl status <service>",
      "systemctl cat <service>",
      "journalctl -u <service> --no-pager -n 100",
    ],
  },
  {
    title: "Network context",
    commands: [
      "ss -lntup",
      "ip addr",
      "ip route",
    ],
  },
  {
    title: "Identity context",
    commands: [
      "getent passwd",
      "getent group sudo",
      "sudo -l -U <username>",
    ],
  },
];

const badVsBetter = [
  {
    bad: "Run chmod -R to fix the permissions quickly.",
    better:
      "Identify the exact incorrect path and repair only the permission or ownership that is actually wrong.",
  },
  {
    bad: "Kill the suspicious process.",
    better:
      "Capture PID, executable, command line, parent, user, network activity, and service relationship before containment.",
  },
  {
    bad: "Delete the cron job.",
    better:
      "Record the entry, owner, command, timing, related executable, and logs before removal.",
  },
  {
    bad: "Turn off SSH for security.",
    better:
      "Confirm mission requirements, then restrict access and authentication while preserving approved administration.",
  },
  {
    bad: "Remove the package because we do not need it.",
    better:
      "Check package purpose, dependencies, services, and mission use before uninstalling it.",
  },
  {
    bad: "The service is running, so the configuration is fine.",
    better:
      "Inspect the unit file, overrides, executable path, account, dependencies, and journal evidence.",
  },
];

const verificationQuestions = [
  "Can approved users still sign in?",
  "Do approved administrators still have the sudo rights they need?",
  "Are required services still running?",
  "Does SSH state still match the mission?",
  "Did any permission change break an application or service?",
  "Did suspicious cron, timer, or service persistence return?",
  "Do listeners match required services?",
  "Are important authentication and journal logs preserved?",
];

const finalChecklist = [
  "The mission was checked before disabling SSH or services.",
  "Approved users were reviewed by UID, groups, shell, and role.",
  "Sudo membership and effective sudo rights were checked.",
  "Service accounts were identified before disablement.",
  "Recursive permission changes were avoided unless fully justified.",
  "Suspicious processes were documented before termination.",
  "Cron jobs and systemd timers were preserved before remediation.",
  "Systemd unit files and overrides were inspected where relevant.",
  "World-writable and SUID / SGID findings were reviewed in context.",
  "Firewall changes preserved required services and administration.",
  "Important authentication and journal evidence was preserved.",
  "Required functionality was retested after high-impact changes.",
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

export default function LinuxMistakesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
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
              href="/cyberpatriot/common-mistakes/windows-server-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/cisco-networking-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Common Mistakes &middot; Guide 04 &middot; Linux
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Linux mistakes often come from powerful commands used too
                broadly: recursive permission changes, unsafe sudo edits,
                deleting persistence, killing processes, or disabling SSH
                without checking the mission.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong Linux work is precise. Inspect users, permissions,
                processes, services, logs, persistence, and network state
                before changing them.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Permissions</span>
                  <span className="font-bold text-white">Scope narrowly</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Privilege</span>
                  <span className="font-bold text-white">Validate sudo</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Persistence</span>
                  <span className="font-bold text-white">Preserve first</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Service verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Linux rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Powerful commands demand narrow scope and clear evidence
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Before changing permissions, users, services, packages, processes,
            SSH, or persistence, confirm the exact object, expected state,
            dependency, and verification plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 Linux mistakes"
            title="What goes wrong and the safer replacement"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    What goes wrong
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.what}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Why it hurts
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Stronger replacement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.replacement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Identity"
              title="Classify users before changing them"
            />
            <div className="mt-6 grid gap-3">
              {identityChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Permissions"
              title="Avoid broad recursive fixes"
            />
            <div className="mt-6 grid gap-3">
              {permissionChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Persistence"
              title="Preserve before deleting"
            />
            <div className="mt-6 grid gap-3">
              {persistenceChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence quick reference"
            title="Capture Linux context before containment"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {evidenceCommands.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace destructive shortcuts with evidence-first Linux work
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {badVsBetter.map((item) => (
              <div
                key={item.bad}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.bad}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.better}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification"
            title="Ask these after high-impact Linux changes"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {verificationQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Linux final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve evidence, scope changes, and verify services
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
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
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
              href="/cyberpatriot/common-mistakes/windows-server-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/cisco-networking-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
