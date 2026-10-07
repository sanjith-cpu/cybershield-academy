import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use PowerShell as a defensive Windows Server administration and verification tool.",
  "Differentiate inspection commands from high-impact change commands.",
  "Build repeatable read-only inventories for roles, services, users, groups, shares, firewall, Defender, tasks, logs, DNS, and DHCP.",
  "Filter and format PowerShell output so evidence is easier to interpret.",
  "Use PowerShell carefully on member servers and domain controllers without assuming every cmdlet applies everywhere.",
  "Verify every administrative change with both PowerShell and the required server function.",
];

const sections = [
  {
    title: "PowerShell mindset",
    items: [
      "Prefer Get, Test, Resolve, Select, Where, and Sort while investigating.",
      "Treat Set, New, Add, Remove, Disable, Enable, Stop, and Restart as change operations that require a plan.",
      "Record the original state before you change it.",
      "Change one object or setting at a time when possible.",
      "Verify the configuration and the real server function afterward.",
    ],
  },
  {
    title: "Core inspection commands",
    items: [
      "Get-ComputerInfo",
      "Get-WindowsFeature",
      "Get-Service",
      "Get-CimInstance Win32_Service",
      "Get-LocalGroupMember",
      "Get-SmbShare",
      "Get-NetFirewallProfile",
      "Get-MpComputerStatus",
      "Get-ScheduledTask",
      "Get-WinEvent",
    ],
  },
  {
    title: "Role-specific commands",
    items: [
      "Active Directory: Get-ADUser, Get-ADGroupMember",
      "DNS: Get-DnsServerZone, Get-DnsServerResourceRecord",
      "DHCP: Get-DhcpServerv4Scope, Get-DhcpServerv4Lease",
      "File server: Get-SmbShareAccess, Get-Acl",
      "Remote administration: Test-WSMan",
      "Windows Update history: Get-HotFix",
    ],
  },
];

const examples = [
  {
    label: "Installed roles",
    command: "Get-WindowsFeature | Where-Object {$_.Installed -eq $true} | Select-Object DisplayName, Name, InstallState",
    purpose: "Shows installed Windows Server roles and features.",
  },
  {
    label: "Detailed services",
    command: "Get-CimInstance Win32_Service | Select-Object Name, DisplayName, State, StartMode, StartName, PathName",
    purpose: "Shows service state, startup mode, account, and executable path.",
  },
  {
    label: "Firewall profiles",
    command: "Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction, DefaultOutboundAction",
    purpose: "Shows firewall profile state and default actions.",
  },
  {
    label: "Defender status",
    command: "Get-MpComputerStatus",
    purpose: "Shows Defender health and protection state.",
  },
  {
    label: "Scheduled tasks",
    command: "Get-ScheduledTask | Select-Object TaskPath, TaskName, State",
    purpose: "Creates a task inventory.",
  },
  {
    label: "Recent System events",
    command: "Get-WinEvent -LogName System -MaxEvents 30 | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message",
    purpose: "Shows recent operating-system events.",
  },
];

const safetyExamples = [
  {
    title: "Inspect first",
    command: 'Get-Service -Name "ExampleService"',
    text: "Confirm the current state before changing a service.",
  },
  {
    title: "Use WhatIf when supported",
    command: 'Remove-ADGroupMember -Identity "Domain Admins" -Members "exampleuser" -WhatIf',
    text: "Preview supported changes without applying them.",
  },
  {
    title: "Verify immediately",
    command: 'Get-ScheduledTask -TaskName "ExampleTask" | Select-Object TaskName, State',
    text: "Confirm the expected result before moving on.",
  },
];


const deeperSections = [
  {
    title: "Service investigation",
    points: [
      "Use Get-Service for state and Get-CimInstance Win32_Service for StartMode, StartName, and PathName.",
      "Use -RequiredServices and -DependentServices before stopping or disabling anything.",
      "Compare service paths with installed software and the server role.",
      "Use Service Control Manager events to correlate unexpected starts, stops, and installations.",
    ],
  },
  {
    title: "Identity investigation",
    points: [
      "Use Get-LocalUser and Get-LocalGroupMember on applicable member servers.",
      "Use Get-ADUser, Get-ADGroupMember, and Get-ADPrincipalGroupMembership for domain identities.",
      "Do not treat old activity or unfamiliar names alone as proof an account is unnecessary.",
      "Verify service, scheduled-task, application, and role dependencies before changing an identity.",
    ],
  },
  {
    title: "Network exposure",
    points: [
      "Use Get-NetFirewallProfile to understand profile state before reviewing individual rules.",
      "Use Get-NetFirewallRule with associated port, address, application, and service filters.",
      "Use Get-NetTCPConnection to compare listening services with intended server roles.",
      "Narrow required exposure rather than disabling required services blindly.",
    ],
  },
  {
    title: "Evidence collection",
    points: [
      "Use Get-Date to record the collection time.",
      "Export selected objects to CSV when a before/after comparison is useful.",
      "Use Get-WinEvent with a relevant time window instead of collecting massive unfiltered logs.",
      "Preserve evidence before remediation when suspicious tasks, services, accounts, or files are involved.",
    ],
  },
];

const decisionCases = [
  {
    title: "Downloaded hardening script",
    evidence:
      "The script disables many services, removes accounts, changes firewall rules, and edits security settings in one run.",
    reasoning:
      "The commands may be defensive in isolation, but the script does not understand the current server role or scenario dependencies.",
    response:
      "Do not execute it as a block. Convert the script into an inspection checklist, verify each target, then apply only justified changes one at a time.",
  },
  {
    title: "Stopped service looks unnecessary",
    evidence:
      "Get-Service shows the service as Stopped and its display name is unfamiliar.",
    reasoning:
      "Demand-start and trigger-start services can be legitimate, especially on Windows Server.",
    response:
      "Inspect startup mode, executable path, required/dependent services, server-role ownership, and recent events before deciding whether to change it.",
  },
  {
    title: "Firewall rule name looks safe",
    evidence:
      "A rule has a trusted-looking display name, but the actual remote scope and profiles have not been reviewed.",
    reasoning:
      "Display names do not prove the rule is narrowly configured.",
    response:
      "Inspect the rule plus its port, address, service, application, profile, and direction filters before changing it.",
  },
  {
    title: "Local-group command fails on a DC",
    evidence:
      "A local account-management cmdlet does not behave as expected on a domain controller.",
    reasoning:
      "A domain controller uses Active Directory identities rather than the normal member-server local account model.",
    response:
      "Switch to AD-aware tools and cmdlets rather than forcing the local-account workflow.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Collect a baseline",
    text:
      "On fictional APP-SRV, record OS/build, installed roles, services, Administrators membership, shares, firewall profiles, Defender status, scheduled tasks, and recent System events.",
  },
  {
    number: "02",
    title: "Investigate a service",
    text:
      "Inspect one unfamiliar service using Get-Service, Win32_Service, dependency information, and Service Control Manager events.",
  },
  {
    number: "03",
    title: "Investigate a scheduled task",
    text:
      "Review the task principal, trigger, action path, state, and last-run information without executing it manually.",
  },
  {
    number: "04",
    title: "Review exposure",
    text:
      "Inspect RDP or WinRM firewall rules and compare them with the management path required by the scenario.",
  },
  {
    number: "05",
    title: "Make one controlled change",
    text:
      "Choose a clearly unnecessary or misconfigured item, record the original state, use the narrowest supported change, and avoid broad pipelines.",
  },
  {
    number: "06",
    title: "Verify the real outcome",
    text:
      "Re-run the relevant PowerShell checks, review fresh events, and test the required application, share, role, or remote-management function.",
  },
];

const troubleshootingCases = [
  {
    symptom: "Cmdlet not recognized",
    response:
      "Check spelling, then use Get-Command and Get-Module -ListAvailable. The required management module may not be installed.",
  },
  {
    symptom: "Access denied",
    response:
      "Confirm whether the operation truly needs elevation. Reopen PowerShell as administrator only if the task requires it.",
  },
  {
    symptom: "Output is overwhelming",
    response:
      "Filter early with Where-Object, select only relevant properties, limit event time ranges, and sort results.",
  },
  {
    symptom: "Setting changes but later reverts",
    response:
      "Investigate Group Policy, scheduled tasks, management agents, domain policy, replication, or application self-repair.",
  },
  {
    symptom: "Command succeeds but the role breaks",
    response:
      "Use the before-state, Event Viewer, dependency information, and client-side verification to identify which change affected the required service.",
  },
  {
    symptom: "GUI and PowerShell disagree",
    response:
      "Confirm you are viewing the same server, same policy scope, same firewall profile, same account context, and the effective rather than merely local setting.",
  },
];

const mistakes = [
  "Running copied hardening scripts without reading each command.",
  "Using elevated PowerShell for every task even when it is not required.",
  "Using broad modification pipelines that can affect many objects.",
  "Assuming a successful cmdlet means the server role is healthy.",
  "Ignoring module availability and server-role differences.",
  "Skipping a before-state baseline.",
];

const verification = [
  "The intended configuration change is visible in PowerShell.",
  "The GUI or effective policy is consistent when applicable.",
  "Required services are healthy.",
  "Required roles remain installed.",
  "Required accounts and privileges remain intact.",
  "Required firewall, Defender, share, task, DNS, and DHCP settings still work.",
  "No unexpected new Event Viewer errors appeared.",
  "Client-side tests still succeed for required network services.",
  "Before/after evidence is documented.",
  "No unrelated objects were changed.",
];

const reflection = [
  "Why should read-only commands usually come before change commands?",
  "What does WhatIf help you understand?",
  "Why can a command behave differently on a member server and a domain controller?",
  "Why is a successful PowerShell command not enough to prove the server is healthy?",
  "What should you record before running a high-impact command?",
  "Why are PowerShell objects more useful than plain text output?",
];

export default function PowerShellServerAdministrationPage() {
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
            <Link href="/cyberpatriot/windows-server/event-viewer-server-logs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/final-review-checklist" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Windows Server · Lesson 17
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            PowerShell for Server Administration
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use PowerShell for defensive inventory, evidence collection, filtering, verification, and carefully controlled Windows Server administration.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            PowerShell is most valuable when it helps you understand the server before you change it. Read-only inspection should come before broad automation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Learning objectives</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-black text-white">{section.title}</h2>
              <div className="mt-4 grid gap-3">
                {section.items.map((item) => (
                  <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Read-only baseline</p>
          <h2 className="mt-3 text-3xl font-black text-white">Inspect before changing</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {examples.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">{item.command}</code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Safer change patterns</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {safetyExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">{item.command}</code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Deeper administration review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Use PowerShell to answer a specific server question
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {deeperSections.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <div className="mt-4 grid gap-3">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            PowerShell decisions in server context
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When PowerShell does not behave as expected
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {troubleshootingCases.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Situation
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.response}</p>
              </div>
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
            Review APP-SRV with PowerShell
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Common mistakes</p>
            <div className="mt-5 grid gap-3">
              {mistakes.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <span className="font-black text-red-200">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Verification checklist</p>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Reflection</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {reflection.map((item, index) => (
              <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Question {index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Final Windows Server lesson</p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Windows Server Final Review Checklist</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Next, combine identity, policy, Defender, firewall, patching, roles, shares, remote administration, DNS, DHCP, tasks, logs, and PowerShell into one final server verification workflow.
          </p>
          <Link
              href="/cyberpatriot/windows-server/final-review-checklist"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 18 &rarr;
            </Link>
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
            <Link href="/cyberpatriot/windows-server/event-viewer-server-logs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/final-review-checklist" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
