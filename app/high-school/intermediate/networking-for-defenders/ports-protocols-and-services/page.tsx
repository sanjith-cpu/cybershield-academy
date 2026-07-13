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
  `${modulePath}/ip-addressing-subnets-and-network-boundaries`;
const nextLesson =
  `${modulePath}/dns-dhcp-and-common-network-services`;

const objectives = [
  "Explain how transport protocols, ports, applications, and services relate without treating them as identical.",
  "Use source, destination, direction, protocol, port, state, owner, and purpose to review fictional network activity.",
  "Distinguish expected, unnecessary, exposed, denied, and review-required services.",
  "Correlate service inventory, firewall, endpoint, authentication, DNS, and change evidence before reaching a conclusion.",
  "Recommend safe defensive actions based on least privilege, ownership, approved purpose, and evidence quality.",
];

const vocabulary = [
  [
    "Transport protocol",
    "A protocol that helps applications exchange data between endpoints. TCP and UDP are common examples.",
  ],
  [
    "Port",
    "A numbered logical identifier used to direct network traffic to the correct application or service.",
  ],
  [
    "Service",
    "A function made available by a system, application, or device, such as web access, name resolution, remote administration, or file sharing.",
  ],
  [
    "Source port",
    "The port associated with the system that begins or participates in a connection. Client source ports are often temporary.",
  ],
  [
    "Destination port",
    "The port associated with the service a connection is trying to reach.",
  ],
  [
    "Well-known port",
    "A commonly recognized port number associated with a standard service concept.",
  ],
  [
    "Ephemeral port",
    "A temporary client-side port selected for a connection rather than a permanently hosted service.",
  ],
  [
    "Listening service",
    "A service waiting for incoming network requests on a specific interface, protocol, and port.",
  ],
  [
    "Connection state",
    "The observed status of a connection, such as attempted, established, closed, reset, allowed, or denied.",
  ],
  [
    "Exposure",
    "The degree to which a service is reachable from other devices, networks, zones, or the public internet.",
  ],
  [
    "Service inventory",
    "A documented list of approved services, owners, systems, ports, protocols, purpose, exposure, and review dates.",
  ],
  [
    "Least functionality",
    "The practice of enabling only the services and features required for an approved purpose.",
  ],
];

const protocolComparison = [
  {
    protocol: "TCP",
    behavior:
      "Connection-oriented communication with sequencing, acknowledgments, and reliability concepts.",
    defenderUse:
      "Useful when reviewing connection state, repeated failures, resets, established sessions, and service availability.",
    caution:
      "A successful TCP connection does not prove that the application request was authorized or trustworthy.",
  },
  {
    protocol: "UDP",
    behavior:
      "Connectionless communication with lower overhead and no built-in delivery confirmation at the transport layer.",
    defenderUse:
      "Common in services that favor speed, short requests, or application-managed reliability.",
    caution:
      "A lack of connection state does not mean the traffic is automatically suspicious.",
  },
  {
    protocol: "ICMP concepts",
    behavior:
      "Carries network control, status, and error information rather than normal application sessions.",
    defenderUse:
      "Can help explain reachability, path, or error conditions when allowed and interpreted correctly.",
    caution:
      "One failed reachability test does not prove the destination is unavailable because controls may intentionally limit it.",
  },
];

const commonServices = [
  {
    service: "Web",
    ports: "80/TCP and 443/TCP concepts",
    expectedPurpose:
      "Browser and application access to approved web services.",
    defensiveQuestions:
      "Is HTTPS expected? Is the domain approved? Is the source group allowed? Is the certificate and application context normal?",
  },
  {
    service: "DNS",
    ports: "53/UDP and 53/TCP concepts",
    expectedPurpose:
      "Name-resolution requests and responses.",
    defensiveQuestions:
      "Which resolver was used? Was the domain expected? Did resolution succeed? Did a later connection occur?",
  },
  {
    service: "DHCP",
    ports: "67/UDP and 68/UDP concepts",
    expectedPurpose:
      "Automatic address configuration for approved devices.",
    defensiveQuestions:
      "Which scope assigned the address? Does the lease match the VLAN, subnet, device, and approved design?",
  },
  {
    service: "Secure remote administration",
    ports: "22/TCP or 3389/TCP concepts",
    expectedPurpose:
      "Authorized administration of approved systems through controlled pathways.",
    defensiveQuestions:
      "Who owns the service? Is remote administration required? Is access restricted, logged, protected, and time-bounded?",
  },
  {
    service: "Email",
    ports: "25, 465, 587, 110, 143, 993, and 995 concepts",
    expectedPurpose:
      "Sending, receiving, and securely accessing email through approved services.",
    defensiveQuestions:
      "Which mail role is expected? Is encryption required? Is the destination an approved provider?",
  },
  {
    service: "File sharing",
    ports: "445/TCP and related concepts",
    expectedPurpose:
      "Authorized access to shared files or organizational resources.",
    defensiveQuestions:
      "Is the service needed between these zones? Are permissions and authentication appropriate? Is the exposure too broad?",
  },
];

const serviceStates = [
  {
    state: "Approved and expected",
    meaning:
      "The service has a documented owner, purpose, required users, protected pathway, and current review.",
    action:
      "Continue monitoring and validate that exposure remains limited to the approved need.",
  },
  {
    state: "Approved but overexposed",
    meaning:
      "The service is legitimate, but more devices, users, or zones can reach it than necessary.",
    action:
      "Recommend narrower firewall, identity, or segmentation controls through the approved change process.",
  },
  {
    state: "Unnecessary",
    meaning:
      "The service is enabled but no current approved purpose or owner can be confirmed.",
    action:
      "Preserve evidence and request owner review before disabling or removing it.",
  },
  {
    state: "Denied as designed",
    meaning:
      "A control blocks traffic that is not approved across the boundary.",
    action:
      "Document the expected denial and avoid weakening the rule without evidence and authority.",
  },
  {
    state: "Review required",
    meaning:
      "Evidence is incomplete, ownership is unclear, or the service behavior does not match the baseline.",
    action:
      "Gather approved context, assign ownership, assess impact, and escalate proportionately.",
  },
];

const evidenceMatrix = [
  {
    source: "Service inventory",
    supports:
      "Approved owner, system, port, protocol, purpose, exposure, authentication requirement, and review date.",
    limitation:
      "May be outdated or incomplete unless validated against current technical evidence.",
  },
  {
    source: "Firewall record",
    supports:
      "Source, destination, direction, protocol, port, zone, rule, action, and timestamp.",
    limitation:
      "Does not prove the complete application content, user intent, or service ownership.",
  },
  {
    source: "Endpoint process record",
    supports:
      "Which local process, user, or application opened or received a network connection.",
    limitation:
      "Does not prove the remote service is approved or the entire network path succeeded.",
  },
  {
    source: "Authentication record",
    supports:
      "Account, result, source context, time, and sometimes authentication method.",
    limitation:
      "A successful login does not prove every later action was appropriate.",
  },
  {
    source: "DNS record",
    supports:
      "The name requested and the address returned during the time window.",
    limitation:
      "Does not prove that a service was reached or that its port was allowed.",
  },
  {
    source: "Change record",
    supports:
      "Approved owner, reason, timing, affected service, test plan, and rollback plan.",
    limitation:
      "Does not prove the change was implemented exactly as approved.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Name the service",
    detail:
      "Identify the application or function the traffic is expected to support.",
  },
  {
    step: "2",
    title: "Read the full tuple",
    detail:
      "Record source, destination, direction, protocol, source port, destination port, state, and time.",
  },
  {
    step: "3",
    title: "Check ownership and purpose",
    detail:
      "Compare the observed service with inventory, role, system owner, and approved business need.",
  },
  {
    step: "4",
    title: "Measure exposure",
    detail:
      "Determine which users, devices, zones, or networks can reach the service.",
  },
  {
    step: "5",
    title: "Correlate evidence",
    detail:
      "Connect firewall, endpoint, DNS, authentication, inventory, and change records.",
  },
  {
    step: "6",
    title: "Choose a safe action",
    detail:
      "Document, monitor, restrict, validate, or escalate through an authorized and reversible process.",
  },
];

const mistakes = [
  "Assuming a port number alone identifies the complete application or purpose.",
  "Treating every connection to an uncommon port as malicious.",
  "Assuming a common port automatically means the traffic is safe.",
  "Confusing a client-side ephemeral port with a server-side listening service.",
  "Ignoring traffic direction, connection state, source zone, destination zone, and owner.",
  "Assuming an allowed firewall event proves the application action was authorized.",
  "Disabling a service before confirming ownership, dependency, impact, rollback, and approval.",
  "Keeping an unnecessary service enabled only because no alert has been generated.",
  "Using one service inventory entry without checking whether it is current.",
  "Publishing real service inventories, internal addresses, or production firewall details in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of a network port?",
    choices: [
      "To direct traffic to the correct application or service.",
      "To identify the physical building.",
      "To prove the user is authorized.",
      "To replace an IP address.",
    ],
    answer: 0,
    explanation:
      "Ports help operating systems and applications direct traffic to the appropriate service.",
  },
  {
    question:
      "Which statement best compares TCP and UDP?",
    choices: [
      "TCP provides connection and reliability concepts, while UDP is connectionless at the transport layer.",
      "TCP is always safe and UDP is always malicious.",
      "UDP has no legitimate uses.",
      "They are both application names.",
    ],
    answer: 0,
    explanation:
      "TCP and UDP use different transport behaviors and both support legitimate services.",
  },
  {
    question:
      "Why can port 443 not prove that traffic is trustworthy?",
    choices: [
      "A common HTTPS port describes service context, not the full domain, application content, user intent, or authorization.",
      "Port 443 is never used for web traffic.",
      "Ports cannot appear in firewall records.",
      "Encrypted traffic is always malicious.",
    ],
    answer: 0,
    explanation:
      "Port context is useful but incomplete and must be correlated with other evidence.",
  },
  {
    question:
      "What is an ephemeral port?",
    choices: [
      "A temporary client-side port used for a connection.",
      "A permanent public web service.",
      "A physical switch port.",
      "A password reset code.",
    ],
    answer: 0,
    explanation:
      "Client systems commonly use temporary source ports when initiating connections.",
  },
  {
    question:
      "What should happen when a service has no confirmed owner or purpose?",
    choices: [
      "Preserve evidence, investigate dependencies, assign ownership, and request an authorized review.",
      "Disable it immediately without checking impact.",
      "Expose it to more networks.",
      "Assume it is harmless.",
    ],
    answer: 0,
    explanation:
      "Unowned services require careful review before changes are made.",
  },
  {
    question:
      "Which evidence best connects a local program to a network connection?",
    choices: [
      "Endpoint process and connection records.",
      "Only a DNS response.",
      "Only the service inventory.",
      "Only the alert color.",
    ],
    answer: 0,
    explanation:
      "Endpoint evidence can connect a process, user, and network connection on the device.",
  },
  {
    question:
      "What is the strongest response to an approved service that is reachable from too many zones?",
    choices: [
      "Recommend narrower authorized access based on least privilege, ownership, testing, and rollback.",
      "Delete every firewall rule.",
      "Leave it unchanged forever.",
      "Publish the service details.",
    ],
    answer: 0,
    explanation:
      "Overexposure should be reduced through a controlled, evidence-based change process.",
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
          Previous: I1.2 IP Addressing and Subnets
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
          Next: I1.4 DNS, DHCP, and Common Network Services
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

function ProtocolComparison() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Transport Comparison
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        TCP, UDP, and Network-Control Concepts
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {protocolComparison.map((item) => (
          <div
            key={item.protocol}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">
              {item.protocol}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.behavior}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defensive use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defenderUse}
              </p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Caution
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.caution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceReference() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Service Reference
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Common Port and Service Concepts
      </h2>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">
        Port numbers are clues, not complete conclusions. Defenders also need
        direction, owner, source, destination, process, encryption, identity,
        purpose, and change context.
      </p>

      <div className="mt-6 grid gap-4">
        {commonServices.map((item) => (
          <div
            key={item.service}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_0.65fr_1fr_1.2fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Service
              </p>
              <p className="mt-2 font-black text-cyan-100">
                {item.service}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Port concepts
              </p>
              <p className="mt-2 font-mono text-sm text-blue-200">
                {item.ports}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Expected purpose
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.expectedPurpose}
              </p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.defensiveQuestions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceStateGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Service Decisions
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Classify the Service Before Recommending a Change
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {serviceStates.map((item) => (
          <div
            key={item.state}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.state}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              <span className="font-bold">Safe action:</span> {item.action}
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
        What Service Evidence Can and Cannot Prove
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

function ServiceWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review a Service in Six Steps
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

export default function PortsProtocolsAndServicesPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.3 Ports, Protocols, and Services
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Analyze fictional network services using protocol, port, direction,
            connection state, owner, exposure, purpose, endpoint context,
            firewall evidence, and least-privilege decisions.
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
          lessonTitle="Ports, Protocols, and Services"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain the basic purpose of IP addresses, subnets, gateways, routing, and network boundaries.",
            "I understand that a port number is one clue and does not prove the full application or purpose.",
            "I will review service ownership, exposure, direction, protocol, state, and business need together.",
            "I will use only fictional services, systems, logs, users, addresses, organizations, and change records.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Same Port Can Support Approved Work, Unnecessary Exposure, or Suspicious Activity"
        >
          <p className="leading-8">
            Port 443 often supports HTTPS, but a defender still needs to know
            which application opened the connection, which domain and address
            were involved, whether the destination is approved, which account
            acted, whether the service is expected, and what the firewall and
            endpoint records show. Port context begins the review; it does not
            finish it.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “It uses a common port, so it must be safe.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Read the complete connection tuple, identify the service and
                owner, measure exposure, correlate evidence, and compare the
                activity with approved purpose.”
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
          title="Services Create Useful Capabilities and Potential Exposure"
        >
          <p className="leading-8">
            Every enabled service should have a reason, an owner, an approved
            audience, appropriate authentication, logging, protection, and a
            review process. Defenders reduce risk by understanding what each
            service does, who needs it, where it should be reachable, and what
            evidence confirms normal behavior.
          </p>
        </SectionCard>

        <ProtocolComparison />

        <SectionCard
          eyebrow="Core Concept"
          title="A Connection Is More Than a Port Number"
        >
          <p className="leading-8">
            A useful defensive record includes a source address, source port,
            destination address, destination port, transport protocol,
            direction, state, time, device, user, process, zone, rule decision,
            service owner, and approved purpose. Missing context should reduce
            confidence rather than encourage a stronger claim.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Source", "Where the connection began or was observed."],
              ["Destination", "The system or service the traffic attempted to reach."],
              ["Protocol and ports", "The transport behavior and logical service identifiers."],
              ["Context", "User, process, owner, purpose, direction, state, zone, and time."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate Service and Transport Terms
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

        <ServiceReference />
        <ServiceStateGuide />
        <EvidenceLimits />
        <ServiceWorkflow />

        <FakeDashboardCard
          title="Fake Service Exposure Dashboard"
          subtitle="Training dashboard for the fictional Northstar Research Network. It compares approved service inventory with current firewall and endpoint evidence."
          metrics={[
            {
              label: "Approved web services",
              value: "12",
              note: "All twelve have owners, HTTPS requirements, limited zones, and current review dates.",
            },
            {
              label: "Unowned listening service",
              value: "1",
              note: "A fictional workstation is listening on TCP 8080 with no current owner in the inventory.",
            },
            {
              label: "Overexposed file service",
              value: "1",
              note: "An approved file service is reachable from both staff and guest zones instead of staff only.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unowned Service Listening After an Approved Software Test"
          severity="Medium"
          time="01:42 PM"
          source="Fake Service Inventory Monitor"
          details="A fictional managed workstation is listening on TCP destination port 8080. Endpoint records connect the listener to a test application, but the approved test ended three days ago and the service inventory has no current owner."
          recommendation="Preserve endpoint, inventory, authentication, firewall, and change evidence; confirm dependencies and ownership; then request an authorized disablement or extension with validation."
        />

        <FakeLogPanel
          title="Fake Service and Connection Evidence Timeline"
          logs={[
            "13:31:02 INVENTORY system='research-ws-14' approved_services='https-client,dns-client,file-client'",
            "13:32:18 ENDPOINT process='training-preview.exe' user='lab-user-4' listen='0.0.0.0:8080/tcp'",
            "13:32:25 FIREWALL source_zone='staff' destination='research-ws-14:8080' action='allow' rule='temporary-test'",
            "13:33:09 FIREWALL source_zone='guest' destination='research-ws-14:8080' action='deny' rule='default-boundary'",
            "13:35:42 CHANGE title='preview application test' approved='true' end_time='three_days_ago'",
            "13:37:16 OWNER_LOOKUP service='8080/tcp' result='no_current_owner'",
            "13:40:21 DEPENDENCY_CHECK active_clients='0' application_status='test_complete'",
            "13:42:03 CORRELATION finding='expired temporary service remains enabled' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Service Conclusion Is Best Supported?"
          evidence={[
            "The fictional endpoint is listening on TCP 8080 on all local interfaces.",
            "The process belongs to an approved preview application test.",
            "The approved test ended three days ago.",
            "No current service owner or dependency is recorded.",
            "Staff-zone access is still allowed through a temporary firewall rule.",
            "Guest-zone access is denied by the boundary policy.",
          ]}
          question="What is the strongest defensive conclusion and next action?"
          options={[
            "A formerly approved temporary service likely remained enabled after its test window; preserve evidence, confirm no dependency, and have the responsible owner remove or extend it through the approved change process.",
            "The service is definitely malicious because it uses port 8080.",
            "Guest access should be allowed because staff access is allowed.",
            "Delete the process and firewall rule immediately without owner review.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an expired temporary service rather than confirmed malicious activity. The service still needs owner confirmation, dependency review, authorization, change documentation, validation, and rollback planning."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Service Analysis"
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
          title="Create a Fictional Service Inventory and Exposure Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Harborview Digital Arts Network
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional network includes a web portal, DNS resolver, DHCP
                service, file server, remote-administration gateway, email
                service, and one temporary development service. Students receive
                a service inventory, network zones, firewall records, endpoint
                process evidence, and approved change records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify every service, owner, system, protocol, and port.</li>
                <li>Record who or what should reach each service.</li>
                <li>Compare listening services with the approved inventory.</li>
                <li>Classify each service as expected, overexposed, unnecessary, denied as designed, or review required.</li>
                <li>Connect firewall, endpoint, DNS, authentication, and change evidence.</li>
                <li>Document evidence limits and uncertainty.</li>
                <li>Recommend authorized, reversible, and validated next actions.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fictional logs, documentation addresses, invented service
            names, and safe diagrams. Do not scan real devices, inspect real
            listening ports, or collect production service inventories.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Approved Service Is Reachable From the Guest Zone"
          scenario="A fictional file service is approved for staff use. Firewall evidence shows the staff zone and guest zone can both reach TCP 445, while the design document says guest access should be blocked."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the rule and access evidence, confirm ownership and design, then request a narrower authorized firewall change with testing and rollback.",
              outcome:
                "Best defensive choice. The service is legitimate, but its exposure is broader than the approved need.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude the file server is malicious because it uses TCP 445.",
              outcome:
                "Unsupported. The service may be legitimate even though the access rule is too broad.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable all file sharing immediately.",
              outcome:
                "Unsafe. The service has an approved staff purpose and requires controlled correction.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A User Connects to an Uncommon Destination Port"
          scenario="A fictional approved application connects outbound to TCP 8443 at a documented vendor domain. DNS, endpoint, inventory, and change records all match a scheduled update."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the correlated evidence and classify the activity as expected while continuing normal monitoring.",
              outcome:
                "Best defensive choice. An uncommon port is not automatically suspicious when ownership, purpose, destination, process, and timing align.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Block the connection only because the port is uncommon.",
              outcome:
                "Weak reasoning. Port rarity is one clue, not a complete conclusion.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the vendor connection details for others to test.",
              outcome:
                "Unsafe. Internal service and vendor details should remain protected and handled through approved channels.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Ports, Protocols, and Services Review Checklist"
          items={[
            "I identify the application or function the traffic is expected to support.",
            "I record source, destination, direction, protocol, source port, destination port, connection state, and timestamp.",
            "I distinguish client ephemeral ports from server listening ports.",
            "I compare observed services with current inventory, owner, purpose, and review date.",
            "I measure which users, devices, zones, and networks can reach the service.",
            "I correlate firewall, endpoint, DNS, authentication, inventory, and change evidence.",
            "I do not treat a common or uncommon port as proof by itself.",
            "I classify services as expected, overexposed, unnecessary, denied as designed, or review required.",
            "I recommend only authorized, documented, tested, reversible, and validated changes.",
            "I use fictional evidence and never scan or inspect real systems.",
          ]}
        />

        <MiniQuiz
          title="I1.3 Mini Quiz: Ports, Protocols, and Services"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Service Inventory and Exposure Review for a small organization. Include at least eight services with owner, system, protocol, port, purpose, required users or zones, authentication requirement, logging source, current exposure, risk classification, and review date. Add one overexposed service, one expired temporary service, and one correctly denied connection. Write an evidence-based recommendation for each."
          tips={[
            "Use only fictional systems, services, users, domains, organizations, logs, and documentation addresses.",
            "Explain why port numbers are clues rather than complete proof.",
            "Include evidence sources, limitations, authorization owner, testing, validation, and rollback.",
            "Do not include real service inventories, firewall rules, internal addresses, credentials, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Ports direct traffic to applications and services, but port numbers do not prove the complete purpose or trustworthiness.",
            "TCP, UDP, and network-control protocols provide different communication behaviors and evidence.",
            "Strong review uses the full connection tuple plus user, process, owner, exposure, purpose, and time context.",
            "Every enabled service should have a current owner, approved purpose, protected pathway, logging, and review date.",
            "Service decisions require correlation across inventory, firewall, endpoint, DNS, authentication, and change evidence.",
            "Defensive changes should follow least privilege and be authorized, documented, tested, reversible, and validated.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}