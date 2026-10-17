import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "Cisco Networking Academy",
    href: "https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html",
    description:
      "Cisco's learning platform for networking fundamentals, switching, routing, Packet Tracer, and cybersecurity.",
  },
  {
    title: "Cisco Packet Tracer",
    href: "https://www.netacad.com/learning-collections/cisco-packet-tracer",
    description:
      "Cisco's network simulation tool used for practicing switching, routing, addressing, ACLs, and troubleshooting.",
  },
  {
    title: "Cisco IOS Documentation",
    href: "https://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-xe-26/series.html",
    description:
      "Cisco documentation for IOS features, commands, configuration concepts, and troubleshooting.",
  },
  {
    title: "Cisco Support Documentation",
    href: "https://www.cisco.com/c/en/us/support/index.html",
    description:
      "Official Cisco technical documentation, configuration guides, troubleshooting material, and command references.",
  },
];

const studyAreas = [
  {
    title: "Interfaces",
    items: [
      "Understand interface status and line protocol state.",
      "Know how shutdown and no shutdown affect an interface.",
      "Review interface counters before assuming a higher-layer problem.",
      "Verify speed, duplex, addressing, and physical connectivity when relevant.",
    ],
  },
  {
    title: "VLANs",
    items: [
      "Understand access ports and VLAN membership.",
      "Know how trunks carry multiple VLANs.",
      "Check allowed VLANs before changing trunk configuration.",
      "Verify that required VLANs exist before troubleshooting routing.",
    ],
  },
  {
    title: "IP Addressing",
    items: [
      "Understand IPv4 addresses, subnet masks, gateways, and networks.",
      "Recognize when two hosts are on the same or different subnets.",
      "Check interface addressing before changing routes.",
      "Use addressing evidence to narrow connectivity problems.",
    ],
  },
  {
    title: "Routing",
    items: [
      "Understand connected, static, and learned routes.",
      "Read the routing table before adding routes.",
      "Know that a missing return path can break communication.",
      "Verify reachability after routing changes.",
    ],
  },
  {
    title: "ACLs",
    items: [
      "Understand permit and deny logic.",
      "Remember ACL processing is ordered.",
      "Know that broad rules can affect many systems.",
      "Verify required traffic after ACL changes.",
    ],
  },
  {
    title: "Device Management",
    items: [
      "Review console and VTY configuration.",
      "Understand SSH and remote-management requirements.",
      "Protect privileged access without locking out approved administration.",
      "Save configuration only after confirming the state is known-good.",
    ],
  },
];

const commandReference = [
  ["show ip interface brief", "Quick view of interfaces, addresses, and status."],
  ["show interfaces", "Detailed interface state, counters, errors, and line information."],
  ["show vlan brief", "Review VLANs and access-port membership."],
  ["show interfaces trunk", "Review trunk ports and allowed VLANs."],
  ["show interfaces switchport", "Inspect switchport mode and VLAN behavior."],
  ["show ip route", "Review the routing table."],
  ["show arp", "Review IPv4 address-to-MAC mappings."],
  ["show access-lists", "Review configured access control lists."],
  ["show running-config", "Inspect the active device configuration."],
  ["show startup-config", "Inspect the saved startup configuration."],
  ["show users", "Review current management sessions when supported."],
  ["show line", "Review console and VTY line state."],
  ["ping", "Test reachability to a destination."],
  ["traceroute", "Observe the path toward a destination."],
];

const troubleshootingLayers = [
  {
    number: "01",
    title: "Physical & Interface",
    detail:
      "Check whether the interface is administratively and operationally up before troubleshooting higher layers.",
  },
  {
    number: "02",
    title: "VLAN & Switchport",
    detail:
      "Confirm access VLAN membership and switchport mode.",
  },
  {
    number: "03",
    title: "Trunking",
    detail:
      "Verify the trunk exists and carries the VLANs required by the scenario.",
  },
  {
    number: "04",
    title: "Layer 3 Addressing",
    detail:
      "Confirm IP addressing, subnet masks, and gateway relationships.",
  },
  {
    number: "05",
    title: "Routing",
    detail:
      "Check whether the routing table contains a valid path and whether a return path exists.",
  },
  {
    number: "06",
    title: "Policy",
    detail:
      "Review ACLs or management restrictions only after the underlying path is understood.",
  },
];

const competitionCases = [
  {
    title: "A host cannot reach another network",
    steps: [
      "Confirm source and destination addressing.",
      "Check the local interface and VLAN.",
      "Check trunking when multiple switches are involved.",
      "Review the routing table.",
      "Check ACLs only after the path is understood.",
      "Re-test reachability after each justified change.",
    ],
  },
  {
    title: "A VLAN appears broken",
    steps: [
      "Confirm the VLAN exists.",
      "Check access-port membership.",
      "Check trunk state.",
      "Verify the VLAN is allowed on the trunk.",
      "Confirm Layer 3 gateway or routing requirements.",
    ],
  },
  {
    title: "Remote management fails",
    steps: [
      "Check device reachability first.",
      "Review management IP and routing.",
      "Inspect VTY line configuration.",
      "Confirm SSH or other required management settings.",
      "Avoid broad management changes that could lock out the team.",
    ],
  },
  {
    title: "An ACL may be blocking traffic",
    steps: [
      "Identify the exact traffic that must work.",
      "Review ACL direction and placement.",
      "Read rules in order.",
      "Check for overly broad deny or permit statements.",
      "Make the narrowest justified change.",
      "Verify both allowed and restricted traffic afterward.",
    ],
  },
];

const weakVsBetter = [
  {
    weak: "Change several network settings until connectivity returns.",
    better:
      "Trace the path layer by layer and change one justified variable at a time.",
  },
  {
    weak: "Add a route whenever ping fails.",
    better:
      "Check interface, VLAN, addressing, routing, and return-path evidence first.",
  },
  {
    weak: "Rewrite an ACL because it looks complicated.",
    better:
      "Understand direction, order, required traffic, and current matches before changing it.",
  },
  {
    weak: "Save the configuration after every change.",
    better:
      "Save only after the device reaches a verified known-good state.",
  },
  {
    weak: "Assume an interface that is up is healthy.",
    better:
      "Review counters, errors, addressing, VLAN membership, and higher-layer behavior too.",
  },
  {
    weak: "Focus only on the local device.",
    better:
      "Think about the entire source-to-destination path and the return path.",
  },
];

const finalChecklist = [
  "Use Cisco and Networking Academy resources as primary references.",
  "Understand interface state before troubleshooting higher layers.",
  "Verify access VLAN membership and trunking.",
  "Confirm addressing before changing routing.",
  "Read the routing table before adding routes.",
  "Treat ACL order and placement carefully.",
  "Protect approved remote-management access.",
  "Use show commands before configuration commands.",
  "Change one network variable at a time when possible.",
  "Verify required traffic after every meaningful change.",
  "Save only a verified known-good configuration.",
  "Let the competition scenario determine required connectivity and services.",
];

export default function CiscoNetworkingResourcePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
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
              href="/cyberpatriot/resources/linux-ubuntu-mint"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/sysinternals-windows-utilities" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 05
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cisco &amp; Networking
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use Cisco documentation and Packet Tracer references to understand
            interfaces, VLANs, trunks, routing, ACLs, remote management, and
            path-based troubleshooting.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Network changes can affect multiple systems at once. Observe the
            path first, change narrowly, verify required connectivity, and save
            only a known-good configuration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Networking resource rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Observe the full path before changing the configuration
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Interface state, VLANs, trunks, addressing, routing, and policy all
            interact. A failure at one layer can look like a problem at another.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">Official references</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {officialResources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/40"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-bold text-cyan-300">
                Open reference &rarr;
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">What to study</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {studyAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">{area.title}</h3>

              <div className="mt-4 grid gap-2">
                {area.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm leading-6 text-slate-300"
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
        <h2 className="text-3xl font-black text-white">
          Observation command reference
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {commandReference.map(([command, meaning]) => (
            <div
              key={command}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <code className="font-bold text-cyan-300">{command}</code>
              <p className="mt-2 text-sm leading-6 text-slate-300">{meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Path-based troubleshooting
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingLayers.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.number}
                </p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Using references during competition work
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {competitionCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>

              <div className="mt-4 grid gap-2">
                {item.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                  >
                    <span className="font-black text-cyan-300">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Weak habit vs better habit
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak habit
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better habit
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.better}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Cisco &amp; Networking resource checklist
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
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
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
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
              href="/cyberpatriot/resources/linux-ubuntu-mint"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/sysinternals-windows-utilities" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}