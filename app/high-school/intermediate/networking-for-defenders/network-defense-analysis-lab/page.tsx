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

const modulePath = "/high-school/intermediate/networking-for-defenders";
const previousLesson = `${modulePath}/reading-safe-network-diagrams`;
const moduleTest = `${modulePath}/module-test`;

const objectives = [
  "Correlate fictional architecture, addressing, DNS, DHCP, firewall, endpoint, identity, and change evidence.",
  "Build a defensible timeline using device, address, service, zone, owner, and timestamp context.",
  "Separate confirmed facts, likely explanations, missing evidence, and unsupported assumptions.",
  "Identify the earliest supported mismatch instead of changing the loudest control.",
  "Write a concise network-defense report with confidence, impact, ownership, validation, and rollback.",
];

const sources = [
  {
    name: "Architecture diagram",
    value: "Shows intended zones, subnets, services, controls, and approved flows.",
    limit: "Does not prove the current configuration or observed traffic.",
  },
  {
    name: "DHCP and VLAN records",
    value: "Connect a device to an address, prefix, gateway, scope, VLAN, and lease window.",
    limit: "Do not prove the identity or purpose of every later action.",
  },
  {
    name: "DNS records",
    value: "Show requested names, answers, response codes, resolvers, TTLs, and time.",
    limit: "Do not prove a later connection or application result.",
  },
  {
    name: "Firewall evidence",
    value: "Shows zones, addresses, protocol, service, action, matched rule, and time.",
    limit: "Does not prove complete intent, ownership, or application content.",
  },
  {
    name: "Endpoint telemetry",
    value: "Connects a local user, process, interface, and connection.",
    limit: "Does not prove every control decision along the network path.",
  },
  {
    name: "Identity and inventory",
    value: "Shows expected owner, role, device group, environment, and sensitivity.",
    limit: "May be stale and must be compared with technical evidence.",
  },
  {
    name: "Change records",
    value: "Shows approved reason, timing, owner, testing, and rollback.",
    limit: "Does not prove implementation matched the approved plan.",
  },
  {
    name: "Monitoring records",
    value: "Shows alerts, collection health, affected population, and recurrence.",
    limit: "Missing records may indicate a visibility failure rather than no activity.",
  },
];

const phases = [
  ["1", "Scope", "Define the fictional environment, affected systems, time window, authority, evidence, and prohibited actions."],
  ["2", "Preserve", "Record original logs, diagrams, rules, leases, identities, and changes before recommending corrections."],
  ["3", "Correlate", "Connect device, user, address, VLAN, subnet, DNS, service, firewall, endpoint, and timeline evidence."],
  ["4", "Compare", "Check observed behavior against approved architecture, dependencies, ownership, and change plans."],
  ["5", "Decide", "Choose the narrowest proportionate action: monitor, correct, restrict, validate, recover, or escalate."],
  ["6", "Communicate", "Document findings, confidence, impact, uncertainty, owner, next steps, rollback, and lessons learned."],
];

const facts = [
  ["User report", "A fictional media-lab device cannot upload approved coursework after a network change."],
  ["Device identity", "media-lab-08 is a managed device assigned to the student-media group."],
  ["Observed address", "DHCP assigns 10.44.20.93/26 with gateway 10.44.20.65 from media-scope-b."],
  ["Expected design", "The approved diagram requires 10.44.20.0/26 with gateway 10.44.20.1."],
  ["DNS evidence", "uploads.media-training.test resolves successfully to 192.0.2.80."],
  ["Firewall evidence", "HTTPS is denied because the source is classified in the guest zone."],
  ["Segmentation evidence", "The expected VLAN is correct, but the address-to-zone mapping is inconsistent."],
  ["Change evidence", "A DHCP scope split occurred shortly before the issue and validation was incomplete."],
];

const decisions = [
  ["Is local connectivity working?", "Yes", "Interface, switch, and expected VLAN evidence are healthy."],
  ["Did the device receive an address?", "Yes, but from the wrong subnet", "10.44.20.93/26 belongs to 10.44.20.64/26 rather than the expected first /26."],
  ["Does DNS work?", "Yes", "The approved service name resolves successfully."],
  ["Is the required service permitted?", "No", "The firewall applies the guest-zone policy and denies HTTPS."],
  ["Is the firewall necessarily wrong?", "Not proven", "The rule may be correct for guest traffic; the stronger mismatch is the source classification."],
  ["Highest-confidence finding", "Scope or zone-mapping error", "Address, gateway, zone, design, timing, and change evidence support the same explanation."],
];

const reportFields = [
  ["Finding", "State the technical issue in one evidence-based sentence."],
  ["Evidence", "List the exact fictional records and timestamps supporting the finding."],
  ["Impact", "Explain affected users, systems, services, and approved workflows."],
  ["Confidence", "Use high, medium, or low confidence and explain why."],
  ["Missing evidence", "Identify unanswered questions, unavailable logs, or validation gaps."],
  ["Recommended action", "Name the narrowest authorized correction or escalation step."],
  ["Owner", "Identify the team or role responsible for approval and implementation."],
  ["Validation and rollback", "Define success criteria, monitoring, and how to reverse the change."],
];

const mistakes = [
  "Changing the firewall before confirming the source-zone assignment.",
  "Assuming DNS failed because the upload page did not work.",
  "Ignoring the prefix length and missing the subnet boundary.",
  "Treating the assigned IP address as permanent proof of one user.",
  "Assuming the VLAN and firewall zone are identical concepts.",
  "Failing to preserve the original lease, rule, logs, and change evidence.",
  "Using only one source instead of comparing architecture and observed activity.",
  "Calling the event malicious without evidence of hostile intent.",
  "Making several changes at once and losing the ability to validate the actual cause.",
  "Publishing real addresses, rules, diagrams, or internal architecture.",
];

const quizQuestions = [
  {
    question: "Which finding is best supported by the evidence?",
    choices: [
      "The endpoint received an address from the wrong /26 scope, causing incorrect zone classification.",
      "DNS is broken.",
      "The endpoint is definitely compromised.",
      "The upload service is permanently offline.",
    ],
    answer: 0,
    explanation: "The address, gateway, zone, design, and recent scope change support a scope or mapping error.",
  },
  {
    question: "Why preserve the original evidence before correction?",
    choices: [
      "To retain the initial state for analysis, validation, accountability, and lessons learned.",
      "To make the issue harder to solve.",
      "To publish the details later.",
      "To avoid documenting the change.",
    ],
    answer: 0,
    explanation: "Preservation supports trustworthy comparison and review.",
  },
  {
    question: "What does the successful DNS response prove?",
    choices: [
      "The name-resolution request received an answer.",
      "The HTTPS connection was allowed.",
      "The upload succeeded.",
      "The firewall rule was wrong.",
    ],
    answer: 0,
    explanation: "DNS confirms name resolution only.",
  },
  {
    question: "What is the safest correction approach?",
    choices: [
      "Confirm the approved design, correct the scope or mapping through the responsible owner, and validate the result.",
      "Disable the firewall.",
      "Assign a random static address.",
      "Move all student devices to the guest zone.",
    ],
    answer: 0,
    explanation: "The response should target the supported cause and remain authorized, reversible, and validated.",
  },
  {
    question: "Why state confidence in a report?",
    choices: [
      "To communicate how strongly the evidence supports the conclusion and what uncertainty remains.",
      "To replace evidence.",
      "To make every finding sound certain.",
      "To avoid identifying an owner.",
    ],
    answer: 0,
    explanation: "Confidence shows the strength and limits of the analysis.",
  },
  {
    question: "Which source best confirms address assignment during the event window?",
    choices: [
      "The DHCP lease correlated with device and timestamp context.",
      "The diagram alone.",
      "The alert color.",
      "The page title.",
    ],
    answer: 0,
    explanation: "The lease provides time-bounded address-assignment evidence.",
  },
  {
    question: "What should happen after the approved correction?",
    choices: [
      "Renew the lease, verify subnet and gateway, confirm the zone, retest HTTPS, review logs, and update documentation.",
      "Stop monitoring.",
      "Delete the change record.",
      "Assume success without testing.",
    ],
    answer: 0,
    explanation: "Validation should confirm both restored availability and correct security behavior.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={moduleTest} className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Module Test
      </Link>
    </div>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

export default function NetworkDefenseAnalysisLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I1</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 8 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1.8 Network Defense Analysis Lab
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a full fictional investigation using architecture, addressing, DNS, DHCP, services, firewall, segmentation, endpoint, identity, monitoring, and change evidence.
          </p>

          <div className="mt-8"><TopNav /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I1: Networking for Defenders"
          lessonTitle="Network Defense Analysis Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can use network models, IPv4 and subnet context, services, DNS, DHCP, firewalls, segmentation, and diagrams.",
            "I understand that every evidence source has strengths and limits.",
            "I will separate confirmed facts, likely explanations, missing evidence, and assumptions.",
            "I will use only fictional systems, identities, logs, addresses, rules, diagrams, and organizations.",
            "I will not scan, probe, capture, reconfigure, exploit, or test any real network or system.",
          ]}
        />

        <SectionCard eyebrow="Capstone Hook" title="Explain the Whole Path, Not Just the Loudest Alert">
          <p className="leading-8">
            A device may have a healthy link, correct VLAN, successful DNS response, and active application process, yet still fail because it received an address from the wrong scope and was placed in the wrong firewall zone. The strongest investigation traces every layer and corrects the earliest supported mismatch.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The firewall denied traffic, so disable the firewall.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Preserve evidence, trace the path, compare design and observed state, identify the first supported mismatch, and correct only the approved cause.”</p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Network Defense Requires Correlation, Prioritization, and Validation">
          <p className="leading-8">
            Security teams rarely receive one perfect answer. They combine architecture, configuration, identity, application, and event evidence while protecting availability, preserving logs, respecting ownership, and communicating clearly.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Investigation Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Phases of Safe Network Analysis</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {phases.map(([number, title, detail]) => (
              <div key={number} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{number}</div>
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Sources</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Use Multiple Sources Without Overclaiming</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {sources.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.name}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
                  <span className="font-bold">Value:</span> {item.value}
                </div>
                <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
                  <span className="font-bold">Limit:</span> {item.limit}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Integrated Case</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Harborview Media Lab Upload Failure</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {facts.map(([label, detail]) => (
              <div key={label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake I1 Network Defense Case Dashboard"
          subtitle="Integrated training dashboard for the fictional Harborview Media Lab case."
          metrics={[
            {
              label: "Local connectivity",
              value: "Healthy",
              note: "Interface, switch port, and expected VLAN evidence are normal.",
            },
            {
              label: "Address placement",
              value: "Incorrect",
              note: "The device received an address and gateway from the wrong /26 DHCP scope.",
            },
            {
              label: "Application path",
              value: "Denied",
              note: "DNS succeeds, but the firewall applies the guest-zone policy and denies HTTPS.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Media Upload Blocked by Scope-to-Zone Mismatch"
          severity="High"
          time="10:22 AM"
          source="Fake Integrated Network Defense Monitor"
          details="A fictional managed media-lab device received 10.44.20.93/26 and gateway 10.44.20.65 after a DHCP scope split. The correct VLAN is present, DNS succeeds, but the firewall classifies the source as guest and denies HTTPS."
          recommendation="Preserve evidence, confirm the approved first-/26 design, have the responsible owner correct the DHCP scope or zone mapping, renew the lease, validate the expected subnet and zone, retest HTTPS, and monitor for recurrence."
        />

        <FakeLogPanel
          title="Fake Integrated Investigation Timeline"
          logs={[
            "09:58:00 CHANGE title='media-lab DHCP scope split' approved='true' validation='partial'",
            "10:05:11 INVENTORY device='media-lab-08' group='student-media' expected_subnet='10.44.20.0/26'",
            "10:06:02 LINK interface='wlan0' state='up' signal='good'",
            "10:06:04 SWITCH device='media-lab-08' vlan='220' status='expected'",
            "10:06:08 DHCP device='media-lab-08' address='10.44.20.93' prefix='/26' gateway='10.44.20.65' scope='media-scope-b'",
            "10:06:31 DNS query='uploads.media-training.test' answer='192.0.2.80' status='success'",
            "10:06:33 ENDPOINT process='media-uploader.exe' destination='192.0.2.80:443/tcp'",
            "10:06:33 FIREWALL source='10.44.20.93' source_zone='guest' destination='192.0.2.80' service='https' action='deny'",
            "10:11:20 DESIGN vlan='220' intended_subnet='10.44.20.0/26' intended_gateway='10.44.20.1' intended_zone='student-media'",
            "10:18:07 MONITORING similar_devices_affected='6' first_seen='after_scope_split'",
            "10:22:14 CORRELATION finding='incorrect_DHCP_scope_or_zone_mapping' confidence='high'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence-Based Decisions</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Answer the Investigation Questions in Order</h2>
          <div className="mt-6 grid gap-4">
            {decisions.map(([question, answer, evidence]) => (
              <div key={question} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[1fr_0.55fr_1.4fr]">
                <p className="text-sm font-black text-cyan-100">{question}</p>
                <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 text-sm font-black text-blue-100">{answer}</div>
                <p className="text-sm leading-6 text-slate-300">{evidence}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Final Finding Is Best Supported?"
          evidence={[
            "The fictional device is approved, managed, and assigned to the student-media group.",
            "The interface and expected VLAN are healthy.",
            "The device receives 10.44.20.93/26 and gateway 10.44.20.65 from media-scope-b.",
            "The approved design requires 10.44.20.0/26, gateway 10.44.20.1, and the student-media zone.",
            "DNS succeeds and the endpoint attempts HTTPS to the approved upload service.",
            "The firewall classifies the source as guest and denies the connection.",
            "Six similar devices show the same problem after the approved DHCP scope split.",
          ]}
          question="What is the strongest final conclusion and next action?"
          options={[
            "A high-confidence DHCP scope or zone-mapping error placed approved devices in the wrong network context; preserve evidence and have the responsible owner perform a controlled correction, lease renewal, zone validation, HTTPS retest, monitoring, and documentation update.",
            "The upload service is malicious because the firewall denied it.",
            "DNS is broken because users cannot upload.",
            "Disable the firewall and assign random static addresses.",
          ]}
          bestAnswer={0}
          explanation="The full evidence chain supports a configuration mismatch introduced during the scope split. The correction should target the supported cause while preserving the designed firewall boundary."
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Reporting</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Structure the Final Report</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reportFields.map(([field, guidance]) => (
              <div key={field} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{field}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{guidance}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken a Full Investigation">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Integrated Safe Lab" title="Complete the Harborview Network Defense Case">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Your role</p>
              <h3 className="mt-3 text-xl font-black text-white">Authorized Junior Network Defender</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Analyze the supplied fake evidence, write conclusions, and recommend actions. Do not alter any real or fictional production system directly.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>One-page incident summary.</li>
                <li>Evidence table with source, timestamp, value, and limitation.</li>
                <li>Layered network path from device to application.</li>
                <li>Address and subnet analysis.</li>
                <li>DNS, DHCP, service, and firewall correlation.</li>
                <li>Confidence statement and missing-evidence list.</li>
                <li>Authorized correction, validation, rollback, and monitoring plan.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            All work must remain fictional and defensive. Do not use real packet captures, scanners, diagrams, firewall exports, credentials, addresses, or production settings.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Wants to Disable the Firewall Rule"
          scenario="A fictional team member argues that the firewall denial is the cause and suggests disabling the rule before reviewing the DHCP scope, zone mapping, or approved design."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the firewall rule, explain that it is enforcing the observed guest-zone policy, and investigate the earlier address-to-zone mismatch first.",
              outcome: "Best defensive choice. The firewall may be functioning correctly while the source is misclassified.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the rule to restore service quickly.",
              outcome: "Unsafe. This weakens a trust boundary without correcting the supported cause.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Delete every guest-zone policy.",
              outcome: "Unsafe and disproportionate.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="One Device Remains in the Wrong Scope"
          scenario="After an authorized correction, most fictional devices receive the expected first-/26 addresses and upload successfully. One device remains in the second /26 range."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the remaining lease and device evidence, compare reservation and cache state, keep monitoring active, and investigate the exception before closing the case.",
              outcome: "Best defensive choice. Validation should cover the whole affected population.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Close the case because most devices work.",
              outcome: "Incomplete. The unresolved device may reveal a stale reservation, lease, or configuration.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Assign a random static address.",
              outcome: "Unsafe. The exception still requires evidence and authorized correction.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Integrated Network Defense Analysis Checklist"
          items={[
            "I confirm scope, authorization, affected systems, evidence sources, and prohibited actions.",
            "I preserve original diagrams, logs, rules, leases, identities, changes, and timestamps.",
            "I trace the path from link and VLAN through address, route, service, firewall, and application.",
            "I compare the assigned address, prefix, gateway, VLAN, and zone with approved design.",
            "I correlate DNS, DHCP, firewall, endpoint, identity, inventory, monitoring, and change evidence.",
            "I state what each source confirms and what it cannot prove alone.",
            "I separate facts, likely explanation, missing evidence, uncertainty, and assumptions.",
            "I identify the earliest supported mismatch rather than changing the loudest control.",
            "I recommend the narrowest authorized correction with testing, rollback, and monitoring.",
            "I confirm restored availability and correct security behavior before closure.",
            "I update diagrams, inventories, changes, and lessons learned.",
            "I use fictional evidence and never inspect, test, alter, or publish real network information.",
          ]}
        />

        <MiniQuiz title="I1.8 Mini Quiz: Network Defense Analysis Lab" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a complete fictional Network Defense Investigation Report for the Harborview Media Lab case. Include executive summary, scope, architecture diagram, evidence inventory, timeline, subnet analysis, DNS and DHCP findings, firewall and segmentation analysis, root-cause statement, confidence, impact, missing evidence, recommended correction, validation, rollback, monitoring, ownership, communication, and lessons learned."
          tips={[
            "Use only fictional organizations, devices, identities, services, rules, logs, diagrams, and documentation address ranges.",
            "Make each conclusion traceable to specific evidence.",
            "State evidence limits and uncertainty clearly.",
            "Do not include real addresses, internal names, firewall exports, packet captures, credentials, or production architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Strong network investigations correlate architecture, addressing, DNS, DHCP, firewalls, segmentation, endpoint, identity, monitoring, and change evidence.",
            "The earliest supported mismatch is often more important than the loudest alert.",
            "A firewall denial may be correct when an endpoint is placed in the wrong zone or subnet.",
            "Evidence must be preserved before correction and compared again during validation.",
            "Defenders communicate facts, confidence, impact, uncertainty, ownership, and next actions clearly.",
            "Safe corrections are narrow, authorized, documented, reversible, validated, monitored, and followed by updated documentation.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Complete Module I1</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Previous: I1.7 Reading Safe Network Diagrams
            </Link>
            <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Module
            </Link>
            <Link href={moduleTest} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
              Next: I1 Module Test
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}