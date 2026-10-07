import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review Remote Desktop, WinRM, and related remote-administration settings on Windows Server.",
  "Identify which users and groups are authorized for remote administration.",
  "Use Server Manager, System Properties, Local Security Policy, Windows Defender Firewall, Services, and PowerShell to inspect remote-management configuration.",
  "Understand the difference between service state, firewall exposure, user rights, group membership, and network reachability.",
  "Recognize why narrowing scope is often safer than disabling required remote administration completely.",
  "Verify authorized remote administration after changes without exposing the server more broadly than the scenario requires.",
];

const concepts = [
  {
    title: "Remote Desktop",
    text:
      "Interactive graphical administration using Remote Desktop Services and the RDP protocol.",
  },
  {
    title: "WinRM",
    text:
      "Windows Remote Management, commonly used by PowerShell remoting and other management tools.",
  },
  {
    title: "Authorization",
    text:
      "The user or group must have the right to connect, not just network access to the server.",
  },
  {
    title: "Firewall exposure",
    text:
      "The network path must be permitted through the correct firewall profile and scope.",
  },
  {
    title: "Service dependency",
    text:
      "Remote access depends on required Windows services, authentication, DNS, networking, and sometimes Group Policy.",
  },
  {
    title: "Management scope",
    text:
      "A required remote service can often be restricted to authorized users, profiles, or management networks instead of being disabled.",
  },
];

const toolPaths = [
  {
    title: "Remote Desktop settings",
    path:
      "Server Manager → Local Server → Remote Desktop",
    note:
      "Use to review whether Remote Desktop is enabled and to open the relevant system settings.",
  },
  {
    title: "System Properties",
    path:
      "Win + R → SystemPropertiesRemote.exe",
    note:
      "Review Remote Desktop state and the users authorized through the Remote Desktop Users interface.",
  },
  {
    title: "Remote Desktop Users group",
    path:
      "Win + R → compmgmt.msc → System Tools → Local Users and Groups → Groups → Remote Desktop Users",
    note:
      "On member servers, review local group membership. On domain controllers, use domain-aware administrative tools instead of relying on Local Users and Groups.",
  },
  {
    title: "User Rights Assignment",
    path:
      "Win + R → secpol.msc → Local Policies → User Rights Assignment",
    note:
      "Review Allow log on through Remote Desktop Services and relevant deny rights.",
  },
  {
    title: "Remote Desktop firewall rules",
    path:
      "Win + R → wf.msc → Inbound Rules → Remote Desktop",
    note:
      "Review profile, enabled state, scope, and whether the rule is centrally managed.",
  },
  {
    title: "WinRM service",
    path:
      "Win + R → services.msc → Windows Remote Management (WS-Management)",
    note:
      "Review service state and startup behavior before troubleshooting PowerShell remoting.",
  },
  {
    title: "WinRM configuration",
    path:
      "PowerShell → winrm enumerate winrm/config/listener",
    note:
      "Review listeners and bindings without changing them.",
  },
  {
    title: "PowerShell remoting",
    path:
      "PowerShell → Get-PSSessionConfiguration / Test-WSMan",
    note:
      "Use for read-only inspection of remoting endpoints and WinRM reachability.",
  },
];

const accessLayers = [
  {
    title: "Network reachability",
    text:
      "The client must be able to reach the server's IP address or hostname.",
  },
  {
    title: "Name resolution",
    text:
      "DNS must resolve the intended server name when the management workflow uses hostnames.",
  },
  {
    title: "Firewall",
    text:
      "The correct inbound rule must permit traffic on the active profile and from the authorized source.",
  },
  {
    title: "Service",
    text:
      "Remote Desktop Services or WinRM-related components must be healthy.",
  },
  {
    title: "User right",
    text:
      "The identity must be allowed to log on or use the intended remote-management method.",
  },
  {
    title: "Group membership",
    text:
      "Membership in Administrators, Remote Desktop Users, or another delegated group may provide required access.",
  },
  {
    title: "Authentication",
    text:
      "The account must be enabled, valid, and able to authenticate under the effective policy.",
  },
  {
    title: "Policy",
    text:
      "Group Policy can enable, disable, or redefine parts of the remote-management configuration.",
  },
];

const rdpChecks = [
  {
    title: "Remote Desktop enabled",
    text:
      "Confirm RDP is enabled only when the scenario requires it.",
  },
  {
    title: "Authorized users",
    text:
      "Review Administrators and Remote Desktop Users rather than granting remote access broadly.",
  },
  {
    title: "Allow right",
    text:
      "Review Allow log on through Remote Desktop Services.",
  },
  {
    title: "Deny rights",
    text:
      "Check Deny log on through Remote Desktop Services because Deny can override an otherwise valid Allow.",
  },
  {
    title: "Firewall scope",
    text:
      "Restrict RDP to the required profile and authorized management network when possible.",
  },
  {
    title: "NLA",
    text:
      "Network Level Authentication can reduce exposure by requiring authentication earlier in the RDP connection process.",
  },
];

const winrmChecks = [
  {
    title: "WinRM service",
    text:
      "Confirm whether Windows Remote Management is required and running as intended.",
  },
  {
    title: "Listeners",
    text:
      "Review configured listeners and addresses instead of assuming WinRM is exposed on every interface.",
  },
  {
    title: "Firewall rules",
    text:
      "Review Windows Remote Management firewall rules and remote-address scope.",
  },
  {
    title: "Authentication",
    text:
      "Understand which authentication methods are available in the authorized environment.",
  },
  {
    title: "TrustedHosts",
    text:
      "Do not broaden TrustedHosts casually. In a domain environment, prefer normal domain authentication where possible.",
  },
  {
    title: "Endpoints",
    text:
      "Review PowerShell session configurations and who is authorized to use them.",
  },
];

const powershellChecks = [
  {
    label: "Remote Desktop service",
    command:
      'Get-Service -Name "TermService"',
    purpose:
      "Shows the Remote Desktop Services state.",
  },
  {
    label: "WinRM service",
    command:
      'Get-Service -Name "WinRM"',
    purpose:
      "Shows Windows Remote Management service state.",
  },
  {
    label: "Remote Desktop Users membership",
    command:
      'Get-LocalGroupMember -Group "Remote Desktop Users"',
    purpose:
      "Shows local Remote Desktop Users membership on a member server where the local group exists.",
  },
  {
    label: "Remote Desktop firewall rules",
    command:
      'Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Select-Object DisplayName, Enabled, Profile, Direction, Action',
    purpose:
      "Reviews the state and profile scope of the built-in Remote Desktop firewall rule group.",
  },
  {
    label: "WinRM firewall rules",
    command:
      'Get-NetFirewallRule -DisplayGroup "Windows Remote Management" | Select-Object DisplayName, Enabled, Profile, Direction, Action',
    purpose:
      "Reviews the built-in WinRM firewall rule group.",
  },
  {
    label: "WinRM listeners",
    command:
      "winrm enumerate winrm/config/listener",
    purpose:
      "Shows configured WinRM listeners without modifying them.",
  },
  {
    label: "PowerShell endpoints",
    command:
      "Get-PSSessionConfiguration | Select-Object Name, Permission",
    purpose:
      "Shows registered PowerShell remoting endpoints and permission information.",
  },
  {
    label: "Test WinRM locally",
    command:
      "Test-WSMan localhost",
    purpose:
      "Checks whether the local WinRM service is responding.",
  },
];

const userRights = [
  {
    title: "Allow log on through Remote Desktop Services",
    text:
      "Identities or groups listed here can receive the RDP logon right, subject to other controls.",
  },
  {
    title: "Deny log on through Remote Desktop Services",
    text:
      "A matching deny right can block RDP even if the user belongs to an allowed group.",
  },
  {
    title: "Administrators",
    text:
      "Administrators commonly receive RDP access, but domain-wide privilege should not be granted merely to make RDP work.",
  },
  {
    title: "Remote Desktop Users",
    text:
      "Provides a narrower local group for non-administrator RDP access on applicable member servers.",
  },
];

const scopeExamples = [
  {
    title: "RDP from management subnet only",
    scenario:
      "Morgan requires RDP from a known management network.",
    approach:
      "Keep the RDP service available, allow only the required authorized account or group, and narrow the firewall remote-address scope to the management network.",
    verify:
      "Connect successfully from the authorized management host and confirm broader sources are not needed.",
  },
  {
    title: "PowerShell remoting for administrators",
    scenario:
      "Authorized administrators use WinRM for scripted maintenance.",
    approach:
      "Preserve WinRM, review listeners and firewall scope, and avoid broad TrustedHosts changes when normal domain authentication works.",
    verify:
      "Use Test-WSMan and a controlled remoting session from an authorized system.",
  },
  {
    title: "RDP is not required",
    scenario:
      "The scenario provides a local console and explicitly does not require RDP.",
    approach:
      "Document the current state and disable or restrict RDP only if the scenario and administration plan support that decision.",
    verify:
      "Confirm another authorized management path remains available.",
  },
];

const troubleshooting = [
  {
    symptom: "RDP cannot connect at all.",
    checks:
      "Confirm network reachability, DNS, TermService state, Remote Desktop enabled state, firewall rule/profile, account status, and whether policy manages RDP.",
  },
  {
    symptom: "RDP reaches the server but the user is denied logon.",
    checks:
      "Review Remote Desktop Users or Administrators membership, Allow log on through Remote Desktop Services, Deny log on through Remote Desktop Services, account status, and domain/local policy.",
  },
  {
    symptom: "RDP works for one user but not another.",
    checks:
      "Compare group membership, user rights, deny rights, account state, domain policy, and whether the account is local or domain-based.",
  },
  {
    symptom: "WinRM service is running but Test-WSMan fails remotely.",
    checks:
      "Review listeners, firewall scope, DNS, network connectivity, authentication, and whether the target allows the client's management path.",
  },
  {
    symptom: "WinRM or RDP settings revert.",
    checks:
      "Group Policy may be controlling the service, firewall, user rights, or remote-management configuration. Use gpresult and inspect the controlling GPO.",
  },
  {
    symptom: "Remote access breaks after firewall hardening.",
    checks:
      "Review the exact firewall rule, active profile, remote-address scope, service state, and the source IP used by the management client.",
  },
];

const riskyPatterns = [
  {
    title: "Granting Domain Admin just to make RDP work",
    text:
      "This creates excessive privilege. Fix the actual logon-right, group, or policy issue instead.",
  },
  {
    title: "Opening RDP to every network",
    text:
      "A required service can often be restricted to the domain profile or a management subnet.",
  },
  {
    title: "Using TrustedHosts = *",
    text:
      "A wildcard TrustedHosts configuration broadens trust unnecessarily and should not be used as a generic troubleshooting shortcut.",
  },
  {
    title: "Disabling all remote administration",
    text:
      "That can remove the only safe recovery or management path during the competition.",
  },
  {
    title: "Changing multiple remote settings at once",
    text:
      "It becomes difficult to identify whether a failure came from firewall, service, rights, authentication, or policy.",
  },
  {
    title: "Testing only from the server itself",
    text:
      "Local tests do not prove that an authorized remote client can still connect.",
  },
];

const changeDiscipline = [
  "Confirm the scenario requires remote administration.",
  "Identify the authorized users or groups.",
  "Record the current service state.",
  "Record current firewall rules and remote scope.",
  "Review user rights and deny rights.",
  "Check whether Group Policy owns the configuration.",
  "Preserve at least one authorized management path.",
  "Narrow scope before disabling required access.",
  "Change one control at a time.",
  "Test from an authorized remote client after each major change.",
];

const decisionCases = [
  {
    title: "RDP works only because user is Domain Admin",
    evidence:
      "A required administrator can connect, but only while holding domain-wide privilege.",
    reasoning:
      "RDP access is required, but Domain Admin may be more privilege than the task needs.",
    response:
      "Determine the correct delegated group and logon right, reduce privilege carefully, and verify the user can still administer the intended server.",
  },
  {
    title: "RDP firewall rule allows any remote address",
    evidence:
      "The scenario says management occurs only from a dedicated subnet.",
    reasoning:
      "The service is required, but the network scope is broader than necessary.",
    response:
      "Narrow the rule to the authorized management network and verify access from that source.",
  },
  {
    title: "WinRM listener exists but remoting is not used",
    evidence:
      "No scenario requirement or management workflow depends on WinRM.",
    reasoning:
      "The listener may be unnecessary, but removing it without checking policy or application dependencies could break management tooling.",
    response:
      "Review Group Policy, scripts, management software, scheduled tasks, and administrator workflow before changing it.",
  },
  {
    title: "Remote access stops after security hardening",
    evidence:
      "TermService is running, but Morgan can no longer log in.",
    reasoning:
      "The issue may be user rights, deny rights, firewall scope, group membership, or policy rather than the service itself.",
    response:
      "Trace each access layer systematically and restore only the control that was changed incorrectly.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional requirement",
    text:
      "APP-SRV must be administered by Morgan over RDP from the management subnet. PowerShell remoting is used by the admin team for approved maintenance.",
  },
  {
    number: "02",
    title: "Inventory current state",
    text:
      "Record TermService and WinRM service state, authorized groups, Remote Desktop user rights, firewall rules, and WinRM listeners.",
  },
  {
    number: "03",
    title: "Review excessive access",
    text:
      "The RDP firewall rule accepts any remote address and an unrelated user is a member of Remote Desktop Users.",
  },
  {
    number: "04",
    title: "Harden narrowly",
    text:
      "Remove only the clearly unauthorized user, preserve Morgan, and restrict the RDP firewall rule to the management subnet.",
  },
  {
    number: "05",
    title: "Review WinRM safely",
    text:
      "Keep required WinRM, confirm listener and firewall scope, and avoid broad TrustedHosts changes.",
  },
  {
    number: "06",
    title: "Verify from clients",
    text:
      "From an authorized management host, confirm Morgan can use RDP and Test-WSMan succeeds. Confirm no required management workflow is broken.",
  },
];

const verification = [
  "Remote Desktop is enabled only if required.",
  "Only authorized users or groups have RDP access.",
  "Allow and Deny RDP user rights are understood.",
  "RDP firewall rules apply only to intended profiles and sources.",
  "TermService is healthy when RDP is required.",
  "WinRM is enabled only when required.",
  "WinRM listeners and firewall rules match the authorized management design.",
  "No unnecessary TrustedHosts broadening was introduced.",
  "Group Policy is not unexpectedly overriding the intended state.",
  "Authorized remote clients can still connect successfully.",
];

const checklist = [
  "Open Server Manager → Local Server → Remote Desktop.",
  "Run SystemPropertiesRemote.exe.",
  "Review Remote Desktop Users or domain-equivalent authorization.",
  "Review Allow log on through Remote Desktop Services.",
  "Review Deny log on through Remote Desktop Services.",
  "Run wf.msc and inspect RDP rules.",
  "Check TermService.",
  "Check WinRM service.",
  "Review WinRM listeners.",
  "Review WinRM firewall rules.",
  "Check Group Policy ownership.",
  "Verify from an authorized remote client.",
];

const reflection = [
  "Why is granting Domain Admin a poor fix for an RDP authorization problem?",
  "Why can narrowing firewall scope be safer than disabling RDP entirely?",
  "How can a Deny user right override expected RDP access?",
  "Why should TrustedHosts not be broadened casually?",
  "What are the major layers that must all work for remote administration?",
  "What should be verified after changing RDP or WinRM configuration?",
];

export default function RdpWinrmRemoteAdministrationPage() {
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
            <Link href="/cyberpatriot/windows-server/file-shares-ntfs-smb-permissions" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/dns-server-security-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 12
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                RDP, WinRM &amp; Remote Administration
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Preserve authorized remote administration while reducing
                unnecessary exposure across RDP, WinRM, firewall scope, user
                rights, and administrative groups.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Remote administration works only when several layers agree:
                network reachability, firewall rules, services, authorization,
                authentication, and effective policy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Remote methods</span>
                  <span className="font-bold text-white">RDP + WinRM</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Access layers</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key concern</span>
                  <span className="font-bold text-white">Authorized scope</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Remote + restricted</span>
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
          Core concepts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand what remote administration depends on
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((item) => (
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
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Keep required access, narrow unnecessary exposure
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A required management service can often be made safer by
              restricting who can use it and where connections can come from.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Lockout warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve an authorized recovery path
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Remote administration is often the team's only practical way to
              manage a server.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not disable RDP, WinRM, or required administrator rights until you know how the server will still be managed.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review remote administration
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Access layers
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight layers that can make or break a remote connection
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {accessLayers.map((item) => (
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
          RDP review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six RDP areas to inspect
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rdpChecks.map((item) => (
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
          WinRM review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six WinRM areas to inspect
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {winrmChecks.map((item) => (
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
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect RDP and WinRM without changing them
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            User rights
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            RDP authorization is more than group membership
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {userRights.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Scope examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the management path, reduce the exposure
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {scopeExamples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.scenario}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.approach}</p>
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When remote administration stops working
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
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Risky patterns
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remote-management shortcuts that create new problems
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {riskyPatterns.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Change discipline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten steps for safe remote-administration hardening
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {changeDiscipline.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remote-access decisions in server context
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
            Harden remote administration on APP-SRV
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your remote-access reasoning
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
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm authorized remote access still works
            </h2>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving remote-administration review
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                DNS Server Security Review
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review DNS zones, records, forwarders, recursion,
                interfaces, dynamic updates, logging, and the dependencies that
                make DNS critical to Active Directory.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/dns-server-security-review"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 13 &rarr;
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
            <Link href="/cyberpatriot/windows-server/file-shares-ntfs-smb-permissions" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/dns-server-security-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
