import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review Windows Server update state without assuming every pending update should be installed immediately.",
  "Distinguish security, quality, cumulative, feature, driver, definition, and optional updates.",
  "Use Windows Update, Server Manager, SConfig, Event Viewer, and built-in command-line tools to inspect patch state.",
  "Understand how WSUS and Group Policy can control where a server gets updates and when they are installed.",
  "Plan reboots around required server roles such as Active Directory, DNS, DHCP, file services, and remote administration.",
  "Verify required services from both the server and client perspective after patching.",
];

const updateTypes = [
  {
    title: "Security updates",
    text:
      "Address vulnerabilities or security weaknesses. On modern Windows Server versions, security fixes are often delivered inside cumulative quality updates.",
  },
  {
    title: "Cumulative / quality updates",
    text:
      "Bundle multiple reliability and security fixes together. The newest cumulative update generally includes earlier fixes from that update line.",
  },
  {
    title: "Servicing updates",
    text:
      "Improve the components Windows uses to install and service updates. Their delivery model can vary by Windows Server release.",
  },
  {
    title: "Feature updates / upgrades",
    text:
      "Can change the operating-system version or major capabilities and deserve more planning than routine security patching.",
  },
  {
    title: "Driver updates",
    text:
      "Update hardware drivers. On a server, driver changes can affect storage, networking, virtualization, and availability.",
  },
  {
    title: "Definition / intelligence updates",
    text:
      "Refresh Microsoft Defender security intelligence and are normally much smaller and more frequent than operating-system patches.",
  },
  {
    title: "Optional updates",
    text:
      "May include preview fixes, drivers, or other non-mandatory packages. Do not install them just because they appear.",
  },
  {
    title: ".NET and application platform updates",
    text:
      "Can affect server applications that depend on .NET or other Windows components, so application verification matters afterward.",
  },
];

const toolPaths = [
  {
    title: "Windows Update",
    path:
      "Start → Settings → Windows Update",
    note:
      "On supported Windows Server versions with the Settings experience, review update status, pending restart state, update history, and available options.",
  },
  {
    title: "Server Manager",
    path:
      "Start → Server Manager → Local Server → Windows Update",
    note:
      "Provides a quick server-management view and can lead into the configured update experience.",
  },
  {
    title: "SConfig",
    path:
      "Open PowerShell or Command Prompt → sconfig",
    note:
      "Useful on Server Core and supported Windows Server installations for update-related administration. Follow the menu shown on the system instead of assuming the same option number on every release.",
  },
  {
    title: "Update history",
    path:
      "Settings → Windows Update → Update history",
    note:
      "Review recently installed updates and failed update attempts when the GUI is available.",
  },
  {
    title: "Event Viewer",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → WindowsUpdateClient → Operational",
    note:
      "Useful for troubleshooting scan, download, installation, and update-client problems.",
  },
  {
    title: "Group Policy update settings",
    path:
      "Group Policy Management → edit the intended GPO → Computer Configuration → Policies → Administrative Templates → Windows Components → Windows Update",
    note:
      "Use when update source, timing, restart behavior, or WSUS settings are controlled centrally.",
  },
];

const baselineQuestions = [
  "What Windows Server version and edition is installed?",
  "What roles and services are required by the scenario?",
  "Is the server a domain controller?",
  "Does the server use Microsoft Update directly, WSUS, or another authorized update-management system?",
  "Are updates currently pending installation?",
  "Is a restart pending?",
  "Were any updates recently installed?",
  "Did any recent updates fail?",
  "Which required services would be interrupted by a restart?",
  "How will each required role be tested after patching?",
];

const inspectionCommands = [
  {
    label: "OS and build information",
    command:
      "Get-ComputerInfo | Select-Object CsName, WindowsProductName, WindowsVersion, OsBuildNumber",
    purpose:
      "Records the server name, product, version, and build before patching.",
  },
  {
    label: "Installed hotfix history",
    command:
      "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 20 HotFixID, Description, InstalledOn, InstalledBy",
    purpose:
      "Shows a concise list of recently recorded hotfixes. Not every modern package is represented by Get-HotFix.",
  },
  {
    label: "Windows Update service",
    command:
      "Get-Service wuauserv",
    purpose:
      "Shows the state of the Windows Update service.",
  },
  {
    label: "BITS service",
    command:
      "Get-Service bits",
    purpose:
      "Shows the Background Intelligent Transfer Service state, which may support update downloads.",
  },
  {
    label: "Installed package inventory",
    command:
      "dism /online /get-packages /format:table",
    purpose:
      "Provides a broader package-level view of the running operating system.",
  },
  {
    label: "Recent update-client events",
    command:
      "Get-WinEvent -LogName 'Microsoft-Windows-WindowsUpdateClient/Operational' -MaxEvents 40 | Select-Object TimeCreated, Id, LevelDisplayName, Message",
    purpose:
      "Reviews recent Windows Update client activity and failures.",
  },
];

const sourceModels = [
  {
    title: "Microsoft Update / Windows Update",
    text:
      "The server retrieves updates from Microsoft's public update infrastructure when the environment allows it.",
    question:
      "Is direct Internet update access intended by the scenario or organization?",
  },
  {
    title: "WSUS",
    text:
      "Windows Server Update Services can centralize update approval and delivery inside an organization.",
    question:
      "Is the server intentionally configured to use an internal WSUS server?",
  },
  {
    title: "Group Policy",
    text:
      "GPOs can control update source, automatic update behavior, restart experience, and other Windows Update settings.",
    question:
      "Which GPO is actually applying to this server?",
  },
  {
    title: "Other enterprise tooling",
    text:
      "Some environments use additional authorized patch-management products or cloud management.",
    question:
      "Does the scenario require preserving that management path instead of bypassing it?",
  },
];

const wsusChecks = [
  {
    title: "Update source",
    text:
      "Determine whether the server is supposed to use Microsoft Update, WSUS, or another management platform.",
  },
  {
    title: "GPO source",
    text:
      "Use gpresult to identify whether update policy comes from a domain GPO.",
  },
  {
    title: "Approval state",
    text:
      "In a managed environment, an update may not appear because it has not been approved by the authorized update service.",
  },
  {
    title: "Connectivity",
    text:
      "The server must be able to reach the intended update source through DNS, networking, proxy, and firewall configuration.",
  },
  {
    title: "Client health",
    text:
      "Windows Update services and event logs can reveal scan, download, or installation problems.",
  },
  {
    title: "Do not bypass policy casually",
    text:
      "Changing a managed server to a different update source can violate the intended environment and complicate verification.",
  },
];

const restartRisks = [
  {
    title: "Domain controller",
    text:
      "A restart temporarily removes that domain controller from service. Confirm whether other domain controllers exist and verify AD/DNS health afterward.",
  },
  {
    title: "DNS server",
    text:
      "Clients may temporarily lose name resolution if they depend on this server exclusively.",
  },
  {
    title: "DHCP server",
    text:
      "Existing leases may continue temporarily, but new or renewing clients can be affected during downtime.",
  },
  {
    title: "File server",
    text:
      "Open SMB sessions and access to required shares are interrupted during restart.",
  },
  {
    title: "Application server",
    text:
      "Required applications may need additional startup time, dependent services, or credential validation after reboot.",
  },
  {
    title: "Remote administration",
    text:
      "RDP or WinRM becomes temporarily unavailable, so preserve a recovery path before restarting.",
  },
];

const patchDecisionModel = [
  {
    title: "Install now",
    description:
      "The update is appropriate, the scenario allows it, dependencies are understood, and a restart or service interruption can be safely verified.",
  },
  {
    title: "Install with planning",
    description:
      "The update is appropriate but may require a restart, affect a critical role, or require application/service verification afterward.",
  },
  {
    title: "Investigate first",
    description:
      "The update is optional, a driver change, a feature upgrade, failing repeatedly, or controlled by an unfamiliar enterprise policy.",
  },
  {
    title: "Defer",
    description:
      "The update is outside the scenario, introduces unnecessary risk during the current work window, or cannot be safely verified yet.",
  },
];

const prePatchChecklist = [
  "Read the scenario and identify all required roles.",
  "Record the current OS version and build.",
  "Record current role and service health.",
  "Confirm the intended update source.",
  "Review recent update history.",
  "Check whether a restart is already pending.",
  "Record required RDP / WinRM access.",
  "Record required DNS, DHCP, SMB, AD, or application functionality.",
  "Confirm you have a verification plan for every required role.",
  "Avoid changing update policy just to make an update appear faster.",
];

const postPatchVerification = [
  {
    area: "Operating system",
    check:
      "Confirm the server boots normally and the expected OS/build state is present.",
  },
  {
    area: "Event Viewer",
    check:
      "Review System, Application, WindowsUpdateClient, and role-specific logs for new failures.",
  },
  {
    area: "Active Directory",
    check:
      "If the server is a domain controller, confirm domain authentication and directory-related services are healthy.",
  },
  {
    area: "DNS",
    check:
      "Resolve required names from an authorized client.",
  },
  {
    area: "DHCP",
    check:
      "Confirm a client can obtain or renew an address when DHCP is required.",
  },
  {
    area: "SMB",
    check:
      "Open required shares from an authorized client and confirm expected permissions.",
  },
  {
    area: "RDP / WinRM",
    check:
      "Reconnect through the required management path.",
  },
  {
    area: "Applications",
    check:
      "Launch or test each scenario-required server application.",
  },
  {
    area: "Defender / firewall",
    check:
      "Confirm security controls remain in the intended state.",
  },
  {
    area: "Update state",
    check:
      "Confirm installation status and whether another restart remains pending.",
  },
];

const troubleshooting = [
  {
    symptom: "Windows Update reports a failure.",
    checks:
      "Review WindowsUpdateClient Operational events, update source, network connectivity, disk space, time, service state, and whether enterprise policy is controlling the client.",
  },
  {
    symptom: "The server cannot find updates.",
    checks:
      "Confirm whether the system should use WSUS or Microsoft Update, review applied Group Policy, test DNS/network access, and inspect update-client events.",
  },
  {
    symptom: "Update installs but requires restart.",
    checks:
      "Treat the restart as a separate change. Document required services, preserve administration access, reboot deliberately, then run the full verification plan.",
  },
  {
    symptom: "A role stops working after patching.",
    checks:
      "Review service state, dependencies, role-specific event logs, firewall state, application compatibility, and update timing before rolling back or changing unrelated settings.",
  },
  {
    symptom: "Update settings revert after you change them.",
    checks:
      "Domain Group Policy or enterprise management may own the configuration. Use gpresult and inspect the controlling policy.",
  },
  {
    symptom: "A driver update appears as optional.",
    checks:
      "Do not install automatically. Confirm the hardware need, current driver health, vendor/support context, and rollback plan.",
  },
];

const decisionCases = [
  {
    title: "Domain controller has a pending cumulative update",
    evidence:
      "The update is appropriate, but the server provides required AD DS and DNS services and needs a restart.",
    reasoning:
      "Patching is valuable, but the restart affects critical services.",
    response:
      "Record AD/DNS health, confirm the authorized maintenance window and recovery path, install when justified, restart deliberately, then verify domain logon and DNS from a client.",
  },
  {
    title: "Optional network driver update appears",
    evidence:
      "Networking currently works and the scenario does not require a driver change.",
    reasoning:
      "A driver update can affect server connectivity without providing immediate security value.",
    response:
      "Classify it as Investigate or Defer unless there is a clear authorized reason to install it.",
  },
  {
    title: "Server cannot reach Microsoft Update",
    evidence:
      "The server is domain-joined and Group Policy references an internal update service.",
    reasoning:
      "The failure may be expected because the system is intentionally managed through WSUS.",
    response:
      "Preserve the intended update source, verify WSUS connectivity and policy, and do not bypass centralized management casually.",
  },
  {
    title: "Update installed successfully but application will not start",
    evidence:
      "Windows Update reports success, but a required application service is stopped.",
    reasoning:
      "Patch success does not equal application success.",
    response:
      "Review the application service, dependencies, System/Application logs, credentials, ports, and documented compatibility before making unrelated changes.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional server role",
    text:
      "DC-PRACTICE provides Active Directory and DNS. Morgan requires RDP administration. The server is configured to receive approved updates from the organization's authorized update source.",
  },
  {
    number: "02",
    title: "Build the pre-patch baseline",
    text:
      "Record OS/build information, AD/DNS health, RDP access, Defender/firewall state, recent update history, Windows Update service state, and relevant event logs.",
  },
  {
    number: "03",
    title: "Review the pending update",
    text:
      "A cumulative quality update is pending and requires a restart. An optional driver update also appears.",
  },
  {
    number: "04",
    title: "Prioritize",
    text:
      "Treat the cumulative update as Install with planning. Treat the optional driver as Investigate or Defer because networking is currently healthy.",
  },
  {
    number: "05",
    title: "Patch and restart deliberately",
    text:
      "Use the authorized update path, preserve the management plan, install the justified update, and restart only when you are ready to perform immediate verification.",
  },
  {
    number: "06",
    title: "Verify from a client",
    text:
      "Confirm domain authentication, DNS resolution, Morgan's RDP access, Defender/firewall state, role services, and update status after restart.",
  },
];

const commonMistakes = [
  {
    title: "Installing every optional update",
    text:
      "Optional does not mean required. Drivers and previews can introduce unnecessary risk.",
  },
  {
    title: "Patching before identifying the server role",
    text:
      "You need to know what must be tested after the update and restart.",
  },
  {
    title: "Bypassing WSUS or policy",
    text:
      "Managed update sources may be intentional and should not be replaced casually.",
  },
  {
    title: "Treating restart as an afterthought",
    text:
      "Many server outages happen after reboot because dependencies were never verified.",
  },
  {
    title: "Using only Get-HotFix",
    text:
      "It is useful but does not represent every modern Windows package or update state.",
  },
  {
    title: "Stopping after Windows says the update succeeded",
    text:
      "The real success condition is that required roles, services, applications, and administration still work.",
  },
];

const checklist = [
  "Identify Windows Server version and build.",
  "Identify all required roles and applications.",
  "Confirm the intended update source.",
  "Review update history and pending updates.",
  "Check Windows Update and BITS service state.",
  "Review WindowsUpdateClient Operational events.",
  "Use Get-HotFix as one source, not the only source.",
  "Treat feature upgrades and optional drivers cautiously.",
  "Plan any required restart separately.",
  "Preserve RDP / WinRM or another recovery path.",
  "Verify required roles from authorized clients after patching.",
  "Document the final update and restart state.",
];

const reflection = [
  "Why should patching start with the server's role rather than the Windows Update screen?",
  "Why is a restart a separate operational risk from installing the update itself?",
  "Why might a server intentionally be unable to use Microsoft Update directly?",
  "Why is Get-HotFix useful but incomplete?",
  "What makes a driver update different from a routine security-quality update?",
  "What should be verified after patching a domain controller that also hosts DNS?",
];

export default function WindowsUpdatePatchManagementServerPage() {
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
            <Link href="/cyberpatriot/windows-server/windows-defender-firewall" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/roles-features-required-services" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 09
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Update &amp; Patch Management
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Patch Windows Server without treating updates as a blind
                checklist. Understand the update source, server role, restart
                risk, and post-update verification plan first.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A patch is successful only when the operating system is updated
                and the required server roles, services, applications, and
                management paths still work afterward.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Update categories</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key concern</span>
                  <span className="font-bold text-white">Restart risk</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Managed source</span>
                  <span className="font-bold text-white">WSUS / GPO aware</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Patched + functional</span>
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
              Patch state is part of server security
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Missing important fixes increases risk, but installing high-impact
              updates without understanding dependencies can create outages.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Restart planning is part of patch management
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Domain services, DNS, DHCP, file shares, applications, and remote
              administration can all disappear temporarily during reboot.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Never restart a required server without knowing exactly what you will verify when it comes back.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Update categories
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Not every update carries the same risk
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {updateTypes.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review Windows Update
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPaths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Baseline questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions before patching
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {baselineQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Built-in inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record update state before changing it
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
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
          Update-source models
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Know where the server is supposed to get updates
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sourceModels.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-300">{item.question}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            WSUS and policy awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Managed updates should stay managed
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {wsusChecks.map((item) => (
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
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Restart risk
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What a reboot can interrupt
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {restartRisks.map((item) => (
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
          Patch decisions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Install now, plan, investigate, or defer
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {patchDecisionModel.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Pre-patch checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten things to record first
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {prePatchChecklist.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Post-patch verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove required services survived the update
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {postPatchVerification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.check}</p>
              </div>
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
            When update or post-restart behavior goes wrong
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Symptom
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Check
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.checks}</p>
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
            Patch decisions in server context
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
            Patch DC-PRACTICE safely
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
          Patch-management mistakes that create unnecessary risk
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commonMistakes.map((item) => (
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
              Test your patch-management reasoning
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
              Before leaving patch review
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
                Roles, Features &amp; Required Services
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, connect Windows Server roles and features to the services
                they depend on so you can investigate unfamiliar components
                without disabling critical infrastructure.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/roles-features-required-services"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 10 &rarr;
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
            <Link href="/cyberpatriot/windows-server/windows-defender-firewall" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/roles-features-required-services" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
