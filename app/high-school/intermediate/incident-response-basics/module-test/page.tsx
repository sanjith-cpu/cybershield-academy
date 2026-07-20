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
const modulePath = `${trackPath}/incident-response-basics`;
const previousLesson = `${modulePath}/incident-response-basics-lab`;

const questions = [
  {
    "question": "What should a fictional incident-response program define before an incident occurs?",
    "choices": [
      "Roles, authority, contacts, evidence sources, playbooks, communication paths, continuity options, decision gates, and closure criteria.",
      "Only the preferred security tool.",
      "Only the final report format.",
      "Only the names of technical staff."
    ],
    "answer": 0,
    "explanation": "Preparation establishes the people, evidence, authority, and workflows needed for calm, coordinated response."
  },
  {
    "question": "Why should evidence-source health be tested during readiness?",
    "choices": [
      "A quiet dashboard cannot be trusted if records are delayed, incomplete, inaccessible, or misparsed.",
      "Healthy evidence sources guarantee that no incident will occur.",
      "Source health matters only during final closure.",
      "Testing source health removes the need for alternate evidence."
    ],
    "answer": 0,
    "explanation": "Responders must know whether a source is reliable before using silence or missing records as evidence."
  },
  {
    "question": "Why is business-continuity planning part of incident-response readiness?",
    "choices": [
      "Containment or recovery actions may affect critical workflows, so approved fallback and support plans should exist in advance.",
      "Continuity replaces technical containment.",
      "Business owners should control every technical decision.",
      "Continuity guarantees zero service interruption."
    ],
    "answer": 0,
    "explanation": "Strong response reduces risk while protecting essential services and users."
  },
  {
    "question": "What should happen first when a fictional alert or user report enters the response process?",
    "choices": [
      "Preserve the original signal with its source, identifier, timestamp, raw context, severity, and intake record.",
      "Declare a critical incident.",
      "Delete repeated fields.",
      "Send a district-wide notification."
    ],
    "answer": 0,
    "explanation": "The original signal should be preserved before it is filtered, summarized, or interpreted."
  },
  {
    "question": "Why is a high alert severity not enough to confirm a high-severity incident?",
    "choices": [
      "Incident severity also depends on scope, consequence, confidence, business impact, controls, and coordination needs.",
      "Alert severity is never useful.",
      "Only leadership may assign any severity.",
      "Every alert should be treated as low priority."
    ],
    "answer": 0,
    "explanation": "Tool severity is one input, not a complete incident assessment."
  },
  {
    "question": "Which classification best fits unusual fictional activity when important evidence is still missing?",
    "choices": [
      "Suspicious activity or insufficient evidence, with collection actions and reassessment triggers.",
      "Confirmed organization-wide breach.",
      "Benign positive without review.",
      "Closed because the evidence is incomplete."
    ],
    "answer": 0,
    "explanation": "The classification should match current evidence and keep uncertainty visible."
  },
  {
    "question": "What is the strongest description of fictional incident scope?",
    "choices": [
      "A living evidence-based model of confirmed affected, suspected, related, unknown, reviewed-unaffected, contained, and recovered objects.",
      "The hostname from the first alert.",
      "Every system using the same vendor.",
      "Only public-facing production systems."
    ],
    "answer": 0,
    "explanation": "Scope changes as evidence improves and should cover technical, business, identity, data, and time dimensions."
  },
  {
    "question": "When may a fictional asset be marked reviewed-unaffected?",
    "choices": [
      "When reliable evidence supports that conclusion within a defined asset, identity, workflow, time window, and source-coverage boundary.",
      "When its dashboard appears quiet.",
      "When it has a different hostname.",
      "When an owner prefers not to include it."
    ],
    "answer": 0,
    "explanation": "Unaffected conclusions should remain limited to what was actually reviewed."
  },
  {
    "question": "What makes fictional containment defensible?",
    "choices": [
      "It is authorized, narrow, tested, monitored, reversible, evidence-preserving, continuity-aware, owned, and connected to expiry and exit criteria.",
      "It disables every related system.",
      "It is permanent.",
      "It requires no business review."
    ],
    "answer": 0,
    "explanation": "Containment should reduce the validated risk without unsupported disruption or evidence loss."
  },
  {
    "question": "What should happen when a narrow containment control causes unacceptable business impact?",
    "choices": [
      "Use the documented rollback or adjustment path, preserve evidence, reassess scope and risk, involve the business owner, and record the decision.",
      "Ignore the impact until closure.",
      "Expand the containment automatically.",
      "Delete the containment record."
    ],
    "answer": 0,
    "explanation": "Containment should remain monitored, reversible, coordinated, and responsive to real outcomes."
  },
  {
    "question": "What should an evidence index contain?",
    "choices": [
      "Identifier, source, owner, original and normalized time, scope, integrity, lineage, confidence, limitations, and handling history.",
      "Only filenames.",
      "Only analyst conclusions.",
      "Only the final timeline order."
    ],
    "answer": 0,
    "explanation": "An evidence index connects every important case claim to traceable records and limitations."
  },
  {
    "question": "Why should original and normalized timestamps both be preserved?",
    "choices": [
      "Reviewers need the original source value and the documented conversion used for cross-source comparison.",
      "Normalized time is never useful.",
      "Original time should be deleted after conversion.",
      "Keeping both automatically proves the event order."
    ],
    "answer": 0,
    "explanation": "Preserving both values makes timeline normalization transparent and reproducible."
  },
  {
    "question": "When should a fictional timeline use a time range instead of an exact second?",
    "choices": [
      "When clock drift, delayed delivery, batching, parsing, incomplete records, or conflicts do not support exact precision.",
      "Only for low-severity events.",
      "Never.",
      "Whenever a range looks cleaner."
    ],
    "answer": 0,
    "explanation": "Timeline precision should match the strength of the evidence."
  },
  {
    "question": "What distinguishes fictional eradication from containment?",
    "choices": [
      "Eradication corrects validated root causes, while containment temporarily reduces immediate risk.",
      "They are identical.",
      "Containment always closes the case.",
      "Eradication requires no testing."
    ],
    "answer": 0,
    "explanation": "Containment protects temporarily; eradication removes or corrects the underlying unsafe condition."
  },
  {
    "question": "Which set best represents a known-good fictional recovery baseline?",
    "choices": [
      "Approved source, dependencies, build, artifact, image, identity, configuration, data state, deployment, runtime, and recovery assets.",
      "The latest mutable artifact tag.",
      "Any backup that starts successfully.",
      "The configuration from the original alert."
    ],
    "answer": 0,
    "explanation": "Recovery should use a traceable and verified state across the full delivery and restore chain."
  },
  {
    "question": "Why are positive and negative tests both required before service restoration?",
    "choices": [
      "Positive tests preserve approved workflows, while negative tests prove unauthorized, unsupported, excessive, revoked, old-version, and wrong-scope behavior remains denied.",
      "Negative tests replace positive tests.",
      "Positive tests prove zero future risk.",
      "Only business tests matter."
    ],
    "answer": 0,
    "explanation": "A secure recovery must support legitimate work while protecting the corrected boundary."
  },
  {
    "question": "What is the strongest fictional restoration sequence?",
    "choices": [
      "Isolated validation, limited canary, expanded rollout, business restoration, recovery alignment, observation, and phase exit.",
      "Restore every service at once.",
      "Skip testing and monitor support tickets.",
      "Restore production but leave recovery assets unchanged."
    ],
    "answer": 0,
    "explanation": "Staged restoration limits risk and produces evidence at each recovery gate."
  },
  {
    "question": "What should every fictional incident update separate?",
    "choices": [
      "Confirmed facts, supported conclusions, uncertainty, scope, impact, actions, decisions, requests, owners, and next update.",
      "Only the final conclusion.",
      "Only technical details.",
      "Only leadership decisions."
    ],
    "answer": 0,
    "explanation": "Clear separation helps each audience understand what is known, what is uncertain, and what action is required."
  },
  {
    "question": "What makes a fictional escalation defensible?",
    "choices": [
      "A defined trigger, supporting evidence, scope, urgency, impact, requested decision, owner, deadline, alternatives, and authority path.",
      "A dramatic subject line.",
      "Copying every possible stakeholder.",
      "Using the highest possible severity."
    ],
    "answer": 0,
    "explanation": "Escalation should support a specific authorized decision, resource, or coordination need."
  },
  {
    "question": "What should happen when an earlier fictional incident update is inaccurate?",
    "choices": [
      "Issue a visible correction identifying the earlier statement, what changed, corrected information, and revised evidence or confidence.",
      "Silently edit the original message.",
      "Delete every version.",
      "Ignore the error."
    ],
    "answer": 0,
    "explanation": "Visible correction protects trust and preserves documentation integrity."
  },
  {
    "question": "What is the purpose of a fictional blameless post-incident review?",
    "choices": [
      "Understand evidence, causes, conditions, response quality, strengths, remaining risk, and improvements without personal attack.",
      "Find one person to punish.",
      "Rewrite the timeline to remove uncertainty.",
      "Close every action immediately."
    ],
    "answer": 0,
    "explanation": "A blameless review focuses on system improvement while preserving accountable action ownership."
  },
  {
    "question": "Which statement best separates a direct cause from a contributing condition?",
    "choices": [
      "A direct cause immediately produced the event, while a contributing condition increased likelihood, duration, scope, or impact.",
      "They are always identical.",
      "A contributing condition is never important.",
      "A direct cause requires no evidence."
    ],
    "answer": 0,
    "explanation": "Both matter, but they describe different relationships to the event."
  },
  {
    "question": "What makes a fictional corrective action complete?",
    "choices": [
      "Exact scope, owner, deadline, dependency, evidence, completion criteria, validation, expected risk reduction, escalation, and governance review.",
      "A policy document was edited.",
      "A meeting occurred.",
      "A ticket status changed."
    ],
    "answer": 0,
    "explanation": "Completion requires evidence that the improvement works in practice."
  },
  {
    "question": "When may a fictional incident close with residual risk?",
    "choices": [
      "When the approved closure standard is met and the remaining risk is documented, owned, monitored, approved, and connected to review and reopen triggers.",
      "Whenever service becomes available.",
      "Whenever one leader requests closure.",
      "Only when risk is claimed to be zero."
    ],
    "answer": 0,
    "explanation": "Professional closure can preserve visible, governed residual risk."
  },
  {
    "question": "What is the safest way to create a public portfolio artifact from a fictional incident case?",
    "choices": [
      "Use newly created fictional systems, identities, logs, contacts, timelines, metrics, owners, and organizations while preserving only the defensive reasoning.",
      "Reuse real screenshots after hiding one username.",
      "Publish internal routes and recovery details.",
      "Include private case notes because the project is educational."
    ],
    "answer": 0,
    "explanation": "A portfolio should demonstrate incident-response skill without exposing real systems or private records."
  }
];
const scoreBands = [
  [
    "23–25 correct",
    "Advanced Module Mastery",
    "You can connect readiness, triage, scope, containment, evidence, recovery, communication, improvement, residual risk, and closure across Module I11."
  ],
  [
    "20–22 correct",
    "Strong Readiness",
    "Review missed questions and explain why the strongest answer is better supported than every alternative."
  ],
  [
    "16–19 correct",
    "Developing Readiness",
    "Revisit the matching lessons and repeat the test after completing the mastery checklist."
  ],
  [
    "0–15 correct",
    "More Review Recommended",
    "Focus on evidence quality, scope, proportionate containment, recovery gates, communication, lessons learned, and professional closure."
  ]
];

const reviewAreas = [
  [
    "Lifecycle and readiness",
    "Preparation, roles, authority, contacts, evidence sources, source health, playbooks, continuity, activation, decision gates, and closure standards.",
    "I11.1"
  ],
  [
    "Detection, triage, and assessment",
    "Original signals, correlation, source health, classification, confidence, severity, business context, ownership, and reassessment.",
    "I11.2"
  ],
  [
    "Scope and containment",
    "Affected, suspected, related, unknown, reviewed-unaffected, contained, and recovered scope; authority, continuity, monitoring, rollback, and exit criteria.",
    "I11.3"
  ],
  [
    "Evidence and timeline",
    "Evidence index, original records, source lineage, handling history, time normalization, conflicts, gaps, confidence, and timeline versions.",
    "I11.4"
  ],
  [
    "Eradication and recovery",
    "Root-cause correction, known-good baselines, positive and negative testing, staged restoration, source health, business validation, observation, and rollback.",
    "I11.5"
  ],
  [
    "Communication, review, and closure",
    "Audience-specific updates, escalation, documentation, corrections, blameless review, corrective actions, residual risk, governance, closure, and portfolio safety.",
    "I11.6–I11.8"
  ]
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
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

export default function IncidentResponseBasicsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I11
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Assessment
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I11 Incident Response Basics Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete this twenty-five-question assessment covering incident
            response readiness, detection, triage, classification, scoping,
            containment, evidence preservation, timeline building, eradication,
            recovery, communication, escalation, documentation, post-incident
            review, corrective actions, residual risk, governance, closure, and
            portfolio safety.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed all eight I11 lessons before starting this test.",
            "I will answer each question before revealing the correct answer and explanation.",
            "I will use missed questions to identify which lesson and incident-response area I should review.",
            "I understand that every scenario, account, system, log, file, identity, contact, and organization in this assessment is fictional.",
            "I will not use this test as permission to access, probe, alter, isolate, collect, or inspect any real system or private information.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Rules"
          title="How to Use This Module Test"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
              <h3 className="font-black text-cyan-100">
                Before revealing answers
              </h3>

              <p className="mt-3 leading-7">
                Read the full question, compare all choices, and select the
                strongest evidence-based defensive response.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <h3 className="font-black text-emerald-100">
                After revealing answers
              </h3>

              <p className="mt-3 leading-7">
                Record missed questions, explain why your choice was weaker, and
                connect the correct answer to the matching lesson.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <h3 className="font-black text-yellow-100">Scoring</h3>

              <p className="mt-3 leading-7">
                Give yourself one point for each correct answer. Use the score
                guide only after completing all twenty-five questions.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <h3 className="font-black text-purple-100">
                Professional standard
              </h3>

              <p className="mt-3 leading-7">
                Strong answers preserve exact evidence, bounded scope, source
                health, uncertainty, proportionate controls, legitimate
                workflows, accountable ownership, validation, residual risk,
                and measurable closure.
              </p>
            </div>
          </div>
        </SectionCard>

        <MiniQuiz
          title="I11 Incident Response Basics: 25-Question Module Test"
          questions={questions}
        />

        <SectionCard eyebrow="Score Guide" title="Interpret Your Result">
          <div className="grid gap-4 md:grid-cols-2">
            {scoreBands.map(([range, title, description]) => (
              <div
                key={range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                  {range}
                </p>

                <h3 className="mt-2 text-xl font-black text-white">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Mastery Review"
          title="Connect Missed Questions to the Correct Lessons"
        >
          <div className="grid gap-4">
            {reviewAreas.map(([area, mastery, lessons]) => (
              <div
                key={area}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1.2fr_0.3fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Control area
                  </p>

                  <p className="mt-2 font-black text-cyan-100">{area}</p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Mastery statement
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {mastery}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Review
                  </p>

                  <p className="mt-2 font-black text-emerald-200">
                    {lessons}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="I11 Module Mastery Checklist"
          items={[
            "I can explain incident-response readiness, activation, roles, authority, playbooks, continuity, evidence-source health, and closure standards.",
            "I can preserve original signals and separate facts, conclusions, alternatives, gaps, confidence, severity, scope, impact, actions, and reassessment triggers.",
            "I can build scope across assets, environments, identities, data, files, transactions, services, workflows, owners, time windows, and source coverage.",
            "I can choose containment that is narrow, authorized, reversible, tested, monitored, evidence-preserving, continuity-aware, owned, and time-bounded.",
            "I can preserve evidence identifiers, originals, lineage, handling, timestamps, duplicates, conflicts, gaps, confidence, and timeline versions.",
            "I can distinguish containment from eradication, recovery, observation, post-incident review, corrective action, residual-risk management, and closure.",
            "I can verify approved source, dependencies, build, artifact, image, identity, configuration, deployment, runtime, recovery assets, source health, and rollback.",
            "I can design positive, negative, compatibility, source-health, business, recovery, regression, observation, and rollback tests.",
            "I can tailor technical, business, leadership, support, partner, recovery, correction, handoff, and closure communication without changing the case truth.",
            "I can conduct a blameless review and close actions only after evidence, validation, owner acceptance, governance review, residual-risk visibility, and recurrence monitoring.",
          ]}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Check"
          prompt="Create a one-page fictional Incident Response Basics Summary connecting readiness, one original signal, source health, initial assessment, scope, containment, evidence preservation, timeline, communication, eradication, recovery, post-incident review, one corrective action, residual risk, closure criteria, and owner approval."
          tips={[
            "Use only fictional systems, users, identities, files, routes, logs, contacts, owners, metrics, timelines, actions, and organizations.",
            "Separate confirmed facts, supported conclusions, alternatives, uncertainty, scope, business impact, decisions, actions, and residual risk.",
            "Show how evidence changes classification, containment, recovery, communication, lessons, and closure.",
            "Do not include real alerts, screenshots, logs, system names, routes, filenames, credentials, contact lists, incident records, recovery details, or private organizational information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Incident response connects readiness, detection, triage, scope, containment, evidence, recovery, communication, improvement, governance, and closure.",
            "Tool severity, dashboard color, one alert, or one source cannot independently prove complete scope or impact.",
            "Strong containment preserves evidence and continuity while remaining narrow, authorized, monitored, reversible, owned, and open to reassessment.",
            "Evidence preservation and timeline building require original records, lineage, handling history, source health, timestamps, conflicts, gaps, confidence, and visible revisions.",
            "Recovery should correct validated causes and prove approved and denied behavior across production and recovery through staged restoration and observation.",
            "Communication, lessons learned, corrective actions, residual risk, governance, and closure should remain accurate, traceable, validated, and portfolio-safe.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Return to Module I11
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