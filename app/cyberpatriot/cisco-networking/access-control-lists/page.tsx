import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how IPv4 access control lists evaluate traffic from top to bottom.",
  "Distinguish standard and extended ACLs and choose the right type for a requirement.",
  "Use wildcard masks correctly without confusing them with subnet masks.",
  "Place ACLs inbound or outbound based on the traffic path and policy goal.",
  "Inspect ACL entries, hit counters, and interface application before editing policy.",
  "Modify an ACL narrowly while preserving required traffic and verifying the return path.",
];

const coreConcepts = [
  {
    title: "Access control list",
    text:
      "An ordered set of permit and deny statements that Cisco IOS can use to classify and filter traffic.",
  },
  {
    title: "Access control entry",
    text:
      "One individual rule inside an ACL. Each ACE matches specific traffic and applies a permit or deny action.",
  },
  {
    title: "Top-down evaluation",
    text:
      "Cisco IOS checks entries from the top until the first match is found. Later entries are not evaluated after a match.",
  },
  {
    title: "Implicit deny",
    text:
      "IPv4 ACLs end with an unseen deny any behavior. Traffic not explicitly permitted by any earlier entry is denied.",
  },
  {
    title: "Direction",
    text:
      "An ACL applied inbound filters packets as they enter an interface. An outbound ACL filters packets as they leave an interface.",
  },
  {
    title: "Wildcard mask",
    text:
      "A mask used by Cisco ACLs to describe which address bits must match and which may vary.",
  },
];

const standardVsExtended = [
  {
    feature: "What can be matched",
    standard:
      "Primarily source IPv4 address.",
    extended:
      "Source, destination, protocol, and often TCP/UDP port information.",
  },
  {
    feature: "Typical numbered ranges",
    standard:
      "1-99 and 1300-1999 on many IOS versions.",
    extended:
      "100-199 and 2000-2699 on many IOS versions.",
  },
  {
    feature: "Placement idea",
    standard:
      "Often placed closer to the destination because it cannot distinguish destination or service.",
    extended:
      "Often placed closer to the source because it can filter the unwanted flow more precisely.",
  },
  {
    feature: "Best use",
    standard:
      "Simple source-based restrictions.",
    extended:
      "Detailed traffic policy such as permitting one subnet to reach one server on HTTPS.",
  },
  {
    feature: "Risk if placed poorly",
    standard:
      "Can accidentally block a source from reaching many destinations.",
    extended:
      "Can still break required traffic if protocol, port, direction, or destination is wrong.",
  },
];

const evaluationSteps = [
  {
    step: "01",
    title: "Packet reaches an ACL-enabled interface",
    text:
      "The router identifies whether an inbound or outbound ACL applies at this point in the packet path.",
  },
  {
    step: "02",
    title: "First ACL entry is tested",
    text:
      "The packet is compared against the first ACE using source, destination, protocol, and other conditions supported by that ACL type.",
  },
  {
    step: "03",
    title: "No match moves to the next entry",
    text:
      "Evaluation continues in order until one statement matches.",
  },
  {
    step: "04",
    title: "First match decides the action",
    text:
      "If the matching ACE says permit, processing continues. If it says deny, the packet is discarded by that ACL.",
  },
  {
    step: "05",
    title: "No explicit match reaches implicit deny",
    text:
      "Any traffic that reaches the end without matching a permit is denied.",
  },
  {
    step: "06",
    title: "Counters record matching traffic",
    text:
      "On supported IOS versions, ACL hit counts can provide evidence about which entries are actually matching packets.",
  },
];

const wildcardBasics = [
  {
    subnetMask: "255.255.255.255",
    wildcard: "0.0.0.0",
    meaning:
      "Match one exact IPv4 address.",
  },
  {
    subnetMask: "255.255.255.0",
    wildcard: "0.0.0.255",
    meaning:
      "Match every address in one /24 network.",
  },
  {
    subnetMask: "255.255.255.192",
    wildcard: "0.0.0.63",
    meaning:
      "Match one /26 block when paired with the correct network address.",
  },
  {
    subnetMask: "255.255.0.0",
    wildcard: "0.0.255.255",
    meaning:
      "Match one /16 network.",
  },
  {
    subnetMask: "0.0.0.0",
    wildcard: "255.255.255.255",
    meaning:
      "Match any IPv4 address.",
  },
];

const wildcardMethod = [
  {
    step: "01",
    title: "Write the subnet mask",
    text:
      "Start with the actual subnet mask of the network you want to match.",
  },
  {
    step: "02",
    title: "Subtract each octet from 255",
    text:
      "For example, 255 - 255 = 0 and 255 - 192 = 63.",
  },
  {
    step: "03",
    title: "Pair with the network address",
    text:
      "A wildcard only makes sense when combined with the correct base address.",
  },
  {
    step: "04",
    title: "Check the range",
    text:
      "Confirm the resulting match covers exactly the intended hosts and no broader network.",
  },
];

const shortcuts = [
  {
    syntax: "host 192.168.10.25",
    equivalent:
      "192.168.10.25 0.0.0.0",
    meaning:
      "Match exactly one IPv4 host.",
  },
  {
    syntax: "any",
    equivalent:
      "0.0.0.0 255.255.255.255",
    meaning:
      "Match any IPv4 address.",
  },
];

const ciscoInspection = [
  {
    command: "show access-lists",
    purpose:
      "Display configured ACLs and, where supported, match counters.",
  },
  {
    command: "show ip access-lists",
    purpose:
      "Display IPv4 ACLs in a focused format on supported IOS versions.",
  },
  {
    command: "show running-config | include access-list",
    purpose:
      "Find numbered ACL statements in the running configuration.",
  },
  {
    command: "show running-config | section ip access-list",
    purpose:
      "Review named ACL sections where supported.",
  },
  {
    command: "show running-config interface <interface>",
    purpose:
      "Confirm whether an ACL is applied inbound or outbound on a specific interface.",
  },
  {
    command: "show ip interface <interface>",
    purpose:
      "Review inbound and outbound ACL application information on many IOS platforms.",
  },
  {
    command: "show ip interface brief",
    purpose:
      "Confirm interface state and addresses before reasoning about ACL placement.",
  },
  {
    command: "show ip route",
    purpose:
      "Verify routing is correct before assuming an ACL is the cause of a traffic failure.",
  },
];

const numberedExamples = [
  {
    goal: "Permit one source subnet with a standard ACL",
    commands: [
      "configure terminal",
      "access-list 10 permit 192.168.10.0 0.0.0.255",
      "end",
    ],
    note:
      "Because of the implicit deny, other unmatched sources would be denied if this ACL were applied.",
  },
  {
    goal: "Permit Staff HTTPS access to one server",
    commands: [
      "configure terminal",
      "access-list 110 permit tcp 192.168.10.0 0.0.0.255 host 192.168.30.10 eq 443",
      "end",
    ],
    note:
      "This permits only TCP destination port 443 from the Staff subnet to the selected server.",
  },
  {
    goal: "Permit ICMP for a fictional troubleshooting path",
    commands: [
      "configure terminal",
      "access-list 110 permit icmp 192.168.10.0 0.0.0.255 192.168.30.0 0.0.0.255",
      "end",
    ],
    note:
      "Only add diagnostic traffic the scenario actually requires.",
  },
];

const namedAclBenefits = [
  {
    title: "Readable purpose",
    text:
      "Names such as STAFF_TO_SERVERS can communicate intent better than a number alone.",
  },
  {
    title: "Sequence numbers",
    text:
      "Named ACL editing commonly makes it easier to insert or remove individual entries without rebuilding the entire list.",
  },
  {
    title: "Targeted maintenance",
    text:
      "A single ACE can often be removed by sequence number while leaving the rest of the policy intact.",
  },
  {
    title: "Better review",
    text:
      "Named ACL blocks are easier to compare with scenario requirements during a competition review.",
  },
];

const namedAclExample = [
  {
    step: "01",
    title: "Enter named extended ACL mode",
    commands: [
      "configure terminal",
      "ip access-list extended STAFF_TO_SERVERS",
    ],
  },
  {
    step: "02",
    title: "Permit required HTTPS",
    commands: [
      "10 permit tcp 192.168.10.0 0.0.0.255 host 192.168.30.10 eq 443",
    ],
  },
  {
    step: "03",
    title: "Permit required DNS",
    commands: [
      "20 permit udp 192.168.10.0 0.0.0.255 host 192.168.30.53 eq 53",
      "30 permit tcp 192.168.10.0 0.0.0.255 host 192.168.30.53 eq 53",
    ],
  },
  {
    step: "04",
    title: "Add a deliberate final policy statement if required",
    commands: [
      "90 deny ip 192.168.10.0 0.0.0.255 192.168.30.0 0.0.0.255 log",
      "exit",
      "end",
    ],
  },
  {
    step: "05",
    title: "Verify the ACL",
    commands: [
      "show ip access-lists STAFF_TO_SERVERS",
    ],
  },
];

const directionExamples = [
  {
    path:
      "PC -> Router interface",
    direction:
      "Inbound",
    explanation:
      "The packet is entering the router through that interface.",
  },
  {
    path:
      "Router -> Server VLAN",
    direction:
      "Outbound",
    explanation:
      "The packet is leaving the router toward the destination network.",
  },
  {
    path:
      "Server reply -> Router",
    direction:
      "Inbound on the server-facing interface",
    explanation:
      "Return traffic has its own direction relative to each interface.",
  },
  {
    path:
      "Router -> PC",
    direction:
      "Outbound on the PC-facing interface",
    explanation:
      "Always reason from the router interface's point of view, not from the user's.",
  },
];

const placementReasoning = [
  {
    policy:
      "Block one source subnet from reaching many destinations",
    likelyPlacement:
      "Standard ACL closer to the destination",
    why:
      "A standard ACL cannot distinguish destinations, so placing it too close to the source can block more traffic than intended.",
  },
  {
    policy:
      "Block Students from SSH to one server but allow HTTPS",
    likelyPlacement:
      "Extended ACL closer to the source",
    why:
      "Extended matching can identify source, destination, protocol, and port before unwanted traffic crosses more of the network.",
  },
  {
    policy:
      "Restrict remote management traffic into a router interface",
    likelyPlacement:
      "Depends on management design",
    why:
      "You must understand whether the ACL protects data-plane forwarding, VTY access, or another management feature before applying it.",
  },
  {
    policy:
      "Permit only required traffic between two VLANs",
    likelyPlacement:
      "Where the rule cleanly sees the source and destination path",
    why:
      "Choose a location that enforces the policy without duplicating or bypassing required flows.",
  },
];

const applyAclExamples = [
  {
    goal: "Apply an extended ACL inbound on a source VLAN gateway",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/0.10",
      "ip access-group STAFF_TO_SERVERS in",
      "end",
    ],
    verify:
      "show ip interface GigabitEthernet0/0.10",
  },
  {
    goal: "Apply a standard ACL outbound toward a destination",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/1",
      "ip access-group 10 out",
      "end",
    ],
    verify:
      "show running-config interface GigabitEthernet0/1",
  },
  {
    goal: "Remove one applied ACL without deleting its definition",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/1",
      "no ip access-group 10 out",
      "end",
    ],
    verify:
      "show ip interface GigabitEthernet0/1",
  },
];

const firstMatchCases = [
  {
    entries: [
      "10 permit ip 192.168.10.0 0.0.0.255 any",
      "20 deny tcp 192.168.10.0 0.0.0.255 host 192.168.30.10 eq 22",
    ],
    result:
      "SSH is permitted",
    why:
      "The broad permit at sequence 10 matches first, so sequence 20 is never reached.",
  },
  {
    entries: [
      "10 deny tcp 192.168.20.0 0.0.0.255 host 192.168.30.10 eq 22",
      "20 permit ip 192.168.20.0 0.0.0.255 any",
    ],
    result:
      "SSH to the server is denied while other IP traffic from the subnet can continue.",
    why:
      "The specific deny is evaluated before the broader permit.",
  },
  {
    entries: [
      "10 permit tcp any host 192.168.30.10 eq 443",
    ],
    result:
      "Only matching HTTPS traffic is permitted by this ACL",
    why:
      "Unmatched traffic reaches the implicit deny unless another permit entry is added.",
  },
];

const servicePorts = [
  {
    service: "SSH",
    protocol: "TCP",
    port: "22",
    example:
      "permit tcp <source> host <server> eq 22",
  },
  {
    service: "HTTP",
    protocol: "TCP",
    port: "80",
    example:
      "permit tcp <source> host <server> eq 80",
  },
  {
    service: "HTTPS",
    protocol: "TCP",
    port: "443",
    example:
      "permit tcp <source> host <server> eq 443",
  },
  {
    service: "DNS",
    protocol: "UDP/TCP",
    port: "53",
    example:
      "Often requires separate UDP and TCP permit statements depending on the requirement.",
  },
  {
    service: "ICMP",
    protocol: "ICMP",
    port: "None",
    example:
      "ICMP does not use TCP or UDP port numbers.",
  },
];

const returnTrafficNotes = [
  {
    title: "Classic ACLs are generally stateless",
    text:
      "A permit in one direction does not automatically create a state table that permits every related return packet.",
  },
  {
    title: "TCP established keyword exists",
    text:
      "Cisco extended ACLs can match certain TCP packets with ACK or RST using the established keyword, but this is not the same as a full stateful firewall.",
  },
  {
    title: "ICMP behavior needs deliberate rules",
    text:
      "Echo requests and replies are separate traffic directions. If the policy filters both directions, both flows may need to be considered.",
  },
  {
    title: "DNS may use UDP and TCP",
    text:
      "A policy that permits only UDP 53 can fail for cases where DNS legitimately uses TCP.",
  },
];

const aclEditing = [
  {
    title: "Named ACL sequence numbers",
    text:
      "Sequence numbers allow targeted insertion and removal of individual ACEs on supported IOS versions.",
  },
  {
    title: "Numbered ACL caution",
    text:
      "Older numbered ACL workflows can be less convenient to edit line by line, so inspect platform capabilities before rebuilding a working list.",
  },
  {
    title: "Never delete the whole ACL first",
    text:
      "Removing a working ACL can temporarily open or close far more traffic than intended.",
  },
  {
    title: "Change one ACE at a time",
    text:
      "Use the smallest supported edit, verify counters and traffic, then continue.",
  },
  {
    title: "Preserve ordering intent",
    text:
      "A correct rule in the wrong position can still create the wrong policy.",
  },
  {
    title: "Document old and new sequence",
    text:
      "Record what changed so rollback is clear if required traffic stops working.",
  },
];

const counterReasoning = [
  {
    observation:
      "A deny ACE counter increases when a required application is tested",
    meaning:
      "That rule is actively matching the required traffic and may be the cause of the failure.",
  },
  {
    observation:
      "The expected permit ACE remains at zero",
    meaning:
      "Traffic may not be reaching the ACL, may be taking another path, or may be matched by an earlier ACE.",
  },
  {
    observation:
      "A broad permit has a very high counter",
    meaning:
      "The ACL may be allowing much more traffic than the intended narrow policy.",
  },
  {
    observation:
      "No ACL counters change during testing",
    meaning:
      "Check interface application, direction, routing path, platform behavior, and whether the traffic actually reaches that interface.",
  },
];

const troubleshootingSymptoms = [
  {
    symptom:
      "Ping works but HTTPS fails",
    checks:
      "Extended ACL TCP/443 permit, server service state, local firewall, DNS if name-based testing is used.",
  },
  {
    symptom:
      "HTTPS works but SSH fails",
    checks:
      "TCP/22 ACL entry, first-match ordering, management policy, server SSH state.",
  },
  {
    symptom:
      "All traffic from one subnet fails immediately after ACL application",
    checks:
      "Implicit deny, overly broad deny, direction, source wildcard, interface placement.",
  },
  {
    symptom:
      "ACL exists but appears to do nothing",
    checks:
      "Whether it is actually applied to an interface, correct direction, packet path, earlier routing failure.",
  },
  {
    symptom:
      "Only return traffic fails",
    checks:
      "Reverse-direction filtering, return route, endpoint gateway, ACL on destination-side interface.",
  },
  {
    symptom:
      "One host is blocked instead of the whole subnet",
    checks:
      "host keyword, wildcard 0.0.0.0, sequence ordering, exact source address.",
  },
];

const reasoningCases = [
  {
    finding:
      "ACL ends after one permit statement",
    weak:
      "Everything else will be permitted automatically.",
    better:
      "Unmatched traffic reaches the implicit deny, so required additional flows need explicit permit entries.",
  },
  {
    finding:
      "A deny statement is below a broad permit any",
    weak:
      "The deny will override the permit because deny is stronger.",
    better:
      "ACLs are first-match. The earlier broad permit can prevent the later deny from ever being evaluated.",
  },
  {
    finding:
      "A standard ACL near the source blocks one subnet",
    weak:
      "That is always ideal because filters belong close to the source.",
    better:
      "Standard ACLs cannot distinguish destinations, so source-side placement may block more destinations than intended.",
  },
  {
    finding:
      "An ACL counter is zero",
    weak:
      "Delete the ACL because it is unused.",
    better:
      "Zero hits can mean no recent matching traffic, wrong direction, wrong path, or an earlier rule match. Investigate first.",
  },
  {
    finding:
      "Users cannot reach DNS after hardening",
    weak:
      "Permit UDP 53 and assume the issue is solved permanently.",
    better:
      "Confirm the exact DNS server and whether both UDP and TCP DNS are required by the environment.",
  },
  {
    finding:
      "A routing table is missing the destination network",
    weak:
      "Rewrite the ACL.",
    better:
      "Fix routing first. ACL policy cannot permit traffic toward a destination the router cannot route.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Removing all ACLs to restore connectivity",
    risk:
      "Can erase required network policy and expose traffic that should remain restricted.",
  },
  {
    shortcut:
      "Adding permit ip any any at the top",
    risk:
      "Makes most later restrictions ineffective because first-match evaluation stops at the broad permit.",
  },
  {
    shortcut:
      "Applying an ACL before reading it",
    risk:
      "The implicit deny or existing entries can immediately disrupt required services.",
  },
  {
    shortcut:
      "Guessing wildcard masks",
    risk:
      "Can match a much larger or smaller address range than intended.",
  },
  {
    shortcut:
      "Editing several ACEs at once",
    risk:
      "Makes it difficult to identify which rule broke or restored traffic.",
  },
  {
    shortcut:
      "Ignoring return traffic",
    risk:
      "Can create one-way sessions that appear partially functional.",
  },
];

const verificationChecklist = [
  {
    area: "Policy intent",
    check:
      "Each ACE maps to a clear scenario requirement.",
  },
  {
    area: "Ordering",
    check:
      "Specific exceptions appear before broader matching statements when required.",
  },
  {
    area: "Wildcard",
    check:
      "Source and destination ranges match exactly the intended networks or hosts.",
  },
  {
    area: "Protocol and port",
    check:
      "TCP, UDP, ICMP, and service ports reflect the real application requirement.",
  },
  {
    area: "Interface and direction",
    check:
      "The ACL is applied at the intended interface in the correct in/out direction.",
  },
  {
    area: "Routing",
    check:
      "The router has a valid route to the destination before ACL conclusions are made.",
  },
  {
    area: "Counters",
    check:
      "Expected permit or deny counters change when controlled tests are performed.",
  },
  {
    area: "End-to-end behavior",
    check:
      "Required services work and prohibited traffic remains blocked after the change.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional topology with Staff VLAN 10, Student VLAN 20, Server VLAN 30, and inter-VLAN routing already verified.",
  },
  {
    step: "02",
    task:
      "Create server 192.168.30.10 with fictional HTTPS and SSH services and confirm both are reachable before filtering.",
  },
  {
    step: "03",
    task:
      "Create a named extended ACL that permits Staff HTTPS to the server and denies Staff SSH to that server while preserving other required Staff traffic.",
  },
  {
    step: "04",
    task:
      "Apply the ACL inbound on the Staff Layer 3 interface and verify the exact interface and direction.",
  },
  {
    step: "05",
    task:
      "Test HTTPS and SSH separately and inspect ACL hit counters.",
  },
  {
    step: "06",
    task:
      "Introduce one fictional fault such as placing a broad permit before the SSH deny or using the wrong wildcard mask.",
  },
  {
    step: "07",
    task:
      "Use show ip access-lists, interface application state, and controlled traffic tests to isolate the exact ACE causing the unexpected behavior.",
  },
  {
    step: "08",
    task:
      "Correct only that ACE, verify required and prohibited flows, document the final ACL, and save only after the policy behaves as intended.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "A named ACL permits HTTPS at sequence 20, but sequence 10 already says permit ip any any.",
    response:
      "The broad sequence 10 entry matches first, so later filtering is ineffective for most IP traffic. Reorder the policy deliberately.",
  },
  {
    prompt:
      "A /26 network must be matched in an ACL.",
    response:
      "Use the correct network address with wildcard 0.0.0.63 rather than copying the subnet mask directly.",
  },
  {
    prompt:
      "The ACL is configured correctly but show ip interface shows no access group applied.",
    response:
      "The ACL definition exists but is not filtering that interface. Confirm the intended application point before applying it.",
  },
  {
    prompt:
      "Users can ping the server but cannot access HTTPS.",
    response:
      "Check TCP/443 ACL handling and the server service before changing routing or VLAN configuration.",
  },
  {
    prompt:
      "A standard ACL near the source blocks access to every remote network.",
    response:
      "Standard ACL placement may be too broad. Re-evaluate where the source-only policy should be applied.",
  },
  {
    prompt:
      "A teammate suggests deleting the ACL to test connectivity.",
    response:
      "Prefer a controlled rule-level change or evidence-based test. Removing the entire ACL can erase required protections.",
  },
];

const checklist = [
  "I understand top-down, first-match ACL processing.",
  "I remember that IPv4 ACLs have an implicit deny at the end.",
  "I can distinguish standard and extended ACL capabilities.",
  "I can calculate common wildcard masks.",
  "I understand host and any shortcuts.",
  "I can explain inbound versus outbound from the router interface's perspective.",
  "I inspect routing before assuming an ACL is the problem.",
  "I can verify where an ACL is applied.",
  "I understand why ACL ordering matters.",
  "I use hit counters as evidence instead of deleting rules blindly.",
  "I consider return traffic and application-specific requirements.",
  "I verify required and prohibited flows before saving ACL changes.",
];

const reflection = [
  "Why can an ACL rule be correct but ineffective because of its position?",
  "Why is a wildcard mask not the same as a subnet mask?",
  "Why are extended ACLs commonly placed closer to the source than standard ACLs?",
  "How can ACL counters help distinguish a policy problem from a routing problem?",
  "Why does an implicit deny matter when you create a short ACL?",
  "What should you verify before removing or broadening an ACL?",
];

export default function AccessControlListsPage() {
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
              href="/cyberpatriot/cisco-networking/routing-concepts-dynamic-protocol-awareness"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/dhcp-dns-nat-concepts"
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
                Cisco & Networking · Lesson 13
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Access Control Lists
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Cisco IPv4 ACLs match traffic, how rule order and
                wildcard masks affect policy, and how to permit required services
                while blocking only the traffic the scenario actually forbids.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                ACL mistakes can look like routing, VLAN, DNS, or application
                failures. This lesson focuses on reading the packet path and ACL
                evidence before changing policy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>ACL types</span>
                  <span className="font-bold text-white">2 primary IPv4 types</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evaluation rule</span>
                  <span className="font-bold text-white">First match</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Permit required, deny precisely</span>
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
            Read policy in packet order
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
              ACL order is part of the policy
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Cisco IOS stops at the first matching ACE. A perfectly written
              deny can do nothing if a broader permit already matched the packet.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Never forget the implicit deny
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A short ACL with one permit statement does not mean everything
              else is allowed. Unmatched traffic reaches the implicit deny.
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
            Six ideas behind IPv4 ACL behavior
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
            Standard vs extended
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Choose the ACL type that can express the requirement
          </h2>

          <div className="mt-8 grid gap-4">
            {standardVsExtended.map((item) => (
              <div
                key={item.feature}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.7fr_1.2fr_1.2fr]"
              >
                <h3 className="font-black text-white">{item.feature}</h3>
                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Standard
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.standard}
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Extended
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.extended}
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
            Evaluation process
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Follow one packet through the ACL
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evaluationSteps.map((item) => (
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
            Wildcard masks
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match exactly the addresses the rule intends
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Subnet mask</th>
                  <th className="px-4 py-3 font-black">Wildcard</th>
                  <th className="px-4 py-3 font-black">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {wildcardBasics.map((item) => (
                  <tr
                    key={`${item.subnetMask}-${item.wildcard}`}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-mono text-white">
                      {item.subnetMask}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.wildcard}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {wildcardMethod.map((item) => (
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
            ACL shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            host and any improve readability
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {shortcuts.map((item) => (
              <div
                key={item.syntax}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <code className="text-lg font-black text-cyan-200">
                  {item.syntax}
                </code>
                <p className="mt-4 text-sm font-mono text-slate-300">
                  Equivalent: {item.equivalent}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
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
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read both the ACL definition and where it is applied
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
            Numbered ACL examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the intent before applying the list
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {numberedExamples.map((item) => (
              <div
                key={item.goal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.goal}</h3>
                <div className="mt-4 grid gap-2 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  {item.commands.map((command) => (
                    <code
                      key={command}
                      className="block overflow-x-auto text-sm text-cyan-200"
                    >
                      {command}
                    </code>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Named ACLs
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Easier to review and edit precisely
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {namedAclBenefits.map((item) => (
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

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {namedAclExample.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 font-black text-white">{item.title}</h3>
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
            Direction
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Think from the router interface's point of view
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {directionExamples.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-black text-white">{item.path}</p>
                <p className="mt-3 text-sm font-black text-cyan-300">
                  {item.direction}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Placement reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Filter at the point that expresses the policy cleanly
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {placementReasoning.map((item) => (
              <div
                key={item.policy}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.policy}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  {item.likelyPlacement}
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
            Applying ACLs
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Definition and interface application are separate steps
          </h2>

          <div className="mt-8 grid gap-5">
            {applyAclExamples.map((item) => (
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
            First-match examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ordering can completely change the outcome
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {firstMatchCases.map((item, index) => (
              <div
                key={item.result}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  Case {index + 1}
                </p>
                <div className="mt-4 grid gap-2">
                  {item.entries.map((entry) => (
                    <code
                      key={entry}
                      className="block overflow-x-auto text-sm text-cyan-200"
                    >
                      {entry}
                    </code>
                  ))}
                </div>
                <p className="mt-4 font-black text-emerald-200">{item.result}</p>
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
            Common service ports
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match the protocol the application actually uses
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {servicePorts.map((item) => (
              <div
                key={item.service}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.service}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  {item.protocol} {item.port !== "None" ? `· ${item.port}` : ""}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Return traffic
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Classic ACL filtering is not automatically stateful
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {returnTrafficNotes.map((item) => (
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
            Safe ACL editing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Change one ACE, not the whole policy
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aclEditing.map((item) => (
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
            Hit-counter reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Let controlled traffic show which ACE is matching
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {counterReasoning.map((item) => (
              <div
                key={item.observation}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.observation}
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
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use the failure pattern to narrow the ACL question
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingSymptoms.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Separate routing failures from policy failures
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
            ACL changes that can erase security or break every service
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
            Choose the safest next policy action
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
            Prove the policy allows what is required and denies only what should be denied
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
            Build and troubleshoot a fictional inter-VLAN ACL policy
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
                Read ACLs as ordered policy, not as a bag of rules. Verify the
                route, packet direction, wildcard, protocol, service port,
                sequence order, hit counters, and return traffic before deciding
                what needs to change.
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
              href="/cyberpatriot/cisco-networking/routing-concepts-dynamic-protocol-awareness"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/dhcp-dns-nat-concepts"
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
