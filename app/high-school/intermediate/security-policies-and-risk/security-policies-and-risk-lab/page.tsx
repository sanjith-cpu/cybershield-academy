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
const previousLesson = `${modulePath}/security-metrics-reporting-and-review`;
const nextPage = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional governance, assets, data, business impact, risk assessment, treatment, standards, exceptions, suppliers, metrics, reporting, and review into one defensible case.",
  "Separate fictional direct observations, supported conclusions, assumptions, alternatives, uncertainty, missing evidence, potential impact, confirmed impact, and decision authority.",
  "Build a fictional governance and risk package with owners, evidence, controls, treatment, deadlines, validation, residual-risk decisions, monitoring, and closure criteria.",
  "Prioritize fictional actions using business criticality, active exposure, control health, supplier dependency, recovery needs, confidence, and implementation readiness.",
  "Create a portfolio-safe fictional capstone artifact that demonstrates professional reasoning without using real organizational records, credentials, incidents, or private data."
];
const vocabulary = [
  [
    "Governance package",
    "A fictional collection of charters, responsibility maps, policies, standards, controls, evidence, decisions, exceptions, metrics, and review records."
  ],
  [
    "Risk register",
    "A fictional record of scenarios, assets, threats, vulnerabilities, controls, likelihood, impact, confidence, owners, treatments, and review dates."
  ],
  [
    "Business-impact analysis",
    "A fictional analysis of critical services, dependencies, disruption effects, recovery objectives, minimum service, and recovery priorities."
  ],
  [
    "Control objective",
    "A fictional statement describing the business or security outcome that a safeguard must achieve."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after current or planned controls, limitations, dependencies, exceptions, and uncertainty are considered."
  ],
  [
    "Compensating control",
    "A fictional alternate safeguard that addresses the same control objective when the preferred control is temporarily impractical."
  ],
  [
    "Exception",
    "A fictional approved and time-bound departure from a requirement with narrow scope, owners, controls, residual risk, expiration, monitoring, and sunset planning."
  ],
  [
    "Third-party risk",
    "A fictional risk arising from suppliers, service providers, software components, data processors, subcontractors, or external dependencies."
  ],
  [
    "Metric definition",
    "A fictional description of a metric’s purpose, scope, numerator, denominator, exclusions, source, frequency, target, threshold, owner, and limits."
  ],
  [
    "Evidence confidence",
    "A fictional judgment about how strongly the supplied records support a conclusion."
  ],
  [
    "Decision authority",
    "The fictional approved power to accept risk, approve policy, authorize an exception, fund treatment, escalate delay, or close a finding."
  ],
  [
    "Validation",
    "Fictional evidence that a control, recovery path, process, exception removal, supplier exit, or corrective action works as intended."
  ],
  [
    "Closure criteria",
    "Fictional conditions that must be satisfied before a finding, risk, exception, treatment, or action is considered complete."
  ],
  [
    "Reassessment trigger",
    "A fictional date or event that requires renewed review, such as a major change, failed test, incident, supplier change, deadline, or evidence gap."
  ],
  [
    "Leadership summary",
    "A fictional concise report that translates technical and risk evidence into business meaning, uncertainty, options, ownership, and decisions."
  ],
  [
    "Portfolio-safety statement",
    "A statement confirming that all organizations, systems, identities, suppliers, records, incidents, and evidence in the artifact are fictional."
  ]
];
const caseOverview = [
  {
    "area": "Governance",
    "observation": "The fictional Information Security Policy is overdue for annual review.",
    "meaning": "Current owners, scope, requirements, and business priorities need formal reassessment.",
    "limit": "An overdue review does not prove the policy or controls are ineffective."
  },
  {
    "area": "Supplier access",
    "observation": "One fictional support-vendor account remains active after the project and exception ended.",
    "meaning": "The account requires immediate removal or narrow authorized renewal.",
    "limit": "No unauthorized use, malicious intent, or disclosure is confirmed."
  },
  {
    "area": "Recovery ownership",
    "observation": "The fictional Reporting Service has technical operators but no confirmed business recovery risk owner.",
    "meaning": "Business authority for recovery priority and residual risk is unclear.",
    "limit": "Technical recovery failure is not proven."
  },
  {
    "area": "Data recovery",
    "observation": "One fictional historical support collection is outside backup scope because the owner believes it can be reconstructed.",
    "meaning": "Reconstruction must be tested or recovery protection added.",
    "limit": "No current data loss is confirmed."
  },
  {
    "area": "Metrics",
    "observation": "The fictional dashboard reports ninety-eight percent policy compliance without a documented denominator or excluded-system list.",
    "meaning": "Organization-wide interpretation is unsupported.",
    "limit": "The measured systems may still perform strongly."
  },
  {
    "area": "Supplier concentration",
    "observation": "Several fictional critical services depend on one cloud platform.",
    "meaning": "Regional, recovery, evidence-access, and exit planning require review.",
    "limit": "No provider-controlled outage or incident is shown."
  },
  {
    "area": "Incident improvement",
    "observation": "A fictional supplier-offboarding lesson remains open without a policy or procedure owner.",
    "meaning": "The weakness may recur unless converted into owned governance and control changes.",
    "limit": "Some operational improvement may exist outside the supplied tracker."
  },
  {
    "area": "Security evidence",
    "observation": "One fictional storage source provides partial rather than complete object-level activity evidence.",
    "meaning": "Monitoring confidence is reduced and compensating evidence must be reviewed.",
    "limit": "Partial evidence does not prove compromise."
  }
];
const evidenceSources = [
  {
    "id": "EV-01",
    "source": "Policy register",
    "supports": "Policy owner, approval, version, effective date, review cycle, current status, and overdue review.",
    "health": "Current metadata; policy content requires formal review.",
    "limitation": "Does not prove daily control operation."
  },
  {
    "id": "EV-02",
    "source": "Supplier access register",
    "supports": "Account status, sponsor, project end, role scope, exception expiration, and service boundary.",
    "health": "Account and exception records are current.",
    "limitation": "Post-expiration activity coverage is incomplete."
  },
  {
    "id": "EV-03",
    "source": "Asset and dependency register",
    "supports": "Critical services, data, suppliers, owners, identities, networks, recovery dependencies, and concentration.",
    "health": "Most records are current; one recovery owner is missing.",
    "limitation": "Informal dependencies may exist outside the register."
  },
  {
    "id": "EV-04",
    "source": "Risk register",
    "supports": "Risk scenarios, inherent and residual scores, confidence, treatment status, owners, and review dates.",
    "health": "Current enough for the lab; one acceptance review is overdue.",
    "limitation": "Several scores depend on incomplete activity or ownership evidence."
  },
  {
    "id": "EV-05",
    "source": "Recovery exercise records",
    "supports": "RTO, RPO, technical restore, minimum service, user validation, dependencies, and exercise outcomes.",
    "health": "Technical records are complete; business validation is partial.",
    "limitation": "One exercise does not guarantee future recovery."
  },
  {
    "id": "EV-06",
    "source": "Exception register",
    "supports": "Requirements, scope, business reason, controls, approvals, expiration, monitoring, residual risk, and sunset actions.",
    "health": "Current; one exception is expired and one request is incomplete.",
    "limitation": "Exception documentation does not prove compensating-control effectiveness."
  },
  {
    "id": "EV-07",
    "source": "Supplier evidence register",
    "supports": "Criticality, contracts, access, data, control evidence, incidents, recovery, fourth parties, and exit readiness.",
    "health": "Mostly current; one report’s service and region scope is unclear.",
    "limitation": "One assurance report cannot prove every supplier control."
  },
  {
    "id": "EV-08",
    "source": "Metrics dashboard and definitions",
    "supports": "Compliance, access review, supplier evidence, recovery, exception currency, source health, treatment progress, and improvement closure.",
    "health": "Values are current; several definitions need correction.",
    "limitation": "Percentages may hide exclusions, quality, and incomparable scopes."
  }
];
const labPhases = [
  {
    "phase": "1",
    "title": "Establish the charter",
    "task": "Define the fictional business question, scope, assets, services, data, suppliers, owners, authority, evidence, time window, privacy boundary, and expected decisions.",
    "deliverable": "Integrated lab charter."
  },
  {
    "phase": "2",
    "title": "Map governance and ownership",
    "task": "Assign fictional executive, risk, policy, control, asset, data, supplier, recovery, metrics, incident, review, and escalation responsibilities.",
    "deliverable": "Responsibility and authority matrix."
  },
  {
    "phase": "3",
    "title": "Map assets and impact",
    "task": "Connect fictional services, data, users, identities, suppliers, processes, facilities, dependencies, criticality, RTO, RPO, minimum service, and recovery priorities.",
    "deliverable": "Asset, dependency, and BIA package."
  },
  {
    "phase": "4",
    "title": "Build risk scenarios",
    "task": "Document fictional threats, vulnerabilities, exposure, controls, likelihood, impact, assumptions, confidence, alternatives, limits, and owners.",
    "deliverable": "Integrated risk register."
  },
  {
    "phase": "5",
    "title": "Select treatments and controls",
    "task": "Compare fictional avoid, reduce, transfer, accept, and monitor options with control objectives, business fit, dependencies, validation, rollback, and residual risk.",
    "deliverable": "Treatment and control plan."
  },
  {
    "phase": "6",
    "title": "Review policies and exceptions",
    "task": "Map fictional policies, standards, baselines, procedures, guidelines, controls, evidence, exceptions, approvals, expiration, monitoring, and sunset plans.",
    "deliverable": "Document hierarchy and exception register."
  },
  {
    "phase": "7",
    "title": "Review suppliers and metrics",
    "task": "Evaluate fictional supplier scope, access, data, contract controls, concentration, evidence, incidents, recovery, exit, metric definitions, source health, trends, and leadership meaning.",
    "deliverable": "Supplier and metrics review."
  },
  {
    "phase": "8",
    "title": "Prioritize, communicate, and close",
    "task": "Rank fictional actions, assign owners and deadlines, document leadership decisions, validate controls, define reassessment triggers, and produce technical and executive summaries.",
    "deliverable": "Final governance and risk package."
  }
];
const artifactRequirements = [
  "Integrated lab charter with scope, authority, evidence boundary, privacy boundary, owners, deliverables, and decision deadlines.",
  "Governance responsibility matrix covering executive, risk, policy, control, asset, data, supplier, recovery, metrics, incident, review, and escalation roles.",
  "Asset, service, data, supplier, user, dependency, classification, criticality, RTO, RPO, minimum service, and recovery-priority register.",
  "Evidence-quality register with relevance, source health, independence, timeliness, completeness, consistency, traceability, confidence, and limitations.",
  "Risk register with structured scenarios, controls, inherent and residual likelihood and impact, assumptions, alternatives, owners, treatments, and review triggers.",
  "Risk-treatment and control-selection plan with control objectives, business fit, implementation sequence, validation, rollback, monitoring, and residual-risk approval.",
  "Policy, standard, baseline, procedure, guideline, control, evidence, exception, waiver, approval, review, and sunset hierarchy.",
  "Third-party and supply-chain register with services, fourth parties, software components, data, access, responsibilities, concentration, incidents, recovery, monitoring, and exit.",
  "Metrics catalog with purpose, scope, numerator, denominator, exclusions, source health, target, threshold, trend, confidence, owner, business meaning, and actions.",
  "Technical report, leadership summary, action register, validation plan, reassessment plan, reflection, and portfolio-safety statement."
];
const caseRecords = [
  {
    "id": "NBR-LAB-01",
    "topic": "Expired supplier access",
    "facts": "Project ended; exception expired; one limited account remains active; post-expiration activity evidence is incomplete.",
    "risk": "Medium likelihood and High potential impact with Medium-High confidence.",
    "decision": "Remove or narrowly renew through authorized governance.",
    "owner": "Third-Party Risk Owner",
    "validation": "Account is removed or matches renewed scope; approved support remains functional; monitoring is healthy.",
    "limit": "No unauthorized use or disclosure is confirmed."
  },
  {
    "id": "NBR-LAB-02",
    "topic": "Recovery ownership gap",
    "facts": "Reporting Service has a procedure, two technical operators, and a four-hour RTO, but no business recovery owner.",
    "risk": "Medium likelihood and High potential impact with Medium confidence.",
    "decision": "Assign business authority and repeat user validation.",
    "owner": "Business Service Executive",
    "validation": "Owner approves priority, minimum service, exercise result, and residual risk.",
    "limit": "Technical recovery failure is not proven."
  },
  {
    "id": "NBR-LAB-03",
    "topic": "Historical backup exclusion",
    "facts": "One confidential historical collection is outside backup scope; the owner claims it can be reconstructed.",
    "risk": "Residual risk cannot be finalized until reconstruction evidence exists.",
    "decision": "Run a timed reconstruction test or add backup coverage.",
    "owner": "Support Data Owner",
    "validation": "Reconstruction or restore meets approved RTO, completeness, integrity, and access requirements.",
    "limit": "No current data loss is confirmed."
  },
  {
    "id": "NBR-LAB-04",
    "topic": "Policy metric ambiguity",
    "facts": "Dashboard shows ninety-eight percent compliance; excluded legacy systems and denominator are not documented.",
    "risk": "Medium decision-quality risk with High confidence.",
    "decision": "Correct the definition before organization-wide use.",
    "owner": "Security Metrics Owner",
    "validation": "A reviewer can reconstruct the calculation, scope, exclusions, source health, and trend.",
    "limit": "Measured-system performance may be strong."
  },
  {
    "id": "NBR-LAB-05",
    "topic": "Cloud concentration",
    "facts": "Learning, identity, storage, monitoring, and recovery capabilities rely on one fictional cloud platform.",
    "risk": "High structural concentration with Medium-Low current service risk.",
    "decision": "Maintain tested regional recovery, internal evidence access, data portability, and exit planning.",
    "owner": "Cloud Service Owner",
    "validation": "Recovery and exit exercises demonstrate minimum service, data access, evidence preservation, and owner decisions.",
    "limit": "No provider-controlled incident is shown."
  },
  {
    "id": "NBR-LAB-06",
    "topic": "Partial object logging",
    "facts": "One storage collection has function-level and change evidence but incomplete object-level activity logs.",
    "risk": "Medium monitoring and investigation risk.",
    "decision": "Maintain compensating controls and replace the connector within the approved exception window.",
    "owner": "Security Operations and Support Data Owner",
    "validation": "Expected object events arrive, parse, retain, alert, and support investigation.",
    "limit": "Partial evidence does not prove compromise."
  },
  {
    "id": "NBR-LAB-07",
    "topic": "Unowned incident improvement",
    "facts": "Supplier-offboarding improvements were recommended, but policy and procedure ownership is missing.",
    "risk": "Medium-High recurrence risk.",
    "decision": "Assign owners, update the procedure, run an offboarding exercise, and validate closure.",
    "owner": "Governance Improvement Lead",
    "validation": "Access, data, integrations, notifications, monitoring, knowledge transfer, and signoff complete on time.",
    "limit": "Some undocumented operational improvements may exist."
  },
  {
    "id": "NBR-LAB-08",
    "topic": "Overdue policy review",
    "facts": "The Information Security Policy is six fictional months beyond its annual review date.",
    "risk": "Medium governance risk with High confidence.",
    "decision": "Complete stakeholder review, approval, publication, implementation mapping, and communication.",
    "owner": "Security Policy Owner",
    "validation": "Current scope, owners, standards, controls, exceptions, training, and review dates are approved.",
    "limit": "The overdue review does not prove existing controls are ineffective."
  }
];
const priorityActions = [
  {
    "priority": "1",
    "action": "Resolve active stale supplier access",
    "why": "The fictional account remains active after project and exception closure, creating current capability and governance risk.",
    "owner": "Third-Party Risk Owner",
    "deadline": "Within one fictional business day",
    "proof": "Removal or narrow renewal, activity review, service validation, monitoring, and owner signoff."
  },
  {
    "priority": "2",
    "action": "Assign business recovery ownership",
    "why": "A fictional critical service lacks authority for recovery priority, minimum service, validation, and residual risk.",
    "owner": "Business Service Executive",
    "deadline": "Within three fictional business days",
    "proof": "Named owner, approved objectives, exercise participation, decision record, and review date."
  },
  {
    "priority": "3",
    "action": "Validate backup exclusion",
    "why": "A fictional confidential historical collection depends on an untested reconstruction assumption.",
    "owner": "Support Data Owner",
    "deadline": "Within ten fictional business days",
    "proof": "Timed reconstruction or restore test with completeness, integrity, access, and owner approval."
  },
  {
    "priority": "4",
    "action": "Correct leadership metrics",
    "why": "The fictional compliance metric lacks a denominator and exclusions, creating decision-quality risk.",
    "owner": "Security Metrics Owner",
    "deadline": "Before the next fictional leadership meeting",
    "proof": "Definition, calculation, scope, exclusions, source health, confidence, trend, and action rules."
  },
  {
    "priority": "5",
    "action": "Assign and test supplier-offboarding ownership",
    "why": "A fictional lesson learned remains unowned and may not become a lasting governance change.",
    "owner": "Governance Improvement Lead",
    "deadline": "Within fifteen fictional business days",
    "proof": "Updated policy and procedure, assigned roles, exercise, evidence, exceptions, monitoring, and closure."
  },
  {
    "priority": "6",
    "action": "Complete policy review",
    "why": "The fictional policy is overdue and service, supplier, metric, recovery, and exception conditions have changed.",
    "owner": "Security Policy Owner",
    "deadline": "Within thirty fictional days",
    "proof": "Reviewed and approved version, stakeholder comments, control mapping, communication, and next review date."
  }
];
const commonMistakes = [
  "Starting the fictional lab with a preferred conclusion instead of a clear charter and evidence boundary.",
  "Treating one dashboard, alert, exception, or account record as complete proof of an incident or business impact.",
  "Confusing policy ownership, control ownership, risk ownership, asset ownership, data ownership, supplier ownership, and recovery ownership.",
  "Scoring fictional risk without a structured scenario, evidence, time window, assumptions, controls, confidence, and limitations.",
  "Treating potential impact as confirmed impact.",
  "Choosing controls without testing business fit, dependencies, expected allowed behavior, denied behavior, monitoring, rollback, and recovery.",
  "Using an exception without an exact requirement, control objective, narrow scope, owner, expiration, monitoring, residual risk, and sunset plan.",
  "Treating supplier contracts or assurance reports as proof of current technical operation.",
  "Publishing percentages without denominator, exclusions, source health, targets, thresholds, confidence, and decision rules.",
  "Prioritizing document cleanup above active stale access, missing decision authority, or unvalidated recovery.",
  "Closing actions because a ticket or document changed without validating the actual control and business outcome.",
  "Hiding uncertainty, alternate explanations, missing sources, partial coverage, stale evidence, or ownership gaps.",
  "Failing to define event-based reassessment triggers after major changes, incidents, failed tests, supplier changes, or expired approvals.",
  "Using or exposing any real company policy, supplier contract, architecture, access record, employee identity, school data, credential, incident evidence, dashboard, risk register, or confidential business information."
];
const quizQuestions = [
  {
    "question": "What is the strongest first step in the fictional I14 integrated lab?",
    "choices": [
      "Define the charter, decision, scope, owners, authority, evidence boundary, time window, privacy limits, and required outputs.",
      "Choose a control immediately.",
      "Write the leadership summary first.",
      "Assume the highest-impact scenario occurred."
    ],
    "answer": 0,
    "explanation": "A clear charter keeps the entire integrated analysis scoped, authorized, and evidence-based."
  },
  {
    "question": "Which issue should receive the highest immediate priority?",
    "choices": [
      "The fictional active supplier account with an expired exception.",
      "A formatting change to an old policy.",
      "A low-risk optional guideline update.",
      "A future dashboard color redesign."
    ],
    "answer": 0,
    "explanation": "Current stale access creates active capability and requires prompt owner action."
  },
  {
    "question": "What does the fictional missing recovery owner prove?",
    "choices": [
      "Business recovery authority is unclear, but technical recovery failure is not proven.",
      "The service will definitely fail.",
      "A confirmed outage occurred.",
      "The technical procedure is useless."
    ],
    "answer": 0,
    "explanation": "The evidence supports a governance gap while preserving technical uncertainty."
  },
  {
    "question": "How should the fictional historical backup exclusion be resolved?",
    "choices": [
      "Run a timed reconstruction test or add backup coverage, then document residual risk and owner approval.",
      "Assume old data has no value.",
      "Claim data loss already occurred.",
      "Accept the risk permanently without evidence."
    ],
    "answer": 0,
    "explanation": "Recovery assumptions should be validated before residual risk is accepted."
  },
  {
    "question": "What does the fictional ninety-eight percent policy-compliance metric support?",
    "choices": [
      "It may describe the measured systems, but organization-wide interpretation is unsupported until denominator and exclusions are defined.",
      "The organization is ninety-eight percent secure.",
      "Every system is compliant.",
      "The metric proves no risk exists."
    ],
    "answer": 0,
    "explanation": "The strongest conclusion preserves valid measured evidence while correcting unsupported scope."
  },
  {
    "question": "What is required before closing a fictional treatment action?",
    "choices": [
      "Validated control operation, approved business function, residual-risk review, monitoring, owner signoff, and closure evidence.",
      "A completed ticket only.",
      "A new policy title.",
      "A favorable dashboard color."
    ],
    "answer": 0,
    "explanation": "Closure requires evidence that the intended security and business outcomes were achieved."
  },
  {
    "question": "What makes the final fictional I14 lab package defensible?",
    "choices": [
      "It connects governance, assets, evidence, risk, treatment, policies, exceptions, suppliers, metrics, ownership, validation, limitations, decisions, and reassessment.",
      "It hides uncertainty.",
      "It uses real company records.",
      "It treats every possible impact as confirmed."
    ],
    "answer": 0,
    "explanation": "The integrated package should show the complete evidence-to-decision chain."
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
        href={nextPage}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function SecurityPoliciesRiskLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I14.8 Security Policies and Risk Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete an integrated fictional Northbridge case combining
            governance, assets, data, business impact, risk assessment,
            treatment, controls, policies, exceptions, suppliers, metrics,
            leadership reporting, validation, and review.
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
          lessonTitle="Security Policies and Risk Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge governance, asset, data, risk, control, supplier, exception, recovery, metric, and evidence records.",
            "I will not request, expose, or evaluate any real company policy, supplier contract, architecture, access record, employee identity, school data, credential, incident evidence, dashboard, risk register, or confidential business information.",
            "I will separate direct observations, supported conclusions, assumptions, alternatives, confidence, limitations, potential impact, confirmed impact, and missing evidence.",
            "I will assign fictional decision authority and ownership instead of assuming technical staff can accept business risk.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Integrated Case"
          title="Northbridge Needs a Decision-Ready Governance and Risk Package"
        >
          <p className="leading-8">
            The fictional Northbridge leadership team has asked for one
            integrated review. The organization has an overdue security policy,
            active supplier access under an expired exception, unclear business
            recovery ownership, an untested backup assumption, cloud
            concentration, partial storage evidence, misleading metric scope,
            and an unowned supplier-offboarding lesson. Your job is to convert
            these records into accountable, prioritized, evidence-based
            decisions without exaggerating incidents or impact.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak integrated response
              </p>

              <p className="mt-2 leading-7">
                Label everything critical, assume compromise, recommend every
                control, ignore authority and dependencies, and provide a
                dashboard with no decisions or evidence limits.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional integrated response
              </p>

              <p className="mt-2 leading-7">
                Define scope, map ownership, validate evidence, structure risk,
                compare treatment, prioritize active exposure, preserve limits,
                assign decisions, test controls, and report clearly.
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
          eyebrow="Core Model"
          title="Use the Scope–Evidence–Risk–Decision–Validation Cycle"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Scope", "Define the fictional business question, services, data, suppliers, users, owners, authority, time window, and privacy limits."],
              ["Evidence", "Validate fictional relevance, health, completeness, timeliness, independence, traceability, assumptions, and limitations."],
              ["Risk", "Connect fictional assets, threats, vulnerabilities, exposure, controls, likelihood, impact, confidence, and dependencies."],
              ["Decision", "Select fictional treatment, controls, owners, approvals, deadlines, exceptions, communication, and residual-risk authority."],
              ["Validation", "Test fictional security outcome, business function, evidence, monitoring, recovery, closure, and reassessment triggers."],
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
            Integrated Governance and Risk Terms
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
            Case Overview
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Conditions to Integrate
          </h2>

          <div className="mt-6 grid gap-5">
            {caseOverview.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.area}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Direct observation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.observation}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supported meaning
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
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
            Evidence Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Evidence Sources
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceSources.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.source}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Supports
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.supports}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Source health
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.health}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Lab Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete the Integrated Case in Eight Phases
          </h2>

          <div className="mt-6 grid gap-4">
            {labPhases.map((item) => (
              <article
                key={item.phase}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.4fr_1fr_0.7fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.phase}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.task}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">
                    Deliverable:{" "}
                  </span>
                  {item.deliverable}
                </p>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Required Portfolio Artifacts"
          title="Ten Deliverables for the Final I14 Package"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {artifactRequirements.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>

                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Integrated Case Records
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Governance and Risk Register
          </h2>

          <div className="mt-6 grid gap-5">
            {caseRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.topic}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Facts", item.facts],
                    ["Risk", item.risk],
                    ["Decision", item.decision],
                    ["Validation", item.validation],
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
            Priority Action Plan
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Ordered Fictional Actions
          </h2>

          <div className="mt-6 grid gap-5">
            {priorityActions.map((item) => (
              <article
                key={item.priority}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {item.priority}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.action}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Why now
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.why}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Deadline
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.deadline}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Closure proof
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.proof}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Integrated Risk Dashboard"
          subtitle="Training dashboard for fictional I14 lab evidence only."
          metrics={[
            {
              label: "Integrated records",
              value: "8",
              note: "Governance, supplier, recovery, backup, metrics, cloud concentration, monitoring, and improvement issues are mapped.",
            },
            {
              label: "Immediate owner decisions",
              value: "4",
              note: "Stale access, recovery ownership, backup evidence, and metric scope require prompt decisions.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional evidence supports control and governance gaps but no confirmed incident, misuse, outage, or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Integrated Review Finds Active Stale Access and Missing Decision Authority"
          severity="High"
          time="4:00 PM"
          source="Fake I14 Integrated Lab Console"
          details="A fictional supplier account remains active after project and exception closure, while a critical recovery service lacks a confirmed business risk owner."
          recommendation="Prioritize access removal or narrow renewal and assign recovery decision authority. Preserve evidence, confirm business needs, validate controls and service behavior, document residual risk, monitor, and avoid claiming misuse or recovery failure without support."
        />

        <FakeLogPanel
          title="Fake Northbridge Integrated Lab Timeline"
          logs={[
            "09:00 CHARTER scope='I14 integrated governance and risk lab'",
            "09:10 GOVERNANCE policy-review='overdue'",
            "09:20 SUPPLIER account='active' exception='expired'",
            "09:30 RECOVERY business-owner='missing'",
            "09:40 BACKUP historical-collection='excluded'",
            "09:50 METRIC compliance='98%' denominator='undefined'",
            "10:00 CLOUD concentration='multiple critical services'",
            "10:10 LOGGING object-evidence='partial'",
            "10:20 IMPROVEMENT supplier-offboarding owner='missing'",
            "10:30 FINDING confirmed-incident='not supported'",
            "10:40 PRIORITY stale-access='1'",
            "10:50 PRIORITY recovery-ownership='2'",
            "11:00 PRIORITY backup-validation='3'",
            "11:10 PRIORITY metrics-correction='4'",
            "11:20 VALIDATION business-and-security='required'",
            "11:30 CLOSE owner-signoff-and-reassessment='required'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Integrated Conclusion Is Most Defensible?"
          evidence={[
            "The fictional supplier project and exception ended.",
            "One limited supplier account remains active.",
            "A critical reporting service lacks a business recovery owner.",
            "One historical collection is outside backup scope.",
            "The leadership metric lacks a denominator and exclusions.",
            "No supplied evidence confirms unauthorized use, provider incident, data loss, outage, or disclosure.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Northbridge has several prioritized governance, access, recovery, data, supplier, and reporting risks requiring owner decisions and validation, but no confirmed incident or impact is supported.",
            "Northbridge suffered a confirmed major breach.",
            "All risks are low because no incident is confirmed.",
            "Every control should be replaced immediately.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes the seriousness of the control and governance gaps while preserving the evidence boundary."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken the Integrated I14 Lab"
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
          eyebrow="Final Lab Assignment"
          title="Build the Complete Northbridge Security Policies and Risk Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Evidence, Governance, Risk, Controls, Suppliers, Metrics, and Decisions
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the fictional records on this page and the prior I14
                lessons to produce a professional, decision-ready, portfolio-safe
                package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Final quality standard
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>Every finding links to exact fictional evidence.</li>
                <li>Every risk has an owner, treatment, deadline, and review trigger.</li>
                <li>Every control has an objective, evidence, validation, monitoring, and closure test.</li>
                <li>Every exception has scope, authority, expiration, residual risk, and sunset planning.</li>
                <li>Every metric has a definition, source, denominator, exclusions, confidence, and decision use.</li>
                <li>Every leadership statement separates facts, conclusions, uncertainty, potential impact, and confirmed impact.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            All organizations, systems, identities, suppliers, services, records,
            incidents, metrics, and decisions in this lab are fictional. Do not
            use real private organizational information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants the Supplier Account Removed Immediately"
          scenario="The fictional supplier account is stale, but the service owner says one approved support task may still depend on it."
          choices={[
            {
              label: "Choice A",
              response:
                "Confirm the exact task and sponsor, narrow or remove access through authorized change, preserve evidence, validate approved service behavior and denied excess access, monitor, and document residual risk.",
              outcome:
                "Best integrated choice. Active risk is reduced without creating an unapproved service failure.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete every supplier integration without checking dependencies.",
              outcome:
                "Unsafe. The action may create avoidable service disruption.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave the stale account unchanged until misuse is proven.",
              outcome:
                "Weak. Confirmed misuse is not required before correcting unsupported access.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Dashboard Is Green, but Four Decisions Are Overdue"
          scenario="The fictional leadership dashboard shows mostly favorable percentages while stale access, missing recovery ownership, backup uncertainty, and an unowned improvement remain open."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep valid positive results, correct definitions, add scope and confidence, surface overdue decisions, assign owners, and present prioritized actions with closure evidence.",
              outcome:
                "Best integrated choice. Leadership receives balanced and decision-ready reporting.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Report that security is strong because most percentages are green.",
              outcome:
                "Unsupported. Important unresolved risks remain.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete every metric and report only narrative findings.",
              outcome:
                "Weak. Correctly defined metrics remain useful.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Security Policies and Risk Lab Checklist"
          items={[
            "I can define a fictional integrated governance and risk charter with scope, owners, authority, evidence, time window, privacy, and decisions.",
            "I can map fictional policy, risk, control, asset, data, supplier, recovery, metrics, incident, review, and escalation ownership.",
            "I can connect fictional assets, data, services, users, suppliers, dependencies, business impact, criticality, RTO, RPO, and minimum service.",
            "I can write fictional risk scenarios with threats, vulnerabilities, exposure, controls, likelihood, impact, confidence, assumptions, alternatives, and limitations.",
            "I can compare fictional avoid, reduce, transfer, accept, and monitor options and select proportionate controls.",
            "I can evaluate fictional policies, standards, procedures, controls, exceptions, approvals, expiration, monitoring, and sunset plans.",
            "I can evaluate fictional suppliers, fourth parties, software components, access, data, contracts, monitoring, recovery, concentration, and exit.",
            "I can design fictional metrics with numerator, denominator, exclusions, source health, targets, thresholds, confidence, business meaning, and owner actions.",
            "I can prioritize fictional actions using active exposure, criticality, decision authority, recovery needs, evidence quality, and implementation readiness.",
            "I can define fictional validation, closure criteria, residual-risk approval, reassessment triggers, technical reporting, and leadership reporting.",
            "I can preserve the difference between control gaps, potential impact, confirmed impact, and confirmed incidents.",
            "I will use only fictional evidence and never expose real policies, supplier records, company systems, employee data, school records, credentials, incidents, dashboards, or confidential business information.",
          ]}
        />

        <MiniQuiz
          title="I14.8 Mini Quiz: Security Policies and Risk Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Integrated Security Policies and Risk Package for Northbridge. Include the charter, governance and authority matrix, asset and BIA register, evidence-quality register, risk register, treatment and control plan, policy hierarchy, exception register, supplier and supply-chain review, metrics catalog, priority action plan, validation and closure criteria, reassessment triggers, technical report, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional organizations, systems, services, identities, suppliers, data, evidence, incidents, dates, metrics, risks, and decisions.",
            "Do not treat stale access, missing ownership, backup exclusions, provider concentration, partial logs, overdue reviews, or green dashboards as proof of compromise or harmlessness.",
            "Make every conclusion traceable to evidence, confidence, limitations, owner authority, and the next decision.",
            "Prioritize active stale access and missing business decision authority before lower-risk document polish.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Integrated governance and risk work connects business context, ownership, evidence, assets, risk, treatment, policy, suppliers, metrics, and review.",
            "Active stale access can require immediate correction even when misuse is not proven.",
            "Missing decision authority is a governance risk even when technical controls appear strong.",
            "Recovery assumptions, metric definitions, compensating controls, and supplier evidence should be validated rather than trusted automatically.",
            "Positive metrics and serious unresolved risks can exist at the same time.",
            "Closure requires validated security and business outcomes, residual-risk approval, monitoring, owner signoff, and reassessment.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I14
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