import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how 802.1Q trunks carry multiple VLANs across one physical link.",
  "Distinguish tagged VLAN traffic from native VLAN traffic.",
  "Understand allowed VLAN lists and why unnecessary VLAN carriage increases exposure.",
  "Inspect trunk state safely before making configuration changes.",
  "Recognize native VLAN mismatches, missing VLANs, and trunk-mode mistakes.",
  "Verify required VLAN connectivity across multiple switches without opening unnecessary paths.",
];

const coreConcepts = [
  {
    title: "Trunk",
    text:
      "A switch link that can carry traffic for multiple VLANs across one physical interface.",
  },
  {
    title: "802.1Q",
    text:
      "The common Ethernet tagging standard that inserts VLAN information into frames so switches can preserve VLAN identity across trunk links.",
  },
  {
    title: "Tagged VLAN",
    text:
      "A VLAN whose frames cross the trunk with an 802.1Q tag identifying their VLAN membership.",
  },
  {
    title: "Native VLAN",
    text:
      "The VLAN associated with untagged traffic on an 802.1Q trunk. Native VLAN behavior must match on both ends of the link.",
  },
  {
    title: "Allowed VLAN list",
    text:
      "The set of VLANs permitted to cross a trunk. Restricting the list can reduce unnecessary Layer 2 exposure.",
  },
  {
    title: "Trunk mismatch",
    text:
      "A condition where two ends disagree about trunk mode, native VLAN, or allowed VLANs and cause connectivity or security problems.",
  },
];

const trunkFlow = [
  {
    step: "01",
    title: "Frame enters on an access port",
    text:
      "A workstation sends a normal Ethernet frame into its assigned access VLAN.",
  },
  {
    step: "02",
    title: "Switch associates the frame with a VLAN",
    text:
      "The access port tells the switch which VLAN the frame belongs to.",
  },
  {
    step: "03",
    title: "Frame reaches the trunk",
    text:
      "If the destination path crosses another switch, the frame must traverse a trunk.",
  },
  {
    step: "04",
    title: "802.1Q preserves VLAN identity",
    text:
      "The switch tags the frame for its VLAN unless the traffic belongs to the trunk's native VLAN.",
  },
  {
    step: "05",
    title: "Remote switch reads the tag",
    text:
      "The receiving switch uses the VLAN tag to place the frame back into the correct VLAN context.",
  },
  {
    step: "06",
    title: "Frame exits through the correct local port",
    text:
      "The remote switch forwards the frame toward the destination access port in the same VLAN.",
  },
];

const qTagFields = [
  {
    field: "TPID",
    meaning:
      "Identifies the presence of an 802.1Q tag in the Ethernet frame.",
  },
  {
    field: "Priority information",
    meaning:
      "Includes quality-of-service related bits used for traffic priority.",
  },
  {
    field: "DEI",
    meaning:
      "Provides drop-eligibility information in the tag.",
  },
  {
    field: "VLAN ID",
    meaning:
      "Identifies which VLAN the frame belongs to on the trunk.",
  },
];

const accessVsTrunk = [
  {
    feature: "Typical role",
    access:
      "Endpoint-facing link for one ordinary data VLAN.",
    trunk:
      "Infrastructure link carrying multiple VLANs.",
  },
  {
    feature: "Frames",
    access:
      "Usually untagged to the endpoint.",
    trunk:
      "Usually tagged for non-native VLANs.",
  },
  {
    feature: "VLAN count",
    access:
      "One primary access VLAN.",
    trunk:
      "Multiple VLANs may be permitted.",
  },
  {
    feature: "Common peers",
    access:
      "PC, printer, server, camera, endpoint.",
    trunk:
      "Switch, router-on-a-stick interface, access point, hypervisor.",
  },
  {
    feature: "Failure scope",
    access:
      "Usually affects one endpoint or small local group.",
    trunk:
      "Can affect many VLANs and many users at once.",
  },
];

const ciscoInspection = [
  {
    command: "show interfaces trunk",
    purpose:
      "Display active trunk interfaces, native VLAN, allowed VLANs, and forwarding VLAN state.",
  },
  {
    command: "show interfaces <interface> switchport",
    purpose:
      "Inspect administrative and operational switchport mode, native VLAN, and trunk properties on one interface.",
  },
  {
    command: "show running-config interface <interface>",
    purpose:
      "Review the exact configuration on the suspected trunk.",
  },
  {
    command: "show vlan brief",
    purpose:
      "Confirm required VLANs exist locally on the switch.",
  },
  {
    command: "show mac address-table",
    purpose:
      "Observe learned MAC addresses and whether remote VLAN devices appear through the expected trunk.",
  },
  {
    command: "show spanning-tree vlan <vlan-id>",
    purpose:
      "Check whether spanning-tree state allows forwarding for the VLAN across the intended path.",
  },
  {
    command: "show cdp neighbors detail",
    purpose:
      "Identify connected Cisco neighbors and interface relationships where CDP is enabled.",
  },
  {
    command: "show interfaces status",
    purpose:
      "Review physical link state and identify interfaces operating as trunks or access links on supported platforms.",
  },
];

const trunkConfigPattern = [
  {
    step: "01",
    title: "Verify the peer",
    command: "show cdp neighbors detail",
    meaning:
      "Confirm the interface really connects to the expected switch or infrastructure device.",
  },
  {
    step: "02",
    title: "Inspect current trunk state",
    command: "show interfaces GigabitEthernet0/24 switchport",
    meaning:
      "Check administrative mode, operational mode, native VLAN, and negotiated behavior.",
  },
  {
    step: "03",
    title: "Inspect active trunks",
    command: "show interfaces trunk",
    meaning:
      "See which interfaces are actually trunking and what VLANs are carried.",
  },
  {
    step: "04",
    title: "Enter the interface",
    command: "interface GigabitEthernet0/24",
    meaning:
      "Work only on the confirmed infrastructure link.",
  },
  {
    step: "05",
    title: "Set trunk mode",
    command: "switchport mode trunk",
    meaning:
      "Configure the interface as a static trunk on platforms that support this command.",
  },
  {
    step: "06",
    title: "Restrict allowed VLANs",
    command: "switchport trunk allowed vlan 10,20,30,99",
    meaning:
      "Permit only the VLANs the topology actually requires.",
  },
  {
    step: "07",
    title: "Set native VLAN if required",
    command: "switchport trunk native vlan 99",
    meaning:
      "Use only when the design explicitly calls for a specific native VLAN and both ends will match.",
  },
  {
    step: "08",
    title: "Verify both ends",
    command: "show interfaces trunk",
    meaning:
      "Confirm trunk state, allowed VLANs, native VLAN, and forwarding behavior on both switches.",
  },
];

const allowedVlanReasoning = [
  {
    title: "Allowed does not mean active",
    text:
      "A VLAN can be permitted on the trunk but still not exist or be active on the local switch.",
  },
  {
    title: "Active does not mean forwarding",
    text:
      "A VLAN can exist and be allowed yet still be blocked by spanning-tree or another condition.",
  },
  {
    title: "More is not always better",
    text:
      "Allowing every VLAN across every trunk increases unnecessary broadcast reach and expands the impact of mistakes.",
  },
  {
    title: "Restrict carefully",
    text:
      "Removing a required VLAN from the allowed list can disconnect an entire segment across the trunk.",
  },
  {
    title: "Verify both directions",
    text:
      "A trunk configuration must be logically compatible at both ends. Inspect both devices where possible.",
  },
  {
    title: "Document dependencies",
    text:
      "Before pruning a VLAN, identify downstream access ports, gateways, services, management paths, and wireless or virtualization dependencies.",
  },
];

const nativeVlanConcepts = [
  {
    title: "Untagged traffic",
    text:
      "On a standard 802.1Q trunk, traffic belonging to the native VLAN is commonly sent untagged unless platform settings alter that behavior.",
  },
  {
    title: "Both ends must agree",
    text:
      "If one end uses native VLAN 99 and the other uses native VLAN 1, untagged frames can be interpreted as different VLANs.",
  },
  {
    title: "Mismatch warnings matter",
    text:
      "Cisco devices may report native VLAN mismatches through CDP or logs, which is valuable troubleshooting evidence.",
  },
  {
    title: "Native VLAN is not automatically management",
    text:
      "Some designs use a dedicated management VLAN, but the native VLAN role is separate from the question of management addressing.",
  },
  {
    title: "Avoid assumptions about VLAN 1",
    text:
      "Default behavior often involves VLAN 1, but the scenario may intentionally use another native VLAN.",
  },
  {
    title: "Do not change one side alone",
    text:
      "Changing native VLAN on only one trunk endpoint can create immediate inconsistency.",
  },
];

const trunkStates = [
  {
    state: "Operational trunk",
    meaning:
      "The interface is actively carrying multiple VLANs as a trunk.",
  },
  {
    state: "Administrative trunk, not operational trunk",
    meaning:
      "The local configuration expects a trunk, but link state or peer configuration prevents active trunking.",
  },
  {
    state: "Access mode",
    meaning:
      "The interface carries one access VLAN and is not functioning as a trunk.",
  },
  {
    state: "Dynamic mode",
    meaning:
      "Some Cisco switch platforms support negotiation-based modes. Static trunk or access settings are often clearer in controlled competition environments.",
  },
];

const trunkTroubleshooting = [
  {
    symptom:
      "VLAN 10 works across the trunk but VLAN 20 does not",
    checks:
      "Verify VLAN 20 exists on both switches, is allowed on the trunk, is active, and is not blocked by spanning-tree.",
  },
  {
    symptom:
      "No VLANs work across an expected inter-switch link",
    checks:
      "Check physical state, operational trunk mode, peer configuration, encapsulation support, and whether the wrong interface was configured.",
  },
  {
    symptom:
      "Hosts in the same VLAN work locally on each switch but not across switches",
    checks:
      "Inspect the trunk, allowed VLAN list, VLAN existence, and spanning-tree state for that VLAN.",
  },
  {
    symptom:
      "CDP reports a native VLAN mismatch",
    checks:
      "Compare native VLAN configuration on both ends before changing either side.",
  },
  {
    symptom:
      "One trunk carries unexpected VLANs",
    checks:
      "Review the allowed VLAN list and confirm which downstream dependencies actually require those VLANs.",
  },
  {
    symptom:
      "A trunk is up but MAC addresses for one remote VLAN never appear",
    checks:
      "Check allowed/active VLAN state, downstream endpoint activity, VLAN presence, and whether spanning-tree is forwarding.",
  },
];

const trunkOutputInterpretation = [
  {
    field: "Vlans allowed on trunk",
    meaning:
      "The configured allowed list. These VLANs are permitted in principle.",
  },
  {
    field: "Vlans allowed and active",
    meaning:
      "The subset that is both allowed and present/active locally.",
  },
  {
    field: "Vlans in spanning tree forwarding state and not pruned",
    meaning:
      "The VLANs currently eligible to forward across that trunk.",
  },
  {
    field: "Native VLAN",
    meaning:
      "The VLAN associated with untagged traffic on that trunk.",
  },
];

const securityReasoning = [
  {
    title: "Minimize unnecessary VLAN carriage",
    text:
      "A trunk should carry the VLANs required by the topology, not every VLAN by default when tighter scope is practical.",
  },
  {
    title: "Keep unused access ports out of trunk mode",
    text:
      "Endpoint ports should not accidentally negotiate or operate as trunks.",
  },
  {
    title: "Protect management paths",
    text:
      "If the management VLAN must cross a trunk, verify it deliberately because removing it can lock out remote administration.",
  },
  {
    title: "Do not rely on native VLAN changes alone",
    text:
      "Changing the native VLAN is not a substitute for broader switch security and proper allowed-VLAN design.",
  },
  {
    title: "Static roles reduce ambiguity",
    text:
      "Explicitly configured access and trunk roles are easier to audit than relying on dynamic negotiation.",
  },
  {
    title: "Verify before saving",
    text:
      "A trunk change can impact many VLANs, so test required paths before persisting the configuration.",
  },
];

const configExamples = [
  {
    goal: "Create a static inter-switch trunk",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/24",
      "description Uplink to SW2",
      "switchport mode trunk",
      "end",
    ],
    verify:
      "show interfaces trunk",
    caution:
      "Confirm the peer interface is also intended to trunk.",
  },
  {
    goal: "Restrict the trunk to required VLANs",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/24",
      "switchport trunk allowed vlan 10,20,30,99",
      "end",
    ],
    verify:
      "show interfaces trunk",
    caution:
      "Do not remove a VLAN until you confirm it is unnecessary on every dependent path.",
  },
  {
    goal: "Set an explicitly required native VLAN",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/24",
      "switchport trunk native vlan 99",
      "end",
    ],
    verify:
      "show interfaces GigabitEthernet0/24 switchport",
    caution:
      "Apply matching native VLAN settings to the peer trunk according to the authorized design.",
  },
];

const addRemoveAllowed = [
  {
    command: "switchport trunk allowed vlan add 40",
    meaning:
      "Add VLAN 40 to an existing allowed list without replacing the entire list on supported IOS versions.",
  },
  {
    command: "switchport trunk allowed vlan remove 40",
    meaning:
      "Remove VLAN 40 from the allowed list on supported IOS versions.",
  },
  {
    command: "switchport trunk allowed vlan 10,20,30",
    meaning:
      "Set the allowed list to exactly the VLANs shown, replacing the previous list.",
  },
  {
    command: "switchport trunk allowed vlan all",
    meaning:
      "Permit all supported VLANs across the trunk.",
  },
];

const spanningTreeContext = [
  {
    title: "Trunking and spanning-tree interact",
    text:
      "A VLAN can be correctly configured on a trunk yet still not forward on that interface if spanning-tree blocks the path.",
  },
  {
    title: "Blocked is not broken",
    text:
      "Spanning-tree blocking can be intentional loop prevention rather than a fault.",
  },
  {
    title: "Check per VLAN when supported",
    text:
      "Different VLANs can have different spanning-tree states depending on platform and mode.",
  },
  {
    title: "Do not force forwarding blindly",
    text:
      "Changing spanning-tree simply because a trunk port is blocked can create loops and widespread outages.",
  },
];

const negotiationNotes = [
  {
    title: "Dynamic Trunking Protocol",
    text:
      "Some Cisco switches can negotiate trunk formation using DTP.",
  },
  {
    title: "Dynamic auto",
    text:
      "A passive mode that can form a trunk if the peer actively negotiates.",
  },
  {
    title: "Dynamic desirable",
    text:
      "An active mode that attempts to form a trunk with a compatible peer.",
  },
  {
    title: "Static mode is easier to audit",
    text:
      "In controlled lab and competition environments, explicit access or trunk configuration often reduces ambiguity.",
  },
  {
    title: "Platform support varies",
    text:
      "Packet Tracer models and modern switch families may expose different DTP commands and defaults.",
  },
];

const reasoningCases = [
  {
    finding:
      "Gi0/24 carries VLANs 10 and 20, but VLAN 30 is missing",
    weak:
      "Convert every switchport to trunk mode.",
    better:
      "Inspect the existing trunk and allowed VLAN list. The issue may be limited to VLAN 30 being absent, inactive, or blocked.",
  },
  {
    finding:
      "A trunk allows VLANs 1-4094",
    weak:
      "Leave it because more VLANs means better connectivity.",
    better:
      "Determine which VLANs are actually required and reduce unnecessary carriage only after mapping dependencies.",
  },
  {
    finding:
      "CDP reports native VLAN 99 on one side and VLAN 1 on the other",
    weak:
      "Ignore it because native VLANs do not matter.",
    better:
      "Treat it as a real mismatch. Compare both interfaces and align them with the documented design.",
  },
  {
    finding:
      "A trunk is up, but one VLAN is not forwarding",
    weak:
      "The physical link must be bad.",
    better:
      "Check VLAN existence, allowed state, active state, and spanning-tree forwarding for the affected VLAN.",
  },
  {
    finding:
      "An endpoint-facing port is operating as a trunk",
    weak:
      "Leave it because the endpoint currently works.",
    better:
      "Confirm the endpoint role. If it should be a normal access device, explicitly configure the correct access mode and VLAN.",
  },
  {
    finding:
      "A management VLAN is removed from the trunk allowed list",
    weak:
      "Continue configuring remotely to see what happens.",
    better:
      "Recognize the risk of management lockout. Preserve console access and restore required management connectivity deliberately.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Allowing every VLAN on every trunk",
    risk:
      "Expands broadcast reach and creates unnecessary Layer 2 exposure across the topology.",
  },
  {
    shortcut:
      "Removing VLANs from allowed lists without mapping dependencies",
    risk:
      "Can disconnect users, servers, wireless networks, management, or routed gateway paths.",
  },
  {
    shortcut:
      "Changing native VLAN on only one end",
    risk:
      "Creates a mismatch that can misclassify untagged traffic.",
  },
  {
    shortcut:
      "Turning endpoint ports into trunks",
    risk:
      "Can expose multiple VLANs where only one should be present.",
  },
  {
    shortcut:
      "Ignoring spanning-tree state",
    risk:
      "You may misdiagnose an intentional blocked path as a trunk failure.",
  },
  {
    shortcut:
      "Saving immediately after trunk changes",
    risk:
      "A broad connectivity mistake can become persistent before required VLAN paths are verified.",
  },
];

const verificationChecklist = [
  {
    area: "Peer role",
    check:
      "Both ends of the link are intended infrastructure peers.",
  },
  {
    area: "Operational mode",
    check:
      "The interface is actually trunking, not merely configured to try.",
  },
  {
    area: "Native VLAN",
    check:
      "Both ends use the same native VLAN according to the design.",
  },
  {
    area: "Allowed VLANs",
    check:
      "Every required VLAN is permitted and unnecessary VLANs are not carried without reason.",
  },
  {
    area: "Active VLANs",
    check:
      "Required VLANs exist and are active on the relevant switches.",
  },
  {
    area: "Spanning-tree",
    check:
      "Required VLANs are forwarding across the intended path.",
  },
  {
    area: "MAC learning",
    check:
      "Remote endpoint MAC addresses appear through the expected trunk.",
  },
  {
    area: "End-to-end traffic",
    check:
      "Same-VLAN hosts communicate across switches and required management remains reachable.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional topology with SW1 and SW2 connected by one uplink, with VLANs 10 STAFF, 20 STUDENTS, and 99 MANAGEMENT.",
  },
  {
    step: "02",
    task:
      "Place one Staff and one Student endpoint on each switch using access ports.",
  },
  {
    step: "03",
    task:
      "Configure the inter-switch link as a trunk and allow VLANs 10,20,99.",
  },
  {
    step: "04",
    task:
      "Verify same-VLAN communication across the trunk while Staff and Student traffic remain in separate broadcast domains.",
  },
  {
    step: "05",
    task:
      "Remove VLAN 20 from the allowed list on one trunk and observe the specific failure that results.",
  },
  {
    step: "06",
    task:
      "Use show interfaces trunk and show vlan brief to identify why VLAN 20 fails while VLAN 10 still works.",
  },
  {
    step: "07",
    task:
      "Restore VLAN 20, then introduce a native VLAN mismatch and inspect the resulting warnings or behavior available in Packet Tracer.",
  },
  {
    step: "08",
    task:
      "Correct the mismatch, verify all required VLANs, and document final trunk state before saving.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "VLAN 10 works across SW1-SW2, but VLAN 20 hosts only work locally.",
    response:
      "Check VLAN 20 existence, allowed VLAN list, and spanning-tree state on the inter-switch trunk.",
  },
  {
    prompt:
      "show interfaces trunk lists VLAN 30 as allowed but not active.",
    response:
      "Verify VLAN 30 exists and is active locally. Allowed status alone does not prove the VLAN is operational.",
  },
  {
    prompt:
      "One side uses native VLAN 99 and the other uses native VLAN 1.",
    response:
      "Treat this as a trunk mismatch. Align both ends with the documented topology.",
  },
  {
    prompt:
      "An endpoint port unexpectedly appears as a trunk.",
    response:
      "Confirm the connected device role. If it is a normal endpoint, explicitly configure access mode and the correct access VLAN.",
  },
  {
    prompt:
      "A teammate wants to use allowed vlan all to fix a missing VLAN.",
    response:
      "Identify the specific required VLAN instead. Broadly allowing all VLANs can hide the real issue and increase exposure.",
  },
  {
    prompt:
      "A trunk is operational, but the management subnet becomes unreachable after pruning VLANs.",
    response:
      "Check whether the management VLAN was removed. Restore only the required management path and verify before continuing.",
  },
];

const checklist = [
  "I can explain what an 802.1Q trunk does.",
  "I understand how VLAN tags preserve VLAN identity across switch links.",
  "I know that native VLAN traffic is handled differently from ordinary tagged VLAN traffic.",
  "I verify native VLAN configuration on both ends of a trunk.",
  "I understand the difference between allowed, active, and forwarding VLANs.",
  "I can inspect trunk state with Cisco IOS show commands.",
  "I do not allow every VLAN across every trunk without reason.",
  "I do not remove VLANs before mapping downstream dependencies.",
  "I understand that spanning-tree can block a trunk path intentionally.",
  "I recognize the risk of accidentally trunking an endpoint-facing port.",
  "I verify same-VLAN connectivity across switches after trunk changes.",
  "I preserve required management connectivity before saving the configuration.",
];

const reflection = [
  "Why does an inter-switch trunk need VLAN tags?",
  "What is the difference between an allowed VLAN and a forwarding VLAN?",
  "Why can a native VLAN mismatch cause confusing behavior?",
  "Why is allowing every VLAN on every trunk usually a poor default?",
  "How can spanning-tree make a correctly configured trunk appear to fail for one VLAN?",
  "What should you verify before removing a VLAN from a trunk allowed list?",
];

export default function TrunksNativeVlansDot1qPage() {
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
              href="/cyberpatriot/cisco-networking/vlans-access-ports"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/inter-vlan-routing"
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
                Cisco & Networking · Lesson 08
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Trunks, Native VLANs & 802.1Q
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how switches carry multiple VLANs across one physical link,
                how 802.1Q tagging preserves VLAN identity, and how native VLAN
                and allowed-VLAN mistakes can break large parts of a network.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Trunks have a much larger failure scope than ordinary access
                ports. This lesson emphasizes inspection, dependency mapping,
                narrow changes, and full verification before saving.
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
                  <span>Trunk flow stages</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Carry only required VLANs</span>
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
            Understand trunk behavior before changing the link
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
              One physical link can preserve many logical LANs
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              802.1Q tagging lets VLAN 10 remain VLAN 10 and VLAN 20 remain VLAN
              20 as both cross the same inter-switch connection.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Trunk changes have wide impact
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              One incorrect allowed-VLAN or native-VLAN change can disconnect
              many users, servers, and management paths at once.
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
            Six ideas behind 802.1Q trunking
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
            Trunk flow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Follow one frame across two switches
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {trunkFlow.map((item) => (
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
            802.1Q tag
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What the trunk adds to Ethernet
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {qTagFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            You do not need to memorize every bit position to troubleshoot a
            competition trunk. The important idea is that the tag preserves VLAN
            identity while the frame crosses a shared infrastructure link.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Access vs trunk
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know the link role before changing switchport mode
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
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect the trunk from multiple angles
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

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Packet Tracer support varies
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Some simulated switch models show fewer trunk fields or support a
              reduced command set. Use the closest available show commands and
              focus on operational trunk state, VLAN carriage, and end-to-end behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Trunk configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect first, then change the smallest necessary setting
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trunkConfigPattern.map((item) => (
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
            Allowed VLANs
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Permit only what the path requires
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allowedVlanReasoning.map((item) => (
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
            Native VLAN
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Untagged traffic still needs a shared interpretation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {nativeVlanConcepts.map((item) => (
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
            Operational state
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Configured intent and actual behavior can differ
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trunkStates.map((item) => (
              <div
                key={item.state}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.state}</h3>
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
            Reading trunk output
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Allowed, active, and forwarding are different states
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trunkOutputInterpretation.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.field}</h3>
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
            Controlled examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Configure with explicit scope and verification
          </h2>

          <div className="mt-8 grid gap-5">
            {configExamples.map((item) => (
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
                    <div className="rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                        Caution
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.caution}
                      </p>
                    </div>
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
            Allowed-list commands
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand whether you are adding, removing, or replacing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {addRemoveAllowed.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-400/15 bg-red-400/5 p-5">
            <p className="text-sm font-black text-red-200">
              Replacing the list is high impact
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              The command without add or remove may replace the entire allowed
              list. Recheck all required VLANs before using it on a production-like
              competition topology.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Spanning-tree context
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A trunk can exist without forwarding every VLAN
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {spanningTreeContext.map((item) => (
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
            Trunk negotiation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know when the device is negotiating instead of obeying a static role
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {negotiationNotes.map((item) => (
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
            Security reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reduce unnecessary trunk exposure without breaking dependencies
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {securityReasoning.map((item) => (
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
            Use the failure pattern to narrow the trunk problem
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {trunkTroubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Diagnose the trunk before broadening it
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
            Trunk changes that can break many networks at once
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
            Choose the safest next trunk action
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
            Prove the trunk carries only the required VLANs
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
            Build, break, and repair a fictional inter-switch trunk
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
                A trunk is a shared transport path for multiple VLANs. Always
                check mode, allowed VLANs, native VLAN, active state, spanning-tree,
                and downstream dependencies before changing it.
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
              href="/cyberpatriot/cisco-networking/vlans-access-ports"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/inter-vlan-routing"
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
