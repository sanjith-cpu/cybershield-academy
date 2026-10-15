import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Cisco network supports a school computer lab and must preserve required connectivity for approved users.",
  "VLAN 10 is STAFF, VLAN 20 is STUDENTS, and VLAN 99 is MANAGEMENT.",
  "Only approved management hosts should be able to reach device management services.",
  "SSH is the preferred remote-management method; insecure legacy management should not remain enabled unless the mission explicitly requires it.",
  "Access ports should prevent unauthorized endpoint changes without blocking approved devices.",
  "ACLs must be reviewed in order because an early permit or deny can change the effect of every later line.",
  "Do not erase ACLs, disable uplinks, or remove port-security settings until you understand the current behavior.",
  "Preserve ACL, interface, port-security, management, logging, and reachability evidence before remediation.",
];

const aclChecks = [
  {
    title: "List configured ACLs",
    commands: [
      "show access-lists",
      "show ip access-lists",
    ],
    purpose:
      "Identify standard and extended ACLs, sequence numbers, counters, and whether rules are actually receiving matches.",
  },
  {
    title: "Find where ACLs are applied",
    commands: [
      "show running-config | include access-group",
      "show running-config interface gi0/0",
      "show running-config interface gi0/0.10",
      "show running-config interface gi0/0.20",
      "show running-config interface gi0/0.99",
    ],
    purpose:
      "Determine the interface, direction, and Layer 3 context where each ACL is enforced.",
  },
  {
    title: "Review management-plane access",
    commands: [
      "show running-config | section line vty",
      "show running-config | include access-class",
    ],
    purpose:
      "Check whether VTY access is restricted to the approved management network.",
  },
  {
    title: "Check ACL hit counters",
    commands: [
      "show ip access-lists",
    ],
    purpose:
      "Use counters as evidence that traffic is or is not matching a specific rule, while remembering that counters alone do not prove the rule is correct.",
  },
];

const portSecurityChecks = [
  {
    title: "Port-security summary",
    commands: [
      "show port-security",
    ],
    purpose:
      "See which interfaces have port security enabled and review violation information.",
  },
  {
    title: "Inspect one access port",
    commands: [
      "show port-security interface fa0/4",
      "show interfaces fa0/4 switchport",
      "show running-config interface fa0/4",
    ],
    purpose:
      "Review maximum MAC addresses, learned secure addresses, violation mode, and access-VLAN configuration.",
  },
  {
    title: "Inspect another access port",
    commands: [
      "show port-security interface fa0/16",
      "show interfaces fa0/16 switchport",
      "show running-config interface fa0/16",
    ],
    purpose:
      "Compare a second endpoint-facing interface and determine whether its policy matches the scenario.",
  },
  {
    title: "Check err-disabled interfaces",
    commands: [
      "show interfaces status err-disabled",
      "show errdisable recovery",
    ],
    purpose:
      "Identify ports disabled by violations or protection mechanisms before blindly re-enabling them.",
  },
];

const managementChecks = [
  {
    title: "VTY configuration",
    commands: [
      "show running-config | section line vty",
    ],
    purpose:
      "Review transport protocols, login method, and any access-class applied to remote management.",
  },
  {
    title: "SSH state",
    commands: [
      "show ip ssh",
      "show ssh",
    ],
    purpose:
      "Confirm SSH is available and inspect active sessions when supported.",
  },
  {
    title: "Local user configuration",
    commands: [
      "show running-config | include username",
    ],
    purpose:
      "Review configured local administrative identities without exposing secrets.",
  },
  {
    title: "Management interface and route",
    commands: [
      "show ip interface brief",
      "show ip route",
    ],
    purpose:
      "Confirm the management VLAN interface is reachable from the intended administrative network.",
  },
];

const loggingChecks = [
  {
    title: "Device logs",
    commands: [
      "show logging",
    ],
    purpose:
      "Review recent interface, authentication, ACL, and port-security messages.",
  },
  {
    title: "Port-security events",
    commands: [
      "show logging | include SECURITY|PORT_SECURITY|ERR",
    ],
    purpose:
      "Look for evidence of security violations or interfaces moving into err-disabled state.",
  },
  {
    title: "Clock state",
    commands: [
      "show clock",
      "show running-config | include ntp",
    ],
    purpose:
      "Confirm timestamps are meaningful enough to correlate with other evidence.",
  },
  {
    title: "Interface changes",
    commands: [
      "show logging | include LINEPROTO|LINK",
    ],
    purpose:
      "Use link-state messages to understand whether connectivity changes line up with a suspected configuration event.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Extended ACL",
    observation:
      "ACL 120 is applied inbound on the STUDENTS routed interface. The first line permits ip any any, followed by several more specific deny entries.",
    prompt:
      "How does rule order affect whether those later deny statements can ever match?",
  },
  {
    id: "E02",
    source: "ACL counters",
    observation:
      "The permit ip any any line has a large match count. The later deny lines remain at zero matches.",
    prompt:
      "How do the counters support your interpretation of the ACL order?",
  },
  {
    id: "E03",
    source: "VTY lines",
    observation:
      "The VTY configuration allows both telnet and ssh, and no access-class limits which source networks may connect.",
    prompt:
      "Which parts conflict with the mission's management requirements?",
  },
  {
    id: "E04",
    source: "Management reachability",
    observation:
      "A STAFF host can reach the device management address, while a MANAGEMENT host can also reach it.",
    prompt:
      "Which source should be allowed, and what control should enforce that decision?",
  },
  {
    id: "E05",
    source: "Port security",
    observation:
      "Fa0/4 has port security enabled with maximum 1, sticky learning, and violation mode shutdown.",
    prompt:
      "Does this look inherently wrong, or must you compare it with the approved endpoint model first?",
  },
  {
    id: "E06",
    source: "Port violation",
    observation:
      "Fa0/16 is err-disabled after a port-security violation. The learned secure MAC differs from the currently connected approved STUDENT-PC.",
    prompt:
      "What should you verify before clearing the violation or changing the secure MAC?",
  },
  {
    id: "E07",
    source: "Logs",
    observation:
      "A port-security log message occurred shortly before Fa0/16 became err-disabled.",
    prompt:
      "How does this help confirm why the interface went down?",
  },
  {
    id: "E08",
    source: "SSH",
    observation:
      "SSH is enabled and functioning. No evidence shows that Telnet is required.",
    prompt:
      "What narrow change would better match the mission without redesigning the management configuration?",
  },
];

const aclReasoning = [
  {
    concept: "Direction",
    question:
      "Is the ACL applied inbound or outbound relative to the interface?",
  },
  {
    concept: "Placement",
    question:
      "Is the ACL attached to the interface or VTY context that actually handles the traffic?",
  },
  {
    concept: "Order",
    question:
      "Can an earlier rule match the traffic before a later rule is evaluated?",
  },
  {
    concept: "Specificity",
    question:
      "Does the rule describe the intended source, destination, protocol, and port?",
  },
  {
    concept: "Implicit deny",
    question:
      "What traffic will be blocked if it does not match an explicit permit?",
  },
  {
    concept: "Verification",
    question:
      "Did counters and reachability change the way you expected after remediation?",
  },
];

const preservationChecklist = [
  "Record show access-lists and show ip access-lists before editing ACLs.",
  "Record where each ACL is applied and in which direction.",
  "Record ACL sequence numbers and hit counters.",
  "Record VTY transport and access-class configuration.",
  "Record port-security state, secure MAC addresses, maximums, and violation mode.",
  "Record err-disabled state and relevant log messages.",
  "Record which endpoint MAC address is physically connected to the affected access port.",
  "Re-run the same reachability test immediately after each narrow configuration change.",
];

const remediationExamples = [
  {
    title: "Remove an overly broad first ACL line",
    commands: [
      "configure terminal",
      "ip access-list extended 120",
      "no 10",
      "end",
    ],
    note:
      "Use sequence-based editing only when the evidence confirms the broad permit is shadowing intended policy.",
  },
  {
    title: "Restrict VTY transport to SSH",
    commands: [
      "configure terminal",
      "line vty 0 4",
      "transport input ssh",
      "end",
    ],
    note:
      "Use when SSH is working and the mission does not require Telnet.",
  },
  {
    title: "Apply a management access class",
    commands: [
      "configure terminal",
      "line vty 0 4",
      "access-class MGMT-VTY in",
      "end",
    ],
    note:
      "Use only after confirming MGMT-VTY permits the approved management network and does not lock out authorized administration.",
  },
  {
    title: "Recover a verified approved access port",
    commands: [
      "configure terminal",
      "interface fa0/16",
      "shutdown",
      "no shutdown",
      "end",
    ],
    note:
      "Use only after resolving the cause of the port-security violation and confirming the connected endpoint is approved.",
  },
];

const verificationChecks = [
  {
    area: "ACL behavior",
    commands: [
      "show ip access-lists",
      "show running-config | include access-group",
    ],
    verify:
      "Rule order, placement, and counters now reflect the intended traffic policy.",
  },
  {
    area: "Management plane",
    commands: [
      "show running-config | section line vty",
      "show ip ssh",
    ],
    verify:
      "SSH remains available and only the intended source network is permitted for remote management.",
  },
  {
    area: "Port security",
    commands: [
      "show port-security",
      "show port-security interface fa0/16",
      "show interfaces status err-disabled",
    ],
    verify:
      "The approved endpoint port is operational and port security still enforces the intended device limit.",
  },
  {
    area: "Logging",
    commands: [
      "show logging",
    ],
    verify:
      "No new port-security or management errors appear after remediation.",
  },
  {
    area: "Reachability",
    commands: [
      "ping <management-address>",
      "ssh -l <admin-user> <management-address>",
    ],
    verify:
      "Approved management access succeeds while unauthorized source networks are blocked as intended.",
  },
];

const reflectionQuestions = [
  "Why can a single permit ip any any line make later ACL deny rules ineffective?",
  "Why are ACL hit counters useful but not sufficient by themselves?",
  "What is the difference between an interface access-group and a VTY access-class?",
  "Why is allowing Telnet unnecessary when SSH is already working and the mission does not require Telnet?",
  "Why should a port-security violation be investigated before simply clearing the err-disabled state?",
  "What is the purpose of sticky MAC learning on an access port?",
  "Why should a management ACL be tested carefully before it is applied to VTY lines?",
  "Which finding in this lab had the greatest risk of locking out legitimate administrators if remediated carelessly?",
];

const completionChecklist = [
  "I reviewed ACL order, direction, placement, and hit counters.",
  "I identified whether any broad rule shadowed more specific rules.",
  "I reviewed VTY transport and management source restrictions.",
  "I confirmed SSH was available before removing insecure legacy transport.",
  "I reviewed port-security state and secure MAC learning.",
  "I checked err-disabled interfaces and correlated them with logs.",
  "I preserved the affected endpoint MAC information before changing port security.",
  "I made only narrow, mission-supported changes.",
  "I verified approved management access still worked.",
  "I confirmed access-port protection remained enabled after remediation.",
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

export default function CiscoAclPortSecurityReviewLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/cisco-vlan-routing-troubleshooting"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/forensics-evidence-timeline"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Practice Lab &middot; 08 &middot; Cisco / Networking
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                ACL &amp; Port Security Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review ACL order and placement, VTY management restrictions,
                SSH versus Telnet exposure, port-security state, secure MAC
                learning, and err-disabled evidence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The challenge is precision. A careless ACL or management change
                can block legitimate traffic just as easily as it can improve security.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Advanced</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Cisco IOS</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Policy verification</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Focus</span>
                  <span className="font-bold text-white">ACLs + VTY + Port Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mission briefing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Restrict management and endpoint access without breaking approved connectivity
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {missionRequirements.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Policy rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read ACLs from top to bottom and access controls in context
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Network policy is evaluated in order and in a specific location.
            Before editing, know what traffic reaches the rule, which direction
            it travels, and what earlier entries already match it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="ACL review" title="Understand order, placement, direction, and counters" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {aclChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Port security" title="Protect access ports without blocking approved endpoints" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {portSecurityChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Management plane" title="Limit administrative access to the right network and protocol" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {managementChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Logs and timing" title="Correlate policy changes with actual device events" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {loggingChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Fictional evidence set" title="Decide which policy problems are actually supported" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.observation}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Investigation prompt
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="ACL reasoning" title="Ask six questions before editing policy" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aclReasoning.map((item) => (
              <div key={item.concept} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.concept}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Preserve first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Save enough evidence to explain the policy before changing it
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preservationChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4">
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
            label="Authorized remediation examples"
            title="Make narrow policy changes and test immediately"
            description="These examples are for the fictional authorized topology. Use only the change supported by your evidence."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {remediationExamples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
                <div className="mt-4 grid gap-2">
                  {item.commands.map((command) => (
                    <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Verification" title="Prove policy works without locking out approved users" />
          <div className="mt-8 grid gap-5">
            {verificationChecks.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.area}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.commands.map((command) => (
                      <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Reflection" title="Debrief the access-control decisions" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reflectionQuestions.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Completion checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only when access matches the mission
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4">
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
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/cisco-vlan-routing-troubleshooting"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/forensics-evidence-timeline"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
