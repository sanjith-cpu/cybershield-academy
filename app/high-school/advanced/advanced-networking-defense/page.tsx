import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/advanced-networking-defense`;
const previousModule = `${trackPath}/threat-modeling`;
const nextModule = `${trackPath}/detection-engineering`;

const lessons = [
  {
    number: "A4.1",
    title: "Defensive Network Architecture",
    slug: "defensive-network-architecture",
    summary:
      "Examine how fictional defenders design network architecture around mission, assets, identity, trust, service dependencies, visibility, safe failure, recovery, and clear ownership rather than relying on a flat diagram or one perimeter.",
    skills: [
      "Connect network design to mission and asset value",
      "Distinguish zones, paths, control points, and dependencies",
      "Model north-south, east-west, administrative, and recovery traffic conceptually",
      "Document architecture assumptions, owners, evidence, and review triggers",
    ],
    portfolio:
      "Create a fictional defensive network architecture brief with zones, services, trust relationships, evidence needs, and recovery paths.",
  },
  {
    number: "A4.2",
    title: "Segmentation and Microsegmentation Concepts",
    slug: "segmentation-and-microsegmentation-concepts",
    summary:
      "Learn how fictional segmentation limits unnecessary reachability and separates users, workloads, administration, suppliers, recovery, and sensitive services using purpose, identity, data, environment, and policy context.",
    skills: [
      "Define segmentation objectives before drawing zones",
      "Compare broad segmentation and finer-grained policy concepts",
      "Identify shared dependencies and hidden alternate paths",
      "Evaluate usability, operations, evidence, and recovery tradeoffs",
    ],
    portfolio:
      "Build a fictional segmentation decision matrix and zone-to-zone communication register.",
  },
  {
    number: "A4.3",
    title: "Firewall Strategy and Rule Hygiene",
    slug: "firewall-strategy-and-rule-hygiene",
    summary:
      "Study firewall policy as an owned lifecycle of purpose, source, destination, service, identity context, approval, evidence, exceptions, review, and retirement—not as an unexamined list of allow and deny statements.",
    skills: [
      "Write conceptual least-privilege rule requirements",
      "Recognize broad, duplicate, stale, shadowed, temporary, and unowned policy risks",
      "Connect rule decisions to applications, identities, evidence, and recovery",
      "Design fictional review, exception, expiration, and cleanup workflows",
    ],
    portfolio:
      "Produce a fictional firewall strategy, rule-review register, exception log, and retirement plan.",
  },
  {
    number: "A4.4",
    title: "IDS/IPS Concepts and Network Visibility",
    slug: "ids-ips-concepts-and-network-visibility",
    summary:
      "Explore how fictional network detection and prevention capabilities observe traffic, metadata, protocol behavior, policy outcomes, source health, encrypted boundaries, and service context while preserving privacy and uncertainty.",
    skills: [
      "Distinguish visibility, detection, prevention, and response roles",
      "Identify placement, coverage, blind spots, dependencies, and failure modes",
      "Interpret supplied fictional alerts without assuming compromise",
      "Define evidence quality, tuning, escalation, and recovery requirements",
    ],
    portfolio:
      "Create a fictional network visibility and IDS/IPS coverage map with evidence limits and defender questions.",
  },
  {
    number: "A4.5",
    title: "Secure Remote Access Concepts",
    slug: "secure-remote-access-concepts",
    summary:
      "Design fictional remote access around verified identity, approved devices, role and object context, limited destinations, session evidence, support, privacy, safe failure, emergency access, and lifecycle review.",
    skills: [
      "Separate remote connectivity from authorization",
      "Model user, administrator, supplier, support, and recovery access",
      "Define conditional, time-bound, and purpose-bound access concepts",
      "Evaluate device trust, session evidence, usability, and revocation",
    ],
    portfolio:
      "Build a fictional remote-access architecture and access-decision register.",
  },
  {
    number: "A4.6",
    title: "Wireless Defense Strategy",
    slug: "wireless-defense-strategy",
    summary:
      "Review fictional wireless defense through network purpose, identity, device onboarding, guest separation, management, monitoring, coverage, privacy, support, lifecycle, and resilient alternatives.",
    skills: [
      "Differentiate employee, managed-device, guest, service, and administrative wireless needs",
      "Connect wireless identity and device posture to network authorization",
      "Recognize unmanaged devices, stale access, weak separation, and visibility gaps",
      "Plan safe support, degraded operation, incident response, and recovery",
    ],
    portfolio:
      "Create a fictional wireless defense strategy with network classes, ownership, evidence, and review criteria.",
  },
  {
    number: "A4.7",
    title: "Network Baselines and Anomaly Concepts",
    slug: "network-baselines-and-anomaly-concepts",
    summary:
      "Learn how fictional defenders define expected network behavior using mission context, time, service, identity, destination, volume, protocol, change, maintenance, source health, and uncertainty instead of treating every difference as malicious.",
    skills: [
      "Build contextual fictional network baselines",
      "Separate expected variation from meaningful anomaly",
      "Document source health, data gaps, seasonality, and change windows",
      "Translate anomalies into bounded defender questions and review actions",
    ],
    portfolio:
      "Produce a fictional network baseline, anomaly-review worksheet, and confidence record.",
  },
  {
    number: "A4.8",
    title: "DNS Security Concepts",
    slug: "dns-security-concepts",
    summary:
      "Study fictional DNS as a critical naming, routing, policy, evidence, privacy, availability, supplier, and recovery dependency while avoiding unsafe operational manipulation or real-domain analysis.",
    skills: [
      "Explain DNS roles and defensive dependencies conceptually",
      "Map approved resolvers, zones, records, ownership, logging, and change control",
      "Recognize stale records, unexpected resolution, weak governance, and evidence gaps",
      "Plan resilience, validation, monitoring, response, and recovery",
    ],
    portfolio:
      "Create a fictional DNS governance, visibility, resilience, and change-review package.",
  },
  {
    number: "A4.9",
    title: "Network Resilience and Redundancy",
    slug: "network-resilience-and-redundancy",
    summary:
      "Design fictional network resilience around service objectives, diverse dependencies, capacity, failover, degraded modes, routing and naming dependencies, evidence, communication, recovery order, reconciliation, and testing.",
    skills: [
      "Separate redundancy from proven resilience",
      "Identify shared failure points and hidden control dependencies",
      "Define safe degraded operation and recovery gates",
      "Evaluate failover evidence, capacity, ownership, and user outcomes",
    ],
    portfolio:
      "Build a fictional network resilience plan, dependency map, exercise record, and residual-risk summary.",
  },
  {
    number: "A4.10",
    title: "Advanced Network Defense Lab",
    slug: "advanced-network-defense-lab",
    summary:
      "Integrate the complete A4 process in a safe fictional lab covering architecture, segmentation, firewall strategy, visibility, remote access, wireless defense, baselines, DNS, resilience, evidence, risk, and review.",
    skills: [
      "Conduct a structured fictional network-defense review",
      "Maintain traceability from mission and flows to controls and evidence",
      "Balance security, privacy, usability, operations, and resilience",
      "Communicate prioritized network decisions without real-system detail",
    ],
    portfolio:
      "Produce a complete fictional defensive network architecture review and leadership-ready improvement plan.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the network decision",
    description:
      "State which fictional service, architecture, change, supplier connection, remote-access need, wireless environment, or resilience decision the review must support.",
    output: "Network-defense purpose and decision statement",
  },
  {
    step: "2",
    title: "Set scope and safety boundaries",
    description:
      "Document fictional environments, zones, users, services, devices, suppliers, remote paths, wireless networks, DNS dependencies, recovery systems, exclusions, and authorization limits.",
    output: "Scope, exclusion, and safety charter",
  },
  {
    step: "3",
    title: "Map mission and dependencies",
    description:
      "Describe fictional critical services, users, data, identities, administrative paths, shared infrastructure, support workflows, evidence sources, and recovery requirements.",
    output: "Mission, service, identity, and dependency map",
  },
  {
    step: "4",
    title: "Model architecture and segmentation",
    description:
      "Define fictional zones, trust relationships, allowed communication purposes, administrative separation, supplier boundaries, wireless classes, and recovery paths.",
    output: "Defensive architecture and segmentation diagram",
  },
  {
    step: "5",
    title: "Review policy enforcement",
    description:
      "Examine fictional firewall, authorization, routing, remote-access, wireless, and DNS policy requirements with owners, approvals, exceptions, evidence, and lifecycle.",
    output: "Policy and rule-governance register",
  },
  {
    step: "6",
    title: "Design visibility",
    description:
      "Identify fictional telemetry, network metadata, control outcomes, source health, blind spots, privacy limits, IDS/IPS coverage, and defender questions.",
    output: "Network visibility and evidence coverage map",
  },
  {
    step: "7",
    title: "Build baselines and review anomalies",
    description:
      "Define fictional expected behavior by service, identity, time, destination, protocol, volume, change window, maintenance state, and recovery condition.",
    output: "Baseline and anomaly-review plan",
  },
  {
    step: "8",
    title: "Plan response and recovery",
    description:
      "Create fictional containment, degraded-mode, failover, communication, evidence preservation, restoration, reconciliation, and closure decisions.",
    output: "Network response and resilience plan",
  },
  {
    step: "9",
    title: "Evaluate risk and tradeoffs",
    description:
      "Compare fictional impact, likelihood, exposure, control strength, uncertainty, privacy, usability, operations, cost, dependency, and residual risk.",
    output: "Prioritized network-defense risk register",
  },
  {
    step: "10",
    title: "Validate and maintain",
    description:
      "Define fictional owners, evidence, review cadence, expiration, change triggers, exercise requirements, reopened findings, and architecture retirement.",
    output: "Validation, review, and lifecycle plan",
  },
];

const objectives = [
  "Explain advanced network defense as a mission-driven architecture, identity, policy, visibility, response, recovery, and governance discipline rather than a collection of devices.",
  "Design a safe fictional network scope covering zones, users, workloads, services, suppliers, administrators, remote access, wireless, DNS, evidence, and recovery.",
  "Evaluate fictional segmentation and microsegmentation concepts using purpose, identity, asset value, communication need, trust, policy, evidence, operations, and resilience.",
  "Develop fictional firewall and network-policy strategies with least privilege, ownership, approval, exceptions, evidence, review, expiration, and retirement.",
  "Assess fictional IDS/IPS and network visibility coverage while documenting placement, encrypted traffic limits, source health, privacy, tuning, uncertainty, and response ownership.",
  "Design fictional secure remote-access and wireless-defense strategies that connect identity, device context, authorization, session evidence, support, lifecycle, and safe failure.",
  "Build fictional network baselines and analyze anomalies using service, identity, destination, time, protocol, volume, change, maintenance, source-health, and recovery context.",
  "Create and review a portfolio-ready fictional network-defense package covering DNS, resilience, redundancy, recovery, tradeoffs, evidence, residual risk, and leadership communication.",
];

const evidencePreview = [
  {
    id: "ND-01",
    source: "Fictional network-context brief",
    observation:
      "A student-support service depends on a public portal zone, application zone, data zone, identity services, support administration, a processing supplier, notifications, monitoring, archive, and recovery services.",
    supports:
      "The fictional architecture requires distinct mission, user, service, administrative, supplier, evidence, and recovery trust decisions.",
    limits:
      "The context brief does not prove actual reachability, current policy, effective segmentation, capacity, or control operation.",
    designUse:
      "Use it to define scope, zones, dependencies, owners, critical paths, and evidence questions.",
  },
  {
    id: "ND-02",
    source: "Fictional communication register",
    observation:
      "Several zone-to-zone paths are labeled temporary, but two lack current owners, expiration dates, or documented business purpose.",
    supports:
      "Firewall governance, segmentation, exception, ownership, and lifecycle review are needed.",
    limits:
      "The register does not prove the paths are active, reachable, unsafe, or misused.",
    designUse:
      "Open validation actions before recommending retention, restriction, or retirement.",
  },
  {
    id: "ND-03",
    source: "Fictional network-visibility summary",
    observation:
      "The perimeter has strong metadata coverage, while internal administrative, supplier-result, wireless, DNS, and recovery paths have uneven source health and correlation.",
    supports:
      "Visibility architecture should consider east-west, administrative, dependency, naming, wireless, and recovery evidence.",
    limits:
      "A coverage summary does not prove complete blind spots, compromise, or control failure.",
    designUse:
      "Create a coverage matrix, source-health review, privacy boundary, and prioritized evidence plan.",
  },
  {
    id: "ND-04",
    source: "Fictional remote-access review",
    observation:
      "Support staff and one supplier role use the same remote-access gateway, but purpose, destination, device conditions, session evidence, and expiration differ.",
    supports:
      "Remote connectivity should be separated from identity, role, device, object, destination, approval, and lifecycle decisions.",
    limits:
      "Shared gateway use does not prove excessive authority or unsafe sessions.",
    designUse:
      "Model distinct access profiles, evidence, exceptions, support, failure, and revocation.",
  },
  {
    id: "ND-05",
    source: "Fictional DNS and service-dependency record",
    observation:
      "Portal, identity, supplier, notification, monitoring, and recovery workflows rely on two naming services and one shared change process.",
    supports:
      "DNS governance, availability, integrity, evidence, ownership, change, and recovery belong in the network model.",
    limits:
      "The record does not prove incorrect resolution, outage, tampering, or sufficient redundancy.",
    designUse:
      "Map naming dependencies, ownership, evidence, failover assumptions, validation, and recovery testing.",
  },
  {
    id: "ND-06",
    source: "Fictional resilience exercise",
    observation:
      "A backup network path restored connectivity, but DNS updates lagged, remote support sessions failed, and monitoring showed incomplete data during the transition.",
    supports:
      "Connectivity redundancy alone does not prove full service, support, evidence, naming, or recovery resilience.",
    limits:
      "One exercise does not establish production frequency or every current control state.",
    designUse:
      "Develop failover gates, dependency validation, degraded-mode communication, evidence continuity, and reconciliation.",
  },
];

const portfolioArtifacts = [
  "Fictional network-defense purpose, decision, scope, stakeholders, exclusions, authorization, and safety boundary",
  "Mission, service, user, data, identity, supplier, wireless, DNS, administrative, evidence, and recovery dependency map",
  "Defensive network architecture diagram with zones, trust relationships, paths, control points, and ownership",
  "Segmentation and microsegmentation decision matrix with business purpose, identity context, communication need, and tradeoffs",
  "Zone-to-zone communication register with source, destination, service, purpose, owner, approval, evidence, exception, and expiration",
  "Firewall strategy, rule-hygiene review, temporary-exception register, cleanup plan, and lifecycle evidence",
  "IDS/IPS and network-visibility coverage map with placement, source health, blind spots, encrypted-traffic limits, privacy, and response",
  "Secure remote-access architecture covering users, administrators, suppliers, devices, destinations, session evidence, emergency access, and revocation",
  "Wireless defense strategy covering managed, employee, guest, service, administrative, onboarding, monitoring, support, and recovery needs",
  "Network baseline and anomaly-review package with context, source health, seasonality, change windows, confidence, and escalation",
  "DNS governance, ownership, change, visibility, resilience, failover, recovery, and review plan",
  "Network resilience and redundancy package with dependency diversity, capacity, failover, degraded modes, exercises, reconciliation, and residual risk",
  "Multidisciplinary architecture-review findings, disagreement log, owner actions, completion criteria, validation results, and maintenance triggers",
  "Leadership summary, technical appendix, portfolio reflection, and complete fictionalization statement",
];

const risks = [
  {
    risk: "Flat-network thinking",
    description:
      "Treating a fictional network as one trusted internal space without distinguishing mission, user, service, administrative, supplier, wireless, evidence, and recovery needs.",
    control:
      "Define zones and policy using purpose, identity, assets, communication needs, trust, ownership, and recovery.",
  },
  {
    risk: "Segmentation without application context",
    description:
      "Creating fictional boundaries that do not reflect service dependencies, user workflows, identity, support, monitoring, or recovery.",
    control:
      "Trace each allowed path to a documented business purpose, owner, evidence source, failure mode, and review trigger.",
  },
  {
    risk: "Firewall rule accumulation",
    description:
      "Allowing broad, duplicate, temporary, stale, shadowed, or unowned fictional policies to remain because removing them appears risky.",
    control:
      "Use stable rule identifiers, purpose, ownership, approval, evidence, expiration, cleanup, validation, and rollback planning.",
  },
  {
    risk: "Visibility equals certainty",
    description:
      "Assuming fictional IDS/IPS, flow data, packet metadata, or dashboards provide complete network truth.",
    control:
      "Document placement, encrypted boundaries, source health, collection gaps, privacy limits, correlation, and alternative evidence.",
  },
  {
    risk: "Remote access equals authorization",
    description:
      "Treating successful fictional remote connectivity as permission to reach every destination or perform every action.",
    control:
      "Connect identity, device, role, object, purpose, time, destination, approval, session evidence, and revocation.",
  },
  {
    risk: "Anomaly equals attack",
    description:
      "Labeling fictional network variation as malicious without considering maintenance, service changes, seasonality, recovery, user behavior, source health, or alternative explanations.",
    control:
      "Use contextual baselines, evidence correlation, confidence, bounded scope, and defender questions.",
  },
  {
    risk: "Redundancy equals resilience",
    description:
      "Assuming a second fictional path guarantees service when both paths share DNS, identity, power, management, supplier, monitoring, or recovery dependencies.",
    control:
      "Map shared failure points, validate capacity and dependencies, exercise degraded modes, and reconcile service outcomes.",
  },
  {
    risk: "Unsafe real-network detail",
    description:
      "Using real addresses, routes, firewall rules, wireless identifiers, DNS records, supplier connections, logs, or internal diagrams in a public learning artifact.",
    control:
      "Invent every network, identity, zone, path, rule, record, event, owner, date, decision, and outcome from scratch.",
  },
];

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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/defensive-network-architecture`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Start A4.1
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-bold text-emerald-100 transition hover:bg-emerald-400/20"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function AdvancedNetworkingDefenseModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-purple-200">
              Module A4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              10 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4 Advanced Networking Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Go deeper into fictional network-defense strategy through
            architecture, segmentation, policy enforcement, IDS/IPS concepts,
            visibility, secure remote access, wireless defense, behavioral
            baselines, DNS, resilience, evidence, ownership, and review. The
            goal is to design networks that support mission outcomes, limit
            unnecessary trust, reveal meaningful conditions, fail safely, and
            recover with confidence.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Module", "A4", "Fourth module in the High School Advanced track."],
            ["Lessons", "10", "Ten networking-defense lessons plus one module assessment."],
            ["Assessment", "25", "Twenty-five hidden-answer questions after A4.10."],
            ["Portfolio", "1", "One integrated fictional defensive network architecture review."],
          ].map(([label, value, detail]) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                {label}
              </p>
              <p className="mt-3 text-4xl font-black text-white">{value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
            </article>
          ))}
        </section>

        <SectionCard
          eyebrow="Main Question"
          title="How Do Professionals Design Networks That Limit Trust, Preserve Visibility, and Recover Safely?"
        >
          <p className="max-w-4xl leading-8">
            Advanced network defense is not simply placing devices at a
            perimeter. It is a disciplined fictional architecture process that
            connects mission, users, identities, workloads, zones, services,
            paths, suppliers, policy, visibility, baselines, DNS, wireless,
            remote access, response, recovery, evidence, and ownership. A
            useful design explains why communication is needed, what controls
            it, how defenders know it is working, what happens when it fails,
            and when the decision must be reviewed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Design from mission",
                "Begin with fictional critical services, users, data, identities, dependencies, administrative needs, and recovery outcomes rather than a generic device list.",
              ],
              [
                "Limit trust deliberately",
                "Allow only justified communication with clear purpose, identity, destination, evidence, ownership, exceptions, and lifecycle.",
              ],
              [
                "Validate resilience",
                "Treat visibility, redundancy, failover, naming, remote access, and recovery as claims that require evidence and exercises.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safety Boundary"
          title="Network Defense Must Remain Fictional, Authorized, Defensive, and Non-Operational"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                This module includes
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Invented network zones, services, identities, paths,
                  policies, diagrams, alerts, baselines, DNS records, recovery
                  evidence, and decisions.
                </li>
                <li>
                  Conceptual architecture, segmentation, firewall governance,
                  visibility, remote access, wireless, resilience, and review.
                </li>
                <li>
                  Static supplied evidence and portfolio-ready defensive
                  planning artifacts.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
                This module does not authorize
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Scanning, probing, mapping, capturing, intercepting,
                  connecting to, changing, bypassing, or disrupting any real
                  network or service.
                </li>
                <li>
                  Using real addresses, routes, firewall rules, wireless names,
                  DNS records, credentials, packet captures, logs, supplier
                  connections, or internal diagrams.
                </li>
                <li>
                  Writing procedures for unauthorized access, evasion,
                  interception, credential theft, denial of service, or
                  destructive action.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 leading-7 text-yellow-50">
            Every A4 activity is a planning and reasoning exercise using only
            supplied fictional information. It does not grant permission to
            access, scan, inspect, capture, test, configure, monitor,
            investigate, reroute, block, recover, or modify real devices,
            networks, accounts, wireless systems, DNS services, gateways,
            firewalls, sensors, or organizational infrastructure.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Ten Steps from Network Purpose to Maintained Defense
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.42fr_1fr] lg:items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Module Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section>
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              A4 Lesson Path
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Complete All Ten Lessons
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              Each lesson uses fictional network context, professional
              defensive reasoning, safe evidence review, hidden-answer checks,
              and one connected portfolio artifact.
            </p>
          </div>

          <div className="grid gap-6">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70"
              >
                <div className="grid gap-0 lg:grid-cols-[0.28fr_1fr]">
                  <div className="border-b border-slate-800 bg-[linear-gradient(145deg,_rgba(34,211,238,0.15),_rgba(15,23,42,0.9))] p-6 lg:border-b-0 lg:border-r">
                    <p className="text-4xl font-black text-cyan-200">
                      {lesson.number}
                    </p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                      Lesson {index + 1} of 10
                    </p>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <p className="mt-3 max-w-4xl leading-7 text-slate-300">
                      {lesson.summary}
                    </p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                          Core skills
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
                          {lesson.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                          Portfolio outcome
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.portfolio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`${modulePath}/${lesson.slug}`}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Network-Defense Evidence You Will Learn to Analyze
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Design use", item.designUse],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Network-Defense Risk Preview"
          title="Common Design Failures You Will Learn to Recognize"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {risks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.risk}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong control
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Outcome"
          title="Build a Complete Fictional Defensive Network Architecture Review"
        >
          <p className="max-w-4xl leading-8">
            By the end of A4, you will have one connected professional
            network-defense package rather than ten unrelated worksheets. Each
            lesson strengthens the same fictional architecture and prepares you
            for the final lab, module review, assessment, and leadership
            communication.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {portfolioArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-4 text-sm leading-6 text-purple-50"
              >
                <span className="mr-2 font-black text-purple-200">
                  {index + 1}.
                </span>
                {artifact}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Every artifact must use invented organizations, networks, zones,
            services, identities, addresses, paths, firewall policies,
            wireless systems, DNS records, baselines, alerts, evidence,
            suppliers, dates, owners, decisions, and outcomes. Never upload,
            reproduce, lightly modify, or summarize real internal network
            diagrams, routes, rules, packet captures, credentials, private
            records, logs, supplier information, or recovery details.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-200">
            A4 Module Test
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Complete the 25-Question Assessment
          </h2>
          <p className="mt-4 max-w-3xl leading-7">
            After A4.10, test your ability to reason about defensive network
            architecture, segmentation, firewall strategy, rule hygiene,
            IDS/IPS concepts, visibility, remote access, wireless defense,
            baselines, anomaly reasoning, DNS, resilience, redundancy,
            evidence, tradeoffs, and lifecycle ownership.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
            >
              Open A4 Module Test
            </Link>

            <Link
              href={`${modulePath}/advanced-network-defense-lab`}
              className="rounded-xl border border-purple-300/50 px-5 py-3 font-bold text-purple-100 transition hover:bg-purple-300/10"
            >
              Review A4.10 First
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Begin Advanced Networking Defense
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Start with defensive network architecture before moving through
            segmentation, firewall policy, visibility, secure remote access,
            wireless defense, baselines, DNS, resilience, and the final
            network-defense lab.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}