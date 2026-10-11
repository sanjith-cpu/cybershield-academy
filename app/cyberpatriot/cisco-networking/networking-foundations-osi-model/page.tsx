import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why networking models are useful for troubleshooting instead of treating them as memorization charts.",
  "Distinguish hosts, switches, routers, frames, packets, segments, ports, protocols, and services.",
  "Map practical network activity to the OSI and TCP/IP models.",
  "Explain how MAC addresses, IP addresses, and transport-layer ports serve different purposes.",
  "Trace a client-to-server exchange across local switching, routing, transport, and application layers.",
  "Use layered reasoning to narrow a network problem before changing configuration.",
];

const coreTerms = [
  {
    term: "Host",
    meaning:
      "An endpoint such as a workstation, server, printer, phone, or virtual machine that sends or receives network traffic.",
  },
  {
    term: "Switch",
    meaning:
      "A Layer 2 device that forwards Ethernet frames inside a local network primarily by using MAC-address information.",
  },
  {
    term: "Router",
    meaning:
      "A Layer 3 device that forwards IP packets between different networks by using routing information.",
  },
  {
    term: "Frame",
    meaning:
      "The Layer 2 data unit used on technologies such as Ethernet. Frames contain source and destination MAC addresses.",
  },
  {
    term: "Packet",
    meaning:
      "The Layer 3 data unit that carries source and destination IP addresses across routed networks.",
  },
  {
    term: "Segment",
    meaning:
      "A transport-layer unit commonly associated with TCP. UDP uses datagrams, but both rely on transport-layer port numbers.",
  },
  {
    term: "Protocol",
    meaning:
      "A defined set of rules for communication, such as Ethernet, IPv4, TCP, UDP, DNS, HTTP, or SSH.",
  },
  {
    term: "Port number",
    meaning:
      "A transport-layer identifier used to distinguish applications or services on a host, such as TCP 22 for SSH or TCP 443 for HTTPS.",
  },
];

const osiLayers = [
  {
    layer: "7",
    name: "Application",
    question:
      "What service or application is the user trying to use?",
    examples:
      "HTTP/HTTPS, DNS, SSH, DHCP application behavior",
    evidence:
      "Application errors, service configuration, DNS responses, server logs",
  },
  {
    layer: "6",
    name: "Presentation",
    question:
      "How is the data represented, encoded, compressed, or encrypted?",
    examples:
      "TLS encryption, data formats, character encoding",
    evidence:
      "Certificate/TLS errors, format mismatches, application negotiation",
  },
  {
    layer: "5",
    name: "Session",
    question:
      "How is the communication session established, maintained, or resumed?",
    examples:
      "Session establishment, authentication context, application conversations",
    evidence:
      "Session drops, repeated reconnects, authentication/session logs",
  },
  {
    layer: "4",
    name: "Transport",
    question:
      "Which host process should receive the traffic, and how is delivery handled?",
    examples:
      "TCP, UDP, source ports, destination ports",
    evidence:
      "Port availability, TCP handshake behavior, service listeners",
  },
  {
    layer: "3",
    name: "Network",
    question:
      "How does the packet reach a different IP network?",
    examples:
      "IPv4, IPv6, routers, routing tables, gateways",
    evidence:
      "IP addressing, routes, traceroute, router interfaces",
  },
  {
    layer: "2",
    name: "Data Link",
    question:
      "How is traffic delivered across the local link?",
    examples:
      "Ethernet, MAC addresses, VLANs, switches, trunks",
    evidence:
      "MAC tables, VLAN membership, switchport mode, frame forwarding",
  },
  {
    layer: "1",
    name: "Physical",
    question:
      "Can bits physically move across the connection?",
    examples:
      "Cabling, radio, connectors, speed, signal, interface link state",
    evidence:
      "Link lights, interface status, cable type, physical connection",
  },
];

const tcpIpLayers = [
  {
    layer: "Application",
    osi:
      "Roughly OSI Layers 5-7",
    focus:
      "User-facing and infrastructure protocols such as HTTPS, SSH, DNS, and DHCP.",
  },
  {
    layer: "Transport",
    osi:
      "OSI Layer 4",
    focus:
      "TCP and UDP, ports, reliability, sequencing, and multiplexing between applications.",
  },
  {
    layer: "Internet",
    osi:
      "OSI Layer 3",
    focus:
      "IP addressing and routing between networks.",
  },
  {
    layer: "Network Access",
    osi:
      "Roughly OSI Layers 1-2",
    focus:
      "Local-link delivery such as Ethernet, MAC addressing, switching, and the physical medium.",
  },
];

const addressRoles = [
  {
    identifier: "MAC address",
    layer:
      "Layer 2",
    purpose:
      "Identifies a network interface for local Ethernet delivery.",
    scope:
      "Primarily meaningful on the local Layer 2 segment.",
    example:
      "00:1A:2B:3C:4D:5E",
  },
  {
    identifier: "IP address",
    layer:
      "Layer 3",
    purpose:
      "Identifies a host or interface logically so packets can be routed between networks.",
    scope:
      "Used across routed network boundaries.",
    example:
      "192.168.10.25",
  },
  {
    identifier: "Port number",
    layer:
      "Layer 4",
    purpose:
      "Identifies the application or service endpoint on a host.",
    scope:
      "Used by TCP or UDP within an IP communication flow.",
    example:
      "TCP 443",
  },
];

const encapsulationSteps = [
  {
    step: "01",
    title: "Application creates data",
    text:
      "A user or service produces application data, such as an HTTPS request.",
  },
  {
    step: "02",
    title: "Transport adds ports",
    text:
      "TCP or UDP identifies the source application and destination service using port numbers.",
  },
  {
    step: "03",
    title: "Network adds IP addressing",
    text:
      "The IP header identifies the source and destination IP networks or hosts.",
  },
  {
    step: "04",
    title: "Data Link adds local delivery information",
    text:
      "Ethernet adds source and destination MAC addresses for the next local link.",
  },
  {
    step: "05",
    title: "Physical layer transmits bits",
    text:
      "The frame is represented as signals across the physical or wireless medium.",
  },
];

const deencapsulationSteps = [
  {
    step: "01",
    title: "Physical signal is received",
    text:
      "The destination interface receives the transmitted bits.",
  },
  {
    step: "02",
    title: "Frame is processed",
    text:
      "Layer 2 examines the frame and its local delivery information.",
  },
  {
    step: "03",
    title: "IP packet is processed",
    text:
      "Layer 3 evaluates the destination IP and routing context.",
  },
  {
    step: "04",
    title: "Transport identifies the service",
    text:
      "TCP or UDP uses the destination port to deliver data to the intended application.",
  },
  {
    step: "05",
    title: "Application handles the data",
    text:
      "The server application processes the request and may generate a response.",
  },
];

const deviceRoles = [
  {
    device: "Ethernet switch",
    primaryLayer:
      "Layer 2",
    decisions:
      "MAC learning, forwarding, filtering, flooding, VLAN membership, trunking",
    reminder:
      "Multilayer switches can also perform Layer 3 functions, but basic switch reasoning begins at Layer 2.",
  },
  {
    device: "Router",
    primaryLayer:
      "Layer 3",
    decisions:
      "IP forwarding, route lookup, next-hop selection, inter-network connectivity",
    reminder:
      "Routers may also enforce ACLs, NAT, VPN, DHCP, and management services.",
  },
  {
    device: "Host",
    primaryLayer:
      "All relevant layers",
    decisions:
      "Application, transport session, IP addressing, default gateway, local frame delivery",
    reminder:
      "A host problem can look like a network problem, so endpoint configuration must be checked too.",
  },
  {
    device: "Firewall",
    primaryLayer:
      "Often Layers 3-7 depending on platform",
    decisions:
      "Traffic policy based on addresses, protocols, ports, state, or application information",
    reminder:
      "In this pathway, Cisco ACLs provide an important policy example even without a dedicated firewall appliance.",
  },
];

const tcpUdpComparison = [
  {
    feature: "Connection behavior",
    tcp:
      "Connection-oriented. Establishes a session before normal data transfer.",
    udp:
      "Connectionless. Sends datagrams without a TCP-style connection setup.",
  },
  {
    feature: "Reliability",
    tcp:
      "Supports acknowledgments, retransmission, sequencing, and ordered delivery.",
    udp:
      "Does not provide TCP's built-in delivery confirmation or retransmission.",
  },
  {
    feature: "Overhead",
    tcp:
      "Higher due to connection state and reliability mechanisms.",
    udp:
      "Lower, making it useful where speed or simplicity matters.",
  },
  {
    feature: "Typical examples",
    tcp:
      "HTTPS, SSH, many web and administrative applications.",
    udp:
      "DNS queries, DHCP, voice/video transport, and other latency-sensitive uses.",
  },
  {
    feature: "Troubleshooting clue",
    tcp:
      "A handshake failure can help distinguish reachability from service-listener or policy problems.",
    udp:
      "Lack of a connection handshake means troubleshooting often depends more on application behavior and packet evidence.",
  },
];

const commonProtocols = [
  {
    protocol: "HTTPS",
    transport:
      "TCP",
    commonPort:
      "443",
    purpose:
      "Encrypted web application traffic.",
  },
  {
    protocol: "SSH",
    transport:
      "TCP",
    commonPort:
      "22",
    purpose:
      "Secure remote command-line administration.",
  },
  {
    protocol: "DNS",
    transport:
      "UDP and TCP",
    commonPort:
      "53",
    purpose:
      "Name resolution. UDP is common for queries; TCP is also used in valid DNS operations.",
  },
  {
    protocol: "DHCP",
    transport:
      "UDP",
    commonPort:
      "67/68",
    purpose:
      "Dynamic IPv4 address configuration between servers and clients.",
  },
  {
    protocol: "HTTP",
    transport:
      "TCP",
    commonPort:
      "80",
    purpose:
      "Unencrypted web traffic.",
  },
  {
    protocol: "ICMP",
    transport:
      "Not TCP/UDP",
    commonPort:
      "No transport port",
    purpose:
      "Network control and diagnostic messages, including many ping operations.",
  },
];

const sameNetworkReasoning = [
  {
    step: "01",
    title: "Source checks the destination IP",
    text:
      "The host compares the destination address with its own address and subnet mask.",
  },
  {
    step: "02",
    title: "Source decides the destination is local",
    text:
      "Because the destination is in the same IP subnet, the source does not send the packet to the default gateway.",
  },
  {
    step: "03",
    title: "Source learns the destination MAC",
    text:
      "The host uses local neighbor-resolution behavior such as ARP for IPv4 to learn the destination's Layer 2 address.",
  },
  {
    step: "04",
    title: "Switch forwards the frame",
    text:
      "The switch uses its MAC-address table to deliver the Ethernet frame toward the destination port.",
  },
  {
    step: "05",
    title: "Destination processes the packet",
    text:
      "The destination removes Layer 2 information, processes the IP packet, and passes the transport data to the correct service.",
  },
];

const routedReasoning = [
  {
    step: "01",
    title: "Source checks the destination network",
    text:
      "The host determines that the destination IP is outside the local subnet.",
  },
  {
    step: "02",
    title: "Source chooses the default gateway",
    text:
      "The IP packet still targets the remote destination IP, but the local Ethernet frame is addressed to the gateway's MAC address.",
  },
  {
    step: "03",
    title: "Switch forwards to the router",
    text:
      "The local switch forwards the gateway-bound frame toward the router interface.",
  },
  {
    step: "04",
    title: "Router performs a route lookup",
    text:
      "The router removes the incoming Layer 2 frame, examines the destination IP, and chooses the next-hop or outgoing interface.",
  },
  {
    step: "05",
    title: "Router builds a new Layer 2 frame",
    text:
      "The IP packet continues toward the destination, but each routed link uses new local Layer 2 addressing.",
  },
  {
    step: "06",
    title: "Process repeats until destination network",
    text:
      "Each router forwards based on Layer 3 information until the final local segment delivers the packet to the destination host.",
  },
];

const layeredTroubleshooting = [
  {
    symptom: "Interface shows down/down",
    beginAt:
      "Physical / Layer 1",
    questions:
      "Is the cable connected? Is the correct interface used? Is the remote side active? Is the device powered?",
  },
  {
    symptom: "Interface is up/up but same-VLAN hosts cannot communicate",
    beginAt:
      "Layer 2",
    questions:
      "Are ports in the correct VLAN? Is the MAC address learned? Is port security involved?",
  },
  {
    symptom: "Local subnet works but remote subnet fails",
    beginAt:
      "Layer 3",
    questions:
      "Are the gateway, router interfaces, and routes correct?",
  },
  {
    symptom: "Ping works but HTTPS fails",
    beginAt:
      "Layers 4-7",
    questions:
      "Is TCP 443 reachable? Is the service running? Is an ACL blocking the port? Is TLS/application behavior failing?",
  },
  {
    symptom: "IP connectivity works but hostname access fails",
    beginAt:
      "Application / infrastructure service",
    questions:
      "Is DNS configured? Can the client reach the resolver? Does the name resolve correctly?",
  },
  {
    symptom: "Only one subnet cannot reach a server",
    beginAt:
      "Layer 3 / Policy",
    questions:
      "Is routing present for that subnet? Does an ACL or VLAN path affect only that source?",
  },
];

const packetTracerUse = [
  {
    tool: "Realtime mode",
    use:
      "Observe the network in its normal operating state and test connectivity interactively.",
  },
  {
    tool: "Simulation mode",
    use:
      "Step through protocol events and inspect how traffic moves across devices.",
  },
  {
    tool: "Simple PDU",
    use:
      "Quickly generate test traffic between devices in a practice topology.",
  },
  {
    tool: "Device CLI",
    use:
      "Inspect and configure supported Cisco IOS behavior from within the simulation.",
  },
  {
    tool: "Desktop tools",
    use:
      "Use endpoint utilities such as IP Configuration, Command Prompt, browser, or terminal depending on the simulated host.",
  },
  {
    tool: "Event list",
    use:
      "Inspect protocol progression in simulation mode and identify where a packet stops.",
  },
];

const reasoningCases = [
  {
    finding: "Two hosts are connected to the same switch but cannot ping",
    weak:
      "The router must be broken.",
    better:
      "First determine whether they are in the same subnet and VLAN. If they are local peers, routing may not be involved at all.",
  },
  {
    finding: "A client can ping the server but cannot open HTTPS",
    weak:
      "The network is fully working because ping succeeds.",
    better:
      "Ping proves some Layer 3 reachability, not that TCP 443, ACL policy, TLS, or the HTTPS service is functioning.",
  },
  {
    finding: "A router interface has the correct IP address",
    weak:
      "The Layer 3 path must be correct.",
    better:
      "Also check interface state, subnet mask, route table, next hop, ACLs, and the return path.",
  },
  {
    finding: "A switch has learned the server MAC address",
    weak:
      "The server application must be working.",
    better:
      "MAC learning confirms local Layer 2 activity, not transport or application health.",
  },
  {
    finding: "DNS fails",
    weak:
      "Replace the router configuration.",
    better:
      "First confirm basic IP reachability, resolver addressing, DNS service availability, and whether direct IP access works.",
  },
  {
    finding: "Traceroute stops at one router",
    weak:
      "That router is definitely broken.",
    better:
      "The device may not respond to the diagnostic traffic even while forwarding other packets. Correlate with routes, ACLs, interfaces, and destination behavior.",
  },
];

const highRiskMistakes = [
  {
    mistake: "Treating the OSI model as a rigid device-label chart",
    risk:
      "Real devices can operate across multiple layers. The model is most useful for reasoning about functions and evidence.",
  },
  {
    mistake: "Assuming a successful ping proves an application works",
    risk:
      "ICMP reachability does not verify TCP/UDP ports, service state, authentication, or application behavior.",
  },
  {
    mistake: "Confusing MAC addresses with IP addresses",
    risk:
      "Leads to incorrect reasoning about local switching versus routed delivery.",
  },
  {
    mistake: "Confusing port numbers with switch ports",
    risk:
      "Transport-layer ports identify services; physical switch ports identify interfaces on a network device.",
  },
  {
    mistake: "Troubleshooting every problem from Layer 1 upward mechanically",
    risk:
      "A known symptom can justify starting at a more relevant layer. The goal is structured reasoning, not ritual.",
  },
  {
    mistake: "Changing multiple layers before retesting",
    risk:
      "Makes root-cause analysis difficult and can create additional failures.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Use a fictional topology with one client, one access switch, one router, and one HTTPS server on a different subnet.",
  },
  {
    step: "02",
    task:
      "Label the client's MAC address, IP address, default gateway, temporary source TCP port, and destination TCP port 443.",
  },
  {
    step: "03",
    task:
      "Describe the first Ethernet frame leaving the client: destination IP remains the server, while the destination MAC is the local default gateway.",
  },
  {
    step: "04",
    task:
      "Trace the packet through the switch and router and explain which header information each device primarily uses to make its forwarding decision.",
  },
  {
    step: "05",
    task:
      "Use Packet Tracer simulation mode to observe a practice packet and identify Layer 2, Layer 3, and transport information.",
  },
  {
    step: "06",
    task:
      "Introduce a fictional failure such as the wrong gateway, wrong VLAN, missing route, ACL block, or stopped HTTPS service.",
  },
  {
    step: "07",
    task:
      "Use the layered troubleshooting table to identify the most likely layer and collect evidence before changing anything.",
  },
  {
    step: "08",
    task:
      "Apply one controlled fix and verify both network reachability and the actual HTTPS service.",
  },
];

const checklist = [
  "I can explain the practical purpose of the OSI model.",
  "I can distinguish a host, switch, router, frame, packet, protocol, and port number.",
  "I understand the difference between MAC addressing, IP addressing, and transport-layer ports.",
  "I can map common network functions to the OSI and TCP/IP models.",
  "I can explain encapsulation and de-encapsulation at a useful troubleshooting level.",
  "I can explain how same-subnet traffic differs from routed traffic.",
  "I understand that routers rebuild Layer 2 framing as packets move between networks.",
  "I can compare TCP and UDP without assuming one is always better.",
  "I know that ping tests only part of the network stack.",
  "I can use Packet Tracer simulation tools to observe traffic behavior.",
  "I choose troubleshooting evidence based on the symptom instead of making random changes.",
  "I verify the application or service after fixing network connectivity.",
];

const reflection = [
  "Why does a host need both an IP address and a MAC address?",
  "Why does the destination MAC change across routed hops while the destination IP normally remains the same?",
  "What does a successful ping prove, and what does it not prove?",
  "Why is TCP 443 different from a physical switch port numbered 443?",
  "When would a Layer 2 problem prevent a Layer 3 test from succeeding?",
  "How can Packet Tracer simulation mode help identify where a communication path fails?",
];

export default function NetworkingFoundationsOsiModelPage() {
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
              href="/cyberpatriot/cisco-networking/competition-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/ipv4-addressing-subnet-masks"
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
                Cisco & Networking · Lesson 02
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Networking Foundations & the OSI Model
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how hosts, switches, routers, protocols, frames, packets,
                transport ports, and applications fit together so the OSI model
                becomes a practical troubleshooting tool instead of a memorization chart.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong networking work comes from understanding what each layer is
                responsible for, what evidence belongs there, and how traffic
                changes as it moves from one host to another.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>OSI layers</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>TCP/IP layers</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core terms</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Layered troubleshooting</span>
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
            Understand the network as layers of responsibility
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
              The OSI model is a troubleshooting map
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Instead of asking "What random command should I try?", ask which
              layer must succeed for the observed behavior to work and what
              evidence can confirm that layer.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Important distinction
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Models simplify reality
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Real devices and protocols can span multiple layers. Use the model
              to organize reasoning, not to force every technology into one
              perfect box.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Core vocabulary
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what is moving and which device makes the decision
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
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
            OSI model
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Seven layers, seven troubleshooting questions
          </h2>

          <div className="mt-8 grid gap-4">
            {osiLayers.map((item) => (
              <div
                key={item.layer}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.25fr_0.75fr_1.35fr_1.2fr_1.25fr]"
              >
                <div className="text-2xl font-black text-cyan-300">
                  {item.layer}
                </div>
                <h3 className="text-lg font-black text-white">{item.name}</h3>
                <p className="text-sm leading-6 text-slate-300">
                  {item.question}
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  {item.examples}
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  {item.evidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            TCP/IP model
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            The practical Internet stack
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {tcpIpLayers.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.layer}</h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  {item.osi}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Addressing roles
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            MAC, IP, and port numbers solve different problems
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {addressRoles.map((item) => (
              <div
                key={item.identifier}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.identifier}
                </h3>
                <p className="mt-2 text-sm font-black text-cyan-300">
                  {item.layer}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.scope}
                </p>
                <code className="mt-4 block rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Do not confuse two meanings of "port"
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A physical switch interface such as GigabitEthernet0/1 is different
              from a TCP or UDP port such as TCP 443. One identifies a device
              interface; the other identifies a transport-layer service endpoint.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Encapsulation
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Building data for transmission
            </h2>

            <div className="mt-6 grid gap-3">
              {encapsulationSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.step}</span>
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              De-encapsulation
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Delivering data to the application
            </h2>

            <div className="mt-6 grid gap-3">
              {deencapsulationSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.step}</span>
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Device roles
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Different devices make different forwarding decisions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {deviceRoles.map((item) => (
              <div
                key={item.device}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.device}
                  </h3>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
                    {item.primaryLayer}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.decisions}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reminder}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            TCP vs UDP
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Two transport approaches
          </h2>

          <div className="mt-8 grid gap-4">
            {tcpUdpComparison.map((item) => (
              <div
                key={item.feature}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.7fr_1.15fr_1.15fr]"
              >
                <h3 className="font-black text-white">{item.feature}</h3>
                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    TCP
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.tcp}
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    UDP
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.udp}
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
            Common protocols
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Recognize the service, but verify the actual environment
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonProtocols.map((item) => (
              <div
                key={item.protocol}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black text-white">
                    {item.protocol}
                  </h3>
                  <span className="text-sm font-black text-cyan-300">
                    {item.transport}
                  </span>
                </div>
                <code className="mt-3 block text-sm text-cyan-200">
                  Common port: {item.commonPort}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Port numbers are conventions, not proof
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A service can be configured on a non-default port. Treat common
              ports as clues and confirm the actual configuration when troubleshooting.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Same subnet
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Local traffic does not need the router
            </h2>

            <div className="mt-6 grid gap-3">
              {sameNetworkReasoning.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.step}</span>
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Different subnet
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Remote traffic uses the default gateway
            </h2>

            <div className="mt-6 grid gap-3">
              {routedReasoning.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{item.step}</span>
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Layered troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Start where the symptom points
          </h2>

          <div className="mt-8 grid gap-4">
            {layeredTroubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[1.1fr_0.7fr_1.5fr]"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Start near
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-300">
                    {item.beginAt}
                  </p>
                </div>
                <p className="text-sm leading-6 text-slate-400">
                  {item.questions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Packet Tracer
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use simulation to make the layers visible
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {packetTracerUse.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.tool}</h3>
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            One successful test does not prove every layer works
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
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Networking shortcuts that weaken troubleshooting
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskMistakes.map((item) => (
              <div
                key={item.mistake}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.mistake}
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
            Trace a fictional HTTPS request through the stack
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
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
                Use the layers to locate responsibility: local link, IP path,
                transport service, or application. Gather evidence at the layer
                the symptom points to, then verify the complete path after the fix.
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
              href="/cyberpatriot/cisco-networking/competition-workflow"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/ipv4-addressing-subnet-masks"
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
