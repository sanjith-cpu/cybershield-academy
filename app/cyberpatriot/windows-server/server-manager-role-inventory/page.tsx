import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use Server Manager to identify installed roles, features, services, and basic server health.",
  "Distinguish a server role from a Windows feature, service, management tool, and application.",
  "Classify installed components as required, unnecessary, or investigate based on scenario evidence.",
  "Recognize why removing a role is a higher-impact action than stopping a single service.",
  "Use PowerShell to inventory installed roles and features without changing them.",
  "Verify that required roles are healthy before and after hardening.",
];

const coreTerms = [
  {
    title: "Role",
    text:
      "A major server responsibility such as Active Directory Domain Services, DNS Server, DHCP Server, or File and Storage Services.",
  },
  {
    title: "Role service",
    text:
      "A smaller component inside a role that provides a specific capability.",
  },
  {
    title: "Feature",
    text:
      "A Windows capability that supports the operating system, administration, applications, or server roles.",
  },
  {
    title: "Service",
    text:
      "A background process that may support a role, feature, application, or Windows itself.",
  },
  {
    title: "Management tool",
    text:
      "An administrative console or module used to configure a role or feature.",
  },
  {
    title: "Application",
    text:
      "Software installed on the server that may depend on Windows roles, services, accounts, networking, or storage.",
  },
];

const toolPaths = [
  {
    title: "Server Manager",
    path: "Start → Server Manager",
    lookFor:
      "Dashboard health, Local Server, All Servers, installed roles, alerts, and role-specific management links.",
  },
  {
    title: "Add Roles and Features",
    path: "Server Manager → Manage → Add Roles and Features",
    lookFor:
      "Use the wizard to understand which roles and features are installed. Do not install or remove items just to explore.",
  },
  {
    title: "Remove Roles and Features",
    path: "Server Manager → Manage → Remove Roles and Features",
    lookFor:
      "Use only when the scenario and dependency review clearly justify removing a role or feature.",
  },
  {
    title: "Services",
    path: "Win + R → services.msc",
    lookFor:
      "Service name, status, startup type, dependencies, and whether the service supports a required role.",
  },
  {
    title: "Computer Management",
    path: "Win + R → compmgmt.msc",
    lookFor:
      "Shared folders, Task Scheduler, Event Viewer, storage, devices, and local administration context.",
  },
  {
    title: "PowerShell",
    path: "Start → search PowerShell → Run as administrator when required",
    lookFor:
      "Fast read-only inventory using Get-WindowsFeature, Get-Service, Get-CimInstance, and role-specific cmdlets.",
  },
];

const serverManagerAreas = [
  {
    title: "Dashboard",
    text:
      "Shows a high-level summary of server health, role groups, events, services, performance, and manageability.",
  },
  {
    title: "Local Server",
    text:
      "Shows computer name, domain/workgroup status, firewall state, remote management, update status, NIC information, time zone, and related configuration.",
  },
  {
    title: "All Servers",
    text:
      "Provides a broader view when Server Manager is managing multiple systems.",
  },
  {
    title: "Role pages",
    text:
      "Installed roles may appear as dedicated navigation items with role-specific health and management information.",
  },
];

const inventoryQuestions = [
  "What server roles are installed?",
  "Which roles are explicitly required by the scenario?",
  "Which role services are installed under each role?",
  "Which features support those roles?",
  "Which services are running because of those roles?",
  "Which role-specific firewall rules are enabled?",
  "Which administrators or service accounts are tied to the role?",
  "Which clients depend on the role?",
  "What would stop working if the role were removed?",
  "How will the role be tested after a hardening change?",
];

const roleExamples = [
  {
    role: "Active Directory Domain Services",
    purpose:
      "Provides directory services, domain authentication, users, groups, computers, and domain administration.",
    dependencies:
      "Often depends heavily on DNS, domain-controller services, time consistency, networking, and directory-related services.",
    verify:
      "Confirm domain authentication and directory operations still work.",
  },
  {
    role: "DNS Server",
    purpose:
      "Provides name resolution for clients and may be critical to Active Directory.",
    dependencies:
      "DNS Server service, zones, records, forwarding, firewall rules, and network connectivity.",
    verify:
      "Resolve required names from an authorized client.",
  },
  {
    role: "DHCP Server",
    purpose:
      "Provides IP configuration to clients through scopes, options, exclusions, and reservations.",
    dependencies:
      "DHCP Server service, authorization when applicable, network reachability, scopes, and firewall rules.",
    verify:
      "Confirm a client can obtain or renew an address.",
  },
  {
    role: "File and Storage Services",
    purpose:
      "Provides SMB shares, file access, storage management, and related file-server capabilities.",
    dependencies:
      "SMB, Server service, share and NTFS permissions, storage availability, user/group identity, and firewall rules.",
    verify:
      "Confirm an authorized user can access required shares.",
  },
  {
    role: "Web Server (IIS)",
    purpose:
      "Hosts websites or web applications when required by the scenario.",
    dependencies:
      "IIS role services, application pools, certificates, networking, firewall rules, files, and application dependencies.",
    verify:
      "Confirm the required site or application responds as expected.",
  },
  {
    role: "Remote Access / management components",
    purpose:
      "May support remote administration or routing depending on scenario and installed components.",
    dependencies:
      "Users, rights, services, firewall rules, network reachability, and authentication.",
    verify:
      "Test only the required remote-management path.",
  },
];

const classifications = [
  {
    title: "Required",
    description:
      "The scenario explicitly requires the role, or another required function clearly depends on it.",
    action:
      "Protect it, harden around it, and verify it after every related change.",
  },
  {
    title: "Unnecessary",
    description:
      "The role or feature is clearly not required and evidence shows no required dependency.",
    action:
      "Consider removal only after documenting the dependency review and verification plan.",
  },
  {
    title: "Investigate",
    description:
      "The purpose is unclear, the scenario is silent, or dependencies are not yet understood.",
    action:
      "Inspect services, applications, events, firewall rules, and client usage before deciding.",
  },
];

const powerShellChecks = [
  {
    label: "Installed roles and features",
    command:
      "Get-WindowsFeature | Where-Object {$_.Installed -eq $true} | Select-Object DisplayName, Name, InstallState",
    purpose:
      "Creates a readable list of currently installed Windows Server roles and features.",
  },
  {
    label: "All role and feature states",
    command:
      "Get-WindowsFeature | Select-Object DisplayName, Name, InstallState",
    purpose:
      "Shows installed and available components for comparison.",
  },
  {
    label: "Running services",
    command:
      "Get-Service | Where-Object {$_.Status -eq 'Running'} | Sort-Object DisplayName",
    purpose:
      "Shows currently running services that may support Windows or installed roles.",
  },
  {
    label: "Service details",
    command:
      "Get-CimInstance Win32_Service | Select-Object Name, DisplayName, State, StartMode, StartName, PathName",
    purpose:
      "Adds service account and executable-path context.",
  },
  {
    label: "Role-specific events",
    command:
      "Get-WinEvent -LogName System -MaxEvents 50 | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message",
    purpose:
      "Provides recent system evidence that may reveal service or role failures.",
  },
];

const dependencyReview = [
  {
    title: "Service dependency",
    question:
      "Which Windows services start, stop, or fail when this role changes?",
  },
  {
    title: "Network dependency",
    question:
      "Which clients, ports, firewall rules, or protocols are required?",
  },
  {
    title: "Identity dependency",
    question:
      "Which users, groups, service accounts, or domain identities depend on the role?",
  },
  {
    title: "Application dependency",
    question:
      "Does an installed application need the role, feature, database, or service?",
  },
  {
    title: "Policy dependency",
    question:
      "Does Group Policy, domain configuration, or local policy affect the role?",
  },
  {
    title: "Storage dependency",
    question:
      "Does the role depend on a specific volume, folder, share, permission set, or database?",
  },
];

const highRiskChanges = [
  {
    title: "Removing AD DS",
    risk:
      "Can fundamentally change or destroy domain-controller functionality and should never be treated as routine cleanup.",
  },
  {
    title: "Removing DNS from a domain controller",
    risk:
      "Can break domain name resolution and Active Directory functionality if clients depend on that DNS service.",
  },
  {
    title: "Removing DHCP",
    risk:
      "Can stop clients from receiving IP configuration when no replacement DHCP service exists.",
  },
  {
    title: "Removing File Services",
    risk:
      "Can break required SMB shares, storage management, or application dependencies.",
  },
  {
    title: "Stopping role services blindly",
    risk:
      "A stopped service may cause authentication, networking, application, or management failures immediately.",
  },
  {
    title: "Changing firewall rules without role context",
    risk:
      "Required roles may become unreachable even while the role itself remains installed and healthy locally.",
  },
];

const verificationMatrix = [
  {
    role: "AD DS",
    serverCheck:
      "Review domain-controller services, directory-related events, and role health.",
    clientCheck:
      "Confirm an authorized domain user can authenticate.",
  },
  {
    role: "DNS",
    serverCheck:
      "Confirm DNS Server service and zone health.",
    clientCheck:
      "Resolve required internal or external names from a client.",
  },
  {
    role: "DHCP",
    serverCheck:
      "Confirm DHCP Server service and scope state.",
    clientCheck:
      "Renew a lease from an authorized client.",
  },
  {
    role: "File Services",
    serverCheck:
      "Confirm SMB share and Server service state.",
    clientCheck:
      "Open the required share with an authorized user.",
  },
  {
    role: "IIS",
    serverCheck:
      "Confirm site, application pool, bindings, and relevant services.",
    clientCheck:
      "Open the required website or application from a client.",
  },
  {
    role: "Remote Administration",
    serverCheck:
      "Confirm service, user authorization, policy, and firewall state.",
    clientCheck:
      "Connect through the scenario-required management path.",
  },
];

const decisionCases = [
  {
    title: "DNS role is installed but the scenario never mentions it",
    evidence:
      "The server is also a domain controller.",
    reasoning:
      "Active Directory commonly depends on DNS, so scenario silence does not automatically make DNS unnecessary.",
    response:
      "Classify DNS as Protect/Investigate, confirm its relationship to AD DS and client name resolution, and do not remove it blindly.",
  },
  {
    title: "DHCP role is installed and another DHCP server exists",
    evidence:
      "The scenario says this server should only provide file services.",
    reasoning:
      "DHCP may be unnecessary, but confirm there are no clients using it and that another required DHCP source exists.",
    response:
      "Inspect active scopes, leases, authorization, and client dependency before considering removal.",
  },
  {
    title: "IIS is installed with no obvious website",
    evidence:
      "No scenario requirement references web hosting.",
    reasoning:
      "The role may be leftover, application-dependent, or unnecessary.",
    response:
      "Inspect sites, application pools, listening ports, installed applications, and logs before classifying it.",
  },
  {
    title: "A feature looks unfamiliar",
    evidence:
      "The feature name is not recognized by the student.",
    reasoning:
      "Features often support roles and applications indirectly.",
    response:
      "Look up what role or application depends on it inside the authorized training environment before changing it.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Open Server Manager",
    text:
      "In the fictional environment, start at Server Manager and record the server name, domain status, installed roles, and role-specific navigation items.",
  },
  {
    number: "02",
    title: "Identify required functions",
    text:
      "The scenario requires domain authentication, DNS, and the TeamDocs share. Mark AD DS, DNS, and file services as protected dependencies.",
  },
  {
    number: "03",
    title: "Build the role inventory",
    text:
      "Use Get-WindowsFeature to confirm installed components and compare them with Server Manager.",
  },
  {
    number: "04",
    title: "Classify unknown components",
    text:
      "A DHCP role and one additional feature are not mentioned in the scenario. Mark both Investigate instead of removing them.",
  },
  {
    number: "05",
    title: "Review dependencies",
    text:
      "Check relevant services, firewall rules, users, logs, and client usage before deciding whether anything is unnecessary.",
  },
  {
    number: "06",
    title: "Verify protected roles",
    text:
      "Confirm domain authentication, DNS resolution, and TeamDocs access before moving to deeper hardening.",
  },
];

const mistakes = [
  {
    title: "Removing a role because you do not recognize it",
    text:
      "Unfamiliarity is not evidence that a role is unnecessary.",
  },
  {
    title: "Using only the Installed column",
    text:
      "Installed state does not explain whether a component is required, active, healthy, or depended on.",
  },
  {
    title: "Confusing role with service",
    text:
      "A role can rely on multiple services, and one service can support more than one system function.",
  },
  {
    title: "Skipping client verification",
    text:
      "A role may appear healthy in Server Manager while clients cannot use it.",
  },
  {
    title: "Removing before documenting",
    text:
      "You lose the original baseline and make troubleshooting harder.",
  },
  {
    title: "Ignoring role-specific logs",
    text:
      "Server roles often write useful operational events outside the basic System log.",
  },
];

const checklist = [
  "Open Server Manager and identify installed roles.",
  "Identify whether the server is a domain controller.",
  "Compare Server Manager with Get-WindowsFeature.",
  "Record role services and supporting features.",
  "Classify each major role as Required, Unnecessary, or Investigate.",
  "Review related services before changing a role.",
  "Review firewall rules and network exposure.",
  "Identify users or service accounts tied to the role.",
  "Check relevant Event Viewer logs.",
  "Document what clients depend on the role.",
  "Do not remove a role without a verification plan.",
  "Test required roles from the client perspective.",
];

const reflection = [
  "What is the difference between a server role, feature, and service?",
  "Why is Server Manager a better starting point than randomly opening administrative tools?",
  "Why does a domain controller make DNS especially important to investigate carefully?",
  "What evidence should exist before a role is classified as unnecessary?",
  "Why should role verification include a client-side test?",
  "What makes removing a role higher risk than disabling an ordinary startup application?",
];

export default function ServerManagerRoleInventoryPage() {
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
            <Link href="/cyberpatriot/windows-server/competition-workflow" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/local-users-groups-privilege" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 02
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Server Manager &amp; Role Inventory
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn what the server is actually responsible for before
                hardening it. Inventory roles, features, services, and
                dependencies so required functions are protected.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Server Manager is one of the best starting points because it
                connects the server's responsibilities with health, services,
                management tools, and role-specific configuration.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary tool</span>
                  <span className="font-bold text-white">Server Manager</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Decision model</span>
                  <span className="font-bold text-white">3 categories</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Role-aware inventory</span>
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Core vocabulary
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Know what kind of component you are looking at
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreTerms.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Main principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inventory before removal
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Installed does not mean required, but unfamiliar does not mean
              unnecessary. Classification comes from scenario evidence and
              dependency review.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              High-impact warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Removing a role can affect the whole network
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Roles such as AD DS, DNS, DHCP, file services, and IIS can support
              many users or systems at once.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not remove a role until its dependencies and verification plan are understood.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Where to inspect roles and supporting components
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
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.lookFor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Server Manager orientation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Four places to understand first
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serverManagerAreas.map((item) => (
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
          Inventory questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions for every installed role
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {inventoryQuestions.map((item, index) => (
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
          Common server roles
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          What the role does and how to verify it
        </h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {roleExamples.map((item) => (
            <article
              key={item.role}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.role}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.purpose}</p>
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Dependencies
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.dependencies}</p>
              </div>
              <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Verify
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.verify}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Classification model
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Required, Unnecessary, or Investigate
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {classifications.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-300">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inventory
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm what Server Manager shows
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powerShellChecks.map((item) => (
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
          Dependency review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six dependency questions before removing anything
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dependencyReview.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk changes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Changes that deserve extra caution
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskChanges.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.risk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Role verification matrix
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Verify locally and from the client
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verificationMatrix.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Server check
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.serverCheck}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Client check
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.clientCheck}</p>
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
            Classify before changing
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
            Inventory DC-PRACTICE
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
          Inventory mistakes that lead to broken servers
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
              Test your role-inventory reasoning
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
              Before leaving Server Manager
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
                Local Users, Groups &amp; Privilege
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review local accounts, Administrators, service identities,
                built-in accounts, and least privilege without breaking required
                server functions.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/local-users-groups-privilege"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 03 &rarr;
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
            <Link href="/cyberpatriot/windows-server/competition-workflow" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/local-users-groups-privilege" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
