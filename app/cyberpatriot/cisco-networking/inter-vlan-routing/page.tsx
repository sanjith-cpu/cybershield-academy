import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why hosts in different VLANs need Layer 3 forwarding.",
  "Distinguish router-on-a-stick, routed interfaces, and switch virtual interfaces.",
  "Configure and verify inter-VLAN routing with an inspection-first workflow.",
  "Understand how default gateways connect endpoint VLANs to Layer 3 forwarding.",
  "Recognize common inter-VLAN routing failures involving trunks, subinterfaces, SVIs, and routing state.",
  "Verify end-to-end traffic without changing unrelated Layer 2 configuration.",
];

const coreConcepts = [
  {
    title: "Inter-VLAN routing",
    text:
      "Layer 3 forwarding between separate VLAN broadcast domains. A switch alone cannot move ordinary traffic from VLAN 10 to VLAN 20 unless it has Layer 3 routing capability configured.",
  },
  {
    title: "Default gateway",
    text:
      "The Layer 3 address a host uses when the destination lies outside its local subnet.",
  },
  {
    title: "Router-on-a-stick",
    text:
      "A design where one physical router interface carries multiple VLANs through 802.1Q subinterfaces.",
  },
  {
    title: "Subinterface",
    text:
      "A logical router interface created under one physical interface and associated with a VLAN using 802.1Q encapsulation.",
  },
  {
    title: "SVI",
    text:
      "A Switch Virtual Interface such as interface vlan 10 that provides Layer 3 functionality for a VLAN on a multilayer switch.",
  },
  {
    title: "Layer 3 switch",
    text:
      "A switch capable of routing between VLANs while also performing normal Layer 2 switching.",
  },
];

const whyRoutingIsRequired = [
  {
    step: "01",
    title: "Host compares destination to its own subnet",
    text:
      "If the destination is outside the local subnet, the host knows the traffic must leave the local Layer 2 domain.",
  },
  {
    step: "02",
    title: "Host sends the frame toward the default gateway",
    text:
      "The destination IP remains the remote host, but the local Ethernet frame uses the gateway's MAC address.",
  },
  {
    step: "03",
    title: "Gateway receives the packet",
    text:
      "The router or Layer 3 switch examines the destination IP and performs a routing-table lookup.",
  },
  {
    step: "04",
    title: "Layer 3 device selects the destination VLAN",
    text:
      "The device chooses the connected or learned route that reaches the remote subnet.",
  },
  {
    step: "05",
    title: "A new Layer 2 frame is built",
    text:
      "The Layer 3 device forwards the packet into the destination VLAN with local Layer 2 addressing appropriate for that segment.",
  },
  {
    step: "06",
    title: "Destination host receives the packet",
    text:
      "The endpoint processes the frame and packet and sends replies through its own gateway when necessary.",
  },
];

const designComparison = [
  {
    method: "Router-on-a-stick",
    layer2:
      "A trunk connects the switch to one router physical interface.",
    layer3:
      "Router subinterfaces act as gateways for individual VLANs.",
    strength:
      "Simple and useful for small labs and learning.",
    tradeoff:
      "All inter-VLAN traffic shares one physical router link.",
  },
  {
    method: "Multilayer switch with SVIs",
    layer2:
      "Access ports and trunks remain on the switch.",
    layer3:
      "SVIs provide gateway addresses and the switch routes internally when IP routing is enabled.",
    strength:
      "Efficient and common in campus-style designs.",
    tradeoff:
      "Requires a Layer 3 capable switch and correct routing configuration.",
  },
  {
    method: "Physical routed interfaces",
    layer2:
      "Each routed interface connects directly to one Layer 3 subnet.",
    layer3:
      "Each physical interface holds its own IP address and route.",
    strength:
      "Conceptually simple.",
    tradeoff:
      "Consumes more physical interfaces and scales poorly for many VLANs.",
  },
];

const fictionalPlan = [
  {
    vlan: "10",
    name: "STAFF",
    subnet: "192.168.10.0/24",
    gateway: "192.168.10.1",
  },
  {
    vlan: "20",
    name: "STUDENTS",
    subnet: "192.168.20.0/24",
    gateway: "192.168.20.1",
  },
  {
    vlan: "30",
    name: "SERVERS",
    subnet: "192.168.30.0/24",
    gateway: "192.168.30.1",
  },
  {
    vlan: "99",
    name: "MANAGEMENT",
    subnet: "192.168.99.0/24",
    gateway: "192.168.99.1",
  },
];

const roaInspection = [
  {
    command: "show ip interface brief",
    purpose:
      "Identify the physical interface and any configured subinterfaces with their IPv4 addresses and state.",
  },
  {
    command: "show running-config interface GigabitEthernet0/0",
    purpose:
      "Review the parent physical interface state and configuration.",
  },
  {
    command: "show running-config interface GigabitEthernet0/0.10",
    purpose:
      "Review one router subinterface in detail.",
  },
  {
    command: "show ip route connected",
    purpose:
      "Confirm the router recognizes each VLAN subnet as a connected route.",
  },
  {
    command: "show ip route",
    purpose:
      "Review the complete Layer 3 forwarding table.",
  },
  {
    command: "show arp",
    purpose:
      "Review local IPv4-to-MAC mappings learned on connected VLANs.",
  },
];

const switchInspection = [
  {
    command: "show vlan brief",
    purpose:
      "Verify the VLANs exist and endpoint access ports belong to the intended VLANs.",
  },
  {
    command: "show interfaces trunk",
    purpose:
      "Verify the router-facing switchport is trunking and carrying all required VLANs.",
  },
  {
    command: "show interfaces <interface> switchport",
    purpose:
      "Inspect the detailed operational state of the router-facing trunk.",
  },
  {
    command: "show mac address-table",
    purpose:
      "Confirm endpoint and gateway-side MAC learning is occurring in the expected VLANs.",
  },
  {
    command: "show spanning-tree vlan <vlan-id>",
    purpose:
      "Check whether the VLAN is forwarding over the required Layer 2 path.",
  },
];

const roaConfig = [
  {
    step: "01",
    title: "Prepare the switch trunk",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/24",
      "switchport mode trunk",
      "switchport trunk allowed vlan 10,20,30,99",
      "end",
    ],
    verify:
      "show interfaces trunk",
  },
  {
    step: "02",
    title: "Prepare the router physical interface",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/0",
      "no shutdown",
      "end",
    ],
    verify:
      "show ip interface brief",
  },
  {
    step: "03",
    title: "Create VLAN 10 subinterface",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/0.10",
      "encapsulation dot1Q 10",
      "ip address 192.168.10.1 255.255.255.0",
      "end",
    ],
    verify:
      "show running-config interface GigabitEthernet0/0.10",
  },
  {
    step: "04",
    title: "Create VLAN 20 subinterface",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/0.20",
      "encapsulation dot1Q 20",
      "ip address 192.168.20.1 255.255.255.0",
      "end",
    ],
    verify:
      "show running-config interface GigabitEthernet0/0.20",
  },
];

const subinterfaceRules = [
  {
    title: "Subinterface number is locally significant",
    text:
      "The numeric suffix is often chosen to match the VLAN ID for readability, but the VLAN association is created by the encapsulation dot1Q command.",
  },
  {
    title: "Each VLAN needs a unique Layer 3 subnet",
    text:
      "Two subinterfaces should not use overlapping connected IPv4 networks.",
  },
  {
    title: "The parent must be operational",
    text:
      "If the physical router interface is administratively down, subinterfaces cannot carry normal traffic.",
  },
  {
    title: "The switch link must trunk",
    text:
      "The router cannot receive multiple VLANs correctly if the switch-facing interface is only an access port.",
  },
  {
    title: "Allowed VLANs must include the routed VLAN",
    text:
      "A perfectly configured router subinterface still fails if the trunk drops that VLAN.",
  },
  {
    title: "Gateway addresses must match endpoint design",
    text:
      "Hosts should use the subinterface address assigned to their own VLAN as the default gateway unless the scenario defines another valid design.",
  },
];

const nativeSubinterfaceNotes = [
  {
    title: "Native keyword",
    text:
      "A router subinterface can be configured with encapsulation dot1Q <vlan-id> native when the authorized design intentionally uses that VLAN as native.",
  },
  {
    title: "Both ends must agree",
    text:
      "The router and switch trunk must interpret the native VLAN consistently.",
  },
  {
    title: "Do not make a VLAN native casually",
    text:
      "Native-VLAN changes affect how untagged frames are classified and can create mismatch problems.",
  },
  {
    title: "Native is not required for every design",
    text:
      "Most routed VLANs remain normally tagged. The native setting should exist only when the topology calls for it.",
  },
];

const sviConcepts = [
  {
    title: "SVI provides a VLAN gateway",
    text:
      "interface vlan 10 can hold the Layer 3 address used by hosts in VLAN 10.",
  },
  {
    title: "The VLAN must exist",
    text:
      "The corresponding VLAN normally needs to exist and have an active Layer 2 presence for the SVI to become operational.",
  },
  {
    title: "IP routing enables forwarding",
    text:
      "On a multilayer switch, ip routing is commonly required before the switch will route between SVIs.",
  },
  {
    title: "Access ports still matter",
    text:
      "SVIs do not replace VLAN membership. Endpoints still need correct access VLAN assignments.",
  },
  {
    title: "Trunks still matter",
    text:
      "If VLANs extend to other switches, trunks must still carry the required VLANs.",
  },
  {
    title: "SVIs can support management or user gateways",
    text:
      "The purpose depends on the design. Do not assume every SVI is only for management.",
  },
];

const sviConfig = [
  {
    step: "01",
    title: "Create the VLANs",
    commands: [
      "configure terminal",
      "vlan 10",
      "name STAFF",
      "vlan 20",
      "name STUDENTS",
      "end",
    ],
    verify:
      "show vlan brief",
  },
  {
    step: "02",
    title: "Create the VLAN 10 SVI",
    commands: [
      "configure terminal",
      "interface vlan 10",
      "ip address 192.168.10.1 255.255.255.0",
      "no shutdown",
      "end",
    ],
    verify:
      "show ip interface brief",
  },
  {
    step: "03",
    title: "Create the VLAN 20 SVI",
    commands: [
      "configure terminal",
      "interface vlan 20",
      "ip address 192.168.20.1 255.255.255.0",
      "no shutdown",
      "end",
    ],
    verify:
      "show ip interface brief",
  },
  {
    step: "04",
    title: "Enable Layer 3 forwarding",
    commands: [
      "configure terminal",
      "ip routing",
      "end",
    ],
    verify:
      "show ip route",
  },
];

const gatewayReasoning = [
  {
    symptom:
      "Host can reach same-VLAN peers but cannot reach another VLAN",
    likelyChecks:
      "Default gateway, inter-VLAN routing state, ACLs, destination gateway, and return path.",
  },
  {
    symptom:
      "Host cannot even ping its own gateway",
    likelyChecks:
      "Access VLAN, trunk carriage, gateway interface/SVI state, host subnet mask, physical link, ARP.",
  },
  {
    symptom:
      "Only VLAN 20 cannot reach other VLANs",
    likelyChecks:
      "VLAN 20 gateway, subinterface/SVI, trunk allowance, endpoint gateway, route presence.",
  },
  {
    symptom:
      "Router sees connected route for VLAN 10 but not VLAN 20",
    likelyChecks:
      "VLAN 20 subinterface/SVI configuration and operational state.",
  },
  {
    symptom:
      "Host reaches gateway but cannot reach remote server",
    likelyChecks:
      "Routing table, ACL, destination subnet, return route, and service state.",
  },
  {
    symptom:
      "Inter-VLAN ping works but application fails",
    likelyChecks:
      "Transport port, ACL policy, server process, firewall, DNS, or application configuration.",
  },
];

const endToEndPath = [
  {
    step: "01",
    title: "Source endpoint",
    text:
      "Confirm IP address, subnet mask, default gateway, and access VLAN.",
  },
  {
    step: "02",
    title: "Source access switch",
    text:
      "Confirm access VLAN, MAC learning, and trunk path toward the Layer 3 gateway.",
  },
  {
    step: "03",
    title: "Source gateway",
    text:
      "Confirm the subinterface or SVI is up and uses the correct address and mask.",
  },
  {
    step: "04",
    title: "Routing decision",
    text:
      "Confirm the Layer 3 device has a route to the destination subnet.",
  },
  {
    step: "05",
    title: "Destination VLAN",
    text:
      "Confirm the destination VLAN is active and reachable from the Layer 3 device.",
  },
  {
    step: "06",
    title: "Destination endpoint",
    text:
      "Confirm the destination host addressing, gateway, local policy, and application state.",
  },
  {
    step: "07",
    title: "Return path",
    text:
      "Confirm the destination can route the response back to the source network.",
  },
];

const routingTableExamples = [
  {
    entry: "C 192.168.10.0/24 is directly connected, GigabitEthernet0/0.10",
    meaning:
      "The router recognizes VLAN 10's subnet as connected through subinterface .10.",
  },
  {
    entry: "C 192.168.20.0/24 is directly connected, GigabitEthernet0/0.20",
    meaning:
      "The router recognizes VLAN 20's subnet as connected through subinterface .20.",
  },
  {
    entry: "L 192.168.10.1/32 is directly connected, GigabitEthernet0/0.10",
    meaning:
      "The router has a local route for its own interface address.",
  },
  {
    entry: "C 192.168.30.0/24 is directly connected, Vlan30",
    meaning:
      "A multilayer switch recognizes VLAN 30 as connected through SVI Vlan30.",
  },
];

const commonMisconfigurations = [
  {
    problem: "Wrong encapsulation VLAN ID",
    effect:
      "The router subinterface associates frames with the wrong VLAN or fails to communicate with the intended segment.",
  },
  {
    problem: "Wrong gateway IP",
    effect:
      "Hosts send remote traffic to an address that may not belong to the intended local subnet or gateway interface.",
  },
  {
    problem: "Parent router interface shutdown",
    effect:
      "All subinterfaces on that physical interface can fail together.",
  },
  {
    problem: "Missing VLAN on switch",
    effect:
      "The Layer 2 path for that VLAN may not exist even though the router subinterface is configured.",
  },
  {
    problem: "VLAN missing from trunk allowed list",
    effect:
      "Only that VLAN fails across the trunk while other VLANs may continue working.",
  },
  {
    problem: "ip routing disabled on multilayer switch",
    effect:
      "SVIs may exist but traffic is not forwarded between them as intended.",
  },
  {
    problem: "SVI line protocol down",
    effect:
      "The gateway for that VLAN may be unavailable despite having an IP address configured.",
  },
  {
    problem: "Overlapping subnet configuration",
    effect:
      "Layer 3 routing becomes ambiguous or invalid and connected route behavior can be incorrect.",
  },
];

const aclAwareness = [
  {
    title: "Routing and policy are separate",
    text:
      "A route can exist while an ACL still blocks the traffic.",
  },
  {
    title: "Successful gateway ping is not full proof",
    text:
      "It confirms part of the path, not that inter-VLAN policy permits every required application.",
  },
  {
    title: "Inspect before removing ACLs",
    text:
      "If inter-VLAN traffic fails, determine whether the ACL is intentionally enforcing a scenario requirement.",
  },
  {
    title: "Test the required service",
    text:
      "After Layer 3 reachability works, verify the actual application or port the scenario requires.",
  },
];

const reasoningCases = [
  {
    finding:
      "VLAN 10 hosts can ping 192.168.10.1 but not 192.168.20.1",
    weak:
      "Move VLAN 10 hosts into VLAN 20.",
    better:
      "The local gateway works. Inspect inter-VLAN routing, VLAN 20 gateway state, route table, trunk carriage, and policy.",
  },
  {
    finding:
      "Router subinterface G0/0.20 has IP 192.168.20.1/24, but VLAN 20 hosts cannot ping it",
    weak:
      "Add a static route to 192.168.20.0/24.",
    better:
      "That network should already be directly connected. Check encapsulation dot1Q 20, parent interface, trunk allowance, VLAN existence, and host access VLAN.",
  },
  {
    finding:
      "A multilayer switch has SVIs for VLAN 10 and VLAN 20 but hosts cannot route between them",
    weak:
      "Create a router-on-a-stick connection immediately.",
    better:
      "First verify the switch supports Layer 3 routing and whether ip routing is enabled.",
  },
  {
    finding:
      "VLAN 20 cannot reach VLAN 30, but VLAN 10 can",
    weak:
      "The entire trunk must be broken.",
    better:
      "A selective failure points toward VLAN-specific trunk carriage, gateway state, ACLs, or addressing rather than total link failure.",
  },
  {
    finding:
      "Host can ping remote gateway but not remote server",
    weak:
      "Inter-VLAN routing is completely broken.",
    better:
      "Routing reaches at least the remote gateway. Continue with server addressing, local firewall, ACL, service state, and return-path checks.",
  },
  {
    finding:
      "A gateway address ends in .254 instead of .1",
    weak:
      "Change it because gateways should use .1.",
    better:
      "Gateway numbering is a design choice. Verify the scenario and endpoint configuration before changing a working address.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Adding static routes for directly connected VLANs",
    risk:
      "Hides the real interface/subinterface problem and can create unnecessary routing confusion.",
  },
  {
    shortcut:
      "Changing endpoint VLANs to make routing work",
    risk:
      "Destroys the intended segmentation instead of fixing the Layer 3 path.",
  },
  {
    shortcut:
      "Removing ACLs because ping fails",
    risk:
      "Can erase required traffic policy before confirming whether routing or addressing is actually at fault.",
  },
  {
    shortcut:
      "Reconfiguring all subinterfaces at once",
    risk:
      "A single mistaken assumption can disconnect every routed VLAN on the shared link.",
  },
  {
    shortcut:
      "Enabling every SVI",
    risk:
      "Can activate unintended Layer 3 gateways or management paths.",
  },
  {
    shortcut:
      "Saving before testing return traffic",
    risk:
      "A one-way or partial routing failure can become persistent.",
  },
];

const verificationChecklist = [
  {
    area: "Endpoint VLAN",
    check:
      "The source and destination ports belong to the intended VLANs.",
  },
  {
    area: "Endpoint addressing",
    check:
      "Each host uses an IP address, mask, and gateway appropriate for its VLAN.",
  },
  {
    area: "Trunk",
    check:
      "Every required VLAN reaches the Layer 3 gateway through the intended trunk path.",
  },
  {
    area: "Gateway interface",
    check:
      "The subinterface or SVI is operational and uses the correct address and prefix.",
  },
  {
    area: "Routing table",
    check:
      "The Layer 3 device has connected or learned routes for the required subnets.",
  },
  {
    area: "Policy",
    check:
      "ACLs and security rules allow required traffic and still block prohibited traffic.",
  },
  {
    area: "Return path",
    check:
      "The destination can send replies back to the source subnet.",
  },
  {
    area: "Application",
    check:
      "The actual required service works after basic Layer 3 reachability is confirmed.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional topology with one switch, one router, and four VLANs: 10 STAFF, 20 STUDENTS, 30 SERVERS, and 99 MANAGEMENT.",
  },
  {
    step: "02",
    task:
      "Configure endpoint-facing access ports and the router-facing trunk, but do not configure inter-VLAN routing yet.",
  },
  {
    step: "03",
    task:
      "Verify same-VLAN communication works while cross-VLAN communication fails as expected.",
  },
  {
    step: "04",
    task:
      "Configure router-on-a-stick subinterfaces for VLANs 10,20,30,99 using the fictional gateway plan.",
  },
  {
    step: "05",
    task:
      "Verify the router installs connected routes for all four VLAN subnets.",
  },
  {
    step: "06",
    task:
      "Test Staff-to-Server traffic and Management-to-router traffic end to end.",
  },
  {
    step: "07",
    task:
      "Introduce one fault such as wrong encapsulation VLAN ID, missing allowed VLAN, or wrong endpoint gateway.",
  },
  {
    step: "08",
    task:
      "Use layered evidence to identify the fault, correct only that issue, and verify both forward and return traffic.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "VLAN 10 hosts can reach their gateway, but VLAN 20 hosts cannot reach theirs.",
    response:
      "Treat it as VLAN-specific. Check VLAN 20 subinterface/SVI state, trunk carriage, access VLAN, and endpoint gateway.",
  },
  {
    prompt:
      "The router has G0/0.10 and G0/0.20 configured, but show ip route lists only VLAN 10's subnet.",
    response:
      "Inspect G0/0.20 operational state, encapsulation, IP configuration, and the parent interface.",
  },
  {
    prompt:
      "A multilayer switch has Vlan10 and Vlan20 interfaces up but no inter-VLAN traffic.",
    response:
      "Check whether ip routing is enabled and whether policy blocks the traffic.",
  },
  {
    prompt:
      "VLAN 20 can ping VLAN 30's gateway but not the server itself.",
    response:
      "Continue beyond routing: inspect server IP, mask, gateway, firewall, application service, and return path.",
  },
  {
    prompt:
      "A teammate wants to add a static route to a directly connected VLAN.",
    response:
      "Do not use a static route to hide a connected-interface problem. Fix the interface/subinterface or SVI state.",
  },
  {
    prompt:
      "Management becomes unreachable after a trunk allowed-list change.",
    response:
      "Check whether VLAN 99 was removed from the trunk. Restore only the required management path and verify before saving.",
  },
];

const checklist = [
  "I can explain why different VLANs need Layer 3 forwarding.",
  "I understand how a default gateway participates in inter-VLAN communication.",
  "I can distinguish router-on-a-stick from SVI-based routing.",
  "I understand how 802.1Q subinterfaces map router logic to VLANs.",
  "I know that a router-on-a-stick parent interface and switch trunk must both be operational.",
  "I can verify connected routes for each routed VLAN.",
  "I understand that multilayer switching typically requires ip routing for inter-VLAN forwarding.",
  "I do not add static routes to hide directly connected VLAN problems.",
  "I check ACLs separately from routing state.",
  "I verify return traffic, not just one-way reachability.",
  "I test the actual application after Layer 3 reachability works.",
  "I document gateway addresses and VLAN-to-subnet mappings before saving.",
];

const reflection = [
  "Why does a host in VLAN 10 need a default gateway to reach VLAN 20?",
  "What role does encapsulation dot1Q play on a router subinterface?",
  "Why can a router subinterface look correctly addressed but still fail if the switch trunk is wrong?",
  "What is the difference between an SVI and an access port?",
  "Why should directly connected VLANs normally appear automatically in the routing table?",
  "What evidence would you collect when one VLAN routes correctly and another does not?",
];

export default function InterVlanRoutingPage() {
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
              href="/cyberpatriot/cisco-networking/trunks-native-vlans-8021q"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/switch-port-security"
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
                Cisco & Networking · Lesson 09
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Inter-VLAN Routing
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how separate VLANs communicate through Layer 3 gateways,
                router-on-a-stick subinterfaces, or multilayer-switch SVIs while
                preserving the Layer 2 segmentation created by VLANs.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is to route required traffic without destroying the
                segmentation that VLANs provide. Every successful design aligns
                access ports, trunks, gateways, routes, and endpoint addressing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Routing designs</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Verification areas</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Route without breaking segmentation</span>
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
            Connect VLANs at Layer 3 with controlled routing
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              VLAN boundaries stop Layer 2 traffic, not Layer 3 routing
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A gateway can route between VLAN subnets while the VLANs remain
              separate broadcast domains. Segmentation and routing work together.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not "fix" routing by collapsing VLANs
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Moving endpoints into one VLAN may restore connectivity while
              destroying the intended security boundary. Fix the Layer 3 path instead.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Core concepts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six ideas behind inter-VLAN routing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Packet path
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How traffic crosses from one VLAN to another
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyRoutingIsRequired.map((item) => (
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Design choices
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Three ways to provide Layer 3 forwarding
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {designComparison.map((item) => (
              <div
                key={item.method}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.method}</h3>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Layer 2
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.layer2}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Layer 3
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.layer3}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strength
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.strength}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Tradeoff
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.tradeoff}
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fictional gateway plan
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep VLAN, subnet, and gateway aligned
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">VLAN</th>
                  <th className="px-4 py-3 font-black">Name</th>
                  <th className="px-4 py-3 font-black">Subnet</th>
                  <th className="px-4 py-3 font-black">Gateway</th>
                </tr>
              </thead>
              <tbody>
                {fictionalPlan.map((item) => (
                  <tr
                    key={item.vlan}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-black text-white">
                      {item.vlan}
                    </td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.subnet}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.gateway}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Router inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Read Layer 3 state before configuring
            </h2>

            <div className="mt-6 grid gap-3">
              {roaInspection.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="block overflow-x-auto text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Switch inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Verify the Layer 2 path toward the gateway
            </h2>

            <div className="mt-6 grid gap-3">
              {switchInspection.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="block overflow-x-auto text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Router-on-a-stick
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build the trunk and subinterfaces deliberately
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {roaConfig.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="grid gap-2">
                    {item.commands.map((command) => (
                      <code
                        key={command}
                        className="block overflow-x-auto text-sm text-cyan-200"
                      >
                        {command}
                      </code>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Verify
                  </p>
                  <code className="mt-2 block overflow-x-auto text-sm text-slate-200">
                    {item.verify}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Adapt interface names to the device
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Packet Tracer router models can use different interface names.
              Inspect the device first instead of copying GigabitEthernet0/0 blindly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Subinterface rules
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Every subinterface depends on the same Layer 2 path
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {subinterfaceRules.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Native subinterface awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use native VLAN configuration only when the design requires it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {nativeSubinterfaceNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Multilayer switching
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            SVIs provide gateways inside the switch
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sviConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            SVI configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Route between VLANs on a Layer 3 capable switch
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sviConfig.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="grid gap-2">
                    {item.commands.map((command) => (
                      <code
                        key={command}
                        className="block overflow-x-auto text-sm text-cyan-200"
                      >
                        {command}
                      </code>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Verify
                  </p>
                  <code className="mt-2 block overflow-x-auto text-sm text-slate-200">
                    {item.verify}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Feature support depends on switch model
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Not every Packet Tracer switch supports Layer 3 routing or the same
              SVI behavior. Confirm the device model and available commands first.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Routing table
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Connected routes prove the gateway owns the subnet
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {routingTableExamples.map((item) => (
              <div
                key={item.entry}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-bold text-cyan-200">
                  {item.entry}
                </code>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            End-to-end troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Trace from the source host all the way back
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {endToEndPath.map((item) => (
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Symptom mapping
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Let the failure pattern choose the next check
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {gatewayReasoning.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.likelyChecks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Common misconfigurations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Small errors can remove one VLAN or every VLAN
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {commonMisconfigurations.map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.problem}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.effect}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            ACL awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A working route does not guarantee permitted traffic
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aclAwareness.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Diagnose Layer 3 without destroying Layer 2 design
          </h2>

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

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
            Fixes that hide the real routing problem
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Practice scenarios
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Choose the safest next Layer 3 check
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceScenarios.map((item) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.prompt}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {item.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the complete routed path
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecklist.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
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
            Build and troubleshoot fictional inter-VLAN routing
          </h2>

          <div className="mt-8 grid gap-3">
            {packetTracerLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
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
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
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
                Inter-VLAN routing succeeds only when Layer 2 and Layer 3 agree:
                access VLAN, trunk, gateway, route, endpoint addressing, and
                return path all have to describe the same network design.
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
              href="/cyberpatriot/cisco-networking/trunks-native-vlans-8021q"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/switch-port-security"
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
