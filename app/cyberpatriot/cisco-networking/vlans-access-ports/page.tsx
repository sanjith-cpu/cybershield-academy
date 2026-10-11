import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why VLANs separate Layer 2 broadcast domains on a switched network.",
  "Distinguish VLAN membership, access ports, trunks, and routed communication between VLANs.",
  "Configure and verify access ports using a safe inspection-first workflow.",
  "Recognize common VLAN and access-port mistakes that break connectivity or weaken segmentation.",
  "Use Cisco IOS show commands to compare the intended VLAN plan with actual switch state.",
  "Troubleshoot same-VLAN and wrong-VLAN symptoms before making unnecessary routing changes.",
];

const coreConcepts = [
  {
    title: "VLAN",
    text:
      "A Virtual LAN creates a logical Layer 2 broadcast domain on a switch. Devices in different VLANs are separated at Layer 2 even if they are connected to the same physical switch.",
  },
  {
    title: "Access port",
    text:
      "A switchport assigned to one access VLAN for ordinary endpoint traffic. The endpoint generally sends and receives normal untagged Ethernet frames.",
  },
  {
    title: "Broadcast domain",
    text:
      "The group of devices that receive a Layer 2 broadcast. Each VLAN forms a separate broadcast domain.",
  },
  {
    title: "VLAN ID",
    text:
      "A numeric identifier used by switches to distinguish VLANs. Common user-created VLANs typically use IDs within the normal supported range of the platform.",
  },
  {
    title: "VLAN database",
    text:
      "The switch maintains VLAN definitions separately from individual switchport assignments. A port can reference a VLAN only if the switch supports and knows that VLAN.",
  },
  {
    title: "Inter-VLAN routing",
    text:
      "Communication between different VLANs requires Layer 3 forwarding through a router or multilayer switch.",
  },
];

const whyVlansMatter = [
  {
    title: "Segmentation",
    text:
      "VLANs divide one physical switching environment into smaller logical networks.",
  },
  {
    title: "Broadcast control",
    text:
      "Broadcast traffic stays inside its VLAN instead of reaching every endpoint on the switch.",
  },
  {
    title: "Security boundaries",
    text:
      "VLAN separation supports policy decisions by keeping groups in distinct Layer 2 domains.",
  },
  {
    title: "Organization",
    text:
      "Devices can be grouped by role, department, sensitivity, or function instead of physical location alone.",
  },
  {
    title: "Troubleshooting clarity",
    text:
      "A documented VLAN plan makes it easier to understand which hosts should communicate locally and which traffic must be routed.",
  },
  {
    title: "Scalability",
    text:
      "Logical segmentation allows networks to grow without placing every endpoint into one giant broadcast domain.",
  },
];

const accessPortBehavior = [
  {
    step: "01",
    title: "Endpoint sends an untagged Ethernet frame",
    text:
      "An ordinary workstation typically does not insert an 802.1Q VLAN tag on a basic access connection.",
  },
  {
    step: "02",
    title: "Switch receives the frame on an access port",
    text:
      "The switch associates the frame with the VLAN configured on that interface.",
  },
  {
    step: "03",
    title: "Switch learns the source MAC in that VLAN",
    text:
      "The MAC address table records the source MAC, incoming interface, and VLAN context.",
  },
  {
    step: "04",
    title: "Switch forwards only inside the same VLAN",
    text:
      "Known unicast, unknown unicast, and broadcast behavior remains bounded by the VLAN.",
  },
  {
    step: "05",
    title: "Traffic to another VLAN requires Layer 3 forwarding",
    text:
      "A router or Layer 3 switch function must move packets between separate VLAN broadcast domains.",
  },
];

const vlanPlanExample = [
  {
    vlan: "VLAN 10",
    name: "STAFF",
    subnet: "192.168.10.0/24",
    examplePorts: "Gi0/1 - Gi0/8",
    role: "Staff workstations",
  },
  {
    vlan: "VLAN 20",
    name: "STUDENTS",
    subnet: "192.168.20.0/24",
    examplePorts: "Gi0/9 - Gi0/16",
    role: "Student workstations",
  },
  {
    vlan: "VLAN 30",
    name: "SERVERS",
    subnet: "192.168.30.0/24",
    examplePorts: "Gi0/17 - Gi0/20",
    role: "Internal servers",
  },
  {
    vlan: "VLAN 99",
    name: "MANAGEMENT",
    subnet: "192.168.99.0/24",
    examplePorts: "Restricted management ports",
    role: "Authorized administration",
  },
];

const ciscoInspection = [
  {
    command: "show vlan brief",
    purpose:
      "Display VLAN IDs, VLAN names, status, and access-port membership.",
  },
  {
    command: "show interfaces status",
    purpose:
      "Summarize port status, access VLAN, duplex, speed, and interface type on supported switches.",
  },
  {
    command: "show interfaces switchport",
    purpose:
      "Review administrative and operational switchport mode, access VLAN, native VLAN, and trunk-related details.",
  },
  {
    command: "show interfaces <interface> switchport",
    purpose:
      "Inspect one switchport in detail instead of reading every port.",
  },
  {
    command: "show running-config interface <interface>",
    purpose:
      "Review the actual configuration applied to one switchport where supported.",
  },
  {
    command: "show mac address-table",
    purpose:
      "Compare learned MAC addresses to VLAN membership and physical interfaces.",
  },
  {
    command: "show mac address-table vlan <vlan-id>",
    purpose:
      "Display learned MAC addresses within one VLAN where supported.",
  },
  {
    command: "show spanning-tree vlan <vlan-id>",
    purpose:
      "Review spanning-tree state for one VLAN on platforms that support per-VLAN inspection.",
  },
];

const accessConfigPattern = [
  {
    step: "01",
    title: "Inspect the interface",
    command: "show interfaces GigabitEthernet0/5 switchport",
    meaning:
      "Confirm the current mode, access VLAN, and operational state before changing anything.",
  },
  {
    step: "02",
    title: "Confirm the VLAN exists",
    command: "show vlan brief",
    meaning:
      "Verify the intended VLAN is present and active on the switch.",
  },
  {
    step: "03",
    title: "Enter the interface",
    command: "interface GigabitEthernet0/5",
    meaning:
      "Work only on the specific port supported by the topology and scenario.",
  },
  {
    step: "04",
    title: "Force access behavior",
    command: "switchport mode access",
    meaning:
      "Configure the interface as a static access port instead of relying on negotiation.",
  },
  {
    step: "05",
    title: "Assign the access VLAN",
    command: "switchport access vlan 10",
    meaning:
      "Place ordinary endpoint traffic from that interface into VLAN 10.",
  },
  {
    step: "06",
    title: "Verify",
    command: "show interfaces GigabitEthernet0/5 switchport",
    meaning:
      "Confirm operational mode and access VLAN match the intended design.",
  },
];

const vlanCreationPattern = [
  {
    command: "configure terminal",
    meaning:
      "Enter global configuration mode.",
  },
  {
    command: "vlan 10",
    meaning:
      "Create or enter VLAN 10 configuration context.",
  },
  {
    command: "name STAFF",
    meaning:
      "Assign a descriptive name that helps document the VLAN's purpose.",
  },
  {
    command: "end",
    meaning:
      "Return to privileged EXEC mode.",
  },
  {
    command: "show vlan brief",
    meaning:
      "Verify VLAN 10 exists, is active, and displays the intended name.",
  },
];

const configurationExamples = [
  {
    goal: "Assign one workstation port to VLAN 10",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/5",
      "switchport mode access",
      "switchport access vlan 10",
      "description Staff workstation",
      "end",
    ],
    verify:
      "show interfaces GigabitEthernet0/5 switchport",
    additional:
      "show vlan brief",
  },
  {
    goal: "Assign a range of known student ports to VLAN 20",
    commands: [
      "configure terminal",
      "interface range GigabitEthernet0/9 - 16",
      "switchport mode access",
      "switchport access vlan 20",
      "end",
    ],
    verify:
      "show vlan brief",
    additional:
      "Inspect individual ports if any endpoint behaves unexpectedly.",
  },
  {
    goal: "Create VLAN 30 with a descriptive name",
    commands: [
      "configure terminal",
      "vlan 30",
      "name SERVERS",
      "end",
    ],
    verify:
      "show vlan brief",
    additional:
      "Creating the VLAN does not automatically assign ports or create Layer 3 routing.",
  },
];

const accessVsTrunk = [
  {
    feature: "Typical connected device",
    access:
      "Ordinary endpoint such as workstation, printer, camera, or server.",
    trunk:
      "Another switch, router-on-a-stick link, access point, hypervisor, or other VLAN-aware infrastructure.",
  },
  {
    feature: "Number of VLANs carried",
    access:
      "Normally one data VLAN for standard endpoint traffic.",
    trunk:
      "Multiple VLANs can cross the same physical link.",
  },
  {
    feature: "Frame tagging",
    access:
      "Endpoint-facing frames are usually untagged.",
    trunk:
      "802.1Q tags identify VLAN membership for most carried VLANs.",
  },
  {
    feature: "Primary competition risk",
    access:
      "Wrong access VLAN isolates or misplaces an endpoint.",
    trunk:
      "Wrong allowed/native VLAN settings can affect many VLANs at once.",
  },
];

const endpointSymptoms = [
  {
    symptom:
      "Workstation has a valid VLAN 10 IP but cannot reach other VLAN 10 hosts",
    likelyChecks:
      "Access VLAN, physical port, MAC table, local firewall, duplicate IP, endpoint NIC.",
  },
  {
    symptom:
      "Workstation receives an IP from the wrong DHCP scope",
    likelyChecks:
      "Wrong access VLAN, wrong SSID/VLAN mapping, relay design, or unexpected trunk behavior.",
  },
  {
    symptom:
      "Workstation can reach hosts in another department but not its own",
    likelyChecks:
      "Possible wrong VLAN assignment or unusual routing/policy design.",
  },
  {
    symptom:
      "One port was moved from VLAN 10 to VLAN 20 and connectivity changed immediately",
    likelyChecks:
      "Expected behavior if Layer 2 membership changed; verify endpoint IP/gateway also match VLAN 20.",
  },
  {
    symptom:
      "Two PCs on the same switch cannot communicate even though both are up",
    likelyChecks:
      "Compare access VLANs before changing routing.",
  },
  {
    symptom:
      "Broadcast discovery reaches only some expected hosts",
    likelyChecks:
      "VLAN membership, trunk carriage, and whether those hosts truly share one broadcast domain.",
  },
];

const vlanMismatchScenarios = [
  {
    scenario:
      "PC-A is 192.168.10.20/24 on VLAN 10. PC-B is 192.168.10.30/24 but its port is VLAN 20.",
    result:
      "The hosts believe they are local IP peers, but Layer 2 places them in different broadcast domains.",
    consequence:
      "ARP resolution fails across the VLAN boundary unless unusual bridging is present.",
  },
  {
    scenario:
      "PC-A is physically connected to a VLAN 10 port but configured with 192.168.20.50/24.",
    result:
      "The endpoint's Layer 3 identity does not match the Layer 2 segment.",
    consequence:
      "Local and gateway behavior becomes inconsistent or fails.",
  },
  {
    scenario:
      "Two hosts are both in VLAN 20 but use different /24 subnets.",
    result:
      "Layer 2 connectivity exists, but Layer 3 addressing does not agree.",
    consequence:
      "They may try to route traffic that should have been local or fail due to missing gateway/routing design.",
  },
  {
    scenario:
      "A server is accidentally placed in VLAN 10 instead of VLAN 30.",
    result:
      "The server joins the wrong broadcast domain.",
    consequence:
      "Security policy, DHCP, gateway reachability, and service access can all be affected.",
  },
];

const vlanDatabaseNotes = [
  {
    title: "Creating a VLAN is not the same as assigning a port",
    text:
      "A VLAN can exist with no access ports, and a port configuration can reference a VLAN that still needs to be created depending on platform behavior.",
  },
  {
    title: "Names improve readability",
    text:
      "Names such as STAFF or SERVERS do not create security by themselves, but they reduce ambiguity during review.",
  },
  {
    title: "Unused VLAN does not automatically mean malicious",
    text:
      "A VLAN may be reserved, temporarily unused, used only on trunks, or part of an incomplete lab design.",
  },
  {
    title: "Default VLAN behavior matters",
    text:
      "Many Cisco switches place access ports in VLAN 1 by default. Do not assume that default membership matches the intended scenario.",
  },
];

const interfaceStateNotes = [
  {
    title: "Connected",
    text:
      "Physical and data-link state indicate an active link. Continue checking VLAN, addressing, and policy.",
  },
  {
    title: "Notconnect",
    text:
      "No active endpoint link is detected. Check cabling, endpoint power/NIC, and whether the port should be used.",
  },
  {
    title: "Disabled",
    text:
      "The interface may be administratively shut down. Confirm whether that is intentional before enabling it.",
  },
  {
    title: "Err-disabled",
    text:
      "The switch may have disabled the port because of a protection feature or detected condition. Investigate the cause before recovery.",
  },
];

const segmentationReasoning = [
  {
    question:
      "Should Staff and Students receive each other's Layer 2 broadcasts?",
    answer:
      "Usually no in a segmented design. Separate VLANs keep their broadcast domains distinct.",
  },
  {
    question:
      "Can VLAN 10 talk to VLAN 20 automatically because they are on the same switch?",
    answer:
      "No. Different VLANs require Layer 3 routing to communicate.",
  },
  {
    question:
      "Does changing the access VLAN automatically change the host's IP address?",
    answer:
      "No. The endpoint must still have addressing appropriate for the new subnet, whether static or DHCP-based.",
  },
  {
    question:
      "Can a VLAN exist only for infrastructure or management?",
    answer:
      "Yes. A VLAN may serve management, voice, servers, wireless, or another specialized role.",
  },
  {
    question:
      "Does VLAN separation replace ACLs or firewalls?",
    answer:
      "No. VLANs create Layer 2 separation; Layer 3 policy controls what traffic is allowed between those segments.",
  },
];

const reasoningCases = [
  {
    finding:
      "Gi0/7 is in VLAN 20 but the documentation says it should serve Staff",
    weak:
      "Immediately change it to VLAN 10.",
    better:
      "Confirm what device is actually connected, inspect its IP configuration and MAC entry, and verify the documentation before changing the port.",
  },
  {
    finding:
      "VLAN 40 exists but no access ports are listed under it",
    weak:
      "Delete VLAN 40 because it is unused.",
    better:
      "Check trunks, SVIs, router subinterfaces, wireless mappings, and scenario requirements before deciding it is unnecessary.",
  },
  {
    finding:
      "Two hosts have 192.168.10.x addresses but cannot ARP for each other",
    weak:
      "Change the router route table.",
    better:
      "First confirm both switchports belong to the same VLAN because local ARP should not require a router.",
  },
  {
    finding:
      "A student PC receives a Staff subnet address from DHCP",
    weak:
      "Replace the DHCP server immediately.",
    better:
      "Check whether the endpoint is placed into the wrong access VLAN before changing the DHCP service.",
  },
  {
    finding:
      "An access port has switchport mode access and VLAN 99",
    weak:
      "VLAN 99 must be wrong because high VLAN numbers are suspicious.",
    better:
      "VLAN IDs do not reveal intent by themselves. Compare the connected device and documented VLAN purpose.",
  },
  {
    finding:
      "A port is administratively down",
    weak:
      "Run no shutdown on every disabled port.",
    better:
      "Unused ports may be intentionally disabled. Enable only ports required by the scenario and topology.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Moving multiple ports to a new VLAN before testing one",
    risk:
      "A wrong assumption can disconnect many endpoints at once and make rollback harder.",
  },
  {
    shortcut:
      "Deleting an unfamiliar VLAN",
    risk:
      "The VLAN may support trunks, wireless, management, servers, or required future connectivity even if no access ports are obvious.",
  },
  {
    shortcut:
      "Enabling every shutdown switchport",
    risk:
      "Unused ports are often intentionally disabled as a defensive measure.",
  },
  {
    shortcut:
      "Changing VLAN membership without checking endpoint addressing",
    risk:
      "The endpoint may remain configured for the old subnet and lose gateway or local reachability.",
  },
  {
    shortcut:
      "Treating VLANs as a replacement for routing policy",
    risk:
      "Inter-VLAN traffic may still be allowed broadly once Layer 3 routing is enabled.",
  },
  {
    shortcut:
      "Using interface range on uncertain ports",
    risk:
      "A broad command can misconfigure trunks, uplinks, servers, or management interfaces along with ordinary endpoints.",
  },
];

const verificationChecklist = [
  {
    area: "VLAN existence",
    check:
      "The intended VLAN exists and is active on the switch.",
  },
  {
    area: "Access mode",
    check:
      "Endpoint-facing interfaces operate as access ports when the design calls for it.",
  },
  {
    area: "Access VLAN",
    check:
      "Each required endpoint port belongs to the documented VLAN.",
  },
  {
    area: "Endpoint addressing",
    check:
      "The host IP address, subnet mask, gateway, and DHCP state match the VLAN's Layer 3 subnet.",
  },
  {
    area: "MAC learning",
    check:
      "Expected endpoint MAC addresses appear in the correct VLAN and on the correct interfaces.",
  },
  {
    area: "Local connectivity",
    check:
      "Same-VLAN endpoints can communicate as expected before inter-VLAN routing is tested.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional switch with four PCs: two Staff devices and two Student devices.",
  },
  {
    step: "02",
    task:
      "Create VLAN 10 STAFF and VLAN 20 STUDENTS, then verify both VLANs with show vlan brief.",
  },
  {
    step: "03",
    task:
      "Assign the two Staff ports to VLAN 10 and the two Student ports to VLAN 20 using static access mode.",
  },
  {
    step: "04",
    task:
      "Give Staff hosts addresses from 192.168.10.0/24 and Student hosts addresses from 192.168.20.0/24.",
  },
  {
    step: "05",
    task:
      "Verify same-VLAN communication works while cross-VLAN communication does not yet work without routing.",
  },
  {
    step: "06",
    task:
      "Move one Staff port accidentally into VLAN 20 and observe how MAC learning and connectivity change.",
  },
  {
    step: "07",
    task:
      "Use show vlan brief, show interfaces switchport, and show mac address-table to identify the exact mismatch.",
  },
  {
    step: "08",
    task:
      "Restore the correct access VLAN, verify same-VLAN communication, and document the before-and-after state.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "PC-A and PC-B both use 192.168.10.0/24 addresses, but PC-A is VLAN 10 and PC-B is VLAN 20.",
    response:
      "They are in different Layer 2 broadcast domains. Correct the VLAN/addressing design instead of changing the router first.",
  },
  {
    prompt:
      "Gi0/12 is assigned VLAN 20, but no MAC address is learned there.",
    response:
      "Check endpoint activity, physical link, NIC state, and whether Gi0/12 is actually the expected physical port.",
  },
  {
    prompt:
      "A server port appears in VLAN 1 even though the design calls for VLAN 30.",
    response:
      "Confirm the server identity and addressing, then correct the access VLAN if the evidence supports the documented design.",
  },
  {
    prompt:
      "VLAN 99 has no access ports listed but is named MANAGEMENT.",
    response:
      "Do not delete it. Check trunks, SVI or router design, and management paths first.",
  },
  {
    prompt:
      "A port range command would make configuration faster, but one port in the range is an uplink.",
    response:
      "Do not use the broad range. Configure only confirmed endpoint ports or split the range safely.",
  },
  {
    prompt:
      "After moving a PC from VLAN 10 to VLAN 20, it still has a 192.168.10.x address.",
    response:
      "Layer 2 membership changed, but Layer 3 configuration did not. Renew DHCP or correct static addressing according to the scenario.",
  },
];

const checklist = [
  "I can explain how a VLAN creates a separate Layer 2 broadcast domain.",
  "I understand the difference between a VLAN definition and a switchport assignment.",
  "I know what an access port does.",
  "I can explain why hosts in different VLANs require Layer 3 routing.",
  "I can inspect VLANs and switchport state with Cisco IOS show commands.",
  "I can safely configure one access port after verifying the intended VLAN.",
  "I understand that changing VLAN membership does not automatically change endpoint IP configuration.",
  "I do not delete unfamiliar VLANs without checking dependencies.",
  "I do not enable every shutdown port automatically.",
  "I compare MAC learning, access VLAN, and endpoint addressing together.",
  "I verify same-VLAN communication before troubleshooting inter-VLAN routing.",
  "I document which physical ports belong to each required VLAN.",
];

const reflection = [
  "Why can two hosts with addresses in the same IPv4 subnet still fail to communicate if they are in different VLANs?",
  "What is the difference between creating VLAN 20 and assigning Gi0/5 to VLAN 20?",
  "Why should you inspect the connected device before changing an access VLAN?",
  "Why can a VLAN with no access ports still be required?",
  "What must change at Layer 3 when an endpoint is moved to a different VLAN and subnet?",
  "Which show commands would you use to verify a suspected wrong-VLAN problem?",
];

export default function VlansAccessPortsPage() {
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
              href="/cyberpatriot/cisco-networking/switching-mac-tables-ethernet"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/trunks-native-vlans-8021q"
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
                Cisco & Networking · Lesson 07
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                VLANs & Access Ports
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how VLANs separate Layer 2 broadcast domains, how access
                ports place endpoints into those VLANs, and how to verify
                segmentation without breaking required connectivity.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lesson focuses on endpoint-facing switchports. Trunks,
                native VLANs, and 802.1Q tagging are covered in the next lesson.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Example VLANs</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Correct Layer 2 segmentation</span>
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
            Place endpoints into the right broadcast domain
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
              One switch can contain many logical LANs
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              VLANs let a switch separate endpoints into distinct broadcast
              domains even when those devices connect to the same physical hardware.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A wrong access VLAN can look like an IP problem
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If a host is placed into the wrong broadcast domain, ARP, DHCP,
              gateway access, and local communication can all fail even when the
              IP address itself looks reasonable.
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
            Six ideas behind VLAN access design
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
            Why VLANs matter
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Logical segmentation changes how traffic spreads
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyVlansMatter.map((item) => (
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
            Access-port behavior
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How an endpoint frame enters a VLAN
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {accessPortBehavior.map((item) => (
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
            Example design
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            One switch, four logical networks
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">VLAN</th>
                  <th className="px-4 py-3 font-black">Name</th>
                  <th className="px-4 py-3 font-black">Subnet</th>
                  <th className="px-4 py-3 font-black">Example ports</th>
                  <th className="px-4 py-3 font-black">Role</th>
                </tr>
              </thead>
              <tbody>
                {vlanPlanExample.map((item) => (
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
                    <td className="px-4 py-3">{item.examplePorts}</td>
                    <td className="px-4 py-3 text-slate-400">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            This is a fictional training plan. In a real CyberPatriot image or
            Packet Tracer activity, the scenario and existing topology determine
            which VLANs and ports are actually required.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Verify the VLAN plan before configuring ports
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
            Access-port configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect, assign, and verify one port
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {accessConfigPattern.map((item) => (
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
                <code className="mt-4 block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                  {item.command}
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
            VLAN creation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Define the VLAN before depending on it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {vlanCreationPattern.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-black text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Creating a VLAN does not create routing
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A VLAN is a Layer 2 broadcast domain. Communication with another
              VLAN requires a Layer 3 gateway and routing design, which is covered
              later in this pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Controlled examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Configure only confirmed endpoint ports
          </h2>

          <div className="mt-8 grid gap-5">
            {configurationExamples.map((item) => (
              <div
                key={item.goal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.goal}</h3>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
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

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                        Verify
                      </p>
                      <code className="mt-2 block overflow-x-auto text-sm text-slate-200">
                        {item.verify}
                      </code>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                        Additional note
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.additional}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Interface range is powerful
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Only use interface range when every interface in the range has the
              same confirmed role. Accidentally including a trunk, uplink, server,
              or management port can create a much larger outage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Access vs trunk
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know which type of link you are touching
          </h2>

          <div className="mt-8 grid gap-4">
            {accessVsTrunk.map((item) => (
              <div
                key={item.feature}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.7fr_1.15fr_1.15fr]"
              >
                <h3 className="font-black text-white">{item.feature}</h3>
                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Access
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.access}
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Trunk
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.trunk}
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
            VLAN database reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Existing VLANs need context before removal
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {vlanDatabaseNotes.map((item) => (
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
            Interface state
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Port state changes the next troubleshooting step
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {interfaceStateNotes.map((item) => (
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
            VLAN mismatch
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Layer 2 and Layer 3 must agree
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {vlanMismatchScenarios.map((item) => (
              <div
                key={item.scenario}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.scenario}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-300">
                    {item.result}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.consequence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Segmentation reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Five questions to test your VLAN model
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {segmentationReasoning.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {item.answer}
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
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Symptoms that point toward VLAN membership
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {endpointSymptoms.map((item) => (
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm the port role before changing segmentation
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
            VLAN changes that can cause wide outages
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
            Choose the safest next action
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
            Prove Layer 2 membership and Layer 3 addressing agree
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
            Build and troubleshoot a fictional two-VLAN access network
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
                A correct VLAN design connects Layer 2 membership to Layer 3
                addressing. Always verify the endpoint, switchport, VLAN database,
                MAC table, and subnet together before changing routing.
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
              href="/cyberpatriot/cisco-networking/switching-mac-tables-ethernet"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/trunks-native-vlans-8021q"
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
