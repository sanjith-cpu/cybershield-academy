import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use an evidence-based process to isolate network failures before changing configuration.",
  "Separate physical, Layer 2, Layer 3, policy, service, and application problems.",
  "Choose Cisco IOS inspection commands that match the symptom and expected packet path.",
  "Use ping, traceroute, MAC, ARP, routing, ACL, DHCP, DNS, NAT, and logging evidence together.",
  "Recognize partial reachability, one-way traffic, and other symptoms that can point to specific layers.",
  "Verify the fix end to end, document the exact change, and save only after the result is proven.",
];

const principles = [
  {
    title: "Start with the requirement",
    text: "Define what should work before deciding what is broken. Troubleshooting without a target encourages random changes.",
  },
  {
    title: "Follow the packet path",
    text: "Trace traffic from source to destination and then verify the return path instead of checking devices in a random order.",
  },
  {
    title: "Use working evidence",
    text: "What still works is just as important as what fails because each successful test eliminates possible causes.",
  },
  {
    title: "Inspect before modifying",
    text: "Prefer read-only show commands, controlled pings, traceroute, and endpoint checks before configuration commands.",
  },
  {
    title: "Change one thing",
    text: "Once evidence identifies the cause, modify only the affected interface, route, ACL, VLAN, service, or setting.",
  },
  {
    title: "Verify the real service",
    text: "A successful ping does not prove DNS, SSH, HTTPS, DHCP, NAT, or an application. Test the actual requirement.",
  },
];

const symptomQuestions = [
  {
    title: "Who is affected?",
    text: "One endpoint, one access port, one VLAN, one subnet, one site, one application, or everyone?",
  },
  {
    title: "What still works?",
    text: "Same-subnet traffic, gateway access, raw IP connectivity, DNS, remote routing, or one specific service?",
  },
  {
    title: "When did it begin?",
    text: "After a configuration change, after reload, intermittently, or from initial deployment?",
  },
  {
    title: "What is the expected path?",
    text: "Source port, VLAN, trunk, gateway, routed hops, ACLs, NAT boundary, destination VLAN, and service.",
  },
  {
    title: "What changed recently?",
    text: "Interface state, VLANs, routes, ACLs, port security, DHCP, DNS, NAT, credentials, or topology.",
  },
  {
    title: "What proves the failure?",
    text: "Interface state, MAC learning, route table, ACL hits, DHCP lease, DNS answer, logs, or application test.",
  },
];

const layers = [
  {
    number: "01",
    title: "Physical & Interface State",
    question: "Is the link actually operational?",
    details: [
      "Check cable or simulated connection, interface status, administrative state, line protocol, speed, duplex, and error counters.",
      "An administratively down interface points to configuration. A down/down interface points toward the physical or peer side.",
      "Increasing CRC or input errors deserve investigation instead of being dismissed as an old historical counter.",
    ],
    commands: [
      "show interfaces status",
      "show interfaces",
      "show ip interface brief",
      "show running-config interface <interface>",
    ],
  },
  {
    number: "02",
    title: "Layer 2 Switching",
    question: "Can the frame move through the correct VLAN?",
    details: [
      "Confirm access VLAN membership, trunk state, allowed VLANs, MAC learning, and spanning-tree forwarding.",
      "Same-subnet traffic normally stays inside the Layer 2 domain and should not require a router.",
      "A working trunk for three VLANs does not prove a fourth VLAN is allowed across it.",
    ],
    commands: [
      "show vlan brief",
      "show interfaces trunk",
      "show interfaces <interface> switchport",
      "show mac address-table",
      "show spanning-tree",
    ],
  },
  {
    number: "03",
    title: "IPv4 Addressing",
    question: "Do endpoint and gateway addresses describe the same network design?",
    details: [
      "Check source IP, subnet mask, gateway, router interface address, and overlapping or incorrect prefixes.",
      "A wrong mask can make a host treat a remote destination as local or a local destination as remote.",
      "ARP evidence can help show whether local IPv4-to-MAC resolution is occurring.",
    ],
    commands: [
      "show ip interface brief",
      "show running-config | section interface",
      "show arp",
    ],
  },
  {
    number: "04",
    title: "Routing",
    question: "Does every Layer 3 hop know where to send the packet and the reply?",
    details: [
      "Inspect connected, static, and dynamically learned routes and verify the next hop is reachable.",
      "A route to the destination is only half the conversation; the return route must also exist.",
      "Longest prefix match, administrative distance, and routing-protocol state can explain why traffic takes an unexpected path.",
    ],
    commands: [
      "show ip route",
      "show ip protocols",
      "ping <next-hop>",
      "traceroute <destination>",
    ],
  },
  {
    number: "05",
    title: "Policy & Security",
    question: "Is required traffic being intentionally or accidentally filtered?",
    details: [
      "Review ACL order, interface direction, hit counters, port-security state, and management restrictions.",
      "Do not remove a security control just because traffic fails. Determine whether the scenario expects that traffic to be permitted.",
      "One-way traffic frequently points toward reverse ACL, return-route, NAT, or endpoint-policy problems.",
    ],
    commands: [
      "show access-lists",
      "show ip access-lists",
      "show ip interface <interface>",
      "show port-security interface <interface>",
    ],
  },
  {
    number: "06",
    title: "Network Services",
    question: "Are DHCP, DNS, and NAT doing their own jobs correctly?",
    details: [
      "A client may have routing but the wrong DNS server, or correct DNS while NAT is missing at the outside edge.",
      "Test each service independently instead of treating them as one large feature.",
      "An empty NAT table is not proof of broken NAT if no matching traffic has crossed the device.",
    ],
    commands: [
      "show ip dhcp pool",
      "show ip dhcp binding",
      "show ip nat translations",
      "show ip nat statistics",
    ],
  },
  {
    number: "07",
    title: "Application",
    question: "Does the actual service respond?",
    details: [
      "ICMP reachability does not prove SSH, HTTPS, DNS, or another application is healthy.",
      "Compare access by IP and hostname to separate DNS from application reachability.",
      "Verify the destination server process, transport port, endpoint firewall, and required service state.",
    ],
    commands: [
      "Test the required application",
      "Compare IP vs hostname access",
      "Verify the service and transport port",
    ],
  },
];

const firstMinutes = [
  {
    step: "01",
    title: "Read the scenario",
    text: "Mark required services, prohibited traffic, management paths, and anything that must remain enabled.",
  },
  {
    step: "02",
    title: "Map the topology",
    text: "Label switches, routers, interfaces, VLANs, subnets, gateways, servers, and expected traffic paths.",
  },
  {
    step: "03",
    title: "Reproduce the symptom",
    text: "Record exactly what fails and what still succeeds before changing anything.",
  },
  {
    step: "04",
    title: "Collect a baseline",
    text: "Use the relevant show commands and preserve useful counters, tables, and logs.",
  },
  {
    step: "05",
    title: "Shrink the fault domain",
    text: "Decide whether the evidence points to one host, one link, one VLAN, one routed hop, one policy, or one service.",
  },
];

const baselineCommands = [
  ["show ip interface brief", "Fast Layer 3 interface addressing and up/down state."],
  ["show interfaces status", "Switchport status, VLAN, speed, and duplex where supported."],
  ["show running-config | section interface", "Interface addressing, shutdown, VLAN, and related configuration."],
  ["show vlan brief", "VLAN existence and access-port membership."],
  ["show interfaces trunk", "Trunk status and VLAN carriage."],
  ["show mac address-table", "Layer 2 source-MAC learning."],
  ["show arp", "IPv4-to-MAC mappings on Layer 3 devices."],
  ["show ip route", "Connected, static, and dynamic Layer 3 paths."],
  ["show access-lists", "Policy entries and counters where supported."],
  ["show logging", "Recent operational and security events."],
];

const pingLadder = [
  {
    test: "Same-subnet peer",
    proves: "Tests local Layer 2 and ARP behavior without normal router forwarding.",
    doesNotProve: "Remote routing or application availability.",
  },
  {
    test: "Default gateway",
    proves: "Tests endpoint addressing, local VLAN path, ARP, and gateway availability.",
    doesNotProve: "A route beyond the gateway.",
  },
  {
    test: "Next-hop router",
    proves: "Tests the directly connected routed segment from the router.",
    doesNotProve: "The rest of the path.",
  },
  {
    test: "Remote gateway",
    proves: "Shows multiple routed hops may be functioning.",
    doesNotProve: "The final endpoint or application.",
  },
  {
    test: "Destination IP",
    proves: "Shows IP reachability if ICMP is permitted.",
    doesNotProve: "DNS or a TCP/UDP service.",
  },
  {
    test: "Required service",
    proves: "Tests the thing the scenario actually needs.",
    doesNotProve: "Every unrelated service or path.",
  },
];

const tracerouteClues = [
  {
    clue: "Stops near the first hop",
    meaning: "Investigate local gateway, first routed link, nearby policy, or interface state.",
  },
  {
    clue: "Reaches several hops then stops",
    meaning: "Focus near the last responding router, downstream routing, policy, or destination network.",
  },
  {
    clue: "Uses an unexpected path",
    meaning: "Check longest-prefix match, static routes, dynamic protocol preference, and summaries.",
  },
  {
    clue: "Shows timeouts but application works",
    meaning: "Do not declare failure. Devices or policies may suppress traceroute-related responses.",
  },
  {
    clue: "Forward route looks correct but session fails",
    meaning: "Check return routing, reverse ACLs, NAT state, or destination policy.",
  },
];

const layer2Patterns = [
  ["Access port up but no endpoint MAC", "Generate endpoint traffic, confirm correct physical port, VLAN, port security, cable, and NIC."],
  ["Endpoint MAC on unexpected port", "Check patching, endpoint movement, topology documentation, or possible Layer 2 loop."],
  ["One VLAN fails across a working trunk", "Inspect VLAN existence, allowed list, native VLAN expectations, and STP state."],
  ["Same-subnet peers cannot communicate", "Check access VLAN, masks, ARP, MAC learning, port security, and endpoint firewall."],
  ["Many MAC addresses on one interface", "This may be normal on an uplink or downstream-switch connection."],
  ["CRC counters are rising", "Inspect media, peer interface, connector quality, and speed/duplex behavior."],
];

const layer3Patterns = [
  ["Host reaches gateway but not remote subnet", "Check route table, next hop, ACL, remote route, and destination subnet."],
  ["Router cannot ping next hop", "Fix the directly connected segment before adding remote routes."],
  ["Connected route is missing", "Inspect interface address, shutdown state, line protocol, and subnet overlap."],
  ["Static route uses unreachable next hop", "Repair local reachability to the neighbor first."],
  ["Dynamic route disappeared", "Check adjacency, protocol participation, passive-interface, area/AS, and filtering."],
  ["Default route carries internal traffic", "Look for a missing more-specific route or withdrawn dynamic route."],
];

const policyPatterns = [
  ["Ping works but HTTPS fails", "Inspect TCP/443 policy, server service, DNS if name-based, and endpoint firewall."],
  ["ACL counter rises during the failed test", "That ACE is matching the flow; compare its action with the scenario requirement."],
  ["Authorized PC fails after port-security change", "Check secure MAC, maximum, violation mode, sticky state, and err-disabled status."],
  ["SSH works only from Management VLAN", "This may be an intentional VTY source restriction."],
  ["ACL exists but does not affect traffic", "Check whether it is applied, on the correct interface, in the correct direction, and on the actual path."],
  ["Traffic works only one direction", "Inspect reverse ACL, return route, NAT, and endpoint policy."],
];

const servicePatterns = [
  ["Client gets 169.254.x.x", "Check VLAN, DHCP server, relay, pool, gateway interface, and server reachability."],
  ["Client reaches server by IP but not name", "Check DNS resolver address, reachability, record correctness, and UDP/TCP 53 policy."],
  ["No NAT translations appear", "Generate matching traffic, then inspect inside/outside roles, NAT ACL, routing, and outside link."],
  ["DHCP works for one VLAN only", "Compare per-VLAN helper, scope, gateway, and routing."],
  ["DNS resolves but application fails", "Check service process, transport port, ACL, and destination firewall."],
  ["Translation exists but reply fails", "Check upstream route, return traffic, ACL, destination service, and NAT state."],
];

const scopePatterns = [
  {
    scope: "One endpoint",
    areas: "Endpoint IP, mask, gateway, NIC, host firewall, access port, port security.",
  },
  {
    scope: "One access port",
    areas: "Physical state, VLAN membership, port security, interface configuration.",
  },
  {
    scope: "One VLAN",
    areas: "SVI/subinterface, trunk carriage, DHCP relay, VLAN ACL, gateway addressing.",
  },
  {
    scope: "One remote subnet",
    areas: "Route, return route, ACL, remote gateway, routing advertisement.",
  },
  {
    scope: "One application",
    areas: "DNS, protocol/port, ACL, service state, endpoint firewall.",
  },
  {
    scope: "Everything",
    areas: "Core link, major trunk, default route, gateway, broad ACL, device availability.",
  },
];

const changeProcess = [
  {
    step: "01",
    title: "Write the hypothesis",
    text: "Example: VLAN 20 fails because the switch trunk does not permit VLAN 20.",
  },
  {
    step: "02",
    title: "Collect confirming evidence",
    text: "Use show interfaces trunk and compare the failed VLAN to working VLANs.",
  },
  {
    step: "03",
    title: "Record the original state",
    text: "Capture the relevant interface, route, ACL, or service configuration before editing.",
  },
  {
    step: "04",
    title: "Make one narrow change",
    text: "Modify only the setting the evidence supports.",
  },
  {
    step: "05",
    title: "Retest the symptom",
    text: "Repeat the exact test that originally failed.",
  },
  {
    step: "06",
    title: "Check unaffected services",
    text: "Confirm management, neighboring VLANs, and required applications still work.",
  },
  {
    step: "07",
    title: "Document the result",
    text: "Record cause, change, verification, and rollback.",
  },
  {
    step: "08",
    title: "Save deliberately",
    text: "Persist the configuration only after the final state is proven.",
  },
];

const mistakes = [
  {
    title: "Changing before reproducing",
    text: "Destroys the original evidence and can create a second failure.",
  },
  {
    title: "Assuming the first warning is the cause",
    text: "A visible warning can be unrelated to the actual packet path.",
  },
  {
    title: "Testing only one direction",
    text: "Misses return-route, reverse-policy, and asymmetric failures.",
  },
  {
    title: "Treating ping as application proof",
    text: "ICMP success does not prove DNS, SSH, HTTPS, or another service.",
  },
  {
    title: "Clearing evidence too early",
    text: "MAC, ARP, ACL, NAT, and log state can disappear before it is understood.",
  },
  {
    title: "Using broad workarounds",
    text: "permit any any, allow all VLANs, or default routes can hide the root cause.",
  },
  {
    title: "Ignoring working behavior",
    text: "A successful test can eliminate entire layers from suspicion.",
  },
  {
    title: "Saving immediately",
    text: "An unverified workaround becomes persistent and harder to undo.",
  },
];

const commandMap = [
  ["Link/interface", "show interfaces status; show interfaces; show ip interface brief"],
  ["VLAN membership", "show vlan brief; show interfaces <interface> switchport"],
  ["Trunking", "show interfaces trunk; show running-config interface <interface>"],
  ["MAC learning", "show mac address-table; show mac address-table interface <interface>"],
  ["ARP", "show arp"],
  ["Routing", "show ip route; show ip protocols; ping; traceroute"],
  ["ACL policy", "show access-lists; show ip access-lists; show ip interface <interface>"],
  ["Port security", "show port-security interface <interface>; show port-security address"],
  ["DHCP", "show ip dhcp pool; show ip dhcp binding"],
  ["NAT", "show ip nat translations; show ip nat statistics"],
  ["Management", "show users; show ip ssh; show login; show running-config | section line"],
  ["Events", "show logging; show clock"],
];

const reasoningCases = [
  {
    finding: "A user cannot reach a server, but the gateway responds",
    weak: "Reconfigure the access port immediately.",
    better: "The local path is at least partially working. Move outward to routing, policy, destination gateway, and server state.",
  },
  {
    finding: "One VLAN fails across a trunk while three others work",
    weak: "Replace the entire trunk configuration.",
    better: "Compare the failed VLAN against VLAN existence, allowed list, native VLAN expectations, and STP state.",
  },
  {
    finding: "Server IP ping succeeds but HTTPS fails",
    weak: "Add another static route.",
    better: "IP reachability works. Check TCP/443 policy, server process, endpoint firewall, and DNS if the test uses a hostname.",
  },
  {
    finding: "No destination route exists and ACL counters stay at zero",
    weak: "Edit the ACL.",
    better: "Routing fails before the expected policy point. Fix route learning or static routing first.",
  },
  {
    finding: "Port-security counter rises when a second device appears",
    weak: "Clear the counter and continue.",
    better: "The counter confirms policy is matching. Determine whether the second source MAC is authorized before changing the limit.",
  },
  {
    finding: "Hostname fails but raw IP works",
    weak: "Replace router configuration.",
    better: "The IP path works. Check resolver configuration, DNS server reachability, record accuracy, and DNS policy.",
  },
];

const scenarios = [
  {
    title: "Scenario A - One PC cannot reach its gateway",
    approach: "Focus on that host, its access port, IP settings, MAC learning, cable/NIC state, and port security before touching the gateway.",
  },
  {
    title: "Scenario B - Entire VLAN reaches gateway but nothing remote",
    approach: "Inspect the VLAN gateway route table, ACLs, routing-protocol participation, and return routes.",
  },
  {
    title: "Scenario C - Server works by IP but not hostname",
    approach: "Compare DHCP DNS option, resolver address, DNS reachability, DNS record, and port 53 policy.",
  },
  {
    title: "Scenario D - SSH stops after a management ACL change",
    approach: "Use console access, inspect VTY access-class and source subnet, correct only the management rule, and verify before saving.",
  },
  {
    title: "Scenario E - NAT works for Staff but not Students",
    approach: "Compare both source subnets to the NAT classification ACL and verify Student routing toward the same outside path.",
  },
  {
    title: "Scenario F - Remote gateway responds but server does not",
    approach: "Continue to destination VLAN, endpoint addressing, policy, service state, and return path instead of changing upstream routing.",
  },
];

const lab = [
  {
    step: "01",
    task: "Build or open a fictional topology with Staff, Students, Servers, Management, two switches, two routers, and a simulated outside network.",
  },
  {
    step: "02",
    task: "Create a baseline of interface states, VLANs, trunks, gateways, routes, ACLs, DHCP, DNS, NAT, and management reachability.",
  },
  {
    step: "03",
    task: "Verify one known-good internal path and one authorized path toward the simulated outside network.",
  },
  {
    step: "04",
    task: "Introduce exactly one fault: wrong access VLAN, missing trunk VLAN, wrong mask, missing route, ACL deny, missing helper, wrong NAT match, or disabled service.",
  },
  {
    step: "05",
    task: "Start from the user-visible symptom and narrow the fault domain with read-only evidence instead of looking directly at the fault.",
  },
  {
    step: "06",
    task: "Write one clear hypothesis before entering configuration mode.",
  },
  {
    step: "07",
    task: "Correct only the confirmed fault and retest the failed requirement plus at least one unrelated known-good service.",
  },
  {
    step: "08",
    task: "Document symptom, evidence, root cause, change, verification, and rollback note before saving.",
  },
];

const troubleshootingLog = [
  {
    field: "Symptom",
    example: "Student PC cannot reach HTTPS server 192.168.30.10.",
  },
  {
    field: "What still works",
    example: "Student PC reaches its 192.168.20.1 gateway.",
  },
  {
    field: "Expected path",
    example: "PC -> access switch -> trunk -> router -> Server VLAN.",
  },
  {
    field: "Evidence",
    example: "Route exists; ACL deny TCP/443 counter increments during test.",
  },
  {
    field: "Root cause",
    example: "Incorrect ACE blocks required HTTPS.",
  },
  {
    field: "Change",
    example: "Corrected only the affected ACL sequence.",
  },
  {
    field: "Verification",
    example: "HTTPS succeeds, prohibited SSH remains blocked, other VLANs unchanged.",
  },
  {
    field: "Rollback",
    example: "Restore the previous ACE if unintended behavior appears.",
  },
];

const verification = [
  {
    area: "Source endpoint",
    check: "Correct IP, mask, gateway, DNS, physical link, and access VLAN.",
  },
  {
    area: "Layer 2",
    check: "MAC learning, VLAN membership, trunk carriage, and STP forwarding.",
  },
  {
    area: "Gateway",
    check: "The local gateway is operational and correctly addressed.",
  },
  {
    area: "Routing",
    check: "Every required hop has a valid destination route and reachable next hop.",
  },
  {
    area: "Policy",
    check: "ACLs and security controls permit required traffic while preserving required restrictions.",
  },
  {
    area: "Services",
    check: "DHCP, DNS, NAT, and management functions behave as required.",
  },
  {
    area: "Destination",
    check: "The intended endpoint and application respond correctly.",
  },
  {
    area: "Return path",
    check: "Replies return through routing, policy, and translation successfully.",
  },
];

const checklist = [
  "I define the expected behavior before troubleshooting.",
  "I record what still works before changing configuration.",
  "I trace the packet from source to destination and back.",
  "I separate physical, Layer 2, Layer 3, policy, service, and application evidence.",
  "I use read-only show commands before configuration commands.",
  "I know same-subnet traffic normally does not require router forwarding.",
  "I check routing before blaming ACLs, DNS, or NAT.",
  "I compare IP-based and name-based tests when DNS may be involved.",
  "I preserve counters, tables, and logs long enough to use them as evidence.",
  "I make the smallest justified change.",
  "I retest both the failed requirement and unaffected services.",
  "I document and save only after the fix is proven.",
];

const reflection = [
  "Why is knowing what still works as important as knowing what fails?",
  "How can one successful gateway ping eliminate several possible fault areas?",
  "Why must the return path be checked even when the forward route looks correct?",
  "Why is permit ip any any a poor troubleshooting shortcut?",
  "How can MAC tables, ARP tables, ACL counters, NAT translations, and logs act as evidence?",
  "What makes a troubleshooting change safe enough to save?",
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

export default function NetworkTroubleshootingWorkflowPage() {
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
              href="/cyberpatriot/cisco-networking/cisco-device-hardening-management-plane"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/packet-tracer-defensive-practice"
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
                Cisco & Networking · Lesson 16
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Network Troubleshooting Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Troubleshoot Cisco and Packet Tracer networks by following the
                evidence: requirement, packet path, layer, hypothesis,
                controlled change, and end-to-end verification.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong troubleshooting is not about running the largest number
                of commands. It is about choosing the next command that can
                eliminate the most incorrect possibilities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Troubleshooting layers</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core principles</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Baseline commands</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Find root cause with evidence</span>
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
            title="Diagnose first, configure second"
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
              Troubleshooting is controlled elimination
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Every successful test removes possibilities. Use working evidence
              to shrink the fault domain until one change is justified.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Broad workarounds hide root cause
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              permit any any, trunk allow all, random static routes, clearing
              tables, or disabling controls can restore traffic while breaking
              required security or hiding the real fault.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Troubleshooting principles"
            title="Six rules for a controlled investigation"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((item) => (
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
            label="Symptom definition"
            title="Ask these questions before opening configuration mode"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {symptomQuestions.map((item) => (
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
            label="Layered troubleshooting"
            title="Move through the network in dependency order"
            description="You do not have to start at Layer 1 every time. Start at the lowest layer the existing evidence has not already proven."
          />

          <div className="mt-8 grid gap-5">
            {layers.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[0.25fr_0.75fr_1.25fr]">
                  <div>
                    <span className="text-lg font-black text-cyan-300">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-cyan-200">
                      {item.question}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-sm leading-7 text-slate-400"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.commands.map((command) => (
                    <code
                      key={command}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-cyan-200"
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
            label="First five minutes"
            title="Build context before chasing commands"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {firstMinutes.map((item) => (
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
            label="Baseline commands"
            title="Ten commands that answer different questions"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {baselineCommands.map(([command, use]) => (
              <div
                key={command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-black text-cyan-200">
                  {command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Ping ladder"
            title="Test from near to far"
            description="A controlled sequence of tests can show exactly where reachability stops."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pingLadder.map((item) => (
              <div
                key={item.test}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.test}
                </h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    What success supports
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.proves}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    What it does not prove
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.doesNotProve}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              ICMP is evidence, not absolute proof
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Some devices or policies intentionally suppress ICMP. Interpret
              ping results with routing, ACL, and application evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Traceroute reasoning"
            title="Use hop-by-hop clues without overtrusting them"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {tracerouteClues.map((item) => (
              <div
                key={item.clue}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.clue}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[
        ["Layer 2 patterns", "Use switching evidence to narrow the fault", layer2Patterns],
        ["Layer 3 patterns", "Use routing evidence to explain the path", layer3Patterns],
        ["Policy patterns", "Correct routing can still be filtered", policyPatterns],
        ["Service patterns", "DHCP, DNS, and NAT leave different evidence", servicePatterns],
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
              {(items as string[][]).map(([finding, checks]) => (
                <div
                  key={finding}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="text-lg font-black text-white">
                    {finding}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {checks}
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
            label="Fault-domain clues"
            title="The number of affected users is evidence"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scopePatterns.map((item) => (
              <div
                key={item.scope}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.scope}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.areas}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Controlled changes"
            title="Turn a hypothesis into one measurable change"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {changeProcess.map((item) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Actions that make the network harder to understand
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            label="Command map"
            title="Pick commands based on the question you are asking"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commandMap.map(([problem, commands]) => (
              <div
                key={problem}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {problem}
                </h3>
                <p className="mt-3 font-mono text-sm leading-7 text-cyan-200">
                  {commands}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence-based reasoning"
            title="Let successful tests remove bad hypotheses"
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
            label="Competition scenarios"
            title="Choose the next evidence, not the next random command"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scenarios.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {item.approach}
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
            label="Verification matrix"
            title="Prove the complete path, not just one hop"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
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
            Troubleshoot one hidden fault in a fictional Packet Tracer network
          </h2>
          <div className="mt-8 grid gap-3">
            {lab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">
                  {item.step}
                </span>
                <p className="text-sm leading-7 text-slate-300">
                  {item.task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Troubleshooting log"
            title="Record the evidence trail"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {troubleshootingLog.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>
            <div className="mt-6 grid gap-3">
              {checklist.map((item, index) => (
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
              Check your reasoning
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
                Define the requirement, identify what still works, trace the
                packet path, collect evidence, change one justified item,
                verify forward and return behavior, and document before saving.
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
              href="/cyberpatriot/cisco-networking/cisco-device-hardening-management-plane"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/packet-tracer-defensive-practice"
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
