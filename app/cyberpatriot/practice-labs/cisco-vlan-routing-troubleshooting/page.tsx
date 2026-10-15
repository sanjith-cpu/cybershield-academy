import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Cisco network supports a school media lab with two user VLANs and one management VLAN.",
  "VLAN 10 is STAFF, VLAN 20 is STUDENTS, and VLAN 99 is MANAGEMENT.",
  "Switch SW1 connects endpoint devices and an uplink trunk to router R1.",
  "R1 provides inter-VLAN routing using router-on-a-stick subinterfaces.",
  "STAFF and STUDENTS must both reach the internal file server at 10.10.30.25 through the routed network.",
  "Only the MANAGEMENT VLAN should be used for switch and router administration.",
  "Do not erase configurations, shut down uplinks, or rebuild VLANs until you identify the actual fault.",
  "Preserve interface, VLAN, trunk, routing, ARP, and reachability evidence before remediation.",
];

const topology = [
  {
    device: "SW1",
    role: "Access switch",
    details:
      "Fa0/1-12 serve STAFF, Fa0/13-23 serve STUDENTS, Gi0/1 is the trunk to R1, VLAN 99 is used for management.",
  },
  {
    device: "R1",
    role: "Inter-VLAN router",
    details:
      "Gi0/0 uses subinterfaces for VLANs 10, 20, and 99. Each subinterface acts as the default gateway for its VLAN.",
  },
  {
    device: "FILE-SRV",
    role: "Internal service",
    details:
      "The file server is reachable through the routed network at 10.10.30.25 and must remain available.",
  },
  {
    device: "STAFF-PC",
    role: "Test endpoint",
    details:
      "Connected to SW1 Fa0/4 and expected to receive connectivity through VLAN 10.",
  },
  {
    device: "STUDENT-PC",
    role: "Test endpoint",
    details:
      "Connected to SW1 Fa0/16 and expected to receive connectivity through VLAN 20.",
  },
];

const physicalChecks = [
  {
    title: "Interface summary",
    commands: [
      "show ip interface brief",
      "show interfaces status",
    ],
    purpose:
      "Start with interface state so you do not troubleshoot routing when the real problem is a down or err-disabled port.",
  },
  {
    title: "Inspect an access port",
    commands: [
      "show interfaces fa0/4",
      "show interfaces fa0/16",
    ],
    purpose:
      "Confirm line protocol state, errors, duplex/speed clues, and whether the endpoint-facing interface is actually up.",
  },
  {
    title: "Inspect the uplink",
    commands: [
      "show interfaces gi0/1",
      "show interfaces gi0/1 switchport",
    ],
    purpose:
      "Verify the physical uplink and the Layer 2 mode before assuming the trunk is correct.",
  },
  {
    title: "Check err-disabled state",
    commands: [
      "show interfaces status err-disabled",
    ],
    purpose:
      "Identify interfaces that were automatically disabled because of a protection feature or fault.",
  },
];

const vlanChecks = [
  {
    title: "VLAN database",
    commands: [
      "show vlan brief",
    ],
    purpose:
      "Confirm VLANs 10, 20, and 99 exist and review which access ports belong to each VLAN.",
  },
  {
    title: "Access-port assignment",
    commands: [
      "show interfaces fa0/4 switchport",
      "show interfaces fa0/16 switchport",
    ],
    purpose:
      "Verify that STAFF-PC and STUDENT-PC are assigned to the expected access VLANs.",
  },
  {
    title: "MAC address learning",
    commands: [
      "show mac address-table",
      "show mac address-table interface fa0/4",
      "show mac address-table interface fa0/16",
    ],
    purpose:
      "Check whether the switch is learning endpoint MAC addresses on the ports and VLANs you expect.",
  },
  {
    title: "Management SVI",
    commands: [
      "show ip interface brief",
      "show running-config interface vlan 99",
    ],
    purpose:
      "Confirm the switch management interface belongs to VLAN 99 and has the intended address state.",
  },
];

const trunkChecks = [
  {
    title: "Trunk summary",
    commands: [
      "show interfaces trunk",
    ],
    purpose:
      "Confirm Gi0/1 is trunking and inspect native VLAN, encapsulation context, and VLANs allowed across the link.",
  },
  {
    title: "Uplink switchport details",
    commands: [
      "show interfaces gi0/1 switchport",
    ],
    purpose:
      "Check administrative mode, operational mode, native VLAN, and allowed VLANs.",
  },
  {
    title: "Running configuration",
    commands: [
      "show running-config interface gi0/1",
    ],
    purpose:
      "Compare the intended uplink configuration with what is actually configured.",
  },
  {
    title: "Spanning-tree state",
    commands: [
      "show spanning-tree vlan 10",
      "show spanning-tree vlan 20",
      "show spanning-tree vlan 99",
    ],
    purpose:
      "Confirm the trunk is forwarding for the relevant VLANs rather than being blocked unexpectedly.",
  },
];

const routerChecks = [
  {
    title: "Subinterface state",
    commands: [
      "show ip interface brief",
      "show running-config interface gi0/0.10",
      "show running-config interface gi0/0.20",
      "show running-config interface gi0/0.99",
    ],
    purpose:
      "Verify each VLAN has the expected 802.1Q subinterface, gateway address, and operational state.",
  },
  {
    title: "Routing table",
    commands: [
      "show ip route",
      "show ip route connected",
    ],
    purpose:
      "Confirm directly connected VLAN networks and other required routes are actually present.",
  },
  {
    title: "ARP table",
    commands: [
      "show ip arp",
    ],
    purpose:
      "Check whether R1 is learning endpoint or next-hop addresses on the expected subinterfaces.",
  },
  {
    title: "Interface counters",
    commands: [
      "show interfaces gi0/0",
      "show interfaces gi0/0.10",
      "show interfaces gi0/0.20",
    ],
    purpose:
      "Look for encapsulation, input, output, or error clues when VLAN traffic appears to reach the router incorrectly.",
  },
];

const reachabilityChecks = [
  {
    title: "Endpoint to gateway",
    command: "ping <default-gateway>",
    meaning:
      "If this fails, focus first on local addressing, access VLAN, trunking, and the router subinterface.",
  },
  {
    title: "Gateway to endpoint",
    command: "ping <endpoint-ip>",
    meaning:
      "A reverse test from R1 helps confirm whether ARP and Layer 2 return traffic are working.",
  },
  {
    title: "Inter-VLAN test",
    command: "ping <host-in-other-vlan>",
    meaning:
      "If local gateway reachability works but inter-VLAN communication fails, examine routing, policy, and return path.",
  },
  {
    title: "Internal service test",
    command: "ping 10.10.30.25",
    meaning:
      "Use the required file server as a mission-based verification target rather than testing random destinations.",
  },
  {
    title: "Path check",
    command: "traceroute 10.10.30.25",
    meaning:
      "Use path information to determine where forwarding stops when the route should span multiple Layer 3 hops.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "SW1 interface status",
    observation:
      "Fa0/4 and Fa0/16 are connected. Gi0/1 is connected and not err-disabled.",
    prompt:
      "Which broad category of failure becomes less likely based on this evidence?",
  },
  {
    id: "E02",
    source: "VLAN database",
    observation:
      "VLANs 10, 20, and 99 exist. Fa0/4 is listed in VLAN 10. Fa0/16 is listed in VLAN 20.",
    prompt:
      "What does this prove about access-port assignment, and what does it not prove about the uplink?",
  },
  {
    id: "E03",
    source: "Trunk summary",
    observation:
      "Gi0/1 is trunking. Allowed VLANs are 10 and 99. VLAN 20 is missing from the allowed list.",
    prompt:
      "Which user group would be affected, and why?",
  },
  {
    id: "E04",
    source: "STAFF-PC test",
    observation:
      "STAFF-PC can ping its default gateway and can reach 10.10.30.25.",
    prompt:
      "How does this evidence narrow the fault domain?",
  },
  {
    id: "E05",
    source: "STUDENT-PC test",
    observation:
      "STUDENT-PC cannot ping its default gateway. Local IP settings are correct.",
    prompt:
      "Which Layer 2 path should you inspect next?",
  },
  {
    id: "E06",
    source: "R1 subinterfaces",
    observation:
      "Gi0/0.10, Gi0/0.20, and Gi0/0.99 are all up/up with expected gateway addresses.",
    prompt:
      "Why does this make the trunk's VLAN filtering more important than rebuilding the router configuration?",
  },
  {
    id: "E07",
    source: "MAC address table",
    observation:
      "SW1 learns the STUDENT-PC MAC on Fa0/16 in VLAN 20.",
    prompt:
      "What does this say about the access port and local Layer 2 learning?",
  },
  {
    id: "E08",
    source: "Spanning tree",
    observation:
      "Gi0/1 is forwarding for VLAN 10 and 99. VLAN 20 does not appear because it is not active on the trunk.",
    prompt:
      "How does this evidence reinforce the trunk hypothesis?",
  },
];

const troubleshootingOrder = [
  {
    step: "01",
    title: "Physical state",
    text:
      "Confirm ports and uplinks are up, not err-disabled, and free of obvious physical errors.",
  },
  {
    step: "02",
    title: "Access VLAN",
    text:
      "Verify endpoint ports are assigned to the expected VLAN and the switch learns the endpoint MAC.",
  },
  {
    step: "03",
    title: "Trunk",
    text:
      "Confirm the uplink is trunking and carries every VLAN required by the mission.",
  },
  {
    step: "04",
    title: "Layer 3 gateway",
    text:
      "Verify router subinterfaces, 802.1Q tags, and gateway addresses.",
  },
  {
    step: "05",
    title: "Routing",
    text:
      "Confirm required connected and remote routes are present and point in the expected direction.",
  },
  {
    step: "06",
    title: "Reachability",
    text:
      "Test from nearest dependency outward: host to gateway, gateway to host, inter-VLAN, then required service.",
  },
];

const preservationChecklist = [
  "Record show ip interface brief on SW1 and R1.",
  "Record show vlan brief before changing access VLAN assignments.",
  "Record show interfaces trunk and the uplink running configuration before changing allowed VLANs.",
  "Record MAC address learning for the affected endpoint.",
  "Record router subinterface configuration and state.",
  "Record the routing table and ARP table.",
  "Record ping or traceroute results before remediation.",
  "Change one network variable at a time, then repeat the exact failed test.",
];

const remediationExamples = [
  {
    title: "Add a missing VLAN to an existing trunk",
    commands: [
      "configure terminal",
      "interface gi0/1",
      "switchport trunk allowed vlan add 20",
      "end",
    ],
    note:
      "Use only when evidence confirms VLAN 20 is required and missing from the trunk's allowed list.",
  },
  {
    title: "Correct an access VLAN",
    commands: [
      "configure terminal",
      "interface fa0/16",
      "switchport mode access",
      "switchport access vlan 20",
      "end",
    ],
    note:
      "Use only when the endpoint-facing port is actually assigned to the wrong VLAN.",
  },
  {
    title: "Re-enable an administratively shut interface",
    commands: [
      "configure terminal",
      "interface gi0/1",
      "no shutdown",
      "end",
    ],
    note:
      "Use only when the interface is administratively down and the mission requires it.",
  },
  {
    title: "Preserve configuration after a verified fix",
    commands: [
      "copy running-config startup-config",
    ],
    note:
      "Save only after verification confirms the change is correct and required functionality remains intact.",
  },
];

const verificationChecks = [
  {
    area: "Interfaces",
    commands: [
      "show ip interface brief",
      "show interfaces status",
    ],
    verify:
      "Required access ports and uplinks remain operational.",
  },
  {
    area: "VLANs",
    commands: [
      "show vlan brief",
      "show interfaces fa0/4 switchport",
      "show interfaces fa0/16 switchport",
    ],
    verify:
      "Endpoint ports remain assigned to their intended VLANs.",
  },
  {
    area: "Trunk",
    commands: [
      "show interfaces trunk",
      "show interfaces gi0/1 switchport",
    ],
    verify:
      "VLANs 10, 20, and 99 are carried as required without unnecessarily widening the trunk.",
  },
  {
    area: "Router",
    commands: [
      "show ip interface brief",
      "show ip route",
      "show ip arp",
    ],
    verify:
      "Subinterfaces remain up, required routes are present, and endpoint addressing is being learned.",
  },
  {
    area: "Reachability",
    commands: [
      "ping <student-default-gateway>",
      "ping 10.10.30.25",
    ],
    verify:
      "The originally failing student path now works and the required internal service remains reachable.",
  },
];

const reflectionQuestions = [
  "Why should interface state be checked before VLAN or routing configuration?",
  "What is the difference between a VLAN existing in the VLAN database and that VLAN being allowed across a trunk?",
  "Why did successful STAFF connectivity help narrow the failure to the STUDENTS path?",
  "Why is learning the STUDENT-PC MAC on Fa0/16 useful evidence?",
  "Why would rebuilding R1's VLAN 20 subinterface be an unnecessarily risky change in this scenario?",
  "What is the advantage of testing from the nearest dependency outward?",
  "Why should you use 'add 20' rather than replacing the entire allowed-VLAN list when fixing a trunk?",
  "What evidence should be collected before saving the running configuration?",
];

const completionChecklist = [
  "I confirmed physical and line-protocol state first.",
  "I verified the VLAN database and endpoint access-port assignments.",
  "I checked MAC address learning for the affected endpoint.",
  "I reviewed the trunk allowed-VLAN list and native VLAN information.",
  "I verified router subinterfaces and gateway addresses.",
  "I checked the routing and ARP tables.",
  "I used mission-based reachability tests rather than random pings.",
  "I made only the smallest configuration change supported by evidence.",
  "I re-ran the exact failed test after remediation.",
  "I saved configuration only after the fix was verified.",
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

export default function CiscoVlanRoutingTroubleshootingLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/linux-services-logs-scheduled-activity"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/cisco-acl-port-security-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Practice Lab &middot; 07 &middot; Cisco / Networking
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                VLAN &amp; Routing Troubleshooting
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Troubleshoot a fictional inter-VLAN connectivity failure by
                moving from physical state to VLAN membership, trunking,
                subinterfaces, routes, ARP, and mission-based reachability.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is disciplined fault isolation. Do not rewrite the
                configuration simply because traffic is failing somewhere.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Intermediate</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Cisco IOS</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Fault isolation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Focus</span>
                  <span className="font-bold text-white">VLANs + Trunks + Routing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mission briefing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Restore student connectivity without disturbing working paths
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {missionRequirements.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Topology"
            title="Know what each device is supposed to do"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topology.map((item) => (
              <div key={item.device} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.device}
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Troubleshooting rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Start at the closest dependency and move outward
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A failed end-to-end ping does not tell you where the problem is.
            Confirm the local interface, access VLAN, trunk, gateway, route, and
            required destination in order.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Layer 1" title="Confirm interfaces before configuration" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {physicalChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Access VLANs" title="Confirm where endpoint traffic enters the switch" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {vlanChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Trunking" title="Verify every required VLAN can cross the uplink" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {trunkChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Layer 3" title="Confirm gateways, routes, and ARP" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {routerChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reachability" title="Test the path in increasing distance" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reachabilityChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                </pre>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Fictional evidence set" title="Narrow the fault domain before changing configuration" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.observation}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Investigation prompt
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Troubleshooting order" title="Use a repeatable network path" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingOrder.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{item.step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Preserve first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record the working and failing state before remediation
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preservationChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Authorized remediation examples"
            title="Change only the configuration the evidence identifies"
            description="These examples are for an authorized training topology. Do not apply a change merely because it appears in the lab."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {remediationExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
                <div className="mt-4 grid gap-2">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Verification" title="Prove the student path works without breaking staff connectivity" />
          <div className="mt-8 grid gap-5">
            {verificationChecks.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.area}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.commands.map((command) => (
                      <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reflection" title="Debrief the network fault isolation" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reflectionQuestions.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Completion checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only after the required path is verified
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4">
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/linux-services-logs-scheduled-activity"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/cisco-acl-port-security-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
