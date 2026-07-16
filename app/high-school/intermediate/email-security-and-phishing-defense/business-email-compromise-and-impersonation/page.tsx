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
const previousLesson = `${modulePath}/links-attachments-and-safe-verification`;
const nextLesson = `${modulePath}/email-security-controls-and-filtering`;

const objectives = [
  "Explain fictional business email compromise, executive impersonation, vendor fraud, payroll diversion, gift-card requests, invoice manipulation, and reply-chain abuse.",
  "Distinguish direct spoofing, lookalike-domain impersonation, compromised legitimate accounts, forwarded conversations, shared mailboxes, and authorized third-party senders.",
  "Evaluate fictional financial and business requests using sender identity, authentication, business process, transaction records, approvals, account activity, and independent verification.",
  "Design narrow defensive response steps that protect payments, payroll, data, accounts, and legitimate communication without making unsupported claims.",
  "Create a professional fictional Business Email Compromise Case Report with evidence, findings, owners, containment, validation, monitoring, and residual risk.",
];

const vocabulary = [
  [
    "Business email compromise",
    "A fictional email-based deception or account misuse intended to influence a business, financial, payroll, data, access, or operational decision.",
  ],
  [
    "Executive impersonation",
    "A fictional attempt to appear as a leader or authority figure in order to pressure a recipient into acting quickly.",
  ],
  [
    "Vendor fraud",
    "A fictional message or account action that changes payment, invoice, shipping, banking, or contact information for a supplier or service provider.",
  ],
  [
    "Payroll diversion",
    "A fictional request that attempts to redirect salary, reimbursement, tax, benefit, or direct-deposit information.",
  ],
  [
    "Invoice manipulation",
    "A fictional change to the amount, account, recipient, date, or payment instructions associated with an expected invoice.",
  ],
  [
    "Reply-chain abuse",
    "A fictional message that appears inside, copies, or continues a real conversation in order to increase trust.",
  ],
  [
    "Lookalike domain",
    "A fictional domain designed to resemble a trusted organization while remaining technically separate.",
  ],
  [
    "Compromised legitimate account",
    "A fictional real account that may be used by an unauthorized person while still passing normal domain authentication.",
  ],
  [
    "Independent verification",
    "Confirmation through a fictional known contact path, approved portal, purchasing record, payroll system, directory, or business workflow not controlled by the suspicious message.",
  ],
  [
    "Transaction hold",
    "A fictional approved pause placed on a payment, payroll, purchasing, or account-change request while evidence is reviewed.",
  ],
  [
    "Beneficiary change",
    "A fictional modification to the bank account, payment recipient, deposit destination, or other party receiving funds.",
  ],
  [
    "Out-of-band confirmation",
    "A fictional verification completed through a separate trusted channel, such as a known phone number, approved system, or in-person process.",
  ],
];

const becPatterns = [
  {
    pattern: "Executive gift-card request",
    message:
      "A fictional leader asks an assistant or employee to buy gift cards quickly and keep the request confidential.",
    pressure:
      "Authority, urgency, secrecy, and an unavailable-by-phone explanation.",
    control:
      "Require the normal purchasing process, known-contact verification, budget approval, and transaction records.",
    evidence:
      "Sender identity, domain, message content, purchasing policy, leader confirmation, user action, and payment activity.",
  },
  {
    pattern: "Vendor bank-account change",
    message:
      "A fictional supplier asks that future invoices be paid to a new bank account.",
    pressure:
      "Urgent payment deadline, attached confirmation, changed contact details, or a request to avoid the normal portal.",
    control:
      "Pause the change and verify through the known vendor contact and approved procurement workflow.",
    evidence:
      "Vendor master record, purchase order, prior invoices, known contact, authentication, reply chain, bank-change request, and owner approval.",
  },
  {
    pattern: "Payroll direct-deposit update",
    message:
      "A fictional employee or executive requests a new salary-deposit account through email.",
    pressure:
      "Upcoming payroll deadline, travel, account problem, or inability to use the normal system.",
    control:
      "Use the approved payroll portal and identity-verification process rather than email instructions.",
    evidence:
      "Employee record, mailbox evidence, payroll workflow, identity verification, session activity, factor changes, and direct-deposit history.",
  },
  {
    pattern: "Invoice amount or recipient change",
    message:
      "A fictional message modifies an expected invoice amount, due date, payment recipient, or remittance details.",
    pressure:
      "Late-fee threat, final notice, shipment delay, or limited processing window.",
    control:
      "Compare the invoice with the purchase order, contract, receiving record, prior invoice, and known vendor confirmation.",
    evidence:
      "Invoice record, purchase order, contract, project owner, sender evidence, attachment metadata, and payment system.",
  },
  {
    pattern: "Confidential document request",
    message:
      "A fictional leader, lawyer, auditor, school official, or vendor asks for protected records through email.",
    pressure:
      "Confidentiality, authority, legal urgency, or an instruction to bypass the approved sharing platform.",
    control:
      "Verify requester identity, data owner, purpose, minimum necessary information, approval, and trusted sharing method.",
    evidence:
      "Data classification, requester relationship, owner approval, legal or business process, sharing logs, and user action.",
  },
  {
    pattern: "Account recovery or MFA approval",
    message:
      "A fictional support or leadership message asks the recipient to share a code, approve a prompt, or help restore access.",
    pressure:
      "Urgent outage, executive travel, locked account, or business interruption.",
    control:
      "Use the approved recovery and support workflow and never share authentication codes.",
    evidence:
      "Identity-provider events, recovery records, help-desk case, factor changes, sessions, device evidence, and owner confirmation.",
  },
  {
    pattern: "Reply-chain payment diversion",
    message:
      "A fictional message appears inside an existing invoice or project conversation and introduces new payment details.",
    pressure:
      "Continuity, familiarity, real project context, and an urgent final change.",
    control:
      "Compare prior participants, domains, reply paths, message IDs, attachment history, and known vendor contacts.",
    evidence:
      "Conversation thread, sender changes, reply path, authentication, prior invoices, vendor confirmation, and account activity.",
  },
  {
    pattern: "Shared-mailbox impersonation",
    message:
      "A fictional message claims to come from finance, payroll, support, admissions, purchasing, or another shared function.",
    pressure:
      "Routine administrative language, expected branding, and a request framed as standard process.",
    control:
      "Verify through the known shared mailbox, portal, ticketing system, or department process.",
    evidence:
      "Shared-mailbox membership, sending service, message trace, ticket record, process owner, and user report.",
  },
];

const impersonationTypes = [
  {
    type: "Display-name impersonation",
    example:
      "The fictional inbox shows a known executive name while the actual address belongs to an unrelated domain.",
    strongestEvidence:
      "Display name, actual address, domain, message purpose, and independent executive-office confirmation.",
    limitation:
      "A display-name mismatch supports impersonation but does not identify the physical sender.",
  },
  {
    type: "Lookalike-domain impersonation",
    example:
      "A fictional vendor name appears with a domain that adds a hyphen or payment-related word.",
    strongestEvidence:
      "Exact domain comparison, authentication for the lookalike domain, vendor records, and known-contact verification.",
    limitation:
      "The lookalike domain may authenticate perfectly for itself.",
  },
  {
    type: "Direct spoofing",
    example:
      "A fictional message claims the trusted domain but fails aligned authentication and is not confirmed by the owner.",
    strongestEvidence:
      "Visible From domain, SPF, DKIM, DMARC, routing, policy result, and owner confirmation.",
    limitation:
      "Forwarding and misconfiguration can sometimes produce authentication failure.",
  },
  {
    type: "Compromised legitimate mailbox",
    example:
      "A fictional message comes from a real vendor account, passes authentication, but requests an unusual bank change.",
    strongestEvidence:
      "Known domain, aligned authentication, account activity, unusual request, business-process mismatch, and vendor confirmation.",
    limitation:
      "Authentication alone cannot show whether the authorized mailbox user created the message.",
  },
  {
    type: "Reply-chain abuse",
    example:
      "A fictional message includes real project history but changes the reply address, attachment, or payment instructions.",
    strongestEvidence:
      "Thread participants, message IDs, domain changes, reply path, prior messages, vendor contact, and transaction records.",
    limitation:
      "Conversation content may have been copied, forwarded, or accessed through a compromised account.",
  },
  {
    type: "Third-party service confusion",
    example:
      "A fictional approved platform sends on behalf of an organization using different transport infrastructure.",
    strongestEvidence:
      "Service owner, approved relationship, aligned identity, message purpose, prior history, and business confirmation.",
    limitation:
      "Different infrastructure is not automatically impersonation.",
  },
  {
    type: "Personal-mailbox request",
    example:
      "A fictional leader claims their work email is unavailable and asks the recipient to continue through a personal account.",
    strongestEvidence:
      "Known-contact verification, organization policy, account status, request type, and business owner confirmation.",
    limitation:
      "Rare emergencies can exist but still require approved alternative verification.",
  },
  {
    type: "Shared-function impersonation",
    example:
      "A fictional message claims to be payroll or finance but is not connected to the approved shared mailbox or ticketing system.",
    strongestEvidence:
      "Shared-mailbox records, sending account, message trace, ticket number, department owner, and process evidence.",
    limitation:
      "Departments may use approved vendors or automated services that require context.",
  },
];

const transactionEvidence = [
  {
    source: "Sender and domain evidence",
    supports:
      "The fictional display name, address, domain, Reply-To, authentication, routing, and known sender relationship.",
    limitation:
      "A real domain or mailbox can still be compromised, and a lookalike domain can authenticate itself.",
  },
  {
    source: "Business-process evidence",
    supports:
      "The fictional required approvals, separation of duties, portal, purchase order, invoice, payroll, vendor, or account-change workflow.",
    limitation:
      "Processes can include approved exceptions, but those exceptions need accountable documentation.",
  },
  {
    source: "Transaction records",
    supports:
      "The fictional amount, beneficiary, bank account, invoice, purchase order, payment status, approval chain, and timing.",
    limitation:
      "A transaction record shows system state but not always why the decision was made.",
  },
  {
    source: "Conversation history",
    supports:
      "The fictional prior messages, participants, domains, message IDs, attachments, requested actions, and expected next step.",
    limitation:
      "Real conversation details can be copied or exposed through account compromise.",
  },
  {
    source: "Identity and session evidence",
    supports:
      "The fictional sign-ins, MFA, sessions, devices, recovery, factor changes, mailbox actions, and application activity.",
    limitation:
      "Account evidence may not identify the physical person or intent without stronger context.",
  },
  {
    source: "User and owner reports",
    supports:
      "The fictional recipient’s actions and the claimed sender, vendor, payroll, finance, or resource owner’s confirmation.",
    limitation:
      "Human statements should be correlated with technical and business records.",
  },
  {
    source: "Security-control evidence",
    supports:
      "The fictional filtering, warning, reputation, authentication, quarantine, link, attachment, and policy results.",
    limitation:
      "Tool verdicts are interpretations and can change with new evidence.",
  },
  {
    source: "Independent verification",
    supports:
      "Whether the fictional sender, vendor, employee, invoice, payment change, payroll request, or data request is confirmed through a trusted path.",
    limitation:
      "Verification is unreliable if the contact details came from the suspicious message.",
  },
];

const responseWorkflow = [
  {
    step: "1",
    title: "Pause the sensitive action",
    detail:
      "Place an approved fictional hold on payment, payroll, data transfer, account change, or other high-impact action while evidence is reviewed.",
  },
  {
    step: "2",
    title: "Preserve message and business evidence",
    detail:
      "Keep the fictional message, headers, authentication, thread, attachments, links, transaction records, approvals, and user report.",
  },
  {
    step: "3",
    title: "Verify independently",
    detail:
      "Use a known fictional contact, trusted portal, vendor record, payroll system, directory, purchase order, or established workflow.",
  },
  {
    step: "4",
    title: "Review account and transaction activity",
    detail:
      "Correlate fictional mailbox, identity, session, factor, application, payment, payroll, document, and approval records.",
  },
  {
    step: "5",
    title: "Contain and remediate narrowly",
    detail:
      "Quarantine related messages, stop unauthorized changes, restore correct details, revoke unsafe sessions, recover accounts, and notify owners as evidence supports.",
  },
  {
    step: "6",
    title: "Validate and close",
    detail:
      "Confirm legitimate communication, correct transaction state, account security, owner acceptance, monitoring, residual risk, and closure evidence.",
  },
];


const classifications = [
  {
    classification: "Expected business request",
    meaning:
      "The fictional sender, domain, account, transaction, timing, purpose, approvals, and independent verification all match the established process.",
    documentation:
      "Record the approved relationship, owners, request, supporting system records, and any remaining limitation.",
  },
  {
    classification: "Unusual but approved exception",
    meaning:
      "The fictional request falls outside the normal pattern but is independently confirmed, time limited, owner approved, and documented.",
    documentation:
      "Record the exception reason, approving owners, scope, duration, controls, verification, and expiration.",
  },
  {
    classification: "Suspicious impersonation attempt",
    meaning:
      "The fictional message uses sender, domain, authority, urgency, secrecy, or process mismatches but no downstream action is confirmed.",
    documentation:
      "Preserve evidence, verify independently, assign owners, contain related messages, and avoid claiming impact without supporting records.",
  },
  {
    classification: "Confirmed business email compromise attempt",
    meaning:
      "The fictional evidence supports impersonation, deceptive account use, unauthorized business instructions, or attempted transaction diversion.",
    documentation:
      "Record sender and account evidence, request, affected recipients, business process, containment, account review, and validation.",
  },
  {
    classification: "Confirmed transaction or data impact",
    meaning:
      "The fictional evidence supports a payment, payroll, beneficiary, data, account, permission, or other measurable business change.",
    documentation:
      "Separate the message finding from each confirmed downstream action and preserve transaction, identity, application, and owner evidence.",
  },
  {
    classification: "Compromised legitimate account suspected",
    meaning:
      "The fictional message authenticates for a real account or domain but the request is unauthorized, unusual, or inconsistent with the owner’s activity.",
    documentation:
      "Preserve mailbox, identity, session, factor, device, thread, and business evidence and begin approved account-recovery review.",
  },
  {
    classification: "False positive or legitimate third-party workflow",
    meaning:
      "The fictional message appears unusual but is supported by an approved service, sender, owner, process, and independent verification.",
    documentation:
      "Explain why it is legitimate, record the approved relationship, and tune controls narrowly if needed.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional sender, account, transaction, user, approval, or business evidence is insufficient for a reliable conclusion.",
    documentation:
      "State the missing evidence, confidence, temporary hold or control, owner, due date, and decision criteria.",
  },
];

const caseTimeline = [
  {
    time: "09:08:03",
    source: "Conversation",
    event:
      "A fictional vendor thread continues a real equipment order and asks that the final invoice be paid to a new bank account.",
    meaning:
      "Creates familiarity through a legitimate project and introduces a high-impact beneficiary change.",
  },
  {
    time: "09:08:07",
    source: "Sender identity",
    event:
      "The visible sender is billing@trusted-vendor.example and aligned authentication passes.",
    meaning:
      "Supports use of the legitimate vendor domain but does not approve the changed payment request.",
  },
  {
    time: "09:08:11",
    source: "Reply path",
    event:
      "The fictional Reply-To redirects responses to accounts-update@vendor-billing.example.",
    meaning:
      "Adds an unexpected external reply path not present in earlier thread messages.",
  },
  {
    time: "09:08:15",
    source: "Message content",
    event:
      "The sender claims the old bank account is unavailable and requests payment before noon to avoid shipment delay.",
    meaning:
      "Adds urgency, financial pressure, and a reason to bypass normal verification.",
  },
  {
    time: "09:10:00",
    source: "Purchasing process",
    event:
      "The fictional vendor-change policy requires a known-contact call, vendor-master update, two approvals, and a waiting period.",
    meaning:
      "The email request does not satisfy the established control process.",
  },
  {
    time: "09:12:00",
    source: "Recipient action",
    event:
      "The fictional accounts-payable employee places a transaction hold and reports the message without changing the vendor record.",
    meaning:
      "Prevents immediate financial impact and preserves the request for review.",
  },
  {
    time: "09:16:00",
    source: "Independent verification",
    event:
      "The known fictional vendor contact confirms that no banking change was requested and that their billing mailbox is under review.",
    meaning:
      "Supports an unauthorized request and possible compromise of a legitimate mailbox.",
  },
  {
    time: "09:20:00",
    source: "Account review",
    event:
      "The fictional vendor reports an unfamiliar mailbox rule and an unrecognized session created earlier that morning.",
    meaning:
      "Adds evidence supporting compromised-account use rather than direct domain spoofing.",
  },
  {
    time: "09:24:00",
    source: "Related-message search",
    event:
      "The fictional environment identifies five related messages sent to finance and project staff.",
    meaning:
      "Expands the affected-recipient and transaction scope.",
  },
  {
    time: "09:28:00",
    source: "Containment",
    event:
      "The related messages are quarantined, the unrecognized vendor session is revoked, and the suspicious mailbox rule is removed through approved response.",
    meaning:
      "Addresses message distribution and the likely account-control issue.",
  },
  {
    time: "09:35:00",
    source: "Transaction review",
    event:
      "No fictional payment, vendor-master, beneficiary, or approval change is found.",
    meaning:
      "Supports no confirmed financial impact in the reviewed systems.",
  },
  {
    time: "09:42:00",
    source: "Recovery",
    event:
      "The fictional vendor completes approved password reset, factor review, session revocation, mailbox-rule review, and owner validation.",
    meaning:
      "Restores control of the legitimate account.",
  },
  {
    time: "Day 2",
    source: "Validation",
    event:
      "Legitimate vendor communication resumes through the known address, the original bank account remains active, and monitoring finds no new related activity.",
    meaning:
      "Completes communication, account, transaction, and monitoring validation.",
  },
];

const remediationPlan = [
  {
    action: "Maintain the transaction hold",
    purpose:
      "Prevent the fictional payment or beneficiary change while evidence and owner verification are completed.",
    owner:
      "Accounts Payable",
    validation:
      "Confirm no payment, approval, vendor-master, or bank-account update occurred.",
  },
  {
    action: "Preserve and search related messages",
    purpose:
      "Identify the fictional recipient, thread, subject, sender, Reply-To, attachment, and request scope.",
    owner:
      "Email Security",
    validation:
      "Confirm all approved related messages are quarantined and legitimate vendor mail remains available.",
  },
  {
    action: "Recover the affected vendor account",
    purpose:
      "Restore control of the fictional legitimate mailbox and remove unauthorized sessions, factors, rules, or forwarding.",
    owner:
      "Vendor Identity and Email Administration",
    validation:
      "Confirm owner access, factor inventory, session state, mailbox rules, sending behavior, and monitoring.",
  },
  {
    action: "Restore trusted payment instructions",
    purpose:
      "Ensure the fictional vendor master and pending invoices use the independently verified beneficiary details.",
    owner:
      "Procurement and Vendor Master Team",
    validation:
      "Confirm the correct account, approvals, waiting period, and owner acceptance.",
  },
  {
    action: "Notify affected recipients",
    purpose:
      "Provide a fictional factual notice about the unauthorized request, safe reporting, and independent verification path.",
    owner:
      "Security Communications and Finance Leadership",
    validation:
      "Confirm recipients understand the correct vendor contact and no one completed the request.",
  },
  {
    action: "Review similar high-risk changes",
    purpose:
      "Search fictional payroll, invoice, beneficiary, gift-card, data, and account-change workflows for related patterns.",
    owner:
      "Security Operations and Business Control Owners",
    validation:
      "Document searched systems, time range, findings, gaps, and residual risk.",
  },
  {
    action: "Improve process and monitoring",
    purpose:
      "Strengthen fictional transaction holds, known-contact verification, mailbox-rule alerts, session alerts, and change approvals.",
    owner:
      "Finance Governance, Identity, and Security Monitoring",
    validation:
      "Test both legitimate and unauthorized requests and confirm alert routing and owner response.",
  },
  {
    action: "Close with evidence",
    purpose:
      "Document fictional message, account, transaction, business, containment, recovery, validation, monitoring, and residual-risk evidence.",
    owner:
      "Case Owner",
    validation:
      "Confirm all technical and business closure criteria are met and approved.",
  },
];

const commonMistakes = [
  "Assuming fictional BEC always uses a fake domain when a compromised legitimate mailbox may authenticate normally.",
  "Treating domain authentication as proof that a payment, payroll, data, or account-change request is approved.",
  "Replying to the suspicious thread or calling a message-provided number to verify the sender.",
  "Trusting a familiar conversation because the project, invoice, names, and prior messages are accurate.",
  "Changing vendor or payroll information directly from email without using the approved system and separation of duties.",
  "Ignoring a changed Reply-To, beneficiary, attachment, payment instruction, or deadline inside an existing thread.",
  "Focusing only on the message while failing to review mailbox rules, sessions, factors, forwarding, and account recovery.",
  "Assuming no financial loss means the case requires no containment, account recovery, user notification, or monitoring.",
  "Blocking a legitimate vendor domain permanently without distinguishing account compromise from domain impersonation.",
  "Closing the case after password reset while leaving sessions, factors, mailbox rules, related recipients, and transactions unreviewed.",
  "Claiming the physical sender or motive is known when the fictional evidence supports only account or mailbox use.",
  "Publishing real bank details, invoices, payroll information, addresses, users, messages, screenshots, or confidential business records.",
];

const quizQuestions = [
  {
    question:
      "What is business email compromise?",
    choices: [
      "A fictional email-based deception or account misuse intended to influence a business, financial, payroll, data, access, or operational decision.",
      "Any message with a spelling mistake.",
      "Only direct spoofing of an executive domain.",
      "A normal marketing message.",
    ],
    answer: 0,
    explanation:
      "BEC includes several message and account patterns that target business decisions and workflows.",
  },
  {
    question:
      "Why can a fictional BEC message pass SPF, DKIM, and DMARC?",
    choices: [
      "It may come from a compromised legitimate account or an authenticated lookalike domain.",
      "Authentication proves every request is approved.",
      "BEC messages cannot use real domains.",
      "Mail systems disable authentication during fraud.",
    ],
    answer: 0,
    explanation:
      "Authentication verifies technical domain relationships, not safe intent or business authorization.",
  },
  {
    question:
      "What is the safest response to a vendor bank-account change?",
    choices: [
      "Place an approved hold and verify through the known vendor contact and procurement process.",
      "Reply to the message and ask for confirmation.",
      "Use the phone number in the attached bank letter.",
      "Change the account because the invoice is due.",
    ],
    answer: 0,
    explanation:
      "Independent known-contact and process verification protects the transaction from message-controlled contact details.",
  },
  {
    question:
      "Which evidence most strongly supports a compromised legitimate mailbox?",
    choices: [
      "An authenticated real-domain message, owner denial, an unrecognized session, and an unfamiliar mailbox rule.",
      "A professional signature alone.",
      "A message delivered to the inbox.",
      "An urgent subject line by itself.",
    ],
    answer: 0,
    explanation:
      "Several account, owner, and message records together support the compromised-mailbox conclusion.",
  },
  {
    question:
      "Why should a transaction hold occur before a final conclusion?",
    choices: [
      "It can prevent high-impact change while preserving time for evidence-based verification.",
      "It proves the sender is malicious.",
      "It permanently blocks the vendor.",
      "It replaces account investigation.",
    ],
    answer: 0,
    explanation:
      "A narrow temporary hold protects the business without overstating the evidence.",
  },
  {
    question:
      "What is reply-chain abuse?",
    choices: [
      "A fictional message appears inside, copies, or continues a real conversation to increase trust.",
      "A message with no prior context.",
      "A normal internal announcement.",
      "A password reset completed through the approved portal.",
    ],
    answer: 0,
    explanation:
      "Real or copied conversation details can make a changed request appear legitimate.",
  },
  {
    question:
      "Which closure plan is strongest after a fictional BEC attempt?",
    choices: [
      "Validate the message scope, account recovery, sessions, factors, mailbox rules, transaction state, legitimate communication, monitoring, owner acceptance, and residual risk.",
      "Close when the message is deleted.",
      "Close after the sender password changes.",
      "Close because no payment was made.",
    ],
    answer: 0,
    explanation:
      "Professional closure combines message, identity, transaction, business, monitoring, and owner evidence.",
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


function PatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        BEC Patterns
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Business Email Compromise Patterns
      </h2>

      <div className="mt-6 grid gap-5">
        {becPatterns.map((item) => (
          <div
            key={item.pattern}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.pattern}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Fictional message
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.message}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Pressure
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.pressure}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive control
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.control}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.evidence}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImpersonationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Impersonation Models
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sender Scenarios That Require Different Conclusions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {impersonationTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>

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
                Strongest evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongestEvidence}
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
        What Business Email Compromise Evidence Can Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {transactionEvidence.map((item) => (
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

function ResponseGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Respond to BEC in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {responseWorkflow.map((item) => (
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

function RemediationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Remediation and Validation
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Actions for Coordinated Closure
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {remediationPlan.map((item) => (
          <div
            key={item.action}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.action}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
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
        Correlated Case Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Vendor Account Compromise from Request to Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {caseTimeline.map((item) => (
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


export default function BusinessEmailCompromiseAndImpersonationPage() {
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
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.5 Business Email Compromise and Impersonation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders evaluate fictional executive impersonation,
            vendor fraud, payroll diversion, invoice manipulation, gift-card
            requests, compromised mailboxes, reply-chain abuse, transaction
            holds, account recovery, validation, and evidence-based closure.
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
          lessonTitle="Business Email Compromise and Impersonation"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional BEC can use direct spoofing, lookalike domains, compromised legitimate accounts, reply-chain abuse, shared functions, and approved third-party services.",
            "I will separate sender authentication from business authorization and transaction approval.",
            "I will place narrow approved holds on sensitive actions while preserving evidence and verifying independently.",
            "I will review mailbox, identity, session, factor, transaction, payroll, vendor, application, and owner evidence before closing a case.",
            "I will use only fictional messages, accounts, vendors, invoices, bank details, employees, systems, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Real Sender Domain Does Not Make a Financial Request Safe"
        >
          <p className="leading-8">
            A fictional vendor mailbox can be compromised while its SPF, DKIM,
            and DMARC results continue to pass. A real conversation can be used
            to introduce new banking details. A leader’s correct name and title
            can be copied into a gift-card request. Defenders protect the
            business by combining sender, account, transaction, approval,
            process, and independent-verification evidence.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The fictional vendor domain authenticated correctly, so update
                the bank account before the deadline.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Pause the change, verify through the known vendor contact and
                procurement process, review account evidence, and validate the
                final transaction state.”
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
          title="BEC Targets Decisions, Not Just Inboxes"
        >
          <p className="leading-8">
            Business email compromise becomes dangerous when a message changes
            a payment, payroll destination, vendor record, data transfer,
            account, permission, purchase, or approval. A strong defense places
            controls around the decision itself. Even when a deceptive message
            reaches an inbox, independent verification, separation of duties,
            transaction holds, and owner approval can prevent impact.
          </p>
        </SectionCard>

        <PatternGuide />
        <ImpersonationGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Sender, Request, Process, Account, and Impact"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Sender",
                "Which fictional display name, address, domain, account, Reply-To, and authentication identity sent the message?",
              ],
              [
                "Request",
                "Which fictional payment, payroll, data, account, approval, purchase, or recovery action is requested?",
              ],
              [
                "Process",
                "Which owners, systems, approvals, known contacts, waiting periods, and separation-of-duties controls should apply?",
              ],
              [
                "Account",
                "Which fictional sessions, factors, mailbox rules, forwarding, recovery, device, and owner records explain the sender account?",
              ],
              [
                "Impact",
                "Which fictional beneficiary, payment, payroll, data, permission, account, or business state actually changed?",
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
        <ResponseGuide />
        <RemediationGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Business Email Compromise Terms
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
          title="Fake Business Email Compromise Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services finance and email environment."
          metrics={[
            {
              label: "High-risk requests",
              value: "24",
              note: "Vendor changes, payroll updates, invoices, gift cards, protected data, recovery, and confidential executive actions.",
            },
            {
              label: "Transaction holds",
              value: "7",
              note: "Narrow holds preserved time for vendor, payroll, finance, data-owner, and account verification.",
            },
            {
              label: "Confirmed losses",
              value: "0",
              note: "The reviewed fictional cases were contained before confirmed payment, payroll, data, or account impact.",
            },
          ]}
        />

        <FakeAlertCard
          title="Authenticated Vendor Mailbox Requests Unauthorized Bank Change"
          severity="High"
          time="09:08 AM"
          source="Fake BEC and Transaction Review Console"
          details="A fictional vendor thread requests that a final equipment invoice be paid to a new bank account before noon. The visible sender uses the real vendor domain and passes aligned authentication, but Reply-To changes to vendor-billing.example. The known vendor contact denies the request and reports an unfamiliar mailbox rule and session."
          recommendation="Maintain the transaction hold, preserve message and transaction evidence, quarantine related messages, recover the vendor account, verify the correct beneficiary through procurement records, review all recipients and pending payments, and validate legitimate vendor communication before closure."
        />

        <FakeLogPanel
          title="Fake Vendor Payment-Diversion Timeline"
          logs={[
            "09:08:03 THREAD project='equipment_order' request='new_bank_account'",
            "09:08:07 AUTH visible_domain='trusted-vendor.example' result='aligned_pass'",
            "09:08:11 REPLY_TO address='accounts-update@vendor-billing.example'",
            "09:08:15 CONTENT urgency='before_noon' pressure='shipment_delay'",
            "09:10:00 PROCESS required='known_contact,two_approvals,waiting_period'",
            "09:12:00 TRANSACTION_HOLD status='active' vendor_master_changed='false'",
            "09:16:00 VERIFY vendor_request='denied' mailbox_status='under_review'",
            "09:20:00 ACCOUNT finding='unfamiliar_rule,unrecognized_session'",
            "09:24:00 SEARCH related_messages='5'",
            "09:28:00 CONTAIN quarantine='5' session_revoked='true' rule_removed='true'",
            "09:35:00 TRANSACTION_REVIEW payment_change='none' beneficiary_change='none'",
            "09:42:00 RECOVERY password='reset' factors='reviewed' sessions='revoked'",
            "DAY2 VALIDATION legitimate_vendor_mail='working' bank_account='unchanged'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which BEC Conclusion Is Best Supported?"
          evidence={[
            "A fictional vendor thread contains a real project and expected invoice.",
            "The visible sender uses the real vendor domain and aligned authentication passes.",
            "Reply-To changes to an unrelated external domain.",
            "The message requests a new bank account before noon.",
            "The normal process requires known-contact verification and two approvals.",
            "The known vendor contact denies the change.",
            "The vendor identifies an unfamiliar mailbox rule and unrecognized session.",
            "No payment, beneficiary, or vendor-master change is found.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The evidence supports unauthorized use of a legitimate vendor mailbox and an attempted payment-diversion request, while the transaction hold prevented confirmed financial impact.",
            "The request is legitimate because authentication passed.",
            "The vendor domain should be permanently blocked.",
            "A payment loss occurred because a new bank account was requested.",
          ]}
          bestAnswer={0}
          explanation="Authentication supports the legitimate domain identity, while owner denial, changed Reply-To, account evidence, and process mismatch support unauthorized mailbox use. Transaction records show no confirmed payment change."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken BEC Analysis"
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
          title="Complete a Fictional Business Email Compromise Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Vendor and Payroll Case
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-eight supplied fictional records covering sender
                identities, domains, authentication, reply paths, conversation
                history, invoices, purchase orders, vendor records, payroll
                requests, approvals, transaction holds, mailbox rules, sessions,
                factors, account recovery, user reports, containment,
                validation, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify the fictional BEC pattern and requested business action.</li>
                <li>Compare display name, address, domain, Reply-To, authentication, account, and business identity.</li>
                <li>Map the approved financial, payroll, data, account, or vendor-change process.</li>
                <li>Separate confirmed facts, conclusions, alternative explanations, confidence, and evidence gaps.</li>
                <li>Create an independent verification plan using known contacts and systems of record.</li>
                <li>Review mailbox rules, forwarding, sessions, factors, recovery, recipient actions, and transaction state.</li>
                <li>Recommend transaction holds, quarantine, account recovery, correct-record restoration, notifications, monitoring, validation, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not send money, purchase
            gift cards, change payroll or bank information, contact suspicious
            addresses, open links or attachments, access real mailboxes, request
            authentication codes, or publish real invoices, bank details,
            payroll data, messages, users, screenshots, or confidential
            business records.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Real Vendor Mailbox Requests New Banking Details"
          scenario="A fictional message comes from the known vendor domain and passes authentication, but it changes the Reply-To address and asks for a new bank account outside the approved process."
          choices={[
            {
              label: "Choice A",
              response:
                "Place a transaction hold, preserve the message and transaction records, verify through the known vendor contact and procurement process, review the sender account, and change nothing until approved validation is complete.",
              outcome:
                "Best defensive choice. Authentication does not replace business authorization, and the hold prevents avoidable impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Update the account because the real vendor domain authenticated.",
              outcome:
                "Unsafe. A legitimate account may be compromised or misused.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reply to the changed Reply-To address and ask whether the request is real.",
              outcome:
                "Weak verification. The suspicious party may control that reply path.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Executive Requests Confidential Gift Cards"
          scenario="A fictional message uses an executive’s name, says the executive is unavailable by phone, asks for gift cards within thirty minutes, and tells the recipient not to discuss the request."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the request, verify through the known executive-office contact, follow the purchasing process, preserve and report the message, and review related recipients and transaction activity.",
              outcome:
                "Best defensive choice. Claimed authority and urgency do not replace independent verification and approvals.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Purchase the gift cards because the request is confidential.",
              outcome:
                "Unsafe. Secrecy removes the checks designed to prevent impersonation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Use the message-provided number to confirm the request.",
              outcome:
                "Weak verification. The suspicious message controls that contact path.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Business Email Compromise and Impersonation Checklist"
          items={[
            "I identify fictional executive, vendor, payroll, invoice, data, recovery, reply-chain, and shared-function BEC patterns.",
            "I distinguish display-name impersonation, lookalike domains, direct spoofing, compromised legitimate accounts, reply-chain abuse, approved third-party senders, and shared mailboxes.",
            "I separate sender authentication from business authorization and transaction approval.",
            "I place narrow approved holds on high-impact actions while preserving evidence and verifying independently.",
            "I compare sender identity, Reply-To, conversation history, purchase orders, invoices, vendor records, payroll systems, approvals, and known contacts.",
            "I review mailbox rules, forwarding, sessions, factors, devices, recovery, user actions, account activity, and transaction state.",
            "I separate attempted deception, user interaction, account compromise, transaction change, data transfer, and confirmed impact.",
            "I assign technical and business owners for message containment, account recovery, transaction review, communication, monitoring, and closure.",
            "I validate legitimate communication, correct payment or payroll details, account security, owner acceptance, monitoring, and residual risk.",
            "I use only fictional evidence and never publish real invoices, bank details, payroll information, messages, users, screenshots, or confidential business records.",
          ]}
        />

        <MiniQuiz
          title="I7.5 Mini Quiz: Business Email Compromise and Impersonation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Business Email Compromise Case Report using at least thirty-eight sender, domain, authentication, Reply-To, conversation, invoice, purchase-order, vendor, payroll, approval, transaction, mailbox-rule, session, factor, recovery, user-report, containment, validation, and closure records. Include the BEC pattern, impersonation type, requested action, business process, transaction hold, evidence matrix, findings, owners, account recovery, verification, residual risk, and closure criteria."
          tips={[
            "Use only fictional messages, senders, vendors, employees, invoices, transactions, bank details, accounts, systems, and organizations.",
            "Include one executive impersonation, one vendor-payment case, one payroll request, one reply-chain case, one legitimate exception, and one evidence-incomplete case.",
            "Clearly separate sender authentication, business authorization, account control, user action, transaction state, and confirmed impact.",
            "Do not include real bank details, invoices, payroll records, credentials, authentication codes, messages, users, screenshots, or confidential business data.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Business email compromise targets business decisions such as payments, payroll, data transfers, account changes, and approvals.",
            "A fictional BEC message can pass authentication when it uses a compromised legitimate account or an authenticated lookalike domain.",
            "Independent verification and separation of duties protect the transaction even when the message reaches the inbox.",
            "Reply paths, conversation changes, mailbox rules, sessions, factors, and owner confirmation help distinguish impersonation from account compromise.",
            "Attempted deception, account compromise, user interaction, transaction change, and confirmed financial impact are separate conclusions.",
            "Strong closure combines message containment, account recovery, transaction validation, legitimate-communication testing, monitoring, owner acceptance, and residual-risk documentation.",
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