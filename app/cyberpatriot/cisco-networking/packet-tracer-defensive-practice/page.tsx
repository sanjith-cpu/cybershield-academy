import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use Packet Tracer as a controlled defensive practice environment rather than a command-memorization tool.",
  "Build a repeatable baseline before changing a topology.",
  "Practice VLANs, trunks, inter-VLAN routing, routing, ACLs, DHCP, DNS, NAT, and management hardening in one integrated environment.",
  "Introduce one fault at a time and troubleshoot from symptoms instead of reading the answer directly.",
  "Compare expected and observed behavior using show commands, endpoint tests, counters, and topology evidence.",
  "Document the original state, change, verification, and rollback for every defensive action.",
];

const practicePrinciples = [
  {
    title: "Start from a known-good state",
    text:
      "A practice file is most useful when the initial topology is documented and verified. You need to know what should work before you intentionally break one thing.",
  },
  {
    title: "Change one variable at a time",
    text:
      "One hidden fault creates a clean troubleshooting exercise. Multiple simultaneous faults make it harder to know whether your reasoning was correct.",
  },
  {
    title: "Hide the answer from yourself",
    text:
      "Do not open every configuration immediately. Begin from the same symptom a competitor would see and collect evidence in layers.",
  },
  {
    title: "Use read-only commands first",
    text:
      "Build the habit of using show commands, ping, traceroute, endpoint addressing, and service tests before configuration mode.",
  },
  {
    title: "Verify the real requirement",
    text:
      "If the scenario requires HTTPS, prove HTTPS. If it requires DHCP, renew the lease. If it requires SSH management, test SSH from the approved source.",
  },
  {
    title: "Reset and repeat",
    text:
      "After each exercise, restore the known-good snapshot or a clean copy so the next drill starts from reliable evidence.",
  },
];

const fictionalTopology = [
  {
    zone: "Staff",
    vlan: "VLAN 10",
    subnet: "192.168.10.0/24",
    gateway: "192.168.10.1",
    purpose: "Authorized employee endpoints",
  },
  {
    zone: "Students",
    vlan: "VLAN 20",
    subnet: "192.168.20.0/24",
    gateway: "192.168.20.1",
    purpose: "Restricted student endpoints",
  },
  {
    zone: "Servers",
    vlan: "VLAN 30",
    subnet: "192.168.30.0/24",
    gateway: "192.168.30.1",
    purpose: "DHCP, DNS, HTTPS, and internal services",
  },
  {
    zone: "Management",
    vlan: "VLAN 99",
    subnet: "192.168.99.0/24",
    gateway: "192.168.99.1",
    purpose: "Authorized administration workstations",
  },
  {
    zone: "Transit",
    vlan: "Routed link",
    subnet: "10.0.0.0/30",
    gateway: "R1 10.0.0.1 / R2 10.0.0.2",
    purpose: "Router-to-router traffic",
  },
  {
    zone: "Outside",
    vlan: "Simulated external network",
    subnet: "203.0.113.0/24",
    gateway: "203.0.113.1",
    purpose: "Authorized external test services",
  },
];

const recommendedDevices = [
  {
    role: "SW-ACCESS-1",
    type: "Layer 2 switch",
    job:
      "Connect Staff and Student endpoints and provide an uplink trunk.",
  },
  {
    role: "SW-DIST-1",
    type: "Layer 2 or multilayer-capable switch",
    job:
      "Aggregate VLANs and connect Servers and Management.",
  },
  {
    role: "R1",
    type: "Router",
    job:
      "Provide inter-VLAN routing or router-on-a-stick and route toward R2.",
  },
  {
    role: "R2",
    type: "Router",
    job:
      "Provide the simulated outside edge, NAT, and upstream routing.",
  },
  {
    role: "SRV-1",
    type: "Server",
    job:
      "Provide fictional DHCP, DNS, and HTTPS services.",
  },
  {
    role: "ADMIN-PC",
    type: "Management endpoint",
    job:
      "Test authorized SSH access from VLAN 99.",
  },
];

const baselineTests = [
  {
    area: "Access ports",
    prove:
      "Staff endpoints are in VLAN 10, Students in VLAN 20, Servers in VLAN 30, and Management in VLAN 99.",
  },
  {
    area: "Trunks",
    prove:
      "Required VLANs cross the correct switch links and native VLAN expectations match on both ends.",
  },
  {
    area: "Inter-VLAN routing",
    prove:
      "Each VLAN reaches its gateway and permitted remote VLANs.",
  },
  {
    area: "Routing",
    prove:
      "R1 and R2 know all required internal and simulated outside networks.",
  },
  {
    area: "DHCP",
    prove:
      "Staff and Student clients receive the correct IPv4 address, mask, gateway, and DNS server.",
  },
  {
    area: "DNS",
    prove:
      "A fictional hostname such as portal.training resolves to the expected server address.",
  },
  {
    area: "ACLs",
    prove:
      "Required services are permitted while restricted services remain denied.",
  },
  {
    area: "NAT",
    prove:
      "Authorized inside traffic creates the expected translation at the edge.",
  },
  {
    area: "Management",
    prove:
      "SSH works from the approved Management subnet and is restricted from unauthorized sources when required.",
  },
];

const baselineCommands = [
  {
    command: "show interfaces status",
    use: "Review switchport state, VLAN, speed, and duplex.",
  },
  {
    command: "show vlan brief",
    use: "Confirm VLAN existence and access-port membership.",
  },
  {
    command: "show interfaces trunk",
    use: "Confirm trunk operation and allowed VLANs.",
  },
  {
    command: "show mac address-table",
    use: "Confirm Layer 2 learning after endpoint traffic.",
  },
  {
    command: "show ip interface brief",
    use: "Review Layer 3 addresses and interface state.",
  },
  {
    command: "show ip route",
    use: "Confirm connected, static, and dynamic paths.",
  },
  {
    command: "show access-lists",
    use: "Review ACL order and hit counters.",
  },
  {
    command: "show ip dhcp binding",
    use: "Review IOS DHCP bindings if the router is providing DHCP.",
  },
  {
    command: "show ip nat translations",
    use: "Review active NAT mappings after test traffic.",
  },
  {
    command: "show users",
    use: "Review active management sessions.",
  },
  {
    command: "show ip ssh",
    use: "Verify SSH state where supported.",
  },
  {
    command: "show logging",
    use: "Review recent events where Packet Tracer supports them.",
  },
];

const buildSequence = [
  {
    step: "01",
    title: "Place devices",
    text:
      "Add two switches, two routers, at least four endpoints, one server, and one management workstation.",
  },
  {
    step: "02",
    title: "Cable intentionally",
    text:
      "Label uplinks and routed links so later troubleshooting has a clear physical path.",
  },
  {
    step: "03",
    title: "Create VLANs",
    text:
      "Build VLAN 10, 20, 30, and 99 on the switches that actually need them.",
  },
  {
    step: "04",
    title: "Assign access ports",
    text:
      "Place endpoints into the intended VLANs and verify with show vlan brief.",
  },
  {
    step: "05",
    title: "Configure trunks",
    text:
      "Carry only the VLANs required by the topology and verify operational trunk state.",
  },
  {
    step: "06",
    title: "Add Layer 3 gateways",
    text:
      "Use router subinterfaces or the selected routed design consistently.",
  },
  {
    step: "07",
    title: "Add routing",
    text:
      "Configure the minimum static or dynamic routes required for remote networks.",
  },
  {
    step: "08",
    title: "Add services and policy",
    text:
      "Configure DHCP, DNS, ACLs, NAT, and SSH only after basic forwarding works.",
  },
  {
    step: "09",
    title: "Verify everything",
    text:
      "Create a written known-good baseline before introducing faults.",
  },
];

const verificationMatrix = [
  {
    test: "Staff PC -> Staff gateway",
    expected: "Success",
    proves:
      "Staff access VLAN, local addressing, Layer 2 path, ARP, and gateway state.",
  },
  {
    test: "Student PC -> Student gateway",
    expected: "Success",
    proves:
      "Student access VLAN, addressing, and local gateway path.",
  },
  {
    test: "Staff PC -> HTTPS server",
    expected: "Success",
    proves:
      "Inter-VLAN routing, required ACL behavior, and server reachability.",
  },
  {
    test: "Student PC -> restricted SSH server",
    expected: "Denied if policy says so",
    proves:
      "The restrictive ACL remains effective while other required traffic may continue.",
  },
  {
    test: "Staff PC -> portal.training",
    expected: "Resolves and connects",
    proves:
      "DHCP-provided DNS, DNS reachability, correct record, routing, and application path.",
  },
  {
    test: "Staff PC -> simulated outside network",
    expected: "Success if allowed",
    proves:
      "Routing, edge path, NAT, and return connectivity.",
  },
  {
    test: "ADMIN-PC -> SSH to network device",
    expected: "Success",
    proves:
      "Management VLAN, routing, SSH service, credentials, and VTY source policy.",
  },
  {
    test: "Student PC -> SSH to network device",
    expected: "Denied if restricted",
    proves:
      "Management-plane source restriction remains effective.",
  },
];

const faultLibrary = [
  {
    category: "Physical / Interface",
    fault:
      "Shutdown one required interface.",
    symptom:
      "Everything beyond that link fails.",
    evidence:
      "show ip interface brief or show interfaces status shows administratively down/down.",
    safeFix:
      "Confirm the interface is required, then restore it and retest.",
  },
  {
    category: "Access VLAN",
    fault:
      "Move one Staff access port into VLAN 20.",
    symptom:
      "One Staff endpoint loses normal Staff behavior or receives the wrong network configuration.",
    evidence:
      "show vlan brief and show interfaces switchport reveal wrong VLAN membership.",
    safeFix:
      "Restore only that port to the documented VLAN.",
  },
  {
    category: "Trunk",
    fault:
      "Remove VLAN 30 from one allowed VLAN list.",
    symptom:
      "Server VLAN traffic fails across the trunk while other VLANs may still work.",
    evidence:
      "show interfaces trunk shows VLAN 30 missing from the allowed list.",
    safeFix:
      "Add only VLAN 30 back if the design requires it.",
  },
  {
    category: "Native VLAN",
    fault:
      "Set different native VLANs on opposite trunk ends.",
    symptom:
      "Unexpected untagged behavior or a native VLAN mismatch warning may appear.",
    evidence:
      "Compare show interfaces trunk and interface configuration on both ends.",
    safeFix:
      "Align both ends to the documented native VLAN.",
  },
  {
    category: "IPv4 addressing",
    fault:
      "Give one gateway interface the wrong subnet mask.",
    symptom:
      "Some local or remote destinations behave inconsistently.",
    evidence:
      "show ip interface brief plus interface config and subnet math reveal the mismatch.",
    safeFix:
      "Restore the intended prefix only on that interface.",
  },
  {
    category: "Static routing",
    fault:
      "Change one next hop to an unreachable address.",
    symptom:
      "One remote network becomes unreachable.",
    evidence:
      "show ip route and ping to the configured next hop reveal the issue.",
    safeFix:
      "Restore the documented reachable neighbor.",
  },
  {
    category: "Dynamic routing",
    fault:
      "Make one router-to-router OSPF interface passive.",
    symptom:
      "Adjacency disappears and remote routes may be withdrawn.",
    evidence:
      "show ip protocols and show ip ospf neighbor reveal the missing relationship.",
    safeFix:
      "Remove passive behavior only from the intended transit interface.",
  },
  {
    category: "ACL",
    fault:
      "Place a broad permit before a specific deny.",
    symptom:
      "Traffic that should be blocked is permitted.",
    evidence:
      "show access-lists and counters reveal first-match behavior.",
    safeFix:
      "Correct sequence ordering without rebuilding unrelated rules.",
  },
  {
    category: "ACL",
    fault:
      "Omit required HTTPS permit before implicit deny.",
    symptom:
      "Ping may work while TCP/443 fails.",
    evidence:
      "Route works, server reachable, but ACL policy lacks the required service permit.",
    safeFix:
      "Add the narrow required ACE in the correct position.",
  },
  {
    category: "DHCP",
    fault:
      "Remove ip helper-address from Student gateway.",
    symptom:
      "Students stop receiving DHCP while Staff still works.",
    evidence:
      "Compare gateway interface configs and lease behavior by VLAN.",
    safeFix:
      "Restore the documented helper only on the Student client-facing gateway.",
  },
  {
    category: "DNS",
    fault:
      "Change the DHCP DNS-server option to the wrong address.",
    symptom:
      "Clients receive valid addressing and can reach raw IPs, but names fail.",
    evidence:
      "Client configuration shows the wrong resolver.",
    safeFix:
      "Restore the intended DNS server option and renew the lease.",
  },
  {
    category: "NAT",
    fault:
      "Exclude VLAN 20 from the NAT classification ACL.",
    symptom:
      "Staff translates outward while Students do not.",
    evidence:
      "show access-lists and show ip nat translations show only Staff matches.",
    safeFix:
      "Add VLAN 20 only if the scenario says Student outside access is required.",
  },
  {
    category: "NAT",
    fault:
      "Reverse inside/outside interface roles.",
    symptom:
      "Expected translations do not form.",
    evidence:
      "show ip nat statistics exposes interface-role mismatch.",
    safeFix:
      "Restore roles according to the topology boundary.",
  },
  {
    category: "Management",
    fault:
      "Allow Telnet but remove SSH prerequisites.",
    symptom:
      "Telnet works while SSH fails.",
    evidence:
      "show ip ssh, RSA key state, domain name, and VTY config expose missing SSH pieces.",
    safeFix:
      "Restore SSH, verify it, then restrict VTY transport according to policy.",
  },
  {
    category: "Management",
    fault:
      "Apply a VTY ACL that omits Management VLAN 99.",
    symptom:
      "Remote admins lose SSH while console still works.",
    evidence:
      "Console inspection of VTY access-class reveals missing authorized source.",
    safeFix:
      "Correct the management-source ACL, verify SSH, and only then save.",
  },
];

const difficultyLevels = [
  {
    level: "Level 1 - Visible configuration fault",
    description:
      "One obvious setting is wrong and the task is to locate it using the correct show command rather than scanning the whole config.",
    examples:
      "Wrong access VLAN, shutdown interface, missing allowed VLAN, missing helper-address.",
  },
  {
    level: "Level 2 - Symptom-driven fault",
    description:
      "You receive only a user symptom and must decide which layer to inspect first.",
    examples:
      "One VLAN has no DHCP, HTTPS fails while ping works, one subnet cannot reach outside.",
  },
  {
    level: "Level 3 - Competing hypotheses",
    description:
      "Several settings look suspicious but only one actually causes the failure.",
    examples:
      "Unused route exists, harmless high MAC count, irrelevant inactive ACL, plus one real trunk issue.",
  },
  {
    level: "Level 4 - One-way or partial failure",
    description:
      "The forward path works farther than expected, but the return path, policy, or service state fails.",
    examples:
      "Static route only on one router, reverse ACL, wrong NAT boundary, service-specific deny.",
  },
  {
    level: "Level 5 - Timed mixed review",
    description:
      "You must baseline the environment, identify one hidden fault, fix it, and complete a final review under a self-imposed time limit.",
    examples:
      "Combine switching, routing, services, policy, and management verification without knowing the fault category.",
  },
];

const observationTools = [
  {
    tool: "Realtime Mode",
    value:
      "Shows the network behaving normally while you use CLI and endpoint tests.",
  },
  {
    tool: "Simulation Mode",
    value:
      "Can visualize selected protocol events and packet flow for learning when used carefully.",
  },
  {
    tool: "Simple PDU",
    value:
      "Provides quick test traffic between endpoints in Packet Tracer.",
  },
  {
    tool: "Complex PDU",
    value:
      "Can generate more specific practice traffic depending on Packet Tracer support.",
  },
  {
    tool: "Device CLI",
    value:
      "Provides the most competition-like place to practice Cisco IOS inspection and configuration.",
  },
  {
    tool: "Endpoint command prompt",
    value:
      "Useful for IP configuration, ping, traceroute, DNS tests, and application verification.",
  },
];

const simulationGuidance = [
  {
    title: "Use simulation to learn why",
    text:
      "Simulation Mode is valuable for seeing ARP, ICMP, DHCP, and other supported events move between devices.",
  },
  {
    title: "Do not depend on animation alone",
    text:
      "Competition troubleshooting still requires reading configuration and operational state.",
  },
  {
    title: "Filter protocols when possible",
    text:
      "Reducing visible events can make the specific exchange easier to understand.",
  },
  {
    title: "Reset before a new observation",
    text:
      "Clear or reset the simulation event list so old packets do not confuse the current exercise.",
  },
  {
    title: "Compare successful and failed flows",
    text:
      "A working VLAN or host can provide a reference path for the broken one.",
  },
  {
    title: "Expect feature limitations",
    text:
      "Packet Tracer is a simulator, not a complete IOS implementation. Some commands and protocol behaviors vary by device model.",
  },
];

const drillSets = [
  {
    title: "Drill 1 - Access VLAN",
    goal:
      "Diagnose one endpoint placed into the wrong VLAN.",
    requiredEvidence: [
      "Endpoint IP configuration",
      "show vlan brief",
      "show interfaces <interface> switchport",
      "MAC learning on the access port",
    ],
    success:
      "Endpoint returns to the intended VLAN and reaches its correct gateway.",
  },
  {
    title: "Drill 2 - Trunk VLAN",
    goal:
      "Diagnose one missing allowed VLAN across a switch uplink.",
    requiredEvidence: [
      "show interfaces trunk",
      "VLAN existence on both switches",
      "Same-VLAN testing across the trunk",
      "Comparison with one working VLAN",
    ],
    success:
      "Only the missing required VLAN is restored and other trunk settings remain unchanged.",
  },
  {
    title: "Drill 3 - Static route",
    goal:
      "Find a wrong next hop that breaks one remote subnet.",
    requiredEvidence: [
      "show ip route",
      "show ip interface brief",
      "Ping to the configured next hop",
      "Traceroute toward destination",
    ],
    success:
      "Remote subnet works in both directions with only the incorrect route corrected.",
  },
  {
    title: "Drill 4 - ACL service policy",
    goal:
      "Permit HTTPS while keeping SSH restricted.",
    requiredEvidence: [
      "show access-lists",
      "Interface direction",
      "Controlled HTTPS test",
      "Controlled SSH test",
    ],
    success:
      "HTTPS succeeds, SSH remains denied, and ACL counters reflect the expected matches.",
  },
  {
    title: "Drill 5 - DHCP relay",
    goal:
      "Restore DHCP to one routed VLAN without changing working scopes.",
    requiredEvidence: [
      "Client lease state",
      "Gateway interface config",
      "Server reachability",
      "Working VLAN comparison",
    ],
    success:
      "The affected client receives correct options while other scopes remain unchanged.",
  },
  {
    title: "Drill 6 - NAT classification",
    goal:
      "Restore outside access to one required inside subnet.",
    requiredEvidence: [
      "show access-lists",
      "show ip nat statistics",
      "show ip nat translations",
      "Inside routing",
    ],
    success:
      "Only the required subnet begins translating and existing translations still work.",
  },
  {
    title: "Drill 7 - SSH management",
    goal:
      "Restore authorized SSH without reopening Telnet to everyone.",
    requiredEvidence: [
      "show ip ssh",
      "VTY configuration",
      "Local username configuration",
      "Management ACL",
    ],
    success:
      "Authorized Management SSH works and unauthorized source access remains restricted.",
  },
];

const timeChallenges = [
  {
    time: "10 minutes",
    challenge:
      "Find one wrong access VLAN from a user symptom and correct it.",
  },
  {
    time: "12 minutes",
    challenge:
      "Find one missing trunk VLAN while preserving all working VLANs.",
  },
  {
    time: "15 minutes",
    challenge:
      "Find one missing or wrong route and verify the return path.",
  },
  {
    time: "15 minutes",
    challenge:
      "Find one ACL ordering problem that breaks or over-permits a service.",
  },
  {
    time: "20 minutes",
    challenge:
      "Diagnose one service-chain problem involving DHCP, DNS, or NAT.",
  },
  {
    time: "25 minutes",
    challenge:
      "Complete a full baseline, identify one unknown hidden fault, fix it, and document the evidence.",
  },
];

const evidenceChecklist = [
  {
    item: "Symptom",
    question:
      "What exact action fails?",
  },
  {
    item: "Scope",
    question:
      "Which users, VLANs, networks, or services are affected?",
  },
  {
    item: "Working reference",
    question:
      "What similar path still works and can be compared?",
  },
  {
    item: "Expected path",
    question:
      "Which ports, VLANs, interfaces, routes, ACLs, and services should the packet cross?",
  },
  {
    item: "First failed dependency",
    question:
      "Where does the first clear evidence of failure appear?",
  },
  {
    item: "Hypothesis",
    question:
      "What single configuration or operational state best explains the evidence?",
  },
  {
    item: "Narrow change",
    question:
      "What is the smallest change that tests or fixes that hypothesis?",
  },
  {
    item: "Verification",
    question:
      "Did the required service work and did unrelated required behavior remain intact?",
  },
];

const teamPractice = [
  {
    role: "Builder",
    task:
      "Creates the known-good Packet Tracer file and writes the expected verification matrix.",
  },
  {
    role: "Fault injector",
    task:
      "Copies the known-good file, introduces exactly one hidden fault, and writes the answer privately.",
  },
  {
    role: "Troubleshooter",
    task:
      "Receives only the symptom and must identify the root cause using evidence.",
  },
  {
    role: "Observer",
    task:
      "Records which commands were used, whether assumptions were justified, and whether the final verification was complete.",
  },
];

const scoringRubric = [
  {
    category: "Baseline quality",
    points: "0-3",
    description:
      "Did the troubleshooter gather relevant state before editing configuration?",
  },
  {
    category: "Fault-domain reasoning",
    points: "0-3",
    description:
      "Did the tests narrow the problem logically rather than jump randomly?",
  },
  {
    category: "Command selection",
    points: "0-3",
    description:
      "Were show commands chosen because they answered a specific question?",
  },
  {
    category: "Change discipline",
    points: "0-3",
    description:
      "Was only the confirmed fault changed?",
  },
  {
    category: "Verification",
    points: "0-3",
    description:
      "Was the actual service plus unaffected behavior retested?",
  },
  {
    category: "Documentation",
    points: "0-3",
    description:
      "Were symptom, evidence, cause, change, and rollback recorded?",
  },
];

const troubleshootingCases = [
  {
    finding:
      "Only one endpoint fails while its VLAN peers work",
    weak:
      "Reconfigure the whole VLAN.",
    better:
      "Start at that endpoint and access port because the shared VLAN infrastructure is already proven for other devices.",
  },
  {
    finding:
      "One VLAN fails across a trunk while three others work",
    weak:
      "Set the trunk to allow every VLAN.",
    better:
      "Compare the failed VLAN against the allowed list, VLAN database, native settings, and STP state.",
  },
  {
    finding:
      "Ping works but HTTPS does not",
    weak:
      "Add a new route.",
    better:
      "The IP path is working. Move to TCP/443 ACL policy, DNS if used, server process, and endpoint firewall.",
  },
  {
    finding:
      "NAT translations appear for Staff but never for Students",
    weak:
      "Rebuild NAT completely.",
    better:
      "Compare the two source subnets against the NAT classification and confirm Student routing reaches the same edge.",
  },
  {
    finding:
      "SSH fails only from one source subnet",
    weak:
      "Enable Telnet everywhere.",
    better:
      "Inspect the VTY source ACL, routing, and management policy. The restriction may be intentional.",
  },
  {
    finding:
      "A dynamic route disappears after an interface change",
    weak:
      "Replace it with a static route immediately.",
    better:
      "Check adjacency, protocol participation, passive-interface state, and the modified interface before hiding the failure with a static route.",
  },
];

const unsafeShortcuts = [
  {
    shortcut: "Open every device config immediately",
    risk:
      "Turns the exercise into answer hunting instead of troubleshooting from evidence.",
  },
  {
    shortcut: "Introduce several faults at once",
    risk:
      "Makes it difficult to know whether the chosen fix actually addressed the root cause.",
  },
  {
    shortcut: "Use permit any any to make tests pass",
    risk:
      "Can destroy the intended policy and hide the ACL mistake.",
  },
  {
    shortcut: "Allow all VLANs on every trunk",
    risk:
      "May restore one path while increasing unnecessary VLAN exposure.",
  },
  {
    shortcut: "Add a default route to fix any missing network",
    risk:
      "Can mask a missing specific route and send traffic toward the wrong place.",
  },
  {
    shortcut: "Clear MAC, ARP, NAT, or counters immediately",
    risk:
      "Removes useful evidence before you understand it.",
  },
  {
    shortcut: "Save after the first successful ping",
    risk:
      "A partial workaround may become persistent before the real service is verified.",
  },
];

const finalReview = [
  "The known-good baseline is saved separately.",
  "Every VLAN has the intended endpoints and gateway.",
  "Required trunks carry only the intended VLANs.",
  "Inter-VLAN and routed paths work in both directions.",
  "Static or dynamic routes match the topology.",
  "ACLs permit required services and preserve intended restrictions.",
  "DHCP provides correct client options.",
  "DNS resolves the expected fictional records.",
  "NAT translates only the required inside traffic.",
  "SSH works from authorized management sources.",
  "Read-only evidence is collected before configuration changes.",
  "Each exercise documents symptom, evidence, cause, change, verification, and rollback.",
];

const reflection = [
  "Why should a Packet Tracer practice file begin from a known-good baseline?",
  "Why is one hidden fault better than five hidden faults when practicing troubleshooting?",
  "How can a working host in the same VLAN help you diagnose a broken host?",
  "Why should a troubleshooting drill verify the real application instead of stopping after ping?",
  "What makes Simulation Mode useful, and why should you still practice CLI-based evidence collection?",
  "How would you increase the difficulty of a lab without making it unrealistic or random?",
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

export default function PacketTracerDefensivePracticePage() {
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
              href="/cyberpatriot/cisco-networking/network-troubleshooting-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/final-review-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Cisco & Networking · Lesson 17
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Packet Tracer Defensive Practice
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Turn Cisco Packet Tracer into a repeatable defensive training
                environment for switching, routing, ACLs, services, NAT,
                management hardening, and evidence-based troubleshooting.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The objective is not to memorize one perfect topology. It is to
                practice recognizing symptoms, collecting the right evidence,
                making one narrow fix, and proving the result.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Practice VLANs</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Fault categories</span>
                  <span className="font-bold text-white">15+</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Integrated drills</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Practice from symptoms</span>
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
            title="Practice the complete defensive reasoning cycle"
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
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Build once, practice many failure modes
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A stable multi-VLAN practice topology can support dozens of
              troubleshooting drills if you introduce only one controlled fault
              at a time.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Practice only in fictional or authorized environments
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Use Packet Tracer, lab equipment, or networks you are authorized
              to administer. The drills here are designed for defensive
              configuration and troubleshooting practice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Practice principles"
            title="Make every lab teach a reasoning habit"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practicePrinciples.map((item) => (
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
            label="Fictional topology"
            title="One environment for switching, routing, services, and security"
          />

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Zone</th>
                  <th className="px-4 py-3 font-black">VLAN / Role</th>
                  <th className="px-4 py-3 font-black">Subnet</th>
                  <th className="px-4 py-3 font-black">Gateway</th>
                  <th className="px-4 py-3 font-black">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {fictionalTopology.map((item) => (
                  <tr
                    key={item.zone}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-black text-white">
                      {item.zone}
                    </td>
                    <td className="px-4 py-3">{item.vlan}</td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.subnet}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-200">
                      {item.gateway}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {item.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Device roles"
            title="Keep the topology easy to understand"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recommendedDevices.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm font-bold text-cyan-300">
                  {item.type}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.job}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Build sequence"
            title="Create the practice network in dependency order"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {buildSequence.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
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
            label="Known-good baseline"
            title="Prove the topology before you break it"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {baselineTests.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.prove}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Save a clean master copy
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Keep one known-good Packet Tracer file untouched. Make a duplicate
              before every drill so you can reset quickly without trying to
              remember every previous change.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Baseline commands"
            title="Record operational state before fault injection"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {baselineCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-black text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification matrix"
            title="Define the expected behavior in advance"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {verificationMatrix.map((item) => (
              <div
                key={item.test}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.test}
                </h3>
                <p className="mt-3 text-sm font-bold text-emerald-200">
                  Expected: {item.expected}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.proves}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Fault library"
            title="Introduce one controlled fault at a time"
            description="The fault injector should record the answer privately. The troubleshooter should receive only the user-visible symptom."
          />

          <div className="mt-8 grid gap-5">
            {faultLibrary.map((item, index) => (
              <div
                key={`${item.category}-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[0.35fr_0.9fr_1fr_1fr_1fr]">
                  <div>
                    <span className="text-sm font-black text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Category
                    </p>
                    <p className="mt-2 font-black text-white">
                      {item.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Hidden fault
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.fault}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Symptom
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.symptom}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence and fix
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.evidence}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.safeFix}
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
            label="Difficulty ladder"
            title="Increase complexity without making the exercise random"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {difficultyLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.level}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Examples
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.examples}
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
            label="Packet Tracer tools"
            title="Use the simulator to support, not replace, troubleshooting"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {observationTools.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.tool}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {simulationGuidance.map((item) => (
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
            label="Integrated drill set"
            title="Seven repeatable defensive exercises"
          />

          <div className="mt-8 grid gap-5">
            {drillSets.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr_1fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.goal}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Required evidence
                    </p>
                    <div className="mt-3 grid gap-2">
                      {item.requiredEvidence.map((evidence) => (
                        <div
                          key={evidence}
                          className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-300"
                        >
                          {evidence}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Success condition
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.success}
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
            label="Timed challenges"
            title="Build speed after accuracy"
            description="Do not start with strict time limits. First learn the process correctly, then reduce the time while preserving evidence quality."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timeChallenges.map((item) => (
              <div
                key={`${item.time}-${item.challenge}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.time}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence worksheet"
            title="Force yourself to explain every change"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {evidenceChecklist.map((item) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.item}
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
            label="Team practice"
            title="Turn one topology into a team troubleshooting exercise"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {teamPractice.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.task}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Category</th>
                  <th className="px-4 py-3 font-black">Points</th>
                  <th className="px-4 py-3 font-black">What to evaluate</th>
                </tr>
              </thead>
              <tbody>
                {scoringRubric.map((item) => (
                  <tr
                    key={item.category}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-black text-white">
                      {item.category}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.points}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence-based reasoning"
            title="Use the symptom to decide what not to change"
          />

          <div className="mt-8 grid gap-5">
            {troubleshootingCases.map((item) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Unsafe shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid practice habits that teach the wrong reflexes
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {unsafeShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.shortcut}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Run a complete hidden-fault practice round
          </h2>

          <div className="mt-8 grid gap-3">
            {[
              "Duplicate the clean master Packet Tracer file and rename the copy for the practice round.",
              "Have the fault injector introduce exactly one fault from the library and write the answer privately.",
              "Give the troubleshooter only the symptom and any scenario requirements they need.",
              "Require a short baseline before configuration mode.",
              "Require one written hypothesis before the fix.",
              "Apply only the narrow change supported by the evidence.",
              "Verify the original service, the return path, and at least one unrelated known-good service.",
              "Score the round using the rubric and restore from the clean master before the next drill.",
            ].map((task, index) => (
              <div
                key={task}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-slate-300">
                  {task}
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
              Final review checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before considering the practice topology complete
            </h2>

            <div className="mt-6 grid gap-3">
              {finalReview.map((item, index) => (
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
              Check your practice method
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

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Packet Tracer becomes most useful when you stop treating it like
                a diagram tool and start using it as a repeatable evidence lab:
                baseline, one hidden fault, symptom, hypothesis, narrow fix,
                verification, reset, repeat.
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
              href="/cyberpatriot/cisco-networking/network-troubleshooting-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/final-review-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
