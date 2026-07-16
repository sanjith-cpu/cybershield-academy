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
const previousLesson = `${modulePath}/business-email-compromise-and-impersonation`;
const nextLesson = `${modulePath}/email-logs-alerts-and-investigation`;

const objectives = [
  "Explain how fictional email gateways, reputation services, authentication checks, content inspection, URL protection, attachment analysis, warning banners, quarantine, allowlists, blocklists, and user reporting work together.",
  "Distinguish message acceptance, policy evaluation, scanning, verdict creation, delivery, warning, quarantine, blocking, post-delivery action, and user interaction.",
  "Evaluate fictional email-security decisions using sender evidence, message content, business context, tool limitations, false positives, false negatives, and independent verification.",
  "Recommend narrow defensive tuning that improves protection without unnecessarily blocking legitimate communication.",
  "Create a professional fictional Email Security Control Review with findings, owners, validation, monitoring, exceptions, and residual risk.",
];

const vocabulary = [
  [
    "Email security gateway",
    "A fictional service or system that evaluates messages before or during delivery using identity, reputation, content, attachment, link, policy, and threat evidence.",
  ],
  [
    "Reputation",
    "A fictional risk signal based on prior observations of a sender, domain, address, infrastructure, link, file, or behavior pattern.",
  ],
  [
    "Policy rule",
    "A fictional condition that applies an action such as allow, warn, quarantine, reject, tag, route, hold, or review.",
  ],
  [
    "Content inspection",
    "A fictional process that evaluates message text, headers, structure, links, attachments, and patterns for policy or threat indicators.",
  ],
  [
    "URL protection",
    "A fictional control that evaluates, rewrites, blocks, warns on, or tracks links before or after message delivery.",
  ],
  [
    "Attachment analysis",
    "A fictional control that evaluates file type, structure, content, reputation, behavior, and policy before allowing access.",
  ],
  [
    "Quarantine",
    "A fictional holding state that prevents normal mailbox access while preserving a message for review, release, deletion, or investigation.",
  ],
  [
    "Warning banner",
    "A fictional visual notice added to a message to provide context such as external sender, unusual request, or possible impersonation.",
  ],
  [
    "Allowlist",
    "A fictional narrowly approved exception that permits a specific sender, service, domain, file type, or workflow under documented conditions.",
  ],
  [
    "Blocklist",
    "A fictional rule that denies or restricts a known sender, domain, destination, file, pattern, or infrastructure element.",
  ],
  [
    "False positive",
    "A fictional legitimate message incorrectly classified as suspicious, harmful, or policy violating.",
  ],
  [
    "False negative",
    "A fictional harmful or unauthorized message incorrectly allowed or classified as safe.",
  ],
];

const controlLayers = [
  {
    layer: "Connection and sender reputation",
    purpose:
      "Evaluate fictional sending infrastructure, prior behavior, domain history, volume, location, and known threat intelligence.",
    evidence:
      "Connection records, sending address, domain, infrastructure reputation, message volume, and historical observations.",
    limitation:
      "New or shared infrastructure can have little history, and legitimate services may share systems with unwanted senders.",
  },
  {
    layer: "Sender authentication",
    purpose:
      "Review fictional SPF, DKIM, DMARC, alignment, and related identity evidence.",
    evidence:
      "Envelope sender, signing domain, visible From domain, authentication results, alignment, and policy.",
    limitation:
      "A lookalike domain or compromised legitimate account can still authenticate correctly.",
  },
  {
    layer: "Message and header analysis",
    purpose:
      "Evaluate fictional sender fields, reply paths, routing, subject, recipients, structure, and unusual metadata.",
    evidence:
      "Headers, message IDs, routing, Reply-To, recipient patterns, timestamps, and transport anomalies.",
    limitation:
      "Legitimate forwarding, mailing, support, and cloud workflows can produce complex or unusual headers.",
  },
  {
    layer: "Language and intent analysis",
    purpose:
      "Identify fictional urgency, authority, secrecy, credential requests, payment changes, data requests, impersonation, and social-engineering patterns.",
    evidence:
      "Subject, body, requested action, business process, prior conversation, sender relationship, and context.",
    limitation:
      "Legitimate messages can use urgent or sensitive language, and automated analysis may miss context.",
  },
  {
    layer: "Link analysis",
    purpose:
      "Evaluate fictional visible text, encoded destination, redirects, parent domains, reputation, page purpose, and later verdict changes.",
    evidence:
      "URLs, redirect chain, destination metadata, reputation, page classification, and user-click events.",
    limitation:
      "Links can change after delivery, trusted services can host untrusted content, and some destinations remain unavailable during analysis.",
  },
  {
    layer: "Attachment analysis",
    purpose:
      "Evaluate fictional file names, extensions, content types, structures, embedded content, reputation, and behavior.",
    evidence:
      "File metadata, hashes, content type, structure, security verdict, and authorized analysis results.",
    limitation:
      "Encrypted files, unsupported formats, delayed content, and false positives can reduce certainty.",
  },
  {
    layer: "Business and policy context",
    purpose:
      "Compare fictional messages with approved senders, vendors, workflows, data rules, financial controls, and communication requirements.",
    evidence:
      "Vendor records, purchasing process, account workflows, data classification, service owner, and approved exceptions.",
    limitation:
      "Technical controls may not have complete or current business context.",
  },
  {
    layer: "Post-delivery and user signals",
    purpose:
      "Use fictional user reports, changed verdicts, related-message searches, mailbox actions, account events, and incident findings.",
    evidence:
      "Report-phishing events, message recalls, post-delivery quarantine, clicks, sign-ins, sessions, and case records.",
    limitation:
      "Post-delivery response occurs after initial exposure and requires timely correlation and ownership.",
  },
];

const actions = [
  {
    action: "Allow",
    meaning:
      "The fictional message continues to the intended mailbox or workflow without a restrictive action.",
    appropriateWhen:
      "Available evidence and policy support normal delivery, or risk remains below the approved threshold.",
    caution:
      "Allow does not prove the message is legitimate, safe, or authorized in every business context.",
  },
  {
    action: "Allow with warning",
    meaning:
      "The fictional message is delivered with an external, unusual-sender, impersonation, or sensitive-request notice.",
    appropriateWhen:
      "The message may be legitimate but requires user awareness and independent verification.",
    caution:
      "Too many warnings can cause users to ignore them, while weak wording can create false confidence.",
  },
  {
    action: "Route to junk",
    meaning:
      "The fictional message is delivered to a lower-trust folder instead of the main inbox.",
    appropriateWhen:
      "Signals suggest unwanted or low-value content without strong evidence requiring quarantine or rejection.",
    caution:
      "Users may still access the message, and legitimate mail may be missed.",
  },
  {
    action: "Quarantine",
    meaning:
      "The fictional message is held away from the normal mailbox for review, release, or deletion.",
    appropriateWhen:
      "Risk, policy, identity, attachment, link, or business evidence requires stronger control while preserving the message.",
    caution:
      "Quarantine requires clear ownership, review standards, release controls, and time limits.",
  },
  {
    action: "Reject",
    meaning:
      "The fictional receiving system refuses the message during delivery.",
    appropriateWhen:
      "A high-confidence policy or authentication condition requires denial before mailbox delivery.",
    caution:
      "Reject can interrupt legitimate communication and may provide limited evidence for later user reporting.",
  },
  {
    action: "Block destination or file",
    meaning:
      "The fictional system prevents access to a specific link, domain, attachment, file type, or pattern.",
    appropriateWhen:
      "The destination or content is confirmed unsafe or violates a narrow policy.",
    caution:
      "Broad blocking can affect shared platforms, legitimate tenants, or required files.",
  },
  {
    action: "Post-delivery quarantine",
    meaning:
      "The fictional system removes or restricts a message after delivery because new evidence changes the verdict.",
    appropriateWhen:
      "Threat intelligence, user reports, destination changes, or investigation findings appear after initial delivery.",
    caution:
      "The team must still review whether users interacted before the message was removed.",
  },
  {
    action: "Escalate for investigation",
    meaning:
      "The fictional message and evidence are assigned to a person or team for deeper review.",
    appropriateWhen:
      "The decision requires business context, identity review, related-message search, account analysis, or owner confirmation.",
    caution:
      "Escalation without clear ownership, priority, evidence, and closure criteria can create unmanaged queues.",
  },
];

const allowlistPrinciples = [
  {
    principle: "Use the narrowest identity",
    goodPractice:
      "Allow a fictional specific sending service, aligned domain, mailbox, message type, or verified workflow.",
    poorPractice:
      "Allow every message from a broad domain or shared provider.",
    validation:
      "Confirm required messages deliver while unrelated or deceptive messages remain controlled.",
  },
  {
    principle: "Require an accountable owner",
    goodPractice:
      "Assign a fictional business and technical owner who understands the sender, purpose, and risk.",
    poorPractice:
      "Create an exception because a user asked informally.",
    validation:
      "Confirm the owner, approval, review date, and escalation path remain current.",
  },
  {
    principle: "Document the business purpose",
    goodPractice:
      "State the fictional service, recipients, message type, data, timing, and expected behavior.",
    poorPractice:
      "Use a vague label such as “trusted vendor.”",
    validation:
      "Compare actual observed mail with the documented purpose.",
  },
  {
    principle: "Preserve other controls",
    goodPractice:
      "Bypass only the fictional control causing the verified false positive while retaining authentication, link, attachment, and monitoring coverage.",
    poorPractice:
      "Disable every security check for the sender.",
    validation:
      "Test that required mail succeeds and unrelated risky content is still inspected.",
  },
  {
    principle: "Set an expiration",
    goodPractice:
      "Give the fictional exception a review or end date.",
    poorPractice:
      "Create a permanent exception with no owner or review.",
    validation:
      "Remove or renew the exception based on current evidence and business need.",
  },
  {
    principle: "Monitor exception use",
    goodPractice:
      "Track fictional message volume, recipients, actions, failures, and unusual content under the exception.",
    poorPractice:
      "Stop reviewing the sender because it is allowlisted.",
    validation:
      "Alert when observed behavior differs from the approved pattern.",
  },
  {
    principle: "Protect against compromise",
    goodPractice:
      "Continue to review fictional account, domain, authentication, request, link, attachment, and business-process evidence.",
    poorPractice:
      "Assume an allowlisted sender cannot be compromised.",
    validation:
      "Test how the environment handles an unusual request from the approved sender.",
  },
  {
    principle: "Record rollback criteria",
    goodPractice:
      "Define the fictional events that suspend or remove the exception.",
    poorPractice:
      "Leave the exception active during unresolved security concerns.",
    validation:
      "Confirm owners can quickly revoke the exception and restore the standard policy.",
  },
];

const evidenceMatrix = [
  {
    source: "Gateway decision",
    supports:
      "The fictional action applied during delivery, such as allow, warn, junk, quarantine, reject, or route.",
    limitation:
      "The action reflects the evidence and policy available at that time, not a final truth.",
  },
  {
    source: "Policy-match record",
    supports:
      "The fictional rule, condition, exception, priority, and action that influenced the decision.",
    limitation:
      "Policy order, overlapping rules, stale exceptions, or missing context can affect the result.",
  },
  {
    source: "Authentication evidence",
    supports:
      "The fictional SPF, DKIM, DMARC, alignment, and sender-identity relationships.",
    limitation:
      "Authentication does not prove business authorization or uncompromised account use.",
  },
  {
    source: "Link and attachment verdicts",
    supports:
      "The fictional destination, file, reputation, structure, behavior, and policy interpretation.",
    limitation:
      "Verdicts can change after delivery and can produce false positives or false negatives.",
  },
  {
    source: "Warning and quarantine state",
    supports:
      "The fictional user-visible notice, holding state, release decision, and review history.",
    limitation:
      "A warning does not prove the user understood it, and quarantine does not prove malicious intent.",
  },
  {
    source: "User report",
    supports:
      "The fictional recipient’s concern, expected relationship, observed content, and reported interaction.",
    limitation:
      "The report should be correlated with technical, account, and business evidence.",
  },
  {
    source: "Post-delivery actions",
    supports:
      "The fictional recall, reclassification, related-message search, destination block, attachment block, and account review.",
    limitation:
      "The team must still determine whether interaction occurred before the action.",
  },
  {
    source: "Business validation",
    supports:
      "Whether the fictional sender, service, vendor, message type, exception, and required communication are approved.",
    limitation:
      "Business confirmation should be documented, current, independently verified, and limited in scope.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Preserve the decision evidence",
    detail:
      "Keep the fictional message, headers, policy matches, verdicts, gateway action, warning, quarantine state, user report, and timestamps.",
  },
  {
    step: "2",
    title: "Identify every control that acted",
    detail:
      "Map fictional reputation, authentication, message, language, link, attachment, business, and post-delivery controls.",
  },
  {
    step: "3",
    title: "Compare the result with business need",
    detail:
      "Determine whether the fictional message is expected, required, suspicious, harmful, misconfigured, or an approved exception.",
  },
  {
    step: "4",
    title: "Review interaction and impact",
    detail:
      "Correlate fictional delivery, warning visibility, quarantine access, release, click, open, account, application, and business activity.",
  },
  {
    step: "5",
    title: "Tune narrowly",
    detail:
      "Adjust the specific fictional condition, threshold, exception, warning, block, or review path that caused the problem.",
  },
  {
    step: "6",
    title: "Validate and monitor",
    detail:
      "Test both legitimate and unsafe examples, confirm owner acceptance, monitor changed behavior, set review dates, and document residual risk.",
  },
];


const classifications = [
  {
    classification: "Correctly allowed",
    meaning:
      "The fictional message is expected, independently verified, policy compliant, and delivered without unnecessary restriction.",
    documentation:
      "Record the sender relationship, business purpose, evidence, control decision, and any remaining limitation.",
  },
  {
    classification: "Correctly warned",
    meaning:
      "The fictional message may be legitimate but requires user awareness because it is external, unusual, sensitive, or outside the normal pattern.",
    documentation:
      "Record why the warning is appropriate, how users should respond, and whether the warning remains effective.",
  },
  {
    classification: "Correctly quarantined or blocked",
    meaning:
      "The fictional evidence and policy support holding, rejecting, or preventing access to the message, destination, or file.",
    documentation:
      "Record the matched evidence, rule, recipients, scope, review owner, related-message search, and validation.",
  },
  {
    classification: "False positive",
    meaning:
      "The fictional message is legitimate and required, but a control incorrectly restricts or warns on it.",
    documentation:
      "Preserve the original decision, verify the sender and business need, identify the exact failing condition, tune narrowly, and retest.",
  },
  {
    classification: "False negative",
    meaning:
      "The fictional message is harmful, unauthorized, or policy violating but is allowed or insufficiently controlled.",
    documentation:
      "Record missed indicators, control gaps, affected recipients, interaction, containment, tuning, validation, and residual risk.",
  },
  {
    classification: "Stale or overbroad exception",
    meaning:
      "A fictional allowlist or policy bypass exceeds its approved identity, purpose, scope, duration, or owner relationship.",
    documentation:
      "Record the exception, observed use, owner status, risk, rollback plan, and replacement control.",
  },
  {
    classification: "Tool disagreement",
    meaning:
      "Fictional reputation, link, attachment, identity, or behavior controls produce different interpretations of the same message.",
    documentation:
      "Preserve each result, compare source coverage and timing, obtain business context, and state the final confidence and gaps.",
  },
  {
    classification: "Evidence incomplete",
    meaning:
      "The fictional control decision, message, user, account, business, or tool evidence is insufficient for reliable tuning or closure.",
    documentation:
      "State the missing evidence, temporary action, owner, confidence, due date, and decision criteria.",
  },
];

const controlTimeline = [
  {
    time: "07:31:02",
    source: "Connection control",
    event:
      "A fictional vendor message arrives from a newly used cloud sending address with neutral reputation.",
    meaning:
      "Provides limited reputation evidence rather than proof of risk.",
  },
  {
    time: "07:31:05",
    source: "Authentication",
    event:
      "SPF and DKIM pass, and DMARC aligns for trusted-vendor.example.",
    meaning:
      "Supports the sender-domain relationship but not the specific invoice request.",
  },
  {
    time: "07:31:08",
    source: "Content control",
    event:
      "The fictional message contains an expected invoice subject and a PDF attachment.",
    meaning:
      "The visible message appears consistent with a normal vendor workflow.",
  },
  {
    time: "07:31:11",
    source: "Attachment control",
    event:
      "The file is quarantined because the newly observed PDF structure matches a high-risk threshold.",
    meaning:
      "The security tool applies a restrictive action based on attachment analysis.",
  },
  {
    time: "07:35:00",
    source: "User report",
    event:
      "The fictional accounts-payable user reports that the expected monthly invoice is missing.",
    meaning:
      "Introduces a possible business-impact and false-positive concern.",
  },
  {
    time: "07:39:00",
    source: "Business verification",
    event:
      "The known fictional vendor contact and purchase-order owner confirm the invoice number, amount, sender, and scheduled delivery.",
    meaning:
      "Provides independent evidence that the message and document are expected.",
  },
  {
    time: "07:43:00",
    source: "Secondary analysis",
    event:
      "A second fictional approved attachment-analysis source finds no suspicious behavior or active content.",
    meaning:
      "Creates tool disagreement requiring careful review rather than automatic release.",
  },
  {
    time: "07:47:00",
    source: "Policy review",
    event:
      "The quarantine rule is found to use a broad threshold added after an unrelated prior case.",
    meaning:
      "Identifies a possible overbroad control condition.",
  },
  {
    time: "07:52:00",
    source: "Decision",
    event:
      "The fictional message is released to the intended recipient after owner approval and preserved evidence review.",
    meaning:
      "Restores the required business communication through an accountable release process.",
  },
  {
    time: "08:05:00",
    source: "Narrow tuning",
    event:
      "The fictional rule is adjusted to combine the attachment pattern with unexpected sender, active content, or unverified business context.",
    meaning:
      "Improves precision without broadly allowlisting the vendor.",
  },
  {
    time: "08:18:00",
    source: "Positive validation",
    event:
      "Three fictional legitimate vendor invoices with the expected structure deliver successfully.",
    meaning:
      "Confirms the false-positive condition is reduced.",
  },
  {
    time: "08:23:00",
    source: "Negative validation",
    event:
      "A fictional unverified attachment with the same structure plus active content remains quarantined.",
    meaning:
      "Confirms important protection remains active.",
  },
  {
    time: "Day 7",
    source: "Monitoring",
    event:
      "No new false positives or missed unsafe examples appear in the fictional review period.",
    meaning:
      "Provides short-term evidence that the tuning behaves as intended.",
  },
];

const tuningExamples = [
  {
    issue: "External-sender banner appears on every partner message",
    weakFix:
      "Disable the fictional external banner for the entire partner domain.",
    strongerFix:
      "Keep the external context but use a clearer, less disruptive banner for the verified partner workflow.",
    validation:
      "Confirm users still recognize external communication and required partner mail remains readable.",
  },
  {
    issue: "Approved newsletter is quarantined for bulk volume",
    weakFix:
      "Allowlist the fictional shared cloud provider.",
    strongerFix:
      "Document the approved newsletter service, aligned identity, owner, recipients, expected volume, and expiration.",
    validation:
      "Confirm the approved campaign delivers while unrelated provider traffic remains evaluated.",
  },
  {
    issue: "Legitimate invoice attachment triggers a broad pattern",
    weakFix:
      "Allow every attachment from the fictional vendor.",
    strongerFix:
      "Tune the specific pattern using verified sender, expected file type, absence of active content, purchase-order context, and owner approval.",
    validation:
      "Test legitimate invoices and unsafe or unexpected files separately.",
  },
  {
    issue: "Known collaboration links are rewritten and users are confused",
    weakFix:
      "Disable fictional URL protection for the collaboration platform.",
    strongerFix:
      "Improve user explanation, preserve click-time analysis, and narrow exceptions only for verified tenant and workflow conditions.",
    validation:
      "Confirm approved shares work and unrelated or deceptive tenants remain controlled.",
  },
  {
    issue: "DMARC failure blocks an approved forwarding workflow",
    weakFix:
      "Ignore all authentication failures for forwarded mail.",
    strongerFix:
      "Document the fictional forwarding path, preserve aligned evidence where available, and apply a narrow forwarding-aware policy.",
    validation:
      "Test approved forwarding and direct spoof attempts against the same visible domain.",
  },
  {
    issue: "User-reported phishing is automatically deleted everywhere",
    weakFix:
      "Trust every fictional report as a confirmed threat.",
    strongerFix:
      "Preserve and correlate the report, search related messages, review sender and business context, and require approved action thresholds.",
    validation:
      "Confirm true related threats are contained while legitimate messages are not removed solely from one report.",
  },
  {
    issue: "A high-risk role receives many credential-warning banners",
    weakFix:
      "Remove warnings for the fictional executive or administrator.",
    strongerFix:
      "Tune the warning to the actual request, sender, domain, and account context while preserving sensitive-action verification.",
    validation:
      "Confirm legitimate account notices remain usable and deceptive login requests still receive strong treatment.",
  },
  {
    issue: "A temporary allowlist remains after a project ends",
    weakFix:
      "Leave it because no incident has occurred.",
    strongerFix:
      "Expire the fictional exception, confirm the owner and project status, remove unused access, and restore standard controls.",
    validation:
      "Confirm no required communication depends on the exception and monitoring shows no unexpected failures.",
  },
];

const commonMistakes = [
  "Treating a fictional gateway action as a final statement of message legitimacy or impact.",
  "Allowlisting an entire domain, provider, or file type to solve one narrow false positive.",
  "Disabling authentication, link, attachment, or warning controls for a trusted sender without considering account compromise.",
  "Rejecting every newly observed domain even when legitimate vendors and services change infrastructure.",
  "Releasing a quarantined message based only on a user request without business and security verification.",
  "Keeping temporary exceptions active without owners, expiration dates, monitoring, or rollback criteria.",
  "Tuning only against the missed message without testing how the change affects legitimate communication.",
  "Tuning only against a false positive without testing whether unsafe examples remain blocked.",
  "Ignoring post-delivery verdict changes, user reports, related-message searches, and interaction evidence.",
  "Using warning banners so broadly that recipients stop noticing meaningful differences.",
  "Closing a filtering case without documenting the original rule, changed condition, positive test, negative test, owner acceptance, and residual risk.",
  "Publishing real policies, sender lists, internal domains, gateways, recipients, messages, screenshots, or security architecture.",
];

const quizQuestions = [
  {
    question:
      "What does an email-security gateway decision directly represent?",
    choices: [
      "The fictional action produced by the evidence and policy available at that time.",
      "Perfect proof of the sender’s intent.",
      "Proof that every recipient interacted.",
      "A permanent verdict that cannot change.",
    ],
    answer: 0,
    explanation:
      "Gateway decisions are evidence-based control outcomes, not complete truth about sender, intent, or impact.",
  },
  {
    question:
      "What is the strongest way to address a false positive?",
    choices: [
      "Verify the legitimate business need, identify the exact control condition, tune narrowly, and test both legitimate and unsafe examples.",
      "Allowlist the entire sending provider.",
      "Disable all attachment analysis.",
      "Release every future message from the sender automatically.",
    ],
    answer: 0,
    explanation:
      "Narrow tuning preserves protection while restoring the required communication.",
  },
  {
    question:
      "Why is a broad allowlist risky?",
    choices: [
      "It can bypass controls for unrelated messages or for a fictional trusted sender that later becomes compromised.",
      "It always blocks legitimate mail.",
      "It proves the sender is malicious.",
      "It automatically expires.",
    ],
    answer: 0,
    explanation:
      "Exceptions should be specific, owned, monitored, tested, and time limited.",
  },
  {
    question:
      "What is post-delivery quarantine?",
    choices: [
      "A fictional message is removed or restricted after delivery because new evidence changes the verdict.",
      "A message is permanently trusted before scanning.",
      "A user deletes a normal draft.",
      "A sender changes the subject line.",
    ],
    answer: 0,
    explanation:
      "Threat intelligence and user reports can create new evidence after initial delivery.",
  },
  {
    question:
      "Which validation plan is strongest after changing a filtering rule?",
    choices: [
      "Test expected legitimate messages and unsafe or unauthorized examples, then monitor results and confirm owner acceptance.",
      "Test only the original false positive.",
      "Test only one blocked message.",
      "Assume the rule works because it saved successfully.",
    ],
    answer: 0,
    explanation:
      "Positive and negative validation reveal whether the change restores business use without weakening protection.",
  },
  {
    question:
      "What is a false negative?",
    choices: [
      "A fictional harmful or unauthorized message is incorrectly allowed or insufficiently controlled.",
      "A legitimate message is quarantined.",
      "A warning banner is displayed correctly.",
      "A user reports a known phishing message.",
    ],
    answer: 0,
    explanation:
      "False negatives represent missed protection, while false positives represent incorrect restriction of legitimate activity.",
  },
  {
    question:
      "Which exception design is strongest?",
    choices: [
      "A narrow fictional identity and purpose with owners, preserved controls, expiration, monitoring, validation, and rollback criteria.",
      "A permanent allowlist for an entire cloud provider.",
      "An undocumented bypass requested in chat.",
      "A rule that disables all scanning for one department.",
    ],
    answer: 0,
    explanation:
      "Strong exceptions are specific, accountable, testable, reviewable, and reversible.",
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


function ControlLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Control Architecture
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Layers in a Fictional Email-Security Stack
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {controlLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Purpose
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.purpose}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
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

function ActionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Control Actions
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Actions and Their Appropriate Uses
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {actions.map((item) => (
          <div
            key={item.action}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.action}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Appropriate when
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.appropriateWhen}
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

function ExceptionGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Exception Design
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Principles for Safer Allowlists
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {allowlistPrinciples.map((item) => (
          <div
            key={item.principle}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.principle}</h3>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Good practice
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.goodPractice}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Poor practice
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.poorPractice}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.validation}
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
        What Filtering Evidence Can and Cannot Prove
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
        Decision Classification
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Outcomes with Different Tuning Needs
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

function TuningGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Narrow Tuning
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Problems and Stronger Fixes
      </h2>

      <div className="mt-6 grid gap-5">
        {tuningExamples.map((item) => (
          <div
            key={item.issue}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.issue}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak fix
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakFix}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Stronger fix
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongerFix}
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Validation
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.validation}
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
        Review and Tune a Control in Six Steps
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
        Correlated Control Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Invoice False Positive from Quarantine to Validation
      </h2>

      <div className="mt-6 grid gap-3">
        {controlTimeline.map((item) => (
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


export default function EmailSecurityControlsAndFilteringPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7.6 Email Security Controls and Filtering
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional email gateways, reputation, authentication,
            content inspection, link protection, attachment analysis, warning
            banners, quarantine, allowlists, blocklists, user reports,
            post-delivery actions, and narrow tuning work together.
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
          lessonTitle="Email Security Controls and Filtering"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that a fictional allow, warning, quarantine, reject, or block decision reflects evidence and policy available at a specific time.",
            "I will distinguish control action, message legitimacy, user interaction, account activity, and business impact.",
            "I will not create broad allowlists or disable controls to solve one narrow false positive.",
            "I will validate changes with both expected legitimate examples and unsafe or unauthorized examples.",
            "I will use only fictional messages, senders, rules, domains, recipients, systems, vendors, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Good Filter Protects Communication Instead of Simply Blocking More"
        >
          <p className="leading-8">
            A fictional security control can miss a deceptive message, block a
            required invoice, warn on every external sender, or trust an
            approved service too broadly. Professional filtering balances
            protection, evidence, business need, user experience, exceptions,
            ownership, validation, monitoring, and rollback.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “The fictional vendor invoice was quarantined, so allowlist the
                entire vendor domain and skip attachment inspection.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Verify the invoice, identify the exact failing condition, tune
                only that condition, retain other controls, and test both
                legitimate and unsafe examples.”
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
          title="Filtering Decisions Affect Security, Access, and Trust"
        >
          <p className="leading-8">
            Email controls protect users from impersonation, unsafe
            destinations, deceptive files, unwanted content, and unauthorized
            requests. The same controls can also delay invoices, hide school
            notices, interrupt vendor communication, or create warning fatigue.
            Defenders must understand why a decision occurred and how a change
            affects both protection and legitimate work.
          </p>
        </SectionCard>

        <ControlLayerGuide />
        <ActionGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Detection, Decision, Delivery, Interaction, and Impact"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Detection",
                "A fictional control observes authentication, reputation, language, links, files, behavior, policy, or business context.",
              ],
              [
                "Decision",
                "The fictional policy produces allow, warn, junk, quarantine, reject, block, or escalate.",
              ],
              [
                "Delivery",
                "The fictional message reaches an inbox, junk folder, quarantine, review queue, or rejection state.",
              ],
              [
                "Interaction",
                "A fictional user reads, reports, releases, clicks, opens, replies, forwards, or ignores the message.",
              ],
              [
                "Impact",
                "A fictional account, device, application, payment, data, permission, or business process changes.",
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

        <ExceptionGuide />
        <EvidenceGuide />
        <ClassificationGuide />
        <TuningGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Email Controls and Filtering Terms
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
          title="Fake Email Security Controls Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services email environment."
          metrics={[
            {
              label: "Messages evaluated",
              value: "18,240",
              note: "Fictional connection, authentication, content, link, attachment, policy, and post-delivery controls contributed evidence.",
            },
            {
              label: "Quarantine reviews",
              value: "46",
              note: "Correctly quarantined messages, false positives, tool disagreements, approved exceptions, and evidence-incomplete cases.",
            },
            {
              label: "Active exceptions",
              value: "9",
              note: "Each fictional exception has an identity, purpose, owner, preserved controls, expiration, monitoring, validation, and rollback criteria.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expected Vendor Invoice Quarantined by an Overbroad Attachment Rule"
          severity="Medium"
          time="07:31 AM"
          source="Fake Email Security Control Review Console"
          details="A fictional invoice from trusted-vendor.example passes aligned authentication and matches an approved purchase order, but a broad attachment-structure threshold quarantines it. The known vendor and purchasing owner confirm the invoice. Secondary approved analysis finds no active content or suspicious behavior."
          recommendation="Preserve the original decision, verify the business relationship and document, identify the exact rule condition, release through an accountable process, tune narrowly, retain other controls, test legitimate and unsafe examples, and monitor the result."
        />

        <FakeLogPanel
          title="Fake Filtering and Validation Timeline"
          logs={[
            "07:31:02 CONNECTION sender='trusted-vendor.example' reputation='neutral_new_address'",
            "07:31:05 AUTH spf='pass' dkim='pass' dmarc='aligned_pass'",
            "07:31:08 CONTENT subject='Monthly invoice' attachment='invoice_1042.pdf'",
            "07:31:11 ATTACHMENT verdict='high_risk_structure' action='quarantine'",
            "07:35:00 USER_REPORT issue='expected_invoice_missing'",
            "07:39:00 VERIFY vendor='confirmed' purchase_order='matched' amount='matched'",
            "07:43:00 SECONDARY_ANALYSIS active_content='none' suspicious_behavior='none'",
            "07:47:00 POLICY_REVIEW finding='broad_threshold'",
            "07:52:00 RELEASE owner_approval='true' recipient='accounts_payable'",
            "08:05:00 TUNING added_context='unexpected_sender_or_active_content'",
            "08:18:00 POSITIVE_TEST legitimate_invoices='3' result='delivered'",
            "08:23:00 NEGATIVE_TEST unsafe_attachment='1' result='quarantined'",
            "DAY7 MONITOR false_positives='0' missed_unsafe='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Filtering Conclusion Is Best Supported?"
          evidence={[
            "The fictional vendor domain passes aligned authentication.",
            "The invoice number, amount, purchase order, sender, and scheduled delivery are independently confirmed.",
            "The attachment is quarantined by a broad file-structure threshold.",
            "Secondary approved analysis finds no active content or suspicious behavior.",
            "The rule was added after an unrelated case and lacks sender or business context.",
            "The message is released through an accountable review process.",
            "Three legitimate invoice tests deliver after narrow tuning.",
            "An unsafe attachment with active content remains quarantined.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The original quarantine is a false positive caused by an overbroad condition, and narrow tuning restores legitimate invoices while preserving protection against the unsafe example.",
            "Every future message from the vendor should bypass attachment analysis.",
            "The invoice is malicious because it was quarantined.",
            "The security control should be removed because one false positive occurred.",
          ]}
          bestAnswer={0}
          explanation="Independent business evidence and secondary analysis support legitimacy, while positive and negative validation show the narrow change improves precision without broadly weakening protection."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Control Tuning"
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
          title="Complete a Fictional Email Security Control Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Filtering Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-six supplied fictional records covering
                connection reputation, authentication, headers, message
                language, links, attachments, policy matches, warnings,
                quarantine, release, user reports, related-message searches,
                business validation, exceptions, positive tests, negative
                tests, monitoring, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map every fictional control that evaluates or acts on each message.</li>
                <li>Separate detection evidence, policy decision, delivery state, user interaction, account activity, and business impact.</li>
                <li>Classify correctly allowed, warned, quarantined, blocked, false-positive, false-negative, stale-exception, tool-disagreement, and evidence-gap cases.</li>
                <li>Identify the exact rule, threshold, identity, destination, file, warning, exception, or review path that needs improvement.</li>
                <li>Create the narrowest safe tuning proposal with accountable owners, preserved controls, expiration, monitoring, and rollback.</li>
                <li>Design positive tests for legitimate communication and negative tests for unsafe or unauthorized examples.</li>
                <li>Document findings, alternatives, confidence, evidence gaps, validation results, owner acceptance, monitoring, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not change real filtering,
            DNS, authentication, gateway, allowlist, blocklist, quarantine, or
            mail-flow settings. Do not send test phishing messages, open
            suspicious content, access real mailboxes, or publish real policies,
            senders, recipients, messages, screenshots, or internal security
            architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Legitimate Vendor Invoice Is Quarantined"
          scenario="A fictional expected invoice matches the purchase order and known vendor contact, but a broad attachment rule quarantines it. A second approved analysis source finds no active content or suspicious behavior."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the decision evidence, verify the invoice and sender independently, release through the approved review process, tune the exact failing condition, retain other controls, and test legitimate and unsafe examples.",
              outcome:
                "Best defensive choice. The response fixes the false positive without broadly trusting the vendor or attachment type.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allowlist the entire vendor domain and skip attachment inspection.",
              outcome:
                "Unsafe. A trusted sender can be compromised, and unrelated attachments still require protection.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave the invoice quarantined because security tools are always correct.",
              outcome:
                "Weak analysis. Tool decisions require evidence, business context, accountable review, and validation.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Previously Allowed Link Is Reclassified After Delivery"
          scenario="A fictional message is initially allowed because its destination has no negative reputation. Two hours later, user reports and new evidence identify the destination as a deceptive login page."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the changed verdict and message evidence, apply approved post-delivery quarantine, search for related recipients, block the narrow destination pattern, review clicks and account activity, notify affected users, and validate legitimate links.",
              outcome:
                "Best defensive choice. The response recognizes that verdicts can change and still separates message exposure from confirmed impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Take no action because the message already passed the gateway.",
              outcome:
                "Unsafe. New evidence can require post-delivery containment and investigation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Block the entire hosting platform permanently.",
              outcome:
                "Overbroad. Shared platforms may host required legitimate content and need tenant- or pattern-specific control.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Email Security Controls and Filtering Checklist"
          items={[
            "I identify fictional connection, reputation, authentication, message, language, link, attachment, business, and post-delivery control layers.",
            "I distinguish allow, warning, junk, quarantine, reject, destination block, post-delivery quarantine, and investigation escalation.",
            "I separate detection, decision, delivery, interaction, account activity, and confirmed impact.",
            "I treat reputation, authentication, user reports, security verdicts, and business confirmation as evidence with limitations.",
            "I distinguish correctly allowed, correctly warned, correctly blocked, false-positive, false-negative, stale-exception, tool-disagreement, and evidence-incomplete cases.",
            "I use the narrowest possible fictional exception with identity, purpose, owner, preserved controls, expiration, monitoring, validation, and rollback.",
            "I do not broadly allowlist domains, shared providers, file types, departments, or high-value users to solve one issue.",
            "I validate changes with expected legitimate examples and unsafe or unauthorized examples.",
            "I document original behavior, changed condition, test results, owner acceptance, monitoring, evidence gaps, and residual risk.",
            "I use only fictional evidence and never publish real policies, senders, recipients, gateways, messages, screenshots, or internal security architecture.",
          ]}
        />

        <MiniQuiz
          title="I7.6 Mini Quiz: Email Security Controls and Filtering"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Email Security Control Review using at least thirty-six connection, reputation, authentication, header, content, link, attachment, policy, warning, quarantine, release, user-report, post-delivery, business-validation, exception, test, monitoring, and closure records. Include the control architecture, decision classifications, false positives, false negatives, narrow tuning, exception design, positive validation, negative validation, owners, rollback, residual risk, and closure criteria."
          tips={[
            "Use only fictional messages, senders, domains, files, links, policies, recipients, tools, vendors, and organizations.",
            "Include one false positive, one false negative, one correctly blocked case, one legitimate third-party exception, one stale exception, and one tool-disagreement case.",
            "Clearly separate detection, control decision, delivery, user interaction, account activity, business impact, and final case classification.",
            "Do not include real policies, allowlists, blocklists, sender inventories, gateway details, messages, screenshots, or internal security architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Email-security controls combine identity, reputation, content, link, attachment, policy, business, user, and post-delivery evidence.",
            "Allow, warning, quarantine, reject, and block are control decisions—not complete proof of legitimacy, interaction, or impact.",
            "False positives and false negatives require different evidence, owners, tuning, validation, and monitoring.",
            "Broad allowlists can weaken several controls and create risk when trusted accounts or services are compromised.",
            "Strong tuning changes the narrowest condition and tests both required legitimate communication and unsafe examples.",
            "Professional closure documents original behavior, changed policy, validation, monitoring, owner acceptance, rollback, evidence gaps, and residual risk.",
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