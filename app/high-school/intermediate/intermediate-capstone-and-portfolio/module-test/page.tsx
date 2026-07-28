import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;
const previousLesson = `${modulePath}/intermediate-capstone-lab`;

const questions = [
  {
    "question": "Which evidence best demonstrates fictional Intermediate readiness?",
    "choices": [
      "Consistent recall, application, communication, ownership, validation, transfer, ethics, and portfolio evidence across several tasks.",
      "One high quiz score.",
      "Finishing every page quickly.",
      "Feeling confident before the capstone."
    ],
    "answer": 0,
    "explanation": "Readiness requires multiple kinds of demonstrated evidence rather than one score or feeling."
  },
  {
    "question": "What is the strongest reason to keep several fictional records in separate operational cases?",
    "choices": [
      "The records involve different systems, identities, evidence sources, owners, actions, and impact limits.",
      "The alerts use different colors.",
      "The events happened during one shift.",
      "The dashboard grouped them together."
    ],
    "answer": 0,
    "explanation": "Case boundaries should follow evidence-supported relationships rather than shared timing or dashboard grouping."
  },
  {
    "question": "What should a fictional defender portfolio artifact prove?",
    "choices": [
      "A specific learning claim supported by evidence, reasoning, communication, validation, reflection, and safe fictionalization.",
      "That the student can create the longest document.",
      "That every raw record was copied into the artifact.",
      "That the fictional incident was severe."
    ],
    "answer": 0,
    "explanation": "A strong artifact makes a specific skill visible through traceable work."
  },
  {
    "question": "Why should the main fictional portfolio artifact use selected evidence?",
    "choices": [
      "Decision-changing evidence should remain visible while supporting records can move to an appendix.",
      "Evidence should be removed completely.",
      "Only one record should ever appear.",
      "Raw data is always more useful than explanation."
    ],
    "answer": 0,
    "explanation": "Evidence selection improves clarity without removing traceability."
  },
  {
    "question": "What makes a fictional incident report executive summary strong?",
    "choices": [
      "It states the issue, confirmed facts, unconfirmed impact, current actions, service state, residual risk, decision need, and next update.",
      "It begins with every raw log field.",
      "It repeats the alert title only.",
      "It removes all uncertainty."
    ],
    "answer": 0,
    "explanation": "Leadership needs a concise, accurate, decision-ready summary."
  },
  {
    "question": "Why must fictional event time and collection time remain separate?",
    "choices": [
      "Delayed collection can create a false sequence when the two timestamps are confused.",
      "They always represent the same moment.",
      "Collection time proves intent.",
      "Only technical appendices need timestamps."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages in the evidence process."
  },
  {
    "question": "Which statement best describes a fictional broad-read storage policy?",
    "choices": [
      "A serious control weakness and possible exposure are supported, while unauthorized access and disclosure remain unconfirmed.",
      "All confidential data was definitely disclosed.",
      "No risk existed because the service remained available.",
      "The supplier caused the change."
    ],
    "answer": 0,
    "explanation": "The strongest statement preserves severity and impact limits."
  },
  {
    "question": "Why should proposed, authorized, completed, and validated actions be recorded separately?",
    "choices": [
      "They represent different stages and should not be treated as equivalent.",
      "They always occur at the same time.",
      "Only completed actions matter.",
      "Validation is optional after a ticket closes."
    ],
    "answer": 0,
    "explanation": "A recommendation is not the same as an approved, completed, or proven outcome."
  },
  {
    "question": "What should be decided before creating a fictional security diagram?",
    "choices": [
      "The purpose, audience, question, scope, diagram type, evidence, privacy boundary, and success criteria.",
      "The color palette only.",
      "The number of icons.",
      "The final file size."
    ],
    "answer": 0,
    "explanation": "A diagram should begin with the decision or learning claim it must support."
  },
  {
    "question": "How should an unconfirmed fictional relationship appear in a security diagram?",
    "choices": [
      "With a clearly different unknown or assumption marker and the evidence needed for confirmation.",
      "As a solid confirmed arrow.",
      "As a High severity incident.",
      "It should always be deleted."
    ],
    "answer": 0,
    "explanation": "Uncertainty should remain visible rather than being converted into fact."
  },
  {
    "question": "What makes a fictional flow arrow useful?",
    "choices": [
      "It identifies direction, source, destination, purpose, data or event type, control point, and evidence.",
      "It is visually curved.",
      "It uses a bright color.",
      "It connects as many systems as possible."
    ],
    "answer": 0,
    "explanation": "A useful arrow communicates a supported relationship."
  },
  {
    "question": "Why should fictional control markers include status?",
    "choices": [
      "A control may be expected, observed, failed, corrected, or validated, and those states are not equivalent.",
      "Every drawn control is automatically effective.",
      "Status is only for incident timelines.",
      "Controls do not need evidence."
    ],
    "answer": 0,
    "explanation": "Control existence does not prove control effectiveness."
  },
  {
    "question": "What makes a fictional risk statement complete?",
    "choices": [
      "It identifies the asset, harmful event, weakness, possible consequence, business impact, time horizon, and evidence boundary.",
      "It includes a High label.",
      "It names a threat actor without evidence.",
      "It copies a scanner score."
    ],
    "answer": 0,
    "explanation": "A complete risk statement connects value, event, weakness, consequence, and impact."
  },
  {
    "question": "Why should technical severity not determine the entire fictional business priority?",
    "choices": [
      "Asset value, exposure, control state, service criticality, users, continuity, feasibility, and residual risk also matter.",
      "Technical severity never matters.",
      "Only cost matters.",
      "Every finding has the same priority."
    ],
    "answer": 0,
    "explanation": "Risk priority combines technical and business context."
  },
  {
    "question": "Which fictional treatment is strongest when serious control weaknesses are confirmed but services remain stable?",
    "choices": [
      "Targeted reversible correction plus validation, monitoring, and longer-term control improvement.",
      "Broad shutdown without review.",
      "Monitoring only while leaving weaknesses active.",
      "Permanent acceptance because disclosure is unconfirmed."
    ],
    "answer": 0,
    "explanation": "The treatment should reduce current risk proportionately while preserving necessary service."
  },
  {
    "question": "What does a fictional compensating control require?",
    "choices": [
      "A defined purpose, limitation, owner, expiration, monitoring, validation, and replacement plan.",
      "No review because it is temporary.",
      "Permanent acceptance.",
      "Only a policy statement."
    ],
    "answer": 0,
    "explanation": "Temporary controls still require accountability and measurable effectiveness."
  },
  {
    "question": "What should remain consistent across fictional analyst, service, leadership, user, supplier, and portfolio messages?",
    "choices": [
      "The underlying facts, evidence limits, impact statements, actions, validation, status, and residual risk.",
      "The exact wording.",
      "The exact document length.",
      "The amount of technical detail."
    ],
    "answer": 0,
    "explanation": "Audience versions may change structure and detail but not the supported fact base."
  },
  {
    "question": "What belongs at the beginning of a fictional leadership update?",
    "choices": [
      "The current situation, confirmed and possible impact, actions, service state, decision needed, and next update.",
      "Every raw technical field.",
      "A long event timeline.",
      "Unexplained acronyms."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be immediately decision-ready."
  },
  {
    "question": "How should one confirmed fictional link click be communicated to the user?",
    "choices": [
      "State the click, current evidence limits, required safe action, support path, and next update without claiming compromise.",
      "State that the account was definitely taken over.",
      "Say nothing happened.",
      "Include other users' private details."
    ],
    "answer": 0,
    "explanation": "The message should preserve both the confirmed interaction and impact limits."
  },
  {
    "question": "What makes a fictional action request clear?",
    "choices": [
      "It identifies the exact action, authorized owner, deadline, evidence needed, response channel, and validation.",
      "It says please investigate.",
      "It includes a severe title.",
      "It avoids naming an owner."
    ],
    "answer": 0,
    "explanation": "A clear request tells the recipient what to do and how success will be confirmed."
  },
  {
    "question": "What is the strongest repair for repeated ticket-equals-validation errors?",
    "choices": [
      "Add measurable effective-state, service, source, user, owner, monitoring, communication, and residual-risk checks to several mixed artifacts.",
      "Memorize the word validation.",
      "Close fewer tickets.",
      "Remove all corrective actions."
    ],
    "answer": 0,
    "explanation": "The repair should practice the full validation discipline."
  },
  {
    "question": "When may a fictional learner begin the final capstone?",
    "choices": [
      "After no major safety or foundational blocker remains and targeted gaps have evidence-based repair or reassessment plans.",
      "Immediately after reading the readiness page.",
      "Only after every domain reaches perfect performance.",
      "Whenever the portfolio looks polished."
    ],
    "answer": 0,
    "explanation": "Capstone entry should be evidence-based and realistic."
  },
  {
    "question": "How should a fictional Windows maintenance task be reviewed?",
    "choices": [
      "Compare it with the approved baseline, owner record, timing, service account, and conflicting evidence before concluding.",
      "Treat it as compromise because the task name is unfamiliar.",
      "Ignore every service-account task.",
      "Merge it with the phishing case."
    ],
    "answer": 0,
    "explanation": "Context and baseline evidence are required."
  },
  {
    "question": "When may a fictional coordinated response transition to monitored follow-up?",
    "choices": [
      "After required access, configuration, source, user, service, owner, communication, monitoring, and residual-risk checks are validated.",
      "When the dashboard becomes quiet.",
      "When every ticket is marked complete.",
      "When no outage is visible."
    ],
    "answer": 0,
    "explanation": "Transition requires evidence-based closure criteria."
  },
  {
    "question": "What makes the entire fictional Intermediate Capstone and Portfolio package safe to share?",
    "choices": [
      "Every organization, system, identity, log, message, supplier, incident, date, score, action, and outcome is invented.",
      "Only passwords are removed.",
      "Real records are shortened.",
      "The organization name is changed while other details remain."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required for portfolio safety."
  }
];
const masteryReview = [
  {
    "domain": "Knowledge and readiness",
    "review": "Can you explain fictional Intermediate concepts and apply them to new evidence rather than relying on memorized answer patterns?",
    "evidence": "Quiz results, retrieval practice, mixed scenarios, error log, and delayed reassessment."
  },
  {
    "domain": "Evidence and case boundaries",
    "review": "Can you separate fictional records by systems, identities, sources, owners, actions, and impact limits?",
    "evidence": "Evidence register, normalized timeline, case map, relationship matrix, and findings."
  },
  {
    "domain": "Reporting and visual explanation",
    "review": "Can you create a fictional incident report and security diagram that preserve traceability, uncertainty, ownership, accessibility, and privacy?",
    "evidence": "Incident report, evidence appendix, diagram package, quality review, and revision history."
  },
  {
    "domain": "Risk and decision-making",
    "review": "Can you compare fictional treatment options and write a proportionate recommendation with owners, deadlines, validation, and residual risk?",
    "evidence": "Risk statement, option comparison, recommendation, implementation plan, and reassessment schedule."
  },
  {
    "domain": "Audience communication",
    "review": "Can you explain one fictional fact set to technical, service, leadership, user, supplier, teacher, and portfolio audiences without changing the facts?",
    "evidence": "Audience matrix, approved fact set, message package, consistency review, and communication log."
  },
  {
    "domain": "Validation and closure",
    "review": "Can you distinguish fictional proposed, authorized, completed, failed, rolled-back, and validated actions?",
    "evidence": "Decision register, validation matrix, service tests, source-health checks, owner signoff, and residual-risk statement."
  },
  {
    "domain": "Portfolio quality",
    "review": "Can you defend the fictional artifact purpose, learning claim, evidence, decisions, limitations, validation, revision, reflection, and safety?",
    "evidence": "Portfolio package, artifact-defense notes, reviewer questions, reflection, and safety checklist."
  },
  {
    "domain": "Safe defensive practice",
    "review": "Does every fictional task remain defensive, non-operational, authorized, privacy-safe, and fully invented?",
    "evidence": "Readiness checks, lab boundaries, privacy review, fictionalization statement, and reviewer confirmation."
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
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Back to Module
      </Link>
    </div>
  );
}

export default function IntermediateCapstoneAndPortfolioModuleTestPage() {
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
              Module I17
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-200">
              Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              25 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17 Intermediate Capstone and Portfolio Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete twenty-five questions covering fictional readiness,
            portfolio construction, incident reporting, security diagrams, risk
            recommendations, technical communication, final review, and the
            integrated Intermediate capstone.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Module-Test Readiness"
          items={[
            "I completed I17.1 through I17.8 and reviewed the fictional artifacts from each lesson.",
            "I can distinguish fictional observations, conclusions, alternatives, confidence, impact, actions, validation, and residual risk.",
            "I can preserve fictional case boundaries, ownership, source limits, and audience consistency.",
            "I will answer from the supplied fictional defensive concepts rather than real systems or private material.",
            "I understand that the quiz reveals answers and explanations only after I make each choice.",
          ]}
        />

        <SectionCard eyebrow="Assessment Rules" title="How to Complete the I17 Module Test">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Question count", "Answer all 25 questions in the single quiz below."],
              ["Evidence habit", "Choose the option best supported by fictional evidence, ownership, limits, and validation."],
              ["Impact language", "Separate possible exposure, confirmed access, confirmed impact, and residual uncertainty."],
              ["Decision quality", "Prefer proportionate, authorized, reversible, service-aware, and measurable defensive actions."],
              ["Portfolio safety", "Reject options that use real credentials, systems, logs, messages, incidents, or private information."],
              ["Review method", "Read the explanation after each answer and record any recurring misconception for revision."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="I17 Module Test: Exactly 25 Questions"
          questions={questions}
        />

        <SectionCard eyebrow="Score Guide" title="Interpret Your Result">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["23–25 correct", "Strong I17 mastery. Review any missed explanation and preserve the strongest fictional portfolio evidence."],
              ["20–22 correct", "Solid readiness. Complete targeted review of the missed domains before finalizing the portfolio."],
              ["16–19 correct", "Developing readiness. Revisit the related lessons, complete mixed scenarios, and reassess."],
              ["0–15 correct", "Foundation review needed. Rebuild the weakest concepts before treating the capstone package as complete."],
            ].map(([score, guidance]) => (
              <div
                key={score}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-200">{score}</h3>
                <p className="mt-2 text-sm leading-6">{guidance}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 leading-7 text-cyan-50">
            A score is one evidence source. Final readiness should also include
            fictional labs, reports, diagrams, recommendations, communications,
            validation records, reflection, revisions, and artifact-defense
            performance.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Mastery Review
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Domains to Review after the Test
          </h2>

          <div className="mt-6 grid gap-5">
            {masteryReview.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.domain}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.review}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Evidence to check
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="I17 Final Defender Checklist"
          items={[
  "I can evaluate fictional readiness using several forms of evidence rather than one score.",
  "I can preserve fictional case boundaries and avoid treating shared timing as common cause.",
  "I can build a fictional evidence register with timestamps, source health, owners, relevance, and limitations.",
  "I can distinguish fictional observations, conclusions, alternatives, confidence, potential impact, confirmed impact, and unknowns.",
  "I can write a fictional incident report with scope, timeline, findings, decisions, communications, recovery, validation, and residual risk.",
  "I can create a fictional security diagram with purpose, legend, trust boundaries, flows, evidence, control states, owners, risks, uncertainty, and accessibility.",
  "I can create a fictional risk recommendation with options, tradeoffs, authority, deadlines, validation, and post-treatment residual risk.",
  "I can explain one fictional fact set clearly to several audiences without changing the supported facts.",
  "I can distinguish fictional action completion from validated outcome, closure, and zero risk.",
  "I can build and defend a fictional portfolio package with evidence, revision, reflection, privacy, and safety review.",
  "I will not use real credentials, systems, logs, messages, incidents, suppliers, employee data, school records, screenshots, or confidential material."
]}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Check"
          prompt="Review your fictional I17 portfolio package. Confirm that it includes the knowledge-review evidence, defender artifact, incident report, security diagrams, risk recommendation, technical communication package, final readiness review, capstone case package, validation records, quality checks, revision history, reflection, artifact-defense notes, and portfolio-safety statement."
          tips={[
            "Use only fully fictional organizations, systems, identities, evidence, scores, incidents, suppliers, dates, actions, and outcomes.",
            "Make every learning claim traceable to selected evidence and explanation.",
            "Check that facts, impact limits, status, actions, validation, and residual risk remain consistent across artifacts.",
            "Document what changed after feedback and which skill should improve next.",
          ]}
        />

        <KeyTakeaways takeaways={[
  "Intermediate readiness requires demonstrated knowledge, application, communication, validation, transfer, ethics, and portfolio quality.",
  "Shared timing may justify coordination but does not prove one common cause.",
  "Reports and diagrams must preserve scope, evidence traceability, uncertainty, ownership, and impact limits.",
  "Risk recommendations should compare meaningful options and choose proportionate treatment.",
  "Audience adaptation changes structure and detail without changing the supported facts.",
  "Completed actions, validated outcomes, closure, and zero residual risk are different concepts.",
  "All capstone and portfolio work must be fully fictional, defensive, privacy-safe, and authorized."
]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Return to I17
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