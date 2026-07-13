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
  `${modulePath}/dns-dhcp-and-common-network-services`;
const nextLesson =
  `${modulePath}/network-segmentation-concepts`;

const objectives = [
  "Explain how firewall rules use source, destination, direction, protocol, port, zone, identity, state, and action.",
  "Interpret fictional allow and deny records without assuming that either result proves the entire event.",
  "Evaluate firewall rules using least privilege, business purpose, ownership, exposure, logging, and review dates.",
  "Identify broad, duplicate, stale, shadowed, temporary, and misordered rule concepts.",
  "Recommend authorized, documented, tested, reversible, and validated access-rule changes.",
];

const vocabulary = [
  [
    "Firewall",
    "A preventive and detective control that evaluates network traffic against configured rules and policies.",
  ],
  [
    "Rule",
    "A condition-and-action statement that determines how selected traffic should be handled.",
  ],
  [
    "Source",
    "The device, address, subnet, user, group, interface, or zone where traffic originates.",
  ],
  [
    "Destination",
    "The device, address, subnet, service, application, interface, or zone the traffic is trying to reach.",
  ],
  [
    "Direction",
    "The flow context of traffic, such as inbound, outbound, or between internal zones.",
  ],
  [
    "Action",
    "The configured decision, such as allow, deny, reject, monitor, or log.",
  ],
  [
    "Stateful inspection",
    "The concept of tracking connection state so related response traffic can be evaluated with context.",
  ],
  [
    "Implicit deny",
    "The principle that traffic not specifically allowed by policy is denied by default.",
  ],
  [
    "Least privilege",
    "Allowing only the minimum access required for an approved purpose.",
  ],
  [
    "Rule order",
    "The sequence in which rules are evaluated. Earlier rules may affect whether later rules are reached.",
  ],
  [
    "Shadowed rule",
    "A rule that may never be reached because an earlier rule already matches the same traffic.",
  ],
  [
    "Temporary rule",
    "A time-bounded rule created for a specific approved need and scheduled for review or removal.",
  ],
];

const ruleFields = [
  {
    field: "Source",
    question:
      "Which device, subnet, identity, group, interface, or zone begins the traffic?",
    weakExample: "Any source",
    strongExample: "Approved student-lab subnet or managed update devices",
  },
  {
    field: "Destination",
    question:
      "Which system, service, subnet, application, or zone should receive the traffic?",
    weakExample: "Any destination",
    strongExample: "Specific approved update service or internal application zone",
  },
  {
    field: "Protocol and service",
    question:
      "Which transport protocol, port, application, or service is required?",
    weakExample: "All protocols and all ports",
    strongExample: "Only the documented service needed for the approved workflow",
  },
  {
    field: "Direction",
    question:
      "Is the traffic inbound, outbound, or moving between internal trust zones?",
    weakExample: "Direction not documented",
    strongExample: "Student lab to training portal only",
  },
  {
    field: "Action",
    question:
      "Should matching traffic be allowed, denied, rejected, monitored, or logged?",
    weakExample: "Allow without logging",
    strongExample: "Allow the exact requirement and log relevant decisions",
  },
  {
    field: "Context and lifecycle",
    question:
      "Who owns the rule, why is it needed, when should it expire, and how will it be reviewed?",
    weakExample: "No owner, purpose, ticket, or review date",
    strongExample: "Named owner, approved ticket, test plan, expiration, and rollback",
  },
];

const ruleQualityStates = [
  {
    state: "Narrow and justified",
    meaning:
      "The rule has a clear source, destination, service, direction, owner, purpose, logging plan, and review date.",
    response:
      "Keep, monitor, and revalidate at the scheduled review.",
  },
  {
    state: "Too broad",
    meaning:
      "The rule allows more sources, destinations, ports, protocols, or zones than the approved need requires.",
    response:
      "Recommend a narrower rule through the approved change process.",
  },
  {
    state: "Stale",
    meaning:
      "The approved project, test, system, owner, or dependency no longer exists.",
    response:
      "Confirm dependencies and request controlled removal or renewal.",
  },
  {
    state: "Duplicate",
    meaning:
      "Another rule appears to provide the same access, creating management and review confusion.",
    response:
      "Validate behavior and consolidate only through authorized review.",
  },
  {
    state: "Shadowed or misordered",
    meaning:
      "An earlier rule may match traffic before the intended rule is evaluated.",
    response:
      "Compare rule order, matching conditions, logs, and approved policy before changing anything.",
  },
  {
    state: "Missing",
    meaning:
      "An approved workflow has no rule that safely permits the required path.",
    response:
      "Document the requirement and request the narrowest authorized rule with testing and rollback.",
  },
];

const evidenceMatrix = [
  {
    source: "Firewall rulebase",
    supports:
      "Configured source, destination, service, action, order, owner, description, and sometimes lifecycle metadata.",
    limitation:
      "Does not prove the rule matched traffic recently or still supports a valid business need.",
  },
  {
    source: "Firewall event log",
    supports:
      "Observed source, destination, protocol, port, direction, zone, action, rule, and timestamp.",
    limitation:
      "Does not prove complete application content, user intent, ownership, or legitimacy.",
  },
  {
    source: "Application dependency map",
    supports:
      "Which systems and services need to communicate for an approved workflow.",
    limitation:
      "May be incomplete or outdated unless compared with current technical evidence.",
  },
  {
    source: "Asset and identity inventory",
    supports:
      "Expected owner, device role, network group, identity group, and environment.",
    limitation:
      "Does not prove current traffic or rule behavior without firewall and endpoint evidence.",
  },
  {
    source: "Change ticket",
    supports:
      "Approved reason, owner, implementation window, testing, expiration, and rollback.",
    limitation:
      "Does not prove the final configuration exactly matches the approved request.",
  },
  {
    source: "Endpoint or service record",
    supports:
      "Which process, application, user, or service attempted or received the connection.",
    limitation:
      "Does not prove every firewall in the path used the intended rule.",
  },
];

const evaluationWorkflow = [
  {
    step: "1",
    title: "Define the approved need",
    detail:
      "Identify the system owner, user group, service, direction, data sensitivity, and required business purpose.",
  },
  {
    step: "2",
    title: "Read the complete rule",
    detail:
      "Review source, destination, protocol, service, zone, action, logging, order, owner, description, and lifecycle.",
  },
  {
    step: "3",
    title: "Compare observed traffic",
    detail:
      "Use fictional allow and deny events to confirm which rule matched and whether the behavior aligns with design.",
  },
  {
    step: "4",
    title: "Measure exposure",
    detail:
      "Ask how many users, devices, zones, destinations, and services the rule actually permits.",
  },
  {
    step: "5",
    title: "Check conflicts and lifecycle",
    detail:
      "Review duplicates, shadowing, temporary rules, stale ownership, expired projects, and missing review dates.",
  },
  {
    step: "6",
    title: "Recommend a controlled action",
    detail:
      "Keep, narrow, remove, reorder, replace, or add a rule only through authorized testing, validation, and rollback.",
  },
];

const mistakes = [
  "Assuming an allow record proves that the traffic was safe or authorized.",
  "Assuming a deny record proves that the source was malicious.",
  "Reading only the port while ignoring source, destination, direction, state, zone, and rule.",
  "Using an any-to-any rule when a smaller approved path is possible.",
  "Ignoring rule order, duplicates, shadowing, expiration, and stale ownership.",
  "Removing a rule before checking dependencies, usage, impact, testing, and rollback.",
  "Creating permanent access for a short-term test or project.",
  "Turning off logging because the number of events is inconvenient.",
  "Changing a firewall during an investigation without preserving the original evidence.",
  "Publishing real rulebases, internal addresses, zones, or service details in a portfolio.",
];

const quizQuestions = [
  {
    question:
      "Which rule best follows least privilege?",
    choices: [
      "Allow one approved source group to one approved destination service using only the required protocol and port.",
      "Allow any source to any destination using all services.",
      "Disable all logging.",
      "Create a permanent rule for every temporary test.",
    ],
    answer: 0,
    explanation:
      "Least privilege permits only the minimum access required for the approved purpose.",
  },
  {
    question:
      "What does a firewall allow event prove?",
    choices: [
      "The observed traffic matched an allow decision at that firewall and time.",
      "The application action was completely trustworthy.",
      "The user had a valid business purpose.",
      "Every device in the path approved the traffic.",
    ],
    answer: 0,
    explanation:
      "An allow event is important evidence, but it does not prove the full purpose, identity, content, or legitimacy.",
  },
  {
    question:
      "What is a shadowed rule?",
    choices: [
      "A rule that may never be reached because an earlier rule already matches the traffic.",
      "A rule with dark text.",
      "A rule that contains no destination.",
      "A rule that always blocks DNS.",
    ],
    answer: 0,
    explanation:
      "Rule order can cause an earlier entry to match traffic before a later rule is evaluated.",
  },
  {
    question:
      "Why should temporary rules have expiration dates?",
    choices: [
      "To ensure short-term access is reviewed or removed when the approved need ends.",
      "To make all traffic public later.",
      "To prevent logging.",
      "To avoid assigning an owner.",
    ],
    answer: 0,
    explanation:
      "Time-bounded access reduces stale exposure and creates a required review point.",
  },
  {
    question:
      "What is the strongest response to an overbroad rule?",
    choices: [
      "Preserve evidence, confirm the approved requirement, and request a narrower authorized rule with testing and rollback.",
      "Delete the rule immediately without checking impact.",
      "Allow more traffic so the rule is easier to manage.",
      "Ignore it because the service is legitimate.",
    ],
    answer: 0,
    explanation:
      "A legitimate service can still be overexposed and should be narrowed through controlled change management.",
  },
  {
    question:
      "Why should deny events be correlated with application and identity evidence?",
    choices: [
      "A denial may reflect expected policy, misconfiguration, stale design, or unauthorized activity.",
      "Every denial means malware.",
      "Deny events never contain useful evidence.",
      "Identity evidence automatically changes the firewall.",
    ],
    answer: 0,
    explanation:
      "The meaning of a denial depends on approved purpose, ownership, identity, service, design, and timing.",
  },
  {
    question:
      "What should be documented for a firewall change?",
    choices: [
      "Owner, purpose, exact scope, test plan, validation, expiration when needed, monitoring, and rollback.",
      "Only the rule color.",
      "Only the port number.",
      "Only the person who noticed the alert.",
    ],
    answer: 0,
    explanation:
      "Good change documentation supports accountability, safety, verification, and recovery.",
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
          Previous: I1.4 DNS, DHCP, and Common Services
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
          Next: I1.6 Network Segmentation Concepts
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

function RuleAnatomy() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read Every Important Field Before Judging the Rule
      </h2>

      <div className="mt-6 grid gap-4">
        {ruleFields.map((item) => (
          <div
            key={item.field}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.42fr_1.2fr_0.9fr_0.9fr]"
          >
            <div>
              <p className="font-black text-cyan-100">{item.field}</p>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              {item.question}
            </p>
            <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                Weak example
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weakExample}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Strong example
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongExample}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RuleQualityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Rule Quality
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Classify the Rule Before Recommending a Change
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {ruleQualityStates.map((item) => (
          <div
            key={item.state}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.state}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              <span className="font-bold">Safe response:</span> {item.response}
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
        What Firewall Evidence Can and Cannot Prove
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

function EvaluationWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Evaluate a Firewall Rule in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {evaluationWorkflow.map((item) => (
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

export default function FirewallsAndNetworkAccessRulesPage() {
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
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.5 Firewalls and Network Access Rules
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Interpret fictional firewall rules and events using source,
            destination, direction, protocol, service, state, zone, action,
            ownership, least privilege, rule order, and lifecycle evidence.
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
          lessonTitle="Firewalls and Network Access Rules"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain IP addresses, subnets, network boundaries, ports, protocols, and common services.",
            "I understand that allow and deny events are partial evidence rather than complete proof.",
            "I will consider ownership, approved purpose, least privilege, logging, testing, and rollback.",
            "I will use only fictional rulebases, addresses, zones, systems, users, services, logs, and change records.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Rule Can Be Technically Functional and Still Be Too Broad, Stale, Misordered, or Poorly Owned"
        >
          <p className="leading-8">
            A firewall may successfully permit an approved application while
            also exposing that service to unnecessary devices or zones. Another
            rule may block traffic exactly as designed but appear suspicious
            because the business purpose is missing. Intermediate defenders
            compare rule logic, observed traffic, approved need, ownership, and
            lifecycle before recommending any change.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “This rule allowed traffic, so it must be correct.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the exact requirement, read every rule field, compare
                matched traffic, measure exposure, review lifecycle, and propose
                the narrowest authorized action.”
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
          title="Firewall Decisions Shape Trust Boundaries and Service Exposure"
        >
          <p className="leading-8">
            Firewalls help control which devices, identities, networks, and
            services may communicate across boundaries. Strong policies support
            approved work while reducing unnecessary pathways. Weak rules can
            create broad exposure, confusing exceptions, missing ownership, and
            difficult investigations.
          </p>
        </SectionCard>

        <RuleAnatomy />

        <SectionCard
          eyebrow="Core Concept"
          title="Read the Rule and the Event Together"
        >
          <p className="leading-8">
            The rulebase shows configured intent. The event log shows what
            happened at a specific time. Neither source alone proves that the
            access still has a valid owner, correct business purpose, current
            dependency, or appropriate scope. Defenders compare both with
            inventories, identity context, application dependencies, and change
            records.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
            <span className="font-bold">Intermediate habit:</span> interpret an
            allow or deny result as one documented control decision—not as a
            complete judgment about the person, application, or event.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Intermediate Firewall and Access-Control Terms
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

        <RuleQualityGuide />
        <EvidenceLimits />
        <EvaluationWorkflow />

        <FakeDashboardCard
          title="Fake Firewall Rule Quality Dashboard"
          subtitle="Training dashboard for the fictional Summit Learning Network. It compares rule ownership, scope, expiration, usage, and policy alignment."
          metrics={[
            {
              label: "Narrow approved rules",
              value: "42",
              note: "Rules have owners, exact services, limited zones, logging, and current review dates.",
            },
            {
              label: "Temporary rules past expiration",
              value: "2",
              note: "Both still match traffic even though their approved test windows ended.",
            },
            {
              label: "Overbroad rule",
              value: "1",
              note: "A staff application is reachable from both staff and guest zones instead of staff only.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Temporary Rule Still Allows Guest-to-Test Access"
          severity="High"
          time="11:26 AM"
          source="Fake Firewall Governance Monitor"
          details="A fictional temporary rule allows guest-zone HTTPS access to a test application. The approved test ended five days ago, the service owner reports no remaining dependency, and current logs show continued matching traffic."
          recommendation="Preserve rule, log, owner, dependency, and change evidence; confirm the expired need; then request an authorized rule removal with pre-change validation, rollback, and post-change monitoring."
        />

        <FakeLogPanel
          title="Fake Firewall Rule and Traffic Timeline"
          logs={[
            "11:02:00 RULE id='TEMP-184' source_zone='guest' destination='test-app' service='https' action='allow'",
            "11:02:00 RULE_META owner='learning-apps' purpose='two-day usability test' expiration='five_days_ago'",
            "11:10:14 FIREWALL source='guest-device-44' destination='test-app' service='https' action='allow' matched_rule='TEMP-184'",
            "11:12:08 APP service='test-app' status='online' active_test='false'",
            "11:14:31 OWNER_CONFIRMATION remaining_dependency='none' requested_access='staff-only'",
            "11:18:05 CHANGE original_ticket='approved' rollback='restore_TEMP-184_if_validation_fails'",
            "11:22:47 POLICY expected_source_zone='staff' expected_destination='test-app' expected_service='https'",
            "11:26:19 CORRELATION finding='expired_guest_access_rule' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Firewall Conclusion Is Best Supported?"
          evidence={[
            "The fictional rule allows guest-zone HTTPS access to the test application.",
            "Its documented expiration was five days ago.",
            "The approved usability test is complete.",
            "The service owner confirms that no guest dependency remains.",
            "Current firewall logs show the expired rule still matches traffic.",
            "The current design requires staff-only access.",
          ]}
          question="What is the strongest conclusion and next action?"
          options={[
            "The temporary guest-access rule is stale and overexposes the service; preserve evidence and request authorized removal with validation, rollback, and monitoring.",
            "Every guest connection is definitely malicious.",
            "Delete the application because the firewall allowed traffic.",
            "Convert the temporary rule into permanent any-to-any access.",
          ]}
          bestAnswer={0}
          explanation="The evidence confirms that the approved need ended, the owner reports no dependency, the rule still matches traffic, and current policy requires staff-only access. Removal still requires the approved change process and validation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Firewall Analysis"
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
          title="Complete a Fictional Firewall Rule Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Harborview Student Technology Network
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional rulebase includes student, staff, guest, server,
                management, and monitoring zones. Students receive an approved
                dependency map, twelve fictional rules, matching traffic logs,
                ownership records, and change tickets.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Read every source, destination, service, direction, action, and rule-order field.</li>
                <li>Compare each rule with the approved dependency and owner.</li>
                <li>Classify rules as narrow, broad, stale, duplicate, shadowed, missing, or temporary.</li>
                <li>Use logs to confirm which rules matched current fictional traffic.</li>
                <li>Measure actual access across users, devices, zones, and services.</li>
                <li>Write a recommendation with risk, impact, uncertainty, and owner.</li>
                <li>Include test, validation, rollback, monitoring, and review dates.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not use real firewall exports, private addresses, production
            rules, internal zones, credentials, or company diagrams. This is a
            fictional governance and reasoning exercise.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Deny Event Blocks an Approved Workflow"
          scenario="A fictional managed update server needs outbound HTTPS access to an approved vendor service. The firewall denies the connection because the server was moved into a new zone, but the approved rule still lists the old zone."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the denial, zone, dependency, and change evidence; confirm the approved need; and request a narrow authorized rule update with testing and rollback.",
              outcome:
                "Best defensive choice. The denial may result from stale rule context after an approved zone change.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the firewall because the update is approved.",
              outcome:
                "Unsafe. The correct response is a narrow, controlled rule correction.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Conclude the vendor service is malicious because the connection was denied.",
              outcome:
                "Unsupported. The strongest evidence points to a stale source-zone condition.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Broad Allow Rule Has No Recent Matches"
          scenario="A fictional rule permits all protocols from the staff zone to the server zone. No current traffic matches the rule, the original project ended months ago, and no owner or dependency can be confirmed."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve rule and usage evidence, complete owner and dependency review, then request controlled removal with validation and rollback.",
              outcome:
                "Best defensive choice. The rule appears stale and broad, but removal still requires evidence and authorization.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave it forever because it has no recent matches.",
              outcome:
                "Weak governance. Unused broad access still creates unnecessary future exposure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the rule so others can test it.",
              outcome:
                "Unsafe. Internal access-control details should remain protected.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Firewall and Access-Rule Review Checklist"
          items={[
            "I define the approved communication need before judging the rule.",
            "I record source, destination, direction, protocol, service, zone, action, logging, rule order, and timestamp.",
            "I identify the rule owner, business purpose, ticket, review date, and expiration when applicable.",
            "I compare the configured rulebase with observed allow and deny events.",
            "I measure actual exposure across users, devices, zones, services, and destinations.",
            "I check for broad, stale, duplicate, shadowed, temporary, misordered, and missing rule concepts.",
            "I do not treat an allow or deny event as complete proof of intent or legitimacy.",
            "I preserve original evidence before recommending a change.",
            "I include authorization, testing, validation, monitoring, rollback, and post-change review.",
            "I use fictional evidence and never collect or publish real rulebases or internal network details.",
          ]}
        />

        <MiniQuiz
          title="I1.5 Mini Quiz: Firewalls and Network Access Rules"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Firewall Rule Review for a small learning organization. Include at least twelve rules across student, staff, guest, server, management, and monitoring zones. For each rule, document source, destination, direction, protocol, service, action, logging, owner, purpose, ticket, review date, expiration, and observed usage. Identify one overbroad rule, one stale temporary rule, one duplicate, one shadowed rule, and one missing approved path."
          tips={[
            "Use only fictional organizations, systems, zones, users, services, logs, tickets, and documentation address ranges.",
            "Explain what each allow or deny event proves and what it cannot prove alone.",
            "Include risk, dependency, authorization owner, testing, validation, monitoring, and rollback.",
            "Do not include real rulebases, internal addresses, network diagrams, credentials, or production details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Firewall rules evaluate traffic using source, destination, direction, protocol, service, zone, state, and action.",
            "Allow and deny events document control decisions but do not prove complete identity, purpose, or legitimacy.",
            "Strong rules are narrow, owned, justified, logged, reviewed, and time-bounded when temporary.",
            "Rule order, duplicates, shadowing, stale ownership, and overbroad scope can weaken access control.",
            "Defenders compare rulebases, traffic logs, dependencies, identities, assets, and change records.",
            "Firewall changes must be authorized, documented, tested, reversible, validated, and monitored.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}