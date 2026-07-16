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
const previousLesson = `${modulePath}/email-threat-landscape-and-message-anatomy`;
const nextLesson = `${modulePath}/phishing-indicators-and-social-engineering`;

const objectives = [
  "Explain the difference between fictional display names, mailbox addresses, domains, envelope senders, reply paths, return paths, and message identifiers.",
  "Interpret fictional SPF, DKIM, DMARC, alignment, and authentication-result evidence without overstating what a pass or fail proves.",
  "Recognize lookalike domains, subdomain confusion, newly observed domains, compromised legitimate accounts, forwarding, mailing services, and vendor exceptions.",
  "Compare sender identity, domain evidence, message routing, authentication, business relationships, and independent verification.",
  "Create a professional fictional Sender Identity and Email Authentication Review with confirmed facts, limitations, findings, owners, validation, and residual risk.",
];

const vocabulary = [
  [
    "Display name",
    "The fictional sender label shown prominently in an inbox, which can be changed independently from the actual mailbox address.",
  ],
  [
    "Mailbox address",
    "The fictional email address associated with the visible sender or recipient, usually containing a local part and domain.",
  ],
  [
    "Local part",
    "The fictional portion of an email address before the @ symbol.",
  ],
  [
    "Domain",
    "The fictional name after the @ symbol that identifies the sending or receiving email domain.",
  ],
  [
    "Subdomain",
    "A fictional label placed before a parent domain, such as billing.vendor.example.",
  ],
  [
    "Envelope sender",
    "The fictional transport address used by mail systems for delivery and bounce handling.",
  ],
  [
    "Reply-To",
    "A fictional header that tells the mail client where replies should be sent instead of using the visible From address.",
  ],
  [
    "SPF",
    "A fictional domain policy that identifies which sending systems are authorized to send on behalf of the envelope-sender domain.",
  ],
  [
    "DKIM",
    "A fictional cryptographic signature that allows a recipient to verify that selected message content was signed by a domain and was not changed in certain ways.",
  ],
  [
    "DMARC",
    "A fictional policy and reporting layer that checks alignment between the visible From domain and SPF or DKIM identities.",
  ],
  [
    "Alignment",
    "The fictional relationship between the visible From domain and the domain authenticated through SPF or DKIM.",
  ],
  [
    "Lookalike domain",
    "A fictional domain designed to resemble a trusted domain through spelling, punctuation, extra words, or visual similarity.",
  ],
];

const senderIdentityLayers = [
  {
    layer: "Display name",
    whatItShows:
      "The fictional human-readable sender label shown in the inbox.",
    defensiveUse:
      "Compare the claimed person or organization with the actual address, known relationship, request, and prior communication.",
    limitation:
      "Display names can be copied, changed, or automatically generated.",
  },
  {
    layer: "Visible From address",
    whatItShows:
      "The fictional mailbox address displayed as the message sender.",
    defensiveUse:
      "Check the local part, domain, spelling, expected organization, and relationship to the request.",
    limitation:
      "A valid-looking address can belong to a lookalike domain or a compromised legitimate account.",
  },
  {
    layer: "Reply-To address",
    whatItShows:
      "The fictional address that will receive replies if it differs from the visible From address.",
    defensiveUse:
      "Identify unexpected reply redirection, external domains, or unrelated mailboxes.",
    limitation:
      "Different reply addresses can be legitimate for support, ticketing, mailing lists, and shared workflows.",
  },
  {
    layer: "Envelope sender",
    whatItShows:
      "The fictional transport identity used for bounce handling and SPF evaluation.",
    defensiveUse:
      "Compare the transport sender with the visible From domain and the expected sending service.",
    limitation:
      "Cloud services, vendors, forwarding systems, and bulk mail can use different transport domains.",
  },
  {
    layer: "Return path",
    whatItShows:
      "The fictional finalized transport return address recorded after message delivery.",
    defensiveUse:
      "Trace the bounce path and compare it with the sender infrastructure.",
    limitation:
      "The return path may legitimately differ from the visible sender.",
  },
  {
    layer: "Sending infrastructure",
    whatItShows:
      "The fictional servers, cloud providers, gateways, applications, and relays that sent or forwarded the message.",
    defensiveUse:
      "Determine whether the path matches the domain’s expected service and known business relationship.",
    limitation:
      "Shared cloud infrastructure can serve both legitimate and unwanted senders.",
  },
  {
    layer: "Authentication identity",
    whatItShows:
      "The fictional domain evaluated through SPF, DKIM, and DMARC.",
    defensiveUse:
      "Determine which domain authorized or signed the message and whether it aligns with the visible From domain.",
    limitation:
      "A domain can authenticate its own deceptive message or a compromised account can send authenticated mail.",
  },
  {
    layer: "Business identity",
    whatItShows:
      "The fictional real-world person, department, vendor, service, or organization the message claims to represent.",
    defensiveUse:
      "Verify the relationship, request, timing, process, and owner through an independent trusted path.",
    limitation:
      "Technical authentication does not automatically confirm the business identity or legitimacy of the request.",
  },
];

const domainPatterns = [
  {
    pattern: "Misspelled lookalike",
    example:
      "northstar-learnlng.example uses a lowercase l where the trusted domain uses i.",
    concern:
      "The fictional domain visually resembles the expected organization while being technically different.",
    verification:
      "Compare the exact domain character by character and use a known trusted directory or website independently.",
  },
  {
    pattern: "Added business word",
    example:
      "northstar-learning-payments.example adds a relevant word to appear connected to finance.",
    concern:
      "The fictional domain can sound believable even though it is not the trusted parent domain.",
    verification:
      "Confirm whether the organization actually owns or uses the domain for that business process.",
  },
  {
    pattern: "Misleading subdomain",
    example:
      "northstar-learning.example.login-support.example has the real registered domain login-support.example.",
    concern:
      "The trusted name appears in the left side of the hostname while the controlling domain appears later.",
    verification:
      "Identify the registrable parent domain and avoid relying on the first visible words.",
  },
  {
    pattern: "Different top-level domain",
    example:
      "northstar-learning.co.example is presented where northstar-learning.example is expected.",
    concern:
      "A small suffix change can be easy to miss in a long address.",
    verification:
      "Compare the full trusted domain and known communication history.",
  },
  {
    pattern: "Hyphen and punctuation variation",
    example:
      "north-star-learning.example differs from northstar-learning.example.",
    concern:
      "Punctuation changes can create a visually similar but separate domain.",
    verification:
      "Check the exact domain and independently confirm whether it is an approved alternate.",
  },
  {
    pattern: "Newly observed vendor domain",
    example:
      "billing.vendor-new.example sends a payment notice for a known fictional vendor.",
    concern:
      "The domain may be legitimate, newly adopted, misconfigured, or deceptive.",
    verification:
      "Use the known vendor contact and approved procurement records rather than the message.",
  },
  {
    pattern: "Compromised legitimate domain",
    example:
      "A real fictional vendor domain sends an unusual bank-change request from a valid mailbox.",
    concern:
      "The domain and authentication may be correct while the account or workflow is compromised.",
    verification:
      "Verify the request through a separate trusted contact and established approval process.",
  },
  {
    pattern: "Third-party sending service",
    example:
      "A fictional school newsletter is sent through mail.campaign-service.example.",
    concern:
      "The sending infrastructure differs from the organization’s primary domain.",
    verification:
      "Confirm the service relationship, alignment, signing domain, message purpose, and prior approved use.",
  },
];

const spfGuide = [
  {
    result: "SPF pass",
    directMeaning:
      "The fictional sending system is authorized by the SPF policy for the evaluated envelope-sender domain.",
    doesNotProve:
      "The visible From identity, business request, domain trustworthiness, physical sender, or message safety.",
  },
  {
    result: "SPF fail",
    directMeaning:
      "The fictional sending system is not authorized by the evaluated SPF policy.",
    doesNotProve:
      "That the message is definitely malicious; forwarding, misconfiguration, stale policy, or service changes may explain the result.",
  },
  {
    result: "SPF soft fail",
    directMeaning:
      "The fictional policy indicates the sender is probably unauthorized but does not request the strongest failure treatment.",
    doesNotProve:
      "That the recipient must always block the message without considering policy and context.",
  },
  {
    result: "SPF neutral",
    directMeaning:
      "The fictional domain policy does not make a strong authorization statement about the sending system.",
    doesNotProve:
      "That the message is safe or unsafe.",
  },
  {
    result: "SPF none",
    directMeaning:
      "No usable fictional SPF policy was found for the evaluated domain.",
    doesNotProve:
      "That the message is automatically phishing.",
  },
  {
    result: "SPF temperror",
    directMeaning:
      "A temporary fictional error prevented reliable SPF evaluation.",
    doesNotProve:
      "That the domain policy failed or the message is malicious.",
  },
  {
    result: "SPF permerror",
    directMeaning:
      "A permanent fictional policy problem prevented correct evaluation.",
    doesNotProve:
      "The sender’s intent, but it does indicate an authentication configuration issue.",
  },
  {
    result: "SPF pass without alignment",
    directMeaning:
      "The fictional envelope-sender domain authorizes the sending system, but it does not align with the visible From domain.",
    doesNotProve:
      "DMARC success unless DKIM provides aligned authentication.",
  },
];

const dkimGuide = [
  {
    concept: "DKIM signature",
    meaning:
      "A fictional domain signs selected message headers and content using a private key.",
    defensiveValue:
      "The recipient can verify the signature with the domain’s published key.",
    limitation:
      "A valid signature does not prove the message is legitimate, expected, or harmless.",
  },
  {
    concept: "Signing domain",
    meaning:
      "The fictional domain recorded in the DKIM signature.",
    defensiveValue:
      "Shows which domain accepted responsibility for the signature.",
    limitation:
      "The signing domain may differ from the visible From domain.",
  },
  {
    concept: "Selector",
    meaning:
      "A fictional label used to locate the correct public key for a DKIM signature.",
    defensiveValue:
      "Supports key rotation and multiple sending services.",
    limitation:
      "A selector name alone has little meaning without the verified signature and domain.",
  },
  {
    concept: "DKIM pass",
    meaning:
      "The fictional signature verifies under the published key and the signed content matches.",
    defensiveValue:
      "Supports message integrity for the signed fields and domain identity.",
    limitation:
      "A compromised account or deceptive domain can still produce valid DKIM signatures.",
  },
  {
    concept: "DKIM fail",
    meaning:
      "The fictional signature does not verify.",
    defensiveValue:
      "Indicates changed content, invalid signature, missing key, configuration problem, or unsupported transformation.",
    limitation:
      "Forwarding or mailing-list changes can sometimes break a legitimate signature.",
  },
  {
    concept: "Aligned DKIM",
    meaning:
      "The fictional signing domain aligns with the visible From domain under DMARC rules.",
    defensiveValue:
      "Can satisfy the DKIM path for DMARC.",
    limitation:
      "Alignment does not confirm the real-world sender or business request.",
  },
  {
    concept: "Unaligned DKIM",
    meaning:
      "The fictional signature verifies, but the signing domain does not align with the visible From domain.",
    defensiveValue:
      "Shows a valid third-party or unrelated signature.",
    limitation:
      "It does not satisfy DMARC through DKIM by itself.",
  },
  {
    concept: "Unsigned content",
    meaning:
      "Some fictional message fields or body portions may not be covered by the signature.",
    defensiveValue:
      "Encourages reviewers to understand which content was protected.",
    limitation:
      "A DKIM pass should not be described as proof that every visible element was unchanged.",
  },
];

const dmarcGuide = [
  {
    concept: "DMARC pass",
    meaning:
      "The fictional visible From domain aligns with a passing SPF or DKIM identity.",
    defensiveValue:
      "Supports domain-level authentication for the visible sender domain.",
    limitation:
      "It does not prove the mailbox owner, physical sender, message intent, or business request.",
  },
  {
    concept: "DMARC fail",
    meaning:
      "Neither the fictional SPF nor DKIM path both passes and aligns with the visible From domain.",
    defensiveValue:
      "Identifies an authentication and alignment problem relevant to sender trust.",
    limitation:
      "Forwarding, mailing services, or misconfiguration can cause legitimate failure.",
  },
  {
    concept: "Policy none",
    meaning:
      "The fictional domain requests monitoring rather than quarantine or rejection.",
    defensiveValue:
      "Allows reporting and observation during deployment.",
    limitation:
      "A monitoring policy does not instruct the receiver to block failed messages.",
  },
  {
    concept: "Policy quarantine",
    meaning:
      "The fictional domain requests suspicious handling for messages that fail DMARC.",
    defensiveValue:
      "Can support spam-folder or quarantine treatment.",
    limitation:
      "The recipient still applies local policy and may use additional evidence.",
  },
  {
    concept: "Policy reject",
    meaning:
      "The fictional domain requests rejection of messages that fail DMARC.",
    defensiveValue:
      "Reduces direct spoofing of the protected visible From domain.",
    limitation:
      "It does not stop lookalike domains, compromised accounts, or authenticated malicious mail.",
  },
  {
    concept: "Relaxed alignment",
    meaning:
      "The fictional authenticated domain and visible From domain may align at the organizational-domain level.",
    defensiveValue:
      "Supports legitimate use of related subdomains.",
    limitation:
      "It is less exact than strict alignment.",
  },
  {
    concept: "Strict alignment",
    meaning:
      "The fictional authenticated domain must exactly match the visible From domain.",
    defensiveValue:
      "Provides a tighter identity relationship.",
    limitation:
      "It may be harder to use with some legitimate sending architectures.",
  },
  {
    concept: "DMARC reporting",
    meaning:
      "The fictional domain owner receives aggregate or failure information about authentication results.",
    defensiveValue:
      "Supports visibility into legitimate senders, misconfiguration, and spoofing patterns.",
    limitation:
      "Reports do not automatically remediate every issue or identify physical senders.",
  },
];

const evidenceMatrix = [
  {
    source: "Visible From address",
    supports:
      "The fictional mailbox and domain presented to the recipient as the sender.",
    limitation:
      "The address can belong to a lookalike domain or a compromised legitimate account.",
  },
  {
    source: "Reply-To",
    supports:
      "The fictional destination configured for replies.",
    limitation:
      "A different address can be either suspicious or legitimate depending on the workflow.",
  },
  {
    source: "SPF result",
    supports:
      "Whether the fictional sending system is authorized for the evaluated envelope-sender domain.",
    limitation:
      "SPF does not authenticate the visible From domain unless alignment requirements are met.",
  },
  {
    source: "DKIM result",
    supports:
      "Whether a fictional signature verifies for the signing domain and selected content.",
    limitation:
      "DKIM does not prove that the signing domain or message request is trustworthy.",
  },
  {
    source: "DMARC result",
    supports:
      "Whether the fictional visible From domain aligns with a passing SPF or DKIM identity.",
    limitation:
      "DMARC pass does not prove mailbox ownership, safe intent, or expected business context.",
  },
  {
    source: "Message routing",
    supports:
      "The fictional sending infrastructure, relays, timestamps, gateways, and delivery path.",
    limitation:
      "Shared cloud services and forwarding can make the path complex.",
  },
  {
    source: "Historical relationship",
    supports:
      "Whether the fictional domain, sender, service, and request match previous approved communication.",
    limitation:
      "Past legitimacy does not guarantee a current account is uncompromised.",
  },
  {
    source: "Independent verification",
    supports:
      "Whether a fictional known owner, vendor, colleague, teacher, or process confirms the message and request.",
    limitation:
      "Verification must use a trusted path not controlled by the suspicious message.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Record every sender identity",
    detail:
      "Capture the fictional display name, visible From address, domain, Reply-To, envelope sender, return path, and message ID.",
  },
  {
    step: "2",
    title: "Identify the real domain relationships",
    detail:
      "Separate local parts, subdomains, parent domains, lookalike domains, sending services, and expected organization domains.",
  },
  {
    step: "3",
    title: "Interpret authentication",
    detail:
      "Review fictional SPF, DKIM, DMARC, alignment, policy, and authentication-result fields without treating them as a final verdict.",
  },
  {
    step: "4",
    title: "Compare routing and history",
    detail:
      "Check fictional sending infrastructure, message path, prior communication, vendor records, service relationships, and recent changes.",
  },
  {
    step: "5",
    title: "Verify the business identity",
    detail:
      "Use a known fictional contact, trusted portal, approved directory, contract record, or established workflow.",
  },
  {
    step: "6",
    title: "Classify and document",
    detail:
      "Separate expected sender, legitimate third-party service, misconfiguration, spoofing, lookalike domain, compromised account, and evidence gap.",
  },
];


const classifications = [
  {
    classification: "Expected authenticated sender",
    meaning:
      "The fictional visible From domain, aligned authentication, sending infrastructure, business relationship, request, and independent verification all match.",
    documentation:
      "Record the trusted relationship, exact domain, authentication path, business owner, expected workflow, and any remaining limitation.",
  },
  {
    classification: "Legitimate third-party sender",
    meaning:
      "A fictional approved service sends on behalf of an organization using different transport or signing infrastructure.",
    documentation:
      "Record the service owner, approved sending relationship, aligned identity, message purpose, prior use, and validation.",
  },
  {
    classification: "Authentication misconfiguration",
    meaning:
      "A fictional legitimate sender fails or partially fails authentication because of missing, stale, incorrect, or incompatible configuration.",
    documentation:
      "Preserve the message and results, confirm the sender independently, assign the domain owner, correct the configuration, and validate future mail.",
  },
  {
    classification: "Direct domain spoofing",
    meaning:
      "A fictional message claims a protected visible From domain but fails the required aligned authentication and is not independently verified.",
    documentation:
      "Record the claimed domain, authentication failure, delivery action, affected recipients, related-message search, and containment.",
  },
  {
    classification: "Lookalike-domain impersonation",
    meaning:
      "A fictional message uses a separate domain designed to resemble a trusted organization.",
    documentation:
      "Record the exact spelling difference, authentication for the lookalike domain, claimed identity, request, business mismatch, and verification.",
  },
  {
    classification: "Compromised legitimate account possible",
    meaning:
      "A fictional message authenticates correctly for an expected domain but contains an unusual or unauthorized request.",
    documentation:
      "Preserve the message, verify through a separate trusted path, review account and session evidence, and avoid assuming authentication proves safe intent.",
  },
  {
    classification: "Forwarding or mailing exception",
    meaning:
      "A fictional message has altered authentication or routing because of an approved forwarding, mailing-list, ticketing, or distribution process.",
    documentation:
      "Confirm the forwarding or service relationship, original sender evidence, expected transformations, owner, and monitoring impact.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional sender, domain, authentication, routing, history, ownership, or business evidence is insufficient for a reliable conclusion.",
    documentation:
      "State the missing evidence, confidence, investigation owner, temporary handling, due date, and decision criteria.",
  },
];

const timeline = [
  {
    time: "10:14:02",
    source: "Message creation",
    event:
      "A fictional message is created with display name “Northstar Benefits Team” and visible From address benefits@northstar-benefits.example.",
    meaning:
      "Establishes the sender claim and the external domain presented to the recipient.",
  },
  {
    time: "10:14:05",
    source: "Envelope",
    event:
      "The fictional envelope sender is bounce@mailer.northstar-benefits.example.",
    meaning:
      "Identifies the transport identity used for SPF evaluation.",
  },
  {
    time: "10:14:08",
    source: "SPF",
    event:
      "SPF passes for mailer.northstar-benefits.example.",
    meaning:
      "The sending service is authorized for the envelope-sender domain.",
  },
  {
    time: "10:14:09",
    source: "DKIM",
    event:
      "DKIM passes with signing domain northstar-benefits.example.",
    meaning:
      "The message verifies under the lookalike domain’s signing identity.",
  },
  {
    time: "10:14:10",
    source: "DMARC",
    event:
      "DMARC passes because the visible From domain aligns with the DKIM signing domain.",
    meaning:
      "The lookalike domain authenticated its own message correctly.",
  },
  {
    time: "10:14:12",
    source: "Security gateway",
    event:
      "The message is marked external and receives a medium-risk score for a newly observed domain and credential-update language.",
    meaning:
      "The tool recognizes context concerns even though domain authentication passes.",
  },
  {
    time: "10:14:15",
    source: "Mailbox",
    event:
      "The fictional message is delivered to three employees with an external-sender banner.",
    meaning:
      "Confirms recipient scope and delivery, not user interaction.",
  },
  {
    time: "10:18:20",
    source: "User report",
    event:
      "One recipient reports the message without using its benefits-login button.",
    meaning:
      "Supports safe handling and preserves the message for investigation.",
  },
  {
    time: "10:21:00",
    source: "Domain comparison",
    event:
      "The approved benefits provider uses northstar-employee-benefits.example, not northstar-benefits.example.",
    meaning:
      "Confirms the authenticated sender domain is separate from the expected provider domain.",
  },
  {
    time: "10:24:00",
    source: "Independent verification",
    event:
      "The fictional Human Resources owner confirms no benefits credential update was scheduled.",
    meaning:
      "Provides business-owner evidence that the request is unauthorized.",
  },
  {
    time: "10:28:00",
    source: "Related-message search",
    event:
      "The fictional environment identifies nine messages using the same sender domain and subject pattern.",
    meaning:
      "Expands the recipient and message scope.",
  },
  {
    time: "10:31:00",
    source: "Containment",
    event:
      "The related messages are quarantined under approved defensive policy.",
    meaning:
      "Reduces further interaction while preserving evidence.",
  },
  {
    time: "10:36:00",
    source: "Account review",
    event:
      "No fictional recipient account shows a related sign-in, recovery, factor, or session event.",
    meaning:
      "Supports no confirmed credential or account impact in the reviewed scope.",
  },
  {
    time: "Day 2",
    source: "Validation",
    event:
      "Legitimate benefits-provider messages continue to deliver, and the lookalike-domain pattern remains blocked.",
    meaning:
      "Confirms narrow containment and preservation of required communication.",
  },
];

const commonMistakes = [
  "Trusting a fictional display name because it matches a known leader, teacher, vendor, or organization.",
  "Reading only the local part of an address and ignoring the exact domain.",
  "Treating a trusted name inside a subdomain as the real controlling domain.",
  "Assuming every SPF pass authenticates the visible From address.",
  "Assuming every SPF fail proves phishing without considering forwarding, service changes, and configuration.",
  "Treating DKIM pass as proof that the real-world sender or business request is legitimate.",
  "Treating DMARC pass as proof that the domain, mailbox, content, and request are safe.",
  "Ignoring a suspicious request because the sender uses a real and correctly authenticated domain.",
  "Blocking every third-party sender without confirming approved services and business relationships.",
  "Replying to the fictional message to verify a suspicious sender identity.",
  "Using only a domain-age or reputation score without sender, authentication, business, and account evidence.",
  "Publishing real addresses, domains, headers, message IDs, authentication records, recipients, or internal mail architecture.",
];

const quizQuestions = [
  {
    question:
      "What is the main weakness of a display name?",
    choices: [
      "It can be changed or copied independently from the actual sender address.",
      "It always proves the physical sender.",
      "It cannot appear in legitimate messages.",
      "It is the same as the envelope sender.",
    ],
    answer: 0,
    explanation:
      "A display name is a presentation field and should be compared with the actual address, domain, and business relationship.",
  },
  {
    question:
      "What does SPF primarily evaluate?",
    choices: [
      "Whether the fictional sending system is authorized for the evaluated envelope-sender domain.",
      "Whether the visible message is truthful.",
      "Whether the recipient clicked a link.",
      "Whether the physical sender is known.",
    ],
    answer: 0,
    explanation:
      "SPF evaluates sending-system authorization for the transport identity, not complete message legitimacy.",
  },
  {
    question:
      "What does a DKIM pass directly support?",
    choices: [
      "The fictional signature verifies for the signing domain and covered content.",
      "The visible From address is always aligned.",
      "The business request is approved.",
      "The mailbox account is uncompromised.",
    ],
    answer: 0,
    explanation:
      "DKIM verifies a signature and selected message content for a signing domain.",
  },
  {
    question:
      "What does DMARC alignment compare?",
    choices: [
      "The fictional visible From domain with the domain authenticated through SPF or DKIM.",
      "The subject line with the attachment name.",
      "The recipient with the mailbox folder.",
      "The display name with the signature block.",
    ],
    answer: 0,
    explanation:
      "DMARC connects authentication to the domain users see in the visible From address.",
  },
  {
    question:
      "A fictional lookalike domain passes SPF, DKIM, and DMARC for itself. What is the strongest conclusion?",
    choices: [
      "The lookalike domain authenticated its own message, but that does not make it the expected organization.",
      "The message must be safe.",
      "The physical sender is known with certainty.",
      "The recipient should follow every request.",
    ],
    answer: 0,
    explanation:
      "Authentication can be completely valid for a deceptive or unrelated domain.",
  },
  {
    question:
      "Why can a correctly authenticated legitimate-domain message still be dangerous?",
    choices: [
      "The fictional account may be compromised or the request may be unauthorized and outside normal process.",
      "Authentication never works.",
      "Legitimate domains cannot send email.",
      "DMARC automatically blocks all messages.",
    ],
    answer: 0,
    explanation:
      "Authentication verifies domain relationships, not safe intent, account integrity, or business approval.",
  },
  {
    question:
      "What is the safest way to verify a suspicious sender or request?",
    choices: [
      "Use a known independent contact, trusted portal, approved directory, or established business process.",
      "Reply to the message.",
      "Call the number in the message signature.",
      "Use the message link.",
    ],
    answer: 0,
    explanation:
      "Independent verification avoids relying on contact paths controlled by the suspicious message.",
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


function SenderIdentityGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Sender Identity Layers
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Identities Hidden Inside One Message
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {senderIdentityLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                What it shows
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.whatItShows}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveUse}
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

function DomainPatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Domain Analysis
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Domain Patterns Defenders Must Distinguish
      </h2>

      <div className="mt-6 grid gap-5">
        {domainPatterns.map((item) => (
          <div
            key={item.pattern}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.pattern}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Fictional example
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.example}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Concern
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.concern}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Verification
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.verification}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpfGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        SPF Interpretation
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight SPF Results and Their Limits
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {spfGuide.map((item) => (
          <div
            key={item.result}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.result}</h3>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Direct meaning
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.directMeaning}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Does not prove
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.doesNotProve}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DkimGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        DKIM Interpretation
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight DKIM Concepts and Their Limits
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {dkimGuide.map((item) => (
          <div
            key={item.concept}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.concept}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive value
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveValue}
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

function DmarcGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        DMARC Interpretation
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight DMARC Concepts and Their Limits
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {dmarcGuide.map((item) => (
          <div
            key={item.concept}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.concept}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive value
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defensiveValue}
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

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Sender and Authentication Evidence Can Prove
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
        Sender Classification
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Outcomes with Different Evidence Requirements
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
        Review Sender Identity in Six Steps
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
        Correlated Sender Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow an Authenticated Lookalike Domain from Delivery to Closure
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


export default function SenderIdentityDomainsAndEmailAuthenticationPage() {
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
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.2 Sender Identity, Domains, and Email Authentication
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders compare fictional display names, addresses,
            domains, reply paths, envelope senders, SPF, DKIM, DMARC,
            alignment, routing, business relationships, and independent
            verification without treating authentication as a complete verdict.
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
          lessonTitle="Sender Identity, Domains, and Email Authentication"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional display name, mailbox address, envelope sender, Reply-To, signing domain, and business identity can differ.",
            "I will interpret SPF, DKIM, DMARC, and alignment as specific technical evidence rather than proof that a message is safe.",
            "I will compare exact domains, subdomains, lookalike patterns, sending services, routing, and approved business relationships.",
            "I will verify unusual requests through independent trusted paths rather than replying through the message.",
            "I will use only fictional domains, addresses, headers, authentication records, users, vendors, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="An Email Can Authenticate Perfectly and Still Be an Impersonation"
        >
          <p className="leading-8">
            A fictional lookalike domain can publish SPF, sign mail with DKIM,
            and pass DMARC for itself. Those results show that the domain
            authorized and signed its own message. They do not show that the
            domain belongs to the organization the recipient expected, that the
            mailbox is uncompromised, or that the requested action is approved.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “SPF, DKIM, and DMARC passed, so the sender and request must be
                legitimate.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Identify which domain authenticated, compare it with the
                expected sender, review the business relationship, and verify
                the request independently.”
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
          title="Sender Trust Requires Technical and Business Evidence"
        >
          <p className="leading-8">
            Defenders must support legitimate cloud services, vendors,
            forwarding systems, newsletters, ticketing tools, and shared
            workflows while identifying direct spoofing, lookalike domains,
            compromised accounts, and unsafe requests. Authentication helps
            explain domain relationships, but business verification determines
            whether the claimed identity and requested action are expected.
          </p>
        </SectionCard>

        <SenderIdentityGuide />
        <DomainPatternGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Ask Three Separate Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "Which domain authenticated?",
                "Identify the fictional envelope-sender domain, DKIM signing domain, visible From domain, and alignment result.",
              ],
              [
                "Is that the expected sender?",
                "Compare the exact domain, mailbox, service relationship, routing history, vendor record, and known communication.",
              ],
              [
                "Is the request approved?",
                "Verify the fictional business purpose, timing, owner, transaction, document, account, and normal workflow independently.",
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

        <SpfGuide />
        <DkimGuide />
        <DmarcGuide />
        <EvidenceGuide />
        <ClassificationGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Sender Identity and Authentication Terms
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
          title="Fake Sender Identity and Authentication Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services email environment."
          metrics={[
            {
              label: "Sender reviews",
              value: "36",
              note: "Expected senders, approved third-party services, misconfiguration, spoofing, lookalike domains, forwarding exceptions, and incomplete cases.",
            },
            {
              label: "Authentication paths",
              value: "3",
              note: "SPF, DKIM, and DMARC are reviewed with alignment, routing, sender history, and business verification.",
            },
            {
              label: "Domain findings",
              value: "7",
              note: "Two lookalike domains, one direct spoof, two vendor configuration issues, one forwarding exception, and one compromised-account concern.",
            },
          ]}
        />

        <FakeAlertCard
          title="Benefits Credential Message Passes Authentication for a Lookalike Domain"
          severity="High"
          time="10:14 AM"
          source="Fake Sender Authentication Review Console"
          details="A fictional message displays “Northstar Benefits Team” and uses benefits@northstar-benefits.example. SPF passes for its mailer subdomain, DKIM passes for northstar-benefits.example, and DMARC passes through aligned DKIM. The approved provider actually uses northstar-employee-benefits.example, and Human Resources confirms no credential update was scheduled."
          recommendation="Preserve the message, headers, authentication results, routing, user report, and business-owner evidence; document the exact domain difference; search for related recipients; quarantine approved matches; review account activity; and validate legitimate provider mail."
        />

        <FakeLogPanel
          title="Fake Sender Authentication Timeline"
          logs={[
            "10:14:02 FROM display_name='Northstar Benefits Team' address='benefits@northstar-benefits.example'",
            "10:14:05 ENVELOPE sender='bounce@mailer.northstar-benefits.example'",
            "10:14:08 SPF domain='mailer.northstar-benefits.example' result='pass'",
            "10:14:09 DKIM domain='northstar-benefits.example' result='pass'",
            "10:14:10 DMARC from_domain='northstar-benefits.example' result='pass' path='aligned_dkim'",
            "10:14:12 FILTER risk='medium' reasons='new_domain,credential_update'",
            "10:14:15 DELIVERY recipients='3' banner='external_sender'",
            "10:18:20 USER_REPORT link_clicked='false'",
            "10:21:00 DOMAIN_COMPARE expected='northstar-employee-benefits.example' observed='northstar-benefits.example'",
            "10:24:00 OWNER_VERIFY request='not_authorized'",
            "10:28:00 SEARCH related_messages='9'",
            "10:31:00 CONTAIN action='quarantine_related'",
            "10:36:00 ACCOUNT_REVIEW related_signins='0' recovery_events='0'",
            "DAY2 VALIDATION legitimate_provider_mail='working' lookalike_pattern='blocked'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Sender-Authentication Conclusion Is Best Supported?"
          evidence={[
            "The fictional display name says “Northstar Benefits Team.”",
            "The visible From domain is northstar-benefits.example.",
            "SPF passes for mailer.northstar-benefits.example.",
            "DKIM passes and aligns for northstar-benefits.example.",
            "DMARC passes.",
            "The approved provider uses northstar-employee-benefits.example.",
            "Human Resources confirms no credential update was scheduled.",
            "No recipient account shows related sign-in or recovery activity.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The lookalike domain authenticated its own message correctly, but the sender and request are not the approved benefits provider; the evidence supports impersonation without confirmed account impact.",
            "The message is legitimate because DMARC passed.",
            "The physical sender is known with certainty because DKIM passed.",
            "The recipient accounts were compromised because the message was delivered.",
          ]}
          bestAnswer={0}
          explanation="Authentication confirms the lookalike domain’s technical identity. Exact-domain comparison and independent business verification show that it is not the expected provider, while account review shows no confirmed downstream impact."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Sender Analysis"
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
          title="Complete a Fictional Sender Identity and Authentication Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Sender Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-two supplied fictional records covering display
                names, visible addresses, Reply-To, envelope senders, return
                paths, message IDs, parent domains, subdomains, SPF, DKIM,
                DMARC, alignment, routing, vendors, forwarding, user reports,
                account activity, business verification, containment, and
                validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Record each fictional sender identity and explain how the layers differ.</li>
                <li>Identify the exact local part, subdomain, parent domain, sending service, and expected organization domain.</li>
                <li>Interpret SPF, DKIM, DMARC, alignment, policy, and routing without overstating the result.</li>
                <li>Distinguish lookalike domain, direct spoof, approved third party, forwarding exception, misconfiguration, and compromised-account possibility.</li>
                <li>Verify the sender relationship and request through a trusted independent path.</li>
                <li>State confirmed facts, reasonable conclusions, alternatives, confidence, and evidence gaps.</li>
                <li>Recommend narrow containment, account review, configuration correction, monitoring, validation, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not send test messages,
            change DNS or authentication policies, access real mailboxes,
            contact suspicious senders, click links, open attachments, request
            credentials, or publish real addresses, domains, headers, message
            IDs, recipients, authentication records, or internal mail
            architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Lookalike Domain Passes SPF, DKIM, and DMARC"
          scenario="A fictional benefits message passes all three authentication checks for northstar-benefits.example, but the approved provider uses northstar-employee-benefits.example."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the authentication and message evidence, document the exact domain difference, verify the provider and request independently, search for related recipients, and classify based on the combined technical and business evidence.",
              outcome:
                "Best defensive choice. Passing authentication for a separate lookalike domain does not make it the expected provider.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Trust the message because DMARC passed.",
              outcome:
                "Unsafe. DMARC pass authenticates the visible domain but does not prove that the domain is expected or trustworthy.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Assume the authentication records are fake and ignore them.",
              outcome:
                "Weak analysis. The records are useful evidence and should be interpreted accurately.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Known Vendor Passes Authentication but Requests a New Bank Account"
          scenario="A fictional message comes from the real vendor domain and passes aligned authentication. The message asks for an urgent bank-account change outside the established approval process."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the change, preserve the message and authentication evidence, verify through the known vendor contact and approved procurement process, review account context if needed, and document the result.",
              outcome:
                "Best defensive choice. Authentication supports the domain identity but not the authorization of the unusual request.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the change because the sender domain is legitimate.",
              outcome:
                "Unsafe. A legitimate account can be compromised, and business controls still apply.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Block the vendor domain permanently.",
              outcome:
                "Overbroad. Independent verification and narrow evidence-based action are required.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Sender Identity, Domains, and Email Authentication Checklist"
          items={[
            "I identify the fictional display name, visible From address, Reply-To, envelope sender, return path, message ID, signing domain, and business identity.",
            "I separate the local part, subdomain, parent domain, expected organization domain, and third-party sending service.",
            "I compare domains character by character and recognize misspellings, added words, punctuation changes, suffix changes, and misleading subdomains.",
            "I interpret SPF as authorization for the evaluated envelope-sender domain.",
            "I interpret DKIM as a verified signature for a signing domain and selected content.",
            "I interpret DMARC as alignment between the visible From domain and a passing SPF or DKIM identity.",
            "I understand that SPF, DKIM, and DMARC passes do not prove the physical sender, safe intent, uncompromised account, or approved request.",
            "I distinguish legitimate third-party sending, forwarding, authentication misconfiguration, direct spoofing, lookalike domains, and compromised-account possibilities.",
            "I verify unusual senders and requests through known independent contacts, trusted portals, approved directories, and established business processes.",
            "I use only fictional evidence and never publish real addresses, domains, headers, message IDs, recipients, authentication records, or internal mail architecture.",
          ]}
        />

        <MiniQuiz
          title="I7.2 Mini Quiz: Sender Identity, Domains, and Email Authentication"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Sender Identity and Email Authentication Review using at least thirty-two display-name, visible-address, Reply-To, envelope-sender, return-path, message-ID, domain, subdomain, routing, SPF, DKIM, DMARC, alignment, policy, vendor, forwarding, user-report, account, business-verification, containment, validation, and closure records. Include exact domain comparison, sender-identity layers, authentication interpretation, classifications, confirmed facts, conclusions, alternatives, evidence gaps, owners, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional addresses, domains, headers, authentication results, users, vendors, services, systems, and organizations.",
            "Include one authenticated lookalike domain, one legitimate third-party sender, one vendor misconfiguration, one forwarding exception, and one possible compromised-account case.",
            "Clearly state which domain SPF evaluates, which domain DKIM signs, and how DMARC alignment is satisfied or failed.",
            "Do not include real messages, domains, addresses, DNS records, headers, recipients, credentials, screenshots, or internal mail architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "One message can contain several different technical and business sender identities.",
            "SPF evaluates authorization for the envelope-sender domain, not complete message legitimacy.",
            "DKIM verifies a signature for a signing domain and covered content, not the business request.",
            "DMARC checks alignment between the visible From domain and a passing SPF or DKIM identity.",
            "A lookalike domain can pass every authentication check for itself while still impersonating a trusted organization.",
            "Strong sender verification combines exact-domain analysis, authentication, routing, historical relationships, independent business confirmation, account review, and validation.",
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