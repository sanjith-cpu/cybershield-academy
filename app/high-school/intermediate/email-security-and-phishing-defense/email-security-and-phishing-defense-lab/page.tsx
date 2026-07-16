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
const previousLesson = `${modulePath}/email-logs-alerts-and-investigation`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional sender identity, domain analysis, authentication, social-engineering review, link and attachment evidence, business-process verification, filtering decisions, logs, and user reports into one defensible case.",
  "Build a normalized fictional timeline that separates message creation, transport, filtering, delivery, mailbox activity, link or attachment interaction, account activity, transaction activity, containment, recovery, validation, and closure.",
  "Distinguish confirmed facts, reasonable conclusions, alternative explanations, confidence, evidence gaps, and unsupported claims.",
  "Create findings with owners, priorities, remediation, validation, monitoring, rollback, and residual-risk documentation.",
  "Produce a portfolio-ready fictional Email Security and Phishing Defense Case Report that demonstrates professional investigation and decision-making.",
];

const caseProfile = [
  {
    label: "Organization",
    value: "Fictional Meadowbrook Learning Network",
    detail:
      "A training-only school and services environment with finance, human resources, technology, teachers, vendors, students, and shared mailboxes.",
  },
  {
    label: "Initial report",
    value: "Urgent benefits and payroll message",
    detail:
      "A fictional employee reports a message that claims an account review is required before the next payroll cycle.",
  },
  {
    label: "Claimed sender",
    value: "Meadowbrook Benefits Support",
    detail:
      "The display name resembles an internal function, but the visible sender uses an unfamiliar external domain.",
  },
  {
    label: "Requested action",
    value: "Open a document, sign in, and confirm payroll details",
    detail:
      "The message combines a cloud-share link, an HTML attachment, urgency, authority, and a sensitive-data request.",
  },
  {
    label: "Known business process",
    value: "Trusted payroll portal and HR ticketing system",
    detail:
      "Real changes require the known portal, employee identity verification, an HR case, and owner approval.",
  },
  {
    label: "Investigation challenge",
    value: "Mixed user and account evidence",
    detail:
      "One recipient reports without interaction, one confirms a click, and one has an attachment-download record with incomplete device evidence.",
  },
];

const evidenceSources = [
  {
    source: "Original message and headers",
    records:
      "Fictional display name, visible address, Reply-To, envelope sender, return path, message ID, subject, recipients, body, attachment name, link text, and authentication results.",
    question:
      "Which sender identities and message elements are directly confirmed?",
    limitation:
      "Headers and content do not prove physical sender identity, user interaction, or downstream impact.",
  },
  {
    source: "Message trace and gateway",
    records:
      "Fictional route, sending infrastructure, timestamps, recipients, SPF, DKIM, DMARC, risk score, warning, quarantine, delivery, and post-delivery actions.",
    question:
      "Who received the message, which controls acted, and what was the final delivery state?",
    limitation:
      "Delivery and filtering records do not automatically prove that recipients viewed or used the content.",
  },
  {
    source: "URL and redirect evidence",
    records:
      "Fictional visible link text, encoded address, redirect chain, final parent domain, page classification, click records, warning, and block state.",
    question:
      "Which destination is confirmed, and which recipients are confirmed to have visited it?",
    limitation:
      "A click does not prove credential entry, MFA approval, or account compromise.",
  },
  {
    source: "Attachment evidence",
    records:
      "Fictional file name, extension, MIME type, detected structure, forms, external references, verdict, delivery, download, open state, and authorized analysis.",
    question:
      "What content was delivered, downloaded, or opened, and what does the file evidence support?",
    limitation:
      "Attachment presence, download, open, active-content use, and execution are different stages.",
  },
  {
    source: "Mailbox and user evidence",
    records:
      "Fictional read state, folder move, reply, forward, report-phishing event, user statement, preview behavior, and shared-mailbox context.",
    question:
      "How did each recipient handle the message, and where do technical and human evidence agree or conflict?",
    limitation:
      "Read state and user memory can be affected by client behavior, synchronization, and incomplete recall.",
  },
  {
    source: "Identity and session evidence",
    records:
      "Fictional sign-ins, failures, MFA, factor changes, recovery, sessions, devices, mailbox rules, forwarding, password reset, and application activity.",
    question:
      "Is any account activity connected to the message by user, time, device, session, and destination evidence?",
    limitation:
      "Nearby account activity may have another cause and should not be treated as proof without correlation.",
  },
  {
    source: "Business-system evidence",
    records:
      "Fictional payroll portal, HR ticket, employee record, vendor record, payment state, data-sharing history, approvals, owners, and system-of-record status.",
    question:
      "Did any payroll, benefits, payment, data, permission, or account state actually change?",
    limitation:
      "A business record shows system state but may not identify the person behind the request.",
  },
  {
    source: "Containment and validation evidence",
    records:
      "Fictional quarantine, destination block, file block, session revocation, credential recovery, user communication, positive tests, negative tests, monitoring, and closure approvals.",
    question:
      "Which actions succeeded, what legitimate communication remains available, and what risk remains?",
    limitation:
      "An action request is not proof of successful completion until validated.",
  },
];

const labPhases = [
  {
    phase: "Phase 1",
    title: "Scope the case",
    goal:
      "Define the fictional sender, recipients, message, time range, business request, systems, initial reports, and investigation questions.",
    deliverable:
      "A one-page case scope with known facts, immediate risks, evidence sources, owners, and safety boundaries.",
    checkpoint:
      "Can another reviewer explain exactly what is being investigated and what is outside scope?",
  },
  {
    phase: "Phase 2",
    title: "Preserve and normalize",
    goal:
      "Collect the fictional message, headers, trace, gateway, URL, attachment, mailbox, identity, user, business, and response evidence.",
    deliverable:
      "An evidence register with source, identifier, timestamp, time zone, owner, retention, reliability, and limitation.",
    checkpoint:
      "Are timestamps normalized and correlation identifiers preserved before conclusions are written?",
  },
  {
    phase: "Phase 3",
    title: "Analyze sender and request",
    goal:
      "Compare fictional display name, addresses, domain, Reply-To, SPF, DKIM, DMARC, alignment, relationship, social engineering, and business process.",
    deliverable:
      "A sender-and-request worksheet that identifies exact mismatches, expected exceptions, and independent verification.",
    checkpoint:
      "Does the analysis explain which domain authenticated without treating authentication as complete legitimacy?",
  },
  {
    phase: "Phase 4",
    title: "Analyze links and attachments",
    goal:
      "Map fictional visible text, encoded and final destinations, redirects, page purpose, file metadata, structure, verdicts, and safe handling.",
    deliverable:
      "A content map that separates presence, delivery, click, download, open, form use, and confirmed impact.",
    checkpoint:
      "Are suspicious content conclusions based on supplied evidence rather than opening or interacting with the content?",
  },
  {
    phase: "Phase 5",
    title: "Build the timeline",
    goal:
      "Order fictional creation, delivery, filtering, user, URL, attachment, identity, business, containment, recovery, validation, and monitoring events.",
    deliverable:
      "A normalized timeline with evidence citations, event meaning, alternative explanations, and confidence.",
    checkpoint:
      "Does the timeline avoid turning temporal proximity into unsupported causation?",
  },
  {
    phase: "Phase 6",
    title: "Write findings",
    goal:
      "Create separate fictional message, interaction, account, device, business, control, and response findings.",
    deliverable:
      "Findings with facts, conclusions, impact, confidence, owner, priority, remediation, and validation.",
    checkpoint:
      "Can every conclusion be traced to specific evidence and an explicit limitation?",
  },
  {
    phase: "Phase 7",
    title: "Contain, recover, and validate",
    goal:
      "Recommend narrow fictional quarantine, blocking, transaction holds, account recovery, user communication, control tuning, positive tests, and negative tests.",
    deliverable:
      "A response plan with owners, sequence, dependencies, rollback, success criteria, and residual risk.",
    checkpoint:
      "Does the plan protect legitimate communication while addressing the confirmed risk?",
  },
  {
    phase: "Phase 8",
    title: "Close and present",
    goal:
      "Summarize fictional scope, evidence, timeline, findings, actions, gaps, monitoring, owner acceptance, and closure decision.",
    deliverable:
      "A portfolio-ready case report and one-page executive summary.",
    checkpoint:
      "Would a technical reviewer and business owner reach the same understanding from the report?",
  },
];

const caseEvidence = [
  {
    id: "E-01",
    time: "08:41:02",
    source: "Message",
    record:
      "Display name is “Meadowbrook Benefits Support,” visible From is review@meadowbrook-benefits.example, and Reply-To is help@benefits-confirm.example.",
    meaning:
      "The message presents two external sender identities while claiming an internal support role.",
  },
  {
    id: "E-02",
    time: "08:41:05",
    source: "Authentication",
    record:
      "SPF passes for mailer.meadowbrook-benefits.example, DKIM passes for meadowbrook-benefits.example, and DMARC passes through aligned DKIM.",
    meaning:
      "The external domain authenticates its own message correctly.",
  },
  {
    id: "E-03",
    time: "08:41:08",
    source: "Gateway",
    record:
      "The fictional message receives medium risk for a newly observed domain, payroll language, an HTML attachment, and a shortened link.",
    meaning:
      "The tool identifies several contextual concerns but does not block the message initially.",
  },
  {
    id: "E-04",
    time: "08:41:11",
    source: "Delivery",
    record:
      "The message is delivered to six fictional recipients with an external-sender warning banner.",
    meaning:
      "Recipient scope and initial delivery are confirmed.",
  },
  {
    id: "E-05",
    time: "08:43:17",
    source: "Recipient A",
    record:
      "Mailbox records show message open and report-phishing events with no URL, attachment, reply, or forward event.",
    meaning:
      "Recipient A viewed and reported the message without confirmed content interaction.",
  },
  {
    id: "E-06",
    time: "08:44:26",
    source: "Recipient B",
    record:
      "URL protection records a click on the rewritten document link from a managed browser.",
    meaning:
      "Recipient B is confirmed to have visited the linked destination.",
  },
  {
    id: "E-07",
    time: "08:44:28",
    source: "Redirect",
    record:
      "The fictional link moves through a shortener and ends at payroll-review.example/login.",
    meaning:
      "The final parent domain is unrelated to the approved payroll portal.",
  },
  {
    id: "E-08",
    time: "08:44:30",
    source: "Destination",
    record:
      "The fictional page imitates a payroll sign-in and requests email, password, and MFA code.",
    meaning:
      "The supplied destination evidence supports a credential-phishing purpose.",
  },
  {
    id: "E-09",
    time: "08:45:04",
    source: "Recipient C",
    record:
      "Attachment telemetry shows Benefits_Review.html was downloaded, while open-state evidence is unavailable because the fictional device stopped reporting.",
    meaning:
      "Download is confirmed, but open, form use, or execution remains unknown.",
  },
  {
    id: "E-10",
    time: "08:46:10",
    source: "File analysis",
    record:
      "Authorized fictional analysis identifies an HTML form and an external reference to payroll-review.example.",
    meaning:
      "The attachment is connected to the same deceptive destination pattern.",
  },
  {
    id: "E-11",
    time: "08:47:00",
    source: "User interview B",
    record:
      "Recipient B states that the page opened but no credentials or MFA code were entered.",
    meaning:
      "The user statement supports no information entry but requires technical correlation.",
  },
  {
    id: "E-12",
    time: "08:47:42",
    source: "Browser B",
    record:
      "The fictional managed browser records destination load and page close with no form-submission event.",
    meaning:
      "Browser evidence supports a visit without confirmed form submission.",
  },
  {
    id: "E-13",
    time: "08:48:13",
    source: "Identity B",
    record:
      "One failed sign-in from an unfamiliar browser occurs, followed by no successful new session, factor change, recovery, or password reset.",
    meaning:
      "The account evidence raises a question but does not confirm compromise.",
  },
  {
    id: "E-14",
    time: "08:49:00",
    source: "Human Resources",
    record:
      "The fictional HR owner confirms no benefits or payroll review was scheduled and no ticket exists.",
    meaning:
      "The request is not part of the approved business process.",
  },
  {
    id: "E-15",
    time: "08:50:20",
    source: "Payroll system",
    record:
      "No fictional employee profile, direct-deposit, tax, benefits, or payroll account change is recorded for any recipient.",
    meaning:
      "No confirmed payroll-system impact appears in the reviewed scope.",
  },
  {
    id: "E-16",
    time: "08:52:00",
    source: "Reclassification",
    record:
      "The URL and attachment verdicts change from unknown to suspicious, and later access is blocked.",
    meaning:
      "New evidence creates a post-delivery control action.",
  },
  {
    id: "E-17",
    time: "08:54:00",
    source: "Related-message search",
    record:
      "Fourteen fictional related messages share the sender domain, subject pattern, link, and attachment.",
    meaning:
      "Campaign scope is larger than the first six recipients.",
  },
  {
    id: "E-18",
    time: "08:57:00",
    source: "Containment",
    record:
      "The fourteen related messages are quarantined and the narrow destination and attachment patterns are blocked.",
    meaning:
      "Message and content containment are recorded.",
  },
  {
    id: "E-19",
    time: "09:03:00",
    source: "Identity review",
    record:
      "No fictional persistent sessions, factor changes, recovery events, mailbox rules, forwarding changes, or suspicious application access are found for Recipients A or B.",
    meaning:
      "The reviewed identity evidence does not confirm account compromise for A or B.",
  },
  {
    id: "E-20",
    time: "09:06:00",
    source: "Device gap C",
    record:
      "Recipient C’s fictional device telemetry is unavailable after the attachment download because the device is offline.",
    meaning:
      "Attachment-open and device-impact questions remain unresolved.",
  },
  {
    id: "E-21",
    time: "09:12:00",
    source: "User communication",
    record:
      "Affected fictional recipients receive a factual notice with reporting, trusted-portal, account-review, and support instructions.",
    meaning:
      "User communication supports coordinated containment and verification.",
  },
  {
    id: "E-22",
    time: "Day 2",
    source: "Validation",
    record:
      "Legitimate payroll messages and the trusted portal remain available, the deceptive patterns remain blocked, and no new related account or payroll activity appears.",
    meaning:
      "Short-term technical and business validation is complete, while Recipient C’s device gap remains open.",
  },
];


const findings = [
  {
    id: "I7LAB-01",
    title: "External benefits identity impersonates an internal function",
    fact:
      "The fictional message uses an unfamiliar external From domain and a separate external Reply-To while claiming to be Meadowbrook Benefits Support.",
    conclusion:
      "The sender identity is inconsistent with the approved internal HR and payroll communication path.",
    impact:
      "Six initial recipients and fourteen total related messages were exposed to the impersonation attempt.",
    priority: "High",
    owner:
      "Email Security and Human Resources",
  },
  {
    id: "I7LAB-02",
    title: "Authentication pass does not validate the claimed organization",
    fact:
      "The fictional external domain passes SPF, DKIM, and DMARC for itself.",
    conclusion:
      "Authentication confirms domain authorization but not the claimed internal identity or business request.",
    impact:
      "The message could appear technically valid to users or controls that rely too heavily on pass results.",
    priority: "Medium",
    owner:
      "Email Security Architecture",
  },
  {
    id: "I7LAB-03",
    title: "Link and attachment lead to the same deceptive credential workflow",
    fact:
      "The fictional shortened link and HTML attachment both reference payroll-review.example and present payroll-style credential collection.",
    conclusion:
      "The supplied link and attachment evidence supports a coordinated credential-phishing delivery pattern.",
    impact:
      "One confirmed click and one confirmed attachment download require recipient-specific investigation.",
    priority: "High",
    owner:
      "Email Security Operations",
  },
  {
    id: "I7LAB-04",
    title: "Recipient A safely reported without confirmed content interaction",
    fact:
      "Mailbox, URL, attachment, and user records agree that Recipient A opened and reported the message without clicking, downloading, replying, or forwarding.",
    conclusion:
      "Recipient A followed the approved reporting process and requires no evidence-based account recovery action.",
    impact:
      "The report helped trigger campaign review and later containment.",
    priority: "Low",
    owner:
      "Security Awareness and Case Investigator",
  },
  {
    id: "I7LAB-05",
    title: "Recipient B clicked, but account compromise is not confirmed",
    fact:
      "A fictional URL click and browser visit are confirmed, while no form submission, persistent new session, factor change, recovery, or application change is found.",
    conclusion:
      "Recipient B interacted with the phishing destination, but the available evidence does not establish credential entry or account compromise.",
    impact:
      "Monitoring and risk-based identity review remain appropriate because one nearby failed sign-in is unresolved.",
    priority: "High",
    owner:
      "Identity Operations and Case Investigator",
  },
  {
    id: "I7LAB-06",
    title: "Recipient C has an unresolved device-evidence gap",
    fact:
      "The fictional attachment download is recorded, but device telemetry becomes unavailable before open or execution state can be determined.",
    conclusion:
      "The investigation cannot confirm or exclude later attachment interaction or device impact.",
    impact:
      "The case cannot fully close for Recipient C without restored evidence, approved device review, or accepted residual risk.",
    priority: "High",
    owner:
      "Endpoint Operations and Case Owner",
  },
  {
    id: "I7LAB-07",
    title: "No payroll or benefits-system change is confirmed",
    fact:
      "The fictional systems of record show no profile, direct-deposit, tax, benefits, or payroll account change for any recipient.",
    conclusion:
      "No confirmed business-system impact appears in the reviewed time range.",
    impact:
      "The incident remains an attempted phishing campaign with recipient interaction but no confirmed payroll diversion.",
    priority: "Medium",
    owner:
      "Payroll Owner and Human Resources",
  },
  {
    id: "I7LAB-08",
    title: "Post-delivery reclassification contained the wider campaign",
    fact:
      "Fourteen fictional related messages were quarantined after URL and attachment verdicts changed, and narrow destination and file patterns were blocked.",
    conclusion:
      "Post-delivery controls reduced further exposure after initial delivery.",
    impact:
      "The organization still needs to review interaction that occurred before containment and improve earlier contextual detection.",
    priority: "Medium",
    owner:
      "Email Security Operations and Detection Engineering",
  },
];

const remediationPlan = [
  {
    action: "Preserve the full fictional case record",
    reason:
      "Maintain original message, headers, trace, URL, attachment, mailbox, identity, user, business, containment, and validation evidence.",
    owner:
      "Case Investigator",
    validation:
      "Confirm every cited finding maps to an evidence identifier, timestamp, source, and limitation.",
    rollback:
      "Not applicable; preservation should remain read-only and access controlled.",
  },
  {
    action: "Maintain narrow message and content containment",
    reason:
      "Prevent additional access to the fictional sender, destination, and attachment patterns while avoiding broad platform blocking.",
    owner:
      "Email Security Operations",
    validation:
      "Confirm all fourteen related messages are quarantined and later access to the deceptive patterns is blocked.",
    rollback:
      "Remove only after verified false-positive evidence and accountable owner approval.",
  },
  {
    action: "Complete Recipient B identity monitoring",
    reason:
      "Address the confirmed click and nearby failed sign-in without overstating account compromise.",
    owner:
      "Identity Operations",
    validation:
      "Review sessions, factors, recovery, password events, applications, mailbox rules, and delayed activity for the defined monitoring period.",
    rollback:
      "End enhanced monitoring after the approved period if no related activity appears.",
  },
  {
    action: "Resolve Recipient C device evidence",
    reason:
      "Determine whether the downloaded fictional HTML attachment was opened or produced any device activity.",
    owner:
      "Endpoint Operations",
    validation:
      "Restore telemetry or complete an approved device review and document open, browser, process, file, and persistence evidence.",
    rollback:
      "Return the device to normal monitoring only after the owner accepts the evidence and residual risk.",
  },
  {
    action: "Validate payroll and HR systems",
    reason:
      "Confirm the fictional phishing request did not change employee, payroll, benefits, tax, direct-deposit, or account records.",
    owner:
      "Payroll and Human Resources",
    validation:
      "Compare systems of record, owner approvals, pending requests, and recent changes for all affected recipients.",
    rollback:
      "Reverse any unauthorized change through the approved business process if later discovered.",
  },
  {
    action: "Improve contextual detection",
    reason:
      "Combine fictional internal-function impersonation, new external domain, payroll language, shortened link, HTML attachment, and sensitive request evidence.",
    owner:
      "Detection Engineering",
    validation:
      "Test the original campaign pattern, legitimate payroll notices, approved vendors, and unrelated external messages.",
    rollback:
      "Restore the previous rule if legitimate communication is disrupted and document the failed condition.",
  },
  {
    action: "Reinforce independent verification",
    reason:
      "Give fictional users a trusted route for payroll, benefits, account, and document requests without using message-controlled links or attachments.",
    owner:
      "Security Awareness, HR, and Payroll",
    validation:
      "Confirm users can locate the known portal, HR ticketing path, and report-phishing function in a training exercise.",
    rollback:
      "Revise communication if testing shows confusion or inaccessible instructions.",
  },
  {
    action: "Close with accountable residual-risk acceptance",
    reason:
      "Ensure unresolved evidence, especially Recipient C’s device gap, is visible and owned rather than hidden.",
    owner:
      "Incident Owner and Business Owners",
    validation:
      "Confirm technical and business closure criteria, open tasks, monitoring duration, accepted uncertainty, and final approvals.",
    rollback:
      "Reopen the case if new related message, identity, device, or payroll evidence appears.",
  },
];

const closureCriteria = [
  "All fictional related messages, recipients, sender identities, URLs, attachments, and delivery states are documented.",
  "Each recipient is classified separately for view, report, reply, click, download, open, information entry, account activity, and business impact.",
  "All confirmed high-risk content is contained through narrow, approved controls.",
  "Recipient B’s identity review and monitoring period are complete or formally handed off with an owner and due date.",
  "Recipient C’s device gap is resolved or accepted by an accountable owner with documented residual risk and monitoring.",
  "Payroll and Human Resources confirm no unauthorized employee, benefits, tax, direct-deposit, or payroll change.",
  "Legitimate payroll, benefits, collaboration, and support communication remains available through approved paths.",
  "Positive and negative validation tests demonstrate that tuned controls restore business use without weakening confirmed protections.",
  "Evidence gaps, alternative explanations, confidence, monitoring duration, rollback criteria, and case-reopening triggers are documented.",
  "Technical and business owners approve the final report and closure decision.",
];

const commonMistakes = [
  "Treating a fictional SPF, DKIM, or DMARC pass as proof that the claimed organization and request are legitimate.",
  "Treating a shortened link, HTML attachment, urgent request, or external domain as complete proof without correlating business and technical evidence.",
  "Opening suspicious fictional content during the lab instead of using supplied evidence and safe verification.",
  "Merging all recipients into one conclusion even though their message, link, attachment, identity, and device evidence differs.",
  "Treating a message open as a link click, an attachment download as an open, or a click as credential entry.",
  "Treating one failed sign-in near a phishing click as automatic proof of account compromise.",
  "Assuming no payroll change means no investigation, containment, user communication, or monitoring is required.",
  "Closing Recipient C’s case despite an unresolved fictional device-telemetry gap.",
  "Using broad domain, platform, or file-type blocking instead of narrow sender, destination, tenant, attachment, and behavior controls.",
  "Writing findings without confirmed facts, cited evidence, confidence, alternatives, owners, remediation, and validation.",
  "Hiding uncertainty instead of documenting evidence gaps, residual risk, temporary controls, due dates, and owner acceptance.",
  "Publishing real messages, addresses, domains, links, files, users, sessions, devices, screenshots, payroll records, or private information.",
];

const quizQuestions = [
  {
    question:
      "What is the strongest conclusion about the fictional external domain when SPF, DKIM, and DMARC pass?",
    choices: [
      "The external domain authenticated its own message, but the result does not prove the claimed internal identity or business request.",
      "The message is automatically legitimate.",
      "The physical sender is known with certainty.",
      "Every recipient should complete the payroll review.",
    ],
    answer: 0,
    explanation:
      "Authentication validates specific domain relationships, not the claimed organization, account integrity, intent, or business authorization.",
  },
  {
    question:
      "Recipient B has a confirmed click but no form submission or persistent new session. What is the strongest conclusion?",
    choices: [
      "The link click is confirmed, while credential entry and account compromise are not confirmed.",
      "The account is definitely compromised.",
      "The message is harmless.",
      "The user did not visit the destination.",
    ],
    answer: 0,
    explanation:
      "Interaction stages require separate evidence and should not be collapsed into one impact claim.",
  },
  {
    question:
      "How should Recipient C’s fictional attachment evidence be classified?",
    choices: [
      "Download is confirmed, while open, form use, execution, and device impact remain unknown because telemetry is unavailable.",
      "The attachment definitely executed.",
      "The file was never accessed.",
      "The account was compromised.",
    ],
    answer: 0,
    explanation:
      "The report should preserve the confirmed download and make the later evidence gap explicit.",
  },
  {
    question:
      "Which response best protects the business while investigating a sensitive payroll request?",
    choices: [
      "Use the trusted payroll and HR systems, preserve evidence, place narrow holds if needed, and verify through accountable owners.",
      "Reply to the suspicious message.",
      "Use the message link because the deadline is urgent.",
      "Change employee details before verification.",
    ],
    answer: 0,
    explanation:
      "Independent systems and owners provide safe verification without relying on the suspicious message.",
  },
  {
    question:
      "What is the strongest way to validate a detection change?",
    choices: [
      "Test both approved legitimate examples and unsafe or unauthorized examples, then monitor the results.",
      "Test only the original phishing message.",
      "Test only one legitimate message.",
      "Assume the rule works because it was saved.",
    ],
    answer: 0,
    explanation:
      "Positive and negative validation show whether the change preserves both business use and protection.",
  },
  {
    question:
      "Why should each fictional recipient receive a separate interaction classification?",
    choices: [
      "Recipients can have different delivery, view, click, download, account, device, and business evidence.",
      "All recipients always behave the same way.",
      "One user report proves every recipient’s actions.",
      "The subject line determines every outcome.",
    ],
    answer: 0,
    explanation:
      "Campaign scope and individual impact are related but not identical.",
  },
  {
    question:
      "Which closure decision is strongest while Recipient C’s device evidence remains unavailable?",
    choices: [
      "Keep that investigation area open or document accountable residual-risk acceptance with monitoring and reopening criteria.",
      "Close every case because no payroll change occurred.",
      "Assume the device is safe.",
      "Delete the attachment evidence.",
    ],
    answer: 0,
    explanation:
      "Professional closure makes unresolved evidence visible and assigns ownership rather than replacing uncertainty with certainty.",
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
        Module Test
      </Link>
    </div>
  );
}


function CaseProfileGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Profile
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Fictional Meadowbrook Phishing Investigation
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {caseProfile.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
              {item.label}
            </p>

            <h3 className="mt-3 text-lg font-black text-white">{item.value}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Sources
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sources Required for the Lab
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {evidenceSources.map((item) => (
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
                Investigation question
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.question}
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

function LabPhaseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Lab Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Phases from Scope to Portfolio
      </h2>

      <div className="mt-6 grid gap-5">
        {labPhases.map((item) => (
          <div
            key={item.phase}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
                {item.phase}
              </span>
              <h3 className="text-lg font-black text-white">{item.title}</h3>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Goal
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.goal}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Deliverable
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.deliverable}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Quality checkpoint
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.checkpoint}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseEvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Supplied Evidence
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Twenty-Two Fictional Records for Correlation
      </h2>

      <div className="mt-6 grid gap-3">
        {caseEvidence.map((item) => (
          <div
            key={item.id}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.18fr_0.22fr_0.28fr_1fr_1fr]"
          >
            <p className="font-black text-cyan-300">{item.id}</p>
            <p className="font-mono text-sm text-blue-200">{item.time}</p>
            <p className="text-sm font-black text-purple-200">{item.source}</p>
            <p className="text-sm font-semibold text-white">{item.record}</p>
            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
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
        Professional Findings
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Findings with Separate Impact and Ownership
      </h2>

      <div className="mt-6 grid gap-5">
        {findings.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
                {item.id}
              </span>
              <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-red-200">
                {item.priority}
              </span>
              <h3 className="text-lg font-black text-white">{item.title}</h3>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Fact
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.fact}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Conclusion
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.conclusion}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.impact}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Owner
                </p>
                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.owner}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function RemediationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Remediation Plan
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Coordinated Actions with Validation and Rollback
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {remediationPlan.map((item) => (
          <div
            key={item.action}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.action}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.reason}
            </p>

            <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                Owner
              </p>
              <p className="mt-2 text-sm leading-6 text-purple-50">
                {item.owner}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.validation}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Rollback or reopening
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.rollback}
              </p>
            </div>
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
        Closure Gate
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Requirements Before Final Approval
      </h2>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {closureCriteria.map((item, index) => (
          <div
            key={item}
            className="flex gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
              {index + 1}
            </div>
            <p className="text-sm leading-7 text-emerald-50">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function EmailSecurityAndPhishingDefenseLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.8 Email Security and Phishing Defense Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Combine sender analysis, authentication, social engineering, links,
            attachments, business email compromise, filtering, logs, user
            reports, account evidence, business systems, containment,
            validation, monitoring, and closure into one portfolio-ready
            fictional investigation.
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
          lessonTitle="Email Security and Phishing Defense Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional messages, domains, links, files, users, accounts, devices, payroll records, systems, and organizations.",
            "I will not open suspicious content, enter credentials, approve prompts, scan QR codes, send money, or change real accounts and controls.",
            "I will normalize timestamps and correlate message, URL, attachment, user, device, session, case, and business identifiers.",
            "I will create separate conclusions for the message, each recipient, account or device activity, business impact, control performance, and closure.",
            "I will make evidence gaps, confidence limits, alternative explanations, owners, and residual risk visible.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Best Investigation Does More Than Identify a Phishing Message"
        >
          <p className="leading-8">
            A professional defender must explain who received the fictional
            message, which sender identity authenticated, how the message tried
            to influence users, where its link and attachment led, which users
            interacted, whether accounts or devices changed, whether payroll or
            benefits records changed, what controls acted, what remains
            unknown, and what evidence is required for closure.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak case summary
              </p>
              <p className="mt-2 leading-7">
                “The email was phishing, one user clicked, and the incident is
                resolved.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong case summary
              </p>
              <p className="mt-2 leading-7">
                “The message and content are confirmed phishing, recipient
                actions differ, account compromise is not confirmed for B,
                device impact remains unknown for C, and closure depends on
                validation and accepted residual risk.”
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

        <CaseProfileGuide />
        <EvidenceSourceGuide />
        <LabPhaseGuide />

        <SectionCard
          eyebrow="Core Investigation Model"
          title="Separate Six Questions Before Writing the Final Story"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              [
                "Sender",
                "Which fictional identity, domain, account, service, and business role created the message?",
              ],
              [
                "Content",
                "What did the fictional message, link, attachment, and social-engineering request contain?",
              ],
              [
                "Delivery",
                "Which fictional recipients, folders, warnings, quarantines, and post-delivery actions are confirmed?",
              ],
              [
                "Interaction",
                "Which fictional users viewed, reported, clicked, downloaded, opened, entered information, or replied?",
              ],
              [
                "Impact",
                "Which fictional account, device, payroll, benefits, data, permission, or transaction state changed?",
              ],
              [
                "Response",
                "Which fictional containment, recovery, validation, monitoring, owner, and closure actions succeeded?",
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

        <CaseEvidenceGuide />
        <FindingGuide />
        <RemediationGuide />
        <ClosureGuide />

        <FakeDashboardCard
          title="Fake Integrated Email Defense Case Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook Learning Network investigation."
          metrics={[
            {
              label: "Related messages",
              value: "14",
              note: "Fictional messages share the external sender domain, subject pattern, shortened link, and HTML attachment.",
            },
            {
              label: "Recipient outcomes",
              value: "3",
              note: "Safe report without interaction, confirmed click without confirmed compromise, and confirmed download with unresolved device evidence.",
            },
            {
              label: "Open evidence gaps",
              value: "1",
              note: "Recipient C’s fictional device telemetry remains unavailable after attachment download.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Phishing Case Requires Recipient-Specific Conclusions"
          severity="High"
          time="08:44 AM"
          source="Fake Meadowbrook Email Defense Console"
          details="A fictional benefits message authenticates for an external lookalike domain, uses urgency and payroll language, links to a deceptive login page, and includes an HTML attachment. Recipient A safely reports, Recipient B clicks without confirmed form submission, and Recipient C downloads the attachment before device telemetry becomes unavailable."
          recommendation="Preserve and correlate all evidence, quarantine related messages, block narrow content patterns, verify HR and payroll systems, monitor Recipient B, resolve Recipient C’s device gap, validate legitimate communication, and close only when technical and business criteria are met or residual risk is formally accepted."
        />

        <FakeLogPanel
          title="Fake Integrated Case Timeline"
          logs={[
            "08:41:02 MESSAGE from='review@meadowbrook-benefits.example' reply_to='help@benefits-confirm.example'",
            "08:41:05 AUTH spf='pass' dkim='pass' dmarc='pass_for_external_domain'",
            "08:41:08 GATEWAY risk='medium' signals='new_domain,payroll,html,short_link'",
            "08:41:11 DELIVERY recipients='6' warning='external_sender'",
            "08:43:17 RECIPIENT_A opened='true' reported='true' content_interaction='none'",
            "08:44:26 RECIPIENT_B url_click='confirmed'",
            "08:44:28 REDIRECT final_domain='payroll-review.example'",
            "08:44:30 PAGE purpose='credential_collection'",
            "08:45:04 RECIPIENT_C attachment_download='confirmed' later_telemetry='unavailable'",
            "08:46:10 FILE attachment='Benefits_Review.html' external_reference='payroll-review.example'",
            "08:47:42 BROWSER_B form_submission='none'",
            "08:48:13 IDENTITY_B failed_new_browser='1' persistent_session='0'",
            "08:49:00 HR_VERIFY request='not_authorized' ticket='none'",
            "08:50:20 PAYROLL changes='0'",
            "08:52:00 RECLASSIFY url='suspicious' attachment='suspicious'",
            "08:54:00 SEARCH related_messages='14'",
            "08:57:00 CONTAIN quarantine='14' narrow_blocks='active'",
            "09:03:00 IDENTITY_REVIEW A_compromise='not_confirmed' B_compromise='not_confirmed'",
            "09:06:00 EVIDENCE_GAP recipient='C' device_state='unknown'",
            "DAY2 VALIDATION legitimate_payroll='working' new_related_activity='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Integrated Case Conclusion Is Best Supported?"
          evidence={[
            "The fictional external domain authenticates its own message but is not an approved HR or payroll sender.",
            "The message uses urgency, payroll language, a shortened link, and an HTML attachment.",
            "The link and attachment lead to the same deceptive credential destination.",
            "Recipient A reports without confirmed content interaction.",
            "Recipient B clicks, but no form submission, persistent session, factor change, recovery, or payroll change is found.",
            "Recipient C downloads the attachment, but later device evidence is unavailable.",
            "Fourteen related messages are quarantined and narrow content patterns are blocked.",
            "Legitimate payroll communication works and no business-system change is confirmed.",
          ]}
          question="Which final conclusion is strongest?"
          options={[
            "The campaign is confirmed phishing; recipient outcomes must remain separate; no payroll impact is confirmed; Recipient B lacks confirmed account compromise; and Recipient C remains open because device impact is unknown.",
            "Every recipient account is compromised because the message was delivered.",
            "The case can fully close because no payroll record changed.",
            "The message is legitimate because authentication passed.",
          ]}
          bestAnswer={0}
          explanation="The combined evidence supports phishing and successful containment, while recipient-specific interaction and evidence gaps require different conclusions and closure states."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Lower the Quality of the Final Report"
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
          eyebrow="Final Lab Assignment"
          title="Produce the Meadowbrook Email Defense Case Report"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Required Sections
              </p>

              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-300">
                <li>Executive summary and fictional case scope.</li>
                <li>Safety boundary and evidence-preservation statement.</li>
                <li>Sender, domain, authentication, and social-engineering analysis.</li>
                <li>Link, redirect, destination, attachment, and file analysis.</li>
                <li>Normalized message, user, identity, device, business, and response timeline.</li>
                <li>Recipient-specific interaction and impact classifications.</li>
                <li>Findings with facts, conclusions, confidence, priority, impact, and owners.</li>
                <li>Containment, remediation, validation, rollback, monitoring, and reopening plan.</li>
                <li>Evidence gaps, alternatives, residual risk, closure criteria, and owner approval.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Quality Standard
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
                <li>Every conclusion cites supplied fictional evidence.</li>
                <li>Authentication is interpreted accurately and narrowly.</li>
                <li>Each recipient receives a separate interaction and impact conclusion.</li>
                <li>Facts, inferences, alternatives, confidence, and gaps are visibly separated.</li>
                <li>Actions have owners, order, success criteria, validation, and rollback.</li>
                <li>Legitimate business communication is tested and preserved.</li>
                <li>Unresolved evidence is owned rather than hidden.</li>
                <li>The final report is understandable to technical and business reviewers.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional records. Do not click links, open
            attachments, scan codes, enter credentials, approve prompts, access
            real accounts or devices, change real mail or payroll controls, or
            publish real messages, domains, files, users, sessions, screenshots,
            payroll records, or private information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Recipient B Clicked, but Account Evidence Is Incomplete"
          scenario="A fictional recipient visits the deceptive payroll page. Browser evidence shows no form submission, but one failed sign-in from a new browser occurs shortly afterward. No persistent session, factor change, recovery, password reset, or payroll change is found."
          choices={[
            {
              label: "Choice A",
              response:
                "Confirm the click, preserve the mixed identity evidence, continue risk-based monitoring and review, and state that credential entry and account compromise are not confirmed.",
              outcome:
                "Best defensive choice. It responds to the risk while preserving the difference between interaction and confirmed impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the account compromised because the failed sign-in occurred nearby.",
              outcome:
                "Overstated. Temporal proximity alone does not prove causation or successful credential use.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the click because no payroll record changed.",
              outcome:
                "Incomplete. The click still requires identity review, monitoring, documentation, and user support.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Recipient C Downloaded the Attachment, but the Device Is Offline"
          scenario="A fictional attachment download is confirmed, but device telemetry becomes unavailable before investigators can determine whether the HTML file was opened or used."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the device-impact question open, preserve the confirmed download, restore telemetry or complete an approved device review, and close only after evidence or accountable residual-risk acceptance.",
              outcome:
                "Best defensive choice. The response makes the evidence gap visible and assigns an owner.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the attachment executed because it was downloaded.",
              outcome:
                "Unsupported. Download and later interaction are separate stages.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume nothing happened because no payroll change is visible.",
              outcome:
                "Unsupported. Device evidence and payroll evidence answer different questions.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Email Security and Phishing Defense Lab Checklist"
          items={[
            "I define the fictional sender, recipients, message, time range, business request, systems, initial reports, and safety boundary.",
            "I preserve and correlate message, header, trace, gateway, URL, attachment, mailbox, identity, device, user, business, containment, and validation evidence.",
            "I interpret display names, domains, Reply-To, SPF, DKIM, DMARC, alignment, and business identity accurately.",
            "I identify social-engineering techniques, sensitive requests, process mismatches, and independent verification paths.",
            "I separate visible links, encoded destinations, redirects, final pages, file names, content types, structures, verdicts, and user actions.",
            "I normalize timestamps and preserve message, URL, attachment, user, device, session, case, and business identifiers.",
            "I create separate message, recipient, account, device, business-impact, control-performance, and closure conclusions.",
            "I document confirmed facts, reasonable conclusions, alternatives, confidence, evidence gaps, owners, priorities, and residual risk.",
            "I recommend narrow containment, recovery, control tuning, positive tests, negative tests, monitoring, rollback, and reopening criteria.",
            "I use only fictional evidence and never publish or interact with real messages, links, files, accounts, devices, payroll records, screenshots, or private information.",
          ]}
        />

        <MiniQuiz
          title="I7.8 Mini Quiz: Email Security and Phishing Defense Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Produce the complete fictional Meadowbrook Email Security and Phishing Defense Case Report using the supplied evidence. Include an executive summary, scope, evidence register, sender and authentication analysis, social-engineering analysis, link and attachment maps, normalized timeline, recipient-specific classifications, account and device review, business-impact review, findings, remediation, validation, monitoring, rollback, evidence gaps, residual risk, closure criteria, and owner approvals."
          tips={[
            "Use only fictional messages, domains, links, files, users, accounts, devices, payroll records, systems, and organizations.",
            "Cite evidence identifiers such as E-01 through E-22 in every major finding.",
            "Keep Recipient A, Recipient B, and Recipient C conclusions separate.",
            "Do not hide the unresolved Recipient C device gap or convert it into certainty.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A complete email investigation connects sender, content, delivery, user, account, device, business, control, and response evidence.",
            "Authentication can validate an external domain without validating the identity or organization it claims to represent.",
            "Phishing-message confirmation, user interaction, account compromise, device impact, and business impact are separate conclusions.",
            "Every recipient in the same campaign can require a different investigation and closure state.",
            "Validation must test legitimate communication and confirmed protections after containment or tuning.",
            "Professional closure makes evidence gaps, residual risk, owners, monitoring, and reopening criteria visible.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I7
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