import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const previousLesson = `${modulePath}/advanced-ethics-case-lab`;
const nextModule = `${trackPath}/security-architecture`;

const coverage = [
  {
    "lesson": "A1.1",
    "title": "Professional Responsibility in Cybersecurity",
    "focus": "Duty, accountability, evidence, privacy, service continuity, and professional judgment.",
    "questions": "1–2"
  },
  {
    "lesson": "A1.2",
    "title": "Authorization, Scope, and Written Permission",
    "focus": "Valid authority, precise scope, ownership, changes, expiration, and stop conditions.",
    "questions": "3–4"
  },
  {
    "lesson": "A1.3",
    "title": "Legal Risk and Consequences",
    "focus": "Risk recognition, qualified escalation, consequence layers, and evidence-limited language.",
    "questions": "5–6"
  },
  {
    "lesson": "A1.4",
    "title": "Responsible Disclosure Concepts",
    "focus": "Private reporting, coordinated validation, impact limits, remediation, and closure.",
    "questions": "7–8"
  },
  {
    "lesson": "A1.5",
    "title": "Handling Sensitive Information Ethically",
    "focus": "Classification, minimum necessary, need-to-know, retention, deletion, and auditability.",
    "questions": "9–10"
  },
  {
    "lesson": "A1.6",
    "title": "Research Boundaries and Safe Environments",
    "focus": "Isolation, synthetic data, test identities, approved tools, stops, rollback, and cleanup.",
    "questions": "11–12"
  },
  {
    "lesson": "A1.7",
    "title": "Conflicts of Interest and Trust",
    "focus": "Actual, potential, and perceived conflicts, disclosure, recusal, and independent review.",
    "questions": "13–14"
  },
  {
    "lesson": "A1.8",
    "title": "Ethics in AI and Automation",
    "focus": "Human accountability, fairness, explainability, approval gates, audit, and rollback.",
    "questions": "15–16"
  },
  {
    "lesson": "A1.9",
    "title": "Professional Communication During Risk",
    "focus": "One fact set, audience adaptation, uncertainty, safe instructions, corrections, and closure.",
    "questions": "17–18"
  },
  {
    "lesson": "A1.10",
    "title": "Advanced Ethics Case Lab",
    "focus": "Integrated scope, evidence, owners, options, action, validation, and portfolio safety.",
    "questions": "19–25"
  }
];
const quizQuestions = [
  {
    "question": "A fictional analyst has the technical ability to access a connected system, but the written assignment covers only supplied logs. What is the strongest professional response?",
    "choices": [
      "Use the access because technical capability proves responsibility.",
      "Stay within the supplied-log review and request separate written authorization if the connected system is genuinely needed.",
      "Access the system briefly and document it afterward.",
      "Ask another student to access it instead."
    ],
    "answer": 1,
    "explanation": "Technical capability does not create authorization. Professional responsibility requires clear authority, ownership, scope, and stop conditions."
  },
  {
    "question": "Which statement best reflects professional accountability?",
    "choices": [
      "The tool made the decision, so no person owns the outcome.",
      "The supervisor requested it, so the analyst has no responsibility.",
      "Named human owners remain responsible for evidence review, approval, action, communication, correction, and residual risk.",
      "Accountability ends when a ticket is closed."
    ],
    "answer": 2,
    "explanation": "Professional systems may assist decisions, but accountability remains with authorized people and roles."
  },
  {
    "question": "Which item belongs in a complete fictional scope statement?",
    "choices": [
      "Only the general topic of the review.",
      "Assets, identities, data, methods, tools, actions, time, location, outputs, recipients, owners, exclusions, and stop conditions.",
      "Only the name of the supervisor.",
      "Only the systems that appear technically related."
    ],
    "answer": 1,
    "explanation": "Advanced scope should define the complete operational and governance boundary, not merely a broad topic."
  },
  {
    "question": "A fictional manager asks the student to review a database not listed in the written authorization. What should happen?",
    "choices": [
      "Review it because the manager is senior.",
      "Review only a small part of it.",
      "Document the possible relevance and obtain a separate written scope change from the correct owner before any review.",
      "Continue if the database is read-only."
    ],
    "answer": 2,
    "explanation": "Seniority, technical connection, and read-only access do not replace proper authorization and ownership."
  },
  {
    "question": "What is the strongest way for a student to address possible legal risk?",
    "choices": [
      "Declare that a specific law was violated.",
      "Recognize the possible legal, policy, privacy, contract, or records question and escalate it to the qualified owner.",
      "Avoid documenting the issue.",
      "Assume the most serious consequence applies."
    ],
    "answer": 1,
    "explanation": "Students should identify risk categories and escalation needs without pretending to provide legal advice."
  },
  {
    "question": "Why should legal, contractual, policy, operational, privacy, financial, academic, and trust consequences be reviewed separately?",
    "choices": [
      "Because only one can apply at a time.",
      "Because the same fictional action may create several different consequences with different owners and controls.",
      "Because technical teams cannot discuss consequences.",
      "Because policy violations are always legal violations."
    ],
    "answer": 1,
    "explanation": "A single action can create multiple distinct consequence layers requiring different owners and safeguards."
  },
  {
    "question": "What is the strongest first action after discovering a fictional control weakness within an approved exercise?",
    "choices": [
      "Continue testing until maximum impact is proven.",
      "Stop at the authorized boundary, preserve minimum-necessary evidence, and report privately through the approved channel.",
      "Publish screenshots so the owner responds quickly.",
      "Contact every possible recipient."
    ],
    "answer": 1,
    "explanation": "Responsible disclosure begins with scope discipline, evidence preservation, privacy, and private owner routing."
  },
  {
    "question": "Who should decide whether a fictional security concern is communicated publicly?",
    "choices": [
      "The discoverer alone.",
      "Any student who believes the issue is important.",
      "The authorized communications and risk owners using the approved fact set and required reviews.",
      "The person who wrote the first draft."
    ],
    "answer": 2,
    "explanation": "Public disclosure can affect users, suppliers, privacy, contracts, investigations, and trust, so it requires authorized ownership."
  },
  {
    "question": "What does minimum-necessary information handling require?",
    "choices": [
      "Collecting all available records and deleting some later.",
      "Using the fewest fictional records, fields, identities, recipients, copies, and retention time needed for the approved purpose.",
      "Sharing full records only with trusted people.",
      "Keeping extra evidence in case it becomes useful."
    ],
    "answer": 1,
    "explanation": "Minimum necessary reduces exposure before unnecessary collection, sharing, and retention occur."
  },
  {
    "question": "Why can fictional information remain sensitive after names are removed?",
    "choices": [
      "Names are the only identifying field.",
      "Dates, roles, events, locations, system context, wording, and other details may still allow re-identification.",
      "Redaction always makes information public.",
      "Sensitive information can never be analyzed safely."
    ],
    "answer": 1,
    "explanation": "Contextual combinations can still reveal identities or confidential organizational details."
  },
  {
    "question": "Which environment is strongest for teaching an ethics decision that requires no live technical behavior?",
    "choices": [
      "A real public website.",
      "A fictional paper, webpage, or tabletop simulation using invented evidence.",
      "A school production system.",
      "An unknown external server."
    ],
    "answer": 1,
    "explanation": "Use the safest environment capable of teaching the objective."
  },
  {
    "question": "A fictional isolated lab unexpectedly has a route to a public service. What should happen first?",
    "choices": [
      "Continue because no misuse is confirmed.",
      "Test the route to learn what it reaches.",
      "Stop the exercise, disconnect through the approved process, notify the lab owner, and investigate the boundary.",
      "Ignore it until cleanup."
    ],
    "answer": 2,
    "explanation": "Unexpected external connectivity is a professional stop condition even before confirmed use."
  },
  {
    "question": "What best describes a perceived conflict of interest?",
    "choices": [
      "Proof that a fictional person acted dishonestly.",
      "A situation that may reasonably appear to affect independence even when improper behavior is not proven.",
      "A conflict that never needs disclosure.",
      "A technical configuration error."
    ],
    "answer": 1,
    "explanation": "Trust can be affected by reasonable appearance even when misconduct is not established."
  },
  {
    "question": "The same fictional person designed a control, tested it, approved it, and accepted the remaining risk. What is the strongest improvement?",
    "choices": [
      "Keep the structure because the designer knows the control best.",
      "Separate design, testing, approval, validation, and risk acceptance where practical.",
      "Delete the control.",
      "Allow the designer to sign a second time."
    ],
    "answer": 1,
    "explanation": "Role separation reduces self-review, hidden assumptions, and unchecked optimism."
  },
  {
    "question": "A fictional AI labels an alert malicious with 92% confidence. What does this prove?",
    "choices": [
      "The account is compromised.",
      "The user acted maliciously.",
      "The model produced a high-confidence label that still requires evidence review and human ownership.",
      "Automatic account disabling is authorized."
    ],
    "answer": 2,
    "explanation": "A confidence score is an uncertainty estimate, not proof of correctness, intent, impact, or authority."
  },
  {
    "question": "Which fictional action most clearly requires a human approval gate?",
    "choices": [
      "Adding a case tag.",
      "Formatting a summary.",
      "Disabling a critical service account.",
      "Opening a review ticket."
    ],
    "answer": 2,
    "explanation": "High-impact service and access changes require authorized human judgment, context, rollback, and auditability."
  },
  {
    "question": "What is the strongest rule for communicating with different fictional audiences?",
    "choices": [
      "Each audience may receive a different version of the facts.",
      "The underlying approved fact set must remain consistent while detail, terminology, format, and action language are adapted.",
      "Leadership should always receive the most dramatic version.",
      "Technical audiences do not need uncertainty labels."
    ],
    "answer": 1,
    "explanation": "Audience adaptation changes presentation, not the evidence or truth."
  },
  {
    "question": "A fictional user notice asks the user to reply with a password or verification code. What should happen?",
    "choices": [
      "Send it only through encrypted email.",
      "Replace it with an approved support path and state that credentials and verification codes must never be shared.",
      "Send it only to one user.",
      "Ask the user to send the secret to a manager."
    ],
    "answer": 1,
    "explanation": "Professional security communication should never request passwords, verification codes, or other secrets."
  },
  {
    "question": "Which action is most defensible when one High alert exists, compromise is unconfirmed, and the account supports critical services?",
    "choices": [
      "Immediately disable the account.",
      "Use an owner-approved targeted and reversible control with evidence preservation, service review, monitoring, and validation.",
      "Export the full mailbox.",
      "Publish the alert."
    ],
    "answer": 1,
    "explanation": "The strongest action is proportionate, reversible, service-aware, authorized, and evidence-limited."
  },
  {
    "question": "Which practice best protects fictional evidence integrity?",
    "choices": [
      "Edit source records so they are easier to understand.",
      "Preserve source, context, timestamps, provenance, handling history, access, retention, and limitations.",
      "Keep only the AI summary.",
      "Delete records that conflict with the preferred conclusion."
    ],
    "answer": 1,
    "explanation": "Professional review requires traceable evidence and preserved context."
  },
  {
    "question": "A fictional supplier may hold relevant evidence, but the agreement says only the supplier owner may make requests. What should the analyst do?",
    "choices": [
      "Contact the supplier directly because the case is urgent.",
      "Route the evidence need through the supplier owner and approved contract channel.",
      "Post the request publicly.",
      "Ignore all supplier evidence permanently."
    ],
    "answer": 1,
    "explanation": "Urgency does not automatically override contractual communication and ownership boundaries."
  },
  {
    "question": "What should happen when a fictional authorization window expires?",
    "choices": [
      "Continue because the work is almost finished.",
      "Continue only on a personal device.",
      "Stop or obtain a documented extension from the correct owner before further activity.",
      "Change the timestamp in the notes."
    ],
    "answer": 2,
    "explanation": "Unfinished work does not extend permission."
  },
  {
    "question": "Why must service continuity be included in an ethics decision?",
    "choices": [
      "Because service impact always overrides security.",
      "Because a defensive action can reduce one risk while creating outage, dependency, safety, financial, or recovery harm.",
      "Because critical services should never be changed.",
      "Because only service owners review security incidents."
    ],
    "answer": 1,
    "explanation": "Professional decisions compare security value with operational and human consequences rather than optimizing only one concern."
  },
  {
    "question": "What makes a CyberShield Academy ethics portfolio artifact safe to share?",
    "choices": [
      "Only names and passwords are removed.",
      "Real screenshots are cropped.",
      "Every organization, person, system, account, message, record, relationship, supplier, date, action, decision, and outcome is invented.",
      "The real case is summarized without URLs."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization is required; changing a few identifiers is not enough."
  },
  {
    "question": "Which sequence best represents an advanced integrated ethics decision?",
    "choices": [
      "Alert → urgency → broad action → communication → review.",
      "Scope → evidence → owners and conflicts → options → authorized proportionate action → validation → closure and improvement.",
      "Supervisor request → technical access → maximum collection → public disclosure.",
      "AI confidence → automatic action → delete evidence → close."
    ],
    "answer": 1,
    "explanation": "Advanced ethics integrates scope, evidence, authority, independence, proportionality, action, validation, and transparent closure."
  }
];
const performanceBands = [
  {
    "score": "23–25",
    "level": "Advanced Ready",
    "meaning": "You consistently protect scope, evidence, privacy, service, fairness, trust, communication, and human accountability.",
    "next_step": "Continue to Module A2: Security Architecture."
  },
  {
    "score": "20–22",
    "level": "Strong",
    "meaning": "Your judgment is strong, with a few areas needing sharper owner, evidence, or validation reasoning.",
    "next_step": "Review the explanations for missed questions, then continue."
  },
  {
    "score": "17–19",
    "level": "Developing",
    "meaning": "You understand the main boundaries but need more consistency across integrated cases.",
    "next_step": "Revisit the specific A1 lessons connected to missed questions."
  },
  {
    "score": "13–16",
    "level": "Needs Review",
    "meaning": "Several decisions may rely too heavily on urgency, authority, confidence, or broad collection.",
    "next_step": "Repeat the module review before moving forward."
  },
  {
    "score": "0–12",
    "level": "Rebuild the Foundation",
    "meaning": "Return to the module homepage and work through the lessons, labs, hidden-answer checks, and portfolio prompts again.",
    "next_step": "Focus first on authorization, evidence limits, ownership, privacy, and stop conditions."
  }
];
const reviewMap = [
  {
    "missed": "Questions 1–2",
    "review": "A1.1 Professional Responsibility in Cybersecurity",
    "focus": "Capability versus authority, decision ownership, duty, and accountability."
  },
  {
    "missed": "Questions 3–4",
    "review": "A1.2 Authorization, Scope, and Written Permission",
    "focus": "Complete scope dimensions, owner authority, changes, and stop conditions."
  },
  {
    "missed": "Questions 5–6",
    "review": "A1.3 Legal Risk and Consequences",
    "focus": "Qualified escalation and separate consequence layers."
  },
  {
    "missed": "Questions 7–8",
    "review": "A1.4 Responsible Disclosure Concepts",
    "focus": "Private reporting, recipient ownership, validation, and public communication."
  },
  {
    "missed": "Questions 9–10",
    "review": "A1.5 Handling Sensitive Information Ethically",
    "focus": "Minimum necessary, re-identification, retention, deletion, and audience-specific handling."
  },
  {
    "missed": "Questions 11–12",
    "review": "A1.6 Research Boundaries and Safe Environments",
    "focus": "Safest environment, isolation, synthetic data, stop conditions, and cleanup."
  },
  {
    "missed": "Questions 13–14",
    "review": "A1.7 Conflicts of Interest and Trust",
    "focus": "Actual, potential, perceived conflicts and role separation."
  },
  {
    "missed": "Questions 15–16",
    "review": "A1.8 Ethics in AI and Automation",
    "focus": "Confidence limits, human approval, fairness, auditability, and rollback."
  },
  {
    "missed": "Questions 17–18",
    "review": "A1.9 Professional Communication During Risk",
    "focus": "One fact set, safe user instructions, uncertainty, corrections, and action ownership."
  },
  {
    "missed": "Questions 19–25",
    "review": "A1.10 Advanced Ethics Case Lab",
    "focus": "Integrated evidence, ownership, options, proportionality, validation, expiration, and portfolio safety."
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
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
      >
        Advanced Track
      </Link>
      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function A1ModuleTestPage() {
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
              Module A1 Assessment
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              25 Questions
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Hidden Answers
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1 Module Test
          </h1>

          <p className="mt-4 text-2xl font-bold text-cyan-200">
            Advanced Cyber Ethics and Legal Boundaries
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your ability to apply professional responsibility,
            authorization, scope, legal-risk awareness, responsible disclosure,
            sensitive-information handling, safe research, conflict management,
            ethical automation, risk communication, and integrated case
            reasoning.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Assessment Readiness"
          items={[
            "I completed or reviewed all ten lessons in Module A1.",
            "I will choose an answer before revealing the explanation.",
            "I will count one point for each correct answer.",
            "I understand that every scenario, system, identity, organization, message, record, and outcome is fictional.",
            "I will not treat this assessment as permission for any real-world access, testing, collection, investigation, change, or disclosure.",
            "I will use missed questions to identify the exact lesson I need to review.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="Complete the Assessment without Revealing Answers Early"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Step 1", "Read the full fictional scenario and every answer choice."],
              ["Step 2", "Choose one answer before opening the hidden explanation."],
              ["Step 3", "Reveal the answer and give yourself one point only if your original choice was correct."],
              ["Step 4", "Record the question numbers you missed instead of immediately retrying them."],
              ["Step 5", "Use the review map after Question 25 to return to the correct lesson."],
              ["Step 6", "A strong answer should protect authorization, evidence, privacy, service, fairness, trust, ownership, and validation together."],
            ].map(([step, instruction]) => (
              <div
                key={step}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{step}</p>
                <p className="mt-2 leading-7">{instruction}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This is an open-learning assessment, not a speed challenge. The
            explanations remain hidden so you can commit to an answer first.
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Assessment Coverage
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            All Ten A1 Lessons Are Tested
          </h2>

          <div className="mt-6 grid gap-5">
            {coverage.map((item) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <span className="rounded-xl bg-cyan-400 px-4 py-2 text-center font-black text-slate-950">
                    {item.lesson}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.focus}
                    </p>
                  </div>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-black text-purple-200">
                    Questions {item.questions}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <MiniQuiz
          title="A1 Module Test: 25 Questions"
          questions={quizQuestions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Performance Guide
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Interpret Your Score
          </h2>

          <div className="mt-6 grid gap-5">
            {performanceBands.map((band) => (
              <article
                key={band.score}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.4fr_1fr_1fr] lg:items-start">
                  <span className="rounded-xl bg-cyan-400 px-4 py-2 text-center font-black text-slate-950">
                    {band.score}
                  </span>

                  <h3 className="text-lg font-black text-cyan-100">
                    {band.level}
                  </h3>

                  <p className="leading-7 text-slate-300">{band.meaning}</p>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-50">
                    {band.next_step}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Targeted Review Map
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Match Missed Questions to the Correct Lesson
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.missed}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[auto_0.7fr_1fr] md:items-center">
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-black text-red-200">
                    {item.missed}
                  </span>

                  <h3 className="font-black text-cyan-100">{item.review}</h3>

                  <p className="text-sm leading-6 text-slate-300">
                    {item.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Module A1 Mastery Checklist"
          items={[
            "I can distinguish technical capability, business request, written authorization, professional duty, and valid ownership.",
            "I can define complete fictional scope and stop when assets, data, methods, time, recipients, or authority change.",
            "I can recognize possible legal and policy risk without pretending to provide legal advice.",
            "I can report fictional concerns privately through coordinated responsible-disclosure processes.",
            "I can apply classification, minimum necessary, need-to-know, retention, deletion, and auditability.",
            "I can choose fictional, isolated, synthetic, supervised, reversible, and validated research environments.",
            "I can manage actual, potential, and perceived conflicts without unsupported accusations.",
            "I can keep AI and automation bounded by human accountability, fairness, approval, audit, rollback, and safe failure.",
            "I can build multiple fictional audience messages from one approved fact set.",
            "I can compare response options using security, privacy, service, fairness, evidence, trust, reversibility, and owner authority.",
            "I can validate control behavior, service state, evidence quality, communication, ownership, residual risk, retention, deletion, and monitoring.",
            "I can keep every CyberShield Academy artifact completely fictional, defensive, privacy-safe, non-operational, and safe to share.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Professional responsibility requires both technical competence and disciplined boundaries.",
            "Written authorization should identify exact scope, ownership, time, methods, data, actions, recipients, outputs, and stop conditions.",
            "Legal-risk awareness means identifying specialized questions and escalating them, not declaring real legal violations.",
            "Responsible disclosure is private, coordinated, evidence-limited, owner-controlled, and validated.",
            "Sensitive information should be minimized throughout collection, access, analysis, sharing, retention, and deletion.",
            "Safe research uses fictional or approved isolated environments, synthetic data, test identities, approved tools, supervision, rollback, and cleanup.",
            "Conflicts of interest require disclosure and may require recusal, reassignment, role separation, or independent review.",
            "AI and automation can support decisions but cannot replace authorized human accountability for high-impact actions and risk.",
            "Professional communication preserves one fact set while adapting detail and actions for different audiences.",
            "Advanced ethics integrates scope, evidence, ownership, privacy, service continuity, fairness, trust, proportionality, validation, and transparent closure.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            You Completed Module A1
          </h2>
          <p className="mt-3 max-w-3xl leading-7">
            Review any missed questions, confirm your portfolio work is fully
            fictional, and continue to Module A2 when you are ready.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}