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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/fake-log-investigation-lab`;
const nextLesson = `${modulePath}/fake-iam-permission-review-lab`;

const objectives = [
  "Define a fictional phishing-triage scope that identifies the message, recipients, reporting path, business context, approved evidence, privacy limits, owners, and required decisions.",
  "Evaluate fictional sender identity, reply path, display name, message language, link text, attachment description, timing, authentication results, reporting history, and user activity without opening real suspicious content.",
  "Distinguish fictional warning signs, direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and disposition.",
  "Coordinate fictional user guidance, mailbox review, identity review, message containment, supplier communication, case escalation, and recovery through the correct approved owners.",
  "Create a portfolio-safe fictional phishing-triage package with an evidence register, message analysis, recipient-impact review, disposition, communications, validation, metrics, and improvement recommendations."
];
const vocabulary = [
  [
    "Phishing",
    "A fictional social-engineering attempt that tries to influence a person into revealing information, visiting an unsafe destination, opening unsafe content, approving a request, or changing behavior."
  ],
  [
    "Display name",
    "The fictional visible sender name shown to the recipient, which may differ from the actual sending address or authenticated identity."
  ],
  [
    "Sender address",
    "The fictional mailbox address recorded as the message sender."
  ],
  [
    "Reply path",
    "The fictional address or route that receives replies and may differ from the visible sender."
  ],
  [
    "Authentication result",
    "A fictional defensive record describing whether approved email identity checks passed, failed, or were unavailable."
  ],
  [
    "Header evidence",
    "Fictional message-routing, identity, timing, and authentication information supplied for safe analysis without opening real content."
  ],
  [
    "Link text",
    "The fictional words displayed to the recipient for a hyperlink."
  ],
  [
    "Destination description",
    "A fictional safe description of where a link claims to go, without providing or opening a real suspicious destination."
  ],
  [
    "Attachment description",
    "A fictional safe summary of a file name, type, size, and claimed purpose without opening the file."
  ],
  [
    "Urgency cue",
    "Fictional language designed to pressure the recipient into acting quickly or avoiding normal verification."
  ],
  [
    "Authority cue",
    "Fictional language or branding that imitates a trusted leader, teacher, supplier, service, or organization."
  ],
  [
    "Credential request",
    "A fictional request for usernames, passwords, recovery codes, authentication approvals, or other access information."
  ],
  [
    "User interaction",
    "A fictional recorded action such as viewing, reporting, replying, clicking, opening, entering information, approving a prompt, or doing nothing."
  ],
  [
    "Message disposition",
    "A fictional decision such as benign, suspicious, malicious, duplicate, spam, test, business communication, or insufficient evidence."
  ],
  [
    "Containment",
    "A fictional approved action that limits additional exposure, such as removing a message, blocking a sender pattern, resetting access, or isolating a case."
  ],
  [
    "User guidance",
    "A fictional clear instruction telling recipients what is known, what not to do, how to report, what recovery steps apply, and when the next update will arrive."
  ]
];
const messageRecords = [
  {
    "id": "NBR-PHISH-01",
    "subject": "Immediate payroll verification required",
    "sender": "Payroll Support <payroll-help@fictional-mail.example>",
    "reply": "secure-update@fictional-reply.example",
    "audience": "Twelve fictional employees",
    "language": "Claims payroll access will be suspended within twenty minutes unless the recipient signs in.",
    "link": "Text says Review payroll account; destination description uses an unrelated fictional sign-in domain.",
    "attachment": "None",
    "auth": "Sender identity checks failed in the supplied fictional record.",
    "history": "No approved payroll campaign matches the subject, sender, timing, or message template.",
    "interaction": "Nine users reported it; one fictional user clicked but did not enter information.",
    "disposition": "High-confidence malicious simulation",
    "limit": "No real credentials, domains, messages, or employee data are included."
  },
  {
    "id": "NBR-PHISH-02",
    "subject": "Updated classroom technology schedule",
    "sender": "Technology Office <tech-office@northbridge.example>",
    "reply": "tech-office@northbridge.example",
    "audience": "Fictional teachers",
    "language": "Neutral announcement with no urgent action.",
    "link": "No link",
    "attachment": "One fictional PDF schedule from an approved internal sender; file not opened in the lab.",
    "auth": "Supplied fictional checks passed.",
    "history": "Matches an approved internal communication listed in the campaign register.",
    "interaction": "No reports or suspicious activity.",
    "disposition": "Likely benign approved communication",
    "limit": "Passing identity checks does not prove every attachment is safe, so normal handling still applies."
  },
  {
    "id": "NBR-PHISH-03",
    "subject": "Shared document: Board planning notes",
    "sender": "Document Service <share-notice@fictional-docs.example>",
    "reply": "no-reply@fictional-docs.example",
    "audience": "Three fictional finance users",
    "language": "Invites recipients to view a confidential document and asks them to sign in.",
    "link": "Displayed service name differs from the fictional destination description.",
    "attachment": "None",
    "auth": "Authentication results are incomplete.",
    "history": "No matching share appears in the approved collaboration register.",
    "interaction": "One recipient viewed the message; no click is recorded.",
    "disposition": "Suspicious pending owner validation",
    "limit": "The message may represent a legitimate external share, but the current evidence does not support it."
  },
  {
    "id": "NBR-PHISH-04",
    "subject": "Supplier invoice correction",
    "sender": "Fictional Supplier Billing <billing@fictional-supplier.example>",
    "reply": "accounts-update@fictional-mail.example",
    "audience": "Two fictional accounts-payable users",
    "language": "Requests a bank-detail change before an invoice deadline.",
    "link": "No link",
    "attachment": "One fictional spreadsheet described as updated payment instructions; file not opened.",
    "auth": "Sender checks passed, but the reply path differs.",
    "history": "The supplier owner has no approved payment-change request.",
    "interaction": "One user replied asking for clarification but shared no information.",
    "disposition": "High-risk business email compromise simulation",
    "limit": "The source of the message is not proven to be the real supplier contact."
  },
  {
    "id": "NBR-PHISH-05",
    "subject": "Password expires today",
    "sender": "Identity Team <identity-alert@northbridge.example>",
    "reply": "identity-alert@northbridge.example",
    "audience": "Forty fictional users",
    "language": "Urgent but matches a documented internal expiration campaign.",
    "link": "No direct sign-in link; directs users to the normal saved portal.",
    "attachment": "None",
    "auth": "Supplied fictional checks passed.",
    "history": "Campaign ID and timing match the approved identity notification register.",
    "interaction": "Two users reported it because of the urgency wording.",
    "disposition": "Benign but communication-quality review needed",
    "limit": "The message may still create confusion because the tone resembles common phishing pressure."
  },
  {
    "id": "NBR-PHISH-06",
    "subject": "Voice message received",
    "sender": "Messaging Notifications <voice-alert@fictional-messaging.example>",
    "reply": "no-reply@fictional-messaging.example",
    "audience": "Six fictional users",
    "language": "Short notification with a button labeled Play message.",
    "link": "Destination description is an unfamiliar fictional file-sharing location.",
    "attachment": "None",
    "auth": "One identity check failed and one result is unavailable.",
    "history": "No approved messaging service uses this sender or template.",
    "interaction": "No user interaction is recorded.",
    "disposition": "High-confidence malicious simulation",
    "limit": "No real destination or message was opened."
  },
  {
    "id": "NBR-PHISH-07",
    "subject": "Security awareness test",
    "sender": "Security Training <training@northbridge.example>",
    "reply": "training@northbridge.example",
    "audience": "Fictional pilot group",
    "language": "Contains common warning signs as part of an approved training exercise.",
    "link": "Destination description points to the approved fictional training platform.",
    "attachment": "None",
    "auth": "Supplied fictional checks passed.",
    "history": "Matches the approved awareness simulation register.",
    "interaction": "User reports are expected and routed to the training team.",
    "disposition": "Authorized simulation",
    "limit": "The analyst still confirms campaign ownership before closing reports."
  },
  {
    "id": "NBR-PHISH-08",
    "subject": "Package delivery problem",
    "sender": "Delivery Updates <notice@fictional-delivery.example>",
    "reply": "support@fictional-delivery.example",
    "audience": "Twenty fictional users",
    "language": "Requests a small redelivery payment within one hour.",
    "link": "Displayed delivery brand does not match the fictional destination description.",
    "attachment": "None",
    "auth": "Sender authentication failed.",
    "history": "No organization-wide delivery campaign exists.",
    "interaction": "Four users clicked; one entered a fictional email address but no password or payment data.",
    "disposition": "High-confidence malicious simulation with user interaction",
    "limit": "The lab contains no real payment data, user data, or destination."
  }
];
const triageQuestions = [
  {
    "question": "Who appears to be sending the message?",
    "strong": "Record the fictional display name, sender address, reply path, authenticated identity, sending service, and known owner separately.",
    "weak": "Trust the display name or logo.",
    "review": "Do the visible identity and technical identity agree?"
  },
  {
    "question": "What action is the message asking for?",
    "strong": "Identify the fictional click, reply, sign-in, attachment, payment, data entry, approval, download, or urgency request.",
    "weak": "Summarize the message as suspicious without identifying the requested behavior.",
    "review": "What could happen if a recipient follows the request?"
  },
  {
    "question": "Does the message match approved business context?",
    "strong": "Compare the fictional campaign register, supplier owner, service owner, collaboration record, change calendar, and normal communication pattern.",
    "weak": "Assume an unfamiliar message is malicious or a familiar brand is safe.",
    "review": "Which owner can confirm whether the communication was expected?"
  },
  {
    "question": "What do the authentication and routing records show?",
    "strong": "Document fictional pass, fail, unavailable, forwarding, reply-path, routing, and source limitations.",
    "weak": "Treat one passed check as proof of legitimacy.",
    "review": "Can the evidence support identity, integrity, or only partial routing context?"
  },
  {
    "question": "What did recipients do?",
    "strong": "Record fictional view, report, reply, click, open, data entry, approval, and no-action states with timestamps and evidence limits.",
    "weak": "Assume a click means credentials were entered.",
    "review": "Which interactions are directly confirmed?"
  },
  {
    "question": "What is the message disposition?",
    "strong": "Choose fictional benign, suspicious, malicious, duplicate, spam, authorized simulation, business communication, or insufficient evidence with rationale and confidence.",
    "weak": "Use only High, Medium, or Low severity as the final conclusion.",
    "review": "What exact evidence supports the disposition?"
  },
  {
    "question": "Which actions are proportionate?",
    "strong": "Choose fictional message removal, sender review, mailbox search, user guidance, identity review, supplier verification, case escalation, monitoring, or no new action.",
    "weak": "Reset every user or block an entire service automatically.",
    "review": "What is the least disruptive action that reduces risk and uncertainty?"
  },
  {
    "question": "How will the outcome be validated?",
    "strong": "Confirm fictional message removal, identity state, user impact, supplier verification, reporting completion, recurrence, detection quality, and residual risk.",
    "weak": "Close the case when no new reports arrive.",
    "review": "What evidence proves the defensive objective was achieved?"
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Receive and preserve the report",
    "detail": "Record the fictional reporter, message identifier, recipient group, time, claimed sender, requested action, and approved handling limits without opening unsafe content.",
    "output": "Triage intake record."
  },
  {
    "step": "2",
    "title": "Validate message identity and routing",
    "detail": "Compare fictional display name, sender address, reply path, authentication results, sending service, routing, and known communication owner.",
    "output": "Sender and routing assessment."
  },
  {
    "step": "3",
    "title": "Review content and business context",
    "detail": "Analyze fictional urgency, authority, link description, attachment description, payment or credential request, campaign register, supplier context, and expected business process.",
    "output": "Content and context matrix."
  },
  {
    "step": "4",
    "title": "Assess recipient interaction",
    "detail": "Determine fictional view, reply, click, open, data entry, approval, report, and no-action states using approved evidence.",
    "output": "User-impact record."
  },
  {
    "step": "5",
    "title": "Choose disposition and priority",
    "detail": "Document fictional benign, suspicious, malicious, simulation, duplicate, spam, business communication, or insufficient evidence with confidence and limits.",
    "output": "Disposition and priority decision."
  },
  {
    "step": "6",
    "title": "Coordinate proportionate actions",
    "detail": "Assign fictional mailbox, identity, service, supplier, user-support, communication, case, risk, or response actions with authority, deadlines, and rollback.",
    "output": "Action and escalation plan."
  },
  {
    "step": "7",
    "title": "Communicate and validate",
    "detail": "Send fictional user guidance, owner requests, supplier verification, technical updates, leadership summaries, and confirm removal, recovery, source health, and residual risk.",
    "output": "Communication and validation record."
  },
  {
    "step": "8",
    "title": "Close and improve",
    "detail": "Complete fictional peer review, closure criteria, detection feedback, reporting metrics, template changes, training, supplier process, and lessons learned.",
    "output": "Closure and improvement package."
  }
];
const findings = [
  {
    "id": "NBR-PH-F01",
    "statement": "The fictional payroll message is a high-confidence malicious simulation requiring message removal and targeted user follow-up.",
    "support": "Failed sender checks, unrelated destination description, urgent credential pressure, no approved campaign, multiple reports, and one confirmed click.",
    "alternative": "A poorly configured legitimate payroll vendor is possible but not supported by the current evidence.",
    "confidence": "High",
    "impact": "One click is confirmed; credential entry and account compromise are not confirmed.",
    "next": "Remove the message, review the clicked user's identity evidence, provide guidance, and improve detection."
  },
  {
    "id": "NBR-PH-F02",
    "statement": "The fictional classroom schedule message is likely an approved internal communication.",
    "support": "Matching internal sender, passed checks, approved campaign record, neutral language, and no suspicious interaction.",
    "alternative": "An approved sender could still distribute an unsafe file if its account or workflow were compromised.",
    "confidence": "High",
    "impact": "No harmful user action or security impact is supported.",
    "next": "Close as benign after normal attachment-handling confirmation."
  },
  {
    "id": "NBR-PH-F03",
    "statement": "The fictional shared-document message should remain suspicious pending owner validation.",
    "support": "Destination mismatch, incomplete authentication, no approved share record, confidential lure, and no confirmed click.",
    "alternative": "A legitimate external partner may have initiated an unregistered share.",
    "confidence": "Medium-High",
    "impact": "Potential credential risk exists; user interaction is not confirmed.",
    "next": "Verify with the collaboration owner and maintain targeted monitoring."
  },
  {
    "id": "NBR-PH-F04",
    "statement": "The fictional supplier invoice message is a high-risk business email compromise simulation.",
    "support": "Payment-change request, mismatched reply path, no approved supplier request, attachment lure, and business deadline pressure.",
    "alternative": "The supplier may have changed its billing process without proper notification.",
    "confidence": "High",
    "impact": "A user replied, but no payment or sensitive information was shared.",
    "next": "Verify through the known supplier channel, remove the message, and review payment-change controls."
  },
  {
    "id": "NBR-PH-F05",
    "statement": "The fictional password-expiration message is benign but should be improved because its urgency resembles phishing pressure.",
    "support": "Passed checks, approved campaign ID, expected sender, no direct sign-in link, and matching schedule.",
    "alternative": "A copied template could imitate the approved campaign, so identity evidence remains necessary.",
    "confidence": "High",
    "impact": "No security impact is supported; user confusion is confirmed through reports.",
    "next": "Close as benign and improve wording, branding, and reporting guidance."
  },
  {
    "id": "NBR-PH-F06",
    "statement": "The fictional package-delivery message requires targeted user-impact review because several clicks occurred.",
    "support": "Failed authentication, destination mismatch, payment request, no approved campaign, four clicks, and one fictional email entry.",
    "alternative": "A legitimate delivery notice is possible but contradicted by the supplied identity and context evidence.",
    "confidence": "High",
    "impact": "Clicks and one email entry are confirmed; password or payment disclosure is not confirmed.",
    "next": "Remove the message, guide recipients, review the interacting identity, and monitor for related activity."
  }
];
const userGuidance = [
  {
    "audience": "User who only viewed or reported",
    "message": "Thank you for reporting the fictional message. Do not reply, click, open, or forward it. No additional account action is required unless the security team contacts you.",
    "validation": "Confirm the report was received and the message was removed from the mailbox if authorized."
  },
  {
    "audience": "User who clicked but entered nothing",
    "message": "Stop interacting with the fictional page, close it, and report the approximate time. Do not revisit it. The identity team will review approved sign-in evidence.",
    "validation": "Confirm the user entered no information and review identity records for unusual activity."
  },
  {
    "audience": "User who replied without sharing sensitive data",
    "message": "Do not continue the conversation. Preserve the reply record through the approved reporting process and wait for verified supplier or owner guidance.",
    "validation": "Confirm no sensitive information, payment change, attachment, or credential was shared."
  },
  {
    "audience": "User who entered fictional credentials in the lab",
    "message": "Use the approved fictional recovery workflow immediately and follow identity-owner instructions. Never reuse or disclose real credentials in training.",
    "validation": "Confirm access recovery, active-session review, approved reset completion, and monitoring."
  },
  {
    "audience": "User who approved a fictional sign-in prompt",
    "message": "Report the approval immediately through the approved process and follow identity-owner recovery instructions.",
    "validation": "Confirm session review, access state, recovery, and any affected case actions."
  },
  {
    "audience": "General recipient group",
    "message": "The fictional message is under review. Do not interact with it. Use the normal reporting channel and wait for the next official update.",
    "validation": "Confirm the communication reached the correct audience and does not reveal unnecessary case details."
  }
];
const commonMistakes = [
  "Opening or clicking real suspicious links, attachments, files, accounts, or messages during analysis.",
  "Trusting a fictional display name, logo, familiar brand, or passed authentication check by itself.",
  "Treating one failed check as proof of malicious intent without context.",
  "Assuming a click means credentials, payment data, or confidential information were entered.",
  "Assuming no click means no risk or no required containment.",
  "Reporting a possible credential compromise as confirmed account takeover.",
  "Resetting every recipient account without evidence or proportionality.",
  "Blocking an entire legitimate service because one message used a similar brand.",
  "Ignoring business email compromise risks because no link is present.",
  "Opening a fictional attachment instead of analyzing its supplied safe description.",
  "Failing to verify payment, supplier, collaboration, payroll, or identity requests through known approved channels.",
  "Sending vague user guidance that does not explain what not to do or what happens next.",
  "Closing the case when messages are removed without validating user interaction, identity state, detection, and residual risk.",
  "Using or exposing any real credentials, employee data, school records, private messages, email addresses, supplier records, incident evidence, or confidential organizational information."
];
const quizQuestions = [
  {
    "question": "What is the safest first step when receiving a fictional suspicious-message report?",
    "choices": [
      "Preserve the report and supplied evidence without opening real links, attachments, files, accounts, or messages.",
      "Click the link to see where it goes.",
      "Open the attachment in a normal device.",
      "Reply to the sender for confirmation."
    ],
    "answer": 0,
    "explanation": "Safe triage uses supplied fictional evidence and approved tools rather than interacting with suspicious content."
  },
  {
    "question": "What does a fictional failed email authentication result prove?",
    "choices": [
      "It is a significant warning sign, but the full disposition still depends on sender, routing, context, content, history, and interaction evidence.",
      "The recipient account is compromised.",
      "A confirmed incident occurred.",
      "The message must be deleted without documentation."
    ],
    "answer": 0,
    "explanation": "One signal contributes to the assessment but does not replace the complete evidence review."
  },
  {
    "question": "How should the fictional payroll message be handled?",
    "choices": [
      "Remove it, review the clicked user's identity evidence, provide guidance, document limits, and improve detection.",
      "Reset all twelve users immediately.",
      "Ignore it because no credential entry is confirmed.",
      "Contact the suspicious sender directly."
    ],
    "answer": 0,
    "explanation": "The action should match the confirmed interaction and high-confidence malicious disposition."
  },
  {
    "question": "Why is the fictional supplier invoice message high risk even without a link?",
    "choices": [
      "It requests a payment change, uses a mismatched reply path, lacks approved supplier context, and includes deadline pressure.",
      "Every invoice is malicious.",
      "Attachments are always unsafe.",
      "The sender checks passed."
    ],
    "answer": 0,
    "explanation": "Business email compromise can rely on replies, attachments, and payment instructions rather than links."
  },
  {
    "question": "What should happen after a fictional user clicks but enters no information?",
    "choices": [
      "Provide guidance, confirm what happened, review approved identity evidence, and avoid claiming credential compromise without support.",
      "Declare account takeover.",
      "Do nothing because no password was entered.",
      "Ask the user to revisit the page."
    ],
    "answer": 0,
    "explanation": "A click warrants review, but impact must remain evidence-limited."
  },
  {
    "question": "Why might a benign fictional password-expiration message still require improvement?",
    "choices": [
      "Urgent wording can resemble phishing pressure and create unnecessary user confusion and reports.",
      "Benign messages should never mention deadlines.",
      "Passed authentication is unimportant.",
      "All password reminders are malicious."
    ],
    "answer": 0,
    "explanation": "Communication quality is part of defensive improvement."
  },
  {
    "question": "What makes a fictional phishing disposition defensible?",
    "choices": [
      "It connects sender, routing, authentication, content, business context, history, user interaction, confidence, limitations, owners, and actions.",
      "It uses the word suspicious.",
      "It is based only on the display name.",
      "It assumes the worst-case impact."
    ],
    "answer": 0,
    "explanation": "The entire reasoning chain should be reviewable and evidence-limited."
  }
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

export default function FakePhishingTriageLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I16
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16.2 Fake Phishing Triage Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Triage fictional suspicious messages using safe sender, routing,
            content, business-context, authentication, campaign, and user-
            interaction evidence without opening real links, attachments,
            files, accounts, or private messages.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I16: Intermediate Defensive Labs"
          lessonTitle="Fake Phishing Triage Lab"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge messages, senders, recipients, links, attachments, authentication records, campaigns, interactions, owners, and decisions.",
            "I will not open, click, download, reply to, sign in through, or otherwise interact with real suspicious links, attachments, files, accounts, messages, or prompts.",
            "I will not request or expose real credentials, employee data, school records, email addresses, private messages, supplier information, incident evidence, or confidential organizational information.",
            "I will distinguish warning signs, direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and disposition.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Click Does Not Automatically Mean an Account Was Compromised"
        >
          <p className="leading-8">
            One fictional user clicked a payroll-themed link but did not enter
            information. The message is still high-confidence malicious based
            on failed identity checks, an unrelated destination description,
            urgent credential pressure, and no approved campaign. However,
            credential disclosure and account takeover remain unconfirmed.
            Professional triage acts quickly without overstating impact.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak triage
              </p>

              <p className="mt-2 leading-7">
                Trust the display name, click to investigate, assume every
                interaction means compromise, reset everyone, block broadly,
                and close after message removal.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional triage
              </p>

              <p className="mt-2 leading-7">
                Preserve the report, validate identity and context, determine
                confirmed interaction, choose disposition, act
                proportionately, guide users, validate outcomes, and improve.
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
          title="Phishing Triage Protects People, Identity, Payments, and Trust"
        >
          <p className="leading-8">
            Fictional phishing reports may involve credentials, payment
            changes, document sharing, voice messages, delivery notices,
            internal campaigns, or authorized simulations. The analyst must
            decide what is directly supported, who interacted, which owners
            have authority, what guidance is safe, and how to prevent repeat
            exposure without disrupting legitimate communication.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Sender–Request–Context–Interaction–Action Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Sender", "Which fictional display name, address, reply path, authenticated identity, sending service, routing, and known owner appear?"],
              ["Request", "Which fictional click, sign-in, reply, payment, attachment, download, data entry, or approval is requested?"],
              ["Context", "Does the fictional message match approved payroll, supplier, collaboration, identity, delivery, training, or internal communication records?"],
              ["Interaction", "Which fictional view, report, click, reply, open, data entry, approval, and no-action states are directly confirmed?"],
              ["Action", "Which fictional removal, guidance, identity review, supplier verification, monitoring, escalation, recovery, validation, and improvement are proportionate?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Phishing Triage and Message-Evidence Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Message Evidence
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Northbridge Messages
          </h2>

          <div className="mt-6 grid gap-5">
            {messageRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.subject}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.disposition}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Sender", item.sender],
                    ["Reply path", item.reply],
                    ["Audience", item.audience],
                    ["Language and request", item.language],
                    ["Link evidence", item.link],
                    ["Attachment evidence", item.attachment],
                    ["Authentication", item.auth],
                    ["Campaign or business history", item.history],
                    ["User interaction", item.interaction],
                    ["Evidence limit", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Triage Questions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Final Disposition
          </h2>

          <div className="mt-6 grid gap-5">
            {triageQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong analysis
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak analysis
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Triage Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Report to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            User Guidance
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Fictional Guidance by Confirmed Interaction
          </h2>

          <div className="mt-6 grid gap-5">
            {userGuidance.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Guidance
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.message}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.validation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Phishing Triage Dashboard"
          subtitle="Training dashboard for fictional message evidence only."
          metrics={[
            {
              label: "Messages reviewed",
              value: "8",
              note: "The set includes malicious simulations, suspicious messages, benign communication, and an authorized training exercise.",
            },
            {
              label: "Confirmed user clicks",
              value: "5",
              note: "Clicks are confirmed across two fictional messages, while credential and payment disclosure remain unconfirmed.",
            },
            {
              label: "Confirmed account compromise",
              value: "0",
              note: "The fictional evidence supports targeted identity review but no confirmed account takeover.",
            },
          ]}
        />

        <FakeAlertCard
          title="Payroll-Themed Message Triggered One Confirmed Click"
          severity="High"
          time="10:18 PM"
          source="Fake Northbridge Mail Defense Console"
          details="A fictional payroll message failed sender checks, used an unrelated sign-in destination description, applied urgent account-suspension pressure, and did not match an approved campaign. One user clicked but did not enter information."
          recommendation="Remove the message, identify affected recipients, review the clicked user's approved identity evidence, provide targeted guidance, preserve that compromise is unconfirmed, update detection, and validate whether related messages or activity exist."
        />

        <FakeLogPanel
          title="Fake Northbridge Message-Triage Timeline"
          logs={[
            "09:00 REPORT payroll-message='received'",
            "09:04 AUTH sender-check='failed'",
            "09:08 CONTEXT approved-campaign='not found'",
            "09:12 LINK destination-match='false'",
            "09:16 USERS reports='9'",
            "09:20 INTERACTION click='1'",
            "09:24 INTERACTION credential-entry='not confirmed'",
            "09:28 ACTION remove-message='approved'",
            "09:32 ACTION identity-review='opened'",
            "09:36 GUIDANCE clicked-user='sent'",
            "09:40 SEARCH related-messages='in progress'",
            "09:44 CASE disposition='malicious simulation'",
            "09:48 LIMIT account-compromise='unconfirmed'",
            "09:52 DETECTION feedback='opened'",
            "09:56 VALIDATE new-reports='monitoring'",
            "10:00 CLOSE criteria='pending identity review'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Findings with Confidence and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact statement", item.impact],
                    ["Next action", item.next],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Did the Payroll Link Click Confirm Account Compromise?"
          evidence={[
            "The fictional payroll message failed sender checks.",
            "The fictional destination description did not match the claimed payroll service.",
            "No approved payroll campaign matched the message.",
            "One fictional user clicked the link.",
            "The user reports entering no information.",
            "No supplied identity evidence confirms account takeover.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The message is high-confidence malicious and requires targeted identity review, but account compromise remains unconfirmed.",
            "The click proves the account was compromised.",
            "No action is required because no password entry is confirmed.",
            "Every recipient account should be reset immediately.",
          ]}
          bestAnswer={0}
          explanation="The message disposition and the user-impact conclusion are related but distinct."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Fictional Phishing Triage"
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
          title="Build the Northbridge Fake Phishing Triage Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Message Evidence, Disposition, User Impact, Actions, and Validation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge message records to
                create a complete, safe, evidence-limited phishing-triage
                package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Triage intake record with reporter, recipient group, message identifier, time, claimed sender, requested action, and safety limits.</li>
                <li>Sender, reply-path, authentication, routing, content, business-context, campaign, and link or attachment evidence matrix.</li>
                <li>User-interaction register with view, report, click, reply, open, data entry, approval, and no-action states.</li>
                <li>Message disposition with evidence, confidence, alternatives, limitations, potential impact, and confirmed impact.</li>
                <li>Mailbox, identity, supplier, service, case, user-support, communication, and monitoring action plan.</li>
                <li>Audience-specific user guidance and owner communications.</li>
                <li>Validation, closure criteria, detection feedback, metrics, and improvement actions.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not open real suspicious links, attachments, files,
            accounts, messages, or prompts. Never use real credentials,
            employee data, school records, email addresses, supplier records,
            incident evidence, or confidential organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A User Clicked the Fictional Payroll Link but Entered Nothing"
          scenario="The fictional message is high-confidence malicious, but no credential entry, sign-in approval, or account takeover is confirmed."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove the message, confirm the user's account of the interaction, review approved identity evidence, provide guidance, monitor, and preserve that compromise is unconfirmed.",
              outcome:
                "Best triage choice. The response matches both the message risk and the confirmed user impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare account compromise and reset every recipient.",
              outcome:
                "Overbroad. The supplied evidence does not support that conclusion or scope.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Close the report because no password was entered.",
              outcome:
                "Unsafe. The click and malicious message still require review and containment.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Supplier Invoice Requests New Payment Details"
          scenario="The fictional sender checks passed, but the reply path differs, no approved payment-change request exists, and the message pressures the user to act before a deadline."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the request, verify through the known supplier channel, preserve the message, involve the payment and supplier owners, and avoid using the supplied reply path.",
              outcome:
                "Best business-email-compromise choice. Verification uses an independent trusted channel.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve the change because sender checks passed.",
              outcome:
                "Unsafe. Authentication does not prove the payment request is authorized.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Open the attachment to look for proof.",
              outcome:
                "Unsafe. The lab requires safe supplied evidence only.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Fake Phishing Triage Checklist"
          items={[
            "I can preserve a fictional suspicious-message report without opening real unsafe content.",
            "I can separate fictional display name, sender address, reply path, authenticated identity, routing, sending service, and known owner.",
            "I can analyze fictional urgency, authority, link text, destination description, attachment description, payment request, credential request, and business context.",
            "I can compare fictional messages with approved campaign, supplier, collaboration, payroll, identity, delivery, and training records.",
            "I can distinguish fictional view, report, reply, click, open, data entry, approval, and no-action states.",
            "I can choose a fictional disposition with evidence, confidence, alternatives, limitations, potential impact, and confirmed impact.",
            "I can assign fictional mailbox, identity, service, supplier, user-support, case, communication, risk, and response owners proportionately.",
            "I can write fictional user guidance that explains what not to do, what is known, what recovery applies, and what happens next.",
            "I can validate fictional message removal, user impact, identity state, supplier verification, recurrence, detection quality, closure, and residual risk.",
            "I will use only fictional evidence and never expose real credentials, messages, email addresses, employee data, school records, suppliers, incidents, or confidential information.",
          ]}
        />

        <MiniQuiz
          title="I16.2 Mini Quiz: Fake Phishing Triage Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Fake Phishing Triage Package for Northbridge. Include the intake record, message and header evidence matrix, sender and reply-path review, authentication and routing assessment, business-context check, user-interaction register, disposition, priority, findings, owner and escalation map, containment plan, user guidance, supplier verification, identity review, validation, closure criteria, metrics, detection feedback, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional messages, senders, recipients, addresses, destinations, attachments, campaigns, interactions, systems, owners, actions, and outcomes.",
            "Never include or interact with real suspicious links, attachments, files, accounts, messages, prompts, credentials, or private information.",
            "Do not treat display names, authentication results, clicks, replies, urgency, brands, or absent reports as automatic proof.",
            "Show how a message can be high-confidence malicious while account compromise remains unconfirmed.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Phishing triage must remain safe and should never require opening real suspicious content.",
            "Display names, sender addresses, reply paths, authentication, routing, and business context should be evaluated separately.",
            "A click, reply, or report does not automatically prove credential disclosure or account compromise.",
            "Business email compromise may use payment changes and replies without links.",
            "Disposition, user impact, and incident status are different decisions.",
            "User guidance should match the confirmed interaction and explain the next step.",
            "Portfolio artifacts should use fully fictional evidence and never expose real messages, credentials, or private organizational data.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I16
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