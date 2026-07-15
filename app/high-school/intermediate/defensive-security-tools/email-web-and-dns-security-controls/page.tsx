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
const previousLesson = `${modulePath}/siem-and-log-management-basics`;
const nextLesson = `${modulePath}/tool-validation-tuning-and-false-positives`;

const objectives = [
  "Explain how email gateways, secure web gateways, DNS filtering, browser protections, reputation systems, attachment controls, URL analysis, and user reporting support layered defense.",
  "Interpret fictional email, web, and DNS security events using sender, recipient, domain, destination, method, path, response, attachment, policy, action, user, device, time, and owner context.",
  "Distinguish allow, block, quarantine, rewrite, warn, isolate, sandbox, detonate conceptually, report, release, and monitor outcomes without treating one control as complete proof.",
  "Evaluate fictional message and browsing activity across multiple controls while preserving privacy, source evidence, false-positive awareness, and business context.",
  "Create a professional fictional Layered Email, Web, and DNS Control Review with confirmed facts, limitations, confidence, impact, ownership, safe recommendations, validation, and residual risk.",
];

const vocabulary = [
  ["Email security gateway", "A defensive control that evaluates fictional messages, senders, recipients, domains, links, attachments, content, authentication results, policy, and reputation."],
  ["Secure web gateway", "A control that evaluates fictional web requests and responses using user, device, destination, category, reputation, method, path, content policy, and access rules."],
  ["DNS filtering", "A control that allows, blocks, redirects, or records fictional name-resolution requests based on policy and destination intelligence."],
  ["Reputation", "A source-defined assessment of a fictional domain, address, sender, file, or destination based on observed history and policy."],
  ["URL rewriting", "Replacing a fictional message link with a controlled inspection link so the destination can be evaluated when clicked."],
  ["Attachment analysis", "Evaluating a supplied fictional attachment using metadata, type, hash, structure, behavior simulation, policy, and reputation."],
  ["Quarantine", "Holding a fictional message or file away from the normal user workflow pending review or policy action."],
  ["Browser protection", "A control that warns, blocks, isolates, or restricts fictional browsing activity based on destination, certificate, download, script, or policy context."],
  ["Sender authentication", "Defensive checks that help evaluate whether a fictional message is authorized to use the claimed sending domain."],
  ["Domain similarity", "A comparison used to identify fictional domains that resemble trusted names but are not identical."],
  ["User report", "A safe reporting action through which a user submits a suspicious or unexpected message or website to an authorized defensive team."],
  ["Layered defense", "Using several independent controls so one missed, delayed, or incomplete signal does not determine the entire outcome."],
];

const defenseLayers = [
  {
    layer: "Sender and domain authentication",
    purpose:
      "Evaluate whether the fictional sending infrastructure is authorized to use the claimed domain and whether message integrity checks pass.",
    evidence:
      "Claimed sender, envelope sender, sending domain, authentication result, alignment, source service, message ID, and time.",
    limitation:
      "Passing authentication does not prove that the message content, sender account, or business request is safe.",
  },
  {
    layer: "Email reputation and policy",
    purpose:
      "Compare fictional sender, domain, address, campaign, message pattern, and recipient context with policy and historical reputation.",
    evidence:
      "Reputation label, category, sender history, recipient count, policy, message pattern, and prior decisions.",
    limitation:
      "New or rarely observed senders may have little history, and trusted accounts can still send unexpected content.",
  },
  {
    layer: "Attachment controls",
    purpose:
      "Evaluate supplied fictional attachments using file type, metadata, structure, hash, policy, and controlled behavior analysis.",
    evidence:
      "Filename, type, size, hash, archive state, macro state, analysis verdict, action, and message relationship.",
    limitation:
      "A clean result under one analysis method does not guarantee that every behavior or future version is safe.",
  },
  {
    layer: "URL and destination analysis",
    purpose:
      "Evaluate fictional links using domain, path, redirects, reputation, category, certificate context, page behavior, and policy.",
    evidence:
      "Original URL, rewritten URL, redirect chain, destination, category, reputation, request time, action, and user.",
    limitation:
      "A destination can change after inspection, and a familiar domain can host unexpected or user-generated content.",
  },
  {
    layer: "DNS filtering",
    purpose:
      "Control whether a fictional device can resolve a destination name based on policy, category, reputation, ownership, and expected use.",
    evidence:
      "Client, user, query, response, category, policy, action, resolver, and time.",
    limitation:
      "A DNS query does not prove that a connection or user visit occurred.",
  },
  {
    layer: "Secure web gateway",
    purpose:
      "Evaluate fictional web requests and downloads using user, device, destination, category, method, path, response, policy, and reputation.",
    evidence:
      "User, device, host, path, method, response, category, action, bytes, request ID, and time.",
    limitation:
      "Gateway metadata may not reveal complete encrypted content or the final application effect.",
  },
  {
    layer: "Browser and endpoint protection",
    purpose:
      "Warn, block, isolate, scan, or record fictional browsing, download, script, file, and process activity at the device.",
    evidence:
      "Browser event, download, file, process, path, publisher, action, destination, device, user, and time.",
    limitation:
      "A warning can be ignored, and endpoint coverage depends on agent health, policy, and telemetry.",
  },
  {
    layer: "User reporting and response",
    purpose:
      "Allow a user to safely report a fictional message or destination so defenders can preserve evidence, review scope, and protect others.",
    evidence:
      "Reporter, message ID, recipient, time, reason, submission method, related users, actions, and final classification.",
    limitation:
      "A report is an important signal but not automatic proof that the content is harmful.",
  },
];

const messageFields = [
  {
    field: "Display name",
    question:
      "What fictional name is shown to the recipient?",
    caution:
      "Display names are easy to copy and should not be treated as strong identity proof.",
  },
  {
    field: "From address",
    question:
      "Which fictional address appears in the visible sender field?",
    caution:
      "The visible address must be compared with sending-domain and authentication evidence.",
  },
  {
    field: "Envelope sender",
    question:
      "Which fictional address or domain handled delivery and return-path behavior?",
    caution:
      "The envelope sender may differ from the visible From field for legitimate or suspicious reasons.",
  },
  {
    field: "Reply-to",
    question:
      "Where will a reply be directed?",
    caution:
      "A reply-to address that differs from the visible sender requires business context.",
  },
  {
    field: "Recipient scope",
    question:
      "Was the fictional message sent to one person, a department, many users, or an unusual group?",
    caution:
      "Large recipient counts can reflect announcements, campaigns, or broad unwanted messaging.",
  },
  {
    field: "Subject and request",
    question:
      "What action, urgency, payment, account, document, meeting, or support request does the message describe?",
    caution:
      "Urgent language is a review clue, not complete proof by itself.",
  },
  {
    field: "Authentication results",
    question:
      "What do the fictional sender-authentication checks report?",
    caution:
      "Pass results support sending authorization, not complete content safety.",
  },
  {
    field: "Links",
    question:
      "Which fictional domains, paths, redirectors, and rewritten links appear?",
    caution:
      "Visible text and actual destination can differ.",
  },
  {
    field: "Attachments",
    question:
      "Which fictional filenames, types, sizes, hashes, archives, and analysis results appear?",
    caution:
      "A familiar filename or document type does not prove safe content.",
  },
  {
    field: "Message ID and time",
    question:
      "Which unique identifier and timestamps connect gateway, mailbox, user-report, and response evidence?",
    caution:
      "Delivery, inspection, click, report, and response times can differ.",
  },
];

const webDnsFields = [
  {
    field: "Client and user",
    use:
      "Identify the fictional device, user, browser, application, service, or shared gateway associated with the request.",
    limitation:
      "Shared systems, VPNs, proxies, and stale identity mapping can misattribute activity.",
  },
  {
    field: "DNS query",
    use:
      "Show which fictional name a client attempted to resolve and how the resolver responded.",
    limitation:
      "Resolution does not prove that a later connection occurred.",
  },
  {
    field: "Destination",
    use:
      "Identify the fictional host, address, category, owner, service, or application that received the request.",
    limitation:
      "A trusted platform can host many separate pages and user-created resources.",
  },
  {
    field: "Method",
    use:
      "Show whether the fictional request retrieved, submitted, uploaded, or otherwise interacted with a web resource.",
    limitation:
      "Method alone does not reveal complete content or intent.",
  },
  {
    field: "Path",
    use:
      "Identify the fictional page, resource, file, endpoint, or application route requested.",
    limitation:
      "Paths can contain dynamic identifiers and should be handled carefully to protect privacy.",
  },
  {
    field: "Response",
    use:
      "Show whether the request succeeded, redirected, was denied, failed, or returned an application error.",
    limitation:
      "A successful response does not prove that the content was safe or understood by the user.",
  },
  {
    field: "Category and reputation",
    use:
      "Provide a tool-defined classification for the fictional destination.",
    limitation:
      "Categories and reputation can be wrong, stale, broad, or unavailable for new destinations.",
  },
  {
    field: "Policy action",
    use:
      "Record whether the control allowed, blocked, warned, isolated, rewritten, or monitored the request.",
    limitation:
      "The action confirms a control decision, not final intent or impact.",
  },
  {
    field: "Redirect chain",
    use:
      "Connect a fictional original link with intermediate services and the final destination.",
    limitation:
      "Redirects can change over time, and one review may not represent later behavior.",
  },
  {
    field: "Request ID and time",
    use:
      "Correlate proxy, web server, application, endpoint, and user-report evidence.",
    limitation:
      "Different layers may use different identifiers or timestamps.",
  },
];

const controlActions = [
  {
    action: "Allow",
    directMeaning:
      "The control permitted the fictional message, query, web request, or file under the matched policy.",
    doesNotProve:
      "That the content, destination, sender, user intent, or later behavior was safe.",
    validation:
      "Correlate source, identity, endpoint, application, business purpose, and later activity.",
  },
  {
    action: "Block",
    directMeaning:
      "The control prevented the fictional message, query, request, download, or process from continuing under the matched policy.",
    doesNotProve:
      "That every related path was blocked or that the user experienced no impact.",
    validation:
      "Confirm exact object, scope, user communication, related events, protection state, and no bypass or recurrence.",
  },
  {
    action: "Quarantine",
    directMeaning:
      "The control held the fictional message or file away from normal delivery or use.",
    doesNotProve:
      "That the content executed, reached other users, or caused impact.",
    validation:
      "Confirm message or file identity, recipients, release state, related reports, and policy outcome.",
  },
  {
    action: "Rewrite",
    directMeaning:
      "The control replaced the fictional link with a managed inspection link.",
    doesNotProve:
      "That the eventual destination will remain unchanged or safe.",
    validation:
      "Review click-time analysis, redirect chain, destination, browser action, and user report.",
  },
  {
    action: "Warn",
    directMeaning:
      "The control displayed a caution or interstitial before allowing a user decision.",
    doesNotProve:
      "That the user stopped, understood the risk, or avoided the destination.",
    validation:
      "Review user action, browser event, final request, and any subsequent report.",
  },
  {
    action: "Isolate",
    directMeaning:
      "The browser or web control opened fictional content in a restricted environment.",
    doesNotProve:
      "That the content was harmful or that all data movement was impossible.",
    validation:
      "Confirm isolation state, permitted interactions, downloads, clipboard policy, and user outcome.",
  },
  {
    action: "Release",
    directMeaning:
      "An authorized reviewer returned a fictional message or file from quarantine to the normal workflow.",
    doesNotProve:
      "That every recipient should receive it or that later versions will be safe.",
    validation:
      "Confirm reviewer, evidence, recipient scope, policy exception, owner, and monitoring.",
  },
  {
    action: "Report",
    directMeaning:
      "A user or tool submitted the fictional message or destination for defensive review.",
    doesNotProve:
      "That the content is harmful or that all affected users are known.",
    validation:
      "Preserve evidence, review scope, classify, protect others if needed, communicate, and document.",
  },
];


const evidenceMatrix = [
  {
    source: "Email gateway event",
    supports:
      "The fictional message, sender, recipient, authentication, reputation, attachment, link, policy, action, and time recorded by the gateway.",
    limitation:
      "Does not automatically prove user intent, complete content safety, or downstream endpoint behavior.",
  },
  {
    source: "Mailbox and message record",
    supports:
      "Whether the fictional message was delivered, moved, removed, reported, replied to, forwarded, or opened under the available evidence.",
    limitation:
      "Mailbox events may not reveal what the user understood or whether a link loaded successfully.",
  },
  {
    source: "DNS event",
    supports:
      "A fictional client requested resolution for a domain and the resolver returned an allow, block, redirect, or answer.",
    limitation:
      "Does not prove a later connection or page visit.",
  },
  {
    source: "Secure web gateway event",
    supports:
      "The fictional user, device, host, path, method, response, category, policy, action, bytes, and request ID.",
    limitation:
      "May not reveal complete encrypted content or final application impact.",
  },
  {
    source: "Browser and endpoint event",
    supports:
      "The fictional browser warning, request, download, file, process, path, action, and device state.",
    limitation:
      "Telemetry depends on coverage, health, policy, and retention.",
  },
  {
    source: "Destination and owner record",
    supports:
      "The fictional domain, application, service, owner, approved use, category, and business purpose.",
    limitation:
      "Ownership and category data can be stale or incomplete.",
  },
  {
    source: "User report",
    supports:
      "What the user observed, why the message or page seemed unexpected, and when it was reported.",
    limitation:
      "Human recollection can be incomplete, approximate, or mistaken.",
  },
  {
    source: "Response and validation record",
    supports:
      "Which messages, users, destinations, policies, and controls were reviewed or changed and whether the intended workflow remained healthy.",
    limitation:
      "Validation covers the tested scope and does not guarantee permanent safety.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the review question",
    detail:
      "Identify the fictional message, destination, user, device, control layers, time window, owner, and decision the review must support.",
  },
  {
    step: "2",
    title: "Preserve original evidence",
    detail:
      "Keep message IDs, sender fields, authentication results, URLs, attachment metadata, DNS, web, browser, endpoint, policy, and action records.",
  },
  {
    step: "3",
    title: "Trace each control layer",
    detail:
      "Determine what the email gateway, DNS filter, secure web gateway, browser, endpoint, mailbox, and user-report workflow observed or did.",
  },
  {
    step: "4",
    title: "Add identity and business context",
    detail:
      "Confirm sender, recipient, owner, expected workflow, approved domain, application purpose, device, user, and change context.",
  },
  {
    step: "5",
    title: "Classify and prioritize",
    detail:
      "Choose expected, policy violation, false positive, contained, suspicious, or evidence-incomplete and state confidence and impact.",
  },
  {
    step: "6",
    title: "Respond and validate",
    detail:
      "Use the narrowest authorized control action, protect other users if needed, verify business function, monitor, and document residual risk.",
  },
];

const classificationGuide = [
  {
    outcome: "Expected business communication",
    support:
      "The fictional sender, domain, authentication, owner, recipient, request, link, attachment, timing, and business workflow agree.",
    response:
      "Document the expected context, preserve evidence, release or allow only when authorized, and monitor for changed versions or destinations.",
  },
  {
    outcome: "Policy violation",
    support:
      "The content or destination conflicts with an approved fictional policy even when no harmful behavior is confirmed.",
    response:
      "Apply the documented policy, communicate with the owner or user, preserve the evidence, and review whether the policy needs clarification.",
  },
  {
    outcome: "False positive",
    support:
      "The fictional control misclassified an approved sender, domain, attachment, destination, or workflow because of stale reputation, parser error, category error, or incomplete context.",
    response:
      "Correct the exact data or policy condition narrowly, test the change, and preserve broader protective coverage.",
  },
  {
    outcome: "Contained event",
    support:
      "The fictional message, destination, or file was blocked or quarantined before the supplied evidence shows delivery, access, execution, or impact.",
    response:
      "Confirm scope, other recipients, related attempts, protection state, user communication, and monitoring while stating telemetry limits.",
  },
  {
    outcome: "Suspicious pattern",
    support:
      "Multiple concerning signals align, such as domain similarity, unexpected sender, failed authentication, unusual request, new destination, redirect chain, denied warning, or unexplained attachment.",
    response:
      "Preserve evidence, protect users through authorized controls, escalate, validate scope, communicate safely, and monitor related entities.",
  },
  {
    outcome: "Evidence-incomplete",
    support:
      "The fictional message or web event exists, but sender, recipient, authentication, link, attachment, destination, action, user, device, or timeline evidence is missing.",
    response:
      "State confirmed facts, identify gaps, lower confidence, and request authorized supporting evidence.",
  },
];

const layeredExamples = [
  {
    caseTitle: "Approved benefits announcement",
    emailLayer:
      "Authentication passes; the fictional sender and domain match the approved benefits provider.",
    dnsLayer:
      "The link resolves to the approved benefits portal.",
    webLayer:
      "The secure web gateway allows the destination under the business-services category.",
    endpointLayer:
      "No download, unexpected process, or browser warning appears.",
    conclusion:
      "Expected business communication when the owner, recipient group, message ID, link, and timing match the planned announcement.",
  },
  {
    caseTitle: "Look-alike help-desk domain",
    emailLayer:
      "The fictional message uses a display name matching the help desk, but the visible sender domain differs by one character.",
    dnsLayer:
      "The look-alike domain is newly observed and blocked by policy.",
    webLayer:
      "No web request succeeds.",
    endpointLayer:
      "No file or process activity follows.",
    conclusion:
      "Contained suspicious pattern with no supplied evidence of destination access or endpoint impact.",
  },
  {
    caseTitle: "Legitimate mailing service with authentication mismatch",
    emailLayer:
      "A fictional school newsletter is sent through an approved mailing platform, but one authentication alignment check fails.",
    dnsLayer:
      "All links resolve to the approved school news portal.",
    webLayer:
      "The gateway allows the known portal and records normal responses.",
    endpointLayer:
      "No unusual download or process activity occurs.",
    conclusion:
      "Likely expected communication after owner and mailing-service validation; the authentication configuration still requires correction.",
  },
];

const policyQualityChecks = [
  {
    check: "Purpose and owner",
    question:
      "Does the fictional control have a named owner and a clear business or defensive purpose?",
    risk:
      "Unowned policies can remain stale, overbroad, or inconsistent.",
  },
  {
    check: "Data sources",
    question:
      "Which sender, message, DNS, web, browser, endpoint, identity, inventory, and reporting sources support the decision?",
    risk:
      "A policy may rely on a field or source that is missing or delayed.",
  },
  {
    check: "Exact match conditions",
    question:
      "Which domains, categories, file types, reputation states, methods, recipients, users, devices, or actions trigger the policy?",
    risk:
      "Broad patterns can block legitimate workflows or miss high-risk variations.",
  },
  {
    check: "Exceptions",
    question:
      "Are approved exceptions limited to the exact sender, destination, application, user group, time, and purpose?",
    risk:
      "Broad allow lists can bypass several protective layers.",
  },
  {
    check: "User experience",
    question:
      "Will the policy block, warn, quarantine, isolate, or redirect, and how will users understand the outcome?",
    risk:
      "Confusing controls can increase bypass attempts or support burden.",
  },
];

const timeline = [
  {
    time: "11:00:00",
    source: "Campaign ticket",
    event:
      "Approved fictional benefits announcement is scheduled for staff recipients.",
    meaning:
      "Provides owner, sender, domain, recipient group, message template, link, and delivery window.",
  },
  {
    time: "11:05:14",
    source: "Email gateway",
    event:
      "Message arrives from benefits@northstar-benefits.test with authentication checks passing.",
    meaning:
      "Supports authorized sending infrastructure but not complete content safety.",
  },
  {
    time: "11:05:16",
    source: "Email policy",
    event:
      "Message is allowed because sender, recipient group, attachment state, and link policy match.",
    meaning:
      "Confirms the gateway decision.",
  },
  {
    time: "11:10:03",
    source: "DNS",
    event:
      "training-laptop-31 queries portal.northstar-benefits.test and receives an allowed response.",
    meaning:
      "Shows name resolution from the expected fictional device.",
  },
  {
    time: "11:10:05",
    source: "Secure web gateway",
    event:
      "User opens the approved benefits portal through the rewritten link.",
    meaning:
      "Connects the message link to the destination request.",
  },
  {
    time: "11:10:06",
    source: "Web policy",
    event:
      "Destination category is business-services and the request is allowed.",
    meaning:
      "Confirms the web-control policy result.",
  },
  {
    time: "11:10:08",
    source: "Application",
    event:
      "Benefits portal returns the expected sign-in page.",
    meaning:
      "Adds application-level confirmation.",
  },
  {
    time: "11:10:10",
    source: "Browser",
    event:
      "No warning, download, redirect anomaly, or certificate error is recorded.",
    meaning:
      "Supports expected browser behavior under the available evidence.",
  },
  {
    time: "11:12:00",
    source: "Owner validation",
    event:
      "Benefits owner confirms message, portal, and recipient workflow.",
    meaning:
      "Adds business context.",
  },
  {
    time: "11:30:00",
    source: "Monitoring",
    event:
      "No unexpected domains, attachments, redirects, or user reports appear.",
    meaning:
      "Supports expected communication with high confidence.",
  },
];

const mistakes = [
  "Treating a sender display name as proof of identity.",
  "Treating passing sender authentication as proof that the request or content is safe.",
  "Treating a failed authentication result as automatic proof of malicious intent without forwarding or service context.",
  "Assuming a DNS query proves that a user visited or interacted with a destination.",
  "Assuming an allowed web request proves the page content or user action was safe.",
  "Treating quarantine as proof that an attachment executed or caused impact.",
  "Creating broad allow lists for an entire domain, sender group, file type, category, or application without narrow validation.",
  "Ignoring redirect chains, rewritten links, final destinations, request IDs, and click-time behavior.",
  "Changing a category or policy because one user needs access without owner, privacy, testing, rollback, and monitoring.",
  "Ignoring user reports because another tool allowed the message or destination.",
  "Failing to preserve message IDs, original sender fields, URLs, attachment metadata, policy versions, and cross-layer timestamps.",
  "Publishing real messages, addresses, domains, URLs, attachments, recipients, screenshots, policies, or internal security details.",
];

const quizQuestions = [
  {
    question:
      "What does passing sender authentication directly support?",
    choices: [
      "The fictional sending infrastructure was authorized under the available domain policy.",
      "The message content and request are definitely safe.",
      "The physical sender is known with certainty.",
      "Every included link is approved.",
    ],
    answer: 0,
    explanation:
      "Authentication supports sending authorization and integrity checks, not complete business legitimacy.",
  },
  {
    question:
      "What does a DNS query directly prove?",
    choices: [
      "A fictional client or application requested resolution for the recorded domain.",
      "The user successfully visited the site.",
      "The page content was safe.",
      "A file was downloaded.",
    ],
    answer: 0,
    explanation:
      "DNS evidence precedes or supports connection analysis but does not prove a later request.",
  },
  {
    question:
      "What does quarantine directly prove?",
    choices: [
      "The fictional message or file was held away from normal delivery or use under policy.",
      "The file executed.",
      "The device was compromised.",
      "Every recipient received the same content.",
    ],
    answer: 0,
    explanation:
      "Quarantine confirms a control action, not execution or impact.",
  },
  {
    question:
      "Why is a rewritten link still reviewed at click time?",
    choices: [
      "The fictional destination, redirect chain, reputation, or content can change after message delivery.",
      "Rewriting guarantees the destination is unsafe.",
      "DNS is no longer needed.",
      "The user identity becomes certain.",
    ],
    answer: 0,
    explanation:
      "Click-time inspection helps account for changing destination conditions.",
  },
  {
    question:
      "Which evidence most strongly supports an expected business message?",
    choices: [
      "Sender, domain, authentication, owner, recipient, message ID, request, links, attachments, timing, and business workflow all agree.",
      "The display name looks familiar.",
      "The message uses urgent language.",
      "The gateway allowed it.",
    ],
    answer: 0,
    explanation:
      "Multiple independent technical and business sources support the expected conclusion.",
  },
  {
    question:
      "What is the strongest response to a false-positive web category?",
    choices: [
      "Validate owner, content, privacy, destination, and business need; correct only the exact category or policy condition; test, monitor, and preserve broader protection.",
      "Allow the entire category permanently.",
      "Disable web filtering.",
      "Tell users to bypass the warning.",
    ],
    answer: 0,
    explanation:
      "Narrow correction restores the approved workflow without creating a broad gap.",
  },
  {
    question:
      "Why should user reports remain important when a tool allowed the message?",
    choices: [
      "The user may notice unexpected business context, request, timing, or appearance that the automated control did not understand.",
      "User reports automatically prove the message is harmful.",
      "Automated tools are never useful.",
      "The message should always be deleted without review.",
    ],
    answer: 0,
    explanation:
      "Human context can reveal concerns outside automated policy and reputation evidence.",
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


function LayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Layered Defense
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls That Observe Different Parts of One Workflow
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {defenseLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Useful evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
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

function MessageFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Message Evidence
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Fields That Shape Email Interpretation
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {messageFields.map((item) => (
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

function WebDnsFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Web and DNS Evidence
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Fields That Connect Resolution, Request, Policy, and Endpoint Activity
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {webDnsFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.use}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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

function ActionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Control Outcomes
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Understand What Each Action Does and Does Not Prove
      </h2>

      <div className="mt-6 grid gap-5">
        {controlActions.map((item) => (
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
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.validation}
              </p>
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
        Review Outcomes
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Defensible Email, Web, and DNS Classifications
      </h2>

      <div className="mt-6 grid gap-5">
        {classificationGuide.map((item) => (
          <div
            key={item.outcome}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.4fr_1fr_1fr]"
          >
            <div>
              <p className="text-lg font-black text-cyan-100">
                {item.outcome}
              </p>
            </div>

            <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Supporting evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.support}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.response}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExampleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Layered Examples
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Cases Showing Why One Control Is Never the Whole Story
      </h2>

      <div className="mt-6 grid gap-5">
        {layeredExamples.map((item) => (
          <div
            key={item.caseTitle}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-white">
              {item.caseTitle}
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                  Email layer
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-50">
                  {item.emailLayer}
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  DNS layer
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.dnsLayer}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                  Web and endpoint layers
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.webLayer}
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.endpointLayer}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Evidence-based conclusion
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.conclusion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function PolicyGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Policy Quality
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Checks Before Changing an Email, Web, or DNS Control
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {policyQualityChecks.map((item) => (
          <div
            key={item.check}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.check}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>
            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.risk}
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
        What Layered Email, Web, and DNS Evidence Can and Cannot Prove
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
        Review a Message-to-Destination Sequence in Six Steps
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
        Layered Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow an Approved Message from Gateway to Browser Validation
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
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EmailWebAndDNSSecurityControlsPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5.6 Email, Web, and DNS Security Controls
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders trace fictional messages, links, attachments, DNS requests, web requests, browser events, endpoint activity, policy actions, user reports, and business context across layered controls.
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
          lessonTitle="Email, Web, and DNS Security Controls"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that passing sender authentication does not automatically prove message safety.",
            "I understand that a DNS query does not prove a successful web visit.",
            "I understand that allow, block, quarantine, rewrite, warn, isolate, release, and report are different control outcomes.",
            "I will preserve fictional message IDs, sender fields, authentication, links, attachments, DNS, web, browser, endpoint, policy, and user-report evidence.",
            "I will use only fictional messages, users, devices, domains, URLs, files, policies, alerts, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Message Can Pass One Control and Still Require Review at Another"
        >
          <p className="leading-8">
            A message can pass sender authentication yet contain an unexpected
            business request. A DNS filter can allow a known platform while the
            exact page remains unusual. A secure web gateway can block a
            destination before the endpoint sees any file. A user can notice a
            context problem that automated tools miss. Layered review connects
            these separate facts without overstating what any one control proves.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Authentication passed, so the message must be safe.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the message, authentication, destination, policy, user,
                endpoint, and business evidence, then classify the full sequence.”
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
          title="Layered Controls Reduce Dependence on Any Single Decision"
        >
          <p className="leading-8">
            Email, DNS, web, browser, endpoint, identity, and user-report
            controls see different parts of the same workflow. Correlating them
            helps defenders identify expected communication, policy violations,
            contained events, false positives, suspicious patterns, and missing
            evidence more accurately.
          </p>
        </SectionCard>

        <LayerGuide />
        <MessageFieldGuide />
        <WebDnsFieldGuide />
        <ActionGuide />
        <ClassificationGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Trace the Sequence Instead of Trusting a Single Verdict"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["Message", "Who sent what to whom, using which domain, link, attachment, and authentication results?"],
              ["Resolution", "Which fictional destination name was requested, and what did the DNS control return?"],
              ["Request", "Which user, device, method, path, response, category, and policy action appeared?"],
              ["Endpoint", "Did a browser warning, download, file, process, or protection action occur?"],
              ["Context", "Does the owner, business workflow, user report, timing, and validation support the conclusion?"],
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

        <ExampleGuide />
        <PolicyGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Email, Web, and DNS Security Terms
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
          title="Fake Layered Messaging and Web Security Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services control environment."
          metrics={[
            {
              label: "Reported messages",
              value: "14",
              note: "Five expected, three policy violations, two false positives, two contained, and two evidence-incomplete reviews.",
            },
            {
              label: "Blocked destinations",
              value: "9",
              note: "Four look-alike domains, two prohibited categories, two newly observed destinations, and one stale category decision.",
            },
            {
              label: "Policy reviews",
              value: "6",
              note: "Two narrow allow corrections, one expired exception, one sender-authentication repair, and two monitoring changes.",
            },
          ]}
        />

        <FakeAlertCard
          title="Trusted Sender Account Delivers an Unexpected Payment Request"
          severity="High"
          time="01:42 PM"
          source="Fake Layered Messaging Security Console"
          details="A fictional message passes sender authentication because it originates from a valid partner account. The recipient, payment request, destination, and timing are unusual. DNS identifies a newly observed payment domain, the secure web gateway blocks submission, no download occurs, and the user reports the message."
          recommendation="Preserve the message and cross-layer evidence, verify the request through an approved independent channel, review the sender account and related recipients, maintain the destination block, avoid broad sender blocking without scope evidence, communicate safely, and monitor for related messages or destinations."
        />

        <FakeLogPanel
          title="Fake Message-to-Web Control Timeline"
          logs={[
            "13:40:00 EMAIL sender='billing@trusted-partner.test' recipient='finance-training@northstar.test' auth='pass'",
            "13:40:02 GATEWAY request='unexpected_payment_update' attachment='none' link_count='1' action='allow'",
            "13:41:10 USER device='finance-laptop-4' action='open_message'",
            "13:41:14 DNS query='new-payment-portal.test' reputation='newly_observed' action='allow_monitor'",
            "13:41:16 WEB user='finance-training' host='new-payment-portal.test' method='GET' action='warn'",
            "13:41:25 WEB method='POST' category='financial-policy' action='block'",
            "13:41:26 ENDPOINT download='none' process='none' browser_warning='displayed'",
            "13:42:00 USER_REPORT message_id='msg-4408' reason='unexpected_payment_request'",
            "13:44:00 OWNER request_validation='not_approved'",
            "13:46:00 REVIEW classification='suspicious_business_request' impact='contained'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Layered Conclusion Is Best Supported?"
          evidence={[
            "The fictional message passes sender authentication.",
            "The payment request is unexpected for the recipient and timing.",
            "The included domain is newly observed.",
            "The secure web gateway warns on the page.",
            "A submission attempt is blocked by financial policy.",
            "No file download or endpoint process appears.",
            "The user reports the message.",
            "The business owner confirms the request was not approved.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The evidence supports a suspicious business-request pattern that was contained before submission, while sender-account and recipient scope still require authorized review.",
            "The message is safe because authentication passed.",
            "The endpoint is definitely compromised because the page was opened.",
            "Every message from the sender domain should be blocked permanently.",
          ]}
          bestAnswer={0}
          explanation="Authentication, business, DNS, web, endpoint, user-report, and owner evidence support a suspicious but contained pattern without proving endpoint compromise or justifying an unlimited sender block."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Layered Email, Web, and DNS Review"
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
          title="Build a Fictional Layered Control Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Message and Destination Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review twenty-four supplied fictional records involving two
                messages, two senders, three recipients, sender-authentication
                results, one attachment, three links, DNS events, web requests,
                browser actions, endpoint events, policy decisions, owner
                records, and user reports.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve message IDs, sender fields, authentication, links, attachment metadata, DNS, web, browser, endpoint, policy, and user-report evidence.</li>
                <li>Trace each fictional sequence from message delivery through destination, endpoint, reporting, and response.</li>
                <li>State what each control directly proves and what remains unknown.</li>
                <li>Classify expected, policy violation, false positive, contained, suspicious, or evidence-incomplete.</li>
                <li>Identify recipients, users, devices, destinations, owners, impact, confidence, and evidence gaps.</li>
                <li>Recommend only narrow authorized policy, communication, protection, and validation actions.</li>
                <li>Document monitoring, exception expiration, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not open real suspicious messages, visit destinations, download attachments, test links, access private mailboxes, change controls, or publish real messages, addresses, domains, URLs, attachments, screenshots, policies, or internal security details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A New Learning Site Is Blocked by the Wrong Category"
          scenario="A fictional teacher submits an approved educational resource. The destination is new and has limited reputation history, but owner, privacy, content, and application evidence support classroom use. The web gateway labels it entertainment."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the original category decision, validate owner, content, privacy, destination, and classroom need, correct only the exact category or destination through approved change control, test approved and disallowed cases, and monitor.",
              outcome:
                "Best defensive choice. Narrow correction restores the workflow without broadly weakening filtering.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow the entire entertainment category.",
              outcome:
                "Unsafe. The change greatly exceeds the approved need.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Tell students to bypass the warning.",
              outcome:
                "Unsafe. Users should not be instructed to bypass security controls.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Authentication Passes but the Business Request Is Unexpected"
          scenario="A fictional message from a valid partner account requests an urgent payment change. The recipient has never handled that workflow, the destination is new, and the owner cannot confirm the request."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the evidence, avoid replying through the message, verify through an approved independent channel, keep destination protections active, review related recipients and sender-account context, and document the result.",
              outcome:
                "Best defensive choice. Passing authentication does not replace business validation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the request because sender authentication passed.",
              outcome:
                "Unsafe. The business request remains unexplained.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all evidence immediately.",
              outcome:
                "Weak response. Evidence preservation and scope review are required.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Email, Web, and DNS Security Controls Checklist"
          items={[
            "I identify fictional sender, recipient, domain, authentication, message ID, links, attachments, user, device, destination, method, path, response, policy, action, and time.",
            "I preserve original message, gateway, DNS, web, browser, endpoint, owner, and user-report evidence.",
            "I understand that passing authentication supports sending authorization but not complete message safety.",
            "I understand that DNS resolution, web allowance, quarantine, rewriting, warning, and reporting have distinct meanings and limits.",
            "I trace redirects and correlate request IDs, users, devices, destinations, and timestamps across layers.",
            "I classify expected communication, policy violation, false positive, contained event, suspicious pattern, or evidence-incomplete activity.",
            "I use narrow exceptions and avoid broad sender, domain, category, application, file-type, or user-group allow lists.",
            "I validate positive and negative cases, privacy, business function, rollback, monitoring, and exception expiration.",
            "I treat user reports as valuable context even when automated controls allowed the activity.",
            "I use only fictional evidence and never publish real messages, addresses, domains, URLs, attachments, recipients, screenshots, policies, or internal security details.",
          ]}
        />

        <MiniQuiz
          title="I5.6 Mini Quiz: Email, Web, and DNS Security Controls"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Layered Email, Web, and DNS Control Review containing at least thirty message, gateway, authentication, attachment, URL, DNS, proxy, web, browser, endpoint, identity, owner, policy, user-report, and validation records. Include message IDs, senders, recipients, domains, authentication, links, redirect chains, attachment metadata, destinations, methods, paths, responses, categories, reputation, policy actions, users, devices, request IDs, timelines, classifications, confidence, impact, false positives, false-negative risks, narrow control changes, approval, rollback, testing, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional messages, users, devices, domains, URLs, attachments, destinations, policies, tickets, and organizations.",
            "Include one expected business message, one category false positive, one contained look-alike domain, one quarantined attachment, and one trusted-account business-request concern.",
            "Clearly separate what the email, DNS, web, browser, endpoint, owner, and user-report layers prove.",
            "Do not include real messages, addresses, domains, URLs, files, screenshots, policies, or internal security details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Layered controls observe different parts of the message-to-destination workflow.",
            "Passing sender authentication does not prove complete message or business-request safety.",
            "A DNS query, allowed web request, quarantined file, warning, or report each has a specific evidence meaning and limitation.",
            "Strong review preserves original message, policy, DNS, web, browser, endpoint, owner, and user-report evidence.",
            "False-positive correction and approved exceptions should be narrow, tested, reversible, monitored, and time-limited.",
            "Defensive conclusions should combine technical controls with identity, ownership, business purpose, impact, and residual risk.",
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