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
const nextLesson =
  `${modulePath}/ip-addressing-subnets-and-network-boundaries`;

const objectives = [
  "Compare the OSI and TCP/IP models without treating either model as a perfect picture of every real network.",
  "Map devices, protocols, services, evidence sources, and defensive controls to the layers where they are most useful.",
  "Use layered reasoning to narrow a fictional connectivity or security problem instead of guessing from one alert.",
  "Separate confirmed evidence, reasonable conclusions, missing context, and actions that require authorization.",
];

const vocabulary = [
  [
    "Network model",
    "A conceptual framework that separates communication into layers so people can describe, design, troubleshoot, and defend networks more consistently.",
  ],
  [
    "Layer",
    "A group of related networking responsibilities. Each layer serves the layer above it and depends on the layer below it.",
  ],
  [
    "Protocol",
    "A defined set of communication rules used by systems or applications.",
  ],
  [
    "Encapsulation",
    "The process of adding layer-specific information as data moves down a networking model before transmission.",
  ],
  [
    "Decapsulation",
    "The process of reading and removing layer-specific information as received data moves upward toward an application.",
  ],
  [
    "Service",
    "A network-accessible function such as web access, name resolution, address assignment, email, or file sharing.",
  ],
  [
    "Observability",
    "The ability to understand system behavior through logs, metrics, traces, alerts, diagrams, and other evidence.",
  ],
  [
    "Trust boundary",
    "A point where data, users, devices, or services move between areas with different security expectations or access rules.",
  ],
  [
    "Control",
    "A safeguard that helps prevent, detect, respond to, or recover from risk.",
  ],
  [
    "Correlation",
    "Connecting evidence from multiple sources, layers, devices, users, and timestamps to build a supported explanation.",
  ],
];

const osiLayers = [
  {
    number: "7",
    name: "Application",
    purpose:
      "Provides network functions used by applications and users, such as web access, name resolution, and email.",
    examples: "HTTP/S, DNS, SMTP concepts, application requests",
    evidence:
      "Application logs, web requests, DNS queries, authentication events, service errors",
    defensiveQuestion:
      "Which application or service created the activity, and was the request expected?",
  },
  {
    number: "6",
    name: "Presentation",
    purpose:
      "Represents, transforms, encrypts, compresses, or formats information so systems can interpret it.",
    examples: "TLS concepts, certificates, encoding, data formats",
    evidence:
      "Certificate details, encryption status, protocol negotiation, format errors",
    defensiveQuestion:
      "Was the data protected and represented in an expected way?",
  },
  {
    number: "5",
    name: "Session",
    purpose:
      "Establishes, maintains, and ends communication sessions between applications.",
    examples: "Login sessions, session timeouts, reconnection concepts",
    evidence:
      "Session IDs, login duration, timeout events, repeated reconnects",
    defensiveQuestion:
      "Does the session match the expected user, device, duration, and purpose?",
  },
  {
    number: "4",
    name: "Transport",
    purpose:
      "Moves data between applications using transport protocols, ports, reliability, and connection state.",
    examples: "TCP, UDP, source ports, destination ports",
    evidence:
      "Port numbers, connection state, resets, retransmissions, allowed or denied service",
    defensiveQuestion:
      "Which service port and transport behavior are involved?",
  },
  {
    number: "3",
    name: "Network",
    purpose:
      "Uses logical addresses and routing decisions to move traffic between networks.",
    examples: "IPv4, IPv6 concepts, routing, subnets",
    evidence:
      "Source and destination IP addresses, routes, gateways, subnet context",
    defensiveQuestion:
      "Which networks are communicating, and should this path exist?",
  },
  {
    number: "2",
    name: "Data Link",
    purpose:
      "Moves frames within a local network and identifies local interfaces.",
    examples: "Ethernet, Wi-Fi, MAC addresses, switches, VLAN concepts",
    evidence:
      "MAC addresses, switch-port records, VLAN assignment, local link events",
    defensiveQuestion:
      "Which local device, switch path, or VLAN carried the traffic?",
  },
  {
    number: "1",
    name: "Physical",
    purpose:
      "Carries signals through cables, radio, ports, and physical network equipment.",
    examples: "Cables, wireless signals, network interfaces, link state",
    evidence:
      "Link up or down, signal quality, interface state, hardware alarms",
    defensiveQuestion:
      "Is the physical connection available and functioning as expected?",
  },
];

const tcpIpLayers = [
  {
    name: "Application",
    osi: "OSI Layers 5–7",
    responsibility:
      "Application services, data representation, encryption concepts, and sessions.",
    examples:
      "HTTPS, DNS, email concepts, authentication sessions, certificates",
  },
  {
    name: "Transport",
    osi: "OSI Layer 4",
    responsibility:
      "Application-to-application delivery, ports, reliability, and connection state.",
    examples: "TCP, UDP, source ports, destination ports",
  },
  {
    name: "Internet",
    osi: "OSI Layer 3",
    responsibility:
      "Logical addressing and routing traffic between networks.",
    examples: "IP addresses, routers, gateways, subnets",
  },
  {
    name: "Network Access",
    osi: "OSI Layers 1–2",
    responsibility:
      "Local delivery, frames, interfaces, switching, Wi-Fi, cables, and signals.",
    examples: "Ethernet, MAC addresses, VLANs, wireless links",
  },
];

const evidenceMatrix = [
  {
    source: "Application log",
    strongestLayer: "Application",
    canShow:
      "User action, requested resource, application result, service error, or authentication context.",
    cannotProve:
      "The complete network path or the identity of every system by itself.",
  },
  {
    source: "DNS record",
    strongestLayer: "Application",
    canShow:
      "A device requested a name and received or failed to receive a response.",
    cannotProve:
      "That the later connection succeeded or that the destination was trustworthy.",
  },
  {
    source: "Firewall record",
    strongestLayer: "Network / Transport",
    canShow:
      "Source, destination, protocol, port, direction, rule decision, and time.",
    cannotProve:
      "What the user intended or what the application displayed.",
  },
  {
    source: "DHCP record",
    strongestLayer: "Network context",
    canShow:
      "Which fictional device received an address during a specific time window.",
    cannotProve:
      "That every later action from the address belonged to the expected user.",
  },
  {
    source: "Switch or VLAN record",
    strongestLayer: "Data Link",
    canShow:
      "Local interface, MAC address, switch port, or network-segment assignment.",
    cannotProve:
      "The full application purpose by itself.",
  },
  {
    source: "Endpoint alert",
    strongestLayer: "Host / Application context",
    canShow:
      "A process, file, user, or local connection associated with the device.",
    cannotProve:
      "That all related network activity was malicious without correlation.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Start with the symptom",
    detail:
      "State what was observed without adding assumptions: failed connection, unusual destination, repeated login, or denied service.",
  },
  {
    step: "2",
    title: "Find the lowest confirmed layer",
    detail:
      "Check whether the link, local network, address, route, service port, session, and application each have supporting evidence.",
  },
  {
    step: "3",
    title: "Move upward carefully",
    detail:
      "Do not blame an application when the device lacks a valid address, and do not blame the network when the application rejected the request.",
  },
  {
    step: "4",
    title: "Correlate across sources",
    detail:
      "Connect DHCP, DNS, firewall, endpoint, application, identity, and change records using device and time context.",
  },
  {
    step: "5",
    title: "Choose a proportionate action",
    detail:
      "Document, monitor, correct an approved configuration, contain, or escalate according to evidence and authority.",
  },
];

const mistakes = [
  "Treating the OSI model as a literal picture of every real device instead of a reasoning framework.",
  "Assuming one log source contains the entire explanation.",
  "Jumping directly to the application layer before confirming link, address, route, and service context.",
  "Assuming a successful DNS response proves the website connection also succeeded.",
  "Assuming an allowed firewall event proves the application request was legitimate.",
  "Confusing a protocol with the application or business purpose that uses it.",
  "Changing network settings without authorization, documentation, testing, and rollback planning.",
  "Ignoring timestamps, time zones, device identity, or approved change records during correlation.",
];

const quizQuestions = [
  {
    question:
      "Why do defenders use network models?",
    choices: [
      "To organize communication responsibilities, evidence, controls, and troubleshooting decisions.",
      "To prove every network uses exactly the same hardware.",
      "To replace logs and diagrams.",
      "To guarantee that an alert is malicious.",
    ],
    answer: 0,
    explanation:
      "Models create a shared framework for describing where communication and defensive evidence belong.",
  },
  {
    question:
      "Which OSI layer is most closely associated with IP addressing and routing?",
    choices: [
      "Network.",
      "Physical.",
      "Presentation.",
      "Session.",
    ],
    answer: 0,
    explanation:
      "The Network layer handles logical addressing and routing between networks.",
  },
  {
    question:
      "Which evidence most directly helps confirm local VLAN or switch placement?",
    choices: [
      "Switch-port, MAC-address, or VLAN records.",
      "A browser page title.",
      "A portfolio reflection.",
      "A password-strength score.",
    ],
    answer: 0,
    explanation:
      "Local interface, MAC, switch-port, and VLAN evidence is most closely associated with the Data Link layer.",
  },
  {
    question:
      "What does a successful DNS lookup prove?",
    choices: [
      "The name-resolution request received a result, but the later connection and application outcome still require evidence.",
      "The destination is completely trustworthy.",
      "The firewall allowed every later connection.",
      "The user successfully logged in.",
    ],
    answer: 0,
    explanation:
      "DNS evidence describes name resolution, not the complete connection or application result.",
  },
  {
    question:
      "What is the strongest response to a fictional connection failure?",
    choices: [
      "Check evidence layer by layer and correlate it with device, user, time, and change context.",
      "Immediately disable the firewall.",
      "Assume the application is broken.",
      "Change several settings at once.",
    ],
    answer: 0,
    explanation:
      "Layered review narrows the problem and prevents unsupported or disruptive changes.",
  },
  {
    question:
      "Why can a firewall allow record not prove that an action was safe?",
    choices: [
      "It records a traffic-rule decision, not the complete user intent, application content, or business purpose.",
      "Firewalls never produce evidence.",
      "Allowed traffic is always malicious.",
      "Application evidence is never useful.",
    ],
    answer: 0,
    explanation:
      "Firewall evidence is valuable but must be combined with application, identity, endpoint, and business context.",
  },
  {
    question:
      "Which statement best describes correlation?",
    choices: [
      "Connecting evidence from multiple sources and layers using shared devices, users, addresses, and timestamps.",
      "Reading only the highest-severity alert.",
      "Deleting duplicate records before review.",
      "Assuming all events with the same color are related.",
    ],
    answer: 0,
    explanation:
      "Correlation builds a supported explanation from multiple evidence sources.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={trackPath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Intermediate Track
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
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href={trackPath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Intermediate Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: I1.2 IP Addressing, Subnets, and Network Boundaries
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

function LayeredModelMap() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Model
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The OSI Model as a Defensive Reasoning Map
      </h2>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">
        The layers do not replace real architecture diagrams or logs. They help
        defenders ask organized questions about where communication, evidence,
        and controls may belong.
      </p>

      <div className="mt-6 grid gap-3">
        {osiLayers.map((layer) => (
          <div
            key={layer.number}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.16fr_0.62fr_1fr_1fr]"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                {layer.number}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Layer
                </p>
                <p className="font-black text-cyan-100">{layer.name}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Main responsibility
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {layer.purpose}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                Examples and evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                <span className="font-semibold text-slate-100">
                  Examples:
                </span>{" "}
                {layer.examples}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                <span className="font-semibold text-slate-100">
                  Evidence:
                </span>{" "}
                {layer.evidence}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender question
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {layer.defensiveQuestion}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
        <span className="font-bold">Intermediate habit:</span> begin with the
        evidence you can confirm, move through the layers carefully, and avoid
        blaming a higher layer before checking the lower dependencies it needs.
      </div>
    </section>
  );
}

function TcpIpComparison() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Model Comparison
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        OSI and TCP/IP Describe Similar Responsibilities Differently
      </h2>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">
        The OSI model uses seven layers and is useful for detailed explanation.
        The TCP/IP model groups responsibilities into fewer layers and more
        closely reflects common internet architecture discussions.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {tcpIpLayers.map((layer) => (
          <div
            key={layer.name}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-5 last:border-b-0 md:grid-cols-[0.55fr_0.55fr_1.25fr_1fr]"
          >
            <p className="font-black text-cyan-100">{layer.name}</p>
            <p className="text-sm font-semibold text-blue-200">{layer.osi}</p>
            <p className="text-sm leading-6 text-slate-300">
              {layer.responsibility}
            </p>
            <p className="text-sm leading-6 text-yellow-100">
              {layer.examples}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        A protocol, tool, or event may involve more than one layer. The goal is
        not to force every detail into one box; the goal is to organize the
        strongest available evidence.
      </div>
    </section>
  );
}

function EvidenceMatrix() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Different Evidence Sources Can and Cannot Prove
      </h2>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">
        Intermediate defenders avoid overclaiming. Every evidence source is
        useful, but each has limits.
      </p>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Strongest layer context
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-200">
                {item.strongestLayer}
              </p>
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

function LayeredWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Use the Layers to Narrow the Problem
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
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

export default function NetworkModelsAndDefensiveThinkingPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.1 Network Models and Defensive Thinking
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Use the OSI and TCP/IP models to organize fictional network
            evidence, identify where communication may be failing, map
            defensive controls, and explain conclusions without overclaiming.
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
          lessonTitle="Network Models and Defensive Thinking"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain the basic roles of devices, IP addresses, DNS, ports, protocols, and web connections from the Beginner Track.",
            "I understand that a network model is a reasoning tool, not a perfect physical picture of every system.",
            "I will use only fictional diagrams, addresses, logs, devices, users, organizations, and scenarios.",
            "I will not scan, probe, capture, reconfigure, or test real networks or systems.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Browser Error Can Begin at the Cable, the VLAN, the IP Route, the Service Port, the Session, or the Application"
        >
          <p className="leading-8">
            When a user reports that “the website is broken,” an intermediate
            defender does not immediately blame the website. The device may
            have no link, the wrong network segment, an invalid address, a
            missing route, a blocked service, an expired certificate, an
            interrupted session, or an application error. Network models help
            the defender test these possibilities in an organized order.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The site failed, so disable the firewall and change several
                settings until it works.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the symptom, check evidence layer by layer, correlate
                the records, identify the lowest confirmed failure, and make
                only an authorized change.”
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
          title="Layered Reasoning Reduces Guessing, Missed Evidence, and Disruptive Changes"
        >
          <p className="leading-8">
            Security teams often receive incomplete reports such as “the app is
            slow,” “the login failed,” or “this destination looks unusual.”
            Models help teams separate local connectivity, addressing, routing,
            transport, sessions, encryption, and application behavior. This
            makes communication clearer and helps defenders choose safer,
            narrower actions.
          </p>
        </SectionCard>

        <LayeredModelMap />

        <SectionCard
          eyebrow="Core Concept"
          title="Every Higher Layer Depends on Services Below It"
        >
          <p className="leading-8">
            An application cannot reach a remote service without lower-layer
            communication. However, a working lower layer does not guarantee
            that every higher layer is functioning or trustworthy. For example,
            a device can have a working wireless link, valid address, successful
            DNS response, and allowed HTTPS connection while the application
            still rejects the login.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Reasoning rule:</span> evidence at one
            layer confirms only what that evidence actually supports. It should
            not be stretched into a conclusion about every other layer.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate Terms for Layered Network Analysis
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

        <TcpIpComparison />
        <EvidenceMatrix />
        <LayeredWorkflow />

        <FakeDashboardCard
          title="Fake Layered Connectivity Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Network. It combines local link, VLAN, DHCP, DNS, firewall, TLS, session, and application evidence."
          metrics={[
            {
              label: "Physical and local link",
              value: "Healthy",
              note: "Wireless association is stable and the device is visible on a switch-managed access point.",
            },
            {
              label: "Address and DNS",
              value: "Healthy",
              note: "The device received a valid fictional address and resolved portal.training.test.",
            },
            {
              label: "HTTPS service",
              value: "Denied",
              note: "The firewall classified the device in the guest zone instead of the student-lab zone.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Training Portal Unreachable After Network Change"
          severity="Medium"
          time="09:08 AM"
          source="Fake Service Monitoring"
          details="A fictional student-lab device has a healthy wireless link, valid address, successful DNS response, and repeated denied HTTPS attempts after a documented segmentation change."
          recommendation="Preserve the records, compare VLAN and firewall-zone assignments with the approved change, confirm ownership, and escalate the likely configuration mismatch."
        />

        <FakeLogPanel
          title="Fake Multi-Layer Evidence Timeline"
          logs={[
            "09:01:52 PHYSICAL interface='wlan0' link_state='up' signal='good'",
            "09:02:04 DATA_LINK device='student-lab-17' vlan='30' mac='02:42:ac:11:00:17'",
            "09:02:08 NETWORK dhcp_address='10.42.16.57' gateway='10.42.16.1' lease='active'",
            "09:02:31 APPLICATION dns_query='portal.training.test' response='198.51.100.42'",
            "09:02:34 TRANSPORT protocol='tcp' destination_port='443' state='attempted'",
            "09:02:34 FIREWALL source_zone='guest' destination='training_portal' action='deny'",
            "09:05:10 CHANGE approved='true' title='student-lab segmentation update'",
            "09:08:03 CORRELATION expected_zone='student-lab' observed_zone='guest' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Layered Explanation Is Best Supported?"
          evidence={[
            "The fictional device has a stable wireless link and appears in VLAN 30.",
            "DHCP assigned a valid fictional address and gateway.",
            "DNS successfully resolved the approved training portal.",
            "HTTPS attempts were denied because the firewall classified the source as guest.",
            "The approved change says VLAN 30 should map to the student-lab zone.",
          ]}
          question="What is the strongest defensive conclusion and next action?"
          options={[
            "A likely authorized configuration mismatch exists between VLAN 30 and the firewall zone; preserve evidence, confirm the approved mapping, and have the responsible owner correct and validate it.",
            "DNS is broken because the website did not load.",
            "The wireless link is broken because the application failed.",
            "Disable the firewall so all traffic can pass.",
          ]}
          bestAnswer={0}
          explanation="The lower layers are functioning, DNS succeeded, and the firewall record directly identifies a zone mismatch after an approved segmentation change. Any correction still requires the responsible owner, documentation, testing, and validation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Layered Analysis"
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
          title="Build a Layered Evidence Map for a Fictional Service Failure"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Case
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Eastview Media Lab Upload Service
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                A fictional media-lab device can reach the local network and
                resolve the upload service name, but large approved uploads fail
                after a network policy update. The evidence set contains a
                diagram, DHCP record, DNS response, firewall decision, service
                log, user report, and change ticket.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Sort each evidence item by its strongest layer context.</li>
                <li>Record what each item confirms and what it cannot prove.</li>
                <li>Identify the lowest layer with evidence of failure.</li>
                <li>Connect device, address, user, service, and timestamps.</li>
                <li>Compare the event with the approved policy change.</li>
                <li>Write a conclusion with confidence and missing evidence.</li>
                <li>Recommend only an authorized, reversible next action.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not use real packet captures, live network tools, real addresses,
            private diagrams, or production settings. The goal is evidence
            reasoning, not interaction with a real network.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="DNS Works, but the HTTPS Connection Is Denied"
          scenario="A fictional device receives a valid address, resolves the approved service name, and then receives a firewall denial for TCP destination port 443. The device belongs to an approved group, but the source zone in the firewall log appears incorrect."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the evidence, verify the VLAN-to-zone mapping and approved change, and escalate the likely configuration mismatch to the responsible owner.",
              outcome:
                "Best defensive choice. The evidence narrows the problem to the network or transport control path while respecting authorization.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that DNS is broken because the service did not load.",
              outcome:
                "Weak reasoning. The DNS evidence shows that name resolution succeeded.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the firewall rule immediately.",
              outcome:
                "Unsafe. Production changes require authority, review, testing, documentation, and rollback planning.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Network Connection Succeeds, but the Application Rejects the Login"
          scenario="A fictional browser reaches the approved HTTPS service, the certificate is valid, and the application displays an account-disabled message. Identity records show the user was intentionally disabled during an approved offboarding test."
          choices={[
            {
              label: "Choice A",
              response:
                "Document that lower-layer connectivity succeeded and route the case to the identity owner because the application and IAM evidence explain the rejection.",
              outcome:
                "Best defensive choice. The network path is working, and the evidence supports an identity or application-layer decision.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Change the router because the user cannot log in.",
              outcome:
                "Weak reasoning. The successful HTTPS connection shows the network path is available.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reactivate the account without approval.",
              outcome:
                "Unsafe. Account state changes require authorization and ownership.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Layered Network Analysis Checklist"
          items={[
            "I describe the observed symptom without adding unsupported assumptions.",
            "I use the OSI or TCP/IP model as a reasoning framework rather than a perfect literal map.",
            "I identify the lowest layer supported by evidence and move upward carefully.",
            "I connect physical, local network, address, route, transport, session, encryption, and application evidence where relevant.",
            "I record what each source confirms and what it cannot prove alone.",
            "I correlate device, user, address, destination, service, timestamp, and approved-change context.",
            "I separate confirmed facts, reasonable conclusions, missing evidence, and uncertainty.",
            "I recommend only authorized, proportionate, documented, and reversible actions.",
            "I use fictional evidence and never test or reconfigure a real network.",
          ]}
        />

        <MiniQuiz
          title="I1.1 Mini Quiz: Network Models and Defensive Thinking"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a two-page fictional Layered Network Defense Analysis. Page one should contain a labeled OSI or TCP/IP diagram showing devices, trust boundaries, services, evidence sources, and defensive controls. Page two should explain one fictional connectivity or security event layer by layer, including confirmed facts, evidence limits, correlation, confidence, missing context, recommended action, authorization owner, and validation steps."
          tips={[
            "Use only fictional systems, users, addresses, domains, logs, diagrams, and organizations.",
            "Show what each evidence source supports instead of claiming that one source proves the entire case.",
            "Include at least one trust boundary, one preventive control, one detective control, and one documented response step.",
            "Do not include real IP addresses, private network diagrams, credentials, live captures, or production configuration details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "The OSI and TCP/IP models organize networking responsibilities, evidence, controls, and communication.",
            "A working lower layer is necessary but does not guarantee that every higher layer is working or trustworthy.",
            "DNS, firewall, endpoint, switch, identity, and application records each provide partial evidence with limits.",
            "Layered analysis starts with the symptom, confirms the lowest supported layer, and moves upward carefully.",
            "Intermediate defenders correlate multiple sources, state uncertainty honestly, and recommend only authorized actions.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}