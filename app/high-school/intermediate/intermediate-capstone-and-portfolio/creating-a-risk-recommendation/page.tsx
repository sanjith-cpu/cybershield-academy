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
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;
const previousLesson = `${modulePath}/creating-a-security-diagram`;
const nextLesson = `${modulePath}/explaining-technical-evidence-clearly`;

const objectives = [
  "Define a fictional risk-recommendation purpose, audience, asset, business service, threat, weakness, control state, evidence boundary, privacy rule, owner, decision authority, and time horizon.",
  "Translate fictional technical findings into clear risk statements that separate likelihood, impact, control effectiveness, uncertainty, potential harm, confirmed harm, and residual risk.",
  "Compare fictional treatment options such as avoid, reduce, transfer, accept, defer, monitor, compensate, or combine controls without assuming the highest technical severity always determines business priority.",
  "Write proportionate fictional recommendations with rationale, owner, authority, priority, deadline, dependencies, continuity considerations, rollback, success measures, validation, communication, and residual risk.",
  "Produce a complete fictional risk-recommendation package with evidence, scoring rationale, assumptions, alternatives, decision criteria, implementation plan, validation plan, leadership summary, reflection, and portfolio-safety statement."
];
const vocabulary = [
  [
    "Risk recommendation",
    "A fictional decision-ready statement explaining what should be done about a defined risk, why, by whom, by when, under what conditions, and how success will be validated."
  ],
  [
    "Risk statement",
    "A fictional sentence connecting an asset or service, harmful event, weakness, possible consequence, and business impact."
  ],
  [
    "Asset",
    "A fictional system, identity, service, dataset, process, supplier relationship, reputation, capability, or mission outcome that has value."
  ],
  [
    "Threat",
    "A fictional event, actor, condition, failure, misuse, error, or dependency that could cause harm."
  ],
  [
    "Weakness",
    "A fictional control gap, excessive access, insecure configuration, missing process, source-health issue, design flaw, or unvalidated state."
  ],
  [
    "Likelihood",
    "A fictional estimate of how plausible or frequent the harmful event may be within a defined time horizon and evidence boundary."
  ],
  [
    "Impact",
    "A fictional estimate of harm to confidentiality, integrity, availability, privacy, safety, operations, finance, compliance, trust, or mission."
  ],
  [
    "Inherent risk",
    "The fictional risk level before considering relevant controls or treatments."
  ],
  [
    "Control effectiveness",
    "A fictional assessment of whether a control is designed appropriately, operating as expected, monitored, validated, and sufficient for the risk."
  ],
  [
    "Residual risk",
    "The fictional risk or uncertainty remaining after controls, corrective action, monitoring, validation, or accepted limitation."
  ],
  [
    "Risk owner",
    "The fictional role accountable for deciding how the risk is treated and whether residual risk is accepted."
  ],
  [
    "Control owner",
    "The fictional role responsible for implementing, operating, monitoring, and validating a specific control."
  ],
  [
    "Risk treatment",
    "A fictional choice to avoid, reduce, transfer, accept, defer, monitor, compensate, or combine actions for a risk."
  ],
  [
    "Compensating control",
    "A fictional alternate safeguard that reduces risk when the preferred control cannot be implemented immediately."
  ],
  [
    "Decision criteria",
    "The fictional evidence, thresholds, service constraints, policy needs, cost, time, dependencies, and residual-risk limits used to select an option."
  ],
  [
    "Validation measure",
    "A fictional test, metric, owner signoff, effective-state check, service-health result, monitoring result, or review confirming whether the treatment worked."
  ]
];
const diagramTypes = [
  {
    "type": "Asset and business context",
    "best_for": "What fictional system, service, identity, data, supplier relationship, or mission outcome matters?",
    "include": "Name the asset, classification, business purpose, owner, dependency, users, criticality, and recovery expectation.",
    "avoid": "Use a vague label such as important server.",
    "question": "Service catalog, owner statement, architecture, data classification, dependency map, or recovery objective.",
    "portfolio_value": "Shows that risk begins with business value rather than a technical score."
  },
  {
    "type": "Threat or harmful event",
    "best_for": "What fictional event, failure, misuse, dependency, or condition could cause harm?",
    "include": "Describe the event neutrally without assuming intent or a specific actor unless evidence supports it.",
    "avoid": "Use a dramatic threat label that already assumes compromise.",
    "question": "Alert, scenario, incident pattern, supplier dependency, process failure, or control-state evidence.",
    "portfolio_value": "Demonstrates evidence-limited threat reasoning."
  },
  {
    "type": "Weakness or exposure condition",
    "best_for": "Which fictional control gap makes the event more plausible or impactful?",
    "include": "Describe the exact unsupported access, configuration, process, source, design, or validation gap.",
    "avoid": "State only that security is weak.",
    "question": "Configuration history, role map, policy review, test result, source-health record, or owner confirmation.",
    "portfolio_value": "Connects technical evidence to the risk mechanism."
  },
  {
    "type": "Likelihood",
    "best_for": "How plausible is the fictional harmful event within the stated time horizon?",
    "include": "Use exposure, activity, frequency, control state, opportunity, dependency, and uncertainty.",
    "avoid": "Copy a scanner score directly into the likelihood field.",
    "question": "Activity records, exposure state, historical frequency, control coverage, user interaction, and source limitations.",
    "portfolio_value": "Shows a transparent, reviewable likelihood rationale."
  },
  {
    "type": "Impact",
    "best_for": "What fictional harm could occur and what harm is already confirmed?",
    "include": "Separate potential impact, confirmed impact, service effect, data effect, user effect, financial effect, policy effect, and trust effect.",
    "avoid": "Describe the worst possible outcome as current fact.",
    "question": "Service health, access evidence, data classification, owner input, user interaction, and validation results.",
    "portfolio_value": "Demonstrates accurate impact language."
  },
  {
    "type": "Control effectiveness",
    "best_for": "Which fictional controls exist and how well are they operating?",
    "include": "Separate expected, observed, failed, corrected, compensating, monitored, and validated states.",
    "avoid": "Assume a control is effective because it appears in a policy or diagram.",
    "question": "Configuration, test results, logs, monitoring, owner review, exception status, and validation.",
    "portfolio_value": "Shows why control existence and control effectiveness differ."
  },
  {
    "type": "Treatment options",
    "best_for": "Which fictional options could avoid, reduce, transfer, accept, defer, monitor, compensate, or combine treatment?",
    "include": "Compare benefit, limitation, owner, authority, continuity, time, dependency, rollback, and residual risk.",
    "avoid": "Present one option without alternatives or tradeoffs.",
    "question": "Technical feasibility, business constraints, owner input, service dependencies, policy, and implementation estimates.",
    "portfolio_value": "Demonstrates balanced decision support."
  },
  {
    "type": "Recommendation and validation",
    "best_for": "Which fictional option is preferred and how will the organization know it worked?",
    "include": "State rationale, owner, authority, priority, deadline, implementation, rollback, success measures, monitoring, and residual risk.",
    "avoid": "Write improve security or fix immediately.",
    "question": "Decision criteria, owner approval, action plan, effective-state checks, service tests, metrics, and signoff.",
    "portfolio_value": "Turns analysis into accountable action."
  }
];
const diagramElements = [
  {
    "element": "Avoid",
    "meaning": "Stop the fictional activity, remove the service, eliminate the dependency, or redesign the process so the risk source no longer exists.",
    "label": "Best when the activity is unnecessary or cannot be reduced to an acceptable level.",
    "evidence": "Business need, alternatives, service impact, owner authority, migration plan, and validation.",
    "mistake": "Tradeoff: may remove capability, increase transition cost, or create a new dependency."
  },
  {
    "element": "Reduce",
    "meaning": "Lower fictional likelihood or impact through access changes, secure configuration, monitoring, segmentation, training, or process improvement.",
    "label": "Best when practical controls can reduce risk while preserving the required service.",
    "evidence": "Control design, owner, implementation plan, rollback, service test, monitoring, and success measure.",
    "mistake": "Tradeoff: controls can create complexity, delay, user friction, or operational dependency."
  },
  {
    "element": "Transfer",
    "meaning": "Shift part of fictional financial, contractual, operational, or service responsibility to another party while retaining oversight.",
    "label": "Best when a supplier, insurer, managed service, or contract can absorb defined responsibilities.",
    "evidence": "Contract terms, shared responsibility, supplier capability, monitoring, escalation, and exit plan.",
    "mistake": "Tradeoff: accountability, reputation, compliance, and some technical responsibility remain."
  },
  {
    "element": "Accept",
    "meaning": "Formally retain fictional residual risk because treatment cost, feasibility, timing, or business need supports the decision.",
    "label": "Best when residual risk is within approved tolerance and the correct owner accepts it knowingly.",
    "evidence": "Risk statement, alternatives, rationale, owner authority, expiration, monitoring, and review triggers.",
    "mistake": "Tradeoff: the organization remains exposed and must monitor conditions that could change the decision."
  },
  {
    "element": "Defer",
    "meaning": "Postpone fictional treatment to a defined date because of dependency, maintenance window, service constraint, or competing priority.",
    "label": "Best when immediate treatment would create greater harm and a controlled delay is supportable.",
    "evidence": "Reason, owner approval, deadline, compensating controls, escalation triggers, and reassessment.",
    "mistake": "Tradeoff: risk remains active during the delay."
  },
  {
    "element": "Monitor",
    "meaning": "Continue fictional evidence collection and threshold-based review when uncertainty is high or conditions are stable but unresolved.",
    "label": "Best when current evidence does not justify disruptive treatment and monitoring can detect meaningful change.",
    "evidence": "Signals, thresholds, source health, owner, cadence, response trigger, and closure condition.",
    "mistake": "Tradeoff: monitoring alone does not reduce the underlying weakness."
  },
  {
    "element": "Compensate",
    "meaning": "Use a fictional alternate safeguard when the preferred control cannot be implemented immediately.",
    "label": "Best when the substitute meaningfully reduces likelihood or impact and can be validated.",
    "evidence": "Control mapping, limitation, owner, expiration, test results, monitoring, and replacement plan.",
    "mistake": "Tradeoff: alternate controls may be narrower, manual, or less durable."
  },
  {
    "element": "Combine",
    "meaning": "Use several fictional treatments together because no single action addresses the full risk.",
    "label": "Best when risk spans identity, configuration, process, supplier, monitoring, and communication dimensions.",
    "evidence": "Integrated plan, owners, authority, milestones, dependencies, rollback, metrics, and residual risk.",
    "mistake": "Tradeoff: combined plans require stronger sequencing, ownership, and validation."
  }
];
const qualityChecks = [
  {
    "check": "1. Recommendation title and decision",
    "question": "State the fictional action requested in one clear sentence.",
    "pass": "Include the risk name, preferred treatment, owner, priority, and decision deadline.",
    "fail": "Avoid vague titles such as improve security."
  },
  {
    "check": "2. Risk statement",
    "question": "Connect the fictional asset, harmful event, weakness, consequence, and business impact.",
    "pass": "Include asset, event, weakness, possible consequence, business effect, time horizon, and evidence boundary.",
    "fail": "Avoid unsupported actor attribution or worst-case impact stated as fact."
  },
  {
    "check": "3. Evidence and assumptions",
    "question": "Explain the fictional records supporting the risk and uncertainty affecting confidence.",
    "pass": "Include evidence identifiers, source health, owner statements, confirmed facts, assumptions, alternatives, gaps, and limits.",
    "fail": "Avoid technical volume without relevance."
  },
  {
    "check": "4. Likelihood and impact rationale",
    "question": "Explain how fictional likelihood and impact were estimated.",
    "pass": "Include exposure, activity, control state, criticality, data, service, users, policy, trust, and uncertainty factors.",
    "fail": "Avoid copying one technical score into the entire risk rating."
  },
  {
    "check": "5. Current and residual risk",
    "question": "Separate fictional inherent risk, current controls, current residual risk, and expected post-treatment residual risk.",
    "pass": "Include controls, effectiveness, gaps, compensating controls, monitoring, validation, and tolerance.",
    "fail": "Avoid claiming zero risk after treatment."
  },
  {
    "check": "6. Treatment comparison",
    "question": "Compare fictional alternatives fairly.",
    "pass": "Include benefits, limitations, continuity, time, owner, dependencies, rollback, and residual risk.",
    "fail": "Avoid presenting only one option or weakening alternatives unfairly."
  },
  {
    "check": "7. Preferred recommendation",
    "question": "Explain why the selected fictional treatment is proportionate.",
    "pass": "Include rationale, owner, authority, priority, scope, deadline, sequence, rollback, communication, and residual risk.",
    "fail": "Avoid vague action language or unsafe real-system instructions."
  },
  {
    "check": "8. Implementation, validation, and review",
    "question": "Define how the fictional treatment will be completed, proven effective, communicated, and reassessed.",
    "pass": "Include milestones, owners, service tests, effective-state checks, source health, metrics, signoff, residual risk, and review date.",
    "fail": "Avoid treating ticket completion as validation."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the risk question",
    "detail": "Identify the fictional asset, service, owner, decision, time horizon, scope, evidence, privacy boundary, and threshold.",
    "output": "Risk-review charter."
  },
  {
    "step": "2",
    "title": "Validate evidence",
    "detail": "Register fictional technical, business, owner, service, source-health, control, user, supplier, and validation evidence with limitations.",
    "output": "Evidence and assumption register."
  },
  {
    "step": "3",
    "title": "Write the risk statement",
    "detail": "Connect fictional asset, harmful event, weakness, possible consequence, business impact, and uncertainty without overstating harm.",
    "output": "Risk statement."
  },
  {
    "step": "4",
    "title": "Assess likelihood and impact",
    "detail": "Use fictional exposure, activity, control state, criticality, continuity, data, users, policy, trust, and uncertainty.",
    "output": "Risk rationale."
  },
  {
    "step": "5",
    "title": "Compare treatment options",
    "detail": "Evaluate fictional avoid, reduce, transfer, accept, defer, monitor, compensate, and combined options with tradeoffs.",
    "output": "Treatment comparison."
  },
  {
    "step": "6",
    "title": "Write the recommendation",
    "detail": "State fictional preferred action, rationale, owner, authority, priority, deadline, dependencies, sequence, rollback, and residual risk.",
    "output": "Decision-ready recommendation."
  },
  {
    "step": "7",
    "title": "Plan implementation and validation",
    "detail": "Define fictional milestones, owners, service tests, effective-state checks, metrics, monitoring, signoff, and review triggers.",
    "output": "Implementation and validation plan."
  },
  {
    "step": "8",
    "title": "Communicate, approve, and review",
    "detail": "Tailor fictional technical, service, leadership, supplier, user, and portfolio summaries, record the decision, and schedule reassessment.",
    "output": "Approved risk package and reflection."
  }
];
const findings = [
  {
    "id": "NBR-RSK-F01",
    "statement": "The fictional supplier-access condition creates a high current likelihood of unauthorized capability but does not prove malicious use.",
    "support": "Expired approval, active administrative identity, post-expiration sign-in, ended project, and no current business need.",
    "alternative": "An undocumented emergency support need may have existed.",
    "confidence": "High",
    "impact": "Unsupported capability could affect confidential service data or configuration; misuse and disclosure remain unconfirmed.",
    "next": "Remove access, review sessions and activity, and require future narrow time-limited approval."
  },
  {
    "id": "NBR-RSK-F02",
    "statement": "The fictional broad storage policy creates high potential confidentiality impact with incomplete evidence of actual access.",
    "support": "Confidential classification, broad-read condition, outside-window change, no approved exception, and limited access coverage.",
    "alternative": "A legitimate temporary sharing need may have existed but was not recorded.",
    "confidence": "High",
    "impact": "Possible exposure is supported; unauthorized access and disclosure are unconfirmed.",
    "next": "Restore approved access, review covered evidence, add drift detection, and improve source coverage."
  },
  {
    "id": "NBR-RSK-F03",
    "statement": "The fictional telemetry gap increases uncertainty and weakens monitoring-control effectiveness.",
    "support": "Thirty-eight-minute delivery gap, privileged coverage, compensating records, source recovery, and delayed evidence.",
    "alternative": "A nonsecurity delivery failure may explain the outage.",
    "confidence": "High",
    "impact": "Monitoring assurance was reduced; harmful activity during the gap is unconfirmed.",
    "next": "Add failover, delay alerting, gap reconstruction, source-coverage review, and closure guidance."
  },
  {
    "id": "NBR-RSK-F04",
    "statement": "The fictional phishing scenario supports targeted identity treatment rather than broad account reset.",
    "support": "High-confidence malicious message, one click, no reported credential entry, and no confirmed compromise.",
    "alternative": "The user may have entered information but failed to remember or report it.",
    "confidence": "Medium-High",
    "impact": "Credential theft was possible; one click is confirmed while compromise remains unconfirmed.",
    "next": "Complete targeted identity review, remove related messages, guide the user, and monitor defined indicators."
  },
  {
    "id": "NBR-RSK-F05",
    "statement": "The fictional web authorization gap requires targeted role correction and related access review.",
    "support": "Support role reached a manager-only route, no approved exception existed, and corrected role tests passed.",
    "alternative": "Documentation may have been outdated, but the owner confirmed the intended restriction.",
    "confidence": "High",
    "impact": "Unauthorized page view is confirmed; modification and wider disclosure are unconfirmed.",
    "next": "Maintain route restriction, review inherited mappings, and add automated authorization tests."
  },
  {
    "id": "NBR-RSK-F06",
    "statement": "The preferred fictional recommendation is a combined treatment plan rather than broad shutdown or monitoring alone.",
    "support": "Confirmed access and configuration weaknesses, stable services, reversible targeted actions, and open process improvements.",
    "alternative": "Broad shutdown could reduce technical exposure faster but would create disproportionate operational harm.",
    "confidence": "High",
    "impact": "Poor treatment could leave serious gaps active or unnecessarily interrupt service.",
    "next": "Approve targeted immediate controls plus ninety-day automation, monitoring, governance, and review improvements."
  },
  {
    "id": "NBR-RSK-F07",
    "statement": "The fictional residual risk is moderate after validation and should remain under monitored owner review.",
    "support": "Access, policy, route, source, user, and service validation passed while recurrence and process improvements remain open.",
    "alternative": "New evidence or failed monitoring could increase the rating.",
    "confidence": "Medium-High",
    "impact": "Immediate unsupported states are corrected, but sustainable prevention is not yet fully implemented.",
    "next": "Maintain monitoring, complete milestones, and reassess at thirty, sixty, and ninety days."
  }
];
const commonMistakes = [
  "Using a fictional scanner score, alert severity, or technical label as the entire risk assessment.",
  "Writing a risk statement without naming the asset, harmful event, weakness, consequence, or business impact.",
  "Treating malicious intent, unauthorized access, disclosure, or compromise as confirmed without evidence.",
  "Ignoring service continuity, users, suppliers, time, dependencies, and operational constraints.",
  "Presenting only one treatment option and hiding meaningful alternatives.",
  "Choosing broad shutdown when targeted reversible treatment can reduce risk safely.",
  "Choosing monitoring alone while confirmed high-impact control weaknesses remain active.",
  "Treating a compensating control as permanent without expiration, limitation, owner, monitoring, or replacement plan.",
  "Writing vague recommendations without owner, authority, priority, deadline, dependencies, rollback, validation, or residual risk.",
  "Treating ticket completion as proof that treatment worked.",
  "Claiming zero residual risk after correction.",
  "Using the same detail for technical teams, service owners, leadership, suppliers, users, and portfolio reviewers.",
  "Copying or lightly editing real risk registers, internal findings, systems, supplier records, logs, employee data, school records, or confidential material.",
  "Turning the recommendation into instructions for accessing, testing, changing, or probing real systems."
];
const quizQuestions = [
  {
    "question": "What makes a fictional risk statement complete?",
    "choices": [
      "It identifies the asset, harmful event, weakness, possible consequence, business impact, time horizon, and evidence boundary.",
      "It includes a High label.",
      "It names a threat actor.",
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
    "question": "What is the strongest fictional treatment when unsupported access exists and services remain stable?",
    "choices": [
      "Targeted reversible correction plus validation, monitoring, and longer-term control improvement.",
      "Broad shutdown without review.",
      "Monitoring only.",
      "Ignore the issue until annual review."
    ],
    "answer": 0,
    "explanation": "Treatment should reduce current risk proportionately while preserving continuity."
  },
  {
    "question": "What does a compensating control require?",
    "choices": [
      "A defined purpose, limitation, owner, expiration, monitoring, validation, and replacement plan.",
      "No review because it is temporary.",
      "Permanent acceptance.",
      "Only a policy statement."
    ],
    "answer": 0,
    "explanation": "Temporary controls must still be accountable and measurable."
  },
  {
    "question": "What makes a fictional recommendation actionable?",
    "choices": [
      "Rationale, owner, authority, priority, deadline, dependencies, sequencing, rollback, success measures, validation, communication, and residual risk.",
      "The phrase fix immediately.",
      "A long technical appendix.",
      "A severe title."
    ],
    "answer": 0,
    "explanation": "Actionable recommendations specify who, what, why, when, and how success is proven."
  },
  {
    "question": "When should fictional residual risk be reassessed?",
    "choices": [
      "After treatment, validation, meaningful condition changes, monitoring triggers, exceptions, or scheduled review dates.",
      "Never after acceptance.",
      "Only after an outage.",
      "Only when leadership asks."
    ],
    "answer": 0,
    "explanation": "Residual risk changes as controls, evidence, exposure, and business conditions change."
  },
  {
    "question": "What makes a fictional risk recommendation portfolio-safe?",
    "choices": [
      "All assets, systems, identities, suppliers, evidence, dates, findings, decisions, actions, and outcomes are invented.",
      "Only passwords are removed.",
      "Real risk data is used with different names.",
      "A real internal recommendation is shortened."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required."
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function CreatingARiskRecommendationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 5 of 8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Risk Recommendation</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.5 Creating a Risk Recommendation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Convert fictional technical evidence into a proportionate,
            decision-ready risk recommendation that explains likelihood,
            impact, controls, options, ownership, implementation, validation,
            communication, and residual risk.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Creating a Risk Recommendation"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional assets, services, identities, suppliers, findings, evidence, controls, dates, decisions, and outcomes.",
            "I will not copy, lightly edit, upload, or expose real risk registers, internal findings, company systems, supplier records, employee data, school records, screenshots, logs, or confidential recommendations.",
            "I will distinguish fictional technical severity, business risk, likelihood, potential impact, confirmed impact, control effectiveness, current residual risk, and expected post-treatment residual risk.",
            "I will compare meaningful treatment options and identify owner authority, continuity, dependencies, validation, and residual risk.",
            "I will not create instructions for probing, accessing, testing, or changing real systems.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Highest Technical Score Is Not Always the Best First Business Decision">
          <p className="leading-8">
            A fictional dashboard marks a storage policy, telemetry gap,
            phishing message, and web authorization issue High. Treating every
            item the same could cause broad shutdown, unnecessary account
            resets, or ignored dependencies. A professional recommendation
            explains what matters, what is confirmed, which treatment is
            proportionate, and how the outcome will be validated.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak recommendation</p>
              <p className="mt-2 leading-7">
                Copy severity, assume worst-case impact, present one option,
                ignore continuity, assign no owner, set no deadline, and treat
                ticket closure as success.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional recommendation</p>
              <p className="mt-2 leading-7">
                Define the asset, write the risk statement, assess likelihood
                and impact, compare options, select proportionate treatment,
                assign owners, preserve continuity, validate, and state residual risk.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Risk Recommendations Connect Technical Evidence to Authorized Business Action">
          <p className="leading-8">
            Fictional analysts may identify the condition, but risk owners,
            service owners, control owners, suppliers, leadership, and recovery
            teams decide and perform different parts of treatment. The
            recommendation must make those boundaries, tradeoffs, timelines,
            and validation requirements visible.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Asset–Threat–Weakness–Impact–Treatment Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Asset", "Which fictional system, service, identity, data, supplier relationship, process, or mission outcome has value?"],
              ["Threat", "Which fictional event, misuse, failure, dependency, or condition could create harm?"],
              ["Weakness", "Which fictional access, configuration, process, source, control, design, or validation gap makes harm more plausible?"],
              ["Impact", "Which fictional confidentiality, integrity, availability, privacy, operational, policy, trust, or mission consequences are possible or confirmed?"],
              ["Treatment", "Which fictional avoid, reduce, transfer, accept, defer, monitor, compensate, or combined option is proportionate and how will it be validated?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Risk, Treatment, Ownership, and Validation Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Risk Components</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Components of a Decision-Ready Risk Recommendation</h2>
          <div className="mt-6 grid gap-5">
            {diagramTypes.map((item) => (
              <article key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Risk question", item.best_for],
                    ["Strong approach", item.include],
                    ["Weak approach", item.avoid],
                    ["Evidence needed", item.question],
                    ["Decision value", item.portfolio_value],
                  ].map(([label, detail]) => (
                    <div key={`${item.type}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Treatment Options</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Ways to Treat Risk</h2>
          <div className="mt-6 grid gap-5">
            {diagramElements.map((item) => (
              <article key={item.element} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.element}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Meaning", item.meaning],
                    ["Best when", item.label],
                    ["Evidence needed", item.evidence],
                    ["Tradeoff", item.mistake],
                  ].map(([label, detail]) => (
                    <div key={`${item.element}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Recommendation Architecture</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Sections of a Professional Fictional Recommendation</h2>
          <div className="mt-6 grid gap-5">
            {qualityChecks.map((item) => (
              <article key={item.check} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.check}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.question}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Include</p>
                    <p className="mt-2 text-sm leading-6">{item.pass}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Avoid</p>
                    <p className="mt-2 text-sm leading-6">{item.fail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Risk Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Evidence to Approval</h2>
          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span>
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                <p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Risk Recommendation Dashboard"
          subtitle="Training dashboard for fictional risk decisions only."
          metrics={[
            { label: "Current priority risks", value: "3", note: "Unsupported supplier access, broad confidential-storage access, and monitoring-source weakness require coordinated treatment." },
            { label: "Preferred treatment", value: "Combined", note: "Targeted immediate correction plus ninety-day automation, monitoring, governance, and review improvements." },
            { label: "Expected residual risk", value: "Moderate", note: "Immediate control states are corrected while recurrence, source coverage, and process improvements remain under review." },
          ]}
        />

        <FakeAlertCard
          title="Draft Recommendation Proposes Broad Shutdown without Proportionate Evidence"
          severity="High"
          time="1:42 PM"
          source="Fake Northbridge Risk Review Console"
          details="A fictional draft recommends disabling the entire support service even though services remain stable, confirmed harm is limited, and targeted reversible corrections are available."
          recommendation="Compare meaningful options, preserve continuity, select targeted immediate correction plus longer-term improvements, assign owners and deadlines, define rollback and validation, and state residual risk."
        />

        <FakeLogPanel
          title="Fake Risk Recommendation Timeline"
          logs={[
            "09:00 SCOPE asset='support-service'",
            "09:15 EVIDENCE supplier-access='unsupported'",
            "09:30 EVIDENCE storage-policy='broad-read'",
            "09:45 EVIDENCE audit-source='gap'",
            "10:00 IMPACT confidentiality='possible'",
            "10:15 IMPACT service='stable'",
            "10:30 OPTION shutdown='disproportionate'",
            "10:45 OPTION monitor-only='insufficient'",
            "11:00 OPTION targeted-correction='preferred'",
            "11:15 OPTION combined-plan='preferred-full'",
            "11:30 OWNER risk='assigned'",
            "11:45 PLAN milestones='defined'",
            "12:00 VALIDATION measures='defined'",
            "12:15 COMM leadership='drafted'",
            "12:30 REVIEW residual-risk='moderate'",
            "12:45 DECISION recommendation='ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Risk Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Seven Fictional Risk Findings</h2>
          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact", item.impact],
                    ["Next action", item.next],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which Treatment Is Most Proportionate?"
          evidence={[
            "The fictional supplier access is unsupported and currently unnecessary.",
            "The fictional storage policy creates possible exposure but no confirmed disclosure.",
            "The fictional web route has an authorization gap.",
            "The fictional audit source has recovered but needs stronger failover.",
            "The fictional services remain stable and business-critical.",
            "Targeted reversible corrections and long-term improvements are available.",
          ]}
          question="Which recommendation is strongest?"
          options={[
            "Approve targeted immediate access and configuration correction plus a ninety-day combined improvement plan with owners, validation, monitoring, and residual-risk review.",
            "Disable every service immediately.",
            "Monitor only and leave confirmed control weaknesses active.",
            "Accept every risk permanently because no disclosure is confirmed.",
          ]}
          bestAnswer={0}
          explanation="The preferred treatment reduces confirmed control risk proportionately while preserving service continuity and addressing sustainable prevention."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken a Fictional Risk Recommendation">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Northbridge Fictional Risk Recommendation Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Risk Statement, Evidence, Options, Recommendation, Implementation, and Validation</h3>
              <p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge evidence to create a complete decision-ready recommendation for technical, service, leadership, and portfolio audiences.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Risk-review charter with purpose, audience, asset, service, owner, decision, time horizon, scope, privacy, and threshold.</li>
                <li>Evidence and assumption register with relevance, source health, facts, alternatives, gaps, and limitations.</li>
                <li>Risk statement linking asset, harmful event, weakness, possible consequence, business impact, and evidence boundary.</li>
                <li>Likelihood, impact, inherent-risk, control-effectiveness, current-residual-risk, and post-treatment-residual-risk rationale.</li>
                <li>Meaningful treatment comparison covering avoid, reduce, transfer, accept, defer, monitor, compensate, and combine.</li>
                <li>Preferred recommendation with rationale, owner, authority, priority, deadline, dependencies, continuity, rollback, and communication.</li>
                <li>Implementation and validation plan with milestones, effective-state checks, service tests, source health, metrics, monitoring, and signoff.</li>
                <li>Technical summary, service summary, leadership brief, owner decision, reflection, revision history, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Use only fictional and privacy-safe material. Do not copy, lightly edit, expose, or recreate real risk registers, company findings, systems, identities, supplier records, screenshots, logs, employee data, school records, incidents, or confidential recommendations.</div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Requests Immediate Full Shutdown"
          scenario="The fictional service is stable, confirmed harm is limited, and targeted reversible corrections can reduce current access and configuration risk."
          choices={[
            { label: "Choice A", response: "Recommend targeted immediate correction plus monitored longer-term improvement, while explaining why broad shutdown is disproportionate to current evidence.", outcome: "Best risk choice. The recommendation reduces serious risk while preserving continuity.", tone: "best" },
            { label: "Choice B", response: "Approve full shutdown without comparing alternatives.", outcome: "Weak. The operational harm is not justified by the supplied evidence.", tone: "risk" },
            { label: "Choice C", response: "Do nothing because no disclosure is confirmed.", outcome: "Unsafe. Confirmed high-impact control weaknesses remain active.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="The Corrective Tickets Are Complete"
          scenario="Fictional access, policy, and route changes are recorded, but effective state, source health, service function, owner signoff, monitoring, and residual risk still require validation."
          choices={[
            { label: "Choice A", response: "Keep the recommendation open until the defined validation measures and residual-risk review are complete.", outcome: "Best governance choice. Ticket completion does not prove treatment effectiveness.", tone: "best" },
            { label: "Choice B", response: "Close the risk because every ticket is complete.", outcome: "Premature. The actual outcome is not fully validated.", tone: "risk" },
            { label: "Choice C", response: "Claim zero residual risk after the changes.", outcome: "Unsupported. Sustainable prevention and uncertainty remain.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Creating a Risk Recommendation Checklist"
          items={[
            "I can define a fictional asset, service, owner, decision, time horizon, scope, evidence boundary, privacy rule, and risk threshold.",
            "I can write a fictional risk statement connecting asset, harmful event, weakness, consequence, and business impact.",
            "I can distinguish fictional technical severity, likelihood, potential impact, confirmed impact, control effectiveness, inherent risk, and residual risk.",
            "I can compare fictional avoid, reduce, transfer, accept, defer, monitor, compensate, and combined treatment options.",
            "I can include fictional business criticality, service continuity, users, suppliers, time, dependencies, and operational constraints.",
            "I can write a fictional recommendation with rationale, owner, authority, priority, deadline, sequencing, rollback, communication, validation, and residual risk.",
            "I can define fictional effective-state checks, service tests, source-health checks, metrics, monitoring, owner signoff, and reassessment triggers.",
            "I can tailor fictional technical, service, leadership, supplier, user, and portfolio summaries while preserving the same facts.",
            "I can explain fictional feedback, revision, decision, remaining uncertainty, and next improvement.",
            "I will never expose or recreate real assets, systems, identities, suppliers, risk registers, screenshots, logs, employee data, school records, incidents, or confidential recommendations.",
          ]}
        />

        <MiniQuiz title="I17.5 Mini Quiz: Creating a Risk Recommendation" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Northbridge Risk Recommendation Package. Include the review charter, asset and service context, owner and authority map, risk statement, evidence register, assumptions, alternatives, likelihood rationale, impact rationale, inherent risk, current controls, control effectiveness, current residual risk, treatment comparison, preferred recommendation, implementation plan, dependencies, continuity, rollback, validation measures, metrics, monitoring, communication plan, owner decision, post-treatment residual risk, reassessment schedule, technical summary, leadership brief, reflection, revision history, and a portfolio-safety statement."
          tips={[
            "Use only fictional assets, systems, identities, suppliers, evidence, dates, findings, decisions, actions, and outcomes.",
            "Do not copy a technical severity score into the entire business-risk decision.",
            "Compare meaningful options and explain why the preferred treatment is proportionate.",
            "Show why completed actions, validated outcomes, accepted residual risk, and zero risk are different ideas.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Risk recommendations connect fictional technical evidence to authorized business decisions.",
            "A complete risk statement identifies the asset, harmful event, weakness, consequence, impact, time horizon, and evidence boundary.",
            "Technical severity is only one input to likelihood, impact, priority, continuity, and treatment.",
            "Strong recommendations compare meaningful treatment options and explain tradeoffs.",
            "Every recommendation needs an owner, authority, deadline, dependencies, rollback, validation, monitoring, and residual-risk statement.",
            "Ticket completion is not the same as treatment effectiveness.",
            "Portfolio risk artifacts must be fully fictional and should never expose or recreate real internal risk information.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I17</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}