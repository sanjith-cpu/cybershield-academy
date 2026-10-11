import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how router interfaces connect different IPv4 networks.",
  "Distinguish directly connected, local, static, and default routes in a Cisco routing table.",
  "Configure and verify a basic static route using an inspection-first workflow.",
  "Choose between next-hop and exit-interface route forms based on the topology.",
  "Recognize missing, incorrect, overlapping, or overly broad static routes.",
  "Verify both forward and return routing before saving changes.",
];

const coreConcepts = [
  {
    title: "Router interface",
    text:
      "A Layer 3 interface that belongs to an IP subnet and provides a path between that network and other networks.",
  },
  {
    title: "Directly connected route",
    text:
      "A route installed automatically when a router interface is operational and has an IP address and subnet mask.",
  },
  {
    title: "Static route",
    text:
      "A manually configured route that tells the router how to reach a destination network.",
  },
  {
    title: "Next hop",
    text:
      "The neighboring router address to which a packet should be forwarded on its way to the destination.",
  },
  {
    title: "Exit interface",
    text:
      "The local router interface through which the packet leaves toward the destination.",
  },
  {
    title: "Default route",
    text:
      "A catch-all route used when no more specific destination route exists. In IPv4 it is written as 0.0.0.0/0.",
  },
];

const routeTypes = [
  {
    code: "C",
    name: "Connected",
    meaning:
      "A network directly attached to an operational Layer 3 interface.",
  },
  {
    code: "L",
    name: "Local",
    meaning:
      "A host route to the router's own interface IP address on many IOS versions.",
  },
  {
    code: "S",
    name: "Static",
    meaning:
      "A manually configured route.",
  },
  {
    code: "S*",
    name: "Static default",
    meaning:
      "A static route to 0.0.0.0/0 that can act as the gateway of last resort.",
  },
  {
    code: "R",
    name: "RIP",
    meaning:
      "A route learned from RIP on devices where that protocol is configured.",
  },
  {
    code: "O",
    name: "OSPF",
    meaning:
      "A route learned through OSPF on devices where that protocol is configured.",
  },
];

const interfaceChecklist = [
  {
    area: "Address",
    check:
      "The interface uses the intended IPv4 address.",
  },
  {
    area: "Subnet mask",
    check:
      "The prefix matches the actual connected network.",
  },
  {
    area: "Administrative state",
    check:
      "The interface is not unintentionally shutdown.",
  },
  {
    area: "Line protocol",
    check:
      "The interface is operational at both physical and data-link layers.",
  },
  {
    area: "Connected route",
    check:
      "The expected subnet appears in the routing table as directly connected.",
  },
  {
    area: "Peer reachability",
    check:
      "The next-hop neighbor can be reached from the local interface.",
  },
];

const ciscoInspection = [
  {
    command: "show ip interface brief",
    purpose:
      "Review router interface IPv4 addresses and up/down state.",
  },
  {
    command: "show interfaces",
    purpose:
      "Inspect detailed physical and data-link status, errors, speed, and counters.",
  },
  {
    command: "show running-config | section interface",
    purpose:
      "Review configured interface addresses and shutdown state.",
  },
  {
    command: "show ip route connected",
    purpose:
      "Display directly connected networks.",
  },
  {
    command: "show ip route static",
    purpose:
      "Display static routes on supported IOS versions.",
  },
  {
    command: "show ip route",
    purpose:
      "Review the full IPv4 routing table and gateway of last resort.",
  },
  {
    command: "show arp",
    purpose:
      "Review IPv4-to-MAC mappings for directly connected neighbors.",
  },
  {
    command: "ping <next-hop>",
    purpose:
      "Test reachability to a neighboring router or gateway.",
  },
  {
    command: "traceroute <destination>",
    purpose:
      "Observe the hop-by-hop path toward a remote destination where supported.",
  },
];

const staticRouteForms = [
  {
    form: "Next-hop route",
    syntax: "ip route 192.168.30.0 255.255.255.0 10.0.0.2",
    use:
      "Common on multi-access networks where the next-hop router IP is known.",
    caution:
      "The next-hop address itself must be reachable.",
  },
  {
    form: "Exit-interface route",
    syntax: "ip route 192.168.30.0 255.255.255.0 GigabitEthernet0/1",
    use:
      "Can be appropriate on point-to-point style links where the exit interface clearly identifies the path.",
    caution:
      "On Ethernet multi-access links, using only the exit interface can lead to additional neighbor-resolution behavior.",
  },
  {
    form: "Fully specified route",
    syntax:
      "ip route 192.168.30.0 255.255.255.0 GigabitEthernet0/1 10.0.0.2",
    use:
      "Specifies both the outgoing interface and next-hop address.",
    caution:
      "Support and exact behavior depend on IOS platform and topology.",
  },
  {
    form: "Default route",
    syntax: "ip route 0.0.0.0 0.0.0.0 10.0.0.2",
    use:
      "For traffic to destinations that do not have a more specific route.",
    caution:
      "A default route should point toward a legitimate upstream path, not simply hide missing specific routes.",
  },
];

const staticRouteWorkflow = [
  {
    step: "01",
    title: "Identify the missing destination",
    text:
      "Use the topology and routing table to determine which remote subnet is not currently reachable.",
  },
  {
    step: "02",
    title: "Find the valid next hop",
    text:
      "Identify the directly connected neighboring router that actually leads toward that destination.",
  },
  {
    step: "03",
    title: "Verify the next hop is reachable",
    text:
      "If the router cannot reach the next hop locally, the static route will not solve the underlying problem.",
  },
  {
    step: "04",
    title: "Choose the narrowest correct destination",
    text:
      "Use the specific destination network and mask unless the design truly calls for a summary or default route.",
  },
  {
    step: "05",
    title: "Configure one route",
    text:
      "Add the route without changing unrelated routes.",
  },
  {
    step: "06",
    title: "Verify installation",
    text:
      "Check show ip route and confirm the route points toward the expected path.",
  },
  {
    step: "07",
    title: "Test end-to-end traffic",
    text:
      "Ping or otherwise test the required remote network and service.",
  },
  {
    step: "08",
    title: "Check the return path",
    text:
      "Make sure the remote side has a route back to the source network.",
  },
];

const connectedExample = [
  {
    router: "R1",
    interface: "G0/0",
    address: "192.168.10.1/24",
    connected: "192.168.10.0/24",
  },
  {
    router: "R1",
    interface: "G0/1",
    address: "10.0.0.1/30",
    connected: "10.0.0.0/30",
  },
  {
    router: "R2",
    interface: "G0/0",
    address: "192.168.20.1/24",
    connected: "192.168.20.0/24",
  },
  {
    router: "R2",
    interface: "G0/1",
    address: "10.0.0.2/30",
    connected: "10.0.0.0/30",
  },
];

const routeTableExamples = [
  {
    entry: "C 192.168.10.0/24 is directly connected, GigabitEthernet0/0",
    meaning:
      "R1 owns an operational interface in the 192.168.10.0/24 network.",
  },
  {
    entry: "L 192.168.10.1/32 is directly connected, GigabitEthernet0/0",
    meaning:
      "The router has a local host route for its own interface address.",
  },
  {
    entry: "S 192.168.20.0/24 [1/0] via 10.0.0.2",
    meaning:
      "R1 reaches the remote LAN by sending traffic to neighboring router 10.0.0.2.",
  },
  {
    entry: "S* 0.0.0.0/0 [1/0] via 10.0.0.2",
    meaning:
      "Traffic with no more specific route is sent to 10.0.0.2.",
  },
];

const routeSelectionRules = [
  {
    title: "Longest prefix match",
    text:
      "Routers prefer the most specific matching route. A /24 beats a /16 for a destination inside that /24.",
  },
  {
    title: "Administrative distance",
    text:
      "When multiple route sources describe the same prefix, administrative distance helps select the trusted source.",
  },
  {
    title: "Metric",
    text:
      "Routing protocols can use metrics to compare multiple paths learned by the same protocol.",
  },
  {
    title: "Connected routes are highly preferred",
    text:
      "A directly connected route normally has lower administrative distance than static or dynamically learned routes.",
  },
  {
    title: "Static routes default to AD 1",
    text:
      "A normal static route is commonly more preferred than routes learned by many dynamic routing protocols.",
  },
  {
    title: "Default route is least specific",
    text:
      "0.0.0.0/0 matches every IPv4 destination but loses to any more specific route.",
  },
];

const longestPrefixExamples = [
  {
    destination: "192.168.10.25",
    candidates: "192.168.0.0/16 and 192.168.10.0/24",
    winner: "192.168.10.0/24",
    reason:
      "The /24 is more specific because it matches more destination bits.",
  },
  {
    destination: "10.20.30.40",
    candidates: "10.0.0.0/8, 10.20.0.0/16, 0.0.0.0/0",
    winner: "10.20.0.0/16",
    reason:
      "The /16 is the most specific matching route.",
  },
  {
    destination: "203.0.113.10",
    candidates: "0.0.0.0/0 only",
    winner: "0.0.0.0/0",
    reason:
      "The default route is used because no more specific route exists.",
  },
];

const routeConfigExamples = [
  {
    goal: "R1 route to R2 LAN",
    commands: [
      "configure terminal",
      "ip route 192.168.20.0 255.255.255.0 10.0.0.2",
      "end",
    ],
    verify:
      "show ip route 192.168.20.0",
  },
  {
    goal: "R2 return route to R1 LAN",
    commands: [
      "configure terminal",
      "ip route 192.168.10.0 255.255.255.0 10.0.0.1",
      "end",
    ],
    verify:
      "show ip route 192.168.10.0",
  },
  {
    goal: "Default route toward an upstream router",
    commands: [
      "configure terminal",
      "ip route 0.0.0.0 0.0.0.0 10.0.0.2",
      "end",
    ],
    verify:
      "show ip route",
  },
];

const floatingStatic = [
  {
    title: "Higher administrative distance",
    text:
      "A floating static route uses an administrative distance higher than the preferred route so it remains backup-only.",
  },
  {
    title: "Example",
    text:
      "ip route 192.168.50.0 255.255.255.0 10.0.0.2 200 creates a static route with AD 200.",
  },
  {
    title: "Use carefully",
    text:
      "Backup routing should match the scenario. Do not add high-AD routes simply because they seem harmless.",
  },
  {
    title: "Verify failover logic",
    text:
      "If a backup route is required, confirm when it should become active and whether the alternate path truly works.",
  },
];

const defaultRouteReasoning = [
  {
    case: "Small branch router with one upstream path",
    interpretation:
      "A default route toward the upstream router may be appropriate.",
  },
  {
    case: "Router with multiple specific internal networks",
    interpretation:
      "Specific routes are still needed when traffic should not all follow the same upstream path.",
  },
  {
    case: "Missing route to one internal subnet",
    interpretation:
      "Do not add a default route just to hide a missing internal route unless the topology actually uses that default path.",
  },
  {
    case: "Default route exists but destination still fails",
    interpretation:
      "Check next-hop reachability, upstream routing, return path, ACLs, and destination state.",
  },
];

const staticRouteProblems = [
  {
    problem: "Wrong destination network",
    effect:
      "The route may never match the intended traffic.",
  },
  {
    problem: "Wrong subnet mask",
    effect:
      "The route can be too broad, too narrow, or overlap another route unexpectedly.",
  },
  {
    problem: "Wrong next hop",
    effect:
      "Traffic is forwarded toward a neighbor that cannot reach the destination.",
  },
  {
    problem: "Unreachable next hop",
    effect:
      "The static route may not install or traffic may fail because the local path to the neighbor is broken.",
  },
  {
    problem: "Missing return route",
    effect:
      "Forward traffic may reach the remote network, but replies never return to the source.",
  },
  {
    problem: "Overly broad summary",
    effect:
      "Traffic for unrelated networks can be attracted to the wrong path.",
  },
  {
    problem: "Default route used as a blanket fix",
    effect:
      "The router may forward traffic upstream instead of exposing the real missing-route problem.",
  },
  {
    problem: "Static route overrides dynamic path unexpectedly",
    effect:
      "A lower administrative distance can make the manual route preferred even when a dynamic route was intended.",
  },
];

const interfaceFailurePatterns = [
  {
    symptom: "Interface is administratively down",
    meaning:
      "The router is intentionally disabling the interface through configuration.",
    firstCheck:
      "Confirm whether the port is required before using no shutdown.",
  },
  {
    symptom: "Interface is down/down",
    meaning:
      "Physical link is not operational.",
    firstCheck:
      "Cable, peer device, port selection, power, speed/media compatibility.",
  },
  {
    symptom: "Interface is up/down",
    meaning:
      "Physical carrier exists but the line protocol is not operational.",
    firstCheck:
      "Data-link encapsulation, peer configuration, interface type, and link-specific settings.",
  },
  {
    symptom: "Interface is up/up but no remote networks work",
    meaning:
      "The local link is operational, so routing, addressing, policy, or remote state become more likely.",
    firstCheck:
      "Connected route, static routes, next-hop reachability, and return path.",
  },
];

const returnPathChecks = [
  {
    question: "Does the destination network know the source subnet?",
    why:
      "Replies need a valid path back.",
  },
  {
    question: "Does the remote router have a connected or static route back?",
    why:
      "One-way routing is not enough for normal two-way communication.",
  },
  {
    question: "Is the remote host using the correct default gateway?",
    why:
      "A correct router route does not help if the endpoint sends replies somewhere else.",
  },
  {
    question: "Do ACLs allow response traffic?",
    why:
      "Routing can be correct while policy still blocks the return flow.",
  },
  {
    question: "Does NAT or another translation feature alter the expected path?",
    why:
      "Address translation can change how return traffic must be routed.",
  },
];

const troubleshootingFlow = [
  {
    step: "01",
    check:
      "Can the source host reach its own default gateway?",
    ifNo:
      "Stay local: endpoint IP, mask, VLAN, interface, gateway state.",
    ifYes:
      "Continue toward the routed path.",
  },
  {
    step: "02",
    check:
      "Can the local router reach the next-hop router?",
    ifNo:
      "Fix the directly connected link before adding routes.",
    ifYes:
      "Continue to route-table analysis.",
  },
  {
    step: "03",
    check:
      "Does the router have a matching destination route?",
    ifNo:
      "Determine the correct next hop or dynamic-routing dependency.",
    ifYes:
      "Verify the chosen path is correct.",
  },
  {
    step: "04",
    check:
      "Can the router ping the remote gateway or destination interface?",
    ifNo:
      "Inspect downstream routing, ACLs, and remote interfaces.",
    ifYes:
      "Continue to endpoint and service checks.",
  },
  {
    step: "05",
    check:
      "Does the destination have a return path?",
    ifNo:
      "Add or correct the remote route according to the design.",
    ifYes:
      "Continue to policy and application checks.",
  },
  {
    step: "06",
    check:
      "Does the required application work?",
    ifNo:
      "Investigate ACLs, transport ports, service state, DNS, or endpoint firewall.",
    ifYes:
      "The path is functioning end to end.",
  },
];

const reasoningCases = [
  {
    finding:
      "R1 cannot reach 192.168.20.0/24, and no route exists",
    weak:
      "Add a default route in any direction.",
    better:
      "Identify the actual neighboring router that leads to 192.168.20.0/24 and configure the narrowest correct route.",
  },
  {
    finding:
      "A static route points to 10.0.0.2, but R1 cannot ping 10.0.0.2",
    weak:
      "Add more static routes.",
    better:
      "Fix the directly connected R1-R2 link first. The next hop must be locally reachable.",
  },
  {
    finding:
      "R1 can ping R2's LAN interface but Host-A still cannot reach Host-B",
    weak:
      "The route is proven perfect.",
    better:
      "Continue with host gateways, return path, ACLs, and endpoint state.",
  },
  {
    finding:
      "A default route exists and points upstream",
    weak:
      "Every unreachable network should use it.",
    better:
      "A more specific route may still be required for internal destinations depending on the topology.",
  },
  {
    finding:
      "Two routes match a destination: /16 and /24",
    weak:
      "Choose whichever route was configured first.",
    better:
      "The router uses the longest prefix match, so the /24 is preferred for destinations inside that subnet.",
  },
  {
    finding:
      "A new static route works but dynamic routing already had a valid route",
    weak:
      "Keep both because more routes are safer.",
    better:
      "Check administrative distance and intended design. The static route may unexpectedly override the dynamic path.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Adding routes before checking interface state",
    risk:
      "A down or misaddressed connected link will still prevent traffic from reaching the next hop.",
  },
  {
    shortcut:
      "Using 0.0.0.0/0 as a universal fix",
    risk:
      "Can hide missing specific routes and send internal traffic toward the wrong upstream path.",
  },
  {
    shortcut:
      "Creating overly broad static routes",
    risk:
      "Can attract traffic for unrelated networks and make troubleshooting harder.",
  },
  {
    shortcut:
      "Ignoring return routing",
    risk:
      "Creates one-way connectivity that looks inconsistent or intermittent.",
  },
  {
    shortcut:
      "Changing multiple routers simultaneously",
    risk:
      "Removes the ability to identify which change actually fixed or broke the path.",
  },
  {
    shortcut:
      "Saving before end-to-end verification",
    risk:
      "A wrong route can become persistent and survive reboot.",
  },
];

const verificationChecklist = [
  {
    area: "Interface state",
    check:
      "Required Layer 3 interfaces are up/up and use the intended IP addresses.",
  },
  {
    area: "Connected routes",
    check:
      "Directly attached networks appear correctly in the routing table.",
  },
  {
    area: "Next-hop reachability",
    check:
      "The router can reach the neighbor used by the static route.",
  },
  {
    area: "Destination route",
    check:
      "The correct prefix appears in show ip route and points toward the intended path.",
  },
  {
    area: "Longest-prefix behavior",
    check:
      "No broader route is unexpectedly hiding or conflicting with a more specific path.",
  },
  {
    area: "Return path",
    check:
      "Remote routers and endpoints know how to reach the source network.",
  },
  {
    area: "Policy",
    check:
      "ACLs and other security controls still allow required traffic.",
  },
  {
    area: "Application",
    check:
      "The real required service works after network reachability is established.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional two-router topology: R1 LAN 192.168.10.0/24, R2 LAN 192.168.20.0/24, and transit network 10.0.0.0/30.",
  },
  {
    step: "02",
    task:
      "Configure only the directly connected router interfaces and verify all interfaces are up/up.",
  },
  {
    step: "03",
    task:
      "Confirm each router sees its local LAN and the 10.0.0.0/30 transit network as connected routes.",
  },
  {
    step: "04",
    task:
      "Verify R1 can ping 10.0.0.2 and R2 can ping 10.0.0.1 before configuring any static routes.",
  },
  {
    step: "05",
    task:
      "Add one static route on R1 toward 192.168.20.0/24 and one return route on R2 toward 192.168.10.0/24.",
  },
  {
    step: "06",
    task:
      "Verify both static routes appear and test Host-A to Host-B connectivity.",
  },
  {
    step: "07",
    task:
      "Introduce one fault such as the wrong next hop or wrong subnet mask on one static route.",
  },
  {
    step: "08",
    task:
      "Use show ip route, ping, and traceroute to identify and correct only the confirmed routing error.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "R1 has no route to 192.168.30.0/24, but it can reach neighbor 10.0.0.2.",
    response:
      "Determine whether 10.0.0.2 actually leads to 192.168.30.0/24. If yes, add the specific static route and verify return routing.",
  },
  {
    prompt:
      "A static route is configured but does not appear in show ip route.",
    response:
      "Check whether the next hop is reachable and whether the syntax and destination mask are valid for the platform.",
  },
  {
    prompt:
      "The router has a default route, but one internal subnet still fails.",
    response:
      "Do not assume the default is correct for that subnet. Trace the intended internal path and compare specific routes.",
  },
  {
    prompt:
      "R1 can ping R2, but Host-A cannot ping Host-B.",
    response:
      "Check Host-A and Host-B gateways, both routers' LAN routes, return path, and any ACLs.",
  },
  {
    prompt:
      "A /16 and /24 both match the destination.",
    response:
      "The /24 wins because longest prefix match prefers the more specific route.",
  },
  {
    prompt:
      "A teammate wants to add static routes on every router before testing.",
    response:
      "Change one path at a time. Verify connected links, next hops, route installation, and return traffic before expanding changes.",
  },
];

const checklist = [
  "I can explain the role of a router interface.",
  "I understand the difference between connected, local, static, and default routes.",
  "I can identify a next hop and an exit interface.",
  "I know that a static route depends on a reachable local path to the next hop.",
  "I can configure a basic static route and verify it in show ip route.",
  "I understand longest prefix match.",
  "I know that a default route is less specific than every normal subnet route.",
  "I can explain why return routing is required.",
  "I do not use a default route to hide every missing internal route.",
  "I inspect interface state before adding routes.",
  "I verify policy and application behavior after Layer 3 reachability works.",
  "I test the entire path before saving routing changes.",
];

const reflection = [
  "Why does a router automatically install directly connected routes?",
  "What is the practical difference between a next hop and an exit interface?",
  "Why can a static route fail even if its destination network and mask are correct?",
  "Why does longest prefix match matter when multiple routes fit one destination?",
  "Why is a return route required for normal two-way communication?",
  "What should you check before adding a default route?",
];

export default function RouterInterfacesStaticRoutingPage() {
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
              href="/cyberpatriot/cisco-networking/switch-port-security"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/routing-concepts-dynamic-protocol-awareness"
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
                Cisco & Networking · Lesson 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Router Interfaces & Static Routing
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how router interfaces create connected networks, how
                static routes direct traffic toward remote networks, and how to
                verify both the forward path and the return path before saving.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Routing problems are often caused by one incorrect interface,
                next hop, prefix, or return route. The goal is to identify the
                missing path precisely instead of adding broad routes at random.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Route types</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Static route forms</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Workflow stages</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Precise Layer 3 paths</span>
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
            Build only the routes the topology actually needs
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
              Interfaces create local knowledge; routes create remote knowledge
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A router automatically knows operationally connected subnets. It
              needs static or dynamically learned routes for networks that are
              not directly attached.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not add routes before checking the next hop
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If the directly connected link to the neighboring router is broken,
              additional static routes will not repair the path.
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
            Six ideas behind basic routing
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
            Route codes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the routing table before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {routeTypes.map((item) => (
              <div
                key={item.code}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <code className="text-2xl font-black text-cyan-200">
                    {item.code}
                  </code>
                  <span className="text-sm font-bold text-white">{item.name}</span>
                </div>
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
            Interface baseline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm the local Layer 3 foundation first
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {interfaceChecklist.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Nine commands for routing evidence
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Static-route forms
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Choose a route form that matches the link
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {staticRouteForms.map((item) => (
              <div
                key={item.form}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.form}</h3>
                <code className="mt-4 block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                  {item.syntax}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.caution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Safe workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight stages for adding one static route
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {staticRouteWorkflow.map((item) => (
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
            Fictional topology
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Two routers and two LANs
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Router</th>
                  <th className="px-4 py-3 font-black">Interface</th>
                  <th className="px-4 py-3 font-black">Address</th>
                  <th className="px-4 py-3 font-black">Connected network</th>
                </tr>
              </thead>
              <tbody>
                {connectedExample.map((item) => (
                  <tr
                    key={`${item.router}-${item.interface}`}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-black text-white">
                      {item.router}
                    </td>
                    <td className="px-4 py-3">{item.interface}</td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.address}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.connected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            R1 knows 192.168.10.0/24 and 10.0.0.0/30 automatically. R2 knows
            192.168.20.0/24 and 10.0.0.0/30 automatically. Each router still
            needs a route to the remote LAN.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Routing-table examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Translate entries into forwarding decisions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {routeTableExamples.map((item) => (
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
            Route selection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Specificity, source preference, and metrics
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {routeSelectionRules.map((item) => (
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
            Longest prefix match
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            The most specific matching route wins
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {longestPrefixExamples.map((item) => (
              <div
                key={item.destination}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  Destination
                </p>
                <code className="mt-2 block text-base text-cyan-200">
                  {item.destination}
                </code>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Candidates: {item.candidates}
                </p>
                <p className="mt-4 text-sm font-black text-emerald-200">
                  Winner: {item.winner}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
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
            Controlled configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Add only the route the path requires
          </h2>

          <div className="mt-8 grid gap-5">
            {routeConfigExamples.map((item) => (
              <div
                key={item.goal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.goal}</h3>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Commands
                    </p>
                    <div className="mt-3 grid gap-2">
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

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Verify
                    </p>
                    <code className="mt-2 block overflow-x-auto text-sm text-slate-200">
                      {item.verify}
                    </code>
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
            Floating static routes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Static routes can also serve as backups
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {floatingStatic.map((item) => (
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
            Default-route reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use 0.0.0.0/0 intentionally
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {defaultRouteReasoning.map((item) => (
              <div
                key={item.case}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.case}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.interpretation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Common route problems
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Small route errors can redirect large amounts of traffic
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {staticRouteProblems.map((item) => (
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
            Interface failure patterns
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read status before changing routes
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {interfaceFailurePatterns.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.firstCheck}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Return path
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Forward traffic is only half of the conversation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {returnPathChecks.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
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
            Troubleshooting flow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Narrow the failure one hop at a time
          </h2>

          <div className="mt-8 grid gap-4">
            {troubleshootingFlow.map((item) => (
              <div
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.25fr_1.1fr_1.2fr_1.2fr]"
              >
                <div className="text-lg font-black text-cyan-300">{item.step}</div>
                <h3 className="font-black text-white">{item.check}</h3>
                <p className="text-sm leading-6 text-red-200">
                  If no: {item.ifNo}
                </p>
                <p className="text-sm leading-6 text-emerald-200">
                  If yes: {item.ifYes}
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
            Add routes only when the evidence supports them
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
            Routing changes that can make the topology harder to trust
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
            Choose the safest next routing action
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
            Prove the complete path before saving
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
            Build and troubleshoot a fictional two-router static path
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
                Start with operational interfaces and connected routes, then add
                only the specific remote path the topology requires. Verify the
                next hop, destination route, return path, policy, and application
                before saving.
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
              href="/cyberpatriot/cisco-networking/switch-port-security"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/routing-concepts-dynamic-protocol-awareness"
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
