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
const modulePath = `${trackPath}/security-operations-basics`;
const previousPage = `${modulePath}/security-operations-integrated-lab`;

const questions = [
  {
    "question": "What is the primary purpose of a fictional Security Operations Center?",
    "choices": [
      "Coordinate monitoring, triage, investigation, response support, communication, validation, and improvement.",
      "Replace every service owner and system administrator.",
      "Close as many alerts as possible regardless of evidence.",
      "Declare every high-severity alert an incident."
    ],
    "answer": 0,
    "explanation": "A SOC coordinates evidence-based defensive operations across people, processes, services, and decisions."
  },
  {
    "question": "Which fictional SOC role normally owns initial alert validation and basic enrichment?",
    "choices": [
      "Tier 1 analyst.",
      "Chief financial officer.",
      "Supplier salesperson.",
      "Application end user."
    ],
    "answer": 0,
    "explanation": "Tier 1 analysts commonly perform initial triage, enrichment, documentation, and routing."
  },
  {
    "question": "What is the difference between fictional alert severity and triage priority?",
    "choices": [
      "Severity is usually assigned by the tool, while priority is an analyst decision based on evidence, context, risk, and urgency.",
      "They are always identical.",
      "Priority is assigned before an alert exists.",
      "Severity is a final business-risk acceptance decision."
    ],
    "answer": 0,
    "explanation": "Triage priority should not simply copy the detection label."
  },
  {
    "question": "Which fictional condition should normally receive the highest immediate priority?",
    "choices": [
      "An active supplier account with expired approval and access to a confidential service.",
      "A historical duplicate linked to a closed case.",
      "A documented password-reset lockout.",
      "A broad external warning with no local relevance."
    ],
    "answer": 0,
    "explanation": "Active unsupported capability creates a current risk requiring owner action."
  },
  {
    "question": "Why must fictional source health be checked during triage?",
    "choices": [
      "A delayed, stale, incomplete, duplicated, or misparsed source may not support the intended conclusion.",
      "Source health proves malicious intent.",
      "Healthy sources eliminate all uncertainty.",
      "Only incident responders need source information."
    ],
    "answer": 0,
    "explanation": "Evidence quality depends on whether the source can reliably support the claim."
  },
  {
    "question": "What should an analyst do when fictional supporting evidence is delayed?",
    "choices": [
      "Document the limitation, use compensating evidence, preserve uncertainty, and continue the appropriate investigation.",
      "Assume the alert is false.",
      "Assume a major incident occurred.",
      "Delete the source requirement."
    ],
    "answer": 0,
    "explanation": "Missing evidence changes confidence and workflow but does not dictate the conclusion."
  },
  {
    "question": "What makes a fictional case record reconstructable?",
    "choices": [
      "Clear scope, owners, evidence references, timeline, findings, actions, decisions, communications, validation, and closure criteria.",
      "A copied alert title.",
      "One paragraph of analyst memory.",
      "A severity label and no timestamps."
    ],
    "answer": 0,
    "explanation": "Another authorized reviewer should be able to understand what happened without guessing."
  },
  {
    "question": "What is the purpose of a fictional evidence register?",
    "choices": [
      "Index evidence identifiers, sources, owners, timestamps, relevance, health, scope, confidence, handling, and limitations.",
      "Store every possible log regardless of relevance.",
      "Replace the case timeline.",
      "Hide conflicting evidence."
    ],
    "answer": 0,
    "explanation": "The register makes evidence traceable and reviewable."
  },
  {
    "question": "Why should fictional event time and alert receipt time be recorded separately?",
    "choices": [
      "Delayed collection or ingestion can otherwise create a false sequence.",
      "The times are always identical.",
      "Receipt time proves intent.",
      "Only leadership reports need timestamps."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages of the evidence lifecycle."
  },
  {
    "question": "How should a fictional hypothesis appear in a case?",
    "choices": [
      "As a possible explanation used to guide evidence collection, clearly labeled as unproven.",
      "As a confirmed finding.",
      "As incident severity.",
      "It should be omitted entirely."
    ],
    "answer": 0,
    "explanation": "Hypotheses support investigation but must remain separate from supported conclusions."
  },
  {
    "question": "When should a fictional duplicate alert be linked to an existing case?",
    "choices": [
      "When it represents the same supported activity and adds no meaningful new scope or evidence.",
      "Whenever the alert titles look similar.",
      "Whenever the queue is busy.",
      "Only when leadership requests it."
    ],
    "answer": 0,
    "explanation": "Duplicate handling requires evidence that the new alert is materially the same event."
  },
  {
    "question": "What should come first in fictional detection engineering?",
    "choices": [
      "A clear defensive objective and decision the detection should support.",
      "The largest available data source.",
      "A high severity label.",
      "A broad allowlist."
    ],
    "answer": 0,
    "explanation": "Detection design begins with the defensive need, not with available data alone."
  },
  {
    "question": "Why are fictional negative tests required for detections?",
    "choices": [
      "They confirm approved or expected behavior does not create unnecessary alerts.",
      "They prove the detection will never miss harmful activity.",
      "They replace positive tests.",
      "They remove the need for source-health monitoring."
    ],
    "answer": 0,
    "explanation": "Negative tests measure unintended matches and operational noise."
  },
  {
    "question": "What is the safest response to repeated fictional maintenance alerts?",
    "choices": [
      "Add narrow approved identity, service, action, and time context with complete testing and rollback.",
      "Suppress all alerts during maintenance.",
      "Delete the detection immediately.",
      "Lower every alert to Low severity."
    ],
    "answer": 0,
    "explanation": "Narrow context reduces noise while preserving detection of out-of-scope behavior."
  },
  {
    "question": "What is fictional detection drift?",
    "choices": [
      "A decline in detection quality caused by changes in systems, data, parsing, identities, services, or business processes.",
      "An increase in case severity.",
      "A completed shift handoff.",
      "A supplier contract renewal."
    ],
    "answer": 0,
    "explanation": "Detections require reassessment because their environment changes."
  },
  {
    "question": "What is the main purpose of fictional escalation?",
    "choices": [
      "Move attention, expertise, authority, urgency, ownership, or decision-making to the correct role.",
      "Send every alert to leadership.",
      "Avoid naming a case owner.",
      "Automatically declare an incident."
    ],
    "answer": 0,
    "explanation": "Escalation should solve a specific ownership, authority, expertise, or urgency need."
  },
  {
    "question": "What should a fictional leadership update contain?",
    "choices": [
      "Supported facts, business meaning, uncertainty, actions, owners, decisions, deadlines, and next update.",
      "Every raw log line.",
      "Only the alert severity.",
      "Unsupported worst-case impact."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be concise, evidence-limited, and decision-ready."
  },
  {
    "question": "What makes a fictional shift handoff complete?",
    "choices": [
      "Scope, evidence, source health, actions, decisions, deadlines, risks, communications, closure criteria, and incoming-owner acknowledgement.",
      "The alert title and severity.",
      "An informal one-sentence message.",
      "Automatic case closure at shift end."
    ],
    "answer": 0,
    "explanation": "A complete handoff preserves continuity and accountability."
  },
  {
    "question": "How should uncertainty appear in fictional security communications?",
    "choices": [
      "Explicitly, with confidence, missing evidence, alternate explanations, and what remains unconfirmed.",
      "It should be removed from leadership messages.",
      "It should be replaced by the worst-case assumption.",
      "It should be mentioned only after closure."
    ],
    "answer": 0,
    "explanation": "Uncertainty is required for accurate defensive decision-making."
  },
  {
    "question": "What makes fictional information threat intelligence rather than raw threat data?",
    "choices": [
      "It is analyzed, relevant, confidence-rated, decision-focused, and connected to a defensive requirement.",
      "It includes one technical indicator.",
      "It comes from an external source.",
      "It is labeled urgent."
    ],
    "answer": 0,
    "explanation": "Threat intelligence improves a defined defensive decision."
  },
  {
    "question": "What does a fictional sector threat bulletin prove about Northbridge?",
    "choices": [
      "It may identify relevant defensive priorities, but it does not prove local compromise.",
      "A confirmed incident occurred.",
      "Every supplier is malicious.",
      "All related services must be shut down."
    ],
    "answer": 0,
    "explanation": "External relevance and local incident evidence are different."
  },
  {
    "question": "What is fictional local validation?",
    "choices": [
      "Checking whether intelligence appears in approved internal evidence or affects local services, identities, assets, suppliers, or controls.",
      "Copying the report into a case.",
      "Trusting the source reputation alone.",
      "Automatically increasing incident severity."
    ],
    "answer": 0,
    "explanation": "Local validation connects intelligence to the actual fictional environment."
  },
  {
    "question": "What makes a fictional SOC metric useful?",
    "choices": [
      "A clear objective, reproducible definition, healthy source, owner, target, threshold, decision path, context, and limitations.",
      "It is easy to count.",
      "It always increases.",
      "It appears on a dashboard."
    ],
    "answer": 0,
    "explanation": "A useful metric supports a real decision and can be reproduced."
  },
  {
    "question": "What is fictional Goodhart risk?",
    "choices": [
      "People may optimize the measured number instead of the real security outcome.",
      "A source may stop reporting.",
      "A case may contain duplicate alerts.",
      "A supplier may miss a deadline."
    ],
    "answer": 0,
    "explanation": "Targets can create unintended behavior when the number becomes the goal."
  },
  {
    "question": "When is a fictional SOC improvement action complete?",
    "choices": [
      "After the intended security and business outcome is validated and residual risk and follow-up are documented.",
      "When the task ticket is marked complete.",
      "When alert volume drops.",
      "When a dashboard turns green."
    ],
    "answer": 0,
    "explanation": "Task completion and outcome validation are different."
  }
];
const masteryAreas = [
  {
    "title": "SOC roles and workflow",
    "description": "Explain Tier 1, Tier 2, Tier 3, detection, telemetry, case, service, supplier, risk, response, communication, and leadership responsibilities."
  },
  {
    "title": "Alert triage and prioritization",
    "description": "Validate sources, gather context, distinguish severity from priority, document evidence limits, and choose a defensible disposition."
  },
  {
    "title": "Case and evidence management",
    "description": "Build reconstructable case records with scope, evidence references, timelines, findings, actions, decisions, communications, validation, and closure."
  },
  {
    "title": "Detection engineering",
    "description": "Connect objectives, data requirements, logic, tests, tuning, versions, staging, monitoring, rollback, and long-term review."
  },
  {
    "title": "Escalation and communication",
    "description": "Route expertise and authority correctly while writing audience-appropriate, evidence-limited, decision-ready messages and handoffs."
  },
  {
    "title": "Threat intelligence",
    "description": "Evaluate provenance, credibility, reliability, timeliness, corroboration, local relevance, confidence, action, expiration, and review."
  },
  {
    "title": "Metrics and improvement",
    "description": "Design reproducible measures, validate sources, identify gaming risk, sample quality, prioritize improvements, and prove outcomes."
  },
  {
    "title": "Integrated security operations",
    "description": "Connect queue review, ownership, evidence, actions, communications, validation, closure, residual risk, and improvement in one workflow."
  }
];
const scoreGuide = [
  {
    "range": "23–25 correct",
    "label": "Advanced module mastery",
    "description": "You can connect fictional SOC evidence, ownership, decisions, communication, validation, and improvement with strong consistency."
  },
  {
    "range": "19–22 correct",
    "label": "Strong operational readiness",
    "description": "You understand the main workflows but should review any missed evidence, authority, detection, intelligence, or metric concepts."
  },
  {
    "range": "15–18 correct",
    "label": "Developing readiness",
    "description": "Revisit the lessons and rebuild the integrated workflow before continuing."
  },
  {
    "range": "0–14 correct",
    "label": "Review required",
    "description": "Return to I15.1 through I15.8 and focus on evidence, priority, ownership, communication, testing, validation, and closure."
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
        href={previousPage}
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

export default function SecurityOperationsBasicsModuleTestPage() {
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
              Module I15
            </span>

            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-200">
              25-Question Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15 Security Operations Basics Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of fictional SOC roles, triage,
            case management, evidence handling, detection engineering,
            escalation, communications, handoffs, threat intelligence, metrics,
            quality review, and continuous improvement.
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
            "I completed or reviewed lessons I15.1 through I15.8.",
            "I understand that every alert, source, case, identity, service, supplier, detection, intelligence record, metric, and decision in this assessment is fictional.",
            "I will distinguish facts, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, priority, ownership, authority, and next action.",
            "I will answer each question before revealing its explanation.",
            "I will use my results to identify exact lessons and portfolio artifacts that need review.",
          ]}
        />

        <SectionCard eyebrow="Assessment Rules" title="How to Complete the Module Test">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Answer all 25 questions.",
              "Choose one best answer for each question.",
              "Read the choices before revealing the explanation.",
              "Do not treat tool severity as final priority or incident status.",
              "Preserve evidence limits and avoid unsupported conclusions.",
              "Review every missed question and connect it to the correct lesson.",
              "Use only the fictional scenarios and concepts provided.",
              "Complete the final portfolio check after scoring.",
            ].map((rule, index) => (
              <div
                key={rule}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Rule {index + 1}
                </p>

                <p className="mt-2 leading-6">{rule}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="I15 Module Test: 25 Questions"
          questions={questions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Score Guide
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Interpret Your Module-Test Result
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {scoreGuide.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.range}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
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
            Eight Areas to Review after the Test
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {masteryAreas.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  Area {index + 1}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="I15 Module Mastery Checklist"
          items={[
            "I can explain fictional SOC roles, responsibilities, shift readiness, ownership, and workflow.",
            "I can distinguish fictional alert severity, triage priority, incident severity, business criticality, confidence, and urgency.",
            "I can validate fictional source health and document evidence gaps without assuming compromise or safety.",
            "I can build fictional case scopes, evidence registers, timelines, findings, actions, decisions, communications, validation, and closure criteria.",
            "I can design fictional detections with objectives, data maps, complete testing, staging, monitoring, versioning, tuning, and rollback.",
            "I can route fictional operational, technical, business, supplier, incident, leadership, emergency, and quality escalations correctly.",
            "I can write fictional technical, owner, supplier, leadership, and shift-handoff communications that preserve facts and uncertainty.",
            "I can evaluate fictional threat intelligence for provenance, credibility, reliability, timeliness, relevance, confidence, action, and expiration.",
            "I can design fictional SOC metrics that combine activity, quality, outcomes, source health, gaming risk, ownership, and validated improvement.",
            "I can connect fictional queue review, evidence, ownership, authority, action, communication, validation, residual risk, closure, and improvement in one integrated workflow.",
          ]}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Check"
          prompt="Review your fictional I15 Security Operations Basics portfolio. Confirm that it includes a SOC operating model, triage package, case and evidence package, detection-engineering record, escalation and handoff package, threat-intelligence note, metrics and improvement package, and integrated SOC lab."
          tips={[
            "Every artifact should use fictional names, systems, identities, suppliers, dates, evidence, alerts, cases, detections, intelligence, metrics, and outcomes.",
            "Every conclusion should distinguish direct facts, supported conclusions, alternatives, missing evidence, confidence, limitations, potential impact, and confirmed impact.",
            "Every action should identify the owner, authority, deadline, communication, rollback, validation, residual risk, and reassessment trigger.",
            "Remove any real credentials, employee data, school records, company alerts, logs, cases, supplier information, incidents, detection logic, intelligence, metrics, or confidential SOC details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Security operations is an evidence-to-decision system, not merely an alert queue.",
            "Tool severity, triage priority, incident severity, business criticality, confidence, and urgency are different.",
            "Strong case records preserve scope, evidence, timelines, reasoning, ownership, decisions, communications, validation, and closure.",
            "Detection improvements require complete testing, staging, monitoring, versioning, rollback, and outcome validation.",
            "Escalation and communication should match the real audience, authority, decision, deadline, and evidence limits.",
            "Threat intelligence improves context but never replaces local validation.",
            "Metrics should measure real quality and outcomes while exposing gaming risks and limitations.",
            "Assigned actions are progress; validated security and business outcomes are completion.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Finish Module I15
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