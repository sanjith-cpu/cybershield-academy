import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the network mission before changing interfaces, VLANs, trunks, routes, ACLs, or management access.",
    why:
      "Required connectivity, management paths, VLAN membership, routing, and allowed services may be explicitly defined by the scenario.",
  },
  {
    item: "Record the expected topology and required reachability.",
    why:
      "You need a trusted picture of which devices, VLANs, subnets, and services must communicate before troubleshooting.",
  },
  {
    item: "Capture the current running configuration and interface state.",
    why:
      "A baseline lets you compare before and after changes and preserves evidence if a configuration needs to be reversed.",
  },
  {
    item: "Confirm management access requirements.",
    why:
      "SSH, console, VTY restrictions, and management VLAN access should match the mission before you tighten them.",
  },
  {
    item: "Check physical and data-link state before changing routing.",
    why:
      "A routing problem can actually be a shutdown interface, wrong VLAN, trunk issue, or access-port mismatch.",
  },
  {
    item: "Prioritize broken required connectivity and broad security exposure first.",
    why:
      "A failed required path, unrestricted management access, or overly broad ACL deserves attention before cosmetic cleanup.",
  },
];

const interfaceChecks = [
  {
    title: "Interface summary",
    commands: [
      "show ip interface brief",
      "show interfaces status",
    ],
    verify:
      "Required interfaces are up, expected addresses are present, and shutdown state matches the design.",
  },
  {
    title: "Interface details",
    commands: [
      "show interfaces",
    ],
    verify:
      "Review errors, duplex, speed, line protocol, drops, and unusual traffic before changing configuration.",
  },
  {
    title: "Switchport mode",
    commands: [
      "show interfaces switchport",
    ],
    verify:
      "Access and trunk modes match the intended topology.",
  },
  {
    title: "Description and ownership clues",
    commands: [
      "show running-config | section interface",
    ],
    verify:
      "Descriptions, addresses, VLAN settings, and shutdown state align with the mission.",
  },
];

const vlanChecks = [
  {
    title: "VLAN database",
    commands: [
      "show vlan brief",
    ],
    verify:
      "Required VLANs exist and access ports are assigned correctly.",
  },
  {
    title: "Trunk state",
    commands: [
      "show interfaces trunk",
    ],
    verify:
      "Trunk links are operational and carry every VLAN required by the scenario.",
  },
  {
    title: "Access-port membership",
    commands: [
      "show interfaces switchport",
    ],
    verify:
      "Endpoints are in the correct access VLAN and no unexpected dynamic behavior is present.",
  },
  {
    title: "Native VLAN",
    commands: [
      "show interfaces trunk",
    ],
    verify:
      "Native VLAN settings are consistent across both sides of a trunk when required.",
  },
];

const routingChecks = [
  {
    title: "Routing table",
    commands: [
      "show ip route",
    ],
    verify:
      "Required networks have expected connected, static, or learned routes.",
  },
  {
    title: "Layer 3 interfaces",
    commands: [
      "show ip interface brief",
      "show running-config | section interface",
    ],
    verify:
      "SVIs or router subinterfaces have the correct addresses and are operational.",
  },
  {
    title: "ARP table",
    commands: [
      "show ip arp",
    ],
    verify:
      "Layer 2 and Layer 3 neighbor information is consistent with expected hosts.",
  },
  {
    title: "Reachability tests",
    commands: [
      "ping <destination>",
      "traceroute <destination>",
    ],
    verify:
      "Test one hop at a time and use failures to narrow the problem instead of guessing.",
  },
];

const aclChecks = [
  {
    title: "Configured ACLs",
    commands: [
      "show access-lists",
      "show ip access-lists",
    ],
    verify:
      "ACL entries match the intended policy and broad permits or denies are investigated carefully.",
  },
  {
    title: "ACL placement",
    commands: [
      "show running-config | include access-group",
      "show running-config | section interface",
    ],
    verify:
      "The correct ACL is applied to the correct interface and direction.",
  },
  {
    title: "ACL counters",
    commands: [
      "show ip access-lists",
    ],
    verify:
      "Counters help prove which rules are actually matching traffic.",
  },
  {
    title: "Rule order",
    commands: [
      "show running-config | section access-list",
    ],
    verify:
      "Specific required policy is not shadowed by an earlier broad permit or deny.",
  },
];

const managementChecks = [
  {
    title: "VTY configuration",
    commands: [
      "show running-config | section line vty",
    ],
    verify:
      "Remote management methods and access restrictions match the mission.",
  },
  {
    title: "SSH status",
    commands: [
      "show ip ssh",
    ],
    verify:
      "SSH is enabled and configured appropriately when remote management is required.",
  },
  {
    title: "Local users",
    commands: [
      "show running-config | include username",
    ],
    verify:
      "Only approved local management users remain.",
  },
  {
    title: "AAA configuration",
    commands: [
      "show running-config | include aaa",
    ],
    verify:
      "Authentication policy is understood before changes are made.",
  },
];

const portSecurityChecks = [
  {
    title: "Port security summary",
    commands: [
      "show port-security",
    ],
    verify:
      "Protected ports and violation state match the intended endpoint policy.",
  },
  {
    title: "Interface port security",
    commands: [
      "show port-security interface <interface>",
    ],
    verify:
      "Maximum addresses, learned addresses, and violation mode are appropriate for the scenario.",
  },
  {
    title: "Err-disabled interfaces",
    commands: [
      "show interfaces status err-disabled",
    ],
    verify:
      "Investigate the actual cause before re-enabling a port.",
  },
  {
    title: "MAC address table",
    commands: [
      "show mac address-table",
    ],
    verify:
      "Learned MAC addresses are consistent with expected devices and VLANs.",
  },
];

const loggingChecks = [
  {
    title: "System logging",
    commands: [
      "show logging",
    ],
    verify:
      "Interface changes, security events, and protocol messages are reviewed before configuration changes erase context.",
  },
  {
    title: "Configuration changes",
    commands: [
      "show archive log config all",
    ],
    verify:
      "Use when supported to identify recent administrative changes.",
  },
  {
    title: "CDP neighbors",
    commands: [
      "show cdp neighbors detail",
    ],
    verify:
      "Neighbor information helps confirm topology and connected-device expectations.",
  },
  {
    title: "LLDP neighbors",
    commands: [
      "show lldp neighbors detail",
    ],
    verify:
      "Use when LLDP is enabled to validate physical relationships.",
  },
];

const troubleshootingOrder = [
  {
    step: "01",
    title: "Physical / interface",
    check:
      "Is the interface up? Is the line protocol up? Are there obvious errors or shutdown state?",
  },
  {
    step: "02",
    title: "VLAN / switchport",
    check:
      "Is the endpoint in the right access VLAN? Are required VLANs present?",
  },
  {
    step: "03",
    title: "Trunk",
    check:
      "Is the trunk operational and carrying the VLAN that needs to cross it?",
  },
  {
    step: "04",
    title: "Layer 3 interface",
    check:
      "Does the SVI or router subinterface have the correct address and operational state?",
  },
  {
    step: "05",
    title: "Routing",
    check:
      "Does the routing table contain the destination network and the expected next hop?",
  },
  {
    step: "06",
    title: "Policy",
    check:
      "Could an ACL, management restriction, or port-security state be blocking the path?",
  },
  {
    step: "07",
    title: "Verify",
    check:
      "Retest the exact required path and confirm no other required traffic was broken.",
  },
];

const highPriorityFindings = [
  {
    finding: "Required VLAN missing from a trunk",
    firstMove:
      "Confirm the intended VLAN list on both ends of the link, preserve the current configuration, then add only the missing required VLAN.",
  },
  {
    finding: "Broad permit before intended deny rules",
    firstMove:
      "Review ACL order and counters, confirm the required policy, then correct the minimum set of entries needed.",
  },
  {
    finding: "Telnet enabled when SSH is required",
    firstMove:
      "Confirm approved management access, verify SSH works, then restrict VTY transport to the required secure method.",
  },
  {
    finding: "Unexpected local management user",
    firstMove:
      "Preserve the username and configuration evidence, compare with the approved roster, then remove only if unauthorized.",
  },
  {
    finding: "Err-disabled access port",
    firstMove:
      "Determine whether port security, BPDU guard, link flapping, or another cause triggered the state before re-enabling it.",
  },
  {
    finding: "Required route missing",
    firstMove:
      "Confirm interface and VLAN state first, then restore only the route required by the network design.",
  },
];

const doNotBlindlyChange = [
  "Do not erase or reload a device before preserving the running configuration.",
  "Do not change routing before checking interface, VLAN, and trunk state.",
  "Do not remove ACLs simply because traffic is failing.",
  "Do not permit all traffic just to make a ping succeed.",
  "Do not disable port security without understanding why a violation occurred.",
  "Do not change every trunk to allow all VLANs.",
  "Do not remove management restrictions before confirming the approved administration path.",
  "Do not save an unverified configuration just because one symptom improved.",
];

const verificationChecks = [
  {
    area: "Interfaces",
    verify:
      "Required interfaces are up and error state is acceptable.",
  },
  {
    area: "VLANs",
    verify:
      "Required VLANs exist and access ports are assigned correctly.",
  },
  {
    area: "Trunks",
    verify:
      "Required VLANs cross the intended trunk links.",
  },
  {
    area: "Routing",
    verify:
      "Required networks are present in the routing table and next hops are correct.",
  },
  {
    area: "ACLs",
    verify:
      "Policy permits required traffic and blocks only what the mission intends.",
  },
  {
    area: "Management",
    verify:
      "Approved SSH or console management still works and unauthorized methods are restricted.",
  },
  {
    area: "Port security",
    verify:
      "Protected access ports remain usable for approved devices.",
  },
  {
    area: "Reachability",
    verify:
      "Required endpoints and services can communicate after every major change.",
  },
];

const finalChecklist = [
  "The network mission and expected topology were reviewed before configuration changes.",
  "The running configuration was preserved before remediation.",
  "Required interfaces are operational.",
  "Required VLANs exist.",
  "Access ports are assigned to the correct VLANs.",
  "Trunks carry all required VLANs.",
  "Layer 3 interfaces and subinterfaces have the expected addressing.",
  "Required routes exist.",
  "ACL order, placement, direction, and counters were reviewed.",
  "Remote management access matches the mission.",
  "Approved local management users match the final configuration.",
  "Port-security state was reviewed on relevant interfaces.",
  "Err-disabled interfaces were investigated before recovery.",
  "Neighbor and MAC information were used to validate topology where helpful.",
  "Required reachability was retested after changes.",
  "The final configuration was saved only after verification.",
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

function CommandSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: {
    title: string;
    commands: string[];
    verify: string;
  }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
        <SectionHeading label={label} title={title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <div className="mt-5 grid gap-3">
                {item.commands.map((command) => (
                  <pre
                    key={command}
                    className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                  >
                    {command}
                  </pre>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.verify}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CiscoNetworkingChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/linux-ubuntu-mint-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/forensics-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 05 &middot; Cisco / Networking
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco &amp; Networking Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review interfaces, VLANs, trunks, Layer 3 addressing, routing,
                ARP, ACLs, VTY access, SSH, port security, logging, and required
                reachability in a deliberate troubleshooting order.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Network problems are often caused by a lower layer than the one
                that first looks suspicious. Check physical and switching state
                before rewriting routing or security policy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Start with</span>
                  <span className="font-bold text-white">Interfaces</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Then inspect</span>
                  <span className="font-bold text-white">VLANs + Trunks</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Policy layer</span>
                  <span className="font-bold text-white">ACLs + VTY</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Reachability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Network rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Troubleshoot from the lower layers upward
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            If a host cannot reach a destination, do not jump directly to ACLs
            or routing. Confirm interface state, VLAN membership, trunking, and
            Layer 3 addressing first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening pass"
            title="Understand the network before changing it"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {openingChecks.map((item, index) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex gap-4">
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-black text-white">{item.item}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommandSection
        label="Interfaces"
        title="Start with physical and interface state"
        items={interfaceChecks}
      />

      <CommandSection
        label="VLANs & trunks"
        title="Confirm Layer 2 segmentation and transport"
        items={vlanChecks}
      />

      <CommandSection
        label="Routing"
        title="Verify Layer 3 paths after Layer 2 is healthy"
        items={routingChecks}
      />

      <CommandSection
        label="ACLs"
        title="Review policy order, placement, direction, and counters"
        items={aclChecks}
      />

      <CommandSection
        label="Management access"
        title="Protect VTY and SSH without losing approved administration"
        items={managementChecks}
      />

      <CommandSection
        label="Port security"
        title="Understand violations before recovering access ports"
        items={portSecurityChecks}
      />

      <CommandSection
        label="Logging & neighbors"
        title="Use device evidence to validate changes and topology"
        items={loggingChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Troubleshooting order"
            title="Follow the path instead of guessing"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingOrder.map((item) => (
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
                  {item.check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-priority findings
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Correct the smallest confirmed fault
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highPriorityFindings.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="font-black text-white">{item.finding}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.firstMove}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Do not blindly change
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Common Cisco competition overreactions
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotBlindlyChange.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4"
              >
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
            label="Verification sweep"
            title="Prove the network still satisfies the mission"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecks.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Cisco &amp; Networking final checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Save only after the required paths verify
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
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/linux-ubuntu-mint-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/forensics-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
