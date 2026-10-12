import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Device Baseline",
    items: [
      ["show version", "IOS version, uptime, hardware, image, and system details.", "Record the baseline before changing configuration."],
      ["show running-config", "Active configuration currently in memory.", "Running-config can differ from startup-config."],
      ["show startup-config", "Saved configuration used after reload.", "Compare it with running-config when unsaved changes matter."],
      ["show clock detail", "Device time and time-source details.", "Incorrect time can make logs misleading."],
    ],
  },
  {
    title: "Interfaces",
    items: [
      ["show ip interface brief", "Fast view of interface IP addresses, status, and protocol state.", "Read both status columns."],
      ["show interfaces", "Detailed counters, errors, duplex, bandwidth, and operational state.", "Use counters as evidence, not as automatic proof of failure."],
      ["show interfaces status", "Switch-port status, VLAN, duplex, speed, and type.", "Interpret it with VLAN and interface configuration."],
      ["show interfaces description", "Interface status and configured descriptions.", "Descriptions can be outdated."],
    ],
  },
  {
    title: "IPv4 & Routing",
    items: [
      ["show ip route", "IPv4 routing table and route sources.", "Check route source and next hop before changing anything."],
      ["show ip route <network>", "Best route for a selected network.", "Use the correct prefix/network."],
      ["show arp", "IPv4-to-MAC mappings learned by the device.", "ARP entries are dynamic and can age out."],
      ["show ip protocols", "Active routing protocols and related settings.", "Use this with running-config and neighbor information."],
    ],
  },
  {
    title: "IPv6",
    items: [
      ["show ipv6 interface brief", "IPv6 addresses and interface state.", "Interfaces can have multiple IPv6 addresses."],
      ["show ipv6 route", "IPv6 routing table.", "Interpret route source and prefix length first."],
      ["show ipv6 neighbors", "IPv6 neighbor-discovery mappings.", "Neighbor entries are dynamic evidence."],
    ],
  },
  {
    title: "Switching & VLANs",
    items: [
      ["show mac address-table", "Learned MAC addresses and associated ports/VLANs.", "Dynamic MAC entries can move."],
      ["show vlan brief", "VLAN names, status, and access-port membership.", "Trunk behavior is not fully shown here."],
      ["show interfaces trunk", "Trunk ports, native VLANs, and allowed/active VLANs.", "A trunk can exist while some VLANs are not carried."],
      ["show interfaces switchport", "Access/trunk mode, access VLAN, native VLAN, and allowed VLAN details.", "Compare administrative and operational mode."],
    ],
  },
  {
    title: "Spanning Tree",
    items: [
      ["show spanning-tree", "Root bridge, port roles, path cost, and STP state.", "Do not change STP without understanding topology."],
      ["show spanning-tree vlan <vlan-id>", "STP details for one VLAN.", "Blocked ports can be intentional."],
      ["show spanning-tree root", "Root-bridge summary.", "Unexpected root placement should be investigated first."],
    ],
  },
  {
    title: "Access Control Lists",
    items: [
      ["show access-lists", "Configured ACL entries and match counters where available.", "ACL order matters because first match wins."],
      ["show ip interface", "Shows inbound/outbound IPv4 ACLs applied to interfaces.", "An ACL in configuration is not necessarily applied."],
      ["show running-config | section access-list", "ACL-related configuration blocks.", "Named and numbered syntax can differ."],
    ],
  },
  {
    title: "Port Security",
    items: [
      ["show port-security", "Port-security summary on supported switches.", "Use detailed interface output for one port."],
      ["show port-security interface <interface>", "Maximum MAC count, violations, sticky MACs, and secure addresses.", "Do not clear secure addresses without justification."],
      ["show running-config interface <interface>", "Configured switch-port settings.", "Compare configuration with current state."],
    ],
  },
  {
    title: "DHCP & DNS",
    items: [
      ["show ip dhcp binding", "DHCP leases issued by the device.", "Bindings are dynamic."],
      ["show ip dhcp pool", "DHCP pool use and address ranges.", "Check exclusions and helper addresses too."],
      ["show hosts", "Cached host mappings and name-server information where supported.", "Cached entries may be stale."],
      ["show running-config | include name-server", "Configured DNS server lines.", "Management and services may depend on DNS."],
    ],
  },
  {
    title: "SSH & Device Management",
    items: [
      ["show running-config | section line vty", "VTY remote-management configuration.", "Review transport input, login method, and restrictions."],
      ["show ip ssh", "SSH status and version details.", "SSH may be required for management."],
      ["show users", "Users currently connected to device lines.", "Current presence does not prove misuse."],
      ["show line", "Console, auxiliary, and VTY line state.", "Use it to understand active management sessions."],
    ],
  },
  {
    title: "CDP & LLDP",
    items: [
      ["show cdp neighbors", "Directly connected Cisco neighbors.", "CDP may be intentionally disabled."],
      ["show cdp neighbors detail", "Neighbor platform, address, ports, and capabilities.", "Treat discovery data as topology evidence."],
      ["show lldp neighbors", "Neighbors discovered with LLDP.", "LLDP may not be enabled everywhere."],
      ["show lldp neighbors detail", "Detailed LLDP neighbor information.", "Neighbor data can change when links move."],
    ],
  },
  {
    title: "Logging & Time",
    items: [
      ["show logging", "Logging configuration and buffered messages.", "Buffer size and severity can limit evidence."],
      ["show clock detail", "Current device time and source.", "Incorrect time undermines correlation."],
      ["show ntp associations", "NTP peers and association state.", "Configured does not always mean synchronized."],
      ["show ntp status", "Synchronization and stratum details.", "Output varies by platform/IOS version."],
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      ["ping <destination>", "Tests IP reachability.", "Success does not prove every application works."],
      ["traceroute <destination>", "Shows the path toward a destination when replies are available.", "Some devices do not answer probes."],
      ["show ip route <destination>", "Checks route selection for a destination.", "Use routing evidence before guessing."],
      ["show interfaces counters errors", "Interface error counters on supported switches.", "Interpret counters over time and with traffic volume."],
    ],
  },
];

const routeCodes = [
  ["C", "Connected"],
  ["L", "Local interface address"],
  ["S", "Static"],
  ["O", "OSPF"],
  ["D", "EIGRP"],
  ["R", "RIP"],
  ["B", "BGP"],
];

const interfaceStates = [
  ["up / up", "Physical and line protocol operational."],
  ["down / down", "Physical or link problem likely."],
  ["up / down", "Physical layer up, line protocol problem."],
  ["administratively down / down", "Interface is shut down by configuration."],
];

const commonPorts = [
  ["22/TCP", "SSH"],
  ["23/TCP", "Telnet"],
  ["53/TCP+UDP", "DNS"],
  ["67/UDP", "DHCP server"],
  ["68/UDP", "DHCP client"],
  ["80/TCP", "HTTP"],
  ["123/UDP", "NTP"],
  ["161/UDP", "SNMP"],
  ["443/TCP", "HTTPS"],
];

const workflow = [
  "Read the scenario and identify required connectivity.",
  "Check interface state and addressing.",
  "Check VLAN or trunk state when switching is involved.",
  "Check the routing table and expected next hop.",
  "Check ACL application and direction.",
  "Check name resolution only after basic IP reachability.",
  "Use ping and traceroute as evidence, not as the whole diagnosis.",
  "After a change, re-run the exact show command that proves the fix.",
];

const mistakes = [
  "Changing an interface before recording its current IP, VLAN, status, and description.",
  "Assuming a VLAN problem when the interface is physically down.",
  "Deleting an ACL without checking direction and purpose.",
  "Treating an ACL as active without verifying where it is applied.",
  "Removing a route before checking whether it is static, connected, or dynamically learned.",
  "Changing trunk allowed VLANs without understanding which VLANs must cross the link.",
  "Changing spanning-tree settings without understanding the current root topology.",
  "Using ping alone to decide whether an application is working.",
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

export default function CiscoNetworkingQuickReferencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/command-center"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Command Center
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
              href="/cyberpatriot/command-center/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Linux
            </Link>
            <Link
              href="/cyberpatriot/command-center/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Forensics &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center &middot; Reference 04
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco &amp; Networking Quick Reference
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast lookup for interfaces, addressing, VLANs, trunks,
                spanning tree, routing, ACLs, port security, DHCP, SSH,
                discovery, logging, and troubleshooting.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Use show commands first. Understand the topology and required
                connectivity before changing a router or switch.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Network Rule
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Layer 1</span>
                  <span className="font-bold text-white">Interface state</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Layer 2</span>
                  <span className="font-bold text-white">VLAN / switching</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Layer 3</span>
                  <span className="font-bold text-white">IP / routing</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish</span>
                  <span className="font-bold text-white">Verify path</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Before changing a network device
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Connectivity problems are often layered
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A failed connection can come from interface state, VLAN placement,
            trunk configuration, routing, ACLs, name resolution, or the
            endpoint itself. Inspect the path in order instead of changing
            several things at once.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"
            >
              <SectionHeading label="Cisco IOS / Networking" title={section.title} />
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {section.items.map(([command, meaning, caution]) => (
                  <div
                    key={command}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                    </pre>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {meaning}
                    </p>
                    <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                        Caution
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {caution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading label="Route codes" title="Common route-source reminders" />
            <div className="mt-6 grid gap-3">
              {routeCodes.map(([code, meaning]) => (
                <div
                  key={code}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">{code}</span>
                  <span className="text-right text-sm text-slate-300">{meaning}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading label="Interface states" title="Read the status pair correctly" />
            <div className="mt-6 grid gap-3">
              {interfaceStates.map(([state, meaning]) => (
                <div
                  key={state}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="font-black text-cyan-300">{state}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Ports"
            title="Common service ports worth recognizing"
            description="Port numbers are hints, not conclusions. Map the port to the actual service and device role."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonPorts.map(([port, service]) => (
              <div
                key={port}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{port}</span>
                <span className="text-right text-sm text-slate-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting order
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Work from the path, not from guesses
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {workflow.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Network mistakes that make troubleshooting harder
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
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
              href="/cyberpatriot/command-center"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Command Center
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
              href="/cyberpatriot/command-center/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Linux
            </Link>
            <Link
              href="/cyberpatriot/command-center/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Forensics &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
