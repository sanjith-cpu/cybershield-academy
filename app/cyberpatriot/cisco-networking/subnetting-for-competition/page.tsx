import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use subnetting to design or verify IPv4 network boundaries instead of relying on memorized guesses.",
  "Calculate subnet count, addresses per subnet, traditional usable hosts, network addresses, and broadcast addresses.",
  "Choose an appropriate prefix length for a required number of hosts.",
  "Use the block-size method to identify subnet boundaries quickly.",
  "Compare equal-size subnetting with variable-length subnetting and explain when each is useful.",
  "Recognize common subnetting mistakes that cause overlap, wasted space, or unreachable hosts.",
];

const coreIdeas = [
  {
    title: "Subnetting",
    text:
      "Subnetting divides a larger IPv4 network into smaller logical networks so addressing, routing, security, and broadcast scope can be controlled.",
  },
  {
    title: "Prefix length",
    text:
      "The prefix length tells you how many IPv4 bits belong to the network portion. A longer prefix creates smaller subnets.",
  },
  {
    title: "Host bits",
    text:
      "The remaining bits define the size of each subnet. More host bits means a larger address block.",
  },
  {
    title: "Block size",
    text:
      "The number of addresses in one subnet. In the changing octet, block size can be found with 256 minus the subnet-mask value.",
  },
  {
    title: "Subnet boundary",
    text:
      "The starting network address of each block. Correct boundaries prevent overlap and invalid host assignments.",
  },
  {
    title: "VLSM",
    text:
      "Variable Length Subnet Masking uses different prefix lengths inside one addressing plan so each network receives an appropriately sized block.",
  },
];

const formulas = [
  {
    label: "Total addresses in a subnet",
    formula: "2^(host bits)",
    example: "/27 leaves 5 host bits, so 2^5 = 32 total addresses",
  },
  {
    label: "Traditional usable host addresses",
    formula: "2^(host bits) - 2",
    example: "/27 gives 32 total addresses and 30 traditional usable hosts",
  },
  {
    label: "Number of equal-size subnets",
    formula: "2^(borrowed bits)",
    example: "Borrowing 3 bits from a /24 creates 2^3 = 8 equal-size /27 subnets",
  },
  {
    label: "Block size in the changing octet",
    formula: "256 - mask value",
    example: "255.255.255.224 -> 256 - 224 = 32",
  },
  {
    label: "Prefix from host requirement",
    formula: "Choose host bits where 2^h - 2 >= required hosts",
    example: "For 50 hosts, 6 host bits gives 62 usable, so use /26",
  },
];

const prefixReference = [
  { prefix: "/24", mask: "255.255.255.0", total: "256", usable: "254", block: "256" },
  { prefix: "/25", mask: "255.255.255.128", total: "128", usable: "126", block: "128" },
  { prefix: "/26", mask: "255.255.255.192", total: "64", usable: "62", block: "64" },
  { prefix: "/27", mask: "255.255.255.224", total: "32", usable: "30", block: "32" },
  { prefix: "/28", mask: "255.255.255.240", total: "16", usable: "14", block: "16" },
  { prefix: "/29", mask: "255.255.255.248", total: "8", usable: "6", block: "8" },
  { prefix: "/30", mask: "255.255.255.252", total: "4", usable: "2", block: "4" },
];

const blockBoundaryExamples = [
  {
    prefix: "/25",
    mask: "255.255.255.128",
    boundaries: "0, 128",
    example:
      "192.168.10.0/25 covers .0-.127 and 192.168.10.128/25 covers .128-.255.",
  },
  {
    prefix: "/26",
    mask: "255.255.255.192",
    boundaries: "0, 64, 128, 192",
    example:
      "An address ending in .150 belongs to the .128-.191 block.",
  },
  {
    prefix: "/27",
    mask: "255.255.255.224",
    boundaries: "0, 32, 64, 96, 128, 160, 192, 224",
    example:
      "An address ending in .94 belongs to the .64-.95 block.",
  },
  {
    prefix: "/28",
    mask: "255.255.255.240",
    boundaries: "0, 16, 32, 48, 64, 80, 96, 112, ...",
    example:
      "An address ending in .118 belongs to the .112-.127 block.",
  },
  {
    prefix: "/29",
    mask: "255.255.255.248",
    boundaries: "0, 8, 16, 24, 32, 40, ...",
    example:
      "An address ending in .42 belongs to the .40-.47 block.",
  },
  {
    prefix: "/30",
    mask: "255.255.255.252",
    boundaries: "0, 4, 8, 12, 16, 20, ...",
    example:
      "An address ending in .22 belongs to the .20-.23 block.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Read the requirement",
    text:
      "Identify how many networks are needed and how many hosts each network must support.",
  },
  {
    step: "02",
    title: "Start from the available address block",
    text:
      "Confirm the parent network and prefix before dividing it.",
  },
  {
    step: "03",
    title: "Choose the needed subnet size",
    text:
      "Find the smallest block that still provides enough usable host addresses.",
  },
  {
    step: "04",
    title: "Calculate block boundaries",
    text:
      "Use the prefix and mask to determine valid network starts.",
  },
  {
    step: "05",
    title: "Assign network, host range, and broadcast",
    text:
      "Document all three for every subnet instead of recording only the prefix.",
  },
  {
    step: "06",
    title: "Check for overlap",
    text:
      "Make sure no subnet consumes addresses already assigned to another subnet.",
  },
  {
    step: "07",
    title: "Verify gateway and endpoint fit",
    text:
      "Confirm every assigned interface or host address lies inside the intended usable range.",
  },
  {
    step: "08",
    title: "Test routing and reachability",
    text:
      "After configuration, verify local gateways, routes, and end-to-end traffic.",
  },
];

const hostRequirementExamples = [
  {
    requirement: "100 hosts",
    reasoning:
      "7 host bits gives 126 traditional usable hosts.",
    prefix: "/25",
    total: "128 addresses",
  },
  {
    requirement: "50 hosts",
    reasoning:
      "6 host bits gives 62 traditional usable hosts.",
    prefix: "/26",
    total: "64 addresses",
  },
  {
    requirement: "25 hosts",
    reasoning:
      "5 host bits gives 30 traditional usable hosts.",
    prefix: "/27",
    total: "32 addresses",
  },
  {
    requirement: "12 hosts",
    reasoning:
      "4 host bits gives 14 traditional usable hosts.",
    prefix: "/28",
    total: "16 addresses",
  },
  {
    requirement: "5 hosts",
    reasoning:
      "3 host bits gives 6 traditional usable hosts.",
    prefix: "/29",
    total: "8 addresses",
  },
  {
    requirement: "2 hosts",
    reasoning:
      "2 host bits gives 2 traditional usable hosts.",
    prefix: "/30",
    total: "4 addresses",
  },
];

const equalSubnetExample = [
  {
    field: "Parent network",
    value: "192.168.50.0/24",
  },
  {
    field: "Goal",
    value: "Create 4 equal-size subnets",
  },
  {
    field: "Borrowed bits",
    value: "2 bits because 2^2 = 4 subnets",
  },
  {
    field: "New prefix",
    value: "/26",
  },
  {
    field: "Mask",
    value: "255.255.255.192",
  },
  {
    field: "Block size",
    value: "64 addresses",
  },
];

const equalSubnetResults = [
  {
    subnet: "Subnet 1",
    network: "192.168.50.0/26",
    usable: "192.168.50.1 - 192.168.50.62",
    broadcast: "192.168.50.63",
  },
  {
    subnet: "Subnet 2",
    network: "192.168.50.64/26",
    usable: "192.168.50.65 - 192.168.50.126",
    broadcast: "192.168.50.127",
  },
  {
    subnet: "Subnet 3",
    network: "192.168.50.128/26",
    usable: "192.168.50.129 - 192.168.50.190",
    broadcast: "192.168.50.191",
  },
  {
    subnet: "Subnet 4",
    network: "192.168.50.192/26",
    usable: "192.168.50.193 - 192.168.50.254",
    broadcast: "192.168.50.255",
  },
];

const vlsmNeeds = [
  {
    network: "Staff",
    hosts: "100",
    minimum: "/25",
    block: "128 addresses",
  },
  {
    network: "Students",
    hosts: "50",
    minimum: "/26",
    block: "64 addresses",
  },
  {
    network: "Servers",
    hosts: "20",
    minimum: "/27",
    block: "32 addresses",
  },
  {
    network: "Management",
    hosts: "10",
    minimum: "/28",
    block: "16 addresses",
  },
];

const vlsmPlan = [
  {
    network: "Staff",
    subnet: "10.10.0.0/25",
    usable: "10.10.0.1 - 10.10.0.126",
    broadcast: "10.10.0.127",
  },
  {
    network: "Students",
    subnet: "10.10.0.128/26",
    usable: "10.10.0.129 - 10.10.0.190",
    broadcast: "10.10.0.191",
  },
  {
    network: "Servers",
    subnet: "10.10.0.192/27",
    usable: "10.10.0.193 - 10.10.0.222",
    broadcast: "10.10.0.223",
  },
  {
    network: "Management",
    subnet: "10.10.0.224/28",
    usable: "10.10.0.225 - 10.10.0.238",
    broadcast: "10.10.0.239",
  },
];

const vlsmPrinciples = [
  {
    title: "Allocate largest first",
    text:
      "Start with the network that requires the most addresses so large blocks do not become fragmented by smaller assignments.",
  },
  {
    title: "Use valid boundaries",
    text:
      "A /26 cannot begin at any random address. It must begin on a 64-address boundary in the changing octet.",
  },
  {
    title: "Do not overlap",
    text:
      "Every address can belong to only one assigned subnet in a valid VLSM plan.",
  },
  {
    title: "Leave room intentionally",
    text:
      "Unused address space is not automatically a mistake. It can be reserved for growth or future networks.",
  },
  {
    title: "Document the whole plan",
    text:
      "Record each network, prefix, gateway, usable range, and broadcast so troubleshooting is not based on memory.",
  },
  {
    title: "Verify actual need",
    text:
      "Do not make a subnet larger or smaller than required without understanding the design reason.",
  },
];

const overlapExamples = [
  {
    first: "192.168.1.0/25",
    second: "192.168.1.64/26",
    result: "Overlap",
    reasoning:
      "The /25 covers .0-.127, so the /26 beginning at .64 sits inside the first subnet.",
  },
  {
    first: "192.168.1.0/26",
    second: "192.168.1.64/26",
    result: "No overlap",
    reasoning:
      "The first block is .0-.63 and the second is .64-.127.",
  },
  {
    first: "10.0.0.0/27",
    second: "10.0.0.32/28",
    result: "No overlap",
    reasoning:
      "The first ends at .31; the second starts at .32.",
  },
  {
    first: "10.0.0.32/27",
    second: "10.0.0.48/28",
    result: "Overlap",
    reasoning:
      "The /27 covers .32-.63, so the /28 starting at .48 is inside it.",
  },
];

const competitionChecks = [
  {
    check: "Does the host address belong to the documented subnet?",
    why:
      "A numerically similar address can still fall outside the valid block.",
  },
  {
    check: "Is the prefix consistent on both ends?",
    why:
      "Different masks can cause two hosts to disagree about whether traffic is local or routed.",
  },
  {
    check: "Is the gateway inside the same subnet as the host?",
    why:
      "The host must reach its next hop locally.",
  },
  {
    check: "Does the router interface use the intended subnet?",
    why:
      "An incorrect router prefix can create missing, overlapping, or unexpected connected routes.",
  },
  {
    check: "Do route entries match the actual subnet size?",
    why:
      "A route that is too broad or too narrow can send traffic incorrectly.",
  },
  {
    check: "Do ACL entries use the intended network range?",
    why:
      "Later policy work depends on accurate network boundaries.",
  },
];

const ciscoInspection = [
  {
    command: "show ip interface brief",
    purpose:
      "Check interface addressing and whether required interfaces are operational.",
  },
  {
    command: "show running-config | section interface",
    purpose:
      "Review configured IPv4 addresses and masks on interfaces.",
  },
  {
    command: "show ip route connected",
    purpose:
      "Confirm which connected networks the router currently recognizes.",
  },
  {
    command: "show ip route",
    purpose:
      "Compare connected, static, and learned routes against the subnet plan.",
  },
  {
    command: "show arp",
    purpose:
      "Check local IPv4-to-MAC mappings where supported.",
  },
  {
    command: "ping <gateway-or-host>",
    purpose:
      "Test IPv4 reachability after validating the address plan.",
  },
];

const reasoningCases = [
  {
    finding: "A /26 network is documented as starting at 192.168.1.96",
    weak:
      "Use it because .96 looks evenly spaced.",
    better:
      "A /26 has block size 64, so valid boundaries are .0, .64, .128, and .192. .96 is not a valid /26 network boundary.",
  },
  {
    finding: "A department needs 30 hosts",
    weak:
      "Use /28 because 28 is close to 30.",
    better:
      "A /28 provides only 14 traditional usable hosts. A /27 provides 30 and exactly meets the requirement.",
  },
  {
    finding: "Two subnet entries use 10.0.0.0/25 and 10.0.0.64/26",
    weak:
      "They are different prefixes, so they are separate.",
    better:
      "The /26 lies inside the /25 range. Different prefix lengths do not prevent overlap.",
  },
  {
    finding: "A network needs 33 hosts",
    weak:
      "Use /27 because it provides about 32 addresses.",
    better:
      "A /27 provides only 30 traditional usable hosts. The next appropriate size is /26 with 62 usable hosts.",
  },
  {
    finding: "A /24 is split into eight equal subnets",
    weak:
      "The new prefix is /27 because eight subnets sounds like 27.",
    better:
      "Eight subnets requires borrowing 3 bits because 2^3 = 8. /24 + 3 = /27.",
  },
  {
    finding: "A host is 192.168.1.127/26",
    weak:
      "It is usable because 127 is not 255.",
    better:
      "For the 192.168.1.64/26 block, .127 is the broadcast address and not a traditional usable host address.",
  },
];

const commonMistakes = [
  {
    mistake: "Using decimal closeness instead of block boundaries",
    risk:
      "Can place hosts in the wrong subnet or create invalid network starts.",
  },
  {
    mistake: "Forgetting network and broadcast addresses",
    risk:
      "Causes overestimation of traditional usable host capacity.",
  },
  {
    mistake: "Choosing a subnet that is exactly one total address count too small",
    risk:
      "A block with 32 total addresses does not provide 32 ordinary host addresses.",
  },
  {
    mistake: "Assigning smaller VLSM blocks first",
    risk:
      "Can fragment the available space and make later large allocations difficult or impossible.",
  },
  {
    mistake: "Ignoring overlapping subnets",
    risk:
      "Creates ambiguous routing and inconsistent host behavior.",
  },
  {
    mistake: "Changing addressing without updating routes or ACLs",
    risk:
      "Other parts of the network can continue referencing the old subnet boundaries.",
  },
];

const quickMentalRules = [
  {
    rule: "/25",
    memory:
      "128-address blocks, 126 traditional usable hosts.",
  },
  {
    rule: "/26",
    memory:
      "64-address blocks, 62 traditional usable hosts.",
  },
  {
    rule: "/27",
    memory:
      "32-address blocks, 30 traditional usable hosts.",
  },
  {
    rule: "/28",
    memory:
      "16-address blocks, 14 traditional usable hosts.",
  },
  {
    rule: "/29",
    memory:
      "8-address blocks, 6 traditional usable hosts.",
  },
  {
    rule: "/30",
    memory:
      "4-address blocks, 2 traditional usable hosts.",
  },
];

const practiceProblems = [
  {
    prompt: "Create 8 equal subnets from 192.168.100.0/24",
    answer:
      "Borrow 3 bits, producing /27 subnets with 32 addresses and 30 traditional usable hosts each.",
  },
  {
    prompt: "What subnet contains 192.168.20.77/27?",
    answer:
      "192.168.20.64/27, broadcast .95, usable .65-.94.",
  },
  {
    prompt: "What subnet contains 10.0.0.201/28?",
    answer:
      "10.0.0.192/28, broadcast .207, usable .193-.206.",
  },
  {
    prompt: "Smallest traditional subnet for 14 hosts?",
    answer:
      "/28, because it provides 14 traditional usable host addresses.",
  },
  {
    prompt: "Smallest traditional subnet for 15 hosts?",
    answer:
      "/27, because /28 provides only 14 usable addresses.",
  },
  {
    prompt: "Do 172.16.1.0/26 and 172.16.1.64/27 overlap?",
    answer:
      "No. The /26 covers .0-.63 and the /27 begins at .64.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Use fictional parent network 10.50.0.0/24 for a small CyberPatriot practice environment.",
  },
  {
    step: "02",
    task:
      "Requirements: Staff 60 hosts, Students 28 hosts, Servers 12 hosts, Management 6 hosts.",
  },
  {
    step: "03",
    task:
      "Choose the smallest traditional subnet for each requirement and order the allocations from largest to smallest.",
  },
  {
    step: "04",
    task:
      "Create a valid VLSM plan beginning at 10.50.0.0 and document network, prefix, usable range, and broadcast for every segment.",
  },
  {
    step: "05",
    task:
      "Choose one valid gateway address inside each subnet and explain why it is valid.",
  },
  {
    step: "06",
    task:
      "Compare the plan with a fictional router configuration and identify one incorrect interface mask.",
  },
  {
    step: "07",
    task:
      "Correct only the confirmed mask error, then verify connected routes and gateway reachability.",
  },
  {
    step: "08",
    task:
      "Check that the resulting plan has no overlap and that all required host counts still fit.",
  },
];

const verificationChecklist = [
  {
    area: "Parent block",
    check:
      "Every child subnet stays within the original network range.",
  },
  {
    area: "Boundary",
    check:
      "Every subnet begins on a valid boundary for its prefix length.",
  },
  {
    area: "Capacity",
    check:
      "Each subnet provides enough traditional usable addresses for the stated requirement.",
  },
  {
    area: "No overlap",
    check:
      "No two assigned subnets consume the same IPv4 address space.",
  },
  {
    area: "Gateway fit",
    check:
      "Each gateway is inside its subnet's usable range.",
  },
  {
    area: "Router state",
    check:
      "Connected routes match the intended network IDs and prefixes.",
  },
];

const checklist = [
  "I can calculate total addresses from the number of host bits.",
  "I can calculate traditional usable hosts for common subnet sizes.",
  "I can find block size using 256 minus the changing mask octet.",
  "I can identify valid subnet boundaries for /25 through /30.",
  "I can choose a prefix based on a required host count.",
  "I can split a /24 into equal-size subnets.",
  "I understand why VLSM allocates different block sizes to different networks.",
  "I allocate larger VLSM requirements before smaller ones.",
  "I can recognize overlapping subnet assignments.",
  "I remember that gateway addresses must fall inside the usable host range.",
  "I verify routes and interface masks after subnet changes.",
  "I document network, prefix, usable range, and broadcast for each subnet.",
];

const reflection = [
  "Why does a /27 provide 30 traditional usable hosts instead of 32?",
  "How do you determine whether .96 is a valid /26 network boundary?",
  "Why should VLSM normally allocate the largest requirement first?",
  "What is the difference between a subnet boundary and a usable host address?",
  "Why can overlapping subnets create routing problems?",
  "What other configurations should be reviewed when an existing subnet prefix changes?",
];

export default function SubnettingForCompetitionPage() {
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
              href="/cyberpatriot/cisco-networking/ipv4-addressing-subnet-masks"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/cisco-ios-cli-safe-navigation"
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
                Cisco & Networking · Lesson 04
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Subnetting for Competition
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Turn subnetting into a repeatable process for calculating block
                sizes, host capacity, subnet boundaries, equal-size networks,
                and VLSM plans without relying on guesswork.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                In competition work, subnetting affects router interfaces, VLAN
                gateways, routes, ACLs, DHCP scopes, and endpoint configuration.
                A single wrong prefix can make an otherwise correct network fail.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core formulas</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Common prefixes</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Workflow stages</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Fast, accurate subnet design</span>
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
            Build subnet plans you can defend and verify
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
              Subnetting is address-space planning
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              You are deciding where one network ends and the next begins. Every
              interface, gateway, route, and policy rule must agree with those
              boundaries.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A wrong prefix can look like many different problems
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Hosts may disagree about local traffic, routers may install the
              wrong connected route, and ACLs may match the wrong address range.
              Calculate first, then troubleshoot the rest.
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
            Six ideas behind every subnet calculation
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
            Core formulas
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use a small number of formulas consistently
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {formulas.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-4 block rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.formula}
                </code>
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
            Prefix reference
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Common subnet sizes to know quickly
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-300">
                  <th className="px-4 py-3 font-black">Prefix</th>
                  <th className="px-4 py-3 font-black">Mask</th>
                  <th className="px-4 py-3 font-black">Total addresses</th>
                  <th className="px-4 py-3 font-black">Traditional usable</th>
                  <th className="px-4 py-3 font-black">Block size</th>
                </tr>
              </thead>
              <tbody>
                {prefixReference.map((item) => (
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
                    <td className="px-4 py-3">{item.total}</td>
                    <td className="px-4 py-3">{item.usable}</td>
                    <td className="px-4 py-3 text-slate-400">{item.block}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Block boundaries
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Find valid network starts before assigning addresses
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blockBoundaryExamples.map((item) => (
              <div
                key={item.prefix}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xl font-black text-white">
                    {item.prefix}
                  </span>
                  <code className="text-sm text-cyan-200">{item.mask}</code>
                </div>
                <p className="mt-4 text-sm font-bold text-slate-300">
                  Boundaries: {item.boundaries}
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
            Competition workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight stages for safe subnet planning
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
            Host requirements
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Choose the smallest subnet that still fits
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hostRequirementExamples.map((item) => (
              <div
                key={item.requirement}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  Requirement
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {item.requirement}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reasoning}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="font-black text-cyan-200">{item.prefix}</span>
                  <span className="text-sm text-slate-300">{item.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Equal-size example
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Divide one /24 into four equal networks
            </h2>

            <div className="mt-6 grid gap-3">
              {equalSubnetExample.map((item) => (
                <div
                  key={item.field}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    {item.field}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Result
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Four non-overlapping /26 subnets
            </h2>

            <div className="mt-6 grid gap-3">
              {equalSubnetResults.map((item) => (
                <div
                  key={item.subnet}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-black text-white">{item.subnet}</h3>
                    <code className="text-sm text-cyan-200">{item.network}</code>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    Usable: {item.usable}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Broadcast: {item.broadcast}
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
            VLSM
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Different network sizes from one parent block
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                Requirements
              </p>
              <div className="mt-4 grid gap-3">
                {vlsmNeeds.map((item) => (
                  <div
                    key={item.network}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-black text-white">{item.network}</h3>
                      <span className="text-sm font-bold text-cyan-300">
                        {item.hosts} hosts
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Minimum {item.minimum} · {item.block}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                Valid allocation
              </p>
              <div className="mt-4 grid gap-3">
                {vlsmPlan.map((item) => (
                  <div
                    key={item.network}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-black text-white">{item.network}</h3>
                      <code className="text-sm text-cyan-200">{item.subnet}</code>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">
                      Usable: {item.usable}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Broadcast: {item.broadcast}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {vlsmPrinciples.map((item) => (
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
            Overlap detection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Make sure every address belongs to only one assigned subnet
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {overlapExamples.map((item) => (
              <div
                key={`${item.first}-${item.second}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block text-sm text-cyan-200">{item.first}</code>
                <code className="mt-2 block text-sm text-cyan-200">
                  {item.second}
                </code>
                <p
                  className={`mt-4 text-sm font-black ${
                    item.result === "Overlap"
                      ? "text-red-200"
                      : "text-emerald-200"
                  }`}
                >
                  {item.result}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
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
            Competition checks
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Subnet math must match the running network
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {competitionChecks.map((item) => (
              <div
                key={item.check}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.check}</h3>
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
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Compare the subnet plan with actual device state
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ciscoInspection.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm text-cyan-200">
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Subnet first, configure second
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
            Subnetting errors that create larger network problems
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonMistakes.map((item) => (
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
            Quick mental reference
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six subnet sizes worth recognizing instantly
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {quickMentalRules.map((item) => (
              <div
                key={item.rule}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-center"
              >
                <p className="text-2xl font-black text-cyan-300">{item.rule}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.memory}
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
            Work through competition-style subnet questions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceProblems.map((item) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-black text-white">{item.prompt}</p>
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
            Validate the math against the network
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
            Build and verify a fictional VLSM plan
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
                Subnetting is not separate from configuration. Every route,
                gateway, VLAN interface, ACL, and endpoint depends on the same
                network boundaries. Calculate them once, document them clearly,
                and verify that the running devices match.
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
              href="/cyberpatriot/cisco-networking/ipv4-addressing-subnet-masks"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/cisco-ios-cli-safe-navigation"
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
