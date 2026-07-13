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
  `${modulePath}/ports-protocols-and-services`;
const nextLesson =
  `${modulePath}/firewalls-and-network-access-rules`;

const objectives = [
  "Explain the defensive roles of DNS, DHCP, NTP, directory, and other common network services.",
  "Correlate fictional DNS queries, DHCP leases, device identities, timestamps, and service records.",
  "Identify signs of misconfiguration, stale records, wrong scopes, failed resolution, and service dependency problems.",
  "Distinguish what each service record confirms from what still requires supporting evidence.",
  "Recommend safe, authorized, and reversible next actions for common network-service issues.",
];

const vocabulary = [
  [
    "DNS resolver",
    "A service that answers or forwards name-resolution requests for clients.",
  ],
  [
    "DNS record",
    "A stored entry that connects a name with information such as an address, alias, or mail service.",
  ],
  [
    "A record",
    "A DNS record that maps a name to an IPv4 address.",
  ],
  [
    "AAAA record",
    "A DNS record that maps a name to an IPv6 address.",
  ],
  [
    "CNAME record",
    "A DNS record that points one name to another canonical name.",
  ],
  [
    "TTL",
    "Time to live: the length of time a DNS answer may remain cached before being refreshed.",
  ],
  [
    "DHCP scope",
    "A configured range of addresses and options available for automatic assignment.",
  ],
  [
    "DHCP lease",
    "A time-limited assignment connecting a device or interface with an address and network options.",
  ],
  [
    "Reservation",
    "A DHCP rule that consistently offers a selected address to a specific approved device identifier.",
  ],
  [
    "NTP",
    "Network Time Protocol concepts used to keep system clocks aligned for reliable logs and correlation.",
  ],
  [
    "Directory service",
    "A service that stores and organizes identities, groups, systems, and access-related information.",
  ],
  [
    "Dependency",
    "A service, system, or configuration that another service needs in order to work correctly.",
  ],
];

const serviceGuide = [
  {
    service: "DNS",
    role:
      "Translates approved names into address information and supports service discovery.",
    evidence:
      "Queries, responses, record type, resolver, returned value, TTL, response code, and time.",
    defenderQuestions:
      "Which resolver answered? Was the name expected? Did the answer change? Did a later connection occur?",
  },
  {
    service: "DHCP",
    role:
      "Automatically provides approved address, prefix, gateway, DNS, and lease information.",
    evidence:
      "Device identifier, offered address, scope, lease start, lease end, gateway, DNS options, and VLAN context.",
    defenderQuestions:
      "Did the correct scope answer? Does the lease match the device, subnet, VLAN, gateway, and design?",
  },
  {
    service: "NTP",
    role:
      "Helps systems maintain consistent time for logs, alerts, authentication, and investigations.",
    evidence:
      "Configured time source, sync state, offset, last successful update, and local time.",
    defenderQuestions:
      "Are clocks aligned? Could time drift explain misleading event order or failed authentication?",
  },
  {
    service: "Directory",
    role:
      "Stores approved identity, group, device, and access context for organizational systems.",
    evidence:
      "Account status, group membership, device record, role, authentication result, and change history.",
    defenderQuestions:
      "Is the identity active? Does the group match the device and requested service? Was a recent change approved?",
  },
  {
    service: "Certificate or trust service",
    role:
      "Supports certificate validation, trust chains, and secure service identity concepts.",
    evidence:
      "Certificate subject, issuer, validity period, chain status, and revocation-check result.",
    defenderQuestions:
      "Is the certificate expected, current, and associated with the correct service name?",
  },
  {
    service: "Monitoring and logging",
    role:
      "Collects health, event, performance, and security records from approved sources.",
    evidence:
      "Source status, collection time, missing records, event volume, health checks, and alerts.",
    defenderQuestions:
      "Is the source reporting? Are timestamps aligned? Is an absence of evidence caused by collection failure?",
  },
];

const dnsOutcomes = [
  {
    result: "Successful answer",
    meaning:
      "The resolver returned a record for the requested name.",
    limitation:
      "It does not prove the destination was reached, the service was safe, or the application succeeded.",
  },
  {
    result: "NXDOMAIN",
    meaning:
      "The resolver reports that the requested name does not exist in the queried DNS context.",
    limitation:
      "The cause may be a typo, outdated link, missing record, wrong search suffix, or intentional removal.",
  },
  {
    result: "Timeout",
    meaning:
      "The client did not receive a response within the expected window.",
    limitation:
      "This may involve resolver availability, routing, firewall, local settings, or network delay.",
  },
  {
    result: "Unexpected answer",
    meaning:
      "The returned address or alias differs from the approved record or baseline.",
    limitation:
      "A planned migration, load balancing, cache, stale record, or error may explain it.",
  },
  {
    result: "ServFail",
    meaning:
      "The resolver could not complete the request successfully.",
    limitation:
      "The issue may be upstream, authoritative, validation-related, or temporary.",
  },
];

const dhcpOutcomes = [
  {
    event: "Expected lease",
    evidence:
      "Approved device receives an address, gateway, DNS server, and lease duration from the correct scope.",
    interpretation:
      "Supports normal address assignment but still requires device, user, and activity correlation.",
  },
  {
    event: "Wrong scope",
    evidence:
      "A device receives an address or gateway belonging to a different subnet or zone.",
    interpretation:
      "May indicate VLAN, relay, scope, reservation, or change-mapping error.",
  },
  {
    event: "No lease",
    evidence:
      "The device uses a link-local address or lacks expected gateway and DNS options.",
    interpretation:
      "May indicate connectivity, DHCP availability, scope exhaustion, relay, or configuration problems.",
  },
  {
    event: "Duplicate or conflicting assignment",
    evidence:
      "Two systems appear connected to the same address or records disagree during the same time window.",
    interpretation:
      "Requires careful timestamp, lease, interface, inventory, and conflict evidence review.",
  },
  {
    event: "Stale reservation",
    evidence:
      "A reserved address points to a retired or replaced device identifier.",
    interpretation:
      "May cause address waste, failed assignment, or ownership confusion until approved records are updated.",
  },
];

const evidenceMatrix = [
  {
    source: "DNS query log",
    supports:
      "Requested name, resolver, record type, answer, response code, TTL, and timestamp.",
    limitation:
      "Does not prove that a later connection or application action occurred.",
  },
  {
    source: "DHCP lease log",
    supports:
      "Device identifier, assigned address, scope, gateway, DNS option, and lease window.",
    limitation:
      "Does not prove the identity of every user or the purpose of all later traffic.",
  },
  {
    source: "Endpoint configuration",
    supports:
      "The address, prefix, gateway, DNS servers, search suffix, and interface currently shown on a device.",
    limitation:
      "May reflect stale local state unless compared with server-side records and timestamps.",
  },
  {
    source: "Directory record",
    supports:
      "Approved account, device, group, role, or ownership context.",
    limitation:
      "Does not prove that technical configuration or current activity matches the record.",
  },
  {
    source: "NTP status",
    supports:
      "Whether the system clock is synchronized and the size of any offset.",
    limitation:
      "Does not explain the entire incident, but poor time alignment can distort correlation.",
  },
  {
    source: "Change ticket",
    supports:
      "Approved reason, timing, owner, affected records, test plan, and rollback plan.",
    limitation:
      "Does not prove the change was implemented exactly as documented.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Identify the dependency",
    detail:
      "Determine which service the application or device needs: name resolution, address assignment, time, identity, trust, or logging.",
  },
  {
    step: "2",
    title: "Collect both client and server evidence",
    detail:
      "Compare the device view with the DNS, DHCP, directory, NTP, or monitoring service records.",
  },
  {
    step: "3",
    title: "Align timestamps",
    detail:
      "Confirm time zones, clock synchronization, lease windows, cache windows, and change timing.",
  },
  {
    step: "4",
    title: "Check design and ownership",
    detail:
      "Compare records with approved scopes, names, zones, owners, roles, and service dependencies.",
  },
  {
    step: "5",
    title: "Separate cause from symptom",
    detail:
      "A failed website may begin with DNS, DHCP, time, identity, routing, or application evidence.",
  },
  {
    step: "6",
    title: "Recommend a controlled correction",
    detail:
      "Use authorization, documentation, testing, rollback, validation, and monitoring.",
  },
];

const mistakes = [
  "Assuming a successful DNS answer proves the application connection also succeeded.",
  "Treating one IP address as permanent proof of one device or person.",
  "Ignoring TTL and cache timing when comparing DNS records.",
  "Ignoring lease start and end times when connecting an address to a device.",
  "Assuming every DNS failure is caused by DNS rather than routing, firewall, client settings, or upstream issues.",
  "Ignoring clock drift when events appear out of order.",
  "Changing DNS records, DHCP scopes, reservations, or time sources without approval and rollback planning.",
  "Using only the client view without checking server-side records.",
  "Assuming a stale directory or inventory record proves the current configuration.",
  "Publishing real hostnames, internal domains, DHCP scopes, or identity records in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "What does a successful DNS response prove?",
    choices: [
      "The resolver returned an answer for the requested name.",
      "The later connection definitely succeeded.",
      "The application action was authorized.",
      "The destination is completely trustworthy.",
    ],
    answer: 0,
    explanation:
      "DNS evidence confirms name resolution, not the full connection or application result.",
  },
  {
    question:
      "What does a DHCP lease commonly contain?",
    choices: [
      "A device identifier, assigned address, scope, gateway, DNS options, and lease window.",
      "Only a username and password.",
      "Only a website title.",
      "Only a firewall severity.",
    ],
    answer: 0,
    explanation:
      "DHCP records support address-assignment and network-option context.",
  },
  {
    question:
      "Why is NTP important to defenders?",
    choices: [
      "Aligned clocks make logs, alerts, authentication, and timelines more reliable.",
      "It replaces DNS.",
      "It assigns IP addresses.",
      "It proves all events are safe.",
    ],
    answer: 0,
    explanation:
      "Reliable timestamps are essential for evidence correlation.",
  },
  {
    question:
      "What may an NXDOMAIN result indicate?",
    choices: [
      "The name does not exist in the queried DNS context, but the reason still requires investigation.",
      "The device definitely has malware.",
      "The firewall is disabled.",
      "The user has administrator access.",
    ],
    answer: 0,
    explanation:
      "NXDOMAIN may result from typos, missing records, old links, or expected record removal.",
  },
  {
    question:
      "Which evidence best connects an address to a device during a specific time window?",
    choices: [
      "A DHCP lease correlated with device and timestamp context.",
      "Only a DNS answer.",
      "Only a browser warning.",
      "Only the service name.",
    ],
    answer: 0,
    explanation:
      "DHCP leases are useful for time-bounded address assignment, but still need supporting context.",
  },
  {
    question:
      "What is the strongest response to a stale DNS record after an approved migration?",
    choices: [
      "Preserve evidence, compare the approved change, confirm ownership, and request an authorized record correction and validation.",
      "Delete every DNS record.",
      "Disable the firewall.",
      "Assume the application is malicious.",
    ],
    answer: 0,
    explanation:
      "Record changes require evidence, ownership, authorization, testing, and rollback planning.",
  },
  {
    question:
      "Why should client and server evidence both be reviewed?",
    choices: [
      "They may show different parts of the configuration, request, response, timing, and failure.",
      "The client view always proves the server is correct.",
      "The server view always proves the user identity.",
      "Only one side can ever produce useful evidence.",
    ],
    answer: 0,
    explanation:
      "Comparing both sides improves confidence and reveals stale or inconsistent state.",
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
          Previous: I1.3 Ports, Protocols, and Services
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
          Next: I1.5 Firewalls and Network Access Rules
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

function ServiceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Network Service Guide
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Common Services Create Dependencies and Evidence
      </h2>

      <div className="mt-6 grid gap-4">
        {serviceGuide.map((item) => (
          <div
            key={item.service}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1fr_1.2fr]"
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
                Main role
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.role}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                Useful evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.evidence}
              </p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
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

function DnsOutcomeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        DNS Outcomes
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read the Response Without Overclaiming
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {dnsOutcomes.map((item) => (
          <div
            key={item.result}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.result}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <span className="font-bold">Evidence limit:</span>{" "}
              {item.limitation}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DhcpOutcomeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        DHCP Outcomes
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Compare Assignment Evidence With Approved Design
      </h2>

      <div className="mt-6 grid gap-4">
        {dhcpOutcomes.map((item) => (
          <div
            key={item.event}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1fr]"
          >
            <div>
              <p className="font-black text-cyan-100">{item.event}</p>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              {item.evidence}
            </p>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              {item.interpretation}
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
        What Common Service Records Can and Cannot Prove
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
        Review a Network-Service Problem in Six Steps
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

export default function DnsDhcpAndCommonNetworkServicesPage() {
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
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.4 DNS, DHCP, and Common Network Services
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Analyze fictional name resolution, address assignment, time
            synchronization, directory, trust, and monitoring evidence as
            connected network-service dependencies.
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
          lessonTitle="DNS, DHCP, and Common Network Services"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain the basic relationship among IP addresses, subnets, gateways, ports, protocols, and services.",
            "I understand that DNS answers, DHCP leases, directory records, and timestamps are partial evidence.",
            "I will compare client-side and server-side records before reaching a conclusion.",
            "I will use only fictional names, domains, addresses, devices, accounts, logs, organizations, and change records.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Website Failure May Begin With Name Resolution, Address Assignment, Time, Identity, or Another Dependency"
        >
          <p className="leading-8">
            A browser error may look like an application problem even when the
            device received the wrong gateway, the DNS record still points to an
            old service, the system clock is far out of sync, or the directory
            account was moved into the wrong group. Intermediate defenders map
            these dependencies and compare evidence across services.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The page failed, so DNS must be broken.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Identify the dependency, compare client and service records,
                align timestamps, check approved design, and isolate the lowest
                supported failure.”
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
          title="Core Services Quietly Support Nearly Every Networked Workflow"
        >
          <p className="leading-8">
            DNS helps systems find services. DHCP helps devices receive usable
            network settings. NTP keeps evidence aligned. Directory services
            connect identities and roles. Certificate and monitoring services
            support trust and visibility. When one dependency is wrong, many
            applications can fail at the same time.
          </p>
        </SectionCard>

        <ServiceGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="A Service Record Is a Time-Bounded Observation, Not Permanent Truth"
        >
          <p className="leading-8">
            DNS answers may be cached, DHCP leases expire, directory membership
            changes, certificates reach expiration, and clocks drift. Defenders
            must compare record values, timestamps, TTLs, lease windows,
            synchronization state, approved changes, and current ownership.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> ask “What did
            this service report, at what time, for which device or identity, and
            what other evidence confirms it?”
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate DNS, DHCP, and Service Terms
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

        <DnsOutcomeGuide />
        <DhcpOutcomeGuide />
        <EvidenceLimits />
        <ServiceWorkflow />

        <FakeDashboardCard
          title="Fake Network Services Health Dashboard"
          subtitle="Training dashboard for the fictional Ridgeway Learning Network. It compares DNS, DHCP, NTP, directory, and monitoring health."
          metrics={[
            {
              label: "DNS health",
              value: "Warning",
              note: "One approved application name still returns the retired documentation address after migration.",
            },
            {
              label: "DHCP health",
              value: "Healthy",
              note: "Managed devices are receiving the expected subnet, gateway, and resolver options.",
            },
            {
              label: "Time alignment",
              value: "Degraded",
              note: "One application server is seven minutes behind the approved time source.",
            },
          ]}
        />

        <FakeAlertCard
          title="Old DNS Record and Time Drift Affect an Approved Application"
          severity="Medium"
          time="02:18 PM"
          source="Fake Network Services Monitor"
          details="A fictional application migration completed this morning, but one DNS alias still points to the retired service. The replacement server is also seven minutes behind the approved time source, causing confusing authentication timestamps."
          recommendation="Preserve DNS, application, NTP, authentication, and change evidence; confirm ownership; correct the stale alias and time source through the approved change plan; then validate resolution, time, authentication, and monitoring."
        />

        <FakeLogPanel
          title="Fake Common-Service Evidence Timeline"
          logs={[
            "13:40:00 CHANGE migration='student-portal-v2' approved='true' status='complete'",
            "13:42:10 DNS query='portal.ridgeway-training.test' answer='192.0.2.40' ttl='3600'",
            "13:42:14 APP_V1 address='192.0.2.40' status='retired' response='maintenance'",
            "13:43:02 APP_V2 address='198.51.100.24' status='healthy'",
            "13:45:30 NTP host='app-v2' offset='-00:07:03' sync='degraded'",
            "13:47:12 AUTH host='app-v2' result='success' event_time='13:40:09'",
            "13:50:41 DNS_DESIGN alias='portal.ridgeway-training.test' expected='app-v2.ridgeway-training.test'",
            "14:18:04 CORRELATION findings='stale_dns_alias,time_drift' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Service Explanation Is Best Supported?"
          evidence={[
            "The fictional migration change was approved and marked complete.",
            "The user-facing DNS alias still returns the retired service address.",
            "The replacement application server is healthy at a different documentation address.",
            "The replacement server is seven minutes behind the approved time source.",
            "Authentication records are successful but appear earlier than related client events.",
            "The approved design shows the alias should point to the replacement service.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "A stale DNS alias and server time drift are both supported; preserve evidence, confirm owners, correct them through the approved change process, and validate resolution, time, authentication, and monitoring.",
            "DHCP is broken because the application page shows maintenance.",
            "The successful authentication proves every service is configured correctly.",
            "Delete all DNS records and disable time synchronization.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports two separate service issues: the alias still directs users to the retired service, and time drift distorts event correlation on the replacement server. Both corrections require ownership, authorization, testing, rollback, and validation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Common-Service Analysis"
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
          title="Build a Fictional Network-Service Dependency Map"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Digital Learning Platform
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional platform depends on DNS, DHCP, NTP, directory
                authentication, certificates, and centralized monitoring.
                Students receive client settings, service logs, health records,
                design documents, and approved change tickets.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Draw the dependency path from device startup to application login.</li>
                <li>Label the evidence produced by each service.</li>
                <li>Compare client-side and server-side records.</li>
                <li>Align TTL, lease, time-sync, authentication, and change windows.</li>
                <li>Identify one stale record, one wrong scope, and one timing problem.</li>
                <li>State what is confirmed, likely, uncertain, and still missing.</li>
                <li>Write an authorized correction, validation, and rollback plan.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fictional service names, documentation addresses, invented
            identities, and safe logs. Do not inspect or publish real DNS,
            DHCP, directory, certificate, or monitoring records.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Device Has the Correct Address but the Wrong DNS Resolver"
          scenario="A fictional managed device receives the expected address, prefix, and gateway but uses a retired DNS resolver. Other devices on the same subnet use the approved resolver and can reach the learning portal."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve client and DHCP option evidence, compare the approved scope and change record, and request an authorized resolver-option correction and validation.",
              outcome:
                "Best defensive choice. Address assignment is mostly correct, but the resolver option is inconsistent with the approved design.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Change the device to a random public resolver.",
              outcome:
                "Unsafe. Resolver changes require approved policy, ownership, and privacy review.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the device firewall.",
              outcome:
                "Unsupported. The strongest evidence points to the configured resolver.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Events Appear Out of Order Across Two Systems"
          scenario="A fictional endpoint reports a login at 09:10, while the application server records the same login at 09:03. NTP status shows the application server is seven minutes behind."
          choices={[
            {
              label: "Choice A",
              response:
                "Adjust the investigation timeline using the documented clock offset, preserve the original timestamps, and request an authorized time-sync correction.",
              outcome:
                "Best defensive choice. Time drift explains the apparent ordering problem without rewriting the original evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the server log because its timestamp is wrong.",
              outcome:
                "Unsafe. Original evidence should be preserved and interpreted with documented time context.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Conclude that two different users logged in.",
              outcome:
                "Unsupported. The known clock offset is a stronger explanation.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="DNS, DHCP, and Common Services Review Checklist"
          items={[
            "I identify which network service or dependency the device or application needs.",
            "I compare client-side settings with server-side DNS, DHCP, NTP, directory, trust, and monitoring records.",
            "I record names, addresses, record types, response codes, scopes, leases, gateways, DNS options, and timestamps.",
            "I align TTL, cache, lease, clock, authentication, and approved-change windows.",
            "I distinguish what each service record confirms from what it cannot prove alone.",
            "I compare observed records with approved design, ownership, role, subnet, VLAN, and service dependencies.",
            "I separate the visible symptom from the supported underlying cause.",
            "I preserve original timestamps and document known clock offsets.",
            "I recommend only authorized, documented, tested, reversible, and validated corrections.",
            "I use fictional evidence and never collect or publish real internal service records.",
          ]}
        />

        <MiniQuiz
          title="I1.4 Mini Quiz: DNS, DHCP, and Common Network Services"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Network-Service Dependency and Evidence Map for a small learning organization. Show device startup, DHCP, DNS, NTP, directory authentication, certificate validation, application access, and monitoring. For each service, include its owner, purpose, inputs, outputs, evidence, failure symptoms, evidence limits, and validation method. Add one fictional stale DNS record, one wrong DHCP option, and one time-drift issue."
          tips={[
            "Use only fictional service names, identities, logs, and documentation address ranges.",
            "Show client-side and server-side evidence separately.",
            "Include TTL, lease, clock-offset, authentication, and approved-change context.",
            "Do not include real internal domains, DNS records, DHCP scopes, directory groups, certificates, or monitoring details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "DNS, DHCP, NTP, directory, trust, and monitoring services support many networked workflows.",
            "DNS answers, DHCP leases, directory records, and timestamps are time-bounded evidence rather than permanent truth.",
            "A successful DNS answer does not prove the later connection or application action succeeded.",
            "DHCP evidence connects a device and address during a lease window but does not prove every user's identity or intent.",
            "Time synchronization is essential for trustworthy event ordering and correlation.",
            "Strong analysis compares client and server records, approved design, ownership, changes, and evidence limits.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}