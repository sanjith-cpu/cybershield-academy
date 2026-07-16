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
const previousLesson = `${modulePath}/sender-identity-domains-and-email-authentication`;
const nextLesson = `${modulePath}/links-attachments-and-safe-verification`;

const objectives = [
  "Identify fictional social-engineering techniques such as urgency, authority, fear, curiosity, scarcity, secrecy, helpfulness, impersonation, and reward.",
  "Distinguish message indicators from confirmed malicious behavior, user interaction, account impact, and business impact.",
  "Evaluate fictional requests using sender identity, domain, timing, relationship, business process, data sensitivity, requested action, and independent verification.",
  "Recognize when several small inconsistencies combine into a stronger phishing pattern even when spelling and formatting appear professional.",
  "Create a professional fictional Social-Engineering Analysis Report with evidence, persuasion techniques, verification, findings, owners, validation, and residual risk.",
];

const vocabulary = [
  [
    "Social engineering",
    "The fictional use of trust, pressure, emotion, authority, habit, or context to influence a person into taking an action.",
  ],
  [
    "Urgency",
    "A fictional message technique that pressures the recipient to act quickly before checking evidence or following normal process.",
  ],
  [
    "Authority",
    "A fictional technique that uses a leader, teacher, administrator, vendor, support agent, or other trusted role to increase compliance.",
  ],
  [
    "Fear",
    "A fictional technique that threatens account loss, punishment, financial harm, missed deadlines, or other negative consequences.",
  ],
  [
    "Curiosity",
    "A fictional technique that encourages interaction with surprising, private, unusual, or emotionally interesting content.",
  ],
  [
    "Scarcity",
    "A fictional technique that claims an opportunity, reward, access window, or resource is limited.",
  ],
  [
    "Secrecy",
    "A fictional instruction to avoid normal communication, approval, or review by other people.",
  ],
  [
    "Pretext",
    "A fictional story or situation created to make a request appear believable and appropriate.",
  ],
  [
    "Impersonation",
    "A fictional attempt to appear as another person, organization, service, department, or trusted relationship.",
  ],
  [
    "Business-process mismatch",
    "A fictional request that bypasses or conflicts with the normal approval, payment, document, account, or communication workflow.",
  ],
  [
    "Sensitive action",
    "A fictional action involving credentials, money, personal data, protected records, software installation, permissions, or account recovery.",
  ],
  [
    "Independent verification",
    "Confirmation through a fictional trusted contact path, portal, directory, system, or workflow not controlled by the suspicious message.",
  ],
];

const persuasionTechniques = [
  {
    technique: "Urgency",
    messageExample:
      "“Complete this within ten minutes or your fictional account will be suspended.”",
    defenderQuestion:
      "Is the deadline real, independently confirmed, and consistent with the normal process?",
    risk:
      "Urgency reduces the time available to inspect the sender, request, destination, and business context.",
  },
  {
    technique: "Authority",
    messageExample:
      "“The fictional principal needs you to send the records immediately.”",
    defenderQuestion:
      "Does the claimed authority normally make this request, and does the request still require approval?",
    risk:
      "Recipients may obey a title or role even when the request is unusual or outside policy.",
  },
  {
    technique: "Fear",
    messageExample:
      "“Your fictional payroll account has been compromised. Verify now to avoid losing access.”",
    defenderQuestion:
      "Can the account status be checked independently through the known trusted portal?",
    risk:
      "Fear encourages fast action and can make recipients ignore conflicting evidence.",
  },
  {
    technique: "Curiosity",
    messageExample:
      "“See the confidential evaluation that was accidentally shared with you.”",
    defenderQuestion:
      "Was the content expected, and can its existence be verified without opening the message link or attachment?",
    risk:
      "Curiosity can motivate interaction with content that has no valid business purpose.",
  },
  {
    technique: "Scarcity or reward",
    messageExample:
      "“Only the first fifty fictional employees can claim this benefit.”",
    defenderQuestion:
      "Is the offer listed in an approved communication channel or known program?",
    risk:
      "Limited-time rewards can discourage careful verification.",
  },
  {
    technique: "Secrecy",
    messageExample:
      "“Do not call or tell anyone because this is a confidential executive request.”",
    defenderQuestion:
      "Why does the request bypass normal review, and who independently owns the decision?",
    risk:
      "Secrecy prevents the recipient from using trusted people and processes that could identify the deception.",
  },
  {
    technique: "Helpfulness and routine",
    messageExample:
      "“I am updating the fictional staff directory and only need your password-confirmation form.”",
    defenderQuestion:
      "Does the routine task legitimately require the requested data or action?",
    risk:
      "A familiar administrative story can make an unnecessary request appear normal.",
  },
  {
    technique: "Relationship and familiarity",
    messageExample:
      "“Following up on our fictional project conversation—please review the revised document.”",
    defenderQuestion:
      "Does the sender, timing, prior conversation, document, and request match the real relationship?",
    risk:
      "Familiar names, topics, or conversation details can increase trust even when the sender or request changed.",
  },
];

const indicatorCategories = [
  {
    category: "Sender mismatch",
    indicators:
      "Fictional display name differs from the address, domain is unexpected, Reply-To redirects elsewhere, or the sender relationship cannot be verified.",
    whyItMatters:
      "The message may be impersonating a person or organization.",
    limitation:
      "Legitimate services, shared mailboxes, mailing tools, and vendors can use different addresses or reply paths.",
  },
  {
    category: "Request mismatch",
    indicators:
      "The fictional action does not match the sender’s role, the recipient’s responsibilities, or the established workflow.",
    whyItMatters:
      "A request can be deceptive even when the sender identity appears familiar.",
    limitation:
      "Real responsibilities and processes can change, so owners should confirm exceptions.",
  },
  {
    category: "Timing mismatch",
    indicators:
      "The fictional message arrives outside normal hours, during a known event, immediately before a deadline, or at an unusual point in a project.",
    whyItMatters:
      "Timing can be used to increase urgency or reduce access to normal reviewers.",
    limitation:
      "Legitimate senders can work across time zones or during emergencies.",
  },
  {
    category: "Language and tone mismatch",
    indicators:
      "The fictional wording, greeting, level of formality, grammar, signature, or communication style differs from prior messages.",
    whyItMatters:
      "An inconsistent tone may support impersonation or unusual account use.",
    limitation:
      "Writing style is not reliable proof because people use templates, mobile devices, assistants, and different languages.",
  },
  {
    category: "Sensitive-action request",
    indicators:
      "The fictional message asks for credentials, codes, money, personal data, protected records, permissions, software, or account recovery.",
    whyItMatters:
      "Sensitive actions require stronger verification and approval.",
    limitation:
      "Some legitimate workflows request sensitive actions through approved systems.",
  },
  {
    category: "Destination mismatch",
    indicators:
      "The fictional link, QR code, attachment, cloud share, login page, or phone number does not match the expected service.",
    whyItMatters:
      "The message may redirect the recipient to an untrusted destination.",
    limitation:
      "Legitimate services can use third-party domains or content-delivery systems.",
  },
  {
    category: "Process bypass",
    indicators:
      "The fictional sender asks the recipient to skip approval, avoid calling, use a new payment method, send data directly, or work outside the trusted portal.",
    whyItMatters:
      "Normal controls are intentionally removed from the decision.",
    limitation:
      "Rare emergency exceptions can exist but should still have accountable approval and documentation.",
  },
  {
    category: "Context mismatch",
    indicators:
      "The fictional project, invoice, event, person, account, document, or problem is unfamiliar or inconsistent with known facts.",
    whyItMatters:
      "A false pretext may be using a believable topic without a real relationship.",
    limitation:
      "The recipient may not know every legitimate activity, so independent verification is still needed.",
  },
];

const requestTypes = [
  {
    request: "Credential or login request",
    concern:
      "The fictional message asks the recipient to sign in, reset a password, confirm a code, or approve MFA.",
    verification:
      "Open the known trusted application or portal independently and check the account status there.",
    safeOutcome:
      "Use the approved account workflow and report the message if the request is absent or inconsistent.",
  },
  {
    request: "Payment or banking change",
    concern:
      "The fictional message requests a transfer, invoice payment, bank update, refund, gift card, or payroll change.",
    verification:
      "Use the established financial approval process and a known vendor or owner contact.",
    safeOutcome:
      "Pause the transaction until independent verification and required approvals are complete.",
  },
  {
    request: "Sensitive information request",
    concern:
      "The fictional sender asks for personal data, student records, payroll information, business documents, or account details.",
    verification:
      "Confirm requester identity, data owner, purpose, sensitivity, authorization, and approved sharing method.",
    safeOutcome:
      "Share only the minimum approved information through the trusted system, or do not share.",
  },
  {
    request: "Attachment review",
    concern:
      "The fictional message includes an unexpected invoice, form, report, archive, or shared document.",
    verification:
      "Confirm the document through the known sender, project system, or approved document platform.",
    safeOutcome:
      "Do not open or enable content until the file is independently verified and safely handled.",
  },
  {
    request: "Software or security action",
    concern:
      "The fictional message asks the recipient to install software, run a tool, disable protection, or change a security setting.",
    verification:
      "Check the approved support channel, software catalog, change record, or device-management system.",
    safeOutcome:
      "Use only approved software and support processes.",
  },
  {
    request: "Account recovery or factor change",
    concern:
      "The fictional message asks the recipient to reset access, register a factor, share a code, or approve an unexpected prompt.",
    verification:
      "Use the known account-recovery process and review current sessions and factors independently.",
    safeOutcome:
      "Reject unexpected prompts, protect codes, and contact approved support.",
  },
  {
    request: "Scheduling or meeting request",
    concern:
      "The fictional message uses a meeting invitation, calendar update, or collaboration request to create urgency or redirect the recipient.",
    verification:
      "Check the trusted calendar, organizer, project record, and known communication channel.",
    safeOutcome:
      "Accept or join only after confirming the organizer, purpose, and destination.",
  },
  {
    request: "Conversation continuation",
    concern:
      "The fictional message appears to continue an existing conversation but changes the sender, attachment, payment, link, or requested action.",
    verification:
      "Compare the prior thread, actual participants, reply path, timing, and known contact details.",
    safeOutcome:
      "Confirm the changed request independently before taking action.",
  },
];

const evidenceMatrix = [
  {
    source: "Message language",
    supports:
      "The fictional urgency, authority, fear, secrecy, curiosity, reward, helpfulness, and requested action visible in the message.",
    limitation:
      "Language can be used in both legitimate and deceptive communication.",
  },
  {
    source: "Sender identity",
    supports:
      "The fictional display name, address, domain, Reply-To, authentication, routing, and historical relationship.",
    limitation:
      "A legitimate account can be compromised, and a deceptive domain can authenticate its own mail.",
  },
  {
    source: "Business process",
    supports:
      "The fictional normal approval, payment, account, document, data-sharing, and support workflow.",
    limitation:
      "Processes can change or include approved exceptions.",
  },
  {
    source: "Message history",
    supports:
      "The fictional prior conversation, sender style, topic, timing, attachments, and expected next step.",
    limitation:
      "Conversation history can be copied, forwarded, or accessed through a compromised account.",
  },
  {
    source: "User report",
    supports:
      "The fictional recipient’s expectations, actions, observations, and understanding of the message.",
    limitation:
      "Human memory can be incomplete and should be correlated with technical evidence.",
  },
  {
    source: "Security controls",
    supports:
      "The fictional filtering, warning, reputation, URL, attachment, quarantine, and policy result.",
    limitation:
      "Tools can miss deceptive messages or flag legitimate ones.",
  },
  {
    source: "Account and application activity",
    supports:
      "The fictional sign-ins, MFA, sessions, data access, payment actions, uploads, downloads, and account changes after the message.",
    limitation:
      "Related activity may have another cause unless the timeline and identifiers connect it.",
  },
  {
    source: "Independent verification",
    supports:
      "Whether the fictional claimed sender, owner, vendor, teacher, administrator, or system confirms the request through a trusted path.",
    limitation:
      "Verification is reliable only when the path is independent from the suspicious message.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Preserve the message and context",
    detail:
      "Keep the fictional message, sender evidence, timestamps, user report, business context, security alerts, and related records without interacting with suspicious content.",
  },
  {
    step: "2",
    title: "Identify the persuasion",
    detail:
      "Mark fictional urgency, authority, fear, curiosity, scarcity, secrecy, helpfulness, familiarity, and pretext.",
  },
  {
    step: "3",
    title: "Define the requested action",
    detail:
      "Record whether the fictional message asks for credentials, money, data, software, permissions, account changes, documents, or communication.",
  },
  {
    step: "4",
    title: "Compare sender and process",
    detail:
      "Review the fictional sender identity, domain, relationship, timing, role, approval path, expected workflow, and destination.",
  },
  {
    step: "5",
    title: "Verify independently",
    detail:
      "Use a known fictional contact, trusted portal, approved directory, project record, financial process, or support workflow.",
  },
  {
    step: "6",
    title: "Classify and document",
    detail:
      "Separate expected communication, unusual but legitimate request, suspicious message, confirmed phishing, confirmed impact, false positive, and evidence gap.",
  },
];


const classifications = [
  {
    classification: "Expected communication",
    meaning:
      "The fictional sender, request, timing, business process, destination, and independent verification all match the expected relationship.",
    documentation:
      "Record the confirmed relationship, purpose, normal workflow, supporting evidence, and any remaining limitation.",
  },
  {
    classification: "Unusual but legitimate request",
    meaning:
      "The fictional message is outside the usual pattern but is independently confirmed by the accountable owner and follows an approved exception.",
    documentation:
      "Record why the request is unusual, who approved the exception, how it was verified, and when the exception ends.",
  },
  {
    classification: "Suspicious social-engineering pattern",
    meaning:
      "The fictional message combines pressure, impersonation, process mismatch, destination concerns, or sensitive-action requests but has no confirmed impact.",
    documentation:
      "Preserve the message, identify each technique, verify independently, assign an owner, and avoid claiming compromise without evidence.",
  },
  {
    classification: "Confirmed phishing attempt",
    meaning:
      "The fictional evidence supports a deceptive sender, false pretext, unauthorized request, or untrusted destination designed to influence the recipient.",
    documentation:
      "Record the sender and message evidence, persuasion pattern, requested action, affected recipients, containment, account review, and validation.",
  },
  {
    classification: "Confirmed user or business impact",
    meaning:
      "The fictional recipient entered information, approved a payment, changed an account, shared data, installed software, or completed another measurable action.",
    documentation:
      "Separate the deceptive message from the confirmed downstream action and preserve account, application, transaction, device, and owner evidence.",
  },
  {
    classification: "False positive",
    meaning:
      "The fictional message appears suspicious because of language, timing, domain, or tool interpretation but is supported by trusted sender and process evidence.",
    documentation:
      "Explain why the message is legitimate, identify any control-tuning opportunity, and preserve useful detection coverage.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional sender, message, user-action, account, business, or verification evidence is insufficient for a reliable conclusion.",
    documentation:
      "State the evidence gap, confidence, temporary control, investigation owner, due date, and decision criteria.",
  },
];

const indicatorCombinations = [
  {
    scenario: "Professional message with an unexpected payment request",
    clues:
      "Fictional branding and grammar look normal, but the sender domain is new, the bank account changed, the request is urgent, and normal approval is bypassed.",
    weakConclusion:
      "The message looks professional, so it is probably safe.",
    strongConclusion:
      "The combined sender, request, urgency, and process mismatches require independent vendor verification before any payment change.",
  },
  {
    scenario: "Real domain with unusual secrecy",
    clues:
      "A fictional message comes from a known domain but asks for gift cards, secrecy, and no phone calls.",
    weakConclusion:
      "A real domain proves the request is approved.",
    strongConclusion:
      "The account may be compromised or misused; verify the person and request through a separate trusted channel.",
  },
  {
    scenario: "Expected password reminder with a different destination",
    clues:
      "A fictional password-expiration message arrives at the expected time, but the link destination differs from the known portal.",
    weakConclusion:
      "The timing makes the message legitimate.",
    strongConclusion:
      "Expected timing does not validate the destination; open the trusted portal independently and report the message if the notice is absent.",
  },
  {
    scenario: "Unexpected invoice from a known vendor",
    clues:
      "A fictional vendor address is familiar, but the invoice number, amount, attachment, and project owner do not match current records.",
    weakConclusion:
      "The sender has emailed before, so the attachment is safe.",
    strongConclusion:
      "Historical communication is useful but does not replace invoice, project, attachment, and owner verification.",
  },
  {
    scenario: "Internal-looking account warning",
    clues:
      "The fictional message uses an administrator display name, urgent suspension language, an external domain, and a login button.",
    weakConclusion:
      "Account warnings are always urgent and should be handled through the message.",
    strongConclusion:
      "Check the known account portal and approved support channel independently; do not use the message login path.",
  },
  {
    scenario: "Familiar conversation with changed reply path",
    clues:
      "A fictional reply references a real project but redirects replies to a different external address and introduces a new document link.",
    weakConclusion:
      "The correct project name proves the sender is legitimate.",
    strongConclusion:
      "Conversation details can be copied or exposed; compare participants, reply path, domain, prior thread, and project records.",
  },
  {
    scenario: "Urgent document request from a leader",
    clues:
      "A fictional leader requests student records immediately, but the message uses a personal mailbox and bypasses the approved sharing platform.",
    weakConclusion:
      "Authority allows the leader to bypass the process.",
    strongConclusion:
      "Sensitive data still requires identity, purpose, minimum-necessary, approval, and approved-sharing verification.",
  },
  {
    scenario: "Security alert with no suspicious account activity",
    clues:
      "A fictional message uses fear and a login link, but the user reports it without clicking and no account events appear.",
    weakConclusion:
      "The account is compromised because the message threatened compromise.",
    strongConclusion:
      "The message may be phishing, while the available user and account evidence supports no confirmed downstream impact.",
  },
];

const timeline = [
  {
    time: "11:05:10",
    source: "Message delivery",
    event:
      "A fictional message displays “Northstar Executive Office” and requests six gift cards for an urgent confidential recognition event.",
    meaning:
      "Establishes authority, urgency, reward context, secrecy, and a sensitive financial request.",
  },
  {
    time: "11:05:12",
    source: "Sender evidence",
    event:
      "The visible address is executive-office@northstar-leadership.example, an external domain not used by the organization.",
    meaning:
      "Creates a sender and domain mismatch.",
  },
  {
    time: "11:05:15",
    source: "Message content",
    event:
      "The fictional sender says they are in a meeting and instructs the recipient not to call or discuss the request.",
    meaning:
      "Adds secrecy and prevents normal independent verification.",
  },
  {
    time: "11:05:18",
    source: "Business process",
    event:
      "The organization’s fictional purchasing process requires a purchase request, budget code, and two approvals.",
    meaning:
      "The message bypasses established financial controls.",
  },
  {
    time: "11:08:00",
    source: "Recipient",
    event:
      "The fictional recipient pauses and reports the message without replying or purchasing anything.",
    meaning:
      "Supports safe user handling and preserves the message.",
  },
  {
    time: "11:11:00",
    source: "Independent verification",
    event:
      "The real fictional executive assistant confirms no recognition event or gift-card request exists.",
    meaning:
      "Provides trusted business verification that the request is unauthorized.",
  },
  {
    time: "11:15:00",
    source: "Security review",
    event:
      "The analyst identifies authority, urgency, secrecy, external-domain impersonation, and financial-process bypass.",
    meaning:
      "Shows how several indicators combine into one social-engineering pattern.",
  },
  {
    time: "11:18:00",
    source: "Related-message search",
    event:
      "The fictional environment finds eight related messages sent to assistants and purchasing staff.",
    meaning:
      "Expands the affected-recipient scope.",
  },
  {
    time: "11:22:00",
    source: "Containment",
    event:
      "The related messages are quarantined under approved policy.",
    meaning:
      "Reduces additional interaction while preserving evidence.",
  },
  {
    time: "11:27:00",
    source: "User review",
    event:
      "No fictional recipient reports buying gift cards, replying, calling message-provided numbers, or sharing codes.",
    meaning:
      "Supports no confirmed financial or user impact in the reviewed group.",
  },
  {
    time: "11:32:00",
    source: "Account review",
    event:
      "No related fictional sign-in, MFA, recovery, session, or purchasing-system event is found.",
    meaning:
      "Adds technical evidence against confirmed downstream account impact.",
  },
  {
    time: "Day 2",
    source: "Validation",
    event:
      "Legitimate executive communication remains available, and the impersonation pattern remains blocked.",
    meaning:
      "Completes narrow control and business validation.",
  },
];

const commonMistakes = [
  "Looking only for spelling or grammar errors and missing professional, well-written fictional phishing messages.",
  "Trusting authority, job title, familiarity, or urgency instead of following the approved process.",
  "Assuming a message is safe because it contains accurate names, projects, invoices, or conversation details.",
  "Treating one indicator as proof instead of combining sender, request, process, destination, timing, and business evidence.",
  "Replying to the message, calling a message-provided number, or using a message link to verify the request.",
  "Opening a fictional attachment or scanning a QR code because the sender claims the matter is urgent.",
  "Sharing credentials, codes, personal data, protected records, or payment details through an unexpected email workflow.",
  "Assuming every unusual message is malicious without checking legitimate exceptions and business-owner evidence.",
  "Treating a delivered or opened message as proof that the recipient completed the requested action.",
  "Treating a user report as complete proof without reviewing delivery, account, application, and related-recipient evidence.",
  "Applying broad blocking or account removal without preserving evidence and validating legitimate communication.",
  "Publishing real messages, addresses, phone numbers, links, QR codes, recipients, business records, screenshots, or private content.",
];

const quizQuestions = [
  {
    question:
      "What is social engineering?",
    choices: [
      "The fictional use of trust, pressure, emotion, authority, habit, or context to influence a person into taking an action.",
      "A method for proving every email is malicious.",
      "A type of password storage.",
      "A mail-delivery protocol.",
    ],
    answer: 0,
    explanation:
      "Social engineering focuses on influencing human decisions rather than relying only on a technical control failure.",
  },
  {
    question:
      "Which message most clearly uses secrecy as a persuasion technique?",
    choices: [
      "“Do not call or tell anyone because this fictional executive request is confidential.”",
      "“The monthly report is available in the approved portal.”",
      "“The meeting begins tomorrow at 2:00 PM.”",
      "“Your normal invoice was approved by purchasing.”",
    ],
    answer: 0,
    explanation:
      "Secrecy attempts to separate the recipient from trusted people and normal verification processes.",
  },
  {
    question:
      "Why is perfect grammar not reliable proof that a message is legitimate?",
    choices: [
      "Deceptive fictional messages can be professionally written, copied, templated, or generated.",
      "Legitimate messages always contain mistakes.",
      "Grammar reveals the physical sender.",
      "Security tools ignore professional messages.",
    ],
    answer: 0,
    explanation:
      "Writing quality is only one weak contextual clue and should not replace sender, request, process, and verification evidence.",
  },
  {
    question:
      "What is the safest response to an unexpected fictional payment-change request?",
    choices: [
      "Pause the request and verify through the established financial process and a known independent contact.",
      "Reply to the message and ask whether the new bank account is correct.",
      "Approve the change because the request is urgent.",
      "Use the phone number in the message signature.",
    ],
    answer: 0,
    explanation:
      "Independent verification avoids relying on a contact path controlled by the suspicious message.",
  },
  {
    question:
      "A message comes from a real fictional vendor domain but requests secrecy and a new bank account. What is the strongest conclusion?",
    choices: [
      "The domain evidence is useful, but the request still requires independent verification because a legitimate account may be compromised or misused.",
      "The payment change is approved because the domain is real.",
      "The message is safe because the sender wrote professionally.",
      "The vendor should be blocked permanently without verification.",
    ],
    answer: 0,
    explanation:
      "A legitimate sender identity does not automatically authorize an unusual or high-impact request.",
  },
  {
    question:
      "What is a business-process mismatch?",
    choices: [
      "A fictional request bypasses or conflicts with the normal approval, payment, document, account, or communication workflow.",
      "A message arrives during business hours.",
      "A known sender uses the approved portal.",
      "A request includes the correct owner and approvals.",
    ],
    answer: 0,
    explanation:
      "Process mismatches are strong contextual indicators because they remove established controls.",
  },
  {
    question:
      "Which conclusion is strongest when a user reports a phishing message without clicking and no account activity is found?",
    choices: [
      "The message may be a confirmed phishing attempt, while the available evidence shows no confirmed user, account, or business impact.",
      "The account is definitely compromised.",
      "The message is harmless because the user did not click.",
      "The sender is known with certainty.",
    ],
    answer: 0,
    explanation:
      "The message classification and downstream-impact conclusion should remain separate.",
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


function PersuasionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Persuasion Techniques
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways a Message Tries to Influence Decisions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {persuasionTechniques.map((item) => (
          <div
            key={item.technique}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.technique}
            </h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Fictional message example
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.messageExample}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Defender question
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defenderQuestion}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Why it matters
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

function IndicatorCategoryGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Phishing Indicators
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Indicator Categories and Their Limits
      </h2>

      <div className="mt-6 grid gap-5">
        {indicatorCategories.map((item) => (
          <div
            key={item.category}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.category}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Indicators
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.indicators}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Why it matters
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.whyItMatters}
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

function RequestTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Sensitive Requests
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Request Types That Require Strong Verification
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {requestTypes.map((item) => (
          <div
            key={item.request}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.request}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.concern}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Independent verification
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.verification}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Safe outcome
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.safeOutcome}
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
        What Social-Engineering Evidence Can and Cannot Prove
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

function CombinationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Combined Indicators
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Cases Where Several Clues Matter More Than One
      </h2>

      <div className="mt-6 grid gap-5">
        {indicatorCombinations.map((item) => (
          <div
            key={item.scenario}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.scenario}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Combined clues
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.clues}
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

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong conclusion
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongConclusion}
                </p>
              </div>
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
        Analyze Social Engineering in Six Steps
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
        Correlated Social-Engineering Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Gift-Card Impersonation from Delivery to Closure
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


export default function PhishingIndicatorsAndSocialEngineeringPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.3 Phishing Indicators and Social Engineering
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional messages use urgency, authority, fear,
            curiosity, scarcity, secrecy, helpfulness, familiarity, and
            impersonation—and how defenders combine sender, request, process,
            destination, user, account, and business evidence before deciding
            what the message means.
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
          lessonTitle="Phishing Indicators and Social Engineering"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that professional writing, familiar names, correct logos, and real project details do not prove a fictional message is legitimate.",
            "I will identify persuasion techniques without treating one clue as proof of malicious intent or impact.",
            "I will compare the sender, request, destination, timing, relationship, business process, user action, and account evidence.",
            "I will verify sensitive requests through trusted independent paths rather than replying, clicking, calling message-provided numbers, or opening attachments.",
            "I will use only fictional messages, addresses, domains, users, businesses, records, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Modern Phishing Often Looks Professional"
        >
          <p className="leading-8">
            A fictional phishing message may use correct grammar, accurate job
            titles, real project names, familiar branding, and a believable
            reason for contact. The strongest indicators often appear in the
            relationship between several details: an unusual request, a new
            domain, urgent timing, secrecy, an unexpected destination, and a
            bypassed approval process.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The message has no spelling mistakes and mentions the correct
                project, so it must be safe.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Compare the sender, request, timing, destination, relationship,
                approval process, and independent verification before acting.”
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
          title="Social Engineering Targets Normal Human Behavior"
        >
          <p className="leading-8">
            People are expected to be helpful, respond to authority, meet
            deadlines, protect accounts, support coworkers, and complete normal
            business tasks. Social engineering turns those useful habits into
            pressure. Defensive education should not blame recipients. It
            should give them a repeatable process for pausing, checking,
            verifying, reporting, and recovering safely.
          </p>
        </SectionCard>

        <PersuasionGuide />
        <IndicatorCategoryGuide />
        <RequestTypeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Analyze the Request, Not Just the Message Appearance"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Claim",
                "Who does the fictional message claim to represent, and what relationship should exist?",
              ],
              [
                "Pressure",
                "Which urgency, authority, fear, curiosity, secrecy, reward, or familiarity techniques are present?",
              ],
              [
                "Action",
                "Does the fictional request involve credentials, money, data, software, permissions, recovery, or another sensitive change?",
              ],
              [
                "Process",
                "Does the request follow the expected approval, payment, document, support, account, and communication workflow?",
              ],
              [
                "Verification",
                "Which trusted independent path can confirm the sender, request, destination, and owner?",
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

        <EvidenceGuide />
        <ClassificationGuide />
        <CombinationGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Social-Engineering and Verification Terms
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
          title="Fake Social-Engineering Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services email environment."
          metrics={[
            {
              label: "Messages reviewed",
              value: "38",
              note: "Expected messages, unusual legitimate requests, suspicious patterns, confirmed phishing attempts, and evidence-incomplete cases.",
            },
            {
              label: "Persuasion patterns",
              value: "8",
              note: "Urgency, authority, fear, curiosity, scarcity, secrecy, helpfulness, and familiarity.",
            },
            {
              label: "Sensitive requests",
              value: "14",
              note: "Credentials, payments, data, attachments, software, recovery, meetings, and conversation changes.",
            },
          ]}
        />

        <FakeAlertCard
          title="Executive Gift-Card Request Uses Authority, Urgency, and Secrecy"
          severity="High"
          time="11:05 AM"
          source="Fake Social-Engineering Review Console"
          details="A fictional message displays “Northstar Executive Office,” uses an unfamiliar external domain, requests six gift cards for an urgent confidential recognition event, and tells the recipient not to call or discuss the request. The normal purchasing process requires a budget code and two approvals."
          recommendation="Preserve the message and business evidence, verify through a known executive-office contact, search for related recipients, quarantine approved matches, review user and purchasing activity, validate legitimate executive communication, and document no confirmed impact if the evidence supports that conclusion."
        />

        <FakeLogPanel
          title="Fake Gift-Card Impersonation Timeline"
          logs={[
            "11:05:10 DELIVERY display_name='Northstar Executive Office' request='six_gift_cards'",
            "11:05:12 SENDER domain='northstar-leadership.example' relationship='unapproved_external'",
            "11:05:15 CONTENT techniques='authority,urgency,secrecy' instruction='do_not_call'",
            "11:05:18 PROCESS required='purchase_request,budget_code,two_approvals'",
            "11:08:00 USER_ACTION report_phishing='true' reply='false' purchase='false'",
            "11:11:00 VERIFY known_contact='executive_assistant' request='not_authorized'",
            "11:15:00 REVIEW finding='social_engineering_pattern'",
            "11:18:00 SEARCH related_messages='8'",
            "11:22:00 CONTAIN action='quarantine_related'",
            "11:27:00 USER_REVIEW gift_cards_purchased='0' codes_shared='0'",
            "11:32:00 ACCOUNT_REVIEW suspicious_signins='0' purchasing_events='0'",
            "DAY2 VALIDATION legitimate_executive_mail='working' pattern='blocked'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Social-Engineering Conclusion Is Best Supported?"
          evidence={[
            "The fictional display name claims to be the Northstar Executive Office.",
            "The sender uses an unfamiliar external domain.",
            "The request asks for six gift cards within thirty minutes.",
            "The message says the executive is in a meeting and cannot be called.",
            "The message instructs the recipient not to discuss the request.",
            "The normal process requires a purchase request, budget code, and two approvals.",
            "The known executive assistant confirms no request exists.",
            "No recipient reports buying gift cards or sharing codes.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The message is a confirmed executive-impersonation phishing attempt using authority, urgency, secrecy, and process bypass, while the available evidence shows no confirmed financial impact.",
            "The message is legitimate because executives can make urgent requests.",
            "The recipient was compromised because the message was delivered.",
            "The request should be completed because it mentions a recognition event.",
          ]}
          bestAnswer={0}
          explanation="The sender, business-process, persuasion, and independent-verification evidence support impersonation. User and purchasing evidence support no confirmed downstream impact."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Social-Engineering Analysis"
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
          title="Complete a Fictional Social-Engineering Analysis"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Persuasion Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-four supplied fictional records covering sender
                identity, domains, message content, urgency, authority, fear,
                curiosity, secrecy, rewards, business process, links,
                attachment names, user reports, account activity, independent
                verification, containment, validation, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify every fictional persuasion technique and quote only short supplied examples.</li>
                <li>Define the exact requested action, resource, data, payment, credential, permission, or account change.</li>
                <li>Compare the claimed sender, actual sender evidence, relationship, timing, destination, and business process.</li>
                <li>Explain which indicators are direct facts and which are interpretations.</li>
                <li>State alternative legitimate explanations and what evidence would confirm or reject them.</li>
                <li>Create an independent verification plan that does not rely on message-controlled links, numbers, replies, or attachments.</li>
                <li>Classify the message and separately classify any user, account, application, data, or business impact.</li>
                <li>Recommend narrow containment, related-message search, account review, user communication, monitoring, validation, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not reply to suspicious
            messages, call message-provided numbers, click links, open
            attachments, scan QR codes, enter credentials, share codes, send
            money, change accounts, install software, or publish real messages,
            addresses, phone numbers, recipients, business records, screenshots,
            or private content.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Known Leader Requests Gift Cards and Says Not to Call"
          scenario="A fictional message uses a leader’s display name, an unfamiliar external domain, urgent timing, secrecy, and instructions to purchase gift cards outside the normal approval process."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the request, preserve the message, verify through a known independent contact, follow the purchasing process, report the message, and review related recipients and activity.",
              outcome:
                "Best defensive choice. The response resists authority and urgency while preserving the established controls.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Buy the gift cards because leaders can approve urgent purchases.",
              outcome:
                "Unsafe. Claimed authority does not replace identity and process verification.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reply to the message and ask whether the request is real.",
              outcome:
                "Weak verification. The same suspicious sender controls the reply path.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Real Vendor Domain Sends an Unusual Payment Change"
          scenario="A fictional message comes from a known vendor domain and uses professional language. It introduces a new bank account, asks for secrecy, and bypasses the established payment-change process."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the transaction, preserve the message and sender evidence, verify through the known vendor contact and procurement process, review the vendor account if appropriate, and document the result.",
              outcome:
                "Best defensive choice. A real domain and professional message do not authorize an unusual financial change.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the change because the sender has used the domain before.",
              outcome:
                "Unsafe. The account may be compromised or the request may be unauthorized.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Block the entire vendor domain permanently without verification.",
              outcome:
                "Overbroad. The response could interrupt legitimate business and does not investigate the actual issue.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Phishing Indicators and Social Engineering Checklist"
          items={[
            "I identify fictional urgency, authority, fear, curiosity, scarcity, secrecy, helpfulness, familiarity, impersonation, and pretext.",
            "I define the exact requested action and whether it involves credentials, money, data, software, permissions, recovery, documents, or another sensitive change.",
            "I compare sender identity, domain, Reply-To, relationship, timing, destination, business process, and historical context.",
            "I recognize sender, request, timing, tone, sensitive-action, destination, process, and context mismatches.",
            "I do not rely on spelling, grammar, logos, signatures, job titles, project names, or professional formatting as proof.",
            "I combine several indicators instead of treating one clue as a final verdict.",
            "I verify through known contacts, trusted portals, approved directories, financial controls, project records, or support workflows.",
            "I separate the message classification from user interaction, account activity, data exposure, transaction activity, and confirmed impact.",
            "I document facts, conclusions, alternatives, evidence gaps, confidence, owners, containment, validation, monitoring, and residual risk.",
            "I use only fictional evidence and never publish real messages, addresses, phone numbers, links, recipients, business records, screenshots, or private content.",
          ]}
        />

        <MiniQuiz
          title="I7.3 Mini Quiz: Phishing Indicators and Social Engineering"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Social-Engineering Analysis Report using at least thirty-four sender, domain, message, persuasion, request, timing, relationship, destination, business-process, security-control, user-action, account, application, independent-verification, containment, validation, and closure records. Include urgency, authority, fear, curiosity, scarcity, secrecy, helpfulness, familiarity, impersonation, pretext, indicator combinations, sensitive-action review, confirmed facts, conclusions, alternatives, evidence gaps, owners, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional messages, senders, addresses, domains, users, businesses, projects, accounts, and organizations.",
            "Include one authority-and-urgency case, one professional lookalike-domain case, one real-domain compromised-account possibility, one legitimate exception, and one evidence-incomplete case.",
            "Clearly separate message persuasion from sender identity, user interaction, account activity, transaction activity, and confirmed impact.",
            "Do not include real messages, addresses, phone numbers, links, attachments, QR codes, credentials, payment details, screenshots, or private communications.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Social engineering uses normal human trust, emotion, authority, habit, and context to influence decisions.",
            "Modern phishing can be professionally written and can include accurate names, projects, branding, and conversation details.",
            "Strong indicators often appear when sender, request, timing, destination, and business-process evidence conflict.",
            "Sensitive requests require stronger verification regardless of claimed urgency or authority.",
            "Independent verification must use a trusted path not controlled by the suspicious message.",
            "Professional analysis separates the phishing-message conclusion from user interaction, account activity, business impact, evidence gaps, and residual risk.",
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