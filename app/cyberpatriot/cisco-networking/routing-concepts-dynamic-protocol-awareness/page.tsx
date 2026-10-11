import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how routers learn, compare, and select routes.",
  "Distinguish connected, static, and dynamically learned routes.",
  "Understand administrative distance, metric, and longest-prefix match at a practical competition level.",
  "Recognize the purpose and basic behavior of RIP, OSPF, and EIGRP without overconfiguring a network blindly.",
  "Inspect routing-protocol state safely before making changes.",
  "Troubleshoot route-learning problems by separating neighbor, network, metric, and policy evidence.",
];

const coreConcepts = [
  {
    title: "Routing table",
    text:
      "The router's current collection of known destination networks and the paths it can use to reach them.",
  },
  {
    title: "Route source",
    text:
      "The mechanism that taught the router about a network, such as a connected interface, static configuration, RIP, OSPF, or EIGRP.",
  },
  {
    title: "Administrative distance",
    text:
      "A local preference value Cisco IOS uses when the same destination prefix is learned from different routing sources.",
  },
  {
    title: "Metric",
    text:
      "A value used by a routing protocol to compare multiple paths learned by that same protocol.",
  },
  {
    title: "Longest prefix match",
    text:
      "The forwarding rule that chooses the most specific matching destination route.",
  },
  {
    title: "Convergence",
    text:
      "The process by which routers learn about topology changes and settle on a consistent set of routes.",
  },
];

const routeSources = [
  {
    source: "Connected",
    code: "C",
    learnedBy:
      "Operational Layer 3 interface",
    typicalAD:
      "0",
    purpose:
      "Represents a directly attached network.",
  },
  {
    source: "Static",
    code: "S",
    learnedBy:
      "Manual ip route configuration",
    typicalAD:
      "1",
    purpose:
      "Provides an administrator-defined path.",
  },
  {
    source: "EIGRP internal",
    code: "D",
    learnedBy:
      "EIGRP neighbor exchange",
    typicalAD:
      "90",
    purpose:
      "Learns internal routes dynamically on supported Cisco IOS devices.",
  },
  {
    source: "OSPF",
    code: "O",
    learnedBy:
      "OSPF link-state routing",
    typicalAD:
      "110",
    purpose:
      "Learns routes through OSPF topology information and cost.",
  },
  {
    source: "RIP",
    code: "R",
    learnedBy:
      "RIP distance-vector updates",
    typicalAD:
      "120",
    purpose:
      "Learns routes using hop count.",
  },
];

const forwardingDecision = [
  {
    step: "01",
    title: "Find all matching routes",
    text:
      "The router compares the destination IP against entries in the routing table.",
  },
  {
    step: "02",
    title: "Choose the longest prefix",
    text:
      "The most specific matching network wins before administrative distance is considered.",
  },
  {
    step: "03",
    title: "Compare route sources if needed",
    text:
      "If the same prefix is learned from different sources, administrative distance helps choose which source is preferred.",
  },
  {
    step: "04",
    title: "Compare metrics within the same protocol",
    text:
      "If one routing protocol has multiple candidate paths to the same prefix, that protocol's metric helps choose the better path.",
  },
  {
    step: "05",
    title: "Resolve the next hop",
    text:
      "The router determines the outgoing interface and next-hop reachability.",
  },
  {
    step: "06",
    title: "Forward the packet",
    text:
      "The packet is sent toward the selected path if policy and interface state permit it.",
  },
];

const administrativeDistanceExamples = [
  {
    comparison: "Connected vs Static",
    winner: "Connected",
    why:
      "Connected routes normally have AD 0 while static routes default to AD 1.",
  },
  {
    comparison: "Static vs OSPF",
    winner: "Static",
    why:
      "A normal static route with AD 1 is preferred over OSPF AD 110 for the same prefix.",
  },
  {
    comparison: "EIGRP internal vs OSPF",
    winner: "EIGRP internal",
    why:
      "EIGRP internal commonly uses AD 90, lower than OSPF 110.",
  },
  {
    comparison: "OSPF vs RIP",
    winner: "OSPF",
    why:
      "OSPF commonly uses AD 110 while RIP uses 120.",
  },
];

const metricOverview = [
  {
    protocol: "RIP",
    metric:
      "Hop count",
    best:
      "Lower hop count",
    importantLimit:
      "15 hops maximum usable; 16 represents unreachable.",
  },
  {
    protocol: "OSPF",
    metric:
      "Cost",
    best:
      "Lower total cost",
    importantLimit:
      "Cost is commonly derived from interface bandwidth using a reference bandwidth.",
  },
  {
    protocol: "EIGRP",
    metric:
      "Composite metric",
    best:
      "Lower metric",
    importantLimit:
      "Bandwidth and delay are major default inputs; exact calculation is more advanced than this lesson requires.",
  },
];

const protocolComparison = [
  {
    protocol: "RIP",
    family:
      "Distance vector",
    updateStyle:
      "Periodic routing updates",
    strength:
      "Simple and easy to understand.",
    limitation:
      "Slow convergence and a small hop-count ceiling make it unsuitable for many larger modern networks.",
    competitionFocus:
      "Recognize configuration, version, passive-interface, hop count, and missing network statements.",
  },
  {
    protocol: "OSPF",
    family:
      "Link state",
    updateStyle:
      "Builds a topology database and exchanges link-state information.",
    strength:
      "Scales well and converges efficiently when configured correctly.",
    limitation:
      "More concepts are involved, including areas, neighbor states, router IDs, and cost.",
    competitionFocus:
      "Recognize areas, network participation, neighbor adjacency, interface cost, and route codes.",
  },
  {
    protocol: "EIGRP",
    family:
      "Advanced distance-vector / hybrid terminology",
    updateStyle:
      "Forms neighbors and exchanges route information efficiently.",
    strength:
      "Fast convergence and strong Cisco integration on supported platforms.",
    limitation:
      "Historically Cisco-centric and uses protocol-specific concepts.",
    competitionFocus:
      "Recognize autonomous-system configuration, neighbors, passive interfaces, and route code D.",
  },
];

const ciscoInspection = [
  {
    command: "show ip route",
    purpose:
      "Review the active IPv4 routing table and identify route sources.",
  },
  {
    command: "show ip protocols",
    purpose:
      "Summarize active routing protocols, network statements, passive interfaces, timers, and routing information sources where supported.",
  },
  {
    command: "show running-config | section router",
    purpose:
      "Review configured routing-process sections.",
  },
  {
    command: "show ip interface brief",
    purpose:
      "Confirm Layer 3 interfaces are up and correctly addressed.",
  },
  {
    command: "show ip ospf neighbor",
    purpose:
      "Review OSPF neighbor adjacencies where OSPF is configured.",
  },
  {
    command: "show ip ospf interface brief",
    purpose:
      "Summarize OSPF-enabled interfaces and areas on supported IOS versions.",
  },
  {
    command: "show ip eigrp neighbors",
    purpose:
      "Review EIGRP neighbors where the feature is available.",
  },
  {
    command: "show ip rip database",
    purpose:
      "Review RIP-learned routing information where supported.",
  },
  {
    command: "show cdp neighbors detail",
    purpose:
      "Compare Layer 3 routing expectations with the actual Cisco neighbor topology.",
  },
];

const ripConcepts = [
  {
    title: "Distance-vector behavior",
    text:
      "RIP learns routes from neighboring routers and uses hop count as its metric.",
  },
  {
    title: "Hop-count limit",
    text:
      "RIP considers routes with 16 hops unreachable, which limits its scalability.",
  },
  {
    title: "RIPv2",
    text:
      "RIPv2 supports classless routing information and is the relevant modern RIP version for most labs.",
  },
  {
    title: "Network statements",
    text:
      "RIP configuration identifies directly connected networks whose interfaces participate in RIP.",
  },
  {
    title: "Passive interfaces",
    text:
      "A passive interface can advertise its connected network without sending routing updates out that interface, depending on protocol behavior.",
  },
  {
    title: "Auto-summary awareness",
    text:
      "Older classful summarization behavior can create confusing routes; labs often use no auto-summary where supported.",
  },
];

const ripExample = [
  {
    step: "01",
    title: "Inspect first",
    commands: [
      "show ip route",
      "show ip protocols",
      "show running-config | section router rip",
    ],
  },
  {
    step: "02",
    title: "Enter RIP process",
    commands: [
      "configure terminal",
      "router rip",
      "version 2",
    ],
  },
  {
    step: "03",
    title: "Advertise connected networks",
    commands: [
      "network 10.0.0.0",
      "network 192.168.10.0",
    ],
  },
  {
    step: "04",
    title: "Disable classful auto-summary if supported and appropriate",
    commands: [
      "no auto-summary",
      "end",
    ],
  },
  {
    step: "05",
    title: "Verify",
    commands: [
      "show ip protocols",
      "show ip route",
    ],
  },
];

const ospfConcepts = [
  {
    title: "Link-state protocol",
    text:
      "OSPF shares information about links so routers can build a topology view and calculate shortest paths.",
  },
  {
    title: "Area",
    text:
      "OSPF organizes interfaces into areas. Area 0 is the backbone area in standard multi-area designs.",
  },
  {
    title: "Router ID",
    text:
      "A 32-bit value used to identify an OSPF router. It may be chosen automatically or configured deliberately.",
  },
  {
    title: "Neighbor adjacency",
    text:
      "OSPF routers must form compatible neighbor relationships before exchanging full routing information.",
  },
  {
    title: "Cost",
    text:
      "OSPF compares paths using cumulative interface cost.",
  },
  {
    title: "Passive interface",
    text:
      "An interface can advertise its connected network into OSPF while suppressing neighbor formation on that interface.",
  },
];

const ospfExample = [
  {
    step: "01",
    title: "Inspect current OSPF state",
    commands: [
      "show ip protocols",
      "show ip ospf neighbor",
      "show running-config | section router ospf",
    ],
  },
  {
    step: "02",
    title: "Enter an OSPF process",
    commands: [
      "configure terminal",
      "router ospf 1",
    ],
  },
  {
    step: "03",
    title: "Advertise a transit network",
    commands: [
      "network 10.0.0.0 0.0.0.3 area 0",
    ],
  },
  {
    step: "04",
    title: "Advertise a LAN",
    commands: [
      "network 192.168.10.0 0.0.0.255 area 0",
      "end",
    ],
  },
  {
    step: "05",
    title: "Verify adjacency and routes",
    commands: [
      "show ip ospf neighbor",
      "show ip route ospf",
    ],
  },
];

const wildcardExamples = [
  {
    subnet: "192.168.10.0/24",
    mask: "255.255.255.0",
    wildcard: "0.0.0.255",
  },
  {
    subnet: "10.0.0.0/30",
    mask: "255.255.255.252",
    wildcard: "0.0.0.3",
  },
  {
    subnet: "172.16.4.0/26",
    mask: "255.255.255.192",
    wildcard: "0.0.0.63",
  },
  {
    subnet: "10.10.0.0/16",
    mask: "255.255.0.0",
    wildcard: "0.0.255.255",
  },
];

const eigrpConcepts = [
  {
    title: "Neighbor-based learning",
    text:
      "EIGRP forms neighbor relationships with compatible routers before exchanging route information.",
  },
  {
    title: "Autonomous-system number",
    text:
      "Classic EIGRP configurations use an autonomous-system number that must match between intended neighbors.",
  },
  {
    title: "Composite metric",
    text:
      "EIGRP commonly considers bandwidth and delay by default when calculating route metrics.",
  },
  {
    title: "Successor",
    text:
      "The current best next-hop path to a destination in EIGRP terminology.",
  },
  {
    title: "Feasible successor",
    text:
      "A loop-free backup path that can be used quickly when certain feasibility conditions are met.",
  },
  {
    title: "Passive interface",
    text:
      "Used to suppress neighbor formation on interfaces where routing updates should not be sent.",
  },
];

const eigrpExample = [
  {
    step: "01",
    title: "Inspect",
    commands: [
      "show ip protocols",
      "show ip eigrp neighbors",
      "show running-config | section router eigrp",
    ],
  },
  {
    step: "02",
    title: "Enter EIGRP",
    commands: [
      "configure terminal",
      "router eigrp 100",
    ],
  },
  {
    step: "03",
    title: "Advertise connected networks",
    commands: [
      "network 10.0.0.0 0.0.0.3",
      "network 192.168.10.0 0.0.0.255",
    ],
  },
  {
    step: "04",
    title: "Disable classful auto-summary where supported and appropriate",
    commands: [
      "no auto-summary",
      "end",
    ],
  },
  {
    step: "05",
    title: "Verify",
    commands: [
      "show ip eigrp neighbors",
      "show ip route eigrp",
    ],
  },
];

const neighborRequirements = [
  {
    protocol: "RIP",
    requirements:
      "Correct interfaces participate, compatible version, reachable local link, and updates are not blocked.",
  },
  {
    protocol: "OSPF",
    requirements:
      "Matching area on the shared link, compatible timers/network behavior, unique router IDs, matching subnet, and working Layer 2/3 connectivity.",
  },
  {
    protocol: "EIGRP",
    requirements:
      "Matching AS number in classic configurations, compatible K-values on traditional implementations, shared subnet, and working local connectivity.",
  },
];

const passiveInterfaceReasoning = [
  {
    scenario: "User LAN",
    likelyChoice:
      "Often passive",
    why:
      "The connected network may need advertisement, but end-user devices do not need routing-protocol neighbor relationships.",
  },
  {
    scenario: "Router-to-router transit link",
    likelyChoice:
      "Usually not passive",
    why:
      "Dynamic neighbors normally need to form across the transit link.",
  },
  {
    scenario: "Management-only network",
    likelyChoice:
      "Depends on topology",
    why:
      "Advertise the network only if required, and avoid unnecessary routing protocol exposure.",
  },
  {
    scenario: "Unused interface",
    likelyChoice:
      "No routing participation",
    why:
      "An unused interface should not normally advertise or attempt neighbor formation.",
  },
];

const protocolTroubleshooting = [
  {
    symptom:
      "No OSPF neighbors appear",
    checks:
      "Interface state, IP subnet, area, timers, router ID conflict, passive-interface, network statements, ACLs.",
  },
  {
    symptom:
      "OSPF neighbor exists but route is missing",
    checks:
      "Remote advertisement, route filtering, network statement/interface participation, more preferred route source, route table specificity.",
  },
  {
    symptom:
      "RIP route appears with unexpected hop count",
    checks:
      "Topology, alternate paths, route source, summarization, and whether the route is being learned through an unintended neighbor.",
  },
  {
    symptom:
      "EIGRP neighbors are missing",
    checks:
      "AS number, local subnet, interface state, passive-interface, protocol configuration, and platform support.",
  },
  {
    symptom:
      "Static route wins over OSPF",
    checks:
      "Expected behavior if both describe the same prefix because static AD 1 is lower than OSPF 110.",
  },
  {
    symptom:
      "Default route is used instead of an expected dynamic route",
    checks:
      "The dynamic route may be missing, withdrawn, filtered, or not installed. Investigate rather than assuming the default is correct.",
  },
];

const routePreferenceCases = [
  {
    routes:
      "192.168.50.0/24 via OSPF and 192.168.50.0/24 static",
    result:
      "Static route preferred",
    reason:
      "Same prefix length, so route source preference matters; normal static AD is lower.",
  },
  {
    routes:
      "192.168.0.0/16 static and 192.168.50.0/24 OSPF",
    result:
      "OSPF /24 preferred for 192.168.50.x",
    reason:
      "Longest prefix match happens before administrative distance comparison.",
  },
  {
    routes:
      "0.0.0.0/0 static and 10.0.0.0/8 RIP",
    result:
      "RIP /8 preferred for 10.x destinations",
    reason:
      "The /8 is more specific than the default route.",
  },
  {
    routes:
      "Two OSPF routes to the same prefix",
    result:
      "Lower OSPF cost preferred",
    reason:
      "Same routing protocol and same prefix, so the protocol's metric decides.",
  },
];

const redistributionAwareness = [
  {
    title: "Redistribution connects routing domains",
    text:
      "A router can inject routes from one source or protocol into another routing protocol.",
  },
  {
    title: "It increases complexity",
    text:
      "Redistribution can create loops, unexpected preferences, or incomplete reachability if implemented without a clear design.",
  },
  {
    title: "Do not add it as a quick fix",
    text:
      "If one route is missing, first determine whether ordinary advertisement or neighbor formation is broken.",
  },
  {
    title: "Recognize it when reviewing configs",
    text:
      "Commands beginning with redistribute inside a routing process deserve careful review because they influence route propagation.",
  },
];

const defaultRouteAdvertisement = [
  {
    title: "Local default route",
    text:
      "A router may have its own 0.0.0.0/0 route toward an upstream path.",
  },
  {
    title: "Advertising a default",
    text:
      "Some routing protocols can inject or originate a default route for downstream routers.",
  },
  {
    title: "Do not assume every router should originate one",
    text:
      "Multiple unexpected default origins can send traffic toward the wrong edge.",
  },
  {
    title: "Verify upstream reachability",
    text:
      "A propagated default is useful only if the advertising router actually has a valid path for unknown destinations.",
  },
];

const reasoningCases = [
  {
    finding:
      "A static and OSPF route exist for the same /24",
    weak:
      "OSPF should win because dynamic routing is smarter.",
    better:
      "For the same prefix, the normal static route is preferred because its administrative distance is lower.",
  },
  {
    finding:
      "An OSPF /24 and static /16 both match the destination",
    weak:
      "Static always wins because AD 1 is lower.",
    better:
      "Longest prefix match happens first. The /24 is more specific and wins for destinations inside it.",
  },
  {
    finding:
      "OSPF neighbors disappear after an interface becomes passive",
    weak:
      "Add static routes immediately.",
    better:
      "A passive interface suppresses neighbor formation. Confirm whether that transit interface was intended to be passive.",
  },
  {
    finding:
      "RIP reaches a network in 4 hops",
    weak:
      "Four hops means the route is invalid.",
    better:
      "RIP permits up to 15 usable hops. The important question is whether 4 hops matches the intended topology.",
  },
  {
    finding:
      "EIGRP routers use different AS numbers",
    weak:
      "They should still exchange routes because they share a subnet.",
    better:
      "Classic EIGRP neighbors normally require matching AS numbers.",
  },
  {
    finding:
      "A router has a default route and an OSPF route to the same destination's subnet",
    weak:
      "The default route should take precedence because it is static.",
    better:
      "The OSPF subnet route is more specific and wins before administrative distance matters.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Enabling a routing protocol on every interface",
    risk:
      "Creates unnecessary neighbor exposure and route advertisement.",
  },
  {
    shortcut:
      "Removing passive-interface from all interfaces",
    risk:
      "Can start routing-protocol communication on user or management networks where it is not needed.",
  },
  {
    shortcut:
      "Adding static routes whenever a dynamic route disappears",
    risk:
      "Hides the broken routing-protocol condition instead of fixing adjacency or advertisement.",
  },
  {
    shortcut:
      "Redistributing protocols to fix one missing network",
    risk:
      "Can introduce route loops and broad unintended propagation.",
  },
  {
    shortcut:
      "Changing administrative distance without a clear design reason",
    risk:
      "Can silently change which path the router prefers.",
  },
  {
    shortcut:
      "Saving before convergence is verified",
    risk:
      "A transient or incorrect routing state can become the persistent configuration.",
  },
];

const verificationChecklist = [
  {
    area: "Interfaces",
    check:
      "Required Layer 3 interfaces are operational and correctly addressed.",
  },
  {
    area: "Protocol process",
    check:
      "The intended routing protocol is configured and only on required networks.",
  },
  {
    area: "Neighbors",
    check:
      "Expected OSPF or EIGRP neighbors form on router-to-router links.",
  },
  {
    area: "Route source",
    check:
      "Routes appear with the expected source code in show ip route.",
  },
  {
    area: "Preference",
    check:
      "Longest-prefix, administrative-distance, and metric behavior match the intended path.",
  },
  {
    area: "Passive interfaces",
    check:
      "User-facing interfaces are not forming unnecessary routing neighbors.",
  },
  {
    area: "Return path",
    check:
      "Remote networks learn or possess a route back to the source.",
  },
  {
    area: "End-to-end traffic",
    check:
      "Required applications work after route convergence.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional three-router topology with R1, R2, and R3 connected in a line and one LAN behind each router.",
  },
  {
    step: "02",
    task:
      "Verify all directly connected networks and router-to-router links before enabling any dynamic protocol.",
  },
  {
    step: "03",
    task:
      "Configure OSPF area 0 across the three routers using only the required transit and LAN networks.",
  },
  {
    step: "04",
    task:
      "Make user LAN interfaces passive while preserving advertisement of those connected networks.",
  },
  {
    step: "05",
    task:
      "Verify OSPF neighbors on transit links and OSPF routes to remote LANs.",
  },
  {
    step: "06",
    task:
      "Introduce one fault such as a wrong OSPF area, missing network statement, or passive transit interface.",
  },
  {
    step: "07",
    task:
      "Use show ip protocols, show ip ospf neighbor, and show ip route to isolate the exact failure.",
  },
  {
    step: "08",
    task:
      "Correct only the confirmed issue, verify convergence and end-to-end traffic, then document the route-source changes.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "A static /16 and an OSPF /24 both match 192.168.10.25.",
    response:
      "The OSPF /24 wins because longest prefix match is evaluated before administrative distance.",
  },
  {
    prompt:
      "OSPF is configured, but show ip ospf neighbor is empty on the transit link.",
    response:
      "Check interface state, subnet, area, passive-interface, timers, router ID, and whether OSPF is actually enabled on that interface.",
  },
  {
    prompt:
      "A RIP-learned route shows metric 16.",
    response:
      "RIP treats 16 as unreachable. Investigate the route or topology instead of relying on it.",
  },
  {
    prompt:
      "EIGRP neighbors are absent even though interfaces can ping each other.",
    response:
      "Compare EIGRP AS numbers, passive-interface settings, network participation, and platform support.",
  },
  {
    prompt:
      "A static route suddenly replaces an OSPF route to the same prefix.",
    response:
      "That is expected with default administrative distances. Decide whether the static route is intentional.",
  },
  {
    prompt:
      "A teammate wants to redistribute OSPF into RIP because one route is missing.",
    response:
      "Do not redistribute yet. First find the broken advertisement or neighbor condition that caused the missing route.",
  },
];

const checklist = [
  "I can distinguish connected, static, and dynamically learned routes.",
  "I understand longest prefix match.",
  "I understand administrative distance at a practical level.",
  "I understand that routing-protocol metrics compare paths within the same protocol.",
  "I can recognize RIP, OSPF, and EIGRP route codes and basic behavior.",
  "I know that RIP uses hop count and treats 16 as unreachable.",
  "I understand OSPF areas, neighbors, cost, and router IDs at a basic troubleshooting level.",
  "I understand EIGRP neighbor and AS-number awareness.",
  "I know why passive interfaces are useful.",
  "I inspect show ip protocols before changing routing processes.",
  "I avoid using static routes or redistribution to hide dynamic-routing failures.",
  "I verify convergence, route source, return path, and application traffic before saving.",
];

const reflection = [
  "Why does longest prefix match happen before administrative distance?",
  "What is the difference between administrative distance and a routing protocol metric?",
  "Why might a user LAN be advertised by OSPF while still being configured as passive?",
  "Why does RIP's hop-count limit matter?",
  "What should you check when two OSPF routers can ping each other but do not become neighbors?",
  "Why can adding a static route hide a dynamic-routing problem instead of solving it?",
];

export default function RoutingConceptsDynamicProtocolAwarenessPage() {
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
              href="/cyberpatriot/cisco-networking/router-interfaces-static-routing"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/access-control-lists"
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
                Cisco & Networking · Lesson 12
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Routing Concepts & Dynamic Protocol Awareness
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Cisco routers compare route sources, how RIP, OSPF,
                and EIGRP learn remote networks, and how to troubleshoot dynamic
                routing without replacing the design with random static routes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is protocol awareness, route-reading skill, and safe
                troubleshooting. You do not need to become an advanced routing
                engineer to recognize why a competition topology is not converging.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Route sources</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Dynamic protocols</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">9</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Understand why a route wins</span>
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
            Read the routing process before changing it
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
              Routing protocols learn paths; the routing table chooses what to use
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A router can know several possible paths, but only the best usable
              routes become active forwarding entries.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A missing dynamic route is evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Do not immediately replace it with a static route. The missing
              route may reveal an adjacency, area, AS, passive-interface, or
              advertisement problem that still needs to be fixed.
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
            Six ideas behind route learning and selection
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
            Route sources
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Recognize where a route came from
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Source</th>
                  <th className="px-4 py-3 font-black">Code</th>
                  <th className="px-4 py-3 font-black">Learned by</th>
                  <th className="px-4 py-3 font-black">Typical AD</th>
                  <th className="px-4 py-3 font-black">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {routeSources.map((item) => (
                  <tr
                    key={item.source}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-black text-white">
                      {item.source}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.code}
                    </td>
                    <td className="px-4 py-3">{item.learnedBy}</td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.typicalAD}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {item.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            These are common Cisco administrative-distance defaults. Exact
            behavior can be changed by configuration, so always inspect the
            actual device instead of relying only on memorized values.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Forwarding decision
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How a router chooses one path
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {forwardingDecision.map((item) => (
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
            Administrative distance
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Compare route sources only after prefix length matches
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {administrativeDistanceExamples.map((item) => (
              <div
                key={item.comparison}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.comparison}
                </h3>
                <p className="mt-3 text-sm font-black text-emerald-200">
                  Preferred: {item.winner}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Metrics
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Each routing protocol compares paths differently
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {metricOverview.map((item) => (
              <div
                key={item.protocol}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.protocol}</h3>
                <p className="mt-4 text-sm font-bold text-cyan-300">
                  Metric: {item.metric}
                </p>
                <p className="mt-3 text-sm text-emerald-200">
                  Preferred: {item.best}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.importantLimit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Protocol comparison
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            RIP, OSPF, and EIGRP at competition depth
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {protocolComparison.map((item) => (
              <div
                key={item.protocol}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-2xl font-black text-white">{item.protocol}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  {item.family}
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Update style
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.updateStyle}
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
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.limitation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Competition focus
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.competitionFocus}
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
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the protocol state before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ciscoInspection.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Feature support varies
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Packet Tracer devices do not always support the complete IOS
              routing feature set. Use the nearest available verification
              command and focus on neighbor state, route source, and end-to-end behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            RIP awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Simple distance-vector routing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ripConcepts.map((item) => (
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
            RIP configuration pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect first, advertise only required networks
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {ripExample.map((item) => (
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
                <div className="mt-4 grid gap-2">
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
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            OSPF awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Link-state routing and neighbor adjacencies
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ospfConcepts.map((item) => (
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
            OSPF configuration pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use areas and wildcard masks deliberately
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {ospfExample.map((item) => (
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
                <div className="mt-4 grid gap-2">
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
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Wildcard masks
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Invert the subnet mask for common OSPF network statements
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Subnet</th>
                  <th className="px-4 py-3 font-black">Subnet mask</th>
                  <th className="px-4 py-3 font-black">Wildcard mask</th>
                </tr>
              </thead>
              <tbody>
                {wildcardExamples.map((item) => (
                  <tr
                    key={item.subnet}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-mono text-white">
                      {item.subnet}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.mask}
                    </td>
                    <td className="px-4 py-3 font-mono text-emerald-200">
                      {item.wildcard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            Wildcard masks are also used in ACLs, but there they match addresses
            rather than enabling a routing protocol on interfaces. Context matters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            EIGRP awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Neighbor-driven Cisco routing behavior
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eigrpConcepts.map((item) => (
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
            EIGRP configuration pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Verify AS number and network participation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {eigrpExample.map((item) => (
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
                <div className="mt-4 grid gap-2">
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
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Neighbor requirements
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Dynamic routing starts with compatible peers
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {neighborRequirements.map((item) => (
              <div
                key={item.protocol}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.protocol}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.requirements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Passive-interface reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Advertise networks without forming unnecessary neighbors
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {passiveInterfaceReasoning.map((item) => (
              <div
                key={item.scenario}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.scenario}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  Likely: {item.likelyChoice}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Route preference
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prefix length before source preference
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {routePreferenceCases.map((item) => (
              <div
                key={item.routes}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-black text-white">{item.routes}</p>
                <p className="mt-3 text-sm font-black text-emerald-200">
                  {item.result}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
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
            Match the symptom to the routing layer
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {protocolTroubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.checks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Redistribution awareness
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Powerful, but not a quick fix
            </h2>

            <div className="mt-6 grid gap-3">
              {redistributionAwareness.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Default-route propagation
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One default can influence many routers
            </h2>

            <div className="mt-6 grid gap-3">
              {defaultRouteAdvertisement.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand why a route is missing or preferred
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
            Routing changes that can hide the actual failure
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
            Choose the safest next routing check
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
            Prove the routing domain is stable before saving
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
            Build and troubleshoot a fictional OSPF routing domain
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
                Dynamic routing is not magic. Routers still depend on working
                interfaces, compatible neighbors, correct network participation,
                route preference, return paths, and policy. Inspect those pieces
                before adding replacement routes.
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
              href="/cyberpatriot/cisco-networking/router-interfaces-static-routing"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/access-control-lists"
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
