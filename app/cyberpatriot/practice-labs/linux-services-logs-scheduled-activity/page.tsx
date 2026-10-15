import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Ubuntu/Mint workstation supports a school robotics team and must remain usable for development and normal network access.",
  "Approved users are alex, priya, and root.",
  "SSH is not required unless the mission briefing explicitly says otherwise.",
  "The robotics application relies on a local background service named robot-agent.service.",
  "The workstation may use cron and systemd timers for legitimate maintenance tasks.",
  "Do not stop services, delete logs, remove cron entries, or disable timers until you understand their role.",
  "Preserve process, service, log, schedule, and network evidence before making changes.",
  "After remediation, approved development tools and robot-agent.service must still work.",
];

const serviceChecks = [
  {
    title: "List running services",
    commands: [
      "systemctl --type=service --state=running",
      "systemctl list-units --type=service",
    ],
    purpose:
      "Identify active services and build a baseline before deciding what is expected or unnecessary.",
  },
  {
    title: "Inspect one service",
    commands: [
      "systemctl status robot-agent.service --no-pager",
      "systemctl cat robot-agent.service",
    ],
    purpose:
      "Review service state, unit configuration, executable path, and dependencies.",
  },
  {
    title: "Review enabled services",
    commands: [
      "systemctl list-unit-files --type=service | grep enabled",
    ],
    purpose:
      "See which services are configured to start automatically at boot.",
  },
  {
    title: "Map services to processes",
    commands: [
      "ps aux",
      "ps -eo pid,ppid,user,comm,args --sort=ppid",
    ],
    purpose:
      "Connect service configuration with the processes actually running.",
  },
];

const logChecks = [
  {
    title: "System journal",
    commands: [
      "journalctl -p warning --since today",
      "journalctl -b --no-pager | tail -n 100",
    ],
    purpose:
      "Review recent warnings and boot activity without assuming every warning indicates compromise.",
  },
  {
    title: "Service-specific journal",
    commands: [
      "journalctl -u robot-agent.service --since today --no-pager",
    ],
    purpose:
      "Correlate service behavior with log messages and timestamps.",
  },
  {
    title: "Authentication logs",
    commands: [
      "sudo tail -n 100 /var/log/auth.log 2>/dev/null",
      "sudo grep -Ei \"sudo|session opened|session closed|failed|accepted\" /var/log/auth.log 2>/dev/null | tail -n 80",
    ],
    purpose:
      "Review login, sudo, and authentication activity when auth.log is available.",
  },
  {
    title: "General log directory",
    commands: [
      "ls -lah /var/log",
    ],
    purpose:
      "Identify available log sources before assuming a specific file exists.",
  },
];

const scheduleChecks = [
  {
    title: "User crontab",
    commands: [
      "crontab -l",
      "sudo crontab -l",
    ],
    purpose:
      "Review scheduled commands for the current user and root.",
  },
  {
    title: "System cron locations",
    commands: [
      "ls -la /etc/cron.d /etc/cron.daily /etc/cron.hourly /etc/cron.weekly 2>/dev/null",
      "sudo cat /etc/crontab",
    ],
    purpose:
      "Inspect system-wide scheduled activity and maintenance jobs.",
  },
  {
    title: "Systemd timers",
    commands: [
      "systemctl list-timers --all",
    ],
    purpose:
      "Identify recurring jobs managed by systemd rather than cron.",
  },
  {
    title: "Inspect one timer",
    commands: [
      "systemctl status apt-daily.timer --no-pager",
      "systemctl cat apt-daily.timer",
    ],
    purpose:
      "Practice understanding timer triggers and linked service units before making changes.",
  },
];

const networkChecks = [
  {
    title: "Listening sockets",
    commands: [
      "ss -tulpn",
      "sudo lsof -i -P -n | head -n 80",
    ],
    purpose:
      "Identify services listening on TCP or UDP ports and map them to processes.",
  },
  {
    title: "Active connections",
    commands: [
      "ss -tunap",
    ],
    purpose:
      "Review active network connections and owning processes.",
  },
  {
    title: "IP and route state",
    commands: [
      "ip addr",
      "ip route",
    ],
    purpose:
      "Confirm interface and routing state before blaming services for a connectivity issue.",
  },
  {
    title: "Firewall state",
    commands: [
      "sudo ufw status verbose 2>/dev/null",
      "sudo nft list ruleset 2>/dev/null | head -n 120",
    ],
    purpose:
      "Check host firewall configuration without disabling it to troubleshoot connectivity.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Services",
    observation:
      "robot-agent.service is active and enabled. Its unit file launches /opt/robotics/agent/robot-agent.",
    prompt:
      "Which mission requirement makes this service important to preserve?",
  },
  {
    id: "E02",
    source: "Services",
    observation:
      "ssh.service is active and enabled even though SSH is not required by the mission briefing.",
    prompt:
      "What listener, package, account, and usage evidence should you review before changing it?",
  },
  {
    id: "E03",
    source: "Network",
    observation:
      "ss -tulpn shows a listener on TCP 22 owned by sshd.",
    prompt:
      "How does this strengthen the case that SSH is actually exposed rather than merely installed?",
  },
  {
    id: "E04",
    source: "Authentication logs",
    observation:
      "auth.log shows several successful SSH logins for priya from a local network address.",
    prompt:
      "Does this automatically mean the service is required, or does the mission briefing still control the decision?",
  },
  {
    id: "E05",
    source: "Cron",
    observation:
      "root's crontab runs /usr/local/bin/backup-robotics.sh every night at 23:00.",
    prompt:
      "What evidence should you collect before removing or editing the job?",
  },
  {
    id: "E06",
    source: "Timer",
    observation:
      "A systemd timer named cleanup-temp.timer runs /usr/local/bin/cleanup-temp.sh every hour.",
    prompt:
      "What should you inspect about the linked service and script before deciding whether it is expected?",
  },
  {
    id: "E07",
    source: "Journal",
    observation:
      "robot-agent.service restarted twice today after exiting with a non-zero status.",
    prompt:
      "Why should you troubleshoot the service rather than simply disable it?",
  },
  {
    id: "E08",
    source: "Process",
    observation:
      "A process named updater.sh is running from /tmp/update-cache/updater.sh under user alex.",
    prompt:
      "What path, parent process, command line, hash, and network evidence should you preserve before terminating it?",
  },
];

const correlationFlow = [
  {
    step: "01",
    title: "Service",
    text:
      "Identify the unit, enabled state, executable path, service account, and dependencies.",
  },
  {
    step: "02",
    title: "Process",
    text:
      "Confirm what process is actually running and capture PID, PPID, user, and command line.",
  },
  {
    step: "03",
    title: "Logs",
    text:
      "Use journal or file-based logs to understand recent service activity and failures.",
  },
  {
    step: "04",
    title: "Schedule",
    text:
      "Check cron and systemd timers for recurring execution related to the service or script.",
  },
  {
    step: "05",
    title: "Network",
    text:
      "Determine whether the process listens on a port or creates active connections.",
  },
  {
    step: "06",
    title: "Decision",
    text:
      "Compare the full evidence chain with mission requirements before making a change.",
  },
];

const preservationChecklist = [
  "Record service status, enabled state, unit file, and executable path.",
  "Record process PID, PPID, user, command line, and executable path.",
  "Record relevant journal entries and timestamps.",
  "Record cron lines, timer definitions, and linked service units before editing.",
  "Record listening ports, active connections, and owning processes.",
  "Hash suspicious scripts or executables before deleting or replacing them.",
  "Check whether a scheduled task supports required backups or maintenance.",
  "Document the exact remediation and the post-change verification result.",
];

const remediationExamples = [
  {
    title: "Disable an unnecessary SSH service",
    command:
      "sudo systemctl disable --now ssh",
    note:
      "Use only after confirming the mission does not require SSH and approved workflows do not depend on it.",
  },
  {
    title: "Stop a non-required timer",
    command:
      "sudo systemctl disable --now cleanup-temp.timer",
    note:
      "Use only after reviewing the linked service and script and confirming the schedule is not required.",
  },
  {
    title: "Hash a suspicious script",
    command:
      "sha256sum /tmp/update-cache/updater.sh",
    note:
      "Preserve file identity before terminating the process or removing the script.",
  },
  {
    title: "Inspect a cron-owned script",
    command:
      "sudo stat /usr/local/bin/backup-robotics.sh && sudo sha256sum /usr/local/bin/backup-robotics.sh",
    note:
      "Record ownership, permissions, timestamps, and hash before modifying a scheduled job.",
  },
];

const verificationChecks = [
  {
    area: "Required service",
    commands: [
      "systemctl status robot-agent.service --no-pager",
      "systemctl is-enabled robot-agent.service",
    ],
    verify:
      "robot-agent.service remains active and enabled after remediation.",
  },
  {
    area: "SSH",
    commands: [
      "systemctl status ssh --no-pager 2>/dev/null",
      "ss -tulpn | grep ':22 ' || true",
    ],
    verify:
      "SSH state matches the mission and TCP 22 is not exposed if the service is not required.",
  },
  {
    area: "Schedules",
    commands: [
      "crontab -l",
      "sudo crontab -l",
      "systemctl list-timers --all",
    ],
    verify:
      "Approved maintenance jobs remain and unjustified scheduled activity is addressed.",
  },
  {
    area: "Processes",
    commands: [
      "ps -eo pid,ppid,user,comm,args --sort=ppid",
    ],
    verify:
      "Unexpected processes are re-checked and approved robotics processes remain available.",
  },
  {
    area: "Network",
    commands: [
      "ss -tulpn",
      "ip route",
    ],
    verify:
      "Required connectivity remains functional and unnecessary listeners are re-checked.",
  },
  {
    area: "Logs",
    commands: [
      "journalctl -p warning --since today --no-pager | tail -n 80",
    ],
    verify:
      "No new service failures or obvious breakage appeared after remediation.",
  },
];

const reflectionQuestions = [
  "Why is a service being enabled different from it currently running?",
  "Why is a listening socket stronger evidence of exposure than package installation alone?",
  "Why should cron and systemd timers both be checked on modern Linux systems?",
  "Why can a successful SSH login still be inconsistent with the mission briefing?",
  "Why should a required service that crashes be troubleshot instead of disabled?",
  "What evidence should be preserved before killing a suspicious process?",
  "Why is a scheduled backup job not automatically suspicious?",
  "Which evidence source in this lab was most useful for linking configuration to actual execution?",
];

const completionChecklist = [
  "I reviewed running and enabled services.",
  "I inspected robot-agent.service and preserved its required state.",
  "I reviewed journal and authentication logs.",
  "I checked user, root, and system-wide cron jobs.",
  "I reviewed systemd timers and their linked services.",
  "I mapped suspicious services and scripts to processes and network activity.",
  "I preserved hashes and relevant log evidence before destructive changes.",
  "I made only mission-supported service or schedule changes.",
  "I verified required robotics functionality after remediation.",
  "I confirmed unnecessary listeners were no longer exposed when appropriate.",
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

export default function LinuxServicesLogsScheduledActivityLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/linux-users-sudo-permissions"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/cisco-vlan-routing-troubleshooting"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Practice Lab &middot; 06 &middot; Ubuntu / Mint
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Services, Logs &amp; Scheduled Activity
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Correlate systemd services, processes, journal evidence, cron,
                timers, and network listeners before making defensive changes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lab focuses on behavior over names. A service, timer, or
                script becomes meaningful when configuration, execution, logs,
                schedule, and network state all line up.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Intermediate</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Ubuntu / Mint</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Behavior correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Required service</span>
                  <span className="font-bold text-white">robot-agent.service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mission briefing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve required services while reducing unnecessary exposure
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {missionRequirements.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Service review" title="Understand what is configured and running" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
          <SectionHeading label="Log review" title="Use journals and auth logs to add time and context" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {logChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
          <SectionHeading label="Scheduled activity" title="Review cron and systemd timers" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {scheduleChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
          <SectionHeading label="Network review" title="Connect services to exposure" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {networkChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
          <SectionHeading label="Fictional evidence set" title="Correlate behavior before remediation" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.observation}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Investigation prompt
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Correlation flow" title="Connect service, process, log, schedule, and network evidence" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {correlationFlow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{item.step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Preserve first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Service and schedule changes can destroy useful context
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preservationChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Authorized remediation examples"
            title="Use narrow changes only after the evidence supports them"
            description="These examples are for an authorized training VM and should follow the mission briefing and evidence."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {remediationExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Verification" title="Confirm required services and connectivity still work" />
          <div className="mt-8 grid gap-5">
            {verificationChecks.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.area}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.commands.map((command) => (
                      <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reflection" title="Debrief the behavior analysis" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reflectionQuestions.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
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
            Completion checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only after required behavior is verified
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4">
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
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/linux-users-sudo-permissions"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/cisco-vlan-routing-troubleshooting"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
