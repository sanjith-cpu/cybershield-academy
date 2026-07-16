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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/sender-identity-domains-and-email-authentication`;

const objectives = [
  "Explain how a fictional email message moves from a sender through mail systems, security controls, inboxes, links, attachments, replies, and user actions.",
  "Distinguish visible message content from delivery-path evidence, sender evidence, mailbox evidence, security-tool evidence, and user-action evidence.",
  "Identify the main parts of a fictional email message, including display name, address, subject, body, reply path, links, attachments, timestamps, and headers.",
  "Recognize common email threat categories without treating one clue as proof of malicious intent or impact.",
  "Create a professional fictional Email Message Anatomy Map and evidence-based review worksheet.",
];

const vocabulary = [
  [
    "Email message",
    "A fictional communication object containing visible content, addressing information, transport metadata, links, attachments, and delivery records.",
  ],
  [
    "Display name",
    "The fictional sender name shown prominently in the inbox, which can differ from the actual email address.",
  ],
  [
    "Email address",
    "The fictional mailbox identifier used to send or receive email, usually containing a local part and a domain.",
  ],
  [
    "Domain",
    "The fictional organizational or service name appearing after the @ symbol in an email address.",
  ],
  [
    "Subject line",
    "The visible fictional title of a message, often used to create context, urgency, curiosity, or a business request.",
  ],
  [
    "Message body",
    "The main fictional text and visual content presented to the recipient.",
  ],
  [
    "Reply path",
    "The fictional address or route used when a recipient replies, which may differ from the visible sender address.",
  ],
  [
    "Header",
    "A fictional metadata field that records addressing, routing, timestamps, message identifiers, and authentication-related information.",
  ],
  [
    "Message trace",
    "A fictional delivery record showing how a message moved through mail systems, security controls, and the recipient environment.",
  ],
  [
    "Attachment",
    "A fictional file included with or referenced by a message.",
  ],
  [
    "Embedded link",
    "A fictional clickable text, button, image, or destination included in a message.",
  ],
  [
    "Mailbox event",
    "A fictional action such as delivery, move, delete, reply, forward, report, quarantine, or restore.",
  ],
];

const messageJourney = [
  {
    stage: "1. Sender creates the message",
    description:
      "A fictional sender account, mail application, or automated service creates the subject, body, recipients, links, attachments, and reply settings.",
    evidence:
      "Sender account, application, timestamp, message ID, draft or send event, business purpose, and owner.",
    limitation:
      "The sending account does not prove the physical person, safe intent, or legitimacy of every included request.",
  },
  {
    stage: "2. Sending mail system accepts the message",
    description:
      "The fictional sending service processes the message and prepares it for delivery to the recipient domain.",
    evidence:
      "Sending server, envelope sender, message ID, timestamp, route, queue, and domain information.",
    limitation:
      "A technically valid sending system can still deliver unwanted, misleading, or compromised-account messages.",
  },
  {
    stage: "3. Message travels between mail systems",
    description:
      "The fictional message moves through one or more mail servers, gateways, security services, and delivery routes.",
    evidence:
      "Received headers, relay records, timestamps, transport results, authentication checks, and routing identifiers.",
    limitation:
      "Complex delivery paths can include forwarding services, cloud platforms, mailing systems, or security gateways that require context.",
  },
  {
    stage: "4. Recipient security controls inspect the message",
    description:
      "The fictional recipient environment evaluates sender reputation, domain evidence, content, links, attachments, policies, and prior intelligence.",
    evidence:
      "Filtering result, spam score, link verdict, attachment verdict, authentication result, warning banner, and policy action.",
    limitation:
      "Security tools can miss harmful messages or classify legitimate messages incorrectly.",
  },
  {
    stage: "5. Message reaches a mailbox or quarantine",
    description:
      "The fictional environment delivers the message to inbox, junk, quarantine, another folder, or a holding area.",
    evidence:
      "Delivery result, folder, quarantine state, recipient, timestamp, rule action, and mailbox event.",
    limitation:
      "Delivery does not prove the recipient saw, opened, trusted, replied to, or acted on the message.",
  },
  {
    stage: "6. Recipient views or ignores the message",
    description:
      "The fictional recipient may preview, open, ignore, delete, move, or report the message.",
    evidence:
      "Mailbox action, message-read state, user report, client event, and timestamp.",
    limitation:
      "Read-state data can be incomplete, delayed, or changed by preview panes, mobile clients, or synchronization.",
  },
  {
    stage: "7. Recipient interacts with content",
    description:
      "The fictional recipient may reply, forward, click a link, open an attachment, scan a QR code, approve a request, or enter information.",
    evidence:
      "Reply event, URL event, attachment event, application session, account action, payment workflow, and user report.",
    limitation:
      "A link click or attachment open does not automatically prove compromise, data loss, or successful execution.",
  },
  {
    stage: "8. Defenders investigate and respond",
    description:
      "The fictional security team correlates the message, sender, delivery, mailbox, user, account, application, and business evidence.",
    evidence:
      "Case record, message trace, headers, authentication, security alerts, user report, related-message search, actions, validation, and closure.",
    limitation:
      "Investigation quality depends on evidence preservation, source coverage, accountable owners, and transparent confidence.",
  },
];

const visibleMessageParts = [
  {
    part: "Display name",
    example:
      "The fictional inbox shows “Northstar Finance Director.”",
    defensiveQuestion:
      "Does the display name match the actual sender address, expected relationship, and business context?",
    limitation:
      "Display names are easy to imitate and should not be trusted alone.",
  },
  {
    part: "From address",
    example:
      "The fictional sender address is finance-director@northstar-payments.example.",
    defensiveQuestion:
      "Is the address expected, correctly spelled, from the right domain, and consistent with prior communication?",
    limitation:
      "A familiar-looking address can still belong to a lookalike domain or a compromised account.",
  },
  {
    part: "Subject line",
    example:
      "The fictional subject says “URGENT: confidential payment change.”",
    defensiveQuestion:
      "Does the subject create pressure, secrecy, fear, curiosity, or urgency that bypasses normal process?",
    limitation:
      "Urgency can exist in legitimate messages, so context and verification are still required.",
  },
  {
    part: "Recipient fields",
    example:
      "The fictional message is sent to one employee and two hidden recipients.",
    defensiveQuestion:
      "Are the To, Cc, and Bcc patterns expected for the business purpose?",
    limitation:
      "Recipient lists can be hidden, changed by mailing systems, or incomplete in some views.",
  },
  {
    part: "Message body",
    example:
      "The fictional sender asks for a payment account change and says not to call.",
    defensiveQuestion:
      "Does the wording match normal responsibilities, approval rules, communication style, and current events?",
    limitation:
      "Writing style alone cannot prove authorship or legitimacy.",
  },
  {
    part: "Links",
    example:
      "A fictional button says “Review Secure Document.”",
    defensiveQuestion:
      "What destination is shown, what destination is actually encoded, and is independent verification safer?",
    limitation:
      "Visible link text can differ from the actual destination.",
  },
  {
    part: "Attachments",
    example:
      "A fictional message includes Invoice_Update.pdf and Review_Form.html.",
    defensiveQuestion:
      "Was the file expected, requested, approved, and delivered through the normal process?",
    limitation:
      "A familiar file name or extension does not prove the file is safe.",
  },
  {
    part: "Signature and branding",
    example:
      "The fictional message includes a logo, legal footer, phone number, and professional signature.",
    defensiveQuestion:
      "Does the branding match independently known details and the actual sender infrastructure?",
    limitation:
      "Logos, signatures, and contact details can be copied from legitimate messages or websites.",
  },
];

const hiddenEvidenceParts = [
  {
    part: "Envelope sender",
    purpose:
      "A fictional transport address used by mail systems for delivery handling and bounce processing.",
    defensiveUse:
      "Compare the transport sender with the visible From address and expected domain relationship.",
    caution:
      "Differences can be legitimate for mailing systems, forwarding, vendors, and cloud services.",
  },
  {
    part: "Received path",
    purpose:
      "A fictional sequence of mail servers and timestamps showing how the message traveled.",
    defensiveUse:
      "Identify sending infrastructure, relay sequence, timing, and routing inconsistencies.",
    caution:
      "Routing can be complex and should not be interpreted without understanding trusted gateways and forwarding services.",
  },
  {
    part: "Message ID",
    purpose:
      "A fictional identifier created for the message by a sending system.",
    defensiveUse:
      "Connect message copies, delivery records, security events, and related recipients.",
    caution:
      "A message ID supports correlation but does not prove legitimacy.",
  },
  {
    part: "Return path",
    purpose:
      "A fictional address used for delivery failures and transport handling.",
    defensiveUse:
      "Compare it with the sending domain and expected service.",
    caution:
      "Return paths often differ for legitimate cloud services and bulk mail.",
  },
  {
    part: "Reply-To",
    purpose:
      "A fictional address that receives replies instead of the visible From address.",
    defensiveUse:
      "Identify whether replies are redirected to an unexpected account or domain.",
    caution:
      "A different Reply-To can be legitimate when support, ticketing, or mailing systems are used.",
  },
  {
    part: "Authentication results",
    purpose:
      "Fictional SPF, DKIM, DMARC, alignment, and related results recorded by the recipient environment.",
    defensiveUse:
      "Determine whether the message was authorized by the relevant sending domain and whether identifiers align.",
    caution:
      "Passing authentication does not prove the domain is trustworthy, expected, uncompromised, or safe.",
  },
  {
    part: "Security verdicts",
    purpose:
      "Fictional filtering, reputation, URL, attachment, spam, policy, and threat-analysis results.",
    defensiveUse:
      "Understand why the message was allowed, warned, quarantined, blocked, or later reclassified.",
    caution:
      "Verdicts are tool interpretations and can change as new evidence appears.",
  },
  {
    part: "Correlation identifiers",
    purpose:
      "Fictional IDs connecting the message to delivery, URL, attachment, mailbox, user-report, and case records.",
    defensiveUse:
      "Build a complete timeline across mail, security, identity, device, and application systems.",
    caution:
      "Missing or mismatched IDs can create false associations between unrelated events.",
  },
];

const threatCategories = [
  {
    category: "Credential phishing",
    description:
      "A fictional message pressures the recipient to enter sign-in information into an untrusted or unexpected destination.",
    commonClues:
      "Unexpected login request, urgent account warning, mismatched domain, unusual link, MFA pressure, or recovery language.",
    safeResponse:
      "Do not use the message link. Verify through a known trusted portal or contact path and report the message.",
  },
  {
    category: "Attachment-based phishing",
    description:
      "A fictional message includes or links to a file designed to create pressure, request information, or trigger unsafe interaction.",
    commonClues:
      "Unexpected attachment, unusual file type, macro request, password-protected archive, cloud-share pressure, or misleading file name.",
    safeResponse:
      "Do not open or enable content. Verify the file and request independently through the approved workflow.",
  },
  {
    category: "Business email compromise",
    description:
      "A fictional message impersonates or misuses a trusted business identity to request payment, access, secrecy, or workflow changes.",
    commonClues:
      "Payment change, payroll update, gift cards, urgent transfer, secrecy, reply-chain context, or bypassed approval.",
    safeResponse:
      "Pause the transaction and confirm through a known independent contact and established approval process.",
  },
  {
    category: "Executive or authority impersonation",
    description:
      "A fictional message uses a leader, teacher, administrator, vendor, or trusted authority to pressure fast compliance.",
    commonClues:
      "Authority language, urgency, secrecy, unavailable-by-phone claim, unusual task, or out-of-process request.",
    safeResponse:
      "Verify through a separate known channel and follow the normal process regardless of claimed authority.",
  },
  {
    category: "Delivery, invoice, or account lure",
    description:
      "A fictional message uses a familiar service, package, invoice, subscription, or account notice to create urgency or curiosity.",
    commonClues:
      "Unexpected purchase, delivery problem, subscription renewal, refund, or invoice attached without context.",
    safeResponse:
      "Visit the known service independently or check the approved business system rather than using the message.",
  },
  {
    category: "Conversation or reply-chain abuse",
    description:
      "A fictional message appears inside or imitates an existing conversation to increase trust.",
    commonClues:
      "Sudden request change, unexpected attachment, different reply address, unusual tone, or new payment instructions.",
    safeResponse:
      "Confirm with the known participant using a separate contact path and compare the new request with the prior workflow.",
  },
  {
    category: "QR-code phishing",
    description:
      "A fictional message uses a QR code to move the recipient from the protected email environment to another device or destination.",
    commonClues:
      "Scan-to-login, scan-to-pay, urgent verification, mobile-only request, or lack of a visible destination.",
    safeResponse:
      "Do not scan an unexpected code. Use the trusted application or known website independently.",
  },
  {
    category: "Information or document request",
    description:
      "A fictional message requests sensitive records, personal details, student data, business documents, or account information.",
    commonClues:
      "Unusual recipient, external domain, urgency, broad data request, unclear purpose, or bypassed sharing controls.",
    safeResponse:
      "Confirm the requester, purpose, authorization, sensitivity, and approved sharing method before sending anything.",
  },
];

const evidenceMatrix = [
  {
    source: "Visible message content",
    supports:
      "The fictional display name, address shown, subject, body, links, attachment names, signatures, recipients, and requested action.",
    limitation:
      "Visible content can be copied, altered, imitated, or presented differently by clients.",
  },
  {
    source: "Message headers",
    supports:
      "The fictional routing, timestamps, message ID, reply path, return path, authentication results, and sending infrastructure.",
    limitation:
      "Headers require careful interpretation and may include legitimate complexity from forwarding, mailing, or security services.",
  },
  {
    source: "Message trace",
    supports:
      "The fictional delivery route, recipients, filtering decisions, quarantine state, delay, and final mailbox result.",
    limitation:
      "Trace data does not prove whether the recipient viewed or acted on the message.",
  },
  {
    source: "Security-tool verdict",
    supports:
      "The fictional spam, reputation, URL, attachment, malware, policy, and threat-analysis result at a specific time.",
    limitation:
      "Tool verdicts can be wrong, incomplete, delayed, or updated later.",
  },
  {
    source: "Mailbox events",
    supports:
      "The fictional delivery, read, move, delete, reply, forward, report, quarantine, and restore actions.",
    limitation:
      "Mailbox events can be incomplete and do not automatically prove what the user understood or intended.",
  },
  {
    source: "User report",
    supports:
      "The fictional recipient’s description of what they saw, expected, opened, clicked, entered, approved, or reported.",
    limitation:
      "Human memory can be incomplete, and user statements should be correlated with technical evidence.",
  },
  {
    source: "Identity and account evidence",
    supports:
      "The fictional sign-ins, MFA, sessions, password resets, factor changes, and application activity related to the message.",
    limitation:
      "Account events may have other causes and do not prove that the message triggered them.",
  },
  {
    source: "Business-process evidence",
    supports:
      "The fictional expected vendor, approval chain, payment process, document workflow, known contact, and current business context.",
    limitation:
      "Business processes can change, and owners may need to confirm exceptions or emergencies.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Preserve the message",
    detail:
      "Keep the fictional message, headers, delivery records, attachment names, links, user report, and security alerts without interacting with suspicious content.",
  },
  {
    step: "2",
    title: "Record the visible request",
    detail:
      "Identify the fictional sender claim, recipient, subject, requested action, urgency, secrecy, links, attachments, and business purpose.",
  },
  {
    step: "3",
    title: "Map the delivery path",
    detail:
      "Trace the fictional sending system, relays, recipient gateway, authentication, filtering, quarantine, delivery, and mailbox state.",
  },
  {
    step: "4",
    title: "Correlate user and account activity",
    detail:
      "Review fictional read, reply, click, attachment, report, sign-in, session, recovery, and application events.",
  },
  {
    step: "5",
    title: "Verify independently",
    detail:
      "Use a known fictional contact, trusted portal, approved directory, established workflow, or resource owner rather than the message itself.",
  },
  {
    step: "6",
    title: "Classify and document",
    detail:
      "Separate expected message, suspicious message, blocked attempt, confirmed issue, false positive, and evidence gap with validation and residual risk.",
  },
];


const classifications = [
  {
    classification: "Expected message",
    meaning:
      "The fictional sender, domain, request, timing, business process, security results, and independent verification match the expected relationship.",
    documentation:
      "Record the verified sender relationship, business purpose, supporting evidence, and any remaining limitation.",
  },
  {
    classification: "Suspicious message",
    meaning:
      "The fictional message contains meaningful inconsistencies, pressure, unexpected content, or business-process concerns but no confirmed harmful result.",
    documentation:
      "Preserve the message, identify the concerns, verify independently, assign an owner, and avoid unsupported attribution.",
  },
  {
    classification: "Blocked or quarantined attempt",
    meaning:
      "The fictional security environment prevents delivery, interaction, or access based on policy or threat evidence.",
    documentation:
      "Record the policy action, affected recipients, related-message search, verdict limits, and validation that legitimate communication is not unnecessarily blocked.",
  },
  {
    classification: "Confirmed phishing attempt",
    meaning:
      "The fictional evidence supports that the message intentionally impersonated, redirected, deceived, or requested unauthorized action.",
    documentation:
      "Record sender and domain evidence, requested action, affected recipients, delivery, interaction, containment, account review, and residual risk.",
  },
  {
    classification: "Confirmed account or business impact",
    meaning:
      "The fictional evidence supports that a recipient entered information, approved a transaction, changed an account, or created another measurable effect.",
    documentation:
      "Separate the message finding from the confirmed downstream action and preserve transaction, identity, application, and owner evidence.",
  },
  {
    classification: "False positive or expected exception",
    meaning:
      "The fictional message appears suspicious to a tool or reviewer but is supported by an approved sender, process, exception, and independent verification.",
    documentation:
      "Document why it is legitimate, whether controls need tuning, and how to preserve detection coverage.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional message or investigation lacks enough reliable sender, delivery, interaction, account, or business evidence for a confident conclusion.",
    documentation:
      "State the missing evidence, confidence, temporary control, owner, due date, and decision criteria.",
  },
];

const timeline = [
  {
    time: "08:42:10",
    source: "Sender system",
    event:
      "A fictional message is created with display name “Northstar Finance Director” and subject “Urgent payment account update.”",
    meaning:
      "Establishes the visible sender claim and requested business context.",
  },
  {
    time: "08:42:13",
    source: "Sending service",
    event:
      "The fictional message is accepted from finance-director@northstar-payments.example.",
    meaning:
      "Shows the actual sending address differs from the organization’s normal northstar-learning.example domain.",
  },
  {
    time: "08:42:16",
    source: "Transport",
    event:
      "The message passes authentication for northstar-payments.example and travels through a cloud mail provider.",
    meaning:
      "Supports that the lookalike domain authorized the message, not that the domain is expected or trustworthy.",
  },
  {
    time: "08:42:19",
    source: "Security gateway",
    event:
      "The message receives a medium risk score because of a newly observed domain, urgency language, and payment-change request.",
    meaning:
      "Provides a tool interpretation that requires business and sender context.",
  },
  {
    time: "08:42:22",
    source: "Mailbox",
    event:
      "The fictional message is delivered with an external-sender warning banner.",
    meaning:
      "Confirms delivery and a visible warning, but not recipient interaction.",
  },
  {
    time: "08:46:00",
    source: "Recipient",
    event:
      "The fictional recipient opens the message and notices instructions not to call the sender.",
    meaning:
      "Adds user-observed social-engineering and process-bypass context.",
  },
  {
    time: "08:47:15",
    source: "Mailbox",
    event:
      "The recipient uses the approved report-phishing function without replying or opening the attachment.",
    meaning:
      "Supports safe handling and preserves the message for review.",
  },
  {
    time: "08:49:00",
    source: "Business verification",
    event:
      "The real fictional Finance Director confirms through a known phone number that no payment change was requested.",
    meaning:
      "Provides independent sender and business-process verification.",
  },
  {
    time: "08:51:00",
    source: "Investigation",
    event:
      "The analyst correlates the visible address, lookalike domain, authentication, message trace, warning banner, user report, and owner confirmation.",
    meaning:
      "Builds an evidence-based message timeline.",
  },
  {
    time: "08:54:00",
    source: "Related-message search",
    event:
      "The fictional environment finds six related messages sent to finance and purchasing staff.",
    meaning:
      "Expands the affected-recipient scope.",
  },
  {
    time: "08:57:00",
    source: "Containment",
    event:
      "The related messages are quarantined under an approved defensive action.",
    meaning:
      "Prevents additional mailbox interaction while preserving evidence.",
  },
  {
    time: "09:03:00",
    source: "User review",
    event:
      "No recipient reports replying, opening the attachment, approving payment, or entering credentials.",
    meaning:
      "Supports no confirmed user or transaction impact, while acknowledging user reports are not the only evidence.",
  },
  {
    time: "09:10:00",
    source: "Account review",
    event:
      "No related fictional sign-in, recovery, factor, session, or payment-application event is found.",
    meaning:
      "Provides additional evidence against confirmed downstream impact.",
  },
  {
    time: "Day 2",
    source: "Validation",
    event:
      "The organization confirms legitimate vendor mail still delivers and the phishing pattern remains blocked.",
    meaning:
      "Completes security and business validation.",
  },
];

const commonMistakes = [
  "Trusting a fictional display name without checking the actual address and domain.",
  "Treating a professional signature, logo, legal footer, or familiar writing style as proof of legitimacy.",
  "Assuming a message is safe because SPF, DKIM, or another authentication result passes.",
  "Assuming a message is harmful only because one authentication result fails.",
  "Opening a suspicious link or attachment to determine what it contains.",
  "Replying to the message to verify the sender instead of using an independent known contact path.",
  "Treating delivery as proof that the recipient read, clicked, replied, entered information, or approved a request.",
  "Treating a click or attachment open as automatic proof of compromise or data loss.",
  "Ignoring business-process evidence such as normal approval chains, known vendors, expected documents, and transaction controls.",
  "Relying on one tool score or alert title without preserving raw message and delivery evidence.",
  "Deleting or forwarding the fictional message before preserving its original evidence and case identifiers.",
  "Publishing real addresses, headers, message IDs, network details, recipient lists, screenshots, or private message content.",
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of an email message?",
    choices: [
      "A communication object containing visible content, addressing information, transport metadata, links, attachments, and delivery records.",
      "Only the text visible in the message body.",
      "Only the sender’s display name.",
      "Only the attachment included with the message.",
    ],
    answer: 0,
    explanation:
      "Defensive review includes both visible content and hidden delivery, security, mailbox, and interaction evidence.",
  },
  {
    question:
      "Why should a display name not be trusted alone?",
    choices: [
      "It can differ from the actual sender address and can be easily imitated.",
      "It always reveals the physical sender.",
      "It cannot appear in legitimate mail.",
      "It automatically proves the message is external.",
    ],
    answer: 0,
    explanation:
      "Display names are presentation fields, not reliable proof of sender identity.",
  },
  {
    question:
      "What does message delivery directly prove?",
    choices: [
      "The fictional mail environment placed the message in the recorded mailbox, folder, or quarantine state.",
      "The recipient opened the message.",
      "The recipient trusted the sender.",
      "The recipient clicked a link.",
    ],
    answer: 0,
    explanation:
      "Delivery and user interaction are separate stages with separate evidence.",
  },
  {
    question:
      "Which response is safest when a fictional message requests an urgent payment change?",
    choices: [
      "Pause the request and verify through a known independent contact and the established approval process.",
      "Reply to the message and ask whether it is real.",
      "Use the phone number included in the message.",
      "Approve it because the display name belongs to a leader.",
    ],
    answer: 0,
    explanation:
      "Independent verification avoids relying on contact details controlled by the suspicious message.",
  },
  {
    question:
      "What does a passing authentication result for a lookalike domain prove?",
    choices: [
      "The fictional domain authorized the message under the recorded authentication result.",
      "The domain belongs to the expected organization.",
      "The message content is safe.",
      "The physical sender is known with certainty.",
    ],
    answer: 0,
    explanation:
      "Authentication can validate domain authorization without proving that the domain is expected, trustworthy, or uncompromised.",
  },
  {
    question:
      "Why are message headers useful?",
    choices: [
      "They can provide fictional routing, timestamps, message identifiers, reply paths, and authentication-related evidence.",
      "They prove safe intent.",
      "They reveal every user action.",
      "They replace business verification.",
    ],
    answer: 0,
    explanation:
      "Headers support technical analysis but must be combined with business, user, mailbox, and security evidence.",
  },
  {
    question:
      "Which conclusion is strongest when a fictional user reports a message without opening links or attachments?",
    choices: [
      "The report supports safe handling, but defenders should still review related recipients, delivery, and account activity.",
      "The message had no risk because nothing was opened.",
      "Every related message was automatically removed.",
      "The sender is known with certainty.",
    ],
    answer: 0,
    explanation:
      "Safe user behavior reduces some risk but does not replace investigation and scope review.",
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
        Module Homepage
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


function MessageJourneyGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Message Journey
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Sender to Defensive Review
      </h2>

      <div className="mt-6 grid gap-5">
        {messageJourney.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.stage}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  What happens
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.description}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.evidence}
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
          </div>
        ))}
      </div>
    </section>
  );
}

function VisibleMessageGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visible Message Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Parts the Recipient Can See
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {visibleMessageParts.map((item) => (
          <div
            key={item.part}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.part}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Fictional example
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.example}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive question
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveQuestion}
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

function HiddenEvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Hidden Message Evidence
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Technical Parts Behind the Inbox View
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {hiddenEvidenceParts.map((item) => (
          <div
            key={item.part}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.part}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveUse}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
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

function ThreatCategoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Email Threat Landscape
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Common Message-Based Threat Categories
      </h2>

      <div className="mt-6 grid gap-5">
        {threatCategories.map((item) => (
          <div
            key={item.category}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.category}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  What it is
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.description}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Common clues
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.commonClues}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Safe response
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.safeResponse}
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
        What Email Evidence Can and Cannot Prove
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
        Message Classification
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Seven Outcomes with Different Evidence Requirements
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
        Review a Suspicious Message in Six Steps
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
        Correlated Message Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Payment-Change Message from Delivery to Closure
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


export default function EmailThreatLandscapeAndMessageAnatomyPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.1 Email Threat Landscape and Message Anatomy
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how a fictional message moves from sender to recipient, what
            the user sees, what technical evidence exists behind the inbox
            view, which threat categories defenders review, and why no single
            clue proves legitimacy, intent, interaction, or impact.
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
          lessonTitle="Email Threat Landscape and Message Anatomy"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional display name, logo, signature, warning banner, or security score is only one piece of evidence.",
            "I will distinguish message creation, transport, filtering, delivery, mailbox activity, user interaction, account activity, and business impact.",
            "I will preserve suspicious-message evidence without opening links, attachments, QR codes, or login prompts.",
            "I will verify senders and requests through independent trusted paths rather than the message itself.",
            "I will use only fictional messages, addresses, domains, headers, recipients, systems, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Inbox View Is Only the Front Layer of the Evidence"
        >
          <p className="leading-8">
            A fictional recipient may see a familiar leader’s name, a polished
            logo, a professional signature, and an urgent request. Behind that
            visible message are the actual address, domain, reply path,
            transport route, authentication results, filtering decisions,
            delivery records, mailbox events, user actions, account activity,
            and business process. Defenders examine the complete message story
            before reaching a conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The email looks professional and passed a security check, so
                the payment request must be legitimate.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the message, compare the visible and hidden evidence,
                verify the request independently, and review delivery, user,
                account, and business activity.”
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
          title="Email Is a Delivery Channel for Both Legitimate Work and Deceptive Requests"
        >
          <p className="leading-8">
            Email can deliver normal business communication, school notices,
            invoices, support updates, document shares, account notifications,
            and project work. The same channel can also carry impersonation,
            credential requests, payment fraud, unsafe attachments, misleading
            links, QR codes, data requests, and conversation abuse. Effective
            defense protects users without assuming every unusual message is
            malicious or every polished message is safe.
          </p>
        </SectionCard>

        <MessageJourneyGuide />
        <VisibleMessageGuide />
        <HiddenEvidenceGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Five Layers of Message Evidence"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Claim",
                "Who does the fictional message claim to be from, and what does it ask the recipient to do?",
              ],
              [
                "Transport",
                "Which address, domain, mail systems, routes, timestamps, and authentication results delivered it?",
              ],
              [
                "Control",
                "Which fictional filtering, warning, quarantine, reputation, URL, and attachment decisions occurred?",
              ],
              [
                "Interaction",
                "Was the message delivered, viewed, replied to, reported, clicked, opened, forwarded, or ignored?",
              ],
              [
                "Impact",
                "Did any fictional account, application, payment, document, or business process actually change?",
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

        <ThreatCategoryGuide />
        <EvidenceGuide />
        <ClassificationGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Email Message and Delivery Terms
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
          title="Fake Email Security Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services email environment."
          metrics={[
            {
              label: "Messages reviewed",
              value: "42",
              note: "Expected communication, suspicious requests, quarantined messages, confirmed phishing attempts, and evidence-incomplete cases.",
            },
            {
              label: "Evidence sources",
              value: "8",
              note: "Visible content, headers, trace, security verdicts, mailbox events, user reports, account evidence, and business process.",
            },
            {
              label: "Safe user reports",
              value: "11",
              note: "Recipients reported messages without replying, opening attachments, scanning QR codes, or entering information.",
            },
          ]}
        />

        <FakeAlertCard
          title="Lookalike-Domain Payment Change Request Delivered with External Warning"
          severity="High"
          time="08:42 AM"
          source="Fake Email Security Review Console"
          details="A fictional message displays the Northstar Finance Director’s name but uses finance-director@northstar-payments.example. The message passes authentication for the lookalike domain, requests an urgent confidential payment change, and tells the recipient not to call. The user reports it without opening the attachment."
          recommendation="Preserve the original message, headers, trace, security verdict, user report, and business evidence; verify through a known contact path; search for related recipients; quarantine approved matches; review user and account activity; and validate that legitimate vendor communication still works."
        />

        <FakeLogPanel
          title="Fake Message-Delivery and Response Timeline"
          logs={[
            "08:42:10 CREATE display_name='Northstar Finance Director' subject='Urgent payment account update'",
            "08:42:13 SEND from='finance-director@northstar-payments.example'",
            "08:42:16 AUTH domain='northstar-payments.example' result='pass'",
            "08:42:19 FILTER risk='medium' reasons='new_domain,urgency,payment_change'",
            "08:42:22 DELIVERY folder='inbox' banner='external_sender'",
            "08:46:00 USER_ACTION message='opened' attachment='not_opened' link='not_clicked'",
            "08:47:15 USER_ACTION report_phishing='true'",
            "08:49:00 VERIFY known_contact='finance_director' request='not_authorized'",
            "08:51:00 REVIEW evidence='message,headers,trace,user,business'",
            "08:54:00 SEARCH related_messages='6'",
            "08:57:00 CONTAIN action='quarantine_related'",
            "09:03:00 USER_REVIEW replies='0' attachments_opened='0' payments_approved='0'",
            "09:10:00 ACCOUNT_REVIEW suspicious_signins='0' recovery_events='0'",
            "DAY2 VALIDATION legitimate_vendor_mail='working' phishing_pattern='blocked'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Message-Anatomy Conclusion Is Best Supported?"
          evidence={[
            "The fictional display name matches the organization’s Finance Director.",
            "The actual sender uses the external lookalike domain northstar-payments.example.",
            "The message passes authentication for that lookalike domain.",
            "The request asks for an urgent confidential payment change and says not to call.",
            "The normal process requires independent approval and known vendor verification.",
            "The real fictional Finance Director confirms no change was requested.",
            "The recipient reports the message without opening the attachment.",
            "No payment, sign-in, recovery, or account-change evidence is found.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The message is a confirmed impersonation and payment-change phishing attempt, while the available evidence shows delivery but no confirmed user, account, or transaction impact.",
            "The message is legitimate because authentication passed.",
            "The recipient was compromised because the message was opened.",
            "The message caused a payment change because it requested one.",
          ]}
          bestAnswer={0}
          explanation="The sender, domain, business-process, and independent-verification evidence support impersonation. Delivery and opening do not prove downstream impact, and the account and payment review finds none."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Email Analysis"
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
          title="Build a Fictional Email Message Anatomy Map"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Message Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty supplied fictional records covering the display
                name, sender address, recipient, subject, body, reply path,
                links, attachment names, headers, route, authentication,
                filtering, delivery, mailbox actions, user report, account
                activity, business process, containment, and validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map the fictional message journey from creation through defensive closure.</li>
                <li>Separate visible content, hidden transport evidence, security decisions, mailbox events, user actions, and business impact.</li>
                <li>Identify the claimed sender, actual address, domain, reply path, subject, requested action, links, attachment names, and urgency.</li>
                <li>Classify the threat category without relying on one clue.</li>
                <li>State confirmed facts, reasonable conclusions, alternative explanations, and evidence gaps.</li>
                <li>Create an independent verification plan that avoids suspicious content and message-controlled contact details.</li>
                <li>Recommend narrow containment, related-message search, account review, validation, monitoring, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not click links, open
            attachments, scan QR codes, enter credentials, reply to suspicious
            messages, call numbers inside the message, test real mail systems,
            or publish real addresses, headers, message IDs, recipients,
            screenshots, or private message content.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Familiar Display Name Uses an Unexpected Domain"
          scenario="A fictional message shows a school administrator’s display name but uses an unfamiliar external domain. It asks the recipient to review a confidential document through a message link."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the message, compare the actual address and domain, review delivery and authentication evidence, verify through a known contact path or trusted portal, and report the message without opening the link.",
              outcome:
                "Best defensive choice. The response uses independent verification and preserves evidence without unsafe interaction.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the link because the display name is familiar.",
              outcome:
                "Unsafe. A display name does not prove sender identity or destination safety.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reply to the message and ask whether it is legitimate.",
              outcome:
                "Weak verification. The reply path may be controlled by the same suspicious sender.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Security Tool Allows a Message That Still Breaks Business Process"
          scenario="A fictional vendor payment-change message passes filtering and domain authentication, but it requests an unusual bank-account update outside the normal approval workflow."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the payment change, preserve the message and security results, verify the vendor through a known independent contact, compare the request with the approved workflow, and document the final decision.",
              outcome:
                "Best defensive choice. Technical acceptance does not replace business-process verification.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the change because the message passed authentication.",
              outcome:
                "Unsafe. Authentication does not prove the request is expected or the sender account is uncompromised.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Block every future message from the vendor immediately.",
              outcome:
                "Overbroad. Independent verification and narrow evidence-based action are required.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Email Threat Landscape and Message Anatomy Checklist"
          items={[
            "I identify the fictional display name, actual address, domain, recipients, subject, body, reply path, links, attachment names, and requested action.",
            "I distinguish visible message content from headers, transport, authentication, filtering, delivery, mailbox, user, account, and business evidence.",
            "I trace the message from creation through sending, routing, inspection, delivery, user interaction, investigation, and closure.",
            "I recognize credential phishing, attachment lures, business email compromise, authority impersonation, invoice or delivery lures, reply-chain abuse, QR-code phishing, and information requests.",
            "I do not treat logos, signatures, writing style, warning banners, security scores, or authentication results as proof by themselves.",
            "I verify suspicious requests through a known independent contact, trusted portal, approved directory, or established workflow.",
            "I preserve the original fictional message and case identifiers without interacting with suspicious links, attachments, QR codes, or login prompts.",
            "I separate delivery, viewing, clicking, opening, replying, entering information, approving transactions, account changes, and confirmed impact.",
            "I document confirmed facts, reasonable conclusions, alternative explanations, evidence gaps, confidence, validation, monitoring, and residual risk.",
            "I use only fictional evidence and never publish real addresses, headers, message IDs, recipients, screenshots, or private message content.",
          ]}
        />

        <MiniQuiz
          title="I7.1 Mini Quiz: Email Threat Landscape and Message Anatomy"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Email Message Anatomy Map using at least thirty visible-message, header, transport, authentication, security-control, delivery, mailbox, user-action, account, business-process, containment, validation, and closure records. Include the sender claim, actual address, domain, reply path, message journey, threat category, evidence matrix, confirmed facts, conclusions, alternatives, gaps, safe verification, related-message scope, account review, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional display names, addresses, domains, message IDs, recipients, systems, users, organizations, and evidence.",
            "Include at least one lookalike-domain message, one legitimate exception, one correctly blocked message, and one evidence-incomplete case.",
            "Clearly separate delivery, mailbox interaction, content interaction, account activity, transaction activity, and confirmed impact.",
            "Do not include real messages, addresses, headers, links, attachments, QR codes, credentials, screenshots, or private communications.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "The visible inbox view is only one layer of message evidence.",
            "Email analysis separates sender claims, transport, security controls, mailbox activity, user interaction, account activity, and business impact.",
            "Display names, branding, signatures, and writing style can be imitated and should not be trusted alone.",
            "Passing authentication can validate a domain relationship without proving the domain or request is expected and safe.",
            "Independent verification should use trusted contact paths and established processes rather than the suspicious message.",
            "Strong closure documents evidence, classification, containment, validation, monitoring, owner acceptance, and residual risk.",
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