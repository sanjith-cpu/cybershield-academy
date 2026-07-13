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
  `${modulePath}/network-segmentation-concepts`;
const nextLesson =
  `${modulePath}/network-defense-analysis-lab`;

const objectives = [
  "Read fictional network diagrams using consistent symbols, labels, boundaries, legends, directions, and ownership.",
  "Trace approved communication paths across endpoints, switches, routers, firewalls, zones, services, and monitoring points.",
  "Identify missing labels, unclear assumptions, stale elements, single points of failure, and defensive blind spots.",
  "Compare intended architecture with fictional inventories, rules, logs, dependencies, and change records.",
  "Produce a clear, safe, and portfolio-ready defensive network diagram using documentation address ranges only.",
];

const vocabulary = [
  [
    "Network diagram",
    "A visual representation of systems, connections, boundaries, services, controls, and communication paths.",
  ],
  [
    "Logical diagram",
    "A diagram focused on roles, subnets, zones, services, and communication rather than exact physical placement.",
  ],
  [
    "Physical diagram",
    "A diagram focused on devices, locations, interfaces, cables, access points, and physical connectivity.",
  ],
  [
    "Legend",
    "A key that explains symbols, line styles, colors, abbreviations, and status markers used in a diagram.",
  ],
  [
    "Trust boundary",
    "A marked transition between areas with different security expectations or access requirements.",
  ],
  [
    "Data flow",
    "A labeled path showing how information moves between a source, destination, and service.",
  ],
  [
    "Control point",
    "A location where a preventive, detective, responsive, or recovery control operates.",
  ],
  [
    "Monitoring point",
    "A location where logs, alerts, metrics, flows, or other evidence are collected.",
  ],
  [
    "Dependency",
    "A system, service, identity, route, or control another workflow requires to function.",
  ],
  [
    "Single point of failure",
    "One component whose failure could interrupt an important service or pathway.",
  ],
  [
    "Diagram drift",
    "A difference between documented architecture and the current environment.",
  ],
  [
    "Evidence annotation",
    "A note linking a diagram element or path to a log, rule, inventory record, owner, or change record.",
  ],
];

const symbolGuide = [
  {
    symbol: "Endpoint",
    meaning:
      "A user device, managed workstation, mobile device, server, or workload.",
    defenderQuestions:
      "Who owns it? What role does it have? Which zone and subnet should it use? What telemetry exists?",
  },
  {
    symbol: "Switch or access point",
    meaning:
      "A local-network device connecting endpoints within a segment or wireless network.",
    defenderQuestions:
      "Which VLAN, port, SSID, or local path does the device use?",
  },
  {
    symbol: "Router or gateway",
    meaning:
      "A device or service that forwards traffic between networks.",
    defenderQuestions:
      "Which routes exist? Which next hop is used? Is the gateway expected for this subnet?",
  },
  {
    symbol: "Firewall",
    meaning:
      "A control point evaluating traffic between interfaces, networks, or trust zones.",
    defenderQuestions:
      "Which source, destination, service, rule, action, and logging policy apply?",
  },
  {
    symbol: "Application or service",
    meaning:
      "A network-accessible function such as a portal, DNS resolver, file service, identity service, or monitoring collector.",
    defenderQuestions:
      "Who owns it? Which dependencies, ports, identities, and data flows are approved?",
  },
  {
    symbol: "Cloud or external service",
    meaning:
      "A third-party, internet, or cloud-hosted service outside the local environment.",
    defenderQuestions:
      "Who owns the relationship? Which public path, encryption, identity, logging, and data controls apply?",
  },
  {
    symbol: "Database or data store",
    meaning:
      "A system storing application, identity, log, configuration, or backup data.",
    defenderQuestions:
      "What data sensitivity applies? Which applications and administrators should access it?",
  },
  {
    symbol: "Monitoring or log collector",
    meaning:
      "A system receiving approved logs, alerts, metrics, flows, or health data.",
    defenderQuestions:
      "Which sources report? Is time aligned? Is collection complete and protected?",
  },
];

const lineStyles = [
  {
    style: "Solid arrow",
    use:
      "Approved primary data flow from source to destination.",
    requirement:
      "Label the direction, service, protocol or port concept, and owner.",
  },
  {
    style: "Dashed arrow",
    use:
      "Planned, backup, failover, temporary, or indirect communication path.",
    requirement:
      "State the condition, expiration, owner, and validation status.",
  },
  {
    style: "Double-headed arrow",
    use:
      "Two-way communication where both directions are intentionally relevant.",
    requirement:
      "Avoid using it when one direction is only response traffic or when the policy differs by direction.",
  },
  {
    style: "Boundary box",
    use:
      "A subnet, VLAN, zone, environment, trust level, or administrative boundary.",
    requirement:
      "Label its name, owner, purpose, address range, and trust level.",
  },
  {
    style: "Warning marker",
    use:
      "A known gap, stale record, missing owner, unsupported dependency, or review-required item.",
    requirement:
      "Connect the warning to evidence, risk, owner, and next action.",
  },
  {
    style: "Control marker",
    use:
      "A firewall, MFA requirement, endpoint protection, logging point, backup, or recovery control.",
    requirement:
      "Identify the control type, scope, owner, and evidence source.",
  },
];

const reviewQuestions = [
  {
    category: "Scope",
    questions:
      "What environment, business process, time period, and level of detail does the diagram cover?",
  },
  {
    category: "Ownership",
    questions:
      "Who owns each zone, service, device group, control, and communication path?",
  },
  {
    category: "Addressing",
    questions:
      "Are subnets, gateways, documentation ranges, VLANs, and zones labeled consistently?",
  },
  {
    category: "Trust boundaries",
    questions:
      "Where does traffic cross between guest, user, staff, server, management, monitoring, cloud, or external areas?",
  },
  {
    category: "Services and dependencies",
    questions:
      "Which exact applications, ports, identities, update paths, backups, logs, and recovery services are required?",
  },
  {
    category: "Control points",
    questions:
      "Where are firewalls, authentication, endpoint controls, filtering, logging, backups, and monitoring applied?",
  },
  {
    category: "Direction and state",
    questions:
      "Which paths are inbound, outbound, east-west, administrative, temporary, backup, or failover?",
  },
  {
    category: "Evidence and freshness",
    questions:
      "Which inventory, rule, log, owner, and change records support the diagram, and when was it last validated?",
  },
];

const diagramIssues = [
  {
    issue: "Missing trust boundaries",
    risk:
      "Readers cannot tell when traffic crosses between different security expectations.",
    improvement:
      "Add labeled zone boxes, gateways, firewall points, and approved cross-zone paths.",
  },
  {
    issue: "Unlabeled arrows",
    risk:
      "The direction, service, protocol, owner, and purpose remain unclear.",
    improvement:
      "Label each important flow with direction, service, role, and evidence source.",
  },
  {
    issue: "Overloaded diagram",
    risk:
      "Too many details hide the important relationships and make review difficult.",
    improvement:
      "Split physical, logical, data-flow, and monitoring views into separate diagrams.",
  },
  {
    issue: "Stale architecture",
    risk:
      "Rules, systems, owners, and dependencies may no longer match the picture.",
    improvement:
      "Add version, owner, validation date, and links to current evidence.",
  },
  {
    issue: "Missing monitoring path",
    risk:
      "The design shows traffic controls but not how defenders observe or investigate activity.",
    improvement:
      "Add log sources, collectors, timestamps, alert routes, and ownership.",
  },
  {
    issue: "Hidden administrative access",
    risk:
      "Management pathways may exist without clear authentication, source-device, jump-host, or logging requirements.",
    improvement:
      "Show approved management sources, MFA, jump hosts, restricted services, and monitoring.",
  },
  {
    issue: "No recovery dependencies",
    risk:
      "Backups, restore paths, failover services, and recovery networks may be omitted.",
    improvement:
      "Show backup, recovery, validation, and failover paths with restricted access.",
  },
  {
    issue: "Diagram implies proof",
    risk:
      "Readers may assume the drawing reflects current configuration and traffic without validation.",
    improvement:
      "Mark intended design separately from observed evidence and note uncertainty.",
  },
];

const evidenceMatrix = [
  {
    source: "Logical network diagram",
    supports:
      "Intended zones, subnets, services, boundaries, owners, and approved flows.",
    limitation:
      "Does not prove current physical placement, rules, or observed traffic.",
  },
  {
    source: "Physical network diagram",
    supports:
      "Device locations, interfaces, links, access points, and physical dependencies.",
    limitation:
      "May not show logical segmentation, identity, application purpose, or policy.",
  },
  {
    source: "Asset and service inventory",
    supports:
      "Current owner, role, environment, sensitivity, system name, and service purpose.",
    limitation:
      "Does not prove actual communication paths or control behavior.",
  },
  {
    source: "Firewall and route records",
    supports:
      "Configured paths, zones, services, actions, next hops, and observed decisions.",
    limitation:
      "Does not prove all application dependencies or complete user intent.",
  },
  {
    source: "Logs and monitoring data",
    supports:
      "Observed communication, timestamps, sources, destinations, services, errors, and alerts.",
    limitation:
      "Absence of evidence may result from missing collection, filtering, or time problems.",
  },
  {
    source: "Change and validation records",
    supports:
      "Approved design updates, implementation details, testing, rollback, and review results.",
    limitation:
      "Does not prove every undocumented change or drift has been discovered.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the diagram purpose",
    detail:
      "State whether the view is physical, logical, data-flow, segmentation, monitoring, or incident-focused.",
  },
  {
    step: "2",
    title: "Set scope and boundaries",
    detail:
      "Identify the environment, zones, systems, services, owners, trust levels, and time period.",
  },
  {
    step: "3",
    title: "Add approved communication",
    detail:
      "Draw labeled directional flows with services, identities, dependencies, and control points.",
  },
  {
    step: "4",
    title: "Add evidence and monitoring",
    detail:
      "Show where logs, alerts, metrics, time sources, and validation records come from.",
  },
  {
    step: "5",
    title: "Compare design with reality",
    detail:
      "Correlate the diagram with inventories, rules, routes, logs, ownership, and changes.",
  },
  {
    step: "6",
    title: "Version and validate",
    detail:
      "Record owner, date, assumptions, uncertainty, review results, and next validation date.",
  },
];

const mistakes = [
  "Mixing physical and logical details without a legend or clear purpose.",
  "Drawing arrows without direction, service, identity, owner, or evidence context.",
  "Using one large cloud symbol to hide important external services and boundaries.",
  "Failing to show firewall, authentication, monitoring, backup, and management control points.",
  "Assuming the diagram proves current configuration or traffic.",
  "Omitting temporary, failover, update, backup, and recovery paths.",
  "Using inconsistent names, subnet labels, colors, symbols, or abbreviations.",
  "Publishing real internal domains, addresses, systems, owners, or security controls.",
  "Leaving out version, owner, validation date, and known limitations.",
  "Updating the diagram without linking it to approved changes and evidence.",
];

const quizQuestions = [
  {
    question:
      "What should a network diagram legend explain?",
    choices: [
      "Symbols, line styles, colors, abbreviations, and status markers.",
      "Only the page title.",
      "Only the administrator's name.",
      "Only the number of devices.",
    ],
    answer: 0,
    explanation:
      "A legend makes the visual language consistent and understandable.",
  },
  {
    question:
      "Why should important arrows be labeled?",
    choices: [
      "To show direction, service, purpose, owner, and communication context.",
      "To make the diagram more colorful.",
      "To replace firewall rules.",
      "To prove the traffic is safe.",
    ],
    answer: 0,
    explanation:
      "Unlabeled arrows are ambiguous and weaken defensive analysis.",
  },
  {
    question:
      "What is diagram drift?",
    choices: [
      "A mismatch between documented architecture and the current environment.",
      "A wireless signal problem only.",
      "A moving image effect.",
      "A password policy failure.",
    ],
    answer: 0,
    explanation:
      "Architecture changes over time, so diagrams require ownership and validation.",
  },
  {
    question:
      "Which diagram is best for showing subnets, zones, services, and trust boundaries?",
    choices: [
      "A logical network diagram.",
      "A seating chart.",
      "A physical cable label only.",
      "A personal calendar.",
    ],
    answer: 0,
    explanation:
      "Logical diagrams focus on network roles, boundaries, and communication.",
  },
  {
    question:
      "What is the strongest way to verify a network diagram?",
    choices: [
      "Compare it with inventories, rules, routes, logs, owners, dependencies, and approved changes.",
      "Assume the newest-looking version is accurate.",
      "Use only one screenshot.",
      "Remove all dates and owners.",
    ],
    answer: 0,
    explanation:
      "Multiple evidence sources are needed to validate intended design against current reality.",
  },
  {
    question:
      "Why should monitoring paths appear on a defensive diagram?",
    choices: [
      "They show how defenders collect evidence and detect failures or suspicious activity.",
      "They replace segmentation.",
      "They make all logs public.",
      "They prove every event is malicious.",
    ],
    answer: 0,
    explanation:
      "Observability is part of architecture and should be visible in the design.",
  },
  {
    question:
      "What information should appear in a diagram version block?",
    choices: [
      "Owner, purpose, version, validation date, assumptions, limitations, and next review.",
      "Only the background color.",
      "Only the number of arrows.",
      "Only the oldest device.",
    ],
    answer: 0,
    explanation:
      "Version and validation metadata help readers judge freshness and responsibility.",
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
          Previous: I1.6 Network Segmentation Concepts
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
          Next: I1.8 Network Defense Analysis Lab
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

function SymbolGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Diagram Symbols
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read the Role Behind Each Symbol
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {symbolGuide.map((item) => (
          <div
            key={item.symbol}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.symbol}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.defenderQuestions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LineStyleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Language
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Use Lines and Markers Consistently
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {lineStyles.map((item) => (
          <div
            key={item.style}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.style}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.use}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              <span className="font-bold">Required label:</span>{" "}
              {item.requirement}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Diagram Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions for Every Defensive Diagram
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reviewQuestions.map((item) => (
          <div
            key={item.category}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.category}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.questions}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IssueGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Blind Spots
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Common Diagram Problems and Better Fixes
      </h2>

      <div className="mt-6 grid gap-4">
        {diagramIssues.map((item) => (
          <div
            key={item.issue}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="font-black text-cyan-100">{item.issue}</p>
            </div>
            <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-red-50">
              <span className="font-bold">Risk:</span> {item.risk}
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              <span className="font-bold">Improve it:</span>{" "}
              {item.improvement}
            </div>
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
        What Diagram Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
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
                {item.supports}
              </p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DiagramWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Build and Validate a Diagram in Six Steps
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

export default function ReadingSafeNetworkDiagramsPage() {
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
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.7 Reading Safe Network Diagrams
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Read and validate fictional logical, physical, data-flow,
            segmentation, management, monitoring, backup, and recovery diagrams
            without exposing real network information.
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
          lessonTitle="Reading Safe Network Diagrams"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain network models, subnets, ports, protocols, services, firewalls, and segmentation.",
            "I understand that a diagram represents intended or documented architecture and must be validated with evidence.",
            "I will label direction, ownership, trust boundaries, services, controls, monitoring, and assumptions.",
            "I will use only fictional names, documentation addresses, fake systems, invented zones, and safe diagrams.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Clean Diagram Can Still Hide Missing Controls, Unclear Ownership, and Stale Architecture"
        >
          <p className="leading-8">
            A diagram may look professional while using unlabeled arrows,
            missing trust boundaries, hiding management access, omitting log
            collection, or showing systems that no longer exist. Intermediate
            defenders read beyond appearance and ask whether the visual model is
            scoped, owned, evidence-backed, and current.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak diagram
              </p>
              <p className="mt-2 leading-7">
                Boxes and arrows with no legend, owners, directions, services,
                boundaries, monitoring, version, or evidence.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong diagram
              </p>
              <p className="mt-2 leading-7">
                Clear scope, consistent symbols, labeled flows, trust
                boundaries, controls, monitoring points, owners, assumptions,
                version, and validation date.
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
          title="Diagrams Support Design, Troubleshooting, Change Review, Incident Response, and Communication"
        >
          <p className="leading-8">
            Security teams use diagrams to understand dependencies, locate trust
            boundaries, plan controls, review changes, trace incidents, explain
            risk, preserve monitoring, and coordinate recovery. A good diagram
            is not decoration; it is a defensive communication and evidence
            tool.
          </p>
        </SectionCard>

        <SymbolGuide />
        <LineStyleGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Intended Design From Observed Evidence"
        >
          <p className="leading-8">
            A diagram may show how a network should operate. Logs, routes,
            inventories, firewall records, endpoint telemetry, and change
            records show what is currently observed. Strong defenders compare
            the two and mark mismatches, uncertainty, and validation status.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> place a small
            label on important elements such as “intended,” “observed,”
            “temporary,” “unverified,” or “review required.”
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate Diagram and Architecture Terms
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

        <ReviewGuide />
        <IssueGuide />
        <EvidenceLimits />
        <DiagramWorkflow />

        <FakeDashboardCard
          title="Fake Network Diagram Validation Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Network. It compares current diagrams with inventories, firewall rules, monitoring sources, and approved changes."
          metrics={[
            {
              label: "Validated diagrams",
              value: "5 of 8",
              note: "Logical, physical, segmentation, monitoring, and recovery views have current owners and review dates.",
            },
            {
              label: "Unlabeled paths",
              value: "4",
              note: "Several arrows lack direction, service, owner, or evidence annotations.",
            },
            {
              label: "Diagram drift findings",
              value: "3",
              note: "A retired server, missing monitoring collector, and undocumented management path remain in the current drawings.",
            },
          ]}
        />

        <FakeAlertCard
          title="Documented Management Path Does Not Match Current Firewall Evidence"
          severity="High"
          time="04:06 PM"
          source="Fake Architecture Validation Monitor"
          details="A fictional diagram shows administrators using a logged jump host to reach network-management interfaces. Firewall events instead show several staff workstations connecting directly to those interfaces."
          recommendation="Preserve diagram, firewall, identity, endpoint, owner, and change evidence; confirm the approved administrative design; then restrict direct paths through an authorized staged change and update the diagram."
        />

        <FakeLogPanel
          title="Fake Diagram Validation Evidence Timeline"
          logs={[
            "15:31:00 DIAGRAM management_path='admin-device -> jump-host -> network-devices' status='intended'",
            "15:34:12 INVENTORY approved_admin_sources='admin-device-group' jump_host='mgmt-jump-01'",
            "15:39:44 FIREWALL source='staff-ws-22' destination='switch-mgmt-04' service='https-admin' action='allow'",
            "15:40:03 FIREWALL source='staff-ws-31' destination='router-mgmt-02' service='ssh-admin' action='allow'",
            "15:42:17 IDENTITY users='approved-admins' source_device_posture='standard-staff'",
            "15:47:29 CHANGE direct_management_exception='no_current_approval'",
            "15:52:08 OWNER_CONFIRMATION required_path='admin-device-group_via_jump-host_only'",
            "16:06:21 CORRELATION finding='diagram_drift_and_direct_management_exposure' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Diagram Conclusion Is Best Supported?"
          evidence={[
            "The fictional diagram shows management access through a controlled jump host.",
            "The asset inventory lists only approved admin devices and the jump host as management sources.",
            "Firewall records show direct management connections from standard staff workstations.",
            "The users are approved administrators, but the source devices are not in the approved admin-device group.",
            "No current change or exception authorizes direct management access.",
            "The owner confirms that jump-host access is the required path.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The diagram reflects the approved design, but current firewall behavior has drifted; preserve evidence, restrict direct access through an authorized staged change, validate the jump-host path, and update the diagram review record.",
            "The diagram must be correct because it is the official version.",
            "Every administrator is malicious because direct access occurred.",
            "Delete the jump host so the diagram matches the firewall.",
          ]}
          bestAnswer={0}
          explanation="The evidence shows a mismatch between approved design and observed access. The safe response is to restore the controlled pathway through authorized change management and document the validation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Defensive Diagrams"
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
          title="Review and Rebuild a Fictional Network Diagram"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Digital Learning Network
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Students receive an outdated fictional diagram, current asset
                inventory, service list, zone design, firewall summary,
                monitoring records, backup dependencies, and approved changes.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Review
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify the diagram purpose, scope, version, owner, and validation date.</li>
                <li>Check symbol, line, color, abbreviation, and label consistency.</li>
                <li>Trace user, server, management, monitoring, backup, update, and recovery flows.</li>
                <li>Mark every trust boundary and control point.</li>
                <li>Compare intended paths with rules, routes, logs, inventory, owners, and changes.</li>
                <li>Document drift, missing evidence, uncertainty, and review-required items.</li>
                <li>Create corrected logical and monitoring diagrams.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fictional architecture, documentation address ranges,
            invented services, and fake evidence. Never recreate or publish a
            real home, school, company, cloud, VPN, or production network.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Diagram Omits the Monitoring Collector"
          scenario="A fictional segmentation diagram shows user, server, guest, and management zones but does not show the monitoring collector or log paths. Firewall logs confirm protected systems send events to a separate monitoring zone."
          choices={[
            {
              label: "Choice A",
              response:
                "Add the monitoring zone, collectors, approved log flows, time source, ownership, and evidence annotations, then validate the updated diagram.",
              outcome:
                "Best defensive choice. Monitoring is a critical dependency and should be visible in the architecture.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove monitoring because it is not on the diagram.",
              outcome:
                "Unsafe. The diagram is incomplete; observed evidence confirms the monitoring dependency.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume the firewall logs are wrong because the diagram is official.",
              outcome:
                "Weak reasoning. Official documentation still requires validation against current evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Backup Path Is Drawn as a Normal User Flow"
          scenario="A fictional diagram uses the same solid arrow for daily user traffic and a restricted backup path that operates only during an approved nightly window."
          choices={[
            {
              label: "Choice A",
              response:
                "Use a distinct line style and label the backup source, destination, service, schedule, owner, encryption, monitoring, and restricted condition.",
              outcome:
                "Best defensive choice. The visual language should distinguish normal, temporary, backup, and conditional paths.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave the arrow unlabeled because both paths use the network.",
              outcome:
                "Weak communication. Different purposes and controls should be clear.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow users to access the backup service so the paths are identical.",
              outcome:
                "Unsafe. Backup access should remain restricted to the approved dependency.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Safe Network Diagram Review Checklist"
          items={[
            "I identify whether the diagram is physical, logical, data-flow, segmentation, monitoring, recovery, or incident-focused.",
            "I verify scope, purpose, version, owner, validation date, assumptions, limitations, and next review.",
            "I use a legend for symbols, line styles, colors, abbreviations, and status markers.",
            "I label zones, subnets, gateways, documentation ranges, systems, services, owners, and trust levels.",
            "I label every important flow with direction, service, identity, purpose, and evidence context.",
            "I show firewalls, authentication, endpoint controls, monitoring, backup, management, update, and recovery paths.",
            "I separate intended design from observed evidence and mark drift or uncertainty.",
            "I compare the diagram with inventories, rules, routes, logs, dependencies, owners, and approved changes.",
            "I create separate views when one diagram becomes too crowded.",
            "I use fictional information and never publish real internal architecture or security controls.",
          ]}
        />

        <MiniQuiz
          title="I1.7 Mini Quiz: Reading Safe Network Diagrams"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a three-view fictional Network Architecture Portfolio: one logical segmentation diagram, one approved data-flow diagram, and one monitoring-and-recovery diagram. Include a legend, documentation address ranges, zones, owners, trust boundaries, directional flows, services, identities, firewall points, logging, time synchronization, backup, management, recovery, version, assumptions, evidence annotations, and validation date."
          tips={[
            "Use only fictional organizations, systems, services, identities, rules, logs, and documentation address ranges.",
            "Mark intended, observed, temporary, unverified, and review-required elements clearly.",
            "Include one diagram-drift finding and explain how it was validated and corrected.",
            "Do not include real internal domains, IP ranges, architecture, device names, owners, credentials, or controls.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Network diagrams should have a clear purpose, scope, legend, owner, version, and validation date.",
            "Important flows need direction, service, identity, purpose, control, and evidence labels.",
            "Logical, physical, data-flow, monitoring, and recovery views answer different questions.",
            "Diagrams show intended or documented architecture and must be validated against current evidence.",
            "Defensive diagrams should reveal trust boundaries, management paths, monitoring, backups, recovery, and known gaps.",
            "Safe portfolio diagrams use fictional systems and documentation address ranges rather than real internal architecture.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}