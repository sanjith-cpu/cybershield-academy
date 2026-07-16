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
const previousLesson = `${modulePath}/phishing-indicators-and-social-engineering`;
const nextLesson = `${modulePath}/business-email-compromise-and-impersonation`;

const objectives = [
  "Evaluate fictional links, buttons, shortened destinations, QR codes, cloud shares, login prompts, and attachments without opening suspicious content.",
  "Distinguish visible link text, encoded destination, redirect path, final destination, file name, file type, content, and security-tool verdict.",
  "Use safe independent verification through trusted portals, known contacts, approved systems, and established business processes.",
  "Separate suspicious content, blocked content, user interaction, account activity, device activity, and confirmed impact.",
  "Create a professional fictional Link and Attachment Verification Report with evidence, owners, containment, validation, monitoring, and residual risk.",
];

const vocabulary = [
  [
    "Visible link text",
    "The fictional words, button label, image, or address shown to the recipient as the clickable destination.",
  ],
  [
    "Encoded destination",
    "The fictional web address stored behind a link, button, image, or QR code.",
  ],
  [
    "Redirect",
    "A fictional step that sends a browser from one address to another before reaching the final destination.",
  ],
  [
    "Final destination",
    "The fictional page or service reached after all redirects are completed.",
  ],
  [
    "Shortened link",
    "A fictional compact address that hides or replaces the longer destination.",
  ],
  [
    "QR code",
    "A fictional visual code that can direct a device to a website, application action, payment page, or other destination.",
  ],
  [
    "Attachment",
    "A fictional file included directly with a message or delivered through a linked sharing service.",
  ],
  [
    "File extension",
    "The fictional suffix in a file name that suggests a file type, such as .pdf, .docx, .html, or .zip.",
  ],
  [
    "MIME type",
    "A fictional metadata label used by mail and web systems to describe a content type.",
  ],
  [
    "Cloud share",
    "A fictional message or service that provides access to a file, folder, document, or collaboration resource through a hosted platform.",
  ],
  [
    "Security verdict",
    "A fictional tool interpretation based on reputation, content, structure, behavior, policy, or prior intelligence.",
  ],
  [
    "Independent verification",
    "Confirmation through a fictional trusted portal, known contact, approved directory, project record, or business workflow not controlled by the suspicious message.",
  ],
];

const linkLayers = [
  {
    layer: "Visible text",
    example:
      "A fictional button says “Open Northstar Payroll Portal.”",
    defensiveQuestion:
      "Does the visible wording match the expected system and business purpose?",
    limitation:
      "Visible text can be completely different from the encoded destination.",
  },
  {
    layer: "Displayed address",
    example:
      "The fictional message shows portal.northstar-learning.example.",
    defensiveQuestion:
      "Is this plain text, an actual clickable address, or a label placed over another destination?",
    limitation:
      "A displayed address can still point somewhere else when clicked.",
  },
  {
    layer: "Encoded destination",
    example:
      "The fictional link actually points to login.northstar-support.example.",
    defensiveQuestion:
      "What exact domain, path, protocol, and parameters are encoded behind the message?",
    limitation:
      "The first destination may redirect again before reaching the final page.",
  },
  {
    layer: "Redirect chain",
    example:
      "The fictional link passes through a tracking service and then a document-sharing platform.",
    defensiveQuestion:
      "Which services are expected, who owns them, and where does the chain finally end?",
    limitation:
      "Legitimate marketing and security services can use redirects, while deceptive links can hide behind them.",
  },
  {
    layer: "Final destination",
    example:
      "The fictional browser would eventually reach auth-review.example/login.",
    defensiveQuestion:
      "Is the final parent domain trusted, expected, independently known, and appropriate for the requested action?",
    limitation:
      "A trusted hosting platform can contain an untrusted page or tenant.",
  },
  {
    layer: "Page purpose",
    example:
      "The fictional destination asks for an email address, password, and MFA code.",
    defensiveQuestion:
      "Does the approved service normally request this information at this point in the workflow?",
    limitation:
      "A familiar-looking page can imitate a real service.",
  },
  {
    layer: "Connection",
    example:
      "The fictional page uses an encrypted HTTPS connection.",
    defensiveQuestion:
      "Does the domain relationship match the expected service?",
    limitation:
      "Encryption protects the connection but does not prove the destination is trustworthy.",
  },
  {
    layer: "User and account result",
    example:
      "The fictional recipient reports that the link was not opened and no account event followed.",
    defensiveQuestion:
      "What mailbox, browser, identity, session, and application evidence confirms or limits that statement?",
    limitation:
      "A message containing a dangerous link is different from confirmed interaction or account impact.",
  },
];

const attachmentLayers = [
  {
    layer: "File name",
    example:
      "The fictional attachment is named Payroll_Adjustment_Review.pdf.",
    defensiveQuestion:
      "Was the file expected, requested, and connected to a known sender and business process?",
    limitation:
      "A believable file name can be chosen by anyone.",
  },
  {
    layer: "File extension",
    example:
      "A fictional file ends with .pdf, .docx, .html, .zip, or another suffix.",
    defensiveQuestion:
      "Does the extension match the claimed purpose and approved file type?",
    limitation:
      "Extensions can be hidden, changed, duplicated, or misleading.",
  },
  {
    layer: "Actual content type",
    example:
      "The fictional system identifies an HTML document even though the name suggests a PDF.",
    defensiveQuestion:
      "Does the content type match the file name and expected workflow?",
    limitation:
      "Content metadata can be incomplete or interpreted differently by tools.",
  },
  {
    layer: "File structure",
    example:
      "The fictional document contains forms, embedded links, scripts, macros, or external references.",
    defensiveQuestion:
      "Which features are expected for the business purpose, and which create unnecessary risk?",
    limitation:
      "The presence of an advanced feature does not automatically prove harmful intent.",
  },
  {
    layer: "Security verdict",
    example:
      "A fictional attachment scanner labels the file suspicious because it contains a login form.",
    defensiveQuestion:
      "What exact behavior or structure produced the verdict, and is the result confirmed by another source?",
    limitation:
      "Security verdicts are tool interpretations and can change with new evidence.",
  },
  {
    layer: "Source relationship",
    example:
      "The fictional sender claims the file is a revised invoice from a known vendor.",
    defensiveQuestion:
      "Does the vendor, invoice number, amount, project, owner, and approved delivery method match?",
    limitation:
      "A known sender or real project does not prove a specific attachment is safe.",
  },
  {
    layer: "User interaction",
    example:
      "The fictional recipient previews the message but does not open the attachment.",
    defensiveQuestion:
      "What mailbox, endpoint, and application evidence supports the interaction state?",
    limitation:
      "Preview, download, open, enable-content, and execute are separate actions.",
  },
  {
    layer: "Downstream impact",
    example:
      "No fictional process, account, session, file, payment, or device event follows.",
    defensiveQuestion:
      "Which identity, endpoint, application, and business records were reviewed?",
    limitation:
      "Absence of evidence should be limited to the reviewed sources and time range.",
  },
];


const linkPatterns = [
  {
    pattern: "Mismatched visible text",
    example:
      "A fictional button says “Open Trusted Portal” but points to an unrelated external domain.",
    concern:
      "The recipient may trust the label instead of the actual destination.",
    safeVerification:
      "Open the known portal independently through a trusted bookmark, approved application, or manually entered known address.",
  },
  {
    pattern: "Shortened destination",
    example:
      "A fictional message uses a compact tracking link that hides the final destination.",
    concern:
      "The visible address does not reveal the final domain or redirect chain.",
    safeVerification:
      "Do not follow the link. Confirm the message and requested resource through the known service or sender.",
  },
  {
    pattern: "Misleading subdomain",
    example:
      "A fictional link contains northstar-learning.example inside a longer hostname controlled by another parent domain.",
    concern:
      "Trusted words can appear before the actual controlling domain.",
    safeVerification:
      "Identify the true parent domain and compare it with the known trusted service.",
  },
  {
    pattern: "Login page on a general hosting platform",
    example:
      "A fictional cloud-hosted page imitates an organization login screen.",
    concern:
      "Trusted hosting infrastructure can still contain an untrusted tenant or page.",
    safeVerification:
      "Use the known identity-provider portal independently and confirm whether the requested action appears there.",
  },
  {
    pattern: "QR-code destination",
    example:
      "A fictional message asks the recipient to scan a code to prevent account suspension.",
    concern:
      "The recipient may move to a mobile device where the destination is harder to inspect and email protections are separated.",
    safeVerification:
      "Do not scan the code. Check the known account or service independently.",
  },
  {
    pattern: "Cloud-share invitation",
    example:
      "A fictional message claims a confidential document was shared through a familiar collaboration service.",
    concern:
      "The invitation may redirect to an unrelated login page or an unexpected tenant.",
    safeVerification:
      "Open the trusted collaboration application independently and check whether the share exists.",
  },
  {
    pattern: "Open redirect or tracking service",
    example:
      "A fictional trusted domain forwards the recipient to another destination through a parameter.",
    concern:
      "The trusted first domain can hide an untrusted final page.",
    safeVerification:
      "Verify the resource through the trusted service rather than following the message redirect.",
  },
  {
    pattern: "Unexpected protocol or application action",
    example:
      "A fictional link attempts to launch a local application, phone action, payment app, or unusual protocol.",
    concern:
      "The message may trigger an action outside the normal browser workflow.",
    safeVerification:
      "Use the approved application directly and confirm the action through the normal process.",
  },
];

const attachmentPatterns = [
  {
    pattern: "Unexpected document",
    example:
      "A fictional invoice or report arrives without a known project, purchase, class, or request.",
    concern:
      "The recipient has no verified business reason to open the file.",
    safeVerification:
      "Confirm the sender, project, invoice, owner, and approved delivery method independently.",
  },
  {
    pattern: "HTML attachment",
    example:
      "A fictional attachment opens a local page that imitates a cloud-service login.",
    concern:
      "The file can present a credential form without using the expected trusted domain.",
    safeVerification:
      "Do not open it. Check the known service directly and report the message.",
  },
  {
    pattern: "Archive file",
    example:
      "A fictional .zip or other archive claims to contain documents.",
    concern:
      "The archive can hide the actual file type and reduce visibility for some controls.",
    safeVerification:
      "Confirm the sender and purpose through the approved workflow before any authorized security handling.",
  },
  {
    pattern: "Password-protected file",
    example:
      "A fictional message gives a password in the body for an attached archive or document.",
    concern:
      "Encryption can prevent normal inspection and may be used to bypass automated analysis.",
    safeVerification:
      "Verify the business need and approved secure-transfer method independently.",
  },
  {
    pattern: "Macro-enabled document",
    example:
      "A fictional document asks the user to enable active content to view an invoice.",
    concern:
      "The request introduces unnecessary executable behavior into a document workflow.",
    safeVerification:
      "Do not enable content. Confirm the document through the approved source and use an approved safe format.",
  },
  {
    pattern: "Double or misleading extension",
    example:
      "A fictional file name appears to end in .pdf but contains another script-related suffix.",
    concern:
      "The visual file name may hide the actual type.",
    safeVerification:
      "Rely on approved security metadata and safe handling, not the displayed name alone.",
  },
  {
    pattern: "Cloud-linked document",
    example:
      "A fictional message links to a hosted file instead of attaching it directly.",
    concern:
      "The destination, tenant, owner, permission, and later file changes may differ from the original message.",
    safeVerification:
      "Open the trusted collaboration platform independently and confirm the share, owner, and document.",
  },
  {
    pattern: "Unexpected form or template",
    example:
      "A fictional form asks for account, payroll, student, or vendor information not required by the stated task.",
    concern:
      "The document may collect sensitive information under a routine pretext.",
    safeVerification:
      "Confirm the data owner, purpose, minimum necessary information, and approved form system.",
  },
];

const evidenceMatrix = [
  {
    source: "Visible link or file name",
    supports:
      "The fictional label, button text, displayed address, attachment name, and claimed purpose shown to the recipient.",
    limitation:
      "Visible labels and names can be misleading and do not prove the actual destination or content.",
  },
  {
    source: "Encoded destination or content type",
    supports:
      "The fictional actual URL, parent domain, path, redirect, MIME type, and detected file structure.",
    limitation:
      "The first destination can redirect, and metadata may not reveal every behavior.",
  },
  {
    source: "Security-tool verdict",
    supports:
      "The fictional reputation, URL, attachment, sandbox, policy, and behavior interpretation at a specific time.",
    limitation:
      "Verdicts can be incomplete, delayed, wrong, or updated later.",
  },
  {
    source: "Message and sender context",
    supports:
      "The fictional sender identity, business relationship, request, timing, conversation, and expected delivery method.",
    limitation:
      "A legitimate sender or real conversation can still be compromised or misused.",
  },
  {
    source: "User report",
    supports:
      "The fictional recipient’s statement about previewing, clicking, opening, entering information, approving prompts, or reporting.",
    limitation:
      "User memory can be incomplete and should be correlated with technical evidence.",
  },
  {
    source: "Mailbox and endpoint evidence",
    supports:
      "The fictional delivery, click, download, open, process, browser, application, and device events.",
    limitation:
      "Different tools may record different stages, and absence of one event is not universal proof of no interaction.",
  },
  {
    source: "Identity and application evidence",
    supports:
      "The fictional sign-ins, MFA, sessions, recovery, file access, uploads, downloads, permissions, and account changes.",
    limitation:
      "Related activity must be connected by time, identity, device, session, or other evidence.",
  },
  {
    source: "Independent verification",
    supports:
      "Whether the fictional sender, resource, document, portal, project, invoice, or requested action is confirmed through a trusted path.",
    limitation:
      "Verification fails if the contact path or portal came from the suspicious message.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Preserve without interacting",
    detail:
      "Keep the fictional message, visible link text, encoded destination, attachment name, metadata, headers, user report, and security alerts.",
  },
  {
    step: "2",
    title: "Define the claimed purpose",
    detail:
      "Record what the fictional link, QR code, cloud share, attachment, login prompt, or form claims to provide or request.",
  },
  {
    step: "3",
    title: "Compare destination and content evidence",
    detail:
      "Review the fictional parent domain, redirect path, final destination, file type, content type, structure, reputation, and tool verdict.",
  },
  {
    step: "4",
    title: "Verify through a trusted path",
    detail:
      "Use the known fictional portal, application, project record, vendor contact, document system, or account workflow independently.",
  },
  {
    step: "5",
    title: "Review interaction and impact",
    detail:
      "Correlate fictional mailbox, browser, endpoint, identity, session, application, payment, and data evidence.",
  },
  {
    step: "6",
    title: "Contain, validate, and close",
    detail:
      "Apply narrow approved blocking or quarantine, review related recipients, preserve required access, validate legitimate communication, and document residual risk.",
  },
];

const classifications = [
  {
    classification: "Expected trusted resource",
    meaning:
      "The fictional link, file, owner, sender, project, destination, content type, and business process are independently confirmed.",
    documentation:
      "Record the trusted source, approved system, owner, purpose, expected destination or file type, and verification path.",
  },
  {
    classification: "Legitimate third-party redirect or share",
    meaning:
      "A fictional approved service uses tracking, redirection, cloud hosting, or a separate delivery domain as part of a known workflow.",
    documentation:
      "Record the service relationship, final destination, tenant or owner, approved purpose, and validation.",
  },
  {
    classification: "Suspicious link or attachment",
    meaning:
      "The fictional destination, file, request, sender, or business context contains meaningful inconsistencies but no confirmed user or system impact.",
    documentation:
      "Preserve evidence, identify concerns, verify independently, assign an owner, and avoid opening the content.",
  },
  {
    classification: "Correctly blocked or quarantined content",
    meaning:
      "The fictional security environment prevents delivery, access, download, or execution based on policy or threat evidence.",
    documentation:
      "Record the control action, affected recipients, related-message scope, tool limitations, and validation of legitimate communication.",
  },
  {
    classification: "Confirmed phishing destination or deceptive file",
    meaning:
      "The fictional evidence supports an unauthorized login page, deceptive form, impersonated share, misleading attachment, or other harmful purpose.",
    documentation:
      "Record sender, message, destination or file evidence, recipients, interaction, containment, account review, and residual risk.",
  },
  {
    classification: "Confirmed user, account, device, or business impact",
    meaning:
      "The fictional evidence supports a click, open, information entry, session creation, account change, process action, payment, or other measurable effect.",
    documentation:
      "Separate each downstream action and preserve mailbox, endpoint, identity, application, transaction, and owner evidence.",
  },
  {
    classification: "False positive or approved exception",
    meaning:
      "The fictional content appears suspicious to a tool but is confirmed through an approved sender, resource owner, service, workflow, and safe validation.",
    documentation:
      "Explain why it is legitimate, document the exception, and tune controls narrowly without losing useful protection.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional destination, file, interaction, device, account, or business evidence is insufficient for a reliable conclusion.",
    documentation:
      "State the missing evidence, confidence, temporary control, owner, due date, and decision criteria.",
  },
];


const timeline = [
  {
    time: "01:22:04",
    source: "Message delivery",
    event:
      "A fictional message claims that a confidential payroll document is available through a “Review Secure File” button.",
    meaning:
      "Establishes the claimed purpose and visible link label.",
  },
  {
    time: "01:22:07",
    source: "Link evidence",
    event:
      "The visible button points to a shortened fictional address rather than the known payroll portal.",
    meaning:
      "Creates a destination-visibility gap requiring independent verification.",
  },
  {
    time: "01:22:10",
    source: "Redirect analysis",
    event:
      "The fictional shortened address redirects through a tracking service to documents-auth.example.",
    meaning:
      "Identifies the final parent domain as unrelated to the trusted payroll service.",
  },
  {
    time: "01:22:12",
    source: "Page evidence",
    event:
      "The fictional destination presents a copied payroll sign-in page requesting a password and MFA code.",
    meaning:
      "Supports a deceptive credential-collection purpose.",
  },
  {
    time: "01:22:15",
    source: "Security control",
    event:
      "The fictional link-protection service changes its verdict from unknown to suspicious and blocks later access.",
    meaning:
      "Shows that security intelligence can change after initial delivery.",
  },
  {
    time: "01:25:00",
    source: "Recipient report",
    event:
      "The fictional recipient reports the message and states that the button was not opened.",
    meaning:
      "Supports safe user behavior but still requires technical correlation.",
  },
  {
    time: "01:27:00",
    source: "Mailbox evidence",
    event:
      "No fictional click event is recorded for the reporting recipient.",
    meaning:
      "Adds technical support for no known link interaction in that mailbox.",
  },
  {
    time: "01:29:00",
    source: "Identity evidence",
    event:
      "No fictional sign-in, MFA, recovery, factor, or new-session event follows for the reporting recipient.",
    meaning:
      "Supports no confirmed account impact within the reviewed identity sources.",
  },
  {
    time: "01:32:00",
    source: "Independent verification",
    event:
      "The fictional payroll owner confirms that no secure-document review was scheduled and the trusted portal contains no pending item.",
    meaning:
      "Provides business and system confirmation that the request is unauthorized.",
  },
  {
    time: "01:36:00",
    source: "Related-message search",
    event:
      "The fictional environment finds twelve messages using the same redirect chain and subject pattern.",
    meaning:
      "Expands the affected-recipient scope.",
  },
  {
    time: "01:40:00",
    source: "Containment",
    event:
      "The related messages are quarantined and the fictional destination pattern is blocked under approved policy.",
    meaning:
      "Reduces further interaction while preserving evidence.",
  },
  {
    time: "01:46:00",
    source: "Recipient review",
    event:
      "One other fictional recipient reports opening the message but not the link; all remaining recipients report no interaction.",
    meaning:
      "Separates message viewing from destination access.",
  },
  {
    time: "01:52:00",
    source: "Account review",
    event:
      "No related fictional account or application event is found for any reviewed recipient.",
    meaning:
      "Supports no confirmed downstream account or application impact in the reviewed scope.",
  },
  {
    time: "Day 2",
    source: "Validation",
    event:
      "The trusted payroll portal remains available, legitimate document notifications deliver, and the deceptive destination remains blocked.",
    meaning:
      "Completes technical and business validation.",
  },
];

const commonMistakes = [
  "Trusting fictional link text or a button label without checking the actual encoded destination.",
  "Treating the first address in a redirect chain as the final destination.",
  "Assuming a familiar cloud provider or hosting platform makes every tenant, page, or file trustworthy.",
  "Scanning an unexpected QR code because it moves the request to a phone.",
  "Opening a suspicious attachment to determine what it contains.",
  "Enabling macros, scripts, active content, editing, or security exceptions because a fictional document says they are required.",
  "Trusting a file name or extension without checking content type, structure, source, and business purpose.",
  "Assuming HTTPS or an encrypted connection proves the destination is legitimate.",
  "Using a message-provided phone number, reply path, portal, or support address for verification.",
  "Treating message delivery or opening as proof that a link was clicked, an attachment opened, or an account affected.",
  "Treating a tool verdict as complete proof without preserving the underlying message, destination, file, user, account, and business evidence.",
  "Publishing real links, QR codes, file names, addresses, domains, headers, recipients, screenshots, account details, or private content.",
];

const quizQuestions = [
  {
    question:
      "What is the strongest reason not to trust visible link text alone?",
    choices: [
      "The visible label can differ completely from the encoded and final destination.",
      "Visible text always reveals the physical sender.",
      "Every displayed address is unsafe.",
      "Legitimate messages cannot use buttons.",
    ],
    answer: 0,
    explanation:
      "A message can display trusted wording while encoding a different destination.",
  },
  {
    question:
      "What is the safest response to an unexpected fictional cloud-document invitation?",
    choices: [
      "Open the trusted collaboration application independently and check whether the share exists.",
      "Open the message link and sign in.",
      "Reply to the message for confirmation.",
      "Forward the link to other users for testing.",
    ],
    answer: 0,
    explanation:
      "Independent access to the known service avoids relying on a message-controlled destination.",
  },
  {
    question:
      "Why does HTTPS not prove a fictional page is trustworthy?",
    choices: [
      "Encryption can protect a connection to a deceptive or unrelated destination.",
      "HTTPS always means the page is unencrypted.",
      "Only internal pages can use HTTPS.",
      "HTTPS proves the business request is approved.",
    ],
    answer: 0,
    explanation:
      "Connection security and destination trust are separate questions.",
  },
  {
    question:
      "What is the safest response when a fictional document asks the user to enable active content?",
    choices: [
      "Do not enable it; verify the sender and purpose independently and request an approved safe format.",
      "Enable it because the file name looks familiar.",
      "Disable security controls first.",
      "Upload the file to a public website.",
    ],
    answer: 0,
    explanation:
      "A normal document workflow should not require unsafe exceptions without verified, authorized handling.",
  },
  {
    question:
      "Which statement best distinguishes message viewing from link interaction?",
    choices: [
      "A fictional message can be opened or previewed without the embedded link being visited.",
      "Opening a message always opens every link.",
      "Viewing proves account compromise.",
      "A delivered message is the same as a visited destination.",
    ],
    answer: 0,
    explanation:
      "Delivery, viewing, clicking, signing in, and downstream impact are separate evidence stages.",
  },
  {
    question:
      "What does a security-tool verdict directly represent?",
    choices: [
      "A fictional interpretation based on the tool’s available evidence and rules at a specific time.",
      "Perfect proof of sender intent.",
      "Proof that every recipient interacted.",
      "A permanent verdict that can never change.",
    ],
    answer: 0,
    explanation:
      "Tool results are important evidence but can be incomplete, wrong, delayed, or updated.",
  },
  {
    question:
      "Which conclusion is strongest when a deceptive link is confirmed but no click, sign-in, or account event is found?",
    choices: [
      "The message contains a confirmed phishing destination, while the available evidence shows no confirmed user or account impact.",
      "The account is definitely compromised.",
      "The message is safe because no click occurred.",
      "The sender is known with certainty.",
    ],
    answer: 0,
    explanation:
      "The content finding and downstream-impact conclusion should remain separate.",
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


function LinkLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Link Anatomy
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Layers Behind One Clickable Element
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {linkLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

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
                Defender question
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

function AttachmentLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Attachment Anatomy
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Layers Behind One File
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {attachmentLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

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
                Defender question
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

function LinkPatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Link Patterns
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Link Patterns and Safe Verification Paths
      </h2>

      <div className="mt-6 grid gap-5">
        {linkPatterns.map((item) => (
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
                  Safe verification
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.safeVerification}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AttachmentPatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Attachment Patterns
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Attachment Patterns and Safe Verification Paths
      </h2>

      <div className="mt-6 grid gap-5">
        {attachmentPatterns.map((item) => (
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
                  Safe verification
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.safeVerification}
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
        What Link and Attachment Evidence Can Prove
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
        Content Classification
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
        Review Links and Attachments in Six Steps
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
        Correlated Evidence Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Payroll Link from Delivery to Closure
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


export default function LinksAttachmentsAndSafeVerificationPage() {
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
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.4 Links, Attachments, and Safe Verification
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders evaluate fictional links, buttons, shortened
            destinations, redirects, QR codes, cloud shares, login prompts,
            attachments, file types, security verdicts, user interaction, and
            account impact without opening suspicious content.
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
          lessonTitle="Links, Attachments, and Safe Verification"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that visible link text, encoded destination, redirect path, final destination, page purpose, and account result are different evidence layers.",
            "I will not open suspicious links, attachments, cloud shares, QR codes, login prompts, or active content to investigate them.",
            "I will verify fictional resources through known portals, applications, contacts, project records, and approved business systems.",
            "I will separate message delivery, message viewing, link clicking, file opening, information entry, account activity, device activity, and business impact.",
            "I will use only fictional links, domains, files, messages, users, systems, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Label Is Not the Destination, and the File Name Is Not the File"
        >
          <p className="leading-8">
            A fictional button can say “Open Trusted Portal” while pointing to
            an unrelated destination. A file can look like a PDF while the
            detected content type is HTML. A familiar cloud platform can host
            an untrusted tenant. A security verdict can change after delivery.
            Defenders compare every layer and verify the business purpose
            independently rather than interacting with suspicious content.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “Open the fictional link or attachment so we can see whether it
                is dangerous.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the evidence, compare destination and content
                metadata, verify through a trusted path, and correlate user,
                endpoint, identity, application, and business activity.”
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
          title="Safe Verification Protects Both Security and Legitimate Work"
        >
          <p className="leading-8">
            Users still need to access real documents, invoices, portals,
            meetings, collaboration tools, software, payroll systems, and
            account services. Defensive verification should not simply block
            everything unfamiliar. It should provide a safe route to confirm
            the expected resource without relying on a message-controlled
            destination, file, contact method, or instruction.
          </p>
        </SectionCard>

        <LinkLayerGuide />
        <AttachmentLayerGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Content Presence, Interaction, and Impact"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Presence",
                "The fictional message contains a link, QR code, share, attachment, form, or login prompt.",
              ],
              [
                "Delivery",
                "The fictional content reaches an inbox, quarantine, junk folder, or security holding area.",
              ],
              [
                "Interaction",
                "A fictional recipient previews, clicks, downloads, opens, scans, enters information, or approves an action.",
              ],
              [
                "System result",
                "A fictional browser, device, identity, session, application, file, payment, or permission event occurs.",
              ],
              [
                "Confirmed impact",
                "Evidence supports an unauthorized account, data, device, transaction, or business change.",
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

        <LinkPatternGuide />
        <AttachmentPatternGuide />
        <EvidenceGuide />
        <ClassificationGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Link, Attachment, and Verification Terms
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
          title="Fake Link and Attachment Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services email environment."
          metrics={[
            {
              label: "Content reviewed",
              value: "47",
              note: "Links, QR codes, cloud shares, login prompts, documents, archives, forms, and calendar invitations.",
            },
            {
              label: "Verification paths",
              value: "8",
              note: "Trusted portals, collaboration apps, project records, vendor contacts, software catalogs, payment systems, calendars, and safe formats.",
            },
            {
              label: "Confirmed impacts",
              value: "2",
              note: "Most reviewed content was blocked, safely reported, legitimate, or evidence incomplete without confirmed downstream impact.",
            },
          ]}
        />

        <FakeAlertCard
          title="Payroll Document Button Redirects to a Fictional Credential Page"
          severity="High"
          time="01:22 PM"
          source="Fake Link and Attachment Review Console"
          details="A fictional payroll message contains a “Review Secure File” button. The button uses a shortened address, redirects through a tracking service, and ends at documents-auth.example, where a copied payroll page requests a password and MFA code. The recipient reports the message without opening the button."
          recommendation="Preserve the message and destination evidence, verify through the known payroll portal and owner, search for related messages, quarantine approved matches, block the deceptive destination pattern, correlate mailbox and account activity, and validate legitimate payroll notifications."
        />

        <FakeLogPanel
          title="Fake Payroll Link Investigation Timeline"
          logs={[
            "13:22:04 DELIVERY subject='Confidential payroll document' button='Review Secure File'",
            "13:22:07 LINK type='shortened' trusted_portal='false'",
            "13:22:10 REDIRECT chain='shortener,tracking,documents-auth.example'",
            "13:22:12 PAGE purpose='credential_collection' fields='password,mfa_code'",
            "13:22:15 VERDICT previous='unknown' current='suspicious' action='block'",
            "13:25:00 USER_REPORT clicked='false' attachment_opened='false'",
            "13:27:00 MAILBOX click_event='none'",
            "13:29:00 IDENTITY related_signins='0' mfa_events='0' new_sessions='0'",
            "13:32:00 VERIFY payroll_portal_pending_item='false' owner_request='not_authorized'",
            "13:36:00 SEARCH related_messages='12'",
            "13:40:00 CONTAIN quarantine='12' destination_block='active'",
            "13:46:00 USER_REVIEW message_opened='1' link_clicked='0'",
            "13:52:00 ACCOUNT_REVIEW confirmed_impact='none'",
            "DAY2 VALIDATION legitimate_payroll_mail='working' deceptive_pattern='blocked'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Link-and-Impact Conclusion Is Best Supported?"
          evidence={[
            "A fictional message contains a button labeled “Review Secure File.”",
            "The button uses a shortened address and redirects to documents-auth.example.",
            "The final page imitates a payroll login and requests a password and MFA code.",
            "The known payroll portal has no pending document.",
            "The payroll owner confirms no review request was sent.",
            "The recipient reports the message without clicking.",
            "Mailbox evidence shows no click event.",
            "No related sign-in, MFA, recovery, session, or application event is found.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The message contains a confirmed deceptive credential destination, while the available evidence shows no confirmed user or account impact.",
            "The account is compromised because the message was delivered.",
            "The link is safe because the user did not click it.",
            "The final page is legitimate because it uses an encrypted connection.",
          ]}
          bestAnswer={0}
          explanation="Destination and business evidence support a deceptive credential page. User, mailbox, identity, and application evidence support no confirmed downstream impact."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Link and Attachment Analysis"
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
          title="Complete a Fictional Link and Attachment Verification Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Content Verification Case
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-six supplied fictional records covering visible
                links, encoded destinations, redirects, parent domains, QR
                codes, cloud shares, file names, extensions, content types,
                structures, security verdicts, mailbox actions, endpoint events,
                identity activity, business verification, containment,
                validation, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map each fictional link from visible text to encoded and final destination.</li>
                <li>Map each fictional attachment from file name to detected content type, structure, verdict, and business purpose.</li>
                <li>Identify which resources are expected, suspicious, blocked, confirmed deceptive, legitimate exceptions, or evidence incomplete.</li>
                <li>Create trusted verification paths that do not use message-controlled links, QR codes, replies, phone numbers, or attachments.</li>
                <li>Separate delivery, viewing, clicking, downloading, opening, enabling content, information entry, account activity, and confirmed impact.</li>
                <li>State confirmed facts, reasonable conclusions, alternative explanations, confidence, and evidence gaps.</li>
                <li>Recommend narrow containment, related-message search, account and endpoint review, owner communication, monitoring, validation, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not open links, follow
            redirects, scan QR codes, download or open attachments, enable
            active content, enter credentials, approve prompts, run software,
            change security settings, or publish real URLs, domains, files,
            messages, recipients, screenshots, account details, or private
            content.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Cloud-Share Message Uses a Familiar Service but an Unexpected Tenant"
          scenario="A fictional message claims that a teacher shared a confidential document through a familiar collaboration service, but the encoded destination points to an unrelated tenant and presents a new login prompt."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the message link. Open the trusted collaboration application independently, check shared items and notifications, verify the teacher through a known contact, preserve the message, and report it if the share is absent.",
              outcome:
                "Best defensive choice. A familiar platform does not make every tenant, share, or login prompt trustworthy.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the link because the collaboration service is familiar.",
              outcome:
                "Unsafe. The destination tenant and login path are not independently verified.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reply to the message and ask the sender to resend the link.",
              outcome:
                "Weak verification. The suspicious sender may control the reply path.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Invoice Attachment Asks the User to Enable Active Content"
          scenario="A fictional vendor message includes an unexpected invoice document and says active content must be enabled to view the total. The invoice is not present in the purchasing system."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not open or enable content. Verify the invoice through the purchasing system and known vendor contact, preserve the message and file metadata, report it, and request an approved safe format if the invoice is legitimate.",
              outcome:
                "Best defensive choice. The response preserves the business workflow without accepting unnecessary executable behavior.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Enable active content because the vendor name is familiar.",
              outcome:
                "Unsafe. Familiar sender context does not verify the file or request.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the message immediately without preserving evidence.",
              outcome:
                "Incomplete. Evidence preservation and related-message review support a stronger response.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Links, Attachments, and Safe Verification Checklist"
          items={[
            "I identify fictional visible link text, displayed address, encoded destination, redirect chain, final domain, page purpose, and user result.",
            "I identify fictional file name, extension, content type, structure, security verdict, sender relationship, user interaction, and downstream result.",
            "I recognize shortened links, misleading subdomains, cloud-hosted login pages, QR codes, cloud shares, tracking redirects, and unusual application actions.",
            "I recognize unexpected documents, HTML attachments, archives, password-protected files, macro-enabled documents, misleading extensions, cloud-linked files, and sensitive forms.",
            "I do not treat HTTPS, a familiar cloud provider, a professional file name, a known sender, or a tool verdict as proof by itself.",
            "I verify through known portals, approved applications, project records, vendor contacts, payment systems, calendars, software catalogs, and trusted support channels.",
            "I separate content presence, delivery, viewing, clicking, downloading, opening, enabling content, information entry, account activity, and confirmed impact.",
            "I preserve fictional message, destination, file, mailbox, endpoint, identity, application, owner, containment, validation, and closure evidence.",
            "I document facts, conclusions, alternatives, evidence gaps, confidence, owners, monitoring, residual risk, and closure criteria.",
            "I use only fictional evidence and never publish real links, QR codes, files, messages, recipients, screenshots, account details, or private content.",
          ]}
        />

        <MiniQuiz
          title="I7.4 Mini Quiz: Links, Attachments, and Safe Verification"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Link and Attachment Verification Report using at least thirty-six visible-link, encoded-destination, redirect, final-domain, QR-code, cloud-share, file-name, extension, content-type, structure, security-verdict, mailbox, endpoint, identity, application, business-verification, containment, validation, and closure records. Include link and attachment anatomy, classifications, safe verification paths, interaction stages, confirmed facts, conclusions, alternatives, evidence gaps, owners, monitoring, residual risk, and closure criteria."
          tips={[
            "Use only fictional links, domains, files, messages, users, devices, applications, businesses, and organizations.",
            "Include one shortened-link case, one cloud-share case, one QR-code case, one attachment with misleading metadata, one legitimate exception, and one evidence-incomplete case.",
            "Clearly separate content presence, delivery, viewing, clicking, opening, information entry, account activity, device activity, and confirmed impact.",
            "Do not include real links, QR codes, attachments, credentials, account details, messages, recipients, screenshots, or private communications.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Visible link text, encoded destination, redirect chain, final destination, and page purpose are separate evidence layers.",
            "File names and extensions do not prove the actual content type, structure, safety, or business purpose of an attachment.",
            "Trusted platforms can host untrusted tenants, pages, shares, and files.",
            "Safe verification uses known portals, applications, contacts, project records, and business systems independently from the message.",
            "Content presence, delivery, interaction, system activity, and confirmed impact must be classified separately.",
            "Strong closure combines narrow containment, related-message review, account and endpoint correlation, legitimate-use validation, owner acceptance, and residual-risk documentation.",
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