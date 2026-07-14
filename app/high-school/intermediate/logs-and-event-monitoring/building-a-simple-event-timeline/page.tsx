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
const previousLesson = `${modulePath}/normal-vs-suspicious-patterns`;
const nextLesson = `${modulePath}/log-review-lab`;

const objectives = [
  "Explain why a defensive event timeline is more than a list of timestamps and must include sources, fields, relationships, confidence, and evidence limitations.",
  "Normalize fictional timestamps, time zones, clock offsets, event formats, users, devices, applications, sessions, request IDs, and source labels before sequencing events.",
  "Correlate fictional authentication, system, application, network, web, endpoint, change, support, and owner evidence into one defensible narrative.",
  "Distinguish confirmed order, likely order, uncertain order, parallel activity, and unsupported order without overstating what the evidence proves.",
  "Create a professional fictional Event Timeline Report with source inventory, normalization notes, event table, findings, gaps, confidence, impact, and safe next actions.",
];

const vocabulary = [
  ["Timeline", "A structured sequence of related events arranged by a common time reference and supported by source context."],
  ["Chronology", "The order in which events occurred or are believed to have occurred."],
  ["Normalization", "Converting different timestamps, names, fields, and formats into a consistent comparison structure."],
  ["Correlation", "Connecting events using time, user, device, process, session, request, address, application, or other shared evidence."],
  ["Sequence", "A set of events whose order helps explain a workflow, failure, change, or defensive finding."],
  ["Parallel activity", "Events that may occur at the same time or independently rather than in one direct cause-and-effect chain."],
  ["Causation", "A claim that one event produced or directly led to another event."],
  ["Corroboration", "Independent evidence that supports the same event, sequence, identity, device, or result."],
  ["Confidence", "A stated level of certainty based on evidence quality, source agreement, timing accuracy, and known gaps."],
  ["Evidence gap", "Missing, delayed, filtered, overwritten, unavailable, or uncollected information that limits the timeline."],
  ["Anchor event", "A well-supported event used as a reliable reference point for surrounding activity."],
  ["Time window", "The defined period before, during, and after the event or pattern under review."],
];

const timelineElements = [
  {
    element: "Original timestamp",
    purpose:
      "Preserves the exact value shown by the fictional source.",
    example:
      "08:14:57 Local",
    caution:
      "Do not overwrite it after converting time zones or correcting a known offset.",
  },
  {
    element: "Normalized timestamp",
    purpose:
      "Places events from different sources into one common comparison time.",
    example:
      "08:16:57 UTC",
    caution:
      "Document the zone, offset, precision, and transformation used.",
  },
  {
    element: "Source",
    purpose:
      "Identifies which system, application, device, service, control, ticket, or person created the record.",
    example:
      "Identity platform",
    caution:
      "Source quality and limitations affect confidence.",
  },
  {
    element: "Event",
    purpose:
      "States the specific action, result, condition, change, request, failure, or recovery.",
    example:
      "Authentication failed for training-user-22",
    caution:
      "Use neutral wording that matches the record rather than adding intent.",
  },
  {
    element: "Related entity",
    purpose:
      "Connects user, device, process, service, application, source, destination, session, or request.",
    example:
      "training-laptop-22",
    caution:
      "A shared entity supports correlation but does not always prove causation.",
  },
  {
    element: "Evidence status",
    purpose:
      "Marks the entry as confirmed, corroborated, likely, uncertain, parallel, or unsupported.",
    example:
      "Confirmed event, likely sequence",
    caution:
      "Use the weakest accurate label when sources conflict or precision is limited.",
  },
  {
    element: "Meaning",
    purpose:
      "Explains why the event matters to the defensive question.",
    example:
      "The expected laptop retried an old saved credential.",
    caution:
      "Separate direct fact from interpretation.",
  },
  {
    element: "Limitation",
    purpose:
      "States what the event cannot prove or what evidence is missing.",
    example:
      "No endpoint process record is available for the first retry.",
    caution:
      "Limitations belong inside the timeline, not hidden at the end.",
  },
];

const orderingCategories = [
  {
    label: "Confirmed order",
    definition:
      "The evidence directly supports which event happened first.",
    example:
      "A documented password reset completed before the first authentication failure.",
    support:
      "Reliable normalized timestamps, compatible precision, trusted source clocks, and corroborating records.",
  },
  {
    label: "Likely order",
    definition:
      "The available evidence strongly suggests an order, but one or more limitations remain.",
    example:
      "The application retry likely occurred before the identity failure because a documented clock offset aligns the records.",
    support:
      "Known offset, sequence logic, shared identifiers, and no conflicting evidence.",
  },
  {
    label: "Uncertain order",
    definition:
      "The records cannot establish the exact order responsibly.",
    example:
      "Two sources record the same second, but only one includes milliseconds.",
    support:
      "Preserve both events and state that the exact sub-second order is unknown.",
  },
  {
    label: "Parallel activity",
    definition:
      "The events may be related to the same situation but do not form a direct sequence.",
    example:
      "A user report and a resource alert occur during the same outage window.",
    support:
      "Shared time and impact context without evidence that one caused the other.",
  },
  {
    label: "Unsupported order",
    definition:
      "The claimed sequence goes beyond the available evidence.",
    example:
      "A high-severity alert is placed first simply because it appears important.",
    support:
      "Reject the ordering claim and identify what additional evidence is needed.",
  },
];

const correlationKeys = [
  {
    key: "User or account",
    use:
      "Connect authentication, session, application, endpoint, change, and support records involving the same identity.",
    limitation:
      "The account does not automatically prove the physical person.",
  },
  {
    key: "Device or asset",
    use:
      "Connect local system, endpoint, network, application, and user activity from the same fictional system.",
    limitation:
      "Device names can be stale, reused, missing, or represented by a gateway.",
  },
  {
    key: "Process or service",
    use:
      "Connect process start, application behavior, file access, network activity, service state, and recovery.",
    limitation:
      "A process name alone does not prove path, publisher, or purpose.",
  },
  {
    key: "Session identifier",
    use:
      "Connect sign-in, MFA, token, application access, refresh, and termination events.",
    limitation:
      "Not every source preserves the same session value.",
  },
  {
    key: "Request or trace ID",
    use:
      "Connect proxy, gateway, web server, application, database, and response records.",
    limitation:
      "Identifiers may be transformed or absent in one layer.",
  },
  {
    key: "Source and destination",
    use:
      "Connect DNS, firewall, flow, proxy, endpoint, and application communication evidence.",
    limitation:
      "Proxies, VPNs, translation, and shared infrastructure can change the apparent source.",
  },
  {
    key: "File or path",
    use:
      "Connect application errors, permission events, update activity, configuration changes, and validation.",
    limitation:
      "Paths can differ across systems or be redirected.",
  },
  {
    key: "Change or ticket ID",
    use:
      "Connect approved work, owner, time window, expected result, rollback, and technical events.",
    limitation:
      "The documented plan may differ from the actual implementation.",
  },
];

const sourceInventory = [
  {
    source: "Authentication",
    bestUse:
      "Sign-ins, failures, MFA, lockouts, password changes, sessions, and policy outcomes.",
    timeConcern:
      "Cloud UTC, local device time, or collection delay.",
    correlation:
      "Account, device, application, session, source, and reason code.",
  },
  {
    source: "System",
    bestUse:
      "Startup, shutdown, services, processes, drivers, updates, storage, and operating-system state.",
    timeConcern:
      "Local clock drift, whole-second precision, or delayed forwarding.",
    correlation:
      "Device, provider, event ID, process, service, user, path, and result.",
  },
  {
    source: "Application",
    bestUse:
      "Requests, jobs, transactions, files, errors, dependencies, and recovery.",
    timeConcern:
      "Application-specific formatting, rounding, or embedded timestamps.",
    correlation:
      "User, device, component, request ID, session, file, database, and result.",
  },
  {
    source: "Network and web",
    bestUse:
      "DNS, connections, firewall actions, requests, responses, bytes, duration, and routing.",
    timeConcern:
      "Collector delay, gateway time zone, flow start versus flow end.",
    correlation:
      "Source, destination, port, protocol, method, path, request ID, and application.",
  },
  {
    source: "Endpoint",
    bestUse:
      "Process, file, protection, device health, user session, application, and local network activity.",
    timeConcern:
      "Offline collection, delayed batch upload, or missing telemetry.",
    correlation:
      "Device, user, process, path, publisher, destination, alert, and action.",
  },
  {
    source: "Change and support",
    bestUse:
      "Approval, owner, maintenance, password reset, deployment, user report, validation, and closure.",
    timeConcern:
      "Human-entered times may be approximate or use local time.",
    correlation:
      "Ticket, owner, system, account, application, change window, and expected result.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the timeline question",
    detail:
      "Identify the fictional event, system, account, application, time window, owner, and defensive decision the timeline must support.",
  },
  {
    step: "2",
    title: "Inventory the sources",
    detail:
      "List available authentication, system, application, network, web, endpoint, change, support, and owner records.",
  },
  {
    step: "3",
    title: "Preserve and normalize",
    detail:
      "Keep originals, convert to a common time reference, document offsets, preserve precision, and align names and fields.",
  },
  {
    step: "4",
    title: "Correlate related events",
    detail:
      "Use users, devices, processes, services, sessions, requests, addresses, paths, applications, and tickets.",
  },
  {
    step: "5",
    title: "Classify order and meaning",
    detail:
      "Mark confirmed, likely, uncertain, parallel, or unsupported order and separate facts from conclusions.",
  },
  {
    step: "6",
    title: "Document findings and gaps",
    detail:
      "Write the sequence, impact, confidence, limitations, alternate explanations, owner, and safe next action.",
  },
];

const timelineRows = [
  {
    time: "08:00:00",
    source: "Change ticket",
    entity: "training-user-44",
    event: "Approved password reset begins",
    status: "Confirmed",
    meaning:
      "Provides owner, authorization, expected device, and change window.",
    limitation:
      "The ticket does not prove when every application updates its saved credential.",
  },
  {
    time: "08:02:18",
    source: "Identity",
    entity: "training-user-44",
    event: "Password reset completes successfully",
    status: "Confirmed",
    meaning:
      "Confirms the identity platform changed the credential.",
    limitation:
      "Does not prove all applications and devices received the new credential.",
  },
  {
    time: "08:03:04",
    source: "Mail application",
    entity: "training-laptop-44",
    event: "Stored credential rejected",
    status: "Confirmed",
    meaning:
      "Shows the mail client attempted to use a saved credential that was not accepted.",
    limitation:
      "The application record alone does not prove the exact identity-platform reason.",
  },
  {
    time: "08:03:06",
    source: "Authentication",
    entity: "training-user-44",
    event: "Sign-in fails from expected laptop",
    status: "Corroborated",
    meaning:
      "Matches the mail-client retry on the same device and account.",
    limitation:
      "The exact sub-second order is unavailable because the identity source records whole seconds.",
  },
  {
    time: "08:03:21",
    source: "Authentication",
    entity: "training-user-44",
    event: "Second sign-in failure from expected laptop",
    status: "Confirmed",
    meaning:
      "Supports a repeated retry pattern.",
    limitation:
      "No endpoint process event is available for this exact attempt.",
  },
  {
    time: "08:04:02",
    source: "Support",
    entity: "ticket-4408",
    event: "User reports mail app still has old password",
    status: "Confirmed report",
    meaning:
      "Provides human context consistent with the application and authentication events.",
    limitation:
      "The report is user-provided and the time is approximate.",
  },
  {
    time: "08:04:28",
    source: "Mail application",
    entity: "training-laptop-44",
    event: "Stored credential updated",
    status: "Confirmed",
    meaning:
      "Shows the application configuration changed before successful authentication.",
    limitation:
      "Does not prove the user personally typed the value.",
  },
  {
    time: "08:04:32",
    source: "Authentication",
    entity: "training-user-44",
    event: "Sign-in succeeds from expected laptop",
    status: "Confirmed",
    meaning:
      "Shows the updated workflow completed successfully.",
    limitation:
      "Success does not by itself prove the physical person.",
  },
  {
    time: "08:04:36",
    source: "MFA",
    entity: "session-4408",
    event: "MFA challenge approved",
    status: "Corroborated",
    meaning:
      "Supports the successful sign-in sequence with an additional control.",
    limitation:
      "Approval does not prove every later session action was expected.",
  },
  {
    time: "08:04:41",
    source: "Application",
    entity: "session-4408",
    event: "Mail session created",
    status: "Confirmed",
    meaning:
      "Shows the application created a session after authentication and MFA.",
    limitation:
      "The record does not list every message or action performed.",
  },
  {
    time: "08:15:00",
    source: "Monitoring",
    entity: "training-user-44",
    event: "No additional authentication failures observed",
    status: "Confirmed observation",
    meaning:
      "Supports the stale-credential explanation and immediate recovery.",
    limitation:
      "The observation applies only to the monitored sources and time window.",
  },
  {
    time: "08:18:00",
    source: "Support",
    entity: "ticket-4408",
    event: "User confirms mail access restored",
    status: "Confirmed report",
    meaning:
      "Adds business validation to the technical recovery.",
    limitation:
      "Long-term recurrence monitoring remains necessary.",
  },
];

const timelineQualityChecks = [
  {
    check: "Original values preserved",
    question:
      "Can another reviewer see the source timestamp, source name, event ID, message, and original fields?",
    failure:
      "Only normalized values remain, so the transformation cannot be verified.",
  },
  {
    check: "Time assumptions documented",
    question:
      "Are time zones, clock offsets, precision, daylight-saving context, and collection delays recorded?",
    failure:
      "The sequence appears exact even though the sources use different clocks.",
  },
  {
    check: "Sources identified",
    question:
      "Does every event name the fictional system, application, device, service, ticket, or person that created it?",
    failure:
      "Events are listed without source quality or limitations.",
  },
  {
    check: "Neutral event wording",
    question:
      "Does the event description match the record rather than adding intent or blame?",
    failure:
      "A failed sign-in is rewritten as an attack without supporting evidence.",
  },
  {
    check: "Correlation explained",
    question:
      "Are shared users, devices, sessions, requests, processes, addresses, paths, and tickets shown?",
    failure:
      "Events are placed together only because they occur near the same time.",
  },
  {
    check: "Order confidence stated",
    question:
      "Is the sequence marked confirmed, likely, uncertain, parallel, or unsupported?",
    failure:
      "The timeline presents every event as exact and causal.",
  },
  {
    check: "Evidence gaps included",
    question:
      "Are missing sources, delayed collection, retention loss, unknown owners, and absent identifiers visible?",
    failure:
      "The report hides limitations and sounds more certain than the evidence allows.",
  },
  {
    check: "Outcome validated",
    question:
      "Does the timeline include recovery, user validation, monitoring, and residual risk?",
    failure:
      "The report stops at the first apparent recovery event.",
  },
];

const commonMistakes = [
  "Sorting raw timestamps without checking time zones, clock drift, precision, or collection delay.",
  "Replacing original timestamps instead of preserving and annotating them.",
  "Treating events that occur close together as automatically causal.",
  "Forcing a single sequence when some activity may be parallel.",
  "Using severity to determine event order.",
  "Ignoring events before the alert or after the apparent recovery.",
  "Connecting records by username alone without checking device, application, session, and source.",
  "Connecting records by address alone without checking VPN, proxy, translation, and shared infrastructure.",
  "Leaving out change tickets, owner reports, support evidence, and business validation.",
  "Hiding uncertain order, missing telemetry, overwritten records, or approximate human times.",
  "Writing a conclusion inside the event description instead of separating fact from interpretation.",
  "Publishing real usernames, devices, timestamps, addresses, paths, request IDs, tickets, or internal event details.",
];

const quizQuestions = [
  {
    question:
      "What makes a defensive event timeline stronger than a simple timestamp list?",
    choices: [
      "It includes normalized time, source, event, related entities, evidence status, meaning, limitations, and confidence.",
      "It always includes the greatest possible number of events.",
      "It sorts by severity first.",
      "It removes uncertain records.",
    ],
    answer: 0,
    explanation:
      "A useful timeline explains source, sequence, relationships, evidence strength, and limitations.",
  },
  {
    question:
      "Why should original timestamps remain visible?",
    choices: [
      "They allow another reviewer to verify every normalization and sequencing decision.",
      "They make time zones unnecessary.",
      "They prove causation.",
      "They remove collection delay.",
    ],
    answer: 0,
    explanation:
      "Original values support reproducibility and protect evidence integrity.",
  },
  {
    question:
      "What does uncertain order mean?",
    choices: [
      "The available evidence cannot establish the exact sequence responsibly.",
      "The events are unrelated.",
      "The analyst should guess the order.",
      "The highest-severity event happened first.",
    ],
    answer: 0,
    explanation:
      "Precision, offset, or missing evidence may prevent an exact ordering claim.",
  },
  {
    question:
      "Which field is most useful for tracing one web request across multiple layers?",
    choices: [
      "A shared request or trace identifier.",
      "Severity alone.",
      "The analyst review time.",
      "The user's job title.",
    ],
    answer: 0,
    explanation:
      "Request identifiers can connect proxy, gateway, web server, application, and back-end events.",
  },
  {
    question:
      "Why can events close in time still be unrelated?",
    choices: [
      "Different systems and users may perform parallel activity during the same period.",
      "Timestamps are never useful.",
      "Every source uses the same clock.",
      "Parallel activity only occurs during maintenance.",
    ],
    answer: 0,
    explanation:
      "Time proximity supports review but does not prove relationship or causation.",
  },
  {
    question:
      "What should a timeline do when one source is missing?",
    choices: [
      "Preserve the confirmed events, mark the evidence gap, lower confidence when appropriate, and request authorized supporting evidence.",
      "Invent the missing event.",
      "Remove every related event.",
      "Call the sequence confirmed.",
    ],
    answer: 0,
    explanation:
      "Missing evidence should be explicit rather than hidden or guessed.",
  },
  {
    question:
      "Which final step is necessary after the apparent technical recovery?",
    choices: [
      "Validate the required business function, monitor for recurrence, and document residual risk.",
      "Delete the logs.",
      "Assume the issue is permanently resolved.",
      "Remove all uncertainty labels.",
    ],
    answer: 0,
    explanation:
      "Recovery must be validated and monitored before closure.",
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

function ElementGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Timeline Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Elements of a Professional Event Timeline
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {timelineElements.map((item) => (
          <div
            key={item.element}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.element}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Example
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.example}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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

function OrderingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Ordering Confidence
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Five Ways to Describe Event Order Honestly
      </h2>

      <div className="mt-6 grid gap-5">
        {orderingCategories.map((item) => (
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
                Evidence support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.support}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorrelationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlation Keys
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways to Connect Related Events
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {correlationKeys.map((item) => (
          <div
            key={item.key}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.key}</h3>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Correlation use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.use}
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

function SourceInventoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Source Inventory
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Know What Each Source Contributes Before Building the Timeline
      </h2>

      <div className="mt-6 grid gap-4">
        {sourceInventory.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.4fr_1fr_1fr_1fr]"
          >
            <div>
              <p className="font-black text-cyan-100">{item.source}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Best use
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.bestUse}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Time concern
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.timeConcern}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Correlation fields
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.correlation}
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
        Timeline Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Build the Timeline in Six Steps
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

function TimelineTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Example Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        A Twelve-Event Multi-Source Timeline
      </h2>

      <div className="mt-6 grid gap-4">
        {timelineRows.map((item, index) => (
          <div
            key={`${item.time}-${item.source}`}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="grid gap-4 lg:grid-cols-[0.12fr_0.45fr_0.45fr_0.65fr_1fr_0.6fr_1fr_1fr]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                {index + 1}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Time
                </p>
                <p className="mt-2 font-mono text-sm font-black text-cyan-300">
                  {item.time}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Source
                </p>
                <p className="mt-2 text-sm font-black text-blue-200">
                  {item.source}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Entity
                </p>
                <p className="mt-2 text-sm text-slate-200">{item.entity}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Event
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {item.event}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Status
                </p>
                <p className="mt-2 text-sm font-black text-emerald-200">
                  {item.status}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Meaning
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.meaning}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-100">
                  {item.limitation}
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
        Quality Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Checks Before Finalizing a Timeline
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {timelineQualityChecks.map((item) => (
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
                Weak timeline symptom
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

export default function BuildingASimpleEventTimelinePage() {
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
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.7 Building a Simple Event Timeline
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders normalize fictional timestamps, correlate
            multiple log sources, classify event order, document uncertainty,
            and turn separate records into a clear evidence-based timeline.
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
          lessonTitle="Building a Simple Event Timeline"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a timeline must preserve original evidence and show every normalization step.",
            "I understand that events close in time are not automatically related or causal.",
            "I will use users, devices, processes, sessions, requests, addresses, applications, paths, and tickets to correlate records.",
            "I will mark order as confirmed, likely, uncertain, parallel, or unsupported.",
            "I will use only fictional timestamps, users, devices, addresses, paths, applications, sessions, requests, tickets, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Timeline Explains Evidence; It Does Not Just Sort It"
        >
          <p className="leading-8">
            A raw export can contain hundreds of records from different clocks,
            time zones, systems, formats, and collection paths. A professional
            timeline preserves those originals, aligns the evidence, connects
            related events, and states where the sequence remains uncertain.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Sort everything by the displayed timestamp and call that the
                final sequence.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve originals, normalize time, correlate shared entities,
                classify order confidence, document gaps, and validate the
                resulting narrative.”
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
          title="Timelines Help Defenders Explain What Happened, What Is Likely, and What Is Still Missing"
        >
          <p className="leading-8">
            Timelines support troubleshooting, incident review, change
            validation, account review, application analysis, communication,
            and escalation. Their value comes from transparent evidence,
            careful sequencing, and honest limits.
          </p>
        </SectionCard>

        <ElementGuide />
        <OrderingGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Time Proximity Supports Correlation but Does Not Prove Causation"
        >
          <p className="leading-8">
            Events may occur near each other because they belong to the same
            workflow, because they share a larger incident, or simply because
            many systems were active at the same time. A strong timeline uses
            multiple shared fields before claiming a relationship.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Preserve", "Keep original timestamps, messages, fields, and source labels."],
              ["Normalize", "Convert time and field formats without hiding the source evidence."],
              ["Correlate", "Use shared users, devices, processes, sessions, requests, addresses, paths, and tickets."],
              ["Classify", "Mark order and meaning as confirmed, likely, uncertain, parallel, or unsupported."],
              ["Validate", "Check recovery, owner confirmation, business outcome, monitoring, and residual risk."],
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

        <CorrelationGuide />
        <SourceInventoryGuide />
        <WorkflowGuide />
        <TimelineTable />
        <QualityGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Timeline and Correlation Terms
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
          title="Fake Timeline Quality Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services event review."
          metrics={[
            {
              label: "Events normalized",
              value: "38",
              note: "Authentication, system, application, network, endpoint, change, and support records are aligned to UTC.",
            },
            {
              label: "Confirmed sequence links",
              value: "21",
              note: "Shared sessions, requests, users, devices, paths, and change IDs support the order.",
            },
            {
              label: "Unresolved gaps",
              value: "4",
              note: "One missing endpoint segment, one approximate support time, one absent request ID, and one delayed collector batch remain.",
            },
          ]}
        />

        <FakeAlertCard
          title="Raw Event Order Conflicts with the Known Device Clock Offset"
          severity="Medium"
          time="08:22 AM"
          source="Fake Timeline Correlation Platform"
          details="A fictional application event appears two minutes before the related authentication event in the raw export. The workstation clock is documented as two minutes slow. After normalization, the application retry occurs two seconds before the authentication failure and matches the expected workflow."
          recommendation="Preserve original values, document the clock offset, normalize both records, correlate account, device, application, and session evidence, mark the corrected order as high confidence, and retain the original raw order for auditability."
        />

        <FakeLogPanel
          title="Fake Timeline Normalization Evidence"
          logs={[
            "RAW 08:01:04 LOCAL device='training-laptop-44' source='mail-client' event='stored_credential_rejected' clock_offset='-02:00'",
            "RAW 08:03:06 UTC source='identity-platform' account='training-user-44' event='authentication_failed'",
            "NORMALIZED 08:03:04 UTC source='mail-client' event='stored_credential_rejected'",
            "NORMALIZED 08:03:06 UTC source='identity-platform' event='authentication_failed'",
            "08:04:02 UTC source='support-ticket' report='mail_password_not_updated' precision='approximate'",
            "08:04:28 UTC source='mail-client' event='stored_credential_updated'",
            "08:04:32 UTC source='identity-platform' event='authentication_success'",
            "08:04:36 UTC source='mfa-platform' event='challenge_approved' session='session-4408'",
            "08:04:41 UTC source='mail-application' event='session_created' session='session-4408'",
            "08:15:00 UTC source='monitoring' additional_failures='0' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Timeline Conclusion Is Best Supported?"
          evidence={[
            "The password reset completed before the first failure.",
            "The mail client reports a stored credential rejection.",
            "The application event and authentication failure involve the same account and expected laptop.",
            "A documented two-minute clock offset aligns the application event before the authentication failure.",
            "The user reports the mail password had not been updated.",
            "The stored credential is updated before successful authentication.",
            "MFA and application-session records follow the successful sign-in.",
            "No additional failures appear during the monitoring window.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The timeline most strongly supports an old saved mail credential causing repeated failures after the approved password reset, followed by successful recovery after the credential was updated.",
            "The account was definitely stolen.",
            "The first raw timestamp proves the application event happened two minutes earlier.",
            "The timeline proves no other activity occurred anywhere.",
          ]}
          bestAnswer={0}
          explanation="Change, application, authentication, support, MFA, session, clock-offset, and monitoring evidence support the stale-credential sequence while preserving source and scope limitations."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Event Timelines"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
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
          title="Build a Fictional Twenty-Event Timeline"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Multi-Source Timeline Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twenty fictional events involving one user account, one
                service identity, two devices, one application, one web
                request, one firewall, one endpoint alert, one password change,
                one support ticket, and one approved maintenance record.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve every original fictional event and timestamp.</li>
                <li>Record source time zone, offset, precision, collection time, and normalization.</li>
                <li>Identify users, devices, processes, services, sessions, requests, addresses, paths, applications, and tickets.</li>
                <li>Build one normalized event table in a common time reference.</li>
                <li>Mark each relationship and order as confirmed, likely, uncertain, parallel, or unsupported.</li>
                <li>Write confirmed facts, reasonable conclusions, alternates, gaps, confidence, and impact.</li>
                <li>Define the owner, safe next action, validation, monitoring, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not collect real logs,
            alter timestamps, access systems, inspect private activity, change
            devices, or publish real users, addresses, domains, paths, request
            IDs, session IDs, tickets, or internal event details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Two Events Share the Same Second but Different Precision"
          scenario="A fictional firewall event records 14:03:22, while an application event records 14:03:22.481. The firewall source stores only whole seconds, and no shared request ID is available."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve both values, correlate the source, destination, application, user, and surrounding events, and mark the exact sub-second order as uncertain unless stronger evidence appears.",
              outcome:
                "Best defensive choice. The available precision cannot support an exact order.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Place the firewall event first because it appears first in the export.",
              outcome:
                "Unsupported. Export order is not proof of event order.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Round the application timestamp down and call the order confirmed.",
              outcome:
                "Weak response. Rounding removes useful evidence and creates false certainty.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Endpoint Event Arrives Fifteen Minutes Late"
          scenario="A fictional laptop was offline and reconnects at 11:30 UTC. The collector then receives an endpoint event whose source timestamp is 11:15 UTC."
          choices={[
            {
              label: "Choice A",
              response:
                "Place the event at 11:15 in the activity timeline, document the delayed collection at 11:30, correlate device connectivity, and preserve both times.",
              outcome:
                "Best defensive choice. Event time and collection time describe different moments.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Place the event at 11:30 because that is when the collector received it.",
              outcome:
                "Incorrect. Delayed arrival does not change when the source says the activity occurred.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the event because it arrived late.",
              outcome:
                "Unsafe. Delayed evidence can still be important.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Building a Simple Event Timeline Checklist"
          items={[
            "I define the fictional timeline question, systems, users, applications, time window, owner, and decision.",
            "I preserve original timestamps, source labels, event IDs, messages, fields, and collection times.",
            "I record time zones, clock offsets, precision, daylight-saving context, forwarding delay, and ingestion delay.",
            "I normalize events to one common time reference without hiding the originals.",
            "I correlate users, devices, processes, services, sessions, requests, addresses, paths, applications, and tickets.",
            "I distinguish time proximity, correlation, parallel activity, and causation.",
            "I classify order as confirmed, likely, uncertain, parallel, or unsupported.",
            "I separate event facts, meaning, reasonable conclusions, alternate explanations, and limitations.",
            "I include recovery, business validation, monitoring, owner, next action, and residual risk.",
            "I use only fictional evidence and never publish real users, devices, timestamps, addresses, domains, paths, request IDs, sessions, tickets, or internal event details.",
          ]}
        />

        <MiniQuiz
          title="I4.7 Mini Quiz: Building a Simple Event Timeline"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Event Timeline Report containing at least twenty events from authentication, system, application, network, web, endpoint, change, support, and owner sources. Include original timestamp, normalized timestamp, source, event ID, user, device, process, service, session, request ID, source, destination, path, action, result, evidence status, meaning, limitation, confidence, impact, owner, safe next action, validation, monitoring, and residual risk."
          tips={[
            "Use only fictional users, devices, timestamps, event IDs, applications, addresses, domains, paths, sessions, request IDs, tickets, and organizations.",
            "Include one known clock offset, one delayed event batch, one approximate human time, one precision conflict, and one missing source.",
            "Mark every relationship and event order as confirmed, likely, uncertain, parallel, or unsupported.",
            "Do not include real logs, screenshots, exports, usernames, device names, addresses, domains, paths, request IDs, sessions, or internal tickets.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A defensive timeline explains evidence, relationships, order, confidence, and limitations rather than merely sorting timestamps.",
            "Original timestamps must remain visible while normalized values are added transparently.",
            "Time proximity supports review but does not automatically prove correlation or causation.",
            "Users, devices, processes, services, sessions, requests, addresses, paths, applications, and tickets strengthen correlation.",
            "Professional timelines classify order as confirmed, likely, uncertain, parallel, or unsupported.",
            "Recovery, business validation, monitoring, and residual risk belong in the final timeline.",
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