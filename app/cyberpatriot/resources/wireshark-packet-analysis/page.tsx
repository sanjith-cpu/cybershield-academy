import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "Wireshark User's Guide",
    href: "https://www.wireshark.org/docs/wsug_html/",
    description:
      "The primary official guide for capturing, viewing, filtering, analyzing, and navigating packet captures.",
  },
  {
    title: "Display Filter Reference",
    href: "https://www.wireshark.org/docs/dfref/",
    description:
      "The official searchable reference for protocol fields that can be used in Wireshark display filters.",
  },
  {
    title: "Display Filter Manual",
    href: "https://www.wireshark.org/docs/man-pages/wireshark-filter",
    description:
      "Detailed syntax documentation for building Wireshark display-filter expressions.",
  },
  {
    title: "Wireshark Resource Hub",
    href: "https://www.wireshark.org/resources",
    description:
      "Official Wireshark documentation, manuals, release notes, learning material, and technical references.",
  },
];

const coreConcepts = [
  {
    title: "Packet",
    description:
      "A captured unit of network traffic containing protocol headers and, depending on the protocol, application data.",
  },
  {
    title: "Frame",
    description:
      "The Layer 2 representation of traffic, including source and destination MAC addresses when Ethernet is involved.",
  },
  {
    title: "Protocol",
    description:
      "A defined communication format such as ARP, DNS, TCP, UDP, HTTP, TLS, or ICMP.",
  },
  {
    title: "Conversation",
    description:
      "Traffic exchanged between endpoints, often grouped by addresses, ports, and protocol.",
  },
  {
    title: "Flow",
    description:
      "A sequence of related packets traveling between network endpoints.",
  },
  {
    title: "PCAP",
    description:
      "A packet-capture file containing traffic that can be opened and analyzed later.",
  },
];

const displayFilters = [
  ["tcp", "Show TCP traffic."],
  ["udp", "Show UDP traffic."],
  ["dns", "Show DNS traffic."],
  ["icmp", "Show ICMP traffic."],
  ["http", "Show traffic decoded as HTTP."],
  ["tls", "Show TLS-related traffic."],
  ["ip.addr == 10.0.0.5", "Show IPv4 traffic where the address is either source or destination."],
  ["ip.src == 10.0.0.5", "Show traffic originating from one IPv4 address."],
  ["ip.dst == 10.0.0.5", "Show traffic destined for one IPv4 address."],
  ["tcp.port == 443", "Show TCP traffic using port 443 on either side."],
  ["udp.port == 53", "Show UDP traffic using port 53."],
  ["tcp.flags.syn == 1", "Show TCP packets with the SYN flag set."],
];

const captureVsDisplay = [
  {
    title: "Capture Filter",
    when: "Before or during packet collection",
    purpose:
      "Limits which packets are recorded in the capture.",
    example: "tcp port 443",
    caution:
      "Traffic excluded by a capture filter was never saved, so it cannot be recovered from that capture afterward.",
  },
  {
    title: "Display Filter",
    when: "After packets have been captured",
    purpose:
      "Controls which already-captured packets are currently shown.",
    example: "tcp.port == 443",
    caution:
      "A display filter hides unrelated packets from view without deleting them from the capture.",
  },
];

const analysisAreas = [
  {
    title: "Endpoints",
    items: [
      "Identify source and destination IP addresses.",
      "Identify relevant MAC addresses.",
      "Notice repeated communication between unusual endpoints.",
      "Separate internal and external systems.",
    ],
  },
  {
    title: "Ports & Services",
    items: [
      "Identify source and destination ports.",
      "Compare ports with the service expected by the scenario.",
      "Remember that a port number alone does not prove an application.",
      "Use protocol decoding and surrounding evidence together.",
    ],
  },
  {
    title: "DNS",
    items: [
      "Review query names and response records.",
      "Look for repeated failed or unusual queries.",
      "Connect DNS activity with the system that generated it.",
      "Correlate names with later network connections.",
    ],
  },
  {
    title: "TCP",
    items: [
      "Recognize SYN, SYN-ACK, and ACK during connection establishment.",
      "Review resets and retransmissions when connectivity is unreliable.",
      "Follow a TCP stream when appropriate.",
      "Consider both directions of the conversation.",
    ],
  },
  {
    title: "Protocols",
    items: [
      "Identify what protocols are actually present.",
      "Separate normal infrastructure traffic from relevant findings.",
      "Check whether expected services match observed protocols.",
      "Use protocol fields instead of guessing from packet color alone.",
    ],
  },
  {
    title: "Timeline",
    items: [
      "Use packet timestamps to establish sequence.",
      "Correlate network activity with host logs.",
      "Look for what happened immediately before and after an event.",
      "Keep timezone and clock differences in mind.",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Preserve the capture",
    description:
      "Work from an authorized copy when possible and keep the original evidence unchanged.",
  },
  {
    number: "02",
    title: "Establish scope",
    description:
      "Identify the systems, time range, addresses, and question you are trying to answer.",
  },
  {
    number: "03",
    title: "Survey protocols",
    description:
      "Look at protocol hierarchy, endpoints, conversations, and overall traffic patterns before narrowing the view.",
  },
  {
    number: "04",
    title: "Apply display filters",
    description:
      "Reduce noise using protocol, address, port, field, or value-based filters.",
  },
  {
    number: "05",
    title: "Inspect packet details",
    description:
      "Expand relevant protocol fields and inspect the actual evidence rather than relying only on summary columns.",
  },
  {
    number: "06",
    title: "Correlate",
    description:
      "Connect packet evidence with host logs, services, user activity, configuration, and scenario requirements.",
  },
  {
    number: "07",
    title: "Document the finding",
    description:
      "Record endpoints, time, protocol, relevant fields, evidence, and what the observation actually supports.",
  },
];

const usefulFeatures = [
  {
    title: "Protocol Hierarchy",
    detail:
      "Summarizes the protocols found in the capture and their relative volume.",
  },
  {
    title: "Endpoints",
    detail:
      "Lists observed network endpoints and helps identify heavily active systems.",
  },
  {
    title: "Conversations",
    detail:
      "Groups traffic exchanged between pairs of endpoints.",
  },
  {
    title: "Follow TCP Stream",
    detail:
      "Reconstructs the data exchanged in one TCP conversation when the protocol and capture allow it.",
  },
  {
    title: "Expert Information",
    detail:
      "Highlights notable protocol conditions, but should be interpreted as clues rather than automatic security conclusions.",
  },
  {
    title: "Packet Details",
    detail:
      "Expands protocol fields so you can inspect addresses, ports, flags, lengths, identifiers, and other evidence.",
  },
];

const investigationCases = [
  {
    title: "A workstation contacts an unfamiliar host",
    steps: [
      "Filter on the workstation address.",
      "Identify the remote destination.",
      "Determine the protocol and destination port.",
      "Review timing and connection frequency.",
      "Check DNS activity that may have resolved the destination.",
      "Correlate with host processes and logs before drawing a conclusion.",
    ],
  },
  {
    title: "A service appears unreachable",
    steps: [
      "Confirm whether traffic leaves the client.",
      "Look for a response from the destination.",
      "Review TCP handshake behavior when TCP is involved.",
      "Look for resets, retransmissions, or ICMP errors.",
      "Compare packet evidence with routing, firewall, and service state.",
    ],
  },
  {
    title: "DNS behavior looks unusual",
    steps: [
      "Filter on DNS traffic.",
      "Identify the requesting system.",
      "Review query names and response records.",
      "Look for repetition, failures, or unexpected destinations.",
      "Correlate the DNS event with later connections.",
    ],
  },
  {
    title: "You suspect unexpected listening activity",
    steps: [
      "Identify relevant inbound connection attempts in the capture.",
      "Determine destination port and protocol.",
      "Compare the evidence with the host's listening sockets.",
      "Map the socket to its owning process or service.",
      "Use host evidence to determine whether the activity is approved.",
    ],
  },
];

const interpretationRules = [
  {
    weak: "Port 443 means the traffic is definitely safe HTTPS.",
    better:
      "Port numbers are clues. Verify protocol decoding, endpoints, certificate information when available, and surrounding evidence.",
  },
  {
    weak: "A red or black packet means an attack occurred.",
    better:
      "Wireshark coloring is a visualization aid. Inspect protocol fields and context before interpreting the packet.",
  },
  {
    weak: "A TCP reset proves malicious behavior.",
    better:
      "A reset can occur for many operational reasons. Correlate it with the connection state and host evidence.",
  },
  {
    weak: "One unusual DNS query proves compromise.",
    better:
      "Review repetition, requesting host, response, later connections, and host activity before concluding anything.",
  },
  {
    weak: "Capture everything forever.",
    better:
      "Use authorized captures, defined scope, reasonable collection windows, and evidence-preservation practices.",
  },
  {
    weak: "Packet evidence explains which process created the traffic.",
    better:
      "Network captures show communication. Correlate with host evidence to identify the responsible process or user.",
  },
];

const evidenceTemplate = [
  ["Time", "When did the packet or conversation occur?"],
  ["Source", "Which system initiated or sent the traffic?"],
  ["Destination", "Which system received the traffic?"],
  ["Protocol", "What protocol was observed?"],
  ["Ports", "Which source and destination ports were involved?"],
  ["Filter", "What display filter isolated the evidence?"],
  ["Observation", "What can directly be seen in the packets?"],
  ["Correlation", "Which host logs or system evidence support the interpretation?"],
  ["Conclusion", "What does the evidence support without overstating it?"],
];

const finalChecklist = [
  "Use Wireshark's official documentation and filter reference.",
  "Know the difference between capture filters and display filters.",
  "Preserve original packet captures when treating them as evidence.",
  "Establish scope before investigating individual packets.",
  "Survey endpoints, conversations, and protocols before narrowing.",
  "Use display filters to reduce noise without deleting evidence.",
  "Inspect actual protocol fields instead of relying only on colors.",
  "Correlate ports with protocols and host evidence.",
  "Review both directions of a conversation.",
  "Use timestamps to reconstruct sequence.",
  "Correlate packet findings with logs, processes, services, and configuration.",
  "State only what the packet evidence actually supports.",
];

export default function WiresharkPacketAnalysisResourcePage() {
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
              href="/cyberpatriot/resources/linux-commands-manual-pages"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/forensics-evidence-references" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 08
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Wireshark &amp; Packet Analysis
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use packet captures to observe network communication, isolate
            relevant traffic, reconstruct sequence, and correlate network
            evidence with activity on the host.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            A packet capture shows what crossed the observed network point. It
            does not automatically explain intent, identify the responsible
            process, or prove a security incident.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Packet-analysis rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Observe first. Filter second. Correlate before concluding.
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Treat packets as evidence. Use filters to isolate relevant traffic,
            then connect network observations with host logs, processes,
            services, configuration, and competition requirements.
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
        <h2 className="text-3xl font-black text-white">
          Packet-analysis vocabulary
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Capture filters vs display filters
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {captureVsDisplay.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 text-sm text-cyan-300">{item.when}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <code className="mt-4 block rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-cyan-300">
                  {item.example}
                </code>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.caution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Useful display filters
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {displayFilters.map(([filter, meaning]) => (
            <div
              key={filter}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <code className="font-bold text-cyan-300">{filter}</code>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">What to analyze</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {analysisAreas.map((area) => (
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
          Packet-analysis workflow
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">{item.number}</p>
              <h3 className="mt-2 text-lg font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Useful Wireshark features
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {usefulFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Investigation situations
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {investigationCases.map((item) => (
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
          Weak interpretation vs better interpretation
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {interpretationRules.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak interpretation
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better interpretation
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.better}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Packet evidence note
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {evidenceTemplate.map(([field, question]) => (
            <div
              key={field}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <p className="font-black text-cyan-300">{field}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {question}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Wireshark resource checklist
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
              href="/cyberpatriot/resources/linux-commands-manual-pages"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/forensics-evidence-references" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}