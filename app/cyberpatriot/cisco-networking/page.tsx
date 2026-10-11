import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "01",
    title: "Cisco Competition Workflow",
    focus:
      "Translate the overall CyberPatriot strategy into a safe Cisco and networking workflow built around topology review, baseline inspection, controlled configuration, and verification.",
    lab:
      "Review a fictional Packet Tracer network, identify required devices and services, and organize findings before making changes.",
  },
  {
    number: "02",
    title: "Networking Foundations & the OSI Model",
    focus:
      "Understand hosts, switches, routers, frames, packets, protocols, ports, and the OSI/TCP-IP models as practical troubleshooting tools.",
    lab:
      "Trace a fictional web request from client to server and identify what happens at each layer.",
  },
  {
    number: "03",
    title: "IPv4 Addressing & Subnet Masks",
    focus:
      "Read IPv4 addresses, network portions, host portions, subnet masks, default gateways, and private address ranges.",
    lab:
      "Classify addresses from a fictional network and identify incorrect host addressing.",
  },
  {
    number: "04",
    title: "Subnetting for Competition",
    focus:
      "Calculate network IDs, broadcast addresses, usable ranges, prefix lengths, and host capacity without relying on guesswork.",
    lab:
      "Solve a set of fictional subnet requirements and verify each result.",
  },
  {
    number: "05",
    title: "Cisco IOS CLI & Safe Navigation",
    focus:
      "Use user EXEC, privileged EXEC, global configuration, interface configuration, show commands, help, history, and safe save/review habits.",
    lab:
      "Navigate a fictional Cisco device, collect a baseline, and identify which commands inspect versus modify.",
  },
  {
    number: "06",
    title: "Switching, MAC Tables & Ethernet",
    focus:
      "Understand Ethernet frames, MAC learning, flooding, forwarding, collision domains, broadcast domains, and switch behavior.",
    lab:
      "Use fictional switch output to explain how traffic moves between hosts.",
  },
  {
    number: "07",
    title: "VLANs & Access Ports",
    focus:
      "Use VLANs to separate broadcast domains and assign access ports according to network requirements.",
    lab:
      "Review a fictional switch and correct VLAN membership while preserving required endpoints.",
  },
  {
    number: "08",
    title: "Trunks, Native VLANs & 802.1Q",
    focus:
      "Understand tagged traffic, trunks, allowed VLANs, native VLAN behavior, and how trunk mistakes break connectivity.",
    lab:
      "Troubleshoot a fictional inter-switch trunk without opening unnecessary VLAN access.",
  },
  {
    number: "09",
    title: "Inter-VLAN Routing",
    focus:
      "Understand router-on-a-stick, switched virtual interfaces, gateways, and how Layer 3 routing connects VLANs.",
    lab:
      "Trace traffic between two fictional VLANs and identify the missing routing component.",
  },
  {
    number: "10",
    title: "Switch Port Security",
    focus:
      "Review access ports, unused ports, port security concepts, sticky MAC behavior, violation modes, and safe shutdown decisions.",
    lab:
      "Harden a fictional access switch while preserving required user devices.",
  },
  {
    number: "11",
    title: "Router Interfaces & Static Routing",
    focus:
      "Inspect router interfaces, connected networks, routing tables, default routes, and static route behavior.",
    lab:
      "Repair a fictional routing path using evidence from interfaces and route tables.",
  },
  {
    number: "12",
    title: "Routing Concepts & Dynamic Protocol Awareness",
    focus:
      "Understand route selection, administrative distance, metrics, and the purpose of common dynamic routing protocols without forcing one protocol everywhere.",
    lab:
      "Interpret a fictional routing table and determine why one path is preferred.",
  },
  {
    number: "13",
    title: "Access Control Lists",
    focus:
      "Understand standard and extended ACL logic, direction, placement, implicit deny, sequence, and verification.",
    lab:
      "Review a fictional access policy and build the narrowest rule set that meets the requirement.",
  },
  {
    number: "14",
    title: "DHCP, DNS & NAT Concepts",
    focus:
      "Understand address assignment, name resolution, translation, default gateways, and how these services affect troubleshooting.",
    lab:
      "Trace a fictional client that can reach local hosts but cannot reach an external service by name.",
  },
  {
    number: "15",
    title: "Cisco Device Hardening & Management Plane",
    focus:
      "Review local accounts, enable secrets, console and VTY access, SSH, banners, unnecessary services, logging, time, and management exposure.",
    lab:
      "Harden a fictional router's management access while preserving authorized administration.",
  },
  {
    number: "16",
    title: "Network Troubleshooting Workflow",
    focus:
      "Use a layered troubleshooting process with interface state, addressing, VLANs, trunks, routes, ACLs, DNS, and services.",
    lab:
      "Diagnose a fictional multi-layer connectivity failure from symptoms to root cause.",
  },
  {
    number: "17",
    title: "Packet Tracer Defensive Practice",
    focus:
      "Apply Cisco IOS and networking concepts in Packet Tracer using inspection-first, change tracking, and verification.",
    lab:
      "Complete a fictional mini competition network with switching, routing, ACL, and management tasks.",
  },
  {
    number: "18",
    title: "Cisco & Networking Final Review Checklist",
    focus:
      "Bring addressing, switching, VLANs, trunks, routing, ACLs, services, management security, and verification into one final review.",
    lab:
      "Run a fictional end-of-round network review and document remaining risks and required exceptions.",
  },
];

const lessonRoutes: Record<string, string> = {
  "01": "/cyberpatriot/cisco-networking/competition-workflow",
  "02": "/cyberpatriot/cisco-networking/networking-foundations-osi-model",
  "03": "/cyberpatriot/cisco-networking/ipv4-addressing-subnet-masks",
  "04": "/cyberpatriot/cisco-networking/subnetting-for-competition",
  "05": "/cyberpatriot/cisco-networking/cisco-ios-cli-safe-navigation",
  "06": "/cyberpatriot/cisco-networking/switching-mac-tables-ethernet",
  "07": "/cyberpatriot/cisco-networking/vlans-access-ports",
  "08": "/cyberpatriot/cisco-networking/trunks-native-vlans-8021q",
  "09": "/cyberpatriot/cisco-networking/inter-vlan-routing",
  "10": "/cyberpatriot/cisco-networking/switch-port-security",
  "11": "/cyberpatriot/cisco-networking/router-interfaces-static-routing",
  "12": "/cyberpatriot/cisco-networking/routing-concepts-dynamic-protocol-awareness",
  "13": "/cyberpatriot/cisco-networking/access-control-lists",
  "14": "/cyberpatriot/cisco-networking/dhcp-dns-nat-concepts",
  "15": "/cyberpatriot/cisco-networking/cisco-device-hardening-management-plane",
  "16": "/cyberpatriot/cisco-networking/network-troubleshooting-workflow",
  "17": "/cyberpatriot/cisco-networking/packet-tracer-defensive-practice",
  "18": "/cyberpatriot/cisco-networking/final-review-checklist",
};

const workflow = [
  {
    number: "01",
    title: "Understand the topology",
    text:
      "Identify devices, links, addressing, VLANs, required services, management paths, and expected traffic before configuring anything.",
  },
  {
    number: "02",
    title: "Collect a baseline",
    text:
      "Use show commands and Packet Tracer evidence to understand interfaces, VLANs, trunks, routes, ACLs, users, and device state.",
  },
  {
    number: "03",
    title: "Trace the traffic",
    text:
      "Follow the path from source to destination and determine which layer, device, or policy actually controls the problem.",
  },
  {
    number: "04",
    title: "Change narrowly",
    text:
      "Apply the smallest configuration change that satisfies the requirement while preserving required connectivity and administration.",
  },
  {
    number: "05",
    title: "Verify end to end",
    text:
      "Recheck device state and test the real path from the client, server, or management perspective instead of trusting one command.",
  },
];

const priorityZones = [
  {
    title: "Addressing & Reachability",
    items: [
      "IPv4 addressing",
      "Subnet masks",
      "Default gateways",
      "Routes",
      "DNS and DHCP",
    ],
  },
  {
    title: "Switching",
    items: [
      "MAC tables",
      "VLAN membership",
      "Access ports",
      "Trunks",
      "Port security",
    ],
  },
  {
    title: "Routing & Policy",
    items: [
      "Router interfaces",
      "Static routes",
      "Route selection",
      "ACLs",
      "NAT awareness",
    ],
  },
  {
    title: "Management & Evidence",
    items: [
      "Cisco IOS",
      "Local accounts",
      "SSH and VTY",
      "Show commands",
      "Verification",
    ],
  },
];

const principles = [
  {
    title: "Topology before commands",
    text:
      "A correct command on the wrong interface, VLAN, or device can still break the network.",
  },
  {
    title: "Show before configure",
    text:
      "Use inspection commands to understand current state before entering configuration mode.",
  },
  {
    title: "Trace the path",
    text:
      "Networking problems become easier when you follow traffic hop by hop instead of changing random settings.",
  },
  {
    title: "Required traffic wins",
    text:
      "Security controls should reduce unnecessary exposure without blocking services the scenario requires.",
  },
  {
    title: "Save deliberately",
    text:
      "Know the difference between running configuration and startup configuration and verify before saving.",
  },
  {
    title: "Verify from both ends",
    text:
      "A device can look correct locally while the actual client-to-server path is still broken.",
  },
];

const evidencePreview = [
  "Topology: two access switches, one router, three VLANs",
  "Authorized administrator: Morgan",
  "Required management: SSH from the Admin VLAN",
  "Required users: Staff and Student networks",
  "Required application: internal HTTPS server",
  "Required infrastructure: DHCP and DNS",
  "Forensic clue: unexpected ACL entry affecting one subnet",
  "Important boundary: preserve required connectivity while investigating",
];

export default function CiscoNetworkingHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; CyberPatriot Hub
          </Link>

          <Link
            href="/cyberpatriot/competition-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Competition Strategy
          </Link>

          <Link
            href="/cyberpatriot/linux"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Linux
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Training Hub
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco & Networking
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Build competition-ready networking skill through addressing,
                subnetting, switching, VLANs, routing, ACLs, Cisco IOS,
                management security, troubleshooting, and Packet Tracer practice.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This pathway teaches the network as a system. Students learn how
                traffic moves, how Cisco devices make decisions, how to inspect
                configuration safely, and how to verify required connectivity
                after every meaningful change.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Networking Scope
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Lessons</span>
                  <span className="font-bold text-white">18</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core workflow</span>
                  <span className="font-bold text-white">5 stages</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Cisco IOS + Packet Tracer</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Training style</span>
                  <span className="font-bold text-white">Defensive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Practice on authorized networks and fictional topologies
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Labs use Packet Tracer and fictional competition networks. The goal
              is defensive configuration, troubleshooting, and verification, not
              unauthorized access to real devices or networks.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Main question
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              How do you secure a network without breaking the traffic it must carry?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Strong network defense starts with topology and traffic flow.
              Understand the path, inspect the devices, make the smallest justified
              change, and test the real communication afterward.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Networking workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Five stages for controlled network defense
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {workflow.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <span className="text-sm font-black text-cyan-300">
                {item.number}
              </span>
              <h3 className="mt-3 text-xl font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Complete pathway
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Cisco & Networking Lessons
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Lessons move from networking foundations and addressing into Cisco
            IOS, switching, VLANs, routing, policy, management security,
            troubleshooting, Packet Tracer, and final review.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              href={lessonRoutes[lesson.number]}
              key={lesson.number}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black text-cyan-300">
                  Lesson {lesson.number}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-400">
                  Cisco
                </span>
              </div>

              <h3 className="mt-4 text-xl font-black text-white">
                {lesson.title}
              </h3>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {lesson.focus}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Defensive lab
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {lesson.lab}
                </p>
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-sm font-semibold text-cyan-200 transition group-hover:bg-cyan-400/10">
                  Open Lesson &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {priorityZones.map((zone) => (
            <div
              key={zone.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Priority zone
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                {zone.title}
              </h2>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {zone.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Network evidence preview
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Fictional practice topology
            </h2>

            <div className="mt-5 grid gap-3">
              {evidencePreview.map((item, index) => (
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
              Networking principles
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Six rules to carry through the pathway
            </h2>

            <div className="mt-5 grid gap-3">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Start here
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Lesson 01 — Cisco Competition Workflow
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Begin by learning how to read the topology, collect a device
                baseline, trace required traffic, make controlled changes, and
                verify end-to-end network behavior.
              </p>
            </div>

            <Link
              href="/cyberpatriot/cisco-networking/competition-workflow"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Open Lesson 01 &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
