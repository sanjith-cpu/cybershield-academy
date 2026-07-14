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
const modulePath = `${trackPath}/logs-and-event-monitoring`;
const previousLesson = `${modulePath}/network-and-web-logs`;
const nextLesson = `${modulePath}/building-a-simple-event-timeline`;

const objectives = [
  "Explain the difference between normal, expected, unusual, suspicious, administrative, failed, and evidence-incomplete activity.",
  "Use baselines, asset role, user role, schedule, frequency, volume, source, destination, privilege, change, and owner context to evaluate fictional patterns.",
  "Recognize why rare activity, high severity, denied actions, failed sign-ins, large transfers, and unusual times do not automatically prove malicious intent.",
  "Prioritize fictional patterns by evidence strength, potential impact, confidence, urgency, and safe next action.",
  "Create a professional fictional Pattern Analysis Matrix that separates confirmed facts, reasonable conclusions, alternate explanations, evidence gaps, and escalation decisions.",
];

const vocabulary = [
  ["Baseline", "An approved description of expected users, devices, applications, destinations, schedules, volumes, and behaviors."],
  ["Normal", "Activity that matches an established and approved pattern for the system, user, application, or business process."],
  ["Expected", "Activity that is justified by role, owner, schedule, change, ticket, workflow, or documented purpose."],
  ["Unusual", "Activity that differs from the known baseline but is not automatically harmful."],
  ["Suspicious", "Activity with enough concerning context or corroboration to justify focused defensive review."],
  ["Administrative", "Authorized management, maintenance, support, configuration, deployment, monitoring, or recovery activity."],
  ["Failed", "An attempted action that did not complete successfully."],
  ["Evidence-incomplete", "Activity that cannot be classified confidently because important records or context are missing."],
  ["Frequency", "How often an event or pattern occurs within a defined period."],
  ["Volume", "How much activity, data, traffic, or change occurred within a defined period."],
  ["Deviation", "A measurable difference from an approved baseline."],
  ["False positive", "An alert or pattern that appears concerning but is explained by expected or benign activity after review."],
];

const patternDimensions = [
  {
    dimension: "Time",
    question:
      "Did the activity occur during normal hours, an approved maintenance window, travel, backup, deadline work, or scheduled automation?",
    caution:
      "Unusual time can increase review priority, but it does not prove malicious intent.",
  },
  {
    dimension: "Frequency",
    question:
      "Did the event happen once, repeatedly, on a fixed schedule, in a burst, or across many accounts and devices?",
    caution:
      "Repetition may reflect retries, stale credentials, health checks, monitoring, or a real issue.",
  },
  {
    dimension: "Volume",
    question:
      "Did the amount of data, requests, errors, sign-ins, changes, or alerts differ significantly from the approved baseline?",
    caution:
      "Large activity can be expected during backups, updates, reporting, migration, or class-wide use.",
  },
  {
    dimension: "Source",
    question:
      "Did the activity come from an expected device, user, process, service, network, VPN, gateway, or management system?",
    caution:
      "Shared infrastructure, proxies, mobile networks, and translation can change the apparent source.",
  },
  {
    dimension: "Destination",
    question:
      "Did the activity reach an approved application, server, cloud service, vendor, update source, or internal zone?",
    caution:
      "A new destination may still be approved, and a familiar destination does not guarantee safe purpose.",
  },
  {
    dimension: "Privilege",
    question:
      "Was the activity performed by a standard user, administrator, service identity, temporary role, or highly privileged account?",
    caution:
      "Privileged activity requires stronger ownership and approval context, even when it succeeds.",
  },
  {
    dimension: "Result",
    question:
      "Did the action succeed, fail, get denied, get blocked, time out, retry, or partially complete?",
    caution:
      "Success does not automatically mean approved, and failure does not automatically mean malicious.",
  },
  {
    dimension: "Change context",
    question:
      "Was there an approved deployment, password reset, update, rule change, test, migration, restart, or support action?",
    caution:
      "Documentation can be incomplete or different from the technical sequence, so it still requires validation.",
  },
  {
    dimension: "Asset role",
    question:
      "Is the device a workstation, server, backup system, management platform, kiosk, lab machine, or public-facing service?",
    caution:
      "The same behavior may be normal on one asset and inappropriate on another.",
  },
  {
    dimension: "Historical pattern",
    question:
      "Has the same user, application, process, destination, or schedule appeared before under approved conditions?",
    caution:
      "A known pattern can still become risky after ownership, purpose, or configuration changes.",
  },
];

const classificationGuide = [
  {
    label: "Normal",
    definition:
      "Matches an established baseline with expected users, devices, applications, timing, destinations, volume, and results.",
    example:
      "A backup server transfers its usual nightly volume to the approved storage destination during the documented window.",
    action:
      "Document the match and continue routine monitoring.",
  },
  {
    label: "Expected",
    definition:
      "May be new or rare but is supported by a valid owner, business purpose, change record, schedule, or approved workflow.",
    example:
      "A new vendor destination appears during an approved application migration with owner and validation evidence.",
    action:
      "Confirm the approved context and monitor the new baseline.",
  },
  {
    label: "Unusual",
    definition:
      "Differs from the baseline but currently lacks enough evidence to call suspicious.",
    example:
      "A user signs in two hours later than usual from the same managed device and approved application.",
    action:
      "Add user, device, schedule, application, and owner context before deciding.",
  },
  {
    label: "Suspicious",
    definition:
      "Contains multiple concerning signals or corroborating evidence that justify focused defensive review.",
    example:
      "A privileged account authenticates from a new device, receives denied MFA prompts, and creates an unexpected session outside the approved schedule.",
    action:
      "Preserve evidence, verify through approved channels, and escalate according to policy.",
  },
  {
    label: "Administrative",
    definition:
      "Represents approved management, maintenance, support, monitoring, configuration, deployment, testing, or recovery activity.",
    example:
      "A management server connects to many internal systems during a documented patching window.",
    action:
      "Confirm ownership, scope, schedule, results, and change closure.",
  },
  {
    label: "Failed",
    definition:
      "An attempted action did not complete successfully and requires cause and impact context.",
    example:
      "A retired application repeatedly attempts a denied connection to an old server address.",
    action:
      "Identify the source process and owner, correct the stale configuration, and validate recovery.",
  },
  {
    label: "Evidence-incomplete",
    definition:
      "The available records are insufficient to classify the pattern responsibly.",
    example:
      "A DNS request appears, but endpoint, firewall, proxy, application, and owner records are missing.",
    action:
      "Preserve the confirmed event, identify the gaps, and request authorized supporting evidence.",
  },
];

const signalCombinations = [
  {
    pattern: "One unusual sign-in outside normal hours",
    lowerRiskContext:
      "Expected device, expected application, approved travel, successful MFA, no sensitive activity, and owner confirmation.",
    higherRiskContext:
      "New device, privileged account, repeated failures, denied MFA, sensitive application, and no owner explanation.",
    lesson:
      "Time alone is weak; combined identity, device, privilege, MFA, and application context changes priority.",
  },
  {
    pattern: "Large outbound transfer",
    lowerRiskContext:
      "Approved backup, report export, migration, cloud synchronization, known process, expected destination, and change ticket.",
    higherRiskContext:
      "Unknown process, sensitive source, unfamiliar destination, unusual time, no owner, and policy bypass.",
    lesson:
      "Volume becomes more meaningful when process, data role, destination, owner, and change evidence agree.",
  },
  {
    pattern: "Repeated failed sign-ins",
    lowerRiskContext:
      "Same expected device, stale saved credential, recent password reset, application retry, and failures stop after update.",
    higherRiskContext:
      "Many accounts, many sources, unfamiliar devices, lockouts, later success elsewhere, and failed MFA.",
    lesson:
      "Failure count alone is not enough; distribution, device, application, reset, and later-success context matter.",
  },
  {
    pattern: "One device connects to many internal systems",
    lowerRiskContext:
      "Approved inventory, monitoring, patching, backup, or management server during a documented window.",
    higherRiskContext:
      "User workstation, unknown process, unusual ports, sensitive zones, no management role, and failed authentication.",
    lesson:
      "Asset role and process ownership can completely change how the pattern is interpreted.",
  },
  {
    pattern: "High-severity endpoint alert",
    lowerRiskContext:
      "Known test file, approved administrative tool, expected lab activity, completed remediation, and no related events.",
    higherRiskContext:
      "Successful execution, new persistence, broad exclusion, privileged account, network activity, and multiple devices.",
    lesson:
      "Severity is one clue; process, action, scope, remediation, persistence, and correlation determine urgency.",
  },
  {
    pattern: "Many web errors",
    lowerRiskContext:
      "Old bookmark, expired session, application deployment, maintenance window, or temporary back-end restart.",
    higherRiskContext:
      "Sensitive path, unusual method, many sources, growing rate, no maintenance, and repeated successful access attempts.",
    lesson:
      "Error counts need path, method, source, application, maintenance, and response-sequence context.",
  },
  {
    pattern: "New scheduled task or startup item",
    lowerRiskContext:
      "Approved software deployment, known publisher, expected path, owner, change record, and successful validation.",
    higherRiskContext:
      "Unknown publisher, user-writable path, privileged account, no owner, repeated network activity, and no change record.",
    lesson:
      "Newness becomes more concerning when path, publisher, privilege, owner, and related activity are also unusual.",
  },
  {
    pattern: "Missing logs from one device",
    lowerRiskContext:
      "Device powered off, traveling, sleeping, offline, agent upgrade, or documented collector maintenance.",
    higherRiskContext:
      "Device reported online, sensitive role, repeated collection failure, local logs unavailable, and protection state unknown.",
    lesson:
      "Missing telemetry confirms a visibility gap; device state and collection evidence shape urgency.",
  },
];

const evidenceMatrix = [
  {
    source: "Baseline record",
    supports:
      "Expected users, devices, schedules, applications, destinations, volume, frequency, and normal results.",
    limitation:
      "Baselines can be stale, incomplete, seasonal, or too broad.",
  },
  {
    source: "Asset inventory",
    supports:
      "Device role, owner, operating system, exposure, sensitivity, management status, and approved software.",
    limitation:
      "Inventory can lag behind actual configuration or ownership changes.",
  },
  {
    source: "Identity context",
    supports:
      "Account role, privilege, groups, MFA, expected devices, schedule, lifecycle, and owner.",
    limitation:
      "Account context does not prove the physical person or every action.",
  },
  {
    source: "Technical event records",
    supports:
      "Observed time, source, destination, process, action, result, severity, volume, and sequence.",
    limitation:
      "Technical events may not explain purpose, authorization, or business impact.",
  },
  {
    source: "Change record",
    supports:
      "Approved owner, reason, scope, schedule, test, rollback, expected behavior, and validation.",
    limitation:
      "The documented change may not match the exact technical activity.",
  },
  {
    source: "User or owner report",
    supports:
      "Expected activity, observed impact, travel, device use, business need, and timing.",
    limitation:
      "Reports can be incomplete, delayed, approximate, or mistaken.",
  },
  {
    source: "Historical comparison",
    supports:
      "Whether the same user, device, process, destination, volume, or schedule appeared before.",
    limitation:
      "Past normality does not guarantee current safety or approval.",
  },
  {
    source: "Correlated multi-source evidence",
    supports:
      "Agreement across authentication, endpoint, system, application, network, web, and change records.",
    limitation:
      "Correlation quality depends on time accuracy, field consistency, retention, and source coverage.",
  },
];

const prioritizationFactors = [
  {
    factor: "Evidence strength",
    question:
      "How many independent fictional sources support the pattern, and how direct are they?",
    effect:
      "More independent, well-aligned evidence usually increases confidence.",
  },
  {
    factor: "Potential impact",
    question:
      "Could the activity affect a sensitive account, critical service, large user group, protected data set, or important business function?",
    effect:
      "Higher potential impact can justify faster review even when confidence is moderate.",
  },
  {
    factor: "Privilege",
    question:
      "Does the pattern involve an administrator, service identity, security control, management platform, or broad-access role?",
    effect:
      "Privileged context increases the importance of ownership and authorization evidence.",
  },
  {
    factor: "Scope",
    question:
      "Does the pattern affect one event, one user, one device, many systems, many accounts, or multiple network zones?",
    effect:
      "Broader scope often raises urgency and coordination needs.",
  },
  {
    factor: "Persistence",
    question:
      "Did the pattern happen once, stop after correction, repeat regularly, or continue despite remediation?",
    effect:
      "Continued or recurring activity usually deserves higher priority.",
  },
  {
    factor: "Control outcome",
    question:
      "Was the action allowed, denied, blocked, quarantined, contained, retried, or successful?",
    effect:
      "Completed activity may require more impact review, but blocked attempts can still reveal important patterns.",
  },
  {
    factor: "Context quality",
    question:
      "Are owner, baseline, change, schedule, device, application, destination, and user details available?",
    effect:
      "Weak context lowers confidence and may require evidence collection before classification.",
  },
  {
    factor: "Time sensitivity",
    question:
      "Is the activity ongoing, recent, recurring, or tied to an active user, service, or business disruption?",
    effect:
      "Ongoing activity may require immediate preservation and escalation.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the pattern",
    detail:
      "State exactly what changed in time, frequency, volume, source, destination, privilege, result, or behavior.",
  },
  {
    step: "2",
    title: "Identify the baseline",
    detail:
      "Find the approved users, devices, applications, schedules, destinations, volumes, and normal results.",
  },
  {
    step: "3",
    title: "Add context",
    detail:
      "Compare asset role, identity role, owner, change, travel, maintenance, application purpose, and business need.",
  },
  {
    step: "4",
    title: "Correlate sources",
    detail:
      "Connect authentication, endpoint, system, application, network, web, ticket, owner, and monitoring evidence.",
  },
  {
    step: "5",
    title: "Classify and prioritize",
    detail:
      "Choose normal, expected, unusual, suspicious, administrative, failed, or evidence-incomplete and state confidence.",
  },
  {
    step: "6",
    title: "Respond and improve",
    detail:
      "Preserve evidence, assign an owner, take the safest authorized action, validate the result, and update the baseline.",
  },
];

const sampleFindings = [
  {
    finding: "Late-night sign-in from an expected device",
    facts:
      "Same managed laptop, approved application, successful MFA, no sensitive changes, and user confirms deadline work.",
    classification: "Expected",
    confidence: "High",
    action:
      "Document owner confirmation and include the approved late-work pattern in the baseline review.",
  },
  {
    finding: "Repeated failed sign-ins after password reset",
    facts:
      "Same device, mail client reports stale credential, failures stop after update, and later MFA succeeds.",
    classification: "Expected failure pattern",
    confidence: "High",
    action:
      "Document stale credential, validate recovery, and monitor for recurrence.",
  },
  {
    finding: "Rare DNS request without endpoint or connection evidence",
    facts:
      "One query appears, but process, firewall, proxy, application, and owner records are unavailable.",
    classification: "Evidence-incomplete",
    confidence: "High",
    action:
      "Preserve the DNS event and request authorized supporting evidence before deciding.",
  },
  {
    finding: "Privileged sign-in from new device with denied MFA prompts",
    facts:
      "New device, unusual time, privileged account, two denied prompts, no travel record, and no owner confirmation.",
    classification: "Suspicious",
    confidence: "Medium",
    action:
      "Preserve evidence, verify through approved channels, review sessions and device state, and escalate promptly.",
  },
  {
    finding: "Management server connects to many endpoints",
    facts:
      "Known management asset, approved patching window, expected ports, named owner, and successful patch validation.",
    classification: "Administrative",
    confidence: "High",
    action:
      "Confirm scope and change closure, then continue routine monitoring.",
  },
  {
    finding: "Large approved report upload",
    facts:
      "Known process, expected destination, approved change, matching volume, successful application result, and owner validation.",
    classification: "Expected",
    confidence: "High",
    action:
      "Document the new approved destination and continue monitoring.",
  },
];

const mistakes = [
  "Calling every unusual event suspicious.",
  "Calling every high-severity alert a confirmed incident.",
  "Treating rare activity as automatically malicious.",
  "Treating blocked or denied actions as proof of compromise.",
  "Treating successful actions as automatically approved.",
  "Using only one field such as time, source, destination, or volume.",
  "Ignoring asset role, user role, application purpose, owner, schedule, and change context.",
  "Comparing activity with a stale or overly broad baseline.",
  "Ignoring seasonal, maintenance, travel, deadline, backup, update, and migration patterns.",
  "Assigning exact confidence when evidence is incomplete or conflicting.",
  "Escalating without preserving the original evidence and documenting the reason.",
  "Publishing real user behavior, addresses, destinations, timelines, account details, or internal baselines.",
];

const quizQuestions = [
  {
    question:
      "What makes unusual activity different from suspicious activity?",
    choices: [
      "Unusual activity differs from the baseline, while suspicious activity has enough concerning context or corroboration to justify focused review.",
      "They always mean the same thing.",
      "Unusual activity is always safe.",
      "Suspicious activity requires a high-severity label.",
    ],
    answer: 0,
    explanation:
      "Deviation alone is not enough; suspicious classification requires stronger context or evidence.",
  },
  {
    question:
      "Why is a baseline important?",
    choices: [
      "It provides an approved reference for expected users, devices, applications, schedules, destinations, frequency, and volume.",
      "It proves that repeated activity is safe forever.",
      "It replaces current evidence.",
      "It removes the need for owner context.",
    ],
    answer: 0,
    explanation:
      "Baselines support comparison but must remain current and contextual.",
  },
  {
    question:
      "What does a rare DNS request directly prove?",
    choices: [
      "A client or application requested information about the fictional name.",
      "A user visited the destination.",
      "A connection succeeded.",
      "The destination was harmful.",
    ],
    answer: 0,
    explanation:
      "Rare does not change what the DNS event directly supports.",
  },
  {
    question:
      "Which pattern deserves the highest review priority?",
    choices: [
      "A privileged account on a new device with denied MFA prompts, unusual timing, and no owner explanation.",
      "A scheduled backup transferring its usual volume.",
      "A documented patching server connecting to managed devices.",
      "One mistyped password from the usual laptop.",
    ],
    answer: 0,
    explanation:
      "Privilege, new device, MFA denials, unusual time, and missing owner context combine into a stronger concern.",
  },
  {
    question:
      "What should happen when evidence is incomplete?",
    choices: [
      "Classify the pattern as evidence-incomplete, preserve confirmed facts, identify gaps, and request authorized supporting evidence.",
      "Guess the most likely cause.",
      "Call the pattern safe.",
      "Call the pattern malicious.",
    ],
    answer: 0,
    explanation:
      "Honest uncertainty is stronger than unsupported classification.",
  },
  {
    question:
      "Why can a large outbound transfer be expected?",
    choices: [
      "Backups, report exports, synchronization, migration, and software distribution can create approved high-volume activity.",
      "Large transfers are always harmless.",
      "Volume never matters.",
      "Firewalls only allow approved data.",
    ],
    answer: 0,
    explanation:
      "Volume requires process, destination, data role, owner, change, and baseline context.",
  },
  {
    question:
      "What should happen after an expected new pattern is validated?",
    choices: [
      "Document the evidence, confirm ownership and scope, and update the baseline carefully.",
      "Ignore all future activity of that type.",
      "Delete the related logs.",
      "Lower every alert threshold.",
    ],
    answer: 0,
    explanation:
      "Validated changes should improve future comparison without creating blind spots.",
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

function DimensionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Pattern Dimensions
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Questions That Change Pattern Meaning
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {patternDimensions.map((item) => (
          <div
            key={item.dimension}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.dimension}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-50">
              {item.caution}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClassificationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Classification Model
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Seven Defensive Classification Labels
      </h2>

      <div className="mt-6 grid gap-5">
        {classificationGuide.map((item) => (
          <div
            key={item.label}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.35fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="text-lg font-black text-cyan-100">{item.label}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Meaning
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.definition}
              </p>
            </div>
            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Example
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.example}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Strong action
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.action}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SignalGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Signal Combinations
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        One Signal Is Weak; Combined Context Is Stronger
      </h2>

      <div className="mt-6 grid gap-5">
        {signalCombinations.map((item) => (
          <div
            key={item.pattern}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-white">{item.pattern}</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  Lower-risk context
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.lowerRiskContext}
                </p>
              </div>
              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                  Higher-risk context
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.higherRiskContext}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Defensive lesson
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.lesson}
                </p>
              </div>
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
        What Pattern Evidence Can and Cannot Prove
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

function PriorityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Prioritization
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Factors That Shape Review Priority
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {prioritizationFactors.map((item) => (
          <div
            key={item.factor}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.factor}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>
            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-sm leading-6 text-blue-50">
              {item.effect}
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
        Classify Patterns in Six Steps
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

function FindingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Example Findings
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Classification Should Be Evidence-Based and Actionable
      </h2>

      <div className="mt-6 grid gap-4">
        {sampleFindings.map((item) => (
          <div
            key={item.finding}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr_0.55fr_0.45fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Finding
                </p>
                <p className="mt-2 font-black text-white">{item.finding}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Supporting facts
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.facts}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Classification
                </p>
                <p className="mt-2 font-black text-cyan-100">
                  {item.classification}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Confidence
                </p>
                <p className="mt-2 font-black text-blue-200">
                  {item.confidence}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Strong action
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  {item.action}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NormalVsSuspiciousPatternsPage() {
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
              Module I4
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.6 Normal vs Suspicious Patterns
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders compare fictional activity with baselines,
            ownership, schedules, roles, applications, destinations, privilege,
            change records, and multi-source evidence before deciding what
            deserves escalation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="Normal vs Suspicious Patterns"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that unusual activity is not automatically suspicious.",
            "I understand that baselines must include users, devices, applications, schedules, destinations, frequency, volume, and ownership.",
            "I will combine multiple signals instead of relying on one field such as time, source, severity, or volume.",
            "I will classify evidence honestly as normal, expected, unusual, suspicious, administrative, failed, or evidence-incomplete.",
            "I will use only fictional events, accounts, devices, applications, addresses, destinations, baselines, alerts, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Unusual Does Not Automatically Mean Malicious"
        >
          <p className="leading-8">
            A late-night sign-in, large transfer, rare destination, repeated
            error, new process, high-severity alert, or denied connection may be
            normal in one environment and concerning in another. Defenders
            compare the pattern with role, ownership, purpose, schedule,
            privilege, baseline, and corroborating evidence.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “It has never happened before, so it must be malicious.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Measure the deviation, identify the baseline, add role and
                owner context, correlate related sources, and state the
                classification with confidence and limitations.”
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
          title="Good Pattern Analysis Reduces Both Missed Risk and Unnecessary Escalation"
        >
          <p className="leading-8">
            Weak analysis can ignore important combinations of signals or
            overwhelm teams with false alarms. Strong analysis uses updated
            baselines, multi-source evidence, context, confidence, impact, and
            safe prioritization.
          </p>
        </SectionCard>

        <DimensionGuide />
        <ClassificationGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Patterns Become Meaningful When Multiple Dimensions Agree"
        >
          <p className="leading-8">
            Time, frequency, volume, source, destination, privilege, result,
            asset role, history, and change context each provide part of the
            picture. The strongest classifications explain how those parts
            connect and what evidence remains missing.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Measure", "What exactly changed from the approved baseline?"],
              ["Contextualize", "Which user, device, application, owner, schedule, and purpose apply?"],
              ["Correlate", "Which independent sources agree or conflict?"],
              ["Classify", "Is the activity normal, expected, unusual, suspicious, administrative, failed, or incomplete?"],
              ["Act", "What is the safest authorized next step, and how will it be validated?"],
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

        <SignalGuide />
        <EvidenceGuide />
        <PriorityGuide />
        <WorkflowGuide />
        <FindingGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Pattern Analysis Terms
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
          title="Fake Pattern Analysis Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services monitoring environment."
          metrics={[
            {
              label: "Expected patterns",
              value: "31",
              note: "Validated backups, updates, patching, report exports, travel, and scheduled support activity.",
            },
            {
              label: "Unusual patterns",
              value: "9",
              note: "Five have reasonable owner explanations, while four still require supporting evidence.",
            },
            {
              label: "Suspicious patterns",
              value: "3",
              note: "All involve combined identity, device, privilege, MFA, or persistence signals and have been escalated.",
            },
          ]}
        />

        <FakeAlertCard
          title="Privileged Sign-In from a New Device with Denied MFA Prompts"
          severity="High"
          time="07:42 PM"
          source="Fake Pattern Correlation Platform"
          details="A fictional privileged account signs in outside its normal schedule from a new unmanaged device. Two MFA prompts are denied, no approved travel or support record exists, and a later session attempt targets a sensitive administrative portal."
          recommendation="Preserve identity, MFA, device, session, application, network, owner, and change evidence; verify through an approved channel; review active sessions and account changes; assign the incident owner; and follow the authorized escalation process."
        />

        <FakeLogPanel
          title="Fake Pattern Evidence"
          logs={[
            "19:40:08 AUTH account='training-admin-6' device='unknown-device-91' result='failed' reason='mfa_required'",
            "19:40:16 MFA account='training-admin-6' result='denied' source='unknown-device-91'",
            "19:40:29 AUTH account='training-admin-6' device='unknown-device-91' result='failed' reason='mfa_denied'",
            "19:41:03 MFA account='training-admin-6' result='denied' source='unknown-device-91'",
            "19:41:45 SESSION app='admin-portal' result='not_created'",
            "19:42:00 BASELINE account='training-admin-6' normal_hours='08:00-17:00' managed_devices='2'",
            "19:42:05 INVENTORY device='unknown-device-91' status='not_found'",
            "19:42:10 CHANGE approved_travel='none' support_ticket='none'",
            "19:42:18 OWNER confirmation='not_yet_available'",
            "19:42:30 CLASSIFICATION label='suspicious' confidence='medium' escalation='required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Pattern Classification Is Best Supported?"
          evidence={[
            "The account is privileged.",
            "The device is new and not present in managed inventory.",
            "The activity occurs outside the account's normal schedule.",
            "Two MFA prompts are denied.",
            "No successful session is created.",
            "No approved travel, support, or change record exists.",
            "Owner confirmation is not yet available.",
            "The attempted application is a sensitive administrative portal.",
          ]}
          question="Which classification is strongest?"
          options={[
            "Suspicious with medium confidence, requiring prompt evidence preservation, approved verification, and escalation.",
            "Normal because the sign-in failed.",
            "Expected because privileged users sometimes work late.",
            "Confirmed compromise with absolute certainty.",
          ]}
          bestAnswer={0}
          explanation="Multiple concerning identity, device, privilege, MFA, time, and application signals support suspicious classification, while missing owner confirmation prevents absolute certainty."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Pattern Analysis"
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
          title="Classify a Fictional Pattern Set"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Pattern Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review sixteen fictional patterns involving authentication,
                endpoint, system, application, network, web, change, support,
                inventory, and baseline evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>State the exact deviation in time, frequency, volume, source, destination, privilege, or result.</li>
                <li>Identify the relevant baseline and whether it is current.</li>
                <li>Add asset, identity, application, owner, schedule, destination, and change context.</li>
                <li>Correlate at least two independent evidence sources.</li>
                <li>Classify each pattern using one of the seven labels.</li>
                <li>Assign confidence, impact, urgency, owner, and safe next action.</li>
                <li>Explain what evidence would change the classification.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not monitor real people,
            inspect private activity, access accounts, test systems, alter
            alerts, or publish real user behavior, destinations, schedules,
            devices, account details, or internal baselines.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Large Transfer Occurs During an Approved Backup Window"
          scenario="A fictional server transfers three times its usual volume to the approved backup destination. The backup owner confirms a full monthly archive, but file-level validation is still pending."
          choices={[
            {
              label: "Choice A",
              response:
                "Classify the transfer as expected with moderate confidence, preserve the volume and owner evidence, validate the full archive, compare the monthly baseline, and monitor for unrelated transfers.",
              outcome:
                "Best defensive choice. The approved context is strong, but final validation is still incomplete.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare data theft because the volume is larger than usual.",
              outcome:
                "Unsupported. The monthly full archive provides a plausible approved explanation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the transfer permanently because the destination is approved.",
              outcome:
                "Weak response. Volume, validation, scope, and future baseline still matter.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A New Startup Item Appears After Approved Software Deployment"
          scenario="A fictional managed workstation gains a new startup item from the approved application folder. The publisher, path, owner, and change record match the deployment, and no unusual network or account activity follows."
          choices={[
            {
              label: "Choice A",
              response:
                "Classify the startup item as expected with high confidence, preserve the deployment evidence, validate application function, and update the approved software baseline.",
              outcome:
                "Best defensive choice. Multiple ownership, path, publisher, change, and behavior signals agree.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the startup item because all new startup items are suspicious.",
              outcome:
                "Incorrect. Newness alone does not determine risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable startup monitoring for the application.",
              outcome:
                "Weak response. Monitoring should remain active even for approved items.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Normal vs Suspicious Patterns Checklist"
          items={[
            "I state the exact fictional deviation in time, frequency, volume, source, destination, privilege, result, or behavior.",
            "I compare the pattern with a current baseline for the user, device, application, destination, schedule, and business process.",
            "I add asset role, identity role, owner, application purpose, change, travel, maintenance, and support context.",
            "I combine multiple signals rather than relying on one field or severity label.",
            "I correlate authentication, endpoint, system, application, network, web, inventory, owner, and change evidence.",
            "I classify the pattern as normal, expected, unusual, suspicious, administrative, failed, or evidence-incomplete.",
            "I state confidence, potential impact, scope, persistence, urgency, and evidence limitations.",
            "I explain what additional evidence could raise or lower the classification.",
            "I recommend the safest authorized next action and define validation and monitoring.",
            "I use only fictional evidence and never publish real user behavior, schedules, destinations, devices, accounts, baselines, or internal monitoring details.",
          ]}
        />

        <MiniQuiz
          title="I4.6 Mini Quiz: Normal vs Suspicious Patterns"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Pattern Analysis Matrix containing at least sixteen patterns across authentication, endpoint, system, application, network, web, inventory, baseline, change, and support evidence. For each pattern, include deviation, baseline, asset role, identity role, application, time, frequency, volume, source, destination, privilege, result, owner, change context, corroborating sources, classification, confidence, potential impact, urgency, evidence gaps, safe next action, and validation plan."
          tips={[
            "Use only fictional users, devices, applications, destinations, schedules, alerts, baselines, and organizations.",
            "Include at least two normal, two expected, two unusual, two suspicious, two administrative, two failed, and two evidence-incomplete patterns.",
            "Explain what evidence would change each classification.",
            "Do not include real monitoring exports, user activity, addresses, domains, device names, account details, schedules, or internal baselines.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Unusual activity differs from a baseline but is not automatically suspicious.",
            "Strong pattern analysis combines time, frequency, volume, source, destination, privilege, result, role, history, and change context.",
            "Baselines must be current, specific, and connected to owners and business purpose.",
            "Rare, severe, denied, failed, or high-volume activity still requires corroboration and evidence limits.",
            "Evidence-incomplete is a valid classification when important context is missing.",
            "Professional prioritization considers evidence strength, impact, privilege, scope, persistence, control outcome, context quality, and time sensitivity.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I4
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