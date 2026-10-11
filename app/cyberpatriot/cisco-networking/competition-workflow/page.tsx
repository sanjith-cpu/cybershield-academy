import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Turn the overall CyberPatriot strategy into a repeatable Cisco and networking workflow.",
  "Read a topology and scenario before entering configuration mode or changing device settings.",
  "Build a baseline using safe show commands and Packet Tracer evidence.",
  "Trace required traffic from source to destination before deciding where the problem exists.",
  "Separate high-confidence fixes from findings that need more evidence or coordination.",
  "Make narrow configuration changes and verify end-to-end connectivity afterward.",
];

const coreIdeas = [
  {
    title: "Topology",
    text:
      "The topology shows the devices, links, network segments, VLANs, addressing, and traffic paths that make the network work.",
  },
  {
    title: "Baseline",
    text:
      "A baseline is the known current state of interfaces, VLANs, routes, ACLs, users, services, and management access before changes begin.",
  },
  {
    title: "Traffic path",
    text:
      "A network problem becomes easier when you follow traffic from source to destination instead of changing unrelated settings.",
  },
  {
    title: "Control point",
    text:
      "A control point is the device, interface, VLAN, route, ACL, or service that actually determines whether traffic is allowed or forwarded.",
  },
  {
    title: "Change scope",
    text:
      "A good competition change is narrow enough to fix the confirmed problem without disrupting required traffic or administration.",
  },
  {
    title: "Verification",
    text:
      "Verification proves both device state and real connectivity. A correct-looking configuration is not enough if the client still cannot reach the server.",
  },
];

const firstLookAreas = [
  {
    area: "Scenario requirements",
    questions: [
      "Which users, devices, services, and management paths are required?",
      "Which traffic should be allowed?",
      "Which traffic should be blocked?",
      "Are there restrictions on changing addresses, passwords, routes, or services?",
    ],
  },
  {
    area: "Physical and logical topology",
    questions: [
      "Which devices connect to each other?",
      "Which switch ports and router interfaces are used?",
      "Which VLANs or subnets exist?",
      "Where are servers, clients, and management stations located?",
    ],
  },
  {
    area: "Addressing",
    questions: [
      "What IPv4 addresses and subnet masks are assigned?",
      "What are the default gateways?",
      "Which interfaces should be up?",
      "Are any addresses duplicated or outside the intended subnet?",
    ],
  },
  {
    area: "Switching",
    questions: [
      "Which VLANs exist?",
      "Which ports are access ports?",
      "Which links are trunks?",
      "Which VLANs must cross each trunk?",
    ],
  },
  {
    area: "Routing",
    questions: [
      "Which networks are directly connected?",
      "Which static or dynamic routes exist?",
      "Is there a default route?",
      "Can every required subnet reach the next hop?",
    ],
  },
  {
    area: "Policy and management",
    questions: [
      "Which ACLs affect required traffic?",
      "How is the device managed?",
      "Are SSH, local accounts, and enable credentials configured appropriately?",
      "Are unused or unnecessary management services exposed?",
    ],
  },
];

const baselineCommands = [
  {
    command: "show running-config",
    purpose:
      "Display the active configuration currently controlling the device.",
  },
  {
    command: "show startup-config",
    purpose:
      "Display the configuration stored for the next reload.",
  },
  {
    command: "show ip interface brief",
    purpose:
      "Summarize interface status, protocol state, and IPv4 addressing.",
  },
  {
    command: "show interfaces",
    purpose:
      "Display detailed interface state, counters, errors, duplex, speed, and line status.",
  },
  {
    command: "show vlan brief",
    purpose:
      "Display VLANs and access-port membership on a switch.",
  },
  {
    command: "show interfaces trunk",
    purpose:
      "Display trunk state, native VLAN, encapsulation, and allowed/active VLANs.",
  },
  {
    command: "show mac address-table",
    purpose:
      "Display learned MAC addresses and the switch ports associated with them.",
  },
  {
    command: "show ip route",
    purpose:
      "Display the IPv4 routing table and the source of each route.",
  },
  {
    command: "show access-lists",
    purpose:
      "Display configured ACL entries and counters where supported.",
  },
  {
    command: "show cdp neighbors",
    purpose:
      "Display directly connected Cisco neighbors when CDP is enabled.",
  },
  {
    command: "show users",
    purpose:
      "Display currently connected management users where supported.",
  },
  {
    command: "show clock",
    purpose:
      "Display device time so logs and events can be interpreted in context.",
  },
];

const inspectionVsChange = [
  {
    type: "Inspection",
    examples:
      "show, ping, traceroute, show running-config, show interfaces, show ip route",
    meaning:
      "Collects evidence without intentionally changing the device configuration.",
  },
  {
    type: "Configuration mode",
    examples:
      "configure terminal, interface, vlan, line vty, ip access-list",
    meaning:
      "Moves into a mode where commands can modify the active configuration.",
  },
  {
    type: "Operational change",
    examples:
      "shutdown, no shutdown, clear, reload",
    meaning:
      "Can directly affect device operation even if not entered from global configuration mode.",
  },
  {
    type: "Save action",
    examples:
      "copy running-config startup-config, write memory",
    meaning:
      "Persists the current running configuration so it survives a reload.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Read the scenario and map required traffic",
    text:
      "Identify required users, services, network segments, management paths, and security requirements before opening configuration mode.",
  },
  {
    step: "02",
    title: "Identify the topology and device roles",
    text:
      "Label routers, switches, endpoints, servers, VLANs, subnets, uplinks, trunks, and management interfaces.",
  },
  {
    step: "03",
    title: "Collect a read-only baseline",
    text:
      "Use show commands, ping, traceroute, and Packet Tracer evidence to understand the current state.",
  },
  {
    step: "04",
    title: "Trace the failing or protected path",
    text:
      "Follow traffic from source to destination and identify the first point where the expected behavior stops.",
  },
  {
    step: "05",
    title: "Classify the finding",
    text:
      "Decide whether the issue is confirmed, suspicious, unknown, scenario-required, or dependent on another component.",
  },
  {
    step: "06",
    title: "Make the smallest justified change",
    text:
      "Modify only the interface, VLAN, route, ACL, account, or service required to correct the confirmed issue.",
  },
  {
    step: "07",
    title: "Verify locally and end to end",
    text:
      "Re-run show commands and test the real source-to-destination path after the change.",
  },
  {
    step: "08",
    title: "Document and save deliberately",
    text:
      "Record important changes, confirm the running state is correct, and save only when you are confident the configuration should persist.",
  },
];

const trafficQuestions = [
  {
    question: "Can the source reach its default gateway?",
    meaning:
      "Tests local addressing, access VLAN, switch path, and gateway availability.",
  },
  {
    question: "Can the source reach another host in the same subnet?",
    meaning:
      "Helps isolate Layer 2 and local host addressing problems.",
  },
  {
    question: "Can the source reach the next routed hop?",
    meaning:
      "Tests whether routing and interface state work beyond the local segment.",
  },
  {
    question: "Does the routing table contain the destination network?",
    meaning:
      "Determines whether the router knows where to forward the traffic.",
  },
  {
    question: "Does an ACL affect the path?",
    meaning:
      "Checks whether policy intentionally or accidentally blocks the traffic.",
  },
  {
    question: "Does the destination service respond?",
    meaning:
      "Separates network reachability from application or service problems.",
  },
];

const classificationBuckets = [
  {
    bucket: "Required",
    description:
      "The scenario explicitly needs the device, interface, VLAN, route, account, service, or traffic flow.",
    response:
      "Protect it and verify it after every related change.",
  },
  {
    bucket: "Confirmed issue",
    description:
      "Evidence clearly shows a configuration or security problem.",
    response:
      "Remediate narrowly, then verify.",
  },
  {
    bucket: "Suspicious",
    description:
      "The finding has warning signs but needs more evidence before a destructive change.",
    response:
      "Preserve configuration evidence and investigate further.",
  },
  {
    bucket: "Unknown",
    description:
      "The purpose is not yet clear.",
    response:
      "Do not remove or disable it merely because it is unfamiliar.",
  },
  {
    bucket: "Dependency",
    description:
      "The item may appear unnecessary but supports another required function.",
    response:
      "Map the dependency before changing it.",
  },
];

const troubleshootingLayers = [
  {
    layer: "Physical / Link",
    checks:
      "Device power, cable connection, interface state, speed, duplex, line protocol.",
  },
  {
    layer: "Layer 2",
    checks:
      "VLAN membership, access ports, trunks, MAC learning, native VLAN, port security.",
  },
  {
    layer: "Layer 3",
    checks:
      "IP address, subnet mask, default gateway, routed interfaces, routing table.",
  },
  {
    layer: "Policy",
    checks:
      "ACLs, management restrictions, permitted sources, required service exposure.",
  },
  {
    layer: "Services",
    checks:
      "DHCP, DNS, SSH, HTTPS, or other scenario-defined services.",
  },
  {
    layer: "End-to-end verification",
    checks:
      "Ping, traceroute, application test, management login, and Packet Tracer simulation.",
  },
];

const reasoningCases = [
  {
    finding: "A switch port is administratively down",
    weak:
      "Immediately run no shutdown.",
    better:
      "First determine whether the port should be active, what device is connected, and whether the scenario expects that connection.",
  },
  {
    finding: "A VLAN exists but has no access ports",
    weak:
      "Delete the VLAN.",
    better:
      "Check trunks, SVIs, reserved design, and scenario requirements before deciding it is unused.",
  },
  {
    finding: "A route looks unfamiliar",
    weak:
      "Remove it because it is not directly connected.",
    better:
      "Identify the destination, next hop, route source, and required traffic before changing the routing table.",
  },
  {
    finding: "An ACL blocks a subnet",
    weak:
      "Delete the ACL.",
    better:
      "Determine whether the block is intentional, where the ACL is applied, and which required traffic is affected.",
  },
  {
    finding: "SSH is enabled on a router",
    weak:
      "Disable remote access because remote services are dangerous.",
    better:
      "If SSH is required, secure the management plane and restrict authorized sources instead of removing required administration.",
  },
  {
    finding: "A ping fails",
    weak:
      "Assume the destination is down.",
    better:
      "Check interface state, addressing, VLANs, routes, ACLs, and whether ICMP is allowed before concluding the host is unavailable.",
  },
];

const changeLogFields = [
  {
    field: "Device",
    description:
      "Which router, switch, or network node was changed.",
  },
  {
    field: "Interface / feature",
    description:
      "The exact interface, VLAN, ACL, route, line, or management feature involved.",
  },
  {
    field: "Finding",
    description:
      "What the baseline evidence showed before the change.",
  },
  {
    field: "Action",
    description:
      "The exact configuration change made.",
  },
  {
    field: "Verification",
    description:
      "The show command or end-to-end test proving the result.",
  },
  {
    field: "Rollback",
    description:
      "The previous value or configuration needed to reverse the change.",
  },
];

const safeChangeExamples = [
  {
    goal: "Enter privileged EXEC mode",
    command: "enable",
    caution:
      "This changes command privilege, not device configuration by itself.",
  },
  {
    goal: "Enter global configuration mode",
    command: "configure terminal",
    caution:
      "Commands entered from here can modify the active running configuration.",
  },
  {
    goal: "Select one interface",
    command: "interface GigabitEthernet0/1",
    caution:
      "Confirm the correct physical or logical interface before making changes.",
  },
  {
    goal: "Review current interface configuration",
    command: "do show running-config interface GigabitEthernet0/1",
    caution:
      "The do prefix can run eligible EXEC show commands while in configuration mode.",
  },
  {
    goal: "Exit one configuration level",
    command: "exit",
    caution:
      "Moves back one mode; it does not undo commands already entered.",
  },
  {
    goal: "Return to privileged EXEC",
    command: "end",
    caution:
      "Exits configuration mode but does not save or roll back changes.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Entering configuration mode before collecting a baseline",
    risk:
      "You lose confidence about what was already present and may change the wrong component.",
  },
  {
    shortcut: "Using shutdown/no shutdown as random troubleshooting",
    risk:
      "Can interrupt required links and hide the real configuration problem.",
  },
  {
    shortcut: "Deleting ACLs instead of tracing their purpose",
    risk:
      "Can open unauthorized traffic or remove a required security boundary.",
  },
  {
    shortcut: "Changing multiple layers at once",
    risk:
      "Makes it difficult to know which change fixed or broke the network.",
  },
  {
    shortcut: "Saving immediately after every command",
    risk:
      "Can persist a bad configuration before full verification.",
  },
  {
    shortcut: "Reloading the device to solve an unclear issue",
    risk:
      "Causes downtime and can load a different startup configuration than the current running state.",
  },
];

const verificationChecklist = [
  {
    area: "Interfaces",
    check:
      "Required interfaces are up/up and use the intended addressing or switchport mode.",
  },
  {
    area: "VLANs and trunks",
    check:
      "Required VLANs exist, access ports are correct, and trunks carry only the needed VLANs.",
  },
  {
    area: "Routing",
    check:
      "The routing table contains the required networks and next hops.",
  },
  {
    area: "ACLs",
    check:
      "Required traffic is permitted and prohibited traffic remains blocked according to the scenario.",
  },
  {
    area: "Management",
    check:
      "Authorized administrators can still reach and authenticate to the device through the required management path.",
  },
  {
    area: "End-to-end",
    check:
      "Clients can reach required gateways, servers, and services across the actual path.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan manages the network from VLAN 99, Staff uses VLAN 10, Students use VLAN 20, and an HTTPS server lives on VLAN 30.",
  },
  {
    step: "02",
    task:
      "Draw or label the topology: two switches, one router, client ports, trunk links, VLANs, gateways, and the server connection.",
  },
  {
    step: "03",
    task:
      "Collect a read-only baseline with show running-config, show ip interface brief, show vlan brief, show interfaces trunk, show ip route, and show access-lists.",
  },
  {
    step: "04",
    task:
      "Trace required traffic from a Staff client to the HTTPS server and from Morgan's management workstation to the router and switches.",
  },
  {
    step: "05",
    task:
      "Classify each finding as Required, Confirmed issue, Suspicious, Unknown, or Dependency.",
  },
  {
    step: "06",
    task:
      "Apply only the single fictional change supported by the evidence and record the prior value for rollback.",
  },
  {
    step: "07",
    task:
      "Verify device state with show commands and test both required traffic paths end to end.",
  },
  {
    step: "08",
    task:
      "Only after verification, decide whether the running configuration should be saved to startup configuration.",
  },
];

const checklist = [
  "I read the scenario before entering configuration mode.",
  "I identify device roles, VLANs, subnets, links, servers, clients, and management paths.",
  "I collect a baseline with show commands before making changes.",
  "I know the difference between inspection commands, configuration commands, operational changes, and save actions.",
  "I trace required traffic from source to destination before choosing a fix.",
  "I classify findings instead of treating every unfamiliar configuration as wrong.",
  "I change one narrow area at a time when possible.",
  "I preserve required administration and business traffic.",
  "I verify the local device state after each meaningful change.",
  "I verify end-to-end connectivity from the user or service perspective.",
  "I document important changes and rollback information.",
  "I save the running configuration only after confirming the desired final state.",
];

const reflection = [
  "Why should the topology be understood before configuring individual interfaces?",
  "What is the difference between running-config and startup-config?",
  "Why can a failed ping be caused by multiple layers of the network?",
  "Why should an unfamiliar route or ACL be investigated before removal?",
  "What evidence would you collect before changing a trunk?",
  "Why is end-to-end verification stronger than checking only one router or switch?",
];

export default function CiscoCompetitionWorkflowPage() {
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

          <Link
              href="/cyberpatriot/cisco-networking/networking-foundations-osi-model"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Lesson &rarr;
            </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Cisco & Networking · Lesson 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco Competition Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Turn the overall competition strategy into a practical networking
                workflow: understand the topology, collect a device baseline,
                trace required traffic, make controlled changes, and verify the
                real network path.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lesson is the map for the Cisco pathway. Later lessons go
                deeper into addressing, subnetting, IOS, switching, VLANs,
                routing, ACLs, device hardening, troubleshooting, and Packet Tracer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First-look areas</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Baseline commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Workflow stages</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Controlled network defense</span>
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
            Build a repeatable network-defense process
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
              Networking is path reasoning
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Do not treat every Cisco task as an isolated command. Understand
              where traffic starts, where it must go, which devices control it,
              and what evidence proves each step works.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inspect before configuration mode
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Cisco IOS accepts powerful changes quickly. Collect the baseline
              first so you know what the network looked like before remediation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Networking fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six ideas behind the workflow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreIdeas.map((item) => (
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
            First look
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand the environment before touching configuration
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {firstLookAreas.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <div className="mt-4 grid gap-2">
                  {item.questions.map((question) => (
                    <div
                      key={question}
                      className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm leading-6 text-slate-400"
                    >
                      {question}
                    </div>
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
            Baseline commands
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the device before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {baselineCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
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
              Platform note
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Exact show-command support can vary by Cisco IOS version, device
              model, and Packet Tracer feature set. If a command is unavailable,
              use the closest supported inspection command rather than assuming
              the feature itself does not exist.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Command awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know when you are observing and when you are changing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {inspectionVsChange.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <code className="mt-3 block text-sm leading-6 text-cyan-200">
                  {item.examples}
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
            Competition workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight stages from topology to verified configuration
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {workflow.map((item) => (
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
            Trace the traffic
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask the next network question in order
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {trafficQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
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
            Troubleshooting layers
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Move from the link outward
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingLayers.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.layer}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
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
            Classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Not every unfamiliar configuration is a problem
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {classificationBuckets.map((item) => (
              <div
                key={item.bucket}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.bucket}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid configuration changes based on assumptions
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Controlled IOS actions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Understand the effect before typing the command
            </h2>

            <div className="mt-6 grid gap-3">
              {safeChangeExamples.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.goal}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Change tracking
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Record enough to explain and reverse important changes
            </h2>

            <div className="mt-6 grid gap-3">
              {changeLogFields.map((item) => (
                <div
                  key={item.field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.field}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Actions that create avoidable network outages
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
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
            Prove both configuration and connectivity
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
            Review a fictional competition network before changing it
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
                Understand the topology, collect the baseline, trace the traffic,
                classify the evidence, make the smallest justified change, and
                verify the real network path afterward.
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

          <Link
              href="/cyberpatriot/cisco-networking/networking-foundations-osi-model"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Lesson &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
