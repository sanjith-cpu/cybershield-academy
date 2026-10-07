import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain where PowerShell is most useful during defensive Windows administration.",
  "Use read-only inventory commands before making configuration changes.",
  "Filter, sort, and select results so large system inventories become useful evidence.",
  "Recognize the difference between inspection, controlled change, and bulk automation.",
  "Use PowerShell to review users, services, firewall, Defender, updates, tasks, and event logs efficiently.",
  "Verify the result of every meaningful administrative change instead of assuming the command worked as intended.",
];

const principles = [
  {
    title: "Inspect before changing",
    text:
      "Start with read-only commands that show the current state. A command should answer a specific question before it modifies anything.",
  },
  {
    title: "Narrow the target",
    text:
      "Avoid commands that affect large groups of users, services, files, or rules unless the scope is fully understood.",
  },
  {
    title: "Prefer explicit filters",
    text:
      "Use names, properties, paths, states, and other filters so the command acts on the exact object you intend.",
  },
  {
    title: "Record important output",
    text:
      "Capture relevant evidence before high-impact changes, especially for accounts, services, tasks, firewall rules, and event logs.",
  },
  {
    title: "Change one thing at a time",
    text:
      "Small changes are easier to verify and troubleshoot than broad scripts that alter many controls at once.",
  },
  {
    title: "Re-query after change",
    text:
      "The same command family used for inspection can often verify that the intended state actually exists afterward.",
  },
];

const pipelineConcepts = [
  {
    title: "Get",
    text:
      "Retrieve objects from the system, such as users, services, firewall rules, scheduled tasks, or events.",
  },
  {
    title: "Where-Object",
    text:
      "Filter objects based on properties such as status, name, startup mode, profile, or account state.",
  },
  {
    title: "Select-Object",
    text:
      "Choose only the properties that matter so output is easier to read and compare.",
  },
  {
    title: "Sort-Object",
    text:
      "Order results by properties such as time, state, display name, or install date.",
  },
  {
    title: "Format-Table / Format-List",
    text:
      "Present selected output in a useful layout for review. Formatting changes presentation, not the underlying object.",
  },
  {
    title: "Export-Csv",
    text:
      "Save structured inventory output for later comparison or documentation in an authorized practice environment.",
  },
];

const inventoryExamples = [
  {
    title: "Local users",
    command: "Get-LocalUser",
    purpose:
      "Review account names, enabled state, and password-related properties.",
  },
  {
    title: "Local administrators",
    command: 'Get-LocalGroupMember -Group "Administrators"',
    purpose:
      "Review privileged local group membership.",
  },
  {
    title: "Services",
    command: "Get-Service | Sort-Object Status, DisplayName",
    purpose:
      "Review running and stopped services without changing them.",
  },
  {
    title: "Service details",
    command:
      'Get-CimInstance Win32_Service | Select-Object Name, DisplayName, State, StartMode, StartName, PathName',
    purpose:
      "Adds startup type, account context, and executable path to service review.",
  },
  {
    title: "Firewall profiles",
    command: "Get-NetFirewallProfile",
    purpose:
      "Review Domain, Private, and Public firewall profile state.",
  },
  {
    title: "Enabled inbound rules",
    command:
      'Get-NetFirewallRule -Enabled True -Direction Inbound | Select-Object DisplayName, Action, Profile',
    purpose:
      "Build a quick view of active inbound firewall rules.",
  },
  {
    title: "Defender status",
    command: "Get-MpComputerStatus",
    purpose:
      "Review Defender protection state and health information.",
  },
  {
    title: "Defender preferences",
    command: "Get-MpPreference",
    purpose:
      "Inspect Defender exclusions and protection-related preferences.",
  },
];

const filterExamples = [
  {
    title: "Find disabled local users",
    command: "Get-LocalUser | Where-Object {$_.Enabled -eq $false}",
    explanation:
      "Filters the local user inventory to accounts that are currently disabled.",
  },
  {
    title: "Find running services",
    command: "Get-Service | Where-Object {$_.Status -eq 'Running'}",
    explanation:
      "Shows only services currently running.",
  },
  {
    title: "Find automatic services",
    command:
      'Get-CimInstance Win32_Service | Where-Object {$_.StartMode -eq "Auto"}',
    explanation:
      "Shows services configured for automatic startup.",
  },
  {
    title: "Find enabled inbound allow rules",
    command:
      'Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True" -and $_.Direction -eq "Inbound" -and $_.Action -eq "Allow"}',
    explanation:
      "Narrows firewall review to active inbound allow rules.",
  },
];

const defensiveAreas = [
  {
    title: "Identity",
    items: [
      "Get-LocalUser",
      "Get-LocalGroup",
      "Get-LocalGroupMember",
    ],
    value:
      "Quickly review authorized users, privileged groups, and unexpected membership.",
  },
  {
    title: "Protection",
    items: [
      "Get-MpComputerStatus",
      "Get-MpPreference",
      "Get-NetFirewallProfile",
      "Get-NetFirewallRule",
    ],
    value:
      "Review Defender and firewall posture from one console.",
  },
  {
    title: "System",
    items: [
      "Get-Service",
      "Get-CimInstance Win32_Service",
      "Get-HotFix",
      "Get-ComputerInfo",
    ],
    value:
      "Review services, updates, Windows version, and core system state.",
  },
  {
    title: "Persistence",
    items: [
      "Get-ScheduledTask",
      "Get-ScheduledTaskInfo",
      "Get-CimInstance Win32_StartupCommand",
    ],
    value:
      "Review recurring execution and startup behavior without opening multiple tools.",
  },
  {
    title: "Evidence",
    items: [
      "Get-WinEvent",
      "Get-Acl",
      "Get-ItemProperty",
    ],
    value:
      "Inspect logs, permissions, and configuration evidence with repeatable queries.",
  },
];

const safeChangeExamples = [
  {
    title: "Disable an unnecessary local user",
    command: 'Disable-LocalUser -Name "exampleuser"',
    caution:
      "Use only after confirming the account is not required by the scenario or a service.",
    verify:
      'Get-LocalUser -Name "exampleuser"',
  },
  {
    title: "Remove a user from Administrators",
    command:
      'Remove-LocalGroupMember -Group "Administrators" -Member "exampleuser"',
    caution:
      "Confirm the user still needs the account but does not need administrative privilege.",
    verify:
      'Get-LocalGroupMember -Group "Administrators"',
  },
  {
    title: "Start a required service",
    command: 'Start-Service -Name "Spooler"',
    caution:
      "Use only when the service is required and its configuration is understood.",
    verify:
      'Get-Service -Name "Spooler"',
  },
  {
    title: "Disable an unnecessary scheduled task",
    command: 'Disable-ScheduledTask -TaskName "ExampleTask"',
    caution:
      "Preserve task evidence first if the task may matter to forensics.",
    verify:
      'Get-ScheduledTask -TaskName "ExampleTask"',
  },
];

const bulkRiskExamples = [
  {
    title: "Disable every stopped service",
    why:
      "Stopped does not mean unnecessary. Many services start only when needed.",
  },
  {
    title: "Remove every unfamiliar administrator",
    why:
      "Some accounts may be required by the scenario or an application. Investigate first.",
  },
  {
    title: "Delete every scheduled task outside Microsoft folders",
    why:
      "Legitimate applications often create their own tasks.",
  },
  {
    title: "Block every inbound firewall rule",
    why:
      "Required RDP, file sharing, management, or applications can depend on specific rules.",
  },
  {
    title: "Remove every Defender exclusion",
    why:
      "Some narrow exclusions may support required applications.",
  },
  {
    title: "Apply one giant hardening script",
    why:
      "Bulk changes are difficult to attribute, troubleshoot, and verify during a timed competition.",
  },
];

const outputTechniques = [
  {
    title: "Select only useful properties",
    command:
      "Get-LocalUser | Select-Object Name, Enabled, PasswordRequired, PasswordExpires",
    text:
      "Removes visual noise and keeps the columns that answer the question.",
  },
  {
    title: "Sort by time",
    command:
      "Get-WinEvent -LogName System -MaxEvents 50 | Sort-Object TimeCreated -Descending",
    text:
      "Keeps recent evidence easy to follow.",
  },
  {
    title: "Export an inventory",
    command:
      'Get-Service | Select-Object Name, DisplayName, Status | Export-Csv ".\\services-inventory.csv" -NoTypeInformation',
    text:
      "Creates a structured snapshot that can support documentation or before/after comparison.",
  },
  {
    title: "Save plain text when needed",
    command:
      'Get-LocalGroupMember -Group "Administrators" | Out-File ".\\admins-before.txt"',
    text:
      "Useful for preserving a small before-state record in an authorized lab.",
  },
];

const errorHandling = [
  {
    title: "Command not found",
    text:
      "Confirm the cmdlet exists on the Windows version and edition you are using, and that the relevant module or feature is available.",
  },
  {
    title: "Access denied",
    text:
      "Some administrative queries require an elevated PowerShell session. Do not assume lack of access means the object does not exist.",
  },
  {
    title: "No output",
    text:
      "A filter may be too narrow or the object name may be wrong. Remove filters gradually and inspect the underlying object.",
  },
  {
    title: "Property missing",
    text:
      "Different cmdlets return different object types. Use Get-Member or Format-List * in a lab to inspect available properties.",
  },
];

const verificationPattern = [
  {
    title: "Query before",
    text:
      "Record the exact object and current state.",
  },
  {
    title: "Apply one controlled change",
    text:
      "Change only the confirmed weakness.",
  },
  {
    title: "Query after",
    text:
      "Re-run a read-only inspection command to confirm the configuration state.",
  },
  {
    title: "Test the function",
    text:
      "Verify the related user, service, application, network path, or security control still works.",
  },
  {
    title: "Check logs",
    text:
      "Look for errors or expected evidence after high-impact changes.",
  },
  {
    title: "Document",
    text:
      "Record what changed, why, and what verification proved.",
  },
];

const decisionCases = [
  {
    title: "Unexpected administrator account",
    evidence:
      "PowerShell shows an unfamiliar account in the local Administrators group.",
    reasoning:
      "The finding is important, but the account must be compared with the scenario and service dependencies before removal.",
    response:
      "Inspect the account, document membership, identify purpose, then remove only the unnecessary privilege or disable the account if evidence supports it.",
  },
  {
    title: "Automatic service with unusual path",
    evidence:
      "A service inventory shows an automatic service running from a user-profile directory.",
    reasoning:
      "The path is unusual enough to investigate, but the service may belong to a legitimate application.",
    response:
      "Review service name, account, executable, dependencies, installed software, and event evidence before making a change.",
  },
  {
    title: "Broad firewall exposure",
    evidence:
      "A filtered rule list shows a required service allowed inbound on all profiles.",
    reasoning:
      "The service may be required while the scope is excessive.",
    response:
      "Inspect the specific rule and remote scope, narrow only what is justified, then test the required service.",
  },
  {
    title: "Suspicious scheduled task",
    evidence:
      "A task query shows a logon-triggered task that launches a script from an unusual user path.",
    reasoning:
      "This is an investigation lead, not automatic proof of malicious persistence.",
    response:
      "Preserve the task details, correlate with logs and file evidence, then disable or remove only when justified.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "Morgan is the authorized administrator. RDP, Defender, Windows Update, and a project share are required. One unknown local administrator and one unknown scheduled task need review.",
  },
  {
    number: "02",
    title: "Build an inventory",
    text:
      "Use read-only commands to review local users, administrators, firewall profiles, Defender status, services, tasks, and recent events.",
  },
  {
    number: "03",
    title: "Filter the findings",
    text:
      "Narrow the output to the unexpected administrator, the unusual task, and the specific services or rules related to required functionality.",
  },
  {
    number: "04",
    title: "Preserve evidence",
    text:
      "Save the relevant before-state output for the administrator group and the scheduled task before making any change.",
  },
  {
    number: "05",
    title: "Apply controlled remediation",
    text:
      "Remove only the confirmed unnecessary privilege and disable the suspicious task after evidence has been preserved.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Re-query the administrator group and task state, then test RDP, Defender, firewall, and the required project share.",
  },
];

const mistakes = [
  {
    title: "Running commands without reading output",
    text:
      "PowerShell is fast enough to make mistakes quickly. Read the object state before changing it.",
  },
  {
    title: "Copying large scripts blindly",
    text:
      "A script may assume a different Windows edition, network, scenario, or application set.",
  },
  {
    title: "Using broad wildcards",
    text:
      "Wildcards can match far more objects than expected. Prefer explicit names and filters.",
  },
  {
    title: "Skipping verification",
    text:
      "A command completing without an error does not prove the system is secure or functional.",
  },
  {
    title: "Treating no output as proof",
    text:
      "Permissions, filters, or object types may explain empty output.",
  },
  {
    title: "Mixing evidence collection and destructive changes",
    text:
      "Gather and preserve evidence first, then remediate.",
  },
];

const checklist = [
  "Start with read-only inventory commands.",
  "Use Select-Object to keep output focused.",
  "Use Where-Object to narrow large result sets.",
  "Use Sort-Object when order matters.",
  "Preserve important before-state evidence.",
  "Target one confirmed object at a time.",
  "Avoid broad wildcards and bulk disable/remove commands.",
  "Re-run inspection commands after every high-impact change.",
  "Test the related user, service, application, or network path.",
  "Check Event Viewer or Get-WinEvent when a change causes errors.",
  "Document what changed and why.",
];

const reflection = [
  "Why is PowerShell especially useful for defensive inventory?",
  "What is the difference between Get, Where-Object, and Select-Object?",
  "Why can a large hardening script be risky during a competition?",
  "What should happen before and after a destructive PowerShell command?",
  "Why should empty output not automatically be treated as proof that nothing exists?",
  "What makes a PowerShell workflow defensive rather than blind automation?",
];

export default function PowerShellDefensiveAdministrationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/event-viewer-windows-logs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/windows-forensics-evidence-preservation" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 14
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                PowerShell for Defensive Administration
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use PowerShell to inventory Windows quickly, filter evidence,
                verify security state, and make small controlled changes without
                turning automation into blind hardening.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                PowerShell is most valuable when it makes reasoning faster and
                more repeatable. The defensive pattern is simple: inspect,
                narrow, change carefully, re-query, test, and document.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core principles</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Pipeline concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary skill</span>
                  <span className="font-bold text-white">Fast verified inventory</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Controlled administration</span>
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
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              PowerShell should make your reasoning more precise
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The best commands answer a clear question and return structured
              objects that can be filtered, sorted, compared, and verified.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Automation warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Fast commands can create fast mistakes
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Bulk scripts can disable required services, remove valid users, or
              break network access before the team knows what changed.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Avoid broad destructive automation unless every target, dependency,
              and verification step is understood.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Defensive PowerShell principles
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six habits that keep command-line work controlled
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Pipeline basics
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Turn large inventories into useful evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pipelineConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          High-value inventory commands
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Review major Windows security areas quickly
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {inventoryExamples.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.command}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Filtering examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask smaller questions of large inventories
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {filterExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Defensive administration map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          One shell, multiple security domains
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {defensiveAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 space-y-2">
                {item.items.map((cmd) => (
                  <code
                    key={cmd}
                    className="block rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-cyan-200"
                  >
                    {cmd}
                  </code>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Controlled change examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Every change needs a matching verification command
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {safeChangeExamples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Change
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>

                <p className="mt-4 text-sm leading-7 text-slate-400">{item.caution}</p>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Verify
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-emerald-200">
                  {item.verify}
                </code>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Bulk-change risks
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Commands that sound efficient but can create major problems
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bulkRiskExamples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Output techniques
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Make the evidence readable and reusable
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {outputTechniques.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Error handling
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          When the command does not behave as expected
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {errorHandling.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A repeatable defensive PowerShell rhythm
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verificationPattern.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
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
            PowerShell-assisted reasoning in context
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
            Use PowerShell to investigate before hardening
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
          PowerShell habits that create avoidable problems
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
              Test your defensive PowerShell reasoning
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before leaving command-line administration
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
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Windows Forensics &amp; Evidence Preservation
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to preserve and correlate Windows evidence
                before remediation so forensic questions can be answered with
                defensible facts instead of assumptions.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/windows-forensics-evidence-preservation"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 15 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/event-viewer-windows-logs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/windows-forensics-evidence-preservation" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
