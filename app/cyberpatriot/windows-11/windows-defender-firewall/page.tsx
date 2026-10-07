import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Windows Defender Firewall profiles, rules, applications, ports, protocols, and scope work together.",
  "Distinguish inbound rules from outbound rules and understand why their security impact differs.",
  "Review firewall state without disabling protection globally or breaking required services.",
  "Recognize how Remote Desktop, file sharing, remote management, and other required functions depend on specific firewall access.",
  "Use Windows Security, Windows Defender Firewall with Advanced Security, and PowerShell to inspect firewall configuration.",
  "Verify both reduced exposure and continued required connectivity after firewall changes.",
];

const profiles = [
  {
    title: "Domain profile",
    text:
      "Used when Windows identifies the device as connected to an authenticated domain network. Competition images may or may not use a domain.",
    question:
      "Is the image actually domain-connected, and is this profile active?",
  },
  {
    title: "Private profile",
    text:
      "Intended for trusted networks such as an internal home, lab, or organization network when the network is marked private.",
    question:
      "Does the scenario expect trusted internal connectivity such as file sharing or remote management?",
  },
  {
    title: "Public profile",
    text:
      "Designed for less-trusted networks and is normally more restrictive.",
    question:
      "Is the system on a network that should be treated as untrusted or minimally trusted?",
  },
];

const ruleAnatomy = [
  {
    title: "Direction",
    text:
      "Inbound rules govern traffic entering the Windows host. Outbound rules govern traffic leaving the host.",
  },
  {
    title: "Action",
    text:
      "A rule may allow or block traffic. Understand whether a rule creates access or explicitly denies it.",
  },
  {
    title: "Program or service",
    text:
      "Rules can apply to a specific executable or service rather than all traffic using a port.",
  },
  {
    title: "Protocol and port",
    text:
      "TCP, UDP, ICMP, and other protocols may be filtered by local or remote port.",
  },
  {
    title: "Scope",
    text:
      "A rule can restrict which local or remote IP addresses are allowed, reducing unnecessary exposure.",
  },
  {
    title: "Profile",
    text:
      "A rule may apply only on Domain, Private, Public, or a combination of profiles.",
  },
  {
    title: "Interface and edge conditions",
    text:
      "Advanced rule properties can further constrain where traffic is allowed.",
  },
  {
    title: "Enabled state",
    text:
      "A rule can exist without being active. Read the rule state before assuming it is affecting traffic.",
  },
];

const inboundOutbound = [
  {
    title: "Inbound traffic",
    text:
      "Inbound rules are often the most visible competition concern because they determine which services can receive connections from other systems.",
    example:
      "A broad inbound rule allowing any remote address to reach a management service deserves careful review.",
  },
  {
    title: "Outbound traffic",
    text:
      "Windows commonly allows more outbound traffic by default, but outbound rules can still matter when the scenario or system requires tighter egress control.",
    example:
      "Blocking all outbound traffic without understanding application dependencies can break updates, authentication, or required services.",
  },
];

const requiredServices = [
  {
    title: "Remote Desktop",
    dependencies:
      "RDP service state, user rights, authorized users/groups, firewall rules, and network reachability all have to align.",
    caution:
      "Disabling every RDP-related rule may secure one exposure while breaking required remote administration.",
  },
  {
    title: "File and printer sharing",
    dependencies:
      "Share configuration, NTFS permissions, firewall rules, network profile, and authorized users interact.",
    caution:
      "Broadly blocking sharing can break required collaboration; broadly allowing it can expose unnecessary access.",
  },
  {
    title: "Remote management",
    dependencies:
      "Tools such as PowerShell remoting or management services may rely on specific services, listeners, and firewall rules.",
    caution:
      "Confirm whether remote administration is actually required before tightening or enabling access.",
  },
  {
    title: "Application-specific services",
    dependencies:
      "A required application may listen on a particular port or use a specific executable rule.",
    caution:
      "Prefer narrowly scoped application or service rules over broad port exposure when appropriate.",
  },
];

const inspectionTools = [
  {
    title: "Windows Security",
    command: "Windows Security → Firewall & network protection",
    text:
      "Quickly shows active network profile and whether Microsoft Defender Firewall is enabled for each profile.",
  },
  {
    title: "Advanced Security console",
    command: "wf.msc",
    text:
      "Provides detailed inbound rules, outbound rules, connection security rules, monitoring, profiles, ports, programs, and scope.",
  },
  {
    title: "PowerShell profile review",
    command: "Get-NetFirewallProfile",
    text:
      "Shows firewall profile state and selected default behavior.",
  },
  {
    title: "PowerShell rule review",
    command: "Get-NetFirewallRule",
    text:
      "Lists firewall rules so you can inspect enabled state, direction, action, display name, and profile context.",
  },
];

const usefulCommands = [
  {
    label: "Enabled inbound rules",
    command:
      'Get-NetFirewallRule -Enabled True -Direction Inbound | Select-Object DisplayName, Action, Profile',
    purpose:
      "Creates a quick view of active inbound rules that may expose services.",
  },
  {
    label: "Enabled outbound rules",
    command:
      'Get-NetFirewallRule -Enabled True -Direction Outbound | Select-Object DisplayName, Action, Profile',
    purpose:
      "Shows active outbound controls when the scenario or investigation requires them.",
  },
  {
    label: "Review rule filters",
    command:
      'Get-NetFirewallRule -DisplayName "Example Rule" | Get-NetFirewallPortFilter',
    purpose:
      "Helps connect a selected rule to its protocol and port configuration in an authorized lab.",
  },
  {
    label: "Review address scope",
    command:
      'Get-NetFirewallRule -DisplayName "Example Rule" | Get-NetFirewallAddressFilter',
    purpose:
      "Shows local and remote address scope, which is critical when deciding whether a rule is broader than necessary.",
  },
];

const questionsBeforeChange = [
  "Which firewall profile is active right now?",
  "Is the firewall enabled for every profile that matters?",
  "What service or application does this rule support?",
  "Is the rule inbound or outbound?",
  "Does the scenario require the service?",
  "Who or what should be allowed to connect?",
  "Can the rule be narrowed by program, port, profile, or remote address?",
  "Could disabling the rule break RDP, file sharing, remote management, or another required function?",
  "Is there a safer way to reduce exposure without removing the required service?",
  "How will the team test the service after the rule changes?",
];

const scopePrinciples = [
  {
    title: "Any address is broad",
    text:
      "A rule that permits any remote address may be appropriate in some cases, but it creates more exposure than a rule limited to known required sources.",
  },
  {
    title: "Program rules can be narrower",
    text:
      "When a specific application needs network access, program-based rules can sometimes reduce exposure compared with a broad port-only rule.",
  },
  {
    title: "Profiles reduce accidental exposure",
    text:
      "A rule needed on a trusted Private network may not need to apply on Public networks.",
  },
  {
    title: "Required service does not mean unrestricted service",
    text:
      "A service can remain available while access is narrowed to the users, networks, or profiles that actually need it.",
  },
];

const decisionCases = [
  {
    title: "Required RDP with a very broad rule",
    evidence:
      "The scenario requires RDP for one authorized administrator. The inbound Remote Desktop rule is enabled on every profile and allows any remote address.",
    reasoning:
      "RDP must remain available, but the current exposure may be broader than necessary.",
    response:
      "Keep required RDP functionality, narrow profile or remote-address scope when the scenario supports it, then test authorized remote access.",
  },
  {
    title: "Firewall disabled on Public",
    evidence:
      "The Public profile firewall is disabled and the scenario gives no reason for that state.",
    reasoning:
      "The host may be exposed whenever Windows uses the Public network profile.",
    response:
      "Confirm no approved security product replaces the control, enable expected protection, and verify required network functions.",
  },
  {
    title: "Unknown inbound application rule",
    evidence:
      "An enabled inbound rule allows an unfamiliar executable to accept connections.",
    reasoning:
      "The rule is suspicious enough to investigate, but the executable may support a required application.",
    response:
      "Identify the executable, service, owner, port, and scenario purpose before disabling the rule.",
  },
  {
    title: "Required share stops working",
    evidence:
      "After tightening file-sharing rules, authorized users can no longer reach a required project share.",
    reasoning:
      "The security change reduced exposure but also broke required functionality.",
    response:
      "Review the active profile, sharing rules, remote scope, and required client addresses; restore the narrowest working authorized path.",
  },
];

const profileReview = [
  "Confirm which network profile is active.",
  "Confirm firewall is enabled on Domain, Private, and Public as appropriate.",
  "Review default inbound behavior.",
  "Review default outbound behavior.",
  "Identify profile-specific exceptions.",
  "Compare active profile with scenario network requirements.",
];

const inboundReview = [
  "Start with enabled inbound Allow rules.",
  "Identify the program, service, protocol, and local port.",
  "Review the remote address scope.",
  "Check which profiles the rule applies to.",
  "Map the rule to a scenario-required service or application.",
  "Investigate rules with no clear purpose before disabling them.",
  "Prefer narrowing over removing when a service is required.",
];

const verificationLayers = [
  {
    title: "Firewall state",
    text:
      "Confirm the expected profiles remain enabled and the intended rule is actually enabled or disabled.",
  },
  {
    title: "Exposure",
    text:
      "Confirm the rule is no broader than needed by checking program, port, profile, and remote scope.",
  },
  {
    title: "Required service",
    text:
      "Test RDP, shares, remote management, or the application function that depends on the rule.",
  },
  {
    title: "Error evidence",
    text:
      "Check service logs, Event Viewer, or application messages if connectivity fails after the change.",
  },
  {
    title: "Team state",
    text:
      "Record high-impact changes so another teammate does not undo or duplicate the firewall work.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "Morgan must use RDP from the internal lab network. A project share must remain available to two authorized workstations. No public-network access is required.",
  },
  {
    number: "02",
    title: "Inspect profiles",
    text:
      "Private is active. Firewall is enabled on Private and Domain but disabled on Public.",
  },
  {
    number: "03",
    title: "Inspect inbound rules",
    text:
      "RDP is allowed on all profiles from any remote address. File sharing is allowed on Private from any remote address. An unfamiliar media-service rule is also enabled.",
  },
  {
    number: "04",
    title: "Classify the findings",
    text:
      "Public firewall protection should be restored. RDP is required but overly broad. File sharing is required but may be scoped more tightly. The media-service rule needs investigation.",
  },
  {
    number: "05",
    title: "Apply controlled changes",
    text:
      "Enable expected Public protection, narrow required RDP and share access to the authorized environment when possible, and leave the unfamiliar rule unchanged until its purpose is known.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Test authorized RDP and share access, confirm firewall profiles are enabled, re-check rule scope, and document unresolved investigation items.",
  },
];

const troubleshooting = [
  {
    symptom: "RDP stops working",
    questions:
      "Is the Remote Desktop service running? Is the correct firewall rule enabled for the active profile? Is the authorized client inside the allowed remote scope? Does the user have RDP rights?",
  },
  {
    symptom: "File sharing stops working",
    questions:
      "Is the network profile correct? Are file-sharing firewall rules enabled? Does the share exist? Do NTFS and share permissions still allow the user?",
  },
  {
    symptom: "A rule looks enabled but traffic still fails",
    questions:
      "Is another blocking rule or profile in effect? Does the application listen on the expected port? Is the rule tied to the correct program or service?",
  },
  {
    symptom: "The firewall keeps appearing disabled",
    questions:
      "Is another approved security product managing firewall behavior? Is policy controlling the setting? Is the team checking the correct profile?",
  },
];

const mistakes = [
  {
    title: "Turning the firewall off to troubleshoot",
    text:
      "That removes a major security control and can hide the real cause of the connectivity problem.",
  },
  {
    title: "Deleting all allow rules",
    text:
      "Required RDP, shares, management tools, and applications may depend on specific inbound rules.",
  },
  {
    title: "Ignoring the active profile",
    text:
      "A rule can be correct for Private but irrelevant or unsafe on Public.",
  },
  {
    title: "Reviewing only port numbers",
    text:
      "Program, service, profile, action, and remote scope can be just as important as the port.",
  },
  {
    title: "Broadening access to make it work",
    text:
      "Opening access to any address may fix the symptom while creating unnecessary exposure.",
  },
  {
    title: "No connectivity test",
    text:
      "A saved firewall rule is not complete until the required application or remote path is tested.",
  },
];

const checklist = [
  "Confirm the active network profile.",
  "Confirm firewall protection is enabled where expected.",
  "Review enabled inbound Allow rules.",
  "Map each important rule to a required service or application.",
  "Review program, service, protocol, port, profile, and remote scope.",
  "Investigate unfamiliar rules instead of deleting them blindly.",
  "Preserve required RDP, sharing, and management paths.",
  "Narrow broad exposure when the scenario supports it.",
  "Test required connectivity after every high-impact change.",
  "Check logs or service state if connectivity fails.",
  "Document major firewall changes and unresolved rules.",
  "Re-check the final profile and rule state before leaving the firewall area.",
];

const reflection = [
  "What is the difference between an inbound rule and an outbound rule?",
  "Why does the active network profile matter when reviewing firewall rules?",
  "Why is a required service not the same as unrestricted access?",
  "What parts of a firewall rule can be narrowed besides the port?",
  "Why should an unfamiliar rule be investigated before it is disabled?",
  "What should be verified after changing an RDP or file-sharing rule?",
];

export default function WindowsDefenderFirewallPage() {
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
            <Link href="/cyberpatriot/windows-11/microsoft-defender-antivirus" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/windows-update-patch-management" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 06
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Defender Firewall
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how firewall profiles, inbound and outbound rules, ports,
                programs, services, and remote scope work together without
                breaking required Windows connectivity.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to block everything. The goal is to reduce
                unnecessary exposure while preserving the exact network paths
                the scenario requires.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Firewall profiles</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Rule properties</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Required-service examples</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Narrow required access</span>
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
            What firewall review should help you do
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
              A firewall rule is a decision about who may communicate
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Direction, action, application, port, profile, and remote scope
              combine to define the real exposure. Reviewing only the port
              misses important context.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Blocking traffic can also break the mission
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              RDP, shares, remote management, and required applications may
              depend on firewall access.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Never disable or delete a high-impact rule until you understand
              which required function depends on it.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Firewall profiles
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          The network context changes the policy
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {profiles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Ask
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.question}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Rule anatomy
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the entire rule before judging it
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
        <div className="grid gap-6 lg:grid-cols-2">
          {inboundOutbound.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Traffic direction
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Required services
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Firewall decisions must preserve dependencies
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {requiredServices.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.dependencies}
              </p>
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Caution
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.caution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection tools
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a firewall picture before changing it
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionTools.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Query firewall rules efficiently
            </h2>
            <div className="mt-5 grid gap-3">
              {usefulCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before a firewall change
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ten questions to answer
            </h2>
            <div className="mt-5 grid gap-3">
              {questionsBeforeChange.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Scope and least exposure
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Keep required access as narrow as practical
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scopePrinciples.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Firewall decisions in context
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Profile review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the foundation first
            </h2>
            <div className="mt-5 grid gap-3">
              {profileReview.map((item, index) => (
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Inbound rule review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Find exposure without breaking services
            </h2>
            <div className="mt-5 grid gap-3">
              {inboundReview.map((item, index) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reduce exposure while preserving RDP and file sharing
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When a required connection stops working
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification model
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Five things to prove after a firewall change
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {verificationLayers.map((item) => (
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
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Firewall habits that create avoidable problems
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Firewall checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Review before leaving the firewall area
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
                Windows Update &amp; Patch Management
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to evaluate update status, security patches,
                restart requirements, update history, and competition-time
                tradeoffs without treating every pending update the same.
              </p>
            </div>
            <Link
              href="/cyberpatriot/windows-11/windows-update-patch-management"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 07 →
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
            <Link href="/cyberpatriot/windows-11/microsoft-defender-antivirus" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/windows-update-patch-management" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
