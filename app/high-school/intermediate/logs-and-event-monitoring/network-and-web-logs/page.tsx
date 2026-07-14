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
const previousLesson = `${modulePath}/system-and-application-logs`;
const nextLesson = `${modulePath}/normal-vs-suspicious-patterns`;

const objectives = [
  "Explain what fictional firewall, DNS, proxy, web server, reverse proxy, network-flow, VPN, and application-gateway logs record.",
  "Interpret network and web events using source, destination, port, protocol, action, direction, zone, hostname, method, path, response, bytes, duration, user, process, and application context.",
  "Connect DNS resolution, firewall decisions, proxy handling, web requests, application responses, and endpoint evidence into one defensive sequence.",
  "Separate connection metadata, request metadata, content assumptions, user intent, and business impact without overstating what logs prove.",
  "Create a professional fictional Network and Web Log Review Report with normalized evidence, findings, limitations, confidence, ownership, and safe next actions.",
];

const vocabulary = [
  ["Source address", "The fictional network address associated with where a connection or request originated."],
  ["Destination address", "The fictional network address associated with the receiving system or service."],
  ["Port", "A numeric service endpoint used with a transport protocol to direct network traffic."],
  ["Protocol", "The communication rules used by a connection or application, such as TCP, UDP, DNS, or HTTPS."],
  ["Firewall action", "The source-defined decision to allow, deny, reject, drop, or otherwise handle traffic."],
  ["DNS query", "A request asking a resolver for information about a fictional hostname or domain."],
  ["Proxy", "A system that receives and forwards requests while applying policy, visibility, caching, or access controls."],
  ["HTTP method", "A web request action such as GET or POST that describes the requested operation."],
  ["Response code", "A web server or proxy status value describing the request outcome."],
  ["User agent", "A client-provided string that describes the browser, application, or software making a web request."],
  ["Network flow", "A summary of communication between source and destination systems over a time period."],
  ["Zone", "A logical network area such as user, server, guest, management, or public-facing space."],
];

const sourceTypes = [
  {
    source: "Firewall logs",
    records: "Source, destination, source port, destination port, protocol, direction, zone, rule, action, bytes, duration, and connection state.",
    questions: "Was the connection allowed or denied, which rule applied, and did the traffic match an approved service and network boundary?",
    limitation: "Firewall metadata usually does not reveal complete content, user intent, application purpose, or every related request.",
  },
  {
    source: "DNS logs",
    records: "Client, resolver, query name, record type, response, answer, failure, block, timeout, and timing.",
    questions: "Which device or application requested the name, what response returned, and did the request match expected activity?",
    limitation: "A DNS request does not prove that a connection succeeded or that a person intentionally visited the destination.",
  },
  {
    source: "Proxy and secure web gateway logs",
    records: "User, client, destination, category, method, path, response, policy action, bytes, user agent, and duration.",
    questions: "Which user or application made the request, what policy applied, and what response or block occurred?",
    limitation: "A proxy record may represent automated application traffic rather than a manual browser action.",
  },
  {
    source: "Web server logs",
    records: "Client, timestamp, host, method, path, response code, bytes, referrer, user agent, request ID, and processing time.",
    questions: "Which resource was requested, what response occurred, how long did it take, and which application workflow was involved?",
    limitation: "A web request path and response code do not prove content safety, user intent, or successful business completion.",
  },
  {
    source: "Reverse proxy and application gateway logs",
    records: "Client, front-end listener, back-end target, route, policy, TLS state, request ID, response, and health decision.",
    questions: "Which gateway handled the request, which back-end received it, and did routing, health, or policy affect the result?",
    limitation: "The gateway may hide the original client or simplify the back-end application sequence.",
  },
  {
    source: "Network-flow records",
    records: "Source, destination, port, protocol, bytes, packets, start time, end time, direction, and duration.",
    questions: "Which systems communicated, how much data moved, how often, and whether the pattern matched expected service behavior?",
    limitation: "Flow records show communication metadata, not complete content, user action, or application meaning.",
  },
  {
    source: "VPN and remote-access logs",
    records: "Account, device, source, tunnel, authentication, assigned address, duration, disconnect reason, and policy.",
    questions: "Was the remote session approved, which device and account were involved, and what network access followed?",
    limitation: "A VPN gateway address may represent many users and can hide the original external source from internal logs.",
  },
  {
    source: "Endpoint and application records",
    records: "Process, browser, client, user, device, destination, request, application session, and protection events.",
    questions: "Which local process or application created the network activity, and did it match the expected business workflow?",
    limitation: "Endpoint records may be unavailable, delayed, incomplete, or limited to managed devices.",
  },
];

const eventFields = [
  {
    field: "Source",
    meaning: "The fictional client address, device, user, application, network, or gateway where communication originated.",
    use: "Compare the event with asset ownership, expected device, user role, network zone, VPN, and application context.",
    caution: "Network translation, proxies, shared gateways, and mobile networks can hide or change the apparent source.",
  },
  {
    field: "Destination",
    meaning: "The fictional address, hostname, domain, URL, service, application, or network zone receiving the request.",
    use: "Determine whether the destination matches an approved service, dependency, update, application, or business purpose.",
    caution: "A destination name or address does not automatically prove the content or intent of the communication.",
  },
  {
    field: "Port and protocol",
    meaning: "The transport and application communication details associated with the event.",
    use: "Map the connection to the intended service and compare it with firewall rules and application design.",
    caution: "A familiar port does not guarantee that the expected application or content is present.",
  },
  {
    field: "Direction and zone",
    meaning: "Whether traffic is inbound, outbound, internal, or lateral and which logical network areas are involved.",
    use: "Understand the boundary crossed and whether the communication matches segmentation and access policy.",
    caution: "Zone names are organization-defined and may not describe exposure or sensitivity by themselves.",
  },
  {
    field: "Firewall action",
    meaning: "Allow, deny, reject, drop, reset, inspect, or another source-defined traffic decision.",
    use: "Determine whether the connection was permitted and which rule or policy applied.",
    caution: "Allowed does not mean approved or safe, and denied does not automatically mean malicious.",
  },
  {
    field: "DNS name and answer",
    meaning: "The requested fictional hostname or domain, record type, resolver response, and returned answer.",
    use: "Connect the destination name with the client, resolver, application, and later network connection.",
    caution: "A query does not prove that the answer was used or that a connection succeeded.",
  },
  {
    field: "HTTP method and path",
    meaning: "The requested web action and resource location within the fictional application.",
    use: "Identify which application function or resource was requested.",
    caution: "A path can be generated automatically, cached, redirected, or requested without successful content access.",
  },
  {
    field: "Response code",
    meaning: "A source-defined web outcome such as success, redirect, client error, or server error.",
    use: "Separate successful delivery, redirection, access denial, missing resource, and server failure.",
    caution: "A successful response does not prove the user completed the intended business action.",
  },
  {
    field: "Bytes and duration",
    meaning: "The amount of data and time associated with a connection, request, response, or flow.",
    use: "Compare activity with expected application volume, file size, response time, and historical baseline.",
    caution: "Large or long activity can be normal for backups, updates, reports, media, or synchronization.",
  },
  {
    field: "Request or correlation ID",
    meaning: "A shared value used to connect proxy, gateway, web server, application, and back-end records.",
    use: "Trace one request through multiple network and application layers.",
    caution: "Not every source preserves the same identifier, and some values can be reused or transformed.",
  },
];

const requestSequence = [
  {
    stage: "DNS resolution",
    detail: "The client or application asks a resolver for the fictional service address.",
    evidence: "Client, query name, record type, resolver, answer, response, and time.",
  },
  {
    stage: "Network connection",
    detail: "The device attempts communication with the returned destination over a port and protocol.",
    evidence: "Source, destination, port, protocol, direction, zone, action, bytes, and duration.",
  },
  {
    stage: "Proxy or gateway handling",
    detail: "A proxy, secure gateway, reverse proxy, or application gateway applies routing and policy.",
    evidence: "User, client, host, path, category, policy, route, back-end, response, and request ID.",
  },
  {
    stage: "Web server request",
    detail: "The fictional server receives the method, host, path, client context, and request identifier.",
    evidence: "Method, host, path, response, bytes, user agent, referrer, processing time, and server.",
  },
  {
    stage: "Application processing",
    detail: "The application handles identity, business logic, files, databases, services, or other dependencies.",
    evidence: "Session, user, component, transaction, database call, result, error, and application request ID.",
  },
  {
    stage: "Response and validation",
    detail: "The application and network layers return a result that can be compared with user and monitoring evidence.",
    evidence: "Application result, server response, proxy action, connection close, user report, and validation.",
  },
];

const patternGuide = [
  {
    pattern: "Repeated denied outbound connections",
    possibleNormal: "Retired application, stale configuration, health check, old destination, approved monitoring, or policy test.",
    reviewSignals: "Many destinations, unusual ports, privileged source, increasing frequency, unknown process, or successful connection elsewhere.",
    response: "Correlate source asset, local process, application owner, destination role, rule, schedule, and change records.",
  },
  {
    pattern: "Rare DNS request",
    possibleNormal: "First-time approved service, update provider, content delivery network, training resource, or user research.",
    reviewSignals: "Unknown process, blocked connection, unusual startup item, repeated failures, sensitive device, or no business owner.",
    response: "Compare DNS, process, browser, proxy, firewall, endpoint, publisher, owner, and destination evidence.",
  },
  {
    pattern: "Large increase in web requests",
    possibleNormal: "Class activity, deployment, health check, synchronization, scheduled report, content update, or automated test.",
    reviewSignals: "New path, unfamiliar user agent, many errors, sensitive endpoint, new source range, or no approved change.",
    response: "Compare application schedule, user population, methods, paths, responses, source distribution, owner, and change history.",
  },
  {
    pattern: "Many client errors from one user",
    possibleNormal: "Old bookmark, incorrect link, expired session, permission mismatch, or application update.",
    reviewSignals: "Sensitive paths, repeated methods, new device, unusual timing, or later successful access to unrelated resources.",
    response: "Correlate user, session, application version, path, response, permission, support report, and later activity.",
  },
  {
    pattern: "One source connects to many internal destinations",
    possibleNormal: "Approved management, monitoring, inventory, backup, patching, or service-discovery system.",
    reviewSignals: "Unknown owner, unusual ports, new schedule, failed authentication, sensitive zones, or no management role.",
    response: "Verify asset role, owner, process, application, destination list, rule, maintenance window, and endpoint evidence.",
  },
  {
    pattern: "Large outbound transfer",
    possibleNormal: "Backup, cloud synchronization, report export, software distribution, media upload, or approved migration.",
    reviewSignals: "Sensitive source, unknown destination, unusual time, new process, no ticket, repeated retries, or policy bypass.",
    response: "Compare source data role, process, destination owner, file or application context, change record, volume baseline, and user report.",
  },
  {
    pattern: "Repeated web server errors",
    possibleNormal: "Temporary back-end outage, deployment, database maintenance, cache issue, or dependency restart.",
    reviewSignals: "Growing error rate, sensitive function, many users, no maintenance, failed recovery, or unusual request pattern.",
    response: "Correlate web server, gateway, application, service, database, update, owner, and validation evidence.",
  },
  {
    pattern: "Allowed connection to an unfamiliar destination",
    possibleNormal: "New approved vendor, software update, content delivery, support service, cloud dependency, or certificate check.",
    reviewSignals: "Unknown process, unusual account, sensitive device, new startup item, broad firewall rule, or no owner.",
    response: "Identify process, application, publisher, owner, destination purpose, DNS, firewall rule, endpoint state, and change context.",
  },
];

const evidenceMatrix = [
  {
    source: "Firewall event",
    supports: "Source, destination, port, protocol, direction, zone, rule, action, bytes, duration, and connection state.",
    limitation: "Usually does not prove complete content, user intent, or application purpose.",
  },
  {
    source: "DNS event",
    supports: "Client, query, record type, resolver, answer, result, and timing.",
    limitation: "Does not prove that the returned address was used or that a connection succeeded.",
  },
  {
    source: "Proxy event",
    supports: "User, client, method, host, path, category, policy action, response, bytes, user agent, and duration.",
    limitation: "May represent automated traffic and may not show the complete back-end application outcome.",
  },
  {
    source: "Web server event",
    supports: "Client, host, method, path, response, bytes, user agent, request ID, and processing time.",
    limitation: "Does not automatically prove content safety, user intent, or successful business completion.",
  },
  {
    source: "Network-flow record",
    supports: "Communication pair, port, protocol, bytes, packets, timing, and duration.",
    limitation: "Does not show full content or every request within the flow.",
  },
  {
    source: "Endpoint process record",
    supports: "Which local process, user, device, path, publisher, and application created the traffic.",
    limitation: "May be delayed, missing, or unavailable on unmanaged devices.",
  },
  {
    source: "Application record",
    supports: "Session, component, request, transaction, dependency, result, error, and application purpose.",
    limitation: "May not preserve original client or every network layer.",
  },
  {
    source: "Change and owner record",
    supports: "Approved service, destination, rule, maintenance, vendor, transfer, test, and business purpose.",
    limitation: "Documentation may be incomplete or not match the exact technical state.",
  },
];


const workflow = [
  {
    step: "1",
    title: "Define the communication question",
    detail: "Identify the fictional source device, user, process, destination, application, time window, owner, and observed impact.",
  },
  {
    step: "2",
    title: "Preserve each source",
    detail: "Capture DNS, firewall, proxy, gateway, web server, network-flow, endpoint, application, and change records.",
  },
  {
    step: "3",
    title: "Normalize fields and time",
    detail: "Align timestamps, addresses, hostnames, domains, ports, protocols, users, devices, methods, paths, responses, and request IDs.",
  },
  {
    step: "4",
    title: "Trace the sequence",
    detail: "Connect DNS resolution, network connection, gateway handling, web request, application processing, and response.",
  },
  {
    step: "5",
    title: "Add business context",
    detail: "Compare application purpose, approved destinations, network zones, owner, schedule, baseline, change, and user report.",
  },
  {
    step: "6",
    title: "Document and respond safely",
    detail: "Separate facts, conclusions, alternates, gaps, confidence, impact, owner, safe action, validation, and monitoring.",
  },
];

const sampleTimeline = [
  {
    time: "09:30:00",
    source: "Change ticket",
    event: "Approved report export to fictional cloud storage begins",
    meaning: "Provides owner, destination, expected volume, application, time window, and validation context.",
  },
  {
    time: "09:30:04",
    source: "DNS",
    event: "report-client-8 resolves storage.training-example.test",
    meaning: "Confirms the expected client requested the approved destination name.",
  },
  {
    time: "09:30:05",
    source: "Firewall",
    event: "Outbound HTTPS connection allowed",
    meaning: "Shows the connection was permitted under the named rule.",
  },
  {
    time: "09:30:06",
    source: "Proxy",
    event: "POST request to approved upload path",
    meaning: "Identifies the application request, user, host, path, action, and request ID.",
  },
  {
    time: "09:30:07",
    source: "Application",
    event: "Report export job starts for approved dataset",
    meaning: "Provides the business workflow and dataset classification context.",
  },
  {
    time: "09:31:44",
    source: "Network flow",
    event: "Forty-eight megabytes transferred to approved destination",
    meaning: "Confirms the volume and communication pair but not the content by itself.",
  },
  {
    time: "09:31:46",
    source: "Proxy",
    event: "Upload request returns success response",
    meaning: "Shows the proxy observed a successful web response.",
  },
  {
    time: "09:31:47",
    source: "Application",
    event: "Export job completes successfully",
    meaning: "Corroborates the business workflow completion.",
  },
  {
    time: "09:32:00",
    source: "Validation",
    event: "Owner confirms expected report is available",
    meaning: "Adds human and business validation to the technical evidence.",
  },
  {
    time: "09:45:00",
    source: "Monitoring",
    event: "No additional unexpected transfers observed",
    meaning: "Supports closure while preserving ongoing monitoring.",
  },
];

const mistakes = [
  "Treating an allowed firewall event as proof that the traffic was approved or safe.",
  "Treating a denied connection as proof of attack activity.",
  "Assuming a DNS request proves that a person visited or connected to the destination.",
  "Assuming a familiar port guarantees the expected application or content.",
  "Interpreting source addresses without checking VPN, proxy, translation, gateway, and shared infrastructure.",
  "Interpreting user agents as reliable proof of the actual client or person.",
  "Treating a successful web response as proof that the business transaction completed.",
  "Treating large data transfer as automatically suspicious without backup, update, report, or synchronization context.",
  "Reviewing firewall logs without DNS, endpoint, proxy, web server, application, owner, or change evidence.",
  "Ignoring request IDs, session IDs, timestamps, methods, paths, response codes, and back-end routing.",
  "Mixing connection metadata, request metadata, content assumptions, user intent, and business impact.",
  "Publishing real addresses, domains, URLs, paths, users, request IDs, network diagrams, or internal service details.",
];

const quizQuestions = [
  {
    question: "What does an allowed firewall event directly prove?",
    choices: [
      "The firewall permitted the recorded connection under the shown rule and conditions.",
      "The traffic was approved by the business owner.",
      "The content was safe.",
      "The user intended the connection.",
    ],
    answer: 0,
    explanation: "Allow confirms the firewall decision, not complete purpose, content, or approval.",
  },
  {
    question: "What does a DNS query prove?",
    choices: [
      "A client or application requested information about the recorded fictional name.",
      "A connection definitely succeeded.",
      "A user intentionally visited the destination.",
      "The destination was safe.",
    ],
    answer: 0,
    explanation: "DNS records resolution activity, not complete connection or intent.",
  },
  {
    question: "Why should proxy and web server logs be correlated?",
    choices: [
      "They describe different stages of the same request and can share users, paths, responses, and request identifiers.",
      "They are always identical.",
      "Web server logs replace proxy logs.",
      "Proxy logs contain no useful context.",
    ],
    answer: 0,
    explanation: "Multiple layers help trace request handling and application outcome.",
  },
  {
    question: "What does a large network flow directly prove?",
    choices: [
      "A significant amount of data moved between the recorded source and destination during the observed period.",
      "Sensitive information was stolen.",
      "The connection was malicious.",
      "The user acted intentionally.",
    ],
    answer: 0,
    explanation: "Volume requires application, owner, destination, file, change, and baseline context.",
  },
  {
    question: "Why can one internal source address represent many users?",
    choices: [
      "A proxy, VPN gateway, shared server, or network translation device may represent multiple clients.",
      "Addresses never identify devices.",
      "Every user shares one password.",
      "DNS changes user identities.",
    ],
    answer: 0,
    explanation: "Shared infrastructure can hide the original client from downstream logs.",
  },
  {
    question: "Which evidence best explains an approved report upload?",
    choices: [
      "Change ticket, DNS, firewall, proxy, application job, network flow, successful response, and owner validation.",
      "Only a large outbound byte count.",
      "Only an allowed connection.",
      "Only the destination domain.",
    ],
    answer: 0,
    explanation: "Multi-source technical and business evidence supports the expected workflow.",
  },
  {
    question: "What should a defender do when request logs lack a shared request ID?",
    choices: [
      "Use normalized time, user, device, source, destination, method, path, session, response, and application context while stating uncertainty.",
      "Guess which records match.",
      "Delete the events.",
      "Use severity to connect them.",
    ],
    answer: 0,
    explanation: "Correlation can still use multiple fields, but confidence and limitations must be documented.",
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

function SourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Network and Web Sources</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Different Layers Record Different Parts of Communication</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {sourceTypes.map((item) => (
          <div key={item.source} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-cyan-100">{item.source}</h3>
            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Common records</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.records}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Defender questions</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.questions}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Event Anatomy</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Ten Fields That Shape Network and Web Meaning</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {eventFields.map((item) => (
          <div key={item.field} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.meaning}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Defender use</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.use}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Caution</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.caution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SequenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Request Sequence</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Trace a Web Request Across Six Layers</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requestSequence.map((item, index) => (
          <div key={item.stage} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</div>
            <h3 className="mt-4 font-black text-blue-100">{item.stage}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Useful evidence</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.evidence}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Pattern Analysis</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Network and Web Patterns Need Application and Business Context</h2>
      <div className="mt-6 grid gap-5">
        {patternGuide.map((item) => (
          <div key={item.pattern} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-white">{item.pattern}</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Possible expected context</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{item.possibleNormal}</p>
              </div>
              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">Review signals</p>
                <p className="mt-2 text-sm leading-6 text-red-50">{item.reviewSignals}</p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Strong response</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">{item.response}</p>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Matrix</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What Each Network and Web Source Can and Cannot Prove</h2>
      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div key={item.source} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Evidence source</p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Can support</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.supports}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limitation}</p>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Review Network and Web Evidence in Six Steps</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div key={item.step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.step}</div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Correlated Network and Web Timeline</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Connect DNS, Firewall, Proxy, Application, Flow, and Validation Evidence</h2>
      <div className="mt-6 grid gap-3">
        {sampleTimeline.map((item) => (
          <div key={`${item.time}-${item.source}`} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.25fr_0.85fr_1fr]">
            <p className="font-mono text-sm font-black text-cyan-300">{item.time}</p>
            <p className="text-sm font-black text-blue-200">{item.source}</p>
            <p className="text-sm font-semibold text-white">{item.event}</p>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NetworkAndWebLogsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I4</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 5 of 8</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.5 Network and Web Logs
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders connect fictional DNS, firewall, proxy, web server, gateway, network-flow, endpoint, application, and change evidence into an accurate communication timeline.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="Network and Web Logs"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that network logs usually record connection metadata rather than complete content.",
            "I understand that DNS queries, firewall decisions, web requests, and application results are separate stages.",
            "I will preserve source, destination, port, protocol, zone, action, method, path, response, bytes, duration, and request identifiers.",
            "I will correlate network evidence with endpoint, application, owner, baseline, and approved change context.",
            "I will use only fictional addresses, domains, URLs, users, devices, applications, rules, requests, and organizations.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Connection Record Is Not the Whole Communication Story">
          <p className="leading-8">
            A firewall can record that traffic was allowed, DNS can record that a name was requested, a proxy can record a web request, and an application can record whether the business action succeeded. Each source answers a different question.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The firewall allowed it, so the traffic was safe.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Confirm the firewall decision, then connect DNS, endpoint, proxy, web server, application, owner, and change evidence before describing purpose or impact.”</p>
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

        <SectionCard eyebrow="Why This Matters" title="Network and Web Evidence Connect Devices, Services, Applications, and Business Workflows">
          <p className="leading-8">
            Network and web logs help defenders understand who or what communicated, which destination and service were involved, whether policy allowed the traffic, what web request occurred, how the application responded, and whether the workflow matched an approved purpose.
          </p>
        </SectionCard>

        <SourceGuide />

        <SectionCard eyebrow="Core Concept" title="Resolution, Connection, Request, Processing, and Response Are Different Stages">
          <p className="leading-8">
            A complete defensive review follows the communication from name resolution through the network connection, proxy or gateway, server request, application processing, and final response. Missing one layer can create an incomplete or misleading conclusion.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Resolve", "Which fictional name was requested and what answer returned?"],
              ["Connect", "Which source, destination, port, protocol, zone, and firewall action applied?"],
              ["Request", "Which method, host, path, user, client, and request ID were recorded?"],
              ["Process", "Which application, session, component, dependency, and business action handled the request?"],
              ["Validate", "Which response, user report, owner check, and monitoring evidence confirm the outcome?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FieldGuide />
        <SequenceGuide />
        <PatternGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Network and Web Review Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Network and Web Visibility Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services network environment."
          metrics={[
            {
              label: "Allowed connections",
              value: "412",
              note: "Most match approved applications, destinations, ports, zones, and normal schedules.",
            },
            {
              label: "Denied connections",
              value: "37",
              note: "Twenty-two are stale application retries, nine are expected policy tests, and six remain under review.",
            },
            {
              label: "Web request errors",
              value: "14",
              note: "Eight are old links, four are maintenance-related, and two need application-owner review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Large Outbound Transfer to a Newly Approved Cloud Destination"
          severity="Medium"
          time="09:46 AM"
          source="Fake Network Monitoring Platform"
          details="A fictional reporting workstation transfers forty-eight megabytes over HTTPS to storage.training-example.test. DNS, firewall, proxy, application, and change records show an approved report export, and the owner validates the expected result."
          recommendation="Preserve DNS, firewall, proxy, flow, endpoint, application, owner, and change evidence; document the expected transfer with high confidence; confirm the narrow destination rule and approved data scope; and continue monitoring for unrelated transfers."
        />

        <FakeLogPanel
          title="Fake Network and Web Timeline"
          logs={[
            "09:30:00 CHANGE job='report_export' destination='storage.training-example.test' approved='true'",
            "09:30:04 DNS client='report-client-8' query='storage.training-example.test' result='resolved'",
            "09:30:05 FIREWALL src='10.20.8.31' dst='203.0.113.88' port='443' action='allow' rule='approved-cloud-export'",
            "09:30:06 PROXY user='training-analyst-8' method='POST' host='storage.training-example.test' path='/approved-upload' request_id='REQ-8841'",
            "09:30:07 APPLICATION job='report_export' dataset='fictional-quarterly-summary' result='started'",
            "09:31:44 FLOW src='10.20.8.31' dst='203.0.113.88' bytes='50331648' duration='99s'",
            "09:31:46 PROXY request_id='REQ-8841' response='201' action='allowed'",
            "09:31:47 APPLICATION job='report_export' result='completed'",
            "09:32:00 VALIDATION owner='reporting-team' expected_file='available'",
            "09:45:00 MONITOR additional_unexpected_transfers='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Network and Web Conclusion Is Best Supported?"
          evidence={[
            "An approved change ticket identifies the report export, destination, owner, time window, and expected volume.",
            "The reporting workstation resolves the approved fictional destination.",
            "The firewall allows HTTPS under the named export rule.",
            "The proxy records a POST to the approved upload path.",
            "The application records the expected report job and dataset.",
            "Network flow shows forty-eight megabytes transferred.",
            "The proxy and application both record successful completion.",
            "The owner validates that the expected report is available.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The transfer most likely represents the approved report export to the expected fictional cloud destination.",
            "The data was definitely stolen.",
            "The allowed firewall event proves the content was safe.",
            "The DNS query proves a user manually visited the site.",
          ]}
          bestAnswer={0}
          explanation="Change, DNS, firewall, proxy, application, flow, and owner evidence support the approved workflow while preserving the limits of each source."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Network and Web Analysis">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Trace a Fictional Web Request Across Multiple Sources">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fictional Environment</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Network and Web Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twenty-four fictional records involving one workstation, one DNS resolver, one firewall, one proxy, one reverse proxy, one web server, one application, one endpoint process, one network-flow record, and one approved change.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required Analysis</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve every original fictional network and web record.</li>
                <li>Normalize time, addresses, names, users, devices, ports, protocols, methods, paths, responses, and request IDs.</li>
                <li>Trace DNS resolution, firewall action, proxy handling, web request, application processing, and response.</li>
                <li>Identify source, destination, process, application, owner, zone, and approved purpose.</li>
                <li>Separate connection metadata, request metadata, application outcome, and user validation.</li>
                <li>Write confirmed facts, likely explanation, alternates, gaps, confidence, impact, and owner.</li>
                <li>Recommend a safe authorized next action with validation and monitoring.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not capture real traffic, scan systems, inspect private content, alter firewall rules, access websites, query real domains, or publish real addresses, URLs, users, request IDs, network diagrams, or internal service details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Rare DNS Request Appears Without a Later Connection"
          scenario="A fictional workstation requests updates.vendor-training.test once. DNS returns an address, but no firewall, proxy, endpoint, or application record is supplied."
          choices={[
            {
              label: "Choice A",
              response: "Confirm the DNS request, preserve the query and answer, and request authorized endpoint, firewall, proxy, application, owner, and update evidence before deciding whether a connection or approved workflow occurred.",
              outcome: "Best defensive choice. The DNS event proves resolution activity, not a successful connection or user intent.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Declare that the user visited the destination.",
              outcome: "Unsupported. A DNS request can be created by software, background services, or cached workflows.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Block the domain immediately without checking ownership or purpose.",
              outcome: "Risky. The destination may support an approved update or application dependency.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Repeated Firewall Denials Come from an Old Application"
          scenario="A fictional retired client application attempts a denied connection every ten minutes to an old server address. The application owner confirms the client should be removed during the next approved maintenance window."
          choices={[
            {
              label: "Choice A",
              response: "Preserve the denied events, confirm the source process and owner, document the stale configuration, remove the retired client through approved change, validate required applications, and monitor for recurrence.",
              outcome: "Best defensive choice. The evidence supports a controlled cleanup without weakening the firewall.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Create an allow rule so the errors stop.",
              outcome: "Unsafe. The destination and application are retired.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Disable the firewall on the workstation.",
              outcome: "Unsafe and excessive. The firewall is correctly blocking the stale connection.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Network and Web Logs Checklist"
          items={[
            "I identify the fictional source device, user, process, application, destination, owner, time window, and review question.",
            "I preserve DNS, firewall, proxy, gateway, web server, flow, endpoint, application, and change evidence.",
            "I record source, destination, port, protocol, direction, zone, action, rule, method, path, response, bytes, duration, and request identifiers.",
            "I distinguish DNS resolution, connection, request, application processing, response, and business validation.",
            "I interpret source addresses with VPN, proxy, translation, gateway, and shared-infrastructure context.",
            "I compare ports, protocols, destinations, processes, applications, owners, schedules, baselines, and approved changes.",
            "I separate connection metadata, request metadata, content assumptions, user intent, and business impact.",
            "I document missing request IDs, endpoint records, owner information, retention, collection delay, and other evidence gaps.",
            "I recommend only narrow authorized changes with owner, testing, rollback, validation, and monitoring.",
            "I use only fictional evidence and never publish real addresses, domains, URLs, users, devices, request IDs, rules, diagrams, or internal service details.",
          ]}
        />

        <MiniQuiz title="I4.5 Mini Quiz: Network and Web Logs" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Network and Web Log Review Report containing at least twenty-five events across DNS, firewall, proxy, reverse proxy, web server, network-flow, endpoint, application, change, and validation sources. Include normalized timeline, source, destination, port, protocol, zone, rule, action, method, path, response, bytes, duration, request ID, process, application, owner, expected purpose, confirmed facts, likely explanations, alternate explanations, evidence gaps, confidence, impact, safe action, and monitoring."
          tips={[
            "Use only fictional addresses, domains, URLs, users, devices, applications, rules, request IDs, and organizations.",
            "Include one denied-connection pattern, one rare DNS request, one approved large transfer, and one web-error sequence.",
            "Separate connection success from web-request success and business-workflow completion.",
            "Do not include real packet captures, traffic exports, addresses, domains, URLs, internal paths, request IDs, users, or network diagrams.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "DNS, firewall, proxy, web server, flow, endpoint, and application logs describe different communication stages.",
            "An allowed connection does not automatically prove approved purpose, safe content, or user intent.",
            "A DNS request does not prove that a later connection succeeded.",
            "Source addresses require VPN, proxy, translation, gateway, and shared-infrastructure context.",
            "Large transfers and unusual destinations require application, owner, destination, baseline, and change evidence.",
            "Strong network and web review traces resolution, connection, request, processing, response, and validation across multiple sources.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I4</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}