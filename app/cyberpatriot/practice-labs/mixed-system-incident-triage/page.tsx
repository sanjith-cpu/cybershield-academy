import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional incident spans one Windows 11 workstation, one Ubuntu workstation, one Windows Server host, and one Cisco access switch.",
  "The team has a limited investigation window and must prioritize the systems most likely to affect the rest of the environment.",
  "Preserve evidence before making changes that could destroy logs, process state, network state, or authentication clues.",
  "Do not assume every unusual setting is malicious; compare each finding with the mission requirements.",
  "Use cross-system evidence to determine whether events are related or merely coincidental.",
  "Contain only the systems and services supported by evidence, and preserve required competition functionality.",
  "Document what is known, what is suspected, and what still requires verification.",
  "This is an authorized defensive practice scenario only.",
];

const environment = [
  {
    system: "WIN11-OPS",
    role: "Operations workstation",
    expected:
      "Defender and Firewall enabled, RDP not required, only approved users should have local administrator rights.",
  },
  {
    system: "UBU-DEV",
    role: "Linux development workstation",
    expected:
      "SSH not required, priya may use sudo, alex should not have unrestricted sudo.",
  },
  {
    system: "SRV-FILES",
    role: "Windows Server file server",
    expected:
      "SMB file sharing required, approved administrator access only, suspicious services must be investigated.",
  },
  {
    system: "SW1",
    role: "Cisco access switch",
    expected:
      "VLANs 10, 20, and 99 remain operational, management restricted to VLAN 99, access ports retain intended security.",
  },
];

const triagePriorities = [
  {
    priority: "P1",
    title: "Active compromise or propagation risk",
    examples: [
      "Unknown process with active outbound connections",
      "New administrative account",
      "Unexpected remote-access service",
      "Suspicious service or scheduled persistence",
    ],
    response:
      "Preserve evidence, confirm scope, and contain only the verified risky component.",
  },
  {
    priority: "P2",
    title: "Identity and privilege exposure",
    examples: [
      "Unexpected administrator membership",
      "Unrestricted sudo",
      "Remote-management access from the wrong network",
      "Repeated authentication failures",
    ],
    response:
      "Determine whether the identity is approved, when the change occurred, and whether it enabled other activity.",
  },
  {
    priority: "P3",
    title: "Configuration weakness without active evidence",
    examples: [
      "Unused insecure service",
      "Overly broad ACL",
      "Weak access-port control",
      "Unneeded software package",
    ],
    response:
      "Record the weakness, verify mission requirements, and remediate after higher-risk findings are handled.",
  },
  {
    priority: "P4",
    title: "Benign or mission-required anomaly",
    examples: [
      "Required file-sharing service",
      "Approved scheduled maintenance",
      "Expected management listener",
      "Normal backup activity",
    ],
    response:
      "Document why it is expected so the team does not waste time repeatedly investigating it.",
  },
];

const platformSections = [
  {
    label: "Windows 11 triage",
    title: "Prioritize privilege, execution, and outbound activity",
    checks: [
      {
        title: "Users and administrators",
        commands: ["Get-LocalUser", "Get-LocalGroupMember Administrators"],
        purpose:
          "Identify unexpected local users and privileged membership before changing anything.",
      },
      {
        title: "Processes and connections",
        commands: [
          "Get-Process | Sort-Object ProcessName",
          "Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess",
        ],
        purpose:
          "Correlate running processes with active communication and prioritize unknown network-active processes.",
      },
      {
        title: "Services and persistence",
        commands: ["Get-Service | Sort-Object Status,Name", "Get-ScheduledTask"],
        purpose:
          "Review services and scheduled tasks that could explain repeated execution.",
      },
      {
        title: "Security events",
        commands: [
          'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624,4625,4672,4720,4732} -MaxEvents 100',
        ],
        purpose:
          "Correlate logons, failed logons, privilege use, account creation, and group changes.",
      },
    ],
  },
  {
    label: "Linux triage",
    title: "Separate privilege weakness from active compromise",
    checks: [
      {
        title: "Users and privilege",
        commands: [
          "getent passwd",
          "getent group sudo",
          "sudo -l -U alex",
          "sudo -l -U priya",
        ],
        purpose:
          "Compare user and sudo rights with the mission-approved privilege model.",
      },
      {
        title: "Processes and sockets",
        commands: ["ps aux --sort=-%cpu | head -n 30", "ss -tulpn"],
        purpose:
          "Identify active processes and listeners before disabling services.",
      },
      {
        title: "Services and schedules",
        commands: [
          "systemctl --type=service --state=running",
          "systemctl list-timers --all",
          "crontab -l",
          "sudo crontab -l",
        ],
        purpose:
          "Review service state and recurring execution sources.",
      },
      {
        title: "Authentication evidence",
        commands: [
          'sudo grep -Ei "accepted|failed|sudo|session opened|session closed" /var/log/auth.log 2>/dev/null | tail -n 120',
        ],
        purpose:
          "Correlate authentication and sudo activity with process and service findings.",
      },
    ],
  },
  {
    label: "Windows Server triage",
    title: "Protect required services while investigating propagation",
    checks: [
      {
        title: "Privileged identities",
        commands: [
          "Get-LocalGroupMember Administrators",
          'Get-ADGroupMember "Domain Admins" -ErrorAction SilentlyContinue',
        ],
        purpose:
          "Identify approved and unexpected privileged identities without assuming domain membership.",
      },
      {
        title: "Required roles and shares",
        commands: [
          "Get-WindowsFeature | Where-Object {$_.InstallState -eq 'Installed'}",
          "Get-SmbShare",
          "Get-SmbSession",
        ],
        purpose:
          "Separate mission-required file services from unnecessary or suspicious roles.",
      },
      {
        title: "Services and service-install events",
        commands: [
          "Get-Service | Sort-Object Status,Name",
          'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 50',
        ],
        purpose:
          "Identify newly installed services and correlate them with executable paths.",
      },
      {
        title: "Authentication and file access",
        commands: [
          'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624,4625,4672,5140} -MaxEvents 100',
        ],
        purpose:
          "Review logons, privileged sessions, and SMB share access.",
      },
    ],
  },
  {
    label: "Cisco triage",
    title: "Use network evidence to test scope hypotheses",
    checks: [
      {
        title: "Interface and VLAN state",
        commands: ["show interfaces status", "show vlan brief"],
        purpose:
          "Confirm the basic Layer 2 environment remains stable before changing security policy.",
      },
      {
        title: "Trunk and management path",
        commands: ["show interfaces trunk", "show ip interface brief"],
        purpose:
          "Verify required VLANs and the management interface are still operational.",
      },
      {
        title: "ACL and VTY policy",
        commands: ["show ip access-lists", "show running-config | section line vty"],
        purpose:
          "Review management restrictions and ACL behavior without rewriting policy blindly.",
      },
      {
        title: "Port-security evidence",
        commands: ["show port-security", "show interfaces status err-disabled", "show logging"],
        purpose:
          "Identify access-port violations or link events that may correlate with suspicious endpoint activity.",
      },
    ],
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    system: "WIN11-OPS",
    observation:
      "A local account named support-temp was created yesterday and added to Administrators. The mission roster does not list this account.",
    prompt:
      "What additional event IDs and timestamps would help determine when and by whom this privilege change occurred?",
  },
  {
    id: "E02",
    system: "WIN11-OPS",
    observation:
      "An unknown process named updater-helper.exe is running from the user's Downloads folder and owns an outbound TCP connection.",
    prompt:
      "What should be preserved before stopping the process?",
  },
  {
    id: "E03",
    system: "UBU-DEV",
    observation:
      "SSH is running and listening on TCP 22 even though the mission says SSH is not required.",
    prompt:
      "Is this automatically the highest-priority finding? What evidence would raise or lower its priority?",
  },
  {
    id: "E04",
    system: "UBU-DEV",
    observation:
      "alex is a member of sudo and also has a NOPASSWD rule in /etc/sudoers.d/alex-temp.",
    prompt:
      "Which part conflicts with the approved privilege model, and what should be documented before changing it?",
  },
  {
    id: "E05",
    system: "SRV-FILES",
    observation:
      "A service named FileIndexHelper was installed recently from C:\\Temp\\fileindex.exe. The required SMB services are otherwise healthy.",
    prompt:
      "How would you determine whether the service is related to the workstation activity or is a separate issue?",
  },
  {
    id: "E06",
    system: "SRV-FILES",
    observation:
      "Security logs show a successful administrative logon from WIN11-OPS shortly after support-temp was created.",
    prompt:
      "How does this change the importance of the workstation account finding?",
  },
  {
    id: "E07",
    system: "SW1",
    observation:
      "The switch logs show no port-security violation on the WIN11-OPS access port, and the expected MAC address remains learned there.",
    prompt:
      "Which network hypothesis becomes less likely based on this evidence?",
  },
  {
    id: "E08",
    system: "SW1",
    observation:
      "VTY access is correctly restricted to VLAN 99. No ACL counters suggest management access from the student network.",
    prompt:
      "Why is this important when deciding whether the incident spread through network-device management?",
  },
  {
    id: "E09",
    system: "Cross-system",
    observation:
      "The service installation on SRV-FILES occurred three minutes after the administrative logon sourced from WIN11-OPS.",
    prompt:
      "Does timing alone prove causation? What additional evidence would make the relationship stronger?",
  },
  {
    id: "E10",
    system: "Cross-system",
    observation:
      "No authentication or network evidence links UBU-DEV to either WIN11-OPS or SRV-FILES during the same time window.",
    prompt:
      "How should this affect the priority of the Linux findings compared with the Windows findings?",
  },
];

const correlationQuestions = [
  {
    question: "Which system should be investigated first?",
    guidance:
      "Prefer the system with active suspicious execution, unexpected privilege, and evidence of access to another host.",
  },
  {
    question: "What appears related?",
    guidance:
      "Look for matching identities, source addresses, timestamps, executable names, hashes, service paths, or process evidence.",
  },
  {
    question: "What may be unrelated?",
    guidance:
      "A weak configuration can exist at the same time as an incident without participating in that incident.",
  },
  {
    question: "What should be contained first?",
    guidance:
      "Prioritize verified active behavior that can affect other systems while preserving evidence and required functionality.",
  },
  {
    question: "What should wait?",
    guidance:
      "Lower-risk hardening findings can wait until active execution, privilege, and propagation risks are controlled.",
  },
  {
    question: "What proves recovery?",
    guidance:
      "Re-run the same checks that revealed the problem and confirm required services still work.",
  },
];

const evidenceNotebook = [
  ["System", "WIN11-OPS"],
  ["Time", "14:32 local"],
  ["Observation", "support-temp added to Administrators"],
  ["Source", "Local group membership + Security event"],
  ["Confidence", "High"],
  ["Related systems", "Possible link to SRV-FILES"],
  ["Action", "Preserve event details before removal"],
  ["Verification", "Privileged membership corrected; approved admins unaffected"],
];

const containmentExamples = [
  {
    title: "Disable an unapproved Windows account",
    commands: ["Disable-LocalUser -Name support-temp"],
    note:
      "Use only after preserving the account, group membership, timestamps, and related security events.",
  },
  {
    title: "Stop a verified suspicious process",
    commands: ["Stop-Process -Id <PID>"],
    note:
      "Use only after preserving process path, hash, parent, command line, and network evidence.",
  },
  {
    title: "Disable an unneeded Linux service",
    commands: ["sudo systemctl disable --now ssh"],
    note:
      "Use only when the mission confirms SSH is not required and you have recorded current service and authentication evidence.",
  },
  {
    title: "Disable a suspicious server service",
    commands: [
      'Stop-Service -Name "FileIndexHelper"',
      'Set-Service -Name "FileIndexHelper" -StartupType Disabled',
    ],
    note:
      "Use only after confirming the service is not required and preserving its binary path and installation evidence.",
  },
];

const verificationChecks = [
  {
    area: "WIN11-OPS",
    commands: [
      "Get-LocalGroupMember Administrators",
      "Get-Process | Sort-Object ProcessName",
      "Get-NetTCPConnection | Select-Object RemoteAddress,RemotePort,State,OwningProcess",
    ],
    verify:
      "Unapproved privilege and verified suspicious execution are removed while Defender, Firewall, and required applications remain operational.",
  },
  {
    area: "UBU-DEV",
    commands: [
      "getent group sudo",
      "sudo -l -U alex",
      "systemctl is-enabled ssh",
      "ss -tulpn",
    ],
    verify:
      "Privilege and remote-service state now match the mission without breaking required local development functionality.",
  },
  {
    area: "SRV-FILES",
    commands: ["Get-Service", "Get-SmbShare", "Get-SmbSession"],
    verify:
      "Suspicious service activity is contained while required SMB file sharing remains available.",
  },
  {
    area: "SW1",
    commands: [
      "show interfaces status",
      "show vlan brief",
      "show interfaces trunk",
      "show ip access-lists",
    ],
    verify:
      "Required VLANs, trunks, access ports, and management restrictions remain intact.",
  },
  {
    area: "Cross-system",
    commands: [
      "Re-run the exact authentication, process, service, and network checks that produced the original findings.",
    ],
    verify:
      "No new evidence shows continued propagation or persistence between the affected systems.",
  },
];

const reflectionQuestions = [
  "Why is active suspicious execution on WIN11-OPS more urgent than an unused SSH service on UBU-DEV?",
  "How does the administrative logon from WIN11-OPS to SRV-FILES change the scope of the investigation?",
  "Why does timing alone not prove that the workstation caused the suspicious server service installation?",
  "What evidence would make the workstation-to-server relationship more convincing?",
  "Why should required SMB services on SRV-FILES be preserved during containment?",
  "Why is the switch evidence useful even though no network-device compromise was found?",
  "How do you distinguish an incident indicator from a separate hardening issue?",
  "What should be documented before removing support-temp from privileged access?",
];

const completionChecklist = [
  "I ranked findings by active risk, privilege, propagation potential, and mission impact.",
  "I preserved evidence before containment.",
  "I identified which findings were likely related and which were probably separate.",
  "I investigated cross-system authentication and timing.",
  "I did not disable required services simply because they were network-facing.",
  "I used switch evidence to test network-based hypotheses.",
  "I contained only evidence-supported risky behavior.",
  "I verified Windows, Linux, Server, and Cisco mission requirements after changes.",
  "I separated confirmed facts from hypotheses in my notes.",
  "I can explain why my triage order was efficient and defensible.",
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

export default function MixedSystemIncidentTriageLab() {
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
              href="/cyberpatriot/practice-labs/forensics-suspicious-download-case"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/full-competition-simulation"
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
                Practice Lab &middot; 11 &middot; Mixed Systems
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mixed-System Incident Triage
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Prioritize and correlate findings across Windows 11, Linux,
                Windows Server, and Cisco without treating every anomaly as the
                same level of risk.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The challenge is not finding the most issues. It is deciding what
                matters first, what is related, and what can safely wait.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Advanced</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Systems</span>
                  <span className="font-bold text-white">4 platforms</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Prioritization</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Focus</span>
                  <span className="font-bold text-white">Correlation + Scope</span>
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
            Find the highest-risk path without breaking the environment
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
          <SectionHeading label="Environment" title="Know the role of each system before triage" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {environment.map((item) => (
              <div key={item.system} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.system}
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.expected}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Priority model" title="Rank findings before acting" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {triagePriorities.map((item) => (
              <div key={item.priority} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-lg font-black text-cyan-300">{item.priority}</span>
                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                <div className="mt-4 grid gap-2">
                  {item.examples.map((example) => (
                    <div key={example} className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                      {example}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {platformSections.map((section) => (
        <section key={section.label} className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <SectionHeading label={section.label} title={section.title} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {section.checks.map((item) => (
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
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Fictional evidence set" title="Correlate across systems before deciding scope" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.system}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.observation}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Triage prompt
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
          <SectionHeading label="Correlation board" title="Ask the questions that determine scope" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {correlationQuestions.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.guidance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Evidence notebook" title="Keep findings comparable across platforms" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {evidenceNotebook.map(([field, example]) => (
              <div key={field} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {field}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Authorized containment examples"
            title="Contain the verified risk, not the entire environment"
            description="These commands are for the fictional authorized lab and should only be used after preserving relevant evidence."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {containmentExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
                <div className="mt-4 grid gap-2">
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
          <SectionHeading label="Verification" title="Re-check every affected platform after containment" />
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
          <SectionHeading label="Reflection" title="Debrief the triage decisions" />
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
            Finish only when risk is contained and mission services still work
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
              href="/cyberpatriot/practice-labs/forensics-suspicious-download-case"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/full-competition-simulation"
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
