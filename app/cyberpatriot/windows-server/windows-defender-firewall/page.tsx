import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review Windows Defender Firewall profiles, rules, services, and exposure on Windows Server.",
  "Use Windows Defender Firewall with Advanced Security and PowerShell to inspect firewall state without changing rules blindly.",
  "Understand how Domain, Private, and Public profiles affect server behavior.",
  "Recognize the relationship between firewall rules and required server roles such as DNS, DHCP, SMB, RDP, and WinRM.",
  "Evaluate rule direction, protocol, port, program, service, profile, action, and remote scope before making changes.",
  "Verify required services from the client perspective after firewall hardening.",
];

const coreConcepts = [
  {
    title: "Profile",
    text:
      "A firewall configuration context associated with Domain, Private, or Public network classification.",
  },
  {
    title: "Inbound rule",
    text:
      "Controls traffic entering the server and is especially important for required server roles and remote administration.",
  },
  {
    title: "Outbound rule",
    text:
      "Controls traffic leaving the server. Many environments allow outbound traffic broadly unless a stricter policy is required.",
  },
  {
    title: "Action",
    text:
      "A rule can allow or block matching traffic. The action only matters when the rule actually matches the connection.",
  },
  {
    title: "Scope",
    text:
      "Defines which local or remote addresses can use the rule, helping limit exposure without disabling the service.",
  },
  {
    title: "Service dependency",
    text:
      "A firewall rule often exists because a role or service must communicate. Removing the rule may break a required function.",
  },
];

const toolPaths = [
  {
    title: "Windows Defender Firewall with Advanced Security",
    path:
      "Win + R → wf.msc",
    note:
      "Primary GUI for reviewing profiles, inbound rules, outbound rules, monitoring, and connection-security settings.",
  },
  {
    title: "Server Manager",
    path:
      "Start → Server Manager → Local Server → Windows Defender Firewall",
    note:
      "Provides a high-level firewall status view and a path into firewall configuration.",
  },
  {
    title: "Windows Security / Firewall status",
    path:
      "Start → Windows Security → Firewall & network protection",
    note:
      "Useful when the Windows Security interface is available, but Advanced Security provides the deeper rule view.",
  },
  {
    title: "Group Policy firewall settings",
    path:
      "Group Policy Management → edit the intended GPO → Computer Configuration → Policies → Windows Settings → Security Settings → Windows Defender Firewall with Advanced Security",
    note:
      "Use when firewall configuration is centrally managed by domain Group Policy.",
  },
  {
    title: "Services",
    path:
      "Win + R → services.msc",
    note:
      "Confirm the required service is running before assuming the firewall is the reason a connection fails.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    note:
      "Use Get-NetFirewallProfile and Get-NetFirewallRule with related filter cmdlets for read-only inspection.",
  },
];

const profiles = [
  {
    title: "Domain",
    text:
      "Normally applies when the server is connected to a network where it can authenticate to its Active Directory domain.",
    concern:
      "Most domain-member servers and domain controllers rely heavily on this profile for required role communication.",
  },
  {
    title: "Private",
    text:
      "Used for trusted non-domain networks when the network is classified as Private.",
    concern:
      "A server unexpectedly using Private instead of Domain may indicate network or domain-detection issues.",
  },
  {
    title: "Public",
    text:
      "Designed for untrusted networks and usually deserves the most restrictive exposure.",
    concern:
      "Required server roles should not be exposed broadly just because a permissive rule applies to Public.",
  },
];

const ruleAnatomy = [
  {
    title: "Enabled",
    text:
      "An existing rule does nothing if it is disabled.",
  },
  {
    title: "Direction",
    text:
      "Inbound and outbound rules affect opposite connection directions.",
  },
  {
    title: "Action",
    text:
      "Allow or Block determines what happens when the rule matches.",
  },
  {
    title: "Profile",
    text:
      "A rule may apply only to Domain, Private, Public, or a combination of profiles.",
  },
  {
    title: "Program / service",
    text:
      "A rule can be tied to a specific executable or Windows service instead of a broad port allowance.",
  },
  {
    title: "Protocol",
    text:
      "TCP, UDP, ICMP, and other protocols behave differently and should match the service requirement.",
  },
  {
    title: "Local port",
    text:
      "The server-side port the rule allows or blocks when port filtering is used.",
  },
  {
    title: "Remote port",
    text:
      "The remote-side port can also be part of the match conditions.",
  },
  {
    title: "Local address",
    text:
      "Can restrict the rule to specific local network interfaces or addresses.",
  },
  {
    title: "Remote address",
    text:
      "Can narrow which clients or networks are allowed to reach the service.",
  },
];

const roleExamples = [
  {
    role: "DNS Server",
    need:
      "Clients must be able to send DNS queries to the server when DNS is required.",
    firewall:
      "Review the role-specific DNS inbound rules and confirm the intended profiles and scope.",
    verify:
      "Resolve required names from an authorized client.",
  },
  {
    role: "DHCP Server",
    need:
      "DHCP depends on network traffic used for address assignment and renewal.",
    firewall:
      "Protect the DHCP role rules while confirming they are limited to the intended profiles and networks.",
    verify:
      "Confirm a client can obtain or renew an IP address.",
  },
  {
    role: "SMB / File Server",
    need:
      "Authorized clients must reach required file shares.",
    firewall:
      "Review File and Printer Sharing rules rather than opening unrelated ports broadly.",
    verify:
      "Connect to the required SMB share from an authorized client.",
  },
  {
    role: "RDP",
    need:
      "Authorized administrators may require Remote Desktop access.",
    firewall:
      "Review Remote Desktop inbound rules, profile scope, and remote-address restrictions.",
    verify:
      "Test the intended RDP connection from an authorized management system.",
  },
  {
    role: "WinRM / PowerShell Remoting",
    need:
      "Remote administration may require WinRM listeners and matching firewall access.",
    firewall:
      "Review Windows Remote Management rules and keep scope as narrow as the management design allows.",
    verify:
      "Test the required remote-management path from an authorized system.",
  },
  {
    role: "IIS",
    need:
      "Clients must reach the required website or application.",
    firewall:
      "Allow only the protocol, port, profile, and scope needed by the hosted service.",
    verify:
      "Open the required site or application from an authorized client.",
  },
];

const inspectionCommands = [
  {
    label: "Firewall profiles",
    command:
      "Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction, DefaultOutboundAction",
    purpose:
      "Shows profile state and default actions.",
  },
  {
    label: "Enabled inbound rules",
    command:
      "Get-NetFirewallRule -Direction Inbound -Enabled True | Select-Object DisplayName, Action, Profile, Direction",
    purpose:
      "Creates a broad inventory of enabled inbound rules.",
  },
  {
    label: "Enabled outbound rules",
    command:
      "Get-NetFirewallRule -Direction Outbound -Enabled True | Select-Object DisplayName, Action, Profile, Direction",
    purpose:
      "Creates a broad inventory of enabled outbound rules.",
  },
  {
    label: "Rule details",
    command:
      'Get-NetFirewallRule -DisplayName "Rule Name" | Format-List *',
    purpose:
      "Shows deeper rule metadata. Replace Rule Name with the rule being reviewed.",
  },
  {
    label: "Port filters",
    command:
      'Get-NetFirewallRule -DisplayName "Rule Name" | Get-NetFirewallPortFilter',
    purpose:
      "Shows protocol and port conditions for a specific rule.",
  },
  {
    label: "Address filters",
    command:
      'Get-NetFirewallRule -DisplayName "Rule Name" | Get-NetFirewallAddressFilter',
    purpose:
      "Shows local and remote address scope for a specific rule.",
  },
  {
    label: "Application filters",
    command:
      'Get-NetFirewallRule -DisplayName "Rule Name" | Get-NetFirewallApplicationFilter',
    purpose:
      "Shows whether a rule is tied to a specific executable.",
  },
  {
    label: "Service filters",
    command:
      'Get-NetFirewallRule -DisplayName "Rule Name" | Get-NetFirewallServiceFilter',
    purpose:
      "Shows whether a rule is tied to a particular Windows service.",
  },
];

const reviewQuestions = [
  "Which server role or service needs this rule?",
  "Is the rule enabled?",
  "Is it inbound or outbound?",
  "Does the action allow or block traffic?",
  "Which profile or profiles does it apply to?",
  "Is the protocol correct for the required service?",
  "Is the port range narrow or overly broad?",
  "Is the rule tied to a specific program or service?",
  "Can the remote-address scope be narrowed safely?",
  "How will you verify the required service after changing the rule?",
];

const exposureSignals = [
  {
    title: "Any program",
    text:
      "A rule that is not tied to a specific program can be broader than necessary.",
  },
  {
    title: "Any port",
    text:
      "Rules allowing broad port ranges deserve extra review.",
  },
  {
    title: "All profiles",
    text:
      "A rule applying to Domain, Private, and Public may expose the service more broadly than intended.",
  },
  {
    title: "Any remote address",
    text:
      "The rule may accept connections from more networks or clients than necessary.",
  },
  {
    title: "Duplicate rules",
    text:
      "Multiple similar rules can make it hard to understand which configuration actually permits traffic.",
  },
  {
    title: "Unknown application path",
    text:
      "A rule tied to an unfamiliar executable should be investigated before being kept or removed.",
  },
];

const troubleshooting = [
  {
    symptom: "A required service works locally but not from clients.",
    checks:
      "Confirm the service is running, the server is listening, the correct firewall profile is active, the relevant inbound rule is enabled, and the client is within the permitted scope.",
  },
  {
    symptom: "RDP stopped after firewall hardening.",
    checks:
      "Review Remote Desktop rules, active profile, remote-address scope, RDP service state, authorized users, and User Rights Assignment.",
  },
  {
    symptom: "DNS queries fail from clients.",
    checks:
      "Confirm the DNS Server service is running, zones are healthy, DNS firewall rules are enabled for the correct profile, and the client can reach the server.",
  },
  {
    symptom: "The GUI rule looks correct but traffic still fails.",
    checks:
      "Check whether Group Policy controls the rule, whether a block rule or different profile applies, and whether the application or service itself is listening.",
  },
  {
    symptom: "The server shows Public profile unexpectedly.",
    checks:
      "Investigate network category, domain connectivity, DNS, and Network Location Awareness before loosening Public-profile firewall rules.",
  },
  {
    symptom: "A rule returns after being changed.",
    checks:
      "The rule may be managed by Group Policy. Inspect gpresult and the relevant firewall GPO instead of repeatedly editing the local copy.",
  },
];

const narrowingExamples = [
  {
    title: "RDP from management subnet only",
    scenario:
      "RDP is required, but only systems on a management subnet should connect.",
    approach:
      "Keep the required RDP rule and narrow Remote IP address scope to the authorized management network rather than disabling RDP completely.",
    verify:
      "Test RDP from an authorized management host and confirm an unrelated host is not permitted.",
  },
  {
    title: "SMB for one internal network",
    scenario:
      "A file server must serve internal clients but should not expose SMB broadly.",
    approach:
      "Keep File and Printer Sharing rules for the required profile and network scope only.",
    verify:
      "Open the required share from an authorized client and confirm unintended networks cannot reach it.",
  },
  {
    title: "IIS application on one required port",
    scenario:
      "A required internal web application listens on a known port.",
    approach:
      "Allow the specific protocol and port tied to the required service instead of creating a broad Any/Any rule.",
    verify:
      "Open the application from an authorized client and confirm unrelated ports remain closed.",
  },
];

const changeDiscipline = [
  "Read the scenario and identify required network services.",
  "Record the active firewall profile.",
  "Record existing rule state before editing.",
  "Confirm the related Windows service or role is actually required.",
  "Narrow one condition at a time.",
  "Avoid broad Any/Any allow rules.",
  "Preserve remote administration before high-impact changes.",
  "Test from an authorized client after each major change.",
  "Check Event Viewer and service health if connectivity breaks.",
  "Document the final rule and why it exists.",
];

const decisionCases = [
  {
    title: "RDP rule is enabled for all profiles",
    evidence:
      "The server only needs RDP on the domain network.",
    reasoning:
      "RDP is required, but the profile exposure is broader than the scenario needs.",
    response:
      "Confirm the active domain-management path, then narrow the rule to the required profile and scope rather than disabling RDP entirely.",
  },
  {
    title: "Unknown inbound allow rule",
    evidence:
      "The rule allows an unfamiliar executable from any remote address.",
    reasoning:
      "The rule could be unnecessary or malicious, but it may also belong to a required application.",
    response:
      "Inspect the executable path, publisher, service dependency, listening port, installed application, and scenario requirement before disabling it.",
  },
  {
    title: "DNS rule is disabled",
    evidence:
      "The server is a required DNS server and clients cannot resolve names.",
    reasoning:
      "The disabled firewall rule may be blocking a required service.",
    response:
      "Confirm DNS Server is healthy and the correct rule/profile is intended, then restore only the required DNS access and verify from a client.",
  },
  {
    title: "Local firewall rule keeps returning",
    evidence:
      "A student disables a rule locally, but it reappears after policy refresh.",
    reasoning:
      "Group Policy may own the firewall configuration.",
    response:
      "Use gpresult and Group Policy Management to identify the controlling GPO before making further changes.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Identify required roles",
    text:
      "In the fictional environment, FILE-SRV must provide the TeamDocs SMB share and RDP access for Morgan from the management network.",
  },
  {
    number: "02",
    title: "Open Advanced Security",
    text:
      "Run wf.msc and record the active profile plus the relevant File and Printer Sharing and Remote Desktop inbound rules.",
  },
  {
    number: "03",
    title: "Confirm with PowerShell",
    text:
      "Use Get-NetFirewallProfile and Get-NetFirewallRule to compare GUI state with the PowerShell inventory.",
  },
  {
    number: "04",
    title: "Review scope",
    text:
      "The RDP rule allows any remote address. The TeamDocs SMB rule applies to more profiles than the scenario requires.",
  },
  {
    number: "05",
    title: "Harden narrowly",
    text:
      "Preserve both required services, but narrow RDP to the authorized management network and restrict SMB to the required profile and client network.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "From authorized clients, confirm Morgan can still use RDP and required users can still reach TeamDocs. Confirm unintended access is not permitted.",
  },
];

const mistakes = [
  {
    title: "Disabling the firewall to make a service work",
    text:
      "That removes a major control instead of solving the actual rule, profile, or service problem.",
  },
  {
    title: "Deleting rules before understanding them",
    text:
      "Role-specific rules may be required by DNS, DHCP, SMB, RDP, WinRM, IIS, or another server function.",
  },
  {
    title: "Opening Any/Any rules",
    text:
      "Broad allow rules solve connectivity by creating unnecessary exposure.",
  },
  {
    title: "Ignoring the active profile",
    text:
      "A correct rule on the wrong profile may not affect the connection at all.",
  },
  {
    title: "Testing only on the server",
    text:
      "Firewall behavior must be verified from the clients that actually depend on the service.",
  },
  {
    title: "Ignoring Group Policy",
    text:
      "Locally edited firewall rules may be centrally managed and re-applied later.",
  },
];

const verification = [
  "The intended firewall profile is enabled.",
  "Default inbound and outbound actions are understood.",
  "Required role-specific rules remain enabled.",
  "Unnecessary broad allow rules have been investigated.",
  "Remote-address scope is as narrow as the scenario allows.",
  "Required DNS, DHCP, SMB, RDP, WinRM, or IIS functions still work as applicable.",
  "Authorized remote administration still works.",
  "Group Policy is not unexpectedly overriding the intended firewall state.",
  "No required application lost network access.",
  "The final firewall configuration is documented.",
];

const checklist = [
  "Open wf.msc.",
  "Record Domain, Private, and Public profile state.",
  "Run Get-NetFirewallProfile.",
  "Review enabled inbound rules.",
  "Review enabled outbound rules when relevant.",
  "Inspect protocol and port filters.",
  "Inspect program and service filters.",
  "Inspect remote-address scope.",
  "Identify role-specific firewall dependencies.",
  "Check for Group Policy-managed rules.",
  "Avoid broad Any/Any rules.",
  "Verify required services from an authorized client.",
];

const reflection = [
  "Why should a required service usually be narrowed instead of simply blocked?",
  "Why does the active firewall profile matter?",
  "How can remote-address scope reduce exposure without disabling a service?",
  "Why can a firewall rule look correct while the service is still unreachable?",
  "What should you inspect before disabling an unfamiliar inbound rule?",
  "Why is client-side verification essential after firewall changes?",
];

export default function WindowsDefenderFirewallServerPage() {
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
            <Link href="/cyberpatriot/windows-server/microsoft-defender-antivirus" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/windows-update-patch-management" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 08
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Defender Firewall
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Protect server network exposure without breaking DNS, DHCP,
                SMB, RDP, WinRM, web services, or other scenario-required roles.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong firewall hardening is not about closing everything. It is
                about allowing exactly what required services need and reducing
                unnecessary exposure around them.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Profiles</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary console</span>
                  <span className="font-bold text-white">wf.msc</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main concern</span>
                  <span className="font-bold text-white">Required exposure</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Narrow + functional</span>
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
          Understand how firewall decisions are made
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
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
              Required service does not mean unlimited exposure
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Keep the service available while limiting profiles, protocols,
              ports, programs, services, and remote networks to what the
              scenario actually requires.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Firewall changes can break the entire server role
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              DNS, DHCP, SMB, RDP, WinRM, IIS, and other required services can
              become unreachable even when their Windows services are healthy.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Verify every major firewall change from an authorized client.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review firewall state
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
          Firewall profiles
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Domain, Private, and Public are different security contexts
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {profiles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                <p className="text-sm leading-6 text-yellow-100">{item.concern}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Rule anatomy
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten parts of a firewall rule to inspect
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {ruleAnatomy.map((item) => (
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
          Role dependencies
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Firewall rules exist because services need communication
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roleExamples.map((item) => (
            <article
              key={item.role}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.role}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.need}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Firewall review
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.firewall}</p>
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory rules and filters without changing them
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
          Rule review questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions before editing a firewall rule
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {reviewQuestions.map((item, index) => (
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
          Exposure signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Signs a rule may be broader than necessary
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {exposureSignals.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When required traffic stops working
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
            Narrowing examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the service, reduce the exposure
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {narrowingExamples.map((item) => (
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
            Change discipline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten steps for controlled firewall hardening
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
            Firewall decisions in server context
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
            Harden FILE-SRV without breaking TeamDocs or RDP
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
          Firewall mistakes that trade security for outages
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
              Test your firewall reasoning
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
              Confirm protection and connectivity
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
            Before leaving firewall review
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
                Windows Update &amp; Patch Management
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review update state, patch categories, restart planning,
                servicing risk, and post-update verification for servers that
                may host critical roles.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/windows-update-patch-management"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 09 &rarr;
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
            <Link href="/cyberpatriot/windows-server/microsoft-defender-antivirus" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/windows-update-patch-management" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
