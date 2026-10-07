import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why Windows Server must be hardened according to its assigned role rather than like a normal workstation.",
  "Identify required server roles, services, users, shares, remote-management paths, and network dependencies before making changes.",
  "Build a safe baseline using Server Manager, Services, Windows Security, Event Viewer, PowerShell, and role-specific consoles.",
  "Prioritize changes by security impact, dependency risk, and scenario requirements.",
  "Apply small defensive changes while preserving authentication, name resolution, address assignment, file access, and remote administration.",
  "Verify the server from both the administrator and client perspective after meaningful changes.",
];

const roleQuestions = [
  "Is this server a domain controller, DNS server, DHCP server, file server, application server, or a combination?",
  "Which roles are explicitly required by the scenario?",
  "Which clients or users depend on this server?",
  "Does the server host Active Directory Domain Services?",
  "Does it provide DNS or DHCP to the network?",
  "Are SMB shares required?",
  "Is RDP or WinRM required for administration?",
  "Are there required applications or third-party services?",
  "Which accounts are administrators, service accounts, or ordinary users?",
  "Which changes could interrupt authentication, networking, file access, or remote administration?",
];

const tools = [
  {
    title: "Server Manager",
    path: "Start → Server Manager",
    lookFor:
      "Installed roles and features, server health, services, local server configuration, and role-specific management links.",
  },
  {
    title: "Computer Management",
    path: "Win + R → compmgmt.msc",
    lookFor:
      "Local users and groups, shared folders, Event Viewer, Task Scheduler, devices, storage, and service-related context.",
  },
  {
    title: "Services",
    path: "Win + R → services.msc",
    lookFor:
      "Required service state, startup type, dependencies, and whether a role relies on the service.",
  },
  {
    title: "Event Viewer",
    path: "Win + R → eventvwr.msc",
    lookFor:
      "System, Security, Application, and role-specific events that help explain failures or suspicious activity.",
  },
  {
    title: "Windows Defender Firewall",
    path: "Win + R → wf.msc",
    lookFor:
      "Firewall profiles, inbound and outbound rules, allowed programs, role-specific ports, and remote scope.",
  },
  {
    title: "Windows Security",
    path: "Start → Windows Security",
    lookFor:
      "Microsoft Defender Antivirus state, threat history, protection settings, and security intelligence.",
  },
  {
    title: "PowerShell",
    path: "Start → search PowerShell → Run as administrator when required",
    lookFor:
      "Fast read-only inventory, role/service checks, firewall review, event queries, share review, and verification.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Read the scenario and identify the server's job",
    purpose:
      "Before changing anything, determine what the server is supposed to provide.",
    actions: [
      "Highlight every required role, service, user, share, application, and remote-access requirement.",
      "Separate explicitly required functions from optional or unknown functions.",
      "Write down anything that must not be interrupted.",
      "Identify any forensic questions that require preserving the original system state.",
    ],
    verify:
      "You should be able to explain the server's purpose in one sentence before continuing.",
  },
  {
    number: "02",
    title: "Build a baseline",
    purpose:
      "Record what exists before hardening so later changes can be compared against the original state.",
    actions: [
      "Review Server Manager for installed roles and features.",
      "Inventory local users and privileged groups.",
      "Check whether the server belongs to a domain and whether it is a domain controller.",
      "Review Defender, firewall, update state, services, shares, scheduled tasks, and recent event logs.",
      "Record required remote-management paths such as RDP or WinRM.",
    ],
    verify:
      "Your notes should identify the major roles, security controls, users, services, and dependencies.",
  },
  {
    number: "03",
    title: "Prioritize high-impact findings",
    purpose:
      "Fix the weaknesses that matter most while avoiding changes that could break critical roles.",
    actions: [
      "Prioritize unauthorized privilege, disabled security controls, obvious unwanted software, suspicious persistence, and broad remote exposure.",
      "Investigate unknown services, tasks, users, or rules before changing them.",
      "Delay speculative tuning that has little security value.",
      "Coordinate high-impact changes with teammates when they affect shared services.",
    ],
    verify:
      "Every planned change should have a clear security reason and a known verification method.",
  },
  {
    number: "04",
    title: "Harden one dependency-aware area at a time",
    purpose:
      "Small controlled changes make troubleshooting and rollback easier.",
    actions: [
      "Protect identity and privilege first.",
      "Confirm Defender and firewall protections.",
      "Review updates and required services.",
      "Review remote administration, shares, scheduled tasks, and role-specific settings.",
      "Preserve evidence before deleting or disabling suspicious items.",
    ],
    verify:
      "After each important change, confirm the affected role or service still functions.",
  },
  {
    number: "05",
    title: "Verify from the client perspective",
    purpose:
      "A server can look healthy locally while clients are unable to use its services.",
    actions: [
      "Test domain logon if Active Directory is required.",
      "Test DNS resolution if DNS is required.",
      "Test DHCP address assignment if DHCP is required.",
      "Test file-share access if SMB is required.",
      "Test RDP or other required remote administration.",
      "Check Event Viewer for errors created by recent changes.",
    ],
    verify:
      "Required functions should work end to end, not just appear enabled in the local console.",
  },
];

const baselineInventory = [
  {
    area: "Server identity",
    questions: [
      "What is the computer name?",
      "Is the server domain-joined?",
      "Is it a domain controller?",
      "What Windows Server version and edition is installed?",
    ],
  },
  {
    area: "Roles and features",
    questions: [
      "Which roles are installed?",
      "Which features are installed?",
      "Which roles are explicitly required?",
      "Which roles are unknown and need investigation?",
    ],
  },
  {
    area: "Users and privilege",
    questions: [
      "Which local users exist?",
      "Who belongs to Administrators?",
      "Are there domain administrators or delegated groups?",
      "Do any services run under named user accounts?",
    ],
  },
  {
    area: "Network services",
    questions: [
      "Does the server provide DNS?",
      "Does it provide DHCP?",
      "Are SMB shares required?",
      "Are RDP or WinRM required?",
    ],
  },
  {
    area: "Protection",
    questions: [
      "Is Defender healthy?",
      "Are firewall profiles enabled?",
      "Are broad exclusions present?",
      "Are updates pending?",
    ],
  },
  {
    area: "Persistence and evidence",
    questions: [
      "Are there unusual scheduled tasks?",
      "Are there unusual automatic services?",
      "Are there suspicious startup entries?",
      "Do logs or Defender history contain forensic clues?",
    ],
  },
];

const powershellChecks = [
  {
    label: "Computer and OS overview",
    command:
      "Get-ComputerInfo | Select-Object CsName, WindowsProductName, WindowsVersion, OsArchitecture",
    purpose:
      "Provides a quick overview of the server name and Windows version.",
  },
  {
    label: "Installed Windows roles and features",
    command:
      "Get-WindowsFeature | Where-Object {$_.Installed -eq $true}",
    purpose:
      "Shows installed Windows Server roles and features when the ServerManager module is available.",
  },
  {
    label: "Local administrators",
    command:
      'Get-LocalGroupMember -Group "Administrators"',
    purpose:
      "Reviews privileged local membership on systems where local accounts are applicable.",
  },
  {
    label: "Services",
    command:
      "Get-Service | Sort-Object Status, DisplayName",
    purpose:
      "Provides a read-only view of service state.",
  },
  {
    label: "Detailed service inventory",
    command:
      'Get-CimInstance Win32_Service | Select-Object Name, State, StartMode, StartName, PathName',
    purpose:
      "Adds startup mode, service account, and executable path for dependency review.",
  },
  {
    label: "Firewall profiles",
    command:
      "Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction, DefaultOutboundAction",
    purpose:
      "Reviews the current firewall profile state.",
  },
  {
    label: "Defender status",
    command:
      "Get-MpComputerStatus",
    purpose:
      "Reviews Microsoft Defender Antivirus health where Defender is installed and active.",
  },
  {
    label: "SMB shares",
    command:
      "Get-SmbShare | Select-Object Name, Path, Description, Special",
    purpose:
      "Shows local SMB shares for file-service review.",
  },
  {
    label: "Scheduled tasks",
    command:
      "Get-ScheduledTask | Select-Object TaskPath, TaskName, State",
    purpose:
      "Builds a broad inventory of scheduled tasks without changing them.",
  },
  {
    label: "Recent System events",
    command:
      "Get-WinEvent -LogName System -MaxEvents 30 | Select-Object TimeCreated, Id, LevelDisplayName, ProviderName, Message",
    purpose:
      "Provides recent system health and service evidence.",
  },
];

const riskCategories = [
  {
    title: "Fix first",
    examples: [
      "Unauthorized administrative access",
      "Defender or firewall disabled without scenario justification",
      "Obvious unwanted remote-access software",
      "Known suspicious persistence",
      "Broadly exposed required services",
    ],
  },
  {
    title: "Investigate before changing",
    examples: [
      "Unknown service",
      "Unknown scheduled task",
      "Unfamiliar domain or local account",
      "Unrecognized firewall rule",
      "Installed role not mentioned in the scenario",
    ],
  },
  {
    title: "Protect carefully",
    examples: [
      "Active Directory Domain Services",
      "DNS",
      "DHCP",
      "Required SMB shares",
      "Required RDP or WinRM",
    ],
  },
  {
    title: "Defer unless justified",
    examples: [
      "Large feature upgrades",
      "Broad policy rewrites",
      "Mass service disable scripts",
      "Unverified ownership resets",
      "Major configuration changes with no test plan",
    ],
  },
];

const dependencyExamples = [
  {
    title: "Active Directory Domain Services",
    depends:
      "DNS, authentication services, directory database, domain controller services, time consistency, and network connectivity.",
    danger:
      "Disabling an unfamiliar service on a domain controller can interrupt domain logon or directory operations.",
  },
  {
    title: "DNS",
    depends:
      "DNS Server service, zone configuration, network access, firewall rules, and correct records.",
    danger:
      "A firewall or service change may break name resolution even though the server itself is still reachable.",
  },
  {
    title: "DHCP",
    depends:
      "DHCP Server service, scope configuration, authorization when applicable, network access, and firewall rules.",
    danger:
      "Clients may lose address assignment after a service or firewall change.",
  },
  {
    title: "File services",
    depends:
      "Server service, SMB, share permissions, NTFS permissions, user/group identity, storage availability, and firewall rules.",
    danger:
      "A permission or firewall change can break access while the folder still appears healthy locally.",
  },
  {
    title: "Remote administration",
    depends:
      "Authorized users, user rights, Remote Desktop Services or WinRM, firewall, network reachability, and authentication.",
    danger:
      "Hardening too aggressively can lock the team out of the server.",
  },
];

const verificationMatrix = [
  {
    area: "Active Directory",
    test:
      "Use an authorized client or test account to confirm domain authentication works when AD DS is required.",
  },
  {
    area: "DNS",
    test:
      "Resolve required names from a client and confirm the server returns expected results.",
  },
  {
    area: "DHCP",
    test:
      "Confirm a client can obtain or renew an address when DHCP is required.",
  },
  {
    area: "File sharing",
    test:
      "Confirm authorized users can access the required share and unauthorized users cannot.",
  },
  {
    area: "RDP",
    test:
      "Confirm the authorized administrator can connect through the intended path when RDP is required.",
  },
  {
    area: "Defender",
    test:
      "Confirm protection is healthy and required applications still function.",
  },
  {
    area: "Firewall",
    test:
      "Confirm profiles and intended rules remain active while required server roles are reachable.",
  },
  {
    area: "Services",
    test:
      "Confirm every required role-related service changed during hardening is running as expected.",
  },
  {
    area: "Applications",
    test:
      "Launch or test required server applications after related account, firewall, or service changes.",
  },
  {
    area: "Logs",
    test:
      "Review recent System, Application, Security, and role-specific logs for new errors caused by your changes.",
  },
];

const firstFifteen = [
  "Read the entire scenario before opening administrative consoles.",
  "Identify the server's required role or roles.",
  "Record whether the server is a domain controller.",
  "Open Server Manager and inventory installed roles/features.",
  "Record required users, administrators, shares, and remote-management paths.",
  "Check Defender status.",
  "Check firewall profile state.",
  "Check recent Windows Update status.",
  "Review Administrators and other privileged groups.",
  "Review required services.",
  "Review SMB shares.",
  "Review scheduled tasks and obvious startup persistence.",
  "Look at recent System and Security events for major warnings or clues.",
  "Preserve forensic evidence before cleanup.",
  "Create a prioritized change list with a verification plan.",
];

const decisionCases = [
  {
    title: "Unknown service on a domain controller",
    evidence:
      "An automatic service has an unfamiliar name and runs under a privileged account.",
    reasoning:
      "The path and service account make it worth investigating, but domain controllers contain many specialized services.",
    response:
      "Inspect the executable path, vendor, dependencies, events, installed software, and scenario role before changing it.",
  },
  {
    title: "Firewall rule looks too broad",
    evidence:
      "A required DNS service is allowed inbound on more profiles or networks than necessary.",
    reasoning:
      "The service may be required while the exposure is excessive.",
    response:
      "Narrow the rule only after confirming which clients must reach the service, then test DNS resolution from an authorized client.",
  },
  {
    title: "Unfamiliar administrator account",
    evidence:
      "An account appears in Administrators but is not listed in the scenario.",
    reasoning:
      "The privilege is high-risk, but the account may support a required service or application.",
    response:
      "Inspect the account, service dependencies, logon evidence, and scenario authorization before removing privilege or disabling it.",
  },
  {
    title: "Pending restart after updates",
    evidence:
      "The server has installed updates and reports that a restart is required.",
    reasoning:
      "A restart may be necessary but can interrupt domain, DNS, DHCP, file, or application services.",
    response:
      "Coordinate the restart, preserve notes, verify the server returns cleanly, then test every required role afterward.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "DC-PRACTICE is a domain controller that also provides DNS. Morgan is the authorized administrator. RDP is required for Morgan, and the TeamDocs share must remain available.",
  },
  {
    number: "02",
    title: "Identify required dependencies",
    text:
      "Mark Active Directory, DNS, authentication, the TeamDocs share, network connectivity, and Morgan's remote administration as required.",
  },
  {
    number: "03",
    title: "Build the baseline",
    text:
      "Use Server Manager, Services, Windows Security, Firewall, Event Viewer, and read-only PowerShell commands to record the current state.",
  },
  {
    number: "04",
    title: "Prioritize findings",
    text:
      "An unknown privileged scheduled task, one unexplained administrator, and a broad firewall rule become Investigate items before changes are made.",
  },
  {
    number: "05",
    title: "Preserve evidence and harden",
    text:
      "Document task properties, account evidence, and firewall scope before applying narrow, justified remediation.",
  },
  {
    number: "06",
    title: "Verify the server",
    text:
      "Confirm domain authentication, DNS resolution, TeamDocs access, Morgan's RDP access, Defender, firewall, services, and event logs.",
  },
];

const mistakes = [
  {
    title: "Treating the server like Windows 11",
    text:
      "A server's roles and dependencies make many apparently simple changes much higher impact.",
  },
  {
    title: "Disabling unfamiliar services",
    text:
      "Unknown does not mean unnecessary. Server roles often rely on services students have never seen before.",
  },
  {
    title: "Removing roles without understanding them",
    text:
      "Installed roles may be required by the scenario or by another role.",
  },
  {
    title: "Changing domain policy from the wrong place",
    text:
      "Local policy may not control the effective setting on a domain-managed system.",
  },
  {
    title: "Locking out remote administration",
    text:
      "Changing user rights, firewall rules, services, or RDP settings without verification can cut off authorized access.",
  },
  {
    title: "Testing only from the server",
    text:
      "A role can appear healthy locally while clients cannot authenticate, resolve names, receive addresses, or access shares.",
  },
];

const checklist = [
  "Scenario read completely.",
  "Required server roles identified.",
  "Domain-controller status identified.",
  "Installed roles and features inventoried.",
  "Local and domain privilege reviewed at the appropriate scope.",
  "Required services identified.",
  "Defender health checked.",
  "Firewall profiles and required role rules checked.",
  "Update and restart state checked.",
  "Required shares inventoried.",
  "RDP or WinRM requirements recorded.",
  "Scheduled tasks and persistence reviewed.",
  "Recent event logs reviewed.",
  "Forensic evidence preserved before remediation.",
  "High-impact findings prioritized.",
  "Every planned change has a verification method.",
  "Required roles tested from the client perspective.",
];

const reflection = [
  "Why should the server's role be identified before any hardening begins?",
  "Why can an unfamiliar service be more dangerous to disable on a server than on a workstation?",
  "What information should a baseline include?",
  "Why should a required server role be verified from a client instead of only from the server console?",
  "What kinds of findings belong in Investigate instead of Fix immediately?",
  "Why is preserving remote administrative access part of secure server hardening?",
];

export default function WindowsServerCompetitionWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/server-manager-role-inventory" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Competition Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Secure Windows Server by identifying its job first, mapping its
                dependencies, hardening carefully, and proving that every
                required role still works after your changes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A server is valuable because other systems depend on it. The
                safest competition workflow protects that dependency while
                reducing unnecessary privilege, exposure, software, and
                persistence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Workflow stages</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary focus</span>
                  <span className="font-bold text-white">Dependencies</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Verification</span>
                  <span className="font-bold text-white">Client + server</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Secure + functional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What this lesson should help you do
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The server's job determines the safe hardening path
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A domain controller, DNS server, DHCP server, and file server all
              expose different services because they perform different jobs.
              Security decisions must preserve those jobs.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Scenario requirements override generic checklists
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Do not disable a role, service, account, port, or feature simply
              because a checklist says it is usually unnecessary.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Understand the dependency first, then make the narrowest justified change.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Scenario questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions to answer before touching the server
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {roleQuestions.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Where to go in Windows Server
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.lookFor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Competition workflow
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Five stages for safe server hardening
        </h2>
        <div className="mt-7 grid gap-5">
          {workflow.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 lg:p-7"
            >
              <div className="grid gap-5 lg:grid-cols-[0.22fr_0.78fr]">
                <div>
                  <p className="text-sm font-black text-cyan-300">{item.number}</p>
                  <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                </div>

                <div>
                  <div className="grid gap-3">
                    {item.actions.map((action) => (
                      <div
                        key={action}
                        className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                      Verify
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.verify}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Baseline inventory
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what exists before you change it
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {baselineInventory.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <div className="mt-4 grid gap-3">
                  {item.questions.map((question) => (
                    <p
                      key={question}
                      className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-sm leading-6 text-slate-400"
                    >
                      {question}
                    </p>
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
            Read-only PowerShell baseline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a fast server inventory
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powershellChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Prioritization
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Decide what to fix, investigate, protect, or defer
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {riskCategories.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 grid gap-3">
                {item.examples.map((example) => (
                  <p
                    key={example}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
                  >
                    {example}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Dependency awareness
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Required server roles are connected systems
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {dependencyExamples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                <span className="font-bold text-slate-200">Depends on: </span>
                {item.depends}
              </p>
              <p className="mt-4 text-sm leading-7 text-yellow-200">
                <span className="font-bold">Risk: </span>
                {item.danger}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification matrix
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the server still does its job
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {verificationMatrix.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.test}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            First fifteen minutes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A practical opening checklist
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {firstFifteen.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How server context changes the decision
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a baseline for DC-PRACTICE
          </h2>
          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Server mistakes that create bigger problems
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your server reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Competition checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before leaving the workflow lesson
            </h2>
            <div className="mt-5 grid gap-3">
              {checklist.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Server Manager &amp; Role Inventory
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to use Server Manager and supporting tools to
                identify installed roles, features, services, dependencies, and
                the server's real responsibilities before hardening.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/server-manager-role-inventory"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 02 &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/server-manager-role-inventory" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
