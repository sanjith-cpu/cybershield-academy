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
const modulePath = `${trackPath}/email-security-and-phishing-defense`;
const previousLesson = `${modulePath}/email-security-controls-and-filtering`;
const nextLesson = `${modulePath}/email-security-and-phishing-defense-lab`;

const objectives = [
  "Explain how fictional message traces, headers, authentication records, gateway actions, URL events, attachment verdicts, mailbox events, user reports, identity activity, and business records contribute to an email investigation.",
  "Build a defensible fictional timeline that separates message creation, transport, filtering, delivery, mailbox activity, user interaction, account activity, containment, validation, and closure.",
  "Distinguish direct evidence, reasonable conclusions, alternative explanations, confidence limits, and missing evidence.",
  "Classify fictional email cases without confusing suspicious messages, confirmed phishing, user interaction, account compromise, device activity, and business impact.",
  "Create a professional fictional Email Investigation Report with scope, evidence, findings, actions, owners, validation, monitoring, residual risk, and closure criteria.",
];

const vocabulary = [
  [
    "Message trace",
    "A fictional delivery record showing how a message moved through mail systems, security controls, recipients, folders, and final delivery states.",
  ],
  [
    "Correlation identifier",
    "A fictional message ID, event ID, case ID, URL ID, attachment ID, session ID, or other value used to connect related records.",
  ],
  [
    "Header evidence",
    "Fictional metadata describing sender fields, routing, timestamps, message identifiers, authentication, and transport handling.",
  ],
  [
    "Gateway event",
    "A fictional record of an email-security decision such as allow, warn, quarantine, reject, rewrite, hold, or reclassify.",
  ],
  [
    "Mailbox event",
    "A fictional action such as delivery, read, move, delete, reply, forward, report, restore, or quarantine.",
  ],
  [
    "URL event",
    "A fictional record showing link evaluation, redirect analysis, click handling, block, warning, or destination verdict.",
  ],
  [
    "Attachment event",
    "A fictional record showing file inspection, content type, structure, verdict, quarantine, release, download, or open state.",
  ],
  [
    "Identity event",
    "A fictional sign-in, MFA, factor, recovery, session, device, or account-change record.",
  ],
  [
    "Evidence gap",
    "A fictional source, time range, identifier, record, owner statement, or system view that is missing or incomplete.",
  ],
  [
    "Timeline",
    "An ordered fictional sequence that connects message, control, user, account, application, business, response, and validation events.",
  ],
  [
    "Finding",
    "A documented fictional conclusion supported by cited evidence, confidence, impact, owner, and required action.",
  ],
  [
    "Closure criteria",
    "The fictional evidence and approvals required before an investigation can be responsibly closed.",
  ],
];

const logSources = [
  {
    source: "Message trace",
    records:
      "Fictional sender, recipients, message ID, route, timestamps, delivery result, folder, delay, quarantine, and rejection.",
    bestUse:
      "Confirm whether a message entered the environment, who received it, which controls acted, and where it ended.",
    limitation:
      "A trace does not by itself prove that a user viewed, clicked, replied, opened a file, or experienced impact.",
  },
  {
    source: "Message headers",
    records:
      "Fictional display address, envelope sender, Reply-To, return path, Received fields, message IDs, SPF, DKIM, DMARC, and routing details.",
    bestUse:
      "Compare sender identities, delivery path, authentication, timing, and reply redirection.",
    limitation:
      "Headers require context because legitimate forwarding, mailing, cloud, and security services can create complex paths.",
  },
  {
    source: "Email-security gateway",
    records:
      "Fictional reputation, policy matches, risk score, warning, quarantine, reject, link rewrite, attachment verdict, and post-delivery action.",
    bestUse:
      "Explain why the message was allowed, warned, held, blocked, or later reclassified.",
    limitation:
      "A tool decision reflects available evidence and policy at a specific time, not complete proof of legitimacy or impact.",
  },
  {
    source: "Mailbox audit",
    records:
      "Fictional delivery, read state, folder move, delete, reply, forward, report, restore, rule, delegation, and access events.",
    bestUse:
      "Determine how the message was handled inside the recipient mailbox.",
    limitation:
      "Preview panes, synchronization, mobile clients, and incomplete logging can make read or action state uncertain.",
  },
  {
    source: "URL protection",
    records:
      "Fictional original URL, rewritten URL, redirect chain, destination verdict, click time, user, device, block, warning, and reclassification.",
    bestUse:
      "Connect message content to destination evidence and possible user interaction.",
    limitation:
      "A click event does not automatically prove credential entry, compromise, or business impact.",
  },
  {
    source: "Attachment security",
    records:
      "Fictional file name, content type, structure, verdict, hash label, quarantine, release, download, open, and behavior analysis.",
    bestUse:
      "Explain how a file was classified and whether it reached or was accessed by a user.",
    limitation:
      "A verdict can be wrong or incomplete, and download, open, active-content use, and execution are separate stages.",
  },
  {
    source: "Identity provider",
    records:
      "Fictional sign-ins, failures, MFA, factors, sessions, devices, recovery, password reset, token, and risk events.",
    bestUse:
      "Review whether message interaction is followed by suspicious account or session activity.",
    limitation:
      "Identity activity may have another cause and must be correlated by user, time, device, session, and business context.",
  },
  {
    source: "Business and user evidence",
    records:
      "Fictional user report, vendor confirmation, payment records, project context, payroll status, owner approval, and transaction history.",
    bestUse:
      "Determine whether the sender, request, resource, transaction, or claimed business purpose is legitimate.",
    limitation:
      "Human statements and business records should be preserved and correlated with technical evidence.",
  },
];


const eventFields = [
  {
    field: "Timestamp and time zone",
    purpose:
      "Place the fictional event in the correct order and normalize records from different systems.",
    review:
      "Check local time, UTC conversion, daylight saving, clock differences, delayed ingestion, and event-generation time.",
    mistake:
      "Ordering events by display order without confirming the actual timestamp and time zone.",
  },
  {
    field: "User or mailbox",
    purpose:
      "Identify which fictional recipient, sender, shared mailbox, delegate, or account is connected to the event.",
    review:
      "Compare primary address, aliases, shared mailboxes, forwarding, delegation, and account ownership.",
    mistake:
      "Assuming the displayed address always identifies the human who performed the action.",
  },
  {
    field: "Message identifier",
    purpose:
      "Connect fictional headers, trace, gateway, mailbox, URL, attachment, and case records.",
    review:
      "Compare message ID, network message ID, trace ID, case ID, and related-message identifiers.",
    mistake:
      "Merging unrelated messages because they share a subject or sender name.",
  },
  {
    field: "Source system",
    purpose:
      "Show which fictional tool created the record and what that tool can observe.",
    review:
      "Document data coverage, retention, collection delay, field meaning, and access limitations.",
    mistake:
      "Treating all sources as if they observe the same stage of the message journey.",
  },
  {
    field: "Action",
    purpose:
      "Record what the fictional system or user did, such as allow, deliver, report, click, block, reset, or revoke.",
    review:
      "Separate attempted, requested, completed, failed, denied, reversed, and validated actions.",
    mistake:
      "Treating a requested action as completed impact.",
  },
  {
    field: "Result or status",
    purpose:
      "Show whether the fictional event succeeded, failed, was blocked, remained pending, or was later changed.",
    review:
      "Compare original result, later reclassification, retry, rollback, and final state.",
    mistake:
      "Ignoring that a verdict or transaction status can change after the first event.",
  },
  {
    field: "Device, address, or session",
    purpose:
      "Connect fictional mailbox, browser, identity, endpoint, and application activity.",
    review:
      "Compare device label, network address, client, session ID, user agent, and known baseline.",
    mistake:
      "Assuming one shared address or device label uniquely identifies a physical person.",
  },
  {
    field: "Business object",
    purpose:
      "Connect fictional messages to invoices, vendors, payroll records, documents, accounts, tickets, projects, or transactions.",
    review:
      "Compare object ID, owner, amount, status, approval, system of record, and expected workflow.",
    mistake:
      "Investigating only technical events while ignoring whether the requested business action changed.",
  },
];

const investigationQuestions = [
  {
    question: "Was the fictional message delivered?",
    evidence:
      "Message trace, final delivery state, recipient list, quarantine state, folder, gateway action, and mailbox record.",
    strongConclusion:
      "State exactly which recipients and delivery states are confirmed.",
    weakConclusion:
      "Assume every addressed recipient received the same message in the inbox.",
  },
  {
    question: "Did the recipient view or report it?",
    evidence:
      "Mailbox events, client data, report-phishing event, user statement, preview behavior, and timestamp.",
    strongConclusion:
      "Separate delivered, previewed, opened, reported, deleted, and unknown states.",
    weakConclusion:
      "Treat delivered as opened or read-state as proof of user understanding.",
  },
  {
    question: "Was a link visited?",
    evidence:
      "URL-protection click record, redirect event, browser event, device, user, timestamp, and destination result.",
    strongConclusion:
      "State whether a click is confirmed and what destination evidence exists.",
    weakConclusion:
      "Treat a link inside the message as proof of a click.",
  },
  {
    question: "Was an attachment accessed?",
    evidence:
      "Attachment delivery, download, open, application, endpoint, sandbox, and user evidence.",
    strongConclusion:
      "Separate attachment presence, delivery, download, open, active-content use, and execution.",
    weakConclusion:
      "Treat message opening as attachment opening.",
  },
  {
    question: "Was information entered or an account affected?",
    evidence:
      "Identity sign-ins, sessions, MFA, recovery, factor changes, browser or application activity, and user statement.",
    strongConclusion:
      "Connect the account activity by user, time, device, session, and destination evidence.",
    weakConclusion:
      "Assume a click automatically caused account compromise.",
  },
  {
    question: "Did a business process change?",
    evidence:
      "Payment, payroll, vendor, document, data, permission, approval, ticket, and system-of-record evidence.",
    strongConclusion:
      "State the exact confirmed transaction or resource state.",
    weakConclusion:
      "Treat a request for change as proof that the change occurred.",
  },
  {
    question: "What was contained or recovered?",
    evidence:
      "Quarantine, block, message recall, session revocation, password reset, factor review, mailbox-rule removal, and record restoration.",
    strongConclusion:
      "Document action, owner, scope, time, result, and validation.",
    weakConclusion:
      "Assume an action succeeded because it was requested.",
  },
  {
    question: "What remains unknown?",
    evidence:
      "Missing logs, retention gaps, unavailable devices, unverified users, incomplete time ranges, and unsupported assumptions.",
    strongConclusion:
      "State the gap, risk, confidence, temporary control, owner, and decision criteria.",
    weakConclusion:
      "Hide uncertainty or replace missing evidence with certainty.",
  },
];

const evidenceMatrix = [
  {
    source: "Message trace and headers",
    supports:
      "The fictional sender identities, route, authentication, recipients, gateway path, timestamps, and delivery state.",
    limitation:
      "These sources do not directly prove user interaction, account activity, or business impact.",
  },
  {
    source: "Gateway and security verdicts",
    supports:
      "The fictional risk, policy, warning, quarantine, link, attachment, and post-delivery decisions.",
    limitation:
      "Verdicts can be incomplete, wrong, delayed, or updated after delivery.",
  },
  {
    source: "Mailbox audit",
    supports:
      "The fictional delivery, read, move, reply, forward, report, rule, delegation, and access events.",
    limitation:
      "Some client behavior and user intent may remain uncertain.",
  },
  {
    source: "URL and attachment events",
    supports:
      "The fictional destination, file, click, download, open, block, warning, and analysis results.",
    limitation:
      "Interaction with content does not automatically prove compromise or impact.",
  },
  {
    source: "Identity and session records",
    supports:
      "The fictional sign-in, MFA, factor, recovery, token, session, device, and account-change activity.",
    limitation:
      "Related activity must be connected by identifiers, time, user, device, and context.",
  },
  {
    source: "Endpoint or application records",
    supports:
      "The fictional browser, process, file, application, data, permission, and device activity after message interaction.",
    limitation:
      "Coverage, retention, device state, and collection delay can create gaps.",
  },
  {
    source: "User and owner reports",
    supports:
      "The fictional recipient’s actions and the claimed sender, vendor, teacher, administrator, or business owner’s confirmation.",
    limitation:
      "Human memory and informal confirmation require technical and documentary correlation.",
  },
  {
    source: "Business-system records",
    supports:
      "The fictional invoice, payment, payroll, document, data, account, approval, ticket, and transaction state.",
    limitation:
      "System state may not explain intent or identify the person behind a message.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the scope",
    detail:
      "Record the fictional message, recipients, sender, time range, systems, business request, reported interaction, and initial question.",
  },
  {
    step: "2",
    title: "Preserve and normalize evidence",
    detail:
      "Collect fictional trace, headers, gateway, mailbox, URL, attachment, identity, endpoint, application, user, and business records with normalized time.",
  },
  {
    step: "3",
    title: "Build the timeline",
    detail:
      "Order fictional creation, transport, filtering, delivery, interaction, account, business, response, recovery, and validation events.",
  },
  {
    step: "4",
    title: "Separate facts and conclusions",
    detail:
      "Document what each source directly proves, what is reasonably inferred, which alternatives remain, and what evidence is missing.",
  },
  {
    step: "5",
    title: "Contain and investigate impact",
    detail:
      "Apply narrow approved quarantine, blocking, transaction holds, account review, session action, user notification, and business verification.",
  },
  {
    step: "6",
    title: "Validate and close",
    detail:
      "Confirm communication, account, device, application, transaction, owner, monitoring, evidence-gap, residual-risk, and closure requirements.",
  },
];


const classifications = [
  {
    classification: "Expected message",
    meaning:
      "The fictional sender, delivery, request, business process, and independent verification match the expected relationship.",
    documentation:
      "Record the verified sender, message purpose, recipients, supporting evidence, owner, and any remaining limitation.",
  },
  {
    classification: "Suspicious message",
    meaning:
      "The fictional message contains meaningful sender, content, destination, file, timing, or process concerns without confirmed harmful intent or impact.",
    documentation:
      "Preserve the evidence, identify the concerns, assign an owner, verify independently, and state confidence and gaps.",
  },
  {
    classification: "Confirmed phishing message",
    meaning:
      "The fictional evidence supports impersonation, deceptive content, an unauthorized destination, a misleading file, or another intentional attempt to influence the recipient.",
    documentation:
      "Record the message, sender, destination or file, affected recipients, control actions, user interaction, and verification evidence.",
  },
  {
    classification: "Confirmed user interaction",
    meaning:
      "The fictional evidence supports a reply, click, download, attachment open, QR scan, information entry, approval, or other recipient action.",
    documentation:
      "Record the exact action, user, time, device, session, destination or file, result, and evidence limitation.",
  },
  {
    classification: "Confirmed account or device concern",
    meaning:
      "The fictional evidence supports suspicious sign-in, session, factor, recovery, mailbox rule, browser, process, file, or device activity connected to the case.",
    documentation:
      "Record the connected identifiers, timeline, owner, containment, recovery, validation, and alternative explanations.",
  },
  {
    classification: "Confirmed business impact",
    meaning:
      "The fictional evidence supports a payment, payroll, document, data, permission, vendor, account, or other measurable business change.",
    documentation:
      "Record the system-of-record state, owners, approvals, amount or scope, reversal or recovery, and validation.",
  },
  {
    classification: "False positive or legitimate exception",
    meaning:
      "The fictional message or event appears suspicious but is supported by trusted sender, owner, process, system, and verification evidence.",
    documentation:
      "Explain why the case is legitimate, identify any control-tuning need, and preserve monitoring and future-review criteria.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional message, user, account, device, application, business, or validation evidence is insufficient for a reliable conclusion.",
    documentation:
      "State the missing evidence, confidence, temporary control, owner, due date, and decision criteria.",
  },
];

const timeline = [
  {
    time: "14:06:02",
    source: "Message trace",
    event:
      "A fictional message with subject “Shared Benefits Document” is accepted for four recipients.",
    meaning:
      "Establishes the message identifier, recipient scope, and entry into the mail environment.",
  },
  {
    time: "14:06:05",
    source: "Authentication",
    event:
      "The fictional message passes SPF and DKIM for northstar-benefits.example and passes DMARC for that visible domain.",
    meaning:
      "Shows the observed external domain authenticated its own message.",
  },
  {
    time: "14:06:08",
    source: "Gateway",
    event:
      "The message is allowed with an external-sender banner because the destination has no known negative reputation.",
    meaning:
      "Explains the initial control decision and its evidence limits.",
  },
  {
    time: "14:06:11",
    source: "Mailbox",
    event:
      "The message is delivered to three inboxes and one quarantine because a recipient-specific policy differs.",
    meaning:
      "Shows recipients can have different delivery states for the same campaign.",
  },
  {
    time: "14:10:20",
    source: "User report",
    event:
      "Recipient A reports the message and states that the document button was not used.",
    meaning:
      "Provides user evidence that still requires mailbox and URL correlation.",
  },
  {
    time: "14:11:03",
    source: "Mailbox audit",
    event:
      "Recipient A has a message-open event followed by a report-phishing event and no reply or forward.",
    meaning:
      "Separates viewing and reporting from link or attachment interaction.",
  },
  {
    time: "14:12:44",
    source: "URL protection",
    event:
      "Recipient B has a fictional click event for the rewritten document link.",
    meaning:
      "Confirms destination interaction for one recipient, not credential entry or account impact.",
  },
  {
    time: "14:12:46",
    source: "Destination",
    event:
      "The fictional link redirects to benefits-access.example and presents a login form unrelated to the approved provider.",
    meaning:
      "Supports a deceptive destination finding.",
  },
  {
    time: "14:13:10",
    source: "URL protection",
    event:
      "The destination verdict changes from unknown to suspicious and later clicks are blocked.",
    meaning:
      "Shows why post-delivery action is required after new evidence appears.",
  },
  {
    time: "14:14:00",
    source: "Identity provider",
    event:
      "Recipient B has one failed fictional sign-in from a new browser, followed by a successful sign-in from the known managed device.",
    meaning:
      "Creates an account question but does not by itself prove credential compromise.",
  },
  {
    time: "14:15:30",
    source: "User interview",
    event:
      "Recipient B states that the link was opened but no credentials or MFA code were entered.",
    meaning:
      "Provides an explanation that must be compared with browser and identity evidence.",
  },
  {
    time: "14:17:00",
    source: "Business verification",
    event:
      "The fictional Human Resources owner confirms that no benefits document was shared and the approved provider uses a different domain.",
    meaning:
      "Supports an unauthorized sender and request.",
  },
  {
    time: "14:19:00",
    source: "Related-message search",
    event:
      "The fictional environment finds eleven related messages using the same sender, subject, and destination pattern.",
    meaning:
      "Expands the campaign scope beyond the original four recipients.",
  },
  {
    time: "14:22:00",
    source: "Containment",
    event:
      "The related messages are quarantined and the narrow destination pattern is blocked.",
    meaning:
      "Reduces further exposure while preserving evidence.",
  },
  {
    time: "14:26:00",
    source: "Identity review",
    event:
      "No fictional password reset, factor change, recovery event, new persistent session, or application change is found for Recipient B.",
    meaning:
      "Limits the evidence for confirmed account compromise.",
  },
  {
    time: "14:31:00",
    source: "Browser review",
    event:
      "The fictional managed device records the destination visit but no form-submission event or downloaded file.",
    meaning:
      "Supports a click without confirmed information entry or file activity.",
  },
  {
    time: "14:38:00",
    source: "Case finding",
    event:
      "The investigator classifies the message as confirmed phishing, Recipient B as confirmed click, and account impact as not confirmed.",
    meaning:
      "Separates message, user-interaction, and impact conclusions.",
  },
  {
    time: "Day 2",
    source: "Validation",
    event:
      "Legitimate benefits communication remains available, the deceptive destination stays blocked, and no new related account activity appears.",
    meaning:
      "Completes communication, control, account, and monitoring validation.",
  },
];

const closureChecks = [
  {
    area: "Message scope",
    requirement:
      "Confirm all fictional related senders, subjects, recipients, message IDs, destinations, files, and delivery states were searched.",
    evidence:
      "Search criteria, result count, recipient list, quarantine state, and unresolved gaps.",
  },
  {
    area: "User interaction",
    requirement:
      "Confirm fictional view, report, reply, click, download, open, information-entry, approval, and unknown states for affected recipients.",
    evidence:
      "Mailbox, URL, attachment, browser, user-report, and endpoint records.",
  },
  {
    area: "Identity and device",
    requirement:
      "Confirm fictional sign-ins, sessions, MFA, factors, recovery, mailbox rules, browser activity, files, and device alerts were reviewed.",
    evidence:
      "Identity, mailbox, endpoint, application, and owner-validation records.",
  },
  {
    area: "Business impact",
    requirement:
      "Confirm fictional payment, payroll, vendor, document, data, permission, account, ticket, and approval states.",
    evidence:
      "Systems of record, business owners, transaction logs, and restoration evidence.",
  },
  {
    area: "Containment and recovery",
    requirement:
      "Confirm fictional quarantine, destination or file blocking, session action, credential recovery, rule removal, transaction hold, and notification results.",
    evidence:
      "Action logs, owner, timestamp, status, rollback, and validation.",
  },
  {
    area: "Legitimate communication",
    requirement:
      "Confirm required fictional benefits, vendor, school, project, and account messages still deliver through approved paths.",
    evidence:
      "Positive tests, owner confirmation, delivery traces, and user validation.",
  },
  {
    area: "Monitoring",
    requirement:
      "Confirm fictional alerts, searches, recipient review, account monitoring, and exception review continue for the defined period.",
    evidence:
      "Monitoring owner, rule, frequency, duration, escalation path, and result.",
  },
  {
    area: "Residual risk and approval",
    requirement:
      "Document fictional evidence gaps, confidence, accepted uncertainty, remaining risk, accountable owners, and closure approval.",
    evidence:
      "Final report, owner acceptance, due dates, follow-up tasks, and closure record.",
  },
];

const commonMistakes = [
  "Using only the fictional alert title instead of reviewing the raw trace, headers, policy, URL, attachment, mailbox, identity, and business evidence.",
  "Combining unrelated messages because their subjects or display names look similar without matching correlation identifiers.",
  "Failing to normalize timestamps and time zones before building the timeline.",
  "Treating delivery as proof of message viewing, link clicking, attachment opening, or impact.",
  "Treating a click as automatic proof of credential entry, account compromise, or data loss.",
  "Treating one failed sign-in after a click as proof that the destination collected credentials.",
  "Ignoring legitimate explanations such as forwarding, shared mailboxes, mobile clients, scheduled sign-ins, and tool delays.",
  "Failing to review systems of record for payment, payroll, vendor, document, data, account, and approval changes.",
  "Recording conclusions without citing the exact fictional source, event, identifier, time, and limitation.",
  "Hiding missing evidence instead of documenting confidence, temporary controls, owners, and decision criteria.",
  "Closing after quarantine or password reset without validating sessions, factors, mailbox rules, related recipients, business state, and legitimate communication.",
  "Publishing real messages, headers, addresses, users, devices, sessions, links, files, screenshots, or confidential business records.",
];

const quizQuestions = [
  {
    question:
      "What is the primary purpose of a correlation identifier?",
    choices: [
      "Connect fictional records that describe the same message, URL, file, user, session, or case.",
      "Prove the physical sender’s identity.",
      "Replace timestamps.",
      "Automatically classify every message as phishing.",
    ],
    answer: 0,
    explanation:
      "Identifiers help investigators connect evidence across systems without merging unrelated events.",
  },
  {
    question:
      "What does a message trace most directly support?",
    choices: [
      "The fictional delivery route, recipients, control actions, and final delivery state.",
      "Proof that a user entered credentials.",
      "Proof that an account was compromised.",
      "Proof that a transaction changed.",
    ],
    answer: 0,
    explanation:
      "A trace focuses on mail movement and delivery, not complete downstream impact.",
  },
  {
    question:
      "Why should timestamps be normalized?",
    choices: [
      "Fictional systems may record different time zones, clock values, and ingestion delays.",
      "Every system uses the same local time.",
      "Normalization proves user intent.",
      "It removes the need for correlation identifiers.",
    ],
    answer: 0,
    explanation:
      "A reliable sequence requires a common time basis and awareness of source timing limitations.",
  },
  {
    question:
      "A fictional URL log confirms a click. What is the strongest direct conclusion?",
    choices: [
      "The recorded user or device visited the linked destination at the recorded time.",
      "Credentials were definitely entered.",
      "The account was definitely compromised.",
      "A payment was completed.",
    ],
    answer: 0,
    explanation:
      "A click is an interaction event; later actions require additional evidence.",
  },
  {
    question:
      "Which source best confirms whether a requested vendor payment change actually occurred?",
    choices: [
      "The fictional vendor and payment systems of record.",
      "The email subject line.",
      "The display name.",
      "The gateway risk score.",
    ],
    answer: 0,
    explanation:
      "Business impact must be verified in the system that records the real transaction state.",
  },
  {
    question:
      "What is the strongest way to handle missing evidence?",
    choices: [
      "Document the gap, confidence, risk, temporary control, owner, due date, and decision criteria.",
      "Assume the safest conclusion is true.",
      "Delete the case.",
      "Replace the missing record with a guess.",
    ],
    answer: 0,
    explanation:
      "Professional investigation makes uncertainty visible and manageable.",
  },
  {
    question:
      "Which closure plan is strongest?",
    choices: [
      "Validate message scope, user interaction, identity and device state, business impact, containment, legitimate communication, monitoring, residual risk, and owner approval.",
      "Close when the alert disappears.",
      "Close after the message is deleted.",
      "Close after one user says they are fine.",
    ],
    answer: 0,
    explanation:
      "Closure requires technical, user, business, monitoring, and governance evidence.",
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


function LogSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Sources
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sources in an Email Investigation
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {logSources.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.source}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Records
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.records}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Best use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.bestUse}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
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

function EventFieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Event Anatomy
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Fields That Make Logs Useful
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {eventFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Review
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.review}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Common mistake
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.mistake}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InvestigationQuestionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Investigation Questions
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions That Prevent Overclaiming
      </h2>

      <div className="mt-6 grid gap-5">
        {investigationQuestions.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.question}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong conclusion
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongConclusion}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak conclusion
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakConclusion}
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
        What Each Source Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
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

function ClassificationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Classification
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Conclusions with Different Evidence Requirements
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {classifications.map((item) => (
          <div
            key={item.classification}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.classification}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Required documentation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.documentation}
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
        Investigate Email Evidence in Six Steps
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
        Correlated Investigation Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Benefits Message from Delivery to Closure
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

function ClosureGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Closure Requirements
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Areas to Validate Before Closing
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {closureChecks.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.area}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.requirement}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Closure evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function EmailLogsAlertsAndInvestigationPage() {
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
              Module I7
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.7 Email Logs, Alerts, and Investigation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders correlate fictional message traces, headers,
            gateway decisions, mailbox events, URL records, attachment
            verdicts, identity activity, user reports, business systems,
            containment, validation, and evidence gaps into one defensible
            investigation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I7: Email Security and Phishing Defense"
          lessonTitle="Email Logs, Alerts, and Investigation"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional alerts summarize evidence but do not replace the raw message, trace, mailbox, URL, attachment, identity, and business records.",
            "I will normalize timestamps, match correlation identifiers, and document each source’s visibility and limitation.",
            "I will separate message delivery, viewing, reporting, clicking, opening, information entry, account activity, device activity, and business impact.",
            "I will state confirmed facts, reasonable conclusions, alternative explanations, confidence, and missing evidence.",
            "I will use only fictional messages, logs, users, accounts, devices, links, files, vendors, systems, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="One Alert Is the Beginning of the Investigation, Not the Final Answer"
        >
          <p className="leading-8">
            A fictional alert may say “credential phishing,” “user clicked,” or
            “account risk.” The investigator still needs to determine which
            message reached which recipient, what the user actually did, which
            destination or file was involved, whether account or business state
            changed, what was contained, and what remains unknown.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The fictional alert says the user clicked, so the account is
                compromised.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Confirm the click, identify the final destination, review
                browser and identity activity, verify business state, and state
                exactly what the evidence does and does not prove.”
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
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Accurate Investigation Protects Users and Prevents Unsupported Claims"
        >
          <p className="leading-8">
            Overstating impact can create unnecessary account resets, business
            disruption, fear, and inaccurate reporting. Understating impact can
            leave unsafe sessions, changed payment details, mailbox rules,
            affected recipients, or deceptive content uncontained. Strong
            investigation connects technical evidence with user and business
            evidence and makes uncertainty visible.
          </p>
        </SectionCard>

        <LogSourceGuide />
        <EventFieldGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Build Five Separate Conclusions"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Message",
                "Is the fictional communication expected, suspicious, confirmed phishing, legitimate, or evidence incomplete?",
              ],
              [
                "Interaction",
                "Was it delivered, viewed, reported, replied to, clicked, downloaded, opened, or used to enter information?",
              ],
              [
                "Account or device",
                "Did any fictional sign-in, session, factor, recovery, browser, file, process, or device state change?",
              ],
              [
                "Business impact",
                "Did any fictional payment, payroll, data, document, permission, vendor, or approval state change?",
              ],
              [
                "Response",
                "Which fictional containment, recovery, validation, monitoring, owner, and closure actions are confirmed?",
              ],
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

        <InvestigationQuestionGuide />
        <EvidenceGuide />
        <ClassificationGuide />
        <WorkflowGuide />
        <TimelineGuide />
        <ClosureGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Email Investigation Terms
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
          title="Fake Email Investigation Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services email environment."
          metrics={[
            {
              label: "Open investigations",
              value: "9",
              note: "Fictional suspicious messages, confirmed phishing, user-click cases, account reviews, false positives, and evidence gaps.",
            },
            {
              label: "Evidence sources",
              value: "8",
              note: "Trace, headers, gateway, mailbox, URL, attachment, identity, and business or user evidence.",
            },
            {
              label: "Pending gaps",
              value: "4",
              note: "Two unavailable device records, one incomplete user interview, and one business-system retention gap.",
            },
          ]}
        />

        <FakeAlertCard
          title="Benefits Message Click Confirmed, Account Impact Not Confirmed"
          severity="High"
          time="02:12 PM"
          source="Fake Email Investigation Console"
          details="A fictional benefits message redirects to an unrelated login page. Recipient B has a confirmed URL click and browser visit. The user reports entering no information, and the reviewed identity records show no password reset, factor change, recovery event, persistent new session, or application change."
          recommendation="Preserve the full message and timeline, quarantine related messages, block the narrow destination pattern, review all recipient interactions, correlate browser and identity evidence, verify the business owner, document the account-evidence limitation, monitor for delayed activity, and validate legitimate benefits communication."
        />

        <FakeLogPanel
          title="Fake Benefits-Message Investigation Timeline"
          logs={[
            "14:06:02 TRACE recipients='4' subject='Shared Benefits Document'",
            "14:06:05 AUTH domain='northstar-benefits.example' dmarc='pass'",
            "14:06:08 GATEWAY action='allow_with_external_banner' url_verdict='unknown'",
            "14:06:11 DELIVERY inbox='3' quarantine='1'",
            "14:10:20 USER_REPORT recipient='A' clicked='false'",
            "14:11:03 MAILBOX recipient='A' opened='true' reported='true'",
            "14:12:44 URL_CLICK recipient='B' destination='benefits-access.example'",
            "14:12:46 DESTINATION page='unapproved_login_form'",
            "14:13:10 RECLASSIFY url_verdict='suspicious' future_clicks='blocked'",
            "14:14:00 IDENTITY recipient='B' failed_new_browser='1' persistent_session='0'",
            "14:15:30 USER_INTERVIEW credentials_entered='denied'",
            "14:17:00 VERIFY hr_request='not_authorized' approved_provider='different_domain'",
            "14:19:00 SEARCH related_messages='11'",
            "14:22:00 CONTAIN quarantine='11' destination_block='active'",
            "14:26:00 IDENTITY_REVIEW factor_changes='0' recovery_events='0'",
            "14:31:00 BROWSER form_submission='none' downloads='0'",
            "14:38:00 FINDING message='confirmed_phishing' click='confirmed' account_impact='not_confirmed'",
            "DAY2 VALIDATION legitimate_benefits_mail='working' new_related_activity='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Investigation Conclusion Is Best Supported?"
          evidence={[
            "The fictional message uses an unapproved benefits domain.",
            "The final destination presents a login form unrelated to the approved provider.",
            "Recipient B has a confirmed URL click and browser visit.",
            "The user states that no credentials or MFA code were entered.",
            "No form-submission event is found on the managed browser.",
            "One failed sign-in occurs from a new browser near the click time.",
            "No password reset, factor change, recovery event, persistent new session, or application change is found.",
            "Human Resources confirms no benefits document was shared.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The message is confirmed phishing and Recipient B completed a link click, while the reviewed evidence does not confirm credential entry or account compromise.",
            "The account is definitely compromised because one failed sign-in occurred.",
            "The message is safe because no persistent session was found.",
            "Recipient B did not click because no account change occurred.",
          ]}
          bestAnswer={0}
          explanation="Sender, destination, and owner evidence support phishing; URL and browser evidence support a click; identity and form evidence do not establish credential entry or confirmed account compromise."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Email Investigations"
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
          title="Build a Fictional Email Investigation Timeline"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Email Investigation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty supplied fictional records covering trace,
                headers, authentication, gateway decisions, mailbox events, URL
                activity, attachment verdicts, identity sessions, browser
                records, user reports, business systems, containment, recovery,
                validation, monitoring, and evidence gaps.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define the fictional message, recipient, sender, time, system, and business scope.</li>
                <li>Normalize timestamps and match message, URL, attachment, user, device, session, case, and business identifiers.</li>
                <li>Build one timeline from creation through transport, filtering, delivery, interaction, account review, business review, containment, recovery, and validation.</li>
                <li>Separate confirmed facts, reasonable conclusions, alternative explanations, confidence, and missing evidence.</li>
                <li>Classify the message, each recipient’s interaction, account or device concern, business impact, and response outcome separately.</li>
                <li>Create findings with cited evidence, owners, actions, validation, monitoring, and residual risk.</li>
                <li>Write closure criteria and explain which gaps must remain open or be accepted by an accountable owner.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real mailboxes,
            accounts, devices, logs, links, files, messages, business systems,
            or private data. Do not click suspicious destinations, open
            attachments, request credentials, change real controls, or publish
            real headers, addresses, users, sessions, screenshots, or
            confidential records.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A URL Alert Confirms a Click but Identity Evidence Is Mixed"
          scenario="A fictional URL-protection record confirms that a recipient visited a deceptive login page. The user says no information was entered. One failed sign-in appears afterward, but no factor, recovery, session, or application change is found."
          choices={[
            {
              label: "Choice A",
              response:
                "Classify the click as confirmed, preserve the mixed account evidence, review the device and identity timeline, apply approved monitoring and recovery decisions based on risk, and state that account compromise is not yet confirmed.",
              outcome:
                "Best defensive choice. It responds to the risk without turning incomplete evidence into certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the account compromised because a failed sign-in occurred.",
              outcome:
                "Overstated. The failed sign-in may be related, but additional correlation is required.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the case because no persistent session was found.",
              outcome:
                "Incomplete. The confirmed phishing and click still require containment, review, monitoring, and closure evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A User Says They Never Opened the Message, but Mailbox Data Shows Read"
          scenario="A fictional recipient reports deleting a message without opening it. The mailbox audit shows a read-state event, but the client uses a preview pane and there are no URL, attachment, reply, or account events."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the read-state event and preview-pane limitation, classify link and attachment interaction as not confirmed, preserve the user report, and continue only the evidence-based review required by the message risk.",
              outcome:
                "Best defensive choice. It explains the apparent conflict without accusing the user or overstating interaction.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the user is lying because the message is marked read.",
              outcome:
                "Unsupported. Read-state can be affected by client behavior and does not prove intentional opening.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume every link and attachment was opened because the message is marked read.",
              outcome:
                "Incorrect. Those actions require separate evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Email Logs, Alerts, and Investigation Checklist"
          items={[
            "I define the fictional sender, recipients, message, time range, systems, reported interaction, and business question.",
            "I preserve trace, headers, gateway, mailbox, URL, attachment, identity, endpoint, application, user, owner, and business evidence.",
            "I normalize time zones and match message, URL, attachment, user, device, session, case, and business identifiers.",
            "I document each source’s coverage, retention, delay, field meaning, and limitation.",
            "I separate delivery, viewing, reporting, replying, clicking, downloading, opening, information entry, account activity, device activity, and business impact.",
            "I distinguish confirmed facts, reasonable conclusions, alternative explanations, confidence, and evidence gaps.",
            "I create separate classifications for the message, user interaction, account or device concern, business impact, and response outcome.",
            "I assign technical and business owners for containment, recovery, transaction review, communication, validation, monitoring, and closure.",
            "I validate legitimate communication, account and device state, business systems, monitoring, residual risk, and owner acceptance.",
            "I use only fictional evidence and never publish real messages, headers, users, devices, sessions, links, files, screenshots, or confidential records.",
          ]}
        />

        <MiniQuiz
          title="I7.7 Mini Quiz: Email Logs, Alerts, and Investigation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Email Investigation Report using at least forty message-trace, header, authentication, gateway, mailbox, URL, attachment, identity, endpoint, application, user-report, business-system, containment, recovery, validation, monitoring, and evidence-gap records. Include scope, normalized timeline, correlation identifiers, source limitations, message classification, interaction classifications, account or device review, business impact, findings, owners, actions, closure criteria, residual risk, and final approval."
          tips={[
            "Use only fictional messages, addresses, domains, users, accounts, devices, sessions, links, files, vendors, systems, and organizations.",
            "Include one confirmed phishing case with no interaction, one confirmed click with incomplete account evidence, one legitimate exception, one false positive, and one evidence-gap case.",
            "Clearly separate what each source directly proves from what the combined evidence reasonably supports.",
            "Do not include real messages, headers, logs, users, credentials, links, files, screenshots, devices, sessions, or confidential business records.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Alerts summarize evidence; investigators must preserve and review the underlying fictional records.",
            "Correlation identifiers and normalized timestamps prevent unrelated events from being merged into one story.",
            "Message delivery, user interaction, account or device activity, and business impact require separate evidence and conclusions.",
            "A click confirms destination interaction, not automatic credential entry or account compromise.",
            "Evidence gaps should be documented with confidence, risk, temporary controls, owners, due dates, and decision criteria.",
            "Strong closure validates message scope, users, accounts, devices, business systems, containment, legitimate communication, monitoring, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I7
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