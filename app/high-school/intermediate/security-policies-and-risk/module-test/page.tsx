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
const modulePath = `${trackPath}/security-policies-and-risk`;

const questions = [
  {
    "question": "What is the main purpose of fictional security governance?",
    "choices": [
      "Connect leadership, authority, accountability, policy, controls, evidence, risk decisions, and review to organizational goals.",
      "Create the largest possible number of documents.",
      "Give every decision to technical staff.",
      "Replace all operational controls with meetings."
    ],
    "answer": 0,
    "explanation": "Governance connects organizational direction to accountable security decisions and evidence."
  },
  {
    "question": "Who should normally accept significant fictional residual business risk?",
    "choices": [
      "An authorized business risk owner or leadership decision-maker.",
      "Any analyst who discovers the issue.",
      "The control operator automatically.",
      "The supplier associated with the risk."
    ],
    "answer": 0,
    "explanation": "Residual-risk acceptance is a business decision requiring documented authority."
  },
  {
    "question": "Which statement correctly distinguishes fictional policy, standard, and procedure?",
    "choices": [
      "Policy states direction, a standard defines measurable mandatory requirements, and a procedure explains execution steps.",
      "A policy is optional, a standard is a suggestion, and a procedure accepts risk.",
      "All three are identical.",
      "Only procedures require owners."
    ],
    "answer": 0,
    "explanation": "The hierarchy moves from direction to measurable requirement to repeatable operation."
  },
  {
    "question": "What makes a fictional risk scenario complete?",
    "choices": [
      "It connects an asset, threat, vulnerability or gap, exposure, control condition, event path, and potential consequence.",
      "It contains only a severity score.",
      "It names only the threat actor.",
      "It assumes a confirmed incident occurred."
    ],
    "answer": 0,
    "explanation": "A structured scenario explains how a possible event could affect something of value."
  },
  {
    "question": "What is the difference between fictional inherent and residual risk?",
    "choices": [
      "Inherent risk is assessed before current controls, while residual risk is assessed after current controls and limitations are considered.",
      "Residual risk is always zero.",
      "Inherent risk applies only to suppliers.",
      "They are the same value with different names."
    ],
    "answer": 0,
    "explanation": "The two estimates help show the effect and limits of current controls."
  },
  {
    "question": "Why should fictional evidence confidence be recorded separately from risk level?",
    "choices": [
      "A risk may be high even when evidence about likelihood, impact, or scope is incomplete.",
      "Confidence automatically replaces impact.",
      "Low confidence means the risk should be ignored.",
      "High confidence proves a breach occurred."
    ],
    "answer": 0,
    "explanation": "Risk severity and evidence strength answer different questions."
  },
  {
    "question": "What is the purpose of a fictional business-impact analysis?",
    "choices": [
      "Identify critical activities, dependencies, disruption consequences, recovery priorities, and continuity decisions.",
      "List only servers and devices.",
      "Predict the exact date of a future outage.",
      "Replace all risk treatment decisions."
    ],
    "answer": 0,
    "explanation": "A BIA connects business needs, dependencies, consequences, and recovery priorities."
  },
  {
    "question": "What is the difference between fictional RTO and RPO?",
    "choices": [
      "RTO is the target time to restore service, while RPO is the maximum acceptable data-loss window.",
      "RTO is backup retention and RPO is service ownership.",
      "They are identical.",
      "RPO applies only to suppliers."
    ],
    "answer": 0,
    "explanation": "RTO measures restoration time; RPO measures acceptable data loss in time."
  },
  {
    "question": "What does a fictional missing business recovery owner prove?",
    "choices": [
      "Business decision authority is unclear, but technical recovery failure is not automatically proven.",
      "The service will definitely fail.",
      "A confirmed outage already occurred.",
      "The technical procedure has no value."
    ],
    "answer": 0,
    "explanation": "The evidence supports a governance gap while preserving technical uncertainty."
  },
  {
    "question": "Which fictional asset usually deserves the highest recovery priority?",
    "choices": [
      "The asset whose disruption most strongly affects critical users, services, dependencies, deadlines, and recovery objectives.",
      "The newest asset.",
      "The most expensive asset only.",
      "The asset with the most technical features."
    ],
    "answer": 0,
    "explanation": "Recovery priority should follow business criticality and dependency impact."
  },
  {
    "question": "Which set lists valid fictional risk-treatment options?",
    "choices": [
      "Avoid, reduce, transfer, accept, and monitor.",
      "Ignore, hide, delay, delete, and blame.",
      "Detect, classify, encrypt, and archive only.",
      "Accept every risk or remove every service."
    ],
    "answer": 0,
    "explanation": "These five options represent the main treatment choices used in the module."
  },
  {
    "question": "What does fictional risk transfer accomplish?",
    "choices": [
      "It moves part of a consequence or operational duty to another party while the organization retains oversight and residual risk.",
      "It removes all accountability.",
      "It guarantees the supplier will prevent incidents.",
      "It eliminates the need for monitoring and recovery."
    ],
    "answer": 0,
    "explanation": "Transfer changes who handles part of the risk but cannot remove all organizational responsibility."
  },
  {
    "question": "What makes a fictional compensating control defensible?",
    "choices": [
      "It addresses the same control objective with defined scope, evidence, ownership, monitoring, effectiveness, and residual-risk review.",
      "It is cheaper than the preferred control.",
      "It has no expiration or owner.",
      "It avoids testing."
    ],
    "answer": 0,
    "explanation": "A compensating control must meaningfully protect the original objective."
  },
  {
    "question": "What should happen before a major fictional control change?",
    "choices": [
      "Confirm dependencies, authority, staged testing, expected allowed and denied outcomes, monitoring, communication, and rollback.",
      "Deploy globally immediately.",
      "Delete the prior configuration first.",
      "Assume business functions will continue."
    ],
    "answer": 0,
    "explanation": "Safe implementation requires dependency-aware validation and a reversal plan."
  },
  {
    "question": "What is the strongest conclusion after a fictional control implementation ticket is completed?",
    "choices": [
      "The change was implemented, but control effectiveness still requires validation, monitoring, business checks, and residual-risk review.",
      "The risk is automatically eliminated.",
      "Every related control now works.",
      "No further evidence is needed."
    ],
    "answer": 0,
    "explanation": "Implementation is not the same as proven effectiveness."
  },
  {
    "question": "What makes a fictional exception defensible?",
    "choices": [
      "Exact requirement, business reason, narrow scope, compensating controls, residual risk, authority, expiration, monitoring, validation, and sunset plan.",
      "A note saying temporary.",
      "Automatic renewal with no review.",
      "Approval by the requester alone."
    ],
    "answer": 0,
    "explanation": "A defensible exception is controlled, time-bound, owned, and reviewable."
  },
  {
    "question": "What does an expired fictional supplier exception with an active account prove?",
    "choices": [
      "The approval and access require immediate review, but misuse and impact are not proven.",
      "The supplier stole data.",
      "A confirmed breach occurred.",
      "The account is harmless."
    ],
    "answer": 0,
    "explanation": "The evidence supports a governance and access gap, not unsupported incident claims."
  },
  {
    "question": "Why should fictional exceptions have expiration dates?",
    "choices": [
      "To force reassessment, prevent permanent unmanaged deviations, and support renewal or sunset decisions.",
      "Expiration proves the risk disappeared.",
      "Only supplier exceptions need dates.",
      "Dates replace monitoring."
    ],
    "answer": 0,
    "explanation": "Expiration keeps temporary decisions from becoming invisible permanent conditions."
  },
  {
    "question": "What is a fictional fourth party?",
    "choices": [
      "A subcontractor, platform, component, or service used by a direct supplier to deliver its service.",
      "The organization’s internal security team.",
      "Any end user.",
      "A second contract reviewer."
    ],
    "answer": 0,
    "explanation": "Fourth parties are dependencies behind the direct supplier relationship."
  },
  {
    "question": "Why is fictional supplier concentration risk important?",
    "choices": [
      "Several critical services may be affected by one provider, region, platform, identity dependency, or specialized capability.",
      "Concentration guarantees an outage.",
      "Only small suppliers create concentration.",
      "It matters only after contract termination."
    ],
    "answer": 0,
    "explanation": "Shared supplier dependencies can expand disruption and recovery impact."
  },
  {
    "question": "What should a fictional supplier exit plan include?",
    "choices": [
      "Access removal, data export or deletion, integration shutdown, key and account closure, evidence preservation, knowledge transfer, continuity, validation, and owner signoff.",
      "Only contract cancellation.",
      "Only deleting one account.",
      "No testing or monitoring."
    ],
    "answer": 0,
    "explanation": "Safe exit covers technical, data, operational, evidence, and business dependencies."
  },
  {
    "question": "What is the difference between fictional control coverage and control effectiveness?",
    "choices": [
      "Coverage shows where a control is present, while effectiveness shows whether it operates and reduces the intended risk.",
      "They are identical.",
      "Coverage always proves effectiveness.",
      "Effectiveness applies only after an incident."
    ],
    "answer": 0,
    "explanation": "Presence does not automatically prove successful operation or risk reduction."
  },
  {
    "question": "What does a fictional ninety-eight percent compliance rate prove when the denominator and exclusions are unclear?",
    "choices": [
      "The measured scope may perform strongly, but organization-wide interpretation is unsupported.",
      "The organization is ninety-eight percent secure.",
      "Every system is compliant.",
      "No risks remain."
    ],
    "answer": 0,
    "explanation": "The value may be valid within scope, but broad interpretation requires a defined population."
  },
  {
    "question": "What belongs in a fictional leadership security report?",
    "choices": [
      "Top risks, business meaning, trends, control health, uncertainty, decisions, owners, deadlines, and required actions.",
      "Only raw log counts.",
      "Only favorable percentages.",
      "Every technical event from every system."
    ],
    "answer": 0,
    "explanation": "Leadership reporting should be concise, decision-ready, balanced, and business-connected."
  },
  {
    "question": "What makes the complete fictional I14 governance and risk package defensible?",
    "choices": [
      "It connects governance, assets, evidence, risk, treatment, policies, exceptions, suppliers, metrics, ownership, validation, limitations, decisions, and reassessment.",
      "It hides uncertainty and uses one overall score.",
      "It treats every possible impact as confirmed.",
      "It uses real private organizational records."
    ],
    "answer": 0,
    "explanation": "The full package should show a transparent evidence-to-decision chain across all I14 topics."
  }
];
const masteryReview = [
  {
    "area": "I14.1 Governance and policy foundations",
    "check": "Distinguish authority, accountability, policy ownership, control ownership, risk ownership, escalation, and review.",
    "review": "Revisit I14.1 when decision rights or governance roles are unclear."
  },
  {
    "area": "I14.2 Risk identification and assessment",
    "check": "Write a complete risk scenario and separate risk level from evidence confidence.",
    "review": "Revisit I14.2 when a score appears without evidence, assumptions, alternatives, and limits."
  },
  {
    "area": "I14.3 Asset, data, and business impact",
    "check": "Connect criticality, dependencies, RTO, RPO, minimum service, and recovery ownership.",
    "review": "Revisit I14.3 when recovery priorities rely only on technical preference."
  },
  {
    "area": "I14.4 Treatment and controls",
    "check": "Compare treatment options and validate business fit, dependencies, rollback, effectiveness, and residual risk.",
    "review": "Revisit I14.4 when implementation is treated as proof of effectiveness."
  },
  {
    "area": "I14.5 Standards, procedures, and exceptions",
    "check": "Distinguish document layers and build controlled, time-bound exceptions.",
    "review": "Revisit I14.5 when deviations lack scope, authority, monitoring, expiration, or sunset plans."
  },
  {
    "area": "I14.6 Third-party and supply-chain risk",
    "check": "Map suppliers, fourth parties, data, access, contracts, concentration, monitoring, recovery, and exit.",
    "review": "Revisit I14.6 when one report or contract is treated as complete assurance."
  },
  {
    "area": "I14.7 Metrics, reporting, and review",
    "check": "Define purpose, scope, numerator, denominator, exclusions, source health, confidence, and decision use.",
    "review": "Revisit I14.7 when percentages or dashboard colors are treated as conclusions."
  },
  {
    "area": "I14.8 Integrated lab",
    "check": "Prioritize active exposure, missing authority, recovery uncertainty, supplier dependencies, evidence limits, validation, and closure.",
    "review": "Revisit I14.8 when the final package lacks sequencing, ownership, or reassessment."
  }
];
const scoreGuide = [
  [
    "23–25 correct",
    "Excellent mastery",
    "You can connect I14 governance, risk, controls, suppliers, metrics, and leadership decisions with strong evidence discipline."
  ],
  [
    "20–22 correct",
    "Strong mastery",
    "Review the few areas where ownership, evidence limits, or treatment choices were unclear."
  ],
  [
    "17–19 correct",
    "Developing mastery",
    "Revisit the matching lessons and strengthen risk scenarios, supplier lifecycle, exceptions, and metric definitions."
  ],
  [
    "13–16 correct",
    "Partial mastery",
    "Complete a structured review of I14.1 through I14.8 before moving forward."
  ],
  [
    "0–12 correct",
    "Rebuild foundations",
    "Return to the lesson workflows, scenario labs, checklists, and portfolio artifacts in order."
  ]
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function ModuleNavigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={`${modulePath}/security-policies-and-risk-lab`} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Back to I14.8</Link>
      <Link href={modulePath} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Module Homepage</Link>
      <Link href={trackPath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Intermediate Track</Link>
    </div>
  );
}

export default function SecurityPoliciesAndRiskModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I14</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">25-Question Module Test</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">I14 Security Policies and Risk Module Test</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Test your mastery of fictional governance, risk assessment, business impact, treatment, controls, standards, exceptions, third-party risk, metrics, reporting, ownership, validation, and review.</p>
          <div className="mt-8"><ModuleNavigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck title="Before You Begin" items={[
          "I completed or reviewed I14.1 through I14.8.",
          "I understand that every organization, system, supplier, identity, record, risk, incident, metric, and decision in this assessment is fictional.",
          "I will answer each question before revealing the correct answer and explanation.",
          "I will separate control gaps, potential impact, confirmed impact, and confirmed incidents.",
          "I will use the score guide and mastery review to identify which lessons need another pass.",
        ]} />

        <SectionCard eyebrow="Assessment Rules" title="Complete One Exact 25-Question Assessment">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Answer all 25 questions in the single quiz below.",
              "Choose one answer before revealing the explanation.",
              "Use only the fictional evidence and concepts from Module I14.",
              "Do not assume missing evidence proves compromise, intent, outage, or impact.",
              "Record your total score after completing every question.",
              "Use the mastery review to revisit the lesson connected to each missed concept.",
            ].map((rule, index) => (
              <div key={rule} className="flex gap-3 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-cyan-50">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-300 font-black text-slate-950">{index + 1}</span>
                <p className="text-sm font-semibold leading-6">{rule}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz title="I14 Module Test: 25 Questions" questions={questions} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Score Guide</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Interpret Your Result</h2>
          <div className="mt-6 grid gap-4">
            {scoreGuide.map(([score, level, nextStep]) => (
              <article key={score} className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.25fr_0.35fr_1fr]">
                <p className="font-black text-cyan-200">{score}</p>
                <p className="font-black text-white">{level}</p>
                <p className="text-sm leading-6 text-slate-300">{nextStep}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Mastery Review</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Match Missed Questions to the Right Lesson</h2>
          <div className="mt-6 grid gap-5">
            {masteryReview.map((item, index) => (
              <article key={item.area} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <h3 className="text-lg font-black text-cyan-100">{item.area}</h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Mastery check</p><p className="mt-2 text-sm leading-6">{item.check}</p></div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Review guidance</p><p className="mt-2 text-sm leading-6">{item.review}</p></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist title="I14 Module Mastery Checklist" items={[
          "I can explain fictional governance, authority, accountability, ownership, policy hierarchy, escalation, and review.",
          "I can write a fictional risk scenario with assets, threats, vulnerabilities, exposure, controls, likelihood, impact, confidence, and limits.",
          "I can connect fictional services, data, dependencies, criticality, RTO, RPO, minimum service, and recovery priorities.",
          "I can compare fictional avoid, reduce, transfer, accept, and monitor treatment choices.",
          "I can distinguish fictional control implementation from validated control effectiveness.",
          "I can distinguish policies, standards, baselines, procedures, guidelines, controls, exceptions, and waivers.",
          "I can evaluate fictional supplier services, data, access, fourth parties, concentration, contracts, monitoring, recovery, and exit.",
          "I can define fictional metrics with purpose, scope, numerator, denominator, exclusions, source health, targets, thresholds, confidence, and decision use.",
          "I can preserve the difference between control gaps, risk, potential impact, confirmed impact, and confirmed incidents.",
          "I can assign fictional owners, deadlines, validation, residual-risk decisions, closure criteria, and reassessment triggers.",
        ]} />

        <PortfolioPrompt title="Final Module Portfolio Check" prompt="Review your fictional I14 Security Policies and Risk Package. Confirm that it contains a governance charter, responsibility matrix, asset and BIA register, evidence-quality register, risk register, treatment plan, policy hierarchy, exception register, supplier review, metrics catalog, priority action plan, validation and closure criteria, reassessment triggers, technical report, leadership summary, reflection, and portfolio-safety statement." tips={[
          "Every finding should link to exact fictional evidence, confidence, alternatives, and limitations.",
          "Every risk should have an authorized owner, treatment, deadline, and review trigger.",
          "Every control should have an objective, business fit, evidence, validation, monitoring, and closure criteria.",
          "Every artifact must remain fully fictional and privacy-safe.",
        ]} />

        <KeyTakeaways takeaways={[
          "Governance defines who has authority and accountability for security and risk decisions.",
          "Risk assessment connects assets, scenarios, evidence, controls, likelihood, impact, uncertainty, ownership, and review.",
          "Business-impact analysis guides dependency-aware recovery priorities.",
          "Treatment decisions require proportionate controls, validation, business fit, and residual-risk ownership.",
          "Exceptions must be narrow, controlled, approved, time-bound, monitored, and removable.",
          "Supplier oversight covers the full lifecycle from business need through exit.",
          "Metrics become useful only when their definitions, sources, limits, meaning, owners, and decisions are clear.",
          "A defensible final package preserves both serious gaps and the limits of what the evidence proves.",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Module Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Review or Return to the Intermediate Track</h2>
          <div className="mt-5"><ModuleNavigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}