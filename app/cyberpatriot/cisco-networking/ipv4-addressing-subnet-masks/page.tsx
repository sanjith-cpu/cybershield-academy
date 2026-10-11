import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how an IPv4 address is divided into network and host portions by the subnet mask.",
  "Recognize private, public, loopback, link-local, multicast, and other common IPv4 address categories.",
  "Convert common subnet masks and prefix lengths and explain what they mean.",
  "Determine whether two IPv4 hosts are on the same subnet.",
  "Identify valid host addresses, network addresses, broadcast addresses, and default gateways in common scenarios.",
  "Use addressing evidence to troubleshoot misconfigured hosts and interfaces without changing unrelated settings.",
];

const coreConcepts = [
  {
    title: "IPv4 address",
    text:
      "A 32-bit logical address usually written as four decimal octets, such as 192.168.10.25.",
  },
  {
    title: "Subnet mask",
    text:
      "A 32-bit value that identifies which bits of the IPv4 address belong to the network portion and which belong to the host portion.",
  },
  {
    title: "Prefix length",
    text:
      "CIDR notation such as /24 that states how many leading bits belong to the network portion.",
  },
  {
    title: "Network address",
    text:
      "The first address in a subnet. It identifies the subnet itself and is not normally assigned to an ordinary host.",
  },
  {
    title: "Broadcast address",
    text:
      "The final IPv4 address in a traditional subnet, used to address all hosts on that local subnet.",
  },
  {
    title: "Usable host range",
    text:
      "The addresses between the network and broadcast addresses that can normally be assigned to devices.",
  },
];

const octetValues = [
  { bit: "128", position: "Bit 1", meaning: "Most significant bit in an octet" },
  { bit: "64", position: "Bit 2", meaning: "Second binary place value" },
  { bit: "32", position: "Bit 3", meaning: "Third binary place value" },
  { bit: "16", position: "Bit 4", meaning: "Fourth binary place value" },
  { bit: "8", position: "Bit 5", meaning: "Fifth binary place value" },
  { bit: "4", position: "Bit 6", meaning: "Sixth binary place value" },
  { bit: "2", position: "Bit 7", meaning: "Seventh binary place value" },
  { bit: "1", position: "Bit 8", meaning: "Least significant bit in an octet" },
];

const maskTable = [
  { prefix: "/8", mask: "255.0.0.0", block: "16,777,216 addresses", usable: "16,777,214 traditional usable hosts" },
  { prefix: "/16", mask: "255.255.0.0", block: "65,536 addresses", usable: "65,534 traditional usable hosts" },
  { prefix: "/20", mask: "255.255.240.0", block: "4,096 addresses", usable: "4,094 traditional usable hosts" },
  { prefix: "/21", mask: "255.255.248.0", block: "2,048 addresses", usable: "2,046 traditional usable hosts" },
  { prefix: "/22", mask: "255.255.252.0", block: "1,024 addresses", usable: "1,022 traditional usable hosts" },
  { prefix: "/23", mask: "255.255.254.0", block: "512 addresses", usable: "510 traditional usable hosts" },
  { prefix: "/24", mask: "255.255.255.0", block: "256 addresses", usable: "254 traditional usable hosts" },
  { prefix: "/25", mask: "255.255.255.128", block: "128 addresses", usable: "126 traditional usable hosts" },
  { prefix: "/26", mask: "255.255.255.192", block: "64 addresses", usable: "62 traditional usable hosts" },
  { prefix: "/27", mask: "255.255.255.224", block: "32 addresses", usable: "30 traditional usable hosts" },
  { prefix: "/28", mask: "255.255.255.240", block: "16 addresses", usable: "14 traditional usable hosts" },
  { prefix: "/29", mask: "255.255.255.248", block: "8 addresses", usable: "6 traditional usable hosts" },
  { prefix: "/30", mask: "255.255.255.252", block: "4 addresses", usable: "2 traditional usable hosts" },
];

const addressCategories = [
  {
    range: "10.0.0.0/8",
    category: "Private IPv4",
    meaning:
      "Used inside private networks and not globally routed on the public Internet.",
  },
  {
    range: "172.16.0.0/12",
    category: "Private IPv4",
    meaning:
      "Covers 172.16.0.0 through 172.31.255.255.",
  },
  {
    range: "192.168.0.0/16",
    category: "Private IPv4",
    meaning:
      "Very common in local networks, labs, and home environments.",
  },
  {
    range: "127.0.0.0/8",
    category: "Loopback",
    meaning:
      "Used for local host testing. 127.0.0.1 is the familiar loopback address.",
  },
  {
    range: "169.254.0.0/16",
    category: "Link-local",
    meaning:
      "Often appears when a host cannot obtain normal IPv4 configuration and self-assigns a local address.",
  },
  {
    range: "224.0.0.0/4",
    category: "Multicast",
    meaning:
      "Used for one-to-many group communication rather than ordinary unicast host addressing.",
  },
  {
    range: "0.0.0.0",
    category: "Unspecified / default context",
    meaning:
      "Can mean no specific local address or appear in default-route notation such as 0.0.0.0/0.",
  },
  {
    range: "255.255.255.255",
    category: "Limited broadcast",
    meaning:
      "Represents a local limited broadcast and is not an ordinary host address.",
  },
];

const sameSubnetMethod = [
  {
    step: "01",
    title: "Write down both IP addresses",
    text:
      "Example: 192.168.10.25 and 192.168.10.200.",
  },
  {
    step: "02",
    title: "Confirm the subnet mask",
    text:
      "Example: 255.255.255.0, which is /24.",
  },
  {
    step: "03",
    title: "Identify the network portion",
    text:
      "With /24, the first 24 bits are the network portion, so the first three octets identify the network.",
  },
  {
    step: "04",
    title: "Compare the resulting network IDs",
    text:
      "Both addresses belong to network 192.168.10.0/24, so they are local peers.",
  },
  {
    step: "05",
    title: "If the network IDs differ, use a router",
    text:
      "Hosts on different IPv4 subnets need Layer 3 forwarding to communicate.",
  },
];

const exampleSubnets = [
  {
    address: "192.168.10.25/24",
    network: "192.168.10.0",
    broadcast: "192.168.10.255",
    usable: "192.168.10.1 - 192.168.10.254",
    reasoning:
      "A /24 leaves 8 host bits, so the fourth octet ranges from 0 through 255.",
  },
  {
    address: "192.168.10.140/25",
    network: "192.168.10.128",
    broadcast: "192.168.10.255",
    usable: "192.168.10.129 - 192.168.10.254",
    reasoning:
      "A /25 splits the /24 into blocks of 128 addresses: 0-127 and 128-255.",
  },
  {
    address: "10.20.30.70/26",
    network: "10.20.30.64",
    broadcast: "10.20.30.127",
    usable: "10.20.30.65 - 10.20.30.126",
    reasoning:
      "A /26 creates blocks of 64 addresses in the final octet.",
  },
  {
    address: "172.16.5.94/27",
    network: "172.16.5.64",
    broadcast: "172.16.5.95",
    usable: "172.16.5.65 - 172.16.5.94",
    reasoning:
      "A /27 creates blocks of 32 addresses: 0, 32, 64, 96, and so on.",
  },
  {
    address: "192.168.50.14/28",
    network: "192.168.50.0",
    broadcast: "192.168.50.15",
    usable: "192.168.50.1 - 192.168.50.14",
    reasoning:
      "A /28 creates blocks of 16 addresses.",
  },
  {
    address: "10.1.1.6/30",
    network: "10.1.1.4",
    broadcast: "10.1.1.7",
    usable: "10.1.1.5 - 10.1.1.6",
    reasoning:
      "A traditional /30 gives four addresses: network, two usable hosts, and broadcast.",
  },
];

const blockSizeMethod = [
  {
    prefix: "/25",
    interestingMask: "128",
    blockSize: "256 - 128 = 128",
    starts: "0, 128",
  },
  {
    prefix: "/26",
    interestingMask: "192",
    blockSize: "256 - 192 = 64",
    starts: "0, 64, 128, 192",
  },
  {
    prefix: "/27",
    interestingMask: "224",
    blockSize: "256 - 224 = 32",
    starts: "0, 32, 64, 96, 128, 160, 192, 224",
  },
  {
    prefix: "/28",
    interestingMask: "240",
    blockSize: "256 - 240 = 16",
    starts: "0, 16, 32, 48, 64, ...",
  },
  {
    prefix: "/29",
    interestingMask: "248",
    blockSize: "256 - 248 = 8",
    starts: "0, 8, 16, 24, 32, ...",
  },
  {
    prefix: "/30",
    interestingMask: "252",
    blockSize: "256 - 252 = 4",
    starts: "0, 4, 8, 12, 16, ...",
  },
];

const gatewayConcepts = [
  {
    title: "Default gateway",
    text:
      "The Layer 3 next hop a host uses when the destination is outside its local subnet.",
  },
  {
    title: "Gateway must be reachable locally",
    text:
      "The host must be able to reach the gateway on its local Layer 2 segment.",
  },
  {
    title: "Gateway is not automatically .1",
    text:
      "Many networks use the first usable address, but the gateway can be any valid host address chosen by the design.",
  },
  {
    title: "Wrong gateway affects remote traffic",
    text:
      "A host can sometimes communicate locally while failing to reach remote networks if its gateway is wrong.",
  },
  {
    title: "Gateway mask must match design",
    text:
      "The router or Layer 3 interface must use addressing consistent with the intended subnet.",
  },
  {
    title: "Multiple gateways can exist in advanced designs",
    text:
      "Redundancy protocols and complex topologies can present virtual gateways or multiple routed paths.",
  },
];

const hostConfigProblems = [
  {
    symptom: "Host can reach same-subnet peers but not remote networks",
    likelyAreas:
      "Default gateway, routing beyond the gateway, ACLs, or upstream policy.",
  },
  {
    symptom: "Host cannot reach another host that should be local",
    likelyAreas:
      "Wrong subnet mask, wrong VLAN, duplicate IP, interface issue, local firewall, or Layer 2 path.",
  },
  {
    symptom: "Host has 169.254.x.x",
    likelyAreas:
      "DHCP failure or missing manual configuration, depending on the scenario.",
  },
  {
    symptom: "Two devices use the same IPv4 address",
    likelyAreas:
      "Duplicate address conflict causing intermittent or incorrect delivery.",
  },
  {
    symptom: "Router interface and host appear close numerically but cannot communicate",
    likelyAreas:
      "Do not rely on visual similarity. Calculate the actual network ID from the mask.",
  },
  {
    symptom: "Host uses the network or broadcast address",
    likelyAreas:
      "Invalid traditional host assignment for that subnet.",
  },
];

const ciscoInspection = [
  {
    command: "show ip interface brief",
    purpose:
      "Review Cisco interface IPv4 addresses and operational state.",
  },
  {
    command: "show running-config | section interface",
    purpose:
      "Review interface configuration in supported IOS environments.",
  },
  {
    command: "show interfaces",
    purpose:
      "Review detailed interface state and counters.",
  },
  {
    command: "show ip route connected",
    purpose:
      "Review directly connected IPv4 networks recognized by the router.",
  },
  {
    command: "show ip route",
    purpose:
      "Review the complete IPv4 routing table.",
  },
  {
    command: "show arp",
    purpose:
      "Review learned IPv4-to-MAC mappings on supported devices.",
  },
  {
    command: "ping 192.168.10.1",
    purpose:
      "Test Layer 3 reachability to a specific address.",
  },
  {
    command: "traceroute 192.168.30.10",
    purpose:
      "Observe the routed path toward a destination when supported.",
  },
];

const endpointInspection = [
  {
    platform: "Windows endpoint",
    command: "ipconfig /all",
    purpose:
      "Review assigned IPv4 address, subnet mask, gateway, DNS, DHCP state, and adapter details.",
  },
  {
    platform: "Linux endpoint",
    command: "ip addr",
    purpose:
      "Review assigned IPv4 and IPv6 addresses and interface state.",
  },
  {
    platform: "Linux endpoint",
    command: "ip route",
    purpose:
      "Review local routes and default gateway.",
  },
  {
    platform: "Packet Tracer PC",
    command: "Desktop > IP Configuration",
    purpose:
      "Review or configure simulated address, mask, gateway, and DNS values.",
  },
  {
    platform: "Packet Tracer PC",
    command: "Command Prompt > ipconfig",
    purpose:
      "Inspect addressing from the simulated endpoint command line.",
  },
  {
    platform: "Packet Tracer PC",
    command: "Command Prompt > ping <address>",
    purpose:
      "Test simulated IPv4 reachability.",
  },
];

const reasoningCases = [
  {
    finding: "Host 192.168.10.25/24 cannot reach 192.168.11.25/24",
    weak:
      "They both start with 192.168, so they should be local.",
    better:
      "With /24 masks they are on different networks: 192.168.10.0/24 and 192.168.11.0/24. Routing is required.",
  },
  {
    finding: "Host 10.1.1.65/26 cannot reach 10.1.1.126/26",
    weak:
      "They are in different halves because the numbers are far apart.",
    better:
      "A /26 block from 64 through 127 includes both addresses, so they are in the same subnet.",
  },
  {
    finding: "A workstation uses 192.168.50.0/24",
    weak:
      "The address looks normal because it is in the right range.",
    better:
      "192.168.50.0 is the network address for that /24 and should not be assigned to an ordinary host.",
  },
  {
    finding: "A gateway is 192.168.10.254 instead of 192.168.10.1",
    weak:
      "Change it to .1 because gateways always use the first usable address.",
    better:
      "Gateways can use any valid address selected by the design. Verify the router interface and scenario before changing it.",
  },
  {
    finding: "A host has 169.254.20.14",
    weak:
      "The host must be compromised.",
    better:
      "A link-local address often indicates missing DHCP or manual configuration. Investigate addressing and DHCP first.",
  },
  {
    finding: "The router and host have the same subnet mask",
    weak:
      "They must be on the same subnet.",
    better:
      "The mask length alone is not enough. Calculate the network ID for both addresses.",
  },
];

const binaryExamples = [
  {
    decimal: "192",
    binary: "11000000",
    breakdown: "128 + 64",
  },
  {
    decimal: "168",
    binary: "10101000",
    breakdown: "128 + 32 + 8",
  },
  {
    decimal: "224",
    binary: "11100000",
    breakdown: "128 + 64 + 32",
  },
  {
    decimal: "240",
    binary: "11110000",
    breakdown: "128 + 64 + 32 + 16",
  },
  {
    decimal: "248",
    binary: "11111000",
    breakdown: "128 + 64 + 32 + 16 + 8",
  },
  {
    decimal: "252",
    binary: "11111100",
    breakdown: "128 + 64 + 32 + 16 + 8 + 4",
  },
];

const highRiskMistakes = [
  {
    mistake: "Guessing subnets from decimal appearance",
    risk:
      "Addresses that look close can be in different subnets, and addresses that look far apart can still share one subnet.",
  },
  {
    mistake: "Assuming every network uses /24",
    risk:
      "Competition networks can use many prefix lengths. A wrong mask changes the host's idea of what is local.",
  },
  {
    mistake: "Assuming the gateway must end in .1",
    risk:
      "Can break working routing by replacing a valid gateway with an invented convention.",
  },
  {
    mistake: "Assigning the network or broadcast address to a host",
    risk:
      "Traditional IPv4 subnetting reserves those addresses for subnet identity and broadcast.",
  },
  {
    mistake: "Changing router and host addresses at the same time",
    risk:
      "Makes it harder to identify the original fault and can create new reachability problems.",
  },
  {
    mistake: "Ignoring the return path",
    risk:
      "Traffic can leave the source correctly but fail because the destination or router does not know how to send the response back.",
  },
];

const verificationChecklist = [
  {
    area: "Host address",
    check:
      "The endpoint uses the intended IPv4 address and does not duplicate another device.",
  },
  {
    area: "Subnet mask",
    check:
      "The prefix length matches the network design and produces the intended network ID.",
  },
  {
    area: "Gateway",
    check:
      "The configured gateway is a valid reachable address in the host's local subnet.",
  },
  {
    area: "Router interface",
    check:
      "The connected router or Layer 3 interface uses the intended address and mask and is operational.",
  },
  {
    area: "Connected route",
    check:
      "The router recognizes the expected connected subnet.",
  },
  {
    area: "End-to-end reachability",
    check:
      "Local peers, gateway, remote networks, and required services respond as expected.",
  },
];

const practiceProblems = [
  {
    prompt: "Host: 192.168.10.78/26",
    answer:
      "Network 192.168.10.64, broadcast 192.168.10.127, usable 192.168.10.65-126.",
  },
  {
    prompt: "Host: 192.168.10.130/25",
    answer:
      "Network 192.168.10.128, broadcast 192.168.10.255, usable 192.168.10.129-254.",
  },
  {
    prompt: "Host: 10.0.5.33/27",
    answer:
      "Network 10.0.5.32, broadcast 10.0.5.63, usable 10.0.5.33-62.",
  },
  {
    prompt: "Host: 172.16.4.200/28",
    answer:
      "Network 172.16.4.192, broadcast 172.16.4.207, usable 172.16.4.193-206.",
  },
  {
    prompt: "Hosts: 192.168.50.14/28 and 192.168.50.15/28",
    answer:
      "The first is a usable host; the second is the broadcast address for 192.168.50.0/28.",
  },
  {
    prompt: "Hosts: 10.1.1.6/30 and 10.1.1.5/30",
    answer:
      "Both are usable hosts in network 10.1.1.4/30.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Use a fictional topology with VLAN 10 Staff, VLAN 20 Students, VLAN 30 Servers, and VLAN 99 Management.",
  },
  {
    step: "02",
    task:
      "Review the addressing plan before changing anything: Staff 192.168.10.0/26, Students 192.168.20.0/25, Servers 192.168.30.0/27, Management 192.168.99.0/28.",
  },
  {
    step: "03",
    task:
      "For each subnet, calculate the network address, broadcast address, usable range, and maximum traditional usable host count.",
  },
  {
    step: "04",
    task:
      "Inspect four fictional endpoints and identify one wrong mask, one invalid host address, one incorrect gateway, and one correct configuration.",
  },
  {
    step: "05",
    task:
      "Use show ip interface brief and show ip route on the router to compare Layer 3 interface addressing with the endpoint plan.",
  },
  {
    step: "06",
    task:
      "Correct only the confirmed fictional addressing errors and document the original values.",
  },
  {
    step: "07",
    task:
      "Verify each endpoint can reach its local gateway and required remote server.",
  },
  {
    step: "08",
    task:
      "Use the final addressing table to explain why each required communication is local or routed.",
  },
];

const checklist = [
  "I understand that an IPv4 address contains network and host portions.",
  "I can explain the relationship between a subnet mask and CIDR prefix length.",
  "I recognize common private, loopback, link-local, multicast, and broadcast ranges.",
  "I can identify network and broadcast addresses for common prefixes.",
  "I can identify the usable host range in a traditional IPv4 subnet.",
  "I can use the block-size method for /25 through /30 examples.",
  "I can determine whether two hosts are on the same subnet.",
  "I understand that the default gateway must be reachable on the local subnet.",
  "I do not assume every gateway is .1 or every network is /24.",
  "I can inspect addressing on Cisco devices and endpoints before making changes.",
  "I can recognize common symptoms of wrong address, mask, gateway, or DHCP configuration.",
  "I verify local, gateway, remote, and service reachability after addressing changes.",
];

const reflection = [
  "Why can two addresses that look numerically close still be in different subnets?",
  "What does the /27 in 192.168.10.70/27 tell you?",
  "Why is the default gateway normally in the same local subnet as the host?",
  "What is the difference between a network address and a usable host address?",
  "Why can a wrong subnet mask break communication even when the IP address itself looks correct?",
  "What should you verify on the router after correcting a host's IPv4 configuration?",
];

export default function IPv4AddressingSubnetMasksPage() {
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
              href="/cyberpatriot/cisco-networking/networking-foundations-osi-model"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/subnetting-for-competition"
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
                Cisco & Networking · Lesson 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                IPv4 Addressing & Subnet Masks
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how IPv4 addresses, subnet masks, prefix lengths, network
                IDs, broadcast addresses, usable host ranges, and default
                gateways work together to define local and routed communication.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Correct addressing is the foundation for later subnetting,
                routing, VLAN, ACL, and troubleshooting work. The goal is to
                calculate and verify instead of guessing from how an address looks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>IPv4 bits</span>
                  <span className="font-bold text-white">32</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Common masks</span>
                  <span className="font-bold text-white">13</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Address categories</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Calculate, then verify</span>
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
            Read IPv4 addressing as network structure
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
              The mask gives the address meaning
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The same IPv4 address can belong to different-sized networks
              depending on its subnet mask. Never decide the subnet from the
              address alone.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition trap
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not assume /24 or gateway .1
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Those are common conventions, not universal rules. Use the scenario,
              device configuration, and actual mask to determine the intended design.
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
            Six pieces of IPv4 subnet reasoning
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
            Binary foundation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Every IPv4 octet is eight binary bits
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
            {octetValues.map((item) => (
              <div
                key={item.bit}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center"
              >
                <p className="text-2xl font-black text-cyan-300">{item.bit}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.13em] text-slate-300">
                  {item.position}
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {binaryExamples.map((item) => (
              <div
                key={item.decimal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-black text-white">
                    {item.decimal}
                  </span>
                  <code className="text-base font-bold text-cyan-200">
                    {item.binary}
                  </code>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.breakdown}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            CIDR and masks
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Common prefix lengths to recognize quickly
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Prefix</th>
                  <th className="px-4 py-3 font-black">Subnet mask</th>
                  <th className="px-4 py-3 font-black">Total block</th>
                  <th className="px-4 py-3 font-black">Traditional usable hosts</th>
                </tr>
              </thead>
              <tbody>
                {maskTable.map((item) => (
                  <tr
                    key={item.prefix}
                    className="border-b border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-3 font-black text-white">
                      {item.prefix}
                    </td>
                    <td className="px-4 py-3 font-mono text-cyan-200">
                      {item.mask}
                    </td>
                    <td className="px-4 py-3">{item.block}</td>
                    <td className="px-4 py-3 text-slate-400">
                      {item.usable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm font-black text-white">
              Traditional host formula
            </p>
            <code className="mt-3 block text-cyan-200">
              usable hosts = 2^(host bits) - 2
            </code>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              This traditional formula reserves the all-zero host value for the
              network address and the all-one host value for broadcast. Special
              point-to-point designs can use different standards, but traditional
              competition subnet questions usually follow this model.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Address categories
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Recognize addresses that have special meaning
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {addressCategories.map((item) => (
              <div
                key={item.range}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.range}
                </code>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.category}
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
            Same subnet?
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Compare network IDs, not visual similarity
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {sameSubnetMethod.map((item) => (
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
            Worked subnet examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Find network, broadcast, and usable range
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {exampleSubnets.map((item) => (
              <div
                key={item.address}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <code className="text-lg font-black text-cyan-200">
                  {item.address}
                </code>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Network
                    </span>
                    <p className="mt-2 font-mono text-sm text-white">
                      {item.network}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Broadcast
                    </span>
                    <p className="mt-2 font-mono text-sm text-white">
                      {item.broadcast}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Usable
                    </span>
                    <p className="mt-2 font-mono text-sm text-white">
                      {item.usable}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.reasoning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Block-size shortcut
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Find subnet boundaries quickly in the changing octet
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blockSizeMethod.map((item) => (
              <div
                key={item.prefix}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xl font-black text-white">
                    {item.prefix}
                  </span>
                  <span className="text-sm font-bold text-cyan-300">
                    Mask octet {item.interestingMask}
                  </span>
                </div>
                <code className="mt-4 block text-cyan-200">
                  {item.blockSize}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Starts: {item.starts}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Default gateway
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            The local next hop for remote networks
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {gatewayConcepts.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Cisco inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Verify the Layer 3 device state
            </h2>

            <div className="mt-6 grid gap-3">
              {ciscoInspection.map((item) => (
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
              Endpoint inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Verify what the host actually believes
            </h2>

            <div className="mt-6 grid gap-3">
              {endpointInspection.map((item) => (
                <div
                  key={`${item.platform}-${item.command}`}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    {item.platform}
                  </p>
                  <code className="mt-2 block overflow-x-auto text-sm text-cyan-200">
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
            Addressing symptoms
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use the symptom to narrow the likely cause
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hostConfigProblems.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.likelyAreas}
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
            Calculate before changing
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
            Addressing shortcuts that create bad fixes
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Practice
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Work through common subnet examples
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceProblems.map((item) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.prompt}
                </code>
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
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the addressing works in the real path
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
            Audit a fictional IPv4 addressing plan
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
                Every IPv4 decision starts with the address and mask together.
                Calculate the network boundary, confirm the gateway and router
                state, then verify real connectivity instead of relying on conventions.
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
              href="/cyberpatriot/cisco-networking/networking-foundations-osi-model"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/subnetting-for-competition"
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
