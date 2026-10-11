import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review the complete Cisco & Networking pathway from topology through management hardening.",
  "Use a competition-ready final review sequence without forcing every check into one universal workflow.",
  "Verify switching, VLANs, trunks, inter-VLAN routing, routing, ACLs, services, NAT, and management access.",
  "Separate confirmed issues from suspicious findings and harmless differences.",
  "Preserve required services while reducing unnecessary exposure.",
  "Finish with documented evidence, end-to-end verification, and a deliberate save decision.",
];

const reviewMindset = [
  {
    title: "Required traffic first",
    text:
      "A secure device that breaks the required network is not a successful result. Preserve the services and communication paths the scenario says must work.",
  },
  {
    title: "Evidence before action",
    text:
      "Read operational state and configuration before making changes. A suspicious setting is not automatically wrong.",
  },
  {
    title: "Narrow changes",
    text:
      "Fix the exact interface, VLAN, route, ACL entry, service, account, or management setting supported by the evidence.",
  },
  {
    title: "Verify after every meaningful change",
    text:
      "Retest the original requirement plus one unaffected path so a fix does not silently break something else.",
  },
  {
    title: "Document as you go",
    text:
      "Keep short notes about findings, changes, verification, and rollback so the final review is based on facts rather than memory.",
  },
  {
    title: "Save only when stable",
    text:
      "Do not make the running configuration persistent until the required paths and management access have been verified.",
  },
];

const lessonMap = [
  ["01", "Cisco Competition Workflow", "Scenario, topology, baseline, packet path, evidence, narrow change, verification."],
  ["02", "Networking Foundations & the OSI Model", "Layered reasoning, MAC vs IP, transport ports, encapsulation, device roles."],
  ["03", "IPv4 Addressing & Subnet Masks", "Network/host portions, masks, prefixes, valid hosts, private ranges, block size."],
  ["04", "Subnetting for Competition", "Capacity, equal-size subnetting, VLSM, overlap detection, competition calculations."],
  ["05", "Cisco IOS CLI & Safe Navigation", "Modes, help, show commands, running vs startup config, safe command habits."],
  ["06", "Switching, MAC Tables & Ethernet", "MAC learning, forwarding, interfaces, counters, ARP, duplex and speed."],
  ["07", "VLANs & Access Ports", "Broadcast domains, access mode, VLAN membership, endpoint segmentation."],
  ["08", "Trunks, Native VLANs & 802.1Q", "Multiple VLANs, tagging, native VLAN, allowed lists, trunk troubleshooting."],
  ["09", "Inter-VLAN Routing", "Router-on-a-stick, SVIs, gateways, Layer 3 forwarding between VLANs."],
  ["10", "Switch Port Security", "Secure MACs, sticky learning, limits, violations, defensive access-port controls."],
  ["11", "Router Interfaces & Static Routing", "Layer 3 interfaces, connected routes, next hops, static and default routing."],
  ["12", "Routing Concepts & Dynamic Protocol Awareness", "RIP, OSPF, EIGRP, route source, AD, metrics, neighbors."],
  ["13", "Access Control Lists", "First match, implicit deny, standard vs extended, wildcard masks, direction."],
  ["14", "DHCP, DNS & NAT Concepts", "Client configuration, relay, name resolution, translation, service dependencies."],
  ["15", "Cisco Device Hardening & Management Plane", "SSH, VTY, accounts, web management, SNMP, logging, source restriction."],
  ["16", "Network Troubleshooting Workflow", "Symptom scope, packet path, layered evidence, hypothesis, controlled fix."],
  ["17", "Packet Tracer Defensive Practice", "Known-good baselines, hidden faults, verification matrices, timed drills."],
];

const firstLookChecks = [
  {
    area: "Scenario",
    question:
      "What services, users, management paths, and restrictions are explicitly required?",
  },
  {
    area: "Topology",
    question:
      "Which switches, routers, interfaces, VLANs, subnets, and servers form the expected path?",
  },
  {
    area: "Management path",
    question:
      "How will you maintain authorized access while hardening the device?",
  },
  {
    area: "Critical dependencies",
    question:
      "Which paths must remain working before you change anything?",
  },
  {
    area: "Known differences",
    question:
      "Are there platform or Packet Tracer limitations that affect commands or features?",
  },
  {
    area: "Rollback",
    question:
      "Do you have a clean copy, console path, or documented original state before major changes?",
  },
];

const rapidBaseline = [
  ["show running-config", "Review the active configuration before changing it."],
  ["show startup-config", "Compare persistent configuration where useful."],
  ["show ip interface brief", "Check Layer 3 addressing and interface state."],
  ["show interfaces status", "Check switchport status, VLAN, speed, and duplex."],
  ["show vlan brief", "Review VLANs and access-port membership."],
  ["show interfaces trunk", "Review trunk operation, native VLAN, and allowed VLANs."],
  ["show mac address-table", "Check Layer 2 learning and port placement."],
  ["show ip route", "Review connected, static, and dynamic routes."],
  ["show access-lists", "Review traffic policy and counters."],
  ["show users", "Review current management sessions."],
  ["show logging", "Review recent events where available."],
];

const switchingChecklist = [
  {
    item: "Required access ports are connected",
    verify:
      "show interfaces status and endpoint testing confirm the correct physical or simulated link.",
  },
  {
    item: "Access ports are in the intended VLANs",
    verify:
      "show vlan brief and show interfaces <interface> switchport match the topology plan.",
  },
  {
    item: "Endpoint MAC addresses appear where expected",
    verify:
      "show mac address-table confirms source MAC learning on the expected access or uplink interfaces.",
  },
  {
    item: "Speed and duplex are reasonable",
    verify:
      "show interfaces shows no obvious mismatch or steadily increasing error pattern.",
  },
  {
    item: "Required uplinks are operational",
    verify:
      "Relevant switch uplinks are connected and forwarding.",
  },
  {
    item: "Unused ports are understood",
    verify:
      "Do not shut down ports merely because they are currently quiet. Confirm role first.",
  },
];

const vlanChecklist = [
  {
    item: "Required VLANs exist",
    verify:
      "show vlan brief confirms the documented VLAN IDs and names where supported.",
  },
  {
    item: "Access ports use the correct VLAN",
    verify:
      "Each endpoint-facing port matches the intended user or service zone.",
  },
  {
    item: "Trunks are operational",
    verify:
      "show interfaces trunk shows the intended interfaces operating as trunks.",
  },
  {
    item: "Allowed VLAN list is correct",
    verify:
      "Required VLANs cross each trunk without unnecessary broadening.",
  },
  {
    item: "Native VLAN design matches on both ends",
    verify:
      "Compare trunk configuration and operational state at both ends.",
  },
  {
    item: "STP is not unexpectedly blocking the needed path",
    verify:
      "Use show spanning-tree vlan <id> where relevant.",
  },
];

const interVlanChecklist = [
  {
    item: "Each VLAN has the intended gateway",
    verify:
      "Endpoints and Layer 3 interfaces use matching subnet design.",
  },
  {
    item: "Subinterfaces or SVIs are operational",
    verify:
      "show ip interface brief confirms the Layer 3 gateway interfaces are up.",
  },
  {
    item: "802.1Q encapsulation matches the VLAN plan",
    verify:
      "Router-on-a-stick subinterfaces use the intended VLAN IDs.",
  },
  {
    item: "Native VLAN configuration is deliberate",
    verify:
      "Do not mix native and tagged expectations accidentally.",
  },
  {
    item: "Permitted inter-VLAN traffic succeeds",
    verify:
      "Test the real service, not only ping.",
  },
  {
    item: "Restricted inter-VLAN traffic remains blocked",
    verify:
      "ACL or policy behavior still matches the scenario after fixes.",
  },
];

const routingChecklist = [
  {
    item: "Connected routes are present",
    verify:
      "Operational Layer 3 interfaces produce the expected connected networks.",
  },
  {
    item: "Static routes use valid next hops",
    verify:
      "The configured next hop is reachable and belongs to the intended path.",
  },
  {
    item: "Default route points toward the real edge",
    verify:
      "0.0.0.0/0 does not hide a missing internal route.",
  },
  {
    item: "Dynamic neighbors are intentional",
    verify:
      "OSPF or EIGRP adjacencies exist only on required transit links.",
  },
  {
    item: "Passive interfaces are deliberate",
    verify:
      "User-facing networks can be advertised without unnecessary neighbor formation.",
  },
  {
    item: "Route preference makes sense",
    verify:
      "Longest prefix match, administrative distance, and metric explain which route wins.",
  },
  {
    item: "Return routes exist",
    verify:
      "The destination side has a valid path back to the source.",
  },
];

const aclChecklist = [
  {
    item: "ACL purpose is known",
    verify:
      "Every important ACL should map to a scenario requirement or documented design.",
  },
  {
    item: "Rule order is correct",
    verify:
      "Specific exceptions appear before broader rules when required.",
  },
  {
    item: "Implicit deny is accounted for",
    verify:
      "Required traffic is explicitly permitted before the end of the list.",
  },
  {
    item: "Wildcard masks are correct",
    verify:
      "The intended hosts or subnets are matched precisely.",
  },
  {
    item: "Protocol and ports are correct",
    verify:
      "TCP, UDP, ICMP, and destination ports match the real application.",
  },
  {
    item: "Interface and direction are correct",
    verify:
      "ip access-group placement matches the actual packet path.",
  },
  {
    item: "Counters support the conclusion",
    verify:
      "Controlled traffic causes the expected ACE counters to move where supported.",
  },
];

const serviceChecklist = [
  {
    service: "DHCP",
    verify:
      "Clients receive the intended IP, mask, gateway, DNS server, and lease from the correct scope.",
  },
  {
    service: "DHCP relay",
    verify:
      "Client-facing routed interfaces use the correct helper-address when the server is remote.",
  },
  {
    service: "DNS",
    verify:
      "Required names resolve to the intended IP address and the resolver itself is reachable.",
  },
  {
    service: "NAT",
    verify:
      "Inside/outside roles, classification, and translation entries match the intended edge path.",
  },
  {
    service: "HTTPS / application",
    verify:
      "The real required service responds, not merely ICMP.",
  },
  {
    service: "Management",
    verify:
      "SSH and other required administration services work only from authorized sources.",
  },
];

const managementChecklist = [
  {
    item: "Authorized admin accounts are known",
    verify:
      "Review usernames, privileges, and current sessions before removing anything.",
  },
  {
    item: "Privileged EXEC is protected",
    verify:
      "Use enable secret or the platform's supported stronger credential mechanism.",
  },
  {
    item: "SSH is functional",
    verify:
      "Test an authorized SSH login before removing Telnet.",
  },
  {
    item: "VTY transport is deliberate",
    verify:
      "transport input reflects required management protocols only.",
  },
  {
    item: "Management source restriction is correct",
    verify:
      "VTY access-class or equivalent permits authorized sources and blocks unintended ones.",
  },
  {
    item: "HTTP / HTTPS management is justified",
    verify:
      "Disable unnecessary web management without removing a required service.",
  },
  {
    item: "SNMP is intentional",
    verify:
      "Review version, source restrictions, and whether monitoring is actually required.",
  },
  {
    item: "Logs and time remain useful",
    verify:
      "Do not erase evidence; maintain accurate timestamps where supported.",
  },
];

const portSecurityChecklist = [
  {
    item: "Port-security is used only on appropriate access ports",
    verify:
      "Do not apply endpoint assumptions to trunks or infrastructure uplinks.",
  },
  {
    item: "Maximum secure MAC count matches the role",
    verify:
      "A phone-plus-PC port may legitimately require more than one secure MAC.",
  },
  {
    item: "Secure MAC addresses are expected",
    verify:
      "Compare learned or sticky addresses with the authorized endpoint design.",
  },
  {
    item: "Violation mode is understood",
    verify:
      "Protect, restrict, and shutdown behaviors have different operational impact.",
  },
  {
    item: "Err-disabled state is investigated before recovery",
    verify:
      "Do not simply bounce the interface without identifying the cause.",
  },
];

const commandReference = [
  {
    topic: "Interfaces",
    commands: [
      "show ip interface brief",
      "show interfaces status",
      "show interfaces <interface>",
    ],
  },
  {
    topic: "VLANs",
    commands: [
      "show vlan brief",
      "show interfaces <interface> switchport",
    ],
  },
  {
    topic: "Trunks",
    commands: [
      "show interfaces trunk",
      "show running-config interface <interface>",
    ],
  },
  {
    topic: "MAC / ARP",
    commands: [
      "show mac address-table",
      "show arp",
    ],
  },
  {
    topic: "Routing",
    commands: [
      "show ip route",
      "show ip protocols",
      "show ip ospf neighbor",
      "show ip eigrp neighbors",
    ],
  },
  {
    topic: "ACLs",
    commands: [
      "show access-lists",
      "show ip access-lists",
      "show ip interface <interface>",
    ],
  },
  {
    topic: "DHCP",
    commands: [
      "show ip dhcp pool",
      "show ip dhcp binding",
      "show ip dhcp conflict",
    ],
  },
  {
    topic: "NAT",
    commands: [
      "show ip nat translations",
      "show ip nat statistics",
    ],
  },
  {
    topic: "Management",
    commands: [
      "show users",
      "show ip ssh",
      "show login",
      "show running-config | section line",
    ],
  },
  {
    topic: "Logs",
    commands: [
      "show logging",
      "show clock",
    ],
  },
];

const scenarioPatterns = [
  {
    symptom:
      "One host fails, peers in the same VLAN work",
    likelyFocus:
      "Endpoint configuration, access port, port security, NIC, cable, host firewall.",
  },
  {
    symptom:
      "One entire VLAN fails",
    likelyFocus:
      "Gateway, trunk allowance, SVI/subinterface, helper-address, VLAN-specific ACL.",
  },
  {
    symptom:
      "Same VLAN works, remote subnet fails",
    likelyFocus:
      "Gateway, routing table, next hop, ACL, return path.",
  },
  {
    symptom:
      "Ping works, one application fails",
    likelyFocus:
      "Service process, transport port, ACL, DNS if name-based.",
  },
  {
    symptom:
      "Name fails, raw IP works",
    likelyFocus:
      "DNS resolver, DNS server, record, port 53 policy.",
  },
  {
    symptom:
      "Inside works, outside fails",
    likelyFocus:
      "Default route, NAT classification, outside interface, upstream path.",
  },
  {
    symptom:
      "SSH fails from one subnet only",
    likelyFocus:
      "VTY source ACL, management routing, intentional source restriction.",
  },
  {
    symptom:
      "Only one VLAN fails across trunk",
    likelyFocus:
      "Allowed VLAN list, VLAN existence, STP, native mismatch depending on design.",
  },
];

const highRiskActions = [
  {
    action: "erase startup-config / write erase",
    risk:
      "Destroys persistent configuration and is not an appropriate troubleshooting shortcut.",
  },
  {
    action: "reload",
    risk:
      "Can create downtime and may boot into an older or incomplete startup configuration.",
  },
  {
    action: "default interface",
    risk:
      "Can remove multiple required settings at once.",
  },
  {
    action: "permit ip any any",
    risk:
      "Can destroy intended policy and hide the real ACL issue.",
  },
  {
    action: "switchport trunk allowed vlan all",
    risk:
      "Can expose unnecessary VLANs and hide a precise trunking problem.",
  },
  {
    action: "no shutdown everywhere",
    risk:
      "Can activate unused or intentionally disabled interfaces.",
  },
  {
    action: "clear tables before review",
    risk:
      "Can erase useful MAC, ARP, NAT, or counter evidence.",
  },
  {
    action: "remove every unfamiliar account",
    risk:
      "Can break required administration or services.",
  },
];

const evidenceClassification = [
  {
    className: "Required",
    meaning:
      "The scenario or design explicitly depends on this service, route, VLAN, account, or communication path.",
  },
  {
    className: "Confirmed issue",
    meaning:
      "Operational evidence proves the current state violates the expected design.",
  },
  {
    className: "Suspicious",
    meaning:
      "The setting deserves investigation but has not yet been proven wrong.",
  },
  {
    className: "Unknown",
    meaning:
      "The purpose is not yet understood. Preserve it until more evidence is available.",
  },
  {
    className: "Dependency",
    meaning:
      "Another required service or path relies on this configuration.",
  },
];

const finalVerification = [
  {
    area: "Staff",
    test:
      "Authorized Staff endpoint reaches its gateway and required internal services.",
  },
  {
    area: "Students",
    test:
      "Student endpoint receives correct addressing and reaches only permitted services.",
  },
  {
    area: "Servers",
    test:
      "Required DNS, DHCP, HTTPS, or other fictional services respond correctly.",
  },
  {
    area: "Management",
    test:
      "Authorized admin source can SSH to required network devices.",
  },
  {
    area: "Inter-VLAN",
    test:
      "Permitted inter-VLAN paths work and restricted paths remain restricted.",
  },
  {
    area: "Routing",
    test:
      "Remote networks work in both directions through the intended path.",
  },
  {
    area: "NAT",
    test:
      "Required inside traffic translates outward and return traffic succeeds.",
  },
  {
    area: "Resilience",
    test:
      "Unrelated known-good traffic still works after the final changes.",
  },
];

const documentationFields = [
  {
    field: "Finding",
    example:
      "VLAN 30 missing from trunk allowed list.",
  },
  {
    field: "Evidence",
    example:
      "show interfaces trunk lists 10,20,99 but not 30.",
  },
  {
    field: "Impact",
    example:
      "Server VLAN unreachable across the uplink.",
  },
  {
    field: "Change",
    example:
      "Added only VLAN 30 to the existing allowed list.",
  },
  {
    field: "Verification",
    example:
      "VLAN 30 traffic works; other VLANs unchanged.",
  },
  {
    field: "Rollback",
    example:
      "Restore previous allowed list if unexpected behavior appears.",
  },
];

const reasoningCases = [
  {
    finding:
      "A trunk carries all VLANs",
    weak:
      "It must be wrong because trunks should always be tightly restricted.",
    better:
      "Compare the allowed set to the documented design. Broad carriage may be unnecessary, but change only when the requirement is clear.",
  },
  {
    finding:
      "An unknown administrator account exists",
    weak:
      "Delete it immediately.",
    better:
      "Check scenario documentation, privilege, current sessions, and service dependencies before deciding whether it is unauthorized.",
  },
  {
    finding:
      "One ACL has zero hits",
    weak:
      "Remove it because it is unused.",
    better:
      "Zero hits may mean no recent matching traffic, wrong test path, or an inactive requirement. Investigate before removal.",
  },
  {
    finding:
      "A static route and OSPF route both exist",
    weak:
      "Delete the static route because dynamic routing is better.",
    better:
      "Compare destination prefix, administrative distance, topology purpose, and scenario design before changing route preference.",
  },
  {
    finding:
      "HTTP management is enabled",
    weak:
      "Replace it with HTTPS without checking anything else.",
    better:
      "First determine whether web management is required at all. Disable unnecessary exposure rather than automatically substituting another service.",
  },
  {
    finding:
      "A port is currently unused",
    weak:
      "Shut down every quiet port immediately.",
    better:
      "Confirm the port is truly unused and not reserved for a required device or delayed connection before changing it.",
  },
];

const finalPassOrder = [
  {
    pass: "A",
    title: "Topology & interface sanity",
    text:
      "Confirm device roles, link state, IP addressing, and access-port placement.",
  },
  {
    pass: "B",
    title: "Layer 2 integrity",
    text:
      "Review VLANs, trunks, native VLAN expectations, MAC learning, and STP evidence.",
  },
  {
    pass: "C",
    title: "Layer 3 reachability",
    text:
      "Review gateways, routes, next hops, dynamic neighbors, and return paths.",
  },
  {
    pass: "D",
    title: "Policy & services",
    text:
      "Review ACLs, DHCP, DNS, NAT, application reachability, and required restrictions.",
  },
  {
    pass: "E",
    title: "Management plane",
    text:
      "Review accounts, SSH, VTY, web management, SNMP, logs, and source restrictions.",
  },
  {
    pass: "F",
    title: "End-to-end verification",
    text:
      "Run the required application tests from the relevant source zones.",
  },
  {
    pass: "G",
    title: "Persistence & documentation",
    text:
      "Confirm notes, rollback, and final save only after the network is stable.",
  },
];

const competitionDayChecklist = [
  "Read the scenario before touching configuration.",
  "Identify required services and prohibited changes.",
  "Map the topology and management path.",
  "Collect a fast baseline with show commands.",
  "Do not assume suspicious means wrong.",
  "Preserve working traffic while hardening.",
  "Use one change at a time for high-impact settings.",
  "Retest the actual application after every major fix.",
  "Keep a short change log.",
  "Verify return paths, not only forward paths.",
  "Preserve authorized management access.",
  "Save only after the final verification pass.",
];

const reflection = [
  "Why is a suspicious setting not enough evidence to justify a change?",
  "Which checks should happen before an ACL or route is modified?",
  "Why can a network pass ping tests and still fail the competition requirement?",
  "What is the difference between a required dependency and an unknown configuration item?",
  "Why should management-plane verification happen before the final save?",
  "What would make you delay a change even if it appears to improve security?",
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

export default function CiscoNetworkingFinalReviewChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Cisco & Networking
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
              href="/cyberpatriot/cisco-networking/packet-tracer-defensive-practice"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Cisco & Networking · Lesson 18
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco & Networking Final Review Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Bring the full pathway together into one competition-ready
                review: topology, switching, VLANs, trunks, routing, ACLs,
                services, NAT, hardening, troubleshooting, verification, and
                safe persistence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This is not a list of commands to run blindly. It is a structured
                final review that helps you decide what is required, what is
                confirmed wrong, what still needs evidence, and what should be
                left alone.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Final Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Lessons reviewed</span>
                  <span className="font-bold text-white">17 + final review</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core review areas</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Final priority</span>
                  <span className="font-bold text-white">Required traffic</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Last action</span>
                  <span className="font-bold text-white">Verify, document, save</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Learning objectives"
            title="Finish the network with confidence, not guesswork"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final review principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Protect required functionality while reducing unnecessary exposure
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The best final state is not the most restrictive configuration.
              It is the configuration that satisfies the scenario, preserves
              required services, and removes only what evidence shows is unsafe
              or unnecessary.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Final warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not create a last-minute outage
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Broad ACL edits, trunk changes, route changes, management ACLs,
              account removal, and service shutdowns should not be rushed during
              the final pass.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Review mindset"
            title="Six rules for the final pass"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviewMindset.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Pathway recap"
            title="What each lesson contributed"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {lessonMap.map(([number, title, focus]) => (
              <div
                key={number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:grid-cols-[0.16fr_0.84fr]"
              >
                <span className="font-black text-cyan-300">{number}</span>
                <div>
                  <h3 className="text-lg font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="First look"
            title="Read the environment before touching it"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {firstLookChecks.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Rapid baseline"
            title="Collect useful operational state quickly"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {rapidBaseline.map(([command, purpose]) => (
              <div
                key={command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-black text-cyan-200">
                  {command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[
        ["Switching", "Verify the Layer 2 foundation", switchingChecklist],
        ["VLANs & trunks", "Verify segmentation and VLAN transport", vlanChecklist],
        ["Inter-VLAN routing", "Verify Layer 3 gateways between VLANs", interVlanChecklist],
        ["Routing", "Verify every required Layer 3 path", routingChecklist],
        ["ACLs", "Verify policy without breaking required traffic", aclChecklist],
      ].map(([label, title, items]) => (
        <section
          key={label as string}
          className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <SectionHeading
              label={label as string}
              title={title as string}
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(items as { item: string; verify: string }[]).map((entry) => (
                <div
                  key={entry.item}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="text-lg font-black text-white">
                    {entry.item}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {entry.verify}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Services"
            title="Verify the service chain individually"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceChecklist.map((item) => (
              <div
                key={item.service}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.service}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Management plane"
            title="Finish hardening without losing authorized access"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {managementChecklist.map((item) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Port security"
            title="Review endpoint controls without treating every port the same"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {portSecurityChecklist.map((item) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Command reference"
            title="Choose the command that answers the question"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {commandReference.map((item) => (
              <div
                key={item.topic}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.topic}
                </h3>
                <div className="mt-4 grid gap-2">
                  {item.commands.map((command) => (
                    <code
                      key={command}
                      className="block overflow-x-auto text-xs text-cyan-200"
                    >
                      {command}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Symptom patterns"
            title="Use scope to decide where to look first"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {scenarioPatterns.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.likelyFocus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk actions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Commands and shortcuts that deserve extra caution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highRiskActions.map((item) => (
              <div
                key={item.action}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <code className="text-sm font-black text-red-200">
                  {item.action}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence classification"
            title="Know what you know before changing anything"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {evidenceClassification.map((item) => (
              <div
                key={item.className}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.className}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Reasoning check"
            title="Do not confuse hardening with indiscriminate removal"
          />

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">
                  {item.finding}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final pass order"
            title="One complete review before saving"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {finalPassOrder.map((item) => (
              <div
                key={item.pass}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  Pass {item.pass}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="End-to-end verification"
            title="Test the actual required outcomes"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {finalVerification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.test}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Documentation"
            title="Keep a short evidence trail"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {documentationFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition day checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A compact sequence to keep beside you
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {competitionDayChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final readiness
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              You should be able to explain the network, not just make it pass
            </h2>

            <div className="mt-6 grid gap-3">
              {[
                "I can identify the role of each major device in the topology.",
                "I can explain why each required VLAN and trunk exists.",
                "I can identify each VLAN gateway and the route to remote networks.",
                "I can explain which ACLs restrict which traffic and why.",
                "I can verify DHCP, DNS, NAT, and application dependencies separately.",
                "I can preserve authorized SSH management while reducing unnecessary exposure.",
                "I can distinguish confirmed issues from suspicious or unknown settings.",
                "I can make one narrow change and verify its effect.",
                "I can test both forward and return paths.",
                "I can document a final stable state and save it deliberately.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Final reasoning check
            </h2>

            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <p className="text-sm font-black text-emerald-200">
                Cisco pathway complete
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                You now have a complete progression from networking foundations
                through Packet Tracer defensive practice and final competition
                review. The remaining work is wiring navigation, testing every
                route, running the final build, and then enabling the section on
                the main CyberPatriot hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Cisco & Networking
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
              href="/cyberpatriot/cisco-networking/packet-tracer-defensive-practice"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
