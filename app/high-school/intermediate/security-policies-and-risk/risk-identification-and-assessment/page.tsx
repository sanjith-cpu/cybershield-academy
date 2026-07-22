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
const modulePath = `${trackPath}/security-policies-and-risk`;
const previousLesson = `${modulePath}/security-governance-and-policy-foundations`;
const nextLesson = `${modulePath}/asset-data-and-business-impact-analysis`;

const objectives = [
  "Explain how fictional security risk connects assets, threats, vulnerabilities, exposure, control conditions, dependencies, likelihood, impact, uncertainty, ownership, and review.",
  "Distinguish fictional direct observations, assumptions, scenarios, evidence, indicators, control gaps, potential consequences, confirmed impact, confidence, and missing information.",
  "Build a fictional risk register that documents scope, assets, threats, vulnerabilities, controls, likelihood, impact, evidence, assumptions, owners, treatment status, and review dates.",
  "Evaluate fictional risk using transparent criteria instead of relying on dramatic language, one alert, one score, or unsupported certainty.",
  "Create a portfolio-safe fictional risk-assessment package with an evidence register, scenario analysis, scoring rationale, findings, limitations, owners, and reassessment plan."
];
const vocabulary = [
  [
    "Risk",
    "A fictional possibility that a threat could affect an asset or business objective through one or more vulnerabilities or control gaps, creating consequences under uncertain conditions."
  ],
  [
    "Asset",
    "A fictional person, service, system, device, application, data set, process, facility, supplier relationship, reputation, or capability that has value."
  ],
  [
    "Threat",
    "A fictional circumstance, event, actor, failure, mistake, environmental condition, or dependency that could cause harm."
  ],
  [
    "Vulnerability",
    "A fictional weakness, missing safeguard, design flaw, process gap, configuration issue, ownership problem, or dependency that could be used or triggered."
  ],
  [
    "Exposure",
    "The fictional degree to which an asset, service, identity, data set, or process can be reached, affected, influenced, or disrupted."
  ],
  [
    "Control",
    "A fictional preventive, detective, corrective, recovery, deterrent, governance, physical, technical, or administrative safeguard."
  ],
  [
    "Likelihood",
    "A fictional judgment about how plausible a risk scenario is during a defined time period, based on evidence, exposure, controls, history, and uncertainty."
  ],
  [
    "Impact",
    "A fictional judgment about possible consequences to confidentiality, integrity, availability, safety, privacy, finance, operations, reputation, compliance, users, or recovery."
  ],
  [
    "Inherent risk",
    "A fictional estimate of risk before considering the effectiveness of current controls."
  ],
  [
    "Residual risk",
    "A fictional estimate of risk remaining after current or planned controls, exceptions, limitations, and dependencies are considered."
  ],
  [
    "Risk scenario",
    "A fictional structured statement connecting an asset, threat, vulnerability, event path, control condition, and potential consequence."
  ],
  [
    "Risk register",
    "A fictional record of identified risks, evidence, assumptions, likelihood, impact, confidence, owners, treatments, status, and review dates."
  ],
  [
    "Evidence confidence",
    "A fictional rating describing how strongly the supplied records support a risk conclusion."
  ],
  [
    "Assumption",
    "A fictional condition treated as true for analysis even though the supplied evidence does not fully verify it."
  ],
  [
    "Uncertainty",
    "The fictional amount of important information that is unknown, incomplete, delayed, outdated, disputed, or outside the evidence boundary."
  ],
  [
    "Risk appetite",
    "A fictional leadership statement describing the amount and type of risk the organization is generally willing to pursue or retain."
  ]
];
const riskComponents = [
  {
    "component": "Asset and objective",
    "question": "What fictional service, data, identity, process, supplier, user outcome, reputation, or recovery capability must be protected?",
    "evidence": "Asset register, service map, data classification, business owner, user dependency, recovery requirement, and criticality record.",
    "weakness": "Risk is described without identifying the exact thing of value or the business objective that could be affected."
  },
  {
    "component": "Threat condition",
    "question": "Which fictional actor, event, error, failure, environmental condition, dependency, or change could create harm?",
    "evidence": "Incident history, threat reports, supplier notices, failure records, change history, owner interviews, and scenario evidence.",
    "weakness": "The assessment uses vague labels such as cyberattack without describing a plausible event path."
  },
  {
    "component": "Vulnerability or gap",
    "question": "Which fictional weakness, missing control, poor process, stale access, configuration issue, ownership gap, or dependency enables the scenario?",
    "evidence": "Control tests, configuration review, policy gap, exception, access record, procedure failure, and validation results.",
    "weakness": "The assessment treats the threat itself as the vulnerability or assumes a weakness without evidence."
  },
  {
    "component": "Exposure and reachability",
    "question": "How broadly can the fictional condition reach, influence, interrupt, or affect the asset?",
    "evidence": "Access paths, network reachability, user population, supplier connectivity, data flow, privilege scope, and process dependency.",
    "weakness": "The assessment assumes technical capability equals practical exposure without reviewing all controls."
  },
  {
    "component": "Existing controls",
    "question": "Which fictional preventive, detective, corrective, recovery, governance, or compensating controls reduce the scenario?",
    "evidence": "Control design, owner, operating records, test results, metrics, alerts, incidents, exceptions, and remediation status.",
    "weakness": "The assessment lists controls but does not evaluate whether they are current, healthy, complete, or effective."
  },
  {
    "component": "Likelihood",
    "question": "How plausible is the fictional scenario in the defined time window after considering exposure, history, controls, dependencies, and uncertainty?",
    "evidence": "Observed conditions, prior events, control failures, frequency, owner reports, test evidence, supplier status, and environmental change.",
    "weakness": "The score is chosen from intuition without a transparent rationale or confidence statement."
  },
  {
    "component": "Impact",
    "question": "Which fictional confidentiality, integrity, availability, privacy, safety, financial, operational, reputational, legal, or recovery consequences could occur?",
    "evidence": "Business-impact analysis, data class, service criticality, recovery objectives, user dependency, contract, and leadership priorities.",
    "weakness": "Potential impact is written as confirmed impact even though the event has not occurred."
  },
  {
    "component": "Ownership and review",
    "question": "Who owns the fictional asset, risk decision, control operation, treatment, evidence, escalation, and next reassessment?",
    "evidence": "Responsibility matrix, risk register, policy, treatment plan, approval, due date, review date, and closure record.",
    "weakness": "A risk remains open without a decision owner, treatment owner, deadline, or reassessment trigger."
  }
];
const evidenceQualityFields = [
  {
    "field": "Source relevance",
    "strong": "The fictional source directly addresses the asset, threat, control, time window, and decision being evaluated.",
    "weak": "A general or unrelated source is used as if it proves the specific risk.",
    "question": "Does this evidence answer the actual risk question?"
  },
  {
    "field": "Source health",
    "strong": "The fictional source is current, complete enough, accessible, properly scoped, and owned.",
    "weak": "The source is stale, delayed, partial, unowned, or missing important coverage.",
    "question": "Can the source be trusted within the stated boundary?"
  },
  {
    "field": "Independence",
    "strong": "Several fictional sources with different origins support the same conclusion.",
    "weak": "Multiple dashboards, alerts, screenshots, and exports all come from one parent source.",
    "question": "Are these truly separate sources or repeated views of the same evidence?"
  },
  {
    "field": "Timeliness",
    "strong": "The fictional evidence matches the current decision window and preserves event, receipt, review, and approval dates.",
    "weak": "Old evidence is used without checking whether the environment or control changed.",
    "question": "Is the evidence current enough for this decision?"
  },
  {
    "field": "Completeness",
    "strong": "The fictional evidence covers the relevant assets, users, systems, suppliers, regions, controls, and exceptions.",
    "weak": "Important exclusions, blind spots, dependencies, or populations are omitted.",
    "question": "What important part of the scenario is outside the evidence?"
  },
  {
    "field": "Consistency",
    "strong": "Fictional sources agree or differences are explained through timing, scope, ownership, or method.",
    "weak": "Conflicting evidence is ignored or one preferred source is accepted without analysis.",
    "question": "Do the sources tell the same story, and if not, why?"
  },
  {
    "field": "Traceability",
    "strong": "Every fictional finding links to exact records, owners, dates, assumptions, calculations, and review notes.",
    "weak": "The score appears with no explanation of how it was reached.",
    "question": "Can another reviewer reconstruct the conclusion?"
  },
  {
    "field": "Limitations",
    "strong": "Fictional missing data, uncertainty, bias, coverage gaps, assumptions, and alternate explanations are documented.",
    "weak": "The assessment sounds certain despite incomplete evidence.",
    "question": "What can this evidence not prove?"
  }
];
const assessmentFields = [
  {
    "field": "Risk statement",
    "purpose": "Connects a fictional asset, threat, vulnerability, event path, and consequence in one clear scenario.",
    "example": "Because a supplier account remains active after project closure, the supplier could retain access to confidential support records, causing unauthorized access or delayed detection.",
    "quality": "The statement describes a plausible possibility without claiming the event already happened."
  },
  {
    "field": "Inherent likelihood",
    "purpose": "Estimates fictional scenario plausibility before current controls are considered.",
    "example": "Medium-High because the account exists, the project ended, and the supplier previously required broad access.",
    "quality": "The rationale uses evidence and a defined time window."
  },
  {
    "field": "Inherent impact",
    "purpose": "Estimates fictional maximum plausible consequence before current controls are considered.",
    "example": "High because the account could reach confidential support records and affect privacy, trust, and operations.",
    "quality": "Potential impact remains separate from confirmed harm."
  },
  {
    "field": "Control effectiveness",
    "purpose": "Evaluates how strongly fictional preventive, detective, corrective, recovery, and governance controls reduce the scenario.",
    "example": "Network restriction is healthy, but sponsor review and account expiration controls failed.",
    "quality": "Control design and actual operation are evaluated separately."
  },
  {
    "field": "Residual likelihood",
    "purpose": "Estimates fictional plausibility after current controls and weaknesses are considered.",
    "example": "Medium because network restriction reduces reach, but the active account and expired exception remain.",
    "quality": "The score reflects both controls and their limitations."
  },
  {
    "field": "Residual impact",
    "purpose": "Estimates fictional consequence after current controls, recovery, detection, and response capabilities are considered.",
    "example": "Medium-High because access scope is limited but confidential data and delayed detection remain possible.",
    "quality": "Recovery and detection reduce consequence only when evidence supports their effectiveness."
  },
  {
    "field": "Confidence and uncertainty",
    "purpose": "Shows how strongly fictional evidence supports the likelihood and impact judgments.",
    "example": "Medium confidence because account status and scope are known but post-expiration activity logs are incomplete.",
    "quality": "Uncertainty changes the wording and review priority rather than being hidden."
  },
  {
    "field": "Owner and review trigger",
    "purpose": "Assigns fictional decision authority, treatment ownership, due date, reassessment date, and event-based triggers.",
    "example": "Third-Party Risk Owner reviews in seven fictional days or immediately if supplier activity appears.",
    "quality": "The risk cannot remain open without an accountable decision and next review."
  }
];
const riskRecords = [
  {
    "id": "NBR-RISK-01",
    "asset": "Confidential support records",
    "scenario": "A fictional supplier account remains active after the related project and exception ended.",
    "evidence": "Account status, expired exception, completed project, sponsor record, access scope, and incomplete post-expiration activity logs.",
    "likelihood": "Medium",
    "impact": "High",
    "confidence": "Medium-High",
    "owner": "Third-Party Risk Owner",
    "limit": "No unauthorized sign-in, record access, or disclosure is confirmed."
  },
  {
    "id": "NBR-RISK-02",
    "asset": "Critical reporting service",
    "scenario": "A fictional service could experience delayed recovery because no business recovery risk owner is confirmed.",
    "evidence": "Criticality record, recovery procedure, operator roster, missing risk owner, recovery objective, and escalation map.",
    "likelihood": "Medium",
    "impact": "High",
    "confidence": "Medium",
    "owner": "Business Service Executive",
    "limit": "The service may still recover successfully with the existing technical team."
  },
  {
    "id": "NBR-RISK-03",
    "asset": "Organization-wide access governance",
    "scenario": "A fictional business unit may retain inappropriate access because its quarterly review is incomplete.",
    "evidence": "Access-review schedule, completed units, incomplete unit, role inventory, owner reminder, and review procedure.",
    "likelihood": "Medium",
    "impact": "Medium-High",
    "confidence": "Medium",
    "owner": "Identity Governance",
    "limit": "No specific inappropriate account or action is confirmed."
  },
  {
    "id": "NBR-RISK-04",
    "asset": "Leadership decision quality",
    "scenario": "Fictional leaders could make poor security decisions because the ninety-eight percent compliance metric excludes undocumented systems.",
    "evidence": "Dashboard, metric definition, asset inventory, excluded-system uncertainty, control records, and owner response.",
    "likelihood": "Medium-High",
    "impact": "Medium",
    "confidence": "High",
    "owner": "Security Metrics Owner",
    "limit": "The measured systems may still have strong control performance."
  },
  {
    "id": "NBR-RISK-05",
    "asset": "Supplier offboarding process",
    "scenario": "Fictional stale supplier access could recur because an incident improvement action has no assigned policy or procedure owner.",
    "evidence": "Incident review, offboarding recommendation, action tracker, ownership matrix, supplier procedure, and current gap.",
    "likelihood": "Medium-High",
    "impact": "High",
    "confidence": "Medium-High",
    "owner": "Governance Improvement Lead",
    "limit": "Some operational improvement may exist outside the supplied governance records."
  },
  {
    "id": "NBR-RISK-06",
    "asset": "Encryption exception process",
    "scenario": "Fictional encryption exceptions could be approved inconsistently because the standard does not name a validation owner.",
    "evidence": "Encryption standard, exception template, control-owner map, approval path, and review records.",
    "likelihood": "Medium",
    "impact": "High",
    "confidence": "Medium",
    "owner": "Security Architecture",
    "limit": "No weak encryption or exposed data is confirmed."
  },
  {
    "id": "NBR-RISK-07",
    "asset": "Residual-risk decisions",
    "scenario": "A fictional accepted risk could remain unmanaged because its six-month review date passed without renewal or closure evidence.",
    "evidence": "Risk decision, approval, expiration, treatment status, owner record, and missing reassessment.",
    "likelihood": "Medium",
    "impact": "Medium-High",
    "confidence": "High",
    "owner": "Executive Risk Owner",
    "limit": "The underlying risk may have changed since the last decision."
  },
  {
    "id": "NBR-RISK-08",
    "asset": "Information security policy framework",
    "scenario": "Fictional control requirements could become misaligned because the main policy review is overdue while services and suppliers changed.",
    "evidence": "Policy review date, current service inventory, supplier changes, new dependencies, control map, and governance calendar.",
    "likelihood": "Medium",
    "impact": "Medium",
    "confidence": "Medium-High",
    "owner": "Security Policy Owner",
    "limit": "The policy may remain substantively accurate despite the overdue review."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Define the fictional risk question",
    "detail": "State the asset, business objective, scope, time window, authority, owners, evidence, privacy limits, scoring method, and prohibited real-world use.",
    "output": "Risk-assessment charter."
  },
  {
    "step": "2",
    "title": "Identify assets and dependencies",
    "detail": "Map fictional services, data, users, identities, suppliers, processes, facilities, technologies, recovery needs, and dependency chains.",
    "output": "Asset and dependency register."
  },
  {
    "step": "3",
    "title": "Build risk scenarios",
    "detail": "Connect fictional threats, vulnerabilities, exposure, event paths, control conditions, and potential consequences.",
    "output": "Structured risk-scenario library."
  },
  {
    "step": "4",
    "title": "Validate evidence quality",
    "detail": "Review fictional relevance, health, independence, timeliness, completeness, consistency, traceability, assumptions, and limitations.",
    "output": "Evidence-quality register."
  },
  {
    "step": "5",
    "title": "Evaluate likelihood and impact",
    "detail": "Score fictional inherent and residual risk using transparent criteria, current controls, business context, uncertainty, and confidence.",
    "output": "Risk scoring rationale."
  },
  {
    "step": "6",
    "title": "Prioritize and compare",
    "detail": "Compare fictional risk level, criticality, control weakness, uncertainty, dependency, decision deadline, and remediation readiness.",
    "output": "Risk-ranked register."
  },
  {
    "step": "7",
    "title": "Assign owners and next actions",
    "detail": "Document fictional risk owner, treatment owner, evidence owner, due date, escalation, review trigger, and required decision.",
    "output": "Owned risk action plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional findings, alternatives, confidence, limitations, leadership meaning, residual risk, reassessment, and portfolio safety.",
    "output": "Reviewed risk-assessment package."
  }
];
const findings = [
  {
    "id": "NBR-RISK-F01",
    "statement": "The fictional expired supplier exception creates a high-impact residual-risk scenario because the account remains active, but the supplied evidence does not confirm post-expiration use.",
    "support": "Exception expiration, account status, project closure, sponsor record, access scope, network restriction, and incomplete activity evidence.",
    "alternative": "The supplier may still have an approved business need that was not documented on time.",
    "confidence": "Medium-High",
    "limitation": "No unauthorized sign-in, record access, or disclosure is confirmed."
  },
  {
    "id": "NBR-RISK-F02",
    "statement": "The fictional critical reporting service has a material recovery-governance risk because technical operation is assigned but business recovery ownership is unclear.",
    "support": "Service criticality, recovery procedure, operator roster, recovery objective, missing risk owner, and escalation map.",
    "alternative": "An informal business owner may exist outside the supplied records.",
    "confidence": "Medium",
    "limitation": "The ownership gap does not prove recovery would fail."
  },
  {
    "id": "NBR-RISK-F03",
    "statement": "The fictional ninety-eight percent compliance metric creates a decision-quality risk because the denominator and excluded systems are not defined.",
    "support": "Dashboard, metric definition, asset inventory, excluded-system uncertainty, control records, and metric-owner response.",
    "alternative": "The percentage may be accurate within a narrower undocumented scope.",
    "confidence": "High",
    "limitation": "The finding does not prove poor control operation in the measured systems."
  },
  {
    "id": "NBR-RISK-F04",
    "statement": "The fictional supplier-offboarding risk is likely to recur unless the incident lesson is assigned to policy, procedure, control, and review owners.",
    "support": "Incident recommendation, action tracker, missing owner, supplier access exception, procedure gap, and governance matrix.",
    "alternative": "Operational teams may have changed practice without updating governance evidence.",
    "confidence": "Medium-High",
    "limitation": "Current supplier offboarding performance is only partially evidenced."
  },
  {
    "id": "NBR-RISK-F05",
    "statement": "The fictional risk register should separate score confidence from risk level because several high-impact scenarios rely on incomplete activity or ownership evidence.",
    "support": "Supplier activity gap, informal-owner possibility, incomplete access review, metric exclusions, and stale decision records.",
    "alternative": "Additional records may raise or lower both likelihood and confidence.",
    "confidence": "High",
    "limitation": "Confidence does not directly replace likelihood or impact."
  },
  {
    "id": "NBR-RISK-F06",
    "statement": "The safest immediate sequence is to resolve active stale access and missing decision ownership before revising lower-priority documentation and metrics.",
    "support": "Active supplier account, critical-service owner gap, stale risk acceptance, overdue access review, policy review, and metric ambiguity.",
    "alternative": "Leadership may reorder actions based on current business deadlines or incident conditions.",
    "confidence": "High",
    "limitation": "Final priority requires fictional risk-owner approval."
  }
];
const commonMistakes = [
  "Treating fictional risk as a dramatic event description instead of a structured connection among asset, threat, vulnerability, exposure, controls, likelihood, and impact.",
  "Using the words threat, vulnerability, exposure, and risk as if they mean the same thing.",
  "Scoring likelihood or impact without stating the time window, criteria, evidence, assumptions, and confidence.",
  "Treating a high potential impact as proof that the impact already occurred.",
  "Treating an active account, broad permission, overdue review, or missing owner as proof of malicious activity.",
  "Listing controls without checking whether they are designed well, operating, monitored, current, complete, and owned.",
  "Using several screenshots or dashboards from one parent system as independent evidence.",
  "Ignoring supplier, process, people, recovery, governance, and ownership dependencies because the assessment focuses only on technology.",
  "Treating uncertainty as a reason to avoid a decision instead of documenting assumptions, confidence, limits, and review triggers.",
  "Using a numeric score without a written scenario and rationale.",
  "Allowing a technical analyst to accept residual business risk without documented authority.",
  "Leaving risks open without a risk owner, treatment owner, due date, escalation, review date, or event-based trigger.",
  "Closing a fictional risk because a ticket is complete without validating the control, residual risk, evidence, and owner approval.",
  "Using or exposing any real private risk register, company architecture, employee identity, supplier contract, school record, credential, incident evidence, or confidential business information."
];
const quizQuestions = [
  {
    "question": "What makes a fictional risk scenario complete?",
    "choices": [
      "It connects an asset, threat, vulnerability or gap, exposure, control condition, event path, and potential consequence.",
      "It contains only a severity score.",
      "It names only the threat.",
      "It assumes a confirmed incident."
    ],
    "answer": 0,
    "explanation": "A complete risk scenario explains how harm could occur and what could be affected."
  },
  {
    "question": "What is the difference between fictional inherent and residual risk?",
    "choices": [
      "Inherent risk is estimated before current controls, while residual risk is estimated after current controls and their limitations are considered.",
      "They are identical.",
      "Residual risk is always zero.",
      "Inherent risk includes only confirmed incidents."
    ],
    "answer": 0,
    "explanation": "The two views show the effect and limitations of current controls."
  },
  {
    "question": "Which conclusion about an active fictional supplier account is strongest?",
    "choices": [
      "The active account and expired exception create a risk and governance gap, but use and impact are not proven without activity evidence.",
      "The supplier stole data.",
      "A confirmed breach occurred.",
      "The account is harmless because no incident is confirmed."
    ],
    "answer": 0,
    "explanation": "The strongest conclusion recognizes the control gap and preserves the evidence limits."
  },
  {
    "question": "Why should fictional evidence confidence be recorded separately from risk level?",
    "choices": [
      "A risk may be high while the evidence supporting likelihood, impact, or scope is incomplete or uncertain.",
      "Confidence automatically replaces impact.",
      "Low confidence means no action is needed.",
      "High confidence proves an incident occurred."
    ],
    "answer": 0,
    "explanation": "Risk level and evidence strength answer different questions."
  },
  {
    "question": "What makes fictional likelihood scoring defensible?",
    "choices": [
      "A defined time window, transparent criteria, exposure, history, control effectiveness, dependencies, evidence, assumptions, and uncertainty.",
      "One analyst’s intuition.",
      "The highest possible score.",
      "Only the asset value."
    ],
    "answer": 0,
    "explanation": "Likelihood should be reasoned and reproducible."
  },
  {
    "question": "Who should normally own a fictional residual-risk decision?",
    "choices": [
      "An authorized business risk owner with current evidence and defined decision authority.",
      "Any technical analyst.",
      "The control tool vendor.",
      "The person who created the spreadsheet."
    ],
    "answer": 0,
    "explanation": "Residual-risk acceptance is a business decision, not merely a technical task."
  },
  {
    "question": "What makes a fictional risk finding defensible?",
    "choices": [
      "It links the scenario, assets, evidence, controls, likelihood, impact, confidence, assumptions, alternatives, limitations, owners, and review plan.",
      "It relies on one score.",
      "It hides uncertainty.",
      "It treats possible harm as confirmed harm."
    ],
    "answer": 0,
    "explanation": "Defensible risk analysis is transparent, evidence-based, owned, and reviewable."
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

export default function RiskIdentificationAssessmentPage() {
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
              Module I14
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I14.2 Risk Identification and Assessment
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders identify fictional assets, threats,
            vulnerabilities, exposure, controls, likelihood, impact,
            uncertainty, ownership, and review needs while creating transparent
            and evidence-based risk assessments.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I14: Security Policies and Risk"
          lessonTitle="Risk Identification and Assessment"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge risk, asset, supplier, control, ownership, and evidence records.",
            "I will not request, expose, or evaluate any real private risk register, company architecture, supplier contract, employee identity, school record, credential, incident evidence, or confidential business information.",
            "I will distinguish assets, threats, vulnerabilities, exposure, controls, likelihood, impact, assumptions, uncertainty, and confidence.",
            "I will not treat possible consequences as confirmed incidents or confirmed impact.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A High Risk Score Is Not Useful without a Clear Scenario"
        >
          <p className="leading-8">
            The fictional Northbridge risk register contains several high or
            medium-high ratings, but the strongest records explain exactly what
            could happen, which asset could be affected, which weakness enables
            the scenario, which controls reduce it, how likely it is, what
            impact could occur, how confident the evidence is, who owns the
            decision, and when the risk must be reassessed.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak assessment
              </p>

              <p className="mt-2 leading-7">
                Assign a dramatic score, copy an alert into the register,
                assume the worst impact, hide uncertainty, and leave the risk
                without a decision owner or review date.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional assessment
              </p>

              <p className="mt-2 leading-7">
                Define the scenario, validate evidence, assess controls,
                explain likelihood and impact, record confidence and limits,
                assign ownership, and schedule reassessment.
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
          title="Risk Decisions Guide Where Time, Money, Attention, and Authority Go"
        >
          <p className="leading-8">
            Fictional organizations cannot fix every weakness at once. Risk
            assessment helps them compare scenarios using business value,
            exposure, control health, likelihood, impact, uncertainty, and
            ownership. A weak assessment can waste resources, delay urgent
            action, exaggerate harmless conditions, or hide major dependencies.
            A strong assessment makes the reasoning visible so another reviewer
            can challenge, improve, and approve it.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Asset–Scenario–Evidence–Decision Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Asset", "Which fictional service, data, identity, process, supplier, user outcome, reputation, or recovery capability has value?"],
              ["Scenario", "Which fictional threat, vulnerability, exposure, event path, control condition, and consequence form a plausible risk?"],
              ["Evidence", "Which fictional records support likelihood, impact, control effectiveness, assumptions, alternatives, confidence, and limitations?"],
              ["Decision", "Which fictional owner selects treatment, accepts residual risk, funds action, escalates delay, validates closure, and sets reassessment?"],
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
            Risk Identification, Evidence, and Decision Terms
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
            Risk Components
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Parts of a Defensible Fictional Risk Scenario
          </h2>

          <div className="mt-6 grid gap-5">
            {riskComponents.map((item) => (
              <article
                key={item.component}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.component}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review question
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak assessment
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.weakness}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Evidence Quality
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Trusting a Fictional Risk Score
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceQualityFields.map((item) => (
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
                      Strong evidence use
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak evidence use
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Risk Register Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for Transparent Fictional Risk Assessment
          </h2>

          <div className="mt-6 grid gap-5">
            {assessmentFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Risk Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Risk Records
          </h2>

          <div className="mt-6 grid gap-5">
            {riskRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.asset}
                  </h3>

                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    L: {item.likelihood}
                  </span>

                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    I: {item.impact}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.scenario}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Risk owner
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.owner}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Evidence limit
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete a Fictional Risk Identification and Assessment
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
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

        <FakeDashboardCard
          title="Fake Northbridge Risk Assessment Dashboard"
          subtitle="Training dashboard for fictional risk evidence only."
          metrics={[
            {
              label: "Risk records reviewed",
              value: "8",
              note: "Supplier, recovery, identity, metrics, offboarding, encryption, residual-risk, and policy scenarios are mapped.",
            },
            {
              label: "High-impact scenarios",
              value: "4",
              note: "Supplier access, recovery ownership, offboarding recurrence, and encryption exceptions require prioritized review.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional evidence supports risk scenarios and control gaps but no confirmed incident or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Supplier Exception with Active Account"
          severity="High"
          time="10:15 AM"
          source="Fake Risk Assessment Console"
          details="A fictional supplier account remains active after the related project and access exception ended. The account can reach a limited support service, but post-expiration activity evidence is incomplete."
          recommendation="Document the asset, scenario, controls, exposure, likelihood, impact, confidence, and limitations. Confirm the sponsor and current need, review activity, remove or renew access through authorized governance, validate the outcome, monitor, assign a risk owner, and avoid claiming unauthorized use without evidence."
        />

        <FakeLogPanel
          title="Fake Northbridge Risk Assessment Records"
          logs={[
            "09:00 CHARTER scope='risk identification and assessment'",
            "09:08 ASSET support-records classification='confidential'",
            "09:15 THREAT stale-supplier-access scenario='plausible'",
            "09:22 VULNERABILITY exception='expired' account='active'",
            "09:29 CONTROL network-scope='limited' sponsor-review='failed'",
            "09:36 EVIDENCE activity-logs='incomplete'",
            "09:43 LIKELIHOOD residual='Medium'",
            "09:50 IMPACT potential='High' confirmed='none'",
            "09:57 CONFIDENCE='Medium-High'",
            "10:04 OWNER third-party-risk='assigned'",
            "10:12 REVIEW trigger='7 days or supplier activity'",
            "10:20 RISK recovery-owner-gap='Medium x High'",
            "10:28 RISK metric-denominator='Medium-High x Medium'",
            "10:36 RISK offboarding-recurrence='Medium-High x High'",
            "10:44 FINDING confirmed_incident='not supported'",
            "10:52 PRIORITY stale-access_and_owner-gaps='first'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Risk Findings and Limits
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

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>

                    <p className="mt-2 text-sm leading-6">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="What Does the Active Supplier Account Support?"
          evidence={[
            "The fictional supplier project ended.",
            "The access exception expired.",
            "The supplier account remains active.",
            "The account can reach only a limited support service.",
            "Post-expiration activity evidence is incomplete.",
            "No unauthorized sign-in, record access, or disclosure is shown.",
            "An authorized owner can remove or formally renew the access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The active account and expired exception create a medium-likelihood, high-impact risk scenario requiring owner action, but unauthorized use and impact are not proven.",
            "The supplier stole confidential records.",
            "A confirmed incident occurred.",
            "No action is needed because no misuse is shown.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes the control gap, explains the risk, and preserves the evidence limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Risk Identification and Assessment"
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
          title="Build the Northbridge Risk Identification and Assessment Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Assets, Scenarios, Evidence, Scoring, Ownership, and Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end risk identification and assessment.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Risk-assessment charter with scope, owners, evidence, time window, method, privacy, and deliverables.</li>
                <li>Asset, service, data, supplier, user, recovery, and dependency register.</li>
                <li>Structured risk scenarios with threats, vulnerabilities, exposure, controls, and consequences.</li>
                <li>Evidence-quality review with assumptions, alternatives, confidence, and limitations.</li>
                <li>Inherent and residual likelihood and impact rationale.</li>
                <li>Risk-ranked register with owners, due dates, treatment status, and review triggers.</li>
                <li>Findings with evidence, alternatives, confidence, limitations, and decision needs.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real company, employee, supplier, contract,
            credential, school, incident, or confidential risk information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Risk Score Is High, but Activity Evidence Is Incomplete"
          scenario="The fictional supplier account remains active after the exception expired, but the supplied logs do not cover the full post-expiration period."
          choices={[
            {
              label: "Choice A",
              response:
                "Record the control gap, potential high impact, medium likelihood, evidence confidence, missing activity data, owner action, and immediate review trigger without claiming unauthorized use.",
              outcome:
                "Best risk-assessment choice. The risk is prioritized while uncertainty remains visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare a confirmed supplier breach.",
              outcome:
                "Unsupported. The evidence does not confirm use or impact.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Rate the risk low because no misuse is confirmed.",
              outcome:
                "Weak. Active stale access still creates a meaningful risk scenario.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Critical Service Has a Recovery Procedure but No Risk Owner"
          scenario="The fictional reporting service has technical operators and a tested procedure, but no authorized business owner for recovery risk decisions."
          choices={[
            {
              label: "Choice A",
              response:
                "Document medium likelihood, high potential impact, the existing technical controls, the ownership gap, confidence limits, and escalation to leadership for risk ownership.",
              outcome:
                "Best risk-assessment choice. Control strength and governance weakness are both represented.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume recovery will fail.",
              outcome:
                "Unsupported. The procedure and technical team may still recover the service.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the risk because a procedure exists.",
              outcome:
                "Weak. Business decision authority remains unresolved.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Risk Identification and Assessment Checklist"
          items={[
            "I can define a fictional risk question with scope, assets, time window, owners, authority, evidence, method, and privacy limits.",
            "I can distinguish fictional assets, threats, vulnerabilities, exposure, controls, likelihood, impact, assumptions, uncertainty, and confidence.",
            "I can write structured fictional risk scenarios without claiming that possible events already occurred.",
            "I can evaluate fictional evidence through relevance, health, independence, timeliness, completeness, consistency, traceability, and limitations.",
            "I can explain fictional inherent and residual likelihood and impact using transparent criteria.",
            "I can separate risk level from evidence confidence.",
            "I can identify preventive, detective, corrective, recovery, governance, and compensating controls and assess their actual operation.",
            "I can assign fictional risk owners, treatment owners, evidence owners, due dates, escalation paths, review dates, and event-based triggers.",
            "I can write fictional findings with evidence, assumptions, alternatives, confidence, limitations, potential impact, confirmed impact, and next decisions.",
            "I will use only fictional evidence and never expose real risk registers, company systems, supplier contracts, employee identities, school records, credentials, incidents, or confidential business information.",
          ]}
        />

        <MiniQuiz
          title="I14.2 Mini Quiz: Risk Identification and Assessment"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Risk Identification and Assessment Package for Northbridge. Include the assessment charter, asset and dependency register, risk scenarios, evidence-quality register, assumptions, likelihood and impact criteria, inherent and residual risk, control-effectiveness review, confidence and limitations, risk register, priority rationale, owner and treatment map, reassessment triggers, technical summary, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional assets, services, identities, suppliers, risks, evidence, owners, dates, scores, and decisions.",
            "Do not treat a high score, active account, overdue review, missing owner, or weak control as proof of an incident or confirmed impact.",
            "Make every score traceable to a scenario, evidence, controls, assumptions, time window, and confidence level.",
            "Show where technical analysis ends and authorized business risk ownership begins.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Risk assessment connects assets, threats, vulnerabilities, exposure, controls, likelihood, impact, uncertainty, ownership, and review.",
            "A strong risk record explains the scenario and rationale instead of presenting only a score.",
            "Potential impact is not the same as confirmed impact.",
            "Inherent risk is assessed before current controls, while residual risk considers control effectiveness and limitations.",
            "Evidence confidence should be recorded separately from risk level.",
            "Residual-risk decisions require authorized business ownership and scheduled reassessment.",
            "Portfolio artifacts should use fully fictional risk evidence and never expose real organizational records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I14
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