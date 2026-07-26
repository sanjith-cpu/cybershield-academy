import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/intermediate-multi-step-lab`;

const questions = [
  {
    "question": "What is the safest first step in a fictional log investigation?",
    "choices": [
      "Define the exact question, scope, systems, identities, time window, evidence, owners, and decision need.",
      "Assume the alert title is correct.",
      "Merge every event into one case.",
      "Close the case if no outage is visible."
    ],
    "answer": 0,
    "explanation": "A clear scope prevents unsupported conclusions and keeps the investigation reviewable."
  },
  {
    "question": "Why must fictional event time and collection time be separated?",
    "choices": [
      "Delayed ingestion can create a false sequence if the two times are confused.",
      "They are always the same.",
      "Collection time proves user intent.",
      "Only leadership reports need timestamps."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages in the evidence pipeline."
  },
  {
    "question": "What does a fictional source-health gap prove?",
    "choices": [
      "Visibility is reduced, but harmful activity during the gap is not automatically confirmed.",
      "A breach occurred.",
      "Every missing event was malicious.",
      "The service is unavailable."
    ],
    "answer": 0,
    "explanation": "A source gap changes confidence and action, not unsupported facts."
  },
  {
    "question": "What is the safest way to triage a fictional suspicious message?",
    "choices": [
      "Use supplied fictional sender, routing, content, context, and interaction evidence without opening real suspicious content.",
      "Click the link to inspect it.",
      "Open the attachment on a normal device.",
      "Reply to the sender for confirmation."
    ],
    "answer": 0,
    "explanation": "Safe triage avoids interacting with suspicious content."
  },
  {
    "question": "What does one fictional link click prove?",
    "choices": [
      "One interaction occurred, while credential disclosure and account compromise remain separate questions.",
      "The account was compromised.",
      "Every recipient is affected.",
      "No action is needed."
    ],
    "answer": 0,
    "explanation": "User interaction and confirmed impact must be separated."
  },
  {
    "question": "Why is a fictional supplier payment-change message high risk even without a link?",
    "choices": [
      "Business email compromise may rely on replies, attachments, urgency, and payment instructions.",
      "Every invoice is malicious.",
      "Passed authentication proves it is safe.",
      "Attachments should always be ignored."
    ],
    "answer": 0,
    "explanation": "Phishing can target business processes without using links."
  },
  {
    "question": "What is effective access in a fictional IAM review?",
    "choices": [
      "The combined permissions created by direct grants, roles, groups, nested groups, inherited access, conditions, and exceptions.",
      "Only the visible role name.",
      "Only recently used permissions.",
      "Only access listed in a job description."
    ],
    "answer": 0,
    "explanation": "IAM review must account for every path that grants capability."
  },
  {
    "question": "What does an expired fictional supplier exception prove?",
    "choices": [
      "The documented approval ended, but malicious intent and misuse remain unconfirmed.",
      "A confirmed breach occurred.",
      "The account was stolen.",
      "Every supplier action was harmful."
    ],
    "answer": 0,
    "explanation": "Expired approval confirms unsupported capability, not intent or impact."
  },
  {
    "question": "Why can recent access use still be inappropriate?",
    "choices": [
      "Activity shows use, while business need, least privilege, approvals, and separation of duties determine whether access should remain.",
      "Recent use always proves approval.",
      "Unused access is the only risk.",
      "Trusted users may keep incompatible roles."
    ],
    "answer": 0,
    "explanation": "Usage and authorization are different questions."
  },
  {
    "question": "When is a fictional IAM decision complete?",
    "choices": [
      "After the intended effective-access state, service function, owner signoff, exception status, monitoring, and residual risk are validated.",
      "When the ticket is marked complete.",
      "When the user stops signing in.",
      "When one manager replies."
    ],
    "answer": 0,
    "explanation": "Completion requires validation of the actual access outcome."
  },
  {
    "question": "What does a fictional blocked unusual web input prove?",
    "choices": [
      "The supplied test case was rejected, but every possible input is not automatically proven safe.",
      "The application is completely secure.",
      "A real attacker was present.",
      "No further review is needed."
    ],
    "answer": 0,
    "explanation": "One successful control result has a limited scope."
  },
  {
    "question": "What does a missing fictional web-security header prove?",
    "choices": [
      "A baseline deviation and weakened browser-side defense, not automatic exploitation.",
      "A confirmed incident.",
      "Credential theft.",
      "Application unavailability."
    ],
    "answer": 0,
    "explanation": "Control weakness and exploitation are separate conclusions."
  },
  {
    "question": "How should a fictional support role reaching a manager-only route be described?",
    "choices": [
      "An authorization gap and unauthorized page view are confirmed, while modification and wider disclosure remain unconfirmed.",
      "Data theft is confirmed.",
      "No action is required because no setting changed.",
      "Every support account should be disabled."
    ],
    "answer": 0,
    "explanation": "The conclusion should preserve both the confirmed control failure and impact limits."
  },
  {
    "question": "What does a fictional broad cloud-storage policy prove?",
    "choices": [
      "A serious unsafe effective-access condition and possible exposure, while unauthorized access and disclosure require separate evidence.",
      "Every file was downloaded.",
      "The provider caused the issue.",
      "The resource must be deleted."
    ],
    "answer": 0,
    "explanation": "Configuration state, access, and disclosure are different evidence levels."
  },
  {
    "question": "Why must inherited fictional cloud policies be reviewed?",
    "choices": [
      "The effective state may differ from the local resource view because parent controls, roles, conditions, and exceptions also apply.",
      "Inherited policies are always unsafe.",
      "Local settings never matter.",
      "Only providers can review them."
    ],
    "answer": 0,
    "explanation": "Cloud decisions should use the actual combined state."
  },
  {
    "question": "What is shared responsibility in a fictional cloud review?",
    "choices": [
      "A division of duties among provider, customer, platform, application, supplier, identity, data, and service owners.",
      "The provider secures every customer setting.",
      "Only the customer owns security.",
      "No one owns inherited controls."
    ],
    "answer": 0,
    "explanation": "Cloud defense depends on clear ownership across multiple parties."
  },
  {
    "question": "What is the purpose of a fictional incident-response tabletop?",
    "choices": [
      "To test readiness, roles, authority, decisions, communication, continuity, recovery, and improvement without affecting real systems.",
      "To perform live containment.",
      "To collect credentials.",
      "To prove an incident occurred."
    ],
    "answer": 0,
    "explanation": "A tabletop is a safe discussion-based exercise."
  },
  {
    "question": "What should incident declaration depend on?",
    "choices": [
      "Defined criteria, evidence, impact, criticality, uncertainty, persistence, ownership, and authority.",
      "Alert severity alone.",
      "Whether an outage exists.",
      "Whether leadership is worried."
    ],
    "answer": 0,
    "explanation": "Declaration is an evidence-based authorized decision."
  },
  {
    "question": "Why should proposed, authorized, completed, and validated actions be recorded separately?",
    "choices": [
      "They represent different stages of a decision and should not be treated as equivalent.",
      "They always happen at the same time.",
      "Only completed actions matter.",
      "Validation is optional."
    ],
    "answer": 0,
    "explanation": "A recommendation is not the same as an approved or proven outcome."
  },
  {
    "question": "What belongs in a strong fictional leadership update?",
    "choices": [
      "Known facts, confirmed and possible impact, actions, service status, decisions needed, confidence, limitations, and next update time.",
      "Every raw log line.",
      "Only the worst-case scenario.",
      "No mention of uncertainty."
    ],
    "answer": 0,
    "explanation": "Leadership updates should be concise, accurate, and decision-ready."
  },
  {
    "question": "What is the purpose of a fictional defensive report?",
    "choices": [
      "To turn approved evidence into accurate, traceable, decision-ready findings, actions, validation, and residual-risk statements.",
      "To include the maximum number of logs.",
      "To prove the worst-case explanation.",
      "To replace owner decisions."
    ],
    "answer": 0,
    "explanation": "A defensive report supports review and action."
  },
  {
    "question": "What makes a fictional recommendation actionable?",
    "choices": [
      "A rationale, owner, priority, authority, deadline, dependency, rollback, success measure, validation, and residual-risk statement.",
      "The phrase improve security.",
      "A High label.",
      "Technical jargon."
    ],
    "answer": 0,
    "explanation": "Actionable recommendations are specific and accountable."
  },
  {
    "question": "Why should fictional findings include alternate explanations?",
    "choices": [
      "They show which other interpretations fit the evidence and what could change confidence.",
      "They prove the main finding is wrong.",
      "They replace recommendations.",
      "They remove the need for evidence."
    ],
    "answer": 0,
    "explanation": "Alternatives improve analytical honesty and peer review."
  },
  {
    "question": "Why should a multi-domain fictional queue item sometimes be separated into multiple cases?",
    "choices": [
      "Different systems, identities, evidence, owners, actions, timelines, and impact limits may require different operational records.",
      "Every record must always have its own case.",
      "Separate cases automatically lower severity.",
      "Cases should never be linked."
    ],
    "answer": 0,
    "explanation": "Case boundaries should follow evidence and decision ownership."
  },
  {
    "question": "When is a fictional integrated defensive case ready for closure or monitored transition?",
    "choices": [
      "After case-specific access, session, configuration, source, user, service, communication, owner, residual-risk, and improvement criteria are validated.",
      "When all tickets say complete.",
      "When alerts stop.",
      "When no outage is visible."
    ],
    "answer": 0,
    "explanation": "Closure depends on validated outcomes, not one administrative signal."
  }
];

const masteryAreas = [
  {
    "title": "Evidence and Timeline Analysis",
    "description": "Validate fictional sources, distinguish event and collection time, normalize the sequence, document source health, and preserve evidence limits."
  },
  {
    "title": "Phishing and User Interaction",
    "description": "Triage fictional sender, routing, content, context, and user-action evidence without opening real suspicious content or overstating impact."
  },
  {
    "title": "IAM Permission Review",
    "description": "Evaluate fictional identity legitimacy, effective access, business need, least privilege, separation of duties, approvals, exceptions, and validation."
  },
  {
    "title": "Web and Cloud Defense",
    "description": "Separate fictional control weakness, possible exposure, confirmed access, confirmed impact, source gaps, shared responsibility, and corrective action."
  },
  {
    "title": "Incident Coordination",
    "description": "Use fictional declaration criteria, authority, containment concepts, continuity, communication, recovery, closure, and after-action improvement."
  },
  {
    "title": "Reporting and Integrated Analysis",
    "description": "Create fictional evidence-limited findings, audience summaries, recommendations, case boundaries, validation records, and portfolio-safe reports."
  }
];

export default function IntermediateDefensiveLabsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I16
            </span>

            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16 Intermediate Defensive Labs Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete twenty-five questions covering fictional log
            investigation, phishing triage, IAM permission review, web and
            cloud defense, incident response, defensive reporting, integrated
            case boundaries, validation, and portfolio safety.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to I16.8
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Back to Module
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed all eight I16 lessons.",
            "I will answer using only fictional, defensive, privacy-safe, and authorized reasoning.",
            "I understand that control weakness, possible exposure, confirmed access, confirmed impact, and incident status are different conclusions.",
            "I will preserve evidence limits, case boundaries, owner authority, validation, and residual risk.",
            "I will not use real credentials, logs, systems, messages, cloud resources, incidents, employee data, school records, supplier records, or confidential information.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Rules
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete All Twenty-Five Questions
          </h2>

          <p className="mt-4 leading-8">
            Read every choice before answering. Choose the strongest
            evidence-based defensive response. Answers and explanations stay
            hidden until the quiz component reveals them. This assessment uses
            fictional evidence only and does not authorize action on real
            systems.
          </p>
        </section>

        <MiniQuiz
          title="I16 Module Test: 25 Questions"
          questions={questions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Score Guide
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Interpret Your Result
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["23–25", "Advanced readiness", "You consistently applied evidence limits, ownership, validation, and integrated defensive judgment."],
              ["20–22", "Strong readiness", "You understand the module and should review the few concepts that caused uncertainty."],
              ["17–19", "Developing readiness", "Review the related lessons, especially case boundaries, impact language, and validation."],
              ["0–16", "Rebuild foundations", "Return to the lessons and portfolio labs before attempting the test again."],
            ].map(([score, label, detail]) => (
              <article
                key={score}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-2xl font-black text-cyan-100">{score}</p>
                <h3 className="mt-2 font-black text-white">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Mastery Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Areas to Review after the Test
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {masteryAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <h3 className="font-black text-cyan-100">{area.title}</h3>
                <p className="mt-2 text-sm leading-6">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="I16 Final Defender Checklist"
          items={[
            "I can define a fictional defensive scope with exact systems, identities, services, suppliers, time windows, evidence, owners, authority, exclusions, and decisions.",
            "I can validate fictional source health and separate event, collection, alert, action, communication, and validation time.",
            "I can triage fictional phishing without opening real suspicious content or overstating user impact.",
            "I can review fictional direct, inherited, nested, conditional, and exception-based access paths.",
            "I can distinguish fictional control weakness, possible exposure, confirmed access, confirmed disclosure, service impact, and incident status.",
            "I can apply fictional shared-responsibility, least-privilege, separation-of-duties, and service-continuity principles.",
            "I can preserve fictional case boundaries while maintaining a coordinated response view.",
            "I can write fictional technical, service, leadership, user, supplier, and shift-handoff communications.",
            "I can validate fictional access, sessions, configuration, logging, user state, service function, owner signoff, residual risk, closure, and improvement.",
            "I can create fully fictional portfolio artifacts without exposing or affecting real systems, identities, logs, messages, suppliers, incidents, or private data.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            Final Module Portfolio Check
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Confirm Your I16 Defensive Lab Package
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Fake log investigation package",
              "Fake phishing triage package",
              "Fake IAM permission review",
              "Fake web-defense review",
              "Fake cloud-misconfiguration review",
              "Fake incident-response tabletop",
              "Fictional defensive report",
              "Intermediate multi-step case package",
              "Technical and leadership summaries",
              "Portfolio-safety and reflection statement",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-emerald-300/25 bg-slate-950/40 p-4 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            "Defensive evidence must be scoped, validated, normalized, and interpreted with source-health limits.",
            "Phishing interaction, IAM capability, web control failure, cloud exposure, and incident impact are separate evidence questions.",
            "Case boundaries should follow systems, identities, evidence, timelines, owners, actions, and impact limits.",
            "Proposed, authorized, completed, and validated actions are different stages.",
            "Communication should match the audience while preserving the same underlying facts.",
            "Closure requires validated outcomes, residual-risk statements, owner signoff, and tracked improvements.",
            "All training and portfolio artifacts should remain fully fictional, defensive, privacy-safe, and authorized.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Return to Module I16
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to I16.8
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              I16 Module Homepage
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}