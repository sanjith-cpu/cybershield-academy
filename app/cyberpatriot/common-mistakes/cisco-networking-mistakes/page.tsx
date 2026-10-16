import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Changing multiple network layers at once",
    what:
      "A team may change interface state, VLANs, trunks, routes, ACLs, and management settings in one troubleshooting pass.",
    consequence:
      "If connectivity breaks, it becomes difficult to identify which change caused the failure.",
    replacement:
      "Troubleshoot in layers: physical/interface state, VLAN and switchport, trunking, Layer 3 addressing, routing, policy, then verification.",
  },
  {
    title: "Editing ACLs before understanding traffic flow",
    what:
      "An access list may be rewritten because it looks too broad or because traffic is failing.",
    consequence:
      "Required traffic can be blocked, unwanted traffic may still pass, and rule order problems can become worse.",
    replacement:
      "Identify source, destination, protocol, port, direction, interface, and existing rule order before changing ACL logic.",
  },
  {
    title: "Forgetting that ACL order matters",
    what:
      "A correct-looking rule may be added below a broader permit or deny entry.",
    consequence:
      "The new rule may never match because an earlier entry already decides the traffic.",
    replacement:
      "Review the full ACL in order, including counters and placement, before inserting or changing entries.",
  },
  {
    title: "Breaking trunk configuration while fixing a VLAN problem",
    what:
      "A missing VLAN may lead to broad trunk changes, native VLAN edits, or unnecessary mode changes.",
    consequence:
      "Multiple VLANs can lose connectivity even though only one path was originally wrong.",
    replacement:
      "Confirm trunk status, allowed VLAN list, native VLAN, and both ends of the link before changing the minimum required setting.",
  },
  {
    title: "Adding routes without checking connected networks",
    what:
      "A team may add static routes because a destination is unreachable without checking whether the issue is actually an interface, VLAN, or addressing problem.",
    consequence:
      "Unnecessary routes can mask the real fault, create asymmetric paths, or introduce routing confusion.",
    replacement:
      "Check interfaces, IP addressing, connected routes, ARP, and next-hop reachability before adding new routes.",
  },
  {
    title: "Locking yourself out of remote management",
    what:
      "VTY, SSH, local users, AAA, ACLs, or management interfaces may be changed without confirming a recovery path.",
    consequence:
      "The team can lose access to the device and waste critical competition time recovering it.",
    replacement:
      "Preserve at least one known-good management path and verify SSH / VTY access after every high-impact management change.",
  },
  {
    title: "Ignoring interface counters and status",
    what:
      "Teams may jump straight to configuration changes without checking whether the interface is administratively down, physically down, err-disabled, or experiencing errors.",
    consequence:
      "The real problem may be obvious in interface state while the team spends time changing unrelated configuration.",
    replacement:
      "Start with interface status, counters, line protocol, errors, and port-security state before deeper changes.",
  },
  {
    title: "Treating port security as a universal fix",
    what:
      "Port security may be enabled or tightened without understanding expected devices, sticky MAC behavior, violation mode, or mission requirements.",
    consequence:
      "Legitimate endpoints can be blocked or ports can enter an unexpected state.",
    replacement:
      "Confirm the expected endpoint behavior and current port-security state before making a narrow, justified change.",
  },
  {
    title: "Saving configuration before verifying",
    what:
      "A partially working or broken configuration may be saved immediately after a change.",
    consequence:
      "The bad state becomes persistent and harder to recover from later.",
    replacement:
      "Verify required reachability, management access, VLANs, routes, and ACL behavior before saving.",
  },
  {
    title: "Troubleshooting from assumptions instead of the path",
    what:
      "A team may guess that the problem is routing, ACLs, or VLANs based on symptoms alone.",
    consequence:
      "Time is spent changing layers that were already correct.",
    replacement:
      "Trace the path in order and prove each layer before moving to the next one.",
  },
];

const layerChecks = [
  {
    title: "Physical / interface",
    checks: [
      "Check administrative and operational state.",
      "Review errors, duplex, speed, and err-disabled conditions.",
      "Confirm the correct port is being investigated.",
    ],
  },
  {
    title: "VLAN / switchport",
    checks: [
      "Confirm access VLAN or trunk mode.",
      "Check VLAN existence.",
      "Verify both ends of the link.",
    ],
  },
  {
    title: "Trunking",
    checks: [
      "Check allowed VLANs.",
      "Check native VLAN.",
      "Verify expected trunk state.",
    ],
  },
  {
    title: "Layer 3",
    checks: [
      "Check interface IP addressing.",
      "Check subnet and gateway assumptions.",
      "Review ARP or neighbor state.",
    ],
  },
  {
    title: "Routing",
    checks: [
      "Review connected and learned routes.",
      "Check next-hop reachability.",
      "Avoid adding routes before proving one is missing.",
    ],
  },
  {
    title: "Policy",
    checks: [
      "Review ACL direction and interface placement.",
      "Check rule order and counters.",
      "Verify only the intended traffic is affected.",
    ],
  },
];

const commandChecks = [
  {
    title: "Interface state",
    commands: [
      "show ip interface brief",
      "show interfaces status",
      "show interfaces",
    ],
  },
  {
    title: "VLAN and trunking",
    commands: [
      "show vlan brief",
      "show interfaces trunk",
      "show interfaces switchport",
    ],
  },
  {
    title: "Routing and neighbors",
    commands: [
      "show ip route",
      "show arp",
      "ping <destination>",
      "traceroute <destination>",
    ],
  },
  {
    title: "ACL and management",
    commands: [
      "show access-lists",
      "show running-config | include access-class",
      "show running-config | section line vty",
      "show ip ssh",
    ],
  },
];

const badVsBetter = [
  {
    bad: "Traffic is failing, so change the ACL.",
    better:
      "Trace the path first and prove that ACL policy is the failing layer before editing it.",
  },
  {
    bad: "Add a static route to fix reachability.",
    better:
      "Confirm interfaces, addressing, connected routes, and next-hop reachability first.",
  },
  {
    bad: "Allow the VLAN on every trunk.",
    better:
      "Identify the exact trunk that should carry the VLAN and change only that path.",
  },
  {
    bad: "Turn on port security everywhere.",
    better:
      "Check expected endpoint behavior and apply only the policy the mission requires.",
  },
  {
    bad: "Save after every change.",
    better:
      "Verify the resulting network state first, then save the known-good configuration.",
  },
  {
    bad: "The config looks right, so the path should work.",
    better:
      "Test the actual path end to end and compare results with interface, route, and ACL state.",
  },
];

const verificationQuestions = [
  "Are the required interfaces up?",
  "Are access VLANs and trunks correct?",
  "Are required VLANs allowed on the correct trunks?",
  "Are Layer 3 addresses and gateways correct?",
  "Are required routes present?",
  "Do ACLs match the intended policy and direction?",
  "Does approved SSH / VTY access still work?",
  "Was required end-to-end reachability retested?",
];

const finalChecklist = [
  "Troubleshooting followed the network path instead of assumptions.",
  "Interface state was checked before configuration changes.",
  "VLAN and switchport state were verified.",
  "Trunk configuration was changed only when evidence supported it.",
  "Routes were added only after proving they were missing.",
  "ACL order, direction, and placement were reviewed before edits.",
  "Remote management remained available to approved users.",
  "Port-security changes were based on expected endpoint behavior.",
  "Required reachability was retested after high-impact changes.",
  "The configuration was saved only after the final state was verified.",
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

export default function CiscoNetworkingMistakesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
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
              href="/cyberpatriot/common-mistakes/linux-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/forensics-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Common Mistakes &middot; Guide 05 &middot; Cisco &amp; Networking
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco &amp; Networking Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Networking mistakes multiply quickly because one change can
                affect many systems. The safest approach is to follow the path,
                prove the failing layer, make a narrow change, and verify the
                full route afterward.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong troubleshooting moves from interface state through VLAN,
                trunking, Layer 3, routing, policy, and final end-to-end
                verification.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Start with</span>
                  <span className="font-bold text-white">Interface state</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Follow</span>
                  <span className="font-bold text-white">Traffic path</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Change</span>
                  <span className="font-bold text-white">One layer</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Save after</span>
                  <span className="font-bold text-white">Verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Networking rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the failing layer before changing the next one
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Interface state, VLAN membership, trunking, addressing, routing,
            and ACL policy each answer different questions. Keep them separate
            while troubleshooting so the cause stays visible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 networking mistakes"
            title="What goes wrong and the safer replacement"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    What goes wrong
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.what}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Why it hurts
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Stronger replacement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.replacement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Troubleshooting path"
            title="Move through the network in a predictable order"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {layerChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-2">
                  {item.checks.map((check) => (
                    <div
                      key={check}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {check}
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
          <SectionHeading
            label="Command quick reference"
            title="Use observation commands before configuration changes"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {commandChecks.map((item) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace guessing with path-based troubleshooting
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {badVsBetter.map((item) => (
              <div
                key={item.bad}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.bad}
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification"
            title="Ask these after high-impact network changes"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {verificationQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{question}</p>
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
            Follow the path, verify the policy, then save
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
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
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
              href="/cyberpatriot/common-mistakes/linux-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/forensics-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
