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

const trackPath = "/high-school/advanced";
const modulePath =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const previousLesson = `${modulePath}/ethics-in-ai-and-automation`;
const nextLesson = `${modulePath}/advanced-ethics-case-lab`;

const objectives = [
  "Explain how professional cybersecurity communication turns uncertain fictional evidence into accurate, audience-specific decisions without exaggeration, blame, or unnecessary disclosure.",
  "Distinguish the communication needs of technical teams, service owners, leadership, users, privacy reviewers, suppliers, teachers, and public audiences.",
  "Create consistent fictional messages that separate confirmed facts, possible impact, unknowns, actions, owners, deadlines, residual risk, and the next update.",
  "Recognize failures involving unsupported certainty, conflicting messages, unsafe user instructions, excessive detail, hidden uncertainty, and weak ownership.",
  "Create a portfolio-ready multi-audience communication package using only invented organizations, systems, identities, evidence, messages, dates, actions, and outcomes."
];
const vocabulary = [
  [
    "Risk communication",
    "Sharing fictional security facts, uncertainty, impact, actions, ownership, and decisions in a form appropriate for each authorized audience."
  ],
  [
    "Approved fact set",
    "A controlled fictional record of confirmed observations, supported conclusions, limitations, current impact, actions, and unresolved questions."
  ],
  [
    "Audience adaptation",
    "Changing detail, format, and terminology for a fictional audience without changing the underlying facts."
  ],
  [
    "Confirmed fact",
    "A fictional observation directly supported by available evidence and source context."
  ],
  [
    "Supported conclusion",
    "A fictional interpretation reasonably connected to evidence while preserving alternatives and limitations."
  ],
  [
    "Possible impact",
    "A fictional outcome that could occur or may have occurred but is not yet confirmed."
  ],
  [
    "Confirmed impact",
    "A fictional effect directly supported by evidence, such as a denied login, outage, or verified page view."
  ],
  [
    "Unknown",
    "A fictional question the available evidence cannot currently answer."
  ],
  [
    "Confidence",
    "A bounded fictional judgment about how strongly evidence supports a conclusion; confidence is not certainty."
  ],
  [
    "Decision request",
    "A clear fictional statement of what an authorized recipient must approve, choose, provide, or acknowledge."
  ],
  [
    "Action owner",
    "The fictional role responsible for a response, communication, validation, or follow-up task."
  ],
  [
    "Status cadence",
    "The agreed fictional schedule for routine updates, urgent changes, decision points, and closure communication."
  ],
  [
    "Need-to-know",
    "Limiting fictional technical and sensitive detail to recipients who require it for an authorized decision or action."
  ],
  [
    "Holding statement",
    "A short fictional message communicating confirmed facts, current actions, and the next update while review continues."
  ],
  [
    "Correction notice",
    "A fictional communication replacing inaccurate or outdated information and recording what changed and why."
  ],
  [
    "Residual risk statement",
    "A fictional explanation of risk and uncertainty remaining after current actions and controls."
  ]
];
const audiences = [
  {
    "audience": "Security analyst or technical responder",
    "needs": "Evidence IDs, source health, timestamps, architecture context, affected identities, control state, actions, validation, and unresolved questions.",
    "avoid": "Unsupported attribution, dramatic summaries, unrelated private data, and management-only speculation.",
    "format": "Case record, evidence matrix, timeline, technical handoff, or structured incident note.",
    "decision": "What evidence should be reviewed next and which defensive action is justified.",
    "success": "Another authorized analyst can reproduce the reasoning from the same fictional evidence."
  },
  {
    "audience": "Service or system owner",
    "needs": "Service impact, dependencies, affected functions, operational options, rollback, continuity, owner tasks, and validation status.",
    "avoid": "Raw evidence that does not affect service decisions and unsupported user blame.",
    "format": "Service-impact brief, change request, owner checklist, or recovery update.",
    "decision": "Which service-aware action may proceed and what disruption is acceptable.",
    "success": "The owner understands the security concern and operational tradeoffs."
  },
  {
    "audience": "Leadership or risk owner",
    "needs": "Confirmed facts, business impact, current actions, options, recommendation, decision request, owner, deadline, residual risk, and next update.",
    "avoid": "Unnecessary technical detail, raw private information, unsupported certainty, and unexplained acronyms.",
    "format": "Executive brief, one-page decision memo, or structured status update.",
    "decision": "Which treatment, resource, priority, escalation, or residual-risk decision is required.",
    "success": "Leadership can make a clear decision without misleading or excessive detail."
  },
  {
    "audience": "Affected fictional user",
    "needs": "What happened, what is confirmed, what the user should do, what support is available, and when the next update will arrive.",
    "avoid": "Blame, internal technical details, other users' information, speculation, and confusing terminology.",
    "format": "User notice, support message, action checklist, or service banner.",
    "decision": "Which protective or recovery step the user must complete.",
    "success": "The user can act safely and understands the limits of current knowledge."
  },
  {
    "audience": "Privacy or data owner",
    "needs": "Data categories, fields, possible exposure, confirmed access, recipients, retention, deletion, evidence needs, and decision questions.",
    "avoid": "Unnecessary technical detail and claims that a legal or notification duty is already confirmed.",
    "format": "Privacy-impact brief, data-flow note, access review, or decision request.",
    "decision": "Which information may be used, preserved, shared, deleted, or reviewed further.",
    "success": "The owner can evaluate privacy impact using minimum-necessary facts."
  },
  {
    "audience": "Supplier or partner owner",
    "needs": "Contract-relevant service, approved evidence request, timeline, impact, requested action, response owner, and communication channel.",
    "avoid": "Internal speculation, unrelated private records, unapproved vulnerability details, and public threats.",
    "format": "Supplier case, evidence request, service-impact notice, or contract-approved escalation.",
    "decision": "What the supplier must confirm, investigate, correct, or provide.",
    "success": "External coordination follows the approved agreement and one shared fact set."
  },
  {
    "audience": "Teacher, mentor, or portfolio reviewer",
    "needs": "Fully fictional learning objective, evidence structure, reasoning, decisions, communication choices, reflection, and revision history.",
    "avoid": "Real internal records, realistic unresolved vulnerabilities, private messages, real names, or copied confidential content.",
    "format": "Portfolio case study, reflection, rubric-aligned artifact, or presentation.",
    "decision": "Whether the artifact demonstrates safe, original, evidence-based professional learning.",
    "success": "Educational value is clear without exposing real organizations or people."
  },
  {
    "audience": "Public audience",
    "needs": "Only approved fictional or public facts, high-level impact, safe actions, support resources, communication owner, and update timing.",
    "avoid": "Sensitive technical details, private identities, unresolved findings, internal architecture, speculation, and blame.",
    "format": "Approved public statement, awareness post, or finalized fictional case summary.",
    "decision": "Usually none beyond safe user guidance; broader communication decisions remain owner-controlled.",
    "success": "The message informs without increasing risk or overstating evidence."
  }
];
const principles = [
  {
    "principle": "Use one approved fact set",
    "why": "Different audiences need different detail, but the underlying facts, dates, impact, and decisions must remain consistent.",
    "weak": "Technical notes say possible misuse while leadership says confirmed compromise.",
    "strong": "Maintain one version-controlled fact set and derive every audience message from it."
  },
  {
    "principle": "Separate fact, conclusion, and unknown",
    "why": "Clear categories prevent alerts and assumptions from becoming false certainty.",
    "weak": "A High alert is described as proof that an employee attacked the system.",
    "strong": "Label observation, supported conclusion, alternatives, possible impact, confirmed impact, and unknowns."
  },
  {
    "principle": "Lead with the decision or action",
    "why": "A message is useful only when the recipient understands what to decide or do.",
    "weak": "Send a long technical history with no request.",
    "strong": "State the decision or action first, then provide supporting context."
  },
  {
    "principle": "Protect need-to-know detail",
    "why": "Technical and sensitive information may create privacy or security harm if shared too broadly.",
    "weak": "Attach raw logs and private records to every update.",
    "strong": "Create audience-specific fields, redactions, and approved channels."
  },
  {
    "principle": "Avoid blame before evidence",
    "why": "An identity or team may appear in evidence without causing the issue.",
    "weak": "Name a user as responsible after one unusual sign-in.",
    "strong": "Describe observed behavior and owner actions without unsupported intent."
  },
  {
    "principle": "State uncertainty honestly",
    "why": "Hiding uncertainty can cause overreaction, while exaggerating it can delay action.",
    "weak": "Say everything is under control when validation is incomplete.",
    "strong": "State what is known, unknown, being tested, and when an update will occur."
  },
  {
    "principle": "Match urgency to evidence and impact",
    "why": "Severity labels alone do not determine tone or distribution.",
    "weak": "Use emergency language for every High alert.",
    "strong": "Base urgency on confirmed impact, service criticality, evidence quality, and deadlines."
  },
  {
    "principle": "Name owners and deadlines",
    "why": "Communication without ownership creates confusion and missed decisions.",
    "weak": "Tell the team to investigate soon.",
    "strong": "Assign action, owner, deadline, approval, validation, and escalation."
  },
  {
    "principle": "Correct the record quickly",
    "why": "Inaccurate messages can spread across many audiences.",
    "weak": "Leave the old statement because changing it may look bad.",
    "strong": "Issue a correction, explain the evidence change, update the fact set, and preserve revision history."
  },
  {
    "principle": "Close with validated outcomes",
    "why": "A quiet alert or closed ticket does not prove risk is resolved.",
    "weak": "Announce full resolution before validation finishes.",
    "strong": "Communicate validation, residual risk, monitoring, ownership, and future review."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Confirm authorization and audience",
    "questions": "Who may receive the message, through which channel, for what purpose, and under whose approval?",
    "output": "Audience, channel, purpose, and approval statement.",
    "stop": "Pause if the recipient or disclosure authority is unclear."
  },
  {
    "step": "2",
    "title": "Build the fact set",
    "questions": "What observations, conclusions, limitations, impact, actions, and unknowns are currently supported?",
    "output": "Versioned approved fact set.",
    "stop": "Do not communicate unverified claims as facts."
  },
  {
    "step": "3",
    "title": "Identify the audience decision",
    "questions": "What must the recipient know, decide, approve, provide, or do?",
    "output": "Decision or action request.",
    "stop": "Pause if the message has no clear purpose."
  },
  {
    "step": "4",
    "title": "Select minimum-necessary detail",
    "questions": "Which evidence, identities, systems, data, and technical details are required for this audience?",
    "output": "Audience-specific detail and redaction plan.",
    "stop": "Remove unrelated private or sensitive information."
  },
  {
    "step": "5",
    "title": "Write fact before interpretation",
    "questions": "Which sentence states the confirmed observation, and which separate sentence explains the supported conclusion?",
    "output": "Evidence-limited message body.",
    "stop": "Pause if interpretation cannot be traced to evidence."
  },
  {
    "step": "6",
    "title": "State impact and uncertainty",
    "questions": "What impact is confirmed, possible, unknown, or still being tested?",
    "output": "Impact and uncertainty section.",
    "stop": "Do not use breach, theft, compromise, attack, or malicious intent without support."
  },
  {
    "step": "7",
    "title": "Assign actions and owners",
    "questions": "Who performs, approves, communicates, validates, escalates, and accepts residual risk, and by when?",
    "output": "Action-owner-deadline table.",
    "stop": "Do not create urgency without ownership."
  },
  {
    "step": "8",
    "title": "Review tone, privacy, and consistency",
    "questions": "Does the message blame, frighten, expose, contradict, or confuse any audience unnecessarily?",
    "output": "Peer or owner review record.",
    "stop": "Hold release if facts differ from other active messages."
  },
  {
    "step": "9",
    "title": "Send and track",
    "questions": "Was the message delivered, acknowledged, acted on, and recorded through the approved channel?",
    "output": "Communication and acknowledgment log.",
    "stop": "Escalate if a required decision or acknowledgment is missed."
  },
  {
    "step": "10",
    "title": "Update, correct, and close",
    "questions": "What changed, what requires correction, what is validated, and what residual risk remains?",
    "output": "Update, correction, closure, and lessons-learned record.",
    "stop": "Do not claim closure before technical and operational validation."
  }
];
const qualityFields = [
  {
    "field": "Subject or headline",
    "strong": "Action required: review of fictional service-account sign-in",
    "weak": "URGENT\u2014Massive breach confirmed",
    "why": "The headline should match supported urgency and required action."
  },
  {
    "field": "Confirmed fact",
    "strong": "One unusual sign-in for the fictional service account was recorded at 10:14 AM.",
    "weak": "An attacker took over the account.",
    "why": "The first statement is tied to evidence; the second adds unsupported attribution and impact."
  },
  {
    "field": "Current impact",
    "strong": "No service interruption or confirmed data access appears in the supplied evidence.",
    "weak": "There is no impact.",
    "why": "Evidence limits should remain visible."
  },
  {
    "field": "Uncertainty",
    "strong": "Account compromise, user intent, and wider activity remain unconfirmed.",
    "weak": "We are sure this is harmless.",
    "why": "Professional communication states what cannot yet be concluded."
  },
  {
    "field": "Current action",
    "strong": "The security team is reviewing approved identity evidence and service dependencies.",
    "weak": "The team is handling it.",
    "why": "Specific bounded actions improve trust and accountability."
  },
  {
    "field": "Decision request",
    "strong": "The service owner must approve or reject a temporary session restriction by 11:00 AM.",
    "weak": "Please advise.",
    "why": "The recipient should know exactly what decision is needed and when."
  },
  {
    "field": "User instruction",
    "strong": "Use the approved support link to confirm recent activity; do not share credentials.",
    "weak": "Reply with your password so we can verify you.",
    "why": "User guidance must never request secrets."
  },
  {
    "field": "Owner and deadline",
    "strong": "Identity owner: Jordan Lee (fictional), validation due 11:30 AM.",
    "weak": "Someone from identity will check later.",
    "why": "Named fictional ownership reduces ambiguity."
  },
  {
    "field": "Next update",
    "strong": "The next update will be issued by 11:45 AM or earlier if impact changes.",
    "weak": "More information soon.",
    "why": "A specific cadence reduces repeated questions and surprise."
  },
  {
    "field": "Closure language",
    "strong": "Approved sign-ins succeed, the unapproved test is denied, service remains healthy, and residual monitoring continues.",
    "weak": "Resolved.",
    "why": "Closure should describe validated outcomes and remaining risk."
  }
];
const evidenceMatrix = [
  {
    "id": "COM-01",
    "source": "Fictional identity alert",
    "observation": "One unusual sign-in generated a High alert for a service account.",
    "supports": "A detection condition requires review.",
    "limits": "Does not prove compromise, intent, data access, or organization-wide impact.",
    "use": "State the alert and its limits without calling it a breach."
  },
  {
    "id": "COM-02",
    "source": "Fictional service-health record",
    "observation": "Authentication and support services remain available with normal response time.",
    "supports": "No current outage appears in the supplied view.",
    "limits": "Does not prove every control or user experience is healthy.",
    "use": "Tell owners that continuity is currently stable while review continues."
  },
  {
    "id": "COM-03",
    "source": "Fictional identity-owner note",
    "observation": "The sign-in may match an approved overnight maintenance window.",
    "supports": "A legitimate alternate explanation exists.",
    "limits": "Does not prove the sign-in is expected.",
    "use": "Include the alternative and avoid unsupported blame."
  },
  {
    "id": "COM-04",
    "source": "Fictional draft leadership message",
    "observation": "The draft states that an employee account was compromised and data was stolen.",
    "supports": "The draft exceeds the evidence.",
    "limits": "Does not prove intentional deception.",
    "use": "Correct the message before release and document the revision."
  },
  {
    "id": "COM-05",
    "source": "Fictional user notice draft",
    "observation": "The message asks the user to reply with a password.",
    "supports": "The draft creates a credential-safety risk.",
    "limits": "Does not prove the message was sent.",
    "use": "Replace it with an approved support path that never requests secrets."
  },
  {
    "id": "COM-06",
    "source": "Fictional supplier agreement",
    "observation": "Only the supplier owner may request external evidence.",
    "supports": "Supplier communication requires a specific owner and channel.",
    "limits": "Does not determine whether supplier evidence is necessary.",
    "use": "Route any request through the supplier owner."
  },
  {
    "id": "COM-07",
    "source": "Fictional validation record",
    "observation": "Approved access succeeds, unapproved access is denied, service is stable, and logs are complete.",
    "supports": "The intended control and service state are validated for the supplied scope.",
    "limits": "Does not prove every future case will behave the same.",
    "use": "Support bounded closure and continued monitoring."
  },
  {
    "id": "COM-08",
    "source": "Fictional communication log",
    "observation": "Technical, leadership, user, and supplier drafts use different impact statements.",
    "supports": "The organization lacks one consistent fact set.",
    "limits": "Does not prove every draft was sent.",
    "use": "Pause release, reconcile facts, assign an owner, and version the fact set."
  }
];
const commonMistakes = [
  "Using breach, attack, theft, compromise, malicious, or insider language before fictional evidence supports the term.",
  "Sending different facts to technical, leadership, user, supplier, teacher, and public audiences.",
  "Copying raw fictional logs, screenshots, private messages, or identity details into every communication.",
  "Using a High severity label as the only reason for emergency language.",
  "Failing to state what remains unknown or which alternate explanations exist.",
  "Blaming a fictional user, employee, supplier, or team from one account or alert.",
  "Sending a long technical message without a decision request, owner, or deadline.",
  "Using vague ownership such as the team will investigate.",
  "Asking fictional users to send passwords, verification codes, or sensitive records.",
  "Allowing AI-generated messages to leave without evidence, privacy, audience, and tone review.",
  "Contacting a supplier, user, public audience, or media channel without authorized ownership.",
  "Hiding a communication error because issuing a correction may be embarrassing.",
  "Claiming resolution after a change or quiet dashboard without validation.",
  "Using real internal communication, private records, screenshots, system labels, or incident details in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the strongest difference between audience adaptation and changing the facts?",
    "choices": [
      "Audience adaptation changes detail and format while preserving the same approved fictional facts.",
      "Audience adaptation allows leadership to receive a more dramatic version.",
      "Different audiences should receive different impact claims.",
      "Technical audiences do not need evidence limits."
    ],
    "answer": 0,
    "explanation": "The underlying facts must remain consistent even when detail and language change."
  },
  {
    "question": "One High fictional alert exists, but compromise is unconfirmed. Which leadership sentence is strongest?",
    "choices": [
      "A major breach has been confirmed.",
      "One unusual sign-in is under review; no outage or confirmed data access is currently supported.",
      "An employee attacked the system.",
      "There is no risk."
    ],
    "answer": 1,
    "explanation": "The sentence states the confirmed event, current limits, and impact without exaggeration."
  },
  {
    "question": "Why should a fictional message include a next-update time?",
    "choices": [
      "To create pressure.",
      "To reduce confusion, repeated questions, and surprise while uncertainty remains.",
      "To avoid assigning owners.",
      "To prove the issue is resolved."
    ],
    "answer": 1,
    "explanation": "A clear cadence supports trust and coordination."
  },
  {
    "question": "A fictional user notice asks the user to reply with a password. What is strongest?",
    "choices": [
      "Send it only to affected users.",
      "Replace it with an approved support path and state that credentials must never be shared.",
      "Ask for a verification code instead.",
      "Keep the request but encrypt the email."
    ],
    "answer": 1,
    "explanation": "Professional user communication should never request secrets."
  },
  {
    "question": "What should happen when technical and leadership drafts use different impact statements?",
    "choices": [
      "Send both because audiences are different.",
      "Pause release, reconcile the evidence, create one approved fact set, and revise each audience message.",
      "Use the more severe statement.",
      "Delete the technical message."
    ],
    "answer": 1,
    "explanation": "Audience detail may vary, but the fact set must remain consistent."
  },
  {
    "question": "Which fictional closure statement is strongest?",
    "choices": [
      "Resolved.",
      "The ticket is closed.",
      "Approved access succeeds, unapproved access is denied, service is healthy, logs are complete, and residual monitoring continues.",
      "No future issue is possible."
    ],
    "answer": 2,
    "explanation": "Closure should describe measurable validated outcomes and remaining risk."
  },
  {
    "question": "What makes a communication-during-risk portfolio artifact safe to share?",
    "choices": [
      "Only real names are changed.",
      "The actual messages are shortened.",
      "Every organization, system, identity, message, evidence item, decision, date, action, and outcome is invented.",
      "Screenshots are blurred."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects privacy, confidentiality, and real organizations."
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A1
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

export default function ProfessionalCommunicationDuringRiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 9 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Risk Communication
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.9 Professional Communication During Risk
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders communicate fictional security risk
            accurately across technical, service, leadership, user, privacy,
            supplier, teacher, and public audiences while preserving one fact
            set, clear ownership, safe detail, honest uncertainty, and
            measurable next steps.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A1: Advanced Cyber Ethics and Legal Boundaries"
          lessonTitle="Professional Communication During Risk"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, alerts, messages, recipients, evidence, dates, actions, decisions, and outcomes.",
            "I will separate confirmed facts, supported conclusions, possible impact, confirmed impact, alternate explanations, and unknowns.",
            "I will not blame a fictional person, supplier, or team without evidence.",
            "I will not ask users to share passwords, verification codes, private records, or other secrets.",
            "I will use only authorized recipients, approved channels, minimum-necessary detail, and one consistent fact set.",
            "I will never upload or reproduce real internal emails, screenshots, private messages, employee records, school records, logs, incidents, supplier communication, or confidential information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Single Bad Sentence Can Change the Entire Response"
        >
          <p className="leading-8">
            A fictional High alert records one unusual sign-in. The technical
            notes say compromise is unconfirmed, but a leadership draft says
            confidential data was stolen, a user notice asks for a password,
            and a supplier draft uses a different impact statement. The
            strongest response is to pause release, reconcile one approved fact
            set, correct unsupported language, remove unsafe requests, define
            owners, and rebuild each audience message from the same evidence.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Communication failure
              </p>
              <p className="mt-2 leading-7">
                Different teams receive different facts, urgency comes from the
                alert label alone, users are blamed, and uncertainty disappears.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional communication
              </p>
              <p className="mt-2 leading-7">
                One fact set supports audience-specific messages with evidence
                limits, actions, owners, deadlines, safe instructions, and the
                next update.
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
          title="Communication Is Part of the Security Control"
        >
          <p className="leading-8">
            Fictional defenders do not reduce risk only through technical
            action. They also influence what leaders approve, what users do,
            how suppliers respond, how evidence is preserved, and whether
            teams cooperate. Inaccurate or unsafe communication can create
            outages, panic, blame, privacy exposure, contract problems,
            delayed response, and damaged trust even when the original alert
            was handled correctly.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Accuracy", "Recipients need facts that match the evidence and remain consistent across channels."],
              ["Actionability", "Every message should identify the decision, action, owner, deadline, and escalation path."],
              ["Safety", "Messages must protect credentials, privacy, confidential detail, service continuity, and trust."],
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

        <SectionCard
          eyebrow="Core Model"
          title="Fact → Impact → Action → Owner → Deadline → Update"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Fact", "What observation is directly supported, and which source confirms it?"],
              ["Impact", "What is confirmed, possible, absent from current evidence, or still unknown?"],
              ["Action", "What is being done now, and what decision or user step is required?"],
              ["Owner", "Who recommends, approves, executes, communicates, validates, and accepts remaining risk?"],
              ["Deadline", "When must the decision, action, acknowledgment, or validation occur?"],
              ["Update", "When will the next message be issued, and what change would trigger an earlier update?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Professional Risk Communication"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Audience Design
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Audiences, One Approved Fact Set
          </h2>

          <div className="mt-6 grid gap-5">
            {audiences.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Needs", item.needs],
                    ["Avoid", item.avoid],
                    ["Best format", item.format],
                    ["Primary decision", item.decision],
                    ["Success condition", item.success],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.audience}-${label}`}
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
            Communication Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Principles for Accuracy, Safety, and Trust
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.why}</p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Message Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Evidence to Closure Communication
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Message Quality
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Strong Fields versus Dangerous Language
          </h2>

          <div className="mt-6 grid gap-5">
            {qualityFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.why}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Risk Communication Dashboard"
          subtitle="Fictional audience, message, fact-set, acknowledgment, and correction review for training only."
          metrics={[
            {
              label: "Active audiences",
              value: "5",
              note: "Technical, service, leadership, user, and supplier communication require coordinated ownership.",
            },
            {
              label: "Fact conflicts",
              value: "3",
              note: "Drafts disagree about compromise, data access, and service impact.",
            },
            {
              label: "Unsafe user requests",
              value: "1",
              note: "A draft asks the fictional user to reply with a password and must be replaced.",
            },
          ]}
        />

        <FakeAlertCard
          title="Risk Communications Are Inconsistent, Unsupported, and Unsafe"
          severity="High"
          time="10:36 AM"
          source="Fake Northbridge Communication Review Console"
          details="Fictional technical notes say compromise is unconfirmed, while leadership and supplier drafts claim confirmed theft. A user notice requests a password, and no single fact-set owner is assigned."
          recommendation="Pause release, assign a communication owner, reconcile evidence, create one approved fact set, correct unsupported impact language, remove credential requests, use audience-specific detail, define owners and deadlines, and issue a correction if any inaccurate draft was sent."
        />

        <FakeLogPanel
          title="Fake Risk Communication Timeline"
          logs={[
            "10:14 ALERT identity='svc-night-01' severity='High'",
            "10:16 FACT unusual-sign-in='confirmed'",
            "10:17 IMPACT compromise='unconfirmed'",
            "10:18 IMPACT data-access='unconfirmed'",
            "10:20 SERVICE status='healthy'",
            "10:22 ALT maintenance-window='possible'",
            "10:24 DRAFT technical='bounded'",
            "10:25 DRAFT leadership='confirmed-theft'",
            "10:26 DRAFT supplier='confirmed-breach'",
            "10:27 DRAFT user='reply-with-password'",
            "10:28 CONFLICT fact-set='three-versions'",
            "10:29 STOP release='paused'",
            "10:31 OWNER communications='assigned'",
            "10:33 CORRECTION leadership='rewritten'",
            "10:34 CORRECTION user='safe-support-path'",
            "10:36 STATUS messages='under-review'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Message
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Communication use", item.use],
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
          title="Which Fictional Communication Plan Is Strongest?"
          question="Which Fictional Communication Plan Is Strongest?"
          evidence={[
            "One unusual service-account sign-in is confirmed.",
            "Compromise, malicious intent, and data access are unconfirmed.",
            "Authentication and support services remain healthy.",
            "An approved maintenance window is a possible explanation.",
            "Leadership and supplier drafts claim confirmed theft.",
            "The user draft requests a password.",
            "No single approved fact set currently exists.",
          ]}
          options={[
            "Pause all drafts, assign a communication owner, create one evidence-limited fact set, rebuild audience messages, remove credential requests, define actions and deadlines, and issue corrections where needed.",
            "Send the leadership version because it creates urgency.",
            "Send each audience the draft already prepared.",
            "Avoid all communication until the entire case is closed.",
          ]}
          bestAnswer={0}
          explanation="The strongest plan preserves consistent facts, safe user guidance, authorized audiences, evidence limits, ownership, and timely updates."
        />

        <SectionCard
          eyebrow="Common Communication Mistakes"
          title="What Advanced Defenders Must Avoid"
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
          title="Build a Fictional Multi-Audience Risk Communication Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Reconcile the Northbridge Messages
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                quote, copy, lightly modify, summarize, or reproduce real
                emails, internal chat, employee messages, user notices,
                supplier communication, incident reports, screenshots, logs,
                or confidential records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Versioned approved fact set.</li>
                <li>Observation, conclusion, impact, alternative, and unknown matrix.</li>
                <li>Audience, purpose, channel, approval, and need-to-know map.</li>
                <li>Technical, service-owner, leadership, user, privacy, supplier, and teacher messages.</li>
                <li>Decision, action, owner, deadline, acknowledgment, and escalation table.</li>
                <li>Unsafe-language and privacy review.</li>
                <li>Correction notice for the unsupported leadership draft.</li>
                <li>Status cadence and next-update plan.</li>
                <li>Validation and closure communication.</li>
                <li>Reflection, revision history, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Every message must remain fictional, non-operational, privacy-safe,
            and free of real credentials, identities, private records,
            unresolved vulnerabilities, internal system details, or copied
            organizational communication.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants a Stronger Message"
          scenario="The fictional evidence supports one unusual sign-in. Leadership asks the analyst to call it a confirmed compromise so the issue receives faster attention."
          choices={[
            {
              label: "Choice A",
              response: "Keep evidence-limited language, explain the current urgency and service context, state the decision need, and provide the next update time.",
              outcome: "Best professional choice. Urgency can be communicated without inventing certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Use confirmed compromise because leadership requested it.",
              outcome: "Risky. Seniority does not justify unsupported claims.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove the alert from the message.",
              outcome: "Unsafe. Hiding supported facts is also misleading.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The User Notice Requests a Password"
          scenario="A fictional draft tells an affected user to reply with a password to confirm identity. The message has not yet been sent."
          choices={[
            {
              label: "Choice A",
              response: "Block the draft, replace the request with an approved support path, state that credentials must never be shared, and review all user templates.",
              outcome: "Best professional choice. The correction protects the user and improves future communication.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Send the message only through encrypted email.",
              outcome: "Risky. A secure channel does not make credential collection appropriate.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ask for a verification code instead.",
              outcome: "Unsafe. Verification codes are also secrets.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Professional Risk Communication Checklist"
          items={[
            "I can identify the fictional audience, purpose, authorized channel, communication owner, and approval requirement.",
            "I can build one fictional fact set covering observations, conclusions, alternatives, impact, actions, limitations, and unknowns.",
            "I can keep fictional technical, service, leadership, user, privacy, supplier, teacher, and public messages factually consistent.",
            "I can adapt fictional detail and terminology without changing the underlying evidence.",
            "I can avoid unsupported breach, attack, theft, compromise, malicious-intent, and blame language.",
            "I can use minimum-necessary fictional identities, system details, evidence, private information, and technical context.",
            "I can state fictional current action, decision request, owner, deadline, acknowledgment, escalation, and next update.",
            "I can provide fictional users with safe instructions that never request passwords, verification codes, secrets, or private records.",
            "I can route fictional supplier, privacy, user, leadership, and public communication through the correct owners.",
            "I can issue fictional corrections quickly, explain what changed, update the fact set, and preserve revision history.",
            "I can communicate fictional validation, service state, residual risk, monitoring, owner signoff, and bounded closure.",
            "I will never use real internal emails, private messages, user notices, supplier communication, screenshots, logs, incidents, identities, or confidential records in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A1.9 Mini Quiz: Professional Communication During Risk"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Multi-Audience Risk Communication Package for the Northbridge training case. Include the approved fact set, evidence-to-language matrix, audience and channel map, technical update, service-owner request, leadership brief, user notice, privacy brief, supplier request, teacher portfolio summary, decision and action table, status cadence, correction notice, acknowledgment log, validation update, closure statement, residual-risk note, reflection, revision history, and portfolio-safety statement."
          tips={[
            "Keep the fictional facts identical across every audience while changing detail, format, and terminology.",
            "Show the difference between confirmed facts, supported conclusions, possible impact, confirmed impact, alternatives, and unknowns.",
            "Include at least one unsafe or exaggerated draft, revise it after review, and explain why the correction matters.",
            "Make every important fictional message actionable with an owner, deadline, and next update.",
            "Keep every organization, system, identity, message, evidence item, decision, date, action, and outcome completely invented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Professional cybersecurity communication must be accurate, actionable, authorized, audience-specific, and consistent.",
            "Different audiences receive different detail, but they should never receive different underlying facts.",
            "Confirmed facts, supported conclusions, possible impact, confirmed impact, alternatives, and unknowns should remain separate.",
            "Severity labels do not automatically justify emergency language, blame, public disclosure, or maximum action.",
            "Every important fictional message should identify current action, decision request, owner, deadline, escalation, and next update.",
            "Users should never be asked to share passwords, verification codes, or other secrets.",
            "Technical, service, leadership, privacy, supplier, teacher, and public communication belong to different authorized owners.",
            "Corrections should be issued quickly and documented when prior language exceeds the evidence.",
            "Closure communication should describe validated control behavior, service health, evidence quality, residual risk, and monitoring.",
            "Every CyberShield risk-communication artifact must remain fully fictional, defensive, privacy-safe, non-accusatory, and safe for responsible sharing.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A1
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