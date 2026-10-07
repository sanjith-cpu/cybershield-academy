import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between Windows Server roles, role services, features, and Windows services.",
  "Map required server roles to the services and dependencies that keep them functional.",
  "Use Server Manager, Services, PowerShell, and Event Viewer to inspect dependencies before changing anything.",
  "Classify unfamiliar services as required, unnecessary, misconfigured, or investigate instead of disabling them blindly.",
  "Recognize how startup type, service account, executable path, and dependencies affect service risk.",
  "Verify required server functions after any service, role, or feature change.",
];

const concepts = [
  { title: "Server role", text: "A major responsibility such as Active Directory Domain Services, DNS Server, DHCP Server, File and Storage Services, or Web Server." },
  { title: "Role service", text: "A smaller capability inside a server role. One role can contain multiple role services with different security and availability impact." },
  { title: "Feature", text: "A Windows capability that supports the operating system, administration, applications, or one or more server roles." },
  { title: "Windows service", text: "A background process that may support Windows itself, a server role, a feature, or an installed application." },
  { title: "Dependency", text: "Another service, role, protocol, account, file, network path, or component that must work for the target function to work." },
  { title: "Startup type", text: "Controls how a Windows service starts, such as Automatic, Automatic (Delayed Start), Manual, or Disabled." },
];

const toolPaths = [
  { title: "Server Manager", path: "Start → Server Manager → Dashboard / Local Server / role-specific pages", note: "Use to identify installed roles, features, server health, and role-specific management tools." },
  { title: "Installed roles and features", path: "Server Manager → Manage → Add Roles and Features", note: "Use the wizard as an inventory view. Do not install or remove components simply to explore." },
  { title: "Services", path: "Win + R → services.msc", note: "Review service name, display name, status, startup type, logon account, and Dependencies tab." },
  { title: "Service properties", path: "services.msc → double-click the service → General / Log On / Recovery / Dependencies", note: "Provides the most useful GUI view for understanding what the service does and what depends on it." },
  { title: "Event Viewer", path: "Win + R → eventvwr.msc → Windows Logs → System", note: "Look for Service Control Manager and role-specific failures before and after a service change." },
  { title: "PowerShell", path: "Start → search PowerShell → Run as administrator when required", note: "Use Get-Service, Get-CimInstance Win32_Service, Get-WindowsFeature, and role-specific cmdlets for inspection." },
];

const serviceProperties = [
  { title: "Service name", text: "The internal name used by commands and Windows. It may differ from the friendly display name." },
  { title: "Display name", text: "The human-readable label shown in the Services console." },
  { title: "Status", text: "Shows whether the service is Running, Stopped, Start Pending, Stop Pending, or another state." },
  { title: "Startup type", text: "Shows whether Windows starts the service automatically, on demand, or not at all." },
  { title: "Log on as", text: "Identifies the service account. Named accounts can create important password and privilege dependencies." },
  { title: "Path to executable", text: "Shows which binary or command the service launches. Unusual paths deserve investigation." },
  { title: "Dependencies", text: "Shows services this service requires and services that depend on it." },
  { title: "Recovery", text: "Controls what Windows may do after a service failure, such as restart the service." },
];

const roleMaps = [
  { role: "Active Directory Domain Services", required: "Domain authentication and directory services.", dependencies: "Directory-related services, DNS, networking, time consistency, SYSVOL/NETLOGON functionality, and domain-controller health.", danger: "Disabling an unfamiliar service on a domain controller can disrupt logon, replication, policy, or directory operations.", verify: "Confirm authorized domain logon and review directory/DNS health." },
  { role: "DNS Server", required: "Name resolution for clients and possibly Active Directory.", dependencies: "DNS Server service, zones, records, networking, firewall rules, and correct interface configuration.", danger: "The server may appear healthy locally while every client loses name resolution.", verify: "Resolve required names from an authorized client." },
  { role: "DHCP Server", required: "IP address and network-option assignment.", dependencies: "DHCP Server service, scopes, authorization when applicable, networking, and firewall access.", danger: "Stopping DHCP can prevent new or renewing clients from obtaining valid network configuration.", verify: "Renew a lease from an authorized client." },
  { role: "File and Storage Services", required: "SMB shares and required file access.", dependencies: "Server service, SMB, storage, share permissions, NTFS permissions, user/group identity, and firewall rules.", danger: "A service change can break all required shares even when the files remain on disk.", verify: "Open required shares from an authorized client." },
  { role: "Web Server (IIS)", required: "Required websites or web applications.", dependencies: "World Wide Web Publishing Service, Windows Process Activation Service, application pools, bindings, certificates, networking, and application files.", danger: "Stopping the wrong service can make the entire site unavailable.", verify: "Load the required site or application from an authorized client." },
  { role: "Remote Administration", required: "RDP, WinRM, or another authorized management path.", dependencies: "Services, firewall rules, user rights, authentication, network reachability, and authorized accounts.", danger: "A single service or firewall change can lock the team out.", verify: "Reconnect using the required management path." },
];

const classifications = [
  { title: "Required", meaning: "The service clearly supports a scenario-required role, application, management path, or operating-system function.", action: "Protect it, document it, and verify it after related hardening." },
  { title: "Unnecessary", meaning: "Evidence shows the service or feature is not required and no required dependency relies on it.", action: "Consider stopping, disabling, or removing it only after documenting the verification plan." },
  { title: "Misconfigured", meaning: "The service is required but its startup type, account, path, permissions, recovery behavior, or exposure is wrong.", action: "Correct the specific misconfiguration instead of removing the service." },
  { title: "Investigate", meaning: "The purpose, vendor, dependency, or authorization is unclear.", action: "Inspect the executable, account, dependencies, events, installed software, and scenario before changing it." },
];

const powershellChecks = [
  { label: "Installed roles and features", command: "Get-WindowsFeature | Where-Object {$_.Installed -eq $true} | Select-Object DisplayName, Name, InstallState", purpose: "Shows which Windows Server roles and features are currently installed." },
  { label: "Service state", command: "Get-Service | Sort-Object Status, DisplayName | Select-Object Status, Name, DisplayName", purpose: "Provides a quick inventory of running and stopped services." },
  { label: "Detailed service inventory", command: "Get-CimInstance Win32_Service | Select-Object Name, DisplayName, State, StartMode, StartName, PathName", purpose: "Adds startup mode, service account, and executable-path context." },
  { label: "One service in detail", command: "Get-CimInstance Win32_Service | Where-Object {$_.Name -eq 'ServiceName'} | Format-List *", purpose: "Shows detailed configuration for one service. Replace ServiceName with the internal service name." },
  { label: "Dependent services", command: 'Get-Service -Name "ServiceName" -DependentServices', purpose: "Shows services that depend on the selected service." },
  { label: "Required services", command: 'Get-Service -Name "ServiceName" -RequiredServices', purpose: "Shows services the selected service depends on." },
  { label: "Recent Service Control Manager events", command: "Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Service Control Manager'} -MaxEvents 40 | Select-Object TimeCreated, Id, LevelDisplayName, Message", purpose: "Reviews recent service start, stop, timeout, and failure evidence." },
];

const suspiciousSignals = [
  { title: "Unusual executable path", text: "A service launching from a user profile, temporary folder, downloads directory, or other unexpected location deserves investigation." },
  { title: "Unknown vendor", text: "Unknown does not automatically mean malicious, but the service should be tied to a known application, role, or vendor." },
  { title: "Named privileged account", text: "A service running as a named administrator or Domain Admin may have more privilege than necessary." },
  { title: "Automatic startup with unclear purpose", text: "Persistent automatic services should have an understood reason for starting at boot." },
  { title: "Repeated failures", text: "Service Control Manager errors can show misconfiguration, missing dependencies, credential problems, or broken applications." },
  { title: "Unexpected network exposure", text: "A service listening on the network when the scenario does not require remote access should be investigated with firewall and application context." },
];

const dependencyQuestions = [
  "Which role or application uses this service?",
  "Which services does it depend on?",
  "Which services depend on it?",
  "Which account does it run as?",
  "Does the account have excessive privilege?",
  "What executable path does it use?",
  "Does the service listen on the network?",
  "Is a firewall rule tied to the service?",
  "What happens to the required server function if the service stops?",
  "How will you verify the required function after changing it?",
];

const startupReasoning = [
  { title: "Automatic", text: "Starts during boot and is appropriate for many core or continuously required services." },
  { title: "Automatic (Delayed Start)", text: "Starts automatically but later in the boot process, often to reduce startup contention." },
  { title: "Manual", text: "Starts when Windows, an application, a trigger, or an administrator requests it." },
  { title: "Disabled", text: "Cannot start until the startup type is changed. Use only when you know the service is not required." },
  { title: "Trigger-start behavior", text: "Some services appear Manual but start automatically when Windows detects a specific trigger or demand." },
];

const controlledChangeExamples = [
  { title: "Stop a confirmed unnecessary service", command: 'Stop-Service -Name "ExampleService"', caution: "Use only after dependency review confirms the service is unnecessary and no required role depends on it.", verify: 'Get-Service -Name "ExampleService"' },
  { title: "Disable a confirmed unnecessary service", command: 'Set-Service -Name "ExampleService" -StartupType Disabled', caution: "Do not use this as a blanket hardening technique. Apply only to a confirmed unnecessary service.", verify: "Get-CimInstance Win32_Service | Where-Object {$_.Name -eq 'ExampleService'} | Select-Object Name, State, StartMode" },
  { title: "Restore a required service to automatic startup", command: 'Set-Service -Name "ExampleService" -StartupType Automatic', caution: "Use when the scenario or known role dependency requires the service to start automatically.", verify: 'Get-Service -Name "ExampleService"' },
];

const troubleshooting = [
  { symptom: "A required role stops working after a service change.", checks: "Restore the documented original state if appropriate, review the service's Dependencies tab, check required/dependent services, inspect System and role-specific logs, then test the role from a client." },
  { symptom: "A service will not start.", checks: "Check its startup type, service account credentials, dependencies, executable path, permissions, and Service Control Manager events." },
  { symptom: "The service starts and immediately stops.", checks: "Some services are demand-based, but repeated failure may indicate a broken dependency or application. Review events and the application/role context." },
  { symptom: "A service account password changed and the service now fails.", checks: "Update the service Log On credentials if authorized, confirm the account is enabled and permitted to run the service, then verify the application." },
  { symptom: "The service keeps returning after being disabled.", checks: "A role, application, Group Policy, scheduled task, repair process, or management platform may be restoring it. Identify the owner before repeating the change." },
  { symptom: "An unknown service is listening on the network.", checks: "Identify the executable, publisher, installed application, service account, listening port, firewall rule, and scenario purpose before disabling it." },
];

const decisionCases = [
  { title: "Unknown automatic service on a domain controller", evidence: "The service name is unfamiliar and starts automatically under LocalSystem.", reasoning: "Domain controllers contain specialized services that students may not recognize. Unfamiliarity is not enough evidence to disable it.", response: "Inspect the executable path, description, dependencies, Server Manager roles, installed software, and Service Control Manager events before classifying it." },
  { title: "Required service is set to Disabled", evidence: "The scenario requires DNS, but the DNS Server service cannot start because its startup configuration was changed.", reasoning: "This is a misconfiguration of a required role, not an unnecessary service.", response: "Restore the appropriate service configuration, start the service if justified, then verify DNS from an authorized client." },
  { title: "Third-party application service runs as Domain Admin", evidence: "The application is required, but its service account has domain-wide privilege.", reasoning: "The service may be necessary while the account privilege is excessive.", response: "Preserve the service, document the dependency, determine the minimum rights needed, and reduce privilege only after controlled testing." },
  { title: "File-service component looks unnecessary", evidence: "A student wants to disable the Server service because the name appears generic.", reasoning: "The Server service is closely tied to SMB file sharing, which may be a required server role.", response: "Check required shares and dependencies first. Do not disable a core service based on its name alone." },
];

const labSteps = [
  { number: "01", title: "Identify the fictional role", text: "FILE-SRV must provide the TeamDocs SMB share and allow Morgan to administer it through RDP." },
  { number: "02", title: "Inventory installed roles and services", text: "Use Server Manager and Get-WindowsFeature, then compare required roles with running services." },
  { number: "03", title: "Inspect three services", text: "Review the Server service, Remote Desktop Services, and one unfamiliar third-party service using services.msc and PowerShell." },
  { number: "04", title: "Map dependencies", text: "Check startup type, logon account, executable path, required services, dependent services, and relevant firewall rules." },
  { number: "05", title: "Classify", text: "Mark the SMB and RDP services Required. Mark the third-party service Investigate until its application purpose is confirmed." },
  { number: "06", title: "Verify", text: "After any authorized change, confirm TeamDocs still opens from a client, Morgan can still use RDP, and no new service failures appear in Event Viewer." },
];

const mistakes = [
  { title: "Disabling services by name alone", text: "Generic or unfamiliar names can belong to essential Windows or role-specific services." },
  { title: "Changing startup type without checking dependencies", text: "The service may support a required role even when it is not currently running." },
  { title: "Ignoring service accounts", text: "Credential or privilege changes can break services even when the service configuration itself is unchanged." },
  { title: "Treating Manual as insecure", text: "Many legitimate Windows services are designed to start on demand or by trigger." },
  { title: "Removing a role to stop one service", text: "Role removal is much broader than a single-service change and can affect many dependencies." },
  { title: "Skipping client-side verification", text: "A service can be Running while clients still cannot use the required role." },
];

const verification = [
  "Required roles are still installed.",
  "Required services are running when they should be.",
  "Service startup types match the intended server role.",
  "Required service accounts still authenticate.",
  "No unnecessary privileged service account remains without justification.",
  "Required SMB, DNS, DHCP, web, or other role functions still work as applicable.",
  "Required RDP or WinRM access still works.",
  "No new Service Control Manager failures appeared after changes.",
  "Role-specific Event Viewer logs show no new errors.",
  "The final service changes are documented with original and final state.",
];

const checklist = [
  "Open Server Manager and confirm required roles.",
  "Open services.msc.",
  "Review service name, display name, status, and startup type.",
  "Review Log On account.",
  "Review executable path.",
  "Review Dependencies tab.",
  "Use Get-Service and Win32_Service for inventory.",
  "Check Service Control Manager events.",
  "Classify services before changing them.",
  "Avoid blanket service-disable scripts.",
  "Verify required server roles from clients.",
  "Document every service change.",
];

const reflection = [
  "Why is an unfamiliar service not automatically unnecessary?",
  "What is the difference between a server role and a Windows service?",
  "Why can a service configured as Manual still be legitimate?",
  "How can a service account create a hidden dependency?",
  "Why should you inspect both required services and dependent services?",
  "What should be verified after changing a service that supports SMB or remote administration?",
];

export default function RolesFeaturesRequiredServicesPage() {
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
            <Link href="/cyberpatriot/windows-server/windows-update-patch-management" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/file-shares-ntfs-smb-permissions" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 10
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Roles, Features &amp; Required Services
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Connect Windows Server roles to the services and dependencies that keep them working so you can harden the system without disabling critical infrastructure.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The right question is not "Can I disable this service?" The right question is "What depends on it, what does it depend on, and how will I prove the required function still works?"
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Core concepts</span><span className="font-bold text-white">6</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Classification</span><span className="font-bold text-white">4 categories</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Primary console</span><span className="font-bold text-white">services.msc</span></div>
                <div className="flex items-center justify-between gap-6"><span>Goal</span><span className="font-bold text-white">Harden + preserve roles</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Learning objectives</p>
          <h2 className="mt-3 text-3xl font-black text-white">What this lesson should help you do</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Core concepts</p>
        <h2 className="mt-2 text-3xl font-black text-white">Know what kind of component you are changing</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Core idea</p>
            <h2 className="mt-3 text-2xl font-black text-white">Services are part of a dependency graph</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">A service may support another service, a server role, an application, a share, authentication, or remote administration.</p>
          </div>
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">High-impact warning</p>
            <h2 className="mt-3 text-2xl font-black text-white">Never run a blanket "disable unnecessary services" script</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Windows Server roles and applications often rely on services that may look unfamiliar to someone who normally uses workstations.</p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">Investigate first, change narrowly, and verify the required role afterward.</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Tool map</p>
        <h2 className="mt-2 text-3xl font-black text-white">Exactly where to inspect roles and services</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPaths.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">{item.path}</code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Service properties</p>
          <h2 className="mt-3 text-3xl font-black text-white">Eight properties to review before changing a service</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceProperties.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Role dependency map</p>
        <h2 className="mt-2 text-3xl font-black text-white">Required roles depend on more than one service</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roleMaps.map((item) => (
            <article key={item.role} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-black text-white">{item.role}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.required}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Dependencies</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.dependencies}</p>
              </div>
              <div className="mt-3 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Risk</p>
                <p className="mt-2 text-sm leading-6 text-yellow-100">{item.danger}</p>
              </div>
              <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Verify</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.verify}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Classification</p>
        <h2 className="mt-2 text-3xl font-black text-white">Required, Unnecessary, Misconfigured, or Investigate</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {classifications.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.meaning}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-300">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">PowerShell inspection</p>
          <h2 className="mt-3 text-3xl font-black text-white">Inspect roles, services, and dependencies</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powershellChecks.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Suspicious signals</p>
        <h2 className="mt-2 text-3xl font-black text-white">What deserves deeper investigation</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suspiciousSignals.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Dependency questions</p>
        <h2 className="mt-2 text-3xl font-black text-white">Ten questions before stopping or disabling a service</h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {dependencyQuestions.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Startup reasoning</p>
        <h2 className="mt-2 text-3xl font-black text-white">Startup type is not a simple secure/insecure label</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {startupReasoning.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Controlled service changes</p>
          <h2 className="mt-3 text-3xl font-black text-white">Make only justified, reversible changes</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {controlledChangeExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Change</p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">{item.command}</code>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.caution}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Verify</p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-emerald-200">{item.verify}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Troubleshooting</p>
          <h2 className="mt-3 text-3xl font-black text-white">When services fail or behave unexpectedly</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {troubleshooting.map((item) => (
              <div key={item.symptom} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Symptom</p>
                <h3 className="mt-2 text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Check</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.checks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Decision cases</p>
          <h2 className="mt-3 text-3xl font-black text-white">Service decisions in server context</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Response</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Fictional defensive lab</p>
          <h2 className="mt-3 text-3xl font-black text-white">Review services on FILE-SRV</h2>
          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div key={item.number} className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Step {item.number}</p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Common mistakes</p>
        <h2 className="mt-2 text-3xl font-black text-white">Service mistakes that can break the server</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Reflection</p>
            <h2 className="mt-3 text-2xl font-black text-white">Test your service reasoning</h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Question {index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Verification checklist</p>
            <h2 className="mt-3 text-2xl font-black text-white">Confirm roles and services still work</h2>
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
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Competition checklist</p>
          <h2 className="mt-3 text-2xl font-black text-white">Before leaving role and service review</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Next Windows Server lesson</p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">File Shares, NTFS &amp; SMB Permissions</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how share permissions, NTFS permissions, ownership, inheritance, SMB exposure, and effective access combine on a Windows file server.
              </p>
            </div>
            <Link
              href="/cyberpatriot/windows-server/file-shares-ntfs-smb-permissions"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 11 &rarr;
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
            <Link href="/cyberpatriot/windows-server/windows-update-patch-management" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/file-shares-ntfs-smb-permissions" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
