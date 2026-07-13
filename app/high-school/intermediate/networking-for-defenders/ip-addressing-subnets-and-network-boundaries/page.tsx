import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/networking-for-defenders`;
const previousLesson =
  `${modulePath}/network-models-and-defensive-thinking`;
const nextLesson =
  `${modulePath}/ports-protocols-and-services`;

const objectives = [
  "Explain how IPv4 addresses, prefixes, subnet masks, gateways, and network boundaries work together.",
  "Identify whether two fictional IPv4 addresses belong to the same subnet using beginner-friendly prefix reasoning.",
  "Distinguish private, public, loopback, link-local, network, broadcast, and documentation-address concepts.",
  "Use address, DHCP, VLAN, route, and firewall evidence to explain a fictional network-boundary problem.",
  "Separate confirmed address facts from assumptions about user identity, device ownership, and application purpose.",
];

const vocabulary = [
  [
    "IPv4 address",
    "A 32-bit logical address commonly written as four decimal octets, such as 10.24.18.44.",
  ],
  [
    "Octet",
    "One eight-bit section of an IPv4 address. IPv4 addresses contain four octets.",
  ],
  [
    "Prefix length",
    "The number after the slash in CIDR notation, such as /24 or /26. It shows how many address bits identify the network portion.",
  ],
  [
    "Subnet mask",
    "A value that separates the network portion of an IPv4 address from the host portion.",
  ],
  [
    "Network address",
    "The first address in a subnet. It identifies the subnet itself rather than a normal endpoint.",
  ],
  [
    "Broadcast address",
    "The final IPv4 address in a traditional subnet, used for local broadcast communication rather than a normal endpoint.",
  ],
  [
    "Host address",
    "An address assigned to an endpoint or interface within a subnet.",
  ],
  [
    "Default gateway",
    "The router address a device normally uses to reach destinations outside its local subnet.",
  ],
  [
    "CIDR",
    "Classless Inter-Domain Routing notation, which writes an address and prefix together, such as 192.0.2.44/24.",
  ],
  [
    "Subnet",
    "A defined range of IP addresses that share the same network prefix.",
  ],
  [
    "Routing",
    "The process of selecting a path for traffic between different networks.",
  ],
  [
    "Boundary",
    "A point where traffic moves between subnets, VLANs, zones, environments, or trust levels.",
  ],
];

const addressTypes = [
  {
    title: "Private IPv4",
    examples: "10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16",
    meaning:
      "Used inside private networks. These addresses are not normally routed directly across the public internet.",
    defenderUse:
      "Helps identify internal address space, network zones, and expected local communication.",
  },
  {
    title: "Public IPv4",
    examples: "Globally routable address space assigned for internet communication",
    meaning:
      "Used for systems or gateways that communicate across public networks.",
    defenderUse:
      "Requires ownership, reputation, service, direction, and business-purpose context.",
  },
  {
    title: "Loopback",
    examples: "127.0.0.0/8 · commonly 127.0.0.1",
    meaning:
      "Refers back to the local device rather than another system.",
    defenderUse:
      "Useful when determining whether a service is intended to remain local to the host.",
  },
  {
    title: "Link-local",
    examples: "169.254.0.0/16",
    meaning:
      "May appear when an IPv4 device cannot obtain a normal address through automatic configuration.",
    defenderUse:
      "Can indicate a DHCP, connectivity, or configuration problem, but requires supporting evidence.",
  },
  {
    title: "Documentation ranges",
    examples:
      "192.0.2.0/24 · 198.51.100.0/24 · 203.0.113.0/24",
    meaning:
      "Reserved for examples and documentation rather than real production addressing.",
    defenderUse:
      "Safe for fictional lessons, diagrams, reports, labs, and portfolio artifacts.",
  },
];

const subnetExamples = [
  {
    subnet: "10.24.18.0/24",
    mask: "255.255.255.0",
    network: "10.24.18.0",
    usable: "10.24.18.1–10.24.18.254",
    broadcast: "10.24.18.255",
    note:
      "The first three octets identify the network. Addresses from .1 through .254 are normal host candidates.",
  },
  {
    subnet: "10.24.18.0/26",
    mask: "255.255.255.192",
    network: "10.24.18.0",
    usable: "10.24.18.1–10.24.18.62",
    broadcast: "10.24.18.63",
    note:
      "A /26 divides a /24 into blocks of 64 addresses. This is the first block.",
  },
  {
    subnet: "10.24.18.64/26",
    mask: "255.255.255.192",
    network: "10.24.18.64",
    usable: "10.24.18.65–10.24.18.126",
    broadcast: "10.24.18.127",
    note:
      "This is the second /26 block. It is a different subnet from 10.24.18.0/26.",
  },
  {
    subnet: "192.0.2.32/27",
    mask: "255.255.255.224",
    network: "192.0.2.32",
    usable: "192.0.2.33–192.0.2.62",
    broadcast: "192.0.2.63",
    note:
      "A /27 uses blocks of 32 addresses. This documentation subnet is safe for fictional examples.",
  },
];

const sameSubnetExamples = [
  {
    deviceA: "10.24.18.44/24",
    deviceB: "10.24.18.93/24",
    result: "Same subnet",
    reason:
      "Both addresses share the 10.24.18 network portion when the prefix is /24.",
  },
  {
    deviceA: "10.24.18.44/26",
    deviceB: "10.24.18.93/26",
    result: "Different subnets",
    reason:
      "10.24.18.44 belongs to 10.24.18.0/26, while 10.24.18.93 belongs to 10.24.18.64/26.",
  },
  {
    deviceA: "192.0.2.42/27",
    deviceB: "192.0.2.61/27",
    result: "Same subnet",
    reason:
      "Both addresses are inside the 192.0.2.32/27 range.",
  },
  {
    deviceA: "192.0.2.42/27",
    deviceB: "192.0.2.70/27",
    result: "Different subnets",
    reason:
      "192.0.2.42 is in 192.0.2.32/27, while 192.0.2.70 is in 192.0.2.64/27.",
  },
];

const evidenceSources = [
  {
    source: "DHCP lease",
    canShow:
      "A device identifier, assigned address, gateway, lease time, and sometimes network or scope context.",
    cannotProve:
      "That the expected person used the device for every action during the lease.",
  },
  {
    source: "Endpoint network settings",
    canShow:
      "The current address, mask or prefix, gateway, DNS settings, and interface state.",
    cannotProve:
      "That the route or remote service actually worked.",
  },
  {
    source: "Switch or VLAN record",
    canShow:
      "The local segment, switch port, interface, MAC address, or VLAN assignment.",
    cannotProve:
      "The complete application purpose or remote destination result.",
  },
  {
    source: "Router record",
    canShow:
      "A routing decision, next hop, interface, or missing path between networks.",
    cannotProve:
      "That the application accepted the user's request.",
  },
  {
    source: "Firewall record",
    canShow:
      "Source, destination, direction, service, rule decision, and zone context.",
    cannotProve:
      "The complete identity, intent, or application content by itself.",
  },
  {
    source: "Identity or inventory record",
    canShow:
      "Expected owner, device group, role, approved subnet, or business purpose.",
    cannotProve:
      "That the current address assignment or observed traffic is correct without technical evidence.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the interface",
    detail:
      "Confirm which fictional device and network interface generated the evidence.",
  },
  {
    step: "2",
    title: "Read the full address context",
    detail:
      "Record the IP address, prefix or mask, gateway, VLAN, zone, and timestamp.",
  },
  {
    step: "3",
    title: "Determine the local subnet",
    detail:
      "Identify the network address, expected host range, and broadcast boundary.",
  },
  {
    step: "4",
    title: "Compare the destination",
    detail:
      "Decide whether the destination is local or requires routing through a gateway.",
  },
  {
    step: "5",
    title: "Correlate supporting records",
    detail:
      "Connect DHCP, switch, route, firewall, endpoint, inventory, and change evidence.",
  },
  {
    step: "6",
    title: "Document the conclusion",
    detail:
      "State confirmed facts, likely explanation, uncertainty, owner, and authorized next action.",
  },
];

const mistakes = [
  "Comparing only the first three octets without checking the prefix length.",
  "Assuming every /24 and /26 has the same host range.",
  "Treating the network or broadcast address as a normal endpoint address.",
  "Assuming a private address identifies one specific person.",
  "Assuming a DHCP lease proves the current user or the application purpose.",
  "Confusing a VLAN identifier with an IP subnet even though they are related but different concepts.",
  "Changing subnet masks, gateways, routes, or firewall rules without authorization and rollback planning.",
  "Using real private diagrams, production addresses, or internal network records in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What does the /24 in 10.24.18.44/24 describe?",
    choices: [
      "The number of bits used for the network portion.",
      "The device's port number.",
      "The number of routers in the path.",
      "The user's permission level.",
    ],
    answer: 0,
    explanation:
      "CIDR prefix length identifies how many bits belong to the network portion.",
  },
  {
    question:
      "Which address is the network address for 10.24.18.44/24?",
    choices: [
      "10.24.18.0.",
      "10.24.18.44.",
      "10.24.18.1.",
      "10.24.18.255.",
    ],
    answer: 0,
    explanation:
      "For a /24, the final octet identifies hosts, so the network address ends in .0.",
  },
  {
    question:
      "Which pair belongs to different /26 subnets?",
    choices: [
      "10.24.18.44/26 and 10.24.18.93/26.",
      "10.24.18.12/26 and 10.24.18.44/26.",
      "10.24.18.70/26 and 10.24.18.110/26.",
      "10.24.18.130/26 and 10.24.18.190/26.",
    ],
    answer: 0,
    explanation:
      "A /26 uses ranges 0–63, 64–127, 128–191, and 192–255. The two addresses fall into the first and second ranges.",
  },
  {
    question:
      "What is the main role of a default gateway?",
    choices: [
      "To forward traffic toward destinations outside the local subnet.",
      "To assign every username.",
      "To store application passwords.",
      "To prove a destination is trustworthy.",
    ],
    answer: 0,
    explanation:
      "Devices usually send off-subnet traffic to the default gateway for routing.",
  },
  {
    question:
      "What may a 169.254.x.x address indicate?",
    choices: [
      "The device may not have received a normal IPv4 address and needs further DHCP or connectivity review.",
      "The device is definitely compromised.",
      "The website certificate expired.",
      "The user has administrator access.",
    ],
    answer: 0,
    explanation:
      "A link-local IPv4 address can appear when normal automatic address assignment does not succeed.",
  },
  {
    question:
      "Why can a DHCP lease not prove the identity of every user action?",
    choices: [
      "It links an address to a device context during a time window, but user and application evidence still require correlation.",
      "DHCP never records addresses.",
      "DHCP records only website content.",
      "Every device always has one permanent user.",
    ],
    answer: 0,
    explanation:
      "Address assignment is important evidence, but it is not complete identity or intent proof.",
  },
  {
    question:
      "What is the strongest response to a likely subnet or VLAN mismatch?",
    choices: [
      "Preserve evidence, compare approved design and change records, confirm ownership, and request an authorized correction and validation.",
      "Change the mask and gateway immediately.",
      "Disable the firewall.",
      "Assume the endpoint is malicious.",
    ],
    answer: 0,
    explanation:
      "Network changes should be evidence-based, authorized, documented, tested, and reversible.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Continue Module I1
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: I1.1 Network Models
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: I1.3 Ports, Protocols, and Services
        </Link>
      </div>
    </section>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function AddressTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Address Context
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        IPv4 Address Types Defenders Commonly Recognize
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {addressTypes.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.title}</h3>
            <p className="mt-2 font-mono text-sm text-blue-200">
              {item.examples}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defensive use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defenderUse}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubnetReference() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Subnet Reference
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read the Prefix Before Comparing Addresses
      </h2>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">
        The same IPv4 address can belong to different network ranges depending
        on its prefix length. Never decide whether addresses share a subnet by
        looking only at the first three octets.
      </p>

      <div className="mt-6 grid gap-4">
        {subnetExamples.map((item) => (
          <div
            key={item.subnet}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.7fr_0.8fr_0.8fr_1fr_0.8fr_1.4fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Subnet
              </p>
              <p className="mt-2 font-mono font-black text-cyan-100">
                {item.subnet}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Mask
              </p>
              <p className="mt-2 font-mono text-sm text-blue-200">
                {item.mask}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Network
              </p>
              <p className="mt-2 font-mono text-sm text-slate-200">
                {item.network}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Normal host range
              </p>
              <p className="mt-2 font-mono text-sm text-emerald-200">
                {item.usable}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Broadcast
              </p>
              <p className="mt-2 font-mono text-sm text-yellow-200">
                {item.broadcast}
              </p>
            </div>
            <p className="text-sm leading-6 text-slate-300">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SameSubnetPractice() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Guided Practice
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Do These Addresses Share a Local Subnet?
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sameSubnetExamples.map((item) => (
          <div
            key={`${item.deviceA}-${item.deviceB}`}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Address pair
            </p>
            <p className="mt-3 font-mono text-sm text-cyan-100">
              {item.deviceA}
            </p>
            <p className="mt-1 font-mono text-sm text-cyan-100">
              {item.deviceB}
            </p>
            <p
              className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.15em] ${
                item.result === "Same subnet"
                  ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                  : "border border-yellow-400/30 bg-yellow-400/10 text-yellow-200"
              }`}
            >
              {item.result}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceLimits() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Address Evidence Is Powerful but Incomplete
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceSources.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.canShow}
              </p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Cannot prove alone
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.cannotProve}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BoundaryWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Address and Boundary Problems in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function IpAddressingSubnetsAndBoundariesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.2 IP Addressing, Subnets, and Network Boundaries
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Read fictional IPv4 address context, compare subnet boundaries,
            identify local and routed communication, and correlate DHCP, VLAN,
            route, firewall, inventory, and change evidence.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I1: Networking for Defenders"
          lessonTitle="IP Addressing, Subnets, and Network Boundaries"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that IPv4 addresses are logical network addresses rather than permanent proof of one person.",
            "I can explain the basic purpose of a router, gateway, DHCP service, VLAN, and firewall.",
            "I will read the prefix length before deciding whether two addresses share a subnet.",
            "I will use only fictional addresses, diagrams, logs, devices, users, organizations, and change records.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Two Devices Can Look Almost Identical but Still Be Separated by a Network Boundary"
        >
          <p className="leading-8">
            A device at 10.24.18.44 and another at 10.24.18.93 appear similar.
            With a /24 prefix, they are local neighbors. With a /26 prefix, they
            belong to different subnets and may require a gateway, routing
            decision, firewall rule, and approved trust path. Intermediate
            defenders read the entire address context before making a
            conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The first three octets match, so the devices must be on the
                same subnet.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Check both addresses, prefix lengths, network ranges, VLANs,
                gateways, routes, firewall zones, and timestamps.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Address Context Connects Devices to Networks, Boundaries, Routes, and Controls"
        >
          <p className="leading-8">
            Defenders use address context to understand where a device belongs,
            whether a destination is local or remote, which gateway should carry
            the traffic, which firewall zone should apply, and which evidence
            sources should be correlated. A single IP address is not a complete
            identity, but it is an important part of a larger evidence chain.
          </p>
        </SectionCard>

        <AddressTypeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="An IPv4 Address Has a Network Portion and a Host Portion"
        >
          <p className="leading-8">
            The prefix length determines how much of the address identifies the
            subnet. In 10.24.18.44/24, the first 24 bits identify the network.
            In 10.24.18.44/26, more bits identify the network, creating smaller
            address ranges and more boundaries.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                Address
              </p>
              <p className="mt-3 font-mono text-xl font-black text-white">
                10.24.18.44
              </p>
              <p className="mt-2 text-sm leading-6 text-cyan-50">
                Identifies a fictional interface within an address range.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Prefix
              </p>
              <p className="mt-3 font-mono text-xl font-black text-white">
                /26
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Defines how many bits identify the subnet.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Gateway
              </p>
              <p className="mt-3 font-mono text-xl font-black text-white">
                10.24.18.1
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                Carries approved traffic toward destinations outside the local
                subnet.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate Addressing and Boundary Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <SubnetReference />
        <SameSubnetPractice />
        <EvidenceLimits />
        <BoundaryWorkflow />

        <FakeDashboardCard
          title="Fake Address and Boundary Dashboard"
          subtitle="Training dashboard for the fictional Harborview Learning Network. It compares expected device placement with observed DHCP, VLAN, gateway, and firewall evidence."
          metrics={[
            {
              label: "Expected subnet",
              value: "10.44.20.0/26",
              note: "Student media devices should use the first /26 block and the student-media gateway.",
            },
            {
              label: "Observed address",
              value: "10.44.20.93/26",
              note: "The device is actually inside the second /26 block: 10.44.20.64/26.",
            },
            {
              label: "Observed zone",
              value: "Guest",
              note: "Firewall records classify the address into the guest zone instead of student-media.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Media Device Appears in the Wrong Subnet"
          severity="Medium"
          time="10:22 AM"
          source="Fake Network Configuration Monitor"
          details="A fictional managed device expected in 10.44.20.0/26 received 10.44.20.93/26 after a DHCP scope update. Its approved upload traffic is denied by the guest-zone policy."
          recommendation="Preserve address, DHCP, VLAN, firewall, inventory, and change records; verify the intended scope and request an authorized correction with validation and rollback."
        />

        <FakeLogPanel
          title="Fake Subnet Boundary Evidence Timeline"
          logs={[
            "10:13:02 INVENTORY device='media-lab-08' expected_subnet='10.44.20.0/26' expected_vlan='220'",
            "10:14:10 DHCP device='media-lab-08' address='10.44.20.93' prefix='/26' gateway='10.44.20.65'",
            "10:14:12 SWITCH device='media-lab-08' observed_vlan='220' port='access-08'",
            "10:14:30 DNS query='uploads.media-training.test' result='192.0.2.80'",
            "10:14:32 FIREWALL source='10.44.20.93' source_zone='guest' destination='192.0.2.80' service='https' action='deny'",
            "10:16:04 CHANGE title='DHCP scope split for media lab' status='approved'",
            "10:18:25 DESIGN vlan='220' intended_subnet='10.44.20.0/26' intended_gateway='10.44.20.1'",
            "10:22:09 CORRELATION finding='address assigned from incorrect /26 scope' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Boundary Explanation Is Best Supported?"
          evidence={[
            "The fictional device inventory expects subnet 10.44.20.0/26 and gateway 10.44.20.1.",
            "DHCP assigned 10.44.20.93/26 and gateway 10.44.20.65.",
            "10.44.20.93 belongs to 10.44.20.64/26 rather than 10.44.20.0/26.",
            "The switch record shows the expected VLAN 220.",
            "The firewall classifies the assigned address in the guest zone and denies approved HTTPS traffic.",
            "An approved DHCP scope-split change occurred shortly before the issue.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "A likely DHCP scope or subnet-mapping error placed the device in the wrong /26 range; preserve evidence, confirm the approved design, and have the responsible owner correct and validate the scope.",
            "The switch VLAN is definitely wrong because the upload failed.",
            "DNS is broken because the destination is outside the local subnet.",
            "Disable the guest-zone firewall policy immediately.",
          ]}
          bestAnswer={0}
          explanation="The address and gateway belong to the second /26 block, while the design expects the first. The switch VLAN is correct, DNS succeeded, and the firewall response matches the observed address context. Correction still requires authorization, documentation, testing, and rollback."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Address and Subnet Analysis"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build a Fictional Subnet and Trust-Boundary Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Summit Arts Academy
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional school uses separate /27 documentation subnets for
                media devices, staff devices, guest devices, and servers. A new
                device receives an unexpected address after a DHCP change, and
                an approved internal service becomes unreachable.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Label each fictional subnet, prefix, normal host range, and gateway.</li>
                <li>Identify the network and broadcast addresses.</li>
                <li>Determine whether each communication path is local or routed.</li>
                <li>Connect DHCP, VLAN, route, firewall, inventory, and change evidence.</li>
                <li>State what the IP evidence confirms and what remains uncertain.</li>
                <li>Recommend an authorized correction and validation plan.</li>
                <li>Document rollback and post-change monitoring steps.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use documentation address ranges and fictional diagrams only. Do
            not include real school, home, company, cloud, or public network
            addresses or configurations.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Device Receives a Link-Local Address"
          scenario="A fictional lab device shows 169.254.22.18, has no normal gateway, and cannot reach the approved learning portal. Nearby managed devices received expected private addresses from DHCP."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the settings and DHCP evidence, verify interface and VLAN context, and escalate a likely address-assignment or connectivity problem.",
              outcome:
                "Best defensive choice. The link-local address suggests the normal assignment process may not have succeeded, but the exact cause still requires evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude the device is infected because it has a 169.254 address.",
              outcome:
                "Unsupported. Link-local addressing can result from normal configuration or DHCP problems.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assign a random static address from another device's subnet.",
              outcome:
                "Unsafe. Address changes require approved design, ownership, documentation, and conflict checks.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Address Is Valid, but the Gateway Is Outside the Local Subnet"
          scenario="A fictional device has 192.0.2.42/27 but lists 192.0.2.97 as its gateway. The local subnet is 192.0.2.32/27, and the approved gateway should be 192.0.2.33."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the invalid gateway relationship, compare DHCP and approved design records, and request an authorized correction.",
              outcome:
                "Best defensive choice. 192.0.2.97 is outside the device's local /27 subnet, so the gateway setting is inconsistent with the design.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the remote website is malicious.",
              outcome:
                "Weak reasoning. The local gateway configuration should be reviewed first.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable subnetting so every device becomes local.",
              outcome:
                "Unsafe and technically unsound. Network design changes require authority and careful planning.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="IP Addressing and Boundary Review Checklist"
          items={[
            "I record the full fictional IPv4 address, prefix or mask, gateway, interface, VLAN, zone, and timestamp.",
            "I identify the network address, normal host range, and broadcast boundary.",
            "I determine whether the destination is local or requires routing.",
            "I compare addresses using the prefix length rather than appearance alone.",
            "I distinguish private, public, loopback, link-local, and documentation-address concepts.",
            "I correlate DHCP, endpoint, switch, VLAN, router, firewall, inventory, identity, and change records.",
            "I treat IP evidence as one part of identity and activity context rather than complete proof.",
            "I separate confirmed facts, likely explanation, missing evidence, and uncertainty.",
            "I recommend only authorized, documented, tested, reversible, and validated changes.",
            "I use fictional or documentation address ranges rather than real network information.",
          ]}
        />

        <MiniQuiz
          title="I1.2 Mini Quiz: IP Addressing, Subnets, and Boundaries"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Network Boundary Review using documentation address ranges. Include at least four subnets, prefix lengths, network addresses, normal host ranges, gateways, VLAN or zone labels, trust boundaries, approved communication paths, and one fictional misconfiguration. Add an evidence table showing what DHCP, switch, route, firewall, inventory, and change records confirm and cannot prove alone."
          tips={[
            "Use documentation ranges such as 192.0.2.0/24, 198.51.100.0/24, or 203.0.113.0/24.",
            "Show at least one /24, /26, or /27 comparison clearly.",
            "Include confirmed facts, uncertainty, owner, recommended action, validation, and rollback.",
            "Do not use real home, school, company, cloud, VPN, or public network details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "The prefix length determines the boundary between the network and host portions of an IPv4 address.",
            "Addresses that look similar may belong to different subnets when the prefix changes.",
            "Default gateways carry approved traffic toward destinations outside the local subnet.",
            "DHCP, switch, route, firewall, inventory, identity, and change evidence must be correlated.",
            "An IP address is useful technical evidence but does not prove a complete user identity or business purpose by itself.",
            "Network changes should be authorized, documented, tested, reversible, and validated.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}