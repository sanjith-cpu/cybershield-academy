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
const modulePath = `${trackPath}/defensive-security-tools`;
const previousLesson = `${modulePath}/endpoint-protection-and-edr-concepts`;
const nextLesson = `${modulePath}/vulnerability-scanners-and-configuration-assessment`;

const objectives = [
  "Explain how host firewalls, network firewalls, access-control rules, zones, directions, state tracking, and monitoring tools support defensive network control.",
  "Interpret fictional firewall and network-security events using source, destination, port, protocol, direction, zone, application, rule, action, state, time, owner, and business context.",
  "Distinguish allow, deny, reject, drop, reset, log-only, alert, and rate-limit outcomes without treating any single outcome as a complete conclusion.",
  "Evaluate fictional firewall-rule requests using least privilege, business purpose, asset sensitivity, dependency review, test criteria, rollback, validation, and monitoring.",
  "Create a professional fictional Firewall Rule Validation Report containing confirmed facts, limitations, confidence, impact, owners, and safe recommendations.",
];

const vocabulary = [
  ["Host firewall", "A firewall control running on an individual fictional endpoint or server."],
  ["Network firewall", "A control that evaluates traffic moving between network segments, zones, or external connections."],
  ["Rule", "A configured condition and action based on fields such as source, destination, protocol, port, application, user, zone, or direction."],
  ["Zone", "A logical network grouping used to apply different trust and access policies."],
  ["Direction", "Whether traffic is inbound, outbound, or moving between internal segments."],
  ["Stateful inspection", "Tracking connection state so later packets can be evaluated as part of an established session."],
  ["Least privilege", "Allowing only the minimum network access required for an approved purpose."],
  ["Deny", "A policy outcome that refuses the recorded connection or request."],
  ["Drop", "A policy outcome that silently discards traffic without completing the connection."],
  ["Reject", "A policy outcome that refuses traffic and may send a response indicating the connection was not accepted."],
  ["Rule shadowing", "A condition where an earlier rule prevents a later rule from ever matching the intended traffic."],
  ["Rule recertification", "A periodic review confirming that a firewall rule still has a valid owner, purpose, scope, and need."],
];

const firewallTypes = [
  {
    type: "Host firewall",
    purpose:
      "Controls inbound and outbound traffic for one fictional device or server.",
    usefulEvidence:
      "Local process, application, user, interface, source, destination, port, protocol, action, and profile.",
    limitation:
      "It may not see traffic after another device changes the source or before an upstream control acts.",
  },
  {
    type: "Perimeter firewall",
    purpose:
      "Controls traffic between a fictional internal environment and external networks.",
    usefulEvidence:
      "Zones, public and private addresses, rules, applications, sessions, translations, actions, bytes, and duration.",
    limitation:
      "Shared gateways and translated addresses can hide the original internal client.",
  },
  {
    type: "Internal segmentation firewall",
    purpose:
      "Controls traffic between internal zones such as users, servers, management, labs, or sensitive systems.",
    usefulEvidence:
      "Source zone, destination zone, service, application, rule, user, device, direction, and state.",
    limitation:
      "It may not identify the exact application or user when identity integration is missing.",
  },
  {
    type: "Cloud network control",
    purpose:
      "Applies fictional access policies to cloud networks, instances, applications, gateways, or services.",
    usefulEvidence:
      "Resource identity, network object, rule, source, destination, port, protocol, action, account, and region.",
    limitation:
      "Cloud policy can be distributed across several layers and ownership records.",
  },
  {
    type: "Application-aware firewall",
    purpose:
      "Uses application, service, user, or content context in addition to basic network fields.",
    usefulEvidence:
      "Application identification, user mapping, category, risk label, rule, session, and action.",
    limitation:
      "Application identification can be incomplete, encrypted, delayed, or dependent on signatures and policy.",
  },
  {
    type: "Web application firewall concept",
    purpose:
      "Protects fictional web applications by evaluating HTTP request and response patterns against policy.",
    usefulEvidence:
      "Method, host, path, request ID, response code, rule, action, client, application, and time.",
    limitation:
      "A web-control alert does not prove the user’s identity, intent, or the complete application result.",
  },
];

const ruleFields = [
  {
    field: "Source",
    question:
      "Which fictional user, device, address range, application, service, or zone begins the connection?",
    caution:
      "Shared devices, proxies, VPNs, and translated addresses can change the apparent source.",
  },
  {
    field: "Destination",
    question:
      "Which fictional server, application, address, service, zone, or network object receives the connection?",
    caution:
      "A familiar destination does not automatically prove the approved purpose.",
  },
  {
    field: "Port and protocol",
    question:
      "Which transport protocol and service port are required for the approved workflow?",
    caution:
      "A port number does not always identify the actual application.",
  },
  {
    field: "Application",
    question:
      "Which approved application or service should use the rule?",
    caution:
      "Application identification may be unavailable or uncertain.",
  },
  {
    field: "Direction",
    question:
      "Is the traffic inbound, outbound, or moving between internal zones?",
    caution:
      "The same source and destination can have different risk depending on direction.",
  },
  {
    field: "Zone",
    question:
      "Which trust boundaries or network segments does the rule cross?",
    caution:
      "Broad zone-to-zone rules can create unintended access.",
  },
  {
    field: "Action",
    question:
      "Should the rule allow, deny, drop, reject, alert, log, reset, or rate-limit?",
    caution:
      "The policy action confirms the control decision, not the complete safety or intent of the traffic.",
  },
  {
    field: "State",
    question:
      "Is the traffic new, established, related, invalid, expired, or reset?",
    caution:
      "Connection state does not explain business purpose by itself.",
  },
  {
    field: "Owner and purpose",
    question:
      "Who owns the business workflow, and why is the network access needed?",
    caution:
      "A technically valid rule without a current owner can become an unmanaged risk.",
  },
  {
    field: "Time and expiration",
    question:
      "When should the rule become active, and when must it be reviewed or removed?",
    caution:
      "Temporary rules often become permanent when expiration is not enforced.",
  },
];

const actionOutcomes = [
  {
    action: "Allow",
    directMeaning:
      "The firewall permitted the recorded traffic under the matched rule and conditions.",
    doesNotProve:
      "That the traffic was safe, approved by the owner, expected by the application, or harmless.",
    nextStep:
      "Correlate process, application, owner, destination, baseline, and business evidence.",
  },
  {
    action: "Deny",
    directMeaning:
      "The firewall refused the recorded traffic under the matched policy.",
    doesNotProve:
      "That the source was malicious or that no other path or attempt succeeded.",
    nextStep:
      "Review source, destination, frequency, reason, rule, owner, and surrounding events.",
  },
  {
    action: "Drop",
    directMeaning:
      "The firewall discarded the traffic without completing the connection.",
    doesNotProve:
      "That the sender received no information or that the activity ended.",
    nextStep:
      "Confirm repeated attempts, source role, destination sensitivity, and other control evidence.",
  },
  {
    action: "Reject",
    directMeaning:
      "The firewall refused the traffic and may have returned a refusal response.",
    doesNotProve:
      "That the request was harmful or that the application understood the exact cause.",
    nextStep:
      "Review the policy reason, application behavior, user report, and dependency impact.",
  },
  {
    action: "Reset",
    directMeaning:
      "The firewall or security control terminated an existing or attempted session.",
    doesNotProve:
      "The original cause, user intent, or complete impact.",
    nextStep:
      "Review session state, rule, application, timing, and follow-on activity.",
  },
  {
    action: "Log or alert only",
    directMeaning:
      "The control recorded or highlighted the traffic without necessarily blocking it.",
    doesNotProve:
      "That the activity was prevented or that impact did not occur.",
    nextStep:
      "Determine whether the session continued and correlate endpoint and application evidence.",
  },
  {
    action: "Rate limit",
    directMeaning:
      "The control restricted the amount or frequency of traffic under the configured policy.",
    doesNotProve:
      "That every excess request was unsafe or that the service remained healthy.",
    nextStep:
      "Compare baseline, service health, user impact, source distribution, and owner expectations.",
  },
];

const evidenceMatrix = [
  {
    source: "Firewall event",
    supports:
      "The recorded source, destination, port, protocol, direction, zone, rule, action, state, and time.",
    limitation:
      "Does not automatically prove user intent, content, application purpose, or business approval.",
  },
  {
    source: "Firewall rule",
    supports:
      "The configured match conditions, action, owner, description, schedule, and logging behavior.",
    limitation:
      "The active policy may differ from the documented request or another rule may take precedence.",
  },
  {
    source: "Application log",
    supports:
      "Whether the fictional application accepted, rejected, processed, or failed the related request.",
    limitation:
      "Application records may not show every network-control decision.",
  },
  {
    source: "Endpoint process evidence",
    supports:
      "Which process or service on the fictional device initiated or received network activity.",
    limitation:
      "Process names, paths, and telemetry may be incomplete or delayed.",
  },
  {
    source: "DNS and proxy evidence",
    supports:
      "Name resolution, web request, method, path, response, category, user, and request ID context.",
    limitation:
      "DNS does not prove connection, and proxy metadata may not reveal complete content.",
  },
  {
    source: "Asset inventory",
    supports:
      "Owner, role, sensitivity, environment, expected applications, and network zone.",
    limitation:
      "Inventory can be stale or incomplete.",
  },
  {
    source: "Change ticket",
    supports:
      "Approved purpose, scope, owner, source, destination, service, test, rollback, and expiration.",
    limitation:
      "The implemented rule may not exactly match the approved request.",
  },
  {
    source: "Post-change validation",
    supports:
      "Whether the intended application workflow works and unintended access remains blocked.",
    limitation:
      "Validation covers the tested paths and does not guarantee every possible condition.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the business flow",
    detail:
      "Identify the fictional user, device, application, source, destination, service, direction, owner, and required outcome.",
  },
  {
    step: "2",
    title: "Review existing policy",
    detail:
      "Check current rules, zones, objects, precedence, translations, logging, expiration, and related controls.",
  },
  {
    step: "3",
    title: "Design least privilege",
    detail:
      "Limit source, destination, service, application, direction, schedule, and duration to the minimum approved need.",
  },
  {
    step: "4",
    title: "Preserve and test",
    detail:
      "Record the original policy, prepare rollback, test the exact approved path, and confirm unrelated paths remain blocked.",
  },
  {
    step: "5",
    title: "Validate the application",
    detail:
      "Confirm firewall action, endpoint process, application result, user impact, and business function.",
  },
  {
    step: "6",
    title: "Monitor and recertify",
    detail:
      "Review usage, failures, unexpected sources, owner status, expiration, and continuing business need.",
  },
];


const ruleReviewExamples = [
  {
    request: "Learning portal to report database",
    source:
      "report-app-3 in the application zone",
    destination:
      "report-db-2 in the database zone",
    service:
      "Approved database service on the documented port",
    strongDesign:
      "One application identity, one destination object, one required service, logging enabled, named owner, validation test, review date, and rollback.",
    weakDesign:
      "Allow the entire application zone to reach the entire database zone on all ports.",
  },
  {
    request: "Managed laptops to approved update service",
    source:
      "Managed student and teacher devices",
    destination:
      "Fictional update-service.test",
    service:
      "HTTPS through the approved proxy",
    strongDesign:
      "Managed-device group, approved destination, proxy-only path, required protocol, monitoring, owner, and expiration review.",
    weakDesign:
      "Allow all outbound traffic because updates use the internet.",
  },
  {
    request: "Monitoring server to internal systems",
    source:
      "monitoring-server-2 in the management zone",
    destination:
      "Named managed-server group",
    service:
      "Documented monitoring service only",
    strongDesign:
      "One management source, defined server group, required service, schedule, owner, logging, and recertification.",
    weakDesign:
      "Allow the management zone to connect to every internal system.",
  },
  {
    request: "Temporary vendor support",
    source:
      "Approved support gateway",
    destination:
      "One fictional application server",
    service:
      "Required remote-support service during a limited window",
    strongDesign:
      "Named support gateway, one destination, one service, MFA and owner context, start and end time, logging, validation, and automatic expiration.",
    weakDesign:
      "Create a permanent any-source remote-access rule.",
  },
  {
    request: "Web gateway to application servers",
    source:
      "reverse-proxy-1 in the web zone",
    destination:
      "Approved web-application server group",
    service:
      "Documented application service",
    strongDesign:
      "Expected proxy source, named server group, application service, health-check traffic, logging, owner, and rollback.",
    weakDesign:
      "Allow all web-zone traffic into the server zone.",
  },
  {
    request: "Backup server to storage",
    source:
      "backup-server-1",
    destination:
      "backup-storage-1",
    service:
      "Approved backup service during the nightly window",
    strongDesign:
      "Two named assets, one service, schedule, expected volume, owner, alerting, and validation.",
    weakDesign:
      "Allow the backup server unrestricted access to all storage systems.",
  },
];

const ruleQualityChecks = [
  {
    check: "Named owner",
    question:
      "Is a current fictional person or team responsible for the rule and business workflow?",
    failure:
      "The rule remains active after the original project or owner disappears.",
  },
  {
    check: "Documented purpose",
    question:
      "Does the rule description explain the exact application and business need?",
    failure:
      "A vague description such as temporary access provides no useful review context.",
  },
  {
    check: "Specific source",
    question:
      "Is the source limited to the required device, service, user group, application, or zone?",
    failure:
      "An entire network range receives access when one application server was required.",
  },
  {
    check: "Specific destination",
    question:
      "Is the destination limited to the exact server, service, object group, or approved external destination?",
    failure:
      "The rule permits access to an entire sensitive zone.",
  },
  {
    check: "Required service only",
    question:
      "Are protocol, port, and application restricted to the approved workflow?",
    failure:
      "An all-services rule creates access beyond the documented requirement.",
  },
  {
    check: "Rule order and shadowing",
    question:
      "Will the intended rule match before broader or conflicting rules?",
    failure:
      "An earlier rule changes the result or makes the new rule ineffective.",
  },
  {
    check: "Logging and monitoring",
    question:
      "Will the rule record enough evidence to validate use and detect unexpected patterns?",
    failure:
      "The team cannot confirm whether the rule is used correctly.",
  },
  {
    check: "Expiration and review",
    question:
      "Does the rule have an expiration, recertification date, or documented permanent need?",
    failure:
      "Temporary access remains active indefinitely.",
  },
  {
    check: "Rollback",
    question:
      "Can the original policy be restored quickly if application or security validation fails?",
    failure:
      "The change causes disruption with no prepared recovery method.",
  },
  {
    check: "Positive and negative validation",
    question:
      "Does testing confirm the required workflow succeeds and unrelated access remains blocked?",
    failure:
      "Only the allowed path is tested, leaving broad unintended access undiscovered.",
  },
];

const networkToolHealth = [
  {
    area: "Policy synchronization",
    question:
      "Are the fictional firewall manager, gateways, host policies, and cloud controls using the intended current policy version?",
    gap:
      "A dashboard may show the new rule while one enforcement point still uses an older policy.",
  },
  {
    area: "Logging status",
    question:
      "Are allow, deny, session, translation, application, and rule events being recorded as expected?",
    gap:
      "Missing logs can make validation and historical review incomplete.",
  },
  {
    area: "Clock and time zone",
    question:
      "Are network-control timestamps normalized and sufficiently accurate?",
    gap:
      "Clock differences can misorder firewall, endpoint, DNS, proxy, and application events.",
  },
  {
    area: "Identity mapping",
    question:
      "Can the fictional network tool reliably connect traffic to the correct user, device, or service identity?",
    gap:
      "Shared gateways and stale identity mappings can misattribute activity.",
  },
  {
    area: "Application identification",
    question:
      "Is the tool correctly identifying the application, or only observing port and protocol?",
    gap:
      "Traffic on a familiar port can belong to an unexpected application.",
  },
  {
    area: "Object accuracy",
    question:
      "Do source, destination, service, zone, and application objects match the current environment?",
    gap:
      "Stale objects can permit, deny, or mislabel the wrong systems.",
  },
  {
    area: "Rule hit data",
    question:
      "Does the tool report when and how often each rule matches?",
    gap:
      "Unused rules and unexpected usage can remain hidden without reliable hit data.",
  },
  {
    area: "Retention",
    question:
      "Are connection, rule, session, translation, and change records retained long enough for review?",
    gap:
      "Short retention can remove the evidence needed to explain an older event.",
  },
];

const timeline = [
  {
    time: "15:00:00",
    source: "Change ticket",
    event:
      "Approved fictional request opens for report-app-3 to reach report-db-2.",
    meaning:
      "Provides owner, purpose, source, destination, service, maintenance window, test, rollback, and expiration.",
  },
  {
    time: "15:02:10",
    source: "Policy review",
    event:
      "No existing rule permits the required application-to-database flow.",
    meaning:
      "Confirms the change is needed rather than duplicating existing access.",
  },
  {
    time: "15:03:20",
    source: "Rule design",
    event:
      "New rule limits source to report-app-3, destination to report-db-2, and service to the approved database port.",
    meaning:
      "Demonstrates least-privilege scope.",
  },
  {
    time: "15:04:00",
    source: "Rule analysis",
    event:
      "No earlier rule shadows or broadens the new policy.",
    meaning:
      "Supports the expected rule order and effect.",
  },
  {
    time: "15:05:30",
    source: "Policy deployment",
    event:
      "Rule version 44 deploys successfully to the fictional segmentation firewall.",
    meaning:
      "Confirms policy installation but not yet application success.",
  },
  {
    time: "15:06:12",
    source: "Firewall",
    event:
      "report-app-3 connects to report-db-2 on the approved service under rule DB-REPORT-44.",
    meaning:
      "Confirms the intended network path was allowed.",
  },
  {
    time: "15:06:13",
    source: "Application",
    event:
      "Report application completes the database health check.",
    meaning:
      "Adds application-level validation to the firewall event.",
  },
  {
    time: "15:07:00",
    source: "Negative test",
    event:
      "A different fictional application server remains denied to report-db-2.",
    meaning:
      "Confirms unrelated access was not broadly opened.",
  },
  {
    time: "15:10:00",
    source: "Monitoring",
    event:
      "Rule records only the approved source, destination, and service.",
    meaning:
      "Supports correct initial use and absence of unexpected matches.",
  },
  {
    time: "15:20:00",
    source: "Owner validation",
    event:
      "Application owner confirms report generation and no unrelated service disruption.",
    meaning:
      "Completes technical and business validation.",
  },
];

const mistakes = [
  "Treating an allowed connection as proof that the traffic was safe or approved.",
  "Treating a denied connection as proof that the source was malicious.",
  "Using only an address without checking user, device, process, application, zone, translation, and owner context.",
  "Assuming a port number always identifies the actual application.",
  "Creating broad source, destination, service, zone, or schedule access for convenience.",
  "Ignoring rule order, shadowing, object accuracy, translations, and overlapping controls.",
  "Changing a firewall rule without preserving the original policy and preparing rollback.",
  "Testing only whether the required path works without verifying unrelated paths remain blocked.",
  "Leaving temporary vendor, migration, testing, or emergency access without automatic expiration.",
  "Keeping unused rules because they have not caused a known problem.",
  "Relying on dashboard summaries without reviewing firewall, endpoint, application, DNS, proxy, and change evidence.",
  "Publishing real addresses, domains, zones, rules, ports, applications, screenshots, owners, or internal network details.",
];

const quizQuestions = [
  {
    question:
      "What does an allowed firewall event directly prove?",
    choices: [
      "The firewall permitted the recorded traffic under the matched rule and conditions.",
      "The traffic was safe and approved by every owner.",
      "The user intended the connection.",
      "The application processed the request successfully.",
    ],
    answer: 0,
    explanation:
      "Allow confirms the network-control decision, not complete safety, intent, or application outcome.",
  },
  {
    question:
      "Why should a firewall rule include a named owner and purpose?",
    choices: [
      "So the business need, scope, impact, recertification, and removal decision can be validated.",
      "So the rule never needs review.",
      "So all traffic from the owner can be allowed.",
      "So logging can be disabled.",
    ],
    answer: 0,
    explanation:
      "Ownership and purpose keep access accountable and reviewable.",
  },
  {
    question:
      "Which rule best follows least privilege?",
    choices: [
      "One approved application source to one required destination on one required service with logging and review.",
      "Any internal source to an entire server zone on all services.",
      "All outbound traffic for update access.",
      "A permanent vendor rule from any source.",
    ],
    answer: 0,
    explanation:
      "Least privilege limits access to the exact approved workflow.",
  },
  {
    question:
      "What is a strong negative validation test?",
    choices: [
      "Confirm that an unrelated fictional source remains denied after the intended path is allowed.",
      "Confirm only that the intended connection succeeds.",
      "Disable logging during testing.",
      "Remove the rollback plan after deployment.",
    ],
    answer: 0,
    explanation:
      "Negative testing helps detect unintended broad access.",
  },
  {
    question:
      "Why can one source address represent many users or devices?",
    choices: [
      "A proxy, VPN, shared server, or translation device may represent multiple original clients.",
      "Addresses are never useful.",
      "All users share one endpoint.",
      "Firewalls replace identity systems.",
    ],
    answer: 0,
    explanation:
      "Shared infrastructure can change or hide the original client identity.",
  },
  {
    question:
      "What should happen to a temporary firewall rule?",
    choices: [
      "It should have a named owner, defined end time, logging, validation, and automatic expiration or recertification.",
      "It should remain permanently in case it is needed later.",
      "It should allow all services for flexibility.",
      "It should be undocumented.",
    ],
    answer: 0,
    explanation:
      "Temporary access needs enforced lifecycle controls.",
  },
  {
    question:
      "When is a firewall-rule change complete?",
    choices: [
      "After policy deployment, intended-path validation, unrelated-path testing, business validation, monitoring, rollback readiness, and documentation.",
      "When the rule appears in the dashboard.",
      "When the first allowed event appears.",
      "When the change ticket is opened.",
    ],
    answer: 0,
    explanation:
      "Deployment alone does not prove correct or safe operation.",
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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
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
        Next Lesson
      </Link>
    </div>
  );
}

function FirewallTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Firewall Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Defensive Network-Control Layers
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {firewallTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Useful evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.usefulEvidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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

function RuleFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Questions That Define a Firewall Rule
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {ruleFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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

function OutcomeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Policy Outcomes
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Understand What Each Firewall Action Does and Does Not Prove
      </h2>

      <div className="mt-6 grid gap-5">
        {actionOutcomes.map((item) => (
          <div
            key={item.action}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.3fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="text-lg font-black text-cyan-100">{item.action}</p>
            </div>

            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Direct meaning
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.directMeaning}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Does not prove
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.doesNotProve}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Strong next step
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.nextStep}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function RuleReviewGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Design Examples
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Compare Least-Privilege Rules with Overly Broad Access
      </h2>

      <div className="mt-6 grid gap-5">
        {ruleReviewExamples.map((item) => (
          <div
            key={item.request}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-white">{item.request}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Required flow
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  <span className="font-black text-cyan-100">Source:</span>{" "}
                  {item.source}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  <span className="font-black text-blue-100">Destination:</span>{" "}
                  {item.destination}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  <span className="font-black text-emerald-100">Service:</span>{" "}
                  {item.service}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Strong design
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongDesign}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                  Weak design
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakDesign}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QualityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Quality Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Checks Before Approving or Keeping a Firewall Rule
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {ruleQualityChecks.map((item) => (
          <div
            key={item.check}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.check}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Weak-rule symptom
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.failure}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HealthGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Tool Health and Visibility
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Checks Before Trusting Network-Control Evidence
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {networkToolHealth.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.area}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Potential evidence gap
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.gap}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        What Firewall and Network Evidence Can and Cannot Prove
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

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Review and Validate a Firewall Rule in Six Steps
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

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Validation Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Least-Privilege Rule from Request to Business Validation
      </h2>

      <div className="mt-6 grid gap-3">
        {timeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]"
          >
            <p className="font-mono text-sm font-black text-cyan-300">
              {item.time}
            </p>
            <p className="text-sm font-black text-blue-200">{item.source}</p>
            <p className="text-sm font-semibold text-white">{item.event}</p>
            <p className="text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FirewallsAndNetworkSecurityToolsPage() {
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
              Module I5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5.3 Firewalls and Network Security Tools
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders review fictional firewall rules, zones,
            directions, applications, ports, protocols, policy outcomes,
            connection evidence, tool health, least privilege, validation, and
            rule lifecycle.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I5: Defensive Security Tools"
          lessonTitle="Firewalls and Network Security Tools"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that an allowed connection is not automatically safe or business-approved.",
            "I understand that a denied, rejected, dropped, or reset connection is not automatically malicious.",
            "I will review source, destination, application, port, protocol, direction, zone, rule, action, state, owner, and time context.",
            "I will preserve the original fictional policy, rule version, logs, objects, change record, and validation evidence.",
            "I will use only fictional addresses, domains, applications, zones, rules, events, owners, tickets, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Firewall Decides Whether Traffic Matches Policy—not Whether the Entire Activity Is Safe"
        >
          <p className="leading-8">
            A firewall may allow approved traffic, block mistaken traffic,
            record expected retries, or highlight a real concern. The firewall
            decision is valuable evidence, but the final interpretation still
            depends on the endpoint process, application result, user or
            service identity, business purpose, asset role, change record, and
            surrounding events.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The firewall allowed it, so the activity must be safe.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the matched rule and policy outcome, then correlate
                process, application, identity, owner, destination, baseline,
                and business evidence.”
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
          title="Firewall Rules Shape Access Between Users, Devices, Applications, Services, and Sensitive Zones"
        >
          <p className="leading-8">
            A narrow, owned, monitored rule can support an important workflow
            while limiting unnecessary access. A broad, undocumented, stale, or
            untested rule can create hidden exposure, application outages, or
            confusing evidence. Professional defenders manage both technical
            function and rule lifecycle.
          </p>
        </SectionCard>

        <FirewallTypeGuide />
        <RuleFieldGuide />
        <OutcomeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Least Privilege Applies to Network Paths"
        >
          <p className="leading-8">
            A strong firewall rule permits only the source, destination,
            service, application, direction, zone, and time needed for an
            approved purpose. It has a named owner, useful logging, a review
            date, positive and negative tests, rollback, and post-change
            monitoring.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Purpose", "Which fictional business or application flow requires access?"],
              ["Minimum", "What is the smallest source, destination, service, application, and schedule?"],
              ["Control", "Which rule, zone, direction, state, logging, and expiration apply?"],
              ["Validate", "Does the required path work while unrelated paths remain blocked?"],
              ["Review", "Is the owner, need, usage, rule order, and expiration still current?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <RuleReviewGuide />
        <QualityGuide />
        <HealthGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Firewall and Network-Control Terms
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


        <FakeDashboardCard
          title="Fake Firewall and Network Security Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services network-control environment."
          metrics={[
            {
              label: "Active rules",
              value: "184",
              note: "One hundred fifty-six have current owners and reviews; twenty-eight require recertification.",
            },
            {
              label: "Temporary rules",
              value: "7",
              note: "Five expire automatically this week; two remain blocked pending owner and rollback details.",
            },
            {
              label: "Validation findings",
              value: "4",
              note: "One shadowed rule, one stale object, one missing negative test, and one unexpected source match require correction.",
            },
          ]}
        />

        <FakeAlertCard
          title="New Application-to-Database Rule Matches an Unexpected Source"
          severity="High"
          time="03:12 PM"
          source="Fake Network Policy Validation Console"
          details="A fictional least-privilege rule was approved for report-app-3 to reach report-db-2 on one database service. Validation shows the intended application succeeds, but one additional server also matches because the source object group contains a stale member."
          recommendation="Preserve the deployed rule and object versions, stop broader rollout, verify asset ownership, remove only the stale object through approved change control, retest the intended path and unrelated sources, keep rollback ready, and monitor rule hits after correction."
        />

        <FakeLogPanel
          title="Fake Firewall Rule Validation Evidence"
          logs={[
            "15:00:00 CHANGE rule='DB-REPORT-44' source='report-app-3' destination='report-db-2' service='db-approved' approved='true'",
            "15:05:30 POLICY version='44' deployment='success' gateway='segment-fw-2'",
            "15:06:12 FIREWALL source='report-app-3' destination='report-db-2' action='allow' rule='DB-REPORT-44'",
            "15:06:13 APPLICATION source='report-app-3' database_health='success'",
            "15:07:00 FIREWALL source='unrelated-app-8' destination='report-db-2' action='deny'",
            "15:08:11 FIREWALL source='legacy-report-1' destination='report-db-2' action='allow' rule='DB-REPORT-44'",
            "15:08:20 OBJECT group='report-app-sources' member='legacy-report-1' inventory_status='retired'",
            "15:09:00 CHANGE rollout='paused' rollback='ready'",
            "15:12:00 REVIEW finding='stale_source_object' confidence='high'",
            "15:18:00 VALIDATION stale_member_removed='true' unexpected_matches='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Firewall Rule Finding Is Best Supported?"
          evidence={[
            "The approved request names report-app-3 as the only source.",
            "The intended application reaches report-db-2 successfully on the approved service.",
            "An unrelated active application server remains denied.",
            "legacy-report-1 is unexpectedly allowed under the same rule.",
            "The source object group still contains legacy-report-1.",
            "Inventory identifies legacy-report-1 as retired.",
            "The broader rollout is paused and rollback remains available.",
            "After the stale member is removed, no unexpected source matches occur.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "A stale source-object member broadened the rule beyond the approved scope, and the narrow object correction restored least-privilege behavior.",
            "The firewall is compromised because one unexpected source was allowed.",
            "The entire database rule should be permanently removed even though the required application depends on it.",
            "All source object groups are unsafe and should be replaced with any-source rules.",
          ]}
          bestAnswer={0}
          explanation="Approved scope, rule-hit evidence, object membership, inventory, correction, negative testing, and monitoring support a stale-object finding rather than a broader unsupported conclusion."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Firewall and Network-Control Review"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build a Fictional Firewall Rule Validation Worksheet"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Application Access Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review a supplied fictional request for one application server
                to reach one database server. The evidence packet includes
                inventory, network zones, application ownership, current rules,
                objects, change approval, policy version, firewall events,
                application results, negative tests, monitoring, and expiration
                records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>State the business purpose, owner, source, destination, service, direction, zones, and time window.</li>
                <li>Review existing policy, objects, rule order, shadowing, translations, logging, and expiration.</li>
                <li>Design the minimum fictional access required.</li>
                <li>Preserve the original policy and prepare rollback.</li>
                <li>Test the intended path and at least two unrelated paths.</li>
                <li>Correlate firewall, endpoint, application, inventory, change, owner, and monitoring evidence.</li>
                <li>Document confidence, impact, gaps, owner, validation, monitoring, recertification, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real firewalls,
            alter network rules, scan systems, test real ports, capture traffic,
            visit destinations, bypass controls, or publish real addresses,
            domains, zones, objects, rules, ports, applications, screenshots,
            owners, or internal network details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Intended Connection Works, but Negative Testing Was Skipped"
          scenario="A fictional application successfully connects through a new firewall rule. The reviewer has not tested whether unrelated sources can also reach the destination."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the change under validation, test unrelated approved fictional sources, review object membership and rule order, preserve rollback, and close only after least-privilege behavior is confirmed.",
              outcome:
                "Best defensive choice. Successful access does not prove the rule is appropriately narrow.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the change because the intended application works.",
              outcome:
                "Weak response. Broad unintended access may remain undiscovered.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Expand the rule to all application servers to avoid future failures.",
              outcome:
                "Unsafe. The expansion exceeds the approved purpose.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Temporary Vendor Rule Has No Expiration"
          scenario="A fictional vendor-support rule allows one approved support gateway to reach one application server, but the rule has no automatic end time or recertification date."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause approval until the owner defines the support window, automatic expiration, logging, validation, rollback, and future recertification requirements.",
              outcome:
                "Best defensive choice. Temporary access requires enforced lifecycle control.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the rule permanently in case support is needed later.",
              outcome:
                "Unsafe. Permanent access exceeds the temporary business need.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove logging so the temporary rule uses less storage.",
              outcome:
                "Weak response. Logging is important for validation and review.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Firewalls and Network Security Tools Checklist"
          items={[
            "I identify the fictional source, destination, port, protocol, application, direction, zones, rule, action, state, owner, purpose, and time window.",
            "I preserve the original policy, rule version, objects, order, translations, logs, change ticket, and validation evidence.",
            "I distinguish allow, deny, drop, reject, reset, log-only, alert, and rate-limit outcomes.",
            "I do not treat a policy outcome as proof of user intent, content, application success, or malicious activity.",
            "I design the minimum required source, destination, service, application, schedule, and duration.",
            "I review rule order, shadowing, object accuracy, identity mapping, application identification, logging, and retention.",
            "I test the intended path and confirm unrelated fictional paths remain blocked.",
            "I require a named owner, purpose, rollback, expiration or recertification, monitoring, and closure criteria.",
            "I correlate firewall evidence with endpoint, DNS, proxy, application, inventory, identity, owner, and change records.",
            "I use only fictional evidence and never publish real addresses, domains, zones, rules, objects, ports, applications, screenshots, owners, or internal network details.",
          ]}
        />

        <MiniQuiz
          title="I5.3 Mini Quiz: Firewalls and Network Security Tools"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Firewall Rule Validation Report containing at least twelve supplied network-control, endpoint, application, DNS, proxy, inventory, change, and validation records. Include business purpose, owner, source, destination, protocol, port, application, direction, zones, rule order, action, state, objects, translation context, logging, expiration, original policy, least-privilege design, positive test, negative tests, rollback, confidence, impact, evidence gaps, monitoring, recertification, residual risk, and closure criteria."
          tips={[
            "Use only fictional addresses, domains, zones, rules, objects, ports, applications, devices, users, owners, tickets, and organizations.",
            "Include one stale object, one shadowed rule, one temporary rule, and one correctly designed least-privilege rule.",
            "Clearly separate firewall action from application result and business approval.",
            "Do not include real firewall screenshots, addresses, domains, network diagrams, ports, rules, objects, or internal security details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A firewall records a policy decision, not a complete conclusion about safety, intent, or application outcome.",
            "Strong rule review includes source, destination, protocol, port, application, direction, zone, state, owner, purpose, and time.",
            "Least-privilege rules are narrow, owned, logged, tested, reversible, monitored, and reviewed.",
            "Positive testing confirms required access, while negative testing checks that unrelated access remains blocked.",
            "Rule order, shadowing, stale objects, translations, identity mapping, logging, and expiration can change the real policy effect.",
            "Firewall changes require preserved evidence, rollback, technical and business validation, monitoring, recertification, and residual-risk documentation.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I5
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}