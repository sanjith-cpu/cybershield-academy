import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Ethernet frames move across a switched LAN.",
  "Describe how a switch learns source MAC addresses and builds its MAC address table.",
  "Distinguish unknown unicast flooding, broadcast flooding, known unicast forwarding, and filtering.",
  "Explain collision domains, broadcast domains, duplex, and why modern switching reduces collisions.",
  "Use Cisco IOS show commands to inspect interfaces and MAC address learning.",
  "Troubleshoot Layer 2 connectivity before blaming routing or higher-layer services.",
];

const coreConcepts = [
  {
    title: "Ethernet frame",
    text:
      "A Layer 2 data unit that carries source and destination MAC addresses, an EtherType or length field, payload, and frame-check information.",
  },
  {
    title: "MAC address",
    text:
      "A 48-bit Layer 2 address commonly written in hexadecimal and used for local Ethernet delivery.",
  },
  {
    title: "MAC address table",
    text:
      "A switch table that maps learned MAC addresses to switch interfaces and VLANs.",
  },
  {
    title: "Forwarding",
    text:
      "Sending a frame out the interface associated with the known destination MAC address.",
  },
  {
    title: "Flooding",
    text:
      "Sending a frame out multiple eligible interfaces when the destination is broadcast or unknown to the switch.",
  },
  {
    title: "Filtering",
    text:
      "Choosing not to forward a frame out an interface when the destination is known to be on the same incoming segment or when policy prevents forwarding.",
  },
];

const ethernetFrameFields = [
  {
    field: "Preamble / SFD",
    purpose:
      "Helps receiving Ethernet devices synchronize and identify the beginning of the frame.",
  },
  {
    field: "Destination MAC",
    purpose:
      "Identifies the intended Layer 2 destination for this local Ethernet hop.",
  },
  {
    field: "Source MAC",
    purpose:
      "Identifies the Layer 2 source of the frame and is the address a switch learns from.",
  },
  {
    field: "EtherType / Length",
    purpose:
      "Identifies the encapsulated upper-layer protocol or provides frame-length information depending on Ethernet format.",
  },
  {
    field: "Payload",
    purpose:
      "Carries upper-layer data such as an IPv4 packet.",
  },
  {
    field: "FCS",
    purpose:
      "Provides error-detection information so corrupted frames can be identified.",
  },
];

const macLearningSteps = [
  {
    step: "01",
    title: "Frame enters a switch port",
    text:
      "The switch receives an Ethernet frame on one interface.",
  },
  {
    step: "02",
    title: "Switch reads the source MAC",
    text:
      "The source MAC tells the switch where that device can currently be reached.",
  },
  {
    step: "03",
    title: "Switch updates its MAC table",
    text:
      "The switch associates the source MAC with the incoming interface and VLAN.",
  },
  {
    step: "04",
    title: "Switch checks the destination MAC",
    text:
      "If the destination is known, the switch forwards only toward the matching interface.",
  },
  {
    step: "05",
    title: "Unknown destinations are flooded",
    text:
      "If the destination MAC is not yet known, the switch floods the frame to eligible ports in the same VLAN except the port it arrived on.",
  },
  {
    step: "06",
    title: "Future traffic becomes more targeted",
    text:
      "As devices communicate, the switch learns more source MAC addresses and can forward more frames directly.",
  },
];

const trafficTypes = [
  {
    type: "Known unicast",
    destination:
      "A specific MAC address already present in the MAC table.",
    switchBehavior:
      "Forward out the learned destination interface.",
  },
  {
    type: "Unknown unicast",
    destination:
      "A specific MAC address not currently in the MAC table.",
    switchBehavior:
      "Flood to eligible ports in the same VLAN except the incoming port.",
  },
  {
    type: "Broadcast",
    destination:
      "FF:FF:FF:FF:FF:FF",
    switchBehavior:
      "Flood to eligible ports in the same VLAN except the incoming port.",
  },
  {
    type: "Multicast",
    destination:
      "A Layer 2 multicast MAC address.",
    switchBehavior:
      "Behavior depends on switch features and multicast awareness; basic switching may flood within the VLAN.",
  },
];

const macTypes = [
  {
    type: "Unicast MAC",
    meaning:
      "Represents one Layer 2 interface and is used for one-to-one Ethernet delivery.",
  },
  {
    type: "Broadcast MAC",
    meaning:
      "FF:FF:FF:FF:FF:FF reaches all devices in the local broadcast domain.",
  },
  {
    type: "Multicast MAC",
    meaning:
      "Represents a group of interested receivers rather than one individual interface.",
  },
  {
    type: "Static MAC entry",
    meaning:
      "Manually configured table entry that does not depend on ordinary dynamic learning.",
  },
  {
    type: "Dynamic MAC entry",
    meaning:
      "Learned automatically from source MAC addresses seen on incoming frames.",
  },
];

const collisionBroadcast = [
  {
    concept: "Collision domain",
    explanation:
      "A network segment where simultaneous transmissions could interfere under shared, half-duplex Ethernet. Modern switched full-duplex links isolate collision domains per switch port.",
  },
  {
    concept: "Broadcast domain",
    explanation:
      "The set of devices that receive a Layer 2 broadcast. VLANs divide a switch into separate broadcast domains.",
  },
  {
    concept: "Full duplex",
    explanation:
      "Allows sending and receiving simultaneously on a point-to-point link and avoids classic Ethernet collisions.",
  },
  {
    concept: "Half duplex",
    explanation:
      "Older/shared behavior where a device cannot transmit and receive at the same time and collisions can occur.",
  },
];

const switchDecisionExamples = [
  {
    scenario:
      "Host A sends to Host B, and Host B is already learned on Gi0/2.",
    result:
      "The switch forwards the frame only out Gi0/2.",
    why:
      "The destination MAC has a known table entry.",
  },
  {
    scenario:
      "Host A sends to a new Host C whose MAC is not in the table.",
    result:
      "The switch floods the frame within the VLAN except back out Host A's port.",
    why:
      "The destination MAC is unknown.",
  },
  {
    scenario:
      "Host A sends an ARP request using the broadcast MAC.",
    result:
      "The switch floods the frame throughout the local VLAN.",
    why:
      "ARP requests commonly use Layer 2 broadcast so the intended IPv4 owner can respond.",
  },
  {
    scenario:
      "Host A sends to a destination learned on the same incoming port.",
    result:
      "The switch filters the frame instead of forwarding it elsewhere.",
    why:
      "The destination is already reachable on the same local segment.",
  },
];

const ciscoCommands = [
  {
    command: "show mac address-table",
    purpose:
      "Display learned and static MAC addresses, VLAN associations, and interfaces.",
  },
  {
    command: "show mac address-table dynamic",
    purpose:
      "Display dynamically learned MAC entries on supported switches.",
  },
  {
    command: "show mac address-table address <mac>",
    purpose:
      "Find the interface and VLAN associated with one MAC address where supported.",
  },
  {
    command: "show mac address-table interface <interface>",
    purpose:
      "Display MAC entries learned through a selected interface.",
  },
  {
    command: "show interfaces status",
    purpose:
      "Summarize port status, VLAN, duplex, speed, and interface type on supported switches.",
  },
  {
    command: "show interfaces <interface>",
    purpose:
      "Review detailed interface state, errors, counters, duplex, speed, and line status.",
  },
  {
    command: "show vlan brief",
    purpose:
      "Confirm VLAN existence and access-port membership.",
  },
  {
    command: "show interfaces switchport",
    purpose:
      "Review switchport mode, access VLAN, trunk-related state, and other Layer 2 details on supported IOS platforms.",
  },
];

const interfaceCounters = [
  {
    counter: "Input errors",
    meaning:
      "General receive-side errors that can point to physical or link problems.",
  },
  {
    counter: "CRC errors",
    meaning:
      "Frame-check failures often associated with corruption, cabling, interference, or duplex-related issues.",
  },
  {
    counter: "Runts",
    meaning:
      "Frames smaller than the minimum valid Ethernet frame size.",
  },
  {
    counter: "Giants",
    meaning:
      "Frames larger than the expected maximum for the configured environment.",
  },
  {
    counter: "Collisions",
    meaning:
      "Relevant mainly in half-duplex/shared Ethernet environments; persistent collisions on modern full-duplex links deserve investigation.",
  },
  {
    counter: "Late collisions",
    meaning:
      "Can indicate duplex problems or physical-layer issues in Ethernet environments where collisions are possible.",
  },
  {
    counter: "Input drops",
    meaning:
      "Frames discarded because buffers or processing resources could not handle the load.",
  },
  {
    counter: "Output drops",
    meaning:
      "Frames discarded before transmission, often associated with congestion or queue limitations.",
  },
];

const duplexSpeed = [
  {
    title: "Auto-negotiation",
    text:
      "Ethernet devices commonly negotiate speed and duplex automatically. Both ends should normally agree.",
  },
  {
    title: "Duplex mismatch",
    text:
      "One side operating full duplex while the other operates half duplex can cause poor performance and error symptoms.",
  },
  {
    title: "Speed mismatch",
    text:
      "Depending on media and platform, mismatched speed settings can prevent the link from coming up or cause connectivity problems.",
  },
  {
    title: "Do not hard-code casually",
    text:
      "Manual settings should match the intended design on both ends. Changing only one side can make the problem worse.",
  },
];

const arpRelationship = [
  {
    step: "01",
    title: "Host knows a destination IPv4 address",
    text:
      "The host determines whether the destination is local or remote.",
  },
  {
    step: "02",
    title: "Host needs a local next-hop MAC",
    text:
      "For a same-subnet destination, it needs the destination host MAC. For a remote subnet, it needs the default gateway MAC.",
  },
  {
    step: "03",
    title: "ARP request is broadcast",
    text:
      "The sender asks which local device owns the target IPv4 address.",
  },
  {
    step: "04",
    title: "ARP reply is usually unicast",
    text:
      "The owner returns its MAC address to the requester.",
  },
  {
    step: "05",
    title: "Switch learns from both directions",
    text:
      "As frames cross the switch, source MAC addresses populate the switch MAC table.",
  },
  {
    step: "06",
    title: "Future frames can be forwarded directly",
    text:
      "The host has neighbor information and the switch has Layer 2 forwarding information.",
  },
];

const switchingTroubleshooting = [
  {
    symptom:
      "Host has no link light and switch interface shows down/down",
    likelyLayer:
      "Physical",
    checks:
      "Cable, interface selection, power, adapter state, physical connection, speed compatibility.",
  },
  {
    symptom:
      "Interface is up/up but no MAC address is learned from the endpoint",
    likelyLayer:
      "Layer 2 / endpoint",
    checks:
      "Endpoint activity, VLAN, cabling path, NIC state, wrong physical port, port security.",
  },
  {
    symptom:
      "MAC is learned on the wrong switch port",
    likelyLayer:
      "Topology / cabling",
    checks:
      "Physical patching, uplinks, unexpected intermediate switch, moved endpoint.",
  },
  {
    symptom:
      "Two same-VLAN hosts cannot communicate",
    likelyLayer:
      "Layer 2 or endpoint addressing",
    checks:
      "VLAN membership, MAC learning, local firewall, duplicate IP, wrong mask, port security.",
  },
  {
    symptom:
      "Broadcast reaches some hosts but not others",
    likelyLayer:
      "VLAN boundary / switchport configuration",
    checks:
      "Access VLAN, trunk allowance, VLAN existence, topology path.",
  },
  {
    symptom:
      "Link works but performance is extremely poor",
    likelyLayer:
      "Interface quality / duplex / congestion",
    checks:
      "CRC errors, collisions, drops, duplex, speed, queueing, cable quality.",
  },
];

const tableReasoning = [
  {
    finding:
      "MAC 00AA.BBCC.DD01 appears on Gi0/5 in VLAN 10",
    meaning:
      "The switch currently believes that MAC is reachable through Gi0/5 within VLAN 10.",
  },
  {
    finding:
      "The same MAC moves rapidly between Gi0/5 and Gi0/24",
    meaning:
      "This may indicate a loop, a moving endpoint, virtualization behavior, or an unexpected topology. Investigate before changing ports.",
  },
  {
    finding:
      "No MACs appear on a supposedly active access port",
    meaning:
      "The endpoint may not be sending frames, the wrong port may be documented, or the physical/link configuration may be wrong.",
  },
  {
    finding:
      "Many MACs appear on one uplink or trunk port",
    meaning:
      "This can be normal because that link may lead to another switch carrying many devices.",
  },
  {
    finding:
      "One access port has multiple MAC addresses",
    meaning:
      "This can indicate a downstream switch, phone-plus-PC design, virtualization, or unauthorized sharing depending on the scenario.",
  },
];

const vlanContext = [
  {
    title: "MAC tables are VLAN-aware",
    text:
      "A switch normally tracks MAC addresses in the context of a VLAN because each VLAN is a separate Layer 2 broadcast domain.",
  },
  {
    title: "Same MAC can appear in different VLAN contexts",
    text:
      "Virtualized or multi-interface environments can create cases where the same underlying system identity appears in multiple logical segments.",
  },
  {
    title: "Flooding stays within the VLAN",
    text:
      "An unknown unicast or broadcast in VLAN 10 should not automatically flood into VLAN 20.",
  },
  {
    title: "Routing is needed between VLANs",
    text:
      "A Layer 3 device or Layer 3 switch function must route traffic between separate VLAN broadcast domains.",
  },
];

const macAging = [
  {
    title: "Dynamic entries age out",
    text:
      "Switches remove dynamic MAC entries after a period of inactivity so stale location information does not remain forever.",
  },
  {
    title: "Traffic refreshes learning",
    text:
      "When a source MAC sends again, the switch refreshes the learned location.",
  },
  {
    title: "Clearing a table is disruptive to evidence",
    text:
      "The network may relearn quickly, but clearing entries removes useful troubleshooting evidence and can trigger temporary flooding.",
  },
  {
    title: "Do not clear just to 'fix' uncertainty",
    text:
      "If a MAC entry looks suspicious, investigate why it is present before deleting evidence.",
  },
];

const reasoningCases = [
  {
    finding:
      "A switch receives a frame for a destination MAC not in its table",
    weak:
      "Drop it because the destination is unknown.",
    better:
      "A basic switch floods unknown unicast traffic within the VLAN so the destination has a chance to receive it.",
  },
  {
    finding:
      "One uplink port shows dozens of learned MAC addresses",
    weak:
      "Disable it because one port should have one MAC.",
    better:
      "Uplinks and trunks can legitimately carry traffic for many downstream devices. Confirm the topology and port role.",
  },
  {
    finding:
      "A host can ping its gateway but not another host in the same VLAN",
    weak:
      "The router must be blocking the traffic.",
    better:
      "Same-VLAN traffic should not require routing. Inspect switchport membership, MAC learning, host addressing, and endpoint security.",
  },
  {
    finding:
      "A port has CRC errors",
    weak:
      "Reconfigure VLANs.",
    better:
      "CRC errors point first toward physical/link-quality issues, cable problems, interface faults, or duplex-related symptoms.",
  },
  {
    finding:
      "The switch MAC table does not list a quiet workstation",
    weak:
      "The workstation is not connected.",
    better:
      "Dynamic MAC entries can age out. Generate authorized traffic or inspect link state before concluding the host is absent.",
  },
  {
    finding:
      "A broadcast frame reaches all hosts in VLAN 10",
    weak:
      "The switch is malfunctioning because it should forward to only one port.",
    better:
      "Broadcast flooding within the VLAN is expected Layer 2 behavior.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Clearing the entire MAC address table during troubleshooting",
    risk:
      "Removes evidence and increases temporary unknown-unicast flooding while the switch relearns devices.",
  },
  {
    shortcut:
      "Disabling a port because it has many MAC addresses",
    risk:
      "The port may be a legitimate uplink, trunk, virtualization host, or phone-plus-PC connection.",
  },
  {
    shortcut:
      "Changing VLAN membership before checking the topology",
    risk:
      "Can move required endpoints into the wrong broadcast domain and break connectivity.",
  },
  {
    shortcut:
      "Hard-coding speed or duplex on only one side",
    risk:
      "Can create link failure or duplex mismatch symptoms.",
  },
  {
    shortcut:
      "Assuming Layer 2 is working because the interface is up",
    risk:
      "An up/up port can still have wrong VLAN, port-security, MAC-learning, or physical quality problems.",
  },
  {
    shortcut:
      "Blaming routing for same-subnet communication failures",
    risk:
      "Wastes time and can lead to unnecessary Layer 3 changes when the problem is local switching or endpoint configuration.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional LAN with one switch and three PCs in the same VLAN and subnet.",
  },
  {
    step: "02",
    task:
      "Before generating traffic, inspect the switch MAC table and record what entries exist.",
  },
  {
    step: "03",
    task:
      "Ping from PC-A to PC-B and watch the ARP and ICMP exchange in Packet Tracer simulation mode.",
  },
  {
    step: "04",
    task:
      "Recheck the MAC table and identify which source MAC addresses were learned and on which interfaces.",
  },
  {
    step: "05",
    task:
      "Generate traffic to PC-C before its MAC is learned and observe unknown-unicast or discovery behavior where visible in the simulation.",
  },
  {
    step: "06",
    task:
      "Move one PC to a different access port and observe how the switch updates its learned MAC location after new traffic.",
  },
  {
    step: "07",
    task:
      "Introduce one fictional fault such as wrong VLAN membership or disabled endpoint NIC and use show commands to isolate it.",
  },
  {
    step: "08",
    task:
      "Correct only the confirmed fault, verify same-VLAN connectivity, and document the before-and-after MAC table evidence.",
  },
];

const verificationChecklist = [
  {
    area: "Physical link",
    check:
      "Required switch ports are connected and operational.",
  },
  {
    area: "VLAN context",
    check:
      "Endpoints belong to the intended VLAN and broadcast domain.",
  },
  {
    area: "MAC learning",
    check:
      "Expected source MAC addresses appear on the correct interfaces.",
  },
  {
    area: "Interface quality",
    check:
      "Error counters do not indicate a persistent cable, duplex, or congestion problem.",
  },
  {
    area: "Local communication",
    check:
      "Same-VLAN hosts can communicate without requiring unnecessary routing changes.",
  },
  {
    area: "Topology consistency",
    check:
      "High-MAC-count ports and uplinks match the documented network design.",
  },
];

const checklist = [
  "I can explain what an Ethernet frame carries.",
  "I know that switches learn from the source MAC address.",
  "I can distinguish known unicast, unknown unicast, broadcast, and multicast behavior.",
  "I understand why unknown unicast and broadcast traffic are flooded within a VLAN.",
  "I know that a switch MAC table maps MAC addresses to interfaces and VLANs.",
  "I understand the difference between collision domains and broadcast domains.",
  "I can explain why modern full-duplex switched Ethernet avoids classic collisions.",
  "I can inspect MAC learning with Cisco IOS show commands.",
  "I can interpret basic interface error counters.",
  "I do not disable a high-MAC-count port without understanding its role.",
  "I troubleshoot same-VLAN failures at Layer 2 before changing routes.",
  "I verify switch state and endpoint connectivity after Layer 2 changes.",
];

const reflection = [
  "Why does a switch learn from the source MAC address instead of the destination MAC address?",
  "What happens when a switch does not know the destination MAC address?",
  "Why can one uplink legitimately show many learned MAC addresses?",
  "What is the difference between a collision domain and a broadcast domain?",
  "Why might a quiet host disappear from the dynamic MAC address table?",
  "What Layer 2 evidence should you collect before changing a switchport VLAN?",
];

export default function SwitchingMacTablesEthernetPage() {
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
              href="/cyberpatriot/cisco-networking/cisco-ios-cli-safe-navigation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/vlans-access-ports"
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
                Cisco & Networking · Lesson 06
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Switching, MAC Tables & Ethernet
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Ethernet switches make forwarding decisions, how MAC
                addresses are learned, why frames are flooded or filtered, and
                how Layer 2 evidence helps isolate local network problems.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lesson builds the switching foundation needed for VLANs,
                trunks, port security, and later troubleshooting. The goal is to
                understand what the switch knows and why it makes each decision.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Ethernet fields</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>MAC learning stages</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Traffic behaviors</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Read Layer 2 evidence</span>
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
            Understand how a switch decides where frames go
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
              Switches learn where devices are
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A switch builds its forwarding knowledge by reading source MAC
              addresses on incoming frames. It then uses destination MAC
              addresses to decide where future frames should go.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not treat every unusual MAC entry as malicious
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Uplinks, trunks, virtual machines, IP phones, and downstream
              switches can create multiple legitimate MAC addresses on one port.
              Always compare the table to the topology.
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
            Six Layer 2 ideas to know first
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
            Ethernet frame
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What the switch sees at Layer 2
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ethernetFrameFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Layer 2 changes at routed boundaries
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              When a packet crosses a router, the router removes the incoming
              Layer 2 frame and builds a new frame for the next link. The IP
              packet continues toward the remote destination while local MAC
              addressing changes hop by hop.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            MAC learning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How the switch builds its forwarding table
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {macLearningSteps.map((item) => (
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
            Traffic behavior
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Forward, flood, or filter
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trafficTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.destination}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">
                    {item.switchBehavior}
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
            MAC address types
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Not every MAC entry means the same thing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {macTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {collisionBroadcast.map((item) => (
            <div
              key={item.concept}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Ethernet behavior
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                {item.concept}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Forwarding examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Predict the switch decision
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {switchDecisionExamples.map((item) => (
              <div
                key={item.scenario}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.scenario}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-sm font-bold text-cyan-200">
                    {item.result}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
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
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the switch before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ciscoCommands.map((item) => (
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
              IOS output varies by platform
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Some Packet Tracer switch models expose fewer commands or fields
              than real Cisco IOS devices. Use the closest supported inspection
              command and do not assume missing output means the concept does not exist.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Interface counters
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Error counters are clues, not automatic diagnoses
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {interfaceCounters.map((item) => (
              <div
                key={item.counter}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.counter}</h3>
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
            Speed and duplex
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep both ends of the Ethernet link consistent
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {duplexSpeed.map((item) => (
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
            ARP and switching
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            IPv4 neighbor discovery creates useful Layer 2 evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {arpRelationship.map((item) => (
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
            VLAN context
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Switching decisions happen inside a broadcast domain
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {vlanContext.map((item) => (
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
            MAC aging
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Learned location is temporary evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {macAging.map((item) => (
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
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use Layer 2 symptoms to choose the next check
          </h2>

          <div className="mt-8 grid gap-4">
            {switchingTroubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[1.2fr_0.7fr_1.5fr]"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Likely layer
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-300">
                    {item.likelyLayer}
                  </p>
                </div>
                <p className="text-sm leading-6 text-slate-400">
                  {item.checks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Reading the MAC table
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What table patterns can tell you
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tableReasoning.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.finding}
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not confuse normal switching behavior with a fault
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
            Layer 2 changes that can erase evidence or break the LAN
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
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the switch knows the expected topology
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            Observe MAC learning in a fictional switched LAN
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
                Read the MAC table together with the topology, VLAN, and interface
                state. One table entry rarely tells the whole story, but combined
                Layer 2 evidence can quickly show where local traffic is really moving.
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
              href="/cyberpatriot/cisco-networking/cisco-ios-cli-safe-navigation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/vlans-access-ports"
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
